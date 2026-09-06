'use client'

import { useCallback, useEffect, useRef } from 'react'
import { useReportWebVitals } from 'next/web-vitals'

/**
 * Las métricas de rendimiento reales, las de la gente que entra.
 *
 * Hasta ahora el sitio no medía ni una: había Pixel, GA4 y etiqueta de Ads
 * —todo marketing— y cero sobre si la página carga. Eso deja sin respuesta la
 * pregunta que más cuesta en una campaña: si el anuncio paga por un clic y la
 * página tarda cuatro segundos en pintar, el dinero se va antes de que nadie
 * lea nada, y sin medirlo no hay forma de saberlo.
 *
 * ## Por qué esto no pesa
 *
 * - **La librería ya está.** `useReportWebVitals` viene dentro de Next
 *   (`next/web-vitals`), que empaqueta `web-vitals` en
 *   `next/dist/compiled/web-vitals`. No se instala nada: son ~8 KB sin
 *   comprimir, ~3 KB por el cable, y nada de eso es una petición extra.
 * - **No hay ningún script de tercero.** Ni Speed Insights, ni Vercel
 *   Analytics, ni RUM ajeno. Nada que descargar de otro dominio, ningún
 *   `connect` ni `preconnect` compitiendo con las imágenes por el ancho de
 *   banda que la propia métrica está midiendo.
 * - **Un solo envío por visita, y al final.** Las métricas no se mandan según
 *   llegan: se acumulan y salen juntas cuando la pestaña se oculta. Seis
 *   peticiones sueltas durante la carga estropearían justo lo que vienen a
 *   medir.
 * - **`sendBeacon`.** El navegador la encola con prioridad mínima y la entrega
 *   aunque la pestaña se cierre; no bloquea la descarga ni retrasa el
 *   `unload`. Si no existe —Safari viejo—, no hay plan B a propósito: un
 *   `fetch` en `pagehide` se cancela la mitad de las veces y lo que consigue es
 *   ensuciar la muestra con las visitas que sí llegaron a terminar.
 *
 * ## Por qué no espera al consentimiento
 *
 * Por el mismo motivo por el que `src/lib/atribucion.ts` tampoco: aquí no hay
 * ningún tercero, ningún identificador y ningún dato de la persona. Lo que sale
 * es «en `/blog/expensas-curaduria`, el LCP fue de 1.842 ms», que describe a la
 * página y no a quien la miró. No se manda IP —el servidor no la registra—, ni
 * agente de usuario, ni nada que permita reconocer dos visitas como la misma.
 * La política de datos condiciona al consentimiento las «herramientas de
 * medición y publicidad **de terceros**», y esto no lo es.
 *
 * El `id` que viaja es el que genera `web-vitals` por carga de página: sirve
 * para no contar dos veces la misma visita y muere con ella.
 *
 * ## Dónde aterriza
 *
 * En `/api/vitals`, que lo escribe en el log. Deliberadamente no en Speed
 * Insights ni en Vercel Analytics: los dos son productos que hay que contratar,
 * y ya hay tareas paradas esperando cuentas de terceros. Esto tenía que
 * funcionar hoy y con lo que ya está pagado.
 */

/** Lo que se manda por métrica. Ni un campo más que los que se van a leer. */
type MetricaEnviada = {
  nombre: string
  valor: number
  calificacion: string
  id: string
}

export function Rendimiento() {
  /* Un ref y no un estado: acumular métricas no tiene que repintar nada, y con
     `useState` cada una de las seis provocaría un render del layout entero. */
  const pendientes = useRef<MetricaEnviada[]>([])
  const enviado = useRef(false)

  const enviar = useCallback(() => {
    /* Una vez y no más. `visibilitychange` y `pagehide` se disparan los dos en
       algunos navegadores al cerrar, y sin esto la misma visita contaría
       doble. */
    if (enviado.current) return
    if (pendientes.current.length === 0) return
    if (typeof navigator.sendBeacon !== 'function') return

    enviado.current = true
    const cuerpo = JSON.stringify({
      ruta: window.location.pathname,
      metricas: pendientes.current,
    })
    pendientes.current = []

    /* `text/plain` a propósito: con `application/json` el navegador convierte
       esto en una petición con preflight en cuanto haya un solo salto de
       dominio, y un preflight en `pagehide` no llega nunca. La ruta lo lee
       como texto y lo parsea. */
    navigator.sendBeacon('/api/vitals', new Blob([cuerpo], { type: 'text/plain' }))
  }, [])

  /* `useReportWebVitals` vuelve a suscribirse cada vez que cambia la función
     que recibe, así que tiene que ser estable. Sin el `useCallback`, cada
     render registraría seis oyentes más. */
  const anotar = useCallback((metrica: { name: string; value: number; rating: string; id: string }) => {
    pendientes.current.push({
      nombre: metrica.name,
      /* Redondeado: CLS necesita decimales, los milisegundos no. Mandar
         `1842.3999999999999` no dice nada que no diga `1842`. */
      valor: metrica.name === 'CLS' ? Number(metrica.value.toFixed(4)) : Math.round(metrica.value),
      calificacion: metrica.rating,
      id: metrica.id,
    })
  }, [])

  useReportWebVitals(anotar)

  useEffect(() => {
    /* `visibilitychange` y no `unload`: en móvil una pestaña que se va a
       segundo plano puede no volver nunca, y `unload` no se dispara en iOS.
       Es el único momento en que LCP, CLS e INP ya tienen su valor final. */
    const alOcultarse = () => {
      if (document.visibilityState === 'hidden') enviar()
    }
    document.addEventListener('visibilitychange', alOcultarse)
    window.addEventListener('pagehide', enviar)
    return () => {
      document.removeEventListener('visibilitychange', alOcultarse)
      window.removeEventListener('pagehide', enviar)
    }
  }, [enviar])

  return null
}
