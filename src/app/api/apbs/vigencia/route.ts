import { NextResponse } from 'next/server'
import { configLeads } from '@/lib/env'
import {
  DATOS_CON_VIGENCIA,
  diasParaVencer,
  estaVencido,
} from '@content/apbs/vigencia'

/**
 * Tercera capa del aviso de caducidad de APBS. Corre a diario por cron.
 *
 * Las otras dos —la herramienta que se degrada sola y el build que falla— ya
 * garantizan que nunca se publique una cifra vieja. Esta capa no protege: solo
 * avisa **antes** de que pase, para que la corrección se haga con calma en
 * diciembre y no a la carrera el 2 de enero.
 *
 * Corre a diario pero **no escribe a diario**. Avisa en hitos —treinta, quince,
 * siete, tres y un día antes— y después todos los días mientras siga vencido,
 * porque eso ya es urgente. Un aviso diario durante un mes se vuelve ruido y
 * se archiva sin leer, que es exactamente lo que hay que evitar.
 *
 * Es un route handler y no una Server Action porque lo dispara un cron, no una
 * persona. Va fuera del middleware de idioma: el matcher ya excluye `/api`.
 */
export const dynamic = 'force-dynamic'

/** Días antes del vencimiento en los que se escribe. */
const HITOS = [30, 15, 7, 3, 1, 0]

export async function GET(request: Request) {
  // El cron de Vercel manda este encabezado. Sin secreto configurado, el
  // endpoint no responde: es preferible un cron mudo a uno que cualquiera
  // pueda disparar.
  const secreto = process.env.CRON_SECRET
  const autorizacion = request.headers.get('authorization')
  if (!secreto || autorizacion !== `Bearer ${secreto}`) {
    return new NextResponse('No autorizado', { status: 401 })
  }

  const hoy = new Date()
  const aAvisar = DATOS_CON_VIGENCIA.filter(({ dato }) => {
    const dias = diasParaVencer(dato, hoy)
    return estaVencido(dato, hoy) || HITOS.includes(dias)
  })

  if (aAvisar.length === 0) {
    return NextResponse.json({ avisos: 0 })
  }

  const vencidos = aAvisar.filter(({ dato }) => estaVencido(dato, hoy))
  const asunto =
    vencidos.length > 0
      ? `APBS · ${vencidos.length} dato(s) VENCIDOS — la calculadora está mal`
      : 'APBS · hay un dato por vencer'

  const cuerpo = aAvisar
    .map(({ nombre, dato }) => {
      const dias = diasParaVencer(dato, hoy)
      const estado =
        dias < 0
          ? `VENCIDO hace ${-dias} días. El build del sitio está fallando.`
          : dias === 0
            ? 'Vence hoy.'
            : `Vence en ${dias} días.`
      return [
        nombre,
        estado,
        `Valor actual: ${JSON.stringify(dato.valor)} (${dato.anio})`,
        `Vigente hasta: ${dato.vigenteHasta}`,
        `Fuente: ${dato.fuente}`,
        dato.url,
        '',
        dato.comoActualizar,
        '',
        'Se corrige en content/apbs/vigencia.ts y se despliega.',
      ].join('\n')
    })
    .join('\n\n———\n\n')

  const { notificarA, notificarDesde, resendApiKey } = configLeads()
  if (!resendApiKey || !notificarA) {
    // Sin correo configurado no se pierde el aviso: queda en los registros de
    // la función, y el build sigue siendo la red que de verdad atrapa esto.
    console.warn('[apbs] Sin Resend. Aviso de vigencia:\n' + cuerpo)
    return NextResponse.json({ avisos: aAvisar.length, enviado: false })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: notificarDesde,
        to: [notificarA],
        subject: asunto,
        text: cuerpo,
      }),
    })
    if (!res.ok) {
      console.error('[apbs] Resend respondió', res.status, await res.text())
      return NextResponse.json({ avisos: aAvisar.length, enviado: false })
    }
  } catch (error) {
    console.error('[apbs] No se pudo avisar:', error)
    return NextResponse.json({ avisos: aAvisar.length, enviado: false })
  }

  return NextResponse.json({ avisos: aAvisar.length, enviado: true })
}
