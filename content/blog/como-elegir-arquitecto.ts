import type { Post } from '@/lib/types'

/**
 * La pieza que sostiene la puerta de opinión profesional. Es un artículo
 * incómodo de escribir para un estudio de arquitectura —enseña a desconfiar de
 * arquitectos— y por eso mismo funciona: quien lo lee entero llega a la primera
 * llamada sabiendo qué preguntar.
 *
 * Todo el material está verificado y publicado: la matrícula del CPNAA y la
 * obligación de indicar su número en el contrato (Ley 435 de 1998), que el
 * registro **no se puede buscar por nombre** —hay que pedirle al arquitecto su
 * documento o su matrícula—, el Certificado de Vigencia Profesional que además
 * acredita ausencia de sanciones, la lista pública de sancionados, la
 * prohibición de prestar la firma para autorizar planos que no se estudiaron, y
 * la reserva del artículo 26 de la Ley 400 sobre quién firma el estructural y
 * el geotécnico.
 *
 * Dos decisiones de fondo:
 *
 * 1. **Ninguna señal de alarma es de gusto ni de estilo.** Todas las banderas
 *    rojas de la lista se pueden verificar con un documento o con una pregunta
 *    concreta. «No me gustó su portafolio» no es un criterio publicable.
 * 2. **No se repite que el ejercicio ilegal de la arquitectura sea delito.** No
 *    está tipificado como tal, y esa afirmación circula mucho. Lo que sí existe
 *    es la queja disciplinaria ante el CPNAA y la competencia de las
 *    autoridades de policía.
 *
 * No se publica ningún rango de honorarios: la pieza de costos ya explica por
 * qué las dos guías que circulan se contradicen por un factor de tres.
 *
 * Fechada en junio de 2025.
 */
export const post: Post = {
  slug: 'como-elegir-arquitecto',
  titulo: 'Cómo elegir arquitecto, y qué señales indican que no es el indicado',
  pilar: 'local',
  fecha: '2025-04-12',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Se elige con documentos y con seis preguntas, no con un portafolio ' +
    'bonito. Cómo verificar la matrícula en dos minutos, qué certificado ' +
    'pedir, y las nueve señales que conviene tomarse en serio.',
  metaDescripcion:
    'Cómo elegir un arquitecto en Colombia: verificar la matrícula del ' +
    'CPNAA, qué preguntar y qué señales de alarma no ignorar.',
  puerta: 'opinion-profesional',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Escribo esto sabiendo que es raro: un estudio de arquitectura ' +
        'explicando cómo desconfiar de un arquitecto. Pero la mala experiencia ' +
        'de alguien con un colega nos cuesta a todos, y casi todas se podían ' +
        'haber evitado con dos consultas gratuitas y seis preguntas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de las señales que siguen es de gusto ni de estilo. **Todas se ' +
        'verifican con un documento o con una respuesta concreta.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Primero: verificar que lo es' },
    {
      tipo: 'parrafo',
      texto:
        'Para ejercer la arquitectura en Colombia hacen falta dos cosas: el ' +
        'título **y** la tarjeta de matrícula profesional del Consejo ' +
        'Profesional Nacional de Arquitectura. Y la ley va más lejos: para ' +
        'suscribir contratos hay que presentar la matrícula **e indicar su ' +
        'número en el contrato**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El registro es público y gratuito, y tiene una particularidad que ' +
        'conviene conocer antes de intentarlo:',
    },
    {
      tipo: 'nota',
      texto:
        '**El registro no se puede buscar por nombre.** Hay que buscar por ' +
        'número de documento o por número de matrícula. Así que pídale a su ' +
        'arquitecto uno de los dos. Es una pregunta perfectamente normal, y ' +
        '**cómo la reciba ya le dice algo**.',
    },
    {
      tipo: 'lista',
      items: [
        '**Consulta del registro**, por documento o por matrícula, en la oficina virtual del CPNAA.',
        '**Certificado de Vigencia Profesional**, gratuito. Es el documento que conviene pedir, porque acredita la matrícula **y además la ausencia de sanciones**.',
        '**Lista de profesionales sancionados**, que el CPNAA publica con nombre, matrícula y fechas de suspensión.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Dos matices para no repetir cosas falsas. El ejercicio ilegal de la ' +
        'arquitectura **no está tipificado como delito** —es competencia de las ' +
        'autoridades de policía, no del CPNAA—. Pero cualquier persona sí puede ' +
        'presentar una queja disciplinaria ante el CPNAA contra un arquitecto ' +
        'matriculado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La prohibición que describe una práctica real' },
    {
      tipo: 'parrafo',
      texto:
        'Al arquitecto le está expresamente prohibido **«prestar su firma a ' +
        'título gratuito u oneroso, para autorizar planos que no hayan sido ' +
        'estudiados, controlados o ejecutados personalmente»**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esa norma no se escribió en el vacío. Si alguien le ofrece «conseguir ' +
        'quién le firme» los planos, le está proponiendo exactamente lo que la ' +
        'norma prohíbe. Y hay un detalle que conviene tener claro: **el que ' +
        'firma es el que responde**. Si el que firmó no dibujó, no hay a quién ' +
        'reclamarle cuando algo salga mal, porque el que dibujó no figura y el ' +
        'que figura no sabe.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las nueve señales de alarma' },

    { tipo: 'titulo', nivel: 3, texto: '1. No le da su número de matrícula' },
    {
      tipo: 'parrafo',
      texto:
        'O se incomoda con la pregunta. Es la señal más simple y la más ' +
        'definitiva, porque la respuesta cuesta cero.',
    },

    { tipo: 'titulo', nivel: 3, texto: '2. Le ofrece «todo incluido» a un precio redondo' },
    {
      tipo: 'cita',
      texto:
        'El diseñador debe ser un ingeniero civil cuando se trate de diseños ' +
        'estructurales y estudios geotécnicos, y un arquitecto o ingeniero civil ' +
        'o mecánico en el caso de diseños de elementos no estructurales.',
      fuente: 'Ley 400 de 1997, artículo 26',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Un arquitecto no puede firmar el diseño estructural ni el estudio de ' +
        'suelos.** No es una política comercial: la ley reserva esas firmas. ' +
        'Quien le ofrece todo incluido o está subcontratando —y debería ' +
        'decírselo— o va a conseguir quién firme, que es la señal anterior.',
    },

    { tipo: 'titulo', nivel: 3, texto: '3. Cobra por fechas y no por entregas' },
    {
      tipo: 'parrafo',
      texto:
        'La única metodología publicada en Colombia reparte el honorario **por ' +
        'entregables**, no por calendario: esquema básico, anteproyecto, planos ' +
        'para radicar, licencia obtenida, planos y detalles completos, ' +
        'supervisión durante la obra. Cada hito es comprobable.',
    },
    {
      tipo: 'nota',
      texto:
        'Un contrato que dice «30 % a la firma, 30 % al mes, 40 % al segundo ' +
        'mes» no le da forma de verificar nada. Si el trabajo no avanza, usted ' +
        'igual paga.',
    },

    { tipo: 'titulo', nivel: 3, texto: '4. Le muestra planos de licencia como si fueran el proyecto' },
    {
      tipo: 'parrafo',
      texto:
        'Los planos con los que se radica una licencia no alcanzan para ' +
        'construir. El proyecto arquitectónico es «toda la información ' +
        'necesaria para que la construcción pueda ser ejecutada correctamente»: ' +
        'detalles de carpintería, escaleras, baños, fachadas, enchapes, ' +
        'cielorrasos, pisos, y las especificaciones.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Entregar los planos de licencia y decir que el trabajo terminó es la ' +
        'causa más frecuente de que después se improvise en obra —y de que el ' +
        'presupuesto se desborde.',
    },

    { tipo: 'titulo', nivel: 3, texto: '5. Le promete un plazo total sin preguntarle nada' },
    {
      tipo: 'parrafo',
      texto:
        'El único plazo con respaldo normativo en todo el recorrido son los **45 ' +
        'días hábiles** del estudio de la licencia. Todo lo demás depende del ' +
        'proyecto, del municipio y —sobre todo— de qué tan rápido decida usted.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un arquitecto que le da un plazo total en la primera llamada, sin ' +
        'haber visto el predio ni saber quién decide en su casa, le está dando ' +
        'un número, no un cronograma.',
    },

    { tipo: 'titulo', nivel: 3, texto: '6. No le habla del estudio de suelos' },
    {
      tipo: 'parrafo',
      texto:
        'El estudio de suelos condiciona la cimentación, la cimentación ' +
        'condiciona la estructura y la estructura condiciona la arquitectura. ' +
        'Quien no lo menciona en las primeras conversaciones, o piensa ' +
        'dibujarlo después, o piensa no hacerlo.',
    },

    { tipo: 'titulo', nivel: 3, texto: '7. Trata la licencia como un trámite ajeno' },
    {
      tipo: 'parrafo',
      texto:
        'La norma incluye el trámite ante la autoridad dentro del proyecto ' +
        'arquitectónico, y liga un tramo del honorario a **la licencia ' +
        'obtenida**, no a la licencia radicada. Si su arquitecto le dice que ' +
        '«eso lo ve usted con la curaduría», está devolviéndole la parte más ' +
        'técnica del encargo.',
    },

    { tipo: 'titulo', nivel: 3, texto: '8. No quiere firmar un contrato' },
    {
      tipo: 'parrafo',
      texto:
        'La norma de honorarios exige que exista **constancia escrita**. Y hay ' +
        'tres cláusulas donde se pierden todas las discusiones, y que un buen ' +
        'contrato define:',
    },
    {
      tipo: 'lista',
      items: [
        '**Cuántas revisiones incluye.** Ninguna norma colombiana fija un número; por eso hay que escribirlo. Lo que sí da la norma es la regla de quién paga: salvo error u omisión del arquitecto, la modificación se le cobra al contratante.',
        '**De quién son los planos.** Son obra protegida por derecho de autor. La cesión de derechos patrimoniales **debe constar por escrito** para ser válida, y si no dice por cuánto tiempo, queda limitada a cinco años.',
        '**Qué pasa si usted cancela.** La norma prevé que se cobre lo ejecutado, con un mínimo, y añade una condición que conviene entender antes de firmar: **los planos parciales no pueden usarse para ejecutar la obra**.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y una regla de arquitectura que sorprende a las dos partes: el autor ' +
        'de un proyecto arquitectónico **no puede impedir que el propietario ' +
        'introduzca modificaciones**, pero sí puede prohibir que su nombre se ' +
        'asocie a la obra alterada. En arquitectura, el derecho a la integridad ' +
        'de la obra cede ante el derecho de propiedad; lo que sobrevive es la ' +
        'firma.',
    },

    { tipo: 'titulo', nivel: 3, texto: '9. Le dice que también va a dirigir la obra, en el mismo contrato' },
    {
      tipo: 'cita',
      texto:
        'El arquitecto tiene únicamente la función de supervisión de su ' +
        'proyecto y no la dirección técnica de la obra.',
      fuente: 'Decreto 2090 de 1989',
    },
    {
      tipo: 'parrafo',
      texto:
        'Supervisión arquitectónica, dirección de obra e interventoría son tres ' +
        'contratos distintos, con tres funciones distintas, y con frecuencia ' +
        'tres personas distintas. Mezclarlos en un solo precio no es ' +
        'necesariamente mala fe, pero sí es un contrato en el que después nadie ' +
        'sabe qué se contrató.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las seis preguntas de la primera llamada' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿Sobre qué base calcula el honorario?** Debe ser el costo de obra, sin el lote.',
        '**¿Cómo se reparte por entregas?** Si el reparto es por fechas y no por entregables, no hay cómo verificar nada.',
        '**¿Qué queda por fuera?** Debería nombrarle el estudio de suelos, el estructural, la topografía, las expensas y el impuesto de delineación sin que usted pregunte.',
        '**¿Quién firma cada plano?** El estructural y el geotécnico van firmados por un ingeniero civil.',
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

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no es una señal de alarma' },
    {
      tipo: 'parrafo',
      texto:
        'Por simetría, conviene decir también qué se descarta mal:',
    },
    {
      tipo: 'lista',
      items: [
        '**Que cobre más que otro.** Los honorarios de arquitectura en Colombia no tienen tarifa obligatoria desde hace décadas, y las guías que circulan se contradicen por un factor de tres. El precio, solo, no informa.',
        '**Que sea un estudio pequeño.** Lo que importa es quién firma y quién responde, no cuántos escritorios hay.',
        '**Que no haya hecho antes una casa exactamente como la suya.** Casi ninguna casa se parece a otra. Lo que se evalúa es el método, no el catálogo.',
        '**Que le diga que no.** Un arquitecto que le explica por qué lo que usted pide no cabe en la norma o no cabe en el presupuesto le está ahorrando el problema, no creándolo.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'En resumen' },
    {
      tipo: 'parrafo',
      texto:
        'Pida el número de matrícula, verifíquelo en el registro, pida el ' +
        'Certificado de Vigencia Profesional y haga las seis preguntas. Son ' +
        'veinte minutos y dos consultas gratuitas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es poquísimo comparado con lo que cuesta descubrir después que el que ' +
        'firmó no era el que dibujaba.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'contrato', 'costos'],
  fuentes: [
    {
      titulo: 'Ley 435 de 1998, por la cual se reglamenta el ejercicio de la arquitectura',
      editor: 'Consejo Profesional Nacional de Arquitectura y sus Profesiones Auxiliares',
      url: 'https://cpnaa.gov.co/wp-content/uploads/attachments/ley435.pdf',
      fecha: '1998-02-10',
    },
    {
      titulo: 'Consulta del registro de arquitectos y profesionales auxiliares',
      editor: 'Consejo Profesional Nacional de Arquitectura',
      url: 'https://www.cpnaa.gov.co/consulta-del-registro-de-arquitectos-y-profesionales-auxiliares-de-la-arquitectura/',
      fecha: null,
    },
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes, artículo 26',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Decreto 2090 de 1989: etapas, entregas y honorarios de arquitectura',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo: 'Sentencia del 28 de agosto de 2020: el Decreto 2090 no es criterio obligatorio',
      editor: 'Consejo de Estado, Sección Primera',
      url: 'https://www.consejodeestado.gov.co/wp-content/uploads/2020/12/SanFiscSAC.pdf',
      fecha: '2020-08-28',
    },
    {
      titulo: 'Ley 23 de 1982 sobre derechos de autor, artículos 30, 43 y 183',
      editor: 'Dirección Nacional de Derecho de Autor',
      url: 'https://www.derechodeautor.gov.co/es/registro-de-obras-artisticas',
      fecha: '1982-01-28',
    },
    {
      titulo: 'Decreto 1077 de 2015, plazos y trámite de las licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
  ],
}
