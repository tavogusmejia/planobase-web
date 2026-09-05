import type { Vertical } from '@content/verticales'

/**
 * Las verticales del portafolio, en inglés.
 *
 * Superposición por `categoria`. Lo que falte cae al español.
 *
 * **La geografía se traduce tal cual y no se ensancha.** «Casas» dice Valle del
 * Cauca y «vivienda multifamiliar» dice Cali porque es donde está esa obra: dos
 * casas en Jamundí y dos conjuntos en Cali. El reencuadre nacional del sitio
 * vale para lo que el estudio puede hacer, no para lo que ya hizo, y una
 * vertical describe obra construida. Decir «en Colombia» aquí sería inventar
 * proyectos.
 */
type VerticalTraducible = Partial<
  Pick<Vertical, 'titulo' | 'entrada' | 'metaTitulo' | 'metaDescripcion'>
>

export const verticales: Record<string, VerticalTraducible> = {
  educativo: {
    titulo: 'Educational architecture',
    entrada:
      'Schools, nurseries and educational buildings in Bogotá, Cali, Cajicá ' +
      'and Ipiales, most of them won through open public competition. We ' +
      'design a school as a piece of city rather than as a walled compound: ' +
      'the dining hall, the library and the auditorium open onto the ' +
      'neighbourhood once the school day ends. It is the strand with the most ' +
      'work behind it, and where two of the studio’s four competition awards ' +
      'come from.',
    metaTitulo: 'Educational architecture · School design',
    metaDescripcion:
      'Design of schools, nurseries and educational buildings in Colombia. ' +
      'Eleven projects, most of them through national public competition.',
  },
  cultural: {
    titulo: 'Cultural buildings',
    entrada:
      'Theatres, cultural centres and meeting places. We are interested in ' +
      'buildings that a community ends up using outside the hours they were ' +
      'designed for, and so we give them more foyer, more shade and more ' +
      'public edge than the brief asks for.',
    metaTitulo: 'Cultural buildings · Theatres and cultural centres',
    metaDescripcion:
      'Design of theatres, cultural centres and community venues in Colombia, ' +
      'with awards in both public and invited competitions.',
  },
  institucional: {
    titulo: 'Institutional architecture',
    entrada:
      'Administrative offices and public service buildings. An institutional ' +
      'building is one of the few an entire community uses without having ' +
      'chosen it, and that imposes a different demand: it has to work for the ' +
      'person who was never in a design meeting.',
    metaTitulo: 'Institutional architecture · Administrative buildings',
    metaDescripcion:
      'Design of administrative and institutional buildings in Colombia. ' +
      'First place in the public competition for the Alcaldía Local de ' +
      'Teusaquillo, a borough government building in Bogotá.',
  },
  urbano: {
    titulo: 'Public space',
    entrada:
      'Squares, urban recovery and projects that give land back to the city. ' +
      'We work on what is already there — a fountain, a station, a roundabout ' +
      '— before we work on the empty plot, because in the centre of a settled ' +
      'city there is almost never an empty plot.',
    metaTitulo: 'Public space · Squares and urban projects',
    metaDescripcion:
      'Design of public space, squares and urban recovery in Cali, Bogotá and ' +
      'the Valle del Cauca.',
  },
  casas: {
    titulo: 'Houses',
    entrada:
      'Single-family houses in the Valle del Cauca. In the tropics outdoor ' +
      'space is habitable all year round, so we organise a house from the ' +
      'courtyard rather than from the façade: the void ventilates, brings in ' +
      'light and sets the order, and it is where whatever was not in the ' +
      'brief ends up happening.',
    metaTitulo: 'Houses · Home design in Cali and Jamundí',
    metaDescripcion:
      'Design of houses and country homes in Jamundí, Cali and the Valle del ' +
      'Cauca. Architecture organised around the courtyard.',
  },
  vivienda: {
    titulo: 'Multi-family housing',
    entrada:
      'Apartment buildings and housing schemes developed for contractors, in ' +
      'Cali and its growth corridor. The brief here carries two demands at ' +
      'once — that it sells and that it can be built to the budget — and the ' +
      'project is won by resolving both without giving up on how it is to ' +
      'live there.',
    metaTitulo: 'Multi-family housing · Apartment buildings',
    metaDescripcion:
      'Design of apartment buildings and housing schemes for developers in ' +
      'Cali and the Valle del Cauca.',
  },
  concursos: {
    titulo: 'Competitions',
    entrada:
      'Fourteen entries to public and invited competitions, with five awards ' +
      'among them. A competition is the most demanding way to design: you ' +
      'resolve the whole thing, against the clock, with no way to ask the ' +
      'client anything. It is where you see what a studio is capable of.',
    metaTitulo: 'Architecture competitions · Plano Base',
    metaDescripcion:
      'Fourteen entries to public and invited competitions in Colombia, with ' +
      'five awards among them, including two first places.',
  },
}
