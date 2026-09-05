'use client'

import { entornoPublico } from '@/lib/env'

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
    gtag?: (
      comando: string,
      objetivo: string,
      parametros?: Record<string, unknown>,
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

/**
 * El nombre del mismo hecho en GA4.
 *
 * Meta y Google no comparten vocabulario, y traducir aquí y no en cada llamada
 * es lo que permite que el sitio hable de un solo evento. `generate_lead` y
 * `contact` son eventos recomendados de GA4, no inventados: usar los suyos hace
 * que las conversiones se puedan importar a Ads sin configurar nada a mano.
 */
const EN_GA4: Record<EventoMeta, string> = {
  Lead: 'generate_lead',
  Contact: 'contact',
  ViewContent: 'view_item',
  Schedule: 'schedule',
}

/**
 * Manda el evento a las dos plataformas que estén montadas.
 *
 * Cada una se comprueba por separado: el visitante puede tener un bloqueador
 * que tumbe una y deje pasar la otra, y perder las dos porque falta una sería
 * quedarse sin la medición que sí funcionaba.
 *
 * Si el consentimiento no se dio, no hay `fbq` ni `gtag` en la página y esto no
 * hace nada. Esa es la garantía y está donde tiene que estar —en que la
 * etiqueta no exista—, no en una condición que alguien pueda olvidar aquí.
 */
export function track(evento: EventoMeta, parametros?: ParametrosEvento): void {
  if (typeof window === 'undefined') return

  if (window.fbq) window.fbq('track', evento, parametros)

  if (window.gtag) {
    window.gtag('event', EN_GA4[evento], parametros)

    /* La conversión de Ads es un envío aparte del evento de GA4, y hace falta
       la etiqueta: sin ella Ads recibe algo que no sabe clasificar y no lo
       cuenta. Solo el lead, que es la conversión declarada del plan de
       campaña; mandar todo como conversión desdibuja justo la cifra por la que
       se decide qué anuncio se apaga. */
    const { googleAdsId, googleAdsEtiquetaLead } = entornoPublico
    if (evento === 'Lead' && googleAdsId && googleAdsEtiquetaLead) {
      window.gtag('event', 'conversion', {
        send_to: `${googleAdsId}/${googleAdsEtiquetaLead}`,
      })
    }
  }
}
