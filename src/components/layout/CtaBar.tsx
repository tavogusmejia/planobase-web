import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { asesoria, contacto } from '@content/site'
import { formatCOP, whatsappUrl } from '@/lib/utils'

/**
 * Barra fija inferior. Es lo único del sitio de Wix que funcionaba y convertía,
 * y el plan de campaña la necesita: el tráfico de pauta tiene que poder agendar
 * desde cualquier página sin buscar.
 *
 * Se mantiene delgada a propósito. En el registro de portafolio no debe pelear
 * con la fotografía; su trabajo es estar, no gritar.
 */
export async function CtaBar() {
  const t = await getTranslations('cta')

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-4 px-gutter py-3 lg:px-10">
        <p className="text-block hidden sm:block">
          {asesoria.nombre} · {formatCOP(asesoria.precioCOP)}
        </p>

        <div className="flex flex-1 items-center justify-end gap-6">
          <a
            href={whatsappUrl(
              contacto.whatsapp,
              `Hola Plano Base, quiero agendar una ${asesoria.nombre.toLowerCase()}.`,
            )}
            rel="noopener noreferrer"
            target="_blank"
            className="text-block underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
          >
            {t('escribirWhatsapp')}
          </a>
          <Link
            href="/agendar"
            className="text-block bg-paper px-5 py-2.5 uppercase tracking-[0.08em] text-ink transition-opacity hover:opacity-80"
          >
            {t('reservar')}
          </Link>
        </div>
      </div>
    </div>
  )
}
