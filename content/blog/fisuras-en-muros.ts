import type { Post } from '@/lib/types'
import { ANCHOS, APERTURA, PATRONES } from './diagramas/fisuras'

/**
 * Primera pieza del pilar de patologías, y la de ciclo de venta más corto del
 * sitio: quien busca esto tiene el problema hoy.
 *
 * Tres decisiones de fondo, las tres verificadas contra fuente antes de
 * escribir:
 *
 * 1. **El corte entre fisura y grieta va en 0,2 mm, no en 1 mm.** El milímetro
 *    que repite media web colombiana no tiene respaldo normativo localizable;
 *    en la guía oficial, 1,0 mm es la frontera entre daño leve y moderado, que
 *    es otra cosa. Corregirlo de frente es lo que da autoridad.
 * 2. **No se explota el sismo.** Nada de urgencia fabricada. Las mejores frases
 *    del artículo empujan contra el alarmismo y son todas citables de fuente
 *    oficial.
 * 3. **Se dice con claridad qué puede firmar un arquitecto y qué no.** El
 *    veredicto estructural es de un ingeniero estructural, un geotecnista o un
 *    patólogo. Decirlo sube la conversión: es la diferencia entre alguien que
 *    sabe dónde está su límite y alguien que no.
 *
 * Ilustrado con diagramas y no con fotografías a propósito: una foto enseña una
 * fisura; el patrón solo se ve dibujado.
 */
export const post: Post = {
  slug: 'fisuras-en-muros',
  titulo: 'Fisuras en muros: cuáles son peligrosas y cuáles no',
  pilar: 'patologias',
  fecha: '2026-03-27',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'El ancho no es lo único que importa, y el umbral que repite media ' +
    'internet está mal. Cómo se lee una fisura con los criterios de la guía ' +
    'técnica colombiana: qué la causó, cuándo hay que llamar a alguien y qué ' +
    'no se puede saber mirando.',
  metaDescripcion:
    'Cómo distinguir una fisura peligrosa de una que no lo es, con los ' +
    'umbrales oficiales colombianos por tipo de muro.',
  puerta: 'diagnostico-de-edificaciones',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Desde el sismo del 10 de agosto, mucha gente en Colombia está mirando ' +
        'las paredes de su casa por primera vez con atención. Y lo primero que ' +
        'encuentra al buscar es una cifra: que por debajo de un milímetro no ' +
        'pasa nada y por encima hay que preocuparse.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esa cifra no tiene respaldo. No aparece en la norma colombiana, ni en ' +
        'la guía técnica que usan los evaluadores, ni en la literatura ' +
        'internacional. Y sobre todo: **el ancho no es lo primero que se mira**. ' +
        'Dos fisuras del mismo milímetro pueden ser una cosa sin importancia o ' +
        'una razón para no dormir ahí, según dónde estén, qué forma tengan y ' +
        'hacia dónde se abran.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esto es lo que sí dicen las fuentes, y cómo se lee una fisura con ' +
        'ellas en la mano.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Fisura o grieta: el corte está en 0,2 mm' },
    {
      tipo: 'parrafo',
      texto:
        'La [Guía Técnica para la Inspección de Edificaciones después de un ' +
        'Sismo](https://asosismica.org.co/documentacion-evaluacion-post-sismo/), ' +
        'que elaboró la Asociación Colombiana de Ingeniería Sísmica para el ' +
        'IDIGER, usa las dos palabras de forma consistente: habla de *fisuras* ' +
        'por debajo de 0,2 mm y de *grietas* o *agrietamiento* por encima.',
    },
    {
      tipo: 'diagrama',
      svg: ANCHOS,
      titulo: 'Los tres anchos que gobiernan la escala oficial',
      pie: 'Los tres trazos son comparables entre sí, no una medida real: a 0,2 mm no se vería nada en pantalla. Una fisura de 0,2 mm es del grosor de un cabello; a 3 mm cabe la punta de un lápiz.',
    },
    {
      tipo: 'nota',
      texto:
        'De dónde sale el milímetro que circula: en esa misma guía, 1,0 mm es ' +
        'la frontera entre **daño leve y daño moderado**. Es un umbral real, ' +
        'pero mide otra cosa —cuánto daño hay— y no dónde deja de llamarse ' +
        'fisura. En algún punto los dos criterios se mezclaron y quedó un ' +
        'número redondo repitiéndose sin fuente.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los umbrales cambian según el material' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que casi nunca se cuenta, y es la que de verdad ' +
        'sirve: **un mismo ancho significa cosas distintas según dónde esté**. ' +
        'El concreto es más exigente que la mampostería, y el bahareque, el ' +
        'adobe y la tapia son más tolerantes que los dos.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Nivel de daño', 'Concreto reforzado', 'Mampostería', 'Adobe y tapia'],
      filas: [
        ['Ninguno o muy leve', 'menos de 0,2 mm', 'menos de 0,2 mm', 'menos de 0,4 mm'],
        ['Leve', '0,2 a 1,0 mm', '0,2 a 1,0 mm', '0,4 a 2,0 mm'],
        ['Moderado', '1,0 a 2,0 mm', '1,0 a 3,0 mm', '2,0 a 4,0 mm'],
        ['Fuerte', 'se ve la varilla', 'más de 3,0 mm', 'más de 4,0 mm'],
        ['Severo', 'concreto aplastado, varilla pandeada', 'piezas desprendidas, muro desplomado', 'desplazamiento fuera del plano'],
      ],
      nota:
        'Guía Técnica AIS–IDIGER, cuarta edición. A partir de «fuerte», la ' +
        'escala deja de medir milímetros y pasa a describir lo que se ve: ' +
        'la varilla, el aplastamiento, el desplome.',
    },
    {
      tipo: 'nota',
      texto:
        'Fíjese en que la columna de concreto reforzado **cambia de criterio** ' +
        'en el nivel fuerte: las tres primeras filas miden un ancho y la cuarta ' +
        'mira si asoma la varilla. Eso deja un tramo sin fila propia — una ' +
        'fisura de más de 2 mm en concreto, sin varilla a la vista, no cae en ' +
        'ninguna—. Mientras un ingeniero no diga otra cosa, trátela como el ' +
        'nivel siguiente.',
    },
    {
      tipo: 'nota',
      texto:
        'Un matiz de honestidad que conviene declarar: estos umbrales son ' +
        'criterios de **evaluación de daño después de un sismo**. No encontré ' +
        'ningún criterio colombiano publicado de ancho de fisura para patología ' +
        'ordinaria. Usarlos fuera de ese contexto es una extrapolación ' +
        'razonable, pero es una extrapolación.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué la causó: el patrón lo dice' },
    {
      tipo: 'parrafo',
      texto:
        'Antes que el ancho, la forma. Cinco causas producen cinco dibujos ' +
        'distintos, y distinguirlos es lo que separa una reparación que ' +
        'resuelve de una que hay que repetir en dos años.',
    },
    {
      tipo: 'diagrama',
      svg: PATRONES,
      titulo: 'Cinco causas, cinco patrones de fisura',
      pie: 'El dibujo de la fisura dice más que su ancho. Diagrama del estudio.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Retracción: la más común y la menos grave' },
    {
      tipo: 'parrafo',
      texto:
        'El mortero y el concreto se encogen al secar. Si algo los restringe ' +
        '—y siempre hay algo—, fisuran. Son **verticales, bastante regulares, y ' +
        'aparecen en los puntos débiles**: a media altura de un vano, o cada ' +
        'cierto tramo en un muro largo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Aparecen en las primeras semanas y siguen abriéndose durante uno o dos ' +
        'años, hasta que se estabilizan. Ese es el dato tranquilizador y también ' +
        'el criterio de diagnóstico: **la retracción se estabiliza sola; el ' +
        'asentamiento no**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si la superficie tiene un mapeo fino, tipo piel de cocodrilo, el ' +
        '[ACI 224.1R](https://www.concrete.org/store/productdetail.aspx?ItemID=224107) ' +
        'lo atribuye a que la capa superficial llevaba más agua que el interior. ' +
        'Traducido a obra: le echaron agua a la mezcla para trabajarla más ' +
        'fácil. Es un defecto de ejecución, no de estructura.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Asentamiento: la escalonada, y hacia dónde se abre' },
    {
      tipo: 'parrafo',
      texto:
        'Cuando una parte del cimiento baja, el muro se parte en diagonal ' +
        'siguiendo las juntas de mortero, en escalón. Suele salir de una esquina ' +
        'y afectar dos muros a la vez. Y tiene una señal que la delata: ' +
        '**cruza el zócalo y baja hasta el cimiento**, en vez de quedarse ' +
        'arriba.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El detalle más útil de todo el artículo, y el que casi nadie mira, es ' +
        'de qué extremo es más ancha.',
    },
    {
      tipo: 'diagrama',
      svg: APERTURA,
      titulo: 'La dirección de apertura de la fisura',
      pie: 'El extremo ancho señala el lado que se movió. Criterio del manual IS SP 25 del Bureau of Indian Standards.',
    },
    {
      tipo: 'lista',
      items: [
        '**Ancha arriba y afinándose hacia abajo:** el suelo se está hundiendo. Cimentación superficial, arcilla que se seca, un árbol grande cerca chupando humedad.',
        '**Ancha abajo y afinándose hacia arriba:** el suelo está subiendo. Arcilla que se rehidrata —clásico después de talar un árbol viejo—, o raíces empujando por debajo.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'El muro gira como una viga muy alta alrededor de la parte que sigue ' +
        'firme, y la grieta se abre por donde el material queda traccionado. Por ' +
        'eso el extremo ancho apunta siempre al lado que se movió.',
    },
    {
      tipo: 'nota',
      texto:
        'Y una advertencia que la propia fuente subraya: una fisura de ' +
        'asentamiento **no se rellena con material rígido** hasta que se haya ' +
        'corregido lo que produce el movimiento. Si no, vuelve.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Térmica: horizontal, en el último piso' },
    {
      tipo: 'parrafo',
      texto:
        'La losa de cubierta recibe sol directo, se calienta mucho más por ' +
        'arriba que por abajo, se arquea y empuja hacia afuera. El muro de abajo ' +
        'pierde. El resultado es una **fisura horizontal justo en la unión entre ' +
        'el muro y la losa**, y una señal inconfundible: por fuera se ve por ' +
        'encima del nivel de la losa y por dentro por debajo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos cosas la identifican sin discusión. La primera es que **solo pasa ' +
        'en el último piso**: en los de abajo, el peso de lo que hay encima ' +
        'impide que el borde de la losa se levante. La segunda es que ' +
        '**se abre y se cierra con la temperatura del día**. Ninguna otra causa ' +
        'hace eso.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La solución de fondo no es tapar: es aislar o proteger la losa por ' +
        'encima. Reparada con mortero rígido, esta fisura reaparece.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Cortante: la diagonal en equis' },
    {
      tipo: 'parrafo',
      texto:
        'Es la del sismo. La estructura se desplaza en horizontal y el muro, que ' +
        'es rígido, se opone hasta que se raja en diagonal —y como el movimiento ' +
        'va y vuelve, aparecen las dos diagonales cruzadas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay una distinción que sirve para saber qué falló primero: si la ' +
        'grieta **va escalonada por las juntas**, el mortero era más débil que el ' +
        'ladrillo; si va **casi recta partiendo las piezas**, el ladrillo era más ' +
        'débil que el mortero.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En un muro divisorio que solo divide, esto es daño no estructural: ' +
        'molesto, reparable, y sin riesgo de que el edificio se caiga. Pero deja ' +
        'de serlo cuando el muro empieza a salirse de su plano, o cuando el ' +
        'agrietamiento se prolonga hacia las columnetas y las vigas que lo ' +
        'confinan. Eso último es el salto: la grieta pasó del relleno al ' +
        'esqueleto.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Corrosión: la línea paralela a la varilla' },
    {
      tipo: 'parrafo',
      texto:
        'El acero dentro del concreto está protegido mientras el medio siga ' +
        'siendo alcalino. Cuando deja de serlo, se oxida; el óxido ocupa más ' +
        'volumen que el metal y revienta el concreto desde dentro. La fisura ' +
        'resultante es **longitudinal, paralela a la varilla**, y sigue una ' +
        'secuencia siempre igual: primero una línea fina, después el concreto se ' +
        'separa en un plano paralelo a la cara, y al final se cae el ' +
        'recubrimiento y queda la varilla a la vista.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay una prueba de campo que cualquiera puede hacer y que detecta la ' +
        'etapa intermedia, antes de que se caiga nada: **golpear la superficie ' +
        'con un martillo pequeño**. Si suena hueco, ya hay una separación debajo.',
    },
    {
      tipo: 'nota',
      texto:
        'Contra lo que suele repetirse, las fisuras **transversales** a la ' +
        'varilla no son, por sí solas, motor de corrosión: si el concreto es ' +
        'denso y el recubrimiento suficiente, el proceso se sella solo. El ACI ' +
        'lo dice expresamente, y añade que el famoso límite de 0,3 mm por ' +
        'durabilidad no está justificado como control de corrosión. Es un ' +
        'criterio normativo heredado, no una ley física.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las señales que sí son de alarma' },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de estas depende de medir. Si aparece cualquiera, la ' +
        'conversación deja de ser sobre estética.',
    },
    {
      tipo: 'lista',
      items: [
        '**Se ve por los dos lados del muro.** Una fisura pasante no es del pañete.',
        '**Baja hasta el cimiento**, cruzando el zócalo, en vez de detenerse arriba.',
        '**Hay desnivel entre los dos labios.** Se comprueba pasando el dedo o apoyando una regla: si un lado está adelantado respecto del otro, es cortante y no tracción.',
        '**El muro está pandeado o desplomado.** Se ve de canto, o con un nivel.',
        '**Se ve la varilla**, o el concreto está aplastado. En la escala oficial eso ya es daño fuerte.',
        '**Suena hueco al golpear.**',
        '**Está en una columna, una viga o un nudo entre las dos.** Las conexiones son los puntos más críticos de la estructura.',
        '**Las puertas y ventanas dejaron de cerrar, o el piso se desniveló.**',
        '**Creció desde la última vez que la miró.** Una fisura que avanza es una fisura viva, y eso cambia todo.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo saber si sigue viva' },
    {
      tipo: 'parrafo',
      texto:
        'Lo que decide si una fisura está quieta o sigue moviéndose no es el ' +
        'tiempo: es la causa. La retracción se agota; un asentamiento activo, no.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para saberlo hay que medir dos veces. Lo que puede hacer un propietario ' +
        'por su cuenta, sin instrumentos:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Fotografiarla con algo de escala al lado —una moneda, un flexómetro abierto— y con la fecha visible.',
        'Marcar los extremos con un lápiz y anotar el día.',
        'Repetir en un mes, y otra vez en tres. Si no se movió, ya sabe algo. Si se movió, ya sabe más.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Un comparador de fisuras —una tarjeta transparente con líneas de ancho ' +
        'calibrado— cuesta muy poco y hace la medida discutible mucho más ' +
        'precisa. Lo que ya no es tarea de propietario es sondear el pañete con ' +
        'cincel para ver si la grieta está en el revoque o en el muro.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Después del sismo: qué significa el color' },
    {
      tipo: 'parrafo',
      texto:
        'En Cali, las edificaciones inspeccionadas quedaron marcadas con un ' +
        'adhesivo de color. Vale la pena leer con cuidado lo que la propia ' +
        'Alcaldía dice que significan, porque circula bastante confusión.',
    },
    {
      tipo: 'lista',
      items: [
        '**Verde.** No se identificaron condiciones que impidan habitarla. No excluye que existan afectaciones ni que hagan falta reparaciones, y **no es un concepto técnico especializado**.',
        '**Amarillo.** Hay daños o peligros localizados. Se puede usar con restricciones, respetando las zonas señaladas, y hace falta una evaluación técnica especializada.',
        '**Rojo.** Hay condiciones de riesgo grave para la vida. Nadie debe entrar por decisión propia.',
      ],
    },
    {
      tipo: 'cita',
      texto:
        'El color rojo no necesariamente significa demolición. No constituye ' +
        'una orden de demolición ni determina por sí misma el futuro del ' +
        'inmueble.',
      fuente: 'Alcaldía de Santiago de Cali, agosto de 2026',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos cosas más que conviene saber. La visita **no es un dictamen ' +
        'estructural ni un estudio de ingeniería**: es una inspección visual ' +
        'rápida, de entre quince minutos y una hora. Y el adhesivo solo lo puede ' +
        'cambiar la Secretaría, mediante una evaluación nueva; retirarlo o ' +
        'moverlo por cuenta propia no cambia el estado del edificio, solo borra ' +
        'la información.',
    },
    {
      tipo: 'nota',
      texto:
        'Detalle técnico que explica una discrepancia real: Cali usa **tres** ' +
        'colores, con el rojo en «no habitable». La guía técnica nacional usa ' +
        '**cuatro**, con naranja para «no habitable» y el rojo reservado a ' +
        '«peligro de colapso». Si compara con documentación técnica y los ' +
        'colores no cuadran, es por eso.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién puede firmar qué' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí conviene ser directo, incluso —sobre todo— escribiendo desde un ' +
        'estudio de arquitectura.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La guía técnica contempla expresamente que la inspección visual rápida ' +
        'la hagan ingenieros civiles, **arquitectos**, constructores o técnicos ' +
        'en obras civiles, preferiblemente con cinco años de experiencia en ' +
        'diseño estructural o construcción. Y aun así recomienda que la comisión ' +
        'la lidere un ingeniero estructural, que es quien toma la decisión final ' +
        'de clasificación.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que un evaluador de esa primera fase **no** puede hacer está escrito ' +
        'con todas las letras: en ningún caso debe recomendar la demolición. Y ' +
        'la evaluación detallada —la que sí produce un dictamen— corresponde a ' +
        'especialistas en estructuras, geotecnia o patología. Lo mismo para los ' +
        'edificios altos, los de las zonas más afectadas, los indispensables y ' +
        'los que tienen problemas de suelo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dicho en corto: **un arquitecto puede mirar su fisura, decirle qué la ' +
        'produjo y si hay que preocuparse. El veredicto de seguridad estructural ' +
        'lo firma un ingeniero estructural o un patólogo.** Cualquiera que le ' +
        'ofrezca lo segundo sin serlo le está vendiendo algo que no puede ' +
        'entregar.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'En propiedad horizontal: quién paga' },
    {
      tipo: 'parrafo',
      texto:
        'Es la pregunta que más rápido escala a discusión de asamblea, y la ' +
        '[Ley 675 de 2001](https://www.sic.gov.co/sites/default/files/normatividad/Ley_675_2001.pdf) ' +
        'la resuelve mejor de lo que parece.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Su artículo 3 define como **bienes comunes esenciales** el terreno, los ' +
        'cimientos, la estructura, las fachadas y las losas que sirven de ' +
        'cubierta a cualquier nivel. Léalo otra vez: **una columna, una viga, un ' +
        'muro estructural o la fachada siguen siendo bien común aunque estén ' +
        'dentro de su apartamento.** Una fisura ahí es de la copropiedad. Una en ' +
        'un tabique divisorio interior, en el estuco o en el enchape es suya.',
    },
    {
      tipo: 'nota',
      texto:
        'La trampa: para saber cuál es cuál hay que saber si el muro es ' +
        'estructural. En un edificio de mampostería estructural, las fachadas ' +
        '—y a veces los divisorios— **sí** hacen parte del sistema. No existe el ' +
        'tabique inocente. Eso ya requiere criterio técnico, y el reglamento de ' +
        'propiedad horizontal junto con los planos de la licencia son lo que ' +
        'zanja la discusión.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Sobre el dinero, tres reglas que se citan mal a menudo:',
    },
    {
      tipo: 'lista',
      items: [
        'El **fondo de imprevistos** va primero. La ley solo permite aprobar una cuota extraordinaria adicional cuando los recursos del fondo resulten insuficientes.',
        'La **póliza contra terremoto sobre los bienes comunes es obligatoria**, y la indemnización queda afectada en primer término a la reconstrucción. Cubre bienes comunes, no los acabados de su apartamento.',
        'La mayoría del **70 %** que exige el artículo 46 para ciertas decisiones —una cuota extraordinaria que supere cuatro veces la expensa mensual, por ejemplo— es del total de coeficientes del edificio, **no del 70 % de los asistentes**. Y esas decisiones no se pueden tomar en reunión no presencial.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Un matiz que evita sustos: una reparación estructural **no exige el 70 % ' +
        'por ser estructural**. Lo exige solo si la cuota extraordinaria supera ' +
        'ese umbral. Si cabe en el presupuesto ordinario o sale del fondo de ' +
        'imprevistos, basta la mayoría simple.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Si el edificio es nuevo: diez años' },
    {
      tipo: 'parrafo',
      texto:
        'La [Ley 1796 de 2016](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234) ' +
        'obliga al constructor o al vendedor de vivienda nueva a cubrir los ' +
        'perjuicios patrimoniales durante **diez años contados desde la ' +
        'Certificación Técnica de Ocupación** — no desde la escritura ni desde ' +
        'la entrega de las llaves.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos precisiones que cambian a quién le aplica. Rige para proyectos de ' +
        '**cinco o más unidades de vivienda** destinadas a terceros. Y solo para ' +
        'los que radicaron licencia después de que la ley entrara en vigencia, ' +
        'en julio de 2016: buena parte del inventario construido antes queda ' +
        'fuera.',
    },
    {
      tipo: 'nota',
      texto:
        'Ese certificado lo expide un supervisor técnico independiente, figura ' +
        'que la ley solo hace obligatoria por encima de 2.000 m². El umbral no ' +
        'limita la garantía directamente: limita dónde existe con seguridad el ' +
        'documento desde el cual empiezan a correr los diez años.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué no hacer' },
    {
      tipo: 'lista',
      items: [
        '**Estucar y pintar antes de saber la causa.** Es la más cara de todas, porque borra la evidencia y no detiene nada. La fisura vuelve, y ya no se sabe cuánto creció.',
        '**Rellenar con mortero rígido una fisura que sigue viva.** Vuelve a abrirse, casi siempre justo al lado del relleno.',
        '**Inyectar sin diagnóstico.** Reparar el síntoma mientras la causa sigue actuando es gastar dos veces.',
        '**Dar por hecho que «la casa se está asentando».** A veces es cierto y a veces es la explicación cómoda para no mirar.',
        '**Retirar o cambiar el adhesivo de color.** Solo lo puede hacer la autoridad, y solo tras una evaluación nueva.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'En resumen' },
    {
      tipo: 'parrafo',
      texto:
        'Mire primero la forma, no el ancho. Una vertical regular en un muro ' +
        'nuevo casi siempre es retracción y se va a estabilizar sola. Una ' +
        'escalonada que baja hasta el cimiento y se abre hacia arriba es ' +
        'asentamiento, y hay que resolver el suelo antes de tocar el muro. Una ' +
        'horizontal en la unión con la losa del último piso, que se abre y se ' +
        'cierra con el sol, es térmica.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y si está en una columna, en una viga o en el nudo entre las dos; si ' +
        'se ve por los dos lados; si hay desnivel entre los labios; si el muro ' +
        'está pandeado o se ve la varilla — ahí ya no hay nada que interpretar ' +
        'desde una pantalla. Llame a alguien.',
    },
  ],
  etiquetas: ['cali', 'propietario', 'administrador', 'patologia', 'sismo', 'estructura'],
  fuentes: [
    {
      titulo:
        'Guía Técnica para la Inspección de Edificaciones después de un Sismo. Manual de Campo, 4ª edición',
      editor: 'Asociación Colombiana de Ingeniería Sísmica e IDIGER',
      url: 'https://asosismica.org.co/documentacion-evaluacion-post-sismo/',
      fecha: '2018-03-01',
    },
    {
      titulo: 'Cali implementará identificación por colores para orientar el uso seguro de las edificaciones',
      editor: 'Alcaldía de Santiago de Cali',
      url: 'https://www.cali.gov.co/gestiondelriesgo/publicaciones/193875/cali-implementara-identificacion-por-colores-para-orientar-el-uso-se',
      fecha: '2026-08-22',
    },
    {
      titulo: 'Preguntas frecuentes sobre los adhesivos instalados en edificaciones',
      editor: 'Alcaldía de Santiago de Cali',
      url: 'https://www.cali.gov.co/gestiondelriesgo/publicaciones/193974/preguntas-frecuentes-sobre-los-stickers-instalados-en-edificaciones-',
      fecha: '2026-08-26',
    },
    {
      titulo: 'ACI 224.1R-07. Causes, Evaluation, and Repair of Cracks in Concrete Structures',
      editor: 'American Concrete Institute',
      url: 'https://www.concrete.org/store/productdetail.aspx?ItemID=224107',
      fecha: '2007-01-01',
    },
    {
      titulo: 'IS SP 25:1984. Handbook on Causes and Prevention of Cracks in Buildings',
      editor: 'Bureau of Indian Standards',
      url: 'https://archive.org/details/gov.in.is.sp.25.1984',
      fecha: '1984-01-01',
    },
    {
      titulo: 'FEMA 306. Evaluation of Earthquake Damaged Concrete and Masonry Wall Buildings',
      editor: 'Federal Emergency Management Agency',
      url: 'https://mitigation.eeri.org/files/fema-306.pdf',
      fecha: '1998-01-01',
    },
    {
      titulo: 'NSR-10, Título A. Requisitos generales de diseño y construcción sismo resistente',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.scg.org.co/Titulo-A-NSR-10-Decreto%20Final-2010-01-13.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'Ley 675 de 2001. Régimen de propiedad horizontal',
      editor: 'Congreso de la República de Colombia',
      url: 'https://www.sic.gov.co/sites/default/files/normatividad/Ley_675_2001.pdf',
      fecha: '2001-08-03',
    },
    {
      titulo: 'Ley 1796 de 2016. Protección al comprador de vivienda nueva',
      editor: 'Congreso de la República de Colombia',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
  ],
}
