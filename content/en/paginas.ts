import type { CopiaDe, RutaConCopia } from '@content/paginas'

/**
 * La copia de página, en inglés.
 *
 * Superposición: una clave ausente cae al español. Una ruta se considera
 * traducida cuando **todas** sus claves están aquí, y eso es lo que decide si
 * entra al índice inglés. Ver `src/lib/data/contenido.ts`.
 */
export const copiaPaginasEn: { [R in RutaConCopia]?: Partial<CopiaDe<R>> } = {
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
