/**
 * Corre antes de cada `next build`.
 *
 * Los artículos del blog se publican con fechas repartidas hacia atrás, para
 * que la sección no aparezca entera el mismo día. Eso es una decisión
 * editorial legítima, pero abre un fallo que nadie detecta leyendo: un artículo
 * fechado en 2023 que cita un decreto de 2025, o que habla de un sismo que
 * todavía no había ocurrido. Publicado, es la clase de error que destruye la
 * credibilidad que el artículo venía a construir.
 *
 * Este script lo hace imposible. Tres comprobaciones:
 *
 *   1. Ningún artículo lleva fecha anterior a la fuente más reciente que cita.
 *   2. Ningún artículo se fecha en el futuro.
 *   3. La fecha de actualización, si existe, no es anterior a la de publicación.
 *
 * Es la razón por la que `Fuente.fecha` existe en el tipo. Si una fuente no
 * tiene fecha útil —una norma vigente sin edición fechada— se declara `null` y
 * queda fuera de la comprobación, a conciencia.
 */
import type { Bloque, Post } from '../src/lib/types'
import { posts } from '../content/posts'
import { hechos } from '../content/blog/hechos'
import { pilarPorId } from '../content/pilares'
import { puertas } from '../content/puertas'

/** Minúscula y sin acentos, para comparar contra los patrones de `hechos.ts`. */
function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/** Todo el texto visible de un bloque. El switch es exhaustivo a propósito: si
 *  mañana se añade un tipo de bloque y no se añade aquí, su texto quedaría
 *  fuera de la comprobación de hechos sin que nadie lo note. */
function textoDe(b: Bloque): string {
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
    case 'imagen':
      return b.imagen.alt
    case 'diagrama':
      return `${b.titulo} ${b.pie}`
  }
}

function textoDePost(p: Post): string {
  return normalizar(
    [p.titulo, p.resumen, p.metaDescripcion, ...p.cuerpo.map(textoDe)].join(' '),
  )
}

const HOY = new Date().toISOString().slice(0, 10)
const ISO = /^\d{4}-\d{2}-\d{2}$/

type Fallo = { slug: string; motivo: string }
const fallos: Fallo[] = []

for (const post of posts) {
  const marca = (motivo: string) => fallos.push({ slug: post.slug, motivo })

  if (!ISO.test(post.fecha)) {
    marca(`fecha «${post.fecha}» no tiene forma AAAA-MM-DD.`)
    continue
  }

  if (post.fecha > HOY) {
    marca(`fechado el ${post.fecha}, que es futuro. Hoy es ${HOY}.`)
  }

  if (post.actualizado !== null) {
    if (!ISO.test(post.actualizado)) {
      marca(`actualizado «${post.actualizado}» no tiene forma AAAA-MM-DD.`)
    } else if (post.actualizado < post.fecha) {
      marca(
        `actualizado el ${post.actualizado}, antes de publicarse el ${post.fecha}.`,
      )
    } else if (post.actualizado > HOY) {
      marca(`actualizado el ${post.actualizado}, que es futuro.`)
    }
  }

  // La comprobación que de verdad importa.
  for (const f of post.fuentes) {
    if (f.fecha === null) continue
    if (!ISO.test(f.fecha)) {
      marca(`la fuente «${f.titulo}» tiene fecha «${f.fecha}», mal formada.`)
      continue
    }
    if (f.fecha > post.fecha) {
      marca(
        `se publica el ${post.fecha} pero cita «${f.titulo}» (${f.editor}), ` +
          `del ${f.fecha}. Un artículo no puede citar el futuro.`,
      )
    }
  }

  /* Contra el calendario de hechos. Es lo que cierra el agujero que dejan las
     fuentes: un artículo puede mencionar algo sin citarlo formalmente.

     **Se compara contra `actualizado` cuando existe, y no contra `fecha`.**
     Hasta el 6/9/2026 se comparaba siempre contra la fecha de publicación, y eso
     dejaba un artículo viejo sin forma legítima de ponerse al día: el de la Ley
     1209 se publicó en marzo de 2025 y en septiembre de 2026 hubo que
     actualizarlo porque la Resolución 929 de 2026 superó a la que citaba. Con la
     regla anterior, mencionar la norma nueva rompía el build, y las dos salidas
     eran malas — mover la fecha de publicación, que es mentir sobre cuándo se
     escribió y tira por la borda la antigüedad que el artículo ya tiene en el
     buscador, o dejarlo citando una norma superada.

     El motivo por el que la regla existía sigue en pie y sigue cubierto: lo que
     no se puede es que un artículo *publicado* en 2023 mencione un decreto de
     2025 sin decir que se tocó después. Cuando hay `actualizado`, el sitio lo
     enseña junto a la fecha, así que el lector sabe que el texto es posterior.
     Sin `actualizado`, la comparación es contra la publicación, igual que antes. */
  const texto = textoDePost(post)
  const cuando = post.actualizado ?? post.fecha
  for (const h of hechos) {
    if (!h.patrones.some((pat) => texto.includes(pat))) continue
    if (cuando < h.fecha) {
      marca(
        post.actualizado
          ? `se actualiza el ${post.actualizado} y menciona «${h.descripcion}», ` +
              `del ${h.fecha}. La fecha de actualización tiene que ser posterior.`
          : `se publica el ${post.fecha} y menciona «${h.descripcion}», ` +
              `del ${h.fecha}. La fecha del artículo tiene que ser posterior.`,
      )
    }
  }

  // Integridad referencial: un pilar o una puerta que no existen dejan la
  // página sin navegación y sin llamada a la acción, en silencio.
  if (!pilarPorId.has(post.pilar)) {
    marca(`declara el pilar «${post.pilar}», que no existe en content/pilares.ts.`)
  }
  if (post.puerta !== null && !puertas.some((p) => p.slug === post.puerta)) {
    marca(`apunta a la puerta «${post.puerta}», que no existe en content/puertas.ts.`)
  }

  if (post.cuerpo.length === 0) marca('no tiene cuerpo.')
  // El tipo ya impide una etiqueta inventada; esto solo impide el olvido.
  if (post.etiquetas.length === 0) {
    marca('no tiene etiquetas. Ver content/etiquetas.ts.')
  }
  if (new Set(post.etiquetas).size !== post.etiquetas.length) {
    marca('tiene etiquetas repetidas.')
  }
  if (post.metaDescripcion.length > 165) {
    marca(
      `metaDescripcion de ${post.metaDescripcion.length} caracteres; ` +
        'Google corta cerca de 160.',
    )
  }
}

// Slugs duplicados: dos artículos en la misma URL, y gana el último por azar.
const vistos = new Set<string>()
for (const post of posts) {
  if (vistos.has(post.slug)) {
    fallos.push({ slug: post.slug, motivo: 'slug duplicado.' })
  }
  vistos.add(post.slug)
}

if (fallos.length > 0) {
  console.error('\n✗ Artículos del blog con la fecha o las referencias mal:\n')
  for (const f of fallos) console.error(`  ${f.slug}\n    ${f.motivo}\n`)
  console.error('Corrige en content/blog/.\n')
  process.exit(1)
}

const conFuentes = posts.filter((p) => p.fuentes.length > 0).length
const etiquetasUsadas = new Set(posts.flatMap((p) => p.etiquetas)).size
console.log(
  `  blog           ${posts.length} artículos · ${conFuentes} con fuentes · ` +
    `${hechos.length} hechos vigilados · ${etiquetasUsadas} etiquetas en uso`,
)
