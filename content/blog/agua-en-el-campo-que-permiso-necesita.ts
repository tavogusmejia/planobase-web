import type { Post } from '@/lib/types'
import { PROCEDENCIAS } from './diagramas/agua-rural'

/**
 * El complemento de «Comprar un lote rural»: quien compra en el campo pregunta
 * por el agua en la misma conversación, y la respuesta que circula —«todo
 * necesita concesión»— es falsa en cuatro escenarios distintos, los cuatro
 * verificados contra el articulado.
 *
 * Lo que este artículo corrige, con norma leída:
 *
 * 1. **La concesión doméstica dura diez años, no cincuenta.** El artículo
 *    2.2.3.2.7.4 del Decreto 1076 reserva los cincuenta años a la prestación de
 *    servicios públicos y a las obras de interés público o social. Es decir: al
 *    acueducto veredal, no a la casa. El dato de los cincuenta circula mucho.
 * 2. **La excepción de vivienda rural dispersa existe y sustituye la
 *    concesión** por inscripción en el Registro de Usuarios del Recurso
 *    Hídrico: artículo 279 de la Ley 1955 de 2019, reglamentado por el Decreto
 *    1210 de 2020, que además metió el asunto en el artículo 2.2.3.4.1.1 del
 *    Decreto 1076. Se verificó que **sigue vigente**: el artículo 372 de la
 *    Ley 2294 de 2023 enumera uno por uno los artículos derogados de la Ley
 *    1955 —el 281 entre ellos— y el 279 no está en esa lista, y el mismo
 *    artículo declara que lo no derogado expresamente continúa vigente.
 * 3. **Y esa excepción no cubre una parcelación campestre.** Lo dice el
 *    parágrafo 2 del artículo 279 con todas las letras. Es el matiz que
 *    convierte el dato en útil para un cliente de arquitectura, porque casi
 *    todo el que lo lee cree que le aplica.
 * 4. **El aljibe no tiene régimen propio.** La palabra aparece una sola vez en
 *    los dos millones de caracteres del Decreto 1076, y de forma incidental.
 *    «El aljibe no necesita permiso porque no es un pozo» no se apoya en nada.
 * 5. **La Resolución 631 de 2015 no aplica al pozo séptico de una casa**, que
 *    infiltra al suelo: su propio artículo 1 se excluye de los vertimientos al
 *    suelo. Se leyó en el PDF escaneado del Ministerio.
 *
 * Lo que NO se publica:
 *
 * - **La Resolución 0330 de 2017 (RAS).** Sigue sin poder leerse y no se cita
 *   ni una vez, aunque el parágrafo 5 del artículo 2.2.3.4.1.9 remita a ella
 *   para el diseño de las soluciones individuales de saneamiento. Se declara
 *   dentro del artículo.
 * - **Ninguna NTC.** El catálogo de ICONTEC no es consultable.
 * - **La definición de «vivienda rural dispersa».** No se pudo localizar en la
 *   norma leída. Se declara dentro del artículo en vez de inventarle contorno.
 * - **Ningún plazo de trámite, caudal ni profundidad de pozo.** Varían por
 *   corporación y por predio.
 *
 * Las aguas residuales se nombran y se remiten: son el artículo 42 del plan
 * editorial y no se les come el tema aquí.
 *
 * Fechada en enero de 2026, después de «Construir en Jamundí», al que enlaza
 * para el caso de Acuavalle.
 */
export const post: Post = {
  slug: 'agua-en-el-campo-que-permiso-necesita',
  titulo: 'El agua en el campo: de dónde sale y qué permiso necesita',
  pilar: 'casa-campestre',
  fecha: '2026-01-13',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    '«Toda casa en el campo necesita concesión de aguas» es falso en cuatro ' +
    'casos distintos, y la concesión que sí hace falta dura diez años, no ' +
    'cincuenta. Las cuatro procedencias del agua y lo que exige cada una.',
  metaDescripcion:
    'De dónde sale el agua de una casa rural en Colombia y qué permiso pide ' +
    'cada fuente: concesión de aguas, pozo, aljibe, agua lluvia y acueducto veredal.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'El agua es el renglón que decide si una casa de campo se puede ' +
        'construir, y es el que casi siempre se deja para el final. Se trata ' +
        'como una partida de obra —perforar, bombear, almacenar— cuando antes ' +
        'de eso es un **trámite**, con su solicitud, su visita y su acto ' +
        'administrativo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y sobre ese trámite circula una frase que es falsa: «toda casa en el ' +
        'campo necesita concesión de aguas». **Es falsa en cuatro escenarios ' +
        'distintos**, y saber cuál es el suyo cambia meses de calendario.',
    },
    {
      tipo: 'nota',
      texto:
        'La regla que ordena todo el tema, y que conviene fijar antes de ' +
        'seguir: **quien decide sobre el agua no es el municipio.** Es la ' +
        'corporación autónoma regional con jurisdicción sobre el predio, que es ' +
        'una entidad distinta de la alcaldía y de la que expide la licencia.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las cuatro procedencias' },
    {
      tipo: 'parrafo',
      texto:
        'El agua de una casa en el campo sale de uno de cuatro sitios, y cada ' +
        'uno tiene su propio régimen. No es una clasificación académica: es la ' +
        'que decide qué papel hay que conseguir y ante quién.',
    },
    {
      tipo: 'diagrama',
      svg: PROCEDENCIAS,
      titulo: 'De dónde sale el agua, y qué pide cada procedencia',
      pie:
        'Sección esquemática, sin escala. La profundidad a la que hay agua ' +
        'depende del predio y no se sabe antes de perforar. Diagrama del estudio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La concesión de aguas: quién la da y cuánto dura' },
    {
      tipo: 'parrafo',
      texto:
        'La concesión es el permiso para aprovechar agua de dominio público. La ' +
        'norma que la gobierna es el Decreto 1076 de 2015, el decreto único del ' +
        'sector ambiente, que compila el viejo Decreto 1541 de 1978.',
    },
    {
      tipo: 'cita',
      texto:
        'Toda persona natural o jurídica, pública o privada, requiere concesión ' +
        'para obtener el derecho al aprovechamiento de las aguas para los ' +
        'siguientes fines: a. Abastecimiento doméstico en los casos que requiera ' +
        'derivación; b. Riego y silvicultura; […]',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.7.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien la otorga es la **corporación autónoma regional**, y eso está en ' +
        'la ley que las creó: entre sus funciones está «otorgar permisos y ' +
        'concesiones para aprovechamientos forestales, concesiones para el uso ' +
        'de aguas superficiales y subterráneas».',
    },
    {
      tipo: 'nota',
      texto:
        'Dos correcciones frecuentes. **No la otorga el municipio**: el ' +
        'artículo de la Ley 99 que lista las funciones ambientales municipales ' +
        'no incluye esa. Y **no la otorga la autoridad ambiental urbana** de las ' +
        'ciudades grandes, porque la ley la habilita solo *dentro del perímetro ' +
        'urbano* — y una casa en el campo está, por definición, fuera de él.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Diez años, no cincuenta' },
    {
      tipo: 'cita',
      texto:
        'Las concesiones a que se refieren los artículos anteriores se ' +
        'otorgarán por un término no mayor de diez (10) años, salvo las ' +
        'destinadas a la prestación de servicios públicos o a la construcción ' +
        'de obras de interés público o social, que podrán ser otorgadas por ' +
        'períodos hasta de cincuenta (50) años.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.7.4',
    },
    {
      tipo: 'nota',
      texto:
        'La cifra de cincuenta años circula como si fuera la de cualquier ' +
        'concesión doméstica. **No lo es.** Los cincuenta años son para quien ' +
        'presta un servicio público —el acueducto veredal, por ejemplo— o para ' +
        'obras de interés público o social. Para la casa, el techo son diez, y ' +
        'después hay que prorrogar.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'El orden de prioridad, cuando el agua no alcanza' },
    {
      tipo: 'parrafo',
      texto:
        'En cuencas con presión sobre el recurso, la corporación no reparte por ' +
        'orden de llegada. Hay una prelación legal, y el uso doméstico va ' +
        'primero:',
    },
    {
      tipo: 'cita',
      texto:
        'El uso doméstico tendrá siempre prioridad sobre los demás, los usos ' +
        'colectivos sobre los individuales y los de los habitantes de una ' +
        'región sobre los de fuera de ella.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.7.8',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es una buena noticia para una vivienda y una mala para un proyecto de ' +
        'riego o recreación en la misma cuenca. Conviene saber en cuál de las ' +
        'dos categorías cae lo que usted quiere hacer.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Qué pide la solicitud' },
    {
      tipo: 'lista',
      items: [
        'Nombre del solicitante, fuente de donde se derivará el agua y predio que se va a beneficiar.',
        '**La cantidad de agua que se solicita, en litros por segundo.** Es un dato de diseño, no una estimación: hay que haberlo calculado.',
        'Los sistemas de captación, derivación, conducción y restitución de sobrantes.',
        'Las servidumbres que se requieran, y el término por el que se pide la concesión.',
        '**Certificado de la Oficina de Registro de Instrumentos Públicos** sobre la propiedad del predio, o prueba de la posesión o tenencia.',
        'Autorización escrita del propietario, si quien solicita es mero tenedor.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'No publico plazos de este trámite porque varían por corporación y no ' +
        'los pude verificar en fuente comparable. Lo que sí está en la norma: ' +
        'la decisión se toma **dentro de los quince días siguientes a la visita ' +
        'ocular**, y esa visita es una etapa del procedimiento, no un requisito ' +
        'que dependa de usted.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los cuatro casos en que NO hace falta concesión' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está lo que casi nadie explica bien, y lo que puede ahorrarle un ' +
        'trámite entero. Son cuatro supuestos distintos, con normas distintas.',
    },

    { tipo: 'titulo', nivel: 3, texto: '1. Beber, bañarse y lavar en un cauce natural' },
    {
      tipo: 'cita',
      texto:
        'Todos los habitantes pueden utilizar las aguas de uso público mientras ' +
        'discurran por cauces naturales, para beber, bañarse, abrevar animales, ' +
        'lavar ropas y cualesquiera otros objetos similares…',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.6.1',
    },
    {
      tipo: 'nota',
      texto:
        'El límite está en la norma de origen, y es estrecho: el uso debe ' +
        'hacerse **«sin establecer derivaciones, ni emplear máquina ni ' +
        'aparato»**. Una bomba es un aparato. Esta puerta no sirve para ' +
        'abastecer una casa; sirve para lo que dice.',
    },

    { tipo: 'titulo', nivel: 3, texto: '2. El agua lluvia que cae y se queda en el predio' },
    {
      tipo: 'cita',
      texto:
        'Sin perjuicio del dominio público de las aguas lluvias, y sin que ' +
        'pierdan tal carácter, el dueño, poseedor o tenedor de un predio puede ' +
        'servirse sin necesidad de concesión de las aguas lluvias que caigan o ' +
        'se recojan en este, mientras por este discurren.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.16.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'La recolección de lluvia es, entonces, la única fuente que no arranca ' +
        'con un trámite. Y hay una norma que juega a favor: la ley de uso ' +
        'eficiente del agua obliga a las entidades que otorgan licencias a ' +
        'exigir que el estudio de fuentes de abastecimiento **incluya la oferta ' +
        'de aguas lluvias** y que se implante su uso si es técnica y ' +
        'económicamente viable.',
    },
    {
      tipo: 'nota',
      texto:
        'El matiz que casi nunca se cita: **sí se requiere concesión** cuando ' +
        'las aguas lluvias «forman un cauce natural que atraviese varios ' +
        'predios, y cuando aún sin encausarse salen del inmueble». Es libre ' +
        'mientras el agua no salga de su terreno. Y las obras de ' +
        'almacenamiento se pueden hacer siempre que no causen perjuicio a ' +
        'terceros.',
    },

    { tipo: 'titulo', nivel: 3, texto: '3. El agua subterránea para uso doméstico en predio propio' },
    {
      tipo: 'cita',
      texto:
        'Los aprovechamientos de aguas subterráneas, tanto en predios propios ' +
        'como ajeno, requieren concesión de la Autoridad Ambiental competente ' +
        'con excepción de los que utilicen para usos domésticos en propiedad ' +
        'del beneficiario o en predios que éste tenga posesión o tenencia.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.16.13',
    },
    {
      tipo: 'nota',
      texto:
        'Cuidado con el alcance. La excepción está escrita sobre el ' +
        '**aprovechamiento**. El permiso previo para perforar es otra cosa y ' +
        'tiene su propio artículo, sin excepción doméstica equivalente. Es ' +
        'decir: puede que no necesite concesión para usar el agua y sí necesite ' +
        'permiso para buscarla.',
    },

    { tipo: 'titulo', nivel: 3, texto: '4. La vivienda rural dispersa' },
    {
      tipo: 'parrafo',
      texto:
        'Es la excepción más amplia y la que menos se conoce, porque no está en ' +
        'el decreto del agua sino en una ley de plan de desarrollo. El artículo ' +
        '279 de la Ley 1955 de 2019 dispuso que ese uso **se inscriba en el ' +
        'Registro de Usuarios del Recurso Hídrico** y que esa inscripción ' +
        '**sustituya la respectiva concesión**. El Decreto 1210 de 2020 lo ' +
        'reglamentó y lo llevó al articulado del Decreto 1076.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que cuenta como uso doméstico quedó definido en tres numerales: ' +
        'bebida directa y preparación de alimentos; higiene personal y limpieza; ' +
        'y **el uso agrícola, pecuario y acuícola para la subsistencia de ' +
        'quienes habitan la vivienda**. El registro, además, lo diligencia la ' +
        'propia autoridad ambiental, no el propietario.',
    },
    {
      tipo: 'nota',
      texto:
        '**Y aquí está el límite que hace inútil la excepción para casi todo ' +
        'lector de este blog.** El parágrafo 2 del mismo artículo 279 dice que ' +
        'no aplica «a otros usos diferentes al consumo humano y doméstico, ni a ' +
        '**parcelaciones campestres** o infraestructura de servicios públicos o ' +
        'privados ubicada en zonas rurales», ni a los acueductos que se ' +
        'establezcan para servir viviendas rurales dispersas. Si lo suyo es una ' +
        'parcelación, esta puerta está cerrada.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos cosas que declaro en vez de rellenar. **No encontré en la norma ' +
        'leída una definición de «vivienda rural dispersa»**, que es justamente ' +
        'el contorno que decide quién se beneficia; conviene preguntarlo por ' +
        'escrito a la corporación antes de contar con la excepción. Y verifiqué ' +
        'que el artículo 279 **sigue vigente**: la ley de plan siguiente ' +
        'enumera uno por uno los artículos que deroga de la Ley 1955 —el 281 ' +
        'está en esa lista— y el 279 no aparece en ella.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Pozo profundo y aljibe: el permiso que va antes de perforar' },
    {
      tipo: 'parrafo',
      texto:
        'Este es el error caro del tema, y se comete en ese orden: se perfora ' +
        'primero y se pregunta después.',
    },
    {
      tipo: 'cita',
      texto:
        'La prospección y exploración que incluye perforaciones de prueba en ' +
        'busca de aguas subterráneas con miras a su posterior aprovechamiento, ' +
        'tanto en terrenos de propiedad privada como en baldíos, requiere ' +
        'permiso de la Autoridad Ambiental competente.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.16.4',
    },
    {
      tipo: 'parrafo',
      texto:
        'La solicitud pide, además de lo de cualquier concesión, cosas que ' +
        'obligan a tener contratista antes de tramitar: **nombre y número de ' +
        'inscripción de la empresa perforadora**, especificaciones del equipo, ' +
        'sistema de perforación, plan de trabajo, características ' +
        'hidrogeológicas de la zona y relación de los otros aprovechamientos de ' +
        'agua subterránea que ya existan en el área.',
    },
    {
      tipo: 'nota',
      texto:
        'Y el permiso de exploración **no es la concesión**: la norma dice que ' +
        '«no confieren concesión para el aprovechamiento de las aguas», aunque ' +
        'dan prioridad a su titular para obtenerla. Son dos actuaciones, en ese ' +
        'orden.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Después de perforar quedan tres obligaciones que nadie presupuesta y ' +
        'que son de la norma, no del criterio del funcionario:',
    },
    {
      tipo: 'lista',
      items: [
        'Un **informe por cada pozo perforado**, dentro de los sesenta días hábiles siguientes al término del permiso, con ubicación en coordenadas, perfil estratigráfico **de todos los pozos, tengan o no agua**, y análisis fisicoquímico y bacteriológico.',
        '**La prueba de bombeo antes de empezar a usar el pozo.** La norma es tajante: ningún aprovechamiento podrá iniciarse sin haberse practicado previamente. Y el pozo debe quedar dotado de contador, conexión a manómetro y toma de muestras.',
        '**Permiso previo para sellar un pozo.** Nadie puede adelantar la obturación sin autorización de la autoridad ambiental. Un pozo abandonado no se tapa y ya.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Sobre el aljibe conviene desmentir algo que se repite mucho: **la ' +
        'norma no lo distingue del pozo.** Busqué la palabra «aljibe» en los ' +
        'dos millones de caracteres del Decreto 1076 y aparece **una sola vez**, ' +
        'de forma incidental y en un contexto que no es este. No hay definición ' +
        'ni régimen propio. «El aljibe no necesita permiso porque no es un ' +
        'pozo» no se apoya en ninguna norma.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El acueducto veredal: la opción más simple, si existe' },
    {
      tipo: 'parrafo',
      texto:
        'Un acueducto veredal no es un arreglo informal entre vecinos: es un ' +
        '**prestador de servicios públicos domiciliarios**. La ley de servicios ' +
        'públicos lo contempla expresamente como «las organizaciones ' +
        'autorizadas conforme a esta Ley para prestar servicios públicos en ' +
        'municipios menores en zonas rurales y en áreas o zonas urbanas ' +
        'específicas».',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso tiene consecuencias en las dos direcciones. Hacia arriba, el ' +
        'acueducto necesita **su propia concesión de aguas** —la ley obliga a ' +
        'quienes prestan servicios públicos a obtener contratos de concesión ' +
        'para usar las aguas— y debe inscribirse ante la Superintendencia de ' +
        'Servicios Públicos y la comisión de regulación del sector.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hacia abajo, y esto es lo que le interesa a usted: si el acueducto ' +
        'tiene su concesión en regla, **usted no necesita una propia**. Lo que ' +
        'necesita es el documento del prestador. Es, de lejos, la ruta más ' +
        'corta.',
    },
    {
      tipo: 'nota',
      texto:
        'Y una regla que juega en contra de quien prefiere su propio pozo ' +
        'teniendo red al lado: cuando hay servicio disponible de acueducto y ' +
        'saneamiento **es obligatorio vincularse como usuario**, o acreditar que ' +
        'se dispone de alternativas que no perjudiquen a la comunidad — y quien ' +
        'determina eso es la Superintendencia, no el propietario.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se conecta con la licencia' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay una imprecisión muy extendida que conviene deshacer. El ' +
        '«certificado de disponibilidad inmediata de servicios» que todo el ' +
        'mundo nombra pertenece a la licencia de **urbanización**, que es ' +
        'urbana. En suelo rural la exigencia está redactada de otra manera y ' +
        'apunta directamente al permiso ambiental:',
    },
    {
      tipo: 'cita',
      texto:
        'Copia de las autorizaciones que sustenten la forma en que se prestarán ' +
        'los servicios públicos domiciliarios de agua potable y saneamiento ' +
        'básico, o las autorizaciones y permisos ambientales para el uso y ' +
        'aprovechamiento de los recursos naturales renovables en caso de ' +
        'autoabastecimiento y el pronunciamiento de la Superintendencia de ' +
        'Servicios Públicos.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.1.9, numeral 3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ese numeral es de la licencia de **parcelación**. Pero la condición de ' +
        'fondo alcanza también a la de construcción: el artículo que fija las ' +
        'condiciones generales para otorgar licencias en suelo rural y rural ' +
        'suburbano se aplica «a las licencias de parcelación **y ' +
        'construcción**», y repite la misma exigencia de acreditar los permisos ' +
        'ambientales en caso de autoabastecimiento.',
    },
    {
      tipo: 'nota',
      texto:
        'Traducido a calendario: **la concesión de aguas no es un anexo de la ' +
        'licencia, es un requisito previo**. Y como corre en la corporación y ' +
        'no en la curaduría, es secuencial. Es una de las razones por las que ' +
        '[la licencia rural tarda ' +
        'más](/blog/licencia-de-construccion-en-suelo-rural).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuando el agua decide la licencia: el caso de Jamundí' },
    {
      tipo: 'parrafo',
      texto:
        'No es una hipótesis. En Jamundí hay licencias suspendidas por una ' +
        'sentencia, y el criterio de la suspensión no es geográfico sino de ' +
        'disponibilidad de agua: lo que decide es si el predio tiene ' +
        'garantizado el suministro. Está contado, con el fallo y sus ' +
        'excepciones, en [construir en Jamundí](/blog/construir-en-jamundi). No ' +
        'lo repito aquí.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí vale la pena señalar es la lección general: **la ' +
        'disponibilidad de agua puede ser el primer documento del proyecto, ' +
        'antes que el primer plano.** No es una excentricidad de un municipio; ' +
        'es lo que ocurre cuando una cuenca llega a su límite.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El agua que sale: una advertencia y una remisión' },
    {
      tipo: 'parrafo',
      texto:
        'Resolver de dónde entra el agua es medio problema. El otro medio es a ' +
        'dónde va, y merece su propio artículo. Aquí solo dos cosas, para que ' +
        'no le cuenten mal ninguna de las dos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La primera: la regla general del permiso de vertimientos es muy ' +
        'amplia. Alcanza a toda persona cuya actividad genere vertimientos a ' +
        'aguas superficiales, marinas **o al suelo**, y el artículo no fija ' +
        'ningún umbral de caudal por debajo del cual no aplique.',
    },
    {
      tipo: 'nota',
      texto:
        'La segunda, que se cita mal con frecuencia: **la Resolución 631 de ' +
        '2015 no le fija los parámetros a un pozo séptico de vivienda que ' +
        'infiltra al suelo.** Su propio artículo 1 lo excluye: «no aplica a los ' +
        'vertimientos puntuales que se realicen a aguas marinas o al suelo». Si ' +
        'la casa descargara a una quebrada, sería otra historia.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y la excepción de vivienda rural dispersa vuelve a aparecer aquí: las ' +
        'soluciones individuales de saneamiento diseñadas bajo los parámetros ' +
        'del reglamento técnico del sector **no requieren permiso de ' +
        'vertimientos al suelo**, aunque sí registro. Con los mismos límites del ' +
        'parágrafo 2 que ya vimos.',
    },
    {
      tipo: 'nota',
      texto:
        'Una declaración de honestidad que este blog hace siempre que ' +
        'corresponde: **ese reglamento técnico del sector no lo pude leer.** El ' +
        'archivo que publica el Ministerio son páginas escaneadas y no fue ' +
        'posible verificar su articulado. Por eso no cito de él ni un número ni ' +
        'un parámetro, y por eso tampoco cito ninguna norma técnica de ' +
        'ICONTEC: su catálogo no es consultable públicamente.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El orden en que conviene resolverlo' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Pregunte si hay acueducto veredal y si tiene su concesión al día.** Si la respuesta es sí, se ahorró el resto.',
        '**Pregunte a la corporación, por escrito y nombrando el predio**, qué exige para abastecer una vivienda ahí. Es gratis y es la respuesta que gobierna.',
        '**Averigüe si su caso cabe en la excepción de vivienda rural dispersa**, y confirme por escrito que su proyecto no es una parcelación campestre a ojos de la corporación.',
        '**Si va a perforar, tramite el permiso antes de contratar la máquina**, y cuente con que necesita a la empresa perforadora identificada para poder solicitarlo.',
        '**Incluya la recolección de lluvia en el estudio de fuentes**, aunque no sea la fuente principal. Es la única que no arranca con un trámite.',
        '**Resuelva agua y saneamiento en la etapa de anteproyecto**, no en la de acabados. Definen dónde se puede parar la casa tanto como el estudio de suelos.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien hace estas seis preguntas antes de comprar el lote no se lleva ' +
        'la sorpresa. Quien las hace después de tener planos, sí — y a veces la ' +
        'sorpresa es que la casa no se puede abastecer donde está dibujada. ' +
        'Antes de eso está la otra conversación, la del título y el acceso: ' +
        '[qué verificar antes de firmar un lote ' +
        'rural](/blog/comprar-lote-rural-que-verificar-antes-de-firmar).',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'suelo-rural', 'licencia', 'norma-urbana'],
  fuentes: [
    {
      titulo: 'Decreto 1076 de 2015, único reglamentario del sector ambiente: concesiones, aguas subterráneas, aguas lluvias, registro de usuarios y vertimientos',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto-Ley 2811 de 1974, código nacional de recursos naturales renovables, artículos 86, 88, 89 y 92',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1551',
      fecha: '1974-12-18',
    },
    {
      titulo: 'Ley 99 de 1993, artículos 31, 65 y 66: competencias ambientales',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=297',
      fecha: '1993-12-22',
    },
    {
      titulo: 'Ley 142 de 1994, régimen de servicios públicos domiciliarios, artículos 15, 16, 22 y 25',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=2752',
      fecha: '1994-07-11',
    },
    {
      titulo: 'Ley 1955 de 2019, artículo 279: soluciones de agua y saneamiento en zonas rurales',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1955_2019_pr005.html',
      fecha: '2019-05-25',
    },
    {
      titulo: 'Decreto 1210 de 2020, que reglamenta el artículo 279 de la Ley 1955 de 2019',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=141359',
      fecha: '2020-09-02',
    },
    {
      titulo: 'Ley 2294 de 2023, artículo 372: vigencias y derogatorias',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2294_2023_pr009.html',
      fecha: '2023-05-19',
    },
    {
      titulo: 'Decreto 1077 de 2015, artículos 2.2.6.1.2.1.9 y 2.2.6.2.6: licencias en suelo rural y servicios públicos',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 373 de 1997, uso eficiente y ahorro del agua, artículo 9',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=342',
      fecha: '1997-06-06',
    },
    {
      titulo: 'Resolución 631 de 2015, parámetros y valores límites máximos permisibles en vertimientos puntuales',
      editor: 'Ministerio de Ambiente y Desarrollo Sostenible',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/11/resolucion-631-de-2015.pdf',
      fecha: '2015-03-17',
    },
  ],
}
