/**
 * pnpm media:upload
 *
 * Sube `public/media/` al bucket `media` de Supabase Storage. Idempotente:
 * compara con lo que ya está allí y solo sube lo que falta o difiere en tamaño.
 *
 * Por qué existe: `public/media/` está en .gitignore —73 MB regenerados desde
 * `assets-originales/`, que tampoco se versiona—, así que en Vercel ese
 * directorio no existe. Sin este paso el sitio despliega con 215 imágenes rotas
 * y el build pasa en verde, que es el peor modo de fallo posible.
 *
 * Las rutas dentro del bucket son idénticas a las locales, por diseño: lo único
 * que cambia entre local y producción es el prefijo, y eso lo resuelve
 * `mediaSrc()` en src/lib/utils.ts.
 */
import { readdir, readFile, stat } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import type * as NextEnv from '@next/env'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const requerir = createRequire(import.meta.url)

/**
 * `tsx` no lee .env.local por su cuenta, así que sin esto los scripts no
 * encuentran la clave de servicio. Se usa el cargador de Next y no un parser
 * propio para que un script y `pnpm dev` resuelvan exactamente los mismos
 * archivos con la misma precedencia; el día que aparezca un `.env.production`
 * no habrá dos comportamientos distintos.
 *
 * `@next/env` es CommonJS y no expone exportaciones nombradas a ESM: de ahí el
 * `createRequire` en vez de un import normal.
 */
export function cargarEntorno(raiz: string = ROOT): void {
  const { loadEnvConfig } = requerir('@next/env') as typeof NextEnv
  loadEnvConfig(raiz)
}
const LOCAL = join(ROOT, 'public/media')
const BUCKET = 'media'

/** Un año. Implica una regla editorial: los medios son de solo añadir. Una foto
 *  corregida entra con número nuevo, no reemplaza a la anterior. Para reemplazar
 *  de verdad hace falta `--force` y purgar la caché de Vercel. */
const CACHE_CONTROL = '31536000'

const TIPOS: Record<string, string> = {
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
}

type Archivo = { ruta: string; bytes: number }

async function listarLocal(dir: string): Promise<Archivo[]> {
  const salida: Archivo[] = []
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const completa = join(dir, entrada.name)
    if (entrada.isDirectory()) {
      salida.push(...(await listarLocal(completa)))
      continue
    }
    if (entrada.name.startsWith('.')) continue
    const info = await stat(completa)
    salida.push({
      ruta: relative(LOCAL, completa).split('\\').join('/'),
      bytes: info.size,
    })
  }
  return salida
}

/** Inventario remoto de una carpeta, paginado. */
async function listarRemoto(
  sb: SupabaseClient,
  carpeta: string,
): Promise<Map<string, number>> {
  const salida = new Map<string, number>()
  const porPagina = 100
  for (let offset = 0; ; offset += porPagina) {
    const { data, error } = await sb.storage
      .from(BUCKET)
      .list(carpeta, { limit: porPagina, offset })
    if (error) throw new Error(`No se pudo listar ${carpeta}: ${error.message}`)
    if (!data || data.length === 0) break
    for (const item of data) {
      // Las subcarpetas vienen sin metadata; aquí solo interesan los archivos.
      const bytes = item.metadata?.size
      if (typeof bytes === 'number') {
        salida.set(carpeta ? `${carpeta}/${item.name}` : item.name, bytes)
      }
    }
    if (data.length < porPagina) break
  }
  return salida
}

async function asegurarBucket(sb: SupabaseClient): Promise<void> {
  const { data } = await sb.storage.getBucket(BUCKET)
  if (data) return

  const { error } = await sb.storage.createBucket(BUCKET, {
    public: true,
    fileSizeLimit: '10MB',
    allowedMimeTypes: Object.values(TIPOS),
  })
  if (error) throw new Error(`No se pudo crear el bucket: ${error.message}`)
  console.log(`  bucket '${BUCKET}' creado (público)`)
}

/** Corre `tareas` de a `limite` a la vez. */
async function enParalelo<T>(
  tareas: (() => Promise<T>)[],
  limite: number,
): Promise<T[]> {
  const salida: T[] = new Array(tareas.length)
  let siguiente = 0
  const obreros = Array.from(
    { length: Math.min(limite, tareas.length) },
    async () => {
      for (;;) {
        const i = siguiente++
        const tarea = tareas[i]
        if (!tarea) return
        salida[i] = await tarea()
      }
    },
  )
  await Promise.all(obreros)
  return salida
}

export async function syncMedia({ forzar = false } = {}): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const clave = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !clave) {
    throw new Error(
      'Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.\n' +
        'Van en .env.local, en la raíz del repo. Están documentadas en el README.',
    )
  }

  const sb = createClient(url, clave, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  await asegurarBucket(sb)

  const locales = await listarLocal(LOCAL)
  if (locales.length === 0) {
    throw new Error(
      'public/media/ está vacío. Corre `pnpm media` antes de subir nada.',
    )
  }

  // Se lista una vez por carpeta en vez de una por archivo: son 25 carpetas
  // contra 215 archivos.
  const carpetas = [...new Set(locales.map((a) => dirname(a.ruta)))]
  const remotos = new Map<string, number>()
  for (const carpeta of carpetas) {
    for (const [k, v] of await listarRemoto(sb, carpeta)) remotos.set(k, v)
  }

  const pendientes = forzar
    ? locales
    : locales.filter((a) => remotos.get(a.ruta) !== a.bytes)

  console.log(
    `  locales ${locales.length} · ya en el bucket ${remotos.size} · por subir ${pendientes.length}`,
  )

  const fallidos: string[] = []
  let hechos = 0

  await enParalelo(
    pendientes.map((archivo) => async () => {
      const ext = archivo.ruta.slice(archivo.ruta.lastIndexOf('.')).toLowerCase()
      const cuerpo = await readFile(join(LOCAL, archivo.ruta))
      const { error } = await sb.storage
        .from(BUCKET)
        .upload(archivo.ruta, cuerpo, {
          contentType: TIPOS[ext] ?? 'application/octet-stream',
          cacheControl: CACHE_CONTROL,
          upsert: true,
        })
      if (error) {
        fallidos.push(`${archivo.ruta}: ${error.message}`)
      } else {
        hechos++
        if (hechos % 25 === 0) {
          console.log(`  ${hechos}/${pendientes.length}`)
        }
      }
    }),
    6,
  )

  console.log(
    `\n  subidos ${hechos} · omitidos ${locales.length - pendientes.length} · fallidos ${fallidos.length} · esperados ${locales.length}`,
  )

  if (fallidos.length > 0) {
    for (const f of fallidos) console.error(`  ✗ ${f}`)
    throw new Error(`${fallidos.length} archivos no se subieron.`)
  }

  const publico = `${url.replace(/\/+$/, '')}/storage/v1/object/public/${BUCKET}`
  console.log(`\n  NEXT_PUBLIC_MEDIA_ORIGIN=${publico}`)
}

const invocadoDirectamente = process.argv[1]
  ? fileURLToPath(import.meta.url) === process.argv[1]
  : false

if (invocadoDirectamente) {
  cargarEntorno()
  syncMedia({ forzar: process.argv.includes('--force') }).catch(
    (e: unknown) => {
      console.error(`\n${e instanceof Error ? e.message : String(e)}`)
      process.exit(1)
    },
  )
}
