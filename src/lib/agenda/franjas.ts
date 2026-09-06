import {
  ANTELACION_MINIMA_HORAS,
  DIAS_CERRADOS,
  DIAS_HABILES,
  HORARIO,
  PASO_MINUTOS,
  VENTANA_DIAS,
} from '@content/agenda'

/**
 * Qué franjas existen, según la disponibilidad declarada.
 *
 * Este archivo no sabe nada de reservas ya hechas: solo convierte la
 * configuración de `content/agenda.ts` en una lista de instantes. Quitar las
 * ocupadas es trabajo de quien consulta la base, y separarlo permite probar
 * este cálculo —que es donde están todas las trampas— sin tocar Supabase.
 *
 * **Todo se calcula en la zona de Bogotá y se devuelve en UTC.** Es la única
 * forma de que la agenda diga lo mismo en el servidor de Vercel, en el
 * navegador de alguien en Madrid y en la base de datos.
 */

const ZONA = 'America/Bogota'

/**
 * El desfase de Bogotá respecto de UTC, en minutos, para un instante dado.
 *
 * Se calcula y no se escribe a mano. Colombia no cambia la hora, así que hoy
 * son siempre −300 minutos y bastaría con la constante — pero una constante
 * escrita a mano es una bomba de relojería: el día que el país adopte horario
 * de verano, o que alguien reutilice esto para otra zona, la agenda entera se
 * desplaza una hora sin que nada falle visiblemente. Deducirlo cuesta lo mismo
 * y no puede envejecer.
 */
function desfaseZonaMinutos(instante: Date): number {
  const enZona = new Date(
    instante.toLocaleString('en-US', { timeZone: ZONA }),
  )
  const enUtc = new Date(instante.toLocaleString('en-US', { timeZone: 'UTC' }))
  return Math.round((enZona.getTime() - enUtc.getTime()) / 60_000)
}

/** El día del año en Bogotá, en `AAAA-MM-DD`, para un instante cualquiera. */
function diaEnZona(instante: Date): string {
  const p = new Intl.DateTimeFormat('en-CA', {
    timeZone: ZONA,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(instante)
  return p
}

/** El día de la semana en Bogotá. Domingo es 0. */
function diaSemanaEnZona(instante: Date): number {
  const nombre = new Intl.DateTimeFormat('en-US', {
    timeZone: ZONA,
    weekday: 'short',
  }).format(instante)
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(nombre)
}

/** `'09:00'` → 540 minutos desde medianoche. */
function aMinutos(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return (h ?? 0) * 60 + (m ?? 0)
}

/**
 * El instante UTC que corresponde a una hora local de Bogotá en un día dado.
 *
 * Se construye a partir del mediodía de ese día y no de la medianoche: si
 * alguna vez esto se usara en una zona con horario de verano, el salto ocurre
 * de madrugada y partir del mediodía deja el cálculo del lado seguro.
 */
function instanteDe(dia: string, minutosDelDia: number): Date {
  const mediodia = new Date(`${dia}T12:00:00Z`)
  const desfase = desfaseZonaMinutos(mediodia)
  return new Date(
    Date.parse(`${dia}T00:00:00Z`) + (minutosDelDia - desfase) * 60_000,
  )
}

export type Franja = {
  /** ISO en UTC. Es la llave: la base guarda este mismo instante. */
  inicio: string
  fin: string
}

/**
 * Todas las franjas de la ventana, sin descontar las ocupadas.
 *
 * Descarta las que caen dentro de la antelación mínima, las de días no hábiles
 * y las de días cerrados a mano. Lo que devuelve ya está ordenado.
 */
export function franjasPosibles(
  duracionMin: number,
  ahora: Date = new Date(),
): Franja[] {
  const salida: Franja[] = []
  const noAntesDe = ahora.getTime() + ANTELACION_MINIMA_HORAS * 3_600_000

  for (let d = 0; d <= VENTANA_DIAS; d++) {
    const cursor = new Date(ahora.getTime() + d * 86_400_000)
    const dia = diaEnZona(cursor)

    if (DIAS_CERRADOS.includes(dia)) continue
    if (!DIAS_HABILES.includes(diaSemanaEnZona(cursor) as 1 | 2 | 3 | 4 | 5)) {
      continue
    }

    for (const bloque of HORARIO) {
      const abre = aMinutos(bloque.desde)
      const cierra = aMinutos(bloque.hasta)

      for (let m = abre; m + duracionMin <= cierra; m += PASO_MINUTOS) {
        const inicio = instanteDe(dia, m)
        if (inicio.getTime() < noAntesDe) continue
        salida.push({
          inicio: inicio.toISOString(),
          fin: new Date(inicio.getTime() + duracionMin * 60_000).toISOString(),
        })
      }
    }
  }

  return salida.sort((a, b) => a.inicio.localeCompare(b.inicio))
}

/** Las que quedan libres, quitando las que ya están tomadas. */
export function franjasLibres(
  posibles: Franja[],
  ocupadas: string[],
): Franja[] {
  /* Se comparan instantes normalizados y no las cadenas tal cual: Postgres
     devuelve `2026-09-10T15:00:00+00:00` y aquí se generó
     `2026-09-10T15:00:00.000Z`. Son el mismo momento y dos cadenas distintas,
     y compararlas como texto dejaría ofrecer una franja ya vendida. */
  const tomadas = new Set(ocupadas.map((o) => new Date(o).getTime()))
  return posibles.filter((f) => !tomadas.has(new Date(f.inicio).getTime()))
}

/** Agrupa por día local, que es como se pinta y como se decide. */
export function porDia(franjas: Franja[]): { dia: string; franjas: Franja[] }[] {
  const mapa = new Map<string, Franja[]>()
  for (const f of franjas) {
    const dia = diaEnZona(new Date(f.inicio))
    const lista = mapa.get(dia)
    if (lista) lista.push(f)
    else mapa.set(dia, [f])
  }
  return [...mapa.entries()].map(([dia, franjas]) => ({ dia, franjas }))
}
