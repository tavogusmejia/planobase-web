import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { getCategoryCounts, getProjects } from '@/lib/data/projects'
import {
  CATEGORIAS_NATURALEZA,
  CATEGORIAS_PROGRAMA,
  type Categoria,
} from '@/lib/types'
import { mostrarCategoriasVacias } from '@content/ajustes'
import { verticalDe } from '@content/verticales'
import { cn } from '@/lib/utils'

/**
 * La navegación del portafolio. La comparten el índice y cada vertical, para
 * que se pueda saltar de una a otra sin volver atrás.
 *
 * Cada categoría con obra lleva a su propia página. Las vacías —que se muestran
 * a propósito, para declarar hacia dónde crece el estudio— no tienen página
 * adonde ir: se quedan en el filtro del índice, que sí sabe devolver «todavía
 * no hay obra publicada».
 */
export async function BarraCategorias({
  activa,
}: {
  activa: Categoria | null
}) {
  const tcat = await getTranslations('categorias')
  const [todos, counts] = await Promise.all([getProjects(), getCategoryCounts()])

  const enlace = (c: Categoria | null) => {
    const activo = activa === c
    const n = c === null ? todos.length : (counts[c] ?? 0)
    const destino =
      c === null
        ? '/proyectos'
        : verticalDe(c)
          ? `/proyectos/categoria/${c}`
          : `/proyectos?categoria=${c}`

    return (
      <Link
        href={destino}
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
    <nav aria-label={tcat('etiqueta')} className="mt-12 border-y border-line">
      {/* En móvil corre en horizontal en vez de apilarse en cuatro renglones y
          empujar la retícula fuera de pantalla. */}
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
  )
}
