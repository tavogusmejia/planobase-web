import type { Post } from '@/lib/types'

/**
 * La pieza del pilar de costos que no lleva ni una cifra, a propósito.
 *
 * Es una decisión, no una carencia. Media web colombiana publica porcentajes
 * de imprevistos y de AIU sin fuente, y tablas de $/m² que se contradicen por
 * un factor de dos o tres para la misma ciudad y el mismo año
 * (`docs/PLAN-BLOG.md §6 ter`). Sumar una cifra inventada más a ese ruido no
 * construye autoridad; describir con precisión **qué es cada partida, por qué
 * se olvida y de qué depende su magnitud** sí, y además es lo único que un
 * lector puede usar para revisar el presupuesto que ya tiene sobre la mesa.
 *
 * Lo que sí lleva son los hechos normativos que fijan la existencia de la
 * partida, todos verificados en el articulado: el cargo fijo de curaduría se
 * paga al radicar y no se devuelve; los impuestos van por fuera de las
 * expensas y hay treinta días hábiles para pagarlos; el movimiento de tierras
 * de más de tres metros causa su propia expensa; hay dos vallas obligatorias
 * y no una; la supervisión técnica es independiente del constructor por
 * encima de dos mil metros cuadrados, y por debajo el constructor sigue
 * obligado a controles mínimos con el diseñador y el geotecnista disponibles.
 *
 * Las tres últimas partidas —imprevistos, administración y utilidad, y el
 * costo financiero del tiempo— no son normativas y se dicen como lo que son:
 * criterio de oficio.
 *
 * Fechada en septiembre de 2025.
 */
export const post: Post = {
  slug: 'doce-partidas-que-se-olvidan-al-presupuestar',
  titulo: 'Las doce partidas que todo el mundo olvida al presupuestar',
  pilar: 'costos',
  fecha: '2025-06-07',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'El presupuesto que le pasaron es de obra, no de proyecto. Estas doce ' +
    'partidas casi nunca están, todas se pagan igual, y varias son requisito ' +
    'para que le expidan la licencia. Qué es cada una, por qué se olvida y de ' +
    'qué depende su tamaño.',
  metaDescripcion:
    'Estudio de suelos, diseños, expensas, delineación, conexiones, pólizas e ' +
    'imprevistos: las partidas que faltan en casi todo presupuesto de obra.',
  puerta: 'proyecto-nuevo',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'costos', 'licencia'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'El número que le dieron es el costo de la obra. El costo del proyecto ' +
        'es otro, y la diferencia no es un redondeo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Casi todas las partidas de esta lista se pagan antes de que llegue el ' +
        'primer bulto de cemento, varias son requisito para que le expidan la ' +
        'licencia, y ninguna aparece en un presupuesto por metro cuadrado. No ' +
        'porque alguien las esconda: porque un presupuesto de obra, por ' +
        'definición, presupuesta obra.',
    },
    {
      tipo: 'nota',
      texto:
        'Un aviso sobre lo que **no** va a encontrar aquí: porcentajes ni ' +
        'valores en pesos. No hay fuente colombiana confiable que los publique ' +
        'partida por partida, y los que circulan se contradicen entre sí. Lo ' +
        'que sí se puede decir con precisión es qué es cada cosa, por qué se ' +
        'olvida y de qué depende que sea grande o pequeña. Con eso se revisa un ' +
        'presupuesto; con un porcentaje inventado, no.',
    },

    { tipo: 'titulo', nivel: 2, texto: '1. El estudio de suelos' },
    {
      tipo: 'parrafo',
      texto:
        'El estudio geotécnico define la cimentación, y la cimentación es una ' +
        'de las partidas más caras y menos visibles de la obra. Se olvida ' +
        'porque no se ve en ningún plano bonito y porque el vendedor del lote ' +
        'nunca lo menciona.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La licencia lo exige: para los proyectos de mayor complejidad la ' +
        'solicitud debe acompañarse de los estudios geotécnicos y de suelos, y ' +
        'en todos los casos el curador o la autoridad municipal revisa esos ' +
        'estudios como parte del trámite. Y lo firma un ingeniero civil con ' +
        'posgrado en geotecnia o más de cinco años en diseño geotécnico de ' +
        'fundaciones. No es un ensayo de laboratorio: es un estudio con firma y ' +
        'responsabilidad.',
    },
    {
      tipo: 'nota',
      texto:
        'De qué depende su tamaño: número y profundidad de perforaciones, ' +
        'accesibilidad del lote para el equipo, y si hay que hacer ensayos ' +
        'especiales. Un lote en pendiente, uno con relleno de origen ' +
        'desconocido y uno con nivel freático alto no cuestan lo mismo, ni de ' +
        'lejos.',
    },

    { tipo: 'titulo', nivel: 2, texto: '2. Los diseños técnicos' },
    {
      tipo: 'parrafo',
      texto:
        'El diseño arquitectónico casi siempre está contemplado. Los otros, ' +
        'casi nunca. La solicitud de licencia pide, además del proyecto ' +
        'arquitectónico, la memoria de cálculos y los planos estructurales y ' +
        'las memorias de diseño de los elementos no estructurales; las redes ' +
        'hidrosanitarias y eléctricas tienen su propia reglamentación técnica y ' +
        'su propio firmante.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cada uno de esos diseños es un contrato distinto, con un profesional ' +
        'distinto y una matrícula distinta. Se olvidan porque el cliente ' +
        'contrata «al arquitecto» y supone que ahí viene todo.',
    },
    {
      tipo: 'nota',
      texto:
        'Y hay una partida dentro de la partida que sorprende a quien construye ' +
        'algo grande: en las edificaciones cuyo predio permita superar los **dos ' +
        'mil metros cuadrados** de área construida, la revisión de los diseños ' +
        'estructurales la hace un profesional particular, independiente del ' +
        'diseñador, **a costo de quien solicita la licencia**. Está en la Ley ' +
        '1796 de 2016 y lo repite el Decreto 1077.',
    },

    { tipo: 'titulo', nivel: 2, texto: '3. Las expensas de curaduría' },
    {
      tipo: 'parrafo',
      texto:
        'Es lo que cobra el curador urbano por estudiar y resolver la ' +
        'solicitud. Desde el Decreto 1890 de 2021 se liquidan en unidades de ' +
        'valor tributario, con un cargo fijo y un cargo variable afectados por ' +
        'el estrato o uso, por un factor de municipio y por el área.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos detalles que cambian el flujo de caja y que casi nadie anticipa:',
    },
    {
      tipo: 'lista',
      items: [
        '**El cargo fijo se paga al radicar.** Es condición para que la solicitud se radique, no algo que se pague al final.',
        '**No se devuelve** si la licencia se niega o si usted desiste. La norma lo dice expresamente.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'En los municipios que no tienen curador designado, la licencia la ' +
        'expide la autoridad municipal y **no hay expensas**: la norma prohíbe ' +
        'a esas autoridades cobrarlas. Es una diferencia real de costo entre ' +
        'municipios vecinos.',
    },

    { tipo: 'titulo', nivel: 2, texto: '4. El impuesto de delineación urbana' },
    {
      tipo: 'parrafo',
      texto:
        'Se confunde con las expensas y no tiene nada que ver. Las expensas son ' +
        'la remuneración de un particular que ejerce función pública; la ' +
        'delineación es un impuesto municipal, y cada concejo fija su base y su ' +
        'tarifa. Por eso no hay una cifra nacional, y por eso construir lo ' +
        'mismo cuesta distinto a un lado y otro del límite municipal.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La norma nacional separa las dos cosas con claridad y añade el dato ' +
        'que importa para la caja: los impuestos, gravámenes, tasas, ' +
        'participaciones y contribuciones asociados a la licencia son ' +
        'independientes de las expensas, y **el curador solo puede expedir la ' +
        'licencia cuando el interesado demuestre que los pagó**, con treinta ' +
        'días hábiles para hacerlo desde que se lo requieren.',
    },
    {
      tipo: 'nota',
      texto:
        'Traducción práctica: hay un momento del trámite en que aparece una ' +
        'cuenta que no estaba en el cronograma, hay que pagarla en un plazo ' +
        'corto, y **hasta que no se pague no hay licencia**. Es el punto donde ' +
        'más proyectos se detienen por falta de caja, no por falta de norma.',
    },

    { tipo: 'titulo', nivel: 2, texto: '5. Las conexiones de servicios públicos' },
    {
      tipo: 'parrafo',
      texto:
        'Acueducto, alcantarillado, energía y gas no llegan al predio porque el ' +
        'lote esté dentro del perímetro urbano. La disponibilidad de servicios ' +
        '—que es lo que certifica la empresa prestadora— significa que es ' +
        'técnicamente viable conectarse, no que la conexión esté hecha ni que ' +
        'esté pagada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La propia norma de licencias contempla que sea el urbanizador quien ' +
        'asuma el costo de las conexiones a las redes matrices necesarias para ' +
        'dotar de servicios al proyecto. Ese costo existe, es del proyecto, y ' +
        'no aparece en ningún presupuesto por metro cuadrado.',
    },
    {
      tipo: 'nota',
      texto:
        'De qué depende: la distancia a la red existente y qué haya en medio. ' +
        'Cruzar una vía pavimentada, romper y reponer andén, o tender doscientos ' +
        'metros de tubería son órdenes de magnitud distintos. Y en suelo rural ' +
        'la pregunta cambia entera: allí no hay conexión, hay concesión de ' +
        'aguas y solución propia de aguas residuales.',
    },

    { tipo: 'titulo', nivel: 2, texto: '6. El movimiento de tierras' },
    {
      tipo: 'parrafo',
      texto:
        'Descapote, excavación, cortes, llenos, retiro de sobrantes y la ' +
        'disposición de esos sobrantes en un sitio autorizado. Se olvida porque ' +
        'el presupuesto empieza mentalmente en la cimentación, y esto ocurre ' +
        'antes.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y tiene un componente de trámite que sorprende: la **autorización para ' +
        'el movimiento de tierras y construcción de piscinas** de más de tres ' +
        'metros de excavación es una actuación con expensa propia ante el ' +
        'curador, liquidada por volumen. No va incluida en la licencia.',
    },
    {
      tipo: 'nota',
      texto:
        'El factor que más lo mueve es la pendiente del lote, seguido del ' +
        'balance entre corte y lleno. Un lote plano que no necesita botar tierra ' +
        'y uno en ladera que hay que compensar con muros de contención no ' +
        'comparten ni el orden de magnitud.',
    },

    { tipo: 'titulo', nivel: 2, texto: '7. El cerramiento provisional y las dos vallas' },
    {
      tipo: 'parrafo',
      texto:
        'La obra hay que cerrarla mientras dura, con lo que eso implica: ' +
        'materiales, mano de obra, mantenimiento y desmonte. Y hay que ' +
        'sumarle el campamento, la bodega de materiales, la acometida ' +
        'provisional de agua y energía y las instalaciones sanitarias del ' +
        'personal. Nada de eso queda en pie al final, y por eso se olvida: no ' +
        'se ve en la casa terminada.',
    },
    {
      tipo: 'parrafo',
      texto: 'Las vallas obligatorias son dos, y son distintas:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Cuál', 'Cuándo', 'Qué exige la norma'],
      filas: [
        [
          '**Valla de trámite**',
          'Desde el día siguiente a la radicación y hasta que se resuelva la solicitud',
          'Resistente a la intemperie, **fondo amarillo y letras negras**, mínimo 1,00 × 0,70 m, legible desde la vía pública. Hay que anexar la fotografía al expediente dentro de los cinco días hábiles siguientes, **so pena de que la solicitud se entienda desistida**',
        ],
        [
          '**Valla de obra**',
          'Antes de iniciar cualquier obra y durante toda la ejecución',
          'Mínimo 1,00 × 0,70 m, con la clase y número de licencia, la autoridad que la expidió, el titular, la dirección, la vigencia y la descripción del proyecto',
        ],
      ],
      nota:
        'Decreto 1077 de 2015, artículos 2.2.6.1.2.2.1, parágrafo 1, y ' +
        '2.2.6.1.4.9. En propiedad horizontal y en obras menores el formato es ' +
        'un aviso de 0,30 × 0,50 m. La valla de trámite «no generará ninguna ' +
        'clase de pagos o permisos adicionales», pero fabricarla e instalarla ' +
        'cuesta.',
    },
    {
      tipo: 'nota',
      texto:
        'Una precisión que evita confusiones: **el cerramiento provisional de ' +
        'obra no es la licencia de cerramiento.** Esa modalidad de licencia ' +
        'autoriza encerrar de manera permanente un predio privado, que es otra ' +
        'cosa y se tramita aparte.',
    },

    { tipo: 'titulo', nivel: 2, texto: '8. Las pólizas' },
    {
      tipo: 'parrafo',
      texto:
        'Cumplimiento, estabilidad de la obra, responsabilidad civil ' +
        'extracontractual, salarios y prestaciones, y el todo riesgo ' +
        'constructor. En obra pública son obligatorias por régimen de ' +
        'contratación; en obra privada no las impone una ley general, y ahí ' +
        'está el problema: **como nadie las exige, nadie las presupuesta, y ' +
        'cuando algo sale mal no hay a quién cobrarle.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien contrata a un tercero para construir y no exige póliza de ' +
        'cumplimiento y de estabilidad está financiando el riesgo del ' +
        'constructor con su propio patrimonio. La prima es una fracción ' +
        'pequeña del contrato; la ausencia de la póliza puede costar la obra ' +
        'entera.',
    },
    {
      tipo: 'nota',
      texto:
        'Y hay un amparo que sí es legal y que conviene no confundir con una ' +
        'póliza voluntaria: quien construye o enajena vivienda nueva está ' +
        'obligado a cubrir los perjuicios patrimoniales que se presenten dentro ' +
        'de los **diez años** siguientes a la certificación técnica de ' +
        'ocupación. Eso ampara al comprador, no al que construye para sí mismo.',
    },

    { tipo: 'titulo', nivel: 2, texto: '9. Los ensayos de laboratorio y la supervisión técnica' },
    {
      tipo: 'parrafo',
      texto:
        'Ensayos de compactación, cilindros de concreto, resistencia de ' +
        'materiales, pruebas de tubería, pruebas de estanqueidad. Se olvidan ' +
        'porque quedan repartidos en el tiempo y son individualmente baratos, ' +
        'lo que hace que nadie los sume.',
    },
    {
      tipo: 'parrafo',
      texto: 'La norma los ordena en dos niveles, según el tamaño:',
    },
    {
      tipo: 'lista',
      items: [
        '**Por encima de dos mil metros cuadrados** de área construida que el predio permita alcanzar, la edificación debe someterse a una **supervisión técnica independiente del constructor**. Es un contrato aparte, con su propio profesional.',
        '**Por debajo de ese umbral**, no hay supervisión independiente, pero el constructor sigue obligado a realizar los controles mínimos de calidad que exigen la ley y sus reglamentos, contando durante la obra con la participación del diseñador estructural y del ingeniero geotecnista, cuyas consultas y aclaraciones deben quedar registradas y documentadas.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Esa última frase es una partida disfrazada de trámite: «contar con la ' +
        'participación» del diseñador y del geotecnista durante la obra ' +
        'significa que sus honorarios no terminan cuando entregan los planos. ' +
        'Casi ningún contrato de diseño lo dice, y casi ninguna obra lo tiene ' +
        'presupuestado.',
    },

    { tipo: 'titulo', nivel: 2, texto: '10. Los imprevistos' },
    {
      tipo: 'parrafo',
      texto:
        'No es un colchón para tapar errores de estimación. Es la partida que ' +
        'cubre lo que no se podía saber antes de abrir: el suelo que aparece ' +
        'distinto al del apique, la instalación enterrada que no estaba en ' +
        'ningún plano, la lluvia que paró la fundida.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Se olvida porque incluirlo obliga a admitir que el presupuesto no es ' +
        'exacto, y eso, en una negociación, se lee como debilidad. **Un ' +
        'presupuesto sin imprevistos no es más preciso: es menos honesto.**',
    },
    {
      tipo: 'nota',
      texto:
        'No doy un porcentaje, y quiero explicar por qué: el porcentaje ' +
        'razonable depende de cuánto se sabe del sitio, y eso cambia con el ' +
        'proyecto. Obra nueva en lote plano con estudio de suelos completo, ' +
        'remodelación de un edificio del que no hay planos, y reforzamiento ' +
        'estructural de algo con daño activo son tres niveles de incertidumbre ' +
        'radicalmente distintos. **La cifra correcta es una consecuencia del ' +
        'nivel de información, no una costumbre del gremio.**',
    },

    { tipo: 'titulo', nivel: 2, texto: '11. La administración y la utilidad' },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo que hace que la obra funcione y no queda incorporado a ella: ' +
        'el director de obra, el residente, el almacenista, la contabilidad, ' +
        'los aportes de seguridad social del personal administrativo, el ' +
        'transporte, la papelería y el porcentaje de la oficina que ese ' +
        'proyecto consume.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y la utilidad, que es la remuneración del constructor por asumir el ' +
        'riesgo. Se olvida —o se disimula repartiéndola dentro de los precios ' +
        'unitarios— porque nombrarla obliga a defenderla. El efecto secundario ' +
        'de disimularla es peor: dos presupuestos dejan de ser comparables, ' +
        'porque uno la muestra y el otro la esconde.',
    },
    {
      tipo: 'nota',
      texto:
        'Al comparar dos ofertas, la primera pregunta no es cuál es más barata: ' +
        'es **si las dos incluyen lo mismo bajo la misma estructura**. Una que ' +
        'muestra administración y utilidad por separado casi siempre parece más ' +
        'cara que otra que las diluyó, y casi siempre no lo es.',
    },

    { tipo: 'titulo', nivel: 2, texto: '12. El costo financiero del tiempo' },
    {
      tipo: 'parrafo',
      texto:
        'Es la partida más grande de las que nadie escribe. El proyecto tarda, ' +
        'y mientras tarda hay dinero comprometido que no produce, arriendo que ' +
        'se sigue pagando, intereses que corren y precios que se mueven.',
    },
    {
      tipo: 'lista',
      items: [
        '**El costo de oportunidad del capital inmovilizado**, desde la compra del lote hasta la entrega.',
        '**El arriendo del sitio donde vive mientras tanto**, si la obra es su vivienda. Multiplicado por los meses reales, no por los prometidos.',
        '**Los intereses del crédito**, y la diferencia entre lo que se pensaba desembolsar y cuándo se desembolsa de verdad.',
        '**El aumento de precios durante la obra**, que en construcción no se reparte parejo: la mano de obra y los materiales no se mueven al mismo ritmo, y un presupuesto actualizado con un solo índice general subestima el componente que más sube.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y una consecuencia de todo lo anterior que conviene decir sin ' +
        'adornos: **cada mes de demora en el trámite es plata**. Radicar una ' +
        'solicitud incompleta, que produce un acta de observaciones y un ciclo ' +
        'entero de correcciones, no cuesta lo que cuesta corregir los planos. ' +
        'Cuesta lo que cuesta el mes.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se arma un presupuesto que no se cae' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Separe tres presupuestos, no uno:** preinversión (estudios, diseños, trámites e impuestos), obra, y costo del tiempo. Sumarlos es fácil; separarlos es lo que permite ver cuál se disparó.',
        '**Ponga fecha a todo.** Un presupuesto sin fecha de referencia no se puede actualizar ni discutir seis meses después.',
        '**Escriba lo que no incluye.** Es la sección más útil de cualquier presupuesto y la que casi nunca está.',
        '**Pida las doce partidas explícitas**, aunque alguna vaya en cero. Un cero declarado es información; una ausencia no.',
        '**Compare estructuras antes que totales.** Dos números finales no se comparan si detrás hay dos alcances distintos.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Las obligaciones citadas están transcritas del articulado vigente. Las ' +
        'tres últimas partidas no las impone ninguna norma: son criterio de ' +
        'oficio, y por eso van dichas sin cifras.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Decreto 1077 de 2015: documentos de la solicitud, revisión del proyecto, vallas, expensas e impuestos asociados a la licencia',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo:
        'Decreto 1890 de 2021: expensas de curaduría en UVT y expensas por otras actuaciones',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://normograma.superservicios.gov.co/normograma/compilacion/docs/decreto_1890_2021.htm',
      fecha: '2021-12-30',
    },
    {
      titulo:
        'Ley 1796 de 2016, artículos 3 a 8: revisión independiente de diseños, supervisión técnica independiente y amparo de perjuicios',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
    {
      titulo:
        'Ley 400 de 1997, artículos 26 a 29: firmantes de los diseños estructurales y de los estudios geotécnicos',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
  ],
}
