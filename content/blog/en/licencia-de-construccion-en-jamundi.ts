import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Licencia de construcción en Jamundí: sin curaduría y sin
 * expensas».
 *
 * El vocabulario es el del pilar y viene del corpus, no de aquí: `expensas` →
 * curaduría charges, `impuesto de delineación` → delineation tax, `radicar en
 * legal y debida forma` → filing in legal and due form, `silencio
 * administrativo positivo` → positive administrative silence, `obra nueva` →
 * new build, `parcelación` conservado y glosado, `estrato` → stratum, `días
 * hábiles` → working days. La tabla de vigencias repite la de
 * `del-lote-a-la-licencia` casi palabra por palabra, y así se traduce: es la
 * misma tabla del mismo decreto.
 *
 * Las tres abstenciones del original se traducen enteras y sin suavizar: **no
 * encontré el acto administrativo** que fija los derechos de expedición,
 * **no puedo afirmar que la suspensión siga en los mismos términos** más allá
 * del segundo trimestre de 2025, y **cualquier fecha concreta de apertura de
 * la curaduría de Jamundí sería inventada**. Con ellas viaja la fecha de
 * caducidad que el artículo se pone a sí mismo.
 *
 * Contexto añadido para el lector de fuera: qué es Acuavalle, qué es una
 * acción popular y qué es el estrato. Los separadores cambian: «$585.000» es
 * «$585,000», «2,0 %» es «2.0%» y «0,03 UVT» es «0.03 UVT».
 */
export const traduccion: TraduccionPost = {
  slug: 'licencia-de-construccion-en-jamundi',
  titulo: 'The building permit in Jamundí: no curaduría, no charges',
  traducido: '2026-09-05',
  resumen:
    'Jamundí has no curador urbano, so the permit is issued by the ' +
    'municipality and no charges are payable. How much you really save, what ' +
    'you do have to pay, and why the real obstacle is not money but a water ' +
    'certificate.',
  metaDescripcion:
    'In Jamundí the permit is issued by the municipality and no curaduría ' +
    'charges are payable. What you do pay, and the real obstacle.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'In Cali, taking out a building permit goes through a curaduría ' +
        'urbana — a private office licensed by the state to issue permits — ' +
        'and costs money before anybody has looked at the project. In ' +
        'Jamundí, twenty minutes away, it does not.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is not a gap in the law or an odd exception: it is what the ' +
        'rules say when a municipality has no appointed curador. And it has ' +
        'a direct economic effect that almost nobody is counting. But **it ' +
        'does not make the procedure free**, and there is an obstacle a good ' +
        'deal more serious that hardly anybody talks about.',
    },

    { tipo: 'titulo', texto: 'Who issues the permit in Jamundí' },
    {
      tipo: 'parrafo',
      texto:
        'The [directory of curadores urbanos of the Superintendencia de ' +
        'Notariado y Registro](https://www.supernotariado.gov.co/superintendencia-delegada-para-curadores-urbanos/), ' +
        'updated in March 2026, carries two rows for Jamundí — Curaduría ' +
        'Urbana 1 and Curaduría Urbana 2 — and both say the same thing in ' +
        'every field: "No registra", nothing on record. No curador, no ' +
        'address, no telephone.',
    },
    {
      tipo: 'nota',
      texto:
        'The nuance matters: the two curadurías **exist in law and are ' +
        'vacant**. It is not that Jamundí cannot have them; it is that ' +
        'nobody is in them yet. Chía and Madrid, in Cundinamarca, are in the ' +
        'same position.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Where there is no curador, Decreto 1077 de 2015 assigns the ' +
        'competence to "the competent municipal or district authority". In ' +
        'Jamundí that is the **Secretaría de Planeación y Coordinación ' +
        'Municipal**, and this is not theory: in the second quarter of 2025 ' +
        'that department granted 76 planning permits, according to the ' +
        'report the municipality itself submitted to a court.',
    },

    { tipo: 'titulo', texto: 'Why no charges are payable' },
    {
      tipo: 'parrafo',
      texto:
        'The expensas are what a curador urbano charges for studying and ' +
        'resolving the application. A municipality that issues permits ' +
        'cannot levy them, and it is written without ambiguity in paragraph ' +
        '4 of article 2.2.6.6.8.1 of Decreto 1077 de 2015:',
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
        'And it needs no interpreting: [the Ministry of Housing itself ' +
        'publishes that very question](https://www.minvivienda.gov.co/node/1261) ' +
        '— whether permitting can be charged for in municipalities with no ' +
        'curador — and answers it by citing that paragraph.',
    },

    { tipo: 'titulo', texto: 'What that comes to in pesos' },
    {
      tipo: 'parrafo',
      texto:
        'To give it a size, this is how it is charged in Cali. Since Decreto ' +
        '1890 de 2021 the charges are assessed in UVT, the indexed tax unit, ' +
        'with a two-part formula: a **fixed charge** paid on filing, and a ' +
        '**variable charge** proportional to the area, both affected by the ' +
        'stratum and by a municipal factor.',
    },
    {
      tipo: 'dato',
      valor: '$585,000',
      etiqueta:
        'The fixed charge alone, with VAT, for a stratum 3 property in Cali ' +
        'in 2026. The variable charge by area comes on top.',
      fuente:
        'Table of fixed charges for 2026, Curaduría Urbana 3 of Cali, with ' +
        'that year’s UVT.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The fixed charge rises with the stratum: it is around $293,000 in ' +
        'strata 1 and 2 and passes $1,460,000 in stratum 6. And there is a ' +
        'detail worth knowing before filing in Cali: **the fixed charge is ' +
        'paid on filing and is not refunded** if the permit is refused or if ' +
        'the applicant withdraws.',
    },
    {
      tipo: 'parrafo',
      texto: 'In Jamundí that entire line item is zero.',
    },

    { tipo: 'titulo', texto: 'What you do pay' },
    {
      tipo: 'parrafo',
      texto:
        'This is where the headline falls short if you read it quickly. That ' +
        'there are no curaduría charges does not mean the procedure is free: ' +
        '**one component of the cost is missing, not all of them**. The ' +
        'municipal tax statute of Jamundí — Acuerdo 020 de 2017 — fixes the ' +
        'rest.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Item', 'How much', 'When'],
      filas: [
        [
          '**Urban delineation tax**',
          '2.0% on built area × reference value per m²',
          'Before the permit comes out. It is a condition of issuing it',
        ],
        [
          'Estampilla Pro-Cultura, the culture levy',
          '0.03 UVT per application',
          'With the application. It is token',
        ],
        [
          'Betterment levy on the uplift in land value',
          '30%, only where an assessment is recorded on the land registry folio',
          'Where it applies. It is the big charge',
        ],
      ],
      nota:
        'Acuerdo Municipal 020 of 22 November 2017, chapter XII. Watch the ' +
        'base of the tax: in Jamundí it is **area times the reference value ' +
        'per square metre**, not the construction budget. That is the Bogotá ' +
        'model, and confusing the two changes the figure completely.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The tax carries ten-year exemptions worth checking: properties hit ' +
        'by disasters, restoration of listed cultural property, ' +
        'self-building of social housing in strata 1 and 2, and extensions ' +
        'and adaptations in strata 1 and 2 below a certain valuation. And if ' +
        'the permit expires without the works being carried out, the tax is ' +
        'refunded, though without interest or indexation.',
    },
    {
      tipo: 'nota',
      texto:
        'A hole I declare rather than fill: the statement of reasons for the ' +
        'statute mentions that "the fees for issuing permits" are retained, ' +
        'but **I could not find the administrative act that fixes their ' +
        'rate**. There may be a counter charge that is not in this table. ' +
        'Before closing a budget, ring the planning department and ask about ' +
        'that line item.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What does **not** apply, in case you get charged for it: the ' +
        'Pro-Adulto Mayor levy and the Pro-Deporte rate fall on contracts ' +
        'with the municipality, not on permits. The Pro-Universidad levy ' +
        'does not exist in the municipal statute. And the fire-service ' +
        'surcharge is assessed with the annual property tax.',
    },

    { tipo: 'titulo', texto: 'The obstacle that does matter: water' },
    {
      tipo: 'parrafo',
      texto:
        'And here is what really decides whether your permit comes out, ' +
        'which has nothing to do with money.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In 2016 the environmental and agrarian public prosecutor for the ' +
        'Valle brought a class action against the Municipality of Jamundí, ' +
        'the CVC — the regional environmental authority — and Acuavalle, the ' +
        'regional water utility. The Juzgado Segundo Administrativo Oral de ' +
        'Cali gave judgment in November 2021 — Sentencia 125 — and the ' +
        'Tribunal Administrativo del Valle confirmed it in December 2022. It ' +
        'is a **judgment on the merits**, not an interim measure.',
    },
    {
      tipo: 'cita',
      texto:
        'The suspension of the issue of new planning permits to subdivide ' +
        'and to build, in all their modalities, is maintained in the urban ' +
        'area of the Municipality of Jamundí where the source of supply is ' +
        'Acuavalle S.A. E.S.P.',
      fuente: 'Sentencia 125 de 2021, third operative paragraph',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read the test carefully, because it is what hardly anybody explains ' +
        'properly: **the filter is not geographical, it is about utilities**. ' +
        'There are no forbidden districts. What decides is whether the plot ' +
        'has guaranteed supply, and that is proved with the certificate of ' +
        'availability. With it, you come in through one of the exceptions in ' +
        'the judgment; without it, you fall inside the suspension.',
    },
    {
      tipo: 'parrafo',
      texto: 'The exceptions the judgment itself left open include:',
    },
    {
      tipo: 'lista',
      items: [
        'Projects already approved with services guaranteed.',
        '**Strengthening, modification, extension, adaptation to another use and enclosure** of existing buildings. If your project is on what is already built, this covers you.',
        'Urban subdivision and construction with services guaranteed.',
        'Parcelación with availability guaranteed. On rural land a treatment plant of your own has to be evidenced.',
        'Works of general interest in health and education.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'That the suspension exists does not mean nothing is being ' +
        'permitted: 76 permits in a single quarter prove otherwise. It means ' +
        'that **the Acuavalle certificate is the first document to get hold ' +
        'of**, before commissioning a drawing.',
    },
    {
      tipo: 'nota',
      texto:
        'The most recent official document I could consult on compliance ' +
        'with this judgment is from the second quarter of 2025. There is no ' +
        'evidence that the suspension has been lifted, but neither can I ' +
        'assert that it continues on the same terms. Check it with the ' +
        'planning department before buying a plot on the assumption that it ' +
        'can be permitted.',
    },

    { tipo: 'titulo', texto: 'The time limits are the same as in Cali' },
    {
      tipo: 'parrafo',
      texto:
        'No curaduría does not mean a second-class procedure. The rule puts ' +
        'both authorities on the same clock:',
    },
    {
      tipo: 'cita',
      texto:
        'Curadores urbanos and the municipal or district body in charge of ' +
        'the study, processing and issuing of permits, as the case may be, ' +
        'shall have a maximum term of forty-five (45) working days to ' +
        'resolve applications […] Once that term has expired, positive ' +
        'administrative silence shall apply.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Forty-five working days, counted **from the moment the application ' +
        'is filed in legal and due form** — that is, with the file complete ' +
        '— extendable once only by up to half as much again where the size ' +
        'or the complexity warrants it. If the record of observations ' +
        'arrives, there are 30 working days to answer, extendable by 15.',
    },
    {
      tipo: 'nota',
      texto:
        'Positive administrative silence has a limit worth understanding: it ' +
        'operates "on the terms applied for", but **never against the ' +
        'planning rules in force**. It is not a back door to what the rules ' +
        'do not allow.',
    },

    { tipo: 'titulo', texto: 'How long the permit lasts' },
    {
      tipo: 'parrafo',
      texto:
        'Here there is a fact almost the whole Colombian web gets wrong, and ' +
        'a correction that is usually got wrong too.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is true that Decreto 1783 de 2021 raised the validity from 24 to ' +
        '36 months. But **not for every permit**. And saying "the permit ' +
        'lasts 36 months" flatly is wrong for most of the modalities.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Class or modality', 'Validity', 'Extension'],
      filas: [
        [
          'Urbanisation, parcelación — its rural counterpart — and construction in the **new build** modality',
          '36 months',
          'Once, +12 months',
        ],
        [
          'Construction in modalities **other than** new build: extension, adaptation, modification, restoration, strengthening, demolition',
          '24 months',
          'Once, +12 months',
        ],
        [
          'Urbanisation + parcelación + new build in one and the same act',
          '48 months',
          'Once, +12 months',
        ],
        ['Subdivision', '12 months', 'Cannot be extended'],
        [
          'Urbanisation or parcelación for regularisation purposes',
          '12 months',
          'Not extendable',
        ],
      ],
      nota:
        'Decreto 1783 de 2021, article 27. The periods run from the moment ' +
        'the acts granting the permit become final, not from the date of ' +
        'filing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two more points about the extension, and both get muddled often. It ' +
        'is applied for **no later than 30 working days before** expiry — ' +
        'working days, not calendar days: the previous regime said calendar ' +
        'and it changed — with the documentation complete and a sworn ' +
        'statement that the works have already begun.',
    },
    {
      tipo: 'nota',
      texto:
        'And one that lapsed recently: Decreto 74 de 2025 allowed a ' +
        '**second** extraordinary extension, but only until 30 June 2026. ' +
        'That window has closed. Any content presenting it as available is ' +
        'out of date.',
    },

    { tipo: 'titulo', texto: 'This has a use-by date' },
    {
      tipo: 'parrafo',
      texto:
        'The absence of charges in Jamundí is not a privilege of the ' +
        'municipality: it follows from there being no appointed curador. Ley ' +
        '388 de 1997 says it head-on — the day one is appointed, the ' +
        'municipal body that carries on providing the service will levy **the ' +
        'same charges** as are set for the curador.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And that day is coming closer. The Superintendencia de Notariado y ' +
        'Registro has an open public merit competition to fill curadurías, ' +
        'and **Jamundí is on the list**, alongside Buenaventura, Palmira, ' +
        'Tuluá and Yumbo. Under the addendum in force, registration closes ' +
        'on **16 October 2026** and the final list of admitted candidates is ' +
        'published on **22 February 2027**.',
    },
    {
      tipo: 'nota',
      texto:
        'Be careful with the dates in circulation. After registration come ' +
        'the tests, the interviews, the list of eligible candidates and the ' +
        'appointment, and **for those stages no timetable has been ' +
        'published**. Any concrete opening date for the curaduría of Jamundí ' +
        'would be invented. The only defensible statement: not before well ' +
        'into 2027. The Superintendencia itself extended the deadline ' +
        'because some posts had no candidates registered.',
    },

    { tipo: 'titulo', texto: 'What to do with this' },
    {
      tipo: 'lista',
      items: [
        '**Get the certificate of service availability first.** Before the drawing, before the budget, before signing the contract to buy the plot. It is what decides whether your project can be permitted today.',
        '**Budget the 2% delineation tax** on area times reference value, and ask the planning department about the issuing fees, which are not published.',
        '**File with the complete file.** The 45 working days do not start running until the application is in legal and due form.',
        '**Check the modality of your permit** before counting on 36 months. If it is an extension or a strengthening scheme, you have 24.',
        '**If the project can start this year, start it.** The saving on charges is real for as long as there is no appointed curador, and that condition is not permanent.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'All of the above is verified against rules and official documents ' +
        'as at July 2026. Procedures change; the dates in this article are ' +
        'the dates of its publication.',
    },
  ],
}
