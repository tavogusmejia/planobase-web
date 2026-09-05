import type { Post } from '@/lib/types'

/**
 * Pilar de trámites. Público muy concreto: quien ya sabe que su edificación
 * tiene un problema estructural y está a punto de gastar mucho.
 *
 * Cuidado deliberado con dos cosas:
 *
 * 1. **No se nombra el capítulo del reglamento** que regula la evaluación de
 *    edificaciones existentes. Se sabe que la Ley 400 ordena que esté en el
 *    Título A, pero su designación exacta no se pudo verificar contra el texto
 *    oficial y no se inventa un número.
 * 2. **No se afirma que haya reglamento nuevo.** La AIS 100-24 existe como
 *    insumo técnico, no es obligatoria — le falta decreto. Circulan tres cosas
 *    distintas mezcladas y el artículo las separa.
 *
 * Perenne: no menciona el sismo de agosto de 2026, para que la pieza sirva
 * igual dentro de cinco años. Fechado en octubre de 2025.
 */
export const post: Post = {
  slug: 'reforzamiento-estructural-y-nsr-10',
  titulo: 'Reforzamiento estructural: qué exige la norma y qué cuesta el trámite',
  pilar: 'tramites',
  fecha: '2025-10-15',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Le dijeron que su edificación necesita reforzamiento. Qué significa eso ' +
    'en términos de norma, quién puede firmarlo, qué modalidad de licencia ' +
    'aplica y por qué el trámite cuesta menos de lo que teme — pero la obra ' +
    'no.',
  metaDescripcion:
    'Qué exige la norma sismo resistente para reforzar una edificación ' +
    'existente en Colombia, y qué licencia se necesita.',
  puerta: 'diagnostico-de-edificaciones',
  etiquetas: ['nacional', 'propietario', 'administrador', 'estructura', 'licencia'],
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Le entregaron un informe que dice que la edificación necesita ' +
        'reforzamiento estructural. Es una frase que asusta y que casi nadie ' +
        'sabe traducir a decisiones.',
      },
    {
      tipo: 'parrafo',
      texto:
        'Esto es lo que significa en términos de norma, qué firmas hacen falta ' +
        'y qué se puede esperar del trámite.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué norma manda' },
    {
      tipo: 'parrafo',
      texto:
        'El reglamento vigente es la **NSR-10**, adoptada por decreto en 2010 ' +
        'bajo la Ley 400 de 1997, con varios decretos modificatorios ' +
        'posteriores.',
    },
    {
      tipo: 'nota',
      texto:
        'Circulan tres cosas mezcladas y conviene separarlas. **No hay ' +
        'reglamento nuevo.** Existe un documento técnico gremial más reciente ' +
        'que suele presentarse como «la norma nueva», pero **no es obligatorio: ' +
        'le falta el decreto que lo adopte**. Hasta entonces, lo vigente es la ' +
        'NSR-10.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y sobre edificaciones existentes, la ley es explícita en lo que ordena ' +
        'que el reglamento contenga:',
    },
    {
      tipo: 'cita',
      texto:
        'Los procedimientos para evaluar la vulnerabilidad sísmica de las ' +
        'edificaciones existentes antes de la vigencia de la presente ley.',
      fuente: 'Ley 400 de 1997, artículo 48, numeral 16',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es decir: **evaluar y reforzar lo existente no es un vacío normativo**. ' +
        'Tiene procedimiento propio dentro del Título A del reglamento, distinto ' +
        'del que se aplica a una obra nueva.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo es obligatorio evaluar' },
    {
      tipo: 'parrafo',
      texto:
        'No es una decisión libre del propietario en todos los casos. La ' +
        'evaluación se vuelve exigible cuando:',
    },
    {
      tipo: 'lista',
      items: [
        '**Cambia el uso** de la edificación. Una casa que pasa a ser colegio, oficina o bodega recibe cargas distintas de aquellas para las que se diseñó.',
        '**Se amplía o se modifica la estructura.** Levantar un piso es el caso clásico.',
        '**Hubo daño por sismo** u otro evento.',
        '**Lo exige la autoridad competente.**',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y hay una obligación que casi nadie recuerda: la ley fijó plazos para ' +
        'que las **edificaciones indispensables y de atención a la comunidad** ' +
        'en zonas de amenaza sísmica alta e intermedia fueran evaluadas y ' +
        'reforzadas. Hospitales, colegios, estaciones de bomberos. Esos plazos ' +
        'ya vencieron hace años.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién firma qué' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí no hay margen. La ley reserva las firmas, y quien firma responde:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Documento', 'Quién lo firma'],
      filas: [
        ['Evaluación de vulnerabilidad y diseño del reforzamiento', '**Ingeniero civil**, diseñador estructural'],
        ['Estudio geotécnico, si el caso lo requiere', '**Ingeniero civil** geotecnista'],
        ['Levantamiento arquitectónico y proyecto de intervención', 'Arquitecto con matrícula'],
      ],
      nota:
        'Ley 400 de 1997, artículos 4 y 26. Un arquitecto puede acompañar todo ' +
        'el proceso, coordinar y tramitar — pero **el dictamen estructural no lo ' +
        'firma**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y en edificaciones que superen los 2.000 m², la revisión de los diseños ' +
        'estructurales debe hacerla un profesional **distinto del diseñador e ' +
        'independiente laboralmente de él**, a costa de quien pide la licencia.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La licencia: cuál es y cuánto dura' },
    {
      tipo: 'parrafo',
      texto:
        'El reforzamiento estructural es una **modalidad propia de licencia de ' +
        'construcción**, no una obra menor que se pueda hacer sin permiso. Y ' +
        'tiene dos particularidades que conviene conocer antes de presupuestar.',
    },
    {
      tipo: 'lista',
      items: [
        '**Dura 24 meses**, prorrogables una vez por 12. Los 36 meses que se citan por todas partes son de obra nueva, urbanización y parcelación. Esta modalidad no está ahí.',
        '**Las expensas se liquidan sobre una base reducida.** Donde hay curaduría, el reforzamiento estructural liquida sobre el **30 %**, no sobre el total. Es un alivio real en el trámite.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y un incentivo que casi nadie usa: la ley faculta a los municipios a ' +
        '**eximir de impuestos de licencia y de predial, por un lapso que cada ' +
        'municipio define**, a las edificaciones preexistentes que se actualicen ' +
        'y se ajusten mediante una intervención conforme al reglamento. ' +
        'Pregunte en su alcaldía si su municipio lo adoptó — es una consulta ' +
        'gratuita que puede cambiar el número.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El orden correcto, y el que arruina el presupuesto' },
    {
      tipo: 'parrafo',
      texto:
        'El error más caro es contratar la obra antes de tener el diagnóstico. ' +
        'La secuencia que funciona:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Levantamiento de lo que existe.** Medidas reales, no las de la escritura.',
        '**Evaluación de vulnerabilidad**, firmada por ingeniero estructural. Aquí se sabe si hay que reforzar, cuánto y dónde.',
        '**Estudio geotécnico**, si el diagnóstico lo pide. A veces el problema no está arriba.',
        '**Diseño del reforzamiento**, que es un proyecto en sí mismo.',
        '**Licencia** en la modalidad de reforzamiento estructural.',
        '**Obra**, con supervisión de quien diseñó.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Saltarse el paso 2 es la razón por la que aparecen presupuestos de ' +
        'reforzamiento que varían diez veces entre sí: **están cotizando ' +
        'soluciones distintas para un problema que nadie ha definido.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué esperar del costo' },
    {
      tipo: 'parrafo',
      texto:
        'No voy a dar cifras, y por una razón: **no existe fuente colombiana ' +
        'publicada con metodología para el costo de un reforzamiento.** Depende ' +
        'del sistema estructural, del daño, de la accesibilidad y de si la ' +
        'edificación se puede desocupar.',
    },
    {
      tipo: 'parrafo',
      texto: 'Lo que sí se puede decir sobre la estructura del costo:',
    },
    {
      tipo: 'lista',
      items: [
        'El **trámite** es la parte barata, y con la base reducida del 30 % lo es más de lo que la gente teme.',
        'La **evaluación y el diseño** son proporcionalmente caros respecto de una obra nueva, porque hay que descubrir lo que ya existe.',
        'La **obra** es donde está el dinero, y su costo lo determina el diagnóstico — no al revés.',
        'Y en propiedad horizontal hay que sumar el tiempo: el fondo de imprevistos va primero, y **la cuota extraordinaria solo se aprueba si el fondo resulta insuficiente**.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Cualquier cifra que le den antes de la evaluación es un estimado sobre ' +
        'un problema desconocido. Puede servir para saber si vale la pena ' +
        'seguir; no para contratar.',
    },
  ],
  fuentes: [
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Decreto 926 de 2010, que adopta el Reglamento NSR-10',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39255',
      fecha: '2010-03-19',
    },
    {
      titulo: 'Decretos modificatorios de la NSR-10',
      editor: 'Asociación Colombiana de Ingeniería Sísmica',
      url: 'https://asosismica.org.co/decretos-modificatorios-nsr-10/',
      fecha: null,
    },
    {
      titulo: 'Decreto 1077 de 2015, modalidades y vigencia de las licencias',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1890 de 2021, liquidación de expensas de curaduría en UVT',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/normativa/decreto-1890-de-2021',
      fecha: '2021-12-30',
    },
    {
      titulo: 'Ley 1796 de 2016, revisión independiente de diseños estructurales',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
  ],
}
