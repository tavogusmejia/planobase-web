import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { entornoPublico, hayEtiquetasDeMedicion, sitioIndexable } from '@/lib/env'
import { notoSans } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CtaBar } from '@/components/layout/CtaBar'
import { BarraFija } from '@/components/layout/BarraFija'
import { DatosOrganizacion } from '@/components/seo/DatosOrganizacion'
import { Medicion } from '@/components/analytics/Medicion'
import { Atribucion } from '@/components/analytics/Atribucion'
import { Rendimiento } from '@/components/analytics/Rendimiento'
import { site, tituloSitio } from '@content/site'
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

  const descripcion =
    'Estudio colaborativo de arquitectura dedicado al desarrollo integral de ' +
    'proyectos educativos, institucionales, culturales y residenciales en Colombia.'

  return {
    metadataBase: new URL(entornoPublico.sitio),
    title: { default: tituloSitio, template: `%s | ${site.nombre}` },
    description: descripcion,
    openGraph: {
      type: 'website',
      siteName: site.nombreLargo,
      title: tituloSitio,
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
    /* Denegación por defecto, y es el suelo y no la decisión.
     *
     * Cada página declara su propio `robots` con `alternativas()`, según su
     * contenido esté traducido o no, y el suyo gana: los metadatos de Next se
     * mezclan por clave de primer nivel y el segmento más profundo manda.
     *
     * Lo que queda aquí solo alcanza a una página que se olvide de llamar a
     * `alternativas()`, y esa queda fuera del índice. Falla cerrada, que es lo
     * correcto en un repositorio donde las páginas se añaden a mano: el
     * descuido cuesta una página sin indexar, no una página en español
     * indexada como inglesa. */
    ...(sitioIndexable() && locale === routing.defaultLocale
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
      <body>
        <DatosOrganizacion />
        <Medicion hayEtiquetas={hayEtiquetasDeMedicion()} />

        {/* Los dos van fuera de `Medicion` a propósito, y no es un descuido de
            colocación: `Medicion` es la puerta del consentimiento y solo monta
            lo que necesita permiso —las etiquetas de terceros—. Estos dos no
            cargan nada ajeno, no crean ningún identificador y no mandan nada de
            la persona; el razonamiento entero está escrito en cada archivo.
            Meterlos dentro de esa puerta habría desdibujado qué es lo que la
            puerta protege. */}
        <Atribucion />
        <Rendimiento />

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
          <BarraFija>
            <CtaBar />
          </BarraFija>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
