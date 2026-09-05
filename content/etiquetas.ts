/**
 * Vocabulario cerrado de etiquetas.
 *
 * Segundo eje de navegación del blog, transversal a los pilares: alguien que
 * busca «Bogotá» o «copropiedad» los encuentra hoy repartidos en cinco pilares
 * distintos. El filtro y el buscador se construyen en la fase 7 de la hoja de
 * ruta; **el dato se captura desde ahora** para no tener que releer setenta y
 * cinco artículos después.
 *
 * Cerrado a propósito. Una lista abierta produce «propiedad horizontal»,
 * «propiedad-horizontal» y «copropiedad» como tres etiquetas distintas, y
 * entonces el filtro deja de servir. Si hace falta una nueva, se añade aquí y
 * el compilador obliga a usarla bien.
 *
 * Tres ejes, y un artículo suele llevar una de cada uno:
 *   dónde · para quién · de qué
 */
export const ETIQUETAS = {
  // Dónde
  nacional: 'Toda Colombia',
  bogota: 'Bogotá y la sabana',
  cali: 'Cali',
  jamundi: 'Jamundí',
  medellin: 'Medellín',
  costa: 'Costa Caribe',

  // Para quién
  propietario: 'Propietarios',
  administrador: 'Administradores de copropiedad',
  constructora: 'Constructoras',
  entidad: 'Entidades públicas',

  // De qué
  licencia: 'Licencias y curadurías',
  'norma-urbana': 'Norma urbana y POT',
  costos: 'Costos y honorarios',
  contrato: 'Contratos y responsabilidad',
  patologia: 'Patología de edificaciones',
  'propiedad-horizontal': 'Propiedad horizontal',
  'suelo-rural': 'Suelo rural',
  sismo: 'Sismo y reconstrucción',
  seguridad: 'Seguridad',
  estructura: 'Estructura y suelos',
} as const

export type Etiqueta = keyof typeof ETIQUETAS

export function nombreEtiqueta(e: Etiqueta): string {
  return ETIQUETAS[e]
}
