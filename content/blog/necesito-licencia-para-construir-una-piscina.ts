import type { Post } from '@/lib/types'

/**
 * Segunda pieza del pilar de piscinas, y la que atiende la consulta más
 * frecuente del particular. Complementa a la de la Ley 1209, que atiende al
 * administrador de copropiedad.
 *
 * El hallazgo que estructura el artículo es una **ausencia**, y hay que
 * declararla como tal: ninguna norma nacional nombra la piscina como modalidad
 * de licencia. No existe «licencia de piscina». De ahí que la respuesta honesta
 * no sea sí ni no, sino que depende de tres cosas —dónde se construye, sobre
 * qué se construye y qué toca— y que la consulta verbal a la autoridad
 * competente, que es gratuita, sea el primer paso obligado.
 *
 * Lo que sí es nacional y no depende de ningún POT: la Ley 1209 aplica a la
 * casa unifamiliar con dos obligaciones —alarma de inmersión y sistema de
 * liberación de vacío— **e incluso a piscinas ya construidas**, y ninguna norma
 * colombiana fija dimensiones de cerramiento. Las dos cosas ya están
 * verificadas en «Ley 1209: qué obliga de verdad a una copropiedad con
 * piscina» y aquí se reutilizan, no se reinvestigan.
 *
 * No se publica ninguna cifra de costo ni de expensas: las expensas dependen
 * del área y del municipio, y publicar un número aquí sería exactamente lo que
 * este blog corrige en otros temas.
 *
 * Fechada en abril de 2025, un mes después de la pieza de la Ley 1209.
 */
export const post: Post = {
  slug: 'necesito-licencia-para-construir-una-piscina',
  titulo: '¿Necesito licencia para construir una piscina?',
  pilar: 'piscinas',
  fecha: '2025-02-25',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'No existe la «licencia de piscina»: ninguna norma nacional la nombra. La ' +
    'respuesta depende de dónde, sobre qué y qué toca — y hay obligaciones de ' +
    'seguridad que aplican tenga licencia o no.',
  metaDescripcion:
    'Cuándo se necesita licencia de construcción para una piscina en ' +
    'Colombia, qué modalidad aplica y qué exige la ley aunque no la necesite.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La respuesta corta es que depende, y conviene entender de qué depende, ' +
        'porque el error va en las dos direcciones: hay quien construye sin ' +
        'licencia una piscina que la necesitaba, y hay quien tramita durante ' +
        'meses algo que en su caso no la exigía.',
    },
    {
      tipo: 'nota',
      texto:
        'El punto de partida, y es una ausencia que conviene declarar: ' +
        '**ninguna norma nacional colombiana nombra la piscina como modalidad ' +
        'de licencia.** No existe una «licencia de piscina». Lo que existe son ' +
        'las modalidades generales de licencia de construcción, y la pregunta ' +
        'real es en cuál cae su caso.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las tres preguntas que deciden' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿Dónde?** Suelo urbano, rural o predio en propiedad horizontal.',
        '**¿Sobre qué?** Terreno libre, una losa existente, una terraza, una cubierta.',
        '**¿Qué toca?** Estructura, bien común, ronda hídrica, aislamientos.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Con esas tres respuestas se resuelve casi cualquier caso. Vamos una ' +
        'por una.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Piscina en el jardín de una casa' },
    {
      tipo: 'parrafo',
      texto:
        'Es el caso más frecuente y el que más discusión genera. Una piscina de ' +
        'obra sobre el terreno libre de un predio es una **edificación nueva en ' +
        'un área no construida**, y esa es exactamente la definición de la ' +
        'modalidad de obra nueva: la autorización para adelantar obras de ' +
        'edificación en terrenos no construidos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Aunque la norma nacional no la nombre, la piscina de obra ocupa suelo, ' +
        'tiene estructura, tiene redes hidráulicas y sanitarias y modifica el ' +
        'terreno. Por eso, en la mayoría de los municipios, se tramita como ' +
        'construcción.',
    },
    {
      tipo: 'parrafo',
      texto: 'Y hay tres cosas del POT que pueden decidirlo, todas municipales:',
    },
    {
      tipo: 'lista',
      items: [
        '**Si la piscina computa en el índice de ocupación.** Algunos planes de ordenamiento excluyen las áreas duras sin cubrir; otros no dicen nada. Si computa y usted ya está en el límite, el proyecto cambia.',
        '**Los aislamientos.** La piscina tiene que respetar los retiros a linderos igual que cualquier construcción, y en un lote pequeño eso suele ser la restricción que manda.',
        '**El cerramiento y la cubierta**, si los va a hacer. Un cerramiento tiene su propia modalidad de licencia, y una cubierta sobre la piscina es área construida.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Aquí está el consejo que más tiempo ahorra y casi nadie usa: **las ' +
        'consultas verbales sobre normas urbanísticas son gratuitas y no se ' +
        'pueden cobrar.** Vaya a la curaduría o a la oficina de planeación con ' +
        'la dirección del predio y pregunte antes de encargar un diseño.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Piscina en terraza o sobre losa: el caso serio' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí no hay ambigüedad posible. Poner agua sobre una losa que no fue ' +
        'diseñada para eso es una **intervención estructural**, y las ' +
        'intervenciones estructurales tienen su propia modalidad de licencia.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un metro de lámina de agua pesa una tonelada por metro cuadrado, y a ' +
        'eso hay que sumarle el vaso, el recubrimiento, el borde y la carga ' +
        'viva. Ninguna losa de vivienda se diseña con esa carga salvo que ' +
        'alguien lo haya decidido de antemano.',
    },
    {
      tipo: 'cita',
      texto:
        'El diseñador debe ser un ingeniero civil cuando se trate de diseños ' +
        'estructurales y estudios geotécnicos, y un arquitecto o ingeniero civil ' +
        'o mecánico en el caso de diseños de elementos no estructurales.',
      fuente: 'Ley 400 de 1997, artículo 26',
    },
    {
      tipo: 'nota',
      texto:
        'Lo que hace falta antes de dibujar nada: **una evaluación estructural ' +
        'de la losa existente, firmada por un ingeniero civil**, que diga si ' +
        'aguanta, si aguanta reforzada o si no aguanta. Un arquitecto no puede ' +
        'firmar eso y un contratista de piscinas tampoco.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Piscina en propiedad horizontal' },
    {
      tipo: 'parrafo',
      texto:
        'Si la piscina va en zona común de una copropiedad, hacen falta **dos ' +
        'cosas a la vez, y son acumulativas**: la autorización de la asamblea, ' +
        'porque se interviene un bien común, y la licencia de construcción en ' +
        'la modalidad que corresponda. Ninguna sustituye a la otra.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y si la piscina va en la terraza privada de un apartamento, recuerde ' +
        'que la losa de cubierta es **bien común esencial aunque esté dentro de ' +
        'su bien privado**. La terraza es suya para usarla; la losa que la ' +
        'sostiene, no.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Piscina en suelo rural' },
    {
      tipo: 'parrafo',
      texto:
        'A lo anterior se le suma el régimen ambiental, y suele ser lo que ' +
        'decide:',
    },
    {
      tipo: 'lista',
      items: [
        '**Ronda hídrica.** Treinta metros a cada lado de los cauces y cien alrededor de los nacimientos. Es suelo de protección: ahí no va la piscina, ni cubierta ni descubierta.',
        '**El agua para llenarla.** Si viene de fuente propia —pozo, quebrada, nacimiento— se necesita concesión de aguas de la corporación autónoma regional. No es un detalle: es un trámite.',
        '**El agua para vaciarla.** Sin alcantarillado, el vertimiento requiere permiso o un sistema de manejo aprobado. Vaciar una piscina a una quebrada es una infracción ambiental, no una decisión de mantenimiento.',
        '**El índice de ocupación.** En suelo rural y suburbano hay límites nacionales de ocupación que aplican al conjunto de lo construido en el predio.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que aplica aunque no necesite licencia' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que más sorprende, y es donde más gente se equivoca ' +
        'de buena fe. **La Ley 1209 de 2008 no depende de que usted haya sacado ' +
        'licencia.** Aplica por el hecho de tener una piscina, y aplica también ' +
        'a las que ya estaban construidas.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Obligación', 'Casa unifamiliar', 'Conjunto residencial'],
      filas: [
        ['Alarma de inmersión o sensor de movimiento', '**Sí**', '**Sí**, en horario de no servicio'],
        ['Sistema de liberación de vacío', '**Sí**', '**Sí**'],
        ['Cerramiento con control de acceso', 'No', '**Sí**'],
        ['Cubierta antiatrapamiento en los drenajes', 'No', '**Sí**'],
        ['Paro manual de la bomba, visible y señalizado', 'Sí', 'No'],
        ['Botiquín, flotadores, bastón con gancho, citófono', 'No', '**Sí**'],
        ['Plan de seguridad y reglamento de uso', 'No', '**Sí**'],
      ],
      nota:
        'Ley 1209 de 2008, artículos 3, 11, 12, 13 y 14, y su reglamento, hoy ' +
        'compilado en el Decreto 780 de 2016. La casa unifamiliar **no queda ' +
        'fuera de la ley**, como suele creerse: tiene dos obligaciones, y el ' +
        'reglamento lo confirma con la palabra «únicamente».',
    },
    {
      tipo: 'nota',
      texto:
        'Y un dato que ahorra dinero: **ninguna norma colombiana fija ' +
        'dimensiones de cerramiento.** Ni altura, ni separación entre barrotes, ' +
        'ni tipo de herraje. Las cifras que circulan —el famoso 1,20 m— vienen ' +
        'de normas extranjeras y se citan en Colombia como si fueran ley. Lo ' +
        'que la norma exige es funcional: una barrera que impida el acceso, con ' +
        'control de acceso.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El drenaje: la decisión que no se puede corregir después' },
    {
      tipo: 'parrafo',
      texto:
        'Si va a construir una piscina nueva, esto se decide ahora o no se ' +
        'decide nunca sin volver a abrir el vaso.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando un cuerpo sella una salida de succión, la presión de trabajo de ' +
        'la bomba se convierte en fuerza de retención, y con un drenaje único ' +
        'de diámetro corriente esa fuerza es de cientos de kilogramos. **Ningún ' +
        'adulto arranca de ahí a un niño.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'La solución correcta es pasiva: **doble succión hidráulicamente ' +
        'balanceada**, con los drenajes separados al menos 0,90 m. Si un cuerpo ' +
        'sella uno, el otro sigue admitiendo caudal y el vacío no llega a ' +
        'formarse. No depende de electrónica, no se desprograma y no tiene ' +
        'batería.',
    },
    {
      tipo: 'nota',
      texto:
        'La regla de ingeniería que resume todo: **nunca dimensione un drenaje ' +
        'por el diámetro de la tubería; dimensiónelo por la velocidad en la ' +
        'boca y por el escenario de bloqueo total de una salida.** Cuesta lo ' +
        'mismo hacerlo bien al construir y es carísimo corregirlo después.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué pasa si construye sin la licencia que necesitaba' },
    {
      tipo: 'parrafo',
      texto:
        'La consecuencia no es solo la multa. Una obra sin licencia expone a ' +
        'sanción económica, a orden de demolición y a la suspensión de ' +
        'servicios públicos. Y hay dos efectos menos visibles que suelen doler ' +
        'más:',
    },
    {
      tipo: 'lista',
      items: [
        '**La venta del inmueble.** Un área construida que no aparece en la licencia ni en el reglamento es un problema en el momento de vender o de hipotecar.',
        '**El seguro.** Un siniestro sobre una construcción no licenciada es una conversación distinta con la aseguradora.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'La secuencia correcta' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Consulte verbalmente en la curaduría o en planeación.** Es gratuito. Lleve la dirección del predio y describa qué quiere hacer y dónde.',
        '**Si va sobre losa existente, pida primero la evaluación estructural.** Antes que cualquier diseño de piscina.',
        '**Si es copropiedad, pida la autorización de la asamblea antes de la licencia.** Pagar expensas por algo que no le dejen hacer es dinero perdido.',
        '**Si es rural, empiece por la corporación autónoma regional.** Ronda hídrica, agua y vertimientos.',
        '**Diseñe el sistema hidráulico al mismo tiempo que el vaso.** Drenajes, cuarto de máquinas, tubería y bomba. Es lo que no se ve y es lo que decide si la piscina funciona.',
        '**Cumpla la Ley 1209 desde el diseño**, no como añadido al final.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Una piscina es sobre todo lo que no se ve. La licencia es el trámite; ' +
        'el sistema es el proyecto.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'licencia', 'seguridad', 'suelo-rural'],
  fuentes: [
    {
      titulo: 'Decreto 1077 de 2015, modalidades y trámite de las licencias de construcción',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
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
    {
      titulo: 'Ley 675 de 2001, régimen de propiedad horizontal',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0675_2001.html',
      fecha: '2001-08-03',
    },
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Decreto 1076 de 2015, único reglamentario del sector ambiente',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
  ],
}
