'use client'

/**
 * Envoltorio de medición.
 *
 * Un solo sitio que toca `window.fbq`, tipado y sin `any`. Si el Pixel no está
 * montado —porque no hay ID configurado, o porque un bloqueador lo tumbó— cada
 * llamada no hace nada: ningún componente necesita comprobarlo antes.
 */

type ParametrosEvento = Record<string, string | number>

declare global {
  interface Window {
    fbq?: (
      comando: string,
      evento: string,
      parametros?: ParametrosEvento,
    ) => void
  }
}

/**
 * Los eventos estándar de Meta que usa este sitio.
 *
 * `Lead` es el envío del formulario, que es la conversión declarada del plan de
 * campaña. `Contact` es cada salto a WhatsApp: sin él se mide solo el canal
 * minoritario y se pierde el principal.
 */
export type EventoMeta = 'Lead' | 'Contact' | 'ViewContent' | 'Schedule'

export function track(evento: EventoMeta, parametros?: ParametrosEvento): void {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', evento, parametros)
}
