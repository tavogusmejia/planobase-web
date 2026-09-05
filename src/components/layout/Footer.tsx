import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Isotipo } from '@/components/brand/Isotipo'
import { contacto, navegacion, site } from '@content/site'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'

export async function Footer() {
  const t = await getTranslations('footer')
  const tn = await getTranslations('nav')

  return (
    <footer className="mt-32 border-t border-line bg-paper">
      <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[auto_1fr_1fr_1fr] md:gap-16">
          {/* El isotipo del pie llevando a la portada es la convención, y
              hasta ahora era decorativo. */}
          <Link
            href="/"
            aria-label={tn('irAlInicio')}
            className="w-fit text-ink transition-opacity hover:opacity-70"
          >
            <Isotipo className="h-10 w-auto" />
          </Link>

          <nav aria-label="Pie de página">
            <h2 className="text-block mb-4 text-muted">{t('estudio')}</h2>
            <ul className="space-y-2">
              {/* «Inicio» se pinta aquí y no se añade a `navegacion`: ese array
                  lo recorren también el menú de escritorio y el móvil, y en la
                  barra superior el logotipo fijo ya cubre ese destino. */}
              <li>
                <Link
                  href="/"
                  className="text-small text-ink transition-colors hover:text-accent"
                >
                  {tn('inicio')}
                </Link>
              </li>
              {navegacion.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-small text-ink transition-colors hover:text-accent"
                  >
                    {tn(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-block mb-4 text-muted">{t('contacto')}</h2>
            <address className="text-small not-italic text-ink">
              {contacto.direccion}
              <br />
              {contacto.ciudad}
              <br />
              <a
                href={`tel:${contacto.telefono.replace(/\s/g, '')}`}
                className="transition-colors hover:text-accent"
              >
                {contacto.telefono}
              </a>
              <br />
              <a
                href={`mailto:${contacto.correo}`}
                className="transition-colors hover:text-accent"
              >
                {contacto.correo}
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-block mb-4 text-muted">{t('seguir')}</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={contacto.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-small text-ink transition-colors hover:text-accent"
                >
                  {t('instagram')}
                </a>
              </li>
              <li>
                <WhatsAppLink
                  numero={contacto.whatsapp}
                  mensaje="Hola Plano Base, quiero información sobre un proyecto."
                  origen="web/pie"
                  className="text-small text-ink transition-colors hover:text-accent"
                >
                  {t('whatsapp')}
                </WhatsAppLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-block text-muted">
            {site.copyright(new Date().getFullYear())}
          </p>

          {/* Un ancla nativa al `id` que ya tiene el <main>. Sin componente
              cliente ni `scrollTo`: la hoja de estilos declara
              `scroll-behavior: smooth` y lo anula bajo movimiento reducido, así
              que un enlace normal hereda las dos cosas.

              Va aquí y no flotando porque quien quiere volver arriba es quien
              acaba de llegar abajo. */}
          <a
            href="#contenido"
            className="text-block text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {tn('volverArriba')} ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
