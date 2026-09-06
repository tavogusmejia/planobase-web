import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { atribucionActual, capturar } from '@/lib/atribucion'

/**
 * De qué anuncio vino quien acaba escribiendo.
 *
 * Lo que se prueba aquí es **la caducidad**, y no el resto por casualidad: un
 * UTM guardado sin ventana acaba atribuyendo a una campaña de hace un año una
 * conversión de hoy, y eso es peor que no atribuir nada. No deja el hueco
 * visible: lo rellena con una cifra falsa sobre la que alguien decide qué
 * anuncio apaga y cuál sube. Es un error que no se puede ver mirando el sitio,
 * porque para verlo hay que esperar treinta días.
 *
 * **Por qué el `window` va a mano y no con un DOM simulado.** Node 25 ya expone
 * un `localStorage` global propio, y tanto happy-dom como jsdom se lo
 * encuentran ocupado: `window.localStorage` acaba siendo el de Node, que sin
 * `--localstorage-file` es un objeto vacío. La prueba pasaría o fallaría según
 * la versión de Node de quien la corra, que es lo peor que le puede pasar a una
 * prueba. De este módulo solo se usan `localStorage` y `location.search`, así
 * que se montan los dos aquí y el resultado es el mismo en cualquier Node.
 */

const CLAVE = 'pb.atribucion'
const DIA = 86_400_000
const AHORA = new Date('2026-09-10T15:00:00.000Z')

/** `localStorage` de verdad en lo que este módulo usa: se guarda y se lee. */
function almacen(): Storage {
  const datos = new Map<string, string>()
  return {
    get length() {
      return datos.size
    },
    clear: () => datos.clear(),
    getItem: (clave: string) => datos.get(clave) ?? null,
    key: (indice: number) => [...datos.keys()][indice] ?? null,
    removeItem: (clave: string) => {
      datos.delete(clave)
    },
    setItem: (clave: string, valor: string) => {
      datos.set(clave, valor)
    },
  }
}

let almacenamiento: Storage
let ubicacion: { search: string }

/** Cambia la query de la página, que es lo único que el módulo mira. */
function url(busqueda: string): void {
  ubicacion.search = busqueda
}

/** Deja una atribución en el almacenamiento, vista hace `hace` milisegundos. */
function guardadoHace(hace: number, valor: Record<string, string> = {}): void {
  almacenamiento.setItem(
    CLAVE,
    JSON.stringify({
      utmSource: 'meta',
      utmCampaign: 'remodelaciones-sep',
      ...valor,
      visto: new Date(Date.now() - hace).toISOString(),
    }),
  )
}

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(AHORA)
  almacenamiento = almacen()
  ubicacion = { search: '' }
  vi.stubGlobal('window', {
    localStorage: almacenamiento,
    location: ubicacion,
  })
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('la ventana de treinta días', () => {
  it('a los veintinueve días la atribución sigue viva', () => {
    // El caso que motivó guardar nada: leer un artículo y volver a escribir
    // semanas después.
    guardadoHace(29 * DIA)
    expect(atribucionActual()).toEqual({
      utmSource: 'meta',
      utmCampaign: 'remodelaciones-sep',
      promo: undefined,
    })
  })

  it('a los treinta y uno ya no, y además se borra', () => {
    /* Borrarla no es limpieza: si se dejara, cada lectura posterior repetiría
       el mismo cálculo sobre un dato que ya se sabe muerto. */
    guardadoHace(31 * DIA)
    expect(atribucionActual()).toEqual({})
    expect(almacenamiento.getItem(CLAVE)).toBeNull()
  })

  it('sin marca de tiempo válida no se cree nada', () => {
    // Un `visto` que no es fecha equivale a un dato sin caducidad: es
    // exactamente lo que la ventana existe para impedir.
    almacenamiento.setItem(
      CLAVE,
      JSON.stringify({ utmSource: 'meta', visto: 'el martes' }),
    )
    expect(atribucionActual()).toEqual({})
    expect(almacenamiento.getItem(CLAVE)).toBeNull()
  })

  it('un almacenamiento corrupto no rompe la página', () => {
    /* Perder la atribución es una cifra de menos en una tabla; que lance, es un
       formulario que no se pinta y un encargo de menos. */
    almacenamiento.setItem(CLAVE, 'esto no es json{')
    expect(() => atribucionActual()).not.toThrow()
    expect(atribucionActual()).toEqual({})
  })
})

describe('qué gana cuando hay dos', () => {
  it('la URL de esta carga manda sobre lo guardado', () => {
    guardadoHace(1 * DIA)
    url('?utm_source=google&utm_campaign=marca')
    expect(atribucionActual()).toMatchObject({
      utmSource: 'google',
      utmCampaign: 'marca',
    })
  })

  it('la última campaña sustituye a la anterior', () => {
    // Criterio de último clic, el mismo que usan Meta y Google Ads por defecto:
    // con otro, el costo por lead de la web no se podría comparar con el que
    // reporta cada plataforma.
    guardadoHace(1 * DIA)
    url('?utm_source=google')
    capturar()
    url('')
    expect(atribucionActual()).toMatchObject({ utmSource: 'google' })
  })

  it('sin campaña en la URL ni guardada, no se inventa nada', () => {
    expect(atribucionActual()).toEqual({})
  })
})

describe('lo que entra por la URL se recorta', () => {
  it('no deja pasar un valor más largo de lo que acepta el esquema', () => {
    /* Los límites son los de `leadSchema`: si aquí pasara algo más largo, el
       envío fallaría la validación por un parámetro de la URL que la persona
       nunca escribió, y perdería el mensaje que sí escribió. */
    url(`?utm_source=${'a'.repeat(300)}&promo=${'b'.repeat(300)}`)
    const valor = atribucionActual()
    expect(valor.utmSource).toHaveLength(120)
    expect(valor.promo).toHaveLength(60)
  })

  it('quita los caracteres de control', () => {
    // Este valor acaba en el asunto y en el cuerpo de un correo.
    url('?utm_source=%0Ameta%00')
    expect(atribucionActual().utmSource).toBe('meta')
  })

  it('un parámetro vacío no cuenta como campaña', () => {
    url('?utm_source=&utm_campaign=%20')
    expect(atribucionActual()).toEqual({})
    expect(almacenamiento.getItem(CLAVE)).toBeNull()
  })
})

describe('quien rechazó la medición', () => {
  it('no deja que se guarde nada, y borra lo que hubiera', () => {
    /* El argumento de la política no obliga —no hay tercero, no hay
       identificador—, pero quien pulsa «Rechazar» está diciendo que no quiere
       que le midan, y no persistir nada cuesta una línea. */
    guardadoHace(1 * DIA)
    almacenamiento.setItem(
      'pb.consentimiento',
      JSON.stringify({
        medicion: 'rechazado',
        version: 1,
        fecha: AHORA.toISOString(),
      }),
    )
    url('?utm_source=google')
    capturar()
    expect(almacenamiento.getItem(CLAVE)).toBeNull()
  })

  it('pero la campaña de esta misma visita sí se usa', () => {
    // Eso no es almacenamiento: es el enlace que la persona está mirando.
    almacenamiento.setItem(
      'pb.consentimiento',
      JSON.stringify({
        medicion: 'rechazado',
        version: 1,
        fecha: AHORA.toISOString(),
      }),
    )
    url('?utm_source=google')
    expect(atribucionActual()).toMatchObject({ utmSource: 'google' })
  })
})
