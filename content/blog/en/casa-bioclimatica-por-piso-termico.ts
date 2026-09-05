import type { TraduccionPost } from '@/lib/types'
import { CUATRO_CLIMAS_EN } from '../diagramas/clima'

/**
 * Traducción de «La casa bioclimática, clima por clima».
 *
 * El diagrama va rotulado en inglés desde `CUATRO_CLIMAS_EN`, que vive en el
 * mismo archivo que el español para que el dibujo no pueda divergir mientras
 * divergen los rótulos.
 *
 * Contexto añadido para el lector de fuera, que en este tema necesita tres
 * cosas que un colombiano da por sabidas: que el país cabe en cuatro climas
 * simultáneos y no en estaciones, qué significa VIS —vivienda de interés
 * social— y por qué una resolución de un ministerio obliga a una casa
 * particular. Ninguna frase del español se pierde.
 *
 * Los nombres de las normas van sin traducir y glosados la primera vez:
 * «Resolución 0549 de 2015», «Decreto 1077 de 2015», IDEAM. Las cifras son las
 * mismas cifras: 25 %, 45 %, 40 %, 2.640 m, 975 m, 1.001 m. Solo cambia el
 * separador decimal, que en inglés es punto.
 */
export const traduccion: TraduccionPost = {
  slug: 'casa-bioclimatica-por-piso-termico',
  titulo: 'The bioclimatic house in Colombia, climate by climate',
  traducido: '2026-09-05',
  resumen:
    'Colombia does not have one climate but four, and the state has already ' +
    'classified them and attached mandatory savings targets. What changes in ' +
    'the house from one to the next, and why humidity rules the coast.',
  metaDescripcion:
    'Bioclimatic design in Colombia: the four climates of Resolución 0549 de ' +
    '2015, what it requires of a house, and what changes in orientation, ' +
    'eaves, walls and roof.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The same house that works in Villa de Leyva is a mistake in ' +
        'Barranquilla. Not slightly worse: a mistake, with the air ' +
        'conditioning running twelve hours a day to correct what the ' +
        'architecture got wrong. And the other way round: the open, ventilated ' +
        'Caribbean house, built on a highland plateau, is a cold house nobody ' +
        'uses after dark.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is not a matter of taste. **Colombia does not have one climate: ' +
        'it has several**, all at the same time, since altitude rather than ' +
        'season sets the temperature. The state has already classified them, ' +
        'mapped them, listed them municipality by municipality and attached ' +
        'mandatory savings targets. Almost nobody says so, and fewer people ' +
        'still know that a new single-family house falls inside the rule.',
    },
    {
      tipo: 'nota',
      texto:
        'The rule that orders the whole subject, worth fixing before we go on: ' +
        '**the official classification is not a set of altitude bands.** It ' +
        'does not cut by height above sea level. It cuts by temperature **and ' +
        'relative humidity**, which is why two towns at the same altitude can ' +
        'end up in different classes.',
    },

    { tipo: 'titulo', texto: 'The country has four climates, not altitude bands' },
    {
      tipo: 'parrafo',
      texto:
        'Anexo 2 of Resolución 0549 de 2015, issued by the housing ministry, ' +
        'is a national map of climate classified by temperature and relative ' +
        'humidity, drawn by IDEAM, the state meteorological institute, with a ' +
        'list of municipalities attached. There are four classes: **cold, ' +
        'temperate, hot and dry, and hot and humid**. Every municipality in the ' +
        'country appears there with its altitude and its class.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Municipality', 'Altitude', 'Official class'],
      filas: [
        ['Bogotá', '2,640 m', 'Cold'],
        ['Villa de Leyva', '2,146 m', 'Cold'],
        ['Rionegro, Antioquia', '2,109 m', 'Cold'],
        ['Medellín', '1,405 m', 'Temperate'],
        ['Palmira', '1,001 m', 'Temperate'],
        ['Anapoima', '700 m', 'Temperate'],
        ['Jamundí', '975 m', 'Hot and dry'],
        ['Cali', '926 m', 'Hot and dry'],
        ['Girardot', '275 m', 'Hot and dry'],
        ['Santa Marta', '18 m', 'Hot and dry'],
        ['Barranquilla', '24 m', 'Hot and humid'],
        ['Cartagena', '1 m', 'Hot and humid'],
      ],
      nota:
        'Altitudes and classes taken from the list in Anexo 2 of Resolución ' +
        '0549 de 2015. This table is a selection; the official list covers the ' +
        'whole country.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it twice, because the whole argument is in there. **Cartagena and ' +
        'Santa Marta both sit on the sea and fall in different classes.** ' +
        '**Jamundí, at 975 metres, is hot and dry; Palmira, at 1,001 metres, is ' +
        'temperate.** Twenty-six metres apart and a different design regime. ' +
        'Altitude on its own decides nothing.',
    },
    {
      tipo: 'nota',
      texto:
        'A statement of honesty, of the kind this blog makes whenever it ' +
        'applies: **the annex publishes the map and the list, not the numeric ' +
        'thresholds** of temperature and humidity that separate one class from ' +
        'another. That is why none appear here. Nor do I quote average relative ' +
        'humidity by city: the IDEAM series were not reachable on the paths I ' +
        'tried, and a figure without a source is worth less than no figure.',
    },

    { tipo: 'titulo', texto: 'What the rule requires, and of whom' },
    {
      tipo: 'parrafo',
      texto:
        'Resolución 0549, dated 10 July 2015, implements the sustainable ' +
        'construction chapter of Decreto 1077 de 2015, the consolidated decree ' +
        'for the housing sector, and adopts a national guide on water and ' +
        'energy saving in buildings. Its first article sets the object: ' +
        '**minimum water and energy savings in new buildings**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The useful question is who it applies to, and the answer surprises a ' +
        'lot of people. The second article carries a table of building type ' +
        'against scale, and this is the row almost nobody quotes.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Building type', 'Scale at which it applies'],
      filas: [
        ['**Housing other than social housing**', '**All of it**'],
        ['Social and priority housing, known as VIS and VIP', 'All of it, with indicative targets'],
        ['Shopping centres', 'Built area above 6,000 m², parking excluded'],
        ['Offices', 'Area above 1,500 m², parking excluded'],
        ['Hotels', 'More than 50 rooms'],
        ['Schools and universities', 'More than 1,500 students'],
        ['Hospitals and clinics', 'Built area of 5,000 m² or more'],
      ],
      nota:
        'Resolución 0549 de 2015, second article, item 2. The scale for housing ' +
        'that is not social housing reads "all": there is no area threshold and ' +
        'no minimum number of units below which a house falls outside.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In other words: **your house is inside.** With one condition that does ' +
        'narrow it, set out in the third article: the rules apply to buildings ' +
        'put up under a building permit **in the obra nueva mode**, meaning new ' +
        'construction on undeveloped ground, applied for after the resolution ' +
        'took effect. A remodelling does not drag the duty along with it; the ' +
        'eighth article lets an existing building meet the measures ' +
        'voluntarily.',
    },
    {
      tipo: 'dato',
      valor: '45 per cent',
      etiqueta:
        'Minimum energy saving required of a house that is not social housing ' +
        'in the hot and humid climate. In the other three climates it is 25 per ' +
        'cent.',
      fuente: 'Resolución 0549 de 2015, fifth article, Tabla No. 2',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Housing other than VIS', 'Cold', 'Temperate', 'Hot and dry', 'Hot and humid'],
      filas: [
        ['Minimum energy saving', '25 %', '25 %', '25 %', '45 %'],
        ['Minimum water saving', '25 %', '25 %', '20 %', '20 %'],
        ['Energy baseline, kWh per m² a year', '46.5', '48.3', '36.9', '50.2'],
        ['Water baseline, litres per person a day', '145.4', '145.3', '189.8', '174.9'],
      ],
      nota:
        'The first two rows come from Tabla No. 2 of the fifth article of the ' +
        'resolution; the last two come from tables 1 and 2 of Anexo 1, which ' +
        'set the reference consumption the saving is measured against. Note ' +
        'that the highest reference water use is not on the coast but in the ' +
        'hot and dry climate.',
    },
    {
      tipo: 'nota',
      texto:
        'Two points that head off misunderstandings. **The targets for social ' +
        'and priority housing are indicative and optional**, as the fifth ' +
        'article itself says; those for housing that is not social housing are ' +
        'not. And the fourth article makes clear that these measures **are ' +
        'technical in nature and do not constitute planning rules**: they do ' +
        'not change what you may build, they change how you have to build it.',
    },

    { tipo: 'titulo', texto: 'Passive measures: the part that is architecture' },
    {
      tipo: 'parrafo',
      texto:
        'The resolution splits the measures in two, and the boundary falls ' +
        'exactly where the architect stops and the installer begins. Active ' +
        'measures are equipment: air conditioning, boilers, mechanical ' +
        'ventilation, electric lighting. Passive measures are the house itself.',
    },
    {
      tipo: 'cita',
      texto:
        'Those that are built into the architectural design of the building and ' +
        'seek to make use of the environmental conditions of the setting […] ' +
        'Passive strategies take into account climate, location, landscape, ' +
        'orientation, form, solar protection, choice of materials, thermal ' +
        'mass, insulation, interior design and the placing of openings so as to ' +
        'manage solar access, daylight and ventilation.',
      fuente: 'Resolución 0549 de 2015, second article, item 5',
    },
    {
      tipo: 'parrafo',
      texto:
        'That list is, word for word, the working programme of a properly done ' +
        'schematic design. And it carries a practical consequence hardly anyone ' +
        'uses: **if the saving is achieved through passive measures, the ' +
        'certificate is the designer signing the architectural drawings**, ' +
        'which under the seventh article amounts to a sworn certification. No ' +
        'extra procedure, no audit, no certifier to pay.',
    },
    {
      tipo: 'nota',
      texto:
        'If the permit application form says nothing, **active measures are ' +
        'taken to be the choice**. In other words: silence pushes you towards ' +
        'the equipment route, which is the one you pay for every month. Saying ' +
        'so in writing costs nothing.',
    },

    { tipo: 'titulo', texto: 'The design objectives, climate by climate' },
    {
      tipo: 'parrafo',
      texto:
        'Anexo 1 of the resolution carries a short table worth more than thirty ' +
        'pages of theory: what the design is trying to achieve in each climate. ' +
        'Here it is, summarised and unembellished.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Climate', 'What the design is after'],
      filas: [
        [
          '**Cold**',
          'Maximise solar heat gain, reduce the impact of the prevailing wind, and shorten the volumes facing east and west so as to increase the radiation received',
        ],
        [
          '**Temperate**',
          'Maximise sun in the main living areas, maximise shade over bedrooms and kitchen, and control the wind so that air still circulates during the hot hours',
        ],
        [
          '**Hot and dry**',
          'Turn the building into a good heat dissipator, and maximise shade',
        ],
        [
          '**Hot and humid**',
          'Maximise shade by shrinking the western facade, increase airflow through cross and stack ventilation, and place the rooms according to the wind',
        ],
      ],
      nota:
        'Anexo 1 of Resolución 0549 de 2015, item 2.1.3, on design objectives ' +
        'by climate.',
    },
    {
      tipo: 'diagrama',
      svg: CUATRO_CLIMAS_EN,
      titulo: 'The same house, drawn four times',
      pie:
        'Schematic sections, not to scale. The proportions of the eaves and the ' +
        'wall thickness are exaggerated so that they read. Studio drawing.',
    },

    { tipo: 'titulo', texto: 'What changes, line by line' },
    {
      tipo: 'parrafo',
      texto:
        '**Orientation.** In Colombia the east and west facades take most of ' +
        'the radiation; north and south take far less, because the sun passes ' +
        'close to overhead. Anexo 1 states it both ways: if you want warmth, ' +
        'you stretch the house along an east-west face; if you want coolness, ' +
        'the long facades are north and south. **And in hot and temperate ' +
        'climates a western orientation is avoided where possible**, because of ' +
        'afternoon overheating.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Cross ventilation.** This is not the same as opening windows: it ' +
        'means the air has a way in and a way out, on opposite faces and at ' +
        'different heights. It appears as a recommended measure in all four ' +
        'climates for housing that is not social housing, but in the hot and ' +
        'humid climate it stops being an improvement and becomes the main ' +
        'strategy, because comfort there comes from moving air rather than from ' +
        'lowering the temperature.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Thermal mass.** A heavy wall takes hours to give back the heat it ' +
        'took in. That is a virtue where the night is cool and the day is hot ' +
        '— the hot and dry climate, and much of the temperate one — because the ' +
        'wall stores the coolness of the small hours and returns it at midday. ' +
        '**In the hot and humid climate that same mass works against you**: if ' +
        'the night never cools, the wall never discharges, and at ten at night ' +
        'it is still radiating the heat of three in the afternoon. There the ' +
        'answer is the opposite: a light, ventilated envelope, and shade.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Eaves and solar protection.** The annex separates three families: ' +
        'horizontal elements such as eaves, balconies and louvres; vertical ' +
        'elements such as fins; and the combination of the two. And it makes an ' +
        'observation that strikes me as the most useful in the whole document: ' +
        '**horizontal elements are very effective because of how high the sun ' +
        'rides at this latitude**, and external louvres are preferable to ' +
        'internal ones, since anything inside offers only partial protection: ' +
        'the radiation is already in.',
    },
    {
      tipo: 'nota',
      texto:
        'The one hard passive-design figure in the document: **the ratio of ' +
        'window area to gross external wall area must not exceed 40 per cent on ' +
        'average**, measured facade by facade and counting frames and mullions. ' +
        'Go past that and you have to compensate with shading or with ' +
        'solar-control glass.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**The roof.** It is the surface that takes the most radiation in this ' +
        'country, and the one that gets solved worst. In a hot climate what ' +
        'does the work is less the material than the ventilated cavity beneath ' +
        'it and the shade the eaves cast on the wall. In a cold climate the ' +
        'problem is the reverse, and it is called night-time heat loss. ' +
        'Comparing clay tile, insulated sheet, concrete slab and green roof ' +
        'deserves an article of its own and I am not disposing of it in a ' +
        'paragraph.',
    },

    { tipo: 'titulo', texto: 'Humidity, which rules the coast more than heat does' },
    {
      tipo: 'parrafo',
      texto:
        'A thermometer does not explain the coast. Barranquilla and Santa Marta ' +
        'both sit at sea level, less than a hundred kilometres apart, and the ' +
        'official classification puts them in different classes. The variable ' +
        'that separates them is relative humidity, and the reason is ' +
        'physiological before it is architectural: **when the air is very ' +
        'humid, sweat does not evaporate**, and the body loses its main way of ' +
        'cooling itself.',
    },
    {
      tipo: 'parrafo',
      texto:
        'From that follows the design consequence. In a hot dry climate you can ' +
        'bring the sensation of heat down with mass, shade and water. **In a ' +
        'hot humid one that is not enough, which is why the rule demands almost ' +
        'twice the energy saving of a house there than in the other three ' +
        'climates**: it knows that a badly designed house in that climate ends ' +
        'up being fixed with equipment.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The architectural answer is the one the houses of the Caribbean and ' +
        'the Pacific coast have been giving for two hundred years, long before ' +
        'any resolution existed: a floor lifted clear of the ground, wide ' +
        'eaves, generous interior height, a ridge that lets hot air out, and a ' +
        'single-room-deep plan so that the air crosses without obstruction.',
    },
    {
      tipo: 'nota',
      texto:
        'An honest limit to this article. **Condensation is not regulated in ' +
        'Colombia.** The resolution says nothing about interstitial ' +
        'condensation or vapour barriers, neither in its articles nor in its ' +
        'technical annex. Whatever is done about it is professional judgement, ' +
        'which is why it is worth asking for it in the contract rather than ' +
        'assuming it is included. Nor do I cite any ICONTEC technical standard ' +
        'here: its catalogue is not publicly searchable and I could not read ' +
        'the text of a single one.',
    },

    { tipo: 'titulo', texto: 'How this reaches a real project' },
    {
      tipo: 'lista',
      items: [
        '**Look your municipality up in the Anexo 2 list before you draw anything.** The climate class decides the target you will be held to and the direction the design has to work in. It takes two minutes.',
        '**If the site does not match its class, say so.** Paragraph 2 of the sixth article lets the builder state on the permit form that the site sits in a climate zone other than the one assigned, and that requires no separate procedure.',
        '**Decide it at schematic design, not at finishes.** Orientation, form, eaves and the placing of openings are first-week decisions. After that all you have left is equipment.',
        '**Declare in writing that you are going with passive measures.** If you do not say so, active measures are assumed, and that commits you to a consumption you pay for every month.',
        '**Ask that the architectural design answer for the target.** The signature on the drawings is a sworn certification: your architect is asserting something checkable, and you are entitled to have it explained.',
        '**Do not buy the word bioclimatic without a section drawing.** If nobody has drawn you a section with the eaves, the three-in-the-afternoon sun and the way the air leaves, there is no bioclimatic design: there is an adjective.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'None of this makes a house more expensive on its own. A properly sized ' +
        'eave costs what an eave costs; putting it on the right facade is free. ' +
        'What does cost money is the other thing: the house that needs ' +
        'equipment to be habitable. If you are at the stage of setting a ' +
        'budget, the conversation continues in [what a country house ' +
        'costs](/blog/cuanto-cuesta-una-casa-campestre) and in [what it costs to ' +
        'build per square ' +
        'metre](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
  ],
  fuentes: [
    {
      url: 'https://www.minvivienda.gov.co/normativa/resolucion-0549-2015',
      titulo: 'Official page for Resolución 0549 de 2015',
    },
  ],
}
