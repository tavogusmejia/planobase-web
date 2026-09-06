'use client'

import { leer } from '@/lib/consentimiento'

/**
 * De qué anuncio vino quien acaba escribiendo.
 *
 * **El problema que resuelve.** Hasta ahora los dos formularios leían los
 * parámetros de campaña de `window.location.search` al montar, y nada más. Eso
 * solo funciona si el anuncio apunta directo a `/contacto` o a `/agendar`. En
 * cuanto la campaña lleva a un artículo del blog —que es justo lo que hace una
 * campaña de contenido— la persona lee, navega a servicios, entra a contacto y
 * escribe: para entonces la URL ya no tiene ni un `utm_`, y el lead entra sin
 * procedencia. La atribución no se degradaba, se perdía entera.
 *
 * **Qué guarda y qué no.** Solo los tres parámetros que el sitio ya sabía
 * guardar y que tienen columna en la base: `utm_source`, `utm_campaign` y
 * `promo`. No se añaden `utm_medium`, `utm_content` ni `utm_term` porque no hay
 * dónde escribirlos, y guardar en el navegador algo que nadie va a leer es
 * recoger un dato sin finalidad. El día que existan las columnas se añaden
 * aquí y en los dos esquemas.
 *
 * **Última campaña gana.** Si alguien llega hoy por un anuncio de Meta y mañana
 * por uno de Google, el lead se atribuye al segundo. Es el criterio de «último
 * clic», el mismo que usan Meta y Google Ads por defecto, y el que hace que las
 * tres bandejas —web, Meta, Ads— cuenten lo mismo. Conservar el primero haría
 * que el costo por lead de la web no se pudiera comparar con el que reporta
 * cada plataforma.
 *
 * ## Consentimiento: por qué esto no espera al banner
 *
 * `src/components/analytics/Medicion.tsx` no monta ninguna etiqueta sin un sí
 * explícito, y esa regla se queda intacta. Esto es otra cosa:
 *
 * - **No hay tercero.** No se carga ningún script, no sale ninguna petición, no
 *   se contacta con ningún dominio ajeno. Es una cadena de texto en el
 *   almacenamiento local del propio sitio.
 * - **No se crea ningún identificador.** No hay id de visitante, ni cookie, ni
 *   nada que permita reconocer a nadie. Guardar «vino de
 *   `meta/remodelaciones-sep`» no distingue a una persona de las otras mil que
 *   vieron el mismo anuncio.
 * - **No sale de aquí hasta que la persona lo manda.** El valor viaja al
 *   servidor solo dentro del formulario, con la casilla que exige el artículo 9
 *   de la Ley 1581 marcada. Antes de eso no se transmite nada.
 * - **No es un dato nuevo.** El sitio ya escribía `utm_source` y `utm_campaign`
 *   en la tabla `leads` desde la primera migración. Lo único que cambia es
 *   cuánto sobrevive el valor dentro del navegador antes de acompañar a un
 *   envío que la persona decide hacer.
 *
 * La política de datos (`content/legal.ts`) condiciona al consentimiento «las
 * herramientas de medición y publicidad **de terceros**», que es justo lo que
 * esto no es, y su sección «Qué datos recogemos» ya declara que junto al envío
 * se guarda algo que la persona no escribe —la huella de la IP—. Aun así
 * conviene que la política nombre la procedencia de campaña; queda reportado
 * aparte, porque este trabajo no puede tocar `content/`.
 *
 * **Lo que sí se respeta.** Quien pulsa «Rechazar» está diciendo que no quiere
 * que le midan. Aunque el argumento de arriba no obligue, no persistir nada en
 * ese caso cuesta una línea y es lo coherente con lo que la persona acaba de
 * decir; un rechazo además borra lo que hubiera guardado antes. Lo que siga
 * viniendo en la URL de esta misma visita sí se usa, porque eso no es
 * almacenamiento: es el enlace que la persona está mirando.
 */

const CLAVE = 'pb.atribucion'

/**
 * Treinta días.
 *
 * Por debajo se pierde el caso que motivó todo esto —leer un artículo el
 * miércoles y volver a escribir el fin de semana siguiente—; por encima empieza
 * a mentir. Un UTM guardado sin caducidad acaba atribuyendo a una campaña de
 * hace un año una conversión de hoy, y eso es peor que no atribuir: no deja el
 * hueco visible, lo rellena con una cifra falsa por la que alguien decide qué
 * anuncio apaga.
 *
 * Treinta días es además la ventana de conversión por clic de Meta y de Google
 * Ads. Elegir la misma no es imitación: hace que el CPL que calcula el estudio
 * con su tabla de leads y el que reporta cada plataforma cuenten los mismos
 * envíos. Con ventanas distintas las dos cifras difieren siempre y nadie sabe
 * cuál creer.
 */
const VENTANA_MS = 30 * 24 * 60 * 60 * 1000

export type Atribucion = {
  utmSource?: string
  utmCampaign?: string
  promo?: string
}

type Guardado = Atribucion & {
  /** ISO. De aquí sale la caducidad; sin esto la ventana no existiría. */
  visto: string
}

/**
 * Recorta a lo que aceptan los esquemas y quita lo que no debería estar.
 *
 * Los límites son los de `leadSchema` a propósito: si aquí pasara algo más
 * largo, el envío fallaría la validación por un valor que la persona nunca
 * escribió y perdería el mensaje por culpa de un parámetro de la URL. Los
 * caracteres de control se van porque este valor acaba en el asunto y en el
 * cuerpo de un correo.
 */
function limpiar(valor: string | null, maximo: number): string | undefined {
  if (!valor) return undefined
  const limpio = valor.replace(/[\u0000-\u001F\u007F]/g, '').trim()
  return limpio === '' ? undefined : limpio.slice(0, maximo)
}

function deLaUrl(busqueda: string): Atribucion | null {
  const q = new URLSearchParams(busqueda)
  const valor: Atribucion = {
    utmSource: limpiar(q.get('utm_source'), 120),
    utmCampaign: limpiar(q.get('utm_campaign'), 120),
    promo: limpiar(q.get('promo'), 60),
  }
  const hayAlgo = valor.utmSource ?? valor.utmCampaign ?? valor.promo
  return hayAlgo ? valor : null
}

function rechazoLaMedicion(): boolean {
  return leer()?.medicion === 'rechazado'
}

function olvidar(): void {
  try {
    window.localStorage.removeItem(CLAVE)
  } catch {
    // Sin almacenamiento no hay nada que olvidar.
  }
}

/**
 * Lo guardado, si sigue dentro de la ventana.
 *
 * Una atribución caducada no se devuelve **y además se borra**: dejarla ahí
 * haría que cada lectura posterior repitiera el mismo cálculo sobre un dato que
 * ya se sabe muerto.
 */
function guardado(): Atribucion | null {
  if (typeof window === 'undefined') return null
  try {
    const crudo = window.localStorage.getItem(CLAVE)
    if (!crudo) return null
    const dato = JSON.parse(crudo) as Partial<Guardado>
    const visto = typeof dato.visto === 'string' ? Date.parse(dato.visto) : NaN
    if (Number.isNaN(visto) || Date.now() - visto > VENTANA_MS) {
      olvidar()
      return null
    }
    const valor: Atribucion = {
      utmSource: limpiar(dato.utmSource ?? null, 120),
      utmCampaign: limpiar(dato.utmCampaign ?? null, 120),
      promo: limpiar(dato.promo ?? null, 60),
    }
    return valor.utmSource ?? valor.utmCampaign ?? valor.promo ? valor : null
  } catch {
    // JSON corrupto o almacenamiento bloqueado. Nunca lanza: perder la
    // atribución es una cifra de menos en una tabla; romper la página es un
    // encargo de menos.
    return null
  }
}

/**
 * Si la URL de esta carga trae campaña, la guarda.
 *
 * Idempotente y barato: leer la query y, como mucho, escribir una línea. Se
 * puede llamar desde el layout y otra vez desde el formulario sin pensarlo, que
 * es justo lo que hace falta — los efectos de los hijos corren antes que los
 * del padre, así que el formulario no puede dar por hecho que el layout ya
 * capturó.
 */
export function capturar(): void {
  if (typeof window === 'undefined') return

  const deAhora = deLaUrl(window.location.search)
  if (!deAhora) return

  if (rechazoLaMedicion()) {
    olvidar()
    return
  }

  try {
    const valor: Guardado = { ...deAhora, visto: new Date().toISOString() }
    window.localStorage.setItem(CLAVE, JSON.stringify(valor))
  } catch {
    // Navegación privada, cookies de sitio bloqueadas. La atribución de esta
    // visita sigue funcionando mientras no se navegue: `atribucionActual()`
    // lee la URL antes que el almacenamiento.
  }
}

/**
 * La procedencia que debe acompañar a un envío hecho ahora mismo.
 *
 * Captura primero y lee después, en ese orden y no al revés: si el anuncio
 * apunta directo al formulario, lo que vale es la URL de esta carga, y hacerlo
 * así evita depender de quién montó antes.
 *
 * La URL manda sobre lo guardado. Quien llega con `utm_source` en la barra de
 * direcciones viene de ahí, diga lo que diga una visita de hace tres semanas.
 */
export function atribucionActual(): Atribucion {
  if (typeof window === 'undefined') return {}
  capturar()

  const deAhora = deLaUrl(window.location.search)
  if (deAhora) return deAhora

  if (rechazoLaMedicion()) {
    olvidar()
    return {}
  }
  return guardado() ?? {}
}
