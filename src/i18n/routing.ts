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
 * Qué idiomas se indexan. Lista blanca y nunca negación: si esto se escribiera
 * como «todos menos inglés», el día que entre un tercer idioma se indexaría solo
 * porque nadie se acordó de excluirlo, y un error aquí saca del buscador el
 * idioma principal del sitio.
 *
 * Hoy solo español. La interfaz inglesa está completa, pero el cuerpo editorial
 * —las memorias de los 23 proyectos, los titulares de servicios, el blog— sigue
 * en español y se sirve idéntico en /en. Indexarlo gasta presupuesto de rastreo
 * de un dominio nuevo justo cuando lo que necesita es que las 40 URLs en español
 * entren rápido. Y un estudio de dos personas en Cali, con cliente institucional
 * colombiano, no tiene hoy demanda en inglés que lo justifique.
 *
 * La ruta sigue viva y navegable: esto es `noindex, follow`, no un `Disallow`.
 * Bloquear el rastreo sería peor — si el rastreador no puede leer la página,
 * nunca ve la etiqueta y las URLs ya indexadas se quedan donde están.
 *
 * Cuando se traduzca el contenido de verdad, se añade 'en' a esta lista.
 */
export const LOCALES_INDEXABLES: readonly Locale[] = ['es']

export function esIndexable(locale: string): boolean {
  return LOCALES_INDEXABLES.includes(locale as Locale)
}
