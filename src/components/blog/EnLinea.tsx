import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'

/**
 * Formato en línea del cuerpo de un artículo.
 *
 * Tres marcas y ninguna más: `**fuerte**`, `*énfasis*` y `[texto](url)`. No es
 * markdown ni pretende serlo — es el mínimo para escribir prosa técnica que
 * cita fuentes, y cada sintaxis añadida es una forma nueva de que un artículo
 * se rompa en silencio.
 *
 * No hay `dangerouslySetInnerHTML` aquí: el texto se parte y se devuelve como
 * nodos de React, así que un corchete suelto en el contenido no puede
 * convertirse en marcado.
 */

/** `**fuerte**` · `*énfasis*` · `[texto](url)`, en ese orden de precedencia. */
const PATRON = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)\s]+)\)/g

export function EnLinea({ texto }: { texto: string }): ReactNode {
  const nodos: ReactNode[] = []
  let ultimo = 0
  let n = 0

  for (const m of texto.matchAll(PATRON)) {
    const inicio = m.index
    if (inicio > ultimo) nodos.push(texto.slice(ultimo, inicio))

    const [, fuerte, enfasis, rotulo, href] = m

    if (fuerte !== undefined) {
      // Peso 400 en todo el sitio (CLAUDE.md): el énfasis fuerte no se hace
      // con negrita sino con el color de tinta plena sobre el gris del cuerpo.
      nodos.push(
        <strong key={n++} className="font-normal text-ink">
          {fuerte}
        </strong>,
      )
    } else if (enfasis !== undefined) {
      nodos.push(<em key={n++}>{enfasis}</em>)
    } else if (rotulo !== undefined && href !== undefined) {
      nodos.push(
        href.startsWith('/') ? (
          <Link key={n++} href={href} className="enlace">
            {rotulo}
          </Link>
        ) : (
          <a
            key={n++}
            href={href}
            className="enlace"
            target="_blank"
            rel="noreferrer"
          >
            {rotulo}
          </a>
        ),
      )
    }

    ultimo = inicio + m[0].length
  }

  if (ultimo < texto.length) nodos.push(texto.slice(ultimo))
  return nodos
}
