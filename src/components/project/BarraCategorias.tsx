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
import { routing } from '@/i18n/routing'

/**
 * La navegación del portafolio. La comparten el índice y cada vertical, para
 * que se pueda saltar de una a otra sin volver atrás.
 *
 * Cada categoría con obra lleva a su propia página. Las vacías —que se muestran
 * a propósito, para declarar hacia dónde crece el estudio— no llevan a ninguna
 * parte y por eso **no son enlaces**: se pintan con su cero y ahí termina.
 *
 * Antes sí lo eran, hacia `/proyectos?categoria=comercial`, y ese parámetro
 * salía caro por partida doble. Obligaba a `/proyectos` a renderizarse en cada
 * visita —leer `searchParams` la saca del prerenderizado— y lo que servía a
 * cambio era una página que decía «todavía no hay obra publicada»: exactamente
 * el soft-404 que `content/ajustes.ts` se cuida de no dejar indexar. Un enlace
 * que promete obra y entrega un vacío no es navegación; el rótulo con su cero
 * ya dice lo mismo y no promete nada.
 */
export async function BarraCategorias({
  activa,
}: {
  activa: Categoria | null
}) {
  const tcat = await getTranslations('categorias')
  /* De la lista solo se usa `todos.length`, y cuántos proyectos hay no depende
     del idioma. Se pide en el editorial para no tener que enhebrar el locale
     hasta aquí por un número. */
  const [todos, counts] = await Promise.all([
    getProjects(routing.defaultLocale),
    getCategoryCounts(),
  ])

  const enlace = (c: Categoria | null) => {
    const activo = activa === c
    const n = c === null ? todos.length : (counts[c] ?? 0)

    /* `n > 0` va antes que la vertical y no es redundante: hoy solo hay
       verticales de categorías con obra, pero el día que se despublique el
       último proyecto de una, su página responde 404 —así está escrita— y este
       enlace apuntaría ahí. Con el conteo delante, la categoría se apaga sola
       el mismo día. */
    const destino =
      c === null
        ? '/proyectos'
        : n > 0 && verticalDe(c)
          ? `/proyectos/categoria/${c}`
          : null

    const forma =
      'text-small inline-flex items-baseline gap-2 whitespace-nowrap py-1 transition-colors'

    const cuerpo = (
      <>
        {c === null ? tcat('todos') : tcat(c)}
        <span className="text-block tabular-nums">{n}</span>
      </>
    )

    // Sin destino no hay enlace. Un `<a>` que no lleva a ninguna parte se
    // anuncia como enlace al lector de pantalla, recibe foco y no hace nada.
    if (destino === null) {
      return <span className={cn(forma, 'text-line')}>{cuerpo}</span>
    }

    return (
      <Link
        href={destino}
        aria-current={activo ? 'true' : undefined}
        className={cn(
          forma,
          activo
            ? 'text-ink underline underline-offset-8'
            : 'text-muted hover:text-accent',
        )}
      >
        {cuerpo}
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
