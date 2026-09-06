import type { Post } from '@/lib/types'

/**
 * La pieza que abre el canal de administradores de propiedad horizontal, y la
 * primera del pilar de piscinas — donde la credencial es real: quien firma
 * lleva quince años diseñando sistemas hidráulicos y construyendo piscinas y
 * cuerpos de agua.
 *
 * La investigación se hizo descargando los textos oficiales, no glosas. Salió
 * con seis datos falsos que se repiten en todo el país y que aquí se desmienten
 * con el articulado en la mano — entre ellos dos que cambian el presupuesto de
 * una copropiedad: que la ley exige cerramiento de 1,20 m (no lo exige) y que
 * un conjunto necesita salvavidas permanente (no lo necesita).
 *
 * Y una tesis técnica que no había visto escrita en ninguna parte: el
 * reglamento técnico que debía definir el desempeño de los dispositivos de
 * seguridad **nunca se expidió**, así que «homologado» hoy significa que el
 * proveedor firmó un papel. Se presenta con la cautela debida —ausencia en un
 * repositorio no es prueba concluyente— pero el indicio es fuerte: el decreto
 * de 2016 sigue redactándolo en futuro.
 *
 * Fechado en marzo de 2025 a propósito: no cita ningún hecho posterior, es
 * perenne, y ayuda a que el blog no aparezca entero el mismo mes.
 *
 * ---
 *
 * **Actualizado el 6 de septiembre de 2026, y esa es la única fecha que se
 * mueve.** La de publicación se queda en marzo de 2025, que es cuando se
 * escribió y es la antigüedad que el artículo ya tiene en el buscador. El
 * motivo de la pasada: las dos resoluciones técnicas que citaba dejaron de ser
 * el marco aplicable. La **Resolución 929 del 12 de mayo de 2026** superó a la
 * Resolución 1510 de 2011 y la **Resolución 234 del 10 de febrero de 2026**
 * ocupa el campo de la Resolución 1618 de 2010.
 *
 * **Se dice «superada por», nunca «derogada por».** La 929 no deroga a la 1510
 * por su número. La 1510 se quedó sin piso porque nació al amparo del Decreto
 * 2171 de 2009, y a ese decreto lo derogó el Decreto 554 de 2015. Escribir
 * «derogada» sería afirmar algo que la norma no hizo.
 *
 * La tesis del artículo no se cae: se refuerza. El numeral 7 de la 929 sigue
 * condicionando la homologación de los dispositivos a «la norma que para el
 * efecto expida el Ministerio» y sigue remitiendo a la declaración de
 * conformidad de primera parte del proveedor. Dieciocho años después de la ley,
 * sigue en futuro.
 *
 * Lo nuevo es el **IRAPI**, que la 234 crea y que antes no existía: un índice
 * de 0 a 100 que el responsable de la piscina está obligado a calcular, que la
 * autoridad verifica en la visita, y que **declara «no apta para contacto
 * primario» todo lo que pase de 10** —el nivel «bajo» incluido—. Es lo más
 * aprovechable de toda la actualización para un administrador, y por eso lleva
 * sección propia.
 *
 * Cuatro cosas más que cambiaron. El numeral 7 de la 929 le abre por fin al
 * estanque antiguo de un solo drenaje una ruta de cumplimiento que **no pasa
 * por abrir el vaso**, y eso mueve un presupuesto entero. El ámbito de la 234
 * ya no nombra la piscina unifamiliar particular, así que la afirmación de que
 * los parámetros del agua le aplican igual quedó sin piso por esa vía. La
 * autoridad sanitaria ya no toma «una muestra al año»: su columna dice, en
 * todos los parámetros, «asociado a factores de riesgo». Y el ORP, que aquí se
 * leía como mínimo de 700 mV, la 234 lo pone en la columna de **máximo**: se
 * transcribe lo que dice la norma y se declara la tensión, como se hizo con la
 * ambigüedad del tanque de compensación en `piscina-de-borde-infinito`.
 *
 * **Ni la 929 ni la 234 mencionan al ONAC ni al INVIMA** —comprobado buscando
 * literalmente en las dos—. Lo que la 234 exige es validación o verificación de
 * las metodologías del laboratorio (art. 6, par. 3) y ficha técnica más hoja de
 * seguridad con etiquetado SGA para los productos (art. 13). El párrafo se
 * reescribió para decir eso sin afirmar que la obligación haya desaparecido del
 * ordenamiento: que no esté en estas dos resoluciones no prueba que no viva en
 * otra.
 *
 * Las fuentes de la 1510 y la 1618 salen de la lista y entran las de la 929 y
 * la 234, copiadas palabra por palabra de las otras once piezas del pilar. Con
 * la de la 1510 se va el comentario que documentaba que su PDF oficial en
 * minsalud es un escaneo de una página sin texto extraíble, y que por eso se
 * servía desde el gestor normativo de la Alcaldía de Bogotá. Queda anotado aquí
 * para que el hallazgo no se pierda con la fuente.
 */
export const post: Post = {
  slug: 'ley-1209-piscinas-copropiedad',
  titulo: 'Ley 1209: qué obliga de verdad a una copropiedad con piscina',
  pilar: 'piscinas',
  fecha: '2025-03-18',
  actualizado: '2026-09-06',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Casi todo lo que se repite sobre esta ley está mal: ni exige cerramiento ' +
    'de 1,20 m, ni obliga a salvavidas permanente en un conjunto. Lo que sí ' +
    'exige, artículo por artículo — y el vacío técnico que hace que «dispositivo ' +
    'homologado» hoy no signifique casi nada.',
  metaDescripcion:
    'Qué exige realmente la Ley 1209 de 2008 a un conjunto residencial con ' +
    'piscina, y qué responsabilidad tiene el administrador.',
  puerta: 'diagnostico-de-edificaciones',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La Ley 1209 de 2008 lleva más de quince años vigente y sigue siendo ' +
        'la norma peor citada del sector. Se le atribuyen exigencias que no ' +
        'tiene, se le ignoran otras que sí, y se cita como reglamento suyo un ' +
        'decreto que está derogado desde 2015.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esto es lo que dice, leído artículo por artículo. Incluye seis cosas ' +
        'que casi todo el mundo repite y son falsas, y una que casi nadie dice ' +
        'y es la más grave de todas.',
    },
    {
      tipo: 'nota',
      texto:
        'Dato de partida que conviene tener claro: la ley rigió desde enero de ' +
        '2009 y dio **un año** de plazo para adecuarse. Ese plazo venció en ' +
        'enero de 2010 y no hay prórroga. Una copropiedad que hoy no cumpla ' +
        'lleva más de quince años en incumplimiento.',
    },
    {
      tipo: 'nota',
      texto:
        'Marco aplicable, al día de septiembre de 2026: las dos resoluciones ' +
        'técnicas que este artículo citaba ya no son el marco. La **Resolución ' +
        '929 del 12 de mayo de 2026** superó a la Resolución 1510 de 2011, y la ' +
        '**Resolución 234 del 10 de febrero de 2026** ocupa el campo de la ' +
        'Resolución 1618 de 2010. Conviene decirlo con precisión, porque no es ' +
        'lo mismo: **la 929 no deroga a la 1510 por su número.** La 1510 se ' +
        'quedó sin piso porque nació al amparo del Decreto 2171 de 2009, y a ese ' +
        'decreto lo derogó el Decreto 554 de 2015. Es «superada por», no ' +
        '«derogada por». **La Ley 1209 no cambió ni una coma**, y por eso nada ' +
        'de lo que sigue cambia de tesis.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Primero: qué tipo de piscina tiene usted' },
    {
      tipo: 'parrafo',
      texto:
        'Todo depende de esto y casi siempre se clasifica mal. La ley define ' +
        'tres cosas distintas:',
    },
    {
      tipo: 'lista',
      items: [
        '**Piscina particular:** exclusivamente la unifamiliar. Una casa.',
        '**De uso público:** destinada al público en general, sin restricción.',
        '**De uso restringido:** para un grupo determinado que debe cumplir condiciones para entrar. La ley nombra expresamente los **condominios**, junto con clubes, hoteles, escuelas y centros vacacionales.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        '**La piscina de un conjunto residencial es de uso restringido, no de ' +
        'uso público.** Esa distinción, que suena burocrática, decide cuáles de ' +
        'las obligaciones le aplican y cuáles no — y es la fuente de la mitad ' +
        'de los errores que circulan.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué obliga exactamente, según el tipo' },
    {
      tipo: 'tabla',
      cabeceras: ['Obligación', 'Uso público', 'Conjunto residencial', 'Casa'],
      filas: [
        ['Cerramiento con control de acceso', 'Sí', '**Sí**', 'No'],
        ['Alarma de inmersión o sensor de movimiento', 'Sí', '**Sí**, en horario de no servicio', '**Sí**'],
        ['Cubierta antiatrapamiento en los drenajes', 'Sí', '**Sí**', 'No'],
        ['Sistema de liberación de vacío', 'Sí', '**Sí**', '**Sí**'],
        ['Paro manual de la bomba, visible y señalizado', 'Sí', 'Sí', 'No'],
        ['Salvavidas certificado', 'Permanente', '**Solo** fines de semana, vacaciones, eventos con menores de 14, o más de 10 menores a la vez', 'No'],
        ['Botiquín, dos flotadores con cuerda y bastón con gancho', 'Sí', '**Sí**', 'No'],
        ['Teléfono o citófono 24 horas', 'Sí', '**Sí**', 'No'],
        ['Profundidad marcada en tres puntos', 'Sí', '**Sí**', 'No'],
        ['Plan de seguridad y reglamento de uso', 'Sí', '**Sí**', 'No'],
        ['Certificación municipal de cumplimiento', '**Sí**', 'No exigida', 'No'],
      ],
      nota:
        'Ley 1209 de 2008, arts. 3, 11, 12, 13 y 14, y Decreto 554 de 2015 ' +
        '—hoy compilado en el Decreto 780 de 2016, arts. 2.8.7.1.1.1 y ss.',
    },
    {
      tipo: 'nota',
      texto:
        'La casa unifamiliar **no queda fuera de la ley**, como suele creerse. ' +
        'Su artículo 3 le impone dos obligaciones —alarma de inmersión y sistema ' +
        'de liberación de vacío— y se las impone también a las piscinas ya ' +
        'construidas. El reglamento lo confirma con la palabra «únicamente»: ' +
        'esas dos, y nada más.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los seis datos falsos que circulan' },

    { tipo: 'titulo', nivel: 3, texto: '1. «El cerramiento debe medir 1,20 metros»' },
    {
      tipo: 'parrafo',
      texto:
        '**Falso, y no por poco.** Ninguna norma colombiana fija una sola ' +
        'dimensión de cerramiento: ni altura, ni separación entre barrotes, ni ' +
        'tipo de herraje, ni puerta de autocierre. Revisé la ley, el Decreto ' +
        '554, el Decreto 780, la Resolución 1510 y la Resolución 929 de 2026 ' +
        'que la superó: no está en ninguno de los cinco.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que dice el artículo 5 es puramente funcional: cerramientos son ' +
        '«las barreras que impiden el acceso directo al lugar donde se ' +
        'encuentran las piscinas», con un control de acceso. Las cifras que ' +
        'circulan vienen de normas estadounidenses y se citan en Colombia como ' +
        'si fueran ley.',
    },
    {
      tipo: 'nota',
      texto:
        'El único parámetro numérico de dispositivo en toda la ley son los ' +
        '**80 decibeles** que debe producir la alarma de inmersión. Uno solo, ' +
        'en diecinueve artículos. La Resolución 929 de 2026 sí trae cifras ' +
        '—**0,90 m** de separación mínima entre desagües, cubiertas de **al ' +
        'menos cuatro veces el área de la tubería de descarga**—, pero ninguna ' +
        'para el cerramiento.',
    },

    { tipo: 'titulo', nivel: 3, texto: '2. «Un conjunto debe tener salvavidas permanente»' },
    {
      tipo: 'parrafo',
      texto:
        '**Falso**, y este error cuesta plata todos los meses. El parágrafo 1 ' +
        'del artículo 14 acota la obligación de la unidad residencial a cuatro ' +
        'situaciones:',
    },
    {
      tipo: 'lista',
      items: [
        'Fines de semana.',
        'Época de vacaciones escolares.',
        'Eventos sociales en la piscina o sus alrededores que involucren menores de catorce años.',
        '**Siempre que haya más de diez menores a la vez**, sin importar el día.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'El reglamento lo confirma y hace la distinción explícita: **los clubes ' +
        'privados** necesitan un salvavidas por piscina en todo el horario de ' +
        'funcionamiento; **los condominios y conjuntos residenciales**, solo en ' +
        'esos casos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí es permanente para el conjunto, sin excepción de día ni de ' +
        'temporada, es el **cerramiento** y la **alarma de inmersión en horario ' +
        'de no servicio**. Muchas copropiedades pagan salvavidas de lunes a ' +
        'viernes y no tienen alarma. Están gastando de más en lo que la ley no ' +
        'pide e incumpliendo lo que sí.',
    },

    { tipo: 'titulo', nivel: 3, texto: '3. «El Decreto 2171 de 2009 reglamenta la ley»' },
    {
      tipo: 'parrafo',
      texto:
        '**Falso desde 2015.** El artículo 20 del Decreto 554 de 2015 lo derogó ' +
        'expresamente. Y el Decreto 554 fue a su vez compilado íntegramente en ' +
        'el Decreto 780 de 2016, el decreto único del sector salud.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La cita correcta hoy es **Decreto 780 de 2016, artículos 2.8.7.1.1.1 ' +
        'y siguientes**. Citar el 554 no está mal, es la norma fuente. Citar el ' +
        '2171 sí, y aparece constantemente en cotizaciones de proveedores y en ' +
        'blogs de mantenimiento.',
    },

    { tipo: 'titulo', nivel: 3, texto: '4. «Toda piscina debe tener dos drenajes»' },
    {
      tipo: 'parrafo',
      texto:
        '**Impreciso, y hay una tensión normativa real detrás.** El artículo 12 ' +
        'de la ley exige dos drenajes solo a «las piscinas que se construyan a ' +
        'partir de la entrada en vigencia» — es decir, desde enero de 2009. La ' +
        'Resolución 929 de 2026, en cambio, se los exige a «los estanques de ' +
        'piscinas y estructuras similares», sin distinguir por fecha, igual que ' +
        'hacía la Resolución 1510 antes que ella.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una resolución no puede ampliar el ámbito de una ley, pero tampoco fue ' +
        'demandada. En la práctica: una piscina de conjunto de los años ochenta ' +
        'con drenaje único está exenta según la ley y no lo está según la ' +
        'resolución. Es una zona gris que conviene conocer antes de sentarse a ' +
        'discutir un presupuesto de obra.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo que sí trae la norma nueva, y es la mejor noticia presupuestal de ' +
        'toda la actualización para una copropiedad antigua: el numeral 7 de la ' +
        '929 **contempla expresamente el estanque construido antes de ella con ' +
        'un solo drenaje de succión**, y a ese no le pide un segundo drenaje. Le ' +
        'pide sistema de liberación de vacío, botón de apagado de emergencia y ' +
        'rejilla antiatrapamiento. Es decir, una ruta de cumplimiento escrita ' +
        'que **no obliga a abrir el vaso**, que es de lejos el rubro mayor. ' +
        'Sigue siendo la solución peor —activa en vez de pasiva, con todo lo que ' +
        'eso implica y que se explica más abajo—, pero está en la norma y con ' +
        'nombre propio.',
    },

    { tipo: 'titulo', nivel: 3, texto: '5. «Los dispositivos deben estar certificados»' },
    {
      tipo: 'parrafo',
      texto:
        '**Engañoso, y aquí está lo más grave de todo el artículo.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'El reglamento condiciona la homologación de los dispositivos a un ' +
        'reglamento técnico que debía expedir el Ministerio de Salud. Ese ' +
        'reglamento define lo único que importa técnicamente: velocidad máxima ' +
        'en la boca de la rejilla, caudal certificado por cubierta, vida útil, ' +
        'ensayo de resistencia al desprendimiento, especificación del sistema de ' +
        'liberación de vacío.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Mientras tanto, el propio decreto dispuso una salida transitoria: los ' +
        'dispositivos **«se entenderán homologados con la declaración de ' +
        'conformidad de primera parte del proveedor»**.',
    },
    {
      tipo: 'cita',
      texto:
        'Mientras no existan en Colombia organismos de evaluación de la ' +
        'conformidad acreditados ante el Organismo Nacional de Acreditación de ' +
        'Colombia, que certifiquen el cumplimiento de los dispositivos con el ' +
        'reglamento técnico que expida el Ministerio de Salud y Protección ' +
        'Social, se entenderán homologados con la declaración de conformidad de ' +
        'primera parte del proveedor.',
      fuente: 'Decreto 554 de 2015, art. 8, parágrafo',
    },
    {
      tipo: 'parrafo',
      texto:
        'Busqué ese reglamento técnico en el repositorio normativo completo del ' +
        'Ministerio de Salud —más de siete mil documentos— y **no encontré ' +
        'rastro de que se haya expedido jamás**. El decreto de 2016, ocho años ' +
        'después de la ley, sigue redactándolo en futuro: «que expida».',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y la norma nueva no cerró el vacío: lo reafirmó. El numeral 7 de la ' +
        'Resolución 929 de 2026 —dieciocho años después de la ley— exige ' +
        'desagües, cubiertas antiatrapamiento, sistema de liberación de vacío y ' +
        'botón de apagado «debidamente homologados, **de acuerdo a la norma que ' +
        'para el efecto expida** el Ministerio de Salud y Protección Social», y ' +
        'para las piscinas antiguas vuelve a remitir a la declaración de ' +
        'conformidad de primera parte del proveedor. El futuro sigue siendo ' +
        'futuro.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo digo con la cautela que corresponde: la ausencia en un repositorio ' +
        'no es prueba concluyente de inexistencia. Pero el indicio es fuerte, y ' +
        'la consecuencia práctica es incómoda: **hoy, «dispositivo homologado» ' +
        'significa que el proveedor firmó un papel diciendo que su producto ' +
        'cumple.** No hay laboratorio acreditado, no hay ensayo de caudal, no ' +
        'hay certificación de tercera parte.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Colombia legisló el requisito y nunca legisló el criterio de ' +
        'desempeño. Una rejilla plana atornillada sobre un drenaje de cuatro ' +
        'pulgadas cumple formalmente la ley si el proveedor firma la ' +
        'declaración.',
    },

    { tipo: 'titulo', nivel: 3, texto: '6. «La ley no aplica a casas particulares»' },
    {
      tipo: 'parrafo',
      texto:
        '**Falso.** Aplica, con dos obligaciones —alarma de inmersión y sistema ' +
        'de liberación de vacío— e incluso a piscinas ya construidas. Eso no ha ' +
        'cambiado, porque está en una ley. Lo que sí cambió en 2026 es la parte ' +
        'del agua: el ámbito de aplicación de la Resolución 234 alcanza a los ' +
        'inmuebles «de uso colectivo abiertas al público en general y de uso ' +
        'restringido no abiertas al público en general», y **la unifamiliar ' +
        'particular no aparece nombrada en ninguna de las dos categorías**. Los ' +
        'parámetros de calidad del agua ya no le son exigibles por esa vía. Las ' +
        'dos obligaciones de seguridad de la Ley 1209, sí.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El atrapamiento: por qué el drenaje único mata' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que justifica todo lo demás, y la que menos se ' +
        'entiende.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando un cuerpo sella una salida de succión, la presión de trabajo de ' +
        'la bomba se convierte en fuerza de retención. Con un drenaje de cuatro ' +
        'pulgadas y una bomba moviendo el caudal que la propia norma permite ' +
        'para ese diámetro, la fuerza que retiene a un niño contra el fondo es ' +
        'de cientos de kilogramos. **Ningún adulto lo arranca de ahí**, y el ' +
        'intento de rescate suele empeorarlo.',
    },
    {
      tipo: 'parrafo',
      texto: 'Las soluciones, de la más robusta a la menos:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Doble succión hidráulicamente balanceada**, con los drenajes separados al menos 0,90 m. Es una solución **pasiva**: si un cuerpo sella uno, el otro sigue admitiendo caudal y el vacío nunca llega a formarse. No depende de electrónica, no se desprograma, no tiene batería. Es la mejor, y es la que exige la norma.',
        '**Cubierta antiatrapamiento** dimensionada para el caudal real de la bomba. Es la primera barrera, pero se rompe, se roba y se degrada con el cloro y el sol. Una rejilla faltante no es un defecto estético: reabre exactamente el riesgo original.',
        '**Sistema de liberación de vacío**, que detecta el pico de vacío y para la bomba. Es **activo**, y es el que más falla: depende de calibración, de que nadie lo haya puenteado y de que se pruebe. **La norma colombiana no exige ninguna prueba periódica de este sistema.** Ese es, a mi juicio, el punto ciego más grave del régimen.',
        '**Paro manual de la bomba.** No previene, mitiga. Y solo si está donde la ley dice —«sitio visible, señalizado como tal y de libre acceso»—, no dentro del cuarto de máquinas con candado, que es donde suele estar.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La regla de ingeniería que resume todo: **nunca dimensione un drenaje ' +
        'por el diámetro de la tubería; dimensiónelo por la velocidad en la ' +
        'boca y por el escenario de bloqueo total de una salida.** Si el ' +
        'sistema no sobrevive a que un cuerpo selle un drenaje, está mal ' +
        'diseñado aunque tenga todos los papeles al día.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay dos obligaciones más, del reglamento de uso, que casi ninguna ' +
        'copropiedad tiene escritas y son obligatorias: prohibir el ingreso ' +
        '«con cadenas, collares, camisetas o elementos similares que permitan ' +
        'el atrapamiento mecánico», y exigir gorro y vestido de baño en ' +
        'material y estilo que eviten el atrapamiento. No son recomendaciones.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El agua: lo que hay que medir y cada cuánto' },
    {
      tipo: 'parrafo',
      texto:
        'La Resolución 234 de 2026 fija los parámetros y —lo que más se ' +
        'incumple— **las frecuencias**. El control real no es el del Estado: su ' +
        'columna, en todos y cada uno de los parámetros, dice «asociado a ' +
        'factores de riesgo». Es el del responsable de la piscina, y en buena ' +
        'parte es diario.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué se mide', 'Cada cuánto', 'Valor aceptable'],
      filas: [
        ['Cloro residual libre', '**Diario**, al inicio de la jornada y en horas de máxima ocupación', 'Piscinas: mínimo 1,5 ppm, ideal 2,0 a 4,0. Estructuras similares: mínimo 2,0, ideal 3,0 a 5,0'],
        ['Cloro combinado (cloraminas)', 'Diario', 'Máximo **0,3 ppm** en piscinas; 0,4 en estructuras similares'],
        ['pH', '**Diario**, al inicio de la jornada y en horas de máxima ocupación', 'Entre **6,8 y 7,3**'],
        ['Temperatura', 'Diario, mínimo al inicio de la jornada', 'Máximo **40 °C**'],
        ['Materias orgánicas flotantes y sedimentos', 'Diario', '**Ausentes**'],
        ['Ácido cianúrico', 'Semanal', 'Máximo **15 ppm**. En piscina cubierta no aplica: debe dar cero'],
        ['Dureza de calcio', 'Semanal in situ, y trimestral', 'Ideal 200 a 400; máximo 700'],
        ['**Índice de Langelier**', '**Trimestral**, o cuando el pH salga del rango ideal', 'Entre **−0,5 y 0,5**; ideal −0,3 a 0,3'],
        ['Alcalinidad total', 'Trimestral, o cuando el pH esté fuera de rango', 'Ideal 80 a 120; máximo 150'],
        ['Turbidez', 'Trimestral, en horas de máxima ocupación', 'Ideal **menos de 1 UNT**'],
        ['Potencial de oxidación-reducción (ORP)', 'Trimestral', '**700 mV** — ver la nota de abajo'],
        ['Sólidos disueltos y conductividad', 'Trimestral', 'TDS de 1.000 a 1.200 mg/L; conductividad de 2.000 a 2.400 µS/cm'],
        ['Heterótrofos, coliformes termotolerantes, *E. coli*', '**Trimestral**, en horas de máxima ocupación', 'Heterótrofos menos de 200 UFC/100 mL; los otros dos, **0**'],
        ['*Legionella*', '**Semestral** en piscinas climatizadas o aerosolizadas; trimestral en estructuras similares', '**0** UFC/100 mL'],
        ['*Cryptosporidium* y *Giardia lamblia*', '**En caso de materia fecal, durante el evento**', '**0** ooquistes o quistes por 1.000 cm³'],
      ],
      nota:
        'Resolución 234 de 2026, anexo técnico I. La tabla distingue ' +
        '**piscinas** de **estructuras similares** —jacuzzis, spas, piletas—, y ' +
        'los valores no siempre coinciden: donde son dos, aquí van los dos. El ' +
        'cloro aplica «de emplearse desinfectantes a base de cloro o ' +
        'derivados»; con bromo, el anexo fija bromo total de 2,0 a 4,0 ppm en ' +
        'piscinas y de 2,0 a 5,0 en estructuras similares. El ácido cianúrico ' +
        'solo aplica con cloro estabilizado. Y en temporada alta —vacaciones ' +
        'escolares, diciembre y enero, festividades— **la frecuencia trimestral ' +
        'pasa a mensual**.',
    },
    {
      tipo: 'nota',
      texto:
        'Un dato que hay que transcribir y no corregir, porque corregirlo en ' +
        'silencio sería inventar norma: **la tabla del anexo pone el ORP en la ' +
        'columna de máximo, con 700 mV.** Un potencial de oxidación-reducción ' +
        'se fija normalmente como piso —por debajo de cierto valor el agua no ' +
        'oxida—, y así se leía en el marco anterior. La 234 lo escribe como ' +
        'techo. No encontré en el articulado nada que lo aclare, así que aquí ' +
        'queda lo que dice la norma y queda dicha la tensión. Si ese número le ' +
        'mueve una compra de equipo, vaya al anexo y pida concepto a la ' +
        'autoridad sanitaria antes de firmar.',
    },
    {
      tipo: 'nota',
      texto:
        'El índice de Langelier no cambió, solo cambió de norma: sigue siendo ' +
        '**ISL = pH + CT + CD + CA − 12,1**, con la constante correctora de ' +
        '12,1 fijada por la propia resolución y las tablas de coeficientes ' +
        'en el anexo. Lo que sí cambió es la frecuencia, que pasa de semanal a ' +
        '**trimestral** o a cada vez que el pH se salga del rango ideal, y que ' +
        'ahora su cálculo hay que anotarlo en el libro de registro.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos obligaciones que casi ninguna copropiedad cumple y que un ' +
        'inspector verifica en dos minutos: **el libro o registro ' +
        'sistematizado**, vigente y disponible, y la **publicación mensual en ' +
        'lugar visible** de los resultados de laboratorio. Es una cartelera ' +
        'junto a la piscina. No está. Y el libro ahora pide bastante más de lo ' +
        'que se suele anotar: volumen y caudal, químicos usados y en qué ' +
        'cantidad, retrolavados, averías y cambios de equipo, **volumen de agua ' +
        'de reposición**, **horas de funcionamiento**, número de bañistas, y el ' +
        'cálculo del índice de Langelier.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y aquí hay que rectificar algo que este artículo afirmaba. Hasta 2026 ' +
        'se leía en esta misma sección que los análisis debían hacerse en ' +
        'laboratorio acreditado ante el **ONAC** y que los productos químicos ' +
        'debían tener registro sanitario del **INVIMA**. Busqué las dos ' +
        'exigencias, palabra por palabra, en la Resolución 234 y en la ' +
        'Resolución 929: **ninguna de las dos resoluciones nombra al ONAC ni al ' +
        'INVIMA, ni una sola vez.** Lo que la 234 sí exige es que el ' +
        'laboratorio **demuestre la validación o verificación de las ' +
        'metodologías** que emplea —artículo 6, parágrafo 3— y que cada ' +
        'producto químico cuente con **ficha técnica y hoja de seguridad**, con ' +
        'el etiquetado del Sistema Globalmente Armonizado —artículo 13—. Lo ' +
        'digo con la cautela que corresponde: **que no aparezcan en estas dos ' +
        'resoluciones no prueba que la obligación haya desaparecido del ' +
        'ordenamiento**; puede vivir en otra norma que no he revisado. Lo que ' +
        'sí puedo afirmar es qué exige el marco nuevo, y es esto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El IRAPI: el índice nuevo que puede dejar su piscina «no apta»' },
    {
      tipo: 'parrafo',
      texto:
        'Esto no existía antes de 2026 y es lo más aprovechable de toda la ' +
        'actualización para un consejo de administración. La Resolución 234 ' +
        'crea el **Índice de Riesgo del Agua de Estanques de Piscinas y ' +
        'Estructuras Similares —IRAPI—**, que convierte los resultados de los ' +
        'análisis en un solo número entre 0 y 100. No es un indicador ' +
        'voluntario: **el responsable de la piscina está obligado a ' +
        'calcularlo**, estanque por estanque, y la autoridad sanitaria lo ' +
        'verifica durante la visita de inspección.',
    },
    {
      tipo: 'cita',
      texto: 'IRAPI = VCM (45 %) + VCR (20 %) + VAC (30 %) + VCT (5 %)',
      fuente: 'Resolución 234 de 2026, anexo técnico II',
    },
    {
      tipo: 'lista',
      items: [
        '**VCM**, el 45 %: las características microbiológicas —heterótrofos, *Escherichia coli*, coliformes termotolerantes y *Pseudomonas aeruginosa*—.',
        '**VCR**, el 20 %: la concentración del residual del desinfectante.',
        '**VAC**, el 30 %: las características asociadas a la cloración —pH, ORP y ácido cianúrico—.',
        '**VCT**, el 5 %: la turbidez.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Cada parámetro que incumple aporta su puntaje de riesgo, y los nueve ' +
        'puntajes suman cien:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Parámetro', 'Puntaje de riesgo si incumple'],
      filas: [
        ['Residual del desinfectante', '20'],
        ['*Escherichia coli*', '15'],
        ['*Pseudomonas aeruginosa*', '15'],
        ['Potencial de oxidación-reducción (ORP)', '15'],
        ['Coliformes termotolerantes', '10'],
        ['pH', '10'],
        ['Heterótrofos', '5'],
        ['Ácido cianúrico', '5'],
        ['Turbidez', '5'],
        ['**Total**', '**100**'],
      ],
      nota:
        'Resolución 234 de 2026, anexo técnico II. El residual del ' +
        'desinfectante tiene además una asimetría que conviene conocer: si el ' +
        'resultado queda **por encima** del valor aceptado se asignan **diez** ' +
        'puntos, y si queda **por debajo**, **veinte**. Pasarse pesa la mitad ' +
        'que quedarse corto, y tiene sentido: el agua sobreclorada molesta, la ' +
        'subclorada infecta.',
    },
    {
      tipo: 'parrafo',
      texto: 'Y el resultado se clasifica así:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['IRAPI', 'Nivel de riesgo', 'Qué debe hacer el responsable'],
      filas: [
        ['75,1 a 100', '**Alto**', '**Agua no apta para contacto primario.** Plan de acciones correctivas de inmediato, calibración de equipos y mantenimiento profundo'],
        ['35,1 a 75', '**Medio**', '**No apta.** Revisión de la dosificación de químicos y mantenimiento preventivo'],
        ['10,1 a 35', '**Bajo**', '**No apta.** Inspección de los equipos de dosificación, mantenimiento de filtros y calibración'],
        ['0 a 10', 'Sin riesgo', 'Agua en condiciones óptimas. Continuar el control y la vigilancia'],
      ],
      nota:
        'Resolución 234 de 2026, anexo técnico II. La autoridad sanitaria tiene ' +
        'su propia columna: en riesgo alto pide plan de mejoramiento con ' +
        'cronograma, hace visita de inspección y notifica al responsable, a la ' +
        'alcaldía, a la personería y a la secretaría de salud municipal.',
    },
    {
      tipo: 'nota',
      texto:
        'Lea otra vez la tercera fila, porque es lo que casi nadie ha visto: ' +
        '**todo lo que no sea 0 a 10 sale de la tabla como «no apta para ' +
        'contacto primario»**, y eso incluye el nivel «bajo». Un IRAPI de once ' +
        '—un solo parámetro fuera de rango, y de los de menor peso— ya deja el ' +
        'agua declarada no apta por la propia norma. No es una recomendación de ' +
        'mejora: es una calificación que un inspector puede leer en la visita, ' +
        'y que el responsable estaba obligado a haber calculado antes.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las sanciones: no es una, son tres' },
    {
      tipo: 'parrafo',
      texto:
        'Se suele hablar de «la multa de la Ley 1209» como si fuera el único ' +
        'riesgo. Hay tres regímenes paralelos, y el más rápido no es el de la ' +
        'multa.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Régimen', 'Quién actúa', 'Qué puede pasar'],
      filas: [
        ['**Ley 1209, art. 16**', 'Autoridad municipal y de policía', 'Multa de 50 a 1.000 salarios mínimos y cierre hasta 5 días por la primera falta. Segunda falta en menos de 6 meses: 100 a 1.500 y cierre de 5 a 15 días. Tercera: **cierre definitivo**'],
        ['**Ley 9 de 1979, art. 577**', 'Autoridad sanitaria', 'Multas sucesivas **hasta 10.000 salarios mínimos mensuales**, cierre temporal o definitivo, y medidas de seguridad de **ejecución inmediata**'],
        ['**Ley 1801 de 2016, art. 38**', 'Inspector de policía', '**Suspensión temporal de la actividad**, en el acto. Reincidencia en un año: **suspensión definitiva**'],
      ],
      nota:
        'El techo sanitario es un orden de magnitud mayor que el de la propia ' +
        'Ley 1209. Y el pago de la multa no exime de ejecutar las obras ' +
        'ordenadas, ni de la responsabilidad civil o penal.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La ruta operativamente más peligrosa es la tercera: **cualquier ' +
        'persona puede llamar a la Policía** porque menores estén usando una ' +
        'piscina que no cumple, y el inspector puede suspender la actividad en ' +
        'el acto, sin proceso previo. No es la multa lo que llega primero: es ' +
        'el cierre.',
    },
    {
      tipo: 'nota',
      texto:
        'Un defecto de técnica legislativa que vale la pena conocer: el ' +
        'artículo 16 dice «salarios mínimos legales vigentes» sin precisar si ' +
        'son mensuales o diarios. La diferencia entre una lectura y otra es de ' +
        'treinta veces, y no encontré norma ni jurisprudencia que la resuelva.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La responsabilidad del administrador' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está la frase que todo administrador debería leer una vez al año, ' +
        'y que está en la Ley 675, no en la 1209:',
    },
    {
      tipo: 'cita',
      texto:
        'Los administradores responderán por los perjuicios que por dolo, culpa ' +
        'leve o grave, ocasionen a la persona jurídica, a los propietarios o a ' +
        'terceros. Se presumirá la culpa leve del administrador en los casos de ' +
        'incumplimiento o extralimitación de sus funciones, violación de la ley ' +
        'o del reglamento de propiedad horizontal.',
      fuente: 'Ley 675 de 2001, artículo 50',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo despacio. **Si la piscina incumple la ley y ocurre un accidente, ' +
        'la culpa del administrador se presume.** No hay que probarla: es él ' +
        'quien tiene que desvirtuarla. La carga de la prueba se invierte por el ' +
        'solo hecho de la violación de la ley.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y engrana con dos cosas más: el objeto legal de la persona jurídica ' +
        'incluye «cumplir y hacer cumplir la ley», y entre las funciones del ' +
        'administrador está «cuidar y vigilar los bienes comunes». La piscina ' +
        'es bien común.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Si la asamblea no quiere pagar' },
    {
      tipo: 'parrafo',
      texto:
        'Es el escenario real, y la ley da más margen del que se suele usar.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Primero el fondo de imprevistos.** La ley solo permite aprobar una cuota extraordinaria adicional **cuando los recursos del fondo resulten insuficientes**. Es el orden legal, no una opción.',
        '**La mayoría del 70 % no siempre aplica.** Solo se activa cuando la cuota extraordinaria supera cuatro veces la expensa mensual necesaria. Por debajo de ese umbral basta **mayoría simple**. Muchas adecuaciones caben ahí.',
        '**El administrador puede impugnar la decisión.** La ley lo faculta expresamente para impugnar decisiones de la asamblea que no se ajusten a las prescripciones legales. Una decisión que niega los recursos para cumplir una ley imperativa de seguridad es candidata natural.',
        '**Y puede dejar constancia escrita en acta.** Frente a una presunción de culpa, haber advertido, convocado e impugnado por escrito es la única defensa real que le queda.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Si aun así la asamblea se niega, la salida limpia es **cerrar la ' +
        'piscina**. Es exactamente lo que hará la autoridad de policía, y ' +
        'hacerlo antes protege a todos — empezando por el administrador.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánto cuesta ponerse al día' },
    {
      tipo: 'parrafo',
      texto:
        'No voy a dar una cifra, y quiero explicar por qué: **no existe fuente ' +
        'oficial ni gremial colombiana con precios de adecuación a esta ley.** ' +
        'Las cotizaciones que circulan vienen de proveedores con interés ' +
        'directo en el número. Lo que sí se puede dar es la estructura del ' +
        'costo, que sale de las obligaciones mismas:',
    },
    {
      tipo: 'lista',
      items: [
        '**Levantamiento y planos técnicos** firmados por profesional con tarjeta vigente. En la mayoría de copropiedades **estos planos no existen** y hay que levantarlos desde cero.',
        '**Intervención del vaso** para el segundo drenaje, si aplica: vaciado, demolición parcial de fondo, tubería, balanceo hidráulico y reimpermeabilización. Es de lejos el rubro mayor, y es el que hace que las asambleas digan que no.',
        'Cubiertas antiatrapamiento para cada salida de succión.',
        'Sistema de liberación de vacío, con su instalación eléctrica e hidráulica.',
        'Paro de emergencia manual, señalizado y accesible.',
        'Alarma de inmersión autónoma, de al menos 80 dB.',
        'Cerramiento con control de acceso.',
        'Señalización de profundidades y marcación de desniveles en el fondo.',
        'Dotación: dos flotadores con cuerda, bastón con gancho, citófono, y botiquín completo —que la norma tasa e incluye camilla de inmovilización acuática, collar cervical y oxigenoterapia—.',
        '**Costos recurrentes:** salvavidas para fines de semana y vacaciones, y analítica de laboratorio trimestral —mensual en temporada alta—, más los análisis por evento de contaminación fecal, que llegan cuando llegan y hay que tenerlos presupuestados.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'El costo varía en más de un orden de magnitud según un solo dato: **si ' +
        'hay que abrir el vaso o no**. Cualquier cifra que le den sin haber ' +
        'levantado antes los planos de su piscina es publicidad, no ' +
        'presupuesto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Verificación rápida, para el consejo' },
    {
      tipo: 'parrafo',
      texto:
        'Once preguntas. Si alguna se responde que no, hay incumplimiento hoy:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '¿Hay cerramiento con control de acceso, cerrado cuando la piscina no está en servicio?',
        '¿Hay alarma de inmersión funcionando en el horario de no servicio?',
        '¿Cada drenaje tiene su cubierta antiatrapamiento, completa y sin fisuras?',
        '¿Existe sistema de liberación de vacío, y alguien lo ha probado alguna vez?',
        '¿El paro manual de la bomba está afuera del cuarto de máquinas, visible y señalizado?',
        '¿Existe el plan de seguridad y el reglamento de uso, por escrito?',
        '¿El reglamento prohíbe el ingreso con cadenas, collares y ropa suelta?',
        '¿Está el libro o registro sistematizado al día, con las mediciones diarias, las horas de funcionamiento y el agua de reposición?',
        '¿Están publicados los resultados de laboratorio del mes en cartelera?',
        '¿Hay salvavidas certificado los fines de semana y en vacaciones escolares?',
        '¿Alguien ha calculado el IRAPI de cada estanque, y el resultado está entre 0 y 10?',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior está transcrito de los textos oficiales vigentes. Las ' +
        'cuantías de las multas van en salarios mínimos porque su valor en ' +
        'pesos cambia cada año.',
    },
  ],
  etiquetas: ['nacional', 'administrador', 'propiedad-horizontal', 'seguridad'],
  fuentes: [
    {
      titulo: 'Ley 1209 de 2008, por la cual se establecen normas de seguridad en piscinas',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1209_2008.html',
      fecha: '2008-07-14',
    },
    {
      titulo: 'Decreto 554 de 2015, que reglamenta la Ley 1209 y deroga el Decreto 2171 de 2009',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200554%20de%202015.pdf',
      fecha: '2015-03-27',
    },
    {
      titulo: 'Decreto 780 de 2016, decreto único reglamentario del sector salud (libro 2, parte 8, título 7)',
      editor: 'Ministerio de Salud y Protección Social',
      url: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
      fecha: '2016-05-06',
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
      titulo: 'Ley 675 de 2001, régimen de propiedad horizontal',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0675_2001.html',
      fecha: '2001-08-03',
    },
    {
      titulo: 'Ley 9 de 1979, código sanitario nacional, artículos 575 a 580',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0009_1979_pr012.html',
      fecha: '1979-01-24',
    },
    {
      titulo: 'Ley 1801 de 2016, código nacional de seguridad y convivencia, artículo 38',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1801_2016.html',
      fecha: '2016-07-29',
    },
  ],
}
