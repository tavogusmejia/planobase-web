import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { herramientas } from '@content/herramientas'
import { absoluteUrl } from '@/lib/utils'

const DESCRIPCION =
  'Herramientas que hacen el cálculo, no que lo expliquen: expensas de ' +
  'curaduría, verificaciones de trámite y lo que vaya haciendo falta. Con la ' +
  'fórmula del decreto y la fuente a la vista.'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const url = `/${locale}/apbs`
  return {
    title: 'APBS',
    description: DESCRIPCION,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url: absoluteUrl(url),
      siteName: 'Plano Base',
      locale: locale === 'en' ? 'en_US' : 'es_CO',
      title: 'APBS · Herramientas de Plano Base',
      description: DESCRIPCION,
      images: [{ url: absoluteUrl('/og/default.jpg'), width: 1200, height: 630 }],
    },
  }
}

/**
 * APBS. El índice de herramientas.
 *
 * Se lista todo, disponible o no, con el estado a la vista. Anunciar lo que
 * viene es honesto y además útil: alguien que necesita justo eso puede
 * escribir y decirlo. Lo que no se hace es enlazar a una herramienta que
 * todavía no calcula nada.
 */
export default async function ApbsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <header>
        <h1 className="text-h1 text-ink">APBS</h1>
        <p className="text-lead measure mt-8 text-ink-soft">{DESCRIPCION}</p>
        <Rule className="mt-8 text-muted">
          {herramientas.length}{' '}
          {herramientas.length === 1 ? 'herramienta' : 'herramientas'}
        </Rule>
      </header>

      <ul className="mt-16 border-t border-line lg:mt-20">
        {herramientas.map((h) => {
          const disponible = h.estado === 'disponible'
          const contenido = (
            <>
              <div className="flex items-baseline justify-between gap-6">
                <h2
                  className={`text-h4 ${
                    disponible ? 'text-ink group-hover:text-accent' : 'text-muted'
                  }`}
                >
                  {h.nombre}
                </h2>
                <span className="text-block shrink-0 text-muted">
                  {disponible ? 'Abrir' : 'En construcción'}
                </span>
              </div>
              <p className="text-body measure mt-4 text-ink-soft">{h.resumen}</p>
              <p className="text-block measure mt-4 text-muted">{h.fuente}</p>
            </>
          )

          return (
            <li key={h.slug} className="border-b border-line py-8">
              {disponible ? (
                <Link href={`/apbs/${h.slug}`} className="group block">
                  {contenido}
                </Link>
              ) : (
                contenido
              )}
            </li>
          )
        })}
      </ul>

      <section className="measure mt-20 border-t border-line pt-10">
        <h2 className="text-h4 text-ink">¿Falta alguna?</h2>
        <p className="text-body mt-4 text-ink-soft">
          Estas herramientas salen de preguntas que nos hacen. Si hay un cálculo
          que usted repite a mano cada vez, escríbanos y lo miramos.
        </p>
        <div className="mt-8">
          <Link href="/contacto" className="text-block enlace">
            Escribirnos
          </Link>
        </div>
      </section>
    </div>
  )
}
