import type { Post } from '@/lib/types'

/**
 * La pieza que cierra el eje de dinero del pilar, y la que se construye de
 * abajo hacia arriba: **desde los pliegos tarifarios, no desde una
 * cotización**. Es la única forma de dar una cifra mensual que no dependa de
 * quién la vende.
 *
 * Lo que tiene precio público se publica con su empresa y su mes —energía de
 * Enel y de EPM de agosto de 2026, agua de la EAAB vigente desde julio de
 * 2026—. Lo que no lo tiene se declara: **no existe lista de precios oficial
 * de químicos, de analítica de laboratorio ni de mano de obra de piscinas en
 * Colombia**, y en vez de inventarla se da lo que sí sirve, que es qué exigir
 * en el desglose.
 *
 * Las horas de bombeo salen de la **Resolución 929 de 2026**, anexo técnico,
 * numeral 10, tabla n.º 1, que supera materialmente a la Resolución 1510 de
 * 2011 sobre la que se escribió la primera versión de esta pieza. Y el cambio
 * obliga a un matiz nuevo: **la 929 ya no le fija tiempo de recirculación a la
 * piscina de una casa** —su artículo 2 alcanza al uso colectivo abierto al
 * público y al uso restringido no abierto al público, y deja la piscina de
 * propiedad privada unihabitacional con las normas mínimas de seguridad de la
 * Ley 1209—, pero para la que sí alcanza fija además la **circulación diaria**,
 * que la 1510 no fijaba. Es decir: donde antes había que declarar las horas
 * como práctica, ahora hay una banda de norma para el conjunto residencial y un
 * vacío declarado para la casa.
 *
 * Dos tensiones normativas reales se declaran sin resolverlas de más:
 *
 * - El salvavidas: la Resolución 929, numeral 12.3, pide personal salvavidas
 *   durante todo el horario de prestación del servicio y uno por cada veinte
 *   menores de catorce años en condominios y conjuntos residenciales; el
 *   reglamento de la Ley 1209 acota la exigencia de la unidad residencial a
 *   cuatro situaciones y activa el salvavidas por encima de **diez** menores.
 *   Una es resolución y la otra es ley, y aquí se dice cuál es cuál en vez de
 *   fingir que concuerdan.
 * - El valor en pesos del salario mínimo de 2026 quedó en litigio, así que el
 *   costo de personal se expresa en salarios mínimos — igual que la pieza de la
 *   Ley 1209 hace con las multas, y por la misma razón.
 *
 * Fechado el 31 de agosto de 2026, después del pliego de EPM del 19 de agosto.
 * Lleva `actualizado` porque se reindexa por trimestre.
 */
export const post: Post = {
  slug: 'mantenimiento-de-piscina-costo-mensual',
  titulo: 'Mantenimiento de piscina: el costo mensual real',
  pilar: 'piscinas',
  fecha: '2026-08-31',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'La mayoría de los propietarios descubre este número después de firmar. ' +
    'Aquí está calculado desde los pliegos tarifarios de agua y energía, con ' +
    'lo que sí tiene precio público separado de lo que no lo tiene — y con lo ' +
    'que la norma obliga a hacer todos los días.',
  metaDescripcion:
    'Cuánto cuesta mantener una piscina al mes en Colombia: bombeo, agua, ' +
    'químicos y laboratorio, calculado desde las tarifas oficiales de 2026.',
  puerta: 'diagnostico-de-edificaciones',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'administrador', 'costos', 'propiedad-horizontal'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Casi todo el mundo pregunta cuánto cuesta construir la piscina y casi ' +
        'nadie pregunta cuánto cuesta tenerla. Es al revés de como debería ser: ' +
        'la construcción se paga una vez y el mantenimiento se paga todos los ' +
        'meses durante veinte años.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Este artículo calcula ese número desde donde se puede calcular: **los ' +
        'pliegos tarifarios de agua y de energía**, que son públicos, llevan ' +
        'fecha y no los escribe nadie con interés en venderle nada. Y separa ' +
        'con claridad lo que sí tiene precio público de lo que no lo tiene, ' +
        'porque juntarlo todo en una sola cifra es exactamente como se pierde ' +
        'la pista de dónde se va el dinero.',
    },
    {
      tipo: 'nota',
      texto:
        'Todas las cuentas salen de la misma piscina, para que se puedan ' +
        'seguir y rehacer: **8 × 4 m, profundidad media de 1,40 m; 32 m² de ' +
        'lámina de agua y 45 m³**. Si la suya es distinta, la regla de tres es ' +
        'suya. El costo de construirla está en [cuánto cuesta una piscina en ' +
        'Colombia](/blog/cuanto-cuesta-una-piscina-en-colombia).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que sí tiene precio público' },
    {
      tipo: 'parrafo',
      texto:
        'Son dos cosas —bombeo y agua— y entre las dos suelen ser la mitad del ' +
        'gasto mensual. Las horas de bombeo no son un invento: a la piscina de ' +
        'un conjunto residencial la norma le pide un **recambio completo cada 4 ' +
        'a 6 horas**, de dos a cuatro veces al día, con una **circulación ' +
        'diaria de entre 8 y 24 horas**. Tomo el piso de esa banda. Con una ' +
        'bomba de 1 HP —0,75 kW— trabajando ocho horas diarias salen 180 kWh al ' +
        'mes.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Concepto', 'Cómo sale', 'Al mes'],
      filas: [
        ['**Bombeo, Bogotá (estrato 4)**', '180 kWh × $863,61', '**$155.449**'],
        ['**Bombeo, Medellín (estrato 4)**', '180 kWh × $960,34', '**$172.861**'],
        ['**Bombeo, Medellín (estratos 5 y 6)**', '180 kWh × $1.152,41', '$207.434'],
        ['**Reposición de agua, Bogotá**', '3,84 m³ × $8.302,41', '$31.881'],
        ['**Retrolavado del filtro**', 'Depende del filtro y de la frecuencia', 'Cada m³ se paga **dos veces**: como agua y como alcantarillado'],
      ],
      nota:
        'Energía: pliegos de agosto de 2026 de Enel Colombia y de EPM, nivel de ' +
        'tensión 1 y activos de la empresa. Agua: tarifa de acueducto y ' +
        'alcantarillado de Bogotá vigente desde el 1.º de julio de 2026, ' +
        'estrato 4 — $3.231,15 más $5.071,26 por metro cúbico.',
    },
    {
      tipo: 'nota',
      texto:
        'La reposición supone una evaporación de **4 mm diarios**, y hay que ' +
        'decirlo: **no encontré ninguna medición colombiana publicada de ' +
        'evaporación en piscinas.** Es un orden de magnitud de ingeniería. Sube ' +
        'con la temperatura del agua y con el viento, y baja mucho con una ' +
        'cubierta flotante. Con su propia medición, la cuenta se rehace en dos ' +
        'líneas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con eso solo, la piscina de referencia va por **unos $187.000 ' +
        'mensuales en Bogotá antes de un solo gramo de químico** y antes de ' +
        'pagarle a nadie. Ese es el piso, y es un piso que no se negocia con ' +
        'ningún proveedor porque no se lo paga a un proveedor.',
    },
    {
      tipo: 'nota',
      texto:
        'Un matiz que decide a quién le aplica todo esto: **la norma técnica ' +
        'de piscinas alcanza a la de uso colectivo y a la de uso restringido ' +
        '—la del conjunto—, y deja a la piscina de una casa únicamente con las ' +
        'normas mínimas de seguridad de la Ley 1209.** Así que la banda de 8 a ' +
        '24 horas de circulación diaria es obligación para el conjunto y ' +
        'referencia para la casa. Si la piscina es suya y de nadie más, nadie ' +
        'le va a exigir esas horas; la física del agua, en cambio, sí.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no tiene precio público, y por qué' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está la otra mitad del gasto, y aquí este artículo se detiene en ' +
        'seco: **no existe en Colombia una lista de precios oficial ni gremial ' +
        'de químicos de piscina, de analítica de laboratorio ni de mano de obra ' +
        'de mantenimiento.** Publicar una cifra sería copiar la de un proveedor ' +
        'y presentarla como dato.',
    },
    {
      tipo: 'lista',
      items: [
        '**Químicos.** Desinfectante, corrector de pH, alguicida, floculante y estabilizador. El consumo depende de la temperatura, del uso, del sol y de la calidad del agua de llenado; dos piscinas iguales en dos climas distintos gastan muy distinto.',
        '**Analítica de laboratorio.** Es obligatoria y es mensual, más un análisis anual. No es opcional y no la reemplaza el kit de tirillas.',
        '**Mano de obra.** Barrido, cepillado, limpieza de canastillas, retrolavado y control diario. Puede ser propia o contratada.',
        '**Repuestos y consumibles.** Arena o cartuchos del filtro, sellos y rodamientos de la bomba, celda si el sistema es de sal, y reposición de rejillas.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Lo que sí se puede exigir, y es lo que de verdad protege: **que la ' +
        'cotización de mantenimiento venga desglosada en esos cuatro renglones, ' +
        'con cantidades y no solo con un precio mensual.** Un contrato que dice ' +
        '«mantenimiento integral: tanto al mes» no permite saber si el ' +
        'laboratorio está incluido, y el laboratorio es justamente lo primero ' +
        'que desaparece cuando alguien compite por precio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que la norma obliga a hacer, y cada cuánto' },
    {
      tipo: 'parrafo',
      texto:
        'Estas frecuencias son la parte de la norma que más se incumple, y la ' +
        'que un inspector verifica en dos minutos:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué se mide', 'Cada cuánto', 'Qué cuesta'],
      filas: [
        ['Cloro residual libre, pH, temperatura', '**Diario**, al inicio de la jornada y en horas de máxima ocupación', 'Equipo propio y tiempo de alguien, todos los días'],
        ['Materias orgánicas flotantes y sedimentos', 'Diario', 'Inspección visual: no cuesta, pero hay que hacerla'],
        ['Turbidez, oxidación-reducción, sólidos disueltos, conductividad', '**Trimestral**, en horas de máxima ocupación', 'Laboratorio'],
        ['Heterótrofos, coliformes termotolerantes, *E. coli*', '**Trimestral**, en horas de máxima ocupación', 'Laboratorio'],
        ['*Legionella*', 'Trimestral y al inicio de la jornada', 'Laboratorio, solo si la piscina es climatizada o aerosolizada'],
        ['*Cryptosporidium* y *Giardia lamblia*', '**Por evento de contaminación fecal**', 'Laboratorio, imprevisible: hay que tener la partida reservada'],
      ],
      nota:
        'Resolución 234 de 2026, anexo técnico I. Dos cosas que mueven el ' +
        'presupuesto: en temporada alta **la frecuencia trimestral pasa a ' +
        'mensual**, y el análisis de *Cryptosporidium* ya no es una cita anual ' +
        'sino una respuesta a un incidente, que llega cuando llega.',
    },
    {
      tipo: 'nota',
      texto:
        'Y cuatro obligaciones que casi ninguna piscina cumple y que no cuestan ' +
        'casi nada. El **libro o registro sistematizado**, que ahora pide más ' +
        'de lo que se suele anotar: volumen y caudal, químicos usados, ' +
        'retrolavados, averías, **volumen de agua de reposición**, **horas de ' +
        'funcionamiento**, número de bañistas y el cálculo del índice de ' +
        'Langelier. La **publicación mensual de los resultados de laboratorio ' +
        'en lugar visible**, que es una cartelera junto a la piscina. Que el ' +
        'laboratorio **demuestre la validación o verificación de sus ' +
        'metodologías**. Y la **ficha técnica y la hoja de seguridad** de cada ' +
        'producto químico, con etiquetado del sistema globalmente armonizado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El salvavidas: dónde se gasta de más y dónde de menos' },
    {
      tipo: 'parrafo',
      texto:
        'En una copropiedad este es el renglón mayor del mantenimiento, y es ' +
        'donde más plata se gasta de más. La regla, verificada con el ' +
        'articulado en la mano, es que **la unidad residencial necesita ' +
        'salvavidas certificado solo en cuatro situaciones**: fines de semana, ' +
        'vacaciones escolares, eventos que involucren menores de catorce años, ' +
        'y siempre que haya más de diez menores a la vez. No de lunes a ' +
        'viernes por defecto.',
    },
    {
      tipo: 'nota',
      texto:
        'Hay una tensión normativa real que conviene conocer antes de discutir ' +
        'un presupuesto, y la norma nueva la agranda. La Resolución 929 de ' +
        '2026 pide **personal salvavidas durante todo el horario de prestación ' +
        'del servicio**, uno por cada estanque de hasta 312 m² de lámina, y ' +
        '**uno por cada veinte menores de catorce años en condominios, ' +
        'conjuntos residenciales y propiedad horizontal**. El reglamento de la ' +
        'Ley 1209 acota la obligación de la unidad residencial a esas cuatro ' +
        'situaciones y activa el salvavidas por encima de **diez** menores. Una ' +
        'es resolución y la otra es ley, y no dicen lo mismo. Es del mismo tipo ' +
        'que la tensión de los drenajes, explicada en [qué obliga de verdad la ' +
        'Ley 1209](/blog/ley-1209-piscinas-copropiedad).',
    },
    {
      tipo: 'nota',
      texto:
        'El costo se expresa aquí en **salarios mínimos** y no en pesos, a ' +
        'propósito: el valor en pesos del salario mínimo de 2026 quedó en ' +
        'discusión judicial, y una cifra que se mueve por decisión de un ' +
        'tribunal no es un buen ancla para un presupuesto. Un salvavidas ' +
        'certificado cuesta, como piso, un salario mínimo más prestaciones y ' +
        'aportes; si es por horas de fin de semana, la cuenta es proporcional.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las cuatro cosas que nadie presupuesta' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Probar el sistema de liberación de vacío.** Es el dispositivo de seguridad más propenso a fallar en silencio, porque depende de calibración y de que nadie lo haya puenteado.',
        '**Reponer cubiertas antiatrapamiento.** Se rompen, se roban y se degradan con el cloro y el sol. Una rejilla faltante no es un defecto estético: reabre el riesgo entero.',
        '**El vaciado, y sobre todo su vertimiento.** Vaciar la piscina cuesta el agua de volver a llenarla —$373.608 en Bogotá, estrato 4— y, si no hay alcantarillado, el vertimiento es un trámite ambiental antes que una decisión de mantenimiento.',
        '**La renovación de la impermeabilización y del acabado.** Tienen vida útil. Un presupuesto de mantenimiento que no reserva nada para esto está corriendo la cuenta hacia adelante, no ahorrando.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La primera merece un párrafo aparte: **ninguna norma colombiana exige ' +
        'una prueba periódica del sistema de liberación de vacío.** No hay ' +
        'frecuencia, no hay protocolo, no hay registro obligatorio. Es, a mi ' +
        'juicio, el punto ciego más grave del régimen, y la respuesta sensata ' +
        'es no esperar a que lo obliguen: póngale una frecuencia usted, ' +
        'anótela en el libro de registro y quede con la constancia.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo bajar el costo sin incumplir' },
    {
      tipo: 'lista',
      items: [
        '**Cubra la lámina.** Es la única medida que baja a la vez el agua de reposición, la energía de calentamiento y el consumo de químico, porque menos agua nueva es menos desequilibrio.',
        '**Cambie la bomba antes que las horas.** En una bomba el caudal es proporcional a la velocidad y la potencia al **cubo** de la velocidad: girar a la mitad el doble de tiempo mueve el mismo volumen con la cuarta parte de la energía.',
        '**Revise la pérdida de carga.** Un filtro sucio, una tubería subdimensionada o una canastilla obstruida hacen que la bomba trabaje más para mover lo mismo. Se paga en el recibo todos los días.',
        '**Controle el pH antes que el cloro.** Con el pH fuera de rango, el desinfectante pierde eficacia y se consume más producto para el mismo resultado.',
        '**Ajuste el salvavidas al calendario que exige la ley**, ni un día más ni uno menos. Es donde muchas copropiedades gastan de más mientras incumplen otra cosa.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Lo que **no** es una forma de bajar el costo: apagar la bomba días ' +
        'enteros, saltarse el laboratorio mensual, comprar químico sin registro ' +
        'sanitario, o dosificar a ojo. Las cuatro salen baratas el primer mes y ' +
        'caras el día que hay una inspección o un accidente.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo leer un contrato de mantenimiento' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '¿Cuántas visitas al mes y de cuántas horas?',
        '¿Los químicos están incluidos o se facturan aparte? ¿Con qué registro sanitario?',
        '¿Incluye el análisis de laboratorio mensual y el anual, y en qué laboratorio?',
        '¿Quién lleva el libro de registro y dónde queda?',
        '¿Quién publica los resultados en cartelera cada mes?',
        '¿Qué pasa si el análisis sale fuera de norma? ¿Quién asume la corrección?',
        '¿Incluye la prueba de los dispositivos de seguridad, y con qué frecuencia?',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La sexta pregunta es la que separa un contrato de mantenimiento de ' +
        'una visita de limpieza. Y si la piscina es de copropiedad, la ' +
        'conversación no termina en el contrato: termina en la asamblea, y esa ' +
        'conversación —con la responsabilidad del administrador de por medio— ' +
        'está en [qué obliga de verdad la Ley ' +
        '1209](/blog/ley-1209-piscinas-copropiedad).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien dirige esta línea en el estudio trae quince años diseñando ' +
        'sistemas hidráulicos y cuerpos de agua, y lo que ese tiempo enseña ' +
        'sobre mantenimiento es incómodo y sencillo: **casi todo el costo ' +
        'mensual de una piscina se decidió en el diseño.** El diámetro de la ' +
        'tubería, la distancia al ' +
        '[cuarto de máquinas](/blog/cuarto-de-maquinas-de-una-piscina), el ' +
        'tamaño del filtro y la orientación deciden lo que usted va a pagar ' +
        'cada mes durante veinte años. Después solo se administra lo que ya ' +
        'quedó decidido.',
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
      titulo: 'Pliego tarifario de energía eléctrica, agosto de 2026',
      editor: 'Enel Colombia',
      url: 'https://www.enel.com.co/es/personas/tarifas-energia-enel-distribucion.html',
      fecha: '2026-08-01',
    },
    {
      titulo:
        'Acuerdo de Junta Directiva 255 de 2026: tarifas de acueducto y alcantarillado, vigentes desde el 1.º de julio de 2026',
      editor: 'Empresa de Acueducto y Alcantarillado de Bogotá',
      url: 'https://www.acueducto.com.co/wps/portal/EAB2/Home/atencion-al-usuario/tarifas/tarifas_2026',
      fecha: '2026-07-01',
    },
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
