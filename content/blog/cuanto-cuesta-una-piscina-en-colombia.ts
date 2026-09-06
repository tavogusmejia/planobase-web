import type { Post } from '@/lib/types'

/**
 * La pieza de cabecera del eje de dinero del pilar de piscinas.
 *
 * Se escribe con el mismo criterio que «Cuánto cuesta construir por m² en
 * Colombia», y por la misma razón: **no existe fuente oficial ni gremial
 * colombiana con precios de construcción de piscina**. Las tablas que circulan
 * salen de proveedores con interés directo en el número. Sumar una más a ese
 * ruido no construye autoridad, así que el artículo no publica una tabla de
 * precios de obra: publica la estructura del costo, las variables que lo mueven
 * un orden de magnitud y —esto sí es original— **el costo mensual calculado
 * desde los pliegos tarifarios oficiales**, que nadie hace.
 *
 * Todo lo que lleva peso viene de fuente primaria descargada:
 *
 * - Tarifa de acueducto y alcantarillado de Bogotá: Acuerdo de Junta Directiva
 *   255 de 2026 de la EAAB, vigente desde el 1.º de julio de 2026. Estrato 4:
 *   $3.231,15/m³ de acueducto y $5.071,26/m³ de alcantarillado. El cargo **no
 *   básico** es el mismo para los estratos 1 a 4, y llenar una piscina es
 *   consumo no básico: por eso la cifra sirve para casi todo el mundo.
 * - Tarifa de energía: pliegos de agosto de 2026 de Enel Colombia (Bogotá) y de
 *   EPM (Medellín), nivel de tensión 1 y activos de la empresa.
 * - Tiempos de recirculación y circulación diaria: **Resolución 929 de 2026**,
 *   anexo técnico, numeral 10, tabla n.º 1. Sustituye materialmente a la
 *   Resolución 1510 de 2011, sobre la que se escribió la primera versión de
 *   esta pieza.
 *
 * El cambio de norma obligó a rehacer la sección de bombeo, y el hallazgo es
 * mejor que el anterior: la 929 **ya no le fija tiempo de recirculación a la
 * piscina de una casa**. Su artículo 2 aplica a los estanques de uso colectivo
 * abiertos al público y a los de uso restringido no abiertos al público, y su
 * parágrafo deja la piscina de propiedad privada unihabitacional únicamente con
 * las normas mínimas de seguridad del artículo 11 de la Ley 1209 de 2008. Así
 * que las ocho horas del cálculo pasan a ser un supuesto declarado y anclado en
 * la cifra que sí es norma para el conjunto residencial, no una lectura directa
 * del articulado. Se dice dentro del artículo.
 *
 * Lo otro que no está verificado es la evaporación: no encontré ninguna
 * medición colombiana publicada, y así se declara dentro del artículo, con la
 * aritmética a la vista para que quien tenga otro dato rehaga la cuenta.
 *
 * Fechado el 27 de agosto de 2026, después del pliego de energía más reciente
 * que cita (19 de agosto). Lleva `actualizado` porque es de las piezas que se
 * reindexan por trimestre.
 */
export const post: Post = {
  slug: 'cuanto-cuesta-una-piscina-en-colombia',
  titulo: 'Cuánto cuesta una piscina en Colombia, y cuánto cuesta cada mes',
  pilar: 'piscinas',
  fecha: '2026-08-27',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Nadie publica precios oficiales de piscina en Colombia, y quien le dé una ' +
    'cifra sin haber visto su lote se la está inventando. Lo que sí se puede ' +
    'calcular, y aquí se calcula desde los pliegos tarifarios: cuánto cuesta ' +
    'llenarla y cuánto cuesta el mes.',
  metaDescripcion:
    'Qué determina el costo de una piscina en Colombia y cuánto cuesta ' +
    'mantenerla al mes, calculado desde las tarifas oficiales de agua y energía.',
  puerta: 'diseno-a-medida',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'costos'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La pregunta llega siempre igual: «¿cuánto vale una piscina de ocho ' +
        'por cuatro?». Y la respuesta honesta incomoda, porque el mismo vaso ' +
        'de ocho por cuatro puede costar tres veces más en un lote que en el ' +
        'de al lado, por razones que no tienen nada que ver con la piscina.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Este artículo no le va a dar una tabla de precios. Le va a dar tres ' +
        'cosas que sí sirven para decidir: de qué está hecho el presupuesto, ' +
        'cuáles son las cinco variables que lo multiplican, y **cuánto cuesta ' +
        'la piscina todos los meses** — que es la cifra que casi nadie pone ' +
        'sobre la mesa y la que después no se puede devolver.',
    },
    {
      tipo: 'nota',
      texto:
        'Conviene declararlo de entrada: **no existe fuente oficial ni gremial ' +
        'colombiana que publique precios de construcción de piscina.** Ni el ' +
        'DANE, ni Camacol, ni ningún ministerio. Las tablas que circulan vienen ' +
        'de proveedores con interés directo en el número. Es el mismo problema ' +
        'que con el costo por metro cuadrado, y se trata igual: aquí no ' +
        'inventamos una cifra para llenar el hueco.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La piscina de este artículo' },
    {
      tipo: 'parrafo',
      texto:
        'Para que las cuentas se puedan seguir y rehacer, todas salen de la ' +
        'misma piscina: **8 × 4 m, profundidad media de 1,40 m**. Son **32 m² ' +
        'de lámina de agua y 45 m³ de volumen**. Si la suya es distinta, la ' +
        'regla de tres es suya y todos los números de aquí abajo se mueven con ' +
        'ella.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Usted no está comprando una piscina: está comprando tres cosas' },
    {
      tipo: 'lista',
      items: [
        '**El vaso.** La estructura que contiene el agua: excavación, estructura, impermeabilización y revestimiento. Es lo único que se ve y es lo que todo el mundo cotiza.',
        '**El sistema.** Succión, impulsión, filtración, bombeo, cuarto de máquinas, tubería y eléctrica. No se ve, cuesta una fracción importante del total y es lo que decide si la piscina funciona o si el agua se pone verde cada quince días.',
        '**El cumplimiento.** Los dispositivos y las condiciones que la ley exige: doble drenaje balanceado, cubierta antiatrapamiento, sistema de liberación de vacío, alarma de inmersión, andén perimetral. No es opcional y casi nunca está en la primera cotización.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La cotización barata casi siempre lo es porque cotizó el primer punto ' +
        'y dejó los otros dos para «después». Después es cuando cuesta el ' +
        'triple, porque hay que abrir lo que ya está cerrado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los capítulos del presupuesto' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la lista completa. Si a usted le entregan una cotización con ' +
        'menos capítulos que estos, no le están dando un precio más bajo: le ' +
        'están dando un precio incompleto.',
    },
    {
      tipo: 'lista',
      items: [
        '**Estudio de suelos y diseño estructural.** El vaso es una estructura de contención, no un acabado. Va firmado por ingeniero civil.',
        '**Diseño hidráulico y del cuarto de máquinas.** Es donde se decide todo lo que después no se puede cambiar.',
        '**Movimiento de tierra y retiro del material.** Depende del acceso, y el acceso es una de las cinco variables que más pesan.',
        '**Estructura del vaso**, con su acero y su concreto.',
        '**Impermeabilización.** No es lo mismo que el revestimiento y no lo reemplaza.',
        '**Revestimiento**, que la norma exige impermeable, fácil de limpiar y desinfectar, resistente a la abrasión y estable frente a los químicos del tratamiento.',
        '**Redes hidráulicas y sanitarias**: succión, impulsión, rebosadero o skimmers, vaciado y desagüe.',
        '**Equipos**: bomba, filtro, dosificación, calentamiento si lo hay.',
        '**Instalación eléctrica bajo RETIE**, que en piscinas tiene reglas propias y no es la eléctrica de una casa.',
        '**Andén perimetral**, que la norma fija en 1,20 m de ancho como mínimo, con pendiente del 3 % al 5 % hacia los drenajes y superficie antideslizante.',
        '**Dispositivos de seguridad de la Ley 1209** y señalización de profundidades.',
        '**Iluminación, escaleras y dotación.**',
        '**Puesta en marcha, primer llenado y equilibrio químico inicial.**',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'El capítulo que falta en nueve de cada diez cotizaciones es el andén ' +
        'perimetral. Son **1,20 m alrededor de todo el vaso**: en una piscina ' +
        'de 8 × 4 m eso son casi 30 m² de piso nuevo, con su base, su desagüe y ' +
        'su acabado antideslizante. No es un extra: lo exige el numeral 9.1 del ' +
        'anexo técnico de la Resolución 929 de 2026, que además permite ' +
        'sustituirlo por borde infinito o desvanecido hasta en el 50 % del ' +
        'perímetro, compensando el área en los costados donde sí se construya.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las cinco variables que multiplican el costo' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está la razón de que dos piscinas idénticas cuesten distinto. ' +
        'Ninguna de las cinco se ve en un catálogo y las cinco se pueden ' +
        'averiguar antes de firmar.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Variable', 'Por qué cambia el precio', 'Qué averiguar antes'],
      filas: [
        [
          '**Nivel freático**',
          'Un vaso vacío con el agua del terreno por encima del fondo flota. Hay que anclarlo, drenarlo o ambas cosas, y eso es estructura, no acabado',
          'Un apique en época de lluvia, no en verano',
        ],
        [
          '**Pendiente del terreno**',
          'En ladera el vaso pasa a ser un muro de contención por uno o dos costados, y el movimiento de tierra se dispara',
          'La cota del punto más alto y la del más bajo del área de la piscina',
        ],
        [
          '**Acceso de maquinaria**',
          'Si no entra retroexcavadora, la excavación se hace a mano y el material sale en carretilla. Es el mismo hueco a varias veces el precio',
          'El ancho libre y el radio de giro desde la vía hasta el sitio',
        ],
        [
          '**Distancia al cuarto de máquinas**',
          'Cada metro de más es tubería de mayor diámetro, más pérdida de carga y una bomba más grande que consumirá más todos los días de su vida',
          'Dónde hay acometida eléctrica y desagüe disponible',
        ],
        [
          '**Si va sobre losa existente**',
          'Deja de ser una piscina y pasa a ser una intervención estructural, con evaluación de la losa firmada por ingeniero civil antes de dibujar nada',
          'Si existen los planos estructurales del edificio',
        ],
      ],
      nota:
        'Cualquiera de las cinco puede duplicar el presupuesto por sí sola. ' +
        'Las cinco a la vez, en un lote en ladera sin acceso y con nivel ' +
        'freático alto, lo mueven un orden de magnitud.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si la piscina va sobre una losa que ya existe, el asunto es otro. ' +
        'Empieza por la licencia —está en ' +
        '[¿necesito licencia para construir una piscina?](/blog/necesito-licencia-para-construir-una-piscina)— ' +
        'y sigue por la carga y la impermeabilización, que están en ' +
        '[piscina en terraza](/blog/piscina-en-terraza).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Llenarla: la primera cifra que sí se puede publicar' },
    {
      tipo: 'parrafo',
      texto:
        'Esta sí sale de un documento oficial, con fecha y con nombre. Las ' +
        'tarifas de acueducto y alcantarillado de Bogotá las fija el Acuerdo de ' +
        'Junta Directiva 255 de 2026 de la Empresa de Acueducto, vigente desde ' +
        'el 1.º de julio de 2026.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Estrato', 'Acueducto $/m³', 'Alcantarillado $/m³', 'Llenar 45 m³'],
      filas: [
        ['1 a 4', '3.231,15', '5.071,26', '**$373.608**'],
        ['5', '5.008,28', '7.657,60', '$569.965'],
        ['6', '5.331,40', '8.164,73', '$607.326'],
      ],
      nota:
        'Tarifas de Bogotá, vigentes desde el 1.º de julio de 2026. Los ' +
        'estratos 1 a 3 aparecen juntos con el 4 porque llenar una piscina es ' +
        '**consumo no básico**, y para ese consumo los cuatro pagan lo mismo. ' +
        'En otros municipios la tarifa es otra: la fija cada empresa y cambia.',
    },
    {
      tipo: 'nota',
      texto:
        'Mire la tabla otra vez: **el alcantarillado cuesta más que el agua.** ' +
        'Y se liquida sobre el consumo que marca el contador de acueducto, no ' +
        'sobre lo que usted vierte de verdad. Es decir: paga alcantarillado por ' +
        'los 45 m³ que se quedan dentro de la piscina. No es un error de la ' +
        'empresa, es cómo está construida la tarifa, y conviene saberlo antes ' +
        'de decidir cada cuánto se vacía.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El mes: la cifra que nadie le va a dar' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está el costo que decide si la piscina se usa o se tapa a los dos ' +
        'años. Y para calcularlo hay que saber cuántas horas gira la bomba, que ' +
        'es donde la norma nueva depara una sorpresa: **a la piscina de una ' +
        'casa no le fija ninguna.** La Resolución 929 de 2026 aplica a los ' +
        'estanques de uso colectivo abiertos al público y a los de uso ' +
        'restringido no abiertos al público —la piscina de un conjunto—, y deja ' +
        'la piscina de propiedad privada unihabitacional únicamente con las ' +
        'normas mínimas de seguridad de la Ley 1209 de 2008.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo razonable es tomar como referencia lo que sí es norma para la ' +
        'piscina de al lado: a la de uso restringido la 929 le pide un ' +
        'recambio completo cada **4 a 6 horas**, entre dos y cuatro veces al ' +
        'día, con una **circulación diaria de 8 a 24 horas**. Ocho horas ' +
        'diarias es el piso de esa banda, y es el supuesto que uso aquí. Con ' +
        'una bomba de 1 HP —0,75 kW— salen 6 kWh al día y **180 kWh al mes**. ' +
        'Eso, a las tarifas de agosto de 2026, es esto:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Concepto', 'Cómo sale', 'Al mes'],
      filas: [
        [
          '**Bombeo, Bogotá (estrato 4)**',
          '180 kWh × $863,61',
          '**$155.449**',
        ],
        [
          '**Bombeo, Medellín (estrato 4)**',
          '180 kWh × $960,34',
          '**$172.861**',
        ],
        [
          '**Bombeo, Medellín (estratos 5 y 6)**',
          '180 kWh × $1.152,41',
          '$207.434',
        ],
        [
          '**Reposición por evaporación, Bogotá**',
          '3,84 m³ × $8.302,41',
          '$31.881',
        ],
      ],
      nota:
        'Energía: pliegos de agosto de 2026 de Enel Colombia y de EPM, nivel de ' +
        'tensión 1 y activos de la empresa. Agua: tarifa de Bogotá citada ' +
        'arriba. Falta lo que no tiene precio público —químicos, laboratorio y ' +
        'mano de obra—, que va en el artículo de mantenimiento.',
    },
    {
      tipo: 'nota',
      texto:
        'La reposición sale de suponer que la piscina pierde **4 mm de lámina ' +
        'al día** por evaporación. Y hay que decirlo con todas las letras: ' +
        '**no encontré ninguna medición colombiana publicada de evaporación en ' +
        'piscinas.** Cuatro milímetros es un orden de magnitud de ingeniería, ' +
        'no un dato nacional; la evaporación real depende de la temperatura del ' +
        'agua, la del aire, la humedad y el viento. La aritmética queda a la ' +
        'vista para que, si usted tiene una medición mejor, rehaga la cuenta.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Solo con bombeo y agua, la piscina de referencia cuesta cerca de ' +
        '**$190.000 al mes en Bogotá antes de un solo gramo de químico**. El ' +
        'desglose completo, con laboratorio, químicos y lo que exige la norma, ' +
        'está en [el costo mensual de mantener una ' +
        'piscina](/blog/mantenimiento-de-piscina-costo-mensual).',
    },
    {
      tipo: 'nota',
      texto:
        'La forma más barata de bajar ese número no es apagar la bomba: es ' +
        'cambiarla. En una bomba, el caudal es proporcional a la velocidad y la ' +
        'potencia al **cubo** de la velocidad. Hacerla girar a la mitad durante ' +
        'el doble de tiempo mueve el mismo volumen de agua con **la cuarta ' +
        'parte de la energía**. Una bomba de velocidad variable se paga sola, y ' +
        'esa cuenta sí se puede hacer con la tarifa de su recibo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo pedir una cotización que se pueda comparar' },
    {
      tipo: 'parrafo',
      texto:
        'Ocho preguntas. Si dos cotizaciones responden las ocho, se pueden ' +
        'comparar. Si no, usted no está comparando precios: está comparando ' +
        'alcances distintos con el mismo nombre.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '¿Incluye estudio de suelos y diseño estructural firmado?',
        '¿Cuántos drenajes de fondo lleva, a qué distancia entre ellos y balanceados cómo?',
        '¿Incluye el sistema de liberación de vacío y la alarma de inmersión, o van aparte?',
        '¿Cuántos m² de andén perimetral incluye y con qué acabado?',
        '¿Qué caudal mueve la bomba, con qué potencia y en cuántas horas hace un recambio completo?',
        '¿La instalación eléctrica va certificada bajo RETIE, y quién firma?',
        '¿Qué pasa si aparece agua en la excavación? ¿Está previsto o es un adicional?',
        '¿Incluye puesta en marcha, primer llenado y equilibrio químico inicial?',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La séptima es la que separa a un contratista serio del resto. Un ' +
        'presupuesto que no dice qué pasa si aparece agua es un presupuesto que ' +
        'ya decidió que ese riesgo lo asume usted. Es la misma mecánica que ' +
        'explica [por qué la obra se sale del ' +
        'presupuesto](/blog/por-que-la-obra-se-sale-del-presupuesto).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no se corrige después' },
    {
      tipo: 'lista',
      items: [
        '**El número y la separación de los drenajes.** Corregirlo obliga a vaciar, demoler fondo y reimpermeabilizar. Es el rubro que hace que las asambleas y los propietarios digan que no.',
        '**La posición del [cuarto de máquinas](/blog/cuarto-de-maquinas-de-una-piscina).** Moverlo después es tubería nueva por todo el jardín.',
        '**La profundidad y el desnivel del fondo.** Se decide en el diseño y se queda.',
        '**La orientación y el sombreado.** Deciden la temperatura del agua todos los días, y ninguna resistencia eléctrica corrige gratis un error de implantación.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien dirige esta línea en el estudio trae quince años diseñando ' +
        'sistemas hidráulicos y cuerpos de agua, y la conclusión de esos quince ' +
        'años cabe en una frase: **el precio de una piscina se decide antes de ' +
        'la primera paletada, y se paga durante veinte años.** Cotice el ' +
        'sistema, no el hueco.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Acuerdo de Junta Directiva 255 de 2026: tarifas de acueducto y alcantarillado, vigentes desde el 1.º de julio de 2026',
      editor: 'Empresa de Acueducto y Alcantarillado de Bogotá',
      url: 'https://www.acueducto.com.co/wps/portal/EAB2/Home/atencion-al-usuario/tarifas/tarifas_2026',
      fecha: '2026-07-01',
    },
    {
      titulo: 'Tarifas y costo de energía eléctrica, mercado regulado, agosto de 2026',
      editor: 'Empresas Públicas de Medellín',
      url: 'https://www.epm.com.co/clientesyusuarios/energia/tarifas-energia/',
      fecha: '2026-08-19',
    },
    {
      titulo: 'Pliego tarifario de energía eléctrica, agosto de 2026',
      editor: 'Enel Colombia',
      url: 'https://www.enel.com.co/es/personas/tarifas-energia-enel-distribucion.html',
      fecha: '2026-08-01',
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
  ],
}
