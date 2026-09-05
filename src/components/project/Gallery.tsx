'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent as PointerEventReact } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { mediaSrc } from '@/lib/utils'
import type { ProjectImage } from '@/lib/types'

/* ==========================================================================
   Composición de la retícula
   ==========================================================================

   El corpus manda: de las 207 fotos de proyecto, 129 son 16:9. Con la regla
   anterior —«más ancha que alto × 1,7 ocupa las dos columnas»— el 62 % de la
   galería salía a todo el ancho del contenedor: en un monitor grande, imágenes
   de 1520 × 854. De ahí las dos quejas a la vez, el tamaño y el ritmo plano.

   Aquí la galería se compone en filas justificadas. Una fila se llena hasta
   acercarse a una SUMA DE PROPORCIONES objetivo, y esa suma es el inverso de la
   altura de la fila: si el ancho disponible es A y la suma es S, la altura sale
   A / S. Por eso el objetivo se cicla —3,4 · 5,2 · 4,4—: filas altas de dos
   piezas alternando con filas bajas de tres. El ritmo no es un adorno añadido,
   es la consecuencia de ese ciclo.

   Con el corpus real las alturas quedan en 0,28 · 0,19 · 0,28 del ancho, o sea
   427 · 285 · 427 px sobre un contenedor de 1520. La mitad de lo que medía una
   pieza antes.

   Es determinista por construcción: el reparto depende solo del índice de la
   fila y de `width`/`height` de cada imagen. Dos renders dan la misma retícula.
   ========================================================================== */

/** Suma de proporciones a la que tiende cada fila. Cicla por índice de fila. */
const OBJETIVOS = [3.4, 5.2, 4.4]

/** Con más de tres, en un portátil de 1024 las piezas bajan de 220 px. */
const MAX_POR_FILA = 3

/**
 * Objetivo con el que se cierra la galería.
 *
 * La última fila casi nunca llega a su objetivo, así que en vez de justificarla
 * —lo que la estiraría a todo el ancho— se le reserva el hueco que le falta. La
 * cifra es propia y no la del ciclo porque en qué punto del ciclo cae la última
 * fila es casual: con 5,2 una foto vertical suelta cerraba en 195 px de ancho,
 * un sello. Con 4,0, el término medio del ciclo, cualquier pieza que cierre
 * queda a la altura de las de las demás filas.
 */
const OBJETIVO_CIERRE = 4

/** Por debajo de esta fracción del objetivo, la última fila no se justifica. */
const UMBRAL_RELLENO = 0.8

type Pieza = {
  img: ProjectImage
  /** Índice en la galería completa: es lo que abre el visor. */
  indice: number
  /** Proporción real de la foto. Nunca se recorta nada. */
  ar: number
}

type Fila = {
  piezas: Pieza[]
  /** Suma de proporciones de la fila. */
  suma: number
  /**
   * Hueco que se deja sin ocupar al final de la última fila. Cero en todas las
   * demás.
   */
  relleno: number
}

function proporcion(img: ProjectImage): number {
  return img.height > 0 ? img.width / img.height : 1
}

function componer(images: ProjectImage[]): Fila[] {
  const piezas: Pieza[] = images.map((img, indice) => ({
    img,
    indice,
    ar: proporcion(img),
  }))

  const filas: Fila[] = []
  let i = 0

  while (i < piezas.length) {
    const objetivo = OBJETIVOS[filas.length % OBJETIVOS.length] ?? 4
    const fila: Pieza[] = []
    let suma = 0

    while (i < piezas.length && fila.length < MAX_POR_FILA) {
      const p = piezas[i]
      if (!p) break
      // La primera siempre entra. A partir de ahí solo se añade la siguiente si
      // acerca la fila al objetivo; en cuanto lo pasa de largo, se corta.
      const acerca =
        Math.abs(suma + p.ar - objetivo) < Math.abs(suma - objetivo)
      if (fila.length > 0 && !acerca) break
      fila.push(p)
      suma += p.ar
      i += 1
    }

    filas.push({ piezas: fila, suma, relleno: 0 })
  }

  // La última fila puede quedarse muy corta —una galería de tres fotos deja una
  // sola—, y justificada a todo el ancho volvería a ser la imagen gigante que
  // este cambio quita. Se le reserva el hueco que le falta para el objetivo.
  const ultima = filas[filas.length - 1]
  if (ultima && ultima.suma < OBJETIVO_CIERRE * UMBRAL_RELLENO) {
    ultima.relleno = OBJETIVO_CIERRE - ultima.suma
  }

  return filas
}

/**
 * `sizes` de una pieza, derivado del mismo reparto que la maqueta.
 *
 * La pieza ocupa `ar / divisor` del ancho útil, donde el divisor es la suma de
 * la fila más el relleno. El ancho útil es el del contenedor de la página
 * (`max-w-[100rem] px-gutter lg:px-10`): tope de 1520 px a partir de 1600 de
 * pantalla, y `100vw` menos el margen por debajo. Se declara `100vw` sin
 * descontar el margen a propósito: sobreestimar hace que el navegador pida un
 * ancho de más, y quedarse corto es lo que se ve borroso.
 *
 * El punto de ruptura de 768 es el mismo en el que `.galeria-fila` pasa a fila:
 * si uno de los dos se mueve, el otro tiene que moverse con él o el navegador
 * descarga el tamaño equivocado.
 */
function medidas(ar: number, divisor: number): string {
  const fraccion = divisor > 0 ? ar / divisor : 1
  const anchoTope = Math.round(fraccion * 1520)
  const porcentaje = Math.ceil(fraccion * 100)
  return `(min-width: 1600px) ${anchoTope}px, (min-width: 768px) ${porcentaje}vw, 100vw`
}

/* ==========================================================================
   Visor
   ========================================================================== */

const ESCALA_MAX = 6
/** A lo que lleva un doble clic o un doble toque. */
const ESCALA_DOBLE = 2.5
/** Un doble toque son dos toques seguidos, cerca y sin arrastre de por medio. */
const DOBLE_MS = 400
const DOBLE_PX = 16

type Vista = { escala: number; x: number; y: number }

const REPOSO: Vista = { escala: 1, x: 0, y: 0 }

/**
 * Acota el desplazamiento para que la imagen no se pueda sacar del cuadro.
 *
 * El límite se calcula sobre la caja REAL de la imagen, no sobre la de la
 * escena: con `object-contain` la foto va apaisada dentro de un cuadro casi
 * cuadrado y sobra banda arriba y abajo. Acotar contra la escena dejaría
 * arrastrar la imagen hasta esa banda vacía.
 */
function acotar(
  vista: Vista,
  escena: { width: number; height: number },
  ar: number,
): Vista {
  if (escena.width <= 0 || escena.height <= 0) return vista
  const limitaAncho = escena.width / escena.height > ar
  const w = (limitaAncho ? escena.height * ar : escena.width) * vista.escala
  const h = (limitaAncho ? escena.height : escena.width / ar) * vista.escala
  const maxX = Math.max(0, (w - escena.width) / 2)
  const maxY = Math.max(0, (h - escena.height) / 2)
  return {
    escala: vista.escala,
    x: Math.min(maxX, Math.max(-maxX, vista.x)),
    y: Math.min(maxY, Math.max(-maxY, vista.y)),
  }
}

/** La rueda reporta en píxeles, en líneas o en páginas según el ratón. */
function deltaEnPixeles(e: WheelEvent): number {
  if (e.deltaMode === 1) return e.deltaY * 16
  if (e.deltaMode === 2) return e.deltaY * 400
  return e.deltaY
}

/**
 * Galería con visor. Cliente porque hay estado e interacción real: abrir,
 * cerrar, navegar con teclado —que es el requisito de accesibilidad— y ampliar
 * y desplazar la imagen, que en un sitio de arquitectura es la mitad del punto:
 * lo que se quiere mirar de un plano es el detalle.
 */
export function Gallery({ images }: { images: ProjectImage[] }) {
  const t = useTranslations('proyecto')
  const [abierta, setAbierta] = useState<number | null>(null)
  const cerrarRef = useRef<HTMLButtonElement>(null)
  const disparador = useRef<HTMLButtonElement | null>(null)

  const filas = useMemo(() => componer(images), [images])

  const [vista, setVista] = useState<Vista>(REPOSO)
  const [directo, setDirecto] = useState(false)
  const escenaRef = useRef<HTMLDivElement>(null)
  /** Punteros vivos sobre la escena. Dos a la vez son un pellizco. */
  const punteros = useRef(new Map<number, { x: number; y: number }>())
  const pinza = useRef<{ distancia: number; escala: number } | null>(null)
  /** Hubo pellizco en el gesto que termina. Levantar dos dedos no es un toque. */
  const huboPinza = useRef(false)
  const arrastre = useRef<{ x: number; y: number; ox: number; oy: number } | null>(
    null,
  )
  const toque = useRef<{ x: number; y: number; t: number } | null>(null)

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

  const actual = abierta === null ? null : images[abierta]

  /**
   * Única puerta de entrada al zoom. Recibe cómo cambia la escala y en torno a
   * qué punto de la pantalla: el punto que está bajo el cursor —o entre los dos
   * dedos— se queda donde está, que es lo que hace que ampliar se sienta como
   * acercarse y no como que la imagen se escape.
   */
  const ampliar = useCallback(
    (siguiente: (escala: number) => number, cx: number, cy: number) => {
      const el = escenaRef.current
      if (!el || !actual) return
      const r = el.getBoundingClientRect()
      const ar = proporcion(actual)
      const px = cx - r.left - r.width / 2
      const py = cy - r.top - r.height / 2

      setVista((v) => {
        const escala = Math.min(ESCALA_MAX, Math.max(1, siguiente(v.escala)))
        const k = escala / v.escala
        return acotar(
          { escala, x: px - (px - v.x) * k, y: py - (py - v.y) * k },
          r,
          ar,
        )
      })
    },
    [actual],
  )

  /** Zoom sin cursor: teclado. El punto fijo es el centro de la escena. */
  const ampliarCentro = useCallback(
    (siguiente: (escala: number) => number) => {
      const el = escenaRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      ampliar(siguiente, r.left + r.width / 2, r.top + r.height / 2)
    },
    [ampliar],
  )

  const desplazar = useCallback(
    (x: number, y: number) => {
      const el = escenaRef.current
      if (!el || !actual) return
      const r = el.getBoundingClientRect()
      const ar = proporcion(actual)
      setVista((v) => acotar({ escala: v.escala, x, y }, r, ar))
    },
    [actual],
  )

  const alternarZoom = useCallback(
    (cx: number, cy: number) =>
      ampliar((e) => (e > 1.01 ? 1 : ESCALA_DOBLE), cx, cy),
    [ampliar],
  )

  /* Al cambiar de imagen el zoom vuelve a cero, y con él todo el estado de
     gesto: si no, el primer arrastre sobre la foto nueva saltaría al último
     desplazamiento de la anterior. */
  useEffect(() => {
    setVista(REPOSO)
    setDirecto(false)
    punteros.current.clear()
    pinza.current = null
    huboPinza.current = false
    arrastre.current = null
    toque.current = null
  }, [abierta])

  useEffect(() => {
    if (abierta === null) return

    cerrarRef.current?.focus()
    const previo = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrar()
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
      // Sin esto el zoom sería exclusivo del ratón y del dedo. No lleva rótulo
      // en pantalla porque el rótulo necesita una clave de `messages/`.
      if (e.key === '+' || e.key === '=') ampliarCentro((s) => s * 1.4)
      if (e.key === '-' || e.key === '_') ampliarCentro((s) => s / 1.4)
      if (e.key === '0') ampliarCentro(() => 1)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previo
    }
  }, [abierta, cerrar, mover, ampliarCentro])

  /* La rueda va como escucha nativa y no como `onWheel`: React registra el
     evento en la raíz de forma pasiva, así que desde la prop el
     `preventDefault()` no llega a tiempo y el navegador hace su propio zoom de
     página encima del nuestro. */
  useEffect(() => {
    const el = escenaRef.current
    if (!el || abierta === null) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      // El pellizco de trackpad llega como rueda con `ctrlKey`. Es el mismo
      // camino que la rueda del ratón, con otra sensibilidad: el gesto del
      // trackpad manda deltas mucho más pequeños.
      const k = e.ctrlKey ? 0.01 : 0.0025
      ampliar((s) => s * Math.exp(-deltaEnPixeles(e) * k), e.clientX, e.clientY)
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [abierta, ampliar])

  const alPulsar = (e: PointerEventReact<HTMLDivElement>) => {
    punteros.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    e.currentTarget.setPointerCapture(e.pointerId)

    if (punteros.current.size === 1) {
      arrastre.current = {
        x: e.clientX,
        y: e.clientY,
        ox: vista.x,
        oy: vista.y,
      }
      return
    }

    if (punteros.current.size === 2) {
      const [a, b] = [...punteros.current.values()]
      if (a && b) {
        pinza.current = {
          distancia: Math.hypot(a.x - b.x, a.y - b.y),
          escala: vista.escala,
        }
      }
      arrastre.current = null
      toque.current = null
      huboPinza.current = true
      setDirecto(true)
    }
  }

  const alMover = (e: PointerEventReact<HTMLDivElement>) => {
    if (!punteros.current.has(e.pointerId)) return
    punteros.current.set(e.pointerId, { x: e.clientX, y: e.clientY })

    const p = pinza.current
    if (p && punteros.current.size >= 2) {
      const [a, b] = [...punteros.current.values()]
      if (!a || !b || p.distancia <= 0) return
      const d = Math.hypot(a.x - b.x, a.y - b.y)
      ampliar(() => p.escala * (d / p.distancia), (a.x + b.x) / 2, (a.y + b.y) / 2)
      return
    }

    const arr = arrastre.current
    if (!arr || vista.escala <= 1) return
    setDirecto(true)
    desplazar(arr.ox + (e.clientX - arr.x), arr.oy + (e.clientY - arr.y))
  }

  const alSoltar = (e: PointerEventReact<HTMLDivElement>) => {
    const arr = arrastre.current
    punteros.current.delete(e.pointerId)
    if (punteros.current.size < 2) pinza.current = null

    // Queda algún dedo en pantalla: el gesto no ha terminado, y desde luego no
    // es un toque.
    if (punteros.current.size > 0) {
      toque.current = null
      return
    }

    const eraPinza = huboPinza.current
    arrastre.current = null
    huboPinza.current = false
    setDirecto(false)

    // Doble clic y doble toque por el mismo camino. Con `onDoubleClick` habría
    // que llevar aparte el táctil —donde el `dblclick` sintético llega tarde o
    // no llega— y además el sintético dispararía otra vez sobre este.
    //
    // Soltar los dedos de un pellizco no es un toque: sin esta guarda, terminar
    // un pellizco alternaba el zoom encima de lo que se acababa de ampliar.
    const quieto =
      !!arr && Math.hypot(e.clientX - arr.x, e.clientY - arr.y) < DOBLE_PX
    if (eraPinza || !quieto) {
      toque.current = null
      return
    }

    const ahora = e.timeStamp
    const previo = toque.current
    if (
      previo &&
      ahora - previo.t < DOBLE_MS &&
      Math.hypot(e.clientX - previo.x, e.clientY - previo.y) < DOBLE_PX
    ) {
      alternarZoom(e.clientX, e.clientY)
      toque.current = null
      return
    }
    toque.current = { x: e.clientX, y: e.clientY, t: ahora }
  }

  const ampliada = vista.escala > 1.01

  return (
    <>
      <div className="galeria">
        {filas.map((fila, f) => {
          const divisor = fila.suma + fila.relleno
          return (
            <ul
              key={fila.piezas[0]?.img.path ?? f}
              className="galeria-fila"
              {...(fila.relleno > 0
                ? {
                    'data-relleno': '',
                    style: { '--relleno': fila.relleno } as CSSProperties,
                  }
                : {})}
            >
              {fila.piezas.map((p) => (
                <li
                  key={p.img.path}
                  className="galeria-pieza"
                  style={{ '--ar': p.ar } as CSSProperties}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      disparador.current = e.currentTarget
                      setAbierta(p.indice)
                    }}
                    aria-label={`${t('verImagen')}: ${p.img.alt}`}
                    className="group block w-full cursor-zoom-in"
                  >
                    <div
                      className="relative w-full overflow-hidden bg-mist"
                      style={{
                        aspectRatio: `${p.img.width} / ${p.img.height}`,
                      }}
                    >
                      <Image
                        src={mediaSrc(p.img.path)}
                        alt={p.img.alt}
                        fill
                        sizes={medidas(p.ar, divisor)}
                        placeholder="blur"
                        blurDataURL={p.img.blurDataURL}
                        className="object-cover"
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )
        })}
      </div>

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

          <div
            ref={escenaRef}
            onPointerDown={alPulsar}
            onPointerMove={alMover}
            onPointerUp={alSoltar}
            onPointerCancel={alSoltar}
            className="visor-escena relative flex-1 overflow-hidden"
            style={{
              cursor: ampliada
                ? directo
                  ? 'grabbing'
                  : 'grab'
                : 'zoom-in',
            }}
          >
            <div
              className="visor-lienzo absolute inset-0"
              data-directo={directo}
              style={{
                transform: `translate3d(${vista.x}px, ${vista.y}px, 0) scale(${vista.escala})`,
              }}
            >
              <Image
                src={mediaSrc(actual.path)}
                alt={actual.alt}
                fill
                /* Ampliada, el original a `100vw` se ve interpolado, que es
                   justo lo que se quería evitar. Al pasar de 1 se pide el
                   siguiente escalón del srcset —hasta 2560, el tope de
                   `deviceSizes`— y solo entonces: quien no amplía no paga esa
                   descarga. */
                sizes={ampliada ? '200vw' : '100vw'}
                className="object-contain"
                draggable={false}
              />
            </div>
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
