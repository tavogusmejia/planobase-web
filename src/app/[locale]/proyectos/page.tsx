import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ReticulaProyectos } from '@/components/project/ReticulaProyectos'
import { Rule } from '@/components/ui/Rule'
import { getCategoryCounts, getProjects } from '@/lib/data/projects'
import {
  CATEGORIAS,
  CATEGORIAS_NATURALEZA,
  CATEGORIAS_PROGRAMA,
  type Categoria,
} from '@/lib/types'
import { cn } from '@/lib/utils'
import { mostrarCategoriasVacias } from '@content/ajustes'

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ categoria?: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { categoria } = await searchParams
  const t = await getTranslations({ locale, namespace: 'home' })

  const activa = esCategoria(categoria) ? categoria : null
  const counts = await getCategoryCounts()
  const vacia = activa !== null && (counts[activa] ?? 0) === 0

  return {
    title: t('proyectosTitulo'),
    description:
      'Portafolio de Plano Base Arquitectos: proyectos educativos, ' +
      'institucionales, culturales, residenciales y de espacio público en Colombia.',
    alternates: { canonical: `/${locale}/proyectos` },
    // Una categoría sin obra devuelve «todavía no hay obra publicada». Indexar
    // eso es sembrar soft-404, y acumularlos le baja la confianza a todo el
    // dominio. Se puede ver y compartir; no se indexa hasta que tenga obra.
    ...(vacia ? { robots: { index: false, follow: true } } : {}),
  }
}

function esCategoria(v: string | undefined): v is Categoria {
  return CATEGORIAS.includes(v as Categoria)
}

/**
 * El portafolio.
 *
 * Dos cosas que el sitio de Wix no hacía. Una, el filtro devolvía los 24
 * proyectos para cualquier etiqueta; aquí filtra de verdad y lo hace en el
 * servidor: cada categoría es un enlace con su propia URL
 * (`?categoria=educativo`), así que el estado es compartible, indexable,
 * funciona con el botón atrás y no necesita una línea de JavaScript.
 *
 * Dos, la retícula. Va a sangre y sin aire entre piezas, separada apenas por el
 * mismo filete de un cuadro de planchas: la fotografía manda y el conjunto se
 * lee como una sola superficie. Los rótulos se revelan al recorrerla.
 *
 * Que las categorías vacías se muestren con su cero no es un descuido: declara
 * el alcance del estudio y deja el hueco donde va a entrar la obra futura. Se
 * apaga desde `mostrarCategoriasVacias`, en content/ajustes.ts. Con cualquiera
 * de los dos valores, una categoría vacía nunca entra al sitemap y se sirve con
 * `noindex`.
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

  const enlace = (c: Categoria | null) => {
    const activo = activa === c
    const n = c === null ? todos.length : (counts[c] ?? 0)
    return (
      <Link
        href={c === null ? '/proyectos' : `/proyectos?categoria=${c}`}
        aria-current={activo ? 'true' : undefined}
        className={cn(
          'text-small inline-flex items-baseline gap-2 whitespace-nowrap py-1 transition-colors',
          activo
            ? 'text-ink underline underline-offset-8'
            : n === 0
              ? 'text-line hover:text-muted'
              : 'text-muted hover:text-accent',
        )}
      >
        {c === null ? tcat('todos') : tcat(c)}
        <span className="text-block tabular-nums">{n}</span>
      </Link>
    )
  }

  return (
    <div className="mx-auto max-w-[100rem] py-16 lg:py-24">
      <div className="px-gutter lg:px-10">
        <h1 className="text-h1 text-ink">{t('proyectosTitulo')}</h1>
        <Rule className="mt-4 max-w-md text-muted">
          {visibles.length}
          {activa ? ` / ${todos.length}` : ''}
        </Rule>
      </div>

      {/* La barra de categorías. En móvil corre en horizontal en vez de
          apilarse en cuatro renglones y empujar la retícula fuera de pantalla. */}
      <nav
        aria-label={tcat('etiqueta')}
        className="mt-12 border-y border-line"
      >
        <ul className="flex items-baseline gap-x-6 gap-y-2 overflow-x-auto px-gutter py-4 lg:flex-wrap lg:px-10">
          <li>{enlace(null)}</li>
          {CATEGORIAS_PROGRAMA.filter(
            (c) => mostrarCategoriasVacias || (counts[c] ?? 0) > 0,
          ).map((c) => (
            <li key={c}>{enlace(c)}</li>
          ))}
          {/* Concursos cruza el eje del programa, así que va separado: un
              proyecto puede ser Educativo y Concurso a la vez. */}
          <li aria-hidden className="h-4 w-px shrink-0 self-center bg-line" />
          {CATEGORIAS_NATURALEZA.map((c) => (
            <li key={c}>{enlace(c)}</li>
          ))}
        </ul>
      </nav>

      {visibles.length > 0 ? (
        /* El filete entre piezas es el propio fondo asomando por el `gap`. */
        <ReticulaProyectos
          total={visibles.length}
          conHuevo={activa === null}
          className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          {visibles.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              priority={i < 4}
              sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </ReticulaProyectos>
      ) : (
        <p className="text-lead measure px-gutter py-24 text-muted lg:px-10">
          {tcat('sinProyectos')}
        </p>
      )}
    </div>
  )
}
