'use client'

/**
 * El consentimiento de medición: dónde se guarda y quién lo sabe.
 *
 * **La regla, y de ella sale todo lo demás: mientras no haya un sí explícito,
 * no se carga ninguna etiqueta.** No se cargan «a la espera», no se cargan «en
 * modo restringido», no se cargan y luego se apagan. Cargar y desactivar
 * después ya envió la primera petición, que es exactamente el hecho que había
 * que evitar. Por eso esto no es una preferencia que las etiquetas consultan al
 * arrancar: es la condición para que existan.
 *
 * Rechazar es tan fácil como aceptar y las dos opciones se ven igual. Un aviso
 * en el que «Aceptar» es un botón y «Rechazar» un enlace gris no recoge un
 * consentimiento libre, y el sitio ya publica una política que promete que si
 * no acepta «el sitio funciona igual».
 *
 * **No se puede leer en el servidor.** Vive en `localStorage` y no en una
 * cookie a propósito: una cookie viajaría en cada petición y la haría no
 * cacheable, y este dato no lo necesita nadie en el servidor. La consecuencia
 * que hay que respetar es que en el primer render no se sabe nada, y por eso
 * `leer()` devuelve `null` hasta que el componente monta.
 */

const CLAVE = 'pb.consentimiento'

/**
 * Sube cuando cambia **qué** se le pregunta a la gente, no cuando cambia el
 * texto. Subirla vuelve a preguntar a todo el mundo, incluido a quien ya había
 * dicho que no, así que se sube por una herramienta nueva o una finalidad
 * nueva, nunca por una corrección de redacción.
 */
export const VERSION = 1

export type Decision = 'aceptado' | 'rechazado'

export type Consentimiento = {
  medicion: Decision
  version: number
  /** ISO. Es la prueba de cuándo se dio, que es lo que se puede tener que mostrar. */
  fecha: string
}

const EVENTO = 'pb:consentimiento'

/**
 * Lo guardado, o `null` si no hay decisión válida.
 *
 * Devuelve `null` también cuando la versión guardada es vieja: eso hace que se
 * vuelva a preguntar, que es lo que se quiere. Y nunca lanza — `localStorage`
 * tira en navegación privada de algunos navegadores y con las cookies de sitio
 * bloqueadas, y un aviso de consentimiento que rompe la página es peor que no
 * tenerlo.
 */
export function leer(): Consentimiento | null {
  if (typeof window === 'undefined') return null
  try {
    const crudo = window.localStorage.getItem(CLAVE)
    if (!crudo) return null
    const dato = JSON.parse(crudo) as Partial<Consentimiento>
    if (dato.version !== VERSION) return null
    if (dato.medicion !== 'aceptado' && dato.medicion !== 'rechazado') return null
    return {
      medicion: dato.medicion,
      version: VERSION,
      fecha: typeof dato.fecha === 'string' ? dato.fecha : new Date().toISOString(),
    }
  } catch {
    return null
  }
}

/**
 * Guarda la decisión y avisa a quien esté escuchando **en esta misma pestaña**.
 *
 * `localStorage` dispara `storage` en las otras pestañas pero no en la propia,
 * así que hace falta el evento a mano: sin él, aceptar no encendería la
 * medición hasta recargar, y se perdería justo la visita que aceptó.
 */
export function guardar(medicion: Decision): void {
  const valor: Consentimiento = {
    medicion,
    version: VERSION,
    fecha: new Date().toISOString(),
  }
  try {
    window.localStorage.setItem(CLAVE, JSON.stringify(valor))
  } catch {
    // Sin almacenamiento se respeta la decisión en esta página y se vuelve a
    // preguntar en la siguiente. Es lo correcto: no poder guardar un «no» no
    // puede convertirse en un «sí».
  }
  window.dispatchEvent(new CustomEvent(EVENTO))
}

/** Vuelve a preguntar. Lo usa el enlace del pie que promete la política. */
export function reabrir(): void {
  try {
    window.localStorage.removeItem(CLAVE)
  } catch {
    // Da igual: el evento reabre el aviso de todos modos.
  }
  window.dispatchEvent(new CustomEvent(EVENTO))
}

/** Se suscribe a los cambios, en esta pestaña y en las demás. */
export function alCambiar(escucha: () => void): () => void {
  const enOtraPestana = (e: StorageEvent) => {
    if (e.key === CLAVE || e.key === null) escucha()
  }
  window.addEventListener(EVENTO, escucha)
  window.addEventListener('storage', enOtraPestana)
  return () => {
    window.removeEventListener(EVENTO, escucha)
    window.removeEventListener('storage', enOtraPestana)
  }
}
