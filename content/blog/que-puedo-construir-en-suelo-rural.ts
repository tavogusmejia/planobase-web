import type { Post } from '@/lib/types'

/**
 * La entrada del pilar de casa campestre por donde llega casi todo el mundo:
 * alguien que ya compró, o está por comprar, un lote fuera del perímetro
 * urbano y descubre que el suelo rural no es «lo mismo pero con más espacio».
 *
 * Todo el material está verificado y publicado en el repositorio, en «Qué puedo
 * construir en mi lote». Lo que este artículo hace es sacarlo del contexto
 * urbano y desarrollarlo: la unidad agrícola familiar con la nulidad absoluta
 * del artículo 44 de la Ley 160, la unidad mínima de actuación de dos hectáreas
 * en suburbano con su excepción, el índice de ocupación del 30 % para comercio,
 * servicios e industria, y la corrección que casi nadie hace —**la corporación
 * autónoma regional no fija la unidad agrícola familiar**, fija densidades en
 * suburbano; son dos competencias distintas—.
 *
 * Lo que se decidió no publicar:
 *
 * - **Ninguna cifra de densidad, de UAF ni de umbral de suburbanización.** Son
 *   municipales y regionales, cambian por zona y publicarlas como si fueran
 *   nacionales es el error que este blog corrige en otros temas.
 * - **Ningún régimen de vivienda campestre concreto.** El POT de cada municipio
 *   decide si existe la categoría y con qué condiciones. Aquí solo se enseña
 *   qué preguntar.
 *
 * Fechada en julio de 2024: no cita nada posterior a 2021 y es perenne.
 */
export const post: Post = {
  slug: 'que-puedo-construir-en-suelo-rural',
  titulo: 'Qué puedo construir en suelo rural',
  pilar: 'casa-campestre',
  fecha: '2024-07-09',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'El suelo rural no es suelo urbano con más espacio: se rige por reglas ' +
    'más duras y por tres autoridades distintas. Qué se puede construir, quién ' +
    'lo decide y cuál es el límite que anula la escritura.',
  metaDescripcion:
    'Qué se puede construir en suelo rural en Colombia: unidad agrícola ' +
    'familiar, suelo suburbano, densidades y quién decide cada cosa.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Casi todo el mundo llega al suelo rural con una idea del suelo urbano: ' +
        'más espacio, menos vecinos, la misma lógica. Es exactamente al revés. ' +
        '**El suelo rural tiene reglas más duras que el urbano**, y su ' +
        'incumplimiento se sanciona de una manera que en la ciudad no existe.',
    },
    {
      tipo: 'nota',
      texto:
        'La regla que ordena todo el tema: **la norma nacional define el ' +
        'vocabulario; el POT de su municipio pone los números.** Ninguna ley ' +
        'nacional dice cuánto se puede construir en un predio rural concreto. ' +
        'Lo que sigue no le va a dar su respuesta: le va a dar las preguntas y ' +
        'a quién hacérselas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El límite que anula la escritura' },
    {
      tipo: 'parrafo',
      texto:
        'Antes que cualquier índice, cualquier altura y cualquier uso, está ' +
        'esto:',
    },
    {
      tipo: 'cita',
      texto:
        'Los predios rurales no podrán fraccionarse por debajo de la extensión ' +
        'determinada como Unidad Agrícola Familiar para el respectivo municipio ' +
        'o zona. En consecuencia, so pena de nulidad absoluta del acto o ' +
        'contrato, no podrá llevarse a cabo actuación o negocio alguno del cual ' +
        'resulte la división de un inmueble rural cuyas superficies sean ' +
        'inferiores a la señalada.',
      fuente: 'Ley 160 de 1994, artículo 44',
    },
    {
      tipo: 'parrafo',
      texto:
        'La **unidad agrícola familiar** es la extensión mínima que se ' +
        'considera necesaria para que una familia viva de ese predio. Varía por ' +
        'municipio y por zona: no hay una cifra nacional, y quien le dé una la ' +
        'está inventando.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sí es nacional es la consecuencia. **Nulidad absoluta significa ' +
        'que el negocio no existió.** No es una multa, no se subsana pagando y ' +
        'no se cura con el paso del tiempo. Es la razón por la que hay parcelas ' +
        'rurales vendidas, pagadas, cercadas y hasta ocupadas que su comprador ' +
        'no puede escriturar ni licenciar.',
    },
    {
      tipo: 'nota',
      texto:
        'Corrección de un error muy corriente, que se repite incluso entre ' +
        'profesionales: **la corporación autónoma regional no fija la unidad ' +
        'agrícola familiar.** Eso corresponde a la autoridad nacional de ' +
        'tierras. Lo que sí hace la corporación es definir las densidades ' +
        'máximas del suelo suburbano. Son dos competencias distintas y ' +
        'preguntarle a la entidad equivocada le costará semanas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Tres autoridades, no una' },
    {
      tipo: 'parrafo',
      texto:
        'En la ciudad basta con el municipio. En el campo, no. Saber quién ' +
        'decide qué es la mitad del trabajo:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Quién', 'Qué decide'],
      filas: [
        ['**Autoridad nacional de tierras**', 'La unidad agrícola familiar del municipio o la zona. Es el límite de fraccionamiento'],
        ['**Corporación autónoma regional**', 'Densidades máximas en suelo suburbano, umbral de suburbanización, rondas hídricas, concesiones de agua y permisos de vertimiento'],
        ['**Municipio, por su POT**', 'La clasificación del suelo rural, las categorías, los usos, los índices y si existe o no la categoría de vivienda campestre'],
      ],
      nota:
        'A esto se suma, en cada trámite, quien expide la licencia: la ' +
        'curaduría urbana o, donde no hay curador designado, la oficina de ' +
        'planeación del municipio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El suelo rural no es uno solo' },
    {
      tipo: 'parrafo',
      texto:
        'La norma nacional divide el suelo rural en dos grandes bloques, y la ' +
        'diferencia entre ellos decide casi todo:',
    },
    {
      tipo: 'lista',
      items: [
        '**Categorías de protección.** Áreas de conservación ambiental, de producción agrícola y forestal, de amenaza y riesgo, de infraestructura de servicios públicos y de patrimonio. Aquí el suelo **no es urbanizable**, y no lo vuelve urbanizable ningún trámite.',
        '**Categorías de desarrollo restringido.** El suelo rural donde, cumpliendo condiciones, se pueden autorizar actuaciones: suelo suburbano, centros poblados rurales, áreas para vivienda campestre y áreas para equipamientos.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'El nombre lo dice: **desarrollo restringido, no desarrollo libre.** Que ' +
        'un predio esté en esta categoría no significa que se pueda parcelar. ' +
        'Significa que el POT puede permitirlo, bajo condiciones que el propio ' +
        'POT define.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Suelo suburbano: las dos reglas nacionales' },
    {
      tipo: 'parrafo',
      texto:
        'El suburbano es la franja rural donde se mezclan usos urbanos y ' +
        'rurales, y es donde se ha construido la mayor parte de la vivienda ' +
        'campestre del país. Tiene dos reglas nacionales que conviene conocer ' +
        'de memoria.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'La unidad mínima de actuación: dos hectáreas' },
    {
      tipo: 'parrafo',
      texto:
        'En suelo suburbano, la unidad mínima de actuación **no puede ser ' +
        'inferior a dos hectáreas**, y esa superficie es la que habilita a ' +
        'presentar un proyecto de parcelación.',
    },
    {
      tipo: 'nota',
      texto:
        'Con una excepción que resuelve el caso más común: **la construcción de ' +
        'una sola casa de habitación del propietario** no está sujeta a la ' +
        'unidad mínima de actuación. Si lo suyo es una casa para vivir, y no un ' +
        'proyecto para vender lotes, esta regla no lo bloquea.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'El índice de ocupación del 30 %' },
    {
      tipo: 'parrafo',
      texto:
        'Para comercio, servicios e industria en suelo rural y suburbano, el ' +
        'índice de ocupación **no puede superar el 30 % del área del predio**. ' +
        'El resto se destina a la conservación o recuperación de la vegetación ' +
        'nativa.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es un límite nacional, no municipal: un POT puede ser más restrictivo, ' +
        'nunca más permisivo. Y se aplica sobre el área del predio, lo que en el ' +
        'campo suele ser una superficie considerable.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Densidad: el número que decide cuántas casas' },
    {
      tipo: 'parrafo',
      texto:
        'En rural no se habla de índice de construcción como en la ciudad: se ' +
        'habla de **densidad máxima de vivienda**, expresada en viviendas por ' +
        'hectárea. Es el número que decide si un globo de terreno da para dos ' +
        'casas o para veinte.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y aquí está la particularidad que confunde a mucha gente: **esa ' +
        'densidad la fija la corporación autónoma regional**, no el municipio, ' +
        'aunque el POT la recoja. Dos municipios vecinos bajo corporaciones ' +
        'distintas pueden tener regímenes muy diferentes.',
    },
    {
      tipo: 'nota',
      texto:
        'No publico cifras de densidad. Cambian por corporación, por zona y por ' +
        'categoría, y una cifra equivocada aquí es un proyecto entero mal ' +
        'dimensionado. **Pídala por escrito a la corporación de su región, ' +
        'nombrando el predio.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Vivienda campestre: existe solo si el POT la crea' },
    {
      tipo: 'parrafo',
      texto:
        '«Casa campestre» no es una categoría nacional automática. Es una de ' +
        'las áreas de desarrollo restringido que el POT **puede** delimitar, con ' +
        'sus propias condiciones de área mínima de predio, densidad, ' +
        'aislamientos y porcentaje de suelo que debe quedar libre.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si su predio no está dentro de un área delimitada como tal, lo que ' +
        'aplica es el régimen general del suelo rural o suburbano donde esté. Y ' +
        'si está en categoría de protección, no aplica ninguno: no se construye.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las restricciones ambientales que no aparecen en la escritura' },
    {
      tipo: 'lista',
      items: [
        '**Ronda hídrica.** Treinta metros a cada lado de los cauces y cien metros alrededor de los nacimientos. Es suelo de protección: no se construye y no se compensa.',
        '**Áreas protegidas.** Si el predio está dentro de una, el régimen de usos lo fija el plan de manejo del área, no el POT.',
        '**Aprovechamiento forestal.** Talar árboles en el predio requiere permiso de la corporación, y no siempre se concede.',
        '**Agua y vertimientos.** Sin red pública, el agua requiere concesión y las aguas residuales requieren permiso de vertimiento o un sistema de tratamiento aprobado. Son trámites ambientales con sus propios tiempos, no un renglón del presupuesto de obra.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Ninguna de estas restricciones aparece en el certificado de tradición. ' +
        'Se consultan ante la corporación autónoma regional, y **conviene ' +
        'hacerlo antes de firmar**, no después.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las licencias que hacen falta' },
    {
      tipo: 'tabla',
      cabeceras: ['Qué quiere hacer', 'Qué licencia'],
      filas: [
        ['Dividir un predio rural en varios', '**Licencia de subdivisión**, y siempre por encima de la unidad agrícola familiar'],
        ['Crear predios con obras de infraestructura para vivienda campestre', '**Licencia de parcelación**'],
        ['Construir la casa', '**Licencia de construcción**, en la modalidad que corresponda'],
        ['Construir sobre lo ya construido', 'Licencia de construcción en ampliación, adecuación, modificación o reforzamiento'],
      ],
      nota:
        'Son licencias distintas y a veces se necesitan dos. Construir sin la ' +
        'que corresponde en suelo rural expone a las mismas sanciones que en la ' +
        'ciudad, con el agravante de que muchas infracciones rurales tocan ' +
        'además el régimen ambiental.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las siete preguntas, en orden' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**¿Cuál es la unidad agrícola familiar de esta zona?** Si el predio está por debajo y resultó de una división, hay un problema de raíz.',
        '**¿En qué categoría de suelo rural está?** Protección o desarrollo restringido. Es la pregunta que decide si hay proyecto.',
        '**¿Es suburbano?** Si lo es, aplican la unidad mínima de actuación y las densidades de la corporación.',
        '**¿Existe área de vivienda campestre delimitada, y este predio está dentro?**',
        '**¿Cuál es la densidad máxima, por escrito y de la corporación?**',
        '**¿Hay ronda hídrica, área protegida o zona de riesgo sobre el predio?**',
        '**¿Cómo se resuelven agua y aguas residuales, y qué permisos exige cada solución?**',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Las siete se responden con documentos y consultas gratuitas, y las ' +
        'siete se pueden hacer antes de comprar. **Ninguna se puede responder ' +
        'mirando el lote**, que es exactamente lo que casi todo el mundo hace ' +
        'antes de firmar.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'suelo-rural', 'norma-urbana', 'licencia'],
  fuentes: [
    {
      titulo: 'Ley 160 de 1994, sistema nacional de reforma agraria, artículos 38 y 44',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9779',
      fecha: '1994-08-03',
    },
    {
      titulo: 'Ley 388 de 1997, de desarrollo territorial: clases de suelo',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
      fecha: '1997-07-18',
    },
    {
      titulo: 'Decreto 1077 de 2015, único reglamentario del sector vivienda, ciudad y territorio: ordenamiento del suelo rural y licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1076 de 2015, único reglamentario del sector ambiente',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Registro Único Nacional de Áreas Protegidas',
      editor: 'Parques Nacionales Naturales de Colombia',
      url: 'https://runap.parquesnacionales.gov.co/',
      fecha: null,
    },
  ],
}
