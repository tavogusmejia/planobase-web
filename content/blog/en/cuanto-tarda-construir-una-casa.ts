import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Cuánto tarda construir una casa, etapa por etapa».
 *
 * La pieza vive de una negativa y se traduce entera: **no se publica ninguna
 * duración de obra en meses**, porque no existe fuente colombiana con plazos
 * de construcción por etapa y metodología publicada. No se añade aquí ninguna
 * cifra «orientativa» de conocimiento general: sería exactamente el error que
 * el original se niega a cometer.
 *
 * Vocabulario tomado del corpus, sin variar nada: `esquema básico` → outline
 * scheme, `anteproyecto` → concept design, `proyecto arquitectónico` →
 * architectural project, `estudio de suelos` → soil survey, `radicación` →
 * filing, `silencio administrativo positivo` → positive administrative
 * silence, `obra nueva` → new build y `parcelación` sin traducir, todos de
 * `del-lote-a-la-licencia`. La cita de los 45 días hábiles y la lista que la
 * sigue son las mismas de aquel artículo, palabra por palabra: es la misma
 * norma y no puede sonar distinta.
 *
 * Las cifras son las mismas cifras: 45 días hábiles, 30 días hábiles, 15, 36,
 * 24, 48 y 12 meses.
 */
export const traduccion: TraduccionPost = {
  slug: 'cuanto-tarda-construir-una-casa',
  titulo: 'How long it takes to build a house, stage by stage',
  traducido: '2026-09-05',
  resumen:
    'The round figures in circulation — "eight months", "a year" — come from ' +
    'nowhere. What does exist: the real sequence, what depends on what, and ' +
    'the one construction deadline Colombian law put in writing.',
  metaDescripcion:
    'How long it takes to build a house in Colombia, stage by stage: the ' +
    'deadlines the law sets and what depends on the owner’s decisions.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'It is almost everybody’s first question and it deserves an honest ' +
        'answer, which begins with an uncomfortable warning.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Search for "how long does it take to build a house in Colombia" and ' +
        'you will find round figures: eight months, ten, a year. **Not one of ' +
        'them cites a source, a study, a survey or a method.** There is no ' +
        'official or trade statistic in the country for the duration of ' +
        'building work by stage. What circulates are averages of nothing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'So I am not going to add another figure. I am going to explain the ' +
        'real sequence, what depends on what, which deadlines actually sit in ' +
        'the statutes and — most usefully — **where the time really goes**, ' +
        'which is hardly ever where people think.',
    },

    { tipo: 'titulo', texto: 'Three separate clocks, and only one has a law' },
    {
      tipo: 'parrafo',
      texto:
        'A house project has three stretches that behave in completely ' +
        'different ways, and mixing them is what produces the useless answers:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Stretch', 'What it depends on', 'Any legal deadline?'],
      filas: [
        ['**Design**', 'On how quickly you decide', 'No'],
        [
          '**Permit**',
          'On the authority, with the file complete',
          '**Yes: 45 working days**',
        ],
        [
          '**Construction**',
          'On the project, the builder, the weather and the money',
          'No, but the permit puts a ceiling on it',
        ],
      ],
      nota:
        'The only deadline with statutory backing along the whole route is the ' +
        '45 working days for studying the permit application. Everything else ' +
        'you are told is an estimate, and it is as well that you are told so.',
    },

    { tipo: 'titulo', texto: 'The design stretch' },
    {
      tipo: 'parrafo',
      texto:
        'The architects’ fee decree describes the stages and the order they ' +
        'happen in. It puts no duration on them — it could not — but it does ' +
        'make clear what each one settles:',
    },
    {
      tipo: 'lista',
      items: [
        '**Outline scheme.** The general layout: zones, entrances, how the rooms relate to one another. It can be done even before the final site is settled.',
        '**Concept design.** Plans, sections and elevations sufficient to understand the building and to decide, **with no drawings for carrying out the works**.',
        '**Architectural project.** All the information needed for construction to be carried out: details, specifications and coordination with the other disciplines.',
        '**Engineering designs.** Structural, plumbing and drainage, electrical and gas, each with the signature the law requires.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The soil survey and the topographic survey come **before**, not in ' +
        'parallel with the project. The soil survey governs the foundations, ' +
        'the foundations govern the structure and the structure governs the ' +
        'architecture. Commissioning it late forces you to work backwards, and ' +
        'that reworking appears on no programme.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What can be run in parallel: soil with topography, and the engineering ' +
        'designs with the development of the architectural project. What ' +
        '**cannot**: the sequence outline scheme → concept design → project. ' +
        'Each one settles questions the next takes as settled.',
    },

    { tipo: 'titulo', texto: 'The permit stretch: here there are numbers' },
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
      tipo: 'lista',
      items: [
        'The 45 working days run **from filing in due and proper form**. An incomplete file does not start the clock.',
        'The term may be extended **once only, by up to half**, where the size or the complexity of the project warrants it.',
        'If a record of observations arrives, you have **30 working days** to answer, extendable by 15.',
        'Positive administrative silence operates "on the terms applied for", but **never against the planning rules**.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Forty-five working days are not forty-five days. With weekends and ' +
        'public holidays, the real calendar is appreciably longer, and that ' +
        'difference surprises a great many people when they do the arithmetic.',
    },

    { tipo: 'titulo', texto: 'The only construction deadline that exists in law' },
    {
      tipo: 'parrafo',
      texto:
        'Here is the fact nobody uses for what it is. The statutes do not say ' +
        'how long a house takes to build, but they do say **how much time you ' +
        'are given to do it before the permit expires**:',
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
          'Construction in modalities **other than** new build: extension, adaptation, alteration, restoration, structural strengthening, demolition',
          '24 months',
          'Once, +12',
        ],
        [
          'Urbanisation + parcelación + new build in one and the same act',
          '48 months',
          'Once, +12',
        ],
        ['Subdivision', '12 months', 'Cannot be extended'],
      ],
      nota:
        'Decreto 1783 de 2021, article 27. The terms run from the moment the ' +
        'acts granting the permit become final, not from the day of filing. ' +
        '**The 36 months are not universal**: an extension or a structural ' +
        'strengthening lasts 24, and that is the most repeated mistake on the ' +
        'subject.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it for what it is: **the only time ceiling the Colombian state ' +
        'has put in writing for building.** It is not a statistic of duration ' +
        'and should not be used as one. But if your house is a new build and ' +
        'somebody puts a programme in front of you that brushes thirty-six ' +
        'months, the rule is telling you the margin is very thin.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The extension has to be applied for **no later than 30 working days ' +
        'before** expiry — working days, not calendar days — with the ' +
        'documentation complete and a sworn statement that the works have ' +
        'already begun. Anyone who remembers it the month before is already too ' +
        'late.',
    },

    { tipo: 'titulo', texto: 'The works, by dependency instead of by month' },
    {
      tipo: 'parrafo',
      texto:
        'Since there are no published durations that can be cited, what is ' +
        'useful is to understand **the chain**: what cannot start until what ' +
        'has finished. That much can be stated, because it is physics and ' +
        'building technique, not statistics.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Stage', 'Cannot start until…', 'What makes it longer'],
      filas: [
        [
          '**Site preliminaries**: hoarding, site huts, setting out, temporary water and power',
          'The permit is final and there is access to the property',
          'Difficult access, temporary services that take time to connect',
        ],
        [
          '**Excavation and foundations**',
          'The soil survey and the structural design exist',
          'Ground worse than expected, a high water table, rain',
        ],
        [
          '**Structure**',
          'The foundations reach strength',
          'Curing times are not negotiable; concrete takes as long as it takes',
        ],
        [
          '**Masonry and roof**',
          'The structure of the corresponding level is there',
          'Very little. It is usually the most predictable stage',
        ],
        [
          '**Services**: plumbing and drainage, electrical, gas',
          'The walls are up, and before rendering',
          'Last-minute changes to where the outlets go',
        ],
        [
          '**Rendering, tiling and floors**',
          'The services have been tested and closed up',
          'Reworking caused by services badly tested before being closed up',
        ],
        [
          '**Joinery, fittings and finishes**',
          'The floors are done',
          '**This is where things nearly always slip**: imports, made-to-measure items and decisions not taken',
        ],
        [
          '**Testing, permanent connections and handover**',
          'Everything above is done',
          'Certificates and connection procedures with the utility providers',
        ],
      ],
      nota:
        'Every cell in this table is a precedence relationship, not a ' +
        'duration. A serious programme is built by putting times against these ' +
        'dependencies using the real quantities of the project, not by applying ' +
        'a national average that does not exist.',
    },

    { tipo: 'titulo', texto: 'Where the time really goes' },
    { tipo: 'titulo', texto: '1. The concept design that never closes' },
    {
      tipo: 'parrafo',
      texto:
        'It is, by some distance, where most time is lost, and the one nobody ' +
        'counts because no procedure produces it. A concept design that goes ' +
        'back and forth six times eats up more weeks than the permit and the ' +
        'foundations put together.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The cause is hardly ever the architect: it is that **the decision has ' +
        'not been taken**. If there are two people in the household who want ' +
        'different things, the drawing is not going to resolve it.',
    },
    { tipo: 'titulo', texto: '2. The finishes decided on site' },
    {
      tipo: 'parrafo',
      texto:
        'Tiling, taps, joinery, lighting. Deciding them when they already have ' +
        'to be installed turns every choice into a stoppage. And anything made ' +
        'to measure or imported has a lead time that depends on nobody on the ' +
        'site.',
    },
    {
      tipo: 'nota',
      texto:
        'The practical rule: **everything with a long lead time is chosen and ' +
        'ordered during the structure**, not when its turn comes round on the ' +
        'programme.',
    },
    { tipo: 'titulo', texto: '3. The change halfway through' },
    {
      tipo: 'parrafo',
      texto:
        'Moving a bathroom after the slab has been poured is not an alteration: ' +
        'it is demolishing, redoing and testing again. And if the change ' +
        'affects what the permit approved, an alteration to the permit has to ' +
        'be applied for as well, with a timescale of its own.',
    },
    { tipo: 'titulo', texto: '4. Cash flow' },
    {
      tipo: 'parrafo',
      texto:
        'It is the commonest cause of delay and the one least often named out ' +
        'loud. A site that stops for want of payment does not restart where it ' +
        'left off: labour has to be brought back, and the output of the first ' +
        'few weeks is never the same.',
    },

    { tipo: 'titulo', texto: 'What to ask so that the programme you are given is credible' },
    {
      tipo: 'lista',
      items: [
        '**Does the programme start from signature or from the permit becoming final?** They are two very different dates.',
        '**Are they calendar days or working days?** On site they are usually calendar; in procedures, working days.',
        '**What does that programme assume about my decisions?** A serious programme says in which week it needs you to have chosen the finishes.',
        '**What happens if it rains?** It has to be stated: how many days of rain are assumed and what happens if they are exceeded.',
        '**Which activities are on the critical path?** If they cannot name three, there is no programme, there is a number.',
        '**When does the permit expire?** That is the real ceiling, and it determines how much margin is left for the unforeseen.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'A builder who answers those six without discomfort is telling you ' +
        'something more important than their programme.',
    },

    { tipo: 'titulo', texto: 'The honest answer' },
    {
      tipo: 'parrafo',
      texto:
        'There is no national number, and whoever gives you one did not get it ' +
        'from anywhere. What there is: a sequence with real dependencies, a ' +
        'legal term of forty-five working days for the permit, and a ceiling of ' +
        'validity that the rule sets according to the modality.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is one question that can be answered from day one, which is ' +
        'the one that really matters: **what depends on you, and when you have ' +
        'to decide it.** On that, more than on anything else, depends how long ' +
        'your house takes.',
    },
  ],
}
