import type { Post } from '@/lib/types'

/**
 * El dato central —en Jamundí no hay curaduría y por tanto no se pagan
 * expensas— se verificó por tres vías, incluida una página de MinVivienda que
 * responde exactamente esa pregunta.
 *
 * Tres cosas que la verificación cambió respecto del borrador inicial:
 *
 * 1. Se cayó por completo la historia de un «Acuerdo 020 suspendido
 *    judicialmente que frenaba proyectos en cinco corregimientos». El Acuerdo
 *    020 de Jamundí es el Estatuto Tributario. La fuente que se le atribuía
 *    devuelve 404. No se publica.
 * 2. Lo que sí existe es mejor material: la Sentencia 125 de 2021, que suspende
 *    licencias según disponibilidad de agua y no según corregimiento. El
 *    verdadero cuello de botella no es el dinero, es el certificado de
 *    Acuavalle. Nadie más lo está explicando.
 * 3. Los 36 meses de vigencia son solo de obra nueva. Decirlo sin matizar
 *    habría sido cometer un error nuevo al corregir uno viejo.
 *
 * El artículo declara su fecha de caducidad a propósito: «sin curaduría» es
 * cierto hoy y no es permanente.
 */
export const post: Post = {
  slug: 'licencia-de-construccion-en-jamundi',
  titulo: 'Licencia de construcción en Jamundí: sin curaduría y sin expensas',
  pilar: 'tramites',
  fecha: '2026-07-20',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Jamundí no tiene curador urbano, así que la licencia la expide el ' +
    'municipio y no se pagan expensas. Cuánto se ahorra de verdad, qué sí hay ' +
    'que pagar, y por qué el obstáculo real no es el dinero sino un ' +
    'certificado de agua.',
  metaDescripcion:
    'En Jamundí la licencia la expide el municipio y no se pagan expensas de ' +
    'curaduría. Qué sí se paga y cuál es el verdadero obstáculo.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'En Cali, sacar una licencia de construcción pasa por una curaduría ' +
        'urbana y cuesta dinero antes de que nadie mire el proyecto. En ' +
        'Jamundí, a veinte minutos, no.',
    },
    {
      tipo: 'parrafo',
      texto:
        'No es un vacío ni una excepción rara: es lo que dice la norma cuando ' +
        'un municipio no tiene curador designado. Y tiene un efecto económico ' +
        'directo que casi nadie está contando. Pero **no vuelve el trámite ' +
        'gratis**, y hay un obstáculo bastante más serio del que casi nadie ' +
        'habla.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién expide la licencia en Jamundí' },
    {
      tipo: 'parrafo',
      texto:
        'El [directorio de curadores urbanos de la Superintendencia de ' +
        'Notariado y Registro](https://www.supernotariado.gov.co/superintendencia-delegada-para-curadores-urbanos/), ' +
        'actualizado en marzo de 2026, tiene dos filas para Jamundí —Curaduría ' +
        'Urbana 1 y Curaduría Urbana 2— y las dos dicen lo mismo en cada ' +
        'campo: «No registra». Sin curador, sin dirección, sin teléfono.',
    },
    {
      tipo: 'nota',
      texto:
        'El matiz importa: las dos curadurías **existen jurídicamente y están ' +
        'vacantes**. No es que Jamundí no pueda tenerlas; es que todavía no ' +
        'hay nadie en ellas. Chía y Madrid, en Cundinamarca, están igual.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando no hay curador, el Decreto 1077 de 2015 asigna la competencia ' +
        'a «la autoridad municipal o distrital competente». En Jamundí es la ' +
        '**Secretaría de Planeación y Coordinación Municipal**, y no es teoría: ' +
        'en el segundo trimestre de 2025 esa Secretaría otorgó 76 licencias ' +
        'urbanísticas, según el informe que el propio municipio rindió ante un ' +
        'juzgado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por qué no se pagan expensas' },
    {
      tipo: 'parrafo',
      texto:
        'Las expensas son lo que cobra un curador urbano por estudiar y ' +
        'resolver la solicitud. Un municipio que expide licencias no puede ' +
        'cobrarlas, y está escrito sin ambigüedad en el parágrafo 4 del ' +
        'artículo 2.2.6.6.8.1 del Decreto 1077 de 2015:',
    },
    {
      tipo: 'cita',
      texto:
        'En ningún caso las autoridades municipales o distritales encargadas ' +
        'del estudio, trámite y expedición de las licencias están autorizadas ' +
        'para hacer cobros de expensas.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.6.8.1, parágrafo 4',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y no hay que interpretarlo: el [propio Ministerio de Vivienda publica ' +
        'esa pregunta](https://www.minvivienda.gov.co/node/1261) —si se puede ' +
        'cobrar por el licenciamiento en municipios sin curador— y la responde ' +
        'citando ese parágrafo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánto es eso en pesos' },
    {
      tipo: 'parrafo',
      texto:
        'Para dimensionarlo, así se cobra en Cali. Desde el Decreto 1890 de ' +
        '2021 las expensas se liquidan en UVT con una fórmula de dos partes: ' +
        'un **cargo fijo** que se paga al radicar, y un **cargo variable** ' +
        'proporcional al área, los dos afectados por el estrato y por un factor ' +
        'municipal.',
    },
    {
      tipo: 'dato',
      valor: '$585.000',
      etiqueta:
        'Solo el cargo fijo, con IVA, para un predio de estrato 3 en Cali en ' +
        '2026. El cargo variable por área va aparte.',
      fuente:
        'Tabla de cargos fijos 2026 de la Curaduría Urbana 3 de Cali, con la ' +
        'UVT del año.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El cargo fijo sube con el estrato: ronda los $293.000 en estratos 1 y ' +
        '2 y pasa de $1.460.000 en estrato 6. Y hay un detalle que conviene ' +
        'saber antes de radicar en Cali: **el cargo fijo se paga al radicar y ' +
        'no se devuelve** si la licencia se niega o si el interesado desiste.',
    },
    {
      tipo: 'parrafo',
      texto: 'En Jamundí, ese renglón completo es cero.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué sí se paga' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí es donde el titular se queda corto si uno lo lee rápido. Que no ' +
        'haya expensas no significa que el trámite sea gratis: **falta un ' +
        'componente del costo, no todos**. El Estatuto Tributario de Jamundí ' +
        '—Acuerdo 020 de 2017— fija lo demás.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Concepto', 'Cuánto', 'Cuándo'],
      filas: [
        [
          '**Impuesto de delineación urbana**',
          '2,0 % sobre área construida × valor de referencia del m²',
          'Antes de que salga la licencia. Es requisito para expedirla',
        ],
        [
          'Estampilla Pro-Cultura',
          '0,03 UVT por solicitud',
          'Con la solicitud. Es simbólico',
        ],
        [
          'Participación en plusvalía',
          '30 %, solo si hay liquidación inscrita en el folio de matrícula',
          'Cuando aplica. Es el cobro grande',
        ],
      ],
      nota:
        'Acuerdo Municipal 020 del 22 de noviembre de 2017, capítulo XII. ' +
        'Ojo con la base del impuesto: en Jamundí es **área por valor de ' +
        'referencia del metro cuadrado**, no el presupuesto de obra. Ese es el ' +
        'modelo de Bogotá y confundirlos cambia la cifra por completo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El impuesto tiene exenciones por diez años que vale la pena revisar: ' +
        'inmuebles afectados por catástrofes, restauración de bienes de interés ' +
        'cultural, autoconstrucción de vivienda de interés social en estratos 1 ' +
        'y 2, y ampliaciones y adecuaciones en estratos 1 y 2 por debajo de ' +
        'cierto avalúo. Y si la licencia vence sin que se ejecute la obra, el ' +
        'impuesto se devuelve, aunque sin intereses ni indexación.',
    },
    {
      tipo: 'nota',
      texto:
        'Un hueco que declaro en vez de rellenar: la exposición de motivos del ' +
        'estatuto menciona que se conservan «los derechos por la expedición de ' +
        'licencias», pero **no encontré el acto administrativo que fija su ' +
        'tarifa**. Puede haber un cobro de ventanilla que no está en esta ' +
        'tabla. Antes de cerrar un presupuesto, llame a la Secretaría de ' +
        'Planeación y pregunte por ese renglón.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que **no** aplica, por si se lo cobran: la estampilla Pro-Adulto ' +
        'Mayor y la tasa Pro-Deporte recaen sobre contratos con el municipio, ' +
        'no sobre licencias. La estampilla Pro-Universidad no existe en el ' +
        'estatuto municipal. Y la sobretasa bomberil se liquida con el predial ' +
        'anual.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El obstáculo que sí importa: el agua' },
    {
      tipo: 'parrafo',
      texto:
        'Y aquí está lo que de verdad decide si su licencia sale, que no tiene ' +
        'nada que ver con el dinero.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En 2016 la Procuraduría 21 Judicial Ambiental y Agraria del Valle ' +
        'presentó una acción popular contra el Municipio de Jamundí, la CVC y ' +
        'Acuavalle. El Juzgado Segundo Administrativo Oral de Cali falló en ' +
        'noviembre de 2021 —Sentencia 125— y el Tribunal Administrativo del ' +
        'Valle confirmó en diciembre de 2022. Es **sentencia de fondo**, no una ' +
        'medida cautelar.',
    },
    {
      tipo: 'cita',
      texto:
        'Se mantiene la suspensión de la expedición de nuevas licencias ' +
        'urbanísticas para subdividir y construir, en todas sus modalidades en ' +
        'el área urbana del Municipio de Jamundí que tengan como fuente de ' +
        'suministro a Acuavalle S.A. E.S.P.',
      fuente: 'Sentencia 125 de 2021, numeral tercero',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lea con cuidado el criterio, porque es lo que casi nadie explica bien: ' +
        '**el filtro no es geográfico, es de servicios públicos**. No hay ' +
        'corregimientos vedados. Lo que decide es si el predio tiene ' +
        'garantizado el suministro, y eso se prueba con el certificado de ' +
        'disponibilidad. Con él, se entra por una de las excepciones del fallo; ' +
        'sin él, cae dentro de la suspensión.',
    },
    {
      tipo: 'parrafo',
      texto: 'Las excepciones que el propio fallo dejó abiertas incluyen:',
    },
    {
      tipo: 'lista',
      items: [
        'Proyectos ya aprobados con servicios garantizados.',
        '**Reforzamiento, modificación, ampliación, adecuación a otro uso y cerramiento** de inmuebles existentes. Si su proyecto es sobre lo ya construido, esto le aplica.',
        'Subdivisión y construcción urbana con servicios garantizados.',
        'Parcelación con disponibilidad garantizada. En suelo rural hay que acreditar planta de tratamiento propia.',
        'Obras de interés general en salud y educación.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Que la suspensión exista no significa que no se esté licenciando: 76 ' +
        'licencias en un solo trimestre lo demuestran. Significa que **el ' +
        'certificado de Acuavalle es el primer documento que hay que ' +
        'conseguir**, antes de encargar un plano.',
    },
    {
      tipo: 'nota',
      texto:
        'El documento oficial más reciente que pude consultar sobre el ' +
        'cumplimiento de este fallo es del segundo trimestre de 2025. No hay ' +
        'evidencia de que la suspensión se haya levantado, pero tampoco puedo ' +
        'afirmar que siga en los mismos términos. Verifíquelo en Planeación ' +
        'antes de comprar un lote contando con licenciarlo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los plazos son los mismos que en Cali' },
    {
      tipo: 'parrafo',
      texto:
        'Sin curaduría no hay trámite de segunda. La norma pone a las dos ' +
        'autoridades en el mismo reloj:',
    },
    {
      tipo: 'cita',
      texto:
        'Los curadores urbanos y la entidad municipal o distrital encargada ' +
        'del estudio, trámite y expedición de las licencias, según el caso, ' +
        'tendrán un plazo máximo de cuarenta y cinco (45) días hábiles para ' +
        'resolver las solicitudes […] Vencido este plazo se aplicará el ' +
        'silencio administrativo positivo.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuarenta y cinco días hábiles, contados **desde que la solicitud se ' +
        'radica en legal y debida forma** —es decir, con el expediente ' +
        'completo—, prorrogables una sola vez hasta la mitad si el tamaño o la ' +
        'complejidad lo justifican. Si el acta de observaciones llega, hay 30 ' +
        'días hábiles para responder, prorrogables 15.',
    },
    {
      tipo: 'nota',
      texto:
        'El silencio administrativo positivo tiene un límite que conviene ' +
        'entender: opera «en los términos solicitados», pero **nunca en ' +
        'contravención de las normas urbanísticas vigentes**. No es una puerta ' +
        'trasera para lo que la norma no permite.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánto dura la licencia' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay un dato que casi toda la web colombiana tiene mal, y una ' +
        'corrección que también suele hacerse mal.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es cierto que el Decreto 1783 de 2021 subió la vigencia de 24 a 36 ' +
        'meses. Pero **no para todas las licencias**. Y decir «la licencia dura ' +
        '36 meses» a secas es incorrecto para la mayoría de las modalidades.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Clase o modalidad', 'Vigencia', 'Prórroga'],
      filas: [
        ['Urbanización, parcelación y construcción en **obra nueva**', '36 meses', 'Una vez, +12 meses'],
        ['Construcción en modalidades **distintas** a obra nueva: ampliación, adecuación, modificación, restauración, reforzamiento, demolición', '24 meses', 'Una vez, +12 meses'],
        ['Urbanización + parcelación + obra nueva en un mismo acto', '48 meses', 'Una vez, +12 meses'],
        ['Subdivisión', '12 meses', 'Improrrogable'],
        ['Urbanización o parcelación para saneamiento', '12 meses', 'No prorrogable'],
      ],
      nota:
        'Decreto 1783 de 2021, artículo 27. Los plazos corren desde que quedan ' +
        'en firme los actos que otorgaron la licencia, no desde que se radicó.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos precisiones más sobre la prórroga, y las dos se equivocan a ' +
        'menudo. Se pide **a más tardar 30 días hábiles antes** del vencimiento ' +
        '—hábiles, no calendario: el régimen anterior decía calendario y ' +
        'cambió—, con la documentación completa y una manifestación bajo ' +
        'juramento de que la obra ya inició.',
    },
    {
      tipo: 'nota',
      texto:
        'Y una que caducó hace poco: el Decreto 74 de 2025 permitió una ' +
        '**segunda** prórroga extraordinaria, pero solo hasta el 30 de junio de ' +
        '2026. Esa ventana ya se cerró. Contenido que la presente como vigente ' +
        'está desactualizado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Esto tiene fecha de vencimiento' },
    {
      tipo: 'parrafo',
      texto:
        'La ausencia de expensas en Jamundí no es un privilegio del municipio: ' +
        'es consecuencia de que no haya curador designado. La Ley 388 de 1997 ' +
        'lo dice de frente — el día que se designe uno, la entidad municipal ' +
        'que siga prestando el servicio cobrará **las mismas expensas** que se ' +
        'establezcan para el curador.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y ese día se está acercando. La Superintendencia de Notariado y ' +
        'Registro tiene abierto un concurso público de méritos para proveer ' +
        'curadurías, y **Jamundí está en la lista**, junto con Buenaventura, ' +
        'Palmira, Tuluá y Yumbo. Según la adenda vigente, las inscripciones ' +
        'cierran el **16 de octubre de 2026** y la lista definitiva de ' +
        'admitidos se publica el **22 de febrero de 2027**.',
    },
    {
      tipo: 'nota',
      texto:
        'Cuidado con las fechas que circulan. Después de las inscripciones ' +
        'faltan pruebas, entrevistas, lista de elegibles y designación, y **de ' +
        'esas etapas no hay cronograma publicado**. Cualquier fecha concreta de ' +
        'apertura de la curaduría de Jamundí sería inventada. Lo único ' +
        'defensible: no antes de bien entrado 2027. La propia Superintendencia ' +
        'prorrogó el plazo porque algunas plazas no tenían aspirantes inscritos.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hacer con esto' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Pida primero el certificado de disponibilidad de servicios.** Antes del plano, antes del presupuesto, antes de firmar la promesa de compraventa del lote. Es lo que decide si su proyecto es licenciable hoy.',
        '**Presupueste el 2 % de delineación urbana** sobre área por valor de referencia, y pregunte en Planeación por los derechos de expedición, que no están publicados.',
        '**Radique con el expediente completo.** Los 45 días hábiles no empiezan a correr hasta que la solicitud esté en legal y debida forma.',
        '**Verifique la modalidad de su licencia** antes de contar con 36 meses. Si es ampliación o reforzamiento, tiene 24.',
        '**Si el proyecto puede empezar este año, empiécelo.** El ahorro de expensas es real mientras no haya curador designado, y esa condición no es permanente.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior está verificado contra norma y documento oficial a ' +
        'julio de 2026. Los trámites cambian; las fechas de este artículo son ' +
        'las de su publicación.',
    },
  ],
  etiquetas: ['jamundi', 'propietario', 'constructora', 'licencia', 'costos'],
  fuentes: [
    {
      titulo: 'Decreto 1077 de 2015, sector Vivienda, Ciudad y Territorio (texto compilado)',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1203 de 2017, artículo 21, que modifica el régimen de expensas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=82673',
      fecha: '2017-07-12',
    },
    {
      titulo: '¿Se puede cobrar por el licenciamiento urbanístico en municipios sin curador urbano?',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/node/1261',
      fecha: '2025-07-22',
    },
    {
      titulo: 'Directorio de curadores urbanos',
      editor: 'Superintendencia de Notariado y Registro',
      url: 'https://www.supernotariado.gov.co/superintendencia-delegada-para-curadores-urbanos/',
      fecha: '2026-03-06',
    },
    {
      titulo: 'Adenda 04 al Concurso Público de Méritos para curadores urbanos',
      editor: 'Superintendencia de Notariado y Registro',
      url: 'https://servicios.supernotariado.gov.co/files/portal/portal-res_2026_016225_6_denda_04_de_2026_concurso_curadores_.pdf',
      fecha: '2026-06-26',
    },
    {
      titulo: 'Decreto 1783 de 2021, artículo 27: vigencia de las licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175086',
      fecha: '2021-12-20',
    },
    {
      titulo: 'Decreto 74 de 2025: segunda prórroga extraordinaria, vigente hasta el 30 de junio de 2026',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=258016',
      fecha: '2025-01-24',
    },
    {
      titulo: 'Informe de seguimiento al fallo de segunda instancia, acción popular 76001-33-33-002-2016-00326-00',
      editor: 'Alcaldía Municipal de Jamundí',
      url: 'https://www.jamundi.gov.co/Ciudadanos/Notificaciones_Terceros/INFORME%20DE%20SEGUIMIENTO%20AL%20FALLO%20DE%20SENTENCIA%20SEGUNDA%20INSTANCIA.pdf',
      fecha: '2025-07-01',
    },
    {
      titulo: 'Informe de gestión, vigencia 2024',
      editor: 'Alcaldía Municipal de Jamundí',
      url: 'https://www.jamundi.gov.co/RENDICION%20DE%20CUENTAS%20MENU%20PARTICIPA/Informe%20de%20gesti%C3%B3n%20vigencia%202024.pdf',
      fecha: '2025-01-31',
    },
    {
      titulo: 'Expedición de licencias urbanísticas, Alcaldía de Jamundí (ficha T14112)',
      editor: 'GOV.CO · Sistema Único de Información de Trámites',
      url: 'https://www.gov.co/ficha-tramites-y-servicios/T14112',
      fecha: null,
    },
    {
      titulo: 'Tabla de cargos fijos 2026',
      editor: 'Curaduría Urbana 3 de Santiago de Cali',
      url: 'https://www.cu3cali.com/wp-content/uploads/2025/12/Cargos-Fijos-2026.pdf',
      fecha: '2025-12-01',
    },
  ],
}
