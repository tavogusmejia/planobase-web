import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Qué pasa con su licencia si cambia el POT de Cali».
 *
 * El titular inglés es el que ya enlaza
 * `licencia-de-construccion-en-bogota`: «what happens to your permit if the
 * POT of Cali changes». Cambiarlo aquí dejaría ese enlace describiendo un
 * artículo que no existe.
 *
 * Vocabulario del pilar, tomado del corpus y no fijado aquí: POT conservado y
 * glosado, `radicar en legal y debida forma` → filing in legal and due form,
 * `silencio administrativo positivo` → positive administrative silence,
 * `prórroga` → extension, `revalidación` → revalidation, `acta de
 * observaciones` → record of observations, `días hábiles` → working days,
 * `concepto de norma urbanística` → written ruling on the planning rules,
 * `esquema básico` → outline scheme.
 *
 * Las tres declaraciones de lo que no se pudo verificar se traducen enteras y
 * sin suavizar: **el juzgado no ha resuelto** la solicitud de los seis meses,
 * **el decreto de prórroga por el sismo no se ha publicado**, y las dos
 * últimas filas del cronograma **son expectativas y no hechos**. Con ellas
 * viaja la fecha de corte, el 4 de septiembre de 2026, que es lo que las
 * sostiene.
 *
 * Contexto añadido para el lector de fuera: qué es la CVC, qué es el Consejo
 * Territorial de Planeación, qué es el Concejo Distrital y qué es un alcalde
 * ad hoc. Las cifras y las fechas son las mismas, y el «50 %» va como «50%».
 */
export const traduccion: TraduccionPost = {
  slug: 'pot-de-cali-y-su-licencia',
  titulo: 'What happens to your permit if the POT of Cali changes',
  traducido: '2026-09-05',
  resumen:
    'The POT of Cali has been annulled and is running on borrowed time that ' +
    'ends on 9 January 2027. What is protected if you already hold a ' +
    'permit, what gets frozen when you file, and why the planning ruling you ' +
    'have filed away does nothing for you there.',
  metaDescripcion:
    'The POT of Cali expires on 9 January 2027. What happens to a permit ' +
    'already in force, and what filing actually freezes.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Cali is building under a land-use plan that a court annulled two ' +
        'years ago and that remains in force only because the same court ' +
        'granted it a period of grace. That period has a date.',
    },
    {
      tipo: 'dato',
      valor: '9 January 2027',
      etiqueta:
        'The day Acuerdo 0373 de 2014 definitively ceases to be in force, ' +
        'unless a court grants the extension the city government applied for ' +
        'in August.',
      fuente:
        'Recitals to the draft agreement for the new POT, Departamento ' +
        'Administrativo de Planeación de Cali.',
    },
    {
      tipo: 'parrafo',
      texto:
        'If you hold a permit in force, if you are about to file, or if you ' +
        'keep a planning certificate in a drawer believing it protects you, ' +
        'this applies to you. And the answer to the three situations is ' +
        'different in each case.',
    },

    { tipo: 'titulo', texto: 'What happened to the POT' },
    {
      tipo: 'parrafo',
      texto:
        'The Tribunal Administrativo del Valle del Cauca declared Acuerdo ' +
        '0373 de 2014 — the long-term revision of the POT, the Plan de ' +
        'Ordenamiento Territorial or city land-use plan — void by Sentencia ' +
        '129 of 25 April 2024.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The ground has nothing to do with the content of the plan: it is a ' +
        'defect of **competence**. The agreement was signed into law by an ' +
        'ad hoc mayor appointed by the regional public prosecutor’s office, ' +
        'when the power to appoint her belonged to the office of the ' +
        'President. An entire land-use plan fell over who signed it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The Tribunal deferred the effects of its ruling by 30 months from ' +
        'the judgment becoming final, so that the city would not be left ' +
        'with no rules while it processed a new plan. That period runs **from ' +
        '9 July 2024 to 9 January 2027**.',
    },
    {
      tipo: 'nota',
      texto:
        'A detail that says a great deal: the new POT is also being ' +
        'processed by an ad hoc mayor, because mayor Eder was allowed to ' +
        'stand aside on a conflict of interest. But this time the ' +
        'appointment came from the **Ministry of the Interior**, not from ' +
        'the prosecutor’s office — precisely so as not to repeat the defect ' +
        'that brought the previous plan down.',
    },

    { tipo: 'titulo', texto: 'And then the earthquake moved the board' },
    {
      tipo: 'parrafo',
      texto:
        'On 20 August 2026 it emerged that the city government had lodged ' +
        'with the Juzgado Quinto Administrativo de Cali a request for **six ' +
        'further months** of deferral — to 9 July 2027 — in order to build ' +
        'into the plan the seismic microzoning and the geotechnical surveys ' +
        'carried out after the earthquake of 10 August.',
    },
    {
      tipo: 'nota',
      texto:
        'As at 4 September 2026 **the court has not ruled**. It is a ' +
        'request, not a fact. Planning on the strength of those six months ' +
        'is a gamble.',
    },

    { tipo: 'titulo', texto: 'Where the new POT stands' },
    {
      tipo: 'tabla',
      cabeceras: ['Milestone', 'Date', 'Status'],
      filas: [
        [
          'Filed with the CVC, the regional environmental authority, for environmental agreement',
          '5 December 2025',
          'Done',
        ],
        [
          'First environmental agreement session',
          '12 February 2026',
          'Done',
        ],
        [
          'Filed with the Consejo Territorial de Planeación, the citizens’ planning council',
          '3 August 2026',
          'Done',
        ],
        [
          'Opinion of the Consejo Territorial de Planeación',
          '—',
          '**Outstanding** as at 2 September 2026',
        ],
        [
          'Filing before the Concejo Distrital, the city council',
          'October 2026',
          'Expectation of the city government',
        ],
        [
          'Approval',
          'End of December 2026',
          'Expectation of the city government',
        ],
      ],
      nota:
        'The last two rows are expectations declared by the planning ' +
        'directorate, not facts. That timetable has already slipped once: in ' +
        'December 2025 the filing before the council was being announced for ' +
        'June.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The law gives the Consejo Territorial de Planeación 30 working days ' +
        'to deliver its opinion, and the mayor 30 more to put the draft to ' +
        'the council. And there is an escape valve worth knowing about: if ' +
        'the council does not decide within 60 days of the draft being put ' +
        'to it, **the mayor may adopt the POT by decree**.',
    },

    {
      tipo: 'titulo',
      texto: 'If you already hold a permit: you are protected, with a deadline',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is the good news and it is in the rules, not in anybody’s ' +
        'opinion. Decreto 1077 de 2015 says that the grant of a permit ' +
        '**determines the acquisition of the rights to build and develop** ' +
        'on the terms and conditions expressed in it. And it adds that the ' +
        'permit produces all its effects even if the property is sold.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In other words: **your permit in force survives the change of ' +
        'POT**. The District’s own legal directorate said as much when the ' +
        'annulment became known — consolidated legal situations remain in ' +
        'force.',
    },
    {
      tipo: 'parrafo',
      texto: 'But the shield is temporary, and here is the small print:',
    },
    {
      tipo: 'cita',
      texto:
        'Where a permit ceases to be in force through expiry of its term or ' +
        'of its extensions, the interested party shall apply for a new ' +
        'permit, before the same authority that issued it, complying with ' +
        'the planning rules in force at the moment of the new application.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.4.3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Translated: if your permit expires after the new POT comes in and ' +
        'you did not manage to build, you start again under the new rules. ' +
        'The right lived in the permit, not in the plot.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The only figure that keeps the old rules is **revalidation**: it is ' +
        'applied for within the two months following expiry, once only, ' +
        'evidencing on oath that the works are at least 50% advanced. It is ' +
        'resolved "on the basis of the planning rules that served as the ' +
        'basis for the issue of the permit being revalidated".',
    },
    {
      tipo: 'nota',
      texto:
        'An extension has to be applied for **no later than 30 working days ' +
        'before** expiry — working days, not calendar days — with the ' +
        'documentation complete and a sworn statement that the works have ' +
        'begun. And the second, extraordinary extension under Decreto 74 de ' +
        '2025 **is no longer available**: its window closed on 30 June 2026.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is also worth not reading "acquired right" as a synonym for ' +
        'perpetual. The Consejo de Estado, the supreme administrative court, ' +
        'put it plainly: the rights born of a planning permit **are neither ' +
        'absolute nor unalterable over time**, and permits are subordinate ' +
        'to the public interest and to compliance with the POT.',
    },

    {
      tipo: 'titulo',
      texto: 'If your application is under way: filing freezes the rules',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is the piece that decides what is worth doing over the coming ' +
        'months, and it has been written down expressly since 2010:',
    },
    {
      tipo: 'cita',
      texto:
        'If during the period between the application for a permit and the ' +
        'issue of the administrative act granting it there is a change in ' +
        'the planning rules affecting the project, the applicant shall have ' +
        'the right to be granted the permit on the basis of the planning ' +
        'rules in force at the moment the application was filed, provided ' +
        'that it was submitted in legal and due form.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.1.2, paragraph',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is not a favourable reading: it is the rule. The POT of 2014 ' +
        'repeated it in its own transitional regime, and the draft of the ' +
        'new POT repeats it again in its article 661.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Everything therefore turns on one expression: **"in legal and due ' +
        'form"**. The rule defines it without margin:',
    },
    {
      tipo: 'cita',
      texto:
        'An application for a permit shall be understood to be filed in ' +
        'legal and due form if, at the date of filing, the totality of the ' +
        'documents required is submitted, even where these are subject to ' +
        'later corrections.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.1.1, paragraph 1',
    },
    {
      tipo: 'parrafo',
      texto:
        'The complete file freezes the rules. The incomplete file freezes ' +
        'nothing. And the corrections the record of observations asks for ' +
        'afterwards **do not break** that freeze — which is what makes it ' +
        'worth filing complete even with things left to polish.',
    },

    { tipo: 'titulo', texto: 'What freezes nothing' },
    {
      tipo: 'parrafo',
      texto:
        'And here is the most expensive mistake made in this window. Plenty ' +
        'of people ask for a written ruling on the planning rules, or a ' +
        'land-use certificate, put it away, and believe their project is ' +
        'thereby tied to the rules as they stand today.',
    },
    {
      tipo: 'parrafo',
      texto: 'It is tied to nothing. The rule says so literally:',
    },
    {
      tipo: 'cita',
      texto:
        'The issue of these rulings grants no rights and imposes no ' +
        'obligations on the party requesting them, and does not modify the ' +
        'rights conferred by permits that are in force or that have been ' +
        'executed.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'The same goes for demarcation lines — the official line where ' +
        'building may start — and for outline schemes. The draft of the new ' +
        'POT goes further and declares it expressly: land-use certificates ' +
        'issued under the earlier rules **confer no right to carry on the ' +
        'specific use**, and those instruments "in no case generate ' +
        'consolidated legal situations".',
    },
    {
      tipo: 'nota',
      texto:
        'Put shortly: **the only act that freezes the rules is filing the ' +
        'permit application, complete.** Everything else is information, and ' +
        'information expires when the plan changes.',
    },

    {
      tipo: 'titulo',
      texto: 'The earthquake decree that does not exist yet',
    },
    {
      tipo: 'parrafo',
      texto:
        'Since the end of August it has been circulating that the national ' +
        'government would extend by twelve months the permits in force on 10 ' +
        'August 2026. The Minister of Housing announced it to the industry ' +
        'and said the decree was "awaiting signature".',
    },
    {
      tipo: 'parrafo',
      texto:
        '**As at 4 September 2026 that rule has not been published.** The ' +
        'Ministry’s own register of legislation does not record it, and the ' +
        'Ministry’s bulletin of 2 September speaks in general terms of ' +
        'decrees to come, with no number and no mention of permits.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What has been issued is another thing: the declaration of a ' +
        'national disaster and the state of economic, social and ecological ' +
        'emergency. They open the way to the subject, but **they extend no ' +
        'permit by themselves**.',
    },
    {
      tipo: 'nota',
      texto:
        'Until it appears with a number and in the Diario Oficial, the ' +
        'ordinary regime governs. **Do not treat an expired permit as ' +
        'extended.** The window is still open — the state of emergency ' +
        'allows such a decree to be issued — so it is worth checking again ' +
        'before taking any decision that depends on it.',
    },

    {
      tipo: 'titulo',
      texto: 'How to check the rules on your plot today',
    },
    {
      tipo: 'lista',
      items: [
        '**The land-use enquiry**, at `usodelsuelo.cali.gov.co`. Free, immediate, no registration, by address or by cadastral number. It returns a PDF with the permitted activities.',
        '**The written ruling on the planning rules**, from the planning department. Free, 15 working days, online with a log-in or in person at the CAM, the city government building.',
        '**The IDESC map viewer**, which orients but does not certify: the tool’s own notice warns that official documents call for the agreement itself and its mapping.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And remember the previous section: none of the three freezes the ' +
        'rules for you. They serve to tell you what may be done, not to ' +
        'secure it.',
    },

    { tipo: 'titulo', texto: 'What to do with this' },
    {
      tipo: 'lista',
      items: [
        '**If your project stands up under the POT of 2014 and is mature, file it complete.** The applicable rules freeze on the day of filing, not on the day you get an answer.',
        '**Do not file incomplete to "secure a date".** An incomplete file freezes nothing; it only consumes time and can end in the application being deemed withdrawn.',
        '**If you hold a permit in force, set its expiry date against the POT calendar.** If it expires after the change and you are not going to finish building, the extension or the revalidation stop being paperwork and become strategy.',
        '**Do not rely on a planning certificate you have put away.** It gives you no right whatever.',
        '**If the plot is in a hazard zone or on a hillside, expect the rules to change more than average.** The city government has announced it will incorporate updated seismic microzoning; the actual content is not yet known.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'All of the above is verified against rules, judgments and official ' +
        'statements as at 4 September 2026. Four things remain open and can ' +
        'move the calendar: the court’s decision on the six months, the ' +
        'opinion of the Consejo Territorial de Planeación, the filing before ' +
        'the council, and the national decree on permits. If you are about ' +
        'to take a decision that depends on any of them, confirm it first.',
    },
  ],
}
