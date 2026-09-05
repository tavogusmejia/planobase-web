import type { Post } from '@/lib/types'

/**
 * La pieza de síntesis del pilar de casa campestre: no aporta norma nueva,
 * ordena por costo la que ya está verificada y publicada en el repositorio.
 * Es también la que mejor dirige a la puerta de proyecto nuevo, porque cada
 * error se evita en la etapa anterior a la que el cliente cree que está.
 *
 * Los diez salen todos de material ya comprobado: la nulidad absoluta del
 * artículo 44 de la Ley 160, la separación de competencias entre autoridad de
 * tierras, corporación autónoma y municipio, que el concepto de norma no otorga
 * derechos y solo radicar congela la norma, las vigencias por modalidad del
 * Decreto 1783, la reserva de firma del artículo 26 de la Ley 400, y la lógica
 * de independencia de la interventoría.
 *
 * Dos decisiones sobre cifras:
 *
 * 1. **El bloque de lote, diseño, licencias y trámites se declara como orden de
 *    magnitud propio, no como estadística.** Es útil y es honesto decir de
 *    dónde sale; presentarlo como dato publicado no lo sería.
 * 2. **No se publica la variación porcentual de la mano de obra**, aunque el
 *    hecho cualitativo —sube más rápido que el índice total, así que indexar
 *    con el total la subestima— sí se sostiene y sí se publica. Un porcentaje
 *    de variación anual sin su boletín y su fecha caduca en un trimestre.
 *
 * Fechada en noviembre de 2024.
 */
export const post: Post = {
  slug: 'diez-errores-mas-caros-casa-campestre',
  titulo: 'Los diez errores más caros al construir una casa campestre',
  pilar: 'casa-campestre',
  fecha: '2024-11-19',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Ordenados por lo que cuestan, no por lo frecuentes que son. El primero ' +
    'puede dejar un predio sin escriturar para siempre; el último solo cuesta ' +
    'dinero. Los diez se evitan antes de que empiece la obra.',
  metaDescripcion:
    'Los errores más caros al construir una casa campestre en Colombia y en ' +
    'qué etapa se evita cada uno, con la norma que los explica.',
  puerta: 'proyecto-nuevo',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Los errores de una casa campestre no se reparten parejo. Unos cuestan ' +
        'dinero y se corrigen; otros dejan un predio inservible y no se ' +
        'corrigen con nada.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Van ordenados por costo, de mayor a menor, y cada uno con la etapa en ' +
        'que se evita. Que casi siempre es una etapa antes de aquella en la que ' +
        'el propietario cree que está.',
    },

    { tipo: 'titulo', nivel: 2, texto: '1. Comprar un predio por debajo de la unidad agrícola familiar' },
    {
      tipo: 'parrafo',
      texto:
        'Es el error más caro que existe en suelo rural, y el único cuya ' +
        'consecuencia no es económica sino jurídica.',
    },
    {
      tipo: 'cita',
      texto:
        '**Salvo las excepciones que se señalan en el artículo siguiente**, los ' +
        'predios rurales no podrán fraccionarse por debajo de la extensión ' +
        'determinada por el INCORA como Unidad Agrícola Familiar para el ' +
        'respectivo municipio o zona. En consecuencia, so pena de nulidad ' +
        'absoluta del acto o contrato, no podrá llevarse a cabo actuación o ' +
        'negocio alguno del cual resulte la división de un inmueble rural ' +
        'cuyas superficies sean inferiores a la señalada como Unidad Agrícola ' +
        'Familiar para el correspondiente municipio por el INCORA.',
      fuente: 'Ley 160 de 1994, artículo 44',
    },
    {
      tipo: 'nota',
      texto:
        'Esa primera frase importa y esta pieza la había recortado. La ' +
        'prohibición **no es absoluta**: el artículo 45 trae cuatro ' +
        'excepciones, y una de ellas —los actos que constituyen propiedades ' +
        'de superficie menor para un fin principal distinto a la explotación ' +
        'agrícola— es justo la que suele aplicar a una casa campestre. Las ' +
        'cuatro, con la condición de que quede constancia en la escritura, ' +
        'están en [comprar un lote rural](/blog/comprar-lote-rural-que-verificar-antes-de-firmar). ' +
        'El INCORA ya no existe: sus funciones sobre la unidad agrícola ' +
        'familiar están hoy en la Agencia Nacional de Tierras.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Nulidad absoluta significa que el negocio no existió.** No hay ' +
        'multa que lo subsane, no se cura con el tiempo y no lo arregla ningún ' +
        'trámite posterior. Hay parcelas rurales pagadas, cercadas y ocupadas ' +
        'que su comprador no puede escriturar ni licenciar.',
    },
    {
      tipo: 'nota',
      texto:
        '**Se evita antes de firmar la promesa**, preguntando cuál es la unidad ' +
        'agrícola familiar de la zona y de dónde salió el predio. Cuesta una ' +
        'consulta.',
    },

    { tipo: 'titulo', nivel: 2, texto: '2. Comprar suelo que no es urbanizable, creyendo que va a serlo' },
    {
      tipo: 'parrafo',
      texto:
        'Dos versiones del mismo error. La primera es el suelo de expansión sin ' +
        'plan parcial adoptado: hasta que ese plan no se apruebe, allí solo se ' +
        'permiten usos agrícolas y forestales. La segunda es el suelo rural en ' +
        'categoría de protección, que sencillamente no es urbanizable y no lo ' +
        'vuelve urbanizable ningún trámite.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El vendedor no siempre miente. «Va a ser urbanizable» puede ser cierto. ' +
        'Lo que nadie puede decirle es cuándo, y comprar hoy pagando el precio ' +
        'de ese futuro es asumir un riesgo que no se puede cuantificar.',
    },
    {
      tipo: 'nota',
      texto:
        '**Se evita con el concepto de norma urbanística**, antes de la ' +
        'promesa. La consulta verbal sobre la norma vigente es gratuita por ' +
        'norma; el concepto **por escrito**, que es el que sirve para ' +
        'reclamar, cuesta 8,34 UVT en curaduría.',
    },

    { tipo: 'titulo', nivel: 2, texto: '3. Dejar el agua y las aguas residuales para el final' },
    {
      tipo: 'parrafo',
      texto:
        'En la ciudad, los servicios son un renglón del presupuesto. En el ' +
        'campo, sin red pública, son **dos trámites ambientales completos**: la ' +
        'concesión de aguas para la fuente propia y el permiso de vertimiento o ' +
        'el sistema de tratamiento aprobado para las residuales.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los tramita la corporación autónoma regional, no el municipio, y son ' +
        'actuaciones administrativas con su solicitud, su visita y su acto ' +
        'administrativo. Cuando el expediente de licencia los exige, **son ' +
        'previos, no paralelos**.',
    },
    {
      tipo: 'nota',
      texto:
        '**Se evita en la etapa de anteproyecto.** Definen dónde y cómo se para ' +
        'la casa tanto como el estudio de suelos, y llegan tarde porque parecen ' +
        'un tema de obra cuando son un tema de trámite.',
    },

    { tipo: 'titulo', nivel: 2, texto: '4. Preguntarle a la autoridad equivocada' },
    {
      tipo: 'parrafo',
      texto:
        'En el campo hay tres autoridades que deciden cosas distintas, y ' +
        'confundirlas cuesta semanas:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Quién', 'Qué decide', 'Qué NO decide'],
      filas: [
        ['**Autoridad nacional de tierras**', 'La unidad agrícola familiar', 'Densidades, usos, índices'],
        ['**Corporación autónoma regional**', 'Densidades en suburbano, rondas hídricas, agua y vertimientos, aprovechamiento forestal', '**La unidad agrícola familiar**'],
        ['**Municipio, por su POT**', 'Clasificación del suelo, categorías, usos, índices', 'Los permisos ambientales'],
      ],
      nota:
        'La confusión más común, y se repite hasta entre profesionales, es ' +
        'creer que la corporación autónoma regional fija la unidad agrícola ' +
        'familiar. No la fija.',
    },

    { tipo: 'titulo', nivel: 2, texto: '5. Creer que el concepto de norma le da un derecho' },
    {
      tipo: 'cita',
      texto:
        'La expedición de estos conceptos no otorga derechos ni obligaciones a ' +
        'su peticionario y no modifica los derechos conferidos mediante ' +
        'licencias que estén vigentes o que hayan sido ejecutadas.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'El concepto es una fotografía informativa de la norma en una fecha. **Lo ' +
        'único que congela la norma es radicar la solicitud de licencia en legal ' +
        'y debida forma**, con el expediente completo. Un proyecto que se ' +
        'diseñó durante dos años sobre un concepto de hace dos años puede ' +
        'encontrarse con otra norma.',
    },

    { tipo: 'titulo', nivel: 2, texto: '6. Encargar el estudio de suelos al final' },
    {
      tipo: 'parrafo',
      texto:
        'El estudio de suelos condiciona la cimentación, la cimentación ' +
        'condiciona la estructura y la estructura condiciona el proyecto ' +
        'arquitectónico. Encargarlo cuando ya está el plano obliga a rehacer ' +
        'hacia atrás, y en terrenos con pendiente el rehacer puede ser total.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Circula que por debajo de cierta área no hace falta. **Conviene ' +
        'desconfiar de esa afirmación.** Lo que sí se sostiene es que la ley ' +
        'exige un ingeniero geotecnista responsable incluso en las viviendas de ' +
        'uno y dos pisos que quedan exceptuadas de supervisión técnica ' +
        'independiente: la excepción es de supervisión, no de estudio.',
    },
    {
      tipo: 'nota',
      texto:
        '**Se evita encargándolo apenas se tiene el lote**, incluso antes de ' +
        'dibujar. Es de lo poco que se puede adelantar sin haber decidido nada ' +
        'sobre la casa.',
    },

    { tipo: 'titulo', nivel: 2, texto: '7. Presupuestar la obra y olvidar todo lo demás' },
    {
      tipo: 'parrafo',
      texto:
        'El costo de obra es lo que cuesta levantar la casa. **Excluye el lote, ' +
        'los diseños, las licencias y los trámites**, y ese bloque no es ' +
        'marginal: en nuestra experiencia puede sumar del orden de una cuarta ' +
        'parte a un 40 % adicional sobre el costo de obra.',
    },
    {
      tipo: 'nota',
      texto:
        'Digo «del orden de» a propósito. **Es un orden de magnitud propio, no ' +
        'una estadística publicada**, porque no existe fuente colombiana ' +
        'oficial ni gremial que lo mida. Lo que sí es un hecho verificable es la ' +
        'exclusión: comparar un precio de venta con un costo de obra induce a ' +
        'error, siempre.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En el campo hay además dos renglones que en la ciudad casi no existen ' +
        'y que se olvidan sistemáticamente: **el acceso** —la vía interna, su ' +
        'sostenimiento durante la obra y el sobrecosto de transportar ' +
        'materiales hasta allá— y **la acometida de energía**, que puede ' +
        'requerir postes y transformador propios.',
    },

    { tipo: 'titulo', nivel: 2, texto: '8. Indexar el presupuesto con el índice equivocado' },
    {
      tipo: 'parrafo',
      texto:
        'Un presupuesto hecho hace un año hay que actualizarlo, y para eso ' +
        'existen los índices oficiales de costos de construcción. El error está ' +
        'en aplicar el índice total a todo el presupuesto.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**La mano de obra viene subiendo bastante más rápido que el índice ' +
        'total.** Quien actualiza un presupuesto entero con el índice general ' +
        'subestima sistemáticamente el capítulo de mano de obra, que en una ' +
        'casa campestre suele pesar más que en un edificio, porque hay menos ' +
        'repetición y menos industrialización.',
    },
    {
      tipo: 'nota',
      texto:
        'No publico aquí las variaciones porcentuales: cambian cada mes y una ' +
        'cifra sin su boletín y su fecha es una mentira con vencimiento. ' +
        '**Actualice con el boletín vigente y separe mano de obra de ' +
        'materiales.**',
    },

    { tipo: 'titulo', nivel: 2, texto: '9. Contar con treinta y seis meses de licencia' },
    {
      tipo: 'parrafo',
      texto:
        'Es cierto que la vigencia subió a 36 meses. **No para todas las ' +
        'licencias.**',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Modalidad', 'Vigencia', 'Prórroga'],
      filas: [
        ['Urbanización, parcelación y construcción en **obra nueva**', '36 meses', 'Una vez, +12'],
        ['Ampliación, adecuación, modificación, restauración, reforzamiento, demolición', '**24 meses**', 'Una vez, +12'],
        ['Subdivisión', '12 meses', 'Improrrogable'],
      ],
      nota:
        'Decreto 1783 de 2021, artículo 27. La prórroga se pide a más tardar ' +
        '**30 días hábiles antes** del vencimiento —hábiles, no calendario—, ' +
        'con documentación completa y manifestación bajo juramento de que la ' +
        'obra ya inició.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Quien planea una ampliación contando con tres años y se acuerda de la ' +
        'prórroga el mes anterior, ya no llega. Y una licencia vencida con obra ' +
        'a medias es un problema mayor que empezar tarde.',
    },

    { tipo: 'titulo', nivel: 2, texto: '10. Creer que una sola firma cubre todo' },
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
        'suelos.** No es una política comercial: la ley reserva esas firmas a un ' +
        'ingeniero civil, y quien firma responde legalmente. Si alguien le ' +
        'ofrece «todo incluido» a un precio redondo, pregunte quién firma cada ' +
        'plano.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Del mismo lado está la verificación de la matrícula profesional. El ' +
        'registro es público y gratuito, y sin matrícula vigente no hay ' +
        'licencia.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El error número once' },
    {
      tipo: 'parrafo',
      texto:
        'No cabe en la lista porque no es un error puntual sino una situación: ' +
        '**construir a distancia sin nadie que vigile la obra por usted.** Una ' +
        'casa campestre casi siempre está lejos de donde vive el propietario, y ' +
        'ese es exactamente el caso en que la interventoría deja de ser un ' +
        'gasto y pasa a ser su presencia técnica.',
    },
    {
      tipo: 'nota',
      texto:
        'La pregunta que lo revela todo: **¿quién despide al interventor si el ' +
        'constructor se queja de él?** Si la respuesta no es «yo», no hay ' +
        'interventoría.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Dónde se evitan, en una sola tabla' },
    {
      tipo: 'tabla',
      cabeceras: ['Error', 'Etapa en que se evita'],
      filas: [
        ['Unidad agrícola familiar', '**Antes de la promesa de compraventa**'],
        ['Suelo no urbanizable', '**Antes de la promesa de compraventa**'],
        ['Agua y aguas residuales', 'Anteproyecto'],
        ['Autoridad equivocada', 'Primera semana de consultas'],
        ['Confiar en el concepto de norma', 'Al radicar la licencia'],
        ['Estudio de suelos tardío', 'Apenas se tiene el lote'],
        ['Presupuesto incompleto', 'Antes de comprometerse con un valor'],
        ['Indexación con el índice equivocado', 'Al actualizar el presupuesto'],
        ['Vigencia de la licencia', 'Al recibir la licencia, no al final'],
        ['Firmas y matrícula', 'Al contratar'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Ocho de los diez se evitan **antes de que exista un plano**. Esa es la ' +
        'moraleja real de la lista: en una casa campestre, la mayor parte del ' +
        'dinero se gana o se pierde en las semanas en que todavía no parece que ' +
        'esté pasando nada.',
    },
  ],
  etiquetas: ['nacional', 'propietario', 'suelo-rural', 'costos', 'licencia'],
  fuentes: [
    {
      titulo: 'Ley 160 de 1994, unidad agrícola familiar y fraccionamiento de predios rurales',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9779',
      fecha: '1994-08-03',
    },
    {
      titulo: 'Decreto 1077 de 2015, único reglamentario del sector vivienda, ciudad y territorio',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1783 de 2021, artículo 27: vigencia de las licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175086',
      fecha: '2021-12-20',
    },
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Decreto 1076 de 2015, único reglamentario del sector ambiente',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 1796 de 2016, supervisión técnica independiente',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
  ],
}
