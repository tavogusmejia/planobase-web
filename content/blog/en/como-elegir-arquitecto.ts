import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Cómo elegir arquitecto, y qué señales indican que no es el
 * indicado».
 *
 * La pieza tiene vecinos directos ya traducidos y no se separa de ellos ni una
 * palabra: el apartado de la matrícula y las seis preguntas de la primera
 * llamada son casi los mismos de `cuanto-cobra-un-arquitecto`, y así se
 * traducen; la cita del artículo 26 de la Ley 400 y la del Decreto 2090 sobre
 * la supervisión van **palabra por palabra** como en
 * `arquitecto-maestro-de-obra-o-constructora`, porque son las mismas citas de
 * las mismas normas.
 *
 * Vocabulario tomado del corpus: `matrícula profesional` → professional
 * registration, `Certificado de Vigencia Profesional` conservado, `CPNAA`
 * conservado y glosado, `esquema básico` → outline scheme, `anteproyecto` →
 * concept design, `proyecto arquitectónico` → architectural project,
 * `estudio de suelos` → soil survey, `curaduría` conservada, `expensas` →
 * curaduría charges, `impuesto de delineación` → delineation tax,
 * `días hábiles` → working days. Y la distinción de las tres figuras es la de
 * `interventoria-de-obra`, que es lo único que sostiene la novena señal:
 * `supervisión arquitectónica` → architectural site supervision,
 * `dirección de obra` → technical site management, `interventoría`
 * conservada.
 *
 * Las dos negativas del original viajan enteras y sin suavizar: el ejercicio
 * ilegal de la arquitectura **no está tipificado como delito**, y **no se
 * publica ningún rango de honorarios** — la pieza de costos ya explica por qué
 * las dos guías que circulan se contradicen por un factor de tres.
 *
 * El espacio del `%` desaparece: «30 %» es «30%».
 */
export const traduccion: TraduccionPost = {
  slug: 'como-elegir-arquitecto',
  titulo: 'How to choose an architect, and the signs that say this is not the one',
  traducido: '2026-09-05',
  resumen:
    'You choose with documents and with six questions, not with a handsome ' +
    'portfolio. How to check the professional registration in two minutes, ' +
    'which certificate to ask for, and the nine signs worth taking seriously.',
  metaDescripcion:
    'How to choose an architect in Colombia: checking the CPNAA ' +
    'registration, what to ask, and the warning signs not to ignore.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'I am writing this knowing that it is an odd thing to do: an ' +
        'architecture practice explaining how to distrust an architect. But ' +
        'somebody’s bad experience with a colleague costs all of us, and ' +
        'nearly every one of them could have been avoided with two free ' +
        'enquiries and six questions.',
    },
    {
      tipo: 'parrafo',
      texto:
        'None of the signs that follow is a matter of taste or of style. ' +
        '**Every one of them can be checked with a document or with a ' +
        'concrete answer.**',
    },

    { tipo: 'titulo', texto: 'First: check that they are one' },
    {
      tipo: 'parrafo',
      texto:
        'To practise architecture in Colombia two things are needed: the ' +
        'degree **and** the professional registration card of the Consejo ' +
        'Profesional Nacional de Arquitectura, the national architecture ' +
        'council. And the law goes further: to enter into contracts you have ' +
        'to present the registration **and state its number in the ' +
        'contract**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The register is public and free, and it has a quirk worth knowing ' +
        'before you try it:',
    },
    {
      tipo: 'nota',
      texto:
        '**The register cannot be searched by name.** You have to search by ' +
        'identity document number or by registration number. So ask your ' +
        'architect for one of the two. It is a perfectly normal question, and ' +
        '**how they take it already tells you something**.',
    },
    {
      tipo: 'lista',
      items: [
        '**A search of the register**, by document or by registration number, in the CPNAA virtual office.',
        '**A Certificado de Vigencia Profesional**, free of charge. It is the document worth asking for, because it evidences the registration **and, on top of that, the absence of sanctions**.',
        '**The list of sanctioned professionals**, which the CPNAA publishes with name, registration number and suspension dates.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Two qualifiers, so as not to repeat things that are false. ' +
        'Practising architecture illegally **is not classified as a crime** — ' +
        'it is a matter for the police authorities, not for the CPNAA. But ' +
        'anybody can bring a disciplinary complaint before the CPNAA against ' +
        'a registered architect.',
    },

    { tipo: 'titulo', texto: 'The prohibition that describes a real practice' },
    {
      tipo: 'parrafo',
      texto:
        'An architect is expressly forbidden to **"lend their signature, ' +
        'whether free of charge or for payment, to authorise drawings that ' +
        'have not been studied, checked or executed personally"**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That rule was not written in a vacuum. If somebody offers to "find ' +
        'you someone to sign" the drawings, they are proposing exactly what ' +
        'the rule forbids. And there is a detail worth being clear about: ' +
        '**whoever signs is whoever answers for it**. If the person who signed ' +
        'did not draw, there is nobody to go to when something goes wrong, ' +
        'because the one who drew does not appear and the one who appears does ' +
        'not know.',
    },

    { tipo: 'titulo', texto: 'The nine warning signs' },

    { tipo: 'titulo', texto: '1. They will not give you their registration number' },
    {
      tipo: 'parrafo',
      texto:
        'Or they are uncomfortable with the question. It is the simplest sign ' +
        'and the most conclusive, because the answer costs nothing.',
    },

    { tipo: 'titulo', texto: '2. They offer you "all-inclusive" at a round price' },
    {
      tipo: 'cita',
      texto:
        'The designer must be a civil engineer in the case of structural ' +
        'designs and geotechnical surveys, and an architect or a civil or ' +
        'mechanical engineer in the case of designs for non-structural ' +
        'elements.',
      fuente: 'Ley 400 de 1997, article 26',
    },
    {
      tipo: 'parrafo',
      texto:
        '**An architect cannot sign the structural design or the soil ' +
        'survey.** It is not a commercial policy: the law reserves those ' +
        'signatures. Whoever offers you all-inclusive is either subcontracting ' +
        '— and ought to be telling you so — or is going to find somebody to ' +
        'sign, which is the previous sign.',
    },

    { tipo: 'titulo', texto: '3. They charge by dates and not by deliverables' },
    {
      tipo: 'parrafo',
      texto:
        'The only methodology published in Colombia splits the fee **by ' +
        'deliverable**, not by calendar: outline scheme, concept design, ' +
        'drawings for filing, permit obtained, complete drawings and details, ' +
        'supervision during the works. Every milestone can be checked.',
    },
    {
      tipo: 'nota',
      texto:
        'A contract that says "30% on signature, 30% at one month, 40% at two ' +
        'months" gives you no way of verifying anything. If the work does not ' +
        'move, you pay just the same.',
    },

    { tipo: 'titulo', texto: '4. They show you permit drawings as though they were the project' },
    {
      tipo: 'parrafo',
      texto:
        'The drawings a permit application is filed with are not enough to ' +
        'build from. The architectural project is "all the information needed ' +
        'for the construction to be executed correctly": details of joinery, ' +
        'stairs, bathrooms, façades, tiling, ceilings, floors, and the ' +
        'specifications.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Handing over the permit drawings and saying the work is finished is ' +
        'the commonest reason things end up improvised on site later — and the ' +
        'reason the budget runs over.',
    },

    { tipo: 'titulo', texto: '5. They promise you a total programme without asking you anything' },
    {
      tipo: 'parrafo',
      texto:
        'The only period with any backing in the rules along the whole route ' +
        'is the **45 working days** for the study of the permit application. ' +
        'Everything else depends on the project, on the municipality and — ' +
        'above all — on how fast you decide.',
    },
    {
      tipo: 'parrafo',
      texto:
        'An architect who gives you a total programme on the first call, ' +
        'without having seen the plot or knowing who decides in your ' +
        'household, is giving you a number, not a programme.',
    },

    { tipo: 'titulo', texto: '6. They do not talk to you about the soil survey' },
    {
      tipo: 'parrafo',
      texto:
        'The soil survey conditions the foundations, the foundations condition ' +
        'the structure and the structure conditions the architecture. Anybody ' +
        'who does not mention it in the first conversations is either planning ' +
        'to draw it in afterwards or planning not to do it.',
    },

    { tipo: 'titulo', texto: '7. They treat the permit as somebody else’s paperwork' },
    {
      tipo: 'parrafo',
      texto:
        'The rule puts the procedure before the authority inside the ' +
        'architectural project, and ties a slice of the fee to **the permit ' +
        'obtained**, not to the permit filed. If your architect tells you that ' +
        '"you sort that out with the curaduría", they are handing you back the ' +
        'most technical part of the commission.',
    },

    { tipo: 'titulo', texto: '8. They do not want to sign a contract' },
    {
      tipo: 'parrafo',
      texto:
        'The fee rule requires that there be **a written record**. And there ' +
        'are three clauses where every argument gets lost, and which a good ' +
        'contract settles:',
    },
    {
      tipo: 'lista',
      items: [
        '**How many revisions are included.** No Colombian rule fixes a number; that is why it has to be written down. What the rule does give is who pays: except for an error or omission by the architect, the modification is charged to the client.',
        '**Who owns the drawings.** They are works protected by copyright. The assignment of the economic rights **must be in writing** to be valid, and if it does not say for how long, it is limited to five years.',
        '**What happens if you cancel.** The rule provides for charging the work executed, with a minimum, and it adds a condition worth understanding before signing: **partial drawings may not be used to execute the works.**',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And a rule of architecture that surprises both parties: the author of ' +
        'an architectural project **cannot prevent the owner from introducing ' +
        'modifications**, but can forbid their name from being associated with ' +
        'the altered work. In architecture, the author’s right that the work ' +
        'not be altered gives way to the right of property; what survives is ' +
        'the signature.',
    },

    { tipo: 'titulo', texto: '9. They tell you they will also run the works, in the same contract' },
    {
      tipo: 'cita',
      texto:
        'The architect has only the function of supervising their design and ' +
        'not the technical management of the works.',
      fuente: 'Decreto 2090 de 1989',
    },
    {
      tipo: 'parrafo',
      texto:
        'Architectural site supervision, technical site management and ' +
        'interventoría — independent monitoring on the client’s behalf — are ' +
        'three different contracts, with three different functions, and often ' +
        'three different people. Mixing them into a single price is not ' +
        'necessarily bad faith, but it is a contract in which nobody knows ' +
        'afterwards what was engaged.',
    },

    { tipo: 'titulo', texto: 'The six questions for the first call' },
    {
      tipo: 'lista',
      items: [
        '**What base do you calculate the fee on?** It should be the construction cost, without the land.',
        '**How is it split by deliverable?** If the split runs by dates and not by deliverables, there is no way to verify anything.',
        '**What is left outside?** They should name the soil survey, the structural design, the topography, the curaduría charges and the delineation tax without you having to ask.',
        '**Who signs each drawing?** The structural and geotechnical ones have to be signed by a civil engineer.',
        '**How many revisions are included, and when is a modification charged?**',
        '**Your professional registration number?** So you can check it yourself, free, in two minutes.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'An architect who answers those six without discomfort is telling you ' +
        'something more important than their price.',
    },

    { tipo: 'titulo', texto: 'What is not a warning sign' },
    {
      tipo: 'parrafo',
      texto:
        'For symmetry, it is worth saying what gets ruled out wrongly:',
    },
    {
      tipo: 'lista',
      items: [
        '**That they charge more than somebody else.** Architectural fees in Colombia have had no compulsory tariff for decades, and the guides in circulation contradict each other by a factor of three. Price on its own tells you nothing.',
        '**That the practice is small.** What matters is who signs and who answers for it, not how many desks there are.',
        '**That they have never done a house exactly like yours.** Hardly any house resembles another. What is being assessed is the method, not the catalogue.',
        '**That they tell you no.** An architect who explains why what you are asking for does not fit the rules, or does not fit the budget, is saving you the problem rather than creating it.',
      ],
    },

    { tipo: 'titulo', texto: 'In short' },
    {
      tipo: 'parrafo',
      texto:
        'Ask for the registration number, check it against the register, ask ' +
        'for the Certificado de Vigencia Profesional and put the six ' +
        'questions. It is twenty minutes and two free enquiries.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is very little next to what it costs to find out afterwards ' +
        'that the person who signed was not the person who drew.',
    },
  ],
}
