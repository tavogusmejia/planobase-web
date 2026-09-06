'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { ContactoDirecto } from '@/components/ui/ContactoDirecto'

/**
 * Frontera de error dentro del idioma.
 *
 * Hasta ahora no había ninguna: un fallo de ejecución en cualquier página
 * mostraba la pantalla por defecto de Next, sin cabecera, sin pie y sin una
 * sola forma de volver al sitio. Con la pauta encendida eso es un clic pagado
 * que termina en una vía muerta.
 *
 * Va dentro de `[locale]`, así que la cabecera y el pie siguen ahí: el
 * visitante recupera la navegación completa aunque la página no cargue. Lo que
 * añade este archivo es lo que la navegación no da —reintentar sin recargar, y
 * el salto a WhatsApp, que es el canal que sí va a responder—.
 *
 * El `digest` es el identificador que Next escribe también en los registros del
 * servidor. Se muestra porque es lo único que permite a quien atiende el
 * WhatsApp encontrar el fallo concreto en Vercel, en vez de pedir que le
 * cuenten qué pasó.
 *
 * Dos cosas cambiaron el 5/9/2026. **El texto estaba escrito en español dentro
 * del componente**, así que un visitante de `/en` que se topara con un error lo
 * leía en español — la misma fuga que ya se corrigió en seis rótulos del sitio,
 * y aquí en la única página que el visitante no eligió visitar. Ahora sale de
 * `messages/`.
 *
 * Y **no había número de teléfono**. Había WhatsApp, que es el canal declarado,
 * pero quien está delante de una página rota puede querer llamar. El bloque de
 * contacto directo lo trae, y es el mismo que usa el fallo del formulario: las
 * dos veces que se escribió suelto salió distinto.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations('error')

  useEffect(() => {
    // En producción el mensaje viene depurado; el digest es la única llave.
    console.error('[error]', error.digest ?? error.message)
  }, [error])

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-32 lg:px-10">
      <p className="text-display text-accent">{t('etiqueta')}</p>
      <Rule className="mt-4 max-w-xl text-muted" />

      <h1 className="text-h2 measure-display mt-10 text-ink">{t('titulo')}</h1>

      <p className="text-body measure mt-6 text-ink-soft">{t('texto')}</p>

      <div className="mt-10 flex flex-wrap items-center gap-8">
        <button
          type="button"
          onClick={reset}
          className="text-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
        >
          {t('reintentar')}
        </button>

        <Link
          href="/"
          className="text-h5 text-accent underline-offset-8 hover:underline"
        >
          {t('volverInicio')}
        </Link>
      </div>

      <ContactoDirecto origen="web/error" mensaje={t('mensajeWhatsapp')} />

      {error.digest ? (
        <p className="text-block mt-16 text-muted">
          {t('referencia')}{' '}
          <span className="tabular-nums text-ink-soft">{error.digest}</span>
        </p>
      ) : null}
    </div>
  )
}
