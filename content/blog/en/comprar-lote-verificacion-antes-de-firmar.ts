import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Comprar lote: la verificación de doce puntos antes de firmar».
 *
 * Es el hermano urbano de `comprar-lote-rural-que-verificar-antes-de-firmar`,
 * y las dos piezas se enlazan entre sí. Comparten estructura, media docena de
 * figuras y la cita del artículo 44 de la Ley 160, así que se traducen con la
 * misma mano: la cita va **entera y palabra por palabra** como ya está en
 * `que-puedo-construir-en-suelo-rural`, con la salvedad inicial restituida, y
 * la nota de las cuatro excepciones remite al hermano rural igual que allí.
 *
 * Vocabulario tomado del corpus, ninguno fijado aquí: `certificado de
 * tradición y libertad` conservado y glosado como land registry extract,
 * `falsa tradición` conservada sin traducir —es el rótulo que el comprador va
 * a ver impreso—, `concepto de norma urbanística` → written ruling on the
 * planning rules, `clase de suelo` → class of land, `suelo de expansión` →
 * expansion land, `plan parcial` → partial plan, `afectación vial` → road
 * reservation, `ronda hídrica` → watercourse buffer, `corporación autónoma
 * regional` → regional environmental authority, `servidumbre` → easement,
 * `bien de interés cultural` → listed cultural property, `anteproyecto` →
 * concept design, `índice de ocupación` → site coverage ratio, `índice de
 * construcción` → plot ratio, `área neta urbanizable` → net developable area,
 * `estudio de suelos` → soil survey, `levantamiento topográfico` →
 * topographic survey, `radicar en legal y debida forma` → filing in legal and
 * due form, `Unidad Agrícola Familiar` conservada.
 *
 * Las dos abstenciones del original viajan enteras: **no se publica ningún
 * precio**, ni siquiera para dar una idea de magnitud, y **no se afirma que el
 * estudio de suelos se pueda omitir por debajo de cierta área** — se traduce
 * la desconfianza, no la afirmación.
 *
 * Contexto añadido para el lector de fuera, y no se quita nada: qué es una
 * corporación autónoma regional y qué hace un prestador de servicios cuando
 * emite el certificado de disponibilidad.
 */
export const traduccion: TraduccionPost = {
  slug: 'comprar-lote-verificacion-antes-de-firmar',
  titulo: 'Buying a plot: the twelve-point check before you sign',
  traducido: '2026-09-05',
  resumen:
    'A plot is bought with documents, not with a site visit. The twelve ' +
    'points to check before signing the promise of sale, where each one is ' +
    'looked up, and which of them can leave a piece of land unbuildable for ' +
    'good.',
  metaDescripcion:
    'What to check before buying a plot in Colombia: title, class of land, ' +
    'reservations, risk, watercourse buffers and easements.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Almost every expensive problem in a project was decided on the day ' +
        'the plot was bought. Afterwards they can be managed, but they can no ' +
        'longer be avoided.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The site visit verifies almost nothing. What decides whether a plot ' +
        'is any good sits in documents, and all of them are public, almost all ' +
        'of them are free, and none of them takes more than a few days. This ' +
        'is the complete list.',
    },
    {
      tipo: 'nota',
      texto:
        'The order matters. The first four points can rule the plot out ' +
        'altogether; the eight that follow change what may be built and how ' +
        'much it costs. **If any of the first four comes back badly, stop ' +
        'spending on the rest.**',
    },

    { tipo: 'titulo', texto: 'The four that can end the purchase' },

    { tipo: 'titulo', texto: '1. The certificado de tradición y libertad' },
    {
      tipo: 'parrafo',
      texto:
        'The land registry extract is the document that reveals most for the ' +
        'least money, and it has to be read right through rather than glanced ' +
        'at for the last entry. On it appear restrictions on ownership, ' +
        'injunctions, mortgages, recorded easements, reservations and falsa ' +
        'tradición.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two entries deserve particular attention. **Falsa tradición** means ' +
        'that whoever appears as the holder transferred an incomplete right: ' +
        'what is sold is what was held, which may not be full ownership. And ' +
        'the **assessment of the betterment levy on the uplift in land ' +
        'value**, where it is recorded on the folio, is an obligation that ' +
        'travels with the property and has to be paid before a permit can be ' +
        'taken out.',
    },
    {
      tipo: 'nota',
      texto:
        'Get the certificate yourself, online, with the registry number. Do ' +
        'not take the one the seller hands you: it may be months old, and the ' +
        'entries that matter are the recent ones.',
    },

    { tipo: 'titulo', texto: '2. The class of land' },
    {
      tipo: 'parrafo',
      texto:
        'Urban, expansion or rural. It is not an administrative label: it ' +
        'decides whether the plot can be built on today, in some years’ time, ' +
        'or never.',
    },
    {
      tipo: 'cita',
      texto:
        'Expansion land may only be the subject of urbanisation and ' +
        'construction once the corresponding partial plan has been adopted. ' +
        'Until the corresponding partial plans are approved, in urban ' +
        'expansion zones only agricultural and forestry uses shall be ' +
        'permitted.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.2.1.4.1.6',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Buying in expansion land with no partial plan adopted is buying a ' +
        'plot that cannot be built on today, and that cannot be subdivided ' +
        'either.** The seller is not lying when they say it "is going to be ' +
        'urban": it may well be. What nobody can tell you is when, and that is ' +
        'the whole difference.',
    },

    { tipo: 'titulo', texto: '3. The Unidad Agrícola Familiar, if the land is rural' },
    {
      tipo: 'parrafo',
      texto:
        'In the countryside there is a limit on dividing land, and breaching ' +
        'it is punished not with a fine but with something worse:',
    },
    {
      tipo: 'cita',
      texto:
        '**Save for the exceptions set out in the following article**, rural ' +
        'properties may not be divided below the extent determined by INCORA ' +
        'as the Unidad Agrícola Familiar for the municipality or zone in ' +
        'question. Accordingly, on pain of absolute nullity of the act or ' +
        'contract, no action or transaction whatsoever may be carried out ' +
        'that results in the division of a rural property into areas smaller ' +
        'than the one set as the Unidad Agrícola Familiar for the ' +
        'corresponding municipality by INCORA.',
      fuente: 'Ley 160 de 1994, article 44',
    },
    {
      tipo: 'nota',
      texto:
        'That opening clause matters, and this piece had cut it. The ban is ' +
        '**not absolute**: article 45 sets out four exceptions, and one of ' +
        'them — acts creating properties smaller than the minimum for a main ' +
        'purpose other than farming — is the one that usually applies to a ' +
        'country house. All four, with the requirement that they be recorded ' +
        'in the deed, are in [buying a rural plot](/blog/comprar-lote-rural-que-verificar-antes-de-firmar). ' +
        'INCORA no longer exists: its functions over the Unidad Agrícola ' +
        'Familiar now sit with the Agencia Nacional de Tierras.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Absolute nullity means the transaction never existed. It is the ' +
        'reason there are rural plots sold, paid for and occupied whose buyer ' +
        'can neither convey them nor obtain a permit for them. **And it is not ' +
        'cured by time or by good faith.**',
    },

    { tipo: 'titulo', texto: '4. The hazard or risk zone' },
    {
      tipo: 'parrafo',
      texto:
        'A property classified as being in high hazard, or in risk that ' +
        'cannot be mitigated, may simply not be capable of being permitted. ' +
        'In medium hazard, or in high hazard that can be mitigated, the permit ' +
        'may be made conditional on detailed studies and on mitigation works ' +
        'that sometimes cost more than the plot.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is checked with the municipal disaster risk management body, and ' +
        'it also appears in the written ruling on the planning rules. It is ' +
        'the enquiry most people leave out and the one that produces the most ' +
        'expensive surprises.',
    },

    { tipo: 'titulo', texto: 'The eight that change what may be built' },

    { tipo: 'titulo', texto: '5. The written ruling on the planning rules' },
    {
      tipo: 'parrafo',
      texto:
        'It is the photograph of what the rules allow on that property: use, ' +
        'planning treatment, ratios, heights, setbacks. The verbal enquiry is ' +
        'free by law; the written ruling, which is the one you can rely on if ' +
        'you have to make a claim, costs 8.34 UVT wherever there is a curaduría. It is the starting point for everything else.',
    },
    {
      tipo: 'parrafo',
      texto:
        'With one warning worth understanding before you lean on it:',
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
      tipo: 'nota',
      texto:
        'The ruling informs; it does not protect. **The only thing that ' +
        'freezes the rules is filing the permit application in legal and due ' +
        'form**, that is, with the file complete. If the land-use plan changes ' +
        'between the ruling and the filing, the new one governs.',
    },

    { tipo: 'titulo', texto: '6. The ratios, and which area they are applied to' },
    {
      tipo: 'parrafo',
      texto:
        'The índice de ocupación, the site coverage ratio, measures the ' +
        'footprint of the building on the ground; the índice de construcción, ' +
        'the plot ratio, measures the square metres of every storey added ' +
        'together. Both are defined in national rules, but **the numbers are ' +
        'put in by the POT of each municipality**, sector by sector and by ' +
        'planning treatment.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is one question that saves more money than any other: ' +
        '**which area is the ratio applied to?** The national definition ' +
        'speaks of the total area of the property, but several land-use plans ' +
        'apply it to the net developable area or to the usable area, both of ' +
        'which are smaller than the plot you are buying.',
    },

    { tipo: 'titulo', texto: '7. The road reservation' },
    {
      tipo: 'parrafo',
      texto:
        'It is a strip of the property held back for a future public work. ' +
        'For as long as it lasts, that strip cannot be built on. The ' +
        'reservation **has to be recorded** to be enforceable, so it is looked ' +
        'for on the certificado de tradición and confirmed in the written ' +
        'ruling on the planning rules.',
    },

    { tipo: 'titulo', texto: '8. The watercourse buffer' },
    {
      tipo: 'parrafo',
      texto:
        'A strip of thirty metres on each side of watercourses and a hundred ' +
        'metres around springs. It is protected land: nothing is built on it ' +
        'and nothing is paid for it. On a long narrow plot crossed by a ' +
        'stream, it can take away half the usable area without anything in the ' +
        'deed announcing it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is checked with the competent regional environmental authority, ' +
        'the body that delimits the buffer.',
    },

    { tipo: 'titulo', texto: '9. Easements' },
    {
      tipo: 'parrafo',
      texto:
        'Of way, of water mains, of power lines. The recorded ones are on the ' +
        'certificado de tradición. **The ones in fact are not.** A track the ' +
        'neighbours have been using for twenty years may appear on no paper at ' +
        'all and still be perfectly enforceable.',
    },
    {
      tipo: 'nota',
      texto:
        'This is the point that obliges you to go to the property and talk to ' +
        'the adjoining owners. No document replaces it.',
    },

    { tipo: 'titulo', texto: '10. Listed cultural property and protected areas' },
    {
      tipo: 'parrafo',
      texto:
        'If the building or its surroundings are declared listed cultural ' +
        'property, work on it requires a concept design approved by the ' +
        'cultural authority **before** the permit. It is a complete additional ' +
        'procedure, with timescales of its own.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And if the property sits inside a protected area, the regime of ' +
        'permitted uses is set by the management plan for that area, not by ' +
        'the POT. It is checked against the national register of protected ' +
        'areas and against the lists of the Ministerio de Cultura and of the ' +
        'local heritage institute.',
    },

    { tipo: 'titulo', texto: '11. Area and boundaries' },
    {
      tipo: 'parrafo',
      texto:
        'The area in the deed, the area in the cadastral record and the area a ' +
        'topographic survey comes back with rarely coincide. The difference ' +
        'may be a few metres or a whole strip, and on rural plots it tends to ' +
        'be larger.',
    },
    {
      tipo: 'nota',
      texto:
        'Online map viewers orient, but **they do not settle official ' +
        'boundaries**. Their own disclaimers say so. For a purchase, the ' +
        'measurement that counts is the one from the topographic survey ' +
        'carried out on the property itself.',
    },

    { tipo: 'titulo', texto: '12. The availability of public services' },
    {
      tipo: 'parrafo',
      texto:
        'A main running past the frontage does not mean there is ' +
        'availability. What counts is the **certificate of service ' +
        'availability** issued by the utility, and in some municipalities that ' +
        'document is today the real bottleneck of the permitting process.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On rural land the question changes shape: it is not whether there is ' +
        'a network, but what solution of your own is needed for water and for ' +
        'wastewater, and what environmental permit each one calls for.',
    },

    { tipo: 'titulo', texto: 'The table, to take with you' },
    {
      tipo: 'tabla',
      cabeceras: ['What is checked', 'Where', 'Can it end the purchase?'],
      filas: [
        ['Chain of title, injunctions, falsa tradición, recorded betterment levy', 'Certificado de tradición y libertad, the land registry extract', '**Yes**'],
        ['Class of land and partial plan', 'Written ruling on the planning rules', '**Yes**'],
        ['Unidad Agrícola Familiar, on rural land', 'The national land authority', '**Yes**'],
        ['Hazard and risk', 'Municipal disaster risk management body', '**Yes**'],
        ['Use, ratios, heights, setbacks', 'Written ruling on the planning rules', 'No, but it changes the project'],
        ['Which area the ratios are applied to', 'The POT of the municipality', 'No, but it changes the buildable area'],
        ['Road reservation', 'Certificado de tradición and the written ruling', 'Sometimes'],
        ['Watercourse buffer', 'Regional environmental authority', 'Sometimes'],
        ['Recorded easements', 'Certificado de tradición', 'Sometimes'],
        ['Easements in fact', '**A visit to the plot and to the adjoining owners**', 'Sometimes'],
        ['Listed cultural property', 'Ministerio de Cultura and the local heritage institute', 'No, but it adds a procedure'],
        ['Protected area', 'National register of protected areas', '**Yes**'],
        ['Area and boundaries', 'Topographic survey', 'Sometimes'],
        ['Availability of services', 'The utility', '**Yes**'],
      ],
      nota:
        'The twelve points of the title come out as fourteen rows here ' +
        'because two of them are checked in two different places. The list of ' +
        'enquiries is what matters; the number is only the way to remember it.',
    },

    { tipo: 'titulo', texto: 'What to write into the promise of sale' },
    {
      tipo: 'parrafo',
      texto:
        'Many of these enquiries take longer than the negotiating window ' +
        'lasts. The way out is not to skip them: it is to write them in as a ' +
        'condition.',
    },
    {
      tipo: 'lista',
      items: [
        '**A condition subsequent** tied to concrete outcomes: that the written ruling on the planning rules confirms the intended use, that there is no recorded reservation, that the property is not in risk that cannot be mitigated.',
        '**Enough time** for the enquiries that depend on somebody else. The regional environmental authority and the risk management body do not answer in three days.',
        '**Area and boundaries according to the survey**, not according to the deed, with the rule for what happens if they differ.',
        '**Full return of everything handed over** if the condition is not met. Without that clause, checking does not protect you: it only informs you.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And a warning about method: a promise of sale over real property has ' +
        'requirements of form and of content worth going over with a lawyer. ' +
        'This article covers the planning and the technical side, which is ' +
        'precisely the part a lawyer does not check.',
    },

    { tipo: 'titulo', texto: 'What cannot be checked from a screen' },
    {
      tipo: 'lista',
      items: [
        '**The real access.** A road that exists on the map may be a disputed easement, or may not be passable in the rainy season.',
        '**The topography.** A steep slope does not appear on the certificado de tradición and it changes the cost of foundations, cuts and retaining walls completely.',
        '**The ground.** The geotechnical survey conditions the foundations, the foundations condition the structure and the structure conditions the project. Commission it as soon as you have the plot, even before drawing anything.',
        '**The neighbours and what they are building.** It is free information and it usually tells you more than the POT does.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'It circulates that below a certain area no soil survey is needed. ' +
        '**That assertion is worth distrusting.** What does stand up is that ' +
        'the law requires a geotechnical engineer answerable for the survey, ' +
        'even in the houses of one and two storeys that are excepted from ' +
        'independent technical supervision. The exception is one of ' +
        'supervision, not of survey.',
    },

    { tipo: 'titulo', texto: 'In short' },
    {
      tipo: 'parrafo',
      texto:
        'A plot is bought with three documents in hand — the certificado de ' +
        'tradición, the written ruling on the planning rules and a topographic ' +
        'survey — and with two enquiries already made: risk and the ' +
        'watercourse buffer. Everything else follows from there.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It costs a few days and almost no money. Compared with what it costs ' +
        'to find out afterwards, it is the best investment in the whole ' +
        'project.',
    },
  ],
}
