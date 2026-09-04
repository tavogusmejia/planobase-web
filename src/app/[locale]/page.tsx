import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { Hero } from '@/components/home/Hero'
import { ProjectCard } from '@/components/project/ProjectCard'
import { getFeatured, getHeroProjects, getStats } from '@/lib/data/projects'
import { asesoria, manifiesto } from '@content/site'
import { lineasServicio } from '@content/servicios'
import { formatCOP } from '@/lib/utils'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('home')
  const tc = await getTranslations('cta')

  const [hero, destacados, stats] = await Promise.all([
    getHeroProjects(),
    getFeatured(6),
    getStats(),
  ])

  return (
    <>
      {/* ---- Hero -----------------------------------------------------------
          Rotante, como el de Wix, pero con el nombre del proyecto visible y
          enlazando a su ficha: el carrusel actual es mudo y no lleva a ningún
          sitio. */}
      <Hero projects={hero} />

      {/* ---- Declaración ----------------------------------------------------
          El sitio actual no dice en ninguna parte qué hace el estudio. Este es
          el bloque que lo arregla, y va inmediatamente después del hero. */}
      <section className="mx-auto max-w-[100rem] px-gutter py-24 lg:px-10 lg:py-32">
        <p className="text-h3 measure text-ink">{manifiesto}</p>
      </section>

      {/* ---- Líneas de servicio --------------------------------------------
          Va antes del portafolio: quien llega desde una campaña necesita saber
          qué se puede contratar, no solo qué se ha construido. */}
      <section className="mx-auto max-w-[100rem] px-gutter lg:px-10">
        <h2 className="text-h2 text-ink">{t('serviciosTitulo')}</h2>
        <Rule className="mb-12 mt-4 text-muted">
          {lineasServicio.reduce((n, l) => n + l.servicios.length, 0)}
        </Rule>

        <ul className="grid gap-x-8 gap-y-10 border-t border-line pt-10 md:grid-cols-2">
          {lineasServicio.map((linea) => (
            <li key={linea.slug}>
              <Link
                href={`/servicios/${linea.slug}`}
                className="group block h-full"
              >
                <h3 className="text-h4 text-ink group-hover:text-accent">
                  {linea.nombre}
                </h3>
                <Rule className="mt-2 text-muted">
                  {linea.servicios.length}
                </Rule>
                <p className="text-small measure mt-4 text-ink-soft">
                  {linea.intro}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/servicios"
          className="text-h5 mt-12 inline-block text-accent underline-offset-8 hover:underline"
        >
          {tc('verServicios')}
        </Link>
      </section>

      {/* ---- Proyectos ------------------------------------------------------ */}
      <section className="mx-auto mt-32 max-w-[100rem] px-gutter lg:px-10">
        <h2 className="text-h2 text-ink">{t('proyectosTitulo')}</h2>
        <Rule className="mb-12 mt-4 text-muted">
          {tc('verTodos', { count: stats.proyectos })}
        </Rule>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {destacados.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 3} />
          ))}
        </div>

        <Link
          href="/proyectos"
          className="text-h5 mt-14 inline-block text-accent underline-offset-8 hover:underline"
        >
          {tc('verTodos', { count: stats.proyectos })}
        </Link>
      </section>

      {/* ---- Cifras ---------------------------------------------------------
          Calculadas del conjunto real de proyectos, nunca escritas a mano. */}
      <section className="mx-auto mt-32 max-w-[100rem] px-gutter lg:px-10">
        <h2 className="text-block mb-10 text-muted">{t('cifrasTitulo')}</h2>
        <dl className="grid gap-12 border-t border-line pt-12 sm:grid-cols-2 xl:grid-cols-4">
          {(
            [
              [stats.proyectos, t('cifraProyectos')],
              [stats.ciudades, t('cifraCiudades')],
              [stats.reconocimientos, t('cifraReconocimientos')],
              [stats.desde, t('cifraDesde', { anio: stats.desde })],
            ] as const
          ).map(([valor, etiqueta], i) => (
            <div key={i}>
              <dt className="text-h1 tabular-nums text-ink">{valor}</dt>
              <dd className="text-small measure mt-2 text-ink-soft">
                {i === 3 ? etiqueta.replace(String(valor), '').trim() : etiqueta}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---- Servicio -------------------------------------------------------
          Destino principal del tráfico de campaña. */}
      <section className="mx-auto mt-32 max-w-[100rem] px-gutter lg:px-10">
        <div className="border-t border-line pt-12 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h2 text-ink">{asesoria.nombre}</h2>
            <Rule className="mt-4 text-muted">
              {t('servicioDuracion', { minutos: asesoria.duracionMin })}
              &nbsp; {formatCOP(asesoria.precioCOP)}
            </Rule>
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="text-lead measure text-ink">{asesoria.tagline}</p>
            <p className="text-body measure mt-6 text-ink-soft">
              {asesoria.descripcion}
            </p>
            <Link
              href="/agendar"
              className="text-block mt-10 inline-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
            >
              {tc('reservar')}
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Cierre --------------------------------------------------------- */}
      <section className="mx-auto mt-32 max-w-[100rem] px-gutter lg:px-10">
        <div className="border-t border-line pt-12">
          <h2 className="text-h2 measure-display text-ink">{t('cierreTitulo')}</h2>
          <p className="text-lead mt-4 text-ink-soft">{t('cierreSub')}</p>
          <Link
            href="/contacto"
            className="text-h5 mt-8 inline-block text-accent underline-offset-8 hover:underline"
          >
            {tc('contactar')}
          </Link>
        </div>
      </section>
    </>
  )
}
