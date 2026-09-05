/**
 * Confirmación de reserva, con el evento adjunto y el enlace de la videollamada.
 *
 * Es la pieza que cierra la Entrega A, y el motivo por el que **se desactiva a
 * propósito el correo automático de Google Calendar**: el cliente tiene que
 * recibir un solo correo, el del estudio. Si salen los dos, el que llega
 * primero es el de Google, con su remitente y su maqueta, y la reserva parece
 * hecha por Google con el estudio de invitado.
 *
 * **Esta plantilla no depende del calendario y por eso ya existe.** Recibe una
 * reserva ya hecha —quién, cuándo, con qué enlace— y devuelve el correo listo.
 * El día que estén las credenciales de Google, lo que hay que escribir es quien
 * la llama, no esto. Se puede probar hoy sin cuenta de servicio: hay una función
 * para componer sin enviar.
 *
 * El enlace puede faltar y está contemplado: si Meet no se pudo crear, el correo
 * sale igual diciendo que el enlace llega aparte, en vez de no salir. Una
 * confirmación sin enlace sirve; una reserva sin confirmación, no.
 */
import { enviarCorreo } from './enviar'
import { bloque, maqueta, textoPlano } from './maqueta'
import { copiaCorreos, pieDe } from './copia'
import { construirIcs } from './ics'
import { fechaHoraLarga, soloHora } from '@/lib/formato'
import { contacto, site } from '@content/site'

export type DatosReserva = {
  idioma: string
  /** Identificador estable de la reserva. El mismo en cada reenvío. */
  id: string
  nombre: string
  correo: string
  inicio: Date
  fin: Date
  /** Enlace de Meet, o `null` si todavía no se pudo crear. */
  enlace: string | null
  /** Sube cuando la cita se mueve; un calendario ignora una revisión vieja. */
  secuencia?: number
  cancelada?: boolean
}

export function componerReserva(d: DatosReserva): {
  asunto: string
  html: string
  texto: string
  ics: string
} {
  const c = copiaCorreos(d.idioma).reserva
  const pie = pieDe(d.idioma)

  const cuando = fechaHoraLarga(d.idioma, d.inicio)
  const rango = `${cuando}–${soloHora(d.idioma, d.fin)}`

  const cuerpo = [
    bloque.entrada(c.saludo(d.nombre)),
    bloque.parrafo(c.entrada),
    bloque.regla(),
    bloque.titular(c.cuandoTitular),
    /* La fecha va con el cuerpo grande y la zona debajo en nota. Es el dato que
       el lector busca primero al abrir el correo, y meterlo en el rótulo
       pequeño de un campo lo entierra debajo de su propia aclaración. */
    bloque.entrada(rango),
    bloque.nota(c.zonaAviso),
    bloque.titular(c.enlaceTitular),
    d.enlace
      ? bloque.boton(c.botonEntrar, d.enlace)
      : bloque.parrafo(c.sinEnlace),
    bloque.regla(),
    bloque.titular(c.prepararTitular),
    bloque.lista(c.preparar),
    bloque.titular(c.cambiarTitular),
    bloque.parrafo(c.cambiarTexto),
    bloque.nota(c.adjuntoAviso),
  ].join('')

  const texto = textoPlano(
    [
      c.saludo(d.nombre),
      '',
      c.entrada,
      '',
      // Sin paréntesis alrededor: `zonaAviso` ya es una frase con su punto.
      `${c.cuandoTitular.toUpperCase()}: ${rango} · ${c.zonaAviso}`,
      '',
      d.enlace ? `${c.enlaceTitular.toUpperCase()}: ${d.enlace}` : c.sinEnlace,
      '',
      c.prepararTitular.toUpperCase(),
      ...c.preparar.map((p) => `· ${p}`),
      '',
      c.cambiarTexto,
      '',
      c.adjuntoAviso,
    ],
    pie,
  )

  const ics = construirIcs({
    id: d.id,
    titulo: c.eventoTitulo,
    descripcion: c.eventoDescripcion(d.enlace),
    inicio: d.inicio,
    fin: d.fin,
    enlace: d.enlace,
    organizador: { nombre: site.nombreLargo, correo: contacto.correo },
    invitado: { nombre: d.nombre, correo: d.correo },
    secuencia: d.secuencia,
    cancelado: d.cancelada,
  })

  return { asunto: c.asunto(cuando), html: maqueta({ preheader: rango, cuerpo, pie }), texto, ics }
}

export async function enviarConfirmacionReserva(
  d: DatosReserva,
): Promise<boolean> {
  const { asunto, html, texto, ics } = componerReserva(d)
  return enviarCorreo({
    para: d.correo,
    asunto,
    html,
    texto,
    responderA: contacto.correo,
    adjuntos: [
      {
        nombre: 'asesoria-plano-base.ics',
        contenido: ics,
        /* `method=REQUEST` en el tipo, y no solo dentro del archivo: es lo que
           hace que Outlook y Gmail muestren los botones de aceptar y rechazar
           en vez de un adjunto que hay que descargar. */
        tipo: 'text/calendar; charset=utf-8; method=REQUEST',
      },
    ],
  })
}
