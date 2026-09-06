import type { Post } from '@/lib/types'

/**
 * Perenne del pilar de proceso. Es la pieza que ordena todas las demás: el mapa
 * completo del recorrido, con los plazos que sí están en norma y una
 * advertencia honesta sobre los que no.
 *
 * Los plazos legales salen del Decreto 1077 —45 días hábiles, silencio
 * administrativo positivo, vigencias por modalidad, prórroga con 30 días
 * hábiles— y las etapas de diseño del Decreto 2090. Los tiempos de las etapas
 * que dependen del cliente y del mercado se declaran como estimación, no como
 * dato.
 *
 * Fechada en septiembre de 2024.
 */
export const post: Post = {
  slug: 'del-lote-a-la-licencia',
  titulo: 'Del lote a la licencia: el recorrido completo',
  pilar: 'proceso',
  fecha: '2024-09-09',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Nueve etapas entre comprar un lote y tener la licencia en la mano. Cuáles ' +
    'tienen plazo de ley y cuáles dependen de usted, qué se puede hacer en ' +
    'paralelo, y los tres puntos donde casi todos los proyectos se atrasan.',
  metaDescripcion:
    'Las etapas entre comprar un lote y obtener la licencia de construcción ' +
    'en Colombia, con los plazos que fija la norma.',
  puerta: 'proyecto-nuevo',
  etiquetas: ['nacional', 'propietario', 'licencia', 'norma-urbana', 'contrato'],
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        '«¿Cuánto se demora esto?» es la pregunta que más se hace y la peor ' +
        'respondida, porque la respuesta honesta tiene dos partes: **hay etapas ' +
        'con plazo de ley y etapas que dependen enteramente de qué tan rápido ' +
        'decida usted.** Y las segundas suelen ser las largas.',
    },
    {
      tipo: 'parrafo',
      texto: 'Este es el recorrido completo, con lo que se sabe y lo que no.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El recorrido' },
    {
      tipo: 'tabla',
      cabeceras: ['Etapa', 'Qué pasa', 'Plazo'],
      filas: [
        ['**1. Verificación del predio**', 'Certificado de tradición, concepto de norma urbanística, clase de suelo, afectaciones, riesgo, rondas hídricas', 'Días. Y **antes de comprar**, no después'],
        ['**2. Estudio de suelos**', 'Sondeos, ensayos de laboratorio e informe geotécnico firmado por ingeniero civil', 'Semanas. Condiciona todo lo que sigue'],
        ['**3. Levantamiento topográfico**', 'Medidas reales del lote, que casi nunca coinciden con la escritura', 'Días'],
        ['**4. Esquema básico**', 'El delineamiento general: zonas, accesos, cómo se relacionan los ambientes', 'Depende de usted'],
        ['**5. Anteproyecto**', 'Plantas, cortes y fachadas suficientes para entender y decidir', '**Aquí se atasca casi todo**'],
        ['**6. Proyecto arquitectónico**', 'Detalles, especificaciones y coordinación con las demás disciplinas', 'Semanas'],
        ['**7. Diseños técnicos**', 'Estructural, hidrosanitario, eléctrico y de gas, cada uno con su firma', 'En paralelo con el 6'],
        ['**8. Radicación**', 'Expediente completo ante la curaduría o la oficina de planeación', 'Un día, si está completo'],
        ['**9. Estudio de la solicitud**', 'La autoridad revisa, observa y resuelve', '**45 días hábiles**, por ley'],
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que sí dice la norma' },
    {
      tipo: 'parrafo',
      texto:
        'De las nueve etapas, solo la última tiene plazo legal — y es bastante ' +
        'preciso:',
    },
    {
      tipo: 'cita',
      texto:
        'Los curadores urbanos y la entidad municipal o distrital encargada del ' +
        'estudio, trámite y expedición de las licencias tendrán un plazo máximo ' +
        'de cuarenta y cinco (45) días hábiles para resolver las solicitudes […] ' +
        'Vencido este plazo se aplicará el silencio administrativo positivo.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.3.1',
    },
    {
      tipo: 'lista',
      items: [
        'Los 45 días hábiles cuentan **desde la radicación en legal y debida forma** — es decir, con el expediente completo. Un expediente incompleto no arranca el reloj.',
        'El plazo puede prorrogarse **una sola vez, hasta la mitad**, si el tamaño o la complejidad lo justifican.',
        'Si llega un acta de observaciones, hay **30 días hábiles** para responder, prorrogables 15.',
        'El silencio positivo opera «en los términos solicitados», pero **nunca en contravención de las normas urbanísticas**. No es una puerta trasera.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Y algo que decide bastante más de lo que parece: **radicar congela la ' +
        'norma.** Si el plan de ordenamiento cambia mientras su solicitud está ' +
        'en estudio, el proyecto se resuelve con la norma vigente el día en que ' +
        'radicó — siempre que haya radicado completo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánto dura la licencia una vez sale' },
    {
      tipo: 'tabla',
      cabeceras: ['Modalidad', 'Vigencia', 'Prórroga'],
      filas: [
        ['Urbanización, parcelación y construcción en **obra nueva**', '36 meses', 'Una vez, +12'],
        ['Construcción en modalidades **distintas** a obra nueva', '24 meses', 'Una vez, +12'],
        ['Urbanización + parcelación + obra nueva en un mismo acto', '48 meses', 'Una vez, +12'],
        ['Subdivisión', '12 meses', 'Improrrogable'],
      ],
      nota:
        'Decreto 1783 de 2021, art. 27. **Los 36 meses no son universales**: ' +
        'una licencia de ampliación o de reforzamiento dura 24. Es el error más ' +
        'repetido del tema, incluso entre quienes corrigen el error anterior.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La prórroga se pide **a más tardar 30 días hábiles antes** del ' +
        'vencimiento —hábiles, no calendario— con documentación completa y una ' +
        'manifestación bajo juramento de que la obra ya inició.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los tres puntos donde se atrasa todo' },
    { tipo: 'titulo', nivel: 3, texto: '1. El anteproyecto que no se cierra' },
    {
      tipo: 'parrafo',
      texto:
        'Es, con diferencia, el punto donde más tiempo se pierde — y el que ' +
        'nadie contabiliza, porque no lo produce ningún trámite. Un ' +
        'anteproyecto que va y vuelve seis veces puede consumir más semanas que ' +
        'las nueve etapas restantes juntas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La causa casi nunca es el arquitecto: es que **la decisión no está ' +
        'tomada**. Si en la casa hay dos personas que quieren cosas distintas, ' +
        'el plano no va a resolverlo.',
    },
    { tipo: 'titulo', nivel: 3, texto: '2. El expediente incompleto' },
    {
      tipo: 'parrafo',
      texto:
        'Radicar sin todo listo «para ganar fecha» no gana nada: **el plazo no ' +
        'empieza a correr y la norma no se congela**. Y en el peor caso el ' +
        'trámite termina en desistimiento y hay que volver a empezar.',
    },
    { tipo: 'titulo', nivel: 3, texto: '3. El estudio de suelos que llegó tarde' },
    {
      tipo: 'parrafo',
      texto:
        'El estudio de suelos condiciona la cimentación, la cimentación ' +
        'condiciona la estructura, y la estructura condiciona el proyecto ' +
        'arquitectónico. Encargarlo al final obliga a rehacer hacia atrás.',
    },
    {
      tipo: 'nota',
      texto:
        '**Encárguelo apenas tenga el lote**, incluso antes de dibujar. Es de ' +
        'las pocas cosas del proceso que se pueden adelantar sin haber decidido ' +
        'nada sobre la casa.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué se puede hacer en paralelo' },
    {
      tipo: 'lista',
      items: [
        '**Suelos y topografía**, entre sí y con el esquema básico.',
        '**Los diseños técnicos** con el desarrollo del proyecto arquitectónico. No hay que esperar a terminar uno para empezar los otros.',
        '**La verificación del predio** con todo lo demás — aunque en rigor debería ir antes de comprar.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que **no** se puede paralelizar es la secuencia de decisión: ' +
        'esquema básico, anteproyecto, proyecto. Cada uno resuelve preguntas ' +
        'que el siguiente da por resueltas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Una advertencia sobre los tiempos totales' },
    {
      tipo: 'parrafo',
      texto:
        'Verá cifras redondas circulando: «seis meses del lote a la licencia», ' +
        '«un año». **No son datos, son promedios de nada.** El único plazo con ' +
        'respaldo normativo en todo el recorrido son los 45 días hábiles del ' +
        'estudio de la solicitud.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo demás depende del tamaño del proyecto, de la ciudad, de la ' +
        'complejidad del predio y —sobre todo— de qué tan rápido se tomen las ' +
        'decisiones. Un proyecto pequeño con un cliente decidido puede ir ' +
        'sorprendentemente rápido. Uno mediano con tres opiniones puede no ' +
        'terminar nunca.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La pregunta útil no es «cuánto se demora», sino **«qué depende de mí y ' +
        'cuándo tengo que decidirlo»**. Esa sí se puede responder desde el ' +
        'primer día.',
    },
  ],
  fuentes: [
    {
      titulo: 'Decreto 1077 de 2015, plazos y trámite de las licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 1783 de 2021, artículo 27: vigencia de las licencias',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175086',
      fecha: '2021-12-20',
    },
    {
      titulo: 'Ley 400 de 1997, estudios geotécnicos y diseño estructural',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Decreto 2090 de 1989, etapas del servicio de arquitectura',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
  ],
}
