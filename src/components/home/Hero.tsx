'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { mediaSrc } from '@/lib/utils'
import { cn } from '@/lib/utils'
import type { Project, ProjectImage } from '@/lib/types'

const INTERVALO_MS = 3000

/** Cada cuánto entra la siguiente lámina al DOM, una vez cargada la primera. */
const PRECALENTADO_MS = 700

type Lamina = Project & { portada: ProjectImage }

/**
 * Hero rotante. Cliente porque hay temporizador y controles.
 *
 * Diferencias con el carrusel de Wix, que era mudo y no llevaba a ninguna parte:
 * cada lámina muestra el nombre del proyecto, su año y su ciudad, y enlaza a su
 * ficha.
 *
 * Carga: antes las siete láminas estaban en el DOM desde el primer render con
 * `opacity-0` y `absolute inset-0`. Como intersectan el viewport, la carga
 * diferida nativa no las frena y el navegador se descargaba las siete de
 * entrada — seis imágenes a pantalla completa compitiendo con la única que se
 * ve, sobre la conexión del tráfico de pauta. Ahora arranca montando una sola, y
 * en cuanto esa carga van entrando las demás de a una. A 3 s por lámina y una
 * cada 0,7 s, la siguiente siempre llega tibia: la carga inicial baja a una
 * petición sin que aparezca el desenfoque al rotar.
 *
 * Accesibilidad: si el sistema pide movimiento reducido, no rota sola y se
 * navega solo con los controles. Se detiene al pasar el cursor o al enfocar con
 * teclado, para que nadie pierda de vista lo que estaba leyendo, y hay un botón
 * explícito de pausa, que es lo que exige un carrusel automático.
 *
 * El encabezado de cada lámina es un `<p>`, no un `<h1>`: el `<h1>` de la home
 * es el nombre del estudio y vive en la página. Con uno por lámina, para un
 * rastreador la portada del sitio se titulaba "Casa Aguilar".
 */
export function Hero({ projects }: { projects: Project[] }) {
  const t = useTranslations('home')

  // Las láminas sin portada se descartan aquí y no dentro del map: haciéndolo
  // allí, la numeración del `aria-label` y la lista de indicadores seguían
  // contando láminas que no se pintaban.
  const laminas = projects.filter((p): p is Lamina => p.portada !== null)
  const total = laminas.length

  const [activo, setActivo] = useState(0)
  // Dos pausas distintas que antes compartían una sola variable: al pulsar
  // "Pausar" con el cursor encima, el estado ya era `true` por el hover, así que
  // el botón escribía `false` y su rótulo dejaba de describir lo que se veía.
  const [pausadoPorCursor, setPausadoPorCursor] = useState(false)
  const [pausadoPorBoton, setPausadoPorBoton] = useState(false)
  const [reduceMovimiento, setReduceMovimiento] = useState(false)
  const [montadas, setMontadas] = useState(1)
  const [primeraLista, setPrimeraLista] = useState(false)

  const enPausa = pausadoPorCursor || pausadoPorBoton

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const aplicar = () => setReduceMovimiento(mq.matches)
    aplicar()
    mq.addEventListener('change', aplicar)
    return () => mq.removeEventListener('change', aplicar)
  }, [])

  // Precalentado. No arranca hasta que la primera lámina terminó de cargar, que
  // es lo que garantiza una sola petición de imagen en el arranque.
  useEffect(() => {
    if (!primeraLista || montadas >= total) return
    const id = window.setTimeout(
      () => setMontadas((n) => n + 1),
      PRECALENTADO_MS,
    )
    return () => window.clearTimeout(id)
  }, [primeraLista, montadas, total])

  const ir = useCallback(
    (i: number) => {
      const destino = ((i % total) + total) % total
      // Un salto explícito adelanta el precalentado: nadie debe esperar 0,7 s
      // por lámina para ver la que acaba de pedir.
      setMontadas((n) => Math.max(n, destino + 1))
      setActivo(destino)
    },
    [total],
  )

  useEffect(() => {
    if (enPausa || reduceMovimiento || total < 2) return
    const id = window.setInterval(() => {
      setActivo((i) => {
        const siguiente = (i + 1) % total
        setMontadas((n) => Math.max(n, siguiente + 1))
        return siguiente
      })
    }, INTERVALO_MS)
    return () => window.clearInterval(id)
  }, [enPausa, reduceMovimiento, total])

  if (total === 0) return null

  return (
    <section
      aria-roledescription="carrusel"
      aria-label={t('heroEtiqueta')}
      onMouseEnter={() => setPausadoPorCursor(true)}
      onMouseLeave={() => setPausadoPorCursor(false)}
      onFocusCapture={() => setPausadoPorCursor(true)}
      onBlurCapture={() => setPausadoPorCursor(false)}
      className="relative h-[78svh] min-h-[30rem] w-full overflow-hidden bg-ink"
    >
      {laminas.map((p, i) => {
        const visible = i === activo
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
              {i < montadas ? (
                <Image
                  src={mediaSrc(p.portada.path)}
                  alt={p.portada.alt}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                  placeholder="blur"
                  blurDataURL={p.portada.blurDataURL}
                  onLoad={i === 0 ? () => setPrimeraLista(true) : undefined}
                  className="object-cover"
                />
              ) : null}

              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 px-gutter pb-16 lg:px-10 lg:pb-14">
                <div className="mx-auto max-w-[100rem] text-paper">
                  <p className="text-display">{p.titulo}</p>
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
              onClick={() => setPausadoPorBoton((v) => !v)}
              aria-pressed={pausadoPorBoton}
              className="text-block text-paper/80 underline-offset-4 transition-opacity hover:text-paper hover:underline"
            >
              {pausadoPorBoton ? t('heroReanudar') : t('heroPausar')}
            </button>
          ) : null}

          <ul className="flex items-center gap-2">
            {laminas.map((p, i) => (
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
