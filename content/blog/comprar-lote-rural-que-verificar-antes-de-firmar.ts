import type { Post } from '@/lib/types'

/**
 * El artículo que faltaba entre «Comprar lote: la verificación de doce puntos»
 * —que es urbano— y los dos de suelo rural, que son de construcción y de
 * trámite. Ninguno de los tres responde la pregunta del comprador rural: no
 * *qué puedo construir*, sino *puede este señor venderme esto*.
 *
 * Todo lo que ya estaba publicado y verificado se enlaza y no se repite: la
 * unidad agrícola familiar con la nulidad absoluta del artículo 44, las
 * categorías del suelo rural, las densidades de la corporación y los trámites
 * ambientales que alargan la licencia.
 *
 * Lo que este añade, y que no estaba en ninguna parte del repositorio:
 *
 * 1. **La falsa tradición explicada.** Se nombraba de pasada en «Qué puedo
 *    construir en mi lote» y nunca se decía qué es. Aquí va con el articulado:
 *    el código 06 del parágrafo 3 del artículo 8 de la Ley 1579, la enajenación
 *    de cosa ajena y la transferencia de derecho incompleto o sin antecedente
 *    propio, y el principio de tracto sucesivo que la convierte en excepción.
 * 2. **Cuántos años de tradición hay que estudiar, y por qué ese número.** No
 *    es costumbre notarial: sale del artículo 48 de la Ley 160, que remite al
 *    término de la prescripción extraordinaria, hoy de diez años por el
 *    artículo 6 de la Ley 791 de 2002.
 * 3. **Las excepciones del artículo 45 a la unidad agrícola familiar.** El
 *    artículo 44 empieza con «Salvo las excepciones que se señalan en el
 *    artículo siguiente», y esa frase se cita mutilada en todas partes —incluso
 *    en la cita que este mismo blog publicó en 2024, que arranca después—. Aquí
 *    van las cuatro excepciones y la condición de que quede constancia en la
 *    escritura.
 * 4. **La servidumbre de tránsito con sus cuatro artículos.** Son 905 a 908 del
 *    Código Civil, no un rango vago. Y dos hallazgos: la palabra «toda» del
 *    artículo 905 está tachada por inexequible —así que no hay que estar
 *    absolutamente encerrado para tener derecho—, y el artículo 908 concede la
 *    servidumbre **sin indemnización** cuando la falta de acceso nació de haber
 *    partido un predio, que es justo el caso del lote rural recién segregado.
 * 5. **Las dos obligaciones de cobertura forestal**, del Decreto 1076: 10 % en
 *    predios de más de 50 hectáreas y **20 % si el predio vino de un baldío
 *    adjudicado**. Es una carga que viaja con la tierra y no la menciona nadie.
 *
 * Lo que se decidió no publicar:
 *
 * - **Ninguna extensión de unidad agrícola familiar.** Es municipal y por zona.
 * - **Ninguna tarifa.** Ni de certificado, ni de escrituración, ni de estudio
 *   de títulos. El artículo entero se sostiene sin una cifra en pesos.
 * - **Ningún nombre de entidad que no esté en el texto de la norma leída.** La
 *   Ley 160 todavía dice «INCORA»; se cita así y se explica, en vez de
 *   atribuirle competencias a una entidad cuyo decreto de creación no se leyó.
 *
 * Fechada en noviembre de 2025: la fuente más reciente que toca es la
 * modificación del artículo 10 de la Ley 388 por la Ley 2294 de 2023.
 */
export const post: Post = {
  slug: 'comprar-lote-rural-que-verificar-antes-de-firmar',
  titulo: 'Comprar un lote rural: qué verificar antes de firmar',
  pilar: 'casa-campestre',
  fecha: '2025-11-25',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'En la ciudad la pregunta es qué se puede construir. En el campo, antes de ' +
    'esa, hay otra: si quien le vende puede venderle. El título, la falsa ' +
    'tradición, el acceso y los baldíos, con el articulado en la mano.',
  metaDescripcion:
    'Qué verificar antes de comprar un lote rural en Colombia: tradición, ' +
    'falsa tradición, servidumbre de acceso, unidad agrícola familiar y baldíos.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Un lote rural no es un lote urbano con más metros. Lo que cambia no ' +
        'es el tamaño: es la naturaleza del riesgo. En la ciudad casi todos los ' +
        'problemas de una compra son sobre **qué se puede construir**. En el ' +
        'campo hay una pregunta anterior, y es la que arruina compras: **si ' +
        'quien le vende puede venderle.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que se puede construir en suelo rural ya está escrito, y no lo ' +
        'repito: está en [qué puedo construir en suelo ' +
        'rural](/blog/que-puedo-construir-en-suelo-rural) y en [licencia de ' +
        'construcción en suelo ' +
        'rural](/blog/licencia-de-construccion-en-suelo-rural). La lista ' +
        'general de verificación de cualquier lote está en [comprar lote: la ' +
        'verificación de doce ' +
        'puntos](/blog/comprar-lote-verificacion-antes-de-firmar).',
    },
    {
      tipo: 'nota',
      texto:
        'Este artículo es lo que le falta a esos tres: lo específico de ' +
        '**comprar** en el campo. El título y la tradición, el acceso, la ' +
        'unidad agrícola familiar vista desde el lado del comprador, y los ' +
        'baldíos. Todo con el articulado leído, no con lo que se repite.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Primero el título. Todo lo demás viene después' },
    {
      tipo: 'parrafo',
      texto:
        'El registro inmobiliario colombiano se organiza sobre un folio por ' +
        'predio, y ese folio es el que hay que leer. El estatuto de registro lo ' +
        'dice como principio:',
    },
    {
      tipo: 'cita',
      texto:
        'A cada unidad inmobiliaria se le asignará una matrícula única, en la ' +
        'cual se consignará cronológicamente toda la historia jurídica del ' +
        'respectivo bien raíz.',
      fuente: 'Ley 1579 de 2012, artículo 3, principio de especialidad',
    },
    {
      tipo: 'parrafo',
      texto:
        'Toda la historia jurídica. Por eso el documento sirve: no muestra ' +
        'quién es el dueño hoy, muestra **cómo llegó a serlo**. Y esa cadena es ' +
        'la que se compra.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ahora, el matiz que casi nadie hace y que conviene tener claro antes ' +
        'de confiarse:',
    },
    {
      tipo: 'cita',
      texto:
        'Los asientos registrales gozan de presunción de veracidad y exactitud, ' +
        'mientras no se demuestre lo contrario.',
      fuente: 'Ley 1579 de 2012, artículo 3, principio de legitimación',
    },
    {
      tipo: 'nota',
      texto:
        '**Presunción, no certeza.** El folio se presume cierto hasta que ' +
        'alguien pruebe que no lo es, y en el campo esa prueba aparece con más ' +
        'frecuencia que en la ciudad. Un certificado limpio no es una garantía: ' +
        'es un punto de partida bueno.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Cuántos años hacia atrás hay que estudiar' },
    {
      tipo: 'parrafo',
      texto:
        'Se oye «hay que mirar veinte años» y también «con diez basta», casi ' +
        'siempre sin explicar de dónde sale el número. Sale de una norma ' +
        'concreta, y del lugar menos evidente: la ley agraria.',
    },
    {
      tipo: 'cita',
      texto:
        'Para acreditar propiedad privada sobre la respectiva extensión ' +
        'territorial, se requiere como prueba el título originario expedido por ' +
        'el Estado que no haya perdido su eficacia legal, o los títulos ' +
        'debidamente inscritos otorgados con anterioridad a la vigencia de esta ' +
        'Ley, en que consten tradiciones de dominio por un lapso no menor del ' +
        'término que señalan las leyes para la prescripción extraordinaria.',
      fuente: 'Ley 160 de 1994, artículo 48, numeral 1',
    },
    {
      tipo: 'parrafo',
      texto:
        'El plazo de la prescripción extraordinaria era de veinte años y **hoy ' +
        'es de diez**: lo redujo la Ley 791 de 2002, cuyo artículo 6 dejó el ' +
        'artículo 2532 del Código Civil en «diez (10) años contra toda ' +
        'persona». La prescripción ordinaria, en la misma ley, quedó en **cinco ' +
        'años para bienes raíces**.',
    },
    {
      tipo: 'nota',
      texto:
        'Por eso el estudio de títulos mira diez años y no una cifra ' +
        'caprichosa: **es el tiempo en que alguien podría haber adquirido ese ' +
        'predio por prescripción sin figurar en el folio.** Si en esa ventana ' +
        'hay un salto sin explicar, ahí está el problema.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'La falsa tradición: qué es de verdad' },
    {
      tipo: 'parrafo',
      texto:
        'Es la anotación que más gente ha visto en un certificado y menos gente ' +
        'sabe leer. No es un error del registrador ni un defecto de forma. Es ' +
        'una **categoría** del registro, con su propio código, y la ley la ' +
        'define por ejemplos:',
    },
    {
      tipo: 'cita',
      texto:
        '06 Falsa Tradición: para la inscripción de títulos que conlleven la ' +
        'llamada falsa tradición, tales como la enajenación de cosa ajena o la ' +
        'transferencia de derecho incompleto o sin antecedente propio.',
      fuente: 'Ley 1579 de 2012, artículo 8, parágrafo 3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo despacio, porque las dos hipótesis son distintas y las dos son ' +
        'graves. **Enajenación de cosa ajena**: alguien vendió lo que no era ' +
        'suyo. **Transferencia de derecho incompleto o sin antecedente ' +
        'propio**: alguien transfirió algo que tenía a medias, o que no se sabe ' +
        'de dónde le vino.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y por qué importa tanto se entiende con el principio que la falsa ' +
        'tradición rompe:',
    },
    {
      tipo: 'cita',
      texto:
        'Solo el titular inscrito tendrá la facultad de enajenar el dominio u ' +
        'otro derecho real sobre un inmueble salvo lo dispuesto para la llamada ' +
        'falsa tradición.',
      fuente: 'Ley 1579 de 2012, artículo 3, principio de tracto sucesivo',
    },
    {
      tipo: 'nota',
      texto:
        'Es decir: la falsa tradición es **la excepción declarada al principio ' +
        'que sostiene todo el sistema**. Comprar sobre un folio con esa ' +
        'anotación no es comprar el dominio del predio; es comprar la posición ' +
        'de quien la tenía. Puede ser un negocio legítimo y hay quien lo hace a ' +
        'conciencia. Lo que no puede es hacerse sin saberlo, ni pagarse como si ' +
        'fuera dominio pleno.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La consecuencia práctica llega después y llega siempre: un predio con ' +
        'falsa tradición es difícil de hipotecar, difícil de revender y, cuando ' +
        'la entidad que licencia pide título, difícil de sostener.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El acceso: lo que más pleitos produce' },
    {
      tipo: 'parrafo',
      texto:
        'Es el punto que menos se verifica y el que más caro sale. Un lote ' +
        'rural sin acceso propio no es un lote barato: es un lote con un ' +
        'litigio adentro. El Código Civil lo resuelve en cuatro artículos, del ' +
        '905 al 908, y conviene conocerlos los cuatro.',
    },
    {
      tipo: 'cita',
      texto:
        'Si un predio se halla destituido de comunicación con el camino ' +
        'público, por la interposición de otros predios, el dueño del primero ' +
        'tendrá derecho para imponer a los otros la servidumbre de tránsito en ' +
        'cuanto fuere indispensable para el uso y beneficio de su predio, ' +
        'pagando el valor del terreno necesario para la servidumbre, y ' +
        'resarciendo todo otro perjuicio.',
      fuente: 'Código Civil, artículo 905',
    },
    {
      tipo: 'nota',
      texto:
        'Un detalle que cambia el alcance del derecho y que no verá citado casi ' +
        'nunca: el texto original decía «destituido de **toda** comunicación», ' +
        'y esa palabra aparece **tachada por inexequible** en el Código Civil ' +
        'vigente. No hace falta estar absolutamente encerrado para tener ' +
        'derecho a exigir el paso.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los otros tres artículos completan el cuadro. Si las partes no se ' +
        'ponen de acuerdo, **peritos** fijan tanto la indemnización como el modo ' +
        'de ejercer la servidumbre. Y si con el tiempo el paso deja de ser ' +
        'indispensable —porque el predio consiguió otro acceso—, el dueño del ' +
        'predio sirviente puede pedir que lo exoneren, devolviendo lo que le ' +
        'pagaron por el terreno.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y queda el artículo 908, que es el que de verdad aplica al lote rural ' +
        'recién segregado y casi nadie invoca:',
    },
    {
      tipo: 'cita',
      texto:
        'Si se vende o permuta alguna parte de un predio, o si es adjudicada a ' +
        'cualquiera de los que lo poseían pro indiviso, y en consecuencia esta ' +
        'parte viene a quedar separada del camino, se entenderá concedida a ' +
        'favor de ella una servidumbre de tránsito, sin indemnización alguna.',
      fuente: 'Código Civil, artículo 908',
    },
    {
      tipo: 'nota',
      texto:
        '**Sin indemnización alguna.** Si el lote que le ofrecen quedó sin ' +
        'salida porque lo partieron de una finca mayor, la servidumbre se ' +
        'entiende concedida por el solo hecho de la partición, y gratis. Es ' +
        'exactamente el caso de la mayoría de las parcelaciones informales, y ' +
        'es un argumento que vale la pena tener antes de negociar, no después.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dicho eso, «tener derecho» y «tener el paso» no son lo mismo. Un ' +
        'derecho que hay que hacer valer ante un juez es un pleito con fecha ' +
        'incierta. **Lo que se compra tranquilo es una servidumbre constituida ' +
        'por escritura pública e inscrita en el folio**, no un acuerdo de ' +
        'palabra con el vecino ni un camino que lleva veinte años abierto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La unidad agrícola familiar, y las excepciones que nadie lee' },
    {
      tipo: 'parrafo',
      texto:
        'Que un predio rural no se puede fraccionar por debajo de la unidad ' +
        'agrícola familiar, so pena de nulidad absoluta, ya está explicado en ' +
        '[qué puedo construir en suelo ' +
        'rural](/blog/que-puedo-construir-en-suelo-rural). No lo repito.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí falta decir, y es justo lo que le importa a un comprador, es ' +
        'cómo empieza ese artículo 44. Empieza así: **«Salvo las excepciones ' +
        'que se señalan en el artículo siguiente…»**. La prohibición tiene ' +
        'excepciones, están en el artículo 45, y son estas cuatro:',
    },
    {
      tipo: 'lista',
      items: [
        'Las **donaciones** que el dueño de un predio mayor haga con destino a habitaciones campesinas y pequeñas explotaciones anexas.',
        'Los actos o contratos por los que se constituyen propiedades menores **para un fin principal distinto a la explotación agrícola**. Es la excepción que más se invoca y la que más se invoca mal.',
        'Los que constituyen propiedades que, por sus condiciones especiales, quepa considerar como unidades agrícolas familiares **a pesar de su reducida extensión**.',
        'Las sentencias que declaren prescripción adquisitiva por una posesión **iniciada antes del 29 de diciembre de 1961**, y las que reconozcan otro derecho nacido antes de esa fecha.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La condición que convierte la excepción en algo utilizable, y que ' +
        'decide pleitos: la ley dice que la existencia de la circunstancia ' +
        '**no podrá impugnarse si en la respectiva escritura pública se dejó ' +
        'constancia de ella**. Si le venden invocando una excepción y la ' +
        'escritura no la menciona, la excepción no lo protege. Pregunte por esa ' +
        'constancia antes de firmar, y léala.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Baldíos: la parte de la historia que no está en el folio' },
    {
      tipo: 'parrafo',
      texto:
        'Un baldío es tierra de la Nación. Sale del dominio del Estado cuando ' +
        'el Estado la adjudica, y no antes. Lo que hace difícil el asunto es ' +
        'que un predio que lleva décadas ocupado, cercado y hasta vendido ' +
        'varias veces puede seguir siendo baldío si nunca hubo adjudicación.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Por eso importa el artículo 48 que ya citamos: la propiedad privada ' +
        'rural se acredita con **título originario del Estado**, o con títulos ' +
        'inscritos anteriores a 1994 que muestren tradiciones por al menos el ' +
        'plazo de la prescripción extraordinaria. Un folio que empieza en el ' +
        'aire, sin antecedente, es una señal de alarma, no una curiosidad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y cuando sí hubo adjudicación, el predio queda con un régimen especial ' +
        'que **viaja con la tierra**:',
    },
    {
      tipo: 'lista',
      items: [
        '**Quince años de restricción.** Hasta cumplir quince años desde la primera adjudicación, la parcela solo puede transferirse a campesinos de escasos recursos sin tierra o a minifundistas, y con autorización expresa. Los actos que la violan son **absolutamente nulos**, y notarios y registradores tienen prohibido otorgar e inscribir la escritura sin que se protocolice esa autorización.',
        '**No se acumula por encima de la unidad agrícola familiar.** Nadie puede adquirir tierra que vino de baldíos si con eso supera los límites fijados para la unidad agrícola familiar del municipio o región. También son nulos los aportes a sociedades con los que se consolide esa acumulación.',
        '**No se fracciona por debajo de la unidad agrícola familiar**, salvo las excepciones de la propia ley.',
        '**La adjudicación puede caerse después.** La acción de nulidad contra la resolución de adjudicación se puede intentar dentro de los dos años siguientes, y además la entidad puede revocarla directamente **en cualquier tiempo**, sin necesidad del consentimiento del titular.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La regla que le sirve de filtro barato, y que está en el mismo ' +
        'artículo 72: **los registradores se abstienen de registrar** ' +
        'transferencias de inmuebles cuyo dominio inicial venga de un baldío si ' +
        'no se protocoliza la autorización de la autoridad de tierras cuando ' +
        'con el acto se fracciona el predio. Si la escritura no se puede ' +
        'registrar, usted no compró nada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una aclaración sobre los nombres, para que no lo confunda al leer la ' +
        'norma: la Ley 160 dice **INCORA** en todas partes, que era la entidad ' +
        'que existía en 1994. Esa competencia ya no está ahí, sino en la ' +
        'autoridad nacional de tierras. La regla sigue siendo la misma; el ' +
        'destinatario de la solicitud, no.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo ambiental, que no aparece en la escritura' },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de estas afectaciones consta en el certificado de tradición. ' +
        'Todas pueden dejar sin construir una parte del predio, o el predio ' +
        'entero, y todas se pueden consultar antes de firmar.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Afectación', 'Qué implica', 'Dónde se consulta'],
      filas: [
        ['**Ronda hídrica**', 'Faja no inferior a 30 metros a cada lado de ríos, quebradas y arroyos, sean permanentes o no, y alrededor de lagos y depósitos de agua', 'Corporación autónoma regional'],
        ['**Nacimiento de agua**', '100 metros a la redonda, medidos desde la periferia del nacimiento', 'Corporación autónoma regional'],
        ['**Pendiente fuerte**', 'Los terrenos con pendiente superior al 100 % son área forestal protectora', 'Levantamiento topográfico y corporación'],
        ['**Reserva forestal de la Ley 2ª de 1959**', 'Siete zonas de reserva forestal nacional. Construir exige que el predio haya sido **sustraído** de la reserva', 'Autoridad ambiental nacional'],
        ['**Área protegida**', 'El régimen de usos lo fija el plan de manejo del área, no el POT', 'Registro único nacional de áreas protegidas'],
      ],
      nota:
        'Las tres primeras salen del artículo 2.2.1.1.18.2 del Decreto 1076 de ' +
        '2015, que compila el artículo 3 del Decreto 1449 de 1977 y define esas ' +
        'franjas como **áreas forestales protectoras** que el propietario está ' +
        'obligado a mantener en cobertura boscosa.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos obligaciones del mismo decreto que no menciona casi nadie y que ' +
        'pesan sobre fincas grandes: **los predios de más de 50 hectáreas deben ' +
        'mantener al menos el 10 % de su extensión en cobertura forestal**, y ' +
        'si el terreno vino de un **baldío adjudicado** de más de 50 hectáreas, ' +
        'la proporción sube al **20 %**. Es una carga que se hereda con la ' +
        'tierra, no un compromiso del vendedor.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Sobre las reservas de la Ley 2ª de 1959 conviene entender el mecanismo, ' +
        'porque se suele creer que basta con que el POT permita el uso. No ' +
        'basta. La ley creó siete zonas de reserva forestal —Pacífico, Central, ' +
        'Río Magdalena, Sierra Nevada de Santa Marta, Serranía de los ' +
        'Motilones, Cocuy y Amazonía— y previó desde su artículo 3 que hubiera ' +
        'que **sustraer** los sectores que se destinen a otra actividad. ' +
        'Mientras no haya sustracción, el predio sigue en reserva.',
    },
    {
      tipo: 'nota',
      texto:
        'Y la razón por la que lo ambiental gana cuando choca con el POT está ' +
        'en la ley de ordenamiento: las determinantes ambientales **constituyen ' +
        'normas de superior jerarquía**, y desde la reforma de 2023 el ' +
        'artículo 10 de la Ley 388 las ordena por prevalencia, con las ' +
        'ambientales en el **nivel 1** y con mención expresa de las reservas ' +
        'forestales nacionales. Un uso permitido por el POT no derrota una ' +
        'restricción ambiental.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'A quién se le pregunta cada cosa' },
    {
      tipo: 'parrafo',
      texto:
        'La mitad del trabajo es saber a qué puerta tocar. Preguntarle a la ' +
        'entidad equivocada no da una respuesta equivocada: da semanas ' +
        'perdidas.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['A quién', 'Qué le da', 'Qué NO le da'],
      filas: [
        ['**Oficina de Registro de Instrumentos Públicos**', 'El certificado sobre la situación jurídica del inmueble: tradición, gravámenes, limitaciones, medidas cautelares, tenencia y falsa tradición', 'Nada ambiental, nada de norma urbana y nada sobre baldíos no adjudicados'],
        ['**Autoridad catastral**', 'Área, linderos y ficha catastral del predio', 'No define límites jurídicos, y su área rara vez coincide con la de la escritura'],
        ['**Autoridad nacional de tierras**', 'La unidad agrícola familiar de la zona, y si el predio viene de un baldío adjudicado', 'No dice qué se puede construir'],
        ['**Corporación autónoma regional**', 'Ronda hídrica, áreas protegidas, densidades en suburbano, y qué exige para agua y vertimientos', 'No expide la licencia'],
        ['**Secretaría de Planeación del municipio**', 'La clasificación del suelo, el uso y el concepto de norma urbanística', 'No resuelve el título ni las afectaciones ambientales'],
      ],
      nota:
        'Ninguna de estas consultas exige haber comprado. Todas se pueden ' +
        'hacer, y se deben hacer, mientras todavía se puede no comprar.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué exigir antes de firmar la promesa' },
    {
      tipo: 'parrafo',
      texto:
        'Cinco cosas concretas. No son garantías del vendedor: son documentos ' +
        'que existen o no existen.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Certificado sobre la situación jurídica del inmueble reciente**, y el estudio de la cadena de al menos diez años hacia atrás. Si aparece falsa tradición, se detiene todo hasta entenderla.',
        '**La escritura de la servidumbre de acceso, inscrita**, si el ingreso es por predio ajeno. Un camino usado durante años no es un título.',
        '**La constancia en escritura de la excepción invocada**, si el predio está por debajo de la unidad agrícola familiar de la zona.',
        '**La autorización de la autoridad de tierras protocolizada**, si el dominio inicial vino de un baldío adjudicado y hubo fraccionamiento.',
        '**El pronunciamiento escrito de la corporación** sobre ronda hídrica, área protegida y reserva forestal sobre ese predio, nombrándolo por su matrícula.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y una condición resolutoria en la promesa: que la compra quede sujeta ' +
        'a que esos documentos aparezcan. Es la única cláusula que devuelve el ' +
        'dinero sin pleito cuando algo de esto sale mal, y cuesta lo que cuesta ' +
        'escribirla.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El orden, que no es el que usa casi nadie' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El folio.** Antes de ir a ver el lote. Es barato y descarta la mitad de los problemas.',
        '**El acceso.** Cómo se entra, por dónde, y si eso está escrito e inscrito.',
        '**El origen.** Título originario del Estado o cadena completa. Si el folio nace de la nada, pare.',
        '**La unidad agrícola familiar**, si hubo o va a haber división.',
        '**Lo ambiental**, por escrito y de la corporación.',
        '**Y solo entonces, la norma urbana**: qué permite el POT en ese predio.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Casi todo el mundo lo hace al revés: empieza por lo que quiere ' +
        'construir y termina por el título, cuando ya firmó. Los seis pasos se ' +
        'pueden dar en unas semanas, y **ninguno de ellos se responde mirando ' +
        'el lote**, que sigue siendo lo único que hace la mayoría antes de ' +
        'firmar.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'suelo-rural', 'norma-urbana', 'contrato'],
  fuentes: [
    {
      titulo: 'Ley 1579 de 2012, estatuto de registro de instrumentos públicos, artículos 3, 8 y 9',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1579_2012.html',
      fecha: '2012-10-01',
    },
    {
      titulo: 'Ley 160 de 1994, sistema nacional de reforma agraria, artículos 38, 39, 44, 45, 48 y 72',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0160_1994.html',
      fecha: '1994-08-03',
    },
    {
      titulo: 'Ley 791 de 2002, por medio de la cual se reducen los términos de prescripción en materia civil',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0791_2002.html',
      fecha: '2002-12-27',
    },
    {
      titulo: 'Código Civil colombiano, artículos 905 a 908: servidumbre de tránsito',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_civil_pr027.html',
      fecha: null,
    },
    {
      titulo: 'Decreto 1076 de 2015, único reglamentario del sector ambiente, artículos 2.2.1.1.18.2 a 2.2.1.1.18.4',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 2 de 1959, sobre economía forestal de la Nación y conservación de recursos naturales renovables',
      editor: 'Congreso de la República de Colombia',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9021',
      fecha: '1959-12-16',
    },
    {
      titulo: 'Ley 388 de 1997, artículo 10: determinantes de ordenamiento territorial y su orden de prevalencia',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0388_1997.html',
      fecha: '1997-07-18',
    },
    {
      titulo: 'Ley 2294 de 2023, artículo 32: modifica el artículo 10 de la Ley 388 de 1997',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2294_2023.html',
      fecha: '2023-05-19',
    },
  ],
}
