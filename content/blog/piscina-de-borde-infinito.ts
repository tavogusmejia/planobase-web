import type { Post } from '@/lib/types'
import { CIRCUITO } from './diagramas/borde-infinito'

/**
 * La pieza donde la credencial del estudio es más directamente pertinente: quien
 * dirige esta línea construyó piscinas de borde infinito en el Caribe entre 2019
 * y 2022. Se enuncia como corresponde —la experiencia es de la persona— y va al
 * final, no al principio: el artículo se sostiene solo con el articulado.
 *
 * El hallazgo que estructura la pieza es que **la Resolución 929 de 2026 regula
 * el borde infinito por primera vez**, en su numeral 10.5, y lo hace de una
 * forma que contradice la intuición de casi todo el mundo: impone «hidráulica
 * inversa», con el 100 % del caudal bombeado desbordando por el muro, y deja los
 * drenajes de fondo **exclusivamente para el vaciado**. La bomba no aspira del
 * fondo. Eso convierte el tanque de compensación en el corazón del sistema y no
 * en un accesorio, que es exactamente la tesis del artículo sobre el sobrecosto.
 *
 * Y hay una **ambigüedad real en el texto de la norma** que se declara en vez de
 * resolverla por nuestra cuenta: la capacidad del tanque se fija en «mínimo del
 * 10% del volumen del agua o 60 L/m² de lámina de agua», y la norma no dice cuál
 * de las dos manda cuando difieren. En una piscina residencial corriente
 * difieren por un factor de dos y medio. No inventamos la respuesta: se enseña
 * la cuenta y se recomienda el mayor.
 *
 * La tolerancia de nivel del muro de rebose **no está en ninguna norma** y se
 * presenta como criterio de obra, no como obligación.
 *
 * Fechada el 14 de julio de 2026, después del RETIE vigente y de la Resolución
 * 929.
 */
export const post: Post = {
  slug: 'piscina-de-borde-infinito',
  titulo: 'Piscina de borde infinito: qué exige de verdad y por qué cuesta el doble',
  pilar: 'piscinas',
  fecha: '2025-11-22',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'No es un acabado del vaso: es otra hidráulica entera, y desde 2026 está en ' +
    'la norma. La bomba no aspira del fondo, el tanque de compensación es ' +
    'obligatorio y tiene tamaño mínimo — con una ambigüedad que conviene conocer.',
  metaDescripcion:
    'Qué exige la norma colombiana a una piscina de borde infinito, cómo se ' +
    'dimensiona el tanque de compensación y de dónde sale el sobrecosto.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'El borde infinito se vende como un acabado y se compra como un acabado: ' +
        'la misma piscina, pero con un lado sin borde para que el agua se funda ' +
        'con el paisaje. De ahí sale la pregunta que llega siempre —«¿cuánto más ' +
        'cuesta?»— y de ahí sale también la sorpresa, porque la respuesta no está ' +
        'en el muro.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una piscina de borde infinito no es una piscina con un borde distinto. ' +
        'Es una piscina con **otra hidráulica**, y desde mayo de 2026 eso dejó de ' +
        'ser una opinión de ingeniero para quedar escrito en una norma.',
    },
    {
      tipo: 'nota',
      texto:
        'Marco aplicable, porque casi todas las cotizaciones que circulan citan el ' +
        'anterior: la **Resolución 929 de 2026** sustituyó a la Resolución 1510 de ' +
        '2011 y es la primera norma colombiana que regula expresamente el borde ' +
        'infinito. Su numeral 10.5 se llama, literalmente, «Estanque de piscina ' +
        'con borde infinito».',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Primero, de qué familia estamos hablando' },
    {
      tipo: 'parrafo',
      texto:
        'Hay dos maneras de sacar el agua sucia de una piscina, y de ellas ' +
        'dependen el precio, el mantenimiento y el aspecto. Conviene tener los ' +
        'nombres claros antes de seguir.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Tipo', 'Cómo saca el agua de la superficie', 'Dónde queda el agua'],
      filas: [
        ['**Piscina de skimmer**', 'Por **skimmers**: sumideros de superficie empotrados en la pared, con canastilla, que chupan la lámina superior', 'Unos centímetros por debajo del borde. Se ve el «anillo» de pared mojada'],
        ['**Piscina desbordante de rebosadero perimetral**', 'El agua rebosa por todo el perímetro a un canal', 'A ras del andén. Es la que se ve en hoteles'],
        ['**Piscina de borde infinito**', 'El agua rebosa por **uno o algunos lados** y cae a un canal oculto más abajo', 'A ras del muro de rebose, que es el que desaparece visualmente'],
      ],
      nota:
        'Las dos últimas son **piscinas desbordantes**: la familia. El borde ' +
        'infinito es un caso particular de desbordante, no una categoría aparte.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y aquí está el primer dato de norma que sorprende a mucha gente: **una ' +
        'piscina de borde infinito no lleva skimmers.** La resolución exige un ' +
        'skimmer por cada 46,5 m² de lámina, o un sistema de sobreflujo perimetral ' +
        'para láminas mayores de 312 m², y luego cierra el numeral con una frase ' +
        'de cuatro palabras: «No aplica para estanques de piscinas de borde ' +
        'infinito».',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La regla que lo cambia todo: la bomba no aspira del fondo' },
    {
      tipo: 'parrafo',
      texto:
        'Si usted solo se lleva una idea de este artículo, que sea esta. En una ' +
        'piscina normal, la bomba aspira del fondo y de los skimmers, filtra y ' +
        'devuelve. En una piscina de borde infinito, no:',
    },
    {
      tipo: 'cita',
      texto:
        'Para la recirculación de estanques de piscinas con borde infinito se ' +
        'aplicará el sistema de hidráulica inversa, en donde se desborda el 100 % ' +
        'del caudal bombeado y las tomas de los drenajes de fondo se usan ' +
        'exclusivamente para el vaciado del estanque.',
      fuente: 'Resolución 929 de 2026, anexo técnico, numeral 10.5',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo despacio, porque invierte la intuición. **Todo** el caudal que ' +
        'mueve la bomba tiene que salir por encima del muro. El agua cae al ' +
        'rebosadero, baja por gravedad al tanque de compensación, y es de ahí —no ' +
        'del vaso— de donde la bomba toma el agua. Los drenajes del fondo quedan ' +
        'como un ramal muerto que solo se abre el día que hay que vaciar la ' +
        'piscina.',
    },
    {
      tipo: 'diagrama',
      svg: CIRCUITO,
      titulo: 'La hidráulica de una piscina de borde infinito',
      pie:
        'Sección esquemática, sin escala. La proporción entre el vaso y el tanque ' +
        'de compensación depende del volumen y de la superficie de lámina, que es ' +
        'el cálculo que decide el proyecto. Diagrama del estudio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De esa inversión salen casi todas las consecuencias económicas del borde ' +
        'infinito. El tanque de compensación deja de ser un accesorio y pasa a ser ' +
        'el elemento del que depende que la bomba tenga agua. Si el tanque se ' +
        'queda corto, la bomba aspira aire; si se desborda, usted está tirando al ' +
        'desagüe agua tratada y caliente.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El tanque de compensación, y una ambigüedad de la norma' },
    {
      tipo: 'parrafo',
      texto:
        'El tanque de compensación es un segundo depósito, normalmente enterrado ' +
        'junto al cuarto de máquinas, que absorbe todo lo que en una piscina ' +
        'normal absorbe el propio vaso: el agua que en cada momento va en tránsito ' +
        'sobre el muro y por el canal, el volumen que desplazan los bañistas ' +
        'cuando entran, y el agua que vuelve por gravedad cuando la bomba se para.',
    },
    {
      tipo: 'parrafo',
      texto: 'La norma lo hace obligatorio y le pone tamaño mínimo:',
    },
    {
      tipo: 'cita',
      texto:
        'El sistema de sobreflujo perimetral, requerirá de un tanque de ' +
        'compensación que sirva de enlace entre el estanque y el equipo de bombeo, ' +
        'y compense además el agua desalojada por los bañistas. Su capacidad debe ' +
        'ser mínimo del 10% del volumen del agua o 60 L/m2 de lámina de agua.',
      fuente: 'Resolución 929 de 2026, anexo técnico, numeral 10.5',
    },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay un problema de redacción que conviene declarar en vez de ' +
        'resolverlo por cuenta propia: **la norma dice «o», y no dice cuál de las ' +
        'dos manda cuando las dos no dan lo mismo.** Y en una piscina residencial ' +
        'corriente no dan lo mismo ni de lejos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La cuenta, con una piscina de 8,00 × 4,00 m y 1,50 m de profundidad ' +
        'media, que son 48 m³ de agua y 32 m² de lámina:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Criterio de la norma', 'Cuenta', 'Resultado'],
      filas: [
        ['10 % del volumen de agua', '48 m³ × 0,10', '**4,80 m³**'],
        ['60 L/m² de lámina', '32 m² × 60 L', '**1,92 m³**'],
      ],
      nota:
        'Dos lecturas legítimas del mismo texto, con dos tanques y medio de ' +
        'diferencia. No encontré en la resolución, ni en el articulado ni en el ' +
        'anexo, ninguna regla que diga cuál prevalece.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo que recomiendo, y lo digo como criterio propio y no como lectura ' +
        'legal: **tome el mayor de los dos.** Un tanque grande de más cuesta unos ' +
        'metros cúbicos de excavación y concreto una sola vez; un tanque corto se ' +
        'paga con una bomba que aspira aire cada vez que se meten cinco personas a ' +
        'la piscina, y eso no se corrige sin volver a excavar. Pida además que el ' +
        'proyectista le entregue **la cuenta de volúmenes**, no solo el porcentaje: ' +
        'el agua en tránsito sobre el muro depende del ancho del vertedero y del ' +
        'espesor de la lámina, que son datos de su piscina y no de una tabla.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El tanque necesita además su propia instrumentación, que es la partida ' +
        'que se olvida después de la del tanque: **sondas de nivel** —máximo, ' +
        'mínimo y paro—, **llenado automático** con su válvula y su contador, y un ' +
        'corte por nivel bajo que apague la bomba antes de que trabaje en seco. ' +
        'Sin ese corte, el primer día que la reposición falle usted pierde el ' +
        'sello mecánico.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El muro de rebose: milímetros, no centímetros' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que ninguna norma regula y que decide si la piscina se ' +
        've bien o se ve mal, así que la digo como lo que es: criterio de obra.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El efecto visual del borde infinito depende de que la lámina de agua ' +
        'caiga con espesor uniforme por toda la longitud del muro. Y el espesor de ' +
        'esa lámina, en una piscina residencial, es de unos pocos milímetros. Eso ' +
        'quiere decir que **si la coronación del muro tiene tres milímetros de ' +
        'desnivel, se nota**: por el punto bajo cae una cortina y por el punto ' +
        'alto no cae nada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es la razón por la que un borde infinito no se replantea con manguera de ' +
        'nivel ni se remata a ojo. Se nivela con instrumento, se verifica con el ' +
        'vaso lleno antes de enchapar, y el acabado del vertedero se ejecuta ' +
        'cuando la estructura ya asentó. Un muro corregido después, a punta de ' +
        'mortero, produce exactamente el defecto que se quería evitar.',
    },
    {
      tipo: 'nota',
      texto:
        'Consecuencia contractual, que es donde esto duele: **la tolerancia del ' +
        'muro de rebose tiene que estar escrita en el contrato**, con su valor y ' +
        'con el momento en que se verifica. Si no está, no hay incumplimiento que ' +
        'reclamar cuando el agua caiga por un solo lado, y la respuesta que ' +
        'recibirá —«así quedan»— es indiscutible sin un número de referencia.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La estructura: dos problemas que la piscina normal no tiene' },
    {
      tipo: 'parrafo',
      texto:
        'La NSR-10 sí se ocupa de las piscinas, aunque se repita lo contrario. El ' +
        'Título B, al tratar la subpresión, dice expresamente que «la misma ' +
        'consideración debe hacerse en el diseño de tanques y piscinas» y remite ' +
        'al **Capítulo C.23**, que se titula «Tanques y estructuras de ingeniería ' +
        'ambiental de concreto» y cubre, con esas palabras, «piscinas y albercas ' +
        'que hacen parte del equipamento de edificaciones».',
    },
    {
      tipo: 'parrafo',
      texto: 'Dos cosas de ese capítulo pesan especialmente en un borde infinito:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El vaso vacío flota.** El C.23 obliga a tener en cuenta las subpresiones sobre los tanques desocupados y a disponer lastre para evitar la falla por flotación. Un borde infinito suele ir en ladera, con el muro alto por fuera y agua freática o de escorrentía por detrás: es justo la situación en que vaciar la piscina para mantenimiento es el momento de mayor riesgo estructural, no el de menor.',
        '**La estanqueidad se ensaya, y va en planos.** El mismo capítulo exige que los planos y especificaciones incluyan los requisitos para ensayar la impermeabilidad y la estanqueidad **antes de que se hagan los rellenos aledaños**. No es buena práctica: es contenido obligatorio del plano. Si su juego de planos no lo trae, está incompleto.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'A eso se suma que el muro de rebose es, estructuralmente, **un muro de ' +
        'contención con agua a un lado y aire al otro**, y que en la mayoría de ' +
        'los casos el terreno cae justo detrás de él. El estudio geotécnico ' +
        'definitivo, que la NSR-10 hace obligatorio para toda edificación urbana y ' +
        'suburbana sin umbral de tamaño, aquí no es un trámite: es lo que dice si ' +
        'el muro necesita pilotes.',
    },
    {
      tipo: 'nota',
      texto:
        'Si el borde infinito va sobre una losa existente y no sobre terreno, el ' +
        'problema es otro y es mayor. Está en ' +
        '[piscina en terraza](/blog/piscina-en-terraza).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El andén que hay que compensar' },
    {
      tipo: 'parrafo',
      texto:
        'Un detalle de la norma que cambia la implantación y que casi nadie tiene ' +
        'en cuenta al dibujar. Los corredores perimetrales deben tener **1,20 m de ' +
        'ancho mínimo** medido desde el borde de la piscina, con pendiente del 3 % ' +
        'al 5 % hacia los drenajes. Y el borde infinito, por definición, se come ' +
        'ese andén en el lado por el que desborda.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La resolución lo permite, pero con dos condiciones: el diseño de borde ' +
        'infinito o desborde en caída se acepta **hasta en un 50 % del perímetro**, ' +
        'y el área de corredor que no se construye **debe compensarse en los ' +
        'costados en que sí se construya**, mitigando el riesgo de volcamiento o ' +
        'caída a otro nivel.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En un lote apretado eso es lo que decide el tamaño de la piscina, y se ' +
        'descubre tarde: se dibuja la lámina de agua que cabe, y después no cabe ' +
        'el andén compensado que la norma pide al otro lado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que cuesta cada mes, que también es más' },
    {
      tipo: 'parrafo',
      texto:
        'El sobrecosto de un borde infinito no se acaba el día de la entrega. Hay ' +
        'tres consumos que suben, y suben por razones físicas:',
    },
    {
      tipo: 'lista',
      items: [
        '**Agua de reposición.** Una lámina cayendo en cortina evapora mucho más que una superficie quieta, y el viento se lleva parte del agua fuera del canal. La reposición deja de ser un goteo y pasa a ser una partida.',
        '**Producto químico.** Todo el agua que se repone entra sin tratar y hay que tratarla. Más reposición es más cloro y más corrector de pH, en la misma proporción.',
        '**Energía.** El sistema tiene que mover el 100 % del caudal por encima del muro, y eso significa vencer la altura del vertedero de forma continua. La bomba no se apaga entre bañistas: si se apaga, el borde deja de existir y la piscina se ve como cualquier otra.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y uno que no cuesta dinero pero cuesta convivencia: **el ruido**. Una ' +
        'cortina de agua cayendo un metro a un canal de concreto suena, y suena ' +
        'toda la noche si la bomba queda programada de noche. En una casa de campo ' +
        'suele ser agradable; junto a una habitación no siempre. Se resuelve con ' +
        'la altura de caída y con el acabado del fondo del canal, y se resuelve al ' +
        'diseñar.',
    },
    {
      tipo: 'nota',
      texto:
        'Las cifras de inversión y de costo mensual no van aquí: están en ' +
        '[cuánto cuesta una piscina](/blog/cuanto-cuesta-una-piscina-en-colombia) y en el ' +
        'artículo de [mantenimiento](/blog/mantenimiento-de-piscina-costo-mensual). Lo que sí ' +
        'aporta este artículo es de dónde sale el sobrecosto, que es la pregunta ' +
        'que permite discutir una cotización.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por qué cuesta el doble: las seis partidas' },
    {
      tipo: 'parrafo',
      texto:
        'Puesto todo junto, el sobrecosto de un borde infinito frente a la misma ' +
        'piscina con skimmers se compone de esto, y de nada más:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El muro de rebose**, con su vertedero nivelado con instrumento y su acabado ejecutado en una segunda etapa.',
        '**El rebosadero**: un canal de concreto impermeabilizado, con su pendiente y su rejilla, que en la piscina de skimmer no existe.',
        '**El tanque de compensación**: una segunda estructura estanca, enterrada, con su propia impermeabilización y su propio acceso.',
        '**La instrumentación de nivel**: sondas, llenado automático, corte por nivel bajo y su control.',
        '**La estructura**, cuando el muro alto en ladera obliga a cimentación especial o a lastre contra la flotación.',
        '**El andén compensado** en los lados que sí lo llevan, que puede obligar a reducir la lámina de agua.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de las seis es un capricho del constructor y cinco de las seis ' +
        'están hoy en la norma. Cuando alguien le ofrece un borde infinito «por un ' +
        'poco más», la pregunta que zanja la conversación es corta: **¿dónde está ' +
        'el tanque de compensación en su presupuesto, y de qué volumen?** Si no ' +
        'está, lo que le están cotizando no es un borde infinito: es un muro más ' +
        'bajo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no cambia' },
    {
      tipo: 'parrafo',
      texto:
        'Conviene cerrar con esto porque se pregunta a menudo. El borde infinito ' +
        'no exime de nada de lo demás: siguen aplicando los **dos desagües ' +
        'sumergidos separados 0,90 m como mínimo**, hidráulicamente balanceados, ' +
        'con cubierta antiatrapamiento, sistema de liberación de vacío y botón de ' +
        'apagado de emergencia —aunque esos desagües solo se usen para vaciar—, y ' +
        'sigue aplicando la Ley 1209 completa.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En particular, **el borde infinito no sustituye al cerramiento**. Es un ' +
        'error que aparece de vez en cuando en proyectos bonitos: como el agua se ' +
        'funde con el paisaje, se dibuja sin barrera. Si la piscina es de uso ' +
        'restringido —el conjunto residencial, el club, el hotel— el cerramiento ' +
        'con control de acceso es obligatorio y no hay excepción estética. Lo que ' +
        'la ley pide y lo que no está en ' +
        '[Ley 1209: qué obliga de verdad](/blog/ley-1209-piscinas-copropiedad).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'De dónde sale esto' },
    {
      tipo: 'parrafo',
      texto:
        'Quien dirige esta línea en el estudio trae quince años diseñando sistemas ' +
        'hidráulicos y cuerpos de agua, y entre 2019 y 2022 construyó piscinas de ' +
        'borde infinito, spas y cascadas con sus sistemas de fondo —redes de ' +
        'tubería, plantas de filtración, bombas y cuartos de máquinas— en Bahamas, ' +
        'Bermuda, Turks & Caicos y Miami.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De ahí sale la advertencia con la que cierro. En un borde infinito, lo ' +
        'que se ve es un muro; lo que decide si funciona está enterrado detrás de ' +
        'él. Y a diferencia de casi todo lo demás en una obra, **eso no se puede ' +
        'añadir después**.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'estructura'],
  fuentes: [
    {
      titulo:
        'Resolución 929 de 2026, criterios técnicos constructivos y de seguridad para piscinas y estructuras similares',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-0929-de-2026.pdf',
      fecha: '2026-05-12',
    },
    {
      titulo: 'NSR-10, Título C — Concreto estructural, capítulos C.4 y C.23',
      editor: 'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/3titulo-c-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'NSR-10, Título B — Cargas, capítulo B.5',
      editor: 'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'NSR-10, Título H — Estudios geotécnicos',
      editor: 'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/8titulo-h-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'Ley 1209 de 2008, por la cual se establecen normas de seguridad en piscinas',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1209_2008.html',
      fecha: '2008-07-14',
    },
  ],
}
