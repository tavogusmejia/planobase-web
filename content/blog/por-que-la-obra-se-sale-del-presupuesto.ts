import type { Post } from '@/lib/types'

/**
 * Pilar de costos. Perenne, y de las que más se comparten: casi todo el que ha
 * construido tiene esta historia.
 *
 * No da cifras ni porcentajes de sobrecosto: no existe fuente colombiana
 * publicada con metodología para eso, y un número inventado arruinaría un
 * artículo que va precisamente de por qué los números iniciales fallan.
 *
 * Fechado en marzo de 2026.
 */
export const post: Post = {
  slug: 'por-que-la-obra-se-sale-del-presupuesto',
  titulo: 'Por qué la obra se sale del presupuesto',
  pilar: 'costos',
  fecha: '2024-09-27',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Casi nunca es porque alguien mintió. Son ocho causas concretas, todas ' +
    'previsibles, y siete de ellas se controlan antes de poner el primer ' +
    'bulto. Cuáles son y qué se hace con cada una.',
  metaDescripcion:
    'Las ocho razones por las que una obra se sale del presupuesto en ' +
    'Colombia, y cómo se controla cada una antes de empezar.',
  puerta: 'interventoria-y-direccion-de-obra',
  etiquetas: ['nacional', 'propietario', 'costos', 'contrato'],
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Es tan común que se asume como ley natural: la obra siempre cuesta más ' +
        'de lo presupuestado. Y como se asume, no se investiga — cuando en ' +
        'realidad **casi nunca es una sola causa, y casi ninguna es mala fe**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Son ocho, y siete se controlan antes de poner el primer bulto.',
    },

    { tipo: 'titulo', nivel: 2, texto: '1. El presupuesto era un estimado, no un presupuesto' },
    {
      tipo: 'parrafo',
      texto:
        'La confusión más frecuente. Un **estimado** se hace por metro cuadrado ' +
        'sobre un área supuesta; un **presupuesto** se hace por cantidades de ' +
        'obra medidas sobre planos terminados.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando alguien da una cifra antes de que existan los planos técnicos, ' +
        'está estimando. Es legítimo y sirve para decidir si el proyecto es ' +
        'viable — pero **no es contra lo que se puede contratar**.',
    },
    {
      tipo: 'nota',
      texto:
        'La pregunta que lo aclara: **«¿esto sale de cantidades medidas o de un ' +
        'valor por metro cuadrado?»** Las dos respuestas son válidas. Lo que no ' +
        'es válido es no saber cuál le dieron.',
    },

    { tipo: 'titulo', nivel: 2, texto: '2. Faltaban partidas' },
    {
      tipo: 'parrafo',
      texto:
        'Las que más se olvidan no son las obvias. Casi siempre: estudio de ' +
        'suelos, diseños técnicos, expensas de curaduría, impuesto de ' +
        'delineación, conexiones de servicios, movimiento de tierras, ' +
        'cerramiento provisional, pólizas y ensayos de laboratorio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna es opcional, y varias hay que pagarlas **antes** de que salga ' +
        'la licencia. Un presupuesto que no las nombra no es más barato: está ' +
        'incompleto.',
    },

    { tipo: 'titulo', nivel: 2, texto: '3. El suelo no era el que se suponía' },
    {
      tipo: 'parrafo',
      texto:
        'Es la causa más cara de todas y la más fácil de evitar. La cimentación ' +
        'depende del suelo, y el suelo solo se conoce con sondeos. Si el ' +
        'estudio geotécnico llega después de presupuestar, **la cimentación ' +
        'presupuestada es una suposición**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y no es una partida menor: entre una cimentación superficial y una ' +
        'profunda hay una diferencia que cambia el proyecto entero, no solo su ' +
        'costo.',
    },
    {
      tipo: 'nota',
      texto:
        'Encargue el estudio de suelos **apenas tenga el lote**, incluso antes ' +
        'de dibujar. Es de lo poco que se puede adelantar sin haber decidido ' +
        'nada sobre la casa.',
    },

    { tipo: 'titulo', nivel: 2, texto: '4. Los cambios de opinión' },
    {
      tipo: 'parrafo',
      texto:
        'Es la causa más común y la única que depende enteramente del cliente. ' +
        'Mover un muro cuando ya está levantado no cuesta lo que cuesta el muro: ' +
        'cuesta demolerlo, sacar el escombro, rehacerlo, y el tiempo de la ' +
        'cuadrilla parada mientras se decide.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La norma lo tiene resuelto desde hace décadas: **salvo error del ' +
        'arquitecto, toda modificación se le cobra al contratante**. No es una ' +
        'cláusula abusiva — es lo que hace que un proyecto pueda terminar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La forma de controlarlo no es prohibir los cambios: es **cerrar el ' +
        'anteproyecto antes de dibujar el proyecto**, porque ahí un cambio ' +
        'cuesta una tarde y en obra cuesta una demolición.',
    },

    { tipo: 'titulo', nivel: 2, texto: '5. Las mayores cantidades sin regla' },
    {
      tipo: 'parrafo',
      texto:
        'En toda obra aparecen cantidades no previstas: más excavación, más ' +
        'relleno, más acero. Eso es normal. Lo que no es normal es que **no ' +
        'haya una regla pactada** sobre quién las aprueba, con qué precio ' +
        'unitario y con qué documento.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Sin esa regla, cada mayor cantidad es una negociación con usted en ' +
        'desventaja, porque la obra ya está empezada y detenerla cuesta más que ' +
        'aceptar el precio.',
    },

    { tipo: 'titulo', nivel: 2, texto: '6. El tiempo también cuesta' },
    {
      tipo: 'parrafo',
      texto:
        'Un atraso no es solo una molestia. Es cuadrilla que sigue cobrando, ' +
        'equipo alquilado que sigue facturando, arriendo que se sigue pagando ' +
        'mientras no se puede habitar, y materiales que suben de precio ' +
        'mientras tanto.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y los costos de construcción se mueven de verdad: el DANE los mide ' +
        'todos los meses. En un contrato largo, **el mismo alcance cuesta ' +
        'distinto a los seis meses**.',
    },
    {
      tipo: 'nota',
      texto:
        'Un dato útil para negociar: la mano de obra se ha estado moviendo ' +
        'bastante más rápido que el índice total de costos. Un contrato ' +
        'indexado con el índice general **subestima sistemáticamente la mano de ' +
        'obra**. Si su obra es intensiva en personal, conviene indexar por ' +
        'grupo de costo y no por el total.',
    },

    { tipo: 'titulo', nivel: 2, texto: '7. El incentivo de la modalidad de contrato' },
    {
      tipo: 'parrafo',
      texto:
        'Ninguna modalidad es mala, pero cada una empuja en una dirección y ' +
        'conviene saber cuál:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Modalidad', 'Hacia dónde empuja'],
      filas: [
        ['**Precio fijo**', 'El constructor asume el sobrecosto, así que su incentivo es **reducir costos**. Alguien tiene que verificar que no se reduzcan en lo que no se ve'],
        ['**Administración delegada**', 'El honorario es un porcentaje del costo, así que **quien administra gana más cuando la obra cuesta más**. Se corrige con presupuesto aprobado de antemano y regla de mayores cantidades'],
        ['**Por capítulos**', 'Nadie responde por el conjunto. La coordinación —y lo que se cae entre dos contratos— es suya'],
      ],
      nota:
        'No es cinismo: es diseño de contrato. Un incentivo mal alineado no ' +
        'convierte a nadie en deshonesto, pero hace que las decisiones difíciles ' +
        'caigan siempre del mismo lado.',
    },

    { tipo: 'titulo', nivel: 2, texto: '8. Nadie estaba verificando' },
    {
      tipo: 'parrafo',
      texto:
        'La octava no es una causa: es lo que permite que las otras siete pasen ' +
        'desapercibidas hasta que ya no hay remedio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si nadie mide cantidades contra lo facturado, si nadie revisa que los ' +
        'materiales sean los especificados, si nadie documenta los atrasos ' +
        'cuando ocurren — el sobrecosto no aparece de golpe al final. **Estuvo ' +
        'creciendo todo el tiempo y nadie lo estaba mirando.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué se hace' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Estudio de suelos antes de presupuestar.** No después.',
        '**Cierre el anteproyecto antes de que empiecen los planos técnicos.** Ahí es donde se decide barato.',
        '**Exija que el presupuesto liste lo que NO incluye**, y que nombre las nueve partidas del punto 2.',
        '**Pacte por escrito la regla de mayores cantidades**: quién aprueba, con qué precio, con qué documento.',
        '**Reserve un imprevisto y no lo toque para otra cosa.** Si termina sobrando, mejor.',
        '**Ponga a alguien a verificar**, aunque sea usted con una lista. Sin verificación, todo lo anterior es teoría.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una cosa que no está en ninguna lista: **un presupuesto notoriamente ' +
        'más barato que los demás no es una oportunidad.** Casi siempre sale de ' +
        'omitir partidas que hay que pagar igual, más tarde, y sin haberlas ' +
        'previsto.',
    },
  ],
  fuentes: [
    {
      titulo: 'Decreto 2090 de 1989, numeral 1.2.4.3: quién paga las modificaciones',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo: 'Índice de Costos de la Construcción de Edificaciones (ICOCED)',
      editor: 'Departamento Administrativo Nacional de Estadística',
      url: 'https://www.dane.gov.co/index.php/estadisticas-por-tema/precios-y-costos/indice-de-costos-de-la-construccion-de-edificaciones-icoced',
      fecha: null,
    },
    {
      titulo: 'Ley 400 de 1997, estudios geotécnicos y diseño estructural',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
  ],
}
