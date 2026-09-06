import type { Post } from '@/lib/types'

/**
 * La pieza de ciudad que faltaba. Diez de los veinticuatro proyectos del
 * portafolio están en Bogotá, es el mercado principal del estudio, y hasta hoy
 * no había una sola página que lo dijera.
 *
 * La investigación se hizo contra fuente primaria —Régimen Legal de Bogotá,
 * Gestor Normativo, Ventanilla Única de la Construcción— y salió con una
 * corrección de fondo que sostiene el artículo entero: **el Consejo de Estado
 * nunca conoció de la demanda contra el POT de Bogotá**. Fue un juzgado
 * administrativo del circuito, la suspensión duró dos meses y medio de 2022, y
 * el Tribunal Administrativo de Cundinamarca la revocó. Casi toda la prensa lo
 * cuenta mal.
 *
 * Y una segunda, más pequeña pero más útil: **la «consulta preliminar» no
 * existe** como figura normativa. Cero coincidencias en el Decreto 1077, en la
 * Ley 388, en el Decreto 1203 de 2017, en el 1783 de 2021 y en el 1107 de
 * 2026. Es la palabra que todo el mundo usa mal.
 *
 * Dos cosas que este artículo NO hace, a conciencia:
 *
 * - **No nombra curadores.** Solo dos de los cinco despachos tienen acto de
 *   designación publicado y vigente en el Régimen Legal. Publicar los otros
 *   tres desde el sitio web de la propia curaduría sería repetir de oído.
 * - **No repite la fórmula de expensas.** Ya está la calculadora, y repetirla
 *   aquí es crear una segunda copia que se desactualiza sola.
 */
export const post: Post = {
  slug: 'licencia-de-construccion-en-bogota',
  titulo: 'La licencia de construcción en Bogotá, paso a paso',
  pilar: 'tramites',
  fecha: '2026-02-25',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Qué POT rige hoy y cuál es exactamente su situación judicial —que no es ' +
    'la que cuenta la prensa—, cuántas curadurías hay, cuándo empiezan a ' +
    'correr los plazos de verdad, y los cuatro trámites que le van a pedir al ' +
    'tiempo y no son la licencia.',
  metaDescripcion:
    'Qué POT rige hoy en Bogotá, cuántas curadurías hay, qué plazos corren de ' +
    'verdad y qué trámites no son la licencia aunque lo parezcan.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Sacar una licencia de construcción en Bogotá no es difícil por la ' +
        'norma. Es difícil por tres cosas que casi nadie le cuenta antes de ' +
        'empezar: que el plan de ordenamiento tiene una historia judicial que ' +
        'todavía no ha terminado, que el reloj de los plazos no arranca el día ' +
        'que usted radica, y que hay por lo menos diez autorizaciones ' +
        'distintas que la gente confunde con la licencia y que las expide otra ' +
        'entidad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esto es lo que dicen los textos oficiales, leídos uno por uno. ' +
        'Incluye una corrección de fondo sobre el POT que circula mal en toda ' +
        'la prensa, y una palabra que casi todo el mundo usa y no existe en ' +
        'ninguna norma.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'El POT que rige, y la corrección que hay que hacer de entrada',
    },
    {
      tipo: 'parrafo',
      texto:
        'El instrumento vigente es el **Decreto Distrital 555 de 2021**, que ' +
        'adoptó la revisión general del Plan de Ordenamiento Territorial. Se ' +
        'expidió el 29 de diciembre de 2021 y rige desde el día siguiente.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Se adoptó por decreto y no por acuerdo del Concejo, y ese es el ' +
        'origen del pleito. El proyecto se radicó ante el Concejo Distrital el ' +
        '10 de septiembre de 2021; el artículo 12 de la Ley 810 de 2003 ' +
        'permite al alcalde adoptarlo por decreto si el concejo no lo aprueba ' +
        'en noventa días calendario, y la Alcaldía sostuvo que ese plazo se ' +
        'había cumplido. La demanda alegaba que las suspensiones por ' +
        'impedimentos y recusaciones descontaban del término.',
    },
    {
      tipo: 'nota',
      texto:
        'Aquí va la corrección, y es de fondo: **el Consejo de Estado nunca ' +
        'conoció de este caso.** Se repite constantemente y es falso. Fue una ' +
        'acción de **nulidad simple** del artículo 137 del CPACA, tramitada en ' +
        'primera instancia por un juzgado administrativo del circuito de ' +
        'Bogotá y en segunda por el Tribunal Administrativo de Cundinamarca. ' +
        'Si alguien le cita al Consejo de Estado sobre el POT de Bogotá, está ' +
        'repitiendo algo que no leyó.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué pasó', 'Cuándo', 'Quién'],
      filas: [
        [
          'Se expide el Decreto Distrital 555, revisión general del POT',
          '29 de diciembre de 2021',
          'Alcaldesa Mayor de Bogotá',
        ],
        [
          '**Se decreta la suspensión provisional** de sus efectos',
          '14 de junio de 2022',
          'Juzgado Quinto Administrativo Oral del Circuito de Bogotá, Sección Primera',
        ],
        [
          '**Se revoca ese auto y se deniega la medida cautelar**',
          '22 de agosto de 2022',
          'Tribunal Administrativo de Cundinamarca, Sección Primera, Subsección A',
        ],
      ],
      nota:
        'Radicado 11001333400520220006600 en primera instancia. Las dos ' +
        'providencias dicen expresamente que la decisión no implica ' +
        'prejuzgamiento.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que interesa de esa historia no es el pleito sino sus fechas, ' +
        'porque durante dos meses y medio Bogotá se licenció con otra norma. ' +
        'El pronunciamiento oficial es taxativo:',
    },
    {
      tipo: 'cita',
      texto:
        'El Decreto Distrital 555 de 2021 está vigente a partir del 30 de ' +
        'diciembre de 2021; sin embargo, sus efectos se suspendieron entre el ' +
        '16 de junio de 2022 hasta el 31 de agosto siguiente, periodo en el ' +
        'que nuevamente rigió el Decreto Distrital 190 de 2004.',
      fuente:
        'Concepto 2202413038 de 2024, Secretaría Jurídica Distrital de Bogotá',
    },
    {
      tipo: 'dato',
      valor: '16 jun – 31 ago 2022',
      etiqueta:
        'La ventana en que el POT estuvo suspendido y revivió el Decreto 190 de 2004',
      fuente:
        'Concepto 2202413038 de la Secretaría Jurídica Distrital, 13 de septiembre de 2024',
    },
    {
      tipo: 'parrafo',
      texto:
        'La mecánica explica por qué fue tan rápido y tan real. La medida ' +
        'cautelar no toca la vigencia del decreto, solo suspende sus efectos, ' +
        'y corre desde el día siguiente a la notificación por estado. La ' +
        'apelación contra un auto que decreta una cautelar se concede en ' +
        '**efecto devolutivo**, así que la suspensión se cumplió sin esperar a ' +
        'que quedara en firme. Los efectos se restablecieron con la ejecutoria ' +
        'del auto que la revocó.',
    },
    {
      tipo: 'parrafo',
      texto:
        'No fue teórico. La Secretaría Distrital de Planeación circuló ' +
        'instrucciones el 21 de junio y otras el 2 de septiembre, y el ' +
        'Instituto Distrital de Patrimonio Cultural llegó a **suspender ' +
        'términos** de sus actuaciones administrativas mientras duró la ' +
        'medida.',
    },
    {
      tipo: 'nota',
      texto:
        'Y aquí la declaración honesta, que es la parte más útil: **no consta ' +
        'sentencia de fondo publicada.** El registro normativo del Distrito no ' +
        'recoge ninguna providencia posterior al auto de agosto de 2022, y no ' +
        'pude consultar el estado procesal del expediente. Lo que se puede ' +
        'afirmar es esto y nada más: la suspensión duró dos meses y medio, fue ' +
        'revocada, el POT rige hoy, y **el proceso de nulidad sigue su curso.** ' +
        'Quien le diga que el asunto está cerrado, o que el POT está anulado, ' +
        'está afirmando algo que no puede sostener.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Que el POT esté vigente hoy no es una lectura nuestra. El acto ' +
        'distrital más reciente que lo desarrolla —de julio de 2026— invoca ' +
        'expresamente el artículo 576 del propio Decreto 555 como fuente de la ' +
        'facultad que ejerce.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si le interesa qué pasa con una licencia cuando el plan de ' +
        'ordenamiento cambia debajo del proyecto, eso está tratado en detalle ' +
        'a propósito de otra ciudad en ' +
        '[qué pasa con su licencia si cambia el POT de Cali](/blog/pot-de-cali-y-su-licencia). ' +
        'El mecanismo es el mismo.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Diciembre de 2025: por qué media biblioteca jurídica quedó vieja',
    },
    {
      tipo: 'parrafo',
      texto:
        'Bogotá hizo en diciembre de 2025 una depuración normativa grande y ' +
        'poco comentada. Si usted está leyendo una guía de trámites escrita ' +
        'antes de esa fecha, muy probablemente cita decretos derogados.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Norma nueva', 'Qué compiló', 'Fecha'],
      filas: [
        [
          '**Decreto Distrital 670 de 2025** · Decreto Único Distrital de Ordenamiento Territorial (DUDOT)',
          'Los decretos **reglamentarios** del POT',
          '27 de diciembre de 2025',
        ],
        [
          '**Decreto Distrital 646 de 2025** · sector Ambiente',
          'Entre otros, el Decreto 531 de 2010, de silvicultura urbana',
          '22 de diciembre de 2025',
        ],
        [
          '**Decreto Distrital 649 de 2025** · sector Cultura, Recreación y Deporte',
          'Entre otros, el Decreto 522 de 2023, sobre intervención de patrimonio',
          '22 de diciembre de 2025',
        ],
        [
          '**Decreto Distrital 653 de 2025** · sector Hábitat',
          'Entre otros, el procedimiento de reparto entre curadores',
          '22 de diciembre de 2025',
        ],
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Un matiz que conviene no equivocar, porque suena a lo contrario de lo ' +
        'que es: **el DUDOT no derogó el POT.** Compiló y derogó los decretos ' +
        'que lo reglamentan. El Decreto 555 de 2021 no está en su lista de ' +
        'derogatorias y sigue siendo norma aparte. Sus propios considerandos ' +
        'lo dicen: los instrumentos de planeamiento no son susceptibles de ' +
        'compilación, porque su vigencia se rige por el POT vigente.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Cinco curadurías, y todas pueden con toda la ciudad',
    },
    {
      tipo: 'parrafo',
      texto:
        'Bogotá tiene **cinco curadurías urbanas**, numeradas de la 1 a la 5, ' +
        'y en el último directorio oficial ninguno de los cinco despachos ' +
        'estaba vacante. Es el número que aparece en la Ventanilla Única de la ' +
        'Construcción, que opera la Secretaría Distrital del Hábitat, y ' +
        'coincide con el directorio de curadores de la Superintendencia de ' +
        'Notariado y Registro.',
    },
    {
      tipo: 'nota',
      texto:
        'No voy a decirle quién es el curador de cada despacho, y quiero ' +
        'explicar por qué. Solo **dos** de los cinco tienen acto de ' +
        'designación publicado y localizable en el Régimen Legal del Distrito. ' +
        'De los otros tres, el nombre aparece en el sitio web de la propia ' +
        'curaduría pero el decreto que lo respalda no está indexado. Publicar ' +
        'un nombre sin acto administrativo verificable es exactamente el tipo ' +
        'de dato que después se repite mal durante años. El directorio de la ' +
        'Superintendencia es la fuente que conviene consultar, y cambia.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Sobre cuál elegir, la respuesta corta es que **usted elige**. La ' +
        'norma es expresa: la solicitud de licencia no se somete a reparto ' +
        'entre los curadores del distrito, y la jurisdicción de cada uno ' +
        'comprende la totalidad del territorio. No hay curadores por zona. Las ' +
        'dos únicas excepciones —solicitudes de entidades estatales y de ' +
        'vivienda de interés social individual— sí van a reparto, y en Bogotá ' +
        'el procedimiento lo recoge hoy el decreto único del sector Hábitat.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El criterio para escoger, la cola que tiene la decisión y qué ' +
        'documentos pide cualquier curaduría del país están en ' +
        '[curaduría urbana: qué es, cuál elegir y qué documentos pide](/blog/curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide). ' +
        'No lo repito aquí.',
    },

    {
      tipo: 'titulo',
      nivel: 3,
      texto: 'Un cambio de agosto de 2026 que todavía no ha llegado a las guías',
    },
    {
      tipo: 'parrafo',
      texto:
        'El **Decreto Nacional 1107 del 6 de agosto de 2026** modificó el ' +
        'régimen de los curadores urbanos en dos puntos que importan en ' +
        'Bogotá:',
    },
    {
      tipo: 'lista',
      items: [
        '**Quién fija cuántas curadurías hay.** El número se determina ahora a solicitud de la entidad territorial y previo concepto favorable del Ministerio de Vivienda, o de oficio por el propio Ministerio.',
        '**Qué pasa cuando se vence el periodo de un curador.** Al terminar su periodo individual de cinco años, el curador saliente **puede continuar provisionalmente en el cargo** hasta que se designe al nuevo por concurso de méritos.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Una advertencia de método que le puede ahorrar un error: **la copia ' +
        'del Decreto 1077 que publica el Gestor Normativo de Función Pública ' +
        'está congelada en diciembre de 2023** y todavía muestra la redacción ' +
        'anterior de ese artículo. Es la fuente que casi todo el mundo usa. ' +
        'Para el capítulo de curadores hay que leer el Decreto 1107 aparte.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Concepto de norma, concepto de uso, y la consulta que no existe',
    },
    {
      tipo: 'parrafo',
      texto:
        'Antes de encargar un diseño conviene saber qué permite el lote. Hay ' +
        'tres maneras de averiguarlo y solo dos son un trámite.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué es', 'Qué le entregan', 'Cuánto cuesta', 'Plazo'],
      filas: [
        [
          '**Consulta verbal** sobre normas urbanísticas vigentes',
          'Una respuesta hablada. No hay documento',
          '**Gratuita por norma**',
          '—',
        ],
        [
          '**Concepto de norma urbanística**',
          'Dictamen escrito sobre las normas aplicables al predio',
          '8,34 UVT',
          '15 días hábiles',
        ],
        [
          '**Concepto de uso del suelo**',
          'Dictamen escrito sobre qué usos se permiten',
          '1,67 UVT',
          '15 días hábiles',
        ],
      ],
      nota:
        'Decreto 1077 de 2015, art. 2.2.6.1.3.1, numerales 2 y 3, y art. ' +
        '2.2.6.6.8.15 sustituido por el art. 5 del Decreto 1890 de 2021. Los ' +
        'valores van en UVT porque así los fija la norma.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos reglas prácticas que ahorran dinero y casi nunca se usan. La ' +
        'primera: **si el concepto se pide dentro del trámite de la licencia, ' +
        'no se cobra aparte.** La expensa solo procede cuando la actuación se ' +
        'ejecuta de manera independiente. La segunda: la consulta verbal es ' +
        'gratuita, sin excepción, y sirve para descartar un lote en una tarde.',
    },
    {
      tipo: 'nota',
      texto:
        'Y una advertencia sobre qué le compran esos conceptos, porque la ' +
        'norma es dura al respecto: **no otorgan derechos ni obligaciones** a ' +
        'quien los pide, y no modifican los derechos de una licencia vigente. ' +
        'Son un dictamen informativo. Lo que blinda la norma aplicable a su ' +
        'proyecto no es el concepto: es la radicación en legal y debida forma, ' +
        'que es otra cosa y viene enseguida.',
    },
    {
      tipo: 'titulo',
      nivel: 3,
      texto: '«Consulta preliminar»: la palabra que todo el mundo usa mal',
    },
    {
      tipo: 'parrafo',
      texto:
        '**No existe.** No como figura del trámite de licencias, al menos. ' +
        'Busqué la expresión en el Decreto 1077 de 2015, en la Ley 388 de ' +
        '1997, en el Decreto 1203 de 2017, en el Decreto 1783 de 2021 y en el ' +
        'Decreto 1107 de 2026. **Cero coincidencias en los cinco.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo más parecido en norma nacional es la consulta verbal gratuita, que ' +
        'no es un trámite formal ni produce documento. En Bogotá sí existió ' +
        'algo con ese nombre, pero era otra cosa: una etapa de los **planes de ' +
        'implantación** ante la Secretaría Distrital de Planeación, no un ' +
        'trámite de curaduría. El POT vigente solo la menciona en su régimen ' +
        'de transición, para darle a las consultas expedidas bajo el plan ' +
        'anterior una prórroga única de seis meses. Ese plazo venció hace ' +
        'años.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si alguien le ofrece tramitar «la consulta preliminar», pregunte a ' +
        'qué se refiere exactamente. Casi siempre quiere decir el concepto de ' +
        'norma, que sí existe, cuesta 8,34 UVT y no obliga a nadie.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Los plazos: el reloj no arranca el día que usted radica',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte donde se pierden las semanas, y es una sola ' +
        'distinción. Radicar no es lo mismo que radicar **en legal y debida ' +
        'forma**, y solo lo segundo pone el reloj a andar.',
    },
    {
      tipo: 'cita',
      texto:
        'Se entenderá que una solicitud de licencia o su modificación está ' +
        'radicada en legal y debida forma si a la fecha de radicación se ' +
        'allega la totalidad de los documentos exigidos en el presente ' +
        'Capítulo, aun cuando estén sujetos a posteriores correcciones.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.1.1, parágrafo 1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo con cuidado, porque dice más de lo que parece: los documentos ' +
        'tienen que estar **todos**, pero pueden estar sujetos a correcciones ' +
        'posteriores. Falta un documento y no hay legal y debida forma. Está ' +
        'el documento con errores y sí la hay. Y la norma lo remata:',
    },
    {
      tipo: 'cita',
      texto:
        'Si bien la revisión del proyecto se podrá iniciar a partir del día ' +
        'siguiente de la radicación, los términos para resolver la solicitud ' +
        'empezarán a correr una vez haya sido radicada en legal y debida ' +
        'forma.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.2.3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay además una consecuencia que vale plata: el derecho a que le ' +
        'apliquen la norma vigente al momento de radicar, aunque cambie ' +
        'durante el trámite, **solo lo tiene quien radicó en legal y debida ' +
        'forma**. En una ciudad con un POT en litigio, eso no es un detalle ' +
        'procesal.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Momento', 'Plazo', 'Qué pasa si se vence'],
      filas: [
        [
          'Solicitud incompleta que el peticionario insiste en radicar',
          '**30 días hábiles** para allanarse',
          'Se entiende desistida y se archiva',
        ],
        [
          'Fotografía de la valla instalada',
          '**5 días hábiles** desde la radicación',
          'Se entiende desistida',
        ],
        [
          'Antes de decidir, desde la citación a vecinos y desde la valla',
          '**5 días hábiles**, mínimo',
          'No se puede expedir el acto',
        ],
        [
          'Acta de observaciones y correcciones, que se levanta **una sola vez**',
          '**30 días hábiles**, prorrogables **15 hábiles** más a solicitud de parte',
          'Se entiende desistida y se archiva',
        ],
        [
          'Información pedida a otra autoridad',
          '**10 días hábiles**',
          'El término de la licencia queda suspendido mientras tanto',
        ],
        [
          '**Decisión sobre la solicitud**',
          '**45 días hábiles** desde la radicación en legal y debida forma, prorrogables **por una sola vez hasta por la mitad**',
          '**Silencio administrativo positivo**, nunca contra las normas urbanísticas vigentes',
        ],
        [
          'Liquidaciones tributarias, ya hallada viable la licencia',
          '**30 días hábiles** para presentarlas; el curador expide en **5 días hábiles** más',
          'Se entiende desistida',
        ],
      ],
      nota:
        'Decreto 1077 de 2015, arts. 2.2.6.1.2.1.2, 2.2.6.1.2.2.1, ' +
        '2.2.6.1.2.2.2, 2.2.6.1.2.2.4, 2.2.6.1.2.2.5, 2.2.6.1.2.3.1 y ' +
        '2.2.6.1.2.3.4, con las modificaciones del Decreto 1783 de 2021. El ' +
        'plazo de 45 días hábiles y el silencio positivo están además en el ' +
        'art. 99 de la Ley 388 de 1997.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La última fila es la que más sorprende a quien nunca ha licenciado. ' +
        'Que le digan que el proyecto es viable **no es la licencia**. Se ' +
        'profiere un acto de trámite pidiendo las liquidaciones tributarias, ' +
        'el trámite queda suspendido mientras usted las consigue, y si no las ' +
        'aporta en treinta días hábiles la solicitud se entiende desistida ' +
        'después de haber pasado toda la revisión. Presupueste esos impuestos ' +
        'aparte y con caja disponible.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos precisiones para quien vaya a citar la norma. La primera: el ' +
        'artículo que fijaba plazos escalonados por categoría de proyecto ' +
        '—45, 35, 25 y 20 días— **está derogado** desde el Decreto 1783 de ' +
        '2021, y sigue apareciendo en cartillas. La segunda: el desistimiento ' +
        'de una licencia es régimen especial del Decreto 1077, **no** el ' +
        'desistimiento tácito del artículo 17 del CPACA. No son ' +
        'intercambiables.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Las expensas: Bogotá tiene el factor más alto del país',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las expensas de curaduría se liquidan con una ecuación en la que ' +
        'entra un **factor municipal**. El de Bogotá es **0,938**, el más alto ' +
        'de la tabla nacional, compartido con Cali, Medellín, Chía, Funza, ' +
        'Mosquera y Sabaneta. A igualdad de área y de estrato, licenciar en ' +
        'Bogotá cuesta más que en casi cualquier otro municipio del país, y no ' +
        'por criterio del curador sino por decreto.',
    },
    {
      tipo: 'dato',
      valor: 'm = 0,938',
      etiqueta: 'Factor municipal de Bogotá, el más alto de la tabla nacional',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.6.8.4',
    },
    {
      tipo: 'parrafo',
      texto:
        'No voy a copiar aquí la fórmula: ya está resuelta, con las tarifas y ' +
        'el factor de cada municipio, en la ' +
        '[calculadora de expensas de curaduría](/apbs/expensas-de-curaduria). ' +
        'Ponga el área, el estrato y la modalidad y le sale la cifra ' +
        'discriminada, con lo que se paga al radicar y lo que se paga después.',
    },
    {
      tipo: 'nota',
      texto:
        'Con una fecha de caducidad que conviene conocer: el **Decreto ' +
        'Nacional 1107 del 6 de agosto de 2026** obliga al Ministerio de ' +
        'Vivienda a expedir una metodología de actualización dentro del año ' +
        'siguiente y a **actualizar por resolución todos los factores ' +
        'municipales** dentro de los doce meses posteriores. Es decir: la ' +
        'tabla que hoy rige tiene fecha de vencimiento, y no por descuido de ' +
        'nadie sino por mandato expreso.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una regla que no cambia: los curadores **no pueden cobrar por ' +
        'conceptos distintos de los que fija el decreto**, mientras no se ' +
        'aprueben expensas nuevas. Si le liquidan un rubro que no está en la ' +
        'tabla, pida la norma que lo autoriza.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'La Sabana: dónde hay curaduría y dónde no se pagan expensas',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que más plata mueve y que casi nadie publica. Las ' +
        'expensas solo se cobran donde hay curador urbano designado. Donde no ' +
        'lo hay, la licencia la expide la oficina de planeación del municipio ' +
        'y **está prohibido cobrarlas**. En el borde de Bogotá, el mapa está ' +
        'partido en tres.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Municipio', 'Situación', 'Expensas'],
      filas: [
        ['Bogotá D.C.', 'Cinco curadurías en operación', 'Sí · factor 0,938'],
        ['Soacha', 'Curaduría en operación', 'Sí · factor 0,675'],
        ['Funza', 'Curaduría en operación', 'Sí · factor 0,938'],
        ['Mosquera', 'Curaduría en operación', 'Sí · factor 0,938'],
        ['Cajicá', 'Curaduría en operación', 'Sí · factor 0,641'],
        ['Cota', 'Curaduría en operación', 'Sí · factor 0,713'],
        ['Tocancipá', 'Curaduría en operación', 'Sí · factor 0,713'],
        [
          '**Chía**',
          '**Los dos despachos vacantes.** Asume la alcaldía',
          '**No se pagan**',
        ],
        [
          '**Madrid**',
          '**Los dos despachos vacantes.** Asume la alcaldía',
          '**No se pagan**',
        ],
        [
          '**Zipaquirá**',
          '**Los dos despachos vacantes.** Asume la alcaldía',
          '**No se pagan**',
        ],
        [
          '**La Calera, Sopó y el resto de la Sabana**',
          '**Sin factor municipal asignado.** Nunca han tenido curaduría',
          '**No se pagan**',
        ],
      ],
      nota:
        'Situación de los despachos según el Directorio de Curadores Urbanos ' +
        'de la Superintendencia de Notariado y Registro, edición del 6 de ' +
        'marzo de 2026. Los factores, del art. 2.2.6.6.8.4 del Decreto 1077 y ' +
        'de las resoluciones del Ministerio de Vivienda que los asignaron.',
    },
    {
      tipo: 'nota',
      texto:
        'Este dato es el más volátil de todo el artículo y hay que tratarlo ' +
        'como tal: **una curaduría que se provea cambia la respuesta de cero a ' +
        'varios cientos de miles de pesos.** Chía, Madrid y Zipaquirá figuran ' +
        'hoy sin curador porque hay un concurso de méritos en curso. Antes de ' +
        'presupuestar, verifique el directorio del día.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Que no se paguen expensas no significa que el trámite sea más ' +
        'rápido, ni más fácil, ni más barato en conjunto. Significa una sola ' +
        'cosa: que ese rubro no existe. Los plazos legales, los documentos y ' +
        'los impuestos son los mismos.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Lo que no es la licencia, aunque se lo pidan al tiempo',
    },
    {
      tipo: 'parrafo',
      texto:
        'En Bogotá hay por lo menos diez autorizaciones distintas que se ' +
        'confunden con la licencia de construcción. Ninguna la reemplaza y ' +
        'ninguna la expide el curador. Saber a quién le corresponde cada una ' +
        'ahorra meses.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Lo que necesita', 'Quién lo autoriza'],
      filas: [
        [
          'Tala, poda, bloqueo o traslado de un árbol',
          '**Secretaría Distrital de Ambiente**, sin excepción',
        ],
        [
          'Ocupación de cauce y permiso de vertimientos',
          '**Secretaría Distrital de Ambiente**, dentro del perímetro urbano',
        ],
        [
          'Registro de publicidad exterior visual',
          '**Secretaría Distrital de Ambiente** · pero los pasacalles y pendones se registran ante el **alcalde local**',
        ],
        [
          'Intervenir un bien de interés cultural **nacional**, o el Centro Histórico',
          '**Ministerio de Cultura**',
        ],
        [
          'Intervenir un bien de interés cultural **distrital**',
          '**Instituto Distrital de Patrimonio Cultural**',
        ],
        ['Patrimonio arqueológico', '**ICANH**'],
        [
          'Intervenir el espacio público: andenes, calzadas, redes, enlaces urbanos',
          '**IDU** · parques, **IDRD** · espacio público patrimonial, **IDPC** · arte permanente, **IDARTES**',
        ],
        [
          'Estudio detallado de riesgo en zona de amenaza',
          'Lo elabora **usted**; el **IDIGER** conceptúa si cumple los términos de referencia',
        ],
        [
          'Legalización urbanística de un asentamiento',
          '**Secretaría Distrital de Planeación**, por resolución',
        ],
        [
          'Reconocimiento de una edificación existente',
          '**El curador urbano**, no la Secretaría de Planeación',
        ],
      ],
      nota:
        'Decreto Distrital 555 de 2021, arts. 22, 82, 145 y 499; Decreto ' +
        'Distrital 646 de 2025 para arbolado; Decreto Distrital 649 de 2025 ' +
        'para patrimonio distrital; Decreto 1077 de 2015, arts. 2.2.6.1.1.3 y ' +
        '2.2.6.4.1.1.',
    },
    {
      tipo: 'parrafo',
      texto: 'Tres precisiones que evitan errores caros:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**La autorización de patrimonio es previa y bloqueante.** La licencia de construcción en un bien o sector de interés cultural, y en su área de influencia, solo se puede expedir cuando se aporte la autorización de intervención ya aprobada. Y esa autorización **no se puede sustituir por ninguna licencia urbanística**: lo dice la ley expresamente. Si su predio es colindante de un bien de interés cultural, empiece por ahí, no por el curador.',
        '**El DADEP no expide la licencia de intervención del espacio público.** Defiende, inspecciona, inventaría el patrimonio inmobiliario del Distrito y recibe las zonas de cesión. La licencia la dan el IDU, el IDRD, el IDPC o IDARTES según qué se vaya a intervenir. Es un error muy frecuente y cuesta semanas.',
        '**Los andenes colindantes van dentro de la propia licencia de construcción.** El curador puede autorizar su reconstrucción o rehabilitación al expedirla, sin trámite aparte, cuando el predio está en sector urbanizado.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y un cuarto dato que ahorra un trámite entero: **intervenir cubiertas, ' +
        'fachadas, paramentos, pórticos o antejardines de un predio privado ' +
        'que hagan parte del espacio público NO requiere licencia de ' +
        'intervención y ocupación del espacio público.** Sí requiere la ' +
        'licencia de construcción, cuando corresponda. Mucha gente tramita las ' +
        'dos.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hacer, en orden' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Haga la consulta verbal antes de encargar el diseño.** Es gratuita por norma y le dice en una tarde si el lote da para lo que tiene en la cabeza.',
        '**Pida el concepto de norma solo si lo necesita por escrito**, o pídalo dentro del trámite de la licencia, donde no se cobra aparte. Recuerde que no le otorga derechos.',
        '**Verifique primero si hay patrimonio de por medio**, propio o colindante. Es el trámite más largo y el único que bloquea a los demás.',
        '**Radique completo.** El acta de observaciones se levanta una sola vez, y los cuarenta y cinco días hábiles no empiezan hasta que la radicación esté en legal y debida forma.',
        '**Instale la valla al día siguiente y radique la fotografía dentro de los cinco días hábiles.** Es la causal de desistimiento más tonta y más común.',
        '**Presupueste los impuestos aparte y con caja.** Aparecen al final, con treinta días hábiles de plazo, y el proyecto ya viable se cae si no se pagan.',
        '**Si su proyecto está en la Sabana, verifique el directorio de curadores el mismo día.** La diferencia entre pagar expensas y no pagarlas depende de un despacho provisto o vacante.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior está transcrito del articulado y de las providencias ' +
        'vigentes a la fecha de publicación. Las expensas van en UVT porque ' +
        'así las fija la norma, y su equivalente en pesos cambia cada año.',
    },
  ],
  etiquetas: ['bogota', 'propietario', 'licencia', 'norma-urbana', 'costos'],
  fuentes: [
    {
      titulo:
        'Decreto Distrital 555 de 2021, por el cual se adopta la revisión general del Plan de Ordenamiento Territorial de Bogotá D.C.',
      editor: 'Alcaldía Mayor de Bogotá D.C.',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=119582',
      fecha: '2021-12-29',
    },
    {
      titulo:
        'Auto del 14 de junio de 2022: suspensión provisional de los efectos del Decreto Distrital 555 de 2021, radicado 11001333400520220006600',
      editor:
        'Juzgado Quinto Administrativo Oral del Circuito Judicial de Bogotá D.C., Sección Primera',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=124621',
      fecha: '2022-06-14',
    },
    {
      titulo:
        'Auto del 22 de agosto de 2022: revoca la suspensión provisional y deniega la medida cautelar',
      editor:
        'Tribunal Administrativo de Cundinamarca, Sección Primera, Subsección A',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=127239',
      fecha: '2022-08-22',
    },
    {
      titulo:
        'Concepto 2202413038 de 2024: vigencia del Decreto Distrital 555 de 2021 y efectos de la medida cautelar',
      editor: 'Secretaría Jurídica Distrital de Bogotá D.C.',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=175459',
      fecha: '2024-09-13',
    },
    {
      titulo:
        'Resolución 309 de 2022: suspensión de términos de actuaciones administrativas con ocasión de la medida cautelar',
      editor: 'Instituto Distrital de Patrimonio Cultural',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=125022',
      fecha: '2022-06-24',
    },
    {
      titulo:
        'Decreto Distrital 670 de 2025, Decreto Único Distrital de Ordenamiento Territorial (DUDOT)',
      editor: 'Alcaldía Mayor de Bogotá D.C.',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=191905',
      fecha: '2025-12-27',
    },
    {
      titulo: 'Decreto Distrital 646 de 2025, Decreto Único del Sector Ambiente',
      editor: 'Alcaldía Mayor de Bogotá D.C.',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=191866',
      fecha: '2025-12-22',
    },
    {
      titulo:
        'Decreto Distrital 649 de 2025, Decreto Único del Sector Cultura, Recreación y Deporte',
      editor: 'Alcaldía Mayor de Bogotá D.C.',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=191869',
      fecha: '2025-12-22',
    },
    {
      titulo: 'Decreto Distrital 653 de 2025, Decreto Único del Sector Hábitat',
      editor: 'Alcaldía Mayor de Bogotá D.C.',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=191873',
      fecha: '2025-12-22',
    },
    {
      titulo:
        'Decreto Distrital 253 de 2026, que adiciona el Decreto Único Distrital de Ordenamiento Territorial invocando el art. 576 del Decreto Distrital 555 de 2021',
      editor: 'Alcaldía Mayor de Bogotá D.C.',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=193583',
      fecha: '2026-07-02',
    },
    {
      titulo:
        'Decreto Nacional 1107 de 2026, que modifica el Decreto 1077 de 2015 en lo relacionado con el concurso de méritos para la designación de curadores urbanos',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=194009',
      fecha: '2026-08-06',
    },
    {
      titulo:
        'Decreto 1077 de 2015, decreto único reglamentario del sector vivienda, ciudad y territorio',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo:
        'Decreto 1890 de 2021, que sustituye las expensas de curaduría y las pasa a UVT',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=120119',
      fecha: '2021-12-30',
    },
    {
      titulo:
        'Decreto 1783 de 2021, que modifica el trámite de licencias urbanísticas',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175086',
      fecha: '2021-12-21',
    },
    {
      titulo: 'Ley 388 de 1997, de desarrollo territorial, artículos 99 y 101',
      editor: 'Congreso de la República de Colombia',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
      fecha: '1997-07-18',
    },
    {
      titulo:
        'Ley 397 de 1997, artículo 11, sobre intervención de bienes de interés cultural',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0397_1997.html',
      fecha: '1997-08-07',
    },
    {
      titulo: 'Ventanilla Única de la Construcción de Bogotá',
      editor: 'Secretaría Distrital del Hábitat',
      url: 'https://vuc.habitatbogota.gov.co/',
      fecha: null,
    },
    {
      titulo: 'Directorio de Curadores Urbanos, edición del 6 de marzo de 2026',
      editor: 'Superintendencia de Notariado y Registro',
      url: 'https://www.supernotariado.gov.co/superintendencia-delegada-para-curadores-urbanos/',
      fecha: '2026-03-06',
    },
  ],
}
