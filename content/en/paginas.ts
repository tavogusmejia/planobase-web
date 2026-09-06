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
      'administrative offices and public space, with three awards in national ' +
      'public competitions.',
    equipoTitular: 'One architect and one project manager.',
    reconocimientosTitular:
      'Four competition awards: three in national public competitions and one invited.',
    ambitoPublico: 'open public competition',
    ambitoPrivado: 'invited competition',
  },

  /* Los dos rótulos del dossier van traducidos aunque la sección solo se pinte
     en español: el documento se genera únicamente en el idioma editorial —se
     adjunta a un pliego colombiano— y enlazarlo desde el inglés llevaría a un
     404. Están escritos para el día que exista en los dos idiomas, y mientras
     tanto no dejan la ruta a medio traducir. */
  '/experiencia': {
    titulo: 'Track record',
    /* No «what Plano Base has built»: la página también lista obra que no se
       construyó, y la tarjeta que se ve al compartir el enlace no puede
       prometer más de lo que hay debajo. */
    tarjetaTitulo: 'The Plano Base track record, with the figures',
    metaDescripcion:
      'Area, year, city and status for every Plano Base Arquitectos project, ' +
      'with the competition awards. Every figure is computed from the ' +
      'published portfolio.',
    titular: 'Every project the studio has done, with its area, its year and its status.',
    entrada:
      'This page is built for whoever has to assess a bidder. Every project ' +
      'with its area, its year, its city and its status, and every award with ' +
      'the placing and the kind of competition it came from. No figure here ' +
      'is typed by hand: all of them are computed from the published ' +
      'portfolio, so they change when the work changes.',
    tablaTitular: 'The projects, one by one',
    notaArea:
      'A dash marks a project whose area is not published. The square metre ' +
      'total adds up only the projects that state one, and says how many ' +
      'those are.',
    notaModalidad:
      'Built work means work completed. Competition entry means a proposal ' +
      'submitted to a competition. Unbuilt project means a commission that ' +
      'was designed and never reached site. Built work that began as a ' +
      'competition entry is listed as built, and its origin is stated.',
    reconocimientosTitular: 'Awards, with the placing and the kind of competition',
    dossierTitular: 'Do you need the document?',
    dossierTexto:
      'Each sector has a dossier with one sheet per project — area, year, ' +
      'place, client and project notes. Save it as a PDF from the print ' +
      'dialogue and attach it to a proposal.',
  },
}
