'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Pide el sello de tiempo al montar y lo deja listo para el envío.
 *
 * Lo usan los dos formularios, y vive aquí en vez de repetido en cada uno
 * porque las dos veces que algo así se escribió suelto salió distinto.
 *
 * **Se pide una vez, al pintar.** Ese instante es el que la Server Action
 * compara con el del envío, así que renovarlo mientras la persona escribe
 * anularía la medición: el sello volvería a nacer y el tiempo transcurrido
 * volvería a cero.
 *
 * **Sí se renueva después de un rechazo.** Si la acción responde que el envío
 * llegó demasiado pronto —o que el sello ya no vale—, el formulario llama a
 * `renovar()` y el segundo intento entra con un sello fresco. Sin esto, quien
 * cayera en el filtro se quedaría atascado para siempre en la misma página.
 *
 * **Si la petición falla, se reintenta una vez y ya.** Un tercer intento no
 * arregla nada que no arregle el segundo, y mientras tanto la persona está
 * mirando un formulario que parece listo. Sin sello el envío sale igual: lo
 * rechazará el servidor con un mensaje visible que ofrece WhatsApp, que es una
 * salida, y no en silencio.
 *
 * `undefined` significa las dos cosas —todavía no llegó, o no se pudo— y está
 * bien que las signifique: quien lo usa no tiene ninguna decisión distinta que
 * tomar en un caso y en el otro.
 */
export function useSelloTiempo(): {
  sello: string | undefined
  renovar: () => void
} {
  const [sello, setSello] = useState<string | undefined>(undefined)

  /* Evita que dos peticiones se pisen: un rechazo puede llegar mientras la
     renovación anterior sigue en vuelo. */
  const enVuelo = useRef(false)

  const pedir = useCallback(async () => {
    if (enVuelo.current) return
    enVuelo.current = true
    try {
      for (let intento = 0; intento < 2; intento += 1) {
        try {
          const r = await fetch('/api/formulario/sello', { cache: 'no-store' })
          if (!r.ok) continue
          const d = (await r.json()) as { sello: string | null }
          if (d.sello) {
            setSello(d.sello)
            return
          }
          /* `null` es «no hay secreto configurado», no un fallo. Reintentar
             daría otro `null`. */
          setSello(undefined)
          return
        } catch {
          // Se reintenta una vez; si tampoco, se sale sin sello.
        }
      }
    } finally {
      enVuelo.current = false
    }
  }, [])

  useEffect(() => {
    void pedir()
  }, [pedir])

  const renovar = useCallback(() => {
    void pedir()
  }, [pedir])

  return { sello, renovar }
}
