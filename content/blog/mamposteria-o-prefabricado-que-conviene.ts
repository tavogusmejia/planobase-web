import type { Post } from '@/lib/types'
import { MURO_PORTANTE } from './diagramas/muros'

/**
 * La comparación honesta, sin vender ninguno de los dos sistemas. El artículo
 * existe porque la pregunta que llega al estudio —«¿mampostería o
 * prefabricado?»— está mal planteada: «prefabricado» no nombra un sistema
 * estructural sino un grado de industrialización, y dentro de la mampostería
 * hay siete sistemas distintos que el reglamento trata de siete maneras.
 *
 * El corazón del artículo es la pregunta que nadie contesta: qué pasa cuando
 * quiere tumbar un muro diez años después. Ahí la mampostería **estructural**
 * y la **no estructural** se comportan al revés de lo que la gente supone, y
 * el sistema más barato de construir es el que deja la planta congelada.
 *
 * Lo que este artículo trae, con reglamento leído:
 *
 * 1. **NSR-10, D.2.1:** los siete tipos de mampostería estructural, con la
 *    capacidad de disipación de energía que el reglamento le asigna a cada
 *    uno. La mampostería de muros diafragma **no se permite para
 *    edificaciones nuevas**, y eso está escrito en D.2.1.6.
 * 2. **Tabla A.3-1:** qué sistema se permite en qué zona de amenaza sísmica y
 *    hasta qué altura. La mampostería confinada queda limitada al grupo de uso
 *    I y a dos pisos en zona alta; la no reforzada solo se permite en zona baja
 *    con Aa menor o igual a 0,05, grupo I, uno y dos pisos.
 * 3. **Título E, E.1.1.1:** el alcance del título de casas de uno y dos pisos
 *    —mampostería confinada y bahareque encementado, grupo de uso I, programas
 *    de máximo 15 viviendas y menos de 3.000 m²—.
 * 4. **Título E, definiciones:** «Muros divisorios — Son muros que no llevan
 *    más carga que su peso propio, no cumplen ninguna función estructural».
 *    Es la definición que parte el artículo en dos.
 * 5. **Título F, capítulo F.4:** el reglamento sí cubre los perfiles de acero
 *    de lámina formada en frío, que es lo que en el mercado se llama steel
 *    framing. No es un sistema fuera de norma.
 * 6. **A.10.1.3.1:** el sistema estructural no sufre modificación cuando se
 *    hacen reparaciones y cambios menores que no afecten el sistema de
 *    resistencia sísmica ni la integridad estructural. Ese es el test.
 * 7. **Decreto 1077, arts. 2.2.6.1.1.7 y 2.2.6.1.1.10:** modificación y
 *    reforzamiento estructural como modalidades de licencia, y la definición
 *    de reparación locativa, que excluye expresamente afectar la estructura
 *    portante y la distribución interior.
 *
 * Lo que NO se publica, y se declara dentro del artículo:
 *
 * - **Ningún costo por metro cuadrado por sistema constructivo.** No hay
 *   fuente pública verificable, y `docs/PLAN-BLOG.md §6 ter` ya documenta que
 *   las cifras que circulan se contradicen por un factor de dos a tres.
 * - **Ningún plazo de obra por sistema.** Igual.
 * - **Ninguna NTC.** El catálogo de ICONTEC no es consultable.
 * - **Ningún dato de conductividad térmica ni de aislamiento acústico por
 *   material.** Se hablaría de memoria, y de memoria no se publica.
 *
 * Fechado en junio de 2026, en el hueco entre «Cuánto cuesta construir por m²»
 * y «Cuánto cuesta una casa campestre». Enlaza al artículo de reforzamiento
 * estructural, que ya trae la parte de zonas y de trámite.
 */
export const post: Post = {
  slug: 'mamposteria-o-prefabricado-que-conviene',
  titulo: 'Mampostería o prefabricado: qué conviene, y cuándo',
  pilar: 'casa-campestre',
  fecha: '2026-06-09',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    '«Prefabricado» no es un sistema, y dentro de la mampostería hay siete. La ' +
    'comparación honesta entre ellos, y la pregunta que nadie contesta: qué ' +
    'pasa cuando quiere tumbar un muro diez años después.',
  metaDescripcion:
    'Mampostería, industrializado en concreto, steel framing o madera: qué ' +
    'permite la NSR-10 en cada zona sísmica y qué sistema deja reformar la ' +
    'casa después.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La pregunta llega casi siempre igual: «¿le sale mejor en mampostería ' +
        'o en prefabricado?». Y está mal planteada, no por capricho técnico ' +
        'sino porque **«prefabricado» no nombra un sistema estructural**: ' +
        'nombra un grado de industrialización. Debajo de esa palabra caben ' +
        'cuatro cosas que se comportan distinto, cuestan distinto y se reforman ' +
        'distinto.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y del otro lado pasa lo mismo. «Mampostería» tampoco es una: el ' +
        'reglamento colombiano reconoce **siete tipos**, y los trata de siete ' +
        'maneras. Este artículo no vende ninguno. Ordena la comparación y ' +
        'termina en la pregunta que casi nadie hace a tiempo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué es «prefabricado» en Colombia' },
    {
      tipo: 'parrafo',
      texto:
        'En el mercado residencial colombiano, la palabra cubre al menos cuatro ' +
        'familias distintas, y ninguna de las cuatro es «prefabricado» a secas. ' +
        'Todas están en el reglamento; ninguna está fuera de norma.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Lo que le venden', 'Qué es en realidad', 'Dónde vive en el reglamento'],
      filas: [
        [
          '**Industrializado en concreto**',
          'Muros de concreto vaciados en obra con formaleta metálica, en un solo ciclo por piso. Es el sistema de la vivienda en serie',
          'Sistema de muros de carga de concreto, Tabla A.3-1, y Título C',
        ],
        [
          '**Mampostería estructural**',
          'El muro de bloque es la estructura. No hay columnas ni vigas aparte: la carga baja por el muro',
          'Título D, con siete variantes en el numeral D.2.1',
        ],
        [
          '**Mampostería confinada**',
          'Muro de bloque con columnetas y vigas de amarre fundidas alrededor. Es la casa colombiana de toda la vida',
          'Título D, capítulo D.10, y Título E para casas de uno y dos pisos',
        ],
        [
          '**Steel framing**',
          'Perfiles de acero de lámina formada en frío, con placas de recubrimiento a lado y lado',
          'Título F, capítulo F.4',
        ],
        [
          '**Madera**',
          'Paneles de cortante en muros ligeros de madera laminada',
          'Título G, y Tabla A.3-1',
        ],
        [
          '**Pórtico con muro de relleno**',
          'Columnas y vigas de concreto que llevan toda la carga, con muros de bloque que solo dividen',
          'Título C, y Título A para el sistema',
        ],
      ],
      nota:
        'La última fila no suele llamarse «prefabricada» ni «mampostería», y es ' +
        'justo la que decide el resto del artículo.',
    },
    {
      tipo: 'nota',
      texto:
        'Una precisión que evita una discusión estéril: **industrializado y ' +
        'prefabricado no son sinónimos**. Un muro de concreto vaciado en obra ' +
        'con formaleta industrial no se prefabricó en ninguna parte: se fundió ' +
        'ahí mismo, con un proceso repetitivo. Lo que se compra en esos ' +
        'sistemas es velocidad de ciclo, no piezas de fábrica.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La zona sísmica descarta varios antes de que usted elija' },
    {
      tipo: 'parrafo',
      texto:
        'Antes de comparar precios conviene saber que la lista de opciones no ' +
        'es la misma en todo el país. El reglamento asigna a cada sistema una ' +
        'capacidad de disipación de energía —especial, moderada o mínima— y ' +
        'después dice, zona por zona, cuál se permite y hasta qué altura. Estas ' +
        'son las filas que importan en vivienda.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Sistema de muros de carga', 'Zona alta', 'Zona intermedia', 'Zona baja'],
      filas: [
        ['Muros de concreto, capacidad especial', 'Sí, hasta 50 m', 'Sí, sin límite', 'Sí, sin límite'],
        ['Muros de concreto, capacidad moderada', 'No se permite', 'Sí, hasta 50 m', 'Sí, sin límite'],
        ['Mampostería reforzada con todas las celdas rellenas', 'Sí, hasta 50 m', 'Sí, sin límite', 'Sí, sin límite'],
        ['Mampostería de cavidad reforzada', 'Sí, hasta 45 m', 'Sí, hasta 60 m', 'Sí, sin límite'],
        ['Mampostería parcialmente reforzada', 'Grupo I, 2 pisos', 'Sí, hasta 12 m', 'Sí, hasta 18 m'],
        ['**Mampostería confinada**', '**Grupo I, 2 pisos**', 'Grupo I, hasta 12 m', 'Grupo I, hasta 18 m'],
        ['Mampostería no reforzada', 'No se permite', 'No se permite', 'Solo grupo I, 2 pisos'],
        ['Paneles de cortante de madera', 'Sí, hasta 6 m', 'Sí, hasta 9 m', 'Sí, hasta 12 m'],
      ],
      nota:
        'Tabla A.3-1 de la NSR-10. El grupo de uso I es el de las edificaciones ' +
        'de ocupación normal, la vivienda entre ellas. Y una nota de la propia ' +
        'tabla acota todavía más la mampostería no reforzada: solo en las ' +
        'regiones de zona baja donde Aa sea menor o igual a 0,05.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo con su municipio en la cabeza. **En zona de amenaza sísmica alta ' +
        '—que es donde están Cali, Jamundí, Palmira y Bucaramanga— la ' +
        'mampostería confinada, que es la casa colombiana estándar, está ' +
        'limitada a dos pisos.** No es una recomendación: es lo que dice la ' +
        'tabla. Si su proyecto son tres pisos en zona alta, la conversación ' +
        'sobre el sistema ya empezó, la haya tenido o no.',
    },
    {
      tipo: 'nota',
      texto:
        'Hay una variante que no es una opción y que se sigue construyendo: **la ' +
        'mampostería de muros diafragma —muros de bloque metidos dentro de un ' +
        'pórtico y trabajando con él— no se permite para edificaciones ' +
        'nuevas.** El reglamento la admite únicamente dentro del alcance del ' +
        'capítulo de edificaciones existentes, para evaluarlas o intervenirlas. ' +
        'Eso está escrito en el numeral D.2.1.6.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay un título del reglamento hecho a la medida de la casa pequeña. ' +
        'El Título E cubre viviendas de uno y dos pisos en mampostería ' +
        'confinada y en bahareque encementado, del grupo de uso I, dentro de ' +
        'programas de **máximo 15 viviendas y menos de 3.000 m² de área ' +
        'construida**. Fuera de esos límites, o con otro sistema, la casa se ' +
        'diseña por el camino largo, que es el del Título A.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Tiempo, costo, mantenimiento: lo que sí se puede decir' },
    {
      tipo: 'nota',
      texto:
        'Aquí va la declaración que este artículo tiene que hacer antes de la ' +
        'tabla: **no publico un costo por metro cuadrado por sistema, ni un ' +
        'plazo de obra por sistema.** Las cifras que circulan para lo primero ' +
        'se contradicen entre sí por un factor de dos a tres para la misma ' +
        'ciudad y el mismo año, y las de lo segundo no tienen fuente ' +
        'rastreable. Lo que sigue es comparación cualitativa y criterio ' +
        'profesional, declarado como tal.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Confinada o estructural', 'Industrializado en concreto', 'Steel framing o madera'],
      filas: [
        [
          '**Velocidad**',
          'Lenta y muy tolerante a los cambios sobre la marcha',
          'La más rápida, y solo si el proyecto se congela antes de empezar',
          'Rápida en montaje; lenta si los perfiles no llegan a tiempo',
        ],
        [
          '**Mano de obra**',
          'Disponible en cualquier municipio del país',
          'Cuadrillas especializadas en formaleta, y equipo de izaje',
          'Escasa fuera de las ciudades grandes',
        ],
        [
          '**Mantenimiento**',
          'Bajo, y las reparaciones las hace cualquiera',
          'Bajo, pero una fisura en muro de concreto es otra conversación',
          'Depende por completo de que la envolvente no deje pasar agua',
        ],
        [
          '**Comportamiento térmico**',
          'Masa alta: buena en clima seco con noche fresca, mala en clima húmedo',
          'Masa alta, con el mismo matiz',
          'Masa baja: responde rápido, y exige aislamiento resuelto',
        ],
        [
          '**Aislamiento acústico**',
          'Bueno por masa, y por eso mismo se da por hecho',
          'Bueno por masa',
          'Depende del relleno y del detalle de la unión, no del sistema',
        ],
        [
          '**Reforma posterior**',
          'La peor: el muro es la estructura',
          'La peor, y además monolítica',
          'Buena, si se sabe cuáles muros son portantes',
        ],
      ],
      nota:
        'Comparación cualitativa. Cada casilla depende del proyecto concreto, ' +
        'del municipio y de quién construya; no hay una fuente pública que ' +
        'permita convertirla en números.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La lectura que yo hago de esa tabla es corta: **los sistemas que ' +
        'ganan en velocidad pierden en flexibilidad, y no un poco.** Lo que se ' +
        'compra al industrializar es un ciclo repetitivo, y un ciclo ' +
        'repetitivo exige que el proyecto esté cerrado antes del primer vaciado. ' +
        'Ese es el negocio en un conjunto de doscientas casas iguales. En una ' +
        'casa sola, casi nunca lo es.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La pregunta que nadie contesta: tumbar un muro diez años después' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí es donde la comparación deja de ser académica. Nadie construye ' +
        'una casa pensando en la reforma, y casi todo el mundo la hace: llega ' +
        'un hijo, se va otro, la cocina cerrada deja de tener sentido, la ' +
        'terraza se vuelve estudio. La pregunta correcta al elegir sistema no ' +
        'es cuánto cuesta el metro cuadrado hoy. **Es qué se puede tumbar ' +
        'mañana.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y la respuesta depende de una sola cosa: **por dónde baja la carga**. ' +
        'El reglamento la define en dos líneas, en el título de casas de uno y ' +
        'dos pisos.',
    },
    {
      tipo: 'cita',
      texto:
        'Muros divisorios — Son muros que no llevan más carga que su peso ' +
        'propio, no cumplen ninguna función estructural.',
      fuente: 'NSR-10, Título E, definiciones',
    },
    {
      tipo: 'diagrama',
      svg: MURO_PORTANTE,
      titulo: 'El mismo muro, dos sistemas',
      pie:
        'Secciones esquemáticas, sin escala. Pañetadas y pintadas, las dos ' +
        'casas se ven iguales. Diagrama del estudio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y aquí está el punto que le da título a esta sección, porque va al ' +
        'revés de lo que casi todo el mundo supone. **En mampostería ' +
        'estructural y en industrializado de concreto, todos los muros ' +
        'importantes son estructura**: el sistema es barato y rápido ' +
        'precisamente porque eliminó las columnas y las vigas, y lo que eliminó ' +
        'es lo que le habría dado libertad después. **En un pórtico con muros ' +
        'de relleno pasa lo contrario**: cuesta más al principio y deja la ' +
        'planta abierta para siempre, porque la carga nunca pasó por los muros.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La mampostería confinada queda en la mitad, y es el caso más confuso ' +
        'de todos: un muro confinado por columnetas y vigas de amarre **sí** ' +
        'hace parte del sistema de resistencia sísmica, mientras que un muro ' +
        'divisorio de la misma casa, hecho con el mismo bloque, no hace nada. ' +
        'Pañetados y pintados, son idénticos. **Nadie puede distinguirlos ' +
        'mirando.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'El criterio para saber si la obra es menor o no es del propio ' +
        'reglamento, y es el que un ingeniero va a aplicar: se considera que el ' +
        'sistema estructural no sufre modificación cuando se hacen reparaciones ' +
        'y cambios menores **que no afecten el sistema de resistencia sísmica ' +
        'ni la integridad estructural** de la edificación. Todo el problema ' +
        'está en decidir si ese muro es parte de ese sistema, y eso no lo ' +
        'decide el propietario ni el maestro.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Y qué dice el trámite' },
    {
      tipo: 'parrafo',
      texto:
        'La consecuencia legal es tan clara como la técnica, y está en el ' +
        'decreto de licencias urbanísticas. Hay una modalidad llamada ' +
        '**modificación**, que es «la autorización para variar el diseño ' +
        'arquitectónico o estructural de una edificación existente, sin ' +
        'incrementar su área construida», y otra llamada **reforzamiento ' +
        'estructural**, para intervenir o reforzar la estructura y llevarla a ' +
        'niveles adecuados de seguridad sismo resistente.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y del otro lado está lo que no pide licencia. La definición de ' +
        'reparación locativa es explícita en lo que excluye, y por eso la cito ' +
        'entera.',
    },
    {
      tipo: 'cita',
      texto:
        'Se entiende por reparaciones o mejoras locativas aquellas obras que ' +
        'tienen como finalidad mantener el inmueble en las debidas condiciones ' +
        'de higiene y ornato sin afectar su estructura portante, su ' +
        'distribución interior, sus características funcionales, formales y/o ' +
        'volumétricas.',
      fuente: 'Decreto 1077 de 2015, artículo 2.2.6.1.1.10',
    },
    {
      tipo: 'nota',
      texto:
        'Fíjese en dónde está la frontera, porque casi todo el mundo la pone ' +
        'mal. **No está en «si toca redes»** —la sustitución, mejoramiento o ' +
        'ampliación de redes hidráulicas, sanitarias, eléctricas, telefónicas o ' +
        'de gas está expresamente dentro de las reparaciones locativas—. Está ' +
        'en **la estructura portante y la distribución interior**. Tumbar un ' +
        'muro cambia la distribución interior aunque el muro no sostenga nada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Traducido a la vida real: quitar un muro divisorio en un pórtico es ' +
        'una obra de modificación, con proyecto y licencia, pero sin cálculo ' +
        'estructural mayor. Quitar un muro portante en mampostería estructural ' +
        'o en un sistema industrializado es intervenir la estructura, y eso ' +
        'exige diseño estructural, ingeniero que responda y la modalidad de ' +
        'licencia que corresponda. El tema tiene su propio artículo: ' +
        '[reforzamiento estructural, qué exige la norma y qué cuesta el ' +
        'trámite](/blog/reforzamiento-estructural-y-nsr-10).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo elegir, en el orden correcto' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Empiece por la zona de amenaza sísmica de su municipio, no por el precio.** La tabla de sistemas ya descartó opciones antes de que usted mirara la primera cotización.',
        '**Pregúntese cuántas casas va a construir.** El industrializado gana cuando el proyecto se repite. En una casa sola, la ventaja de ciclo casi nunca compensa el costo de la formaleta ni la rigidez del diseño.',
        '**Decida si la planta va a cambiar.** Si la respuesta es «probablemente», el pórtico con muros de relleno vale lo que cuesta de más. Si la casa es definitiva, la mampostería estructural es difícil de superar.',
        '**Mire el clima antes que el catálogo.** Masa alta donde la noche refresca; envolvente liviana y ventilada donde no. El sistema estructural y el comportamiento térmico se eligen en la misma conversación.',
        '**Pida el plano estructural con los muros portantes señalados, y guárdelo.** Es el documento que diez años después decide si la reforma es de dos semanas o de dos meses. Cuesta cero pedirlo hoy.',
        '**Compruebe que hay mano de obra en el municipio.** Un sistema excelente sin quien lo monte bien es un sistema malo.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La declaración final, la que este blog hace siempre que corresponde: ' +
        '**aquí no se cita ninguna norma técnica de ICONTEC por número.** Su ' +
        'catálogo no es consultable públicamente y no pude leer el texto de ' +
        'ninguna, así que no repito números que circulan sin fuente. Todo lo ' +
        'normativo de este artículo sale de la NSR-10 y del Decreto 1077 de ' +
        '2015, leídos en su texto.',
    },
    {
      tipo: 'parrafo',
      texto:
        'No hay un sistema mejor. Hay uno mejor para su lote, su municipio, su ' +
        'número de casas y su tolerancia a que la planta quede fija. Si lo que ' +
        'está armando es el presupuesto, siga en [cuánto cuesta construir por ' +
        'metro cuadrado](/blog/cuanto-cuesta-construir-por-m2-en-colombia); si ' +
        'lo que está armando es una casa en el campo, en [cuánto cuesta una ' +
        'casa campestre](/blog/cuanto-cuesta-una-casa-campestre).',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'estructura', 'costos'],
  fuentes: [
    {
      titulo:
        'NSR-10, Título D, mampostería estructural: clasificación de los siete tipos y usos permitidos',
      editor: 'Asociación Colombiana de Ingeniería Sísmica · Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://idrd.gov.co/sites/default/files/documentos/Construcciones/4titulo-d-nsr-100.pdf',
      fecha: '2010-03-19',
    },
    {
      titulo:
        'NSR-10, Título A, requisitos generales: sistemas estructurales permitidos por zona de amenaza sísmica, Tabla A.3-1, y evaluación de edificaciones existentes, capítulo A.10',
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
    {
      titulo:
        'Decreto 1077 de 2015, artículos 2.2.6.1.1.7 y 2.2.6.1.1.10: modalidades de la licencia de construcción y reparaciones locativas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
  ],
}
