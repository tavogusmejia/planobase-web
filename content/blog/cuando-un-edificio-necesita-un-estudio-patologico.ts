import type { Post } from '@/lib/types'

/**
 * Tercera pieza del pilar de patologías, y la que responde la pregunta que
 * llega antes que ninguna otra: «¿esto se arregla o hay que estudiarlo?».
 *
 * Tres decisiones de fondo:
 *
 * 1. **La designación del capítulo A.10 se verificó en la fuente**, no de
 *    memoria. Se descargó el Título A de la NSR-10 y se leyó el encabezado:
 *    «Evaluación e intervención de edificaciones construidas antes de la
 *    vigencia de la presente versión del Reglamento». Con eso se puede citar el
 *    número; sin eso el artículo habría dicho «el título de la norma sismo
 *    resistente que regula la evaluación de edificaciones existentes» y nada
 *    más. La instrucción era esa y se cumplió por el lado bueno.
 * 2. **Se dice de frente que «estudio patológico» no es un término normativo.**
 *    Ninguna norma colombiana lo define, y buena parte del mercado vende bajo
 *    ese nombre cosas muy distintas. Lo que sí está reglado es la evaluación
 *    del A.10, con etapas numeradas y firmante reservado. Nombrar ese vacío es
 *    exactamente lo que separa este artículo de los cincuenta que dicen lo
 *    mismo.
 * 3. **Se separa lo que obliga la norma de lo que aconseja el oficio.** Cuatro
 *    situaciones en las que el A.10 exige el estudio y una en la que dice
 *    expresamente que no hace falta. Esa última es la que da credibilidad: un
 *    artículo que solo dice «llame a un profesional» es publicidad.
 *
 * Fechado en enero de 2026. No cita ningún hecho posterior.
 */
export const post: Post = {
  slug: 'cuando-un-edificio-necesita-un-estudio-patologico',
  titulo: 'Cuándo un edificio necesita un estudio patológico',
  pilar: 'patologias',
  fecha: '2025-03-22',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Hay un punto en el que reparar deja de ser mantenimiento y pasa a ser ' +
    'diagnóstico. Cuáles son las señales, en qué cuatro casos la norma sismo ' +
    'resistente lo exige, en cuál dice expresamente que no hace falta, y ' +
    'quién puede firmarlo.',
  metaDescripcion:
    'Cuándo un edificio necesita un estudio patológico, qué exige la NSR-10 ' +
    'para evaluar edificaciones existentes y quién puede firmarlo.',
  puerta: 'diagnostico-de-edificaciones',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'administrador', 'patologia', 'estructura'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La humedad de la sala se resanó tres veces y volvió tres veces. La ' +
        'fisura del muro del patio se selló el año pasado y hoy es más larga. ' +
        'El consejo de administración va a votar una cuota extraordinaria para ' +
        'impermeabilizar la cubierta entera, y nadie ha dicho por dónde entra ' +
        'el agua.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En algún punto de esa historia el problema dejó de ser de ' +
        'mantenimiento. Este artículo trata de dónde queda ese punto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La pregunta que separa las dos cosas' },
    {
      tipo: 'parrafo',
      texto:
        'No es cuánto cuesta, ni qué tan grande es el daño. Es una sola: ' +
        '**¿alguien sabe por qué pasó?**',
    },
    {
      tipo: 'parrafo',
      texto:
        'El mantenimiento repara un deterioro cuya causa se conoce y es ' +
        'previsible: pintura que se cumplió, un sello que envejeció, una teja ' +
        'que se movió con el viento. Se sabe qué lo produjo, se sabe que va a ' +
        'volver a pasar y se sabe cada cuánto. Eso se programa y se ejecuta.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El diagnóstico aparece cuando la causa no se conoce, cuando la ' +
        'reparación no la corrigió, o cuando lo que se ve puede ser el síntoma ' +
        'de algo que no se ve. Ahí reparar sin estudiar no es ahorrar: es pagar ' +
        'dos veces.',
    },
    {
      tipo: 'nota',
      texto:
        'La regla práctica, y es la que uso: **si la reparación anterior ' +
        'falló, el problema ya no es la reparación.** Un resane que vuelve a ' +
        'agrietarse está diciendo que hay un movimiento; una humedad que vuelve ' +
        'está diciendo que el agua entra por donde nadie miró. Repetir la ' +
        'misma intervención es un experimento que ya se hizo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Seis señales de que dejó de ser mantenimiento' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Vuelve.** La misma lesión, en el mismo sitio, después de repararla. Una vez puede ser mala ejecución; dos veces es un diagnóstico equivocado.',
        '**Progresa.** La fisura es más larga, más ancha o más ramificada que hace seis meses. Un daño estabilizado y uno activo se tratan distinto, y solo se distinguen midiendo con fecha.',
        '**Se extiende.** Apareció en un punto y hoy hay lesiones parecidas en otros. Cuando el patrón se repite en varios elementos, la causa suele ser común y estar por debajo de todos ellos.',
        '**Apareció de golpe.** Un daño que no estaba y aparece en días, sin obra cerca que lo explique, es un cambio de condiciones. Puede ser agua, puede ser suelo, puede ser carga.',
        '**El agua no se localiza.** Se sabe dónde sale, no dónde entra. Es la situación en la que más plata se gasta a ciegas, porque la mancha casi nunca está debajo del punto de entrada.',
        '**Hay acero a la vista, óxido o desprendimientos.** El concreto que se abre y deja ver el refuerzo dejó de ser un problema de acabado. La corrosión no se detiene sola y aumenta de volumen, así que el daño se retroalimenta.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de las seis es, por sí sola, una emergencia. Todas son razones ' +
        'suficientes para averiguar la causa antes de firmar un contrato de ' +
        'reparación.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los cuatro casos en que la norma lo exige' },
    {
      tipo: 'parrafo',
      texto:
        'Hasta aquí es criterio profesional. A partir de aquí es obligación, y ' +
        'está escrita en un solo lugar: el **Capítulo A.10 de la NSR-10**, ' +
        'titulado «Evaluación e intervención de edificaciones construidas ' +
        'antes de la vigencia de la presente versión del Reglamento».',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ese capítulo fija los criterios y procedimientos para evaluar la ' +
        'vulnerabilidad sísmica de una edificación existente y para diseñar su ' +
        'intervención. Su alcance nombra expresamente cuatro situaciones:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Situación', 'Qué dice la norma'],
      filas: [
        [
          '**Cambio de uso**',
          'Aunque las obras sean menores, deben evaluarse las implicaciones del cambio ante cargas verticales, fuerzas horizontales y **especialmente ante efectos sísmicos**',
        ],
        [
          '**Ampliación o modificación**',
          'Los criterios del capítulo deben emplearse para el diseño y construcción de ampliaciones adosadas, ampliaciones en altura, actualizaciones al reglamento y alteraciones',
        ],
        [
          '**Reforzamiento estructural**',
          'Deben emplearse en la actualización y rehabilitación sísmica de edificaciones existentes',
        ],
        [
          '**Reparación de daños por sismo**',
          'Deben emplearse cuando la edificación sufrió daños **moderados a severos** en su estructura, en sus elementos no estructurales, o en ambos',
        ],
      ],
      nota:
        'NSR-10, Título A, numerales A.10.1.3.2 a A.10.1.3.6. El capítulo se ' +
        'aplica también, según A.10.1.3.3, cuando lo que se quiere es ' +
        'simplemente diagnosticar la vulnerabilidad sísmica de un edificio ' +
        'existente, sin obra de por medio.',
    },
    {
      tipo: 'nota',
      texto:
        'El cambio de uso es el que más sorprende. **No hace falta tocar la ' +
        'estructura**: basta convertir la casa en oficina, el local en ' +
        'restaurante, la vivienda unifamiliar en multifamiliar. La norma ' +
        'entiende el cambio de uso como una modificación urbanística y exige la ' +
        'evaluación aun cuando las obras caben en la categoría de reparaciones ' +
        'menores.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Y el caso en que la norma dice que no hace falta' },
    {
      tipo: 'parrafo',
      texto:
        'Vale la pena decirlo con la misma claridad, porque nadie lo dice: ' +
        '**hay obras que no piden estudio y quien se lo venda le está vendiendo ' +
        'algo que no necesita.**',
    },
    {
      tipo: 'cita',
      texto:
        'Se considera que el sistema estructural de la edificación no sufre ' +
        'modificación cuando se hacen reparaciones y cambios menores que no ' +
        'afecten el sistema de resistencia sísmica ni la integridad estructural ' +
        'de la edificación. En este caso no hay necesidad de llevar a cabo los ' +
        'estudios a que hace referencia el presente Capítulo.',
      fuente: 'NSR-10, Título A, numeral A.10.1.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con una excepción, y está en el numeral siguiente: si además hay ' +
        'cambio de uso, la exención se cae. Es la única puerta que la norma se ' +
        'deja abierta a propósito.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué es un estudio patológico, y qué no lo es' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay que decir algo incómodo: **«estudio patológico» no es un ' +
        'término normativo colombiano.** No lo define la NSR-10, no lo define ' +
        'el Decreto 1077, no lo define ninguna ley. Es un nombre de oficio, y ' +
        'por eso bajo ese rótulo se venden cosas que no se parecen entre sí: ' +
        'desde una visita de cuarenta minutos con fotos hasta un trabajo de ' +
        'seis semanas con ensayos y modelación.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí está reglado, y es la vara con la que conviene medir ' +
        'cualquier oferta, es el procedimiento de evaluación del A.10. Sus ' +
        'primeras tres etapas describen exactamente el trabajo de diagnóstico:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Verificar que el caso esté cubierto** por el alcance del capítulo. Es decir: primero se define si esto es o no es un problema del A.10.',
        '**Recopilar y estudiar la información existente** sobre el diseño geotécnico, el diseño estructural y el proceso de construcción del edificio original y de sus modificaciones posteriores, **y hacer exploraciones en la edificación**.',
        '**Calificar el estado del sistema estructural**, en dos ejes: la calidad del diseño y la construcción originales, y el estado de mantenimiento y conservación.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Esa segunda etapa es la que separa un informe serio de uno decorativo. ' +
        'La norma enumera qué hay que investigar: si los documentos de diseño ' +
        'concuerdan con lo que hay construido hoy —constatado en sitio, con ' +
        'exploraciones en lugares representativos y constancia de su alcance—, ' +
        'la calidad de la construcción original, el estado de conservación, la ' +
        'evidencia de fallas locales, deflexiones excesivas y corrosión de las ' +
        'armaduras, la ocurrencia de asentamientos de la cimentación, y la ' +
        'ocurrencia pasada de eventos extraordinarios: explosión, incendio, ' +
        'sismo, remodelaciones previas, acabados que hayan aumentado las cargas.',
    },
    {
      tipo: 'nota',
      texto:
        'La calificación de la etapa 3 tiene, según la norma, tres valores: ' +
        '**buena, regular o mala**, y se hace por separado para la calidad del ' +
        'diseño y la construcción originales y para el estado actual de la ' +
        'estructura. Es una calificación explícitamente cualitativa. Un informe ' +
        'que no la trae no completó la etapa 3, por muchas fotos que tenga.',
    },
    {
      tipo: 'parrafo',
      texto: 'De ahí se deduce, por descarte, lo que un estudio patológico no es:',
    },
    {
      tipo: 'lista',
      items: [
        '**No es una cotización de reparación.** La cotización viene después y solo tiene sentido si el diagnóstico ya está.',
        '**No es una inspección visual sola.** La norma pide exploraciones, no solo observación, y pide dejar constancia del alcance de esas exploraciones.',
        '**No es un ensayo suelto.** Un esclerómetro sobre una columna no es un diagnóstico; es un dato dentro de uno.',
        '**No es una evaluación post-sísmica.** La inspección rápida que se hace después de un temblor sirve para decidir si el edificio se puede ocupar. Es otra herramienta, con otro alcance y otro firmante, y no reemplaza al estudio.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién lo firma' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte donde más se falsea el mercado, y la norma no deja ' +
        'margen. La memoria justificativa de la evaluación y de la ' +
        'intervención, dice el A.10.1.5.1, **debe ir firmada por un ingeniero ' +
        'civil debidamente matriculado** que cumpla las condiciones de los ' +
        'artículos 26 y 27 de la Ley 400 de 1997.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué se firma', 'Quién puede firmarlo', 'Qué debe acreditar'],
      filas: [
        [
          'Diseño estructural y estudios geotécnicos',
          '**Ingeniero civil**, con matrícula',
          'Posgrado o **más de cinco años** en el área de estructuras (art. 27)',
        ],
        [
          'Estudios geotécnicos',
          '**Ingeniero civil**, con matrícula',
          'Posgrado en geotecnia o **más de cinco años** en diseño geotécnico de fundaciones (art. 28)',
        ],
        [
          'Diseño de elementos no estructurales',
          'Arquitecto, ingeniero civil o ingeniero mecánico',
          'Posgrado o **más de tres años** de ejercicio (art. 29)',
        ],
      ],
      nota:
        'Ley 400 de 1997, artículos 26 a 29. La ley reserva expresamente el ' +
        'diseño estructural y los estudios geotécnicos al ingeniero civil: no ' +
        'los puede firmar un arquitecto, ni un ingeniero de otra rama, ni un ' +
        'maestro con treinta años de obra.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Conviene decir también lo que sí hace un arquitecto en un trabajo de ' +
        'este tipo, porque es la mitad del encargo y se subestima: levantar lo ' +
        'construido cuando no hay planos —que es casi siempre—, reconstruir la ' +
        'historia de las intervenciones, diagnosticar las lesiones de ' +
        'envolvente, cubierta, humedad y acabados, coordinar al ingeniero ' +
        'estructural y al geotecnista, y escribir el informe de manera que un ' +
        'consejo de administración pueda decidir con él.',
    },
    {
      tipo: 'nota',
      texto:
        'Y hay una frase de la norma que vale por todo el capítulo: el tipo de ' +
        'diseño del A.10 «exige el mejor criterio y experiencia por parte del ' +
        'ingeniero que lo lleva a cabo», que se hace responsable **del ' +
        'comportamiento de la edificación en el futuro**. No es una fórmula de ' +
        'cortesía: es una asignación de responsabilidad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un detalle más, para el que ya decidió intervenir: la construcción de ' +
        'la intervención estructural debe someterse **en todos los casos** a ' +
        'supervisión técnica, sin umbral de área y sin excepciones. Eso es una ' +
        'partida del presupuesto, no un trámite.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo conviene hacerlo aunque nadie lo obligue' },
    {
      tipo: 'parrafo',
      texto:
        'Cuatro momentos en los que el estudio se paga solo, y ninguno de ellos ' +
        'aparece en la norma:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Antes de comprar.** Es el único momento en que el resultado del diagnóstico todavía puede cambiar el precio, o la decisión. Después de firmar, el hallazgo es suyo.',
        '**Antes de reformar.** Un presupuesto de remodelación hecho sobre un edificio que no se conoce se corrige al alza en obra, siempre. Y si la reforma resulta tocar la estructura, el estudio pasó de conveniente a obligatorio.',
        '**Antes de que se agote el amparo de diez años.** La Ley 1796 de 2016 obliga al constructor o al enajenador de vivienda nueva a cubrir los perjuicios patrimoniales que se presenten **dentro de los diez años siguientes a la certificación técnica de ocupación**. Un daño detectado y documentado dentro de ese plazo tiene a quién reclamarse; el mismo daño detectado después, no.',
        '**Antes de que la asamblea vote una cuota.** Un consejo que aprueba una intervención mayor sin diagnóstico está decidiendo con la información del que vende la reparación. El estudio cuesta una fracción de la obra y es lo único que permite comparar ofertas que hoy no son comparables.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué preguntar antes de contratarlo' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿Quién firma, con qué matrícula y qué acredita?** Si va a haber conclusión estructural, tiene que haber ingeniero civil con la experiencia del artículo 27.',
        '**¿Qué exploraciones incluye y cuántas?** Apiques, calas, destapes, ensayos. Sin eso es una inspección visual con otro nombre.',
        '**¿Qué documentación previa van a buscar?** Planos de la licencia, memorias, estudio de suelos original, reglamento de propiedad horizontal. La etapa 2 del A.10 empieza ahí.',
        '**¿El informe va a decir la causa, o solo la solución?** Es la pregunta que más incomoda y la que mejor filtra.',
        '**¿Quién ejecuta la reparación?** Si es el mismo que diagnostica, el diagnóstico tiene un interés de por medio. No siempre es un problema, pero hay que saberlo antes.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que debe traer el documento que le entreguen —sección por sección, ' +
        'y cómo se reconoce uno que no sirve— es tema aparte y da para su ' +
        'propio artículo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior está transcrito del articulado vigente. Lo que no ' +
        'está en la norma —las seis señales, los cuatro momentos— va dicho como ' +
        'lo que es: criterio de oficio.',
    },
  ],
  fuentes: [
    {
      titulo:
        'NSR-10, Título A, Capítulo A.10: evaluación e intervención de edificaciones construidas antes de la vigencia de la presente versión del Reglamento',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.scg.org.co/Titulo-A-NSR-10-Decreto%20Final-2010-01-13.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'Ley 400 de 1997, artículos 26 a 29: quién puede firmar diseños estructurales y estudios geotécnicos',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo:
        'Ley 1796 de 2016, artículos 6 y 8: certificación técnica de ocupación y amparo de perjuicios por diez años',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
    {
      titulo:
        'Decreto 1077 de 2015, artículo 2.2.6.1.1.7: modalidades de la licencia de construcción, incluido el reforzamiento estructural',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
  ],
}
