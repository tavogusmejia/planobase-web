import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Qué es un anteproyecto y por qué no se puede saltar».
 *
 * El término que gobierna la pieza es **anteproyecto → concept design**, que
 * es lo que ya usan `cuanto-cobra-un-arquitecto`,
 * `cuanto-cuesta-construir-por-m2-en-colombia` y otros dos artículos
 * publicados. Como aquí el anteproyecto convive con el esquema básico, ese
 * segundo peldaño va como **outline scheme**: es anterior y no compite con el
 * primero.
 *
 * Las dos negativas se traducen enteras: el Decreto 2090 **ya no obliga** —
 * decayó y el Consejo de Estado lo confirmó en 2020— y **ninguna norma
 * colombiana fija un número de revisiones incluidas**. Ni una ni otra se
 * suaviza, y no se añade ningún número de revisiones «habitual».
 *
 * El original cita la definición de anteproyecto dos veces con dos redacciones
 * ligeramente distintas —la tabla sin «suficientes», la nota con él—. Se
 * conserva la diferencia tal cual: corregirla aquí haría divergir los idiomas.
 */
export const traduccion: TraduccionPost = {
  slug: 'que-es-un-anteproyecto',
  titulo: 'What a concept design is, and why you cannot skip it',
  traducido: '2026-09-05',
  resumen:
    '"Just send me some drawings so I can apply for the permit" is the ' +
    'request that skips the stage where everything is decided. What each ' +
    'design stage is, what is handed over at each one, and why changing your ' +
    'mind costs a hundred times more on site than on a drawing.',
  metaDescripcion:
    'What an architectural concept design is, what is delivered at each ' +
    'design stage, and why skipping it turns out expensive.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'There is a request that comes in often and sounds perfectly ' +
        'reasonable: "just send me some drawings so I can apply for the ' +
        'permit". What it asks for is the final product, skipping the two ' +
        'stages where what is going to be built is really decided.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is not method for its own sake. It is that **a decision costs ' +
        'very different amounts depending on when it is taken**, and that ' +
        'difference is what explains why design is split into stages.',
    },

    { tipo: 'titulo', texto: 'The four stages' },
    {
      tipo: 'parrafo',
      texto:
        'The only Colombian source that defines them precisely is a 1989 fee ' +
        'schedule that is no longer binding — it lost its legal foundation — ' +
        'but which remains the vocabulary of the profession. These are its ' +
        'own words:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Stage', 'What it is, in the words of the rule', '% of the fee'],
      filas: [
        [
          '**Outline scheme**',
          '"General outline of the project", which can be done even **without having the definitive site**. Zones, access, how the rooms relate to one another',
          '7%',
        ],
        [
          '**Concept design**',
          '"The general idea of the project": floor plans, sections and elevations enough to understand the building, **without including drawings sufficient to execute the works**',
          'up to 15%',
        ],
        [
          '**Architectural project**',
          '"All the information needed for the construction to be executed correctly". Details, specifications, technical coordination and the permit application',
          'up to 90%',
        ],
        [
          '**Architectural site supervision**',
          'Site visits, choice of finishes, questions about how the drawings are to be read',
          'the remaining 10%',
        ],
      ],
      nota:
        'Decreto 2090 de 1989, paragraphs 1.1.1 to 1.1.4 and 1.2.4.2. The ' +
        'percentages are the reference from which almost any fee proposal in ' +
        'Colombia is derived, even though today they are not binding.',
    },
    {
      tipo: 'nota',
      texto:
        'Look closely at the phrase that defines the concept design: ' +
        '**"without including drawings sufficient to execute the works"**. ' +
        'It is deliberate. A concept design is not an unfinished project: it ' +
        'is a different product, with a different purpose.',
    },

    { tipo: 'titulo', texto: 'What it is for, exactly' },
    {
      tipo: 'parrafo',
      texto:
        'The concept design exists so that you can **look and correct before ' +
        'committing**. It is the first time the project stops being a ' +
        'conversation and turns into something with dimensions.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is what it settles, and what can still be changed at no cost:',
    },
    {
      tipo: 'lista',
      items: [
        'Where the house stands on the plot, and how much garden is left over.',
        'How many storeys, and what goes on each one.',
        'Where you come in, and what you see as you do.',
        'Which side the sun comes from and where the air crosses through.',
        'The real size of each space — which almost never matches the imagined one.',
        'And the order of magnitude of the cost, which can be estimated by area once there is a volume.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'What is **not** there yet: joinery details, finishes ' +
        'specifications, coordination with the structure and the services, ' +
        'or anything a builder could start work from.',
    },

    { tipo: 'titulo', texto: 'Why the order matters: what changing your mind costs' },
    {
      tipo: 'parrafo',
      texto: 'This is the underlying reason, and it is purely economic.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Moving the kitchen to the other side…', 'What that involves'],
      filas: [
        ['At outline scheme', 'Redrawing a diagram. An afternoon'],
        ['At concept design', 'Redoing floor plans and sections. A few days'],
        ['At project stage', 'Redoing details and specifications, and coordinating the plumbing and the electrics again. Weeks, and paid for a second time'],
        ['Once the permit application is filed', 'A modification of the permit: a new procedure, new curaduría charges, new time'],
        ['**On site**', '**Demolishing what has been built and doing it again**, with material wasted and the programme broken'],
      ],
      nota:
        'The same decision, five moments, and a range of cost that runs from ' +
        'an afternoon to a demolition.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Skipping the concept design does not save you that stage: **it ' +
        'moves it to a moment when it is far more expensive**. And often to a ' +
        'moment when it can no longer be changed at all and you have to live ' +
        'with what you got.',
    },

    { tipo: 'titulo', texto: 'Who pays for changes' },
    {
      tipo: 'parrafo',
      texto:
        'The rule settles this with a distinction that heads off almost every ' +
        'argument, and one worth writing into the contract:',
    },
    {
      tipo: 'cita',
      texto:
        'Save for errors or omissions of the architect, every modification to ' +
        'the architectural project shall be charged to the contracting party.',
      fuente: 'Decreto 2090 de 1989, paragraph 1.2.4.3',
    },
    {
      tipo: 'parrafo',
      texto:
        '**If the architect got it wrong, the architect fixes it. If you ' +
        'changed your mind, you pay for it.** This is not an abusive clause: ' +
        'it is the only way a project ever finishes. Without it, any design ' +
        'turns into an endless revision.',
    },
    {
      tipo: 'nota',
      texto:
        '**No Colombian rule sets a number of revisions included.** It is a ' +
        'commercial decision made by each practice, and precisely for that ' +
        'reason it has to be written into the contract before work starts.',
    },

    { tipo: 'titulo', texto: 'What the architectural project does bring' },
    {
      tipo: 'parrafo',
      texto:
        'To get a sense of the difference, this is what the rule requires of ' +
        'the complete project — and what the concept design explicitly does ' +
        'not have:',
    },
    {
      tipo: 'lista',
      items: [
        'General drawings of floor plans, sections and elevations, at a working scale.',
        'Detail drawings of joinery, metalwork, stairs, bathrooms, façades, tiling, ceilings and floors.',
        'Layouts for drainage and lighting — "not including the engineering calculations and drawings for them", which belong to another professional.',
        'Detailed specifications of materials and finishes.',
        '**Coordination** of the technical drawings. The rule limits the scope: "the architect’s task in this field is one of coordination only".',
        'The application to the competent authority.',
      ],
    },

    { tipo: 'titulo', texto: 'When you can legitimately start somewhere else' },
    {
      tipo: 'parrafo',
      texto:
        'Not every project needs all four stages. There are legitimate cases ' +
        'for a short route:',
    },
    {
      tipo: 'lista',
      items: [
        '**A minor refurbishment** with no changes to the layout or to the structure.',
        '**A repeated project** for which a tested design already exists and only the plot changes.',
        '**An emergency intervention**, where the diagnosis leads and the design follows from it.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'But on a new build, or on any project where you have to decide how ' +
        'a space is going to be lived in, skipping the concept design means ' +
        'taking the most important decision in the project without having ' +
        'been able to look at it.',
    },

    { tipo: 'titulo', texto: 'A note about the drawings' },
    {
      tipo: 'parrafo',
      texto:
        'Something that surprises a great many people and sits in that same ' +
        'rule: **the originals are the property of the architect**, and the ' +
        'concept design and the project "may be used only in the ' +
        'construction of the building for which they were prepared".',
    },
    {
      tipo: 'parrafo',
      texto:
        'And if the contract is cancelled halfway, the rule is explicit: what ' +
        'has been carried out is paid for, and **the partial drawings may not ' +
        'be used to execute the works**. You cannot pay for the concept ' +
        'design, have somebody else finish it and build from that.',
    },
    {
      tipo: 'parrafo',
      texto:
        'All of this can be agreed differently — but it has to be agreed in ' +
        'writing, and beforehand.',
    },
  ],
}
