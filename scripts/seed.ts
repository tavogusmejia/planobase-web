/**
 * pnpm seed
 *
 * `package.json` y CLAUDE.md prometían este comando desde el principio y el
 * archivo no existía: `pnpm seed` fallaba. Aquí está, con el alcance real de
 * esta fase.
 *
 * Qué hace hoy: comprueba el entorno, sube los medios al bucket y verifica que
 * la tabla `leads` esté aplicada.
 *
 * Qué NO hace, a propósito: cargar proyectos, entradas de blog ni servicios a la
 * base. Ese contenido vive en `content/`, que es donde hoy se edita bien, y
 * migrarlo no arregla ningún fallo del sitio — el esquema de referencia es
 * bilingüe por tablas de traducción y los tipos del sitio son monolingües, así
 * que esa migración es un proyecto con su propia capa de mapeo. Cuando llegue,
 * se añade aquí como un paso más.
 */
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@supabase/supabase-js'
import { cargarEntorno, syncMedia } from './upload-media'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

// Va aquí arriba, antes de que nadie mire el entorno. `upload-media` solo lo
// consulta dentro de `syncMedia()`, ya con esto ejecutado.
cargarEntorno(ROOT)

function fallo(mensaje: string): never {
  console.error(`\n✗ ${mensaje}\n`)
  process.exit(1)
}

async function verificarTablaLeads(): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const clave = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !clave) return

  const sb = createClient(url, clave, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  const { count, error } = await sb
    .from('leads')
    .select('*', { count: 'exact', head: true })

  if (error) {
    console.log(
      `\n  leads          sin aplicar (${error.message})\n` +
        '                 corre `supabase db push`, o pega\n' +
        '                 supabase/migrations/20260904120000_leads.sql\n' +
        '                 en el editor SQL del panel.',
    )
    return
  }
  console.log(`\n  leads          aplicada · ${count ?? 0} registros`)
}

async function main(): Promise<void> {
  console.log('\nPlano Base · seed\n')

  const faltantes = (
    ['NEXT_PUBLIC_SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'] as const
  ).filter((v) => !process.env[v])

  if (faltantes.length > 0) {
    fallo(
      `Faltan variables en .env.local: ${faltantes.join(', ')}.\n` +
        '  Están documentadas en el README, sección «Variables de entorno».',
    )
  }

  console.log('Medios')
  await syncMedia({ forzar: process.argv.includes('--force') })

  console.log('\nBase de datos')
  await verificarTablaLeads()

  console.log('\nListo.\n')
}

main().catch((e: unknown) => {
  fallo(e instanceof Error ? e.message : String(e))
})
