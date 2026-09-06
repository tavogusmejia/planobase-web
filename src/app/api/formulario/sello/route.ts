import { NextResponse } from 'next/server'
import { emitirSello } from '@/lib/formulario/sello'

/**
 * Entrega el sello de tiempo con el que arrancan los dos formularios.
 *
 * **Por qué una petición y no un valor pintado en la página.** `/contacto` y
 * `/agendar` salen del build —son las páginas donde aterriza la pauta y tienen
 * que cargar de inmediato—, así que un sello escrito en el HTML sería el del
 * momento del build: para cualquier visita habría «pasado» semanas, y la
 * comprobación de tiempo mínimo daría siempre por buena. Un sello que siempre
 * pasa no es una comprobación, es un adorno. El sello tiene que nacer cuando
 * el formulario se pinta, y eso solo puede pasar después de cargar la página.
 *
 * El costo es una petición pequeña que no bloquea nada: sale de un efecto, no
 * detiene el renderizado y la persona puede empezar a escribir mientras va.
 *
 * `force-dynamic` y `no-store` no son ceremonia. Un sello cacheado —por el CDN,
 * por el navegador, por un proxy— es el mismo sello para todo el mundo durante
 * el tiempo que dure la caché, y a los pocos minutos vuelve a pasar siempre.
 *
 * Si no hay secreto configurado devuelve `{ sello: null }` y no un error: el
 * formulario tiene que seguir funcionando igual, sin comprobación de tiempo,
 * antes que dejar a nadie fuera.
 */
export const dynamic = 'force-dynamic'

export function GET(): NextResponse {
  return NextResponse.json(
    { sello: emitirSello() },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
