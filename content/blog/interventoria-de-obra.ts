import type { Post } from '@/lib/types'

/**
 * Perenne del pilar de proceso, y la que sostiene la puerta de interventoría.
 *
 * Todo sale de material ya verificado: los honorarios de interventoría del
 * Decreto 2090, la supervisión técnica independiente de la Ley 1796 con su
 * umbral de 2.000 m², la revisión independiente de diseños del Decreto 1077 —que
 * prohíbe que la haga quien los elaboró— y la garantía decenal.
 *
 * El argumento no es moral sino estructural: nadie encuentra sus propios errores
 * con el mismo entusiasmo con que encuentra los ajenos, sobre todo si
 * corregirlos le cuesta. La ley lo reconoce y por eso exige independencia
 * laboral, no solo profesional distinto.
 *
 * Fechado en julio de 2023.
 */
export const post: Post = {
  slug: 'interventoria-de-obra',
  titulo: 'Interventoría: por qué el que construye no puede ser el que vigila',
  pilar: 'proceso',
  fecha: '2023-07-10',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'No es desconfianza ni burocracia: es que nadie encuentra sus propios ' +
    'errores con el mismo entusiasmo con que encuentra los ajenos. Qué hace un ' +
    'interventor, cuándo es obligatorio por ley y cuándo vale la pena en una ' +
    'casa.',
  metaDescripcion:
    'Qué es la interventoría de obra, cuándo es obligatoria en Colombia y por ' +
    'qué la independencia del constructor es lo único que importa.',
  puerta: 'interventoria-y-direccion-de-obra',
  etiquetas: ['nacional', 'propietario', 'administrador', 'contrato', 'estructura'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La pregunta llega casi siempre con un tono de incomodidad: «¿le voy a ' +
        'pagar a alguien para que vigile a otro al que también le estoy ' +
        'pagando?». Dicho así suena a desconfianza, o a un gasto que se puede ' +
        'ahorrar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'No es ninguna de las dos cosas. **Nadie encuentra sus propios errores ' +
        'con el mismo entusiasmo con que encuentra los ajenos**, sobre todo si ' +
        'corregirlos le cuesta plata y tiempo. No es un juicio sobre la ' +
        'honestidad de nadie: es cómo funcionan los incentivos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La ley colombiana lo reconoce, y en algunos casos lo vuelve ' +
        'obligatorio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Tres cosas que se confunden' },
    {
      tipo: 'tabla',
      cabeceras: ['Figura', 'Qué hace', 'A favor de quién trabaja'],
      filas: [
        [
          '**Dirección de obra**',
          'Está a cargo de ejecutar: personal, programación, calidad, seguridad',
          'Del constructor. Es parte de construir',
        ],
        [
          '**Supervisión arquitectónica**',
          'El autor del proyecto cuida que lo construido se parezca a lo diseñado. Acabados, dudas de interpretación de sus planos',
          'Del proyecto',
        ],
        [
          '**Interventoría**',
          'Vigila técnica, contractual y económicamente al que construye',
          '**Suya**, y solo suya',
        ],
      ],
      nota:
        'La norma de honorarios lo dice sin rodeos sobre el arquitecto: «tiene ' +
        'únicamente la función de supervisión de su proyecto y no la dirección ' +
        'técnica de la obra». Son tres contratos distintos, y con frecuencia ' +
        'tres personas distintas.',
    },
    {
      tipo: 'nota',
      texto:
        'El error más común en obra pequeña es creer que el arquitecto que hizo ' +
        'los planos «está pendiente de la obra». Lo está de **su proyecto**, si ' +
        'se contrató la supervisión. Eso no es interventoría y no cubre lo ' +
        'mismo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo la ley la exige' },
    {
      tipo: 'parrafo',
      texto:
        'Hay dos casos en los que la independencia dejó de ser opcional en ' +
        'Colombia, y los dos vienen de la misma idea.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Supervisión técnica independiente, por encima de 2.000 m²' },
    {
      tipo: 'parrafo',
      texto:
        'Las edificaciones cuyo predio permita superar los **2.000 m² de área ' +
        'construida** deben someterse a una supervisión técnica **independiente ' +
        'del constructor**. Y ese supervisor es quien expide, bajo la gravedad ' +
        'de juramento, el **certificado técnico de ocupación** — el documento ' +
        'desde el cual empiezan a correr los diez años de garantía de la ' +
        'vivienda nueva.',
    },
    {
      tipo: 'nota',
      texto:
        'Un matiz que se lee mal a menudo: se exceptúan las estructuras que se ' +
        'diseñen y construyan siguiendo el Título E del reglamento sismo ' +
        'resistente, de viviendas de uno y dos pisos. Pero la exención es de ' +
        '**supervisión**, no de tener diseñador estructural e ingeniero ' +
        'geotecnista responsables. Esos siguen siendo obligatorios.',
    },
    { tipo: 'titulo', nivel: 3, texto: 'Revisión independiente de los diseños' },
    {
      tipo: 'parrafo',
      texto:
        'Por encima del mismo umbral, los diseños estructurales deben ser ' +
        'revisados por un profesional **distinto del diseñador e independiente ' +
        'laboralmente de él**, a costa de quien solicita la licencia. La norma ' +
        'de licencias lo repite: el revisor «no puede ser el mismo profesional ' +
        'que los elaboró, ni puede tener relación laboral o contractual con ' +
        'este».',
    },
    {
      tipo: 'parrafo',
      texto:
        'Fíjese en la exigencia: no basta con que sea otra persona. **Tiene que ' +
        'ser laboralmente independiente.** Dos ingenieros de la misma oficina ' +
        'no cumplen. Ese nivel de detalle solo se escribe cuando alguien ya ' +
        'intentó lo contrario.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué hace un interventor' },
    {
      tipo: 'lista',
      items: [
        '**Verifica que lo construido corresponda a lo diseñado**, y que los materiales sean los especificados y no los que llegaron.',
        '**Controla cantidades.** Lo que se factura debe estar en obra. Es donde suele aparecer la mayor diferencia entre lo pagado y lo ejecutado.',
        '**Revisa el cronograma** y documenta los atrasos cuando ocurren, no cuando se reclaman.',
        '**Exige y archiva ensayos de laboratorio**: resistencia del concreto, compactación, calidad del acero.',
        '**Autoriza o rechaza actas parciales de pago.** Esta es su función más importante y la que le da poder real.',
        '**Deja constancia escrita.** Bitácora, actas y registro fotográfico fechado.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'La última es la que más se subestima. **Un interventor sin autoridad ' +
        'sobre los pagos es un observador caro.** Si el constructor cobra igual ' +
        'con o sin su visto bueno, la interventoría es decorativa.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuánto cuesta' },
    {
      tipo: 'parrafo',
      texto:
        'La referencia colombiana sigue siendo la norma de honorarios de 1989 ' +
        '—que ya no obliga, pero es de donde sale casi cualquier cotización—:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Tipo de interventoría', 'Honorario'],
      filas: [
        ['Interventoría **del proyecto** (revisar los diseños antes de construir)', '15 % de los honorarios de proyecto y supervisión'],
        ['Interventoría **de construcción** en vivienda, restauración y reformas', '**4,0 % del costo real** de la obra'],
        ['Interventoría de construcción en las demás categorías', '2,5 % del costo real'],
      ],
      nota:
        'Decreto 2090 de 1989, numerales 6.2.1 y 6.2.2. No son tarifas ' +
        'obligatorias: el decreto perdió su fundamento legal y el Consejo de ' +
        'Estado lo confirmó en 2020. Son la referencia técnica del oficio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Puesto en contexto: **el 4 % sobre una obra es menos de lo que suele ' +
        'costar una sola partida mal ejecutada** que haya que demoler y rehacer. ' +
        'La interventoría no se paga sola siempre, pero se paga sola con una ' +
        'vez que evite.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La independencia es todo el punto' },
    {
      tipo: 'parrafo',
      texto:
        'Si de este artículo se lleva una sola cosa, que sea esta: ' +
        '**la interventoría solo funciona si quien la ejerce no depende del que ' +
        'construye.**',
    },
    {
      tipo: 'parrafo',
      texto: 'Las tres formas de romperla, todas frecuentes:',
    },
    {
      tipo: 'lista',
      items: [
        '**El constructor «le consigue» el interventor.** Aunque sea competente, su próximo contrato depende de esa relación, no de la suya.',
        '**El interventor es de la misma oficina** que diseñó o que construye. Es exactamente lo que la norma prohíbe para la revisión de diseños.',
        '**El interventor cobra por avance de obra.** Si le pagan cuando la obra avanza, tiene un incentivo para que avance, no para que se detenga cuando debe detenerse.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'La pregunta que lo revela todo: **¿quién despide al interventor si el ' +
        'constructor se queja de él?** Si la respuesta no es «yo», no hay ' +
        'interventoría.',
    },

    { tipo: 'titulo', nivel: 2, texto: '¿Vale la pena en una casa?' },
    {
      tipo: 'parrafo',
      texto:
        'Por debajo de los 2.000 m² no es obligatoria, pero la lógica no cambia ' +
        'con el tamaño. Vale la pena cuando se cumple alguna de estas:',
    },
    {
      tipo: 'lista',
      items: [
        '**Usted no puede estar en obra.** Vive en otra ciudad, o trabaja. La interventoría es su presencia técnica.',
        '**No escogió al constructor.** Se lo recomendaron, o viene con el lote.',
        '**El contrato es a precio fijo.** Ahí el incentivo del constructor es reducir costos, y alguien tiene que verificar que no se reduzcan en lo que no se ve.',
        '**El contrato es por administración delegada.** Ahí el incentivo es el contrario —el honorario crece con el costo— y hace falta quien valide las cantidades.',
        '**Hay estructura de por medio.** Ampliar, levantar un piso, reforzar. Lo que queda mal ahí no se ve hasta que importa.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Y cuándo probablemente no: una remodelación menor, sin tocar ' +
        'estructura, con un maestro que usted conoce y en una casa donde usted ' +
        'está todos los días. Ahí la interventoría es un costo sin función.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Para qué sirve el papel' },
    {
      tipo: 'parrafo',
      texto:
        'Los informes de interventoría parecen burocracia hasta el día en que ' +
        'hay que reclamar. Entonces son la única prueba de qué pasó y cuándo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Importa especialmente en vivienda nueva: el constructor responde por ' +
        'los perjuicios patrimoniales durante **diez años contados desde el ' +
        'certificado técnico de ocupación**. Diez años es mucho tiempo para ' +
        'discutir de memoria. Con bitácora, actas y fotos fechadas, la ' +
        'conversación es otra.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La interventoría no encarece la obra. **Encarece hacerla mal**, que es ' +
        'exactamente para lo que existe.',
    },
  ],
  fuentes: [
    {
      titulo: 'Ley 1796 de 2016, supervisión técnica independiente y certificado técnico de ocupación',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Decreto 1077 de 2015, art. 2.2.6.1.2.2.3: revisión independiente de los diseños',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Decreto 2090 de 1989, numerales 6.2.1 y 6.2.2: honorarios de interventoría',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo: 'Sentencia del 28 de agosto de 2020: el Decreto 2090 no es criterio obligatorio',
      editor: 'Consejo de Estado, Sección Primera',
      url: 'https://www.consejodeestado.gov.co/wp-content/uploads/2020/12/SanFiscSAC.pdf',
      fecha: '2020-08-28',
    },
  ],
  portada: null,
}
