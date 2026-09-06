import type { Post } from '@/lib/types'

/**
 * La pieza de trámites que faltaba debajo de todas las demás: quien busca
 * «licencia de construcción» acaba, tarde o temprano, en la puerta de una
 * curaduría sin saber qué es eso ni por qué le cobran lo que le cobran.
 *
 * Tres cosas que este artículo dice y que la web colombiana no dice bien:
 *
 * 1. **Usted elige.** No por costumbre: por norma. La jurisdicción de cada
 *    curador es la totalidad del territorio del municipio, y el reparto
 *    obligatorio existe solo para las solicitudes de entidades estatales y
 *    para la vivienda de interés social individual. Todo lo demás lo radica el
 *    interesado donde quiera. La consecuencia práctica —que una vez elegido,
 *    las prórrogas y modificaciones vuelven al mismo— también está escrita.
 * 2. **Lo que no pueden cobrar.** Las consultas verbales sobre normas
 *    urbanísticas vigentes no generan expensas; la tabla de tarifas tiene que
 *    estar a la vista sin que mirarla cueste; y mientras el Ministerio no
 *    apruebe expensas para actuaciones nuevas, los curadores no pueden cobrar
 *    por conceptos distintos de los del decreto, «so pena de la
 *    responsabilidad a que haya lugar».
 * 3. **En los municipios sin curador la licencia no cuesta expensas**, y no
 *    es un favor del alcalde: la norma prohíbe expresamente ese cobro a las
 *    autoridades municipales.
 *
 * Todo el articulado se leyó en el texto compilado del Decreto 1077 y en el
 * Decreto 1890 completo, no en glosas. La ecuación de las expensas se
 * describe por sus componentes y no se transcribe: en la fuente oficial va
 * como imagen, y escribirla de memoria sería inventarla.
 *
 * Fechada en mayo de 2025.
 */
export const post: Post = {
  slug: 'curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide',
  titulo: 'Curaduría urbana: qué es, cuál elegir y qué documentos pide',
  pilar: 'tramites',
  fecha: '2025-05-06',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Un curador no es una oficina de la alcaldía, y usted escoge cuál. Qué ' +
    'hace, cómo se liquidan las expensas en UVT, qué no le pueden cobrar ' +
    '—empezando por las consultas verbales— y qué documentos hay que llevar.',
  metaDescripcion:
    'Qué hace una curaduría urbana, cómo se eligen, cómo se liquidan las ' +
    'expensas en UVT y qué documentos pide una licencia de construcción.',
  puerta: 'proyecto-nuevo',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'licencia', 'norma-urbana', 'costos'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Casi todo el mundo llega a una curaduría creyendo dos cosas que son ' +
        'falsas: que es una dependencia de la alcaldía, y que le tocó esa ' +
        'porque le corresponde por dirección.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ni lo uno ni lo otro. Un curador urbano es un particular, y salvo dos ' +
        'excepciones, **usted escoge cuál**.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué es exactamente un curador urbano' },
    {
      tipo: 'parrafo',
      texto:
        'La definición legal es corta y vale la pena leerla despacio: es un ' +
        'particular encargado de estudiar, tramitar y expedir licencias de ' +
        'parcelación, urbanización, construcción y subdivisión de predios, a ' +
        'petición del interesado. Y la curaduría implica **el ejercicio de una ' +
        'función pública**: verificar que el proyecto cumpla las normas ' +
        'urbanísticas y de edificación vigentes.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De ahí salen tres consecuencias que ordenan toda la relación:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Es autónomo.** No recibe instrucciones de la alcaldía sobre cómo resolver su caso. Y es responsable disciplinaria, fiscal, civil y penalmente por los daños que cause a los usuarios, a terceros o a la administración.',
        '**No interpreta la norma.** Verifica la concordancia del proyecto con la norma vigente. Solo cuando no hay norma exactamente aplicable, o cuando hay contradicción entre normas, la facultad de interpretar pasa a la oficina de planeación del municipio, que lo hace por circular.',
        '**No es su asesor.** Revisa, observa y decide. Diseñar el proyecto para que cumpla no es su trabajo, y confundir las dos cosas es la causa más frecuente de un trámite que se alarga.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Para ser designado curador hay que ser arquitecto, ingeniero o ' +
        'posgraduado en urbanismo o planificación, acreditar diez años de ' +
        'experiencia y contar con un grupo interdisciplinario de apoyo. Ese ' +
        'grupo es obligatorio y tiene composición mínima fijada por norma: ' +
        '**jurídica, arquitectónica y de ingeniería civil especializada en ' +
        'estructuras**. Por eso su proyecto se revisa desde cuatro frentes a la ' +
        'vez.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuál elegir, y por qué puede elegir' },
    {
      tipo: 'parrafo',
      texto:
        'La libertad de elección no es una costumbre: se deduce de dos reglas ' +
        'escritas.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**La primera es la jurisdicción.** La de un curador urbano comprende ' +
        'la totalidad del territorio del municipio o distrito, salvo las áreas ' +
        'que las normas urbanísticas señalen como no aptas para actuaciones ' +
        'urbanísticas o con restricciones especiales. No hay curadores «por ' +
        'zona»: todos pueden actuar sobre todo el municipio.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**La segunda es el reparto.** La norma somete a reparto obligatorio ' +
        'entre los distintos curadores solamente dos clases de solicitudes:',
    },
    {
      tipo: 'lista',
      items: [
        'Las que presentan **las entidades estatales**.',
        'Las de **vivienda de interés social individual**, presentadas por entidades o por particulares.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Si su caso no es ninguno de esos dos, no hay reparto que lo asigne. ' +
        'Usted radica donde decida.',
    },
    {
      tipo: 'nota',
      texto:
        'Y la decisión tiene cola: las prórrogas, modificaciones y ' +
        'revalidaciones se tramitan ante **el mismo curador que expidió la ' +
        'licencia**. Elegir bien no es un trámite de un día, es elegir con ' +
        'quién va a trabajar durante los años que dure el proyecto.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Sobre qué mirar para escoger, lo digo como criterio de oficio y no ' +
        'como norma: los tiempos reales de respuesta, la experiencia del grupo ' +
        'de apoyo en proyectos parecidos al suyo, la claridad de las actas de ' +
        'observaciones que producen, y si trabajan por medios electrónicos. ' +
        'Esto último no es un detalle: la norma les obliga a habilitar ' +
        'sistemas de transmisión electrónica de datos y a mantener conexión ' +
        'electrónica con las oficinas de planeación, y hay diferencias reales ' +
        'entre unos y otros.',
    },
    {
      tipo: 'nota',
      texto:
        'El listado de curadores designados en cada municipio lo lleva la ' +
        'Superintendencia de Notariado y Registro, que es la entidad que los ' +
        'vigila disciplinariamente. Es la fuente que conviene consultar antes ' +
        'de radicar, porque cambia con los concursos de méritos.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se liquidan las expensas' },
    {
      tipo: 'parrafo',
      texto:
        'Las expensas son lo que cobra el curador por prestar el servicio: ' +
        'cubren los gastos de la curaduría, el pago de su grupo ' +
        'interdisciplinario y su propia remuneración. Desde el **Decreto 1890 ' +
        'de 2021** se liquidan en Unidad de Valor Tributario, y no en salarios ' +
        'mínimos como antes.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La fórmula de las licencias de parcelación, urbanización y ' +
        'construcción combina cinco componentes:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Componente', 'Qué es', 'Valor'],
      filas: [
        [
          '**Cf** · cargo fijo',
          'Tarifa única nacional que se paga al radicar',
          '**10,01 UVT**',
        ],
        [
          '**Cv** · cargo variable',
          'Tarifa única nacional sobre la que operan los demás factores',
          '**20,02 UVT**',
        ],
        [
          '**i** · uso y estrato',
          'Vivienda, por estrato; otros usos, por rango de metros cuadrados',
          'Estratos 1 y 2: 0,5 · estrato 3: 1,0 · estrato 4: 1,5 · estrato 5: 2,0 · estrato 6: 2,5',
        ],
        [
          '**m** · factor de municipio',
          'Según el tamaño del mercado y la categoría presupuestal del municipio',
          'Bogotá, Cali y Medellín: 0,938 · Cartagena y Cúcuta: 0,900 · Barranquilla: 0,855 · Bucaramanga, Envigado, Ibagué y Pereira: 0,760 · Tuluá: 0,510',
        ],
        [
          '**j** · factor de área',
          'Regula la relación entre la expensa y los metros cuadrados solicitados',
          'Proyectos de hasta 100 m²: **0,45**. Por encima, se calcula con las expresiones del decreto según el área',
        ],
      ],
      nota:
        'Decreto 1890 de 2021, artículo 1, que sustituyó el artículo 2.2.6.6.8.3 ' +
        'del Decreto 1077 de 2015. La tabla del factor municipal la trae el ' +
        'artículo 2.2.6.6.8.4 y cubre los municipios donde la competencia es de ' +
        'los curadores; para un municipio que designe curadores por primera vez, ' +
        'el Ministerio de Vivienda fija su factor por resolución.',
    },
    {
      tipo: 'nota',
      texto:
        'La ecuación completa no se transcribe aquí a propósito: en el texto ' +
        'oficial va como imagen, y escribirla de memoria sería inventarla. Lo ' +
        'que sí se puede verificar y sirve para comprobar una liquidación son ' +
        'los cinco componentes de arriba, con sus valores.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Sobre el cargo fijo hay dos reglas que conviene saber antes de ' +
        'radicar: **pagarlo es condición para que la solicitud se radique**, y ' +
        '**no se reintegra** si la licencia se niega o si usted desiste.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Los descuentos que sí existen' },
    {
      tipo: 'lista',
      items: [
        '**Vivienda de interés social: 50 %.** Las expensas se liquidan a la mitad, por mandato del artículo 11 de la Ley 810 de 2003, que el propio decreto invoca.',
        '**Dotacionales públicos: 50 %.** Para todas las modalidades de licencia de construcción y actos de reconocimiento de dotacionales públicos de **salud, educación y bienestar social** cuya titularidad sea de entidades públicas de cualquier orden.',
        '**VIS individual unifamiliar o bifamiliar en estratos 1, 2 y 3:** expensa única de **8,34 UVT** por unidad de vivienda, y además liquidada al 50 %.',
        '**Adecuación sin ejecución de obras:** solo se paga el cargo fijo, y liquidado al 50 %.',
        '**Restauración, reconstrucción, modificación y reforzamiento estructural:** las expensas se liquidan sobre el **30 %** del área a intervenir.',
      ],
    },

    { tipo: 'titulo', nivel: 3, texto: 'Las otras actuaciones, con su tarifa' },
    {
      tipo: 'tabla',
      cabeceras: ['Actuación', 'Expensa'],
      filas: [
        ['Concepto de norma urbanística', '**8,34 UVT**'],
        ['Concepto de uso del suelo', '**1,67 UVT**'],
        ['Copia certificada de planos', '**0,834 UVT** por plano'],
        ['Licencia de subdivisión, urbana o rural', '**25,02 UVT**, expensa única'],
        ['Prórroga de licencia o revalidación', '**25,02 UVT** · VIS: 1,67 UVT'],
        ['Aprobación de planos de propiedad horizontal', 'Desde 6,26 UVT hasta 250 m², hasta 125,11 UVT por encima de 20.000 m²'],
        ['Autorización de movimiento de tierras y construcción de piscinas, con más de 3 m de excavación', 'Desde 1,67 UVT hasta 100 m³, hasta 125,11 UVT por encima de 20.000 m³'],
        ['Modificación de plano urbanístico', '**25,02 UVT**'],
      ],
      nota:
        'Decreto 1890 de 2021, artículos 2 a 5. Estas expensas se cobran ' +
        '«siempre y cuando estas se ejecuten de manera independiente a la ' +
        'expedición de la licencia».',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no le pueden cobrar' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte del decreto que menos se cita y más plata ahorra.',
    },
    {
      tipo: 'cita',
      texto:
        'Las consultas verbales sobre información general de las normas ' +
        'urbanísticas vigentes en el municipio o distrito no generarán expensas ' +
        'a favor del curador urbano.',
      fuente:
        'Decreto 1077 de 2015, art. 2.2.6.6.8.15, parágrafo 1, en la redacción del Decreto 1890 de 2021',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es decir: preguntar es gratis. Lo que causa expensa es el **concepto ' +
        'escrito** —de norma urbanística o de uso del suelo—, que es otra cosa ' +
        'y sirve para otra cosa. Ir a preguntar antes de encargar un diseño no ' +
        'cuesta nada, y es el paso que más proyectos se saltan.',
    },
    {
      tipo: 'parrafo',
      texto: 'Y hay tres prohibiciones más, todas en el mismo articulado:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Las expensas son únicas.** Están reguladas en el decreto, las liquida el curador y las paga el solicitante. No hay una segunda lista.',
        '**No pueden cobrar por conceptos distintos.** Mientras el Ministerio de Vivienda no apruebe por resolución expensas para actuaciones nuevas, los curadores «no podrán hacer cobros por conceptos diferentes a los establecidos en el presente decreto, so pena de la responsabilidad a que haya lugar por tal actuación».',
        '**Ni honorarios adicionales a su remuneración**, con una sola excepción prevista en la norma: cuando el curador actúa como revisor independiente de diseños estructurales, caso en el que pacta esa remuneración aparte.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y una obligación de transparencia que casi nadie exige: los curadores ' +
        'deben tener **en lugar visible y a disposición de los interesados**, ' +
        'sin que mirarlo implique pago alguno, el cargo fijo, el cargo ' +
        'variable, las expensas por otras actuaciones, la ecuación y las tablas ' +
        'de los factores. Si no está a la vista, pídala.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Los impuestos no son expensas' },
    {
      tipo: 'parrafo',
      texto:
        'La confusión más cara del trámite. Los impuestos, gravámenes, tasas, ' +
        'participaciones y contribuciones asociados a la licencia —empezando ' +
        'por el impuesto municipal de delineación urbana— son **independientes** ' +
        'de las expensas y no se pagan al curador.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Pero condicionan la licencia: el curador solo puede expedirla cuando ' +
        'el interesado demuestre que los pagó, y para eso hay **treinta días ' +
        'hábiles** desde que se lo requieren. Dentro de ese mismo plazo hay que ' +
        'pagarle al curador el cargo variable.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Y si su municipio no tiene curador' },
    {
      tipo: 'parrafo',
      texto:
        'Muchos municipios colombianos no tienen curador designado. Ahí la ' +
        'licencia la expide la autoridad municipal competente —normalmente la ' +
        'secretaría o dirección de planeación— y hay una consecuencia económica ' +
        'directa, escrita sin ambigüedad:',
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
        'Sin curador no hay expensas. Los impuestos municipales siguen, y ' +
        'siguen siendo requisito para que la licencia se expida: **no es un ' +
        'trámite gratis, es un trámite sin ese componente**.',
    },
    {
      tipo: 'nota',
      texto:
        'Hay un caso intermedio que conviene conocer: cuando un municipio ' +
        'designa **un curador único**, la entidad municipal encargada de ' +
        'expedir licencias continúa prestando el servicio en paralelo, pero ' +
        'entonces cobra **las mismas expensas** que se establezcan para el ' +
        'curador. Y cuando un municipio designa curadores optando ' +
        'exclusivamente por ellos, debe garantizar que el servicio lo presten ' +
        'al menos dos.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué documentos pide' },
    {
      tipo: 'parrafo',
      texto:
        'La lista base la fija el Ministerio de Vivienda por resolución, y la ' +
        'norma es tajante en un punto que conviene tener a mano: las licencias ' +
        '**deben radicarse y resolverse exclusivamente con los requisitos ' +
        'fijados por esa resolución**. Si le piden algo que no está ahí ni en ' +
        'las normas nacionales, urbanísticas o de patrimonio, pregunte de dónde ' +
        'sale.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Además de esa base, para una licencia de construcción hay que aportar:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El proyecto arquitectónico**, rotulado y firmado por un arquitecto con matrícula profesional, que se hace responsable legalmente de los diseños y de la información. Debe contener como mínimo localización, plantas, alzados o cortes relacionados con la vía, fachadas, planta de cubiertas y cuadro de áreas. Si el lote es inclinado, los cortes deben mostrar la inclinación real del terreno.',
        '**Los planos estructurales**, firmados y rotulados por el profesional que los elaboró. En los proyectos de mayor complejidad se suman la memoria de cálculos, las memorias de diseño de los elementos no estructurales y **los estudios geotécnicos y de suelos**.',
        '**Las licencias anteriores y sus planos**, si la solicitud se presenta ante una autoridad distinta de la que otorgó la original. Si no existen, hay que gestionar primero el reconocimiento de la edificación. Esto no aplica a la obra nueva.',
        '**El anteproyecto aprobado por la autoridad de patrimonio**, si el inmueble es bien de interés cultural.',
        '**El acta de autorización del órgano competente de la copropiedad**, cuando se trate de ampliación, adecuación, modificación, reforzamiento estructural o demolición en un inmueble sometido a propiedad horizontal.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'En las ciudades con consulta virtual disponible, el curador está ' +
        '**obligado a verificar por esos medios** la información del ' +
        'certificado de tradición y de la identificación del predio al momento ' +
        'de la radicación, y esa consulta sustituye la presentación del ' +
        'documento por parte del solicitante. Es un trámite menos que muchos ' +
        'siguen haciendo por costumbre.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo va el trámite, y dónde se atasca' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Radicación**, que exige el pago del cargo fijo. Los términos no empiezan a correr con la radicación a secas, sino cuando la solicitud queda radicada **en legal y debida forma**. Esa distinción explica la mayoría de los plazos que «no se cumplieron».',
        '**Valla y citación a vecinos.** Desde el día siguiente a la radicación hay que instalar una valla de fondo amarillo y letras negras, de mínimo 1,00 × 0,70 m, y anexar su fotografía al expediente dentro de los cinco días hábiles siguientes, **so pena de que la solicitud se entienda desistida**. En paralelo, el curador cita por correo certificado a los vecinos colindantes.',
        '**Revisión.** Jurídica, urbanística, arquitectónica y estructural, incluyendo el cumplimiento de la NSR-10, los diseños estructurales, los estudios geotécnicos y de suelos y los elementos no estructurales.',
        '**Acta de observaciones y correcciones.** Se levanta **por una sola vez**, si hay lugar a ella. Si el solicitante no responde dentro de los términos, la solicitud se entiende desistida y el expediente se archiva.',
        '**Liquidación de impuestos y pago.** Treinta días hábiles, y sin ese pago no hay licencia.',
        '**Expedición.** El término legal para pronunciarse es de **cuarenta y cinco días hábiles** desde la solicitud, prorrogable hasta la mitad mediante resolución motivada. Vencido sin pronunciamiento, opera el **silencio administrativo positivo** a favor del solicitante.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Un dato que conviene tener claro desde el principio, porque cambia el ' +
        'cronograma: la licencia de construcción en la modalidad de **obra ' +
        'nueva** tiene una vigencia de **treinta y seis meses**, prorrogable ' +
        'por doce más. Las demás modalidades —ampliación, adecuación, ' +
        'modificación, restauración, reforzamiento, demolición— duran ' +
        '**veinticuatro**. La prórroga se pide a más tardar treinta días ' +
        'hábiles antes del vencimiento.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hacer antes de radicar' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Vaya a preguntar.** La consulta verbal sobre normas urbanísticas vigentes es gratuita por norma. Hágala antes de encargar el diseño, no después.',
        '**Pida la tabla de tarifas.** Tienen que tenerla a la vista, y mirarla no cuesta. Con los cinco componentes de la fórmula usted puede comprobar la liquidación que le entreguen.',
        '**Escoja curador con criterio**, sabiendo que va a quedarse con él para las prórrogas y modificaciones.',
        '**Radique completo.** El acta de observaciones se levanta una sola vez, y cada ciclo de corrección cuesta semanas.',
        '**Presupueste los impuestos aparte**, y con caja disponible: aparecen tarde en el trámite y tienen plazo corto.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior está transcrito del articulado vigente. Los valores ' +
        'van en UVT porque así los fija la norma: su equivalente en pesos ' +
        'cambia cada año.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Ley 388 de 1997, artículos 99 y 101: licencias, plazos, silencio administrativo positivo y régimen de los curadores urbanos',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
      fecha: '1997-07-18',
    },
    {
      titulo:
        'Decreto 1077 de 2015, Título 6: documentos, trámite, vallas, vigencia de las licencias y régimen de expensas de las curadurías',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo:
        'Decreto 1890 de 2021: expensas de las curadurías urbanas liquidadas en UVT',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://normograma.superservicios.gov.co/normograma/compilacion/docs/decreto_1890_2021.htm',
      fecha: '2021-12-30',
    },
    {
      titulo:
        'Decreto 1783 de 2021: documentos de la solicitud, revisión de diseños y vigencia de las licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175086',
      fecha: '2021-12-20',
    },
    {
      titulo: 'Directorio de curadores urbanos',
      editor: 'Superintendencia de Notariado y Registro',
      url: 'https://www.supernotariado.gov.co/superintendencia-delegada-para-curadores-urbanos/',
      fecha: null,
    },
  ],
}
