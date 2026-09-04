import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const __dirname = dirname(fileURLToPath(import.meta.url))

type WixRedirect = {
  from: string
  to: string
  permanent: boolean
  nota?: string
}

/**
 * Los 36 redirects 301 de Wix (wix-migration/04-seo/redirects.json).
 *
 * Dos ajustes sobre el archivo original:
 *
 * 1. Se excluye `/`. El archivo lo manda como 301 permanente a `/es`, pero eso
 *    congela el idioma en el caché del navegador y deja `/en` inalcanzable desde
 *    la raíz. La negociación por `Accept-Language` la hace el middleware.
 * 2. Se añade la variante percent-encoded de cada ruta que lleve tildes, ñ o
 *    paréntesis. Los slugs de Wix las traen y los navegadores las envían
 *    codificadas, así que sin esto la mitad de los redirects no dispara.
 */
function buildRedirects() {
  const raw = readFileSync(
    join(__dirname, 'wix-migration/04-seo/redirects.json'),
    'utf8',
  )
  const { redirects } = JSON.parse(raw) as { redirects: WixRedirect[] }

  const out: { source: string; destination: string; statusCode: 301 }[] = []
  const seen = new Set<string>()

  for (const r of redirects) {
    if (r.from === '/') continue

    for (const source of [r.from, encodeURI(r.from)]) {
      // Los paréntesis son sintaxis de grupo en path-to-regexp: si van crudos,
      // la ruta /colegio-francisco-antonio-zea-(metrovivienda) no se compila
      // como literal. Se escapan.
      const safe = source.replace(/[()]/g, (c) => `\\${c}`)
      if (seen.has(safe)) continue
      seen.add(safe)
      // `permanent: true` emite 308. Google trata 308 como 301, pero el criterio
      // de aceptación de la migración pide 301 explícito y hay rastreadores
      // viejos que solo entienden ese. Se fija a mano.
      out.push({ source: safe, destination: r.to, statusCode: 301 })
    }
  }

  return out
}

/**
 * Origen de los medios. Vacío = se sirven de `public/media/`.
 *
 * Es variable propia y no se deriva de NEXT_PUBLIC_SUPABASE_URL a propósito: en
 * cuanto la URL de Supabase entra en .env.local para trabajar en los leads, un
 * origen derivado haría que `pnpm dev` pidiera las imágenes a un bucket que
 * todavía está vacío. Así, local sigue leyendo del disco y solo producción va al
 * bucket; y revertir es borrar la variable y redesplegar.
 */
const ORIGEN_MEDIA = process.env.NEXT_PUBLIC_MEDIA_ORIGIN?.replace(/\/+$/, '')

/**
 * La guarda que impide el peor desenlace posible.
 *
 * `public/media/` está en .gitignore, así que en Vercel ese directorio no
 * existe. Sin origen remoto el sitio despliega con 215 imágenes rotas y tanto el
 * build como el deploy salen en verde: el fallo es completamente silencioso
 * hasta que alguien abre el sitio. Mejor romper el build.
 */
if (
  process.env.VERCEL &&
  !ORIGEN_MEDIA &&
  !existsSync(join(__dirname, 'public/media/proyectos'))
) {
  throw new Error(
    'Build en Vercel sin NEXT_PUBLIC_MEDIA_ORIGIN y sin public/media/: el sitio ' +
      'saldría sin una sola imagen. Corre `pnpm seed` y define la variable en los ' +
      'tres entornos de Vercel (production, preview y development).',
  )
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Hay un package-lock.json suelto en el home del usuario; sin esto Next
  // deduce mal la raíz del workspace y avisa en cada build.
  outputFileTracingRoot: __dirname,

  eslint: {
    // El build no debe pasar con lint sucio.
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    // Anchos alineados con la rejilla real del sitio, no los de Next por defecto.
    //
    // Se recortan de nueve a seis: Vercel factura por transformación, y cada
    // ancho de más multiplica 215 imágenes de origen por dos formatos. Los que
    // se quitan (828, 1600, 3200) caían entre dos anchos que ya estaban y no
    // servían a ningún punto de ruptura real de la rejilla.
    deviceSizes: [420, 640, 1080, 1280, 1920, 2560],
    imageSizes: [96, 160, 240, 320, 480, 640],
    // Un año. Con los medios en el bucket, el optimizador no tiene por qué
    // volver a pedir el original: son de solo añadir.
    minimumCacheTTL: 31_536_000,
    remotePatterns: [
      // El bucket de medios, si está configurado.
      ...(ORIGEN_MEDIA
        ? [
            {
              protocol: 'https' as const,
              hostname: new URL(ORIGEN_MEDIA).hostname,
              pathname: '/storage/v1/object/public/**',
            },
          ]
        : []),
    ],
  },

  async redirects() {
    return buildRedirects()
  },
}

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

export default withNextIntl(nextConfig)
