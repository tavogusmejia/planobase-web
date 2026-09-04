import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data/projects'
import { posts } from '@content/posts'
import { puertas } from '@content/puertas'
import { CATEGORIAS } from '@/lib/types'
import { routing } from '@/i18n/routing'

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
      ...CATEGORIAS.map((c) => ({
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

  return rutas.map(({ path, priority, freq }) => ({
    url: `${base}/${routing.defaultLocale}${path}`,
    lastModified: ahora,
    changeFrequency: freq,
    priority,
    alternates: {
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, `${base}/${l}${path}`]),
        ),
        'x-default': `${base}/${routing.defaultLocale}${path}`,
      },
    },
  }))
}
