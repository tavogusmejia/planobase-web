import type { Post } from '@/lib/types'

/**
 * Perenne del pilar de proceso. Es oficio puro: no depende de norma vigente ni
 * de cifras, así que no envejece y no necesitó investigación externa.
 *
 * Sirve a la conversión de una forma indirecta pero real: un cliente que sabe
 * leer un plano revisa mejor, pide cambios en el momento correcto y discute
 * menos en obra.
 *
 * Fechado en noviembre de 2023.
 */
export const post: Post = {
  slug: 'como-leer-un-plano',
  titulo: 'Cómo leer un plano arquitectónico',
  pilar: 'proceso',
  fecha: '2023-11-14',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Le entregaron unos planos y no sabe por dónde empezar. Qué significa la ' +
    'escala, dónde están las medidas que importan, qué es esa línea gruesa ' +
    'que cruza la planta, y las seis cosas que conviene revisar antes de ' +
    'aprobar nada.',
  metaDescripcion:
    'Cómo leer un plano arquitectónico: escala, cotas, ejes, cortes y ' +
    'convenciones, explicados para quien no es técnico.',
  puerta: 'diseno-a-medida',
  etiquetas: ['nacional', 'propietario', 'contrato'],
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Le entregaron un juego de planos y le pidieron que los apruebe. Usted ' +
        'los mira, reconoce que hay una casa ahí dentro, y no sabe qué se ' +
        'supone que debe revisar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es una situación incómoda y muy común. Y vale la pena resolverla, ' +
        'porque **aprobar un plano sin entenderlo es la forma más cara de ' +
        'confiar**: lo que no se corrige ahí se corrige en obra, y ahí cuesta ' +
        'cien veces más.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Empiece por el rótulo' },
    {
      tipo: 'parrafo',
      texto:
        'Es el recuadro de la esquina inferior derecha, y casi nadie lo lee. ' +
        'Contiene lo que le dice si está mirando lo que cree estar mirando:',
    },
    {
      tipo: 'lista',
      items: [
        '**Qué plano es.** Planta primer piso, corte A-A, fachada norte.',
        '**La escala.** Determina cómo se lee todo lo demás.',
        '**La fecha y la versión.** Si hay dos juegos de planos en la mesa, esto decide cuál manda.',
        '**Quién lo firma**, con su matrícula profesional. Es quien responde legalmente por ese plano.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Si va a revisar planos, **imprima solo la versión más reciente y bote ' +
        'las anteriores**. Discutir sobre dos versiones distintas es la fuente ' +
        'número uno de malentendidos en obra.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La escala: qué significa 1:50' },
    {
      tipo: 'parrafo',
      texto:
        'Significa que **un centímetro en el papel son cincuenta en la ' +
        'realidad**. Es decir, medio metro.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Escala', '1 cm en el papel es…', 'Para qué se usa'],
      filas: [
        ['1:100', '1 metro', 'Ver el conjunto. Plantas generales'],
        ['1:50', '50 cm', 'La escala de trabajo. Plantas y cortes de obra'],
        ['1:25', '25 cm', 'Baños, cocinas, escaleras'],
        ['1:10 y 1:5', '10 y 5 cm', 'Detalles constructivos: cómo se encuentran dos materiales'],
      ],
      nota:
        'Cuanto más pequeño el segundo número, más cerca está mirando. Un ' +
        'detalle a 1:5 no es un plano «más importante»: es la misma obra vista ' +
        'con lupa.',
    },
    {
      tipo: 'nota',
      texto:
        '**No mida con regla sobre una impresión.** Si el plano se imprimió en ' +
        'otro tamaño de papel, la escala ya no es la que dice el rótulo. Las ' +
        'medidas se leen en las cotas, no se miden.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las cotas: dónde están las medidas' },
    {
      tipo: 'parrafo',
      texto:
        'Son las líneas finas que corren por fuera del dibujo, con un número ' +
        'encima. **Ese número es la medida real**, y es la única fuente de ' +
        'verdad del plano.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Vienen en cadenas, y cada cadena mide algo distinto: la más externa ' +
        'suele dar el total del lote o de la construcción; la siguiente, los ' +
        'ejes; la más interna, cada vano y cada muro.',
    },
    {
      tipo: 'nota',
      texto:
        'Truco de revisión que funciona siempre: **sume las cotas parciales y ' +
        'compare con la total.** Si no dan lo mismo, hay un error en el plano. ' +
        'Es la verificación más simple y la que más errores encuentra.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los ejes: el esqueleto invisible' },
    {
      tipo: 'parrafo',
      texto:
        'Son las líneas de trazo y punto que cruzan todo el plano, con una ' +
        'letra o un número dentro de un círculo en la punta. Letras en un ' +
        'sentido, números en el otro.',
    },
    {
      tipo: 'parrafo',
      texto:
        'No son decorativos: **es el sistema de coordenadas del edificio**. ' +
        'Cuando en obra alguien dice «la columna del eje B con el 3», está ' +
        'señalando un punto exacto sin necesidad de medir nada. Y es lo que ' +
        'permite que la planta arquitectónica y la estructural coincidan.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La línea gruesa que cruza la planta' },
    {
      tipo: 'parrafo',
      texto:
        'Es la **línea de corte**, y suele ser lo que más confunde. Tiene una ' +
        'flecha en cada extremo y una letra: A-A, B-B.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Marca por dónde se «rebanó» la casa para dibujar el corte, y **la ' +
        'flecha indica hacia dónde se mira**. El corte A-A es esa rebanada, ' +
        'vista en la dirección de las flechas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y ahí está la relación entre los dos dibujos, que es lo que hay que ' +
        'entender: **la planta le dice cómo se mueve por la casa; el corte le ' +
        'dice qué altura tiene y cómo se apoya una cosa sobre otra.** Escaleras, ' +
        'dobles alturas, desniveles y pendientes de cubierta solo se entienden ' +
        'en corte.',
    },
    {
      tipo: 'nota',
      texto:
        'Una planta también es un corte: es la casa rebanada horizontalmente, ' +
        'más o menos a un metro del piso, y vista desde arriba. Por eso las ' +
        'ventanas aparecen y los muros se ven rellenos.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las convenciones que conviene reconocer' },
    {
      tipo: 'lista',
      items: [
        '**Muro relleno o achurado:** está cortado por el plano. Es material macizo.',
        '**Línea punteada:** algo que está por encima del corte. Una viga, un voladizo, un altillo.',
        '**Arco de circunferencia en una puerta:** el barrido, es decir hacia dónde abre. Vale la pena mirarlo: una puerta que abre contra un mueble es un error barato de corregir en el plano.',
        '**Triángulo o flecha con un número:** nivel. `+0.00` es el piso de referencia; `+2.50` es dos metros y medio más arriba.',
        '**Flecha con «N»:** el norte. Decide de dónde entra el sol, y en Colombia eso decide cuáles habitaciones se calientan.',
        '**Muros en tres tonos** en una remodelación: lo que se queda, lo que se demuele y lo que se construye. Siempre hay una leyenda que lo explica.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Planta arquitectónica y planta estructural no son lo mismo' },
    {
      tipo: 'parrafo',
      texto:
        'Le van a entregar juegos distintos, dibujados sobre los mismos ejes ' +
        'pero con información diferente:',
    },
    {
      tipo: 'lista',
      items: [
        '**Arquitectónica:** espacios, muros, puertas, ventanas, acabados. Qué se ve y cómo se usa.',
        '**Estructural:** columnas, vigas, losas, cimentación, refuerzo. Cómo se para. La firma un ingeniero civil.',
        '**Hidrosanitaria, eléctrica, de gas:** por dónde van las redes.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Coordinarlos es trabajo del arquitecto, y es donde aparecen los ' +
        'conflictos clásicos: una columna en mitad de un baño, un bajante que ' +
        'atraviesa una sala, una viga que baja justo donde iba una ventana.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Seis cosas que revisar antes de aprobar' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Camine la casa con el dedo.** Entre por la puerta, vaya a la cocina, al baño, a su cuarto. Los recorridos incómodos se sienten así antes que en obra.',
        '**Mire los tamaños contra algo que conozca.** Su cuarto actual mide tanto. ¿El nuevo es más grande o más chico? Los números engañan; las comparaciones no.',
        '**Verifique las puertas.** Hacia dónde abren y contra qué.',
        '**Busque el norte** y pregunte qué habitaciones reciben sol de tarde.',
        '**Cuente los tomacorrientes y los puntos de luz** en el plano eléctrico. Es lo más barato de cambiar ahora y lo más molesto después.',
        '**Sume las cotas.** Si no cuadran, algo está mal.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una que no es de revisión sino de método: **pregunte lo que no ' +
        'entienda, aunque parezca obvio.** Un arquitecto que se incomoda ' +
        'explicando su propio plano está diciendo algo importante sobre cómo va ' +
        'a ser el resto del proceso.',
    },
  ],
  fuentes: [],
}
