/**
 * Convierte la URL de vídeo de un proyecto en una URL que un `<iframe>` pueda
 * cargar de verdad.
 *
 * Hace falta porque las dos cosas no son la misma. `content/projects.ts` guarda
 * el enlace tal como se comparte —`https://youtu.be/cndXvEJLhJ0`—, y ese enlace
 * responde un 303 hacia `youtube.com/watch`, que a su vez manda
 * `X-Frame-Options: SAMEORIGIN`. El navegador se niega a pintarlo dentro de
 * nuestra página y la ficha del proyecto queda con un rectángulo gris vacío, sin
 * ningún error visible. Solo la forma `/embed/` es incrustable.
 *
 * La corrección va aquí y no en el dato porque `content/projects.ts` lo genera
 * `pnpm media` desde `wix-migration/01-content/projects.json`: cualquier arreglo
 * escrito a mano en el archivo generado se pierde en la siguiente ejecución, y
 * el próximo enlace que alguien pegue desde el botón «Compartir» de YouTube
 * volvería a llegar en la forma corta.
 *
 * Se usa `youtube-nocookie.com` en lugar de `youtube.com`: no planta cookies de
 * seguimiento hasta que el visitante le da al play. Mientras el sitio no tenga
 * banner de consentimiento ni política de datos, es la única forma decente de
 * mostrar el vídeo.
 *
 * Devuelve `null` cuando no reconoce el proveedor. Es deliberado: es mejor no
 * pintar nada que pintar un marco vacío que el visitante lee como un sitio roto.
 */
export function urlIncrustable(url: string | null): string | null {
  if (!url) return null

  let u: URL
  try {
    u = new URL(url)
  } catch {
    return null
  }

  const host = u.hostname.replace(/^www\./, '')
  const partes = u.pathname.split('/').filter(Boolean)

  // YouTube llega de cuatro formas y las cuatro se ven en la naturaleza: el
  // enlace corto del botón «Compartir», la URL de la barra de direcciones, el
  // código de inserción ya correcto, y los Shorts.
  if (
    host === 'youtu.be' ||
    host.endsWith('youtube.com') ||
    host.endsWith('youtube-nocookie.com')
  ) {
    const id =
      host === 'youtu.be'
        ? partes[0]
        : partes[0] === 'embed' || partes[0] === 'shorts'
          ? partes[1]
          : (u.searchParams.get('v') ?? undefined)

    if (!id) return null

    const destino = new URL(`https://www.youtube-nocookie.com/embed/${id}`)

    // El segundo en el que arranca el vídeo viaja como `t` en el enlace corto y
    // como `start` en el de inserción. Sin traducirlo, un vídeo compartido «en
    // el minuto dos» empieza desde cero.
    const t = u.searchParams.get('t') ?? u.searchParams.get('start')
    if (t) {
      const segundos = t.replace(/s$/, '')
      if (/^\d+$/.test(segundos)) destino.searchParams.set('start', segundos)
    }

    return destino.toString()
  }

  if (host === 'vimeo.com') {
    const id = partes[0]
    return id && /^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}` : null
  }

  if (host === 'player.vimeo.com') return u.toString()

  return null
}
