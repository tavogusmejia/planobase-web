/**
 * Une las partes de un lugar sin repetir la que se repite.
 *
 * Bogotá no pertenece a Cundinamarca: es Distrito Capital, y en la división
 * político-administrativa del DANE figura como departamento por derecho
 * propio. Diez de los veinticuatro proyectos del portafolio están ahí, así que
 * la unión ingenua de ciudad y departamento produciría «Bogotá D.C., Bogotá
 * D.C.» en casi la mitad del portafolio —en los títulos, en los textos
 * alternativos de todas sus imágenes y en el JSON-LD—.
 *
 * Sin imports a propósito: la usan las páginas y también `prepare-media.ts`,
 * que corre fuera de Next y no resuelve los alias del proyecto.
 */
export function lugar(...partes: (string | null | undefined)[]): string {
  const limpias = partes
    .map((p) => p?.trim())
    .filter((p): p is string => Boolean(p))
  return [...new Set(limpias)].join(', ')
}
