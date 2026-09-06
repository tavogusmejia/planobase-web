import type { Post } from '@/lib/types'
import { ANATOMIA_DEL_M2, INDICE_NO_ES_PRECIO } from './diagramas/costos'

/**
 * La pieza más buscada del pilar de costos, y la más fácil de arruinar.
 *
 * Todo el internet colombiano publica tablas de $/m² sin metodología: no dicen
 * si incluyen lote, diseños, licencias, acabados ni IVA, no dicen de qué mes
 * son, y se contradicen entre sí por un factor de dos o tres para la misma
 * ciudad y el mismo año (`docs/PLAN-BLOG.md §6 ter`). Sumar una tabla más a ese
 * ruido no construye autoridad.
 *
 * La decisión editorial, entonces, es la contraria: **el artículo no da la
 * cifra, explica por qué no existe y qué sí existe**. Y lo que sí existe está
 * verificado en la fuente primaria, no en notas de prensa que la citan:
 *
 * - El DANE publica **índices**, no precios. Y lo dice él mismo, con todas las
 *   letras, en la ficha metodológica del ICOCED: el índice «no tiene por
 *   objetivo inferir los niveles de precio (valores) de los bienes y servicios
 *   incluidos en la canasta de seguimiento o determinar el monto total del
 *   costo de la construcción». Esa frase es la columna vertebral del artículo.
 * - Camacol **no publica costos absolutos en $/m² en ninguna parte**. Toda
 *   tabla que se le atribuya es falsa o no rastreable.
 * - Los dominios geográficos del ICOCED —Bogotá-Cundinamarca AR, Valle de
 *   Aburrá, Barranquilla AM, Cali AU— coinciden casi exactamente con el mapa
 *   de mercado del estudio, y su composición municipal está publicada en el pie
 *   del boletín. Nadie la usa.
 * - Y el matiz que casi nadie hace, porque exige haber leído el boletín: los
 *   resultados por dominio son **variaciones**, no niveles. Que Cali AU tenga
 *   la variación anual más baja del país no significa que construir allí sea
 *   más barato; significa que sus precios se movieron menos.
 *
 * Las cifras van con boletín, mes y fecha de publicación, y ninguna es de un
 * documento posterior a la fecha del artículo. Los dos únicos números que no
 * salen de un boletín —el peso del bloque de preinversión y el orden de
 * magnitud de un ajuste por sitio— van declarados como criterio propio del
 * estudio, y así están rotulados en el texto.
 *
 * Fechado en mayo de 2026, sobre el boletín de marzo de 2026, publicado el 30
 * de abril.
 */
export const post: Post = {
  slug: 'cuanto-cuesta-construir-por-m2-en-colombia',
  titulo: 'Cuánto cuesta construir por m² en Colombia',
  pilar: 'costos',
  fecha: '2026-06-07',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'No hay una cifra, y quien se la dé sin decirle qué incluye y de qué mes ' +
    'es, se la está inventando. Lo que sí existe: qué mide de verdad el índice ' +
    'del DANE, qué entra y qué no entra en un costo de obra, y por qué el ' +
    'mismo metro cuadrado no vale igual en Bogotá, Medellín, Barranquilla y ' +
    'Cali.',
  metaDescripcion:
    'Por qué no existe un costo por m² oficial en Colombia, qué publica ' +
    'realmente el DANE, y cómo pedir una cifra que sí sirva para decidir.',
  puerta: 'proyecto-nuevo',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'costos', 'bogota', 'medellin'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La pregunta es legítima y la respuesta honesta es incómoda: **no ' +
        'existe un costo por metro cuadrado publicado por ninguna autoridad ' +
        'colombiana**. Ni el DANE, ni Camacol, ni el Ministerio de Vivienda ' +
        'publican cuántos pesos vale construir un metro cuadrado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las tablas que circulan sí existen, y ese es el problema. Se copian ' +
        'entre sitios, no dicen si incluyen el lote, los diseños, las licencias ' +
        'o los acabados, no dicen de qué mes son, y para la misma ciudad y el ' +
        'mismo año se contradicen entre sí por un factor de dos o de tres. Una ' +
        'cifra que se puede duplicar según quién la publique no es un dato: es ' +
        'ruido con formato de dato.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Este artículo no le va a dar una tabla más. Le va a dar lo otro, que ' +
        'es lo que de verdad sirve para decidir: qué está preguntando en ' +
        'realidad, qué mide lo único oficial que hay, qué entra y qué no entra ' +
        'en un costo de obra, por qué un metro cuadrado no vale igual en Bogotá ' +
        'que en Barranquilla, y cómo se pide una cifra de forma que la ' +
        'respuesta sea comparable.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Primero: hay cuatro cifras distintas que se llaman igual',
    },
    {
      tipo: 'parrafo',
      texto:
        'Buena parte de la confusión no es de mala fe. Es que cuatro números ' +
        'muy distintos se dicen con las mismas cuatro palabras, y quien ' +
        'pregunta y quien responde casi nunca están hablando del mismo.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué es', 'Qué incluye', 'Para qué sirve'],
      filas: [
        [
          '**Costo de obra**',
          'Materiales, mano de obra, equipo y transporte de lo que se levanta en el lote',
          'Contratar y controlar la construcción',
        ],
        [
          '**Costo de proyecto**',
          'El costo de obra más estudios, diseños, expensas, impuestos, conexiones, pólizas y el costo del tiempo',
          'Saber cuánta plata hay que tener',
        ],
        [
          '**Precio de venta**',
          'El costo de proyecto más el lote, la comercialización, la financiación y la utilidad del promotor',
          'Comparar contra un apartamento en venta',
        ],
        [
          '**Avalúo**',
          'Lo que un perito estima que vale el inmueble hoy en el mercado',
          'Crédito, sucesión, impuesto predial',
        ],
      ],
      nota:
        'El error más caro de esta lista es comparar un precio de venta con un ' +
        'costo de obra y concluir que le están cobrando de más. Son dos cosas ' +
        'distintas y la diferencia entre ellas no es un sobreprecio.',
    },
    {
      tipo: 'nota',
      texto:
        'Cuando alguien le dice «el metro cuadrado está en tanto», la primera ' +
        'pregunta no es cuánto. Es **cuál de las cuatro**.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué publica el DANE de verdad' },
    {
      tipo: 'parrafo',
      texto:
        'El DANE mide el sector de la construcción con varias operaciones ' +
        'estadísticas, y todas son útiles. Ninguna publica pesos por metro ' +
        'cuadrado de costo de obra.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Operación', 'Qué mide', 'En qué unidad'],
      filas: [
        [
          '**ICOCED**, Índice de Costos de la Construcción de Edificaciones',
          'Cuánto cambiaron los precios de una canasta de insumos de construcción',
          'Número índice y variación porcentual, mensual',
        ],
        [
          '**ICOCIV**, el equivalente para obras civiles',
          'Lo mismo, para infraestructura y no para edificaciones',
          'Número índice y variación porcentual',
        ],
        [
          '**IPVN**, Índice de Precios de Vivienda Nueva',
          'Cuánto cambió el **precio de venta** de la vivienda nueva',
          'Variación porcentual, trimestral',
        ],
        [
          '**ELIC**, Estadísticas de Licencias de Construcción',
          'Cuántos metros cuadrados se aprobaron para construir',
          'Metros cuadrados, mensual',
        ],
        [
          '**CEED**, Censo de Edificaciones',
          'Cuántos metros cuadrados hay efectivamente en proceso de obra',
          'Metros cuadrados, trimestral',
        ],
      ],
      nota:
        'Dos miden variación de precios, uno mide variación de precios de ' +
        'venta y dos miden área. Ninguno mide cuántos pesos cuesta un metro ' +
        'cuadrado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esto no es una interpretación nuestra. Lo dice el DANE, con todas las ' +
        'letras, en la ficha metodológica del propio índice:',
    },
    {
      tipo: 'cita',
      texto:
        'Teniendo en cuenta que la variable de interés en el indicador hace ' +
        'referencia a la variación del precio, el ICOCED no tiene por objetivo ' +
        'inferir los niveles de precio (valores) de los bienes y servicios ' +
        'incluidos en la canasta de seguimiento o determinar el monto total del ' +
        'costo de la construcción.',
      fuente: 'DANE, ficha metodológica del ICOCED, febrero de 2022',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es la frase más importante de este artículo y prácticamente nadie en ' +
        'el sector la cita. Un índice mide **la pendiente**, no **la altura**: ' +
        'dice cuánto se movieron los precios respecto de un periodo base —en el ' +
        'ICOCED, diciembre de 2021 igual a 100—, y no puede decir cuántos pesos ' +
        'vale nada.',
    },
    {
      tipo: 'diagrama',
      svg: INDICE_NO_ES_PRECIO,
      titulo: 'Un índice describe la pendiente, no la altura',
      pie:
        'A la izquierda, lo que el DANE mide y publica cada mes: la variación ' +
        'de los precios de una canasta de insumos. A la derecha, la pregunta ' +
        'del lector. No hay operación aritmética que lleve de lo uno a lo otro ' +
        'sin un valor de partida, y el valor de partida no lo publica nadie.',
    },
    {
      tipo: 'nota',
      texto:
        'Y sobre **Camacol**, que es a quien más se le atribuyen tablas de ' +
        '$/m²: el gremio publica indicadores de actividad edificadora ' +
        '—lanzamientos, ventas, iniciaciones— y análisis sectoriales. **No ' +
        'publica costos absolutos en pesos por metro cuadrado.** Si le muestran ' +
        'una tabla de $/m² «según Camacol», pida el documento. No va a ' +
        'aparecer.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Para qué sí sirve el índice: actualizar un presupuesto propio',
    },
    {
      tipo: 'parrafo',
      texto:
        'El ICOCED no le da un valor. Le da algo distinto y muy útil: **una ' +
        'forma de traer al presente un presupuesto que ya tiene**, hecho por ' +
        'alguien, con fecha. Eso es exactamente para lo que se diseñó un índice ' +
        'de costos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Se publica mensualmente, en la última semana del mes, con los ' +
        'resultados del mes anterior. Cubre 57 municipios agregados en 19 ' +
        'dominios geográficos, diez destinos constructivos y ocho grupos de ' +
        'costo. Reemplazó al antiguo ICCV a partir de la publicación de febrero ' +
        'de 2022.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y ahí aparece el hallazgo que cambia un presupuesto: **los grupos de ' +
        'costo no se mueven al mismo ritmo, y la diferencia no es pequeña.**',
    },
    {
      tipo: 'dato',
      valor: '14,16 % contra 6,33 %',
      etiqueta:
        'Variación anual de la mano de obra frente a la variación anual del ' +
        'índice total, en marzo de 2026. Quien actualiza un presupuesto entero ' +
        'con el índice total subestima la mano de obra por más del doble.',
      fuente: 'DANE, boletín técnico del ICOCED de marzo de 2026',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Grupo de costo', 'Variación anual, marzo de 2026'],
      filas: [
        ['Mano de obra', '14,16 %'],
        ['Equipo', '7,79 %'],
        ['Servicios generales de la construcción', '6,50 %'],
        ['**Índice total**', '**6,33 %**'],
      ],
      nota:
        'Son los tres grupos con mayor incremento en ese mes, contra el total. ' +
        'Cambian todos los meses: la tabla vale por lo que enseña, no como ' +
        'valor de referencia. Consulte el boletín del mes en que esté ' +
        'actualizando.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De ahí sale una regla práctica que casi nadie aplica: **no actualice ' +
        'el total, actualice por capítulos.** La mano de obra y los materiales ' +
        'se mueven distinto, y una casa unifamiliar —con menos repetición y ' +
        'menos industrialización que un edificio— carga más mano de obra en ' +
        'proporción. Es el mismo error que describimos en ' +
        '[los diez errores más caros al construir una casa campestre](/blog/diez-errores-mas-caros-casa-campestre), ' +
        'aquí con el boletín en la mano.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Por qué el mismo m² no cuesta lo mismo en Bogotá que en Barranquilla',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay cinco razones reales, y ninguna es que «en tal ciudad la gente ' +
        'cobra más». Todas se pueden verificar en el proyecto antes de firmar.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El transporte de los insumos.** El precio del cemento, del acero y del agregado en obra incluye llevarlos hasta allí. Un lote a hora y media de la planta de concreto no paga lo mismo que uno a quince minutos, y en el campo esa diferencia deja de ser marginal.',
        '**El precio local de la mano de obra.** Es el grupo de costo que más se mueve y el que más varía entre plazas, porque depende de cuánta obra simultánea haya compitiendo por las mismas cuadrillas.',
        '**El clima y el piso térmico.** Determinan la cubierta, la ventilación, el aislamiento y si hay o no aire acondicionado. Una casa en Barranquilla y una en la sabana de Bogotá no resuelven el mismo problema, y la envolvente es una partida grande.',
        '**El suelo, que decide la cimentación.** Es la partida más cara que no se ve. Un suelo blando, un nivel freático alto o un lleno de origen desconocido pueden multiplicar la cimentación, y eso se sabe con el estudio geotécnico, no con la intuición.',
        '**La exigencia sísmica de la zona.** El reglamento no le pide lo mismo a una edificación en zona de amenaza sísmica alta que a una en zona baja, y esa diferencia se paga en acero, en concreto y en detallado.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Sobre lo último conviene ser preciso, porque circula muy mal contado. ' +
        'La zona de amenaza sísmica no es una opinión ni un criterio del ' +
        'diseñador: **está asignada municipio por municipio en el reglamento ' +
        'vigente**, con dos coeficientes —Aa y Av— publicados en el apéndice ' +
        'A-4 de la NSR-10. Quien firma la estructura la aplica; no se negocia.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Ciudad', 'Aa', 'Av', 'Zona de amenaza sísmica'],
      filas: [
        ['Barranquilla', '0,10', '0,10', 'Baja'],
        ['Cartagena', '0,10', '0,10', 'Baja'],
        ['Bogotá D.C.', '0,15', '0,20', 'Intermedia'],
        ['Medellín', '0,15', '0,20', 'Intermedia'],
        ['Cali', '0,25', '0,25', 'Alta'],
        ['Bucaramanga', '0,25', '0,25', 'Alta'],
      ],
      nota:
        'El propio reglamento define los tres tramos: zona baja cuando Aa y Av ' +
        'son ambos menores o iguales a 0,10; intermedia cuando alguno pasa de ' +
        '0,10 y ninguno de 0,20; alta cuando alguno supera 0,20. Para un ' +
        'municipio que no sea capital, el valor está en el apéndice A-4 y hay ' +
        'que buscarlo por código: Jamundí y Palmira, por ejemplo, también son ' +
        'zona alta.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y la consecuencia no es un ajuste fino, es una prohibición. Las tablas ' +
        'de sistemas estructurales del Título A dicen, para cada zona, qué ' +
        'grado de capacidad de disipación de energía se admite: **un pórtico de ' +
        'concreto de disipación moderada no se permite en zona de amenaza ' +
        'sísmica alta**, y uno de disipación mínima no se permite ni en alta ni ' +
        'en intermedia. Lo que en Barranquilla es una opción legal, en Cali no ' +
        'lo es.',
    },
    {
      tipo: 'nota',
      texto:
        'Que eso se traduzca en más dinero es una inferencia profesional ' +
        'nuestra, no algo que diga el reglamento: **la NSR-10 no menciona ' +
        'costos en ninguna parte.** Lo que sí dice, y es lo que aquí importa, ' +
        'es que la zona cambia el sistema estructural admitido y el detallado ' +
        'del refuerzo que hay que cumplir. Qué exige la norma cuando hay que ' +
        'intervenir una estructura existente está en ' +
        '[reforzamiento estructural y NSR-10](/blog/reforzamiento-estructural-y-nsr-10).',
    },
    {
      tipo: 'nota',
      texto:
        'Y el matiz que casi nadie hace, porque exige haber leído el boletín y ' +
        'no el titular: **los resultados del índice por ciudad son ' +
        'variaciones, no niveles.** Que un dominio geográfico registre la ' +
        'variación anual más baja del país no significa que construir allí sea ' +
        'más barato. Significa que sus precios se movieron menos ese año. ' +
        'Confundir las dos cosas es el error de lectura más común del sector.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Vale la pena saber, además, que los dominios del índice no son ' +
        'ciudades sueltas sino áreas. El boletín publica su composición ' +
        'municipal en el pie de página, y coincide con cómo funciona de verdad ' +
        'un mercado de construcción:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Dominio del ICOCED', 'Qué municipios lo componen'],
      filas: [
        [
          'Bogotá-Cundinamarca AR',
          'Bogotá, Cajicá, Chía, Cota, Facatativá, Funza, Fusagasugá, La Calera, Madrid, Mosquera, Soacha, Sopó y Zipaquirá',
        ],
        [
          'Valle de Aburrá',
          'Medellín, Barbosa, Bello, Caldas, Copacabana, Envigado, Girardota, Itagüí, La Estrella, Rionegro y Sabaneta',
        ],
        [
          'Barranquilla AM',
          'Barranquilla, Galapa, Malambo, Puerto Colombia y Soledad',
        ],
        ['Cali AU', 'Cali, Jamundí, Palmira y Yumbo'],
      ],
      nota:
        'El dominio de Medellín incluye a Rionegro, que es donde está el ' +
        'corredor de vivienda campestre del oriente antioqueño. Es el tipo de ' +
        'detalle que se pierde cuando se cita «el índice de Medellín».',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hay dentro de un costo por m², y qué no' },
    {
      tipo: 'parrafo',
      texto:
        'El DANE describe la construcción de una edificación por capítulos ' +
        'constructivos, y esa nomenclatura es una buena radiografía de qué está ' +
        'pagando cuando paga obra. Dentro de ellos están los preliminares; la ' +
        'excavación y la cimentación; la estructura y la cubierta; la ' +
        'mampostería y los pañetes; y los acabados, que el índice separa en ' +
        'tres tipos.',
    },
    {
      tipo: 'diagrama',
      svg: ANATOMIA_DEL_M2,
      titulo: 'Qué está adentro de un costo de obra y qué se paga aparte',
      pie:
        'Las bandas van iguales a propósito: el peso real de cada capítulo ' +
        'cambia con cada proyecto y no hay fuente pública que lo publique. ' +
        'Dibujarlas de alturas distintas insinuaría una proporción que nadie ' +
        'mide. Lo de la derecha se paga igual, y no está en ningún $/m².',
    },
    {
      tipo: 'parrafo',
      texto:
        'Dos consecuencias prácticas. La primera: **el capítulo de acabados es ' +
        'el que hace que dos casas del mismo tamaño cuesten muy distinto**, y ' +
        'es también el único que el cliente decide casi por completo. Un costo ' +
        'por metro cuadrado sin especificación de acabados no significa nada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La segunda: **el costo de obra excluye por definición el lote, los ' +
        'diseños, las licencias y los trámites**, y ese bloque se paga igual. ' +
        'Cuáles son, una por una, y por qué se olvidan, está en ' +
        '[las doce partidas que todo el mundo olvida al presupuestar](/blog/doce-partidas-que-se-olvidan-al-presupuestar). ' +
        'No las repito aquí.',
    },
    {
      tipo: 'nota',
      texto:
        'Ese bloque de preinversión puede sumar, en nuestra experiencia, del ' +
        'orden de una cuarta parte a un 40 % adicional sobre el costo de obra. ' +
        'Lo digo así, con «del orden de», porque **es un orden de magnitud ' +
        'propio del estudio y no una estadística publicada**: no existe fuente ' +
        'colombiana oficial ni gremial que lo mida. Lo verificable es la ' +
        'exclusión, no el porcentaje.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El IVA de la construcción no funciona como usted cree' },
    {
      tipo: 'parrafo',
      texto:
        'Es la parte que más discusiones resuelve en una reunión de contrato: ' +
        'casi nadie la tiene clara, y cambia por completo la comparación entre ' +
        'dos ofertas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En Colombia hay una regla específica para los contratos de ' +
        'construcción de bien inmueble, y está en el decreto único ' +
        'reglamentario en materia tributaria:',
    },
    {
      tipo: 'cita',
      texto:
        'En los contratos de construcción de bien inmueble, el impuesto sobre ' +
        'las ventas se genera sobre la parte de los ingresos correspondiente a ' +
        'los honorarios obtenidos por el constructor. Cuando no se pacten ' +
        'honorarios el impuesto se causará sobre la remuneración del servicio ' +
        'que corresponda a la utilidad del constructor.',
      fuente: 'Decreto 1625 de 2016, artículo 1.3.1.7.9',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es decir: **el IVA no se liquida sobre el valor total de la obra**, ' +
        'sino sobre los honorarios del constructor, o sobre su utilidad si no ' +
        'se pactaron honorarios. La norma viene del Decreto 1372 de 1992 y ' +
        'sigue aplicándose.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Pero tiene tres condiciones y una contrapartida, y las cuatro cosas ' +
        'importan:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El contrato tiene que señalar expresamente** cuál es la parte de honorarios o de utilidad. No es un cálculo que se haga después, en la factura.',
        '**Esa parte no puede ser inferior** a la que comercialmente corresponda a contratos iguales o similares. La norma cierra la puerta a declarar una utilidad simbólica.',
        '**Tiene que ser un contrato de construcción de bien inmueble**, y no todo lo que se parece lo es. El mantenimiento y la conservación no lo son, y eso cambia la base por completo.',
        '**Y la contrapartida:** el constructor **no puede descontar** el IVA que pagó por los materiales y demás costos de la obra. Solo descuenta el de los gastos ligados a sus honorarios.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La cuarta es la que explica por qué esto no es la ganga que parece. ' +
        'El IVA de los materiales **ya está adentro del precio que le ' +
        'cotizaron**, como mayor valor del costo de la obra: no desapareció, ' +
        'cambió de sitio. Lo que la regla evita es que se cobre IVA dos veces ' +
        'sobre lo mismo, no que la obra deje de soportar IVA.',
    },
    {
      tipo: 'titulo',
      nivel: 3,
      texto: 'Y el AIU no decide nada de esto',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay una confusión muy extendida entre dos cosas que se llaman igual. ' +
        'El **AIU** —administración, imprevistos y utilidad— es una estructura ' +
        'de precio de un presupuesto de obra: legítima, corriente y útil para ' +
        'comparar ofertas. Y existe además una **base gravable especial del ' +
        'AIU** en el Estatuto Tributario, que es otra cosa.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esa base especial, del artículo 462-1, aplica a los servicios ' +
        'integrales de aseo y cafetería, a la vigilancia autorizada por la ' +
        'Superintendencia de Vigilancia Privada, a los servicios temporales de ' +
        'empleo, a las cooperativas de trabajo asociado, a los contratos ' +
        'sindicales y al transporte de valores. **No menciona los contratos de ' +
        'construcción**, y por eso la administración tributaria ha sostenido ' +
        'que no les aplica.',
    },
    {
      tipo: 'nota',
      texto:
        'Consecuencia práctica: que un presupuesto diga «AIU 25 %» **no ' +
        'convierte ese 25 % en la base del IVA**. La base la fija lo que el ' +
        'contrato señale como honorarios o utilidad del constructor, con el ' +
        'piso comercial que exige la norma. Son dos siglas iguales para dos ' +
        'cosas distintas.',
    },
    {
      tipo: 'titulo',
      nivel: 3,
      texto: 'Los honorarios de diseño van por otro lado',
    },
    {
      tipo: 'parrafo',
      texto:
        'El diseño arquitectónico no es un contrato de construcción de bien ' +
        'inmueble: es un servicio profesional, y en un servicio la base ' +
        'gravable es el valor total de la operación, a la tarifa general del ' +
        '19 %. **El mismo profesional puede tener dos bases distintas según el ' +
        'objeto del contrato que firme**: la total cuando diseña, la especial ' +
        'cuando construye.',
    },
    {
      tipo: 'nota',
      texto:
        'Una precisión de método, porque prometí no publicar nada sin decir de ' +
        'dónde sale: que los servicios de arquitectura están gravados al 19 % ' +
        'lo verificamos **por ausencia** —no figuran en la lista de servicios ' +
        'excluidos del artículo 476 del Estatuto Tributario ni en la de ' +
        'servicios al 5 % del artículo 468-3—, no por una norma que los nombre. ' +
        'Es una conclusión sólida, pero conviene saber cómo está construida. ' +
        'Lo que sí está expreso es la tarifa general del 19 % del artículo 468.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y un umbral que a un profesional independiente le cambia la vida: ' +
        'quien no supera 3.500 UVT de ingresos brutos por su actividad —entre ' +
        'otras cinco condiciones que hay que cumplir todas— no es responsable ' +
        'de IVA. Pero **para celebrar un solo contrato gravado por cuantía ' +
        'igual o superior a 3.500 UVT hay que inscribirse previamente** como ' +
        'responsable, y lo mismo cuando varios contratos suman esa cifra. Es ' +
        'un requisito formal que el contratante debe exigir, y que aparece ' +
        'siempre tarde y siempre a mitad de la firma.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Cómo pedir un costo por m² que de verdad le sirva',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un valor por metro cuadrado sí existe: lo produce un profesional para ' +
        'un proyecto concreto, y es una estimación con supuestos declarados. ' +
        'Eso es legítimo y es lo que hacemos. Lo que no existe es la tabla ' +
        'nacional. Para que la estimación que le entreguen sea comparable con ' +
        'otra, tiene que traer estas seis cosas:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**La fecha de referencia de precios.** Sin ella no se puede actualizar ni discutir seis meses después.',
        '**El municipio**, no la región. El transporte y la mano de obra son locales.',
        '**El alcance**: si es costo de obra o costo de proyecto, y qué queda por fuera. La lista de exclusiones es la parte más útil y la que casi nunca está.',
        '**La especificación de acabados**, aunque sea por niveles. Es lo que más mueve la cifra.',
        '**La estructura de capítulos**, para poder comparar contra otra oferta partida igual.',
        '**Si incluye administración, imprevistos, utilidad e impuestos**, y en qué línea. Una oferta que los muestra siempre parece más cara que otra que los diluyó, y casi nunca lo es.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y una advertencia que se sostiene sola: **un costo por metro cuadrado ' +
        'estimado antes del estudio de suelos y antes de la consulta de norma ' +
        'es un supuesto, no un presupuesto.** El suelo decide la cimentación y ' +
        'la norma decide cuánto se puede construir. Sin esos dos datos, ' +
        'cualquier cifra es una apuesta bien intencionada.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La respuesta corta' },
    {
      tipo: 'lista',
      items: [
        'No hay una cifra oficial de $/m² en Colombia. Ni del DANE, ni de Camacol.',
        'Lo que hay son índices, que miden variación y no nivel, y estadísticas de área.',
        'El índice sirve para actualizar un presupuesto propio con fecha, y hay que aplicarlo por capítulos: la mano de obra sube bastante más rápido que el total.',
        'El costo de obra no incluye lote, diseños, licencias ni trámites, y ese bloque no es marginal.',
        'Un valor por metro cuadrado sin fecha, municipio, alcance y acabados no se puede comparar con nada.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'En Plano Base la cifra por metro cuadrado no es lo primero que ' +
        'entregamos: es lo último, y sale de la consulta de norma, del estudio ' +
        'de suelos y de un anteproyecto con áreas y especificaciones. Si tiene ' +
        'un lote, ese es el orden en que lo miramos, y en ese orden la cifra ' +
        'llega tarde pero llega bien.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las cifras citadas salen del boletín técnico del ICOCED de marzo de ' +
        '2026, publicado el 30 de abril de 2026, y de la ficha metodológica del ' +
        'índice. Cambian cada mes: consulte el boletín vigente antes de usar ' +
        'ninguna de ellas.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Ficha metodológica del Índice de Costos de la Construcción de Edificaciones (ICOCED)',
      editor: 'Departamento Administrativo Nacional de Estadística (DANE)',
      url: 'https://www.dane.gov.co/files/investigaciones/fichas/precios-y-costos/FICHA-MET-ICOCED-FEB2022.pdf',
      fecha: '2022-02-20',
    },
    {
      titulo:
        'Boletín técnico del ICOCED, marzo de 2026: variación anual total, por grupos de costo y por dominio geográfico',
      editor: 'Departamento Administrativo Nacional de Estadística (DANE)',
      url: 'https://www.dane.gov.co/files/operaciones/ICOCED/bol-ICOCED-mar2026.pdf',
      fecha: '2026-04-30',
    },
    {
      titulo:
        'Estadísticas por tema · Construcción: catálogo de operaciones estadísticas del sector (ICOCIV, IPVN, ELIC, CEED)',
      editor: 'Departamento Administrativo Nacional de Estadística (DANE)',
      url: 'https://www.dane.gov.co/index.php/estadisticas-por-tema/construccion',
      fecha: null,
    },
    {
      titulo:
        'Decreto 1077 de 2015, único reglamentario del sector vivienda, ciudad y territorio',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 926 de 2010, que adopta el Reglamento NSR-10',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39255',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'NSR-10, Título A: zonas de amenaza sísmica (A.2.3 y apéndice A-4) y sistemas estructurales admitidos por zona (tablas A.3-1 a A.3-4). Anexo del Decreto 926 de 2010',
      editor:
        'Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes',
      url: 'https://idrd.gov.co/sites/default/files/documentos/Construcciones/titulo-a-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'Decreto 1625 de 2016, artículo 1.3.1.7.9: impuesto sobre las ventas en los contratos de construcción de bien inmueble (compila el artículo 3 del Decreto 1372 de 1992)',
      editor: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1625_2016.htm#1.3.1.7.9',
      fecha: '2016-10-11',
    },
    {
      titulo:
        'Estatuto Tributario, artículos 437, 462-1, 468, 468-3, 476 y 447: responsables del IVA, base gravable especial del AIU, tarifa general, servicios excluidos y base gravable en servicios',
      editor: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm',
      fecha: '1989-03-30',
    },
    {
      titulo:
        'Concepto DIAN 003524 [int. 415] de 2025: la base gravable especial del AIU del artículo 462-1 no aplica a los contratos de construcción de bien inmueble',
      editor: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/oficio_dian_3524_2025.htm',
      fecha: '2025-03-25',
    },
  ],
}
