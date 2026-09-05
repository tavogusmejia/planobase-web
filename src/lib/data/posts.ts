import type { Bloque, BloqueTraducido, PilarId, Post } from '@/lib/types'
import { posts, postPorSlug, postsDelPilar } from '@content/posts'
import { traduccionesPost } from '@content/blog/en'

/**
 * Los artículos, en el idioma que se pida.
 *
 * El español es la fuente y el inglés una superposición: `content/blog/en/`
 * trae solo lo traducible —titular, resumen, meta y el cuerpo— y todo lo demás
 * se toma del original. La fecha, las fuentes, el pilar, las etiquetas y la
 * puerta viven en un solo sitio a propósito, para que no puedan divergir entre
 * idiomas y para que `scripts/check-fechas.ts` siga siendo válido.
 *
 * Nada de aquí lanza. Un artículo con la traducción a medias se sirve mezclado
 * —lo traducido en inglés, lo demás en español— antes que roto, que es la regla
 * declarada del sitio. Lo que denuncia el desajuste es
 * `scripts/check-traducciones.ts`, en el build, donde sí se puede arreglar.
 */

/**
 * Funde un bloque traducido sobre el original.
 *
 * Si los tipos no coinciden, gana el español. Un desajuste aquí significa que
 * la traducción se descolocó respecto del original —el fallo silencioso
 * probable cuando el texto lo escribe un agente— y en ese caso servir el
 * original es lo correcto: la guarda del build ya lo va a denunciar.
 */
function fusionarBloque(es: Bloque, en: BloqueTraducido | undefined): Bloque {
  if (!en || en.tipo !== es.tipo) return es

  switch (es.tipo) {
    case 'titulo':
      // El `nivel` no se traduce: es estructura del documento.
      return en.tipo === 'titulo' ? { ...es, texto: en.texto } : es
    case 'parrafo':
    case 'nota':
      return en.tipo === es.tipo ? { ...es, texto: en.texto } : es
    case 'cita':
      return en.tipo === 'cita'
        ? { ...es, texto: en.texto, ...(en.fuente ? { fuente: en.fuente } : {}) }
        : es
    case 'lista':
      // `ordenada` es estructura, no texto.
      return en.tipo === 'lista' ? { ...es, items: en.items } : es
    case 'tabla':
      return en.tipo === 'tabla'
        ? {
            ...es,
            cabeceras: en.cabeceras,
            filas: en.filas,
            ...(en.nota ? { nota: en.nota } : {}),
          }
        : es
    case 'dato':
      return en.tipo === 'dato'
        ? { ...es, valor: en.valor, etiqueta: en.etiqueta, fuente: en.fuente }
        : es
    case 'diagrama':
      return en.tipo === 'diagrama'
        ? { ...es, svg: en.svg, titulo: en.titulo, pie: en.pie }
        : es
    case 'imagen':
      // Solo el texto alternativo. La ruta, el tamaño y el placeholder son los
      // mismos en los dos idiomas y repetirlos solo los desincroniza.
      return en.tipo === 'imagen'
        ? { ...es, imagen: { ...es.imagen, alt: en.alt } }
        : es
  }
}

/** El artículo en un idioma. Sin traducción registrada, devuelve el original. */
export function traducirPost(post: Post, idioma: string): Post {
  if (idioma !== 'en') return post

  const t = traduccionesPost.get(post.slug)
  if (!t) return post

  return {
    ...post,
    titulo: t.titulo,
    resumen: t.resumen,
    metaDescripcion: t.metaDescripcion,
    cuerpo: post.cuerpo.map((b, i) => fusionarBloque(b, t.cuerpo[i])),
    ...(t.portadaAlt && post.portada
      ? { portada: { ...post.portada, alt: t.portadaAlt } }
      : {}),
    // Solo el título de una fuente, y solo si tiene edición inglesa publicada.
    // La fecha, el editor y la URL nunca se duplican: gobiernan check-fechas.
    ...(t.fuentes
      ? {
          fuentes: post.fuentes.map((f) => {
            const traducida = t.fuentes?.find((x) => x.url === f.url)
            return traducida ? { ...f, titulo: traducida.titulo } : f
          }),
        }
      : {}),
  }
}

/** ¿Este artículo está traducido a este idioma? */
export function hayTraduccion(slug: string, idioma: string): boolean {
  return idioma === 'en' ? traduccionesPost.has(slug) : true
}

export function postsDe(idioma: string): Post[] {
  return posts.map((p) => traducirPost(p, idioma))
}

export function postDe(idioma: string, slug: string): Post | null {
  const p = postPorSlug.get(slug)
  return p ? traducirPost(p, idioma) : null
}

export function postsDelPilarDe(idioma: string, pilar: PilarId): Post[] {
  return postsDelPilar(pilar).map((p) => traducirPost(p, idioma))
}

/** Cuándo se tradujo, ISO. `null` si no hay traducción a ese idioma. */
export function fechaDeTraduccion(slug: string, idioma: string): string | null {
  if (idioma !== 'en') return null
  return traduccionesPost.get(slug)?.traducido ?? null
}
