import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notoSans } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CtaBar } from '@/components/layout/CtaBar'
import { site } from '@content/site'
import '@/styles/globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.planobase.co',
  ),
  title: {
    default: `${site.nombreLargo} | Estudio de arquitectura en Cali`,
    template: `%s | ${site.nombre}`,
  },
  description:
    'Estudio colaborativo de arquitectura dedicado al desarrollo integral de ' +
    'proyectos educativos, institucionales, culturales y residenciales en Colombia.',
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
