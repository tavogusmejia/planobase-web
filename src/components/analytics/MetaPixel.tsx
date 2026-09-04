'use client'

import Script from 'next/script'
import { entornoPublico } from '@/lib/env'

/**
 * Pixel de Meta.
 *
 * Devuelve `null` si no hay ID configurado, y por eso se monta sin condicional
 * en el layout: mientras `NEXT_PUBLIC_META_PIXEL_ID` no exista, el sitio no
 * lleva ni una línea de seguimiento, y el día que exista no hay que tocar nada.
 *
 * Antes de esto no había medición de ningún tipo en todo el sitio. Sin costo por
 * lead no se puede apagar el anuncio que no funciona ni escalar el que sí, y
 * Meta no puede optimizar por conversión: solo por clic. Con presupuestos
 * pequeños esa diferencia lo es todo.
 *
 * DEUDA CON DISPARADOR, no olvido: esto va sin aviso de consentimiento y el
 * sitio no tiene política de privacidad. A volumen cero el riesgo bajo la Ley
 * 1581 es teórico; antes de la primera inversión en pauta hay que resolverlo.
 */
export function MetaPixel() {
  const id = entornoPublico.metaPixelId
  if (!id) return null

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${id}');fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
