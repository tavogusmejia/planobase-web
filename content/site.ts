import type { Award, Service, TeamMember } from '@/lib/types'

/**
 * Datos del estudio. Fuente: wix-migration/01-content/site.json, corregido con
 * el manual corporativo PBA y las tarjetas de presentación del estudio.
 * Todo lo que aquí aparece está confirmado; nada es inventado.
 */

export const site = {
  nombre: 'Plano Base',
  nombreLargo: 'Plano Base Arquitectos',
  razonSocial: 'Plano Base Arquitectos S.A.S',
  fundado: 2020,
  copyright: (year: number) =>
    `© ${year} Plano Base, todos los derechos reservados`,
} as const

export const contacto = {
  direccion: 'Calle 18 # 61-29',
  ciudad: 'Cali, Colombia',
  telefono: '+57 301 426 4603',
  /** Formato internacional sin signos, para los enlaces wa.me. */
  whatsapp: '573014264603',
  correo: 'proyectos@planobase.co',
  instagram: 'https://www.instagram.com/planobase.co/',
} as const

/**
 * Navegación principal. Del menú de Wix se retira "Más": era un desplegable que
 * solo apuntaba a las páginas legacy que se eliminan en esta migración.
 */
export const navegacion = [
  { key: 'proyectos', href: '/proyectos', perfil: 'estudio' },
  { key: 'estudio', href: '/estudio', perfil: 'estudio' },
  { key: 'servicios', href: '/servicios', perfil: 'oficina' },
  { key: 'agendar', href: '/agendar', perfil: 'oficina' },
  { key: 'blog', href: '/blog', perfil: 'ambos' },
  { key: 'contacto', href: '/contacto', perfil: 'ambos' },
] as const

/**
 * El manifiesto del estudio, literal del bloque de /estudio.
 * No reescribir sin autorización: es la única declaración de qué hace el estudio.
 */
export const manifiesto =
  'Somos Plano Base, un estudio colaborativo de arquitectura dedicado al ' +
  'desarrollo integral de proyectos arquitectónicos en sectores como el ' +
  'educativo, institucional, comercial y residencial. Nuestro compromiso y ' +
  'enfoque considera cada detalle: el contexto, las necesidades del usuario, ' +
  'la materialidad, la espacialidad y la viabilidad económica en cada etapa ' +
  'del proceso.'

/**
 * Equipo. Nombres y cargos tomados de las tarjetas de presentación del estudio
 * (Exportados/PDF/Tarjeta de presentación). El sitio de Wix mostraba cuatro
 * retratos con los nombres dentro de la imagen; hoy el estudio son dos personas.
 */
export const equipo: TeamMember[] = [
  {
    slug: 'eduardo-mejia-martinez',
    nombre: 'Eduardo Mejía Martínez',
    cargo: ['Arquitecto Director', 'Representante Legal'],
    foto: null,
  },
  {
    slug: 'gustavo-mejia-martinez',
    nombre: 'Gustavo Mejía Martínez',
    cargo: ['Gerente de Proyectos', 'Consultor Técnico'],
    foto: null,
  },
]

/**
 * Cuatro reconocimientos en concurso público. Son la credencial más fuerte del
 * estudio frente a clientes institucionales y hoy están enterrados en una lista.
 */
export const reconocimientos: Award[] = [
  {
    puesto: 'primer',
    titulo: 'Alcaldía Local de Teusaquillo',
    anio: 2014,
    proyectoSlug: 'alcaldia-local-de-teusaquillo',
  },
  {
    puesto: 'primer',
    titulo: 'Colegio distrital y equipamiento urbano en Ciudad Bolívar',
    anio: 2014,
    proyectoSlug: null,
  },
  {
    puesto: 'segundo',
    titulo:
      'Concurso Público Nacional Nuevos Espacios de Aprendizaje para el Siglo XXI. Colegio Pradera El Volcán',
    anio: 2015,
    proyectoSlug: 'colegio-pradera-el-volcan',
  },
  {
    puesto: 'segundo',
    titulo: 'Casa de la cultura Colinas, San José del Guaviare',
    anio: 2021,
    proyectoSlug: 'casa-cultural-las-colinas',
  },
]

/**
 * El servicio reservable. Es la conversión principal del sitio y el destino del
 * tráfico de campaña.
 *
 * TODO — decisión de Gustavo: el plan de Facebook Ads anuncia la asesoría como
 * "sin costo de consulta inicial" y "sin compromiso", mientras que aquí figura a
 * $50.000 COP con pago por adelantado y no reembolsable. Un lead que llega desde
 * la pauta creyendo que es gratis y encuentra una pasarela de pago no convierte.
 * El precio vive en esta constante: cambiarlo es una línea.
 */
export const asesoria: Service = {
  slug: 'asesoria-tecnica',
  nombre: 'Asesoría técnica',
  tagline: 'Contar con la asesoría de un arquitecto no debe ser costoso.',
  descripcion:
    'Agenda una reunión virtual de una hora con un arquitecto de Plano Base. ' +
    'Ideal para resolver dudas técnicas, evaluar daños, entender procesos o ' +
    'recibir orientación profesional sin compromisos.',
  duracionMin: 60,
  precioCOP: 50_000,
  politicas: [
    { clave: 'Reserva previa', texto: 'Mínimo 48 horas de anticipación.' },
    {
      clave: 'Pago',
      texto: 'Pago total por adelantado al momento de la reserva.',
    },
    {
      clave: 'Confirmación',
      texto: 'Correo o mensaje de confirmación con fecha, hora y duración.',
    },
    {
      clave: 'Cambios',
      texto:
        'Un cambio de fecha u hora con mínimo 24 h de anticipación, sujeto a disponibilidad.',
    },
    {
      clave: 'Cancelaciones',
      texto:
        'El pago no es reembolsable ante cancelaciones, inasistencias sin aviso o cambios con menos de 24 h.',
    },
    {
      clave: 'Si cancelamos nosotros',
      texto: 'Reprogramación sin costo o reembolso completo del depósito.',
    },
  ],
}

/** Municipios del formulario, alineados con el Lead Ad de la campaña. */
export const municipios = [
  'Jamundí',
  'Cali',
  'Palmira',
  'Candelaria',
  'Otro municipio del Valle',
  'Otro',
] as const

/** Etapas del proyecto, idénticas a las del formulario de Facebook. */
export const etapasProyecto = [
  'Solo tengo el lote',
  'Tengo una idea, sin planos',
  'Ya empecé y necesito apoyo',
  'Quiero ampliar o remodelar',
] as const

/**
 * Visión de arquitectura.
 *
 * BORRADOR PARA EDUARDO. Está escrito para que lo corrija, no para publicarse
 * tal cual: la voz de un estudio la pone su director, no un tercero.
 *
 * Ahora bien, no es invención. Los cuatro temas salen de contar de qué habla el
 * estudio en sus propias memorias de proyecto: «público / comunidad» aparece 97
 * veces en los 24 textos, «educación» 81, «contexto y lugar» 53, «paisaje» 44 y
 * «luz» 39. Cada tema va acompañado de una frase literal de una memoria, con el
 * proyecto de donde sale, para que se vea que la idea ya estaba escrita.
 *
 * Nota aparte: «bioclimático» aparece solo 10 veces. El plan de pauta se apoya
 * en ese término, pero la obra habla sobre todo de arquitectura pública. Vale la
 * pena revisar si el mensaje de campaña está describiendo al estudio correcto.
 */
export type TemaVision = {
  titulo: string
  texto: string
  cita: string
  proyectoSlug: string
  proyectoTitulo: string
}

export const vision: TemaVision[] = [
  {
    titulo: 'La arquitectura pública no es un encargo menor',
    texto:
      'La mayor parte de nuestra obra es pública: colegios, centros culturales, ' +
      'sedes administrativas, plazas. No llegamos ahí por descarte. Un edificio ' +
      'público es el único que una comunidad entera usa sin haberlo elegido, y ' +
      'eso impone una exigencia distinta: tiene que funcionar para quien no ' +
      'estuvo en ninguna reunión de diseño.',
    cita:
      'No solo se construye una escuela, se construye una comunidad activa, unida por un proyecto urbano y pedagógico con visión de futuro.',
    proyectoSlug: 'colegio-pradera-el-volcan',
    proyectoTitulo: 'Colegio Pradera El Volcán',
  },
  {
    titulo: 'Un colegio es una pieza de ciudad',
    texto:
      'Diseñamos escuelas como se diseña un fragmento urbano: con calles, ' +
      'plazas y bordes que negocian con el barrio. El comedor, la biblioteca y ' +
      'el auditorio se abren hacia afuera cuando la jornada termina. El lote ' +
      'escolar deja de ser un recinto cerrado y devuelve suelo a la ciudad.',
    cita:
      'Este proyecto se concibe como un sistema arquitectónico y urbano que articula escalas múltiples: el barrio, el parque y la futura avenida metropolitana.',
    proyectoSlug: 'concurso-colegio-villas-del-progreso',
    proyectoTitulo: 'Concurso Colegio Villas del Progreso',
  },
  {
    titulo: 'El patio antes que la fachada',
    texto:
      'En el trópico el espacio exterior es habitable todo el año, y por eso ' +
      'organizamos los proyectos desde el vacío y no desde el volumen. El patio ' +
      'ventila, ilumina y ordena; es donde ocurre lo que no estaba en el ' +
      'programa. Vale para una casa en Jamundí y para un colegio de dos mil ' +
      'estudiantes.',
    cita:
      'Sus aulas se disponen en torno a patios verdes, evocando las manzanas tradicionales con jardines interiores.',
    proyectoSlug: 'colegio-y-teatro-el-ensueno',
    proyectoTitulo: 'Colegio y Teatro El Ensueño',
  },
  {
    titulo: 'Construir para que dure más que su programa',
    texto:
      'Los usos cambian; la estructura y el espacio permanecen. Diseñamos ' +
      'edificios capaces de sobrevivir a la función para la que fueron ' +
      'encargados, con materiales que envejecen bien y una economía que hace ' +
      'viable mantenerlos. Un edificio público que no se puede mantener no es ' +
      'barato: es desechable.',
    cita:
      'Una infraestructura cultural que evoluciona con el tiempo, capaz de convertirse en una «ruina útil», como parte del legado urbano.',
    proyectoSlug: 'concurso-uva-orfelinato',
    proyectoTitulo: 'Concurso UVA Orfelinato',
  },
]

/**
 * Cómo se presenta el tamaño del estudio. Son dos personas y eso es un hecho,
 * no un problema: se enuncia como dedicación, no se disimula como capacidad.
 * Sobre la recomendación del informe de posicionamiento AEC.
 */
export const sobreElEquipo =
  'Eduardo y Gustavo Mejía Martínez dirigen personalmente cada proyecto. ' +
  'Para estructura, redes, presupuesto y obra convocamos especialistas con ' +
  'quienes trabajamos desde 2020. Aquí no hay un ejecutivo comercial de por ' +
  'medio: habla con quien firma los planos.'
