import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data/projects'
import { posts, postsDelPilar } from '@content/posts'
import { pilares } from '@content/pilares'
import { herramientasDisponibles } from '@content/herramientas'
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

  const ahora = new Date()

  /**
   * `lastModified` real por entidad.
   *
   * Antes todas las rutas llevaban la hora del build, así que cada despliegue
   * le decía a Google que las 45 páginas habían cambiado. Repetido, Google deja
   * de creer la señal — justo cuando un dominio nuevo la necesita para entrar
   * rápido. Los artículos sí saben cuándo cambiaron; el resto se queda con la
   * fecha del build hasta que tengan su propio dato.
   */
  const rutas: {
    path: string
    priority: number
    freq: 'weekly' | 'monthly'
    lastModified?: Date
  }[] =
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
      { path: '/apbs', priority: 0.7, freq: 'monthly' },
      // Solo las herramientas que ya calculan algo. Una página que anuncia
      // una herramienta y no la tiene es una página delgada.
      ...herramientasDisponibles.map((h) => ({
        path: `/apbs/${h.slug}`,
        priority: 0.8,
        freq: 'monthly' as const,
      })),
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
      // Los temas del blog: páginas de verdad, con su propio texto y su
      // propia dirección. Solo las que tienen artículos debajo.
      ...pilares
        .filter((pi) => postsDelPilar(pi.id).length > 0)
        .map((pi) => ({
          path: `/blog/tema/${pi.slug}`,
          priority: 0.6,
          freq: 'monthly' as const,
          lastModified: fechaDelPilar(pi.id),
        })),
      ...posts.map((p) => ({
        path: `/blog/${p.slug}`,
        priority: 0.6,
        freq: 'monthly' as const,
        lastModified: new Date(`${p.actualizado ?? p.fecha}T12:00:00Z`),
      })),
    ]

  // hreflang solo entre idiomas que se indexan. Con uno solo no hay
  // alternativas que declarar, y un clúster hreflang donde un miembro va
  // `noindex` Google lo ignora entero: declararlo sería ruido, no señal.
  const hayAlternativas = LOCALES_INDEXABLES.length > 1

  return rutas.map(({ path, priority, freq, lastModified }) => ({
    url: `${base}/${routing.defaultLocale}${path}`,
    lastModified: lastModified ?? ahora,
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

/** La fecha del artículo más reciente del tema. Es lo que de verdad cambió. */
function fechaDelPilar(id: (typeof pilares)[number]['id']): Date {
  const delPilar = postsDelPilar(id)
  const masReciente = delPilar.reduce<string | null>((max, p) => {
    const f = p.actualizado ?? p.fecha
    return max === null || f > max ? f : max
  }, null)
  return new Date(`${masReciente ?? '2022-10-01'}T12:00:00Z`)
}
