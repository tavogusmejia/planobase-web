import 'server-only'
import { createSign } from 'node:crypto'

import { configGoogleCalendar } from '@/lib/env'

/**
 * Un token de acceso a la API de Google, sin librería de Google.
 *
 * **Sin `googleapis` a propósito.** Ese paquete pesa decenas de megas de
 * descriptores generados para doscientas APIs, y aquí se usan dos llamadas. El
 * repo ya escribió a mano el `.ics` (RFC 5545) y llama a Resend por `fetch`
 * directo; esto es más simple que cualquiera de las dos.
 *
 * Lo único que hacía falta y no es trivial es firmar en RS256, y `node:crypto`
 * lo hace: `createSign('RSA-SHA256')` produce PKCS#1 v1.5 sobre SHA-256, que es
 * literalmente la definición de RS256 en la RFC 7518. No hay diferencia con lo
 * que haría `jose`.
 *
 * **Esto no puede correr en el runtime Edge**: `createSign` no existe allí. Next
 * usa Node por defecto en Route Handlers y Server Actions, así que basta con no
 * añadir `export const runtime = 'edge'` — pero conviene saberlo, porque es el
 * tipo de línea que alguien añade pensando que acelera algo.
 */

const AUD = 'https://oauth2.googleapis.com/token'

/**
 * Lo que se pide, y ni un permiso más.
 *
 * `calendar.events` permite crear la cita. `calendar.readonly` permite
 * consultar la disponibilidad — y va aparte porque **no consta que
 * `calendar.events` baste para `freeBusy`**, y ese fallo sería un 403 que solo
 * aparecería el día que existan las credenciales, es decir, en el peor momento
 * posible. Ninguno de los dos permite borrar nada.
 */
const SCOPES = [
  'https://www.googleapis.com/auth/calendar.events',
  'https://www.googleapis.com/auth/calendar.readonly',
].join(' ')

const b64 = (o: object) => Buffer.from(JSON.stringify(o)).toString('base64url')

/** El JWT firmado con el que la cuenta de servicio se presenta. */
export function construirJwt(ahora: number = Math.floor(Date.now() / 1000)): string {
  const { cuentaServicio, clavePrivada, impersona } = configGoogleCalendar()

  const cabecera = b64({ alg: 'RS256', typ: 'JWT' })
  const cuerpo = b64({
    iss: cuentaServicio,
    /* La delegación de dominio: la cuenta de servicio actúa *como* esta
       persona. Sin `sub`, actuaría como ella misma y su calendario está
       vacío — el síntoma sería una agenda sin ninguna hora ocupada, que es
       peor que un error porque parece que funciona. */
    sub: impersona,
    scope: SCOPES,
    aud: AUD,
    iat: ahora,
    /* Una hora es el máximo que Google acepta. Pedir más no da error al
       firmar: da un `invalid_grant` al canjearlo. */
    exp: ahora + 3600,
  })

  const firma = createSign('RSA-SHA256')
    .update(`${cabecera}.${cuerpo}`)
    .sign(clavePrivada)
    .toString('base64url')

  return `${cabecera}.${cuerpo}.${firma}`
}

/**
 * El token vigente, memoizado.
 *
 * En Fluid Compute la instancia se reutiliza entre peticiones, así que guardar
 * el token en ámbito de módulo evita pedir uno nuevo en cada carga de
 * `/agendar`. Se renueva un minuto antes de caducar, por si la petición que lo
 * usa tarda.
 */
let guardado: { token: string; caduca: number } | null = null

export async function tokenDeAcceso(): Promise<string | null> {
  if (guardado && Date.now() < guardado.caduca) return guardado.token

  try {
    const respuesta = await fetch(AUD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: construirJwt(),
      }),
    })

    if (!respuesta.ok) {
      console.error('[google] No se pudo canjear el JWT:', await respuesta.text())
      return null
    }

    const datos = (await respuesta.json()) as {
      access_token?: string
      expires_in?: number
    }
    if (!datos.access_token) return null

    guardado = {
      token: datos.access_token,
      caduca: Date.now() + ((datos.expires_in ?? 3600) - 60) * 1000,
    }
    return guardado.token
  } catch (e) {
    /* Nunca lanza. Quien llama tiene que poder seguir sin Google, igual que
       `enviarCorreo()` devuelve un booleano en vez de tumbar una reserva. */
    console.error('[google] Fallo al pedir el token:', e)
    return null
  }
}

/** Solo para pruebas: olvida el token guardado. */
export function olvidarToken(): void {
  guardado = null
}
