import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { ProjectCard } from '@/components/project/ProjectCard'
import { getFeatured, getStats } from '@/lib/data/projects'
import { equipo, manifiesto, reconocimientos } from '@content/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Estudio',
    /* El title de Wix decía "Arquitectura bioclimática en Bogotá". El estudio
       tiene sede en Cali y su mercado es el Valle del Cauca: era un error de
       posicionamiento, no solo de redacción. */
    description:
      'Plano Base es un estudio colaborativo de arquitectura con sede en Cali. ' +
      'Diseño integral de proyectos educativos, institucionales, culturales y ' +
      'residenciales, con cuatro reconocimientos en concurso público nacional.',
    alternates: { canonical: `/${locale}/estudio` },
  }
}

export default async function EstudioPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('home')
  const tc = await getTranslations('cta')
  const [proyectos, stats] = await Promise.all([getFeatured(6), getStats()])

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <h1 className="text-h1 measure text-ink">{manifiesto}</h1>

      {/* --- Equipo -------------------------------------------------------
          En el sitio actual los nombres están dentro de las imágenes: no son
          texto, no los lee un buscador ni un lector de pantalla. Aquí van en
          HTML. Son dos personas, no los cuatro retratos que mostraba Wix. */}
      <section className="mt-28">
        <h2 className="text-block mb-8 text-muted">Equipo</h2>
        <ul className="grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:max-w-4xl">
          {equipo.map((m) => (
            <li key={m.slug}>
              <h3 className="text-h3 text-ink">{m.nombre}</h3>
              <p className="text-small mt-2 text-ink-soft">
                {m.cargo.join(' · ')}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* --- Reconocimientos ----------------------------------------------
          Cuatro concursos públicos nacionales. Es la credencial más fuerte
          del estudio frente a una entidad y hoy está enterrada en una lista
          suelta al final de la página. */}
      <section className="mt-28">
        <h2 className="text-block mb-8 text-muted">Reconocimientos</h2>
        <ol className="border-t border-line">
          {[...reconocimientos]
            .sort((a, b) => b.anio - a.anio)
            .map((r) => (
              <li
                key={`${r.anio}-${r.titulo}`}
                className="grid gap-2 border-b border-line py-7 sm:grid-cols-[6rem_1fr] sm:gap-8"
              >
                <span className="text-h4 tabular-nums text-accent">
                  {r.anio}
                </span>
                <div>
                  <p className="text-h5 measure text-ink">
                    {r.puesto === 'primer' ? 'Primer puesto' : 'Segundo puesto'}
                  </p>
                  <p className="text-small measure mt-1 text-ink-soft">
                    {r.proyectoSlug ? (
                      <Link
                        href={`/proyectos/${r.proyectoSlug}`}
                        className="underline-offset-4 hover:text-accent hover:underline"
                      >
                        {r.titulo}
                      </Link>
                    ) : (
                      r.titulo
                    )}
                  </p>
                </div>
              </li>
            ))}
        </ol>
      </section>

      {/* --- Proyectos ------------------------------------------------------
          Una sola vez. En el sitio actual este bloque se renderiza duplicado. */}
      <section className="mt-28">
        <h2 className="text-h2 text-ink">{t('proyectosTitulo')}</h2>
        <Rule className="mb-12 mt-4 text-muted">{stats.proyectos}</Rule>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {proyectos.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <Link
          href="/proyectos"
          className="text-h5 mt-14 inline-block text-accent underline-offset-8 hover:underline"
        >
          {tc('verTodos', { count: stats.proyectos })}
        </Link>
      </section>

      <section className="mt-28 border-t border-line pt-12">
        <h2 className="text-h2 measure text-ink">{t('cierreTitulo')}</h2>
        <p className="text-lead mt-4 text-ink-soft">{t('cierreSub')}</p>
        <Link
          href="/contacto"
          className="text-h5 mt-8 inline-block text-accent underline-offset-8 hover:underline"
        >
          {tc('contactar')}
        </Link>
      </section>
    </div>
  )
}
