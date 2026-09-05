import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Diez preguntas antes de firmar con un constructor».
 *
 * Es una lista que alguien abre justo antes de firmar, así que el inglés tiene
 * que ser tan accionable como el español: las preguntas se traducen como
 * preguntas, y cada una conserva la respuesta que debería recibir.
 *
 * La negativa que sostiene la pregunta 9 se traduce entera: en una casa
 * unifamiliar contratada directamente **no hay garantía legal**, solo la que
 * se pacte, y «si no se pacta, no existe». No se añade ningún plazo de
 * cortesía.
 *
 * Contexto añadido para el lector de fuera: qué reserva la Ley 400 al
 * ingeniero civil, qué es una expensa de curaduría, qué es el impuesto de
 * delineación y qué es el certificado técnico de ocupación, que es la fecha
 * desde la cual corre la garantía decenal y no la escritura.
 *
 * Vocabulario del lote de proceso: constructor → builder, dirección de obra →
 * site management, supervisión del arquitecto → the architect’s site
 * supervision, administración delegada → cost-plus management.
 */
export const traduccion: TraduccionPost = {
  slug: 'diez-preguntas-antes-de-firmar-con-un-constructor',
  titulo: 'Ten questions to ask before signing with a builder',
  traducido: '2026-09-05',
  resumen:
    'These are not questions born of mistrust: they are the ten whose answers ' +
    'change what you will pay, what you will get and who you can claim ' +
    'against if something goes wrong. With what each one ought to be answered ' +
    'with.',
  metaDescripcion:
    'The ten questions to put to a builder before you sign a contract in ' +
    'Colombia, and what each of them ought to be answered with.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Almost nobody asks these questions, and it is not carelessness: you ' +
        'do not know what to ask when you do not know the trade. These ten ' +
        'cover practically everything that later turns into a problem.',
    },
    {
      tipo: 'parrafo',
      texto:
        'They are not questions born of mistrust. A good builder answers them ' +
        'in ten minutes without taking offence — in fact, **a builder is ' +
        'grateful for a client who knows what they are buying**, because that ' +
        'is the client who does not change their mind halfway through.',
    },

    { tipo: 'titulo', texto: '1. Who signs the structural drawings and the soil survey?' },
    {
      tipo: 'parrafo',
      texto:
        '**The answer should be: a civil engineer, and here is the name.** ' +
        'Colombian law reserves those two signatures to civil engineers, and ' +
        'whoever signs is legally answerable. If the answer is "we do that ' +
        'ourselves" with no name attached, or "I will find you somebody to ' +
        'sign", that last one is a practice the law expressly prohibits.',
    },

    { tipo: 'titulo', texto: '2. Is the price fixed, cost-plus, or trade by trade?' },
    {
      tipo: 'parrafo',
      texto:
        'All three are legitimate, and the difference lies in **who absorbs ' +
        'the overrun**:',
    },
    {
      tipo: 'lista',
      items: [
        '**Fixed price:** the builder absorbs it, and prices that risk in accordingly.',
        '**Cost-plus management, known here as administración delegada:** you absorb it, and in exchange you see the invoices. Watch the incentive: if the fee is a percentage of the cost, whoever manages the works earns more when the works cost more.',
        '**Trade by trade:** you absorb it, and the coordination between contractors as well.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'What should not happen is that nobody can tell you which of the ' +
        'three it is.',
    },

    { tipo: 'titulo', texto: '3. What does the price NOT include?' },
    {
      tipo: 'parrafo',
      texto:
        'This is more useful than asking what it does include. **The answer ' +
        'should name, without hesitating**, the soil survey, the technical ' +
        'designs, the curaduría charges, the delineation tax levied on ' +
        'building work, the utility connections and a contingency.',
    },
    {
      tipo: 'nota',
      texto:
        'A price well below the rest almost always comes from leaving items ' +
        'out, not from being more efficient. And the omitted items have to be ' +
        'paid for anyway, later, and without having been budgeted for.',
    },

    { tipo: 'titulo', texto: '4. How are additional quantities of work handled?' },
    {
      tipo: 'parrafo',
      texto:
        'It is the question that saves the most money and almost nobody asks. ' +
        'On every job, quantities appear that were not foreseen. What has to ' +
        'be agreed in advance is **who approves them, at what unit rate and ' +
        'on what document**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Without that rule, every additional quantity is a negotiation you ' +
        'enter at a disadvantage, because the works have already started.',
    },

    { tipo: 'titulo', texto: '5. What is the programme, and what happens if it slips?' },
    {
      tipo: 'parrafo',
      texto:
        'A programme with no consequence attached is an intention. There have ' +
        'to be dates, verifiable milestones and an agreed consequence for ' +
        'delay attributable to the builder. And the other way round too: what ' +
        'happens if the delay is yours, for not deciding in time.',
    },

    { tipo: 'titulo', texto: '6. Who runs the site, and are they there every day?' },
    {
      tipo: 'parrafo',
      texto:
        'The person who quotes is not necessarily the person who will be ' +
        'there. Ask for the name of whoever runs the site, how often they ' +
        'attend, and who decides when they are not there.',
    },
    {
      tipo: 'nota',
      texto:
        'And do not confuse site management with the architect’s site ' +
        'supervision. The architect looks after whether what is built ' +
        'resembles the design; technical site management is another job ' +
        'altogether, and a full-time one.',
    },

    { tipo: 'titulo', texto: '7. How are quality and materials controlled?' },
    {
      tipo: 'parrafo',
      texto:
        'The answer should mention **laboratory testing**: concrete strength, ' +
        'compaction of the ground, quality of the reinforcement steel. And ' +
        'who pays for the tests and who keeps the results.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ask as well whether the specified materials may be substituted, and ' +
        'who authorises a substitution. Something always gets substituted on ' +
        'site; the difference is whether you find out before or after.',
    },

    { tipo: 'titulo', texto: '8. What insurance bonds are in place?' },
    {
      tipo: 'parrafo',
      texto:
        'Performance, stability of the works, wages and employment benefits, ' +
        'and third-party liability. Ask for copies, not for a mention of them.',
    },
    {
      tipo: 'nota',
      texto:
        'The **wages and benefits** bond is the one most often forgotten and ' +
        'the one that hurts most: if the builder does not pay the social ' +
        'security contributions of the workforce and somebody is injured on ' +
        'your site, the problem does not stop with the builder.',
    },

    { tipo: 'titulo', texto: '9. What warranty is given, and when does it start running?' },
    {
      tipo: 'parrafo',
      texto:
        'On new housing of five or more units, the builder or the seller must ' +
        'cover financial loss for **ten years counted from the certificado ' +
        'técnico de ocupación**, the technical certificate of occupancy — not ' +
        'from the deed of sale and not from the handover of the keys. It ' +
        'applies to projects whose permit application was filed after July ' +
        '2016.',
    },
    {
      tipo: 'parrafo',
      texto:
        'For a single-family house contracted directly, the warranty is ' +
        'whatever is agreed. **If it is not agreed, it does not exist.**',
    },

    { tipo: 'titulo', texto: '10. May I speak to two of your clients from three years ago?' },
    {
      tipo: 'parrafo',
      texto:
        'From three years ago, not the most recent one. Jobs that have just ' +
        'been handed over all look fine. **What you want to know is how the ' +
        'builder responded when a problem turned up after handover**, which ' +
        'is when there is no money left in play and only seriousness remains.',
    },
    {
      tipo: 'parrafo',
      texto:
        'A builder with a history gives you those names without thinking ' +
        'twice. Discomfort at this question is, by some margin, the most ' +
        'informative signal of the ten.',
    },

    { tipo: 'titulo', texto: 'And one thing that is not a question' },
    {
      tipo: 'parrafo',
      texto:
        'All of the above has to end up **in writing**. Scope, price, ' +
        'contract type, programme, additional quantities, quality, bonds, ' +
        'warranty. You do not need a twenty-page contract; you need those ' +
        'eight things written down and signed.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Reluctance to put something in writing, from either side, says more ' +
        'than any reference ever will.',
    },
  ],
}
