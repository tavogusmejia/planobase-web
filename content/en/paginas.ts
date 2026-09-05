import type { CopiaDe, RutaConCopia } from '@content/paginas'

/**
 * La copia de página, en inglés.
 *
 * Superposición: una clave ausente cae al español. Una ruta se considera
 * traducida cuando **todas** sus claves están aquí, y eso es lo que decide si
 * entra al índice inglés. Ver `src/lib/data/contenido.ts`.
 */
export const copiaPaginasEn: { [R in RutaConCopia]?: Partial<CopiaDe<R>> } = {
  '/blog': {
    metaDescripcion:
      'How to read a crack, what it costs to build per square metre, and what ' +
      'a building permit demands in each city. Technical notes from a ' +
      'Colombian architecture studio, with the sources in plain sight.',
    entrada:
      'How to read a crack, what it costs to build per square metre, and what ' +
      'a building permit demands in each city. Technical notes, with the ' +
      'sources in plain sight.',
    ultimo: 'Latest',
    masEntradas: 'More entries',
  },

  '/apbs': {
    titulo: 'APBS',
    tarjetaTitulo: 'APBS · Tools by Plano Base',
    metaDescripcion:
      'Tools that do the calculation rather than explain it: curaduría ' +
      'charges, permit checks and whatever else turns out to be needed. With ' +
      'the formula from the decree and the source in plain sight.',
    faltaTitular: 'Is one missing?',
    faltaTexto:
      'These tools come out of questions people ask us. If there is a ' +
      'calculation you repeat by hand every time, write to us and we will ' +
      'look at it.',
    escribirnos: 'Write to us',
  },

  '': {
    h1: 'Plano Base Arquitectos, an architecture studio in Colombia, based in Cali',
    metaDescripcion:
      'A collaborative architecture studio working on the full development ' +
      'of educational, institutional, cultural and residential projects ' +
      'across Colombia.',
    ogAlt: 'Plano Base Arquitectos, architecture in Colombia',
  },

  '/contacto': {
    titulo: 'Contact',
    tarjetaTitulo: 'Let us talk about your project',
    metaDescripcion:
      'Tell us about your project. Architectural design and technical ' +
      'consultancy for projects of every scale in Bogotá, Medellín, ' +
      'Barranquilla, Cali and the rest of Colombia.',
    titular: 'Start your project with us',
    entrada:
      'Architectural design and technical consultancy for projects of every ' +
      'scale and complexity. Filling in the form commits you to nothing: we ' +
      'only need a few details to understand your idea, what you expect and ' +
      'your budget.',
  },

  '/politica-de-datos': {
    titulo: 'Data policy',
    tarjetaTitulo: 'Personal data policy · Plano Base',
    metaDescripcion:
      'What personal data Plano Base Arquitectos collects, what it uses them ' +
      'for, how long it keeps them and how you can see, correct or delete ' +
      'them. Ley 1581 de 2012.',
  },

  '/agendar': {
    incluyeTitular: 'What you take away from the first call',
    incluye1: 'Whether your project is technically feasible, and what constrains it.',
    incluye2: 'A real cost range for your municipality, not catalogue figures.',
    incluye3: 'The concrete steps to begin, in order and with timings.',
    condiciones: 'Terms',
    porWhatsapp: 'Book over WhatsApp',
    respuesta: 'We reply within the next working hour.',
    porFormulario: 'I would rather write through the form',
  },

  '/servicios': {
    titulo: 'Services',
    tarjetaTitulo: 'What Plano Base does',
    metaDescripcion:
      'Architectural design, feasibility studies, building diagnosis and ' +
      'construction supervision in Colombia. We start from your question, not ' +
      'from our catalogue.',
    titular: 'We start from your question, not from our catalogue.',
    entrada:
      'Every project arrives with a different question. Pick the one closest ' +
      'to yours and we will tell you what it involves, how long it takes and ' +
      'what it costs, before you sign anything.',
    escaleraTitular: 'Nobody signs a full project on day one.',
    cierre:
      'If you are not sure which of these is your question, that is what the ' +
      'first call is for.',
  },

  '/estudio': {
    titulo: 'The studio',
    metaDescripcion:
      'Plano Base is an architecture studio based in Cali, with work across ' +
      'Colombia. Most of it is public: schools, cultural centres, ' +
      'administrative offices and public space, with four awards in national ' +
      'public competitions.',
    equipoTitular: 'One architect and one project manager.',
    reconocimientosTitular: 'Five competition awards.',
    ambitoPublico: 'open public competition',
    ambitoPrivado: 'invited competition',
  },
}
