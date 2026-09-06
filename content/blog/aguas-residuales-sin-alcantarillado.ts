import type { Post } from '@/lib/types'
import { TREN_DE_TRATAMIENTO } from './diagramas/saneamiento'

/**
 * El artículo que estuvo bloqueado casi un año, y la razón por la que dejó de
 * estarlo.
 *
 * `agua-en-el-campo-que-permiso-necesita` declaró dentro de su texto que **el
 * reglamento técnico del sector no se pudo leer**: el PDF que publica
 * Minvivienda son páginas escaneadas sin capa de texto. `docs/PLAN-BLOG.md
 * §6 ter` lo anotó como cifra imposible de publicar. Por eso el artículo del
 * agua nombra las aguas residuales y se detiene ahí.
 *
 * **El bloqueo se levantó.** El texto íntegro de la Resolución 0330 de 2017,
 * con capa de texto y con las notas de vigencia artículo por artículo, está
 * publicado en el gestor normativo de la Comisión de Regulación de Agua
 * Potable y Saneamiento Básico. Es la misma casa editorial que sirve el gestor
 * de Función Pública y el de la Alcaldía de Bogotá, y es el mismo recurso que
 * ya se usó en el pilar de piscinas cuando el PDF oficial de una resolución
 * resultó ser un escaneo. De ahí salen los artículos 43, 134 y 171 a 183 que
 * cita esta pieza, y de ahí sale el rastro de reformas: la 0330 fue modificada
 * por la Resolución 799 de 2021 y corregida por la Resolución 908 de 2021, y
 * no se encontró nada posterior que la sustituya. Su página de normativa en
 * Minvivienda sigue marcándola como vigente.
 *
 * Lo que este artículo trae, con norma leída:
 *
 * 1. **La obligación es de todos, sin umbral.** El artículo 2.2.3.3.4.10 del
 *    Decreto 1076 alcanza a «toda edificación» fuera de la cobertura del
 *    alcantarillado y no fija caudal mínimo por debajo del cual no aplique.
 * 2. **El pozo séptico no existe solo.** El parágrafo 1 del artículo 173 de la
 *    0330 obliga a que, en sistemas individuales, el tanque vaya acompañado de
 *    trampa de grasas al inicio y filtro anaeróbico. Y el artículo 176 obliga
 *    a un tratamiento complementario después. Son cuatro unidades, no una.
 * 3. **La 0330 no fija ninguna distancia mínima entre el tanque séptico y el
 *    pozo de agua.** Se buscó la palabra «distancia» en todo el articulado: la
 *    única tabla de distancias mínimas es la Tabla 28, del artículo 183, y su
 *    propio título la limita a los sistemas **centralizados** —las PTAR
 *    municipales—. Lo que la norma sí dice sobre el pozo es el numeral 7 del
 *    artículo 173, y es una regla de posición, no de metros. Las cifras de
 *    quince, veinte o treinta metros que circulan no salen de esta resolución.
 * 4. **El área del campo de infiltración se puede acotar con la norma sola**,
 *    encadenando tres artículos: la dotación máxima por altitud del artículo
 *    43, el coeficiente de retorno de 0,85 del 134 y la tasa de aplicación de
 *    100 L/día/m² del 177. El resultado es un piso, no un diseño, y así se
 *    presenta.
 * 5. **La evaluación ambiental del vertimiento, leída a la letra, no alcanza
 *    a una vivienda unifamiliar.** El artículo 2.2.3.3.5.3 la exige a actividades
 *    industriales, comerciales o de servicio «así como los provenientes de
 *    conjuntos residenciales». Una casa sola no está en esa lista.
 *
 * Lo que NO se publica, y se declara dentro del artículo:
 *
 * - **Cualquier precio.** No hay fuente pública con metodología, y el
 *   renglón depende del suelo del predio. Se mantiene la doctrina del pilar de
 *   costos.
 * - **La tarifa del servicio de evaluación** que cobra cada corporación. La
 *   fija cada una con el método del artículo 96 de la Ley 633 de 2000.
 * - **El volumen total del tanque.** La 0330 fija el tiempo de retención y la
 *   geometría, no una fórmula de acumulación de lodos.
 * - **Ninguna NTC.** El catálogo de ICONTEC sigue sin ser consultable.
 *
 * Fechado en julio de 2026, seis meses después del artículo del agua, que es
 * su pieza gemela y al que remite tres veces.
 */
export const post: Post = {
  slug: 'aguas-residuales-sin-alcantarillado',
  titulo: 'Aguas residuales sin alcantarillado: qué exige la norma de verdad',
  pilar: 'casa-campestre',
  fecha: '2026-07-14',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Lo que todo el mundo llama «el pozo séptico» son cuatro unidades ' +
    'encadenadas, y la norma las exige todas. Cuánta área pide la última, qué ' +
    'permiso hay detrás, y por qué la distancia mínima al pozo de agua que ' +
    'usted ha oído no está en ninguna parte del reglamento.',
  metaDescripcion:
    'Pozo séptico y tratamiento de aguas residuales en suelo rural: qué exige ' +
    'el RAS, qué permiso pide la autoridad ambiental y cuánta área hace falta.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Resolver de dónde entra el agua es medio problema. El otro medio es a ' +
        'dónde va, y es el que se deja para el final del presupuesto con una ' +
        'línea que dice «pozo séptico» y un número redondo al lado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esa línea está mal por dos motivos distintos. **El primero es ' +
        'técnico**: lo que la norma exige no es un pozo, son cuatro unidades ' +
        'encadenadas, y la última necesita área y un suelo que absorba. **El ' +
        'segundo es de trámite**: hay un permiso detrás, lo da la autoridad ' +
        'ambiental y no la alcaldía, y es previo.',
    },
    {
      tipo: 'nota',
      texto:
        'La regla que ordena todo el tema: **quien decide sobre el vertimiento ' +
        'es la corporación autónoma regional**, la misma que decide sobre el ' +
        'agua que entra. Es una entidad distinta del municipio y distinta de ' +
        'quien expide la licencia. Cómo se encadena eso con el calendario del ' +
        'proyecto está en [el agua en el ' +
        'campo](/blog/agua-en-el-campo-que-permiso-necesita).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La regla de partida no tiene umbral' },
    {
      tipo: 'parrafo',
      texto:
        'Circula la idea de que una casa sola, con pocos habitantes, está por ' +
        'debajo de cualquier exigencia. El articulado dice lo contrario, y lo ' +
        'dice sin matices:',
    },
    {
      tipo: 'cita',
      texto:
        'Toda edificación, concentración de edificaciones o desarrollo ' +
        'urbanístico, turístico o industrial, localizado fuera del área de ' +
        'cobertura del sistema de alcantarillado público, deberá dotarse de ' +
        'sistemas de recolección y tratamiento de residuos líquidos y deberá ' +
        'contar con el respectivo permiso de vertimiento.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.3.4.10',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y la regla general del permiso es igual de amplia: alcanza a toda ' +
        'persona cuya actividad genere vertimientos a aguas superficiales, ' +
        'marinas **o al suelo**. No hay caudal mínimo por debajo del cual el ' +
        'artículo deje de aplicar.',
    },
    {
      tipo: 'nota',
      texto:
        'Hay **una salida, y es estrecha**. La excepción de vivienda rural ' +
        'dispersa permite verter al suelo sin permiso, «siempre que cuenten ' +
        'con soluciones individuales de saneamiento básico […] diseñadas bajo ' +
        'los parámetros definidos en el Reglamento Técnico del Sector de Agua ' +
        'Potable y Saneamiento Básico». Está en el parágrafo 5 del artículo ' +
        '2.2.3.4.1.9 del Decreto 1076. Sus límites —y por qué **no cubre una ' +
        'parcelación campestre**— están contados en [el agua en el ' +
        'campo](/blog/agua-en-el-campo-que-permiso-necesita) y no los repito.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Fíjese en lo que esa excepción hace: no le quita la obligación ' +
        'técnica, se la cambia de sitio. Deja de necesitar un permiso y pasa a ' +
        'necesitar **un diseño que cumpla el reglamento técnico**. Así que la ' +
        'pregunta, en los dos escenarios, termina siendo la misma: qué dice ' +
        'ese reglamento.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El reglamento que llevaba meses sin poderse leer' },
    {
      tipo: 'parrafo',
      texto:
        'Ese reglamento es la **Resolución 0330 de 2017** del Ministerio de ' +
        'Vivienda, conocida en el gremio como el RAS. Y aquí este blog tiene ' +
        'una deuda que salda hoy: el artículo del agua declaró, dentro de su ' +
        'propio texto, que no había podido leerla. El PDF que publica el ' +
        'Ministerio son páginas escaneadas sin capa de texto.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El texto íntegro sí está publicado, con capa de texto y con las notas ' +
        'de vigencia artículo por artículo, en el **gestor normativo de la ' +
        'Comisión de Regulación de Agua Potable y Saneamiento Básico**. De ahí ' +
        'salen todas las cifras de este artículo. De ahí sale también el ' +
        'rastro de reformas, que es lo primero que hay que mirar: la 0330 fue ' +
        '**modificada por la Resolución 799 de 2021 y corregida por la ' +
        'Resolución 908 de 2021**, y varios de los artículos que aquí se citan ' +
        'llevan ese texto nuevo, no el original.',
    },
    {
      tipo: 'nota',
      texto:
        'Un matiz de alcance que conviene tener claro antes de seguir. **El ' +
        'RAS no le habla a usted.** Su artículo 2 lo dirige a los prestadores ' +
        'de servicios públicos, a las entidades del sector y a «los ' +
        'diseñadores, constructores, interventores, operadores». Una casa ' +
        'particular entra por otra puerta: porque el Decreto 1076 remite a él ' +
        'para definir cuándo una solución individual está bien diseñada. Es ' +
        'una remisión, y por eso el interlocutor sigue siendo su diseñador.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que llaman «pozo séptico» son cuatro unidades' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la parte que cambia un presupuesto. El tanque séptico solo no ' +
        'cumple, y no es criterio de nadie: son dos artículos que se ' +
        'encadenan. El parágrafo 1 del artículo 173 obliga, en sistemas ' +
        'individuales, a **trampa de grasas al inicio y filtro anaeróbico** ' +
        'después del tanque. Y el artículo 176 obliga a **un tratamiento ' +
        'complementario** después de eso.',
    },
    {
      tipo: 'diagrama',
      svg: TREN_DE_TRATAMIENTO,
      titulo: 'El tren de tratamiento, en el orden que exige el reglamento',
      pie:
        'Sección esquemática, sin escala. Los rótulos numéricos son de los ' +
        'artículos 172, 173 y 177 de la Resolución 0330 de 2017. Diagrama del ' +
        'estudio.',
    },

    { tipo: 'titulo', nivel: 3, texto: '1 · La trampa de grasas' },
    {
      tipo: 'parrafo',
      texto:
        'Va lo más cerca posible de la cocina y **aguas arriba del tanque**. ' +
        'Su función es evitar que la grasa obstruya lo que viene detrás, que ' +
        'es exactamente por lo que fallan la mayoría de estos sistemas.',
    },
    {
      tipo: 'lista',
      items: [
        'Tiempo de retención **mínimo de 2,5 minutos**.',
        'Relación largo-ancho entre **1:1 y 3:1**, según su geometría.',
        'Profundidad útil acorde con el volumen, con **mínimo 0,35 m**.',
        'Limpieza **cada vez que alcance el 75 % de su capacidad de retención de grasa**. Es una obligación de operación, no una recomendación.',
      ],
    },

    { tipo: 'titulo', nivel: 3, texto: '2 · El tanque séptico' },
    {
      tipo: 'parrafo',
      texto:
        'Sedimenta y digiere. La norma lo permite expresamente para «áreas ' +
        'desprovistas de redes públicas de alcantarillado» y para vivienda ' +
        'rural dispersa **con suficiente área de contorno para acomodar el ' +
        'tanque con sus procesos de postratamiento**. Esa frase es la que ' +
        'convierte el área disponible en un requisito y no en una comodidad.',
    },
    {
      tipo: 'lista',
      items: [
        'Tiempo de retención hidráulica **entre 12 y 24 horas**.',
        'Si es rectangular, relación largo-ancho **entre 2:1 y 5:1**. Otra geometría exige justificar el diseño hidráulico.',
        '**Mínimo dos cámaras**, y la primera debe tener **dos tercios del volumen total**.',
        'Dispositivo para la **evacuación de gases**, y diseño que permita inspeccionarlo y mantenerlo.',
      ],
    },
    {
      tipo: 'tabla',
      cabeceras: ['Volumen útil', 'Profundidad útil mínima', 'Profundidad útil máxima'],
      filas: [
        ['Hasta 6 m³', '1,2 m', '2,2 m'],
        ['De 6 a 10 m³', '1,5 m', '2,5 m'],
        ['Más de 10 m³', '1,8 m', '2,8 m'],
      ],
      nota:
        'Tabla 25 de la Resolución 0330 de 2017, artículo 173, en el texto ' +
        'corregido por la Resolución 908 de 2021.',
    },
    {
      tipo: 'nota',
      texto:
        '**Aquí está el dato que más se cita mal de todo el tema.** La 0330 ' +
        '**no fija ninguna distancia mínima** entre el tanque séptico y el ' +
        'pozo de agua, ni entre el tanque y el lindero. Busqué la palabra ' +
        '«distancia» en todo el articulado: la única tabla de distancias ' +
        'mínimas es la Tabla 28, y su propio título la limita a los sistemas ' +
        'de tratamiento **centralizados**, es decir a las PTAR municipales. ' +
        'Las cifras de quince, veinte o treinta metros que circulan no salen ' +
        'de esta resolución.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que la norma sí dice sobre el pozo de agua es el numeral 7 del ' +
        'artículo 173, y es una regla de posición y no de metros: el tanque ' +
        '«debe ubicarse **aguas abajo** de cualquier pozo o manantial ' +
        'destinado al abastecimiento de agua para consumo humano». En un ' +
        'predio con pendiente eso decide dónde va la casa tanto como la vista.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos avisos sobre el tanque prefabricado, que es lo que casi todo el ' +
        'mundo compra. El primero es de material: la norma remite a la ' +
        'Resolución 501 de 2017 para las propiedades de resistencia química. ' +
        'El segundo es de sitio, y arruina instalaciones enteras: **con nivel ' +
        'freático alto, un tanque vacío flota**. La norma obliga a tomar ' +
        'precauciones para que no se desplace. Y el antiguo artículo 174, que ' +
        'trataba los prefabricados aparte, fue eliminado en 2021 y unificado ' +
        'en el 173.',
    },

    { tipo: 'titulo', nivel: 3, texto: '3 · El filtro anaeróbico' },
    {
      tipo: 'parrafo',
      texto:
        'El filtro anaeróbico de flujo ascendente —FAFA, en los planos— se ' +
        'construye como una cámara anexa al final del tanque o como una cámara ' +
        'independiente. Su lecho filtrante se dimensiona **entre 0,02 y 0,04 ' +
        'm³ por cada 0,1 m³ diarios de agua residual**, y con material ' +
        'filtrante plástico se puede usar la mitad de ese volumen.',
    },

    { tipo: 'titulo', nivel: 3, texto: '4 · El postratamiento, que es el que decide si cabe' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí es donde el proyecto se gana o se pierde. La norma da cuatro ' +
        'alternativas y deja la elección al responsable del diseño, «de ' +
        'acuerdo con las condiciones de permeabilidad del suelo, el área ' +
        'disponible y la calidad requerida del efluente»:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Alternativa', 'Lo que la norma le fija', 'Cuándo se usa'],
      filas: [
        [
          'Campo de infiltración',
          'Zanjas de **30 m como máximo**, de 0,45 a 0,75 m de ancho, con pendiente de 0,3 a 0,5 % y tubería de 0,10 a 0,15 m sobre lecho de grava de 10 a 60 mm',
          'Es la opción por defecto cuando hay área y el suelo absorbe',
        ],
        [
          'Pozo de absorción',
          'Diámetro **mínimo de 1,50 m**, profundidad útil no mayor a 5 m, fondo **2 m por encima del nivel freático** y tapa de inspección de 0,60 m',
          'Alternativa al campo **cuando no hay área suficiente** y el suelo es permeable',
        ],
        [
          'Filtro intermitente de arena',
          'Carga hidráulica de 0,08 a 0,2 m³/m²/día, profundidad de 45 a 90 cm y de 12 a 48 dosificaciones al día',
          'Cuando se necesita mejor calidad de efluente antes de disponer',
        ],
        [
          'Humedal artificial',
          'Retención cercana a **5 días**, relación largo-ancho de 3:1 a 4:1 y **suelo impermeabilizado** con arcilla o geomembrana',
          'Cuando hay área y se quiere una unidad vegetal, no enterrada',
        ],
      ],
      nota:
        'Artículos 177 a 180 de la Resolución 0330 de 2017, con las Tablas 26 ' +
        'y 27. El campo de infiltración exige además **verificar que no haya ' +
        'afectación sobre aguas subterráneas**, y evitar la proximidad de ' +
        'árboles para que las raíces no entren.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánta área hace falta, con la norma en la mano' },
    {
      tipo: 'parrafo',
      texto:
        'Se puede acotar sin inventar nada, encadenando tres artículos. El ' +
        'primero fija cuánta agua potable se le asigna a cada habitante, y ' +
        '—esto sorprende a mucha gente— **depende de la altura sobre el nivel ' +
        'del mar**, no del estrato ni del tamaño de la casa:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Altura de la zona', 'Dotación neta máxima'],
      filas: [
        ['Más de 2.000 m s. n. m.', '120 litros por habitante y día'],
        ['Entre 1.000 y 2.000 m s. n. m.', '130 litros por habitante y día'],
        ['Menos de 1.000 m s. n. m.', '140 litros por habitante y día'],
      ],
      nota: 'Tabla 1 de la Resolución 0330 de 2017, artículo 43.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El segundo es el **coeficiente de retorno**: qué fracción del agua ' +
        'que entra sale como agua residual. La norma manda estimarlo con ' +
        'información local y, a falta de datos de campo, **tomar 0,85**. El ' +
        'tercero es la tasa de aplicación del campo de infiltración: ' +
        '**menor o igual a 100 litros por día y por metro cuadrado**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con eso, una casa de cinco habitantes en clima cálido: 5 × 140 = 700 ' +
        'litros diarios de agua potable; × 0,85 = **595 litros diarios de agua ' +
        'residual**; ÷ 100 = **6 m² de área de absorción**. Y el tanque, con ' +
        'las 24 horas de retención, arranca en 0,6 m³ de volumen útil, que ' +
        'según la Tabla 25 se resuelve con una profundidad útil de entre 1,2 y ' +
        '2,2 m.',
    },
    {
      tipo: 'dato',
      valor: '6 m²',
      etiqueta:
        'Área de absorción mínima para una casa de cinco habitantes por debajo ' +
        'de 1.000 m s. n. m., calculada con la dotación, el coeficiente de ' +
        'retorno y la tasa de aplicación del propio reglamento',
      fuente: 'Resolución 0330 de 2017, artículos 43, 134 y 177',
    },
    {
      tipo: 'nota',
      texto:
        '**Esa cifra es un piso, no un diseño.** Los 100 L/día/m² son el techo ' +
        'de la tasa de aplicación, es decir el mejor suelo imaginable. El área ' +
        'real «debe obtenerse con base en las características del suelo, que ' +
        'se determinan en los ensayos de infiltración», y en un suelo ' +
        'arcilloso la cifra se multiplica. Quien le entregue un área de campo ' +
        'de infiltración **sin haber hecho el ensayo de percolación** está ' +
        'adivinando.',
    },
    {
      tipo: 'nota',
      texto:
        'Y una honestidad más: **la 0330 no da una fórmula de volumen total ' +
        'del tanque.** Fija el tiempo de retención y la geometría, no la ' +
        'acumulación de lodos, que es lo que en la práctica hace que un tanque ' +
        'real sea varias veces más grande que la cuenta de retención. Ese ' +
        'dimensionamiento lo pone el diseñador, y por eso aquí no publico un ' +
        'volumen recomendado.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los estudios que van antes de dibujar la solución' },
    {
      tipo: 'parrafo',
      texto:
        'El artículo 171 los enumera, y son cinco. Vale la pena leerlos ' +
        'despacio, porque tres de ellos se hacen en el predio y ninguno se ' +
        'puede sustituir por una cotización:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Visita de campo** para identificar aguas superficiales cercanas, edificaciones y límites de la propiedad.',
        '**Topografía** que ubique el sistema en planta y en altura.',
        '**Localización del postratamiento**, no solo del tanque.',
        '**Características del terreno**: elevaciones máximas del nivel freático y, cuando haga falta, capacidad de infiltración del subsuelo.',
        '**Definir los trámites ambientales** y obtener las autorizaciones que se requieran.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'El permiso: qué pide, cuánto dura y cuánto tarda' },
    {
      tipo: 'parrafo',
      texto:
        'La solicitud de permiso de vertimiento pide veintidós cosas. Estas ' +
        'son las que sorprenden a quien cree que es un formulario:',
    },
    {
      tipo: 'lista',
      items: [
        '**Certificado actualizado de la Oficina de Registro** sobre la propiedad del inmueble, o prueba idónea de la posesión.',
        '**Concepto sobre el uso del suelo** expedido por la autoridad municipal. Es decir: el municipio sí aparece, pero como quien certifica, no como quien autoriza.',
        '**Memorias técnicas, diseños de ingeniería y planos de detalle** del sistema de tratamiento, con sus condiciones de eficiencia.',
        '**Caudal de la descarga en litros por segundo**, frecuencia en días por mes y tiempo en horas por día.',
        '**Plan de gestión del riesgo** para el manejo del vertimiento.',
        'Y para el vertimiento al suelo, además: **resultados y datos de campo de las pruebas de infiltración**, el manual de operación y mantenimiento, el área de disposición en plano georreferenciado y un **plan de cierre y abandono** de esa área.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Un requisito que, leído a la letra, **no alcanza a una vivienda ' +
        'unifamiliar**: la **evaluación ambiental del vertimiento**. El ' +
        'artículo 2.2.3.3.5.3 la exige a quienes desarrollan actividades ' +
        'industriales, comerciales o de servicio, «así como los provenientes ' +
        'de conjuntos residenciales». Una casa sola no está en esa lista; un ' +
        'condominio, sí. Si se la piden, pídala motivada por escrito.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los plazos del procedimiento están en la norma y son sumables. No son ' +
        'lo que va a tardar —eso depende de la corporación— pero sí son el ' +
        'piso legal, y sirven para saber cuándo la demora dejó de ser normal:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Etapa', 'Plazo'],
      filas: [
        ['Verificar que la documentación esté completa', '10 días hábiles'],
        ['Estudio de la solicitud y visitas técnicas', '30 días hábiles'],
        ['Informe técnico después de las visitas', '8 días hábiles'],
        ['Decisión mediante resolución', '20 días hábiles'],
        ['**Total, si nada falta**', '**68 días hábiles**'],
      ],
      nota:
        'Decreto 1076 de 2015, artículo 2.2.3.3.5.5. Si falta documentación, ' +
        'el reloj suma otros diez días hábiles para completarla. Contra la ' +
        'resolución procede recurso de reposición dentro de los cinco días ' +
        'hábiles siguientes a la notificación.',
    },
    {
      tipo: 'nota',
      texto:
        'El permiso **se otorga por un término no mayor a diez años**, igual ' +
        'que la concesión de aguas doméstica. Y para vertimiento al suelo la ' +
        'corporación tiene que verificar, entre otras cosas, «la no existencia ' +
        'de ninguna otra alternativa posible de vertimiento diferente a la del ' +
        'suelo» y «la no existencia de un sistema de alcantarillado al cual el ' +
        'usuario pueda conectarse». Si hay red al lado, la respuesta puede ser ' +
        'que se conecte.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que este artículo no le va a dar' },
    {
      tipo: 'parrafo',
      texto:
        'Un precio. Y no es pudor: es que **no existe fuente pública ' +
        'colombiana con metodología** para el costo de un sistema de ' +
        'tratamiento individual, y el renglón depende de lo único que no se ' +
        'sabe antes de medirlo, que es cómo absorbe ese suelo. Un campo de ' +
        'infiltración en suelo arenoso y otro en arcilla, para la misma casa, ' +
        'no se parecen ni en área ni en excavación ni en factura.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Tampoco publico la tarifa del servicio de evaluación que cobra la ' +
        'corporación por tramitarle el permiso: cada una la liquida con el ' +
        'sistema y método del artículo 96 de la Ley 633 de 2000, y no hay un ' +
        'número nacional. Es una llamada, y es gratis. Por qué este blog no da ' +
        'cifras de obra sin metodología está explicado en [cuánto cuesta ' +
        'construir por m²](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí se puede decir sobre la estructura del costo: el tanque ' +
        'prefabricado es la parte barata y visible; **la excavación, el ' +
        'postratamiento y el ensayo de suelos son la parte cara**, y son ' +
        'justamente las tres que no aparecen en la cotización de quien vende ' +
        'tanques. Es la misma lógica que gobierna el resto del presupuesto ' +
        'rural, contada en [cuánto cuesta una casa ' +
        'campestre](/blog/cuanto-cuesta-una-casa-campestre).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El orden en que conviene resolverlo' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Pregunte a la corporación, por escrito y nombrando el predio**, si su caso cae en la excepción de vivienda rural dispersa o necesita permiso. La respuesta cambia el calendario entero.',
        '**Haga el ensayo de infiltración antes del anteproyecto**, no después. Es lo que fija el área, y el área fija dónde puede pararse la casa.',
        '**Mida el nivel freático en la época de lluvias**, no en verano. Es el dato que decide si el tanque flota y si el pozo de absorción es viable.',
        '**Ubique el tanque aguas abajo del pozo de agua** desde el primer esquema. Corregirlo después implica mover una de las dos cosas.',
        '**Presupueste las cuatro unidades, no el tanque.** Trampa, tanque, filtro y postratamiento, con su excavación.',
        '**Cuente el permiso como una ruta paralela y previa a la licencia**, con sus sesenta y ocho días hábiles de piso.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien resuelve esto en la etapa de anteproyecto se ahorra la ' +
        'conversación incómoda. Quien lo resuelve con los planos firmados ' +
        'descubre, a veces, que el campo de infiltración no cabe donde queda ' +
        'la casa — y entonces lo que se mueve es la casa.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'suelo-rural', 'licencia'],
  fuentes: [
    {
      titulo:
        'Resolución 0330 de 2017, Reglamento Técnico para el Sector de Agua Potable y Saneamiento Básico (RAS): artículos 43, 134 y 171 a 183, con las modificaciones de la Resolución 799 de 2021 y las correcciones de la Resolución 908 de 2021',
      editor:
        'Ministerio de Vivienda, Ciudad y Territorio · Gestor normativo de la Comisión de Regulación de Agua Potable y Saneamiento Básico',
      url: 'https://normas.cra.gov.co/gestor/docs/resolucion_minviviendact_0330_2017.htm',
      fecha: '2017-06-08',
    },
    {
      titulo: 'Página de normativa de la Resolución 0330 de 2017',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://minvivienda.gov.co/normativa/resolucion-0330-2017-0',
      fecha: null,
    },
    {
      titulo:
        'Decreto 1076 de 2015, único reglamentario del sector ambiente: vertimiento al suelo, soluciones individuales de saneamiento, requisitos y procedimiento del permiso de vertimientos (artículos 2.2.3.3.4.9, 2.2.3.3.4.10, 2.2.3.3.5.1 a 2.2.3.3.5.7 y 2.2.3.4.1.9)',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
    {
      titulo:
        'Decreto 1210 de 2020, que reglamenta el artículo 279 de la Ley 1955 de 2019',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=141359',
      fecha: '2020-09-02',
    },
    {
      titulo:
        'Ley 1955 de 2019, artículo 279: soluciones de agua y saneamiento en zonas rurales',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1955_2019_pr005.html',
      fecha: '2019-05-25',
    },
    {
      titulo:
        'Ley 633 de 2000, artículo 96: sistema y método para el cobro de los servicios de evaluación y seguimiento ambiental',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6285',
      fecha: '2000-12-29',
    },
  ],
}
