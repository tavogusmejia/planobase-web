import type { Post } from '@/lib/types'

/**
 * Pilar de patologías. Es la pieza más local y más perecedera del blog: la
 * escribe un estudio con oficina en Cali para gente de Cali que tiene el
 * problema hoy, y por eso el listón de verificación es más alto que en
 * cualquier otro artículo del sitio.
 *
 * Todo lo sustantivo sale de fuente primaria o se declara. Cuatro decisiones:
 *
 * 1. **Las definiciones de los colores son las de la Alcaldía, casi literales.**
 *    No las de la guía nacional, que usa cuatro colores, ni las de la circular
 *    de la UNGRD, que redacta distinto el rojo. Las tres redacciones se
 *    comparan de frente en el artículo en vez de fundirse en una: quien tiene
 *    un adhesivo en la fachada tiene el de Cali, y mezclarlas es exactamente lo
 *    que produce la confusión que la pieza viene a deshacer.
 * 2. **La Circular 073 de la UNGRD se cita con una advertencia dentro del
 *    texto.** Existe: el portal de la Alcaldía Mayor de Bogotá la nombra
 *    —«Circular n.º 73 del 20 de agosto de 2026»— y resume su contenido. Pero
 *    no está en el listado público de circulares de la propia UNGRD, que salta
 *    de la 072 del 18 de agosto a la 074 del 20. El texto no se pudo leer, así
 *    que no se cita ni un requisito que no venga del resumen oficial, y el
 *    hueco se declara.
 * 3. **Las cifras del balance van en tabla, con dos cortes.** Se mueven cada
 *    pocos días, y publicarlas con una sola fecha sería publicarlas caducadas
 *    en una semana. Con dos cortes el lector ve la velocidad y entiende por qué
 *    la cifra que lea en otro lado no coincide.
 * 4. **Los plazos que no existen se declaran como inexistentes.** No hay
 *    término oficial para que un propietario con adhesivo amarillo haga nada.
 *    Inventarle uno sería el error más caro posible en un artículo así.
 *
 * Fechado el 5 de septiembre de 2026, el día de la fuente más reciente que cita
 * —el balance de la Alcaldía a ese corte—. No puede ir antes.
 */
export const post: Post = {
  slug: 'mi-edificio-quedo-en-amarillo',
  titulo: 'Mi edificio quedó en amarillo: qué significa y qué sigue',
  pilar: 'patologias',
  fecha: '2026-09-05',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'El adhesivo amarillo no dice que el edificio esté bien, y tampoco que se ' +
    'vaya a caer. Qué significa exactamente cada color según la Alcaldía de ' +
    'Cali, qué se puede hacer hoy con cada uno, quién firma la evaluación que ' +
    'sigue y qué preguntarle cuando le entregue el informe.',
  metaDescripcion:
    'Qué significa el adhesivo amarillo en un edificio de Cali tras el sismo, ' +
    'qué se puede hacer con él y qué evaluación viene después.',
  puerta: 'diagnostico-de-edificaciones',
  etiquetas: ['cali', 'propietario', 'administrador', 'sismo', 'patologia'],
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Llegó una comisión, miró el edificio entre quince minutos y una hora, ' +
        'pegó un adhesivo amarillo en la fachada y se fue. Desde entonces la ' +
        'conversación en el chat de la copropiedad se mueve entre dos ' +
        'extremos: los que dicen que amarillo es «pasó la revisión» y los que ' +
        'ya están buscando arriendo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de las dos lecturas es la correcta, y la distancia entre ' +
        'ellas cuesta dinero y tranquilidad. Esto es lo que dicen exactamente ' +
        'los documentos oficiales, qué se puede hacer hoy con cada color, ' +
        'quién firma lo que viene después y qué preguntar cuando le entreguen ' +
        'un informe.',
    },
    {
      tipo: 'nota',
      texto:
        'Este artículo describe el esquema que aplica la **Alcaldía de ' +
        'Santiago de Cali**. Otros municipios afectados por el sismo del 10 de ' +
        'agosto están usando redacciones parecidas pero no idénticas, y la ' +
        'guía técnica nacional usa cuatro colores en vez de tres. Si su ' +
        'adhesivo lo pegaron en Cali, la definición que manda es esta.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los tres colores, con las palabras de la Alcaldía' },
    {
      tipo: 'parrafo',
      texto:
        'Conviene leerlas despacio, porque cada una dice menos de lo que la ' +
        'gente le hace decir.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Color', 'Nombre oficial', 'Qué dice la definición'],
      filas: [
        [
          'Verde',
          'Habitable',
          'Durante la inspección no se identificaron condiciones aparentes que impidan la habitabilidad de la edificación.',
        ],
        [
          'Amarillo',
          'Habitabilidad restringida',
          'Se identificaron daños o condiciones de peligro localizados, que requieren establecer restricciones para el ingreso o la habitabilidad de determinadas áreas.',
        ],
        [
          'Rojo',
          'No habitable',
          'Se identificaron condiciones que representan un riesgo grave para la vida, razón por la cual la edificación se considera no habitable.',
        ],
      ],
      nota:
        'Secretaría de Gestión del Riesgo de Emergencias y Desastres, ' +
        'Alcaldía de Santiago de Cali, 22 de agosto de 2026.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Fíjese en tres palabras que aparecen en las tres definiciones y que ' +
        'lo cambian todo: **«durante la inspección»**, **«aparentes»** y ' +
        '**«localizados»**. El adhesivo describe lo que un equipo vio, a ' +
        'simple vista, un día concreto. No es un pronóstico ni un dictamen.',
    },
    {
      tipo: 'cita',
      texto:
        'Estas visitas no configuran un concepto técnico especializado, ni ' +
        'constituyen un dictamen estructural ni un estudio de ingeniería.',
      fuente: 'Alcaldía de Santiago de Cali, agosto de 2026',
    },
    {
      tipo: 'nota',
      texto:
        'Por qué a veces los colores no cuadran con lo que lee en otro lado. ' +
        'La **guía técnica nacional** de la Asociación Colombiana de Ingeniería ' +
        'Sísmica usa **cuatro** colores, con naranja para «no habitable» y el ' +
        'rojo reservado a «peligro de colapso». La **circular de la UNGRD** que ' +
        'unificó el método en agosto describe el rojo como peligro de colapso y ' +
        'prohibición de ingreso. **Cali usa tres**, y su rojo es «no ' +
        'habitable». Son escalas emparentadas, no idénticas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que el amarillo sí dice, y lo que no' },
    {
      tipo: 'parrafo',
      texto:
        'El amarillo es el color de la palabra **localizado**. Significa que el ' +
        'equipo vio un daño o una condición de peligro en un punto ' +
        'identificable —una escalera, un voladizo, un muro, una zona común— y ' +
        'que hay que restringir el ingreso o el uso de esa parte. No de todo el ' +
        'edificio, y no indefinidamente.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Estas cuatro cosas es lo que el amarillo **no** significa, y cada una ' +
        'se oye a diario:',
    },
    {
      tipo: 'lista',
      items: [
        '**No significa que el edificio esté aprobado.** Es exactamente lo contrario: un amarillo abre la obligación de contratar una evaluación técnica especializada. El verde es el que cierra el asunto, y solo por ahora.',
        '**No significa que haya que desocupar.** Habitabilidad restringida es habitabilidad. Lo que se restringe son las áreas señaladas por el equipo, no la vivienda entera, salvo que ellos hayan dicho otra cosa.',
        '**No significa que el daño sea estructural.** El adhesivo no distingue entre un muro divisorio rajado y una columna comprometida. Esa distinción es justamente la que solo aparece en la evaluación siguiente.',
        '**No es una respuesta sobre el futuro del inmueble.** El adhesivo no ordena demoler, no ordena reforzar y no autoriza nada. Describe un estado observado.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una precisión sobre el rojo, porque es la que más angustia produce: ' +
        'la propia Alcaldía ha insistido en que **el rojo no es una orden de ' +
        'demolición**. Un edificio rojo puede terminar demolido, reforzado o ' +
        'reparado. Lo que decide eso es el estudio que viene después, no el ' +
        'adhesivo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué puede hacer hoy con su edificio' },
    {
      tipo: 'tabla',
      cabeceras: ['Si le quedó…', 'Puede', 'No puede', 'Lo que sigue'],
      filas: [
        [
          'Verde',
          'Habitar y hacer reparaciones menores de acabados.',
          'Dar por hecho que no hay nada. La visita fue visual y no descarta afectaciones.',
          'Nada obligatorio. Si aparece algo nuevo, vuelve a reportarlo.',
        ],
        [
          'Amarillo',
          'Habitar las áreas no restringidas, respetando lo que señaló el equipo.',
          'Usar las zonas restringidas, ni retirar la señalización, ni empezar obra sin evaluación previa.',
          'Contratar la evaluación técnica especializada y radicar el informe ante la Secretaría.',
        ],
        [
          'Rojo',
          'Solicitar acompañamiento para el retiro de enseres, por los canales de la Secretaría.',
          'Entrar por cuenta propia, dormir ahí, ni intervenir la estructura.',
          'Evaluación especializada, y a partir de ella la decisión de reforzar, reparar o demoler.',
        ],
      ],
      nota:
        'Construido sobre las preguntas frecuentes publicadas por la ' +
        'Secretaría de Gestión del Riesgo el 26 de agosto de 2026.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay dos reglas que valen para los tres colores. La primera: **el ' +
        'adhesivo solo se puede cambiar como resultado de un proceso de ' +
        'evaluación nuevo**, y solo lo modifica personal autorizado. Quitarlo, ' +
        'taparlo o reemplazarlo por su cuenta no cambia el estado del edificio; ' +
        'solo borra la información que otros necesitan.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La segunda: **los estudios y los ajustes corren por cuenta del ' +
        'propietario o de la copropiedad**. La Secretaría inspecciona, ' +
        'clasifica y reevalúa; no diseña ni ejecuta la reparación de un ' +
        'inmueble privado.',
    },
    {
      tipo: 'nota',
      texto:
        'El informe técnico que usted contrate se radica ante la Secretaría de ' +
        'Gestión del Riesgo para su revisión y para la reevaluación del caso. ' +
        'Al momento de escribir esto, el canal publicado por la Alcaldía para ' +
        'enviarlo es el correo `estructurales.sismo@cali.gov.co`. Confírmelo en ' +
        'el [repositorio oficial de la Alcaldía](https://www.cali.gov.co/gobierno/publicaciones/193607/terremoto-de-cali-repositorio-oficial-de-informacion/) ' +
        'antes de usarlo: los canales de una emergencia cambian.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién firma cada cosa, y hasta dónde llega cada firma' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está el malentendido que más caro sale, y conviene decirlo con ' +
        'claridad incluso —sobre todo— desde un estudio de arquitectura. **La ' +
        'visita que dejó el adhesivo y el estudio que usted tiene que contratar ' +
        'ahora no son la misma cosa, ni las hace la misma gente, ni cuestan ' +
        'parecido.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'La primera fase en Cali fue una inspección principalmente visual, ' +
        'hecha por equipos con acompañamiento de arquitectos e ingenieros. Para ' +
        'las fases especializadas, la Alcaldía convocó específicamente ' +
        '**ingenieros civiles con experiencia en estructuras, geotecnia y ' +
        'patología estructural**. No es un detalle burocrático: es la diferencia ' +
        'entre mirar y medir.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué es', 'Qué responde', 'Quién la firma'],
      filas: [
        [
          'Inspección rápida de habitabilidad',
          '¿Se puede entrar hoy? ¿Con qué restricciones?',
          'Comisión de la Secretaría, con ingenieros y arquitectos. Liderada por un ingeniero estructural.',
        ],
        [
          'Evaluación detallada o estudio patológico',
          '¿Qué se dañó, por qué, y qué hay que hacer?',
          'Ingeniero estructural, geotecnista o patólogo de la construcción.',
        ],
        [
          'Evaluación de vulnerabilidad sísmica',
          '¿Cuánto resiste esta edificación frente a la norma vigente?',
          'Ingeniero estructural. Es la que sustenta un proyecto de reforzamiento.',
        ],
      ],
      nota:
        'Son tres productos distintos y se cotizan distinto. Pedir el tercero ' +
        'cuando basta el segundo es caro; aceptar el primero cuando hace falta ' +
        'el segundo es peligroso.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dicho en corto, y es la frase que este blog repite sin cansarse: **un ' +
        'arquitecto puede mirar su fisura, decirle qué la produjo y si hay que ' +
        'preocuparse; el veredicto de seguridad estructural lo firma un ' +
        'ingeniero estructural o un patólogo.** Si alguien le ofrece lo segundo ' +
        'sin serlo, le está vendiendo algo que no puede entregar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si lo que tiene es una grieta y quiere entender qué está viendo antes ' +
        'de llamar a nadie, [cómo se lee una fisura](/blog/fisuras-en-muros) lo ' +
        'explica con los umbrales oficiales. Y ' +
        '[cuándo un edificio necesita un estudio patológico](/blog/cuando-un-edificio-necesita-un-estudio-patologico) ' +
        'entra en qué incluye ese estudio y qué cuesta.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La regla nacional, y lo que no pudimos leer' },
    {
      tipo: 'parrafo',
      texto:
        'Un poco de contexto, porque explica por qué el procedimiento se parece ' +
        'entre ciudades. El **Decreto 1171 del 11 de agosto de 2026** declaró ' +
        'la situación de desastre de carácter nacional por el sismo, con una ' +
        'duración inicial de doce meses prorrogables, y puso la coordinación en ' +
        'cabeza de la Unidad Nacional para la Gestión del Riesgo de Desastres.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Diez días después, esa unidad expidió una circular para unificar el ' +
        'método de evaluación en todo el país. Según el resumen que publicó la ' +
        '[Alcaldía Mayor de Bogotá](https://bogota.gov.co/mi-ciudad/ambiente/gobierno-unifica-metodologia-para-evaluar-edificaciones-por-terremoto), ' +
        'se trata de la **Circular n.º 73 del 20 de agosto de 2026**, y ordena ' +
        'dos fases: una evaluación rápida por inspección visual, con el ' +
        'semáforo de tres colores, y una evaluación detallada dirigida sobre ' +
        'todo a los inmuebles marcados en amarillo y rojo, más la ' +
        'infraestructura vital —hospitales, colegios, servicios esenciales—, ' +
        'que va a evaluación detallada desde el principio.',
    },
    {
      tipo: 'nota',
      texto:
        'Declaración de honestidad, la misma que hace este blog cada vez que ' +
        'corresponde: **no pudimos leer el texto de esa circular.** No aparece ' +
        'en el listado público de circulares de la UNGRD, que en 2026 salta de ' +
        'la 072, del 18 de agosto, a la 074, del 20. El número, la fecha y el ' +
        'contenido que resumimos arriba salen del portal oficial de la Alcaldía ' +
        'Mayor de Bogotá y de reportes coincidentes, no del documento. Por eso ' +
        'no citamos de ella ningún requisito, ningún plazo y ninguna cifra: ' +
        'para lo que usted tiene que hacer con su edificio, la fuente que manda ' +
        'y que sí está publicada es la de la Alcaldía de Cali.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué sigue después del diagnóstico' },
    {
      tipo: 'parrafo',
      texto:
        'La guía que publicó la Alcaldía a comienzos de septiembre ordena el ' +
        'recorrido en un orden que vale la pena respetar, porque saltárselo es ' +
        'la forma más común de gastar dos veces.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Evaluación de seguridad estructural antes de tocar nada.** Nada de reparaciones informales. Si hay póliza, entra el perito de la aseguradora; si no, se contrata un ingeniero estructural o un patólogo de la construcción.',
        '**Estudios complementarios cuando el caso los pida.** Estudio de suelos y revisión de las condiciones de riesgo del predio, que en Cali no son iguales en toda la ciudad.',
        '**Radicación del informe ante la Secretaría de Gestión del Riesgo**, que lo revisa y reevalúa el caso. Es el único camino para que cambie el color del adhesivo.',
        '**Concepto de Planeación y licencia de construcción ante una curaduría urbana**, cuando la intervención lo requiera. Reforzamiento estructural, reconstrucción y demolición son modalidades de licencia, no obras que se puedan empezar por confianza.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Ese último paso es el que más gente se salta, y es el que después ' +
        'impide vender, hipotecar o cobrar un seguro. ' +
        '[Qué exige la norma para reforzar](/blog/reforzamiento-estructural-y-nsr-10) ' +
        'explica la modalidad y el trámite; ' +
        '[cómo funciona una curaduría](/blog/curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide) ' +
        'explica qué documentos le van a pedir.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los plazos: lo que hay y lo que no' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la pregunta que más se hace y la que tiene la respuesta menos ' +
        'satisfactoria. **No encontramos ningún término oficial que obligue a ' +
        'un propietario con adhesivo amarillo a contratar la evaluación antes ' +
        'de una fecha determinada.** No lo fija la Alcaldía en los documentos ' +
        'publicados, y no lo fija el decreto de desastre. Si alguien le dice ' +
        'que tiene treinta días, pídale la norma.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí tiene fecha es el calendario de la ciudad, y sirve para ' +
        'calibrar expectativas:',
    },
    {
      tipo: 'lista',
      items: [
        'La Alcaldía trazó un horizonte de **seis meses de planeación y tres años de obra** para la reconstrucción, anunciado a finales de agosto de 2026.',
        'Las **primeras demoliciones** de edificios no recuperables se anunciaron para la semana del 9 de septiembre de 2026, empezando por un grupo pequeño de inmuebles ya aprobados.',
        'La evaluación de inmuebles sigue en curso y **avanza mucho más despacio que la demanda**: a finales de agosto había del orden de doce mil predios en cola de revisión técnica.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una advertencia práctica que no es un plazo pero funciona como uno: ' +
        'la agenda de los ingenieros estructurales y los patólogos de la ' +
        'región está copada. El que llame primero, entra primero.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las cifras, y por qué no coinciden con las que leyó ayer' },
    {
      tipo: 'parrafo',
      texto:
        'El balance de la Alcaldía se actualiza cada pocos días, y las cifras ' +
        'que circulan casi nunca traen su fecha de corte. Dos cortes, para que ' +
        'vea la velocidad:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Corte', 'Visitas', 'Habitables', 'Uso restringido', 'No habitables'],
      filas: [
        ['25 de agosto de 2026', '1.147', '306', '298', '543'],
        ['5 de septiembre de 2026', '1.713', '439', '472', '765'],
      ],
      nota:
        'Balance de la Alcaldía de Santiago de Cali en cada fecha, reportado ' +
        'por prensa local. Once días, y la cifra de edificaciones no ' +
        'habitables creció un 41 %.',
    },
    {
      tipo: 'dato',
      valor: '765',
      etiqueta:
        'edificaciones clasificadas como no habitables en Cali, de 1.713 ' +
        'visitas de diagnóstico',
      fuente: 'Alcaldía de Santiago de Cali, corte al 5 de septiembre de 2026',
    },
    {
      tipo: 'nota',
      texto:
        'Cómo leer esto sin equivocarse. Son **edificaciones**, no ' +
        'apartamentos: un solo edificio no habitable puede ser cincuenta ' +
        'hogares. Y son las que **ya se visitaron**, no las que están dañadas: ' +
        'la cola de predios pendientes es varias veces mayor. Cualquier cifra ' +
        'de este artículo que lea usted dentro de un mes estará vieja. Vaya ' +
        'siempre al [repositorio oficial](https://www.cali.gov.co/gobierno/publicaciones/193607/terremoto-de-cali-repositorio-oficial-de-informacion/), ' +
        'que publica el informe con su fecha.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Si es propiedad horizontal' },
    {
      tipo: 'parrafo',
      texto:
        'Casi todos los adhesivos amarillos de Cali están pegados en edificios ' +
        'de apartamentos, así que la pregunta llega enseguida: quién contrata y ' +
        'quién paga. La ' +
        '[Ley 675 de 2001](https://www.sic.gov.co/sites/default/files/normatividad/Ley_675_2001.pdf) ' +
        'la resuelve mejor de lo que suele creerse.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Su artículo 3 define como **bienes comunes esenciales** el terreno, ' +
        'los cimientos, la estructura, las fachadas y las losas que sirven de ' +
        'cubierta a cualquier nivel. Es decir: **una columna, una viga, un muro ' +
        'estructural o la fachada siguen siendo bien común aunque estén dentro ' +
        'de su apartamento.** El daño ahí es de la copropiedad. El estuco ' +
        'rajado de su sala es suyo.',
    },
    {
      tipo: 'lista',
      items: [
        'La evaluación técnica del edificio la contrata **la copropiedad**, no cada propietario por su lado. Cinco informes distintos sobre el mismo edificio no suman: se contradicen.',
        'El **fondo de imprevistos** va primero. La cuota extraordinaria solo procede cuando los recursos del fondo resultan insuficientes.',
        'La **póliza contra terremoto sobre los bienes comunes es obligatoria**, y la indemnización queda afectada en primer término a la reconstrucción. Actívela antes de contratar nada: la aseguradora suele exigir que su perito vea el daño sin intervenir.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'El detalle de mayorías, cuotas y qué se decide en asamblea está en ' +
        '[reformar en propiedad horizontal](/blog/reformar-en-propiedad-horizontal).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Nueve preguntas para quien le entregue el informe' },
    {
      tipo: 'parrafo',
      texto:
        'Un informe de dos páginas con fotos y una conclusión no sirve para ' +
        'radicar ante la Secretaría, ni para una aseguradora, ni para una ' +
        'curaduría. Estas nueve preguntas separan un documento técnico de un ' +
        'presupuesto disfrazado.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿Quién firma, con qué matrícula profesional y en qué especialidad?** Pida el número y verifíquelo. Estructuras, geotecnia y patología son especialidades distintas.',
        '**¿Qué alcance tiene esto exactamente?** ¿Es una evaluación de daño, un estudio patológico o una evaluación de vulnerabilidad sísmica? Que lo diga el informe, no la carátula.',
        '**¿Qué se pudo ver y qué no?** Un informe serio declara lo que quedó oculto tras acabados, lo que no se pudo ensayar y lo que queda pendiente de verificar.',
        '**¿Qué ensayos se hicieron, o por qué ninguno?** Esclerometría, extracción de núcleos, detección de refuerzo, apiques. Si no se hizo ninguno, que se explique la razón.',
        '**¿Cuál es la causa, y en qué se sostiene?** No basta con describir el daño. Sin causa, la reparación es una apuesta.',
        '**¿Esto es daño del sismo o venía de antes?** Es la pregunta que decide la póliza, y la que un informe honesto responde con matices en lugar de con un sí.',
        '**¿Qué hay que hacer, en qué orden y qué pasa si no se hace?** Prioridades, no una lista plana.',
        '**¿Qué recomienda respecto de la clasificación actual?** El informe debe poder radicarse para que la Secretaría reevalúe el caso. Pregunte si viene en la forma que ella pide.',
        '**¿Quién va a diseñar la solución, y es la misma persona que la va a ejecutar?** Si el que diagnostica es el que vende la obra, el diagnóstico tiene un interés adentro.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        '[Qué debe contener un informe técnico serio](/blog/que-debe-contener-un-informe-tecnico-serio) ' +
        'desarrolla cada uno de estos puntos y trae la estructura completa que ' +
        'debería tener el documento.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'En resumen' },
    {
      tipo: 'parrafo',
      texto:
        'Amarillo significa **habitabilidad restringida por un daño ' +
        'localizado**, según lo que un equipo vio a simple vista un día. No es ' +
        'una aprobación, no es una condena y no es un dictamen estructural. Lo ' +
        'que abre es una obligación concreta: contratar la evaluación ' +
        'especializada, radicarla, y sacar la licencia si la intervención lo ' +
        'pide.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Mientras tanto, respete las áreas restringidas, no toque el adhesivo, ' +
        'y si es copropiedad, active la póliza antes de contratar. Lo que no ' +
        'hay es un plazo que lo obligue — lo que hay es una agenda de ' +
        'ingenieros que se está llenando.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Cali implementará identificación por colores para orientar el uso seguro de las edificaciones',
      editor: 'Alcaldía de Santiago de Cali',
      url: 'https://www.cali.gov.co/gestiondelriesgo/publicaciones/193875/cali-implementara-identificacion-por-colores-para-orientar-el-uso-se',
      fecha: '2026-08-22',
    },
    {
      titulo: 'Preguntas frecuentes sobre los adhesivos instalados en edificaciones',
      editor: 'Alcaldía de Santiago de Cali',
      url: 'https://www.cali.gov.co/gestiondelriesgo/publicaciones/193974/preguntas-frecuentes-sobre-los-stickers-instalados-en-edificaciones-',
      fecha: '2026-08-26',
    },
    {
      titulo: 'Terremoto de Cali. Repositorio oficial de información',
      editor: 'Alcaldía de Santiago de Cali',
      url: 'https://www.cali.gov.co/gobierno/publicaciones/193607/terremoto-de-cali-repositorio-oficial-de-informacion/',
      fecha: null,
    },
    {
      titulo: 'Decreto 1171 de 2026. Por el cual se declara una Situación de Desastre de Carácter Nacional',
      editor: 'Presidencia de la República de Colombia',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=193898&dt=S',
      fecha: '2026-08-11',
    },
    {
      titulo:
        'Unifican metodología para evaluar estado de edificaciones afectadas tras el terremoto del 10 de agosto',
      editor: 'Alcaldía Mayor de Bogotá',
      url: 'https://bogota.gov.co/mi-ciudad/ambiente/gobierno-unifica-metodologia-para-evaluar-edificaciones-por-terremoto',
      fecha: '2026-08-25',
    },
    {
      titulo: 'Circulares de la UNGRD. Listado público, consultado el 5 de septiembre de 2026',
      editor: 'Unidad Nacional para la Gestión del Riesgo de Desastres',
      url: 'https://portal.gestiondelriesgo.gov.co/Paginas/Circulares.aspx',
      fecha: null,
    },
    {
      titulo:
        'Guía Técnica para la Inspección de Edificaciones después de un Sismo. Manual de Campo, 4ª edición',
      editor: 'Asociación Colombiana de Ingeniería Sísmica e IDIGER',
      url: 'https://asosismica.org.co/documentacion-evaluacion-post-sismo/',
      fecha: '2018-03-01',
    },
    {
      titulo:
        'Terremoto en Cali: buscan ingenieros especializados para revisar edificios afectados tras el sismo',
      editor: 'El País',
      url: 'https://www.elpais.com.co/cali/terremoto-en-cali-buscan-ingenieros-especializados-para-revisar-edificios-afectados-tras-el-sismo-0348.html',
      fecha: '2026-09-03',
    },
    {
      titulo:
        '¿Debe reparar o reconstruir su vivienda tras el terremoto? Alcaldía expide guía de recomendaciones',
      editor: 'El País',
      url: 'https://www.elpais.com.co/cali/su-vivienda-sufrio-danos-por-el-terremoto-estos-son-los-pasos-antes-de-iniciar-obras-en-cali-0323.html',
      fecha: '2026-09-04',
    },
    {
      titulo:
        'Actualizan cifras a 5 de septiembre del terremoto en Cali: 154 muertos, 45.139 familias damnificadas y 765 edificaciones inhabitables',
      editor: 'El País',
      url: 'https://www.elpais.com.co/cali/actualizan-cifras-a-5-de-septiembre-del-terremoto-en-cali-154-muertos-45139-familias-damnificadas-y-765-edificaciones-inhabitables-0501.html',
      fecha: '2026-09-05',
    },
    {
      titulo: 'Las cifras siguen creciendo: Cali entrega nuevo balance de los estragos que dejó el terremoto',
      editor: 'Semana',
      url: 'https://www.semana.com/nacion/cali/articulo/las-cifras-siguen-creciendo-cali-entrega-nuevo-balance-de-los-estragos-que-dejo-el-terremoto/202644/',
      fecha: '2026-08-25',
    },
    {
      titulo: 'Cali inicia reconstrucción tras el terremoto: Alcaldía traza plan de tres años',
      editor: 'El País',
      url: 'https://www.elpais.com.co/cali/cali-inicia-reconstruccion-tras-el-terremoto-alcaldia-traza-plan-de-tres-anos-2705.html',
      fecha: '2026-08-27',
    },
    {
      titulo: 'Ley 675 de 2001. Régimen de propiedad horizontal',
      editor: 'Congreso de la República de Colombia',
      url: 'https://www.sic.gov.co/sites/default/files/normatividad/Ley_675_2001.pdf',
      fecha: '2001-08-03',
    },
  ],
}
