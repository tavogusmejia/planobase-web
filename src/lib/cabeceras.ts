/**
 * Las cabeceras de seguridad del sitio.
 *
 * **No existían.** Ni aquí, ni en `vercel.json`, ni en el middleware, ni en
 * ningún entorno. El plan maestro decía que «el bloque devuelve un array vacío
 * en producción», y era literalmente cierto pero engañaba: ese bloque de
 * `next.config.ts` nunca fue de seguridad — su única función era meter
 * `X-Robots-Tag: noindex` mientras el sitio viviera en un dominio de Vercel.
 *
 * Y estaban al revés de como tienen que estar: lo que había se apagaba justo al
 * llegar al dominio real. Ahora las de seguridad se envían **siempre** y la de
 * `noindex` se añade encima solo mientras el sitio no sea indexable.
 *
 * ---
 *
 * ## Los dos compromisos, dichos de frente
 *
 * **1. `script-src` lleva `'unsafe-inline'`, y eso limita lo que la CSP puede
 * prometer.** Next inyecta en cada página scripts en línea —el arranque de la
 * aplicación y la carga útil de los componentes de servidor—. La forma correcta
 * de permitirlos sin abrir la puerta es un `nonce` distinto por petición, pero
 * un `nonce` obliga a que cada respuesta se genere en el momento, y este sitio
 * es casi todo estático: hoy se prerenderizan las 95 URLs en el build. Ponerlo
 * cambiaría el sitio entero a dinámico para ganar una defensa contra un vector
 * —la inyección de un script en línea— que en un sitio sin entrada de usuario
 * en el HTML es el menos probable de todos.
 *
 * Lo que la CSP **sí** impide con este compromiso, que no es poco: cargar un
 * script desde un dominio que no esté en la lista, enviar el formulario a otro
 * sitio, que la página se enmarque, que se cargue un `<object>` o un applet, y
 * que alguien reescriba la base de las URLs relativas.
 *
 * **2. `Strict-Transport-Security` va sin `includeSubDomains` ni `preload`, a
 * propósito.** Las dos son puertas de un solo sentido: un navegador que vea la
 * cabecera se niega a hablar por `http` con ese dominio durante dos años, y no
 * hay forma de decirle que se le olvide. Si algún subdominio de `planobase.co`
 * sirviera algo por `http`, `includeSubDomains` lo dejaría inalcanzable sin
 * aviso. Se añaden cuando alguien haya inventariado los subdominios, y entonces
 * es una línea.
 */

/** El origen del bucket de medios, si está configurado. Solo el host. */
function origenDeMedios(): string | null {
  const crudo = process.env.NEXT_PUBLIC_MEDIA_ORIGIN?.replace(/\/+$/, '')
  if (!crudo) return null
  try {
    return new URL(crudo).origin
  } catch {
    return null
  }
}

/**
 * La política de contenido, armada a partir de lo que el sitio carga de verdad.
 *
 * Se comprobó una por una, no de memoria: **no hay cliente de Supabase en el
 * navegador y no hay un solo `fetch` desde el cliente** en todo el proyecto, así
 * que `connect-src` solo necesita el propio origen y los destinos de medición.
 * Las tipografías las sirve el propio dominio —`next/font` las descarga en el
 * build—, así que `font-src` no lleva ningún tercero.
 *
 * Los orígenes de medición están aquí aunque hoy no haya ninguna etiqueta
 * montada: se cargan solo con el consentimiento dado, y una CSP que las olvide
 * las apagaría el día que alguien acepte, en silencio y sin error visible.
 */
function politicaDeContenido(): string {
  const medios = origenDeMedios()

  const meta = ['https://connect.facebook.net', 'https://www.facebook.com']
  const google = [
    'https://www.googletagmanager.com',
    'https://www.googleadservices.com',
    'https://www.google-analytics.com',
    'https://region1.google-analytics.com',
    'https://analytics.google.com',
    'https://googleads.g.doubleclick.net',
    'https://www.google.com',
  ]

  const directivas: Record<string, string[]> = {
    'default-src': ["'self'"],
    // Ver el compromiso 1 de la cabecera de este archivo.
    'script-src': [
      "'self'",
      "'unsafe-inline'",
      'https://connect.facebook.net',
      'https://www.googletagmanager.com',
      'https://www.googleadservices.com',
    ],
    // Tailwind y Next inyectan estilo en línea; aquí no hay alternativa y el
    // riesgo de un estilo inyectado es de otro orden que el de un script.
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", 'data:', 'blob:', ...(medios ? [medios] : []), ...meta, ...google],
    'font-src': ["'self'", 'data:'],
    'connect-src': ["'self'", ...meta, ...google],
    // Nada de lo que sirve el sitio se embebe, ni embebe a nadie.
    'frame-src': ["'none'"],
    'frame-ancestors': ["'none'"],
    'object-src': ["'none'"],
    // El formulario solo puede enviarse al propio sitio.
    'form-action': ["'self'"],
    'base-uri': ["'self'"],
  }

  const partes = Object.entries(directivas).map(
    ([nombre, valores]) => `${nombre} ${valores.join(' ')}`,
  )
  partes.push('upgrade-insecure-requests')
  return partes.join('; ')
}

/**
 * ¿La CSP bloquea, o solo reporta?
 *
 * Empieza reportando. Una CSP mal puesta **no da error visible**: apaga una
 * etiqueta de medición o rompe una imagen en silencio, que es exactamente el
 * modo de falla que este proyecto ya decidió no tolerar. En `Report-Only` el
 * navegador escribe cada violación en su consola y no bloquea nada, así que se
 * puede recorrer el sitio, ver qué reporta y corregir la lista antes de que
 * bloquee de verdad.
 *
 * Se pasa a bloquear poniendo `CSP_BLOQUEANTE=1` en el entorno, cuando la
 * consola no reporte nada del propio sitio. Es una variable y no una constante
 * para poder activarla en producción sin tocar código, y desactivarla igual de
 * rápido si algo se rompió.
 */
function cspBloqueante(): boolean {
  return process.env.CSP_BLOQUEANTE === '1'
}

export function cabecerasDeSeguridad(): { key: string; value: string }[] {
  return [
    {
      key: cspBloqueante()
        ? 'Content-Security-Policy'
        : 'Content-Security-Policy-Report-Only',
      value: politicaDeContenido(),
    },
    // Dos años. Sin `includeSubDomains` ni `preload` — ver el compromiso 2.
    { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
    // `frame-ancestors` ya lo cubre en los navegadores modernos; esto es para
    // los que no leen CSP. Los dos dicen lo mismo a propósito.
    { key: 'X-Frame-Options', value: 'DENY' },
    // Que el navegador no adivine el tipo de un archivo por su contenido.
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    // Al salir del sitio se manda el origen, nunca la ruta completa. La ruta
    // puede llevar el slug de un proyecto o de un artículo, y eso es del
    // visitante, no del sitio al que va.
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    // El sitio no usa ninguna de las tres. Declararlo apagado evita que un
    // script de terceros las pida y el navegador enseñe el diálogo.
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    },
  ]
}
