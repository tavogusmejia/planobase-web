import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Cuándo un edificio necesita un estudio patológico».
 *
 * El término que da título al artículo es el problema de la traducción, y no
 * se resuelve con un calco. *Pathological study* no significa nada en inglés
 * de construcción; lo que en Colombia se vende como «estudio patológico» es,
 * en la práctica inglesa, un *building condition survey* o un *structural
 * appraisal*, y la disciplina se llama *building pathology*. La traducción usa
 * **pathology study** y glosa el equivalente inglés justo donde el original
 * dice que el término no es normativo: ahí la glosa refuerza el argumento en
 * vez de estorbarlo.
 *
 * NSR-10, Ley 400 de 1997 y Ley 1796 de 2016 van sin traducir y glosadas la
 * primera vez. La designación del capítulo A.10 se traduce del encabezado real
 * del Título A, que es de donde salió en español.
 *
 * Los umbrales y los plazos son los mismos: cinco y tres años de experiencia,
 * diez años de amparo, tres valores de calificación —buena, regular o mala—.
 */
export const traduccion: TraduccionPost = {
  slug: 'cuando-un-edificio-necesita-un-estudio-patologico',
  titulo: 'When a building needs a pathology study',
  traducido: '2026-09-05',
  resumen:
    'There is a point at which repairing stops being maintenance and becomes ' +
    'diagnosis. What the signs are, in which four cases the seismic building ' +
    'code requires the study, in which one it expressly says it is not ' +
    'needed, and who can sign it.',
  metaDescripcion:
    'When a building needs a pathology study, what NSR-10 requires in order ' +
    'to assess an existing building, and who is allowed to sign it.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The damp in the living room was patched three times and came back ' +
        'three times. The crack in the courtyard wall was sealed last year and ' +
        'is longer today. The management council is about to vote an ' +
        'extraordinary levy to waterproof the whole roof, and nobody has said ' +
        'where the water gets in.',
    },
    {
      tipo: 'parrafo',
      texto:
        'At some point in that story the problem stopped being one of ' +
        'maintenance. This article is about where that point lies.',
    },

    { tipo: 'titulo', texto: 'The question that separates the two' },
    {
      tipo: 'parrafo',
      texto:
        'It is not how much it costs, nor how large the damage is. It is a ' +
        'single one: **does anybody know why it happened?**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Maintenance repairs a deterioration whose cause is known and ' +
        'foreseeable: paint that has run its course, a seal that aged, a tile ' +
        'shifted by the wind. You know what produced it, you know it will ' +
        'happen again and you know how often. That is programmed and carried ' +
        'out.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Diagnosis comes in when the cause is not known, when the repair did ' +
        'not correct it, or when what you can see may be the symptom of ' +
        'something you cannot. At that point, repairing without studying is ' +
        'not saving money: it is paying twice.',
    },
    {
      tipo: 'nota',
      texto:
        'The practical rule, and it is the one I use: **if the previous repair ' +
        'failed, the problem is no longer the repair.** A patch that cracks ' +
        'again is saying there is movement; damp that comes back is saying the ' +
        'water gets in somewhere nobody looked. Repeating the same ' +
        'intervention is an experiment that has already been run.',
    },

    { tipo: 'titulo', texto: 'Six signs that it has stopped being maintenance' },
    {
      tipo: 'lista',
      items: [
        '**It comes back.** The same defect, in the same place, after being repaired. Once may be poor workmanship; twice is a wrong diagnosis.',
        '**It progresses.** The crack is longer, wider or more branched than it was six months ago. Stabilised damage and active damage are treated differently, and they are told apart only by measuring with a date attached.',
        '**It spreads.** It appeared at one point and today there are similar defects elsewhere. When the pattern repeats across several elements, the cause is usually common to them and lies beneath all of them.',
        '**It appeared suddenly.** Damage that was not there and shows up within days, with no work nearby to explain it, is a change of conditions. It may be water, it may be ground, it may be load.',
        '**The water cannot be located.** You know where it comes out, not where it goes in. It is the situation in which most money is spent blindly, because the stain is hardly ever below the point of entry.',
        '**There is steel in view, rust or spalling.** Concrete that opens and shows the reinforcement has stopped being a matter of finishes. Corrosion does not stop by itself and it grows in volume, so the damage feeds on itself.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'None of the six is, on its own, an emergency. All of them are reason ' +
        'enough to find out the cause before signing a repair contract.',
    },

    { tipo: 'titulo', texto: 'The four cases where the code requires it' },
    {
      tipo: 'parrafo',
      texto:
        'Up to here it is professional judgement. From here on it is an ' +
        'obligation, and it is written in a single place: **Chapter A.10 of ' +
        'NSR-10**, the Colombian seismic building code, under the heading ' +
        '"Assessment and intervention of buildings constructed before the ' +
        'entry into force of the present version of the Regulation".',
    },
    {
      tipo: 'parrafo',
      texto:
        'That chapter sets the criteria and procedures for assessing the ' +
        'seismic vulnerability of an existing building and for designing its ' +
        'intervention. Its scope expressly names four situations:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Situation', 'What the code says'],
      filas: [
        [
          '**Change of use**',
          'Even where the works are minor, the implications of the change must be assessed against vertical loads, horizontal forces and **especially seismic effects**',
        ],
        [
          '**Extension or alteration**',
          'The criteria of the chapter must be used for the design and construction of adjoining extensions, extensions upwards, updates to the regulation and alterations',
        ],
        [
          '**Structural strengthening**',
          'They must be used in the updating and seismic rehabilitation of existing buildings',
        ],
        [
          '**Repair of earthquake damage**',
          'They must be used where the building suffered **moderate to severe** damage to its structure, to its non-structural elements, or to both',
        ],
      ],
      nota:
        'NSR-10, Título A, numerals A.10.1.3.2 to A.10.1.3.6. The chapter also ' +
        'applies, under A.10.1.3.3, where all you want is to diagnose the ' +
        'seismic vulnerability of an existing building, with no works ' +
        'involved.',
    },
    {
      tipo: 'nota',
      texto:
        'Change of use is the one that surprises most. **The structure does ' +
        'not have to be touched**: it is enough to turn the house into an ' +
        'office, the shop into a restaurant, the single-family dwelling into ' +
        'flats. The code treats a change of use as an alteration in planning ' +
        'terms and requires the assessment even where the works fall within ' +
        'the category of minor repairs.',
    },

    { tipo: 'titulo', texto: 'And the case where the code says it is not needed' },
    {
      tipo: 'parrafo',
      texto:
        'It is worth saying with the same clarity, because nobody says it: ' +
        '**there are works that call for no study, and anyone selling you one ' +
        'is selling you something you do not need.**',
    },
    {
      tipo: 'cita',
      texto:
        'The structural system of the building shall be deemed not to undergo ' +
        'alteration where repairs and minor changes are made that affect ' +
        'neither the seismic resisting system nor the structural integrity of ' +
        'the building. In that case there is no need to carry out the studies ' +
        'referred to in the present Chapter.',
      fuente: 'NSR-10, Título A, numeral A.10.1.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'With one exception, and it is in the next numeral: if there is also a ' +
        'change of use, the exemption falls away. It is the only door the code ' +
        'deliberately leaves open.',
    },

    { tipo: 'titulo', texto: 'What a pathology study is, and what it is not' },
    {
      tipo: 'parrafo',
      texto:
        'Here something uncomfortable has to be said: **"estudio patológico" ' +
        'is not a Colombian regulatory term.** NSR-10 does not define it, ' +
        'Decreto 1077 does not define it, no statute defines it. It is a name ' +
        'from the trade — English practice would call the same work a building ' +
        'condition survey or a structural appraisal — and that is why things ' +
        'bearing no resemblance to one another are sold under the label: from ' +
        'a forty-minute visit with photographs to six weeks of work with ' +
        'testing and modelling.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What is regulated, and is the yardstick worth measuring any offer ' +
        'against, is the assessment procedure of A.10. Its first three stages ' +
        'describe the work of diagnosis exactly:',
    },
    {
      tipo: 'lista',
      items: [
        '**Verify that the case is covered** by the scope of the chapter. That is: first you settle whether this is or is not an A.10 problem.',
        '**Collect and study the existing information** on the geotechnical design, the structural design and the construction process of the original building and of its later alterations, **and carry out investigations in the building itself**.',
        '**Rate the condition of the structural system**, on two axes: the quality of the original design and construction, and the state of maintenance and conservation.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'That second stage is what separates a serious report from a ' +
        'decorative one. The code lists what has to be investigated: whether ' +
        'the design documents match what is built today — checked on site, ' +
        'with investigations at representative places and a record of their ' +
        'extent —, the quality of the original construction, the state of ' +
        'conservation, evidence of local failures, excessive deflections and ' +
        'corrosion of the reinforcement, the occurrence of settlement of the ' +
        'foundations, and the past occurrence of extraordinary events: ' +
        'explosion, fire, earthquake, previous remodelling, finishes that ' +
        'added load.',
    },
    {
      tipo: 'nota',
      texto:
        'The rating in stage 3 has, under the code, three values: **good, fair ' +
        'or poor**, and it is made separately for the quality of the original ' +
        'design and construction and for the present state of the structure. ' +
        'It is an explicitly qualitative rating. A report that does not carry ' +
        'it has not completed stage 3, however many photographs it has.',
    },
    {
      tipo: 'parrafo',
      texto:
        'From that you can deduce, by elimination, what a pathology study is ' +
        'not:',
    },
    {
      tipo: 'lista',
      items: [
        '**It is not a repair quotation.** The quotation comes afterwards and only makes sense once the diagnosis exists.',
        '**It is not a visual inspection on its own.** The code asks for investigations, not only observation, and asks for a record of the extent of those investigations.',
        '**It is not a single test.** A rebound hammer on one column is not a diagnosis; it is one piece of data inside one.',
        '**It is not a post-earthquake assessment.** The rapid inspection made after a tremor serves to decide whether the building can be occupied. It is another tool, with another scope and another signatory, and it does not replace the study.',
      ],
    },

    { tipo: 'titulo', texto: 'Who signs it' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part where the market is most misrepresented, and the ' +
        'code leaves no margin. The memorandum justifying the assessment and ' +
        'the intervention, says A.10.1.5.1, **must be signed by a duly ' +
        'registered civil engineer** meeting the conditions of articles 26 and ' +
        '27 of Ley 400 de 1997.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What is signed', 'Who may sign it', 'What they must prove'],
      filas: [
        [
          'Structural design and geotechnical studies',
          '**Civil engineer**, registered',
          'A postgraduate degree or **more than five years** in the field of structures (art. 27)',
        ],
        [
          'Geotechnical studies',
          '**Civil engineer**, registered',
          'A postgraduate degree in geotechnics or **more than five years** in geotechnical design of foundations (art. 28)',
        ],
        [
          'Design of non-structural elements',
          'Architect, civil engineer or mechanical engineer',
          'A postgraduate degree or **more than three years** in practice (art. 29)',
        ],
      ],
      nota:
        'Ley 400 de 1997, articles 26 to 29. The statute expressly reserves ' +
        'structural design and geotechnical studies to the civil engineer: ' +
        'they cannot be signed by an architect, nor by an engineer of another ' +
        'branch, nor by a foreman with thirty years on site.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is worth saying as well what an architect does do in work of this ' +
        'kind, because it is half the commission and it is underrated: ' +
        'surveying what is built where there are no drawings — which is nearly ' +
        'always —, reconstructing the history of the interventions, diagnosing ' +
        'the defects of envelope, roof, damp and finishes, coordinating the ' +
        'structural engineer and the geotechnical engineer, and writing the ' +
        'report so that a management council can decide with it in hand.',
    },
    {
      tipo: 'nota',
      texto:
        'And there is a sentence of the code that is worth the whole chapter: ' +
        'the kind of design in A.10 "demands the best judgement and experience ' +
        'on the part of the engineer who carries it out", who takes ' +
        'responsibility **for the behaviour of the building in the future**. ' +
        'It is not a courteous formula: it is an assignment of liability.',
    },
    {
      tipo: 'parrafo',
      texto:
        'One more detail, for anyone who has already decided to intervene: the ' +
        'construction of a structural intervention must be subject **in all ' +
        'cases** to technical supervision, with no area threshold and no ' +
        'exceptions. That is a line in the budget, not a formality.',
    },

    { tipo: 'titulo', texto: 'When it is worth doing even where nobody requires it' },
    {
      tipo: 'parrafo',
      texto:
        'Four moments at which the study pays for itself, and not one of them ' +
        'appears in the code:',
    },
    {
      tipo: 'lista',
      items: [
        '**Before buying.** It is the only moment at which the result of the diagnosis can still change the price, or the decision. After signing, the finding is yours.',
        '**Before remodelling.** A refurbishment budget drawn up for a building nobody knows gets revised upwards on site, always. And if the work turns out to touch the structure, the study has gone from advisable to compulsory.',
        '**Before the ten-year cover runs out.** Ley 1796 de 2016 obliges the builder or the seller of a new dwelling to cover financial loss arising **within the ten years following the technical certificate of occupancy**. Damage found and documented inside that window has somebody to claim against; the same damage found afterwards does not.',
        '**Before the general meeting votes a levy.** A council approving a major intervention with no diagnosis is deciding on the information of the party selling the repair. The study costs a fraction of the works and is the only thing that makes comparable offers that today are not.',
      ],
    },

    { tipo: 'titulo', texto: 'What to ask before commissioning it' },
    {
      tipo: 'lista',
      items: [
        '**Who signs, with what registration, and what do they prove?** If there is going to be a structural conclusion, there has to be a civil engineer with the experience of article 27.',
        '**What investigations does it include, and how many?** Trial pits, openings, opening-up, testing. Without those it is a visual inspection under another name.',
        '**What previous documentation are they going to look for?** The drawings filed with the permit, the design memoranda, the original ground investigation, the propiedad horizontal by-laws. Stage 2 of A.10 begins there.',
        '**Will the report state the cause, or only the solution?** It is the question that causes the most discomfort and the one that filters best.',
        '**Who carries out the repair?** If it is the same party that diagnoses, the diagnosis has an interest attached. It is not always a problem, but you should know beforehand.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'What the document handed to you should contain — section by section, ' +
        'and how to recognise one that is of no use — is a separate subject ' +
        'and deserves an article of its own.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Everything above is transcribed from the articles in force. What is ' +
        'not in the code — the six signs, the four moments — is said as what ' +
        'it is: trade judgement.',
    },
  ],
}
