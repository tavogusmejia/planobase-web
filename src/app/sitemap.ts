import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data/projects'
import { posts } from '@content/posts'
import { puertas } from '@content/puertas'
import { LOCALES_INDEXABLES, routing } from '@/i18n/routing'
import { verticales } from '@content/verticales'

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.planobase.co'

/**
 * Cada ruta se lista una vez, con sus alternativas en `languages` y un
 * `x-default` que apunta al español, que es el idioma editorial.
 *
 * Ojo: las páginas en inglés todavía sirven contenido en español donde falta
 * traducción. Están declaradas porque la interfaz sí está traducida y la URL
 * existe; cuando el contenido editorial se traduzca de verdad, esto no cambia.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs()

  const rutas: { path: string; priority: number; freq: 'weekly' | 'monthly' }[] =
    [
      { path: '', priority: 1, freq: 'weekly' },
      { path: '/proyectos', priority: 0.9, freq: 'weekly' },
      { path: '/estudio', priority: 0.8, freq: 'monthly' },
      { path: '/servicios', priority: 0.9, freq: 'monthly' },
      ...puertas.map((p) => ({
        path: `/servicios/${p.slug}`,
        priority: 0.8,
        freq: 'monthly' as const,
      })),
      { path: '/servicios/asesoria-tecnica', priority: 0.8, freq: 'monthly' },
      { path: '/agendar', priority: 0.9, freq: 'monthly' },
      { path: '/contacto', priority: 0.7, freq: 'monthly' },
      { path: '/blog', priority: 0.5, freq: 'monthly' },
      // Las verticales, que son páginas de verdad con su propio texto. Antes
      // aquí iban las URLs con parámetro, que además se autocanonicalizaban a
      // /proyectos: se pedía indexar siete páginas que decían ser otra.
      ...verticales.map((v) => ({
        path: `/proyectos/categoria/${v.categoria}`,
        priority: 0.8,
        freq: 'monthly' as const,
      })),
      ...slugs.map((s) => ({
        path: `/proyectos/${s}`,
        priority: 0.8,
        freq: 'monthly' as const,
      })),
      ...posts.map((p) => ({
        path: `/blog/${p.slug}`,
        priority: 0.4,
        freq: 'monthly' as const,
      })),
    ]

  const ahora = new Date()

  // hreflang solo entre idiomas que se indexan. Con uno solo no hay
  // alternativas que declarar, y un clúster hreflang donde un miembro va
  // `noindex` Google lo ignora entero: declararlo sería ruido, no señal.
  const hayAlternativas = LOCALES_INDEXABLES.length > 1

  return rutas.map(({ path, priority, freq }) => ({
    url: `${base}/${routing.defaultLocale}${path}`,
    lastModified: ahora,
    changeFrequency: freq,
    priority,
    ...(hayAlternativas
      ? {
          alternates: {
            languages: {
              ...Object.fromEntries(
                LOCALES_INDEXABLES.map((l) => [l, `${base}/${l}${path}`]),
              ),
              'x-default': `${base}/${routing.defaultLocale}${path}`,
            },
          },
        }
      : {}),
  }))
}
