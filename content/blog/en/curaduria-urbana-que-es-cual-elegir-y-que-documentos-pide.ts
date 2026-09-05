import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Curaduría urbana: qué es, cuál elegir y qué documentos pide».
 *
 * Es la pieza que más andamiaje necesita para el lector de fuera, porque la
 * figura central no existe en casi ningún otro país: un particular que ejerce
 * una función pública y expide licencias de construcción. Se glosa en la
 * primera mención y después se conserva el término español, igual que
 * `expensas`, `estrato` y `propiedad horizontal`.
 *
 * Las dos declaraciones de método del original se traducen enteras: la
 * ecuación de las expensas **sigue sin transcribirse** —en la fuente oficial va
 * como imagen— y el criterio para escoger curaduría sigue rotulado como
 * criterio de oficio y no como norma.
 *
 * Las cifras son las mismas y los separadores cambian: «8,34 UVT» es «8.34
 * UVT», «0,938» es «0.938», «1,00 × 0,70 m» es «1.00 × 0.70 m» y «20.000 m²»
 * es «20,000 m²».
 */
export const traduccion: TraduccionPost = {
  slug: 'curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide',
  titulo: 'The curaduría urbana: what it is, which to choose, what it asks for',
  traducido: '2026-09-05',
  resumen:
    'A curador is not a department of the town hall, and you pick which one. ' +
    'What they do, how the charges are assessed in UVT, what they cannot ' +
    'charge you for — starting with verbal enquiries — and what documents ' +
    'you have to bring.',
  metaDescripcion:
    'What a curaduría urbana does, how you choose one, how its charges are ' +
    'assessed in UVT and what documents a building permit asks for.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Almost everybody arrives at a curaduría urbana believing two things ' +
        'that are false: that it is a department of the town hall, and that ' +
        'they were given that one because it matches their address.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Neither is true. A curador urbano is a private individual ' +
        'exercising a public function, and, bar two exceptions, **you choose ' +
        'which one**.',
    },

    { tipo: 'titulo', texto: 'What a curador urbano exactly is' },
    {
      tipo: 'parrafo',
      texto:
        'The legal definition is short and worth reading slowly: a private ' +
        'individual charged with studying, processing and issuing permits ' +
        'for the parcelling, urbanisation, construction and subdivision of ' +
        'land, at the request of the applicant. And the office involves ' +
        '**the exercise of a public function**: verifying that the project ' +
        'complies with the planning and building rules in force.',
    },
    {
      tipo: 'parrafo',
      texto: 'Three consequences follow, and they order the whole relationship:',
    },
    {
      tipo: 'lista',
      items: [
        '**They are autonomous.** They take no instructions from the town hall on how to resolve your case. And they are answerable in disciplinary, fiscal, civil and criminal terms for the harm they cause to users, to third parties or to the administration.',
        '**They do not interpret the rules.** They verify that the project agrees with the rules in force. Only where there is no exactly applicable rule, or where two rules contradict each other, does the power to interpret pass to the municipal planning office, which exercises it by circular.',
        '**They are not your adviser.** They review, they raise observations and they decide. Designing the project so that it complies is not their job, and confusing the two is the commonest cause of a procedure that drags on.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'To be appointed curador you have to be an architect, an engineer or ' +
        'a postgraduate in urbanism or planning, evidence ten years of ' +
        'experience and keep an interdisciplinary support team. That team is ' +
        'compulsory and its minimum composition is fixed by rule: **legal, ' +
        'architectural, and civil engineering specialised in structures**. ' +
        'That is why your project gets reviewed on four fronts at once.',
    },

    { tipo: 'titulo', texto: 'Which one to choose, and why you get to choose' },
    {
      tipo: 'parrafo',
      texto:
        'The freedom to choose is not a custom: it follows from two written ' +
        'rules.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**The first is jurisdiction.** A curador urbano’s jurisdiction ' +
        'covers the whole territory of the municipality or district, save ' +
        'for the areas that the planning rules mark as unfit for urban ' +
        'development or subject to special restrictions. There are no ' +
        'curadores "by zone": every one of them can act across the whole ' +
        'municipality.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**The second is allocation.** The rule submits to compulsory ' +
        'allocation among the different curadores only two classes of ' +
        'application:',
    },
    {
      tipo: 'lista',
      items: [
        'Those filed by **state entities**.',
        'Those for **individual social housing**, filed by entities or by private persons.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'If your case is neither of those two, there is no allocation to ' +
        'assign you anywhere. You file where you decide.',
    },
    {
      tipo: 'nota',
      texto:
        'And the decision has a tail to it: extensions, modifications and ' +
        'revalidations are processed before **the same curador who issued ' +
        'the permit**. Choosing well is not a one-day errand, it is choosing ' +
        'who you will be working with for as many years as the project ' +
        'lasts.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On what to look at when choosing, I offer this as professional ' +
        'judgement and not as rule: real response times, the support team’s ' +
        'experience with projects like yours, the clarity of the observation ' +
        'records they produce, and whether they work by electronic means. ' +
        'That last one is not a detail: the rule obliges them to enable ' +
        'electronic data transmission systems and to keep an electronic ' +
        'connection with the planning offices, and there are real ' +
        'differences between one office and another.',
    },
    {
      tipo: 'nota',
      texto:
        'The list of curadores appointed in each municipality is kept by the ' +
        'Superintendencia de Notariado y Registro, the body that supervises ' +
        'them in disciplinary matters. It is the source worth consulting ' +
        'before you file, because it shifts with each merit competition.',
    },

    { tipo: 'titulo', texto: 'How the charges are assessed' },
    {
      tipo: 'parrafo',
      texto:
        'The expensas are what the curador charges for providing the ' +
        'service: they cover the running costs of the office, the pay of the ' +
        'interdisciplinary team and the curador’s own remuneration. Since ' +
        '**Decreto 1890 de 2021** they are assessed in Unidad de Valor ' +
        'Tributario, the indexed tax unit, and no longer in minimum wages as ' +
        'before.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The formula for parcelling, urbanisation and building permits ' +
        'combines five components:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Component', 'What it is', 'Value'],
      filas: [
        [
          '**Cf** · fixed charge',
          'A single national rate paid on filing',
          '**10.01 UVT**',
        ],
        [
          '**Cv** · variable charge',
          'A single national rate on which the other factors operate',
          '**20.02 UVT**',
        ],
        [
          '**i** · use and stratum',
          'Housing, by stratum; other uses, by band of square metres',
          'Strata 1 and 2: 0.5 · stratum 3: 1.0 · stratum 4: 1.5 · stratum 5: 2.0 · stratum 6: 2.5',
        ],
        [
          '**m** · municipal factor',
          'According to the size of the market and the budget category of the municipality',
          'Bogotá, Cali and Medellín: 0.938 · Cartagena and Cúcuta: 0.900 · Barranquilla: 0.855 · Bucaramanga, Envigado, Ibagué and Pereira: 0.760 · Tuluá: 0.510',
        ],
        [
          '**j** · area factor',
          'It governs the relation between the charge and the square metres applied for',
          'Projects of up to 100 m²: **0.45**. Above that, it is worked out with the decree’s expressions according to the area',
        ],
      ],
      nota:
        'Decreto 1890 de 2021, article 1, which replaced article 2.2.6.6.8.3 ' +
        'of Decreto 1077 de 2015. The municipal factor table sits in article ' +
        '2.2.6.6.8.4 and covers the municipalities where curadores are ' +
        'competent; for a municipality appointing curadores for the first ' +
        'time, the Ministry of Housing fixes its factor by resolution.',
    },
    {
      tipo: 'nota',
      texto:
        'The complete equation is not transcribed here, and that is ' +
        'deliberate: in the official text it appears as an image, and ' +
        'writing it from memory would be inventing it. What can be verified, ' +
        'and what serves to check an assessment, are the five components ' +
        'above, with their values.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On the fixed charge there are two rules worth knowing before you ' +
        'file: **paying it is a condition for the application to be ' +
        'accepted**, and **it is not refunded** if the permit is refused or ' +
        'if you withdraw.',
    },

    { tipo: 'titulo', texto: 'The discounts that do exist' },
    {
      tipo: 'lista',
      items: [
        '**Social housing: 50%.** The charges are assessed at half, by mandate of article 11 of Ley 810 de 2003, which the decree itself invokes.',
        '**Public community facilities: 50%.** For every modality of building permit and for acts of recognition of public facilities for **health, education and social welfare** owned by public entities of any level.',
        '**Individual single-family or two-family social housing in strata 1, 2 and 3:** a single charge of **8.34 UVT** per dwelling unit, and assessed at 50% on top of that.',
        '**Adaptation with no execution of works:** only the fixed charge is paid, and assessed at 50%.',
        '**Restoration, reconstruction, modification and structural strengthening:** the charges are assessed on **30%** of the area to be intervened.',
      ],
    },

    { tipo: 'titulo', texto: 'The other procedures, with their rate' },
    {
      tipo: 'tabla',
      cabeceras: ['Procedure', 'Charge'],
      filas: [
        ['Written ruling on the planning rules', '**8.34 UVT**'],
        ['Written ruling on land use', '**1.67 UVT**'],
        ['Certified copy of drawings', '**0.834 UVT** per drawing'],
        ['Subdivision permit, urban or rural', '**25.02 UVT**, single charge'],
        ['Extension or revalidation of a permit', '**25.02 UVT** · social housing: 1.67 UVT'],
        ['Approval of horizontal-property drawings', 'From 6.26 UVT up to 250 m², to 125.11 UVT above 20,000 m²'],
        ['Authorisation of earthworks and swimming pool construction, with more than 3 m of excavation', 'From 1.67 UVT up to 100 m³, to 125.11 UVT above 20,000 m³'],
        ['Modification of an urbanisation plan', '**25.02 UVT**'],
      ],
      nota:
        'Decreto 1890 de 2021, articles 2 to 5. These charges are levied ' +
        '"provided that they are carried out independently of the issue of ' +
        'the permit".',
    },

    { tipo: 'titulo', texto: 'What they cannot charge you for' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part of the decree that gets cited least and saves the ' +
        'most money.',
    },
    {
      tipo: 'cita',
      texto:
        'Verbal enquiries about general information on the planning rules in ' +
        'force in the municipality or district shall not generate charges in ' +
        'favour of the curador urbano.',
      fuente:
        'Decreto 1077 de 2015, art. 2.2.6.6.8.15, paragraph 1, as worded by Decreto 1890 de 2021',
    },
    {
      tipo: 'parrafo',
      texto:
        'In other words: asking is free. What triggers a charge is the ' +
        '**written ruling** — on the planning rules or on land use — which ' +
        'is another thing and serves another purpose. Going to ask before ' +
        'commissioning a design costs nothing, and it is the step most ' +
        'projects skip.',
    },
    {
      tipo: 'parrafo',
      texto: 'And there are three more prohibitions, all in the same articles:',
    },
    {
      tipo: 'lista',
      items: [
        '**The charges are the only ones.** They are regulated in the decree, assessed by the curador and paid by the applicant. There is no second list.',
        '**They cannot charge for other items.** Until the Ministry of Housing approves by resolution charges for new procedures, curadores "may not make charges for items other than those established in the present decree, on pain of such liability as may arise from that conduct".',
        '**Nor fees on top of their remuneration**, with one single exception provided by the rule: where the curador acts as independent reviewer of structural designs, in which case that remuneration is agreed separately.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And a transparency duty almost nobody enforces: curadores have to ' +
        'keep **in a visible place and available to interested parties**, ' +
        'without looking at it involving any payment, the fixed charge, the ' +
        'variable charge, the charges for other procedures, the equation and ' +
        'the factor tables. If it is not on display, ask for it.',
    },

    { tipo: 'titulo', texto: 'Taxes are not charges' },
    {
      tipo: 'parrafo',
      texto:
        'The most expensive confusion in the whole procedure. The taxes, ' +
        'levies, rates, participations and contributions attached to the ' +
        'permit — starting with the municipal urban delineation tax — are ' +
        '**independent** of the curaduría charges and are not paid to the ' +
        'curador.',
    },
    {
      tipo: 'parrafo',
      texto:
        'But they do condition the permit: the curador may only issue it ' +
        'once the applicant proves the taxes were paid, and there are ' +
        '**thirty working days** from being required to do so. Within that ' +
        'same period the variable charge has to be paid to the curador.',
    },

    { tipo: 'titulo', texto: 'And if your municipality has no curador' },
    {
      tipo: 'parrafo',
      texto:
        'Many Colombian municipalities have no appointed curador. There the ' +
        'permit is issued by the competent municipal authority — normally ' +
        'the planning secretariat or directorate — and there is a direct ' +
        'economic consequence, written without ambiguity:',
    },
    {
      tipo: 'cita',
      texto:
        'In no case are the municipal or district authorities in charge of ' +
        'the study, processing and issue of permits authorised to make ' +
        'charges for expensas.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.6.8.1, paragraph 4',
    },
    {
      tipo: 'parrafo',
      texto:
        'No curador, no charges. The municipal taxes remain, and they remain ' +
        'a requirement for the permit to be issued: **it is not a free ' +
        'procedure, it is a procedure without that one component**.',
    },
    {
      tipo: 'nota',
      texto:
        'There is an intermediate case worth knowing: where a municipality ' +
        'appoints **a single curador**, the municipal body in charge of ' +
        'issuing permits carries on providing the service in parallel, but ' +
        'then charges **the same expensas** as are set for the curador. And ' +
        'where a municipality appoints curadores and opts for them ' +
        'exclusively, it has to guarantee that at least two provide the ' +
        'service.',
    },

    { tipo: 'titulo', texto: 'What documents it asks for' },
    {
      tipo: 'parrafo',
      texto:
        'The base list is fixed by the Ministry of Housing by resolution, ' +
        'and the rule is blunt on one point worth keeping to hand: permits ' +
        '**must be filed and resolved exclusively with the requirements ' +
        'fixed by that resolution**. If you are asked for something that is ' +
        'neither there nor in the national, planning or heritage rules, ask ' +
        'where it comes from.',
    },
    {
      tipo: 'parrafo',
      texto: 'On top of that base, a building permit calls for:',
    },
    {
      tipo: 'lista',
      items: [
        '**The architectural project**, titled and signed by an architect with professional registration, who thereby becomes legally responsible for the designs and for the information. It has to contain at least the location, plans, elevations or sections relating to the street, façades, roof plan and schedule of areas. If the plot slopes, the sections have to show the real slope of the ground.',
        '**The structural drawings**, signed and titled by the professional who prepared them. In projects of greater complexity the calculation memorandum, the design memoranda for the non-structural elements and **the geotechnical and soil surveys** are added.',
        '**The earlier permits and their drawings**, if the application is filed before an authority other than the one that granted the original. If they do not exist, recognition of the building has to be obtained first. This does not apply to new build.',
        '**The concept design approved by the heritage authority**, if the property is listed cultural property.',
        '**The authorisation record of the competent body of the co-ownership**, where the case is an extension, adaptation, modification, structural strengthening or demolition in a property under horizontal property, the Colombian condominium regime.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'In cities where a virtual search is available, the curador is ' +
        '**obliged to verify by those means** the information on the title ' +
        'certificate and on the identification of the property at the moment ' +
        'of filing, and that search replaces the applicant producing the ' +
        'document. It is one errand fewer that many still run out of habit.',
    },

    { tipo: 'titulo', texto: 'How the procedure runs, and where it gets stuck' },
    {
      tipo: 'lista',
      items: [
        '**Filing**, which requires payment of the fixed charge. The time limits do not start running with filing as such, but when the application is filed **in legal and due form**. That distinction explains most of the deadlines that "were not met".',
        '**Site board and notice to neighbours.** From the day after filing, a board has to go up, yellow background and black letters, at least 1.00 × 0.70 m, with a photograph of it annexed to the file within the following five working days, **on pain of the application being deemed withdrawn**. In parallel, the curador notifies the adjoining neighbours by certified post.',
        '**Review.** Legal, planning, architectural and structural, including compliance with the NSR-10, the Colombian earthquake-resistant construction code, the structural designs, the geotechnical and soil surveys and the non-structural elements.',
        '**Record of observations and corrections.** It is drawn up **once only**, where there is cause for it. If the applicant does not respond within the time limits, the application is deemed withdrawn and the file is closed.',
        '**Assessment of taxes and payment.** Thirty working days, and without that payment there is no permit.',
        '**Issue.** The legal time limit to rule is **forty-five working days** from the application, extendable by up to half as much again by reasoned decision. Once it expires with no ruling, **positive administrative silence** operates in the applicant’s favour.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'One fact worth having clear from the outset, because it changes the ' +
        'programme: a building permit in the **new build** modality is valid ' +
        'for **thirty-six months**, extendable by twelve more. The other ' +
        'modalities — extension, adaptation, modification, restoration, ' +
        'strengthening, demolition — last **twenty-four**. The extension has ' +
        'to be requested at the latest thirty working days before expiry.',
    },

    { tipo: 'titulo', texto: 'What to do before filing' },
    {
      tipo: 'lista',
      items: [
        '**Go and ask.** The verbal enquiry about planning rules in force is free by rule. Make it before commissioning the design, not after.',
        '**Ask for the schedule of rates.** They have to keep it on display, and looking at it costs nothing. With the five components of the formula you can check the assessment you are handed.',
        '**Choose a curador on the merits**, knowing you are going to stay with them for the extensions and modifications.',
        '**File complete.** The record of observations is drawn up once only, and every correction cycle costs weeks.',
        '**Budget the taxes separately**, and with cash available: they turn up late in the procedure and carry a short deadline.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'All of the above is transcribed from the articles in force. The ' +
        'values run in UVT because that is how the rule sets them: their ' +
        'equivalent in pesos changes every year.',
    },
  ],
}
