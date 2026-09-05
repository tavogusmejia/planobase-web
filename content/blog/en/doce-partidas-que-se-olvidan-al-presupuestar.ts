import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Las doce partidas que todo el mundo olvida al presupuestar».
 *
 * El título inglés ya estaba fijado: la traducción del artículo del metro
 * cuadrado enlaza aquí como *the twelve items everyone forgets when budgeting*,
 * así que **partida** es *item* en todo el texto y no se cambia a mitad de
 * camino.
 *
 * La pieza no lleva ni una cifra de dinero ni un porcentaje, y eso es lo que la
 * sostiene. La traducción tampoco los añade: ni el porcentaje de imprevistos
 * —que el original se niega explícitamente a dar y explica por qué—, ni el de
 * administración y utilidad. En inglés la tentación es peor que en español,
 * porque los manuales anglosajones publican rangos de contingencia como si
 * fueran universales.
 *
 * Del corpus vienen ya resueltos: *curaduría charges*, *delineation tax*,
 * *soil survey*, *geotechnical survey*, *building permit*, *new build*,
 * *earthworks*, *record of observations*, *insurance bonds* con sus cinco
 * amparos, *technical certificate of occupancy* y *contingencies*.
 *
 * Lo que hubo que fijar aquí: **valla** se parte en *application notice board*
 * y *works notice board*, porque son dos objetos distintos con dos regímenes
 * distintos y el inglés no tiene una palabra que sirva para los dos.
 *
 * Los separadores cambian: «1,00 × 0,70 m» es «1.00 × 0.70 m» y «0,30 × 0,50
 * m» es «0.30 × 0.50 m». Dentro de una tabla, una coma decimal española
 * convierte un metro en cien.
 */
export const traduccion: TraduccionPost = {
  slug: 'doce-partidas-que-se-olvidan-al-presupuestar',
  titulo: 'The twelve items everyone forgets when budgeting',
  traducido: '2026-09-05',
  resumen:
    'The budget you were handed is for the works, not for the project. These ' +
    'twelve items are almost never in it, every one of them gets paid ' +
    'anyway, and several are a condition of the permit being issued. What ' +
    'each one is, why it gets forgotten and what its size depends on.',
  metaDescripcion:
    'Soil survey, designs, curaduría charges, delineation tax, connections, ' +
    'bonds and contingencies: the items missing from almost every works ' +
    'budget.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The figure you were given is the cost of the works. The cost of the ' +
        'project is a different figure, and the difference is not a rounding.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Almost every item on this list is paid before the first bag of ' +
        'cement arrives, several are a condition of the building permit being ' +
        'issued, and not one of them appears in a budget drawn up per square ' +
        'metre. Not because anybody is hiding them: because a works budget, ' +
        'by definition, budgets the works.',
    },
    {
      tipo: 'nota',
      texto:
        'A warning about what you will **not** find here: percentages or ' +
        'values in pesos. No reliable Colombian source publishes them item by ' +
        'item, and the ones in circulation contradict one another. What can ' +
        'be said with precision is what each thing is, why it gets forgotten ' +
        'and what makes it large or small. With that you can review a budget; ' +
        'with an invented percentage, you cannot.',
    },

    { tipo: 'titulo', texto: '1. The soil survey' },
    {
      tipo: 'parrafo',
      texto:
        'The geotechnical survey defines the foundations, and the foundations ' +
        'are one of the most expensive and least visible items in the works. ' +
        'It gets forgotten because it shows up on no handsome drawing and ' +
        'because the seller of the plot never mentions it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The permit requires it: for projects of greater complexity the ' +
        'application has to be accompanied by the geotechnical and soil ' +
        'studies, and in every case the curador urbano — the private official ' +
        'who issues building permits in Colombia — or the municipal authority ' +
        'reviews those studies as part of the procedure. And it is signed by ' +
        'a civil engineer with a postgraduate degree in geotechnics or more ' +
        'than five years in geotechnical design of foundations. It is not a ' +
        'laboratory test: it is a study with a signature and liability behind ' +
        'it.',
    },
    {
      tipo: 'nota',
      texto:
        'What its size depends on: the number and depth of the boreholes, how ' +
        'accessible the plot is for the rig, and whether special testing is ' +
        'needed. A sloping plot, one with fill of unknown origin and one with ' +
        'a high water table do not cost the same, not by a long way.',
    },

    { tipo: 'titulo', texto: '2. The technical designs' },
    {
      tipo: 'parrafo',
      texto:
        'The architectural design is nearly always allowed for. The others, ' +
        'hardly ever. The permit application asks, on top of the ' +
        'architectural project, for the calculation memorandum and the ' +
        'structural drawings and the design memoranda for the non-structural ' +
        'elements; the plumbing and drainage services and the electrical ' +
        'services have technical regulations of their own and a signatory of ' +
        'their own.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Each of those designs is a separate contract, with a different ' +
        'professional and a different professional registration. They get ' +
        'forgotten because the client hires "the architect" and assumes ' +
        'everything comes inside that.',
    },
    {
      tipo: 'nota',
      texto:
        'And there is an item inside the item that surprises anyone building ' +
        'something large: in buildings whose plot allows more than **two ' +
        'thousand square metres** of built area to be reached, the review of ' +
        'the structural designs is carried out by a private professional, ' +
        'independent of the designer, **at the cost of whoever applies for ' +
        'the permit**. It is in Ley 1796 de 2016 and Decreto 1077 repeats it.',
    },

    { tipo: 'titulo', texto: '3. The curaduría charges' },
    {
      tipo: 'parrafo',
      texto:
        'This is what the curador urbano charges for studying and deciding ' +
        'the application. Since Decreto 1890 de 2021 they are assessed in tax ' +
        'value units, with a fixed charge and a variable charge affected by ' +
        'the stratum or use, by a municipal factor and by the area.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two details that change the cash flow and that hardly anybody sees ' +
        'coming:',
    },
    {
      tipo: 'lista',
      items: [
        '**The fixed charge is paid on filing.** It is a condition of the application being filed at all, not something paid at the end.',
        '**It is not refunded** if the permit is refused or if you withdraw. The rule says so expressly.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'In municipalities with no curador appointed, the permit is issued by ' +
        'the municipal authority and **there are no charges**: the rule ' +
        'forbids those authorities from levying them. It is a real difference ' +
        'in cost between neighbouring municipalities.',
    },

    { tipo: 'titulo', texto: '4. The urban delineation tax' },
    {
      tipo: 'parrafo',
      texto:
        'It gets confused with the curaduría charges and has nothing to do ' +
        'with them. The charges are the remuneration of a private party ' +
        'exercising a public function; delineation is a municipal tax, and ' +
        'each council sets its own base and its own rate. That is why there ' +
        'is no national figure, and why building the same thing costs ' +
        'different amounts on either side of the municipal boundary.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The national rule separates the two clearly and adds the fact that ' +
        'matters for cash: the taxes, levies, duties, participations and ' +
        'contributions associated with the permit are independent of the ' +
        'charges, and **the curador may issue the permit only once the ' +
        'applicant proves they have been paid**, with thirty working days to ' +
        'do so from the moment of being required to.',
    },
    {
      tipo: 'nota',
      texto:
        'In practical terms: there is a moment in the procedure at which a ' +
        'bill appears that was not in the programme, it has to be paid within ' +
        'a short deadline, and **until it is paid there is no permit**. It is ' +
        'the point at which most projects come to a halt for want of cash, ' +
        'not for want of a rule.',
    },

    { tipo: 'titulo', texto: '5. The utility connections' },
    {
      tipo: 'parrafo',
      texto:
        'Water supply, drainage, electricity and gas do not reach the ' +
        'property merely because the plot sits inside the urban perimeter. ' +
        'Availability of services — which is what the utility company ' +
        'certifies — means that connecting is technically feasible, not that ' +
        'the connection has been made or that it has been paid for.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The permit rule itself provides for the developer to bear the cost ' +
        'of the connections to the trunk mains needed to serve the project. ' +
        'That cost exists, it belongs to the project, and it appears in no ' +
        'budget drawn up per square metre.',
    },
    {
      tipo: 'nota',
      texto:
        'What it depends on: the distance to the existing network and what ' +
        'lies in between. Crossing a paved road, breaking out and reinstating ' +
        'a pavement, or laying two hundred metres of pipe are different ' +
        'orders of magnitude. And on rural land the question changes ' +
        'entirely: there is no connection there, there is a water concession ' +
        'and a wastewater solution of your own.',
    },

    { tipo: 'titulo', texto: '6. The earthworks' },
    {
      tipo: 'parrafo',
      texto:
        'Stripping the topsoil, excavation, cuts, fills, carting away the ' +
        'surplus and disposing of that surplus at an authorised site. It gets ' +
        'forgotten because the budget begins, in the mind, at the ' +
        'foundations, and this happens before that.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And it carries a procedural component that catches people out: the ' +
        '**authorisation of earthworks and swimming pool construction** with ' +
        'more than three metres of excavation is a separate application ' +
        'before the curador, with a charge of its own assessed by volume. It ' +
        'is not included in the permit.',
    },
    {
      tipo: 'nota',
      texto:
        'The factor that moves it most is the slope of the plot, followed by ' +
        'the balance between cut and fill. A flat plot with no earth to cart ' +
        'away and one on a hillside that has to be made good with retaining ' +
        'walls do not even share an order of magnitude.',
    },

    {
      tipo: 'titulo',
      texto: '7. The temporary site enclosure and the two notice boards',
    },
    {
      tipo: 'parrafo',
      texto:
        'The site has to be fenced off for as long as the works last, with ' +
        'everything that implies: materials, labour, maintenance and taking ' +
        'it down again. And to that you add the site huts, the materials ' +
        'store, the temporary water and electricity supply and the sanitary ' +
        'facilities for the workforce. None of it is left standing at the ' +
        'end, and that is why it gets forgotten: it does not show in the ' +
        'finished house.',
    },
    {
      tipo: 'parrafo',
      texto: 'The compulsory notice boards are two, and they are different:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Which one', 'When', 'What the rule requires'],
      filas: [
        [
          '**Application notice board**',
          'From the day after filing until the application is decided',
          'Weatherproof, **yellow ground and black lettering**, at least 1.00 × 0.70 m, legible from the public road. A photograph has to be added to the file within the following five working days, **failing which the application is deemed withdrawn**',
        ],
        [
          '**Works notice board**',
          'Before any work begins and throughout the execution',
          'At least 1.00 × 0.70 m, giving the class and number of the permit, the authority that issued it, the holder, the address, the validity and the description of the project',
        ],
      ],
      nota:
        'Decreto 1077 de 2015, articles 2.2.6.1.2.2.1, paragraph 1, and ' +
        '2.2.6.1.4.9. In propiedad horizontal and in minor works the format ' +
        'is a notice of 0.30 × 0.50 m. The application notice board "shall ' +
        'not give rise to any kind of additional payment or permit", but ' +
        'making it and putting it up costs money.',
    },
    {
      tipo: 'nota',
      texto:
        'A point that heads off a confusion: **the temporary site enclosure ' +
        'is not the enclosure permit.** That modality of permit authorises ' +
        'the permanent enclosing of a private plot, which is another matter ' +
        'and is applied for separately.',
    },

    { tipo: 'titulo', texto: '8. The insurance bonds' },
    {
      tipo: 'parrafo',
      texto:
        'Performance, stability of the works, third-party liability, wages ' +
        'and employment benefits, and contractors’ all risks. On public works ' +
        'they are compulsory under the procurement regime; on private works ' +
        'no general statute imposes them, and that is where the problem sits: ' +
        '**because nobody demands them, nobody budgets for them, and when ' +
        'something goes wrong there is nobody to claim against.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Anyone who hires a third party to build and does not require a ' +
        'performance bond and a stability bond is financing the builder’s ' +
        'risk out of their own assets. The premium is a small fraction of the ' +
        'contract; the absence of the bond can cost the whole of the works.',
    },
    {
      tipo: 'nota',
      texto:
        'And there is one cover that is statutory and worth not confusing ' +
        'with a voluntary bond: whoever builds or sells new housing is ' +
        'obliged to cover the financial loss arising within the **ten years** ' +
        'following the technical certificate of occupancy. That protects the ' +
        'buyer, not the person building for themselves.',
    },

    {
      tipo: 'titulo',
      texto: '9. The laboratory tests and the technical supervision',
    },
    {
      tipo: 'parrafo',
      texto:
        'Compaction tests, concrete cylinders, strength of materials, pipe ' +
        'tests, watertightness tests. They get forgotten because they are ' +
        'spread out over time and are individually cheap, which is what makes ' +
        'nobody add them up.',
    },
    {
      tipo: 'parrafo',
      texto: 'The rule orders them at two levels, according to size:',
    },
    {
      tipo: 'lista',
      items: [
        '**Above two thousand square metres** of built area that the plot allows to be reached, the building has to be subject to **technical supervision independent of the builder**. It is a separate contract, with a professional of its own.',
        '**Below that threshold**, there is no independent supervision, but the builder remains obliged to carry out the minimum quality controls the statute and its regulations require, having available during the works the participation of the structural designer and of the geotechnical engineer, whose queries and clarifications must be recorded and documented.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'That last sentence is an item disguised as a formality: "having ' +
        'available the participation" of the designer and the geotechnical ' +
        'engineer during the works means their fees do not end when they hand ' +
        'over the drawings. Hardly any design contract says so, and hardly ' +
        'any job has it budgeted.',
    },

    { tipo: 'titulo', texto: '10. The contingencies' },
    {
      tipo: 'parrafo',
      texto:
        'This is not a cushion for covering up errors of estimation. It is ' +
        'the item that covers what could not be known before opening up: ' +
        'ground that turns out different from the trial pit, a buried service ' +
        'that was on no drawing, the rain that stopped the pour.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It gets forgotten because including it means admitting that the ' +
        'budget is not exact, and that, in a negotiation, reads as weakness. ' +
        '**A budget with no contingencies is not more precise: it is less ' +
        'honest.**',
    },
    {
      tipo: 'nota',
      texto:
        'I do not give a percentage, and I want to explain why: the ' +
        'reasonable percentage depends on how much is known about the site, ' +
        'and that changes with the project. New build on a flat plot with a ' +
        'complete soil survey, the refurbishment of a building of which there ' +
        'are no drawings, and the structural strengthening of something with ' +
        'active damage are three radically different levels of uncertainty. ' +
        '**The right figure is a consequence of the level of information, not ' +
        'a custom of the trade.**',
    },

    { tipo: 'titulo', texto: '11. The administration and the profit' },
    {
      tipo: 'parrafo',
      texto:
        'Everything that makes the works run and does not end up built into ' +
        'them: the site director, the resident engineer, the storekeeper, the ' +
        'accounting, the social security contributions of the administrative ' +
        'staff, the transport, the stationery and the share of the office ' +
        'that project consumes.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the profit, which is the builder’s remuneration for taking on ' +
        'the risk. It gets forgotten — or disguised by spreading it through ' +
        'the unit rates — because naming it means having to defend it. The ' +
        'side effect of disguising it is worse: two budgets stop being ' +
        'comparable, because one shows it and the other hides it.',
    },
    {
      tipo: 'nota',
      texto:
        'When comparing two offers, the first question is not which is ' +
        'cheaper: it is **whether the two include the same things under the ' +
        'same structure**. One that shows administration and profit ' +
        'separately almost always looks dearer than one that diluted them, ' +
        'and almost always is not.',
    },

    { tipo: 'titulo', texto: '12. The financial cost of time' },
    {
      tipo: 'parrafo',
      texto:
        'It is the largest of the items nobody writes down. The project takes ' +
        'time, and while it does there is money committed that earns nothing, ' +
        'rent that carries on being paid, interest running and prices moving.',
    },
    {
      tipo: 'lista',
      items: [
        '**The opportunity cost of the capital tied up**, from the purchase of the plot to handover.',
        '**The rent on wherever you live in the meantime**, if the works are your own home. Multiplied by the real months, not by the promised ones.',
        '**The interest on the loan**, and the gap between what was expected to be drawn down and when it is actually drawn down.',
        '**The rise in prices during the works**, which in construction is not spread evenly: labour and materials do not move at the same rate, and a budget updated with a single general index understates the component that rises most.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And one consequence of all of the above worth saying without ' +
        'ornament: **every month of delay in the procedure is money**. Filing ' +
        'an incomplete application, which produces a record of observations ' +
        'and a whole cycle of corrections, does not cost what correcting the ' +
        'drawings costs. It costs what the month costs.',
    },

    { tipo: 'titulo', texto: 'How to build a budget that does not fall over' },
    {
      tipo: 'lista',
      items: [
        '**Keep three budgets apart, not one:** pre-investment (surveys, designs, procedures and taxes), the works, and the cost of time. Adding them up is easy; keeping them apart is what lets you see which of the three ran away.',
        '**Date everything.** A budget with no reference date cannot be updated or argued over six months later.',
        '**Write down what it does not include.** It is the most useful section of any budget and the one that is almost never there.',
        '**Ask for the twelve items explicitly**, even if some of them come in at zero. A declared zero is information; an absence is not.',
        '**Compare structures before totals.** Two final figures cannot be compared if there are two different scopes behind them.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The obligations quoted are transcribed from the articles in force. ' +
        'The last three items are imposed by no rule: they are trade ' +
        'judgement, and that is why they are stated without figures.',
    },
  ],
}
