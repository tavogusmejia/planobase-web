import type { Post } from '@/lib/types'
import { CUATRO_CUBIERTAS } from './diagramas/cubiertas'

/**
 * El comparativo de cubiertas, y el segundo bloqueo que esta tanda levanta.
 *
 * `docs/PLAN-BLOG.md §6 ter` declaró que **lo que dicen los Títulos B, J y K de
 * la NSR-10 sobre cargas de agua empozada e impermeabilización no se pudo
 * leer**: «el anexo técnico supera el límite de descarga». Por eso
 * `filtraciones-en-cubierta` dice, dentro de su propio texto, que sobre esos
 * títulos no se afirma nada.
 *
 * **El Título B sí se pudo leer**, en el PDF que publica el IDRD, y de ahí sale
 * todo el esqueleto verificable de este artículo:
 *
 * 1. **Tabla B.3.4.1-4, cargas muertas de cubierta.** La teja de arcilla con su
 *    mortero pesa 80 kgf/m² y el tablero metálico calibre 20 pesa 8. Una
 *    relación de diez a uno, publicada, que decide la estructura antes que
 *    cualquier consideración estética. Es el eje del artículo.
 * 2. **Tabla B.4.2.1-2, cargas vivas en cubiertas.** Una cubierta usada como
 *    jardín lleva **500 kgf/m²**, catorce veces la de una cubierta inclinada
 *    liviana. Es el dato que casi nunca acompaña a la conversación sobre
 *    techos verdes.
 * 3. **B.4.8.3, carga de granizo.** Cien kgf/m² por encima de 2.000 m s. n. m.,
 *    reducibles a la mitad si la cubierta pasa de 15° de inclinación. Es una
 *    consecuencia de diseño directa y conecta con el artículo de clima sin
 *    repetirlo.
 * 4. **B.4.8.1, literal (a).** «Toda cubierta debe disponer de sistema auxiliar
 *    de evacuación del exceso de agua». Es una obligación explícita del
 *    reglamento que ninguna cotización incluye, y complementa el artículo de
 *    filtraciones exactamente donde aquel declaraba que no tenía norma que
 *    citar.
 *
 * Dos hallazgos más, de otra naturaleza:
 *
 * - **La tabla de cargas muertas todavía lista el asbesto-cemento**, material
 *   cuyo uso está prohibido en Colombia desde el 1 de enero de 2021 por la Ley
 *   1968 de 2019. No es un error del reglamento —la tabla es de 2010— pero sí
 *   es una trampa para quien la lee hoy.
 * - **La Ley 2173 de 2021 no menciona los techos verdes.** Circula como «la ley
 *   que los vuelve obligatorios». Se buscó la palabra «techo» en su texto
 *   completo en el Senado: aparece **cero veces**. Es una ley de siembra de
 *   árboles y áreas de vida.
 *
 * Lo que NO se publica, y se declara dentro del artículo:
 *
 * - **Conductividades térmicas, valores U y aislamiento acústico por
 *   material.** Ya estaban declarados como no verificables para el artículo 45
 *   y siguen sin fuente citable.
 * - **Años de vida útil por sistema.** No hay fuente colombiana publicada.
 * - **Cualquier precio.** Doctrina del pilar de costos.
 * - **Ninguna NTC.** El catálogo de ICONTEC sigue sin ser consultable.
 *
 * La comparación cualitativa va rotulada como criterio del estudio, igual que
 * en `mamposteria-o-prefabricado-que-conviene`.
 *
 * Fechado en agosto de 2026.
 */
export const post: Post = {
  slug: 'cubiertas-barro-termoacustica-verde-o-placa',
  titulo: 'Cubiertas: barro, termoacústica, verde o placa',
  pilar: 'casa-campestre',
  fecha: '2026-08-18',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'La conversación sobre cubiertas se hace en estética y en precio, y la ' +
    'variable que decide está publicada en una tabla oficial que casi nadie ' +
    'mira: el peso. La teja de barro pesa diez veces lo que la lámina, y esa ' +
    'relación cambia la estructura entera.',
  metaDescripcion:
    'Teja de barro, cubierta termoacústica, techo verde o placa de concreto: ' +
    'qué pesa cada uno, qué exige la NSR-10 y en qué clima falla.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La cubierta es la decisión de proyecto que más gente toma por ' +
        'fotografía. Se elige el barro porque se ve bien, la lámina porque es ' +
        'barata, el verde porque suena responsable y la placa porque «después ' +
        'se puede levantar otro piso».',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de esas cuatro razones es mala. Lo que pasa es que ninguna es ' +
        'la primera. **La primera es cuánto pesa**, y ese número está ' +
        'publicado, en una tabla oficial, desde 2010. Casi nadie la mira.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos cosas que este artículo no repite porque ya están contadas. **Qué ' +
        'pide cada clima** está en [casa bioclimática por piso ' +
        'térmico](/blog/casa-bioclimatica-por-piso-termico), con la ' +
        'clasificación oficial y sus porcentajes. **Por qué se filtra una ' +
        'cubierta y en qué orden falla** está en [filtraciones en ' +
        'cubierta](/blog/filtraciones-en-cubierta). Aquí se decide cuál ' +
        'sistema poner; allí, qué hacer cuando el que hay ya falló.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El dato que nadie pone sobre la mesa: el peso' },
    {
      tipo: 'parrafo',
      texto:
        'La NSR-10 clasifica la cubierta como un **elemento no estructural ' +
        'horizontal** y le publica cargas muertas mínimas, material por ' +
        'material. No son estimaciones de nadie: es una tabla del reglamento, y ' +
        'es lo que un diseñador estructural mete en el modelo.',
    },
    {
      tipo: 'diagrama',
      svg: CUATRO_CUBIERTAS,
      titulo: 'Los cuatro sistemas, comparados por lo único que la norma publica',
      pie:
        'Esquema sin escala. Las cifras salen de las Tablas B.3.4.1-4 y ' +
        'B.4.2.1-2 de la NSR-10. Diagrama del estudio.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Componente de cubierta', 'kN/m²', 'kgf/m²'],
      filas: [
        ['Teja de arcilla, incluyendo el mortero', '0,80', '80'],
        ['Membrana impermeable bituminosa con cubierta de grava', '0,25', '25'],
        ['Cubiertas corrugadas de asbesto-cemento', '0,20', '20'],
        ['Tablillas de asfalto', '0,10', '10'],
        ['Membrana impermeable bituminosa de superficie lisa', '0,10', '10'],
        ['Tablero metálico, calibre 20 (0,9 mm nominal)', '0,08', '8'],
        ['Espuma de poliuretano', '0,0010 por mm', '1,0 por cm'],
        ['Espuma de poliestireno', '0,0005 por mm', '0,5 por cm'],
      ],
      nota:
        'Tabla B.3.4.1-4 de la NSR-10, cargas muertas mínimas de elementos no ' +
        'estructurales horizontales — cubiertas. Los valores son por m² de área ' +
        'en planta, y el propio reglamento advierte que el diseñador debe ' +
        'considerar su variación por materiales locales y práctica ' +
        'constructiva.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ahí está el artículo entero en una línea: **la teja de barro pesa diez ' +
        'veces lo que la lámina metálica**. Ochenta kilos por metro cuadrado ' +
        'contra ocho. Sobre una casa con 120 m² de cubierta, eso son más de ' +
        'ocho toneladas de diferencia bajando por los muros hasta la ' +
        'cimentación.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y no es una diferencia que se resuelva después. Cambiar de lámina a ' +
        'teja de barro en una casa ya diseñada no es cambiar un acabado: es ' +
        'cambiar la estructura. Al revés funciona mejor, pero también tiene ' +
        'consecuencias, porque una estructura dimensionada para barro y ' +
        'cargada con lámina queda sobredimensionada y pagada.',
    },
    {
      tipo: 'nota',
      texto:
        'Un aviso al leer esa tabla hoy. **Sigue listando el asbesto-cemento**, ' +
        'y ese material está prohibido: la Ley 1968 de 2019 prohibió, a partir ' +
        'del 1 de enero de 2021, «la explotación, producción, comercialización, ' +
        'importación, distribución y uso de cualquier variedad de asbesto y ' +
        'productos elaborados con él». La tabla es de 2010 y no se ha ' +
        'depurado. Que un valor esté en el reglamento no significa que el ' +
        'material se pueda instalar.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Y el peso que no es peso: la carga viva' },
    {
      tipo: 'parrafo',
      texto:
        'A la carga muerta hay que sumarle la viva, que es la que depende del ' +
        'uso. Aquí aparece el número que casi nunca acompaña a la conversación ' +
        'sobre techos verdes:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Tipo de cubierta', 'kN/m²', 'kgf/m²'],
      filas: [
        ['Cubiertas, azoteas y terrazas', 'La misma del resto de la edificación', 'La misma del resto de la edificación'],
        ['Cubiertas usadas para jardines de cubierta o para reuniones', '5,00', '500'],
        ['Cubiertas inclinadas con más de 15° de pendiente, en estructura metálica o de madera con imposibilidad física de recibir cargas mayores', '0,35', '35'],
        ['Cubiertas inclinadas con pendiente de 15° o menos, en las mismas condiciones', '0,50', '50'],
      ],
      nota:
        'Tabla B.4.2.1-2 de la NSR-10. La carga viva de la cubierta nunca puede ' +
        'ser menor que la mayor de las que se usen en el resto de la ' +
        'edificación.',
    },
    {
      tipo: 'nota',
      texto:
        '**Quinientos kilos por metro cuadrado.** Es catorce veces la carga ' +
        'viva de una cubierta inclinada liviana, y es **antes** de sumar el ' +
        'peso propio del sustrato saturado, que es carga muerta y que la tabla ' +
        'de cargas muertas no publica. Una cubierta verde no es un acabado ' +
        'vegetal sobre una losa cualquiera: es una decisión estructural que se ' +
        'toma al principio o no se toma.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El granizo, que depende de la altura' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí el piso térmico entra en la estructura, y de una manera que casi ' +
        'nadie anticipa. El reglamento tiene una carga específica de granizo, y ' +
        'su umbral es geográfico:',
    },
    {
      tipo: 'cita',
      texto:
        'Las cargas de granizo, G, deben tenerse en cuenta en las regiones del ' +
        'país con más de 2.000 metros de altura sobre el nivel del mar o en ' +
        'lugares de menor altura donde la autoridad municipal o distrital así ' +
        'lo exija. […] su valor es de 1,0 kN/m² (100 kgf/m²). Para cubiertas ' +
        'con una inclinación mayor a 15° este valor puede reducirse a 0,5 kN/m² ' +
        '(50 kgf/m²).',
      fuente: 'NSR-10, Título B, B.4.8.3',
    },
    {
      tipo: 'nota',
      texto:
        'Léalo como una decisión de proyecto y no como un dato. En Bogotá, en ' +
        'Tunja o en cualquier sitio por encima de 2.000 m, **inclinar la ' +
        'cubierta por encima de 15° le quita cincuenta kilos por metro ' +
        'cuadrado a la estructura**. Es la razón menos romántica y más eficaz ' +
        'para preferir una cubierta inclinada en clima frío — y se suma a las ' +
        'razones de asoleamiento que están en [casa bioclimática por piso ' +
        'térmico](/blog/casa-bioclimatica-por-piso-termico).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La obligación que ninguna cotización incluye' },
    {
      tipo: 'parrafo',
      texto:
        'El mismo capítulo trae una exigencia que no es de criterio y que casi ' +
        'ninguna casa colombiana cumple:',
    },
    {
      tipo: 'cita',
      texto:
        'Toda cubierta debe disponer de sistema auxiliar de evacuación del ' +
        'exceso de agua cuando se presenta una obstrucción de las bajantes ' +
        'normales. Este sistema puede consistir en gárgolas, rebosaderos u ' +
        'otros implementos que eviten la acumulación de agua y la evacuen de ' +
        'forma confiable.',
      fuente: 'NSR-10, Título B, B.4.8.1, literal (a)',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y la responsabilidad está repartida por escrito: el proyecto ' +
        'hidráulico debe incluir el diseño del drenaje y del sistema auxiliar, ' +
        '**es responsabilidad del constructor que suscribe la licencia** ' +
        'aprobarlo y entregarle al diseñador estructural el volumen de agua que ' +
        'puede acumularse, y el estructural debe diseñar la cubierta para ' +
        'resistir ese peso sin fallar.',
    },
    {
      tipo: 'nota',
      texto:
        'Esto explica una de las cinco causas de gotera del otro artículo desde ' +
        'el lado de la norma: una bajante obstruida no solo produce una ' +
        'filtración, produce **una carga que la estructura tenía que haber ' +
        'previsto**. Las otras cuatro causas están en [filtraciones en ' +
        'cubierta](/blog/filtraciones-en-cubierta).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los cuatro sistemas, uno por uno' },

    { tipo: 'titulo', nivel: 3, texto: 'Teja de barro' },
    {
      tipo: 'parrafo',
      texto:
        'Es la más pesada y la que mejor envejece a la vista. Pide estructura ' +
        'de cubierta dimensionada para ella, pendiente franca y un remate ' +
        'resuelto: la teja de borde y el caballete son donde empieza casi todo ' +
        'el problema. A favor tiene algo que ninguna tabla mide: la pieza rota ' +
        'se reemplaza una por una, sin desmontar nada.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Termoacústica' },
    {
      tipo: 'parrafo',
      texto:
        '«Termoacústica» es un nombre comercial, no una designación normativa: ' +
        'describe una lámina metálica con un aislante adherido o inyectado. La ' +
        'tabla del reglamento pesa por separado la lámina —8 kgf/m²— y el ' +
        'aislante, por milímetro de espesor. Es, con diferencia, la solución ' +
        'más liviana, y es la que permite luces mayores con menos estructura.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Su punto débil no es el material sino la unión: los traslapos y las ' +
        'perforaciones de fijación son la vía de entrada del agua, y las ' +
        'arandelas se degradan antes que la lámina. Es una cubierta de ' +
        'mantenimiento barato y frecuente, no de mantenimiento nulo.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Cubierta verde' },
    {
      tipo: 'parrafo',
      texto:
        'La que exige la decisión más temprana, por las razones estructurales ' +
        'de arriba, y la que peor tolera la improvisación: la ' +
        'impermeabilización queda **debajo del sustrato**, es decir, debajo de ' +
        'lo que habría que retirar para repararla. Una filtración en una ' +
        'cubierta verde no es una reparación puntual.',
    },
    {
      tipo: 'nota',
      texto:
        'Y una corrección, porque circula mucho: **la Ley 2173 de 2021 no ' +
        'obliga a poner techos verdes.** Se buscó la palabra «techo» en su ' +
        'texto completo y no aparece **ni una sola vez**: es una ley de ' +
        'restauración ecológica por siembra de árboles y creación de áreas de ' +
        'vida. Lo que sí existe es un instrumento local, el Acuerdo 418 de 2009 ' +
        'del Concejo de Bogotá, que **promueve** su implementación y ordena ' +
        'incorporarlos en edificaciones públicas. Promover no es obligar, y una ' +
        'casa particular no está obligada por ninguna de las dos.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Placa de concreto' },
    {
      tipo: 'parrafo',
      texto:
        'Es la única de las cuatro que **no aparece en la tabla de cargas ' +
        'muertas de cubierta**, y por una razón conceptual: no es un elemento ' +
        'no estructural. Una placa es estructura, su peso lo pone el diseño ' +
        'estructural y no una tabla de acabados. Lo que sí se le suma encima, y ' +
        'sí está en la tabla, es el alistado, la impermeabilización y el ' +
        'aislante.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es la opción que deja la puerta abierta a crecer hacia arriba, y esa ' +
        'es su ventaja real. Pero «la placa ya está y aguanta» no es un ' +
        'argumento suficiente: qué exige de verdad levantar un piso sobre lo ' +
        'que ya existe está en [ampliar un segundo ' +
        'piso](/blog/ampliar-un-segundo-piso).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué aísla: la pregunta está mal planteada' },
    {
      tipo: 'parrafo',
      texto:
        '«¿Cuál aísla más?» no tiene respuesta única porque **aislar no ' +
        'significa lo mismo en los cuatro climas del país**. En clima frío el ' +
        'objetivo es conservar calor; en cálido seco, aprovechar la inercia ' +
        'para guardar el fresco de la noche; en cálido húmedo, lo que hay que ' +
        'hacer es sacar el aire caliente por la cumbrera, no encerrarlo mejor. ' +
        'Las cuatro clases oficiales y lo que pide cada una están en [casa ' +
        'bioclimática por piso ' +
        'térmico](/blog/casa-bioclimatica-por-piso-termico).',
    },
    {
      tipo: 'nota',
      texto:
        '**Lo que no voy a publicar, y por qué.** No doy conductividades ' +
        'térmicas, valores U ni datos de aislamiento acústico por material: no ' +
        'hay fuente colombiana pública con metodología, y el catálogo de ' +
        'ICONTEC no es consultable, así que ni siquiera puedo citar el número ' +
        'de una norma técnica. Tampoco doy años de vida útil por sistema. Lo ' +
        'que viene es una comparación cualitativa, y va rotulada como lo que ' +
        'es: criterio del estudio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La comparación, con su etiqueta puesta' },
    {
      tipo: 'tabla',
      cabeceras: ['Sistema', 'Peso', 'Qué pendiente pide', 'Dónde falla primero', 'Mantenimiento'],
      filas: [
        [
          'Teja de barro',
          '**El más alto**: 80 kgf/m² con mortero',
          'Inclinada y franca',
          'En el remate, el caballete y la teja de borde',
          'Reemplazo de piezas y limpieza de canales',
        ],
        [
          'Termoacústica',
          '**El más bajo**: 8 kgf/m² la lámina',
          'Inclinada, admite poca',
          'En traslapos, tornillos y arandelas',
          'Frecuente y barato: fijaciones y sellos',
        ],
        [
          'Cubierta verde',
          '**No publicado** como carga muerta; 500 kgf/m² de carga viva',
          'Plana con pendiente de drenaje',
          'En la impermeabilización, que queda enterrada',
          'Jardinería, drenajes y revisión periódica',
        ],
        [
          'Placa de concreto',
          '**Es estructura**, no acabado',
          'Plana con pendiente',
          'En juntas y en perforaciones posteriores',
          'Impermeabilización y desagües',
        ],
      ],
      nota:
        'Las cifras de peso son de las Tablas B.3.4.1-4 y B.4.2.1-2 de la ' +
        'NSR-10. **Las tres columnas de la derecha son criterio de este ' +
        'estudio**, no norma: salen de obra ejecutada y de diagnósticos, no de ' +
        'una fuente publicada.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánto cuesta: la parte honesta' },
    {
      tipo: 'parrafo',
      texto:
        'No publico precios por metro cuadrado de cubierta, por el mismo motivo ' +
        'que no los publico de nada más: **no hay fuente colombiana con ' +
        'metodología**, y las que circulan se contradicen entre sí. El ' +
        'razonamiento completo está en [cuánto cuesta construir por ' +
        'm²](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí se puede decir, y sirve para leer una cotización, es qué ' +
        'renglones cambian con el sistema:',
    },
    {
      tipo: 'lista',
      items: [
        '**La estructura de soporte cambia con el peso**, y es la partida grande. Comparar dos cotizaciones de cubierta sin mirar qué estructura supone cada una es comparar cosas distintas.',
        '**La impermeabilización solo aparece en dos de las cuatro.** En barro y en lámina la estanqueidad la resuelve la pendiente y el traslapo; en verde y en placa hay una membrana, y es una partida propia.',
        '**El desagüe es una partida, no un detalle**, y en la cubierta plana es la partida crítica: incluye el sistema auxiliar que exige el reglamento.',
        '**El mantenimiento no es cero en ninguna.** Es más barato y más frecuente en lámina, más caro y más espaciado en barro, y en cubierta verde es una obligación permanente que hay que presupuestar como tal.',
        '**El sobrecosto de equivocarse es asimétrico.** Cambiar de sistema con la estructura ya dimensionada solo es barato en una dirección: hacia lo más liviano.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se decide' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Empiece por el clima y por la altura**, no por la imagen. La altura decide si hay carga de granizo, y el clima decide si el problema es conservar calor o expulsarlo.',
        '**Fije el sistema antes del diseño estructural**, no después. Es la decisión que más cuesta cambiar tarde.',
        '**Si quiere cubierta verde, decídalo el primer día.** Quinientos kilos por metro cuadrado no se acomodan sobre una estructura pensada para otra cosa.',
        '**Si quiere dejar abierta la posibilidad de un segundo piso**, la placa es la respuesta, pero pida que el diseño estructural lo contemple desde ahora: sale mucho más barato prever el piso que reforzar después.',
        '**Exija que el proyecto hidráulico incluya el sistema auxiliar de evacuación.** Es obligación del reglamento y casi nunca está dibujado.',
        '**Presupueste el mantenimiento del sistema que eligió**, con periodicidad y responsable. La cubierta es el elemento que más se abandona y el que más caro cobra el abandono.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La cubierta es lo único del edificio que trabaja veinticuatro horas ' +
        'contra el sol y contra el agua a la vez. Elegirla por fotografía sale ' +
        'bien más veces de las que debería — y cuando sale mal, no se corrige ' +
        'cambiando la teja.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'estructura', 'costos'],
  fuentes: [
    {
      titulo:
        'NSR-10, Título B: cargas muertas de elementos no estructurales horizontales (Tabla B.3.4.1-4), cargas vivas en cubiertas (Tabla B.4.2.1-2), empozamiento de agua (B.4.8.1 y B.4.8.2) y carga de granizo (B.4.8.3). Anexo del Decreto 926 de 2010',
      editor:
        'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'Decreto 926 de 2010, que adopta el Reglamento NSR-10',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39255',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'Ley 1968 de 2019, que prohíbe el uso de asbesto en el territorio nacional a partir del 1 de enero de 2021',
      editor: 'Ministerio de Ambiente y Desarrollo Sostenible',
      url: 'https://www.minambiente.gov.co/documento-normativa/ley-1968-de-2019/',
      fecha: '2019-07-11',
    },
    {
      titulo:
        'Ley 2173 de 2021, que promueve la restauración ecológica a través de la siembra de árboles y la creación de áreas de vida',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2173_2021.html',
      fecha: '2021-12-30',
    },
    {
      titulo:
        'Acuerdo 418 de 2009 del Concejo de Bogotá, «por el cual se promueve la implementación de tecnologías arquitectónicas sustentables, como techos o terrazas verdes, entre otras en el D. C.»',
      editor: 'Régimen Legal de Bogotá D.C. · Alcaldía Mayor de Bogotá',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=38262&dt=S',
      fecha: '2009-12-22',
    },
    {
      titulo:
        'Resolución 0549 de 2015: parámetros y lineamientos de construcción sostenible y adopción de la guía de ahorro de agua y energía en edificaciones',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/sites/default/files/normativa/0549-2015.pdf',
      fecha: '2015-07-10',
    },
  ],
}
