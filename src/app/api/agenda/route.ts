import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { haySupabaseAdmin } from '@/lib/env'
import { franjasLibres, franjasPosibles, type Franja } from '@/lib/agenda/franjas'
import { asesoria } from '@content/site'
import { VENTANA_DIAS } from '@content/agenda'

/**
 * Las franjas libres de la asesoría.
 *
 * **Existe para que `/agendar` siga siendo estática.** Esa página es donde
 * aterriza el tráfico de campaña y tiene que cargar de inmediato; si tuviera
 * que consultar la agenda para pintarse, dejaría de prerenderizarse y cada
 * visita ejecutaría una función. Así la página sale del build y el calendario
 * se pide después, cuando ya se está leyendo.
 *
 * Sin Supabase configurado devuelve una lista vacía y no un error: el
 * formulario enseña entonces la vía de WhatsApp, que es la que había antes y
 * sigue funcionando. Una agenda caída no puede dejar sin salida a quien quería
 * hablar con el estudio.
 */
export const dynamic = 'force-dynamic'

export async function GET() {
  const posibles = franjasPosibles(asesoria.duracionMin)

  if (!haySupabaseAdmin()) {
    return NextResponse.json(
      { franjas: [] as Franja[], hayAgenda: false },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  }

  try {
    /* Solo las de la ventana: la tabla acumula histórico y traerla entera
       sería pedir más cada mes por la misma respuesta. */
    const desde = new Date().toISOString()
    const hasta = new Date(Date.now() + (VENTANA_DIAS + 1) * 86_400_000).toISOString()

    const { data, error } = await supabaseAdmin()
      .from('reservas')
      .select('inicio')
      .neq('estado', 'cancelada')
      .gte('inicio', desde)
      .lte('inicio', hasta)

    if (error) {
      console.error('[agenda] No se pudieron leer las reservas:', error.message)
      return NextResponse.json(
        { franjas: [], hayAgenda: false },
        { headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const ocupadas = (data ?? []).map((r) => r.inicio as string)
    return NextResponse.json(
      { franjas: franjasLibres(posibles, ocupadas), hayAgenda: true },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  } catch (e) {
    console.error('[agenda] Fallo al calcular las franjas:', e)
    return NextResponse.json(
      { franjas: [], hayAgenda: false },
      { headers: { 'Cache-Control': 'no-store' } },
    )
  }
}
