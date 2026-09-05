'use client'

import { AvisoConsentimiento } from './AvisoConsentimiento'
import { EtiquetaGoogle } from './EtiquetaGoogle'
import { MetaPixel } from './MetaPixel'
import { useConsentimiento } from './useConsentimiento'

/**
 * La puerta única de la medición.
 *
 * Reemplaza al `<MetaPixel />` que colgaba suelto del layout y que se cargaba
 * para todo el mundo. Su propio comentario ya declaraba la deuda: iba «sin
 * aviso de consentimiento y el sitio no tiene política de privacidad», con el
 * disparador puesto en la primera inversión en pauta. Esto es ese disparador.
 *
 * **Mientras el estado es `'cargando'` no se pinta nada**, ni el aviso ni las
 * etiquetas. Ese primer render tiene que ser idéntico al del servidor —donde no
 * hay `localStorage`— o React descarta el árbol entero y lo vuelve a pintar. Es
 * un fotograma, y evita el parpadeo del aviso a quien ya respondió.
 *
 * Nada de esto tiene sentido si el sitio no puede medir de todas formas: si no
 * hay ningún identificador configurado, no se pregunta. Preguntar por un
 * permiso que no se va a usar es recoger un dato que no hace falta, y encima
 * gasta la única oportunidad de preguntar bien.
 */
export function Medicion({ hayEtiquetas }: { hayEtiquetas: boolean }) {
  const estado = useConsentimiento()

  if (!hayEtiquetas) return null
  if (estado.fase === 'cargando') return null
  if (estado.fase === 'sin decidir') return <AvisoConsentimiento />
  if (estado.valor.medicion === 'rechazado') return null

  return (
    <>
      <MetaPixel />
      <EtiquetaGoogle />
    </>
  )
}
