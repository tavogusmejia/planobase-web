/**
 * pnpm media:retirar <slug> [<slug>…]
 *
 * Borra del bucket `media` de Supabase las imágenes de un proyecto retirado.
 *
 * **Por qué hace falta un script y no basta con despublicar.** Poner
 * `publicado: false` saca el proyecto del sitio —su ficha devuelve 404, sale del
 * sitemap y no queda un solo enlace—, pero **no toca el bucket**, que es
 * público. Quien tenga una URL guardada, o Google Imágenes, sigue viendo los
 * renders. Eso se descubrió el 6/9/2026 al retirar la Alcaldía Local de
 * Teusaquillo, y es el hueco que este script cierra.
 *
 * **Dos salvaguardas, porque esto borra de verdad y no hay papelera.**
 *
 * 1. **No corre sobre un proyecto publicado.** Si el slug sigue con
 *    `publicado: true` en `content/projects.ts`, se niega. Es la protección que
 *    importa: despublicar es reversible, borrar el original no, y el orden
 *    correcto es siempre despublicar primero y comprobar el sitio después.
 * 2. **Enseña antes de borrar.** Sin `--borrar` solo lista lo que encontró. Hay
 *    que leer esa lista y volver a llamar con la bandera.
 *
 * Lo que este script **no** hace: tocar `assets-originales/`. El original se
 * queda donde está, así que restituir un proyecto es despublicarlo al revés y
 * correr `pnpm media && pnpm media:upload`.
 */
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { projects } from '../content/projects'
import { cargarEntorno } from './upload-media'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const BUCKET = 'media'

function conectar(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const clave = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !clave) {
    throw new Error(
      'Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.\n' +
        'Van en .env.local, en la raíz del repo.',
    )
  }
  return createClient(url, clave, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/** Lo que hay hoy en el bucket bajo `proyectos/<slug>/`. */
async function listarRemoto(sb: SupabaseClient, slug: string): Promise<string[]> {
  const prefijo = `proyectos/${slug}`
  const { data, error } = await sb.storage.from(BUCKET).list(prefijo, { limit: 1000 })
  if (error) throw new Error(`No se pudo listar ${prefijo}: ${error.message}`)
  return (data ?? [])
    .filter((f) => f.id !== null) // las carpetas vienen con id nulo
    .map((f) => `${prefijo}/${f.name}`)
}

async function main(): Promise<void> {
  cargarEntorno(ROOT)

  const args = process.argv.slice(2)
  const borrar = args.includes('--borrar')
  const slugs = args.filter((a) => !a.startsWith('--'))

  if (slugs.length === 0) {
    console.error(
      'Uso: pnpm media:retirar <slug> [<slug>…] [--borrar]\n' +
        'Sin --borrar solo enseña lo que encontró.',
    )
    process.exitCode = 1
    return
  }

  /* La salvaguarda que de verdad importa. Un slug que sigue publicado no puede
     perder sus imágenes: el sitio quedaría con la ficha viva y los huecos. */
  const publicados = new Set(projects.filter((p) => p.publicado).map((p) => p.slug))
  const conocidos = new Set(projects.map((p) => p.slug))
  const vivos = slugs.filter((s) => publicados.has(s))
  if (vivos.length > 0) {
    console.error(
      `✗ Estos proyectos siguen publicados: ${vivos.join(', ')}.\n` +
        '  Despublíquelos primero en el JSON de origen, corra el build y compruebe\n' +
        '  que su ficha devuelve 404. Borrar las imágenes de un proyecto vivo deja\n' +
        '  la ficha en pie y llena de huecos.',
    )
    process.exitCode = 1
    return
  }
  const desconocidos = slugs.filter((s) => !conocidos.has(s))
  if (desconocidos.length > 0) {
    console.error(
      `✗ Estos slugs no existen en content/projects.ts: ${desconocidos.join(', ')}.\n` +
        '  Casi siempre es una errata; se prefiere fallar a borrar a ciegas.',
    )
    process.exitCode = 1
    return
  }

  const sb = conectar()
  let total = 0

  for (const slug of slugs) {
    const rutas = await listarRemoto(sb, slug)
    console.log(`\n  ${slug} · ${rutas.length} archivo(s) en el bucket`)
    for (const r of rutas) console.log(`     ${r}`)
    if (rutas.length === 0) continue
    total += rutas.length

    if (!borrar) continue

    const { error } = await sb.storage.from(BUCKET).remove(rutas)
    if (error) throw new Error(`No se pudo borrar ${slug}: ${error.message}`)
    console.log(`     ✓ borrados`)
  }

  console.log(
    borrar
      ? `\n  Listo. ${total} archivo(s) borrados del bucket «${BUCKET}».`
      : `\n  ${total} archivo(s) encontrados. Nada se ha borrado.\n` +
          `  Para borrarlos de verdad: pnpm media:retirar ${slugs.join(' ')} --borrar`,
  )
}

main().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : err)
  process.exitCode = 1
})
