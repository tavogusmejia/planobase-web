import Image from 'next/image'
import type { Bloque } from '@/lib/types'
import { mediaSrc } from '@/lib/utils'
import { EnLinea } from './EnLinea'

/**
 * El cuerpo de un artículo.
 *
 * Dos anchos, y esa es toda la retícula: la prosa vive en `measure` —68
 * caracteres, la misma medida de lectura del resto del sitio— y lo que no se
 * lee en renglón corrido (tabla, imagen, diagrama) se sale a `measure-ancho`.
 * Una tabla de umbrales dentro de 34 rem es ilegible, y un párrafo a lo ancho
 * de la pantalla también.
 *
 * Toda tabla scrollea dentro de su propio contenedor: el cuerpo de la página
 * nunca puede desplazarse en horizontal.
 */
export function Cuerpo({ bloques }: { bloques: Bloque[] }) {
  return (
    <div className="mt-14">
      {bloques.map((b, i) => (
        <BloqueVista key={i} bloque={b} />
      ))}
    </div>
  )
}

function BloqueVista({ bloque }: { bloque: Bloque }) {
  switch (bloque.tipo) {
    case 'titulo':
      return bloque.nivel === 2 ? (
        <h2 className="text-h3 measure-display mt-16 mb-6 text-ink">
          {bloque.texto}
        </h2>
      ) : (
        <h3 className="text-h5 measure mt-12 mb-4 text-ink">{bloque.texto}</h3>
      )

    case 'parrafo':
      return (
        <p className="text-body measure mb-7 text-ink-soft">
          <EnLinea texto={bloque.texto} />
        </p>
      )

    case 'lista': {
      const Etiqueta = bloque.ordenada ? 'ol' : 'ul'
      return (
        <Etiqueta className="measure mb-7 border-t border-line">
          {bloque.items.map((item, i) => (
            <li
              key={i}
              className="text-body flex gap-4 border-b border-line py-4 text-ink-soft"
            >
              <span
                aria-hidden
                className="text-block shrink-0 pt-[0.45em] tabular-nums text-muted"
              >
                {bloque.ordenada ? `${i + 1}` : '—'}
              </span>
              <span>
                <EnLinea texto={item} />
              </span>
            </li>
          ))}
        </Etiqueta>
      )
    }

    case 'tabla':
      return (
        <figure className="measure-ancho mb-10">
          {/* Sin este contenedor, una tabla ancha empuja el scroll horizontal
              a toda la página en un teléfono. */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  {bloque.cabeceras.map((c, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="text-block border-b border-ink py-3 pr-6 align-bottom font-normal text-muted"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bloque.filas.map((fila, i) => (
                  <tr key={i}>
                    {fila.map((celda, j) => (
                      <td
                        key={j}
                        className="text-small border-b border-line py-3 pr-6 align-top text-ink-soft tabular-nums"
                      >
                        <EnLinea texto={celda} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {bloque.nota ? (
            <figcaption className="text-block mt-3 text-muted">
              <EnLinea texto={bloque.nota} />
            </figcaption>
          ) : null}
        </figure>
      )

    case 'cita':
      return (
        <figure className="measure mt-10 mb-10 border-l border-accent pl-6">
          <blockquote className="text-lead text-ink">
            <EnLinea texto={bloque.texto} />
          </blockquote>
          {bloque.fuente ? (
            <figcaption className="text-block mt-3 text-muted">
              <EnLinea texto={bloque.fuente} />
            </figcaption>
          ) : null}
        </figure>
      )

    case 'imagen': {
      const { imagen } = bloque
      return (
        <figure className="measure-ancho mt-10 mb-12">
          <div
            className="relative w-full bg-mist"
            style={{ aspectRatio: `${imagen.width} / ${imagen.height}` }}
          >
            <Image
              src={mediaSrc(imagen.path)}
              alt={imagen.alt}
              fill
              sizes="(min-width: 1024px) 48rem, 100vw"
              placeholder="blur"
              blurDataURL={imagen.blurDataURL}
              className="object-cover"
            />
          </div>
          <figcaption className="text-block mt-3 flex flex-wrap gap-x-4 gap-y-1 text-muted">
            <span>{imagen.alt}</span>
            {imagen.credito ? (
              // El crédito no es cortesía: si la imagen no es del estudio, es
              // la condición bajo la que se puede publicar.
              <span>
                {imagen.credito.autor}
                {' · '}
                <a
                  href={imagen.credito.url}
                  className="enlace"
                  target="_blank"
                  rel="noreferrer"
                >
                  {imagen.credito.fuente}
                </a>
                {' · '}
                {imagen.credito.licencia}
              </span>
            ) : null}
          </figcaption>
        </figure>
      )
    }

    case 'nota':
      return (
        <aside className="measure mt-8 mb-8 border-t border-b border-line py-6">
          <p className="text-small text-ink">
            <EnLinea texto={bloque.texto} />
          </p>
        </aside>
      )

    case 'dato':
      return (
        <div className="measure mt-10 mb-10">
          <p className="text-h2 tabular-nums text-ink">{bloque.valor}</p>
          <p className="text-small mt-2 text-ink-soft">
            <EnLinea texto={bloque.etiqueta} />
          </p>
          <p className="text-block mt-2 text-muted">
            <EnLinea texto={bloque.fuente} />
          </p>
        </div>
      )

    case 'diagrama':
      return (
        <figure className="measure-ancho mt-10 mb-12">
          <div
            className="[&_svg]:h-auto [&_svg]:w-full text-ink"
            role="img"
            aria-label={bloque.titulo}
            /* SVG propio, constante del repositorio, resuelto en el build.
               Nunca hay entrada de usuario en este campo. */
            dangerouslySetInnerHTML={{ __html: bloque.svg }}
          />
          <figcaption className="text-block mt-3 text-muted">
            {bloque.pie}
          </figcaption>
        </figure>
      )
  }
}
