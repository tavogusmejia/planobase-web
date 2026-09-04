import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { lineasServicio } from '@content/servicios'
import { asesoria, contacto } from '@content/site'
import { routing } from '@/i18n/routing'
import { whatsappUrl } from '@/lib/utils'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    lineasServicio.map((l) => ({ locale, slug: l.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const linea = lineasServicio.find((l) => l.slug === slug)
  if (!linea) return {}

  return {
    title: linea.nombre,
    description: linea.intro.slice(0, 300),
    alternates: { canonical: `/${locale}/servicios/${slug}` },
  }
}

/**
 * Una página por línea de servicio.
 *
 * Cada línea es su propia URL indexable, que es lo que hace que alguien
 * buscando "interventoría de obra Cali" o "inspección de patologías en
 * edificaciones" pueda llegar. Un acordeón dentro de una sola página no rankea.
 */
export default async function LineaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const linea = lineasServicio.find((l) => l.slug === slug)
  if (!linea) notFound()

  const otras = lineasServicio.filter((l) => l.slug !== slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: linea.nombre,
    description: linea.intro,
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: linea.nombre,
      itemListElement: linea.servicios.map((s) => ({
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

      <h1 className="text-h1 measure-display mt-6 text-ink">{linea.nombre}</h1>
      <Rule className="mt-6 max-w-3xl text-muted">
        {linea.servicios.length}
      </Rule>
      <p className="text-lead measure mt-8 text-ink-soft">{linea.intro}</p>

      <ol className="mt-20 border-t border-line">
        {linea.servicios.map((s) => (
          <li
            key={s.n}
            id={`s${s.n}`}
            className="scroll-mt-32 border-b border-line py-10 lg:grid lg:grid-cols-[24rem_1fr] lg:gap-16"
          >
            <h2 className="text-h4 text-ink">{s.titulo}</h2>
            <p className="text-body measure mt-3 text-ink-soft lg:mt-0">
              {s.descripcion}
            </p>
          </li>
        ))}
      </ol>

      {/* El alcance negativo es información, no letra pequeña: evita que un
          cliente contrate esperando algo que va en otra línea. El propio
          portafolio del estudio lo declara así. */}
      {linea.noIncluye.length ? (
        <section className="mt-16">
          <h2 className="text-block text-muted">No incluye</h2>
          <ul className="measure mt-5 space-y-2">
            {linea.noIncluye.map((x) => (
              <li key={x} className="text-small text-ink-soft">
                {x}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-24 border-t-2 border-signal pt-10">
        <h2 className="text-h3 measure-display text-ink">
          Cuéntanos qué necesitas y te decimos si esta es la línea correcta.
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/agendar"
            className="text-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
          >
            Agendar asesoría
          </Link>
          <a
            href={whatsappUrl(
              contacto.whatsapp,
              `Hola Plano Base, quiero preguntar por ${linea.nombre.toLowerCase()}.`,
            )}
            rel="noopener noreferrer"
            target="_blank"
            className="text-block border border-accent px-7 py-4 uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-paper"
          >
            Preguntar por WhatsApp
          </a>
        </div>
        <p className="text-block mt-4 text-muted">
          {asesoria.duracionMin} minutos. Respondemos dentro de la siguiente hora
          hábil.
        </p>
      </section>

      <nav aria-label="Otras líneas" className="mt-24">
        <h2 className="text-block mb-6 text-muted">Otras líneas</h2>
        <ul className="grid gap-x-8 gap-y-6 border-t border-line pt-8 md:grid-cols-3">
          {otras.map((l) => (
            <li key={l.slug}>
              <Link href={`/servicios/${l.slug}`} className="group block">
                <h3 className="text-h5 text-ink group-hover:text-accent">
                  {l.nombre}
                </h3>
                <Rule className="mt-2 text-muted">{l.servicios.length}</Rule>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
