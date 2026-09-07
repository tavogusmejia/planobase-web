/**
 * El JWT con el que la cuenta de servicio se presenta ante Google.
 *
 * **Se puede probar entero sin cuenta de Google, sin red y sin credenciales**, y
 * eso importa porque es la parte que más falla y la que peor se depura contra el
 * servidor real: si la codificación está mal, Google responde `invalid_grant` y
 * no dice cuál de las cinco cosas posibles es. Aquí se genera un par de claves
 * en el propio test, se firma y se verifica con la pública.
 *
 * Lo que se fija es todo lo que puede estar mal en la codificación —base64url,
 * el punto de unión, el orden de los campos, la caducidad— más el detalle que
 * de verdad cuesta una tarde: que la clave PEM llega con los saltos escapados.
 */
import { generateKeyPairSync, createVerify } from 'node:crypto'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
})

const PEM = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString()

const ENTORNO = {
  GOOGLE_SA_EMAIL: 'agenda@plano-base.iam.gserviceaccount.com',
  /* Escapada, que es como viaja de verdad dentro de una variable de entorno.
     Si `configGoogleCalendar` no deshiciera el escape, `createSign` lanzaría
     «error:1E08010C:DECODER routines::unsupported» — un mensaje que no dice
     nada sobre la causa. Este test es lo que impide que eso vuelva. */
  GOOGLE_SA_PRIVATE_KEY: PEM.replace(/\n/g, '\\n'),
  GOOGLE_CALENDAR_ID: 'asesorias@planobase.co',
  GOOGLE_IMPERSONA: 'proyectos@planobase.co',
}

const original: Record<string, string | undefined> = {}

beforeEach(() => {
  for (const [k, v] of Object.entries(ENTORNO)) {
    original[k] = process.env[k]
    process.env[k] = v
  }
})

afterEach(() => {
  for (const k of Object.keys(ENTORNO)) {
    if (original[k] === undefined) delete process.env[k]
    else process.env[k] = original[k]
  }
})

const decodifica = (parte: string) =>
  JSON.parse(Buffer.from(parte, 'base64url').toString('utf8')) as Record<
    string,
    unknown
  >

describe('construirJwt', () => {
  it('produce tres partes separadas por punto', async () => {
    const { construirJwt } = await import('@/lib/google/token')
    const partes = construirJwt().split('.')
    expect(partes).toHaveLength(3)
    expect(partes.every((p) => p.length > 0)).toBe(true)
  })

  it('declara RS256 en la cabecera', async () => {
    const { construirJwt } = await import('@/lib/google/token')
    const [cabecera] = construirJwt().split('.')
    expect(decodifica(cabecera!)).toEqual({ alg: 'RS256', typ: 'JWT' })
  })

  it('lleva la delegación de dominio en `sub`', async () => {
    /* Es el campo del que depende que esto sirva de algo. Sin `sub`, la cuenta
       de servicio actúa como ella misma y su calendario está vacío: el sitio
       no vería ninguna hora ocupada y parecería que funciona. Un fallo que no
       se ve es peor que uno que revienta. */
    const { construirJwt } = await import('@/lib/google/token')
    const [, cuerpo] = construirJwt(1_800_000_000).split('.')
    const datos = decodifica(cuerpo!)

    expect(datos.sub).toBe('proyectos@planobase.co')
    expect(datos.iss).toBe('agenda@plano-base.iam.gserviceaccount.com')
    expect(datos.aud).toBe('https://oauth2.googleapis.com/token')
    expect(datos.iat).toBe(1_800_000_000)
    /* Una hora exacta: es el máximo que Google acepta, y pedir más no falla al
       firmar sino al canjear. */
    expect(datos.exp).toBe(1_800_003_600)
  })

  it('pide los dos permisos y ninguno de escritura amplia', async () => {
    const { construirJwt } = await import('@/lib/google/token')
    const [, cuerpo] = construirJwt().split('.')
    const scope = decodifica(cuerpo!).scope as string

    expect(scope).toContain('auth/calendar.events')
    expect(scope).toContain('auth/calendar.readonly')
    /* El scope amplio de calendario permite borrar calendarios enteros. Que no
       aparezca nunca es la mitad del trámite que Gustavo hace en Google. */
    expect(scope).not.toContain('auth/calendar ')
    expect(scope.split(' ')).toHaveLength(2)
  })

  it('la firma verifica contra la clave pública', async () => {
    /* La prueba de verdad: si base64url, el orden o el punto de unión
       estuvieran mal, esto falla. Es exactamente lo que hará Google. */
    const { construirJwt } = await import('@/lib/google/token')
    const jwt = construirJwt()
    const [cabecera, cuerpo, firma] = jwt.split('.')

    const valida = createVerify('RSA-SHA256')
      .update(`${cabecera}.${cuerpo}`)
      .verify(publicKey, Buffer.from(firma!, 'base64url'))

    expect(valida).toBe(true)
  })

  it('la firma deja de verificar si se toca un solo carácter', async () => {
    /* Control: sin esto, una verificación que devolviera `true` siempre
       pasaría el test anterior sin comprobar nada. */
    const { construirJwt } = await import('@/lib/google/token')
    const [cabecera, cuerpo, firma] = construirJwt().split('.')
    const alterado = { ...decodifica(cuerpo!), sub: 'otro@planobase.co' }
    const cuerpoFalso = Buffer.from(JSON.stringify(alterado)).toString('base64url')

    const valida = createVerify('RSA-SHA256')
      .update(`${cabecera}.${cuerpoFalso}`)
      .verify(publicKey, Buffer.from(firma!, 'base64url'))

    expect(valida).toBe(false)
  })
})
