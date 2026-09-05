import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ContactForm } from '@/components/forms/ContactForm'
import { Rule } from '@/components/ui/Rule'
import { contacto } from '@content/site'
import { etiquetaPrecio } from '@/lib/precio'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'
import { alternativas, tarjeta } from '@/lib/metadatos'
import { asesoriaDe, copiaDe } from '@/lib/data/contenido'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const ruta = `/${locale}/contacto`
  const copiaMeta = copiaDe('/contacto', locale)
  const descripcion = copiaMeta.metaDescripcion
  return {
    title: copiaMeta.titulo,
    description: descripcion,
    /* Canonical autorreferenciado, hreflang solo de lo traducido y el
       `robots` de esta ruta, los tres del mismo sitio. Va donde estaba
       `alternates` porque después solo vienen claves distintas: si
       alguien añade luego un `alternates` o un `robots` propio, este se
       pierde en silencio. */
    ...alternativas({ locale, entidad: { tipo: 'pagina', ruta: '/contacto' } }),
    openGraph: tarjeta({
      locale,
      ruta,
      titulo: copiaMeta.tarjetaTitulo,
      descripcion,
    }),
  }
}

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const copia = copiaDe('/contacto', locale)
  const asesoria = asesoriaDe(locale)

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <h1 className="text-h1 measure-display text-ink">
        {copia.titular}
      </h1>
      <p className="text-lead measure mt-6 text-ink-soft">
        {copia.entrada}
      </p>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_22rem] lg:gap-24">
        <div>
          <ContactForm />
        </div>

        <aside className="lg:border-l lg:border-line lg:pl-12">
          <h2 className="text-block text-muted">Estudio</h2>
          <address className="text-small mt-3 not-italic text-ink">
            {contacto.direccion}
            <br />
            {contacto.ciudad}
          </address>

          <h2 className="text-block mt-10 text-muted">Directo</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <WhatsAppLink
                numero={contacto.whatsapp}
                mensaje="Hola Plano Base, quiero información sobre un proyecto."
                origen="web/contacto"
                className="text-small text-ink underline-offset-4 hover:text-accent hover:underline"
              >
                WhatsApp {contacto.telefono}
              </WhatsAppLink>
            </li>
            <li>
              <a
                href={`mailto:${contacto.correo}`}
                className="text-small text-ink underline-offset-4 hover:text-accent hover:underline"
              >
                {contacto.correo}
              </a>
            </li>
            <li>
              <a
                href={contacto.instagram}
                rel="noopener noreferrer"
                target="_blank"
                className="text-small text-ink underline-offset-4 hover:text-accent hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>

          <div className="mt-14 border-t border-line pt-8">
            <h2 className="text-h4 text-ink">{asesoria.nombre}</h2>
            <Rule className="mt-3 text-muted">
              {asesoria.duracionMin} min &nbsp; {await etiquetaPrecio(asesoria.precioCOP)}
            </Rule>
            <p className="text-small mt-5 text-ink-soft">{asesoria.tagline}</p>
            <Link
              href="/agendar"
              className="text-block mt-6 inline-block bg-signal px-6 py-3.5 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
            >
              Reservar sesión
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
