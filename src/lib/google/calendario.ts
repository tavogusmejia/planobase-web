import 'server-only'

import { configGoogleCalendar, hayGoogleCalendar } from '@/lib/env'
import type { Rango } from '@/lib/agenda/franjas'
import { tokenDeAcceso } from './token'

/**
 * Lo que el sitio necesita del calendario de Google, y nada más.
 *
 * Dos operaciones: qué horas están ocupadas de verdad, y crear la cita con su
 * enlace de Meet. Es lo que cerraba el único punto débil del calendario propio
 * —que solo conocía las citas que él mismo había creado, así que ofrecía las
 * diez aunque hubiera una reunión a las diez—.
 *
 * **Ninguna de las dos puede costar una reserva.** Las dos devuelven un valor
 * neutro cuando algo falla, nunca lanzan, y quien las llama sigue adelante. Es
 * la misma regla que ya sostiene `enviarCorreo()`.
 */

const BASE = 'https://www.googleapis.com/calendar/v3'

/**
 * Los tramos ocupados entre dos instantes.
 *
 * Devuelve `[]` cuando no hay credenciales o cuando Google no contesta, y esa
 * decisión merece explicarse porque no es obvia: significa **enseñar la agenda
 * con lo que sabe la base, igual que hasta hoy**. La alternativa —no ofrecer
 * nada— es peor: ofrecer una hora ocupada cuesta un correo de «¿podemos
 * moverla?», y no ofrecer ninguna cuesta el clic del anuncio entero.
 */
export async function ocupadosDe(desde: Date, hasta: Date): Promise<Rango[]> {
  if (!hayGoogleCalendar()) return []

  const enCache = deCache(desde, hasta)
  if (enCache) return enCache

  const token = await tokenDeAcceso()
  if (!token) return []

  try {
    const { calendarioId } = configGoogleCalendar()
    const respuesta = await fetch(`${BASE}/freeBusy`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timeMin: desde.toISOString(),
        timeMax: hasta.toISOString(),
        items: [{ id: calendarioId }],
      }),
      cache: 'no-store',
    })

    if (!respuesta.ok) {
      console.error('[google] freeBusy falló:', await respuesta.text())
      return []
    }

    const datos = (await respuesta.json()) as {
      calendars?: Record<string, { busy?: { start: string; end: string }[] }>
    }

    const tramos = (datos.calendars?.[calendarioId]?.busy ?? []).map((b) => ({
      inicio: b.start,
      fin: b.end,
    }))

    guardarEnCache(desde, hasta, tramos)
    return tramos
  } catch (e) {
    console.error('[google] Fallo al leer la disponibilidad:', e)
    return []
  }
}

/**
 * Caché en memoria, sesenta segundos.
 *
 * La ventana es de dos semanas y cambia poco; sin esto, cada carga de
 * `/agendar` sería una llamada a Google. Se guarda por rango porque los dos
 * servicios piden la misma ventana pero el rango podría cambiar.
 */
const CACHE_MS = 60_000
let cache: { clave: string; tramos: Rango[]; hasta: number } | null = null

const claveDe = (desde: Date, hasta: Date) =>
  `${desde.toISOString().slice(0, 13)}|${hasta.toISOString().slice(0, 13)}`

function deCache(desde: Date, hasta: Date): Rango[] | null {
  if (!cache) return null
  if (cache.clave !== claveDe(desde, hasta)) return null
  return Date.now() < cache.hasta ? cache.tramos : null
}

function guardarEnCache(desde: Date, hasta: Date, tramos: Rango[]): void {
  cache = { clave: claveDe(desde, hasta), tramos, hasta: Date.now() + CACHE_MS }
}

export type EventoCreado = { id: string; enlace: string | null }

/**
 * Crea la cita en el calendario del estudio, con su sala de Meet.
 *
 * Devuelve `null` si no se pudo. **La reserva ya está escrita cuando esto se
 * llama**, así que un fallo aquí no la deshace: deja `enlace` y `evento_google`
 * en nulo, y la plantilla del correo ya contempla ese caso —dice que el enlace
 * llega en un segundo correo— y `construirIcs` omite `LOCATION` y `URL`. Ese
 * modo degradado no hubo que construirlo: existía y lo verifica
 * `scripts/check-correos.ts` en sus cuatro variantes.
 */
export async function crearEvento(datos: {
  reservaId: string
  titulo: string
  descripcion: string
  inicio: Date
  fin: Date
  invitado: { correo: string; nombre: string }
}): Promise<EventoCreado | null> {
  if (!hayGoogleCalendar()) return null

  const token = await tokenDeAcceso()
  if (!token) return null

  try {
    const { calendarioId } = configGoogleCalendar()

    /* `conferenceDataVersion=1` es obligatorio para que se cree el Meet. Sin
       él la petición devuelve 200 y el evento se crea **sin sala, en
       silencio**: no hay error que mirar, solo un `hangoutLink` que no está.

       `sendUpdates=none` apaga la invitación automática de Google. Si saliera,
       el cliente recibiría dos correos y el primero sería el de Google, con su
       remitente y su maqueta, dejando al estudio de invitado en su propia
       cita. */
    const url =
      `${BASE}/calendars/${encodeURIComponent(calendarioId)}/events` +
      `?conferenceDataVersion=1&sendUpdates=none`

    const respuesta = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary: datos.titulo,
        description: datos.descripcion,
        start: { dateTime: datos.inicio.toISOString(), timeZone: 'America/Bogota' },
        end: { dateTime: datos.fin.toISOString(), timeZone: 'America/Bogota' },
        attendees: [
          { email: datos.invitado.correo, displayName: datos.invitado.nombre },
        ],
        conferenceData: {
          createRequest: {
            /* El id de la reserva, que es estable. Si esta llamada se
               reintenta, Google devuelve la misma sala en vez de crear una
               segunda. */
            requestId: datos.reservaId,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
      }),
      cache: 'no-store',
    })

    if (!respuesta.ok) {
      console.error('[google] No se pudo crear el evento:', await respuesta.text())
      return null
    }

    const evento = (await respuesta.json()) as {
      id?: string
      hangoutLink?: string
      conferenceData?: { createRequest?: { status?: { statusCode?: string } } }
    }

    if (!evento.id) return null

    /* `hangoutLink` puede venir vacío con el estado `pending`: la sala se está
       creando y el evento ya existe. No se espera ni se reintenta aquí —eso
       alargaría la petición del visitante— sino que se deja el enlace en nulo,
       que es un caso que el correo ya sabe contar. */
    const pendiente =
      evento.conferenceData?.createRequest?.status?.statusCode === 'pending'
    if (pendiente && !evento.hangoutLink) {
      console.warn('[google] La sala de Meet quedó pendiente:', evento.id)
    }

    return { id: evento.id, enlace: evento.hangoutLink ?? null }
  } catch (e) {
    console.error('[google] Fallo al crear el evento:', e)
    return null
  }
}
