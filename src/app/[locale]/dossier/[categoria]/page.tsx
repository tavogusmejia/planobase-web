import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Logotipo } from '@/components/brand/Logotipo'
import { Rule } from '@/components/ui/Rule'
import { HojaProyecto } from '@/components/imprimible/HojaProyecto'
import { BotonImprimir } from '@/components/imprimible/BotonImprimir'
import { getByCategory, getCategoryCounts } from '@/lib/data/projects'
import { CATEGORIAS, type Categoria } from '@/lib/types'
import { contacto, reconocimientos, site } from '@content/site'
import { routing } from '@/i18n/routing'

/**
 * Dossier de un sector: portada más una hoja por proyecto.
 *
 * Es lo que hoy no existe y hace más falta: entre «mirar fotos» y «agendar una
 * llamada» no hay nada, y ese salto es enorme. Un dossier por sector es lo que
 * se le manda a una constructora o a una secretaría que pidió referencias.
 *
 * Sale entero de `content/projects.ts`: año, ciudad, área, cliente, premio y
 * memoria ya estaban ahí. No hay contenido nuevo que escribir ni mantener.
 *
 * Solo las categorías con obra. Un dossier vacío no es un documento.
 */
function esCategoria(v: string): v is Categoria {
  return CATEGORIAS.includes(v as Categoria)
}

export async function generateStaticParams() {
  const counts = await getCategoryCounts()
  const conObra = CATEGORIAS.filter((c) => (counts[c] ?? 0) > 0)
  return routing.locales.flatMap((locale) =>
    conObra.map((categoria) => ({ locale, categoria })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; categoria: string }>
}): Promise<Metadata> {
  const { locale, categoria } = await params
  if (!esCategoria(categoria)) return { robots: { index: false, follow: false } }
  const t = await getTranslations({ locale, namespace: 'categorias' })
  return {
    title: `Dossier · ${t(categoria)}`,
    robots: { index: false, follow: false },
  }
}

export default async function DossierPage({
  params,
}: {
  params: Promise<{ locale: string; categoria: string }>
}) {
  const { locale, categoria } = await params
  setRequestLocale(locale)
  if (!esCategoria(categoria)) notFound()

  const proyectos = await getByCategory(categoria)
  if (proyectos.length === 0) notFound()

  const t = await getTranslations('categorias')
  const nombre = t(categoria)

  return (
    <div className="bg-paper-2 py-10">
      <div
        data-sin-imprimir
        className="mx-auto mb-8 flex max-w-[210mm] flex-wrap items-center justify-between gap-4 px-gutter lg:px-12"
      >
        <p className="text-small text-ink-soft">
          {proyectos.length} proyectos. Guárdelo como PDF desde el diálogo de
          impresión.
        </p>
        <BotonImprimir>Imprimir o guardar</BotonImprimir>
      </div>

      {/* ---- Portada ------------------------------------------------------ */}
      <article className="hoja mx-auto flex min-h-[240mm] max-w-[210mm] flex-col justify-between bg-paper px-gutter py-10 lg:px-12">
        <Logotipo className="h-11 w-auto text-ink" />

        <div>
          <p className="text-block text-muted">Dossier de experiencia</p>
          <h1 className="text-h1 mt-3 text-ink">{nombre}</h1>
          <Rule className="mt-5 max-w-lg text-muted">
            {proyectos.length} proyectos
          </Rule>

          <ol className="mt-12 border-t border-line">
            {proyectos.map((p) => (
              <li
                key={p.slug}
                className="text-small flex justify-between gap-6 border-b border-line py-2.5 text-ink"
              >
                <span>{p.titulo}</span>
                <span className="tabular-nums text-muted">
                  {p.anio} · {p.ciudad}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="text-block text-muted">
          {/* La credencial más fuerte del estudio va en la portada, no
              enterrada: es lo primero que verifica un comprador institucional. */}
          <p className="text-small text-ink">
            {reconocimientos.length} reconocimientos en concurso
          </p>
          <p className="mt-4">
            {site.razonSocial} · {contacto.direccion}, {contacto.ciudad} ·{' '}
            {contacto.telefono} · {contacto.correo}
          </p>
        </div>
      </article>

      {proyectos.map((p) => (
        <HojaProyecto key={p.slug} project={p} />
      ))}
    </div>
  )
}
