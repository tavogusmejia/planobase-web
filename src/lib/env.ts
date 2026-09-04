/**
 * Variables de entorno, en un solo sitio.
 *
 * Sin esto acaban leídas con `process.env.X!` desperdigado por media docena de
 * archivos, y la primera vez que falta una el fallo aparece a mitad de una
 * petición en producción en vez de al arrancar.
 *
 * Nota que no es cosmética: Next sustituye las `NEXT_PUBLIC_*` por su valor en
 * tiempo de build, y solo si aparecen escritas enteras —`process.env.NOMBRE`—.
 * Por eso aquí no se desestructura `process.env` ni se accede con corchetes: si
 * se hiciera, en el navegador llegarían vacías sin ningún error visible.
 */

/** Seguras en cliente y servidor. */
export const entornoPublico = {
  sitio: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.planobase.co',
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
  /** Sin barra final: `mediaSrc()` la pone. Vacío = servir de `public/media/`. */
  origenMedia: (process.env.NEXT_PUBLIC_MEDIA_ORIGIN ?? '').replace(/\/+$/, ''),
  /** Vacío = el sitio no monta el Pixel. */
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '',
} as const

/**
 * Si este despliegue debe aparecer en buscadores.
 *
 * Mientras el sitio viva en un dominio de Vercel, NO debe indexarse: el sitio de
 * Wix sigue en producción en planobase.co con las mismas 23 memorias de
 * proyecto y los mismos nombres. Dos sitios idénticos compitiendo hacen que
 * Google elija uno y reparta las señales entre ambos, que es justo lo contrario
 * de conservar el posicionamiento del dominio viejo mientras se prepara el
 * traslado.
 *
 * Se deduce de `NEXT_PUBLIC_SITE_URL` en vez de pedir otra variable, para que no
 * haya nada que recordar: el día que esa variable apunte al dominio real, la
 * indexación se enciende sola. Y al revés — un despliegue de rama nunca podrá
 * indexarse por descuido.
 */
export function sitioIndexable(): boolean {
  try {
    const host = new URL(entornoPublico.sitio).hostname
    return !host.endsWith('.vercel.app') && host !== 'localhost'
  } catch {
    // URL mal formada: ante la duda, no se indexa.
    return false
  }
}

function enServidor(quien: string): void {
  if (typeof window !== 'undefined') {
    throw new Error(`${quien} se llamó desde el navegador. Solo servidor.`)
  }
}

function requerida(nombre: string, valor: string | undefined): string {
  if (!valor) {
    throw new Error(
      `Falta la variable de entorno ${nombre}. Está documentada en el README.`,
    )
  }
  return valor
}

/**
 * Si hay con qué hablarle a Supabase con la clave de servicio. El formulario de
 * contacto consulta esto para decidir su plan B en vez de reventar: un lead vale
 * demasiado como para perderlo porque falte una variable.
 */
export function haySupabaseAdmin(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY,
  )
}

/** Lanza si falta algo. Llamar solo tras comprobar `haySupabaseAdmin()`. */
export function configSupabaseAdmin(): { url: string; claveServicio: string } {
  enServidor('configSupabaseAdmin()')
  return {
    url: requerida(
      'NEXT_PUBLIC_SUPABASE_URL',
      process.env.NEXT_PUBLIC_SUPABASE_URL,
    ),
    claveServicio: requerida(
      'SUPABASE_SERVICE_ROLE_KEY',
      process.env.SUPABASE_SERVICE_ROLE_KEY,
    ),
  }
}

export function configLeads(): {
  notificarA: string
  notificarDesde: string
  resendApiKey: string
  salIp: string
} {
  enServidor('configLeads()')
  return {
    notificarA: process.env.LEADS_NOTIFY_TO ?? '',
    // Mientras el dominio no esté verificado en Resend, el único remitente
    // permitido es onboarding@resend.dev, y solo puede escribirle a la dirección
    // de la cuenta. Verificado planobase.co, esto pasa a web@planobase.co.
    notificarDesde:
      process.env.LEADS_NOTIFY_FROM ?? 'Plano Base <onboarding@resend.dev>',
    resendApiKey: process.env.RESEND_API_KEY ?? '',
    salIp: process.env.LEAD_IP_SALT ?? '',
  }
}
