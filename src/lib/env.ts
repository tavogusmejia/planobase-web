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
  /** `G-XXXXXXXXXX`. Vacío = sin analítica de Google. */
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? '',
  /** `AW-XXXXXXXXX`. Vacío = sin etiqueta de conversión de Ads. */
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? '',
  /**
   * La etiqueta de la conversión «lead» dentro de la cuenta de Ads.
   *
   * Va aparte del identificador porque Google la exige junta —`AW-123/AbC_dEf`—
   * pero se generan en sitios distintos de la interfaz y en momentos distintos.
   * Sin ella, Ads recibe la conversión sin saber cuál es y no la cuenta.
   */
  googleAdsEtiquetaLead: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL ?? '',

  /**
   * La etiqueta de la conversión «reserva», que es una distinta.
   *
   * Una reserva y un formulario enviado no valen lo mismo: la reserva trae hora
   * puesta en el calendario. Con una sola etiqueta Ads las sumaría y
   * optimizaría hacia la mezcla, que es la peor de las dos decisiones posibles.
   *
   * Vacía hasta que exista la cuenta de Ads (X-05). Sin ella no se dispara nada
   * y no se rompe nada.
   */
  googleAdsEtiquetaReserva:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_SCHEDULE_LABEL ?? '',
} as const

/**
 * ¿Hay algo que medir?
 *
 * Si no hay ningún identificador, el sitio no pregunta por el consentimiento.
 * Pedir permiso para algo que no se va a hacer recoge un dato que no hace falta
 * y gasta la única oportunidad de preguntarlo bien.
 */
export function hayEtiquetasDeMedicion(): boolean {
  return Boolean(
    entornoPublico.metaPixelId ||
      entornoPublico.ga4Id ||
      entornoPublico.googleAdsId,
  )
}

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

/**
 * Si hay credenciales para hablar con Google Calendar.
 *
 * Mismo patrón que `haySupabaseAdmin()`, y por la misma razón: sin esto el
 * calendario funciona exactamente como hasta hoy —ofrece sus franjas y confirma
 * la reserva— y lo único que falta es que vea la agenda real y traiga el enlace
 * de Meet. **Una credencial ausente no puede costar una cita.**
 */
export function hayGoogleCalendar(): boolean {
  return Boolean(
    process.env.GOOGLE_SA_EMAIL &&
      process.env.GOOGLE_SA_PRIVATE_KEY &&
      process.env.GOOGLE_CALENDAR_ID &&
      process.env.GOOGLE_IMPERSONA,
  )
}

/** Lanza si falta algo. Llamar solo tras comprobar `hayGoogleCalendar()`. */
export function configGoogleCalendar(): {
  cuentaServicio: string
  clavePrivada: string
  calendarioId: string
  impersona: string
} {
  enServidor('configGoogleCalendar()')
  return {
    cuentaServicio: requerida('GOOGLE_SA_EMAIL', process.env.GOOGLE_SA_EMAIL),
    /* Los saltos de línea de una clave PEM viajan escapados dentro de una
       variable de entorno. Sin deshacer el escape, `createSign` lanza
       «error:1E08010C:DECODER routines::unsupported», que no dice
       absolutamente nada sobre la causa real y cuesta una tarde. */
    clavePrivada: requerida(
      'GOOGLE_SA_PRIVATE_KEY',
      process.env.GOOGLE_SA_PRIVATE_KEY,
    ).replace(/\\n/g, '\n'),
    calendarioId: requerida(
      'GOOGLE_CALENDAR_ID',
      process.env.GOOGLE_CALENDAR_ID,
    ),
    /* La cuenta cuyo calendario se lee y en cuyo nombre se crean los eventos.
       Es la delegación de dominio: la cuenta de servicio actúa *como* ella. */
    impersona: requerida('GOOGLE_IMPERSONA', process.env.GOOGLE_IMPERSONA),
  }
}

/**
 * El secreto con el que se firma el sello de tiempo de los formularios.
 *
 * Cae a `LEAD_IP_SALT` a propósito, y no por pereza: las dos son el mismo tipo
 * de cosa —un secreto local que solo se usa para un HMAC dentro de este
 * servidor, nunca como credencial de nadie— y en los despliegues donde ya está
 * configurada la sal, el antispam de tiempo empieza a funcionar sin tocar la
 * configuración. Quien quiera separarlas define `FORM_TOKEN_SECRET` y esta gana.
 *
 * Si no hay ninguna de las dos, la comprobación de tiempo se desactiva sola en
 * vez de rechazar envíos: la razón está escrita entera en
 * `src/lib/formulario/sello.ts`.
 */
export function configFormularios(): { secretoSello: string } {
  enServidor('configFormularios()')
  return {
    secretoSello:
      process.env.FORM_TOKEN_SECRET ?? process.env.LEAD_IP_SALT ?? '',
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
