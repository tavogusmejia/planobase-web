import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

/**
 * Los mensajes son textos de interfaz (botones, labels, errores), no contenido
 * editorial. El contenido sale de `content/` y, más adelante, de Supabase.
 *
 * Fallback: si falta una clave en `en`, next-intl cae a `es` gracias a la mezcla
 * de abajo. Ninguna página puede quedar en blanco por una traducción pendiente.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  const base = (await import('../../messages/es.json')).default
  const messages =
    locale === routing.defaultLocale
      ? base
      : { ...base, ...(await import(`../../messages/${locale}.json`)).default }

  return {
    locale,
    messages,
    timeZone: 'America/Bogota',
    now: new Date(),
  }
})
