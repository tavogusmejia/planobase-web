'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { cn } from '@/lib/utils'

/**
 * La retícula del portafolio, con un huevo de pascua.
 *
 * Quien recorra con el cursor TODAS las portadas y consiga tenerlas a color a
 * la vez, se lleva dos cosas: el huevo del hueco se enfoca, y el portafolio
 * entero se queda a color durante setenta segundos. Con diez segundos de gracia
 * por tarjeta, barrer la retícula es posible — pero hay que proponérselo.
 *
 * El hueco existe porque 23 proyectos no llenan una retícula de 2, 3 ni 4
 * columnas. Y 23 + 1 = 24, que sí es divisible entre las tres: el huevo encaja
 * exacto en todos los anchos, sin una sola regla de posicionamiento.
 *
 * Cómo se sabe que una portada sigue a color, sin temporizadores: lo avisa el
 * navegador. `transitionend` del filtro se dispara cuando el desvanecido a gris
 * termina, así que el estado y la animación no pueden desincronizarse — no hay
 * dos duraciones que mantener de acuerdo, ni `setTimeout` que pueda sobrevivir
 * a una tarjeta desmontada. Al entrar el cursor también termina una transición,
 * pero entonces el cursor está dentro y se ignora.
 */

/** Lo que dura el premio. Es el único reloj de todo esto. */
const PREMIO_MS = 70_000

type Reticula = { pintar: (slug: string, aColor: boolean) => void }

const Contexto = createContext<Reticula | null>(null)

/** Lo que `ProjectCard` reparte sobre su enlace. Vacío fuera de la retícula. */
type Manejadores = {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onTransitionEnd?: (e: React.TransitionEvent) => void
}

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
  const [premiado, setPremiado] = useState(false)

  const pintar = useCallback((slug: string, aColor: boolean) => {
    setColoreadas((previas) => {
      if (previas.has(slug) === aColor) return previas
      const siguientes = new Set(previas)
      if (aColor) siguientes.add(slug)
      else siguientes.delete(slug)
      return siguientes
    })
  }, [])

  const completa = conHuevo && total > 0 && coloreadas.size >= total

  useEffect(() => {
    if (!completa) return
    setPremiado(true)

    const id = window.setTimeout(() => {
      setPremiado(false)
      // Durante el premio ninguna portada se fue a gris, así que ningún
      // `transitionend` vació el conjunto. Se vacía aquí para que el juego
      // pueda volver a empezar en vez de quedarse ganado para siempre.
      setColoreadas(new Set())
    }, PREMIO_MS)

    return () => window.clearTimeout(id)
  }, [completa])

  const valor = useMemo(() => ({ pintar }), [pintar])

  return (
    <Contexto.Provider value={valor}>
      <div className={cn(className, premiado && 'reticula--premiada')}>
        {children}
        {conHuevo ? <Huevo revelado={premiado} /> : null}
      </div>
    </Contexto.Provider>
  )
}

/**
 * Ocupa siempre el hueco de la última fila. Antes ahí no había nada y se veía
 * un rectángulo gris del tamaño de una tarjeta, que se lee como un fallo de
 * maquetación; desenfocado se lee como lo que es: algo que está ahí y todavía
 * no toca.
 *
 * Mientras no está revelado queda inerte —sin foco, sin clic y fuera del árbol
 * de accesibilidad—: es una insinuación, no contenido. Nadie se pierde nada, el
 * mismo destino está en el menú, en el pie y en la barra fija de cada página.
 */
function Huevo({ revelado }: { revelado: boolean }) {
  const contenido = (
    <>
      <svg
        viewBox="0 0 48 62"
        aria-hidden
        className={cn(
          'h-14 w-auto text-accent',
          revelado &&
            'motion-safe:animate-[huevo_700ms_cubic-bezier(0.22,1,0.36,1)_both]',
        )}
      >
        {/* Dibujado como un detalle de plancha: trazo fino y acotado. Un emoji
            o una forma de color desentonarían en un sitio donde no hay una sola
            forma decorativa. */}
        <path
          d="M24 2c11 0 22 16 22 32a22 22 0 0 1-44 0C2 18 13 2 24 2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M2 34h44"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.5"
        />
      </svg>

      <div className="w-full max-w-[16rem]">
        <p className="text-h5 text-ink transition-colors group-hover:text-accent">
          Su proyecto podría estar aquí.
        </p>
        <Rule className="mt-3 text-muted">Hablemos</Rule>
      </div>
    </>
  )

  return (
    <article className="pieza">
      {/* Siempre el mismo elemento, nunca uno distinto según el estado: si al
          revelarse cambiara de `div` a `Link`, React lo remontaría y el
          desenfoque saltaría de golpe en vez de enfocarse. Lo que cambia son
          las clases, que es lo que el navegador sabe animar. */}
      <Link
        href="/contacto"
        aria-hidden={!revelado}
        tabIndex={revelado ? undefined : -1}
        className={cn(
          'group flex aspect-[4/3] flex-col items-center justify-center gap-6 px-6 text-center',
          'huevo',
          revelado ? 'huevo--revelado' : 'pointer-events-none',
        )}
      >
        {contenido}
      </Link>
    </article>
  )
}
