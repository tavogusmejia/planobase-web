'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'

/**
 * La retícula del portafolio, con un huevo de pascua.
 *
 * Quien recorra con el cursor TODAS las portadas y consiga tenerlas a color a
 * la vez, encuentra en el hueco de la última fila una invitación. Con siete
 * segundos de gracia por tarjeta, barrer la retícula entera es perfectamente
 * posible — pero hay que proponérselo.
 *
 * El hueco existe porque 23 proyectos no llenan una retícula de 2, 3 ni 4
 * columnas. Y 23 + 1 = 24, que sí es divisible entre las tres: el huevo encaja
 * exacto en todos los anchos, sin una sola regla de posicionamiento.
 *
 * Cómo se sabe que una portada sigue a color, sin temporizadores: el navegador
 * avisa. `transitionend` del filtro se dispara cuando el desvanecido a gris
 * termina, así que el estado y la animación no pueden desincronizarse — no hay
 * dos duraciones que mantener de acuerdo, ni `setTimeout` que pueda sobrevivir
 * a una tarjeta desmontada. Al entrar el cursor también hay un `transitionend`,
 * pero entonces el cursor está dentro y se ignora.
 */

type Reticula = { pintar: (slug: string, aColor: boolean) => void }

/** Lo que `ProjectCard` reparte sobre su enlace. Vacío fuera de la retícula. */
type Manejadores = {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onTransitionEnd?: (e: React.TransitionEvent) => void
}

const Contexto = createContext<Reticula | null>(null)

/**
 * Lo usa `ProjectCard`. Fuera de esta retícula devuelve manejadores vacíos: en
 * la home y en los relacionados no hay huevo, así que tampoco hay que pagar el
 * coste de seguir el estado de cada portada.
 */
export function usePortadaColoreada(slug: string): Manejadores {
  const ctx = useContext(Contexto)

  return useMemo(() => {
    if (!ctx) return {}
    let dentro = false
    return {
      onMouseEnter: () => {
        dentro = true
        ctx.pintar(slug, true)
      },
      onMouseLeave: () => {
        dentro = false
      },
      onTransitionEnd: (e: React.TransitionEvent) => {
        // Solo el filtro, y solo cuando el cursor ya salió: al entrar también
        // termina una transición, pero ahí la portada acaba de tomar color.
        if (e.propertyName === 'filter' && !dentro) ctx.pintar(slug, false)
      },
    }
  }, [ctx, slug])
}

export function ReticulaProyectos({
  total,
  conHuevo,
  className,
  children,
}: {
  /** Cuántas portadas hay que colorear para que aparezca. */
  total: number
  /** Solo en el portafolio completo: con un filtro activo el hueco cambia de
   *  sitio y colorear tres tarjetas no tendría ninguna gracia. */
  conHuevo: boolean
  className?: string
  children: ReactNode
}) {
  const [coloreadas, setColoreadas] = useState<ReadonlySet<string>>(new Set())

  const pintar = useCallback((slug: string, aColor: boolean) => {
    setColoreadas((previas) => {
      if (previas.has(slug) === aColor) return previas
      const siguientes = new Set(previas)
      if (aColor) siguientes.add(slug)
      else siguientes.delete(slug)
      return siguientes
    })
  }, [])

  const valor = useMemo(() => ({ pintar }), [pintar])
  const completa = conHuevo && total > 0 && coloreadas.size >= total

  return (
    <Contexto.Provider value={valor}>
      <div className={className}>
        {children}
        {completa ? <Huevo /> : null}
      </div>
    </Contexto.Provider>
  )
}

function Huevo() {
  return (
    <article className="bg-paper">
      <Link
        href="/contacto"
        className="group flex aspect-[4/3] flex-col items-center justify-center gap-6 px-6 text-center"
      >
        {/* El huevo, dibujado como un detalle de plancha: trazo fino y acotado.
            Cualquier otra cosa —un emoji, un color -- desentonaría con un sitio
            donde no hay una sola forma decorativa. */}
        <svg
          viewBox="0 0 48 62"
          aria-hidden
          className="h-14 w-auto text-accent motion-safe:animate-[huevo_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
        >
          <path
            d="M24 2c11 0 22 16 22 32a22 22 0 0 1-44 0C2 18 13 2 24 2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M2 34h44" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>

        <div className="w-full max-w-[16rem]">
          <p className="text-h5 text-ink transition-colors group-hover:text-accent">
            Su proyecto podría estar aquí.
          </p>
          <Rule className="mt-3 text-muted">Hablemos</Rule>
        </div>
      </Link>
    </article>
  )
}
