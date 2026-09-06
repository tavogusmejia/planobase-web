import type { Post } from '@/lib/types'
import { DOS_AMPLIACIONES } from './diagramas/ampliacion'

/**
 * Pilar de costos, y no de trámites, por una razón editorial: la consulta que
 * trae al lector es «cuánto vale», y la respuesta útil es que **el número lo
 * decide la evaluación estructural y no el metro cuadrado**. Es la misma
 * doctrina de `cuanto-cuesta-construir-por-m2-en-colombia` aplicada a un caso
 * concreto: no se publica la cifra que no existe, se publica lo que la
 * determina y lo que sí está verificado.
 *
 * Tiene tres vecinos publicados y con los tres se enlaza sin repetirlos:
 * `reforzamiento-estructural-y-nsr-10` lleva el trámite y las firmas del
 * reforzamiento; `construi-sin-licencia` lleva el reconocimiento; y
 * `cuanto-cuesta-remodelar-ambiente-por-ambiente` lleva la obra interior.
 *
 * Lo que esta pieza aporta y no estaba en el corpus:
 *
 * 1. **El capítulo se llama A.10 y ahora está leído.** El artículo del
 *    reforzamiento declaró en su comentario de cabecera que no había podido
 *    verificar la designación exacta del capítulo y que por eso no la nombraba.
 *    Se leyó el Título A completo en el PDF que publica la Sociedad Colombiana
 *    de Geotecnia: el capítulo es «A.10 — Evaluación e intervención de
 *    edificaciones construidas antes de la vigencia de la presente versión del
 *    Reglamento», y su A.10.1.3.4 nombra literalmente las «ampliaciones en
 *    altura».
 * 2. **La distinción entre A.10.7 y A.10.8 es el corazón del artículo.** En
 *    la adosada, con una junta apropiada y los índices por debajo de la unidad,
 *    **no hay necesidad de intervenir la estructura existente**. En la de
 *    altura no existe esa salida: A.10.8.1 obliga a que las dos porciones
 *    trabajen en conjunto. Es la diferencia entre crecer hacia el lado y
 *    crecer hacia arriba, y decide el presupuesto entero.
 * 3. **El Decreto 1401 de 2023 existe y casi nadie lo cita bien.** Metió en el
 *    reglamento el documento AIS 410-23 para viviendas de mampostería de
 *    origen informal. Es una vía nueva de evaluación y reducción de
 *    vulnerabilidad, **no una autorización para levantar un piso**: su propio
 *    alcance dice «este documento no aplica para viviendas nuevas». El Decreto
 *    1580 de 2023 corrigió un yerro suyo.
 * 4. **La base reducida del 30 % de las expensas no cubre la ampliación.** El
 *    parágrafo 2 del artículo 2.2.6.6.8.7 la reserva a restauración,
 *    reconstrucción, modificación y reforzamiento estructural. La ampliación
 *    liquida sobre el área completa. Es una corrección directa a lo que
 *    mucha gente deduce del artículo del reforzamiento, que sí tiene el
 *    beneficio.
 * 5. **La expensa se puede calcular.** Con la ecuación del artículo
 *    2.2.6.6.8.3, los factores publicados y la UVT de 2026 sale un número
 *    real. Solo se publica el tramo de hasta 100 m², donde el factor j es un
 *    valor publicado y no una fórmula: por encima de esa área la fórmula del
 *    decreto viene de un PDF con transcripción dudosa y no se usa.
 *
 * Lo que NO se publica, y se declara dentro del artículo:
 *
 * - **Cualquier cifra de obra por m².** Sigue la doctrina del pilar.
 * - **El impuesto de delineación urbana.** Es municipal y no hay tarifa
 *   nacional.
 * - **Cuánto cuesta la evaluación de vulnerabilidad.** No hay fuente
 *   colombiana publicada con metodología, y ya se declaró así en el artículo
 *   del reforzamiento.
 *
 * Fechado en julio de 2026. La fuente más reciente que cita es la Resolución
 * DIAN 000238 del 15 de diciembre de 2025, que fija la UVT del año.
 */
export const post: Post = {
  slug: 'ampliar-un-segundo-piso',
  titulo: 'Cuánto cuesta ampliar un segundo piso, y si la casa lo aguanta',
  pilar: 'costos',
  fecha: '2026-04-11',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'La pregunta cara no es cuánto vale el metro cuadrado nuevo: es por dónde ' +
    'baja su carga. El reglamento tiene un capítulo para esto, distingue ' +
    'crecer hacia el lado de crecer hacia arriba, y solo una de las dos ' +
    'obliga a analizar la casa entera otra vez.',
  metaDescripcion:
    'Qué exige la NSR-10 para levantar un segundo piso, qué licencia aplica y ' +
    'qué determina de verdad el costo de una ampliación en altura.',
  puerta: 'remodelacion-y-ampliacion',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La conversación empieza siempre igual: «quiero levantar un segundo ' +
        'piso, ¿cuánto me cuesta el metro?». Y esa pregunta, aunque parece la ' +
        'primera, es la segunda.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La primera es **si la casa lo aguanta**, y no es retórica: el ' +
        'reglamento sismo resistente tiene un capítulo entero dedicado a ' +
        'intervenir lo que ya está construido, y ese capítulo decide si la ' +
        'obra vale veinte o vale sesenta. Cualquier precio por metro cuadrado ' +
        'que le den antes de esa respuesta está cotizando una obra que nadie ' +
        'ha definido.',
    },
    {
      tipo: 'nota',
      texto:
        'Quién firma qué en este terreno no admite matices, y ya está contado ' +
        'aparte: **el dictamen estructural lo firma un ingeniero civil**, no un ' +
        'arquitecto. Las firmas, la modalidad de reforzamiento y por qué ese ' +
        'trámite cuesta menos de lo que se teme están en [reforzamiento ' +
        'estructural y NSR-10](/blog/reforzamiento-estructural-y-nsr-10). Aquí ' +
        'no lo repito.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El capítulo que gobierna esto se llama A.10' },
    {
      tipo: 'parrafo',
      texto:
        'La NSR-10 no trata una edificación existente como una obra nueva, y ' +
        'no lo deja al criterio de nadie. Su Título A tiene un capítulo ' +
        'específico, y su primer párrafo dice para qué sirve:',
    },
    {
      tipo: 'cita',
      texto:
        'El presente Capítulo establece los criterios y procedimientos que se ' +
        'deben seguir para evaluar la vulnerabilidad sísmica y adicionar, ' +
        'modificar o remodelar el sistema estructural de edificaciones ' +
        'existentes diseñadas y construidas con anterioridad a la vigencia de ' +
        'la presente versión del Reglamento.',
      fuente: 'NSR-10, Título A, A.10.1.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y por si quedara duda de que su caso está adentro, el A.10.1.3.4 lo ' +
        'nombra con todas las letras: los criterios del capítulo «deben ser ' +
        'empleados para el diseño y construcción de **ampliaciones adosadas o ' +
        'ampliaciones en altura**». No es una zona gris. Es un procedimiento ' +
        'escrito.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Crecer hacia el lado y crecer hacia arriba no son la misma obra' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la distinción que casi nadie le explica al propietario, y es ' +
        'la que más dinero mueve. El reglamento parte las ampliaciones en dos ' +
        'y les da requisitos distintos.',
    },
    {
      tipo: 'diagrama',
      svg: DOS_AMPLIACIONES,
      titulo: 'Las dos ampliaciones que distingue el reglamento',
      pie:
        'Esquema sin escala. A la izquierda, A.10.7; a la derecha, A.10.8. ' +
        'Diagrama del estudio.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Adosada: hay una salida' },
    {
      tipo: 'parrafo',
      texto:
        'Ampliación adosada es aquella «en que se amplía el área sin modificar ' +
        'su altura». Y ahí el reglamento abre una puerta que en la ampliación ' +
        'en altura no existe:',
    },
    {
      tipo: 'cita',
      texto:
        'Cuando los índices de sobreesfuerzo y flexibilidad de la estructura ' +
        'existente son menores que la unidad no hay necesidad de intervenir el ' +
        'sistema estructural existente, siempre y cuando la porción nueva de ' +
        'la edificación se separe de la antigua con una junta apropiada.',
      fuente: 'NSR-10, Título A, A.10.7.1',
    },
    {
      tipo: 'nota',
      texto:
        'Ni siquiera esa puerta es gratis del todo. El A.10.7.4 exige demostrar ' +
        'que la cimentación nueva **no afecta la de la parte antigua**, y que ' +
        'si la cimentación vieja va a recibir carga nueva se explore bajo ' +
        'supervisión de un ingeniero geotecnista. Una junta separa estructuras; ' +
        'no separa suelos.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'En altura: no hay salida' },
    {
      tipo: 'parrafo',
      texto:
        'Ampliación en altura es aquella «en que se modifica la altura de la ' +
        'edificación con o sin aumento en planta». Y aquí la junta no sirve, ' +
        'porque la carga nueva tiene que bajar por la estructura vieja:',
    },
    {
      tipo: 'cita',
      texto:
        'En este tipo de modificaciones las dos porciones de la edificación ' +
        'trabajan en conjunto tanto para fuerzas horizontales como para cargas ' +
        'verticales, por lo tanto todo análisis y diseño debe tener en cuenta ' +
        'de una manera integrada la porción antigua y la porción nueva.',
      fuente: 'NSR-10, Título A, A.10.8.1',
    },
    {
      tipo: 'parrafo',
      texto: 'De ahí salen cuatro obligaciones que el propietario nunca presupuesta:',
    },
    {
      tipo: 'lista',
      items: [
        '**Analizar de nuevo la edificación completa**, vieja y nueva juntas, y demostrar que resiste lo que hoy exige el reglamento, en cargas verticales y en fuerzas horizontales.',
        '**Reforzar la parte antigua si no da.** Si al calcular el conjunto los índices se pasan de la unidad, «deben proveerse elementos adicionales». No es opcional y no depende del gusto del diseñador.',
        '**Demostrar los empalmes.** Los encuentros entre elementos nuevos y antiguos tienen que probar, por análisis o por ensayo, que transfieren las fuerzas.',
        '**Meter la cimentación en la cuenta.** El A.10.8.6 obliga a investigarla bajo supervisión de un ingeniero geotecnista, en capacidad portante, en asentamientos y —esto es lo que se olvida— **en vuelco**.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'El vuelco es el que sorprende. Una casa más alta recibe la misma ' +
        'fuerza horizontal con un brazo de palanca mayor, así que la ' +
        'cimentación puede quedarse corta **aunque la carga vertical nueva sea ' +
        'modesta**. Es la razón por la que «la losa ya está y aguanta» no es un ' +
        'argumento: la losa aguanta peso; el vuelco no lo resuelve la losa.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La regla del 10 %, que casi nadie conoce' },
    {
      tipo: 'parrafo',
      texto:
        'Hay una tercera categoría, la de las modificaciones que no son ' +
        'ampliación, y trae el único umbral numérico del capítulo. Vale la pena ' +
        'saberlo antes de tumbar un muro:',
    },
    {
      tipo: 'cita',
      texto:
        'Las modificaciones se permiten en una construcción sin requerir ' +
        'validar la capacidad resultante de la estructura, en la medida que la ' +
        'modificación en sí cumpla con el presente reglamento y la modificación ' +
        'no incremente la solicitación sísmica en cualquier elemento de la ' +
        'estructura existente en más de un 10 % ni reduzca la capacidad ' +
        'estructural de cualquier elemento en más de un 10 %.',
      fuente: 'NSR-10, Título A, A.10.6.3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Traducido: una reforma interior pequeña no obliga a revisar la casa ' +
        'entera. Pasarse de ese diez por ciento, sí. Y quien determina si se ' +
        'pasó no es el maestro de obra.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hay que averiguar de la casa que ya existe' },
    {
      tipo: 'parrafo',
      texto:
        'El A.10.2 lista las investigaciones previas, y conviene leerlas porque ' +
        'explican por qué la evaluación cuesta lo que cuesta: casi todo hay que ' +
        'descubrirlo, no consultarlo.',
    },
    {
      tipo: 'lista',
      items: [
        'Si existen planos de la estructura y de la cimentación originales, **constatar en el sitio que coinciden con lo construido**, con exploraciones en lugares representativos y constancia de su alcance.',
        'Calificar **la calidad del diseño y de la construcción original**, en términos de la mejor tecnología de la época en que se levantó.',
        'Calificar **el estado de conservación** de la estructura.',
        'Buscar **evidencia de fallas locales**: deflexiones excesivas, corrosión de armaduras y otros indicios de comportamiento.',
        'Investigar **si hubo asentamientos** de la cimentación y qué efecto tuvieron.',
        'Investigar **eventos extraordinarios del pasado** —explosión, incendio, sismo, remodelaciones previas, acabados que aumentaron las cargas— que hayan podido afectar la integridad.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Dos de esas calificaciones son **cualitativas y por escrito**: la ' +
        'calidad del diseño y construcción original se califica como buena, ' +
        'regular o mala, y el estado actual de la estructura, como bueno, ' +
        'regular o malo. No son adjetivos sueltos: entran en el cálculo como ' +
        'un coeficiente que reduce la resistencia que se le puede reconocer a ' +
        'lo viejo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y el resultado de todo eso son dos números, que son los que de verdad ' +
        'contestan la pregunta del título. El inverso del índice de ' +
        'sobreesfuerzo general «expresa la vulnerabilidad de la edificación ' +
        'como una fracción de la resistencia que tendría una edificación nueva» ' +
        'construida con el reglamento de hoy. El de flexibilidad hace lo mismo ' +
        'con la rigidez. Menores que uno, la casa aguanta; mayores, no.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El decreto de 2023 que se cita mal' },
    {
      tipo: 'parrafo',
      texto:
        'En agosto de 2023 el Gobierno modificó parcialmente la NSR-10 con el ' +
        '**Decreto 1401 de 2023**, y en septiembre corrigió un yerro suyo con ' +
        'el **Decreto 1580 de 2023**. Lo que entró fue un documento nuevo, la ' +
        'AIS 410-23, sobre evaluación y reducción de la vulnerabilidad sísmica ' +
        'en viviendas de mampostería. Es relevante para este tema porque casi ' +
        'toda la casa colombiana que quiere un segundo piso es exactamente eso: ' +
        'mampostería.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El documento está pensado «para ser usado en viviendas de origen ' +
        'informal […] y de altura no mayor a tres niveles en su totalidad», y ' +
        'trae una tabla de límites que sirve de baño de realidad:',
    },
    {
      tipo: 'tabla',
      cabeceras: [
        'Sistema de muros',
        'Amenaza sísmica alta',
        'Amenaza intermedia',
        'Amenaza baja',
      ],
      filas: [
        ['Mampostería no reforzada', '2 pisos máximo', '2 pisos máximo', '2 pisos máximo'],
        ['Mampostería confinada', '2 pisos máximo', '3 pisos máximo', '3 pisos máximo'],
      ],
      nota:
        'Tabla 1.2-1 del documento AIS 410-23, anexo del Decreto 1401 de 2023. ' +
        'En los tres casos el uso permitido es el residencial, Grupo I, y se ' +
        'admite comercio solo en el piso contra tierra. En amenaza alta, la ' +
        'solución para una vivienda de dos pisos en mampostería no reforzada ' +
        '**debe asegurar el confinamiento de los muros**.',
    },
    {
      tipo: 'nota',
      texto:
        '**Y aquí está el error de lectura que conviene deshacer.** Ese ' +
        'documento sirve para evaluar y reducir la vulnerabilidad de una casa ' +
        'que ya existe. **No es un permiso para levantarle un piso**, y lo dice ' +
        'su propio alcance en una línea: «este documento no aplica para ' +
        'viviendas nuevas». La ampliación en altura sigue gobernada por el ' +
        'A.10.8, con todo lo que exige.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Y la NSR-10 sigue siendo la NSR-10' },
    {
      tipo: 'parrafo',
      texto:
        'Conviene decirlo porque se repite lo contrario. El reglamento vigente ' +
        'es el adoptado por el Decreto 926 de 2010 y modificado por los ' +
        'Decretos 2525 de 2010, 092 de 2011, 340 de 2012, 945 de 2017, 2113 de ' +
        '2019, 1711 de 2021 y 1401 de 2023, con la corrección del 1580 de 2023. ' +
        'La actualización gremial que circula como «la norma nueva» **sigue sin ' +
        'decreto que la adopte**, y hasta que lo tenga no se le puede pedir a ' +
        'una curaduría que la aplique.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La licencia: cuál es, y el requisito que frena todo' },
    {
      tipo: 'parrafo',
      texto:
        'Ampliar exige licencia de construcción, y en una modalidad con nombre ' +
        'propio. La definición importa porque contiene un límite que mucha ' +
        'gente descubre tarde:',
    },
    {
      tipo: 'cita',
      texto:
        'Ampliación. Es la autorización para incrementar el área construida de ' +
        'una edificación existente […] La edificación que incremente el área ' +
        'construida podrá aprobarse adosada o aislada de la construcción ' +
        'existente, pero en todo caso, la sumatoria de ambas debe ' +
        'circunscribirse al potencial de construcción permitido para el predio ' +
        'o predios objeto de la licencia según lo definido en las normas ' +
        'urbanísticas.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.1.7, numeral 2',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es decir: la NSR-10 dice si la casa aguanta y el POT dice si el predio ' +
        'da. Son dos permisos distintos disfrazados de uno, y pueden ' +
        'contestarse al revés — una casa que estructuralmente aguanta el piso, ' +
        'en un predio que ya agotó su índice de construcción. Qué mira el POT ' +
        'está en [qué puedo construir en mi ' +
        'lote](/blog/que-puedo-construir-en-mi-lote).',
    },
    {
      tipo: 'nota',
      texto:
        '**El requisito que frena expedientes enteros.** Si la solicitud se ' +
        'presenta ante una autoridad distinta de la que otorgó la licencia ' +
        'original hay que adjuntar las licencias anteriores con sus planos, y ' +
        '«cuando estas no existan, se deberá gestionar el reconocimiento de la ' +
        'existencia de edificaciones». Traducido: **si la casa se construyó sin ' +
        'licencia, primero va el reconocimiento y después la ampliación.** Ese ' +
        'trámite está contado en [construí sin ' +
        'licencia](/blog/construi-sin-licencia).',
    },
    {
      tipo: 'lista',
      items: [
        '**Vigencia: 24 meses**, prorrogables una sola vez por 12 más. Los 36 meses que se citan por todas partes son de obra nueva; la ampliación no está en ese grupo.',
        '**Planos estructurales firmados y rotulados.** En proyectos de baja y media complejidad basta la copia de los planos estructurales; en media alta y alta complejidad hay que aportar memoria de cálculo, diseño de elementos no estructurales y estudio geotécnico.',
        '**En propiedad horizontal, acta del órgano competente** que autorice las obras, y **un aviso de 30 × 50 cm en la cartelera** del edificio. Cómo se decide eso adentro está en [reformar en propiedad horizontal](/blog/reformar-en-propiedad-horizontal).',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que cuesta el trámite, con la cuenta hecha' },
    {
      tipo: 'parrafo',
      texto:
        'Esta parte sí tiene número, porque el decreto publica la ecuación y ' +
        'los factores. Las expensas de curaduría se liquidan como un cargo fijo ' +
        'más un cargo variable, ambos en UVT, afectados por el estrato, por el ' +
        'municipio y por el área. Para una ampliación de **hasta 100 m²**, el ' +
        'factor de área es un valor publicado —0,45— y la cuenta se cierra sola.',
    },
    {
      tipo: 'dato',
      valor: '17,84 UVT ≈ $934.000',
      etiqueta:
        'Expensas de curaduría por una licencia de ampliación de hasta 100 m² ' +
        'sobre vivienda de estrato 3 en Bogotá o Cali. Calculado con la ' +
        'ecuación del Decreto 1077 y la UVT de 2026, de $52.374',
      fuente:
        'Decreto 1077 de 2015, art. 2.2.6.6.8.3 · Resolución DIAN 000238 del ' +
        '15 de diciembre de 2025',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Estrato de la vivienda', 'Factor i', 'Expensas en UVT', 'Aproximado en 2026'],
      filas: [
        ['1 y 2', '0,5', '8,92', '$467.000'],
        ['3', '1,0', '17,84', '$934.000'],
        ['4', '1,5', '26,76', '$1.402.000'],
        ['5', '2,0', '35,68', '$1.869.000'],
        ['6', '2,5', '44,60', '$2.336.000'],
      ],
      nota:
        'Ampliación de hasta 100 m² en un municipio con factor m de 0,938 ' +
        '—Bogotá y Cali lo tienen—, con cargo fijo de 10,01 UVT y cargo ' +
        'variable de 20,02 UVT. Cifras redondeadas. **Corte: UVT de 2026, ' +
        '$52.374.** Con otra UVT, otras cifras.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos avisos que valen dinero. **El descuento del 30 % no le aplica a ' +
        'la ampliación**: el parágrafo 2 del artículo 2.2.6.6.8.7 lo reserva a ' +
        'restauración, reconstrucción, modificación y reforzamiento ' +
        'estructural. Y la **participación en plusvalía**, que no es exigible ' +
        'en esas mismas cuatro modalidades, **tampoco está excluida para la ' +
        'ampliación** — si la licencia se expide aplicando las normas ' +
        'urbanísticas que la generaron, se causa.',
    },
    {
      tipo: 'nota',
      texto:
        'Y uno que juega a favor: **donde no hay curador urbano, no hay ' +
        'expensas.** El decreto es tajante: «en ningún caso las autoridades ' +
        'municipales o distritales encargadas del estudio, trámite y expedición ' +
        'de las licencias están autorizadas para hacer cobros de expensas». En ' +
        'un municipio pequeño, esta partida no existe. Lo que sí existe en los ' +
        'dos casos es el impuesto de delineación urbana, que es municipal y no ' +
        'tiene tarifa nacional: por eso no lo publico.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que cuesta la obra: por qué aquí tampoco hay cifra' },
    {
      tipo: 'parrafo',
      texto:
        'No voy a dar un valor por metro cuadrado de ampliación, y el motivo es ' +
        'el mismo de siempre: **no existe fuente colombiana publicada con ' +
        'metodología**, y aquí el problema es peor que en obra nueva, porque el ' +
        'renglón que más pesa —cuánto hay que reforzar abajo— es desconocido ' +
        'hasta que alguien evalúa. Por qué las tablas que circulan no sirven ' +
        'está en [cuánto cuesta construir por ' +
        'm²](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
    {
      tipo: 'parrafo',
      texto: 'Lo que sí se puede decir sobre la forma del costo:',
    },
    {
      tipo: 'lista',
      items: [
        '**El piso nuevo es la parte previsible.** Es obra nueva sobre un área conocida, y es la única que un constructor puede cotizar de entrada con cierta seriedad.',
        '**El refuerzo de lo existente es la parte que varía diez veces**, y no se puede cotizar antes de la evaluación. Cotizarlo antes es cotizar un problema que nadie ha definido.',
        '**La cimentación puede ser la sorpresa mayor.** Recalzar cimientos es obra bajo la casa, con la casa encima: es cara por definición y depende del suelo.',
        '**Hay que sumar vivir en obra o no vivir en ella.** Una ampliación en altura desmonta la cubierta existente; el traslado temporal es una partida real y nunca aparece en la cotización.',
        '**Y la preinversión no es opcional.** Levantamiento, evaluación de vulnerabilidad, geotecnia si el diagnóstico la pide, diseño del refuerzo y trámite. Todo eso existe antes del primer bulto de cemento.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Si lo que quiere es acotar el orden de magnitud antes de contratar, la ' +
        'ruta barata es la de siempre: una evaluación primero, y con el ' +
        'diagnóstico en la mano, cotizaciones que por fin comparan lo mismo. Es ' +
        'el mismo mecanismo que hace que los presupuestos se desborden cuando ' +
        'se salta ese paso, contado en [por qué la obra se sale del ' +
        'presupuesto](/blog/por-que-la-obra-se-sale-del-presupuesto).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El orden que funciona' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Verifique primero el potencial de construcción del predio.** Si el POT no da, la conversación estructural sobra. Es una consulta de norma urbanística, y es rápida.',
        '**Reúna lo que exista de la casa**: licencia original, planos arquitectónicos y estructurales, escritura. Si no hay licencia, el reconocimiento va antes que todo lo demás.',
        '**Levantamiento de lo construido**, con medidas reales y no las de la escritura.',
        '**Evaluación de vulnerabilidad**, firmada por ingeniero estructural. Aquí aparecen los dos índices y aquí se sabe cuánto hay que reforzar.',
        '**Estudio geotécnico**, que en ampliación en altura es la regla y no la excepción, porque la cimentación entra obligatoriamente en el análisis.',
        '**Diseño integrado**, arquitectónico y estructural a la vez. Un segundo piso dibujado sin el estructural encima se rediseña completo.',
        '**Licencia en modalidad de ampliación**, y obra con supervisión de quien diseñó.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La pregunta del título tiene, entonces, una respuesta honesta en dos ' +
        'partes. El trámite cuesta lo que dice la tabla de arriba y se puede ' +
        'saber hoy. **La obra cuesta lo que diga la evaluación**, y quien le ' +
        'dé esa cifra antes de evaluar no le está cotizando su casa: le está ' +
        'cotizando un promedio.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'estructura', 'costos', 'licencia'],
  fuentes: [
    {
      titulo:
        'NSR-10, Título A, Capítulo A.10: evaluación e intervención de edificaciones construidas antes de la vigencia de la presente versión del Reglamento. Anexo del Decreto 926 de 2010',
      editor:
        'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.scg.org.co/Titulo-A-NSR-10-Decreto%20Final-2010-01-13.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'Decreto 926 de 2010, que adopta el Reglamento NSR-10',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39255',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'Decreto 1401 de 2023, que modifica parcialmente la NSR-10 e incorpora el documento AIS 410-23 sobre evaluación y reducción de la vulnerabilidad sísmica en viviendas de mampostería',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://minvivienda.gov.co/normativa/decreto-1401-2023',
      fecha: '2023-08-25',
    },
    {
      titulo: 'Decreto 1580 de 2023, que corrige un yerro del Decreto 1401 de 2023',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/normativa/decreto-1580-2023',
      fecha: '2023-09-25',
    },
    {
      titulo:
        'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo:
        'Decreto 1077 de 2015: modalidades de la licencia de construcción (art. 2.2.6.1.1.7), documentos adicionales (art. 2.2.6.1.2.1.11), vigencia (art. 2.2.6.1.2.4.1) y expensas de curaduría (arts. 2.2.6.6.8.1 a 2.2.6.6.8.7)',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo:
        'Resolución 000238 del 15 de diciembre de 2025: valor de la UVT para el año 2026',
      editor: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0238_2025.htm',
      fecha: '2025-12-15',
    },
  ],
}
