import type { Post } from '@/lib/types'

/**
 * Pieza del pilar de trámites dirigida a un público que el sitio todavía no
 * atiende: propietarios en copropiedad y administradores. Es tráfico constante
 * y de decisión rápida.
 *
 * Todo el articulado de la Ley 675 está verificado en el texto oficial. El
 * hallazgo que estructura el artículo: la fachada y las losas de cubierta son
 * bien común esencial **aunque estén dentro del apartamento**, y una reforma de
 * fachada exige dos cosas acumulativas —autorización de asamblea y licencia—,
 * no una u otra.
 *
 * Fechada en enero de 2025.
 */
export const post: Post = {
  slug: 'reformar-en-propiedad-horizontal',
  titulo: 'Reformar en propiedad horizontal: qué autoriza la asamblea y qué no',
  pilar: 'tramites',
  fecha: '2025-01-21',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Quiere tumbar un muro, cerrar el balcón o cambiar la ventana. Qué es suyo ' +
    'y qué es de la copropiedad —incluso dentro de su apartamento—, qué ' +
    'mayoría hace falta, y por qué el permiso de la asamblea no reemplaza la ' +
    'licencia.',
  metaDescripcion:
    'Qué reformas se pueden hacer en un apartamento, qué autoriza la asamblea ' +
    'y cuándo además hace falta licencia de construcción.',
  puerta: 'remodelacion-y-ampliacion',
  etiquetas: ['nacional', 'propietario', 'administrador', 'propiedad-horizontal', 'licencia'],
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Quiere tumbar un muro para unir la cocina con la sala. O cerrar el ' +
        'balcón. O cambiar la ventana por una más grande. Y alguien le dijo que ' +
        'pida permiso en la administración.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La respuesta real tiene tres capas, y saltarse cualquiera sale caro: ' +
        '**si el elemento es suyo o de la copropiedad, qué mayoría hace falta ' +
        'si es de la copropiedad, y si además necesita licencia.** Son ' +
        'independientes. Tener una no le da las otras.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué es suyo, aunque esté dentro de su apartamento' },
    {
      tipo: 'parrafo',
      texto:
        'Aquí está el dato que más sorprende, y está en la definición legal:',
    },
    {
      tipo: 'cita',
      texto:
        'Se reputan bienes comunes esenciales, el terreno sobre o bajo el cual ' +
        'existan construcciones o instalaciones de servicios públicos básicos, ' +
        'los cimientos, la estructura, las circulaciones indispensables […] las ' +
        'instalaciones generales de servicios públicos, las fachadas y los ' +
        'techos o losas que sirven de cubiertas a cualquier nivel.',
      fuente: 'Ley 675 de 2001, artículo 3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo otra vez: **la estructura, la fachada y las losas son bien común ' +
        'aunque estén dentro de su apartamento.** La columna que le estorba en ' +
        'la sala no es suya. La ventana da a la fachada, y la fachada tampoco.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Elemento', '¿De quién es?'],
      filas: [
        ['Columnas, vigas, muros estructurales', '**Común esencial**'],
        ['Fachada y ventanas que dan a ella', '**Común esencial**'],
        ['Losa de piso y de techo', '**Común esencial**'],
        ['Bajantes y redes generales', '**Común**'],
        ['Muros divisorios interiores no estructurales', 'Privado'],
        ['Acabados, enchapes, pintura interior, muebles', 'Privado'],
      ],
      nota:
        'Y hay un matiz que decide muchos casos: en un edificio de ' +
        '**mampostería estructural**, los muros divisorios también hacen parte ' +
        'del sistema. Ahí no existe el tabique inocente, y saber cuál es cuál ' +
        'ya requiere criterio técnico.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo que zanja cualquier discusión es el **reglamento de propiedad ' +
        'horizontal junto con los planos aprobados en la licencia**. La ley es ' +
        'explícita: son comunes «todos aquellos señalados como tales en los ' +
        'planos aprobados con la licencia de construcción».',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué puede hacer sin pedirle permiso a nadie' },
    {
      tipo: 'parrafo',
      texto:
        'Dentro de su bien privado, y sin tocar nada de lo anterior: pintar, ' +
        'cambiar pisos, cambiar enchapes, renovar la cocina, cambiar puertas ' +
        'interiores, mover un muro divisorio no estructural.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con un límite que la ley pone expresamente: usar el bien privado ' +
        '«absteniéndose de ejecutar acto alguno que **comprometa la seguridad o ' +
        'solidez del edificio**». Y una obligación que casi nadie conoce — ' +
        'ejecutar de inmediato las reparaciones en su bien privado cuya omisión ' +
        'pueda perjudicar al edificio, **resarciendo los daños que ocasione por ' +
        'su descuido**. La filtración que no arregla y le daña el techo al ' +
        'vecino de abajo es suya.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo hace falta la asamblea, y con qué mayoría' },
    {
      tipo: 'parrafo',
      texto:
        'La regla general es **la mitad más uno de los coeficientes ' +
        'representados en la sesión**. Pero hay decisiones que exigen mayoría ' +
        'calificada, y ahí está el error que más se repite:',
    },
    {
      tipo: 'cita',
      texto:
        'Las siguientes decisiones requerirán mayoría calificada del setenta ' +
        'por ciento (70 %) de los coeficientes de copropiedad **que integran el ' +
        'edificio o conjunto**.',
      fuente: 'Ley 675 de 2001, artículo 46',
    },
    {
      tipo: 'nota',
      texto:
        '**Del total del edificio, no del 70 % de los que asistieron.** Es una ' +
        'diferencia enorme y se cuenta mal todo el tiempo. Y esas decisiones ' +
        '**no se pueden tomar en reunión no presencial**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las que exigen ese 70 % y suelen aparecer en una reforma: modificar el ' +
        'reglamento de propiedad horizontal, desafectar un bien común no ' +
        'esencial, e imponer expensas extraordinarias que superen cuatro veces ' +
        'el valor de las expensas mensuales.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una que conviene conocer porque protege al propietario: **ningún ' +
        'reglamento puede exigir más del 70 %**, salvo para extinguir la ' +
        'propiedad horizontal. Las mayorías superiores que aparezcan en un ' +
        'reglamento «se entenderán por no escritas».',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El error caro: creer que el permiso reemplaza la licencia' },
    {
      tipo: 'parrafo',
      texto:
        'Cerrar un balcón, cambiar una ventana de fachada, unir dos ' +
        'apartamentos, abrir un vano en un muro estructural: **estas ' +
        'intervenciones exigen dos cosas a la vez, y son acumulativas.**',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Autorización de la asamblea**, porque toca un bien común.',
        '**Licencia de construcción**, en la modalidad que corresponda, porque es una intervención sobre lo construido.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna sustituye a la otra. Se ven los dos casos: quien saca licencia ' +
        'y no pide autorización —y la copropiedad le exige devolver la fachada ' +
        'a su estado— y quien consigue el permiso de la asamblea y construye sin ' +
        'licencia, exponiéndose a multa, a orden de demolición y a la ' +
        'suspensión de servicios públicos.',
    },
    {
      tipo: 'nota',
      texto:
        'Si abre un vano en un muro que resulta ser estructural, además de todo ' +
        'lo anterior necesita **diseño estructural firmado por ingeniero ' +
        'civil**. Y esa firma no la puede dar un arquitecto ni un maestro: la ' +
        'ley la reserva.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hacer, en orden' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Consiga el reglamento de propiedad horizontal y los planos de la licencia.** Ahí está qué es común y qué es privado en su edificio concreto.',
        '**Averigüe si el muro es estructural.** Con los planos, o con un profesional. No con un golpecito.',
        '**Si toca bien común, pida la autorización por escrito**, con el acta y la mayoría que corresponda.',
        '**Consulte si su intervención requiere licencia.** Muchas remodelaciones sí, y la consulta verbal en la curaduría es gratuita.',
        '**Avise a la administración antes de empezar**, aunque no necesite permiso: escombros, horarios y uso de ascensores casi siempre están reglamentados.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una advertencia de método: **el orden importa.** Pedir la licencia ' +
        'antes de tener la autorización de la asamblea es pagar expensas por ' +
        'algo que quizá no le dejen hacer.',
    },
  ],
  fuentes: [
    {
      titulo: 'Ley 675 de 2001, régimen de propiedad horizontal',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0675_2001.html',
      fecha: '2001-08-03',
    },
    {
      titulo: 'Decreto 1077 de 2015, modalidades de licencia de construcción',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 400 de 1997, artículo 26: quién firma el diseño estructural',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
  ],
}
