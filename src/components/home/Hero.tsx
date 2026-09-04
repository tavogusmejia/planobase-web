'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { mediaSrc } from '@/lib/utils'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/types'

const INTERVALO_MS = 5000

/**
 * Hero rotante. Cliente porque hay temporizador y controles.
 *
 * Diferencias con el carrusel de Wix, que era mudo y no llevaba a ninguna parte:
 * cada lámina muestra el nombre del proyecto, su año y su ciudad, y enlaza a su
 * ficha.
 *
 * Accesibilidad: si el sistema pide movimiento reducido, no rota sola y se
 * navega solo con los controles. Se detiene al pasar el cursor o al enfocar con
 * teclado, para que nadie pierda de vista lo que estaba leyendo, y hay un botón
 * explícito de pausa, que es lo que exige un carrusel automático.
 */
export function Hero({ projects }: { projects: Project[] }) {
  const t = useTranslations('home')
  const [activo, setActivo] = useState(0)
  const [pausado, setPausado] = useState(false)
  const [reduceMovimiento, setReduceMovimiento] = useState(false)
  const contenedor = useRef<HTMLElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const aplicar = () => setReduceMovimiento(mq.matches)
    aplicar()
    mq.addEventListener('change', aplicar)
    return () => mq.removeEventListener('change', aplicar)
  }, [])

  const total = projects.length
  const ir = useCallback(
    (i: number) => setActivo(((i % total) + total) % total),
    [total],
  )

  useEffect(() => {
    if (pausado || reduceMovimiento || total < 2) return
    const id = window.setInterval(
      () => setActivo((i) => (i + 1) % total),
      INTERVALO_MS,
    )
    return () => window.clearInterval(id)
  }, [pausado, reduceMovimiento, total])

  if (total === 0) return null

  const detener = () => setPausado(true)
  const reanudar = () => setPausado(false)

  return (
    <section
      ref={contenedor}
      aria-roledescription="carrusel"
      aria-label={t('heroEtiqueta')}
      onMouseEnter={detener}
      onMouseLeave={reanudar}
      onFocusCapture={detener}
      onBlurCapture={reanudar}
      className="relative h-[78svh] min-h-[30rem] w-full overflow-hidden bg-ink"
    >
      {projects.map((p, i) => {
        const visible = i === activo
        if (!p.portada) return null
        return (
          <div
            key={p.slug}
            aria-hidden={!visible}
            role="group"
            aria-roledescription="lámina"
            aria-label={`${i + 1} de ${total}: ${p.titulo}`}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none',
              visible ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
          >
            <Link
              href={`/proyectos/${p.slug}`}
              tabIndex={visible ? 0 : -1}
              className="block h-full w-full"
              aria-label={`${p.titulo}, ${p.anio}, ${p.ciudad}`}
            >
              <Image
                src={mediaSrc(p.portada.path)}
                alt={p.portada.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                placeholder="blur"
                blurDataURL={p.portada.blurDataURL}
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 px-gutter pb-16 lg:px-10 lg:pb-14">
                <div className="mx-auto max-w-[100rem] text-paper">
                  <h1 className="text-display">{p.titulo}</h1>
                  <Rule
                    draw={visible}
                    tone="paper"
                    className="mt-3 max-w-3xl text-paper/85"
                  >
                    {p.anio} &nbsp; {p.ciudad}
                  </Rule>
                </div>
              </div>
            </Link>
          </div>
        )
      })}

      {/* Controles. Van sobre la lámina, alineados a la derecha, en la misma
          línea de base que la cota para no inventar otro nivel de jerarquía. */}
      <div className="absolute inset-x-0 bottom-0 px-gutter pb-6 lg:px-10">
        <div className="mx-auto flex max-w-[100rem] items-center justify-end gap-4">
          {!reduceMovimiento && total > 1 ? (
            <button
              type="button"
              onClick={() => setPausado((v) => !v)}
              className="text-block text-paper/80 underline-offset-4 transition-opacity hover:text-paper hover:underline"
            >
              {pausado ? t('heroReanudar') : t('heroPausar')}
            </button>
          ) : null}

          <ul className="flex items-center gap-2">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <button
                  type="button"
                  onClick={() => ir(i)}
                  aria-label={`${t('heroIrA')} ${p.titulo}`}
                  aria-current={i === activo ? 'true' : undefined}
                  className={cn(
                    'block h-6 w-6 p-2.5 transition-colors',
                    // El área táctil es de 24px; la marca visible, de 1px.
                    // Se dibuja con un pseudo-elemento vía borde.
                    'border-b',
                    i === activo
                      ? 'border-paper'
                      : 'border-paper/40 hover:border-paper/80',
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
