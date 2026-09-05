import type { TraduccionPost } from '@/lib/types'
import { CORTE_Y_LLENO_EN } from '../diagramas/ladera'

/**
 * Traducción de «Construir en un lote con pendiente».
 *
 * El diagrama va rotulado en inglés desde `CORTE_Y_LLENO_EN`, que vive en el
 * mismo archivo que el español para que el dibujo no pueda divergir mientras
 * divergen los rótulos.
 *
 * Contexto añadido para el lector de fuera: qué es la NSR-10 y de dónde saca su
 * fuerza, qué significa que un suelo sea urbano, suburbano o rural en el
 * derecho colombiano, y qué es un grupo de uso. Ninguna frase del español se
 * pierde.
 *
 * Los nombres de las normas van sin traducir y glosados la primera vez:
 * «NSR-10», «Título H», «Ley 400 de 1997». Las cifras son las mismas cifras:
 * tres sondeos, seis metros, 800 kN, 10 %, 1,50 y 1,05 —con punto decimal en
 * inglés—.
 */
export const traduccion: TraduccionPost = {
  slug: 'construir-en-lote-con-pendiente',
  titulo: 'Building on a sloping site: what actually makes it expensive',
  traducido: '2026-09-05',
  resumen:
    'A sloping lot is cheap to buy and expensive to build on, and what makes ' +
    'it expensive is not the architecture: it is the ground. Soil study, cut ' +
    'and fill, retaining walls, drainage and the items never in the budget.',
  metaDescripcion:
    'Building a house on a sloping site in Colombia: soil study, cut and fill, ' +
    'retaining walls, drainage, and what NSR-10 requires on a hillside.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The sloping lot is nearly always the cheapest one on the street, and ' +
        'nearly always has the best view. Both things are true and the two are ' +
        'connected: it sells cheap because building there costs more, and the ' +
        'buyer usually finds out how much more on the day the construction ' +
        'budget arrives.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What makes a hillside house expensive is not the architecture. **It is ' +
        'the ground**, and it comes down to three items that were not in the ' +
        'figure you were shown when you bought the lot: the geotechnical study, ' +
        'the stabilisation works, and the retaining structures with their ' +
        'drainage. None of the three is optional, and all three are named ' +
        'outright in the building code.',
    },
    {
      tipo: 'nota',
      texto:
        'The rule that orders the subject: **NSR-10, the Colombian ' +
        'seismic-resistant building code, does not say "steep hillside", it ' +
        'says "on, at the edge of, or at the foot of"**. Clause H.5.2.1 ' +
        'requires a stability analysis, with a geologist advising, for any ' +
        'building placed wholly or partly on a hillside **or standing at the ' +
        'edge or at the foot of one**. The house below, the one whose own lot ' +
        'is flat, is covered too.',
    },

    { tipo: 'titulo', texto: 'The soil study, and exactly how much of it' },
    {
      tipo: 'parrafo',
      texto:
        '"Get a soil study" is the most repeated and least useful piece of ' +
        'advice, because nobody says how big a study. Título H of NSR-10, the ' +
        'part of the code that deals with geotechnical studies, does say, and ' +
        'it says it by size of project.',
    },
    {
      tipo: 'cita',
      texto:
        'Definitive geotechnical studies are compulsory for all urban and ' +
        'suburban buildings of any use group, and for buildings on land ' +
        'unsuitable for urban use in use groups II, III and IV as defined in ' +
        'Título A of this Code.',
      fuente: 'NSR-10, Título H, clause H.1.1.2',
    },
    {
      tipo: 'parrafo',
      texto:
        'I quote the whole sentence deliberately, because the second half falls ' +
        'off every time somebody summarises it. On urban and suburban land — ' +
        'two of the three classes Colombian planning law uses, the third being ' +
        'rural — the study is compulsory for any use, houses included. Beyond ' +
        'that, the duty stated in this clause reaches use groups II, III and IV ' +
        '— buildings of special occupancy, community service and essential ' +
        'facilities — and a single-family house is group I. **That does not ' +
        'make the study dispensable**: H.5.2.1 demands it again the moment ' +
        'there is a slope, and no serious structural designer sizes a ' +
        'foundation without one.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The size of the study follows from classifying the project. The code ' +
        'calls the building a "construction unit" and sorts it into four ' +
        'categories **by the total number of levels and the maximum service ' +
        'loads on columns**, always taking the less favourable of the two.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Category', 'Levels', 'Maximum load on columns', 'Minimum boreholes', 'Minimum depth'],
      filas: [
        ['**Low**', 'Up to 3', 'Below 800 kN', '3', '6 m'],
        ['Medium', 'From 4 to 10', 'From 801 to 4,000 kN', '4', '15 m'],
        ['High', 'From 11 to 20', 'From 4,001 to 8,000 kN', '4', '25 m'],
        ['Special', 'More than 20', 'Above 8,000 kN', '5', '30 m'],
      ],
      nota:
        'Tables H.3.1-1 and H.3.2-1 of NSR-10. Counting levels includes every ' +
        'floor, basements, terraces and plant levels. In any event the minimum ' +
        'for a study is three boreholes, and at least half of them must fall ' +
        'inside the footprint of the building on the ground.',
    },
    {
      tipo: 'parrafo',
      texto:
        'A two-storey house is **low category**: three boreholes and six ' +
        'metres. That is the floor, not the ceiling. The same title makes clear ' +
        'that meeting the minimum does not release the engineer from drilling ' +
        'whatever additional boreholes professional judgement calls for, and ' +
        'that if they are not drilled the recommendation must be recorded in ' +
        'writing in the report.',
    },
    {
      tipo: 'nota',
      texto:
        'Who may sign it is not open either. The study must be directed and ' +
        'endorsed by qualified civil engineers holding a current professional ' +
        'licence, and those professionals must show **more than five years of ' +
        'experience in geotechnical foundation design**, counted from the ' +
        'licence, or postgraduate study in geotechnics. It is a checkable ' +
        'requirement and almost nobody checks it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is a threshold worth holding in mind when buying, because it ' +
        'decides how complex the study becomes: **if the slope of the ground ' +
        'exceeds 10 per cent**, the code treats topographic effects as ' +
        'relevant and calls for dynamic response analysis using two- or ' +
        'three-dimensional numerical models. Ten per cent is a slope you can ' +
        'barely see by eye.',
    },

    { tipo: 'titulo', texto: 'Cut and fill: why the fill is the enemy' },
    {
      tipo: 'parrafo',
      texto:
        'Putting a house on a hillside means making a platform, and a platform ' +
        'is made by taking earth off one side and putting it on the other. The ' +
        'excavated side is the **cut**; the built-up side is the **fill**. Once ' +
        'the work is finished and the slab is poured, the two halves look ' +
        'exactly alike. They do not behave alike.',
    },
    {
      tipo: 'diagrama',
      svg: CORTE_Y_LLENO_EN,
      titulo: 'One platform, two different grounds',
      pie:
        'Schematic section, not to scale. The dashed line under the fill is the ' +
        'original ground, which is still there after the work has covered it ' +
        'over. Studio drawing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The reason fits in one sentence, and it sits in the foundations ' +
        'chapter of the same title.',
    },
    {
      tipo: 'cita',
      texto:
        'Under no circumstances may it bear on topsoil, loose fill, or ' +
        'degradable or unstable materials liable to erosion, scour, ' +
        'liquefaction or transport by groundwater. The foundation must be ' +
        'placed on materials with adequate mechanical properties in terms of ' +
        'strength and stiffness, or on engineered fills, free of degradable ' +
        'materials and properly compacted.',
      fuente: 'NSR-10, Título H, clause H.4.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it through, because the two halves say different things. **Fill ' +
        'is not forbidden: loose fill is.** An engineered fill — selected ' +
        'material, free of organic matter, placed in layers and compacted under ' +
        'control — is a legitimate bearing stratum. The heap of earth that came ' +
        'out of the cut, pushed around with the excavator and levelled by eye, ' +
        'is not. And to the naked eye they are identical.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The code does not leave it to the eye. For cohesive fills it requires ' +
        'layer compaction to be controlled with the standard Proctor test, ' +
        'watching layer thickness, water content and the rate of placement in ' +
        'height; for non-cohesive ones, control rests on relative density. **A ' +
        'fill without compaction testing is not a fill: it is earth that has ' +
        'been put there.**',
    },
    {
      tipo: 'nota',
      texto:
        'A detail that changes the cost of the study and that hardly anyone ' +
        'anticipates: **where fills are built, borehole depth is counted from ' +
        'the original ground level**, not from the finished floor. In ' +
        'excavations it is counted from the lowest level of excavation. On a ' +
        'hillside that means longer drilling than the same house on flat ' +
        'ground.',
    },

    { tipo: 'titulo', texto: 'The retaining wall, and what actually fails' },
    {
      tipo: 'parrafo',
      texto:
        'A retaining wall holds earth back, and the earth it holds can beat it ' +
        'in six different ways. The code lists them as ultimate limit states: ' +
        'structural rupture, deformation, overturning, bearing capacity ' +
        'failure, **loss of support through erosion of the ground**, horizontal ' +
        'sliding of the base and, where relevant, general instability of the ' +
        'slope the wall is founded on.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Of those six, the one you see on site almost always starts with water. ' +
        'A wall is designed for earth pressure; if water builds up behind it, ' +
        'water pressure has to be added, and that pressure rises fast. Which is ' +
        'why the code uses a word here that it hardly uses anywhere else.',
    },
    {
      tipo: 'cita',
      texto:
        'Pressures due to groundwater must be minimised as far as possible ' +
        'through suitable drainage and depressurisation works. […] Retaining ' +
        'walls must always be provided with a system of filters and drains ' +
        'placed behind the wall.',
      fuente: 'NSR-10, Título H, clause H.6.5',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Always.** And the same clause adds the warning that turns drainage ' +
        'into a piece of design rather than a pipe: the filters must be ' +
        'designed so as not to carry fines out of the fill and so as to conduct ' +
        'the water without generating significant pressures, and **even with a ' +
        'drainage system, the effect of seepage forces on the pressure can be ' +
        'significant**.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What fails', 'Why', 'What prevents it'],
      filas: [
        [
          '**The wall overturns or slides**',
          'It was designed for dry earth pressure and water built up behind it',
          'A filter and drain behind the wall, with an outlet that is checked and maintained',
        ],
        [
          '**The drain clogs**',
          'The filter does not hold back the fines in the fill and silts up within two rainy seasons',
          'A filter designed by grading, not a loose stone tipped behind the wall',
        ],
        [
          '**The wall loses its support**',
          'Surface water erodes the toe and undermines the foundation',
          'Runoff control above the wall and protection of the toe',
        ],
        [
          '**The whole slope moves**',
          'The wall is fine and the ground it stands on is not',
          'A global stability analysis, which is a separate calculation from the wall',
        ],
        [
          '**The house cracks, not the wall**',
          'The structure was founded partly on cut and partly on fill',
          'Foundations taken down to firm ground on both halves',
        ],
      ],
      nota:
        'The causes come from the limit states of H.6.2.1 and the drainage ' +
        'requirements of H.6.5. The right-hand column is professional ' +
        'judgement: the code sets out what must be checked, not how each case ' +
        'is solved.',
    },

    { tipo: 'titulo', texto: 'How much margin the code demands' },
    {
      tipo: 'parrafo',
      texto:
        'There is a question an owner can ask that separates a serious report ' +
        'from a box-ticking one: **what factor of safety did the slope come out ' +
        'with**. The code sets the minimums and here they are.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Condition', 'Design', 'Construction'],
      filas: [
        ['Dead load plus normal live load', '1.50', '1.25'],
        ['Slopes, static condition with normal groundwater', '1.50', '1.25'],
        ['Slopes, pseudo-static condition with the design seismic coefficient', '1.05', '1.00'],
      ],
      nota:
        'Minimum direct basic safety factors, Table H.2.4-1 of NSR-10. In no ' +
        'case may the minimum factor be below 1.00.',
    },
    {
      tipo: 'parrafo',
      texto:
        'A slope with a factor of 1.05 under seismic conditions is not "bad": ' +
        'it is at the minimum the code allows, which is a different thing from ' +
        'having room to spare. Knowing where on that band your site came out is ' +
        'information you paid for and are entitled to have explained.',
    },

    { tipo: 'titulo', texto: 'Access, and the water coming down' },
    {
      tipo: 'parrafo',
      texto:
        'Two matters that weigh more on a hillside than on any other lot and ' +
        'that the seismic code does not settle.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The first is **vehicle access**. A long steep ramp is a work in its ' +
        'own right: walls, drainage, paving with a non-slip finish and, at ' +
        'times, more square metres of structure than the house itself. And it ' +
        'is the first thing to resolve, because without access not even the ' +
        'mixer gets in.',
    },
    {
      tipo: 'nota',
      texto:
        'A statement of honesty here: **there is no national maximum gradient ' +
        'for vehicle access**, which is why I give no figure. It is not a ' +
        'matter for the seismic-resistant building code; each municipal land ' +
        'use plan and its implementing rules set it, and it varies from town to ' +
        'town. The right way to ask is in writing, to the municipal planning ' +
        'office, naming the property.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The second is **runoff**. On a slope, rainwater does not stay: it goes ' +
        'down, and it goes down wherever you let it. The platform you built is ' +
        'a new impermeable surface that concentrates flow, and if that flow ' +
        'ends up discharging onto the fill batter or onto the neighbour below, ' +
        'the problem is yours twice over, technically and legally. A cutoff ' +
        'ditch above the cut, collection on the platform and a defined ' +
        'discharge point are budget items, not details.',
    },
    {
      tipo: 'nota',
      texto:
        'A second statement of honesty, the one this blog makes every time it ' +
        'applies: **I was unable to read the technical regulation for the water ' +
        'sector.** The file the ministry publishes is scanned pages with no ' +
        'text layer, so I quote from it neither a number nor a parameter for ' +
        'stormwater management. Nor do I cite any ICONTEC technical standard: ' +
        'its catalogue is not publicly searchable.',
    },

    { tipo: 'titulo', texto: 'The items that are never in the first estimate' },
    {
      tipo: 'lista',
      items: [
        '**The definitive geotechnical study**, with its number of boreholes and their depth counted from the original ground rather than from the finished floor.',
        '**The slope stability analysis and the design of the stabilisation works**, which H.5.2.1 requires and which is a separate job from the foundation study.',
        '**The retaining walls with their filter and drain**, budgeted by square metre of wall and not by linear metre of facade.',
        '**Earthworks and the removal of surplus material**, which on a slope almost never balances out within the lot itself.',
        '**The vehicle access in full**, including its retaining structures and its drainage.',
        '**Runoff management**, with a cutoff ditch and a defined discharge point.',
        '**The geotechnical engineer on site**, which the code requires for the medium, high and special categories, and which on a hillside is worth hiring even when the house is low category.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'None of these seven appears in the cost per square metre that ' +
        'circulates, because that figure belongs to the house and these belong ' +
        'to the ground. If you are putting the budget together, the ' +
        'conversation continues in [what a country house ' +
        'costs](/blog/cuanto-cuesta-una-casa-campestre). If the land is rural, ' +
        'the permit runs on its own calendar and that is in [why a rural ' +
        'building permit takes ' +
        'twice as long](/blog/licencia-de-construccion-en-suelo-rural). And the ' +
        'water coming in, as opposed to the water coming down, is a whole other ' +
        'conversation: [what permit it ' +
        'needs](/blog/agua-en-el-campo-que-permiso-necesita).',
    },
    {
      tipo: 'parrafo',
      texto:
        'A hillside handled well gives you the best house on the street. ' +
        'Handled badly it gives you the one that cracks in its third rainy ' +
        'season. The difference between the two is decided before the plan is ' +
        'drawn, and it costs less than repairing it does.',
    },
  ],
  fuentes: [
    {
      url: 'https://asosismica.org.co/decretos-modificatorios-nsr-10/',
      titulo: 'Amending decrees to NSR-10',
    },
  ],
}
