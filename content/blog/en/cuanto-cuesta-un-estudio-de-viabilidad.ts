import type { TraduccionPost } from '@/lib/types'
import { ESCALERA_DE_PRECIOS_EN } from '../diagramas/viabilidad'

/**
 * Traducción de «Cuánto cuesta un estudio de viabilidad de un predio».
 *
 * Tres decisiones de vocabulario, y las tres se toman prestadas del corpus para
 * no abrir un segundo término inglés para la misma cosa:
 *
 * - `concepto de norma urbanística` → **written ruling on the planning rules**,
 *   y `concepto de uso del suelo` → **written ruling on land use**. Es la
 *   pareja que ya usa la traducción del artículo de licencia en Bogotá, y son
 *   los rótulos del diagrama.
 * - `consulta verbal` → **verbal enquiry**, del mismo sitio.
 * - `índice de ocupación` → **site coverage ratio** e `índice de construcción`
 *   → **plot ratio**, que es la pareja fijada en la traducción de «qué puedo
 *   construir en mi lote».
 *
 * Lo que no se traduce: `Decreto 2090 de 1989`, `Decreto 1077 de 2015`,
 * `Decreto 1890 de 2021`, `Ley 400 de 1997`, `POT`, `UVT` y `curaduría urbana`.
 * Los tres primeros porque son el nombre real de la norma; los tres últimos
 * porque son instituciones o unidades colombianas, y van glosados en el texto
 * corrido la primera vez que aparecen.
 *
 * Las cifras son las mismas cifras: cambian los separadores —el punto de miles
 * español pasa a coma y la coma decimal a punto— y desaparece el espacio antes
 * del signo de porcentaje.
 */
export const traduccion: TraduccionPost = {
  slug: 'cuanto-cuesta-un-estudio-de-viabilidad',
  titulo: 'What a site feasibility study costs',
  traducido: '2026-09-06',
  resumen:
    'There is a factor of eight between the cheapest quote and the dearest, ' +
    'and both go by the same name. One answers what the rules allow on your ' +
    'plot; the other, whether the business works. What to expect from each, ' +
    'and why no reference rate exists.',
  metaDescripcion:
    'What a feasibility study on a plot costs in Colombia, why the range is ' +
    'so wide, and what to ask before accepting a quote.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Ask for three quotes for a "feasibility study" on your plot and you ' +
        'may be given $150,000, $1,500,000 and $12,000,000. All three are ' +
        'real, all three are published, and none of them is wrong.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The trouble is not that one of them is dear. It is that **the market ' +
        'gives the same name to two different products**, and whoever asks ' +
        'for the quote hardly ever knows which of the two they are asking for.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Where', 'What you buy', 'Published price', 'Time'],
      filas: [
        [
          'Cali',
          'A one-off technical consultation: a single session over whatever paperwork you share',
          '**$150,000** a session',
          'One session',
        ],
        [
          'Cali',
          'A signed PDF technical report on the plot: the rules of the POT, the municipal land-use plan, site coverage and plot ratios, setbacks and road reservations, permitted uses, restrictions, hazards and indicative costs',
          '**From $1,500,000**',
          '5 to 10 working days',
        ],
        [
          'Bogotá',
          'A prefeasibility study for a mid-scale residential scheme, with a market study and financial projections',
          '**$3 to $12 million**',
          '2 to 4 weeks',
        ],
      ],
      nota:
        'Prices that two Colombian firms publish on their own pages, read on ' +
        '**6 September 2026**. Both addresses are listed at the foot of this ' +
        'article. They are not a market average nor a survey: they are three ' +
        'real figures, and they are worth something because almost nobody ' +
        'publishes any.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Between the report on the plot and the prefeasibility study there is ' +
        '**a factor of eight**. What follows explains where it comes from, ' +
        'what to expect from each, and why Colombia has no rate to measure ' +
        'either against.',
    },

    { tipo: 'titulo', texto: 'Two products, one name' },
    {
      tipo: 'parrafo',
      texto:
        'The difference is not in the level of detail or in the page count. ' +
        'It is in the question each one answers, and they are two different ' +
        'questions put to the same piece of ground.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Planning study of the plot', 'Developer prefeasibility'],
      filas: [
        [
          '**The question it answers**',
          'What do the rules let me build here?',
          'Does this business work?',
        ],
        [
          '**Who needs it**',
          'Someone who owns or is about to buy a plot and will use what they build',
          'Someone who will sell what they build',
        ],
        [
          '**What it contains**',
          'The rules of the POT that apply to the plot, site coverage and plot ratios, setbacks, permitted uses, restrictions and hazards',
          'All of the above, plus a market study and financial projections: internal rate of return, net present value, break-even point and cash flow',
        ],
        [
          '**What it leaves out**',
          'Any financial analysis',
          'Drawings, soil investigation and structural design',
        ],
        ['**Published time**', '5 to 10 working days', '2 to 4 weeks'],
      ],
      nota:
        'The Bogotá firm draws a further line between **prefactibilidad** — a ' +
        'preliminary appraisal on secondary data — and **estudio de ' +
        'factibilidad**, the definitive analysis on primary data, which it ' +
        'puts at 4 to 8 weeks. It publishes a price only for the first.',
    },
    {
      tipo: 'nota',
      texto:
        'Beware the word itself. The Cali firm also calls its $1,500,000 ' +
        'product a "prefactibilidad", and the Bogotá one calls its own work ' +
        '"viabilidad". **The name settles nothing: the contents page of the ' +
        'deliverable does.** If there is no financial chapter in it, you are ' +
        'not buying a developer prefeasibility study, whatever it is called.',
    },

    { tipo: 'titulo', texto: 'Why there is no reference rate' },
    {
      tipo: 'parrafo',
      texto:
        'Every conversation about architects’ fees in Colombia ends at the ' +
        '**Decreto 2090 de 1989**, the only complete published methodology in ' +
        'the country. How it got there, and why it no longer binds anyone, is ' +
        'told separately in ' +
        '[what an architect charges](/blog/cuanto-cobra-un-arquitecto).',
    },
    {
      tipo: 'parrafo',
      texto:
        'What matters here is simpler: **does the decree set a rate for the ' +
        'preliminary study of a plot?** Its clause 0.3 lists the work it ' +
        'covers, and there are nine kinds.',
    },
    {
      tipo: 'lista',
      items: [
        'Concept sketch, concept design, detailed design and architectural supervision.',
        'Housing layouts: concept design and detailed design.',
        'Cost plan.',
        'Cost control.',
        'Programming and programme control.',
        'Construction monitoring.',
        'Construction.',
        '**Miscellaneous work.**',
        'Project management.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Read the list again. Every one of them begins once there is a design, ' +
        'or a building site, or at least a commission to draw. **None of them ' +
        'is "study a plot before drawing anything".** So it falls into the ' +
        'eighth, and the eighth is defined by what it is not:',
    },
    {
      tipo: 'cita',
      texto:
        'These are the works to which the other fees laid down in these rules ' +
        'do not apply.',
      fuente: 'Decreto 2090 de 1989, clause 8.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'And in case there were any doubt that the preliminary study belongs ' +
        'there, clause 8.1.4 names it outright when it lists what goes into ' +
        'that drawer:',
    },
    {
      tipo: 'cita',
      texto:
        'Urban development plans, advisory work, studies and consultancies not ' +
        'defined in these rules, feasibility studies, expert opinions, models, ' +
        'perspective drawings, interior design, project appraisal, research.',
      fuente: 'Decreto 2090 de 1989, clause 8.1.4',
    },
    {
      tipo: 'parrafo',
      texto:
        'For that chapter the decree sets no percentage and no figure at all. ' +
        'What it gives is a **costing method**: the architect charges enough ' +
        'to cover the cost of the work, the cost of running the practice and a ' +
        'profit. And three ways of settling it.',
    },
    {
      tipo: 'lista',
      items: [
        '**A multiplier**, where the amount of work cannot be known in advance. It applies only to the salaries of the staff on the job, and the decree says its normal limits run **between 2.5 and 3.5**. The 3.5 is for work "of few days and great speciality, to solve a specific problem".',
        '**A fixed sum per day or per hour**, for personal advisory work. The rate is built up from the professional’s salary, the cost of running the office and a profit.',
        '**Total cost plus a fixed sum**, where the amount of work and its duration can be known in advance.',
      ],
    },
    {
      tipo: 'dato',
      valor: 'None',
      etiqueta:
        'Reference figures that the only published fee methodology in Colombia ' +
        'gives for the preliminary study of a plot. It gives a costing method ' +
        'and three ways of settling, not a rate.',
      fuente:
        'Decreto 2090 de 1989, chapter 8: clauses 8.1, 8.1.4, 8.2 and 8.3. ' +
        'Clause 0.2 confines the minimum fees to "the works these rules deal ' +
        'with".',
    },
    {
      tipo: 'nota',
      texto:
        'The contrast makes it plain: the decree **does** put a rate on one ' +
        'kind of cost estimate. A "presupuesto preliminar", a preliminary cost ' +
        'plan, is worth **2.5% of the fee** for concept design, detailed ' +
        'design and supervision (clause 3.2.2). But its own description ' +
        'requires a concept design or general drawings to exist already. **The ' +
        'decree prices what comes after drawing. What comes before it, no.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'And even if it did price it, nobody would be bound: the decree lost ' +
        'its footing when the rule underlying it was repealed, and in 2020 the ' +
        'Consejo de Estado held that it may serve as a technical criterion ' +
        '"but in no case as a binding one".',
    },
    {
      tipo: 'parrafo',
      texto:
        'So the factor of eight is neither chaos nor abuse. **It is what ' +
        'happens when the one document in the country that could give an ' +
        'anchor expressly declines to price that work.** Everyone costs their ' +
        'own, and nobody has anything to compare it against.',
    },

    { tipo: 'titulo', texto: 'The only price with an official rate is the State’s' },
    {
      tipo: 'parrafo',
      texto:
        'There is one exception, and it is worth knowing before asking anyone ' +
        'for a quote: two documents about the rules on your plot have their ' +
        'price fixed by national decree, the same across the country, and are ' +
        'issued by the very body that will later grant your permit.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What it is', 'What you get', 'What it costs', 'Time limit'],
      filas: [
        [
          '**Verbal enquiry** about the planning rules in force',
          'A spoken answer. There is no document',
          '**Free by rule**',
          '—',
        ],
        [
          '**Written ruling on the planning rules**',
          'A written opinion on the rules applicable to your plot',
          '**8.34 UVT** · $436,799, or $519,791 with VAT',
          '15 working days',
        ],
        [
          '**Written ruling on land use**',
          'A written opinion on which uses are allowed',
          '**1.67 UVT** · $87,465, or $104,083 with VAT',
          '15 working days',
        ],
      ],
      nota:
        'Decreto 1077 de 2015, article 2.2.6.6.8.15, as replaced by article 5 ' +
        'of Decreto 1890 de 2021; the time limit sits in article 2.2.6.1.3.1. ' +
        'The values run in UVT, the tax unit, because that is how the rule ' +
        'sets them. The peso figures use the 2026 UVT, $52,374, and come from ' +
        'the 2026 fee table published by a curaduría urbana in Bogotá.',
    },
    {
      tipo: 'parrafo',
      texto:
        'With a warning the rule itself takes care to give, and many people ' +
        'find out too late:',
    },
    {
      tipo: 'cita',
      texto:
        'The issue of these rulings grants no rights and imposes no ' +
        'obligations on the person who requests them, and does not modify the ' +
        'rights conferred by permits in force or already carried out.',
      fuente: 'Decreto 1077 de 2015, article 2.2.6.1.3.1, numbers 2 and 3',
    },
    {
      tipo: 'nota',
      texto:
        'Three practical rules that save money. The verbal enquiry is free, ' +
        'without exception. **If the ruling is asked for inside the permit ' +
        'procedure, it is not charged separately**: the fee only applies where ' +
        'the step is carried out on its own. And where there is no curador ' +
        'urbano but a municipal planning office, charging fees is forbidden.',
    },
    {
      tipo: 'parrafo',
      texto:
        'So why would anyone pay a million and a half for something the ' +
        'curaduría urbana sells for a third of it? Because they are not the ' +
        'same thing. **The ruling hands you the rules; the study hands you a ' +
        'reading of the rules against what you want to do.** The ruling says ' +
        'the plot ratio is 1.5. The study says how many square metres that is, ' +
        'how many units fit, what the rear setback rules out, and what happens ' +
        'if the slope forces a retaining wall. If your question is the first ' +
        'one, the answer costs $519,791.',
    },
    {
      tipo: 'diagrama',
      svg: ESCALERA_DE_PRECIOS_EN,
      titulo: 'Four prices for the same question',
      pie:
        'Logarithmic axis: on a linear one, the two prices set by decree would ' +
        'land on top of zero and the figure would show only the bar on the ' +
        'right. The two rulings are shown with VAT; the other two are ' +
        'published by private firms. Cut-off date: 6 September 2026.',
    },

    { tipo: 'titulo', texto: 'Eight questions before accepting a quote' },
    {
      tipo: 'lista',
      items: [
        '**Which question does this study answer: the planning one or the financial one?** If the answer mixes the two, ask for the contents page of the deliverable before signing.',
        '**Does it contain financial analysis?** Internal rate of return, net present value, break-even point, cash flow. Without them it is not a developer prefeasibility study and should not be priced like one.',
        '**Which rules is it built on, and as at what date?** This is no formality: in Cali the land-use plan in force has an expiry date, and a study made today can end up between two sets of rules. It is set out in [what happens to your permit if the POT of Cali changes](/blog/pot-de-cali-y-su-licencia).',
        '**Which documents about the plot are needed, and who obtains them?** Title certificate, boundary survey, topographic drawing. A study that does not ask for them is working on assumptions.',
        '**Does it include the soil investigation?** It should not, and that is no omission: Ley 400 de 1997 reserves that signature for a civil engineer, and Decreto 2090 itself says engineering studies "shall be paid by the contracting party and their value is not comprised within the architect’s fees".',
        '**Is it signed, and by whom?** With a name and a professional registration number. An unsigned report commits nobody.',
        '**What if the conclusion is that you cannot do what you wanted?** That study did its job too, and it is probably the one that saved you the most money. Ask as well whether the fee is credited against the next stage.',
        '**Can this be settled with the verbal enquiry and the written ruling?** Sometimes it can. It is worth asking out loud before hiring anyone.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Anyone who answers those eight without flinching is telling you ' +
        'something more useful than their price. And if what you want to know ' +
        'is simply what the rules allow, that can be read: it is explained in ' +
        '[what you can build on your plot](/blog/que-puedo-construir-en-mi-lote). ' +
        'What the report you are handed ought to contain is in ' +
        '[what a serious technical report must contain](/blog/que-debe-contener-un-informe-tecnico-serio).',
    },

    { tipo: 'titulo', texto: 'What this article does not claim' },
    {
      tipo: 'lista',
      items: [
        '**That these are market prices.** They are three figures published by two firms. Colombia keeps no statistics on the price of preliminary studies, and three references are not a market.',
        '**That an official rate exists for this work.** It does not, and Decreto 2090 says expressly that this is one of the works its fees do not reach. Nor does it bind anyone on the works it does price.',
        '**That the prices still hold.** They are what the two pages published on 6 September 2026. A price without a cut-off date is false within six months, and this article has its own written down.',
        '**That the expensive study is overpriced.** A property market study with financial projections is different work, with different inputs and a different professional behind it. Comparing it on price with a planning report compares two things that do not compete.',
        '**What Plano Base charges for this.** It is absent on purpose: it is quoted case by case, because the scope of a study depends on the plot and on the question.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'If you have a plot and a quote on the table, the fifteen-minute ' +
        'conversation to work out what is being sold to you costs nothing. It ' +
        'is by some way the cheapest moment to ask the eight questions above.',
    },
  ],
  fuentes: [
    {
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      titulo: 'Decreto 2090 de 1989: fees for architectural work',
    },
    {
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      titulo:
        'Decreto 1077 de 2015, articles 2.2.6.1.3.1 and 2.2.6.6.8.15: other steps and their fees',
    },
    {
      url: 'https://www.curaduria5bogota.com.co/wp-content/uploads/2026/01/TABLA-EXPENSAS-2026-CU5-PAGINA-WEB-V1.pdf',
      titulo:
        'Fee table for 2026 under Decreto 1077 de 2015: the year’s UVT and the fees for other steps, in pesos',
    },
  ],
}
