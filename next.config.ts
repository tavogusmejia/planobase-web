import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import createNextIntlPlugin from 'next-intl/plugin'
import { sitioIndexable } from './src/lib/env'
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

    // Tres formas de pedir la misma ruta vieja, y las tres tienen que
    // redirigir:
    //   1. cruda, tal cual estaba en Wix
    //   2. con los acentos codificados, que es lo que manda un navegador
    //   3. además con los paréntesis codificados
    //
    // La tercera hace falta porque `encodeURI` NO toca los paréntesis: son
    // caracteres permitidos en una URL. Pero algunos clientes los codifican
    // igual, y sin esta variante
    // /colegio-francisco-antonio-zea-%28metrovivienda%29 se caía a un 404.
    // Es la única ruta del volcado que los lleva.
    const codificado = encodeURI(r.from)
    const conParentesis = codificado.replace(/\(/g, '%28').replace(/\)/g, '%29')

    for (const source of [r.from, codificado, conParentesis]) {
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

/**
 * Las cabeceras de seguridad del sitio.
 *
 * Hasta ahora `headers()` devolvía un array vacío en cuanto el sitio pasaba al
 * dominio real: en producción no salía ni una. La consecuencia práctica es que
 * cualquier sitio podía meter planobase.co dentro de un `<iframe>` y superponer
 * su propio formulario encima del de contacto, y que un navegador que hubiera
 * entrado una vez por http volvía a intentarlo por http la siguiente.
 *
 * Sobre la CSP y `'unsafe-inline'` en los scripts. La forma estricta —un `nonce`
 * distinto por petición— obliga a leer cabeceras en cada página, y eso convierte
 * las 95 URLs estáticas de este sitio en 95 funciones que se ejecutan en cada
 * visita. Se paga en dinero y en latencia, y aquí no compra casi nada: el sitio
 * no renderiza contenido escrito por terceros, así que el hueco que deja
 * `'unsafe-inline'` no tiene por dónde llenarse. Lo que sí compra esta CSP es lo
 * que de verdad está en riesgo: de dónde puede venir un script externo, dentro
 * de qué páginas se puede incrustar la nuestra, y a dónde puede enviarse el
 * formulario. El día que haya contenido de terceros, esta decisión se revisa.
 *
 * `'unsafe-eval'` va solo fuera de producción: lo necesita el refresco en
 * caliente de `pnpm dev`, no el sitio publicado.
 */
function cabecerasDeSeguridad() {
  const enProduccion = process.env.NODE_ENV === 'production'

  // El bucket de medios sirve las 215 imágenes; sin él, `img-src 'self'` las
  // bloquearía todas. Si no hay origen configurado se sirven de `public/`.
  const bucket = ORIGEN_MEDIA ? new URL(ORIGEN_MEDIA).origin : null
  const supabase = process.env.NEXT_PUBLIC_SUPABASE_URL
    ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).origin
    : null

  // El Pixel solo se monta si hay ID (ver `MetaPixel`). Sin ID, sus dominios no
  // tienen por qué figurar en la política.
  const pixel = Boolean(process.env.NEXT_PUBLIC_META_PIXEL_ID)

  /* Lo mismo para GA4 y la etiqueta de conversión de Google Ads, que entraron
     con el frente de la Ley 1581 (ver `EtiquetaGoogle`). Los dos comparten una
     sola librería, `gtag.js`, así que basta con que exista uno de los dos
     identificadores para que haga falta abrirle los dominios.

     Y aquí hay un detalle que no se ve: **ninguna de estas etiquetas se carga
     sin el consentimiento del visitante**. Aun así los dominios van en la
     política, porque una CSP que los olvidara las apagaría en silencio el día
     que alguien acepte — y un fallo silencioso en la medición es peor que no
     medir, porque las decisiones de presupuesto se toman igual sobre una cifra
     que no existe. */
  const google = Boolean(
    process.env.NEXT_PUBLIC_GA4_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
  )

  const csp = [
    `default-src 'self'`,
    [
      `script-src 'self' 'unsafe-inline'`,
      enProduccion ? '' : `'unsafe-eval'`,
      pixel ? 'https://connect.facebook.net' : '',
      google
        ? 'https://www.googletagmanager.com https://www.googleadservices.com'
        : '',
      // La barra de Vercel, que es donde se revisan los despliegues de rama.
      'https://vercel.live',
    ]
      .filter(Boolean)
      .join(' '),
    // Los atributos `style` de React son estilo en línea a ojos del navegador.
    `style-src 'self' 'unsafe-inline'`,
    [
      `img-src 'self' data: blob:`,
      bucket ?? '',
      pixel ? 'https://www.facebook.com' : '',
      google
        ? 'https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com'
        : '',
      'https://vercel.live',
    ]
      .filter(Boolean)
      .join(' '),
    // `next/font` descarga las tipografías en el build y las sirve desde aquí.
    `font-src 'self' data:`,
    [
      `connect-src 'self'`,
      supabase ?? '',
      pixel ? 'https://connect.facebook.net https://www.facebook.com' : '',
      /* `region1` no es un adorno: GA4 enruta por región y desde Colombia el
         destino real suele ser ese, no el dominio genérico. Sin él la CSP
         bloquea justo los envíos que sí se hacen. */
      google
        ? 'https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://googleads.g.doubleclick.net'
        : '',
      'https://vercel.live wss://ws-us3.pusher.com',
    ]
      .filter(Boolean)
      .join(' '),
    // Los vídeos de proyecto, ya normalizados a su forma incrustable por
    // `urlIncrustable()`.
    `frame-src 'self' https://www.youtube-nocookie.com https://player.vimeo.com https://vercel.live`,
    // Nadie puede meter este sitio dentro de un marco. Es lo que impide montar
    // un formulario falso encima del de contacto.
    `frame-ancestors 'none'`,
    // Sin esto, una inyección de `<base>` reescribe a dónde apunta cada enlace
    // y cada script relativo de la página.
    `base-uri 'self'`,
    // El formulario de contacto solo puede enviarse a este dominio.
    `form-action 'self'`,
    `object-src 'none'`,
    'upgrade-insecure-requests',
  ].join('; ')

  return [
    { key: 'Content-Security-Policy', value: csp },
    // `frame-ancestors` ya lo cubre en todo navegador actual; esto es para los
    // que no leen CSP.
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    // Al salir del sitio viaja el dominio, nunca la ruta completa: qué artículo
    // estaba leyendo el visitante no es asunto del sitio de destino.
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    // Solo se apagan permisos que el sitio no usa. Nada de `autoplay`,
    // `encrypted-media` ni `fullscreen`: los pide el reproductor de vídeo.
    {
      key: 'Permissions-Policy',
      value:
        'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), browsing-topics=()',
    },
    { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
    { key: 'X-DNS-Prefetch-Control', value: 'on' },
  ]
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
    /* Aquí hubo un momento una regla que mandaba `/proyectos?categoria=X` a
       `/proyectos/categoria/X`. Se retiró el mismo día que se puso, porque
       **Next arrastra el query string al destino** y producía
       `/categoria/educativo?categoria=educativo`. Es la misma trampa que el
       comentario de `page.tsx` ya documentaba cuando el redirect vivía allí, y
       no se puede evitar desde `redirects()`: haría falta el middleware.

       No hace falta. `CategoriaEnParametro` recoge esas URL en el cliente y
       deja la limpia, el canonical de `/proyectos` consolida igual, y ninguna
       URL con parámetro está indexada ni enlazada desde fuera — el sitio de Wix
       nunca tuvo esa forma. */
    return buildRedirects()
  },

  async headers() {
    const headers = cabecerasDeSeguridad()

    if (sitioIndexable()) {
      // HSTS solo en el dominio real. En un `*.vercel.app` no aporta —Vercel ya
      // lo manda y el dominio está en la lista de precarga de los navegadores— y
      // fijar dos años de https sobre un host de pruebas es un compromiso que no
      // hace falta adquirir.
      //
      // Sin `preload` a propósito: entrar en la lista precargada de los
      // navegadores es una decisión de dominio, no de despliegue, y salir de
      // ella tarda meses. Se añade cuando Gustavo lo pida.
      headers.push({
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains',
      })
    } else {
      // Mientras el sitio viva en un dominio de Vercel con el de Wix todavía en
      // pie, nada de aquí debe indexarse. La etiqueta `noindex` de cada página
      // solo cubre el HTML; esta cabecera cubre además el sitemap, las imágenes y
      // cualquier respuesta que no sea una página. Desaparece sola en cuanto
      // NEXT_PUBLIC_SITE_URL apunte al dominio real.
      headers.push({ key: 'X-Robots-Tag', value: 'noindex, follow' })
    }

    return [{ source: '/:path*', headers }]
  },
}

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

export default withNextIntl(nextConfig)
