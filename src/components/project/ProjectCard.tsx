'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { RotuloProyecto, useRotulo } from '@/components/project/RotuloProyecto'
import { usePortadaColoreada } from '@/components/project/ReticulaProyectos'
import { cn, mediaSrc, naturalezaDe } from '@/lib/utils'
import { portadasEnGrises } from '@content/ajustes'
import type { Project } from '@/lib/types'

/**
 * Ficha del portafolio.
 *
 * En el sitio de Wix las tarjetas no mostraban absolutamente nada: una pared de
 * fotos anónimas que además no llevaba a ninguna parte. Aquí el nombre, el año,
 * la ciudad y la naturaleza del encargo están siempre en el documento —para el
 * lector de pantalla y para el buscador— y se revelan al recorrer la retícula
 * con el cursor, quedándose visibles a partir de ese momento. El detalle del
 * comportamiento está en `RotuloProyecto`.
 *
 * Es cliente porque el revelado es interacción real, no adorno: hay estado que
 * persiste por ficha.
 */
export function ProjectCard({
  project,
  priority = false,
  sizes = '(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw',
}: {
  project: Project
  priority?: boolean
  sizes?: string
}) {
  const t = useTranslations('proyecto')
  const { portada } = project
  const { revelado, pulso, disparadores } = useRotulo()
  const color = usePortadaColoreada(project.slug)

  if (!portada) return null

  /* Sin etiqueta cuando la ficha no se ha revisado: callar es correcto,
     afirmar «no construido» sin comprobarlo no lo es. */
  const naturaleza = naturalezaDe(project)
  const etiqueta = naturaleza ? t(naturaleza) : null

  return (
    <article className="pieza">
      <Link
        href={`/proyectos/${project.slug}`}
        {...disparadores}
        {...color}
        onMouseEnter={() => {
          disparadores.onMouseEnter()
          color.onMouseEnter?.()
        }}
        className="group block"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image
            src={mediaSrc(portada.path)}
            alt={portada.alt}
            fill
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            blurDataURL={portada.blurDataURL}
            className={cn(
              'object-cover group-hover:scale-[1.02]',
              // `.portada` define sus propias transiciones —filtro y
              // transformación— así que sustituye a las utilidades, no se suma.
              portadasEnGrises
                ? 'portada'
                : 'transition-transform duration-700 ease-out',
            )}
          />

          {/* Velo. Sube con el rótulo y solo bajo él: el resto de la fotografía
              no se toca. Sin esto el nombre se pierde en una fachada clara. */}
          <span
            aria-hidden
            data-revelado={revelado}
            className="rotulo absolute inset-x-0 bottom-0 block h-2/5 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent"
          />

          <RotuloProyecto
            titulo={project.titulo}
            medida={
              <>
                {project.anio} &nbsp; {project.ciudad}
                {etiqueta ? <> &nbsp; {etiqueta}</> : null}
              </>
            }
            revelado={revelado}
            pulso={pulso}
            className="absolute inset-x-0 bottom-0 p-5 lg:p-6"
          />
        </div>
      </Link>
    </article>
  )
}
