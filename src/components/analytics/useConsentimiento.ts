'use client'

import { useEffect, useState } from 'react'
import { alCambiar, leer, type Consentimiento } from '@/lib/consentimiento'

/**
 * El estado del consentimiento, ya resuelto en el navegador.
 *
 * Tres estados y no dos, y la diferencia importa: `'cargando'` es «todavía no
 * se sabe» y `'sin decidir'` es «se miró y no hay nada guardado». Confundirlos
 * es el error que hace parpadear el aviso en cada carga para quien ya respondió,
 * o peor, que se pinte en el servidor y React se queje de que el HTML no
 * coincide.
 *
 * Se llama `use…` y no `usar…` como el resto del proyecto: el prefijo `use` no
 * es una convención de estilo, es lo que hace que React y el linter lo
 * reconozcan como hook y le apliquen sus reglas. Con el nombre en español, las
 * llamadas condicionales a hooks dejarían de detectarse.
 *
 * Por eso arranca siempre en `'cargando'` aunque leerlo sea instantáneo: el
 * primer render tiene que ser idéntico al del servidor, donde `localStorage` no
 * existe.
 */
export type EstadoConsentimiento =
  | { fase: 'cargando' }
  | { fase: 'sin decidir' }
  | { fase: 'decidido'; valor: Consentimiento }

export function useConsentimiento(): EstadoConsentimiento {
  const [estado, setEstado] = useState<EstadoConsentimiento>({ fase: 'cargando' })

  useEffect(() => {
    const resolver = () => {
      const valor = leer()
      setEstado(valor ? { fase: 'decidido', valor } : { fase: 'sin decidir' })
    }
    resolver()
    return alCambiar(resolver)
  }, [])

  return estado
}

/** Atajo para quien solo necesita saber si puede cargar sus etiquetas. */
export function useMedicionPermitida(): boolean {
  const estado = useConsentimiento()
  return estado.fase === 'decidido' && estado.valor.medicion === 'aceptado'
}
