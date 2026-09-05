import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «La licencia de construcción en Bogotá, paso a paso».
 *
 * Las dos correcciones que sostienen la pieza se traducen enteras y sin
 * suavizar: **el Consejo de Estado nunca conoció del caso** —fue un juzgado
 * administrativo del circuito y después el Tribunal Administrativo de
 * Cundinamarca— y **la «consulta preliminar» no existe** como figura del
 * trámite. Con ellas viaja la declaración de honestidad que las cierra: no
 * consta sentencia de fondo publicada, y el proceso sigue su curso.
 *
 * Tampoco se nombra a ningún curador, por la misma razón que en el español:
 * solo dos de los cinco despachos tienen acto de designación publicado.
 *
 * Contexto añadido para el lector de fuera: qué es el POT, qué es una
 * curaduría, qué es el CPACA, qué es el estrato y qué hacen los institutos
 * distritales que aparecen por sigla. Las siglas propias —IDU, IDRD, IDPC,
 * IDARTES, IDIGER, ICANH, DADEP— no se traducen.
 *
 * Los separadores cambian: «0,938» es «0.938» y «1,00 × 0,70 m» es «1.00 ×
 * 0.70 m».
 */
export const traduccion: TraduccionPost = {
  slug: 'licencia-de-construccion-en-bogota',
  titulo: 'The building permit in Bogotá, step by step',
  traducido: '2026-09-05',
  resumen:
    'Which POT governs today and exactly where it stands in court — which is ' +
    'not what the press reports — how many curadurías there are, when the ' +
    'deadlines really start running, and the four procedures they will ask ' +
    'of you at the same time that are not the permit.',
  metaDescripcion:
    'Which POT governs Bogotá today, how many curadurías there are, which ' +
    'deadlines really run and what is not the permit even though it looks ' +
    'like it.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Getting a building permit in Bogotá is not difficult because of the ' +
        'rules. It is difficult because of three things almost nobody tells ' +
        'you before you start: that the land-use plan has a court history ' +
        'that is still not over, that the clock on the deadlines does not ' +
        'start the day you file, and that there are at least ten different ' +
        'authorisations people confuse with the permit and that another body ' +
        'issues.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is what the official texts say, read one by one. It includes a ' +
        'substantive correction about the POT — the Plan de Ordenamiento ' +
        'Territorial, the city’s land-use plan — that circulates wrongly ' +
        'across the whole press, and a phrase almost everybody uses that ' +
        'exists in no rule at all.',
    },

    {
      tipo: 'titulo',
      texto: 'The POT in force, and the correction to make at the outset',
    },
    {
      tipo: 'parrafo',
      texto:
        'The instrument in force is **Decreto Distrital 555 de 2021**, which ' +
        'adopted the general revision of the Plan de Ordenamiento ' +
        'Territorial. It was issued on 29 December 2021 and governs from the ' +
        'following day.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It was adopted by decree and not by an agreement of the city ' +
        'council, and that is the origin of the litigation. The draft was ' +
        'filed before the Concejo Distrital on 10 September 2021; article 12 ' +
        'of Ley 810 de 2003 lets the mayor adopt it by decree if the council ' +
        'does not approve it within ninety calendar days, and the city ' +
        'government held that this period had run out. The claim argued that ' +
        'suspensions for conflicts of interest and challenges to councillors ' +
        'were deducted from the period.',
    },
    {
      tipo: 'nota',
      texto:
        'Here is the correction, and it goes to the substance: **the Consejo ' +
        'de Estado never heard this case.** It gets repeated constantly and ' +
        'it is false. It was an action for **simple annulment** under ' +
        'article 137 of the CPACA, the administrative procedure code, heard ' +
        'at first instance by an administrative circuit court in Bogotá and ' +
        'at second instance by the Tribunal Administrativo de Cundinamarca. ' +
        'If somebody cites the Consejo de Estado to you about the POT of ' +
        'Bogotá, they are repeating something they never read.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What happened', 'When', 'Who'],
      filas: [
        [
          'Decreto Distrital 555 is issued, the general revision of the POT',
          '29 December 2021',
          'Mayor of Bogotá',
        ],
        [
          '**Provisional suspension of its effects is ordered**',
          '14 June 2022',
          'Juzgado Quinto Administrativo Oral del Circuito de Bogotá, Sección Primera',
        ],
        [
          '**That order is revoked and the interim measure refused**',
          '22 August 2022',
          'Tribunal Administrativo de Cundinamarca, Sección Primera, Subsección A',
        ],
      ],
      nota:
        'Case 11001333400520220006600 at first instance. Both decisions say ' +
        'expressly that the ruling implies no prejudgement of the merits.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What matters in that story is not the litigation but its dates, ' +
        'because for two and a half months Bogotá granted permits under a ' +
        'different plan. The official pronouncement is categorical:',
    },
    {
      tipo: 'cita',
      texto:
        'Decreto Distrital 555 de 2021 has been in force since 30 December ' +
        '2021; however, its effects were suspended between 16 June 2022 and ' +
        'the following 31 August, a period in which Decreto Distrital 190 de ' +
        '2004 again governed.',
      fuente:
        'Concepto 2202413038 de 2024, Secretaría Jurídica Distrital de Bogotá',
    },
    {
      tipo: 'dato',
      valor: '16 Jun – 31 Aug 2022',
      etiqueta:
        'The window in which the POT was suspended and Decreto 190 de 2004 came back to life',
      fuente:
        'Concepto 2202413038 of the Secretaría Jurídica Distrital, 13 September 2024',
    },
    {
      tipo: 'parrafo',
      texto:
        'The mechanics explain why it was so fast and so real. An interim ' +
        'measure does not touch the validity of the decree, it only suspends ' +
        'its effects, and it runs from the day after notice is published on ' +
        'the court roll. An appeal against an order granting an interim ' +
        'measure is admitted with **devolutive effect**, so the suspension ' +
        'took hold without waiting for the order to become final. The ' +
        'effects were restored when the order revoking it became final.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It was not theoretical. The Secretaría Distrital de Planeación ' +
        'circulated instructions on 21 June and more on 2 September, and the ' +
        'Instituto Distrital de Patrimonio Cultural went as far as ' +
        '**suspending time limits** in its administrative proceedings while ' +
        'the measure lasted.',
    },
    {
      tipo: 'nota',
      texto:
        'And here the honest declaration, which is the most useful part: ' +
        '**no published judgment on the merits is on record.** The ' +
        'District’s register of legislation carries no decision later than ' +
        'the order of August 2022, and I could not consult the procedural ' +
        'status of the file. What can be asserted is this and nothing more: ' +
        'the suspension lasted two and a half months, it was revoked, the ' +
        'POT governs today, and **the annulment proceedings are still ' +
        'running.** Anyone who tells you the matter is closed, or that the ' +
        'POT has been annulled, is asserting something they cannot sustain.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That the POT is in force today is not a reading of ours. The most ' +
        'recent district act developing it — from July 2026 — expressly ' +
        'invokes article 576 of Decreto 555 itself as the source of the ' +
        'power it exercises.',
    },
    {
      tipo: 'parrafo',
      texto:
        'If you want to know what happens to a permit when the land-use plan ' +
        'changes underneath the project, that is dealt with in detail for ' +
        'another city in ' +
        '[what happens to your permit if the POT of Cali changes](/blog/pot-de-cali-y-su-licencia). ' +
        'The mechanism is the same.',
    },

    {
      tipo: 'titulo',
      texto: 'December 2025: why half the legal library went out of date',
    },
    {
      tipo: 'parrafo',
      texto:
        'In December 2025 Bogotá carried out a large and little-remarked ' +
        'tidying-up of its rules. If you are reading a procedural guide ' +
        'written before that date, it very probably cites repealed decrees.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['New rule', 'What it consolidated', 'Date'],
      filas: [
        [
          '**Decreto Distrital 670 de 2025** · Decreto Único Distrital de Ordenamiento Territorial (DUDOT)',
          'The **implementing** decrees of the POT',
          '27 December 2025',
        ],
        [
          '**Decreto Distrital 646 de 2025** · Environment sector',
          'Among others, Decreto 531 de 2010, on urban forestry',
          '22 December 2025',
        ],
        [
          '**Decreto Distrital 649 de 2025** · Culture, Recreation and Sport sector',
          'Among others, Decreto 522 de 2023, on intervening heritage',
          '22 December 2025',
        ],
        [
          '**Decreto Distrital 653 de 2025** · Habitat sector',
          'Among others, the allocation procedure among curadores',
          '22 December 2025',
        ],
      ],
    },
    {
      tipo: 'nota',
      texto:
        'One nuance worth not getting wrong, because it sounds like the ' +
        'opposite of what it is: **the DUDOT did not repeal the POT.** It ' +
        'consolidated and repealed the decrees that implement it. Decreto ' +
        '555 de 2021 is not on its list of repeals and remains a separate ' +
        'rule. Its own recitals say so: planning instruments are not ' +
        'susceptible of consolidation, because their validity is governed by ' +
        'the POT in force.',
    },

    {
      tipo: 'titulo',
      texto: 'Five curadurías, and every one covers the whole city',
    },
    {
      tipo: 'parrafo',
      texto:
        'Bogotá has **five curadurías urbanas**, numbered 1 to 5, and in the ' +
        'latest official directory none of the five offices was vacant. It ' +
        'is the number that appears in the Ventanilla Única de la ' +
        'Construcción, run by the Secretaría Distrital del Hábitat, and it ' +
        'matches the directory of curadores of the Superintendencia de ' +
        'Notariado y Registro.',
    },
    {
      tipo: 'nota',
      texto:
        'I am not going to tell you who the curador of each office is, and I ' +
        'want to explain why. Only **two** of the five have an appointment ' +
        'act published and traceable in the District’s register of ' +
        'legislation. For the other three, the name appears on the office’s ' +
        'own website but the decree behind it is not indexed. Publishing a ' +
        'name with no verifiable administrative act is exactly the kind of ' +
        'fact that then gets repeated wrongly for years. The Superintendencia ' +
        'directory is the source worth consulting, and it changes.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On which one to choose, the short answer is that **you choose**. ' +
        'The rule is express: an application for a permit is not submitted ' +
        'to allocation among the district’s curadores, and each one’s ' +
        'jurisdiction covers the whole territory. There are no curadores by ' +
        'zone. The only two exceptions — applications by state entities and ' +
        'for individual social housing — do go to allocation, and in Bogotá ' +
        'the procedure now sits in the single decree of the Habitat sector.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The criteria for choosing, the tail that decision has and what ' +
        'documents any curaduría in the country asks for are in ' +
        '[the curaduría urbana: what it is, which to choose, what it asks for](/blog/curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide). ' +
        'I do not repeat it here.',
    },

    {
      tipo: 'titulo',
      texto: 'A change from August 2026 that has not reached the guides yet',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Decreto Nacional 1107 of 6 August 2026** amended the regime of ' +
        'curadores urbanos on two points that matter in Bogotá:',
    },
    {
      tipo: 'lista',
      items: [
        '**Who sets how many curadurías there are.** The number is now determined at the request of the territorial authority and with the favourable opinion of the Ministry of Housing, or on the Ministry’s own initiative.',
        '**What happens when a curador’s term expires.** On completing their individual five-year term, the outgoing curador **may continue provisionally in office** until a new one is appointed by merit competition.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'A warning about method that can save you an error: **the copy of ' +
        'Decreto 1077 published by the Gestor Normativo, the government’s ' +
        'consolidated register of legislation, is frozen at December 2023** ' +
        'and still shows the earlier wording of that article. It is the ' +
        'source almost everybody uses. For the chapter on curadores you have ' +
        'to read Decreto 1107 separately.',
    },

    {
      tipo: 'titulo',
      texto: 'Planning ruling, land-use ruling, and the enquiry that does not exist',
    },
    {
      tipo: 'parrafo',
      texto:
        'Before commissioning a design it is worth knowing what the plot ' +
        'allows. There are three ways of finding out and only two of them ' +
        'are a formal procedure.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What it is', 'What you get', 'What it costs', 'Time limit'],
      filas: [
        [
          '**Verbal enquiry** about the planning rules in force',
          'A spoken answer. There is no document',
          '**Free by rule**',
          '—',
        ],
        [
          '**Written ruling on the planning rules**',
          'A written opinion on the rules applicable to the plot',
          '8.34 UVT',
          '15 working days',
        ],
        [
          '**Written ruling on land use**',
          'A written opinion on which uses are allowed',
          '1.67 UVT',
          '15 working days',
        ],
      ],
      nota:
        'Decreto 1077 de 2015, art. 2.2.6.1.3.1, numbers 2 and 3, and art. ' +
        '2.2.6.6.8.15 as replaced by art. 5 of Decreto 1890 de 2021. The ' +
        'values run in UVT because that is how the rule sets them.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two practical rules that save money and are hardly ever used. The ' +
        'first: **if the ruling is asked for inside the permit procedure, it ' +
        'is not charged separately.** The charge only applies where the ' +
        'procedure is carried out independently. The second: the verbal ' +
        'enquiry is free, without exception, and it can rule a plot out in ' +
        'an afternoon.',
    },
    {
      tipo: 'nota',
      texto:
        'And a warning about what those rulings actually buy you, because ' +
        'the rule is hard on this: **they grant no rights and impose no ' +
        'obligations** on whoever asks for them, and they do not modify the ' +
        'rights under a permit in force. They are an informative opinion. ' +
        'What locks in the rules applicable to your project is not the ' +
        'ruling: it is filing in legal and due form, which is another thing ' +
        'and comes next.',
    },
    {
      tipo: 'titulo',
      texto: '"Consulta preliminar": the phrase everybody uses wrongly',
    },
    {
      tipo: 'parrafo',
      texto:
        '**It does not exist.** Not as a figure in the permit procedure, at ' +
        'any rate. I searched for the phrase in Decreto 1077 de 2015, in Ley ' +
        '388 de 1997, in Decreto 1203 de 2017, in Decreto 1783 de 2021 and ' +
        'in Decreto 1107 de 2026. **Zero matches in all five.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'The nearest thing in national rules is the free verbal enquiry, ' +
        'which is not a formal procedure and produces no document. In Bogotá ' +
        'something with that name did exist, but it was another thing: a ' +
        'stage in the **planes de implantación**, the siting plans for large ' +
        'developments, before the Secretaría Distrital de Planeación, not a ' +
        'curaduría procedure. The POT in force mentions it only in its ' +
        'transitional regime, to give enquiries issued under the previous ' +
        'plan a single six-month extension. That deadline ran out years ago.',
    },
    {
      tipo: 'parrafo',
      texto:
        'If somebody offers to process "the consulta preliminar" for you, ' +
        'ask exactly what they mean. Almost always they mean the written ' +
        'ruling on the planning rules, which does exist, costs 8.34 UVT and ' +
        'binds nobody.',
    },

    {
      tipo: 'titulo',
      texto: 'The deadlines: the clock does not start the day you file',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is where the weeks get lost, and it comes down to a single ' +
        'distinction. Filing is not the same as filing **in legal and due ' +
        'form**, and only the second sets the clock going.',
    },
    {
      tipo: 'cita',
      texto:
        'An application for a permit or its modification shall be understood ' +
        'to be filed in legal and due form if, at the date of filing, the ' +
        'totality of the documents required in the present Chapter is ' +
        'submitted, even where these are subject to later corrections.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.1.1, paragraph 1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it carefully, because it says more than it seems: the ' +
        'documents have to be **all** there, but they may be subject to ' +
        'later corrections. A document is missing and there is no legal and ' +
        'due form. The document is there with errors and there is. And the ' +
        'rule finishes the point off:',
    },
    {
      tipo: 'cita',
      texto:
        'While the review of the project may begin from the day after ' +
        'filing, the time limits for resolving the application shall start ' +
        'running once it has been filed in legal and due form.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.2.3',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is also a consequence worth money: the right to have the ' +
        'rules in force at the moment of filing applied to you, even if they ' +
        'change during the procedure, **belongs only to whoever filed in ' +
        'legal and due form**. In a city with a POT in litigation, that is ' +
        'not a procedural detail.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Moment', 'Time limit', 'What happens if it runs out'],
      filas: [
        [
          'Incomplete application the petitioner insists on filing',
          '**30 working days** to make it good',
          'Deemed withdrawn and closed',
        ],
        [
          'Photograph of the site board installed',
          '**5 working days** from filing',
          'Deemed withdrawn',
        ],
        [
          'Before deciding, counted from the notice to neighbours and from the board',
          '**5 working days**, minimum',
          'The act cannot be issued',
        ],
        [
          'Record of observations and corrections, drawn up **once only**',
          '**30 working days**, extendable by **15 working days** more at the party’s request',
          'Deemed withdrawn and closed',
        ],
        [
          'Information requested from another authority',
          '**10 working days**',
          'The permit time limit is suspended meanwhile',
        ],
        [
          '**Decision on the application**',
          '**45 working days** from the filing in legal and due form, extendable **once only, by up to half as much again**',
          '**Positive administrative silence**, never against the planning rules in force',
        ],
        [
          'Tax assessments, once the permit has been found viable',
          '**30 working days** to produce them; the curador issues within **5 working days** more',
          'Deemed withdrawn',
        ],
      ],
      nota:
        'Decreto 1077 de 2015, arts. 2.2.6.1.2.1.2, 2.2.6.1.2.2.1, ' +
        '2.2.6.1.2.2.2, 2.2.6.1.2.2.4, 2.2.6.1.2.2.5, 2.2.6.1.2.3.1 and ' +
        '2.2.6.1.2.3.4, with the amendments of Decreto 1783 de 2021. The ' +
        '45-working-day limit and the positive silence are also in art. 99 ' +
        'of Ley 388 de 1997.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The last row is what most surprises anyone who has never taken out ' +
        'a permit. Being told the project is viable **is not the permit**. A ' +
        'procedural act is issued asking for the tax assessments, the ' +
        'procedure is suspended while you obtain them, and if you do not ' +
        'produce them within thirty working days the application is deemed ' +
        'withdrawn after having passed the whole review. Budget those taxes ' +
        'separately and with cash available.',
    },
    {
      tipo: 'nota',
      texto:
        'Two points of precision for anyone about to cite the rule. First: ' +
        'the article that set staggered time limits by category of project ' +
        '— 45, 35, 25 and 20 days — **has been repealed** since Decreto 1783 ' +
        'de 2021, and it still turns up in handbooks. Second: withdrawal of ' +
        'a permit application is a special regime of Decreto 1077, **not** ' +
        'the tacit withdrawal of article 17 of the CPACA. They are not ' +
        'interchangeable.',
    },

    {
      tipo: 'titulo',
      texto: 'The charges: Bogotá has the highest factor in the country',
    },
    {
      tipo: 'parrafo',
      texto:
        'Curaduría charges are assessed with an equation into which a ' +
        '**municipal factor** enters. The one for Bogotá is **0.938**, the ' +
        'highest in the national table, shared with Cali, Medellín, Chía, ' +
        'Funza, Mosquera and Sabaneta. For equal area and equal stratum, ' +
        'getting a permit in Bogotá costs more than in almost any other ' +
        'municipality in the country, and not by the curador’s judgement but ' +
        'by decree.',
    },
    {
      tipo: 'dato',
      valor: 'm = 0.938',
      etiqueta: 'The municipal factor for Bogotá, the highest in the national table',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.6.8.4',
    },
    {
      tipo: 'parrafo',
      texto:
        'I am not going to copy the formula here: it is already worked out, ' +
        'with the rates and the factor for each municipality, in the ' +
        '[curaduría charges calculator](/apbs/expensas-de-curaduria). Put in ' +
        'the area, the stratum and the modality and the figure comes out ' +
        'itemised, with what is paid on filing and what is paid afterwards.',
    },
    {
      tipo: 'nota',
      texto:
        'With an expiry date worth knowing about: **Decreto Nacional 1107 of ' +
        '6 August 2026** obliges the Ministry of Housing to issue an ' +
        'updating methodology within the following year and to **update by ' +
        'resolution every municipal factor** within the twelve months after ' +
        'that. In other words: the table in force today has a use-by date, ' +
        'and not through anybody’s oversight but by express mandate.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And a rule that does not change: curadores **cannot charge for ' +
        'items other than those the decree fixes**, so long as no new ' +
        'charges are approved. If they assess you an item that is not in the ' +
        'table, ask for the rule that authorises it.',
    },

    {
      tipo: 'titulo',
      texto: 'The Sabana: where there is a curaduría and where no charges are paid',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is the part that moves the most money and that hardly anybody ' +
        'publishes. Charges are only levied where there is an appointed ' +
        'curador urbano. Where there is none, the permit is issued by the ' +
        'municipal planning office and **charging them is forbidden**. On ' +
        'the edge of Bogotá, the map is split in three.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Municipality', 'Situation', 'Charges'],
      filas: [
        ['Bogotá D.C.', 'Five curadurías operating', 'Yes · factor 0.938'],
        ['Soacha', 'Curaduría operating', 'Yes · factor 0.675'],
        ['Funza', 'Curaduría operating', 'Yes · factor 0.938'],
        ['Mosquera', 'Curaduría operating', 'Yes · factor 0.938'],
        ['Cajicá', 'Curaduría operating', 'Yes · factor 0.641'],
        ['Cota', 'Curaduría operating', 'Yes · factor 0.713'],
        ['Tocancipá', 'Curaduría operating', 'Yes · factor 0.713'],
        [
          '**Chía**',
          '**Both offices vacant.** The town hall takes over',
          '**None payable**',
        ],
        [
          '**Madrid**',
          '**Both offices vacant.** The town hall takes over',
          '**None payable**',
        ],
        [
          '**Zipaquirá**',
          '**Both offices vacant.** The town hall takes over',
          '**None payable**',
        ],
        [
          '**La Calera, Sopó and the rest of the Sabana**',
          '**No municipal factor assigned.** They have never had a curaduría',
          '**None payable**',
        ],
      ],
      nota:
        'Status of the offices according to the Directorio de Curadores ' +
        'Urbanos of the Superintendencia de Notariado y Registro, edition of ' +
        '6 March 2026. The factors, from art. 2.2.6.6.8.4 of Decreto 1077 ' +
        'and from the Ministry of Housing resolutions that assigned them.',
    },
    {
      tipo: 'nota',
      texto:
        'This is the most volatile fact in the whole article and it has to ' +
        'be treated as such: **one curaduría being filled changes the answer ' +
        'from zero to several hundred thousand pesos.** Chía, Madrid and ' +
        'Zipaquirá appear today with no curador because a merit competition ' +
        'is under way. Before budgeting, check the directory of the day.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That no charges are payable does not mean the procedure is faster, ' +
        'or easier, or cheaper overall. It means one thing only: that this ' +
        'item does not exist. The legal time limits, the documents and the ' +
        'taxes are the same.',
    },

    {
      tipo: 'titulo',
      texto: 'What is not the permit, even if they ask for it at the same time',
    },
    {
      tipo: 'parrafo',
      texto:
        'In Bogotá there are at least ten different authorisations that ' +
        'get confused with the building permit. None of them replaces it and ' +
        'none of them is issued by the curador. Knowing whose job each one ' +
        'is saves months.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What you need', 'Who authorises it'],
      filas: [
        [
          'Felling, pruning, blocking or moving a tree',
          '**Secretaría Distrital de Ambiente**, without exception',
        ],
        [
          'Occupation of a watercourse and discharge permit',
          '**Secretaría Distrital de Ambiente**, within the urban perimeter',
        ],
        [
          'Registration of outdoor visual advertising',
          '**Secretaría Distrital de Ambiente** · but street banners and hanging signs are registered with the **local mayor**',
        ],
        [
          'Intervening a **national** listed cultural property, or the historic centre',
          '**Ministry of Culture**',
        ],
        [
          'Intervening a **district** listed cultural property',
          '**Instituto Distrital de Patrimonio Cultural**',
        ],
        ['Archaeological heritage', '**ICANH**'],
        [
          'Intervening public space: pavements, carriageways, networks, urban links',
          '**IDU** · parks, **IDRD** · heritage public space, **IDPC** · permanent art, **IDARTES**',
        ],
        [
          'Detailed risk study in a hazard zone',
          '**You** prepare it; the **IDIGER** rules on whether it meets the terms of reference',
        ],
        [
          'Planning legalisation of an informal settlement',
          '**Secretaría Distrital de Planeación**, by resolution',
        ],
        [
          'Recognition of an existing building',
          '**The curador urbano**, not the planning secretariat',
        ],
      ],
      nota:
        'Decreto Distrital 555 de 2021, arts. 22, 82, 145 and 499; Decreto ' +
        'Distrital 646 de 2025 for trees; Decreto Distrital 649 de 2025 for ' +
        'district heritage; Decreto 1077 de 2015, arts. 2.2.6.1.1.3 and ' +
        '2.2.6.4.1.1.',
    },
    {
      tipo: 'parrafo',
      texto: 'Three points of precision that avoid expensive errors:',
    },
    {
      tipo: 'lista',
      items: [
        '**The heritage authorisation comes first and blocks everything.** A building permit on a listed property or in a listed sector, and in its area of influence, can only be issued once the already-approved intervention authorisation is produced. And that authorisation **cannot be replaced by any planning permit**: the statute says so expressly. If your plot adjoins listed cultural property, start there, not at the curaduría.',
        '**The DADEP does not issue the licence to intervene public space.** It defends, inspects and inventories the District’s property estate and receives the land handed over in developments. The licence is granted by the IDU, the IDRD, the IDPC or IDARTES, depending on what is to be intervened. It is a very frequent mistake and it costs weeks.',
        '**The adjoining pavements go inside the building permit itself.** The curador may authorise their reconstruction or rehabilitation when issuing it, with no separate procedure, where the plot sits in an urbanised sector.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And a fourth fact that saves a whole procedure: **intervening ' +
        'roofs, façades, building lines, porticoes or front gardens of a ' +
        'private plot that form part of public space does NOT require a ' +
        'licence to intervene and occupy public space.** It does require the ' +
        'building permit, where one applies. Plenty of people process both.',
    },

    { tipo: 'titulo', texto: 'What to do, in order' },
    {
      tipo: 'lista',
      items: [
        '**Make the verbal enquiry before commissioning the design.** It is free by rule and it tells you in an afternoon whether the plot supports what you have in mind.',
        '**Ask for the written planning ruling only if you need it in writing**, or ask for it inside the permit procedure, where it is not charged separately. Remember that it grants you no rights.',
        '**Check first whether heritage is involved**, on your plot or the one next door. It is the longest procedure and the only one that blocks the rest.',
        '**File complete.** The record of observations is drawn up once only, and the forty-five working days do not begin until the filing is in legal and due form.',
        '**Put the board up the next day and file the photograph within five working days.** It is the silliest and commonest ground for withdrawal.',
        '**Budget the taxes separately and with cash.** They turn up at the end, with thirty working days to pay, and an already viable project falls over if they are not paid.',
        '**If your project is in the Sabana, check the directory of curadores the same day.** The difference between paying charges and not paying them hangs on an office being filled or vacant.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'All of the above is transcribed from the articles and the decisions ' +
        'in force at the date of publication. The charges run in UVT because ' +
        'that is how the rule sets them, and their equivalent in pesos ' +
        'changes every year.',
    },
  ],
}
