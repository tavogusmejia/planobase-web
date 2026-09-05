import { lineasServicio } from './servicios'

/**
 * Las puertas de entrada.
 *
 * El PDF del estudio agrupa 43 servicios en cuatro líneas. Esa taxonomía es la
 * del proveedor: describe cómo se organiza el trabajo por dentro. Nadie llega a
 * una web preguntándose "necesito gestión técnica e interventoría"; llega
 * preguntándose "se me está fisurando la casa".
 *
 * Aquí los servicios se agrupan por la pregunta que trae al cliente. La lista
 * completa sigue existiendo en `servicios.ts` para propuestas y licitaciones,
 * pero no se publica entera: mostrar mantenimiento de piscinas junto a un primer
 * puesto de concurso público nacional no suma el mantenimiento, resta el premio.
 *
 * Criterio de recorte, sobre el informe de posicionamiento AEC:
 * - Visibles: los servicios de diseño, consultoría de proyecto y diagnóstico.
 * - Ocultos: mantenimiento operativo (19, 20, 22–30) y toda la fabricación
 *   (33–43). Se ofrecen en propuesta, cuando el cliente ya está dentro.
 * - Retirados por riesgo: 6 (LEED/EDGE) y 7 (BIM 7D) anuncian acreditaciones
 *   que el estudio no tiene documentadas. Anunciar una certificación que no se
 *   puede probar convierte la venta en desconfianza.
 */

export type Puerta = {
  slug: string
  /** La pregunta, en las palabras del cliente. Es el titular de la página. */
  pregunta: string
  /** Cómo se llama esto internamente y en el menú. */
  nombre: string
  /** Respuesta directa, sin rodeos. */
  respuesta: string
  /** Números de servicio del portafolio completo que cubre esta puerta. */
  servicios: number[]
  /** A quién le sirve. Ayuda a que nadie entre por la puerta equivocada. */
  para: string
}

export const puertas: Puerta[] = [
  {
    slug: 'proyecto-nuevo',
    pregunta: 'Tengo un lote y quiero construir.',
    nombre: 'Proyecto nuevo',
    respuesta:
      'Revisamos qué permite la norma en su predio, qué se puede construir y ' +
      'cuánto cuesta, antes de dibujar nada. Después desarrollamos el proyecto ' +
      'completo hasta los planos con los que se pide la licencia.',
    servicios: [4, 11, 12, 15, 10],
    para: 'Propietarios con lote en Jamundí, Cali, Palmira y el resto del Valle.',
  },
  {
    slug: 'remodelacion-y-ampliacion',
    pregunta: 'Ya tengo la casa y la quiero cambiar.',
    nombre: 'Remodelación y ampliación',
    respuesta:
      'Partimos del estado real de lo construido: qué se puede tumbar, qué ' +
      'aguanta un piso más y qué sale más caro de lo que parece. Diseño, ' +
      'planeación de obra y acabados, sin sorpresas a mitad de camino.',
    servicios: [13, 32, 5],
    para: 'Quien ya vive en el inmueble y necesita más espacio o cambiarlo.',
  },
  {
    /* PENDIENTE DE APROBACIÓN — texto redactado el 5/9/2026, no viene de
       ningún documento del estudio.
       Es la única puerta que no arranca de un problema concreto sino de una
       intención sin forma. Por eso la respuesta no promete un plano: promete
       ordenar el encargo, que es lo que de verdad falta cuando alguien llega
       sin saber por dónde empezar. */
    slug: 'diseno-a-medida',
    pregunta: 'Quiero un diseño personalizado y no sé por dónde empezar.',
    nombre: 'Diseño a medida',
    respuesta:
      'Se empieza por cómo quiere vivir o trabajar, no por un plano. Ordenamos ' +
      'el programa, el presupuesto y los tiempos, y eso se convierte en algo ' +
      'que se puede mirar y corregir —volumetría, plantas, imágenes— antes de ' +
      'comprometerse con nada.',
    servicios: [11, 12, 18, 13],
    para: 'Quien tiene clara la intención y todavía no el encargo.',
  },
  {
    slug: 'diagnostico-de-edificaciones',
    pregunta: 'Se está fisurando. Se filtra. Algo va mal.',
    nombre: 'Diagnóstico de edificaciones',
    respuesta:
      'Inspección técnica para saber qué está pasando y por qué, antes de ' +
      'gastar en reparaciones que no resuelven la causa. Entregamos el ' +
      'diagnóstico por escrito, con las soluciones y su orden de prioridad.',
    servicios: [21, 26, 30, 9],
    para: 'Propietarios, administradores de copropiedad y consejos.',
  },
  {
    slug: 'interventoria-y-direccion-de-obra',
    pregunta: 'Necesito que alguien vigile mi obra.',
    nombre: 'Interventoría y dirección de obra',
    respuesta:
      'Supervisión técnica independiente del constructor: control de calidad, ' +
      'cronograma, cantidades y cumplimiento normativo, con reportes que ' +
      'quedan por escrito y sirven si hay que reclamar.',
    servicios: [1, 5, 2],
    para: 'Quien contrató a un tercero para construir y no quiere depender de su palabra.',
  },
  {
    slug: 'espacio-publico-y-equipamientos',
    pregunta: 'Tenemos que sacar un proyecto público adelante.',
    nombre: 'Espacio público y equipamientos',
    respuesta:
      'Colegios, centros culturales, sedes administrativas y espacio público. ' +
      'Es donde está la mayor parte de nuestra obra y nuestros cuatro ' +
      'reconocimientos en concurso público nacional.',
    servicios: [14, 11, 12, 18],
    para: 'Entidades públicas, cajas de compensación, constructoras y fundaciones.',
  },
  {
    /* PENDIENTE DE APROBACIÓN — texto redactado el 5/9/2026.
       Va la última a propósito: es la puerta de quien no se reconoce en
       ninguna de las anteriores. Y no compite con la asesoría gratuita, la
       usa como entrada —contradecirla sería cobrar por lo que el primer
       peldaño de la escalera ya regala—; lo que se cobra, si el caso lo pide,
       es el concepto por escrito. */
    slug: 'opinion-profesional',
    pregunta: 'Necesito la opinión profesional de un experto.',
    nombre: 'Opinión profesional',
    respuesta:
      'Un arquitecto mira lo que usted ya tiene —un plano, una cotización, el ' +
      'informe de otro— y le dice qué está bien, qué falta y qué preguntaría ' +
      'antes de firmar. La primera conversación no cuesta nada. Si el caso ' +
      'pide más, se entrega un concepto técnico por escrito.',
    servicios: [5, 4, 8, 9],
    para: 'Quien va a tomar una decisión cara y quiere una lectura independiente.',
  },
]

/**
 * La escalera. Esto sí es una secuencia, y por eso va numerada: cada peldaño
 * existe para que el siguiente sea una decisión pequeña en vez de un salto.
 *
 * TODO — precios de los peldaños 2 y 3. El informe de posicionamiento propone
 * rangos, pero ningún precio salvo el de la asesoría está confirmado por el
 * estudio. No se publica nada que Gustavo no haya fijado.
 */
export type Peldano = {
  n: number
  nombre: string
  entrega: string
  precioCOP: number | null
  /** El precio es un piso y se cotiza según el caso: se anuncia "desde X". */
  desde?: boolean
}

export const escalera: Peldano[] = [
  {
    n: 1,
    nombre: 'Asesoría técnica',
    entrega:
      'Quince minutos con un arquitecto. Le decimos si podemos ayudarle, qué ' +
      'implica su caso y cuál es el siguiente paso.',
    precioCOP: 0,
  },
  {
    /* Producto nuevo (decisión del 4/9/2026): es el primer escalón pagado y el
       que sostiene la caja mientras maduran los encargos grandes. El precio es
       un piso porque depende del predio, la distancia y el alcance.
       PENDIENTE DE APROBACIÓN: el alcance está redactado a partir de la
       decisión, no de un documento del estudio. */
    n: 2,
    nombre: 'Visita técnica con informe',
    entrega:
      'Vamos al predio o al inmueble. Sale con un informe escrito: qué tiene, ' +
      'qué lo condiciona, qué hay que hacer y en qué orden.',
    precioCOP: 300_000,
    desde: true,
  },
  {
    n: 3,
    nombre: 'Estudio de viabilidad',
    entrega:
      'Qué permite la norma en su predio, qué se puede construir, presupuesto ' +
      'grueso por metro cuadrado y cronograma.',
    precioCOP: null,
  },
  {
    n: 4,
    nombre: 'Anteproyecto',
    entrega:
      'Implantación, plantas, volumetría e imágenes. El proyecto deja de ser ' +
      'una idea y pasa a ser algo que se puede mirar y corregir.',
    precioCOP: null,
  },
  {
    n: 5,
    nombre: 'Proyecto arquitectónico y licencia',
    entrega:
      'Planos constructivos, coordinación con las demás ingenierías y trámite ' +
      'ante curaduría.',
    precioCOP: null,
  },
  {
    n: 6,
    nombre: 'Dirección de obra',
    entrega:
      'Acompañamiento técnico durante la construcción, con reportes y control ' +
      'de cantidades.',
    precioCOP: null,
  },
]


/** Devuelve los servicios completos que cubre una puerta. */
export function serviciosDe(puerta: Puerta) {
  const todos = lineasServicio.flatMap((l) =>
    l.servicios.map((s) => ({ ...s, linea: l.nombre })),
  )
  return puerta.servicios
    .map((n) => todos.find((s) => s.n === n))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)
}

export function puertaPorSlug(slug: string) {
  return puertas.find((p) => p.slug === slug) ?? null
}
