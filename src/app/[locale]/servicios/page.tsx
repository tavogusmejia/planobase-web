import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { escalera, puertas } from '@content/puertas'
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
    title: 'Servicios',
    description:
      'Diseño arquitectónico, estudios de viabilidad, diagnóstico de ' +
      'edificaciones e interventoría de obra en Cali, Jamundí y el Valle del ' +
      'Cauca. Empezamos por su pregunta, no por nuestro catálogo.',
    alternates: { canonical: `/${locale}/servicios` },
  }
}

/**
 * Servicios, organizados por la pregunta que trae al cliente.
 *
 * La versión anterior era la lista de los 43 servicios del portafolio. Nadie lee
 * 43 títulos: es la taxonomía interna del proveedor puesta en una página. Aquí
 * el titular de cada bloque es la frase con la que la persona llega, y el
 * catálogo completo queda para la propuesta formal.
 */
export default async function ServiciosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios de Plano Base',
    itemListElement: puertas.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.nombre,
      description: p.respuesta,
    })),
  }

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-h1 measure-display text-ink">
        Empezamos por su pregunta, no por nuestro catálogo.
      </h1>
      <p className="text-lead measure mt-8 text-ink-soft">
        Cada proyecto llega con una pregunta distinta. Elija la que se parece a
        la suya y le decimos qué implica, cuánto toma y cuánto cuesta antes de
        que firme nada.
      </p>

      {/* ---- Las puertas ---------------------------------------------------
          Cada bloque abre con la frase del cliente, no con el nombre del
          servicio. Es la diferencia entre "Consultoría y Gestión Técnica" y
          "Necesito que alguien vigile mi obra". */}
      <div className="mt-24">
        {puertas.map((p) => (
          <article key={p.slug} className="border-t border-line">
            <Link
              href={`/servicios/${p.slug}`}
              className="group block py-12 lg:grid lg:grid-cols-[1fr_26rem] lg:gap-16"
            >
              <div>
                <h2 className="text-h2 measure-display text-ink transition-colors group-hover:text-accent">
                  {p.pregunta}
                </h2>
                <Rule className="mt-5 max-w-md text-muted">{p.nombre}</Rule>
              </div>
              <div className="mt-6 lg:mt-2">
                <p className="text-body text-ink-soft">{p.respuesta}</p>
                <p className="text-block mt-5 text-muted">{p.para}</p>
              </div>
            </Link>
          </article>
        ))}
        <div className="border-t border-line" />
      </div>

      {/* ---- La escalera ---------------------------------------------------
          Esto sí es una secuencia, y por eso lleva números: cada peldaño existe
          para que el siguiente sea una decisión pequeña. */}
      <section className="mt-28">
        <h2 className="text-h2 measure-display text-ink">
          Nadie firma un proyecto completo el primer día.
        </h2>
        <p className="text-lead measure mt-6 text-ink-soft">
          Se avanza por pasos, y en cada uno usted decide si sigue. El primero
          no cuesta nada y dura {asesoria.duracionMin} minutos.
        </p>

        <ol className="mt-14 border-t border-line">
          {escalera.map((paso) => (
            <li
              key={paso.n}
              className="grid gap-3 border-b border-line py-7 sm:grid-cols-[3rem_16rem_1fr] sm:gap-8"
            >
              <span className="text-h4 tabular-nums text-accent">
                {String(paso.n).padStart(2, '0')}
              </span>
              <h3 className="text-h5 text-ink">
                {paso.nombre}
                {paso.precioCOP !== null ? (
                  <span className="text-block mt-1 block tabular-nums text-muted">
                    {etiquetaPrecio(paso.precioCOP, paso.desde)}
                  </span>
                ) : null}
              </h3>
              <p className="text-small measure text-ink-soft">{paso.entrega}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- Acción -------------------------------------------------------- */}
      <section className="mt-24 border-t-2 border-signal pt-10 lg:grid lg:grid-cols-2 lg:gap-16">
        <h2 className="text-h2 measure-display text-ink">
          Si no sabe cuál de todas es su pregunta, esa es la primera llamada.
        </h2>
        <div className="mt-10 lg:mt-0">
          <p className="text-h3 text-ink">
            {etiquetaPrecio(asesoria.precioCOP)}
          </p>
          <p className="text-small measure mt-3 text-ink-soft">
            {asesoria.duracionMin} minutos con un arquitecto. Le decimos si
            podemos ayudarle y cuál es el siguiente paso.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/agendar"
              className="text-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
            >
              Agendar asesoría
            </Link>
            <WhatsAppLink
              numero={contacto.whatsapp}
              mensaje="Hola Plano Base, quiero preguntar por un servicio."
              origen="web/servicios"
              className="text-block border border-accent px-7 py-4 uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-paper"
            >
              Preguntar por WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </div>
  )
}
