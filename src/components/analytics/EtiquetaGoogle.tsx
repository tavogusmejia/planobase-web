'use client'

import Script from 'next/script'
import { entornoPublico } from '@/lib/env'

/**
 * GA4 y la etiqueta de conversión de Google Ads, en un solo `gtag.js`.
 *
 * Son dos productos y una sola librería: se carga una vez y se configura dos
 * veces, una por identificador. Montar dos veces el script es el error que hace
 * que las conversiones se cuenten doble, y contar doble es peor que no contar
 * —con el costo por lead a la mitad de lo real, se escala el anuncio que no
 * funciona—.
 *
 * **Solo se monta con el consentimiento dado.** No hay modo restringido ni
 * carga a la espera: quien decide eso es `Medicion`, y si este componente se
 * renderiza es porque ya hubo un sí.
 *
 * Cada identificador es opcional por separado. Se puede tener analítica sin
 * pauta —que es el orden sensato: medir antes de gastar— y el día que entren
 * los anuncios no hay que tocar código, solo añadir la variable.
 */
export function EtiquetaGoogle() {
  const { ga4Id, googleAdsId } = entornoPublico
  if (!ga4Id && !googleAdsId) return null

  // El primero que exista sirve para traer la librería; da igual cuál.
  const idParaCargar = ga4Id || googleAdsId

  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${idParaCargar}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ga4Id ? `gtag('config', '${ga4Id}');` : ''}
${googleAdsId ? `gtag('config', '${googleAdsId}');` : ''}`}
      </Script>
    </>
  )
}
