import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { asesoria, contacto } from '@content/site'
import { etiquetaPrecio } from '@/lib/utils'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: asesoria.nombre,
    description: asesoria.descripcion.slice(0, 300),
    alternates: { canonical: `/${locale}/servicios/asesoria-tecnica` },
  }
}

/**
 * Ficha del servicio reservable. Es el destino de `/service-page/asesoria-técnica`
 * en los redirects de Wix, así que esta ruta tiene que existir sí o sí.
 *
 * La reserva vive en /agendar; aquí se explica el servicio.
 */
export default async function AsesoriaTecnicaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: asesoria.nombre,
    description: asesoria.descripcion,
    provider: { '@type': 'Organization', name: 'Plano Base Arquitectos' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Valle del Cauca, Colombia' },
    offers: {
      '@type': 'Offer',
      price: asesoria.precioCOP,
      priceCurrency: 'COP',
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

      <h1 className="text-h1 measure-display mt-6 text-ink">{asesoria.nombre}</h1>
      <Rule className="mt-6 max-w-3xl text-muted">
        {asesoria.duracionMin} min &nbsp; {etiquetaPrecio(asesoria.precioCOP)}
      </Rule>

      <p className="text-lead measure mt-10 text-ink">{asesoria.tagline}</p>
      <p className="text-body measure mt-6 text-ink-soft">
        {asesoria.descripcion}
      </p>

      <section className="mt-16">
        <h2 className="text-block text-muted">Condiciones</h2>
        <dl className="mt-6 border-t border-line">
          {asesoria.politicas.map((p) => (
            <div
              key={p.clave}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[12rem_1fr] sm:gap-8"
            >
              <dt className="text-small text-muted">{p.clave}</dt>
              <dd className="text-small measure text-ink">{p.texto}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/agendar"
          className="text-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
        >
          Reservar sesión
        </Link>
        <WhatsAppLink
          numero={contacto.whatsapp}
          mensaje={`Hola Plano Base, quiero agendar una ${asesoria.nombre.toLowerCase()}.`}
          origen="web/asesoria-tecnica"
          className="text-block border border-accent px-7 py-4 uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-paper"
        >
          Preguntar por WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  )
}
