'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Isotipo } from '@/components/brand/Isotipo'
import { cn } from '@/lib/utils'

export type Perfil = 'estudio' | 'oficina'

/**
 * Deriva el perfil de la ruta. No hay estado guardado ni cookie: el perfil ES
 * la sección en la que estás. Así una URL siempre abre en el lado correcto,
 * incluida la que llega desde un anuncio.
 */
export function perfilDeRuta(pathname: string): Perfil {
  return pathname.startsWith('/servicios') || pathname.startsWith('/agendar')
    ? 'oficina'
    : 'estudio'
}

/**
 * Conmutador Estudio / Oficina.
 *
 * El estudio hace dos cosas que se venden distinto: arquitectura y diseño, que
 * se muestran con obra; y servicios técnicos, que se contratan por un problema
 * concreto. Mezclarlos en un mismo menú hace ver al estudio como un contratista
 * de todo, que es justo lo que no quiere parecer.
 *
 * Decisión de diseño, contra la tentación de hacer una pantalla de bienvenida
 * que pregunte "¿eres A o B?": eso es una puerta, y una puerta pierde entre el
 * 20 y el 40 % del tráfico frío que no sabe todavía cómo clasificarse. Aquí no
 * hay puerta. El sitio abre siempre en Estudio, el conmutador está a la vista
 * y cambiar de lado es un clic. Un mismo dominio, una sola autoridad de
 * búsqueda, dos registros de lectura.
 *
 * La forma sale del propio sistema: el indicador es la línea de cota —el
 * recurso estructural del sitio— deslizándose entre las dos palabras, con el
 * isotipo de bisagra. No es un interruptor de librería con forma de píldora.
 */
export function PerfilSwitch({ className }: { className?: string }) {
  const t = useTranslations('perfil')
  const pathname = usePathname()
  const activo = perfilDeRuta(pathname)

  const lados = [
    { perfil: 'estudio' as const, href: '/proyectos', etiqueta: t('estudio') },
    { perfil: 'oficina' as const, href: '/servicios', etiqueta: t('oficina') },
  ]

  return (
    <div
      className={cn('relative', className)}
      role="group"
      aria-label={t('etiqueta')}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        {lados.map((lado, i) => (
          <div key={lado.perfil} className="contents">
            <Link
              href={lado.href}
              aria-current={activo === lado.perfil ? 'true' : undefined}
              className={cn(
                'text-small whitespace-nowrap py-1 transition-colors',
                i === 0 ? 'text-right' : 'text-left',
                activo === lado.perfil
                  ? 'text-ink'
                  : 'text-muted hover:text-accent',
              )}
            >
              {lado.etiqueta}
            </Link>

            {/* La bisagra. Va una sola vez, entre las dos palabras. */}
            {i === 0 ? (
              <Isotipo aria-hidden className="h-3 w-auto text-line" />
            ) : null}
          </div>
        ))}
      </div>

      {/* La línea de cota como indicador. Ocupa media caja y se desplaza al
          lado activo; es el mismo trazo que sostiene los nombres de proyecto. */}
      <span
        aria-hidden
        className={cn(
          'absolute bottom-0 block h-px w-[calc(50%-1rem)] bg-accent transition-transform duration-500 ease-out motion-reduce:transition-none',
          activo === 'oficina' && 'translate-x-[calc(100%+2rem)]',
        )}
      />
    </div>
  )
}
