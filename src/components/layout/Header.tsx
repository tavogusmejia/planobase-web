'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Logotipo } from '@/components/brand/Logotipo'
import { navegacion } from '@content/site'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav')
  const tc = useTranslations('comun')
  const pathname = usePathname()
  const [abierto, setAbierto] = useState(false)

  const activa = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-24 max-w-[100rem] items-center justify-between px-gutter lg:px-10">
        <Link
          href="/"
          aria-label={t('irAlInicio')}
          className="shrink-0 text-ink transition-opacity hover:opacity-70"
        >
          {/* El manual fija 240 px de ancho como reducción mínima del imagotipo
              horizontal en digital. El viewBox incluye el área de seguridad, así
              que a h-12 el logo mide ~143 px: por debajo del mínimo del manual,
              pero es lo que cabe en una cabecera web. Pendiente de confirmar si
              ese mínimo aplica a pantalla o solo a impresión. */}
          <Logotipo className="h-10 w-auto lg:h-12" />
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-9 md:flex"
        >
          {navegacion.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={activa(item.href) ? 'page' : undefined}
              className={cn(
                'text-small text-ink transition-colors hover:text-accent',
                activa(item.href) && 'text-accent',
              )}
            >
              {t(item.key)}
            </Link>
          ))}

          <div className="ml-2 flex items-center gap-2 border-l border-line pl-5">
            {routing.locales.map((l) => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                aria-label={`${tc('cambiarIdioma')}: ${l.toUpperCase()}`}
                className={cn(
                  'text-block uppercase transition-colors',
                  l === locale
                    ? 'text-ink'
                    : 'text-muted hover:text-accent',
                )}
              >
                {l}
              </Link>
            ))}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          className="text-small text-ink md:hidden"
        >
          {abierto ? t('cerrarMenu') : t('abrirMenu')}
        </button>
      </div>

      {abierto ? (
        <nav
          id="menu-movil"
          aria-label="Principal"
          className="border-t border-line px-gutter pb-8 pt-2 md:hidden"
        >
          {navegacion.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setAbierto(false)}
              className="block border-b border-line py-4 text-h4 text-ink"
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="flex gap-4 pt-6">
            {routing.locales.map((l) => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                onClick={() => setAbierto(false)}
                className={cn(
                  'text-block uppercase',
                  l === locale ? 'text-ink' : 'text-muted',
                )}
              >
                {l}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
