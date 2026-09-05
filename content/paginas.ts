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
  '/blog': {
    metaDescripcion:
      'Cómo se lee una fisura, cuánto cuesta construir por metro cuadrado y ' +
      'qué exige una licencia en cada ciudad. Notas técnicas de un estudio ' +
      'de arquitectura colombiano, con las fuentes a la vista.',
    entrada:
      'Cómo se lee una fisura, cuánto cuesta construir por metro cuadrado y ' +
      'qué exige una licencia en cada ciudad. Notas técnicas, con las fuentes ' +
      'a la vista.',
    ultimo: 'Lo último',
    masEntradas: 'Más entradas',
  },

  '/apbs': {
    titulo: 'APBS',
    tarjetaTitulo: 'APBS · Herramientas de Plano Base',
    metaDescripcion:
      'Herramientas que hacen el cálculo, no que lo expliquen: expensas de ' +
      'curaduría, verificaciones de trámite y lo que vaya haciendo falta. Con ' +
      'la fórmula del decreto y la fuente a la vista.',
    faltaTitular: '¿Falta alguna?',
    faltaTexto:
      'Estas herramientas salen de preguntas que nos hacen. Si hay un cálculo ' +
      'que usted repite a mano cada vez, escríbanos y lo miramos.',
    escribirnos: 'Escribirnos',
  },

  '': {
    /* El `h1` de la portada, que solo leen el rastreador y los lectores de
       pantalla. Dice las dos cosas a propósito: el alcance es nacional y la
       sede es Cali. La primera se gana por contenido y la segunda por
       proximidad, y no compiten. */
    h1: 'Plano Base Arquitectos, estudio de arquitectura en Colombia, con sede en Cali',
    metaDescripcion:
      'Estudio colaborativo de arquitectura dedicado al desarrollo integral ' +
      'de proyectos educativos, institucionales, culturales y residenciales ' +
      'en Colombia.',
    ogAlt: 'Plano Base Arquitectos, arquitectura en Colombia',
  },

  '/politica-de-datos': {
    titulo: 'Política de datos',
    tarjetaTitulo: 'Política de tratamiento de datos · Plano Base',
    metaDescripcion:
      'Qué datos personales recoge Plano Base Arquitectos, para qué los usa, ' +
      'cuánto los conserva y cómo puede usted conocerlos, corregirlos o pedir ' +
      'que se eliminen. Ley 1581 de 2012.',
  },

  '/contacto': {
    titulo: 'Contáctenos',
    tarjetaTitulo: 'Hablemos de su proyecto',
    metaDescripcion:
      'Cuéntenos su proyecto. Diseño arquitectónico y consultoría técnica ' +
      'para proyectos de distinta escala en Bogotá, Medellín, Barranquilla, ' +
      'Cali y el resto de Colombia.',
    titular: 'Inicie su proyecto con nosotros',
    entrada:
      'Diseño arquitectónico y consultoría técnica de proyectos de distinta ' +
      'escala y complejidad. Completar el formulario no implica ningún ' +
      'compromiso: solo necesitamos algunos datos para entender su idea, sus ' +
      'expectativas y su presupuesto.',
  },

  '/agendar': {
    /* Los tres puntos son exactamente lo que promete el anuncio, así que la
       página tiene que sostenerlos. El segundo decía «para el Valle del
       Cauca» y el estudio trabaja en todo el país: es la tarea 5.1 en la
       página donde se convierte. */
    incluyeTitular: 'Qué se lleva de la primera llamada',
    incluye1: 'Si su proyecto es técnicamente viable, y qué lo condiciona.',
    incluye2: 'Un rango real de costos para su municipio, sin cifras de catálogo.',
    incluye3: 'Los pasos concretos para empezar, en orden y con tiempos.',
    condiciones: 'Condiciones',
    porWhatsapp: 'Agendar por WhatsApp',
    respuesta: 'Respondemos dentro de la siguiente hora hábil.',
    porFormulario: 'Prefiero escribir por el formulario',
  },

  '/servicios': {
    titulo: 'Servicios',
    tarjetaTitulo: 'Servicios de Plano Base',
    metaDescripcion:
      'Diseño arquitectónico, estudios de viabilidad, diagnóstico de ' +
      'edificaciones e interventoría de obra en Colombia. Empezamos por su ' +
      'pregunta, no por nuestro catálogo.',
    titular: 'Empezamos por su pregunta, no por nuestro catálogo.',
    entrada:
      'Cada proyecto llega con una pregunta distinta. Elija la que se parece ' +
      'a la suya y le decimos qué implica, cuánto toma y cuánto cuesta antes ' +
      'de que firme nada.',
    escaleraTitular: 'Nadie firma un proyecto completo el primer día.',
    cierre: 'Si no sabe cuál de todas es su pregunta, esa es la primera llamada.',
  },

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
