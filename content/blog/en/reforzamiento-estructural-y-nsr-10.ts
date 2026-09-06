import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Reforzamiento estructural: qué exige la norma y qué cuesta el
 * trámite».
 *
 * El término lo fija el corpus, no este artículo: **reforzamiento estructural
 * → structural strengthening**, que es lo que ya usa
 * `curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide` en la lista de
 * descuentos y en la tabla de modalidades, y `del-lote-a-la-licencia` en la
 * nota de vigencias. La NSR-10 se glosa como «the Colombian
 * earthquake-resistant construction code», igual que allí.
 *
 * La abstención que queda del original se traduce entera y sin suavizar:
 * **no existe fuente colombiana publicada con metodología para el costo de un
 * reforzamiento**. Y **no hay reglamento nuevo**: la AIS 100-24 no es
 * obligatoria porque le falta decreto, con su fecha de corte dentro del texto.
 *
 * **Puesta al día el 6 de septiembre de 2026, en la misma pasada que el
 * español.** El artículo ya no calla el capítulo del reglamento: nombra el
 * **capítulo A.10** y su título oficial. Ese título va **en español y entre
 * comillas**, con glosa inglesa a continuación, por la misma razón por la que
 * no se traduce «Ley 400 de 1997»: es la designación con la que hay que
 * pedirlo en una curaduría, y traducirla la vuelve inservible. Lo mismo con
 * «AIS 410-23: Evaluación y Reducción de la Vulnerabilidad Sísmica en
 * viviendas de mampostería» y con «AIS-610-EP-2017».
 *
 * `Título A` se mantiene como «Title A», que es lo que ya decía esta
 * traducción antes y lo que evita dos nombres para lo mismo dentro del propio
 * archivo. Las secciones del reglamento —A.10.1.3.2, A.10.9.2, A.10.9.2.7—
 * son numeración, no idioma, y van igual en los dos.
 *
 * **Ese título en español hace que `check-traducciones.ts` avise «quedan
 * rastros de español en el inglés» en el bloque 7, y el aviso es correcto: hay
 * español, y está puesto a propósito.** El detector descarta los nombres
 * propios encadenados, pero este título sigue en minúscula después de
 * «Edificaciones» y arrastra un «del» y una «la» que la heurística no puede
 * distinguir de una traducción a medias. Queda escrito aquí para que el
 * siguiente que lo vea no lo «arregle» traduciendo la designación del
 * capítulo, que es justo lo que la volvería inútil.
 *
 * Los separadores cambian: «2.000 m²» es «2,000 m²», «1,5» es «1.5», y el
 * «30 %» va pegado.
 */
export const traduccion: TraduccionPost = {
  slug: 'reforzamiento-estructural-y-nsr-10',
  titulo: 'Structural strengthening: what the code requires, what the procedure costs',
  traducido: '2026-09-06',
  resumen:
    'You have been told your building needs strengthening. What that means ' +
    'in terms of the code, who may sign it, which permit modality applies, ' +
    'and why the procedure costs less than you fear — while the works do ' +
    'not.',
  metaDescripcion:
    'What the Colombian earthquake-resistant code requires in order to ' +
    'strengthen an existing building, and which permit is needed.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'You have been handed a report saying the building needs structural ' +
        'strengthening. It is a phrase that frightens people and that almost ' +
        'nobody knows how to turn into decisions.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is what it means in terms of the code, which signatures are ' +
        'needed, and what can be expected of the procedure.',
    },

    { tipo: 'titulo', texto: 'Which code governs' },
    {
      tipo: 'parrafo',
      texto:
        'The code in force is the **NSR-10**, the Colombian ' +
        'earthquake-resistant construction code, adopted by **Decreto 926 de ' +
        '2010** under Ley 400 de 1997. It has not stood still: it has been ' +
        'amended, in this order, by **Decretos 2525 de 2010, 092 de 2011, 340 ' +
        'de 2012, 945 de 2017, 2113 de 2019, 1711 de 2021, 1401 de 2023 and ' +
        '1580 de 2023**. Nine decrees in all, and what governs is the text that ' +
        'results from every one of them — not the 2010 PDF that comes up first ' +
        'in a search.',
    },
    {
      tipo: 'nota',
      texto:
        'Three different things circulate mixed together and they are worth ' +
        'separating. **There is no new code.** The **AIS 100-24**, prepared by ' +
        'the Asociación Colombiana de Ingeniería Sísmica, the country’s seismic ' +
        'engineering association, tends to be presented as "the new code", but ' +
        '**it is not binding: it lacks the decree that would adopt it**. A ' +
        'different matter altogether are that same association’s technical ' +
        'annexes that did enter the code by decree, and which appear further ' +
        'down. This was checked on 6 September 2026. Until then, what governs ' +
        'is the NSR-10.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And on existing buildings the law is explicit about what it orders ' +
        'the code to contain:',
    },
    {
      tipo: 'cita',
      texto:
        'The procedures for evaluating the seismic vulnerability of ' +
        'buildings existing before the entry into force of the present law.',
      fuente: 'Ley 400 de 1997, article 48, number 16',
    },
    {
      tipo: 'parrafo',
      texto:
        'In other words: **assessing and strengthening what already exists ' +
        'is not a regulatory void.** It has a procedure of its own inside ' +
        'Title A of the code, distinct from the one applied to new build, and ' +
        'it has a name and a number: **chapter A.10**, «Evaluación e ' +
        'Intervención de Edificaciones construidas antes de la vigencia de la ' +
        'presente versión del Reglamento» — the assessment and intervention of ' +
        'buildings put up before the present version of the code came into ' +
        'force. It is worth asking for it that way, by its number: whoever ' +
        'hands you a vulnerability report should be working from that chapter, ' +
        'and should say so on the first page.',
    },

    { tipo: 'titulo', texto: 'When assessment is compulsory' },
    {
      tipo: 'parrafo',
      texto:
        'It is not the owner’s free choice in every case. A.10.1.3 sets out the ' +
        'chapter’s own scope, and the cases in which assessment becomes ' +
        'enforceable come from there:',
    },
    {
      tipo: 'lista',
      items: [
        '**The use of the building changes** (A.10.1.3.2). A house that becomes a school, an office or a warehouse takes loads other than those it was designed for. And the code counts as a change of use both the planning kind — residential to commercial — and a move from one of the use groups to a higher one.',
        '**The structure is extended or modified** (A.10.1.3.4). The chapter names «ampliaciones adosadas» and «ampliaciones en altura» in so many words — side extensions and extensions upwards. Adding a storey is not an interpretation; it is written down.',
        '**There has been damage from an earthquake** or another event (A.10.1.3.6), where the damage is moderate to severe — in the structure, in the non-structural elements or in both — and the building has not been declared for compulsory demolition.',
        '**The competent authority requires it.** If the municipal disaster-risk office issues a technical opinion finding serious damage to the load-bearing structure, or a judicial or administrative order intervenes, applying for the strengthening permit stops being optional. In propiedad horizontal — commonhold — the holder of that permit is the owners’ general meeting.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And there is one duty almost nobody remembers: article 54 of Ley 400 ' +
        'allowed **three years to assess and six to strengthen** **essential ' +
        'facilities and buildings serving the community** in zones of high and ' +
        'intermediate seismic hazard. Hospitals, schools, fire stations. For ' +
        'those the NSR-10 moved into use groups III and IV without their having ' +
        'been there before — school buildings among them — A.10.9.1 itself set ' +
        'the dates: **15 December 2013** for the studies and **15 December ' +
        '2016** for the strengthening. They expired.',
    },

    { tipo: 'titulo', texto: 'How far the strengthening has to go' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part almost nobody explains and the one that really moves ' +
        'the budget. The code **does not ask the same of every existing ' +
        'building**: the target of the strengthening depends on the use and on ' +
        'the period in which it was built.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['The building', 'The level it has to reach'],
      filas: [
        [
          'Use groups III and IV — essential facilities and buildings serving the community — whatever their age',
          'Safety **equivalent to that of a new building**',
        ],
        [
          'Use groups I and II, built under the NSR-98, after 19 February 1998',
          'Safety **equivalent to that of a new building**',
        ],
        [
          'Use groups I and II, built under Decreto 1400 de 1984: between 1 December 1984 and 19 February 1998',
          'Equivalent to new, but a **flexibility index of up to 1.5** is allowed; or **limited safety**, if the owner accepts it',
        ],
        [
          'Use groups I and II, built before 1 December 1984',
          'At a minimum, **limited safety**',
        ],
      ],
      nota:
        'NSR-10, A.10.9.2. Where the **limited safety** level is used, the code ' +
        'requires a memorandum signed by the structural designer and the owner ' +
        'declaring that it was, **executed as a public deed before a notary**. ' +
        'It is not a decorative formality: it is the record that the owner knew ' +
        'the building would not end up at the level of a new one.',
    },
    {
      tipo: 'nota',
      texto:
        'Two cases have a manual of their own, and both entered the code after ' +
        '2010. For **masonry dwellings of one, two and three storeys**, Decreto ' +
        '1401 de 2023 — corrected by Decreto 1580 of the same year — added ' +
        'A.10.9.2.7 and allows them to be assessed and intervened following the ' +
        '**AIS 410-23** standard, «Evaluación y Reducción de la Vulnerabilidad ' +
        'Sísmica en viviendas de mampostería». For **listed heritage buildings ' +
        'of one and two storeys in adobe and rammed earth**, Decreto 2113 de ' +
        '2019 brought in **AIS-610-EP-2017**. If yours is one of those two, ask ' +
        'for it by name.',
    },

    { tipo: 'titulo', texto: 'Who signs what' },
    {
      tipo: 'parrafo',
      texto:
        'There is no margin here. The law reserves the signatures, and ' +
        'whoever signs answers for it:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Document', 'Who signs it'],
      filas: [
        [
          'Vulnerability assessment and design of the strengthening',
          '**Civil engineer**, structural designer',
        ],
        [
          'Geotechnical survey, where the case calls for one',
          '**Civil engineer**, geotechnical specialist',
        ],
        [
          'Measured architectural survey and the intervention project',
          'Architect with professional registration',
        ],
      ],
      nota:
        'Ley 400 de 1997, articles 4 and 26. An architect may accompany the ' +
        'whole process, coordinate it and take it through the procedure — ' +
        'but **does not sign the structural verdict**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And in buildings that **reach or exceed** 2,000 m², the review of the ' +
        'structural designs has to be carried out by a professional **other ' +
        'than the designer and independent of them in employment terms**, at ' +
        'the cost of whoever applies for the permit. Mind the threshold: if the ' +
        'building falls short of that figure but the extension you are about to ' +
        'apply for takes it there once added to what is already built, the ' +
        'independent review is required too.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is one more signature that rarely appears in a budget and ' +
        'that the code requires **in every case**, with no area threshold: the ' +
        'construction of the structural intervention has to be placed under ' +
        '**independent technical supervision** (A.10.1.6). It is not optional, ' +
        'and the designer does not do it.',
    },

    { tipo: 'titulo', texto: 'The permit: which one, and how long it lasts' },
    {
      tipo: 'parrafo',
      texto:
        'Structural strengthening is a **modality of building permit in its ' +
        'own right**, not a minor work that can be done without permission. ' +
        'And it has three particularities worth knowing before you budget.',
    },
    {
      tipo: 'lista',
      items: [
        '**It lasts 24 months**, extendable once by 12. The 36 months quoted everywhere belong to new build, urbanisation and parcelación, its rural counterpart. This modality is not among them.',
        '**The charges are assessed on a reduced base.** Where there is a curaduría — the private office licensed by the state to issue permits — structural strengthening is assessed on **30% of the area to be intervened**, not on the whole. It is a real relief within the procedure.',
        '**A building that never had a permit can still be strengthened.** The modality is granted without prejudice to the building being formally recognised afterwards, provided the works were completed **at least five years** before the strengthening is applied for. Taken on its own, it approves no uses and authorises no works other than the strengthening.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And an incentive almost nobody uses: the law empowers ' +
        'municipalities to **exempt from the tax on issuing the remodelling ' +
        'permit and from property tax, for a period each municipality ' +
        'defines**, pre-existing buildings that are brought up to date and ' +
        'adjusted through works complying with the code. Ask at your town hall ' +
        'whether your municipality adopted it — it is a free enquiry that can ' +
        'change the figure.',
    },

    {
      tipo: 'titulo',
      texto: 'The right order, and the one that wrecks the budget',
    },
    {
      tipo: 'parrafo',
      texto:
        'The most expensive mistake is contracting the works before you have ' +
        'the diagnosis. The sequence that works:',
    },
    {
      tipo: 'lista',
      items: [
        '**A survey of what is there.** Real measurements, not the ones in the title deed.',
        '**The vulnerability assessment**, signed by a structural engineer. This is where you learn whether strengthening is needed, how much and where.',
        '**The geotechnical survey**, if the diagnosis calls for it. Sometimes the problem is not upstairs.',
        '**The design of the strengthening**, which is a project in itself.',
        '**The permit**, in the structural strengthening modality.',
        '**The works**, followed by whoever designed them and under the independent technical supervision the code requires in every case.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Skipping step 2 is the reason strengthening quotes turn up varying ' +
        'tenfold between one another: **they are pricing different solutions ' +
        'to a problem nobody has defined.**',
    },

    { tipo: 'titulo', texto: 'What to expect on cost' },
    {
      tipo: 'parrafo',
      texto:
        'I am not going to give figures, and for one reason: **no published ' +
        'Colombian source sets out a methodology for the cost of a ' +
        'strengthening scheme.** It depends on the structural system, on the ' +
        'damage, on access, and on whether the building can be emptied.',
    },
    {
      tipo: 'parrafo',
      texto: 'What can be said about the shape of the cost is this:',
    },
    {
      tipo: 'lista',
      items: [
        'The **procedure** is the cheap part, and with the reduced 30% base it is cheaper than people fear.',
        'The **assessment and the design** are proportionally expensive against a new build, because what already exists has to be uncovered.',
        'The **works** are where the money is, and their cost is settled by the diagnosis — not the other way round.',
        'There is one line that catches people out: in a structural intervention, complying with **Títulos J and K** — fire protection and the supplementary requirements — is left **to the owner’s discretion**, except where there is a change of use or an extension, in which case it is compulsory (A.10.1.3.7). That is to say, in the two commonest cases.',
        'And in propiedad horizontal you have to add the time: the contingency fund comes first, and **the extraordinary levy is only approved if the fund turns out to be insufficient**.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Any figure you are given before the assessment is an estimate ' +
        'against an unknown problem. It may serve to tell you whether going ' +
        'on is worthwhile; not to sign a contract on.',
    },
  ],
}
