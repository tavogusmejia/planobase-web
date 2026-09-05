import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/utils'
import { site } from '@content/site'
import { sitioIndexable } from '@/lib/env'
import { esIndexable, routing } from '@/i18n/routing'
import { rutaDe, traducida, type RutaTraducible } from '@/lib/i18n/publicacion'

/**
 * La tarjeta con la que una página se ve al compartirse.
 *
 * Existe por una trampa de Next: los metadatos se mezclan por clave de primer
 * nivel, no en profundidad. Una página que declara `openGraph` con solo título
 * y descripción **reemplaza entero** el `openGraph` del layout, y se queda sin
 * imagen. El fallo no se ve al construir ni al navegar: solo aparece cuando
 * alguien pega el enlace en WhatsApp y sale un rectángulo vacío.
 *
 * Como WhatsApp es el canal principal declarado del estudio, ese rectángulo
 * vacío es el paso del embudo entre que el arquitecto pasa el enlace y el
 * cliente lo abre. Por eso la imagen va aquí dentro y no la pone quien llama:
 * no se puede olvidar.
 *
 * La imagen sigue siendo la misma para todo el sitio. Lo que cambia por página
 * es el texto, que es lo que el lector lee antes de decidir si toca el enlace.
 * Generar una tarjeta propia por página es un paso aparte y más grande.
 */
export function tarjeta({
  locale,
  ruta,
  titulo,
  descripcion,
  tipo = 'website',
}: {
  locale: string
  /** Ruta con idioma, tal como va en el canonical: `/es/servicios`. */
  ruta: string
  titulo: string
  descripcion: string
  tipo?: 'website' | 'article'
}): NonNullable<Metadata['openGraph']> {
  return {
    type: tipo,
    url: absoluteUrl(ruta),
    siteName: site.nombreLargo,
    locale: locale === 'en' ? 'en_US' : 'es_CO',
    title: titulo,
    description: descripcion,
    images: [
      {
        url: absoluteUrl('/og/default.jpg'),
        width: 1200,
        height: 630,
        alt: `${site.nombreLargo}, arquitectura en Colombia`,
      },
    ],
  }
}

/**
 * Las cuatro decisiones de indexación de una página, en un solo objeto.
 *
 * Devuelve `alternates` y `robots` juntos **a propósito**. Separarlos es
 * exactamente cómo se pierde `languages` en silencio: los metadatos de Next se
 * mezclan por clave de primer nivel, así que una página que hiciera el spread
 * de esto y luego escribiera su propio `alternates: { canonical }` se quedaría
 * sin las alternativas de idioma sin que nada fallara. Es la misma trampa que
 * ya se cobró una vez el `openGraph` de este repo. Por eso el spread va
 * **el último** del literal.
 *
 * Qué decide cada pieza:
 *
 * - **`canonical`** se autorreferencia con el idioma de la propia URL. Nunca se
 *   canonicaliza `/en` hacia `/es`: una página traducida que apunta al español
 *   le está pidiendo a Google que la descarte, que es lo contrario de lo que se
 *   busca.
 * - **`languages`** solo lista los idiomas en los que esta ruta está traducida
 *   de verdad, y se omite entero si solo califica uno. Se conserva el argumento
 *   que ya estaba escrito en el sitemap —un clúster hreflang con un miembro
 *   `noindex` Google lo descarta entero— y lo único que cambia es la
 *   granularidad: de «cuántos idiomas indexa el sitio» a «cuántos tiene esta
 *   página». Ese cambio es lo que hace posible publicar página por página.
 * - **`robots`** va **siempre explícito**. Así el valor del layout solo alcanza
 *   a las páginas que se olviden de llamar a esta función, y esas quedan
 *   `noindex`: falla cerrada, que es el default correcto en un repo donde las
 *   páginas se añaden a mano.
 *
 * La reciprocidad del `hreflang` sale gratis: las dos versiones de una página
 * llaman a esta misma función con la misma entidad, así que los conjuntos son
 * simétricos por construcción. Ese es el argumento para que sea una función y
 * no un objeto escrito en cada página.
 */
export function alternativas({
  locale,
  entidad,
}: {
  locale: string
  entidad: RutaTraducible
}): Pick<Metadata, 'alternates' | 'robots'> {
  const ruta = rutaDe(entidad)
  const publicable = (l: string) =>
    sitioIndexable() && esIndexable(l) && traducida(entidad, l)

  const idiomas = routing.locales.filter(publicable)

  return {
    alternates: {
      canonical: `/${locale}${ruta}`,
      ...(idiomas.length > 1
        ? {
            languages: {
              ...Object.fromEntries(
                idiomas.map((l) => [l, `${absoluteUrl(`/${l}${ruta}`)}`]),
              ),
              'x-default': absoluteUrl(`/${routing.defaultLocale}${ruta}`),
            },
          }
        : {}),
    },
    robots: publicable(locale)
      ? { index: true, follow: true }
      : { index: false, follow: true },
  }
}
