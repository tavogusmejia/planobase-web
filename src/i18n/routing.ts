import { defineRouting } from 'next-intl/routing'

/**
 * Español es el idioma base y la fuente editorial. Inglés se traduce después,
 * pero el router lo contempla desde el día uno.
 *
 * `localePrefix: 'always'` mantiene `/es/...` y `/en/...` explícitos: un slug sin
 * prefijo es una URL vieja de Wix y debe morir en un 301, no resolverse sola.
 *
 * Los slugs de proyecto son idénticos en ambos idiomas — son nombres propios.
 */
export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'always',
  localeDetection: true,
})

export type Locale = (typeof routing.locales)[number]

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
}
