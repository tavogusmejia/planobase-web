import type { Post } from '@/lib/types'

/**
 * Pilar de trámites. Público en una situación incómoda que busca en privado y
 * no le pregunta a nadie — por eso es contenido que convierte: quien llega aquí
 * tiene un problema concreto y necesita a alguien que no lo juzgue.
 *
 * Las sanciones salen de los artículos 103 a 105 de la Ley 388, modificados por
 * la Ley 810 de 2003, y el plazo de 60 días para tramitar la licencia antes de
 * la demolición está en el 105.
 *
 * El acto de reconocimiento se describe en general y sin inventar requisitos:
 * su procedimiento y sus condiciones varían y hay que confirmarlos en la
 * curaduría. Se dice así en el artículo.
 *
 * Fechado en julio de 2025.
 */
export const post: Post = {
  slug: 'construi-sin-licencia',
  titulo: 'Construí sin licencia: qué sanción hay y cómo se legaliza',
  pilar: 'tramites',
  fecha: '2025-07-08',
  actualizado: '2026-09-05',
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Amplió, levantó un piso o cerró una terraza sin permiso, y ahora quiere ' +
    'vender, hipotecar o simplemente dormir tranquilo. Qué riesgo real corre, ' +
    'qué es un acto de reconocimiento y por dónde se empieza.',
  metaDescripcion:
    'Qué sanciones hay por construir sin licencia en Colombia y cómo se ' +
    'legaliza una construcción existente.',
  puerta: 'diagnostico-de-edificaciones',
  etiquetas: ['nacional', 'propietario', 'licencia', 'norma-urbana'],
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Es una de esas cosas que la gente busca de noche y no le pregunta a ' +
        'nadie. Amplió la casa hace años, levantó un piso, cerró la terraza. ' +
        'Nadie dijo nada. Y ahora quiere vender, o hipotecar, o llegó una carta ' +
        'de la alcaldía.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo primero, sin dramatismo: **es más común de lo que parece y casi ' +
        'siempre tiene salida.** Lo segundo, sin ingenuidad: el riesgo es real ' +
        'y crece con el tiempo, no al revés.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué dice la ley' },
    {
      tipo: 'parrafo',
      texto:
        'Las sanciones urbanísticas están en la Ley 388, y son de tres tipos ' +
        'que pueden aplicarse juntos:',
    },
    {
      tipo: 'lista',
      items: [
        '**Multa.** Para quien parcele, urbanice o construya sin licencia, entre **100 y 500 salarios mínimos legales mensuales**, graduada según la gravedad y el área.',
        '**Orden de demolición** de lo construido sin licencia o en contravención de ella.',
        '**Suspensión de servicios públicos**, que es la que más rápido cambia la conversación.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Hay un matiz que conviene conocer y que da margen: antes de ordenar la ' +
        'demolición, la ley concede **60 días para tramitar la licencia** o el ' +
        'acto que corresponda. No es una amnistía, es una oportunidad — y se ' +
        'pierde si no se usa.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Además, la ley de construcciones sismo resistentes tiene su propia ' +
        'sanción para quien construya sin sujetarse a ella, y faculta a las ' +
        'alcaldías a ordenar la demolición de lo que la incumpla.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El riesgo que casi nadie contabiliza' },
    {
      tipo: 'parrafo',
      texto:
        'La multa suele no ser lo peor. Lo que de verdad pesa es que **una ' +
        'construcción no legalizada le quita liquidez al inmueble**:',
    },
    {
      tipo: 'lista',
      items: [
        '**No se puede vender bien.** Un comprador informado descuenta el costo de legalizar, o se retira.',
        '**No sirve de garantía.** Los bancos financian sobre el área legalmente reconocida, no sobre la construida.',
        '**El avalúo no la reconoce.** Los metros que no están en la licencia no existen para efectos comerciales.',
        '**El seguro puede objetar.** Si el siniestro afecta un área no licenciada, hay discusión.',
        '**Y en una sucesión, el problema se hereda**, normalmente en el peor momento.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Dicho de otro modo: **construir sin licencia no ahorró plata, la ' +
        'inmovilizó.**',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El camino: el acto de reconocimiento' },
    {
      tipo: 'parrafo',
      texto:
        'Para las construcciones que ya existen, la norma prevé una figura ' +
        'distinta de la licencia: el **acto de reconocimiento de la existencia ' +
        'de edificaciones**. Lo expide el curador urbano o la autoridad ' +
        'municipal, y su efecto es incorporar a la vida legal algo que se ' +
        'construyó sin permiso.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que casi siempre exige, y conviene ir sabiéndolo:',
    },
    {
      tipo: 'lista',
      items: [
        '**Que lo construido cumpla la norma urbana vigente** — o al menos que sea compatible con ella. Si ocupó el aislamiento posterior o superó la altura permitida, ahí está el problema de fondo.',
        '**Un peritaje técnico de la estructura existente**, firmado por ingeniero civil. Es el requisito más caro y el más importante: alguien tiene que responder por que eso se sostenga.',
        '**Levantamiento arquitectónico** de lo que existe, no de lo que se imaginó.',
        '**El pago de los derechos y del impuesto de delineación** que correspondan.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Los requisitos exactos, los plazos y las condiciones de procedencia ' +
        'varían y han cambiado con el tiempo. **Confírmelos en la curaduría de ' +
        'su ciudad antes de contratar nada** — la consulta verbal sobre normas ' +
        'urbanísticas es gratuita.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los tres escenarios' },
    {
      tipo: 'tabla',
      cabeceras: ['Situación', 'Qué esperar'],
      filas: [
        [
          '**Lo construido cumple la norma actual**',
          'El camino es administrativo: levantamiento, peritaje, trámite y pagos. Molesto y costoso, pero resoluble'
        ],
        [
          '**Lo construido excede la norma** (altura, aislamiento, índice)',
          'Aquí no basta con pagar. Puede exigirse **modificar o demoler la parte que excede**. Es la conversación difícil, y es mejor tenerla con un profesional antes que con un inspector'
        ],
        [
          '**Está en zona de riesgo, ronda hídrica o afectación vial**',
          'Es el peor escenario y a veces no tiene solución legal. Conviene saberlo pronto y no gastar en un trámite que no va a prosperar'
        ],
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por dónde empezar' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Pida el concepto de norma urbanística de su predio.** La consulta verbal es gratuita por norma; el concepto por escrito, que es el que sirve para reclamar, cuesta 8,34 UVT donde hay curaduría. Le dice qué permite la norma hoy, y sin ese dato no se puede saber si el caso es del primer escenario o del segundo.',
        '**Consiga el certificado de tradición** y revise si hay anotaciones, afectaciones o procesos.',
        '**Levante lo que realmente existe**, con medidas reales.',
        '**Contrate el peritaje estructural** solo cuando ya sepa que el caso es viable. Al revés se gasta plata en un informe que no se va a usar.',
        '**Y no espere la carta.** El trámite iniciado por voluntad propia se maneja distinto que el que empieza con una actuación administrativa encima.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Un apunte final que no es jurídico sino práctico: lo que se construyó ' +
        'sin licencia también se construyó, casi siempre, **sin diseño ' +
        'estructural y sin estudio de suelos**. Legalizarlo en el papel no lo ' +
        'vuelve seguro. El peritaje no es un requisito burocrático — es la ' +
        'parte del proceso que de verdad importa.',
    },
  ],
  fuentes: [
    {
      titulo: 'Ley 388 de 1997, artículos 103 a 105: sanciones urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339',
      fecha: '1997-07-18',
    },
    {
      titulo: 'Ley 810 de 2003, que modifica el régimen sancionatorio urbanístico',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8434',
      fecha: '2003-06-13',
    },
    {
      titulo: 'Decreto 1077 de 2015, licencias y actos de reconocimiento',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo: 'Ley 400 de 1997, artículos 51 y 52: sanciones y demolición',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
  ],
}
