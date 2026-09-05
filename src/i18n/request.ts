import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

/**
 * Los mensajes son textos de interfaz (botones, labels, errores), no contenido
 * editorial. El contenido sale de `content/` y, más adelante, de Supabase.
 *
 * Español es la base y el inglés se superpone encima, así que una traducción
 * pendiente cae al español y ninguna página puede quedar en blanco.
 */

/** Un árbol de mensajes: hojas de texto, ramas de agrupación. */
type Mensajes = { [clave: string]: string | Mensajes }

/**
 * Fusión **por clave**, no por espacio de nombres.
 *
 * La versión anterior era `{ ...base, ...en }`, y ese respaldo no existía: el
 * spread es superficial, así que un espacio presente en `en.json` reemplazaba
 * entero al español y las claves que faltaran dentro de él no caían a ninguna
 * parte — next-intl lanza `MISSING_MESSAGE` y pinta la ruta de la clave en
 * pantalla. Nunca se vio porque los dos archivos tienen hoy las mismas 75
 * claves; empieza a importar en cuanto entren las de la traducción del sitio.
 *
 * Una cadena vacía cuenta como ausente. Un archivo a medio traducir, con la
 * clave puesta y el valor todavía sin escribir, no debe publicar un botón sin
 * texto: es preferible que se lea en español.
 */
function fusionar(base: Mensajes, encima: Mensajes): Mensajes {
  const salida: Mensajes = { ...base }

  for (const [clave, valor] of Object.entries(encima)) {
    const previo = salida[clave]

    if (typeof valor === 'string') {
      if (valor.trim() !== '') salida[clave] = valor
      continue
    }

    salida[clave] =
      previo !== undefined && typeof previo !== 'string'
        ? fusionar(previo, valor)
        : valor
  }

  return salida
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  const base = (await import('../../messages/es.json')).default as Mensajes
  const messages =
    locale === routing.defaultLocale
      ? base
      : fusionar(
          base,
          (await import(`../../messages/${locale}.json`)).default as Mensajes,
        )

  return {
    locale,
    messages,
    timeZone: 'America/Bogota',
    now: new Date(),
  }
})
