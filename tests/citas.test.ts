/**
 * El catálogo de servicios agendables.
 *
 * Lo que se fija aquí es la frontera por la que entra el navegador: `tipo` es lo
 * único que la petición decide, y de él salen la duración y el precio. Si
 * `esTipoCita` dejara pasar algo, `CITAS[tipo]` daría `undefined` y la reserva
 * se escribiría con una duración `NaN` — una cita sin fin, literalmente.
 */
import { describe, expect, it } from 'vitest'

import { CITAS, TIPO_POR_DEFECTO, esTipoCita } from '@content/site'

describe('esTipoCita', () => {
  it('acepta los dos tipos y rechaza todo lo demás', () => {
    expect(esTipoCita('primera-llamada')).toBe(true)
    expect(esTipoCita('asesoria-tecnica')).toBe(true)

    for (const basura of [
      null,
      undefined,
      '',
      'basura',
      'Primera-Llamada', // las mayúsculas no valen: la clave es exacta
      'primera llamada',
      42,
      {},
      ['primera-llamada'],
      'constructor', // no vale heredar del prototipo
      '__proto__',
      'toString',
    ]) {
      expect(esTipoCita(basura), `debería rechazar ${JSON.stringify(basura)}`).toBe(
        false,
      )
    }
  })
})

describe('el catálogo', () => {
  it('tiene los dos servicios, con la duración y el precio decididos', () => {
    expect(CITAS['primera-llamada'].duracionMin).toBe(15)
    expect(CITAS['primera-llamada'].precioCOP).toBe(0)
    expect(CITAS['asesoria-tecnica'].duracionMin).toBe(60)
    expect(CITAS['asesoria-tecnica'].precioCOP).toBe(50_000)
  })

  it('cae siempre a la gratuita', () => {
    /* Ante un parámetro raro se enseña la puerta abierta, nunca la de pago.
       Enseñar la de pago a quien llegó por un enlace mal copiado es cobrarle
       por un accidente. */
    expect(TIPO_POR_DEFECTO).toBe('primera-llamada')
    expect(CITAS[TIPO_POR_DEFECTO].precioCOP).toBe(0)
  })

  it('cada slug coincide con su clave', () => {
    /* Si divergieran, la URL de la ficha y el tipo que viaja al agendar
       dejarían de ser lo mismo, y `?tipo=` enlazaría a la nada. */
    for (const [clave, cita] of Object.entries(CITAS)) {
      expect(cita.slug).toBe(clave)
    }
  })
})
