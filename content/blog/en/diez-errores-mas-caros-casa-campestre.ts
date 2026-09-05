import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Los diez errores más caros al construir una casa campestre».
 *
 * La cita del artículo 44 de la Ley 160 se traduce **entera, con la salvedad
 * inicial**: «Salvo las excepciones que se señalan en el artículo siguiente».
 * Sin esa frase, una prohibición que tiene cuatro excepciones parece absoluta,
 * y la nota que la acompaña —con el enlace a `comprar-lote-rural`— es
 * exactamente la corrección que el español hizo hoy.
 *
 * Vocabulario tomado del corpus: `Unidad Agrícola Familiar` y la
 * `corporación autónoma regional` como en `comprar-lote-rural` y en
 * `agua-en-el-campo`; la cita del artículo 26 de la Ley 400 literal como en
 * `arquitecto-maestro-de-obra-o-constructora`; la tabla de vigencias con las
 * mismas modalidades que `del-lote-a-la-licencia`; `interventoría` sin
 * traducir y glosada como en `interventoria-de-obra`.
 *
 * **Las dos declaraciones de lo no medido se traducen igual y sin número.** El
 * bloque de lote, diseños, licencias y trámites sigue siendo un orden de
 * magnitud propio y no una estadística publicada, y la variación porcentual de
 * la mano de obra sigue sin publicarse.
 */
export const traduccion: TraduccionPost = {
  slug: 'diez-errores-mas-caros-casa-campestre',
  titulo: 'The ten most expensive mistakes when building a country house',
  traducido: '2026-09-05',
  resumen:
    'Ordered by what they cost, not by how often they happen. The first can ' +
    'leave a property that can never be conveyed; the last only costs money. ' +
    'All ten are avoided before the works begin.',
  metaDescripcion:
    'The costliest mistakes when building a country house in Colombia, the ' +
    'stage at which each is avoided, and the rule that explains it.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The mistakes made on a country house are not spread evenly. Some cost ' +
        'money and get corrected; others leave a property that is of no use to ' +
        'anybody, and nothing corrects those.',
    },
    {
      tipo: 'parrafo',
      texto:
        'They are ordered by cost, from the highest down, and each comes with ' +
        'the stage at which it is avoided. Which is nearly always one stage ' +
        'earlier than the one the owner believes they are in.',
    },

    { tipo: 'titulo', texto: '1. Buying a property below the Unidad Agrícola Familiar' },
    {
      tipo: 'parrafo',
      texto:
        'It is the most expensive mistake there is on rural land, and the only ' +
        'one whose consequence is not economic but legal.',
    },
    {
      tipo: 'cita',
      texto:
        '**Save for the exceptions set out in the following article**, rural ' +
        'properties may not be divided below the extent determined by INCORA ' +
        'as the Unidad Agrícola Familiar for the municipality or zone in ' +
        'question. Accordingly, on pain of absolute nullity of the act or ' +
        'contract, no action or transaction whatsoever may be carried out that ' +
        'results in the division of a rural property into areas smaller than ' +
        'that set as the Unidad Agrícola Familiar for the corresponding ' +
        'municipality by INCORA.',
      fuente: 'Ley 160 de 1994, article 44',
    },
    {
      tipo: 'nota',
      texto:
        'That opening phrase matters, and this piece had been cutting it. The ' +
        'prohibition **is not absolute**: article 45 carries four exceptions, ' +
        'and one of them — acts creating properties of smaller area for a ' +
        'principal purpose other than farming — is precisely the one that tends ' +
        'to apply to a country house. All four, together with the condition ' +
        'that the circumstance be recorded in the public deed, are in [buying a ' +
        'rural lot](/blog/comprar-lote-rural-que-verificar-antes-de-firmar). ' +
        'INCORA no longer exists: its functions over the Unidad Agrícola ' +
        'Familiar — the minimum farm size set for each municipality — now sit ' +
        'with the Agencia Nacional de Tierras, the national land authority.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Absolute nullity means the transaction never existed.** There is no ' +
        'fine that puts it right, it is not cured by the passing of time and no ' +
        'later procedure fixes it. There are rural plots paid for, fenced and ' +
        'occupied whose buyer can neither convey them nor obtain a permit for ' +
        'them.',
    },
    {
      tipo: 'nota',
      texto:
        '**It is avoided before signing the promise of sale**, by asking what ' +
        'the Unidad Agrícola Familiar for the zone is and where the property ' +
        'came from. It costs one enquiry.',
    },

    { tipo: 'titulo', texto: '2. Buying land that is not developable, believing it will be' },
    {
      tipo: 'parrafo',
      texto:
        'Two versions of the same mistake. The first is expansion land with no ' +
        'adopted plan parcial, the partial plan that has to be approved before ' +
        'anything else: until that plan is approved, only agricultural and ' +
        'forestry uses are allowed there. The second is rural land in a ' +
        'protection category, which is simply not developable, and no procedure ' +
        'makes it developable.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The seller is not always lying. "It is going to be developable" may ' +
        'well be true. What nobody can tell you is when, and buying today at ' +
        'the price of that future is taking on a risk that cannot be ' +
        'quantified.',
    },
    {
      tipo: 'nota',
      texto:
        '**It is avoided with the written ruling on the planning rules**, which ' +
        'is free, before the promise of sale.',
    },

    { tipo: 'titulo', texto: '3. Leaving the water and the waste water until last' },
    {
      tipo: 'parrafo',
      texto:
        'In the city, services are a line in the budget. In the countryside, ' +
        'with no public network, they are **two complete environmental ' +
        'procedures**: the water concession for the source of your own, and the ' +
        'discharge permit or approved treatment system for the waste water.',
    },
    {
      tipo: 'parrafo',
      texto:
        'They are handled by the corporación autónoma regional, the regional ' +
        'environmental authority, not by the municipality, and they are ' +
        'administrative procedures with an application, a site visit and a ' +
        'formal decision. Where the permit file requires them, **they come ' +
        'first and do not run in parallel**.',
    },
    {
      tipo: 'nota',
      texto:
        '**It is avoided at concept design stage.** They decide where and how ' +
        'the house stands as much as the soil survey does, and they arrive late ' +
        'because they look like a construction matter when they are a ' +
        'permitting one.',
    },

    { tipo: 'titulo', texto: '4. Asking the wrong authority' },
    {
      tipo: 'parrafo',
      texto:
        'In the countryside there are three authorities deciding different ' +
        'things, and confusing them costs weeks:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Who', 'What they decide', 'What they do NOT decide'],
      filas: [
        [
          '**The national land authority**',
          'The Unidad Agrícola Familiar',
          'Densities, uses, ratios',
        ],
        [
          '**The corporación autónoma regional**',
          'Densities in suburban land, watercourse buffers, water and discharges, forest use',
          '**The Unidad Agrícola Familiar**',
        ],
        [
          '**The municipality, through its POT**',
          'The class of land, the categories, the uses, the ratios',
          'The environmental permits',
        ],
      ],
      nota:
        'The commonest confusion, and it is repeated even among professionals, ' +
        'is believing that the corporación autónoma regional sets the Unidad ' +
        'Agrícola Familiar. It does not.',
    },

    { tipo: 'titulo', texto: '5. Believing that a ruling on the planning rules gives you a right' },
    {
      tipo: 'cita',
      texto:
        'The issue of these rulings grants no rights and imposes no obligations ' +
        'on the person applying for them, and does not alter the rights ' +
        'conferred by permits that are in force or that have been carried out.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'The ruling is an informative photograph of the rules on a given date. ' +
        '**The only thing that freezes the rules is filing the permit ' +
        'application in legal and due form**, with the file complete. A project ' +
        'designed over two years on the strength of a ruling two years old may ' +
        'find itself facing different rules.',
    },

    { tipo: 'titulo', texto: '6. Commissioning the soil survey last' },
    {
      tipo: 'parrafo',
      texto:
        'The soil survey governs the foundations, the foundations govern the ' +
        'structure and the structure governs the architectural design. ' +
        'Commissioning it once the drawing exists forces you to work backwards, ' +
        'and on sloping ground that reworking can be total.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It gets said that below a certain area it is not needed. **That claim ' +
        'is worth distrusting.** What does hold is that the law requires a ' +
        'geotechnical engineer to take responsibility even for the one- and ' +
        'two-storey houses that are exempt from independent technical ' +
        'supervision: the exemption is from supervision, not from the survey.',
    },
    {
      tipo: 'nota',
      texto:
        '**It is avoided by commissioning it as soon as you have the plot**, ' +
        'even before drawing anything. It is one of the few things that can be ' +
        'brought forward without having decided anything about the house.',
    },

    { tipo: 'titulo', texto: '7. Budgeting the works and forgetting everything else' },
    {
      tipo: 'parrafo',
      texto:
        'The construction cost is what it costs to put the house up. **It ' +
        'excludes the plot, the designs, the permits and the procedures**, and ' +
        'that block is not marginal: in our experience it can add of the order ' +
        'of a quarter to 40% on top of the construction cost.',
    },
    {
      tipo: 'nota',
      texto:
        'I say "of the order of" deliberately. **It is an order of magnitude of ' +
        'our own, not a published statistic**, because no Colombian source, ' +
        'official or from the trade, measures it. What is a verifiable fact is ' +
        'the exclusion itself: comparing a sale price with a construction cost ' +
        'misleads, every time.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In the countryside there are two further items that barely exist in ' +
        'the city and are forgotten systematically: **the access** — the ' +
        'internal track, keeping it up during the works and the extra cost of ' +
        'hauling materials all the way there — and **the electricity supply ' +
        'connection**, which may require poles and a transformer of your own.',
    },

    { tipo: 'titulo', texto: '8. Indexing the budget with the wrong index' },
    {
      tipo: 'parrafo',
      texto:
        'A budget drawn up a year ago has to be updated, and that is what the ' +
        'official construction cost indices exist for. The mistake lies in ' +
        'applying the total index to the whole budget.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Labour has been rising considerably faster than the total index.** ' +
        'Anyone updating an entire budget with the general index ' +
        'systematically understates the labour chapter, which on a country ' +
        'house tends to weigh more than on a block of flats, because there is ' +
        'less repetition and less industrialisation.',
    },
    {
      tipo: 'nota',
      texto:
        'I do not publish the percentage changes here: they change every month, ' +
        'and a figure without its bulletin and its date is a lie with an expiry ' +
        'date. **Update with the current bulletin and keep labour separate from ' +
        'materials.**',
    },

    { tipo: 'titulo', texto: '9. Counting on thirty-six months of permit' },
    {
      tipo: 'parrafo',
      texto:
        'It is true that the validity went up to 36 months. **Not for every ' +
        'permit.**',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Modality', 'Validity', 'Extension'],
      filas: [
        [
          'Urbanisation, parcelación — its rural counterpart — and construction in the **new build** modality',
          '36 months',
          'Once, +12',
        ],
        [
          'Extension, adaptation, alteration, restoration, structural strengthening, demolition',
          '**24 months**',
          'Once, +12',
        ],
        ['Subdivision', '12 months', 'Cannot be extended'],
      ],
      nota:
        'Decreto 1783 de 2021, article 27. The extension has to be applied for ' +
        'no later than **30 working days before** expiry — working days, not ' +
        'calendar days — with the documentation complete and a sworn statement ' +
        'that the works have already begun.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Anyone planning an extension while counting on three years, and ' +
        'remembering the renewal the month before, is already too late. And an ' +
        'expired permit with the works half done is a bigger problem than ' +
        'starting late.',
    },

    { tipo: 'titulo', texto: '10. Believing that one signature covers everything' },
    {
      tipo: 'cita',
      texto:
        'The designer must be a civil engineer in the case of structural ' +
        'designs and geotechnical surveys, and an architect or a civil or ' +
        'mechanical engineer in the case of designs for non-structural ' +
        'elements.',
      fuente: 'Ley 400 de 1997, article 26',
    },
    {
      tipo: 'parrafo',
      texto:
        '**An architect cannot sign the structural design or the soil survey.** ' +
        'It is not a commercial policy: the law reserves those signatures to a ' +
        'civil engineer, and whoever signs answers for it in law. If somebody ' +
        'offers you "everything included" at a round price, ask who signs each ' +
        'drawing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On the same side sits checking the professional registration. The ' +
        'register is public and free, and without a current registration there ' +
        'is no permit.',
    },

    { tipo: 'titulo', texto: 'Mistake number eleven' },
    {
      tipo: 'parrafo',
      texto:
        'It does not fit the list because it is not a single mistake but a ' +
        'situation: **building at a distance with nobody watching the works on ' +
        'your behalf.** A country house is nearly always far from where the ' +
        'owner lives, and that is exactly the case in which interventoría — ' +
        'independent technical supervision of the works — stops being an ' +
        'expense and becomes your technical presence.',
    },
    {
      tipo: 'nota',
      texto:
        'The question that reveals everything: **who dismisses the interventor ' +
        'if the builder complains about them?** If the answer is not "I do", ' +
        'there is no interventoría.',
    },

    { tipo: 'titulo', texto: 'Where they are avoided, in a single table' },
    {
      tipo: 'tabla',
      cabeceras: ['Mistake', 'Stage at which it is avoided'],
      filas: [
        ['Unidad Agrícola Familiar', '**Before the promise of sale**'],
        ['Land that is not developable', '**Before the promise of sale**'],
        ['Water and waste water', 'Concept design'],
        ['The wrong authority', 'First week of enquiries'],
        ['Trusting the ruling on the planning rules', 'On filing the permit application'],
        ['A late soil survey', 'As soon as you have the plot'],
        ['An incomplete budget', 'Before committing to a figure'],
        ['Indexing with the wrong index', 'When updating the budget'],
        ['Validity of the permit', 'On receiving the permit, not at the end'],
        ['Signatures and registration', 'On contracting'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Eight of the ten are avoided **before a drawing exists**. That is the ' +
        'real moral of the list: on a country house, most of the money is won ' +
        'or lost in the weeks when it does not yet look as though anything is ' +
        'happening.',
    },
  ],
}
