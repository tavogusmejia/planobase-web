/**
 * Corre antes de cada `next build`.
 *
 * Comprueba que todo destino de `wix-migration/04-seo/redirects.json` lleve a
 * una página que existe de verdad. Un 301 hacia un 404 es la peor combinación
 * posible de una migración: se pierde el enlace entrante y el buscador registra
 * un error de rastreo justo cuando está reevaluando el dominio.
 *
 * Había exactamente uno —el comedor de Univalle, que apunta a un proyecto sin
 * publicar—, y se corrigió. Este script existe por lo que viene: el día que se
 * despublique otro proyecto, el fallo lo canta el build en vez de quedarse vivo
 * meses sin que nadie lo note.
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { projects } from '../content/projects'
import { posts } from '../content/posts'
import { puertas } from '../content/puertas'
import { CATEGORIAS, type Categoria } from '../src/lib/types'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

type Redirect = { from: string; to: string; permanent: boolean; nota?: string }

/** Rutas estáticas del sitio, sin prefijo de idioma. */
const ESTATICAS = new Set([
  '',
  '/',
  '/proyectos',
  '/estudio',
  '/servicios',
  '/servicios/asesoria-tecnica',
  '/agendar',
  '/contacto',
  '/blog',
])

const slugsPublicados = new Set(
  projects.filter((p) => p.publicado).map((p) => p.slug),
)
const slugsPost = new Set(posts.map((p) => p.slug))
const slugsPuerta = new Set(puertas.map((p) => p.slug))

/** Devuelve el motivo del fallo, o null si el destino resuelve. */
function motivoDeFallo(destino: string): string | null {
  const [rutaCruda = '', query = ''] = destino.split('?')

  if (!rutaCruda.startsWith('/es')) {
    return 'no empieza por /es'
  }
  const ruta = rutaCruda.slice(3).replace(/\/$/, '')

  if (query) {
    const categoria = new URLSearchParams(query).get('categoria')
    if (categoria && !CATEGORIAS.includes(categoria as Categoria)) {
      return `categoría inexistente: ${categoria}`
    }
  }

  if (ESTATICAS.has(ruta)) return null

  const proyecto = ruta.match(/^\/proyectos\/(.+)$/)
  if (proyecto?.[1]) {
    return slugsPublicados.has(proyecto[1])
      ? null
      : `proyecto sin publicar o inexistente: ${proyecto[1]}`
  }

  const post = ruta.match(/^\/blog\/(.+)$/)
  if (post?.[1]) {
    return slugsPost.has(post[1]) ? null : `entrada inexistente: ${post[1]}`
  }

  const servicio = ruta.match(/^\/servicios\/(.+)$/)
  if (servicio?.[1]) {
    return slugsPuerta.has(servicio[1])
      ? null
      : `servicio inexistente: ${servicio[1]}`
  }

  return 'no corresponde a ninguna ruta del sitio'
}

const { redirects } = JSON.parse(
  readFileSync(join(ROOT, 'wix-migration/04-seo/redirects.json'), 'utf8'),
) as { redirects: Redirect[] }

const rotos = redirects
  .filter((r) => r.from !== '/')
  .map((r) => ({ ...r, motivo: motivoDeFallo(r.to) }))
  .filter((r) => r.motivo !== null)

if (rotos.length > 0) {
  console.error('\n✗ Redirects que mueren en un 404:\n')
  for (const r of rotos) {
    console.error(`  ${r.from}\n    → ${r.to}\n    ${r.motivo}\n`)
  }
  console.error(
    'Corrige el destino en wix-migration/04-seo/redirects.json, o publica la página.\n',
  )
  process.exit(1)
}

const destinos = new Set(redirects.map((r) => r.to))
console.log(
  `  redirects      ${redirects.length} reglas · ${destinos.size} destinos · todos resuelven`,
)
