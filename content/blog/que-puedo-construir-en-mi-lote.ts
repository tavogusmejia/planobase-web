import type { Post } from '@/lib/types'

/**
 * Pieza perenne del pilar de trámites, y una de las que sostiene la puerta de
 * «proyecto nuevo»: es la pregunta que trae al dueño de lote antes de contratar
 * a nadie.
 *
 * La regla que estructura el artículo salió de la verificación y es la que casi
 * nadie enuncia: **la norma nacional define el vocabulario; el POT municipal
 * pone los números.** De ahí que ningún artículo pueda decirle a alguien cuánto
 * puede construir — solo enseñarle a leerlo.
 *
 * Dos correcciones de la investigación que evitan errores caros:
 *
 * 1. La afirmación «por debajo de 500 m² no se exige estudio de suelos» se
 *    apoya en artículos **derogados** por el Decreto 1783 de 2021. No se
 *    publica. Lo que sí se sostiene es que la Ley 400 exige un ingeniero
 *    geotecnista responsable, y que la excepción del Título E es de
 *    supervisión técnica, no de estudio.
 * 2. La CAR **no** fija la unidad agrícola familiar. Eso es de la autoridad
 *    de tierras. La CAR fija densidades en suelo suburbano. Confundirlas es un
 *    error corriente.
 *
 * No se publican los umbrales de índice de la tabla de cesiones de Bogotá: el
 * OCR del PDF los dejó ilegibles. Los porcentajes sí, que es lo citable.
 *
 * Fechado en junio de 2024: no cita nada posterior a 2021 y es perenne.
 */
export const post: Post = {
  slug: 'que-puedo-construir-en-mi-lote',
  titulo: 'Qué puedo construir en mi lote',
  pilar: 'tramites',
  fecha: '2024-06-14',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Índice de ocupación, índice de construcción, aislamientos y cesiones, ' +
    'explicados sin jerga. Y la regla que casi nadie enuncia: la ley nacional ' +
    'da el vocabulario, pero los números los pone el POT de su municipio.',
  metaDescripcion:
    'Índice de ocupación e índice de construcción explicados con un ejemplo, ' +
    'y dónde consultar qué permite la norma en su lote.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Es la primera pregunta de cualquiera que compró un lote, y la que peor ' +
        'se responde en internet. Verá tablas con índices, porcentajes y ' +
        'alturas presentadas como si fueran nacionales. No lo son.',
    },
    {
      tipo: 'nota',
      texto:
        'La regla que ordena todo el tema, y que conviene tener presente al ' +
        'leer cualquier artículo sobre esto —incluido este—: **la norma ' +
        'nacional define el vocabulario; el POT de su municipio pone los ' +
        'números.** Ninguna ley nacional dice cuánto se puede construir en un ' +
        'lote concreto. Eso lo fija cada plan de ordenamiento, por sector y por ' +
        'tratamiento urbanístico.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Así que lo que sigue no le va a decir cuánto puede construir. Le va a ' +
        'enseñar a leerlo, que es más útil y le sirve en cualquier ciudad.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los dos índices, y en qué se diferencian' },
    {
      tipo: 'parrafo',
      texto:
        'Todo gira alrededor de dos números. Están definidos en norma nacional, ' +
        'con estas palabras:',
    },
    {
      tipo: 'cita',
      texto:
        'Índice de ocupación: es la proporción del área de suelo que puede ser ' +
        'ocupada por edificación en primer piso bajo cubierta […] Índice de ' +
        'construcción: es el número máximo de veces que la superficie de un ' +
        'terreno puede convertirse por definición normativa en área construida.',
      fuente: 'Decreto 1077 de 2015, artículo 2.2.1.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dicho sin jerga: **el índice de ocupación mide la sombra del edificio ' +
        'sobre el suelo. El índice de construcción mide los metros cuadrados ' +
        'sumados de todos los pisos.** Uno es superficie, el otro es volumen ' +
        'contable.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Un ejemplo con números' },
    {
      tipo: 'parrafo',
      texto:
        'Lote de **300 m²**, con índice de ocupación **0,60** e índice de ' +
        'construcción **1,50**:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Cálculo', 'Operación', 'Resultado'],
      filas: [
        ['Huella máxima en primer piso', '300 × 0,60', '**180 m²**'],
        ['Suelo que queda libre', '300 − 180', '120 m², el 40 % del lote'],
        ['Área total construible', '300 × 1,50', '**450 m²** sumando todos los pisos'],
        ['Pisos a huella completa', '450 ÷ 180', '2,5'],
      ],
      nota:
        '**Los índices de este ejemplo son ilustrativos.** Cambian por sector y ' +
        'por tratamiento urbanístico. Nunca los tome de un artículo: tómelos ' +
        'del POT o del concepto de norma de su predio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con esos números puede hacer dos plantas completas de 180 m² más una ' +
        'tercera de 90, o tres plantas de 150 cada una si prefiere ocupar menos ' +
        'suelo y dejar más patio. La norma le da un techo; la forma la decide ' +
        'usted.',
    },
    {
      tipo: 'nota',
      texto:
        'El truco mental que vale para cualquier lote: **divida el índice de ' +
        'construcción entre el de ocupación**. Le da los pisos equivalentes a ' +
        'huella completa. Si los dos son 0,60, solo cabe un piso. Si la ' +
        'ocupación es 0,30 y la construcción 1,50, hacen falta cinco pisos para ' +
        'agotar la edificabilidad.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'La trampa: ¿sobre qué área se aplica?' },
    {
      tipo: 'parrafo',
      texto:
        'La definición nacional divide por «el área total del predio», pero ' +
        'varios planes de ordenamiento aplican el índice sobre el **área neta ' +
        'urbanizable** o sobre el **área útil**, que son más pequeñas que el ' +
        'lote que usted compró.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La diferencia es una cadena de restas: del **área bruta** se descuenta ' +
        'lo que va para vías principales, redes primarias y áreas de ' +
        'protección, y queda el **área neta urbanizable**; de ahí se restan las ' +
        'cesiones para vías locales, espacio público y equipamientos, y queda ' +
        'el **área útil**.',
    },
    {
      tipo: 'nota',
      texto:
        'Usted compra área bruta. Construye sobre área útil. Antes de ' +
        'multiplicar nada, averigüe **sobre qué área** se aplica el índice en ' +
        'su ciudad. Es la pregunta que más plata ahorra de todo el artículo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué cuenta y qué no — y por qué cambia de ciudad' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí se ve con claridad por qué no hay respuesta nacional. Comparando ' +
        'los planes de ordenamiento de Bogotá y de Cali sobre exactamente el ' +
        'mismo asunto:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Elemento', 'Bogotá', 'Cali'],
      filas: [
        ['Sótanos y semisótanos', 'Excluidos cuando son estacionamiento o circulación vehicular', 'Excluidos si son parqueo, depósito o cuartos de máquinas. **Cuentan como piso** si la placa sobresale más de lo permitido'],
        ['**Escaleras y puntos fijos**', '**Excluidos de forma expresa**', '**Sin exclusión general**'],
        ['Parqueaderos', 'Excluidos **en cualquier nivel**', 'Excluidos **solo en sótano o semisótano**'],
        ['Cuartos técnicos y de máquinas', 'Excluidos', 'Sin exclusión general del índice'],
        ['Equipamiento comunal privado', 'Excluido **hasta un piso**', 'Excluido **sin límite de pisos**'],
        ['Azoteas y áreas duras sin cubrir', 'Excluidas', 'Excluidas'],
      ],
      nota:
        'Decreto Distrital 555 de 2021, art. 266, y Acuerdo 0373 de 2014, ' +
        'arts. 346 y 354. **Ninguno de los dos menciona altillos ni ' +
        'mezanines**: el concepto simplemente no aparece, y no conviene inferir ' +
        'tratamiento.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La divergencia más nítida es la de los puntos fijos: **el mismo núcleo ' +
        'de escaleras y ascensores puede no computar en Bogotá y sí computar en ' +
        'Cali.** En un edificio de varios pisos, eso son cientos de metros ' +
        'cuadrados de diferencia sobre el mismo proyecto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que la norma nacional no define' },
    {
      tipo: 'parrafo',
      texto:
        'Hay cuatro palabras que todo el mundo usa y que **no están definidas ' +
        'en ninguna norma nacional**: aislamiento, antejardín, retiro y altura ' +
        'máxima. La ley solo dice que el POT debe regularlas.',
    },
    {
      tipo: 'lista',
      items: [
        '**Aislamiento:** la distancia que la edificación debe dejar respecto de los linderos. Lateral, posterior o frontal, según el lado.',
        '**Antejardín:** la franja entre el andén y donde arranca la construcción.',
        '**Retiro:** distancia obligatoria a un elemento concreto — una vía, una quebrada, una línea de energía.',
        '**Paramento:** este sí es nacional. Es el «plano vertical que delimita el inicio de la construcción en un predio», y cuando no hay antejardín coincide con la línea de demarcación.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Los tres primeros solo se pueden averiguar en el POT de su municipio, ' +
        'y cambian de un sector a otro dentro de la misma ciudad.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Dónde se consulta' },
    {
      tipo: 'parrafo',
      texto:
        'Cada ciudad tiene su herramienta, y todas son gratuitas. Lo que cambia ' +
        'es qué tan usable es.',
    },
    {
      tipo: 'lista',
      items: [
        '**Cali.** La consulta de uso del suelo es pública, inmediata y sin registro: se busca por dirección o por número predial y entrega un documento con las actividades permitidas. El geovisor del IDESC permite mirar el predio sobre la cartografía del POT.',
        '**Medellín.** Es el mejor caso de los tres: la consulta del mapa de ordenamiento territorial es pública y sin registro, por dirección o por identificador catastral, sobre el Acuerdo 48 de 2014.',
        '**Bogotá.** La Secretaría Distrital de Planeación mantiene la consulta normativa por predio, y el POT vigente es el Decreto 555 de 2021. Las direcciones web de estas herramientas cambian con frecuencia; búsquelas desde el portal de la Secretaría antes de confiar en un enlace guardado.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y una advertencia sobre los geovisores en general: orientan, no ' +
        'certifican. Los propios avisos de estas herramientas lo dicen — para ' +
        'documentos oficiales hay que remitirse al texto del acuerdo y a su ' +
        'cartografía. Sirven para saber por dónde va la cosa, no para ' +
        'sustentar un proyecto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El concepto no es la licencia' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la confusión más costosa del tema, y la norma la resuelve con ' +
        'una claridad que sorprende:',
    },
    {
      tipo: 'cita',
      texto:
        'La expedición de estos conceptos no otorga derechos ni obligaciones a ' +
        'su peticionario y no modifica los derechos conferidos mediante ' +
        'licencias que estén vigentes o que hayan sido ejecutadas.',
      fuente:
        'Decreto 1077 de 2015, art. 2.2.6.1.3.1, sobre el concepto de norma ' +
        'urbanística y el de uso del suelo',
    },
    {
      tipo: 'parrafo',
      texto: 'Y del otro lado, sobre la licencia:',
    },
    {
      tipo: 'cita',
      texto:
        'Los actos administrativos de contenido particular y concreto en firme ' +
        'que autorizan las actuaciones urbanísticas consolidan situaciones ' +
        'jurídicas en cabeza de sus titulares.',
      fuente: 'Ley 388 de 1997, artículo 36',
    },
    {
      tipo: 'parrafo',
      texto:
        '**El concepto es una fotografía informativa de la norma en una fecha. ' +
        'La licencia es un derecho.** Si la norma cambia entre uno y otra, el ' +
        'concepto no lo protege.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo que sí congela la norma es **radicar la solicitud de licencia en ' +
        'legal y debida forma** — es decir, con el expediente completo. Si la ' +
        'norma cambia durante el estudio, el proyecto se resuelve con la ' +
        'vigente el día de la radicación. El escudo se activa al radicar, no al ' +
        'pedir el concepto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Urbano, expansión y rural: lo que cambia' },
    {
      tipo: 'parrafo',
      texto:
        'La clase de suelo no es una etiqueta: decide si el lote es construible ' +
        'hoy, dentro de años, o nunca.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Suelo de expansión: la trampa más cara' },
    {
      tipo: 'cita',
      texto:
        'El suelo de expansión únicamente podrá ser objeto de urbanización y ' +
        'construcción previa adopción del respectivo plan parcial. Mientras no ' +
        'se aprueben los respectivos planes parciales, en las zonas de ' +
        'expansión urbana sólo se permitirá el desarrollo de usos agrícolas y ' +
        'forestales.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.2.1.4.1.6',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Comprar en suelo de expansión sin plan parcial adoptado es comprar ' +
        'un lote que hoy no se puede construir**, y que tampoco se puede ' +
        'subdividir. El vendedor no está mintiendo cuando dice que «va a ser ' +
        'urbano»: puede serlo. Lo que no se sabe es cuándo.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Suelo rural: la unidad agrícola familiar' },
    {
      tipo: 'parrafo',
      texto:
        'En el campo hay un límite que no admite negociación, y su ' +
        'incumplimiento no se sanciona con multa sino con algo peor:',
    },
    {
      tipo: 'cita',
      texto:
        '**Salvo las excepciones que se señalan en el artículo siguiente**, los ' +
        'predios rurales no podrán fraccionarse por debajo de la extensión ' +
        'determinada por el INCORA como Unidad Agrícola Familiar para el ' +
        'respectivo municipio o zona. En consecuencia, **so pena de nulidad ' +
        'absoluta del acto o contrato**, no podrá llevarse a cabo actuación o ' +
        'negocio alguno del cual resulte la división de un inmueble rural ' +
        'cuyas superficies sean inferiores a la señalada como Unidad Agrícola ' +
        'Familiar para el correspondiente municipio por el INCORA.',
      fuente: 'Ley 160 de 1994, artículo 44',
    },
    {
      tipo: 'parrafo',
      texto:
        'Nulidad absoluta significa que el negocio no existió. Es la razón por ' +
        'la que hay lotes rurales vendidos que su comprador no puede escriturar ' +
        'ni licenciar.',
    },
    {
      tipo: 'nota',
      texto:
        'Corrección de un error corriente: **la corporación autónoma regional ' +
        'no fija la unidad agrícola familiar.** Eso corresponde a la autoridad ' +
        'nacional de tierras. Lo que sí hace la corporación es definir las ' +
        'densidades máximas del suelo suburbano. Son dos competencias ' +
        'distintas y se confunden todo el tiempo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Otras dos reglas nacionales del rural que conviene conocer: en suelo ' +
        'suburbano la unidad mínima de actuación **no puede ser inferior a dos ' +
        'hectáreas** —con la excepción de una sola casa de habitación del ' +
        'propietario—, y para comercio, servicios e industria el índice de ' +
        'ocupación **no puede superar el 30 % del predio**; el resto va a ' +
        'conservación de vegetación nativa.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las cesiones: el costo que nadie le contó' },
    {
      tipo: 'parrafo',
      texto:
        'Si compró un lote en un barrio consolidado, esto probablemente no le ' +
        'aplica: las cesiones ya se hicieron cuando se urbanizó. **Si compró un ' +
        'globo de terreno sin urbanizar, sí**, y es la sorpresa más grande del ' +
        'proceso.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ceder es entregar suelo gratis al municipio para vías, espacio público ' +
        'y equipamientos, a cambio del derecho a urbanizar. Los órdenes de ' +
        'magnitud, en dos ciudades:',
    },
    {
      tipo: 'lista',
      items: [
        '**Cali:** 27 % del área neta urbanizable para espacio público y equipamientos —20 % en sitio, 2 % en áreas deficitarias, 5 % para equipamientos— **más** el área de vías que resulte del esquema básico. Es 27 % *y además* vías.',
        '**Bogotá:** en tratamiento de desarrollo, la cesión para parques y plazas se calcula sobre el área neta urbanizable y **escala con cuánto se quiera construir**: los porcentajes van desde el 17 % hasta más del 50 %. Cuanta más edificabilidad, más suelo se cede.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y esto es **antes** de descontar afectaciones. Por eso el área útil ' +
        'termina siendo bastante menor que el lote comprado, y por eso el ' +
        'índice aplicado sobre un área u otra cambia el proyecto entero.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Antes de firmar: qué verificar y dónde' },
    {
      tipo: 'tabla',
      cabeceras: ['Qué puede arruinar el lote', 'Dónde se descarta'],
      filas: [
        ['**Afectación vial.** Una reserva para una obra pública futura', 'Certificado de tradición —la afectación debe estar **inscrita**— y concepto de norma urbanística'],
        ['**Zona de amenaza o riesgo.** Puede exigir estudios detallados o impedir la licencia', 'La entidad de gestión del riesgo del municipio'],
        ['**Ronda hídrica.** Franja de 30 metros a cada lado de cauces, y 100 metros alrededor de nacimientos', 'La corporación autónoma regional competente'],
        ['**Servidumbres.** De paso, de energía, de acueducto', 'Certificado de tradición. **Ojo: una servidumbre de hecho puede no estar inscrita.** Hay que ir al predio'],
        ['**Bien de interés cultural.** Exige anteproyecto aprobado por la autoridad cultural antes de la licencia', 'Listas del Ministerio de Cultura y del instituto de patrimonio local'],
        ['**Área protegida o de reserva**', 'El registro único nacional de áreas protegidas'],
        ['**Cabida y linderos que no coinciden**', 'Certificado de tradición e información catastral. Los visores nacionales orientan pero **no definen límites oficiales**'],
      ],
      nota:
        'El **certificado de tradición y libertad** es el documento que más ' +
        'revela por menos plata: limitaciones al dominio, embargos, ' +
        'servidumbres inscritas y falsa tradición.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El estudio de suelos no se salta' },
    {
      tipo: 'parrafo',
      texto:
        'Circula mucho que por debajo de cierta área no hace falta estudio de ' +
        'suelos. **Conviene desconfiar de esa afirmación**: se apoya en ' +
        'artículos que fueron derogados en 2021, y la remisión quedó huérfana.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí se sostiene es la Ley 400 de 1997, que define al ingeniero ' +
        'geotecnista como **el ingeniero civil que firma el estudio ' +
        'geotécnico** y bajo cuya responsabilidad se fijan los parámetros de ' +
        'cimentación y los efectos de amplificación de la onda sísmica.',
    },
    {
      tipo: 'nota',
      texto:
        'Y un matiz que se lee mal a menudo: la ley excluye de la **supervisión ' +
        'técnica independiente** a las viviendas de uno y dos pisos que sigan ' +
        'el Título E del reglamento sismo resistente. Pero el mismo artículo ' +
        'aclara que esas edificaciones **deben contar igual con diseñador ' +
        'estructural e ingeniero geotecnista responsables**. La excepción es de ' +
        'supervisión, no de estudio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dicho de otro modo: el estudio de suelos no es un requisito de ' +
        'papeleo. Es lo que dice cómo se para su casa.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'En resumen' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Pida el **concepto de norma urbanística** de su predio. La consulta verbal es gratuita por norma; el concepto por escrito cuesta 8,34 UVT donde hay curaduría. Es el punto de partida.',
        'Averigüe los dos índices **y sobre qué área se aplican**.',
        'Divida construcción entre ocupación para saber cuántos pisos caben.',
        'Pregunte qué cuenta y qué no en su ciudad: sótanos, puntos fijos, parqueaderos.',
        'Verifique la **clase de suelo**. Si es de expansión sin plan parcial, hoy no se construye.',
        'Pida el **certificado de tradición** y léalo entero.',
        'Y recuerde que el concepto no le da ningún derecho. **Solo radicar la licencia congela la norma.**',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Con eso ya sabe más que la mayoría de la gente que compra un lote — y ' +
        'sabe cuáles son las preguntas que no se pueden responder desde una ' +
        'pantalla.',
    },
  ],
  etiquetas: ['nacional', 'bogota', 'cali', 'propietario', 'norma-urbana', 'suelo-rural'],
  fuentes: [
    {
      titulo: 'Ley 388 de 1997, de desarrollo territorial',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
      fecha: '1997-07-18',
    },
    {
      titulo: 'Decreto 1077 de 2015, único reglamentario del sector vivienda, ciudad y territorio',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 160 de 1994, sistema nacional de reforma agraria, artículos 38 y 44',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=66789',
      fecha: '1994-08-03',
    },
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Acuerdo 0373 de 2014, Plan de Ordenamiento Territorial de Santiago de Cali',
      editor: 'Departamento Administrativo de Planeación de Cali',
      url: 'https://www.cali.gov.co/planeacion/publicaciones/106497/pot-2014-idesc/',
      fecha: '2014-12-03',
    },
    {
      titulo: 'Decreto Distrital 555 de 2021, Plan de Ordenamiento Territorial de Bogotá',
      editor: 'Alcaldía Mayor de Bogotá',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/index.jsp',
      fecha: '2021-12-29',
    },
    {
      titulo: 'Ley 9 de 1989, de reforma urbana, artículo 37 sobre afectaciones',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1175',
      fecha: '1989-01-11',
    },
    {
      titulo: 'Decreto 1076 de 2015, único reglamentario del sector ambiente',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 1523 de 2012, política nacional de gestión del riesgo de desastres',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47141',
      fecha: '2012-04-24',
    },
    {
      titulo: 'Registro Único Nacional de Áreas Protegidas',
      editor: 'Parques Nacionales Naturales de Colombia',
      url: 'https://runap.parquesnacionales.gov.co/',
      fecha: null,
    },
    {
      titulo: 'Certificado de tradición y libertad en línea',
      editor: 'Superintendencia de Notariado y Registro',
      url: 'https://certificados.supernotariado.gov.co/certificado',
      fecha: null,
    },
  ],
}
