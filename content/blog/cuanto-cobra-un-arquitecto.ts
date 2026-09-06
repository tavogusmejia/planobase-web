import type { Post } from '@/lib/types'

/**
 * El artículo que desactiva la objeción de precio antes de la primera llamada.
 *
 * La verificación tumbó la premisa con la que arrancó el encargo: **no existe
 * evidencia localizable de que la Superintendencia de Industria y Comercio
 * haya objetado el Decreto 2090 de 1989.** No se afirma.
 *
 * Pero la conclusión que se buscaba se sostiene con mejor fuente: una sentencia
 * del Consejo de Estado de 2020 dice que el decreto puede usarse como criterio
 * técnico «pero en ningún caso como criterio de carácter obligatorio», porque
 * decayó al derogarse la norma que le daba fundamento. Eso es un ancla mucho
 * más firme que un concepto de la SIC.
 *
 * El argumento central del artículo no es de precio sino de ley: el artículo 26
 * de la Ley 400 de 1997 impide que un arquitecto firme el diseño estructural o
 * el estudio geotécnico. Cobrarlos aparte no es una política del estudio.
 *
 * Nada de rangos inventados. El mercado colombiano de diseño no publica
 * precios, y las dos guías que circulan se contradicen por un factor de tres.
 * Mostrar esa contradicción con nombre y URL es más honesto —y más útil— que
 * añadir una tercera cifra sin respaldo.
 */
export const post: Post = {
  slug: 'cuanto-cobra-un-arquitecto',
  titulo: 'Cuánto cobra un arquitecto en Colombia',
  pilar: 'costos',
  fecha: '2026-08-13',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Nadie publica precios, y las dos guías que circulan se contradicen por ' +
    'un factor de tres. Lo que sí existe: una metodología con reparto por ' +
    'etapas, y una ley que explica por qué la mitad de lo que usted paga no ' +
    'es honorario del arquitecto.',
  metaDescripcion:
    'Cómo se calculan los honorarios de arquitectura en Colombia, cómo se ' +
    'reparten por etapas y qué costos no están incluidos.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Busque «cuánto cobra un arquitecto en Colombia» y va a encontrar dos ' +
        'guías de 2026, las dos con aire de autoridad, que dicen esto:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Fuente', 'Por metro cuadrado', 'Como porcentaje de la obra'],
      filas: [
        ['Guía comercial A', '$80.000 – $180.000', '6 % – 12 %'],
        ['Guía comercial B', '$40.000 – $55.000 (vivienda básica)', '3 % – 5 %'],
      ],
      nota:
        'Mismo país, mismo año. El piso de una casi duplica el techo de la ' +
        'otra. **Ninguna de las dos cita fuente, estudio, encuesta ni ' +
        'metodología.** Una llama a sus cifras «promedios orientativos».',
    },
    {
      tipo: 'parrafo',
      texto:
        'No voy a añadir una tercera cifra sin respaldo. Voy a explicar lo que ' +
        'sí existe: **una metodología publicada con reparto por etapas, y una ' +
        'ley que explica por qué buena parte de lo que usted paga no es ' +
        'honorario del arquitecto.** Con eso puede evaluar cualquier ' +
        'cotización, incluida la nuestra.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El decreto que todos citan y que ya no obliga' },
    {
      tipo: 'parrafo',
      texto:
        'Toda conversación sobre honorarios de arquitectura en Colombia ' +
        'termina en el **Decreto 2090 de 1989**. Hay sitios que republican sus ' +
        'numerales —incluido el que dice que los honorarios ahí fijados «son ' +
        'los mínimos que los arquitectos deberán cobrar»— como si fuera ley ' +
        'vigente y obligatoria.',
    },
    {
      tipo: 'parrafo',
      texto: 'No lo es, y la historia es más interesante que un simple «se derogó».',
    },
    {
      tipo: 'parrafo',
      texto:
        'El decreto **nunca fue derogado expresamente**: el Gestor Normativo ' +
        'lo muestra sin una sola nota de derogatoria. Lo que pasó es que se ' +
        'expidió con base en una facultad del Decreto-Ley 222 de 1983, y esa ' +
        'norma la derogó la Ley 80 de 1993. El decreto se quedó sin piso. Los ' +
        'juristas lo llaman **decaimiento del acto administrativo**.',
    },
    {
      tipo: 'parrafo',
      texto: 'Y un juez ya lo dijo con todas las letras:',
    },
    {
      tipo: 'cita',
      texto:
        'El Decreto 2090 de 1989 podría ser considerado por las entidades ' +
        'estatales únicamente […] para la fijación de los honorarios como ' +
        'criterio técnico, debido a su especialidad y en virtud al principio ' +
        'de autonomía de la voluntad, pero en ningún caso como criterio de ' +
        'carácter obligatorio.',
      fuente:
        'Consejo de Estado, Sección Primera, sentencia del 28 de agosto de ' +
        '2020, exp. 25000-23-24-000-2012-00759-01',
    },
    {
      tipo: 'nota',
      texto:
        'Hay otro detalle que casi nadie menciona: el propio decreto decía que ' +
        'era «de forzosa aplicación» solo para arquitectos **afiliados a la ' +
        'Sociedad Colombiana de Arquitectos** y para organismos oficiales. Un ' +
        'propietario privado que contrata a un arquitecto no afiliado nunca ' +
        'estuvo cubierto por él.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay una razón de fondo por la que no debería volver a ser ' +
        'obligatorio: la Superintendencia de Industria y Comercio ha sancionado ' +
        'a gremios por fijar tarifas mínimas entre sus miembros. Su cartilla ' +
        'sobre asociaciones de profesionales instruye expresamente a no hablar ' +
        'de «remuneraciones mínimas» ni recomendar precios. Un mínimo gremial ' +
        'obligatorio es un cartel.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El Consejo Profesional Nacional de Arquitectura —que es órgano ' +
        'estatal, no asociación privada— lo tiene claro. En agosto de 2026 ' +
        'lanzó un simulador de honorarios y lo describe como **«un referente y ' +
        'guía»**, cuyo resultado es «de libre aceptación y negociación entre ' +
        'las partes».',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Aun así, es la única metodología publicada' },
    {
      tipo: 'parrafo',
      texto:
        'Que no obligue no lo vuelve inútil. Es la única fuente colombiana con ' +
        'una metodología completa y verificable, y sigue siendo el lenguaje en ' +
        'que se discuten los honorarios. Funciona en dos pasos.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Paso 1: un porcentaje que baja con el tamaño' },
    {
      tipo: 'tabla',
      cabeceras: ['Área construida', 'Porcentaje sobre el costo de obra'],
      filas: [
        ['Los primeros 1.000 m²', '7,0 %'],
        ['Los siguientes 4.000 m²', '5,0 %'],
        ['Los siguientes 5.000 m²', '4,0 %'],
        ['De ahí en adelante', '3,0 %'],
      ],
      nota: 'Decreto 2090 de 1989, numeral 1.2.1. Es escalonado, no un porcentaje único.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Paso 2: un multiplicador según el tipo de proyecto' },
    {
      tipo: 'parrafo',
      texto:
        'El decreto clasifica los proyectos por categorías, de la A a la I, y ' +
        'aplica un multiplicador: 50 % la más simple, 100 % la categoría D, y ' +
        '**130 % la categoría E**. Restauración suma 20 %; reformas y ' +
        'ampliaciones, 10 %.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La categoría E es, textualmente, «proyectos de residencias o viviendas ' +
        'unifamiliares, bifamiliares o trifamiliares». **Su casa es la ' +
        'categoría más cara de la tabla**, y no por capricho: una casa tiene ' +
        'más decisiones por metro cuadrado que casi cualquier otro edificio.',
    },
    {
      tipo: 'dato',
      valor: '9,1 %',
      etiqueta:
        'Lo que da la norma para una casa unifamiliar de menos de 1.000 m²: ' +
        '7 % × 130 %. Cubre anteproyecto, proyecto y supervisión completos.',
      fuente:
        'Cálculo propio aplicando los numerales 1.2.1 y 1.2.4 del Decreto ' +
        '2090 de 1989. No es una tarifa vigente: es lo que arroja la única ' +
        'metodología publicada.',
    },
    {
      tipo: 'nota',
      texto:
        'Sobre qué se calcula ese porcentaje: el costo de construcción incluye ' +
        'todos los capítulos de obra, los gastos generales y la licencia. ' +
        '**Excluye el lote**, los costos financieros y la escrituración. Si ' +
        'alguien le calcula el honorario sobre el valor del proyecto ' +
        'incluyendo el terreno, está calculando sobre otra cosa.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se reparte por etapas' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que más le conviene conocer, porque es la que ' +
        'convierte un contrato en algo verificable. El decreto no reparte el ' +
        'pago por fechas sino **por entregas**, y cada una es comprobable.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Al entregar', 'Acumulado del honorario'],
      filas: [
        ['Esquema básico', '7 %'],
        ['Anteproyecto', 'hasta 15 %'],
        ['Planos generales suficientes para radicar la licencia', 'hasta 45 %'],
        ['Licencia obtenida', '50 % a 60 %, según la dificultad del trámite'],
        ['Planos y detalles completos', '80 % a 90 %'],
        ['Supervisión arquitectónica durante la obra', 'el 10 % restante'],
      ],
      nota:
        'Decreto 2090 de 1989, numeral 1.2.4.2. Del honorario de proyecto se ' +
        'retiene un 10 % que se paga durante la obra: es lo que mantiene al ' +
        'arquitecto interesado en que lo dibujado se pueda construir.',
    },
    {
      tipo: 'parrafo',
      texto: 'Y qué es cada cosa, en palabras de la propia norma:',
    },
    {
      tipo: 'lista',
      items: [
        '**Esquema básico:** el delineamiento general, que puede hacerse incluso sin tener el terreno definitivo. Zonas, accesos, cómo se relacionan los ambientes.',
        '**Anteproyecto:** plantas, cortes y fachadas suficientes para entender el edificio, **sin incluir planos para ejecutar la obra**. Es donde se decide, no donde se construye.',
        '**Proyecto arquitectónico:** «toda la información necesaria para que la construcción pueda ser ejecutada correctamente». Planos de detalle de carpintería, escaleras, baños, fachadas, enchapes, cielorrasos y pisos; especificaciones; coordinación de los planos técnicos; y el trámite ante la autoridad.',
        '**Supervisión arquitectónica:** visitas de obra, escogencia de acabados, resolución de dudas de interpretación. La norma es tajante: el arquitecto supervisa su proyecto y **no dirige técnicamente la obra**. Son dos contratos distintos.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La supervisión no puede excluirse del contrato ni contratarse con un ' +
        'arquitecto distinto del autor del proyecto. Y si la obra no se ' +
        'ejecuta, ese honorario no se paga. Es la única parte del honorario ' +
        'que depende de que usted construya.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que el honorario no incluye, y por qué' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está la objeción más frecuente —«¿por qué me cobran todo eso ' +
        'aparte?»— y su respuesta, que no es comercial sino legal.',
    },
    {
      tipo: 'cita',
      texto:
        'El diseñador debe ser un ingeniero civil cuando se trate de diseños ' +
        'estructurales y estudios geotécnicos, y un arquitecto o ingeniero ' +
        'civil o mecánico en el caso de diseños de elementos no estructurales.',
      fuente: 'Ley 400 de 1997, artículo 26',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Un arquitecto no puede firmar el diseño estructural ni el estudio ' +
        'de suelos.** No es que no quiera: la ley reserva esas firmas a un ' +
        'ingeniero civil, y quien firma responde legalmente. Si alguien le ' +
        'ofrece «todo incluido» a un precio sospechosamente redondo, pregunte ' +
        'quién firma cada plano.',
    },
    {
      tipo: 'parrafo',
      texto: 'Lo que va por fuera del honorario, y de quién es cada firma:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Concepto', 'Quién lo hace', 'Nota'],
      filas: [
        ['Estudio de suelos', 'Ingeniero civil geotecnista', 'Exigido por el Título H de la NSR-10'],
        ['Diseño estructural', 'Ingeniero civil', 'Ley 400, art. 26'],
        ['Revisión independiente de los diseños estructurales', 'Otro ingeniero, distinto del diseñador', '**A costa de quien pide la licencia**, obligatoria por encima de 2.000 m² y en programas de cinco o más viviendas'],
        ['Levantamiento topográfico', 'Topógrafo', 'Por cuenta del propietario'],
        ['Diseño eléctrico', 'Ingeniero electricista', 'Sin demostrar conformidad, el operador de red no energiza la instalación'],
        ['Diseño de gas', 'Especialista', 'El diseño debe aprobarlo el distribuidor, y antes del servicio se exige certificación de un organismo acreditado'],
        ['Pólizas, copias, maquetas, ensayos de laboratorio', '—', 'Reembolsables, por cuenta del propietario'],
      ],
      nota:
        'El propio Decreto 2090 lo dice en su numeral 0.8: los estudios de ' +
        'ingeniería «serán pagados por la entidad contratante y su valor no ' +
        'está comprendido dentro de los honorarios del arquitecto».',
    },
    {
      tipo: 'nota',
      texto:
        'Un dato que sirve para calibrar: el diseño estructural **sí tiene un ' +
        'honorario mínimo oficial**, fijado por la Comisión Asesora Permanente ' +
        'para el Régimen de Construcciones Sismo Resistentes en 2017, en ' +
        'función del salario mínimo y del grado de complejidad. La vivienda de ' +
        'uno y dos pisos tiene su propio grado. En la práctica el mercado ' +
        'suele cobrar por debajo de ese mínimo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los dos costos que no son honorarios y todo el mundo confunde' },
    { tipo: 'titulo', nivel: 3, texto: 'Las expensas de curaduría' },
    {
      tipo: 'parrafo',
      texto:
        'Es lo que cobra el curador urbano por estudiar la solicitud. Desde ' +
        'diciembre de 2021 se liquidan en **UVT** y no en salarios mínimos: ' +
        'cualquier tabla que siga en salarios mínimos está obsoleta.',
    },
    {
      tipo: 'dato',
      valor: '$52.374',
      etiqueta: 'Valor de la UVT para 2026. Es la base de toda la liquidación.',
      fuente:
        'Resolución 000238 de la DIAN, del 15 de diciembre de 2025. Cuidado: ' +
        'varias fuentes publicaron esta cifra en noviembre como proyección, ' +
        'antes de que existiera la resolución.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La fórmula tiene un cargo fijo y uno variable, afectados por el uso, ' +
        'el estrato, el área y un factor municipal, más IVA del 19 %. Para ' +
        'dimensionarlo, una vivienda de hasta 100 m² en Bogotá, con IVA: ' +
        'alrededor de **$556.000** en estratos 1 y 2, **$1.112.000** en ' +
        'estrato 3, y hasta **$2.780.000** en estrato 6.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos cosas útiles. Las consultas verbales sobre normas urbanísticas ' +
        'son **gratuitas**, y los curadores no pueden cobrar por conceptos ' +
        'distintos de los que fija el decreto. Y en municipios sin curador ' +
        'urbano —donde la licencia la expide la oficina de planeación— ' +
        '**está prohibido cobrar expensas**.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'El impuesto de delineación urbana' },
    {
      tipo: 'parrafo',
      texto:
        'Es un tributo **municipal**, así que no hay tarifa nacional y cada ' +
        'ciudad lo estructura distinto. En Bogotá la tarifa general es del ' +
        '**3 % sobre el presupuesto de obra**, con un anticipo del **2,6 % que ' +
        'hay que pagar antes de que salga la licencia**.',
    },
    {
      tipo: 'nota',
      texto:
        'No son 5,6 %: el anticipo se imputa al impuesto final. La base ' +
        'incluye mano de obra, materiales, equipos, administración, utilidad e ' +
        'imprevistos, y **excluye el lote**. Hay exenciones vigentes hasta ' +
        '2029 para vivienda de interés social, autoconstrucción en estratos ' +
        '1 y 2, mejoras de bajo avalúo y restauración de bienes de interés ' +
        'cultural.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La diferencia práctica: las expensas escalan con el **área** y el ' +
        'impuesto con el **presupuesto**. En una casa de 150 a 200 m², el ' +
        'impuesto suele ser un orden de magnitud mayor que las expensas. Y ' +
        'ninguno de los dos es dinero del arquitecto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo verificar que su arquitecto lo es' },
    {
      tipo: 'parrafo',
      texto:
        'Para ejercer en Colombia hace falta título **y** tarjeta de matrícula ' +
        'profesional del CPNAA. Y la ley va más lejos: para suscribir ' +
        'contratos hay que presentar la matrícula **e indicar su número en el ' +
        'contrato**. Si el suyo no lo tiene, pídalo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El registro es público y gratuito, y tiene una particularidad que ' +
        'conviene saber: **no se puede buscar por nombre**. Hay que buscar por ' +
        'número de documento o por número de matrícula. Así que pídale a su ' +
        'arquitecto uno de los dos — es una pregunta perfectamente normal.',
    },
    {
      tipo: 'lista',
      items: [
        'Consulta del registro, por documento o por matrícula, en la oficina virtual del CPNAA.',
        '**Certificado de Vigencia Profesional**, gratuito: acredita la matrícula y además la **ausencia de sanciones**. Es el documento que conviene pedir.',
        'El CPNAA publica la **lista de profesionales sancionados**, con nombre, matrícula y fechas de suspensión.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Dos matices. El ejercicio ilegal de la arquitectura no es competencia ' +
        'del CPNAA sino de las autoridades de policía, y **no está tipificado ' +
        'como delito** — evite repetir eso. Pero cualquier persona sí puede ' +
        'presentar una queja disciplinaria ante el CPNAA contra un arquitecto ' +
        'matriculado. Y sin matrícula no hay licencia: el proyecto debe ir ' +
        'firmado por un arquitecto matriculado, que responde legalmente.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué debe decir el contrato' },
    {
      tipo: 'parrafo',
      texto:
        'La norma de honorarios exige que exista **constancia escrita**, y el ' +
        'CPNAA insiste en que el contrato pacte las fases de diseño. Estas son ' +
        'las cláusulas donde se pierden las discusiones.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Las revisiones incluidas' },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna norma colombiana fija un número de revisiones. Es decisión ' +
        'comercial, y por eso hay que escribirla. Lo que sí da la norma es la ' +
        'regla de quién paga: **salvo error u omisión del arquitecto**, toda ' +
        'modificación al proyecto se le cobra al contratante. La distinción ' +
        'entre «el arquitecto se equivocó» y «el cliente cambió de opinión» es ' +
        'la que evita el pleito.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'De quién son los planos' },
    {
      tipo: 'parrafo',
      texto:
        'Los planos son obra protegida por derecho de autor, sin necesidad de ' +
        'registro. Los **derechos morales** —ser reconocido como autor— son ' +
        'perpetuos, inalienables e irrenunciables. Los **patrimoniales** se ' +
        'pueden ceder, pero con dos condiciones que casi nadie cumple: la ' +
        'cesión **debe constar por escrito** para ser válida, y si no dice ' +
        'por cuánto tiempo, **queda limitada a cinco años**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay una regla especial de arquitectura que sorprende a las dos ' +
        'partes:',
    },
    {
      tipo: 'cita',
      texto:
        'El autor de un proyecto arquitectónico no podrá impedir que el ' +
        'propietario introduzca modificaciones en él, pero tendrá la facultad ' +
        'de prohibir que su nombre sea asociado a la obra alterada.',
      fuente: 'Ley 23 de 1982, artículo 43',
    },
    {
      tipo: 'parrafo',
      texto:
        'En arquitectura, el derecho del autor a que su obra no se altere cede ' +
        'ante el derecho de propiedad. Lo que sobrevive es la firma: el ' +
        'arquitecto puede exigir que le quiten el nombre. La contracara está ' +
        'en la norma de honorarios: el proyecto **solo puede usarse en la obra ' +
        'para la que fue contratado**, no en otra.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Qué pasa si usted cancela' },
    {
      tipo: 'parrafo',
      texto:
        'La norma prevé el caso: se cobra el porcentaje correspondiente al ' +
        'trabajo ejecutado, con un mínimo que cubra los gastos más un 25 %. Y ' +
        'añade una condición que conviene entender antes de firmar: **los ' +
        'planos parciales no pueden usarse para ejecutar la obra**. No se puede ' +
        'pagar el anteproyecto, terminarlo con otro y construir con eso.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué preguntar en la primera llamada' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿Sobre qué base calcula el honorario?** Debe ser el costo de obra, sin el lote.',
        '**¿Cómo se reparte por entregas?** Si el reparto es por fechas y no por entregables, no hay cómo verificar nada.',
        '**¿Qué queda por fuera?** Debería nombrarle el estudio de suelos, el estructural, la topografía, las expensas y el impuesto de delineación sin que usted pregunte.',
        '**¿Quién firma cada plano?** El estructural y el geotécnico tienen que ir firmados por un ingeniero civil.',
        '**¿Cuántas revisiones incluye, y cuándo se cobra una modificación?**',
        '**¿Su número de matrícula profesional?** Para verificarlo usted mismo, gratis, en dos minutos.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Un arquitecto que responde estas seis sin incomodarse le está diciendo ' +
        'algo más importante que su precio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior está verificado contra norma, sentencia y resolución ' +
        'oficial a agosto de 2026. Los valores en pesos —la UVT, las expensas, ' +
        'los mínimos ligados al salario— cambian cada año.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'costos', 'contrato'],
  fuentes: [
    {
      titulo: 'Decreto 2090 de 1989: honorarios para trabajos de arquitectura',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo: 'Sentencia del 28 de agosto de 2020, exp. 25000-23-24-000-2012-00759-01: el Decreto 2090 no es criterio obligatorio',
      editor: 'Consejo de Estado, Sección Primera',
      url: 'https://www.consejodeestado.gov.co/wp-content/uploads/2020/12/SanFiscSAC.pdf',
      fecha: '2020-08-28',
    },
    {
      titulo: 'Ley 400 de 1997, por la cual se adoptan normas sobre construcciones sismo resistentes',
      editor: 'Congreso de la República de Colombia',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Ley 435 de 1998, por la cual se reglamenta el ejercicio de la arquitectura',
      editor: 'Consejo Profesional Nacional de Arquitectura y sus Profesiones Auxiliares',
      url: 'https://cpnaa.gov.co/wp-content/uploads/attachments/ley435.pdf',
      fecha: '1998-02-10',
    },
    {
      titulo: 'SIHA + IA: el nuevo simulador del CPNAA para el cálculo de honorarios',
      editor: 'Consejo Profesional Nacional de Arquitectura',
      url: 'https://www.cpnaa.gov.co/siha-ia-el-nuevo-simulador-del-cpnaa-para-el-calculo-de-honorarios/',
      fecha: '2026-08-13',
    },
    {
      titulo: 'Consulta del registro de arquitectos y profesionales auxiliares',
      editor: 'Consejo Profesional Nacional de Arquitectura',
      url: 'https://www.cpnaa.gov.co/consulta-del-registro-de-arquitectos-y-profesionales-auxiliares-de-la-arquitectura/',
      fecha: null,
    },
    {
      titulo: 'Resolución 000238 de 2025: valor de la UVT para 2026',
      editor: 'Dirección de Impuestos y Aduanas Nacionales',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0238_2025.htm',
      fecha: '2025-12-15',
    },
    {
      titulo: 'Decreto 1890 de 2021: expensas de curaduría liquidadas en UVT',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/normativa/decreto-1890-de-2021',
      fecha: '2021-12-30',
    },
    {
      titulo: 'Impuesto de delineación urbana',
      editor: 'Secretaría Distrital de Hacienda de Bogotá',
      url: 'https://www.haciendabogota.gov.co/es/impuestos/impuesto-de-delineacion-urbana',
      fecha: null,
    },
    {
      titulo: 'Ley 23 de 1982 sobre derechos de autor, artículos 30, 43 y 183',
      editor: 'Dirección Nacional de Derecho de Autor',
      url: 'https://www.derechodeautor.gov.co/es/registro-de-obras-artisticas',
      fecha: '1982-01-28',
    },
    {
      titulo: 'Cartilla sobre la aplicación de las normas de competencia frente a asociaciones y colegios de profesionales',
      editor: 'Superintendencia de Industria y Comercio',
      url: 'https://www.sic.gov.co/sites/default/files/files/cartilla_sobre_asociaciones_de_empresas_y_asociaciones_de_profesionales2.pdf',
      fecha: null,
    },
  ],
}
