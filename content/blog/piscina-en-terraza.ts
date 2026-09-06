import type { Post } from '@/lib/types'
import { CARGAS } from './diagramas/piscina-en-terraza'

/**
 * La pieza más verificable del lote, y la que más creencias desmonta.
 *
 * El punto de partida de la investigación era la frase que se repite en todo el
 * gremio —«la NSR-10 no habla de piscinas»— y resultó **falsa**. Las nombra
 * literalmente en B.5.2, en C.1.1.11, en A.8.1.1(b) y en varias entradas del
 * Título K, y les dedica un capítulo entero: el **C.23**, «Tanques y estructuras
 * de ingeniería ambiental de concreto», que cubre con esas palabras «piscinas y
 * albercas que hacen parte del equipamento de edificaciones». Ese capítulo es la
 * columna vertebral del artículo y casi nadie lo cita.
 *
 * El segundo hallazgo es de vigencia y afecta a cualquiera que consulte la
 * norma por su cuenta: **la Tabla B.4.2.1-2 que traen los PDF que circulan está
 * derogada.** La sustituyó el Decreto 092 de 2011, y la vigente tiene seis casos
 * donde la anterior tenía cuatro filas. Quien dimensione una terraza con el PDF
 * de internet está usando una tabla que no rige.
 *
 * **Una honestidad que se sostiene aunque debilite el argumento:** A.10.6.3 fija
 * el umbral del 10 % sobre *solicitación sísmica*, no sobre carga gravitacional.
 * La cadena masa añadida → mayor fuerza sísmica → umbral superado es sólida,
 * pero es un razonamiento y va marcado como razonamiento. No se escribe que la
 * norma diga lo que no dice: un ingeniero que coteje tiene que encontrar el
 * texto tal como es.
 *
 * Fechada el 28 de julio de 2026, después de la Resolución 929.
 */
export const post: Post = {
  slug: 'piscina-en-terraza',
  titulo: 'Piscina en terraza: carga estructural e impermeabilización',
  pilar: 'piscinas',
  fecha: '2026-07-28',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Son dos problemas y en este orden: si aguanta, y si no se filtra. La ' +
    'NSR-10 sí habla de piscinas —tiene un capítulo entero— y la tabla de ' +
    'cargas de terrazas que circula en internet está derogada desde 2011.',
  metaDescripcion:
    'Qué carga impone una piscina sobre una losa existente, qué exige la ' +
    'NSR-10 y cómo se impermeabiliza una terraza que además contiene agua.',
  puerta: 'diagnostico-de-edificaciones',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Poner una piscina en una terraza son dos problemas distintos, y el orden ' +
        'importa más de lo que parece: primero hay que saber **si la losa ' +
        'aguanta**, y solo después tiene sentido hablar de **cómo se impermeabiliza**. ' +
        'Invertir el orden es el error caro del tema, porque produce presupuestos ' +
        'detallados de una obra que a lo mejor no se puede hacer.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay una tercera cosa, que es la que casi nunca se dice: la carga de ' +
        'una piscina no es carga viva. Es carga muerta, permanente, y eso cambia ' +
        'quién tiene que revisar qué.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La cuenta que cierra la conversación' },
    {
      tipo: 'parrafo',
      texto:
        'Empecemos por el número, porque en la mitad de los casos el número acaba ' +
        'la discusión sin necesidad de nada más.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La NSR-10 da la densidad del agua en su tabla de masas de materiales: ' +
        '**agua dulce, 1.000 kg/m³** (y marina, 1.030). Y su capítulo de cargas ' +
        'muertas manda multiplicar las densidades por **9,8 m/s²** para obtener el ' +
        'peso. Un metro de lámina de agua pesa, entonces, 9,8 kN/m². Una lámina de ' +
        '1,20 m pesa **11,76 kN/m², que son unos 1.200 kilogramos por metro ' +
        'cuadrado**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ahora, con qué se compara. La carga viva mínima de diseño que la NSR-10 ' +
        'exige para los cuartos privados de una vivienda y sus corredores es de ' +
        '**1,8 kN/m² (180 kgf/m²)**.',
    },
    {
      tipo: 'diagrama',
      svg: CARGAS,
      titulo: 'Lo que la losa se diseñó para aguantar, y lo que la piscina le pone',
      pie:
        'Cargas en kN/m². Las dos primeras son mínimos de la NSR-10, tablas ' +
        'B.4.2.1-1 y B.4.2.1-2 —esta última en la redacción del Decreto 092 de ' +
        '2011—. Las dos últimas son carga muerta: agua a 1.000 kg/m³ por ' +
        '9,8 m/s², más una losa de fondo de 0,20 m y sus acabados. **La losa de ' +
        '0,20 m es un supuesto explícito**, no un dato de norma. Diagrama del ' +
        'estudio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Solo el agua de una piscina de metro veinte pesa **seis veces y media** ' +
        'la carga viva de diseño de la habitación de al lado. Sumando el vaso y ' +
        'los acabados se pasa de nueve veces. Y no es una carga que a veces esté y ' +
        'a veces no: está siempre.',
    },
    {
      tipo: 'nota',
      texto:
        'Antes de seguir conviene desmontar una frase que se repite mucho en el ' +
        'gremio: **«la NSR-10 no habla de piscinas».** Es falsa. Las nombra ' +
        'literalmente al menos en cuatro sitios —el capítulo de presión ' +
        'hidrostática del Título B, el alcance del Título C, la lista de elementos ' +
        'que no hacen parte del sistema de resistencia sísmica del Título A, y ' +
        'varias entradas del Título K— y les dedica un capítulo entero. Lo veremos ' +
        'más abajo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La tabla de terrazas que circula está derogada' },
    {
      tipo: 'parrafo',
      texto:
        'Este punto merece una sección propia porque afecta a cualquiera que ' +
        'consulte la norma por su cuenta, y porque el error se propaga desde ' +
        'archivos que parecen oficiales.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las cargas vivas de cubiertas, azoteas y terrazas están en la tabla ' +
        'B.4.2.1-2 de la NSR-10. **Los PDF del Título B que circulan por internet ' +
        'traen la versión original de 2010, que tiene cuatro filas y resuelve las ' +
        'terrazas con una remisión.** Esa tabla fue sustituida por el **Decreto ' +
        '092 de 2011**, que dice literalmente «La Tabla B.4.2.1-2 debe quedar ' +
        'así» y la reemplaza por una de seis casos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La diferencia no es cosmética: en la tabla vigente **la carga de una ' +
        'terraza depende de a qué da acceso y de qué diga la licencia y el ' +
        'reglamento de copropiedad.**',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Caso', 'Situación', 'Carga viva mínima'],
      filas: [
        ['A', 'Acceso **totalmente limitado** al personal de mantenimiento, con puerta o trampa cerrada con llave bajo custodia, y la limitación consta en el reglamento de copropiedad', '1,80 kN/m² (180 kgf/m²)'],
        ['B', 'Con acceso al público o a los usuarios **sin restricción**', 'La mayor del resto de la edificación'],
        ['C', 'Con acceso **únicamente desde un bien privado**, según licencia y reglamento', 'La del espacio desde el cual se da el acceso'],
        ['D', 'Autorizada en licencia y reglamento como **elemento comunal recreativo** o jardín comunal de cubierta', '**5,00 kN/m² (500 kgf/m²)**'],
        ['E', 'Cubierta inclinada más de 15°, estructura metálica o de madera, sin posibilidad de cargas mayores', '0,35 kN/m² (35 kgf/m²)'],
        ['F', 'Cubierta inclinada 15° o menos, ídem, **sin posibilidad alguna de acceso** salvo mantenimiento', '0,50 kN/m² (50 kgf/m²)'],
      ],
      nota:
        'NSR-10, tabla B.4.2.1-2 en la redacción que le dio el Decreto 092 de ' +
        '2011. Resumida: el texto normativo de cada caso es más largo y conviene ' +
        'leerlo entero antes de aplicarlo.',
    },
    {
      tipo: 'nota',
      texto:
        'Y una nota de esa misma tabla que resuelve por sí sola bastantes ' +
        'discusiones de obra. La **Nota-2** dice que los enchapes, las baldosas, ' +
        'los acabados de piso, **las impermeabilizaciones y sus pendientados**, la ' +
        'jardinería, las materas y los toldos **no están comprendidos dentro de la ' +
        'carga viva** y deben computarse aparte como carga muerta. Es decir: los ' +
        '500 kgf/m² de una terraza comunal recreativa **no incluyen** el peso de ' +
        'lo que usted le ponga encima. Empiezan después.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por qué importa que sea carga muerta' },
    {
      tipo: 'parrafo',
      texto:
        'Una carga viva va y viene: la gente entra a una habitación y sale. Una ' +
        'piscina no. Sus cuarenta toneladas de agua están ahí el lunes y el ' +
        'domingo, en verano y en invierno, y eso tiene dos consecuencias que a ' +
        'menudo se pasan por alto.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La primera es la **deflexión diferida**: el concreto sometido a carga ' +
        'permanente sigue deformándose durante años. Una losa que «aguanta» puede ' +
        'aguantar y aun así acabar con una flecha que rompe los acabados y ' +
        'desnivela justamente el borde de la piscina.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La segunda es más seria y es la que casi nunca se menciona en las ' +
        'cotizaciones: **la masa sísmica**. La fuerza que un sismo le impone a un ' +
        'edificio se calcula a partir de su masa. Cuarenta toneladas nuevas en una ' +
        'losa alta no cargan solo esa losa: cargan las columnas de abajo, los ' +
        'muros de cortante y la cimentación, y lo hacen amplificadas por la ' +
        'altura. **El problema de una piscina en una terraza no está solo en la ' +
        'terraza.**',
    },
    {
      tipo: 'nota',
      texto:
        'Aquí hay que ser preciso con lo que dice la norma, porque el matiz es ' +
        'real. La NSR-10 permite modificar una edificación existente sin validar ' +
        'la capacidad resultante **mientras la modificación no incremente la ' +
        'solicitación sísmica en más de un 10 % ni reduzca la capacidad en más de ' +
        'un 10 %**; superado el umbral, hay que revisar la estructura completa. ' +
        'Ahora bien: **ese numeral está redactado sobre solicitación sísmica, no ' +
        'sobre carga gravitacional.** Que añadir masa incremente la solicitación ' +
        'es una consecuencia del propio método de la norma, y en una piscina el ' +
        '10 % se supera con facilidad — pero es un razonamiento, no una cita ' +
        'textual, y lo presento como tal.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay además un numeral que se aplica siempre y que conviene conocer ' +
        'porque mata el peritaje de escritorio: en una edificación existente, **las ' +
        'cargas muertas deben evaluarse con base en observaciones y mediciones de ' +
        'campo**, y nunca pueden tomarse menores que las del Título B. No vale ' +
        'suponer el peso de lo que ya está construido: hay que ir a medirlo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El capítulo que casi nadie cita: C.23' },
    {
      tipo: 'parrafo',
      texto:
        'Cuando el Título B trata la subpresión sobre losas enterradas, cierra el ' +
        'numeral con una frase que remite a otro sitio: «La misma consideración ' +
        'debe hacerse en el diseño de tanques y piscinas. Véase el capítulo C.23».',
    },
    {
      tipo: 'parrafo',
      texto:
        'El **Capítulo C.23** se titula «Tanques y estructuras de ingeniería ' +
        'ambiental de concreto» y su alcance dice, con estas palabras, que cubre ' +
        '«tanques y compartimentos estancos tales como **piscinas y albercas que ' +
        'hacen parte del equipamento de edificaciones**». No es un capítulo para ' +
        'plantas de tratamiento: es el capítulo de su piscina.',
    },
    {
      tipo: 'parrafo',
      texto: 'Lo que exige, y que rara vez aparece en un contrato de piscinas:',
    },
    {
      tipo: 'lista',
      items: [
        '**Resistencia mínima del concreto.** El capítulo fija una f′c mínima de **28 MPa** para las estructuras que cubre. Es bastante más de lo que se usa por defecto en obra menor.',
        '**Baja permeabilidad.** El Título C clasifica la exposición del concreto en categorías, y la que corresponde a una estructura en contacto con agua donde se requiere baja permeabilidad es la clase **P1**. El propio C.23 añade además una categoría de exposición a **químicos corrosivos**, que es exactamente lo que hay dentro de una piscina clorada.',
        '**El ensayo de estanqueidad va en los planos.** El capítulo exige que los planos y las especificaciones incluyan los requisitos para ensayar la impermeabilidad y la estanqueidad **antes de que se hagan los rellenos aledaños**. No es una buena práctica opcional: es contenido obligatorio del plano.',
        '**El vaso vacío también carga.** Obliga a considerar las subpresiones sobre los tanques desocupados y a disponer lastre para evitar la falla por flotación. En una terraza esto casi nunca aplica, pero sí aplica si parte del vaso queda enterrado o si hay una piscina en un sótano o en un semisótano.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'El capítulo está basado en un documento del American Concrete Institute, ' +
        'pero conviene decirlo con cuidado porque también se cita mal: **la NSR-10 ' +
        'no remite a la norma estadounidense, la incorpora traducida y adaptada.** ' +
        'Lo obligatorio en Colombia es el Capítulo C.23, no el documento original.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién firma qué' },
    {
      tipo: 'parrafo',
      texto:
        'Esto no admite matices y conviene tenerlo claro antes de contratar a ' +
        'nadie. La ley que gobierna las construcciones sismo resistentes reparte ' +
        'las firmas:',
    },
    {
      tipo: 'cita',
      texto:
        'El diseñador debe ser un ingeniero civil cuando se trate de diseños ' +
        'estructurales y estudios geotécnicos, y un arquitecto o ingeniero civil o ' +
        'mecánico en el caso de diseños de elementos no estructurales.',
      fuente: 'Ley 400 de 1997, artículo 26',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que hace falta **antes de dibujar nada** es una evaluación estructural ' +
        'de la losa existente, firmada por un ingeniero civil, que responda una de ' +
        'tres cosas: aguanta, aguanta reforzada, o no aguanta. Un arquitecto no ' +
        'puede firmar eso, y un contratista de piscinas tampoco. Si le ofrecen ' +
        'empezar la obra sin ese documento, lo que le están ofreciendo es que ' +
        'usted asuma el riesgo entero.',
    },
    {
      tipo: 'nota',
      texto:
        'La Resolución 929 de 2026 refuerza esto por su lado. Exige planos ' +
        'técnicos constructivos con detalles del sistema de tratamiento, ' +
        'calentamiento, eléctrico, hidráulico y de gas, elaborados sobre los ' +
        'planos arquitectónicos y estructurales, **con cumplimiento de norma sismo ' +
        'resistente y memorias de cálculo**. Y añade que los estanques construidos ' +
        'antes de la resolución **que no cuenten con memorias o cálculos ' +
        'estructurales deberán realizar estudios** para cumplirlo. Si su ' +
        'copropiedad tiene una piscina en cubierta sin memorias, esa frase le ' +
        'aplica.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Si la terraza está en propiedad horizontal' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay una confusión que cuesta procesos judiciales. Aunque la terraza ' +
        'sea de uso exclusivo de su apartamento, **la losa que la sostiene es bien ' +
        'común esencial**. La terraza es suya para usarla; la estructura que la ' +
        'aguanta, no.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso significa que hacen falta **dos cosas a la vez, y son acumulativas**: ' +
        'la autorización de la asamblea, porque se interviene un bien común, y la ' +
        'licencia de construcción en la modalidad que corresponda, que aquí es la ' +
        'de intervención estructural. Ninguna sustituye a la otra, y el orden ' +
        'sensato es pedir primero la de la asamblea: pagar expensas de curaduría ' +
        'por algo que después no le autorizan es dinero perdido. El detalle está ' +
        'en [reformar en propiedad horizontal](/blog/reformar-en-propiedad-horizontal) ' +
        'y en [¿necesito licencia para construir una piscina?](/blog/necesito-licencia-para-construir-una-piscina).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El segundo problema: es cubierta y es recipiente a la vez' },
    {
      tipo: 'parrafo',
      texto:
        'Superada la estructura, viene el problema que produce los pleitos. Una ' +
        'piscina en terraza es **dos cosas incompatibles en el mismo punto**: una ' +
        'cubierta, cuyo trabajo es que el agua no entre, y un recipiente, cuyo ' +
        'trabajo es que el agua no salga.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y tiene una particularidad cruel: **una fuga no se manifiesta donde ' +
        'está**. El agua que se escapa del vaso no aparece en la terraza; aparece ' +
        'en el techo del apartamento de abajo, y para entonces ya ha viajado por ' +
        'la losa y por donde haya encontrado camino. Diagnosticar el origen es un ' +
        'problema en sí mismo, y es el mismo problema que se describe en ' +
        '[filtraciones en cubierta](/blog/filtraciones-en-cubierta).',
    },
    {
      tipo: 'parrafo',
      texto: 'De ahí salen tres reglas de proyecto:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Dos sistemas independientes, no uno.** La impermeabilización del vaso es una, y la de la cubierta es otra, con su propio drenaje y su propia pendiente. Que el vaso sea estanco no exime a la cubierta de serlo: el día que el vaso falle, la segunda barrera es la que decide si el daño es una reparación o un pleito.',
        '**Cada pasatubos es una fuga futura.** El desagüe, el rebose, la impulsión, el retorno y la luminaria atraviesan la impermeabilización. Cada penetración es un punto de fallo, y el número de penetraciones es una decisión de diseño: se pueden agrupar, se pueden sacar por el costado en vez de por el fondo, y se puede prescindir de la luminaria sumergida.',
        '**El vaso separado de la losa.** Siempre que sea posible, el vaso debe apoyarse sobre la estructura sin ser la estructura, con su propia lámina impermeable por debajo y una cámara o capa drenante que recoja lo que se filtre y lo lleve a un punto visible. Una fuga que gotea donde usted la ve es un mantenimiento; una fuga que no se ve es una demolición.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La prueba que hay que exigir por contrato, y que es la única que ' +
        'demuestra algo: **la prueba de estanqueidad, con el vaso lleno, antes de ' +
        'ejecutar los acabados.** Se llena, se marca el nivel, se espera setenta y ' +
        'dos horas y se mide. Hay que descontar la evaporación —con un recipiente ' +
        'testigo flotando, lleno de la misma agua— porque si no se descuenta, la ' +
        'evaporación normal se confunde con una fuga y al revés. Y ya lo vimos: la ' +
        'NSR-10 exige que ese ensayo **esté en los planos**.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Dos detalles que se olvidan y cuestan' },
    {
      tipo: 'parrafo',
      texto:
        '**El vaciado.** Una piscina de terraza hay que vaciarla alguna vez, y ' +
        'treinta o cuarenta metros cúbicos no caben en la bajante de aguas lluvias ' +
        'de una terraza, que se dimensionó para la lluvia que cae sobre esos ' +
        'metros cuadrados. Hace falta un punto de desagüe propio, con capacidad ' +
        'suficiente y con destino legal: la Resolución 929 califica el agua de ' +
        'piscina como **vertimiento no doméstico**, porque lleva cloro, alguicidas ' +
        'y reguladores de pH, y remite a la normativa ambiental para su manejo.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Las barandas y el vidrio.** La carga de diseño de una baranda no está ' +
        'donde casi todo el mundo la busca: no está en el Título K sino en el ' +
        'Título B, que fija un empuje horizontal de **1,00 kN/m** en general y de ' +
        '**0,40 kN/m en vivienda unifamiliar**, aplicado en la parte superior. Y ' +
        'el Título K, que sí regula el material, exige **vidrio de seguridad** en ' +
        'los espacios donde la actividad genera alto riesgo, nombrando ' +
        'expresamente las piscinas, las áreas húmedas y los spas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no encontré, y lo digo' },
    {
      tipo: 'parrafo',
      texto:
        'Tres declaraciones, porque un artículo que dice lo que no pudo confirmar ' +
        'vale más que uno que rellena:',
    },
    {
      tipo: 'lista',
      items: [
        '**El Título J de la NSR-10, de protección contra incendios, no menciona la piscina ni una vez.** Tampoco el Título H, de estudios geotécnicos. La conexión de la piscina con el Título H llega por el Título B, no por el propio H.',
        '**Ninguna norma colombiana fija una carga específica «de piscina».** Lo que hay es la densidad del agua, la obligación de computarla como carga muerta y el Capítulo C.23. La carga sale de la cuenta, no de una tabla.',
        '**Minvivienda no publica hoy los Títulos de la NSR-10 como PDF descargable en su sitio.** Los ejemplares oficiales que consulté —con portada de la Comisión Asesora Permanente— están alojados en otro dominio del Estado. Los decretos modificatorios sí vienen de fuentes oficiales. Lo anoto porque quien quiera verificar esto por su cuenta se va a encontrar con lo mismo.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuando la losa no da' },
    {
      tipo: 'parrafo',
      texto:
        'No siempre la respuesta es reforzar. Hay cuatro salidas y conviene ' +
        'mirarlas en este orden, porque están puestas de menor a mayor coste:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Bajar la lámina de agua.** La carga es proporcional a la profundidad. Una piscina de 0,60 m para refrescarse pesa la mitad que una de 1,20 m y sigue siendo una piscina.',
        '**Cambiar la piscina por un jacuzzi**, que concentra menos agua en total aunque concentre más por metro cuadrado. Lo que eso implica está en [jacuzzi de obra o portátil](/blog/jacuzzi-de-obra-o-portatil).',
        '**Estructura propia.** Llevar el peso a columnas nuevas que bajen hasta la cimentación en vez de apoyarlo en la losa. Es caro y suele ser invasivo para los pisos de abajo, pero resuelve el problema de raíz.',
        '**Reforzar la estructura existente**, que es la opción que más se propone y casi nunca la más barata, porque el refuerzo rara vez se queda en la losa: sube por las columnas y baja a la cimentación. El criterio general está en [reforzamiento estructural y NSR-10](/blog/reforzamiento-estructural-y-nsr-10).',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La secuencia que ahorra dinero, en una línea: **evaluación estructural ' +
        'primero, autorización de la asamblea después, licencia después, y diseño ' +
        'de la piscina al final.** Casi todo el mundo la hace exactamente al ' +
        'revés, empezando por el render.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'De dónde sale esto' },
    {
      tipo: 'parrafo',
      texto:
        'Quien dirige esta línea en el estudio trae quince años diseñando sistemas ' +
        'hidráulicos y cuerpos de agua —piscinas, spas y cascadas con sus redes, ' +
        'plantas de filtración y cuartos de máquinas—, y el estudio hace ' +
        'diagnóstico de edificaciones, que es la otra mitad de este artículo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las dos mitades se juntan siempre en el mismo sitio. La piscina de ' +
        'terraza que da problemas no suele ser la que se cayó: es la que gotea ' +
        'sobre el apartamento de abajo, cinco años después, cuando ya nadie tiene ' +
        'los planos y el constructor no existe. Todo lo que evita eso se decide ' +
        'antes de la primera vaciada de concreto.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'estructura', 'propiedad-horizontal'],
  fuentes: [
    {
      titulo: 'NSR-10, Título B — Cargas, capítulos B.3, B.4 y B.5',
      editor: 'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'NSR-10, Título C — Concreto estructural, capítulos C.4 y C.23',
      editor: 'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/3titulo-c-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'NSR-10, Título A — Requisitos generales, capítulos A.8 y A.10',
      editor: 'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/titulo-a-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'NSR-10, Título K — Requisitos complementarios',
      editor: 'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/11titulo-k-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'Decreto 092 de 2011, que sustituye la tabla B.4.2.1-2 de la NSR-10',
      editor: 'Presidencia de la República de Colombia',
      url: 'https://normograma.mincultura.gov.co/mincultura/compilacion/docs/decreto_0092_2011.htm',
      fecha: '2011-01-17',
    },
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo:
        'Resolución 929 de 2026, criterios técnicos constructivos y de seguridad para piscinas y estructuras similares',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0929-de-2026.pdf',
      fecha: '2026-05-12',
    },
    {
      titulo: 'Ley 675 de 2001, régimen de propiedad horizontal',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0675_2001.html',
      fecha: '2001-08-03',
    },
  ],
}
