import type { Post } from '@/lib/types'

/**
 * El complemento urbanístico de «Licencia de construcción en Jamundí». Aquella
 * responde cómo se tramita; esta responde qué condiciona construir allí.
 *
 * La tesis, y sale de material ya verificado: **Jamundí creció más rápido que
 * sus instrumentos.** El plan básico de ordenamiento vigente se adoptó en 2002;
 * el DANE ya cuenta a Jamundí dentro del dominio estadístico «Cali AU», junto
 * con Cali, Palmira y Yumbo; y el municipio licencia por su Secretaría de
 * Planeación porque no tiene curador urbano designado. Tres hechos que apuntan
 * a lo mismo.
 *
 * Y el condicionante real no es urbanístico sino de servicios públicos: la
 * Sentencia 125 de 2021 suspende licencias según disponibilidad de agua, no
 * según corregimiento. Ese matiz —el filtro es de servicios, no geográfico— es
 * el que casi nadie explica bien y es el que decide proyectos.
 *
 * Lo que se decidió no publicar:
 *
 * - **Ninguna cifra de población, de crecimiento ni de licencias por año más
 *   allá de la que ya está documentada en informe oficial.** No hay serie
 *   verificada en el repositorio y una cifra de crecimiento sin fuente y fecha
 *   es exactamente lo que este blog corrige en otros temas.
 * - **Nada sobre el concurso de curadores urbanos ni sus fechas.** La ausencia
 *   de curaduría se describe como condición presente y explícitamente no
 *   permanente, sin ponerle fecha de caducidad.
 * - **El número del acuerdo que adopta el PBOT.** Se afirma el año, que es lo
 *   verificado; el número no.
 *
 * Fechada en diciembre de 2025.
 */
export const post: Post = {
  slug: 'construir-en-jamundi',
  titulo: 'Construir en Jamundí: crecimiento, suelo y norma',
  pilar: 'local',
  fecha: '2025-10-07',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'El municipio creció más rápido que sus instrumentos: un ordenamiento de ' +
    '2002, sin curaduría urbana, y un fallo judicial que condiciona las ' +
    'licencias a la disponibilidad de agua. Qué significa eso para su lote.',
  metaDescripcion:
    'Qué condiciona construir en Jamundí: clase de suelo, ordenamiento ' +
    'vigente, quién expide la licencia y el fallo que la condiciona al agua.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Jamundí es hoy el destino de expansión residencial más activo del sur ' +
        'del Valle, y a la vez uno de los municipios donde más gente compra lote ' +
        'sin saber qué está comprando.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La razón no es que la norma sea rara. Es que **el municipio creció más ' +
        'rápido que sus instrumentos**, y eso produce tres condiciones que ' +
        'conviene entender antes de firmar nada.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Jamundí ya no se mide sola' },
    {
      tipo: 'parrafo',
      texto:
        'Hay un dato oficial que describe la situación mejor que cualquier ' +
        'adjetivo, y que casi nadie usa: el **dominio estadístico «Cali AU» del ' +
        'DANE** —el área urbana de Cali para efectos de sus índices de ' +
        'construcción— está compuesto por Cali, **Jamundí**, Palmira y Yumbo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es decir: para la estadística oficial de costos de construcción, ' +
        'Jamundí no es un municipio aparte del Valle. Es parte del área urbana ' +
        'de Cali. Quien construye allí compite por los mismos materiales, la ' +
        'misma mano de obra y los mismos proveedores que quien construye en ' +
        'Cali, y sus costos se mueven con los mismos índices.',
    },
    {
      tipo: 'nota',
      texto:
        'La consecuencia práctica, y va contra la intuición del comprador: ' +
        '**el lote es más barato en Jamundí; la obra, no necesariamente.** ' +
        'Presupuestar una casa en Jamundí con costos «de pueblo» es el primer ' +
        'error del ejercicio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Un ordenamiento de 2002' },
    {
      tipo: 'parrafo',
      texto:
        'El plan básico de ordenamiento territorial que rige Jamundí se adoptó ' +
        'en **2002**. Más de dos décadas gobernando un territorio que en ese ' +
        'tiempo cambió de escala.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso no lo vuelve inválido —un plan de ordenamiento rige hasta que se ' +
        'revise y se adopte otro— pero sí tiene consecuencias concretas para ' +
        'quien proyecta:',
    },
    {
      tipo: 'lista',
      items: [
        '**La cartografía es antigua.** Ubicar un predio sobre ella y decidir en qué polígono cae puede requerir una aclaración previa que no aparece en ningún plazo de trámite.',
        '**Las categorías pueden no reflejar lo construido.** Hay zonas que en el papel siguen siendo una cosa y en el terreno son otra hace años.',
        '**Toda revisión futura es un riesgo de norma.** Si el ordenamiento se revisa mientras usted diseña, el proyecto se resuelve con la norma vigente el día en que radique la licencia. **Solo radicar congela la norma**; el concepto de norma urbanística, no.',
      ],
    },
    {
      tipo: 'cita',
      texto:
        'La expedición de estos conceptos no otorga derechos ni obligaciones a ' +
        'su peticionario y no modifica los derechos conferidos mediante ' +
        'licencias que estén vigentes o que hayan sido ejecutadas.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.3.1',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El suelo: tres clases, tres respuestas distintas' },
    {
      tipo: 'parrafo',
      texto:
        'Buena parte de la oferta de lotes en Jamundí no está en suelo urbano. ' +
        'Y la clase de suelo no es una etiqueta: decide si el lote es ' +
        'construible hoy, dentro de años o nunca.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Clase de suelo', 'Qué se puede hacer', 'La trampa'],
      filas: [
        ['**Urbano**', 'Construir según uso, índices y aislamientos del ordenamiento', 'Verificar sobre qué área se aplican los índices'],
        ['**De expansión**', '**Nada, hasta que se adopte el plan parcial.** Solo usos agrícolas y forestales', 'Es la trampa más cara: se compra pagando el precio de un futuro sin fecha'],
        ['**Rural y suburbano**', 'Según categoría, densidad de la corporación autónoma y régimen ambiental', 'La unidad agrícola familiar y las rondas hídricas'],
      ],
      nota:
        'Decreto 1077 de 2015 y Ley 388 de 1997. En suelo de expansión, mientras ' +
        'no se aprueben los planes parciales «sólo se permitirá el desarrollo ' +
        'de usos agrícolas y forestales».',
    },
    {
      tipo: 'parrafo',
      texto:
        'En el rural de Jamundí aplica además el límite que anula escrituras: ' +
        'salvo las cuatro excepciones del artículo 45 de la Ley 160, los ' +
        'predios rurales no pueden fraccionarse por debajo de la unidad ' +
        'agrícola familiar, **so pena de nulidad absoluta del acto o contrato**. ' +
        'No es una multa; es que el negocio no existió. Las excepciones están ' +
        'en [comprar un lote rural](/blog/comprar-lote-rural-que-verificar-antes-de-firmar).',
    },
    {
      tipo: 'nota',
      texto:
        'Y una corrección de competencias que en el sur del Valle se equivoca ' +
        'todo el tiempo: **la corporación autónoma regional no fija la unidad ' +
        'agrícola familiar.** Fija las densidades del suelo suburbano. La ' +
        'unidad agrícola familiar es de la autoridad nacional de tierras.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién expide la licencia, y cuánto cuesta' },
    {
      tipo: 'parrafo',
      texto:
        'Jamundí **no tiene curador urbano designado**. Cuando no hay curador, ' +
        'la competencia es de la autoridad municipal: en Jamundí, la Secretaría ' +
        'de Planeación y Coordinación Municipal. Y eso tiene un efecto ' +
        'económico directo:',
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
        'En Cali, las expensas de curaduría son un cargo fijo que se paga al ' +
        'radicar más un cargo variable por área. En Jamundí, ese renglón ' +
        'completo es cero. **No vuelve el trámite gratis**: falta un componente ' +
        'del costo, no todos.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Concepto', 'Cuánto', 'Cuándo'],
      filas: [
        ['**Expensas de curaduría**', '**Cero**, mientras no haya curador designado', '—'],
        ['**Impuesto de delineación urbana**', '2,0 % sobre área construida × valor de referencia del m²', 'Antes de que salga la licencia. Es requisito para expedirla'],
        ['Estampilla Pro-Cultura', '0,03 UVT por solicitud', 'Con la solicitud. Es simbólico'],
        ['Participación en plusvalía', '30 %, solo si hay liquidación inscrita en el folio de matrícula', 'Cuando aplica. Es el cobro grande'],
      ],
      nota:
        'Estatuto Tributario de Jamundí, Acuerdo Municipal 020 de 2017, ' +
        'capítulo XII. Ojo con la base del impuesto: en Jamundí es **área por ' +
        'valor de referencia del metro cuadrado**, no el presupuesto de obra. ' +
        'Ese es el modelo de Bogotá y confundirlos cambia la cifra por completo.',
    },
    {
      tipo: 'nota',
      texto:
        'La ausencia de expensas **no es permanente ni es un privilegio del ' +
        'municipio**: es consecuencia de que no haya curador designado. La ley ' +
        'lo dice de frente — el día que se designe uno, la entidad municipal ' +
        'que siga prestando el servicio cobrará las mismas expensas que se ' +
        'establezcan para el curador.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El condicionante real: el agua' },
    {
      tipo: 'parrafo',
      texto:
        'Y aquí está lo que de verdad decide si un proyecto en Jamundí sale ' +
        'adelante, que no tiene nada que ver con el ordenamiento ni con el ' +
        'dinero.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De una acción popular ambiental salió la **Sentencia 125 de 2021** del ' +
        'Juzgado Segundo Administrativo Oral de Cali, confirmada por el Tribunal ' +
        'Administrativo del Valle en diciembre de 2022. Es sentencia de fondo, ' +
        'no medida cautelar:',
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
        '**el filtro no es geográfico, es de servicios públicos.** No hay ' +
        'corregimientos vedados. Lo que decide es si el predio tiene ' +
        'garantizado el suministro, y eso se prueba con el certificado de ' +
        'disponibilidad.',
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
        'Que la suspensión exista no significa que no se esté licenciando. En ' +
        'el segundo trimestre de 2025, la Secretaría de Planeación otorgó **76 ' +
        'licencias urbanísticas**, según el informe que el propio municipio ' +
        'rindió ante el juzgado. Significa que **el certificado de ' +
        'disponibilidad es el primer documento que hay que conseguir**, antes de ' +
        'encargar un plano.',
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

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se lee todo junto' },
    {
      tipo: 'parrafo',
      texto:
        'Los tres hechos apuntan a lo mismo. El DANE ya cuenta a Jamundí dentro ' +
        'del área urbana de Cali. El ordenamiento que la gobierna es de 2002. Y ' +
        'un juez tuvo que suspender licencias porque la infraestructura de agua ' +
        'no acompañó el crecimiento.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Jamundí creció más rápido que sus instrumentos.** Eso no es un ' +
        'argumento para no construir allí: es la explicación de por qué la ' +
        'verificación previa importa más que en otros municipios.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hacer, en orden' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Pida el certificado de disponibilidad de servicios.** Antes del plano, antes del presupuesto, antes de firmar la promesa. Es lo que decide si el predio es licenciable hoy.',
        '**Verifique la clase de suelo.** Si es de expansión sin plan parcial adoptado, hoy no se construye.',
        '**Si es rural, verifique la unidad agrícola familiar** y de dónde salió el predio.',
        '**Pida el concepto de norma urbanística** y el certificado de tradición, y léalos enteros. La liquidación de plusvalía, si existe, está inscrita en el folio.',
        '**Presupueste el 2 % de delineación** sobre área por valor de referencia, y no cuente con costos de obra distintos de los de Cali.',
        '**Radique con el expediente completo.** Los 45 días hábiles no empiezan a correr hasta que la solicitud esté en legal y debida forma, y solo radicar congela la norma.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior está verificado contra norma y documento oficial a la ' +
        'fecha de publicación. Los trámites cambian, y la ausencia de curaduría ' +
        'en particular es una condición presente, no una característica ' +
        'permanente del municipio.',
    },
  ],
  etiquetas: ['jamundi', 'cali', 'propietario', 'norma-urbana', 'licencia'],
  fuentes: [
    {
      titulo: 'Decreto 1077 de 2015, sector Vivienda, Ciudad y Territorio (texto compilado)',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 388 de 1997, de desarrollo territorial: clases de suelo y planes parciales',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
      fecha: '1997-07-18',
    },
    {
      titulo: 'Ley 160 de 1994, unidad agrícola familiar y fraccionamiento de predios rurales',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=66789',
      fecha: '1994-08-03',
    },
    {
      titulo: '¿Se puede cobrar por el licenciamiento urbanístico en municipios sin curador urbano?',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/node/1261',
      fecha: '2025-07-22',
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
      titulo: 'Estadísticas de construcción: índices de costos y dominios geográficos',
      editor: 'Departamento Administrativo Nacional de Estadística',
      url: 'https://www.dane.gov.co/index.php/estadisticas-por-tema/construccion',
      fecha: null,
    },
  ],
}
