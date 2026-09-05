import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Interventoría: por qué el que construye no puede ser el que
 * vigila».
 *
 * **`interventoría` no se traduce.** No hay término inglés que signifique lo
 * mismo: `site supervision` es justo la figura de la que el artículo la
 * distingue, y `clerk of works` cubre menos —no autoriza pagos ni revisa el
 * contrato—. Se conserva la palabra, se glosa en la primera mención como
 * supervisión técnica independiente del constructor, y se reserva
 * `site supervision` para la supervisión arquitectónica y `site management`
 * para la dirección de obra. La tabla de las tres figuras es el eje de la
 * pieza y esa distinción es lo único que la sostiene.
 *
 * Se traducen enteras las dos declaraciones de límite: el Decreto 2090 **ya no
 * obliga** —perdió su fundamento y el Consejo de Estado lo confirmó en 2020—,
 * y los porcentajes del 4.0% y el 2.5% son referencia del oficio, no tarifa.
 * Y la exención del Título E es **de supervisión**, no de tener diseñador
 * estructural e ingeniero geotecnista: ese matiz se conserva palabra por
 * palabra porque el original avisa de que se lee mal a menudo.
 *
 * Separadores: «2.000 m²» es «2,000 m²», «4,0 %» es «4.0%».
 */
export const traduccion: TraduccionPost = {
  slug: 'interventoria-de-obra',
  titulo: 'Interventoría: why the one who builds cannot be the one who checks',
  traducido: '2026-09-05',
  resumen:
    'It is neither mistrust nor red tape: it is that nobody finds their own ' +
    'mistakes with the same enthusiasm they bring to finding somebody ' +
    'else’s. What an interventor does, when the law requires one, and when it ' +
    'is worth having on a house.',
  metaDescripcion:
    'What interventoría — independent technical supervision of the works — ' +
    'is, when Colombian law requires it, and why independence is the point.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The question almost always arrives with a note of embarrassment: "am ' +
        'I going to pay somebody to watch over somebody else I am also ' +
        'paying?". Put that way it sounds like mistrust, or like an expense ' +
        'that could be saved.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is neither. **Nobody finds their own mistakes with the same ' +
        'enthusiasm they bring to finding somebody else’s**, especially when ' +
        'correcting them costs money and time. This is not a judgement on ' +
        'anyone’s honesty: it is how incentives work. Interventoría is the ' +
        'answer Colombian practice gives to that — independent technical ' +
        'supervision of the works, engaged by the client and answerable only ' +
        'to the client.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Colombian law recognises this, and in some cases makes it compulsory.',
    },

    { tipo: 'titulo', texto: 'Three things that get confused' },
    {
      tipo: 'tabla',
      cabeceras: ['Role', 'What it does', 'Whose side it is on'],
      filas: [
        [
          '**Site management**',
          'In charge of carrying the work out: labour, programming, quality, safety',
          'The builder’s. It is part of building',
        ],
        [
          '**Architectural site supervision**',
          'The author of the design looks after whether what is built resembles what was designed. Finishes, questions about how the drawings are to be read',
          'The design’s',
        ],
        [
          '**Interventoría**',
          'Monitors the builder technically, contractually and financially',
          '**Yours**, and yours alone',
        ],
      ],
      nota:
        'The fee schedule puts it bluntly where the architect is concerned: ' +
        'the architect "has only the function of supervising their design and ' +
        'not the technical management of the works". These are three ' +
        'different contracts, and often three different people.',
    },
    {
      tipo: 'nota',
      texto:
        'The commonest mistake on a small job is believing that the architect ' +
        'who produced the drawings "is keeping an eye on the works". The ' +
        'architect is keeping an eye on **their own design**, if supervision ' +
        'was engaged at all. That is not interventoría and it does not cover ' +
        'the same ground.',
    },

    { tipo: 'titulo', texto: 'When the law requires it' },
    {
      tipo: 'parrafo',
      texto:
        'There are two cases in which independence stopped being optional in ' +
        'Colombia, and both come from the same idea.',
    },
    { tipo: 'titulo', texto: 'Independent technical supervision, above 2,000 m²' },
    {
      tipo: 'parrafo',
      texto:
        'Buildings on a site that would allow more than **2,000 m² of built ' +
        'area** must be subject to technical supervision **independent of the ' +
        'builder**. And that supervisor is the one who issues, under oath, ' +
        'the **certificado técnico de ocupación** — the technical certificate ' +
        'of occupancy, the document from which the ten-year warranty on new ' +
        'housing starts to run.',
    },
    {
      tipo: 'nota',
      texto:
        'A distinction that is often misread: an exception is made for ' +
        'structures designed and built following Title E of the ' +
        'seismic-resistant building code, which covers one- and two-storey ' +
        'housing. But the exemption is from **supervision**, not from having ' +
        'a structural designer and a geotechnical engineer answerable for the ' +
        'work. Those remain compulsory.',
    },
    { tipo: 'titulo', texto: 'Independent review of the designs' },
    {
      tipo: 'parrafo',
      texto:
        'Above that same threshold, the structural designs must be reviewed ' +
        'by a professional **other than the designer and independent of them ' +
        'in employment terms**, at the expense of whoever applies for the ' +
        'permit. The permits regulation repeats the point: the reviewer ' +
        '"cannot be the same professional who prepared them, nor may they ' +
        'have an employment or contractual relationship with that person".',
    },
    {
      tipo: 'parrafo',
      texto:
        'Note what is being demanded: it is not enough for it to be a ' +
        'different person. **They have to be independent in employment ' +
        'terms.** Two engineers from the same office do not satisfy it. That ' +
        'level of detail only gets written down after somebody has already ' +
        'tried the opposite.',
    },

    { tipo: 'titulo', texto: 'What an interventor does' },
    {
      tipo: 'lista',
      items: [
        '**Verifies that what is built matches what was designed**, and that the materials are the ones specified rather than the ones that turned up.',
        '**Controls quantities.** What is invoiced has to be there on site. That is where the largest gap between what is paid for and what is carried out usually appears.',
        '**Checks the programme** and records delays as they happen, not when a claim is made.',
        '**Requires and files laboratory testing**: concrete strength, compaction, quality of the reinforcement steel.',
        '**Approves or rejects interim payment certificates.** This is the most important function and the one that confers real power.',
        '**Leaves a written record.** Site diary, minutes and a dated photographic record.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The last one is the most underrated. **An interventor with no ' +
        'authority over payments is an expensive spectator.** If the builder ' +
        'gets paid the same with or without that approval, the interventoría ' +
        'is decorative.',
    },

    { tipo: 'titulo', texto: 'What it costs' },
    {
      tipo: 'parrafo',
      texto:
        'The Colombian reference is still the 1989 fee schedule — no longer ' +
        'binding, but the place almost every quotation comes from:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Type of interventoría', 'Fee'],
      filas: [
        ['Interventoría **of the design** (reviewing the drawings before building)', '15% of the project and supervision fees'],
        ['Interventoría **of construction** on housing, restoration and refurbishment', '**4.0% of the actual cost** of the works'],
        ['Interventoría of construction in all other categories', '2.5% of the actual cost'],
      ],
      nota:
        'Decreto 2090 de 1989, paragraphs 6.2.1 and 6.2.2. These are not ' +
        'binding rates: the decree lost its legal foundation and the Consejo ' +
        'de Estado confirmed as much in 2020. They are the technical ' +
        'reference of the profession.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Put in context: **4% on a job is less than a single badly executed ' +
        'item usually costs** once it has to be demolished and done again. ' +
        'Interventoría does not always pay for itself, but it pays for itself ' +
        'with one such item avoided.',
    },

    { tipo: 'titulo', texto: 'Independence is the entire point' },
    {
      tipo: 'parrafo',
      texto:
        'If you take one thing away from this article, let it be this: ' +
        '**interventoría only works if whoever carries it out does not depend ' +
        'on whoever builds.**',
    },
    {
      tipo: 'parrafo',
      texto: 'The three ways of breaking that, all of them common:',
    },
    {
      tipo: 'lista',
      items: [
        '**The builder "finds you" the interventor.** However competent that person is, their next contract depends on that relationship, not on yours.',
        '**The interventor comes from the same office** that designed the work or that is building it. This is exactly what the rule prohibits for the review of designs.',
        '**The interventor is paid against progress on site.** If they are paid when the work advances, their incentive is for it to advance, not for it to stop when it ought to stop.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The question that settles everything: **who dismisses the ' +
        'interventor if the builder complains about them?** If the answer is ' +
        'not "I do", there is no interventoría.',
    },

    { tipo: 'titulo', texto: 'Is it worth it on a house?' },
    {
      tipo: 'parrafo',
      texto:
        'Below 2,000 m² it is not compulsory, but the logic does not change ' +
        'with size. It is worth having when any of these apply:',
    },
    {
      tipo: 'lista',
      items: [
        '**You cannot be on site.** You live in another city, or you have a job. Interventoría is your technical presence.',
        '**You did not choose the builder.** They were recommended to you, or they came with the plot.',
        '**The contract is fixed price.** There the builder’s incentive is to cut costs, and somebody has to verify that the cuts are not made in what cannot be seen.',
        '**The contract is cost-plus management.** There the incentive runs the other way — the fee grows with the cost — and somebody is needed to validate the quantities.',
        '**There is structure involved.** Extending, adding a storey, strengthening. What is done badly there does not show until it matters.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And when it probably is not worth it: a minor refurbishment that ' +
        'leaves the structure alone, with a maestro de obra you know — an ' +
        'experienced master builder who takes small jobs on directly — in a ' +
        'house where you are there every day. There the interventoría is a ' +
        'cost with no function.',
    },

    { tipo: 'titulo', texto: 'What the paperwork is for' },
    {
      tipo: 'parrafo',
      texto:
        'Interventoría reports look like red tape until the day a claim has ' +
        'to be made. Then they are the only evidence of what happened and ' +
        'when.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It matters especially on new housing: the builder is answerable for ' +
        'financial loss for **ten years counted from the certificado técnico ' +
        'de ocupación**. Ten years is a long time to argue from memory. With ' +
        'a site diary, minutes and dated photographs, it is a different ' +
        'conversation.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Interventoría does not make the works more expensive. **It makes ' +
        'doing them badly more expensive**, which is exactly what it is for.',
    },
  ],
}
