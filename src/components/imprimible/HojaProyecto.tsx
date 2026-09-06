import Image from 'next/image'
import { Logotipo } from '@/components/brand/Logotipo'
import { Rule } from '@/components/ui/Rule'
import { contacto, site } from '@content/site'
import { creditoDiseno, mediaSrc, naturalezaDe } from '@/lib/utils'
import { formatArea } from '@/lib/formato'
import type { Project } from '@/lib/types'
import { lugar } from '@/lib/lugar'

/**
 * Una hoja de proyecto, pensada para el papel.
 *
 * Es la pieza que comparten la ficha de experiencia —una sola— y el dossier por
 * sector —una detrás de otra—. Lo que se imprime es exactamente el mismo dato
 * que publica el sitio, así que un documento no puede quedarse desactualizado
 * respecto a la web: no hay dos fuentes que mantener de acuerdo.
 *
 * El contenido es el que pide un pliego o una propuesta formal, en ese orden:
 * qué es, dónde, cuándo, de qué tamaño, quién lo firma y qué se hizo.
 */
/**
 * La hoja se imprime en español y solo en español.
 *
 * No es un descuido de la traducción: es un documento que se adjunta a una
 * propuesta o a un pliego colombiano, con rótulos —Año, Ubicación, Naturaleza—
 * que ahí se leen en español. Por eso las dos rutas que la usan, `/dossier` y
 * `/proyectos/*\/ficha`, se generan solo en el idioma editorial.
 */
const IDIOMA_DEL_PAPEL = 'es'

export function HojaProyecto({ project }: { project: Project }) {
  const area = formatArea(IDIOMA_DEL_PAPEL, project.areaM2)
  /* La hoja va siempre en español: se imprime y se deja sobre una mesa. */
  const NATURALEZA: Record<string, string> = {
    construido: 'Obra construida',
    concurso: 'Concurso',
    propuesta: 'Proyecto no construido',
  }
  const clase = naturalezaDe(project)
  const naturaleza = clase ? NATURALEZA[clase] : null
  const credito = creditoDiseno(IDIOMA_DEL_PAPEL, project.diseno, 'otros')

  const ficha: { etiqueta: string; valor: string }[] = [
    { etiqueta: 'Año', valor: String(project.anio) },
    {
      etiqueta: 'Ubicación',
      valor: lugar(project.localidad, project.ciudad, project.departamento),
    },
    ...(area ? [{ etiqueta: 'Área', valor: area }] : []),
    ...(naturaleza ? [{ etiqueta: 'Naturaleza', valor: naturaleza }] : []),
    ...(credito ? [{ etiqueta: 'Diseño', valor: credito }] : []),
    ...(project.cliente
      ? [{ etiqueta: 'Cliente', valor: project.cliente }]
      : []),
    ...(project.premio
      ? [{ etiqueta: 'Reconocimiento', valor: project.premio }]
      : []),
  ]

  /* Dos párrafos de memoria. El texto completo vive en la ficha web; aquí manda
     que la hoja quepa en una página. */
  const memoria = project.memoria.split(/\n{2,}/).slice(0, 2)

  /* Hasta tres imágenes de apoyo, saltando la portada si ya se usó arriba. */
  const apoyo = project.galeria
    .filter((g) => g.path !== project.portada?.path)
    .slice(0, 3)

  return (
    <article className="hoja mx-auto max-w-[210mm] bg-paper px-gutter py-10 lg:px-12">
      <header className="no-partir flex items-end justify-between gap-8 border-b border-line pb-5">
        <Logotipo className="h-9 w-auto text-ink" />
        <p className="text-block text-right text-muted">
          Ficha de experiencia
          <br />
          {site.razonSocial}
        </p>
      </header>

      {project.portada ? (
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-mist">
          <Image
            src={mediaSrc(project.portada.path)}
            alt={project.portada.alt}
            fill
            sizes="(min-width: 1024px) 210mm, 100vw"
            placeholder="blur"
            blurDataURL={project.portada.blurDataURL}
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="no-partir mt-8">
        <h1 className="text-h3 text-ink">{project.titulo}</h1>
        {project.subtitulo ? (
          <p className="text-small measure mt-2 text-ink-soft">
            {project.subtitulo}
          </p>
        ) : null}
        <Rule className="mt-4 max-w-md text-muted">
          {project.anio} &nbsp; {project.ciudad}
        </Rule>
      </div>

      <dl className="no-partir mt-8 grid gap-x-10 gap-y-4 border-t border-line pt-6 sm:grid-cols-2">
        {ficha.map((f) => (
          <div key={f.etiqueta}>
            <dt className="text-block text-muted">{f.etiqueta}</dt>
            <dd className="text-small mt-0.5 text-ink">{f.valor}</dd>
          </div>
        ))}
      </dl>

      {memoria.length > 0 ? (
        <div className="mt-8 space-y-3">
          {memoria.map((parrafo, i) => (
            <p key={i} className="text-small text-ink-soft">
              {parrafo}
            </p>
          ))}
        </div>
      ) : null}

      {apoyo.length > 0 ? (
        <div className="no-partir mt-8 grid grid-cols-3 gap-2">
          {apoyo.map((img) => (
            <div
              key={img.path}
              className="relative aspect-[4/3] overflow-hidden bg-mist"
            >
              <Image
                src={mediaSrc(img.path)}
                alt={img.alt}
                fill
                sizes="70mm"
                placeholder="blur"
                blurDataURL={img.blurDataURL}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}

      <footer className="text-block mt-10 flex flex-wrap justify-between gap-x-8 gap-y-1 border-t border-line pt-4 text-muted">
        <span>{site.nombreLargo}</span>
        <span>
          {contacto.direccion}, {contacto.ciudad}
        </span>
        <span>{contacto.telefono}</span>
        <span>{contacto.correo}</span>
      </footer>
    </article>
  )
}
