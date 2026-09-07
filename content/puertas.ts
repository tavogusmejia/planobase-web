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
    para: 'Propietarios con lote en cualquier parte de Colombia.',
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
    /* Texto aprobado por Gustavo el 5/9/2026.
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
    /* Texto aprobado por Gustavo el 5/9/2026.
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
 * **La escalera no publica precios, y es una decisión, no un pendiente.**
 * Gustavo lo cerró el 6/9/2026: la escalera se maneja cliente por cliente, y
 * poner cifras fijas en esta etapa es contraproducente. Con volumen bajo, un
 * precio publicado ancla la conversación antes de saber qué pide el caso, y se
 * pierde por arriba —proyectos que valían más— y por abajo —encargos que se
 * caen al ver la cifra sin entender qué incluye—.
 *
 * Aquí antes había un TODO pidiendo los precios de los peldaños 2 y 3, y el 2
 * llegó a publicar «desde $300.000». Ya no: `precioCOP` es `null` en todos los
 * peldaños salvo el primero.
 *
 * **Las cifras que se publican son las de los dos servicios agendables** —el
 * cero de la primera llamada y los $50.000 de la asesoría técnica— y ninguna de
 * las dos vive aquí: viven en `content/site.ts`, con el servicio. No son
 * precios de la escalera sino la promesa de lo que se puede reservar hoy en el
 * sitio, y por eso no contradicen la regla: **una hora dura lo mismo para todo
 * el mundo, así que su precio no ancla ninguna conversación.** Del peldaño 3 en
 * adelante, que es donde el caso sí cambia el precio, sigue sin publicarse
 * nada.
 *
 * Se investigaron precios de mercado antes de decidir esto —dos referencias
 * colombianas reales, una de Cali y otra de Bogotá— y la investigación no se
 * tiró: quedó como material para un artículo del pilar de costos. Ver
 * `docs/PLAN-BLOG.md`.
 */
export type Peldano = {
  /**
   * El orden en que se pintan. **No es la identidad**: cambia cada vez que se
   * inserta un peldaño, y ya cambió el 6/9/2026 al entrar la asesoría de pago.
   */
  n: number
  /**
   * La identidad, y lo que indexa la traducción.
   *
   * Antes la traducción se indexaba por `n`, con el comentario «que es su
   * identidad y no cambia». Cambió. Y el modo de falla era feo: al renumerar,
   * el inglés se desplaza un peldaño entero y `/servicios` muestra «Feasibility
   * study» bajo «Visita técnica con informe». **No lo caza ninguna guarda** —
   * `check-traducciones` comprueba que la clave exista, y existía, con el texto
   * de otro. Por slug eso no puede pasar.
   */
  slug: string
  nombre: string
  entrega: string
  precioCOP: number | null
  /** El precio es un piso y se cotiza según el caso: se anuncia "desde X". */
  desde?: boolean
}

export const escalera: Peldano[] = [
  {
    n: 1,
    slug: 'primera-llamada',
    /* Se llamaba «Asesoría técnica», con la descripción de la llamada de quince
       minutos. Al entrar el servicio de pago con ese nombre, este peldaño tenía
       el nombre del siguiente y la entrega del suyo. */
    nombre: 'Primera llamada',
    entrega:
      'Quince minutos con un arquitecto. Le decimos si podemos ayudarle, qué ' +
      'implica su caso y cuál es el siguiente paso.',
    precioCOP: 0,
  },
  {
    /* Producto del 6/9/2026: el escalón que faltaba. El salto de una llamada
       gratis de quince minutos a una visita al predio con informe escrito era
       de un metro, y es donde se caía la gente; una hora a $50.000 es el paso
       más pequeño que cabe entre los dos. Que la escalera exista «para que el
       siguiente sea una decisión pequeña en vez de un salto» lo dice su propio
       encabezado.

       `precioCOP` es `null` aquí a propósito, y no por descuido: la regla de
       que la escalera no publica precios se mantiene intacta. La cifra vive en
       `content/site.ts` con el resto del servicio agendable, que es donde ya
       vivía el cero de la llamada gratuita. */
    n: 2,
    slug: 'asesoria-tecnica',
    nombre: 'Asesoría técnica',
    entrega:
      'Una hora con un arquitecto sobre un punto concreto: una fisura, lo que ' +
      'permite la norma en su predio, si un presupuesto tiene sentido.',
    precioCOP: null,
  },
  {
    /* Producto nuevo (decisión del 4/9/2026): es el primer escalón pagado y el
       que sostiene la caja mientras maduran los encargos grandes.

       Publicó «desde $300.000» hasta el 6/9/2026. Se retiró con el resto de los
       precios de la escalera, no porque la cifra estuviera mal sino porque se
       decidió cotizar caso por caso mientras el volumen sea bajo. La cifra
       sigue siendo el punto de partida de una cotización; lo que cambia es que
       no se anuncia.

       PENDIENTE DE APROBACIÓN: el alcance está redactado a partir de la
       decisión, no de un documento del estudio. */
    n: 3,
    slug: 'visita-tecnica-con-informe',
    nombre: 'Visita técnica con informe',
    entrega:
      'Vamos al predio o al inmueble. Sale con un informe escrito: qué tiene, ' +
      'qué lo condiciona, qué hay que hacer y en qué orden.',
    precioCOP: null,
  },
  {
    n: 4,
    slug: 'estudio-de-viabilidad',
    nombre: 'Estudio de viabilidad',
    entrega:
      'Qué permite la norma en su predio, qué se puede construir, presupuesto ' +
      'grueso por metro cuadrado y cronograma.',
    precioCOP: null,
  },
  {
    n: 5,
    slug: 'anteproyecto',
    nombre: 'Anteproyecto',
    entrega:
      'Implantación, plantas, volumetría e imágenes. El proyecto deja de ser ' +
      'una idea y pasa a ser algo que se puede mirar y corregir.',
    precioCOP: null,
  },
  {
    n: 6,
    slug: 'proyecto-y-licencia',
    nombre: 'Proyecto arquitectónico y licencia',
    entrega:
      'Planos constructivos, coordinación con las demás ingenierías y trámite ' +
      'ante curaduría.',
    precioCOP: null,
  },
  {
    n: 7,
    slug: 'direccion-de-obra',
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
