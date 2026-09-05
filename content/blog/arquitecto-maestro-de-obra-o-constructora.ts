import type { Post } from '@/lib/types'

/**
 * Perenne del pilar de proceso. Sirve igual dentro de cinco años y es de las
 * que más desactiva una objeción cara: «¿para qué un arquitecto si el maestro
 * me lo hace más barato?».
 *
 * Se escribe sobre hechos ya verificados en la investigación de honorarios: la
 * reserva de firma del artículo 26 de la Ley 400, las definiciones de la propia
 * ley, el numeral 1.1.4 del Decreto 2090 —que separa supervisión de dirección
 * de obra—, las modalidades de contratación del mismo decreto, y la garantía
 * decenal de la Ley 1796.
 *
 * El artículo no descalifica al maestro de obra. Sería falso y además
 * contraproducente: un buen maestro es indispensable. Lo que hace es explicar
 * qué puede firmar cada quien, que es donde está la respuesta real.
 *
 * Fechado en mayo de 2023: no cita nada posterior a 2016.
 */
export const post: Post = {
  slug: 'arquitecto-maestro-de-obra-o-constructora',
  titulo: 'Arquitecto, maestro de obra o constructora: quién hace qué',
  pilar: 'proceso',
  fecha: '2023-05-16',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'No son tres versiones del mismo servicio ni tres rangos de precio. Son ' +
    'tres oficios distintos, y la ley reserva ciertas firmas a ciertos ' +
    'profesionales. Qué hace cada uno, qué puede firmar, y quién responde si ' +
    'algo sale mal.',
  metaDescripcion:
    'Qué hace un arquitecto, un maestro de obra y una constructora, qué puede ' +
    'firmar cada uno y quién responde por la obra.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La pregunta suele llegar así: «tengo el lote, un maestro me dijo que ' +
        'me lo hace por tanto, ¿para qué necesito un arquitecto?». Es una ' +
        'pregunta legítima y merece una respuesta que no sea publicidad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La respuesta corta: **no son tres versiones del mismo servicio a ' +
        'distinto precio. Son tres oficios distintos**, y hay una parte del ' +
        'asunto que no es cuestión de preferencia — la ley reserva ciertas ' +
        'firmas a ciertos profesionales, y sin esas firmas no hay licencia.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hace cada uno' },
    {
      tipo: 'tabla',
      cabeceras: ['Quién', 'Qué hace', 'Qué firma'],
      filas: [
        [
          '**Arquitecto**',
          'Diseña el proyecto: cómo se organiza, cómo entra la luz, cómo se recorre, cómo se ve. Coordina a las demás disciplinas y tramita la licencia',
          'Los planos arquitectónicos, y **responde legalmente por ellos**',
        ],
        [
          '**Ingeniero civil**',
          'Calcula cómo se para el edificio y qué aguanta el suelo',
          'El diseño estructural y el estudio geotécnico. **Solo él**',
        ],
        [
          '**Maestro de obra**',
          'Ejecuta. Sabe cómo se construye de verdad, dirige la cuadrilla, resuelve en sitio lo que el plano no anticipó',
          'Nada de lo anterior. No es una descalificación: es otro oficio',
        ],
        [
          '**Constructora**',
          'Ejecuta con estructura propia: compra, contrata, programa y responde por el conjunto',
          'Su contrato. Aporta los profesionales que la ley exija',
        ],
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Un buen maestro de obra es indispensable y suele saber más de ' +
        'construir que muchos profesionales con título. Esto no va de quién ' +
        'sabe más. Va de **quién puede firmar qué**, y de quién responde ante ' +
        'la ley cuando algo falla.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que la ley reserva' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí no hay margen de interpretación. La norma de construcciones ' +
        'sismo resistentes lo dice en una línea:',
    },
    {
      tipo: 'cita',
      texto:
        'El diseñador debe ser un ingeniero civil cuando se trate de diseños ' +
        'estructurales y estudios geotécnicos, y un arquitecto o ingeniero ' +
        'civil o mecánico en el caso de diseños de elementos no estructurales.',
      fuente: 'Ley 400 de 1997, artículo 26',
    },
    {
      tipo: 'parrafo',
      texto:
        'La misma ley define quién es cada uno, y en los tres casos la ' +
        'definición termina igual — **«y quien los firma o rotula»**:',
    },
    {
      tipo: 'lista',
      items: [
        '**Diseñador arquitectónico:** el arquitecto bajo cuya responsabilidad se realizan el diseño y los planos arquitectónicos.',
        '**Diseñador estructural:** el ingeniero civil bajo cuya responsabilidad se realizan el diseño y los planos estructurales.',
        '**Ingeniero geotecnista:** el ingeniero civil que firma el estudio geotécnico y fija los parámetros de cimentación.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y para ejercer la arquitectura en Colombia hace falta **tarjeta de ' +
        'matrícula profesional**. La ley va más lejos: para suscribir contratos ' +
        'hay que presentarla **e indicar su número en el contrato**. El ' +
        'registro es público y gratuito, así que verificarlo toma dos minutos.',
    },
    {
      tipo: 'nota',
      texto:
        'Hay una prohibición expresa que conviene conocer, porque describe una ' +
        'práctica real: al arquitecto le está prohibido **«prestar su firma a ' +
        'título gratuito u oneroso, para autorizar planos que no hayan sido ' +
        'estudiados, controlados o ejecutados personalmente»**. Si alguien le ' +
        'ofrece «conseguir quién le firme», eso es exactamente lo que la norma ' +
        'prohíbe — y el que firma es el que responde.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La confusión que más caro sale' },
    {
      tipo: 'parrafo',
      texto:
        'Esta se repite en casi todos los proyectos pequeños: creer que el ' +
        'arquitecto que hizo los planos «está dirigiendo la obra». No lo está, ' +
        'salvo que se haya contratado para eso, y son dos cosas distintas.',
    },
    {
      tipo: 'cita',
      texto:
        'El arquitecto tiene únicamente la función de supervisión de su ' +
        'proyecto y no la dirección técnica de la obra.',
      fuente: 'Decreto 2090 de 1989, numeral 1.1.4',
    },
    {
      tipo: 'lista',
      items: [
        '**Supervisión arquitectónica:** el autor del proyecto visita la obra, escoge acabados y resuelve dudas de interpretación de sus planos. Cuida que lo construido se parezca a lo diseñado.',
        '**Dirección técnica de obra:** alguien está a cargo de la ejecución — el personal, la programación, la calidad, la seguridad. Es un trabajo de tiempo completo y de otra naturaleza.',
        '**Interventoría:** un tercero independiente vigila al que construye. Ver más abajo.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Dos detalles de la norma sobre la supervisión: **no puede excluirse ' +
        'del contrato de diseño** ni contratarse con un arquitecto distinto del ' +
        'autor del proyecto. Y si la obra no se ejecuta, ese honorario no se ' +
        'paga. Es la única parte del honorario que depende de que usted ' +
        'construya.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las tres formas de contratar la construcción' },
    {
      tipo: 'parrafo',
      texto:
        'Independientemente de quién diseñe, la obra se puede contratar de tres ' +
        'maneras, y la diferencia está en **quién asume el riesgo del ' +
        'sobrecosto**.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Modalidad', 'Cómo funciona', 'Quién asume el sobrecosto'],
      filas: [
        [
          '**Precio fijo**',
          'Se pacta un valor por la obra terminada, con alcance definido',
          'El constructor. Por eso incluye un margen de riesgo en el precio',
        ],
        [
          '**Administración delegada**',
          'Usted paga los costos reales y un porcentaje sobre ellos como honorario de administración',
          '**Usted.** A cambio ve las facturas y controla las decisiones',
        ],
        [
          '**Por capítulos**',
          'Se contrata por partes: estructura con uno, acabados con otro',
          'Usted, y además asume la coordinación entre ellos',
        ],
      ],
      nota:
        'La norma de honorarios fija la administración delegada en un 10 % del ' +
        'costo real para obra corriente, 14 % en reformas y 17 % en ' +
        'restauración. No es tarifa obligatoria, pero es la referencia de la ' +
        'que sale el número que le van a cotizar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La trampa de la administración delegada es evidente cuando se enuncia: ' +
        '**si el honorario es un porcentaje del costo, quien administra gana ' +
        'más cuando la obra cuesta más.** No es fraude, es un incentivo mal ' +
        'alineado, y se corrige con un presupuesto aprobado de antemano y una ' +
        'regla clara para las mayores cantidades.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por qué el que construye no puede vigilarse a sí mismo' },
    {
      tipo: 'parrafo',
      texto:
        'La interventoría es supervisión técnica **independiente del ' +
        'constructor**. La independencia no es un detalle: es todo el punto. ' +
        'Nadie encuentra sus propios errores con el mismo entusiasmo con que ' +
        'encuentra los ajenos, sobre todo si corregirlos le cuesta.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La ley lo reconoce en un caso concreto y lo vuelve obligatorio: en ' +
        'edificaciones que superen los **2.000 m²** hace falta un **supervisor ' +
        'técnico independiente del constructor**, y ese supervisor expide bajo ' +
        'juramento el certificado técnico de ocupación. Además, la revisión de ' +
        'los diseños estructurales debe hacerla un profesional **distinto del ' +
        'diseñador e independiente laboralmente de él**.',
    },
    {
      tipo: 'nota',
      texto:
        'Por debajo de ese umbral la interventoría no es obligatoria, pero la ' +
        'lógica no cambia. En una casa, contratar interventoría suele valer la ' +
        'pena cuando el propietario no puede estar en obra, cuando el ' +
        'presupuesto es alto, o cuando el constructor lo escogió alguien más.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién responde si algo sale mal' },
    {
      tipo: 'parrafo',
      texto:
        'Es la pregunta que nadie hace hasta que la necesita, y la respuesta ' +
        'depende enteramente de con quién firmó.',
    },
    {
      tipo: 'lista',
      items: [
        '**El que firma un plano responde por él.** No el que lo dibujó, no el que lo pagó: el que lo firmó. Por eso la firma prestada es tan grave.',
        '**En vivienda nueva de cinco o más unidades**, el constructor o el vendedor debe cubrir los perjuicios patrimoniales durante **diez años** contados desde el certificado técnico de ocupación. Aplica a proyectos con licencia radicada después de julio de 2016.',
        '**Con un maestro de obra sin contrato escrito**, la reclamación es contra una persona natural, sin pólizas y sin respaldo patrimonial. Puede ser perfectamente honesto y aun así no tener con qué responder.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso no significa que haya que descartar al maestro. Significa que la ' +
        'diferencia de precio entre una opción y otra **no es solo diferencia ' +
        'de servicio: es también diferencia de respaldo**, y conviene decidirlo ' +
        'sabiéndolo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Entonces, ¿qué necesita usted?' },
    {
      tipo: 'lista',
      items: [
        '**Va a construir obra nueva y necesita licencia.** No es opcional: necesita arquitecto para el proyecto y ingeniero civil para el estructural y el estudio de suelos. Sin esas firmas no hay licencia.',
        '**Va a remodelar sin tocar la estructura.** Puede bastar un buen maestro, con dos advertencias: que nadie toque un muro sin saber si es estructural, y que verifique si su intervención requiere licencia. Muchas sí.',
        '**Va a ampliar o levantar un piso.** Necesita ingeniero civil antes que nada. La pregunta no es cómo se ve, es si la casa lo aguanta.',
        '**Va a construir un proyecto grande o para vender.** Necesita el paquete completo, y por encima de 2.000 m² la supervisión técnica independiente es obligatoria.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Señales de alarma' },
    {
      tipo: 'lista',
      items: [
        '**«Yo le consigo quién le firme los planos.»** Es exactamente la práctica que la ley prohíbe.',
        '**«No necesita licencia, eso es plata perdida.»** Construir sin licencia expone a multas, a la demolición y a la suspensión de servicios públicos.',
        '**«El estructural se lo hago yo mismo», dicho por alguien que no es ingeniero civil.**',
        '**Un precio muy por debajo de los demás sin explicación de dónde sale.** Suele salir de omitir estudios, diseños técnicos o trámites que después hay que pagar igual.',
        '**Ninguna pregunta sobre el suelo.** Quien no pregunta por el terreno antes de cotizar no está cotizando su obra: está cotizando una obra genérica.',
        '**Nada por escrito.** Sin contrato no hay alcance, no hay plazo y no hay a quién reclamar.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La pregunta útil no es «arquitecto o maestro de obra». Es **qué ' +
        'necesita firmarse en su proyecto, y quién de los que le están ' +
        'cotizando puede firmarlo.** Con eso, la decisión se toma sola.',
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
      titulo: 'Ley 435 de 1998, por la cual se reglamenta el ejercicio de la arquitectura',
      editor: 'Consejo Profesional Nacional de Arquitectura y sus Profesiones Auxiliares',
      url: 'https://cpnaa.gov.co/wp-content/uploads/attachments/ley435.pdf',
      fecha: '1998-02-10',
    },
    {
      titulo: 'Decreto 2090 de 1989, honorarios para trabajos de arquitectura',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo: 'Ley 1796 de 2016, protección al comprador de vivienda nueva',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
    {
      titulo: 'Ley 388 de 1997, artículos 103 a 105: sanciones urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
      fecha: '1997-07-18',
    },
    {
      titulo: 'Consulta del registro de arquitectos y profesionales auxiliares',
      editor: 'Consejo Profesional Nacional de Arquitectura',
      url: 'https://www.cpnaa.gov.co/consulta-del-registro-de-arquitectos-y-profesionales-auxiliares-de-la-arquitectura/',
      fecha: null,
    },
  ],
}
