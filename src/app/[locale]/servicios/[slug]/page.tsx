import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { puertas, puertaPorSlug, serviciosDe } from '@content/puertas'
import { asesoria, contacto, reconocimientos } from '@content/site'
import { routing } from '@/i18n/routing'
import { formatCOP, whatsappUrl } from '@/lib/utils'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    puertas.map((p) => ({ locale, slug: p.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const puerta = puertaPorSlug(slug)
  if (!puerta) return {}

  return {
    title: puerta.nombre,
    description: `${puerta.pregunta} ${puerta.respuesta}`.slice(0, 300),
    alternates: { canonical: `/${locale}/servicios/${slug}` },
  }
}

export default async function PuertaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const puerta = puertaPorSlug(slug)
  if (!puerta) notFound()

  const servicios = serviciosDe(puerta)
  const otras = puertas.filter((p) => p.slug !== slug)
  const esInstitucional = slug === 'espacio-publico-y-equipamientos'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: puerta.nombre,
    description: puerta.respuesta,
    provider: {
      '@type': 'Organization',
      name: 'Plano Base Arquitectos',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cali',
        addressRegion: 'Valle del Cauca',
        addressCountry: 'CO',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Cali' },
      { '@type': 'City', name: 'Jamundí' },
      { '@type': 'City', name: 'Palmira' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: puerta.nombre,
      itemListElement: servicios.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.titulo },
      })),
    },
  }

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Ruta" className="text-block text-muted">
        <Link href="/servicios" className="hover:text-accent">
          Servicios
        </Link>
      </nav>

      <h1 className="text-h1 measure-display mt-6 text-ink">
        {puerta.pregunta}
      </h1>
      <Rule className="mt-6 max-w-xl text-muted">{puerta.nombre}</Rule>
      <p className="text-lead measure mt-10 text-ink">{puerta.respuesta}</p>
      <p className="text-small measure mt-6 text-ink-soft">{puerta.para}</p>

      <section className="mt-24">
        <h2 className="text-block text-muted">Qué incluye</h2>
        <dl className="mt-6 border-t border-line">
          {servicios.map((s) => (
            <div
              key={s.n}
              className="grid gap-2 border-b border-line py-8 lg:grid-cols-[24rem_1fr] lg:gap-16"
            >
              <dt className="text-h5 text-ink">{s.titulo}</dt>
              <dd className="text-body measure text-ink-soft">
                {s.descripcion}
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-block mt-6 text-muted">
          El alcance exacto se define por escrito en la propuesta, con lo que
          entra y lo que no.
        </p>
      </section>

      {/* Los reconocimientos van aquí, no solo en /estudio: quien evalúa a un
          proveedor técnico necesita saber que quien va a revisar su obra ha
          ganado concursos públicos nacionales. */}
      {esInstitucional ? (
        <section className="mt-20">
          <h2 className="text-block text-muted">Reconocimientos</h2>
          <ul className="mt-6 border-t border-line">
            {[...reconocimientos]
              .sort((a, b) => b.anio - a.anio)
              .map((r) => (
                <li
                  key={`${r.anio}-${r.titulo}`}
                  className="grid gap-2 border-b border-line py-6 sm:grid-cols-[5rem_1fr] sm:gap-8"
                >
                  <span className="text-h5 tabular-nums text-accent">
                    {r.anio}
                  </span>
                  <p className="text-small measure text-ink">
                    {r.puesto === 'primer' ? 'Primer puesto' : 'Segundo puesto'}
                    {' — '}
                    {r.titulo}
                  </p>
                </li>
              ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-24 border-t-2 border-signal pt-10 lg:grid lg:grid-cols-2 lg:gap-16">
        <h2 className="text-h3 measure-display text-ink">
          Cuéntenos su caso y le decimos qué implica antes de cotizar.
        </h2>
        <div className="mt-8 lg:mt-0">
          <p className="text-small text-ink-soft">
            La primera hora cuesta {formatCOP(asesoria.precioCOP)} y sale de
            ella con un diagnóstico por escrito.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/agendar"
              className="text-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
            >
              Agendar asesoría
            </Link>
            <a
              href={whatsappUrl(
                contacto.whatsapp,
                `Hola Plano Base, mi caso es: ${puerta.pregunta.toLowerCase()}`,
              )}
              rel="noopener noreferrer"
              target="_blank"
              className="text-block border border-accent px-7 py-4 uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-paper"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <nav aria-label="Otras preguntas" className="mt-24">
        <h2 className="text-block mb-6 text-muted">
          Si su pregunta es otra
        </h2>
        <ul className="border-t border-line">
          {otras.map((p) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                href={`/servicios/${p.slug}`}
                className="group block py-5 text-ink"
              >
                <span className="text-h5 group-hover:text-accent">
                  {p.pregunta}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
