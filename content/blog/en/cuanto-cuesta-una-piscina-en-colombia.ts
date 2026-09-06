import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Cuánto cuesta una piscina en Colombia, y cuánto cuesta cada
 * mes».
 *
 * Vocabulario de piscinas que hereda de `ley-1209-piscinas-copropiedad`:
 * `vaso` → pool shell, `succión` → suction, `rejilla` → grating, `cuarto de
 * máquinas` → plant room, `bomba` → pump, `salida de succión` → suction
 * outlet, `sistema de liberación de vacío` → vacuum release system, `alarma de
 * inmersión` → immersion alarm, `cerramiento` → enclosure.
 *
 * **`cubierta antiatrapamiento` → anti-entrapment cover**, tal como ya lo fija
 * `en/ley-1209-piscinas-copropiedad`. Se conserva ese término y no
 * «antivórtice»: no son sinónimos —una cosa es evitar el vórtice y otra que la
 * succión retenga a una persona— y en el contexto de la Ley 1209, que es
 * seguridad de personas, el término correcto es el segundo.
 *
 * Y lo que esta tanda fija para el resto del pilar: `borde infinito` →
 * **infinity edge**, `piscina
 * desbordante` → **overflow pool**, `skimmer` → **skimmer**, `rebosadero` →
 * **overflow channel**, `período de recirculación` → **turnover period**,
 * `andén perimetral` → **perimeter walkway**, `nivel freático` → **water
 * table**, `impermeabilización` → **waterproofing**, `revestimiento` →
 * **lining**, `consumo no básico` → **non-basic consumption** (el nombre que
 * la tarifa colombiana le da al tramo por encima del consumo básico).
 *
 * Separadores, que es donde se cuela el error: «3.231,15» es «3,231.15»,
 * «$373.608» es «$373,608», «1,40 m» es «1.40 m», «0,75 kW» es «0.75 kW» y
 * «2 %» es «2%». Los nombres de las normas y de las empresas no se traducen:
 * Ley 1209, Resolución 929 de 2026, RETIE, DANE, Camacol, EPM, Enel.
 *
 * La base normativa de la sección de bombeo se rehízo sobre la Resolución 929
 * de 2026, que **supera materialmente** —no deroga: no hay cláusula
 * derogatoria— a la Resolución 1510 de 2011. En inglés se dice «superseded in
 * substance by», nunca «repealed by», que afirmaría algo que la norma no hizo.
 */
export const traduccion: TraduccionPost = {
  slug: 'cuanto-cuesta-una-piscina-en-colombia',
  titulo: 'What a pool costs in Colombia, and what it costs every month',
  traducido: '2026-09-05',
  resumen:
    'Nobody publishes official pool prices in Colombia, and anyone quoting ' +
    'you a figure without having seen your plot is making it up. What can be ' +
    'worked out, and is worked out here from the published tariff schedules: ' +
    'what it costs to fill, and what the month costs.',
  metaDescripcion:
    'What drives the cost of a pool in Colombia, and the monthly cost worked ' +
    'out from the official water and electricity tariffs.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The question always arrives in the same shape: "what does an eight ' +
        'by four pool cost?". And the honest answer is uncomfortable, because ' +
        'the same eight by four shell can cost three times more on one plot ' +
        'than on the plot next door, for reasons that have nothing to do with ' +
        'the pool.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This article will not hand you a price table. It will hand you three ' +
        'things that do help you decide: what the budget is actually made of, ' +
        'which five variables multiply it, and **what the pool costs every ' +
        'month** — the figure almost nobody puts on the table, and the one ' +
        'you cannot undo later.',
    },
    {
      tipo: 'nota',
      texto:
        'Worth stating up front: **no official or trade body in Colombia ' +
        'publishes construction prices for pools.** Not DANE, not Camacol, not ' +
        'any ministry. The tables in circulation come from suppliers with a ' +
        'direct interest in the number. It is the same problem as with cost ' +
        'per square metre, and it gets the same treatment here: no invented ' +
        'figure to fill the gap.',
    },

    { tipo: 'titulo', texto: 'The pool used throughout this article' },
    {
      tipo: 'parrafo',
      texto:
        'So that every calculation can be followed and redone, they all come ' +
        'from the same pool: **8 × 4 m, average depth 1.40 m**. That is **32 ' +
        'm² of water surface and 45 m³ of volume**. If yours is different, the ' +
        'arithmetic is yours to redo and every number below moves with it.',
    },

    { tipo: 'titulo', texto: 'You are not buying a pool: you are buying three things' },
    {
      tipo: 'lista',
      items: [
        '**The shell.** The structure that holds the water: excavation, structure, waterproofing and lining. It is the only part you see, and it is the part everybody quotes.',
        '**The system.** Suction, return, filtration, pumping, plant room, pipework and electrics. You never see it, it costs a serious share of the total, and it decides whether the pool works or whether the water turns green every fortnight.',
        '**Compliance.** The devices and conditions the law requires: balanced twin drains, an anti-entrapment cover, a vacuum release system, an immersion alarm, a perimeter walkway. None of it optional, and almost never in the first quotation.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The cheap quotation is nearly always cheap because it priced the ' +
        'first item and left the other two "for later". Later is when it costs ' +
        'three times as much, because what is already closed has to be opened ' +
        'again.',
    },

    { tipo: 'titulo', texto: 'The chapters of the budget' },
    {
      tipo: 'parrafo',
      texto:
        'This is the full list. If you are handed a quotation with fewer ' +
        'chapters than these, you are not being given a lower price: you are ' +
        'being given an incomplete one.',
    },
    {
      tipo: 'lista',
      items: [
        '**Soil investigation and structural design.** The shell is a retaining structure, not a finish. It is signed by a civil engineer.',
        '**Hydraulic and plant room design.** This is where everything you cannot change afterwards gets decided.',
        '**Earthworks and spoil removal.** It depends on access, and access is one of the five variables that weigh most.',
        '**The structure of the shell**, with its steel and its concrete.',
        '**Waterproofing.** It is not the same thing as the lining and it does not replace it.',
        '**Lining**, which the rule requires to be watertight, easy to clean and disinfect, abrasion-resistant and stable against the chemicals used in treatment.',
        '**Water and drainage pipework**: suction, return, overflow channel or skimmers, emptying and drainage.',
        '**Equipment**: pump, filter, dosing, heating if there is any.',
        '**Electrical installation under RETIE**, which has its own rules for pools and is not house wiring.',
        '**Perimeter walkway**, which the rule sets at a minimum width of 1.20 m, falling 3% to 5% towards the drains, with a non-slip surface.',
        '**Ley 1209 safety devices** and depth signage.',
        '**Lighting, ladders and equipment.**',
        '**Commissioning, first fill and initial chemical balancing.**',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The chapter missing from nine quotations out of ten is the perimeter ' +
        'walkway. It is **1.20 m all the way round the shell**: on an 8 × 4 m ' +
        'pool that is nearly 30 m² of new paving, with its base, its drainage ' +
        'and its non-slip finish. It is not an extra: clause 9.1 of the ' +
        'technical annex to Resolución 929 de 2026 requires it, and it also ' +
        'allows an infinity or vanishing edge to replace up to 50% of the ' +
        'perimeter, provided the area is made up on the sides that are built.',
    },

    { tipo: 'titulo', texto: 'The five variables that multiply the cost' },
    {
      tipo: 'parrafo',
      texto:
        'Here is why two identical pools cost different amounts. Not one of ' +
        'the five shows up in a catalogue, and all five can be established ' +
        'before you sign anything.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Variable', 'Why it changes the price', 'What to establish first'],
      filas: [
        [
          '**Water table**',
          'An empty shell with ground water above its floor will float. It has to be anchored, drained or both, and that is structure, not finish',
          'A trial pit in the wet season, not in the dry one',
        ],
        [
          '**Slope of the ground**',
          'On a hillside the shell becomes a retaining wall on one or two sides, and the earthworks go through the roof',
          'The level at the highest and lowest point of the pool area',
        ],
        [
          '**Machine access**',
          'If an excavator cannot get in, the digging is done by hand and the spoil leaves by wheelbarrow. Same hole, several times the price',
          'Clear width and turning radius from the road to the site',
        ],
        [
          '**Distance to the plant room**',
          'Every extra metre is larger pipework, more head loss and a bigger pump drawing more power every day of its life',
          'Where the electrical supply and a drain are available',
        ],
        [
          '**Whether it sits on an existing slab**',
          'It stops being a pool and becomes structural work, with an assessment of the slab signed by a civil engineer before anything is drawn',
          'Whether the structural drawings of the building exist',
        ],
      ],
      nota:
        'Any one of the five can double the budget on its own. All five at ' +
        'once, on a hillside plot with no access and a high water table, move ' +
        'it by an order of magnitude.',
    },
    {
      tipo: 'parrafo',
      texto:
        'If the pool is going on a slab that already exists, it is a different ' +
        'matter. It starts with the permit — see ' +
        '[do I need a permit to build a pool?](/blog/necesito-licencia-para-construir-una-piscina) — ' +
        'and goes on to loading and waterproofing, which are in ' +
        '[a pool on a roof terrace](/blog/piscina-en-terraza).',
    },

    { tipo: 'titulo', texto: 'Filling it: the first figure that can be published' },
    {
      tipo: 'parrafo',
      texto:
        'This one does come from an official document, with a date and a name ' +
        'on it. Water and sewerage tariffs in Bogotá are set by Board ' +
        'Resolution 255 of 2026 of the city water utility, in force since 1 ' +
        'July 2026.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Stratum', 'Water $/m³', 'Sewerage $/m³', 'Filling 45 m³'],
      filas: [
        ['1 to 4', '3,231.15', '5,071.26', '**$373,608**'],
        ['5', '5,008.28', '7,657.60', '$569,965'],
        ['6', '5,331.40', '8,164.73', '$607,326'],
      ],
      nota:
        'Bogotá tariffs, in force since 1 July 2026. Strata 1 to 3 sit with ' +
        'stratum 4 because filling a pool is **non-basic consumption**, and ' +
        'for that band all four pay the same. Other municipalities have other ' +
        'tariffs: each utility sets its own and they change.',
    },
    {
      tipo: 'nota',
      texto:
        'Look at the table again: **sewerage costs more than the water ' +
        'itself.** And it is billed on what the water meter records, not on ' +
        'what you actually discharge. In other words: you pay sewerage on the ' +
        '45 m³ sitting in your pool. It is not a billing error, it is how the ' +
        'tariff is built, and it is worth knowing before you decide how often ' +
        'to empty the shell.',
    },

    { tipo: 'titulo', texto: 'The month: the figure nobody will give you' },
    {
      tipo: 'parrafo',
      texto:
        'Here is the cost that decides whether a pool gets used or gets ' +
        'covered over within two years. Working it out means knowing how many ' +
        'hours the pump runs, and there the new rule holds a surprise: **it ' +
        'sets none at all for a house pool.** Resolución 929 de 2026 applies to ' +
        'pools in collective use open to the general public and to ' +
        'restricted-use pools not open to the public — a residential ' +
        'development pool — and leaves the privately owned single-dwelling ' +
        'pool with nothing but the minimum safety rules of Ley 1209 de 2008.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The sensible move is to take as a reference what is a rule for the ' +
        'pool next door: for a restricted-use pool, Resolución 929 de 2026 ' +
        'requires a full turnover every **4 to 6 hours**, two to four times a ' +
        'day, with **8 to 24 hours of daily circulation**. Eight hours a day is the floor of that band, ' +
        'and it is the assumption used here. With a 1 HP pump — 0.75 kW — that ' +
        'comes to 6 kWh a day and **180 kWh a month**. At August 2026 tariffs, ' +
        'that is this:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Item', 'How it works out', 'Per month'],
      filas: [
        [
          '**Pumping, Bogotá (stratum 4)**',
          '180 kWh × $863.61',
          '**$155,449**',
        ],
        [
          '**Pumping, Medellín (stratum 4)**',
          '180 kWh × $960.34',
          '**$172,861**',
        ],
        [
          '**Pumping, Medellín (strata 5 and 6)**',
          '180 kWh × $1,152.41',
          '$207,434',
        ],
        [
          '**Evaporation top-up, Bogotá**',
          '3.84 m³ × $8,302.41',
          '$31,881',
        ],
      ],
      nota:
        'Electricity: August 2026 tariff schedules from Enel Colombia and ' +
        'EPM, tension level 1, utility-owned assets. Water: the Bogotá tariff ' +
        'quoted above. Missing here is everything with no public price — ' +
        'chemicals, laboratory work and labour — which belongs in the ' +
        'maintenance article.',
    },
    {
      tipo: 'nota',
      texto:
        'The top-up assumes the pool loses **4 mm of water depth a day** to ' +
        'evaporation. And this has to be said plainly: **I found no published ' +
        'Colombian measurement of pool evaporation.** Four millimetres is an ' +
        'engineering order of magnitude, not a national figure; real ' +
        'evaporation depends on water temperature, air temperature, humidity ' +
        'and wind. The arithmetic is left in the open so that anyone with a ' +
        'better measurement can redo it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On pumping and water alone, the reference pool costs close to ' +
        '**$190,000 a month in Bogotá before a single gram of chemical**. The ' +
        'full breakdown, with laboratory work, chemicals and everything the ' +
        'rule requires, is in [the monthly cost of running a ' +
        'pool](/blog/mantenimiento-de-piscina-costo-mensual).',
    },
    {
      tipo: 'nota',
      texto:
        'The cheapest way to bring that number down is not to switch the pump ' +
        'off: it is to change it. In a pump, flow is proportional to speed and ' +
        'power to the **cube** of speed. Running it at half speed for twice as ' +
        'long moves the same volume of water on **a quarter of the energy**. A ' +
        'variable-speed pump pays for itself, and that sum you can do with the ' +
        'tariff printed on your own bill.',
    },

    { tipo: 'titulo', texto: 'How to ask for a quotation you can compare' },
    {
      tipo: 'parrafo',
      texto:
        'Eight questions. If two quotations answer all eight, they can be ' +
        'compared. If they do not, you are not comparing prices: you are ' +
        'comparing different scopes of work under the same name.',
    },
    {
      tipo: 'lista',
      items: [
        'Does it include a soil investigation and a signed structural design?',
        'How many floor drains does it have, how far apart, and balanced how?',
        'Does it include the vacuum release system and the immersion alarm, or are those extra?',
        'How many m² of perimeter walkway does it include, and in what finish?',
        'What flow does the pump deliver, at what power, and in how many hours does it complete one full turnover?',
        'Is the electrical installation certified under RETIE, and who signs it?',
        'What happens if water appears in the excavation? Is that allowed for, or is it a variation?',
        'Does it include commissioning, first fill and initial chemical balancing?',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The seventh separates a serious contractor from the rest. A budget ' +
        'that says nothing about water appearing has already decided that you ' +
        'carry that risk. It is the same mechanism behind [why building work ' +
        'overruns its budget](/blog/por-que-la-obra-se-sale-del-presupuesto).',
    },

    { tipo: 'titulo', texto: 'What cannot be put right afterwards' },
    {
      tipo: 'lista',
      items: [
        '**The number of drains and the spacing between them.** Putting it right means draining, breaking out the floor and re-waterproofing. It is the item that makes owners and meetings say no.',
        '**The position of the [plant room](/blog/cuarto-de-maquinas-de-una-piscina).** Moving it later is new pipework across the whole garden.',
        '**The depth and the changes of level in the floor.** Decided at design stage, and then it stays.',
        '**Orientation and shading.** They set the water temperature every single day, and no electric element corrects a siting mistake for free.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The person who leads this line of work at the practice brings fifteen ' +
        'years of designing hydraulic systems and bodies of water, and the ' +
        'conclusion of those fifteen years fits in one sentence: **the price ' +
        'of a pool is settled before the first spadeful, and paid over twenty ' +
        'years.** Price the system, not the hole.',
    },
  ],
}
