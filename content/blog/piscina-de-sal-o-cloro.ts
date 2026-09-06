import type { Post } from '@/lib/types'

/**
 * El artículo que desmonta el argumento de venta más extendido del sector, y
 * lo hace sin química de divulgación: con el articulado.
 *
 * La tesis cabe en una línea —**una piscina de sal es una piscina de cloro**—
 * y la prueba no es química sino normativa: la **Resolución 234 de 2026** exige
 * la presencia continua y permanente del desinfectante residual y mide cloro
 * residual libre en todo tipo de estanque, **sin ninguna excepción para el agua
 * salada**. Si una piscina de sal cumple la norma colombiana, tiene cloro; si
 * no lo tiene, no cumple. No hay tercera opción, y ese giro es lo que hace que
 * el artículo no sea una opinión.
 *
 * La 234 ocupa el campo de la Resolución 1618 de 2010, sobre la que se escribió
 * la primera versión de esta pieza, y cambia el argumento **a favor** de la sal
 * —que es el hallazgo útil y que nadie usa—. Ya no es la «dosificación
 * automática» del artículo 18 de la Resolución 1510 de 2011: es el artículo 5
 * de la 234, que pide sistemas de dosificación independientes, proporcionales
 * al caudal de recirculación, **con un enclavamiento que impida su operación en
 * ausencia de retorno del flujo**, y que aseguren de manera continua la
 * presencia del desinfectante. Un electrolizador es literalmente eso, y el
 * enclavamiento engancha con la trampa operativa que el artículo ya explicaba:
 * la celda solo produce mientras la bomba gira.
 *
 * **La tabla de frecuencias hubo que rehacerla entera**, y es el cambio más
 * grande de todo el lote: la analítica microbiológica pasa de mensual a
 * trimestral, *Cryptosporidium* y *Giardia* dejan de ser un análisis anual para
 * volverse un análisis por evento de contaminación fecal, y entra *Legionella*
 * como parámetro nuevo. Las columnas numéricas de la tabla físico-química del
 * anexo salen del PDF oficial con la capa de texto degradada, así que no se
 * transcriben: se declara dentro del artículo, que es lo que ya se hizo con la
 * Resolución 0330 de 2017 en el pilar de casa campestre.
 *
 * Lo que no se publica: el consumo eléctrico de una celda y su vida útil en
 * años. Ambos dependen del fabricante y no hay dato colombiano; lo que sí se
 * publica es la consecuencia estructural —la celda solo produce mientras la
 * bomba gira— que es lo que de verdad le sirve a quien opera la piscina.
 *
 * Fechado en julio de 2026: no cita nada posterior a 2016 y es perenne.
 */
export const post: Post = {
  slug: 'piscina-de-sal-o-cloro',
  titulo: 'Sal o cloro: el mito del agua salada',
  pilar: 'piscinas',
  fecha: '2026-07-09',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Una piscina de sal es una piscina de cloro: la celda lo fabrica en el ' +
    'sitio en vez de que usted lo compre en tarro. Y la prueba no es química, ' +
    'es normativa. Lo que sí gana, lo que sí cuesta y lo que hay que medir ' +
    'igual en las dos.',
  metaDescripcion:
    'Piscina de sal o de cloro: qué hace de verdad la celda, qué exige la ' +
    'norma colombiana a las dos por igual y cuál conviene en cada caso.',
  puerta: 'diagnostico-de-edificaciones',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'administrador', 'seguridad'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'En el punto de venta la frase es siempre la misma: «con sal se olvida ' +
        'del cloro». Es una frase muy buena y es falsa, y conviene entender ' +
        'exactamente en qué sentido lo es, porque el sistema de sal tiene ' +
        'ventajas reales que se pierden de vista detrás de una promesa que no ' +
        'se puede cumplir.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Una piscina de sal es una piscina de cloro.** La diferencia no está ' +
        'en el desinfectante: está en dónde se fabrica. En una piscina ' +
        'convencional usted compra el cloro y lo echa. En una de sal, un ' +
        'equipo lo fabrica dentro de la tubería, a partir de la sal disuelta en ' +
        'el agua, mientras la bomba está encendida.',
    },
    {
      tipo: 'nota',
      texto:
        'Y la prueba de que es así no es química, es normativa. La resolución ' +
        'que fija la calidad del agua de piscina en Colombia exige que la ' +
        'dosificación asegure **de manera continua y permanente la presencia ' +
        'del desinfectante**, y mide **cloro residual libre** en todo tipo de ' +
        'estanque, **sin ninguna excepción para el agua salada**. Es decir: si ' +
        'su piscina de sal cumple la norma, tiene cloro en el agua. Y si no lo ' +
        'tiene, no cumple. No hay una tercera posibilidad.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hace de verdad la celda' },
    {
      tipo: 'parrafo',
      texto:
        'El agua salada pasa por una celda con dos electrodos y una corriente ' +
        'continua. El cloruro de la sal se oxida y forma, en contacto con el ' +
        'agua, **ácido hipocloroso**: exactamente la misma sustancia que ' +
        'desinfecta cuando usted echa hipoclorito en un tarro. No es un ' +
        'pariente ni un sustituto: es la misma molécula.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay un segundo tramo del ciclo que explica la sensación de que «la ' +
        'sal no se acaba»: cuando el cloro termina de hacer su trabajo, vuelve ' +
        'a ser cloruro. La sal se recicla. **No se consume: se pierde**, con el ' +
        'agua que se sale en las salpicaduras, con el retrolavado del filtro, ' +
        'con la lluvia que rebosa y con cada vaciado.',
    },
    {
      tipo: 'nota',
      texto:
        'De esa misma reacción sale la primera consecuencia práctica que el ' +
        'folleto no menciona: en el otro electrodo se produce hidróxido, y eso ' +
        '**empuja el pH hacia arriba de forma sostenida**. Una piscina de sal ' +
        'no le quita químicos de encima: le cambia unos por otros. Va a ' +
        'comprar menos cloro y bastante más ácido.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por qué no sabe a mar' },
    {
      tipo: 'parrafo',
      texto:
        'Porque no está ni cerca. Una piscina de sal trabaja en el orden de ' +
        'los **3.000 a 4.000 mg/L** de sal, mientras que el agua de mar anda ' +
        'por los **35.000 mg/L**: aproximadamente una décima parte. Esa es toda ' +
        'la razón de la sensación suave del agua, y es una ventaja real y ' +
        'perfectamente legítima.',
    },
    {
      tipo: 'nota',
      texto:
        'La concentración exacta no la fija ninguna norma colombiana: **la fija ' +
        'el fabricante de la celda**, y trabajar por debajo o por encima de su ' +
        'rango la daña. Es un dato de equipo, no un dato de piscina, y hay que ' +
        'pedirlo por escrito antes de comprar, junto con el rango de ' +
        'temperatura del agua en el que la celda produce lo que dice producir.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que sí gana con la sal' },
    {
      tipo: 'lista',
      items: [
        '**Dosificación continua en vez de picos.** El cloro entra poco a poco todo el tiempo, en vez de un golpe cada dos o tres días. Un nivel estable irrita menos que uno que sube y baja, y buena parte de lo que la gente llama «alergia al cloro» es en realidad reacción a las cloraminas que aparecen cuando el nivel se cae.',
        '**Menos manipulación de producto.** Nadie carga ni almacena tarros de hipoclorito, que es un riesgo doméstico real y una fuente de accidentes.',
        '**Tacto del agua.** Es subjetivo y es cierto: a 3.000 mg/L el agua se siente distinta, y a mucha gente le gusta más.',
        '**Cumple, de fábrica, lo que la norma le pide a un sistema de dosificación.** Este es el argumento fuerte y casi nadie lo usa.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Vale la pena detenerse en el último. El artículo 5 de la Resolución ' +
        '234 de 2026 le pide al sistema de dosificación cuatro cosas: que sea ' +
        '**independiente**, que sea **proporcional al caudal de ' +
        'recirculación**, que tenga un **enclavamiento que impida operar en ' +
        'ausencia de retorno del flujo**, y que asegure **de manera continua y ' +
        'permanente** la presencia del desinfectante. Un electrolizador ' +
        'satisface las cuatro por construcción. La adición manual no está ' +
        'prohibida, pero sí lo está **mientras el público tenga acceso a la ' +
        'piscina**. En una copropiedad que hoy dosifica a mano y a ojo, eso es ' +
        'un argumento de cumplimiento —no de comodidad— y pesa mucho más en ' +
        'una asamblea que cualquier promesa de folleto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que sí cuesta' },
    {
      tipo: 'lista',
      items: [
        '**La celda es un consumible.** Se agota, se incrusta con calcio y llegado el día se cambia. Es la partida que no aparece en la comparación inicial y que decide el costo a diez años. Pida por escrito la vida útil que declara el fabricante y el precio de reposición **de esa** celda, no de una genérica.',
        '**Solo produce mientras la bomba gira.** Es la trampa operativa del sistema: si usted recorta las horas de bombeo para bajar el recibo de energía, está recortando también la producción de cloro. Los dos ajustes van atados y casi nadie lo sabe.',
        '**El ácido.** El pH sube de forma sostenida y hay que corregirlo, así que el ahorro en cloro se compensa en parte con lo que se gasta en corregir el pH.',
        '**El cloruro es corrosivo.** A 3.000 mg/L, el agua ataca materiales que en una piscina convencional aguantan sin problema.',
        '**El vaciado se complica.** Agua con 3.000 mg/L de sal no se riega en el jardín: saliniza el suelo y mata la vegetación. Si no hay alcantarillado, el vertimiento hay que resolverlo antes, no después.',
      ],
    },
    {
      tipo: 'tabla',
      cabeceras: ['Material', 'Qué le pasa con 3.000 mg/L de cloruro'],
      filas: [
        [
          'Acero inoxidable de escaleras, pasamanos y anclajes',
          'Picadura por cloruros. No es óxido superficial: es corrosión localizada que perfora y que puede comprometer un anclaje sin aviso',
        ],
        [
          'Aluminio y acero galvanizado próximos',
          'Corrosión acelerada, sobre todo en el andén y en las estructuras de sombra',
        ],
        [
          'Piedra natural del borde y del andén',
          'Cristalización de sales en el poro, eflorescencias y descascaramiento progresivo',
        ],
        [
          'Concreto y su acero de refuerzo',
          'El cloruro es el agente clásico de la corrosión del refuerzo. Por eso la impermeabilización del vaso deja de ser una capa de acabado y pasa a ser protección estructural',
        ],
        [
          'Equipos de calentamiento con intercambiador metálico',
          'Riesgo alto si el material no está especificado para agua salina: hay que verificarlo antes, no después de instalarlo',
        ],
      ],
      nota:
        'Nada de esto descalifica el sistema de sal: lo condiciona. Una piscina ' +
        'de sal bien resuelta especifica materiales para agua salina desde el ' +
        'proyecto. Una piscina convencional convertida a sal años después se ' +
        'come esta lista completa.',
    },
    {
      tipo: 'nota',
      texto:
        'De ahí la decisión que más plata ahorra en todo el asunto: **si va a ' +
        'usar sal, decídalo en el diseño.** Convertir a sal una piscina ' +
        'existente es barato el primer día y caro el tercer año, porque el ' +
        'acero, los anclajes, el borde y los equipos ya están comprados para ' +
        'otro tipo de agua.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que hay que medir igual en las dos' },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de estas obligaciones cambia porque la piscina sea de sal. ' +
        'Son las mismas para las dos, y las frecuencias son la parte que más se ' +
        'incumple:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué se mide', 'Cada cuánto', 'Quién y dónde'],
      filas: [
        ['Cloro residual libre, pH, temperatura', '**Diario**, mínimo al inicio de la jornada y en horas de máxima ocupación', 'El responsable, in situ'],
        ['Materias orgánicas flotantes y sedimentos', 'Diario', 'El responsable, a la vista: deben estar ausentes'],
        ['Turbidez, potencial de oxidación-reducción, sólidos disueltos, conductividad', '**Trimestral**, en horas de máxima ocupación', 'Con laboratorio'],
        ['Heterótrofos, coliformes termotolerantes, *E. coli*', '**Trimestral**, en horas de máxima ocupación', 'Con laboratorio: heterótrofos menos de 200 UFC/100 mL; los otros dos, **0**'],
        ['*Legionella*', 'Trimestral y al inicio de la jornada', 'Solo en piscinas climatizadas o aerosolizadas y en estructuras similares'],
        ['*Cryptosporidium* y *Giardia lamblia*', '**En caso de contaminación fecal, durante el evento**', 'Con laboratorio: **0** ooquistes o quistes por 1.000 cm³'],
      ],
      nota:
        'Resolución 234 de 2026, anexo técnico I. En temporada alta —vacaciones ' +
        'escolares, diciembre y enero, festividades— **la frecuencia trimestral ' +
        'pasa a mensual**. El índice de Langelier sigue siendo obligatorio y se ' +
        'calcula igual: está explicado en ' +
        '[qué obliga de verdad la Ley 1209](/blog/ley-1209-piscinas-copropiedad).',
    },
    {
      tipo: 'nota',
      texto:
        'Y tres obligaciones que la sal tampoco levanta: el laboratorio que ' +
        'haga los análisis debe **demostrar la validación o verificación de sus ' +
        'metodologías**; los productos químicos exigen **ficha técnica y hoja ' +
        'de seguridad**, con el etiquetado del sistema globalmente armonizado; ' +
        'y el **libro o registro sistematizado** tiene que estar al día y ' +
        'disponible cuando la autoridad sanitaria lo pida. Un sistema ' +
        'automático llena el agua de cloro; no llena el libro.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos cosas hay que declararlas, porque callarlas sería fingir más ' +
        'certeza de la que tengo. La primera: **las columnas numéricas de la ' +
        'tabla físico-química del anexo salen del PDF oficial con la capa de ' +
        'texto degradada** y no las transcribo; las frecuencias sí se leen ' +
        'limpias y son las de arriba. Para los valores exactos de pH y de cloro ' +
        'aplicables a su caso, vaya al anexo. La segunda: la norma anterior ' +
        'exigía laboratorio acreditado ante el ONAC y registro sanitario del ' +
        'INVIMA para los químicos. **Busqué las dos exigencias en la resolución ' +
        'nueva y no aparecen**, ni una sola vez. Lo que sí aparece es la ' +
        'validación de metodologías y la ficha de seguridad del producto. Lo ' +
        'digo con la cautela debida: que no estén en esta resolución no ' +
        'significa que no existan en otra.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las tres frases que va a oír' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**«Es agua sin químicos».** No. Es agua con cloro fabricado en el sitio y con sal disuelta, más el ácido que hay que añadir para corregir el pH que el propio sistema sube.',
        '**«No hay que medir nada, el equipo se encarga».** El equipo produce; la norma exige medir y registrar, y el equipo no hace ni lo uno ni lo otro. Una celda mal calibrada produce de menos durante semanas sin avisar.',
        '**«Sale más barato».** Depende del plazo que se mire. Menos cloro y más ácido, más consumo eléctrico, y una celda que se cambia. La comparación honesta se hace a diez años y con el precio de reposición de la celda sobre la mesa.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo decidir' },
    {
      tipo: 'lista',
      items: [
        '**Piscina nueva, uso familiar frecuente, materiales especificados desde el proyecto:** la sal es una muy buena decisión, y su mejor argumento es la dosificación continua.',
        '**Copropiedad que hoy dosifica a mano:** la sal resuelve de una vez el requisito de dosificación automática, pero exige revisar antes escaleras, anclajes, borde y equipos. Y no exime de una sola medición.',
        '**Piscina existente con acero inoxidable a la vista, piedra natural en el borde o calentamiento ya instalado:** piense dos veces. Aquí el sistema convencional bien dosificado, con un dosificador automático, suele ser la decisión sensata.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien dirige esta línea en el estudio trae quince años diseñando ' +
        'sistemas hidráulicos y cuerpos de agua, y la conclusión sobre este ' +
        'tema es siempre la misma: **la sal es un método de dosificación, no ' +
        'una química distinta.** Elíjala por lo que de verdad hace —dosificar ' +
        'sin picos y sin manipular producto— y especifique los materiales en ' +
        'consecuencia. Elegirla por lo que promete el aviso es como se llega a ' +
        'una escalera picada a los cuatro años.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Resolución 234 de 2026, criterios de calidad del agua contenida en estanques de piscinas y estructuras similares y buenas prácticas sanitarias',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://camacol.co/sites/default/files/descargables/RESOLUCION%20MINSALUD%20NACIONAL%20234%20DE%20FEBRERO%20DE%202026.pdf',
      fecha: '2026-02-10',
    },
    {
      titulo:
        'Resolución 929 de 2026, criterios técnicos constructivos y de seguridad para piscinas y estructuras similares',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0929-de-2026.pdf',
      fecha: '2026-05-12',
    },
    {
      titulo: 'Ley 1209 de 2008, por la cual se establecen normas de seguridad en piscinas',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1209_2008.html',
      fecha: '2008-07-14',
    },
    {
      titulo: 'Decreto 780 de 2016, decreto único reglamentario del sector salud (libro 2, parte 8, título 7)',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
      fecha: '2016-05-06',
    },
  ],
}
