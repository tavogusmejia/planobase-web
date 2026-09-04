import type { MetadataRoute } from 'next'
import { getAllSlugs, getCategoryCounts } from '@/lib/data/projects'
import { posts } from '@content/posts'
import { puertas } from '@content/puertas'
import { CATEGORIAS } from '@/lib/types'
import { LOCALES_INDEXABLES, routing } from '@/i18n/routing'

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
  const [slugs, counts] = await Promise.all([
    getAllSlugs(),
    getCategoryCounts(),
  ])

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
      // Solo las categorías que tienen obra. Anunciar una vacía es pedirle al
      // rastreador que visite una página que le va a devolver «todavía no hay
      // obra publicada» — un soft-404 declarado por uno mismo.
      ...CATEGORIAS.filter((c) => (counts[c] ?? 0) > 0).map((c) => ({
        path: `/proyectos?categoria=${c}`,
        priority: 0.7,
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
