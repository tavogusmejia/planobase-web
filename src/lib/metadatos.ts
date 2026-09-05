import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/utils'
import { site } from '@content/site'

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
