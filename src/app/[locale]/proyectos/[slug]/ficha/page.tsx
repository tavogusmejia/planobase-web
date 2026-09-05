import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { HojaProyecto } from '@/components/imprimible/HojaProyecto'
import { BotonImprimir } from '@/components/imprimible/BotonImprimir'
import { getAllSlugs, getProject } from '@/lib/data/projects'
import { routing } from '@/i18n/routing'

/**
 * Ficha de experiencia de un proyecto, en una página.
 *
 * Es el documento que el estudio adjunta a una propuesta o a una oferta, y que
 * hasta hoy armaba a mano cada vez, copiando datos que ya estaban publicados.
 * Sale del mismo dato que la web, así que no puede quedarse desactualizada.
 *
 * No se indexa: no es contenido del sitio, es una herramienta de trabajo.
 */
/**
 * Sin parámetros dinámicos: lo que no está en `generateStaticParams` da 404.
 *
 * Hace falta porque esta hoja solo se genera en el idioma editorial. Con el
 * valor por defecto de `dynamicParams`, `/en/...` no daba 404 sino algo peor:
 * el documento en español servido bajo una URL inglesa, que es justo lo que la
 * restricción quería evitar.
 */
export const dynamicParams = false

/**
 * Solo en el idioma editorial.
 *
 * Es un documento para el papel: se adjunta a una propuesta o a un pliego
 * colombiano y sus rótulos —Año, Ubicación, Naturaleza— se leen en español. Va
 * en `noindex, nofollow`, así que su versión inglesa no tendría ninguna vía a
 * indexarse y solo serviría el mismo español bajo otra URL. Generarla es gastar
 * build en las únicas páginas que mostrarían español bajo `/en` sin remedio.
 *
 * Consecuencia que hay que respetar: en estas rutas **no se pinta el conmutador
 * de idioma**, o enlazaría a un 404.
 */
export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ locale: routing.defaultLocale, slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const project = await getProject(locale, slug)
  return {
    title: project ? `Ficha · ${project.titulo}` : 'Ficha',
    robots: { index: false, follow: false },
  }
}

export default async function FichaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const project = await getProject(locale, slug)
  if (!project) notFound()

  return (
    <div className="bg-paper-2 py-10">
      <div
        data-sin-imprimir
        className="mx-auto mb-8 flex max-w-[210mm] flex-wrap items-center justify-between gap-4 px-gutter lg:px-12"
      >
        <p className="text-small text-ink-soft">
          Guárdela como PDF desde el diálogo de impresión.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={`/proyectos/${project.slug}`}
            className="text-small text-accent underline-offset-4 hover:underline"
          >
            Ver el proyecto
          </Link>
          <BotonImprimir>Imprimir o guardar</BotonImprimir>
        </div>
      </div>

      <HojaProyecto project={project} />
    </div>
  )
}
