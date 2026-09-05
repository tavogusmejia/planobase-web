import type { Post } from '@/lib/types'

/**
 * La pregunta que más se hace y peor se responde en el pilar de casa. Es la
 * hermana de «Del lote a la licencia», pero al otro lado del trámite: aquella
 * termina cuando sale la licencia, esta empieza ahí.
 *
 * La decisión de fondo, y es la que estructura todo el artículo: **no se
 * publica ninguna duración de obra en meses.** No existe fuente colombiana
 * oficial ni gremial con plazos de construcción por etapa y metodología
 * publicada; lo que circula son cifras redondas sin respaldo. Repetirlas sería
 * exactamente el error que este blog corrige en otros temas.
 *
 * Lo que sí se publica, porque está en norma:
 *
 * - Los 45 días hábiles del estudio de la licencia y el silencio administrativo
 *   positivo (Decreto 1077).
 * - Las vigencias por modalidad —36 meses solo obra nueva, 24 las demás— y la
 *   prórroga que se pide 30 días **hábiles** antes (Decreto 1783 de 2021).
 * - Las etapas de diseño y su reparto (Decreto 2090 de 1989).
 *
 * Y una tesis que se sostiene sola: **la vigencia de la licencia es el único
 * plazo de obra que el Estado colombiano se atrevió a poner por escrito.** Si
 * la norma da 36 meses para construir en obra nueva, ese es el orden de
 * magnitud que el legislador consideró razonable. No es un dato de duración,
 * pero es el único techo legal que existe, y nadie lo está usando así.
 *
 * Fechada en marzo de 2023: no cita nada posterior a 2021.
 */
export const post: Post = {
  slug: 'cuanto-tarda-construir-una-casa',
  titulo: 'Cuánto tarda construir una casa, etapa por etapa',
  pilar: 'casa-campestre',
  fecha: '2023-03-14',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Las cifras redondas que circulan —«ocho meses», «un año»— no salen de ' +
    'ninguna parte. Lo que sí existe: la secuencia real, qué depende de qué, ' +
    'y el único plazo de obra que la norma colombiana puso por escrito.',
  metaDescripcion:
    'Cuánto tarda construir una casa en Colombia, etapa por etapa: qué plazos ' +
    'fija la norma y qué depende de las decisiones del dueño.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Es la primera pregunta de casi todo el mundo y merece una respuesta ' +
        'honesta, que empieza por una advertencia incómoda.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Busque «cuánto se demora construir una casa en Colombia» y encontrará ' +
        'cifras redondas: ocho meses, diez, un año. **Ninguna cita una fuente, ' +
        'un estudio, una encuesta ni una metodología.** No hay en el país una ' +
        'estadística oficial ni gremial de duración de obra por etapas. Lo que ' +
        'circula son promedios de nada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Así que no voy a añadir una cifra más. Voy a explicar la secuencia ' +
        'real, qué depende de qué, cuáles son los plazos que sí están en norma ' +
        'y —lo más útil— **dónde se pierde el tiempo de verdad**, que casi ' +
        'nunca es donde la gente cree.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Tres relojes distintos, y solo uno tiene ley' },
    {
      tipo: 'parrafo',
      texto:
        'Un proyecto de casa tiene tres tramos que se comportan de manera ' +
        'completamente distinta, y mezclarlos es lo que produce las respuestas ' +
        'inútiles:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Tramo', 'De qué depende', '¿Tiene plazo legal?'],
      filas: [
        ['**Diseño**', 'De qué tan rápido decida usted', 'No'],
        ['**Licencia**', 'De la autoridad, con el expediente completo', '**Sí: 45 días hábiles**'],
        ['**Obra**', 'Del proyecto, del constructor, del clima y del dinero', 'No, pero la licencia le pone un techo'],
      ],
      nota:
        'El único plazo con respaldo normativo en todo el recorrido son los 45 ' +
        'días hábiles del estudio de la solicitud de licencia. Todo lo demás ' +
        'que le digan es estimación, y conviene que se lo digan así.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El tramo de diseño' },
    {
      tipo: 'parrafo',
      texto:
        'La norma de honorarios de arquitectura describe las etapas y en qué ' +
        'orden ocurren. No les pone duración —no podría—, pero sí deja claro ' +
        'qué resuelve cada una:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Esquema básico.** El delineamiento general: zonas, accesos, cómo se relacionan los ambientes. Puede hacerse incluso antes de tener el terreno definitivo.',
        '**Anteproyecto.** Plantas, cortes y fachadas suficientes para entender el edificio y decidir, **sin planos para ejecutar la obra**.',
        '**Proyecto arquitectónico.** Toda la información necesaria para que la construcción pueda ejecutarse: detalles, especificaciones y coordinación con las demás disciplinas.',
        '**Diseños técnicos.** Estructural, hidrosanitario, eléctrico y de gas, cada uno con la firma de quien la ley exige.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'El estudio de suelos y el levantamiento topográfico van **antes**, no ' +
        'en paralelo con el proyecto. El estudio de suelos condiciona la ' +
        'cimentación, la cimentación condiciona la estructura y la estructura ' +
        'condiciona la arquitectura. Encargarlo tarde obliga a rehacer hacia ' +
        'atrás, y ese rehacer no aparece en ningún cronograma.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí se puede paralelizar: suelos con topografía, y los diseños ' +
        'técnicos con el desarrollo del proyecto arquitectónico. Lo que **no**: ' +
        'la secuencia esquema básico → anteproyecto → proyecto. Cada uno ' +
        'resuelve preguntas que el siguiente da por resueltas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El tramo de licencia: aquí sí hay números' },
    {
      tipo: 'cita',
      texto:
        'Los curadores urbanos y la entidad municipal o distrital encargada del ' +
        'estudio, trámite y expedición de las licencias tendrán un plazo máximo ' +
        'de cuarenta y cinco (45) días hábiles para resolver las solicitudes […] ' +
        'Vencido este plazo se aplicará el silencio administrativo positivo.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.3.1',
    },
    {
      tipo: 'lista',
      items: [
        'Los 45 días hábiles cuentan **desde la radicación en legal y debida forma**. Un expediente incompleto no arranca el reloj.',
        'El plazo puede prorrogarse **una sola vez, hasta la mitad**, si el tamaño o la complejidad lo justifican.',
        'Si llega acta de observaciones, hay **30 días hábiles** para responder, prorrogables 15.',
        'El silencio positivo opera «en los términos solicitados», pero **nunca en contravención de las normas urbanísticas**.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Cuarenta y cinco días hábiles no son cuarenta y cinco días. Con fines ' +
        'de semana y festivos, el calendario real es sensiblemente más largo, y ' +
        'esa diferencia sorprende a mucha gente al hacer cuentas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El único plazo de obra que existe en la ley' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está el dato que nadie usa como lo que es. La norma no dice ' +
        'cuánto tarda construir una casa, pero sí dice **cuánto tiempo le da a ' +
        'usted para hacerlo antes de que la licencia se venza**:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Modalidad', 'Vigencia', 'Prórroga'],
      filas: [
        ['Urbanización, parcelación y construcción en **obra nueva**', '36 meses', 'Una vez, +12'],
        ['Construcción en modalidades **distintas** a obra nueva: ampliación, adecuación, modificación, restauración, reforzamiento, demolición', '24 meses', 'Una vez, +12'],
        ['Urbanización + parcelación + obra nueva en un mismo acto', '48 meses', 'Una vez, +12'],
        ['Subdivisión', '12 meses', 'Improrrogable'],
      ],
      nota:
        'Decreto 1783 de 2021, artículo 27. Los plazos corren desde que quedan ' +
        'en firme los actos que otorgaron la licencia, no desde que se radicó. ' +
        '**Los 36 meses no son universales**: una ampliación o un reforzamiento ' +
        'duran 24, y ese es el error más repetido del tema.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo como lo que es: **el único techo temporal que el Estado ' +
        'colombiano puso por escrito para construir.** No es una estadística de ' +
        'duración y no debe usarse como tal. Pero si su casa es obra nueva y ' +
        'alguien le plantea un cronograma que roza los treinta y seis meses, la ' +
        'norma le está diciendo que va con muy poco margen.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La prórroga se pide **a más tardar 30 días hábiles antes** del ' +
        'vencimiento —hábiles, no calendario—, con documentación completa y una ' +
        'manifestación bajo juramento de que la obra ya inició. Quien se ' +
        'acuerda el mes anterior, ya no llega.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La obra, por dependencias en vez de por meses' },
    {
      tipo: 'parrafo',
      texto:
        'Como no hay duraciones publicadas que se puedan citar, lo útil es ' +
        'entender **el encadenamiento**: qué no puede empezar hasta que termine ' +
        'qué. Eso sí se puede afirmar, porque es física y es técnica de ' +
        'construcción, no estadística.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Etapa', 'No puede empezar hasta que…', 'Qué la alarga'],
      filas: [
        ['**Preliminares**: cerramiento, campamento, replanteo, provisionales de agua y energía', 'Haya licencia en firme y acceso al predio', 'Accesos difíciles, servicios provisionales que tardan en conectarse'],
        ['**Excavación y cimentación**', 'Esté el estudio de suelos y el diseño estructural', 'Suelo peor de lo previsto, nivel freático alto, lluvia'],
        ['**Estructura**', 'La cimentación alcance resistencia', 'Los tiempos de fraguado no se negocian; el concreto tarda lo que tarda'],
        ['**Mampostería y cubierta**', 'Esté la estructura del nivel correspondiente', 'Poca cosa. Suele ser la etapa más predecible'],
        ['**Instalaciones**: hidrosanitaria, eléctrica, gas', 'Estén los muros levantados y antes de pañetar', 'Cambios de última hora en la ubicación de puntos'],
        ['**Pañetes, enchapes y pisos**', 'Estén las instalaciones probadas y tapadas', 'Reprocesos por instalaciones mal probadas antes de tapar'],
        ['**Carpintería, aparatos y acabados**', 'Estén los pisos', '**Aquí es donde casi siempre se atrasa**: importaciones, hechuras a medida y decisiones sin tomar'],
        ['**Pruebas, conexiones definitivas y entrega**', 'Esté todo lo anterior', 'Certificaciones y trámites de conexión con los prestadores'],
      ],
      nota:
        'Cada casilla de esta tabla es una relación de precedencia, no una ' +
        'duración. Un cronograma serio se construye poniéndole tiempos a estas ' +
        'dependencias con las cantidades reales del proyecto, no aplicando un ' +
        'promedio nacional que no existe.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Dónde se pierde el tiempo de verdad' },
    { tipo: 'titulo', nivel: 3, texto: '1. El anteproyecto que no se cierra' },
    {
      tipo: 'parrafo',
      texto:
        'Es, con diferencia, el punto donde más tiempo se va, y el que nadie ' +
        'contabiliza porque no lo produce ningún trámite. Un anteproyecto que ' +
        'va y vuelve seis veces consume más semanas que la licencia y la ' +
        'cimentación juntas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La causa casi nunca es el arquitecto: es que **la decisión no está ' +
        'tomada**. Si en la casa hay dos personas que quieren cosas distintas, ' +
        'el plano no lo va a resolver.',
    },
    { tipo: 'titulo', nivel: 3, texto: '2. Los acabados que se deciden en obra' },
    {
      tipo: 'parrafo',
      texto:
        'Enchapes, griferías, carpintería, iluminación. Decidirlos cuando ya ' +
        'hay que instalarlos convierte cada elección en una parada. Y lo que se ' +
        'pide a medida o se importa tiene un tiempo de entrega que no depende ' +
        'de nadie en la obra.',
    },
    {
      tipo: 'nota',
      texto:
        'La regla práctica: **todo lo que tenga tiempo de entrega largo se ' +
        'decide y se pide durante la estructura**, no cuando llega su turno en ' +
        'el cronograma.',
    },
    { tipo: 'titulo', nivel: 3, texto: '3. El cambio a mitad de obra' },
    {
      tipo: 'parrafo',
      texto:
        'Mover un baño después de fundida la placa no es una modificación: es ' +
        'demoler, rehacer y volver a probar. Y si el cambio afecta lo aprobado ' +
        'en la licencia, además hay que tramitar una modificación de licencia, ' +
        'con su propio plazo.',
    },
    { tipo: 'titulo', nivel: 3, texto: '4. El flujo de caja' },
    {
      tipo: 'parrafo',
      texto:
        'Es la causa de atraso más frecuente y la que menos se nombra en voz ' +
        'alta. Una obra que se detiene por falta de pago no se reanuda donde ' +
        'quedó: hay que volver a movilizar personal, y el rendimiento de las ' +
        'primeras semanas nunca es el mismo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué preguntar para que le den un plazo creíble' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿El plazo arranca desde la firma o desde la licencia en firme?** Son dos fechas muy distintas.',
        '**¿Son días calendario o hábiles?** En obra suelen ser calendario; en trámites, hábiles.',
        '**¿Qué supone ese cronograma sobre mis decisiones?** Un plazo serio dice en qué semana necesita que usted haya escogido los acabados.',
        '**¿Qué pasa si llueve?** Debe estar dicho: cuántos días de lluvia asume y qué ocurre si se exceden.',
        '**¿Qué actividades están en la ruta crítica?** Si no le pueden nombrar tres, no hay cronograma, hay un número.',
        '**¿Cuándo vence la licencia?** Es el techo real, y determina cuánto margen queda para imprevistos.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Un constructor que responde estas seis sin incomodarse le está ' +
        'diciendo algo más importante que su plazo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La respuesta honesta' },
    {
      tipo: 'parrafo',
      texto:
        'No hay un número nacional y quien se lo dé no lo sacó de ninguna ' +
        'parte. Lo que hay es una secuencia con dependencias reales, un plazo ' +
        'legal de cuarenta y cinco días hábiles para la licencia y un techo de ' +
        'vigencia que la norma fija según la modalidad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay una pregunta que sí se puede responder desde el primer día, que ' +
        'es la que de verdad importa: **qué depende de usted y cuándo tiene que ' +
        'decidirlo.** De eso, más que de cualquier otra cosa, depende cuánto ' +
        'tarda su casa.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'licencia', 'contrato', 'costos'],
  fuentes: [
    {
      titulo: 'Decreto 1077 de 2015, plazos y trámite de las licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1783 de 2021, artículo 27: vigencia de las licencias',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175086',
      fecha: '2021-12-20',
    },
    {
      titulo: 'Decreto 2090 de 1989, etapas del servicio de arquitectura',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo: 'Ley 400 de 1997, estudios geotécnicos y diseño estructural',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
  ],
}
