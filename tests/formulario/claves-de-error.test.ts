/**
 * Que toda clave de error que emite un esquema exista en los dos idiomas.
 *
 * **Esto está atado a un defecto real que llegó a producción.** `reservaSchema`
 * emite claves de dos espacios —`errores.franja` y `errores.autorizacion` están
 * en `reserva`, y las seis de datos personales en `formulario`—, pero `err()`
 * en `ReservaForm` solo buscaba en el primero. Resultado: quien escribía mal el
 * correo veía la cadena `errores.correo` en crudo, en la página que recibe la
 * pauta y justo mientras dejaba sus datos.
 *
 * No se puede probar el componente —`vitest.config.ts` declara que aquí solo se
 * prueba lógica pura— pero sí se puede probar la condición que lo hacía fallar:
 * que cada clave tenga texto en alguno de los dos espacios, en español y en
 * inglés. Es la mitad del error que sí es comprobable, y es la que se repetirá
 * el día que alguien añada un campo al formulario.
 */
import { describe, expect, it } from 'vitest'

import en from '@/../messages/en.json'
import es from '@/../messages/es.json'

/**
 * Las claves se leen del archivo del esquema en vez de escribirse aquí. Si se
 * copiaran, una clave nueva no rompería nada: es justo el descuido que dejó
 * vivo el defecto original.
 */
async function clavesQueEmite(ruta: string): Promise<string[]> {
  const { readFile } = await import('node:fs/promises')
  const fuente = await readFile(new URL(ruta, import.meta.url), 'utf8')
  return [...new Set(fuente.match(/'errores\.[a-zA-Z]+'/g) ?? [])].map((c) =>
    c.replaceAll("'", ''),
  )
}

type Diccionario = Record<string, unknown>

/** Si `errores.correo` tiene texto bajo alguno de los espacios dados. */
function tieneTexto(dicc: Diccionario, espacios: string[], clave: string): boolean {
  const hoja = clave.split('.').at(-1)!
  return espacios.some((espacio) => {
    const errores = (dicc[espacio] as Diccionario | undefined)?.errores as
      | Diccionario
      | undefined
    return typeof errores?.[hoja] === 'string' && (errores[hoja] as string).length > 0
  })
}

describe('las claves de error del formulario de reserva', () => {
  it('todas tienen texto en español y en inglés', async () => {
    const claves = await clavesQueEmite('../../src/lib/agenda/schema.ts')

    /* Ocho hoy. Si el esquema deja de emitir claves, algo se rompió al leerlo
       y el test pasaría en falso. */
    expect(claves.length).toBeGreaterThanOrEqual(8)

    /* El mismo orden de búsqueda que hace `err()`: primero el espacio propio
       del formulario de reserva, luego el compartido. */
    const espacios = ['reserva', 'formulario']

    for (const clave of claves) {
      expect(tieneTexto(es as Diccionario, espacios, clave), `falta ${clave} en es`).toBe(
        true,
      )
      expect(tieneTexto(en as Diccionario, espacios, clave), `falta ${clave} en en`).toBe(
        true,
      )
    }
  })
})
