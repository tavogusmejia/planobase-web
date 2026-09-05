import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { TarjetaPost } from '@/components/blog/TarjetaPost'
import { posts, postsDelPilar } from '@content/posts'
import { pilares } from '@content/pilares'
import { postsDe } from '@/lib/data/posts'
import { absoluteUrl } from '@/lib/utils'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const url = `/${locale}/blog`
  const descripcion =
    'Cómo se lee una fisura, cuánto cuesta construir por metro cuadrado y qué ' +
    'exige una licencia en cada ciudad. Notas técnicas de un estudio de ' +
    'arquitectura colombiano, con las fuentes a la vista.'

  return {
    title: 'Blog',
    description: descripcion,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url: absoluteUrl(url),
      siteName: 'Plano Base',
      locale: locale === 'en' ? 'en_US' : 'es_CO',
      title: 'Blog · Plano Base',
      description: descripcion,
      images: [{ url: absoluteUrl('/og/default.jpg'), width: 1200, height: 630 }],
    },
  }
}

/**
 * El índice del blog.
 *
 * Era una rejilla plana ordenada por fecha, que funciona con una entrada y se
 * vuelve un muro con setenta y cinco. Ahora hay tres capas: la última pieza a
 * tamaño grande, la lista de temas con su cuenta —que es la navegación real y,
 * de paso, un bloque de enlaces internos hacia diez páginas que sí posicionan—,
 * y lo reciente debajo.
 *
 * Los temas son rutas propias y no un parámetro de consulta, por lo mismo que
 * las verticales del portafolio: un filtro que se autocanonicaliza al índice le
 * pide a Google indexar diez páginas que dicen ser otra.
 */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  /* El listado va traducido; las cuentas de más abajo no lo necesitan,
     porque cuántos artículos hay no depende del idioma. */
  const [ultimo, ...resto] = postsDe(locale)
  const conArticulos = pilares
    .map((p) => ({ pilar: p, cuenta: postsDelPilar(p.id).length }))
    .filter((x) => x.cuenta > 0)

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <header>
        <h1 className="text-h1 text-ink">Blog</h1>
        <p className="text-lead measure mt-8 text-ink-soft">
          Cómo se lee una fisura, cuánto cuesta construir por metro cuadrado y
          qué exige una licencia en cada ciudad. Notas técnicas, con las fuentes
          a la vista.
        </p>
        <Rule className="mt-8 text-muted">
          {posts.length} {posts.length === 1 ? 'entrada' : 'entradas'}
        </Rule>
      </header>

      {ultimo ? (
        <section className="mt-16 lg:mt-20">
          <h2 className="sr-only">Lo último</h2>
          <div className="lg:max-w-[60rem]">
            <TarjetaPost post={ultimo} locale={locale} destacada />
          </div>
        </section>
      ) : null}

      {conArticulos.length ? (
        <nav aria-label="Temas" className="mt-20 lg:mt-24">
          <h2 className="text-block text-muted">Temas</h2>
          <ul className="mt-6 border-t border-line">
            {conArticulos.map(({ pilar, cuenta }) => (
              <li key={pilar.id} className="border-b border-line">
                <Link
                  href={`/blog/tema/${pilar.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <span className="text-h5 text-ink group-hover:text-accent">
                    {pilar.titulo}
                  </span>
                  <span className="text-block shrink-0 tabular-nums text-muted">
                    {cuenta}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {resto.length ? (
        <section className="mt-20 lg:mt-24">
          <h2 className="text-block text-muted">Más entradas</h2>
          <ul className="mt-8 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {resto.map((post) => (
              <li key={post.slug}>
                <TarjetaPost post={post} locale={locale} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
