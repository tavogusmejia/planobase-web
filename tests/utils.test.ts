import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  absoluteUrl,
  creditoDiseno,
  esConcurso,
  naturalezaDe,
  nombresDiseno,
  precioTexto,
} from '@/lib/utils'
import type { Categoria } from '@/lib/types'

/**
 * Lo que el portafolio afirma de cada proyecto.
 *
 * `naturalezaDe` es la función con el riesgo reputacional más alto de todo el
 * sitio: presentar una propuesta de concurso como obra construida se cae en la
 * primera visita de un cliente institucional. Y las tres formas de romperla
 * —confundir `null` con `false`, invertir la precedencia, o mirar la categoría
 * antes que el dato— dan un sitio que compila, despliega y se ve perfecto.
 *
 * El resto —crédito de diseño, precio, URL absoluta— son fallos que también
 * salieron ya y que tampoco rompen nada al romperse.
 */

const proyecto = (
  construido: boolean | null,
  categorias: Categoria[] = ['educativo'],
) => ({ construido, categorias })

describe('naturalezaDe', () => {
  it('una obra construida se anuncia como tal aunque naciera de un concurso', () => {
    /* El Ensueño es exactamente ese caso: `construido` y en la categoría
       `concursos`. Es la credencial más fuerte que tiene el estudio, y una
       precedencia al revés la degradaría a «concurso» sin que nada fallara. */
    expect(naturalezaDe(proyecto(true, ['educativo', 'concursos']))).toBe(
      'construido',
    )
  })

  it('sin dato de construcción no afirma nada', () => {
    /* **`null` no es `false`.** El volcado de Wix traía `construido` marcado en
       un solo proyecto de 24: eso era un vacío del CMS, no la verdad. Un `if
       (!p.construido)` en lugar de `=== false` etiquetaría como «propuesta»
       veintitrés proyectos de los que no se sabía nada. */
    expect(naturalezaDe(proyecto(null))).toBeNull()
  })

  it('sin dato pero en concursos, sí se puede decir que es un concurso', () => {
    expect(naturalezaDe(proyecto(null, ['cultural', 'concursos']))).toBe(
      'concurso',
    )
  })

  it('el `false` explícito sí es una propuesta', () => {
    expect(naturalezaDe(proyecto(false))).toBe('propuesta')
    expect(naturalezaDe(proyecto(false, ['urbano', 'concursos']))).toBe(
      'concurso',
    )
  })

  it('esConcurso mira la categoría y nada más', () => {
    expect(esConcurso({ categorias: ['concursos'] })).toBe(true)
    expect(esConcurso({ categorias: ['casas', 'vivienda'] })).toBe(false)
  })
})

describe('creditoDiseno', () => {
  it('la conjunción es la del idioma y no una «y» escrita a mano', () => {
    /* Iba fija en castellano, así que la ficha inglesa de cada proyecto con
       varios autores decía «Arq. Eduardo Mejía Martínez y others». */
    expect(creditoDiseno('es', ['Eduardo Mejía', 'Alguien más'], 'otros')).toBe(
      'Arq. Eduardo Mejía Martínez y otros',
    )
    expect(
      creditoDiseno('en', ['Eduardo Mejía', 'Alguien más'], 'others'),
    ).toBe('Arq. Eduardo Mejía Martínez and others')
  })

  it('quien no está en el padrón no se nombra', () => {
    /* «y otros» no es un eufemismo: dice que hubo más manos sin nombrarlas, que
       es la decisión del estudio. Lo que no puede pasar es que un nombre que
       nadie autorizó salga publicado en una ficha. */
    expect(nombresDiseno(['Eduardo Mejía', 'Alguien más'])).toEqual([
      'Arq. Eduardo Mejía Martínez',
    ])
    expect(creditoDiseno('es', ['Alguien más', 'Otro más'], 'otros')).toBe(
      'otros',
    )
  })

  it('sin equipo no hay línea de crédito', () => {
    expect(creditoDiseno('es', [], 'otros')).toBeNull()
  })

  it('un solo nombre conocido va solo, sin conjunción', () => {
    expect(creditoDiseno('es', ['Eduardo Mejía'], 'otros')).toBe(
      'Arq. Eduardo Mejía Martínez',
    )
  })
})

describe('precioTexto', () => {
  it('lo gratuito no se anuncia como «$ 0»', () => {
    /* Devuelve `null` y la palabra la pone quien pinta, que es quien tiene las
       traducciones: cuando la palabra vivía aquí, `/en/agendar` —el final del
       embudo inglés— decía «Sin costo». */
    expect(precioTexto('es', 0)).toBeNull()
    expect(precioTexto('en', 0)).toBeNull()
    expect(precioTexto('es', -1)).toBeNull()
  })

  it('un precio real se formatea, y distinto en cada idioma', () => {
    const es = precioTexto('es', 250000)
    const en = precioTexto('en', 250000)
    expect(es).toContain('250')
    expect(en).toContain('250')
    expect(es).not.toBe(en)
  })
})

describe('absoluteUrl', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('convierte una ruta del sitio en URL absoluta', () => {
    /* schema.org exige URL absoluta en `image`, y las 23 fichas de proyecto
       emitían una ruta relativa: el campo era inválido y el JSON-LD entero
       quedaba en entredicho sin que el sitio diera un solo error. */
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://www.planobase.co/')
    expect(absoluteUrl('/proyectos/el-ensueno')).toBe(
      'https://www.planobase.co/proyectos/el-ensueno',
    )
    // Sin barra inicial también, que es como sale de `mediaSrc()` en local.
    expect(absoluteUrl('media/foto.jpg')).toBe(
      'https://www.planobase.co/media/foto.jpg',
    )
  })

  it('deja intacta la que ya es absoluta', () => {
    // En producción `mediaSrc()` devuelve la URL del bucket. Anteponerle el
    // dominio daría una URL doble que no resuelve.
    expect(absoluteUrl('https://bucket.supabase.co/x.jpg')).toBe(
      'https://bucket.supabase.co/x.jpg',
    )
  })
})
