/**
 * Modelo de dominio. Estas formas son deliberadamente equivalentes a las tablas
 * de `01-supabase-schema.sql`, para que cambiar la fuente de datos de local a
 * Supabase no obligue a tocar ni una página.
 */

/**
 * Taxonomía del portafolio.
 *
 * El grid se ordena por programa —qué es el edificio— igual que el de mk27, y
 * la lista se declara completa desde ahora aunque hoy varias entradas estén en
 * cero: la retícula es el sitio donde el estudio va a ir dejando obra, y una
 * categoría vacía anuncia hacia dónde crece. Se marcan como vacías en la
 * interfaz; no se ocultan.
 *
 * Del filtro de Wix venían cinco valores. Dos cambios, ambos sostenidos por el
 * dato y no por criterio nuestro:
 *
 * - "Residencial" se parte en `casas` y `vivienda`. Casa Aguilar y Casa Aguilar
 *   Castrillón son vivienda unifamiliar; Tirreno y Arezzo se describen en su
 *   propio subtítulo como "Edificio multifamiliar". Mostrar una casa de campo y
 *   dos torres de apartamentos bajo la misma palabra no le sirve a ninguno de
 *   los dos clientes.
 * - `concursos` no es un programa sino una naturaleza, y se cruza con las
 *   demás: un proyecto puede ser Educativo y Concurso a la vez. Sale del dato
 *   duro —slug, premio o subtítulo—, nunca de una suposición.
 *
 * "Oficinas" no se migra: el filtro de Wix la tenía y no había un solo proyecto.
 */
export type Categoria =
  | 'educativo'
  | 'cultural'
  | 'institucional'
  | 'urbano'
  | 'casas'
  | 'vivienda'
  | 'comercial'
  | 'hoteleria'
  | 'interiorismo'
  | 'diseno'
  | 'concursos'

/** Programa. Es el eje principal del grid y su orden es el de la navegación. */
export const CATEGORIAS_PROGRAMA = [
  'educativo',
  'cultural',
  'institucional',
  'urbano',
  'casas',
  'vivienda',
  'comercial',
  'hoteleria',
  'interiorismo',
  'diseno',
] as const satisfies readonly Categoria[]

/** Naturaleza del encargo. Va aparte en la navegación porque cruza el eje. */
export const CATEGORIAS_NATURALEZA = ['concursos'] as const satisfies readonly Categoria[]

export const CATEGORIAS: readonly Categoria[] = [
  ...CATEGORIAS_PROGRAMA,
  ...CATEGORIAS_NATURALEZA,
]

export type ProjectImage = {
  /** Ruta relativa dentro del bucket `media` y de `public/media`. */
  path: string
  width: number
  height: number
  /** Placeholder base64 generado por `pnpm media`. */
  blurDataURL: string
  alt: string
}

export type Project = {
  slug: string
  titulo: string
  subtitulo: string | null
  anio: number
  ciudad: string
  departamento: string
  localidad: string | null
  /** Null cuando el dato no existe. Nunca se muestra "0 m²". */
  areaM2: number | null
  diseno: string[]
  cliente: string | null
  sector: string | null
  premio: string | null
  creditosFotografia: string | null
  construido: boolean
  categorias: Categoria[]
  destacado: boolean
  enHeroHome: boolean
  publicado: boolean
  memoria: string
  videoUrl: string | null
  portada: ProjectImage | null
  galeria: ProjectImage[]
  /** Incidencias heredadas del CMS de Wix. No se renderizan: son para el README
   *  y para el panel de administración. */
  alertas: string[]
}

export type TeamMember = {
  slug: string
  nombre: string
  cargo: string[]
  foto: ProjectImage | null
}

export type Award = {
  puesto: 'primer' | 'segundo'
  titulo: string
  anio: number
  proyectoSlug: string | null
  /** Público o privado. Se distingue porque es lo primero que mira un evaluador
   *  institucional, y presentarlos mezclados le resta al que sí fue público. */
  ambito: 'publico' | 'privado'
}

export type Post = {
  slug: string
  titulo: string
  fecha: string
  resumen: string
  cuerpo: string
  portada: ProjectImage | null
}

export type Service = {
  slug: string
  nombre: string
  tagline: string
  descripcion: string
  duracionMin: number
  precioCOP: number
  politicas: { clave: string; texto: string }[]
}
