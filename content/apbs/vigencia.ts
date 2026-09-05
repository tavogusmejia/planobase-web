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

/**
 * Tabla del factor municipal.
 *
 * El **Decreto 1107 del 6 de agosto de 2026** adicionó dos parágrafos al art.
 * 2.2.6.6.8.4: el Ministerio de Vivienda debe expedir una metodología de
 * actualización antes del 6 de agosto de 2027, y actualizar todos los factores
 * por resolución dentro de los doce meses siguientes. Es decir: **toda la
 * tabla tiene fecha de caducidad**, y no por descuido de nadie sino por
 * mandato expreso.
 */
export const FACTOR_MUNICIPAL: DatoConVigencia<'tabla de 53 municipios'> = {
  valor: 'tabla de 53 municipios',
  anio: 2026,
  fuente:
    'Decreto 1077 de 2015, art. 2.2.6.6.8.4, más las resoluciones del ' +
    'Ministerio de Vivienda que asignaron factor a municipios posteriores',
  url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
  vigenteHasta: '2028-08-06',
  avisarConDias: 120,
  comoActualizar:
    'El Decreto 1107 de 2026 obliga al Ministerio de Vivienda a actualizar ' +
    'todos los factores municipales por resolución antes de esta fecha. ' +
    'Busque esa resolución y reemplace la tabla completa en ' +
    'content/apbs/expensas.ts. Hasta que salga, la tabla vigente es la que ' +
    'está.',
}

/**
 * Directorio de curadores urbanos.
 *
 * De él depende la respuesta más valiosa de la calculadora —«en su municipio
 * no se pagan expensas»— y también la más frágil: la Superintendencia lo
 * actualiza varias veces al año, y una curaduría que se provee cambia la
 * respuesta de gratis a varios cientos de miles de pesos.
 */
export const DIRECTORIO_CURADORES: DatoConVigencia<'50 municipios con curaduría'> = {
  valor: '50 municipios con curaduría',
  anio: 2026,
  fuente:
    'Directorio de Curadores Urbanos de la Superintendencia de Notariado y ' +
    'Registro, edición del 6 de marzo de 2026',
  url: 'https://www.supernotariado.gov.co/superintendencia-delegada-para-curadores-urbanos/',
  vigenteHasta: '2027-03-06',
  avisarConDias: 60,
  comoActualizar:
    'Descargue el directorio más reciente de la Superintendencia y compare ' +
    'los despachos vacantes. Atención especial a Jamundí, Chía, Madrid, ' +
    'Sabaneta, Zipaquirá y Girardota: hoy figuran sin curador y la ' +
    'calculadora responde «no se pagan expensas». El concurso de méritos en ' +
    'curso no produce lista de elegibles antes de 2027.',
}

/**
 * División político-administrativa.
 *
 * Se vigila por la misma razón que la tabla del decreto de curadurías: es un
 * dato oficial con corte, no una constante. El DANE crea, suprime y renombra
 * municipios —Barrancominas en 2019, Nuevo Belén de Bajirá en 2022— y un
 * selector con una lista vieja deja fuera a gente real.
 *
 * El corte que se cargó es el de diciembre de 2024, y no se pudo confirmar si
 * existe uno posterior: el geoportal del DANE no respondió. Se declara esa
 * fecha en vez de dar el dato por perpetuo.
 */
export const DIVIPOLA_DANE: DatoConVigencia<'1.122 entradas territoriales'> = {
  valor: '1.122 entradas territoriales',
  anio: 2024,
  fuente: 'DIVIPOLA del DANE, corte del 30 de diciembre de 2024, vía datos.gov.co',
  url: 'https://www.datos.gov.co/d/vcjz-niiq',
  vigenteHasta: '2027-06-30',
  avisarConDias: 90,
  comoActualizar:
    'Descargue el corte vigente de DIVIPOLA del geoportal del DANE o de ' +
    'datos.gov.co y reemplace content/apbs/divipola.ts. Valide contra un ' +
    'segundo conjunto del DANE antes de confiar en él: el de municipios que ' +
    'circula en datos abiertos aparece atribuido a una gobernación, no al ' +
    'DANE. Y verifique que los 53 municipios con curaduría sigan resolviendo ' +
    'por código.',
}

/** Todo lo que caduca, en un solo lugar. Las tres capas recorren esta lista. */
export const DATOS_CON_VIGENCIA = [
  { id: 'uvt', nombre: 'Valor de la UVT', dato: UVT },
  { id: 'factor-municipal', nombre: 'Factor municipal de expensas', dato: FACTOR_MUNICIPAL },
  { id: 'directorio-curadores', nombre: 'Directorio de curadores urbanos', dato: DIRECTORIO_CURADORES },
  { id: 'divipola', nombre: 'División municipal del DANE', dato: DIVIPOLA_DANE },
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
