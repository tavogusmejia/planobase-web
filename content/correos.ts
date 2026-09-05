/**
 * La copia de los correos que salen del sitio.
 *
 * Vive en `content/` y no en `messages/` por la misma frontera que separa las
 * dos casas en el resto del proyecto: `messages/` guarda cadenas de interfaz
 * —rótulos, errores, etiquetas— y `content/` guarda texto que alguien redactó.
 * Un correo es lo segundo. Su inglés está en `content/en/correos.ts` y se funde
 * con `fusionar`, así que una clave sin traducir sale en español en vez de salir
 * en blanco.
 *
 * **Son dos correos y hacen cosas distintas.**
 *
 * 1. **El acuse de recibo.** Hoy un visitante rellena el formulario, lee
 *    «Recibimos su mensaje» en pantalla y no recibe nada más. Si cierra la
 *    pestaña no le queda ninguna constancia de que escribió, ni a quién, ni qué
 *    dijo. El acuse existe para que le quede: repite lo que envió, dice cuándo
 *    le responden y le da una vía para adelantarse.
 *
 * 2. **La confirmación de reserva**, con el evento adjunto y el enlace de la
 *    videollamada. El correo automático de Google Calendar se desactiva a
 *    propósito: el cliente tiene que recibir **un solo correo**, el del
 *    estudio, o la reserva llega partida en dos remitentes y el que manda
 *    parece Google.
 *
 * Las dos promesas de plazo dicen lo mismo que el resto del sitio —«dentro de
 * la siguiente hora hábil»—, y eso no es casualidad ni se puede tocar aquí
 * suelto: es la única ventana de respuesta que publica el sitio, y ya se unificó
 * una vez porque convivían tres redacciones distintas.
 */

export type CopiaCorreos = {
  acuse: {
    asunto: string
    saludo: (nombre: string) => string
    entrada: string
    plazo: string
    resumenTitular: string
    campoUbicacion: string
    campoEtapa: string
    campoMensaje: string
    adelantarTitular: string
    adelantarTexto: string
    botonWhatsapp: string
  }
  reserva: {
    asunto: (cuando: string) => string
    saludo: (nombre: string) => string
    entrada: string
    cuandoTitular: string
    zonaAviso: string
    enlaceTitular: string
    botonEntrar: string
    sinEnlace: string
    prepararTitular: string
    preparar: string[]
    cambiarTitular: string
    cambiarTexto: string
    adjuntoAviso: string
    eventoTitulo: string
    eventoDescripcion: (enlace: string | null) => string
  }
  pie: {
    firma: string
    responder: string
  }
}

export const correos: CopiaCorreos = {
  acuse: {
    asunto: 'Recibimos su mensaje · Plano Base',
    saludo: (nombre) => `${nombre},`,
    entrada:
      'Su mensaje llegó a Plano Base y ya está en la mesa de un arquitecto, ' +
      'no en una bandeja automática.',
    /* Dice WhatsApp y no «le responderemos» porque es lo que el sitio promete
       en el formulario y en /agendar, y porque es el canal declarado del
       estudio. Prometer correo aquí y responder por WhatsApp allá es la clase
       de desajuste que hace dudar de todo lo demás. */
    plazo:
      'Le escribimos por WhatsApp dentro de la siguiente hora hábil. Si su ' +
      'mensaje entró de noche o en fin de semana, la cuenta empieza cuando ' +
      'abre la oficina.',
    resumenTitular: 'Esto fue lo que nos contó',
    campoUbicacion: 'Dónde',
    campoEtapa: 'Etapa',
    campoMensaje: 'Su mensaje',
    adelantarTitular: 'Si prefiere no esperar',
    adelantarTexto:
      'Puede escribirnos ahora mismo por WhatsApp y seguimos la conversación ' +
      'por ahí.',
    botonWhatsapp: 'Escribirnos por WhatsApp',
  },

  reserva: {
    asunto: (cuando) => `Su asesoría queda confirmada · ${cuando}`,
    saludo: (nombre) => `${nombre},`,
    entrada:
      'Su asesoría queda confirmada. Abajo está la fecha, el enlace para ' +
      'entrar y el evento adjunto para su calendario.',
    cuandoTitular: 'Cuándo',
    /* La hora se escribe siempre con la zona al lado. Una reserva a las 10:00
       sin decir de dónde son esas diez es una reserva que alguien va a perder:
       el estudio atiende clientes fuera del país y el sitio ya declara una
       opción «fuera de Colombia» en su propio formulario. */
    zonaAviso: 'Hora de Colombia (GMT-5).',
    enlaceTitular: 'Cómo entrar',
    botonEntrar: 'Entrar a la videollamada',
    sinEnlace:
      'El enlace de la videollamada le llega en un segundo correo antes de la ' +
      'cita.',
    prepararTitular: 'Para aprovechar los quince minutos',
    /* No pide documentos formales a propósito: son quince minutos gratuitos y
       exigir preparación ahuyenta justo al lead que todavía no sabe qué tiene.
       Lo que se pide es lo que haga más útil la llamada si existe, y nada es
       obligatorio. */
    preparar: [
      'Si tiene planos, fotos o una cotización, téngalos a mano. No hace falta enviarlos antes.',
      'Si ya sabe dónde queda el predio, la dirección o el número catastral ayuda: la norma cambia de un municipio a otro.',
      'Traiga la pregunta que más le pesa. Quince minutos alcanzan para una bien hecha.',
    ],
    cambiarTitular: 'Si necesita cambiarla',
    cambiarTexto:
      'Responda a este correo o escríbanos por WhatsApp. No hay costo ni ' +
      'penalidad por mover la cita.',
    adjuntoAviso:
      'Este correo lleva adjunto el evento (.ics). Al abrirlo, la cita entra ' +
      'en su calendario.',
    eventoTitulo: 'Asesoría técnica · Plano Base Arquitectos',
    eventoDescripcion: (enlace) =>
      [
        'Asesoría técnica de quince minutos con un arquitecto de Plano Base.',
        enlace ? `Entrar: ${enlace}` : null,
        'Para cambiar la cita, responda al correo de confirmación.',
      ]
        .filter(Boolean)
        .join('\n\n'),
  },

  pie: {
    firma: 'Plano Base Arquitectos',
    responder:
      'Puede responder a este correo: lo lee una persona del estudio.',
  },
}
