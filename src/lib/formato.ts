/**
 * Formato dependiente del idioma.
 *
 * Aquí va **mecánica** —números, monedas, fechas, listas— y nunca palabras: las
 * palabras viven en `messages/`. Esa frontera es la que evita una tercera casa
 * para el texto del sitio.
 *
 * Existe porque el formato estaba fijado en español en sitios donde no rompe
 * nada y por eso no lo veía nadie: `formatArea` producía «5.400 m²», que un
 * lector inglés lee como cinco coma cuatro; y las dos fechas del blog repetían
 * a mano el mismo ternario, con lo que solo era cuestión de tiempo que
 * divergieran.
 *
 * El idioma entra como `string` y no como un tipo cerrado a propósito: llega de
 * los parámetros de ruta, donde es `string`, y así no hace falta un `as` en cada
 * llamada. Cualquier valor que no sea inglés cae a español, que es la regla del
 * sitio.
 */

/**
 * La etiqueta BCP-47 con la que se formatea.
 *
 * Inglés va a `en-GB` y no a `en-US` a propósito: da «2 September 2026», con el
 * día primero, que conserva el orden del español y no arrastra la ambigüedad de
 * 09/02.
 */
function bcp47(idioma: string): string {
  return idioma === 'en' ? 'en-GB' : 'es-CO'
}

/** El estudio es colombiano y sus fechas también, en los dos idiomas. */
const ZONA = 'America/Bogota'

/**
 * Una fecha ISO sin hora se ancla al mediodía UTC antes de formatear.
 *
 * `new Date('2026-03-14')` es medianoche UTC, que en Bogotá —UTC-5— es todavía
 * el 13. Sin esto, cada fecha del blog se pintaría un día antes.
 */
function alMediodia(iso: string): Date {
  return new Date(`${iso}T12:00:00Z`)
}

/**
 * 5400 → «5.400 m²». Devuelve null si no hay dato: nunca se pinta «0 m²».
 *
 * Sin `maximumFractionDigits` salían «2.549,68 m²» y «10.560,8 m²»: cuatro
 * proyectos traen el área con decimales desde el volcado de Wix y el
 * formateador los pintaba tal cual. Un área de proyecto se dice en metros
 * enteros; el centímetro cuadrado es ruido de hoja de cálculo y le resta
 * autoridad a la ficha. Se redondea al pintar y no en el dato, que se
 * conserva como está por si algún día hace falta con precisión.
 */
export function formatArea(idioma: string, m2: number | null): string | null {
  if (!m2 || m2 <= 0) return null
  const n = new Intl.NumberFormat(bcp47(idioma), { maximumFractionDigits: 0 })
  return `${n.format(m2)} m²`
}

export function formatCOP(idioma: string, valor: number): string {
  return new Intl.NumberFormat(bcp47(idioma), {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(valor)
}

/** «14 de marzo de 2026» · «14 March 2026». */
export function fechaLarga(idioma: string, iso: string): string {
  return new Intl.DateTimeFormat(bcp47(idioma), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: ZONA,
  }).format(alMediodia(iso))
}

/** «marzo de 2026» · «March 2026». Para la rejilla, donde el día sobra. */
/**
 * «viernes, 12 de septiembre de 2026, 10:00» · «Friday, 12 September 2026, 10:00».
 *
 * Lleva el día de la semana porque es un dato de cita, no de archivo: quien
 * recibe una confirmación comprueba primero qué día cae, y leer «12/09» obliga
 * a ir al calendario a averiguarlo.
 *
 * La hora se fija a la zona de Bogotá en los dos idiomas, y quien la pinta debe
 * decir la zona al lado. Una cita a las 10:00 sin decir de dónde son esas diez
 * es una cita que alguien va a perder: el sitio ya atiende leads de fuera del
 * país, que su propio formulario contempla.
 */
export function fechaHoraLarga(idioma: string, cuando: Date): string {
  return new Intl.DateTimeFormat(bcp47(idioma), {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: ZONA,
  }).format(cuando)
}

/** Solo la hora, para el «de 10:00 a 10:15» de una reserva. */
export function soloHora(idioma: string, cuando: Date): string {
  return new Intl.DateTimeFormat(bcp47(idioma), {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: ZONA,
  }).format(cuando)
}

export function mesYAno(idioma: string, iso: string): string {
  return new Intl.DateTimeFormat(bcp47(idioma), {
    month: 'long',
    year: 'numeric',
    timeZone: ZONA,
  }).format(alMediodia(iso))
}

/**
 * Une nombres con la conjunción del idioma: «A, B y C» · «A, B and C».
 *
 * Con `Intl.ListFormat` y no a mano, porque la conjunción es justo la palabra
 * que cambia entre idiomas y la que se olvida al traducir.
 */
export function unirNombres(idioma: string, nombres: string[]): string {
  return new Intl.ListFormat(bcp47(idioma), {
    style: 'long',
    type: 'conjunction',
  }).format(nombres)
}
