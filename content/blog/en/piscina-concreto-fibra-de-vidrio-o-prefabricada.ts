import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Concreto, fibra de vidrio o prefabricada: cuál le conviene».
 *
 * Vocabulario de material que esta pieza fija: `concreto lanzado` → sprayed
 * concrete, `monocasco` → one-piece shell, `gelcoat` → gelcoat, `panel y
 * liner` → panel-and-liner, `membrana` → liner, `cama de arena` → sand bed,
 * `subpresión` → hydrostatic uplift, `válvula hidrostática` → hydrostatic
 * relief valve, `dren perimetral` → perimeter drain, `lastre` → ballast,
 * `carga extradimensionada` → oversized load, `enchape` → tiling,
 * `nivel freático` → water table.
 *
 * Y el vocabulario del pilar, ya fijado: `vaso` → pool shell, `cubierta
 * antiatrapamiento` → anti-entrapment cover y `rejilla` → grating —los dos
 * vienen de `en/ley-1209-piscinas-copropiedad` y se respetan enteros—,
 * `borde infinito` → infinity edge,
 * `piscina desbordante` → overflow pool, `skimmer` → skimmer, `desnatador` →
 * skimmer (la palabra que usa la norma; se glosa igual que en español),
 * `período de recirculación` → turnover period, `andén perimetral` →
 * perimeter walkway.
 *
 * Separadores: «0,90 m» → «0.90 m», «2,60 m» → «2.60 m», «3,00 m» → «3.00 m»,
 * «1,40 m» → «1.40 m». Los nombres de las normas no se traducen: Resolución
 * 4959 de 2006, Resolución 1510 de 2011, Ley 1209, Ley 400 de 1997, Ley 1480
 * de 2011.
 */
export const traduccion: TraduccionPost = {
  slug: 'piscina-concreto-fibra-de-vidrio-o-prefabricada',
  titulo: 'Concrete, fibreglass or panel-and-liner: which suits you',
  traducido: '2026-09-05',
  resumen:
    'All three can be built well and all three can be built badly. What ' +
    'really decides it in Colombia are two things no brochure mentions: the ' +
    'width of the road the shell has to travel down, and the water sitting ' +
    'under the ground.',
  metaDescripcion:
    'Concrete, fibreglass or panel-and-liner pools: what really separates ' +
    'them, what the rules require of all three, and when each one suits.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The question is usually asked backwards. It is not about which is ' +
        '"better", because all three can be built well and all three can be ' +
        'built badly. It is about which one fits your plot, your access, your ' +
        'ground and the use you will give it over the next twenty years.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And two Colombian constraints settle the answer before any ' +
        'comparison of finishes: **how the shell gets in** and **what lies ' +
        'under the ground**. Let us start with what they are.',
    },

    { tipo: 'titulo', texto: 'The three families' },
    {
      tipo: 'lista',
      items: [
        '**Concrete**, cast in place or sprayed. It is built in the hole: steel, concrete, waterproofing and lining. Free shape, free depth, free edge — including an infinity edge and any kind of overflow pool. It is the slowest of the three and the only one that can be repaired indefinitely.',
        '**Fibreglass**, one-piece shell. A reinforced polyester shell moulded at a factory and transported whole to site. Installation is measured in days, not weeks. Shape, size and depth are those of the mould: there is no "nearly".',
        '**Panel-and-liner.** A structure of panels — galvanised steel or polymer — assembled in the hole and lined inside with a membrane. It is the quickest to assemble and the cheapest to buy, and its membrane is a consumable that gets replaced.',
      ],
    },

    { tipo: 'titulo', texto: 'What the rules require of all three alike' },
    {
      tipo: 'parrafo',
      texto:
        'None of this changes with the material, and it is worth being clear ' +
        'about before comparing prices: two quotations, one compliant and one ' +
        'not, are not comparable.',
    },
    {
      tipo: 'lista',
      items: [
        '**Two or more submerged drains** at the deepest point, hydraulically balanced, at least **0.90 m** apart, each with its anti-entrapment cover — the rule spells it "antientrampamiento" — of an area at least **four times that of the discharge pipe**, plus a vacuum release system and an emergency stop button.',
        '**One skimmer — the surface outlet, which the Colombian rule calls a desnatador — for every 46.5 m² of water surface**, on opposite sides of the shell. Above 312 m² of surface it gives way to perimeter overflow, and it does not apply to infinity-edge pools.',
        '**A turnover period of 4 to 6 hours**, two to four turnovers a day and 8 to 24 hours of daily circulation in a restricted-use pool. That is what sizes the pump and the filter.',
        '**A maximum velocity of 2.4 m/s on the pressure line and 1.8 m/s on the suction line**, and a maximum diameter of eight inches.',
        '**A watertight lining**, easy to clean and disinfect and stable against the treatment chemicals — and the rule extends the requirement to perimeter channels and balance tanks. It applies to fibreglass gelcoat and to a liner membrane exactly as it applies to concrete tiling.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'A fibreglass shell comes with its suction outlets moulded in at the ' +
        'factory. **Count them before you buy.** A model with a single floor ' +
        'drain does not comply, and on a one-piece shell you cannot open a ' +
        'second drain afterwards: you would be drilling the shell. It is the ' +
        'thirty-second check that saves the most money in the whole decision.',
    },
    {
      tipo: 'nota',
      texto:
        'And a point of language: **a "certified pool" is not a legal category ' +
        'in Colombia.** What the law regulates is devices, not pools, and what ' +
        'it means today for a device to be type-approved is set out with the ' +
        'articles in hand in [what Ley 1209 really ' +
        'requires](/blog/ley-1209-piscinas-copropiedad).',
    },

    { tipo: 'titulo', texto: 'The fact that settles a fibreglass pool: the road' },
    {
      tipo: 'parrafo',
      texto:
        'A one-piece shell is not assembled on site: it arrives finished, on ' +
        'a bed, slung from a crane. And every dimension of that shell has to ' +
        'clear every bend on the way to your plot.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The national rule is specific. Resolución 4959 de 2006, from the ' +
        'transport ministry, classes anything wider than **2.60 m** as an ' +
        '**oversized load**, and beyond that width haulage stops being a ' +
        'delivery and becomes a permit application.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Width of the shell', 'What haulage it takes'],
      filas: [
        [
          'Up to 2.60 m',
          'Ordinary haulage. This is the width band the models that move without friction along almost any road in the country sit in',
        ],
        [
          'Over 2.60 m and up to 3.00 m',
          'Oversized load: permit, a haulier entered on the ministry register, and one or more escort vehicles. Maximum 40 km/h on the open road and 20 km/h on urban streets',
        ],
        [
          'Over 3.00 m',
          'A still stricter tier, and feasibility has to be checked route by route before committing to a model',
        ],
      ],
      nota:
        'Resolución 4959 de 2006, from the transport ministry, on the haulage ' +
        'of indivisible overweight and oversized loads.',
    },
    {
      tipo: 'nota',
      texto:
        'Hence the line to take away: **the width of your fibreglass pool is ' +
        'not settled by the catalogue, it is settled by the tightest bend on ' +
        'the road in.** Before falling in love with a model, drive the route ' +
        'from the main road to the site and measure the narrowest gap, the ' +
        'clear height under cables and branches, and where the crane will ' +
        'stand. On a rural plot this rules out whole sections of the catalogue.',
    },

    { tipo: 'titulo', texto: 'Hydrostatic uplift: why the shell is a structure' },
    {
      tipo: 'parrafo',
      texto:
        'This is the second constraint, and the one that produces the most ' +
        'expensive damage and the hardest conversation with a client ' +
        'afterwards.',
    },
    {
      tipo: 'parrafo',
      texto:
        'An empty pool is a hollow box buried in the ground. If the water ' +
        'table rises above its floor, ground water pushes upward with a force ' +
        'equal to the weight of water displaced. In our reference pool — 32 m² ' +
        'of floor — with ground water 1.40 m above that floor, the push is ' +
        'around **45 tonnes**. A concrete shell does not weigh that. A ' +
        'fibreglass shell does not weigh a twentieth of it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The trade has a name for the result: the pool "comes out of the ' +
        'hole". It lifts, it tilts, it snaps the pipework and it wrecks the ' +
        'perimeter walkway. And it nearly always happens on the day somebody ' +
        'drains it to clean it, in the wet season.',
    },
    {
      tipo: 'nota',
      texto:
        'All three defences are design decisions, not maintenance ones: a ' +
        '**hydrostatic relief valve in the floor**, so ground water comes in ' +
        'instead of pushing; a **perimeter drain discharging to a lower point ' +
        'or to a sump with a pump**; and **anchorage or ballast** where the ' +
        'calculation calls for it. And the operating rule that follows from ' +
        'all of them: **never drain the pool in the wet season without knowing ' +
        'where the water table is.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is why the shell is a structure and not a finish: the soil ' +
        'investigation and the structural design are signed by a civil ' +
        'engineer, as the earthquake-resistant construction regime requires. ' +
        'On sloping ground the lateral push of the earth is added to all this, ' +
        'which is another conversation: see [building on a sloping ' +
        'plot](/blog/construir-en-lote-con-pendiente).',
    },

    { tipo: 'titulo', texto: 'The comparison, unvarnished' },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Concrete', 'Fibreglass', 'Panel-and-liner'],
      filas: [
        ['Shape and depth', 'Free', 'Those of the mould', 'Straight sides, limited depth'],
        ['Infinity or overflow edge', 'Yes', 'Only if the mould has one', 'Not in practice'],
        ['Time on site', 'Weeks', 'Days, once it arrives', 'Days'],
        ['Depends on vehicle access', 'Little', '**It is decisive**', 'Little'],
        ['Risk of floating when empty', 'High without a relief valve', '**Very high** without a relief valve', 'High without a relief valve'],
        ['Repairing a crack', 'Routine', 'Specialist work, and it shows', 'Patch or membrane replaced'],
        ['What gets renewed over the years', 'Tiling and waterproofing', 'The gelcoat, in a technical recoat', '**The membrane, in full**'],
        ['Can be extended or reshaped', 'Yes', 'No', 'No'],
      ],
      nota:
        'The row that weighs most over time is the second from last. In ' +
        'panel-and-liner the membrane is a consumable: the day comes when it ' +
        'is replaced, and that is an item to budget from the start, not a ' +
        'surprise.',
    },

    { tipo: 'titulo', texto: 'What you will be told, and what sits behind it' },
    {
      tipo: 'lista',
      items: [
        '**"Fibreglass does not crack."** A one-piece shell does not crack the way concrete does, true. But it deforms if the sand bed is poorly compacted and it blisters if the gelcoat misbehaves, and both are harder to put right than a crack in concrete.',
        '**"Concrete lasts forever."** The shell, nearly. The waterproofing and the tiling, no: they have a service life and they have to be renewed. A budget that does not say so is pushing that bill down the road.',
        '**"You just change the liner and it looks new."** True, and that is exactly the point: it has to be changed. Ask in writing what service life the manufacturer states for the membrane, and what the warranty covers.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'On warranties, the framework is the consumer statute: on immovable ' +
        'property the legal warranty runs to **ten years on structural ' +
        'stability and one year on finishes**. Ask the supplier warranty to ' +
        'say which of the two it is covering, because a "ten-year warranty" on ' +
        'a liner means nothing at all.',
    },

    { tipo: 'titulo', texto: 'When each one suits' },
    {
      tipo: 'lista',
      items: [
        '**Concrete** when the shape is not negotiable, when there is a slope, when you want an [infinity edge](/blog/piscina-de-borde-infinito) or any overflow variant, when the ground is demanding, or when the pool is in collective use and will work every day of its life.',
        '**Fibreglass** when access is generous and verified, when a catalogue size suits you as it stands, when the programme rules, and when the ground is firm and dry. It is the cleanest of the three if those four hold.',
        '**Panel-and-liner** when the initial outlay is the binding constraint and you accept, with open eyes, that the membrane is a consumable with a date on it.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The person who leads this line of work at the practice brings fifteen ' +
        'years of designing hydraulic systems and bodies of water, and in that ' +
        'time the argument about materials almost never settled a project. ' +
        'What settled it was always the same three things: how it gets in, ' +
        'what lies underneath, and who signs the calculation. Choose those ' +
        'first; the material then chooses itself.',
    },
  ],
}
