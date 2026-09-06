import type { Post } from '@/lib/types'

/**
 * El complemento de trámite de «Qué puedo construir en suelo rural». Y el
 * artículo obligó a resolver una tensión de honestidad desde el título.
 *
 * **«Tarda el doble» no es un dato medido.** No existe estadística colombiana
 * publicada de duración de licenciamiento comparada entre suelo urbano y rural,
 * y el plazo legal es exactamente el mismo en los dos: 45 días hábiles. Así que
 * el artículo abre desmontando su propio titular y reencuadrando la pregunta,
 * que es donde está el contenido de verdad: **lo que se duplica no es el
 * estudio de la solicitud, es todo lo que hay que tener listo antes de que el
 * reloj empiece a correr.**
 *
 * Ese reencuadre es defendible con norma en la mano y es más útil que la
 * promesa del título. Material verificado ya publicado: los 45 días hábiles y
 * el silencio administrativo positivo, la radicación en legal y debida forma
 * como único acto que congela la norma, las vigencias del Decreto 1783 —36
 * meses solo obra nueva—, la prórroga con 30 días hábiles, la prohibición de
 * cobrar expensas donde no hay curador, y las competencias separadas de la
 * corporación autónoma regional.
 *
 * No se publica ninguna duración de trámite ambiental: los plazos de concesión
 * de aguas y permiso de vertimiento varían por corporación y no se verificaron.
 *
 * Fechada en febrero de 2025.
 */
export const post: Post = {
  slug: 'licencia-de-construccion-en-suelo-rural',
  titulo: 'Licencia de construcción en suelo rural: por qué tarda el doble',
  pilar: 'casa-campestre',
  fecha: '2025-02-06',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'El plazo legal es idéntico al urbano: cuarenta y cinco días hábiles. Lo ' +
    'que se duplica es todo lo que hay que tener listo antes de radicar, y ' +
    'ahí es donde se van los meses que nadie contó.',
  metaDescripcion:
    'Por qué una licencia de construcción en suelo rural tarda más: los ' +
    'trámites ambientales y de servicios que hay que resolver antes de radicar.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Empiezo por desmontar mi propio título, porque es lo honesto: **«el ' +
        'doble» no es un dato medido.** No hay en Colombia una estadística ' +
        'publicada que compare la duración del licenciamiento urbano con el ' +
        'rural, y quien le dé una cifra no la sacó de ninguna parte.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es más: **el plazo legal es exactamente el mismo.** Cuarenta y cinco ' +
        'días hábiles, urbano o rural, curaduría u oficina de planeación. La ' +
        'norma no distingue.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y sin embargo la percepción es correcta, y tiene explicación técnica. ' +
        'Lo que se alarga en el campo no es el estudio de la solicitud: es todo ' +
        'lo que hay que tener resuelto **antes** de que el reloj empiece a ' +
        'correr. Eso sí se puede explicar con norma en la mano, y es de lo que ' +
        'trata este artículo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El reloj no arranca cuando usted entrega papeles' },
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
      tipo: 'parrafo',
      texto:
        'La frase que decide todo no está en la cita, está en la condición: los ' +
        '45 días cuentan **desde la radicación en legal y debida forma**, es ' +
        'decir, con el expediente completo. Un expediente incompleto no arranca ' +
        'el reloj, y tampoco congela la norma.',
    },
    {
      tipo: 'nota',
      texto:
        'Esta es la clave del artículo entero. **En suelo urbano, «expediente ' +
        'completo» son documentos que dependen de usted y de sus diseñadores. ' +
        'En suelo rural, buena parte de ese expediente depende de terceros que ' +
        'tienen sus propios tiempos y su propia cola.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué se añade en el campo' },
    {
      tipo: 'tabla',
      cabeceras: ['Requisito', '¿En suelo urbano?', '¿En suelo rural?', 'De quién depende'],
      filas: [
        ['Certificado de tradición y libertad', 'Sí', 'Sí', 'Registro'],
        ['Concepto de norma urbanística', 'Sí', 'Sí', 'Municipio'],
        ['Levantamiento topográfico', 'Sí', 'Sí, y suele ser más largo', 'Topógrafo'],
        ['Estudio de suelos y diseño estructural', 'Sí', 'Sí', 'Ingeniero civil'],
        ['**Disponibilidad de servicios públicos**', 'Certificado del prestador', '**Solución propia acreditada**, si no hay red', 'Prestador o corporación'],
        ['**Concesión de aguas**', 'No', '**Sí, si el agua es de fuente propia**', 'Corporación autónoma regional'],
        ['**Permiso de vertimiento o sistema de tratamiento aprobado**', 'No', '**Sí, si no hay alcantarillado**', 'Corporación autónoma regional'],
        ['**Delimitación de ronda hídrica**', 'A veces', '**Casi siempre**', 'Corporación autónoma regional'],
        ['**Aprovechamiento forestal**, si hay que talar', 'Rara vez', '**Frecuente**', 'Corporación autónoma regional'],
        ['**Densidad máxima aplicable**', 'No aplica', '**Sí, en suburbano**', 'Corporación autónoma regional'],
        ['**Verificación de unidad agrícola familiar**', 'No aplica', '**Sí, si hubo o habrá subdivisión**', 'Autoridad nacional de tierras'],
      ],
      nota:
        'Cuente las filas en negrita: son siete requisitos que en la ciudad no ' +
        'existen, y **seis de ellos dependen de la misma entidad**, la ' +
        'corporación autónoma regional. Ese cuello de botella es la explicación ' +
        'real del «doble».',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los cuatro motivos del atraso, en orden de peso' },

    { tipo: 'titulo', nivel: 3, texto: '1. Los trámites ambientales son procesos aparte' },
    {
      tipo: 'parrafo',
      texto:
        'Una concesión de aguas o un permiso de vertimiento no son un anexo del ' +
        'expediente de licencia: son actuaciones administrativas completas, con ' +
        'su solicitud, su visita técnica, su evaluación y su acto ' +
        'administrativo. Corren en la corporación autónoma regional, no en la ' +
        'curaduría, y su duración depende de cada corporación.',
    },
    {
      tipo: 'nota',
      texto:
        'No publico plazos de estos trámites porque varían por corporación y no ' +
        'los pude verificar en fuente oficial comparable. Lo que sí puedo ' +
        'afirmar: **son secuenciales respecto de la licencia, no paralelos**, ' +
        'cuando el expediente los exige como requisito.',
    },

    { tipo: 'titulo', nivel: 3, texto: '2. La consulta de norma es más difícil de hacer' },
    {
      tipo: 'parrafo',
      texto:
        'En una ciudad grande, el concepto de norma urbanística se pide en ' +
        'línea y llega con uso, tratamiento e índices. En muchos municipios ' +
        'rurales el POT no está publicado en un visor consultable, la ' +
        'cartografía es de baja resolución y la ubicación exacta del predio ' +
        'sobre esa cartografía es discutible.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso produce un ida y vuelta que no aparece en ningún plazo legal: ' +
        'aclarar en qué categoría cae el predio antes de poder proyectar nada.',
    },

    { tipo: 'titulo', nivel: 3, texto: '3. Casi nunca hay curaduría' },
    {
      tipo: 'parrafo',
      texto:
        'En los municipios sin curador urbano designado, la licencia la expide ' +
        'la oficina de planeación del municipio. Eso tiene una ventaja ' +
        'económica real —**está prohibido cobrar expensas**— y un costo ' +
        'operativo:',
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
        'La oficina de planeación de un municipio pequeño hace muchas cosas ' +
        'además de licenciar, y la licencia compite por el tiempo del mismo ' +
        'equipo. **El plazo legal es el mismo; la capacidad instalada no.**',
    },

    { tipo: 'titulo', nivel: 3, texto: '4. El expediente se radica incompleto' },
    {
      tipo: 'parrafo',
      texto:
        'Es el error más caro y el más frecuente. Radicar «para ganar fecha» ' +
        'sin todo listo no gana nada: el plazo no empieza a correr, la norma no ' +
        'se congela, y en el peor caso el trámite termina en desistimiento.',
    },
    {
      tipo: 'nota',
      texto:
        'En rural, la causa número uno de expediente incompleto es la ' +
        'acreditación de agua y saneamiento. Se deja para el final porque ' +
        'parece un tema de obra, y es un tema de trámite.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La otra confusión: qué licencia necesita' },
    {
      tipo: 'parrafo',
      texto:
        'En el campo se necesitan a veces dos licencias distintas, y pedir la ' +
        'que no es cuesta el trámite completo:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué quiere hacer', 'Qué licencia', 'Vigencia'],
      filas: [
        ['Dividir un predio rural', 'Subdivisión', '12 meses, improrrogable'],
        ['Crear predios con obras de infraestructura', 'Parcelación', '36 meses'],
        ['Construir la casa desde cero', 'Construcción en **obra nueva**', '36 meses'],
        ['Ampliar, adecuar, modificar o reforzar lo existente', 'Construcción en la modalidad correspondiente', '**24 meses**'],
      ],
      nota:
        'Decreto 1783 de 2021, artículo 27. **Los 36 meses no son ' +
        'universales**: solo cubren obra nueva, urbanización y parcelación. Es ' +
        'el error más repetido del tema, incluso entre quienes corrigen el ' +
        'error anterior de decir 24 para todo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La prórroga se pide **a más tardar 30 días hábiles antes** del ' +
        'vencimiento —hábiles, no calendario—, con documentación completa y ' +
        'manifestación bajo juramento de que la obra ya inició.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se acorta de verdad' },
    {
      tipo: 'parrafo',
      texto:
        'Casi todo el tiempo que se puede ganar está antes de radicar, no ' +
        'después. En orden de retorno:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Empiece por la corporación autónoma regional, no por el municipio.** Es quien decide más cosas y quien tarda más. Pregunte por escrito: densidad aplicable, ronda hídrica sobre el predio, y qué exige para agua y vertimientos.',
        '**Encargue el estudio de suelos apenas tenga el lote.** Es de lo poco que se puede adelantar sin haber decidido nada sobre la casa, y condiciona la estructura entera.',
        '**Resuelva agua y saneamiento en la etapa de anteproyecto**, no en la de acabados. Definen dónde se puede parar la casa tanto como el suelo.',
        '**Verifique la unidad agrícola familiar antes de comprar.** Si el predio nació de una división irregular, ningún trámite posterior lo arregla.',
        '**Radique completo.** Es la única forma de que los cuarenta y cinco días hábiles sean cuarenta y cinco días hábiles.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y una consulta que casi nadie hace y es gratuita: las consultas ' +
        'verbales sobre normas urbanísticas no se pueden cobrar. Antes de ' +
        'encargar un plano, vaya y pregunte.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La respuesta corta' },
    {
      tipo: 'parrafo',
      texto:
        'La licencia rural no tarda más porque el funcionario se demore más. ' +
        'Tarda más porque **el expediente exige siete cosas que en la ciudad no ' +
        'existen, y seis de ellas las decide una entidad distinta de la que ' +
        'expide la licencia.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien empieza por la corporación autónoma regional y deja la ' +
        'radicación para cuando tiene todo, no vive ese «doble». Quien empieza ' +
        'por el plano, sí.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'suelo-rural', 'licencia', 'norma-urbana'],
  fuentes: [
    {
      titulo: 'Decreto 1077 de 2015, plazos, trámite y expensas de las licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1783 de 2021, artículo 27: vigencia de las licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175086',
      fecha: '2021-12-20',
    },
    {
      titulo: 'Decreto 1076 de 2015, único reglamentario del sector ambiente: concesiones de agua y permisos de vertimiento',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 99 de 1993, competencias de las corporaciones autónomas regionales',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=297',
      fecha: '1993-12-22',
    },
    {
      titulo: 'Ley 160 de 1994, unidad agrícola familiar y fraccionamiento de predios rurales',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=66789',
      fecha: '1994-08-03',
    },
  ],
}
