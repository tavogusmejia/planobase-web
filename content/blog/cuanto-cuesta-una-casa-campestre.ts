import type { Post } from '@/lib/types'
import { LO_QUE_NO_HAY_EN_EL_CAMPO } from './diagramas/costos'

/**
 * La pieza de costos del pilar de casa campestre.
 *
 * Tiene un vecino directo ya publicado —«Los diez errores más caros al
 * construir una casa campestre»— y la regla es no duplicarlo. Aquel artículo
 * habla de **errores de decisión**: comprar por debajo de la unidad agrícola
 * familiar, preguntarle a la autoridad equivocada, dejar el agua para el
 * final. Este habla de **estructura de costo**: qué renglones existen en el
 * campo que en la ciudad no, por qué se comportan como multiplicadores y no
 * como partidas, y por qué el metro cuadrado campestre es la cifra menos
 * comparable de todas. Donde se tocan, se enlaza.
 *
 * Igual que el artículo del metro cuadrado, no publica una tabla de $/m². No
 * existe fuente pública que la mida, y en vivienda campestre el problema es
 * peor: los renglones que más pesan —acceso, acometidas, movimiento de tierras
 * y transporte a sitio— son función del predio concreto, no del área
 * construida. Un valor por metro cuadrado es una unidad que reparte mal
 * justamente lo que más pesa.
 *
 * Lo verificable aquí es normativo y está citado: que el agua propia exige
 * concesión y que el vertimiento exige permiso, ambos ante la corporación
 * autónoma regional (Decreto 1076 de 2015); que la licencia y sus modalidades
 * salen del Decreto 1077 de 2015; que el estudio geotécnico tiene firmante
 * calificado por la Ley 400 de 1997; y, la pieza más útil del artículo, lo que
 * el Título H de la NSR-10 exige en ladera —H.5.2.1 obliga a análisis de
 * estabilidad con asesoría de geólogo y a diseñar las obras de estabilización
 * aunque la casa solo esté al borde o al pie del talud, y H.7.1.3 considera
 * relevantes los efectos topográficos desde el 10 % de pendiente—. Tres
 * partidas que jamás aparecen en un presupuesto inicial. Lo demás va como
 * criterio de oficio y declarado como tal.
 *
 * Fechado en junio de 2026, después del artículo del metro cuadrado, que es su
 * pieza matriz.
 */
export const post: Post = {
  slug: 'cuanto-cuesta-una-casa-campestre',
  titulo: 'Cuánto cuesta una casa campestre',
  pilar: 'casa-campestre',
  fecha: '2026-06-23',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'La casa cuesta parecido. Lo que no cuesta parecido es todo lo que en la ' +
    'ciudad ya estaba y aquí hay que construir: la vía, la energía, el agua, ' +
    'el tratamiento de las aguas residuales y el terreno mismo. Cinco ' +
    'renglones que no caben en un valor por metro cuadrado.',
  metaDescripcion:
    'Qué encarece de verdad una casa campestre frente a una urbana: acceso, ' +
    'acometidas, agua, saneamiento, pendiente y transporte a sitio.',
  puerta: 'proyecto-nuevo',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'costos', 'suelo-rural'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La pregunta llega casi siempre igual: «¿cuánto me sale el metro ' +
        'cuadrado de una casa de campo?». Y la respuesta honesta empieza por ' +
        'una incomodidad: **en vivienda campestre el metro cuadrado es la ' +
        'unidad que peor reparte el costo**, porque los renglones que más pesan ' +
        'no dependen del tamaño de la casa sino del predio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Llevar la energía hasta el lote cuesta lo mismo para una casa de 150 ' +
        'metros que para una de 400. El pozo cuesta lo que cuesta perforar ' +
        'hasta encontrar agua. La vía de acceso cuesta lo que mida. Dividir ' +
        'todo eso entre los metros construidos produce un número que se ' +
        'derrumba en cuanto cambia el área, y por eso dos presupuestos ' +
        'campestres del mismo $/m² pueden ser incomparables.',
    },
    {
      tipo: 'nota',
      texto:
        'Antes de seguir: por qué no hay una tabla de $/m² en Colombia, qué ' +
        'publica de verdad el DANE y qué entra y qué no entra en un costo de ' +
        'obra está en ' +
        '[cuánto cuesta construir por m² en Colombia](/blog/cuanto-cuesta-construir-por-m2-en-colombia). ' +
        'Todo eso aplica aquí y no lo repito. Este artículo es lo que se le ' +
        'suma encima cuando el lote está en el campo.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Lo que en la ciudad ya estaba, y aquí hay que construir',
    },
    {
      tipo: 'parrafo',
      texto:
        'En un lote urbano usted compra un predio con vía pavimentada al ' +
        'frente, con red eléctrica en el poste, con acueducto y con ' +
        'alcantarillado. Eso no es gratis: está pagado en el precio del lote y ' +
        'en las conexiones. Simplemente ya existe.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En el campo, no. Cada una de esas cuatro cosas es un proyecto con su ' +
        'diseño, su presupuesto, su plazo y, en dos casos, su trámite ' +
        'ambiental.',
    },
    {
      tipo: 'diagrama',
      svg: LO_QUE_NO_HAY_EN_EL_CAMPO,
      titulo: 'El inventario de lo que no existe todavía',
      pie:
        'Vía de acceso, acometida eléctrica con sus postes y su transformador, ' +
        'fuente de agua con tanque, sistema de tratamiento de aguas residuales ' +
        'y el corte del terreno donde se para la casa. El esquema no está a ' +
        'escala ni representa proporciones de costo: es el listado de lo que ' +
        'hay que presupuestar aparte.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'La vía de acceso, y la vía durante la obra' },
    {
      tipo: 'parrafo',
      texto:
        'Se presupuesta la vía terminada y se olvida la vía de obra, que es ' +
        'otra cosa. Durante la construcción por ahí entran mixers, volquetas y ' +
        'camiones cargados, y una vía que sirve para una camioneta no sirve ' +
        'para eso. Mantenerla transitable en invierno es una partida corriente ' +
        'de la obra, no una inversión inicial.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay además una pregunta jurídica previa que conviene resolver antes de ' +
        'firmar la compra: **por dónde entra**. Si el acceso es por predio ' +
        'ajeno, se necesita servidumbre constituida y registrada. Un acuerdo de ' +
        'palabra con el vecino no es un acceso.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'La energía' },
    {
      tipo: 'parrafo',
      texto:
        'Si la red del operador llega hasta la vía y el predio está cerca, es ' +
        'una acometida. Si no, hay que construir la extensión: postes, ' +
        'conductor, y con frecuencia un transformador propio. Es un diseño ' +
        'eléctrico que revisa y aprueba el operador de red, no una compra en ' +
        'ferretería.',
    },
    {
      tipo: 'nota',
      texto:
        'Es el renglón que con más frecuencia se descubre tarde, porque el ' +
        'vendedor del lote suele decir «la luz llega ahí» señalando un poste ' +
        'que está a trescientos metros. **La distancia hasta el poste ' +
        'existente, medida, es un dato de compra**, igual que el área o los ' +
        'linderos.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'El agua' },
    {
      tipo: 'parrafo',
      texto:
        'Sin acueducto veredal, el agua sale de una fuente propia: un pozo ' +
        'profundo, un aljibe, una captación superficial o la recolección de ' +
        'lluvia. Ninguna de las cuatro es solo una obra. **Usar agua de una ' +
        'fuente natural requiere concesión de aguas otorgada por la ' +
        'corporación autónoma regional**, que es una actuación administrativa ' +
        'con solicitud, visita y acto administrativo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y después del agua está el agua potable, que es otro renglón: tanque ' +
        'de almacenamiento, bombeo, filtración y desinfección. Una casa que ' +
        'depende de una fuente propia necesita un sistema, no una manguera.',
    },
    {
      tipo: 'nota',
      texto:
        'El costo de un pozo profundo es el ejemplo perfecto de lo que este ' +
        'artículo no puede darle: **depende de a qué profundidad hay agua en ' +
        'ese predio**, y eso no se sabe antes de perforar. Cualquiera que le ' +
        'dé un valor cerrado sin estudio hidrogeológico le está dando un deseo.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Las aguas residuales' },
    {
      tipo: 'parrafo',
      texto:
        'Sin alcantarillado, las aguas residuales se tratan en el predio y ' +
        'después se disponen. **El vertimiento requiere permiso de la ' +
        'corporación autónoma regional**, y el sistema de tratamiento se ' +
        'diseña: no es «un pozo séptico» genérico, sino un tren de tratamiento ' +
        'dimensionado para el número de habitantes y el terreno.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El detalle que encarece: el campo de infiltración depende de cómo ' +
        'absorbe ese suelo, y un suelo arcilloso o con nivel freático alto ' +
        'obliga a soluciones más caras. Otra vez el suelo decidiendo el ' +
        'presupuesto antes que el arquitecto.',
    },
    {
      tipo: 'nota',
      texto:
        'Los dos trámites ambientales —concesión y vertimiento— **son previos ' +
        'y no paralelos** cuando el expediente de licencia los exige. Cómo se ' +
        'encadenan con la licencia y por qué el trámite rural tarda el doble ' +
        'está en ' +
        '[licencia de construcción en suelo rural](/blog/licencia-de-construccion-en-suelo-rural).',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'El transporte a sitio no es una partida: es un multiplicador',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la diferencia estructural que más gente subestima. En la ' +
        'ciudad, el transporte está incorporado en el precio del material ' +
        'puesto en obra y pesa poco. En el campo, el transporte **se le suma a ' +
        'todo**: al concreto, al acero, al ladrillo, al agregado, a los ' +
        'acabados y a la basura que sale.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y tiene un umbral duro que decide el sistema constructivo: **hasta ' +
        'dónde llega un mixer**. Si el concreto premezclado no puede entrar, ' +
        'hay que mezclar en obra, lo que cambia el rendimiento, el control de ' +
        'calidad, los ensayos y el plazo. Esa sola pregunta puede reordenar el ' +
        'proyecto entero.',
    },
    {
      tipo: 'lista',
      items: [
        '**La distancia a la planta de concreto más cercana**, en tiempo de recorrido y no en kilómetros.',
        '**El radio de giro y la capacidad de carga de la vía**, que definen qué vehículo entra.',
        '**Dónde se almacena el material** en un predio sin bodega y sin vigilancia continua.',
        '**Qué pasa en invierno**, que en buena parte del país es medio año.',
      ],
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'El terreno: pendiente, cortes y contención',
    },
    {
      tipo: 'parrafo',
      texto:
        'El lote con la mejor vista casi siempre es el de más pendiente, y la ' +
        'pendiente se paga tres veces: en movimiento de tierras, en muros de ' +
        'contención y en cimentación.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El estudio geotécnico deja de ser un requisito de trámite y pasa a ser ' +
        'la pieza que decide el proyecto. Y en ladera el reglamento pide algo ' +
        'más que un estudio de suelos corriente:',
    },
    {
      tipo: 'cita',
      texto:
        'En edificaciones cuya implantación se proyecte realizar total o ' +
        'parcialmente sobre una ladera, o que se encuentren al borde o al pie ' +
        'de una de ellas, el ingeniero geotecnista junto con la asesoría de un ' +
        'geólogo o ingeniero geólogo, debe realizar un análisis de estabilidad ' +
        'de los taludes que representen una amenaza para la edificación y ' +
        'diseñar las obras y medidas necesarias para lograr un nivel de ' +
        'estabilidad aceptable.',
      fuente: 'NSR-10, Título H, sección H.5.2.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ahí hay tres cosas que valen plata y que casi nunca están en un ' +
        'presupuesto inicial. **Aplica también si la casa está al borde o al ' +
        'pie de la ladera**, no solo encima. **Obliga a sumar un geólogo** al ' +
        'equipo, además del geotecnista. Y no termina en un diagnóstico: ' +
        '**obliga a diseñar las obras de estabilización**, que después hay que ' +
        'construir.',
    },
    {
      tipo: 'nota',
      texto:
        'Hay además un umbral concreto que conviene tener a mano: el Título H ' +
        'considera relevantes los efectos topográficos **cuando la pendiente ' +
        'del terreno supera el 10 %**, y en ese caso exige análisis de ' +
        'respuesta dinámica con modelos numéricos en dos o tres dimensiones. ' +
        'Un diez por ciento es muy poca inclinación: buena parte de los lotes ' +
        'que se compran por la vista lo superan con holgura.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Sobre el estudio en sí, dos precisiones que ahorran discusiones. La ' +
        'obligación no depende del tamaño: los estudios geotécnicos ' +
        'definitivos son obligatorios para todas las edificaciones urbanas y ' +
        'suburbanas, de cualquier grupo de uso —y la vivienda campestre suele ' +
        'estar en suelo suburbano—. Y el número de sondeos y su profundidad ' +
        'tampoco los decide quien perfora: el reglamento fija un mínimo por ' +
        'categoría de la unidad de construcción, que para una casa de hasta ' +
        'tres niveles son **tres sondeos de al menos seis metros**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo firma un ingeniero civil matriculado, con posgrado en geotecnia o ' +
        'con más de cinco años de experiencia en diseño geotécnico de ' +
        'cimentaciones. Es un estudio con responsabilidad, no un ensayo de ' +
        'laboratorio.',
    },
    {
      tipo: 'nota',
      texto:
        'Un criterio de oficio, dicho como criterio y no como estadística: ' +
        '**en un predio en pendiente, la decisión de dónde se implanta la casa ' +
        'mueve el presupuesto más que la decisión de los acabados.** Moverla ' +
        'veinte metros puede ahorrar un muro de contención completo, y esa ' +
        'decisión se toma en el anteproyecto, con el estudio de suelos ya ' +
        'hecho, o no se toma nunca.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La obra remota cuesta distinto' },
    {
      tipo: 'parrafo',
      texto:
        'Una obra a hora y media de la ciudad no se administra como una obra ' +
        'urbana, y eso tiene costo aunque no aparezca en ningún capítulo ' +
        'constructivo.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Renglón', 'En la ciudad', 'En obra remota'],
      filas: [
        [
          '**Vigilancia**',
          'Turno nocturno, o ninguno',
          'Permanente: el material almacenado es lo más fácil de robar que hay en el predio',
        ],
        [
          '**Personal**',
          'Llega por su cuenta',
          'Transporte, y con frecuencia alojamiento y alimentación',
        ],
        [
          '**Almacenamiento**',
          'Se pide material dos veces por semana',
          'Se pide por lotes grandes: hay que tener dónde guardarlo y seco',
        ],
        [
          '**Supervisión**',
          'Visitas cortas y frecuentes',
          'Visitas largas y espaciadas, o residente en sitio',
        ],
        [
          '**Un error de obra**',
          'Se corrige al día siguiente',
          'Cuesta un viaje, y a veces una semana',
        ],
      ],
      nota:
        'Ninguna de estas líneas está en un valor por metro cuadrado, y todas ' +
        'se pagan. Es la misma lógica de las partidas olvidadas, agravada por ' +
        'la distancia.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La lista completa de lo que un presupuesto de obra deja por fuera ' +
        '—estudios, diseños, expensas, impuestos, conexiones, pólizas, ' +
        'imprevistos— está en ' +
        '[las doce partidas que todo el mundo olvida al presupuestar](/blog/doce-partidas-que-se-olvidan-al-presupuestar). ' +
        'En el campo todas siguen aplicando, y se les suman las cinco de este ' +
        'artículo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que este artículo no le va a dar' },
    {
      tipo: 'parrafo',
      texto:
        'No hay cifras aquí, y la ausencia es deliberada. Conviene decir ' +
        'exactamente por qué, renglón por renglón, porque «no hay datos» dicho ' +
        'en general suena a excusa:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Renglón', 'Por qué no se puede publicar un valor'],
      filas: [
        [
          'Costo por m² de la casa',
          'No existe fuente oficial ni gremial que publique pesos por metro cuadrado. El DANE publica índices de variación y lo declara expresamente en su ficha metodológica',
        ],
        [
          'Pozo profundo',
          'Depende de la profundidad a la que haya agua en ese predio, que se conoce perforando',
        ],
        [
          'Acometida eléctrica',
          'Depende de la distancia real a la red existente y de si hace falta transformador',
        ],
        [
          'Movimiento de tierras y contención',
          'Depende de la pendiente, del perfil del suelo y de dónde se implante la casa',
        ],
        [
          'Vía de acceso',
          'Depende de la longitud, del terreno y de si hay servidumbre',
        ],
        [
          'Tratamiento de aguas residuales',
          'Depende del número de habitantes, de la capacidad de infiltración del suelo y de lo que exija la autoridad ambiental en ese punto',
        ],
      ],
      nota:
        'Los cinco últimos no son secretos del gremio: son datos del predio. ' +
        'Se levantan en la etapa de anteproyecto, y ese es exactamente el ' +
        'trabajo que evita que el presupuesto se caiga después.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se acota antes de comprar el lote' },
    {
      tipo: 'parrafo',
      texto:
        'Casi todo el sobrecosto de una casa campestre se decide el día en que ' +
        'se firma la compra del predio, no el día en que se contrata la obra. ' +
        'Estas seis preguntas se responden antes, con documento y no con ' +
        'palabra:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿Por dónde entro, y ese acceso está constituido?** Si es por predio ajeno, servidumbre registrada.',
        '**¿A cuántos metros está la red eléctrica existente?** Medidos, no estimados.',
        '**¿De dónde va a salir el agua, y esa fuente tiene o puede tener concesión?**',
        '**¿A dónde van las aguas residuales, y esa disposición es viable en ese suelo?**',
        '**¿Qué dice el POT sobre ese predio?** Clasificación del suelo, categoría, usos y densidad. Antes de la escritura.',
        '**¿Entra un mixer?** Es una pregunta de logística que decide sistema constructivo y plazo.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Las cuatro primeras son costo. La quinta es lo que decide ' +
        'si el proyecto existe: qué puede construir y cuántas viviendas admite ' +
        'un predio rural está en ' +
        '[qué puedo construir en suelo rural](/blog/que-puedo-construir-en-suelo-rural), ' +
        'y la verificación completa antes de firmar, en ' +
        '[comprar lote: la verificación de doce puntos](/blog/comprar-lote-verificacion-antes-de-firmar).',
    },
    {
      tipo: 'nota',
      texto:
        'Y los errores de decisión que más plata cuestan en este tipo de ' +
        'proyecto —comprar por debajo de la unidad agrícola familiar, ' +
        'preguntarle a la autoridad equivocada, confundir un concepto de norma ' +
        'con un derecho— están en ' +
        '[los diez errores más caros al construir una casa campestre](/blog/diez-errores-mas-caros-casa-campestre). ' +
        'Este artículo es el costo; aquel es la decisión.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La respuesta corta' },
    {
      tipo: 'lista',
      items: [
        'La casa, por metro cuadrado construido, no cuesta radicalmente distinto que en la ciudad.',
        'Lo que cuesta distinto es todo lo demás: vía, energía, agua, saneamiento, movimiento de tierras y transporte.',
        'Esos renglones dependen del predio y no del área, así que un valor por metro cuadrado los reparte mal por construcción.',
        'Dos de ellos —el agua y el vertimiento— son trámites ambientales con plazo propio, no compras.',
        'Y casi todos se pueden acotar antes de firmar la escritura del lote, que es cuando todavía se pueden negociar.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'En Plano Base el presupuesto de una casa campestre no arranca por el ' +
        'metro cuadrado: arranca por el predio. Consulta de norma, acceso, ' +
        'acometidas, agua, vertimiento y estudio de suelos primero; ' +
        'anteproyecto después; cifra al final. En ese orden la cifra llega ' +
        'tarde, y por eso se sostiene.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las obligaciones citadas están tomadas del articulado vigente. Todo ' +
        'lo que va sin cifra va sin cifra a propósito: es información del ' +
        'predio, y este artículo no conoce el suyo.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Decreto 1076 de 2015, único reglamentario del sector ambiente: concesión de aguas y permiso de vertimiento',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
    {
      titulo:
        'Decreto 1077 de 2015, único reglamentario del sector vivienda, ciudad y territorio: licencias y sus modalidades',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo:
        'Ley 400 de 1997, artículos 26 a 29: firmantes de los diseños estructurales y de los estudios geotécnicos',
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
      titulo:
        'NSR-10, Título H, estudios geotécnicos: obligatoriedad (H.1.1.2), sondeos mínimos por categoría (tabla H.3.2-1), estabilidad de taludes en laderas (H.5.2) y efectos topográficos (H.7.1.3). Anexo del Decreto 926 de 2010',
      editor:
        'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://idrd.gov.co/sites/default/files/documentos/Construcciones/8titulo-h-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'Ficha metodológica del Índice de Costos de la Construcción de Edificaciones (ICOCED)',
      editor: 'Departamento Administrativo Nacional de Estadística (DANE)',
      url: 'https://www.dane.gov.co/files/investigaciones/fichas/precios-y-costos/FICHA-MET-ICOCED-FEB2022.pdf',
      fecha: '2022-02-20',
    },
  ],
}
