'use server'

import { appendFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { headers } from 'next/headers'
import { leadSchema, type LeadInput, type LeadResult } from '@/lib/schemas'

/**
 * Recepción de leads del formulario de contacto.
 *
 * Es una Server Action: la escritura nunca sale del servidor y la clave de
 * servicio de Supabase jamás cruza al navegador.
 *
 * Estado actual: sin `SUPABASE_SERVICE_ROLE_KEY` configurada, el lead se guarda
 * en `.leads/leads.jsonl` (ignorado por git) para que nada se pierda durante la
 * revisión. Cuando Supabase esté cargado, este es el único archivo que cambia.
 */

/** Límite por IP: 5 envíos cada 10 minutos. En memoria, suficiente para una
 *  sola instancia; cuando haya varias, pasa a la base de datos. */
const ventanaMs = 10 * 60 * 1000
const maxPorVentana = 5
const golpes = new Map<string, number[]>()

function excedeLimite(ip: string): boolean {
  const ahora = Date.now()
  const previos = (golpes.get(ip) ?? []).filter((t) => ahora - t < ventanaMs)
  previos.push(ahora)
  golpes.set(ip, previos)
  return previos.length > maxPorVentana
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

  if (excedeLimite(ip)) {
    return {
      ok: false,
      errores: {},
      general:
        'Recibimos varios mensajes desde esta conexión. Espera unos minutos o escríbenos por WhatsApp.',
    }
  }

  const registro = {
    recibido: new Date().toISOString(),
    origen: 'web',
    ip,
    ...lead,
    sitioWeb: undefined,
  }

  try {
    // TODO — Supabase: insertar en `leads` y notificar por Resend.
    // Requiere SUPABASE_SERVICE_ROLE_KEY y RESEND_API_KEY en .env.local.
    const dir = join(process.cwd(), '.leads')
    await mkdir(dir, { recursive: true })
    await appendFile(
      join(dir, 'leads.jsonl'),
      JSON.stringify(registro) + '\n',
      'utf8',
    )

    if (!process.env.RESEND_API_KEY) {
      console.warn(
        '[leads] Sin RESEND_API_KEY: el lead quedó guardado en .leads/leads.jsonl pero no se envió notificación.',
      )
    }

    return { ok: true }
  } catch (error) {
    console.error('[leads] No se pudo registrar el lead:', error)
    return {
      ok: false,
      errores: {},
      general:
        'No pudimos registrar tu mensaje. Escríbenos por WhatsApp y lo resolvemos de inmediato.',
    }
  }
}
