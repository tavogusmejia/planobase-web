import { getLocale, getTranslations } from 'next-intl/server'
import { precioTexto } from '@/lib/utils'

/**
 * El precio, ya redactado y en el idioma de la petición.
 *
 * Solo servidor: usa `getLocale()` y `getTranslations()`. Los siete sitios que
 * pintan un precio son componentes de servidor, así que sale gratis y evita
 * repartir el mismo ternario y el mismo `getTranslations('comun')` por cinco
 * archivos.
 *
 * La palabra vive en `messages/` y el número en `src/lib/formato.ts`. Aquí solo
 * se juntan, que es exactamente lo que antes hacía una cadena fija en español
 * dentro de una función pura.
 */
export async function etiquetaPrecio(
  cop: number,
  desde = false,
): Promise<string> {
  const [idioma, t] = await Promise.all([
    getLocale(),
    getTranslations('comun'),
  ])

  const precio = precioTexto(idioma, cop)
  if (precio === null) return t('sinCosto')
  return desde ? t('desdePrecio', { precio }) : precio
}
