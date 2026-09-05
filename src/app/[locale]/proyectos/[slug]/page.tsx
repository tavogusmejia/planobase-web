import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { Gallery } from '@/components/project/Gallery'
import { ProjectCard } from '@/components/project/ProjectCard'
import {
  getAllSlugs,
  getNeighbours,
  getProject,
  getRelated,
} from '@/lib/data/projects'
import { routing } from '@/i18n/routing'
import {
  absoluteUrl,
  creditoDiseno,
  etiquetaProyecto,
  formatArea,
  mediaSrc,
  nombresDiseno,
} from '@/lib/utils'

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  )
}

/**
 * Las 24 fichas del sitio actual no tienen meta description ni og:image: al
 * compartirlas no aparece nada. Aquí se generan de los datos del proyecto.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const project = await getProject(slug)
  if (!project) return {}

  const area = formatArea(project.areaM2)
  const description = [
    project.subtitulo ?? project.memoria.split('. ')[0],
    `${project.ciudad}, ${project.departamento}`,
    String(project.anio),
    area,
  ]
    .filter(Boolean)
    .join('. ')
    .slice(0, 300)

  return {
    title: project.titulo,
    description,
    alternates: { canonical: `/${locale}/proyectos/${slug}` },
    openGraph: {
      title: project.titulo,
      description,
      type: 'article',
      images: project.portada
        ? [
            {
              url: mediaSrc(project.portada.path),
              width: project.portada.width,
              height: project.portada.height,
              alt: project.portada.alt,
            },
          ]
        : [],
    },
  }
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const project = await getProject(slug)
  if (!project) notFound()

  const t = await getTranslations('proyecto')
  const [{ anterior, siguiente }, relacionados] = await Promise.all([
    getNeighbours(slug),
    getRelated(project),
  ])

  const area = formatArea(project.areaM2)

  /* La ficha técnica va visible de entrada. En el sitio actual vive dentro de
     un acordeón cerrado, que es donde nadie la ve. Los campos sin dato no se
     pintan: nunca aparece "0 m²" ni una etiqueta vacía. */
  const naturaleza = etiquetaProyecto(project)
  const credito = creditoDiseno(project.diseno)

  const ficha: { etiqueta: string; valor: string }[] = [
    ...(naturaleza ? [{ etiqueta: 'Naturaleza', valor: naturaleza }] : []),
    { etiqueta: t('anio'), valor: String(project.anio) },
    {
      etiqueta: t('ciudad'),
      valor: [project.localidad, project.ciudad, project.departamento]
        .filter(Boolean)
        .join(', '),
    },
    ...(area ? [{ etiqueta: t('area'), valor: area }] : []),
    // No es `diseno.join(', ')`: el estudio nombra a dos y agrupa al resto en
    // «y otros». La regla vive en `creditosDiseno`, en content/site.ts.
    ...(credito ? [{ etiqueta: t('diseno'), valor: credito }] : []),
    ...(project.cliente
      ? [{ etiqueta: t('cliente'), valor: project.cliente }]
      : []),
    ...(project.premio
      ? [{ etiqueta: t('reconocimiento'), valor: project.premio }]
      : []),
    ...(project.creditosFotografia
      ? [{ etiqueta: t('fotografia'), valor: project.creditosFotografia }]
      : []),
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.titulo,
    dateCreated: String(project.anio),
    // Mismos nombres que en la página. Ocultar a alguien en el HTML y
    // declararlo en los datos estructurados sería publicarlo igual.
    creator: nombresDiseno(project.diseno).map((n) => ({
      '@type': 'Person',
      name: n,
    })),
    locationCreated: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.ciudad,
        addressRegion: project.departamento,
        addressCountry: 'CO',
      },
    },
    ...(project.portada ? { image: absoluteUrl(mediaSrc(project.portada.path)) } : {}),
  }

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {project.portada ? (
        <div className="relative h-[70svh] min-h-[26rem] w-full bg-mist">
          <Image
            src={mediaSrc(project.portada.path)}
            alt={project.portada.alt}
            fill
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL={project.portada.blurDataURL}
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="mx-auto max-w-[100rem] px-gutter lg:px-10">
        <header className="pt-12">
          <h1 className="text-display text-ink">{project.titulo}</h1>
          {project.subtitulo ? (
            <p className="text-h3 measure-display mt-4 text-ink-soft">
              {project.subtitulo}
            </p>
          ) : null}
          <Rule className="mt-6 text-muted">
            {project.anio} &nbsp; {project.ciudad}
          </Rule>
        </header>

        {/* Rótulo a la izquierda, memoria a la derecha — la lógica de una
            plancha. En móvil el rótulo va arriba, nunca escondido. */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <div className="h-fit">
            <dl className="border-t border-line pt-6">
              {ficha.map((f) => (
                <div key={f.etiqueta} className="mb-5">
                  <dt className="text-block text-muted">{f.etiqueta}</dt>
                  <dd className="text-small mt-1 text-ink">{f.valor}</dd>
                </div>
              ))}
            </dl>

            {/* El documento que el estudio adjunta a una propuesta. Sale del
                mismo dato que esta página, así que no se desactualiza. */}
            <Link
              href={`/proyectos/${project.slug}/ficha`}
              className="text-block mt-6 inline-block text-accent underline-offset-4 hover:underline"
            >
              Ficha de experiencia
            </Link>
          </div>

          <div className="border-t border-line pt-6">
            <h2 className="text-block mb-6 text-muted">{t('memoria')}</h2>
            {project.memoria.split(/\n{2,}/).map((parrafo, i) => (
              <p key={i} className="text-body measure mb-6 text-ink">
                {parrafo}
              </p>
            ))}

            {project.videoUrl ? (
              <div className="mt-12 aspect-video w-full bg-mist">
                <iframe
                  src={project.videoUrl}
                  title={`${project.titulo} — video`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ) : null}
          </div>
        </div>

        {project.galeria.length ? (
          <section className="mt-24">
            <h2 className="text-block mb-8 text-muted">{t('galeria')}</h2>
            <Gallery images={project.galeria} />
          </section>
        ) : null}

        <nav
          aria-label="Navegación entre proyectos"
          className="mt-24 grid gap-6 border-t border-line pt-8 sm:grid-cols-2"
        >
          {anterior ? (
            <Link href={`/proyectos/${anterior.slug}`} className="group">
              <span className="text-block text-muted">{t('anterior')}</span>
              <span className="text-h4 mt-1 block text-ink group-hover:text-accent">
                {anterior.titulo}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {siguiente ? (
            <Link
              href={`/proyectos/${siguiente.slug}`}
              className="group sm:text-right"
            >
              <span className="text-block text-muted">{t('siguiente')}</span>
              <span className="text-h4 mt-1 block text-ink group-hover:text-accent">
                {siguiente.titulo}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {relacionados.length ? (
          <section className="mt-24">
            <h2 className="text-h3 mb-10 text-ink">{t('relacionados')}</h2>
            <div className="grid gap-px overflow-hidden md:grid-cols-3">
              {relacionados.map((p) => (
                <ProjectCard
                  key={p.slug}
                  project={p}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  )
}
