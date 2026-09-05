import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import type { Post } from '@/lib/types'
import { mediaSrc } from '@/lib/utils'
import { minutosDeLectura } from '@content/posts'
import { pilarPorId } from '@content/pilares'
import { mesYAno } from '@/lib/formato'

/**
 * La tarjeta de artículo. Una sola, compartida por el índice, las páginas de
 * pilar y los relacionados: tres tarjetas distintas para lo mismo es cómo un
 * sitio empieza a verse desordenado sin que nadie sepa señalar dónde.
 *
 * `destacada` no cambia el contenido, solo la escala. La jerarquía se hace con
 * tamaño y aire, no con peso tipográfico (CLAUDE.md).
 */
export function TarjetaPost({
  post,
  locale,
  destacada = false,
  mostrarPilar = true,
}: {
  post: Post
  locale: string
  destacada?: boolean
  mostrarPilar?: boolean
}) {
  const pilar = pilarPorId.get(post.pilar)
  const minutos = minutosDeLectura(post)

  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="group block">
        {post.portada ? (
          <div
            className={`relative overflow-hidden bg-mist ${
              destacada ? 'aspect-[16/9]' : 'aspect-[16/10]'
            }`}
          >
            <Image
              src={mediaSrc(post.portada.path)}
              alt={post.portada.alt}
              fill
              sizes={
                destacada
                  ? '(min-width: 1024px) 60vw, 100vw'
                  : '(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw'
              }
              placeholder="blur"
              blurDataURL={post.portada.blurDataURL}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        ) : null}

        <h3
          className={`${destacada ? 'text-h3' : 'text-h4'} mt-5 text-ink group-hover:text-accent`}
        >
          {post.titulo}
        </h3>

        <Rule className="mt-3 text-muted">
          <time dateTime={post.fecha}>
            {mesYAno(locale, post.fecha)}
          </time>
        </Rule>

        <p
          className={`${destacada ? 'text-body' : 'text-small'} measure mt-4 text-ink-soft`}
        >
          {post.resumen}
        </p>
      </Link>

      <p className="text-block mt-3 text-muted">
        {mostrarPilar && pilar ? (
          <>
            <Link href={`/blog/tema/${pilar.slug}`} className="hover:text-ink">
              {pilar.nombre}
            </Link>
            <span aria-hidden> · </span>
          </>
        ) : null}
        {minutos} min
      </p>
    </article>
  )
}
