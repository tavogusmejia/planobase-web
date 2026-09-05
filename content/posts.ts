import type { Bloque, Post } from '@/lib/types'
import { post as bienvenidosAPlanoBase } from './blog/bienvenidos-a-plano-base'
import { post as fisurasEnMuros } from './blog/fisuras-en-muros'
import { post as licenciaJamundi } from './blog/licencia-de-construccion-en-jamundi'
import { post as potDeCali } from './blog/pot-de-cali-y-su-licencia'
import { post as cuantoCobraArquitecto } from './blog/cuanto-cobra-un-arquitecto'

/**
 * El índice del blog.
 *
 * Antes este archivo se generaba desde `wix-migration/01-content/blog/*.md` y
 * llevaba el aviso de «no editar a mano». Esa carpeta es el volcado de la
 * migración y no puede ser la casa del contenido nuevo: lo que se escriba hoy
 * no salió de Wix. Los artículos viven ahora en `content/blog/`, uno por
 * archivo, y aquí solo se listan y se ordenan.
 *
 * Añadir un artículo son dos líneas: el `import` y su entrada en el arreglo.
 * `pnpm build` se encarga del resto —comprueba que ningún artículo se fecha
 * antes de la fuente más reciente que cita, y que su slug siga resolviendo—.
 */
const registro: Post[] = [
  bienvenidosAPlanoBase,
  fisurasEnMuros,
  licenciaJamundi,
  potDeCali,
  cuantoCobraArquitecto,
]

/** Ordenados del más reciente al más antiguo. Es el orden de lectura. */
export const posts: Post[] = [...registro].sort((a, b) =>
  b.fecha.localeCompare(a.fecha),
)

export const postPorSlug = new Map(posts.map((p) => [p.slug, p]))

/** Palabras por minuto de lectura en prosa técnica en español. Se queda corto a
 *  propósito: es preferible que la cifra sobre-estime el tiempo a que alguien
 *  sienta que le mintieron. */
const PPM = 180

function palabrasDe(b: Bloque): number {
  const contar = (s: string) => s.trim().split(/\s+/).filter(Boolean).length
  switch (b.tipo) {
    case 'titulo':
    case 'parrafo':
    case 'nota':
      return contar(b.texto)
    case 'cita':
      return contar(b.texto) + (b.fuente ? contar(b.fuente) : 0)
    case 'lista':
      return b.items.reduce((n, i) => n + contar(i), 0)
    case 'tabla':
      // Una tabla se escanea, no se lee. Se cuenta la mitad.
      return Math.round(
        (b.cabeceras.reduce((n, c) => n + contar(c), 0) +
          b.filas.reduce((n, f) => n + f.reduce((m, c) => m + contar(c), 0), 0)) /
          2,
      )
    case 'dato':
      return contar(b.etiqueta)
    case 'imagen':
    case 'diagrama':
      // Mirar una figura cuesta tiempo aunque no tenga palabras.
      return 20
  }
}

/** Minutos de lectura, calculados y no escritos a mano: una cifra a mano se
 *  queda vieja en cuanto alguien corrige un párrafo. */
export function minutosDeLectura(post: Post): number {
  const palabras = post.cuerpo.reduce((n, b) => n + palabrasDe(b), 0)
  return Math.max(1, Math.round(palabras / PPM))
}

export function postsDelPilar(pilar: Post['pilar']): Post[] {
  return posts.filter((p) => p.pilar === pilar)
}
