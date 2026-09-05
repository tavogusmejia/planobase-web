import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Por qué la obra se sale del presupuesto».
 *
 * El artículo se sostiene sobre una negativa: **no publica ni una cifra ni un
 * porcentaje de sobrecosto**, porque no hay fuente colombiana con metodología
 * que lo mida. La traducción tampoco añade ninguno. Sería el error más fácil
 * de cometer aquí —el inglés de construcción está lleno de porcentajes de
 * contingencia de manual— y arruinaría una pieza que va justamente de por qué
 * los números iniciales fallan.
 *
 * El vocabulario viene del corpus ya traducido y no se reinventa: *additional
 * quantities* para las mayores cantidades, *fixed price* y *administración
 * delegada, or cost-plus management* para las modalidades, *trade by trade*
 * para la contratación por capítulos, *concept design* para el anteproyecto,
 * *soil survey* para el estudio de suelos, *contingency* para el imprevisto e
 * *insurance bonds* para las pólizas.
 *
 * El DANE va sin traducir y glosado la primera vez, como en toda la serie.
 */
export const traduccion: TraduccionPost = {
  slug: 'por-que-la-obra-se-sale-del-presupuesto',
  titulo: 'Why the works go over budget',
  traducido: '2026-09-05',
  resumen:
    'It is hardly ever because somebody lied. There are eight specific ' +
    'causes, every one of them foreseeable, and seven are controlled before ' +
    'the first bag of cement arrives. What they are, and what to do about ' +
    'each one.',
  metaDescripcion:
    'The eight reasons a building job goes over budget in Colombia, and how ' +
    'each one is controlled before the work starts.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'It is so common that it gets taken for a law of nature: the works ' +
        'always cost more than the budget said. And because it is taken for ' +
        'granted, nobody looks into it — when in reality **it is hardly ever ' +
        'one single cause, and hardly any of them is bad faith**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There are eight, and seven are controlled before the first bag of ' +
        'cement arrives.',
    },

    { tipo: 'titulo', texto: '1. The budget was an estimate, not a budget' },
    {
      tipo: 'parrafo',
      texto:
        'The commonest confusion of all. An **estimate** is made per square ' +
        'metre against an assumed area; a **budget** is made from quantities ' +
        'of work measured off finished drawings.',
    },
    {
      tipo: 'parrafo',
      texto:
        'When somebody gives you a figure before the technical drawings ' +
        'exist, they are estimating. That is legitimate and it serves to ' +
        'decide whether the project is viable — but **it is not something you ' +
        'can contract against**.',
    },
    {
      tipo: 'nota',
      texto:
        'The question that settles it: **"does this come out of measured ' +
        'quantities or out of a value per square metre?"** Both answers are ' +
        'valid. What is not valid is not knowing which one you were handed.',
    },

    { tipo: 'titulo', texto: '2. Items were missing' },
    {
      tipo: 'parrafo',
      texto:
        'The ones most often forgotten are not the obvious ones. Almost ' +
        'always: the soil survey, the technical designs, the curaduría ' +
        'charges, the delineation tax, the utility connections, the ' +
        'earthworks, the temporary site enclosure, the insurance bonds and ' +
        'the laboratory tests.',
    },
    {
      tipo: 'parrafo',
      texto:
        'None of them is optional, and several have to be paid **before** the ' +
        'building permit comes out. A budget that does not name them is not ' +
        'cheaper: it is incomplete.',
    },

    { tipo: 'titulo', texto: '3. The ground was not the ground everyone assumed' },
    {
      tipo: 'parrafo',
      texto:
        'It is the most expensive cause of all and the easiest to avoid. The ' +
        'foundations depend on the ground, and the ground is known only ' +
        'through boreholes. If the geotechnical survey arrives after the ' +
        'budget, **the foundations in that budget are an assumption**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And it is not a minor item: between shallow foundations and deep ' +
        'foundations there is a difference that changes the whole project, ' +
        'not only its cost.',
    },
    {
      tipo: 'nota',
      texto:
        'Commission the soil survey **as soon as you have the plot**, even ' +
        'before anything is drawn. It is one of the few things that can be ' +
        'got out of the way without having decided anything about the house.',
    },

    { tipo: 'titulo', texto: '4. Changes of mind' },
    {
      tipo: 'parrafo',
      texto:
        'It is the commonest cause and the only one that depends entirely on ' +
        'the client. Moving a wall once it is already built does not cost ' +
        'what the wall costs: it costs demolishing it, carting the rubble ' +
        'away, rebuilding it, and the time the gang stands idle while the ' +
        'decision is being made.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The rule has had this settled for decades: **except for an error by ' +
        'the architect, every modification is charged to the client**. It is ' +
        'not an unfair clause — it is what makes it possible for a project to ' +
        'finish.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The way to control it is not to forbid changes: it is to **close the ' +
        'concept design before the project is drawn**, because there a change ' +
        'costs an afternoon and on site it costs a demolition.',
    },

    { tipo: 'titulo', texto: '5. Additional quantities with no rule' },
    {
      tipo: 'parrafo',
      texto:
        'On every job quantities turn up that were not foreseen: more ' +
        'excavation, more fill, more steel. That is normal. What is not ' +
        'normal is that **there is no agreed rule** on who approves them, at ' +
        'what unit rate and on what document.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Without that rule, every additional quantity is a negotiation you ' +
        'enter at a disadvantage, because the works have already started and ' +
        'stopping them costs more than accepting the price.',
    },

    { tipo: 'titulo', texto: '6. Time costs money as well' },
    {
      tipo: 'parrafo',
      texto:
        'A delay is not merely a nuisance. It is a gang that carries on being ' +
        'paid, hired plant that carries on being invoiced, rent that carries ' +
        'on being paid while the place cannot be lived in, and materials that ' +
        'go up in price in the meantime.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And construction costs really do move: DANE, the national statistics ' +
        'office, measures them every month. On a long contract, **the same ' +
        'scope costs a different amount six months in**.',
    },
    {
      tipo: 'nota',
      texto:
        'A useful fact for negotiating: labour has been moving a good deal ' +
        'faster than the total cost index. A contract indexed to the general ' +
        'index **systematically understates labour**. If your job is heavy on ' +
        'people, it is worth indexing by cost group rather than by the total.',
    },

    { tipo: 'titulo', texto: '7. The incentive built into the contract type' },
    {
      tipo: 'parrafo',
      texto:
        'No contract type is a bad one, but each pushes in a direction and it ' +
        'is worth knowing which:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Contract type', 'Which way it pushes'],
      filas: [
        [
          '**Fixed price**',
          'The builder absorbs the overrun, so their incentive is to **cut costs**. Somebody has to verify that the cuts are not made in what cannot be seen',
        ],
        [
          '**Administración delegada, or cost-plus management**',
          'The fee is a percentage of the cost, so **whoever manages the works earns more when the works cost more**. It is corrected with a budget approved in advance and a rule for additional quantities',
        ],
        [
          '**Trade by trade**',
          'Nobody answers for the whole. The coordination — and whatever falls between two contracts — is yours',
        ],
      ],
      nota:
        'This is not cynicism: it is contract design. A misaligned incentive ' +
        'turns nobody into a crook, but it does make the hard decisions fall ' +
        'on the same side every time.',
    },

    { tipo: 'titulo', texto: '8. Nobody was checking' },
    {
      tipo: 'parrafo',
      texto:
        'The eighth is not a cause: it is what allows the other seven to go ' +
        'unnoticed until there is no remedy left.',
    },
    {
      tipo: 'parrafo',
      texto:
        'If nobody measures quantities against what is invoiced, if nobody ' +
        'checks that the materials are the ones specified, if nobody records ' +
        'the delays as they happen — the overrun does not appear all at once ' +
        'at the end. **It had been growing the whole time and nobody was ' +
        'looking at it.**',
    },

    { tipo: 'titulo', texto: 'What to do' },
    {
      tipo: 'lista',
      items: [
        '**The soil survey before the budget.** Not after.',
        '**Close the concept design before the technical drawings begin.** That is where deciding is cheap.',
        '**Require the budget to list what it does NOT include**, and to name the nine items in point 2.',
        '**Agree the rule for additional quantities in writing**: who approves, at what price, on what document.',
        '**Set aside a contingency and do not touch it for anything else.** If it is left over at the end, so much the better.',
        '**Put somebody in charge of checking**, even if that somebody is you with a list. Without checking, all of the above is theory.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And one thing that appears on no list: **a budget markedly cheaper ' +
        'than the rest is not an opportunity.** It almost always comes from ' +
        'leaving out items that have to be paid for anyway, later, and ' +
        'without having been foreseen.',
    },
  ],
}
