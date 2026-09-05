/**
 * Corre antes de cada `next build`, después de `check-fechas.ts`.
 *
 * El principio, y todo lo demás sale de él:
 *
 *   **Una traducción que falta nunca es un error. Una traducción mal hecha
 *   siempre lo es.**
 *
 * El sitio se traduce página por página y se publica según avanza, así que
 * «todavía no traducido» es un estado legítimo que puede durar meses. Romper el
 * build por eso haría imposible la única forma de trabajo que se decidió. Lo
 * que sí rompe el build es una traducción que existe y está mal, porque esa no
 * se ve: se sirve con toda naturalidad y nadie la revisa dos veces.
 *
 * El fallo que de verdad ocurre no es un error de idioma. Es estructural: la
 * traducción se queda a medias, o alguien renombra un slug español y la
 * traducción deja de aplicarse sin que nada avise. Por eso casi todo lo que se
 * comprueba aquí es forma y no contenido.
 */
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Bloque, BloqueTraducido, Post, TraduccionPost } from '../src/lib/types'
import { posts } from '../content/posts'
import { traduccionesPost } from '../content/blog/en'

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..')

/** El inglés suele ser más corto que el español, así que la banda es
 *  asimétrica. Por debajo del mínimo no es un idioma más apretado: es una frase
 *  cortada. */
const RAZON_MINIMA = 0.55
const RAZON_MAXIMA = 1.6

/** Igual que en el español: es lo que Google recorta. */
const META_MAXIMA = 165

type Fallo = { slug: string; motivo: string }
const fallos: Fallo[] = []
const avisos: string[] = []

const falla = (slug: string, motivo: string) => fallos.push({ slug, motivo })

// ---------------------------------------------------------------------------
// 1. Los mensajes de interfaz: los dos idiomas, las mismas claves
// ---------------------------------------------------------------------------

/**
 * `src/i18n/request.ts` funde por clave y una ausente cae al español, así que
 * esto no rompe una página. Pero un botón en español dentro de una página
 * inglesa tampoco es aceptable, y es invisible salvo que alguien navegue el
 * sitio entero en inglés. Aquí sale en el build.
 */
function clavesPlanas(o: unknown, prefijo = ''): Set<string> {
  const salida = new Set<string>()
  if (typeof o !== 'object' || o === null) return salida
  for (const [k, v] of Object.entries(o as Record<string, unknown>)) {
    if (typeof v === 'object' && v !== null) {
      for (const c of clavesPlanas(v, `${prefijo}${k}.`)) salida.add(c)
    } else {
      salida.add(`${prefijo}${k}`)
    }
  }
  return salida
}

const leerMensajes = (idioma: string): Set<string> =>
  clavesPlanas(JSON.parse(readFileSync(join(RAIZ, `messages/${idioma}.json`), 'utf8')))

const clavesEs = leerMensajes('es')
const clavesEn = leerMensajes('en')
const soloEs = [...clavesEs].filter((k) => !clavesEn.has(k))
const soloEn = [...clavesEn].filter((k) => !clavesEs.has(k))

if (soloEs.length > 0) {
  falla('messages', `sin traducir en en.json: ${soloEs.join(', ')}`)
}
if (soloEn.length > 0) {
  falla('messages', `sobran en en.json, no existen en es.json: ${soloEn.join(', ')}`)
}

// ---------------------------------------------------------------------------
// 2. Traducciones huérfanas
// ---------------------------------------------------------------------------

const porSlug = new Map(posts.map((p) => [p.slug, p]))

for (const slug of traduccionesPost.keys()) {
  if (!porSlug.has(slug)) {
    falla(
      slug,
      'hay traducción pero no existe el artículo español con ese slug. ' +
        'Suele ser un slug renombrado: la traducción dejó de aplicarse y ' +
        'nadie se enteró.',
    )
  }
}

for (const [slug, t] of traduccionesPost) {
  if (t.slug !== slug) {
    falla(slug, `el campo slug dice «${t.slug}» y la clave del registro dice «${slug}»`)
  }
}

// ---------------------------------------------------------------------------
// 3. Estructura del cuerpo
// ---------------------------------------------------------------------------

const palabras = (s: string) => s.trim().split(/\s+/).filter(Boolean).length

function textoEs(b: Bloque): string {
  switch (b.tipo) {
    case 'titulo':
    case 'parrafo':
    case 'nota':
      return b.texto
    case 'cita':
      return `${b.texto} ${b.fuente ?? ''}`
    case 'lista':
      return b.items.join(' ')
    case 'tabla':
      return [...b.cabeceras, ...b.filas.flat(), b.nota ?? ''].join(' ')
    case 'dato':
      return `${b.valor} ${b.etiqueta} ${b.fuente}`
    case 'diagrama':
      return `${b.titulo} ${b.pie}`
    case 'imagen':
      return b.imagen.alt
  }
}

function textoEn(b: BloqueTraducido): string {
  switch (b.tipo) {
    case 'titulo':
    case 'parrafo':
    case 'nota':
      return b.texto
    case 'cita':
      return `${b.texto} ${b.fuente ?? ''}`
    case 'lista':
      return b.items.join(' ')
    case 'tabla':
      return [...b.cabeceras, ...b.filas.flat(), b.nota ?? ''].join(' ')
    case 'dato':
      return `${b.valor} ${b.etiqueta} ${b.fuente}`
    case 'diagrama':
      return `${b.titulo} ${b.pie}`
    case 'imagen':
      return b.alt
  }
}

/**
 * Rastros de español en un texto que debería estar en inglés.
 *
 * Antes de buscarlos hay que quitar dos cosas que el propio contrato **exige**
 * que estén en español, y que sin esto producían cinco avisos por tanda:
 *
 * 1. **El destino de un enlace.** Los slugs no se traducen, así que un enlace
 *    interno legítimo lleva español dentro del texto inglés:
 *    `[what you can build](/blog/que-puedo-construir-en-suelo-rural)`.
 * 2. **Los nombres propios.** «Registro de Usuarios del Recurso Hídrico» y
 *    «Serranía de los Motilones» son nombres que no se traducen, y sus
 *    conectores disparaban la búsqueda.
 *
 * Se descartan quitando el paréntesis del enlace y las palabras con inicial
 * mayúscula. Lo que queda es prosa corrida en minúscula, que es donde el
 * español se filtra de verdad. Un aviso que salta siempre deja de leerse, y un
 * detector que nadie lee no detecta nada.
 */
const RASTROS = /[¿¡]|\b(que|para|según|sin embargo|del|los|las|una)\b/i

/**
 * Un nombre propio entero, conectores incluidos.
 *
 * Quitar solo las palabras en mayúscula no basta: deja suelto el conector que
 * va **dentro** del nombre —«Registro de Usuarios *del* Recurso Hídrico»,
 * «Serranía de *los* Motilones»—, que es justo una de las palabras que se
 * buscan. Así que se toma la cadena completa: una palabra en mayúscula y todo
 * lo que la sigue enlazado por conectores en minúscula. Son varios y no uno:
 * «Serranía **de los** Motilones» encadena dos, y «Concepto Unificado de
 * Impuesto **sobre las** Ventas» mete una preposición que no es «de».
 */
const NOMBRE_PROPIO =
  /\p{Lu}[\p{L}\p{M}·.'-]*(?:(?:\s+(?:de|del|la|las|los|el|y|e|da|do|sobre|para|en|con|al))*\s+\p{Lu}[\p{L}\p{M}·.'-]*)*/gu

function sinLoQueNoSeTraduce(texto: string): string {
  return texto.replace(/\]\([^)]*\)/g, ']').replace(NOMBRE_PROPIO, ' ')
}

function revisarCuerpo(post: Post, t: TraduccionPost): void {
  const { slug } = post

  if (!t.estructuraLibre && t.cuerpo.length !== post.cuerpo.length) {
    falla(
      slug,
      `el cuerpo tiene ${post.cuerpo.length} bloques en español y ` +
        `${t.cuerpo.length} en inglés. Casi siempre es una traducción que se ` +
        'quedó a medias. Si la diferencia es deliberada, decláre ' +
        '`estructuraLibre: true`.',
    )
    return
  }

  post.cuerpo.forEach((es, i) => {
    const en = t.cuerpo[i]
    if (!en) return

    if (en.tipo !== es.tipo) {
      falla(slug, `bloque ${i}: es «${es.tipo}» en español y «${en.tipo}» en inglés`)
      return
    }

    if (es.tipo === 'tabla' && en.tipo === 'tabla') {
      if (es.cabeceras.length !== en.cabeceras.length) {
        falla(
          slug,
          `bloque ${i}: la tabla tiene ${es.cabeceras.length} columnas en ` +
            `español y ${en.cabeceras.length} en inglés. Se renderiza ` +
            'desplazada y no lo nota nadie.',
        )
      }
      if (es.filas.length !== en.filas.length) {
        falla(slug, `bloque ${i}: la tabla tiene ${es.filas.length} filas en español y ${en.filas.length} en inglés`)
      }
    }

    if (es.tipo === 'lista' && en.tipo === 'lista' && es.items.length !== en.items.length) {
      falla(slug, `bloque ${i}: la lista tiene ${es.items.length} ítems en español y ${en.items.length} en inglés`)
    }

    if (es.tipo === 'imagen' && en.tipo === 'imagen' && es.imagen.credito && !en.alt) {
      falla(slug, `bloque ${i}: la imagen lleva crédito y el alt inglés está vacío`)
    }

    if (es.tipo === 'diagrama' && en.tipo === 'diagrama') {
      // Un diagrama con rótulos y el mismo SVG es el olvido más probable de
      // todo el lote: se ve bien y está en español.
      if (es.svg.includes('<text') && es.svg === en.svg) {
        falla(slug, `bloque ${i}: el diagrama lleva rótulos y el SVG inglés es idéntico al español`)
      }
    }

    const pEs = palabras(textoEs(es))
    const pEn = palabras(textoEn(en))
    if (pEs >= 12 && pEn > 0) {
      const razon = pEn / pEs
      if (razon < RAZON_MINIMA || razon > RAZON_MAXIMA) {
        falla(
          slug,
          `bloque ${i}: ${pEs} palabras en español y ${pEn} en inglés ` +
            `(razón ${razon.toFixed(2)}). Fuera de la banda razonable.\n` +
            `      es: ${textoEs(es).slice(0, 70)}…\n` +
            `      en: ${textoEn(en).slice(0, 70)}…`,
        )
      }
    }

    const tEn = textoEn(en)
    if (tEn.length > 25 && tEn === textoEs(es)) {
      falla(slug, `bloque ${i}: el texto inglés es idéntico al español`)
    } else if (tEn.length > 25 && RASTROS.test(sinLoQueNoSeTraduce(tEn))) {
      avisos.push(`${slug}, bloque ${i}: quedan rastros de español en el inglés`)
    }
  })
}

const hoy = new Date().toISOString().slice(0, 10)

for (const post of posts) {
  const t = traduccionesPost.get(post.slug)
  if (!t) continue

  if (t.metaDescripcion.length > META_MAXIMA) {
    falla(post.slug, `metaDescripcion inglesa de ${t.metaDescripcion.length} caracteres, máximo ${META_MAXIMA}`)
  }
  if (t.traducido < post.fecha || t.traducido > hoy) {
    falla(
      post.slug,
      `traducido el ${t.traducido}, fuera del rango [${post.fecha}, ${hoy}]`,
    )
  }
  if (t.metaDescripcion === t.resumen) {
    avisos.push(`${post.slug}: metaDescripcion y resumen son idénticos en inglés; cumplen funciones distintas`)
  }

  revisarCuerpo(post, t)
}

// ---------------------------------------------------------------------------
// Resultado
// ---------------------------------------------------------------------------

if (fallos.length > 0) {
  console.error('\n✗ Traducciones con problemas:\n')
  for (const f of fallos) console.error(`  ${f.slug}\n    ${f.motivo}\n`)
  process.exit(1)
}

for (const a of avisos) console.warn(`  ⚠ ${a}`)

console.log(
  `  traducciones   blog ${traduccionesPost.size}/${posts.length} · ` +
    `interfaz ${clavesEn.size}/${clavesEs.size} claves`,
)
