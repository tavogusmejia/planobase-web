import type { Post } from '@/lib/types'

/**
 * La entrada fundacional del blog, de octubre de 2022. Es la única que había
 * en Wix y se conserva tal cual la escribió Eduardo.
 *
 * Dos correcciones al migrarla, ninguna de contenido:
 *
 * 1. Se retiraron dos párrafos huérfanos —«Planta centro cultural en Guaviare»
 *    y «Propuesta para una Cabaña»— que en Wix eran pies de foto y aquí se
 *    pintaban como texto corrido, sin imagen delante. El primero además
 *    repetía, con otra redacción, el pie de la portada.
 * 2. Comillas rectas del volcado (`"TODO SON VENTAS"`) sustituidas por las
 *    angulares que usa el resto del sitio.
 */
export const post: Post = {
  slug: 'bienvenidos-a-plano-base',
  titulo: 'Bienvenidos a Plano Base',
  pilar: 'casos',
  fecha: '2022-10-01',
  actualizado: null,
  autor: 'Eduardo Mejía',
  resumen:
    'Por qué Plano Base existe: crear empresa desde la arquitectura, en ' +
    'pospandemia, con una misión concreta — agregar valor en cada proyecto, ' +
    'sea cual sea su escala.',
  metaDescripcion:
    'Por qué nace Plano Base Arquitectos: crear empresa desde la arquitectura ' +
    'en pospandemia, y la misión de agregar valor en cada proyecto.',
  puerta: null,
  portada: {
    path: 'blog/bienvenidos-a-plano-base.webp',
    width: 1004,
    height: 638,
    blurDataURL:
      'data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAQCdASoQAAoAA4BaJZQCdAEO4W9BH2AA/vcFWfqteVYKp6ypUtmEVP+CjHEEmEi4AA==',
    alt: 'Planta del centro cultural en Guaviare, dibujo del proyecto.',
  },
  fuentes: [],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Llega un momento en la vida de un arquitecto en la que confluyen ' +
        'varias situaciones que lo obligan a encaminarse en la difícil tarea ' +
        'de crear empresa. Ese momento me llegó a mí hace rato; este es mi ' +
        'segundo intento.',
    },
    {
      tipo: 'parrafo',
      texto:
        'No solo es difícil, desde el punto de vista del estrés que genera ' +
        'tener que salir del plano creativo en el que quisiera permanecer, ' +
        'sino que también, es como tener un hijo —spoiler alert—; demanda de ' +
        'cuidado, mucho trabajo, mucha inversión, de mucha paciencia y por ' +
        'supuesto de mucho amor.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hace 10 años me dedico a esta profesión, de los cuales llevo ' +
        'intentando crear empresa y hacerla funcionar, unos 8 años —porque ' +
        'dentro de lo difícil que es tener una empresa, lo fácil es crearla, ' +
        'lo realmente difícil es hacerla rentable—. Plano Base Arquitectos ' +
        'nace con la dificultad que trajo consigo la pandemia de COVID-19, ' +
        'nace sin proyectos, es decir nace siendo un proyecto en sí mismo, ' +
        'una labor a desarrollar en el tiempo. Aun así nace con la convicción ' +
        'de hacer las cosas bien, enfrentando las responsabilidades que trae ' +
        'consigo tomar la decisión de emprender. Y es que es emprender, ' +
        'buscar la forma de venderle arquitectura a la gente, porque como ' +
        'dicen las publicidades de mentores online que tira Instagram cada 2 ' +
        'o 3 reels… «TODO SON VENTAS». No importa lo románticos que ' +
        'quisiéramos ser con nuestra profesión, esa de crear belleza y forma, ' +
        'la de construir espacios con la luz, la de evocar y provocar, la de ' +
        'lo tectónico y estereotómico, al final necesitas un cliente, que te ' +
        'compra eso que vendes, que es un servicio, pero también un producto, ' +
        'es tangible e intangible.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Por supuesto este oficio no es económico, pensar un edificio ' +
        'económico requiere de la más precisa de las arquitecturas y eso hace ' +
        'que los posibles clientes que contratan servicios de arquitectura ' +
        'sea más limitado, sobre todo en una economía como la colombiana, ' +
        'donde históricamente se ha visto a la arquitectura como algo ' +
        'superfluo, mas no como algo fundamental para desarrollar cualquier ' +
        'tipo de espacio que vaya a ser habitado de algún modo por un ser ' +
        'humano.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Creo que la arquitectura no es solo indispensable para construir ' +
        'espacios habitables, sino que tiene una misión de suma importancia, ' +
        'que es agregar valor.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una casa vale más si fue diseñada con cuidado por un arquitecto y ' +
        'vale más si ese arquitecto es reconocido; el valor agregado es en ' +
        'principio el dominio técnico y la previsión a futuro que tenga el ' +
        'arquitecto diseñador, también es la manifestación del pensamiento de ' +
        'ese arquitecto, como un cuadro o una escultura para un artista y, ' +
        'como cualquier obra de arte, es un activo que si se conserva ' +
        'adecuadamente nunca perderá valor.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso hacemos los arquitectos, agregamos valor y esa es la misión de ' +
        'Plano Base: juntar mentes emprendedoras, creativas, visionarias y ' +
        'comprometidas para asegurarnos de agregar valor en cada proyecto.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En el cumplimiento de esa misión les estaré contando por dónde nos ' +
        'lleva el camino de este emprendimiento que se viene madurando desde ' +
        '2020 y que apenas ahora empieza a tener forma y fondo; también les ' +
        'iré contando cómo llegamos hasta aquí, ¿por qué el nombre?, les ' +
        'contaré sobre nuestros métodos y nuestros procesos, porque además ' +
        'queremos que las personas entiendan todo lo que conlleva hacer ' +
        'arquitectura, pospandemia, emprendiendo desde cero.',
    },
    {
      tipo: 'parrafo',
      texto: 'Bienvenidos a este blog. Bienvenidos a Plano Base Arquitectos.',
    },
  ],
}
