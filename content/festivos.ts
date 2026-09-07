/**
 * Los festivos de Colombia, calculados.
 *
 * **Se calculan y no se escriben a mano, y la razón es el modo de falla.** Una
 * lista escrita a mano caduca en silencio: llega enero de 2028, nadie la
 * actualizó, y el sitio ofrece una cita el 1 de enero sin que nada falle ni
 * avise. Se descubre cuando alguien se presenta a una llamada a la que no hay
 * nadie, que es exactamente el error que la agenda existe para no cometer. Un
 * cálculo no caduca.
 *
 * Es además lo que ya hace `desfaseZonaMinutos` en `src/lib/agenda/franjas.ts`
 * para un problema de la misma familia, y con el mismo argumento: «una
 * constante escrita a mano es una bomba de relojería».
 *
 * Lo que el cálculo **no** puede saber —vacaciones, el día de una entrega, un
 * festivo nuevo que cree una ley— sigue viviendo en `DIAS_CERRADOS`, en
 * `content/agenda.ts`. Los dos conceptos dejan de estar mezclados.
 *
 * Todas las fechas se manejan como `AAAA-MM-DD` en hora de Bogotá, que es el
 * mismo formato que usa `diaEnZona()`.
 */

/**
 * Los dieciocho festivos colombianos se reparten en tres familias, y cada una
 * se comporta de una forma distinta. Mezclarlas es de donde salen los errores.
 */

/**
 * Los que se celebran siempre en su fecha, caiga el día que caiga.
 *
 * Seis. La Ley 51 de 1983 —la Ley Emiliani— no los toca.
 */
const FIJOS: readonly [number, number][] = [
  [1, 1], //  Año Nuevo
  [5, 1], //  Día del Trabajo
  [7, 20], // Independencia
  [8, 7], //  Batalla de Boyacá
  [12, 8], // Inmaculada Concepción
  [12, 25], // Navidad
]

/**
 * Los que la Ley Emiliani corre al lunes siguiente si no caen en lunes.
 *
 * Siete de fecha fija. Es la parte que más se equivoca quien lo escribe a mano,
 * porque el festivo «del 12 de octubre» puede acabar cayendo el 18.
 */
const TRASLADABLES: readonly [number, number][] = [
  [1, 6], //   Reyes Magos
  [3, 19], //  San José
  [6, 29], //  San Pedro y San Pablo
  [8, 15], //  Asunción de la Virgen
  [10, 12], // Día de la Raza
  [11, 1], //  Todos los Santos
  [11, 11], // Independencia de Cartagena
]

/**
 * Los que dependen de la Pascua, con su desplazamiento en días.
 *
 * Los dos primeros **no se trasladan**: Jueves y Viernes Santo caen jueves y
 * viernes por definición, y correrlos al lunes no tendría sentido. Los tres
 * últimos sí, y sus desplazamientos ya los dejan en lunes: Pascua es domingo,
 * así que 43, 64 y 71 días después es siempre lunes.
 */
const PASCUALES: readonly { dias: number; traslada: boolean }[] = [
  { dias: -3, traslada: false }, // Jueves Santo
  { dias: -2, traslada: false }, // Viernes Santo
  { dias: 43, traslada: true }, //  Ascensión del Señor
  { dias: 64, traslada: true }, //  Corpus Christi
  { dias: 71, traslada: true }, //  Sagrado Corazón de Jesús
]

/**
 * El domingo de Pascua, por el algoritmo gregoriano anónimo. Se exporta para
 * poder fijarlo con pruebas: es la pieza de la que dependen cinco festivos.
 *
 * Es el que Meeus atribuye a Butcher y publica sin autor conocido. Se elige
 * porque no tiene excepciones ni tablas: vale para cualquier año del calendario
 * gregoriano, y eso importa porque el error típico al copiar una variante más
 * corta no aparece hasta un año lejano.
 *
 * Devuelve la fecha en UTC. Aquí no hay zona que valga: es una fecha del
 * calendario, no un instante.
 */
export function pascua(anio: number): Date {
  const a = anio % 19
  const b = Math.floor(anio / 100)
  const c = anio % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const mes = Math.floor((h + l - 7 * m + 114) / 31)
  const dia = ((h + l - 7 * m + 114) % 31) + 1

  return new Date(Date.UTC(anio, mes - 1, dia))
}

/**
 * La Ley Emiliani: si no cae lunes, se corre al lunes siguiente.
 *
 * `getUTCDay()` da 0 el domingo y 1 el lunes, así que un domingo se mueve un
 * día y un martes seis. La fórmula lo dice sin ramas.
 */
function alLunes(fecha: Date): Date {
  const diaSemana = fecha.getUTCDay()
  if (diaSemana === 1) return fecha
  return new Date(fecha.getTime() + ((8 - diaSemana) % 7) * 86_400_000)
}

/** `AAAA-MM-DD`, que es el formato con el que trabaja la agenda. */
function comoDia(fecha: Date): string {
  return fecha.toISOString().slice(0, 10)
}

/**
 * Se memoiza porque `franjasPosibles` recorre quince días y llamaría quince
 * veces por petición para calcular siempre lo mismo.
 */
const cache = new Map<number, readonly string[]>()

/**
 * Los días festivos de un año, **sin repetir**, ordenados y en `AAAA-MM-DD`.
 *
 * **Las celebraciones son dieciocho, pero los días no siempre.** Cuando la
 * Pascua cae tarde, el Sagrado Corazón —que es P+71— aterriza en el mismo lunes
 * al que la Ley Emiliani corre San Pedro y San Pablo, y las dos fiestas
 * comparten día. Pasó el 30 de junio de 2025 y vuelve a pasar en 2030, 2038,
 * 2041, 2052 y 2057. Esos años Colombia descansa diecisiete días, no dieciocho.
 *
 * Por eso esto devuelve días distintos y no celebraciones: lo que la agenda
 * necesita saber es qué días está cerrado el estudio, y un día cerrado dos
 * veces sigue siendo un día. Contar dieciocho aquí sería contar mal.
 *
 * Si algún día una ley añade un festivo —en 2026 se habló de la Virgen de
 * Chiquinquirá, sin que las fuentes consultadas coincidan— entra por
 * `DIAS_CERRADOS` hasta que se confirme contra el texto de la ley. Añadir uno
 * que no existe cierra la agenda un día hábil; omitir uno que sí existe la abre
 * en festivo. Ninguna de las dos se arregla sola.
 */
export function festivosDe(anio: number): readonly string[] {
  const guardado = cache.get(anio)
  if (guardado) return guardado

  const domingoDePascua = pascua(anio)

  const celebraciones = [
    ...FIJOS.map(([mes, dia]) => comoDia(new Date(Date.UTC(anio, mes - 1, dia)))),

    ...TRASLADABLES.map(([mes, dia]) =>
      comoDia(alLunes(new Date(Date.UTC(anio, mes - 1, dia)))),
    ),

    ...PASCUALES.map(({ dias: desplazamiento, traslada }) => {
      const fecha = new Date(domingoDePascua.getTime() + desplazamiento * 86_400_000)
      return comoDia(traslada ? alLunes(fecha) : fecha)
    }),
  ]

  const dias = [...new Set(celebraciones)].sort()

  cache.set(anio, dias)
  return dias
}

/** Si un día concreto, en formato `AAAA-MM-DD`, es festivo en Colombia. */
export function esFestivo(dia: string): boolean {
  return festivosDe(Number(dia.slice(0, 4))).includes(dia)
}
