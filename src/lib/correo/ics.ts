/**
 * Generador de archivos iCalendar (RFC 5545) para la confirmación de reserva.
 *
 * Existe porque el correo de confirmación tiene que llevar el evento adjunto:
 * quien reserva una asesoría no vuelve al sitio a mirar cuándo era, mira su
 * calendario. Sin el adjunto, la reserva vive solo en la bandeja de entrada y
 * se pierde igual que se pierde un correo.
 *
 * **Se escribe a mano y no con una biblioteca a propósito.** El formato es
 * pequeño y estable desde 1998, y las tres cosas que de verdad rompen un `.ics`
 * —los finales de línea, el plegado y el escapado— son exactamente las que una
 * dependencia esconde y luego hay que depurar a ciegas cuando Outlook rechaza
 * el archivo y Gmail lo acepta.
 *
 * Las tres reglas que importan, y que son las que casi siempre se incumplen:
 *
 * 1. **Las líneas terminan en CRLF**, no en LF. Un `.ics` con finales de línea
 *    de Unix lo abre Gmail sin protestar y lo rechaza Outlook, que es justo el
 *    cliente que usan las entidades públicas y las constructoras.
 * 2. **Ninguna línea pasa de 75 octetos** — octetos, no caracteres: una tilde
 *    en UTF-8 ocupa dos y un emoji cuatro. Las que pasan se pliegan, y la
 *    continuación empieza por un espacio. Cortar por caracteres parte la tilde
 *    por la mitad y produce un archivo corrupto.
 * 3. **En los valores de texto hay que escapar** la barra invertida, el punto y
 *    coma, la coma y el salto de línea. Un mensaje de cliente que traiga un
 *    punto y coma sin escapar termina el campo antes de tiempo y desplaza todo
 *    lo que viene detrás.
 */

/** El calendario declara las horas en UTC y deja que cada cliente las pinte. */
function enUtc(fecha: Date): string {
  return `${fecha.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`
}

/**
 * Escapa un valor de tipo TEXT según el §3.3.11 de la RFC.
 *
 * El orden importa: la barra invertida va primero o se re-escaparían las que
 * introducen las sustituciones siguientes.
 */
function escapar(texto: string): string {
  return texto
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r\n|\r|\n/g, '\\n')
}

/**
 * Pliega una línea a 75 octetos, cortando por octeto y no por carácter.
 *
 * Se mide sobre el UTF-8 codificado y se corta por posición de byte, buscando
 * hacia atrás hasta el principio de un carácter: así una tilde o una eñe nunca
 * quedan partidas entre dos líneas.
 */
function plegar(linea: string): string[] {
  const bytes = new TextEncoder().encode(linea)
  if (bytes.length <= 75) return [linea]

  const decodificador = new TextDecoder()
  const trozos: string[] = []
  let desde = 0
  // La primera línea admite 75 octetos; las siguientes llevan un espacio
  // delante, así que solo les quedan 74 de contenido.
  let tope = 75

  while (desde < bytes.length) {
    let hasta = Math.min(desde + tope, bytes.length)
    // Retroceder hasta el inicio de un carácter: los octetos de continuación
    // de UTF-8 son de la forma 10xxxxxx.
    while (hasta > desde && hasta < bytes.length && ((bytes[hasta] ?? 0) & 0xc0) === 0x80) {
      hasta--
    }
    trozos.push(decodificador.decode(bytes.slice(desde, hasta)))
    desde = hasta
    tope = 74
  }

  return trozos.map((t, i) => (i === 0 ? t : ` ${t}`))
}

export type Reserva = {
  /** Identificador estable del evento. Reenviar el correo no debe duplicarlo. */
  id: string
  titulo: string
  descripcion: string
  inicio: Date
  fin: Date
  /** El enlace de Meet. Va en LOCATION y también en el cuerpo. */
  enlace: string | null
  organizador: { nombre: string; correo: string }
  invitado: { nombre: string; correo: string }
  /** Sube cada vez que la reserva cambia; un cliente ignora una revisión vieja. */
  secuencia?: number
  /** `CANCELLED` retira el evento del calendario de quien ya lo aceptó. */
  cancelado?: boolean
}

/**
 * Devuelve el contenido de un `.ics` listo para adjuntar.
 *
 * `METHOD:REQUEST` y no `PUBLISH`: es una invitación con un asistente
 * concreto, no un evento de cartelera. Con `PUBLISH`, Outlook lo muestra como
 * información y no ofrece aceptar ni rechazar.
 */
export function construirIcs(r: Reserva): string {
  const lineas: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Plano Base Arquitectos//Asesorias//ES',
    'CALSCALE:GREGORIAN',
    `METHOD:${r.cancelado ? 'CANCEL' : 'REQUEST'}`,
    'BEGIN:VEVENT',
    `UID:${r.id}`,
    `DTSTAMP:${enUtc(new Date())}`,
    `DTSTART:${enUtc(r.inicio)}`,
    `DTEND:${enUtc(r.fin)}`,
    `SEQUENCE:${r.secuencia ?? 0}`,
    `STATUS:${r.cancelado ? 'CANCELLED' : 'CONFIRMED'}`,
    `SUMMARY:${escapar(r.titulo)}`,
    `DESCRIPTION:${escapar(r.descripcion)}`,
    `ORGANIZER;CN=${escapar(r.organizador.nombre)}:mailto:${r.organizador.correo}`,
    `ATTENDEE;CN=${escapar(r.invitado.nombre)};ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${r.invitado.correo}`,
  ]

  if (r.enlace) {
    lineas.push(`LOCATION:${escapar(r.enlace)}`)
    // Algunos clientes ofrecen un botón de «unirse» solo si hay URL propia.
    lineas.push(`URL:${escapar(r.enlace)}`)
  }

  lineas.push('END:VEVENT', 'END:VCALENDAR')

  // CRLF, y el archivo termina en CRLF: la RFC pide que la última línea
  // también lo lleve, y hay clientes que descartan la última si falta.
  return `${lineas.flatMap(plegar).join('\r\n')}\r\n`
}
