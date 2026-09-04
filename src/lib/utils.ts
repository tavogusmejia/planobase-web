import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** 5400 → "5.400 m²". Devuelve null si no hay dato: nunca se pinta "0 m²". */
export function formatArea(m2: number | null): string | null {
  if (!m2 || m2 <= 0) return null
  return `${new Intl.NumberFormat('es-CO').format(m2)} m²`
}

export function formatCOP(value: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Ruta pública de una imagen. Hoy sale de `public/media/`, generada por
 * `pnpm media`. Cuando el bucket de Supabase esté cargado, esta función es el
 * único sitio donde hay que cambiar el origen.
 */
export function mediaSrc(path: string): string {
  return `/media/${path}`
}

/**
 * Enlace de WhatsApp con mensaje prellenado. El plan de campaña fija un SLA de
 * respuesta de 1 hora, así que este es el canal principal, no un extra.
 */
export function whatsappUrl(numero: string, mensaje: string): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}
