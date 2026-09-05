/**
 * APBS — las herramientas.
 *
 * Sección propia, con su lugar en el menú. La idea es que el sitio no solo
 * explique cómo funcionan las cosas sino que **haga el cálculo**: quien llega
 * buscando cuánto cuestan las expensas de su licencia se va con la cifra, no
 * con una explicación de la fórmula.
 *
 * Criterio de admisión, y conviene que sea estricto: una herramienta entra aquí
 * solo si **hace un cálculo o una verificación real, con datos verificados y
 * con la fuente a la vista**. Un formulario que devuelve un rango inventado es
 * peor que no tener nada — hay ya bastante de eso en internet.
 *
 * Y por eso cada herramienta declara `fuente` y `vigencia`: el día que cambie
 * la UVT, el decreto o la tabla, el dato tiene que poder auditarse sin abrir el
 * código.
 */
export type Herramienta = {
  slug: string
  /** Cómo se nombra en el índice y en la navegación interna. */
  nombre: string
  /** El titular de su página. */
  titulo: string
  /** Qué hace, en una frase. Es lo que se lee en el índice. */
  resumen: string
  metaTitulo: string
  metaDescripcion: string
  /** En qué se apoya el cálculo. Va visible en la página. */
  fuente: string
  /** Hasta cuándo es fiable el dato, o qué lo haría caducar. */
  vigencia: string
  estado: 'disponible' | 'en-construccion'
  /** La puerta de servicio a la que dirige, si aplica. */
  puerta: string | null
}

export const herramientas: Herramienta[] = [
  {
    slug: 'expensas-de-curaduria',
    nombre: 'Expensas de curaduría',
    titulo: 'Cuánto cuestan las expensas de su licencia',
    resumen:
      'Lo que cobra el curador urbano por estudiar su solicitud, calculado ' +
      'con la fórmula del decreto y la UVT del año. Para cualquier municipio ' +
      'de Colombia — incluidos los que no tienen curaduría y donde, por norma, ' +
      'no se pagan expensas.',
    metaTitulo: 'Calculadora de expensas de curaduría urbana en Colombia',
    metaDescripcion:
      'Calcule las expensas de curaduría de su licencia de construcción en ' +
      'cualquier municipio de Colombia, con la fórmula oficial.',
    fuente:
      'Decreto 1077 de 2015, art. 2.2.6.6.8.3, sustituido por el Decreto 1890 ' +
      'de 2021, con el valor de la UVT fijado por la DIAN para el año en curso.',
    vigencia:
      'La UVT cambia cada año, por resolución de la DIAN de diciembre. El ' +
      'factor municipal y las tarifas en UVT solo cambian si se modifica el ' +
      'decreto.',
    estado: 'disponible',
    puerta: 'proyecto-nuevo',
  },
]

export const herramientaPorSlug = new Map(herramientas.map((h) => [h.slug, h]))

/** Las que ya se pueden usar. Una herramienta a medias no se publica. */
export const herramientasDisponibles = herramientas.filter(
  (h) => h.estado === 'disponible',
)
