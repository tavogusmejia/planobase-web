import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { lineasServicio } from '@content/servicios'
import { asesoria, contacto } from '@content/site'
import { formatCOP, whatsappUrl } from '@/lib/utils'

const totalServicios = lineasServicio.reduce(
  (n, l) => n + l.servicios.length,
  0,
)

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Servicios',
    description:
      `Arquitectura e ingeniería: ${totalServicios} servicios en consultoría y ` +
      'gestión técnica, diseño arquitectónico, mantenimiento integral de ' +
      'edificaciones y obra y fabricación. Interventoría, presupuestos, ' +
      'compras técnicas y trámites, en Cali y el Valle del Cauca.',
    alternates: { canonical: `/${locale}/servicios` },
  }
}

/**
 * Portafolio de servicios.
 *
 * Registro comercial: más densidad de información que el portafolio de obra y
 * una sola acción dominante. Quien llega aquí quiere saber qué se puede
 * contratar, no admirar fotos.
 *
 * El contenido sale de "GPB - Portafolio de Servicios Completos.pdf", el
 * documento del estudio. No hay una sola línea inventada.
 *
 * TODO — el PDF está firmado como "Grupo Plano Base"; el sitio usa "Plano Base"
 * por la decisión de una sola marca. Confirmar cuál es la razón comercial.
 *
 * TODO — Gustavo mencionó además logística de transporte de materiales y
 * maquinaria. No aparecen en el portafolio documentado: si son servicios reales,
 * hay que añadirlos al PDF y regenerar `content/servicios.ts`.
 */
export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('home')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portafolio de servicios de Plano Base',
    numberOfItems: totalServicios,
    itemListElement: lineasServicio.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: l.nombre,
      description: l.intro,
    })),
  }

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-h1 measure-display text-ink">{t('serviciosTitulo')}</h1>
      <p className="text-lead measure mt-8 text-ink-soft">
        Acompañamos un proyecto en cualquier punto de su vida: desde la
        formulación y el diseño hasta la ejecución, la puesta en marcha y el
        mantenimiento. {totalServicios} servicios organizados en cuatro líneas,
        con alcance técnico y exclusiones definidas por escrito.
      </p>

      <div className="mt-20 space-y-20">
        {lineasServicio.map((linea) => (
          <section key={linea.slug} className="border-t border-line pt-10">
            <div className="lg:grid lg:grid-cols-[24rem_1fr] lg:gap-16">
              <div>
                <h2 className="text-h3 text-ink">
                  <Link
                    href={`/servicios/${linea.slug}`}
                    className="underline-offset-8 hover:text-accent hover:underline"
                  >
                    {linea.nombre}
                  </Link>
                </h2>
                <Rule className="mt-3 text-muted">
                  {linea.servicios.length}
                </Rule>
                <p className="text-small measure mt-6 text-ink-soft">
                  {linea.intro}
                </p>
              </div>

              {/* Los títulos completos, no una selección: quien evalúa a un
                  proveedor busca el servicio exacto que necesita. */}
              <ul className="mt-8 lg:mt-0">
                {linea.servicios.map((s) => (
                  <li key={s.n} className="border-b border-line py-3">
                    <Link
                      href={`/servicios/${linea.slug}#s${s.n}`}
                      className="text-small text-ink underline-offset-4 hover:text-accent hover:underline"
                    >
                      {s.titulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* ---- Acción -------------------------------------------------------- */}
      <section className="mt-24 border-t-2 border-signal pt-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h2 measure-display text-ink">
              ¿No sabes cuál de todos necesitas?
            </h2>
            <p className="text-lead measure mt-6 text-ink-soft">
              Para eso existe la asesoría técnica. En {asesoria.duracionMin}{' '}
              minutos revisamos tu caso y te decimos qué servicio aplica, si el
              proyecto es viable y qué sigue.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <p className="text-h3 tabular-nums text-ink">
              {formatCOP(asesoria.precioCOP)}
            </p>
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
                  'Hola Plano Base, quiero preguntar por un servicio del portafolio.',
                )}
                rel="noopener noreferrer"
                target="_blank"
                className="text-block border border-accent px-7 py-4 uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-paper"
              >
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
