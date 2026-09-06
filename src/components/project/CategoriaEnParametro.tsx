'use client'

import { useEffect } from 'react'
import { useRouter } from '@/i18n/navigation'

/**
 * Recoge las URLs viejas del portafolio con `?categoria=` y las manda a donde
 * vive hoy ese contenido.
 *
 * Durante un tiempo el filtro del portafolio fue un parámetro —
 * `/proyectos?categoria=educativo`— y después pasó a ser una página propia,
 * `/proyectos/categoria/educativo`. Mientras las dos formas convivieron, el
 * traslado lo hacía la propia página con un `permanentRedirect`; el precio era
 * que `/proyectos` leía `searchParams` y por eso se renderizaba en cada visita,
 * justo en la URL que más tráfico frío recibe. Aquí se paga ese traslado sin
 * ese precio: la página vuelve a salir del build y el parámetro se resuelve en
 * el navegador de quien llegue con él.
 *
 * **Lee `window.location.search` y no `useSearchParams()`**, igual que
 * `Atribucion` y por la misma razón: `useSearchParams()` sacaría la página del
 * prerenderizado o la obligaría a un `<Suspense>`, que es exactamente lo que
 * este componente existe para evitar. Leer la URL dentro de un efecto no le
 * hace nada al renderizado.
 *
 * Lo que NO hace, y conviene saberlo: esto es una redirección de cliente, no un
 * 301. Sirve a quien tenga la URL guardada o la haya recibido por mensaje, y
 * deja la dirección limpia en la barra; a un buscador le responde 200 con el
 * portafolio completo y su `canonical` a `/proyectos`, que consolida igual y no
 * inventa un duplicado. Un 301 de verdad necesita una regla con `has` en
 * `next.config.ts` —o el middleware—, y ninguno de los dos entra por aquí.
 *
 * No pinta nada. Existe solo por el efecto, que es la única razón aceptable
 * para un componente que devuelve `null`.
 */
export function CategoriaEnParametro({
  /** Las categorías que tienen página propia. El resto —las que todavía no
   *  tienen obra— no tienen adónde ir: se les quita el parámetro y se quedan
   *  en el portafolio completo, que es lo más cercano que existe. */
  conPagina,
}: {
  conPagina: readonly string[]
}) {
  const router = useRouter()

  /* La lista viaja al efecto como cadena y no como array: un array literal es
     nuevo en cada render y volvería a disparar el efecto sin que haya cambiado
     nada. */
  const lista = conPagina.join(',')

  useEffect(() => {
    const valor = new URLSearchParams(window.location.search).get('categoria')
    if (valor === null) return

    router.replace(
      lista.split(',').includes(valor)
        ? `/proyectos/categoria/${valor}`
        : '/proyectos',
    )
  }, [router, lista])

  return null
}
