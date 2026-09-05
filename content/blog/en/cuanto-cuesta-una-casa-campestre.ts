import type { TraduccionPost } from '@/lib/types'
import { LO_QUE_NO_HAY_EN_EL_CAMPO_EN } from '../diagramas/costos'

/**
 * Traducción de «Cuánto cuesta una casa campestre».
 *
 * El diagrama va rotulado en inglés desde `LO_QUE_NO_HAY_EN_EL_CAMPO_EN`, que
 * vive en el mismo archivo que el español y sobre la misma constante de
 * trazado: el dibujo no puede divergir mientras divergen los rótulos.
 *
 * Vocabulario tomado del corpus ya traducido, no inventado aquí: `casa
 * campestre` → country house, como ya la llaman los enlaces de
 * `cuanto-cuesta-construir-por-m2-en-colombia` y de `casa-bioclimatica`;
 * `corporación autónoma regional` y `acueducto veredal`, `aljibe` y `pozo
 * profundo` como en `agua-en-el-campo-que-permiso-necesita`; `anteproyecto` →
 * concept design y `estudio de suelos` → soil survey como en
 * `del-lote-a-la-licencia`.
 *
 * Contexto añadido para el lector de fuera, una frase por sitio y sin quitar
 * ninguna: qué es una casa campestre como tipología con régimen de suelo
 * propio, qué es el DANE y qué es el POT. Las cifras son las mismas cifras: el
 * 10 % de pendiente, los tres sondeos de seis metros, los cinco años de
 * experiencia.
 *
 * **Lo que el original declara no poder medir se traduce igual.** No hay aquí
 * ninguna cifra de costo que el español no traiga, y la tabla de «por qué no
 * se puede publicar un valor» es literal.
 */
export const traduccion: TraduccionPost = {
  slug: 'cuanto-cuesta-una-casa-campestre',
  titulo: 'What a country house costs in Colombia',
  traducido: '2026-09-05',
  resumen:
    'The house itself costs much the same. What does not is everything the ' +
    'city already had and here has to be built: the track, the power, the ' +
    'water, the treatment of the waste water and the ground itself. Five ' +
    'items that do not fit inside a rate per square metre.',
  metaDescripcion:
    'What really makes a country house dearer than an urban one: access, ' +
    'service connections, water, sanitation, slope and haulage to site.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The question nearly always arrives in the same shape: "what does a ' +
        'square metre of a house in the country cost?". And the honest answer ' +
        'starts with something uncomfortable: **in country housing the square ' +
        'metre is the unit that shares the cost out worst**, because the items ' +
        'that weigh most do not depend on the size of the house but on the ' +
        'property.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Getting electricity as far as the plot costs the same for a house of ' +
        '150 metres as for one of 400. The borehole costs whatever it costs to ' +
        'drill until water appears. The access track costs whatever it ' +
        'measures. Dividing all of that by the square metres built produces a ' +
        'number that collapses the moment the area changes, and that is why ' +
        'two country budgets showing the same rate per square metre can be ' +
        'incomparable.',
    },
    {
      tipo: 'nota',
      texto:
        'One word on the term: a **casa campestre** is not just a house that ' +
        'stands in the country. It is a dwelling type on rural land, with a ' +
        'land regime of its own. Before going on: why no table of pesos per ' +
        'square metre exists in Colombia, what DANE, the national statistics ' +
        'office, publishes, and what falls inside a construction cost, is in ' +
        '[what it costs to build per square ' +
        'metre](/blog/cuanto-cuesta-construir-por-m2-en-colombia). All of that ' +
        'applies here and I will not repeat it. This article is what gets ' +
        'added when the plot is in the country.',
    },

    {
      tipo: 'titulo',
      texto: 'What the city already had, and here has to be built',
    },
    {
      tipo: 'parrafo',
      texto:
        'On an urban plot you buy a property with a paved street in front of ' +
        'it, with the electricity network on the pole, with mains water and ' +
        'with a sewer. None of that is free: it is paid for in the price of ' +
        'the plot and in the connections. It simply already exists.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In the countryside it does not. Each of those four things is a ' +
        'project of its own, with its design, its budget, its programme and, ' +
        'in two cases, its environmental procedure.',
    },
    {
      tipo: 'diagrama',
      svg: LO_QUE_NO_HAY_EN_EL_CAMPO_EN,
      titulo: 'The inventory of what is not there yet',
      pie:
        'Access track, electricity supply with its poles and its transformer, ' +
        'water source with a tank, wastewater treatment system and the cut in ' +
        'the ground where the house stands. The drawing is not to scale and ' +
        'does not represent proportions of cost: it is the list of what has to ' +
        'be budgeted separately.',
    },

    { tipo: 'titulo', texto: 'The access track, and the track during the works' },
    {
      tipo: 'parrafo',
      texto:
        'People budget the finished track and forget the construction track, ' +
        'which is another thing entirely. During the works, mixers, tipper ' +
        'trucks and loaded lorries come in that way, and a track that serves a ' +
        'pick-up will not serve for that. Keeping it passable through the ' +
        'rains is a running cost of the works, not an initial investment.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is also a legal question that comes first and is worth settling ' +
        'before signing the purchase: **where do you get in**. If the access ' +
        'crosses somebody else’s land, you need a right of way created and ' +
        'recorded. A verbal arrangement with the neighbour is not an access.',
    },

    { tipo: 'titulo', texto: 'The electricity' },
    {
      tipo: 'parrafo',
      texto:
        'If the network operator’s line reaches the road and the property is ' +
        'close by, it is a supply connection. If not, the extension has to be ' +
        'built: poles, conductor, and often a transformer of your own. It is ' +
        'an electrical design that the network operator reviews and approves, ' +
        'not something bought at a builders’ merchant.',
    },
    {
      tipo: 'nota',
      texto:
        'It is the item most often discovered late, because the seller of the ' +
        'plot tends to say "the power reaches right there" while pointing at a ' +
        'pole three hundred metres away. **The distance to the existing pole, ' +
        'measured, is a fact you buy on**, just like the area or the ' +
        'boundaries.',
    },

    { tipo: 'titulo', texto: 'The water' },
    {
      tipo: 'parrafo',
      texto:
        'With no acueducto veredal — the village-level water system, usually ' +
        'run by the community itself — the water comes from a source of your ' +
        'own: a borehole, a shallow hand-dug well, a surface intake or ' +
        'rainwater harvesting. None of the four is merely a piece of building ' +
        'work. **Using water from a natural source requires a water concession ' +
        'granted by the corporación autónoma regional**, the regional ' +
        'environmental authority, which is an administrative procedure with an ' +
        'application, a site visit and a formal decision.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And after the water comes drinking water, which is a separate item: ' +
        'storage tank, pumping, filtration and disinfection. A house that ' +
        'depends on a source of its own needs a system, not a hose.',
    },
    {
      tipo: 'nota',
      texto:
        'The cost of a borehole is the perfect example of what this article ' +
        'cannot give you: **it depends on the depth at which there is water on ' +
        'that particular property**, and that is not known before drilling. ' +
        'Anybody who quotes you a closed figure without a hydrogeological ' +
        'study is quoting you a wish.',
    },

    { tipo: 'titulo', texto: 'The waste water' },
    {
      tipo: 'parrafo',
      texto:
        'With no sewer, waste water is treated on the property and then ' +
        'disposed of. **The discharge requires a permit from the corporación ' +
        'autónoma regional**, and the treatment system is designed: it is not ' +
        'a generic "septic tank" but a treatment train sized for the number of ' +
        'occupants and for the ground.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The detail that pushes the cost up: the infiltration field depends on ' +
        'how that soil absorbs, and a clay soil or a high water table forces ' +
        'more expensive solutions. Once again the ground is deciding the ' +
        'budget before the architect does.',
    },
    {
      tipo: 'nota',
      texto:
        'The two environmental procedures — concession and discharge — **come ' +
        'first and do not run in parallel** where the permit file requires ' +
        'them. How they chain together with the permit, and why the rural ' +
        'procedure takes twice as long, is in [the building permit on rural ' +
        'land](/blog/licencia-de-construccion-en-suelo-rural).',
    },

    {
      tipo: 'titulo',
      texto: 'Haulage to site is not an item: it is a multiplier',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is the structural difference most people underestimate. In the ' +
        'city, transport is built into the price of material delivered to site ' +
        'and weighs little. In the countryside, transport **is added to ' +
        'everything**: to the concrete, the steel, the brick, the aggregate, ' +
        'the finishes and the waste that leaves.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And it has a hard threshold that decides the building system: **how ' +
        'far a concrete mixer truck can get**. If ready-mixed concrete cannot ' +
        'come in, it has to be mixed on site, which changes output, quality ' +
        'control, testing and programme. That single question can reorder the ' +
        'whole project.',
    },
    {
      tipo: 'lista',
      items: [
        '**The distance to the nearest concrete plant**, in travelling time and not in kilometres.',
        '**The turning radius and the load capacity of the track**, which decide what vehicle can get in.',
        '**Where material is stored** on a property with no shed and no continuous watch.',
        '**What happens in the rainy season**, which over much of the country is half the year.',
      ],
    },

    {
      tipo: 'titulo',
      texto: 'The ground: slope, cuts and retaining',
    },
    {
      tipo: 'parrafo',
      texto:
        'The plot with the best view is nearly always the steepest one, and ' +
        'the slope is paid for three times over: in earthworks, in retaining ' +
        'walls and in foundations.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The geotechnical survey stops being a procedural requirement and ' +
        'becomes the piece that decides the project. And on a hillside the ' +
        'building code asks for something more than an ordinary soil survey:',
    },
    {
      tipo: 'cita',
      texto:
        'In buildings that are to be placed wholly or partly on a hillside, or ' +
        'that stand at the top or at the foot of one, the geotechnical ' +
        'engineer, together with the advice of a geologist or engineering ' +
        'geologist, must carry out a stability analysis of the slopes that ' +
        'represent a hazard to the building and design the works and measures ' +
        'needed to reach an acceptable level of stability.',
      fuente: 'NSR-10, Título H, section H.5.2.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'There are three things in there that cost money and are almost never ' +
        'in an initial budget. **It applies as well when the house is at the ' +
        'top or the foot of the slope**, not only on it. **It obliges you to ' +
        'add a geologist** to the team, alongside the geotechnical engineer. ' +
        'And it does not end in a diagnosis: **it obliges you to design the ' +
        'stabilisation works**, which then have to be built.',
    },
    {
      tipo: 'nota',
      texto:
        'There is also a specific threshold worth keeping to hand: Título H ' +
        'treats topographic effects as relevant **once the slope of the ground ' +
        'exceeds 10%**, and in that case it requires dynamic response analysis ' +
        'with numerical models in two or three dimensions. Ten per cent is ' +
        'very little inclination: a good share of the plots people buy for the ' +
        'view exceed it comfortably.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On the survey itself, two clarifications that save arguments. The ' +
        'obligation does not depend on size: definitive geotechnical surveys ' +
        'are compulsory for all urban and suburban buildings, of any use group ' +
        '— and country housing usually sits on suburban land. And the number ' +
        'of boreholes and their depth are not decided by whoever drills ' +
        'either: the code sets a minimum by category of the construction unit, ' +
        'which for a house of up to three storeys is **three boreholes of at ' +
        'least six metres**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is signed by a registered civil engineer holding a postgraduate ' +
        'qualification in geotechnics or more than five years of experience in ' +
        'the geotechnical design of foundations. It is a survey with legal ' +
        'responsibility attached, not a laboratory test.',
    },
    {
      tipo: 'nota',
      texto:
        'A judgement of the practice, said as judgement and not as statistics: ' +
        '**on a sloping property, the decision about where the house sits ' +
        'moves the budget more than the decision about the finishes.** Shifting ' +
        'it twenty metres can save an entire retaining wall, and that decision ' +
        'is taken at concept design stage, with the soil survey already done, ' +
        'or it is never taken at all.',
    },

    { tipo: 'titulo', texto: 'A remote site costs differently' },
    {
      tipo: 'parrafo',
      texto:
        'A site an hour and a half from the city is not run like an urban ' +
        'site, and that has a cost even though it appears under no ' +
        'construction heading.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Item', 'In the city', 'On a remote site'],
      filas: [
        [
          '**Security**',
          'A night shift, or none at all',
          'Round the clock: stored material is the easiest thing on the property to steal',
        ],
        [
          '**Labour**',
          'Gets there under its own steam',
          'Transport, and often lodging and meals as well',
        ],
        [
          '**Storage**',
          'Material is ordered twice a week',
          'It is ordered in large batches: you need somewhere to keep it, and dry',
        ],
        [
          '**Supervision**',
          'Short, frequent visits',
          'Long, widely spaced visits, or somebody resident on site',
        ],
        [
          '**A mistake on site**',
          'Corrected the following day',
          'Costs a journey, and sometimes a week',
        ],
      ],
      nota:
        'Not one of these lines sits inside a rate per square metre, and every ' +
        'one of them is paid. It is the same logic as the forgotten items, ' +
        'made worse by distance.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The full list of what a construction budget leaves out — surveys, ' +
        'designs, permit charges, taxes, connections, bonds, contingencies — ' +
        'is in [the twelve items everyone forgets when ' +
        'budgeting](/blog/doce-partidas-que-se-olvidan-al-presupuestar). In the ' +
        'countryside all of them still apply, and the five in this article are ' +
        'added on top.',
    },

    { tipo: 'titulo', texto: 'What this article is not going to give you' },
    {
      tipo: 'parrafo',
      texto:
        'There are no figures here, and the absence is deliberate. It is worth ' +
        'saying exactly why, item by item, because "there is no data" said in ' +
        'general sounds like an excuse:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Item', 'Why no figure can be published'],
      filas: [
        [
          'Cost per m² of the house',
          'No official or trade source publishes pesos per square metre. DANE publishes indices of variation and says so expressly in its methodological note',
        ],
        [
          'Borehole',
          'It depends on the depth at which there is water on that property, which is learnt by drilling',
        ],
        [
          'Electricity supply connection',
          'It depends on the real distance to the existing network and on whether a transformer is needed',
        ],
        [
          'Earthworks and retaining',
          'It depends on the slope, on the soil profile and on where the house is placed',
        ],
        [
          'Access track',
          'It depends on the length, on the ground and on whether there is a right of way',
        ],
        [
          'Wastewater treatment',
          'It depends on the number of occupants, on how well the soil infiltrates and on what the environmental authority requires at that point',
        ],
      ],
      nota:
        'The last five are not secrets of the trade: they are facts about the ' +
        'property. They are established at concept design stage, and that is ' +
        'exactly the work that stops the budget collapsing afterwards.',
    },

    { tipo: 'titulo', texto: 'How it gets pinned down before buying the plot' },
    {
      tipo: 'parrafo',
      texto:
        'Almost all the overspend on a country house is decided on the day the ' +
        'purchase of the property is signed, not on the day the works are ' +
        'contracted. These six questions are answered beforehand, with a ' +
        'document and not with a word:',
    },
    {
      tipo: 'lista',
      items: [
        '**Where do I get in, and is that access legally created?** If it crosses somebody else’s land, a recorded right of way.',
        '**How many metres away is the existing electricity network?** Measured, not estimated.',
        '**Where is the water going to come from, and does that source have, or could it have, a concession?**',
        '**Where does the waste water go, and is that disposal feasible in this ground?**',
        '**What does the POT say about this property?** The POT is the municipal land-use plan: class of land, category, uses and density. Before the deed.',
        '**Can a mixer truck get in?** It is a logistics question that decides the building system and the programme.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The first four are cost. The fifth is what decides whether the ' +
        'project exists at all: what you may build and how many dwellings a ' +
        'rural property admits is in [what you can build on rural ' +
        'land](/blog/que-puedo-construir-en-suelo-rural), and the full check ' +
        'before signing is in [buying a lot: the twelve-point ' +
        'check](/blog/comprar-lote-verificacion-antes-de-firmar).',
    },
    {
      tipo: 'nota',
      texto:
        'And the decision-level mistakes that cost most money on this kind of ' +
        'project — buying below the Unidad Agrícola Familiar, asking the wrong ' +
        'authority, mistaking a formal ruling on the planning rules for a right ' +
        '— are in [the ten most expensive mistakes when building a country ' +
        'house](/blog/diez-errores-mas-caros-casa-campestre). This article is ' +
        'the cost; that one is the decision.',
    },

    { tipo: 'titulo', texto: 'The short answer' },
    {
      tipo: 'lista',
      items: [
        'The house, per square metre built, does not cost radically differently from one in the city.',
        'What does cost differently is everything else: track, power, water, sanitation, earthworks and haulage.',
        'Those items depend on the property and not on the area, so a rate per square metre shares them out badly by construction.',
        'Two of them — the water and the discharge — are environmental procedures with timescales of their own, not purchases.',
        'And nearly all of them can be pinned down before signing the deed for the plot, which is while they can still be negotiated.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'At Plano Base the budget for a country house does not start from the ' +
        'square metre: it starts from the property. Planning enquiry, access, ' +
        'service connections, water, discharge and soil survey first; concept ' +
        'design next; the figure last. In that order the figure arrives late, ' +
        'and that is why it holds.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The obligations cited are taken from the articles in force. ' +
        'Everything that goes without a figure goes without a figure on ' +
        'purpose: it is information about the property, and this article does ' +
        'not know yours.',
    },
  ],
}
