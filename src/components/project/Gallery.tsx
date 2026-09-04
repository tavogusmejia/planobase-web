'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { mediaSrc } from '@/lib/utils'
import type { ProjectImage } from '@/lib/types'

/**
 * Galería con visor. Cliente porque hay estado e interacción real: abrir,
 * cerrar y navegar con teclado, que es el requisito de accesibilidad.
 */
export function Gallery({ images }: { images: ProjectImage[] }) {
  const t = useTranslations('proyecto')
  const [abierta, setAbierta] = useState<number | null>(null)
  const cerrarRef = useRef<HTMLButtonElement>(null)
  const disparador = useRef<HTMLButtonElement | null>(null)

  const cerrar = useCallback(() => {
    setAbierta(null)
    disparador.current?.focus()
  }, [])

  const mover = useCallback(
    (delta: number) =>
      setAbierta((i) =>
        i === null ? null : (i + delta + images.length) % images.length,
      ),
    [images.length],
  )

  useEffect(() => {
    if (abierta === null) return

    cerrarRef.current?.focus()
    const previo = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrar()
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previo
    }
  }, [abierta, cerrar, mover])

  const actual = abierta === null ? null : images[abierta]

  return (
    <>
      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
        {images.map((img, i) => (
          <li
            key={img.path}
            /* Las apaisadas ocupan las dos columnas: respeta la proporción real
               de la foto en vez de recortar todo a un cuadrado uniforme. */
            className={img.width > img.height * 1.7 ? 'sm:col-span-2' : ''}
          >
            <button
              type="button"
              onClick={(e) => {
                disparador.current = e.currentTarget
                setAbierta(i)
              }}
              aria-label={`${t('verImagen')}: ${img.alt}`}
              className="group block w-full cursor-zoom-in"
            >
              <div
                className="relative w-full overflow-hidden bg-mist"
                style={{ aspectRatio: `${img.width} / ${img.height}` }}
              >
                <Image
                  src={mediaSrc(img.path)}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={img.blurDataURL}
                  className="object-cover"
                />
              </div>
            </button>
          </li>
        ))}
      </ul>

      {actual ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={actual.alt}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/97"
        >
          <div className="flex items-center justify-between px-gutter py-4 text-paper lg:px-10">
            <span className="text-block tabular-nums">
              {(abierta ?? 0) + 1} / {images.length}
            </span>
            <button
              ref={cerrarRef}
              type="button"
              onClick={cerrar}
              className="text-block uppercase tracking-[0.08em] hover:opacity-70"
            >
              {t('cerrarImagen')}
            </button>
          </div>

          <div className="relative flex-1">
            <Image
              src={mediaSrc(actual.path)}
              alt={actual.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-between gap-6 px-gutter py-5 text-paper lg:px-10">
            <button
              type="button"
              onClick={() => mover(-1)}
              className="text-block uppercase tracking-[0.08em] hover:opacity-70"
            >
              {t('imagenAnterior')}
            </button>
            <p className="text-block hidden max-w-lg text-center text-paper/70 sm:block">
              {actual.alt}
            </p>
            <button
              type="button"
              onClick={() => mover(1)}
              className="text-block uppercase tracking-[0.08em] hover:opacity-70"
            >
              {t('imagenSiguiente')}
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
