import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  /**
   * Todo menos API, estáticos de Next y cualquier ruta con extensión.
   * Los 36 redirects 301 de Wix se resuelven antes, en `next.config.ts`.
   */
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
}
