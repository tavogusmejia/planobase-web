import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data/projects'
import { posts, postsDelPilar } from '@content/posts'
import { pilares } from '@content/pilares'
import { herramientasDisponibles } from '@content/herramientas'
import { puertas } from '@content/puertas'
import { esIndexable, routing } from '@/i18n/routing'
import { rutaDe, traducida, type RutaTraducible } from '@/lib/i18n/publicacion'
import { fechaDeTraduccion } from '@/lib/data/posts'
import { verticales } from '@content/verticales'

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.planobase.co'

/**
 * El sitemap declara **lo que está traducido**, ruta por ruta.
 *
 * El comentario que había aquí decía que las páginas inglesas estaban
 * declaradas, y llevaba tiempo sin ser cierto: el interruptor global las dejaba
 * fuera desde que se decidió no indexarlas. Ahora la decisión no es de sitio
 * sino de ruta, y este archivo la consulta en vez de suponerla.
 *
 * El `x-default` apunta al español, que es el idioma editorial y la versión que
 * siempre existe.
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
  /* Cada fila lleva su entidad y no su ruta: la ruta se deriva con `rutaDe()`.
     Guardar las dos sería guardar el mismo dato dos veces, y el día que alguien
     cambie una y no la otra el sitemap anunciaría una URL que no existe. */
  const rutas: {
    entidad: RutaTraducible
    priority: number
    freq: 'weekly' | 'monthly'
    lastModified?: Date
  }[] =
    [
      { entidad: { tipo: 'pagina', ruta: '' }, priority: 1, freq: 'weekly' },
      { entidad: { tipo: 'pagina', ruta: '/proyectos' }, priority: 0.9, freq: 'weekly' },
      { entidad: { tipo: 'pagina', ruta: '/estudio' }, priority: 0.8, freq: 'monthly' },
      { entidad: { tipo: 'pagina', ruta: '/servicios' }, priority: 0.9, freq: 'monthly' },
      ...puertas.map((p) => ({
        entidad: { tipo: 'puerta' as const, slug: p.slug },
        priority: 0.8,
        freq: 'monthly' as const,
      })),
      { entidad: { tipo: 'pagina', ruta: '/servicios/asesoria-tecnica' }, priority: 0.8, freq: 'monthly' },
      { entidad: { tipo: 'pagina', ruta: '/agendar' }, priority: 0.9, freq: 'monthly' },
      { entidad: { tipo: 'pagina', ruta: '/contacto' }, priority: 0.7, freq: 'monthly' },
      { entidad: { tipo: 'pagina', ruta: '/blog' }, priority: 0.5, freq: 'monthly' },
      /* La política de datos se declara, y no es un descuido de prioridad baja.
         Un comprador institucional que evalúa al estudio comprueba que exista:
         una política que el buscador no encuentra es, para él, una política que
         no está. */
      { entidad: { tipo: 'pagina', ruta: '/politica-de-datos' }, priority: 0.3, freq: 'monthly' },
      { entidad: { tipo: 'pagina', ruta: '/apbs' }, priority: 0.7, freq: 'monthly' },
      // Solo las herramientas que ya calculan algo. Una página que anuncia
      // una herramienta y no la tiene es una página delgada.
      ...herramientasDisponibles.map((h) => ({
        entidad: { tipo: 'herramienta' as const, slug: h.slug },
        priority: 0.8,
        freq: 'monthly' as const,
      })),
      // Las verticales, que son páginas de verdad con su propio texto. Antes
      // aquí iban las URLs con parámetro, que además se autocanonicalizaban a
      // /proyectos: se pedía indexar siete páginas que decían ser otra.
      ...verticales.map((v) => ({
        entidad: { tipo: 'vertical' as const, categoria: v.categoria },
        priority: 0.8,
        freq: 'monthly' as const,
      })),
      ...slugs.map((s) => ({
        entidad: { tipo: 'proyecto' as const, slug: s },
        priority: 0.8,
        freq: 'monthly' as const,
      })),
      // Los temas del blog: páginas de verdad, con su propio texto y su
      // propia dirección. Solo las que tienen artículos debajo.
      ...pilares
        .filter((pi) => postsDelPilar(pi.id).length > 0)
        .map((pi) => ({
          entidad: { tipo: 'tema' as const, slug: pi.slug },
          priority: 0.6,
          freq: 'monthly' as const,
          lastModified: fechaDelPilar(pi.id),
        })),
      ...posts.map((p) => ({
        entidad: { tipo: 'articulo' as const, slug: p.slug },
        priority: 0.6,
        freq: 'monthly' as const,
        lastModified: new Date(`${p.actualizado ?? p.fecha}T12:00:00Z`),
      })),
    ]

  /* Una fila puede producir una URL, dos o ninguna.
   *
   * Antes producía siempre una, la española, y el `hreflang` era una decisión
   * de sitio entero: o se declaraban alternativas en todas las páginas o en
   * ninguna. Con la traducción avanzando página por página eso ya no sirve, y
   * la granularidad pasa a ser la ruta: entra al sitemap la versión inglesa de
   * lo que esté traducido, y solo esa.
   *
   * Se conserva íntegro el argumento que ya estaba escrito aquí —un clúster
   * hreflang donde un miembro va `noindex` Google lo descarta entero—, y por
   * eso el par de alternativas solo se declara cuando de verdad hay dos
   * versiones indexables. Toda URL del clúster lleva el mismo mapa, incluida su
   * propia autorreferencia, que es lo que exige la especificación. */
  return rutas.flatMap(({ entidad, priority, freq, lastModified }) => {
    const path = rutaDe(entidad)
    const idiomas = routing.locales.filter(
      (l) => esIndexable(l) && traducida(entidad, l),
    )
    if (idiomas.length === 0) return []

    const languages =
      idiomas.length > 1
        ? {
            ...Object.fromEntries(
              idiomas.map((l) => [l, `${base}/${l}${path}`]),
            ),
            'x-default': `${base}/${routing.defaultLocale}${path}`,
          }
        : undefined

    return idiomas.map((l) => ({
      url: `${base}/${l}${path}`,
      lastModified: fechaDe(entidad, l, lastModified) ?? ahora,
      changeFrequency: freq,
      priority,
      ...(languages ? { alternates: { languages } } : {}),
    }))
  })
}

/**
 * Cuándo cambió esta URL, en este idioma.
 *
 * Para la versión inglesa de un artículo no basta la fecha del español: una
 * traducción publicada hoy sobre un artículo de 2023 le estaría diciendo a
 * Google que esa URL nueva lleva dos años sin tocarse. Manda la más reciente de
 * las dos.
 */
function fechaDe(
  entidad: RutaTraducible,
  idioma: string,
  base: Date | undefined,
): Date | undefined {
  if (entidad.tipo !== 'articulo') return base
  const traducido = fechaDeTraduccion(entidad.slug, idioma)
  if (!traducido) return base
  const fecha = new Date(`${traducido}T12:00:00Z`)
  return base && base > fecha ? base : fecha
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
