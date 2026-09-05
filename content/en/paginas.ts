import type { CopiaDe, RutaConCopia } from '@content/paginas'

/**
 * La copia de página, en inglés.
 *
 * Superposición: una clave ausente cae al español. Una ruta se considera
 * traducida cuando **todas** sus claves están aquí, y eso es lo que decide si
 * entra al índice inglés. Ver `src/lib/data/contenido.ts`.
 */
export const copiaPaginasEn: { [R in RutaConCopia]?: Partial<CopiaDe<R>> } = {
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

  '/agendar': {
    incluyeTitular: 'What you take away from the session',
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
