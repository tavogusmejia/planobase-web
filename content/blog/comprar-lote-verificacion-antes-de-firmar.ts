import type { Post } from '@/lib/types'

/**
 * La pieza más temprana del pilar local, y la que llega antes que cualquier
 * otra en el recorrido del cliente: se lee **antes** de comprar, cuando todavía
 * se puede no comprar.
 *
 * Todo el material está verificado y ya publicado en el repositorio: la tabla
 * de riesgos de «Qué puedo construir en mi lote» —afectación vial, riesgo,
 * ronda hídrica, servidumbres, bien de interés cultural, área protegida, cabida
 * y linderos—, la nulidad absoluta del artículo 44 de la Ley 160 en suelo
 * rural, la regla de que el suelo de expansión sin plan parcial adoptado no se
 * construye, y que el concepto de norma no otorga derechos mientras que radicar
 * sí congela la norma.
 *
 * Dos decisiones de fondo:
 *
 * 1. **No se publica ningún precio.** Ni de escrituración, ni de estudios, ni
 *    de honorarios de abogado. El artículo entero se sostiene sin una sola
 *    cifra en pesos, y esa ausencia es deliberada: cualquier número aquí
 *    envejecería antes que el resto del texto.
 * 2. **No se afirma que el estudio de suelos se pueda omitir por debajo de
 *    cierta área.** Esa afirmación circula mucho y se apoya en artículos
 *    derogados por el Decreto 1783 de 2021. Ya se descartó al escribir «Qué
 *    puedo construir en mi lote» y se mantiene descartada aquí.
 *
 * Son doce puntos porque son doce los documentos y consultas que de verdad
 * cambian la decisión. La lista no se infla para llegar a un número redondo.
 *
 * Fechada en enero de 2023: no cita nada posterior a 2021 y es perenne.
 */
export const post: Post = {
  slug: 'comprar-lote-verificacion-antes-de-firmar',
  titulo: 'Comprar lote: la verificación de doce puntos antes de firmar',
  pilar: 'local',
  fecha: '2023-01-16',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Un lote se compra con documentos, no con una visita. Los doce puntos que ' +
    'hay que verificar antes de firmar la promesa, dónde se consulta cada uno, ' +
    'y cuáles de ellos pueden dejar un terreno sin construir para siempre.',
  metaDescripcion:
    'Qué verificar antes de comprar un lote en Colombia: tradición, clase de ' +
    'suelo, afectaciones, riesgo, rondas hídricas y servidumbres.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Casi todos los problemas caros de un proyecto se decidieron el día en ' +
        'que se compró el lote. Después se pueden manejar, pero ya no se pueden ' +
        'evitar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La visita al terreno no verifica casi nada. Lo que decide si un lote ' +
        'sirve está en documentos, y todos son públicos, casi todos son ' +
        'gratuitos y ninguno tarda más de unos días. Esta es la lista completa.',
    },
    {
      tipo: 'nota',
      texto:
        'El orden importa. Los cuatro primeros puntos pueden descartar el lote ' +
        'por completo; los ocho siguientes cambian lo que se puede construir y ' +
        'cuánto cuesta. **Si alguno de los cuatro primeros sale mal, no siga ' +
        'gastando en los demás.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los cuatro que pueden acabar con la compra' },

    { tipo: 'titulo', nivel: 3, texto: '1. El certificado de tradición y libertad' },
    {
      tipo: 'parrafo',
      texto:
        'Es el documento que más revela por menos plata, y hay que leerlo ' +
        'entero, no mirar la última anotación. Ahí aparecen las limitaciones al ' +
        'dominio, los embargos, las hipotecas, las servidumbres inscritas, las ' +
        'afectaciones y la falsa tradición.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos anotaciones merecen atención especial. La **falsa tradición** ' +
        'significa que quien figura como titular transfirió un derecho ' +
        'incompleto: se vende lo que se tiene, que puede no ser el dominio ' +
        'pleno. Y la **liquidación de participación en plusvalía**, cuando está ' +
        'inscrita en el folio, es una obligación que viaja con el predio y que ' +
        'hay que pagar antes de licenciar.',
    },
    {
      tipo: 'nota',
      texto:
        'Pida el certificado usted, en línea, con el número de matrícula. No ' +
        'acepte el que le entregue el vendedor: puede tener meses y las ' +
        'anotaciones que importan son las recientes.',
    },

    { tipo: 'titulo', nivel: 3, texto: '2. La clase de suelo' },
    {
      tipo: 'parrafo',
      texto:
        'Urbano, de expansión o rural. No es una etiqueta administrativa: ' +
        'decide si el lote es construible hoy, dentro de años o nunca.',
    },
    {
      tipo: 'cita',
      texto:
        'El suelo de expansión únicamente podrá ser objeto de urbanización y ' +
        'construcción previa adopción del respectivo plan parcial. Mientras no ' +
        'se aprueben los respectivos planes parciales, en las zonas de ' +
        'expansión urbana sólo se permitirá el desarrollo de usos agrícolas y ' +
        'forestales.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.2.1.4.1.6',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Comprar en suelo de expansión sin plan parcial adoptado es comprar ' +
        'un lote que hoy no se puede construir ni subdividir.** El vendedor no ' +
        'está mintiendo cuando dice que «va a ser urbano»: puede llegar a ' +
        'serlo. Lo que nadie puede decirle es cuándo, y esa es toda la ' +
        'diferencia.',
    },

    { tipo: 'titulo', nivel: 3, texto: '3. La unidad agrícola familiar, si es rural' },
    {
      tipo: 'parrafo',
      texto:
        'En el campo hay un límite de fraccionamiento cuyo incumplimiento no ' +
        'se sanciona con multa sino con algo peor:',
    },
    {
      tipo: 'cita',
      texto:
        '**Salvo las excepciones que se señalan en el artículo siguiente**, los ' +
        'predios rurales no podrán fraccionarse por debajo de la extensión ' +
        'determinada por el INCORA como Unidad Agrícola Familiar para el ' +
        'respectivo municipio o zona. En consecuencia, so pena de nulidad ' +
        'absoluta del acto o contrato, no podrá llevarse a cabo actuación o ' +
        'negocio alguno del cual resulte la división de un inmueble rural ' +
        'cuyas superficies sean inferiores a la señalada como Unidad Agrícola ' +
        'Familiar para el correspondiente municipio por el INCORA.',
      fuente: 'Ley 160 de 1994, artículo 44',
    },
    {
      tipo: 'nota',
      texto:
        'Esa primera frase importa y esta pieza la había recortado. La ' +
        'prohibición **no es absoluta**: el artículo 45 trae cuatro ' +
        'excepciones, y una de ellas —los actos que constituyen propiedades ' +
        'de superficie menor para un fin principal distinto a la explotación ' +
        'agrícola— es justo la que suele aplicar a una casa campestre. Las ' +
        'cuatro, con la condición de que quede constancia en la escritura, ' +
        'están en [comprar un lote rural](/blog/comprar-lote-rural-que-verificar-antes-de-firmar). ' +
        'El INCORA ya no existe: sus funciones sobre la unidad agrícola ' +
        'familiar están hoy en la Agencia Nacional de Tierras.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Nulidad absoluta significa que el negocio no existió. Es la razón por ' +
        'la que hay parcelas rurales vendidas, pagadas y ocupadas que su ' +
        'comprador no puede escriturar ni licenciar. **Y no se cura con el ' +
        'tiempo ni con la buena fe.**',
    },

    { tipo: 'titulo', nivel: 3, texto: '4. La zona de amenaza o riesgo' },
    {
      tipo: 'parrafo',
      texto:
        'Un predio clasificado en amenaza alta o en riesgo no mitigable puede ' +
        'ser sencillamente no licenciable. En amenaza media o alta mitigable, ' +
        'la licencia puede quedar condicionada a estudios de detalle y a obras ' +
        'de mitigación que a veces cuestan más que el lote.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Se consulta en la entidad de gestión del riesgo del municipio, y ' +
        'aparece también en el concepto de norma urbanística. Es la consulta ' +
        'que más gente omite y la que produce las sorpresas más caras.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los ocho que cambian lo que se puede construir' },

    { tipo: 'titulo', nivel: 3, texto: '5. El concepto de norma urbanística' },
    {
      tipo: 'parrafo',
      texto:
        'Es la fotografía de lo que la norma permite en ese predio: uso, ' +
        'tratamiento urbanístico, índices, alturas, aislamientos. La consulta ' +
        'verbal es gratuita por norma; el concepto por escrito, que es el que ' +
        'sirve para reclamar, cuesta 8,34 UVT donde hay curaduría. Es el punto ' +
        'de partida de todo lo demás.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con una advertencia que conviene entender antes de apoyarse en él:',
    },
    {
      tipo: 'cita',
      texto:
        'La expedición de estos conceptos no otorga derechos ni obligaciones a ' +
        'su peticionario y no modifica los derechos conferidos mediante ' +
        'licencias que estén vigentes o que hayan sido ejecutadas.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.3.1',
    },
    {
      tipo: 'nota',
      texto:
        'El concepto informa; no protege. **Lo único que congela la norma es ' +
        'radicar la solicitud de licencia en legal y debida forma**, es decir, ' +
        'con el expediente completo. Si el plan de ordenamiento cambia entre el ' +
        'concepto y la radicación, manda el nuevo.',
    },

    { tipo: 'titulo', nivel: 3, texto: '6. Los índices, y sobre qué área se aplican' },
    {
      tipo: 'parrafo',
      texto:
        'El índice de ocupación mide la huella del edificio sobre el suelo; el ' +
        'índice de construcción, los metros cuadrados sumados de todos los ' +
        'pisos. Los dos están definidos en norma nacional, pero **los números ' +
        'los pone el POT de cada municipio**, por sector y por tratamiento.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay una pregunta que ahorra más plata que ninguna otra: **¿sobre qué ' +
        'área se aplica el índice?** La definición nacional habla del área ' +
        'total del predio, pero varios planes de ordenamiento lo aplican sobre ' +
        'el área neta urbanizable o sobre el área útil, que son más pequeñas ' +
        'que el lote que usted está comprando.',
    },

    { tipo: 'titulo', nivel: 3, texto: '7. La afectación vial' },
    {
      tipo: 'parrafo',
      texto:
        'Es la reserva de una franja del predio para una obra pública futura. ' +
        'Mientras dura, esa franja no se puede construir. La afectación **debe ' +
        'estar inscrita** para ser oponible, así que se busca en el ' +
        'certificado de tradición y se confirma en el concepto de norma.',
    },

    { tipo: 'titulo', nivel: 3, texto: '8. La ronda hídrica' },
    {
      tipo: 'parrafo',
      texto:
        'Franja de treinta metros a cada lado de los cauces y cien metros ' +
        'alrededor de los nacimientos. Es suelo de protección: no se construye ' +
        'y no se compensa. En un lote alargado atravesado por una quebrada, ' +
        'puede llevarse la mitad del área útil sin que nada en la escritura lo ' +
        'anuncie.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Se consulta ante la corporación autónoma regional competente, que es ' +
        'quien delimita la ronda.',
    },

    { tipo: 'titulo', nivel: 3, texto: '9. Las servidumbres' },
    {
      tipo: 'parrafo',
      texto:
        'De paso, de acueducto, de energía. Las inscritas están en el ' +
        'certificado de tradición. **Las de hecho, no.** Un camino que los ' +
        'vecinos llevan veinte años usando puede no aparecer en ningún papel y ' +
        'ser perfectamente exigible.',
    },
    {
      tipo: 'nota',
      texto:
        'Este es el punto que obliga a ir al predio y a hablar con los ' +
        'colindantes. No hay documento que lo reemplace.',
    },

    { tipo: 'titulo', nivel: 3, texto: '10. Bien de interés cultural y área protegida' },
    {
      tipo: 'parrafo',
      texto:
        'Si el inmueble o su entorno están declarados bien de interés cultural, ' +
        'la intervención exige anteproyecto aprobado por la autoridad cultural ' +
        '**antes** de la licencia. Es un trámite adicional completo, con sus ' +
        'propios tiempos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y si el predio está dentro de un área protegida, el régimen de usos lo ' +
        'fija el plan de manejo del área, no el POT. Se verifica en el registro ' +
        'único nacional de áreas protegidas y en las listas del Ministerio de ' +
        'Cultura y del instituto de patrimonio local.',
    },

    { tipo: 'titulo', nivel: 3, texto: '11. La cabida y los linderos' },
    {
      tipo: 'parrafo',
      texto:
        'El área de la escritura, la del catastro y la que arroja un ' +
        'levantamiento topográfico rara vez coinciden. La diferencia puede ser ' +
        'de metros o de una franja entera, y en lotes rurales suele ser mayor.',
    },
    {
      tipo: 'nota',
      texto:
        'Los visores cartográficos en línea orientan, pero **no definen límites ' +
        'oficiales**. Sus propios avisos lo dicen. Para comprar, la medida que ' +
        'vale es la del levantamiento topográfico hecho en el predio.',
    },

    { tipo: 'titulo', nivel: 3, texto: '12. La disponibilidad de servicios públicos' },
    {
      tipo: 'parrafo',
      texto:
        'Que haya una red pasando por el frente no significa que haya ' +
        'disponibilidad. Lo que vale es el **certificado de disponibilidad de ' +
        'servicios** que emite el prestador, y en algunos municipios ese ' +
        'documento es hoy el verdadero cuello de botella del licenciamiento.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En suelo rural la pregunta cambia de forma: no es si hay red, sino qué ' +
        'solución propia se necesita para agua y para aguas residuales, y qué ' +
        'permiso ambiental exige cada una.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La tabla, para llevar' },
    {
      tipo: 'tabla',
      cabeceras: ['Qué se verifica', 'Dónde', '¿Puede acabar con la compra?'],
      filas: [
        ['Tradición, embargos, falsa tradición, plusvalía inscrita', 'Certificado de tradición y libertad', '**Sí**'],
        ['Clase de suelo y plan parcial', 'Concepto de norma urbanística', '**Sí**'],
        ['Unidad agrícola familiar, en rural', 'Autoridad nacional de tierras', '**Sí**'],
        ['Amenaza y riesgo', 'Entidad municipal de gestión del riesgo', '**Sí**'],
        ['Uso, índices, alturas, aislamientos', 'Concepto de norma urbanística', 'No, pero cambia el proyecto'],
        ['Sobre qué área se aplican los índices', 'POT del municipio', 'No, pero cambia el área construible'],
        ['Afectación vial', 'Certificado de tradición y concepto de norma', 'A veces'],
        ['Ronda hídrica', 'Corporación autónoma regional', 'A veces'],
        ['Servidumbres inscritas', 'Certificado de tradición', 'A veces'],
        ['Servidumbres de hecho', '**Visita al predio y colindantes**', 'A veces'],
        ['Bien de interés cultural', 'Ministerio de Cultura e instituto local', 'No, pero añade trámite'],
        ['Área protegida', 'Registro único nacional de áreas protegidas', '**Sí**'],
        ['Cabida y linderos', 'Levantamiento topográfico', 'A veces'],
        ['Disponibilidad de servicios', 'Prestador del servicio', '**Sí**'],
      ],
      nota:
        'Los doce puntos del título se agrupan aquí en catorce filas porque dos ' +
        'de ellos se verifican en dos sitios distintos. La lista de consultas ' +
        'es lo que importa; el número es solo la forma de recordarla.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué escribir en la promesa de compraventa' },
    {
      tipo: 'parrafo',
      texto:
        'Muchas de estas consultas tardan más de lo que dura la ventana de ' +
        'negociación. La salida no es saltárselas: es dejarlas escritas como ' +
        'condición.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Condición resolutoria** atada a resultados concretos: que el concepto de norma confirme el uso previsto, que no exista afectación inscrita, que el predio no esté en riesgo no mitigable.',
        '**Plazo suficiente** para las consultas que dependen de un tercero. La corporación autónoma y la entidad de riesgo no responden en tres días.',
        '**Área y linderos según levantamiento**, no según escritura, con la regla de qué pasa si difieren.',
        '**Devolución íntegra de lo entregado** si la condición no se cumple. Sin esa cláusula, la verificación no protege: solo informa.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y una advertencia de método: la promesa de compraventa de inmueble ' +
        'tiene requisitos de forma y de contenido que conviene revisar con un ' +
        'abogado. Este artículo cubre lo urbanístico y lo técnico, que es ' +
        'justamente la parte que un abogado no verifica.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no se puede verificar desde una pantalla' },
    {
      tipo: 'lista',
      items: [
        '**El acceso real.** Una vía que existe en el mapa puede ser una servidumbre discutida, o no ser transitable en invierno.',
        '**La topografía.** Una pendiente fuerte no aparece en el certificado de tradición y cambia por completo el costo de cimentación, cortes y muros de contención.',
        '**El suelo.** El estudio geotécnico condiciona la cimentación, la cimentación condiciona la estructura y la estructura condiciona el proyecto. Encárguelo apenas tenga el lote, incluso antes de dibujar.',
        '**Los vecinos y lo que están construyendo.** Es información gratuita y suele contar más de lo que dice el POT.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Sobre el estudio de suelos circula que por debajo de cierta área no ' +
        'hace falta. **Conviene desconfiar de esa afirmación.** Lo que sí se ' +
        'sostiene es que la ley exige un ingeniero geotecnista responsable del ' +
        'estudio, incluso en las viviendas de uno y dos pisos que quedan ' +
        'exceptuadas de la supervisión técnica independiente. La excepción es ' +
        'de supervisión, no de estudio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'En resumen' },
    {
      tipo: 'parrafo',
      texto:
        'Un lote se compra con tres documentos en la mano —certificado de ' +
        'tradición, concepto de norma urbanística y levantamiento ' +
        'topográfico— y con dos consultas hechas: riesgo y ronda hídrica. Todo ' +
        'lo demás se deriva de ahí.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuesta unos días y casi nada de dinero. Comparado con lo que cuesta ' +
        'descubrirlo después, es la mejor inversión de todo el proyecto.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'norma-urbana', 'licencia', 'suelo-rural'],
  fuentes: [
    {
      titulo: 'Ley 388 de 1997, de desarrollo territorial',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
      fecha: '1997-07-18',
    },
    {
      titulo: 'Decreto 1077 de 2015, único reglamentario del sector vivienda, ciudad y territorio',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 160 de 1994, sistema nacional de reforma agraria, artículos 38 y 44',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9779',
      fecha: '1994-08-03',
    },
    {
      titulo: 'Ley 9 de 1989, de reforma urbana, artículo 37 sobre afectaciones',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1175',
      fecha: '1989-01-11',
    },
    {
      titulo: 'Decreto 1076 de 2015, único reglamentario del sector ambiente',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 1523 de 2012, política nacional de gestión del riesgo de desastres',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47141',
      fecha: '2012-04-24',
    },
    {
      titulo: 'Ley 400 de 1997, estudios geotécnicos y diseño estructural',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Registro Único Nacional de Áreas Protegidas',
      editor: 'Parques Nacionales Naturales de Colombia',
      url: 'https://runap.parquesnacionales.gov.co/',
      fecha: null,
    },
    {
      titulo: 'Certificado de tradición y libertad en línea',
      editor: 'Superintendencia de Notariado y Registro',
      url: 'https://certificados.supernotariado.gov.co/certificado',
      fecha: null,
    },
  ],
}
