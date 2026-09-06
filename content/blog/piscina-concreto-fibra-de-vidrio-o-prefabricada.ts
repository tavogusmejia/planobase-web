import type { Post } from '@/lib/types'

/**
 * La comparación que en internet se resuelve siempre con la misma tabla
 * copiada, y que aquí se resuelve con dos datos que nadie pone:
 *
 * 1. **El ancho de una piscina de fibra de vidrio en Colombia lo decide la
 *    vía, no el catálogo.** El monocasco viaja entero, y la Resolución 4959 de
 *    2006 del Ministerio de Transporte clasifica como carga extradimensionada
 *    todo lo que pase de 2,60 m de ancho: permiso, operador inscrito en el
 *    registro del ministerio, vehículos de acompañamiento, 40 km/h en carretera
 *    y 20 km/h en vía urbana. Es un condicionante local duro y no lo dice
 *    ningún folleto.
 * 2. **La subpresión.** Un vaso vacío con el nivel freático por encima del
 *    fondo flota, y el empuje se calcula en una línea: 32 m² × 1,40 m ≈ 45
 *    toneladas. Explica de un golpe por qué el vaso es una estructura y por qué
 *    la válvula hidrostática no es un accesorio.
 *
 * Lo que la norma exige es igual para las tres familias y se cita del
 * articulado, no de un proveedor: **Resolución 929 de 2026**, anexo técnico,
 * numerales 7 a 10. Sustituye materialmente a la Resolución 1510 de 2011, sobre
 * la que se escribió la primera versión de esta pieza, y cambia cuatro de las
 * cinco cifras: el desnatador pasa de uno por 50 m² a uno por **46,5 m²**, la
 * velocidad en tubería de «menos de 3 m/s» a **2,4 m/s en presión y 1,8 en
 * succión**, el diámetro máximo de seis a **ocho pulgadas**, y el período de
 * recirculación deja de tener una casilla para la piscina unifamiliar. Solo la
 * separación de 0,90 m entre desagües se mantuvo igual.
 *
 * No se publica ninguna cifra de precio, por la misma razón declarada en
 * «Cuánto cuesta una piscina en Colombia»: no hay fuente colombiana. Lo que sí
 * se publica es qué encarece cada familia y qué se paga a los quince años.
 *
 * Fechado en junio de 2026: no cita ninguna fuente posterior a 2011 y es
 * perenne, así que sirve para repartir el pilar hacia atrás.
 */
export const post: Post = {
  slug: 'piscina-concreto-fibra-de-vidrio-o-prefabricada',
  titulo: 'Concreto, fibra de vidrio o prefabricada: cuál le conviene',
  pilar: 'piscinas',
  fecha: '2026-06-16',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Las tres se pueden construir bien y las tres se pueden construir mal. Lo ' +
    'que de verdad decide en Colombia son dos cosas que ningún folleto ' +
    'menciona: el ancho de la vía por la que tiene que llegar el vaso, y el ' +
    'agua que hay debajo del terreno.',
  metaDescripcion:
    'Piscina de concreto, de fibra de vidrio o prefabricada: qué cambia de ' +
    'verdad entre las tres, qué exige la norma a todas y cuándo conviene cada una.',
  puerta: 'diseno-a-medida',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'estructura', 'costos'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La pregunta se suele hacer al revés. No se trata de cuál es «mejor», ' +
        'porque las tres se pueden construir bien y las tres se pueden ' +
        'construir mal. Se trata de cuál cabe en su lote, en su acceso, en su ' +
        'terreno y en el uso que usted le va a dar durante los próximos veinte ' +
        'años.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay dos condicionantes colombianos que deciden la respuesta antes ' +
        'que cualquier comparación de acabados: **por dónde entra el vaso** y ' +
        '**qué hay debajo del terreno**. Empecemos por lo que son.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las tres familias' },
    {
      tipo: 'lista',
      items: [
        '**Concreto**, vaciado en sitio o lanzado. Se construye en el hueco: acero, concreto, impermeabilización y revestimiento. Forma libre, profundidad libre, borde libre —incluido el borde infinito y cualquier variante de piscina desbordante—. Es la más lenta y la única que admite reparación indefinida.',
        '**Fibra de vidrio**, monocasco. Un vaso de poliéster reforzado fabricado en molde en una planta y transportado entero hasta el sitio. La instalación se mide en días y no en semanas. La forma, el tamaño y la profundidad son los del molde: no hay «casi».',
        '**Prefabricada de panel y liner.** Una estructura de paneles —acero galvanizado o polímero— montada en el hueco y forrada por dentro con una membrana. Es la de montaje más rápido y la de menor inversión inicial, y su membrana es un consumible que se cambia.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que la norma les exige a las tres por igual' },
    {
      tipo: 'parrafo',
      texto:
        'Esto no cambia con el material, y conviene tenerlo claro antes de ' +
        'comparar precios: dos cotizaciones que cumplen y no cumplen no son ' +
        'comparables.',
    },
    {
      tipo: 'lista',
      items: [
        '**Dos o más desagües sumergidos** en la parte de mayor profundidad, hidráulicamente balanceados, separados como mínimo **0,90 m**, cada uno con su cubierta antiatrapamiento —la norma la escribe «antientrampamiento»— de un área de al menos **cuatro veces la de la tubería de descarga**, más sistema de liberación de vacío y botón de apagado de emergencia.',
        '**Un skimmer —el sumidero de superficie, que la norma llama desnatador— por cada 46,5 m² de lámina de agua**, en lados opuestos del vaso. Por encima de 312 m² de lámina se sustituye por sobreflujo perimetral, y no aplica a las piscinas de borde infinito.',
        '**Período de recirculación de 4 a 6 horas**, de dos a cuatro recambios al día y de 8 a 24 horas de circulación diaria en la piscina de uso restringido. Eso dimensiona la bomba y el filtro.',
        '**Velocidad máxima de 2,4 m/s en la línea de presión y de 1,8 m/s en la de succión**, y diámetro máximo de ocho pulgadas.',
        '**Revestimiento estanco**, fácil de limpiar y desinfectar y estable frente a los productos del tratamiento — y la norma extiende la exigencia a las canaletas perimetrales y a los tanques de compensación. Aplica al gelcoat de la fibra y a la membrana del liner igual que al enchape del concreto.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Un monocasco de fibra viene con sus salidas de succión moldeadas de ' +
        'fábrica. **Cuéntelas antes de comprar.** Un modelo con un solo drenaje ' +
        'de fondo no cumple, y en un monocasco no se abre un segundo drenaje ' +
        'después: habría que perforar el vaso. Es la comprobación de treinta ' +
        'segundos que más plata ahorra en toda la decisión.',
    },
    {
      tipo: 'nota',
      texto:
        'Y una aclaración de lenguaje: **«piscina certificada» no es una ' +
        'categoría legal en Colombia.** Lo que la ley regula son los ' +
        'dispositivos, no las piscinas, y qué significa hoy que un dispositivo ' +
        'esté homologado está explicado con el articulado en la mano en ' +
        '[qué obliga de verdad la Ley 1209](/blog/ley-1209-piscinas-copropiedad).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El dato que decide la piscina de fibra: la vía' },
    {
      tipo: 'parrafo',
      texto:
        'Un monocasco no se arma en el sitio: llega hecho, sobre una cama, ' +
        'colgado de una grúa. Y todo lo que mide el vaso tiene que pasar por ' +
        'cada curva del camino hasta su lote.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La regla nacional es concreta. La Resolución 4959 de 2006 del ' +
        'Ministerio de Transporte clasifica como **carga extradimensionada** ' +
        'todo lo que supere los **2,60 m de ancho**, y a partir de ahí el ' +
        'transporte deja de ser un flete y pasa a ser un trámite.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Ancho del vaso', 'Qué implica el transporte'],
      filas: [
        [
          'Hasta 2,60 m',
          'Transporte corriente. Es el ancho en el que caben los modelos que se mueven sin fricción por casi cualquier vía del país',
        ],
        [
          'Más de 2,60 m y hasta 3,00 m',
          'Carga extradimensionada: permiso, operador inscrito en el registro del ministerio, y vehículo o vehículos de acompañamiento. Máximo 40 km/h en carretera y 20 km/h en vía urbana',
        ],
        [
          'Más de 3,00 m',
          'Escala de exigencia mayor todavía, y la viabilidad hay que verificarla ruta por ruta antes de comprometer el modelo',
        ],
      ],
      nota:
        'Resolución 4959 de 2006 del Ministerio de Transporte, sobre transporte ' +
        'de carga indivisible extrapesada y extradimensionada.',
    },
    {
      tipo: 'nota',
      texto:
        'De ahí sale la frase que hay que llevarse: **el ancho de su piscina ' +
        'de fibra no lo decide el catálogo, lo decide la curva más cerrada del ' +
        'camino.** Antes de enamorarse de un modelo, recorra la ruta desde la ' +
        'vía principal hasta el sitio y mida el paso más estrecho, la altura ' +
        'libre de cables y ramas, y dónde se va a parar la grúa. En lote ' +
        'campestre esto elimina modelos enteros del catálogo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La subpresión: por qué el vaso es una estructura' },
    {
      tipo: 'parrafo',
      texto:
        'Este es el segundo condicionante, y el que produce los daños más ' +
        'caros y más difíciles de explicarle a un cliente después.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una piscina vacía es un cajón hueco enterrado. Si el nivel freático ' +
        'sube por encima del fondo, el agua del terreno empuja hacia arriba con ' +
        'una fuerza igual al peso del agua desplazada. En nuestra piscina de ' +
        'referencia —32 m² de fondo— con el agua del terreno 1,40 m por encima ' +
        'del fondo, ese empuje es de unas **45 toneladas**. Un vaso de concreto ' +
        'no pesa eso. Un monocasco de fibra no pesa ni la vigésima parte.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El resultado tiene nombre propio en el oficio: la piscina «se sale ' +
        'del hueco». Se levanta, se inclina, rompe la tubería y arruina el ' +
        'andén perimetral. Y casi siempre pasa el día que alguien la vacía para ' +
        'limpiarla, en temporada de lluvia.',
    },
    {
      tipo: 'nota',
      texto:
        'Las tres defensas son de diseño, no de mantenimiento: **válvula ' +
        'hidrostática en el fondo** para que el agua del terreno entre en vez ' +
        'de empujar, **dren perimetral con salida a punto más bajo o a un pozo ' +
        'con bomba**, y **anclaje o lastre** cuando el cálculo lo pida. Y la ' +
        'regla de operación que se deriva de todas: **nunca vacíe la piscina en ' +
        'invierno sin saber dónde está el nivel freático.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Por eso el vaso es una estructura y no un acabado: el estudio de ' +
        'suelos y el diseño estructural van firmados por ingeniero civil, que ' +
        'es lo que exige el régimen de construcción sismo resistente. En lote ' +
        'con pendiente se suma el empuje lateral del terreno, que es otra ' +
        'conversación: está en [construir en lote con ' +
        'pendiente](/blog/construir-en-lote-con-pendiente).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La comparación, sin adornos' },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Concreto', 'Fibra de vidrio', 'Panel y liner'],
      filas: [
        ['Forma y profundidad', 'Libres', 'Las del molde', 'Rectas, profundidad limitada'],
        ['Borde infinito o desbordante', 'Sí', 'Solo si el molde lo trae', 'No, en la práctica'],
        ['Plazo de ejecución', 'Semanas', 'Días, una vez llega', 'Días'],
        ['Depende del acceso vehicular', 'Poco', '**Es determinante**', 'Poco'],
        ['Riesgo de flotación con el vaso vacío', 'Alto sin válvula hidrostática', '**Muy alto** sin válvula hidrostática', 'Alto sin válvula hidrostática'],
        ['Reparación de una fisura', 'Rutinaria', 'Especializada, y se nota', 'Se cambia el parche o la membrana'],
        ['Qué se renueva con los años', 'El enchape y la impermeabilización', 'El gelcoat, en un repintado técnico', '**La membrana, entera**'],
        ['Se puede ampliar o cambiar de forma', 'Sí', 'No', 'No'],
      ],
      nota:
        'La fila que más pesa a largo plazo es la penúltima. En panel y liner, ' +
        'la membrana es un consumible: llegado el día se cambia y esa es una ' +
        'partida que hay que tener presupuestada desde el principio, no una ' +
        'sorpresa.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que le van a decir, y lo que hay detrás' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**«La fibra no se fisura».** El monocasco no se fisura como el concreto, cierto. Pero se deforma si la cama de arena queda mal compactada y se ampolla si el gelcoat trabaja mal, y las dos cosas se reparan peor que una fisura de concreto.',
        '**«El concreto es eterno».** El vaso, casi. La impermeabilización y el enchape, no: son elementos con vida útil y hay que reponerlos. Un presupuesto que no lo dice está corriendo esa cuenta hacia adelante.',
        '**«El liner se cambia y queda como nuevo».** Es verdad, y esa es exactamente la cuestión: hay que cambiarlo. Pregunte por escrito la vida útil que el fabricante declara para la membrana y qué cubre la garantía.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Sobre garantías, el marco es el estatuto del consumidor: en bienes ' +
        'inmuebles la garantía legal es de **diez años sobre la estabilidad de ' +
        'la obra y de un año sobre los acabados**. Pida que la garantía del ' +
        'proveedor diga cuál de las dos cosas está cubriendo, porque «garantía ' +
        'de diez años» sobre un liner no significa nada.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo conviene cada una' },
    {
      tipo: 'lista',
      items: [
        '**Concreto** cuando la forma no es negociable, cuando hay pendiente, cuando quiere [borde infinito](/blog/piscina-de-borde-infinito) o cualquier variante desbordante, cuando el terreno es exigente, o cuando la piscina es de uso colectivo y va a trabajar todos los días de su vida.',
        '**Fibra de vidrio** cuando el acceso es amplio y verificado, cuando el tamaño del catálogo le sirve tal cual, cuando el plazo manda, y cuando el terreno es firme y sin agua. Es la opción más limpia de las tres si esas cuatro se cumplen.',
        '**Panel y liner** cuando la inversión inicial es la restricción principal y usted acepta, con los ojos abiertos, que la membrana es un consumible con fecha.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien dirige esta línea en el estudio trae quince años diseñando ' +
        'sistemas hidráulicos y cuerpos de agua, y en ese tiempo la discusión ' +
        'material casi nunca fue la que decidió un proyecto. Lo que decidió fue ' +
        'siempre lo mismo: por dónde entra, qué hay debajo, y quién firma el ' +
        'cálculo. Elija eso primero; el material se elige solo después.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Resolución 929 de 2026, criterios técnicos constructivos y de seguridad para piscinas y estructuras similares',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0929-de-2026.pdf',
      fecha: '2026-05-12',
    },
    {
      titulo:
        'Resolución 4959 de 2006: requisitos y procedimiento para el transporte de carga indivisible extrapesada y extradimensionada',
      editor: 'Ministerio de Transporte',
      url: 'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/5576-resolucion-4959-de-8-noviembre-de-2006',
      fecha: '2006-11-08',
    },
    {
      titulo: 'Ley 1209 de 2008, por la cual se establecen normas de seguridad en piscinas',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1209_2008.html',
      fecha: '2008-07-14',
    },
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Congreso de la República de Colombia',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Ley 1480 de 2011, estatuto del consumidor',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1480_2011.html',
      fecha: '2011-10-12',
    },
  ],
}
