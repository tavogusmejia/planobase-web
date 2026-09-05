import type { Post } from '@/lib/types'

/**
 * La pieza de patologías dirigida a quien está a punto de pagar por un
 * peritaje y no tiene con qué juzgarlo. Es la que menos se parece a un
 * artículo de blog y la que más sirve: se lee con el informe al lado.
 *
 * El hallazgo que la estructura: **Colombia sí tiene una definición legal de
 * qué es un informe técnico bien hecho.** No está en la norma de
 * construcción, está en el artículo 226 del Código General del Proceso, que
 * fija los requisitos del dictamen pericial. Un informe de patología casi
 * nunca es un dictamen pericial —y el artículo lo dice—, pero es la única
 * vara escrita que hay en el país, y es exigente: claro, preciso, exhaustivo
 * y detallado, con los métodos explicados y la independencia declarada bajo
 * juramento. Medir con ella una cotización disfrazada de diagnóstico la deja
 * en evidencia sola.
 *
 * El segundo eje sale de la NSR-10: el A.10.1.5 enumera qué debe contener la
 * memoria de la evaluación, y el A.10.2.2 exige una calificación explícita
 * del estado. Son secciones concretas que se pueden buscar en el índice.
 *
 * No se dan precios de peritaje. No hay fuente colombiana que los publique y
 * las que circulan son de proveedores.
 *
 * Fechado en noviembre de 2025.
 */
export const post: Post = {
  slug: 'que-debe-contener-un-informe-tecnico-serio',
  titulo: 'Qué debe contener un informe técnico serio',
  pilar: 'patologias',
  fecha: '2025-11-11',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Pagó por un diagnóstico y le entregaron una cotización con fotos. Qué ' +
    'secciones tiene un informe que sirve, cuál es la única definición legal ' +
    'colombiana de un informe técnico bien hecho, y siete señales de uno que ' +
    'no va a servirle para nada.',
  metaDescripcion:
    'Qué secciones debe tener un informe técnico de patología, cómo ' +
    'distinguirlo de una cotización disfrazada y qué señales delatan uno malo.',
  puerta: 'opinion-profesional',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'administrador', 'patologia', 'contrato'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Usted pagó por saber qué le pasa al edificio. Le entregaron catorce ' +
        'páginas: dos de portada, seis de fotos con pie genérico, una de ' +
        '«antecedentes» copiada de otro informe y cinco de precios. En ninguna ' +
        'dice por qué ocurrió lo que ocurrió.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso no es un informe técnico. Es una cotización con fotos. Y la ' +
        'diferencia no es de estilo: un documento así no le sirve para decidir, ' +
        'no le sirve para comparar ofertas y no le sirve para reclamar.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La prueba de los cinco minutos' },
    {
      tipo: 'parrafo',
      texto:
        'Antes de leerlo entero, haga esto. Abra el índice y cuente cuánto ' +
        'espacio ocupa **el problema** y cuánto ocupa **la solución**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En un informe de diagnóstico, la parte que describe, mide, explora y ' +
        'concluye la causa es la mayor con diferencia. Las recomendaciones son ' +
        'la consecuencia, y ocupan poco. **Si la proporción está invertida, ' +
        'usted no compró un diagnóstico: compró una propuesta comercial.**',
    },
    {
      tipo: 'nota',
      texto:
        'La segunda prueba es igual de rápida: busque la palabra «porque». Un ' +
        'informe que no explica por qué pasó lo que pasó no es un diagnóstico, ' +
        'aunque tenga cien fotos y un membrete.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La única vara escrita que hay en Colombia' },
    {
      tipo: 'parrafo',
      texto:
        'No existe una norma colombiana que diga cómo debe redactarse un ' +
        'informe de patología de edificaciones. Pero sí existe una que dice ' +
        'cómo debe redactarse un informe técnico que va a sostenerse frente a ' +
        'un juez, y es exigente: el **artículo 226 del Código General del ' +
        'Proceso**, que fija los requisitos del dictamen pericial.',
    },
    {
      tipo: 'cita',
      texto:
        'Todo dictamen debe ser claro, preciso, exhaustivo y detallado; en él ' +
        'se explicarán los exámenes, métodos, experimentos e investigaciones ' +
        'efectuadas, lo mismo que los fundamentos técnicos, científicos o ' +
        'artísticos de sus conclusiones.',
      fuente: 'Ley 1564 de 2012, artículo 226',
    },
    {
      tipo: 'parrafo',
      texto:
        'Conviene ser preciso con el alcance: **la mayoría de los informes de ' +
        'patología no son dictámenes periciales.** Un dictamen se rinde dentro ' +
        'de un proceso judicial y tiene reglas propias. Pero si el país solo ' +
        'escribió una vez qué es un informe técnico bien hecho, esa es la ' +
        'definición que hay, y no hay razón para pedir menos de lo que la ley ' +
        'pide cuando la plata está en juego. El mismo artículo exige además:',
    },
    {
      tipo: 'lista',
      items: [
        'Que el que lo firma **declare bajo juramento que su opinión es independiente** y corresponde a su real convicción profesional. El juramento se entiende prestado por la sola firma.',
        'Que se acompañe de **los documentos que le sirven de fundamento**, y de los que acreditan la idoneidad y la experiencia de quien lo rinde.',
        'La identidad de quien lo rinde **y de quien participó en su elaboración**. No solo del que firma.',
        'La profesión u oficio ejercido, con los títulos y certificados de experiencia anexos.',
        'La relación y el anexo de **toda la información utilizada** para elaborarlo.',
        'La declaración de si los métodos empleados son distintos de los que usa habitualmente y, si lo son, la justificación de la variación.',
      ],
      ordenada: true,
    },
    {
      tipo: 'nota',
      texto:
        'Ese último punto es el más severo de todos y casi nadie lo aplica ' +
        'fuera de un juzgado: **si usted midió distinto que de costumbre, tiene ' +
        'que decir por qué.** Es exactamente la exigencia que separa un método ' +
        'de una improvisación.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las secciones que debe tener' },
    {
      tipo: 'parrafo',
      texto:
        'La NSR-10 no describe el informe, pero sí describe la memoria de la ' +
        'evaluación de una edificación existente, y esa lista se traduce casi ' +
        'directamente en un índice. Junto con lo anterior, esto es lo que debe ' +
        'estar:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Sección', 'Qué tiene que decir', 'Por qué importa'],
      filas: [
        [
          '**Objeto y alcance**',
          'Qué se contrató, qué se revisó y qué quedó expresamente fuera',
          'Es lo que impide que después se discuta si «eso estaba incluido»',
        ],
        [
          '**Identificación del inmueble**',
          'Dirección, matrícula, año de construcción, sistema estructural, uso actual y usos anteriores',
          'Un edificio sin fecha ni sistema estructural no se puede evaluar',
        ],
        [
          '**Documentación disponible**',
          'Planos de la licencia, memorias, estudio de suelos, actas, licencias anteriores. **Y cuáles no aparecieron**',
          'La norma pide una relación de los documentos de diseño y construcción utilizados. Lo que falta es tan informativo como lo que hay',
        ],
        [
          '**Metodología y ensayos**',
          'Qué se hizo, con qué equipo, bajo qué norma de ensayo, cuántos puntos y dónde',
          'Sin esto, ningún resultado se puede repetir ni contrastar',
        ],
        [
          '**Registro de lo observado**',
          'Cada lesión localizada en un plano, medida y **fechada**, no solo fotografiada',
          'Una fisura sin fecha y sin cota no se puede volver a medir dentro de seis meses',
        ],
        [
          '**Diagnóstico**',
          'La causa. Y si hay varias hipótesis, cuáles se descartaron y con qué evidencia',
          'Es la sección por la que se paga. Todo lo demás es soporte',
        ],
        [
          '**Calificación del estado**',
          'Calidad del diseño y la construcción originales, y estado actual: **buena, regular o mala**',
          'Es la calificación que exige la NSR-10, y es la que permite comparar un edificio con otro',
        ],
        [
          '**Conclusiones**',
          'Numeradas, y cada una atada a la evidencia que la sostiene',
          'Una conclusión que no se puede rastrear hasta un dato es una opinión',
        ],
        [
          '**Recomendaciones priorizadas**',
          'Qué hacer, en qué orden y con qué urgencia. Separando lo que corrige la causa de lo que repara el daño',
          'Reparar sin corregir la causa es el error más caro del oficio',
        ],
        [
          '**Limitaciones**',
          'Qué no se pudo ver, qué no se pudo ensayar y qué queda pendiente de verificar',
          'Es la sección que casi nunca está y la que más dice del que firma',
        ],
        [
          '**Firma, matrícula y anexos**',
          'Quién firma, con qué matrícula, quién más participó, y los soportes completos',
          'Sin matrícula vigente el documento no compromete a nadie',
        ],
      ],
      nota:
        'Las secciones de documentación disponible, evaluación del estado y ' +
        'justificación de parámetros salen de los literales (a) a (e) del ' +
        'numeral A.10.1.5 de la NSR-10; la calificación en buena, regular o ' +
        'mala, del A.10.2.2.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'La sección de limitaciones' },
    {
      tipo: 'parrafo',
      texto:
        'Insisto en esta porque es contraintuitiva. **Un informe que declara ' +
        'lo que no pudo verificar es más confiable que uno que no declara ' +
        'nada**, no menos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Nunca se ve todo. No se destapó la cimentación porque no había ' +
        'autorización del propietario del primer piso. No se ensayó el concreto ' +
        'de las columnas de fachada porque estaban revestidas en piedra. No se ' +
        'pudo revisar el cuarto de bombas porque no apareció la llave. Todo eso ' +
        'va escrito, con su consecuencia: qué conclusión queda condicionada por ' +
        'cada hueco.',
    },
    {
      tipo: 'nota',
      texto:
        'Un informe sin limitaciones declaradas está diciendo, sin querer, que ' +
        'lo vio todo. Nadie ve todo. La NSR-10 lo asume: pide dejar constancia ' +
        'del **alcance de las exploraciones**, no de su resultado nada más.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Siete señales de un informe que no sirve' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**No dice cuándo se hizo la visita.** Ni la fecha, ni las condiciones. Un informe de humedades sin decir si llovía es media información.',
        '**No hay metodología.** Se pasa de las fotos a las conclusiones. Si no se sabe cómo se llegó, no se puede saber si se llegó bien.',
        '**Las conclusiones son la lista de precios.** Cuando el capítulo de conclusiones y el presupuesto dicen lo mismo, el diagnóstico se escribió después de la cotización.',
        '**Dice qué hacer pero no por qué pasó.** «Se recomienda impermeabilizar la cubierta» sin decir por dónde entra el agua es una recomendación que puede fallar entera.',
        '**Las fotos no están localizadas.** Una fisura fotografiada sin decir en qué eje, qué piso y qué cara está no se puede volver a encontrar.',
        '**No hay firma con matrícula, o el que firma no puede firmar eso.** Una conclusión estructural la firma un ingeniero civil con la experiencia que exige la Ley 400. Un arquitecto puede diagnosticar muchas cosas; el veredicto estructural no es una de ellas.',
        '**El que lo firma vende la reparación.** No siempre es descalificante, pero tiene que estar declarado. El Código General del Proceso pide justamente eso: que la independencia se afirme, no que se suponga.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'El conflicto de interés, dicho sin rodeos' },
    {
      tipo: 'parrafo',
      texto:
        'La combinación más común del mercado es también la peor: el que ' +
        'diagnostica es el que repara, y cobra el diagnóstico barato o lo ' +
        'regala porque el negocio está en la obra.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El problema no es la mala fe. Es que un diagnóstico hecho por quien va ' +
        'a ejecutar tiende, sin proponérselo, hacia el alcance que ese ' +
        'ejecutor sabe hacer. Quien vende impermeabilización encuentra ' +
        'problemas de impermeabilización.',
    },
    {
      tipo: 'nota',
      texto:
        'El propio ordenamiento colombiano razona así en otros sitios: la ' +
        'revisión de los diseños estructurales de un proyecto la hace un ' +
        'profesional distinto del diseñador, sin relación laboral ni ' +
        'contractual con él ni con su empresa. La independencia de quien revisa ' +
        'no es una preferencia de estilo: en la norma es un requisito.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué pedir por escrito antes de contratarlo' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El índice del informe que le van a entregar.** Si no se lo pueden dar antes, es porque todavía no saben qué van a hacer.',
        '**La lista de exploraciones y ensayos**, con cantidad y ubicación tentativa.',
        '**Quién firma cada parte**, con matrícula y experiencia acreditada.',
        '**Qué queda fuera del alcance**, dicho en el contrato y no en el informe final.',
        '**Si quien firma tiene interés en la reparación**, declarado por escrito.',
        '**Cuántas copias, en qué formato y con qué anexos.** Un informe que llega en PDF sin los planos ni los resultados de ensayo está incompleto por diseño.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una última, que es gratis: **pida el informe antes de pedir el ' +
        'presupuesto.** El orden importa. Un presupuesto entregado al mismo ' +
        'tiempo que el diagnóstico casi siempre significa que uno de los dos se ' +
        'escribió primero, y no fue el diagnóstico.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los requisitos citados están transcritos del articulado vigente. Lo ' +
        'demás —la prueba de los cinco minutos, las siete señales— es criterio ' +
        'de oficio, y va dicho como tal.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Ley 1564 de 2012, Código General del Proceso, artículo 226: requisitos del dictamen pericial',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48425',
      fecha: '2012-07-12',
    },
    {
      titulo:
        'NSR-10, Título A, numerales A.10.1.5 y A.10.2: contenido de la memoria y estudios requeridos',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.scg.org.co/Titulo-A-NSR-10-Decreto%20Final-2010-01-13.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'Ley 400 de 1997, artículos 26 a 29: quién puede firmar cada diseño y qué experiencia debe acreditar',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo:
        'Decreto 1077 de 2015, artículo 2.2.6.1.2.2.3, parágrafo 2: independencia del revisor de diseños',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
  ],
}
