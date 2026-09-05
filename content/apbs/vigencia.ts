/**
 * Datos que caducan.
 *
 * El problema que resuelve este archivo: **una calculadora con un dato viejo
 * no se rompe, miente.** Sigue devolviendo un número con toda naturalidad, y
 * quien lo usa no tiene forma de saber que está mal. La UVT cambia cada
 * diciembre por resolución de la DIAN; una calculadora de expensas con la UVT
 * del año pasado se equivoca en cada liquidación.
 *
 * Un recordatorio por correo no basta para eso. Si el correo se pierde, se
 * traspapela o llega en vacaciones, la herramienta sigue mintiendo. Así que la
 * defensa es en tres capas, de la que nunca falla a la que solo avisa:
 *
 *  1. **La herramienta se degrada sola.** Si el dato venció, la página lo dice
 *     de frente y deja de dar la cifra como buena. No depende de nada externo.
 *  2. **El build falla.** `scripts/check-vigencia.ts` no deja desplegar con un
 *     dato caduco. Fuerza la corrección en cuanto alguien toque el sitio.
 *  3. **Un aviso anticipado**, antes de que caduque, para que la corrección se
 *     haga a tiempo y no a la carrera.
 *
 * Las tres leen esta misma declaración. Actualizar el dato es cambiar un
 * objeto, y las tres capas se enteran.
 */

export type DatoConVigencia<T> = {
  valor: T
  /** Año al que corresponde el dato. */
  anio: number
  /** El acto que lo fija. Se pinta en la página, junto a la cifra. */
  fuente: string
  url: string
  /**
   * Último día en que el dato es fiable, en ISO. Pasado ese día la
   * herramienta lo declara vencido y el build falla.
   */
  vigenteHasta: string
  /**
   * Cuántos días antes conviene avisar. La resolución de la UVT sale a
   * mediados de diciembre, así que treinta días dan margen para actualizar
   * antes del 1 de enero.
   */
  avisarConDias: number
  /** Qué hay que hacer para actualizarlo. Va en el correo del aviso. */
  comoActualizar: string
}

/**
 * Unidad de Valor Tributario.
 *
 * Desde el Decreto 1890 de 2021, las expensas de curaduría se liquidan en UVT
 * y no en salarios mínimos. Cualquier tabla en salarios mínimos está obsoleta.
 *
 * OJO al actualizar: varias fuentes publican el valor en noviembre como
 * *proyección*, antes de que exista la resolución. Espere la resolución.
 */
export const UVT: DatoConVigencia<number> = {
  valor: 52_374,
  anio: 2026,
  fuente: 'Resolución 000238 de la DIAN, del 15 de diciembre de 2025',
  url: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0238_2025.htm',
  vigenteHasta: '2026-12-31',
  avisarConDias: 30,
  comoActualizar:
    'La DIAN publica la resolución con el valor de la UVT del año siguiente a ' +
    'mediados de diciembre. Actualice `valor`, `anio`, `fuente`, `url` y ' +
    '`vigenteHasta` en content/apbs/vigencia.ts. No use cifras publicadas ' +
    'antes de la resolución: circulan como proyección.',
}

/** Todo lo que caduca, en un solo lugar. Las tres capas recorren esta lista. */
export const DATOS_CON_VIGENCIA = [
  { id: 'uvt', nombre: 'Valor de la UVT', dato: UVT },
] as const

export function estaVencido(d: DatoConVigencia<unknown>, hoy = new Date()): boolean {
  return hoy.toISOString().slice(0, 10) > d.vigenteHasta
}

/** Días que faltan para que venza. Negativo si ya venció. */
export function diasParaVencer(
  d: DatoConVigencia<unknown>,
  hoy = new Date(),
): number {
  const fin = new Date(`${d.vigenteHasta}T00:00:00Z`).getTime()
  const ahora = new Date(`${hoy.toISOString().slice(0, 10)}T00:00:00Z`).getTime()
  return Math.round((fin - ahora) / 86_400_000)
}

export function porVencer(d: DatoConVigencia<unknown>, hoy = new Date()): boolean {
  const dias = diasParaVencer(d, hoy)
  return dias >= 0 && dias <= d.avisarConDias
}
