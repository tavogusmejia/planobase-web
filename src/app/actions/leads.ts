'use server'

import { createHash } from 'node:crypto'
import { appendFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { headers } from 'next/headers'
import { after } from 'next/server'
import { configLeads, haySupabaseAdmin } from '@/lib/env'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { leadSchema, type LeadInput, type LeadResult } from '@/lib/schemas'
import { contacto, FUERA_DE_COLOMBIA } from '@content/site'
import { enviarAcuse } from '@/lib/correo/acuse'
import { politicaDatos } from '@content/legal'
import { etiquetaMunicipio } from '@content/apbs/divipola'

/**
 * Recepción de leads del formulario de contacto.
 *
 * Es una Server Action: la escritura nunca sale del servidor y la clave de
 * servicio de Supabase jamás cruza al navegador.
 *
 * Antes esto escribía a `.leads/leads.jsonl` con `appendFile`. En Vercel el
 * sistema de archivos es de solo lectura, así que el `mkdir` lanzaba, caía al
 * catch y el visitante leía «No pudimos registrar tu mensaje» — con el sitio
 * prometiendo respuesta en una hora en tres páginas distintas. Cada envío
 * perdido era un encargo que nadie supo que tocó la puerta.
 *
 * Ahora hay una cascada, en este orden:
 *
 *   1. Insertar en `leads`.
 *   2. Si el insert falla, se intenta el correo igualmente; si el correo sale,
 *      se responde `ok`, porque el lead ya llegó a un humano, que es lo único
 *      que importa a las 11 de la noche de un viernes.
 *   3. Si fallan los dos, se registra en el log y se le ofrece WhatsApp.
 *
 * El respaldo en disco se conserva solo fuera de producción: sirve para
 * desarrollar sin Supabase y nunca se ejecuta en Vercel.
 */

const VENTANA_MS = 10 * 60 * 1000
const MAX_POR_VENTANA = 5

type RegistroLead = {
  nombre: string
  correo: string
  whatsapp: string
  municipio: string
  etapa: string
  mensaje: string
  declaracion: boolean
  autorizacion: boolean
  /** Qué política aceptó. Sin esto la prueba se cae cuando la política cambie. */
  politica_vigente_desde: string
  locale: string
  origen: string
  utm_source: string | null
  utm_campaign: string | null
  promo: string | null
  ip_hash: string | null
  user_agent: string | null
}

/**
 * Huella de la IP, nunca la IP. El límite de envíos necesita distinguir
 * clientes, no identificarlos, y guardar la dirección de quien rellena un
 * formulario de captación es dato personal bajo la Ley 1581 sin ninguna
 * contrapartida. Sin sal configurada no se guarda nada: un sha256 de una IPv4
 * es reversible por fuerza bruta en segundos.
 */
/**
 * El formulario envía el código DANE; en la base y en el correo va el nombre
 * con su departamento.
 *
 * El departamento no es adorno: hay nombres de municipio repetidos, y quien
 * abre el correo a las once de la noche necesita saber si «Puerto Colombia» es
 * el del Atlántico o el del Guainía antes de calcular cuánto cuesta ir.
 */
function nombreMunicipio(codigo: string): string {
  if (codigo === FUERA_DE_COLOMBIA.codigo) return FUERA_DE_COLOMBIA.nombre
  // El `?? codigo` es inalcanzable: el esquema ya validó contra el mismo
  // índice. Si algún día deja de serlo, es mejor guardar el código que perder
  // el lead.
  return etiquetaMunicipio(codigo) ?? codigo
}

/**
 * De dónde vino el lead, incluido el entorno.
 *
 * La clave de servicio de Supabase está configurada también en Preview, así
 * que un envío de prueba desde un despliegue de vista previa entra en la misma
 * tabla que un encargo real y, sin esto, es indistinguible de él. Cuando la
 * bandeja de leads sea la que alimente la pauta y el CRM, cada prueba
 * contaminaría el costo por lead.
 *
 * `VERCEL_ENV` lo pone la plataforma; fuera de Vercel no existe y el valor es
 * el de siempre.
 */
function origenActual(): string {
  const entorno = process.env.VERCEL_ENV
  return !entorno || entorno === 'production' ? 'web' : `web-${entorno}`
}

function huellaIp(ip: string, sal: string): string | null {
  if (!sal || ip === 'desconocida') return null
  return createHash('sha256').update(`${ip}${sal}`).digest('hex')
}

/**
 * Límite por huella. Sustituye al `Map` en memoria que había antes, que en
 * funciones efímeras y multirregión se reiniciaba en cada invocación y por tanto
 * no limitaba nada.
 *
 * Falla abierto a propósito: si la consulta no responde, se acepta el envío. Un
 * lead de más es un correo; un lead de menos es un encargo perdido.
 */
async function excedeLimite(huella: string | null): Promise<boolean> {
  if (!huella) return false
  try {
    const desde = new Date(Date.now() - VENTANA_MS).toISOString()
    const { count, error } = await supabaseAdmin()
      .from('leads')
      .select('id', { count: 'exact', head: true })
      .eq('ip_hash', huella)
      .gt('created_at', desde)

    if (error) return false
    return (count ?? 0) >= MAX_POR_VENTANA
  } catch {
    return false
  }
}

function cuerpoCorreo(r: RegistroLead): string {
  const digitos = r.whatsapp.replace(/\D/g, '')
  const procedencia = [r.utm_source, r.utm_campaign, r.promo]
    .filter(Boolean)
    .join(' · ')

  return [
    `${r.nombre} — ${r.municipio}`,
    `Etapa: ${r.etapa}`,
    '',
    r.mensaje,
    '',
    `Correo:   ${r.correo}`,
    `WhatsApp: ${r.whatsapp}`,
    `Responder por WhatsApp: https://wa.me/${digitos}`,
    procedencia ? `Procedencia: ${procedencia}` : '',
    '',
    'El sitio promete respuesta en una hora.',
  ]
    .filter((l) => l !== '')
    .join('\n')
}

/**
 * Avisa al estudio. Devuelve si el correo salió.
 *
 * Este es el correo **crítico**: si el insert en Supabase falla, es lo único
 * que evita que el lead se pierda, y por eso su resultado sí decide qué se le
 * responde al visitante. El acuse al cliente, en cambio, nunca lo decide.
 *
 * Sigue en texto plano y a propósito: lo lee alguien del estudio en el móvil,
 * dentro de la hora que promete el sitio, y una maqueta no le añade nada.
 */
async function notificar(r: RegistroLead): Promise<boolean> {
  const { notificarA, notificarDesde, resendApiKey } = configLeads()
  if (!resendApiKey || !notificarA) return false

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
        reply_to: r.correo,
        subject: `Lead web · ${r.nombre} · ${r.municipio}`,
        text: cuerpoCorreo(r),
      }),
    })
    if (!res.ok) {
      console.error('[leads] Resend respondió', res.status, await res.text())
      return false
    }
    return true
  } catch (error) {
    console.error('[leads] No se pudo notificar:', error)
    return false
  }
}

/**
 * Acusa recibo al visitante.
 *
 * **Best-effort, y su resultado no cambia nada.** El lead ya está guardado
 * cuando esto corre. Si falla, se anota en el log y se sigue: perder un encargo
 * porque no se pudo mandar un acuse sería cambiar el problema pequeño por el
 * caro. Por eso devuelve `void` y no un booleano — no hay decisión que tomar
 * con el resultado, y devolverlo invitaría a tomarla.
 */
async function acusarRecibo(r: RegistroLead, idioma: string): Promise<void> {
  try {
    const salio = await enviarAcuse({
      idioma,
      nombre: r.nombre,
      correo: r.correo,
      municipio: r.municipio,
      etapa: r.etapa,
      mensaje: r.mensaje,
      enlaceWhatsapp: `https://wa.me/${contacto.whatsapp}`,
    })
    if (!salio) console.error('[leads] El acuse al cliente no salió.')
  } catch (error) {
    console.error('[leads] El acuse al cliente lanzó:', error)
  }
}

/** Respaldo de desarrollo. Nunca corre en producción. */
async function respaldoLocal(r: RegistroLead): Promise<void> {
  if (process.env.NODE_ENV === 'production') return
  try {
    const dir = join(process.cwd(), '.leads')
    await mkdir(dir, { recursive: true })
    await appendFile(
      join(dir, 'leads.jsonl'),
      `${JSON.stringify({ recibido: new Date().toISOString(), ...r })}\n`,
      'utf8',
    )
  } catch {
    // El respaldo de desarrollo no puede tumbar un envío.
  }
}

export async function enviarLead(raw: unknown): Promise<LeadResult> {
  const parsed = leadSchema.safeParse(raw)

  if (!parsed.success) {
    const errores: Partial<Record<keyof LeadInput, string>> = {}
    for (const issue of parsed.error.issues) {
      const campo = issue.path[0] as keyof LeadInput | undefined
      if (campo && !errores[campo]) errores[campo] = issue.message
    }
    return { ok: false, errores }
  }

  const lead = parsed.data

  // Honeypot: un bot rellena todo, una persona no ve este campo.
  // Se responde "ok" a propósito, para no darle señal al bot.
  if (lead.sitioWeb) return { ok: true }

  const h = await headers()
  const ip =
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    h.get('x-real-ip') ??
    'desconocida'

  const { salIp } = configLeads()
  const huella = huellaIp(ip, salIp)

  const hayBase = haySupabaseAdmin()

  if (hayBase && (await excedeLimite(huella))) {
    return {
      ok: false,
      errores: {},
      general: 'general.limite',
    }
  }

  /* Cae a español, que es la regla del sitio: un envío sin idioma —de una
     prueba, de un cliente viejo— manda el acuse en español antes que no
     mandarlo. */
  const idioma = lead.idioma === 'en' ? 'en' : 'es'

  const registro: RegistroLead = {
    nombre: lead.nombre,
    correo: lead.correo,
    whatsapp: lead.whatsapp,
    municipio: nombreMunicipio(lead.codigoMunicipio),
    etapa: lead.etapa,
    mensaje: lead.mensaje,
    declaracion: lead.declaracion,
    autorizacion: lead.autorizacion,
    /* Se toma del contenido publicado y no se escribe a mano: si alguien
       actualiza la política y olvida este número, la prueba apuntaría a un
       texto que el titular nunca vio. */
    politica_vigente_desde: politicaDatos.vigenteDesde,
    /* La columna existía desde la primera migración y nadie la rellenaba, así
       que todos los leads figuraban en español. Ahora que el idioma viaja con
       el envío, se guarda: es lo que dice en qué idioma responderle. */
    locale: idioma,
    origen: origenActual(),
    utm_source: lead.utmSource ?? null,
    utm_campaign: lead.utmCampaign ?? null,
    promo: lead.promo ?? null,
    ip_hash: huella,
    user_agent: h.get('user-agent'),
  }

  await respaldoLocal(registro)

  if (!hayBase) {
    // Sin base configurada. En desarrollo ya quedó en disco; en producción el
    // correo es la última línea de defensa.
    if (process.env.NODE_ENV !== 'production') return { ok: true }
    if (await notificar(registro)) {
      after(async () => {
        await acusarRecibo(registro, idioma)
      })
      return { ok: true }
    }
    console.error('[leads] Sin Supabase y sin Resend: el lead se perdió.')
    return {
      ok: false,
      errores: {},
      general: 'general.fallo',
    }
  }

  const { error } = await supabaseAdmin().from('leads').insert(registro)

  if (!error) {
    /* El visitante no espera a que Resend responda: los dos correos van
       después de devolverle el «ok».

       Van en secuencia y no en paralelo a propósito: el aviso al estudio es el
       que sostiene la promesa de responder en una hora, así que sale primero
       aunque el acuse tarde o falle. */
    after(async () => {
      await notificar(registro)
      await acusarRecibo(registro, idioma)
    })
    return { ok: true }
  }

  console.error('[leads] No se pudo insertar:', error.message)

  if (await notificar(registro)) {
    after(async () => {
      await acusarRecibo(registro, idioma)
    })
    return { ok: true }
  }

  return {
    ok: false,
    errores: {},
    general: 'general.fallo',
  }
}
