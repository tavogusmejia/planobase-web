import type { Post } from '@/lib/types'

/**
 * La tercera pieza del pilar institucional, y la más operativa de las tres.
 * «Concursos públicos de arquitectura» explica el régimen de selección;
 * «Interventoría de obra pública» explica el de vigilancia; esta explica el
 * documento.
 *
 * El ángulo, y lo que la separa de los cientos de resúmenes de la Ley 80 que
 * ya hay publicados: **no describe la ley, describe qué mirar en un pliego
 * antes de decidir si presentarse.** El lector no quiere saber qué es una
 * licitación; quiere saber si le da la experiencia, si el cronograma es real y
 * dónde está la condición que lo va a dejar fuera sin que se note.
 *
 * Dos hallazgos verificados sostienen la pieza y no los he visto explicados
 * bien en ninguna parte:
 *
 * 1. **Los corchetes resaltados en gris.** Con documentos tipo, el 90 % del
 *    pliego es texto inalterable de Colombia Compra Eficiente. Lo único que la
 *    entidad escribió está entre corchetes — y ahí está, literalmente, todo lo
 *    que distingue este proceso de cualquier otro. Es la mejor técnica de
 *    lectura rápida que existe y sale del propio ABC de la agencia.
 * 2. **La línea de la subsanabilidad.** Lo habilitante se subsana hasta el
 *    traslado del informe de evaluación; **lo que otorga puntaje no se subsana
 *    nunca.** Eso convierte al capítulo de puntaje en el único que hay que
 *    tener perfecto el día del cierre, y casi nadie lo trata así.
 *
 * Coordinación con las otras dos piezas del pilar: aquí no se repite la
 * distinción entre concurso de arquitectura y concurso de méritos —es del
 * artículo de concursos— ni la de supervisión e interventoría —es del de
 * interventoría—. Las dos se enlazan.
 *
 * Sobre el procedimiento del concurso de méritos: se cita el texto **vigente**
 * del Decreto 1082, que es el que le dio el artículo 2 del Decreto 399 de 2021.
 * Lo que sigue intacto y es de ley es la regla de la Ley 1150: el precio no
 * puede ser factor de escogencia para seleccionar consultores.
 *
 * Lo que se declara no verificado dentro del artículo: los puntajes concretos
 * —cambian con cada versión del documento base y con lo que la entidad
 * diligencie—, el articulado de las resoluciones distintas de la 539 de 2025, y
 * la operación de la plataforma de contratación, que ya se había declarado
 * fuera en la pieza de concursos.
 *
 * Fechada el 5 de septiembre de 2026.
 */
export const post: Post = {
  slug: 'pliegos-de-un-equipamiento-publico',
  titulo: 'Cómo se estructuran los pliegos de un equipamiento público',
  pilar: 'institucional',
  fecha: '2026-05-25',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Ochenta páginas y una sola decisión: presentarse o no. Cómo está armado ' +
    'un pliego tipo, en qué orden conviene leerlo y dónde están las ' +
    'condiciones que descalifican sin que se note.',
  metaDescripcion:
    'Cómo leer un pliego de obra pública en Colombia: documentos tipo, ' +
    'experiencia, puntaje, subsanabilidad y causales de rechazo.',
  puerta: 'espacio-publico-y-equipamientos',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Un pliego de un equipamiento público tiene entre setenta y cien ' +
        'páginas, más anexos, más matrices en Excel, más formatos. Y usted ' +
        'tiene que sacar de ahí una sola decisión: **presentarse o no.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'La mayoría de los equipos lo lee de principio a fin, se cansa en el ' +
        'capítulo tercero y decide con lo que alcanzó a ver. Es la peor forma ' +
        'posible, porque lo que decide está repartido en cuatro sitios y ' +
        'ninguno es el principio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Desde 2026, casi todos los pliegos son el mismo pliego' },
    {
      tipo: 'parrafo',
      texto:
        'Esto cambió la forma de leer. Desde la Ley 2022 de 2020, la agencia ' +
        'nacional de contratación adopta **documentos tipo** de obligatorio ' +
        'cumplimiento para las entidades sometidas al estatuto general de ' +
        'contratación. Ya no son pliegos escritos entidad por entidad: son ' +
        'formularios.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y el paquete que toca a la arquitectura pública es el de ' +
        '**Documentos Tipo de Infraestructura Social**, cuya versión vigente ' +
        'adoptó la Resolución 539 de 2025 —junto con otras resoluciones del ' +
        'mismo paquete para las demás modalidades— y que **se aplica a los ' +
        'procesos cuyo aviso de convocatoria se publique desde el 16 de ' +
        'febrero de 2026**. Cubre cinco subsectores: educación, salud, ' +
        'recreación y deporte, infraestructura institucional y vivienda. Es ' +
        'decir: colegios, centros de salud, escenarios deportivos, sedes ' +
        'administrativas.',
    },
    {
      tipo: 'nota',
      texto:
        'De aquí sale la técnica de lectura más útil que conozco. Los ' +
        'documentos tipo tienen **regla de inalterabilidad**: la entidad no ' +
        'puede modificar los requisitos habilitantes, los factores de ' +
        'escogencia ni los sistemas de ponderación. Lo único que puede ' +
        'diligenciar son **los espacios entre corchetes y resaltados en gris**. ' +
        'Así que abra el documento base, busque los corchetes y léalos ' +
        'primero: ahí está, literalmente, todo lo que distingue este proceso ' +
        'de cualquier otro del país. El resto es texto que ya leyó una vez y ' +
        'no va a cambiar.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las cinco piezas de un pliego tipo' },
    {
      tipo: 'tabla',
      cabeceras: ['Pieza', 'Qué es', 'Qué se busca en ella'],
      filas: [
        ['**Documento base**', 'El pliego propiamente dicho: lo transversal a todos los procesos y sectores', 'Causales de rechazo, reglas de subsanabilidad, criterios de evaluación y desempate'],
        ['**Anexos**', 'Lo que la entidad adapta a su proceso', 'Anexo técnico —el alcance real de la obra—, cronograma y minuta del contrato'],
        ['**Formatos**', 'Lo que usted diligencia y firma; hacen parte de su oferta', 'Carta de presentación, experiencia, capacidad financiera y residual, y los formatos de cada factor de puntaje'],
        ['**Matrices**', 'Archivos en Excel que estandarizan lo que depende del sector', 'La matriz de experiencia y la de indicadores financieros; la de riesgos'],
        ['**Formulario**', 'La oferta económica y su presupuesto', 'El presupuesto oficial, ítem por ítem'],
      ],
      nota:
        'Estructura descrita por la propia agencia en su ABC de los ' +
        'documentos tipo. La numeración de anexos y formatos varía entre ' +
        'sectores y versiones.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La pieza que la gente subestima es **la matriz de experiencia**. Es ' +
        'un Excel, no se ve como parte del pliego y sin embargo es la que ' +
        'determina qué experiencia va a verificar la entidad según el tipo de ' +
        'obra, la actividad concreta y la cuantía. Si la abre tarde, la abre ' +
        'cuando ya no hay tiempo de conseguir un certificado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El orden en que conviene leerlo' },
    {
      tipo: 'parrafo',
      texto:
        'No es el orden del índice. Es el orden de la decisión, de lo que ' +
        'descarta más rápido a lo que descarta más despacio:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El cronograma.** Es un anexo, no un capítulo, y define el cierre, la visita al sitio de la obra y las ventanas de observación. Si no le alcanza el tiempo, ahí terminó la lectura.',
        '**La experiencia.** Capítulo de requisitos habilitantes, más la matriz de experiencia. Es donde se cae la mayoría, y se sabe en veinte minutos.',
        '**La capacidad financiera y organizacional.** Los indicadores de la matriz, contra sus estados financieros del año que exija el proceso. Son aritmética: da o no da.',
        '**Los factores de puntaje.** Aquí no se trata de si puede, sino de cuánto va a sacar. Y es lo único del pliego que **no se puede corregir después**.',
        '**Las causales de rechazo.** Están al principio del documento base y casi nadie las lee, porque suenan a formalidad. No lo son.',
        '**El anexo técnico y el presupuesto oficial.** Qué obra es de verdad, con qué cantidades y con qué precios. Es la parte que decide si el contrato se puede ejecutar sin perder plata.',
        '**La matriz de riesgos y la minuta del contrato.** Qué le trasladaron a usted, qué garantías le van a pedir y cómo le van a pagar.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'El orden importa porque cada paso es más caro que el anterior. Leer ' +
        'el anexo técnico de un proceso al que no puede presentarse por ' +
        'experiencia son dos días de trabajo de alguien. **Si el paso 2 no da, ' +
        'no hay paso 3.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La experiencia: donde se cae la mayoría' },
    {
      tipo: 'parrafo',
      texto:
        'La experiencia se acredita con tres cosas a la vez: lo que está ' +
        'inscrito en el **registro único de proponentes**, el formato de ' +
        'experiencia que usted diligencia, y los documentos que soporten lo ' +
        'que el registro no alcance a probar. La evaluación se hace sobre el ' +
        'registro **vigente y en firme antes del cierre**, no sobre lo que ' +
        'usted haya ejecutado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y no basta con haber hecho obra. El pliego separa **actividad ' +
        'principal y actividades secundarias**, y dentro de la principal, ' +
        '**experiencia general y experiencia específica**. Un proceso de una ' +
        'institución educativa puede pedir, como experiencia general, ' +
        'construcción o ampliación o remodelación de edificaciones; y como ' +
        'específica, que al menos uno de esos contratos tenga un área ' +
        'intervenida igual o superior a un porcentaje del área del proceso. ' +
        'Las secundarias van aparte: cubiertas, redes de datos, lo que el ' +
        'anexo técnico exija.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La segunda condición es de valor, y funciona al revés de como la ' +
        'gente supone: **entre más contratos use para acreditar, más valor ' +
        'total tiene que sumar.** No se premia juntar papeles.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Contratos con los que acredita', 'Valor mínimo a certificar'],
      filas: [
        ['De 1 hasta 2', '75 % del presupuesto oficial'],
        ['De 3 hasta 4', '120 % del presupuesto oficial'],
        ['Hasta 5', '150 % del presupuesto oficial'],
      ],
      nota:
        'Ejemplo tomado de un documento base real de licitación de obra ' +
        'pública de infraestructura social. Los porcentajes y el número máximo ' +
        'de contratos dependen de la versión del documento tipo, y hay ' +
        'contratos adicionales para mipymes y para empresas de mujeres. ' +
        'Verifíquelos en el pliego de su proceso.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos detalles que se pasan por alto. El primero: **la suma se hace en ' +
        'salarios mínimos, no en pesos.** Un contrato de hace ocho años vale ' +
        'menos de lo que usted recuerda. El segundo: si no diligencia el ' +
        'formato de experiencia, la entidad no lo rechaza de entrada —le pide ' +
        'que subsane—, pero si no subsana evalúa con los contratos de mayor ' +
        'valor que usted haya aportado, que casi nunca son los que a usted le ' +
        'servían.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué se puede subsanar y qué no' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la línea más importante de todo el pliego, y la que más ' +
        'sorpresas caras produce:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Se subsana', 'No se subsana'],
      filas: [
        ['**Qué**', 'Los requisitos que habilitan pero no dan puntaje', 'Todo lo que afecte la asignación de puntaje, incluidos los documentos de desempate'],
        ['**Hasta cuándo**', 'Hasta el término de traslado del informe de evaluación', 'Tenía que estar en la oferta el día del cierre'],
        ['**Qué sí se puede después**', 'Aportar el documento que faltaba', 'Aclarar o explicar lo aportado, pero no aportarlo'],
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y hay un límite que cierra la puerta a la creatividad: **durante el ' +
        'término para subsanar no se pueden acreditar circunstancias ' +
        'ocurridas después del cierre.** No sirve conseguir el certificado ' +
        'nuevo, ni inscribir la experiencia en el registro esa semana. Lo que ' +
        'no existía el día del cierre no existe.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las condiciones que descalifican sin que se note' },
    {
      tipo: 'parrafo',
      texto:
        'Las causales de rechazo suenan a trámite hasta que le pasan. Estas ' +
        'son las que he visto tumbar propuestas técnicamente buenas:',
    },
    {
      tipo: 'lista',
      items: [
        '**El registro de proponentes no está en firme el día del cierre.** Inscribirse no basta: la inscripción tiene que estar en firme, y eso toma tiempo.',
        '**No renovó el registro** a más tardar el quinto día hábil de abril. Si no lo hizo, sus efectos cesaron y usted está fuera de todos los procesos del año hasta que se reinscriba.',
        '**El objeto social no le permite ejecutar el objeto del contrato**, o el de alguno de los integrantes de la unión temporal. Es un párrafo del certificado de existencia y se arregla con una reforma de estatutos, meses antes.',
        '**No entregó la garantía de seriedad junto con la propuesta.** Esta no se subsana, y la ley lo dice expresamente.',
        '**La oferta excede el presupuesto oficial.** Aunque sea por poco, y aunque el resto sea impecable.',
        '**Tachaduras o enmendaduras sin convalidar** en documentos de requisitos habilitantes o de evaluación.',
        '**Modificó el formulario de presupuesto**: añadió, quitó o cambió ítems, descripciones, unidades o cantidades. El formulario se diligencia, no se mejora.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Las tres primeras tienen algo en común: **no se resuelven en la ' +
        'semana del cierre.** Son trabajo de meses antes, y son exactamente lo ' +
        'que separa a un equipo que se presenta cuando sale el proceso de uno ' +
        'que se prepara para presentarse.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los plazos: los del proceso y el de la obra' },
    {
      tipo: 'parrafo',
      texto:
        'Hay dos clases de plazo en un pliego y conviene no confundirlas. Los ' +
        'del proceso están reglados y son los mismos en todo el país:',
    },
    {
      tipo: 'lista',
      items: [
        'Observaciones al proyecto de pliego: **diez días hábiles en licitación pública** y **cinco días hábiles en selección abreviada y concurso de méritos**, desde su publicación.',
        'En concurso de méritos, el informe de evaluación se publica **tres días hábiles** y debe contener tanto los requisitos habilitantes como la asignación de puntaje.',
        'La **visita al sitio de la obra** tiene fecha y hora fijadas en el cronograma. Puede ir un delegado con matrícula profesional, no tiene que ir el representante legal.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'El otro plazo, el de ejecución, no está reglado: lo puso la entidad. ' +
        'Y es el que más contratos arruina. Señales de que un plazo no es ' +
        'real:',
    },
    {
      tipo: 'lista',
      items: [
        '**El cronograma no reconoce la temporada de lluvias** del sitio. En buena parte del país eso son dos ventanas al año, no una molestia.',
        '**El plazo incluye trámites que no dependen del contratista**: licencias, permisos de vertimientos, servidumbres, aprobación de la empresa de servicios. Si eso está dentro del plazo y no está resuelto, el retraso será suyo.',
        '**No hay tiempo de aprobación de diseños o de estudios** entre la firma y el inicio de obra, cuando el objeto los incluye.',
        '**El anticipo no está previsto o se paga tarde**, y el flujo de caja del primer trimestre depende de que usted lo financie.',
        '**El plazo es igual al de un proceso anterior de la misma entidad que se prorrogó dos veces.** Eso es público y se puede consultar.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Si el objeto es diseño, el pliego es otro' },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior describe un pliego de obra. Cuando el objeto son ' +
        'estudios y diseños, la modalidad cambia: es **concurso de méritos**, ' +
        'y con ella cambia la regla más importante — **el precio no puede ser ' +
        'factor de escogencia para seleccionar consultores.** Cómo funciona ' +
        'esa modalidad por dentro está en [el artículo sobre concursos ' +
        'públicos de arquitectura](/blog/concursos-publicos-de-arquitectura).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí conviene tener presente al leer un pliego de concurso de ' +
        'méritos: el reglamento obliga a la entidad a indicar cómo calificará, ' +
        'entre otros, **la experiencia del interesado, la del equipo de ' +
        'trabajo y la formación académica del equipo**. Eso significa que las ' +
        'hojas de vida no son un anexo administrativo: son parte del puntaje, ' +
        'y por tanto no son subsanables.',
    },
    {
      tipo: 'nota',
      texto:
        'La interventoría también es consultoría y también va por concurso de ' +
        'méritos, con las mismas consecuencias. El régimen que la gobierna ' +
        'está en [interventoría de obra pública]' +
        '(/blog/interventoria-de-obra-publica).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La decisión, en cinco preguntas' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿El registro de proponentes está en firme, renovado y con la experiencia bien clasificada?** Si la respuesta no es un sí rotundo, el resto no importa.',
        '**¿Los contratos que va a aportar suman el porcentaje exigido, en salarios mínimos, y cumplen la actividad principal y las secundarias?**',
        '**¿Los indicadores financieros dan con los estados que el proceso exige?**',
        '**¿Qué puntaje realista saca, y qué formatos de puntaje tiene que tener listos el día del cierre?** Recuerde: esos no se subsanan.',
        '**¿El plazo y el presupuesto oficial permiten ejecutar la obra sin perder plata?** Esta se responde con el anexo técnico y el formulario de presupuesto, no con el resumen del proceso.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que este artículo no dice' },
    {
      tipo: 'parrafo',
      texto:
        'Declaro los huecos, como en el resto del blog:',
    },
    {
      tipo: 'lista',
      items: [
        '**No doy los puntajes concretos de cada factor.** Cambian con la versión del documento base y con lo que la entidad diligencie dentro de los rangos permitidos. Lo que sí es estable son las familias de factores: oferta económica, calidad, sostenibilidad, apoyo a la industria nacional, vinculación de personas con discapacidad, emprendimientos y empresas de mujeres, y mipymes.',
        '**Verifiqué el articulado de la Resolución 539 de 2025**, que adoptó la versión vigente de los documentos tipo de licitación de obra pública de infraestructura social. Las otras resoluciones del mismo paquete, para las demás modalidades, las tomo del anuncio oficial de la agencia y no de su texto.',
        '**Los ejemplos numéricos de experiencia salen de un documento base real**, no de la versión vigente para su proceso. Sirven para entender la mecánica, no para calcular.',
        '**No describo la operación de la plataforma de contratación.** Cambia con sus versiones y no la verifiqué contra documentación oficial vigente.',
        '**No entro en el régimen de las entidades de régimen especial**, que aplican los documentos tipo solo cuando la ley las obliga.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La conclusión práctica es incómoda y por eso vale la pena decirla: ' +
        '**un pliego no se gana leyéndolo bien, se gana estando listo antes de ' +
        'que salga.** El registro en orden, los certificados con áreas y ' +
        'modalidad, los indicadores al día y los formatos de puntaje ' +
        'preparados. Lo que se decide leyendo es solo si vale la pena gastar ' +
        'las tres semanas siguientes.',
    },
  ],
  etiquetas: ['nacional', 'entidad', 'constructora', 'contrato'],
  fuentes: [
    {
      titulo: 'Ley 80 de 1993, estatuto general de contratación de la administración pública',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=304',
      fecha: '1993-10-28',
    },
    {
      titulo: 'Ley 1150 de 2007, modalidades de selección y factores de evaluación',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=184686',
      fecha: '2007-07-16',
    },
    {
      titulo:
        'Ley 1882 de 2018, artículo 5: subsanabilidad y garantía de seriedad de la oferta',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=84899',
      fecha: '2018-01-15',
    },
    {
      titulo: 'Ley 2022 de 2020, documentos tipo de obligatoria aplicación',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=136375',
      fecha: '2020-07-22',
    },
    {
      titulo:
        'Decreto 1082 de 2015, artículos 2.2.1.1.2.1.4 (observaciones al proyecto de pliego) y 2.2.1.2.1.3.2 (procedimiento del concurso de méritos)',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608',
      fecha: '2015-05-26',
    },
    {
      titulo:
        'Documentos Tipo de Infraestructura Social: nueva versión aplicable desde el 16 de febrero de 2026',
      editor: 'Agencia Nacional de Contratación Pública · Colombia Compra Eficiente',
      url: 'https://www.colombiacompra.gov.co/archivos/26775',
      fecha: '2026-02-16',
    },
    {
      titulo: 'ABC de los documentos tipo adoptados por la agencia',
      editor: 'Agencia Nacional de Contratación Pública · Colombia Compra Eficiente',
      url: 'https://www.colombiacompra.gov.co/wp-content/uploads/2024/09/abc_de_los_documentos_tipos.pdf',
      fecha: null,
    },
    {
      titulo:
        'Documento base de licitación de obra pública de infraestructura social (CCE-EICP-GI-14)',
      editor: 'Agencia Nacional de Contratación Pública · Colombia Compra Eficiente',
      url: 'https://www.colombiacompra.gov.co/normativa-y-relatoria/documentos-tipo',
      fecha: null,
    },
  ],
}
