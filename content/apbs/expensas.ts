/**
 * Expensas de curaduría urbana. Los datos.
 *
 * Fuente principal: **Decreto 1077 de 2015**, arts. 2.2.6.6.8.1 a 2.2.6.6.8.17,
 * con los arts. .3, .11, .12, .13 y .15 sustituidos por el **Decreto 1890 de
 * 2021**, y el art. .7 por el **Decreto 1203 de 2017**.
 *
 * Tres cosas que la verificación corrigió y que conviene no volver a
 * equivocar:
 *
 * 1. **El Decreto 1890 de 2021 NO tocó la tabla del factor municipal.** Esa
 *    tabla sigue siendo la del art. 2.2.6.6.8.4 del Decreto 1077, que compila
 *    el art. 119 del Decreto 1469 de 2010.
 * 2. **El descuento del 30 % por revisión independiente de diseños ya no
 *    existe.** El Decreto 1203 de 2017 reescribió el art. 2.2.6.6.8.7 y lo
 *    eliminó. Sigue apareciendo en cartillas.
 * 3. **El «30 % de reforzamiento» no es un descuento sobre la expensa**: es una
 *    reducción del *área* que entra como Q. Como el factor j es decreciente en
 *    Q, el ahorro real es mucho menor que un 70 %.
 *
 * Y una cuarta que gobierna todo: **no existe un factor municipal supletorio**.
 * El factor solo se asigna donde hay curaduría, y donde no hay curaduría está
 * prohibido cobrar expensas. Si un municipio no está en esta tabla, la
 * respuesta no es «no lo sabemos»: es **no se pagan**.
 */

export type FuenteFactor =
  | { tipo: 'decreto' }
  | { tipo: 'resolucion'; norma: string; anio: number }

export type Municipio = {
  nombre: string
  departamento: string
  /** Factor m de la fórmula. */
  m: number
  fuente: FuenteFactor
  /**
   * Despachos de curaduría creados, y cuáles estaban vacantes en el último
   * directorio oficial. Si todos están vacantes, la alcaldía asume el servicio
   * y **no cobra expensas**.
   */
  despachos: number
  vacantes: number[]
}

const DECRETO: FuenteFactor = { tipo: 'decreto' }
const res = (norma: string, anio: number): FuenteFactor => ({
  tipo: 'resolucion',
  norma,
  anio,
})

/**
 * Los municipios con factor municipal asignado.
 *
 * Los 35 primeros están en el propio decreto. Los demás recibieron su factor
 * por resolución del Ministerio de Vivienda al designar curadores por primera
 * vez, como ordena el parágrafo del art. 2.2.6.6.8.4.
 *
 * Los nombres son los del directorio de la Superintendencia, que difieren de
 * los del decreto en cuatro casos —Buga, Cali, Cúcuta y Cartagena—. Se usa la
 * forma larga y se aceptan las dos al buscar.
 */
export const MUNICIPIOS: Municipio[] = [
  { nombre: 'Armenia', departamento: 'Quindío', m: 0.641, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Barrancabermeja', departamento: 'Santander', m: 0.85, fuente: DECRETO, despachos: 1, vacantes: [] },
  { nombre: 'Barranquilla', departamento: 'Atlántico', m: 0.855, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Bello', departamento: 'Antioquia', m: 0.765, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Bogotá D.C.', departamento: 'Bogotá D.C.', m: 0.938, fuente: DECRETO, despachos: 5, vacantes: [] },
  { nombre: 'Bucaramanga', departamento: 'Santander', m: 0.76, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Buenaventura', departamento: 'Valle del Cauca', m: 0.638, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Guadalajara de Buga', departamento: 'Valle del Cauca', m: 0.574, fuente: DECRETO, despachos: 1, vacantes: [] },
  { nombre: 'Santiago de Cali', departamento: 'Valle del Cauca', m: 0.938, fuente: DECRETO, despachos: 3, vacantes: [] },
  { nombre: 'Cartagena de Indias', departamento: 'Bolívar', m: 0.9, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Cartago', departamento: 'Valle del Cauca', m: 0.638, fuente: DECRETO, despachos: 1, vacantes: [] },
  { nombre: 'San José de Cúcuta', departamento: 'Norte de Santander', m: 0.9, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Dosquebradas', departamento: 'Risaralda', m: 0.72, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Duitama', departamento: 'Boyacá', m: 0.638, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Envigado', departamento: 'Antioquia', m: 0.76, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Floridablanca', departamento: 'Santander', m: 0.675, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Ibagué', departamento: 'Tolima', m: 0.76, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Itagüí', departamento: 'Antioquia', m: 0.765, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Manizales', departamento: 'Caldas', m: 0.81, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Medellín', departamento: 'Antioquia', m: 0.938, fuente: DECRETO, despachos: 4, vacantes: [] },
  { nombre: 'Montería', departamento: 'Córdoba', m: 0.574, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Neiva', departamento: 'Huila', m: 0.608, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Palmira', departamento: 'Valle del Cauca', m: 0.72, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Pasto', departamento: 'Nariño', m: 0.608, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Pereira', departamento: 'Risaralda', m: 0.76, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Popayán', departamento: 'Cauca', m: 0.608, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Santa Marta', departamento: 'Magdalena', m: 0.638, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Sincelejo', departamento: 'Sucre', m: 0.638, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Soacha', departamento: 'Cundinamarca', m: 0.675, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Sogamoso', departamento: 'Boyacá', m: 0.574, fuente: DECRETO, despachos: 2, vacantes: [1] },
  { nombre: 'Soledad', departamento: 'Atlántico', m: 0.765, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Tuluá', departamento: 'Valle del Cauca', m: 0.51, fuente: DECRETO, despachos: 2, vacantes: [2] },
  { nombre: 'Tunja', departamento: 'Boyacá', m: 0.54, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Valledupar', departamento: 'Cesar', m: 0.608, fuente: DECRETO, despachos: 2, vacantes: [] },
  { nombre: 'Villavicencio', departamento: 'Meta', m: 0.54, fuente: DECRETO, despachos: 2, vacantes: [] },

  { nombre: 'Girón', departamento: 'Santander', m: 0.9, fuente: res('Resolución MVCT 0072 de 2014', 2014), despachos: 2, vacantes: [] },
  { nombre: 'Piedecuesta', departamento: 'Santander', m: 0.713, fuente: res('Resolución MVCT 0199 de 2017', 2017), despachos: 2, vacantes: [] },
  { nombre: 'Puerto Colombia', departamento: 'Atlántico', m: 0.6375, fuente: res('Resolución MVCT 0947 de 2017', 2017), despachos: 2, vacantes: [2] },
  { nombre: 'Fusagasugá', departamento: 'Cundinamarca', m: 0.641, fuente: res('Resolución MVCT 0504 de 2019', 2019), despachos: 2, vacantes: [] },
  { nombre: 'Yopal', departamento: 'Casanare', m: 0.608, fuente: res('Resolución MVCT 0505 de 2019', 2019), despachos: 2, vacantes: [] },
  { nombre: 'Rionegro', departamento: 'Antioquia', m: 0.855, fuente: res('Resolución MVCT 0681 de 2019', 2019), despachos: 2, vacantes: [] },
  { nombre: 'Yumbo', departamento: 'Valle del Cauca', m: 0.81, fuente: res('Resolución MVCT 0750 de 2019', 2019), despachos: 2, vacantes: [] },
  { nombre: 'Cajicá', departamento: 'Cundinamarca', m: 0.641, fuente: res('Resolución MVCT 0036 de 2020', 2020), despachos: 2, vacantes: [] },
  { nombre: 'Funza', departamento: 'Cundinamarca', m: 0.938, fuente: res('Resolución MVCT 0068 de 2020', 2020), despachos: 2, vacantes: [] },
  { nombre: 'Mosquera', departamento: 'Cundinamarca', m: 0.938, fuente: res('Resolución MVCT 0115 de 2020', 2020), despachos: 2, vacantes: [] },
  { nombre: 'Tocancipá', departamento: 'Cundinamarca', m: 0.713, fuente: res('Resolución MVCT 0122 de 2020', 2020), despachos: 2, vacantes: [] },
  { nombre: 'Cota', departamento: 'Cundinamarca', m: 0.713, fuente: res('Resolución MVCT 0785 de 2020', 2020), despachos: 2, vacantes: [] },
  { nombre: 'Jamundí', departamento: 'Valle del Cauca', m: 0.608, fuente: res('Resolución MVCT 0387 de 2022', 2022), despachos: 2, vacantes: [1, 2] },
  { nombre: 'Chía', departamento: 'Cundinamarca', m: 0.938, fuente: res('Resolución MVCT 0679 de 2024', 2024), despachos: 2, vacantes: [1, 2] },
  { nombre: 'Madrid', departamento: 'Cundinamarca', m: 0.713, fuente: res('Resolución MVCT 0604 de 2025', 2025), despachos: 2, vacantes: [1, 2] },
  { nombre: 'Sabaneta', departamento: 'Antioquia', m: 0.938, fuente: res('Resolución MVCT 0950 de 2025', 2025), despachos: 2, vacantes: [1, 2] },
  { nombre: 'Zipaquirá', departamento: 'Cundinamarca', m: 0.675, fuente: res('Resolución MVCT 0989 de 2025', 2025), despachos: 2, vacantes: [1, 2] },
  { nombre: 'Girardota', departamento: 'Antioquia', m: 0.638, fuente: res('Resolución MVCT 1050 de 2025', 2025), despachos: 2, vacantes: [1, 2] },
]

/**
 * Los 32 departamentos y el Distrito Capital.
 *
 * Están completos a propósito, aunque en la mayoría no haya curaduría: el
 * selector tiene que servirle a todo el país, y el resultado «en su municipio
 * no se pagan expensas» es tan válido como una cifra. Un selector que solo
 * ofreciera los cincuenta y tres con curaduría dejaría fuera a mil municipios.
 */
export const DEPARTAMENTOS = [
  'Amazonas',
  'Antioquia',
  'Arauca',
  'Atlántico',
  'Bogotá D.C.',
  'Bolívar',
  'Boyacá',
  'Caldas',
  'Caquetá',
  'Casanare',
  'Cauca',
  'Cesar',
  'Chocó',
  'Córdoba',
  'Cundinamarca',
  'Guainía',
  'Guaviare',
  'Huila',
  'La Guajira',
  'Magdalena',
  'Meta',
  'Nariño',
  'Norte de Santander',
  'Putumayo',
  'Quindío',
  'Risaralda',
  'San Andrés y Providencia',
  'Santander',
  'Sucre',
  'Tolima',
  'Valle del Cauca',
  'Vaupés',
  'Vichada',
] as const

export type Departamento = (typeof DEPARTAMENTOS)[number]

/** Los municipios con curaduría de un departamento, ordenados. */
export function municipiosDe(departamento: string): Municipio[] {
  return MUNICIPIOS.filter((m) => m.departamento === departamento).sort((a, b) =>
    a.nombre.localeCompare(b.nombre, 'es'),
  )
}

/** Valor del selector para «cualquier otro municipio del departamento». */
export const OTRO_MUNICIPIO = '__otro__'

/** Nombres alternativos que la gente escribe, y a qué municipio corresponden. */
export const ALIAS: Record<string, string> = {
  Buga: 'Guadalajara de Buga',
  Cali: 'Santiago de Cali',
  Cúcuta: 'San José de Cúcuta',
  Cartagena: 'Cartagena de Indias',
  Bogotá: 'Bogotá D.C.',
}

/** Tarifas de la fórmula, en UVT. Art. 2.2.6.6.8.3, numerales 1 y 2. */
export const CARGO_FIJO_UVT = 10.01
export const CARGO_VARIABLE_UVT = 20.02

export const IVA = 0.19

/**
 * Factor i. Depende del **estrato** en vivienda y del **área** en los demás
 * usos. Art. 2.2.6.6.8.3, numeral 3.
 *
 * Institucional, comercio e industrial tienen valores idénticos: el decreto no
 * los distingue. Tampoco menciona «oficinas» ni «dotacional»; las curadurías
 * los asimilan a institucional.
 */
export const FACTOR_I_VIVIENDA: Record<number, number> = {
  1: 0.5,
  2: 0.5,
  3: 1.0,
  4: 1.5,
  5: 2.0,
  6: 2.5,
}

/**
 * Factor i para los demás usos, por tramo de área.
 *
 * OJO — hueco del decreto: los tramos son «1 a 300», «301 a 1000» y «más de
 * 1001». Un área de 1.000,5 m² no está cubierta, y 1.001 exacto es ambiguo.
 * Las curadurías lo resuelven de dos maneras incompatibles. Aquí se toma la
 * convención más extendida —hasta 1.000 el tramo medio, por encima el alto— y
 * se advierte en la interfaz.
 */
export function factorIOtrosUsos(area: number): number {
  if (area <= 300) return 2.9
  if (area <= 1000) return 3.2
  return 4.0
}

/**
 * Factor j de construcción. Art. 2.2.6.6.8.3, numerales 4.1 a 4.3.
 *
 * OJO — el decreto salta en Q = 11.000: el numeral 4.2 dice «inferiores a
 * 11.000» y el 4.3 «superiores a 11.000», así que el valor exacto no está en
 * ninguno. Y la función es discontinua ahí: la rama baja da j ≈ 20,3 y la alta
 * j ≈ 24,7, un escalón del 21 %. Es un salto real de la norma. Se aplica la
 * rama baja en 11.000 exacto, que es la convención de las curadurías.
 */
export function factorJConstruccion(area: number): number {
  if (area <= 100) return 0.45
  if (area <= 11_000) return 3.8 / (0.12 + 800 / area)
  return 2.2 / (0.018 + 800 / area)
}

/** Factor j de urbanismo y parcelación. Numeral 4.4. */
export function factorJUrbanismo(area: number): number {
  return 4 / (0.025 + 2000 / area)
}

/**
 * Tarifas planas, en UVT. **No pasan por la fórmula**: no llevan factor i, ni
 * j, ni m. Se comprobó comparando cinco municipios con factores distintos que
 * publican exactamente los mismos pesos para estas actuaciones.
 */
export const TARIFAS_PLANAS_UVT = {
  subdivision: 25.02,
  prorrogaORevalidacion: 25.02,
  prorrogaORevalidacionVIS: 1.67,
  conceptoDeNormaUrbanistica: 8.34,
  conceptoDeUsoDelSuelo: 1.67,
  copiaCertificadaDePlano: 0.834,
  /** Por cada unidad de vivienda. Ya lleva incluido el 50 % de VIS. */
  visIndividualPorUnidad: 8.34,
} as const

/** Lo que el decreto declara gratuito. Es información valiosa por sí sola. */
export const GRATUITO = [
  'Las consultas verbales sobre normas urbanísticas vigentes.',
  'Consultar las tablas de expensas y la ecuación en el despacho del curador.',
  'El reconocimiento de vivienda de interés social en asentamientos objeto de legalización urbanística.',
  'Cualquier trámite en un municipio sin curador urbano designado.',
] as const
