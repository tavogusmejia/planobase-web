import type { TraduccionPost } from '@/lib/types'
import { CIRCUITO_EN } from '../diagramas/borde-infinito'

/**
 * Traducción de «Piscina de borde infinito: qué exige de verdad y por qué cuesta
 * el doble».
 *
 * Vocabulario que fija esta pieza, y que el resto del pilar hereda:
 * `borde infinito` → infinity edge, `piscina desbordante` → overflow pool —la
 * familia—, `rebosadero` → overflow channel, `skimmer` → skimmer (la misma
 * palabra en los dos idiomas, y en español se glosa como sumidero de superficie
 * porque allí es un préstamo), `tanque de compensación` → surge tank,
 * `muro de rebose` → weir wall, `lámina de agua` → water sheet cuando cae y
 * water surface cuando se mide en m², `vertedero` → weir, `sondas de nivel` →
 * level probes, `sobreflujo perimetral` → perimeter overflow, `corredor` y
 * `andén` → surround.
 *
 * **`hidráulica inversa` → reverse hydraulics**, y no «reverse flow»: es el
 * nombre que le da la norma a un sistema completo —el 100% del caudal desborda
 * y el fondo solo vacía—, no a una dirección de flujo.
 *
 * La ambigüedad del numeral 10.5 se traduce **conservando el «o»**, porque el
 * artículo entero se sostiene sobre esa conjunción: sustituirla por «whichever
 * is greater» resolvería en inglés lo que la norma deja abierto en español, que
 * es justo lo que la pieza denuncia.
 *
 * Separadores y unidades: «46,5 m²» es «46.5 m²», «0,90 m» es «0.90 m»,
 * «8,00 × 4,00 m» es «8.00 × 4.00 m», «1,50 m» es «1.50 m», «4,80 m³» es
 * «4.80 m³», «1,92 m³» es «1.92 m³», «1,20 m» es «1.20 m», y el espacio antes
 * del `%` desaparece: «10 %» es «10%».
 */
export const traduccion: TraduccionPost = {
  slug: 'piscina-de-borde-infinito',
  titulo: 'Infinity-edge pools: what they really require, and why they cost double',
  traducido: '2026-09-05',
  resumen:
    'It is not a finish on the shell: it is a whole other hydraulic system, and ' +
    'since 2026 it is in the rules. The pump does not draw from the floor, the ' +
    'surge tank is compulsory and has a minimum size — with an ambiguity worth knowing.',
  metaDescripcion:
    'What Colombian rules require of an infinity-edge pool, how the surge tank ' +
    'is sized, and where the extra cost actually comes from.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The infinity edge is sold as a finish and bought as a finish: the same ' +
        'pool, but with one side left open so the water merges into the ' +
        'landscape. Hence the question that always comes — "how much more does it ' +
        'cost?" — and hence the surprise, because the answer is not in the wall.',
    },
    {
      tipo: 'parrafo',
      texto:
        'An infinity-edge pool is not a pool with a different edge. It is a pool ' +
        'with **a different hydraulic system**, and since May 2026 that has ' +
        'stopped being an engineer’s opinion and become something written into a ' +
        'rule.',
    },
    {
      tipo: 'nota',
      texto:
        'The applicable framework, because almost every quotation in circulation ' +
        'cites the previous one: **Resolución 929 de 2026** displaced Resolución ' +
        '1510 de 2011 and is the first Colombian rule to regulate the infinity ' +
        'edge expressly. Its numeral 10.5 is called, literally, "Estanque de ' +
        'piscina con borde infinito" — infinity-edge pool tank.',
    },

    { tipo: 'titulo', texto: 'First, which family we are talking about' },
    {
      tipo: 'parrafo',
      texto:
        'There are two ways of taking dirty water off a pool, and price, ' +
        'maintenance and appearance all follow from which one is used. It is ' +
        'worth getting the names straight before going on.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Type', 'How it takes water off the surface', 'Where the water sits'],
      filas: [
        ['**Skimmer pool**', 'Through **skimmers**: surface outlets set into the wall, with a basket, that draw off the top layer', 'A few centimetres below the coping. You see the "ring" of wet wall'],
        ['**Overflow pool with perimeter channel**', 'The water spills over the whole perimeter into a channel', 'Flush with the surround. This is what you see in hotels'],
        ['**Infinity-edge pool**', 'The water spills over **one or a few sides** and falls into a hidden channel below', 'Flush with the weir wall, which is the one that visually disappears'],
      ],
      nota:
        'The last two are **overflow pools**: that is the family. The infinity ' +
        'edge is a particular case of the overflow pool, not a category of its own.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And here is the first point of law that surprises many people: **an ' +
        'infinity-edge pool has no skimmers.** The resolution requires one skimmer ' +
        'per 46.5 m² of water surface, or a perimeter overflow system for surfaces ' +
        'larger than 312 m², and then closes the numeral with a single sentence: ' +
        '"This does not apply to infinity-edge pool tanks".',
    },

    { tipo: 'titulo', texto: 'The rule that changes everything: the pump does not draw from the floor' },
    {
      tipo: 'parrafo',
      texto:
        'If you take only one idea from this article, take this one. In an ' +
        'ordinary pool the pump draws from the floor and from the skimmers, ' +
        'filters, and returns. In an infinity-edge pool it does not:',
    },
    {
      tipo: 'cita',
      texto:
        'For the recirculation of infinity-edge pool tanks the reverse hydraulics ' +
        'system shall be applied, in which 100% of the pumped flow spills over and ' +
        'the floor drain offtakes are used exclusively for emptying the tank.',
      fuente: 'Resolución 929 de 2026, technical annexe, numeral 10.5',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it slowly, because it inverts the intuition. **All** the flow the ' +
        'pump moves has to leave over the top of the wall. The water falls into ' +
        'the overflow channel, runs by gravity to the surge tank, and it is from ' +
        'there — not from the shell — that the pump takes its water. The floor ' +
        'drains are left as a dead leg that is only opened on the day the pool has ' +
        'to be emptied.',
    },
    {
      tipo: 'diagrama',
      svg: CIRCUITO_EN,
      titulo: 'The hydraulics of an infinity-edge pool',
      pie:
        'Schematic section, not to scale. The proportion between shell and surge ' +
        'tank depends on the volume and the water surface, which is the ' +
        'calculation that decides the project. Studio drawing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Almost every economic consequence of the infinity edge follows from that ' +
        'inversion. The surge tank stops being an accessory and becomes the thing ' +
        'the pump depends on for water. If the tank is undersized, the pump draws ' +
        'air; if it overflows, you are throwing treated, heated water down the ' +
        'drain.',
    },

    { tipo: 'titulo', texto: 'The surge tank, and an ambiguity in the rule' },
    {
      tipo: 'parrafo',
      texto:
        'The surge tank is a second vessel, normally buried next to the plant ' +
        'room, that absorbs everything the shell itself absorbs in an ordinary ' +
        'pool: the water in transit at any moment over the wall and along the ' +
        'channel, the volume bathers displace when they get in, and the water that ' +
        'runs back by gravity when the pump stops.',
    },
    {
      tipo: 'parrafo',
      texto: 'The rule makes it compulsory and gives it a minimum size:',
    },
    {
      tipo: 'cita',
      texto:
        'The perimeter overflow system shall require a surge tank serving as the ' +
        'link between the tank and the pumping equipment, and additionally ' +
        'compensating the water displaced by bathers. Its capacity must be a ' +
        'minimum of 10% of the water volume or 60 L/m2 of water surface.',
      fuente: 'Resolución 929 de 2026, technical annexe, numeral 10.5',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is a drafting problem here worth declaring rather than settling on ' +
        'our own account: **the rule says "or", and does not say which of the two ' +
        'governs when the two do not give the same answer.** And in an ordinary ' +
        'domestic pool they are nowhere near the same.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The arithmetic, for a pool of 8.00 × 4.00 m and 1.50 m average depth, ' +
        'which is 48 m³ of water and 32 m² of water surface:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Criterion in the rule', 'Arithmetic', 'Result'],
      filas: [
        ['10% of the water volume', '48 m³ × 0.10', '**4.80 m³**'],
        ['60 L/m² of water surface', '32 m² × 60 L', '**1.92 m³**'],
      ],
      nota:
        'Two legitimate readings of the same text, two and a half tanks apart. I ' +
        'found nothing in the resolution, neither in the articles nor in the ' +
        'annexe, saying which one prevails.',
    },
    {
      tipo: 'nota',
      texto:
        'What I recommend, and I say it as my own judgement and not as a legal ' +
        'reading: **take the larger of the two.** An oversized tank costs a few ' +
        'cubic metres of excavation and concrete once; an undersized one is paid ' +
        'for with a pump that draws air every time five people get into the pool, ' +
        'and that cannot be corrected without digging again. Ask the designer for ' +
        '**the volume calculation** as well, not just the percentage: the water in ' +
        'transit over the wall depends on the width of the weir and the thickness ' +
        'of the sheet, which are facts about your pool and not about a table.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The tank also needs its own instrumentation, which is the item forgotten ' +
        'straight after the tank itself: **level probes** — high, low and cut-out —, ' +
        '**automatic make-up** with its valve and meter, and a low-level cut-out ' +
        'that stops the pump before it runs dry. Without that cut-out, the first ' +
        'day the make-up fails you lose the mechanical seal.',
    },

    { tipo: 'titulo', texto: 'The weir wall: millimetres, not centimetres' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part no rule governs and the one that decides whether the ' +
        'pool looks right or looks wrong, so I say it as what it is: site ' +
        'judgement.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The visual effect of an infinity edge depends on the water sheet falling ' +
        'at a uniform thickness along the whole length of the wall. And the ' +
        'thickness of that sheet, in a domestic pool, is a few millimetres. Which ' +
        'means that **if the top of the wall is three millimetres out of level, it ' +
        'shows**: a curtain falls at the low point and nothing falls at the high one.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is why an infinity edge is not set out with a water level or ' +
        'finished by eye. It is levelled with an instrument, checked with the ' +
        'shell full before tiling, and the weir finish is executed once the ' +
        'structure has settled. A wall corrected afterwards with mortar produces ' +
        'exactly the defect it was meant to avoid.',
    },
    {
      tipo: 'nota',
      texto:
        'The contractual consequence, which is where this hurts: **the tolerance ' +
        'of the weir wall has to be written into the contract**, with its value ' +
        'and with the moment at which it is checked. Without that, there is no ' +
        'breach to claim when the water falls down one side only, and the answer ' +
        'you will get — "they all come out like that" — cannot be argued with ' +
        'unless you have a reference figure.',
    },

    { tipo: 'titulo', texto: 'The structure: two problems an ordinary pool does not have' },
    {
      tipo: 'parrafo',
      texto:
        'NSR-10 does concern itself with pools, whatever people repeat to the ' +
        'contrary. Title B, dealing with uplift, says expressly that "the same ' +
        'consideration must be given to the design of tanks and pools" and refers ' +
        'to **Chapter C.23**, entitled "Tanks and environmental engineering ' +
        'concrete structures", which covers, in those words, "pools and basins ' +
        'forming part of the equipment of buildings".',
    },
    {
      tipo: 'parrafo',
      texto: 'Two things in that chapter weigh especially on an infinity edge:',
    },
    {
      tipo: 'lista',
      items: [
        '**An empty shell floats.** C.23 requires uplift on empty tanks to be taken into account and ballast to be provided against flotation failure. An infinity edge is usually built on a slope, with the wall high on the outside and groundwater or run-off behind it: this is precisely the situation in which emptying the pool for maintenance is the moment of greatest structural risk, not the least.',
        '**Watertightness is tested, and it goes on the drawings.** The same chapter requires drawings and specifications to include the requirements for testing impermeability and watertightness **before the surrounding backfill is placed**. It is not good practice: it is compulsory drawing content. If your drawing set does not carry it, the set is incomplete.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'To which must be added that the weir wall is, structurally, **a retaining ' +
        'wall with water on one side and air on the other**, and that in most cases ' +
        'the ground falls away just behind it. The definitive geotechnical study, ' +
        'which NSR-10 makes compulsory for every urban and suburban building with ' +
        'no size threshold, is no formality here: it is what says whether the wall ' +
        'needs piles.',
    },
    {
      tipo: 'nota',
      texto:
        'If the infinity edge goes on an existing slab rather than on ground, the ' +
        'problem is a different and a bigger one. It is covered in ' +
        '[a pool on a terrace](/blog/piscina-en-terraza).',
    },

    { tipo: 'titulo', texto: 'The surround that has to be made up elsewhere' },
    {
      tipo: 'parrafo',
      texto:
        'A detail of the rule that changes the layout and that almost nobody ' +
        'allows for when drawing. Perimeter surrounds must be at least **1.20 m ' +
        'wide** measured from the edge of the pool, falling 3% to 5% towards the ' +
        'drains. And the infinity edge, by definition, eats that surround on the ' +
        'side it spills over.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The resolution allows it, but on two conditions: an infinity-edge or ' +
        'falling-overflow design is accepted **on up to 50% of the perimeter**, and ' +
        'the surround area not built **must be made up on the sides where it is ' +
        'built**, mitigating the risk of overbalancing or falling to another level.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On a tight plot that is what decides the size of the pool, and it gets ' +
        'discovered late: the water surface that fits is drawn first, and then the ' +
        'made-up surround the rule asks for on the other side does not fit.',
    },

    { tipo: 'titulo', texto: 'What it costs every month, which is also more' },
    {
      tipo: 'parrafo',
      texto:
        'The extra cost of an infinity edge does not end on handover day. Three ' +
        'running costs go up, and they go up for physical reasons:',
    },
    {
      tipo: 'lista',
      items: [
        '**Make-up water.** A sheet falling as a curtain evaporates far more than a still surface, and the wind carries part of the water outside the channel. Make-up stops being a trickle and becomes a budget line.',
        '**Chemicals.** All the water replaced comes in untreated and has to be treated. More make-up is more chlorine and more pH corrector, in the same proportion.',
        '**Energy.** The system has to move 100% of the flow over the top of the wall, which means overcoming the height of the weir continuously. The pump does not switch off between bathers: if it does, the edge stops existing and the pool looks like any other.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And one that costs no money but costs goodwill: **noise**. A curtain of ' +
        'water falling a metre into a concrete channel makes a sound, and it makes ' +
        'it all night if the pump is timed to run at night. At a country house it ' +
        'is usually pleasant; next to a bedroom, not always. It is solved through ' +
        'the height of the fall and the finish of the channel floor, and it is ' +
        'solved at design stage.',
    },
    {
      tipo: 'nota',
      texto:
        'The capital and monthly figures do not belong here: they are in ' +
        '[what a pool costs](/blog/cuanto-cuesta-una-piscina-en-colombia) and in the article on ' +
        '[maintenance](/blog/mantenimiento-de-piscina-costo-mensual). What this article ' +
        'contributes is where the extra cost comes from, which is the question ' +
        'that lets you argue with a quotation.',
    },

    { tipo: 'titulo', texto: 'Why it costs double: the six items' },
    {
      tipo: 'parrafo',
      texto:
        'Put together, the extra cost of an infinity edge over the same pool with ' +
        'skimmers is made up of this, and of nothing else:',
    },
    {
      tipo: 'lista',
      items: [
        '**The weir wall**, with its crest levelled by instrument and its finish executed as a second stage.',
        '**The overflow channel**: a waterproofed concrete channel, with its fall and its grating, which does not exist in a skimmer pool.',
        '**The surge tank**: a second watertight structure, buried, with its own waterproofing and its own access.',
        '**The level instrumentation**: probes, automatic make-up, low-level cut-out and its controls.',
        '**The structure**, when a high wall on a slope calls for special foundations or ballast against flotation.',
        '**The made-up surround** on the sides that do have one, which may force the water surface to shrink.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'None of the six is a contractor’s whim and five of the six are now in the ' +
        'rules. When somebody offers you an infinity edge "for a little more", the ' +
        'question that settles the conversation is short: **where is the surge tank ' +
        'in your quotation, and what size is it?** If it is not there, what you are ' +
        'being quoted is not an infinity edge: it is a lower wall.',
    },

    { tipo: 'titulo', texto: 'What does not change' },
    {
      tipo: 'parrafo',
      texto:
        'It is worth closing with this because it gets asked often. The infinity ' +
        'edge exempts you from nothing else: the **two submerged drains at least ' +
        '0.90 m apart** still apply, hydraulically balanced, with anti-entrapment ' +
        'cover, vacuum release system and emergency stop button — even though those ' +
        'drains are only used for emptying — and Ley 1209 still applies in full.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In particular, **the infinity edge does not replace the enclosure**. It is ' +
        'a mistake that turns up now and then in handsome projects: because the ' +
        'water merges with the landscape, it gets drawn without a barrier. If the ' +
        'pool is of restricted use — the residential development, the club, the ' +
        'hotel — an enclosure with access control is compulsory and there is no ' +
        'aesthetic exception. What the law asks for and what it does not is in ' +
        '[Ley 1209: what it really requires](/blog/ley-1209-piscinas-copropiedad).',
    },

    { tipo: 'titulo', texto: 'Where this comes from' },
    {
      tipo: 'parrafo',
      texto:
        'Whoever leads this line of work in the studio brings fifteen years of ' +
        'designing hydraulic systems and bodies of water, and between 2019 and ' +
        '2022 built infinity-edge pools, spas and waterfalls with the systems ' +
        'behind them — pipe networks, filtration plants, pumps and plant rooms — in ' +
        'the Bahamas, Bermuda, Turks & Caicos and Miami.',
    },
    {
      tipo: 'parrafo',
      texto:
        'From which comes the warning I will close on. In an infinity edge, what ' +
        'you see is a wall; what decides whether it works is buried behind it. And ' +
        'unlike almost everything else on a building site, **that cannot be added ' +
        'later**.',
    },
  ],
  fuentes: [
    {
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/3titulo-c-nsr-100.pdf',
      titulo: 'NSR-10, Title C — Structural concrete, chapters C.4 and C.23',
    },
    {
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf',
      titulo: 'NSR-10, Title B — Loads, chapter B.5',
    },
    {
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/8titulo-h-nsr-100.pdf',
      titulo: 'NSR-10, Title H — Geotechnical studies',
    },
  ],
}
