import type { Post } from '@/lib/types'
import { COTA } from './diagramas/cuarto-de-maquinas'

/**
 * Pieza troncal del eje técnico del pilar de piscinas. Las otras cuatro de esta
 * tanda —borde infinito, terraza, jacuzzi, y piscina con jacuzzi— remiten aquí,
 * porque las cuatro terminan en el mismo cuarto.
 *
 * La investigación cambió el artículo antes de escribirlo, y conviene dejarlo
 * anotado: **la Resolución 1510 de 2011 no regulaba el cuarto de máquinas.** No
 * es que lo regulara mal: no lo mencionaba una sola vez. Durante quince años, lo
 * único que decía la norma colombiana sobre el recinto que contiene toda la
 * maquinaria de una piscina era la palabra «casa de máquinas» dentro de la
 * definición de piscina de la Ley 1209. La **Resolución 929 de 2026** lo
 * reguló por primera vez, en su numeral 10.7, y ese numeral es la columna
 * vertebral de esta pieza.
 *
 * Segunda ausencia, y esta se declara dentro del artículo porque es la que más
 * se cita mal: **ni el RETIE ni la NTC 2050 exigen ventilación, grado IP ni
 * tablero exclusivo para el cuarto de máquinas de una piscina.** Lo único
 * eléctrico que exigen es drenaje. La confusión tiene origen identificado: el
 * RETIE sí tiene requisitos de «cuarto de máquinas» —tomacorriente, interruptor
 * accionable desde la puerta— pero en el numeral de **ascensores**.
 *
 * La cota de la bomba es lo único verdaderamente irreversible del tema y por eso
 * abre el artículo y se lleva el diagrama. No hay norma que la fije: es
 * ingeniería, y se presenta como ingeniería, no como obligación.
 *
 * Fechada el 30 de junio de 2026, después del RETIE vigente (23 de junio de
 * 2026), que es la fuente más reciente que cita.
 */
export const post: Post = {
  slug: 'cuarto-de-maquinas-de-una-piscina',
  titulo: 'El cuarto de máquinas: la partida que más se subestima',
  pilar: 'piscinas',
  fecha: '2025-12-12',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Se presupuesta como obra civil y es una máquina. Hasta 2026 ninguna norma ' +
    'colombiana lo regulaba; ahora sí, y exige cosas que casi ningún cuarto ' +
    'construido tiene. Más la decisión de cota que no se puede corregir después.',
  metaDescripcion:
    'Qué exige la norma colombiana al cuarto de máquinas de una piscina, qué ' +
    'debe caber en él y por qué la cota de la bomba se decide una sola vez.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'En casi todos los presupuestos de piscina que llegan a revisión, el ' +
        'cuarto de máquinas aparece como una línea de obra civil: tantos metros ' +
        'de muro, una losa, una puerta. Y así es como se subestima, porque el ' +
        'cuarto de máquinas no es un cuarto. Es el sitio donde vive la máquina ' +
        'que hace que la piscina sea una piscina y no un charco grande.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay una razón para que se haya tratado con esa ligereza durante tanto ' +
        'tiempo, y es que hasta hace unos meses **ninguna norma colombiana decía ' +
        'nada sobre él**. Eso cambió, y cambió hace poco.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo primero, porque afecta a todo lo que sigue: **la Resolución 1510 de ' +
        '2011, que es la que todavía citan casi todos los proveedores, ya no es ' +
        'el marco aplicable.** Fue sustituida por la **Resolución 929 de 2026**, ' +
        'del 12 de mayo, que adoptó los criterios técnicos constructivos y de ' +
        'seguridad en un anexo técnico. Todo lo que se afirma aquí sobre ' +
        'exigencias de norma sale de ese texto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se llama, y por qué importa cómo se llame' },
    {
      tipo: 'parrafo',
      texto:
        'Tres nombres para la misma cosa, y los tres están en uso: el oficio dice ' +
        '**cuarto de máquinas**, la ley dice **casa de máquinas** y la resolución ' +
        'nueva dice **cuarto de equipos**. No es pedantería: la palabra que use ' +
        'su contrato decide qué está pidiendo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay un detalle legal que casi nadie usa a su favor. Cuando la Ley 1209 ' +
        'define qué es una piscina, no define el hueco con agua:',
    },
    {
      tipo: 'cita',
      texto:
        'Se entenderá como piscina la estructura artificial destinada a almacenar ' +
        'agua con fines recreativos, deportivos, terapéuticos o simple baño. ' +
        'Incluye además del estanque, las instalaciones anexas, como: vestuarios, ' +
        'sanitarios, lavamanos, duchas, trampolines, plataformas de salto, casa de ' +
        'máquinas, accesorios en general y áreas complementarias.',
      fuente: 'Ley 1209 de 2008, artículo 4',
    },
    {
      tipo: 'parrafo',
      texto:
        '**La casa de máquinas es parte de la piscina desde 2008, por definición ' +
        'legal.** No es un anexo, no es una obra complementaria y no es una ' +
        'partida opcional. Un contrato de construcción de piscina que la excluya ' +
        'está excluyendo una parte de lo que la ley llama piscina, y conviene ' +
        'decirlo en esos términos cuando aparece como «adicional» a mitad de obra.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La decisión que no se puede corregir: la cota' },
    {
      tipo: 'parrafo',
      texto:
        'Antes de hablar de qué exige la norma, hay que hablar de lo que la norma ' +
        'no dice y decide más que todo lo demás: **a qué altura queda la bomba ' +
        'respecto al nivel del agua.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una bomba centrífuga no aspira aire. Puede mover agua, pero no puede ' +
        'llenarse de agua sola si tiene que subirla desde abajo. Si la bomba está ' +
        'por debajo del nivel de la piscina, el agua entra en ella por su propio ' +
        'peso y la bomba **trabaja en carga**: arranca siempre, se ceba sola y ' +
        'después de un corte de luz vuelve a funcionar sin que nadie haga nada. Si ' +
        'está por encima, hay una **altura de aspiración** que vencer, y eso ' +
        'significa cebarla a mano cada vez que pierda el agua del prefiltro.',
    },
    {
      tipo: 'diagrama',
      svg: COTA,
      titulo: 'La cota de la bomba respecto al nivel del agua',
      pie:
        'Esquema sin escala. Lo único que cambia entre los dos paneles es la ' +
        'altura de la bomba: mismo vaso, mismo filtro, mismo retorno. La carga ' +
        'disponible depende además de la distancia, del trazado y de los ' +
        'accesorios. Diagrama del estudio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La bomba por encima del agua no es un error que se note el primer día. ' +
        'Se nota al mes, cuando el sello mecánico empieza a gotear porque ha ' +
        'girado en seco unas cuantas veces; y se nota en la factura, porque una ' +
        'bomba que cavita mueve menos agua consumiendo lo mismo.',
    },
    {
      tipo: 'nota',
      texto:
        '**Esto no lo exige ninguna norma colombiana.** Ni la Resolución 929 ni ' +
        'el RETIE dicen a qué cota va la bomba. Es criterio de ingeniería, y lo ' +
        'presento como tal. Pero es criterio de ingeniería con una particularidad ' +
        'incómoda: **una vez fundido el piso del cuarto, la cota no se cambia.** ' +
        'Corregirla es demoler el cuarto y volver a hacerlo más abajo, con lo que ' +
        'eso implica en un terreno que ya tiene la piscina encima.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y va con una segunda regla, esta puramente geométrica: **cada metro de ' +
        'tubería y cada codo cuestan presión.** El cuarto de máquinas quiere estar ' +
        'cerca de la piscina y bajo. Cuando alguien lo empuja al fondo del lote ' +
        '«para que no se vea ni se oiga», está comprando ruido menor a cambio de ' +
        'una bomba más grande, un consumo mayor todos los meses y un cebado más ' +
        'difícil. Es un intercambio legítimo, pero hay que hacerlo sabiendo qué se ' +
        'está intercambiando.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué exige la norma, ahora que exige algo' },
    {
      tipo: 'parrafo',
      texto:
        'El numeral 10.7 de la Resolución 929 es corto y bastante más duro de lo ' +
        'que parece leído por encima. Esto es lo que pide, desglosado:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Exigencia', 'Qué significa en obra'],
      filas: [
        ['**Uso exclusivo**', 'No se comparte con el depósito del jardín, la lavandería ni el cuarto útil. Si guarda cosas ahí, incumple'],
        ['**Fácil circulación del personal**', 'Tiene que caber una persona trabajando, no solo los equipos'],
        ['**Dimensiones según equipos, volumen de agua y cálculo hidráulico**', 'El tamaño se calcula, no se hereda del espacio que sobró'],
        ['**Señalización de las posiciones de las válvulas**', 'Rotuladas. Quien opera no tiene que adivinar cuál cierra qué'],
        ['**Marcado de tuberías**', 'Sentido del flujo, temperatura y tipo de fluido: agua caliente, agua limpia, agua de lavado'],
        ['**Iluminación y ventilación adecuadas**', 'Adecuadas a su uso. La norma no da una cifra'],
        ['**Fácil acceso, preferiblemente por zona seca**', 'No se entra pisando el andén mojado de la piscina'],
        ['**Pisos, paredes y techos de fácil limpieza**', 'Sin humedades, sin grietas ni fisuras'],
        ['**Diagrama hidráulico del sistema, dentro del cuarto**', 'Colgado ahí. Es lo que casi nunca existe'],
        ['**Piso en pendiente hacia los drenajes**', 'Que no se empoce. Con rejillas o protectores de seguridad'],
        ['**Acceso restringido**', 'Cerrado al bañista y a cualquiera ajeno a la operación'],
        ['**Dispositivo de extinción de incendios**', 'Un extintor, dentro del cuarto'],
      ],
      nota:
        'Resolución 929 de 2026, anexo técnico, numeral 10.7 «Cuarto de equipos».',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos de esas doce merecen comentario aparte, porque son las que más se ' +
        'incumplen y las más baratas de cumplir.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**El diagrama hidráulico colgado en el cuarto.** Cuando una piscina se ' +
        'vende, cambia de administrador o simplemente se avería un domingo, lo que ' +
        'decide si el problema se resuelve en una hora o en tres días es si ' +
        'alguien sabe qué hace cada válvula. Ese diagrama cuesta lo que cuesta ' +
        'imprimirlo; no tenerlo cuesta cada vez que pasa algo.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**El uso exclusivo.** Es la exigencia que convierte en incumplimiento la ' +
        'práctica más extendida del país: el cuarto de máquinas como bodega. Y no ' +
        'es una manía reglamentaria. Un cuarto compartido es un cuarto al que ' +
        'entra gente que no sabe qué está tocando, con una bomba conectada y agua ' +
        'en el piso.',
    },
    {
      tipo: 'nota',
      texto:
        'Los productos químicos **no van en el cuarto de máquinas**. El numeral ' +
        '10.8 exige para ellos un área o espacio exclusivo y **físicamente ' +
        'separado**, ventilado, iluminado, señalizado y de acceso restringido. ' +
        'Guardar el cloro junto al tablero eléctrico es la combinación que se ve ' +
        'en nueve de cada diez piscinas y es exactamente la que la norma prohíbe: ' +
        'los vapores del hipoclorito se comen los contactos de cobre, y el ácido ' +
        'guardado al lado del cloro es un problema de otro orden.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que la norma eléctrica NO exige, y todo el mundo cree que sí' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay que declarar una ausencia, porque es la fuente de bastantes ' +
        'cotizaciones infladas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Busqué en el Libro 3 del RETIE vigente y en la sección de piscinas de la ' +
        'NTC 2050 un requisito de **ventilación forzada, grado de protección IP ' +
        'mínimo o tablero eléctrico exclusivo** para el cuarto de máquinas de una ' +
        'piscina. **No existe.** Lo único que el reglamento eléctrico le exige al ' +
        'recinto es una cosa, y es esta:',
    },
    {
      tipo: 'cita',
      texto:
        'No se deben instalar equipos eléctricos en cuartos o fosos que no tengan ' +
        'un drenaje que impida la acumulación de agua durante el funcionamiento ' +
        'normal o mantenimiento de los filtros.',
      fuente: 'RETIE, Resolución 40284 de 2026, Libro 3, numeral 3.28.4.6, literal e',
    },
    {
      tipo: 'nota',
      texto:
        'La confusión tiene un origen identificable, y vale la pena conocerlo: **el ' +
        'RETIE sí tiene requisitos para un «cuarto de máquinas» —tomacorriente, ' +
        'interruptor de alumbrado accionable desde la puerta— pero en el numeral ' +
        'de ascensores, no en el de piscinas.** Si le cotizan extractores y ' +
        'encerramientos IP65 «porque lo pide el RETIE», pida el numeral. Otra cosa ' +
        'es que ventilar el cuarto sea buena idea, que lo es, y que la Resolución ' +
        '929 sí pida ventilación «adecuada a su uso» sin decir cuánta.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que el RETIE sí exige, y es exigente, tiene que ver con la instalación ' +
        'y no con el recinto: conexión equipotencial de las partes metálicas con ' +
        'conductor de cobre no menor a **8 AWG**, protección diferencial, y tubería ' +
        'resistente al ambiente corrosivo —**sin aluminio**— donde el ambiente lo ' +
        'sea. Eso va en detalle en el artículo de [jacuzzis](/blog/jacuzzi-de-obra-o-portatil), ' +
        'donde la electricidad es el asunto central.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El paro de emergencia va afuera' },
    {
      tipo: 'parrafo',
      texto:
        'Este punto cruza dos normas y las dos apuntan en la misma dirección, así ' +
        'que no hay margen de interpretación.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La Ley 1209 exige que el paro manual de la bomba esté en **sitio visible, ' +
        'señalizado como tal y de libre acceso**. Y el RETIE exige que los medios ' +
        'de desconexión sean fácilmente accesibles, estén **al alcance de la vista ' +
        'desde el equipo** que desconectan, y a **1,5 m como mínimo** en horizontal ' +
        'desde las paredes interiores de la piscina o el jacuzzi.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Junte las dos y el resultado es incómodo para el diseño habitual: el paro ' +
        'no puede estar dentro del cuarto de máquinas con candado, que es donde ' +
        'está casi siempre. Un botón de emergencia al que hay que ir a buscar una ' +
        'llave no es un botón de emergencia.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué tiene que caber, y cuánto espacio pide cada cosa' },
    {
      tipo: 'parrafo',
      texto:
        'La lista mínima de una piscina residencial corriente, en el orden en que ' +
        'el agua los atraviesa:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Prefiltro** —la canastilla que retiene hojas y pelo antes de la bomba—. Se abre a diario en temporada, así que necesita su tapa accesible sin mover nada.',
        '**Bomba de recirculación.** Con espacio lateral para desmontarla sin cortar tubería.',
        '**Filtro.** Es la pieza que manda en las dimensiones del cuarto, y se explica abajo.',
        '**Válvula selectora o batería de válvulas**, con su rotulación.',
        '**Manómetro** en cada filtro. La norma lo exige expresamente como dispositivo de control de obstrucción.',
        '**Medidor de flujo** en la tubería de inyección, después de la filtración. También exigido.',
        '**Dosificación o electrólisis**, según el sistema de desinfección.',
        '**Calentamiento**, si lo hay, con sus holguras propias y su ventilación si es a gas.',
        '**Tablero eléctrico y control**, lo más lejos posible de cualquier vapor químico.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La pieza que decide el tamaño del cuarto es el filtro, y no por el sitio ' +
        'que ocupa sino por el sitio que necesita **alrededor**:',
    },
    {
      tipo: 'lista',
      items: [
        '**Altura libre encima.** Para abrir la tapa superior y sacar el difusor hace falta, encima del filtro, algo parecido a la altura del propio filtro. Un cuarto con la losa justo por encima del equipo es un cuarto donde el filtro no se puede abrir.',
        '**Espacio para sacarlo entero.** Un filtro de arena hay que cambiarlo alguna vez, y el medio filtrante se agota. Si el cuarto se construyó con el filtro dentro y la puerta mide sesenta centímetros, ese filtro no vuelve a salir.',
        '**Frente libre para la válvula.** La selectora se maniobra semanalmente; tiene que hacerse de pie y sin contorsiones.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La regla que resume todo esto y que no está en ninguna norma: **el cuarto ' +
        'de máquinas se dimensiona por el mantenimiento, no por los equipos.** Los ' +
        'equipos caben casi siempre. Lo que no cabe es la persona que tiene que ' +
        'trabajar en ellos, y ese es el defecto que convierte una piscina bien ' +
        'construida en una piscina mal mantenida.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los números que dimensionan la máquina' },
    {
      tipo: 'parrafo',
      texto:
        'El tamaño de la bomba y del filtro no se elige por el volumen de la ' +
        'piscina sino por el **tiempo de recirculación**: cuánto tarda el sistema ' +
        'en hacer pasar por el filtro un volumen igual al de toda el agua. La ' +
        'Resolución 929 lo fija por tipo de uso.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Tipo de estanque', 'Tiempo de recirculación', 'Veces al día', 'Circulación diaria'],
      filas: [
        ['Piscina de uso colectivo abierta al público', '4 a 6 horas', '4', '16 a 24 h/día'],
        ['Piscina de uso restringido, no abierta al público', '4 a 6 horas', '2 a 4', '8 a 24 h/día'],
        ['Piscinas infantiles o de menos de 0,6 m', '1 a 2 horas', '12', '12 a 24 h/día'],
        ['**Estructuras similares** —spas, jacuzzis, hidroterapia—', '**0,5 horas**', '**12**', '6 h/día'],
      ],
      nota:
        'Resolución 929 de 2026, anexo técnico, numeral 10, tabla n.º 1. La ' +
        'piscina de un conjunto residencial es de uso restringido. El cálculo debe ' +
        'hacerse al 100 % del volumen de agua.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Fíjese en la última fila, porque decide un artículo entero: **un jacuzzi ' +
        'pide media hora de recirculación y una piscina pide entre cuatro y seis.** ' +
        'Son sistemas distintos por norma, no por gusto. Lo que eso implica cuando ' +
        'alguien quiere las dos cosas con una sola máquina está en ' +
        '[piscina y jacuzzi juntos](/blog/piscina-y-jacuzzi-juntos).',
    },
    {
      tipo: 'parrafo',
      texto: 'Y el resto de los números que fija la norma para la instalación:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué', 'Valor', 'Numeral'],
      filas: [
        ['Velocidad máxima en la línea de presión o retorno', '2,4 m/s', '10.1'],
        ['Velocidad máxima en la línea de succión', '1,8 m/s', '10.1'],
        ['Diámetro máximo de tubería', '8 pulgadas', '10.1'],
        ['Prueba de estanqueidad de tuberías', 'No debe superar 21 PSI (1,5 bar)', '10.1'],
        ['Velocidad de filtración, uso colectivo abierto al público', '20 a 40 m³/h/m²', '10.2'],
        ['Velocidad de filtración, uso restringido', 'no debe superar 50 m³/h/m²', '10.2'],
        ['Turbidez que debe garantizar la filtración', 'máximo 3 NTU en todo momento', '10.2'],
        ['Separación mínima entre desagües sumergidos', '0,90 m', '7'],
        ['Área de la cubierta antiatrapamiento', 'al menos 4 veces el área de la tubería de descarga', '7'],
      ],
      nota:
        'Resolución 929 de 2026, anexo técnico. Los numerales son los del anexo, ' +
        'no los del articulado.',
    },
    {
      tipo: 'nota',
      texto:
        'Un requisito nuevo que cambia la recepción de obra: la resolución exige ' +
        'al constructor **pruebas de recirculación con tintes antes de entregar**, ' +
        'con registro audiovisual. Si el colorante revela mezcla inadecuada a los ' +
        'veinte minutos, hay que ajustar el sistema. Es la primera vez que la ' +
        'norma colombiana obliga a **demostrar** que el agua circula, en vez de ' +
        'suponerlo porque la bomba enciende.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El ruido, que es el motivo real de las quejas' },
    {
      tipo: 'parrafo',
      texto:
        'Una bomba de piscina funciona entre cuatro y ocho horas diarias, y si el ' +
        'sistema es de agua caliente o hay jacuzzi, más. En una casa se oye; en ' +
        'una copropiedad se oye y además se reclama.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La tentación es alejar el cuarto, y ya vimos lo que cuesta. Las salidas ' +
        'que no penalizan la hidráulica son otras: apoyar la bomba sobre una base ' +
        'con material elastomérico en vez de anclarla rígida a la losa, meter ' +
        'uniones flexibles en la succión y la impulsión para que la vibración no ' +
        'viaje por la tubería, y programar la filtración fuera del horario de ' +
        'sueño. Ninguna es cara si se decide antes; todas son incómodas después.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Diez preguntas antes de aceptar el cuarto' },
    {
      tipo: 'parrafo',
      texto:
        'Sirven para revisar un proyecto en planos y para recibir una obra ' +
        'terminada. Si alguna se responde que no, hay algo que corregir mientras ' +
        'todavía es barato:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '¿La bomba queda por debajo del nivel del agua de la piscina?',
        '¿Cabe una persona trabajando, o solo caben los equipos?',
        '¿Hay altura libre encima del filtro para abrirlo?',
        '¿Cabe el filtro por la puerta, con el filtro montado?',
        '¿El piso tiene pendiente y drenaje, y el drenaje tiene rejilla?',
        '¿Los químicos están en un recinto físicamente separado?',
        '¿Las válvulas están rotuladas y las tuberías marcadas con el sentido del flujo?',
        '¿Está colgado el diagrama hidráulico del sistema?',
        '¿El paro de emergencia está afuera, a la vista, señalizado y sin llave?',
        '¿Hay extintor dentro del cuarto?',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánto pesa esta partida' },
    {
      tipo: 'parrafo',
      texto:
        'No voy a dar cifras aquí, y no por prudencia sino por reparto: el costo ' +
        'de una piscina y su costo mensual se tratan en ' +
        '[cuánto cuesta una piscina](/blog/cuanto-cuesta-una-piscina-en-colombia). Lo que sí ' +
        'corresponde decir en este artículo es de qué se compone la subestimación, ' +
        'porque es siempre la misma:',
    },
    {
      tipo: 'lista',
      items: [
        'Se presupuesta el **recinto** y no la **máquina**: muros y losa, sin equipos ni montaje.',
        'Se dimensiona por lo que sobró de espacio y luego hay que ampliarlo, que es obra dos veces.',
        'Se olvida la acometida eléctrica hasta el cuarto, que suele ser la línea más larga del proyecto.',
        'Se olvida el recinto separado de químicos, que ahora es obligatorio.',
        'Se olvida el drenaje del piso, que si no se dejó fundido se resuelve rompiendo.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La comprobación que le ahorra la discusión entera: **pida el diagrama ' +
        'hidráulico y el cálculo del tiempo de recirculación antes de firmar.** Si ' +
        'quien le vende la piscina no los tiene, no está dimensionando el sistema; ' +
        'está eligiendo una bomba por el tamaño del vaso, que es como se hace ' +
        'cuando no se calcula.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por qué escribimos esto' },
    {
      tipo: 'parrafo',
      texto:
        'Quien dirige esta línea en el estudio trae quince años diseñando sistemas ' +
        'hidráulicos y cuerpos de agua: plantas de agua potable y residuales, ' +
        'piscinas y juegos acuáticos en Bogotá entre 2007 y 2012, y entre 2019 y ' +
        '2022 piscinas de borde infinito, spas y cascadas con sus sistemas de ' +
        'fondo —redes de tubería, plantas de filtración, bombas y cuartos de ' +
        'máquinas— en Bahamas, Bermuda, Turks & Caicos y Miami.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De esa experiencia sale la única conclusión que de verdad importa aquí: ' +
        'las piscinas que dan problemas rara vez los dan por el vaso. Los dan por ' +
        'lo que está detrás de esa puerta.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'seguridad'],
  fuentes: [
    {
      titulo:
        'Resolución 929 de 2026, criterios técnicos constructivos y de seguridad para piscinas y estructuras similares',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0929-de-2026.pdf',
      fecha: '2026-05-12',
    },
    {
      titulo: 'RETIE, Resolución 40284 de 2026, Libro 3 — Instalaciones',
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
    {
      titulo: 'Decreto 780 de 2016, decreto único reglamentario del sector salud (libro 2, parte 8, título 7)',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
      fecha: '2016-05-06',
    },
  ],
}
