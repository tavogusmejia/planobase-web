import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { Hero } from '@/components/home/Hero'
import { ProjectCard } from '@/components/project/ProjectCard'
import { getFeatured, getHeroProjects, getStats } from '@/lib/data/projects'
import { asesoria, contacto, manifiesto, site } from '@content/site'
import { puertas } from '@content/puertas'
import { formatCOP } from '@/lib/utils'

/**
 * La home no tenía metadatos propios: heredaba los del layout, sin canonical.
 * Es la página con más autoridad del dominio y la que compite por la consulta de
 * cabeza del negocio —«arquitectos en Cali»—, así que merece los suyos.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const titulo = `${site.nombreLargo} | Estudio de arquitectura en Cali`

  return {
    // `absolute` evita que la plantilla del layout lo convierta en
    // "... | Plano Base | Plano Base".
    title: { absolute: titulo },
    alternates: { canonical: `/${locale}` },
    // La imagen se repite aquí aunque el layout ya la declare: Next mezcla los
    // metadatos de forma SUPERFICIAL, así que un `openGraph` en una página
    // reemplaza entero el del layout en vez de completarlo. Sin esta línea, la
    // página más compartida del sitio es la única que se comparte sin imagen.
    openGraph: {
      title: titulo,
      url: `/${locale}`,
      images: [
        {
          url: '/og/default.jpg',
          width: 1200,
          height: 630,
          alt: `${site.nombreLargo}, Cali`,
        },
      ],
    },
  }
}

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
      {/* El encabezado real de la página. Va oculto a la vista porque quien
          manda visualmente es la fotografía a sangre, pero la home tenía SIETE
          <h1>, todos nombres de proyecto: para un rastreador, la página
          principal del estudio se titulaba "Casa Aguilar". */}
      <h1 className="sr-only">
        {site.nombreLargo}, estudio de arquitectura en {contacto.ciudad}
      </h1>

      <Hero projects={hero} />

      {/* ---- Declaración ----------------------------------------------------
          El sitio actual no dice en ninguna parte qué hace el estudio. Este es
          el bloque que lo arregla, y va inmediatamente después del hero. */}
      <section className="mx-auto max-w-[100rem] px-gutter py-24 lg:px-10 lg:py-32">
        <p className="text-h3 measure text-ink">{manifiesto}</p>
      </section>

      {/* ---- Servicios ------------------------------------------------------
          Cinco puertas, tituladas con la pregunta del cliente. La lista de 43
          servicios del portafolio queda para la propuesta formal: publicarla
          entera hace ver al estudio como un contratista de todo. */}
      <section className="mx-auto max-w-[100rem] px-gutter lg:px-10">
        <h2 className="text-h2 measure-display text-ink">
          Empezamos por su pregunta, no por nuestro catálogo.
        </h2>
        <Rule className="mb-2 mt-6 max-w-md text-muted">
          {puertas.length}
        </Rule>

        <ul className="mt-10 border-t border-line">
          {puertas.map((p) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                href={`/servicios/${p.slug}`}
                className="group block py-7 lg:grid lg:grid-cols-[1fr_20rem] lg:gap-12"
              >
                <h3 className="text-h3 text-ink transition-colors group-hover:text-accent">
                  {p.pregunta}
                </h3>
                <p className="text-block mt-2 text-muted lg:mt-3">{p.nombre}</p>
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

        {/* Misma retícula del portafolio: a filete, sin aire entre piezas.
            Los rótulos se revelan al recorrerla con el cursor. */}
        <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
          {destacados.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              priority={i < 3}
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
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
