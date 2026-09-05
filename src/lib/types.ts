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

// ── Blog ──────────────────────────────────────────────────────────────────
//
// El cuerpo de un artículo dejó de ser `string`. Lo era cuando el blog tenía
// una entrada de 2022 que se partía por saltos de línea y se pintaba como
// párrafos planos; con eso no se puede publicar una pieza que necesita
// subtítulos, una tabla de umbrales y una fuente citada al pie.
//
// Es una unión discriminada y no markdown a propósito: el repositorio ya
// escribe su propio .ics y llama a Resend con `fetch` crudo en vez de traer un
// SDK. Un bloque tipado se valida en el build, no en el navegador, y hace
// imposible publicar una tabla sin cabeceras o una imagen sin `alt`.

/** Quién hizo una imagen que no es del estudio. Si la imagen no es propia, esto
 *  no es opcional. */
export type Credito = {
  autor: string
  /** Dónde está publicada: «Wikimedia Commons», el medio, el organismo. */
  fuente: string
  url: string
  /** «CC BY-SA 4.0», «Dominio público», «Uso editorial con atribución». */
  licencia: string
}

/** Imagen de artículo. Es una `ProjectImage` que además puede llevar crédito:
 *  las del portafolio son propias y no lo necesitan. */
export type ImagenBlog = ProjectImage & { credito?: Credito }

/**
 * Una fuente citada.
 *
 * `fecha` no es decorativa: `scripts/check-fechas.ts` la usa para impedir que
 * un artículo se publique con fecha anterior al documento que cita. Sin eso,
 * fechar los artículos hacia atrás produce piezas que citan el futuro.
 */
export type Fuente = {
  titulo: string
  /** Quién la publica. */
  editor: string
  url: string
  /** Fecha del documento citado, ISO. `null` si es una norma sin fecha útil. */
  fecha: string | null
}

/**
 * Los bloques del cuerpo.
 *
 * `texto` admite formato en línea mínimo —`**fuerte**`, `*énfasis*` y
 * `[texto](url)`— resuelto en `src/components/blog/EnLinea.tsx`. No hay más
 * sintaxis a propósito: cada añadido es una forma nueva de que un artículo se
 * rompa en silencio.
 */
export type Bloque =
  | { tipo: 'titulo'; nivel: 2 | 3; texto: string }
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'lista'; ordenada?: boolean; items: string[] }
  | { tipo: 'tabla'; cabeceras: string[]; filas: string[][]; nota?: string }
  | { tipo: 'cita'; texto: string; fuente?: string }
  | { tipo: 'imagen'; imagen: ImagenBlog }
  /** Aparte del hilo: una advertencia, un matiz, algo que no se puede perder. */
  | { tipo: 'nota'; texto: string }
  /** Una cifra que se sostiene sola, con quién la publica y cuándo. */
  | { tipo: 'dato'; valor: string; etiqueta: string; fuente: string }
  /**
   * Diagrama propio, en SVG.
   *
   * El SVG viaja como texto y se inyecta con `dangerouslySetInnerHTML`. Es
   * seguro porque es una constante del repositorio escrita por nosotros y
   * resuelta en el build: nunca hay entrada de usuario en este campo. La
   * alternativa —un registro de componentes— parte cada artículo en dos
   * archivos y no compra nada aquí.
   *
   * Debe usar `currentColor` para trazos y texto, y no fijar `width` ni
   * `height`, para que herede el color del tema y escale con el contenedor.
   */
  | { tipo: 'diagrama'; svg: string; titulo: string; pie: string }

/** Los diez pilares del plan editorial. Ver `docs/PLAN-BLOG.md`. */
export type PilarId =
  | 'costos'
  | 'tramites'
  | 'patologias'
  | 'proceso'
  | 'institucional'
  | 'casos'
  | 'local'
  | 'casa-campestre'
  | 'piscinas'
  | 'caribe'

export type Post = {
  slug: string
  titulo: string
  /** El gancho. Es lo que se lee en la rejilla y decide si alguien entra. */
  resumen: string
  /** Meta description propia: más corta que el resumen y con la consulta
   *  dentro. Separadas porque cumplen funciones distintas. */
  metaDescripcion: string
  pilar: PilarId
  /** Fecha de publicación, ISO. Nunca anterior a la fuente más reciente que
   *  cita el artículo — lo verifica `pnpm build`. */
  fecha: string
  /** Última revisión. Las piezas de costos se reindexan por trimestre. */
  actualizado: string | null
  autor: string
  cuerpo: Bloque[]
  portada: ImagenBlog | null
  /** Slug de la puerta de servicio a la que dirige. Ver `content/puertas.ts`. */
  puerta: string | null
  fuentes: Fuente[]
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
