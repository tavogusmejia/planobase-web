import { NextResponse } from 'next/server'
import { z } from 'zod'

/**
 * Donde aterrizan las Web Vitals.
 *
 * **Por qué una ruta propia y no Speed Insights ni Vercel Analytics.** Los dos
 * son productos que hay que contratar y configurar en una cuenta, y el sitio ya
 * tiene tareas paradas esperando cuentas de terceros —el calendario de Google,
 * la verificación del dominio en Resend—. Sumar otra habría convertido «medir
 * el rendimiento» en «medir el rendimiento cuando alguien abra una cuenta», que
 * es como no medirlo. Esto funciona en el primer despliegue, sin dar de alta
 * nada.
 *
 * **Por qué al log y no a una tabla.** Escribir en Supabase costaría una
 * inserción por visita en la base donde viven los leads, y haría falta una
 * migración que este trabajo no puede hacer. El log de ejecución de Vercel ya
 * existe, se consulta con filtros y guarda el histórico del plan. Cuando haya
 * volumen suficiente para querer agregados, el sitio donde se cambia es este
 * archivo: el navegador seguirá mandando lo mismo a la misma ruta.
 *
 * **Lo que no se registra, y es la mitad del diseño.** Ni IP, ni agente de
 * usuario, ni cabecera de país, ni nada de la petición. Solo lo que el cuerpo
 * trae: la ruta y los números. Con eso se responde la pregunta que importa
 * —«¿qué páginas van lentas?»— y no se recoge un dato personal que después
 * habría que declarar en la política, conservar, y borrar cuando alguien lo
 * pida.
 *
 * Sin `export const dynamic` porque un POST nunca se prerenderiza. Sí devuelve
 * 204 y cuerpo vacío: `sendBeacon` no lee la respuesta y mandarle algo es
 * gastar bytes en un canal que nadie escucha.
 */

/**
 * Se valida aunque nadie lo lea en caliente.
 *
 * Es una ruta pública sin autenticar: cualquiera puede mandarle lo que quiera,
 * y sin esquema una cadena de 2 MB acabaría entera dentro de una línea del log.
 * Los topes son la defensa; `strip` —el modo por defecto de Zod— tira lo que no
 * esté declarado.
 */
const cuerpoSchema = z.object({
  ruta: z.string().max(300),
  metricas: z
    .array(
      z.object({
        nombre: z.string().max(20),
        valor: z.number().finite(),
        calificacion: z.string().max(30),
        id: z.string().max(60),
      }),
    )
    .max(12),
})

export async function POST(peticion: Request): Promise<NextResponse> {
  try {
    /* Se lee como texto y se parsea a mano porque `sendBeacon` lo manda con
       `Content-Type: text/plain` —ver el comentario en `Rendimiento.tsx`— y
       `peticion.json()` no se fía del tipo declarado en todas las
       implementaciones. */
    const crudo = await peticion.text()
    if (crudo.length > 4000) return new NextResponse(null, { status: 204 })

    const datos = cuerpoSchema.safeParse(JSON.parse(crudo))
    if (!datos.success) return new NextResponse(null, { status: 204 })

    for (const m of datos.data.metricas) {
      /* Una línea por métrica y con prefijo, igual que el resto del proyecto
         (`[leads]`, `[reservas]`, `[agenda]`): es lo que permite filtrarlas en
         el panel de Vercel sin leer el resto del log.

         Volumen: seis líneas por visita. Si algún día molesta, el sitio donde
         se recorta es aquí —muestrear, o quedarse solo con LCP, CLS e INP—, no
         en el navegador: cambiarlo aquí no obliga a redesplegar el cliente. */
      console.log(
        `[vitals] ${m.nombre} ${m.valor} ${m.calificacion} ${datos.data.ruta}`,
      )
    }
  } catch {
    /* Un cuerpo que no es JSON. No se registra el error: sería exactamente lo
       que buscaría quien quisiera llenar el log a base de peticiones rotas. */
  }

  return new NextResponse(null, { status: 204 })
}
