import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { esIndexable, routing } from '@/i18n/routing'
import { entornoPublico } from '@/lib/env'
import { notoSans } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CtaBar } from '@/components/layout/CtaBar'
import { DatosOrganizacion } from '@/components/seo/DatosOrganizacion'
import { MetaPixel } from '@/components/analytics/MetaPixel'
import { site } from '@content/site'
import '@/styles/globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

/**
 * Los metadatos pasan a depender del idioma, así que dejan de ser una constante.
 *
 * Lo que se arregla aquí, además del idioma: hasta ahora no había `openGraph` en
 * ningún layout, así que cualquier enlace del sitio se compartía pelado. En un
 * negocio cuyo canal principal es WhatsApp, eso es el paso del embudo entre que
 * el arquitecto pasa el enlace y el cliente lo abre.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titulo = `${site.nombreLargo} | Estudio de arquitectura en Cali`
  const descripcion =
    'Estudio colaborativo de arquitectura dedicado al desarrollo integral de ' +
    'proyectos educativos, institucionales, culturales y residenciales en Colombia.'

  return {
    metadataBase: new URL(entornoPublico.sitio),
    title: { default: titulo, template: `%s | ${site.nombre}` },
    description: descripcion,
    openGraph: {
      type: 'website',
      siteName: site.nombreLargo,
      title: titulo,
      description: descripcion,
      locale: locale === 'en' ? 'en_US' : 'es_CO',
      // Ruta relativa a propósito: Next la resuelve contra `metadataBase`, que
      // es lo que hace que apunte al dominio correcto en cada entorno.
      images: [
        {
          url: '/og/default.jpg',
          width: 1200,
          height: 630,
          alt: `${site.nombreLargo}, Cali`,
        },
      ],
    },
    twitter: { card: 'summary_large_image' },
    ...(esIndexable(locale)
      ? {}
      : { robots: { index: false, follow: true } }),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)
  const t = await getTranslations('nav')

  return (
    <html lang={locale} className={notoSans.variable}>
      {/* pb-16 deja aire bajo la barra fija inferior para que nunca tape texto. */}
      <body className="pb-16">
        <DatosOrganizacion />
        <MetaPixel />

        <a
          href="#contenido"
          className="text-small sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {t('saltarAlContenido')}
        </a>

        <NextIntlClientProvider>
          <Header locale={locale} />
          <main id="contenido">{children}</main>
          <Footer />
          <CtaBar />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
