import { describe, expect, it } from 'vitest'
import {
  franjasLibres,
  franjasPosibles,
  porDia,
  type Franja,
} from '@/lib/agenda/franjas'
import {
  ANTELACION_MINIMA_HORAS,
  HORARIO,
  VENTANA_DIAS,
} from '@content/agenda'

/**
 * El cálculo de franjas.
 *
 * Se prueba primero y con más detalle que nada porque es el único módulo del
 * sitio donde un error **no se ve**: una franja mal calculada no rompe ninguna
 * página ni sale en ningún registro, se convierte en una cita que alguien
 * apuntó y a la que no hay nadie. Y es lógica pura con la hora inyectable
 * (`franjasPosibles(duracion, ahora)`), así que se puede fijar el instante sin
 * relojes falsos ni estado global.
 *
 * El ancla es el **jueves 10 de septiembre de 2026 a las 08:00 de Bogotá**, que
 * en UTC son las 13:00 del mismo día. Con la antelación mínima de dos horas, la
 * primera franja reservable de ese día son las 10:00 de Bogotá.
 */

const AHORA = new Date('2026-09-10T13:00:00Z')
const DURACION = 15

/** La hora local de Bogotá de un instante, en minutos desde medianoche. */
function minutosEnBogota(iso: string): number {
  const partes = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'America/Bogota',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(iso))
  const [h, m] = partes.split(':').map(Number)
  return (h ?? 0) * 60 + (m ?? 0)
}

function diaEnBogota(iso: string): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Bogota',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(iso))
}

function diaSemanaEnBogota(iso: string): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Bogota',
    weekday: 'short',
  }).format(new Date(iso))
}

describe('franjasPosibles', () => {
  const franjas = franjasPosibles(DURACION, AHORA)

  it('devuelve las horas en UTC, y son las de Bogotá convertidas', () => {
    /* Bogotá va cinco horas por detrás de UTC, así que las 10:00 de allí son
       las 15:00 en la cadena que se guarda. Si esto se rompiera —por ejemplo
       construyendo la fecha con `new Date(dia)` en la zona de la máquina— el
       servidor de Vercel, que corre en UTC, ofrecería la agenda cinco horas
       corrida y en local no se notaría nada. */
    expect(franjas[0]?.inicio).toBe('2026-09-10T15:00:00.000Z')
    expect(franjas[0]?.fin).toBe('2026-09-10T15:15:00.000Z')
    /* Y el primer día completo, que no lo recorta la antelación: el viernes 11
       abre a las 09:00 de Bogotá, o sea a las 14:00Z. */
    const viernes = franjas.filter((f) => f.inicio.startsWith('2026-09-11'))
    expect(viernes[0]?.inicio).toBe('2026-09-11T14:00:00.000Z')
    expect(viernes.at(-1)?.inicio).toBe('2026-09-11T21:30:00.000Z')
  })

  it('respeta la antelación mínima: nada dentro de las dos próximas horas', () => {
    const limite = AHORA.getTime() + ANTELACION_MINIMA_HORAS * 3_600_000
    for (const f of franjas) {
      expect(new Date(f.inicio).getTime()).toBeGreaterThanOrEqual(limite)
    }
    // Y en concreto: las 09:00 y las 09:30 de ese jueves existen en el horario
    // pero no se pueden reservar a las 08:00.
    const inicios = franjas.map((f) => f.inicio)
    expect(inicios).not.toContain('2026-09-10T14:00:00.000Z')
    expect(inicios).not.toContain('2026-09-10T14:30:00.000Z')
  })

  it('no ofrece nada en sábado ni en domingo', () => {
    const dias = new Set(franjas.map((f) => diaSemanaEnBogota(f.inicio)))
    expect(dias.has('Sat')).toBe(false)
    expect(dias.has('Sun')).toBe(false)
    // El viernes 11 sí está, para que la comprobación anterior no pase por
    // estar mirando una lista vacía.
    expect(dias.has('Fri')).toBe(true)
  })

  it('cae siempre dentro de un bloque del horario, nunca en el corte del mediodía', () => {
    for (const f of franjas) {
      const inicio = minutosEnBogota(f.inicio)
      const dentro = HORARIO.some((b) => {
        const [hd, md] = b.desde.split(':').map(Number)
        const [hh, mh] = b.hasta.split(':').map(Number)
        const abre = (hd ?? 0) * 60 + (md ?? 0)
        const cierra = (hh ?? 0) * 60 + (mh ?? 0)
        return inicio >= abre && inicio + DURACION <= cierra
      })
      expect(dentro, `franja fuera de horario: ${f.inicio}`).toBe(true)
    }
    // Lo que el corte del mediodía existe para impedir.
    const horas = franjas.map((f) => Math.floor(minutosEnBogota(f.inicio) / 60))
    expect(horas).not.toContain(12)
    expect(horas).not.toContain(13)
  })

  it('una asesoría larga no se desborda del bloque', () => {
    /* Con 45 minutos, las 11:30 ya no caben antes del cierre de las 12:00. La
       comprobación es `m + duracion <= cierra` y no `m < cierra`: si alguien la
       relajara, el sistema vendería una cita que se come el almuerzo y la
       persona se presentaría igual. */
    const inicios = franjasPosibles(45, AHORA).map((f) =>
      minutosEnBogota(f.inicio),
    )
    expect(inicios).toContain(11 * 60)
    expect(inicios).not.toContain(11 * 60 + 30)
  })

  it('llega hasta el final de la ventana y ni un día más', () => {
    const dias = [...new Set(franjas.map((f) => diaEnBogota(f.inicio)))].sort()
    const ultimo = dias.at(-1)
    expect(ultimo).toBeDefined()
    const tope = new Date(AHORA.getTime() + VENTANA_DIAS * 86_400_000)
    expect(ultimo).toBe(diaEnBogota(tope.toISOString()))
    expect(dias[0]).toBe('2026-09-10')
  })

  it('sale ordenado y sin repetidos', () => {
    const inicios = franjas.map((f) => f.inicio)
    expect(inicios).toEqual([...inicios].sort())
    expect(new Set(inicios).size).toBe(inicios.length)
  })

  it('el fin es el inicio más la duración', () => {
    for (const f of franjas) {
      expect(new Date(f.fin).getTime() - new Date(f.inicio).getTime()).toBe(
        DURACION * 60_000,
      )
    }
  })
})

describe('franjasLibres', () => {
  const posibles: Franja[] = [
    { inicio: '2026-09-10T15:00:00.000Z', fin: '2026-09-10T15:15:00.000Z' },
    { inicio: '2026-09-10T15:30:00.000Z', fin: '2026-09-10T15:45:00.000Z' },
  ]

  it('descarta una franja que Postgres devuelve con `+00:00`', () => {
    /* **Este es el error caro.** La franja se genera aquí como
       `2026-09-10T15:00:00.000Z` y la base la devuelve como
       `2026-09-10T15:00:00+00:00`. Es el mismo instante y dos cadenas
       distintas: comparándolas como texto, la franja ya vendida se sigue
       ofreciendo y dos personas reservan la misma hora. */
    const libres = franjasLibres(posibles, ['2026-09-10T15:00:00+00:00'])
    expect(libres.map((f) => f.inicio)).toEqual(['2026-09-10T15:30:00.000Z'])
  })

  it('también con el desplazamiento de Bogotá, que es como se pudo guardar', () => {
    // `2026-09-10T10:00:00-05:00` son las 15:00Z: mismo instante, tercera forma
    // de escribirlo.
    const libres = franjasLibres(posibles, ['2026-09-10T10:00:00-05:00'])
    expect(libres.map((f) => f.inicio)).toEqual(['2026-09-10T15:30:00.000Z'])
  })

  it('no descarta nada si no hay nada tomado', () => {
    expect(franjasLibres(posibles, [])).toHaveLength(2)
  })
})

describe('porDia', () => {
  it('agrupa por el día de Bogotá y conserva el orden', () => {
    const grupos = porDia(franjasPosibles(DURACION, AHORA))
    expect(grupos.map((g) => g.dia).slice(0, 2)).toEqual([
      '2026-09-10',
      '2026-09-11',
    ])
    /* Las 22:00Z del jueves son las 17:00 de Bogotá del jueves, no del viernes.
       Agrupar por el día UTC partiría la tarde del último bloque en un día
       aparte el día que el horario llegue más tarde. */
    for (const g of grupos) {
      for (const f of g.franjas) expect(diaEnBogota(f.inicio)).toBe(g.dia)
    }
  })
})
