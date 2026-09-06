import 'server-only'

import { createHmac, timingSafeEqual } from 'node:crypto'
import { configFormularios } from '@/lib/env'

/**
 * Tiempo mínimo de llenado: el sello, y qué garantiza de verdad.
 *
 * ## Qué es
 *
 * Cuando el formulario se pinta, pide al servidor un sello:
 * `<instante>.<firma>`, donde la firma es un HMAC-SHA256 del instante con un
 * secreto que nunca sale del servidor. Al enviar, el sello viaja con el resto y
 * la Server Action comprueba dos cosas: que la firma cuadra —así que el
 * instante lo puso el servidor y no el cliente— y que desde entonces han pasado
 * al menos {@link SEGUNDOS_MINIMOS} segundos.
 *
 * ## Qué garantiza
 *
 * **Que el instante no se puede inventar.** Un campo oculto con
 * `Date.now()` puesto por el cliente es una sugerencia: quien manda la petición
 * escribe también el campo, y le basta con restarle un minuto. Aquí no: sin el
 * secreto no se puede fabricar un sello que pase la firma, y un sello alterado
 * en un solo carácter deja de validar.
 *
 * Con eso queda fuera el bot que hace un POST directo contra la Server Action
 * —sin sello, o con uno inventado— y el que carga la página y envía en el mismo
 * instante. Es la mayoría del spam de formulario, que es automatizado y barato
 * precisamente porque no espera.
 *
 * ## Qué NO garantiza, y conviene decirlo entero
 *
 * **Un bot que pida el sello y espere cinco segundos pasa.** Esto no distingue
 * a una persona de un programa: distingue a quien esperó de quien no. Sube el
 * costo del ataque —una petición más y una espera por envío, que es lo que
 * arruina el rendimiento de un bot que vive de mandar miles— y ahí se acaba.
 *
 * **Un sello se puede reutilizar.** No hay registro de sellos gastados, así que
 * el mismo vale para muchos envíos mientras no caduque. Llevar ese registro
 * exigiría estado compartido entre funciones efímeras, y el precio —una
 * consulta más en el camino de cada envío, y un envío perdido cada vez que esa
 * consulta falle— no lo vale para lo que se gana. La {@link VIDA_MAXIMA_MS} es
 * lo que acota el daño: un sello robado sirve un día, no siempre.
 *
 * **No es un captcha y no pretende serlo.** Es un filtro barato contra bots
 * tontos. Sumado al honeypot y al límite por IP que ya había, cubre lo que se
 * puede cubrir sin poner un servicio de terceros delante del único formulario
 * por el que entra trabajo.
 *
 * ## La regla que manda sobre todas: nunca dejar fuera a una persona
 *
 * Si no hay secreto configurado, esto **no comprueba nada y deja pasar**. Es
 * deliberado y va en la dirección correcta: una variable de entorno que falta
 * en un despliegue no puede convertirse en un formulario que rechaza a todo el
 * mundo. Un lead de spam es un correo que se borra; un lead perdido es un
 * encargo que nadie supo que tocó la puerta.
 *
 * Y quien sí cae en el filtro no se queda sin salida: la Server Action devuelve
 * un error visible —no un `ok` fingido como el honeypot— y el formulario pinta
 * `ContactoDirecto` con WhatsApp, teléfono y correo. La diferencia de trato es
 * intencional: al honeypot solo cae un bot, y a esto puede caer una persona.
 */

/**
 * Cuatro segundos.
 *
 * El de contacto pide nombre, correo, WhatsApp, departamento, municipio, etapa,
 * un mensaje de diez caracteres como mínimo y dos casillas. Ni con el
 * autocompletado del navegador resolviendo los tres primeros de un golpe se
 * llega a los dos selectores, el texto y las casillas en cuatro segundos.
 *
 * El umbral se elige por abajo y no por arriba: la pregunta no es «cuánto tarda
 * una persona normal» —eso llevaría a poner quince— sino «cuánto tardaría la
 * persona más rápida imaginable», porque el costo de los dos errores no es el
 * mismo. Dejar pasar un bot cuesta un correo de basura. Rechazar a una persona
 * cuesta el encargo por el que se paga la pauta.
 */
export const SEGUNDOS_MINIMOS = 4

/**
 * Un día.
 *
 * Alguien deja la pestaña abierta el viernes por la noche y envía el lunes: eso
 * es una persona y tiene que poder enviar, así que el tope no puede ser de
 * minutos. Un día es suficientemente largo para no estorbar a nadie y
 * suficientemente corto para que un sello harvesteado haya que renovarlo. Si
 * aun así se pasa, el formulario pide uno nuevo al recibir el error y el
 * segundo intento entra.
 */
const VIDA_MAXIMA_MS = 24 * 60 * 60 * 1000

/**
 * Tolerancia hacia el futuro.
 *
 * Emitir y verificar pueden caer en funciones de regiones distintas, con
 * relojes que no están sincronizados al milisegundo. Sin este margen, un
 * desfase de medio segundo daría un sello «emitido en el futuro» y rechazaría a
 * una persona real por un problema que no es suyo.
 */
const MARGEN_RELOJ_MS = 5000

export type Veredicto =
  /** Pasó el tiempo mínimo, o no hay con qué comprobarlo. */
  | 'ok'
  /** Firma buena, pero llegó demasiado pronto. */
  | 'rapido'
  /** Sin sello, mal formado, mal firmado o caducado. */
  | 'invalido'

function firmar(instante: string, secreto: string): string {
  return createHmac('sha256', secreto).update(instante).digest('hex')
}

/**
 * Un sello nuevo, o `null` si no hay secreto.
 *
 * Devolver `null` y no lanzar es lo que hace que el sitio siga funcionando en
 * un entorno sin la variable: el formulario recibe «no hay sello», lo manda
 * vacío, y la verificación —que tampoco tiene secreto— deja pasar.
 */
export function emitirSello(): string | null {
  const { secretoSello } = configFormularios()
  if (!secretoSello) return null

  const instante = String(Date.now())
  return `${instante}.${firmar(instante, secretoSello)}`
}

/**
 * Compara firmas en tiempo constante.
 *
 * `timingSafeEqual` exige longitudes iguales y lanza si no lo son, así que la
 * comprobación de longitud va antes y por separado. Aquí el ataque de tiempo es
 * teórico —lo que se protege es un contador de segundos, no una credencial—,
 * pero escribir `===` sobre un HMAC enseña el patrón equivocado al siguiente
 * que lo copie a un sitio donde sí importe.
 */
function firmaValida(esperada: string, recibida: string): boolean {
  if (esperada.length !== recibida.length) return false
  return timingSafeEqual(Buffer.from(esperada), Buffer.from(recibida))
}

export function verificarSello(sello: string | undefined): Veredicto {
  const { secretoSello } = configFormularios()

  // Sin secreto no se comprueba nada. Ver la regla de arriba.
  if (!secretoSello) return 'ok'

  if (!sello) return 'invalido'

  const corte = sello.indexOf('.')
  if (corte < 1) return 'invalido'

  const instante = sello.slice(0, corte)
  const recibida = sello.slice(corte + 1)

  if (!/^\d{1,15}$/.test(instante)) return 'invalido'
  if (!firmaValida(firmar(instante, secretoSello), recibida)) return 'invalido'

  const transcurrido = Date.now() - Number(instante)

  if (transcurrido < -MARGEN_RELOJ_MS) return 'invalido'
  if (transcurrido > VIDA_MAXIMA_MS) return 'invalido'
  if (transcurrido < SEGUNDOS_MINIMOS * 1000) return 'rapido'

  return 'ok'
}
