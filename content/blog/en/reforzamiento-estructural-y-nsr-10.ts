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
 * Las dos abstenciones del original se traducen enteras y sin suavizar:
 * **no hay reglamento nuevo** —el documento gremial más reciente no es
 * obligatorio porque le falta decreto— y **no existe fuente colombiana
 * publicada con metodología para el costo de un reforzamiento**. Tampoco se
 * nombra el capítulo del reglamento que regula la evaluación de edificaciones
 * existentes, porque el español no lo nombra.
 *
 * Los separadores cambian: «2.000 m²» es «2,000 m²», y el «30 %» va pegado.
 */
export const traduccion: TraduccionPost = {
  slug: 'reforzamiento-estructural-y-nsr-10',
  titulo: 'Structural strengthening: what the code requires, what the procedure costs',
  traducido: '2026-09-05',
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
        'earthquake-resistant construction code, adopted by decree in 2010 ' +
        'under Ley 400 de 1997, with several later amending decrees.',
    },
    {
      tipo: 'nota',
      texto:
        'Three different things circulate mixed together and they are worth ' +
        'separating. **There is no new code.** A more recent technical ' +
        'document produced by the profession does exist and tends to be ' +
        'presented as "the new code", but **it is not binding: it lacks the ' +
        'decree that would adopt it**. Until then, what governs is the ' +
        'NSR-10.',
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
        'Title A of the code, distinct from the one applied to new build.',
    },

    { tipo: 'titulo', texto: 'When assessment is compulsory' },
    {
      tipo: 'parrafo',
      texto:
        'It is not the owner’s free choice in every case. Assessment becomes ' +
        'enforceable when:',
    },
    {
      tipo: 'lista',
      items: [
        '**The use of the building changes.** A house that becomes a school, an office or a warehouse takes loads other than those it was designed for.',
        '**The structure is extended or modified.** Adding a storey is the classic case.',
        '**There has been damage from an earthquake** or another event.',
        '**The competent authority requires it.**',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And there is one duty almost nobody remembers: the law set ' +
        'deadlines for **essential facilities and buildings serving the ' +
        'community** in zones of high and intermediate seismic hazard to be ' +
        'assessed and strengthened. Hospitals, schools, fire stations. Those ' +
        'deadlines expired years ago.',
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
        'And in buildings of more than 2,000 m², the review of the ' +
        'structural designs has to be carried out by a professional **other ' +
        'than the designer and independent of them in employment terms**, at ' +
        'the cost of whoever applies for the permit.',
    },

    { tipo: 'titulo', texto: 'The permit: which one, and how long it lasts' },
    {
      tipo: 'parrafo',
      texto:
        'Structural strengthening is a **modality of building permit in its ' +
        'own right**, not a minor work that can be done without permission. ' +
        'And it has two particularities worth knowing before you budget.',
    },
    {
      tipo: 'lista',
      items: [
        '**It lasts 24 months**, extendable once by 12. The 36 months quoted everywhere belong to new build, urbanisation and parcelación, its rural counterpart. This modality is not among them.',
        '**The charges are assessed on a reduced base.** Where there is a curaduría — the private office licensed by the state to issue permits — structural strengthening is assessed on **30%**, not on the whole. It is a real relief within the procedure.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And an incentive almost nobody uses: the law empowers ' +
        'municipalities to **exempt from permit taxes and from property tax, ' +
        'for a period each municipality defines**, pre-existing buildings ' +
        'that are brought up to date and adjusted through works complying ' +
        'with the code. Ask at your town hall whether your municipality ' +
        'adopted it — it is a free enquiry that can change the figure.',
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
        '**The works**, supervised by whoever designed them.',
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
