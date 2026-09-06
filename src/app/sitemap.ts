import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data/projects'
import { posts, postPorSlug, postsDelPilar } from '@content/posts'
import { pilares } from '@content/pilares'
import { herramientasDisponibles } from '@content/herramientas'
import { puertas } from '@content/puertas'
import { esIndexable, routing } from '@/i18n/routing'
import { rutaDe, traducida, type RutaTraducible } from '@/lib/i18n/publicacion'
import { fechaDeTraduccion } from '@/lib/data/posts'
import { politicaDe } from '@/lib/data/contenido'
import { verticales } from '@content/verticales'
import type { Post } from '@/lib/types'

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

  /**
   * `lastModified` real, o ninguno.
   *
   * Antes todas las rutas llevaban la hora del build, así que cada despliegue
   * le decía a Google que las 45 páginas habían cambiado. Repetido, Google deja
   * de creer la señal — justo cuando un dominio nuevo la necesita para entrar
   * rápido. Los artículos ya sabían cuándo cambiaron; el resto se quedaba con
   * la fecha del build, que es exactamente la mentira que se quería evitar,
   * escrita en 39 URLs en vez de en 45.
   *
   * Ahora la fecha la calcula `fechaDe()` **a partir del dato que de verdad
   * cambia la página**, y las rutas para las que ese dato no existe salen del
   * sitemap **sin `lastModified`**. El campo es opcional en el protocolo: no
   * declararlo es decir «no lo sé», que es cierto, mientras que declarar la
   * fecha del build es decir algo falso. No es un pendiente disfrazado — es lo
   * correcto mientras no haya un campo de contenido que lo sostenga.
   */
  /* Cada fila lleva su entidad y no su ruta: la ruta se deriva con `rutaDe()`.
     Guardar las dos sería guardar el mismo dato dos veces, y el día que alguien
     cambie una y no la otra el sitemap anunciaría una URL que no existe.
     La fecha tampoco viaja aquí: es la misma pregunta para todas y la responde
     `fechaDe()`, que además la sabe por idioma. */
  const rutas: {
    entidad: RutaTraducible
    priority: number
    freq: 'weekly' | 'monthly'
  }[] =
    [
      { entidad: { tipo: 'pagina', ruta: '' }, priority: 1, freq: 'weekly' },
      { entidad: { tipo: 'pagina', ruta: '/proyectos' }, priority: 0.9, freq: 'weekly' },
      { entidad: { tipo: 'pagina', ruta: '/estudio' }, priority: 0.8, freq: 'monthly' },
      { entidad: { tipo: 'pagina', ruta: '/experiencia' }, priority: 0.8, freq: 'monthly' },
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
        })),
      ...posts.map((p) => ({
        entidad: { tipo: 'articulo' as const, slug: p.slug },
        priority: 0.6,
        freq: 'monthly' as const,
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
  return rutas.flatMap(({ entidad, priority, freq }) => {
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

    return idiomas.map((l) => {
      const cambiada = fechaDe(entidad, l)
      return {
        url: `${base}/${l}${path}`,
        ...(cambiada ? { lastModified: cambiada } : {}),
        changeFrequency: freq,
        priority,
        ...(languages ? { alternates: { languages } } : {}),
      }
    })
  })
}

/** Mediodía UTC, para que la fecha no se corra un día en ninguna zona. */
function fechaIso(iso: string): Date {
  return new Date(`${iso}T12:00:00Z`)
}

/** La más reciente, o nada si la lista viene vacía. */
function laMasReciente(fechas: Date[]): Date | undefined {
  return fechas.reduce<Date | undefined>(
    (max, f) => (max && max > f ? max : f),
    undefined,
  )
}

/**
 * Cuándo cambió este artículo, en este idioma.
 *
 * Para la versión inglesa no basta la fecha del español: una traducción
 * publicada hoy sobre un artículo de 2023 le estaría diciendo a Google que esa
 * URL nueva lleva dos años sin tocarse. Manda la más reciente de las dos.
 */
function fechaDelArticulo(p: Post, idioma: string): Date {
  const propia = fechaIso(p.actualizado ?? p.fecha)
  const traducido = fechaDeTraduccion(p.slug, idioma)
  if (!traducido) return propia
  const fecha = fechaIso(traducido)
  return propia > fecha ? propia : fecha
}

/**
 * Cuándo cambió esta URL, en este idioma. `undefined` si no hay forma honesta
 * de saberlo.
 *
 * Lo que decide cada caso es **qué dato cambia esa página**, no qué dato hay a
 * mano:
 *
 * - Un artículo cambia cuando se escribe, se actualiza o se traduce.
 * - Un tema y el índice del blog cambian cuando cambia alguno de los artículos
 *   que listan, así que heredan el más reciente de los suyos — por idioma, que
 *   es donde la traducción cuenta.
 * - La política de datos cambia cuando cambia la política, y eso ya lo dice su
 *   propio `vigenteDesde`, que es uno de los contenidos obligatorios del
 *   documento. Se lee del texto que se sirve en ese idioma: si algún día la
 *   versión inglesa se queda una revisión atrás, su fecha lo dirá.
 *
 * Lo demás —portada, /proyectos, /estudio, /servicios, las siete puertas, la
 * asesoría, /agendar, /contacto, /apbs, la calculadora, las verticales y las
 * 23 fichas de proyecto— **no tiene fecha y por eso no la lleva**. Ninguno de
 * esos contenidos guarda cuándo se tocó por última vez: `content/projects.ts`
 * lo regenera `pnpm media` sin marca de tiempo, y las verticales, las puertas
 * y la copia de página son texto sin campo de revisión. Cualquier fecha que se
 * emitiera ahí sería la del build. Para que la lleven hace falta un dato nuevo
 * en `content/` —un `actualizado` por entidad—, no un cálculo más aquí.
 */
function fechaDe(entidad: RutaTraducible, idioma: string): Date | undefined {
  switch (entidad.tipo) {
    case 'articulo': {
      const p = postPorSlug.get(entidad.slug)
      return p ? fechaDelArticulo(p, idioma) : undefined
    }
    case 'tema': {
      const pilar = pilares.find((p) => p.slug === entidad.slug)
      if (!pilar) return undefined
      return laMasReciente(
        postsDelPilar(pilar.id).map((p) => fechaDelArticulo(p, idioma)),
      )
    }
    case 'pagina':
      if (entidad.ruta === '/blog') {
        return laMasReciente(posts.map((p) => fechaDelArticulo(p, idioma)))
      }
      if (entidad.ruta === '/politica-de-datos') {
        return fechaIso(politicaDe(idioma).vigenteDesde)
      }
      return undefined
    default:
      return undefined
  }
}
