import type { Peldano, Puerta } from '@content/puertas'

/**
 * Las puertas y la escalera, en inglés.
 *
 * Superposición por `slug` y por número de peldaño. Lo que falte cae al
 * español, y una página no se indexa en inglés hasta que su puerta está entera:
 * ver `src/lib/data/contenido.ts`.
 *
 * Registro: el español va en «usted» y el inglés no tiene esa distinción. El
 * equivalente es la segunda persona llana, sin contracciones y sin promesas
 * infladas — el mismo tono que ya sostiene `messages/en.json`.
 */

type PuertaTraducible = Partial<
  Pick<Puerta, 'pregunta' | 'nombre' | 'respuesta' | 'para'>
>

export const puertas: Record<string, PuertaTraducible> = {
  'proyecto-nuevo': {
    pregunta: 'I have a plot and I want to build on it.',
    nombre: 'New build',
    respuesta:
      'We check what the planning rules allow on your plot, what can be built ' +
      'and what it costs, before drawing anything. Then we develop the full ' +
      'project through to the drawings the building permit is filed with.',
    para: 'Owners with a plot anywhere in Colombia.',
  },
  'remodelacion-y-ampliacion': {
    pregunta: 'I already have the house and I want to change it.',
    nombre: 'Renovation and extension',
    respuesta:
      'We start from what is actually there: what can come down, what will ' +
      'carry another floor, and what costs more than it looks. Design, works ' +
      'planning and finishes, with no surprises halfway through.',
    para: 'People already living in the building who need more space, or a different one.',
  },
  'diseno-a-medida': {
    pregunta: 'I want a bespoke design and I do not know where to start.',
    nombre: 'Bespoke design',
    respuesta:
      'We start from how you want to live or work, not from a drawing. We set ' +
      'the brief, the budget and the timeline in order, and that turns into ' +
      'something you can look at and correct — massing, plans, images — before ' +
      'committing to anything.',
    para: 'People who are clear about the intention and not yet about the commission.',
  },
  'diagnostico-de-edificaciones': {
    pregunta: 'It is cracking. It leaks. Something is wrong.',
    nombre: 'Building diagnosis',
    respuesta:
      'A technical inspection to establish what is happening and why, before ' +
      'spending on repairs that do not address the cause. You get the ' +
      'diagnosis in writing, with the remedies and the order to do them in.',
    para: 'Owners, building managers and residents committees.',
  },
  'interventoria-y-direccion-de-obra': {
    pregunta: 'I need someone to keep an eye on my building site.',
    nombre: 'Construction supervision',
    respuesta:
      'Technical supervision independent of the contractor: quality control, ' +
      'programme, quantities and regulatory compliance, with reports that are ' +
      'put in writing and hold up if you have to make a claim.',
    para: 'Anyone who hired a third party to build and does not want to rely on their word.',
  },
  'espacio-publico-y-equipamientos': {
    pregunta: 'We need to get a public project built.',
    nombre: 'Public space and civic buildings',
    respuesta:
      'Schools, cultural centres, administrative offices and public space. It ' +
      'is where most of our work is, and where our four awards in national ' +
      'public competitions come from.',
    para: 'Public bodies, welfare funds, developers and foundations.',
  },
  'opinion-profesional': {
    pregunta: 'I need a professional opinion from someone who knows.',
    nombre: 'Professional opinion',
    respuesta:
      'An architect looks at what you already have — a drawing, a quote, ' +
      'someone else’s report — and tells you what is sound, what is missing ' +
      'and what they would ask before signing. The first conversation costs ' +
      'nothing. If the case calls for more, you get a written technical ' +
      'opinion.',
    para: 'Anyone about to make an expensive decision who wants an independent reading.',
  },
}

type PeldanoTraducible = Partial<Pick<Peldano, 'nombre' | 'entrega'>>

/** Por el número del peldaño, que es su identidad y no cambia. */
export const escalera: Record<number, PeldanoTraducible> = {
  1: {
    nombre: 'Technical consultation',
    entrega:
      'Fifteen minutes with an architect. We tell you whether we can help, ' +
      'what your case involves and what the next step is.',
  },
  2: {
    nombre: 'Site visit with report',
    entrega:
      'We go to the plot or the building. You come away with a written ' +
      'report: what you have, what constrains it, what needs doing and in ' +
      'what order.',
  },
  3: {
    nombre: 'Feasibility study',
    entrega:
      'What the planning rules allow on your plot, what can be built, a ' +
      'rough budget per square metre, and a programme.',
  },
  4: {
    nombre: 'Concept design',
    entrega:
      'Site layout, plans, massing and images. The project stops being an ' +
      'idea and becomes something you can look at and correct.',
  },
  5: {
    nombre: 'Detailed design and building permit',
    entrega:
      'Construction drawings, coordination with the other engineering ' +
      'disciplines, and filing with the urban curator’s office.',
  },
  6: {
    nombre: 'Construction administration',
    entrega:
      'Technical support during construction, with reports and control of ' +
      'quantities.',
  },
}
