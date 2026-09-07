/**
 * El solape entre tramos, que es lo que sustituyó a comparar instantes.
 *
 * Mientras todas las citas duraron quince minutos, «ocupado» era una cuestión
 * de igualdad: dos citas o empiezan a la vez o no se tocan. Con quince y sesenta
 * minutos eso deja de ser cierto —una llamada a las 10:00 y una asesoría a las
 * 10:15 no comparten inicio y comparten un cuarto de hora— y encima la
 * disponibilidad real de Google llega como tramos de duración arbitraria.
 *
 * **La convención tiene que ser la misma que la de Postgres.** La restricción de
 * la tabla es `tstzrange(inicio, fin, '[)')`, semiabierta. Si aquí se usara
 * cerrada, el sitio escondería franjas que la base acepta; si allá se usara
 * cerrada y aquí no, ofrecería horas que la base rechaza. Los dos primeros casos
 * de este archivo son los que fijan esa frontera.
 */
import { describe, expect, it } from 'vitest'

import { franjasLibres, franjasPosibles, solapan } from '@/lib/agenda/franjas'

const r = (inicio: string, fin: string) => ({ inicio, fin })

describe('solapan', () => {
  it('no considera solape dos tramos que se tocan por el borde', () => {
    /* 10:00–10:15 y 10:15–10:30. Es la frontera exacta del `[)`: la cita que
       termina justo cuando empieza la otra no la estorba. */
    expect(
      solapan(
        r('2026-09-10T15:00:00.000Z', '2026-09-10T15:15:00.000Z'),
        r('2026-09-10T15:15:00.000Z', '2026-09-10T15:30:00.000Z'),
      ),
    ).toBe(false)
  })

  it('sí considera solape un minuto de invasión', () => {
    expect(
      solapan(
        r('2026-09-10T15:00:00.000Z', '2026-09-10T15:15:00.000Z'),
        r('2026-09-10T15:14:00.000Z', '2026-09-10T15:30:00.000Z'),
      ),
    ).toBe(true)
  })

  it('reconoce contención, identidad y solape por los dos lados', () => {
    const hora = r('2026-09-10T15:00:00.000Z', '2026-09-10T16:00:00.000Z')
    // Contenido dentro.
    expect(solapan(hora, r('2026-09-10T15:20:00.000Z', '2026-09-10T15:35:00.000Z'))).toBe(true)
    // Idéntico.
    expect(solapan(hora, hora)).toBe(true)
    // Entra por delante.
    expect(solapan(hora, r('2026-09-10T14:45:00.000Z', '2026-09-10T15:10:00.000Z'))).toBe(true)
    // Sale por detrás.
    expect(solapan(hora, r('2026-09-10T15:50:00.000Z', '2026-09-10T16:30:00.000Z'))).toBe(true)
    // Ni se rozan.
    expect(solapan(hora, r('2026-09-10T17:00:00.000Z', '2026-09-10T18:00:00.000Z'))).toBe(false)
  })

  it('es simétrico', () => {
    const a = r('2026-09-10T15:00:00.000Z', '2026-09-10T16:00:00.000Z')
    const b = r('2026-09-10T15:30:00.000Z', '2026-09-10T17:00:00.000Z')
    expect(solapan(a, b)).toBe(solapan(b, a))
  })

  it('da el mismo veredicto escriba como escriba el instante', () => {
    /* Las tres formas del mismo momento: `Z`, `+00:00` y el desplazamiento de
       Bogotá. Antes bastaba con normalizar un extremo; ahora son cuatro, y un
       descuido en cualquiera de ellos deja pasar una doble reserva. */
    const zulu = r('2026-09-10T15:00:00.000Z', '2026-09-10T16:00:00.000Z')
    const masCero = r('2026-09-10T15:30:00+00:00', '2026-09-10T15:45:00+00:00')
    const bogota = r('2026-09-10T10:30:00-05:00', '2026-09-10T10:45:00-05:00')

    expect(solapan(zulu, masCero)).toBe(true)
    expect(solapan(zulu, bogota)).toBe(true)
    expect(solapan(masCero, bogota)).toBe(true)
  })
})

describe('franjasLibres con dos duraciones', () => {
  /* Jueves 10/9/2026, 08:00 en Bogotá. La misma ancla que `franjas.test.ts`. */
  const AHORA = new Date('2026-09-10T13:00:00Z')

  it('una asesoría de una hora tapa tres franjas de la agenda', () => {
    /* Reservada de 10:00 a 11:00 en Bogotá (15:00–16:00Z), con paso de treinta
       minutos, deja fuera las llamadas de 10:00 y 10:30. La de 11:00 sobrevive:
       la asesoría termina justo ahí y el intervalo es semiabierto.

       No se comprueba ninguna franja anterior de ese día porque **no existe**:
       la antelación mínima de dos horas sobre las 08:00 de Bogotá hace que la
       primera reservable sea justamente la de 10:00. El control de que no se
       bloquea de más va con el día siguiente. */
    const asesoria = r('2026-09-10T15:00:00.000Z', '2026-09-10T16:00:00.000Z')
    const libres = franjasLibres(franjasPosibles(15, AHORA), [asesoria])
    const horas = libres.map((f) => f.inicio)

    expect(horas).not.toContain('2026-09-10T15:00:00.000Z') // jue 10:00
    expect(horas).not.toContain('2026-09-10T15:30:00.000Z') // jue 10:30
    expect(horas).toContain('2026-09-10T16:00:00.000Z') //     jue 11:00, borde
    expect(horas).toContain('2026-09-11T14:00:00.000Z') //     vie 09:00, intacto
  })

  it('una llamada de quince minutos bloquea la hora que la contiene', () => {
    /* El caso que el sistema viejo no veía: la llamada empieza a las 10:15, que
       no es inicio de ninguna franja de una hora, y aun así hace imposible la
       asesoría de 10:00 a 11:00. Comparando inicios, esa asesoría se seguiría
       ofreciendo. */
    const llamada = r('2026-09-10T15:15:00.000Z', '2026-09-10T15:30:00.000Z')
    const libres = franjasLibres(franjasPosibles(60, AHORA), [llamada])
    const horas = libres.map((f) => f.inicio)

    expect(horas).not.toContain('2026-09-10T15:00:00.000Z') // 10:00–11:00
    expect(horas).not.toContain('2026-09-10T14:30:00.000Z') // 09:30–10:30
    expect(horas).toContain('2026-09-10T16:00:00.000Z') //     11:00–12:00, libre
  })

  it('acepta tramos que no empiezan en ninguna franja', () => {
    /* Es la forma que tendrán los huecos ocupados del calendario de Google: una
       reunión de 10:07 a 10:52 no coincide con ningún inicio de la rejilla. */
    const reunion = r('2026-09-10T15:07:00.000Z', '2026-09-10T15:52:00.000Z')
    const libres = franjasLibres(franjasPosibles(15, AHORA), [reunion])
    const horas = libres.map((f) => f.inicio)

    expect(horas).not.toContain('2026-09-10T15:00:00.000Z') // 10:00, la pisa
    expect(horas).not.toContain('2026-09-10T15:30:00.000Z') // 10:30, la pisa
    expect(horas).toContain('2026-09-10T16:00:00.000Z') //     11:00, ya libre
  })

  it('no descarta nada con la lista vacía, y no rompe con muchos tramos', () => {
    const posibles = franjasPosibles(15, AHORA)
    expect(franjasLibres(posibles, [])).toHaveLength(posibles.length)
    expect(franjasLibres(posibles, posibles)).toHaveLength(0)
  })
})
