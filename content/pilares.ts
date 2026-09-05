import type { PilarId } from '@/lib/types'

/**
 * Los pilares del blog.
 *
 * Mismo criterio que `content/verticales.ts`: cada agrupación es una página con
 * su propio titular, su propio texto y su propia dirección, no un parámetro de
 * consulta. Un filtro con `?pilar=costos` que además se autocanonicaliza al
 * índice le pide a Google que indexe diez páginas que dicen ser otra; ya se
 * cometió ese error con las categorías del portafolio y se corrigió.
 *
 * El orden es el del plan editorial (`docs/PLAN-BLOG.md`), que es orden de
 * retorno y no alfabético: costos y trámites arriba porque son los que traen
 * tráfico con intención, el Caribe abajo porque entra despacio.
 *
 * Un pilar sin artículos no se publica. La comprobación está en
 * `pilaresConArticulos()`, y existe por la misma razón que en las verticales:
 * una página delgada pidiendo posicionarse por algo que no hay debajo le baja
 * la confianza al dominio entero.
 */
export type Pilar = {
  id: PilarId
  /** Segmento de URL: /blog/tema/<slug>. */
  slug: string
  /** Cómo se nombra en la navegación del índice. */
  nombre: string
  /** El titular de la página. Nombra el problema, no la categoría interna. */
  titulo: string
  /** Dos o tres frases. Es lo que separa una página que posiciona de una
   *  rejilla de tarjetas con encabezado. */
  entrada: string
  metaTitulo: string
  metaDescripcion: string
  /** La puerta de servicio a la que lleva el pilar entero. */
  puerta: string | null
}

export const pilares: Pilar[] = [
  {
    id: 'costos',
    slug: 'costos',
    nombre: 'Costos',
    titulo: 'Cuánto cuesta construir',
    entrada:
      'Las cifras públicas de costo por metro cuadrado se contradicen entre sí ' +
      'por un factor de dos o tres para la misma ciudad y el mismo año. Aquí ' +
      'publicamos nuestros propios valores, decimos que son nuestros, ' +
      'mostramos de qué capítulos salen y los actualizamos por trimestre con ' +
      'el índice del DANE, citando boletín y fecha.',
    metaTitulo: 'Costos de construcción · Cuánto cuesta construir en Colombia',
    metaDescripcion:
      'Cuánto cuesta construir por metro cuadrado en Colombia, cuánto cobra un ' +
      'arquitecto y qué partidas se olvidan al presupuestar. Cifras propias, ' +
      'con fecha.',
    puerta: 'proyecto-nuevo',
  },
  {
    id: 'tramites',
    slug: 'tramites-y-norma',
    nombre: 'Trámites y norma',
    titulo: 'Licencias, curadurías y norma urbana',
    entrada:
      'Buena parte de lo que se lee en internet sobre licencias en Colombia ' +
      'está desactualizado, y lo que lo corrige suele quedarse corto: la ' +
      'licencia de obra nueva dura treinta y seis meses desde 2021, pero una ' +
      'de ampliación o reforzamiento sigue durando veinticuatro. Aquí cada ' +
      'dato lleva el decreto que lo sostiene y la fecha en que se verificó.',
    metaTitulo: 'Licencia de construcción y norma urbana en Colombia',
    metaDescripcion:
      'Licencia de construcción, curadurías urbanas, POT y qué se puede ' +
      'construir en un lote. Con el articulado que lo respalda.',
    puerta: 'proyecto-nuevo',
  },
  {
    id: 'patologias',
    slug: 'patologias',
    nombre: 'Patologías',
    titulo: 'Fisuras, filtraciones y humedad',
    entrada:
      'Cómo se lee una fisura, qué distingue una inofensiva de una que exige ' +
      'un ingeniero, y qué hacer antes de gastar en reparaciones que no ' +
      'resuelven la causa. Con los umbrales de la guía técnica colombiana, que ' +
      'cambian según el elemento y no son el milímetro que repite todo el mundo.',
    metaTitulo: 'Patología de edificaciones · Fisuras, filtraciones y humedad',
    metaDescripcion:
      'Cómo distinguir una fisura peligrosa de una que no lo es, y qué hacer ' +
      'con filtraciones y humedad. Con los umbrales oficiales colombianos.',
    puerta: 'diagnostico-de-edificaciones',
  },
  {
    id: 'proceso',
    slug: 'proceso',
    nombre: 'Proceso',
    titulo: 'Cómo se hace un proyecto',
    entrada:
      'Del lote a la licencia, con tiempos reales. Qué es un anteproyecto y por ' +
      'qué no se puede saltar, qué hace un arquitecto que no hace un maestro de ' +
      'obra, y qué preguntar antes de firmar.',
    metaTitulo: 'El proceso de un proyecto de arquitectura, paso a paso',
    metaDescripcion:
      'Del lote a la licencia con tiempos reales, qué incluye cada etapa y qué ' +
      'preguntar antes de contratar.',
    puerta: 'diseno-a-medida',
  },
  {
    id: 'institucional',
    slug: 'obra-publica',
    nombre: 'Obra pública',
    titulo: 'Equipamientos y contratación pública',
    entrada:
      'Cómo se diseña un colegio, cómo funciona por dentro un concurso público ' +
      'de arquitectura, y qué cambió en las normas y los documentos tipo que ' +
      'gobiernan la contratación de infraestructura social. Escrito desde ' +
      'cuatro reconocimientos en concurso, no desde la teoría.',
    metaTitulo: 'Arquitectura y contratación de obra pública en Colombia',
    metaDescripcion:
      'Diseño de colegios y equipamientos, concursos públicos de arquitectura ' +
      'y documentos tipo de infraestructura social.',
    puerta: 'espacio-publico-y-equipamientos',
  },
  {
    id: 'casos',
    slug: 'casos',
    nombre: 'Casos',
    titulo: 'Proyectos por dentro',
    entrada:
      'Proyectos del estudio contados con las cifras que un cliente necesita ' +
      'para decidir: área, entidad, plazo, modalidad de contratación y qué se ' +
      'resolvió. No es la memoria de proyecto; es lo que pasó.',
    metaTitulo: 'Casos de proyecto · Plano Base Arquitectos',
    metaDescripcion:
      'Proyectos del estudio contados con área, entidad contratante, plazo y ' +
      'las decisiones que los definieron.',
    puerta: null,
  },
  {
    id: 'local',
    slug: 'donde-construir',
    nombre: 'Dónde construir',
    titulo: 'Construir en cada ciudad',
    entrada:
      'La norma cambia de un municipio a otro, y con ella el costo y el plazo. ' +
      'Qué exige cada plaza, qué curadurías hay, cuánto tarda una licencia y ' +
      'qué encarece la obra allí.',
    metaTitulo: 'Dónde construir en Colombia · Norma y costos por ciudad',
    metaDescripcion:
      'Qué cambia al construir en cada ciudad de Colombia: curadurías, ' +
      'tiempos de licencia, norma local y costo por metro cuadrado.',
    puerta: 'proyecto-nuevo',
  },
  {
    id: 'casa-campestre',
    slug: 'casa-y-casa-campestre',
    nombre: 'Casa y casa campestre',
    titulo: 'Casa propia y vivienda campestre',
    entrada:
      'El suelo rural tiene reglas más duras que el urbano y casi nadie las ' +
      'conoce antes de comprar el lote. Agua, aguas residuales, acceso, ' +
      'pendiente y piso térmico deciden el proyecto mucho antes que el gusto.',
    metaTitulo: 'Casa campestre · Diseño, costos y norma en suelo rural',
    metaDescripcion:
      'Qué se puede construir en suelo rural, cuánto cuesta una casa ' +
      'campestre y qué verificar antes de comprar el lote.',
    puerta: 'proyecto-nuevo',
  },
  {
    id: 'piscinas',
    slug: 'piscinas-y-jacuzzis',
    nombre: 'Piscinas y jacuzzis',
    titulo: 'Piscinas, jacuzzis y sus sistemas',
    entrada:
      'Una piscina es sobre todo lo que no se ve: filtración, bombeo, ' +
      'calentamiento y el cuarto de máquinas. Quien dirige esta línea en el ' +
      'estudio trae quince años diseñando sistemas hidráulicos y construyendo ' +
      'piscinas de borde infinito y cuerpos de agua en el Caribe.',
    metaTitulo: 'Piscinas y jacuzzis · Costos, sistemas y norma en Colombia',
    metaDescripcion:
      'Cuánto cuesta una piscina en Colombia, qué exige cada sistema y qué ' +
      'obliga la Ley 1209 a una copropiedad.',
    puerta: 'diseno-a-medida',
  },
  {
    id: 'caribe',
    slug: 'construir-frente-al-mar',
    nombre: 'Frente al mar',
    titulo: 'Construir frente al mar',
    entrada:
      'La sal se lleva los herrajes en dos años, el agua dulce se diseña antes ' +
      'que la fachada y cada tonelada de material llega por barco y en su ' +
      'fecha. Lo que exige construir en una isla del Caribe es lo mismo que ' +
      'exige Barú, San Andrés o Santa Marta.',
    metaTitulo: 'Construir frente al mar · Corrosión, agua y logística',
    metaDescripcion:
      'Qué le hace el mar a una casa: corrosión, agua dulce, viento y ' +
      'logística de materiales en obra costera e insular.',
    puerta: 'diseno-a-medida',
  },
]

export const pilarPorId = new Map(pilares.map((p) => [p.id, p]))
export const pilarPorSlug = new Map(pilares.map((p) => [p.slug, p]))
