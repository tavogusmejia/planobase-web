import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { JsonLd } from '@/components/seo/JsonLd'
import { migaDePan } from '@/components/seo/migaDePan'
import { puertas, serviciosDe } from '@content/puertas'
import { puertaDe, puertasDe } from '@/lib/data/contenido'
import { asesoria, contacto, reconocimientos } from '@content/site'
import { routing } from '@/i18n/routing'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'
import { alternativas, tarjeta } from '@/lib/metadatos'
import { absoluteUrl } from '@/lib/utils'

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
  const puerta = puertaDe(locale, slug)
  if (!puerta) return {}

  const ruta = `/${locale}/servicios/${slug}`
  const descripcion = `${puerta.pregunta} ${puerta.respuesta}`.slice(0, 300)
  return {
    title: puerta.nombre,
    description: descripcion,
    /* Canonical autorreferenciado, hreflang solo de lo traducido y el
       `robots` de esta ruta, los tres del mismo sitio. Va donde estaba
       `alternates` porque después solo vienen claves distintas: si
       alguien añade luego un `alternates` o un `robots` propio, este se
       pierde en silencio. */
    ...alternativas({ locale, entidad: { tipo: 'puerta', slug } }),
    openGraph: tarjeta({
      locale,
      ruta,
      // La pregunta, no el nombre del servicio: al compartirse por WhatsApp lo
      // que engancha es la duda que el lector ya tenía.
      titulo: puerta.pregunta,
      descripcion,
    }),
  }
}

export default async function PuertaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const puerta = puertaDe(locale, slug)
  if (!puerta) notFound()

  const tc = await getTranslations('cta')
  const tn = await getTranslations('nav')
  const tcom = await getTranslations('comun')

  const servicios = serviciosDe(puerta)
  const otras = puertasDe(locale).filter((p) => p.slug !== slug)
  const esInstitucional = slug === 'espacio-publico-y-equipamientos'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: puerta.nombre,
      description: puerta.respuesta,
      /* Se referencia el nodo de la organización en vez de redeclararlo.
         Antes cada página de servicio emitía un `Organization` sin `@id`: para
         un buscador eso es una entidad nueva y anónima por página, compitiendo
         con la del sitio en vez de sumarle. La dirección vive en ese nodo, que
         es donde tiene que coincidir carácter por carácter con la ficha de
         Google Business; repetirla aquí solo añadía sitios donde se desvíe. */
      provider: { '@id': absoluteUrl('/#estudio') },
      /* Declaraba Cali, Jamundí y Palmira. El estudio presta el servicio en
         todo el país y el 43 % del portafolio publicado está en Bogotá: la
         zona regional contradecía los propios datos del sitio. La sede sigue
         siendo Cali y eso no lo dice este campo, lo dice `address`. */
      areaServed: { '@type': 'Country', name: 'Colombia' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: puerta.nombre,
        itemListElement: servicios.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.titulo },
        })),
      },
    },
    /* El mismo nombre que se lee arriba en la ruta visible, y por eso los dos
       salen de `tn('servicios')`: una miga que dice «Services» sobre una
       página que muestra «Servicios» no describe la página, la contradice. */
    migaDePan([
      { nombre: tn('servicios'), ruta: `/${locale}/servicios` },
      { nombre: puerta.nombre, ruta: `/${locale}/servicios/${slug}` },
    ]),
  ]

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <JsonLd datos={jsonLd} />

      <nav aria-label="Ruta" className="text-block text-muted">
        <Link href="/servicios" className="hover:text-accent">
          {tn('servicios')}
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
          {tcom('alcanceEscrito')}
        </p>
      </section>

      {/* Los reconocimientos van aquí, no solo en /estudio: quien evalúa a un
          proveedor técnico necesita saber que quien va a revisar su obra ha
          ganado concursos públicos nacionales. */}
      {esInstitucional ? (
        <section className="mt-20">
          <h2 className="text-block text-muted">{tcom('reconocimientos')}</h2>
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
                    {r.puesto === 'primer'
                      ? tcom('primerPuesto')
                      : tcom('segundoPuesto')}
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
            La primera llamada no cuesta nada y dura{' '}
            {asesoria.duracionMin} minutos. Sale de ella sabiendo si podemos
            ayudarle y qué implica.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/agendar"
              className="text-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
            >
              {tc('reservar')}
            </Link>
            <WhatsAppLink
              numero={contacto.whatsapp}
              mensaje={`Hola Plano Base, mi caso es: ${puerta.pregunta.toLowerCase()}`}
              origen={`web/servicios/${puerta.slug}`}
              className="text-block border border-accent px-7 py-4 uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-paper"
            >
              {tc('escribirWhatsapp')}
            </WhatsAppLink>
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
