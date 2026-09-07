import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { haySupabaseAdmin } from '@/lib/env'
import { franjasLibres, franjasPosibles, type Franja } from '@/lib/agenda/franjas'
import { CITAS, TIPO_POR_DEFECTO, esTipoCita } from '@content/site'
import { VENTANA_DIAS } from '@content/agenda'
import { ocupadosDe } from '@/lib/google/calendario'

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

export async function GET(peticion: Request) {
  /* El tipo llega por query porque las franjas de quince minutos no son las
     mismas que las de una hora, y la página tiene que poder pedir unas u otras
     sin recargar.

     Un valor raro cae al tipo por defecto en vez de devolver 400. Es la misma
     regla que el resto de esta ruta: aquí no se devuelve nunca un error. Quien
     llega con `?tipo=cualquiercosa` —un enlace mal copiado, un rastreador— tiene
     que ver la agenda de la primera llamada, no una página rota justo donde
     aterriza la pauta. */
  const crudo = new URL(peticion.url).searchParams.get('tipo')
  const tipo = esTipoCita(crudo) ? crudo : TIPO_POR_DEFECTO
  const posibles = franjasPosibles(CITAS[tipo].duracionMin)

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
      /* `fin` además de `inicio`: con dos duraciones lo que ocupa la agenda es
         el tramo entero, no el instante en que empieza. */
      .select('inicio, fin')
      .neq('estado', 'cancelada')
      /* Se filtra por `fin` y no por `inicio`: una cita que empezó hace media
         hora y todavía no ha terminado sigue ocupando, y con `inicio >= ahora`
         se quedaba fuera de la consulta. Con citas de quince minutos casi nunca
         se notaba; con una hora, sí. */
      .gte('fin', desde)
      .lte('inicio', hasta)

    if (error) {
      console.error('[agenda] No se pudieron leer las reservas:', error.message)
      return NextResponse.json(
        { franjas: [], hayAgenda: false },
        { headers: { 'Cache-Control': 'no-store' } },
      )
    }

    const ocupados = (data ?? []).map((r) => ({
      inicio: r.inicio as string,
      fin: r.fin as string,
    }))

    /* Y lo que ocupa el calendario real de Gustavo, que es lo que la base no
       puede saber. Hasta ahora la agenda solo conocía las citas que ella misma
       había creado, así que si había una reunión a las diez el sitio seguía
       ofreciendo las diez.

       Si Google no contesta esto devuelve una lista vacía y se sigue con lo que
       hay en la base — que es exactamente el comportamiento de antes, ni mejor
       ni peor. No ofrecer nada sería peor: una hora ocupada cuesta un correo
       para moverla; una agenda en blanco cuesta el clic del anuncio. */
    const enGoogle = await ocupadosDe(new Date(desde), new Date(hasta))

    return NextResponse.json(
      {
        franjas: franjasLibres(posibles, [...ocupados, ...enGoogle]),
        hayAgenda: true,
      },
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
