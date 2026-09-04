import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { ProjectCard } from '@/components/project/ProjectCard'
import {
  getFeatured,
  getHeroProjects,
  getStats,
} from '@/lib/data/projects'
import { asesoria, manifiesto } from '@content/site'
import { formatCOP, mediaSrc } from '@/lib/utils'

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

  const principal = hero[0]

  return (
    <>
      {/* ---- Hero -----------------------------------------------------------
          Una sola imagen a sangre en vez del carrusel de Wix. El nombre del
          proyecto va visible sobre la foto — en el sitio actual el hero es mudo
          y no enlaza a ninguna parte. */}
      {principal?.portada ? (
        <section className="relative">
          <Link
            href={`/proyectos/${principal.slug}`}
            className="group block"
            aria-label={`${principal.titulo}, ${principal.anio}, ${principal.ciudad}`}
          >
            <div className="relative h-[78svh] min-h-[30rem] w-full bg-ink">
              <Image
                src={mediaSrc(principal.portada.path)}
                alt={principal.portada.alt}
                fill
                sizes="100vw"
                priority
                placeholder="blur"
                blurDataURL={principal.portada.blurDataURL}
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/70 to-transparent"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 px-gutter pb-10 lg:px-10">
              <div className="mx-auto max-w-[100rem] text-paper">
                <h1 className="text-display">{principal.titulo}</h1>
                <Rule draw tone="paper" className="mt-3 max-w-3xl text-paper/80">
                  {principal.anio} &nbsp; {principal.ciudad}
                </Rule>
              </div>
            </div>
          </Link>
        </section>
      ) : null}

      {/* ---- Declaración ----------------------------------------------------
          El sitio actual no dice en ninguna parte qué hace el estudio. Este es
          el bloque que lo arregla, y va inmediatamente después del hero. */}
      <section className="mx-auto max-w-[100rem] px-gutter py-24 lg:px-10 lg:py-32">
        <p className="text-h3 measure text-ink">{manifiesto}</p>
      </section>

      {/* ---- Proyectos ------------------------------------------------------ */}
      <section className="mx-auto max-w-[100rem] px-gutter lg:px-10">
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
          <h2 className="text-h2 measure text-ink">{t('cierreTitulo')}</h2>
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
