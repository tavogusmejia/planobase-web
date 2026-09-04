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
}: {
  /** Lo que va al final de la línea: año, ciudad, lo que la línea mide. */
  children?: ReactNode
  draw?: boolean
  className?: string
  tone?: 'accent' | 'line' | 'paper'
}) {
  const color =
    tone === 'accent'
      ? 'bg-accent'
      : tone === 'paper'
        ? 'bg-paper/60'
        : 'bg-line'

  return (
    <div className={cn('flex items-baseline gap-4', className)}>
      <span
        aria-hidden
        className={cn(
          'rule mt-[-0.35em] min-w-8 flex-1',
          color,
          draw && 'rule--draw',
        )}
      />
      {children ? (
        <span className="text-block shrink-0 tabular-nums">{children}</span>
      ) : null}
    </div>
  )
}
