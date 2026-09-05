import type { TraduccionPost } from '@/lib/types'
import { FRONTERA_DE_LA_REMODELACION_EN } from '../diagramas/costos'

/**
 * Traducción de «Cuánto cuesta remodelar, ambiente por ambiente».
 *
 * La figura va rotulada en inglés desde `costos.ts`, sobre la misma constante
 * de trazado que la española: solo cambian los `<text>`.
 *
 * Las dos citas del Decreto 1077 son el eje del artículo y van transcritas, no
 * glosadas. La primera ya estaba traducida en la pieza de mampostería —
 * *locative repairs*, *load-bearing structure*, *interior layout*— y se repite
 * palabra por palabra: es la misma norma y sonaría a otra cosa si cambiara de
 * vocabulario entre dos artículos del mismo sitio.
 *
 * **Ambiente** es *room* en todo el texto, con la misma holgura que tiene el
 * original: el español también mete cubierta y fachada bajo la palabra, y
 * corregir eso en inglés sería reescribir el artículo, no traducirlo.
 *
 * Lo que la pieza se niega a publicar sigue sin publicarse: no hay tabla de
 * pesos por metro cuadrado de remodelación, y el párrafo del porcentaje de
 * imprevistos sigue rotulado como criterio propio del estudio y sin número. Es
 * lo más fácil de traicionar aquí, porque el inglés técnico tiene rangos de
 * contingencia de manual esperando en la punta de la lengua.
 *
 * Contexto añadido para el lector de fuera: qué es el DANE y qué es la DIAN. La
 * propiedad horizontal se deja en español, como en el resto del corpus.
 */
export const traduccion: TraduccionPost = {
  slug: 'cuanto-cuesta-remodelar-ambiente-por-ambiente',
  titulo: 'What a refurbishment costs, room by room',
  traducido: '2026-09-05',
  resumen:
    'A refurbishment is not budgeted per square metre: it is budgeted room by ' +
    'room, and what sends the figure up is not the size but touching the ' +
    'structure, the waterproofing or the layout. Where the legal boundary ' +
    'lies, and why almost everybody puts it in the wrong place.',
  metaDescripcion:
    'What really drives up the cost of refurbishing a kitchen, bathroom, ' +
    'roof or façade, and when it stops being a locative repair and needs a ' +
    'permit.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'A refurbishment is not well measured in square metres. Sixty metres ' +
        'of new flooring and sixty metres that take in two bathrooms, a ' +
        'kitchen and one wall fewer have nothing to do with each other, even ' +
        'though the area is the same.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The unit that does work is the **room**, and inside each room what ' +
        'decides the figure is a single question: **how far you have to break ' +
        'into things**. Changing finishes is one thing. Touching the services ' +
        'is another. Touching structure or waterproofing is another thing ' +
        'altogether, and that is where budgets double.',
    },
    {
      tipo: 'nota',
      texto:
        'Why no table of pesos per square metre exists in Colombia, what ' +
        'DANE, the national statistics office, actually publishes, and what ' +
        'is and is not inside a construction cost, is in ' +
        '[what it costs to build per square metre in Colombia](/blog/cuanto-cuesta-construir-por-m2-en-colombia). ' +
        'In refurbishment the problem is larger still, and at the end of this ' +
        'article I explain why.',
    },

    {
      tipo: 'titulo',
      texto: 'The legal boundary is not where almost anybody puts it',
    },
    {
      tipo: 'parrafo',
      texto:
        'Before the cost there is a question of regime: whether what you are ' +
        'about to do requires a permit or not. The general belief is that the ' +
        'boundary lies in the money, or in "whether the services are ' +
        'touched". Both are false, and the articles say so without ambiguity.',
    },
    {
      tipo: 'cita',
      texto:
        'Locative repairs or improvements are understood to mean works whose ' +
        'purpose is to keep the property in proper conditions of hygiene and ' +
        'appearance without affecting its load-bearing structure, its ' +
        'interior layout, or its functional, formal and/or volumetric ' +
        'characteristics. The locative repairs or improvements referred to in ' +
        'article 8 of Ley 810 de 2003, or in whatever rule adds to, modifies ' +
        'or replaces it, shall not require a building permit.',
      fuente: 'Decreto 1077 de 2015, article 2.2.6.1.1.10',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the same article lists what falls inside that category. The list ' +
        'surprises almost everybody:',
    },
    {
      tipo: 'cita',
      texto:
        'Included within locative repairs are, among others, the following ' +
        'works: the maintenance, replacement, restitution or improvement of ' +
        'the materials of floors, ceilings, tiling and paintwork in general, ' +
        'and the replacement, improvement or extension of plumbing, drainage, ' +
        'electrical, telephone or gas installations.',
      fuente: 'Decreto 1077 de 2015, article 2.2.6.1.1.10',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it again: **changing the plumbing, drainage, electrical or gas ' +
        'services is a locative repair and requires no permit.** What takes a ' +
        'job out of that category is something else: affecting the ' +
        'load-bearing structure, the interior layout or the volumetric ' +
        'characteristics of the property.',
    },
    {
      tipo: 'parrafo',
      texto:
        'When the work crosses that line, it enters a modality of building ' +
        'permit with a name of its own:',
    },
    {
      tipo: 'cita',
      texto:
        'Modification. It is the authorisation to vary the architectural or ' +
        'structural design of an existing building, without increasing its ' +
        'built area.',
      fuente: 'Decreto 1077 de 2015, article 2.2.6.1.1.7, numeral 4',
    },
    {
      tipo: 'diagrama',
      svg: FRONTERA_DE_LA_REMODELACION_EN,
      titulo: 'Where it stops being a locative repair',
      pie:
        'The change of regime happens between the first plan and the second, ' +
        'not between the second and the third. Changing tiling is locative; ' +
        'moving the partition wall already changes the interior layout and ' +
        'falls under a permit for modification; and if the wall is ' +
        'load-bearing, a signed structural design is needed as well.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What you are going to do', 'Regime', 'What it entails'],
      filas: [
        ['Paintwork, floors, tiling, ceilings', 'Locative repair', 'No permit'],
        [
          'Changing or extending plumbing, drainage, electrical or gas services',
          'Locative repair',
          'No permit. But it is the work that breaks into most and costs most',
        ],
        [
          'Moving or removing a partition wall',
          'Changes the interior layout',
          'Building permit, modification modality',
        ],
        [
          'Intervening in a load-bearing wall or slab',
          'Affects the load-bearing structure',
          'Modification with a structural design signed by an authorised professional',
        ],
        [
          'Enclosing a balcony, filling in a void, adding a mezzanine',
          'Increases the built area',
          'Extension modality, not modification',
        ],
        [
          'Changing the use of the property or of part of it',
          'Adaptation',
          'A permit, and it depends on the planning rules admitting that use',
        ],
      ],
      nota:
        'That a job requires no permit does not mean it has no rules: the ' +
        'same article leaves whoever carries out the work responsible for ' +
        'complying with the propiedad horizontal by-laws, for preventing ' +
        'damage to third parties and for respecting the procedures applicable ' +
        'to listed cultural property.',
    },
    {
      tipo: 'nota',
      texto:
        'A point about time limits that almost all web content gets wrong: ' +
        '**the 36 months of validity belong to new build alone.** Extension, ' +
        'adaptation, modification, restoration, strengthening and demolition ' +
        'stay at 24 months. If your refurbishment needs a permit, the clock ' +
        'running against you is the short one.',
    },

    { tipo: 'titulo', texto: 'The three cost triggers' },
    {
      tipo: 'parrafo',
      texto:
        'With the regime settled, the cost. In refurbishment there are three ' +
        'things that multiply the figure, and what all three have in common ' +
        'is that they sit hidden behind a finish.',
    },
    {
      tipo: 'lista',
      items: [
        '**The services.** Changing a service means breaking into and remaking whatever covers it: wall, floor or ceiling. The material of the service is cheap; the demolition, the making good and the new finish are not. That is why a bathroom that is "only tiling" and a bathroom with new plumbing points are not the same job even if they measure the same.',
        '**The structure.** Touching a load-bearing element stops being a decision made on site and becomes a design with a signature and liability behind it. And it drags in a requirement people do not expect: you have to know what is load-bearing before knocking anything down, and in a building with no drawings that means a measured survey.',
        '**The waterproofing.** It is the item most underestimated, because it cannot be seen and because its failure shows up months later. Redoing the waterproofing of a roof or of a bathroom means lifting everything that sits on top of it.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'A fourth trigger, of another nature altogether: **what turns up when ' +
        'you demolish.** In a refurbishment nobody knows what is behind the ' +
        'wall until it is opened. That is the real reason a refurbishment ' +
        'budget is more uncertain than a new build one, and the reason a ' +
        'refurbishment budget with no declared contingencies is not more ' +
        'precise, it is less honest.',
    },

    { tipo: 'titulo', texto: 'Room by room' },
    {
      tipo: 'parrafo',
      texto:
        'What follows is not figures: it is the factors that in each room ' +
        'decide whether the budget is one or three. They are the ones to ' +
        'settle before asking for a quotation, because if they are not ' +
        'settled, two quotations for the same room cannot be compared.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Room', 'What barely moves the figure', 'What sends it up'],
      filas: [
        [
          '**Kitchen**',
          'Changing the worktop, the unit fronts and the tiling',
          'Moving the water point, the waste or the gas; changing the position of the extractor; opening it up to the living room by taking a wall out',
        ],
        [
          '**Bathroom**',
          'Changing fittings and taps in the same positions',
          'Moving the WC, redoing the waterproofing, replacing the whole floor in order to drop the level of the waste',
        ],
        [
          '**Roof**',
          'Replacing tiles with tiles of the same type',
          'Changing the roof system, redoing the waterproofing, intervening in the supporting structure, adding insulation',
        ],
        [
          '**Façade**',
          'Paintwork and cleaning',
          'Replacing the windows, correcting damp whose origin has not been settled, intervening in elements that in propiedad horizontal are common property',
        ],
        [
          '**Floors**',
          'Changing the finish over the existing screed',
          'Demolishing the screed, levelling, or discovering that underneath there is a service that has to be redone',
        ],
        [
          '**Layout**',
          'Repositioning furniture and doors',
          'Any wall that moves: it changes the regime, it calls for a permit, and if the wall is load-bearing it calls for a structural design',
        ],
      ],
      nota:
        'The right-hand column is the one to write into the request for a ' +
        'quotation. If it is not written down, every builder assumes ' +
        'something different and the prices that come back will not be ' +
        'comparable with one another.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And a warning about the façade and damp: if there is damp, changing ' +
        'the finish does not solve it, it hides it for a while. Before ' +
        'budgeting the finish you have to know where the water gets in. When ' +
        'that warrants a formal study is in ' +
        '[when a building needs a pathology study](/blog/cuando-un-edificio-necesita-un-estudio-patologico).',
    },

    {
      tipo: 'titulo',
      texto: 'If it is a flat, the rules change before the cost does',
    },
    {
      tipo: 'parrafo',
      texto:
        'In propiedad horizontal there is a layer that comes before the ' +
        'permit and before the budget: what is yours and what is common ' +
        'property. The façade, the structure, the roofs and a good part of ' +
        'the services are not yours even though they run inside your flat, ' +
        'and that changes who authorises.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What you can do without asking anybody, when the general meeting is ' +
        'needed and by what majority, and why the authorisation of the ' +
        'general meeting does not replace the permit, is in ' +
        '[altering a flat in propiedad horizontal](/blog/reformar-en-propiedad-horizontal). ' +
        'It is reading to do beforehand, not alongside: a job the general ' +
        'meeting could not authorise is a job that may have to be undone.',
    },

    { tipo: 'titulo', texto: 'Who signs what, and why it matters to the cost' },
    {
      tipo: 'parrafo',
      texto:
        'In a refurbishment the client usually hires "whoever does the work" ' +
        'and assumes everything comes inside that. As soon as the job crosses ' +
        'any of the lines above, it does not.',
    },
    {
      tipo: 'lista',
      items: [
        '**If the structure is touched**, the structural design is signed by a professional authorised by Ley 400 de 1997. It is not a calculation made by the foreman.',
        '**If a permit is needed**, there is a file to lodge, with drawings and with charges, and a processing period that runs before the work.',
        '**If the building has no drawings**, there is a measured survey to do first. It is a real item and it is almost never in the initial quotation.',
        '**If the work is in propiedad horizontal**, there is an authorisation to obtain and working hours to observe, and both affect the programme.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'When the refurbishment goes as far as strengthening the structure — ' +
        'which is a permit modality of its own — the procedure and the ' +
        'requirements are different, and they are in ' +
        '[structural strengthening: what the code requires](/blog/reforzamiento-estructural-y-nsr-10).',
    },

    {
      tipo: 'titulo',
      texto: 'The second boundary, the tax one, and it does not coincide with the first',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is a VAT rule specific to construction: in a **contract for ' +
        'the construction of immovable property** the tax is not assessed on ' +
        'the total value, but on the builder’s fees — or on their profit, if ' +
        'no fees were agreed. I explain it in full, with its conditions and ' +
        'its trade-off, in ' +
        '[what it costs to build per square metre in Colombia](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
    {
      tipo: 'parrafo',
      texto:
        'What matters here is the prior question: **is a refurbishment a ' +
        'contract for construction?** Sometimes it is and sometimes it is ' +
        'not, and the difference is not a small one: when it is not, VAT is ' +
        'assessed on the total value of the contract, materials and labour ' +
        'included.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The tax administration has been holding to the same definition since ' +
        '2003. Contracts for construction cover building and the works ' +
        'inherent to the construction itself — structure, masonry, electrics, ' +
        'plumbing, drainage — and expressly **do not cover** works that can ' +
        'easily be removed without detriment to the property. On ' +
        'refurbishment, the criterion is written down:',
    },
    {
      tipo: 'cita',
      texto:
        'It is beyond doubt that the construction of a work is one thing and ' +
        'the carrying out of repairs, making good, painting and other tasks ' +
        'addressed to the conservation of the already built work is another. ' +
        'The circumstances of the work will indicate whether what is involved ' +
        'is not maintenance but new construction, for example extensions or ' +
        'transformations, carried out on already built properties.',
      fuente:
        'DIAN, Concepto Unificado de Impuesto sobre las Ventas No. 1 de 2003',
    },
    {
      tipo: 'parrafo',
      texto:
        'And in 2025 the DIAN, the national tax authority, applied it to a ' +
        'case almost anybody would call a refurbishment: the waterproofing of ' +
        'façades. Its conclusion was that the special base **does not apply ' +
        'to contracts for the maintenance of immovable property**, but only ' +
        'to those for construction.',
    },
    {
      tipo: 'tabla',
      cabeceras: [
        'What you are contracting for',
        'How it is seen in tax terms',
        'VAT base',
      ],
      filas: [
        [
          'Extending, or transforming the property',
          'Contract for the construction of immovable property',
          'The builder’s fees or profit',
        ],
        [
          'Repairing, making good, painting, maintaining',
          'Maintenance, not construction',
          'The total value of the contract',
        ],
        [
          'Buying something that also gets installed for you',
          'Sale of goods with installation',
          'The total value, sale and installation',
        ],
        [
          'Removable internal partitions in a finished building',
          'Not a contract for construction',
          'The total value',
        ],
      ],
      nota:
        'The operating criterion the DIAN uses to decide is whether the work ' +
        'or the goods can easily be removed without detriment to the ' +
        'property. The administration itself acknowledges that it is ' +
        'impossible to specify every particular case by rule: the ' +
        'circumstances of the work define it.',
    },
    {
      tipo: 'nota',
      texto:
        'Note something almost nobody notices: **the two boundaries do not ' +
        'coincide.** Waterproofing a façade is a locative repair — it needs ' +
        'no permit — and at the same time it is maintenance — VAT on the ' +
        'total value. Changing services needs no permit either, and yet it is ' +
        'work inherent to construction. Asking about one and assuming the ' +
        'other is the origin of a good part of the invoicing surprises in ' +
        'refurbishment.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What to do with this, in practice: **ask the offer to state how it ' +
        'is going to invoice VAT and under which heading**, before you sign. ' +
        'Two offers that look alike can differ in the tax, and the one who ' +
        'bears it is you.',
    },

    { tipo: 'titulo', texto: 'Why there is no table of pesos here either' },
    {
      tipo: 'parrafo',
      texto:
        'In new build there is no official cost per square metre. In ' +
        'refurbishment the situation is worse, and for a reason that can be ' +
        'put without circumlocution: **the component that weighs most in a ' +
        'refurbishment is the demolition and the making good of what already ' +
        'exists, and that is not a function of the area but of the condition ' +
        'of the property.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'A three-square-metre bathroom in a building from 1978, with ' +
        'galvanised iron pipework and no drawings, and a three-square-metre ' +
        'bathroom in a flat handed over two years ago, are not the same job, ' +
        'not by a long way. The DANE index, which measures the change in the ' +
        'prices of inputs and not levels, is no help here either: it serves ' +
        'to update a budget you already have, not to obtain one.',
    },
    {
      tipo: 'nota',
      texto:
        'What can be asserted, and is a judgement of the studio stated as a ' +
        'judgement: **in refurbishment the reasonable percentage for ' +
        'contingencies is higher than in new build, and it grows with the age ' +
        'of the property and with the absence of drawings.** I do not give a ' +
        'number because the right number is a consequence of the level of ' +
        'information available, not a custom of the trade.',
    },

    {
      tipo: 'titulo',
      texto: 'How to ask for a refurbishment budget you can compare',
    },
    {
      tipo: 'lista',
      items: [
        '**Ask for the budget room by room**, not for the dwelling as a whole. It is the only way to see where the money went and to cut back without cutting back blind.',
        '**State in writing, room by room, whether plumbing or electrical points are being moved.** It is the variable that separates two quotations most.',
        '**Say whether any wall is being moved**, and ask the budget to state whether that wall is load-bearing or not, and who is going to determine it.',
        '**Ask for the demolitions and the making good as items of their own**, not diluted inside the finishes.',
        '**Ask for the waterproofing to appear explicitly**, even if it comes in at zero. A declared zero is information; an absence is not.',
        '**Ask them to say what it does not include**, and whether it allows for the permit, the charges, the measured survey and the structural design.',
        '**Ask for the contingencies, the administration and the profit on separate lines.** An offer that shows them looks dearer than one that diluted them, and hardly ever is.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The items systematically forgotten in any works budget — and several ' +
        'apply to a refurbishment as well — are in ' +
        '[the twelve items everyone forgets when budgeting](/blog/doce-partidas-que-se-olvidan-al-presupuestar).',
    },

    { tipo: 'titulo', texto: 'The short answer' },
    {
      tipo: 'lista',
      items: [
        'It is budgeted room by room, not per square metre of dwelling.',
        'Changing services requires no permit; changing the interior layout does, and touching the structure demands a signed design as well.',
        'What sends the cost up are the services, the structure and the waterproofing, because they force you to break into and remake the finish that covers them.',
        'If it is a flat, you settle what is common property first; you budget afterwards.',
        'The tax boundary is a different one and does not coincide: if what you have is maintenance and not construction, VAT falls on the total value of the contract.',
        'And if you need a permit, the period running against you is 24 months, not 36.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'At Plano Base a refurbishment begins with the real condition of what ' +
        'is built: what can be taken down, what holds, and what turns out ' +
        'dearer than it looks. With that on the table, the budget stops being ' +
        'a bet.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The definitions of locative repairs and of the permit modalities are ' +
        'transcribed literally from the articles in force. What goes without ' +
        'a figure goes without a figure on purpose: it depends on the ' +
        'property, and this article does not know yours.',
    },
  ],
}
