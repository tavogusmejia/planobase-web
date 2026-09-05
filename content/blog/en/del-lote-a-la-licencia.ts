import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Del lote a la licencia: el recorrido completo».
 *
 * La pieza vive de una negativa y se traduce entera: **de las nueve etapas
 * solo una tiene plazo de ley**, y las cifras redondas que circulan —«seis
 * meses», «un año»— se declaran promedios de nada. No se añade ninguna
 * duración «orientativa» al resto del recorrido, que es justo lo que el
 * original se niega a hacer.
 *
 * Contexto añadido para el lector de fuera: qué es una curaduría urbana, qué
 * es un certificado de tradición y qué es un POT. Las modalidades de licencia
 * —urbanización, parcelación, obra nueva— se glosan en la tabla, porque son la
 * razón de que las vigencias no sean todas de 36 meses.
 *
 * Vocabulario del lote de proceso: anteproyecto → concept design, esquema
 * básico → outline scheme, radicación → filing, estudio de suelos → soil
 * survey, silencio administrativo positivo → positive administrative silence.
 */
export const traduccion: TraduccionPost = {
  slug: 'del-lote-a-la-licencia',
  titulo: 'From plot to permit: the whole route',
  traducido: '2026-09-05',
  resumen:
    'Nine stages between buying a plot and holding the building permit. ' +
    'Which of them carry a legal deadline and which depend on you, what can ' +
    'run in parallel, and the three points where almost every project falls ' +
    'behind.',
  metaDescripcion:
    'The stages between buying a plot and obtaining a building permit in ' +
    'Colombia, with the deadlines the law actually sets.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        '"How long does this take?" is the most asked and the worst answered ' +
        'question, because the honest answer comes in two parts: **there are ' +
        'stages with a deadline set by law and stages that depend entirely on ' +
        'how quickly you decide.** And the second kind are usually the long ' +
        'ones.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is the whole route, with what is known and what is not.',
    },

    { tipo: 'titulo', texto: 'The route' },
    {
      tipo: 'tabla',
      cabeceras: ['Stage', 'What happens', 'Time'],
      filas: [
        ['**1. Checking the property**', 'Certificado de tradición — the land registry extract — planning enquiry, class of land, encumbrances, risk, watercourse setbacks', 'Days. And **before you buy**, not after'],
        ['**2. Soil survey**', 'Boreholes, laboratory tests and a geotechnical report signed by a civil engineer', 'Weeks. It governs everything that follows'],
        ['**3. Topographic survey**', 'The plot as it really measures, which almost never matches the title deed', 'Days'],
        ['**4. Outline scheme**', 'The general outline: zones, access, how the rooms relate to one another', 'Depends on you'],
        ['**5. Concept design**', 'Floor plans, sections and elevations, enough to understand the building and decide', '**This is where almost everything stalls**'],
        ['**6. Architectural project**', 'Details, specifications and coordination with the other disciplines', 'Weeks'],
        ['**7. Technical designs**', 'Structural, plumbing and drainage, electrical and gas, each with its own signature', 'In parallel with 6'],
        ['**8. Filing**', 'The complete file lodged with the curaduría urbana — a private office licensed by the state to issue permits — or with the planning office', 'One day, if it is complete'],
        ['**9. Review of the application**', 'The authority reviews, raises observations and decides', '**45 working days**, by law'],
      ],
    },

    { tipo: 'titulo', texto: 'What the law does say' },
    {
      tipo: 'parrafo',
      texto:
        'Of the nine stages, only the last one has a legal deadline — and it ' +
        'is a fairly precise one:',
    },
    {
      tipo: 'cita',
      texto:
        'Curadores urbanos and the municipal or district body in charge of ' +
        'the study, processing and issuing of permits shall have a maximum ' +
        'term of forty-five (45) working days to resolve applications […] ' +
        'Once that term has expired, positive administrative silence shall ' +
        'apply.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.3.1',
    },
    {
      tipo: 'lista',
      items: [
        'The 45 working days run **from filing in due and proper form** — that is, with the file complete. An incomplete file does not start the clock.',
        'The term may be extended **once only, by up to half**, where the size or the complexity of the project warrants it.',
        'If a record of observations arrives, you have **30 working days** to answer, extendable by 15.',
        'Positive administrative silence operates "on the terms applied for", but **never against the planning rules**. It is not a back door.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And something that decides rather more than it appears to: **filing ' +
        'freezes the rules.** If the POT — the Plan de Ordenamiento ' +
        'Territorial, the municipal land-use plan — changes while your ' +
        'application is under study, the project is resolved under the rules ' +
        'in force on the day you filed, provided you filed complete.',
    },

    { tipo: 'titulo', texto: 'How long the permit lasts once it is issued' },
    {
      tipo: 'tabla',
      cabeceras: ['Modality', 'Validity', 'Extension'],
      filas: [
        ['Urbanisation, parcelación — its rural counterpart — and construction in the **new build** modality', '36 months', 'Once, +12'],
        ['Construction in modalities **other than** new build', '24 months', 'Once, +12'],
        ['Urbanisation + parcelación + new build in one and the same act', '48 months', 'Once, +12'],
        ['Subdivision', '12 months', 'Cannot be extended'],
      ],
      nota:
        'Decreto 1783 de 2021, art. 27. **The 36 months are not universal**: ' +
        'a permit for an extension or for structural strengthening lasts 24. ' +
        'It is the most repeated mistake on the subject, even among those who ' +
        'correct the previous one.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The extension has to be applied for **no later than 30 working days ' +
        'before** expiry — working days, not calendar days — with the ' +
        'documentation complete and a sworn statement that the works have ' +
        'already begun.',
    },

    { tipo: 'titulo', texto: 'The three points where everything falls behind' },
    { tipo: 'titulo', texto: '1. The concept design that never closes' },
    {
      tipo: 'parrafo',
      texto:
        'It is, by some distance, where most time is lost — and the one ' +
        'nobody counts, because no procedure produces it. A concept design ' +
        'that goes back and forth six times can eat up more weeks than the ' +
        'remaining eight stages put together.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The cause is almost never the architect: it is that **the decision ' +
        'has not been taken**. If there are two people in the household who ' +
        'want different things, the drawing is not going to settle it.',
    },
    { tipo: 'titulo', texto: '2. The incomplete file' },
    {
      tipo: 'parrafo',
      texto:
        'Filing before everything is ready, "to secure a date", gains you ' +
        'nothing: **the term does not start running and the rules do not ' +
        'freeze**. And in the worst case the procedure ends in abandonment ' +
        'and you have to start again.',
    },
    { tipo: 'titulo', texto: '3. The soil survey that arrived late' },
    {
      tipo: 'parrafo',
      texto:
        'The soil survey governs the foundations, the foundations govern the ' +
        'structure, and the structure governs the architectural project. ' +
        'Commissioning it at the end forces you to redo everything backwards.',
    },
    {
      tipo: 'nota',
      texto:
        '**Commission it as soon as you have the plot**, even before anything ' +
        'is drawn. It is one of the few things in the process that can be ' +
        'brought forward without having decided anything about the house.',
    },

    { tipo: 'titulo', texto: 'What can be done in parallel' },
    {
      tipo: 'lista',
      items: [
        '**The soil and topographic surveys**, with each other and with the outline scheme.',
        '**The technical designs**, alongside the development of the architectural project. There is no need to finish one before starting the others.',
        '**Checking the property**, alongside all of the above — although strictly it should come before you buy.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'What **cannot** be run in parallel is the sequence of decisions: ' +
        'outline scheme, concept design, project. Each one settles questions ' +
        'that the next one takes as settled.',
    },

    { tipo: 'titulo', texto: 'A warning about total timescales' },
    {
      tipo: 'parrafo',
      texto:
        'You will see round figures in circulation: "six months from plot to ' +
        'permit", "a year". **They are not data, they are averages of ' +
        'nothing.** The only deadline with regulatory backing anywhere along ' +
        'the route is the 45 working days for the review of the application.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Everything else depends on the size of the project, on the city, on ' +
        'how complicated the property is and — above all — on how quickly ' +
        'the decisions get taken. A small project with a decisive client can ' +
        'move surprisingly fast. A medium one with three opinions may never ' +
        'finish at all.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The useful question is not "how long does it take" but **"what ' +
        'depends on me, and when do I have to decide it"**. That one can be ' +
        'answered from day one.',
    },
  ],
}
