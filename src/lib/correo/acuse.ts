/**
 * Acuse de recibo del formulario de contacto.
 *
 * Hoy un visitante rellena el formulario, lee «Recibimos su mensaje» en
 * pantalla y no le llega nada. Si cierra la pestaña —y de un anuncio la cierra
 * casi todo el mundo— no le queda constancia de que escribió, ni a quién, ni
 * qué dijo. Eso importa por tres motivos distintos:
 *
 * 1. **El lead duda.** Un formulario que no acusa recibo se lee como un
 *    formulario que no llegó, y quien duda vuelve a escribir por otro canal o
 *    se va a otro estudio.
 * 2. **El correo del estudio queda sin hilo.** Con el acuse, la respuesta del
 *    estudio cae en una conversación que ya existe en la bandeja del cliente en
 *    vez de aparecer como un correo frío de un remitente desconocido.
 * 3. **Entrega el mensaje al cliente.** Le repite lo que escribió, que es lo
 *    que le permite corregir un dato antes de la llamada.
 *
 * **Es best-effort y nunca decide el resultado del envío.** El lead ya está
 * guardado cuando esto corre; si Resend falla, se registra y se sigue. Al revés
 * —dejar que un fallo de correo devuelva error al visitante— sería perder un
 * encargo por no poder mandar un acuse.
 */
import { enviarCorreo } from './enviar'
import { bloque, maqueta, textoPlano } from './maqueta'
import { copiaCorreos, pieDe } from './copia'

export type DatosAcuse = {
  idioma: string
  nombre: string
  correo: string
  municipio: string
  etapa: string
  mensaje: string
  /** Enlace wa.me ya construido, para el botón de adelantarse. */
  enlaceWhatsapp: string
}

export function componerAcuse(d: DatosAcuse): {
  asunto: string
  html: string
  texto: string
} {
  const c = copiaCorreos(d.idioma).acuse
  const pie = pieDe(d.idioma)

  const cuerpo = [
    bloque.entrada(c.saludo(d.nombre)),
    bloque.parrafo(c.entrada),
    bloque.parrafo(c.plazo),
    bloque.regla(),
    bloque.titular(c.resumenTitular),
    bloque.campo(c.campoUbicacion, d.municipio),
    bloque.campo(c.campoEtapa, d.etapa),
    bloque.campo(c.campoMensaje, d.mensaje),
    bloque.regla(),
    bloque.titular(c.adelantarTitular),
    bloque.parrafo(c.adelantarTexto),
    bloque.boton(c.botonWhatsapp, d.enlaceWhatsapp),
  ].join('')

  const texto = textoPlano(
    [
      c.saludo(d.nombre),
      '',
      c.entrada,
      '',
      c.plazo,
      '',
      c.resumenTitular.toUpperCase(),
      `${c.campoUbicacion}: ${d.municipio}`,
      `${c.campoEtapa}: ${d.etapa}`,
      `${c.campoMensaje}: ${d.mensaje}`,
      '',
      c.adelantarTexto,
      d.enlaceWhatsapp,
    ],
    pie,
  )

  return {
    asunto: c.asunto,
    // El preheader repite el plazo y no el saludo: es la única línea que se ve
    // en la lista de la bandeja, y ahí lo que decide si se abre es el «cuándo».
    html: maqueta({ preheader: c.plazo, cuerpo, pie }),
    texto,
  }
}

/** Devuelve si salió. Quien llama no debe cambiar su resultado por esto. */
export async function enviarAcuse(d: DatosAcuse): Promise<boolean> {
  const { asunto, html, texto } = componerAcuse(d)
  return enviarCorreo({
    para: d.correo,
    asunto,
    html,
    texto,
    // Responder al acuse tiene que llegar al estudio, no al remitente técnico.
    responderA: pieDe(d.idioma).correo,
  })
}
