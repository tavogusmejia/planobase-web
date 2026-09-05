import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'

/**
 * 404.
 *
 * La mayor parte del tráfico que cae aquí viene de URLs del sitio de Wix que no
 * quedaron cubiertas por una redirección, y de enlaces viejos en directorios y
 * redes. Son visitantes que ya buscaban al estudio: la página tiene que dar
 * salidas, no disculpas.
 *
 * Las cuatro salidas cubren las cuatro intenciones posibles de quien llega:
 * ver obra, leer, entender qué se hace, o hablar con alguien.
 */
export default async function NotFound() {
  const t = await getTranslations('nav')

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-32 lg:px-10">
      <p className="text-display tabular-nums text-accent">404</p>
      <Rule className="mt-4 max-w-xl text-muted" />
      <h1 className="text-h2 measure-display mt-10 text-ink">
        Esta página no existe. Puede que haya cambiado de dirección en la
        migración del sitio.
      </h1>
      <p className="text-body measure mt-6 text-ink-soft">
        Si llegó desde un enlace antiguo, lo que buscaba probablemente sigue
        aquí, en otra dirección.
      </p>

      <div className="mt-10 flex flex-wrap gap-8">
        <Link
          href="/proyectos"
          className="text-h5 text-accent underline-offset-8 hover:underline"
        >
          {t('proyectos')}
        </Link>
        <Link
          href="/blog"
          className="text-h5 text-accent underline-offset-8 hover:underline"
        >
          {t('blog')}
        </Link>
        <Link
          href="/servicios"
          className="text-h5 text-accent underline-offset-8 hover:underline"
        >
          {t('servicios')}
        </Link>
        <Link
          href="/contacto"
          className="text-h5 text-accent underline-offset-8 hover:underline"
        >
          {t('contacto')}
        </Link>
      </div>
    </div>
  )
}
