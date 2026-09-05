import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Construí sin licencia: qué sanción hay y cómo se legaliza».
 *
 * El término que gobierna la pieza es **acto de reconocimiento → act of
 * recognition**, que es el que ya usan `licencia-de-construccion-en-bogota`
 * («Recognition of an existing building») y
 * `curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide` («acts of
 * recognition»).
 *
 * La declaración de método se traduce entera y sin suavizar: los requisitos
 * exactos del acto de reconocimiento **varían y hay que confirmarlos en la
 * curaduría**, y el artículo no los inventa.
 *
 * Contexto añadido para el lector de fuera: qué es un curador urbano, qué es
 * el certificado de tradición y qué es el salario mínimo como unidad de
 * sanción. Las cifras son las mismas: 100 a 500 salarios y 60 días.
 */
export const traduccion: TraduccionPost = {
  slug: 'construi-sin-licencia',
  titulo: 'I built without a permit: the penalty, and how it gets regularised',
  traducido: '2026-09-05',
  resumen:
    'You extended, added a storey or enclosed the terrace without ' +
    'permission, and now you want to sell, to mortgage, or simply to sleep ' +
    'at night. What you actually risk, what an act of recognition is, and ' +
    'where to start.',
  metaDescripcion:
    'What the penalties are for building without a permit in Colombia, and ' +
    'how an existing building is brought into legal order.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'This is one of those things people look up at night and ask nobody ' +
        'about. You extended the house years ago, you added a storey, you ' +
        'enclosed the terrace. Nobody said anything. And now you want to ' +
        'sell, or to mortgage, or a letter has arrived from the town hall.',
    },
    {
      tipo: 'parrafo',
      texto:
        'First, without dramatics: **it is far more common than it looks and ' +
        'there is almost always a way out.** Second, without naivety: the ' +
        'risk is real, and it grows with time rather than fading.',
    },

    { tipo: 'titulo', texto: 'What the law says' },
    {
      tipo: 'parrafo',
      texto:
        'The planning penalties sit in Ley 388 de 1997, the territorial ' +
        'development statute, and they come in three kinds that can be ' +
        'applied together:',
    },
    {
      tipo: 'lista',
      items: [
        '**A fine.** For anyone who parcels, urbanises or builds without a permit, between **100 and 500 monthly statutory minimum wages**, graduated according to the gravity of the breach and the area involved.',
        '**An order to demolish** whatever was built without a permit or in breach of one.',
        '**Cutting off the utilities**, which is the one that changes the conversation fastest.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'There is a nuance worth knowing, because it gives you room: before ' +
        'ordering the demolition, the law grants **sixty days to process the ' +
        'permit** or whichever act applies. It is not an amnesty, it is an ' +
        'opportunity — and it is lost if it is not used.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On top of that, the earthquake-resistant construction statute ' +
        'carries its own penalty for anyone who builds without keeping to ' +
        'it, and empowers town halls to order the demolition of whatever ' +
        'breaches it.',
    },

    { tipo: 'titulo', texto: 'The risk almost nobody counts' },
    {
      tipo: 'parrafo',
      texto:
        'The fine is usually not the worst of it. What really weighs is that ' +
        '**a building that has never been regularised drains the liquidity ' +
        'out of the property**:',
    },
    {
      tipo: 'lista',
      items: [
        '**It cannot be sold well.** An informed buyer discounts the cost of regularising it, or walks away.',
        '**It is no use as security.** Banks lend against the legally recognised area, not against the built one.',
        '**The valuation does not recognise it.** Square metres that are not in the permit do not exist for commercial purposes.',
        '**The insurer may object.** If the claim touches an area with no permit behind it, there is an argument to be had.',
        '**And in an estate, the problem is inherited**, usually at the worst possible moment.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Put another way: **building without a permit did not save money, it ' +
        'froze it.**',
    },

    { tipo: 'titulo', texto: 'The way through: the act of recognition' },
    {
      tipo: 'parrafo',
      texto:
        'For buildings that already exist, the rules provide a figure ' +
        'distinct from the permit: the **act of recognition of the existence ' +
        'of buildings**. It is issued by the curador urbano — a private ' +
        'office licensed by the state to issue permits — or by the municipal ' +
        'authority, and its effect is to bring into legal life something ' +
        'that was built without permission.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What it almost always calls for, and what is worth knowing in ' +
        'advance:',
    },
    {
      tipo: 'lista',
      items: [
        '**That what was built complies with the planning rules in force** — or is at least compatible with them. If it took up the rear setback or went over the permitted height, that is where the real problem lies.',
        '**A technical expert report on the existing structure**, signed by a civil engineer. It is the most expensive requirement and the most important one: somebody has to answer for the thing standing up.',
        '**A measured architectural survey** of what is really there, not of what was imagined.',
        '**Payment of the applicable fees and of the delineation tax**, the municipal levy on building work.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The exact requirements, the time limits and the conditions under ' +
        'which the figure is available vary, and they have changed over ' +
        'time. **Confirm them at the curaduría in your city before you ' +
        'engage anybody** — the verbal enquiry about planning rules is free ' +
        'by rule.',
    },

    { tipo: 'titulo', texto: 'The three scenarios' },
    {
      tipo: 'tabla',
      cabeceras: ['Situation', 'What to expect'],
      filas: [
        [
          '**What was built complies with the rules in force**',
          'The route is administrative: survey, expert report, procedure and payments. Tiresome and costly, but soluble',
        ],
        [
          '**What was built exceeds the rules** (height, setbacks, plot ratio)',
          'Here paying is not enough. You may be required to **alter or demolish the part that exceeds them**. It is the difficult conversation, and better had with a professional than with an inspector',
        ],
        [
          '**It sits in a hazard zone, a watercourse buffer or a road reservation**',
          'This is the worst case and sometimes it has no legal solution. Better to know early than to spend on a procedure that is not going to prosper',
        ],
      ],
    },

    { tipo: 'titulo', texto: 'Where to start' },
    {
      tipo: 'lista',
      items: [
        '**Ask for the planning ruling on your plot.** It is free and it tells you what the rules allow today. Without that, there is no knowing whether your case belongs to the first scenario or to the second.',
        '**Get the certificado de tradición**, the land registry extract, and check it for entries, encumbrances or proceedings.',
        '**Have what actually exists surveyed**, with real measurements.',
        '**Commission the structural expert report** only once you know the case is viable. Doing it the other way round spends money on a report nobody will use.',
        '**And do not wait for the letter.** A procedure begun of your own accord is handled very differently from one that starts with an administrative action already on top of you.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'A closing note that is not legal but practical: what was built ' +
        'without a permit was also built, almost always, **without a ' +
        'structural design and without a soil survey**. Regularising it on ' +
        'paper does not make it safe. The expert report is not a ' +
        'bureaucratic requirement — it is the part of the process that ' +
        'genuinely matters.',
    },
  ],
}
