/**
 * Cuándo se puede reservar la asesoría.
 *
 * **Es el único archivo que hay que tocar para cambiar la disponibilidad.** Si
 * mañana el estudio quiere atender los sábados, o cerrar los viernes por la
 * tarde, o dar más margen antes de una cita, se cambia aquí y no hay que mirar
 * ningún otro sitio.
 *
 * Todo se interpreta en la zona de Bogotá, que es donde está el estudio. Un
 * visitante desde Miami o desde Madrid ve las horas convertidas a la suya y el
 * correo se las repite con la zona al lado, porque una cita a las diez sin
 * decir de dónde son esas diez es una cita que alguien va a perder.
 *
 * **PENDIENTE DE APROBACIÓN.** Los valores de abajo son un punto de partida
 * razonable, no una decisión del estudio: nadie ha dicho todavía a qué horas
 * quiere Gustavo atender llamadas. Están puestos para que el sistema funcione y
 * se corrigen en un minuto.
 */

/** Los días que se atiende. 1 es lunes y 5 es viernes, como `getDay()` salvo
 *  que aquí el domingo es 0 y no se usa. */
export const DIAS_HABILES = [1, 2, 3, 4, 5] as const

/**
 * Las franjas del día, en hora de Bogotá y en formato de 24 horas.
 *
 * Se parten en dos a propósito: sin el corte del mediodía, el sistema ofrecería
 * una cita a la una y cuarto y alguien la aceptaría.
 */
export const HORARIO = [
  { desde: '09:00', hasta: '12:00' },
  { desde: '14:00', hasta: '17:00' },
] as const

/**
 * Cada cuántos minutos empieza una cita.
 *
 * Treinta, aunque la asesoría dure quince. La diferencia no es holgura
 * desperdiciada: es el margen para que una llamada que se alarga no arrastre a
 * la siguiente, y para anotar lo que se dijo antes de que se olvide. Una agenda
 * sin aire se incumple sola el primer día que alguien se extiende.
 */
export const PASO_MINUTOS = 30

/**
 * Cuánto tiene que faltar para que una franja se pueda reservar.
 *
 * Dos horas. Sin esto, alguien reserva a las 10:58 para las 11:00 y nadie del
 * estudio se entera a tiempo. Es el número que convierte una agenda en una
 * promesa que se puede cumplir.
 */
export const ANTELACION_MINIMA_HORAS = 2

/**
 * Hasta cuándo se puede reservar hacia adelante.
 *
 * Catorce días. Más allá, la mitad de las reservas se caen: quien agenda a tres
 * semanas ya no se acuerda de por qué lo hizo.
 */
export const VENTANA_DIAS = 14

/**
 * Días concretos en los que no se atiende, en formato `AAAA-MM-DD`.
 *
 * Festivos, vacaciones, el día que haya una entrega. Se escriben a mano porque
 * los festivos colombianos son movibles —la Ley Emiliani corre varios al lunes
 * siguiente— y una tabla mal calculada cierra la agenda un día laborable o abre
 * un festivo. Escribirlos a mano es tedioso una vez al año y no falla.
 */
export const DIAS_CERRADOS: string[] = []
