import type { Post } from '@/lib/types'

/**
 * Pieza de programa, no de norma, y el pilar de casa campestre la necesitaba:
 * todo el pilar habla de qué se puede construir y cuánto cuesta, y ninguna
 * pieza hablaba de **para qué**. La tesis es que dos casas con la misma planta
 * y el mismo presupuesto son dos proyectos distintos según quién duerma en
 * ellas, y que a partir de un umbral la diferencia deja de ser de gusto y pasa
 * a ser de régimen.
 *
 * Aunque el eje sea de programa, el esqueleto está verificado contra
 * articulado leído:
 *
 * 1. **La línea son treinta días, y es una definición legal.** El parágrafo 1
 *    del artículo 3 de la Ley 1101 de 2006, en el texto que le dio el artículo
 *    37 de la Ley 2068 de 2020, define quién presta «servicios de vivienda
 *    turística» por arrendar «por periodos inferiores a 30 días». Y añade una
 *    **presunción de hecho** —quien aparezca arrendando más de un inmueble en
 *    esas condiciones— que casi nadie cita.
 * 2. **El registro es previo a la prestación**, no posterior: artículo 4,
 *    numeral 7 de la Ley 2068. Operar sin él es infracción del numeral 7 del
 *    artículo 71 de la Ley 300, y la sanciona la Superintendencia de Industria
 *    y Comercio, que puede cancelar el registro hasta por cinco años.
 * 3. **La póliza del artículo 32 de la Ley 2068** obliga a los prestadores de
 *    alojamiento turístico y su cobertura mínima está enumerada en la ley. No
 *    la menciona casi nadie.
 * 4. **La contribución parafiscal es del 2,5 por mil sobre ingresos
 *    operacionales**, en el texto que le dio el artículo 304 de la Ley 2294 de
 *    2023 al artículo 36 de la Ley 2068. Se verificó esa cadena entera; citar
 *    la tarifa original de la 2068 habría sido citar una norma superada.
 * 5. **En propiedad horizontal el reglamento tiene que autorizarlo.** El
 *    artículo 34 de la Ley 1558 de 2012, modificado por el artículo 144 del
 *    Decreto 2106 de 2019, pone la obligación de reportar en cabeza del
 *    administrador, con multa de hasta tres salarios mínimos, y remite las
 *    sanciones al propietario al numeral 2 del artículo 59 de la Ley 675.
 * 6. **En suelo rural, el turismo tiene su propia puerta.** El parágrafo del
 *    artículo 2.2.2.2.2.4 del Decreto 1077 permite los servicios
 *    ecoturísticos, etnoturísticos, agroturísticos y acuaturísticos «en
 *    cualquier parte del suelo rural» — pero condicionados a las normas de uso
 *    del POT o de la unidad de planificación rural. Es una habilitación
 *    condicionada, no una licencia general, y así se presenta.
 *
 * Lo que NO se publica, y se declara dentro del artículo:
 *
 * - **Qué dice el POT de su municipio.** Son mil ciento veintitantos POT y
 *   ninguno vale por otro. El artículo dice qué preguntar, no qué le van a
 *   contestar.
 * - **Cualquier rentabilidad, ocupación media o tarifa por noche.** No hay
 *   fuente pública con metodología y no es materia de este estudio.
 * - **Cualquier precio de obra.** Doctrina del pilar de costos.
 * - **Si la piscina de una casa arrendada por días deja de ser «particular»**
 *   a efectos de la Ley 1209. La ley define la particular como la unifamiliar
 *   y nombra los centros vacacionales entre las de uso restringido; el caso
 *   intermedio no está resuelto en el texto y se plantea como pregunta, no
 *   como respuesta.
 *
 * Todo lo de programa va rotulado como criterio del estudio.
 *
 * Fechado en agosto de 2026. Hay un proyecto de decreto del Ministerio de
 * Comercio, publicado en 2026, que sustituiría parcialmente el título del
 * Decreto 1074 donde vive el Registro Nacional de Turismo. A la fecha del
 * artículo sigue siendo proyecto, y así se dice.
 */
export const post: Post = {
  slug: 'casa-de-descanso-o-renta-corta',
  titulo: 'Casa de descanso o renta corta: qué cambia en el diseño',
  pilar: 'casa-campestre',
  fecha: '2025-09-21',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'La misma planta, el mismo presupuesto y el mismo lote dan dos casas ' +
    'distintas según quién duerma en ellas. Y hay una línea —treinta días— a ' +
    'partir de la cual la diferencia deja de ser de programa y pasa a ser de ' +
    'régimen.',
  metaDescripcion:
    'Qué cambia en el diseño de una casa campestre si va a alquilarse por ' +
    'temporadas, y qué exige la ley cuando el arriendo baja de treinta días.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Dos encargos que llegan con la misma frase —«una casa de campo, tres ' +
        'alcobas, con piscina»— pueden ser dos proyectos completamente ' +
        'distintos. Lo que los separa no es el estilo ni el presupuesto: es ' +
        'quién va a dormir ahí, y cada cuánto.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una casa de descanso familiar se usa treinta o cuarenta noches al año, ' +
        'siempre por las mismas personas, que dejan sus cosas y vuelven. Una ' +
        'casa de renta corta se usa muchas más noches, por gente distinta cada ' +
        'vez, que llega sin nada y se va sin dejar nada. Y a partir de cierto ' +
        'punto, la segunda deja de ser una casa a ojos de la ley.',
    },
    {
      tipo: 'nota',
      texto:
        'Este artículo es de **programa**, no de estilo. Lo que es norma va ' +
        'citado al articulado; lo que es criterio de oficio va rotulado como ' +
        'tal y se distingue a simple vista. Lo que decide qué se puede ' +
        'construir en el predio es otra conversación, y está en [qué puedo ' +
        'construir en suelo rural](/blog/que-puedo-construir-en-suelo-rural).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La línea que casi nadie sabe que existe: treinta días' },
    {
      tipo: 'parrafo',
      texto:
        'No es una convención del mercado ni una regla de las plataformas. Es ' +
        'una definición legal, y está escrita en la ley que fija quién paga la ' +
        'contribución parafiscal del turismo:',
    },
    {
      tipo: 'cita',
      texto:
        'Para los efectos de la presente ley, se considera que prestan los ' +
        'servicios de vivienda turística las personas naturales o jurídicas ' +
        'cuya actividad sea la de arrendar o subarrendar por periodos ' +
        'inferiores a 30 días, con o sin servicios complementarios, bienes ' +
        'raíces de su propiedad o de terceros […]. Se presume de hecho que ' +
        'quien aparezca arrendando más de un inmueble de su propiedad o de ' +
        'terceros por periodos inferiores a 30 días es prestador de servicios ' +
        'turísticos.',
      fuente:
        'Ley 1101 de 2006, art. 3, parágrafo 1, en el texto del art. 37 de la ' +
        'Ley 2068 de 2020',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos cosas ahí adentro. La primera: **el umbral es el plazo del ' +
        'contrato, no el número de huéspedes ni el precio.** La segunda, que ' +
        'casi nadie cita: existe una **presunción de hecho** para quien aparezca ' +
        'arrendando más de un inmueble en esas condiciones. No hay que ' +
        'declararse prestador; se es, y la carga de demostrar lo contrario se ' +
        'invierte.',
    },
    {
      tipo: 'nota',
      texto:
        'Y el registro va **antes**, no después. La definición legal de ' +
        'prestador termina con una frase que no admite lectura amable: «el ' +
        'prestador de servicios turístico deberá inscribirse en el Registro ' +
        'Nacional de Turismo previamente a la prestación de servicios ' +
        'turísticos». Prestar sin ese registro es una infracción tipificada, y ' +
        'la sanciona la Superintendencia de Industria y Comercio, que además ' +
        'puede **cancelar la inscripción hasta por cinco años**.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué se activa al cruzar esa línea' },
    {
      tipo: 'parrafo',
      texto:
        'La casa no cambia. Cambia el conjunto de obligaciones que la ' +
        'acompañan, y conviene saberlas antes de diseñar, porque tres de las ' +
        'cinco tienen consecuencias físicas:',
    },
    {
      tipo: 'lista',
      items: [
        '**Inscripción activa y vigente en el Registro Nacional de Turismo**, previa a la primera noche vendida.',
        '**Póliza de seguro de responsabilidad contra daños a huéspedes y a terceros.** La ley enumera su cobertura mínima: muerte, incapacidad permanente, incapacidad temporal, lesiones, daños a bienes de terceros y gastos médicos. Es una obligación de los prestadores de alojamiento turístico, no una recomendación del corredor.',
        '**Contribución parafiscal del 2,5 por mil sobre los ingresos operacionales.** Es la tarifa vigente, en el texto que le dio la ley del plan de desarrollo de 2023.',
        '**Registro de huéspedes.** El artículo 22 obliga a los prestadores de alojamiento a llevarlo mediante la Tarjeta de Registro de Alojamiento, en el sistema que disponga el Gobierno, y esa tarjeta «es prueba del contrato de hospedaje». Eso implica un sitio y un momento para recibir: una recepción, aunque sea una mesa.',
        '**Las plataformas están obligadas a retirarlo si no tiene registro.** No es discrecional: la ley les ordena no publicar, o eliminar, los anuncios de prestadores sin inscripción activa, y las hace responder ante el consumidor por publicidad engañosa si lo permiten.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Una nota de vigencia, porque este es un terreno en movimiento. El ' +
        'marco que aquí se cita es el de la Ley 2068 de 2020 y su decreto ' +
        'reglamentario de 2021, compilado en el decreto único del sector ' +
        'comercio. **Hay un proyecto de decreto publicado en 2026** que ' +
        'sustituiría parcialmente ese título en lo relativo al Registro ' +
        'Nacional de Turismo y a las plataformas. A la fecha de este artículo ' +
        'sigue siendo un proyecto, no una norma. Antes de tramitar, verifique.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Si la casa está en un condominio' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay una trampa que ha costado pleitos: **el reglamento de la ' +
        'copropiedad tiene que autorizar esa destinación.** No basta con que la ' +
        'ley del turismo lo permita, ni con tener el registro al día.',
    },
    {
      tipo: 'cita',
      texto:
        'Es obligación de los administradores de los inmuebles sometidos al ' +
        'régimen de propiedad horizontal en los cuales se preste el servicio de ' +
        'vivienda turística, reportar a la Superintendencia de Industria y ' +
        'Comercio la prestación de tal tipo de servicios […] cuando estos no ' +
        'estén autorizados por los reglamentos para dicha destinación, o no se ' +
        'encuentren inscritos en el Registro Nacional de Turismo.',
      fuente:
        'Ley 1558 de 2012, art. 34, modificado por el art. 144 del Decreto ' +
        '2106 de 2019',
    },
    {
      tipo: 'nota',
      texto:
        'El mismo artículo cierra el círculo por los dos lados. Al ' +
        '**administrador** que no reporte le cabe una multa de hasta tres ' +
        'salarios mínimos mensuales. Al **propietario** que opere sin la ' +
        'autorización en el reglamento, debidamente registrada en la Oficina de ' +
        'Registro de Instrumentos Públicos, le aplican las sanciones de la ley ' +
        'de propiedad horizontal. Y al inscribirse en el registro hay que ' +
        '**declarar** que las unidades privadas están autorizadas por el ' +
        'reglamento. Cómo se cambia un reglamento está en [reformar en ' +
        'propiedad horizontal](/blog/reformar-en-propiedad-horizontal).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El POT va antes del diseño: vivienda no es alojamiento' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que se salta casi todo el mundo, y es la única que ' +
        'puede volver imposible el proyecto. En suelo rural, las áreas ' +
        'destinadas a **vivienda campestre** son una categoría que el POT ' +
        'delimita expresamente, con sus propias normas de parcelación. Alojar ' +
        'turistas es otro uso, y tiene su propia puerta:',
    },
    {
      tipo: 'cita',
      texto:
        'Los servicios ecoturísticos, etnoturísticos, agroturísticos y ' +
        'acuaturísticos podrán desarrollarse en cualquier parte del suelo ' +
        'rural, de acuerdo con las normas sobre usos y tratamientos adoptadas ' +
        'en el plan de ordenamiento territorial o en la unidad de planificación ' +
        'rural.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.2.2.2.4, parágrafo',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo despacio, porque tiene dos mitades y la segunda se cita poco. ' +
        '**«En cualquier parte del suelo rural»** es una habilitación amplia. ' +
        '**«De acuerdo con las normas sobre usos y tratamientos adoptadas en el ' +
        'plan de ordenamiento territorial»** es la condición que la devuelve al ' +
        'municipio. No es un permiso nacional: es una puerta que el POT abre o ' +
        'cierra.',
    },
    {
      tipo: 'nota',
      texto:
        'Y hay un techo que sorprende a quien piensa en grande. En suelo rural ' +
        '**suburbano**, los proyectos comerciales y de servicios de más de ' +
        '5.000 m² de construcción solo se permiten en áreas delimitadas ' +
        'cartográficamente para ese uso en el POT, con un índice de ocupación ' +
        'que **no puede superar el 30 % del predio**, y «en ningún caso» en ' +
        'suelo rural no suburbano. Una casa no llega ahí; un proyecto de ' +
        'alojamiento que crece, sí.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo que hay que preguntar por escrito en la oficina de planeación, ' +
        'antes de dibujar: **si el uso de alojamiento turístico está permitido, ' +
        'condicionado o prohibido en la categoría de suelo del predio**, y si ' +
        'la categoría es de vivienda campestre, qué se entiende por servicios ' +
        'ecoturísticos o agroturísticos en ese POT. No publico la respuesta ' +
        'porque hay más de mil POT en el país y ninguno vale por otro.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que cambia en el diseño' },
    {
      tipo: 'parrafo',
      texto:
        'De aquí en adelante es **criterio de este estudio**, salido de obra y ' +
        'de encargos, no de norma. Va dicho así de frente porque no hay fuente ' +
        'publicada que lo respalde y porque la parte anterior sí la tiene.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'La casa vacía la mayor parte del año' },
    {
      tipo: 'parrafo',
      texto:
        'Es la condición que gobierna las dos, la de descanso y la de renta, y ' +
        'la que menos se diseña. Una casa cerrada no está en reposo: está ' +
        'trabajando sola.',
    },
    {
      tipo: 'lista',
      items: [
        '**La ventilación tiene que funcionar con la casa cerrada.** En clima cálido húmedo, una casa sellada tres semanas produce moho en los sitios que no se ven. Rejillas altas, cumbrera ventilada y armarios que respiren valen más que un deshumidificador que nadie enciende.',
        '**Todo lo que se pueda cerrar sin llave, sobra.** Cada punto que exige que alguien vaya a operarlo es un punto que va a fallar.',
        '**Los acabados envejecen distinto sin uso.** La madera sin ventilar y los sellos de silicona sin limpiar se degradan más rápido en una casa vacía que en una habitada.',
        '**El jardín no espera.** En clima cálido, tres meses sin mantenimiento borran el proyecto paisajístico. O hay riego automático y alguien que corte, o el diseño tiene que aguantar el abandono.',
      ],
    },

    { tipo: 'titulo', nivel: 3, texto: 'El agua y el saneamiento se dimensionan por el pico' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí la diferencia entre las dos casas es aritmética. El reglamento ' +
        'técnico del sector asigna la dotación **por habitante**, y la máxima ' +
        'depende de la altura: 140 litros por habitante y día por debajo de ' +
        '1.000 m s. n. m., 130 entre 1.000 y 2.000, y 120 por encima. Una casa ' +
        'de renta corta con tres alcobas puede dormir ocho personas la mitad ' +
        'del año; la misma casa como refugio familiar duerme cuatro, cuarenta ' +
        'noches.',
    },
    {
      tipo: 'nota',
      texto:
        'La consecuencia es doble y va en direcciones opuestas. **El sistema se ' +
        'dimensiona por el pico** —tanque, bombeo y campo de infiltración—, y ' +
        'eso encarece. Pero **el tratamiento biológico sufre con la ' +
        'intermitencia**: un tanque séptico alimentado por rachas y vacío entre ' +
        'ellas no mantiene su población bacteriana. Cómo se dimensiona todo el ' +
        'tren y qué permiso pide está en [aguas residuales sin ' +
        'alcantarillado](/blog/aguas-residuales-sin-alcantarillado), y de dónde ' +
        'sale el agua, en [el agua en el ' +
        'campo](/blog/agua-en-el-campo-que-permiso-necesita).',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Seguridad: el problema no es el ladrón, es la ausencia' },
    {
      tipo: 'lista',
      items: [
        '**Un núcleo que se pueda cerrar.** Un cuarto o una bodega con llave, que quede fuera del recorrido del huésped y donde vivan las cosas del dueño. Es el detalle que más se pide después y peor se resuelve después.',
        '**Cerramiento y visibilidad antes que alarma.** En un predio rural, una alarma llama a alguien que tarda cuarenta minutos. La disuasión útil es física y es de implantación: por dónde se ve la casa y por dónde se llega a ella.',
        '**Energía y agua con autonomía.** No es lujo: es que un corte de tres días con la casa sola convierte una nevera llena en un problema de limpieza.',
        '**Los accesos se diseñan para llaves que no existen.** Cerraduras con código, o una caja de llaves, o alguien del pueblo con juego propio. Elegirlo cambia la puerta, no solo la cerradura.',
      ],
    },

    { tipo: 'titulo', nivel: 3, texto: 'Mantenimiento a distancia' },
    {
      tipo: 'lista',
      items: [
        '**Todo lo que haya que revisar tiene que estar accesible sin escalera.** Registros, filtros, tableros y llaves de paso, agrupados y señalizados, o no los va a revisar nadie.',
        '**Un tablero de servicios en un solo sitio.** Cuando quien va a mirar es un vecino y no un técnico, la diferencia entre «cierre esa llave» y «busque la llave» es de horas.',
        '**Medición separada de lo que se puede fugar.** Un contador de agua propio para la piscina o el riego convierte una factura rara en un diagnóstico.',
        '**El listado de mantenimiento se entrega con la casa.** Qué se revisa, cada cuánto y quién. Es la parte del proyecto que más se agradece a los dos años.',
      ],
    },

    { tipo: 'titulo', nivel: 3, texto: 'Y lo que cambia solo si va a alquilarse' },
    {
      tipo: 'lista',
      items: [
        '**El recorrido del huésped se separa del recorrido de la casa.** Llegada, equipaje y salida por un lado; ropa sucia, basura y depósito por otro. Si se cruzan, se nota en cada rotación.',
        '**Los baños mandan sobre las alcobas.** En renta corta, un baño por alcoba deja de ser lujo y pasa a ser condición, y eso cambia el esquema hidráulico y el saneamiento antes que la planta.',
        '**Acabados de rotación, no de casa propia.** Superficies que se limpian rápido, esquinas protegidas, pisos que perdonan. No es hacerla fea; es que la limpieza entre huéspedes dura dos horas y no dos días.',
        '**Una cocina para cocinar dos veces**, no una cocina de revista. Menos electrodomésticos, más resistentes, y almacenamiento con llave para lo del dueño.',
        '**Sitio para recibir y para el registro de huéspedes.** La ley obliga a llevarlo; el proyecto tiene que darle un lugar, aunque sea un mueble junto a la entrada.',
        '**Ruido entre alcobas.** Gente que no se conoce duerme peor. El aislamiento entre habitaciones es la queja número uno y la más barata de prevenir en planos.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'La piscina, que puede cambiar de categoría con el uso' },
    {
      tipo: 'parrafo',
      texto:
        'Vale la pena plantearlo como pregunta abierta, porque no lo voy a ' +
        'resolver aquí. La Ley 1209 define la piscina **particular** como ' +
        '«exclusivamente la unifamiliar», y entre las de **uso restringido** ' +
        'nombra expresamente los hoteles y los centros vacacionales. Una casa ' +
        'unifamiliar que se alquila por noches a desconocidos cae en un punto ' +
        'intermedio que el texto no resuelve.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo prudente, y lo que este estudio recomienda, es **diseñarla por la ' +
        'exigencia más alta desde el principio**: las dos obligaciones de ' +
        'seguridad que la ley le impone incluso a la piscina particular no son ' +
        'negociables, y las demás son mucho más baratas de prever que de ' +
        'añadir. Qué obliga exactamente y qué no, artículo por artículo, está ' +
        'en [la Ley 1209](/blog/ley-1209-piscinas-copropiedad).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las dos casas, lado a lado' },
    {
      tipo: 'tabla',
      cabeceras: ['Decisión', 'Casa de descanso', 'Renta corta'],
      filas: [
        ['Quién duerme', 'Los mismos, pocas noches al año', 'Desconocidos, muchas noches al año'],
        ['Alcobas y baños', 'Según la familia; baños compartidos son aceptables', 'El baño por alcoba deja de ser opcional'],
        ['Almacenamiento', 'La casa entera es del dueño', 'Un núcleo cerrado, fuera del recorrido del huésped'],
        ['Acabados', 'Se eligen por gusto y por duración', 'Se eligen por velocidad de limpieza y resistencia'],
        ['Agua y saneamiento', 'Pico moderado, uso muy intermitente', 'Pico alto y frecuente: manda el dimensionamiento'],
        ['Accesos', 'Llaves del dueño', 'Entrega sin presencia: código, caja de llaves o gestor'],
        ['Trámites', 'Ninguno adicional', 'Registro Nacional de Turismo, póliza, parafiscal y registro de huéspedes'],
        ['Norma urbana', 'Uso de vivienda', 'Uso de alojamiento: lo decide el POT, no la ley de turismo'],
      ],
      nota:
        'Las dos últimas filas son norma citada en este artículo. Las seis ' +
        'primeras son **criterio de este estudio**.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se ordena la decisión' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Decida el uso antes que la planta.** No es una decisión que se pueda dejar para después de los planos: cambia baños, circulaciones, saneamiento y acabados.',
        '**Pregunte por escrito en planeación** si el alojamiento turístico está permitido en la categoría de suelo del predio, y con qué condiciones.',
        '**Si es condominio, lea el reglamento antes de comprar.** Que el reglamento no lo autorice es un problema que se resuelve en asamblea, y las asambleas no tienen calendario.',
        '**Dimensione agua y saneamiento por el pico real de huéspedes**, no por el número de alcobas.',
        '**Diseñe el núcleo cerrado del dueño desde el primer esquema.** Añadirlo después siempre sale como un cuarto sin ventana.',
        '**Si va a alquilar, cuente el registro, la póliza y la parafiscal como parte del proyecto**, no como un trámite posterior. El registro va antes de la primera noche.',
        '**Y si duda entre las dos**, diseñe para renta corta y úsela como casa de descanso. El camino inverso obliga a obra.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Esa última es la recomendación más útil de todo el artículo, y la más ' +
        'barata: **una casa diseñada para recibir desconocidos funciona ' +
        'perfectamente para recibir a la familia.** Al revés no. Y la decisión ' +
        'de alquilar casi nunca se toma antes de construir — se toma tres años ' +
        'después, cuando ya no se puede corregir sin romper.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'suelo-rural', 'norma-urbana', 'propiedad-horizontal'],
  fuentes: [
    {
      titulo:
        'Ley 2068 de 2020, ley general de turismo: definición de prestador y registro previo (art. 4), tarjeta de registro de alojamiento (art. 22), póliza de responsabilidad (art. 32), tarifa de la contribución parafiscal (art. 36), sujetos pasivos y definición de vivienda turística (art. 37), obligaciones de las plataformas (art. 38) e infracciones y sanciones (arts. 28 y 29)',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2068_2020.html',
      fecha: '2020-12-31',
    },
    {
      titulo:
        'Ley 2294 de 2023, artículo 304: tarifa de la contribución parafiscal para el turismo',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2294_2023_pr007.html',
      fecha: '2023-05-19',
    },
    {
      titulo:
        'Ley 1558 de 2012, artículo 34: obligación de los administradores de propiedad horizontal en inmuebles donde se preste el servicio de vivienda turística',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48321',
      fecha: '2012-07-10',
    },
    {
      titulo:
        'Decreto 1836 de 2021, que reglamenta el Registro Nacional de Turismo y lo compila en el Decreto 1074 de 2015',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175266',
      fecha: '2021-12-24',
    },
    {
      titulo:
        'Decreto 1077 de 2015: categorías del suelo rural y de desarrollo restringido (arts. 2.2.2.2.1.3 y 2.2.2.2.1.4) y normas para usos comerciales y de servicios en suelo rural suburbano (art. 2.2.2.2.2.4)',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
  ],
}
