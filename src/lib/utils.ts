import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Categoria } from '@/lib/types'

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

/**
 * Etiqueta de naturaleza del proyecto.
 *
 * Presentar propuestas de concurso y obra construida sin distinguirlas es el
 * riesgo reputacional más alto del portafolio: se cae en la primera visita.
 *
 * La regla de qué es concurso vive en `scripts/prepare-media.ts` y queda
 * grabada en `categorias`, así que el filtro del grid y esta etiqueta no pueden
 * contradecirse. El volcado de Wix trae `construido` marcado en UN solo
 * proyecto de 24, y eso es un vacío del CMS y no la verdad, así que del resto
 * no se afirma nada hasta que el estudio lo confirme.
 */
export function etiquetaProyecto(p: { categorias: Categoria[] }): string | null {
  return p.categorias.includes('concursos') ? 'Concurso' : null
}
