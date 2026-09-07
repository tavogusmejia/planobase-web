/**
 * Que la escalera inglesa no se desplace respecto de la española.
 *
 * **Esto fija un fallo que estuvo a punto de colarse.** La traducción de la
 * escalera se indexaba por número de peldaño, con un comentario que decía que
 * el número era su identidad y no cambiaba. Cambió el 6/9/2026, al insertar la
 * asesoría de pago entre el 1 y el 2. Con el índice numérico, renumerar el
 * español sin tocar el inglés habría corrido la traducción entera un escalón:
 * `/en/servicios` mostrando «Feasibility study» bajo «Visita técnica con
 * informe», y así hasta abajo.
 *
 * Lo peor no era el error, era que **no lo cazaba nada**: el build compila,
 * `check-traducciones` comprueba que la clave exista y existía, y ningún test
 * miraba la correspondencia. Se descubre leyendo la página en inglés, o no se
 * descubre.
 *
 * Ahora se indexa por slug, así que el desplazamiento es imposible por
 * construcción. Esto lo comprueba de todas formas, porque la escalera ya ha
 * cambiado dos veces en tres días y habrá una tercera.
 */
import { describe, expect, it } from 'vitest'

import { escalera } from '@content/puertas'
import { escalera as escaleraEn } from '@content/en/puertas'

describe('la escalera', () => {
  it('va numerada del 1 al 7, sin huecos ni repetidos', () => {
    expect(escalera.map((p) => p.n)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('tiene un slug único por peldaño', () => {
    const slugs = escalera.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(slugs.every((s) => s.length > 0)).toBe(true)
  })

  it('empieza por la primera llamada y sigue por la asesoría técnica', () => {
    /* El orden importa y es una decisión, no un accidente: el salto de una
       llamada gratis a una visita al predio era demasiado grande, y la
       asesoría de pago existe para partirlo en dos. */
    expect(escalera.map((p) => p.slug).slice(0, 3)).toEqual([
      'primera-llamada',
      'asesoria-tecnica',
      'visita-tecnica-con-informe',
    ])
  })

  it('tiene traducción para cada peldaño, y ninguna sobra', () => {
    /* Que sobre una clave es tan sospechoso como que falte: significa que un
       peldaño se renombró o se retiró y su traducción se quedó huérfana. */
    expect(Object.keys(escaleraEn).sort()).toEqual(escalera.map((p) => p.slug).sort())
  })

  it('no publica precios del tercer peldaño en adelante', () => {
    /* La regla que Gustavo cerró el 6/9/2026: la escalera se cotiza caso por
       caso. Las dos cifras que sí se publican —el cero de la primera llamada y
       los $50.000 de la asesoría— viven en `content/site.ts` con el servicio
       agendable, no aquí. */
    for (const peldano of escalera.slice(2)) {
      expect(peldano.precioCOP, `${peldano.slug} no debería publicar precio`).toBeNull()
    }
  })
})
