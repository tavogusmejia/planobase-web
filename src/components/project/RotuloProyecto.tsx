'use client'

import { useCallback, useState } from 'react'
import { Rule } from '@/components/ui/Rule'
import { cn } from '@/lib/utils'

/**
 * El rótulo de una imagen de proyecto. Uno solo para todo el sitio: grid del
 * portafolio, proyectos relacionados y destacados de la home usan este y no
 * otro, para que un proyecto se comporte igual en cualquier pantalla donde
 * aparezca.
 *
 * El estado va aparte de la pintura a propósito: quien dispara el revelado es
 * la imagen —la caja entera— y quien lo muestra es el rótulo, que vive dentro.
 * `useRotulo` se pone en el contenedor, `RotuloProyecto` en el pie.
 */
export function useRotulo() {
  const [revelado, setRevelado] = useState(false)
  /** Cambia en cada paso del cursor. Sirve de `key`: remontar es lo que vuelve
   *  a disparar el trazo de la cota y el golpe del texto. */
  const [pulso, setPulso] = useState(0)

  const activar = useCallback(() => {
    setRevelado(true)
    setPulso((n) => n + 1)
  }, [])

  return {
    revelado,
    pulso,
    /** Se reparten sobre el elemento que contiene la imagen. `onFocus` porque
     *  con teclado también hay que poder leer de qué proyecto se trata. */
    disparadores: {
      onMouseEnter: activar,
      onFocus: activar,
    },
  }
}

export function RotuloProyecto({
  titulo,
  medida,
  revelado,
  pulso,
  tono = 'paper',
  className,
}: {
  titulo: string
  /** Lo que carga la línea de cota: año, ciudad, naturaleza. */
  medida: React.ReactNode
  revelado: boolean
  pulso: number
  tono?: 'paper' | 'ink'
  className?: string
}) {
  return (
    <div
      data-revelado={revelado}
      className={cn(
        'rotulo',
        tono === 'paper' ? 'text-paper' : 'text-ink',
        className,
      )}
    >
      {/* `key` en los dos: al cambiar el pulso se remontan y sus animaciones
          arrancan de cero, que es lo que se quiere en cada nuevo paso. */}
      <h3 key={`t${pulso}`} className="text-h4 leading-tight">
        <span className="rotulo-texto">{titulo}</span>
      </h3>
      <Rule
        key={`r${pulso}`}
        draw
        tone={tono === 'paper' ? 'paper' : 'accent'}
        className={cn('mt-2', tono === 'paper' ? 'text-paper' : 'text-muted')}
      >
        {medida}
      </Rule>
    </div>
  )
}
