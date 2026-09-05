/**
 * Un nodo de datos estructurados.
 *
 * Existe por una razón concreta y no por ordenar: con el blog, el contenido
 * editorial entra en el grafo —titulares, celdas de tabla, notas, pies de
 * figura— y `JSON.stringify` no escapa `<`. Un solo «<» en cualquiera de esos
 * campos cierra la etiqueta de script antes de tiempo y vuelca el resto del
 * JSON al documento como marcado. Sustituir cada `<` por su escape unicode lo
 * hace imposible sin cambiar el valor: dentro de una cadena JSON las dos
 * formas son el mismo carácter para cualquier lector.
 *
 * Acepta un nodo o una lista de nodos, que es como se emite un artículo con su
 * miga de pan.
 */
export function JsonLd({
  datos,
}: {
  datos: Record<string, unknown> | Record<string, unknown>[]
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(datos).replace(/</g, '\\u003c'),
      }}
    />
  )
}
