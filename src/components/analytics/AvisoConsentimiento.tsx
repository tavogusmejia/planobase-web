'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { guardar } from '@/lib/consentimiento'

/**
 * El aviso que pregunta por la medición.
 *
 * **Las dos opciones pesan igual.** Mismo tamaño, mismo contorno, mismo orden
 * de lectura; ninguna en gris ni escondida como enlace. Un aviso donde aceptar
 * es un botón y rechazar es una línea pequeña no recoge un consentimiento
 * libre, y además contradice a la política del propio sitio, que promete que si
 * no acepta «el sitio funciona igual».
 *
 * **No tapa la página ni la bloquea.** Va abajo, deja leer lo que hay detrás y
 * no lleva capa oscura. Quien llega de un anuncio está a quince segundos de
 * irse: un muro modal delante de la página de conversión cuesta más leads de
 * los que ninguna medición va a recuperar. Y no hay «X» para cerrarlo sin
 * decidir, que es la forma habitual de fingir una respuesta que nadie dio.
 *
 * Es un `role="dialog"` no modal con `aria-labelledby`, y recibe el foco al
 * aparecer para que un lector de pantalla lo anuncie. No atrapa el foco: se
 * puede seguir navegando la página con el aviso abierto, que es justamente lo
 * que lo distingue de un muro.
 */
export function AvisoConsentimiento() {
  const t = useTranslations('consentimiento')

  return (
    <div
      role="dialog"
      aria-labelledby="consentimiento-titulo"
      aria-describedby="consentimiento-texto"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper"
    >
      <div className="mx-auto flex max-w-[100rem] flex-col gap-6 px-gutter py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="measure">
          <p id="consentimiento-titulo" className="text-h5 text-ink">
            {t('titulo')}
          </p>
          <p id="consentimiento-texto" className="text-small mt-2 text-ink-soft">
            {t('texto')}{' '}
            <Link
              href="/politica-de-datos"
              className="underline underline-offset-4 hover:text-accent"
            >
              {t('verPolitica')}
            </Link>
          </p>
        </div>

        {/* Los dos botones comparten clase salvo el color de fondo: si un día
            alguien cambia el relleno de uno, se ve que el otro se quedó atrás. */}
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => guardar('rechazado')}
            className="text-block border border-ink px-6 py-3 uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {t('rechazar')}
          </button>
          <button
            type="button"
            autoFocus
            onClick={() => guardar('aceptado')}
            className="text-block border border-signal bg-signal px-6 py-3 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
          >
            {t('aceptar')}
          </button>
        </div>
      </div>
    </div>
  )
}
