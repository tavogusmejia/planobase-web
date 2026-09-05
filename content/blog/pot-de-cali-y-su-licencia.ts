import type { Post } from '@/lib/types'

/**
 * Pieza con ventana. El POT vigente muere el 9 de enero de 2027 y el nuevo
 * todavía no está radicado en el Concejo: quien vaya a radicar una licencia en
 * Cali tiene meses, no años, para decidir bajo qué norma quiere que lo
 * estudien.
 *
 * La verificación corrigió la fecha que circulaba —no es noviembre de 2026,
 * es el 9 de enero de 2027— y encontró un hecho nuevo: la Alcaldía pidió seis
 * meses más por el sismo, y el juzgado no ha resuelto. Va marcado como
 * pendiente, no como hecho.
 *
 * El corazón del artículo no es el calendario sino una distinción que casi
 * nadie hace: **un concepto de norma urbanística no congela nada; radicar en
 * legal y debida forma sí.** Mucha gente cree estar protegida por un papel que
 * la propia norma declara sin efecto.
 *
 * Y una abstención deliberada: el decreto de prórroga de licencias por el
 * sismo se anunció pero no se ha publicado. El artículo lo dice así, con
 * fecha de corte, en vez de darlo por hecho.
 */
export const post: Post = {
  slug: 'pot-de-cali-y-su-licencia',
  titulo: 'Qué pasa con su licencia si cambia el POT de Cali',
  pilar: 'tramites',
  fecha: '2026-09-04',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'El POT de Cali está anulado y funcionando con plazo prestado, que vence ' +
    'el 9 de enero de 2027. Qué se protege si ya tiene licencia, qué se ' +
    'congela al radicar, y por qué el certificado de norma urbanística que ' +
    'tiene guardado no le sirve para eso.',
  metaDescripcion:
    'El POT de Cali vence el 9 de enero de 2027. Qué pasa con una licencia ' +
    'vigente y qué congela la norma al radicar.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Cali está construyendo con un plan de ordenamiento que un tribunal ' +
        'anuló hace dos años y que sigue vigente solo porque el mismo tribunal ' +
        'le dio un plazo. Ese plazo tiene fecha.',
    },
    {
      tipo: 'dato',
      valor: '9 de enero de 2027',
      etiqueta:
        'Día en que el Acuerdo 0373 de 2014 pierde definitivamente su vigencia, ' +
        'salvo que un juzgado conceda la prórroga que la Alcaldía pidió en ' +
        'agosto.',
      fuente:
        'Considerandos del proyecto de acuerdo del nuevo POT, Departamento ' +
        'Administrativo de Planeación de Cali.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si usted tiene una licencia vigente, si está a punto de radicar, o si ' +
        'guarda un certificado de norma urbanística creyendo que lo protege, ' +
        'esto le aplica. Y la respuesta a las tres situaciones es distinta.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué pasó con el POT' },
    {
      tipo: 'parrafo',
      texto:
        'El Tribunal Administrativo del Valle del Cauca declaró la nulidad del ' +
        'Acuerdo 0373 de 2014 —la revisión de largo plazo del POT— mediante la ' +
        'Sentencia 129 del 25 de abril de 2024.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El motivo no tiene nada que ver con el contenido del plan: es un vicio ' +
        'de **competencia**. El acuerdo lo sancionó una alcaldesa ad hoc ' +
        'designada por la Procuraduría Regional del Valle, cuando la facultad ' +
        'de designarla correspondía a la Presidencia de la República. Un plan ' +
        'de ordenamiento entero cayó por quién firmó.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El Tribunal difirió los efectos por 30 meses desde la ejecutoria de la ' +
        'sentencia, para que la ciudad no se quedara sin norma mientras ' +
        'tramitaba una nueva. Ese periodo corre **del 9 de julio de 2024 al 9 ' +
        'de enero de 2027**.',
    },
    {
      tipo: 'nota',
      texto:
        'Detalle que dice mucho: el POT nuevo también lo tramita un alcalde ad ' +
        'hoc, porque al alcalde Eder se le aceptó un impedimento. Pero esta vez ' +
        'lo designó el **Ministerio del Interior**, no la Procuraduría — ' +
        'justamente para no repetir el vicio que tumbó el anterior.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Y el sismo movió el tablero' },
    {
      tipo: 'parrafo',
      texto:
        'El 20 de agosto de 2026 se conoció que la Alcaldía radicó ante el ' +
        'Juzgado Quinto Administrativo de Cali una solicitud de **seis meses ' +
        'adicionales** de diferimiento —hasta el 9 de julio de 2027— para ' +
        'incorporar al plan la microzonificación sísmica y los estudios ' +
        'geotécnicos posteriores al terremoto del 10 de agosto.',
    },
    {
      tipo: 'nota',
      texto:
        'Al 4 de septiembre de 2026 **el juzgado no ha resuelto**. Es una ' +
        'solicitud, no un hecho. Planificar contando con esos seis meses es ' +
        'apostar.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Dónde va el POT nuevo' },
    {
      tipo: 'tabla',
      cabeceras: ['Hito', 'Fecha', 'Estado'],
      filas: [
        ['Radicación ante la CVC para concertación ambiental', '5 de diciembre de 2025', 'Cumplido'],
        ['Primera mesa de concertación ambiental', '12 de febrero de 2026', 'Cumplido'],
        ['Radicación ante el Consejo Territorial de Planeación', '3 de agosto de 2026', 'Cumplido'],
        ['Concepto del Consejo Territorial de Planeación', '—', '**Pendiente** al 2 de septiembre de 2026'],
        ['Radicación ante el Concejo Distrital', 'Octubre de 2026', 'Previsión de la Administración'],
        ['Aprobación', 'Finales de diciembre de 2026', 'Previsión de la Administración'],
      ],
      nota:
        'Las dos últimas filas son expectativas declaradas por la Dirección de ' +
        'Planeación, no hechos. Ese cronograma ya se corrió una vez: en ' +
        'diciembre de 2025 se anunciaba radicación ante el Concejo en junio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La ley le da al Consejo Territorial de Planeación 30 días hábiles para ' +
        'rendir concepto, y al alcalde 30 días más para presentar el proyecto ' +
        'al Concejo. Y hay una válvula de escape que conviene conocer: si el ' +
        'Concejo no decide en 60 días desde la presentación, **el alcalde puede ' +
        'adoptar el POT por decreto**.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Si ya tiene licencia: está protegido, con plazo' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la buena noticia y está en norma, no en opinión. El Decreto ' +
        '1077 de 2015 dice que el otorgamiento de la licencia **determina la ' +
        'adquisición de los derechos de construcción y desarrollo** en los ' +
        'términos y condiciones expresados en ella. Y añade que la licencia ' +
        'produce todos sus efectos aun cuando el predio se venda.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es decir: **su licencia vigente sobrevive al cambio de POT**. Lo dijo ' +
        'también la Dirección de Gestión Jurídica Pública del Distrito cuando ' +
        'se conoció la nulidad — las situaciones jurídicas consolidadas ' +
        'continúan vigentes.',
    },
    {
      tipo: 'parrafo',
      texto: 'Pero el blindaje es temporal, y aquí está la letra pequeña:',
    },
    {
      tipo: 'cita',
      texto:
        'Cuando una licencia pierda su vigencia por vencimiento del plazo o de ' +
        'sus prórrogas, el interesado deberá solicitar una nueva licencia, ante ' +
        'la misma autoridad que la expidió, ajustándose a las normas ' +
        'urbanísticas vigentes al momento de la nueva solicitud.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.4.3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Traducido: si su licencia vence después de que entre el POT nuevo y ' +
        'usted no alcanzó a construir, vuelve a empezar bajo la norma nueva. El ' +
        'derecho vivía en la licencia, no en el predio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La única figura que conserva la norma vieja es la **revalidación**: se ' +
        'pide dentro de los dos meses siguientes al vencimiento, una sola vez, ' +
        'acreditando bajo juramento un avance de obra de al menos el 50 %. Se ' +
        'resuelve «con fundamento en las normas urbanísticas que sirvieron de ' +
        'base para la expedición de la licencia objeto de la revalidación».',
    },
    {
      tipo: 'nota',
      texto:
        'La prórroga se pide **a más tardar 30 días hábiles antes** del ' +
        'vencimiento —hábiles, no calendario— con documentación completa y ' +
        'manifestación juramentada de que la obra inició. Y la segunda prórroga ' +
        'extraordinaria del Decreto 74 de 2025 **ya no está disponible**: su ' +
        'ventana se cerró el 30 de junio de 2026.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Conviene además no leer «derecho adquirido» como sinónimo de eterno. ' +
        'El Consejo de Estado lo dijo con claridad: los derechos nacidos de una ' +
        'licencia urbanística **no son absolutos ni inmodificables en el ' +
        'tiempo**, y las licencias están subordinadas al interés público y al ' +
        'cumplimiento del POT.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Si está en trámite: radicar congela la norma' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la pieza que decide qué conviene hacer en los próximos meses, ' +
        'y está escrita de forma expresa desde 2010:',
    },
    {
      tipo: 'cita',
      texto:
        'Si durante el término que transcurre entre la solicitud de una ' +
        'licencia y la expedición del acto administrativo que la otorgue se ' +
        'produce un cambio en las normas urbanísticas que afecten el proyecto, ' +
        'el solicitante tendrá derecho a que la licencia se le conceda con base ' +
        'en la norma urbanística vigente al momento de la radicación de la ' +
        'solicitud, siempre que la misma haya sido presentada en legal y debida ' +
        'forma.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.1.2, parágrafo',
    },
    {
      tipo: 'parrafo',
      texto:
        'No es una interpretación favorable: es la regla. Y el propio POT de ' +
        '2014 la repitió en su régimen de transición, y el proyecto del POT ' +
        'nuevo la vuelve a repetir en su artículo 661.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo depende entonces de una expresión: **«en legal y debida forma»**. ' +
        'La norma la define sin margen:',
    },
    {
      tipo: 'cita',
      texto:
        'Se entenderá que una solicitud de licencia está radicada en legal y ' +
        'debida forma si a la fecha de radicación se allega la totalidad de los ' +
        'documentos exigidos, aun cuando estén sujetos a posteriores ' +
        'correcciones.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.1.1, parágrafo 1',
    },
    {
      tipo: 'parrafo',
      texto:
        'El expediente completo congela la norma. El expediente incompleto no ' +
        'congela nada. Y las correcciones que pida después el acta de ' +
        'observaciones **no rompen** ese congelamiento — eso es lo que hace ' +
        'que valga la pena radicar completo aunque queden cosas por pulir.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no congela nada' },
    {
      tipo: 'parrafo',
      texto:
        'Y aquí está el error más caro que se comete en esta ventana. Mucha ' +
        'gente pide un concepto de norma urbanística o un certificado de uso ' +
        'del suelo, lo guarda, y cree que con eso su proyecto quedó amarrado a ' +
        'la norma de hoy.',
    },
    {
      tipo: 'parrafo',
      texto: 'No quedó amarrado a nada. La norma lo dice literalmente:',
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
      tipo: 'parrafo',
      texto:
        'Lo mismo vale para las líneas de demarcación y los esquemas básicos. ' +
        'El proyecto del POT nuevo va más lejos y lo declara expresamente: los ' +
        'certificados de uso del suelo expedidos con la normativa anterior **no ' +
        'conceden derecho a desarrollar el uso específico**, y esos ' +
        'instrumentos «en ningún caso generan situaciones jurídicas ' +
        'consolidadas».',
    },
    {
      tipo: 'nota',
      texto:
        'Dicho en corto: **el único acto que congela la norma es radicar la ' +
        'licencia, completa.** Todo lo demás es información, y la información ' +
        'caduca cuando cambia el plan.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El decreto por el sismo que todavía no existe' },
    {
      tipo: 'parrafo',
      texto:
        'Desde finales de agosto circula que el Gobierno prorrogaría por doce ' +
        'meses las licencias vigentes al 10 de agosto de 2026. El ministro de ' +
        'Vivienda lo anunció ante el gremio y dijo que el decreto estaba «a la ' +
        'espera de la firma».',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Al 4 de septiembre de 2026 esa norma no se ha publicado.** El índice ' +
        'de normativa del Ministerio no la registra, y el boletín del propio ' +
        'Ministerio del 2 de septiembre habla en genérico de decretos por venir, ' +
        'sin número y sin mencionar licencias.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí está expedido es otra cosa: el desastre de carácter nacional ' +
        'y el estado de emergencia económica, social y ecológica. Habilitan la ' +
        'materia, pero **no prorrogan ninguna licencia por sí mismos**.',
    },
    {
      tipo: 'nota',
      texto:
        'Mientras no aparezca con número y Diario Oficial, rige el régimen ' +
        'ordinario. **No dé por prorrogada una licencia vencida.** La ventana ' +
        'sigue abierta —el estado de emergencia permite expedirlo—, así que ' +
        'conviene reverificar antes de tomar una decisión que dependa de eso.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo consultar la norma de su predio hoy' },
    {
      tipo: 'lista',
      items: [
        '**Consulta de uso del suelo**, en `usodelsuelo.cali.gov.co`. Gratis, inmediata, sin registro, por dirección o por número predial. Entrega un PDF con las actividades permitidas.',
        '**Concepto de norma urbanística**, ante Planeación. Gratis, 15 días hábiles, en línea con inicio de sesión o presencial en el CAM.',
        '**Geovisor del IDESC**, que orienta pero no certifica: el propio aviso de la herramienta advierte que para documentos oficiales hay que usar el acuerdo y su cartografía.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y recuerde lo del apartado anterior: ninguno de los tres le congela la ' +
        'norma. Sirven para saber qué se puede hacer, no para asegurarlo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hacer con esto' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Si su proyecto se sostiene bajo el POT de 2014 y está maduro, radíquelo completo.** La norma aplicable se congela el día de la radicación, no el día en que le respondan.',
        '**No radique incompleto para «ganar fecha».** Un expediente incompleto no congela nada; solo consume tiempo y puede terminar en desistimiento.',
        '**Si tiene licencia vigente, mire la fecha de vencimiento contra el calendario del POT.** Si vence después del cambio y no va a alcanzar a construir, la prórroga o la revalidación dejan de ser trámite y pasan a ser estrategia.',
        '**No confíe en un certificado de norma urbanística guardado.** No le da ningún derecho.',
        '**Si el predio está en zona de riesgo o de ladera, cuente con que la norma va a cambiar más que el promedio.** La Administración anunció que incorporará microzonificación sísmica actualizada; el contenido concreto todavía no se conoce.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior está verificado contra norma, sentencia y comunicado ' +
        'oficial al 4 de septiembre de 2026. Cuatro cosas siguen abiertas y ' +
        'pueden mover el calendario: la decisión del juzgado sobre los seis ' +
        'meses, el concepto del Consejo Territorial de Planeación, la ' +
        'radicación en el Concejo, y el decreto nacional de licencias. Si va a ' +
        'tomar una decisión que dependa de alguna, confírmela antes.',
    },
  ],
  fuentes: [
    {
      titulo: 'Revisión y ajuste del Plan de Ordenamiento Territorial: proyecto de acuerdo y considerandos',
      editor: 'Departamento Administrativo de Planeación, Alcaldía de Santiago de Cali',
      url: 'https://www.cali.gov.co/planeacion/publicaciones/187380/revision-y-ajuste-del-plan-de-ordenamiento-territorial/',
      fecha: '2026-08-03',
    },
    {
      titulo: 'El POT del Distrito de Santiago de Cali sigue vigente',
      editor: 'Departamento Administrativo de Gestión Jurídica Pública, Alcaldía de Cali',
      url: 'https://www.cali.gov.co/juridica/publicaciones/181931/el-pot-del-distrito-de-santiago-de-cali-sigue-vigente/',
      fecha: '2024-07-03',
    },
    {
      titulo: 'Decreto 1077 de 2015, libro 2, parte 2, título 6: licencias urbanísticas',
      editor: 'Ministerio de Relaciones Exteriores · Normograma',
      url: 'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/pdf/decreto_1077_2015_pr031.pdf',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1783 de 2021: vigencia, prórroga y revalidación de licencias',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175086',
      fecha: '2021-12-20',
    },
    {
      titulo: 'Decreto 74 de 2025: segunda prórroga extraordinaria, cerrada el 30 de junio de 2026',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=258016',
      fecha: '2025-01-24',
    },
    {
      titulo: 'Sentencia del 29 de abril de 2015, exp. 25000-23-24-000-2011-00329-01: alcance de los derechos derivados de una licencia',
      editor: 'Consejo de Estado, Sección Primera',
      url: 'https://www.consejodeestado.gov.co/documentos/boletines/167/AC/25000-23-24-000-2011-00329-01(AP).pdf',
      fecha: '2015-04-29',
    },
    {
      titulo: 'Acuerdo 0373 de 2014, POT de Santiago de Cali',
      editor: 'Concejo de Santiago de Cali',
      url: 'https://saul.cali.gov.co/pimu/pot/otros/Acuerdo%200373%20de%202014.pdf',
      fecha: '2014-12-01',
    },
    {
      titulo: 'Ley 388 de 1997, de desarrollo territorial',
      editor: 'Congreso de la República de Colombia',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-388-1997.pdf',
      fecha: '1997-07-18',
    },
    {
      titulo: 'La Alcaldía solicitó prórroga al Juzgado Quinto para incorporar evaluaciones geotécnicas al POT tras el sismo',
      editor: 'El País',
      url: 'https://www.elpais.com.co/cali/alcaldia-de-cali-solicito-prorroga-al-juzgado-quinto-para-incorporar-evaluaciones-geotecnicas-al-pot-tras-el-sismo-2058.html',
      fecha: '2026-08-20',
    },
    {
      titulo: 'Mesa técnica ampliada sobre el POT: el Consejo Territorial de Planeación aún sin concepto',
      editor: 'Alcaldía de Santiago de Cali',
      url: 'https://www.cali.gov.co/planeacion/publicaciones/194118/',
      fecha: '2026-09-02',
    },
    {
      titulo: 'Normativa del sector vivienda',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/normativa',
      fecha: null,
    },
  ],
}
