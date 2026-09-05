import type { Post } from '@/lib/types'

/**
 * Perenne del pilar de proceso. Es la pieza que un cliente guarda y vuelve a
 * abrir cuando va a firmar — de las que generan confianza sin vender nada.
 *
 * La sección de propiedad intelectual es la más valiosa y la que casi nadie
 * escribe bien. Tres hallazgos de la investigación que sostienen el artículo:
 *
 * - Los derechos morales del autor son perpetuos, inalienables e
 *   irrenunciables. No se ceden aunque el contrato diga que sí.
 * - El artículo 43 de la Ley 23 de 1982 tiene una regla especialísima de
 *   arquitectura: el autor **no puede impedir** que el propietario modifique la
 *   obra, pero sí puede prohibir que su nombre se asocie a ella. En
 *   arquitectura, la integridad cede ante la propiedad.
 * - La cesión de derechos patrimoniales debe constar por escrito como
 *   condición de validez, y si no dice plazo **queda limitada a cinco años**.
 *
 * Fechado en febrero de 2024: no cita nada posterior a 2011.
 */
export const post: Post = {
  slug: 'contrato-de-diseno-arquitectonico',
  titulo: 'El contrato de diseño arquitectónico: qué tiene que decir',
  pilar: 'proceso',
  fecha: '2024-02-20',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'La mayoría de los encargos de diseño en Colombia se pactan por WhatsApp ' +
    'y una transferencia. Las seis cláusulas donde se pierden las ' +
    'discusiones — incluida una regla de derecho de autor, propia de la ' +
    'arquitectura, que sorprende a las dos partes.',
  metaDescripcion:
    'Qué debe decir un contrato de diseño arquitectónico: alcance, entregas, ' +
    'revisiones, propiedad de los planos y cancelación.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La mayoría de los encargos de diseño arquitectónico en Colombia se ' +
        'pactan por WhatsApp y una transferencia. Funciona bien hasta que deja ' +
        'de funcionar — y cuando deja de funcionar, no hay a qué remitirse.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esto no es un modelo de contrato. Son **las seis cláusulas donde de ' +
        'verdad se pierden las discusiones**, con lo que dice la norma sobre ' +
        'cada una. Sirve igual para revisar el contrato que le pasaron o para ' +
        'pedir el que no le han pasado.',
    },
    {
      tipo: 'nota',
      texto:
        'Que exista algo escrito no es una recomendación de buenas prácticas: ' +
        'la propia norma de honorarios exige que **«debe existir una constancia ' +
        'escrita entre el arquitecto y la entidad contratante donde se ' +
        'estipulen las condiciones del contrato»**.',
    },

    { tipo: 'titulo', nivel: 2, texto: '1. El alcance: qué se entrega, exactamente' },
    {
      tipo: 'parrafo',
      texto:
        'La causa número uno de conflicto es que las dos partes creían haber ' +
        'contratado cosas distintas. Se resuelve enumerando entregables, no ' +
        'adjetivos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La norma trae la lista más completa que existe en Colombia para el ' +
        'proyecto arquitectónico, y sirve de plantilla:',
    },
    {
      tipo: 'lista',
      items: [
        'Planos generales de plantas, cortes y fachadas.',
        'Planos de detalle: carpintería, obras metálicas, escaleras, baños, fachadas, enchapes, cielorrasos y pisos.',
        'Esquemas de desagües e iluminación — **sin los cálculos ni los planos de ingeniería**, que son de otro profesional.',
        'Especificaciones detalladas de materiales y acabados.',
        'Coordinación de los planos técnicos. La norma acota: «la labor del arquitecto en este campo es solamente de coordinación».',
        'La tramitación ante la autoridad competente.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y con la misma claridad, **qué no está incluido**: estudio de suelos, ' +
        'diseño estructural, diseños eléctrico, hidrosanitario y de gas, ' +
        'topografía, expensas de curaduría e impuesto de delineación. La norma ' +
        'lo dice sin rodeos — los estudios de ingeniería «serán pagados por la ' +
        'entidad contratante y su valor no está comprendido dentro de los ' +
        'honorarios del arquitecto».',
    },
    {
      tipo: 'nota',
      texto:
        'No es una decisión comercial del estudio: la ley reserva la firma del ' +
        'diseño estructural y del estudio geotécnico al ingeniero civil. Un ' +
        'contrato que prometa «todo incluido» está prometiendo algo que ' +
        'después va a subcontratar, o está prometiendo firmas que no puede dar.',
    },

    { tipo: 'titulo', nivel: 2, texto: '2. El pago: por entregas, no por fechas' },
    {
      tipo: 'parrafo',
      texto:
        'Un cronograma de pagos por fechas es imposible de verificar: si el ' +
        'proyecto se atrasa, el calendario sigue corriendo. Un cronograma por ' +
        '**entregables** se verifica solo.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Al entregar', 'Acumulado'],
      filas: [
        ['Esquema básico', '7 %'],
        ['Anteproyecto', 'hasta 15 %'],
        ['Planos suficientes para radicar la licencia', 'hasta 45 %'],
        ['Licencia obtenida', '50 % a 60 %'],
        ['Planos y detalles completos', '80 % a 90 %'],
        ['Supervisión durante la obra', 'el 10 % restante'],
      ],
      nota:
        'Decreto 2090 de 1989, numeral 1.2.4.2. Del honorario de proyecto se ' +
        'retiene un 10 % que se paga durante la obra — es lo que mantiene al ' +
        'arquitecto interesado en que lo dibujado se pueda construir.',
    },

    { tipo: 'titulo', nivel: 2, texto: '3. Las revisiones: cuántas, y quién paga las demás' },
    {
      tipo: 'parrafo',
      texto:
        '**Ninguna norma colombiana fija un número de revisiones incluidas.** ' +
        'Es decisión comercial, y por eso tiene que estar escrita: dos, tres, ' +
        'las que sean, pero un número.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que la norma sí da es la regla de quién paga, y es la distinción ' +
        'que evita el pleito:',
    },
    {
      tipo: 'cita',
      texto:
        'Salvo errores u omisiones del arquitecto, toda modificación al ' +
        'proyecto arquitectónico se cobrará a la entidad contratante.',
      fuente: 'Decreto 2090 de 1989, numeral 1.2.4.3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Error del arquitecto: lo corrige él. Cambio de opinión del cliente: lo ' +
        'paga el cliente. La norma incluso distingue tres escenarios según si ' +
        'la modificación aumenta, mantiene o reduce el presupuesto de obra.',
    },

    { tipo: 'titulo', nivel: 2, texto: '4. De quién son los planos' },
    {
      tipo: 'parrafo',
      texto:
        'Es la sección más rica y la que casi nadie escribe bien. Hay cuatro ' +
        'cosas que conviene saber antes de firmar cualquier cláusula de ' +
        'propiedad intelectual.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Los planos son obra protegida, sin trámite' },
    {
      tipo: 'parrafo',
      texto:
        'La ley de derecho de autor protege expresamente «las obras de dibujo, ' +
        'pintura, **arquitectura**… los **planos**, croquis y obras plásticas ' +
        'relativas a la arquitectura». No hace falta registrarlos: el registro ' +
        'es declarativo, no constitutivo. Sirve como prueba, no como requisito.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Los derechos morales no se ceden, aunque el contrato lo diga' },
    {
      tipo: 'parrafo',
      texto:
        'El derecho a ser reconocido como autor es **«perpetuo, inalienable e ' +
        'irrenunciable»**, y la ley añade que esos derechos «no pueden ser ' +
        'renunciados ni cedidos». Una cláusula que pretenda lo contrario no ' +
        'produce efecto.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Los patrimoniales sí se ceden, con dos condiciones' },
    {
      tipo: 'parrafo',
      texto:
        'Cuando la obra se crea por encargo, **se presume** que los derechos ' +
        'patrimoniales se transfirieron a quien encargó, «en la medida ' +
        'necesaria para el ejercicio de sus actividades habituales». Pero hay ' +
        'dos condiciones que casi nadie cumple:',
    },
    {
      tipo: 'lista',
      items: [
        '**Para que opere la presunción, el contrato debe constar por escrito.** Sin contrato escrito no hay presunción de cesión.',
        '**La transferencia debe constar por escrito como condición de validez**, y si no menciona el tiempo, **queda limitada a cinco años**.',
      ],
    },
    { tipo: 'titulo', nivel: 3, texto: 'Y la regla especialísima de arquitectura' },
    {
      tipo: 'parrafo',
      texto:
        'Esta sorprende a las dos partes cuando se la enseñan, y está en un ' +
        'solo artículo:',
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
        'En arquitectura, **el derecho del autor a que su obra no se altere ' +
        'cede ante el derecho de propiedad**. Un edificio se habita, se ' +
        'transforma y se adapta; no es un cuadro. Lo que sobrevive es la firma: ' +
        'el arquitecto puede exigir que le quiten el nombre.',
    },
    {
      tipo: 'nota',
      texto:
        'La contracara está en la norma de honorarios, y va en dirección ' +
        'opuesta: el proyecto **«solamente puede usarse en la construcción del ' +
        'edificio para el cual fue elaborado»**, y no se puede utilizar en ' +
        'obras distintas de aquellas para las que fue contratado. Es decir: ' +
        'usted puede modificar la casa que le diseñaron; no puede construir la ' +
        'misma casa cinco veces con esos planos, salvo pacto expreso.',
    },

    { tipo: 'titulo', nivel: 2, texto: '5. Qué pasa si usted cancela' },
    {
      tipo: 'parrafo',
      texto:
        'Los proyectos se caen: cambia el presupuesto, se vende el lote, la ' +
        'familia cambia de planes. Conviene que esté escrito antes de que pase.',
    },
    {
      tipo: 'parrafo',
      texto: 'La norma prevé el caso, y con una condición que sorprende:',
    },
    {
      tipo: 'cita',
      texto:
        'Se cobrará un porcentaje de los honorarios equivalente al trabajo ' +
        'ejecutado […] más un 25 % adicional. En este caso, los planos ' +
        'parciales elaborados no podrán ser utilizados para la ejecución ' +
        'parcial o total de la obra.',
      fuente: 'Decreto 2090 de 1989, numeral 1.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        '**No se puede pagar el anteproyecto, terminarlo con otro y construir ' +
        'con eso.** Es la cláusula que más se ignora y la que más conflictos ' +
        'produce. Se puede pactar distinto —comprar el derecho a terminarlo con ' +
        'otro es perfectamente legítimo— pero hay que pactarlo.',
    },

    { tipo: 'titulo', nivel: 2, texto: '6. Quién firma, y con qué número' },
    {
      tipo: 'parrafo',
      texto:
        'Para ejercer la arquitectura en Colombia hace falta tarjeta de ' +
        'matrícula profesional, y la ley exige que **para suscribir contratos ' +
        'se presente la matrícula y se indique su número en el contrato**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si el contrato que le pasaron no lo trae, pídalo. El registro es ' +
        'público y gratuito, y hay un certificado de vigencia profesional que ' +
        'acredita además **la ausencia de sanciones**. Con una particularidad ' +
        'útil de conocer: la consulta no funciona por nombre, solo por número ' +
        'de documento o de matrícula.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La verificación antes de firmar' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '¿Están enumerados los **entregables** de cada etapa, y no solo el nombre de la etapa?',
        '¿Dice explícitamente **qué no incluye** — suelos, estructural, técnicos, expensas, impuesto?',
        '¿El pago va contra **entregas** y no contra fechas?',
        '¿Dice **cuántas revisiones** están incluidas y qué pasa con las siguientes?',
        '¿Dice de quién son los planos, **por cuánto tiempo** y **para qué obra**?',
        '¿Dice qué pasa si cualquiera de las dos partes cancela?',
        '¿Está el **número de matrícula profesional** de quien firma?',
        '¿Hay plazos con fechas, y qué pasa si se incumplen?',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Un contrato que responde estas ocho cabe en tres páginas y evita casi ' +
        'todo lo que sale mal. La resistencia a firmarlo, de cualquiera de las ' +
        'dos partes, dice bastante más que cualquier referencia.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'contrato'],
  fuentes: [
    {
      titulo: 'Ley 23 de 1982 sobre derechos de autor, artículos 20, 30, 43 y 183',
      editor: 'Dirección Nacional de Derecho de Autor',
      url: 'https://www.derechodeautor.gov.co/es/registro-de-obras-artisticas',
      fecha: '1982-01-28',
    },
    {
      titulo: 'Ley 1450 de 2011, artículos 28 y 30, que modifican el régimen de obra por encargo y de cesión',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43101',
      fecha: '2011-06-16',
    },
    {
      titulo: 'Decreto 2090 de 1989, honorarios para trabajos de arquitectura',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo: 'Ley 435 de 1998, por la cual se reglamenta el ejercicio de la arquitectura',
      editor: 'Consejo Profesional Nacional de Arquitectura y sus Profesiones Auxiliares',
      url: 'https://cpnaa.gov.co/wp-content/uploads/attachments/ley435.pdf',
      fecha: '1998-02-10',
    },
    {
      titulo: 'Ley 400 de 1997, artículo 26: quién puede firmar cada diseño',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
  ],
}
