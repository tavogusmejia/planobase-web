'use client'

import type { ReactNode } from 'react'
import { track } from '@/lib/analytics'
import { whatsappUrl } from '@/lib/utils'

/**
 * Salto a WhatsApp, medido.
 *
 * WhatsApp es el canal principal declarado del estudio y hasta ahora era el
 * único que no dejaba rastro: el formulario sí capturaba UTMs y el chat no. Se
 * medía el canal minoritario y se perdía el mayoritario.
 *
 * Un componente y no ocho `onClick`: seis de los ocho puntos de salida son
 * Server Components y no pueden llevar manejadores, así que sin esto habría que
 * convertir seis páginas enteras a cliente para instrumentar un enlace.
 */
export function WhatsAppLink({
  numero,
  mensaje,
  origen,
  className,
  children,
}: {
  numero: string
  mensaje: string
  /** De dónde salió el chat. Viaja dentro del texto prellenado. */
  origen: string
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={whatsappUrl(numero, mensaje, origen)}
      rel="noopener noreferrer"
      target="_blank"
      onClick={() => track('Contact', { content_name: origen })}
      className={className}
    >
      {children}
    </a>
  )
}
