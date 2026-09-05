import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Arquitecto, maestro de obra o constructora: quién hace qué».
 *
 * **`maestro de obra` no se traduce.** No hay equivalente: `master builder`
 * dice el oficio pero no la figura colombiana, y `foreman` la rebaja a
 * empleado de una empresa cuando aquí contrata directamente con el
 * propietario. Se conserva el término, se glosa en la tabla la primera vez, y
 * el artículo mantiene intacto lo que el original dice sobre él: **un buen
 * maestro es indispensable**, y la pieza no va de quién sabe más sino de quién
 * puede firmar qué.
 *
 * `interventoría` va como en `interventoria-de-obra`, con la misma glosa y la
 * misma distinción frente a `site supervision` y `site management`. Los dos
 * artículos se enlazan por el tema y un término que bailara entre ellos
 * rompería la lectura.
 *
 * Se traduce entera la reserva del artículo 26 de la Ley 400 y la prohibición
 * de prestar la firma, que es de donde sale la señal de alarma del final.
 *
 * Separadores: «2.000 m²» es «2,000 m²», «10 %» es «10%».
 */
export const traduccion: TraduccionPost = {
  slug: 'arquitecto-maestro-de-obra-o-constructora',
  titulo: 'Architect, maestro de obra or construction company: who does what',
  traducido: '2026-09-05',
  resumen:
    'These are not three versions of the same service, nor three price ' +
    'brackets. They are three different trades, and the law reserves certain ' +
    'signatures to certain professionals. What each one does, what each may ' +
    'sign, and who answers if something goes wrong.',
  metaDescripcion:
    'What an architect, a maestro de obra and a construction company each do ' +
    'in Colombia, what each may sign, and who answers for the works.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The question usually arrives like this: "I have the plot, a maestro ' +
        'de obra has told me he will do it for such and such, so why do I ' +
        'need an architect?". It is a legitimate question and it deserves an ' +
        'answer that is not advertising.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The short answer: **these are not three versions of the same service ' +
        'at different prices. They are three different trades**, and part of ' +
        'the matter is not a question of preference at all — the law reserves ' +
        'certain signatures to certain professionals, and without those ' +
        'signatures there is no permit.',
    },

    { tipo: 'titulo', texto: 'What each one does' },
    {
      tipo: 'tabla',
      cabeceras: ['Who', 'What they do', 'What they sign'],
      filas: [
        [
          '**Architect**',
          'Designs the project: how it is organised, how the light comes in, how you move through it, how it looks. Coordinates the other disciplines and handles the permit application',
          'The architectural drawings, and is **legally answerable for them**',
        ],
        [
          '**Civil engineer**',
          'Calculates how the building stands up and what the ground can carry',
          'The structural design and the geotechnical survey. **Only they may**',
        ],
        [
          '**Maestro de obra**',
          'Builds. A master builder who knows how construction really goes, runs the gang, and resolves on site what the drawing did not anticipate',
          'None of the above. That is not a slight: it is a different trade',
        ],
        [
          '**Construction company**',
          'Builds with an organisation behind it: buys, subcontracts, programmes and answers for the whole',
          'Its contract. It brings in whichever professionals the law requires',
        ],
      ],
    },
    {
      tipo: 'nota',
      texto:
        'A good maestro de obra is indispensable and usually knows more about ' +
        'building than plenty of qualified professionals. This is not about ' +
        'who knows more. It is about **who may sign what**, and who answers ' +
        'to the law when something fails.',
    },

    { tipo: 'titulo', texto: 'What the law reserves' },
    {
      tipo: 'parrafo',
      texto:
        'There is no room for interpretation here. The seismic-resistant ' +
        'building law puts it in a single line:',
    },
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
        'That same law defines who each of them is, and in all three cases ' +
        'the definition ends the same way — **"and who signs or titles ' +
        'them"**:',
    },
    {
      tipo: 'lista',
      items: [
        '**Architectural designer:** the architect under whose responsibility the design and the architectural drawings are produced.',
        '**Structural designer:** the civil engineer under whose responsibility the design and the structural drawings are produced.',
        '**Geotechnical engineer:** the civil engineer who signs the geotechnical survey and sets the foundation parameters.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And to practise architecture in Colombia you need a **professional ' +
        'registration card**. The law goes further: to enter into contracts ' +
        'you have to produce it **and state its number in the contract**. The ' +
        'register is public and free, so checking takes two minutes.',
    },
    {
      tipo: 'nota',
      texto:
        'There is an express prohibition worth knowing about, because it ' +
        'describes a real practice: an architect is forbidden to **"lend ' +
        'their signature, whether free of charge or for payment, to authorise ' +
        'drawings that have not been studied, checked or produced ' +
        'personally"**. If somebody offers to "find you a signature", that is ' +
        'exactly what the rule prohibits — and whoever signs is whoever ' +
        'answers.',
    },

    { tipo: 'titulo', texto: 'The confusion that costs the most' },
    {
      tipo: 'parrafo',
      texto:
        'This one repeats on almost every small project: believing that the ' +
        'architect who produced the drawings "is running the works". They are ' +
        'not, unless they were engaged to do so, and the two are different ' +
        'things.',
    },
    {
      tipo: 'cita',
      texto:
        'The architect has only the function of supervising their design and ' +
        'not the technical management of the works.',
      fuente: 'Decreto 2090 de 1989, paragraph 1.1.4',
    },
    {
      tipo: 'lista',
      items: [
        '**Architectural site supervision:** the author of the design visits the site, chooses finishes and answers questions about how the drawings are to be read. They look after whether what is built resembles what was designed.',
        '**Technical site management:** somebody is in charge of carrying out the work — the labour, the programming, the quality, the safety. It is a full-time job and one of a different nature.',
        '**Interventoría:** an independent third party monitors the builder on the client’s behalf. See below.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Two details from the rule about supervision: it **cannot be excluded ' +
        'from the design contract**, nor contracted with an architect other ' +
        'than the author of the design. And if the works are never carried ' +
        'out, that fee is not paid. It is the only part of the fee that ' +
        'depends on your actually building.',
    },

    { tipo: 'titulo', texto: 'The three ways of contracting the construction' },
    {
      tipo: 'parrafo',
      texto:
        'Whoever does the design, the works can be contracted in three ways, ' +
        'and the difference lies in **who carries the risk of the overrun**.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Contract type', 'How it works', 'Who absorbs the overrun'],
      filas: [
        [
          '**Fixed price**',
          'A figure is agreed for the completed works, with a defined scope',
          'The builder. Which is why a risk margin is built into the price',
        ],
        [
          '**Administración delegada, or cost-plus management**',
          'You pay the actual costs and a percentage of them as a management fee',
          '**You.** In exchange you see the invoices and control the decisions',
        ],
        [
          '**Trade by trade**',
          'You contract in parts: the structure with one firm, the finishes with another',
          'You, and you take on the coordination between them as well',
        ],
      ],
      nota:
        'The fee schedule sets cost-plus management at 10% of the actual cost ' +
        'for ordinary work, 14% on refurbishment and 17% on restoration. It ' +
        'is not a binding rate, but it is the reference the number you are ' +
        'quoted comes from.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The trap in cost-plus management is obvious once it is spelled out: ' +
        '**if the fee is a percentage of the cost, whoever manages the works ' +
        'earns more when the works cost more.** It is not fraud, it is a ' +
        'misaligned incentive, and it is corrected with a budget approved in ' +
        'advance and a clear rule for additional quantities.',
    },

    { tipo: 'titulo', texto: 'Why the one who builds cannot check their own work' },
    {
      tipo: 'parrafo',
      texto:
        'Interventoría is technical supervision **independent of the ' +
        'builder**. That independence is not a detail: it is the whole point. ' +
        'Nobody finds their own mistakes with the same enthusiasm they bring ' +
        'to finding somebody else’s, particularly when correcting them costs ' +
        'money.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The law recognises this in one specific case and makes it ' +
        'compulsory: on buildings exceeding **2,000 m²** a **technical ' +
        'supervisor independent of the builder** is required, and that ' +
        'supervisor issues the technical certificate of occupancy under oath. ' +
        'On top of that, the review of the structural designs has to be done ' +
        'by a professional **other than the designer and independent of them ' +
        'in employment terms**.',
    },
    {
      tipo: 'nota',
      texto:
        'Below that threshold interventoría is not compulsory, but the logic ' +
        'does not change. On a house, engaging one usually pays off when the ' +
        'owner cannot be on site, when the budget is high, or when somebody ' +
        'else chose the builder.',
    },

    { tipo: 'titulo', texto: 'Who answers if something goes wrong' },
    {
      tipo: 'parrafo',
      texto:
        'It is the question nobody asks until they need it, and the answer ' +
        'depends entirely on who you signed with.',
    },
    {
      tipo: 'lista',
      items: [
        '**Whoever signs a drawing answers for it.** Not whoever drew it, not whoever paid for it: whoever signed it. That is why a lent signature is so serious.',
        '**On new housing of five or more units**, the builder or the seller must cover financial loss for **ten years** counted from the technical certificate of occupancy. It applies to projects whose permit application was filed after July 2016.',
        '**With a maestro de obra and no written contract**, a claim runs against an individual, with no insurance bonds and no assets behind them. They may be perfectly honest and still have nothing to answer with.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'None of which means ruling out the maestro de obra. It means the ' +
        'price difference between one option and another **is not only a ' +
        'difference of service: it is also a difference of backing**, and ' +
        'that is worth knowing when you decide.',
    },

    { tipo: 'titulo', texto: 'So what do you need?' },
    {
      tipo: 'lista',
      items: [
        '**You are going to build new and you need a permit.** It is not optional: you need an architect for the project and a civil engineer for the structural design and the soil survey. Without those signatures there is no permit.',
        '**You are refurbishing without touching the structure.** A good maestro de obra may be enough, with two warnings: nobody should touch a wall without knowing whether it is structural, and check whether your work needs a permit. Plenty of it does.',
        '**You are extending or adding a storey.** You need a civil engineer before anything else. The question is not how it will look, it is whether the house can carry it.',
        '**You are building something large or for sale.** You need the full package, and above 2,000 m² independent technical supervision is compulsory.',
      ],
    },

    { tipo: 'titulo', texto: 'Warning signs' },
    {
      tipo: 'lista',
      items: [
        '**"I will find you somebody to sign the drawings."** It is precisely the practice the law prohibits.',
        '**"You do not need a permit, that is money down the drain."** Building without a permit exposes you to fines, to demolition and to having the utilities cut off.',
        '**"I will do the structural design myself", said by somebody who is not a civil engineer.**',
        '**A price well below the rest with no explanation of where it comes from.** It usually comes from leaving out surveys, technical designs or procedures that have to be paid for later anyway.',
        '**No questions about the ground.** Anyone who does not ask about the site before quoting is not quoting for your job: they are quoting for a generic one.',
        '**Nothing in writing.** With no contract there is no scope, no deadline and nobody to claim against.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The useful question is not "architect or maestro de obra". It is ' +
        '**what has to be signed on your project, and which of the people ' +
        'quoting for it can sign that.** With that, the decision takes ' +
        'itself.',
    },
  ],
}
