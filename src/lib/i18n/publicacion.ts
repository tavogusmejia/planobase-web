import type { Categoria } from '@/lib/types'
import { hayTraduccion } from '@/lib/data/posts'
import {
  paginaTraducida,
  proyectoTraducido,
  puertaTraducida,
  temaTraducido,
  verticalTraducida,
} from '@/lib/data/contenido'

/**
 * Qué se publica en qué idioma.
 *
 * El sitio se traduce página por página y cada ruta entra al índice inglés
 * cuando su contenido está traducido de verdad. Eso exige un predicado por
 * ruta, no el interruptor global que había —una lista de idiomas indexables—,
 * porque el estado normal durante meses va a ser «unas sí y otras no».
 *
 * **Publicar es consecuencia de traducir, no un acto aparte.** El predicado se
 * deriva de que exista el dato de traducción; no hay una lista de casillas
 * «hecho» que alguien tenga que marcar. Una lista así se desincroniza en la
 * primera semana —se traduce y no se marca, o se marca y no se traduce— y el
 * fallo es de los que no se ven: una página en español indexada como inglesa.
 *
 * Esta es la única fuente de esa verdad. La consultan los `robots` de cada
 * página, el `hreflang`, el sitemap y la guarda del build, y por eso los cuatro
 * no pueden contradecirse. No importa nada de Next: `scripts/check-traducciones.ts`
 * corre fuera.
 */

/** Todo lo que tiene URL propia y puede estar traducido o no. */
export type RutaTraducible =
  | { tipo: 'pagina'; ruta: string }
  | { tipo: 'proyecto'; slug: string }
  | { tipo: 'articulo'; slug: string }
  | { tipo: 'tema'; slug: string }
  | { tipo: 'vertical'; categoria: Categoria }
  | { tipo: 'puerta'; slug: string }
  | { tipo: 'herramienta'; slug: string }

/** La ruta sin prefijo de idioma. La home es la cadena vacía, no «/». */
export function rutaDe(e: RutaTraducible): string {
  switch (e.tipo) {
    case 'pagina':
      return e.ruta
    case 'proyecto':
      return `/proyectos/${e.slug}`
    case 'articulo':
      return `/blog/${e.slug}`
    case 'tema':
      return `/blog/tema/${e.slug}`
    case 'vertical':
      return `/proyectos/categoria/${e.categoria}`
    case 'puerta':
      return `/servicios/${e.slug}`
    case 'herramienta':
      return `/apbs/${e.slug}`
  }
}

/**
 * ¿El contenido de esta ruta está traducido a este idioma?
 *
 * El español es la fuente editorial: siempre lo está. Del inglés, hoy solo hay
 * artículos; el resto de familias devuelve `false` hasta que exista
 * `content/en/` para ellas, y ese `false` es correcto, no un pendiente
 * disfrazado. Mientras tanto la ruta inglesa sigue viva y navegable cayendo a
 * español, simplemente sin indexar.
 */
export function traducida(e: RutaTraducible, idioma: string): boolean {
  if (idioma === 'es') return true
  if (idioma !== 'en') return false

  switch (e.tipo) {
    case 'articulo':
      return hayTraduccion(e.slug, idioma)
    case 'pagina':
      return paginaTraducida(e.ruta, idioma)
    case 'puerta':
      return puertaTraducida(e.slug, idioma)
    case 'proyecto':
      return proyectoTraducido(e.slug, idioma)
    case 'tema':
      return temaTraducido(e.slug, idioma)
    case 'vertical':
      return verticalTraducida(e.categoria, idioma)
    // Pendiente de `content/en/`: la calculadora de expensas y su índice.
    case 'herramienta':
      return false
  }
}
