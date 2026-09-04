import 'server-only'

import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { configSupabaseAdmin } from '@/lib/env'

/**
 * Cliente con la clave de servicio. Salta RLS: es el único que escribe.
 *
 * El `import 'server-only'` de arriba no es decoración. CLAUDE.md dice que
 * `SUPABASE_SERVICE_ROLE_KEY` jamás cruza al cliente; esa línea convierte la
 * regla en un error de compilación el día que alguien importe este archivo
 * desde un componente de navegador, en vez de dejarla como una convención que
 * se respeta mientras alguien se acuerde.
 *
 * Se memoiza porque en Fluid Compute la instancia se reutiliza entre
 * peticiones y no hay razón para reconstruirlo en cada envío.
 */
let cliente: SupabaseClient | null = null

export function supabaseAdmin(): SupabaseClient {
  if (cliente) return cliente
  const { url, claveServicio } = configSupabaseAdmin()
  cliente = createClient(url, claveServicio, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return cliente
}
