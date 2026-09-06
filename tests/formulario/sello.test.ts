import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { SEGUNDOS_MINIMOS, emitirSello, verificarSello } from '@/lib/formulario/sello'

/**
 * El sello de tiempo del antispam.
 *
 * Es la segunda pieza que se prueba porque tiene la propiedad que hace valiosa
 * una prueba: **falla en silencio hacia los dos lados**. Si la verificación se
 * ablanda, el spam entra y nadie lo relaciona con este archivo; si se endurece
 * —o si lanza una excepción con una entrada rara—, deja fuera a una persona
 * real y se pierde un encargo sin que aparezca en ningún sitio. Ninguna de las
 * dos cosas rompe una página.
 *
 * El módulo es puro dado el entorno: el secreto se lee dentro de cada llamada
 * (`configFormularios()`), así que basta con fijar la variable antes de llamar,
 * sin simular ningún módulo.
 */

const SECRETO = 'secreto-de-prueba'
/** El momento del que cuelga todo. Da igual cuál sea, pero tiene que ser fijo. */
const AHORA = new Date('2026-09-10T15:00:00.000Z')

function conSecreto(valor: string | undefined): void {
  vi.stubEnv('FORM_TOKEN_SECRET', valor)
  vi.stubEnv('LEAD_IP_SALT', undefined)
}

/** El sello que emitiría el servidor ahora mismo, ya partido. */
function selloNuevo(): { instante: string; firma: string; entero: string } {
  const entero = emitirSello()
  if (!entero) throw new Error('se esperaba un sello')
  const corte = entero.indexOf('.')
  return {
    instante: entero.slice(0, corte),
    firma: entero.slice(corte + 1),
    entero,
  }
}

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(AHORA)
  conSecreto(SECRETO)
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllEnvs()
})

describe('sin secreto configurado', () => {
  /**
   * La regla que manda sobre todas las demás: una variable de entorno que falta
   * en un despliegue no puede convertirse en un formulario que rechaza a todo
   * el mundo.
   */
  it('no emite sello y deja pasar cualquier cosa', () => {
    conSecreto(undefined)
    expect(emitirSello()).toBeNull()
    expect(verificarSello(undefined)).toBe('ok')
    expect(verificarSello('')).toBe('ok')
    expect(verificarSello('basura')).toBe('ok')
  })

  it('cae a LEAD_IP_SALT cuando no hay FORM_TOKEN_SECRET', () => {
    vi.stubEnv('FORM_TOKEN_SECRET', undefined)
    vi.stubEnv('LEAD_IP_SALT', 'la-sal-de-las-ip')
    expect(emitirSello()).not.toBeNull()
    // Y lo que firma esa sal, lo verifica esa sal.
    const sello = emitirSello()
    vi.advanceTimersByTime(SEGUNDOS_MINIMOS * 1000)
    expect(verificarSello(sello ?? undefined)).toBe('ok')
  })
})

describe('el tiempo mínimo de llenado', () => {
  it('rechaza por rápido el envío instantáneo', () => {
    expect(verificarSello(selloNuevo().entero)).toBe('rapido')
  })

  it('sigue siendo rápido un milisegundo antes del umbral', () => {
    const sello = selloNuevo().entero
    vi.advanceTimersByTime(SEGUNDOS_MINIMOS * 1000 - 1)
    expect(verificarSello(sello)).toBe('rapido')
  })

  it('acepta justo al cumplirse el umbral', () => {
    const sello = selloNuevo().entero
    vi.advanceTimersByTime(SEGUNDOS_MINIMOS * 1000)
    expect(verificarSello(sello)).toBe('ok')
  })

  it('acepta a las veintitrés horas y rechaza a las veinticinco', () => {
    /* Alguien deja la pestaña abierta el viernes y envía el lunes: eso es una
       persona. Pero un sello no puede valer para siempre, o uno robado sirve un
       año. */
    const sello = selloNuevo().entero
    vi.advanceTimersByTime(23 * 3_600_000)
    expect(verificarSello(sello)).toBe('ok')
    vi.advanceTimersByTime(2 * 3_600_000)
    expect(verificarSello(sello)).toBe('invalido')
  })
})

describe('la firma, que es todo el punto', () => {
  it('rechaza un instante retrasado a mano', () => {
    /* **El error que esto existe para impedir.** Un campo oculto con la hora
       puesta por el cliente es una sugerencia: quien manda la petición escribe
       también el campo y le resta un minuto. Con la firma no puede: el instante
       viejo ya no cuadra con ella. */
    const { instante, firma } = selloNuevo()
    const retrasado = String(Number(instante) - 60_000)
    expect(verificarSello(`${retrasado}.${firma}`)).toBe('invalido')
  })

  it('rechaza una firma con un solo carácter cambiado', () => {
    const { instante, firma } = selloNuevo()
    const primero = firma.slice(0, 1)
    const alterada = (primero === '0' ? '1' : '0') + firma.slice(1)
    expect(verificarSello(`${instante}.${alterada}`)).toBe('invalido')
  })

  it('rechaza un sello firmado con otro secreto', () => {
    const ajeno = selloNuevo().entero
    conSecreto('otro-secreto-distinto')
    expect(verificarSello(ajeno)).toBe('invalido')
  })

  it('no lanza con una firma de longitud distinta', () => {
    /* `timingSafeEqual` **lanza** si los dos búferes no miden lo mismo, así que
       la comprobación de longitud va antes y por separado. Sin ella, mandar
       `1757000000000.a` no es un envío rechazado: es una excepción dentro de la
       Server Action, y quien la provoque tumba el formulario para todos. */
    const { instante } = selloNuevo()
    expect(() => verificarSello(`${instante}.a`)).not.toThrow()
    expect(verificarSello(`${instante}.a`)).toBe('invalido')
    const largo = `${instante}.${'0'.repeat(200)}`
    expect(() => verificarSello(largo)).not.toThrow()
    expect(verificarSello(largo)).toBe('invalido')
  })
})

describe('sellos mal formados', () => {
  const casos: [string, string | undefined][] = [
    ['sin sello', undefined],
    ['vacío', ''],
    ['sin punto', '1757516400000'],
    ['sin instante', '.abc'],
    ['instante no numérico', 'ayer.abc'],
    ['instante absurdamente largo', `${'9'.repeat(16)}.abc`],
  ]

  for (const [caso, sello] of casos) {
    it(`rechaza el sello ${caso}`, () => {
      expect(verificarSello(sello)).toBe('invalido')
    })
  }
})

describe('el margen de reloj', () => {
  it('tolera un sello emitido dos segundos en el futuro', () => {
    /* Emitir y verificar pueden caer en regiones distintas con relojes que no
       están sincronizados al milisegundo. Un desfase de medio segundo no puede
       rechazar a nadie. */
    const sello = selloNuevo().entero
    vi.setSystemTime(new Date(AHORA.getTime() - 2000))
    expect(verificarSello(sello)).toBe('rapido')
  })

  it('rechaza uno emitido un minuto en el futuro', () => {
    const sello = selloNuevo().entero
    vi.setSystemTime(new Date(AHORA.getTime() - 60_000))
    expect(verificarSello(sello)).toBe('invalido')
  })
})
