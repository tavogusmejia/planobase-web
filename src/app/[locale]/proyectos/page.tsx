import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ProjectCard } from '@/components/project/ProjectCard'
import { Rule } from '@/components/ui/Rule'
import { getCategoryCounts, getProjects } from '@/lib/data/projects'
import { CATEGORIAS, type Categoria } from '@/lib/types'
import { cn } from '@/lib/utils'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  return {
    title: t('proyectosTitulo'),
    description:
      'Portafolio de Plano Base Arquitectos: proyectos educativos, ' +
      'institucionales, culturales, residenciales y de espacio público en Colombia.',
    alternates: { canonical: `/${locale}/proyectos` },
  }
}

function esCategoria(v: string | undefined): v is Categoria {
  return CATEGORIAS.includes(v as Categoria)
}

/**
 * El filtro del sitio de Wix devolvía los 24 proyectos para cualquier etiqueta.
 *
 * Aquí filtra de verdad, y lo hace en el servidor: cada categoría es un enlace
 * con su propia URL (`?categoria=educativo`), así que el estado es compartible,
 * indexable, funciona con el botón atrás y no necesita una línea de JavaScript.
 */
export default async function ProyectosPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ categoria?: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const { categoria } = await searchParams
  const activa = esCategoria(categoria) ? categoria : null

  const t = await getTranslations('home')
  const tcat = await getTranslations('categorias')

  const [todos, counts] = await Promise.all([
    getProjects(),
    getCategoryCounts(),
  ])

  const visibles = activa
    ? todos.filter((p) => p.categorias.includes(activa))
    : todos

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <h1 className="text-h1 text-ink">{t('proyectosTitulo')}</h1>
      <Rule className="mt-4 text-muted">
        {visibles.length}
        {activa ? ` / ${todos.length}` : ''}
      </Rule>

      <nav aria-label="Filtrar por categoría" className="mt-12">
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          <li>
            <Link
              href="/proyectos"
              aria-current={activa === null ? 'true' : undefined}
              className={cn(
                'text-small transition-colors',
                activa === null
                  ? 'text-ink underline underline-offset-8'
                  : 'text-muted hover:text-accent',
              )}
            >
              {tcat('todos')} <span className="tabular-nums">{todos.length}</span>
            </Link>
          </li>
          {CATEGORIAS.map((c) => (
            <li key={c}>
              <Link
                href={`/proyectos?categoria=${c}`}
                aria-current={activa === c ? 'true' : undefined}
                className={cn(
                  'text-small transition-colors',
                  activa === c
                    ? 'text-ink underline underline-offset-8'
                    : 'text-muted hover:text-accent',
                )}
              >
                {tcat(c)}{' '}
                <span className="tabular-nums">{counts[c] ?? 0}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {visibles.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i < 3} />
        ))}
      </div>
    </div>
  )
}
