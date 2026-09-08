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
  'Eduardo and Gustavo Mejía Martínez lead every project themselves. Around ' +
  'them sit architecture, steel fabrication, civil engineering, energy and ' +
  'design. There is no account manager in between: you talk to the person who ' +
  'signs the drawings.'

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
  'eduardo-mejia-martinez': ['Principal Architect'],
  'julian-mejia-martinez': ['Steel Structures'],
  'gustavo-mejia-martinez': ['Residential and Pools'],
  'miguel-ortiz': ['Architecture'],
  'laura-cuesta': ['Graphic Design'],
  'carlos-orozco': ['Infrastructure'],
  'nicolas-gomez': ['Energy'],
}

/**
 * Las bios del equipo, en inglés. Cada frase sale de la hoja de vida de esa
 * persona; lo que el documento no sostiene no se escribe aquí tampoco.
 */
export const bios: Record<string, string> = {
  'eduardo-mejia-martinez':
    'An architect from Universidad del Valle, in its first graduating class ' +
    'and with a distinguished thesis. He has led the studio since 2022 and is ' +
    'its legal representative. He won ' +
    'the national public competition for the El Ensueño school and theatre in ' +
    'Ciudad Bolívar, and has taught design at Universidad Javeriana and ' +
    'Universidad del Valle.',
  'julian-mejia-martinez':
    'An expert steel fabricator and erector: he started out as a welder and ' +
    'worked his way up ' +
    'to supervising field installation. Today he runs a full fabrication shop ' +
    '— laser cutting, press braking, MIG, TIG and laser welding, overhead ' +
    'cranes — and answers for production end to end, from the estimate to the ' +
    'installed piece.',
  'gustavo-mejia-martinez':
    'A mechanical engineer from Universidad Nacional with a ' +
    "master's in project management, which is what he runs here. Since 2007 " +
    'he has built in Colombia, the Caribbean and the United States: infinity ' +
    'pools and waterfalls at Bakers Bay, the fountains at Mary Brickell ' +
    "Village in Miami and the one at Bermuda's airport, and ultra-luxury " +
    'homes in the Bahamas and Turks & Caicos.',
  'miguel-ortiz':
    'An architect from Universidad del Valle. He joined the studio as an ' +
    'intern in 2022 and now coordinates its projects and answers for the work ' +
    'on site: he is the point of ' +
    'contact between owners, suppliers and contractors. A finalist in an ' +
    'international ideas competition and a DAAD scholarship recipient.',
  'laura-cuesta':
    'A graphic designer from Universidad del Valle. She has been with Plano ' +
    'Base since January 2025. She works in multimedia, editorial and web ' +
    'design, and in illustration. Before that she ran interactive media at ' +
    'Centro Magis, Universidad Javeriana in Cali, for four years.',
  'carlos-orozco':
    'A civil engineer from Universidad de Cartagena, with a specialization in ' +
    "structural analysis and design and a master's from Politecnico di " +
    'Torino. A Plano Base collaborator since January 2026. ' +
    'He designs bridges: eight steel-and-concrete composite ones, ' +
    'including a fifteen-span crossing. Before that he supervised a ' +
    'seven-storey building in Bogotá.',
  'nicolas-gomez':
    'A mechanical engineer from Universidad Nacional, with Plano Base since ' +
    'late 2024. He has worked between the field and management since 2019: ' +
    'smart building commissioning, ' +
    'drone thermography and energy diagnostics. An ISO 50001 internal auditor ' +
    'and a certified drone pilot.',
}

/**
 * Lo que se puede agendar, en inglés. Desde el 6/9/2026 son dos.
 *
 * Van enteros —gancho, descripción y las tres condiciones— porque son el
 * producto que sostiene el embudo. La duración y el precio no están aquí
 * porque no son texto.
 */

/**
 * La primera llamada, en inglés.
 *
 * Se llamaba `asesoria` y su `nombre` era «Technical consultation». Ese nombre
 * se va al servicio de pago, que es lo que describe. El `tagline` no se toca:
 * ya decía «The first call with an architect costs nothing», así que encaja con
 * el nombre nuevo mejor que con el viejo.
 */
export const primeraLlamada: Partial<
  Pick<Service, 'nombre' | 'tagline' | 'descripcion' | 'politicas'>
> = {
  nombre: 'First call',
  tagline: 'The first call with an architect costs nothing.',
  descripcion:
    'Fifteen minutes with an architect from Plano Base, free and with no ' +
    'commitment. You tell us your case, we tell you whether we can help, what ' +
    'it involves and what the next step is. If someone needs to visit the ' +
    'site, we say so on this call.',
  politicas: [
    {
      clave: 'Booking',
      texto: 'Over WhatsApp. We confirm the date and time in under 24 hours.',
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

/**
 * La asesoría técnica de pago, en inglés.
 *
 * Hereda el nombre que tenía la gratuita, porque es el que describe lo que
 * hace. El precio va en pesos y no se convierte: se cobra en pesos.
 */
export const asesoriaTecnica: Partial<
  Pick<Service, 'nombre' | 'tagline' | 'descripcion' | 'politicas'>
> = {
  nombre: 'Technical consultation',
  tagline: 'An hour with an architect, to settle one question.',
  descripcion:
    'An hour with an architect from Plano Base on one specific point of your ' +
    'project: a crack you are not sure is serious, whether the plot allows ' +
    'what you have in mind, what a build like yours costs in your ' +
    'municipality, whether the budget you were quoted makes sense. You come ' +
    'in with a question and leave with the answer.',
  politicas: [
    {
      clave: 'Booking',
      texto:
        'You book on the site and confirm with payment, before the meeting. ' +
        'We write to you on WhatsApp to close it.',
    },
    {
      clave: 'Length',
      texto: 'One hour. If the case warrants more, we tell you before booking.',
    },
    {
      clave: 'Changes',
      texto: 'You can move it by giving us 24 hours notice.',
    },
  ],
}
