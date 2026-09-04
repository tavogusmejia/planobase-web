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
 * Navegación principal.
 *
 * Un solo menú, plano. Hubo aquí un conmutador Estudio / Oficina técnica que
 * partía el sitio en dos catálogos: la idea era evitar que el estudio pareciera
 * un contratista de todo, pero le pedía al visitante que se clasificara antes
 * de saber qué hay, y escondía la mitad del sitio a quien no tocara el
 * conmutador. Esa confusión ya está resuelta donde tenía que resolverse: en
 * cómo están redactados los servicios, que abren por la pregunta del cliente y
 * no por la taxonomía interna del proveedor.
 *
 * Del menú de Wix se retira "Más": era un desplegable que solo apuntaba a las
 * páginas legacy que se eliminan en esta migración.
 */
export const navegacion = [
  { key: 'proyectos', href: '/proyectos' },
  { key: 'estudio', href: '/estudio' },
  { key: 'servicios', href: '/servicios' },
  { key: 'blog', href: '/blog' },
  { key: 'contacto', href: '/contacto' },
] as const

/**
 * Las láminas del hero, en orden. La primera es la que abre la home.
 *
 * Antes esto lo resolvía un algoritmo —destacados, luego año descendente— y la
 * portada del sitio dependía de un desempate por fecha. Un portafolio se abre
 * con lo que uno quiere enseñar primero, así que la decisión se escribe.
 * Reordenar el hero es reordenar esta lista; quitar una lámina es borrar una
 * línea.
 *
 * Regla que sigue viva: una portada por debajo de 1920 px de ancho se ve blanda
 * a pantalla completa y se descarta aunque esté declarada aquí, con un aviso en
 * desarrollo. La lista manda sobre el orden, no sobre la calidad.
 *
 * Si queda vacía, el hero vuelve a ordenarse solo por relevancia.
 */
export const heroSlides: string[] = [
  'casa-aguilar',
  'concurso-colegio-villas-del-progreso',
  'tirreno',
  'concurso-5inco-sena-ipiales',
  'concurso-5inco-sena-kennedy',
  'jardin-infantil-los-alamos',
  'alcaldia-local-de-santa-fe',
]

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
 * Cómo se acredita el diseño en la ficha de proyecto.
 *
 * El volcado de Wix trae cuatro nombres en el campo `diseno`: Eduardo Mejía
 * (24 proyectos), Gabriel Romero Villota (23), Carlos García (6) y Henry Medina
 * / Amalgama (1). El sitio los pintaba a los cuatro con el mismo peso, y el
 * JSON-LD los declaraba coautores idénticos.
 *
 * Decisión de Gustavo (4/9/2026): se nombran Eduardo y Gabriel; el resto se
 * agrupa en «y otros». Sin fechas ni calificación del vínculo.
 *
 * La clave es el nombre TAL COMO VIENE en el dato; el valor es cómo se publica.
 * Eso resuelve de paso que el mismo hombre apareciera como «Eduardo Mejía» en
 * las fichas y «Eduardo Mejía Martínez» en el equipo: para el sitio eran dos
 * personas distintas.
 *
 * Quien no esté en este padrón no desaparece del dato —`content/projects.ts`
 * sigue guardando los cuatro— pero no se nombra en la página.
 *
 * PENDIENTE: confirmar si Gabriel Romero Villota lleva también el tratamiento
 * de «Arq.». Se le dio solo a Eduardo porque es el único cuyo título consta en
 * el material del estudio.
 */
export const creditosDiseno: Record<string, string> = {
  'Eduardo Mejía': 'Arq. Eduardo Mejía Martínez',
  'Gabriel Romero Villota': 'Gabriel Romero Villota',
}

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
 * El primer escalón, y el destino del tráfico de campaña.
 *
 * Hasta hoy era una reunión virtual de una hora a $50.000 COP, con pago por
 * adelantado y no reembolsable, mientras el plan de Facebook Ads la anunciaba
 * como "sin costo de consulta inicial" y "sin compromiso". Un lead que hacía
 * clic en "gratis" y aterrizaba en una pasarela de pago no convertía — y peor,
 * quemaba el aprendizaje del algoritmo con clics que nunca cerraban, lo que
 * encarece todas las impresiones siguientes.
 *
 * Decisión de Gustavo (4/9/2026): se parte en dos. Esta primera llamada es
 * corta y sin costo, y es lo que recibe el tráfico frío; el producto pagado de
 * verdad es la visita técnica con informe escrito, que vive en la escalera de
 * `content/puertas.ts`. Así el anuncio dice la verdad y la hora del director
 * —el recurso más escaso de una empresa de dos personas— deja de venderse al
 * precio de un almuerzo.
 *
 * El slug NO cambia: /servicios/asesoria-tecnica está en el sitemap y es
 * destino de un redirect desde Wix.
 */
export const asesoria: Service = {
  slug: 'asesoria-tecnica',
  nombre: 'Asesoría técnica',
  tagline: 'Contar con la asesoría de un arquitecto no debe ser costoso.',
  descripcion:
    'Quince minutos con un arquitecto de Plano Base, sin costo y sin ' +
    'compromiso. Nos cuenta su caso, le decimos si podemos ayudarle, qué ' +
    'implica y cuál es el siguiente paso. Si hace falta ir al predio, se lo ' +
    'decimos en esta llamada.',
  duracionMin: 15,
  precioCOP: 0,
  /* Tres, no seis. Las anteriores —pago por adelantado, no reembolsable,
     cambios con 24 h— eran las de un servicio pagado y resultan
     desproporcionadas para una llamada de quince minutos que no cuesta nada.
     PENDIENTE DE APROBACIÓN: redactadas a partir de la decisión, no de un
     documento del estudio. */
  politicas: [
    {
      clave: 'Reserva',
      texto: 'Por WhatsApp. Confirmamos fecha y hora el mismo día.',
    },
    {
      clave: 'Duración',
      texto: 'Quince minutos. Si el caso da para más, se lo decimos ahí mismo.',
    },
    {
      clave: 'Sin compromiso',
      texto: 'No hay costo ni obligación de contratar nada después.',
    },
  ],
}

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
