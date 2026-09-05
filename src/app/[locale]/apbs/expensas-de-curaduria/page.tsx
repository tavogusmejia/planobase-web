import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { JsonLd } from '@/components/seo/JsonLd'
import { CalculadoraExpensas } from '@/components/apbs/CalculadoraExpensas'
import { herramientaPorSlug } from '@content/herramientas'
import { UVT, FACTOR_MUNICIPAL, estaVencido } from '@content/apbs/vigencia'
import { MUNICIPIOS } from '@content/apbs/expensas'
import { puertas } from '@content/puertas'
import { routing } from '@/i18n/routing'
import { absoluteUrl } from '@/lib/utils'

const SLUG = 'expensas-de-curaduria'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const h = herramientaPorSlug.get(SLUG)
  if (!h) return {}
  const url = `/${locale}/apbs/${SLUG}`
  return {
    title: h.nombre,
    description: h.metaDescripcion,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url: absoluteUrl(url),
      siteName: 'Plano Base',
      locale: locale === 'en' ? 'en_US' : 'es_CO',
      title: h.metaTitulo,
      description: h.metaDescripcion,
      images: [{ url: absoluteUrl('/og/default.jpg'), width: 1200, height: 630 }],
    },
  }
}

/**
 * Calculadora de expensas de curaduría.
 *
 * La primera capa de la defensa contra los datos caducos: si la UVT o la tabla
 * de factores vencieron, la página **lo dice y no da la cifra como buena**.
 * No depende del cron ni de que nadie lea un correo.
 */
export default async function ExpensasPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const h = herramientaPorSlug.get(SLUG)!
  const puerta = puertas.find((p) => p.slug === h.puerta)
  const vencido = estaVencido(UVT) || estaVencido(FACTOR_MUNICIPAL)
  const conCuraduria = MUNICIPIOS.filter(
    (m) => m.vacantes.length < m.despachos,
  ).length

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: h.metaTitulo,
      description: h.metaDescripcion,
      url: absoluteUrl(`/${locale}/apbs/${SLUG}`),
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      inLanguage: 'es-CO',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'COP' },
      publisher: { '@id': absoluteUrl('/#estudio') },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'APBS', item: absoluteUrl(`/${locale}/apbs`) },
        {
          '@type': 'ListItem',
          position: 2,
          name: h.nombre,
          item: absoluteUrl(`/${locale}/apbs/${SLUG}`),
        },
      ],
    },
  ]

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <JsonLd datos={jsonLd} />

      <nav aria-label="Ruta" className="text-block mb-10 text-muted">
        <Link href="/apbs" className="hover:text-ink">
          APBS
        </Link>
      </nav>

      <header>
        <h1 className="text-h1 measure-display text-ink">{h.titulo}</h1>
        <p className="text-lead measure mt-8 text-ink-soft">{h.resumen}</p>
      </header>

      {vencido ? (
        <div className="measure-ancho mt-12 border-t border-b border-accent py-8">
          <p className="text-h4 text-ink">
            Estos valores están desactualizados y no se deben usar.
          </p>
          <p className="text-body measure mt-4 text-ink-soft">
            La calculadora se apoya en la UVT del año y en la tabla de factores
            municipales, y alguno de los dos venció. Preferimos decirlo a
            devolverle una cifra que estaría mal. Escríbanos y le damos el dato
            correcto mientras la actualizamos.
          </p>
        </div>
      ) : (
        <CalculadoraExpensas uvt={UVT.valor} anioUvt={UVT.anio} />
      )}

      <section className="measure mt-20 border-t border-line pt-10">
        <h2 className="text-h4 text-ink">De dónde sale el cálculo</h2>
        <p className="text-body mt-4 text-ink-soft">
          De la ecuación del artículo 2.2.6.6.8.3 del Decreto 1077 de 2015,
          sustituido por el Decreto 1890 de 2021, que pasó las tarifas de
          salarios mínimos a UVT. Cualquier tabla que siga en salarios mínimos
          está desactualizada desde diciembre de 2021.
        </p>
        <p className="text-body mt-5 text-ink-soft">
          El factor municipal sale del artículo 2.2.6.6.8.4 y de las
          resoluciones del Ministerio de Vivienda que lo asignaron a los
          municipios que designaron curador después. Son{' '}
          <strong className="font-normal text-ink">
            {MUNICIPIOS.length} municipios
          </strong>{' '}
          con factor asignado, de los cuales{' '}
          <strong className="font-normal text-ink">{conCuraduria}</strong>{' '}
          tienen hoy curaduría en operación. En el resto del país —más de mil
          municipios— la licencia la expide la oficina de planeación y{' '}
          <strong className="font-normal text-ink">
            está prohibido cobrar expensas
          </strong>
          .
        </p>
        <p className="text-body mt-5 text-ink-soft">
          Las cifras se comprobaron contra las tablas de expensas que publican
          las curadurías de Bogotá, Soacha, Girón, Cajicá y Tocancipá para{' '}
          {UVT.anio}. Cuadran al peso.
        </p>
        <p className="text-block mt-8 text-muted">
          Valor de la UVT: {UVT.fuente}. La tabla de factores municipales debe
          ser actualizada por el Ministerio antes del 6 de agosto de 2028, por
          mandato del Decreto 1107 de 2026.
        </p>
      </section>

      {puerta ? (
        <section className="measure mt-16 border-t border-line pt-10">
          <h2 className="text-h4 text-ink">{puerta.pregunta}</h2>
          <p className="text-body mt-4 text-ink-soft">{puerta.respuesta}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link href={`/servicios/${puerta.slug}`} className="text-block enlace">
              {puerta.nombre}
            </Link>
            <Link href="/agendar" className="text-block enlace">
              Agendar asesoría
            </Link>
          </div>
        </section>
      ) : null}
    </div>
  )
}
