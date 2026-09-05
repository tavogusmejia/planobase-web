import type { Post } from '@/lib/types'
import { CORTE_Y_LLENO } from './diagramas/ladera'

/**
 * El artículo del lote barato que sale caro. La tesis: en una ladera el costo
 * no lo decide la arquitectura, lo decide el terreno, y las tres partidas que
 * lo deciden —estudio de suelos, obras de estabilización y contención con su
 * drenaje— casi nunca están en el presupuesto que le muestran al comprador.
 *
 * Lo que este artículo trae, con norma leída en el texto del reglamento:
 *
 * 1. **NSR-10, H.1.1.2:** los estudios geotécnicos definitivos son
 *    obligatorios para todas las edificaciones urbanas y suburbanas de
 *    cualquier grupo de uso. La frase se cita completa porque su segunda mitad
 *    —los terrenos no aptos para el uso urbano, y solo los grupos II, III y
 *    IV— es justo la parte que se recorta al citarla, y recortarla convierte
 *    una regla con contorno en una prohibición absoluta que no existe.
 * 2. **H.3.1.1 y H.3.2-1:** una casa es unidad de construcción de categoría
 *    baja —hasta tres niveles o cargas menores de 800 kN— y eso le fija un
 *    mínimo de tres sondeos de seis metros. Es el número que el artículo le
 *    pone al «pida estudio de suelos» que todo el mundo repite sin cifra.
 * 3. **H.5.2.1:** una edificación sobre, **al borde o al pie** de una ladera
 *    obliga a análisis de estabilidad con asesoría de geólogo y a **diseñar
 *    las obras** de estabilización. «Al pie» es la palabra que nadie lee.
 * 4. **H.4.1:** «En ningún caso puede apoyarse sobre la capa vegetal, rellenos
 *    sueltos, materiales degradables o inestables». Y a continuación admite el
 *    relleno artificial sin materiales degradables, debidamente compactado.
 *    Las dos mitades juntas son el corazón del artículo: el lleno no está
 *    prohibido, el lleno flojo sí.
 * 5. **H.6.5:** «Los muros de contención deberán siempre dotarse de un sistema
 *    de filtros y drenajes colocados atrás del muro». Es la única obligación
 *    del reglamento que se enuncia con la palabra «siempre», y es exactamente
 *    la que falta en los muros que fallan.
 * 6. **H.7.1.3(b):** con pendiente del terreno superior al 10 % los efectos
 *    topográficos son relevantes y exigen modelos numéricos 2D o 3D.
 * 7. **Tabla H.2.4-1:** factores de seguridad de taludes, 1,50 en condición
 *    estática de diseño y 1,05 en seudo-estática.
 *
 * Lo que NO se publica, y se declara dentro del artículo:
 *
 * - **Ninguna pendiente máxima de acceso vehicular.** No es materia del
 *   reglamento de sismo resistencia y la fija cada POT. No se pudo verificar
 *   una cifra nacional porque no existe.
 * - **La Resolución 0330 de 2017 (RAS).** Sigue sin poder leerse; no se cita
 *   ni una vez para el manejo de aguas lluvias.
 * - **Ninguna NTC.** El catálogo de ICONTEC no es consultable.
 * - **Ningún sobrecosto en porcentaje por construir en ladera.** Circula mucho
 *   y no tiene fuente.
 *
 * Enlaza a la licencia en suelo rural y a la casa campestre en vez de
 * repetirlos, y al artículo de agua para el manejo del agua que entra.
 *
 * Fechado en julio de 2026, después de «Cuánto cuesta una casa campestre», al
 * que remite para el presupuesto.
 */
export const post: Post = {
  slug: 'construir-en-lote-con-pendiente',
  titulo: 'Construir en un lote con pendiente: qué encarece de verdad la obra',
  pilar: 'casa-campestre',
  fecha: '2026-07-07',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'El lote en ladera se compra barato y se construye caro, y lo que encarece ' +
    'no es la arquitectura: es el suelo. Estudio geotécnico, corte y lleno, ' +
    'contención, drenaje y las tres partidas que nunca están en el presupuesto.',
  metaDescripcion:
    'Construir una casa en un lote con pendiente en Colombia: estudio de ' +
    'suelos, corte y lleno, muros de contención, drenaje y qué exige la NSR-10 ' +
    'en una ladera.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'El lote con pendiente casi siempre es el más barato del sector, y ' +
        'casi siempre tiene la mejor vista. Las dos cosas son ciertas y las dos ' +
        'están relacionadas: se vende barato porque construir ahí cuesta más, y ' +
        'quien lo compra suele enterarse de cuánto más el día que le entregan ' +
        'el presupuesto de obra.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que encarece una casa en ladera no es la arquitectura. **Es el ' +
        'terreno**, y son tres partidas que en el presupuesto que le mostraron ' +
        'al comprar el lote no estaban: el estudio geotécnico, las obras de ' +
        'estabilización y la contención con su drenaje. Ninguna de las tres es ' +
        'opcional, y las tres las nombra el reglamento con todas las letras.',
    },
    {
      tipo: 'nota',
      texto:
        'La regla que ordena el tema: **la NSR-10 no dice «ladera empinada», ' +
        'dice «sobre, al borde o al pie»**. El numeral H.5.2.1 obliga a un ' +
        'análisis de estabilidad, con asesoría de un geólogo, a la edificación ' +
        'que se implante total o parcialmente sobre una ladera **o que se ' +
        'encuentre al borde o al pie de una de ellas**. La casa de abajo, la ' +
        'que no tiene pendiente en su lote, también está incluida.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El estudio de suelos, y cuánto estudio exactamente' },
    {
      tipo: 'parrafo',
      texto:
        '«Pida estudio de suelos» es el consejo más repetido y el menos útil, ' +
        'porque nadie dice de qué tamaño. El Título H de la NSR-10, que es el ' +
        'de estudios geotécnicos, sí lo dice, y lo dice por tamaño de proyecto.',
    },
    {
      tipo: 'cita',
      texto:
        'Los estudios geotécnicos definitivos son obligatorios para todas las ' +
        'edificaciones urbanas y suburbanas de cualquier grupo de uso, y para ' +
        'las edificaciones en terrenos no aptos para el uso urbano de los ' +
        'grupos de uso II, III y IV definidos en el Título A de este ' +
        'Reglamento.',
      fuente: 'NSR-10, Título H, numeral H.1.1.2',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cito la frase entera a propósito, porque la segunda mitad se cae ' +
        'siempre que alguien la resume. En suelo urbano y suburbano el estudio ' +
        'es obligatorio para cualquier uso, casa incluida. Fuera de eso, la ' +
        'obligación que enuncia ese numeral alcanza a los grupos de uso II, III ' +
        'y IV —edificaciones de ocupación especial, de atención a la comunidad ' +
        'e indispensables—, y una vivienda unifamiliar es grupo I. **Eso no ' +
        'convierte el estudio en prescindible**: H.5.2.1 lo vuelve a exigir en ' +
        'cuanto hay ladera, y ningún diseñador estructural serio calcula una ' +
        'cimentación sin él.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El tamaño del estudio sale de clasificar el proyecto. El reglamento ' +
        'llama «unidad de construcción» a la edificación y la clasifica en ' +
        'cuatro categorías **según el número total de niveles y las cargas ' +
        'máximas de servicio en columnas**, tomando siempre la más desfavorable ' +
        'de las dos.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Categoría', 'Niveles', 'Carga máxima en columnas', 'Sondeos mínimos', 'Profundidad mínima'],
      filas: [
        ['**Baja**', 'Hasta 3', 'Menores de 800 kN', '3', '6 m'],
        ['Media', 'Entre 4 y 10', 'Entre 801 y 4.000 kN', '4', '15 m'],
        ['Alta', 'Entre 11 y 20', 'Entre 4.001 y 8.000 kN', '4', '25 m'],
        ['Especial', 'Más de 20', 'Mayores de 8.000 kN', '5', '30 m'],
      ],
      nota:
        'Tablas H.3.1-1 y H.3.2-1 de la NSR-10. Para contar niveles se incluyen ' +
        'todos los pisos, sótanos, terrazas y pisos técnicos. En cualquier caso ' +
        'el mínimo de sondeos de un estudio es tres, y al menos la mitad debe ' +
        'quedar dentro de la proyección de la construcción sobre el terreno.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una casa de dos pisos es **categoría baja**: tres sondeos y seis ' +
        'metros. Ese es el piso, no el techo. El mismo título aclara que ' +
        'cumplir el mínimo no exime al ingeniero de hacer los sondeos ' +
        'adicionales que su criterio exija, y que si no los hace debe dejar la ' +
        'recomendación escrita en el informe.',
    },
    {
      tipo: 'nota',
      texto:
        'Quién puede firmarlo tampoco es libre. El estudio debe ser dirigido y ' +
        'avalado por ingenieros civiles titulados y con tarjeta profesional ' +
        'vigente, y esos profesionales deben acreditar **más de cinco años de ' +
        'experiencia en diseño geotécnico de cimentaciones**, contados desde la ' +
        'tarjeta, o estudios de posgrado en geotecnia. Es un requisito ' +
        'verificable y casi nadie lo verifica.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay un umbral que conviene tener presente al comprar, porque decide ' +
        'la complejidad del estudio: **si la pendiente del terreno supera el ' +
        '10 %**, el reglamento considera que los efectos topográficos son ' +
        'relevantes y pide análisis de respuesta dinámica con modelos numéricos ' +
        'bidimensionales o tridimensionales. Un diez por ciento es una ' +
        'pendiente que a ojo casi no se nota.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El corte y el lleno: por qué el lleno es el enemigo' },
    {
      tipo: 'parrafo',
      texto:
        'Para poner una casa en una ladera hay que hacer una plataforma, y una ' +
        'plataforma se hace quitando tierra de un lado y poniéndola del otro. ' +
        'Al lado que se excava se le dice **corte**; al que se rellena, ' +
        '**lleno**. Cuando la obra termina y el piso está fundido, las dos ' +
        'mitades se ven exactamente iguales. No se comportan igual.',
    },
    {
      tipo: 'diagrama',
      svg: CORTE_Y_LLENO,
      titulo: 'Una plataforma, dos terrenos distintos',
      pie:
        'Sección esquemática, sin escala. La línea punteada bajo el lleno es el ' +
        'terreno original, que sigue estando ahí después de que la obra lo ' +
        'tapa. Diagrama del estudio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La razón es de una frase, y está en el capítulo de cimentaciones del ' +
        'mismo título.',
    },
    {
      tipo: 'cita',
      texto:
        'En ningún caso puede apoyarse sobre la capa vegetal, rellenos sueltos, ' +
        'materiales degradables o inestables, susceptibles de erosión, ' +
        'socavación, licuación o arrastre por aguas subterráneas. La cimentación ' +
        'se debe colocar sobre materiales que presenten propiedades mecánicas ' +
        'adecuadas en términos de resistencia y rigidez, o sobre rellenos ' +
        'artificiales, que no incluyan materiales degradables, debidamente ' +
        'compactados.',
      fuente: 'NSR-10, Título H, numeral H.4.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo completo, porque las dos mitades dicen cosas distintas. **El ' +
        'relleno no está prohibido: lo que está prohibido es el relleno ' +
        'suelto.** Un lleno de ingeniería —material seleccionado, sin materia ' +
        'orgánica, colocado por capas y compactado con control— es un apoyo ' +
        'legítimo. El montón de tierra que salió del corte, empujado con la ' +
        'retroexcavadora y aplanado a ojo, no lo es. Y a la vista son idénticos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El reglamento no lo deja al ojo. Para los rellenos cohesivos manda ' +
        'controlar la compactación por capas con la prueba Proctor estándar, ' +
        'vigilando espesor, contenido de agua y ritmo de colocación en altura; ' +
        'para los no cohesivos, el control se basa en compacidad relativa. **Un ' +
        'lleno sin ensayos de compactación no es un lleno: es tierra puesta.**',
    },
    {
      tipo: 'nota',
      texto:
        'Un detalle que cambia el presupuesto del estudio y que casi nadie ' +
        'anticipa: **cuando se construyen rellenos, la profundidad de los ' +
        'sondeos se cuenta desde el nivel original del terreno**, no desde el ' +
        'piso terminado. Y en excavaciones se cuenta desde el nivel inferior de ' +
        'la excavación. En una ladera eso significa perforaciones más largas que ' +
        'en un lote plano de la misma casa.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El muro de contención, y lo que de verdad falla' },
    {
      tipo: 'parrafo',
      texto:
        'Un muro de contención sostiene tierra, y la tierra que sostiene puede ' +
        'vencerlo de seis maneras distintas. El reglamento las enumera como ' +
        'estados límite de falla: rotura estructural, deformación, volteo, ' +
        'falla por capacidad de carga, **pérdida de apoyo por erosión del ' +
        'terreno**, deslizamiento horizontal de la base y, en su caso, la ' +
        'inestabilidad general del talud donde el muro está desplantado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De esas seis, la que se ve en obra casi siempre empieza por el agua. ' +
        'Un muro se diseña para el empuje de la tierra; si detrás se acumula ' +
        'agua, hay que sumarle el empuje del agua, y ese empuje crece rápido. ' +
        'Por eso el reglamento usa aquí una palabra que casi no usa en ninguna ' +
        'otra parte.',
    },
    {
      tipo: 'cita',
      texto:
        'Los empujes debidos al agua subterránea deben minimizarse en lo ' +
        'posible, mediante el empleo de obras adecuadas de drenaje y ' +
        'despresurización. […] Los muros de contención deberán siempre dotarse ' +
        'de un sistema de filtros y drenajes colocados atrás del muro.',
      fuente: 'NSR-10, Título H, numeral H.6.5',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Siempre.** Y el mismo numeral añade la advertencia que convierte el ' +
        'drenaje en una pieza de diseño y no en un tubo: los filtros deben ' +
        'proyectarse para no arrastrar material del relleno y para conducir el ' +
        'agua sin generar presiones significativas, y **aun con drenaje, el ' +
        'efecto de las fuerzas de filtración sobre el empuje puede ser ' +
        'significativo**.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Lo que falla', 'Por qué', 'Qué lo evita'],
      filas: [
        [
          '**El muro se voltea o se desplaza**',
          'Se diseñó para el empuje de tierra seca y detrás se acumuló agua',
          'Filtro y dren detrás del muro, con salida verificada y mantenida',
        ],
        [
          '**El dren se tapa**',
          'El filtro no retiene el material fino del relleno y se colmata en dos inviernos',
          'Un filtro diseñado por granulometría, no una piedra suelta detrás del muro',
        ],
        [
          '**El muro pierde el apoyo**',
          'El agua superficial erosiona el pie y socava la cimentación',
          'Manejo de escorrentía arriba del muro y protección del pie',
        ],
        [
          '**Se mueve todo el talud**',
          'El muro está bien y el terreno donde se apoya no',
          'Análisis de estabilidad global, que es otro cálculo distinto del muro',
        ],
        [
          '**Se agrieta la casa, no el muro**',
          'La estructura se apoyó en parte sobre corte y en parte sobre lleno',
          'Cimentación llevada a terreno firme en las dos mitades',
        ],
      ],
      nota:
        'Las causas salen de los estados límite de H.6.2.1 y de los requisitos ' +
        'de drenaje de H.6.5. Las columnas de la derecha son criterio ' +
        'profesional: el reglamento fija qué hay que verificar, no cómo se ' +
        'resuelve cada caso.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánto margen exige la norma' },
    {
      tipo: 'parrafo',
      texto:
        'Hay una pregunta que un propietario puede hacer y que separa a un ' +
        'informe serio de un informe de trámite: **con qué factor de seguridad ' +
        'quedó el talud**. El reglamento fija los mínimos y son estos.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Condición', 'Diseño', 'Construcción'],
      filas: [
        ['Carga muerta más carga viva normal', '1,50', '1,25'],
        ['Taludes, condición estática con agua subterránea normal', '1,50', '1,25'],
        ['Taludes, condición seudo-estática con coeficiente sísmico de diseño', '1,05', '1,00'],
      ],
      nota:
        'Factores de seguridad básicos mínimos directos, Tabla H.2.4-1 de la ' +
        'NSR-10. En ningún caso el factor mínimo puede ser inferior a 1,00.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un talud con factor 1,05 en condición sísmica no está «mal»: está en ' +
        'el mínimo que el reglamento admite, que es una cosa distinta de estar ' +
        'holgado. Saber en qué punto de esa banda quedó su lote es información ' +
        'que usted pagó y que tiene derecho a que le expliquen.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El acceso, y el agua que baja' },
    {
      tipo: 'parrafo',
      texto:
        'Dos asuntos que en la ladera pesan más que en cualquier otro lote y ' +
        'que no resuelve el reglamento de sismo resistencia.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El primero es el **acceso vehicular**. Una rampa larga en pendiente ' +
        'fuerte es una obra en sí misma: muros, drenaje, pavimento con acabado ' +
        'antideslizante y, a veces, más metros cuadrados de estructura que la ' +
        'propia casa. Y es lo primero que hay que resolver, porque sin acceso ' +
        'no entra ni la mezcladora.',
    },
    {
      tipo: 'nota',
      texto:
        'Aquí una declaración de honestidad: **no hay una pendiente máxima ' +
        'nacional de acceso vehicular** y por eso no doy ninguna cifra. No es ' +
        'materia del reglamento de construcción sismo resistente; la fija cada ' +
        'plan de ordenamiento territorial y su reglamentación, y varía por ' +
        'municipio. La pregunta correcta se le hace a la secretaría de ' +
        'planeación del municipio, por escrito y nombrando el predio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El segundo es la **escorrentía**. En una ladera el agua lluvia no se ' +
        'queda: baja, y baja por donde usted la deje bajar. La plataforma que ' +
        'usted construyó es una superficie impermeable nueva que concentra ' +
        'caudal, y si ese caudal termina descargando sobre el talud de lleno o ' +
        'sobre el vecino de abajo, el problema es suyo dos veces: técnico y ' +
        'legal. Cuneta de coronación arriba del corte, recolección en la ' +
        'plataforma y una entrega definida son partidas de obra, no detalles.',
    },
    {
      tipo: 'nota',
      texto:
        'Segunda declaración de honestidad, la misma que hace este blog cada ' +
        'vez que corresponde: **el reglamento técnico del sector de agua no lo ' +
        'pude leer.** El archivo que publica el Ministerio son páginas ' +
        'escaneadas sin capa de texto, así que no cito de él ni un número ni un ' +
        'parámetro para el manejo de aguas lluvias. Tampoco cito ninguna norma ' +
        'técnica de ICONTEC: su catálogo no es consultable públicamente.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las partidas que nunca están en la primera cuenta' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**El estudio geotécnico definitivo**, con su número de sondeos y su profundidad contados desde el terreno original y no desde el piso terminado.',
        '**El análisis de estabilidad del talud y el diseño de las obras de estabilización**, que H.5.2.1 exige y que es un trabajo distinto del estudio de cimentación.',
        '**Los muros de contención con su filtro y su dren**, presupuestados por metro cuadrado de muro y no por metro lineal de fachada.',
        '**El movimiento de tierra y el retiro del material sobrante**, que en ladera casi nunca se compensa dentro del propio lote.',
        '**El acceso vehicular completo**, incluida su estructura de contención y su drenaje.',
        '**El manejo de aguas de escorrentía**, con cuneta de coronación y entrega definida.',
        '**El acompañamiento del geotecnista en obra**, que el reglamento exige para las categorías media, alta y especial, y que en una ladera vale la pena contratar aunque la casa sea categoría baja.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna de estas siete aparece en el precio por metro cuadrado que ' +
        'circula, porque el precio por metro cuadrado es de la casa y estas son ' +
        'del terreno. Si está armando el presupuesto, la conversación sigue en ' +
        '[cuánto cuesta una casa ' +
        'campestre](/blog/cuanto-cuesta-una-casa-campestre). Si el lote es ' +
        'rural, el trámite tiene su propio calendario y está en [por qué la ' +
        'licencia en suelo rural tarda el ' +
        'doble](/blog/licencia-de-construccion-en-suelo-rural). Y el agua que ' +
        'entra —no la que baja— es otra conversación entera: [qué permiso ' +
        'necesita](/blog/agua-en-el-campo-que-permiso-necesita).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una ladera bien resuelta da la mejor casa del sector. Mal resuelta da ' +
        'la que se agrieta el tercer invierno. La diferencia entre las dos se ' +
        'decide antes de dibujar la planta, y cuesta menos de lo que cuesta ' +
        'repararla.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'suelo-rural', 'estructura'],
  fuentes: [
    {
      titulo:
        'NSR-10, Título H, estudios geotécnicos: obligatoriedad, categorías de unidad de construcción, número y profundidad de sondeos, cimentaciones, estabilidad de taludes y estructuras de contención',
      editor: 'Asociación Colombiana de Ingeniería Sísmica · Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://idrd.gov.co/sites/default/files/documentos/Construcciones/8titulo-h-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'NSR-10, Título A, requisitos generales de diseño y construcción sismo resistente',
      editor: 'Asociación Colombiana de Ingeniería Sísmica · Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://idrd.gov.co/sites/default/files/documentos/Construcciones/titulo-a-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo: 'Decretos modificatorios de la NSR-10',
      editor: 'Asociación Colombiana de Ingeniería Sísmica',
      url: 'https://asosismica.org.co/decretos-modificatorios-nsr-10/',
      fecha: null,
    },
  ],
}
