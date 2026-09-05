import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { TarjetaPost } from '@/components/blog/TarjetaPost'
import { postsDelPilar } from '@content/posts'
import { pilares } from '@content/pilares'
import { pilarDe } from '@/lib/data/contenido'
import { puertas } from '@content/puertas'
import { postsDelPilarDe } from '@/lib/data/posts'
import { routing } from '@/i18n/routing'
import { absoluteUrl } from '@/lib/utils'
import { alternativas } from '@/lib/metadatos'

/**
 * Página de tema.
 *
 * Solo existe si hay artículos debajo: `generateStaticParams` filtra por cuenta,
 * igual que el sitemap. Una página de tema vacía es una página delgada pidiendo
 * posicionarse por algo que no hay, y eso le baja la confianza al dominio
 * entero — el mismo criterio que ya aplica `content/verticales.ts`.
 */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    pilares
      .filter((p) => postsDelPilar(p.id).length > 0)
      .map((p) => ({ locale, pilar: p.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; pilar: string }>
}): Promise<Metadata> {
  const { locale, pilar: slug } = await params
  const pilar = pilarDe(locale, slug)
  if (!pilar) return {}

  const url = `/${locale}/blog/tema/${slug}`
  return {
    title: pilar.metaTitulo,
    description: pilar.metaDescripcion,
    /* Canonical autorreferenciado, hreflang solo de lo traducido y el
       `robots` de esta ruta, los tres del mismo sitio. Va donde estaba
       `alternates` porque después solo vienen claves distintas: si
       alguien añade luego un `alternates` o un `robots` propio, este se
       pierde en silencio. */
    ...alternativas({ locale, entidad: { tipo: 'tema', slug } }),
    openGraph: {
      type: 'website',
      url: absoluteUrl(url),
      siteName: 'Plano Base',
      locale: locale === 'en' ? 'en_US' : 'es_CO',
      title: pilar.metaTitulo,
      description: pilar.metaDescripcion,
      images: [{ url: absoluteUrl('/og/default.jpg'), width: 1200, height: 630 }],
    },
  }
}

export default async function PilarPage({
  params,
}: {
  params: Promise<{ locale: string; pilar: string }>
}) {
  const { locale, pilar: slug } = await params
  setRequestLocale(locale)
  const tc = await getTranslations('cta')

  const pilar = pilarDe(locale, slug)
  if (!pilar) notFound()

  const delPilar = postsDelPilarDe(locale, pilar.id)
  if (delPilar.length === 0) notFound()

  const puerta = pilar.puerta
    ? puertas.find((p) => p.slug === pilar.puerta)
    : undefined

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: pilar.titulo,
      description: pilar.metaDescripcion,
      url: absoluteUrl(`/${locale}/blog/tema/${slug}`),
      isPartOf: { '@type': 'Blog', '@id': absoluteUrl(`/${locale}/blog`) },
      hasPart: delPilar.map((p) => ({
        '@type': 'Article',
        headline: p.titulo,
        url: absoluteUrl(`/${locale}/blog/${p.slug}`),
        datePublished: p.fecha,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Blog',
          item: absoluteUrl(`/${locale}/blog`),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: pilar.nombre,
          item: absoluteUrl(`/${locale}/blog/tema/${slug}`),
        },
      ],
    },
  ]

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Ruta" className="text-block mb-10 text-muted">
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
      </nav>

      <header>
        <h1 className="text-h1 measure-display text-ink">{pilar.titulo}</h1>
        <p className="text-lead measure mt-8 text-ink-soft">{pilar.entrada}</p>
        <Rule className="mt-8 text-muted">
          {delPilar.length} {delPilar.length === 1 ? 'entrada' : 'entradas'}
        </Rule>
      </header>

      <ul className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {delPilar.map((post) => (
          <li key={post.slug}>
            <TarjetaPost post={post} locale={locale} mostrarPilar={false} />
          </li>
        ))}
      </ul>

      {puerta ? (
        <section className="measure mt-24 border-t border-line pt-10">
          <h2 className="text-h4 text-ink">{puerta.pregunta}</h2>
          <p className="text-body mt-4 text-ink-soft">{puerta.respuesta}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link href={`/servicios/${puerta.slug}`} className="text-block enlace">
              {puerta.nombre}
            </Link>
            <Link href="/agendar" className="text-block enlace">
              {tc('reservar')}
            </Link>
          </div>
        </section>
      ) : null}

      <nav aria-label="Otros temas" className="mt-24">
        <h2 className="text-block text-muted">Otros temas</h2>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {pilares
            .filter((p) => p.id !== pilar.id && postsDelPilar(p.id).length > 0)
            .map((p) => (
              <li key={p.id}>
                <Link href={`/blog/tema/${p.slug}`} className="text-block enlace">
                  {p.nombre}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}
