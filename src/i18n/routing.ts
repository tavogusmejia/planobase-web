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

/**
 * Qué idiomas **pueden** llegar a indexarse. Ya no es el interruptor.
 *
 * Antes esta lista decidía sola: con solo `['es']`, todo `/en` iba `noindex`
 * porque la interfaz estaba traducida y el cuerpo editorial no. Esa decisión se
 * revirtió —se traduce el sitio entero— y con ella cambió la forma de la
 * pregunta. Ahora no se indexa un idioma, se indexa una ruta: cada página entra
 * al índice inglés cuando su contenido está traducido de verdad, y el resto
 * sigue fuera. Quién decide eso es `traducida(entidad, idioma)` en
 * `src/lib/i18n/publicacion.ts`.
 *
 * Lo que esta lista conserva es su papel de lista blanca, y sigue escrita como
 * lista y nunca como negación: si dijera «todos menos X», el día que entre un
 * tercer idioma se indexaría solo porque nadie se acordó de excluirlo, y un
 * error aquí saca del buscador el idioma principal del sitio. Un idioma que no
 * esté aquí no se indexa por mucho que su contenido esté traducido.
 *
 * La ruta sin traducir sigue viva y navegable: es `noindex, follow`, no un
 * `Disallow`. Bloquear el rastreo sería peor — si el rastreador no puede leer
 * la página, nunca ve la etiqueta y las URLs ya indexadas se quedan donde
 * están.
 */
export const LOCALES_INDEXABLES: readonly Locale[] = ['es', 'en']

export function esIndexable(locale: string): boolean {
  return LOCALES_INDEXABLES.includes(locale as Locale)
}
