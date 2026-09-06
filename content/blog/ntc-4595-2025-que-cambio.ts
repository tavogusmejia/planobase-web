import type { Post } from '@/lib/types'
import { CADENA_DE_AREAS } from './diagramas/ntc-4595'

/**
 * Tercera pieza del pilar institucional, después de «Concursos públicos de
 * arquitectura» e «Interventoría de obra pública». Las dos primeras explican
 * cómo se adjudica y cómo se vigila un proyecto público; esta explica con qué
 * regla se diseña el más común de todos ellos.
 *
 * La investigación se hizo con los PDF oficiales de las dos ediciones abiertos
 * al tiempo, no con glosas. Eso corrigió el artículo tres veces.
 *
 * **Primer giro: el titular del encargo era falso.** Se pedía contar «qué áreas
 * se movieron». No se movió ninguna. Las áreas por estudiante de las aulas son
 * las mismas cifras, con la misma nota al pie, en 2020 y en 2025: preescolar
 * 2,00 m², básica y media 1,65 m², multigrado 1,80 m². Y con ellas siguen igual
 * el mínimo de 2,5 m² de áreas libres por estudiante, el 60 % de zonas verdes,
 * la huerta escolar de 30 m², el sombreado del 50 % de las zonas duras, el
 * índice de reflexión solar del 28 %, la pendiente máxima del 15 % y los
 * porcentajes de uso efectivo del 80, 90 y 100 %. La lista de lo que NO cambió
 * es, para quien trabaja, el dato más útil, y por eso va antes que la de
 * cambios.
 *
 * **Segundo giro, y es la tesis:** lo que cambió no son las cifras sino de
 * dónde se sacan. En 2020, la Tabla 2 «Indicadores básicos de lotes» vivía en
 * el capítulo 4, que es normativo, y daba el área del lote leyendo una fila. En
 * 2025 esa tabla es la Tabla A.1 del Anexo A, que es **informativo**, y el
 * anexo declara que sus tablas «no son de uso obligatorio». En el cuerpo
 * normativo quedaron las Tablas 3 y 4, que no traen valores sino un método: la
 * norma las llama «un simulador de construcción de la plataforma
 * programática». Y el patrón se repite: los cupos de parqueo se delegan al POT,
 * la proporción de cupos accesibles desaparece, el área exterior obligatoria
 * del preescolar pierde su cifra. **Menos números duros, más remisiones.** A
 * cambio entra un régimen cuantitativo nuevo, las áreas libres curriculares
 * (numeral 5.3.6.3 y Tabla 9), que no existía: la expresión aparece cero veces
 * en la edición de 2020.
 *
 * **Tercer giro, y es una corrección a mí mismo que conviene dejar escrita.**
 * Este artículo estuvo a punto de publicar que la GTC 223:2025 era la NTC
 * 6705:2023 reclasificada de norma a guía. La hipótesis era razonable —títulos
 * casi iguales, mismo comité, edición 2.0 sucediendo a una 1.0— y **es falsa**.
 * La GTC 223:2025 dice en su introducción que sus cambios se identifican
 * «entre la GTC 223:2025 y la **GTC 223:2011**», y en su numeral 2.1 lista la
 * NTC 6705:2023 entre los documentos «indispensables para la aplicación» de la
 * propia guía. Son tres piezas vivas y complementarias: la 6705 fija los
 * mínimos de los planes, la GTC 223 da la metodología para elaborarlos, la 4595
 * fija el diseño físico. Lo que sí es cierto —y se cuenta— es que la NTC
 * 4595:2025 **intercambió los títulos de las dos** en su capítulo de
 * referencias.
 *
 * **El baseline se resolvió y no hubo que declararlo perdido.** La tercera
 * actualización de 2020 —la edición que el encargo daba por no localizable— sí
 * está publicada por el Ministerio, en el mismo directorio que las demás y con
 * un nombre de archivo que no la nombra. Se compara contra 2020, que es lo
 * correcto.
 *
 * **La pregunta de la obligatoriedad tenía respuesta, y no era «ninguna».** La
 * norma no se declara obligatoria y no trae régimen de transición —comprobado
 * buscando en las 137 páginas—, pero el **artículo 3 de la Resolución 1349 de
 * 2022 del Ministerio de Educación** pone el cumplimiento de la NTC 4595 entre
 * las categorías financiables con recursos de la Ley 21 de 1982 o de la Nación
 * asignados al Ministerio. Ese es el instrumento, y cita «NTC4595» sin año, o
 * sea con referencia flotante. Se declara que la consecuencia —que rige la
 * última edición— es lectura nuestra y no disposición escrita.
 *
 * En el otro sentido, dos verificaciones negativas que valen tanto como las
 * positivas: **el Decreto 1077 de 2015 no menciona la NTC 4595 ni una vez**
 * —cero apariciones en el texto compilado completo—, así que la licencia de
 * construcción no la exige; y los **Documentos Tipo de infraestructura social**
 * la nombran solo dentro de una instrucción entre corchetes dirigida a la
 * entidad, como ejemplo, no como requisito.
 *
 * **La restricción de derechos gobernó la redacción.** Las dos ediciones dicen
 * «prohibida su reproducción» y son de ICONTEC. Aquí se citan numerales, se
 * describen tablas y se dan cifras sueltas —que es cita legítima—, y no se
 * transcribe ninguna tabla completa. La Tabla 9 y la Tabla A.1, que son el
 * corazón de dos cambios, se describen por su contenido y su numeral; no se
 * copian.
 *
 * Nota para el corpus: `agua-en-el-campo-que-permiso-necesita` declara que no
 * cita ninguna NTC porque el catálogo de ICONTEC no es consultable. Sigue
 * siendo cierto y este artículo no lo contradice: la 4595 se puede citar
 * **porque el Ministerio de Educación la publica** con autorización expresa de
 * ICONTEC, no porque el catálogo se haya abierto. De hecho, el estado formal de
 * la NTC 6705 en ese catálogo es una de las cosas que el artículo declara no
 * haber podido verificar.
 *
 * Fechada en agosto de 2026, después del Decreto 974 de 2026 que menciona.
 */
export const post: Post = {
  slug: 'ntc-4595-2025-que-cambio',
  titulo: 'NTC 4595:2025: qué cambió y cuándo obliga',
  pilar: 'institucional',
  fecha: '2026-05-07',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Las áreas por estudiante no se movieron. Lo que cambió es de dónde se ' +
    'sacan: la tabla que daba el tamaño del lote salió del cuerpo normativo, ' +
    'y el patio pasó a ser área de programa.',
  metaDescripcion:
    'Qué cambió en la NTC 4595:2025 frente a la edición de 2020, qué siguió ' +
    'igual y qué instrumento la vuelve exigible en un proyecto público.',
  puerta: 'espacio-publico-y-equipamientos',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'El 19 de noviembre de 2025 el Consejo Directivo de ICONTEC ratificó ' +
        'una nueva edición de la **NTC 4595**, que es la norma con la que se ' +
        'planean y se diseñan los colegios en Colombia. Ese mismo día ratificó ' +
        'otro documento de la misma serie, y el Ministerio de Educación ' +
        'publicó los dos juntos el 2 de diciembre. No hubo comunicado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Conviene empezar por lo que casi nadie dice, porque es lo primero que ' +
        'un equipo necesita saber antes de rehacer nada: **las áreas por ' +
        'estudiante no se movieron.** El aula de preescolar sigue en 2,00 m² ' +
        'por estudiante y la de básica y media en 1,65 m², exactamente las ' +
        'mismas cifras de la edición anterior. Lo que cambió es menos visible ' +
        'y pesa más: cambió el método con el que se calcula el tamaño de un ' +
        'colegio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'No es una ley, y aun así puede costarle el contrato' },
    {
      tipo: 'parrafo',
      texto:
        'La NTC 4595 es una **norma técnica colombiana**, expedida por ' +
        'ICONTEC, que es una entidad privada sin ánimo de lucro y a la vez el ' +
        'organismo nacional de normalización. Esa doble condición no es un ' +
        'detalle: define exactamente cuánto obliga.',
    },
    {
      tipo: 'cita',
      texto:
        'Norma. Documento aprobado por una institución reconocida, que prevé, ' +
        'para un uso común y repetido, reglas, directrices o características ' +
        'para los productos o los procesos y métodos de producción conexos y ' +
        'cuya observancia no es obligatoria. […] Reglamento técnico. Documento ' +
        'en el que se establecen las características de un producto o los ' +
        'procesos y métodos de producción con ellas relacionados, con ' +
        'inclusión de las disposiciones administrativas aplicables y cuya ' +
        'observancia es obligatoria.',
      fuente: 'Decreto 1595 de 2015, artículo 2.2.1.7.2.1, numerales 57 y 85',
    },
    {
      tipo: 'parrafo',
      texto:
        'La propia norma es coherente con eso. **No contiene cláusula de ' +
        'adopción, ni régimen de transición, ni fecha de entrada en vigencia ' +
        'distinta de la de su ratificación, ni declaración alguna de ' +
        'obligatoriedad** —se comprobó buscando esas palabras en las 137 ' +
        'páginas—. Y en su Anexo A hace lo contrario: dice de sus tablas de ' +
        'programas de áreas que «no son de uso obligatorio».',
    },
    {
      tipo: 'parrafo',
      texto:
        'Entonces la pregunta útil no es si la norma obliga, sino **quién se ' +
        'la exige a usted**. Y ahí sí hay respuestas concretas:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Instrumento', 'Qué hace', 'A quién le aplica'],
      filas: [
        [
          '**Resolución 1349 de 2022 del Ministerio de Educación**, artículo 3',
          'Pone «el cumplimiento de la Norma Técnica Colombiana NTC4595» entre las categorías de obra financiables',
          'Todo proyecto financiado o cofinanciado con recursos de la **Ley 21 de 1982** o de la Nación asignados al Ministerio',
        ],
        [
          '**Decreto 1075 de 2015**, artículo 2.3.3.5.10.3.2, numeral 5',
          'Obliga a seguir la NTC 4595 «o la que la reemplace o sustituya» en ambientes pedagógicos',
          '**Residencias escolares** de establecimientos educativos oficiales',
        ],
        [
          '**El pliego o el anexo técnico**',
          'La incorpora como especificación contractual',
          'Quien se presente a ese proceso, en los términos que el pliego fije',
        ],
      ],
      nota:
        'El numeral 5 del Decreto 1075 lo añadió el Decreto 974 de 2026. Su ' +
        'fecha exacta de expedición no se pudo verificar: el anuncio del ' +
        'Ministerio es de agosto de 2026.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos cosas que **no** la exigen, y conviene saberlas porque se ' +
        'suponen. **La licencia de construcción, no**: el Decreto 1077 de ' +
        '2015 no menciona la NTC 4595 ni una sola vez en todo su texto ' +
        'compilado. El curador revisa norma urbanística y reglamentos ' +
        'técnicos, no una norma técnica voluntaria. Y **los Documentos Tipo de ' +
        'infraestructura social tampoco**: la nombran dos veces, las dos ' +
        'dentro de una instrucción entre corchetes dirigida a la entidad ' +
        '—«la Entidad debe verificar si aplican directrices técnicas ' +
        'particulares. Por ejemplo: […] la NTC 4595»—. Es una sugerencia, no ' +
        'un requisito: quien la vuelve exigible es la entidad al diligenciar ' +
        'su anexo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para un colegio privado, la licencia de funcionamiento tampoco la ' +
        'nombra. Lo que el Decreto 1075 pide en la propuesta de proyecto ' +
        'educativo es la «especificación de estándares o criterios adoptados ' +
        'para definir las condiciones de la planta física». Es decir: usted ' +
        'declara qué estándar adoptó. La 4595 entra por ahí, pero porque ' +
        'usted la nombra.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Desde cuándo aplica la edición de 2025' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí hay un detalle de redacción con consecuencias. La Resolución ' +
        '1349 cita «NTC4595» **sin año de edición**. Una referencia sin fecha ' +
        'apunta, por convención, a la última edición vigente del documento ' +
        'referenciado. Como no existe acto de transición entre ediciones, la ' +
        'lectura razonable es que desde la publicación de la edición de 2025 ' +
        'es esa la que aplica a lo que se someta a financiación.',
    },
    {
      tipo: 'nota',
      texto:
        '**Eso es una lectura, no una disposición.** No se encontró ninguna ' +
        'norma, circular ni comunicado del Ministerio ni del fondo de ' +
        'infraestructura educativa que diga qué pasa con los proyectos ' +
        'diseñados bajo la edición anterior. La ausencia de régimen de ' +
        'transición es un hecho verificado; su consecuencia práctica es una ' +
        'inferencia, y se presenta como tal.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Por eso la única regla que le sirve en la mesa es esta: **lea qué ' +
        'edición nombra el documento que se la exige.** Un pliego que dice ' +
        '«NTC 4595» a secas remite a la vigente; uno que dice «NTC 4595 de ' +
        '2020» lo ata a la de 2020 aunque exista una posterior. No son la ' +
        'misma obligación y no se cumplen con los mismos planos. Si no dice ' +
        'año, pregunte por escrito y guarde la respuesta.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué se ratificó el 19 de noviembre de 2025' },
    {
      tipo: 'parrafo',
      texto:
        'No fue una norma: fueron dos documentos, estudiados por el mismo ' +
        'comité técnico —el CTN 162 de construcción de edificaciones ' +
        'escolares— y ratificados el mismo día.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Documento', 'Qué es', 'Edición', 'Páginas'],
      filas: [
        [
          '**NTC 4595:2025**',
          'Planeamiento y diseño para instalaciones y ambientes escolares. **Cómo se diseña** un colegio',
          '5.0',
          '137',
        ],
        [
          '**GTC 223:2025**',
          'Guía para la elaboración de planes de infraestructura escolar. **Con qué método** se decide qué construir',
          '2.0',
          '63',
        ],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y son **tres** piezas, no dos, porque encima de ellas está la **NTC ' +
        '6705:2023**, que fija los mínimos admisibles de un plan de ' +
        'infraestructura escolar. Las tres están vivas y se reparten el ' +
        'trabajo: la 6705 dice qué debe cumplir un plan, la GTC 223 explica ' +
        'cómo elaborarlo —y sucede a la GTC 223 de 2011, no a la 6705—, y la ' +
        '4595 fija el diseño físico de lo que salga de ahí.',
    },
    {
      tipo: 'nota',
      texto:
        'Un detalle que le va a costar una discusión si no lo sabe: **la NTC ' +
        '4595:2025 intercambió los títulos de las dos** en su capítulo de ' +
        'referencias. Lista «NTC 6705, *Guía para la elaboración* de planes de ' +
        'infraestructura escolar» entre las normas técnicas, y «GTC 223. ' +
        '*Elaboración de Planes de Infraestructura*» entre las guías. Los ' +
        'títulos reales de portada son justo al revés. Es una errata de la ' +
        'norma, no un cambio de estatus de ninguna de las dos.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Contra qué edición se está comparando esto' },
    {
      tipo: 'parrafo',
      texto:
        'La NTC 4595 se ratificó por primera vez en 1999 y va por su quinta ' +
        'edición. Tres importan hoy porque las tres circulan:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Edición', 'Editada', 'Páginas', 'Dónde sigue viva'],
      filas: [
        ['Segunda actualización', '27 de noviembre de 2015', '57', 'Pliegos y proyectos antiguos que nunca se actualizaron'],
        ['Tercera actualización', '18 de marzo de 2020', '90', 'La mayoría de los proyectos en curso'],
        ['**Quinta edición, NTC 4595:2025**', '**19 de noviembre de 2025**', '**137**', 'La vigente'],
      ],
      nota:
        'La nomenclatura de ICONTEC cambió por el camino: lo que la edición ' +
        'de 2020 llama «tercera actualización» es la edición 4.0 en la forma ' +
        'de numerar de la de 2025. Por eso la siguiente es la 5.0 y no falta ' +
        'ninguna en medio.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Este artículo compara la edición de 2025 contra la de 2020**, que ' +
        'es la que sustituye. Y se puede hacer porque la edición de 2020 sí ' +
        'está publicada por el Ministerio de Educación, en el mismo directorio ' +
        'que las demás, aunque el nombre del archivo no la identifique y ' +
        'cueste dar con ella.',
    },
    {
      tipo: 'nota',
      texto:
        'La norma de 2025 trae un **Anexo D (Informativo)** de treinta y dos ' +
        'páginas que compara las dos ediciones párrafo por párrafo. Es la ' +
        'fuente más completa que existe y está dentro del documento que el ' +
        'Ministerio publica gratis. Léalo, pero con la guardia arriba: dice de ' +
        'sí mismo que recoge los cambios «principales», omite el capítulo de ' +
        'guías técnicas, y en al menos un punto —el umbral de las cocinas— ' +
        'transcribe el texto viejo en la columna del nuevo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que no cambió, y conviene mirarlo primero' },
    {
      tipo: 'parrafo',
      texto:
        'Es la parte que ahorra dinero, porque evita rehacer lo que está bien. ' +
        'Se verificó abriendo las dos ediciones y comparando numeral contra ' +
        'numeral:',
    },
    {
      tipo: 'lista',
      items: [
        '**Las áreas de aula, idénticas.** Preescolar 2,00 m² por estudiante, básica y media 1,65 m², multigrado 1,80 m². Sobrevive hasta la nota que manda sumar 3 m² para el puesto del maestro cuando el grupo baja de treinta estudiantes.',
        '**Los 2,5 m² por estudiante** de circulaciones, permanencias peatonales y zonas verdes, con no menos del 60 % para zonas verdes y el 30 % de estas en siembra continua de especies nativas o adaptadas.',
        '**La huerta escolar**: mínimo 30 m² hasta 500 estudiantes y 50 m² por encima, con agua de riego prevista.',
        '**El control de isla de calor**: sombrear al menos el 50 % de las zonas duras exteriores, con arbolado a diez años o con pavimentos de índice de reflexión solar no inferior al 28 %.',
        '**La pendiente máxima del 15 %** en el área edificable, y la proporción de lote entre 1:1 y 1:4 como favorable.',
        '**Los porcentajes de uso efectivo** de los ambientes: 80 % del tiempo disponible para los tipo B, C y F, 90 % para los A y D, 100 % para los E. En 2020 iban en prosa; en 2025 son la Tabla 5. Mismo contenido, mejor presentado.',
        '**El capítulo de seguridad, entero.** Estructuras, medios de evacuación, prevención de riesgos, actos vandálicos y mantenimiento quedaron como estaban, incluida la clasificación de las residencias escolares en el Grupo III de la NSR.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Un matiz que sí importa dentro de lo que «no cambió»: la tabla de ' +
        'áreas de aula cambió de título y de encabezado. Donde decía «**número ' +
        'máximo** de estudiantes» ahora dice «**referencia de ocupación**», y ' +
        'una nota nueva remite la capacidad máxima real a los parámetros de la ' +
        'entidad territorial y al proyecto educativo. Las cifras son las ' +
        'mismas; **el tope de cuarenta por aula dejó de ser un tope y pasó a ' +
        'ser una referencia.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que sí cambió' },

    { tipo: 'titulo', nivel: 3, texto: 'La tabla que daba el tamaño del lote salió del cuerpo normativo' },
    {
      tipo: 'parrafo',
      texto:
        'Este es el cambio grande y el que menos se ha contado. En la edición ' +
        'de 2020, la **Tabla 2, «Indicadores básicos de lotes»**, vivía en el ' +
        'capítulo 4, que es normativo, y funcionaba como un catálogo: usted ' +
        'buscaba la fila de su tamaño de colegio —1 440, 960, 480, 240, 90, ' +
        '60 o 30 estudiantes— y leía el área total del lote y los metros ' +
        'cuadrados por estudiante.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En la edición de 2025 esa tabla es la **Tabla A.1 del Anexo A**, que ' +
        'es informativo, y el anexo dice de sus tablas, con todas las letras, ' +
        'que **«no son de uso obligatorio»**. En su lugar, el cuerpo normativo ' +
        'trae las **Tablas 3 y 4**, que no contienen valores sino un ' +
        'procedimiento. La norma las describe como «un simulador de ' +
        'construcción de la plataforma programática» y recomienda llevarlas a ' +
        'una hoja de cálculo.',
    },
    {
      tipo: 'nota',
      texto:
        '**Traducción para quien escribe o evalúa un pliego:** ya no se puede ' +
        'citar una fila. Antes bastaba «el lote cumple la Tabla 2 de la NTC ' +
        '4595»; ahora hay que presentar el cálculo, y el cálculo depende del ' +
        'proyecto educativo de esa institución concreta. Es más trabajo de ' +
        'programación y menos margen para resolverlo por analogía con otro ' +
        'colegio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y arrastró consigo una regla que mueve presupuesto: la nota que ' +
        'exigía **incrementar el lote al menos un 30 % en laderas de más del ' +
        '15 % de pendiente** era una nota a la tabla normativa de 2020 y hoy ' +
        'es una nota a una tabla que la propia norma declara no obligatoria. ' +
        'El requisito de pendiente máxima del 15 % sí sigue en el cuerpo ' +
        'normativo; el sobrecosto de lote asociado a la ladera, no.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'El patio dejó de ser lo que sobra' },
    {
      tipo: 'parrafo',
      texto:
        'Lo genuinamente nuevo son las **áreas libres curriculares**, numeral ' +
        '5.3.6.3 y Tabla 9. La expresión no aparece ni una vez en la edición ' +
        'de 2020, donde el asunto se despachaba en un párrafo que decía que ' +
        'las actividades de los ambientes tipo F **podían** darse también en ' +
        'áreas libres.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ahora es un régimen. El espacio abierto deja de calcularse como ' +
        'residuo —lo que queda del lote después de implantar los bloques— y ' +
        'pasa a programarse como área con función pedagógica, con dos ' +
        'exigencias concretas: que las áreas libres de los ambientes tipo F ' +
        '**alojen al mismo tiempo al menos al 50 % de la población escolar**, ' +
        'y que cada tipo de área libre se dimensione por un índice propio por ' +
        'estudiante.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La Tabla 9 caracteriza esas áreas —plaza de banderas, aula-foro, ' +
        'aulas-grupo, nichos de trabajo colaborativo y áreas de estar y de ' +
        'lectura— y a cada una le asigna un uso, un criterio de ocupación y un ' +
        'índice que va de 0,7 a 1,65 m² por estudiante, con techo en los 2,5 ' +
        'm² por estudiante de la Tabla 2. Y excluye expresamente lo que mucha ' +
        'gente contaría: **canchas múltiples, graderías, parqueaderos y ' +
        'servicios no son área libre curricular.**',
    },
    {
      tipo: 'nota',
      texto:
        'Aquí hay dinero en juego, y en los dos sentidos. Obliga a diseñar —y ' +
        'a costear— espacio exterior que antes se dejaba en «zona verde», pero ' +
        'también **le da argumento técnico a ese espacio ante quien evalúa el ' +
        'presupuesto**, que es justo lo que faltaba para defender el patio de ' +
        'los recortes.',
    },
    {
      tipo: 'diagrama',
      svg: CADENA_DE_AREAS,
      titulo: 'De dónde sale el área de un colegio en la edición de 2025',
      pie:
        'Esquema del estudio, no de la norma. Las cajas remiten al numeral y ' +
        'al número de tabla; los valores están en la NTC 4595:2025, que es un ' +
        'documento con derechos de ICONTEC y no se reproduce aquí.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Ya se puede pasar de cuatro pisos' },
    {
      tipo: 'parrafo',
      texto:
        'La edición de 2020 cerraba en cuatro pisos y punto. La de 2025 ' +
        'mantiene ese techo como regla, pero abre una excepción para «los ' +
        'casos en que, por razones de las condiciones urbanas de deficiencia ' +
        'de suelo institucional educativo, la altura total planteada sea ' +
        'superior a 4 pisos». Es un cambio pensado para el colegio urbano en ' +
        'lote apretado, y no sale gratis: exige garantizar los mínimos de ' +
        'ocupación y evacuación de los títulos J y K de la NSR-10 y de la ' +
        'norma urbanística local aplicando la más exigente, respaldo ' +
        'documental con certificación de la oficina de planeación del ' +
        'municipio, y un plan de evacuación y atención a emergencias más uno ' +
        'de manejo de riesgos.',
    },
    {
      tipo: 'nota',
      texto:
        'Y trae una regla de dosificación en altura que conviene tener a mano ' +
        'desde la volumetría: en los **pisos 4 y 5** se admite hasta el 75 % ' +
        'de uso curricular efectivo, y en los **pisos 6 y 7** hasta el 50 %, ' +
        'dando paso a espacios no curriculares cubiertos. Traducido: cuanto ' +
        'más alto se sube, mayor proporción del piso hay que devolverle al ' +
        'espacio común. Subir no es gratis en área útil.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Los aleros dejaron de contar como área construida' },
    {
      tipo: 'parrafo',
      texto:
        'Pequeño en letra y muy útil en la práctica. El numeral 8.3.3 añade ' +
        'que los sobreanchos de cubierta, los aleros, los montantes de fachada ' +
        'y demás dispositivos que hagan las veces de control bioclimático **no ' +
        'deben sumar como área construida** a las áreas programáticas ni al ' +
        'porcentaje máximo permitido en circulaciones exteriores. Es la ' +
        'diferencia entre poder proteger una fachada del sol y tener que ' +
        'discutirlo con quien cuadra el programa de áreas.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Un ambiente ya no es necesariamente un recinto' },
    {
      tipo: 'parrafo',
      texto:
        'La raíz de todo lo anterior está en la definición del numeral 3.1. En ' +
        '2020, un ambiente era «un lugar o conjunto de lugares estrechamente ' +
        'ligados». En 2025 la definición admite que la actividad escolar se dé ' +
        '**de forma física, remota o virtual, en la escuela o fuera de ella**, ' +
        'y que el ambiente sea construido cubierto **o a cielo abierto**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es una definición escrita después de la pandemia, y la introducción ' +
        'de la norma lo dice: uno de sus tres propósitos es recoger los ' +
        'cambios de habitabilidad que dejó el covid-19 y abrir la puerta a ' +
        'ambientes pedagógicos «no construidos». En la misma línea entra el ' +
        'nuevo numeral 4.3, que reconoce la autonomía de los pueblos indígenas ' +
        'sobre su infraestructura educativa, armonizada con las condiciones ' +
        'básicas de seguridad y accesibilidad.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'El PEC entra al lado del PEI' },
    {
      tipo: 'parrafo',
      texto:
        'El capítulo 5 se llamaba «Proyecto Educativo Institucional (PEI) y ' +
        'ambientes escolares». Ahora se llama «Proyecto Educativo ' +
        'Institucional (PEI), Proyecto Educativo Comunitario (PEC) y ambientes ' +
        'escolares», y la sigla PEC pasó de aparecer tres veces en toda la ' +
        'edición de 2020 a aparecer treinta en la de 2025. No es cosmético ' +
        'para quien trabaja con comunidades étnicas: el programa de áreas ' +
        'puede derivarse del PEC, y eso da apoyo normativo a un programa que ' +
        'no se parece al de un colegio urbano.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'La norma se ata a la planeación' },
    {
      tipo: 'parrafo',
      texto:
        'La edición de 2020 no menciona la NTC 6705 ni una vez, porque no ' +
        'existía. La de 2025 la mete en su objeto y campo de aplicación ' +
        '—numeral 1.1— y le toma definiciones enteras. Y ahí hay un cambio de ' +
        'alcance que pasa desapercibido: en 2020, evaluar y adaptar ' +
        'instalaciones existentes era un uso libre de la 4595; en 2025 se hace ' +
        '«en el marco de lo establecido en la NTC 6705». Para intervenir un ' +
        'colegio que ya existe, la norma lo manda primero a otra norma.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El efecto práctico es una separación de tareas que antes estaba ' +
        'confundida: la planeación —cuántas sedes, dónde, con qué matrícula, ' +
        'qué se amplía y qué se reemplaza— es materia del plan de ' +
        'infraestructura; el diseño físico es materia de la 4595. Si su ' +
        'entidad está armando un plan, el orden importa: primero el plan, ' +
        'después el diseño.',
    },

    { tipo: 'titulo', nivel: 3, texto: 'Instalaciones: dos capítulos nuevos y una ausencia' },
    {
      tipo: 'lista',
      items: [
        '**Dos numerales enteramente nuevos.** El 7.4 exige un sistema de detección y anunciación temprana de incendios, con remisión a la NFPA 72; y el 7.5 incorpora los sistemas de calefacción, ventilación y aire acondicionado, respaldados por un estudio bioclimático y de confort térmico.',
        '**El 7.3 se amplió.** Era «instalaciones de comunicaciones y alarmas»; ahora es «instalaciones de voz, datos, intrusión, circuito cerrado de televisión (CCTV) y sonido», con las normas de cableado estructurado ANSI/TIA 568 y 569, que en 2020 no estaban.',
        '**Las hidrosanitarias pasaron del 7.4 al 7.6** y su título ahora incluye la extinción de incendios.',
        '**La ausencia:** desapareció la referencia al Código Eléctrico Colombiano, la NTC 2050, de la lista de documentos aplicables a las instalaciones eléctricas. Quedan el RETIE y el RETILAP vigentes «y las normas que los complementen».',
        '**El capítulo 8 dejó de llamarse «comodidad» y se llama «confort».** Es terminológico y afecta a los cuatro subcapítulos. Si su pliego cita «comodidad visual, numeral 8.2», está citando la edición vieja.',
      ],
    },

    { tipo: 'titulo', nivel: 3, texto: 'Accesibilidad: gana un baño, pierde una proporción' },
    {
      tipo: 'parrafo',
      texto:
        'Lo que gana es concreto y bienvenido. El numeral 5.4.9 crea la ' +
        '**unidad sanitaria de accesibilidad universal**: debe estar fuera de ' +
        'las baterías sanitarias de estudiantes, tener mínimo 5 m² por juego ' +
        'sanitario, y ser apta para la higiene menstrual y para la población ' +
        'con géneros diversos, cosa que la edición anterior no contemplaba. ' +
        'Los corredores de doble crujía suben a 2,10 m de ancho mínimo, y el ' +
        'área de primer respondiente se cuantifica por primera vez: mínimo 9 ' +
        'm² cubiertos con sanitario anexo accesible.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que pierde también es concreto. El numeral 6.3.3.3 de 2020 exigía ' +
        '**un cupo accesible por cada diez de estacionamiento, dos entre once ' +
        'y cincuenta, y a no más de 50 m de la entrada principal**. El de 2025 ' +
        'pide «mínimo un espacio reservado […] o lo que establezca la norma ' +
        'urbanística aplicable al territorio», aplicando la más exigente, y la ' +
        'ubicación cercana a la entrada pasó de «deben» a «deberían».',
    },
    {
      tipo: 'nota',
      texto:
        'En el anexo informativo de accesibilidad gradual, las cuatro etapas ' +
        'siguen iguales, pero donde 2020 decía «personas con discapacidad» ' +
        '2025 dice «personas con **movilidad reducida**», y donde decía «debe» ' +
        'ahora dice «debería». **No se afirma que la norma haya rebajado ' +
        'ninguna obligación legal**: ese anexo era orientativo antes y lo ' +
        'sigue siendo, y las obligaciones de accesibilidad no nacen de él sino ' +
        'del Decreto 1421 de 2017 y del régimen general de discapacidad.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El patrón: menos cifras propias, más remisiones' },
    {
      tipo: 'parrafo',
      texto:
        'Puestos en fila, los cambios dibujan una decisión editorial ' +
        'consistente. La norma soltó números duros que antes daba ella misma y ' +
        'los devolvió al ordenamiento local o al proyecto educativo de cada ' +
        'institución:',
    },
    {
      tipo: 'lista',
      items: [
        '**El tamaño del lote**: de tabla normativa a anexo informativo.',
        '**El aforo del aula**: de «número máximo de estudiantes» a «referencia de ocupación», con la capacidad real remitida a la entidad territorial.',
        '**El área exterior del preescolar**: 2020 exigía un área no inferior a la mitad del aula; 2025 universaliza el contacto con el exterior para todos los ambientes tipo A, pero sin cifra propia, remitiendo a las áreas libres curriculares.',
        '**Los cupos de parqueo de automóviles**: 2020 fijaba uno por cada cinco de bicicleta, de 20 m²; 2025 remite a los instrumentos de planeación territorial.',
        '**Los cupos accesibles**: se pierde la proporción y la distancia máxima a la entrada.',
        '**El aislamiento de estaciones de servicio**: los 60 m que fijaba la Tabla 1 de 2020 ya no están.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Esto no es necesariamente malo —una norma nacional que fija cupos de ' +
        'parqueo por encima del POT genera contradicciones—, pero cambia el ' +
        'trabajo: **cada cifra que la norma soltó hay que ir a buscarla al ' +
        'POT del municipio**, y hay que documentar de dónde salió. Lo que ' +
        'antes se resolvía citando la 4595, ahora se resuelve citando la 4595 ' +
        'y la norma urbanística, y aplicando la más exigente.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Si su proyecto se diseñó con la edición anterior' },
    {
      tipo: 'parrafo',
      texto:
        'No hay régimen de transición, así que la respuesta no sale de la ' +
        'norma sino de su contrato. En este orden:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Mire qué edición nombra el documento que se la exige.** Pliego, convenio o acta de inicio. Si nombra una edición con año, esa es su obligación aunque exista una posterior.',
        '**Si no nombra año, pregunte por escrito a la entidad** cuál aplica, y guarde la respuesta. Es la clase de ambigüedad que se resuelve barata antes de radicar y cara después.',
        '**Revise primero lo que no cambió.** Si su programa cumple los índices de aula, los 2,5 m² de áreas libres y los porcentajes de uso, ese trabajo está hecho y no se rehace.',
        '**Después mire las áreas libres curriculares.** Es donde un proyecto de 2020 se queda corto, porque el concepto no existía. Suele ser un ejercicio de caracterizar y cualificar el espacio abierto que ya tiene, más que de aumentar área.',
        '**Vaya al POT por las cifras que la norma soltó**: parqueo, cupos accesibles, índices de ocupación. Y déjelo documentado en la memoria.',
        '**No rehaga la implantación por rumor.** Antes de mover un bloque, exija el numeral que obliga a moverlo.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y si el proyecto todavía no arranca, el orden que evita el retrabajo ' +
        'es el de siempre: el programa de áreas se cierra en el ' +
        '[anteproyecto](/blog/que-es-un-anteproyecto), no después. En obra ' +
        'pública, además, lo que se evalúa no es solo el proyecto sino cómo se ' +
        'presenta: eso es materia de [cómo funcionan por dentro los concursos ' +
        'públicos](/blog/concursos-publicos-de-arquitectura). Y si lo que ' +
        'necesita no es qué cambió sino cómo se arma el proyecto desde ' +
        'cero, eso está en [cómo se diseña un colegio en ' +
        'Colombia](/blog/como-se-disena-un-colegio-en-colombia).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que este artículo no afirma' },
    {
      tipo: 'parrafo',
      texto:
        'Por coherencia con el resto de este blog, se declaran los huecos en ' +
        'vez de rellenarlos:',
    },
    {
      tipo: 'lista',
      items: [
        '**No se afirma que exista un acto que adopte la NTC 4595 con carácter general.** Lo que se encontró y se cita es más estrecho: una resolución que la exige como condición de financiación y un artículo del Decreto 1075 que la exige para residencias escolares oficiales. Que no se haya encontrado otro no prueba que no exista.',
        '**No se verificó la fecha exacta del Decreto 974 de 2026**, que añadió ese numeral, ni la de la Resolución 13107 de 2024, que modificó el artículo 3 de la Resolución 1349. El contenido de ambos sí está verificado sobre texto compilado.',
        '**No se revisó si alguna secretaría de educación certificada exige la NTC 4595 por su propio acto administrativo**, para licencia de funcionamiento o para obra. El barrido fue de normativa nacional.',
        '**No se pudo consultar el catálogo de ICONTEC**, que es donde consta el estado formal —vigente, anulada, reemplazada— de cada documento. Lo que se afirma sobre la NTC 6705 y la GTC 223 sale del texto de las propias normas, que es fuente primaria pero no es el catálogo.',
        '**No se reproduce ninguna tabla de la norma.** Las dos ediciones son documentos con derechos de ICONTEC y dicen «prohibida su reproducción». Aquí se citan numerales, se describe qué contiene cada tabla y se dan cifras sueltas; para trabajar hay que abrir el documento.',
        '**No se enumeran todos los cambios.** El Anexo D de la edición de 2025 ocupa treinta y dos páginas. Este artículo cuenta los que mueven el diseño o el presupuesto, no los de redacción.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Las dos ediciones y la guía se descargan gratis del sitio del ' +
        'Ministerio de Educación, y están enlazadas abajo. Antes de tomar una ' +
        'decisión cara sobre un proyecto concreto, ábralas: es media hora, y ' +
        'es lo que separa una afirmación de una cita.',
    },
  ],
  etiquetas: ['nacional', 'entidad', 'norma-urbana'],
  fuentes: [
    {
      titulo: 'NTC 4595:2025, Planeamiento y diseño para instalaciones y ambientes escolares, edición 5.0',
      editor: 'ICONTEC, publicada por el Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/1780/articles-355996_recurso_14.pdf',
      fecha: '2025-11-19',
    },
    {
      titulo: 'GTC 223:2025, Guía para la elaboración de planes de infraestructura escolar, edición 2.0',
      editor: 'ICONTEC, publicada por el Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/1780/articles-355996_recurso_13.pdf',
      fecha: '2025-11-19',
    },
    {
      titulo: 'NTC 4595 (tercera actualización), Planeamiento y diseño de instalaciones y ambientes escolares',
      editor: 'ICONTEC, publicada por el Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/1780/articles-355996_recurso_10.pdf',
      fecha: '2020-03-18',
    },
    {
      titulo: 'NTC 6705:2023, Elaboración de planes de infraestructura escolar, edición 1.0',
      editor: 'ICONTEC, publicada por el Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/1780/articles-355996_recurso_12.pdf',
      fecha: '2023-11-15',
    },
    {
      titulo: 'Normas y lineamientos de infraestructura educativa: dónde se publican las dos ediciones y la guía',
      editor: 'Ministerio de Educación Nacional',
      url: 'https://www.mineducacion.gov.co/portal/anos/2017/355996:Normas-y-Lineamientos-de-Infraestructura-Educativa',
      fecha: '2025-12-02',
    },
    {
      titulo: 'Resolución 1349 de 2022, art. 3: el cumplimiento de la NTC 4595 como categoría financiable',
      editor: 'Ministerio de Educación Nacional',
      url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=122407&dt=S',
      fecha: '2022-02-10',
    },
    {
      titulo: 'Decreto 1595 de 2015, art. 2.2.1.7.2.1: qué es una norma y qué es un reglamento técnico',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62889',
      fecha: '2015-08-05',
    },
    {
      titulo: 'Decreto 1075 de 2015, único reglamentario del sector educación: residencias escolares y licencia de funcionamiento',
      editor: 'Ministerio de Educación Nacional',
      url: 'https://normograma.info/men/compilacion/compilacion/docs/decreto_1075_2015.htm',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1077 de 2015, único reglamentario del sector vivienda: no menciona la NTC 4595',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 115 de 1994, art. 138: el Ministerio define los requisitos mínimos de infraestructura',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=292',
      fecha: '1994-02-08',
    },
    {
      titulo: 'Decreto 1421 de 2017, atención educativa a la población con discapacidad',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87040',
      fecha: '2017-08-29',
    },
  ],
}
