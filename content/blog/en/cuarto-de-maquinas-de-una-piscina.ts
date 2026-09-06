import type { TraduccionPost } from '@/lib/types'
import { COTA_EN } from '../diagramas/cuarto-de-maquinas'

/**
 * Traducción de «El cuarto de máquinas: la partida que más se subestima».
 *
 * El vocabulario de piscinas viene fijado por `ley-1209-piscinas-copropiedad` y
 * se respeta entero: `cuarto de máquinas` → plant room, `vaso` → pool shell,
 * `salida de succión` → suction outlet, `cubierta antiatrapamiento` →
 * anti-entrapment cover, `paro manual de la bomba` → manual pump stop,
 * `homologado` → type-approved.
 *
 * Términos que fija esta pieza para el eje técnico del pilar: `bomba en carga`
 * → flooded-suction pump —y «runs flooded» en prosa—, `altura de aspiración` →
 * suction lift, `cebar` → to prime y `descebarse` → to lose prime, `prefiltro`
 * → strainer basket, `tiempo de recirculación` → turnover time, `pérdida de
 * carga` → head loss, `casa de máquinas` → plant house cuando se cita la
 * definición legal, y `cuarto de equipos` → equipment room cuando se cita la
 * Resolución 929, porque el artículo entero se apoya en que **son tres nombres
 * distintos** y aplanarlos en «plant room» destruiría la sección.
 *
 * `estructuras similares` → similar structures, conservando la mayúscula que le
 * da la norma cuando es la categoría legal: es el término que mete a los spas
 * dentro del régimen y aparece en las tablas.
 *
 * Separadores y unidades: «0,90 m» es «0.90 m», «2,4 m/s» es «2.4 m/s», «1,8
 * m/s» es «1.8 m/s», «1,5 bar» es «1.5 bar», «0,5 horas» es «0.5 hours», «0,6
 * m» es «0.6 m» y «100 %» es «100%». `NTU` y `AWG` son las mismas siglas en los
 * dos idiomas.
 */
export const traduccion: TraduccionPost = {
  slug: 'cuarto-de-maquinas-de-una-piscina',
  titulo: 'The plant room: the item most often underestimated',
  traducido: '2026-09-05',
  resumen:
    'It gets priced as builder’s work and it is a machine. Until 2026 no ' +
    'Colombian rule governed it; now one does, and it requires things almost no ' +
    'existing plant room has. Plus the level decision you cannot undo later.',
  metaDescripcion:
    'What Colombian rules require of a pool plant room, what has to fit inside ' +
    'it, and why the pump’s level is decided only once.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'In almost every pool budget that comes to us for review, the plant room ' +
        'appears as a line of builder’s work: so many metres of wall, a slab, ' +
        'a door. And that is how it gets underestimated, because the plant room ' +
        'is not a room. It is where the machine lives that makes a pool a pool ' +
        'and not a large puddle.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is a reason it was treated so lightly for so long, and it is that ' +
        'until a few months ago **no Colombian rule said anything about it at ' +
        'all**. That has changed, and it changed recently.',
    },
    {
      tipo: 'nota',
      texto:
        'First things first, because it affects everything that follows: ' +
        '**Resolución 1510 de 2011, which is what nearly every supplier still ' +
        'quotes, is no longer the applicable framework.** It was displaced by ' +
        '**Resolución 929 de 2026**, of 12 May, which adopted the technical, ' +
        'constructional and safety criteria in a technical annexe. Everything ' +
        'stated here about legal requirements comes from that text.',
    },

    { tipo: 'titulo', texto: 'What it is called, and why the name matters' },
    {
      tipo: 'parrafo',
      texto:
        'Three names for the same thing, and all three are in use: the trade says ' +
        '**cuarto de máquinas**, plant room; the statute says **casa de ' +
        'máquinas**, plant house; and the new resolution says **cuarto de ' +
        'equipos**, equipment room. This is not pedantry: the word your contract ' +
        'uses decides what you are asking for.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is a legal detail almost nobody uses to their advantage. When ' +
        'Ley 1209 defines what a pool is, it does not define the hole with water ' +
        'in it:',
    },
    {
      tipo: 'cita',
      texto:
        'A pool shall be understood as the artificial structure intended to store ' +
        'water for recreational, sporting or therapeutic purposes or for simple ' +
        'bathing. It includes, besides the tank itself, the ancillary ' +
        'installations, such as: changing rooms, lavatories, washbasins, showers, ' +
        'diving boards, diving platforms, plant house, fittings in general and ' +
        'complementary areas.',
      fuente: 'Ley 1209 de 2008, article 4',
    },
    {
      tipo: 'parrafo',
      texto:
        '**The plant house has been part of the pool since 2008, by legal ' +
        'definition.** It is not an annexe, it is not ancillary work and it is not ' +
        'an optional item. A pool construction contract that leaves it out is ' +
        'leaving out part of what the law calls a pool, and it is worth saying so ' +
        'in those terms when it turns up as an "extra" halfway through the job.',
    },

    { tipo: 'titulo', texto: 'The decision you cannot undo: the level' },
    {
      tipo: 'parrafo',
      texto:
        'Before discussing what the rules require, we have to discuss what the ' +
        'rules do not say and what decides more than all the rest: **how high the ' +
        'pump sits relative to the water level.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'A centrifugal pump does not draw air. It can move water, but it cannot ' +
        'fill itself with water if it has to lift that water from below. If the ' +
        'pump sits below the pool’s water level, water enters it under its own ' +
        'weight and the pump **runs flooded**: it always starts, it primes itself, ' +
        'and after a power cut it goes back to work with nobody doing anything. If ' +
        'it sits above, there is a **suction lift** to overcome, which means ' +
        'priming it by hand every time it loses the water in its strainer basket.',
    },
    {
      tipo: 'diagrama',
      svg: COTA_EN,
      titulo: 'The pump’s level relative to the water',
      pie:
        'Schematic, not to scale. The only thing that changes between the two ' +
        'panels is the height of the pump: same shell, same filter, same return. ' +
        'The head available also depends on distance, pipe run and fittings. ' +
        'Studio drawing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'A pump above the water is not a mistake you notice on day one. You notice ' +
        'it a month later, when the mechanical seal starts to weep because it has ' +
        'run dry a few times; and you notice it on the bill, because a cavitating ' +
        'pump moves less water for the same consumption.',
    },
    {
      tipo: 'nota',
      texto:
        '**No Colombian rule requires this.** Neither Resolución 929 nor RETIE ' +
        'says what level the pump goes at. It is engineering judgement, and I put ' +
        'it forward as such. But it is engineering judgement with an awkward ' +
        'feature: **once the plant room floor is poured, the level does not ' +
        'change.** Correcting it means demolishing the room and rebuilding it ' +
        'lower, with everything that implies on ground that already has the pool ' +
        'on it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And it comes with a second rule, this one purely geometric: **every metre ' +
        'of pipe and every bend costs pressure.** The plant room wants to be close ' +
        'to the pool and low. When somebody pushes it to the far end of the plot ' +
        '"so it is neither seen nor heard", they are buying less noise in exchange ' +
        'for a bigger pump, higher consumption every month and a harder prime. It ' +
        'is a legitimate trade, but it should be made knowing what is being traded.',
    },

    { tipo: 'titulo', texto: 'What the rules require, now that they require something' },
    {
      tipo: 'parrafo',
      texto:
        'Numeral 10.7 of Resolución 929 is short and a good deal harder than it ' +
        'looks when skimmed. This is what it asks for, broken out:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Requirement', 'What it means on site'],
      filas: [
        ['**Exclusive use**', 'Not shared with the garden store, the laundry or the box room. Keep things in there and you are in breach'],
        ['**Easy circulation for staff**', 'A person working has to fit, not just the equipment'],
        ['**Dimensions set by equipment, water volume and hydraulic sizing**', 'The size is calculated, not inherited from the space left over'],
        ['**Valve positions signposted**', 'Labelled. Whoever operates it should not have to guess which one shuts what'],
        ['**Pipes marked**', 'Direction of flow, temperature and type of fluid: hot water, clean water, backwash water'],
        ['**Adequate lighting and ventilation**', 'Adequate to its use. The rule gives no figure'],
        ['**Easy access, preferably through a dry area**', 'You do not get in by crossing the wet pool surround'],
        ['**Floors, walls and ceilings easy to clean**', 'No damp, no cracks, no fissures'],
        ['**Hydraulic schematic of the system, inside the room**', 'Hung up in there. This is the one that almost never exists'],
        ['**Floor falling towards the drains**', 'So water does not pond. With gratings or safety covers'],
        ['**Restricted access**', 'Closed to bathers and to anyone not operating the pool'],
        ['**Fire extinguishing device**', 'An extinguisher, inside the room'],
      ],
      nota:
        'Resolución 929 de 2026, technical annexe, numeral 10.7 "Cuarto de ' +
        'equipos".',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two of those twelve deserve separate comment, because they are the ones ' +
        'most often breached and the cheapest to comply with.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**The hydraulic schematic hung in the room.** When a pool is sold, changes ' +
        'building manager, or simply breaks down on a Sunday, what decides whether ' +
        'the problem takes an hour or three days is whether anybody knows what each ' +
        'valve does. That drawing costs what it costs to print; not having it costs ' +
        'every single time something happens.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Exclusive use.** This is the requirement that turns the most widespread ' +
        'practice in the country into a breach: the plant room as a store cupboard. ' +
        'And it is not a regulatory fussiness. A shared room is a room that people ' +
        'walk into without knowing what they are touching, with a pump running and ' +
        'water on the floor.',
    },
    {
      tipo: 'nota',
      texto:
        'Chemicals do **not** go in the plant room. Numeral 10.8 requires for them ' +
        'an exclusive, **physically separate** area or space, ventilated, lit, ' +
        'signposted and with restricted access. Keeping the chlorine next to the ' +
        'electrical panel is what you see in nine pools out of ten and it is ' +
        'exactly what the rule forbids: hypochlorite vapour eats copper contacts, ' +
        'and acid stored beside chlorine is a problem of another order.',
    },

    { tipo: 'titulo', texto: 'What the electrical rules do NOT require, and everybody thinks they do' },
    {
      tipo: 'parrafo',
      texto:
        'Here an absence has to be declared, because it is the source of a fair ' +
        'number of inflated quotations.',
    },
    {
      tipo: 'parrafo',
      texto:
        'I searched Book 3 of the RETIE in force and the pool section of the NTC ' +
        '2050 for a requirement of **forced ventilation, a minimum IP rating or a ' +
        'dedicated electrical panel** for a pool plant room. **There is none.** ' +
        'The only thing the electrical code demands of the room itself is this:',
    },
    {
      tipo: 'cita',
      texto:
        'Electrical equipment shall not be installed in rooms or pits that lack ' +
        'drainage preventing the accumulation of water during normal operation or ' +
        'maintenance of the filters.',
      fuente: 'RETIE, Resolución 40284 de 2026, Book 3, numeral 3.28.4.6, sub-paragraph e',
    },
    {
      tipo: 'nota',
      texto:
        'The confusion has a traceable origin, and it is worth knowing: **RETIE ' +
        'does have requirements for a "cuarto de máquinas" — a socket outlet, a ' +
        'lighting switch operable from the door — but in the numeral on lifts, not ' +
        'the one on pools.** If you are quoted extract fans and IP65 enclosures ' +
        '"because RETIE requires it", ask for the numeral. Whether ventilating the ' +
        'room is a good idea is another matter — it is — and Resolución 929 does ' +
        'ask for ventilation "adequate to its use" without saying how much.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What RETIE does require, and requires strictly, concerns the installation ' +
        'and not the room: equipotential bonding of metal parts with a copper ' +
        'conductor no smaller than **8 AWG**, residual-current protection, and ' +
        'conduit resistant to corrosive environments — **no aluminium** — wherever ' +
        'the environment is corrosive. That is covered in detail in the article on ' +
        '[spas](/blog/jacuzzi-de-obra-o-portatil), where electricity is the central ' +
        'question.',
    },

    { tipo: 'titulo', texto: 'The emergency stop goes outside' },
    {
      tipo: 'parrafo',
      texto:
        'This point straddles two sets of rules and both point the same way, so ' +
        'there is no room for interpretation.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ley 1209 requires the manual pump stop to be in a **visible place, ' +
        'signposted as such and freely accessible**. And RETIE requires the ' +
        'disconnecting means to be readily accessible, **within sight of the ' +
        'equipment** it disconnects, and at least **1.5 m** horizontally from the ' +
        'interior walls of the pool or spa.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Put the two together and the result is awkward for the usual design: the ' +
        'stop cannot be inside the plant room under a padlock, which is where it ' +
        'almost always is. An emergency button you have to go and fetch a key for ' +
        'is not an emergency button.',
    },

    { tipo: 'titulo', texto: 'What has to fit, and how much room each thing needs' },
    {
      tipo: 'parrafo',
      texto:
        'The minimum list for an ordinary domestic pool, in the order the water ' +
        'passes through them:',
    },
    {
      tipo: 'lista',
      items: [
        '**Strainer basket** — the pot that catches leaves and hair before the pump. It is opened daily in season, so its lid needs to be reachable without moving anything.',
        '**Recirculation pump.** With side clearance to take it out without cutting pipework.',
        '**Filter.** This is the piece that governs the size of the room, and it is explained below.',
        '**Multiport valve or valve bank**, with its labelling.',
        '**Pressure gauge** on each filter. The rule expressly requires one as a blockage-control device.',
        '**Flow meter** on the injection pipe, downstream of filtration. Also required.',
        '**Dosing or salt chlorination**, depending on the disinfection system.',
        '**Heating**, if there is any, with its own clearances and its own ventilation if it is gas-fired.',
        '**Electrical panel and controls**, as far as possible from any chemical vapour.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The piece that decides the size of the room is the filter, and not for ' +
        'the space it takes up but for the space it needs **around** it:',
    },
    {
      tipo: 'lista',
      items: [
        '**Headroom above it.** To open the top lid and lift out the diffuser you need, above the filter, something close to the height of the filter itself. A room with the slab just above the equipment is a room where the filter cannot be opened.',
        '**Room to take it out whole.** A sand filter has to be replaced at some point, and the medium is exhausted. If the room was built with the filter inside and the door is sixty centimetres wide, that filter never comes out again.',
        '**Clear front for the valve.** The multiport is operated weekly; it has to be done standing up and without contortions.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The rule that sums all this up and appears in no code: **the plant room ' +
        'is sized by maintenance, not by equipment.** The equipment nearly always ' +
        'fits. What does not fit is the person who has to work on it, and that is ' +
        'the defect that turns a well-built pool into a badly maintained one.',
    },

    { tipo: 'titulo', texto: 'The numbers that size the machine' },
    {
      tipo: 'parrafo',
      texto:
        'The size of pump and filter is not chosen from the volume of the pool but ' +
        'from the **turnover time**: how long the system takes to pass a volume ' +
        'equal to all the water through the filter. Resolución 929 sets it by type ' +
        'of use.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Type of tank', 'Turnover time', 'Times per day', 'Daily circulation'],
      filas: [
        ['Collective-use pool open to the general public', '4 to 6 hours', '4', '16 to 24 h/day'],
        ['Restricted-use pool, not open to the public', '4 to 6 hours', '2 to 4', '8 to 24 h/day'],
        ['Children’s pools or those shallower than 0.6 m', '1 to 2 hours', '12', '12 to 24 h/day'],
        ['**Similar structures** — spas, hot tubs, hydrotherapy', '**0.5 hours**', '**12**', '6 h/day'],
      ],
      nota:
        'Resolución 929 de 2026, technical annexe, numeral 10, table 1. The pool ' +
        'of a residential development is of restricted use. The calculation must ' +
        'be made on 100% of the water volume.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Look at the last row, because it settles an entire article: **a spa calls ' +
        'for half an hour of turnover and a pool calls for four to six.** They are ' +
        'different systems by law, not by taste. What that means when somebody ' +
        'wants both from a single machine is set out in ' +
        '[a pool and a spa together](/blog/piscina-y-jacuzzi-juntos).',
    },
    {
      tipo: 'parrafo',
      texto: 'And the rest of the figures the rule sets for the installation:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What', 'Value', 'Numeral'],
      filas: [
        ['Maximum velocity in the pressure or return line', '2.4 m/s', '10.1'],
        ['Maximum velocity in the suction line', '1.8 m/s', '10.1'],
        ['Maximum pipe diameter', '8 inches', '10.1'],
        ['Pipework tightness test', 'must not exceed 21 PSI (1.5 bar)', '10.1'],
        ['Filtration rate, collective use open to the public', '20 to 40 m³/h/m²', '10.2'],
        ['Filtration rate, restricted use', 'must not exceed 50 m³/h/m²', '10.2'],
        ['Turbidity filtration must guarantee', 'maximum 3 NTU at all times', '10.2'],
        ['Minimum separation between submerged drains', '0.90 m', '7'],
        ['Area of the anti-entrapment cover', 'at least 4 times the area of the discharge pipe', '7'],
      ],
      nota:
        'Resolución 929 de 2026, technical annexe. The numerals are those of the ' +
        'annexe, not of the articles.',
    },
    {
      tipo: 'nota',
      texto:
        'A new requirement that changes handover: the resolution obliges the ' +
        'contractor to carry out **dye recirculation tests before handing over**, ' +
        'with an audiovisual record. If the dye reveals inadequate mixing after ' +
        'twenty minutes, the system has to be adjusted. It is the first time a ' +
        'Colombian rule has required anyone to **demonstrate** that the water ' +
        'circulates, rather than assume it because the pump switches on.',
    },

    { tipo: 'titulo', texto: 'Noise, which is what people actually complain about' },
    {
      tipo: 'parrafo',
      texto:
        'A pool pump runs between four and eight hours a day, and if the system is ' +
        'heated or there is a spa, longer. In a house you hear it; in a community ' +
        'of owners you hear it and somebody complains about it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The temptation is to move the room further away, and we have seen what ' +
        'that costs. The remedies that do not penalise the hydraulics are ' +
        'different ones: sitting the pump on an elastomeric base instead of ' +
        'bolting it rigidly to the slab, putting flexible connectors on suction and ' +
        'discharge so the vibration does not travel down the pipe, and running ' +
        'filtration outside sleeping hours. None is expensive if decided early; ' +
        'all are awkward afterwards.',
    },

    { tipo: 'titulo', texto: 'Ten questions before accepting the room' },
    {
      tipo: 'parrafo',
      texto:
        'They work for reviewing a design on paper and for taking over a finished ' +
        'job. If any is answered no, something needs correcting while it is still ' +
        'cheap:',
    },
    {
      tipo: 'lista',
      items: [
        'Does the pump sit below the water level of the pool?',
        'Does a person working fit, or only the equipment?',
        'Is there headroom above the filter to open it?',
        'Does the filter fit through the door, assembled?',
        'Does the floor fall to a drain, and does the drain have a grating?',
        'Are the chemicals in a physically separate enclosure?',
        'Are the valves labelled and the pipes marked with the direction of flow?',
        'Is the hydraulic schematic of the system hung up?',
        'Is the emergency stop outside, in view, signposted and without a key?',
        'Is there a fire extinguisher inside the room?',
      ],
    },

    { tipo: 'titulo', texto: 'How much this item weighs' },
    {
      tipo: 'parrafo',
      texto:
        'I am not going to give figures here, and not out of caution but out of ' +
        'division of labour: what a pool costs and what it costs each month are ' +
        'dealt with in [what a pool costs](/blog/cuanto-cuesta-una-piscina-en-colombia). What ' +
        'does belong in this article is what the underestimate is made of, because ' +
        'it is always the same:',
    },
    {
      tipo: 'lista',
      items: [
        'The **room** gets priced and not the **machine**: walls and slab, with no equipment and no installation.',
        'It is sized by whatever space was left over and then has to be enlarged, which is building it twice.',
        'The electrical supply run to the room is forgotten, and it is usually the longest line in the project.',
        'The separate chemical enclosure is forgotten, and it is now compulsory.',
        'The floor drain is forgotten, and if it was not cast in it gets solved by breaking out.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The check that saves you the whole argument: **ask for the hydraulic ' +
        'schematic and the turnover calculation before you sign.** If whoever is ' +
        'selling you the pool does not have them, they are not sizing the system; ' +
        'they are picking a pump from the size of the shell, which is how it is ' +
        'done when nothing is calculated.',
    },

    { tipo: 'titulo', texto: 'Why we are writing this' },
    {
      tipo: 'parrafo',
      texto:
        'Whoever leads this line of work in the studio brings fifteen years of ' +
        'designing hydraulic systems and bodies of water: drinking water and waste ' +
        'water plants, pools and water play in Bogotá between 2007 and 2012, and ' +
        'between 2019 and 2022 infinity-edge pools, spas and waterfalls with the ' +
        'systems behind them — pipe networks, filtration plants, pumps and plant ' +
        'rooms — in the Bahamas, Bermuda, Turks & Caicos and Miami.',
    },
    {
      tipo: 'parrafo',
      texto:
        'From that experience comes the only conclusion that really matters here: ' +
        'the pools that give trouble rarely give it because of the shell. They ' +
        'give it because of what is behind that door.',
    },
  ],
  fuentes: [
    {
      url: 'https://www.minenergia.gov.co/documents/15921/Libro-3-Resolucion-40284-23-06-2026.pdf',
      titulo: 'RETIE, Resolución 40284 de 2026, Book 3 — Installations',
    },
  ],
}
