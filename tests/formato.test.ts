import { describe, expect, it } from 'vitest'
import {
  fechaHoraLarga,
  fechaLarga,
  formatArea,
  mesYAno,
  soloHora,
  unirNombres,
} from '@/lib/formato'

/**
 * El formato que depende del idioma.
 *
 * Se prueba porque **ya falló y nadie lo vio**: bajo `/en` la interfaz estaba en
 * inglés y los números seguían siendo colombianos, así que un área de 5.400 m²
 * la leía un inglés como cinco coma cuatro. No rompía ninguna página; solo
 * mentía. Es exactamente el tipo de error que una prueba atrapa y una revisión
 * visual no, porque para verlo hay que abrir la versión inglesa de una ficha
 * concreta y saber que el punto significa otra cosa.
 *
 * De las fechas se comprueba **el número del día** y no la puntuación entera:
 * el fallo real era de un día de desfase y no de una coma, y atarse a la
 * puntuación de una versión de ICU haría que la prueba se rompiera sola al
 * subir de Node.
 */

describe('formatArea', () => {
  it('usa el separador de miles de cada idioma', () => {
    // El error original, en una línea: los dos decían «5.400 m²».
    expect(formatArea('es', 5400)).toBe('5.400 m²')
    expect(formatArea('en', 5400)).toBe('5,400 m²')
  })

  it('redondea a metros enteros', () => {
    /* Cuatro proyectos traen el área con decimales desde el volcado de Wix y el
       formateador los pintaba tal cual: «2.549,68 m²». El centímetro cuadrado
       es ruido de hoja de cálculo en la ficha de un proyecto. */
    expect(formatArea('es', 2549.68)).toBe('2.550 m²')
    expect(formatArea('en', 10560.8)).toBe('10,561 m²')
  })

  it('no pinta nunca «0 m²»', () => {
    expect(formatArea('es', null)).toBeNull()
    expect(formatArea('es', 0)).toBeNull()
    expect(formatArea('es', -1)).toBeNull()
  })

  it('cualquier idioma que no sea inglés cae a español', () => {
    // La regla del sitio: el español es la base y todo lo demás cae a ella.
    expect(formatArea('fr', 5400)).toBe(formatArea('es', 5400))
  })
})

describe('fechaLarga', () => {
  it('no se adelanta un día al cambiar de zona', () => {
    /* `new Date('2026-03-14')` es medianoche UTC, que en Bogotá —UTC−5— es
       todavía el 13. Sin anclar la fecha al mediodía, cada artículo del blog
       aparecería fechado un día antes del que dice su archivo. */
    expect(fechaLarga('es', '2026-03-14')).toBe('14 de marzo de 2026')
    expect(fechaLarga('en', '2026-03-14')).toBe('14 March 2026')
  })

  it('el primero de enero no retrocede al año anterior', () => {
    // El mismo error, en su forma más cara: cambia el año.
    expect(fechaLarga('es', '2026-01-01')).toBe('1 de enero de 2026')
    expect(mesYAno('es', '2026-01-01')).toBe('enero de 2026')
  })
})

describe('las horas de una cita', () => {
  const cita = new Date('2026-09-10T15:00:00Z')

  it('se dicen en hora de Bogotá en los dos idiomas', () => {
    /* Una cita se confirma por correo, y ese correo lo lee tanto quien está en
       Bogotá como quien está en Madrid. Si el formato tomara la zona de la
       máquina que compone el correo, la hora dependería de en qué región de
       Vercel se ejecutó la función. */
    expect(soloHora('es', cita)).toBe('10:00')
    expect(soloHora('en', cita)).toBe('10:00')
  })

  it('lleva el día de la semana, que es lo primero que se comprueba', () => {
    expect(fechaHoraLarga('es', cita)).toMatch(
      /^jueves, 10 de septiembre de 2026.*10:00$/,
    )
    expect(fechaHoraLarga('en', cita)).toMatch(
      /^Thursday, 10 September 2026.*10:00$/,
    )
  })
})

describe('unirNombres', () => {
  it('pone la conjunción del idioma y no una «y» fija', () => {
    expect(unirNombres('es', ['Ana', 'Beto'])).toBe('Ana y Beto')
    expect(unirNombres('en', ['Ana', 'Beto'])).toBe('Ana and Beto')
    expect(unirNombres('es', ['Ana', 'Beto', 'Caro'])).toBe('Ana, Beto y Caro')
  })
})
