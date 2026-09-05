import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ReticulaProyectos } from '@/components/project/ReticulaProyectos'
import { BarraCategorias } from '@/components/project/BarraCategorias'
import { Rule } from '@/components/ui/Rule'
import { getByCategory } from '@/lib/data/projects'
import { reconocimientos } from '@content/site'
import { puertaPorSlug } from '@content/puertas'
import { verticales, verticalDe } from '@content/verticales'
import { routing } from '@/i18n/routing'
import { alternativas } from '@/lib/metadatos'

/**
 * Una vertical del portafolio.
 *
 * Antes esto era `?categoria=educativo`: un parámetro que además se
 * autocanonicalizaba a `/proyectos`, así que el sitemap pedía indexar siete
 * páginas y las siete respondían que eran otra. Ahora cada una tiene dirección,
 * titular, texto y metadatos propios.
 *
 * Lo que la hace competir no es la URL, es lo que lleva dentro: el texto de
 * entrada, los reconocimientos que le corresponden y la puerta de servicio a la
 * que lleva. Una rejilla de fotos con encabezado se indexa y no posiciona.
 */
export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    verticales.map((v) => ({ locale, categoria: v.categoria })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; categoria: string }>
}): Promise<Metadata> {
  const { locale, categoria } = await params
  const v = verticalDe(categoria)
  if (!v) return {}

  return {
    title: v.metaTitulo,
    description: v.metaDescripcion,
    /* Canonical autorreferenciado, hreflang solo de lo traducido y el
       `robots` de esta ruta, los tres del mismo sitio. Va donde estaba
       `alternates` porque después solo vienen claves distintas: si
       alguien añade luego un `alternates` o un `robots` propio, este se
       pierde en silencio. */
    ...alternativas({ locale, entidad: { tipo: 'vertical', categoria: v.categoria } }),
    openGraph: {
      title: v.metaTitulo,
      description: v.metaDescripcion,
      url: `/${locale}/proyectos/categoria/${categoria}`,
    },
  }
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ locale: string; categoria: string }>
}) {
  const { locale, categoria } = await params
  setRequestLocale(locale)

  const v = verticalDe(categoria)
  if (!v) notFound()

  const proyectos = await getByCategory(v.categoria)
  if (proyectos.length === 0) notFound()

  const puerta = puertaPorSlug(v.puerta)

  /* Los reconocimientos que le tocan a esta vertical. Es la credencial más
     fuerte del estudio y aquí llega al lector que ya está mirando ese sector. */
  const premios = reconocimientos.filter((r) =>
    proyectos.some((p) => p.slug === r.proyectoSlug),
  )

  return (
    <div className="mx-auto max-w-[100rem] py-16 lg:py-24">
      <div className="px-gutter lg:px-10">
        <h1 className="text-h1 measure-display text-ink">{v.titulo}</h1>
        <p className="text-lead measure mt-8 text-ink-soft">{v.entrada}</p>
        <Rule className="mt-8 max-w-md text-muted">
          {proyectos.length} proyectos
        </Rule>
      </div>

      <BarraCategorias activa={v.categoria} />

      <ReticulaProyectos
        total={proyectos.length}
        conHuevo={false}
        className="grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {proyectos.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            priority={i < 4}
            sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </ReticulaProyectos>

      {premios.length > 0 ? (
        <section className="mt-24 px-gutter lg:px-10">
          <h2 className="text-h3 text-ink">
            {premios.length === 1
              ? 'Un reconocimiento en esta línea'
              : `${premios.length} reconocimientos en esta línea`}
          </h2>
          <ol className="mt-8 border-t border-line lg:max-w-4xl">
            {[...premios]
              .sort((a, b) => b.anio - a.anio)
              .map((r) => (
                <li
                  key={`${r.anio}-${r.titulo}`}
                  className="grid gap-2 border-b border-line py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
                >
                  <span className="text-h4 tabular-nums text-accent">
                    {r.anio}
                  </span>
                  <div>
                    <p className="text-h5 text-ink">
                      {r.puesto === 'primer' ? 'Primer puesto' : 'Segundo puesto'}
                      <span className="text-block ml-3 text-muted">
                        {r.ambito === 'publico'
                          ? 'concurso público'
                          : 'concurso privado'}
                      </span>
                    </p>
                    {r.proyectoSlug ? (
                      <Link
                        href={`/proyectos/${r.proyectoSlug}`}
                        className="text-small mt-1 inline-block text-ink-soft underline-offset-4 hover:text-accent hover:underline"
                      >
                        {r.titulo}
                      </Link>
                    ) : (
                      <p className="text-small mt-1 text-ink-soft">{r.titulo}</p>
                    )}
                  </div>
                </li>
              ))}
          </ol>
        </section>
      ) : null}

      {puerta ? (
        <section className="mt-24 border-t-2 border-signal px-gutter pt-10 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-10">
          <h2 className="text-h2 measure-display text-ink">
            {puerta.pregunta}
          </h2>
          <div className="mt-8 lg:mt-0">
            <p className="text-body text-ink-soft">{puerta.respuesta}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/servicios/${puerta.slug}`}
                className="text-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
              >
                Ver cómo trabajamos
              </Link>
              <Link
                href={`/dossier/${v.categoria}`}
                className="text-block border border-accent px-7 py-4 uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-paper"
              >
                Dossier del sector
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}
