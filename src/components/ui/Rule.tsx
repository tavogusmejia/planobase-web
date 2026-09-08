import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

/**
 * Línea de cota.
 *
 * El recurso estructural del sitio. En un plano, la línea fina que corre bajo
 * una medida es lo que la hace legible; aquí corre bajo el nombre del proyecto
 * y carga el año y la ciudad en su extremo. No es un divisor decorativo: si no
 * lleva dato, no va.
 *
 * `draw` anima el trazo una sola vez, al cargar el hero. Es el único movimiento
 * no provocado por el usuario en todo el sitio, y respeta `prefers-reduced-motion`.
 */
export function Rule({
  children,
  draw = false,
  className,
  tone = 'accent',
  wrap = false,
}: {
  /** Lo que va al final de la línea: año, ciudad, lo que la línea mide. */
  children?: ReactNode
  draw?: boolean
  className?: string
  tone?: 'accent' | 'line' | 'paper'
  /**
   * Deja que el dato se parta en varias líneas.
   *
   * Por defecto no lo hace, y es deliberado: lo que cota una línea suele ser
   * corto —«2015 · Bogotá»— y partir «Bogotá» en dos renglones se lee como un
   * error de maquetación. Pero un dato largo, sin esto, **desborda su columna y
   * se dibuja encima de la tarjeta vecina**: pasó con «Jefe de Fabricación ·
   * Construcciones en Estructura Metálica» en la retícula del equipo, que en
   * tres columnas se montaba sobre el nombre de al lado.
   */
  wrap?: boolean
}) {
  const color =
    tone === 'accent'
      ? 'bg-accent'
      : tone === 'paper'
        ? 'bg-paper/85'
        : 'bg-line'

  return (
    <div className={cn('flex items-baseline gap-4', className)}>
      <span
        aria-hidden
        className={cn(
          'rule mt-[-0.35em] min-w-8',
          /* Con el dato partido en varias líneas la cota se queda corta y fija:
             repartir el ancho a medias dejaría el texto en una columna de dos
             palabras. */
          wrap ? 'w-8 shrink-0' : 'flex-1',
          color,
          draw && 'rule--draw',
        )}
      />
      {children ? (
        <span
          className={cn(
            'text-block tabular-nums',
            wrap ? 'min-w-0 flex-1 text-right' : 'shrink-0',
          )}
        >
          {children}
        </span>
      ) : null}
    </div>
  )
}
