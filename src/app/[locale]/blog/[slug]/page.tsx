import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Cuerpo } from '@/components/blog/Cuerpo'
import { Rule } from '@/components/ui/Rule'
import { minutosDeLectura, posts } from '@content/posts'
import { pilarPorId } from '@content/pilares'
import { puertas } from '@content/puertas'
import { postDe } from '@/lib/data/posts'
import { routing } from '@/i18n/routing'
import { absoluteUrl, mediaSrc } from '@/lib/utils'
import { fechaLarga } from '@/lib/formato'
import { alternativas } from '@/lib/metadatos'

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
  const post = postDe(locale, slug)
  if (!post) return {}

  const url = `/${locale}/blog/${slug}`
  const imagen = post.portada
    ? {
        url: absoluteUrl(mediaSrc(post.portada.path)),
        width: post.portada.width,
        height: post.portada.height,
        alt: post.portada.alt,
      }
    : { url: absoluteUrl('/og/default.jpg'), width: 1200, height: 630, alt: post.titulo }

  return {
    title: post.titulo,
    description: post.metaDescripcion,
    /* Canonical autorreferenciado, hreflang solo de lo traducido y el
       `robots` de esta ruta, los tres del mismo sitio. Va donde estaba
       `alternates` porque después solo vienen claves distintas: si
       alguien añade luego un `alternates` o un `robots` propio, este se
       pierde en silencio. */
    ...alternativas({ locale, entidad: { tipo: 'articulo', slug } }),
    /* `openGraph` se declara COMPLETO, con `url` incluida. Next mezcla este
       objeto con el del layout de forma superficial: declarar solo `title` deja
       la imagen y la url del layout, y entonces todas las páginas se comparten
       en WhatsApp con la misma tarjeta. Es el error que ya tenían las páginas
       interiores del sitio. */
    openGraph: {
      type: 'article',
      url: absoluteUrl(url),
      siteName: 'Plano Base',
      locale: locale === 'en' ? 'en_US' : 'es_CO',
      title: post.titulo,
      description: post.metaDescripcion,
      publishedTime: post.fecha,
      ...(post.actualizado ? { modifiedTime: post.actualizado } : {}),
      authors: [post.autor],
      images: [imagen],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titulo,
      description: post.metaDescripcion,
      images: [imagen.url],
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

  const post = postDe(locale, slug)
  if (!post) notFound()

  const pilar = pilarPorId.get(post.pilar)
  const puerta = post.puerta
    ? puertas.find((p) => p.slug === post.puerta)
    : undefined
  const minutos = minutosDeLectura(post)
  const url = absoluteUrl(`/${locale}/blog/${slug}`)

  const fecha = (iso: string) => fechaLarga(locale, iso)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.titulo,
      description: post.metaDescripcion,
      datePublished: post.fecha,
      dateModified: post.actualizado ?? post.fecha,
      /* `mainEntityOfPage` le dice a Google cuál es la URL canónica de este
         artículo. Sin él, un artículo sindicado o copiado compite con el
         original por la autoría. */
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Person', name: post.autor },
      /* Se referencia el nodo de la organización en vez de redeclararlo: una
         organización anónima por página compite con la del sitio. Y el logo es
         obligatorio para los resultados enriquecidos de artículo. */
      publisher: {
        '@id': absoluteUrl('/#estudio'),
        '@type': 'Organization',
        name: 'Plano Base Arquitectos',
        /* Raster y no el SVG de marca: Google no acepta SVG en `ImageObject`,
           así que un logotipo vectorial aquí equivale a no declarar logo, y sin
           logo no hay resultado enriquecido de artículo. */
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/og/logotipo.png'),
          width: 600,
          height: 60,
        },
      },
      inLanguage: locale === 'en' ? 'en' : 'es-CO',
      ...(post.portada
        ? { image: absoluteUrl(mediaSrc(post.portada.path)) }
        : {}),
      ...(post.fuentes.length
        ? { citation: post.fuentes.map((f) => f.url) }
        : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Blog', item: absoluteUrl(`/${locale}/blog`) },
        ...(pilar
          ? [
              {
                '@type': 'ListItem',
                position: 2,
                name: pilar.nombre,
                item: absoluteUrl(`/${locale}/blog/tema/${pilar.slug}`),
              },
            ]
          : []),
        { '@type': 'ListItem', position: pilar ? 3 : 2, name: post.titulo, item: url },
      ],
    },
  ]

  return (
    <article className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Ruta" className="text-block mb-10 text-muted">
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
        {pilar ? (
          <>
            <span aria-hidden> · </span>
            <Link href={`/blog/tema/${pilar.slug}`} className="hover:text-ink">
              {pilar.nombre}
            </Link>
          </>
        ) : null}
      </nav>

      <header>
        <h1 className="text-h1 measure-display text-ink">{post.titulo}</h1>
        <p className="text-lead measure mt-8 text-ink-soft">{post.resumen}</p>
        <Rule className="mt-8 text-muted">
          <time dateTime={post.fecha}>{fecha(post.fecha)}</time>
        </Rule>
        <p className="text-block mt-3 text-muted">
          {post.autor}
          <span aria-hidden> · </span>
          {minutos} min de lectura
          {post.actualizado ? (
            <>
              <span aria-hidden> · </span>
              <span>Actualizado el {fecha(post.actualizado)}</span>
            </>
          ) : null}
        </p>
      </header>

      {post.portada ? (
        <figure className="measure-ancho mt-14">
          <div
            className="relative w-full bg-mist"
            style={{ aspectRatio: `${post.portada.width} / ${post.portada.height}` }}
          >
            <Image
              src={mediaSrc(post.portada.path)}
              alt={post.portada.alt}
              fill
              sizes="(min-width: 1024px) 48rem, 100vw"
              priority
              placeholder="blur"
              blurDataURL={post.portada.blurDataURL}
              className="object-cover"
            />
          </div>
          <figcaption className="text-block mt-3 flex flex-wrap gap-x-4 gap-y-1 text-muted">
            <span>{post.portada.alt}</span>
            {post.portada.credito ? (
              <span>
                {post.portada.credito.autor}
                {' · '}
                <a
                  href={post.portada.credito.url}
                  className="enlace"
                  target="_blank"
                  rel="noreferrer"
                >
                  {post.portada.credito.fuente}
                </a>
                {' · '}
                {post.portada.credito.licencia}
              </span>
            ) : null}
          </figcaption>
        </figure>
      ) : null}

      <Cuerpo bloques={post.cuerpo} />

      {post.fuentes.length ? (
        <section className="measure mt-20 border-t border-line pt-8">
          <h2 className="text-block text-muted">Fuentes</h2>
          <ol className="mt-6">
            {post.fuentes.map((f, i) => (
              <li key={f.url} className="text-small mb-4 flex gap-4 text-ink-soft">
                <span aria-hidden className="text-block shrink-0 pt-[0.3em] tabular-nums text-muted">
                  {i + 1}
                </span>
                <span>
                  <a href={f.url} className="enlace" target="_blank" rel="noreferrer">
                    {f.titulo}
                  </a>
                  <span className="text-muted">
                    {' · '}
                    {f.editor}
                    {f.fecha ? ` · ${fecha(f.fecha)}` : ''}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {puerta ? (
        <section className="measure mt-20 border-t border-line pt-10">
          <h2 className="text-h4 text-ink">{puerta.pregunta}</h2>
          <p className="text-body mt-4 text-ink-soft">{puerta.respuesta}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link href={`/servicios/${puerta.slug}`} className="text-block enlace">
              {puerta.nombre}
            </Link>
            <Link href="/agendar" className="text-block enlace">
              Agendar asesoría
            </Link>
          </div>
        </section>
      ) : null}
    </article>
  )
}
