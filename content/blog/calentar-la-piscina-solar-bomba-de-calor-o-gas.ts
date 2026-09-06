import type { Post } from '@/lib/types'

/**
 * La pieza técnica del eje de dinero, y la que más se aparta de lo que se
 * publica en el sector. Tres decisiones editoriales la estructuran:
 *
 * 1. **Se compara por kWh útil, no por equipo**, y con tarifas de la **misma
 *    empresa, la misma ciudad y el mismo mes** —EPM, Medellín, agosto de
 *    2026—, porque una comparación entre el gas de un mercado y la energía de
 *    otro no es una comparación: es exactamente el error metodológico que este
 *    blog le critica a las tablas de $/m².
 * 2. **La cuenta empieza por la pérdida, no por el equipo.** La evaporación se
 *    lleva del orden de 86 kWh al día en la piscina de referencia, y de ahí
 *    sale que la manta térmica es el sistema de calentamiento más barato que
 *    existe. Todo lo demás se dimensiona sobre lo que la manta deje.
 * 3. **El área de colector solar no se cita: se deduce.** 86,4 kWh ÷ (4,5
 *    kWh/m²/día × 0,6) ≈ 32 m², que es justo la superficie de la piscina. La
 *    «regla de oro» de que el colector iguala la lámina sale de la aritmética,
 *    y así se presenta.
 *
 * Y el hallazgo normativo, hermano del «dispositivo homologado» de la pieza de
 * la Ley 1209: **el RETIQ no etiqueta bombas de calor.** Su tabla 3.1.a cubre
 * aire acondicionado, refrigeración, balastos, motores, lavadoras, calentadores
 * de agua eléctricos de acumulación y a gas, y gasodomésticos de cocción; y
 * excluye expresamente las bombas de calor. Consecuencia práctica: el COP de la
 * ficha es el del fabricante, medido en condiciones que ninguna norma
 * colombiana fija.
 *
 * Los dos supuestos que no son dato colombiano van declarados dentro del
 * artículo: el rendimiento del 85 % de un calentador a gas, y los 4 mm diarios
 * de evaporación. El poder calorífico se toma en el **mínimo** regulado —35,4
 * MJ/m³, Resolución CREG 054 de 2007— que es el supuesto conservador contra el
 * gas, y se publica el rango completo.
 *
 * Fechado el 2 de septiembre de 2026, después del pliego de energía de EPM del
 * 19 de agosto.
 */
export const post: Post = {
  slug: 'calentar-la-piscina-solar-bomba-de-calor-o-gas',
  titulo: 'Calentar la piscina: solar, bomba de calor o gas',
  pilar: 'piscinas',
  fecha: '2026-08-19',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Una piscina no se calienta: se deja de enfriar. La evaporación se lleva ' +
    'unos 86 kWh al día, que es más de lo que cualquier equipo va a reponer ' +
    'barato. Aquí está la comparación por kWh útil, con las tarifas de agosto ' +
    'de 2026, y el dato normativo que nadie menciona.',
  metaDescripcion:
    'Solar, bomba de calor o gas para calentar una piscina en Colombia: cuánto ' +
    'cuesta cada kWh útil con las tarifas de 2026 y cuál conviene.',
  puerta: 'diseno-a-medida',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'costos'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Casi todas las cotizaciones de calentamiento empiezan por el equipo. ' +
        'Empezar por ahí es empezar por el final, y es la razón de que tanta ' +
        'gente pague una bomba de calor que después no enciende porque el ' +
        'recibo le dio miedo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La frase que ordena todo el problema es esta: **una piscina no se ' +
        'calienta, se deja de enfriar.** El agua caliente se enfría por tres ' +
        'vías —evaporación, convección con el aire y radiación al cielo ' +
        'nocturno— y en una piscina descubierta la primera se lleva la mayor ' +
        'parte. Cualquier equipo que usted instale está compitiendo contra esa ' +
        'pérdida, todos los días, para siempre.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Primero: cuánta energía es' },
    {
      tipo: 'parrafo',
      texto:
        'Hay una constante que resuelve la mitad de las discusiones y que no ' +
        'depende de ninguna norma ni de ningún proveedor: subir un metro cúbico ' +
        'de agua un grado centígrado cuesta **1,163 kWh**. Es el calor ' +
        'específico del agua, y no lo negocia nadie.',
    },
    {
      tipo: 'dato',
      valor: '419 kWh',
      etiqueta:
        'para llevar la piscina de referencia —45 m³— de 20 a 28 °C, una sola vez',
      fuente: '45 m³ × 8 °C × 1,163 kWh por m³ y por °C',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con una bomba de calor eficiente, esos 419 kWh de calor cuestan del ' +
        'orden de **$80.000** en energía a las tarifas de agosto de 2026. Suena ' +
        'perfectamente asumible, y lo es. El problema no es subir la ' +
        'temperatura: es **sostenerla**.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La evaporación se lleva casi todo' },
    {
      tipo: 'parrafo',
      texto:
        'Cuando un kilo de agua se evapora, se lleva consigo el calor que hizo ' +
        'falta para evaporarlo: unos 2.430 kJ. Traducido a la unidad del ' +
        'recibo, **evaporar un milímetro de lámina sobre un metro cuadrado ' +
        'cuesta 0,675 kWh**. Ahora multiplique.',
    },
    {
      tipo: 'dato',
      valor: '86 kWh al día',
      etiqueta:
        'lo que se lleva la evaporación de una piscina descubierta de 32 m² que pierde 4 mm diarios',
      fuente: '0,128 m³ al día × 2.430 kJ por kilo, convertido a kWh',
    },
    {
      tipo: 'nota',
      texto:
        'Los 4 mm diarios son un supuesto y hay que decirlo: **no encontré ' +
        'ninguna medición colombiana publicada de evaporación en piscinas.** Es ' +
        'un orden de magnitud de ingeniería, no un dato nacional. La ' +
        'evaporación real sube con la temperatura del agua, baja con la humedad ' +
        'y se dispara con el viento — una piscina expuesta en una loma pierde ' +
        'mucho más que una protegida. La aritmética queda a la vista para que, ' +
        'con su propia medición, usted rehaga la cuenta.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ochenta y seis kWh diarios son **2.592 kWh al mes**. Compare eso con ' +
        'los 419 kWh de subir la temperatura una vez y verá dónde está de ' +
        'verdad el costo: no en calentar, en reponer.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La manta térmica es el sistema de calentamiento más barato que existe' },
    {
      tipo: 'parrafo',
      texto:
        'Una cubierta flotante sobre la lámina no calienta nada. Lo que hace ' +
        'es cortar la evaporación, que es de donde salen esos 2.592 kWh ' +
        'mensuales. Cada punto porcentual de evaporación que evita es un punto ' +
        'porcentual que su equipo no tiene que reponer, con cualquier ' +
        'combustible y a cualquier tarifa.',
    },
    {
      tipo: 'nota',
      texto:
        'De ahí una recomendación que no depende de ninguna marca: **decida la ' +
        'cubierta antes de decidir el equipo, y dimensione el equipo con la ' +
        'cubierta puesta.** Un sistema calculado para una piscina descubierta ' +
        'que después se cubre queda sobredimensionado —y una bomba de calor ' +
        'sobredimensionada arranca y para todo el día, que es como se acorta ' +
        'su vida—. Y la cubierta hace otras dos cosas gratis: reduce la ' +
        'reposición de agua y reduce el consumo de químico, porque menos agua ' +
        'nueva es menos desequilibrio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los tres sistemas, comparados por kWh útil' },
    {
      tipo: 'parrafo',
      texto:
        'Comparar un equipo de gas con uno eléctrico exige una unidad común, y ' +
        'la única honesta es el **kilovatio hora que efectivamente entra al ' +
        'agua**. Las tarifas de abajo son todas de EPM, todas de Medellín y ' +
        'todas de agosto de 2026: misma empresa, misma ciudad, mismo mes. ' +
        'Mezclar mercados haría la tabla más completa y completamente inútil.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Sistema', 'Qué paga usted', 'Costo del kWh útil', 'Lo que el folleto no dice'],
      filas: [
        [
          '**Resistencia eléctrica**',
          '$960,34 por kWh',
          '**$960**',
          'Cada kWh de electricidad da un kWh de calor y ni uno más. Sirve para un jacuzzi pequeño; en una piscina es inviable',
        ],
        [
          '**Bomba de calor**',
          '$960,34 por kWh, dividido por el COP',
          '**$192 con COP 5 · $274 con COP 3,5**',
          'No genera calor: lo mueve del aire al agua. Su rendimiento cae cuando baja la temperatura del aire, que es justo cuando usted la necesita',
        ],
        [
          '**Gas natural**',
          '$3.517,06 por m³',
          '**$348 a $421**',
          'El rango no es imprecisión: el metro cúbico de gas no siempre trae la misma energía. Abajo está por qué',
        ],
        [
          '**Solar térmica**',
          'Nada, después de instalarla',
          '**$0**',
          'Entrega cuando hay sol y no entrega de noche, que es cuando la piscina se enfría. Es un complemento excelente y un sistema único deficiente',
        ],
      ],
      nota:
        'Energía y gas: pliegos de EPM de agosto de 2026, tarifa residencial de ' +
        'estrato 4, nivel de tensión 1. El costo del kWh útil de gas supone un ' +
        'rendimiento del 85 % en el calentador — un supuesto declarado, no un ' +
        'dato colombiano.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Llevado al mes de la piscina de referencia, descubierta: la ' +
        'resistencia eléctrica costaría del orden de **$2,49 millones**, el gas ' +
        'entre **$0,90 y $1,09 millones**, y la bomba de calor con COP 5 unos ' +
        '**$498.000**. Con la lámina cubierta, todo eso se divide. Ese es el ' +
        'artículo entero en dos frases.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El gas: por qué el metro cúbico no siempre vale lo mismo' },
    {
      tipo: 'parrafo',
      texto:
        'A usted le facturan volumen, pero lo que compra es energía, y la ' +
        'cantidad de energía que trae un metro cúbico depende de la ' +
        'composición del gas. La norma que gobierna el transporte lo acota: el ' +
        'poder calorífico bruto del gas que se entrega al transportador debe ' +
        'estar entre **35,4 MJ/m³ y 42,8 MJ/m³** —entre 950 y 1.150 BTU por pie ' +
        'cúbico—.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso son entre **9,8 y 11,9 kWh por metro cúbico**, y de ahí sale el ' +
        'rango de la tabla. Las cifras de arriba usan el extremo bajo, que es ' +
        'el supuesto conservador contra el gas. Y la tarifa cambia de mercado a ' +
        'mercado: el mismo metro cúbico que en Medellín se factura a $3.517,06 ' +
        'cuesta $3.125,89 en el Valle y el norte del Cauca en el mismo mes. ' +
        'Rehaga la cuenta con el número de su recibo, no con el de este ' +
        'artículo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La bomba de calor: el COP que nadie verifica' },
    {
      tipo: 'parrafo',
      texto:
        'El coeficiente de rendimiento —el COP— dice cuántos kilovatios hora de ' +
        'calor entrega el equipo por cada kilovatio hora de electricidad que ' +
        'consume. Un COP de 5 significa que mueve cinco veces más calor del que ' +
        'gasta. Es real y es la razón de que la bomba de calor gane la tabla ' +
        'con holgura.',
    },
    {
      tipo: 'nota',
      texto:
        'Pero ese número hay que leerlo con cuidado, y aquí está el dato que ' +
        'no circula: **el reglamento técnico de etiquetado de eficiencia ' +
        'energética de Colombia, el RETIQ, no cubre las bombas de calor.** Su ' +
        'lista de equipos etiquetados incluye aire acondicionado, ' +
        'refrigeración, balastos, motores, lavadoras, calentadores de agua ' +
        'eléctricos de acumulación y a gas y gasodomésticos de cocción; las ' +
        'bombas de calor quedan expresamente por fuera. **No hay etiqueta ' +
        'colombiana de eficiencia para el equipo que va a calentar su ' +
        'piscina**, y el COP de la ficha es el que declara el fabricante, ' +
        'medido en las condiciones que él elija.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso importa porque el COP no es un número fijo: cae cuando cae la ' +
        'temperatura del aire, que es la fuente de la que el equipo extrae el ' +
        'calor. Un COP medido con aire a 27 °C no es el que usted va a tener a ' +
        'las cinco de la mañana en la sabana de Bogotá. Pida siempre **la ' +
        'condición de ensayo junto al COP**: sin ella, el número no significa ' +
        'nada. Y si le venden un COP sin decirle a qué temperatura de aire y de ' +
        'agua se midió, ya sabe lo que vale.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Solar: la cuenta que da el área de colector' },
    {
      tipo: 'parrafo',
      texto:
        'Colombia recibe, en promedio, del orden de **4,5 kWh por metro ' +
        'cuadrado y por día** de radiación solar global, según el atlas del ' +
        'IDEAM y la UPME; en la sabana de Bogotá el promedio está algo por ' +
        'debajo y en la costa Caribe bastante por encima.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un colector de piscina —los de polipropileno sin cubierta de vidrio, ' +
        'que trabajan a temperatura muy cercana a la del ambiente— aprovecha ' +
        'una fracción alta de eso. Suponiendo un 60 % en promedio diario, para ' +
        'reponer los 86 kWh que se lleva la evaporación hacen falta ' +
        '**86,4 ÷ (4,5 × 0,6) ≈ 32 m² de colector**.',
    },
    {
      tipo: 'nota',
      texto:
        'Mire ese número: **32 m² es exactamente la superficie de la ' +
        'piscina.** La regla de oro que repiten todos los instaladores —«el ' +
        'colector debe medir más o menos lo que mide la lámina de agua»— no ' +
        'hace falta citarla de nadie: sale sola de la aritmética. Y de paso ' +
        'queda claro por qué falla tan a menudo: en un techo sin 32 m² libres y ' +
        'orientados, el sistema solar no va a sostener la temperatura, por bueno ' +
        'que sea el equipo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El piso térmico decide antes que el equipo' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que más dinero ahorra y que casi nunca se pregunta. ' +
        'En Cali, en Jamundí o en la costa, una piscina descubierta y bien ' +
        'orientada se estabiliza sola en una temperatura que a mucha gente le ' +
        'sirve, y lo que hace falta no es un calentador sino una cubierta para ' +
        'las noches. En la sabana de Bogotá el aire nocturno es otro y el ' +
        'balance cambia por completo: ahí sí hay un problema de calentamiento, ' +
        'y ahí sí la manta deja de ser opcional. Es la misma lógica de ' +
        '[la casa bioclimática por piso térmico](/blog/casa-bioclimatica-por-piso-termico), ' +
        'aplicada a 45 m³ de agua.',
    },
    {
      tipo: 'nota',
      texto:
        'Si la piscina va cubierta, la norma añade sus propias condiciones y ' +
        'conviene saberlas antes de encerrarla: **temperatura del agua igual o ' +
        'menor a 40 °C, aire entre 1 y 3 °C por encima del agua, humedad ' +
        'relativa entre el 50 y el 70 %, dióxido de carbono entre 400 y 600 ' +
        'ppm, renovación del aire de 4 a 6 veces por hora y un mínimo de 8 m³ ' +
        'de aire por bañista** — todo medido y registrado a diario, con ' +
        'termohigrómetro y medidor de CO₂ a la vista. Cubrir una piscina sin ' +
        'resolver la deshumidificación no es calentarla: es fabricar una ' +
        'patología de condensación en el recinto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El orden correcto de las decisiones' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Defina la temperatura que quiere y cuántos meses al año.** No es lo mismo 26 °C en fines de semana que 30 °C todo el año, y la diferencia en el recibo es de varias veces.',
        '**Resuelva la cubierta.** Es el sistema de calentamiento más barato y condiciona el tamaño de todo lo demás.',
        '**Mire el sitio antes que el catálogo.** Orientación, sombras y viento deciden buena parte del balance sin costarle nada.',
        '**Si hay techo libre y orientado, ponga solar.** Es el kWh más barato que existe y complementa a cualquier otro sistema.',
        '**Para sostener la temperatura, bomba de calor**, pidiendo el COP con su condición de ensayo por escrito.',
        '**Reserve el gas para el arranque rápido**, para el respaldo y para el clima frío, donde la bomba de calor pierde rendimiento justo cuando más se le pide.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien dirige esta línea en el estudio trae quince años diseñando ' +
        'sistemas hidráulicos y cuerpos de agua, y la lección de calentamiento ' +
        'que más se repite es esta: **casi ningún problema de temperatura se ' +
        'resuelve con un equipo más grande.** Se resuelve tapando la piscina, ' +
        'corrigiendo la implantación y dimensionando sobre la pérdida real, no ' +
        'sobre el volumen. Un equipo grande sobre una piscina descubierta es ' +
        'una factura grande, y nada más.',
    },
  ],
  fuentes: [
    {
      titulo: 'Tarifas y costo de energía eléctrica, mercado regulado, agosto de 2026',
      editor: 'Empresas Públicas de Medellín',
      url: 'https://www.epm.com.co/clientesyusuarios/energia/tarifas-energia/',
      fecha: '2026-08-19',
    },
    {
      titulo: 'Servicio de gas natural por red: componentes del costo y tarifas reguladas',
      editor: 'Empresas Públicas de Medellín',
      url: 'https://www.epm.com.co/clientesyusuarios/gas/tarifas-gas/',
      fecha: '2026-07-17',
    },
    {
      titulo: 'Publicación tarifaria de gas natural, agosto de 2026, Valle y norte del Cauca',
      editor: 'Gases de Occidente',
      url: 'https://www.gdo.com.co/Paginas/Tarifas-2026.aspx',
      fecha: '2026-08-01',
    },
    {
      titulo:
        'Resolución CREG 054 de 2007, que modifica las especificaciones de calidad del gas del Reglamento Único de Transporte',
      editor: 'Comisión de Regulación de Energía y Gas',
      url: 'https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0054_2007.htm',
      fecha: '2007-06-21',
    },
    {
      titulo: 'Resolución 41012 de 2015: Reglamento Técnico de Etiquetado, RETIQ',
      editor: 'Ministerio de Minas y Energía',
      url: 'https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_minminas_41012_2015.htm',
      fecha: '2015-09-18',
    },
    {
      titulo: 'Atlas de Radiación Solar de Colombia',
      editor: 'IDEAM y Unidad de Planeación Minero Energética',
      url: 'https://bdigital.upme.gov.co/handle/001/1236',
      fecha: '2005-01-01',
    },
    {
      titulo:
        'Resolución 929 de 2026, criterios técnicos constructivos y de seguridad para piscinas y estructuras similares',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0929-de-2026.pdf',
      fecha: '2026-05-12',
    },
  ],
}
