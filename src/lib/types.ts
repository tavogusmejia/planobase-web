import type { Etiqueta } from '@content/etiquetas'
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
  /**
   * `null` es «todavía no se sabe», y no es lo mismo que `false`.
   *
   * Eduardo revisó 23 de las 24 fichas el 6/9/2026; de la de Teusaquillo
   * faltan datos. Colapsar ese hueco a `false` haría que el sitio afirmara
   * que un proyecto no se construyó sin que nadie lo haya comprobado, que
   * es justo el error que esta revisión venía a cerrar.
   */
  construido: boolean | null
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
  /**
   * Segundo eje de navegación, transversal a los pilares: dónde, para quién y
   * de qué. Vocabulario cerrado en `content/etiquetas.ts`.
   *
   * El filtro y el buscador se construyen en la fase 7 de la hoja de ruta. El
   * campo existe desde ahora para que los artículos se etiqueten al
   * escribirlos, en vez de tener que releer setenta y cinco después.
   */
  etiquetas: Etiqueta[]
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

/* ==========================================================================
   Traducción

   El sitio es bilingüe (es/en) y el español es la fuente editorial. Las
   traducciones **no viven dentro del contenido** sino en `content/en/`,
   indexadas por el mismo `slug` o `id`, por una razón que no es de gusto: los
   dos archivos de contenido más grandes son generados —`content/projects.ts`
   por `pnpm media` y `content/servicios.ts` desde el PDF del portafolio—, así
   que un campo `{ es, en }` dentro de ellos obligaría a cambiar sus dos
   generadores y sus dos formatos de origen. Una superposición paralela sirve
   igual para lo generado y para lo escrito a mano, que es lo único uniforme.

   Todo lo de aquí es *superposición*: solo lo traducible. Lo que no se traduce
   —fechas, fuentes, rutas de imagen, `blurDataURL`, el `nivel` de un título, el
   `ordenada` de una lista— se toma siempre del español. No es una comodidad:
   es lo que impide que una traducción corrompa un dato estructural o que las
   fechas diverjan entre idiomas.
   ========================================================================== */

/**
 * Un bloque traducido.
 *
 * Es `Bloque` sin lo que no es texto. Un bloque de imagen aporta solo su `alt`,
 * porque la ruta, el tamaño y el placeholder son los mismos en los dos idiomas
 * y repetirlos solo abre la puerta a que se desincronicen.
 *
 * El orden y los tipos deben coincidir uno a uno con el cuerpo español. Lo
 * verifica `scripts/check-traducciones.ts`: es la forma de detectar una
 * traducción truncada, que es el fallo silencioso probable cuando el texto lo
 * escribe un agente.
 */
export type BloqueTraducido =
  | { tipo: 'titulo'; texto: string }
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'lista'; items: string[] }
  | { tipo: 'tabla'; cabeceras: string[]; filas: string[][]; nota?: string }
  | { tipo: 'cita'; texto: string; fuente?: string }
  | { tipo: 'imagen'; alt: string }
  | { tipo: 'nota'; texto: string }
  | { tipo: 'dato'; valor: string; etiqueta: string; fuente: string }
  | { tipo: 'diagrama'; svg: string; titulo: string; pie: string }

/**
 * Un artículo traducido.
 *
 * No redeclara `fecha`, `fuentes`, `pilar`, `etiquetas`, `puerta` ni `portada`,
 * y eso es deliberado por dos motivos duros:
 *
 * 1. Las fechas y las fuentes no pueden divergir entre idiomas. Con una sola
 *    fuente de verdad, `scripts/check-fechas.ts` sigue siendo válido.
 * 2. `content/blog/hechos.ts` casa patrones de texto **en español**. Si el
 *    inglés fuera un `Post` completo dentro del mismo registro, el calendario
 *    de hechos lo dejaría pasar sin mirar: la guarda más valiosa del proyecto
 *    quedaría ciega sobre la mitad del blog.
 */
export type TraduccionPost = {
  /** El mismo slug del artículo español. Es la llave, y la guarda verifica que
   *  exista y que coincida con el nombre del archivo. */
  slug: string
  titulo: string
  resumen: string
  metaDescripcion: string
  cuerpo: BloqueTraducido[]

  /**
   * Cuándo se tradujo, ISO. No es decorativo: alimenta el `lastModified` del
   * sitemap y el `dateModified` del JSON-LD. Sin esto, un artículo traducido
   * hoy le diría a Google que cambió en 2023, que es la fecha del español.
   */
  traducido: string

  /**
   * Solo el título de una fuente, y solo si esa fuente tiene edición inglesa
   * publicada. Por defecto se hereda el español: una ley colombiana se cita por
   * su nombre real, «Ley 675 de 2001», no traducida.
   *
   * La fecha, el editor y la URL no se duplican nunca: gobiernan
   * `scripts/check-fechas.ts` y deben tener una sola fuente de verdad.
   */
  fuentes?: { url: string; titulo: string }[]

  /** La portada es española; su texto alternativo sí se traduce. */
  portadaAlt?: string

  /**
   * Escotilla para el chequeo de estructura, cuando una traducción necesita de
   * verdad partir o unir bloques. Debe ser rarísima: al ir declarada, aparece
   * en el diff y alguien la mira.
   */
  estructuraLibre?: boolean
}

/**
 * Un proyecto traducido.
 *
 * Los textos alternativos de las imágenes no están aquí a propósito: son ~200 y
 * los genera `altFor()` en `scripts/prepare-media.ts` a partir del título y del
 * lugar. Traducir el título basta para que se generen también en inglés.
 */
export type TraduccionProyecto = {
  /**
   * Opcional, y casi siempre ausente. «Colegio Pradera El Volcán» y «Concurso
   * UVA Orfelinato» son nombres propios de obras y de certámenes colombianos:
   * se citan como son, igual que una ley. Solo se traduce cuando el nombre es
   * puramente descriptivo y no un nombre.
   */
  titulo?: string
  /** Descriptivo, no un nombre: este sí se traduce. */
  subtitulo?: string | null
  memoria: string
}
