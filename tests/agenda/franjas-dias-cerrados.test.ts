import { describe, expect, it, vi } from 'vitest'
import type * as Agenda from '@content/agenda'

/**
 * Los días cerrados a mano —festivos, vacaciones, el día de una entrega—.
 *
 * Va en su propio archivo porque hay que sustituir una constante de
 * `content/agenda.ts` y esa sustitución no puede filtrarse al resto de las
 * pruebas. Hoy `DIAS_CERRADOS` está vacío, así que sin este simulacro la rama
 * que los descarta **no la ejecuta nadie**: podría estar rota desde el primer
 * día y el sitio ofrecería citas el 25 de diciembre sin que nada avisara.
 *
 * Se sustituye solo esa constante y se conserva el resto del módulo real, para
 * que el horario, el paso y la ventana sigan siendo los de verdad.
 */
vi.mock('@content/agenda', async (importarReal) => {
  const real = await importarReal<typeof Agenda>()
  return { ...real, DIAS_CERRADOS: ['2026-09-11'] }
})

const { franjasPosibles } = await import('@/lib/agenda/franjas')

const AHORA = new Date('2026-09-10T13:00:00Z')

function diaEnBogota(iso: string): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Bogota',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(iso))
}

describe('días cerrados', () => {
  it('no ofrece ni una franja el día marcado como cerrado', () => {
    const dias = new Set(
      franjasPosibles(15, AHORA).map((f) => diaEnBogota(f.inicio)),
    )
    expect(dias.has('2026-09-11')).toBe(false)
    // Los días de alrededor siguen abiertos: lo que se cierra es un día, no la
    // agenda entera.
    expect(dias.has('2026-09-10')).toBe(true)
    expect(dias.has('2026-09-14')).toBe(true)
  })
})
