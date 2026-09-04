import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

/**
 * Envoltorios de navegación conscientes del idioma. Usar SIEMPRE este `Link`
 * en lugar del de `next/link` para rutas internas: añade el prefijo de locale
 * solo cuando corresponde y evita el salto a `/es` desde una página en inglés.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
