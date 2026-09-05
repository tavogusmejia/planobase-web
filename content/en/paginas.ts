import type { CopiaDe, RutaConCopia } from '@content/paginas'

/**
 * La copia de página, en inglés.
 *
 * Superposición: una clave ausente cae al español. Una ruta se considera
 * traducida cuando **todas** sus claves están aquí, y eso es lo que decide si
 * entra al índice inglés. Ver `src/lib/data/contenido.ts`.
 */
export const copiaPaginasEn: { [R in RutaConCopia]?: Partial<CopiaDe<R>> } = {
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
