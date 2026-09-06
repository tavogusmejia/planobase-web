'use client'

import Script from 'next/script'
import { entornoPublico } from '@/lib/env'

/**
 * Pixel de Meta.
 *
 * Devuelve `null` si no hay ID configurado: mientras `NEXT_PUBLIC_META_PIXEL_ID`
 * no exista, el sitio no lleva ni una línea de seguimiento.
 *
 * Antes de esto no había medición de ningún tipo en todo el sitio. Sin costo por
 * lead no se puede apagar el anuncio que no funciona ni escalar el que sí, y
 * Meta no puede optimizar por conversión: solo por clic. Con presupuestos
 * pequeños esa diferencia lo es todo.
 *
 * **Este componente no decide si se carga: lo decide `Medicion`.** Colgaba
 * suelto del layout y se montaba para todo el mundo; ahora solo existe cuando el
 * visitante ha dicho que sí. Aquí no hay que comprobar nada — si este código se
 * está ejecutando es porque hubo consentimiento.
 *
 * Aquí vivía una «deuda con disparador»: que el Pixel iba sin aviso de
 * consentimiento y el sitio no tenía política de privacidad, con el disparador
 * puesto en la primera inversión en pauta. **Se saldó el 5/9/2026** — hay
 * política en `/politica-de-datos`, hay banner, y ninguna etiqueta se carga sin
 * un sí explícito. Se deja escrito que se saldó y no se borra sin más, porque un
 * comentario que anuncia una deuda ya pagada hace que el siguiente que lo lea la
 * vuelva a pagar.
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
