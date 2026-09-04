import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Rule } from '@/components/ui/Rule'
import { posts } from '@content/posts'
import { routing } from '@/i18n/routing'
import { absoluteUrl, mediaSrc } from '@/lib/utils'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.titulo,
    description: post.resumen,
    alternates: { canonical: `/${locale}/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.titulo,
      description: post.resumen,
      publishedTime: post.fecha,
      images: post.portada
        ? [
            {
              url: mediaSrc(post.portada.path),
              width: post.portada.width,
              height: post.portada.height,
              alt: post.portada.alt,
            },
          ]
        : [],
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titulo,
    datePublished: post.fecha,
    author: { '@type': 'Person', name: post.autor },
    publisher: { '@type': 'Organization', name: 'Plano Base Arquitectos' },
    description: post.resumen,
    ...(post.portada ? { image: absoluteUrl(mediaSrc(post.portada.path)) } : {}),
  }

  return (
    <article className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <h1 className="text-h1 measure-display text-ink">{post.titulo}</h1>
        <Rule className="mt-6 text-muted">
          <time dateTime={post.fecha}>
            {new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'es-CO', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format(new Date(post.fecha))}
          </time>
        </Rule>
        <p className="text-small mt-3 text-ink-soft">{post.autor}</p>
      </header>

      {post.portada ? (
        <figure className="mt-14">
          <div
            className="relative w-full bg-mist"
            style={{
              aspectRatio: `${post.portada.width} / ${post.portada.height}`,
              maxWidth: '60rem',
            }}
          >
            <Image
              src={mediaSrc(post.portada.path)}
              alt={post.portada.alt}
              fill
              sizes="(min-width: 1024px) 60rem, 100vw"
              priority
              placeholder="blur"
              blurDataURL={post.portada.blurDataURL}
              className="object-contain"
            />
          </div>
          <figcaption className="text-block mt-3 text-muted">
            {post.portada.alt}
          </figcaption>
        </figure>
      ) : null}

      <div className="measure mt-14">
        {post.cuerpo.split(/\n{2,}/).map((parrafo, i) => (
          <p key={i} className="text-body mb-7 text-ink">
            {parrafo.replace(/^\*(.*)\*$/, '$1')}
          </p>
        ))}
      </div>
    </article>
  )
}
