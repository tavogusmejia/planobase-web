import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Qué debe contener un informe técnico serio».
 *
 * Es la cuarta pieza del pilar de patologías, y hereda entero el vocabulario
 * que fijaron las tres anteriores: **fisura es *hairline crack* y grieta es
 * *crack***, la calificación de la NSR-10 va en *good, fair or poor*, la
 * memoria del A.10.1.5 es *memorandum*, las exploraciones son *investigations*
 * y el criterio de oficio es *trade judgement*. Nada de eso se reinventa aquí.
 *
 * Lo nuevo es el vocabulario procesal. *Dictamen pericial* se traduce **expert
 * report**, que es el término de la práctica inglesa, y el artículo mantiene la
 * distinción del original: la mayoría de los informes de patología **no** son
 * dictámenes, y la norma se cita igualmente porque es la única vara escrita que
 * hay. Suavizar esa aclaración convertiría el artículo en algo que el original
 * se cuidó de no decir.
 *
 * «Matrícula» aparece con dos sentidos distintos y se traduce distinto: la del
 * inmueble es *land registry number* y la del profesional es *professional
 * registration*. En español se distinguen por contexto; en inglés no, y
 * dejarlas iguales confundiría el registro de la propiedad con el consejo
 * profesional.
 *
 * Los nombres de las normas van sin traducir y glosados la primera vez.
 */
export const traduccion: TraduccionPost = {
  slug: 'que-debe-contener-un-informe-tecnico-serio',
  titulo: 'What a serious technical report must contain',
  traducido: '2026-09-05',
  resumen:
    'You paid for a diagnosis and were handed a quotation with photographs. ' +
    'Which sections a report that is of use carries, what the only Colombian ' +
    'legal definition of a well-made technical report says, and seven signs ' +
    'of one that will do nothing for you.',
  metaDescripcion:
    'Which sections a building pathology report must have, how to tell it ' +
    'from a quotation in disguise, and the signs that give a bad one away.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'You paid to find out what is wrong with the building. You were ' +
        'handed fourteen pages: two of cover, six of photographs with generic ' +
        'captions, one of "background" copied from another report and five of ' +
        'prices. Not one of them says why what happened happened.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is not a technical report. It is a quotation with photographs. ' +
        'And the difference is not one of style: a document like that is no ' +
        'use for deciding, no use for comparing offers and no use for making ' +
        'a claim.',
    },

    { tipo: 'titulo', texto: 'The five-minute test' },
    {
      tipo: 'parrafo',
      texto:
        'Before reading the whole thing, do this. Open the contents page and ' +
        'count how much room **the problem** takes up and how much room **the ' +
        'solution** takes up.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In a diagnostic report, the part that describes, measures, ' +
        'investigates and concludes on the cause is by far the largest. The ' +
        'recommendations are the consequence, and they take up little. **If ' +
        'the proportion runs the other way round, you did not buy a ' +
        'diagnosis: you bought a sales proposal.**',
    },
    {
      tipo: 'nota',
      texto:
        'The second test is just as quick: look for the word "because". A ' +
        'report that does not explain why what happened happened is not a ' +
        'diagnosis, however many photographs and letterheads it carries.',
    },

    { tipo: 'titulo', texto: 'The only written yardstick there is in Colombia' },
    {
      tipo: 'parrafo',
      texto:
        'There is no Colombian rule saying how a report on building pathology ' +
        'should be written. But there is one saying how a technical report ' +
        'that has to stand up before a judge should be written, and it is ' +
        'demanding: **article 226 of the Código General del Proceso**, the ' +
        'general code of civil procedure, which sets the requirements of an ' +
        'expert report.',
    },
    {
      tipo: 'cita',
      texto:
        'Every expert report must be clear, precise, exhaustive and detailed; ' +
        'in it shall be explained the examinations, methods, experiments and ' +
        'investigations carried out, as well as the technical, scientific or ' +
        'artistic grounds of its conclusions.',
      fuente: 'Ley 1564 de 2012, article 226',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is worth being precise about the scope: **most reports on ' +
        'pathology are not expert reports.** An expert report is rendered ' +
        'inside judicial proceedings and has rules of its own. But if the ' +
        'country wrote down only once what a well-made technical report is, ' +
        'that is the definition there is, and there is no reason to ask for ' +
        'less than the law asks when money is at stake. The same article ' +
        'requires, further:',
    },
    {
      tipo: 'lista',
      items: [
        'That whoever signs it **declare under oath that their opinion is independent** and corresponds to their genuine professional conviction. The oath is deemed taken by the signature alone.',
        'That it be accompanied by **the documents that serve as its foundation**, and by those evidencing the competence and the experience of whoever renders it.',
        'The identity of whoever renders it **and of whoever took part in preparing it**. Not only of the one who signs.',
        'The profession or trade practised, with the degrees and the experience certificates annexed.',
        'A list, and the annexing, of **all the information used** to prepare it.',
        'A statement of whether the methods employed differ from those the author habitually uses and, if they do, the justification for the variation.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'That last point is the most severe of them all and hardly anybody ' +
        'applies it outside a courtroom: **if you measured differently from ' +
        'usual, you have to say why.** It is exactly the requirement that ' +
        'separates a method from an improvisation.',
    },

    { tipo: 'titulo', texto: 'The sections it has to have' },
    {
      tipo: 'parrafo',
      texto:
        'The NSR-10, the Colombian seismic building code, does not describe ' +
        'the report, but it does describe the memorandum of the assessment of ' +
        'an existing building, and that list turns almost directly into a ' +
        'contents page. Together with the above, this is what has to be ' +
        'there:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Section', 'What it has to say', 'Why it matters'],
      filas: [
        [
          '**Object and scope**',
          'What was commissioned, what was inspected and what was expressly left out',
          'It is what prevents a later argument about whether "that was included"',
        ],
        [
          '**Identification of the property**',
          'Address, land registry number, year of construction, structural system, present use and previous uses',
          'A building with no date and no structural system cannot be assessed',
        ],
        [
          '**Documentation available**',
          'The drawings filed with the permit, design memoranda, the soil survey, minutes, earlier permits. **And which of them did not turn up**',
          'The code asks for a list of the design and construction documents used. What is missing is as informative as what is there',
        ],
        [
          '**Methodology and testing**',
          'What was done, with what equipment, under which testing standard, at how many points and where',
          'Without this, no result can be repeated or checked against anything',
        ],
        [
          '**Record of what was observed**',
          'Every defect located on a drawing, measured and **dated**, not merely photographed',
          'A hairline crack with no date and no dimension cannot be measured again six months later',
        ],
        [
          '**Diagnosis**',
          'The cause. And where there are several hypotheses, which ones were ruled out and on what evidence',
          'It is the section you are paying for. Everything else is support',
        ],
        [
          '**Rating of the condition**',
          'The quality of the original design and construction, and the present state: **good, fair or poor**',
          'It is the rating the NSR-10 requires, and the one that allows one building to be compared with another',
        ],
        [
          '**Conclusions**',
          'Numbered, and every one of them tied to the evidence that sustains it',
          'A conclusion that cannot be traced back to a piece of data is an opinion',
        ],
        [
          '**Recommendations in order of priority**',
          'What to do, in what order and with what urgency. Separating what corrects the cause from what repairs the damage',
          'Repairing without correcting the cause is the most expensive mistake in the trade',
        ],
        [
          '**Limitations**',
          'What could not be seen, what could not be tested and what is still to be verified',
          'It is the section that is almost never there and the one that says most about whoever signs',
        ],
        [
          '**Signature, registration and annexes**',
          'Who signs, under what professional registration, who else took part, and the complete supporting material',
          'Without a registration in force the document binds nobody',
        ],
      ],
      nota:
        'The sections on documentation available, assessment of the condition ' +
        'and justification of parameters come from subparagraphs (a) to (e) ' +
        'of numeral A.10.1.5 of the NSR-10; the rating as good, fair or poor, ' +
        'from A.10.2.2.',
    },

    { tipo: 'titulo', texto: 'The limitations section' },
    {
      tipo: 'parrafo',
      texto:
        'I dwell on this one because it is counterintuitive. **A report that ' +
        'declares what it could not verify is more trustworthy than one that ' +
        'declares nothing**, not less.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Nobody ever sees everything. The foundations were not opened up ' +
        'because there was no authorisation from the owner of the ground ' +
        'floor. The concrete of the façade columns was not tested because ' +
        'they were clad in stone. The pump room could not be inspected ' +
        'because the key never turned up. All of that goes in writing, with ' +
        'its consequence: which conclusion is left conditional on each gap.',
    },
    {
      tipo: 'nota',
      texto:
        'A report with no limitations declared is saying, without meaning to, ' +
        'that it saw everything. Nobody sees everything. The NSR-10 assumes ' +
        'as much: it asks for a record of the **extent of the ' +
        'investigations**, not of their result alone.',
    },

    { tipo: 'titulo', texto: 'Seven signs of a report that is of no use' },
    {
      tipo: 'lista',
      items: [
        '**It does not say when the visit took place.** Neither the date nor the conditions. A report on damp that does not say whether it had been raining is half the information.',
        '**There is no methodology.** It goes straight from the photographs to the conclusions. If you cannot tell how it got there, you cannot tell whether it got there properly.',
        '**The conclusions are the price list.** When the conclusions chapter and the budget say the same thing, the diagnosis was written after the quotation.',
        '**It says what to do but not why it happened.** "Waterproofing the roof is recommended", with no word on where the water gets in, is a recommendation that can fail from end to end.',
        '**The photographs are not located.** A hairline crack photographed without saying which gridline, which floor and which face it is on cannot be found again.',
        '**There is no signature with a registration, or whoever signs cannot sign that.** A structural conclusion is signed by a civil engineer with the experience Ley 400 requires. An architect can diagnose a great many things; the structural verdict is not one of them.',
        '**Whoever signs it sells the repair.** It is not always disqualifying, but it has to be declared. The Código General del Proceso asks for precisely that: that independence be stated, not assumed.',
      ],
    },

    { tipo: 'titulo', texto: 'The conflict of interest, said plainly' },
    {
      tipo: 'parrafo',
      texto:
        'The commonest arrangement on the market is also the worst: the party ' +
        'who diagnoses is the party who repairs, and charges little for the ' +
        'diagnosis or gives it away because the business is in the works.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The problem is not bad faith. It is that a diagnosis made by whoever ' +
        'is going to carry out the work drifts, without meaning to, towards ' +
        'the scope that party knows how to deliver. Whoever sells ' +
        'waterproofing finds waterproofing problems.',
    },
    {
      tipo: 'nota',
      texto:
        'Colombian law itself reasons this way elsewhere: the review of the ' +
        'structural designs of a project is carried out by a professional ' +
        'other than the designer, with no employment and no contractual ' +
        'relationship with them or with their firm. The independence of ' +
        'whoever reviews is not a preference of style: in the rule it is a ' +
        'requirement.',
    },

    { tipo: 'titulo', texto: 'What to ask for in writing before commissioning it' },
    {
      tipo: 'lista',
      items: [
        '**The contents page of the report they are going to hand you.** If they cannot give it to you beforehand, it is because they do not yet know what they are going to do.',
        '**The list of investigations and tests**, with the number of them and their tentative locations.',
        '**Who signs each part**, with registration and evidenced experience.',
        '**What is left outside the scope**, stated in the contract and not in the final report.',
        '**Whether whoever signs has an interest in the repair**, declared in writing.',
        '**How many copies, in what format and with which annexes.** A report that arrives as a PDF without the drawings or the test results is incomplete by design.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And a last one, which costs nothing: **ask for the report before ' +
        'asking for the budget.** The order matters. A budget handed over at ' +
        'the same time as the diagnosis almost always means that one of the ' +
        'two was written first, and it was not the diagnosis.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The requirements quoted are transcribed from the articles in force. ' +
        'The rest — the five-minute test, the seven signs — is trade ' +
        'judgement, and is said as such.',
    },
  ],
}
