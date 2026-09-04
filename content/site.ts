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
  { key: 'proyectos', href: '/proyectos' },
  { key: 'estudio', href: '/estudio' },
  { key: 'blog', href: '/blog' },
  { key: 'contacto', href: '/contacto' },
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
