import type { TraduccionPost } from '@/lib/types'
import { CUATRO_CUBIERTAS_EN } from '../diagramas/cubiertas'

/**
 * Traducción de «Cubiertas: barro, termoacústica, verde o placa».
 *
 * Cuidados propios de esta pieza:
 *
 * 1. **Las dos tablas de cargas son donde el separador decimal mata.** «0,80
 *    kN/m²» pasa a «0.80 kN/m²» y «2.000 m s. n. m.» pasa a «2,000 m a.s.l.».
 *    Invertidos al revés, ochenta centésimas se vuelven ochenta.
 * 2. **Las designaciones del reglamento no se traducen**: NSR-10, Tabla
 *    B.3.4.1-4, B.4.2.1-2, B.4.8.3. Tampoco los nombres de las leyes
 *    colombianas.
 * 3. **«Termoacústica» se deja en español la primera vez** y se glosa, porque
 *    es el nombre comercial con el que el lector la va a pedir en Colombia.
 * 4. **El diagrama trae su propia versión inglesa**, construida sobre la misma
 *    geometría en `content/blog/diagramas/cubiertas.ts`.
 */
export const traduccion: TraduccionPost = {
  slug: 'cubiertas-barro-termoacustica-verde-o-placa',
  titulo: 'Roofs: clay tile, insulated metal, green or concrete slab',
  traducido: '2026-08-24',
  resumen:
    'Roofs get chosen on looks and on price, while the variable that actually ' +
    'decides sits in an official table almost nobody opens: weight. Clay tile ' +
    'weighs ten times what a metal sheet weighs, and that ratio changes the ' +
    'whole structure.',
  metaDescripcion:
    'Clay tile, insulated metal deck, green roof or concrete slab: what each ' +
    'weighs, what NSR-10 requires, and which climate defeats which.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The roof is the design decision most people take from a photograph. ' +
        'Clay tile because it looks right, metal sheeting because it is cheap, ' +
        'a green roof because it sounds responsible, a concrete slab because ' +
        '«we can put another floor on later».',
    },
    {
      tipo: 'parrafo',
      texto:
        'None of those four reasons is a bad one. The trouble is that none of ' +
        'them comes first. **What comes first is how much it weighs**, and ' +
        'that number has been published, in an official table, since 2010. ' +
        'Hardly anyone opens it.',
    },
    {
      tipo: 'nota',
      texto:
        'Two things this article does not repeat, because they are told ' +
        'already. **What each climate asks for** is in [a bioclimatic house by ' +
        'altitude](/blog/casa-bioclimatica-por-piso-termico), with the official ' +
        'classification and its percentages. **Why a roof leaks and in what ' +
        'order it fails** is in [roof leaks](/blog/filtraciones-en-cubierta). ' +
        'Here you choose the system; there you deal with the one already ' +
        'failing.',
    },

    { tipo: 'titulo', texto: 'The figure nobody puts on the table: weight' },
    {
      tipo: 'parrafo',
      texto:
        'NSR-10 classifies the roof as a **horizontal non-structural element** ' +
        'and publishes minimum dead loads for it, material by material. These ' +
        'are not anybody’s estimates: it is a table in the code, and it is what ' +
        'a structural designer feeds into the model.',
    },
    {
      tipo: 'diagrama',
      svg: CUATRO_CUBIERTAS_EN,
      titulo: 'The four systems, compared on the one thing the code publishes',
      pie:
        'Schematic, not to scale. The figures come from Tables B.3.4.1-4 and ' +
        'B.4.2.1-2 of NSR-10. Drawing by the practice.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Roof component', 'kN/m²', 'kgf/m²'],
      filas: [
        ['Clay tile, bedding mortar included', '0.80', '80'],
        ['Bituminous waterproof membrane with gravel topping', '0.25', '25'],
        ['Corrugated asbestos-cement sheeting', '0.20', '20'],
        ['Asphalt shingles', '0.10', '10'],
        ['Bituminous waterproof membrane, smooth surface', '0.10', '10'],
        ['Metal decking, gauge 20 (0.9 mm nominal)', '0.08', '8'],
        ['Polyurethane foam', '0.0010 per mm', '1.0 per cm'],
        ['Polystyrene foam', '0.0005 per mm', '0.5 per cm'],
      ],
      nota:
        'Table B.3.4.1-4 of NSR-10, minimum dead loads of horizontal ' +
        'non-structural elements — roofs. Values are per m² of plan area, and ' +
        'the code itself warns that the designer must allow for variation from ' +
        'local materials and building practice.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is the whole article in one line: **clay tile weighs ten times ' +
        'what metal sheeting weighs**. Eighty kilos per square metre against ' +
        'eight. On a house with 120 m² of roof, that is over eight tonnes of ' +
        'difference travelling down the walls into the foundation.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And it is not a difference you settle later. Swapping metal for clay ' +
        'tile on a house already designed is not changing a finish: it is ' +
        'changing the structure. The other way round works better, though it ' +
        'has consequences too, since a structure sized for tile and loaded ' +
        'with sheeting ends up oversized and paid for.',
    },
    {
      tipo: 'nota',
      texto:
        'A warning when reading that table today. **It still lists ' +
        'asbestos-cement**, and that material is banned: Ley 1968 de 2019 ' +
        'prohibited, from 1 January 2021, «the extraction, production, ' +
        'marketing, importation, distribution and use of any variety of ' +
        'asbestos and of products made with it». The table dates from 2010 and ' +
        'has not been cleaned up. A value sitting in the code does not mean the ' +
        'material may be installed.',
    },

    { tipo: 'titulo', texto: 'And the weight that is not weight: live load' },
    {
      tipo: 'parrafo',
      texto:
        'On top of dead load comes live load, which depends on use. Here is the ' +
        'number that almost never joins the conversation about green roofs:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Type of roof', 'kN/m²', 'kgf/m²'],
      filas: [
        ['Roofs, flat roofs and terraces', 'Same as the rest of the building', 'Same as the rest of the building'],
        ['Roofs used as roof gardens or for gatherings', '5.00', '500'],
        ['Pitched roofs steeper than 15°, in steel or timber structure physically unable to take greater loads', '0.35', '35'],
        ['Pitched roofs at 15° or less, under the same conditions', '0.50', '50'],
      ],
      nota:
        'Table B.4.2.1-2 of NSR-10. Roof live load can never be lower than the ' +
        'highest of the live loads used elsewhere in the building.',
    },
    {
      tipo: 'nota',
      texto:
        '**Five hundred kilos per square metre.** That is fourteen times the ' +
        'live load of a light pitched roof, and it is **before** adding the ' +
        'self-weight of saturated growing medium, which counts as dead load and ' +
        'which the dead load table does not publish. A green roof is not a ' +
        'planted finish over any old slab: it is a structural decision taken at ' +
        'the start, or not taken at all.',
    },

    { tipo: 'titulo', texto: 'Hail, which depends on altitude' },
    {
      tipo: 'parrafo',
      texto:
        'Here altitude walks straight into the structure, in a way few people ' +
        'anticipate. The code carries a specific hail load, and its threshold ' +
        'is geographic:',
    },
    {
      tipo: 'cita',
      texto:
        'Hail loads, G, must be taken into account in regions of the country ' +
        'above 2,000 metres above sea level, or at lower altitudes where the ' +
        'municipal or district authority so requires. […] its value is 1.0 ' +
        'kN/m² (100 kgf/m²). For roofs at an inclination greater than 15° this ' +
        'value may be reduced to 0.5 kN/m² (50 kgf/m²).',
      fuente: 'NSR-10, Title B, B.4.8.3',
    },
    {
      tipo: 'nota',
      texto:
        'Read it as a design decision rather than a fact. In Bogotá, in Tunja ' +
        'or anywhere above 2,000 m, **pitching the roof beyond 15° takes fifty ' +
        'kilos per square metre off the structure**. It is the least romantic ' +
        'and most effective reason to prefer a pitched roof in a cold climate — ' +
        'and it adds to the solar reasons set out in [a bioclimatic house by ' +
        'altitude](/blog/casa-bioclimatica-por-piso-termico).',
    },

    { tipo: 'titulo', texto: 'The duty no quotation ever includes' },
    {
      tipo: 'parrafo',
      texto:
        'The same chapter carries a requirement that is not a matter of ' +
        'judgement and that hardly any Colombian house meets:',
    },
    {
      tipo: 'cita',
      texto:
        'Every roof must be provided with an auxiliary system for evacuating ' +
        'excess water when the normal downpipes become blocked. This system may ' +
        'consist of scuppers, overflows or other devices preventing water from ' +
        'accumulating and discharging it reliably.',
      fuente: 'NSR-10, Title B, B.4.8.1, item (a)',
    },
    {
      tipo: 'parrafo',
      texto:
        'And responsibility is allocated in writing: the plumbing design must ' +
        'include both the drainage and the auxiliary system, **it falls to the ' +
        'builder who signs the permit** to approve it and hand the structural ' +
        'designer the volume of water that can accumulate, and the structural ' +
        'designer must design the roof to carry that weight without failing.',
    },
    {
      tipo: 'nota',
      texto:
        'This explains one of the five leak causes in the other article from ' +
        'the code’s side: a blocked downpipe does not only produce a leak, it ' +
        'produces **a load the structure was meant to have anticipated**. The ' +
        'other four causes are in [roof leaks](/blog/filtraciones-en-cubierta).',
    },

    { tipo: 'titulo', texto: 'The four systems, one by one' },

    { tipo: 'titulo', texto: 'Clay tile' },
    {
      tipo: 'parrafo',
      texto:
        'The heaviest, and the one that ages best to the eye. It calls for a ' +
        'roof structure sized to carry it, a frank pitch and a properly ' +
        'resolved edge: verge tiles and ridge are where nearly every problem ' +
        'begins. In its favour it has something no table measures: a broken ' +
        'tile is replaced one at a time, with nothing dismantled.',
    },

    { tipo: 'titulo', texto: 'Insulated metal decking' },
    {
      tipo: 'parrafo',
      texto:
        '«Termoacústica» is a trade name in Colombia, not a code designation: ' +
        'it describes a metal sheet with insulation bonded or injected behind ' +
        'it. The code table weighs the sheet — 8 kgf/m² — and the insulation ' +
        'separately, by the millimetre of thickness. It is by a wide margin the ' +
        'lightest solution, and the one allowing longer spans with less ' +
        'structure.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Its weak point is not the material but the junction: laps and fixing ' +
        'penetrations are the route water takes, and the washers degrade well ' +
        'before the sheet does. It is a roof of cheap, frequent maintenance, ' +
        'not of no maintenance at all.',
    },

    { tipo: 'titulo', texto: 'Green roof' },
    {
      tipo: 'parrafo',
      texto:
        'The one demanding the earliest decision, for the structural reasons ' +
        'above, and the one that tolerates improvisation worst: the ' +
        'waterproofing sits **underneath the growing medium**, which is to say ' +
        'underneath whatever would have to be removed in order to repair it. A ' +
        'leak in a green roof is not a spot repair.',
    },
    {
      tipo: 'nota',
      texto:
        'And a correction, because it circulates widely: **Ley 2173 de 2021 ' +
        'does not require green roofs.** I searched the word «techo» through ' +
        'its full text and it appears **not once**: it is a law on ecological ' +
        'restoration through tree planting and the creation of «áreas de ' +
        'vida». What does exist is a local instrument, Acuerdo 418 de 2009 of ' +
        'the Bogotá city council, which **promotes** their use and orders them ' +
        'into public buildings. Promoting is not requiring, and a private house ' +
        'is bound by neither.',
    },

    { tipo: 'titulo', texto: 'Concrete slab' },
    {
      tipo: 'parrafo',
      texto:
        'The only one of the four that **does not appear in the roof dead load ' +
        'table**, for a conceptual reason: it is not a non-structural element. ' +
        'A slab is structure, and its weight comes from the structural design ' +
        'rather than from a table of finishes. What does get added on top of ' +
        'it, and does appear in the table, is the screed, the waterproofing and ' +
        'the insulation.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is the option that leaves the door open to growing upwards, and ' +
        'that is its real advantage. But «the slab is already there and it ' +
        'holds» is not argument enough: what adding a floor over existing ' +
        'construction really demands is in [adding a second ' +
        'floor](/blog/ampliar-un-segundo-piso).',
    },

    { tipo: 'titulo', texto: 'Which one insulates: the question is badly put' },
    {
      tipo: 'parrafo',
      texto:
        '«Which one insulates more?» has no single answer, because **insulating ' +
        'does not mean the same thing in the four climates of the country**. In ' +
        'a cold climate the aim is to keep heat in; in hot and dry, to use ' +
        'thermal mass and hold the cool of the night; in hot and humid, the job ' +
        'is to push warm air out at the ridge, not to seal it in better. The ' +
        'four official classes and what each one asks for are in [a bioclimatic ' +
        'house by altitude](/blog/casa-bioclimatica-por-piso-termico).',
    },
    {
      tipo: 'nota',
      texto:
        '**What I am not going to publish, and why.** No thermal ' +
        'conductivities, no U-values, no acoustic insulation figures by ' +
        'material: there is no published Colombian source with a methodology, ' +
        'and the ICONTEC catalogue cannot be consulted, so I cannot even quote ' +
        'a standard number. Nor do I give a service life in years by system. ' +
        'What follows is a qualitative comparison, labelled as exactly what it ' +
        'is: this practice’s own judgement.',
    },

    { tipo: 'titulo', texto: 'The comparison, with its label attached' },
    {
      tipo: 'tabla',
      cabeceras: ['System', 'Weight', 'Pitch it calls for', 'Where it fails first', 'Maintenance'],
      filas: [
        [
          'Clay tile',
          '**The heaviest**: 80 kgf/m² with mortar',
          'Pitched and frank',
          'At the edge, the ridge and the verge tile',
          'Replacing pieces and clearing gutters',
        ],
        [
          'Insulated metal decking',
          '**The lightest**: 8 kgf/m² for the sheet',
          'Pitched, tolerates little',
          'At laps, screws and washers',
          'Frequent and cheap: fixings and seals',
        ],
        [
          'Green roof',
          '**Not published** as dead load; 500 kgf/m² of live load',
          'Flat with a drainage fall',
          'In the waterproofing, which ends up buried',
          'Gardening, drainage and periodic inspection',
        ],
        [
          'Concrete slab',
          '**It is structure**, not a finish',
          'Flat with a fall',
          'At joints and at later penetrations',
          'Waterproofing and outlets',
        ],
      ],
      nota:
        'The weight figures come from Tables B.3.4.1-4 and B.4.2.1-2 of ' +
        'NSR-10. **The three right-hand columns are this practice’s judgement**, ' +
        'not code: they come from completed works and from surveys, not from a ' +
        'published source.',
    },

    { tipo: 'titulo', texto: 'What it costs: the honest part' },
    {
      tipo: 'parrafo',
      texto:
        'I do not publish roof prices per square metre, for the same reason I ' +
        'publish none for anything else: **there is no Colombian source with a ' +
        'methodology**, and the ones in circulation contradict each other. The ' +
        'full reasoning is in [what a square metre ' +
        'costs](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
    {
      tipo: 'parrafo',
      texto:
        'What can be said, and what helps in reading a quotation, is which line ' +
        'items move with the system:',
    },
    {
      tipo: 'lista',
      items: [
        '**The supporting structure moves with the weight**, and it is the big item. Comparing two roof quotations without looking at the structure each one assumes is comparing different things.',
        '**Waterproofing appears in only two of the four.** With tile and sheeting, watertightness is resolved by pitch and lap; with green roofs and slabs there is a membrane, and it is a line item of its own.',
        '**Drainage is an item, not a detail**, and on a flat roof it is the critical one: it includes the auxiliary system the code requires.',
        '**Maintenance is never zero.** It is cheaper and more frequent on sheeting, dearer and more spaced out on tile, and on a green roof it is a standing obligation that has to be budgeted as such.',
        '**The penalty for getting it wrong is asymmetric.** Changing system once the structure is sized is only cheap in one direction: towards the lighter option.',
      ],
    },

    { tipo: 'titulo', texto: 'How the decision gets made' },
    {
      tipo: 'lista',
      items: [
        '**Start from the climate and the altitude**, not from the image. Altitude decides whether hail load applies, and climate decides whether the job is keeping heat in or driving it out.',
        '**Fix the system before the structural design**, not after. It is the decision that costs most to change late.',
        '**If you want a green roof, decide it on day one.** Five hundred kilos per square metre do not settle onto a structure meant for something else.',
        '**If you want to keep a second floor possible**, the slab is the answer, but ask for the structural design to allow for it now: providing for the floor is far cheaper than strengthening later.',
        '**Insist the plumbing design includes the auxiliary evacuation system.** It is a code duty and it is almost never drawn.',
        '**Budget the maintenance of the system you chose**, with a frequency and someone responsible. The roof is the element most often abandoned and the one that charges most for abandonment.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The roof is the only part of a building working twenty-four hours a ' +
        'day against the sun and the rain at once. Choosing it from a ' +
        'photograph turns out well more often than it should — and when it ' +
        'turns out badly, changing the tile does not fix it.',
    },
  ],
  fuentes: [
    {
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf',
      titulo:
        'NSR-10, Title B: dead loads of horizontal non-structural elements (Table B.3.4.1-4), roof live loads (Table B.4.2.1-2), ponding (B.4.8.1 and B.4.8.2) and hail load (B.4.8.3). Annex to Decreto 926 de 2010',
    },
    {
      url: 'https://www.minambiente.gov.co/documento-normativa/ley-1968-de-2019/',
      titulo:
        'Ley 1968 de 2019, banning the use of asbestos in Colombia from 1 January 2021',
    },
    {
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2173_2021.html',
      titulo:
        'Ley 2173 de 2021, promoting ecological restoration through tree planting and the creation of «áreas de vida»',
    },
  ],
}
