import type { Post } from '@/lib/types'
import { ORIGENES } from './diagramas/humedad'

/**
 * Segundo de los dos artículos de humedad, y el que lleva el eje de la pareja
 * en el título: **casi toda reparación de humedad falla porque se repara el
 * síntoma sin diagnosticar el origen.**
 *
 * Lo que lo separa de lo que se publica del tema no son los cinco orígenes
 * —esos están en cualquier parte— sino **cómo se distinguen entre sí en obra**,
 * que es lo que nadie escribe. De ahí la tabla de diagnóstico diferencial y la
 * prueba de la lámina, que es el corte que decide entre condensación y agua que
 * llega desde fuera y no cuesta nada.
 *
 * Mismas restricciones que el artículo de cubierta: **ni un número de NTC**, y
 * nada afirmado sobre los títulos de la norma sismo resistente. Todo lo técnico
 * va rotulado como criterio del estudio.
 *
 * Trae además un hecho verificado que sostiene la sección de condensación y que
 * no había visto publicado: **la resolución colombiana de construcción
 * sostenible no exige nada sobre condensación intersticial ni sobre barrera de
 * vapor.** Las dos expresiones no aparecen en su anexo técnico. Es decir: la
 * condensación en Colombia no está regulada, y conviene decirlo.
 */
export const post: Post = {
  slug: 'humedad-en-muros-origen-antes-de-reparar',
  titulo: 'Humedad en muros: distinguir el origen antes de reparar',
  pilar: 'patologias',
  fecha: '2026-05-05',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Cinco humedades distintas producen manchas parecidas y se reparan de ' +
    'cinco maneras distintas. Cómo se distinguen en obra, con las pruebas que ' +
    'lo deciden — y por qué la condensación no se arregla impermeabilizando.',
  metaDescripcion:
    'Cómo distinguir capilaridad, filtración, condensación y fuga en un muro ' +
    'húmedo, y por qué impermeabilizar suele ser la reparación equivocada.',
  puerta: 'diagnostico-de-edificaciones',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Una mancha de humedad en un muro se parece a otra mancha de humedad ' +
        'en un muro. Ese parecido es el problema entero: hay cinco orígenes ' +
        'distintos, se reparan de cinco maneras distintas, y la reparación ' +
        'correcta para uno es dinero perdido en los otros cuatro.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La reparación por defecto —raspar, aplicar un producto ' +
        'impermeabilizante, estucar y pintar— sirve en uno de los cinco casos. ' +
        'En dos de ellos no hace nada. Y en los otros dos empeora el problema, ' +
        'porque sella el muro y encierra el agua adentro.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esto es cómo se distinguen, que es lo único que hay que saber antes ' +
        'de contratar nada.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los cinco orígenes' },
    {
      tipo: 'diagrama',
      svg: ORIGENES,
      titulo: 'Por dónde entra el agua, en sección',
      pie:
        'Esquemas no a escala. Lo que distingue un origen de otro no es el ' +
        'aspecto de la mancha, sino el camino que hace el agua.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Vale la pena mirar el dibujo dos veces, porque en él está toda la ' +
        'tesis: **los cinco se ven parecidos desde el cuarto y son cinco ' +
        'recorridos completamente distintos.** Uno sube, uno entra, dos se ' +
        'forman ahí mismo sin que haya entrado nada, y uno sale de un tubo.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Origen', 'Dónde aparece', 'Forma', 'Cuándo empeora'],
      filas: [
        [
          '**Capilaridad ascendente**',
          'En la base del muro, desde el piso hacia arriba',
          'Franja horizontal continua, con **borde superior nítido**. Sales blancas al secarse',
          'Constante. Peor en época seca, cuando el agua se evapora y deja la sal',
        ],
        [
          '**Filtración por la envolvente**',
          'A la altura del defecto: junto a una ventana, un balcón, una fisura de fachada',
          'Mancha con **centro más oscuro** que se difumina hacia afuera',
          'Con la lluvia, sobre todo si viene con viento. Se seca después',
        ],
        [
          '**Condensación superficial**',
          'Esquinas, techos, detrás de muebles, muros de fachada por dentro',
          'Extendida y **uniforme**, sin centro. Casi siempre con **moho negro**',
          'De noche y de madrugada. En temporada fría. Con la casa cerrada',
        ],
        [
          '**Condensación intersticial**',
          'Dentro del espesor del muro. Al principio **no se ve nada**',
          'Cuando asoma, es difusa y amplia. El aislante está mojado',
          'Igual que la superficial, pero tarda meses o años en manifestarse',
        ],
        [
          '**Fuga de red**',
          'Cerca de un baño, una cocina, una bajante o un muro con tubería',
          'Mancha **localizada**, de contorno más definido',
          'No cambia. **Está húmeda todo el año**, llueva o no',
        ],
      ],
      nota:
        'Criterio del estudio, a partir de obra propia. No existe fuente ' +
        'pública colombiana que tabule estos signos: es experiencia ordenada, ' +
        'no norma.',
    },
    {
      tipo: 'nota',
      texto:
        'Y la advertencia que hay que tener presente todo el tiempo: **es muy ' +
        'frecuente que haya dos a la vez.** Una filtración que moja un muro lo ' +
        'enfría, y un muro frío condensa. Reparar la filtración y no ventilar ' +
        'deja la mitad del problema. Encontrar un origen no autoriza a dejar ' +
        'de buscar.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Capilaridad: la que sube' },
    {
      tipo: 'parrafo',
      texto:
        'El agua del suelo asciende por los poros del material, en contra de ' +
        'la gravedad, hasta que la altura alcanzada equilibra lo que se ' +
        'evapora por la superficie. Por eso se detiene siempre a una altura ' +
        'parecida en todo el muro, y por eso el borde superior es tan ' +
        'característico: es una línea, no un degradado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La firma que la delata no es el agua, es la **sal**. El agua del ' +
        'suelo trae sales disueltas; al evaporarse en la superficie, la sal se ' +
        'queda y cristaliza. Eso produce el polvo blanco, el estuco que se ' +
        'abomba y se desprende en placas, y la pintura que se levanta siempre ' +
        'en la misma franja por más veces que se repinte.',
    },
    {
      tipo: 'nota',
      texto:
        'Aquí está el error más caro de todo el artículo: **impermeabilizar ' +
        'por dentro un muro con capilaridad lo empeora.** El agua sigue ' +
        'subiendo —el sello no la detiene, solo le tapa la salida— y busca ' +
        'otra: sube más alto, sale por el otro lado, o se acumula detrás del ' +
        'sello hasta reventarlo. La cristalización de la sal debajo de una ' +
        'capa rígida es lo que hace saltar el revoque en placas enteras.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La reparación de fondo pasa por cortar el ascenso —una barrera ' +
        'horizontal en la base del muro—, o por drenar y ventilar el pie del ' +
        'muro, o las dos. Es obra, no es un producto. Y antes hay que resolver ' +
        'de dónde viene el agua del suelo, que muchas veces es un jardín ' +
        'regado contra la fachada, un andén sin pendiente o una bajante rota ' +
        'que descarga al pie del muro.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Filtración: la que entra' },
    {
      tipo: 'parrafo',
      texto:
        'Es la única de las cinco que se correlaciona con la lluvia, y esa ' +
        'correlación es el diagnóstico. Aparece o se intensifica cuando ' +
        'llueve, y se seca cuando para.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos matices que despistan. El primero: la lluvia que filtra no es la ' +
        'fuerte, es **la que viene con viento**, porque el viento empuja el ' +
        'agua contra la fachada y la mete por defectos que el agua cayendo ' +
        'vertical nunca encontraría. Una fachada puede aguantar años y filtrar ' +
        'con el primer aguacero de costado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El segundo: **el punto de entrada casi nunca está encima de la ' +
        'mancha.** El agua entra por una fisura, recorre el interior del muro ' +
        'o la cámara y sale donde encuentra salida. Los puntos por donde entra ' +
        'son casi siempre los mismos: encuentros de la ventana con el muro, ' +
        'alféizares sin goterón o con pendiente hacia adentro, fisuras de ' +
        'fachada, juntas de dilatación, y los anclajes de barandas y ' +
        'marquesinas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si el agua viene de arriba y no de la fachada, el problema es otro y ' +
        'está tratado aparte en ' +
        '[filtraciones en cubierta](/blog/filtraciones-en-cubierta).',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Condensación superficial: la que se forma ahí mismo' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la que más se repara mal, porque no entra agua de ninguna ' +
        'parte. **El agua ya estaba en el aire del cuarto.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'El aire caliente admite más vapor que el aire frío. Cuando ese aire ' +
        'toca una superficie lo bastante fría, el vapor que ya no cabe se ' +
        'vuelve líquido sobre ella. Es lo que le pasa a un vaso de agua fría ' +
        'en un día caluroso, y es exactamente lo que le pasa a la cara interior ' +
        'de un muro de fachada en una madrugada fría.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De ahí salen todos sus signos. Aparece en las superficies más frías ' +
        '—esquinas exteriores, encuentro de muro y losa, el muro detrás del ' +
        'armario— y aparece de noche. Se distribuye uniforme, sin un centro. Y ' +
        'casi siempre trae **moho negro**, que es su firma más segura: el moho ' +
        'necesita humedad superficial sostenida, no agua líquida corriendo.',
    },
    {
      tipo: 'parrafo',
      texto: 'Tres cosas la producen, y ninguna se arregla con un producto:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Cuánto vapor se produce dentro.** Cocinar, ducharse, secar ropa adentro, un tanque o un acuario abiertos, y sobre todo cuántas personas viven ahí. Una persona en reposo aporta vapor de forma continua; una familia en un apartamento cerrado, mucho.',
        '**Cuánto se ventila.** El vapor solo sale si se cambia el aire. La ventana sellada, el baño sin extractor y el hábito muy razonable de cerrar todo por seguridad o por frío son la causa más común de todas.',
        '**Qué tan fría está la superficie.** Un **puente térmico** —una viga o una columna de concreto que atraviesa la envolvente, un dintel, el encuentro de losa y fachada— está siempre más frío que el muro que lo rodea, y condensa primero. Por eso el moho suele dibujar la estructura del edificio.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        '**Por qué impermeabilizar no la arregla, dicho sin rodeos:** el ' +
        'impermeabilizante impide que el agua *entre* por el muro, y aquí no ' +
        'está entrando nada por el muro. El agua se está formando en la cara ' +
        'que usted ve. Sellar esa cara no cambia ni la temperatura de la ' +
        'superficie ni la cantidad de vapor del aire, que son las dos únicas ' +
        'variables del fenómeno. La mancha vuelve, y a veces vuelve peor, ' +
        'porque el sello impide que el muro se seque hacia adentro entre un ' +
        'episodio y el siguiente.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí funciona actúa sobre las tres causas: **ventilar** —abrir ' +
        'de verdad, extractor en baño y cocina, no secar ropa adentro—, ' +
        '**calentar o aislar la superficie fría** para que deje de ser el ' +
        'punto donde el vapor se condensa, y **separar los muebles del muro** ' +
        'para que el aire circule. Lo primero es gratis y resuelve buena parte ' +
        'de los casos.',
    },
    {
      tipo: 'nota',
      texto:
        'Un criterio geográfico, dicho como criterio y no como dato medido: ' +
        '**en el altiplano frío la condensación es un problema mucho más ' +
        'frecuente de lo que se cree, y en clima cálido húmedo la humedad ' +
        'suele tener otro origen.** No publico cifras de humedad relativa por ' +
        'ciudad porque no encontré una fuente oficial que pueda citar con ' +
        'fecha, y prefiero decirlo a inventarlas.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Condensación intersticial: la que no se ve' },
    {
      tipo: 'parrafo',
      texto:
        'Es la misma física, con una diferencia que la vuelve peligrosa: ocurre ' +
        '**dentro del espesor del muro**, no en su cara. El vapor atraviesa el ' +
        'material, encuentra un plano lo bastante frío en el interior de la ' +
        'sección, y ahí se condensa.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Al principio no hay ninguna mancha. El agua se acumula donde nadie la ' +
        've, y hace tres cosas: **moja el aislante**, que al mojarse deja de ' +
        'aislar y enfría más la sección, con lo que condensa más todavía; ' +
        '**moja los elementos metálicos** que estén ahí dentro; y degrada el ' +
        'material desde adentro. Cuando por fin aparece algo visible, ya lleva ' +
        'mucho tiempo trabajando.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La sospecha se levanta casi siempre por eliminación: humedad amplia y ' +
        'difusa, sin correlación con la lluvia, sin franja de capilaridad, sin ' +
        'fuga, en un muro con aislante o con cámara. Y se confirma abriendo, ' +
        'que es la parte incómoda: no hay forma no destructiva de ver dentro ' +
        'de un muro con certeza.',
    },
    {
      tipo: 'nota',
      texto:
        'Aquí conviene decir algo que sorprende, y que sí está verificado. La ' +
        'norma colombiana de construcción sostenible —la que fija ahorros de ' +
        'agua y energía en edificaciones nuevas— **no exige nada sobre ' +
        'condensación intersticial ni sobre barrera de vapor.** Ninguna de las ' +
        'dos expresiones aparece en su anexo técnico. Y no encontré ninguna ' +
        'otra norma colombiana que lo regule.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La consecuencia es la que hay que asumir: **en Colombia, la ' +
        'condensación dentro del muro no está regulada.** No hay un valor ' +
        'límite que exigir ni un requisito que reclamar. Lo que se haga contra ' +
        'ella es criterio profesional del que diseña, y si a usted le importa, ' +
        'tiene que pedirlo por contrato — porque nadie está obligado a ' +
        'resolverlo.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Fuga: la que no depende del clima' },
    {
      tipo: 'parrafo',
      texto:
        'Es la más fácil de descartar y la que más veces se descarta tarde. El ' +
        'signo es de una simplicidad total: **está húmeda todo el año**, llueva ' +
        'o no, haga frío o calor. No tiene temporada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Puede ser de la red de agua potable, que está a presión y suele dar ' +
        'una mancha que crece de forma constante, o de la red sanitaria, que ' +
        'no está a presión y aparece de forma intermitente, ligada al uso del ' +
        'aparato de arriba. Un olor persistente inclina bastante la balanza ' +
        'hacia la segunda.',
    },
    {
      tipo: 'nota',
      texto:
        'La prueba más barata que existe en patología: **cierre el registro ' +
        'general, no use agua durante unas horas y mire el medidor.** Si sigue ' +
        'girando, hay fuga en la red de presión. Cuesta cero y descarta o ' +
        'confirma un origen entero. Si no gira, siga con la red sanitaria, que ' +
        'ya exige llenar y vaciar aparatos por separado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las pruebas que deciden' },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior se puede resolver, en la gran mayoría de los casos, ' +
        'sin instrumentación. Estas son las pruebas por orden de costo, y la ' +
        'primera es la que más discusiones cierra.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**La prueba de la lámina.** Pegue un plástico transparente al muro, sellando bien los cuatro bordes con cinta, sobre la zona húmeda. Espere de uno a dos días y mire de qué lado apareció el agua. **Si se condensó en la cara del plástico que da al cuarto, es condensación.** Si el agua está debajo del plástico, entre el plástico y el muro, viene desde dentro del muro: es capilaridad, filtración o fuga. Es el corte más limpio del diagnóstico y no cuesta nada.',
        '**La prueba del calendario.** Anote durante dos semanas cuándo empeora: con lluvia, de madrugada, después de ducharse, siempre igual. La correlación con la lluvia señala filtración; con la noche y el frío, condensación; con nada, fuga.',
        '**La prueba del medidor de agua.** La del registro cerrado. Descarta la fuga de presión en una tarde.',
        '**La altura y el borde.** Mida hasta dónde llega la humedad y mire si el borde superior es una línea o un degradado. Una línea horizontal nítida y a altura constante es capilaridad, casi sin discusión.',
        '**Buscar la sal.** Raspe suavemente el polvo blanco. Las eflorescencias acompañan al agua que viene del suelo o del terreno, no a la condensación.',
        '**Higrómetro de superficie y de ambiente**, si hace falta afinar. Miden humedad del material y del aire, y permiten comparar el mismo muro en varios puntos y a distintas horas. Ayudan a acotar; por sí solos no dicen el origen.',
        '**Termografía**, para edificios grandes o cuando hay que localizar puentes térmicos o el trazado de una fuga. Ve diferencias de temperatura, no agua, y hay que saber interpretarla.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Una regla de oficio que evita meses perdidos: **no repare mientras no ' +
        'pueda explicar el camino completo del agua**, desde dónde sale hasta ' +
        'dónde aparece. Si el relato tiene un hueco, la reparación va a tener ' +
        'el mismo hueco.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo la humedad deja de ser un problema de acabados' },
    {
      tipo: 'parrafo',
      texto:
        'La humedad sostenida no se queda en la pintura. En concreto reforzado ' +
        'termina llegando al refuerzo, y el acero al corroerse ocupa más ' +
        'volumen que el que tenía, así que revienta el concreto que lo ' +
        'recubre desde adentro. Ese daño tiene una firma reconocible: una ' +
        'fisura larga y recta, paralela a la varilla, muchas veces con una ' +
        'mancha de óxido. Está descrita, con las otras cuatro, en ' +
        '[fisuras en muros](/blog/fisuras-en-muros).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ese es el punto en el que la conversación deja de ser sobre manchas. ' +
        'Si además hay desprendimientos, refuerzo a la vista, deformaciones o ' +
        'humedad crónica que afecta a varios apartamentos, lo que hace falta ' +
        'ya no es un albañil sino un diagnóstico formal: ' +
        '[cuándo un edificio necesita un estudio patológico](/blog/cuando-un-edificio-necesita-un-estudio-patologico) ' +
        'trata exactamente esa frontera.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién responde' },
    {
      tipo: 'parrafo',
      texto:
        'Dos frentes, y conviene no mezclarlos.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Si el edificio es nuevo**, la discusión es con el constructor, y ' +
        'tiene un matiz que casi nadie conoce: ninguna de las tres fuentes de ' +
        'garantía —el Código Civil, el estatuto del consumidor y la ley de ' +
        'vivienda segura— menciona la palabra humedad ni la palabra ' +
        'filtración. El Código Civil habla de que el edificio perezca o ' +
        'amenace ruina; el estatuto del consumidor separa la estabilidad de la ' +
        'obra, a diez años, de los acabados, a uno. La tabla completa, con lo ' +
        'que se puede y no se puede sostener, está en ' +
        '[filtraciones en cubierta](/blog/filtraciones-en-cubierta).',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Si es propiedad horizontal**, lo primero es saber de quién es el ' +
        'muro. El artículo 3 de la Ley 675 de 2001 hace bienes comunes ' +
        'esenciales, entre otros, «las fachadas y los techos o losas que ' +
        'sirven de cubiertas a cualquier nivel». Un muro de fachada que ' +
        'condensa o filtra **es de la copropiedad, aunque la mancha esté ' +
        'dentro de su apartamento**. Un tabique interior es suyo.',
    },
    {
      tipo: 'nota',
      texto:
        'El caso que más se pelea es el intermedio: **la humedad que baja del ' +
        'apartamento de arriba.** Ahí no hay regla general, hay un ' +
        'diagnóstico. Si sale de la red privada del vecino, es del vecino. Si ' +
        'sale de una bajante o de un elemento común, es de la copropiedad. Si ' +
        'sale del piso de una terraza de uso exclusivo, la cosa se reparte ' +
        'según el artículo 23, y eso está explicado en ' +
        '[filtraciones en cubierta](/blog/filtraciones-en-cubierta). Discutir ' +
        'sin diagnóstico es discutir sin datos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Qué autoriza la asamblea y qué no, y con qué mayoría, está en ' +
        '[reformar en propiedad horizontal](/blog/reformar-en-propiedad-horizontal).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué no hacer' },
    {
      tipo: 'lista',
      items: [
        '**Pintar encima.** No detiene nada, borra la evidencia de hasta dónde llegaba y hace imposible saber si creció.',
        '**Impermeabilizar por dentro un muro con capilaridad.** El agua sigue subiendo y sale más arriba, o revienta el revoque desde atrás.',
        '**Impermeabilizar un muro que condensa.** El agua no viene del muro. Es la reparación más vendida y la más inútil de la lista.',
        '**Usar pintura antihumedad como diagnóstico.** Es un acabado, no un remedio. Puede ser razonable después de resolver la causa; nunca en lugar de resolverla.',
        '**Sellar las ventanas y las rejillas de ventilación para que no entre frío.** Es la forma más rápida de convertir una casa en una cámara de condensación.',
        '**Reparar el primer origen que aparece y dar el caso por cerrado.** Es muy común que haya dos.',
        '**Cerrar el muro sin secarlo.** Un aislante mojado sigue mojado, y un muro cerrado en falso vuelve a manifestarse meses después, ya con daño.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'En resumen' },
    {
      tipo: 'parrafo',
      texto:
        'Antes de contratar a nadie, resuelva tres preguntas: ¿empeora con la ' +
        'lluvia, con la noche, o con nada? ¿El borde de arriba de la mancha es ' +
        'una línea nítida o un degradado? ¿Y de qué lado del plástico aparece ' +
        'el agua? Con esas tres respuestas se separa la mayoría de los casos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con lluvia y a la altura de un defecto, es filtración. Franja baja ' +
        'con borde nítido y sales, capilaridad. De noche, uniforme, en ' +
        'esquinas y con moho negro, condensación: ventilación y temperatura, ' +
        'no impermeabilizante. Sin relación con nada y todo el año, busque una ' +
        'fuga y empiece por el medidor.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y si no logra explicar el camino del agua de principio a fin, no ' +
        'repare todavía. Cada reparación a ciegas borra evidencia y hace más ' +
        'caro el diagnóstico siguiente.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'administrador', 'patologia'],
  fuentes: [
    {
      titulo:
        'Resolución 0549 de 2015, parámetros de construcción sostenible y guía para el ahorro de agua y energía en edificaciones, con su anexo técnico',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/normativa/resolucion-0549-2015',
      fecha: '2015-07-10',
    },
    {
      titulo: 'Ley 675 de 2001, régimen de propiedad horizontal, artículos 3, 22 y 23',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0675_2001.html',
      fecha: '2001-08-03',
    },
    {
      titulo:
        'Ley 1480 de 2011, estatuto del consumidor, artículo 8: garantía legal de bienes inmuebles',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1480_2011.html',
      fecha: '2011-10-12',
    },
    {
      titulo:
        'Código Civil colombiano, artículo 2060, sobre construcción de edificios por precio único',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_civil_pr063.html',
      fecha: null,
    },
  ],
}
