/**
 * Los correos del sitio, en inglés.
 *
 * Se funde sobre `content/correos.ts` con `fusionar`, así que una clave que
 * falte cae al español en vez de salir en blanco. La estructura es la misma; lo
 * que no se traduce aquí es el nombre del estudio, que es un nombre propio.
 *
 * Una nota sobre el registro: el español va en «usted» por decisión del sitio,
 * y el inglés no tiene esa distinción. Lo que sí se conserva es el tono —formal
 * sin ser rígido— y sobre todo la promesa de plazo, que tiene que decir lo
 * mismo que dice el sitio en inglés: «within the next working hour».
 */
import type { CopiaCorreos } from '../correos'

type Parcial = {
  acuse: Partial<CopiaCorreos['acuse']>
  reserva: Partial<CopiaCorreos['reserva']>
  pie: Partial<CopiaCorreos['pie']>
}

export const correosEn: Parcial = {
  acuse: {
    asunto: 'We received your message · Plano Base',
    saludo: (nombre) => `${nombre},`,
    entrada:
      'Your message reached Plano Base and it is already on an architect’s ' +
      'desk, not in an automated inbox.',
    plazo:
      'We will write to you on WhatsApp within the next working hour. If your ' +
      'message came in at night or over the weekend, the clock starts when the ' +
      'office opens.',
    resumenTitular: 'This is what you told us',
    campoUbicacion: 'Where',
    campoEtapa: 'Stage',
    campoMensaje: 'Your message',
    adelantarTitular: 'If you would rather not wait',
    adelantarTexto:
      'You can write to us on WhatsApp right now and we will carry on there.',
    botonWhatsapp: 'Message us on WhatsApp',
  },

  reserva: {
    asunto: (cuando) => `Your consultation is confirmed · ${cuando}`,
    saludo: (nombre) => `${nombre},`,
    entrada:
      'Your consultation is confirmed. Below you will find the date, the link ' +
      'to join and the calendar event attached.',
    cuandoTitular: 'When',
    zonaAviso: 'Colombia time (GMT-5).',
    enlaceTitular: 'How to join',
    botonEntrar: 'Join the video call',
    sinEnlace:
      'The link to the video call will reach you in a second email before the ' +
      'appointment.',
    prepararTitular: 'To make the fifteen minutes count',
    preparar: [
      'If you have drawings, photos or a quote, keep them to hand. There is no need to send them beforehand.',
      'If you already know where the site is, the address or cadastral number helps: the rules change from one municipality to the next.',
      'Bring the question that weighs on you most. Fifteen minutes are enough for one good one.',
    ],
    cambiarTitular: 'If you need to change it',
    cambiarTexto:
      'Reply to this email or write to us on WhatsApp. There is no cost or ' +
      'penalty for moving the appointment.',
    adjuntoAviso:
      'This email carries the event attached (.ics). Opening it puts the ' +
      'appointment in your calendar.',
    eventoTitulo: 'Technical consultation · Plano Base Arquitectos',
    eventoDescripcion: (enlace) =>
      [
        'Fifteen-minute technical consultation with an architect from Plano Base.',
        enlace ? `Join: ${enlace}` : null,
        'To change the appointment, reply to the confirmation email.',
      ]
        .filter(Boolean)
        .join('\n\n'),
  },

  pie: {
    firma: 'Plano Base Arquitectos',
    responder: 'You can reply to this email: a person at the studio reads it.',
  },
}
