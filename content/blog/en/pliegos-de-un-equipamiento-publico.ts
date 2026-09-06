import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Cómo se estructuran los pliegos de un equipamiento público».
 *
 * Sigue el vocabulario de obra pública que fijó
 * `concursos-publicos-de-arquitectura.ts`: `pliego de condiciones` → tender
 * documents, `entidad` → contracting authority, `documentos tipo` conservado y
 * glosado como standardised tender documents of compulsory use, `requisitos
 * habilitantes` → eligibility requirements, `factor de escogencia` →
 * selection criterion, `registro único de proponentes` conservado y glosado,
 * `concurso de méritos` conservado y glosado, `capacidad residual` conservada.
 *
 * Términos que esta pieza añade al corpus:
 * `documento base` → base document, conservado en cursiva conceptual porque es
 * el nombre de una pieza del paquete; `matriz de experiencia` → experience
 * matrix; `formato` → form y `formulario` → schedule, que es la distinción que
 * hacen los propios documentos y que en inglés se pierde si los dos se
 * traducen igual; `subsanar` → cure a defect / remedy, con la construcción
 * completa la primera vez porque no hay un verbo inglés corriente que lo
 * cubra; `causal de rechazo` → ground for rejection; `presupuesto oficial` →
 * official budget; `salario mínimo` conservado como SMMLV y glosado;
 * `anticipo` → advance payment; `unión temporal` → temporary consortium;
 * `garantía de seriedad de la oferta` → bid bond, que es el término real, con
 * el español entre guiones la primera vez.
 *
 * Las leyes y decretos colombianos no se traducen —Ley 80 de 1993, Ley 2022 de
 * 2020, Decreto 1082 de 2015, Resolución 539 de 2025— y las fechas van al
 * formato inglés: «16 de febrero de 2026» es «16 February 2026».
 *
 * Cifras: `%` pegado y separadores invertidos. Los porcentajes 75%, 120% y
 * 150% no llevan separador decimal y pasan tal cual.
 *
 * **La sección final se traduce entera**, incluida la declaración de que los
 * ejemplos numéricos salen de un documento base real y no de la versión
 * vigente del proceso del lector. Es la advertencia que impide usar el
 * artículo como si fuera el pliego.
 */
export const traduccion: TraduccionPost = {
  slug: 'pliegos-de-un-equipamiento-publico',
  titulo: 'How the tender documents of a public building are put together',
  traducido: '2026-09-06',
  resumen:
    'Eighty pages and a single decision: bid or not. How standardised tender ' +
    'documents are assembled, in what order to read them, and where the ' +
    'conditions that disqualify you without showing it are hiding.',
  metaDescripcion:
    'How to read public works tender documents in Colombia: documentos tipo, ' +
    'experience, scoring, curing defects and grounds for rejection.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The tender documents for a public building run to between seventy ' +
        'and a hundred pages, plus annexes, plus spreadsheets, plus forms. And ' +
        'you have to extract one single decision from them: **bid or not.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Most teams read from the beginning, run out of steam somewhere in ' +
        'chapter three and decide on what they managed to see. It is the worst ' +
        'possible approach, because what decides the matter is spread across ' +
        'four places and none of them is the beginning.',
    },

    { tipo: 'titulo', texto: 'Since 2026, nearly every tender is the same tender' },
    {
      tipo: 'parrafo',
      texto:
        'This changed how you read. Since Ley 2022 de 2020, the national ' +
        'procurement agency adopts **documentos tipo** — standardised tender ' +
        'documents of compulsory use for every authority under the general ' +
        'procurement statute. They are no longer written authority by ' +
        'authority: they are forms.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the package that concerns public architecture is the ' +
        '**Documentos Tipo de Infraestructura Social**, whose current version ' +
        'was adopted by Resolución 539 de 2025 — alongside other resolutions ' +
        'in the same package for the other procedures — and which **applies to ' +
        'processes whose notice of call is published from 16 February 2026**. ' +
        'It covers five subsectors: education, health, recreation and sport, ' +
        'institutional buildings and housing. Which is to say: schools, health ' +
        'centres, sports venues, administrative headquarters.',
    },
    {
      tipo: 'nota',
      texto:
        'From this comes the most useful reading technique I know. The ' +
        'documentos tipo carry a **rule of unalterability**: the authority may ' +
        'not modify the eligibility requirements, the selection criteria or ' +
        'the weighting systems. The only thing it may fill in are **the spaces ' +
        'in square brackets, highlighted in grey**. So open the base document, ' +
        'find the brackets and read those first: that is, literally, ' +
        'everything that distinguishes this process from any other in the ' +
        'country. The rest is text you have already read once and that will ' +
        'not change.',
    },

    { tipo: 'titulo', texto: 'The five parts of a standardised tender' },
    {
      tipo: 'tabla',
      cabeceras: ['Part', 'What it is', 'What to look for in it'],
      filas: [
        ['**Base document**', 'The tender documents proper: everything common to all processes and sectors', 'Grounds for rejection, rules on curing defects, evaluation and tie-break criteria'],
        ['**Annexes**', 'What the authority adapts to its own process', 'Technical annex — the real scope of the works — programme and draft contract'],
        ['**Forms**', 'What you fill in and sign; they form part of your bid', 'Covering letter, experience, financial and residual capacity, and the form for each scoring factor'],
        ['**Matrices**', 'Spreadsheets standardising whatever depends on the sector', 'The experience matrix and the financial indicators one; the risk matrix'],
        ['**Schedule**', 'The financial bid and its bill of quantities', 'The official budget, item by item'],
      ],
      nota:
        'Structure as described by the agency itself in its ABC of the ' +
        'documentos tipo. The numbering of annexes and forms varies between ' +
        'sectors and versions.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The part people underestimate is **the experience matrix**. It is a ' +
        'spreadsheet, it does not look like part of the tender documents, and ' +
        'yet it is what determines which experience the authority will verify ' +
        'according to the type of works, the specific activity and the value. ' +
        'Open it late and you open it when there is no time left to obtain a ' +
        'certificate.',
    },

    { tipo: 'titulo', texto: 'The order in which it is worth reading' },
    {
      tipo: 'parrafo',
      texto:
        'It is not the order of the contents page. It is the order of the ' +
        'decision, from what rules you out fastest to what rules you out ' +
        'slowest:',
    },
    {
      tipo: 'lista',
      items: [
        '**The programme.** It is an annex, not a chapter, and it fixes the closing date, the site visit and the windows for observations. If you do not have the time, that is where the reading ends.',
        '**Experience.** The eligibility requirements chapter, plus the experience matrix. It is where most bidders fall, and you can tell in twenty minutes.',
        '**Financial and organisational capacity.** The indicators in the matrix, against your accounts for the year the process requires. It is arithmetic: it works or it does not.',
        '**The scoring factors.** Here the question is not whether you can, but how much you will score. And it is the only part of the tender that **cannot be corrected afterwards**.',
        '**The grounds for rejection.** They sit near the start of the base document and almost nobody reads them, because they sound like a formality. They are not.',
        '**The technical annex and the official budget.** What the works actually are, with what quantities and at what rates. This is the part that decides whether the contract can be delivered without losing money.',
        '**The risk matrix and the draft contract.** What has been transferred to you, what bonds you will be asked for and how you will be paid.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The order matters because each step costs more than the one before. ' +
        'Reading the technical annex of a process you cannot bid for on ' +
        'experience grounds is two days of somebody’s work. **If step 2 does ' +
        'not work, there is no step 3.**',
    },

    { tipo: 'titulo', texto: 'Experience: where most bidders fall' },
    {
      tipo: 'parrafo',
      texto:
        'Experience is evidenced by three things at once: what is recorded in ' +
        'the **registro único de proponentes** — the national register of ' +
        'bidders — the experience form you fill in, and the documents ' +
        'supporting whatever the register does not prove on its own. The ' +
        'assessment is made on the register **current and final before the ' +
        'closing date**, not on what you have actually built.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And having built is not enough. The tender separates **principal ' +
        'activity from secondary activities**, and within the principal one, ' +
        '**general experience from specific experience**. A process for a ' +
        'school may ask, as general experience, for construction or extension ' +
        'or refurbishment of buildings; and as specific experience, that at ' +
        'least one of those contracts covered a floor area equal to or greater ' +
        'than a percentage of the area of this process. The secondary ' +
        'activities are separate: roofing, data networks, whatever the ' +
        'technical annex demands.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The second condition is about value, and it works the opposite way ' +
        'round to how people assume: **the more contracts you use to evidence ' +
        'it, the higher the total value you have to reach.** Piling up ' +
        'paperwork is not rewarded.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Contracts used as evidence', 'Minimum value to certify'],
      filas: [
        ['From 1 to 2', '75% of the official budget'],
        ['From 3 to 4', '120% of the official budget'],
        ['Up to 5', '150% of the official budget'],
      ],
      nota:
        'Example taken from a real base document for a public works tender in ' +
        'social infrastructure. The percentages and the maximum number of ' +
        'contracts depend on the version of the documento tipo, and there are ' +
        'additional contracts for small businesses and for women-owned ' +
        'enterprises. Check them in the tender for your own process.',
    },
    {
      tipo: 'nota',
      texto:
        'Two details that get overlooked. First: **the sum is worked out in ' +
        'SMMLV — legal monthly minimum wages — not in pesos.** A contract from ' +
        'eight years ago is worth less than you remember. Second: if you fail ' +
        'to fill in the experience form, the authority does not reject you ' +
        'outright — it asks you to remedy the defect — but if you do not, it ' +
        'assesses you on the highest-value contracts you submitted, which are ' +
        'almost never the ones that suited you.',
    },

    { tipo: 'titulo', texto: 'What can be remedied and what cannot' },
    {
      tipo: 'parrafo',
      texto:
        'This is the most important line in the whole tender, and the one ' +
        'that produces the most expensive surprises:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Can be remedied', 'Cannot be remedied'],
      filas: [
        ['**What**', 'Requirements that make you eligible but carry no score', 'Anything affecting the award of points, including tie-break documents'],
        ['**By when**', 'Up to the end of the period for comment on the evaluation report', 'It had to be in the bid on the closing date'],
        ['**What is still allowed after**', 'Submitting the missing document', 'Clarifying or explaining what was submitted, but not submitting it'],
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And there is a limit that closes the door on creativity: **during ' +
        'the period allowed for remedying defects you cannot rely on ' +
        'circumstances arising after the closing date.** Obtaining the new ' +
        'certificate that week does not help, nor does registering the ' +
        'experience then. What did not exist on the closing date does not ' +
        'exist.',
    },

    { tipo: 'titulo', texto: 'The conditions that disqualify you without showing it' },
    {
      tipo: 'parrafo',
      texto:
        'Grounds for rejection sound like paperwork until one of them ' +
        'catches you. These are the ones I have seen bring down technically ' +
        'sound bids:',
    },
    {
      tipo: 'lista',
      items: [
        '**The register of bidders is not final on the closing date.** Registering is not enough: the entry has to be final, and that takes time.',
        '**You did not renew the register** by the fifth working day of April. If you did not, its effects lapsed and you are out of every process that year until you register again.',
        '**Your objects clause does not allow you to perform the contract**, or that of one of the members of the temporary consortium. It is a paragraph in the certificate of incorporation and it is fixed by amending the articles, months in advance.',
        '**You did not submit the bid bond — garantía de seriedad — with the bid.** This one cannot be remedied, and the statute says so expressly.',
        '**The bid exceeds the official budget.** Even slightly, and even if everything else is impeccable.',
        '**Crossings-out or alterations not validated** in documents evidencing eligibility requirements or evaluation factors.',
        '**You modified the budget schedule**: added, removed or changed items, descriptions, units or quantities. The schedule is filled in, not improved.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The first three have something in common: **they cannot be sorted ' +
        'out in the week of the closing date.** They are months of prior work, ' +
        'and they are precisely what separates a team that bids when a process ' +
        'appears from one that prepares to bid.',
    },

    { tipo: 'titulo', texto: 'Time limits: those of the process and that of the works' },
    {
      tipo: 'parrafo',
      texto:
        'There are two kinds of time limit in a tender and they are worth not ' +
        'confusing. Those of the process are set by regulation and are the ' +
        'same across the country:',
    },
    {
      tipo: 'lista',
      items: [
        'Observations on the draft tender documents: **ten working days in open tendering** and **five working days in abbreviated selection and the concurso de méritos**, from publication.',
        'In a concurso de méritos the evaluation report is published for **three working days** and must contain both the eligibility requirements and the award of points.',
        'The **site visit** has a date and time fixed in the programme. A delegate holding a professional licence may attend; it need not be the legal representative.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The other limit, the delivery period, is not set by regulation: the ' +
        'authority chose it. And it is the one that ruins the most contracts. ' +
        'Signs that a period is not realistic:',
    },
    {
      tipo: 'lista',
      items: [
        '**The programme does not acknowledge the rainy season** at the site. Across much of the country that means two windows a year, not an inconvenience.',
        '**The period includes approvals that do not depend on the contractor**: licences, discharge permits, easements, utility company sign-off. If that sits inside the period and is not already resolved, the delay will be yours.',
        '**There is no time allowed for approving designs or surveys** between signature and start on site, where the scope includes them.',
        '**No advance payment is provided for, or it is paid late**, and the first quarter’s cash flow depends on you funding it.',
        '**The period is the same as an earlier process by the same authority that was extended twice.** That is public and can be checked.',
      ],
    },

    { tipo: 'titulo', texto: 'If the subject matter is design, the tender is a different one' },
    {
      tipo: 'parrafo',
      texto:
        'Everything above describes a works tender. When the subject matter ' +
        'is surveys and designs, the procedure changes: it is a **concurso de ' +
        'méritos**, and with it changes the most important rule of all — ' +
        '**price cannot be a selection criterion for engaging consultants.** ' +
        'How that procedure works from the inside is set out in [the article ' +
        'on public architectural competitions]' +
        '(/blog/concursos-publicos-de-arquitectura).',
    },
    {
      tipo: 'parrafo',
      texto:
        'What is worth keeping in mind when reading a concurso de méritos ' +
        'tender: the regulation obliges the authority to state how it will ' +
        'score, among other things, **the bidder’s experience, the team’s ' +
        'experience and the team’s academic qualifications**. Which means the ' +
        'CVs are not an administrative annex: they are part of the score, and ' +
        'therefore they cannot be remedied later.',
    },
    {
      tipo: 'nota',
      texto:
        'Interventoría is consultancy too, and it also goes through a ' +
        'concurso de méritos, with the same consequences. The regime governing ' +
        'it is in [interventoría of public works]' +
        '(/blog/interventoria-de-obra-publica).',
    },

    { tipo: 'titulo', texto: 'The decision, in five questions' },
    {
      tipo: 'lista',
      items: [
        '**Is the register of bidders final, renewed, and with the experience correctly classified?** If the answer is not an emphatic yes, nothing else matters.',
        '**Do the contracts you will submit add up to the required percentage, in SMMLV, and do they meet the principal and secondary activities?**',
        '**Do the financial indicators work with the accounts the process requires?**',
        '**What score will you realistically get, and which scoring forms must be ready on the closing date?** Remember: those cannot be remedied.',
        '**Do the period and the official budget allow the works to be delivered without losing money?** That one is answered with the technical annex and the budget schedule, not with the summary of the process.',
      ],
    },

    { tipo: 'titulo', texto: 'What this article does not say' },
    {
      tipo: 'parrafo',
      texto:
        'I declare the gaps, as elsewhere on this blog:',
    },
    {
      tipo: 'lista',
      items: [
        '**I do not give the specific score for each factor.** They change with the version of the base document and with what the authority fills in within the permitted ranges. What is stable are the families of factors: financial bid, quality, sustainability, support for national industry, employment of people with disabilities, women-owned enterprises and start-ups, and small businesses.',
        '**I verified the text of Resolución 539 de 2025**, which adopted the current version of the documentos tipo for public works tendering in social infrastructure. The other resolutions in the same package, for the other procedures, I take from the agency’s official announcement and not from their text.',
        '**The numerical examples on experience come from a real base document**, not from the version in force for your process. They are there to explain the mechanism, not to do your sums.',
        '**I do not set out how the procurement platform operates.** It changes with its versions and I did not verify it against current official documentation.',
        '**I do not go into the regime of special-regime entities**, which apply the documentos tipo only where the law requires them to.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The practical conclusion is uncomfortable, which is why it is worth ' +
        'saying: **you do not win a tender by reading it well, you win it by ' +
        'being ready before it appears.** The register in order, the ' +
        'certificates stating areas and scope, the indicators up to date and ' +
        'the scoring forms prepared. What you decide by reading is only ' +
        'whether the next three weeks are worth spending.',
    },
  ],
}
