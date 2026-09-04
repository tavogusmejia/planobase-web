import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { etiquetaProyecto, mediaSrc } from '@/lib/utils'
import type { Project } from '@/lib/types'

/**
 * Tarjeta del portafolio.
 *
 * En el sitio de Wix las tarjetas no mostraban absolutamente nada: una pared de
 * fotos anónimas. Aquí el nombre, el año y la ciudad son obligatorios, y la
 * línea de cota los sostiene igual que en una plancha.
 */
export function ProjectCard({
  project,
  priority = false,
  sizes = '(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw',
}: {
  project: Project
  priority?: boolean
  sizes?: string
}) {
  const { portada } = project
  if (!portada) return null

  const etiqueta = etiquetaProyecto(project)

  return (
    <article>
      <Link href={`/proyectos/${project.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image
            src={mediaSrc(portada.path)}
            alt={portada.alt}
            fill
            sizes={sizes}
            priority={priority}
            placeholder="blur"
            blurDataURL={portada.blurDataURL}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <h3 className="text-h4 mt-5 text-ink">{project.titulo}</h3>
        <Rule className="mt-2 text-muted">
          {project.anio} &nbsp; {project.ciudad}
          {etiqueta ? <> &nbsp; {etiqueta}</> : null}
        </Rule>
      </Link>
    </article>
  )
}
