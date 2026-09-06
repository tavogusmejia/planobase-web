import type { Post } from '@/lib/types'

/**
 * El artículo eléctrico del pilar, y el que más ausencias tuvo que declarar.
 *
 * Dos hallazgos de vigencia lo condicionan entero, y los dos son recientes:
 *
 * 1. **La Resolución 929 de 2026 es la primera norma colombiana que nombra el
 *    spa y la tina de hidromasaje.** Durante dieciocho años el jacuzzi estuvo
 *    cubierto solo por la elipsis «estructuras similares», que ninguna norma
 *    definía. Ahora está definida, y con eso el jacuzzi entra sin discusión en
 *    el régimen de la Ley 1209.
 * 2. **El RETIE vigente ya no es el de 2013**, sino la Resolución 40284 del 23
 *    de junio de 2026, reorganizada en Libros, cuyo numeral 3.28.4.6 tiene
 *    requisitos propios para piscinas y jacuzzis en vez de la remisión en bloque
 *    a la NTC 2050 que traía el texto anterior.
 *
 * **La ausencia más importante se declara dentro del artículo**: ninguna fuente
 * primaria colombiana fija una sensibilidad en miliamperios para la protección
 * diferencial de una piscina o un jacuzzi. El RETIE exige «alta sensibilidad» y
 * remite a una curva. Los 30 mA que se citan por todas partes vienen del régimen
 * de vehículos eléctricos del propio RETIE, no del de piscinas. Y la tabla del
 * Libro 1 dice que a 30 mA no se protege a nadie.
 *
 * **Segunda declaración, de método**: el RETIE remite a la NTC 2050 Segunda
 * Actualización (2020), que es norma de pago de ICONTEC y no fue posible
 * consultar. Los numerales 680-x que aquí se citan son de la Primera
 * Actualización (1998). Se dice en el artículo, con todas sus letras.
 *
 * La aritmética de la carga se presenta desarrollada, con sus supuestos a la
 * vista, para que el lector pueda rehacerla con su equipo. Y usa **la misma
 * cifra de 1,8 kN/m²** que `piscina-en-terraza`, verificada una sola vez en la
 * tabla B.4.2.1-1 de la NSR-10 y citada igual en los dos.
 *
 * Fechada el 11 de agosto de 2026, después del RETIE vigente.
 */
export const post: Post = {
  slug: 'jacuzzi-de-obra-o-portatil',
  titulo: 'Jacuzzi de obra o portátil: carga, desagüe y requisitos eléctricos',
  pilar: 'piscinas',
  fecha: '2026-08-11',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'La palabra «portátil» hace pensar en un electrodoméstico. Son dos ' +
    'toneladas sobre cuatro metros cuadrados, agua a 40 °C y electricidad, todo ' +
    'a la vez. Desde 2026 la norma colombiana por fin lo nombra.',
  metaDescripcion:
    'Qué carga impone un jacuzzi, cómo se desagua y qué exige el RETIE en ' +
    'distancias, diferencial y conexión equipotencial. Obra frente a portátil.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La palabra «portátil» hace un daño enorme en este tema. Sugiere un ' +
        'electrodoméstico: llega en un camión, se pone en la terraza, se enchufa. ' +
        'Y lo que llega en ese camión son dos toneladas largas concentradas en ' +
        'cuatro metros cuadrados, con agua a cuarenta grados y una acometida ' +
        'eléctrica dentro, que es la combinación de riesgos peor de toda la casa.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La decisión entre un jacuzzi de obra y uno portátil casi siempre se toma ' +
        'por precio, y casi siempre se toma antes de mirar las tres cosas que ' +
        'realmente la deciden: **la carga, el desagüe y la instalación eléctrica**. ' +
        'Este artículo es sobre esas tres.',
    },
    {
      tipo: 'nota',
      texto:
        'Antes de nada, una novedad que cambia el marco: hasta hace unos meses ' +
        '**ninguna norma colombiana nombraba el jacuzzi.** Ni la Ley 1209, ni la ' +
        'Resolución 1510 de 2011, ni la 1618 de 2010 usaban las palabras «spa», ' +
        '«jacuzzi» o «hidromasaje». Estaban cubiertos por una elipsis —«estructuras ' +
        'similares»— que ninguna de las tres definía. La **Resolución 929 de ' +
        '2026** por fin la define.',
    },
    {
      tipo: 'cita',
      texto:
        'Estructuras similares: Son obras de ingeniería o arquitectura análogas a ' +
        'las piscinas, cuyo objeto, generalmente, es el uso recreativo o ' +
        'terapéutico. Abarcan una serie de instalaciones cuya referencia son los ' +
        'spa, bañeras o tinas de hidromasaje, piscinas de hidroterapia, entre ' +
        'otras.',
      fuente: 'Resolución 929 de 2026, anexo técnico, capítulo I, definición 11',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esto no es un detalle de vocabulario. Significa que **su jacuzzi está ' +
        'dentro del régimen**, con sus obligaciones de dobles drenajes, ' +
        'dispositivos de seguridad, calidad del agua y recirculación. Quien le ' +
        'diga que «eso es para piscinas» está trabajando con la norma anterior.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Primero: la carga, y la cuenta está a la vista' },
    {
      tipo: 'parrafo',
      texto:
        'Es lo que más sorprende y lo más fácil de comprobar, así que aquí va la ' +
        'aritmética completa para que usted pueda rehacerla con las cifras de su ' +
        'equipo. Tomemos un jacuzzi portátil corriente, de 2,00 × 2,00 m, con ' +
        '1.500 litros de capacidad y seis plazas:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Concepto', 'Cuenta', 'Peso'],
      filas: [
        ['Agua', '1.500 L a 1.000 kg/m³', '1.500 kg'],
        ['Casco, aislamiento, bomba, soplador y calentador', 'estimado del fabricante', '≈ 300 kg'],
        ['Seis personas', '6 × 75 kg', '450 kg'],
        ['**Total sobre 4 m²**', '2.250 kg ÷ 4 m²', '**≈ 563 kgf/m² · 5,5 kN/m²**'],
      ],
      nota:
        'El peso del casco es un supuesto y varía con el modelo: búsquelo en la ' +
        'ficha del fabricante, que lo publica. La densidad del agua, 1.000 kg/m³, ' +
        'es la de la tabla B.3.2-1 de la NSR-10.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ahora la comparación, que es lo que importa. La carga viva mínima de ' +
        'diseño que la NSR-10 exige para los cuartos privados de una vivienda es ' +
        'de **1,8 kN/m² (180 kgf/m²)**. Un jacuzzi «portátil» pone **más del ' +
        'triple**. Y supera también los 5,00 kN/m² que la norma exige para una ' +
        'terraza autorizada como elemento comunal recreativo, que es la carga de ' +
        'terraza más alta de la tabla.',
    },
    {
      tipo: 'nota',
      texto:
        'Y hay una diferencia con la piscina que juega en contra: **el jacuzzi ' +
        'concentra**. Una piscina reparte su peso sobre decenas de metros ' +
        'cuadrados; un jacuzzi lo mete todo en cuatro, y encima suele arrimarse a ' +
        'una esquina o a un antepecho, que es donde la losa trabaja distinto. Un ' +
        'jacuzzi de obra pesa más en total pero se puede repartir y se puede bajar ' +
        'a la estructura; el portátil no se reparte: se apoya donde se apoya.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De ahí la regla práctica. Sobre **losa de contrapiso apoyada en el ' +
        'terreno** —una terraza en planta baja, un patio— el problema casi nunca ' +
        'existe. Sobre **entrepiso o cubierta**, existe siempre y hay que ' +
        'resolverlo antes de comprar nada: hace falta la evaluación estructural ' +
        'firmada por un ingeniero civil, exactamente igual que para una piscina. ' +
        'Todo eso está en [piscina en terraza](/blog/piscina-en-terraza), y aplica ' +
        'igual aunque el aparato venga con ruedas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Segundo: el desagüe, que nadie prevé' },
    {
      tipo: 'parrafo',
      texto:
        'Una piscina se vacía cada varios años. **Un jacuzzi se vacía entero cada ' +
        'pocos meses**, y esa es una diferencia de fondo, no de grado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La razón está en la aritmética del agua. En una piscina de 48.000 litros ' +
        'se meten cuatro personas y la proporción es irrelevante. En un jacuzzi de ' +
        '1.500 litros se meten las mismas cuatro personas: la carga de bañistas ' +
        'por litro es dos órdenes de magnitud mayor, y encima el agua está a ' +
        'cuarenta grados, que es la temperatura a la que todo prospera. El cloro ' +
        'se consume rapidísimo, se acumulan sólidos disueltos que ningún filtro ' +
        'retira, y llega un punto en que la única solución es cambiar el agua.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso obliga a prever tres cosas que no suelen estar en ningún plano:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Un punto de desagüe con capacidad real.** Mil quinientos litros de golpe no van por la bajante de aguas lluvias de un balcón, y desde luego no van al jardín: la Resolución 929 califica el agua de piscina como **vertimiento no doméstico**, porque lleva cloro y correctores de pH, y remite a la normativa ambiental para su manejo.',
        '**Un punto de llenado cerca.** Rellenar mil quinientos litros con una manguera de jardín cruzando la sala es lo que hace que la gente estire el cambio de agua más de lo debido.',
        '**Acceso para el mantenimiento.** El jacuzzi portátil tiene sus equipos bajo una faldón lateral desmontable. Si lo empotró contra dos muros y un antepecho, ese faldón no se quita, y la reparación empieza por mover el aparato lleno.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Tercero: la electricidad, que es donde están los muertos' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la sección larga, y lo es por una razón que el propio reglamento ' +
        'explica mejor de lo que yo podría:',
    },
    {
      tipo: 'cita',
      texto:
        'La soportabilidad del cuerpo humano a la corriente eléctrica, con la piel ' +
        'mojada o sumergida es mucho menor que en condiciones de piel seca, por lo ' +
        'que se requiere que las instalaciones eléctricas en piscinas, jacuzzis, ' +
        'fuentes e instalaciones similares y en general en áreas mojadas, tengan ' +
        'incorporados los materiales y equipos adecuados para esa condición.',
      fuente: 'RETIE, Resolución 40284 de 2026, Libro 3, numeral 3.28.4.6',
    },
    {
      tipo: 'nota',
      texto:
        'Antes de entrar en cifras, una advertencia de vigencia que casi todas las ' +
        'fuentes que encontrará tienen mal: **el RETIE ya no es el de 2013.** El ' +
        'vigente es la **Resolución 40284 del 23 de junio de 2026**, reorganizada ' +
        'en Libros, y su numeral 3.28.4.6 tiene requisitos propios para piscinas y ' +
        'jacuzzis en lugar de la remisión en bloque a la NTC 2050 que traía el ' +
        'texto anterior. Hay régimen de transición para instalaciones iniciadas ' +
        'antes de 2026, así que durante un tiempo conviven las dos versiones.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El RETIE parte de una tabla que conviene mirar antes que cualquier otra ' +
        'cosa: qué tensión es segura según cómo esté la piel.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Estado de la piel', 'Tensión de seguridad'],
      filas: [
        ['Perfectamente seca (excepcional)', '80 V'],
        ['Húmeda (normal), en ambiente seco', '50 V'],
        ['Mojada (más normal), en ambientes muy húmedos', '24 V'],
        ['**Sumergida en agua (casos especiales)**', '**12 V**'],
      ],
      nota:
        'RETIE, Resolución 40284 de 2026, Libro 1, numeral 1.5.1.2, literal s. ' +
        'Un bañista dentro de un jacuzzi está en la última fila.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De ahí sale, y no de un capricho, el requisito de alumbrado: la ' +
        'iluminación dentro del vaso debe alimentarse desde un **transformador de ' +
        'aislamiento** con secundario **no puesto a tierra**, tensión no superior ' +
        'a **12 V**, pantalla electrostática puesta a tierra entre devanados, ' +
        'certificado para ese uso, y primario a 150 V o menos. La alternativa que ' +
        'el reglamento permite es luminaria de hasta 150 V alimentada directamente ' +
        'desde un ramal protegido por interruptor diferencial.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Los tres metros del jacuzzi' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay un dato que se cita mal constantemente, porque la distancia del ' +
        'jacuzzi **no es la misma que la de la piscina**:',
    },
    {
      tipo: 'cita',
      texto:
        'Todos los tomacorrientes monofásicos de 125 V, de 15 y 20 A, ubicados a ' +
        'una distancia máxima de 6 m de las paredes interiores de la piscina deben ' +
        'estar protegidos por un interruptor de circuito contra fallas a tierra. ' +
        'Para el caso de bañeras o jacuzzis, dicho requisito aplica para ' +
        'tomacorrientes ubicados a una distancia máxima 3 m desde sus paredes ' +
        'interiores, incluyendo tomacorrientes de 30 A nominales.',
      fuente: 'RETIE, Resolución 40284 de 2026, Libro 3, numeral 3.28.4.6, literal b',
    },
    {
      tipo: 'parrafo',
      texto:
        'Fíjese en las últimas cinco palabras, porque cierran un hueco por el que ' +
        'se colaba media instalación: **incluyendo tomacorrientes de 30 A ' +
        'nominales**. Un jacuzzi no funciona con quince amperios; su calentador ' +
        'pide un circuito de mayor amperaje, y hasta esta redacción era discutible ' +
        'si el requisito de diferencial le aplicaba. Ya no lo es.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Los miliamperios que nadie fija' },
    {
      tipo: 'parrafo',
      texto:
        'Y aquí está la ausencia que hay que declarar, porque va contra lo que ' +
        'dice casi todo lo que se lee sobre el tema.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Ninguna fuente primaria colombiana fija una sensibilidad en ' +
        'miliamperios para la protección diferencial de una piscina o un ' +
        'jacuzzi.** Busqué en el RETIE vigente y en la definición de la NTC 2050: ' +
        'lo que hay es la exigencia de protecciones diferenciales «de alta ' +
        'sensibilidad» en lugares húmedos y mojados, y un criterio gráfico —una ' +
        'curva— en lugar de un número.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los 30 mA que se citan por todas partes **sí están en el RETIE, pero en ' +
        'otro sitio**: en el capítulo de puntos de recarga de vehículos ' +
        'eléctricos. Atribuírselos a las piscinas es una extrapolación, no una ' +
        'cita. Y es una extrapolación incómoda, porque el propio RETIE publica ' +
        'esta tabla:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Corriente de disparo', '6 mA', '10 mA', '20 mA', '30 mA'],
      filas: [
        ['Hombres', '100 %', '98,5 %', '7,5 %', '**0 %**'],
        ['Mujeres', '99,5 %', '60 %', '0 %', '**0 %**'],
        ['**Niños**', '**92,5 %**', '7,5 %', '0 %', '**0 %**'],
      ],
      nota:
        'Porcentaje de personas que se protegen según la corriente de disparo. ' +
        'RETIE, Resolución 40284 de 2026, Libro 1, tabla 1.5.1.2 a.',
    },
    {
      tipo: 'nota',
      texto:
        'Léala con un jacuzzi en la cabeza. **Según la propia tabla del ' +
        'reglamento, un diferencial de 30 mA no protege a nadie**, y uno de 10 mA ' +
        'protege al 7,5 % de los niños. El que protege al 92,5 % de los niños es ' +
        'el de **6 mA**, que es la sensibilidad del interruptor de falla a tierra ' +
        'norteamericano que la NTC 2050 hereda. Como criterio propio, y lo digo ' +
        'como criterio y no como obligación legal: **para un jacuzzi doméstico ' +
        'pida 6 mA.** La norma le permite menos; la tabla le dice qué compra con ' +
        'esa diferencia.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Lo demás que exige el reglamento' },
    {
      tipo: 'tabla',
      cabeceras: ['Requisito', 'Valor', 'Literal'],
      filas: [
        ['Medios de desconexión: accesibles, a la vista del equipo, y separados de las paredes interiores del jacuzzi', 'al menos 1,5 m en horizontal', 'f'],
        ['Conexión equipotencial de la **superficie del perímetro**, que se prolonga desde las paredes', '1 m en horizontal', 'h'],
        ['Conductor de cobre perimetral para esa conexión', 'no menor a 8 AWG', 'h'],
        ['Cableado subterráneo bajo el vaso o cerca de él', 'prohibido dentro de 1,5 m en horizontal', 'd'],
        ['Tubería en ambientes corrosivos', 'metálica rígida, metálica intermedia, PVC o resina termofija. **Aluminio no**', 'g'],
        ['Cuartos o fosos con equipos eléctricos', 'deben tener drenaje que impida la acumulación de agua', 'e'],
      ],
      nota:
        'RETIE, Resolución 40284 de 2026, Libro 3, numeral 3.28.4.6. Un muro o ' +
        'edificio de 1,5 m de altura o más separa la superficie del perímetro, y ' +
        'entonces la conexión equipotencial solo se exige del lado del jacuzzi.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una buena noticia para quien compra portátil. La NTC 2050 admite ' +
        'expresamente que un conjunto prefabricado **traiga su propio interruptor ' +
        'de falla a tierra de fábrica**, en lugar de exigirlo en la instalación, ' +
        'con una condición: que la unidad esté certificada y **rotulada indicando ' +
        'que ese dispositivo protege todos los equipos eléctricos** —bombas, ' +
        'sopladores, calentadores, luces, controles, alambrado—. Sin ese rótulo, ' +
        'el diferencial va en la salida que lo alimenta.',
    },
    {
      tipo: 'nota',
      texto:
        'Declaración de método, porque afecta a la solidez de todo este apartado. ' +
        'El RETIE vigente remite a la **NTC 2050 Segunda Actualización (2020)**, ' +
        'que es norma de pago de ICONTEC y **no fue posible consultar**. Los ' +
        'numerales de la sección 680 que aquí se mencionan son de la **Primera ' +
        'Actualización (1998)**, que sí es accesible. La correspondencia entre las ' +
        'dos es plausible pero **no la pude verificar**, y en un punto concreto ' +
        'hay motivo para dudar: la edición estadounidense en la que se basa la ' +
        'segunda actualización redujo algunas distancias de tomacorriente. Lo que ' +
        'sí está verificado y es lo que manda son los literales del RETIE citados ' +
        'arriba, que son colombianos y de 2026.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La temperatura y el tiempo dentro' },
    {
      tipo: 'parrafo',
      texto:
        'La Resolución 929 fija la temperatura máxima del agua en **40 °C**, y le ' +
        'añade a las estructuras similares que trabajen a esa temperatura tres ' +
        'obligaciones que no existían antes: un **temporizador ajustado a un ' +
        'máximo de quince minutos**, un **botón de encendido a cinco metros como ' +
        'mínimo** de la estructura, y señalización que alerte a los grupos ' +
        'vulnerables sobre los riesgos, informando además el periodo máximo de ' +
        'permanencia.',
    },
    {
      tipo: 'nota',
      texto:
        'Una precisión de lectura que hago por honestidad y que conviene tener en ' +
        'cuenta: **ese párrafo está dentro del numeral de estanques y estructuras ' +
        'similares cubiertas**, es decir, de los que están en recinto cerrado. La ' +
        'redacción de la frase es general —habla de «estructuras similares» sin ' +
        'más— pero su ubicación es esa. Si su jacuzzi está al aire libre, la ' +
        'aplicación literal es discutible; el criterio sanitario que hay detrás ' +
        '—quince minutos a cuarenta grados es el límite razonable— no lo es.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para los recintos cubiertos la resolución añade además parámetros de ' +
        'aire que rara vez se cumplen: CO₂ entre 400 y 600 ppm, humedad relativa ' +
        'del 50 % al 70 %, temperatura del aire entre uno y tres grados por encima ' +
        'de la del agua, renovación de aire de cuatro a seis veces el volumen del ' +
        'habitáculo por hora y un mínimo de 8 m³ de aire por bañista, con ' +
        'termohigrómetro y medidor de CO₂ visibles.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El atrapamiento: el riesgo es mayor, no menor' },
    {
      tipo: 'parrafo',
      texto:
        'Existe la idea de que un jacuzzi, por pequeño, es más seguro que una ' +
        'piscina. En materia de succión es al revés, y por tres motivos que se ' +
        'suman: el bañista está **sentado**, muchas veces justo encima de la ' +
        'salida de succión; el volumen es pequeño, así que la bomba mueve mucho ' +
        'caudal en relación con el agua que hay; y el pelo largo suelto flota a la ' +
        'altura del asiento.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La norma le aplica lo mismo que a una piscina, y ahora sin discusión ' +
        'posible porque el jacuzzi es una estructura similar: **dos o más desagües ' +
        'sumergidos hidráulicamente balanceados**, en la parte de mayor ' +
        'profundidad, **separados 0,90 m como mínimo**, con cubierta ' +
        'antiatrapamiento, sistema de liberación de vacío y botón de apagado de ' +
        'emergencia. Y la cubierta debe tener **al menos cuatro veces el área de ' +
        'la tubería de descarga**, para minimizar las corrientes de succión.',
    },
    {
      tipo: 'nota',
      texto:
        'Una precisión de vocabulario que conviene hacer una vez, porque decide ' +
        'qué le entregan. Lo que la norma exige es una **cubierta ' +
        'antiatrapamiento**: su función es impedir que la succión retenga a una ' +
        'persona contra el desagüe. En catálogos encontrará piezas descritas por ' +
        'su efecto hidráulico —evitar el remolino sobre la boca— que **no es lo ' +
        'mismo** y no acredita por sí solo el cumplimiento. Al escribir el ' +
        'contrato, use la palabra de la norma y exija la declaración de ' +
        'conformidad del dispositivo, no la descripción comercial de la rejilla.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y sigue en pie lo que ya expliqué en ' +
        '[Ley 1209: qué obliga de verdad](/blog/ley-1209-piscinas-copropiedad): el ' +
        'reglamento técnico que debía definir el desempeño de estos dispositivos ' +
        '**nunca se expidió**, y la Resolución 929 lo sigue redactando en futuro, ' +
        'remitiendo mientras tanto a la declaración de conformidad del propio ' +
        'proveedor. «Homologado», hoy, sigue significando que el fabricante firmó ' +
        'un papel.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El agua: media hora, no seis' },
    {
      tipo: 'parrafo',
      texto:
        'La Resolución 929 fija el tiempo de recirculación por tipo de estanque, y ' +
        'a las estructuras similares les asigna **0,5 horas**, con doce rotaciones ' +
        'al día. Una piscina de uso restringido tiene entre cuatro y seis horas.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Media hora frente a cuatro o seis.** Ese solo número explica por qué un ' +
        'jacuzzi no se cuelga de la máquina de una piscina, y es el asunto de ' +
        '[piscina y jacuzzi juntos](/blog/piscina-y-jacuzzi-juntos). También ' +
        'explica por qué el consumo eléctrico de un jacuzzi sorprende: su bomba de ' +
        'recirculación trabaja seis horas diarias sobre un volumen minúsculo, y el ' +
        'calentador mantiene cuarenta grados las veinticuatro.',
    },
    {
      tipo: 'nota',
      texto:
        'El costo corriente de un jacuzzi es, casi todo, **calentamiento**. Es una ' +
        'partida mensual, no una inversión, y las opciones se comparan en ' +
        '[calentar la piscina](/blog/calentar-la-piscina-solar-bomba-de-calor-o-gas). Si el calentamiento es ' +
        'a gas, la Resolución 929 remite además a la reglamentación de ' +
        'instalaciones de gas del Ministerio de Minas y Energía, que es un trámite ' +
        'y una certificación aparte.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En cuanto a la calidad del agua, el parámetro que más se incumple en ' +
        'jacuzzis es el microbiológico. La normativa sanitaria exige ausencia de ' +
        '*Pseudomonas aeruginosa*, que es la bacteria responsable de la foliculitis ' +
        'de bañera caliente, y es precisamente la que prospera en agua templada con ' +
        'poco cloro y mucha biopelícula en la tubería de los chorros. Un jacuzzi ' +
        'que huele raro no necesita más cloro: necesita cambio de agua y limpieza ' +
        'de líneas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Obra o portátil: la comparación completa' },
    {
      tipo: 'tabla',
      cabeceras: ['', 'De obra', 'Portátil'],
      filas: [
        ['**Carga**', 'Mayor en total, pero repartida y transmisible a la estructura', 'Menor en total, **concentrada** en 4 m² donde se apoye'],
        ['**Plazo**', 'Semanas: excavación o vaso, impermeabilización, cuarto de equipos', 'Un día, si la instalación eléctrica y el desagüe ya están'],
        ['**Eléctrico**', 'Instalación fija completa, con equipotencial y diferencial en obra', 'Puede traer el diferencial de fábrica **si está rotulado**; el resto sigue aplicando'],
        ['**Desagüe**', 'Se resuelve en el diseño, con punto propio', 'Hay que llevarlo hasta donde se ponga, y suele improvisarse'],
        ['**Reparación**', 'Se repara por partes, con repuestos genéricos', 'Depende del fabricante y del importador. Un casco fisurado suele ser el final'],
        ['**Mudanza**', 'No se mueve', 'Se lleva. Es su ventaja real y casi nunca se usa'],
        ['**Reventa del inmueble**', 'Es un área construida y debe estar en la licencia', 'Es un mueble. No aparece en ningún plano'],
        ['**Licencia**', 'Suele requerirla, sobre todo si toca estructura', 'No por sí mismo, pero **sí la obra eléctrica y estructural** que lo soporte'],
        ['**Diseño**', 'A medida: forma, profundidad, asientos, integración', 'Lo que fabrique el catálogo'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La conclusión que saco de haber visto los dos fallar: **el portátil no es ' +
        'la opción barata, es la opción rápida.** Lo que ahorra es obra civil y ' +
        'plazo; lo que no ahorra es la evaluación estructural si va sobre un ' +
        'entrepiso, ni la instalación eléctrica en regla, ni el punto de desagüe. ' +
        'Cuando un presupuesto de portátil resulta muy barato, casi siempre es ' +
        'porque esas tres cosas no están dentro.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que hay que tener resuelto antes de comprar' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El peso lleno del equipo**, de la ficha del fabricante, más los bañistas, dividido por su huella. Compárelo con lo que la losa admite.',
        '**Si va sobre entrepiso o cubierta**, la evaluación estructural firmada por un ingeniero civil. Antes de comprar, no después.',
        '**El punto de desagüe**, con capacidad para el vaciado completo y destino legal.',
        '**El circuito eléctrico**: dedicado, con protección diferencial de alta sensibilidad, y con el desconectador a la vista y a 1,5 m como mínimo.',
        '**La conexión equipotencial** de las partes metálicas y de la superficie perimetral, con cobre de 8 AWG o mayor.',
        '**Los dos drenajes separados 0,90 m** con sus cubiertas, su liberación de vacío y su botón de apagado.',
        '**Si es copropiedad**, la autorización de la asamblea: la losa es bien común aunque la terraza sea de uso exclusivo.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de las siete es cara si se resuelve antes. Las siete son caras ' +
        'después, y dos de ellas —la estructura y el desagüe— pueden no tener ' +
        'solución en el sitio elegido, que es exactamente lo que conviene ' +
        'descubrir mientras el jacuzzi todavía está en la tienda.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'seguridad', 'estructura'],
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
      titulo: 'RETIE, Resolución 40284 de 2026, Libro 1 — Disposiciones generales, numeral 1.5.1.2',
      editor: 'Ministerio de Minas y Energía',
      url: 'https://www.minenergia.gov.co/documents/15919/Libro-1-Resolucion-40284-23-06-2026.pdf',
      fecha: '2026-06-23',
    },
    {
      titulo: 'NTC 2050, Código Eléctrico Colombiano, primera actualización, sección 680',
      editor: 'ICONTEC',
      url: 'https://curaduria1santamarta.com/files/NTC-2050.pdf',
      fecha: '1998-11-25',
    },
    {
      titulo: 'Ley 1209 de 2008, por la cual se establecen normas de seguridad en piscinas',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1209_2008.html',
      fecha: '2008-07-14',
    },
    {
      titulo: 'NSR-10, Título B — Cargas, tablas B.3.2-1 y B.4.2.1-1',
      editor: 'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf',
      fecha: '2010-03-19',
    },
  ],
}
