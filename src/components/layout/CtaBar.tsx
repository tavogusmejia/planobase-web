import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { asesoria, contacto } from '@content/site'
import { etiquetaPrecio } from '@/lib/utils'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'

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
    <div
      /* Fuera del papel. Las reglas de impresión ocultan cabecera, pie y lo
         marcado así; sin esto, «Asesoría técnica · Sin costo» salía estampado
         encima de la ficha de experiencia y del dossier — justo el documento
         que se adjunta a una propuesta formal. */
      data-sin-imprimir
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-ink text-paper"
    >
      <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-3 px-gutter py-3 lg:px-10">
        <p className="text-block hidden lg:block">
          {asesoria.nombre} · {etiquetaPrecio(asesoria.precioCOP)}
        </p>

        <div className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:justify-end sm:gap-6">
          <WhatsAppLink
            numero={contacto.whatsapp}
            mensaje={`Hola Plano Base, quiero agendar una ${asesoria.nombre.toLowerCase()}.`}
            origen="web/barra-fija"
            className="text-block shrink-0 underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
          >
            {/* En móvil no cabe la frase completa y su desbordamiento hacía que
                todo el documento tuviera scroll horizontal. */}
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">{t('escribirWhatsapp')}</span>
          </WhatsAppLink>
          <Link
            href="/agendar"
            className="text-block shrink-0 bg-paper px-4 py-2.5 uppercase tracking-[0.08em] text-ink transition-opacity hover:opacity-80 sm:px-5"
          >
            {t('reservar')}
          </Link>
        </div>
      </div>
    </div>
  )
}
