'use client'

import { useEffect } from 'react'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'
import { contacto } from '@content/site'

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
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // En producción el mensaje viene depurado; el digest es la única llave.
    console.error('[error]', error.digest ?? error.message)
  }, [error])

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-32 lg:px-10">
      <p className="text-display text-accent">Error</p>
      <Rule className="mt-4 max-w-xl text-muted" />

      <h1 className="text-h2 measure-display mt-10 text-ink">
        Algo falló al cargar esta página. No es nada que usted haya hecho.
      </h1>

      <p className="text-body measure mt-6 text-ink-soft">
        El fallo quedó registrado y lo estamos viendo. Puede intentarlo de nuevo
        aquí mismo; si vuelve a fallar, escríbanos y seguimos por el otro lado
        sin que usted pierda el hilo.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-8">
        <button
          type="button"
          onClick={reset}
          className="text-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
        >
          Intentar de nuevo
        </button>

        <WhatsAppLink
          numero={contacto.whatsapp}
          mensaje="Hola Plano Base, la página del sitio me dio un error."
          origen="web/error"
          className="text-h5 text-accent underline-offset-8 hover:underline"
        >
          Escribir por WhatsApp
        </WhatsAppLink>

        <Link
          href="/"
          className="text-h5 text-accent underline-offset-8 hover:underline"
        >
          Volver al inicio
        </Link>
      </div>

      {error.digest ? (
        <p className="text-block mt-16 text-muted">
          Referencia del fallo:{' '}
          <span className="tabular-nums text-ink-soft">{error.digest}</span>
        </p>
      ) : null}
    </div>
  )
}
