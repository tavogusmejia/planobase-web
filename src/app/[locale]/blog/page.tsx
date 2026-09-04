import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { posts } from '@content/posts'
import { mediaSrc } from '@/lib/utils'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Blog',
    description:
      'Apuntes del estudio sobre el oficio de hacer arquitectura en Colombia: ' +
      'procesos, decisiones de proyecto y el camino de crear empresa.',
    alternates: { canonical: `/${locale}/blog` },
  }
}

/**
 * Hay una sola entrada, de octubre de 2022. El plan de migración contemplaba
 * retirar el blog, pero el plan de campaña lo necesita: el contenido de
 * autoridad ("¿cuánto cuesta construir en Jamundí?") es uno de los cinco
 * pilares y también el imán de leads del día 7 del seguimiento.
 */
export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const ordenados = [...posts].sort((a, b) => b.fecha.localeCompare(a.fecha))

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <h1 className="text-h1 text-ink">Blog</h1>
      <Rule className="mt-4 text-muted">{ordenados.length}</Rule>

      <ul className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {ordenados.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              {post.portada ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                  <Image
                    src={mediaSrc(post.portada.path)}
                    alt={post.portada.alt}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL={post.portada.blurDataURL}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              ) : null}
              <h2 className="text-h4 mt-5 text-ink group-hover:text-accent">
                {post.titulo}
              </h2>
              <Rule className="mt-2 text-muted">
                <time dateTime={post.fecha}>
                  {new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'es-CO', {
                    year: 'numeric',
                    month: 'long',
                  }).format(new Date(post.fecha))}
                </time>
              </Rule>
              <p className="text-small measure mt-4 text-ink-soft">
                {post.resumen}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
