import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Isotipo } from '@/components/brand/Isotipo'
import { contacto, navegacion, site } from '@content/site'
import { whatsappUrl } from '@/lib/utils'

export async function Footer() {
  const t = await getTranslations('footer')
  const tn = await getTranslations('nav')

  return (
    <footer className="mt-32 border-t border-line bg-paper">
      <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[auto_1fr_1fr_1fr] md:gap-16">
          <Isotipo className="h-10 w-auto text-ink" />

          <nav aria-label="Pie de página">
            <h2 className="text-block mb-4 text-muted">{t('estudio')}</h2>
            <ul className="space-y-2">
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
                <a
                  href={whatsappUrl(
                    contacto.whatsapp,
                    'Hola Plano Base, quiero información sobre un proyecto.',
                  )}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-small text-ink transition-colors hover:text-accent"
                >
                  {t('whatsapp')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-block mt-16 text-muted">
          {site.copyright(new Date().getFullYear())}
        </p>
      </div>
    </footer>
  )
}
