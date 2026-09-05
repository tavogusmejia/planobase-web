/**
 * La única puerta por la que sale un correo del sitio.
 *
 * Antes la llamada a Resend vivía dentro de `leads.ts`, junto a la lógica de
 * recepción de leads. Con dos correos más —el acuse al cliente y la
 * confirmación de reserva— eso serían tres sitios repitiendo la misma petición,
 * el mismo manejo de error y el mismo registro en el log.
 *
 * **Sin SDK, a propósito.** Es una petición HTTP con una clave en la cabecera.
 * Una dependencia más en el árbol de producción para eso no se paga sola.
 *
 * La función **nunca lanza**. Devuelve si el correo salió, y quien la llama
 * decide qué hacer con eso. Un correo que falla no puede tumbar el envío de un
 * formulario: el lead ya está guardado y perderlo por un fallo de Resend sería
 * cambiar un problema pequeño por el más caro del sitio.
 */
import { configLeads } from '@/lib/env'

export type Adjunto = {
  nombre: string
  /** Contenido ya en texto; se codifica aquí. */
  contenido: string
  tipo: string
}

export type Correo = {
  para: string
  asunto: string
  html: string
  texto: string
  /** A dónde va la respuesta si el destinatario le da a «responder». */
  responderA?: string
  adjuntos?: Adjunto[]
}

export async function enviarCorreo(c: Correo): Promise<boolean> {
  const { notificarDesde, resendApiKey } = configLeads()
  if (!resendApiKey) return false

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: notificarDesde,
        to: [c.para],
        subject: c.asunto,
        html: c.html,
        text: c.texto,
        ...(c.responderA ? { reply_to: c.responderA } : {}),
        ...(c.adjuntos?.length
          ? {
              attachments: c.adjuntos.map((a) => ({
                filename: a.nombre,
                content: Buffer.from(a.contenido, 'utf8').toString('base64'),
                content_type: a.tipo,
              })),
            }
          : {}),
      }),
    })

    if (!res.ok) {
      console.error('[correo] Resend respondió', res.status, await res.text())
      return false
    }
    return true
  } catch (error) {
    console.error('[correo] No se pudo enviar:', error)
    return false
  }
}
