import type { Post } from '@/lib/types'

/**
 * La pieza de autoridad del pilar institucional. No busca tráfico —el comprador
 * público no llega por Google, llega por SECOP— sino demostrar competencia ante
 * quien ya está mirando al estudio.
 *
 * La distinción que estructura el artículo: **«concurso de arquitectura» y
 * «concurso de méritos» no son lo mismo.** El primero es una tradición
 * disciplinar; el segundo es una modalidad de selección del estatuto de
 * contratación. Cuando el objeto son estudios y diseños de un equipamiento
 * público, lo que rige es el segundo, y de ahí sale la regla que más sorprende:
 * **el precio no puede ser factor de escogencia en la selección de
 * consultores.**
 *
 * Lo que se dejó explícitamente fuera por no estar verificado en el
 * repositorio, y así se declara también en el cuerpo del artículo:
 *
 * - **El número y la mecánica de los sobres en SECOP II.** Se describe la
 *   secuencia legal —técnica primero, económica después y solo del primero— sin
 *   detallar la operación de la plataforma.
 * - **El régimen de capacidad residual.** Circula que no aplica a consultoría;
 *   no se pudo confirmar con fuente y no se publica.
 * - **El nivel de clasificación de la experiencia en el RUP.** Se dice que la
 *   clasificación excluye cuando está mal hecha, que es lo verificable, sin
 *   afirmar a qué nivel.
 * - **El régimen específico de los concursos de arquitectura convocados por
 *   gremios profesionales.** No se verificó su fundamento vigente.
 *
 * Fechada en abril de 2026, después de la entrada en obligatoriedad de los
 * Documentos Tipo de Infraestructura Social.
 */
export const post: Post = {
  slug: 'concursos-publicos-de-arquitectura',
  titulo: 'Concursos públicos de arquitectura: cómo funcionan por dentro',
  pilar: 'institucional',
  fecha: '2026-04-14',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'No se gana con la mejor propuesta: se gana con la mejor propuesta entre ' +
    'las que quedaron habilitadas. Cómo se estructura un concurso de méritos, ' +
    'qué se evalúa y por qué el precio no decide quién gana.',
  metaDescripcion:
    'Cómo funciona un concurso público de arquitectura en Colombia: concurso ' +
    'de méritos, qué se evalúa y por qué el precio no es factor de selección.',
  puerta: 'espacio-publico-y-equipamientos',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Hay una idea muy extendida sobre los concursos públicos de ' +
        'arquitectura en Colombia: que gana el mejor proyecto. Es solo la ' +
        'última parte de la verdad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Antes de que un jurado mire una sola planta, un proceso de selección ' +
        'ya descartó a la mayoría de los interesados por razones que no tienen ' +
        'nada que ver con arquitectura. Entender esa primera mitad es lo que ' +
        'separa a un equipo que se presenta de uno que se presenta y compite.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Dos cosas distintas se llaman «concurso»' },
    {
      tipo: 'lista',
      items: [
        '**El concurso de arquitectura**, en sentido disciplinar: la tradición de convocar propuestas de diseño y someterlas a un jurado. Es una forma de trabajo del oficio.',
        '**El concurso de méritos**, en sentido jurídico: una de las modalidades de selección del estatuto general de contratación de la administración pública, **la que se usa para contratar consultores**.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando una entidad pública colombiana necesita los estudios y diseños ' +
        'de un colegio, una biblioteca o una plaza, lo que abre es un **concurso ' +
        'de méritos**. Puede tener jurado, puede tener anteproyectos, puede ' +
        'llamarse concurso de arquitectura en la prensa — pero las reglas que ' +
        'lo gobiernan son las del estatuto.',
    },
    {
      tipo: 'nota',
      texto:
        'La razón es la clasificación del objeto. El estatuto define como ' +
        '**contrato de consultoría**, entre otras cosas, «la ejecución de ' +
        'diseños, planos, anteproyectos y proyectos», junto con la ' +
        'interventoría, la asesoría y la gerencia de obra. Y la consultoría se ' +
        'selecciona por concurso de méritos. No es una elección de la entidad: ' +
        'es la modalidad que corresponde al objeto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La regla que lo cambia todo: el precio no decide' },
    {
      tipo: 'parrafo',
      texto:
        'Es la particularidad más importante del concurso de méritos y la que ' +
        'más sorprende a quien viene del sector privado:',
    },
    {
      tipo: 'nota',
      texto:
        '**En la selección de consultores no se puede incluir el precio como ' +
        'factor de escogencia.** Se evalúan los aspectos técnicos: la ' +
        'experiencia específica del proponente, la del equipo de trabajo y la ' +
        'calidad de la propuesta. El valor se revisa y se acuerda después, con ' +
        'el proponente que quedó en primer lugar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La consecuencia es una secuencia que conviene tener clara: **primero ' +
        'se evalúa lo técnico y se ordena a los proponentes; solo entonces se ' +
        'abre la oferta económica, y solo la del primero**, para verificar que ' +
        'esté dentro del valor estimado del proceso. Si no lo está, se puede ' +
        'revisar, y si no hay acuerdo se pasa al siguiente.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dicho de otro modo: **bajar el precio no mejora su posición.** En una ' +
        'licitación de obra, sí. En un concurso de méritos, no puede.',
    },
    {
      tipo: 'nota',
      texto:
        'No detallo aquí la mecánica de sobres de la plataforma de contratación ' +
        'porque cambia con las versiones del sistema y no pude verificarla ' +
        'contra fuente oficial vigente. **Lo que sí es de ley es la secuencia: ' +
        'técnica primero, económica después y solo del primero.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las dos formas del concurso de méritos' },
    {
      tipo: 'tabla',
      cabeceras: ['Modalidad', 'Cómo funciona', 'Cuándo se usa'],
      filas: [
        ['**Abierto**', 'Se convoca públicamente y presenta propuesta quien cumpla los requisitos habilitantes', 'Lo más frecuente'],
        ['**Con precalificación**', 'Primero se conforma una lista corta o una lista multiusos de interesados; solo ellos presentan propuesta', 'Cuando el objeto justifica reducir el número de propuestas a evaluar'],
      ],
      nota:
        'La precalificación no es un atajo ni una preferencia: es un ' +
        'procedimiento reglado, con su propia convocatoria y sus propios ' +
        'criterios de conformación de la lista.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y la propuesta técnica tiene dos formatos según lo detallado que sea el ' +
        'alcance: uno **simplificado**, cuando la entidad ya definió con ' +
        'precisión la metodología y el plan de cargas de trabajo, y uno ' +
        '**detallado**, cuando le pide al proponente que proponga esa ' +
        'metodología. Saber cuál le están pidiendo cambia por completo qué hay ' +
        'que escribir.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Dónde se pierde antes de competir' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que nadie cuenta y que decide la mayoría de los ' +
        'procesos. Los **requisitos habilitantes** no dan puntaje: se cumplen o ' +
        'no se cumplen. Quien no los cumple queda fuera, aunque su propuesta ' +
        'fuera la mejor del país.',
    },
    {
      tipo: 'lista',
      items: [
        '**Capacidad jurídica.** Existencia, representación, ausencia de inhabilidades e incompatibilidades.',
        '**Experiencia acreditada**, según el registro único de proponentes y los certificados de contratos anteriores. **Aquí se cae más gente que en cualquier otra parte**, casi siempre por cómo está clasificada la experiencia y no por no tenerla.',
        '**Capacidad financiera y organizacional**, con los indicadores que el proceso exija.',
        '**Equipo de trabajo**, con los perfiles, las matrículas y la dedicación mínima que pida el pliego.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'El error más caro y más evitable: **tener la experiencia y no poder ' +
        'acreditarla.** Un contrato ejecutado que quedó mal clasificado en el ' +
        'registro, o cuyo certificado no dice las áreas ni la modalidad, no ' +
        'sirve para habilitar. Eso se arregla con anticipación, no en la semana ' +
        'del cierre.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué cambiaron los documentos tipo' },
    {
      tipo: 'parrafo',
      texto:
        'Desde 2020 la ley obliga a las entidades a usar **documentos tipo** ' +
        'adoptados por la agencia nacional de contratación: pliegos ' +
        'estandarizados y de uso obligatorio, que la entidad no puede modificar ' +
        'en lo esencial.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y el sector que más toca a la arquitectura pública tiene los suyos: ' +
        'los **Documentos Tipo de Infraestructura Social** son obligatorios ' +
        'desde el **16 de febrero de 2026**. Cubren precisamente el tipo de ' +
        'equipamiento en el que se juega buena parte de la obra pública ' +
        'colombiana.',
    },
    {
      tipo: 'lista',
      items: [
        '**Menos discrecionalidad de la entidad.** Los requisitos habilitantes y los factores de evaluación vienen predefinidos; el margen para pliegos hechos a la medida de un proponente se reduce.',
        '**Más previsibilidad para quien se presenta.** Si los documentos son los mismos en todo el país, prepararse una vez sirve para muchos procesos.',
        '**Y una consecuencia menos obvia:** cambia cómo se acredita la experiencia. Un equipo que venía acreditándola a su manera tiene que revisar si esa manera encaja en el formato obligatorio.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Fuera de los documentos oficiales, hay muy poco publicado que explique ' +
        'esto. Es un buen ejemplo de por qué conviene leer el pliego completo y ' +
        'no la nota de prensa.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo no hay concurso' },
    {
      tipo: 'parrafo',
      texto:
        'Conviene saberlo, porque explica por qué a veces un proyecto público ' +
        'aparece adjudicado sin que nadie haya visto una convocatoria.',
    },
    {
      tipo: 'lista',
      items: [
        '**Contratación directa**, en las causales que la ley enumera taxativamente. No es una vía discrecional: la causal tiene que existir y justificarse.',
        '**Urgencia manifiesta**, declarada por acto administrativo motivado. **Elimina la convocatoria pública: el contratista se escoge.** Está pensada para atender lo inmediato, y quien no está ya en el radar de la entidad no aparece.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La distinción práctica que conviene tener presente: la atención ' +
        'inmediata puede ir por urgencia, pero **los estudios y diseños ' +
        'completos y la obra definitiva vuelven al concurso de méritos y a la ' +
        'licitación.** Son dos carriles distintos y se confunden a menudo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se prepara un equipo, de verdad' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Ponga en orden el registro de proponentes antes de que salga el proceso.** Clasificación de la experiencia, certificados con áreas y modalidad, indicadores financieros al día. Es trabajo de meses antes, no de la semana del cierre.',
        '**Lea el pliego entero, empezando por los requisitos habilitantes.** Si no los cumple, la propuesta no importa.',
        '**Verifique qué formato de propuesta técnica piden.** Simplificada o detallada cambia todo el trabajo.',
        '**Arme el equipo con los perfiles exactos que pide el pliego**, con matrícula vigente y con la dedicación mínima exigida.',
        '**Use el periodo de observaciones.** Es el único momento en que se puede pedir que se corrija un requisito mal formulado, y casi nadie lo usa.',
        '**No compita por precio.** No solo es inútil: en consultoría, la ley no lo permite como factor de escogencia.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que este artículo no dice' },
    {
      tipo: 'parrafo',
      texto:
        'Por coherencia con el resto del blog, declaro los huecos en vez de ' +
        'rellenarlos:',
    },
    {
      tipo: 'lista',
      items: [
        '**No detallo la operación de la plataforma de contratación.** Cambia con sus versiones y no la verifiqué contra documentación oficial vigente.',
        '**No afirmo nada sobre capacidad residual en consultoría.** Circula que ese régimen no le aplica; no lo pude confirmar y no lo repito.',
        '**No digo a qué nivel debe clasificarse la experiencia en el registro de proponentes.** Lo que sí es cierto y verificable es que una clasificación equivocada excluye.',
        '**No describo el régimen de los concursos convocados por gremios profesionales**, que es una tradición distinta de la contratación estatal y cuyo fundamento vigente no verifiqué.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Cada uno de esos puntos se puede confirmar en la fuente oficial antes ' +
        'de presentarse a un proceso concreto. Lo que no conviene es tomarlos ' +
        'de un artículo — incluido este.',
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
      titulo: 'Ley 1150 de 2007, modalidades de selección, concurso de méritos y factores de evaluación',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=25678',
      fecha: '2007-07-16',
    },
    {
      titulo: 'Decreto 1082 de 2015, único reglamentario del sector administrativo de planeación nacional',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 2022 de 2020, documentos tipo de obligatoria aplicación',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=138954',
      fecha: '2020-07-22',
    },
    {
      titulo: 'Documentos Tipo de Infraestructura Social, obligatorios desde el 16 de febrero de 2026',
      editor: 'Agencia Nacional de Contratación Pública · Colombia Compra Eficiente',
      url: 'https://www.colombiacompra.gov.co/',
      fecha: '2026-02-16',
    },
    {
      titulo: 'Ley 1474 de 2011, estatuto anticorrupción',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43292',
      fecha: '2011-07-12',
    },
  ],
}
