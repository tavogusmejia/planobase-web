'use server'

import { after } from 'next/server'
import { headers } from 'next/headers'
import { createHash } from 'node:crypto'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { configLeads, haySupabaseAdmin } from '@/lib/env'
import {
  reservaSchema,
  type ReservaInput,
  type ReservaResult,
} from '@/lib/agenda/schema'
import { franjasPosibles } from '@/lib/agenda/franjas'
import { verificarSello } from '@/lib/formulario/sello'
import { enviarConfirmacionReserva } from '@/lib/correo/reserva'
import { CITAS, TIPO_POR_DEFECTO, esTipoCita } from '@content/site'
import { politicaDatos } from '@content/legal'

/**
 * Crear una reserva de asesoría.
 *
 * Hasta ahora la reserva se cerraba por WhatsApp y necesitaba a alguien
 * despierto al otro lado. Con tráfico de campaña eso falla justo cuando más
 * importa: a las once de la noche de un viernes, que es cuando alguien decide
 * que quiere construir.
 *
 * **Dos cosas no se comprueban aquí a propósito, porque aquí no se pueden
 * comprobar bien:**
 *
 * 1. **Que la franja siga libre.** Entre mirar y escribir caben otras
 *    peticiones. Lo garantiza el índice único de la tabla, y este código se
 *    limita a traducir el rechazo de la base en un mensaje que se entienda.
 * 2. **Que la franja exista.** Eso sí se valida, y contra el mismo cálculo que
 *    generó la lista: sin ello, alguien puede mandar cualquier instante y
 *    reservar un domingo a las tres de la mañana.
 */

/** Huella de la IP, nunca la IP. Mismo criterio que en `leads.ts`. */
function huellaIp(ip: string, sal: string): string | null {
  if (!sal) return null
  return createHash('sha256').update(`${ip}${sal}`).digest('hex')
}

export async function crearReserva(raw: unknown): Promise<ReservaResult> {
  const parsed = reservaSchema.safeParse(raw)

  if (!parsed.success) {
    const errores: Partial<Record<keyof ReservaInput, string>> = {}
    for (const issue of parsed.error.issues) {
      const campo = issue.path[0] as keyof ReservaInput | undefined
      if (campo && !errores[campo]) errores[campo] = issue.message
    }
    return { ok: false, errores }
  }

  const r = parsed.data

  // Honeypot: se responde bien a propósito, para no darle señal al bot.
  if (r.sitioWeb) return { ok: true, inicio: r.inicio }

  /* Tiempo mínimo de llenado, con el mismo criterio que en `leads.ts`: al
     honeypot solo cae un bot y se le finge un «ok»; a esto puede caer una
     persona, así que el error es visible y el formulario le enseña la vía de
     WhatsApp. Aquí importa doble — fingir un «ok» dejaría a alguien creyendo
     que tiene una cita agendada que no existe, y presentándose a una llamada a
     la que nadie va a entrar.

     Lo que garantiza y lo que no, en `src/lib/formulario/sello.ts`. */
  if (verificarSello(r.selloTiempo) !== 'ok') {
    return { ok: false, errores: {}, general: 'general.tiempo' }
  }

  if (!haySupabaseAdmin()) {
    return { ok: false, errores: {}, general: 'general.sinAgenda' }
  }

  /* La franja tiene que ser una de las que el sistema ofrece. Se compara contra
     el mismo cálculo que produjo la lista, así que un instante inventado —o uno
     que ya quedó fuera de la antelación mínima mientras el visitante llenaba el
     formulario— no pasa. */
  /* Del navegador solo viaja el tipo, y la duración y el precio se resuelven
     aquí contra el catálogo. **Nunca al revés.** Si esos dos números pudieran
     llegar en la petición, alguien mandaría `duracionMin: 1` y se colaría entre
     dos citas, o `precioCOP: 0` y agendaría la de pago gratis. */
  const tipo = esTipoCita(r.tipo) ? r.tipo : TIPO_POR_DEFECTO
  const cita = CITAS[tipo]

  const inicio = new Date(r.inicio)
  const valida = franjasPosibles(cita.duracionMin).some(
    (f) => new Date(f.inicio).getTime() === inicio.getTime(),
  )
  if (!valida) {
    return { ok: false, errores: {}, general: 'general.franjaNoValida' }
  }

  const fin = new Date(inicio.getTime() + cita.duracionMin * 60_000)
  const idioma = r.idioma === 'en' ? 'en' : 'es'

  const h = await headers()
  const ip =
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ?? h.get('x-real-ip') ?? ''
  const { salIp } = configLeads()

  const { data, error } = await supabaseAdmin()
    .from('reservas')
    .insert({
      nombre: r.nombre,
      correo: r.correo,
      whatsapp: r.whatsapp,
      mensaje: r.mensaje ?? null,
      inicio: inicio.toISOString(),
      fin: fin.toISOString(),
      tipo,
      precio_cop: cita.precioCOP,
      /* Mientras el cobro se cierra a mano por WhatsApp, esto es lo que le dice
         al estudio qué citas están cobradas. La gratuita no tiene estado de
         pago porque no hay nada que cobrar. */
      pago_estado: cita.precioCOP > 0 ? 'pendiente' : null,
      locale: idioma,
      origen: 'web/agendar',
      utm_source: r.utmSource ?? null,
      utm_campaign: r.utmCampaign ?? null,
      ip_hash: huellaIp(ip, salIp),
    })
    .select('id')
    .single()

  if (error) {
    /* Alguien se quedó con la franja mientras esta persona llenaba el
       formulario. No es un fallo del sistema sino una carrera perdida, y merece
       un mensaje distinto — el genérico haría pensar que el sitio está roto.

       **Son dos códigos y hay que reconocer los dos.** `23P01` es la violación
       de la restricción de exclusión, que es la que vigila el solape desde que
       hay dos duraciones. `23505` era el del índice único que la precedió, y se
       mantiene por una razón práctica: esta migración se pega a mano en
       Supabase, así que entre desplegar el código y aplicarla hay un rato en el
       que la base todavía responde con el viejo. Quitarlo dejaría ese hueco sin
       mensaje bueno. */
    if (error.code === '23P01' || error.code === '23505') {
      return { ok: false, errores: {}, general: 'general.franjaTomada' }
    }
    console.error('[reservas] No se pudo insertar:', error.message)
    return { ok: false, errores: {}, general: 'general.fallo' }
  }

  /* El visitante no espera al correo. Y si el correo falla, la reserva sigue
     hecha: está en la base y el estudio la ve. Al revés —devolver error porque
     no salió un correo— perdería una cita ya ganada. */
  after(async () => {
    try {
      const salio = await enviarConfirmacionReserva({
        idioma,
        /* El UID del calendario. Lleva el dominio porque la RFC lo pide con
           forma de dirección, y se deriva del id de la reserva para que un
           reenvío actualice el evento en vez de duplicarlo. */
        id: `reserva-${data.id}@planobase.co`,
        nombre: r.nombre,
        correo: r.correo,
        inicio,
        fin,
        /* Nulo hasta que existan las credenciales de Google (X-02). La
           plantilla ya lo contempla y avisa de que el enlace llega aparte. */
        enlace: null,
      })
      if (!salio) console.error('[reservas] La confirmación no salió.')
    } catch (e) {
      console.error('[reservas] La confirmación lanzó:', e)
    }

    await avisarAlEstudio(r, inicio)
  })

  return { ok: true, inicio: inicio.toISOString() }
}

/**
 * El aviso al estudio.
 *
 * En texto plano y con lo justo, como el de los leads: lo lee alguien en el
 * móvil y lo que necesita saber es cuándo, con quién y por dónde responderle.
 */
async function avisarAlEstudio(r: ReservaInput, inicio: Date): Promise<void> {
  const { notificarA, notificarDesde, resendApiKey } = configLeads()
  if (!resendApiKey || !notificarA) return

  const cuando = new Intl.DateTimeFormat('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Bogota',
  }).format(inicio)

  const cuerpo = [
    `${r.nombre} reservó asesoría`,
    `Cuándo: ${cuando} (hora de Colombia)`,
    '',
    r.mensaje ?? '(sin mensaje)',
    '',
    `Correo:   ${r.correo}`,
    `WhatsApp: ${r.whatsapp}`,
    `Responder por WhatsApp: https://wa.me/${r.whatsapp.replace(/\D/g, '')}`,
    '',
    `Política aceptada: ${politicaDatos.vigenteDesde}`,
  ].join('\n')

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: notificarDesde,
        to: [notificarA],
        reply_to: r.correo,
        subject: `Reserva · ${r.nombre} · ${cuando}`,
        text: cuerpo,
      }),
    })
  } catch (e) {
    console.error('[reservas] No se pudo avisar al estudio:', e)
  }
}

