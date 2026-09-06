import type { Post } from '@/lib/types'

/**
 * Pilar de trámites. Público muy concreto: quien ya sabe que su edificación
 * tiene un problema estructural y está a punto de gastar mucho.
 *
 * **No se afirma que haya reglamento nuevo.** La AIS 100-24 existe como insumo
 * técnico y no es obligatoria: le falta el decreto que la adopte. Circulan tres
 * cosas distintas mezcladas —el reglamento vigente, el documento gremial y los
 * anexos técnicos que sí entraron por decreto— y el artículo las separa.
 * Comprobado el 6 de septiembre de 2026: sigue sin decreto, y el propio texto
 * lleva esa fecha de corte escrita dentro.
 *
 * Perenne: no menciona el sismo de agosto de 2026, para que la pieza sirva
 * igual dentro de cinco años. Fechado en octubre de 2025.
 *
 * **Corregido el 6 de septiembre de 2026, y la corrección merece quedar
 * escrita, porque era una deuda declarada en esta misma cabecera.**
 *
 * 1. La versión anterior decía que **no se podía nombrar el capítulo** que
 *    regula la evaluación de edificaciones existentes, porque su designación no
 *    se había podido verificar. Sí se podía. Es el **capítulo A.10** del Título
 *    A, «Evaluación e Intervención de Edificaciones construidas antes de la
 *    vigencia de la presente versión del Reglamento», y se verificó leyendo el
 *    Título A: el encabezado del capítulo dice eso mismo ya en el texto
 *    adoptado por el Decreto 926 de 2010. Cuidado con la tabla de contenido de
 *    esa edición: ahí el capítulo aparece sin las tres primeras palabras, y esa
 *    discrepancia es probablemente la razón por la que la designación se dio
 *    por no verificable. El artículo ahora nombra el capítulo *y* dice qué hay
 *    dentro, que es donde estaba el valor.
 *
 * 2. La versión anterior decía «con varios decretos modificatorios
 *    posteriores» y no los nombraba, así que se quedaba en 2010 sin que nadie
 *    lo notara. La cadena entera va ahora en el cuerpo. Se verificó contra el
 *    artículo 1 del Decreto 1401 de 2023, que la recita: «adoptado mediante el
 *    Decreto 926 de 19 de marzo de 2010, modificado por los Decretos 2525 de
 *    2010, 092 de 2011, 340 de 2012, 945 de 2017, 2113 de 2019, 1711 de 2021».
 *    Más el 1580 de 2023, que corrigió un yerro del 1401. Nueve en total, y
 *    ninguno posterior a 2023 al 6 de septiembre de 2026.
 *
 * **Lo que hace instructivo el caso:** dos de esos decretos tocan el capítulo
 * A.10 por dentro. El 945 de 2017 le añadió el A.10.1.3.7 —Títulos J y K— y
 * convirtió la «supervisión técnica» del A.10.1.6 en «supervisión técnica
 * independiente». El 1401 de 2023, corregido por el 1580, le añadió el
 * A.10.9.2.7 para viviendas de mampostería. Es decir: el PDF del Título A que
 * se encuentra primero en Google —el de 2010, que alojan el IDRD y Camacol— es
 * un texto superado en el punto exacto que este artículo necesita, y ninguna
 * guarda puede avisarlo, porque el decreto que lo adopta sigue vigente y con
 * fecha anterior a la del artículo. Es la misma enfermedad que los numerales
 * suspendidos del Decreto 1082 en el pilar institucional.
 *
 * Se comprobaron las seis URL de `fuentes` que ya estaban: las seis abren lo
 * que dicen abrir, la de asosismica incluida.
 */
export const post: Post = {
  slug: 'reforzamiento-estructural-y-nsr-10',
  titulo: 'Reforzamiento estructural: qué exige la norma y qué cuesta el trámite',
  pilar: 'tramites',
  fecha: '2025-09-08',
  actualizado: '2026-09-06',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Le dijeron que su edificación necesita reforzamiento. Qué significa eso ' +
    'en términos de norma, quién puede firmarlo, qué modalidad de licencia ' +
    'aplica y por qué el trámite cuesta menos de lo que teme — pero la obra ' +
    'no.',
  metaDescripcion:
    'Qué exige la norma sismo resistente para reforzar una edificación ' +
    'existente en Colombia, y qué licencia se necesita.',
  puerta: 'diagnostico-de-edificaciones',
  etiquetas: ['nacional', 'propietario', 'administrador', 'estructura', 'licencia'],
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Le entregaron un informe que dice que la edificación necesita ' +
        'reforzamiento estructural. Es una frase que asusta y que casi nadie ' +
        'sabe traducir a decisiones.',
      },
    {
      tipo: 'parrafo',
      texto:
        'Esto es lo que significa en términos de norma, qué firmas hacen falta ' +
        'y qué se puede esperar del trámite.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué norma manda' },
    {
      tipo: 'parrafo',
      texto:
        'El reglamento vigente es la **NSR-10**, adoptada por el **Decreto 926 ' +
        'de 2010** bajo la Ley 400 de 1997. No se ha quedado quieta: la han ' +
        'modificado, en este orden, los **Decretos 2525 de 2010, 092 de 2011, ' +
        '340 de 2012, 945 de 2017, 2113 de 2019, 1711 de 2021, 1401 de 2023 y ' +
        '1580 de 2023**. Nueve decretos en total, y lo que rige es el texto que ' +
        'resulta de todos ellos, no el PDF de 2010 que aparece primero en una ' +
        'búsqueda.',
    },
    {
      tipo: 'nota',
      texto:
        'Circulan tres cosas mezcladas y conviene separarlas. **No hay ' +
        'reglamento nuevo.** La **AIS 100-24**, preparada por la Asociación ' +
        'Colombiana de Ingeniería Sísmica, suele presentarse como «la norma ' +
        'nueva», pero **no es obligatoria: le falta el decreto que la adopte**. ' +
        'Cosa distinta son los anexos técnicos de esa misma asociación que sí ' +
        'entraron al reglamento por decreto, y que aparecen más abajo. Fecha de ' +
        'corte de esta comprobación: 6 de septiembre de 2026. Hasta entonces, ' +
        'lo vigente es la NSR-10.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y sobre edificaciones existentes, la ley es explícita en lo que ordena ' +
        'que el reglamento contenga:',
    },
    {
      tipo: 'cita',
      texto:
        'Los procedimientos para evaluar la vulnerabilidad sísmica de las ' +
        'edificaciones existentes antes de la vigencia de la presente ley.',
      fuente: 'Ley 400 de 1997, artículo 48, numeral 16',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es decir: **evaluar y reforzar lo existente no es un vacío normativo**. ' +
        'Tiene procedimiento propio dentro del Título A del reglamento, distinto ' +
        'del que se aplica a una obra nueva, y tiene nombre y número: el ' +
        '**capítulo A.10**, «Evaluación e Intervención de Edificaciones ' +
        'construidas antes de la vigencia de la presente versión del ' +
        'Reglamento». Vale la pena pedirlo así, por su número: quien le entregue ' +
        'un informe de vulnerabilidad debería estar trabajando sobre ese ' +
        'capítulo, y decirlo en la primera página.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo es obligatorio evaluar' },
    {
      tipo: 'parrafo',
      texto:
        'No es una decisión libre del propietario en todos los casos. El propio ' +
        'A.10.1.3 fija el alcance del capítulo, y de ahí salen los casos en que ' +
        'la evaluación se vuelve exigible:',
    },
    {
      tipo: 'lista',
      items: [
        '**Cambia el uso** de la edificación (A.10.1.3.2). Una casa que pasa a ser colegio, oficina o bodega recibe cargas distintas de aquellas para las que se diseñó. Y el reglamento cuenta como cambio de uso tanto el urbanístico —de residencial a comercial— como el paso de uno de los grupos de uso a otro superior.',
        '**Se amplía o se modifica la estructura** (A.10.1.3.4). El capítulo nombra literalmente las «ampliaciones adosadas» y las «ampliaciones en altura»: levantar un piso no es una interpretación, está escrito.',
        '**Hubo daño por sismo** u otro evento (A.10.1.3.6), cuando el daño es de moderado a severo —en la estructura, en los elementos no estructurales o en ambos— y la edificación no está declarada de demolición obligatoria.',
        '**Lo exige la autoridad competente.** Si la oficina municipal de gestión del riesgo emite un concepto técnico de daños graves en la estructura portante, o media una orden judicial o administrativa, tramitar el reforzamiento deja de ser optativo. En propiedad horizontal, el titular de esa licencia es la asamblea de copropietarios.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y hay una obligación que casi nadie recuerda: el artículo 54 de la Ley ' +
        '400 dio **tres años para evaluar y seis para reforzar** las ' +
        '**edificaciones indispensables y de atención a la comunidad** en zonas ' +
        'de amenaza sísmica alta e intermedia. Hospitales, colegios, estaciones ' +
        'de bomberos. Para las que la NSR-10 metió en los grupos de uso III y IV ' +
        'sin que estuvieran antes —las escolares, entre otras—, el propio ' +
        'A.10.9.1 puso fecha: **15 de diciembre de 2013** para los estudios y ' +
        '**15 de diciembre de 2016** para el refuerzo. Vencieron.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Hasta dónde hay que reforzar' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que casi nadie explica y la que de verdad mueve el ' +
        'presupuesto. El reglamento **no exige lo mismo a todas las ' +
        'edificaciones existentes**: el objetivo del refuerzo depende del uso y ' +
        'de la época en que se construyó.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['La edificación', 'A qué nivel hay que llevarla'],
      filas: [
        [
          'Grupos de uso III y IV —indispensables y de atención a la comunidad—, sea cual sea su edad',
          'Seguridad **equivalente a la de una edificación nueva**',
        ],
        [
          'Grupos de uso I y II, construida bajo la NSR-98, después del 19 de febrero de 1998',
          'Seguridad **equivalente a la de una edificación nueva**',
        ],
        [
          'Grupos de uso I y II, construida bajo el Decreto 1400 de 1984: entre el 1 de diciembre de 1984 y el 19 de febrero de 1998',
          'Equivalente a nueva, pero se admite un **índice de flexibilidad de hasta 1,5**; o **seguridad limitada**, si el propietario la acepta',
        ],
        [
          'Grupos de uso I y II, anterior al 1 de diciembre de 1984',
          'Como mínimo, **seguridad limitada**',
        ],
      ],
      nota:
        'NSR-10, A.10.9.2. Cuando se acude al nivel de **seguridad limitada**, ' +
        'el reglamento exige un memorial firmado por el diseñador estructural y ' +
        'el propietario declarando que se usó ese nivel, **protocolizado por ' +
        'escritura pública en notaría**. No es un trámite decorativo: es la ' +
        'constancia de que el propietario supo que su edificación no quedaría al ' +
        'nivel de una nueva.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos casos tienen manual propio, y los dos entraron al reglamento ' +
        'después de 2010. Para **viviendas de mampostería de uno, dos y tres ' +
        'pisos**, el Decreto 1401 de 2023 —corregido por el Decreto 1580 del ' +
        'mismo año— añadió el A.10.9.2.7 y permite evaluarlas e intervenirlas ' +
        'siguiendo la norma **AIS 410-23**, «Evaluación y Reducción de la ' +
        'Vulnerabilidad Sísmica en viviendas de mampostería». Para **bienes de ' +
        'interés cultural de uno y dos pisos en adobe y tapia pisada**, el ' +
        'Decreto 2113 de 2019 incorporó el **AIS-610-EP-2017**. Si su caso es ' +
        'uno de esos dos, pídalo por su nombre.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién firma qué' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí no hay margen. La ley reserva las firmas, y quien firma responde:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Documento', 'Quién lo firma'],
      filas: [
        ['Evaluación de vulnerabilidad y diseño del reforzamiento', '**Ingeniero civil**, diseñador estructural'],
        ['Estudio geotécnico, si el caso lo requiere', '**Ingeniero civil** geotecnista'],
        ['Levantamiento arquitectónico y proyecto de intervención', 'Arquitecto con matrícula'],
      ],
      nota:
        'Ley 400 de 1997, artículos 4 y 26. Un arquitecto puede acompañar todo ' +
        'el proceso, coordinar y tramitar — pero **el dictamen estructural no lo ' +
        'firma**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y en edificaciones que **tengan o superen** los 2.000 m², la revisión ' +
        'de los diseños estructurales debe hacerla un profesional **distinto del ' +
        'diseñador e independiente laboralmente de él**, a costa de quien pide ' +
        'la licencia. Ojo con el umbral: si la edificación no llega a esa cifra ' +
        'pero la ampliación que va a tramitar la lleva hasta ahí sumada a lo ' +
        'existente, la revisión independiente también se exige.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay una firma más que no suele aparecer en los presupuestos y que el ' +
        'reglamento exige **en todos los casos**, sin umbral de área: la ' +
        'construcción de la intervención estructural debe someterse a ' +
        '**supervisión técnica independiente** (A.10.1.6). No es opcional y no ' +
        'la hace el diseñador.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La licencia: cuál es y cuánto dura' },
    {
      tipo: 'parrafo',
      texto:
        'El reforzamiento estructural es una **modalidad propia de licencia de ' +
        'construcción**, no una obra menor que se pueda hacer sin permiso. Y ' +
        'tiene tres particularidades que conviene conocer antes de presupuestar.',
    },
    {
      tipo: 'lista',
      items: [
        '**Dura 24 meses**, prorrogables una vez por 12. Los 36 meses que se citan por todas partes son de obra nueva, urbanización y parcelación. Esta modalidad no está ahí.',
        '**Las expensas se liquidan sobre una base reducida.** Donde hay curaduría, el reforzamiento estructural liquida sobre el **30 % del área a intervenir**, no sobre el total. Es un alivio real en el trámite.',
        '**Se puede reforzar una edificación que nunca tuvo licencia.** La modalidad se otorga sin perjuicio del posterior reconocimiento, siempre que la obra se haya terminado **al menos cinco años antes** de pedir el reforzamiento. Tramitada sola, no aprueba usos ni autoriza obras distintas del refuerzo.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y un incentivo que casi nadie usa: la ley faculta a los municipios a ' +
        '**eximir del impuesto de expedición de la licencia de remodelación y de ' +
        'los impuestos prediales, por un lapso que cada municipio define**, a ' +
        'las edificaciones preexistentes que se actualicen y se ajusten mediante ' +
        'una intervención conforme al reglamento. Pregunte en su alcaldía si su ' +
        'municipio lo adoptó — es una consulta gratuita que puede cambiar el ' +
        'número.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El orden correcto, y el que arruina el presupuesto' },
    {
      tipo: 'parrafo',
      texto:
        'El error más caro es contratar la obra antes de tener el diagnóstico. ' +
        'La secuencia que funciona:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Levantamiento de lo que existe.** Medidas reales, no las de la escritura.',
        '**Evaluación de vulnerabilidad**, firmada por ingeniero estructural. Aquí se sabe si hay que reforzar, cuánto y dónde.',
        '**Estudio geotécnico**, si el diagnóstico lo pide. A veces el problema no está arriba.',
        '**Diseño del reforzamiento**, que es un proyecto en sí mismo.',
        '**Licencia** en la modalidad de reforzamiento estructural.',
        '**Obra**, con seguimiento de quien diseñó y con la supervisión técnica independiente que el reglamento exige siempre.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Saltarse el paso 2 es la razón por la que aparecen presupuestos de ' +
        'reforzamiento que varían diez veces entre sí: **están cotizando ' +
        'soluciones distintas para un problema que nadie ha definido.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué esperar del costo' },
    {
      tipo: 'parrafo',
      texto:
        'No voy a dar cifras, y por una razón: **no existe fuente colombiana ' +
        'publicada con metodología para el costo de un reforzamiento.** Depende ' +
        'del sistema estructural, del daño, de la accesibilidad y de si la ' +
        'edificación se puede desocupar.',
    },
    {
      tipo: 'parrafo',
      texto: 'Lo que sí se puede decir sobre la estructura del costo:',
    },
    {
      tipo: 'lista',
      items: [
        'El **trámite** es la parte barata, y con la base reducida del 30 % lo es más de lo que la gente teme.',
        'La **evaluación y el diseño** son proporcionalmente caros respecto de una obra nueva, porque hay que descubrir lo que ya existe.',
        'La **obra** es donde está el dinero, y su costo lo determina el diagnóstico — no al revés.',
        'Hay un renglón que sorprende: en una intervención estructural, cumplir los **Títulos J y K** —protección contra el fuego y requisitos complementarios— queda **a voluntad del propietario**, salvo cuando hay cambio de uso o ampliación, donde es obligatorio (A.10.1.3.7). Es decir, en los dos casos más frecuentes.',
        'Y en propiedad horizontal hay que sumar el tiempo: el fondo de imprevistos va primero, y **la cuota extraordinaria solo se aprueba si el fondo resulta insuficiente**.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Cualquier cifra que le den antes de la evaluación es un estimado sobre ' +
        'un problema desconocido. Puede servir para saber si vale la pena ' +
        'seguir; no para contratar.',
    },
  ],
  fuentes: [
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Decreto 926 de 2010, que adopta el Reglamento NSR-10',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39255',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'NSR-10, Título A, capítulo A.10 — Evaluación e Intervención de ' +
        'Edificaciones construidas antes de la vigencia de la presente versión ' +
        'del Reglamento. Texto adoptado por el Decreto 926 de 2010',
      editor: 'Instituto Distrital de Recreación y Deporte, Bogotá',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/titulo-a-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'Decreto 945 de 2017, que modifica el Título A de la NSR-10 y añade el ' +
        'Apéndice A-6 sobre revisión independiente de los diseños estructurales',
      editor: 'Régimen Legal de Bogotá, Alcaldía Mayor de Bogotá',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=71292',
      fecha: '2017-06-05',
    },
    {
      titulo:
        'Decreto 2113 de 2019, que incorpora a la NSR-10 el documento ' +
        'AIS-610-EP-2017 sobre edificaciones patrimoniales de adobe y tapia pisada',
      editor: 'Normograma del Ministerio de Cultura',
      url: 'https://normograma.mincultura.gov.co/mincultura/compilacion/docs/decreto_2113_2019.htm',
      fecha: '2019-11-25',
    },
    {
      titulo:
        'Decreto 1401 de 2023, que modifica parcialmente la NSR-10 y recita la ' +
        'cadena de decretos modificatorios',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/normativa/decreto-1401-2023',
      fecha: '2023-08-25',
    },
    {
      titulo:
        'Anexo técnico del Decreto 1580 de 2023: sección A.10.9.2.7 y norma ' +
        'AIS 410-23, evaluación y reducción de la vulnerabilidad sísmica en ' +
        'viviendas de mampostería',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://minvivienda.gov.co/sites/default/files/normativa/anexo-tecnico-decreto-1580_2023.pdf',
      fecha: '2023-09-25',
    },
    {
      titulo: 'Decretos modificatorios de la NSR-10',
      editor: 'Asociación Colombiana de Ingeniería Sísmica',
      url: 'https://asosismica.org.co/decretos-modificatorios-nsr-10/',
      fecha: null,
    },
    {
      titulo: 'Decreto 1077 de 2015, modalidades y vigencia de las licencias',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1890 de 2021, liquidación de expensas de curaduría en UVT',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/normativa/decreto-1890-de-2021',
      fecha: '2021-12-30',
    },
    {
      titulo: 'Ley 1796 de 2016, revisión independiente de diseños estructurales',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
  ],
}
