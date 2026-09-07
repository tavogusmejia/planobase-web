/**
 * Los festivos se calculan, así que lo que hay que fijar es el cálculo.
 *
 * Las dos tablas de abajo se verificaron a mano contra calendarios oficiales
 * colombianos el 6/9/2026. **Son el contrato**: si un cambio en el algoritmo
 * las mueve, el error está en el algoritmo, no en la tabla.
 *
 * Los años lejanos no son adorno. El algoritmo gregoriano tiene variantes
 * abreviadas que aciertan durante décadas y fallan en un siglo distinto; si
 * alguien copia una de esas por error, 2026 y 2027 seguirían pasando y solo
 * 2100 lo delataría.
 */
import { describe, expect, it } from 'vitest'

import { esFestivo, festivosDe, pascua } from '@content/festivos'
import { franjasPosibles } from '@/lib/agenda/franjas'

/** Verificados a mano el 6/9/2026 contra calendarios oficiales. */
const FESTIVOS_2026 = [
  '2026-01-01', // Año Nuevo
  '2026-01-12', // Reyes (6 ene martes → lunes 12)
  '2026-03-23', // San José (19 mar jueves → lunes 23)
  '2026-04-02', // Jueves Santo
  '2026-04-03', // Viernes Santo
  '2026-05-01', // Trabajo
  '2026-05-18', // Ascensión
  '2026-06-08', // Corpus Christi
  '2026-06-15', // Sagrado Corazón
  '2026-06-29', // San Pedro y San Pablo (29 jun cae lunes)
  '2026-07-20', // Independencia
  '2026-08-07', // Boyacá
  '2026-08-17', // Asunción (15 ago sábado → lunes 17)
  '2026-10-12', // Raza (12 oct cae lunes)
  '2026-11-02', // Todos los Santos (1 nov domingo → lunes 2)
  '2026-11-16', // Cartagena (11 nov miércoles → lunes 16)
  '2026-12-08', // Inmaculada
  '2026-12-25', // Navidad
]

/** Verificados a mano el 6/9/2026 contra calendarios oficiales. */
const FESTIVOS_2027 = [
  '2027-01-01',
  '2027-01-11', // Reyes (6 ene miércoles → lunes 11)
  '2027-03-22', // San José (19 mar viernes → lunes 22)
  '2027-03-25', // Jueves Santo — Pascua es el domingo 28 de marzo
  '2027-03-26', // Viernes Santo
  '2027-05-01',
  '2027-05-10', // Ascensión
  '2027-05-31', // Corpus Christi
  '2027-06-07', // Sagrado Corazón
  '2027-07-05', // San Pedro y San Pablo (29 jun martes → lunes 5)
  '2027-07-20',
  '2027-08-07',
  '2027-08-16', // Asunción (15 ago domingo → lunes 16)
  '2027-10-18', // Raza (12 oct martes → lunes 18)
  '2027-11-01', // Todos los Santos (1 nov cae lunes)
  '2027-11-15', // Cartagena (11 nov jueves → lunes 15)
  '2027-12-08',
  '2027-12-25',
]

describe('festivosDe', () => {
  it('da los dieciocho de 2026, con los traslados de la Ley Emiliani', () => {
    expect(festivosDe(2026)).toEqual(FESTIVOS_2026)
  })

  it('da los dieciocho de 2027', () => {
    expect(festivosDe(2027)).toEqual(FESTIVOS_2027)
  })

  it('devuelve días distintos y ordenados, sin repetir ninguno', () => {
    for (const anio of [2025, 2026, 2027, 2028, 2030, 2038, 2100]) {
      const dias = festivosDe(anio)
      expect([...dias].sort()).toEqual([...dias])
      expect(new Set(dias).size).toBe(dias.length)
      /* Diecisiete o dieciocho, nunca otra cosa: dieciocho celebraciones, de
         las que dos pueden compartir día. */
      expect(dias.length).toBeGreaterThanOrEqual(17)
      expect(dias.length).toBeLessThanOrEqual(18)
    }
  })

  it('cuenta un solo día cuando dos fiestas caen en el mismo lunes', () => {
    /* No es un caso teórico: el 30 de junio de 2025 Colombia celebró a la vez
       el Sagrado Corazón (P+71) y San Pedro y San Pablo (29 jun domingo →
       lunes 30). Ese año se descansaron diecisiete días, no dieciocho.
       Vuelve a ocurrir en 2030, 2038, 2041, 2052 y 2057.

       Se fija con una prueba porque, sin ella, el día que alguien cuente
       festivos y le salgan diecisiete va a pensar que falta uno. */
    expect(festivosDe(2025)).toContain('2025-06-30')
    expect(festivosDe(2025)).toHaveLength(17)

    for (const anio of [2030, 2038, 2041, 2052, 2057]) {
      expect(festivosDe(anio), `${anio} tiene la colisión de junio`).toHaveLength(17)
    }
    /* Control: un año sin colisión sí trae los dieciocho. */
    expect(festivosDe(2026)).toHaveLength(18)
  })

  it('calcula la Pascua también en años lejanos', () => {
    /* Los valores conocidos. 2038 es la Pascua más tardía posible del siglo, y
       es donde delatan su error las variantes abreviadas del algoritmo: una
       copia mal hecha puede acertar en 2026 y 2027 y fallar aquí. */
    const dia = (anio: number) => pascua(anio).toISOString().slice(0, 10)
    expect(dia(2025)).toBe('2025-04-20')
    expect(dia(2026)).toBe('2026-04-05')
    expect(dia(2027)).toBe('2027-03-28')
    expect(dia(2038)).toBe('2038-04-25')
    expect(dia(2100)).toBe('2100-03-28')
  })

  it('la Pascua siempre cae en domingo', () => {
    /* Una prueba de propiedad, barata y que cubre los años que nadie listó. */
    for (let anio = 2020; anio <= 2120; anio++) {
      expect(pascua(anio).getUTCDay(), `Pascua de ${anio}`).toBe(0)
    }
  })

  it('no corre al lunes el Jueves ni el Viernes Santo', () => {
    /* Es la excepción de la Ley Emiliani que más se olvida al implementarla:
       trasladarlos dejaría la Semana Santa sin sus dos días. */
    const jueves = new Date('2027-03-25T00:00:00Z')
    const viernes = new Date('2027-03-26T00:00:00Z')
    expect(jueves.getUTCDay()).toBe(4)
    expect(viernes.getUTCDay()).toBe(5)
    expect(festivosDe(2027)).toContain('2027-03-25')
    expect(festivosDe(2027)).toContain('2027-03-26')
  })

  it('deja en lunes todos los trasladables', () => {
    /* Los seis fijos y los dos de Semana Santa son los únicos que pueden caer
       en otro día. Los diez restantes tienen que ser lunes, siempre. */
    const noSeTrasladan = new Set([
      '01-01', '05-01', '07-20', '08-07', '12-08', '12-25', // fijos
    ])
    for (const anio of [2026, 2027, 2028]) {
      const pascualesFijos = festivosDe(anio).filter((d) => {
        const fecha = new Date(`${d}T00:00:00Z`)
        return fecha.getUTCDay() === 4 || fecha.getUTCDay() === 5
      })
      for (const dia of festivosDe(anio)) {
        if (noSeTrasladan.has(dia.slice(5))) continue
        if (pascualesFijos.includes(dia)) continue
        expect(new Date(`${dia}T00:00:00Z`).getUTCDay(), `${dia} debería ser lunes`).toBe(1)
      }
    }
  })
})

describe('esFestivo', () => {
  it('reconoce un festivo y descarta el día siguiente', () => {
    expect(esFestivo('2026-10-12')).toBe(true)
    expect(esFestivo('2026-10-13')).toBe(false)
  })
})

describe('la agenda no ofrece citas en festivo', () => {
  it('no da ni una franja el 12 de octubre de 2026', () => {
    /* El defecto concreto que esto arregla: hasta hoy `DIAS_CERRADOS` estaba
       vacío y el sitio ofrecía citas el Día de la Raza. Anclado ocho días
       antes, para que el 12 caiga dentro de la ventana de catorce. */
    const ahora = new Date('2026-10-04T13:00:00Z')
    const franjas = franjasPosibles(15, ahora)

    expect(franjas.length).toBeGreaterThan(0)
    expect(franjas.filter((f) => f.inicio.startsWith('2026-10-12'))).toHaveLength(0)
    /* Control: el viernes 9 y el martes 13 sí abren, o el test pasaría con una
       agenda rota que no ofreciera nada. */
    expect(franjas.some((f) => f.inicio.startsWith('2026-10-09'))).toBe(true)
    expect(franjas.some((f) => f.inicio.startsWith('2026-10-13'))).toBe(true)
  })
})
