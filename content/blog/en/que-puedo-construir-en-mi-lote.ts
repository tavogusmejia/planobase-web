import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Qué puedo construir en mi lote».
 *
 * Dos términos que el corpus no tenía resueltos y que aquí quedan fijados,
 * porque la pieza entera gira sobre ellos: **índice de ocupación → site
 * coverage ratio** e **índice de construcción → plot ratio**. Los dos se
 * glosan con el nombre español en la primera mención y en la cita legal, que
 * es donde el lector va a reconocerlos si abre el decreto. Lo demás viene del
 * corpus: `clase de suelo` → class of land, `ronda hídrica` → watercourse
 * buffer, `certificado de tradición` conservado y glosado, `Unidad Agrícola
 * Familiar` conservada, `bien de interés cultural` → listed cultural property,
 * `paramento` → building line, `antejardín` → front garden, `corporación
 * autónoma regional` → regional environmental authority.
 *
 * Las cuatro palabras que ninguna norma nacional define —aislamiento,
 * antejardín, retiro y altura máxima— se conservan en español dentro de la
 * lista y se glosan al lado: traducirlas sin más borraría justo lo que el
 * apartado demuestra, que son vocabulario municipal y no nacional.
 *
 * Las dos correcciones del original se traducen enteras y sin suavizar: la
 * afirmación de los 500 m² **se apoya en artículos derogados**, y **la
 * corporación autónoma regional no fija la unidad agrícola familiar**. Y no se
 * publican los umbrales de índice de la tabla de cesiones de Bogotá, porque el
 * español tampoco los publica.
 *
 * Los separadores cambian, y es lo que más fácil se cuela dentro de la tabla
 * del ejemplo: «0,60» es «0.60», «1,50» es «1.50» y «2,5» es «2.5». El espacio
 * del `%` desaparece.
 */
export const traduccion: TraduccionPost = {
  slug: 'que-puedo-construir-en-mi-lote',
  titulo: 'What can I build on my plot',
  traducido: '2026-09-05',
  resumen:
    'Site coverage ratio, plot ratio, setbacks and land dedications, ' +
    'explained without jargon. And the rule almost nobody states: national ' +
    'law gives you the vocabulary, but the numbers come from the POT of your ' +
    'municipality.',
  metaDescripcion:
    'Site coverage ratio and plot ratio explained with a worked example, and ' +
    'where to check what the rules allow on your plot.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'It is the first question anybody who has bought a plot asks, and ' +
        'the one the internet answers worst. You will find tables of ratios, ' +
        'percentages and heights presented as though they were national. ' +
        'They are not.',
    },
    {
      tipo: 'nota',
      texto:
        'The rule that orders the whole subject, and one worth keeping in ' +
        'mind while reading anything about it — this article included: ' +
        '**national law defines the vocabulary; the POT of your ' +
        'municipality, its land-use plan, puts in the numbers.** No national ' +
        'law says how much may be built on a particular plot. Each land-use ' +
        'plan fixes that, sector by sector and by planning treatment.',
    },
    {
      tipo: 'parrafo',
      texto:
        'So what follows is not going to tell you how much you can build. It ' +
        'is going to teach you to read it, which is more useful and works in ' +
        'any city.',
    },

    {
      tipo: 'titulo',
      texto: 'The two ratios, and how they differ',
    },
    {
      tipo: 'parrafo',
      texto:
        'Everything turns on two numbers. They are defined in national ' +
        'rules, in these words:',
    },
    {
      tipo: 'cita',
      texto:
        'Índice de ocupación: the proportion of the ground area that may be ' +
        'occupied by building at ground floor under roof […] Índice de ' +
        'construcción: the maximum number of times the surface of a site ' +
        'may, by definition of the rules, be turned into built area.',
      fuente: 'Decreto 1077 de 2015, article 2.2.1.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'In plain terms: **the site coverage ratio measures the shadow the ' +
        'building casts on the ground. The plot ratio measures the square ' +
        'metres of every storey added together.** One is surface, the other ' +
        'is accountable volume.',
    },
    { tipo: 'titulo', texto: 'A worked example' },
    {
      tipo: 'parrafo',
      texto:
        'A plot of **300 m²**, with a site coverage ratio of **0.60** and a ' +
        'plot ratio of **1.50**:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Calculation', 'Working', 'Result'],
      filas: [
        ['Maximum footprint at ground floor', '300 × 0.60', '**180 m²**'],
        ['Ground left free', '300 − 180', '120 m², 40% of the plot'],
        ['Total buildable area', '300 × 1.50', '**450 m²** across all storeys'],
        ['Storeys at full footprint', '450 ÷ 180', '2.5'],
      ],
      nota:
        '**The ratios in this example are illustrative.** They change by ' +
        'sector and by planning treatment. Never take them from an article: ' +
        'take them from the POT or from the planning ruling on your own ' +
        'plot.',
    },
    {
      tipo: 'parrafo',
      texto:
        'With those numbers you can do two full storeys of 180 m² plus a ' +
        'third of 90, or three storeys of 150 each if you would rather ' +
        'occupy less ground and leave more courtyard. The rules give you a ' +
        'ceiling; the shape is your decision.',
    },
    {
      tipo: 'nota',
      texto:
        'The mental trick that works on any plot: **divide the plot ratio by ' +
        'the site coverage ratio.** It gives you the number of storeys ' +
        'equivalent to a full footprint. If both are 0.60, only one storey ' +
        'fits. If coverage is 0.30 and the plot ratio 1.50, it takes five ' +
        'storeys to use up the buildable area.',
    },
    {
      tipo: 'titulo',
      texto: 'The trap: which area is the ratio applied to?',
    },
    {
      tipo: 'parrafo',
      texto:
        'The national definition divides by "the total area of the ' +
        'property", but several land-use plans apply the ratio to the **net ' +
        'developable area** or to the **usable area**, both of which are ' +
        'smaller than the plot you bought.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The difference is a chain of subtractions: from the **gross area** ' +
        'you take off what goes to main roads, primary networks and ' +
        'protected areas, and what is left is the **net developable area**; ' +
        'from that you take off the land dedicated for local roads, public ' +
        'space and community facilities, and what is left is the **usable ' +
        'area**.',
    },
    {
      tipo: 'nota',
      texto:
        'You buy gross area. You build on usable area. Before multiplying ' +
        'anything, find out **which area** the ratio is applied to in your ' +
        'city. It is the question in this article that saves the most money.',
    },

    {
      tipo: 'titulo',
      texto: 'What counts and what does not — and why it changes by city',
    },
    {
      tipo: 'parrafo',
      texto:
        'Here you can see plainly why there is no national answer. Comparing ' +
        'the land-use plans of Bogotá and Cali on exactly the same question:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Element', 'Bogotá', 'Cali'],
      filas: [
        [
          'Basements and semi-basements',
          'Excluded where they are parking or vehicle circulation',
          'Excluded if they are parking, storage or plant rooms. **They count as a storey** if the slab projects above what is permitted',
        ],
        [
          '**Stairs and circulation cores**',
          '**Expressly excluded**',
          '**No general exclusion**',
        ],
        [
          'Car parking',
          'Excluded **at any level**',
          'Excluded **only in basement or semi-basement**',
        ],
        [
          'Plant and services rooms',
          'Excluded',
          'No general exclusion from the ratio',
        ],
        [
          'Private communal facilities',
          'Excluded **up to one storey**',
          'Excluded **with no limit of storeys**',
        ],
        ['Flat roofs and uncovered hard areas', 'Excluded', 'Excluded'],
      ],
      nota:
        'Decreto Distrital 555 de 2021, art. 266, and Acuerdo 0373 de 2014, ' +
        'arts. 346 and 354. **Neither of the two mentions lofts or ' +
        'mezzanines**: the concept simply does not appear, and it is not ' +
        'wise to infer how they would be treated.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The sharpest divergence is the one over circulation cores: **the ' +
        'same stair and lift core may not count in Bogotá and may count in ' +
        'Cali.** In a building of several storeys, that is hundreds of ' +
        'square metres of difference on the same project.',
    },

    { tipo: 'titulo', texto: 'What national law does not define' },
    {
      tipo: 'parrafo',
      texto:
        'There are four words everybody uses that are **defined in no ' +
        'national rule**: aislamiento, antejardín, retiro and maximum ' +
        'height. The law only says that the POT must regulate them.',
    },
    {
      tipo: 'lista',
      items: [
        '**Aislamiento**, the boundary setback: the distance the building has to leave from the plot boundaries. Side, rear or front, depending on which side.',
        '**Antejardín**, the front garden: the strip between the pavement and where the building starts.',
        '**Retiro**, the standoff: a compulsory distance from one specific feature — a road, a stream, a power line.',
        '**Paramento**, the building line: this one is national. It is the "vertical plane marking where building begins on a plot", and where there is no front garden it coincides with the demarcation line.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The first three can only be found out from the POT of your ' +
        'municipality, and they change from one sector to another inside the ' +
        'same city.',
    },

    { tipo: 'titulo', texto: 'Where to look it up' },
    {
      tipo: 'parrafo',
      texto:
        'Every city has its own tool, and all of them are free. What varies ' +
        'is how usable they are.',
    },
    {
      tipo: 'lista',
      items: [
        '**Cali.** The land-use enquiry is public, immediate and needs no registration: you search by address or by cadastral number and it returns a document with the permitted activities. The IDESC map viewer lets you look at the plot against the mapping of the POT.',
        '**Medellín.** It is the best of the three: the enquiry against the land-use map is public and needs no registration, by address or by cadastral identifier, over Acuerdo 48 de 2014.',
        '**Bogotá.** The Secretaría Distrital de Planeación keeps a per-plot planning enquiry, and the POT in force is Decreto 555 de 2021. The web addresses of these tools change often; look for them from the Secretaría’s own portal before trusting a saved link.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And a warning about map viewers in general: they orient, they do ' +
        'not certify. The tools say so themselves — for official documents ' +
        'you have to go back to the text of the agreement and to its ' +
        'mapping. They tell you which way things are going, not what a ' +
        'project can be built on.',
    },

    { tipo: 'titulo', texto: 'The ruling is not the permit' },
    {
      tipo: 'parrafo',
      texto:
        'This is the most costly confusion in the whole subject, and the ' +
        'rules settle it with surprising clarity:',
    },
    {
      tipo: 'cita',
      texto:
        'The issue of these rulings grants no rights and imposes no ' +
        'obligations on the party requesting them, and does not modify the ' +
        'rights conferred by permits that are in force or that have been ' +
        'executed.',
      fuente:
        'Decreto 1077 de 2015, art. 2.2.6.1.3.1, on the written ruling on ' +
        'the planning rules and on land use',
    },
    {
      tipo: 'parrafo',
      texto: 'And on the other side, on the permit:',
    },
    {
      tipo: 'cita',
      texto:
        'Final administrative acts of particular and concrete content that ' +
        'authorise planning actions consolidate legal situations in the ' +
        'hands of their holders.',
      fuente: 'Ley 388 de 1997, article 36',
    },
    {
      tipo: 'parrafo',
      texto:
        '**The ruling is an informative photograph of the rules on a given ' +
        'date. The permit is a right.** If the rules change between the one ' +
        'and the other, the ruling does not protect you.',
    },
    {
      tipo: 'nota',
      texto:
        'What does freeze the rules is **filing the permit application in ' +
        'legal and due form** — that is, with the file complete. If the ' +
        'rules change while it is under study, the project is resolved under ' +
        'those in force on the day of filing. The shield is switched on by ' +
        'filing, not by asking for the ruling.',
    },

    {
      tipo: 'titulo',
      texto: 'Urban, expansion and rural: what changes',
    },
    {
      tipo: 'parrafo',
      texto:
        'The class of land is not a label: it decides whether the plot can ' +
        'be built on today, in some years’ time, or never.',
    },
    {
      tipo: 'titulo',
      texto: 'Expansion land: the most expensive trap',
    },
    {
      tipo: 'cita',
      texto:
        'Expansion land may only be the subject of urbanisation and ' +
        'construction once the corresponding partial plan has been adopted. ' +
        'Until the corresponding partial plans are approved, in urban ' +
        'expansion zones only agricultural and forestry uses shall be ' +
        'permitted.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.2.1.4.1.6',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Buying in expansion land with no partial plan adopted is buying a ' +
        'plot that cannot be built on today**, and that cannot be subdivided ' +
        'either. The seller is not lying when they say it "is going to be ' +
        'urban": it may well be. What nobody knows is when.',
    },
    {
      tipo: 'titulo',
      texto: 'Rural land: the Unidad Agrícola Familiar',
    },
    {
      tipo: 'parrafo',
      texto:
        'In the countryside there is a limit that admits no negotiation, and ' +
        'breaching it is punished not with a fine but with something worse:',
    },
    {
      tipo: 'cita',
      texto:
        '**Save for the exceptions set out in the following article**, rural ' +
        'properties may not be divided below the extent determined by INCORA ' +
        'as the Unidad Agrícola Familiar for the municipality or zone ' +
        'concerned. Consequently, **on pain of absolute nullity of the act ' +
        'or contract**, no action or transaction may be carried out ' +
        'resulting in the division of a rural property into areas smaller ' +
        'than the one set as the Unidad Agrícola Familiar for the ' +
        'corresponding municipality by INCORA.',
      fuente: 'Ley 160 de 1994, article 44',
    },
    {
      tipo: 'parrafo',
      texto:
        'Absolute nullity means the transaction never existed. It is the ' +
        'reason there are rural plots sold whose buyer can neither register ' +
        'the deed nor get a permit.',
    },
    {
      tipo: 'nota',
      texto:
        'A correction to a common error: **the regional environmental ' +
        'authority does not fix the Unidad Agrícola Familiar.** That belongs ' +
        'to the national land authority. What the environmental authority ' +
        'does fix are the maximum densities on suburban land. They are two ' +
        'different powers and they get confused all the time.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two more national rules on rural land worth knowing: on suburban ' +
        'land the minimum unit of action **may not be smaller than two ' +
        'hectares** — with the exception of a single dwelling house for the ' +
        'owner — and for commerce, services and industry the site coverage ' +
        'ratio **may not exceed 30% of the property**; the rest goes to ' +
        'conservation of native vegetation.',
    },

    {
      tipo: 'titulo',
      texto: 'Land dedications: the cost nobody mentioned',
    },
    {
      tipo: 'parrafo',
      texto:
        'If you bought a plot in a consolidated neighbourhood, this probably ' +
        'does not apply to you: the dedications were made when the area was ' +
        'urbanised. **If you bought an unurbanised parcel of land, it ' +
        'does**, and it is the biggest surprise in the whole process.',
    },
    {
      tipo: 'parrafo',
      texto:
        'To dedicate is to hand land over free to the municipality for ' +
        'roads, public space and community facilities, in exchange for the ' +
        'right to urbanise. The orders of magnitude, in two cities:',
    },
    {
      tipo: 'lista',
      items: [
        '**Cali:** 27% of the net developable area for public space and community facilities — 20% on site, 2% in areas of deficit, 5% for facilities — **plus** the road area that comes out of the outline scheme. It is 27% *and* roads on top.',
        '**Bogotá:** under the development treatment, the dedication for parks and squares is calculated on the net developable area and **scales with how much you want to build**: the percentages run from 17% to more than 50%. The more buildable area, the more land handed over.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And this is **before** deducting reservations. That is why the ' +
        'usable area ends up considerably smaller than the plot bought, and ' +
        'why applying the ratio to one area or the other changes the whole ' +
        'project.',
    },

    {
      tipo: 'titulo',
      texto: 'Before you sign: what to check, and where',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What can ruin the plot', 'Where it gets ruled out'],
      filas: [
        [
          '**Road reservation.** Land held back for a future public work',
          'The certificado de tradición, the land registry extract — the reservation has to be **recorded** — and the written ruling on the planning rules',
        ],
        [
          '**Hazard or risk zone.** It may call for detailed studies or bar the permit altogether',
          'The municipal disaster risk management body',
        ],
        [
          '**Watercourse buffer.** A strip of 30 metres on each side of watercourses, and 100 metres around springs',
          'The competent regional environmental authority',
        ],
        [
          '**Easements.** Of way, of power lines, of water mains',
          'The certificado de tradición. **Careful: an easement in fact may not be recorded.** You have to go to the plot',
        ],
        [
          '**Listed cultural property.** It requires a concept design approved by the cultural authority before the permit',
          'The lists of the Ministry of Culture and of the local heritage institute',
        ],
        ['**Protected or reserved area**', 'The national register of protected areas'],
        [
          '**Area and boundaries that do not match**',
          'The certificado de tradición and the cadastral record. National viewers orient but **do not settle official boundaries**',
        ],
      ],
      nota:
        'The **certificado de tradición y libertad**, the land registry ' +
        'extract, is the document that reveals most for the least money: ' +
        'restrictions on ownership, injunctions, recorded easements and ' +
        'falsa tradición.',
    },

    { tipo: 'titulo', texto: 'The soil survey is not to be skipped' },
    {
      tipo: 'parrafo',
      texto:
        'It circulates widely that below a certain area no soil survey is ' +
        'needed. **That assertion is worth distrusting**: it rests on ' +
        'articles that were repealed in 2021, and the cross-reference was ' +
        'left orphaned.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What does stand up is Ley 400 de 1997, which defines the ' +
        'geotechnical engineer as **the civil engineer who signs the ' +
        'geotechnical survey** and under whose responsibility the foundation ' +
        'parameters and the amplification effects of the seismic wave are ' +
        'set.',
    },
    {
      tipo: 'nota',
      texto:
        'And a nuance that often gets misread: the law excludes from ' +
        '**independent technical supervision** houses of one and two storeys ' +
        'that follow Title E of the earthquake-resistant code. But the same ' +
        'article makes clear that those buildings **must still have a ' +
        'structural designer and a geotechnical engineer answerable for ' +
        'them**. The exception is one of supervision, not of survey.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Put another way: the soil survey is not a paperwork requirement. It ' +
        'is what says how your house stands up.',
    },

    { tipo: 'titulo', texto: 'In short' },
    {
      tipo: 'lista',
      items: [
        'Ask for the **written ruling on the planning rules** for your plot. The verbal enquiry is free by law; the written ruling costs 8.34 UVT wherever there is a curaduría. It is the starting point.',
        'Find out both ratios **and which area they are applied to**.',
        'Divide the plot ratio by the coverage ratio to know how many storeys fit.',
        'Ask what counts and what does not in your city: basements, circulation cores, car parking.',
        'Check the **class of land**. If it is expansion land with no partial plan, nothing gets built today.',
        'Get the **certificado de tradición** and read it right through.',
        'And remember that the ruling gives you no right at all. **Only filing the permit application freezes the rules.**',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'With that you already know more than most people who buy a plot — ' +
        'and you know which are the questions that cannot be answered from a ' +
        'screen.',
    },
  ],
}
