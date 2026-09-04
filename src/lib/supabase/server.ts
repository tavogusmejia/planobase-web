import 'server-only'

import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { entornoPublico } from '@/lib/env'

/**
 * Cliente de lectura con la clave anónima, atado a las cookies de la petición.
 *
 * Hoy el sitio no lo usa: el contenido vive en `content/` y lo único que toca la
 * base es el formulario, que escribe con la clave de servicio. Existe para que
 * cuando entren el panel de administración y la sesión de editor no se
 * reinvente el patrón —y, sobre todo, para que no se resuelva entonces tirando
 * de `supabaseAdmin()`, que sería saltarse RLS por comodidad.
 */
export async function supabaseServidor() {
  const almacen = await cookies()

  return createServerClient(
    entornoPublico.supabaseUrl,
    entornoPublico.supabaseAnonKey,
    {
      cookies: {
        getAll: () => almacen.getAll(),
        setAll: (nuevas) => {
          try {
            for (const { name, value, options } of nuevas) {
              almacen.set(name, value, options)
            }
          } catch {
            // Llamado desde un Server Component, donde no se pueden escribir
            // cookies. Con middleware refrescando la sesión, es inocuo.
          }
        },
      },
    },
  )
}
