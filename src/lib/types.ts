/**
 * Modelo de dominio. Estas formas son deliberadamente equivalentes a las tablas
 * de `01-supabase-schema.sql`, para que cambiar la fuente de datos de local a
 * Supabase no obligue a tocar ni una página.
 */

export type Categoria =
  | 'cultural'
  | 'educativo'
  | 'institucional'
  | 'residencial'
  | 'urbano'

/** Del filtro de Wix existía además "Oficinas". No hay ni un proyecto de esa
 *  categoría, así que no se migra. */
export const CATEGORIAS: readonly Categoria[] = [
  'cultural',
  'educativo',
  'institucional',
  'residencial',
  'urbano',
] as const

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
