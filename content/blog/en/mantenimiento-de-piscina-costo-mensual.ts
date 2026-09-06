import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Mantenimiento de piscina: el costo mensual real».
 *
 * La tabla de frecuencias de análisis se copia palabra por palabra de la
 * traducción de `ley-1209-piscinas-copropiedad`, igual que en
 * `piscina-de-sal-o-cloro`: es el mismo dato de la misma resolución, y una
 * traducción distinta cada vez es cómo un dato verificado deja de estarlo.
 *
 * Vocabulario que fija esta pieza: `retrolavado` → **backwashing**,
 * `canastilla` → **strainer basket**, `pérdida de carga` → **head loss**,
 * `alguicida` → **algaecide**, `floculante` → **flocculant**,
 * `estabilizador` → **stabiliser**, `analítica de laboratorio` →
 * **laboratory analysis**, `prestaciones y aportes` → **statutory benefits
 * and contributions**, `cartelera` → **noticeboard** (ya fijado),
 * `libro de registro` → **log book** (ya fijado), `salvavidas` →
 * **lifeguard** (ya fijado), `cubierta antiatrapamiento` → **anti-entrapment
 * cover** y `rejilla` → **grating** (los dos de
 * `en/ley-1209-piscinas-copropiedad`), `sistema de liberación de vacío` →
 * **vacuum release system**.
 *
 * Separadores, dentro y fuera de las tablas: «$863,61» → «$863.61»,
 * «$155.449» → «$155,449», «$8.302,41» → «$8,302.41», «3,84 m³» → «3.84 m³»,
 * «$373.608» → «$373,608», «1,40 m» → «1.40 m», «0,3 mg/L» → «0.3 mg/L»,
 * «7,0 y 8,0» → «7.0 and 8.0». Ley 1209, Resolución 1618 de 2010, Resolución
 * 1510 de 2011, INVIMA y ONAC no se traducen.
 */
export const traduccion: TraduccionPost = {
  slug: 'mantenimiento-de-piscina-costo-mensual',
  titulo: 'Running a pool: the real monthly cost',
  traducido: '2026-09-05',
  resumen:
    'Most owners discover this number after they have signed. Here it is, ' +
    'worked out from the published water and electricity tariffs, with what ' +
    'has a public price kept separate from what does not — and with what the ' +
    'rules require to be done every day.',
  metaDescripcion:
    'What it costs to run a pool each month in Colombia: pumping, water, ' +
    'chemicals and laboratory work, from the official 2026 tariffs.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Almost everybody asks what a pool costs to build and almost nobody ' +
        'asks what it costs to keep. That is the wrong way round: building is ' +
        'paid once and running is paid every month for twenty years.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This article works that number out from where it can be worked out: ' +
        '**the published water and electricity tariff schedules**, which are ' +
        'public, dated, and written by nobody with an interest in selling you ' +
        'anything. And it keeps what has a public price clearly apart from ' +
        'what does not, because rolling it all into one figure is exactly how ' +
        'you lose track of where the money goes.',
    },
    {
      tipo: 'nota',
      texto:
        'Every calculation comes from the same pool, so it can be followed and ' +
        'redone: **8 × 4 m, average depth 1.40 m; 32 m² of water surface and ' +
        '45 m³**. If yours is different, the arithmetic is yours. What it ' +
        'costs to build is in [what a pool costs in ' +
        'Colombia](/blog/cuanto-cuesta-una-piscina-en-colombia).',
    },

    { tipo: 'titulo', texto: 'What does have a public price' },
    {
      tipo: 'parrafo',
      texto:
        'Two things — pumping and water — and between them they are usually ' +
        'half the monthly spend. The pumping hours are not invented: the rule ' +
        'sets the **turnover period** of a private single-family pool at **6 ' +
        'to 8 hours**, meaning the system must be able to pass the whole ' +
        'volume through the filter in that time. With a 1 HP pump — 0.75 kW — ' +
        'working eight hours a day, that comes to 180 kWh a month.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Item', 'How it works out', 'Per month'],
      filas: [
        ['**Pumping, Bogotá (stratum 4)**', '180 kWh × $863.61', '**$155,449**'],
        ['**Pumping, Medellín (stratum 4)**', '180 kWh × $960.34', '**$172,861**'],
        ['**Pumping, Medellín (strata 5 and 6)**', '180 kWh × $1,152.41', '$207,434'],
        ['**Water top-up, Bogotá**', '3.84 m³ × $8,302.41', '$31,881'],
        ['**Filter backwashing**', 'Depends on the filter and the frequency', 'Every m³ is paid for **twice**: as water and as sewerage'],
      ],
      nota:
        'Electricity: August 2026 tariff schedules from Enel Colombia and EPM, ' +
        'tension level 1, utility-owned assets. Water: the Bogotá water and ' +
        'sewerage tariff in force since 1 July 2026, stratum 4 — $3,231.15 ' +
        'plus $5,071.26 per cubic metre.',
    },
    {
      tipo: 'nota',
      texto:
        'The top-up assumes evaporation of **4 mm a day**, and this has to be ' +
        'said: **I found no published Colombian measurement of pool ' +
        'evaporation.** It is an engineering order of magnitude. It rises with ' +
        'water temperature and with wind, and it drops sharply under a ' +
        'floating cover. With a measurement of your own, the sum is redone in ' +
        'two lines.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On that alone, the reference pool is already running at **around ' +
        '$187,000 a month in Bogotá before a single gram of chemical** and ' +
        'before paying anyone. That is the floor, and it is a floor you cannot ' +
        'negotiate with a supplier, because you are not paying it to a ' +
        'supplier.',
    },
    {
      tipo: 'nota',
      texto:
        'One distinction worth being clear about, because it mixes rule with ' +
        'practice: **the rule sets the turnover period of the system, not the ' +
        'hours you must run the pump each day.** The turnover period sizes the ' +
        'equipment; operating hours are a management decision driven by use, ' +
        'temperature and bather load. The eight hours in the table are a ' +
        'reasonable operating assumption, not a legal duty.',
    },

    { tipo: 'titulo', texto: 'What has no public price, and why' },
    {
      tipo: 'parrafo',
      texto:
        'Here is the other half of the spend, and here this article stops ' +
        'dead: **there is no official or trade price list in Colombia for pool ' +
        'chemicals, for laboratory analysis or for maintenance labour.** ' +
        'Publishing a figure would mean copying a supplier and presenting it ' +
        'as data.',
    },
    {
      tipo: 'lista',
      items: [
        '**Chemicals.** Disinfectant, pH corrector, algaecide, flocculant and stabiliser. Consumption depends on temperature, use, sunlight and the quality of the fill water; two identical pools in two different climates spend very differently.',
        '**Laboratory analysis.** It is compulsory and it is monthly, plus an annual analysis. It is not optional, and a strip test kit does not replace it.',
        '**Labour.** Sweeping, brushing, emptying strainer baskets, backwashing and daily monitoring. In-house or contracted out.',
        '**Spares and consumables.** Filter sand or cartridges, pump seals and bearings, the cell if the system runs on salt, and replacement drain covers.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'What you can insist on, and what genuinely protects you: **that the ' +
        'maintenance quotation is broken down into those four lines, with ' +
        'quantities and not merely a monthly price.** A contract that says ' +
        '"full maintenance: so much a month" gives you no way of knowing ' +
        'whether the laboratory work is included, and laboratory work is ' +
        'precisely the first thing to disappear when somebody competes on ' +
        'price.',
    },

    { tipo: 'titulo', texto: 'What the rules require, and how often' },
    {
      tipo: 'parrafo',
      texto:
        'These frequencies are the part of the rules most often breached, and ' +
        'the part an inspector checks in two minutes:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What is measured', 'How often', 'Acceptable value'],
      filas: [
        ['Free residual chlorine', 'Daily', '1 to 3 mg/L'],
        ['Combined chlorine (chloramines)', 'Daily', 'less than 0.3 mg/L'],
        ['Oxidation-reduction potential', 'Daily', '700 mV minimum'],
        ['pH and temperature', 'Weekly', 'pH between 7.0 and 8.0'],
        ['Alkalinity, hardness, cyanuric acid', 'Weekly', 'Alkalinity up to 140; cyanuric acid less than 100'],
        ['Coliforms, *E. coli*, *P. aeruginosa*', 'Monthly', '**0** per 100 cm³'],
      ],
      nota:
        'Resolución 1618 de 2010. The full table, with the Langelier index and ' +
        'the annual analyses, is in [what Ley 1209 really ' +
        'requires](/blog/ley-1209-piscinas-copropiedad).',
    },
    {
      tipo: 'nota',
      texto:
        'And four duties almost no pool meets, none of which costs much: the ' +
        '**log book** with daily and weekly measurements, filter washes and ' +
        'recirculated volume, up to date and available; **monthly display of ' +
        'the laboratory results somewhere visible**, which means a noticeboard ' +
        'beside the pool; analyses at a **laboratory authorised or accredited ' +
        'by ONAC**; and **INVIMA sanitary registration** on the chemical ' +
        'products. A supplier selling unregistered chlorine is in breach, and ' +
        'so is whoever buys it.',
    },

    { tipo: 'titulo', texto: 'The lifeguard: where money is overspent and underspent' },
    {
      tipo: 'parrafo',
      texto:
        'In a community of owners this is the largest line in the running ' +
        'cost, and it is where most money is overspent. The rule, verified ' +
        'against the articles themselves, is that **a residential development ' +
        'needs a certified lifeguard in four situations only**: at weekends, ' +
        'in school holidays, at events involving under-14s, and whenever more ' +
        'than ten children are present at once. Not Monday to Friday by ' +
        'default.',
    },
    {
      tipo: 'nota',
      texto:
        'There is a genuine tension between rules here, worth knowing before ' +
        'you argue about a budget: Resolución 1510 de 2011 requires, for a ' +
        'collective-use pool, one lifeguard per pool throughout opening hours, ' +
        'whereas the implementing regulation of Ley 1209 narrows the duty of a ' +
        'residential development to those four situations. It is the same kind ' +
        'of tension as the one over drains, and it is set out at greater ' +
        'length in [what Ley 1209 really ' +
        'requires](/blog/ley-1209-piscinas-copropiedad).',
    },
    {
      tipo: 'nota',
      texto:
        'The cost is given here in **minimum wages** rather than in pesos, ' +
        'deliberately: the peso value of the 2026 minimum wage went into ' +
        'litigation, and a figure that moves on a court ruling is a poor ' +
        'anchor for a budget. A certified lifeguard costs, as a floor, one ' +
        'minimum wage plus statutory benefits and contributions; on weekend ' +
        'hours only, the sum is proportional.',
    },

    { tipo: 'titulo', texto: 'The four things nobody budgets for' },
    {
      tipo: 'lista',
      items: [
        '**Testing the vacuum release system.** It is the safety device most likely to fail silently, because it depends on calibration and on nobody having bypassed it.',
        '**Replacing anti-entrapment covers.** They break, they get stolen and they degrade under chlorine and sunlight. A missing grating is not a cosmetic defect: it reopens the risk in full.',
        '**Draining, and above all the discharge.** Draining the pool costs the water needed to fill it again — $373,608 in Bogotá, stratum 4 — and with no sewer connection the discharge is an environmental permit matter before it is a maintenance decision.',
        '**Renewing the waterproofing and the finish.** They have a service life. A maintenance budget setting nothing aside for this is pushing the bill forward, not saving.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The first deserves a paragraph of its own: **no Colombian rule ' +
        'requires any periodic test of the vacuum release system.** No ' +
        'frequency, no protocol, no compulsory record. It is, in my view, the ' +
        'gravest blind spot in the whole regime, and the sensible response is ' +
        'not to wait until it is imposed: set a frequency yourself, write it ' +
        'in the log book, and keep the evidence.',
    },

    { tipo: 'titulo', texto: 'How to bring the cost down without breaching anything' },
    {
      tipo: 'lista',
      items: [
        '**Cover the water surface.** It is the only measure that cuts top-up water, heating energy and chemical use all at once, because less new water means less imbalance.',
        '**Change the pump before you change the hours.** In a pump, flow is proportional to speed and power to the **cube** of speed: running at half speed for twice as long moves the same volume on a quarter of the energy.',
        '**Check the head loss.** A dirty filter, undersized pipework or a blocked strainer basket make the pump work harder to move the same water. You pay for it on the bill every day.',
        '**Control pH before chlorine.** With pH out of range the disinfectant loses effectiveness and more product is consumed for the same result.',
        '**Match the lifeguard to the calendar the law sets**, not a day more and not a day less. It is where many communities overspend while breaching something else.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'What is **not** a way of bringing the cost down: switching the pump ' +
        'off for whole days, skipping the monthly laboratory analysis, buying ' +
        'chemicals without sanitary registration, or dosing by eye. All four ' +
        'come cheap in the first month and expensive on the day of an ' +
        'inspection or an accident.',
    },

    { tipo: 'titulo', texto: 'How to read a maintenance contract' },
    {
      tipo: 'lista',
      items: [
        'How many visits a month, and of how many hours?',
        'Are chemicals included or billed separately? Under what sanitary registration?',
        'Does it include the monthly and the annual laboratory analysis, and at which laboratory?',
        'Who keeps the log book, and where does it live?',
        'Who posts the results on the noticeboard each month?',
        'What happens if an analysis comes back out of range? Who bears the correction?',
        'Does it include testing the safety devices, and how often?',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The sixth question is what separates a maintenance contract from a ' +
        'cleaning visit. And if the pool belongs to a community of owners, the ' +
        'conversation does not end at the contract: it ends at the general ' +
        'meeting, and that conversation — with the building manager on the ' +
        'hook — is in [what Ley 1209 really ' +
        'requires](/blog/ley-1209-piscinas-copropiedad).',
    },
    {
      tipo: 'parrafo',
      texto:
        'The person who leads this line of work at the practice brings fifteen ' +
        'years of designing hydraulic systems and bodies of water, and what ' +
        'that time teaches about maintenance is uncomfortable and simple: ' +
        '**almost the whole monthly cost of a pool was settled at design ' +
        'stage.** Pipe diameter, distance to the ' +
        '[plant room](/blog/cuarto-de-maquinas-de-una-piscina), filter size ' +
        'and orientation decide what you will pay every month for twenty ' +
        'years. After that you are only administering what has already been ' +
        'decided.',
    },
  ],
}
