import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Cuánto cobra un arquitecto en Colombia».
 *
 * Las dos negativas del original se traducen enteras, porque son lo que
 * sostiene la pieza: **no se afirma** que la Superintendencia de Industria y
 * Comercio haya objetado el Decreto 2090, y el 9,1 % va rotulado como cálculo
 * propio sobre la única metodología publicada, no como tarifa vigente. Ninguna
 * de las dos se suaviza y no se añade ningún rango de mercado.
 *
 * Contexto añadido para el lector de fuera, que aquí es casi todo: qué es una
 * curaduría urbana, qué es el CPNAA, qué es la UVT, qué es el estrato y qué es
 * el Gestor Normativo. Sin ese andamiaje, media pieza no se entiende fuera de
 * Colombia.
 *
 * Los separadores cambian de bando: «$52.374» es «$52,374», «1.000 m²» es
 * «1,000 m²» y «7,0 %» es «7.0%». Los nombres de las normas y de las
 * instituciones van sin traducir, glosados la primera vez.
 */
export const traduccion: TraduccionPost = {
  slug: 'cuanto-cobra-un-arquitecto',
  titulo: 'What an architect charges in Colombia',
  traducido: '2026-09-05',
  resumen:
    'Nobody publishes prices, and the two guides in circulation contradict ' +
    'each other by a factor of three. What does exist: a methodology with a ' +
    'breakdown by stage, and a law that explains why half of what you pay is ' +
    'not the architect’s fee.',
  metaDescripcion:
    'How architectural fees are calculated in Colombia, how they are split ' +
    'by stage, and which costs sit outside the fee altogether.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Search for "how much does an architect charge in Colombia" and you ' +
        'will find two guides from 2026, both with an air of authority, ' +
        'saying this:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Source', 'Per square metre', 'As a percentage of the works'],
      filas: [
        ['Commercial guide A', '$80,000 – $180,000', '6% – 12%'],
        ['Commercial guide B', '$40,000 – $55,000 (basic housing)', '3% – 5%'],
      ],
      nota:
        'Same country, same year. The floor of one nearly doubles the ' +
        'ceiling of the other. **Neither of them cites a source, a study, a ' +
        'survey or a methodology.** One calls its figures "indicative ' +
        'averages".',
    },
    {
      tipo: 'parrafo',
      texto:
        'I am not going to add a third unsupported figure. I am going to ' +
        'explain what does exist: **a published methodology with a breakdown ' +
        'by stage, and a law that explains why a good part of what you pay ' +
        'is not the architect’s fee.** With that you can assess any ' +
        'quotation, ours included.',
    },

    { tipo: 'titulo', texto: 'The decree everyone cites and that no longer binds' },
    {
      tipo: 'parrafo',
      texto:
        'Every conversation about architectural fees in Colombia ends up at ' +
        '**Decreto 2090 de 1989**. There are sites that republish its ' +
        'clauses — including the one saying that the fees set there "are the ' +
        'minimum that architects shall charge" — as though it were law in ' +
        'force and binding.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is not, and the story is more interesting than a plain "it was ' +
        'repealed".',
    },
    {
      tipo: 'parrafo',
      texto:
        'The decree **was never expressly repealed**: the Gestor Normativo, ' +
        'the government’s consolidated register of legislation, shows it ' +
        'without a single repeal note. What happened is that it was issued ' +
        'under a power granted by Decreto-Ley 222 de 1983, and that rule was ' +
        'repealed by Ley 80 de 1993. The decree was left with no footing. ' +
        'Lawyers call that **decaimiento**: an administrative act lapses ' +
        'when the statute it rested on disappears.',
    },
    {
      tipo: 'parrafo',
      texto: 'And a judge has already said so in as many words:',
    },
    {
      tipo: 'cita',
      texto:
        'Decreto 2090 de 1989 could be taken into account by state entities ' +
        'solely […] for the setting of fees as a technical criterion, on ' +
        'account of its specialised nature and by virtue of the principle of ' +
        'party autonomy, but in no case as a criterion of a binding ' +
        'character.',
      fuente:
        'Consejo de Estado, Sección Primera, judgment of 28 August 2020, ' +
        'case 25000-23-24-000-2012-00759-01',
    },
    {
      tipo: 'nota',
      texto:
        'There is another detail almost nobody mentions: the decree itself ' +
        'said it was "of compulsory application" only for architects ' +
        '**affiliated to the Sociedad Colombiana de Arquitectos**, the ' +
        'national architects’ society, and for official bodies. A private ' +
        'owner hiring a non-affiliated architect was never covered by it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is an underlying reason why it should not become binding ' +
        'again: the Superintendencia de Industria y Comercio, the ' +
        'competition authority, has fined trade bodies for setting minimum ' +
        'tariffs among their members. Its guidance on professional ' +
        'associations instructs them expressly not to speak of "minimum ' +
        'remuneration" or to recommend prices. A binding trade minimum is a ' +
        'cartel.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The Consejo Profesional Nacional de Arquitectura — a state body, ' +
        'not a private association — is clear about this. In August 2026 it ' +
        'launched a fee simulator and describes it as **"a reference and a ' +
        'guide"**, whose result is "freely accepted and negotiated between ' +
        'the parties".',
    },

    { tipo: 'titulo', texto: 'Even so, it is the only published methodology' },
    {
      tipo: 'parrafo',
      texto:
        'That it does not bind does not make it useless. It is the only ' +
        'Colombian source with a complete, verifiable methodology, and it is ' +
        'still the language in which fees get discussed. It works in two ' +
        'steps.',
    },
    { tipo: 'titulo', texto: 'Step 1: a percentage that falls as the size grows' },
    {
      tipo: 'tabla',
      cabeceras: ['Built area', 'Percentage of the construction cost'],
      filas: [
        ['The first 1,000 m²', '7.0%'],
        ['The next 4,000 m²', '5.0%'],
        ['The next 5,000 m²', '4.0%'],
        ['Beyond that', '3.0%'],
      ],
      nota:
        'Decreto 2090 de 1989, clause 1.2.1. It is tiered, not a single ' +
        'percentage.',
    },
    { tipo: 'titulo', texto: 'Step 2: a multiplier for the type of project' },
    {
      tipo: 'parrafo',
      texto:
        'The decree sorts projects into categories, from A to I, and applies ' +
        'a multiplier: 50% for the simplest, 100% for category D, and ' +
        '**130% for category E**. Restoration adds 20%; alterations and ' +
        'extensions, 10%.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Category E is, word for word, "projects of residences or ' +
        'single-family, two-family or three-family dwellings". **Your house ' +
        'is the most expensive category in the table**, and not out of ' +
        'caprice: a house carries more decisions per square metre than ' +
        'almost any other building.',
    },
    {
      tipo: 'dato',
      valor: '9.1%',
      etiqueta:
        'What the rule yields for a single-family house under 1,000 m²: 7% × ' +
        '130%. It covers the concept design, the full project and ' +
        'supervision.',
      fuente:
        'Our own calculation applying clauses 1.2.1 and 1.2.4 of Decreto ' +
        '2090 de 1989. It is not a rate in force: it is what the only ' +
        'published methodology gives.',
    },
    {
      tipo: 'nota',
      texto:
        'On what that percentage is calculated: the construction cost ' +
        'includes all the works chapters, the general expenses and the ' +
        'permit. **It excludes the land**, the financing costs and the ' +
        'conveyancing. If somebody calculates the fee on the project value ' +
        'with the site inside it, they are calculating on something else.',
    },

    { tipo: 'titulo', texto: 'How it is split by stage' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part most worth knowing, because it is what turns a ' +
        'contract into something verifiable. The decree splits the payment ' +
        'not by dates but **by deliverables**, and every one of them can be ' +
        'checked.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['On delivering', 'Cumulative share of the fee'],
      filas: [
        ['Basic scheme', '7%'],
        ['Concept design', 'up to 15%'],
        ['General drawings sufficient to file for the permit', 'up to 45%'],
        ['Permit obtained', '50% to 60%, depending on how hard the procedure was'],
        ['Complete drawings and details', '80% to 90%'],
        ['Architectural supervision during the works', 'the remaining 10%'],
      ],
      nota:
        'Decreto 2090 de 1989, clause 1.2.4.2. Ten per cent of the project ' +
        'fee is held back and paid during the works: it is what keeps the ' +
        'architect interested in what was drawn being buildable.',
    },
    {
      tipo: 'parrafo',
      texto: 'And what each of those is, in the rule’s own words:',
    },
    {
      tipo: 'lista',
      items: [
        '**Basic scheme:** the general outline, which can be done even without the final site. Zones, entrances, how the rooms relate to one another.',
        '**Concept design:** plans, sections and elevations enough to understand the building, **not including drawings for executing the works**. It is where things are decided, not where they are built.',
        '**Architectural project:** "all the information necessary for the construction to be executed correctly". Detail drawings of joinery, stairs, bathrooms, façades, tiling, ceilings and floors; specifications; coordination of the engineering drawings; and the procedure before the authority.',
        '**Architectural supervision:** site visits, choosing finishes, resolving questions of interpretation. The rule is blunt: the architect supervises their project and **does not technically direct the works**. Those are two separate contracts.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Supervision cannot be excluded from the contract nor contracted ' +
        'with an architect other than the author of the project. And if the ' +
        'works are never built, that fee is not paid. It is the only part of ' +
        'the fee that depends on you building.',
    },

    { tipo: 'titulo', texto: 'What the fee does not include, and why' },
    {
      tipo: 'parrafo',
      texto:
        'Here is the commonest objection — "why am I charged all that ' +
        'separately?" — and its answer, which is not commercial but legal.',
    },
    {
      tipo: 'cita',
      texto:
        'The designer must be a civil engineer in the case of structural ' +
        'designs and geotechnical surveys, and an architect or a civil or ' +
        'mechanical engineer in the case of designs of non-structural ' +
        'elements.',
      fuente: 'Ley 400 de 1997, article 26',
    },
    {
      tipo: 'parrafo',
      texto:
        '**An architect cannot sign the structural design or the soil ' +
        'survey.** It is not unwillingness: the law reserves those ' +
        'signatures to a civil engineer, and whoever signs is legally ' +
        'answerable. If somebody offers you "all inclusive" at a ' +
        'suspiciously round price, ask who signs each drawing.',
    },
    {
      tipo: 'parrafo',
      texto: 'What sits outside the fee, and whose signature each one carries:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Item', 'Who does it', 'Note'],
      filas: [
        ['Soil survey', 'Geotechnical civil engineer', 'Required by Title H of the NSR-10'],
        ['Structural design', 'Civil engineer', 'Ley 400, art. 26'],
        [
          'Independent review of the structural designs',
          'Another engineer, not the designer',
          '**At the cost of whoever applies for the permit**, compulsory above 2,000 m² and in schemes of five dwellings or more',
        ],
        ['Topographic survey', 'Surveyor', 'At the owner’s expense'],
        [
          'Electrical design',
          'Electrical engineer',
          'Without proof of conformity, the network operator will not energise the installation',
        ],
        [
          'Gas design',
          'Specialist',
          'The design has to be approved by the distributor, and before service a certificate from an accredited body is required',
        ],
        ['Bonds, copies, models, laboratory tests', '—', 'Reimbursable, at the owner’s expense'],
      ],
      nota:
        'Decreto 2090 says so itself in its clause 0.8: the engineering ' +
        'studies "shall be paid by the contracting entity and their value is ' +
        'not comprised within the architect’s fees".',
    },
    {
      tipo: 'nota',
      texto:
        'One figure that helps calibrate: structural design **does have an ' +
        'official minimum fee**, set in 2017 by the Comisión Asesora ' +
        'Permanente, the standing state commission on earthquake-resistant ' +
        'construction, as a function of the minimum wage and the degree of ' +
        'complexity. One- and ' +
        'two-storey housing has its own grade. In practice the market tends ' +
        'to charge below that minimum.',
    },

    { tipo: 'titulo', texto: 'The two costs that are not fees and everyone confuses' },
    { tipo: 'titulo', texto: 'The curaduría charges' },
    {
      tipo: 'parrafo',
      texto:
        'This is what the curador urbano — the private official who issues ' +
        'building permits in Colombia — charges for studying the ' +
        'application. Since December 2021 those charges are assessed in ' +
        '**UVT**, the tax value unit, and no longer in minimum wages: any ' +
        'table still in minimum wages is obsolete.',
    },
    {
      tipo: 'dato',
      valor: '$52,374',
      etiqueta:
        'The value of the UVT for 2026. It is the basis of the whole ' +
        'assessment.',
      fuente:
        'Resolución 000238 of the DIAN, the national tax authority, of 15 ' +
        'December 2025. Careful: several sources published this figure in ' +
        'November as a projection, before the resolution existed.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The formula has a fixed charge and a variable one, affected by the ' +
        'use, the socio-economic stratum, the area and a municipal factor, ' +
        'plus 19% VAT. To give a sense of scale, a dwelling of up to 100 m² ' +
        'in Bogotá, with VAT: around **$556,000** in strata 1 and 2, ' +
        '**$1,112,000** in stratum 3, and up to **$2,780,000** in stratum 6.',
    },
    {
      tipo: 'nota',
      texto:
        'Two useful things. Verbal enquiries about planning rules are **free ' +
        'of charge**, and curadores cannot charge for items other than those ' +
        'the decree fixes. And in municipalities with no curador urbano — ' +
        'where the permit is issued by the planning office — **charging ' +
        'these fees is forbidden**.',
    },
    { tipo: 'titulo', texto: 'The urban delineation tax' },
    {
      tipo: 'parrafo',
      texto:
        'It is a **municipal** levy, so there is no national rate and each ' +
        'city structures it differently. In Bogotá the general rate is **3% ' +
        'on the works budget**, with an advance payment of **2.6% that has ' +
        'to be made before the permit is released**.',
    },
    {
      tipo: 'nota',
      texto:
        'It is not 5.6%: the advance is credited against the final tax. The ' +
        'base takes in labour, materials, plant, administration, profit and ' +
        'contingencies, and **excludes the land**. There are exemptions in ' +
        'force until 2029 for social housing, self-building in strata 1 and ' +
        '2, low-valuation improvements and the restoration of listed ' +
        'cultural property.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The practical difference: the curaduría charges scale with the ' +
        '**area** and the tax with the **budget**. In a house of 150 to 200 ' +
        'm², the tax tends to be an order of magnitude larger than the ' +
        'charges. And neither of the two is the architect’s money.',
    },

    { tipo: 'titulo', texto: 'How to check that your architect is one' },
    {
      tipo: 'parrafo',
      texto:
        'To practise in Colombia you need a degree **and** a professional ' +
        'registration card from the CPNAA, the national architecture ' +
        'council. And the law goes further: to enter into contracts you have ' +
        'to present the registration **and state its number in the ' +
        'contract**. If yours does not carry it, ask for it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The register is public and free, and it has a quirk worth knowing: ' +
        '**it cannot be searched by name**. You have to search by identity ' +
        'document number or by registration number. So ask your architect ' +
        'for one of the two — it is a perfectly normal question.',
    },
    {
      tipo: 'lista',
      items: [
        'A search of the register, by document or by registration number, in the CPNAA virtual office.',
        '**A Certificado de Vigencia Profesional**, free of charge: it evidences the registration and, on top of that, the **absence of sanctions**. It is the document worth asking for.',
        'The CPNAA publishes the **list of sanctioned professionals**, with name, registration number and suspension dates.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Two qualifiers. Practising architecture illegally is not a matter ' +
        'for the CPNAA but for the police authorities, and **it is not ' +
        'classified as a crime** — avoid repeating that. But anybody can ' +
        'bring a disciplinary complaint before the CPNAA against a ' +
        'registered architect. And without registration there is no permit: ' +
        'the project has to be signed by a registered architect, who is ' +
        'legally answerable.',
    },

    { tipo: 'titulo', texto: 'What the contract must say' },
    {
      tipo: 'parrafo',
      texto:
        'The fee rule requires that there be **a written record**, and the ' +
        'CPNAA insists that the contract agree the design phases. These are ' +
        'the clauses where arguments get lost.',
    },
    { tipo: 'titulo', texto: 'The revisions included' },
    {
      tipo: 'parrafo',
      texto:
        'No Colombian rule fixes a number of revisions. It is a commercial ' +
        'decision, and that is why it has to be written down. What the rule ' +
        'does give is who pays: **except for an error or omission by the ' +
        'architect**, every modification to the project is charged to the ' +
        'client. The distinction between "the architect got it wrong" and ' +
        '"the client changed their mind" is what keeps this out of court.',
    },
    { tipo: 'titulo', texto: 'Who owns the drawings' },
    {
      tipo: 'parrafo',
      texto:
        'Drawings are works protected by copyright, with no need for ' +
        'registration. The **moral rights** — being recognised as the author ' +
        '— are perpetual, inalienable and unwaivable. The **economic ' +
        'rights** can be assigned, but with two conditions almost nobody ' +
        'meets: the assignment **must be in writing** to be valid, and if it ' +
        'does not say for how long, **it is limited to five years**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is a special rule for architecture that surprises both ' +
        'parties:',
    },
    {
      tipo: 'cita',
      texto:
        'The author of an architectural project may not prevent the owner ' +
        'from introducing modifications to it, but shall have the power to ' +
        'forbid their name from being associated with the altered work.',
      fuente: 'Ley 23 de 1982, article 43',
    },
    {
      tipo: 'parrafo',
      texto:
        'In architecture, the author’s right that the work not be altered ' +
        'gives way to the right of property. What survives is the signature: ' +
        'the architect can demand that their name be taken off. The ' +
        'counterpart sits in the fee rule: the project **may only be used on ' +
        'the works for which it was commissioned**, not on another.',
    },
    { tipo: 'titulo', texto: 'What happens if you cancel' },
    {
      tipo: 'parrafo',
      texto:
        'The rule provides for it: the percentage corresponding to the work ' +
        'executed is charged, with a minimum covering the expenses plus 25%. ' +
        'And it adds a condition worth understanding before signing: ' +
        '**partial drawings may not be used to execute the works.** You ' +
        'cannot pay for the concept design, have somebody else finish it and ' +
        'build from that.',
    },

    { tipo: 'titulo', texto: 'What to ask on the first call' },
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
        'An architect who answers those six without discomfort is telling ' +
        'you something more important than their price.',
    },
    {
      tipo: 'parrafo',
      texto:
        'All of the above is verified against rules, judgments and official ' +
        'resolutions as at August 2026. The values in pesos — the UVT, the ' +
        'curaduría charges, the minimums tied to the minimum wage — change ' +
        'every year.',
    },
  ],
}
