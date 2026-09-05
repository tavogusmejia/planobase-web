'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Logotipo } from '@/components/brand/Logotipo'
import { IconoInicio } from '@/components/ui/IconoInicio'
import { navegacion } from '@content/site'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

/**
 * Cabecera. Un solo menú con el sitio entero a la vista: el conmutador
 * Estudio / Oficina técnica que vivía aquí obligaba al visitante a clasificarse
 * antes de saber qué hay y dejaba media navegación oculta. La distinción entre
 * las dos formas de contratar al estudio se resuelve en el texto de /servicios,
 * no en un mecanismo de navegación.
 */
export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav')
  const tc = useTranslations('comun')
  const pathname = usePathname()
  const [abierto, setAbierto] = useState(false)

  const activa = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  /* `usePathname` de next-intl devuelve la ruta sin el prefijo de idioma, así
     que la portada es `/` en los dos idiomas. */
  const enPortada = pathname === '/'

  /* Las hojas para el papel —el dossier y la ficha de experiencia— se generan
     solo en el idioma editorial, así que aquí el conmutador enlazaría a un 404.
     Se oculta. Es coherente con lo que son: documentos que se adjuntan a un
     pliego colombiano, no páginas del sitio. */
  const soloEnEspanol =
    pathname.startsWith('/dossier') || pathname.endsWith('/ficha')

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-24 max-w-[100rem] items-center justify-between gap-8 px-gutter lg:px-10">
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

        {/* El menú completo aparece en lg y no en md: cinco enlaces más el
            selector de idioma no caben en 768 px sin apretarse contra el logo. */}
        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {/* Solo fuera de la portada: ahí la redundancia con el logotipo no
              aportaría nada. Lleva `title` además de `aria-label` porque un
              control sin texto no dice qué hace, y el globo del navegador es la
              única pista para quien no reconozca la forma. */}
          {enPortada ? null : (
            <Link
              href="/"
              aria-label={t('inicio')}
              title={t('inicio')}
              className="-m-2 p-2 text-ink transition-colors hover:text-accent"
            >
              <IconoInicio className="h-5 w-5" />
            </Link>
          )}

          {navegacion.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={activa(item.href) ? 'page' : undefined}
              className={cn(
                'text-small whitespace-nowrap text-ink transition-colors hover:text-accent',
                activa(item.href) && 'text-accent',
              )}
            >
              {t(item.key)}
            </Link>
          ))}

          {soloEnEspanol ? null : (
            <div className="flex items-center gap-2 border-l border-line pl-5">
              {routing.locales.map((l) => (
                <Link
                  key={l}
                  href={pathname}
                  locale={l}
                  aria-label={`${tc('cambiarIdioma')}: ${l.toUpperCase()}`}
                  className={cn(
                    'text-block uppercase transition-colors',
                    l === locale ? 'text-ink' : 'text-muted hover:text-accent',
                  )}
                >
                  {l}
                </Link>
              ))}
            </div>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          className="text-small text-ink lg:hidden"
        >
          {abierto ? t('cerrarMenu') : t('abrirMenu')}
        </button>
      </div>

      {abierto ? (
        <nav
          id="menu-movil"
          aria-label="Principal"
          className="border-t border-line px-gutter pb-8 pt-2 lg:hidden"
        >
          {/* Aquí sí va «Inicio»: con el menú abierto el logotipo queda tapado
              por la lista, así que deja de ser el acceso evidente que sí es en
              escritorio. */}
          <Link
            href="/"
            onClick={() => setAbierto(false)}
            className="block border-b border-line py-4 text-h4 text-ink"
          >
            {t('inicio')}
          </Link>
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
          {soloEnEspanol ? null : (
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
          )}
        </nav>
      ) : null}
    </header>
  )
}
