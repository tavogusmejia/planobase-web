import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'

export default async function NotFound() {
  const t = await getTranslations('nav')

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-32 lg:px-10">
      <p className="text-display tabular-nums text-accent">404</p>
      <Rule className="mt-4 max-w-xl text-muted" />
      <h1 className="text-h2 measure mt-10 text-ink">
        Esta página no existe. Puede que haya cambiado de dirección en la
        migración del sitio.
      </h1>
      <div className="mt-10 flex flex-wrap gap-8">
        <Link
          href="/proyectos"
          className="text-h5 text-accent underline-offset-8 hover:underline"
        >
          {t('proyectos')}
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
