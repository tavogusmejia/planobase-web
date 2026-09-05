import type { Service } from '@/lib/types'
import type { TemaVision } from '@content/site'

/**
 * El contenido de `content/site.ts`, en inglés.
 *
 * Superposición indexada por la llave estable de cada cosa: el `proyectoSlug`
 * de un tema de visión, el `slug` de una persona. Lo que no esté aquí cae al
 * español.
 *
 * **Qué no se traduce.** Los nombres de los concursos y de los proyectos son
 * nombres propios de certámenes colombianos y se citan como son: «Concurso UVA
 * Orfelinato» no se convierte en «UVA Orphanage Competition», igual que una ley
 * se cita por su nombre real. Los reconocimientos, por tanto, no tienen entrada
 * aquí a propósito, y eso no es una traducción pendiente.
 */

export const manifiesto =
  'We are Plano Base, a collaborative architecture studio devoted to the ' +
  'full development of projects across the educational, institutional, ' +
  'commercial and residential sectors. Our commitment and our approach weigh ' +
  'every detail: the context, the needs of the people who will use the ' +
  'building, materials, spatial quality and economic viability at every stage ' +
  'of the process.'

export const sobreElEquipo =
  'Eduardo and Gustavo Mejía Martínez lead every project themselves. For ' +
  'structure, building services, budgeting and construction we bring in ' +
  'specialists we have worked with since 2020. There is no account manager in ' +
  'between: you talk to the person who signs the drawings.'

type TemaTraducible = Partial<Pick<TemaVision, 'titulo' | 'texto' | 'cita'>>

export const vision: Record<string, TemaTraducible> = {
  'colegio-pradera-el-volcan': {
    titulo: 'Public architecture is not a lesser commission',
    texto:
      'Most of our work is public: schools, cultural centres, administrative ' +
      'offices, public squares. We did not end up there by default. A public ' +
      'building is the only one an entire community uses without having chosen ' +
      'it, and that imposes a different demand: it has to work for the person ' +
      'who was never in a design meeting.',
    cita:
      'You do not only build a school. You build an active community, held together by an urban and educational project with a view of the future.',
  },
  'concurso-colegio-villas-del-progreso': {
    titulo: 'A school is a piece of city',
    texto:
      'We design schools the way you design a fragment of a city: with ' +
      'streets, squares and edges that negotiate with the neighbourhood. The ' +
      'dining hall, the library and the auditorium open outwards once the ' +
      'school day ends. The school grounds stop being a closed compound and ' +
      'give land back to the city.',
    cita:
      'This project is conceived as an architectural and urban system that brings together several scales: the neighbourhood, the park and the future metropolitan avenue.',
  },
  'colegio-y-teatro-el-ensueno': {
    titulo: 'The courtyard before the façade',
    texto:
      'In the tropics outdoor space is habitable all year round, so we ' +
      'organise a project from the void rather than from the volume. The ' +
      'courtyard ventilates, brings in light and sets the order; it is where ' +
      'whatever was not in the brief ends up happening. That holds for a house ' +
      'in Jamundí and for a school of two thousand students.',
    cita:
      'Its classrooms are arranged around green courtyards, echoing the traditional city block with its interior gardens.',
  },
  'concurso-uva-orfelinato': {
    titulo: 'Building to outlast the brief',
    texto:
      'Uses change; structure and space remain. We design buildings able to ' +
      'outlive the function they were commissioned for, with materials that ' +
      'age well and an economy that makes them viable to maintain. A public ' +
      'building that cannot be maintained is not cheap: it is disposable.',
    cita:
      'A cultural infrastructure that evolves over time, able to become a «useful ruin» as part of the legacy of the city.',
  },
}

/** Cargos del equipo, por `slug`. */
export const cargos: Record<string, string[]> = {
  'eduardo-mejia-martinez': ['Principal Architect', 'Legal Representative'],
  'gustavo-mejia-martinez': ['Project Manager', 'Technical Consultant'],
}

/**
 * La asesoría técnica, en inglés.
 *
 * Es el primer peldaño y el producto que sostiene el embudo, así que va entero:
 * el gancho, la descripción y las tres condiciones. La duración y el precio no
 * están aquí porque no son texto.
 */
export const asesoria: Partial<
  Pick<Service, 'nombre' | 'tagline' | 'descripcion' | 'politicas'>
> = {
  nombre: 'Technical consultation',
  tagline: 'Getting an architect’s advice should not be expensive.',
  descripcion:
    'Fifteen minutes with an architect from Plano Base, free and with no ' +
    'commitment. You tell us your case, we tell you whether we can help, what ' +
    'it involves and what the next step is. If someone needs to visit the ' +
    'site, we say so on this call.',
  politicas: [
    {
      clave: 'Booking',
      texto: 'Over WhatsApp. We confirm the date and time the same day.',
    },
    {
      clave: 'Length',
      texto:
        'Fifteen minutes. If the case warrants more, we tell you right there.',
    },
    {
      clave: 'No commitment',
      texto: 'There is no cost and no obligation to hire anything afterwards.',
    },
  ],
}
