import type { Post } from '@/lib/types'

/**
 * La pieza de método del pilar institucional. Las otras dos —concursos y
 * pliegos— explican cómo se contrata; esta explica qué hay que saber para que
 * lo contratado se pueda diseñar.
 *
 * La tesis que la estructura, y que es exactamente al revés de como llega el
 * encargo: **un colegio no se dimensiona por metros cuadrados, se dimensiona
 * por ambientes.** El área es el resultado de un programa que sale del PEI y
 * de la demanda, no un dato de partida. Cuando una entidad dice «necesitamos
 * 3.000 m²» ya tomó una decisión pedagógica sin saberlo, y casi siempre la
 * equivocada.
 *
 * Coordinación con el artículo de la NTC 4595:2025: **el «qué cambió en la
 * edición de 2025» no es de esta pieza.** Aquí se explica cómo se diseña con
 * la norma vigente y se remite a la otra en una línea. Ninguna cifra de este
 * artículo sale de la comparación entre ediciones.
 *
 * Restricción de fuente que gobernó la redacción: las portadas de la NTC 4595,
 * la NTC 6705 y la GTC 223 dicen «Prohibida su reproducción». Se cita, se
 * resume, se referencia el numeral y se explica; **no se transcribe ninguna
 * tabla completa.** Las dos tablas del cuerpo son síntesis propias: la primera
 * es una clasificación redactada aquí a partir de las descripciones del
 * numeral 5.3, y la segunda traduce a tabla una regla que en la norma es prosa
 * corrida (numeral 8.2.2). Las cifras sueltas que se citan —1,65 m², 2,5 m²,
 * 1,80 m— van siempre con su numeral, para que el lector vaya a la fuente.
 *
 * Lo que se declara no verificado dentro del artículo:
 *
 * - **La NTC 4596** (señalización escolar) es referencia normativa de la
 *   NTC 4595 y esta la invoca en sus numerales de circulaciones, pero no se
 *   encontró publicada en fuente oficial gratuita. Las copias que circulan son
 *   réplicas universitarias. Se declara y no se cita su contenido.
 * - **La obligatoriedad general de la NTC 4595.** Lo único que se verificó es
 *   una remisión concreta —la del Decreto 1075 de 2015 para las residencias
 *   escolares, añadida en agosto de 2026—; no se encontró una norma que la
 *   haga obligatoria para todo proyecto escolar, y no se afirma.
 * - **El Anexo A** de la NTC 4595 es informativo y así se dice.
 *
 * Fechada el 2 de septiembre de 2026, después del Decreto 974 de 2026, que es
 * la fuente más reciente que cita.
 */
export const post: Post = {
  slug: 'como-se-disena-un-colegio-en-colombia',
  titulo: 'Cómo se diseña un colegio en Colombia',
  pilar: 'institucional',
  fecha: '2026-08-22',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Un colegio no se dimensiona por metros cuadrados: se dimensiona por ' +
    'ambientes, y el área es el resultado. Qué exige la norma escolar ' +
    'colombiana sobre el lote, la luz, los baños y la evacuación.',
  metaDescripcion:
    'Cómo se diseña un colegio en Colombia: programa de ambientes, NTC 4595, ' +
    'requisitos del lote, iluminación natural, accesibilidad y sanitarios.',
  puerta: 'espacio-publico-y-equipamientos',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'El encargo casi siempre llega igual: «tenemos el lote y necesitamos ' +
        'un colegio de tantos metros cuadrados». Los dos datos suelen estar ' +
        'mal, y en ese orden.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Diseñar un establecimiento educativo en Colombia no se parece a ' +
        'diseñar un edificio con un área objetivo. Se parece a resolver un ' +
        'programa: **primero se sabe qué ambientes hacen falta y para cuánta ' +
        'gente, y solo entonces aparece el área.** Quien invierte ese orden ' +
        'termina con un colegio que cumple el metraje y no cumple la norma.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Un colegio no se dimensiona por metros cuadrados' },
    {
      tipo: 'parrafo',
      texto:
        'La norma escolar colombiana no da un área por estudiante y ya. Da ' +
        '**índices por tipo de ambiente**, y el programa se construye ' +
        'sumándolos: tantos grupos de tantos estudiantes, tantos laboratorios, ' +
        'un centro de recursos, un ambiente multifuncional, las áreas libres ' +
        'que le corresponden a cada cosa. El área total es la salida del ' +
        'cálculo, nunca la entrada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y ese cálculo no arranca en arquitectura. Arranca en el **Proyecto ' +
        'Educativo Institucional (PEI)** —o el Proyecto Educativo Comunitario, ' +
        'en los territorios donde aplica—, que es el documento donde el ' +
        'establecimiento dice qué enseña, con qué énfasis y cómo organiza los ' +
        'grupos. La Ley 115 de 1994 obliga a que todo establecimiento tenga ' +
        'uno. La norma técnica lo toma como punto de partida del programa ' +
        'arquitectónico, junto con la demanda del servicio en la zona.',
    },
    {
      tipo: 'nota',
      texto:
        'El orden real de un proyecto escolar público es este: **plan de ' +
        'infraestructura → programa arquitectónico → lote → proyecto.** El ' +
        'plan diagnostica qué tiene el territorio y qué le falta; el programa ' +
        'dice qué ambientes y cuántos; el lote se evalúa contra ese programa. ' +
        'Comprar el lote primero es la decisión más cara que se toma en estos ' +
        'proyectos, y se toma casi siempre.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué norma manda, y hasta dónde' },
    {
      tipo: 'parrafo',
      texto:
        'La referencia es la **NTC 4595, «Planeamiento y diseño para ' +
        'instalaciones y ambientes escolares»**, de ICONTEC. El Ministerio de ' +
        'Educación Nacional la publica en su portal, junto con la NTC 6705, ' +
        'que es la que regula cómo se elabora un plan de infraestructura ' +
        'escolar, y con la GTC 223, que es la guía para hacerlo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La edición vigente es la quinta, ratificada en noviembre de 2025, y ' +
        'trajo cambios de fondo respecto de la anterior. Qué cambió ' +
        'exactamente lo cuenta [otro artículo de este blog]' +
        '(/blog/ntc-4595-2025-que-cambio); aquí se explica cómo se diseña con ' +
        'la norma tal como está hoy.',
    },
    {
      tipo: 'nota',
      texto:
        'Conviene tener clara una distinción que en la práctica se pasa por ' +
        'alto: **una norma técnica de ICONTEC no es un reglamento.** Su ' +
        'obligatoriedad llega por remisión — porque una norma la invoca, o ' +
        'porque el pliego y el anexo técnico del proceso la incorporan como ' +
        'especificación, que es lo habitual en obra pública educativa. Una de ' +
        'esas remisiones sí está verificada y es reciente: el Decreto 1075 de ' +
        '2015, en el artículo que le añadió el decreto de residencias ' +
        'escolares de agosto de 2026, ordena seguir las disposiciones de la ' +
        'NTC 4595 sobre ambientes pedagógicos. **No encontré una norma que la ' +
        'haga obligatoria para todo proyecto escolar sin excepción, y por eso ' +
        'no lo afirmo.** En la práctica da igual: si el pliego la exige, la ' +
        'exige.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los seis tipos de ambiente' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la pieza que hay que entender antes de dibujar nada. La ' +
        'norma no clasifica los espacios por su nombre —aula, biblioteca, ' +
        'taller— sino **por la actividad que admiten y por cuánta gente cabe ' +
        'haciéndola**. De ahí salen seis tipos, y de ahí salen las áreas, las ' +
        'instalaciones y las condiciones ambientales de cada uno. Están en el ' +
        'numeral 5.3.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Tipo', 'Qué actividad admite', 'Ejemplos'],
      filas: [
        ['**A**', 'Trabajo individual, en grupos pequeños y en grupo completo, frontal o cara a cara. Sin exigencias ambientales complejas', 'El aula de clase'],
        ['**B**', 'Consulta y trabajo individual o en grupos pequeños, con énfasis en excluir la interferencia auditiva', 'Biblioteca, centro de recursos, aula de lengua extranjera, apoyo a educación especial'],
        ['**C**', 'Prácticas experimentales con uso intensivo de equipos, altas exigencias de seguridad y de aseo', 'Laboratorios, aula de TIC, talleres de arte y de tecnología'],
        ['**D**', 'Práctica deportiva. Mucha área, mucha ventilación, mucho almacenamiento', 'Cancha multiuso y campos deportivos'],
        ['**E**', 'Circulación y evacuación, con actividades de extensión encima', 'Corredores, escaleras, rampas, vestíbulos'],
        ['**F**', 'Reunión de mucha gente con condiciones especiales de confort auditivo y visual', 'Aula múltiple, teatro, salón de música, y sus áreas libres'],
      ],
      nota:
        'Clasificación redactada a partir de las descripciones de los ' +
        'numerales 5.3.1 a 5.3.6 de la NTC 4595:2025. Las áreas y los ' +
        'requisitos técnicos de cada tipo están en esos mismos numerales.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los índices dan la escala del asunto. Un aula de básica y media parte ' +
        'de **1,65 m² por estudiante** y una de preescolar de **2,00 m²**, ' +
        'sobre las ocupaciones de referencia del numeral 5.3.1. El centro de ' +
        'recursos se calcula a **2,4 m² por estudiante** sobre un porcentaje ' +
        'de la matrícula, no sobre la matrícula entera. Y todo establecimiento ' +
        'debe tener al menos un ambiente multifuncional capaz de albergar en ' +
        'disposición frontal a **una tercera parte de los estudiantes** en el ' +
        'momento de mayor ocupación, con un área no inferior a 1,4 m² por ' +
        'estudiante. Ese último requisito es el que más veces he visto ' +
        'incumplido en anteproyectos que por lo demás estaban bien.',
    },
    {
      tipo: 'nota',
      texto:
        'Hay un requisito que no es de área sino de gestión y que casi nadie ' +
        'mira en la etapa de diseño: la norma fija **porcentajes mínimos de ' +
        'uso efectivo** de cada tipo de ambiente sobre el tiempo disponible ' +
        '(numeral 5.1.1). Un laboratorio que se usa dos horas a la semana no ' +
        'es un lujo: es un incumplimiento. Sirve para defenderse de programas ' +
        'inflados, que en obra pública aparecen más de lo que se cree.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El lote decide antes que la arquitectura' },
    {
      tipo: 'parrafo',
      texto:
        'Buena parte de los proyectos escolares que se caen no se caen por ' +
        'arquitectura. Se caen porque el predio no daba, y eso se sabía antes. ' +
        'Lo que la norma exige del lote, en el numeral 4:',
    },
    {
      tipo: 'lista',
      items: [
        '**Pendiente máxima del 15 % en el área edificable.** Por encima de eso hay que hacer los estudios de estabilidad de taludes, escorrentía y geotecnia que permitan sostener la seguridad y la accesibilidad, y eso cuesta dinero que nadie presupuestó.',
        '**Proporción del lote.** Las relaciones ancho/largo entre 1:1 y 1:4 se consideran favorables; un predio muy alargado no deja poner una cancha multiuso, que es la unidad de medida de los ambientes tipo D.',
        '**Distancia de recorrido.** Para nuevos establecimientos urbanos, máximo 1.000 m a pie desde las viviendas, o el equivalente a 15 minutos en otro medio de transporte. En zona rural, el criterio cambia: donde esté la demanda y donde el acceso sea difícil.',
        '**Servicios.** Agua potable, manejo de aguas residuales, energía, telecomunicaciones y disposición de residuos. Si el predio no los tiene, el proyecto debe incluir la solución **y** la sostenibilidad de su operación. Un colegio rural con un pozo que nadie mantiene es un colegio sin agua a los dos años.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y está el capítulo de los aislamientos, que es donde un lote ' +
        'aparentemente bueno se vuelve inservible. La norma reúne en una sola ' +
        'tabla las franjas de protección y servidumbre que vienen de otras ' +
        'normas —rondas hídricas, redes eléctricas, carreteras, vías férreas, ' +
        'poliductos, rellenos sanitarios, cementerios— con la norma de origen ' +
        'de cada una. No las inventa: las reúne, que para el que está mirando ' +
        'un predio es igual de útil.',
    },
    {
      tipo: 'lista',
      items: [
        'Retiros obligatorios de **60 m, 45 m y 30 m** para carreteras de primer, segundo y tercer orden, y **20 m** desde el eje de una vía férrea.',
        '**2 km** respecto del perímetro urbano para rellenos sanitarios.',
        'Las distancias de seguridad y anchos de servidumbre de líneas eléctricas que fije el RETIE vigente, que no son un número único sino que dependen de la tensión.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Esos son tres ejemplos de una lista más larga, y **la lista no ' +
        'sustituye al POT.** La propia norma lo dice: los aislamientos ' +
        'aplicables se determinan desde los instrumentos de ordenamiento del ' +
        'municipio, y cuando dos disposiciones se cruzan **prevalece la más ' +
        'exigente**. Si va a mirar un predio, mire el POT y la norma técnica, ' +
        'en ese orden, y quédese con el número mayor.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las áreas libres no son lo que sobra' },
    {
      tipo: 'parrafo',
      texto:
        'Este es el error más caro de todos, porque se comete al principio y ' +
        'se descubre al final. En un colegio, el patio no es el residuo de la ' +
        'implantación: **es programa**, tiene índice propio y tiene reparto ' +
        'interno obligatorio.',
    },
    {
      tipo: 'dato',
      valor: '2,5 m² por estudiante',
      etiqueta:
        'Mínimo de circulación, permanencias peatonales y zonas verdes en un ' +
        'establecimiento educativo',
      fuente: 'NTC 4595:2025, numeral 4.11',
    },
    {
      tipo: 'lista',
      items: [
        'De ese mínimo, **al menos el 60 % son zonas verdes** y el resto, circulación y permanencias peatonales.',
        'Y dentro de las zonas verdes hay a su vez un reparto: una parte con siembra continua de especies nativas o adaptadas, o huerta escolar.',
        'La **huerta escolar** tiene mínimo propio —30 m² hasta 500 estudiantes y 50 m² por encima— y hay que preverle agua de riego y almacenamiento de herramientas dentro del área administrativa. Ese almacenamiento es lo que siempre falta.',
        'Contra la isla de calor: **al menos el 50 % de las zonas duras exteriores debe estar sombreado**, con arbolado calculado a diez años de crecimiento o con superficies de índice de reflexión solar suficiente.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Aparte de eso están las **áreas libres curriculares**, que la norma ' +
        'asocia a los ambientes tipo F: plaza de banderas, patios de ' +
        'permanencia, espacios de actividad prolongada al aire libre. Su suma ' +
        'debe permitir la ocupación de **al menos la mitad de la población ' +
        'escolar al mismo tiempo** (numeral 5.3.6.3). No es lo mismo que el ' +
        'índice anterior y no se descuenta de él.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La luz, que es donde más proyectos se ajustan tarde' },
    {
      tipo: 'parrafo',
      texto:
        'La regla de iluminación natural de la norma escolar colombiana es de ' +
        'las más exigentes que hay en el país, y es climática: la fracción de ' +
        'ventana depende de dónde está el colegio. Está en el numeral 8.2.2, y ' +
        'se mide contra el área de piso del espacio servido.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Zona climática', 'Área efectiva de aberturas'],
      filas: [
        ['Templada y fría', '1/3 del área de piso'],
        ['Cálida seca', '1/4 del área de piso'],
        ['Cálida húmeda', '1/5 del área de piso'],
      ],
      nota:
        'Regla del numeral 8.2.2 de la NTC 4595:2025, puesta en tabla. Solo ' +
        'cuentan las aberturas por encima del plano de trabajo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay tres correcciones que cambian el proyecto de fachada por ' +
        'completo. Primero, el área es la **efectiva**: se descuentan marcos y ' +
        'todo lo que impida el paso directo de luz. Segundo, si el vidrio es ' +
        'translúcido o polarizado hay que aumentar el área un 20 %, y si se ' +
        'usan celosías de concreto u otros elementos que obstruyan ' +
        'sensiblemente, un 60 %. Tercero, y es el que más gente descubre ' +
        'tarde: **la separación entre edificios debe ser al menos igual a la ' +
        'altura del edificio más cercano que obstruye la luz** (numeral 8.2.5). ' +
        'Ese solo requisito reordena una implantación entera.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Accesibilidad y evacuación no se ajustan al final' },
    {
      tipo: 'parrafo',
      texto:
        'En un colegio, las circulaciones son un ambiente con nombre propio ' +
        '—el tipo E— y tienen dimensiones mínimas que no son las de un ' +
        'edificio corriente:',
    },
    {
      tipo: 'lista',
      items: [
        '**Corredores: 1,80 m** donde transiten estudiantes, y **2,10 m** si sirven a doble crujía. Solo se puede bajar a 1,20 m en oficinas y dependencias por donde los estudiantes no pasen con frecuencia.',
        '**Puertas: 0,80 m de ancho útil y 2,05 m de altura libre** como mínimo, con mecanismo de apertura que no exija maniobras complicadas.',
        '**Escaleras: 1,20 m de ancho mínimo.** Las rampas, 1,20 m, y 1,80 m cuando la carga de ocupación llega a 300 personas.',
        '**Altura libre de circulación: 2,20 m** como mínimo.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo estructural y la protección contra el fuego no los resuelve la ' +
        'norma escolar: los remite al **NSR vigente**, con dos precisiones que ' +
        'sí son suyas. Una, que los alojamientos de una residencia escolar ' +
        'entran en el Grupo III cuando están en el mismo predio del ' +
        'establecimiento. Otra, la del propio reglamento sismo resistente: no ' +
        'se exige evaluar la vulnerabilidad de construcciones escolares ' +
        'diseñadas y construidas después del 19 de febrero de 1998, ni de las ' +
        'intervenidas durante la vigencia del NSR-10.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los baños, que nadie mira y siempre faltan' },
    {
      tipo: 'parrafo',
      texto:
        'La unidad de cálculo es el **juego sanitario** —un sanitario o un ' +
        'orinal más un lavamanos—, y la relación es de **25 estudiantes por ' +
        'juego** en básica y media, y de **20 en preescolar**, que además ' +
        'tiene alturas de instalación propias. Cada juego tiene su área ' +
        'mínima. Es un cálculo de tres líneas y aun así aparece mal hecho en ' +
        'la mitad de los anteproyectos que reviso.',
    },
    {
      tipo: 'lista',
      items: [
        'Las baterías de **preescolar son independientes** de las de básica y media, van en el mismo nivel de las aulas y **a máximo 20 m** de ellas.',
        'De primaria en adelante, baterías y vestidores independientes para niños y niñas, **a no más de 50 m del puesto de trabajo más lejano**.',
        'De básica primaria en adelante, las baterías de las niñas deben llevar lavamanos y sanitarios dentro del propio espacio, no compartidos.',
        'Debe haber una **unidad sanitaria de accesibilidad universal**, fuera de las baterías de estudiantes, a razón de un sanitario y un lavamanos por cada 15 personas con movilidad reducida, calculando como población potencial el 2 % de la matrícula a máxima capacidad. Esa unidad debe además ser apta para la higiene menstrual.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué debería traer el encargo' },
    {
      tipo: 'parrafo',
      texto:
        'Si usted está del lado de la entidad, esto es lo que conviene tener ' +
        'resuelto antes de contratar el diseño. No por trámite: porque cada ' +
        'punto que falta se convierte en una prórroga o en un rediseño.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El PEI o el PEC del establecimiento**, no un resumen. De ahí sale el programa, y sin él el diseñador está adivinando.',
        '**La proyección de matrícula y la conformación de los grupos**, con el momento de mayor ocupación. Casi todos los índices de la norma se calculan sobre ese momento, no sobre el promedio.',
        '**El estudio del predio**: topografía, geotecnia, riesgo según el POT, servicios disponibles y aislamientos aplicables. Antes de comprar, si todavía se puede.',
        '**La ubicación del proyecto dentro del plan de infraestructura escolar** del territorio, si existe. Es lo que evita construir una sede donde la demanda ya no está.',
        '**El anexo técnico del proceso, con las normas que exige por remisión.** Y leerlo: es donde aparece si el pliego pide algo más duro que la norma técnica.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que este artículo no dice' },
    {
      tipo: 'parrafo',
      texto:
        'Como en el resto del blog, prefiero declarar los huecos a rellenarlos:',
    },
    {
      tipo: 'lista',
      items: [
        '**No cito el contenido de la NTC 4596**, la norma de señalización escolar. La NTC 4595 la referencia y la invoca al hablar de circulaciones, pero no la encontré publicada en fuente oficial gratuita: lo que circula son copias en repositorios universitarios. Citarla de memoria sería exactamente lo que este blog no hace.',
        '**No reproduzco ninguna tabla de la norma.** Los documentos de ICONTEC llevan «prohibida su reproducción» en la portada. Aquí se explica qué dice cada una y en qué numeral está, para que usted vaya a la fuente.',
        '**No afirmo que la NTC 4595 sea obligatoria para todo proyecto escolar.** Verifiqué una remisión concreta, la de residencias escolares; una regla general no la encontré.',
        '**Las cantidades y tipos de espacio del Anexo A son informativos**, y la norma lo dice. Sirven de referente, no de requisito.',
        '**No entro en qué cambió la edición de 2025 frente a la anterior.** Eso está en [el artículo dedicado a la NTC 4595:2025](/blog/ntc-4595-2025-que-cambio).',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí sostengo es lo de arriba: **el área es el resultado, no el ' +
        'dato.** Si el proceso empieza por el programa, la norma se cumple ' +
        'casi sola y el presupuesto se parece a la obra. Si empieza por el ' +
        'metraje, lo que sigue es una cadena de ajustes en la que siempre ' +
        'pierden las áreas libres, la luz y los baños — en ese orden.',
    },
  ],
  etiquetas: ['nacional', 'entidad', 'constructora', 'norma-urbana'],
  fuentes: [
    {
      titulo:
        'NTC 4595:2025, Planeamiento y diseño para instalaciones y ambientes escolares (edición 5.0)',
      editor: 'ICONTEC · publicada por el Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/1780/articles-355996_recurso_14.pdf',
      fecha: '2025-11-19',
    },
    {
      titulo: 'NTC 6705:2023, Elaboración de planes de infraestructura escolar',
      editor: 'ICONTEC · publicada por el Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/1780/articles-355996_recurso_12.pdf',
      fecha: '2023-11-15',
    },
    {
      titulo:
        'GTC 223:2025, Guía para la elaboración de planes de infraestructura escolar (edición 2.0)',
      editor: 'ICONTEC · publicada por el Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/1780/articles-355996_recurso_13.pdf',
      fecha: '2025-11-19',
    },
    {
      titulo:
        'Lineamientos para la infraestructura educativa rural y complemento al manual de dotaciones (primera edición, noviembre de 2021)',
      editor: 'Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/1780/articles-355996_recurso_11.pdf',
      fecha: null,
    },
    {
      titulo: 'Ley 115 de 1994, ley general de educación',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292',
      fecha: '1994-02-08',
    },
    {
      titulo:
        'Decreto 974 de 2026, que reglamenta las residencias escolares y remite a la NTC 4595',
      editor: 'Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/portal/salaprensa/Comunicados/430182:Gobierno-del-presidente-Gustavo-Petro-reglamenta-las-Residencias-Escolares-para-garantizar-educacion-en-zonas-rurales-de-dificil-acceso',
      fecha: '2026-08-05',
    },
    {
      titulo: 'Decreto 926 de 2010, que adopta el Reglamento NSR-10',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39255',
      fecha: '2010-03-19',
    },
    {
      titulo: 'Normas y lineamientos de infraestructura educativa',
      editor: 'Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/1780/w3-article-355996.html',
      fecha: null,
    },
  ],
}
