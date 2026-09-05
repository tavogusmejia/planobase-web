import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «El contrato de diseño arquitectónico: qué tiene que decir».
 *
 * La sección de propiedad intelectual es lo más valioso del original y lo más
 * fácil de estropear al traducir. Tres cosas van literales:
 *
 * - Los derechos morales son «perpetuos, inalienables e irrenunciables» y
 *   **no se ceden aunque el contrato lo diga**. La cláusula que lo pretenda
 *   «no produce efecto», y así se traduce.
 * - El artículo 43 de la Ley 23 de 1982: el autor **no puede impedir** que el
 *   propietario modifique la obra. En arquitectura la integridad cede ante la
 *   propiedad, y suavizarlo invertiría la regla.
 * - La cesión sin plazo **queda limitada a cinco años**. La cifra es la cifra.
 *
 * Y la negativa: **ninguna norma colombiana fija un número de revisiones
 * incluidas.** No se añade una cifra habitual, ni siquiera como orientación.
 *
 * Vocabulario del lote: anteproyecto → concept design, esquema básico →
 * outline scheme, proyecto arquitectónico → architectural project. Contexto
 * añadido para el lector de fuera: qué es una expensa de curaduría, qué es el
 * impuesto de delineación y qué es la tarjeta de matrícula profesional.
 */
export const traduccion: TraduccionPost = {
  slug: 'contrato-de-diseno-arquitectonico',
  titulo: 'The architectural design contract: what it has to say',
  traducido: '2026-09-05',
  resumen:
    'Most design commissions in Colombia are agreed over WhatsApp and a bank ' +
    'transfer. The six clauses where the arguments are actually lost — ' +
    'including one copyright rule, peculiar to architecture, that surprises ' +
    'both sides.',
  metaDescripcion:
    'What an architectural design contract must say: scope, deliverables, ' +
    'revisions, ownership of the drawings and cancellation.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Most architectural design commissions in Colombia are agreed over ' +
        'WhatsApp and a bank transfer. It works fine until it stops working — ' +
        'and when it stops working, there is nothing to refer back to.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is not a model contract. These are **the six clauses where the ' +
        'arguments are really lost**, with what the rules say about each one. ' +
        'It serves equally for reviewing the contract you were sent and for ' +
        'asking for the one you were not.',
    },
    {
      tipo: 'nota',
      texto:
        'Having something in writing is not a best-practice recommendation: ' +
        'the fee schedule itself requires that **"there must be a written ' +
        'record between the architect and the contracting party setting out ' +
        'the terms of the contract"**.',
    },

    { tipo: 'titulo', texto: '1. Scope: what gets delivered, exactly' },
    {
      tipo: 'parrafo',
      texto:
        'The number one cause of conflict is that the two sides believed they ' +
        'had contracted for different things. It is solved by listing ' +
        'deliverables, not adjectives.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The rules carry the most complete list that exists in Colombia for ' +
        'the architectural project, and it works as a template:',
    },
    {
      tipo: 'lista',
      items: [
        'General drawings of floor plans, sections and elevations.',
        'Detail drawings: joinery, metalwork, stairs, bathrooms, façades, tiling, ceilings and floors.',
        'Layouts for drainage and lighting — **without the calculations or the engineering drawings**, which belong to another professional.',
        'Detailed specifications of materials and finishes.',
        'Coordination of the technical drawings. The rule sets a limit: "the architect’s task in this field is one of coordination only".',
        'The application to the competent authority.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And with the same clarity, **what is not included**: the soil ' +
        'survey, the structural design, the electrical, plumbing and gas ' +
        'designs, the topographic survey, the curaduría charges and the ' +
        'delineation tax levied on building work. The rule says it without ' +
        'hedging — the engineering studies "shall be paid for by the ' +
        'contracting party and their value is not comprised within the ' +
        'architect’s fee".',
    },
    {
      tipo: 'nota',
      texto:
        'This is not a commercial decision made by the practice: the law ' +
        'reserves the signing of the structural design and the geotechnical ' +
        'survey to civil engineers. A contract promising "everything ' +
        'included" is promising something it will later subcontract, or ' +
        'promising signatures it cannot give.',
    },

    { tipo: 'titulo', texto: '2. Payment: against deliverables, not against dates' },
    {
      tipo: 'parrafo',
      texto:
        'A payment schedule tied to dates is impossible to verify: if the ' +
        'project slips, the calendar carries on regardless. A schedule tied ' +
        'to **deliverables** verifies itself.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['On delivering', 'Cumulative'],
      filas: [
        ['Outline scheme', '7%'],
        ['Concept design', 'up to 15%'],
        ['Drawings sufficient to file the permit application', 'up to 45%'],
        ['Permit obtained', '50% to 60%'],
        ['Complete drawings and details', '80% to 90%'],
        ['Supervision during the works', 'the remaining 10%'],
      ],
      nota:
        'Decreto 2090 de 1989, paragraph 1.2.4.2. Ten per cent of the project ' +
        'fee is held back and paid out during the works — that is what keeps ' +
        'the architect invested in whether what was drawn can actually be ' +
        'built.',
    },

    { tipo: 'titulo', texto: '3. Revisions: how many, and who pays for the rest' },
    {
      tipo: 'parrafo',
      texto:
        '**No Colombian rule sets a number of revisions included.** It is a ' +
        'commercial decision, and for that reason it has to be written down: ' +
        'two, three, whatever the figure, but a figure.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What the rules do supply is who pays, and it is the distinction that ' +
        'heads off the dispute:',
    },
    {
      tipo: 'cita',
      texto:
        'Save for errors or omissions of the architect, every modification to ' +
        'the architectural project shall be charged to the contracting party.',
      fuente: 'Decreto 2090 de 1989, paragraph 1.2.4.3',
    },
    {
      tipo: 'parrafo',
      texto:
        'An error by the architect: the architect corrects it. A change of ' +
        'mind by the client: the client pays for it. The rule even ' +
        'distinguishes three scenarios according to whether the change ' +
        'increases, holds or reduces the construction budget.',
    },

    { tipo: 'titulo', texto: '4. Who owns the drawings' },
    {
      tipo: 'parrafo',
      texto:
        'This is the richest section and the one hardly anybody writes ' +
        'properly. There are four things worth knowing before signing any ' +
        'intellectual property clause.',
    },
    { tipo: 'titulo', texto: 'Drawings are protected works, with no formality' },
    {
      tipo: 'parrafo',
      texto:
        'Colombian copyright law expressly protects "works of drawing, ' +
        'painting, **architecture**… the **drawings**, sketches and plastic ' +
        'works relating to architecture". There is no need to register them: ' +
        'registration is declaratory, not constitutive. It serves as ' +
        'evidence, not as a requirement.',
    },
    { tipo: 'titulo', texto: 'Moral rights are not assignable, whatever the contract says' },
    {
      tipo: 'parrafo',
      texto:
        'The right to be recognised as the author is **"perpetual, ' +
        'inalienable and non-waivable"**, and the law adds that those rights ' +
        '"may not be waived or assigned". A clause purporting otherwise has ' +
        'no effect.',
    },
    { tipo: 'titulo', texto: 'Economic rights can be assigned, on two conditions' },
    {
      tipo: 'parrafo',
      texto:
        'Where a work is created to commission, the economic rights are ' +
        '**presumed** to have transferred to the party who commissioned it, ' +
        '"to the extent necessary for the exercise of its habitual ' +
        'activities". But there are two conditions almost nobody meets:',
    },
    {
      tipo: 'lista',
      items: [
        '**For the presumption to operate, the contract must be in writing.** With no written contract there is no presumption of assignment.',
        '**The transfer must be recorded in writing as a condition of its validity**, and if it does not mention a term, **it is limited to five years**.',
      ],
    },
    { tipo: 'titulo', texto: 'And the rule peculiar to architecture' },
    {
      tipo: 'parrafo',
      texto:
        'This one surprises both sides when they are shown it, and it sits in ' +
        'a single article:',
    },
    {
      tipo: 'cita',
      texto:
        'The author of an architectural project may not prevent the owner ' +
        'from introducing modifications to it, but shall have the power to ' +
        'forbid their name being associated with the altered work.',
      fuente: 'Ley 23 de 1982, article 43',
    },
    {
      tipo: 'parrafo',
      texto:
        'In architecture, **the author’s right to have the work left ' +
        'unaltered gives way to the right of ownership**. A building is ' +
        'inhabited, transformed and adapted; it is not a painting. What ' +
        'survives is the signature: the architect can demand their name be ' +
        'taken off.',
    },
    {
      tipo: 'nota',
      texto:
        'The counterpart sits in the fee schedule and runs the other way: the ' +
        'project **"may be used only in the construction of the building for ' +
        'which it was prepared"**, and it cannot be used on works other than ' +
        'those it was contracted for. In other words: you may modify the ' +
        'house that was designed for you; you may not build the same house ' +
        'five times from those drawings, unless that is expressly agreed.',
    },

    { tipo: 'titulo', texto: '5. What happens if you cancel' },
    {
      tipo: 'parrafo',
      texto:
        'Projects do collapse: the budget changes, the plot is sold, the ' +
        'family changes its plans. Better that this is written down before it ' +
        'happens.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The rule anticipates the case, and with a condition that surprises ' +
        'people:',
    },
    {
      tipo: 'cita',
      texto:
        'A percentage of the fee equivalent to the work carried out shall be ' +
        'charged […] plus an additional 25%. In this case, the partial ' +
        'drawings prepared may not be used for the partial or total execution ' +
        'of the works.',
      fuente: 'Decreto 2090 de 1989, paragraph 1.3.1',
    },
    {
      tipo: 'parrafo',
      texto:
        '**You cannot pay for the concept design, have somebody else finish ' +
        'it and build from that.** It is the clause most often ignored and ' +
        'the one that generates the most conflict. It can be agreed ' +
        'differently — buying the right to have it finished by somebody else ' +
        'is perfectly legitimate — but it has to be agreed.',
    },

    { tipo: 'titulo', texto: '6. Who signs, and under what number' },
    {
      tipo: 'parrafo',
      texto:
        'To practise architecture in Colombia you need a professional ' +
        'registration card, and the law requires that **to enter into ' +
        'contracts the registration be produced and its number stated in the ' +
        'contract**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'If the contract you were sent does not carry it, ask. The register ' +
        'is public and free, and there is a certificate of professional ' +
        'standing that also attests to **the absence of sanctions**. With one ' +
        'quirk worth knowing: the search does not work by name, only by ' +
        'identity document or registration number.',
    },

    { tipo: 'titulo', texto: 'The check before signing' },
    {
      tipo: 'lista',
      items: [
        'Are the **deliverables** of each stage listed, and not merely the name of the stage?',
        'Does it say explicitly **what is not included** — soil survey, structural, technical designs, curaduría charges, tax?',
        'Does payment run against **deliverables** rather than against dates?',
        'Does it say **how many revisions** are included and what happens with the ones after that?',
        'Does it say who owns the drawings, **for how long** and **for which building**?',
        'Does it say what happens if either side cancels?',
        'Is the signatory’s **professional registration number** there?',
        'Are there deadlines with dates, and what happens if they are missed?',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'A contract that answers these eight fits on three pages and heads ' +
        'off almost everything that goes wrong. Reluctance to sign it, from ' +
        'either side, says rather more than any reference.',
    },
  ],
}
