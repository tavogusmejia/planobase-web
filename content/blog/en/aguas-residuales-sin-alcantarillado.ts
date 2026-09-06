import type { TraduccionPost } from '@/lib/types'
import { TREN_DE_TRATAMIENTO_EN } from '../diagramas/saneamiento'

/**
 * Traducción de «Aguas residuales sin alcantarillado».
 *
 * Tres cuidados propios de esta pieza:
 *
 * 1. **Los separadores decimales se invierten dentro de las tablas**, que es
 *    donde más fácil se cuela el error. «1,2 m» pasa a «1.2 m» y «2.000 m s.
 *    n. m.» pasa a «2,000 m a.s.l.». Una coma decimal española convertiría el
 *    metro y pico de profundidad útil en mil doscientos.
 * 2. **Los nombres de las normas no se traducen**: Resolución 0330 de 2017,
 *    Decreto 1076 de 2015, Ley 633 de 2000. Se glosan la primera vez.
 * 3. **El diagrama trae su propia versión inglesa**, construida sobre la misma
 *    geometría en `content/blog/diagramas/saneamiento.ts`.
 */
export const traduccion: TraduccionPost = {
  slug: 'aguas-residuales-sin-alcantarillado',
  titulo: 'Wastewater with no sewer: what the regulation actually demands',
  traducido: '2026-07-20',
  resumen:
    'What everyone calls «the septic tank» is really four units in a row, and ' +
    'the regulation requires all of them. How much land the last one needs, ' +
    'which permit sits behind it, and why the minimum distance to your water ' +
    'well you have heard about appears nowhere in the code.',
  metaDescripcion:
    'Septic tanks and wastewater treatment on rural land in Colombia: what ' +
    'the RAS demands, which environmental permit applies and how much area.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Working out where the water comes from is half the problem. The other ' +
        'half is where it goes, and it tends to be left until the end of the ' +
        'budget as a single line reading «septic tank» with a round number ' +
        'beside it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That line is wrong on two counts. **The first is technical**: what ' +
        'the code requires is not a tank but four units in a row, and the last ' +
        'one needs land and a soil that will absorb. **The second is ' +
        'procedural**: there is a permit behind it, it is granted by the ' +
        'environmental authority and not by the town hall, and it comes first.',
    },
    {
      tipo: 'nota',
      texto:
        'The rule that orders the whole subject: **discharge is decided by the ' +
        'regional environmental authority**, the same body that decides on the ' +
        'water coming in. It is a different entity from the municipality and ' +
        'from whoever issues the building permit. How that links to the ' +
        'project calendar is covered in [water in the ' +
        'countryside](/blog/agua-en-el-campo-que-permiso-necesita).',
    },

    { tipo: 'titulo', texto: 'The starting rule has no threshold' },
    {
      tipo: 'parrafo',
      texto:
        'A common belief holds that a single house with few occupants falls ' +
        'below any requirement. The articles say the opposite, and say it ' +
        'without qualification:',
    },
    {
      tipo: 'cita',
      texto:
        'Every building, cluster of buildings or residential, tourism or ' +
        'industrial development located outside the coverage area of the ' +
        'public sewer system shall be provided with systems for collecting and ' +
        'treating liquid waste and shall hold the corresponding discharge ' +
        'permit.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.3.4.10',
    },
    {
      tipo: 'parrafo',
      texto:
        'The general rule on the permit is just as broad: it reaches anyone ' +
        'whose activity discharges into surface water, marine water **or into ' +
        'the ground**. There is no minimum flow below which the article stops ' +
        'applying.',
    },
    {
      tipo: 'nota',
      texto:
        'There is **one way out, and it is narrow**. The exception for ' +
        'scattered rural housing allows discharge into the ground with no ' +
        'permit, provided the household has an individual sanitation solution ' +
        'designed under the parameters set by the national technical code for ' +
        'water and sanitation. It sits in paragraph 5 of article 2.2.3.4.1.9 ' +
        'of Decreto 1076. Its limits — and why it **does not cover a country ' +
        'subdivision** — are set out in [water in the ' +
        'countryside](/blog/agua-en-el-campo-que-permiso-necesita) and are not ' +
        'repeated here.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Notice what the exception really does: it does not lift the technical ' +
        'obligation, it moves it. You stop needing a permit and start needing ' +
        '**a design that complies with the technical code**. So in both ' +
        'scenarios the question ends up being the same one: what does that ' +
        'code say.',
    },

    { tipo: 'titulo', texto: 'The code nobody could read for months' },
    {
      tipo: 'parrafo',
      texto:
        'That code is **Resolución 0330 de 2017**, issued by the housing ' +
        'ministry and known in the trade as the RAS. And here this blog settles ' +
        'a debt: the article on water stated, inside its own text, that it had ' +
        'not been able to read it. The PDF published by the ministry is a set ' +
        'of scanned pages with no text layer.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The full text is published, with a text layer and with currency notes ' +
        'article by article, in the legal database of the **Comisión de ' +
        'Regulación de Agua Potable y Saneamiento Básico**. Every figure in ' +
        'this article comes from there. So does the trail of amendments, which ' +
        'is the first thing to look at: 0330 was **amended by Resolución 799 ' +
        'de 2021 and corrected by Resolución 908 de 2021**, and several of the ' +
        'articles quoted here carry that newer wording, not the original one.',
    },
    {
      tipo: 'nota',
      texto:
        'A point about scope worth fixing before going on. **The RAS is not ' +
        'addressed to you.** Its article 2 addresses utility providers, sector ' +
        'bodies and «designers, builders, supervising engineers and ' +
        'operators». A private house comes in through another door: because ' +
        'Decreto 1076 refers to it in order to define when an individual ' +
        'solution counts as properly designed. It is a cross-reference, which ' +
        'is why your designer remains the reader of record.',
    },

    { tipo: 'titulo', texto: 'What people call a «septic tank» is four units' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part that changes a budget. The septic tank on its own ' +
        'does not comply, and this is nobody’s opinion: it is two articles ' +
        'working together. Paragraph 1 of article 173 requires, in individual ' +
        'systems, **a grease trap at the head and an anaerobic filter** after ' +
        'the tank. Article 176 then requires **a complementary treatment** ' +
        'after that.',
    },
    {
      tipo: 'diagrama',
      svg: TREN_DE_TRATAMIENTO_EN,
      titulo: 'The treatment train, in the order the code requires',
      pie:
        'Schematic section, not to scale. The numeric labels come from ' +
        'articles 172, 173 and 177 of Resolución 0330 de 2017. Drawing by the ' +
        'practice.',
    },

    { tipo: 'titulo', texto: '1 · The grease trap' },
    {
      tipo: 'parrafo',
      texto:
        'It goes as close to the kitchen as possible and **upstream of the ' +
        'tank**. Its job is to keep grease from blocking everything ' +
        'downstream, which is precisely how most of these systems fail.',
    },
    {
      tipo: 'lista',
      items: [
        'Retention time of **2.5 minutes minimum**.',
        'Length-to-width ratio between **1:1 and 3:1**, depending on its geometry.',
        'Working depth to suit the volume, with **0.35 m as a minimum**.',
        'Cleaning **every time it reaches 75% of its grease holding capacity**. That is an operating duty, not a suggestion.',
      ],
    },

    { tipo: 'titulo', texto: '2 · The septic tank' },
    {
      tipo: 'parrafo',
      texto:
        'It settles and digests. The code allows it expressly for areas with ' +
        'no public sewer network and for scattered rural housing **with enough ' +
        'surrounding land to fit the tank together with its post-treatment**. ' +
        'That phrase is what turns available land into a requirement rather ' +
        'than a convenience.',
    },
    {
      tipo: 'lista',
      items: [
        'Hydraulic retention time **between 12 and 24 hours**.',
        'If rectangular, a length-to-width ratio **between 2:1 and 5:1**. Any other geometry calls for a justified hydraulic design.',
        '**Two chambers minimum**, and the first must hold **two thirds of the total volume**.',
        'A device for **venting gases**, and a design allowing inspection and maintenance.',
      ],
    },
    {
      tipo: 'tabla',
      cabeceras: ['Working volume', 'Minimum working depth', 'Maximum working depth'],
      filas: [
        ['Up to 6 m³', '1.2 m', '2.2 m'],
        ['From 6 to 10 m³', '1.5 m', '2.5 m'],
        ['Over 10 m³', '1.8 m', '2.8 m'],
      ],
      nota:
        'Table 25 of Resolución 0330 de 2017, article 173, in the wording ' +
        'corrected by Resolución 908 de 2021.',
    },
    {
      tipo: 'nota',
      texto:
        '**Here is the most misquoted figure in the whole subject.** ' +
        'Resolución 0330 **sets no minimum distance** between the septic tank ' +
        'and the water well, nor between the tank and the boundary. I searched ' +
        'the word «distancia» through the entire text: the only table of ' +
        'minimum distances is Table 28, and its own heading limits it to ' +
        '**centralised** treatment systems, meaning municipal plants. The ' +
        'fifteen, twenty or thirty metres in circulation do not come from this ' +
        'resolution.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What the code does say about the water well is item 7 of article 173, ' +
        'and it is a rule of position rather than of metres: the tank «must ' +
        'be sited downhill of any well or spring used for the supply of water ' +
        'for human consumption». On a ' +
        'sloping plot that decides where the house sits as much as the view ' +
        'does.',
    },
    {
      tipo: 'nota',
      texto:
        'Two warnings about the precast tank, which is what almost everybody ' +
        'buys. The first is about material: the code refers to Resolución 501 ' +
        'de 2017 for chemical resistance properties. The second is about ' +
        'siting, and it ruins whole installations: **with a high water table, ' +
        'an empty tank floats**. The code requires precautions so it cannot ' +
        'shift. And the old article 174, which dealt with precast units ' +
        'separately, was removed in 2021 and folded into 173.',
    },

    { tipo: 'titulo', texto: '3 · The anaerobic filter' },
    {
      tipo: 'parrafo',
      texto:
        'The upflow anaerobic filter — FAFA on the drawings — is built either ' +
        'as a chamber attached to the end of the tank or as a separate one. ' +
        'Its filter bed is sized **between 0.02 and 0.04 m³ for every 0.1 m³ ' +
        'of daily wastewater**, and with plastic filter media half that volume ' +
        'may be used.',
    },

    { tipo: 'titulo', texto: '4 · The post-treatment, which decides whether it fits' },
    {
      tipo: 'parrafo',
      texto:
        'This is where the project is won or lost. The code offers four ' +
        'options and leaves the choice to the designer, «according to the ' +
        'permeability of the soil, the land available and the effluent ' +
        'quality required»:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Option', 'What the code fixes', 'When it is used'],
      filas: [
        [
          'Infiltration field',
          'Trenches of **30 m maximum**, 0.45 to 0.75 m wide, at a fall of 0.3 to 0.5% with 0.10 to 0.15 m pipework on a gravel bed of 10 to 60 mm',
          'The default option where there is land and the soil absorbs',
        ],
        [
          'Soakaway pit',
          '**1.50 m minimum diameter**, working depth no greater than 5 m, base **2 m above the water table** and a 0.60 m inspection cover',
          'An alternative to the field **where there is not enough land** and the soil is permeable',
        ],
        [
          'Intermittent sand filter',
          'Hydraulic loading of 0.08 to 0.2 m³/m²/day, depth of 45 to 90 cm and 12 to 48 dosing cycles a day',
          'Where better effluent quality is needed before disposal',
        ],
        [
          'Constructed wetland',
          'Retention of about **5 days**, length-to-width ratio of 3:1 to 4:1 and a **sealed base** in clay or geomembrane',
          'Where there is land and a planted, above-ground unit is wanted',
        ],
      ],
      nota:
        'Articles 177 to 180 of Resolución 0330 de 2017, with Tables 26 and ' +
        '27. The infiltration field must also **be shown not to affect ' +
        'groundwater**, and trees must be kept away so roots do not get in.',
    },

    { tipo: 'titulo', texto: 'How much land it takes, using the code alone' },
    {
      tipo: 'parrafo',
      texto:
        'It can be bounded without inventing anything, by chaining three ' +
        'articles. The first sets how much drinking water is allotted to each ' +
        'occupant and — this surprises people — **it depends on height above ' +
        'sea level**, not on income bracket or house size:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Height of the area', 'Maximum net allowance'],
      filas: [
        ['Above 2,000 m a.s.l.', '120 litres per person per day'],
        ['Between 1,000 and 2,000 m a.s.l.', '130 litres per person per day'],
        ['Below 1,000 m a.s.l.', '140 litres per person per day'],
      ],
      nota: 'Table 1 of Resolución 0330 de 2017, article 43.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The second is the **return coefficient**: what fraction of the water ' +
        'coming in leaves as wastewater. The code orders it to be estimated ' +
        'from local information and, absent field data, **taken as 0.85**. The ' +
        'third is the loading rate of the infiltration field: **no more than ' +
        '100 litres per day per square metre**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'With that, a house of five people in a warm climate: 5 × 140 = 700 ' +
        'litres of drinking water a day; × 0.85 = **595 litres of wastewater a ' +
        'day**; ÷ 100 = **6 m² of absorption area**. And the tank, at 24 hours ' +
        'of retention, starts at 0.6 m³ of working volume, which under Table ' +
        '25 is resolved with a working depth between 1.2 and 2.2 m.',
    },
    {
      tipo: 'dato',
      valor: '6 m²',
      etiqueta:
        'Minimum absorption area for a five-person house below 1,000 m a.s.l., ' +
        'worked out from the allowance, the return coefficient and the loading ' +
        'rate set by the code itself',
      fuente: 'Resolución 0330 de 2017, articles 43, 134 and 177',
    },
    {
      tipo: 'nota',
      texto:
        '**That figure is a floor, not a design.** The 100 L/day/m² is the ' +
        'ceiling on the loading rate, meaning the best soil imaginable. The ' +
        'real area «must be obtained from the characteristics of the soil, ' +
        'as determined by the infiltration tests», and in clay it ' +
        'multiplies. Anyone handing you an infiltration field area **without ' +
        'having run the percolation test** is guessing.',
    },
    {
      tipo: 'nota',
      texto:
        'One more piece of honesty: **Resolución 0330 gives no formula for the ' +
        'tank’s total volume.** It fixes retention time and geometry, not ' +
        'sludge accumulation, which in practice is what makes a real tank ' +
        'several times larger than the retention arithmetic. That sizing is ' +
        'the designer’s, and this is why no recommended volume is published ' +
        'here.',
    },

    { tipo: 'titulo', texto: 'The studies that come before drawing the solution' },
    {
      tipo: 'parrafo',
      texto:
        'Article 171 lists five of them. They are worth reading slowly, ' +
        'because three happen on the plot itself and none can be replaced by a ' +
        'supplier’s quotation:',
    },
    {
      tipo: 'lista',
      items: [
        'A **site visit** to identify nearby surface water, buildings and property boundaries.',
        '**Survey work** locating the system in plan and in height.',
        '**Locating the post-treatment**, not only the tank.',
        '**Ground characteristics**: peak water table levels and, where needed, the infiltration capacity of the subsoil.',
        '**Settling the environmental procedures** and obtaining whatever authorisations are required.',
      ],
    },

    { tipo: 'titulo', texto: 'The permit: what it asks, how long it lasts, how long it takes' },
    {
      tipo: 'parrafo',
      texto:
        'The discharge permit application asks for twenty-two items. These are ' +
        'the ones that surprise anyone expecting a form:',
    },
    {
      tipo: 'lista',
      items: [
        'An **up-to-date land registry certificate** on ownership of the property, or sound proof of possession.',
        'A **land-use statement** issued by the municipal authority. So the town hall does appear — as the body that certifies, not the one that authorises.',
        '**Technical reports, engineering design and detail drawings** of the treatment system, with its efficiency conditions.',
        '**Discharge flow in litres per second**, frequency in days per month and duration in hours per day.',
        'A **risk management plan** for the discharge.',
        'And for discharge into the ground: **field results and data from the infiltration tests**, the operating and maintenance manual, the disposal area on a georeferenced drawing, and a **closure and abandonment plan** for that area.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'One requirement that, read literally, **does not reach a ' +
        'single-family house**: the **environmental assessment of the ' +
        'discharge**. Article 2.2.3.3.5.3 demands it from industrial, ' +
        'commercial or service activities, «as well as those coming from ' +
        'residential developments». A lone house is not on that list; a gated ' +
        'development is. If asked for it, ask for the reasons in writing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The procedural deadlines are in the code and they add up. They are not ' +
        'how long it will take — that depends on the authority — but they are ' +
        'the legal floor, and they tell you when a delay has stopped being ' +
        'normal:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Stage', 'Deadline'],
      filas: [
        ['Checking that the file is complete', '10 working days'],
        ['Assessment of the application and site visits', '30 working days'],
        ['Technical report after the visits', '8 working days'],
        ['Decision by resolution', '20 working days'],
        ['**Total, with nothing missing**', '**68 working days**'],
      ],
      nota:
        'Decreto 1076 de 2015, article 2.2.3.3.5.5. If paperwork is missing, ' +
        'the clock adds another ten working days to complete it. The ' +
        'resolution may be appealed within five working days of notification.',
    },
    {
      tipo: 'nota',
      texto:
        'The permit **is granted for a term of no more than ten years**, the ' +
        'same as a domestic water concession. And for discharge into the ' +
        'ground the authority has to verify, among other things, «the absence ' +
        'of any possible discharge alternative other than the ground» and ' +
        '«the absence of a sewer network the user could connect to». If there is a ' +
        'mains sewer next door, the answer may well be to connect to it.',
    },

    { tipo: 'titulo', texto: 'What this article will not give you' },
    {
      tipo: 'parrafo',
      texto:
        'A price. And it is not squeamishness: **there is no published ' +
        'Colombian source with a methodology** for the cost of an individual ' +
        'treatment system, and the line item depends on the one thing nobody ' +
        'knows before measuring it, namely how that soil absorbs. An ' +
        'infiltration field in sand and one in clay, for the same house, match ' +
        'neither in area nor in excavation nor in invoice.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Nor do I publish the assessment fee the regional authority charges to ' +
        'process the permit: each one works it out under the system and method ' +
        'of article 96 of Ley 633 de 2000, and there is no national figure. It ' +
        'is one phone call, and it is free. Why this blog gives no ' +
        'construction figures without a methodology is set out in [what a ' +
        'square metre costs](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
    {
      tipo: 'parrafo',
      texto:
        'What can be said about the shape of the cost: the precast tank is the ' +
        'cheap, visible part; **excavation, post-treatment and the soil test ' +
        'are the expensive part**, and they are exactly the three absent from ' +
        'a tank supplier’s quotation. It is the same logic that governs the ' +
        'rest of a rural budget, set out in [what a country house ' +
        'costs](/blog/cuanto-cuesta-una-casa-campestre).',
    },

    { tipo: 'titulo', texto: 'The order worth solving it in' },
    {
      tipo: 'lista',
      items: [
        '**Ask the regional authority, in writing and naming the plot**, whether your case falls under the scattered rural housing exception or needs a permit. The answer changes the whole calendar.',
        '**Run the infiltration test before the concept design**, not after. It fixes the area, and the area fixes where the house can stand.',
        '**Measure the water table in the wet season**, not in the dry one. It is the figure deciding whether the tank floats and whether a soakaway is viable.',
        '**Place the tank downhill of the water well** from the very first sketch. Fixing it later means moving one of the two.',
        '**Budget the four units, not the tank.** Trap, tank, filter and post-treatment, each with its excavation.',
        '**Treat the permit as a parallel route that comes first**, with its floor of sixty-eight working days.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Whoever settles this at concept stage is spared the awkward ' +
        'conversation. Whoever settles it with signed drawings sometimes finds ' +
        'that the infiltration field will not fit where the house is — and ' +
        'then it is the house that moves.',
    },
  ],
  fuentes: [
    {
      url: 'https://normas.cra.gov.co/gestor/docs/resolucion_minviviendact_0330_2017.htm',
      titulo:
        'Resolución 0330 de 2017, the national technical code for water supply and basic sanitation (RAS): articles 43, 134 and 171 to 183, as amended by Resolución 799 de 2021 and corrected by Resolución 908 de 2021',
    },
    {
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
      titulo:
        'Decreto 1076 de 2015, the single regulatory decree for the environment sector: discharge into the ground, individual sanitation solutions, and the requirements and procedure for the discharge permit',
    },
    {
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6285',
      titulo:
        'Ley 633 de 2000, article 96: the system and method for charging environmental assessment and monitoring services',
    },
  ],
}
