/**
 * La copia que vive en las páginas.
 *
 * Antes estaba soldada al JSX, y lo que está dentro de un `<h2>` no se puede
 * traducir ni revisar sin abrir un componente. La frontera con `messages/` es
 * ésta: **si la cadena la genera la página —un rótulo, un contador, un estado—
 * va a `messages`; si es una decisión editorial que el estudio querría revisar
 * antes de publicar, va aquí.**
 *
 * No es «corta o larga», que es un juicio. Es «¿la revisa Gustavo?», que se
 * responde mirando si su hermana ya vive en `content/`. El titular de una
 * sección y la `pregunta` de una puerta son la misma clase de frase, y hasta
 * ahora una estaba en el componente y la otra en `content/puertas.ts`.
 *
 * Indexado por la ruta sin prefijo de idioma, que es la misma llave que usa
 * `src/lib/i18n/publicacion.ts`.
 */
export const copiaPaginas = {
  '/estudio': {
    /* El title de Wix decía «Arquitectura bioclimática en Bogotá». El estudio
       tiene sede en Cali y su obra es sobre todo pública: era un error de
       posicionamiento, no solo de redacción. Lo que sí es cierto —y faltaba—
       es que la obra está repartida por el país: diez de los veinticuatro
       proyectos del portafolio están en Bogotá. */
    titulo: 'Estudio',
    metaDescripcion:
      'Plano Base es un estudio de arquitectura con sede en Cali y obra en ' +
      'todo el país. Trabajamos sobre todo en obra pública —colegios, centros ' +
      'culturales, sedes administrativas y espacio público— con cuatro ' +
      'reconocimientos en concurso público nacional.',
    equipoTitular: 'Un arquitecto y un gerente de proyectos.',
    reconocimientosTitular: 'Cinco reconocimientos en concurso.',
    ambitoPublico: 'concurso público',
    ambitoPrivado: 'concurso privado',
  },
} as const

export type RutaConCopia = keyof typeof copiaPaginas

/**
 * Las mismas claves, con el valor ensanchado a `string`.
 *
 * `as const` fija cada valor como su propio tipo literal, que es lo que hace
 * que `tieneCopia` funcione y que las claves se puedan enumerar. Pero una
 * traducción nunca es la misma cadena, así que la superposición inglesa
 * necesita el valor ensanchado. Las **claves** siguen comprobadas: un nombre de
 * clave mal escrito en `content/en/paginas.ts` no compila.
 */
export type CopiaDe<R extends RutaConCopia> = {
  [K in keyof (typeof copiaPaginas)[R]]: string
}

export function tieneCopia(ruta: string): ruta is RutaConCopia {
  return ruta in copiaPaginas
}
