'use client'

import { useEffect } from 'react'
import { capturar } from '@/lib/atribucion'

/**
 * Recoge la procedencia de campaña en la página donde el anuncio aterriza, sea
 * cual sea.
 *
 * Va en el layout y no en los formularios porque el problema estaba justamente
 * fuera de los formularios: el anuncio lleva a un artículo del blog, la persona
 * navega, y para cuando llega a `/contacto` la URL ya está limpia. Si nadie mira
 * la primera URL, no hay nada que recordar.
 *
 * **Lee `window.location.search` y no `useSearchParams()`**, y no es un
 * descuido. `useSearchParams()` obliga a la página entera a salirse del
 * prerenderizado estático o a envolverse en un `<Suspense>`; leer la URL dentro
 * de un efecto no le hace nada al renderizado. En un layout que envuelve todo
 * el sitio, esa diferencia es la de que todas las páginas se sigan sirviendo
 * desde el build o no.
 *
 * **Basta con capturar al montar.** Los `utm_` solo aparecen en la URL con la
 * que se entra al sitio, y entrar al sitio es siempre una carga completa —una
 * navegación interna nunca los añade—. Un efecto sin dependencias, una vez.
 *
 * No pinta nada. Existe solo por el efecto, que es la única razón aceptable
 * para un componente que devuelve `null`.
 */
export function Atribucion() {
  useEffect(() => {
    capturar()
  }, [])

  return null
}
