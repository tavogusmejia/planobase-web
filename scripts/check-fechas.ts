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
import { posts } from '../content/posts'
import { pilarPorId } from '../content/pilares'
import { puertas } from '../content/puertas'

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

  // Integridad referencial: un pilar o una puerta que no existen dejan la
  // página sin navegación y sin llamada a la acción, en silencio.
  if (!pilarPorId.has(post.pilar)) {
    marca(`declara el pilar «${post.pilar}», que no existe en content/pilares.ts.`)
  }
  if (post.puerta !== null && !puertas.some((p) => p.slug === post.puerta)) {
    marca(`apunta a la puerta «${post.puerta}», que no existe en content/puertas.ts.`)
  }

  if (post.cuerpo.length === 0) marca('no tiene cuerpo.')
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
console.log(
  `  blog           ${posts.length} artículos · ${conFuentes} con fuentes citadas · fechas coherentes`,
)
