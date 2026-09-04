import { projects } from '@content/projects'
import { reconocimientos } from '@content/site'
import type { Categoria, Project } from '@/lib/types'

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
 * Los proyectos del hero, por relevancia: primero los declarados en el sitio,
 * luego los destacados, luego por año descendente. Solo entran los que tienen
 * portada suficientemente grande.
 */
export async function getHeroProjects(limite = 7): Promise<Project[]> {
  return publicados
    .filter((p) => (p.portada?.width ?? 0) >= ANCHO_MINIMO_HERO)
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
  const out = {} as Record<Categoria, number>
  for (const p of publicados) {
    for (const c of p.categorias) out[c] = (out[c] ?? 0) + 1
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
