'use client'

import type { ReactNode } from 'react'
import { usePathname } from '@/i18n/navigation'

/**
 * Decide dónde aparece la barra fija inferior.
 *
 * La barra anuncia el precio de la asesoría y estaba montada en el layout sin
 * ninguna lógica de rutas, así que aparecía también bajo la memoria de un
 * colegio de 14.000 m². Quien está leyendo eso tiene a un centímetro la tarifa
 * de una primera llamada, y esa yuxtaposición redimensiona todo lo que hay
 * encima. No es que el servicio esté mal: es que ahí no va.
 *
 * Se retira del portafolio y de las fichas de proyecto. Se queda en la home, en
 * servicios, en contacto y en agendar, que es donde alguien está decidiendo si
 * contratar y no mirando obra.
 *
 * Envuelve en vez de sustituir para que `CtaBar` siga siendo un componente de
 * servidor: aquí solo se decide si se pinta, no cómo.
 */

/** Rutas sin barra. Se comparan sin el prefijo de idioma. */
const SIN_BARRA = ['/proyectos']

export function BarraFija({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const oculta = SIN_BARRA.some(
    (r) => pathname === r || pathname.startsWith(`${r}/`),
  )
  if (oculta) return null

  return (
    <>
      {children}
      {/* Reserva el alto de la barra para que nunca tape la última línea. Vivía
          como `pb-16` en el body, donde no sabía si la barra estaba o no. */}
      <div aria-hidden className="h-16" />
    </>
  )
}
