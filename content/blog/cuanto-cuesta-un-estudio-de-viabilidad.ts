import type { Post } from '@/lib/types'
import { ESCALERA_DE_PRECIOS } from './diagramas/viabilidad'

/**
 * El artículo que le pone nombre a un producto que el mercado vende con dos
 * significados y un precio que se mueve por un factor de ocho.
 *
 * El encargo llegó con la tesis ya encontrada —dos productos distintos con el
 * mismo nombre— y con una pregunta abierta: si el Decreto 2090 de 1989 tarifa
 * algo asimilable al estudio previo de un predio, o si hay un vacío. **La
 * verificación cerró la pregunta y el resultado es mejor que un vacío: el
 * vacío está declarado por el propio decreto.**
 *
 * El decreto tarifa nueve clases de trabajo (numeral 0.3). El estudio previo de
 * un predio no es ninguna de las ocho primeras, y cae en el capítulo 8,
 * «Trabajos varios», cuya descripción dice literalmente que son «aquellos
 * trabajos en los cuales no son aplicables los otros honorarios establecidos en
 * este reglamento». Y el numeral 8.1.4 nombra «estudios de factibilidad» con
 * todas sus letras. Para ese capítulo el decreto no da una tarifa: da un método
 * de costeo —costos, más organización, más utilidad— y tres formas de pago.
 *
 * Ese es el corazón del artículo. El factor de ocho no es desorden del mercado:
 * es lo que pasa cuando la única metodología publicada del país declina
 * expresamente poner precio a ese trabajo.
 *
 * El contraste que lo remata también salió de la verificación: el decreto **sí**
 * tarifa el presupuesto preliminar en el 2,5 % del honorario de A P y S
 * (numeral 3.2.2 a), pero ese trabajo exige que ya existan anteproyecto o
 * planos generales. Tarifa lo que viene después de dibujar; lo de antes, no.
 *
 * La tercera pata es el ancla que sí tiene precio y casi nadie usa en esta
 * conversación: el concepto de norma urbanística, 8,34 UVT por decreto, y el de
 * uso del suelo, 1,67 UVT. Verificados en el texto vigente del artículo
 * 2.2.6.6.8.15 del Decreto 1077, y comprobado además que el Decreto 1107 de
 * 2026 **no** lo tocó: su artículo 13 enumera lo que modifica y de la sección 8
 * solo adiciona parágrafos al 2.2.6.6.8.4. Los pesos con IVA salen de la tabla
 * de expensas 2026 de una curaduría de Bogotá, que además confirma la UVT.
 *
 * Lo que se dejó fuera, y por qué:
 *
 * - **Cualquier cifra de qué cobra Plano Base.** La escalera no publica precios
 *   desde el 6/9/2026: se cotiza caso por caso. El cierre es una invitación a
 *   conversar, no una tarifa.
 * - **Un rango propio.** Tres precios publicados no son un mercado. Añadir una
 *   cuarta cifra sin respaldo sería exactamente el error que el artículo señala.
 * - **Qué encarece un estudio.** Las páginas consultadas solo declaran «según
 *   complejidad y municipio». Inventar una lista de variables con pesos
 *   relativos habría sido criterio disfrazado de dato.
 * - **El honorario del estudio abonado a la etapa siguiente.** Es práctica
 *   corriente y no hay fuente que la documente; va como pregunta que hacer, no
 *   como afirmación de que se hace.
 *
 * Fechado el 6 de septiembre de 2026, que es el día en que se leyeron las dos
 * páginas de precios. Es un artículo de precios: la fecha de corte va dentro
 * del texto, no solo en la cabecera de la página.
 */
export const post: Post = {
  slug: 'cuanto-cuesta-un-estudio-de-viabilidad',
  titulo: 'Cuánto cuesta un estudio de viabilidad de un predio',
  pilar: 'costos',
  fecha: '2026-04-21',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Entre la cotización más barata y la más cara hay un factor de ocho, y ' +
    'las dos se llaman igual. Una responde qué permite la norma en su predio; ' +
    'la otra, si el negocio da. Qué entregable esperar de cada una y por qué ' +
    'no existe una tarifa de referencia.',
  metaDescripcion:
    'Qué cuesta un estudio de viabilidad de un lote en Colombia, por qué el ' +
    'rango es tan amplio y qué preguntar antes de aceptar una cotización.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Pida tres cotizaciones para «un estudio de viabilidad» de su lote y ' +
        'puede recibir $150.000, $1.500.000 y $12.000.000. Las tres son ' +
        'reales, las tres están publicadas, y ninguna está mal.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El problema no es que una sea cara. Es que **el mercado le está ' +
        'poniendo el mismo nombre a dos productos distintos**, y quien pide la ' +
        'cotización casi nunca sabe cuál de los dos está pidiendo.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Dónde', 'Qué se compra', 'Precio publicado', 'Plazo'],
      filas: [
        [
          'Cali',
          'Consultoría técnica puntual: una sesión sobre la documentación que usted comparta',
          '**$150.000** por sesión',
          'Una sesión',
        ],
        [
          'Cali',
          'Informe técnico de lote en PDF firmado: norma del POT, índices de ocupación y construcción, aislamientos y afectaciones, usos viables, restricciones, riesgos y costos orientativos',
          '**Desde $1.500.000**',
          '5 a 10 días hábiles',
        ],
        [
          'Bogotá',
          'Estudio de prefactibilidad de un proyecto residencial de mediana escala, con estudio de mercado y proyecciones financieras',
          '**$3 a $12 millones**',
          '2 a 4 semanas',
        ],
      ],
      nota:
        'Precios que dos firmas colombianas publican en sus propias páginas, ' +
        'leídas el **6 de septiembre de 2026**. Las dos direcciones están al ' +
        'pie de este artículo. No son un promedio de mercado ni una encuesta: ' +
        'son tres cifras reales, y valen porque casi nadie publica ninguna.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Entre el informe de lote y la prefactibilidad hay **un factor de ' +
        'ocho**. Lo que sigue explica de dónde sale, qué entregable esperar de ' +
        'cada uno, y por qué en Colombia no existe una tarifa contra la cual ' +
        'comparar.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Dos productos con el mismo nombre' },
    {
      tipo: 'parrafo',
      texto:
        'La diferencia no está en el detalle ni en las páginas del informe. ' +
        'Está en la pregunta que cada uno responde, y son dos preguntas ' +
        'distintas que se le hacen al predio.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Estudio normativo del predio', 'Prefactibilidad de promotor'],
      filas: [
        [
          '**La pregunta que responde**',
          '¿Qué me deja construir aquí la norma?',
          '¿Este negocio da?',
        ],
        [
          '**Quién lo necesita**',
          'Quien tiene o va a comprar un lote y va a usar lo que construya',
          'Quien va a vender lo que construya',
        ],
        [
          '**Qué trae**',
          'Norma del POT aplicable al predio, índices de ocupación y construcción, aislamientos, usos permitidos, restricciones y riesgos',
          'Todo lo anterior, más estudio de mercado y proyecciones financieras: TIR, VPN, punto de equilibrio y flujo de caja',
        ],
        [
          '**Qué no trae**',
          'Ningún análisis financiero',
          'Ni planos, ni estudio de suelos, ni diseño estructural',
        ],
        ['**Plazo publicado**', '5 a 10 días hábiles', '2 a 4 semanas'],
      ],
      nota:
        'La firma de Bogotá distingue además la **prefactibilidad** —evaluación ' +
        'preliminar con datos secundarios— del **estudio de factibilidad** ' +
        '—análisis definitivo con datos primarios—, y a este último le asigna ' +
        'de 4 a 8 semanas. Solo publica precio del primero.',
    },
    {
      tipo: 'nota',
      texto:
        'Cuidado con la palabra. La firma de Cali también titula ' +
        '«prefactibilidad» su producto de $1.500.000, y la de Bogotá llama ' +
        '«viabilidad» al suyo. **El nombre no distingue nada: lo que distingue ' +
        'es el índice del entregable.** Si en ese índice no hay un capítulo ' +
        'financiero, usted no está comprando una prefactibilidad de promotor, ' +
        'se llame como se llame.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por qué no hay una tarifa de referencia' },
    {
      tipo: 'parrafo',
      texto:
        'Toda conversación sobre honorarios de arquitectura en Colombia ' +
        'termina en el **Decreto 2090 de 1989**, que es la única metodología ' +
        'completa y publicada que existe en el país. Cómo se llegó a ella y ' +
        'por qué ya no obliga está contado aparte, en ' +
        '[cuánto cobra un arquitecto](/blog/cuanto-cobra-un-arquitecto).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que aquí interesa es más simple: **¿tarifa el decreto el estudio ' +
        'previo de un predio?** Su numeral 0.3 enumera los trabajos que ' +
        'considera, y son nueve.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Esquema básico, anteproyecto, proyecto y supervisión arquitectónica.',
        'Urbanizaciones: anteproyecto y proyecto.',
        'Presupuesto.',
        'Control de costos.',
        'Programación y control de la programación.',
        'Interventoría.',
        'Construcción.',
        '**Trabajos varios.**',
        'Gerencia de proyectos.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Mire la lista otra vez. Todos empiezan cuando ya hay un proyecto, o ' +
        'una obra, o al menos un encargo de dibujar. **Ninguno es «estudiar un ' +
        'lote antes de dibujar nada».** Así que cae en el octavo, y el octavo ' +
        'se define por lo que no es:',
    },
    {
      tipo: 'cita',
      texto:
        'Son aquellos trabajos en los cuales no son aplicables los otros ' +
        'honorarios establecidos en este reglamento.',
      fuente: 'Decreto 2090 de 1989, numeral 8.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y por si quedara duda de que el estudio previo va ahí, el numeral ' +
        '8.1.4 lo nombra con todas sus letras al enumerar qué entra en ese ' +
        'cajón:',
    },
    {
      tipo: 'cita',
      texto:
        'Planes de desarrollo urbanístico, asesorías, estudios y consultorías ' +
        'no definidas en este reglamento, estudios de factibilidad, ' +
        'peritazgos, maquetas, perspectivas, diseño de interiores, evaluación ' +
        'de proyectos, investigaciones.',
      fuente: 'Decreto 2090 de 1989, numeral 8.1.4',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para ese capítulo el decreto no fija ningún porcentaje ni ninguna ' +
        'cifra. Lo que da es un **método de costeo**: el arquitecto cobra lo ' +
        'que cubra los costos del trabajo, los costos de su organización y una ' +
        'utilidad. Y tres formas de liquidarlo.',
    },
    {
      tipo: 'lista',
      items: [
        '**Multiplicador**, cuando no se sabe de antemano cuánto trabajo hay. Se aplica solo a los sueldos del personal del estudio, y el decreto dice que sus límites normales están entre **2,5 y 3,5**. El 3,5 es para trabajos «de pocos días y gran especialidad, para la solución de un problema específico».',
        '**Suma fija por día o por hora**, para asesoría personal. La tarifa se calcula sobre el sueldo del profesional, sus costos de oficina y su utilidad.',
        '**Costo total más una suma fija**, cuando sí se puede saber de antemano la cantidad de trabajo y su duración.',
      ],
    },
    {
      tipo: 'dato',
      valor: 'Ninguna',
      etiqueta:
        'Cifras de referencia que la única metodología de honorarios publicada ' +
        'en Colombia da para el estudio previo de un predio. Da un método de ' +
        'costeo y tres formas de pago, no una tarifa.',
      fuente:
        'Decreto 2090 de 1989, capítulo 8: numerales 8.1, 8.1.4, 8.2 y 8.3. ' +
        'El numeral 0.2 acota los mínimos del reglamento a «los trabajos de ' +
        'que trata el mismo».',
    },
    {
      tipo: 'nota',
      texto:
        'El contraste que lo deja claro: el decreto **sí** le pone tarifa a un ' +
        'estimado de costos. El «presupuesto preliminar» vale el **2,5 % del ' +
        'honorario** de anteproyecto, proyecto y supervisión (numeral 3.2.2). ' +
        'Pero su propia descripción exige que ya exista anteproyecto o planos ' +
        'generales. **El decreto tarifa lo que viene después de dibujar. Lo de ' +
        'antes de dibujar, no.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y aunque lo tarifara, no obligaría a nadie: el decreto decayó al ' +
        'derogarse la norma que le daba fundamento, y el Consejo de Estado ' +
        'dijo en 2020 que puede usarse como criterio técnico «pero en ningún ' +
        'caso como criterio de carácter obligatorio».',
    },
    {
      tipo: 'parrafo',
      texto:
        'Así que el factor de ocho no es desorden ni abuso. **Es lo que pasa ' +
        'cuando el único documento del país que podría dar un ancla declina ' +
        'expresamente ponerle precio a ese trabajo.** Cada quien costea el ' +
        'suyo, y nadie tiene contra qué compararlo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El único precio con tarifa oficial es el del Estado' },
    {
      tipo: 'parrafo',
      texto:
        'Hay una excepción, y conviene conocerla antes de cotizar nada: ' +
        'existen dos documentos sobre la norma de su predio cuyo precio lo fija ' +
        'un decreto nacional, igual en todo el país, y que expide la misma ' +
        'autoridad que después le va a otorgar la licencia.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué es', 'Qué le entregan', 'Cuánto cuesta', 'Plazo'],
      filas: [
        [
          '**Consulta verbal** sobre las normas urbanísticas vigentes',
          'Una respuesta hablada. No hay documento',
          '**Gratuita por norma**',
          '—',
        ],
        [
          '**Concepto de norma urbanística**',
          'Dictamen escrito sobre las normas aplicables a su predio',
          '**8,34 UVT** · $436.799, o $519.791 con IVA',
          '15 días hábiles',
        ],
        [
          '**Concepto de uso del suelo**',
          'Dictamen escrito sobre qué usos se permiten',
          '**1,67 UVT** · $87.465, o $104.083 con IVA',
          '15 días hábiles',
        ],
      ],
      nota:
        'Decreto 1077 de 2015, artículo 2.2.6.6.8.15, sustituido por el ' +
        'artículo 5 del Decreto 1890 de 2021; el plazo, en el artículo ' +
        '2.2.6.1.3.1. Los valores van en UVT porque así los fija la norma. Los ' +
        'pesos corresponden a la UVT de 2026, $52.374, y salen de la tabla de ' +
        'expensas 2026 que publica una curaduría de Bogotá.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con una advertencia que la propia norma se encarga de dar, y que ' +
        'mucha gente descubre tarde:',
    },
    {
      tipo: 'cita',
      texto:
        'La expedición de estos conceptos no otorga derechos ni obligaciones a ' +
        'su peticionario y no modifica los derechos conferidos mediante ' +
        'licencias que estén vigentes o que hayan sido ejecutadas.',
      fuente: 'Decreto 1077 de 2015, artículo 2.2.6.1.3.1, numerales 2 y 3',
    },
    {
      tipo: 'nota',
      texto:
        'Tres reglas prácticas que ahorran dinero. La consulta verbal es ' +
        'gratuita, sin excepción. **Si el concepto se pide dentro del trámite ' +
        'de la licencia, no se cobra aparte**: la expensa solo procede cuando ' +
        'la actuación se ejecuta de manera independiente. Y donde no hay ' +
        'curador urbano, sino oficina de planeación, está prohibido cobrar ' +
        'expensas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Entonces, ¿por qué pagaría alguien un millón y medio por algo que la ' +
        'curaduría le da por un tercio? Porque no es lo mismo. **El concepto le ' +
        'entrega la norma; el estudio le entrega la lectura de la norma ' +
        'aplicada a lo que usted quiere hacer.** El concepto dice que el índice ' +
        'de construcción es 1,5. El estudio dice cuántos metros son, cuántas ' +
        'unidades caben, qué le impide el aislamiento posterior y qué pasa si ' +
        'la pendiente obliga a un muro de contención. Si su pregunta es la ' +
        'primera, la respuesta cuesta $519.791.',
    },
    {
      tipo: 'diagrama',
      svg: ESCALERA_DE_PRECIOS,
      titulo: 'Los cuatro precios de la misma pregunta',
      pie:
        'Eje logarítmico: en escala lineal, los dos precios que fija el decreto ' +
        'caerían encima del cero y la figura solo enseñaría la barra de la ' +
        'derecha. Precios con IVA para los dos conceptos, y publicados por dos ' +
        'firmas privadas para los otros dos. Fecha de corte: 6 de septiembre ' +
        'de 2026.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Ocho preguntas antes de aceptar una cotización' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿Qué pregunta responde este estudio: la normativa o la financiera?** Si la respuesta mezcla las dos, pida el índice del entregable antes de firmar.',
        '**¿Trae análisis financiero?** TIR, valor presente neto, punto de equilibrio, flujo de caja. Si no los trae, no es una prefactibilidad de promotor y no debería costar como una.',
        '**¿Sobre qué norma se hace, y con qué fecha de corte?** No es una formalidad: en Cali el plan de ordenamiento vigente tiene fecha de vencimiento, y un estudio hecho hoy puede quedar entre dos normas. Está contado en [qué pasa con su licencia si cambia el POT de Cali](/blog/pot-de-cali-y-su-licencia).',
        '**¿Qué documentos del predio hacen falta, y quién los consigue?** Certificado de tradición y libertad, cabida y linderos, plano topográfico. Si el estudio no los pide, está trabajando sobre supuestos.',
        '**¿Incluye el estudio de suelos?** No debería, y no es una omisión: la Ley 400 de 1997 reserva esa firma a un ingeniero civil, y el propio Decreto 2090 dice que los estudios de ingeniería «serán pagados por la entidad contratante y su valor no está comprendido dentro de los honorarios del arquitecto».',
        '**¿Se entrega firmado, y por quién?** Con nombre y número de matrícula profesional. Un informe sin firma no compromete a nadie.',
        '**¿Qué pasa si la conclusión es que no se puede hacer lo que usted quería?** Ese estudio también sirvió, y es probablemente el que más plata le ahorró. Pregunte además si el honorario se abona a la etapa siguiente.',
        '**¿Se resuelve esto con la consulta verbal y el concepto de norma?** A veces sí. Vale la pena preguntarlo en voz alta antes de contratar nada.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien conteste estas ocho sin incomodarse le está diciendo algo más ' +
        'útil que su precio. Y si lo que usted quiere saber es qué permite la ' +
        'norma, sin más, eso se lee: está explicado en ' +
        '[qué puedo construir en mi lote](/blog/que-puedo-construir-en-mi-lote). ' +
        'Lo que debería contener el informe que le entreguen, en ' +
        '[qué debe contener un informe técnico serio](/blog/que-debe-contener-un-informe-tecnico-serio).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que este artículo no afirma' },
    {
      tipo: 'lista',
      items: [
        '**Que estos sean los precios del mercado.** Son tres cifras publicadas por dos firmas. No hay en Colombia estadística de precios de estudios previos, y tres referencias no son un mercado.',
        '**Que exista una tarifa oficial para este trabajo.** No existe, y el Decreto 2090 dice expresamente que este es de los trabajos a los que no le aplican sus honorarios. Tampoco obliga en los que sí tarifa.',
        '**Que los precios sigan vigentes.** Son los que las dos páginas publicaban el 6 de septiembre de 2026. Un precio sin fecha de corte es falso dentro de seis meses, y este artículo tiene la suya escrita.',
        '**Que el estudio caro esté sobrevalorado.** Un estudio de mercado inmobiliario con proyecciones financieras es otro trabajo, con otros insumos y otro perfil profesional. Compararlo con un informe normativo por el precio es comparar dos cosas que no compiten.',
        '**Qué cobra Plano Base por esto.** No aparece aquí a propósito: se cotiza caso por caso, porque el alcance de un estudio depende del predio y de la pregunta.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Si tiene un lote y una cotización sobre la mesa, la conversación de ' +
        'quince minutos para entender qué le están vendiendo no cuesta nada. ' +
        'Es, con diferencia, el momento más barato para hacer las ocho ' +
        'preguntas de arriba.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'costos', 'norma-urbana'],
  fuentes: [
    {
      titulo: 'Decreto 2090 de 1989: honorarios para trabajos de arquitectura',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo:
        'Sentencia del 28 de agosto de 2020, exp. 25000-23-24-000-2012-00759-01: el Decreto 2090 no es criterio obligatorio',
      editor: 'Consejo de Estado, Sección Primera',
      url: 'https://www.consejodeestado.gov.co/wp-content/uploads/2020/12/SanFiscSAC.pdf',
      fecha: '2020-08-28',
    },
    {
      titulo:
        'Decreto 1077 de 2015, artículos 2.2.6.1.3.1 y 2.2.6.6.8.15: otras actuaciones y sus expensas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1890 de 2021: expensas de curaduría liquidadas en UVT',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/normativa/decreto-1890-de-2021',
      fecha: '2021-12-30',
    },
    {
      titulo: 'Resolución 000238 de 2025: valor de la UVT para 2026',
      editor: 'Dirección de Impuestos y Aduanas Nacionales',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0238_2025.htm',
      fecha: '2025-12-15',
    },
    {
      titulo:
        'Tabla de expensas 2026 según el Decreto 1077 de 2015: la UVT del año y las expensas por otras actuaciones, en pesos',
      editor: 'Curaduría Urbana No. 5 de Bogotá',
      url: 'https://www.curaduria5bogota.com.co/wp-content/uploads/2026/01/TABLA-EXPENSAS-2026-CU5-PAGINA-WEB-V1.pdf',
      fecha: '2025-12-31',
    },
    {
      titulo: 'Estudio de prefactibilidad técnica: consultoría puntual e informe técnico de lote, con precios',
      editor: 'AyS Arquitectura e Interiorismo, Cali',
      url: 'https://www.ays-arquitectura-interiorismo.com/p/estudio-de-prefactibilidad.html',
      fecha: null,
    },
    {
      titulo: 'Estudio de prefactibilidad y viabilidad constructiva en Bogotá, con precios y plazos',
      editor: 'Edificiencia, Bogotá',
      url: 'https://edificiencia.com/prefactibilidades.html',
      fecha: null,
    },
    {
      titulo: 'Ley 400 de 1997, por la cual se adoptan normas sobre construcciones sismo resistentes',
      editor: 'Congreso de la República de Colombia',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
  ],
}
