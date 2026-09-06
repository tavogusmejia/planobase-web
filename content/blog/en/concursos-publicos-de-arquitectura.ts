import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Concursos públicos de arquitectura: cómo funcionan por
 * dentro».
 *
 * La distinción que estructura la pieza sobrevive en inglés porque los dos
 * términos se separan solos: **el concurso de arquitectura** es
 * `architectural competition`, la tradición disciplinar, y **el concurso de
 * méritos** se conserva en español y se glosa, porque es una modalidad de
 * selección definida por el estatuto colombiano y traducirla —«merit-based
 * competition»— la volvería a confundir con la primera, que es exactamente el
 * error que el artículo corrige.
 *
 * Vocabulario de obra pública que este artículo fija para el corpus:
 * `entidad contratante` → contracting authority, `pliego de condiciones` →
 * tender documents, `documentos tipo` conservado y glosado como standardised
 * tender documents of compulsory use, `requisitos habilitantes` → eligibility
 * requirements, `factor de escogencia` → selection criterion, `registro único
 * de proponentes` conservado y glosado, `capacidad residual` conservada y
 * glosada, `contratación directa` → direct award, `urgencia manifiesta`
 * conservada y glosada, `precalificación` → prequalification, `lista corta` →
 * shortlist, `periodo de observaciones` → observations period. `anteproyecto`
 * → concept design como en todo el corpus, e `interventoría` sin traducir como
 * en `interventoria-de-obra`.
 *
 * **La sección final se traduce sin suavizarla.** Las cuatro cosas que el
 * artículo declara no haber verificado —la mecánica de sobres de la
 * plataforma, la capacidad residual en consultoría, el nivel de clasificación
 * de la experiencia y el régimen de los concursos gremiales— son lo que
 * sostiene la credibilidad de la pieza, y un lector extranjero es justo quien
 * no puede distinguir por su cuenta lo verificado de lo repetido.
 *
 * Fechas al formato inglés: «16 de febrero de 2026» es «16 February 2026».
 */
export const traduccion: TraduccionPost = {
  slug: 'concursos-publicos-de-arquitectura',
  titulo: 'Public architectural competitions: how they work from the inside',
  traducido: '2026-09-06',
  resumen:
    'You do not win with the best proposal: you win with the best proposal ' +
    'among those left eligible. How a concurso de méritos is put together, ' +
    'what is assessed, and why price does not decide who wins.',
  metaDescripcion:
    'How a public architectural competition works in Colombia: the concurso ' +
    'de méritos, what is assessed and why price is not a selection criterion.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'There is a widely held idea about public architectural competitions ' +
        'in Colombia: that the best project wins. It is only the last part of ' +
        'the truth.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Before a jury looks at a single floor plan, a selection process has ' +
        'already ruled out most of those interested, for reasons that have ' +
        'nothing to do with architecture. Understanding that first half is ' +
        'what separates a team that submits from a team that submits and ' +
        'competes.',
    },

    { tipo: 'titulo', texto: 'Two different things are called a competition' },
    {
      tipo: 'lista',
      items: [
        '**The architectural competition**, in the disciplinary sense: the tradition of calling for design proposals and putting them before a jury. It is a way of working that belongs to the profession.',
        '**The concurso de méritos**, in the legal sense: one of the selection procedures of the Colombian public procurement statute, **the one used to engage consultants**.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'When a Colombian public body needs the studies and designs for a ' +
        'school, a library or a public square, what it opens is a **concurso ' +
        'de méritos**. It may have a jury, it may call for concept designs, ' +
        'it may be described as an architectural competition in the press — ' +
        'but the rules that govern it are the rules of the statute.',
    },
    {
      tipo: 'nota',
      texto:
        'The reason lies in how the subject matter is classified. The statute ' +
        'defines as a **consultancy contract**, among other things, "the ' +
        'production of designs, drawings, concept designs and projects", ' +
        'together with interventoría — independent technical supervision — ' +
        'advisory work and construction management. And consultancy is ' +
        'selected by concurso de méritos. It is not a choice the contracting ' +
        'authority makes: it is the procedure the subject matter dictates.',
    },

    { tipo: 'titulo', texto: 'The rule that changes everything: price does not decide' },
    {
      tipo: 'parrafo',
      texto:
        'It is the most important peculiarity of the concurso de méritos, and ' +
        'the one that most surprises anyone arriving from the private sector:',
    },
    {
      tipo: 'nota',
      texto:
        '**In the selection of consultants, price may not be included as a ' +
        'selection criterion.** Numeral 4 of article 5 of Ley 1150 de 2007 ' +
        'says so in those words, and it still stands. What is scored is ' +
        'technical: the experience of the bidder and of the proposed team, ' +
        'and the team\u2019s academic qualifications.',
    },
    {
      tipo: 'parrafo',
      texto:
        'A widely held idea needs undoing here, because it was true for ' +
        'years and then stopped being true. The regulation used to set out a ' +
        'two-envelope sequence: the technical proposals were assessed, the ' +
        'bidders ranked, and only then was the financial offer of the ' +
        'first-ranked opened, to be negotiated, moving on to the next bidder ' +
        'if no agreement was reached. **That is no longer in the ' +
        'regulation.** The Consejo de Estado suspended those numerals in 2018 ' +
        'and 2019, and Decreto 399 de 2021 removed them. Article ' +
        '2.2.1.2.1.3.2 of Decreto 1082 now has three numerals: a single ' +
        'evaluation report is published, carrying the qualifying requirements ' +
        'and the scoring together, and the award goes to whoever met ' +
        'everything and scored highest.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Put another way: **cutting your price does not improve your ' +
        'position.** In a works tender it does. In a concurso de méritos it ' +
        'cannot.',
    },
    {
      tipo: 'nota',
      texto:
        'The distinction matters and is easy to blur: **what the statute ' +
        'lays down is the ban on price as a selection criterion; what the ' +
        'regulation laid down was the order of the procedure.** The first ' +
        'still stands. The second changed. And I do not set out the ' +
        'sealed-envelope mechanics of the procurement platform: they change ' +
        'with the versions of the system and I did not verify them against a ' +
        'current official source.',
    },

    { tipo: 'titulo', texto: 'The two forms of the concurso de méritos' },
    {
      tipo: 'tabla',
      cabeceras: ['Form', 'How it works', 'When it is used'],
      filas: [
        [
          '**Open**',
          'Publicly advertised; anyone meeting the eligibility requirements may submit a proposal',
          'The commonest by far',
        ],
        [
          '**With prequalification**',
          'A shortlist or a multi-purpose list of interested parties is drawn up first; only those on it submit a proposal',
          'Where the subject matter justifies reducing the number of proposals to be assessed',
        ],
      ],
      nota:
        'Prequalification is neither a shortcut nor a favour: it is a ' +
        'regulated procedure, with a call of its own and its own criteria for ' +
        'making up the list.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the technical proposal comes in two formats, depending on how ' +
        'closely the scope has been defined: a **simplified** one, where the ' +
        'contracting authority has already set out the methodology and the ' +
        'workload plan precisely, and a **detailed** one, where it asks the ' +
        'bidder to propose that methodology. Knowing which of the two is ' +
        'being asked for changes entirely what has to be written.',
    },

    { tipo: 'titulo', texto: 'Where you lose before you compete' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part nobody tells you about, and it decides most ' +
        'processes. The **eligibility requirements** carry no score: either ' +
        'you meet them or you do not. Anyone who does not is out, even if ' +
        'their proposal was the best in the country.',
    },
    {
      tipo: 'lista',
      items: [
        '**Legal capacity.** Existence, powers of representation, and the absence of statutory disqualifications and conflicts of interest.',
        '**Evidenced experience**, as recorded in the registro único de proponentes, the single register of bidders, and in the certificates for earlier contracts. **More people fall here than anywhere else**, almost always because of how the experience is classified rather than because they lack it.',
        '**Financial and organisational capacity**, with whatever indicators the process requires.',
        '**The team**, with the profiles, the professional registrations and the minimum dedication the tender documents call for.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The most expensive and most avoidable mistake: **having the ' +
        'experience and being unable to evidence it.** A completed contract ' +
        'wrongly classified in the register, or whose certificate states ' +
        'neither the areas nor the modality, is of no use for eligibility. ' +
        'That is put right well in advance, not in the week of the deadline.',
    },

    { tipo: 'titulo', texto: 'What the documentos tipo changed' },
    {
      tipo: 'parrafo',
      texto:
        'Since 2020 the law has required public bodies to use **documentos ' +
        'tipo** adopted by the national procurement agency: standardised ' +
        'tender documents of compulsory use, which the body may not alter in ' +
        'anything essential.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the sector closest to public architecture has its own: the ' +
        '**Documentos Tipo de Infraestructura Social**, the standard ' +
        'documents for social infrastructure, have been compulsory since **16 ' +
        'February 2026**. They cover precisely the kind of public facility on ' +
        'which a good part of Colombian public building turns.',
    },
    {
      tipo: 'lista',
      items: [
        '**Less discretion for the contracting authority.** The eligibility requirements and the assessment factors come predefined; the room for tender documents cut to the measure of one bidder narrows.',
        '**More predictability for anyone bidding.** If the documents are the same across the country, preparing once serves for many processes.',
        '**And a less obvious consequence:** it changes how experience is evidenced. A team that had been evidencing it in its own way has to check whether that way fits the compulsory format.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Outside the official documents there is very little published that ' +
        'explains this. It is a good example of why it pays to read the whole ' +
        'tender document rather than the press release.',
    },

    { tipo: 'titulo', texto: 'When there is no competition' },
    {
      tipo: 'parrafo',
      texto:
        'It is worth knowing, because it explains why a public project is ' +
        'sometimes awarded without anybody having seen a call for bids.',
    },
    {
      tipo: 'lista',
      items: [
        '**Direct award**, on the grounds the law lists exhaustively. It is not a discretionary route: the ground has to exist and has to be justified.',
        '**Urgencia manifiesta**, the declared emergency, established by a reasoned administrative act. **It removes the public call: the contractor is simply chosen.** It is meant for what cannot wait, and anyone not already on the authority’s radar does not appear.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The practical distinction worth holding on to: the immediate ' +
        'response can go through the emergency route, but **the full studies ' +
        'and designs, and the permanent works, return to the concurso de ' +
        'méritos and to open tender.** They are two separate tracks and they ' +
        'are often confused.',
    },

    { tipo: 'titulo', texto: 'How a team actually prepares' },
    {
      tipo: 'lista',
      items: [
        '**Put your entry in the register of bidders in order before the process is published.** Classification of the experience, certificates stating areas and modality, financial indicators up to date. That is work for months beforehand, not for the week of the deadline.',
        '**Read the whole tender document, starting with the eligibility requirements.** If you do not meet them, the proposal does not matter.',
        '**Check which format of technical proposal is being asked for.** Simplified or detailed changes the whole job.',
        '**Assemble the team with the exact profiles the tender document asks for**, with current professional registration and the minimum dedication required.',
        '**Use the observations period.** It is the only moment at which a badly drafted requirement can be challenged and corrected, and almost nobody uses it.',
        '**Do not compete on price.** It is not merely useless: in consultancy the law does not allow price as a selection criterion.',
      ],
    },

    { tipo: 'titulo', texto: 'What this article does not say' },
    {
      tipo: 'parrafo',
      texto:
        'For consistency with the rest of this blog, I declare the gaps ' +
        'rather than filling them:',
    },
    {
      tipo: 'lista',
      items: [
        '**I do not set out how the public procurement platform operates.** It changes with its versions and I did not verify it against current official documentation.',
        '**I assert nothing about capacidad residual — residual contracting capacity — in consultancy.** It is said that the regime does not apply there; I could not confirm it, and I do not repeat it.',
        '**I do not say at what level experience has to be classified in the register of bidders.** What is true and verifiable is that a wrong classification excludes you.',
        '**I do not describe the regime of competitions called by professional bodies**, which is a tradition separate from state procurement and whose current legal basis I did not verify.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Every one of those points can be confirmed at the official source ' +
        'before you bid for a particular process. What you should not do is ' +
        'take them from an article — this one included.',
    },
  ],
}
