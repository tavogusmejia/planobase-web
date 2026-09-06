import type { Post } from '@/lib/types'
import { CUBIERTA } from './diagramas/humedad'

/**
 * Primero de los dos artículos de humedad. El eje es el mismo que el de
 * `humedad-en-muros-origen-antes-de-reparar` y es lo que los separa de todo lo
 * que se publica del tema: **casi toda reparación falla porque se repara el
 * síntoma sin diagnosticar el origen.**
 *
 * Aquí ese eje toma una forma concreta: de los cinco puntos por donde falla una
 * cubierta, cuatro son de diseño o de mantenimiento y solo el quinto es la
 * lámina. Sin embargo, el noventa por ciento de las cotizaciones que ve un
 * propietario proponen cambiar la lámina.
 *
 * Restricción de honestidad que condicionó el artículo entero: **no cita ni un
 * solo número de NTC.** El catálogo de ICONTEC no es consultable públicamente
 * —se renderiza por JavaScript y no hay listado en HTML plano—, así que no se
 * pudo leer literalmente el título de ninguna norma. Los números que circulan
 * por blogs no son comprobables contra fuente oficial, y repetirlos sería
 * exactamente el error que este blog viene a corregir. Tampoco se afirma nada
 * sobre los Títulos B, J o K de la NSR-10: el anexo técnico no se pudo leer.
 *
 * Lo técnico va, por tanto, rotulado como criterio del estudio. Lo jurídico sí
 * está verificado al texto, y trae el hallazgo que ordena la sección: **ninguna
 * de las tres fuentes de garantía dice «filtración».**
 */
export const post: Post = {
  slug: 'filtraciones-en-cubierta',
  titulo: 'Filtraciones en cubierta: por qué aparecen y qué se hace',
  pilar: 'patologias',
  fecha: '2025-04-25',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'De los cinco puntos por donde falla una cubierta, cuatro son de diseño o ' +
    'de mantenimiento y solo el quinto es el impermeabilizante. Casi todas ' +
    'las cotizaciones proponen cambiar el quinto. Por eso la gotera vuelve.',
  metaDescripcion:
    'Por qué se filtra una cubierta, en qué orden falla, cómo se encuentra el ' +
    'punto de entrada y quién responde por el daño.',
  puerta: 'diagnostico-de-edificaciones',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Casi todas las reparaciones de cubierta que he visto fallar ' +
        'fallaron por la misma razón: se repararon donde estaba la mancha. La ' +
        'mancha es el final del recorrido del agua, no el principio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y hay un sesgo de mercado que agrava el problema. Quien cotiza una ' +
        'cubierta suele vender impermeabilizante, así que la solución que ' +
        'propone es impermeabilizar. En la mayoría de los casos que he visto, ' +
        'el impermeabilizante no era el problema.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'El orden en que falla una cubierta',
    },
    {
      tipo: 'diagrama',
      svg: CUBIERTA,
      titulo: 'Los cinco puntos por donde entra el agua, en orden de frecuencia',
      pie:
        'Sección esquemática, no a escala. El orden es criterio del estudio a ' +
        'partir de obra propia, no una estadística publicada.',
    },
    {
      tipo: 'nota',
      texto:
        'Declaro de entrada de dónde sale ese orden: **es criterio de oficio, ' +
        'no una estadística.** No existe en Colombia una fuente pública que ' +
        'mida con qué frecuencia falla cada punto de una cubierta. Lo que ' +
        'sigue es lo que se repite en obra, dicho como lo que es.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Punto', 'Por qué falla', 'Qué lo delata'],
      filas: [
        [
          '**1 · Remate y encuentro con el muro**',
          'Es una transición: el plano horizontal se vuelve vertical y el material tiene que subir y quedar anclado arriba',
          'La mancha aparece en el borde del cielo raso, pegada al muro, no en el centro del cuarto',
        ],
        [
          '**2 · Pendiente y empozamiento**',
          'La pendiente ejecutada no es la del plano, o la losa flechó y creó una contrapendiente',
          'Queda un charco después de la lluvia y tarda días en irse. Se ve el cerco de suciedad',
        ],
        [
          '**3 · Desagüe obstruido**',
          'Hojas, tierra y arena. Y casi nunca hay rebosadero, así que el agua sube en vez de salir',
          'La cubierta entera se vuelve una piscina cuando llueve fuerte',
        ],
        [
          '**4 · Junta de dilatación**',
          'El edificio se mueve y la junta tiene que moverse con él. Un sellado rígido se rompe en la primera dilatación',
          'La gotera sigue una línea recta larga, no un punto',
        ],
        [
          '**5 · Perforación posterior**',
          'Alguien ancló un tanque, una antena, una baranda o un equipo, y taladró la impermeabilización',
          'La mancha aparece meses después de una obra menor en la terraza',
        ],
        [
          'La lámina o el manto',
          'Llega al final de su vida útil, o se aplicó sobre superficie sucia, húmeda o mal imprimada',
          'Ampollas, arrugas, bordes despegados, el material quebradizo al doblarlo',
        ],
      ],
      nota:
        'Los cinco primeros son de diseño, de ejecución o de mantenimiento. ' +
        'Solo el último es del material.',
    },

    { tipo: 'titulo', nivel: 3, texto: '1 · El remate: donde el agua sube por detrás' },
    {
      tipo: 'parrafo',
      texto:
        'El punto más frágil de cualquier cubierta plana no está en el plano ' +
        'horizontal: está donde ese plano se acaba. La impermeabilización ' +
        'tiene que subir por el muro o el antepecho una altura suficiente, ' +
        'quedar mecánicamente fijada arriba y rematada de modo que el agua que ' +
        'baje por el muro no pueda meterse por detrás de ella.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los tres modos de fallar son siempre los mismos. El material sube ' +
        'poco y el agua lo supera cuando se empoza. Sube pero no se fija, y se ' +
        'despega con el sol. O se fija y se sella con un producto que ' +
        'envejece antes que el resto y nadie vuelve a mirar.',
    },
    {
      tipo: 'nota',
      texto:
        'La señal de diagnóstico es fina y sirve: **si la mancha del cielo ' +
        'raso está pegada al muro y sigue su línea, mire el remate antes que ' +
        'nada.** Si está en el centro del vano, mire la lámina o una ' +
        'perforación. Es la primera bifurcación del diagnóstico y se decide ' +
        'desde abajo, sin subir.',
    },

    { tipo: 'titulo', nivel: 3, texto: '2 · Pendiente: el defecto que no se ve hasta que llueve' },
    {
      tipo: 'parrafo',
      texto:
        'Una cubierta plana no es plana. Tiene que tener pendiente hacia los ' +
        'desagües, y esa pendiente se ejecuta con un relleno que se llama ' +
        'torta de pendientes. Es una partida barata que se recorta cuando el ' +
        'presupuesto aprieta, y el recorte no se nota el día de la entrega.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay además un fenómeno que sorprende a los propietarios y no a los ' +
        'estructurales: **la losa flecha con el tiempo.** Una losa que quedó ' +
        'bien puede desarrollar una contrapendiente años después, por ' +
        'deformación diferida del concreto. La pendiente de diseño era ' +
        'correcta y aun así hoy hay un charco.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Por qué importa el charco, aunque la lámina esté sana: el agua ' +
        'quieta encuentra cualquier defecto que el agua que corre no ' +
        'encuentra, la radiación ultravioleta y el ciclo mojado-seco degradan ' +
        'el material mucho más rápido en la zona empozada, y el peso del agua ' +
        'acumulada carga la losa justo donde ya estaba flechando.',
    },
    {
      tipo: 'nota',
      texto:
        'Sobre pendientes mínimas no voy a darle un número, y quiero explicar ' +
        'por qué. Los valores que circulan se atribuyen a normas técnicas ' +
        'colombianas cuyo texto no pude verificar —ver más abajo—. Lo que sí ' +
        'se puede decir sin inventar nada: **la prueba no es el número, es el ' +
        'charco.** Si veinticuatro horas después de la lluvia queda agua ' +
        'quieta, la pendiente de esa zona no sirve, diga lo que diga el plano.',
    },

    { tipo: 'titulo', nivel: 3, texto: '3 · Desagües: la partida de mantenimiento que nadie ejecuta' },
    {
      tipo: 'parrafo',
      texto:
        'Es el problema más fácil de resolver y el más frecuente. Un desagüe ' +
        'de cubierta se llena de hojas, de tierra arrastrada y de arena de la ' +
        'propia degradación del acabado. Nadie lo mira porque está arriba.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que convierte una obstrucción en un daño mayor es la ausencia de ' +
        '**rebosadero**: una salida de emergencia por el antepecho, más alta ' +
        'que el desagüe normal y más baja que el borde. Sin ella, un desagüe ' +
        'tapado convierte la cubierta en un estanque, y entonces pasan dos ' +
        'cosas a la vez. El agua supera la altura del remate y entra por ' +
        'arriba de la impermeabilización, que es el punto por donde ninguna ' +
        'lámina protege. Y la carga de agua sobre la losa crece con cada ' +
        'centímetro.',
    },
    {
      tipo: 'nota',
      texto:
        'Criterio de oficio, dicho como tal: **una cubierta se revisa dos ' +
        'veces al año y siempre antes de la temporada de lluvias.** Es una ' +
        'hora de trabajo. No conozco ninguna partida de mantenimiento con ' +
        'mejor relación entre lo que cuesta y lo que evita.',
    },

    { tipo: 'titulo', nivel: 3, texto: '4 · Juntas: lo que se mueve tiene que poder moverse' },
    {
      tipo: 'parrafo',
      texto:
        'Una junta de dilatación existe porque el edificio cambia de tamaño ' +
        'con la temperatura. En cubierta el problema se agrava, porque es la ' +
        'superficie que más oscila: al mediodía el material puede estar ' +
        'muchísimo más caliente que el aire, y de madrugada mucho más frío.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La consecuencia práctica es la que casi siempre se ignora: **una ' +
        'junta no se sella, se resuelve.** Rellenarla con un material rígido ' +
        'garantiza que se rompa, casi siempre justo al lado del relleno. Es la ' +
        'misma lógica que hace inútil rellenar con mortero rígido una fisura ' +
        'que sigue viva, y que está explicada en ' +
        '[fisuras en muros](/blog/fisuras-en-muros).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cómo se reconoce desde abajo: la filtración de una junta produce una ' +
        'mancha **alargada y recta**, que puede cruzar varios ambientes ' +
        'siguiendo una línea. Una mancha redonda casi nunca es una junta.',
    },

    { tipo: 'titulo', nivel: 3, texto: '5 · Perforaciones: el daño que llega después de la obra' },
    {
      tipo: 'parrafo',
      texto:
        'Este es el que más rabia da, porque la cubierta estaba bien. Alguien ' +
        'sube a instalar un tanque, una antena, un calentador solar, una ' +
        'baranda o el anclaje de una línea de vida, y taladra. Cada anclaje es ' +
        'un agujero en la impermeabilización.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La pista temporal es inequívoca y hay que preguntarla siempre: si la ' +
        'gotera apareció en los meses siguientes a una obra menor en la ' +
        'terraza, no busque en otro lado. Y si el edificio está en garantía, ' +
        'una perforación posterior hecha por un tercero es exactamente el tipo ' +
        'de hecho que la deja sin efecto.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Y por último, la lámina',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando de verdad el problema es el material, suele ser por una de ' +
        'tres razones, y solo una tiene que ver con su calidad.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Llegó al final de su vida útil.** Todos los sistemas la tienen y ninguno es permanente. Un manto que se quiebra al doblarlo, un acabado que se pulveriza al pisarlo o una superficie que perdió su protección contra el sol están avisando.',
        '**Se aplicó mal.** Sobre superficie sucia, húmeda, sin imprimante o con traslapos insuficientes. Es la causa más común de un sistema nuevo que falla en el primer año, y se reconoce porque falla en los bordes y en los traslapos, no en el centro de los paños.',
        '**Es el sistema equivocado para ese uso.** Una cubierta transitable, una terraza con jardinera o una que soporta equipos no admite lo mismo que una cubierta a la que nadie sube.',
      ],
    },
    {
      tipo: 'tabla',
      cabeceras: ['Sistema', 'Dónde tiene sentido', 'Por dónde falla primero'],
      filas: [
        [
          'Manto asfáltico',
          'Cubiertas planas no transitables, y transitables con protección encima',
          'Traslapos y remates. El sol lo degrada si queda expuesto sin protección',
        ],
        [
          'Membrana sintética en lámina',
          'Superficies grandes y continuas',
          'Las uniones y los encuentros con elementos que la perforan',
        ],
        [
          'Impermeabilizante líquido',
          'Geometrías complicadas, muchos encuentros y perforaciones',
          'El espesor: se aplica menos del especificado y no se ve',
        ],
        [
          'Teja, en cubierta inclinada',
          'Pendientes altas, donde el agua no se detiene',
          'Traslapos insuficientes, y sobre todo los remates contra muros y las limahoyas',
        ],
      ],
      nota:
        'Criterio del estudio. No es una comparación de desempeño medida: es ' +
        'dónde se ha visto fallar cada uno.',
    },
    {
      tipo: 'nota',
      texto:
        'Una diferencia de fondo entre cubierta plana e inclinada que aclara ' +
        'muchas discusiones: **en una cubierta inclinada bien resuelta el agua ' +
        'no debería depender de un sello.** Depende de la pendiente y del ' +
        'traslapo, que son geometría. El sello es el respaldo. En una cubierta ' +
        'plana ocurre al revés, y por eso es menos indulgente con los errores.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Dónde aparece la mancha no es dónde entra el agua',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es la regla que más reparaciones inútiles evita. Entre el punto de ' +
        'entrada y el punto donde gotea, el agua recorre la cara superior de ' +
        'la losa, la busca una fisura o una perforación de instalación, y baja ' +
        'por donde encuentra. Ese recorrido puede tener varios metros y casi ' +
        'nunca es vertical.',
    },
    {
      tipo: 'parrafo',
      texto: 'Cómo se acota el punto de entrada, en orden de costo:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Preguntar cuándo aparece.** Si aparece con cualquier lluvia, es entrada directa. Si solo con lluvias largas y de viento, sospeche del remate o de la fachada. Si aparece sin que llueva, no es una filtración de cubierta y hay que buscar una fuga o condensación.',
        '**Mirar la forma de la mancha.** Pegada al muro, remate. Alargada y recta, junta. Redonda y aislada, lámina o perforación. Difusa y extendida, empozamiento.',
        '**Subir y mirar después de la lluvia**, no antes. El charco que queda es el dato. Sin lluvia reciente, se moja la zona con manguera por sectores y se espera.',
        '**Prueba de estanqueidad por zonas.** Se tapan los desagües, se inunda un sector acotado y se observa desde abajo. Es lenta, es la que de verdad prueba, y hay que hacerla con criterio: una losa cargada de agua es una losa cargada.',
        '**Termografía**, cuando el edificio es grande o el acceso es malo. Detecta diferencias de temperatura por humedad retenida. No ve agua: ve el efecto térmico del agua, y hay que saber leerla.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Si la cubierta tiene aislante entre la losa y la impermeabilización, ' +
        'el problema cambia de naturaleza. **El aislante mojado conduce el ' +
        'agua lateralmente y la retiene**, así que el punto de entrada puede ' +
        'quedar lejísimos de la gotera y la cubierta sigue goteando semanas ' +
        'después de la última lluvia. En esos casos, parchar es tirar la ' +
        'plata: hay que abrir y encontrar hasta dónde llegó el agua.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Por qué aquí no hay una norma que citar',
    },
    {
      tipo: 'parrafo',
      texto:
        'Habrá notado que hasta ahora no he citado ninguna norma técnica. No ' +
        'es un descuido y creo que merece explicación, porque es información ' +
        'útil por sí sola.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Busqué qué norma técnica colombiana aplica de verdad a la ' +
        'impermeabilización de cubiertas. **No pude leer literalmente el ' +
        'título de ninguna.** El catálogo del organismo que las emite no es ' +
        'consultable de forma pública y directa, y los números que circulan ' +
        'por internet vienen de listados de terceros que no se pueden ' +
        'comprobar contra la fuente.',
    },
    {
      tipo: 'nota',
      texto:
        'Así que no cito ninguno. **Publicar un número de norma que no he ' +
        'leído sería exactamente el error que este blog intenta corregir en ' +
        'otros.** Tampoco afirmo nada sobre lo que dicen los títulos de la ' +
        'norma sismo resistente respecto de cargas de agua empozada: es un ' +
        'documento cuyo anexo técnico no pude abrir, y suponer lo que dice ' +
        'sería inventarlo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí se puede afirmar, y es lo que gobierna en la práctica: **lo ' +
        'que manda en una cubierta es la especificación técnica del fabricante ' +
        'del sistema y la garantía escrita de quien lo aplica.** Ahí están el ' +
        'espesor, el imprimante, la preparación de la superficie, el traslapo, ' +
        'la altura del remate y las condiciones de aplicación. Y ahí es donde ' +
        'hay que exigir, porque es lo que se puede leer, comparar y reclamar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Tres cosas que conviene pedir por escrito antes de contratar: la ' +
        'ficha técnica del sistema completo —no del producto suelto—, la ' +
        'garantía con su plazo y sus exclusiones, y el registro fotográfico ' +
        'de la preparación de la superficie. La tercera es la que nadie pide y ' +
        'la que decide si el sistema va a durar.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Si el edificio es nuevo: qué cubre la garantía y qué no',
    },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay un hallazgo que cambia la conversación con el constructor, y ' +
        'sale de leer los tres textos completos en vez de repetir lo que se ' +
        'dice: **ninguna de las tres fuentes de garantía menciona la palabra ' +
        'filtración.**',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Fuente', 'Qué cubre exactamente', 'Cuánto dura'],
      filas: [
        [
          '**Código Civil, art. 2060 num. 3**',
          'Que el edificio **perezca o amenace ruina**, en todo o parte, por vicio de la construcción, del suelo o de los materiales',
          'Diez años desde la entrega',
        ],
        [
          '**Ley 1480 de 2011, art. 8**',
          '**La estabilidad de la obra.** Y aparte, los **acabados**',
          'Diez años la estabilidad; **un año** los acabados',
        ],
        [
          '**Ley 1796 de 2016, art. 8**',
          'Los perjuicios patrimoniales, cuando se presente alguna de las situaciones del num. 3 del art. 2060 del Código Civil',
          'Diez años desde la Certificación Técnica de Ocupación',
        ],
      ],
      nota:
        'La Ley 1796 no modificó el artículo 2060: lo remite. Y aplica a ' +
        'proyectos de cinco o más unidades habitacionales destinadas a ' +
        'terceros.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo despacio, porque la consecuencia es incómoda. **Una gotera no ' +
        'es, por sí sola, que el edificio perezca o amenace ruina.** Puede ' +
        'llegar a serlo si el agua corroe el refuerzo de la losa durante años ' +
        'o si compromete la estabilidad, pero eso hay que demostrarlo, no ' +
        'suponerlo. Y si se la trata como acabado, el plazo no es de diez ' +
        'años: es de uno.',
    },
    {
      tipo: 'nota',
      texto:
        'Digo lo que se puede sostener y no más: **si una filtración de ' +
        'cubierta está o no cubierta por la garantía decenal no se contesta ' +
        'leyendo la norma.** El texto no resuelve el caso corriente. Depende ' +
        'de qué se pruebe sobre el daño y de cómo lo califique un juez. ' +
        'Cualquiera que le asegure lo contrario, en un sentido o en el otro, ' +
        'está yendo más allá de lo que dicen los textos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un detalle del Código Civil que sí es tajante y casi nadie invoca: el ' +
        'recibo que otorga el dueño al terminar la obra **solo significa que ' +
        'la aprueba como exteriormente ajustada al plan y a las reglas del ' +
        'arte, y no exime al constructor** de esa responsabilidad. Haber ' +
        'firmado la entrega no cierra nada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cómo funciona la Certificación Técnica de Ocupación, desde cuándo ' +
        'corren los diez años y a qué proyectos alcanza está explicado en ' +
        '[fisuras en muros](/blog/fisuras-en-muros). No lo repito.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo práctico, en cualquier caso, es lo mismo: **documente desde el ' +
        'primer día.** Fecha de aparición, fotografías con referencia de ' +
        'lugar, correlación con las lluvias, y reclamación escrita con ' +
        'constancia de recibido. Sin eso, la discusión jurídica es teórica. Y ' +
        'antes de discutir, hace falta un diagnóstico que diga cuál de los ' +
        'cinco puntos falló, que es de lo que trata ' +
        '[cuándo un edificio necesita un estudio patológico](/blog/cuando-un-edificio-necesita-un-estudio-patologico).',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'En propiedad horizontal: quién paga la gotera',
    },
    {
      tipo: 'parrafo',
      texto:
        'La cubierta es **bien común esencial**. El artículo 3 de la Ley 675 ' +
        'de 2001 lo dice con esas palabras: son bienes comunes esenciales, ' +
        'entre otros, «las fachadas y los techos o losas que sirven de ' +
        'cubiertas a cualquier nivel». **Aunque el daño se vea dentro de su ' +
        'apartamento, el origen es de la copropiedad.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Pero hay un segundo régimen que casi nunca se aplica bien, y es ' +
        'justamente donde más goteras hay: la terraza.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El artículo 22 de la misma ley crea los **bienes comunes de uso ' +
        'exclusivo**, y nombra expresamente «terrazas, cubiertas, patios ' +
        'interiores y retiros» como asignables de manera exclusiva al ' +
        'propietario que por su localización pueda disfrutarlos. Siguen siendo ' +
        'bien común. Cambia quién los usa, y con eso cambia quién paga qué.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Qué es el gasto', 'Quién lo asume'],
      filas: [
        [
          'Deterioro causado **por culpa** de quien tiene el uso exclusivo',
          'Quien tiene el uso exclusivo',
        ],
        [
          '**Reparaciones locativas** por el desgaste del uso legítimo y el paso del tiempo',
          'Quien tiene el uso exclusivo',
        ],
        [
          '**Mejoras necesarias** que no caben en lo anterior',
          '**Expensas comunes** de la copropiedad',
        ],
        [
          'El daño del que deba responder el constructor',
          'El constructor',
        ],
      ],
      nota: 'Ley 675 de 2001, art. 23, numeral 3 y parágrafo 1.',
    },
    {
      tipo: 'nota',
      texto:
        'Ahí está la pelea real, y ahora tiene nombre: **la discusión no es ' +
        '«bien común o privado», es «reparación locativa o mejora ' +
        'necesaria».** Resellar una junta que se degradó por el sol después de ' +
        'años de uso normal y reconstruir una impermeabilización que nunca ' +
        'tuvo pendiente no son la misma categoría, aunque las dos se vean ' +
        'igual desde el apartamento de abajo. Un diagnóstico técnico serio es ' +
        'lo que zanja esa discusión, no la asamblea.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Qué autoriza la asamblea, con qué mayorías y qué se puede hacer sin ' +
        'pedirle permiso a nadie está en ' +
        '[reformar en propiedad horizontal](/blog/reformar-en-propiedad-horizontal).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué no hacer' },
    {
      tipo: 'lista',
      items: [
        '**Impermeabilizar encima sin diagnosticar.** Es la reparación más vendida y la que más veces falla. Si el problema era la pendiente, el desagüe o el remate, la capa nueva no cambia nada y además tapa la evidencia.',
        '**Reparar solo donde gotea.** El punto de entrada casi nunca está encima de la mancha.',
        '**Sellar una junta de dilatación con material rígido.** Se va a romper. La junta tiene que seguir moviéndose.',
        '**Aplicar sobre superficie húmeda.** Es la causa número uno de ampollas, y el material queda condenado desde el primer día.',
        '**Cambiar el sistema sin secar el aislante mojado.** El agua atrapada sigue ahí y sigue saliendo.',
        '**Anclar cualquier cosa en la cubierta sin resolver el paso.** Cada perforación es una filtración futura si no se remata.',
        '**Aceptar una garantía verbal.** Sin plazo escrito y sin exclusiones escritas, no hay garantía.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'En resumen' },
    {
      tipo: 'parrafo',
      texto:
        'Antes de pedir una cotización de impermeabilización, suba después de ' +
        'una lluvia y mire tres cosas: si queda agua quieta, si los desagües ' +
        'están libres y si hay rebosadero, y cómo está rematado el encuentro ' +
        'con los muros y antepechos. Esas tres respuestas explican la mayoría ' +
        'de las filtraciones que he visto.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y mire la forma de la mancha desde abajo antes de subir. Pegada al ' +
        'muro es remate. Alargada y recta es junta. Sin lluvia no es la ' +
        'cubierta, y entonces el problema es otro: eso es lo que trata ' +
        '[humedad en muros: distinguir el origen antes de reparar](/blog/humedad-en-muros-origen-antes-de-reparar).',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'administrador', 'patologia'],
  fuentes: [
    {
      titulo:
        'Código Civil colombiano, artículo 2060, sobre construcción de edificios por precio único',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_civil_pr063.html',
      fecha: null,
    },
    {
      titulo: 'Ley 675 de 2001, régimen de propiedad horizontal, artículos 3, 22 y 23',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0675_2001.html',
      fecha: '2001-08-03',
    },
    {
      titulo:
        'Ley 1480 de 2011, estatuto del consumidor, artículos 7 y 8: garantía legal de bienes inmuebles',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1480_2011.html',
      fecha: '2011-10-12',
    },
    {
      titulo:
        'Ley 1796 de 2016, protección al comprador de vivienda, artículos 8 y 9',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1796_2016.html',
      fecha: '2016-07-13',
    },
  ],
}
