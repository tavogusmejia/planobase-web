import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Piscina y jacuzzi juntos: qué equipos se comparten y cuándo
 * sale mal».
 *
 * Vocabulario heredado sin cambios de las otras cuatro piezas de la tanda:
 * `cubierta antiatrapamiento` → anti-entrapment cover —tal como lo fija
 * `en/ley-1209-piscinas-copropiedad.ts`, y no se inventa nada nuevo—,
 * `estructuras similares` → similar structures, `tiempo de recirculación` →
 * turnover time, `cuarto de equipos` → equipment room, `conexión equipotencial`
 * → equipotential bonding, `desagüe sumergido` → submerged drain, `sistema de
 * liberación de vacío` → vacuum release system, `vaso` → shell y pool/spa
 * cuando el castellano dice «vaso» para referirse al conjunto.
 *
 * Fija aquí: `spa de rebose` → **spillover spa**, que es el nombre corriente del
 * arreglo en inglés, `válvula de tres vías` → three-way diverter valve,
 * `bomba de hidromasaje` → jet pump, `soplador de aire` → air blower,
 * `consigna` → setpoint, `caudal` → flow rate, `carga de bañistas` → bather
 * load, `dosificación` → dosing, `acometida eléctrica` → electrical supply.
 *
 * La frase que cierra el artículo —«comparta el cuarto, no el agua»— se traduce
 * conservando el paralelismo, porque es el resumen de la tesis y la única línea
 * del texto pensada para recordarse.
 *
 * Separadores: «0,5 horas» es «0.5 hours», «0,90 m» es «0.90 m», «2,4 m/s» es
 * «2.4 m/s», «1,8 m/s» es «1.8 m/s»; el espacio antes del `%` desaparece:
 * «100 %» es «100%».
 */
export const traduccion: TraduccionPost = {
  slug: 'piscina-y-jacuzzi-juntos',
  titulo: 'A pool and a spa together: what can be shared, and when it goes wrong',
  traducido: '2026-09-05',
  resumen:
    'Sharing the machinery between the two sounds like a saving and is the most ' +
    'predictable failure in the field. Since 2026 the rules require independent ' +
    'recirculation — and there is a physical reason behind it worth understanding.',
  metaDescripcion:
    'What equipment a pool and a spa can share, what Colombian rules have ' +
    'required since 2026, and why a spillover spa works out expensive.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The question always arrives at the same moment in a project, when there ' +
        'is already a budget on the table: if we are going to build a plant room ' +
        'anyway, with its pump, its filter and its heater, why not hang the spa ' +
        'off it too and save a whole set of machinery?',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is a reasonable question, the saving is real on paper, and the answer ' +
        'is no. Until recently that answer was an engineer’s opinion you had to ' +
        'defend against a supplier. Since May 2026 it is written down.',
    },

    { tipo: 'titulo', texto: 'What the rule says, in one line' },
    {
      tipo: 'cita',
      texto:
        'Pool tanks and similar structures subject to this resolution built from ' +
        'its entry into force onwards must have an independent recirculation ' +
        'system.',
      fuente: 'Resolución 929 de 2026, technical annexe, numeral 10.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'A spa is a **similar structure** for this rule: the resolution defines ' +
        'that category by expressly naming spas, whirlpool baths or tubs and ' +
        'hydrotherapy pools. So if you build a pool and a spa today, **each one ' +
        'carries its own recirculation system**. This is not a design ' +
        'recommendation: it is the text of the technical annexe.',
    },
    {
      tipo: 'nota',
      texto:
        'Two honest qualifications about the reach of that sentence. The first is ' +
        'that it speaks of the **recirculation system** — the water circuit: ' +
        'suction, pump, filter, return — not of the room or the electrical supply; ' +
        'those can be shared, and below I set out exactly which. The second is ' +
        'that the requirement is aimed at tanks built **from entry into force ' +
        'onwards**. For what is already built the resolution has a transitional ' +
        'regime of improvement plans and programmes: **the articles in the official ' +
        'PDF have a degraded text layer and I am not transcribing those periods ' +
        'here**. If your case is an existing installation, check the text in the ' +
        'Diario Oficial before relying on any particular deadline.',
    },

    { tipo: 'titulo', texto: 'Why: three incompatibilities, not a fussiness' },
    {
      tipo: 'parrafo',
      texto:
        'The rule does not explain its reasoning, so I will, because understanding ' +
        'it is what lets you argue with anyone who proposes the opposite. There ' +
        'are three, and each would be enough on its own.',
    },

    { tipo: 'titulo', texto: '1. Turnover times differ by a factor of ten' },
    {
      tipo: 'parrafo',
      texto:
        'This is the hard argument, and it is purely numerical. The same ' +
        'resolution sets how long the system should take to pass a volume equal to ' +
        'all the water in the shell through the filter:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Type of tank', 'Turnover time', 'Turnovers per day'],
      filas: [
        ['Restricted-use pool, not open to the public', '4 to 6 hours', '2 to 4'],
        ['**Similar structures** — spa, hot tub, hydrotherapy', '**0.5 hours**', '**12**'],
      ],
      nota:
        'Resolución 929 de 2026, technical annexe, numeral 10, table 1. The ' +
        'calculation must be made on 100% of the water volume.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Half an hour against four or six. A plant sized to turn over fifty cubic ' +
        'metres in five hours **cannot** turn over fifteen hundred litres in ' +
        'thirty minutes and go on doing its own job: they are two different flow ' +
        'rates, two different filtration velocities and two different duty ' +
        'regimes. You can alternate with valves — do one and then the other — but ' +
        'then while the spa recirculates the pool does not, and the rule asks the ' +
        'pool for between eight and twenty-four hours of circulation a day.',
    },

    { tipo: 'titulo', texto: '2. The temperatures are incompatible and water does not divide' },
    {
      tipo: 'parrafo',
      texto:
        'A spa is used hot: the resolution caps the water at **40 °C**. A pool is ' +
        'used at a temperature for prolonged bathing, which in trade practice is ' +
        'around twenty-seven or twenty-eight degrees — that last figure is comfort ' +
        'judgement, not a code figure: the resolution only sets the ceiling.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Twelve degrees of difference across volumes that differ by thirty or ' +
        'forty times. If the two shells share water, **there are not two ' +
        'temperatures**: there is one, and it will be whatever the mixture gives. ' +
        'Heating the spa ends up heating the pool, which is like paying to heat ' +
        'fifty cubic metres in order to get into one and a half.',
    },

    { tipo: 'titulo', texto: '3. The spa’s chemistry drags the pool’s along with it' },
    {
      tipo: 'parrafo',
      texto:
        'The bather load per litre of a spa is two orders of magnitude greater ' +
        'than a pool’s, and at forty degrees the disinfectant is consumed far ' +
        'faster. A spa needs aggressive dosing and frequent water changes; a pool ' +
        'needs stability.',
    },
    {
      tipo: 'parrafo',
      texto:
        'With common water you have to choose which of the two regimes applies, ' +
        'and both outcomes are bad: either you dose for the spa and over-chlorinate ' +
        'fifty cubic metres, with the cost and the smell that implies, or you dose ' +
        'for the pool and the spa falls short precisely where the microbiological ' +
        'risk is greatest.',
    },

    { tipo: 'titulo', texto: 'The spillover spa, which is the elegant trap' },
    {
      tipo: 'parrafo',
      texto:
        'The arrangement most often proposed and the one that looks best in a ' +
        'render: the spa raised a few centimetres above the pool, spilling into it ' +
        'as a cascade. One body of water, two levels, and that sound of falling ' +
        'water everybody likes.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is a legitimate solution **when designed in full knowledge of what it ' +
        'does**, and a trap when sold as "the spa that comes free with it". ' +
        'Because spillover means exactly what it looks like: **the spa’s water is ' +
        'the pool’s water**, with all three consequences above at once.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The right way to do it exists and consists of being able to **isolate** ' +
        'the spa: three-way diverter valves that close the spillover and put the ' +
        'spa on a closed circuit of its own while it heats and is used, and return ' +
        'it to spillover when the visual effect is wanted. That works, but look at ' +
        'what it implies: its own circuit, its own pump, a heater with its own ' +
        'setpoint and a set of valves somebody has to operate correctly. Which is ' +
        'to say, **almost everything that was meant to be saved**.',
    },
    {
      tipo: 'nota',
      texto:
        'The question that reveals which of the two you are being sold: **how long ' +
        'does the spa take to reach thirty-eight degrees, and what happens to the ' +
        'pool temperature meanwhile?** If the answer is "a few hours" and nobody ' +
        'mentions the pool, what you are being sold is a heater for both shells.',
    },

    { tipo: 'titulo', texto: 'What is never shared, however much you want to' },
    {
      tipo: 'parrafo',
      texto:
        'There is a part of a spa that admits of no technical argument because it ' +
        'has no equivalent in a pool:',
    },
    {
      tipo: 'lista',
      items: [
        '**The jet pump.** Jets call for a lot of flow at little head for short spells, which is the opposite of what a filtration pump does. It is a different pump, with its own circuit, and it does not filter: it moves water from the shell back to the shell.',
        '**The air blower.** What makes the water bubble is injected air, not water. It is a separate piece of plant, noisy, with its own electrical installation.',
        '**The heater setpoint.** Even if the heater were physically the same appliance, it cannot hold two temperatures at once. Either it has two heat exchangers and two controls, or it does one thing at a time.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'It is worth knowing because it dismantles the commonest sales argument. ' +
        'When you are told "the machinery is shared", the machinery being shared ' +
        'is the filtration set, which is only part of a spa’s equipment. The jets ' +
        '— that is, the thing you buy a spa for — are never shared.',
    },

    { tipo: 'titulo', texto: 'What is shared, and where the real saving is' },
    {
      tipo: 'parrafo',
      texto:
        'This is the distinction that settles the subject: **you share the room, ' +
        'not the circuit.** And almost all the saving sought by whoever asks the ' +
        'original question lies precisely in the room.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Element', 'Shared?', 'Why'],
      filas: [
        ['**Equipment room**', '**Yes**', 'One room, sized for both sets of plant. The rule asks for the room to be in exclusive use, not for one room per shell'],
        ['**Electrical supply and panel**', '**Yes**', 'With independent final circuits and residual-current protection per circuit'],
        ['**Equipotential bonding**', '**Yes**', 'It is a single mesh joining all the metal parts of the wet area. Separating it would be the mistake'],
        ['**Chemical storage**', '**Yes**', 'A single enclosure, ventilated and physically separate from the equipment room, as the rule requires'],
        ['**Filling point and drainage point**', '**Yes**', 'With independent valves. The spa is emptied far more often'],
        ['**Control and automation system**', '**Yes**', 'One panel can govern two circuits with two setpoints'],
        ['**Pump, filter and recirculation circuit**', '**No**', 'Numeral 10.1 forbids it for new build, and the three physical reasons argue against it'],
        ['**A heater with a single setpoint**', '**No**', 'Two incompatible temperatures'],
        ['**Jet pump and air blower**', '**No**', 'They do not exist in the pool'],
        ['**Submerged drains and safety devices**', '**No**', 'Each shell its own. See below'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Seen that way, the saving from sharing the room, the supply, the store ' +
        'and the controls is substantial and perfectly lawful. What is not saved ' +
        'is one small pump and one small filter, which is the lesser part of the ' +
        'budget and the part that causes most trouble if left out.',
    },

    { tipo: 'titulo', texto: 'Safety is never shared' },
    {
      tipo: 'parrafo',
      texto:
        'This point stands apart because it is the only one where sharing produces ' +
        'not an inconvenience but a hazard.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Each shell needs its own two submerged drains**, hydraulically ' +
        'balanced, at the deepest part, at least **0.90 m apart**, with their ' +
        'anti-entrapment cover, their vacuum release system and their emergency ' +
        'stop button. The rule requires them per tank, not per installation.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is a hydraulic consequence worth understanding, because it is ' +
        'counter-intuitive. If two shells are connected to a single pump and that ' +
        'pump is sized for the total flow, **the flow passing through each grating ' +
        'depends on where the valves happen to be set**. Half-close the pool ' +
        'branch and the whole of the pump’s flow goes through the spa drains, ' +
        'which are smaller. The velocity at the opening rises, and it rises in ' +
        'precisely the shell where people sit on top of the drain.',
    },
    {
      tipo: 'nota',
      texto:
        'Here it is worth recalling what is already set out in ' +
        '[Ley 1209: what it really requires](/blog/ley-1209-piscinas-copropiedad) ' +
        'and remains true in 2026: **no Colombian rule sets a maximum velocity at ' +
        'the grating opening or a maximum flow per cover.** I checked again for ' +
        'this article. What exists are pipe velocities — 2.4 m/s on the pressure ' +
        'side and 1.8 m/s on suction — and an area rule: the cover must be at ' +
        'least four times the area of the discharge pipe. The technical regulation ' +
        'that was to set the performance of these devices was never issued. That ' +
        'is why the design criterion has to be supplied by the designer, and why a ' +
        'system whose flows change with the position of a valve is a bad system.',
    },

    { tipo: 'titulo', texto: 'The three arrangements, compared' },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Independent circuits', 'Shared room, separate circuits', 'Shared plant and common water'],
      filas: [
        ['**Complies with numeral 10.1 on new build**', 'Yes', 'Yes', '**No**'],
        ['**Two temperatures at once**', 'Yes', 'Yes', 'No'],
        ['**Correct turnover in both**', 'Yes', 'Yes', 'No'],
        ['**Independent chemistry**', 'Yes', 'Yes', 'No'],
        ['**Capital cost**', 'The highest', 'Intermediate and very close to the first', 'The lowest'],
        ['**Monthly cost**', 'The lowest: you heat only what you use', 'The lowest', 'The highest, by a wide margin'],
        ['**What fails**', 'Nothing structural', 'Nothing structural', 'Temperature, chemistry and consumption, all at once'],
      ],
      nota:
        'The second column is the right answer in almost every domestic case: it ' +
        'costs little more than the third and behaves like the first.',
    },

    { tipo: 'titulo', texto: 'When it goes wrong: three recurring cases' },
    {
      tipo: 'lista',
      items: [
        '**The spa that takes half a day to heat up.** This is the classic symptom of a shared heater with common water: the appliance is trying to raise the temperature of the entire pool in order to raise the spa’s. It gets discovered on the first electricity bill.',
        '**The pool that is lukewarm in the morning and smells of chlorine.** The same problem from the other side: dosing is being set for the spa’s demand and the large shell receives all of it.',
        '**The water that goes cold as soon as the pump stops.** When the spa is heated by spillover and the spillover depends on the filtration pump, switching filtration off at night — which is what the rule and common sense both advise — leaves the spa with neither turnover nor heat. People solve it by leaving the pump on twenty-four hours a day, which is exactly the consumption they were trying to avoid.',
      ],
    },

    { tipo: 'titulo', texto: 'What to ask for before signing' },
    {
      tipo: 'lista',
      items: [
        '**The hydraulic schematic of both circuits**, on a single drawing, with the valves labelled. If the spa has no pump of its own drawn on it, it has no independent circuit.',
        '**The turnover calculation for each shell**, with its flow rate. That is two calculations, not one.',
        '**The temperature setpoint of each**, and how both are held at the same time.',
        '**The drain detail for each shell**, with the 0.90 m separation dimensioned on the drawing.',
        '**The sizing of the equipment room** for both sets of plant, with maintenance clearances. It is covered in [the plant room](/blog/cuarto-de-maquinas-de-una-piscina).',
        '**The breakdown of what is shared and what is not**, in writing. It is the table in this article applied to your project.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'If you are offered common water between the two shells on a new build, ' +
        'the objection no longer has to be technical and is therefore easier: ' +
        '**numeral 10.1 requires an independent recirculation system.** You do not ' +
        'have to win the engineering argument in order to win the argument.',
    },

    { tipo: 'titulo', texto: 'Where this comes from' },
    {
      tipo: 'parrafo',
      texto:
        'Whoever leads this line of work in the studio brings fifteen years of ' +
        'designing hydraulic systems and bodies of water, and between 2019 and ' +
        '2022 built pools, spas and waterfalls with the systems behind them — pipe ' +
        'networks, filtration plants, pumps and plant rooms — in the Bahamas, ' +
        'Bermuda, Turks & Caicos and Miami. A pool and a spa sharing a terrace is, ' +
        'in that sort of project, the normal situation and not the exception.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The conclusion from having seen them work and fail is the same one the ' +
        'Colombian rule now states, and it comes down to one line: **share the ' +
        'room, not the water.** Everything else is an argument about how much to ' +
        'save today in order to pay for it every month.',
    },
  ],
  fuentes: [
    {
      url: 'https://www.minenergia.gov.co/documents/15921/Libro-3-Resolucion-40284-23-06-2026.pdf',
      titulo: 'RETIE, Resolución 40284 de 2026, Book 3 — Installations, numeral 3.28.4.6',
    },
  ],
}
