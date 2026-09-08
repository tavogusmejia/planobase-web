import type { Award, Service, TeamMember } from '@/lib/types'
import { fotosEquipo } from '@content/media-equipo'

/**
 * Datos del estudio. Fuente: wix-migration/01-content/site.json, corregido con
 * el manual corporativo PBA y las tarjetas de presentación del estudio.
 * Todo lo que aquí aparece está confirmado; nada es inventado.
 */

export const site = {
  nombre: 'Plano Base',
  nombreLargo: 'Plano Base Arquitectos',
  razonSocial: 'Plano Base Arquitectos S.A.S',
  /* Sin puntos de millar a propósito: es un identificador que se coteja
     contra el RUT y contra la ficha de Google Business, y ahí se escribe
     así. Un punto de más obliga a alguien a decidir si es el mismo. */
  nit: '901603373-9',
  fundado: 2020,
  copyright: (year: number) =>
    `© ${year} Plano Base, todos los derechos reservados`,
} as const

/**
 * El título del navegador y de los resultados de búsqueda.
 *
 * Vivía escrito dos veces —en el layout y en la home— y ahora vive aquí una
 * sola vez. La plantilla del layout lo completa en las páginas interiores:
 * «Proyectos | Plano Base».
 */
export const tituloSitio = 'Plano Base | Estudio de Arquitectura'

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
  /* Va pegada a `estudio` porque son la misma pregunta hecha por dos
     públicos: quién es el estudio, y qué ha hecho con cifras verificables.
     Quien evalúa un proponente entra por aquí y no por el portafolio. */
  { key: 'experiencia', href: '/experiencia' },
  { key: 'servicios', href: '/servicios' },
  { key: 'blog', href: '/blog' },
  // Apps. Va después del blog y antes del contacto a propósito: es la sección
  // que da algo sin pedir nada, así que conviene que se encuentre sola.
  { key: 'apbs', href: '/apbs' },
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
 * Equipo. Siete personas desde el 7/9/2026, cuando Gustavo abrió la sección:
 * antes eran dos, y el sitio de Wix había mostrado cuatro retratos con los
 * nombres metidos dentro de la imagen, donde no los leía ni un buscador ni un
 * lector de pantalla.
 *
 * **El orden lo fijó Gustavo y no es alfabético ni jerárquico a secas.** Arriba
 * los tres hermanos Mejía Martínez, que son quienes responden por el estudio;
 * después el resto. Por eso solo esos tres llevan los dos apellidos: entre ellos
 * «Mejía» no distingue a nadie.
 *
 * Los cargos son los que dio Gustavo el 7/9. El de él cambió en esa misma
 * pasada —era «Gerente de Proyectos · Consultor Técnico»—, así que si algo se ve
 * distinto a como estaba, es eso y es deliberado.
 *
 * Dos venían en inglés, «Manager Fabricaciones» y «Manager Energía», y se
 * castellanizaron con su visto bueno: eran los únicos anglicismos de un sitio
 * que va entero en español. En inglés siguen diciendo Manager, que allí es lo
 * natural.
 */
export const equipo: TeamMember[] = [
  {
    slug: 'eduardo-mejia-martinez',
    nombre: 'Eduardo Mejía Martínez',
    cargo: ['Arquitecto Director', 'Representante Legal'],
    foto: fotosEquipo['eduardo-mejia-martinez'] ?? null,
    bio:
      'Arquitecto de la Universidad del Valle, de su primera promoción y con ' +
      'tesis meritoria. Dirige el estudio desde 2022. Ganó el concurso público ' +
      'nacional del colegio y teatro El Ensueño, en Ciudad Bolívar, y ha ' +
      'enseñado proyectos en la Javeriana y en la Universidad del Valle.',
  },
  {
    slug: 'julian-mejia-martinez',
    nombre: 'Julián Mejía Martínez',
    cargo: ['Jefe de Fabricación', 'Construcciones en Estructura Metálica'],
    foto: fotosEquipo['julian-mejia-martinez'] ?? null,
    bio:
      'Instalador experto de estructura metálica: empezó como soldador y llegó ' +
      'a supervisar el montaje en obra. Hoy dirige un taller de fabricación ' +
      'entero —corte por láser, plegado, soldadura MIG, TIG y láser, puente ' +
      'grúa— y responde por la producción completa, del presupuesto a la pieza ' +
      'montada.',
  },
  {
    slug: 'gustavo-mejia-martinez',
    nombre: 'Gustavo Mejía Martínez',
    cargo: ['Director de Proyectos', 'Construcciones Residenciales y Piscinas'],
    foto: fotosEquipo['gustavo-mejia-martinez'] ?? null,
    bio:
      'Ingeniero mecánico de la Universidad Nacional, con maestría en gestión ' +
      'de proyectos. Lleva obra desde 2007 entre Colombia, el Caribe ' +
      'y Estados Unidos: piscinas de borde infinito, spas y cascadas en Bakers ' +
      'Bay, y la fuente del aeropuerto internacional de Bermuda.',
  },
  {
    slug: 'miguel-ortiz',
    nombre: 'Miguel Ortiz',
    cargo: ['Arquitecto', 'Residente de Obra'],
    foto: fotosEquipo['miguel-ortiz'] ?? null,
    bio:
      'Arquitecto de la Universidad del Valle. Entró al estudio como ' +
      'practicante en 2022 y hoy coordina los proyectos: es el punto de ' +
      'contacto entre propietarios, proveedores y contratistas. Finalista de ' +
      'un concurso internacional de ideas y becado por el DAAD.',
  },
  {
    slug: 'laura-cuesta',
    nombre: 'Laura Cuesta',
    cargo: ['Diseñadora Gráfica', 'Ilustradora'],
    foto: fotosEquipo['laura-cuesta'] ?? null,
    bio:
      'Diseñadora gráfica de la Universidad del Valle. Trabaja el diseño ' +
      'multimedia, editorial y web, y la ilustración. Llevó durante cuatro ' +
      'años los medios interactivos del Centro Magis de la Javeriana en Cali.',
  },
  {
    slug: 'carlos-orozco',
    nombre: 'Carlos Orozco',
    cargo: ['Ingeniero Civil', 'Especialista en Infraestructura'],
    foto: fotosEquipo['carlos-orozco'] ?? null,
    bio:
      'Ingeniero civil de la Universidad de Cartagena, especialista en ' +
      'análisis y diseño de estructuras y máster por el Politécnico de Turín. ' +
      'Diseña puentes: ocho mixtos de acero y hormigón, uno de ellos de quince ' +
      'vanos. Antes fue residente de un edificio de siete pisos en Bogotá.',
  },
  {
    slug: 'nicolas-gomez',
    nombre: 'Nicolás Gómez',
    cargo: ['Ingeniero Mecánico', 'Gerente de Energía'],
    foto: fotosEquipo['nicolas-gomez'] ?? null,
    bio:
      'Ingeniero mecánico de la Universidad Nacional. Desde 2019 trabaja entre ' +
      'la obra y la gestión: puesta en marcha de edificios inteligentes, ' +
      'termografía con dron y diagnóstico energético. Auditor interno ISO ' +
      '50001 y piloto certificado de sistemas no tripulados.',
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
 * Decisión de Gustavo (4/9/2026): se nombra solo a Eduardo; todos los demás,
 * Gabriel Romero Villota incluido, se agrupan en «y otros». Sin fechas ni
 * calificación del vínculo.
 *
 * Consecuencia buscada: la ficha queda igual en los 24 proyectos —«Arq. Eduardo
 * Mejía Martínez y otros»— porque en ninguno trabajó solo. Es repetitivo y es
 * cierto: el estudio acredita a quien lo dirige y reconoce que hubo más manos,
 * sin convertir cada ficha en un reparto.
 *
 * La clave es el nombre TAL COMO VIENE en el dato; el valor es cómo se publica.
 * Eso resuelve de paso que el mismo hombre apareciera como «Eduardo Mejía» en
 * las fichas y «Eduardo Mejía Martínez» en el equipo: para el sitio eran dos
 * personas distintas.
 *
 * Quien no esté en este padrón no desaparece del dato —`content/projects.ts`
 * sigue guardando los cuatro— pero no se nombra en la página.
 *
 * Añadir un nombre aquí es publicarlo; quitarlo es devolverlo a «otros». Esa es
 * toda la interfaz de esta decisión.
 */
export const creditosDiseno: Record<string, string> = {
  'Eduardo Mejía': 'Arq. Eduardo Mejía Martínez',
}

/**
 * Tres reconocimientos en concurso público **nacional**, más uno privado.
 * Son la credencial más fuerte del estudio frente a clientes institucionales.
 *
 * **Eran cuatro públicos hasta el 6/9/2026.** El primer puesto de la Alcaldía
 * Local de Teusaquillo se retiró ese día por decisión de Gustavo, junto con el
 * proyecto entero: el edificio se empezó en 2017, nunca se terminó y es un caso
 * público con la Contraloría y la Procuraduría de por medio. **El premio era
 * cierto y está verificado** —ArchDaily publica la ficha del Primer Lugar con
 * los tres autores, arbitrado por la SCA con 53 propuestas— así que esto no es
 * una corrección de un dato falso sino una decisión editorial, y se puede
 * revertir devolviendo esta entrada.
 *
 * **El ámbito nacional de los que quedan lo confirma Gustavo Mejía**, el 5 y el
 * 6 de septiembre de 2026, y sobre esa confirmación se sostiene la afirmación
 * que el sitio publica. Queda escrito aquí porque es un dato verificable por
 * terceros —los términos de referencia y las actas de un concurso público son
 * documentos públicos— y conviene que se sepa en qué se apoya.
 *
 * Qué dice el dato publicado de cada proyecto, para que nadie tenga que
 * deducirlo: El Ensueño y Pradera El Volcán lo declaran nacional en su propio
 * texto —el segundo por el nombre oficial del concurso— y Las Colinas dice
 * «concurso de ideas», sin ámbito. No afirma lo contrario: se escribió sin ese
 * dato.
 *
 * **Lo que sigue mereciendo la pena, aunque ya no bloquee nada:** conseguir los
 * términos de referencia de los tres que quedan (X-03). No para comprobar a
 * Gustavo, sino porque el nombre oficial del concurso es mejor copia que el
 * adjetivo, y porque permitiría completar el subtítulo de Las Colinas.
 */
export const reconocimientos: Award[] = [
  {
    /* Estaba listado como «Colegio distrital y equipamiento urbano en Ciudad
       Bolívar» y sin enlazar, mientras El Ensueño —un colegio con teatro en
       Ciudad Bolívar, de 2014, primer puesto en concurso público nacional—
       tenía el premio en su ficha y no aparecía en esta lista. Eran el mismo,
       con dos nombres. Confirmado por Gustavo el 4/9/2026.

       Importa más de lo que parece: es el premio más fuerte del estudio, y
       estaban desconectados. (Decía «su única obra construida»: dejó de ser
       cierto el 6/9/2026, cuando Eduardo confirmó que son seis.) */
    puesto: 'primer',
    titulo: 'Colegio y teatro El Ensueño, Ciudad Bolívar',
    anio: 2014,
    proyectoSlug: 'colegio-y-teatro-el-ensueno',
    ambito: 'publico',
  },
  {
    puesto: 'segundo',
    titulo:
      'Concurso Público Nacional Nuevos Espacios de Aprendizaje para el Siglo XXI. Colegio Pradera El Volcán',
    anio: 2015,
    proyectoSlug: 'colegio-pradera-el-volcan',
    ambito: 'publico',
  },
  {
    /* Añadido el 4/9/2026. Estaba en la ficha del proyecto y no en la lista,
       probablemente porque el titular de la sección decía «concursos públicos»
       y este fue privado. Se resuelve distinguiendo el ámbito en vez de
       dejándolo fuera. */
    puesto: 'segundo',
    titulo: 'Teatro César Conto Ferrer',
    anio: 2017,
    proyectoSlug: 'teatro-cesar-conto-ferrer',
    ambito: 'privado',
  },
  {
    /* Llevaba 2021 y un nombre propio —«Casa de la cultura Colinas»— mientras
       la ficha decía 2022 y «Casa cultural en el Centro Poblado Las Colinas
       Jaime Pardo Leal». Las dos cifras y los dos nombres se veían a la vez:
       esta lista los anuncia y el enlace aterriza en la ficha.

       Se alinean contra la ficha, que es la que tiene respaldo documental —el
       volcado de Wix dice 2022— y porque los otros cuatro reconocimientos
       copian exacto el año de su proyecto. Esta fila era la única que se
       desviaba, y un desvío de uno entre cinco es un desliz de transcripción,
       no un dato distinto.

       Si el fallo del jurado fue de verdad en 2021, el año del concurso y el
       del proyecto son dos datos y hay que guardarlos por separado, no elegir
       entre ellos. Hasta saberlo, el sitio publica una sola cifra.

       El título sigue el mismo patrón que El Ensueño —nombre corto más lugar—
       y comparte «Casa cultural» y «Las Colinas» palabra por palabra con la
       ficha, para que el clic no aterrice en un desconocido. */
    puesto: 'segundo',
    titulo: 'Casa cultural Las Colinas, San José del Guaviare',
    anio: 2022,
    proyectoSlug: 'casa-cultural-las-colinas',
    ambito: 'publico',
  },
]


/**
 * Lo que se puede agendar, que desde el 6/9/2026 son dos cosas y no una.
 *
 * **Antes se llamaban igual, y ese era el problema.** Lo que se agendaba era
 * una llamada de quince minutos sin costo, pero el objeto se llamaba «Asesoría
 * técnica» y ocupaba el slug `asesoria-tecnica`. Al añadir una asesoría de pago
 * de verdad, el nombre tenía que irse a donde describe algo: la de pago se
 * queda con él, y la gratuita pasa a ser la «Primera llamada» — que es, además,
 * lo que su propio titular ya decía.
 *
 * **La historia que no se puede repetir.** Hasta el 4/9/2026 la asesoría era
 * una reunión de una hora a $50.000 con pago por adelantado, mientras el plan
 * de Facebook Ads la anunciaba como «sin costo de consulta inicial». Un lead
 * que hacía clic en «gratis» y aterrizaba en una pasarela no convertía — y
 * peor, quemaba el aprendizaje del algoritmo con clics que nunca cerraban, lo
 * que encarece todas las impresiones siguientes. Se partió en dos por eso.
 *
 * Ahora vuelve a existir la de pago, y ese modo de falla no vuelve **porque
 * conviven**: la gratuita sigue siendo lo que recibe el tráfico frío. De ahí
 * una regla que no se negocia: **la pauta apunta a la Primera llamada, nunca a
 * la asesoría de pago.** Un anuncio que lleve directo al cobro repite el error
 * de septiembre.
 */

/**
 * El primer escalón, y el destino del tráfico de campaña.
 *
 * Es lo que hasta el 6/9/2026 se llamaba `asesoria`. Cambia el nombre y el
 * slug; no cambia ni una palabra de lo que promete.
 */
export const primeraLlamada: Service = {
  /* Estrena slug propio. No tiene página en `/servicios`: su página es
     `/agendar`, que ya la describe con este mismo titular. Dos URLs compitiendo
     por la misma consulta se canibalizan. */
  slug: 'primera-llamada',
  nombre: 'Primera llamada',
  /* Decía «no debe ser costoso» y es el h1 de /agendar, a tres líneas del
     rótulo «Sin costo»: argumentaba que no debería ser caro justo al lado de
     la palabra que dice que es gratis. Quien llega de un anuncio lee el
     titular y decide en segundos; el dato que lo hace entrar es el precio,
     y el precio es cero.

     No repite «quince minutos, sin costo» porque la entrada, dos líneas
     debajo, ya lo dice con esas palabras. */
  tagline: 'La primera llamada con un arquitecto no cuesta nada.',
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
      /* Decía «el mismo día» mientras el formulario y /agendar prometían
         la siguiente hora hábil. Eran tres redacciones para dos promesas.
         Se unifican en la de /agendar, que es la página que convierte. */
      texto:
        'Por WhatsApp. Confirmamos fecha y hora dentro de la siguiente hora hábil.',
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

/**
 * La asesoría de pago: una hora con un arquitecto, $50.000.
 *
 * **Se queda con el slug `asesoria-tecnica`, y eso no es inercia.** Esa URL está
 * en el sitemap y es destino de un redirect desde Wix, así que tenía que seguir
 * resolviendo de todas formas; dársela al servicio de pago hace además que por
 * primera vez la dirección describa lo que hay detrás.
 *
 * **Qué la separa de la primera llamada**, que es la pregunta que se hará quien
 * llegue: la llamada corta dice *qué* necesita su caso —qué tipo de trabajo, qué
 * implica, cuál es el siguiente paso—. Esta resuelve. Se entra con una duda
 * técnica concreta y se sale con la respuesta.
 *
 * Una hora fija, no una tarifa por horas. No hay nada que cotizar, y por eso el
 * precio se publica: el argumento que mantiene sin cifras la escalera de
 * `content/puertas.ts` —que un precio ancla la conversación antes de saber qué
 * pide el caso— no aplica a algo que dura lo mismo para todo el mundo.
 *
 * **Mientras no exista Wompi, se cobra a mano**: la cita se agenda igual y el
 * cobro se cierra por transferencia o Nequi desde WhatsApp. Es deliberado —
 * montar la pasarela antes de saber si esto se vende es construir la parte cara
 * para nadie.
 */
export const asesoriaTecnica: Service = {
  slug: 'asesoria-tecnica',
  nombre: 'Asesoría técnica',
  tagline: 'Una hora con un arquitecto, para resolver una duda concreta.',
  descripcion:
    'Una hora con un arquitecto de Plano Base sobre un punto concreto de su ' +
    'proyecto: una fisura que no sabe si es grave, si el lote da para lo que ' +
    'quiere, qué exige la norma en su caso, si el presupuesto que le pasaron ' +
    'tiene sentido. Se entra con una pregunta y se sale con la respuesta.',
  duracionMin: 60,
  precioCOP: 50_000,
  /* PENDIENTE DE APROBACIÓN: redactadas a partir de la decisión del 6/9/2026,
     no de un documento del estudio. Y hay una que habrá que revisar el día que
     entre el cobro por la pasarela: hoy dice que se paga antes de la cita
     porque se cobra a mano, y con Wompi el pago será parte de agendar. */
  politicas: [
    {
      clave: 'Reserva',
      texto:
        'Se agenda en el sitio y se confirma con el pago, antes de la cita. ' +
        'Le escribimos por WhatsApp para cerrarlo.',
    },
    {
      clave: 'Duración',
      texto: 'Una hora. Si el caso da para más, se lo decimos antes de agendar.',
    },
    {
      clave: 'Cambios',
      texto: 'Puede moverla avisando con 24 horas de antelación.',
    },
  ],
}

/** Un servicio que se puede agendar. Los dos, y no hay más. */
export type TipoCita = 'primera-llamada' | 'asesoria-tecnica'

/**
 * El catálogo por el que resuelven la API, la Server Action y el formulario.
 *
 * **Es la única fuente de `duracionMin` y `precioCOP`, y eso es una defensa,
 * no una comodidad.** Si esos dos números pudieran llegar en la petición,
 * alguien mandaría `duracionMin: 1` y se colaría entre dos citas, o
 * `precioCOP: 0` y agendaría la de pago gratis. Del navegador solo viaja el
 * tipo, y el tipo se valida contra estas claves.
 */
export const CITAS = {
  'primera-llamada': primeraLlamada,
  'asesoria-tecnica': asesoriaTecnica,
} satisfies Record<TipoCita, Service>

/**
 * A qué se agenda quien llega sin decir a qué.
 *
 * La gratuita, siempre. Es lo que recibe la pauta, y ante un parámetro raro o
 * ausente hay que enseñar la puerta abierta, no la de pago.
 */
export const TIPO_POR_DEFECTO: TipoCita = 'primera-llamada'

/**
 * Si una cadena cualquiera —una query, un campo de formulario— nombra un tipo.
 *
 * **`Object.hasOwn` y no `in`.** El operador `in` recorre la cadena de
 * prototipos, así que `'constructor' in CITAS` es `true` y esto daba por bueno
 * `?tipo=constructor`: `CITAS['constructor']` devolvía la función `Object`, su
 * `duracionMin` era `undefined`, y el cálculo de franjas se iba a `NaN`. Lo
 * mismo con `toString` o `valueOf`. Lo encontró una prueba, no una revisión.
 */
export function esTipoCita(valor: unknown): valor is TipoCita {
  return typeof valor === 'string' && Object.hasOwn(CITAS, valor)
}

/**
 * Salida para proyectos fuera de Colombia.
 *
 * El selector del formulario trae los 1.103 municipios del DANE más las 19
 * áreas no municipalizadas (`content/apbs/divipola.ts`), pero parte de la
 * obra está en el Caribe insular. Sin esta opción, un encargo en Bahamas tendría que entrar
 * disfrazado de colombiano o no entrar.
 *
 * El código lleva prefijo `EX` a propósito: así nunca se confunde con uno del
 * DANE ni se cruza por error contra la tabla de curadurías, que resuelve por
 * código.
 */
export const FUERA_DE_COLOMBIA = {
  departamento: 'EX',
  codigo: 'EX000',
  nombre: 'Fuera de Colombia',
} as const

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
 * Cómo se presenta el tamaño del estudio. El tamaño es un hecho, no un
 * problema: se enuncia como dedicación, no se disimula como capacidad. Sobre la
 * recomendación del informe de posicionamiento AEC.
 *
 * **PENDIENTE DE APROBACIÓN**, y reescrito el 7/9 por necesidad: decía «son dos
 * personas» y desde esa tarde son siete. El párrafo anterior nombraba solo a
 * Eduardo y a Gustavo y remitía a «especialistas que convocamos», justo encima
 * de una retícula con los siete y su cargo. Lo que se conserva íntegro es la
 * última frase, que es la que de verdad vende.
 */
export const sobreElEquipo =
  'Eduardo y Gustavo Mejía Martínez dirigen personalmente cada proyecto. ' +
  'Alrededor de ellos hay arquitectura, fabricación en estructura metálica, ' +
  'ingeniería civil, energía y diseño. Aquí no hay un ejecutivo comercial de ' +
  'por medio: habla con quien firma los planos.'
