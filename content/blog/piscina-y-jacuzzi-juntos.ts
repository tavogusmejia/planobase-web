import type { Post } from '@/lib/types'

/**
 * Cierra el eje técnico del pilar, y es el artículo que la investigación
 * convirtió en el más fácil de todos: **la Resolución 929 de 2026 zanjó el
 * debate.** Su numeral 10.1 dice que los estanques construidos a partir de su
 * entrada en vigencia «deben tener sistema de recirculación independiente». Lo
 * que hasta mayo de 2026 era una recomendación de ingeniero —discutible frente
 * a un proveedor que ofrecía ahorrar una bomba— es hoy un requisito.
 *
 * Aun así el artículo no se queda en la cita, porque la cita no explica nada y
 * porque hay un parque enorme de instalaciones anteriores. El cuerpo del texto
 * es el **porqué físico**: dos consignas de temperatura incompatibles y dos
 * tiempos de recirculación que se llevan por un factor de ocho a doce —0,5 h
 * contra 4 a 6 h, cifras de la tabla n.º 1 de la propia resolución, las mismas
 * que ya se citan en `cuarto-de-maquinas-de-una-piscina` y en
 * `jacuzzi-de-obra-o-portatil`—.
 *
 * La distinción que estructura la pieza, y que no había visto escrita en
 * ninguna parte en estos términos: **se comparte el recinto, no el circuito.**
 * Casi todo el ahorro real que busca quien pregunta está en el cuarto de
 * equipos, la acometida y el almacenamiento; nada de eso obliga a mezclar el
 * agua.
 *
 * Del régimen transitorio para lo ya construido **solo se dice lo que se pudo
 * leer**: el articulado de la resolución tiene la capa de texto degradada en el
 * PDF oficial y los plazos del artículo 12 no se transcriben aquí. Se declara.
 *
 * Fechada el 25 de agosto de 2026, la última de la tanda.
 */
export const post: Post = {
  slug: 'piscina-y-jacuzzi-juntos',
  titulo: 'Piscina y jacuzzi juntos: qué equipos se comparten y cuándo sale mal',
  pilar: 'piscinas',
  fecha: '2026-08-25',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Compartir la máquina entre los dos suena a ahorro y es la avería más ' +
    'previsible del pilar. Desde 2026 la norma exige recirculación ' +
    'independiente — y hay una razón física detrás que conviene entender.',
  metaDescripcion:
    'Qué equipos pueden compartir una piscina y un jacuzzi, qué exige la norma ' +
    'colombiana desde 2026 y por qué el spa de rebose sale caro.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La pregunta llega siempre en el mismo momento del proyecto, cuando ya hay ' +
        'un presupuesto sobre la mesa: si de todos modos vamos a construir un ' +
        'cuarto de máquinas con su bomba, su filtro y su calentador, ¿por qué no ' +
        'colgamos también el jacuzzi de ahí y nos ahorramos una máquina entera?',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es una pregunta razonable, el ahorro es real en el papel, y la respuesta ' +
        'es que no. Hasta hace poco esa respuesta era una opinión de ingeniero ' +
        'que había que defender frente a un proveedor. Desde mayo de 2026 está ' +
        'escrita.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que dice la norma, en una línea' },
    {
      tipo: 'cita',
      texto:
        'Los estanques de piscinas y estructuras similares objeto de la presente ' +
        'resolución construidos a partir de la entrada en vigencia deben tener ' +
        'sistema de recirculación independiente.',
      fuente: 'Resolución 929 de 2026, anexo técnico, numeral 10.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un jacuzzi es una **estructura similar** para esta norma: la resolución ' +
        'define esa categoría nombrando expresamente los spa, las bañeras o tinas ' +
        'de hidromasaje y las piscinas de hidroterapia. Así que si usted ' +
        'construye hoy una piscina y un jacuzzi, **cada uno lleva su propio ' +
        'sistema de recirculación**. No es una recomendación de diseño: es el ' +
        'texto del anexo técnico.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos precisiones honestas sobre el alcance de esa frase. La primera es ' +
        'que habla de **sistema de recirculación** —el circuito de agua: succión, ' +
        'bomba, filtro, retorno—, no del cuarto ni de la acometida eléctrica; eso ' +
        'sí se puede compartir, y más abajo explico qué exactamente. La segunda ' +
        'es que el requisito se dirige a los estanques construidos **a partir de ' +
        'la entrada en vigencia**. Para lo ya construido la resolución tiene un ' +
        'régimen transitorio con planes de mejoramiento y cronogramas: **el ' +
        'articulado del PDF oficial tiene la capa de texto degradada y no ' +
        'transcribo aquí esos plazos**. Si su caso es una instalación existente, ' +
        'consulte el texto en el Diario Oficial antes de contar con un plazo ' +
        'concreto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por qué: tres incompatibilidades, no una manía' },
    {
      tipo: 'parrafo',
      texto:
        'La norma no explica su razón, así que la explico yo, porque entenderla ' +
        'es lo que le permite discutir con quien le proponga lo contrario. Son ' +
        'tres, y cada una bastaría por sí sola.',
    },

    { tipo: 'titulo', nivel: 3, texto: '1. El tiempo de recirculación se lleva por un factor de diez' },
    {
      tipo: 'parrafo',
      texto:
        'Este es el argumento duro, y es puramente numérico. La misma resolución ' +
        'fija cuánto debe tardar el sistema en pasar por el filtro un volumen ' +
        'igual a toda el agua del vaso:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Tipo de estanque', 'Tiempo de recirculación', 'Rotaciones al día'],
      filas: [
        ['Piscina de uso restringido, no abierta al público', '4 a 6 horas', '2 a 4'],
        ['**Estructuras similares** —spa, jacuzzi, hidroterapia—', '**0,5 horas**', '**12**'],
      ],
      nota:
        'Resolución 929 de 2026, anexo técnico, numeral 10, tabla n.º 1. El ' +
        'cálculo debe hacerse sobre el 100 % del volumen de agua.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Media hora contra cuatro o seis. Una planta dimensionada para renovar ' +
        'cincuenta metros cúbicos en cinco horas **no puede** renovar mil ' +
        'quinientos litros en treinta minutos y seguir haciendo lo suyo: son dos ' +
        'caudales distintos, dos velocidades de filtración distintas y dos ' +
        'regímenes de trabajo distintos. Se puede alternar con válvulas —hacer una ' +
        'cosa y luego la otra— pero entonces mientras el jacuzzi recircula la ' +
        'piscina no lo hace, y a la piscina la norma le pide entre ocho y ' +
        'veinticuatro horas de circulación diaria.',
    },

    { tipo: 'titulo', nivel: 3, texto: '2. Las temperaturas son incompatibles y el agua no se parte' },
    {
      tipo: 'parrafo',
      texto:
        'Un jacuzzi se usa caliente: la resolución fija el máximo del agua en ' +
        '**40 °C**. Una piscina se usa a temperatura de baño prolongado, que en ' +
        'la práctica del oficio son unos veintisiete o veintiocho grados —esto ' +
        'último es criterio de confort, no cifra de norma: la resolución solo pone ' +
        'el techo—.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Doce grados de diferencia sobre volúmenes que se llevan por treinta o ' +
        'cuarenta veces. Si los dos vasos comparten agua, **no hay dos ' +
        'temperaturas**: hay una sola, y será la que resulte de mezclar. Calentar ' +
        'el jacuzzi acaba siendo calentar la piscina, que es como pagar ' +
        'calefacción para cincuenta metros cúbicos con el fin de meterse en uno y ' +
        'medio.',
    },

    { tipo: 'titulo', nivel: 3, texto: '3. La química del jacuzzi arrastra a la de la piscina' },
    {
      tipo: 'parrafo',
      texto:
        'La carga de bañistas por litro de un jacuzzi es dos órdenes de magnitud ' +
        'mayor que la de una piscina, y a cuarenta grados el desinfectante se ' +
        'consume mucho más rápido. Un jacuzzi necesita dosificación agresiva y ' +
        'cambios de agua frecuentes; una piscina necesita estabilidad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con agua común usted tiene que elegir cuál de los dos regímenes aplica, y ' +
        'los dos resultados son malos: o dosifica para el jacuzzi y sobreclora ' +
        'cincuenta metros cúbicos, con el gasto y el olor que eso implica, o ' +
        'dosifica para la piscina y el jacuzzi se queda corto justo donde el ' +
        'riesgo microbiológico es mayor.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El spa de rebose, que es la trampa elegante' },
    {
      tipo: 'parrafo',
      texto:
        'La configuración que más se propone y la que mejor se ve en un render: ' +
        'el jacuzzi elevado unos centímetros sobre la piscina, desbordando hacia ' +
        'ella en cascada. Un solo cuerpo de agua, dos niveles, y ese sonido de ' +
        'agua cayendo que a todo el mundo le gusta.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es una solución legítima **cuando se diseña sabiendo lo que hace**, y es ' +
        'una trampa cuando se vende como «el jacuzzi que además le sale gratis». ' +
        'Porque el rebose significa exactamente lo que parece: **el agua del ' +
        'jacuzzi es la de la piscina**, con las tres consecuencias de arriba a la ' +
        'vez.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La forma correcta de hacerlo existe y consiste en poder **aislar** el ' +
        'spa: válvulas de tres vías que cierren el rebose y pongan el jacuzzi en ' +
        'circuito cerrado sobre sí mismo mientras se calienta y se usa, y lo ' +
        'devuelvan al rebose cuando se quiere el efecto visual. Eso funciona, pero ' +
        'fíjese en lo que implica: circuito propio, bomba propia, calentador con ' +
        'su propia consigna y un juego de válvulas que alguien tiene que operar ' +
        'bien. Es decir, **casi todo lo que se pretendía ahorrar**.',
    },
    {
      tipo: 'nota',
      texto:
        'La pregunta que revela si le están vendiendo lo uno o lo otro: **¿cuánto ' +
        'tarda el jacuzzi en llegar a treinta y ocho grados, y qué pasa con la ' +
        'temperatura de la piscina mientras tanto?** Si la respuesta es «unas ' +
        'horas» y nadie menciona la piscina, lo que le están vendiendo es un ' +
        'calentador para los dos vasos.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que nunca se comparte, aunque se quiera' },
    {
      tipo: 'parrafo',
      texto:
        'Hay una parte del jacuzzi que no admite discusión técnica porque no tiene ' +
        'equivalente en la piscina:',
    },
    {
      tipo: 'lista',
      items: [
        '**La bomba de hidromasaje.** Los chorros piden mucho caudal a poca altura durante ratos cortos, que es lo contrario de lo que hace una bomba de filtración. Es una bomba distinta, con su propio circuito, y no filtra: mueve agua del vaso al vaso.',
        '**El soplador de aire.** Lo que hace que el agua burbujee es aire inyectado, no agua. Es un equipo aparte, ruidoso, y con su propia instalación eléctrica.',
        '**La consigna del calentador.** Aunque el calentador fuera físicamente el mismo aparato, no puede mantener dos temperaturas a la vez. O tiene dos intercambiadores y dos controles, o hace una cosa cada vez.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Conviene saberlo porque desarma el argumento comercial más habitual. ' +
        'Cuando le dicen «se comparte la máquina», la máquina que se comparte es ' +
        'la de filtración, que es solo una parte del equipo del jacuzzi. Los ' +
        'chorros —o sea, aquello por lo que uno compra un jacuzzi— nunca se ' +
        'comparten.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que sí se comparte, y es donde está el ahorro real' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la distinción que resuelve el tema: **se comparte el recinto, no ' +
        'el circuito.** Y casi todo el ahorro que busca quien hace la pregunta ' +
        'inicial está justamente en el recinto.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Elemento', '¿Se comparte?', 'Por qué'],
      filas: [
        ['**Cuarto de equipos**', '**Sí**', 'Uno solo, dimensionado para los dos conjuntos de equipos. La norma pide uso exclusivo del cuarto, no un cuarto por vaso'],
        ['**Acometida eléctrica y tablero**', '**Sí**', 'Con sus circuitos ramales independientes y su protección diferencial por circuito'],
        ['**Conexión equipotencial**', '**Sí**', 'Es una malla única que une todas las partes metálicas de la zona húmeda. Separarla sería el error'],
        ['**Almacenamiento de químicos**', '**Sí**', 'Un solo recinto, ventilado y físicamente separado del cuarto de equipos, como exige la norma'],
        ['**Punto de llenado y punto de desagüe**', '**Sí**', 'Con sus válvulas independientes. El jacuzzi se vacía mucho más a menudo'],
        ['**Sistema de control y automatización**', '**Sí**', 'Un solo panel puede gobernar dos circuitos con dos consignas'],
        ['**Bomba, filtro y circuito de recirculación**', '**No**', 'Lo prohíbe el numeral 10.1 para obra nueva, y lo desaconsejan los tres motivos físicos'],
        ['**Calentador con una sola consigna**', '**No**', 'Dos temperaturas incompatibles'],
        ['**Bomba de hidromasaje y soplador**', '**No**', 'No existen en la piscina'],
        ['**Desagües sumergidos y dispositivos de seguridad**', '**No**', 'Cada vaso los suyos. Ver abajo'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Mirado así, el ahorro de compartir el cuarto, la acometida, el almacén y ' +
        'el control es sustancial y perfectamente legal. Lo que no se ahorra es ' +
        'una bomba y un filtro pequeños, que es la parte menor del presupuesto y ' +
        'la que más problemas trae si se elimina.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La seguridad no se comparte nunca' },
    {
      tipo: 'parrafo',
      texto:
        'Este punto va aparte porque es el único donde compartir no produce una ' +
        'molestia sino un peligro.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Cada vaso necesita sus dos desagües sumergidos**, hidráulicamente ' +
        'balanceados, en la parte de mayor profundidad, separados **0,90 m como ' +
        'mínimo**, con su cubierta antiatrapamiento, su sistema de liberación de ' +
        'vacío y su botón de apagado de emergencia. La norma lo exige por estanque, ' +
        'no por instalación.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay una consecuencia hidráulica que conviene entender, porque es ' +
        'contraintuitiva. Si dos vasos se conectan a una sola bomba y esa bomba ' +
        'está dimensionada para el caudal total, **el caudal que pasa por cada ' +
        'rejilla depende de cómo estén las válvulas en ese momento**. Cierre a ' +
        'medias el ramal de la piscina y todo el caudal de la bomba se va por los ' +
        'desagües del jacuzzi, que son más pequeños. La velocidad en la boca sube, ' +
        'y sube justo en el vaso donde la gente se sienta encima del drenaje.',
    },
    {
      tipo: 'nota',
      texto:
        'Aquí hay que recordar lo que ya está explicado en ' +
        '[Ley 1209: qué obliga de verdad](/blog/ley-1209-piscinas-copropiedad) y ' +
        'que sigue siendo cierto en 2026: **ninguna norma colombiana fija una ' +
        'velocidad máxima en la boca de la rejilla ni un caudal máximo por ' +
        'cubierta.** Lo verifiqué otra vez para este artículo. Lo que hay son ' +
        'velocidades en la tubería —2,4 m/s en presión y 1,8 m/s en succión— y ' +
        'una regla de área: la cubierta debe tener al menos cuatro veces el área ' +
        'de la tubería de descarga. El reglamento técnico que debía fijar el ' +
        'desempeño de los dispositivos nunca se expidió. Por eso el criterio de ' +
        'diseño tiene que ponerlo el proyectista, y por eso un sistema con ' +
        'caudales que cambian según la posición de una válvula es un mal sistema.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las tres configuraciones, comparadas' },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Circuitos independientes', 'Cuarto compartido, circuitos separados', 'Planta compartida y agua común'],
      filas: [
        ['**Cumple el numeral 10.1 en obra nueva**', 'Sí', 'Sí', '**No**'],
        ['**Dos temperaturas a la vez**', 'Sí', 'Sí', 'No'],
        ['**Recirculación correcta en los dos**', 'Sí', 'Sí', 'No'],
        ['**Química independiente**', 'Sí', 'Sí', 'No'],
        ['**Inversión inicial**', 'La mayor', 'Intermedia y muy cercana a la anterior', 'La menor'],
        ['**Costo mensual**', 'El menor: se calienta solo lo que se usa', 'El menor', 'El mayor, y con diferencia'],
        ['**Qué falla**', 'Nada estructural', 'Nada estructural', 'Temperatura, química y consumo, todo a la vez'],
      ],
      nota:
        'La segunda columna es la respuesta correcta en casi todos los casos ' +
        'residenciales: cuesta poco más que la tercera y se comporta como la ' +
        'primera.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo sale mal: tres casos que se repiten' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El jacuzzi que tarda medio día en calentarse.** Es el síntoma clásico del calentador compartido con agua común: el aparato está intentando subir la temperatura de la piscina entera para que suba la del jacuzzi. Se descubre en la primera factura de energía.',
        '**La piscina que amanece tibia y con olor a cloro.** Es el mismo problema visto desde el otro lado: la dosificación se está calibrando para la demanda del spa y el vaso grande la recibe entera.',
        '**El agua que se enfría en cuanto se apaga la bomba.** Cuando el jacuzzi se calienta por rebose y el rebose depende de la bomba de filtración, apagar la filtración de noche —que es lo que la norma y el sentido común aconsejan— deja el spa sin recirculación y sin calor. La gente lo resuelve dejando la bomba encendida las veinticuatro horas, que es exactamente el consumo que se quería evitar.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué pedir antes de firmar' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El diagrama hidráulico de los dos circuitos**, en un solo plano, con las válvulas rotuladas. Si el jacuzzi no tiene su propia bomba dibujada, no tiene circuito independiente.',
        '**El cálculo del tiempo de recirculación de cada vaso**, con su caudal. Son dos cuentas, no una.',
        '**La consigna de temperatura de cada uno**, y cómo se mantienen a la vez.',
        '**El detalle de los desagües de cada vaso**, con la separación de 0,90 m acotada en el plano.',
        '**El dimensionamiento del cuarto de equipos** para los dos conjuntos, con las holguras de mantenimiento. Está en [el cuarto de máquinas](/blog/cuarto-de-maquinas-de-una-piscina).',
        '**El desglose de qué se comparte y qué no**, por escrito. Es la tabla de este artículo aplicada a su proyecto.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Si le proponen agua común entre los dos vasos en una obra nueva, la ' +
        'objeción ya no tiene que ser técnica y por eso es más fácil: **el ' +
        'numeral 10.1 exige sistema de recirculación independiente.** No hace ' +
        'falta ganar la discusión de ingeniería para ganar la discusión.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'De dónde sale esto' },
    {
      tipo: 'parrafo',
      texto:
        'Quien dirige esta línea en el estudio trae quince años diseñando sistemas ' +
        'hidráulicos y cuerpos de agua, y entre 2019 y 2022 construyó piscinas, ' +
        'spas y cascadas con sus sistemas de fondo —redes de tubería, plantas de ' +
        'filtración, bombas y cuartos de máquinas— en Bahamas, Bermuda, Turks & ' +
        'Caicos y Miami. Piscina y spa conviviendo en la misma terraza es, en ese ' +
        'tipo de proyecto, la situación normal y no la excepción.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La conclusión de haberlos visto funcionar y fallar es la misma que ahora ' +
        'dice la norma colombiana, y se resume en una frase: **comparta el cuarto, ' +
        'no el agua.** Todo lo demás es una discusión sobre cuánto se ahorra hoy ' +
        'para pagarlo cada mes.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'costos', 'seguridad'],
  fuentes: [
    {
      titulo:
        'Resolución 929 de 2026, criterios técnicos constructivos y de seguridad para piscinas y estructuras similares',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0929-de-2026.pdf',
      fecha: '2026-05-12',
    },
    {
      titulo: 'RETIE, Resolución 40284 de 2026, Libro 3 — Instalaciones, numeral 3.28.4.6',
      editor: 'Ministerio de Minas y Energía',
      url: 'https://www.minenergia.gov.co/documents/15921/Libro-3-Resolucion-40284-23-06-2026.pdf',
      fecha: '2026-06-23',
    },
    {
      titulo: 'Ley 1209 de 2008, por la cual se establecen normas de seguridad en piscinas',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1209_2008.html',
      fecha: '2008-07-14',
    },
  ],
}
