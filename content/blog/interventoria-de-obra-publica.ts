import type { Post } from '@/lib/types'

/**
 * El equivalente público de «Interventoría: por qué el que construye no puede
 * ser el que vigila». Aquella explica el régimen privado; esta explica por qué
 * en lo público la independencia dejó de ser una buena práctica y pasó a ser
 * un régimen de responsabilidad con cuatro frentes.
 *
 * La distinción que estructura el artículo, y que casi nadie enuncia bien
 * fuera del derecho administrativo: **supervisión e interventoría no son
 * sinónimos.** La supervisión la ejerce la propia entidad con su personal; la
 * interventoría se contrata con un tercero cuando el seguimiento exige
 * conocimiento especializado. Confundirlas produce contratos mal estructurados
 * y responsabilidades mal repartidas.
 *
 * La segunda tesis: **la interventoría es consultoría**, y por eso se
 * selecciona por concurso de méritos, donde el precio no puede ser factor de
 * escogencia. Esa regla explica por qué una interventoría pública no se
 * adjudica al más barato, y es la que más sorprende a quien viene del sector
 * privado.
 *
 * Lo que se dejó fuera por no estar verificado en el repositorio: la mecánica
 * operativa de SECOP II, la estructura del RUP y el régimen de capacidad
 * residual. Son materia de la pieza de concursos y de pliegos, no de esta, y
 * publicar detalles de procedimiento sin verificar sería exactamente el error
 * que este blog corrige en otros temas.
 *
 * Fechada en agosto de 2025.
 */
export const post: Post = {
  slug: 'interventoria-de-obra-publica',
  titulo: 'Interventoría de obra pública: marco normativo',
  pilar: 'institucional',
  fecha: '2025-08-13',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Supervisión e interventoría no son lo mismo, y la diferencia decide quién ' +
    'responde. El régimen que las separa, por qué la interventoría se ' +
    'contrata por concurso de méritos y hasta dónde llega su responsabilidad.',
  metaDescripcion:
    'Marco normativo de la interventoría de obra pública en Colombia: ' +
    'supervisión, interventoría, selección por concurso y responsabilidad.',
  puerta: 'espacio-publico-y-equipamientos',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'En obra privada, la interventoría es una decisión del propietario: se ' +
        'contrata porque conviene. En obra pública no es una decisión, es un ' +
        'régimen — y uno bastante más duro de lo que parece desde afuera.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La confusión de partida, que produce contratos mal estructurados y ' +
        'responsabilidades mal repartidas, es creer que supervisión e ' +
        'interventoría son dos palabras para lo mismo. No lo son, y la ley las ' +
        'define por separado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Dos figuras, no una' },
    {
      tipo: 'cita',
      texto:
        'La supervisión consistirá en el seguimiento técnico, administrativo, ' +
        'financiero, contable y jurídico que sobre el cumplimiento del objeto ' +
        'del contrato, es ejercida por la misma entidad estatal cuando no ' +
        'requieren conocimientos especializados. […] La interventoría consistirá ' +
        'en el seguimiento técnico que sobre el cumplimiento del contrato ' +
        'realice una persona natural o jurídica contratada para tal fin por la ' +
        'entidad estatal, cuando el seguimiento del contrato suponga ' +
        'conocimiento especializado en la materia, o cuando la complejidad o la ' +
        'extensión del mismo lo justifiquen.',
      fuente: 'Ley 1474 de 2011, artículo 83',
    },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Supervisión', 'Interventoría'],
      filas: [
        ['**Quién la ejerce**', 'La propia entidad, con su personal o con apoyo', 'Un tercero contratado para eso'],
        ['**Cuándo**', 'Cuando no hace falta conocimiento especializado', 'Cuando sí, o cuando la complejidad o la extensión lo justifican'],
        ['**Alcance típico**', 'Técnico, administrativo, financiero, contable y jurídico', 'Técnico, y puede ampliarse a lo demás si el contrato lo prevé'],
        ['**Cómo se contrata**', 'No se contrata: se designa', '**Concurso de méritos**, porque es consultoría'],
      ],
      nota:
        'La ley permite que en un mismo contrato concurran las dos figuras, ' +
        'repartiendo materias, siempre que no haya duplicidad ni vacío en el ' +
        'seguimiento. Lo que no permite es que la interventoría quede sin ' +
        'nadie a cargo.',
    },
    {
      tipo: 'nota',
      texto:
        'La consecuencia práctica de la distinción: **cuando hay interventoría ' +
        'contratada, el supervisor de la entidad no desaparece.** Sigue ' +
        'existiendo la relación con la entidad, y una buena parte de los ' +
        'problemas de obra pública nace de que nadie tuvo claro quién decidía ' +
        'qué.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La interventoría es consultoría, y eso lo cambia todo' },
    {
      tipo: 'parrafo',
      texto:
        'El estatuto de contratación clasifica expresamente la interventoría ' +
        'como **contrato de consultoría**, junto con la asesoría, la gerencia ' +
        'de obra o de proyectos, la dirección, la programación y la ejecución ' +
        'de diseños, planos, anteproyectos y proyectos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y los contratos de consultoría se seleccionan por **concurso de ' +
        'méritos**, que es una de las modalidades de selección del estatuto. De ' +
        'ahí sale la regla que más sorprende a quien viene del sector privado:',
    },
    {
      tipo: 'nota',
      texto:
        '**En la selección de consultores no se puede incluir el precio como ' +
        'factor de escogencia.** Se evalúan la experiencia del proponente, la ' +
        'experiencia del equipo de trabajo y la calidad técnica de la ' +
        'propuesta. El valor se negocia después, con el proponente ubicado en ' +
        'primer lugar. Una interventoría pública no se adjudica al más barato ' +
        'porque la ley lo prohíbe.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La razón de fondo es la misma que sostiene toda la figura: **si se ' +
        'compra vigilancia al precio más bajo, se compra menos vigilancia.** El ' +
        'legislador lo reconoció y sacó el precio de la ecuación.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La responsabilidad: cuatro frentes a la vez' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está la diferencia real con la interventoría privada, y es de ' +
        'grado, no de matiz. El estatuto anticorrupción estableció que los ' +
        'interventores responden **civil, fiscal, penal y disciplinariamente**, ' +
        'y no solo por incumplir su propio contrato de interventoría: también ' +
        'por los hechos u omisiones que les sean imputables y causen daño a la ' +
        'entidad, derivados de la celebración y ejecución de los contratos ' +
        'sobre los que ejercieron la interventoría.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo despacio, porque es un alcance inusual: **el interventor ' +
        'responde por lo que hizo mal el contratista de obra, si su omisión lo ' +
        'permitió.** No es un observador con opinión; es un garante.',
    },
    {
      tipo: 'lista',
      items: [
        '**Civil:** por el daño patrimonial causado.',
        '**Fiscal:** ante la Contraloría, por el detrimento de recursos públicos.',
        '**Penal:** por los delitos contra la administración pública en que pueda incurrir.',
        '**Disciplinaria:** cuando ejerce funciones públicas, con el régimen que le corresponde.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y una obligación que conviene subrayar porque es la que más se ' +
        'incumple: **el interventor está obligado a informar a la entidad los ' +
        'hechos que puedan constituir actos de corrupción o incumplimientos ' +
        'contractuales.** Callar no es neutralidad: es una omisión imputable.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La independencia, aquí, es inhabilidad' },
    {
      tipo: 'parrafo',
      texto:
        'En obra privada, que el interventor dependa del constructor es un mal ' +
        'diseño de incentivos. En obra pública, el régimen de inhabilidades e ' +
        'incompatibilidades lo convierte en una prohibición: **quien ejecuta la ' +
        'obra, y su entorno cercano, no puede ser también quien la vigila.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'La lógica es idéntica a la del régimen de licencias, donde el revisor ' +
        'independiente de los diseños estructurales no puede ser el mismo ' +
        'profesional que los elaboró **ni tener relación laboral o contractual ' +
        'con él**. Ese nivel de detalle solo se escribe cuando alguien ya ' +
        'intentó lo contrario.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La continuidad: un problema que la ley tuvo que resolver' },
    {
      tipo: 'parrafo',
      texto:
        'Un problema clásico de obra pública: el contrato de obra se prorroga y ' +
        'el de interventoría no, y la obra queda sin vigilancia justo en el ' +
        'tramo en que más falta hace. El estatuto anticorrupción lo resolvió ' +
        'permitiendo que el contrato de interventoría se prorrogue por el mismo ' +
        'plazo que el contrato vigilado.',
    },
    {
      tipo: 'nota',
      texto:
        'Es una regla de sentido común escrita en una ley, que es la forma en ' +
        'que quedan escritas las reglas de sentido común cuando su ausencia ha ' +
        'costado dinero público.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué se le exige a la interventoría, en la práctica' },
    {
      tipo: 'parrafo',
      texto:
        'Las funciones concretas las fija cada contrato, pero el núcleo es el ' +
        'mismo en cualquier obra, pública o privada:',
    },
    {
      tipo: 'lista',
      items: [
        '**Verificar que lo construido corresponda a lo diseñado**, y que los materiales sean los especificados.',
        '**Controlar cantidades.** Lo que se factura debe estar en obra.',
        '**Exigir y archivar ensayos**: resistencia del concreto, compactación, calidad del acero.',
        '**Revisar el cronograma** y documentar los atrasos cuando ocurren, no cuando se reclaman.',
        '**Autorizar o rechazar las actas parciales de pago.** Es la función que le da poder real: un interventor sin autoridad sobre los pagos es un observador caro.',
        '**Dejar constancia escrita.** Bitácora, actas y registro fotográfico fechado. En lo público, además, es lo que se le exhibe a la Contraloría.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no cambia por ser obra pública' },
    {
      tipo: 'parrafo',
      texto:
        'Dos obligaciones del régimen general de construcción aplican igual, y ' +
        'suelen olvidarse porque se piensan como cosa de vivienda privada:',
    },
    {
      tipo: 'lista',
      items: [
        '**La supervisión técnica independiente** de las edificaciones cuyo predio permita superar los 2.000 m² de área construida, que es distinta de la interventoría contractual y viene del régimen de construcciones sismo resistentes.',
        '**La revisión independiente de los diseños estructurales**, por un profesional distinto del diseñador e independiente laboralmente de él.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Son figuras del régimen de edificaciones, no del estatuto de ' +
        'contratación, y conviven con la interventoría. Un equipamiento público ' +
        'puede necesitar las tres a la vez, y son tres contratos distintos.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánto vale, y por qué esa pregunta está mal hecha' },
    {
      tipo: 'parrafo',
      texto:
        'La referencia técnica colombiana de honorarios sigue siendo la norma de ' +
        '1989 —4,0 % del costo real de la obra en vivienda, restauración y ' +
        'reformas; 2,5 % en las demás categorías—, que **ya no obliga**: decayó ' +
        'al derogarse la norma que le daba fundamento, y el Consejo de Estado ' +
        'lo confirmó en 2020.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Pero en obra pública la pregunta por el precio llega en otro momento. ' +
        'Como la interventoría se selecciona por concurso de méritos y el ' +
        'precio no puede ser factor de escogencia, **el valor no es lo que ' +
        'decide quién gana**: es lo que se revisa y se acuerda con quien quedó ' +
        'primero por calidad técnica.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La idea que sostiene todo el régimen' },
    {
      tipo: 'parrafo',
      texto:
        'Es la misma de la obra privada, escrita con más consecuencias: **nadie ' +
        'encuentra sus propios errores con el mismo entusiasmo con que ' +
        'encuentra los ajenos**, sobre todo si corregirlos le cuesta.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En un contrato entre particulares, eso se resuelve con un buen ' +
        'contrato. Cuando el dinero es público, el legislador no se conformó ' +
        'con eso: separó las figuras, prohibió que el precio decidiera, ' +
        'estableció inhabilidades y puso al interventor a responder en cuatro ' +
        'frentes a la vez.',
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
      titulo: 'Ley 1150 de 2007, modalidades de selección y selección de consultores',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=184686',
      fecha: '2007-07-16',
    },
    {
      titulo: 'Ley 1474 de 2011, estatuto anticorrupción: supervisión, interventoría y responsabilidad',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43292',
      fecha: '2011-07-12',
    },
    {
      titulo: 'Decreto 1082 de 2015, único reglamentario del sector administrativo de planeación nacional',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 1796 de 2016, supervisión técnica independiente y certificado técnico de ocupación',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
    {
      titulo: 'Decreto 1077 de 2015, art. 2.2.6.1.2.2.3: revisión independiente de los diseños',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 2090 de 1989, numerales 6.2.1 y 6.2.2: honorarios de interventoría',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo: 'Sentencia del 28 de agosto de 2020: el Decreto 2090 no es criterio obligatorio',
      editor: 'Consejo de Estado, Sección Primera',
      url: 'https://www.consejodeestado.gov.co/wp-content/uploads/2020/12/SanFiscSAC.pdf',
      fecha: '2020-08-28',
    },
  ],
}
