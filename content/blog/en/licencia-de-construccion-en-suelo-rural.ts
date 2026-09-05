import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Licencia de construcción en suelo rural: por qué tarda el
 * doble».
 *
 * El artículo abre desmontando su propio titular, y esa honestidad se traduce
 * entera: **«el doble» no es un dato medido**, el plazo legal es idéntico al
 * urbano —45 días hábiles— y lo que se duplica es el expediente previo. No se
 * añade aquí ninguna duración de trámite ambiental: el español declara que no
 * las pudo verificar y esa declaración se traduce igual.
 *
 * Vocabulario tomado del corpus: la cita de los 45 días hábiles palabra por
 * palabra como en `del-lote-a-la-licencia`; `radicación en legal y debida
 * forma` → filing in due and proper form; `expensas` sin traducir como en
 * `curaduria-urbana`; `curaduría urbana` y `curador` sin traducir; `obra
 * nueva` → new build y `parcelación` sin traducir; `corporación autónoma
 * regional`, `Unidad Agrícola Familiar` y `ronda hídrica` → watercourse
 * buffer, de `comprar-lote-rural` y `agua-en-el-campo`.
 *
 * Contexto añadido para el lector de fuera, una frase por sitio: qué es el
 * POT, qué es una curaduría urbana y por qué la corporación autónoma regional
 * es una entidad distinta del municipio.
 */
export const traduccion: TraduccionPost = {
  slug: 'licencia-de-construccion-en-suelo-rural',
  titulo: 'The building permit on rural land: why it takes twice as long',
  traducido: '2026-09-05',
  resumen:
    'The legal term is identical to the urban one: forty-five working days. ' +
    'What doubles is everything that has to be ready before you file, and ' +
    'that is where the months nobody counted go.',
  metaDescripcion:
    'Why a building permit on rural land in Colombia takes longer: the ' +
    'environmental and service procedures to settle before you file.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'I will start by taking my own title apart, because that is the honest ' +
        'thing to do: **"twice as long" is not a measured fact.** There is no ' +
        'published statistic in Colombia comparing the duration of urban ' +
        'permitting with rural permitting, and anybody who gives you a figure ' +
        'did not get it from anywhere.',
    },
    {
      tipo: 'parrafo',
      texto:
        'More than that: **the legal term is exactly the same.** Forty-five ' +
        'working days, urban or rural, curaduría urbana — the private permitting ' +
        'office — or municipal planning department. The rule draws no ' +
        'distinction.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And yet the perception is right, and it has a technical explanation. ' +
        'What gets longer in the countryside is not the study of the ' +
        'application: it is everything that has to be settled **before** the ' +
        'clock starts running. That much can be explained with the rules in ' +
        'hand, and it is what this article is about.',
    },

    { tipo: 'titulo', texto: 'The clock does not start when you hand over papers' },
    {
      tipo: 'cita',
      texto:
        'Curadores urbanos and the municipal or district body in charge of the ' +
        'study, processing and issuing of permits shall have a maximum term of ' +
        'forty-five (45) working days to resolve applications […] Once that ' +
        'term has expired, positive administrative silence shall apply.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'The phrase that decides everything is not in the quotation, it is in ' +
        'the condition: the 45 days run **from filing in due and proper form**, ' +
        'that is, with the file complete. An incomplete file does not start the ' +
        'clock, and it does not freeze the rules either.',
    },
    {
      tipo: 'nota',
      texto:
        'This is the key to the whole article. **On urban land, "a complete ' +
        'file" means documents that depend on you and on your designers. On ' +
        'rural land, a good part of that file depends on third parties who have ' +
        'timescales of their own and queues of their own.**',
    },

    { tipo: 'titulo', texto: 'What gets added in the countryside' },
    {
      tipo: 'tabla',
      cabeceras: ['Requirement', 'On urban land?', 'On rural land?', 'Who it depends on'],
      filas: [
        [
          'Certificate on the legal status of the property',
          'Yes',
          'Yes',
          'Land registry',
        ],
        ['Written ruling on the planning rules', 'Yes', 'Yes', 'Municipality'],
        ['Topographic survey', 'Yes', 'Yes, and usually longer', 'Surveyor'],
        ['Soil survey and structural design', 'Yes', 'Yes', 'Civil engineer'],
        [
          '**Availability of public services**',
          'Certificate from the provider',
          '**An evidenced solution of your own**, where there is no network',
          'Provider or corporación',
        ],
        [
          '**Water concession**',
          'No',
          '**Yes, if the water comes from a source of your own**',
          'Corporación autónoma regional',
        ],
        [
          '**Discharge permit or approved treatment system**',
          'No',
          '**Yes, if there is no sewer**',
          'Corporación autónoma regional',
        ],
        [
          '**Delimitation of the watercourse buffer**',
          'Sometimes',
          '**Nearly always**',
          'Corporación autónoma regional',
        ],
        [
          '**Forest use permit**, if trees have to be felled',
          'Rarely',
          '**Frequently**',
          'Corporación autónoma regional',
        ],
        [
          '**Applicable maximum density**',
          'Does not apply',
          '**Yes, on suburban land**',
          'Corporación autónoma regional',
        ],
        [
          '**Check on the Unidad Agrícola Familiar**',
          'Does not apply',
          '**Yes, if there was or will be a subdivision**',
          'National land authority',
        ],
      ],
      nota:
        'Count the rows in bold: seven requirements that do not exist in the ' +
        'city, and **six of them depend on the same body**, the corporación ' +
        'autónoma regional, which is the regional environmental authority and ' +
        'not part of the town hall. That bottleneck is the real explanation of ' +
        'the "twice as long".',
    },

    { tipo: 'titulo', texto: 'The four causes of delay, in order of weight' },

    { tipo: 'titulo', texto: '1. The environmental procedures are separate processes' },
    {
      tipo: 'parrafo',
      texto:
        'A water concession or a discharge permit is not an annex to the permit ' +
        'file: they are complete administrative procedures, with an ' +
        'application, a technical site visit, an assessment and a formal ' +
        'decision. They run at the corporación autónoma regional, not at the ' +
        'curaduría, and how long they take depends on each corporación.',
    },
    {
      tipo: 'nota',
      texto:
        'I do not publish timescales for these procedures because they vary by ' +
        'corporación and I could not verify them against a comparable official ' +
        'source. What I can state: **they are sequential with respect to the ' +
        'permit, not parallel**, where the file requires them.',
    },

    { tipo: 'titulo', texto: '2. The planning enquiry is harder to make' },
    {
      tipo: 'parrafo',
      texto:
        'In a large city, the written ruling on the planning rules is applied ' +
        'for online and arrives with the use, the treatment and the ratios. In ' +
        'many rural municipalities the POT — the municipal land-use plan — is ' +
        'not published in a viewer anybody can consult, the mapping is of low ' +
        'resolution, and the exact position of the property on that mapping is ' +
        'arguable.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That produces a back and forth that appears in no legal term: ' +
        'clarifying which category the property falls into before anything can ' +
        'be designed at all.',
    },

    { tipo: 'titulo', texto: '3. There is hardly ever a curaduría' },
    {
      tipo: 'parrafo',
      texto:
        'In municipalities with no curador urbano appointed, the permit is ' +
        'issued by the municipal planning office. That has a real financial ' +
        'advantage — **charging expensas is prohibited** — and an operational ' +
        'cost:',
    },
    {
      tipo: 'cita',
      texto:
        'In no case are the municipal or district authorities in charge of the ' +
        'study, processing and issuing of permits authorised to make charges by ' +
        'way of expensas.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.6.8.1, paragraph 4',
    },
    {
      tipo: 'parrafo',
      texto:
        'The planning office of a small municipality does many things besides ' +
        'issue permits, and the permit competes for the time of the same team. ' +
        '**The legal term is the same; the capacity is not.**',
    },

    { tipo: 'titulo', texto: '4. The file is filed incomplete' },
    {
      tipo: 'parrafo',
      texto:
        'It is the most expensive mistake and the most frequent. Filing "to ' +
        'secure a date" without everything ready gains nothing: the term does ' +
        'not start running, the rules do not freeze, and at worst the procedure ' +
        'ends in abandonment.',
    },
    {
      tipo: 'nota',
      texto:
        'On rural land, the number one cause of an incomplete file is the ' +
        'evidence for water and sanitation. It is left until last because it ' +
        'looks like a construction matter, and it is a permitting matter.',
    },

    { tipo: 'titulo', texto: 'The other confusion: which permit you need' },
    {
      tipo: 'parrafo',
      texto:
        'In the countryside two different permits are sometimes needed, and ' +
        'applying for the wrong one costs you the whole procedure:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What you want to do', 'Which permit', 'Validity'],
      filas: [
        ['Divide a rural property', 'Subdivision', '12 months, cannot be extended'],
        [
          'Create plots with infrastructure works',
          'Parcelación, the rural counterpart of an urbanisation',
          '36 months',
        ],
        ['Build the house from scratch', 'Construction in the **new build** modality', '36 months'],
        [
          'Extend, adapt, alter or strengthen what exists',
          'Construction in whichever modality applies',
          '**24 months**',
        ],
      ],
      nota:
        'Decreto 1783 de 2021, article 27. **The 36 months are not ' +
        'universal**: they cover only new build, urbanisation and parcelación. ' +
        'It is the most repeated mistake on the subject, even among those who ' +
        'correct the previous error of saying 24 for everything.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The extension has to be applied for **no later than 30 working days ' +
        'before** expiry — working days, not calendar days — with the ' +
        'documentation complete and a sworn statement that the works have ' +
        'already begun.',
    },

    { tipo: 'titulo', texto: 'How it actually gets shorter' },
    {
      tipo: 'parrafo',
      texto:
        'Almost all the time that can be won lies before filing, not after. In ' +
        'order of return:',
    },
    {
      tipo: 'lista',
      items: [
        '**Start with the corporación autónoma regional, not with the municipality.** It decides more things and it takes longest. Ask in writing: applicable density, watercourse buffer over the property, and what it requires for water and discharges.',
        '**Commission the soil survey as soon as you have the plot.** It is one of the few things that can be brought forward without having decided anything about the house, and it governs the whole structure.',
        '**Settle water and sanitation at concept design stage**, not at the finishes stage. They decide where the house can stand as much as the ground does.',
        '**Check the Unidad Agrícola Familiar before buying.** If the property was born of an irregular division, no later procedure puts it right.',
        '**File complete.** It is the only way for the forty-five working days to be forty-five working days.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And one enquiry hardly anybody makes, which is free: verbal enquiries ' +
        'about the planning rules cannot be charged for. Before commissioning a ' +
        'drawing, go and ask.',
    },

    { tipo: 'titulo', texto: 'The short answer' },
    {
      tipo: 'parrafo',
      texto:
        'The rural permit does not take longer because the official is slower. ' +
        'It takes longer because **the file demands seven things that do not ' +
        'exist in the city, and six of them are decided by a body other than ' +
        'the one that issues the permit.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Anyone who starts with the corporación autónoma regional and leaves ' +
        'filing until they have everything does not live through that ' +
        '"double". Anyone who starts with the drawing does.',
    },
  ],
}
