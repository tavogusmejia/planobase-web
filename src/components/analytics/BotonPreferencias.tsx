'use client'

import { useTranslations } from 'next-intl'
import { reabrir } from '@/lib/consentimiento'
import { useConsentimiento } from './useConsentimiento'

/**
 * «Preferencias de medición», en el pie.
 *
 * Existe porque la política lo promete —«puede cambiar de opinión cuando quiera
 * desde el enlace del pie de página»—, y una política que promete un botón que
 * no está es peor que no prometerlo.
 *
 * **Solo aparece si ya hay una decisión guardada.** Con el aviso todavía
 * abierto sería un tercer botón para lo mismo, y con la medición apagada del
 * todo —sin ningún identificador configurado— sería un ajuste que no ajusta
 * nada. En los dos casos no se pinta y el pie no cambia de forma.
 */
export function BotonPreferencias({ hayEtiquetas }: { hayEtiquetas: boolean }) {
  const t = useTranslations('consentimiento')
  const estado = useConsentimiento()

  if (!hayEtiquetas || estado.fase !== 'decidido') return null

  return (
    <button
      type="button"
      onClick={reabrir}
      className="text-block text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
    >
      {t('cambiar')}
    </button>
  )
}
