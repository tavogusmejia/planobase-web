import { projects } from '@content/projects'
import { heroSlides, reconocimientos } from '@content/site'
import { CATEGORIAS, type Categoria, type Project } from '@/lib/types'

/**
 * Acceso a datos. Hoy lee de `content/`, generado desde el volcado de Wix.
 *
 * Cuando Supabase esté cargado, solo cambia el cuerpo de estas funciones: las
 * páginas consumen esta API y no saben de dónde vienen los datos. Por eso todas
 * son asíncronas aunque la implementación local sea síncrona.
 */

const publicados = projects.filter((p) => p.publicado)

export async function getProjects(): Promise<Project[]> {
  return ordenar(publicados)
}

export async function getProject(slug: string): Promise<Project | null> {
  return projects.find((p) => p.slug === slug && p.publicado) ?? null
}

export async function getAllSlugs(): Promise<string[]> {
  return publicados.map((p) => p.slug)
}

/**
 * Ancho mínimo de portada para usarse a sangre. Por debajo de esto la imagen se
 * ve blanda en pantalla completa, y hay cuatro proyectos del portafolio cuyo
 * original es pequeño y no se puede recuperar. La regla vive en el código para
 * que el sitio no pueda degradarse solo, ni ahora ni cuando se suban fotos
 * nuevas desde el panel.
 */
const ANCHO_MINIMO_HERO = 1920

/**
 * Las láminas del hero. Manda la lista declarada en `heroSlides`; si está vacía
 * o ninguna pasa el mínimo de ancho, se cae al orden por relevancia para que la
 * home nunca quede sin portada.
 */
export async function getHeroProjects(limite = 7): Promise<Project[]> {
  const suficientes = publicados.filter(
    (p) => (p.portada?.width ?? 0) >= ANCHO_MINIMO_HERO,
  )
  const porSlug = new Map(suficientes.map((p) => [p.slug, p]))

  const declaradas = heroSlides
    .map((slug) => porSlug.get(slug))
    .filter((p): p is Project => p !== undefined)

  if (process.env.NODE_ENV !== 'production') {
    const descartadas = heroSlides.filter((slug) => !porSlug.has(slug))
    if (descartadas.length > 0) {
      // Aviso y no error: que una portada nueva sea pequeña no debe tumbar la
      // home, pero tampoco puede degradarla en silencio.
      console.warn(
        `[hero] Fuera de las láminas declaradas: ${descartadas.join(', ')}. ` +
          `No existen, no están publicadas, o su portada no llega a ${ANCHO_MINIMO_HERO} px.`,
      )
    }
  }

  if (declaradas.length > 0) return declaradas.slice(0, limite)

  return suficientes
    .slice()
    .sort(
      (a, b) =>
        Number(b.enHeroHome) - Number(a.enHeroHome) ||
        Number(b.destacado) - Number(a.destacado) ||
        b.anio - a.anio ||
        a.titulo.localeCompare(b.titulo, 'es'),
    )
    .slice(0, limite)
}

export async function getFeatured(limit = 6): Promise<Project[]> {
  return ordenar(publicados).slice(0, limit)
}

export async function getByCategory(categoria: Categoria): Promise<Project[]> {
  return ordenar(publicados.filter((p) => p.categorias.includes(categoria)))
}

/**
 * Tres proyectos de la misma categoría, excluyendo el actual. Si no alcanzan,
 * completa con los más recientes para no dejar el bloque a medias.
 */
export async function getRelated(project: Project, limit = 3): Promise<Project[]> {
  const mismos = publicados.filter(
    (p) =>
      p.slug !== project.slug &&
      p.categorias.some((c) => project.categorias.includes(c)),
  )
  const resto = publicados.filter(
    (p) => p.slug !== project.slug && !mismos.includes(p),
  )
  return [...ordenar(mismos), ...ordenar(resto)].slice(0, limit)
}

/** Anterior y siguiente en el orden del portafolio. */
export async function getNeighbours(slug: string) {
  const lista = ordenar(publicados)
  const i = lista.findIndex((p) => p.slug === slug)
  if (i === -1) return { anterior: null, siguiente: null }
  return {
    anterior: lista[i - 1] ?? lista[lista.length - 1] ?? null,
    siguiente: lista[i + 1] ?? lista[0] ?? null,
  }
}

/**
 * Cifras de la home. Se calculan del conjunto real, no se escriben a mano: si
 * mañana entra un proyecto nuevo por el admin, la home se actualiza sola.
 *
 * Nota sobre ciudades: salen 8 porque los datos incluyen Jamundí, que el
 * material de migración no contaba. Pendiente de confirmar con el estudio si
 * Jamundí se cuenta aparte o dentro de Cali.
 */
export async function getStats() {
  const anios = publicados.map((p) => p.anio)
  return {
    proyectos: publicados.length,
    ciudades: new Set(publicados.map((p) => p.ciudad)).size,
    reconocimientos: reconocimientos.length,
    desde: Math.min(...anios),
  }
}

export async function getCategoryCounts(): Promise<Record<Categoria, number>> {
  // Se parte de la taxonomía completa en cero, no del conteo. Una categoría sin
  // proyectos tiene que poder pintarse como vacía: es la que anuncia por dónde
  // va a crecer el portafolio, y desaparecer del filtro sería justo lo contrario.
  const out = Object.fromEntries(CATEGORIAS.map((c) => [c, 0])) as Record<
    Categoria,
    number
  >
  for (const p of publicados) {
    for (const c of p.categorias) out[c] += 1
  }
  return out
}

/** Destacados primero, luego año descendente, luego alfabético. */
function ordenar(lista: Project[]): Project[] {
  return [...lista].sort(
    (a, b) =>
      Number(b.destacado) - Number(a.destacado) ||
      b.anio - a.anio ||
      a.titulo.localeCompare(b.titulo, 'es'),
  )
}
