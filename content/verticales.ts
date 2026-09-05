import type { Categoria } from '@/lib/types'

/**
 * Las verticales del portafolio.
 *
 * Hasta ahora cada categoría era un parámetro de URL —`?categoria=educativo`—
 * que además se autocanonicalizaba a `/proyectos`. El sitemap pedía indexar
 * siete y cada una respondía «en realidad yo soy /proyectos»: Google
 * consolidaba y ninguna competía por nada.
 *
 * Ahora cada una es una página con su propio titular, su propio texto y su
 * propia dirección. Eso importa porque quien busca «diseño de colegios» o
 * «arquitectura escolar» no es un particular: es una constructora, una
 * fundación o una secretaría. Tráfico de ticket alto, con intención, y gratis.
 *
 * Solo las categorías con obra. Una vertical vacía sería una página delgada
 * pidiendo posicionarse por algo que el estudio no ha hecho.
 *
 * PENDIENTE DE APROBACIÓN. Los textos están redactados a partir de los
 * proyectos que hay en cada categoría y de las memorias del propio estudio; no
 * salen de un documento aprobado. Están para corregir sobre ellos, no para
 * publicarse tal cual sin que alguien los lea.
 */
export type Vertical = {
  categoria: Categoria
  /** El titular. Nombra el oficio, no la etiqueta interna del filtro. */
  titulo: string
  /** Dos o tres frases. Es lo que separa una página que posiciona de una
   *  rejilla de fotos con encabezado. */
  entrada: string
  metaTitulo: string
  metaDescripcion: string
  /** La puerta de servicio a la que lleva esta vertical. */
  puerta: string
}

export const verticales: Vertical[] = [
  {
    categoria: 'educativo',
    titulo: 'Arquitectura educativa',
    entrada:
      'Colegios, jardines infantiles y equipamientos educativos en Bogotá, ' +
      'Cali, Cajicá e Ipiales, la mayoría por concurso público. Diseñamos la ' +
      'escuela como una pieza de ciudad y no como un recinto cerrado: el ' +
      'comedor, la biblioteca y el auditorio se abren al barrio cuando termina ' +
      'la jornada. Es la línea con más obra del estudio y donde están dos de ' +
      'sus cuatro reconocimientos en concurso público.',
    metaTitulo: 'Arquitectura educativa · Diseño de colegios',
    metaDescripcion:
      'Diseño de colegios, jardines infantiles y equipamientos educativos en ' +
      'Colombia. Once proyectos, la mayoría por concurso público nacional.',
    puerta: 'espacio-publico-y-equipamientos',
  },
  {
    categoria: 'cultural',
    titulo: 'Equipamientos culturales',
    entrada:
      'Teatros, casas de la cultura y centros de encuentro. Nos interesan los ' +
      'edificios que la comunidad termina usando fuera del horario para el que ' +
      'fueron pensados, y por eso los proyectamos con más vestíbulo, más ' +
      'sombra y más borde público del que pide el programa.',
    metaTitulo: 'Equipamientos culturales · Teatros y casas de la cultura',
    metaDescripcion:
      'Diseño de teatros, casas de la cultura y centros culturales en ' +
      'Colombia, con reconocimientos en concurso público y privado.',
    puerta: 'espacio-publico-y-equipamientos',
  },
  {
    categoria: 'institucional',
    titulo: 'Arquitectura institucional',
    entrada:
      'Sedes administrativas y edificios de servicio público. Un edificio ' +
      'institucional es de los pocos que una comunidad entera usa sin haberlo ' +
      'elegido, y eso impone una exigencia distinta: tiene que funcionar para ' +
      'quien no estuvo en ninguna reunión de diseño.',
    metaTitulo: 'Arquitectura institucional · Sedes administrativas',
    metaDescripcion:
      'Diseño de sedes administrativas y edificios institucionales en ' +
      'Colombia. Primer puesto en el concurso público de la Alcaldía Local de ' +
      'Teusaquillo.',
    puerta: 'espacio-publico-y-equipamientos',
  },
  {
    categoria: 'urbano',
    titulo: 'Espacio público',
    entrada:
      'Plazas, recuperación de espacio urbano y proyectos que devuelven suelo ' +
      'a la ciudad. Trabajamos sobre lo que ya existe —una fuente, una ' +
      'estación, una rotonda— antes que sobre el lote vacío, porque en el ' +
      'centro de una ciudad consolidada casi nunca hay lote vacío.',
    metaTitulo: 'Espacio público · Plazas y proyectos urbanos',
    metaDescripcion:
      'Diseño de espacio público, plazas y recuperación urbana en Cali, ' +
      'Bogotá y el Valle del Cauca.',
    puerta: 'espacio-publico-y-equipamientos',
  },
  {
    categoria: 'casas',
    titulo: 'Casas',
    entrada:
      'Vivienda unifamiliar en el Valle del Cauca. En el trópico el espacio ' +
      'exterior es habitable todo el año, así que organizamos la casa desde el ' +
      'patio y no desde la fachada: el vacío ventila, ilumina y ordena, y es ' +
      'donde termina ocurriendo lo que no estaba en el programa.',
    metaTitulo: 'Casas · Diseño de vivienda en Cali y Jamundí',
    metaDescripcion:
      'Diseño de casas y vivienda campestre en Jamundí, Cali y el Valle del ' +
      'Cauca. Arquitectura organizada desde el patio.',
    puerta: 'proyecto-nuevo',
  },
  {
    categoria: 'vivienda',
    titulo: 'Vivienda multifamiliar',
    entrada:
      'Conjuntos y edificios de apartamentos desarrollados para constructora, ' +
      'en Cali y su zona de expansión. El encargo aquí tiene dos exigencias a ' +
      'la vez —que se venda y que se pueda construir al costo previsto— y el ' +
      'proyecto se juega en resolver las dos sin sacrificar la habitabilidad.',
    metaTitulo: 'Vivienda multifamiliar · Edificios de apartamentos',
    metaDescripcion:
      'Diseño de conjuntos y edificios multifamiliares para constructoras en ' +
      'Cali y el Valle del Cauca.',
    puerta: 'proyecto-nuevo',
  },
  {
    categoria: 'concursos',
    titulo: 'Concursos',
    entrada:
      'Catorce propuestas presentadas a concurso público y privado, con cinco ' +
      'reconocimientos entre ellas. Un concurso es la forma más exigente de ' +
      'proyectar: se resuelve completo, contra reloj y sin poder preguntarle ' +
      'nada al cliente. Es donde se ve de qué es capaz un estudio.',
    metaTitulo: 'Concursos de arquitectura · Plano Base',
    metaDescripcion:
      'Catorce propuestas a concurso público y privado en Colombia, con cinco ' +
      'reconocimientos, entre ellos dos primeros puestos.',
    puerta: 'espacio-publico-y-equipamientos',
  },
]

export function verticalDe(categoria: string): Vertical | null {
  return verticales.find((v) => v.categoria === categoria) ?? null
}
