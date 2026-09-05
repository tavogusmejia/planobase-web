import type { TraduccionPost } from '@/lib/types'
import { CUBIERTA_EN } from '../diagramas/humedad'

/**
 * Traducción de «Filtraciones en cubierta: por qué aparecen y qué se hace».
 *
 * Tres cosas que había que no traicionar:
 *
 * 1. **La sección que explica por qué no se cita ninguna NTC.** Es lo que
 *    sostiene la credibilidad de la pieza y se traduce con el mismo cuidado que
 *    el resto: el catálogo de ICONTEC no es consultable públicamente, así que
 *    no se pudo leer el título de ninguna norma y no se publica ningún número.
 * 2. **La pareja filtración/fuga.** Aquí *filtración* es agua que entra por la
 *    envolvente y se traduce *water ingress* —o *penetrating damp* cuando es un
 *    muro—; *gotera* es *drip*. *Leak* queda reservado para la fuga de una red,
 *    igual que en el artículo de muros.
 * 3. **El hallazgo jurídico.** El original dice que ninguna de las tres fuentes
 *    de garantía menciona la palabra «filtración», y eso es un hecho sobre el
 *    texto español: la traducción lo dice como tal, citando la palabra en
 *    español, no como si el inglés fuera el original.
 *
 * El diagrama va rotulado en inglés desde `CUBIERTA_EN`, sobre la misma
 * geometría que el español. Vocabulario de cubierta: *upstand* para el remate,
 * *fall* para la pendiente, *ponding* para el empozamiento, *overflow* para el
 * rebosadero y *movement joint* para la junta de dilatación.
 */
export const traduccion: TraduccionPost = {
  slug: 'filtraciones-en-cubierta',
  titulo: 'Water getting in through the roof: why it happens and what to do',
  traducido: '2026-09-05',
  resumen:
    'Of the five points where a roof fails, four are matters of design or of ' +
    'maintenance and only the fifth is the waterproofing. Almost every ' +
    'quotation proposes changing the fifth. That is why the drip comes back.',
  metaDescripcion:
    'Why a flat roof lets water in, the order in which it fails, how the ' +
    'point of entry is found, and who answers for the damage.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Almost every roof repair I have seen fail, failed for the same ' +
        'reason: it was carried out where the stain was. The stain is the end ' +
        'of the water’s journey, not the beginning.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is a bias in the market that makes the problem worse. ' +
        'Whoever quotes for a roof usually sells waterproofing, so the ' +
        'solution proposed is waterproofing. In most of the cases I have seen, ' +
        'the waterproofing was not the problem.',
    },

    { tipo: 'titulo', texto: 'The order in which a roof fails' },
    {
      tipo: 'diagrama',
      svg: CUBIERTA_EN,
      titulo: 'The five points where the water gets in, in order of frequency',
      pie:
        'Schematic section, not to scale. The order is studio judgement from ' +
        'our own work on site, not a published statistic.',
    },
    {
      tipo: 'nota',
      texto:
        'I declare at the outset where that order comes from: **it is trade ' +
        'judgement, not a statistic.** There is no public source in Colombia ' +
        'measuring how often each point of a roof fails. What follows is what ' +
        'recurs on site, said as what it is.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Point', 'Why it fails', 'What gives it away'],
      filas: [
        [
          '**1 · Upstand and junction with the wall**',
          'It is a transition: the horizontal plane turns vertical and the material has to climb and stay anchored at the top',
          'The stain appears at the edge of the ceiling, tight against the wall, not in the middle of the room',
        ],
        [
          '**2 · Fall and ponding**',
          'The fall built is not the fall on the drawing, or the slab deflected and created a reverse fall',
          'A puddle stays after the rain and takes days to go. You can see the ring of dirt',
        ],
        [
          '**3 · Blocked outlet**',
          'Leaves, soil and grit. And there is hardly ever an overflow, so the water rises instead of leaving',
          'The whole roof turns into a swimming pool when it rains hard',
        ],
        [
          '**4 · Movement joint**',
          'The building moves and the joint has to move with it. A rigid seal breaks at the first expansion',
          'The drip follows a long straight line, not a point',
        ],
        [
          '**5 · Later penetration**',
          'Somebody fixed a tank, an aerial, a balustrade or a piece of plant, and drilled through the waterproofing',
          'The stain appears months after some minor work on the terrace',
        ],
        [
          'The sheet or the membrane',
          'It reaches the end of its service life, or it was laid on a dirty, damp or badly primed surface',
          'Blisters, wrinkles, edges lifting, the material brittle when bent',
        ],
      ],
      nota:
        'The first five are matters of design, of execution or of ' +
        'maintenance. Only the last one is a matter of the material.',
    },

    { tipo: 'titulo', texto: '1 · The upstand: where the water gets in behind' },
    {
      tipo: 'parrafo',
      texto:
        'The most fragile point of any flat roof is not in the horizontal ' +
        'plane: it is where that plane ends. The waterproofing has to climb ' +
        'the wall or the parapet far enough, be mechanically fixed at the top ' +
        'and be finished so that water running down the wall cannot get in ' +
        'behind it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The three ways of failing are always the same. The material climbs ' +
        'too little and the water goes over it once ponding starts. It climbs ' +
        'but is not fixed, and lifts in the sun. Or it is fixed and sealed ' +
        'with a product that ages before the rest, and nobody looks at it ' +
        'again.',
    },
    {
      tipo: 'nota',
      texto:
        'The diagnostic sign is a fine one and it works: **if the stain on the ' +
        'ceiling is tight against the wall and follows its line, look at the ' +
        'upstand before anything else.** If it is in the middle of the span, ' +
        'look at the membrane or at a penetration. It is the first fork of the ' +
        'diagnosis and it is settled from below, without going up.',
    },

    { tipo: 'titulo', texto: '2 · Fall: the defect you cannot see until it rains' },
    {
      tipo: 'parrafo',
      texto:
        'A flat roof is not flat. It has to fall towards the outlets, and that ' +
        'fall is built with a screed laid to falls. It is a cheap item, one ' +
        'that gets trimmed when the budget is tight, and the trimming does not ' +
        'show on handover day.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is also a phenomenon that surprises owners and not structural ' +
        'engineers: **the slab deflects over time.** A slab that was fine can ' +
        'develop a reverse fall years later, through creep in the concrete. ' +
        'The design fall was correct, and there is a puddle today all the ' +
        'same.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Why the puddle matters even where the membrane is sound: standing ' +
        'water finds any defect that running water does not, ultraviolet ' +
        'radiation and the wet-dry cycle degrade the material far faster in ' +
        'the ponded area, and the weight of the standing water loads the slab ' +
        'exactly where it was already deflecting.',
    },
    {
      tipo: 'nota',
      texto:
        'On minimum falls I am not going to give you a number, and I want to ' +
        'explain why. The values that circulate are attributed to Colombian ' +
        'technical standards whose text I could not verify — see below. What ' +
        'can be said without inventing anything: **the test is not the number, ' +
        'it is the puddle.** If twenty-four hours after the rain there is ' +
        'still standing water, the fall in that area does not work, whatever ' +
        'the drawing says.',
    },

    { tipo: 'titulo', texto: '3 · Outlets: the maintenance item nobody carries out' },
    {
      tipo: 'parrafo',
      texto:
        'It is the easiest problem to solve and the most frequent. A roof ' +
        'outlet fills with leaves, with soil blown in and with grit from the ' +
        'finish breaking down. Nobody looks at it because it is up on the ' +
        'roof.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What turns a blockage into major damage is the absence of an ' +
        '**overflow**: an emergency outlet through the parapet, higher than ' +
        'the normal one and lower than the top edge. Without it, a blocked ' +
        'outlet turns the roof into a tank, and then two things happen at ' +
        'once. The water rises above the height of the upstand and gets in ' +
        'over the top of the waterproofing, which is the point no membrane ' +
        'protects. And the load of water on the slab grows with every ' +
        'centimetre.',
    },
    {
      tipo: 'nota',
      texto:
        'Trade judgement, said as such: **a roof is checked twice a year and ' +
        'always before the rainy season.** It is an hour of work. I know of no ' +
        'maintenance item with a better ratio between what it costs and what ' +
        'it prevents.',
    },

    { tipo: 'titulo', texto: '4 · Joints: what moves has to be able to move' },
    {
      tipo: 'parrafo',
      texto:
        'A movement joint — an expansion joint — exists because the building ' +
        'changes size with temperature. On the roof the problem is sharper, ' +
        'because it is the surface that swings most: at midday the material ' +
        'can be very much hotter than the air, and in the early hours very ' +
        'much colder.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The practical consequence is the one almost always ignored: **a joint ' +
        'is not sealed, it is detailed.** Filling it with a rigid material ' +
        'guarantees that it will break, almost always right beside the ' +
        'filling. It is the same logic that makes it useless to fill a live ' +
        'crack with rigid mortar, and it is explained in ' +
        '[cracks in walls](/blog/fisuras-en-muros).',
    },
    {
      tipo: 'parrafo',
      texto:
        'How to recognise it from below: water from a joint produces a stain ' +
        'that is **long and straight**, and it can cross several rooms ' +
        'following a line. A round stain is hardly ever a joint.',
    },

    { tipo: 'titulo', texto: '5 · Penetrations: the damage that arrives after the work' },
    {
      tipo: 'parrafo',
      texto:
        'This is the one that makes you angriest, because the roof was fine. ' +
        'Somebody goes up to install a tank, an aerial, a solar water heater, ' +
        'a balustrade or the anchor of a safety line, and drills. Every fixing ' +
        'is a hole through the waterproofing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The clue in time is unmistakable and should always be asked for: if ' +
        'the drip appeared in the months following some minor work on the ' +
        'terrace, do not look anywhere else. And if the building is still ' +
        'under warranty, a later penetration made by a third party is exactly ' +
        'the kind of fact that voids it.',
    },

    { tipo: 'titulo', texto: 'And last of all, the membrane' },
    {
      tipo: 'parrafo',
      texto:
        'When the material really is the problem, it is usually for one of ' +
        'three reasons, and only one of them has to do with its quality.',
    },
    {
      tipo: 'lista',
      items: [
        '**It reached the end of its service life.** Every system has one and none is permanent. A membrane that cracks when bent, a finish that powders underfoot or a surface that has lost its protection against the sun are giving notice.',
        '**It was laid badly.** On a dirty or damp surface, with no primer, or with insufficient laps. It is the commonest cause of a new system failing in its first year, and it is recognised because it fails at the edges and the laps, not in the middle of the bays.',
        '**It is the wrong system for that use.** A roof that is walked on, a terrace with a planter or one carrying plant does not take the same treatment as a roof nobody ever goes up to.',
      ],
    },
    {
      tipo: 'tabla',
      cabeceras: ['System', 'Where it makes sense', 'Where it fails first'],
      filas: [
        [
          'Bituminous torch-on membrane',
          'Flat roofs not walked on, and walked-on roofs with protection over the top',
          'Laps and upstands. The sun degrades it if it is left exposed with no protection',
        ],
        [
          'Single-ply synthetic membrane',
          'Large continuous surfaces',
          'The seams and the junctions with anything that pierces it',
        ],
        [
          'Liquid-applied waterproofing',
          'Awkward geometry, many junctions and penetrations',
          'The thickness: less than specified goes on, and it does not show',
        ],
        [
          'Tiles, on a pitched roof',
          'Steep pitches, where the water does not stop',
          'Insufficient laps, and above all the abutments against walls and the valleys',
        ],
      ],
      nota:
        'Studio judgement. It is not a measured comparison of performance: it ' +
        'is where each one has been seen to fail.',
    },
    {
      tipo: 'nota',
      texto:
        'A fundamental difference between a flat and a pitched roof that ' +
        'clears up many arguments: **on a well-detailed pitched roof the water ' +
        'should not depend on a seal.** It depends on the pitch and on the ' +
        'lap, which are geometry. The seal is the backup. On a flat roof it is ' +
        'the other way round, and that is why it is less forgiving of ' +
        'mistakes.',
    },

    { tipo: 'titulo', texto: 'Where the stain shows is not where the water gets in' },
    {
      tipo: 'parrafo',
      texto:
        'It is the rule that prevents the most useless repairs. Between the ' +
        'point of entry and the point where it drips, the water runs across ' +
        'the top face of the slab, finds a crack or a hole left for services, ' +
        'and comes down wherever it can. That journey can be several metres ' +
        'long and is hardly ever vertical.',
    },
    {
      tipo: 'parrafo',
      texto: 'How the point of entry is narrowed down, in order of cost:',
    },
    {
      tipo: 'lista',
      items: [
        '**Ask when it appears.** If it appears with any rain at all, it is direct entry. If only with long, windy rain, suspect the upstand or the façade. If it appears without rain, it is not the roof and you have to look for a leak or for condensation.',
        '**Look at the shape of the stain.** Tight against the wall, upstand. Long and straight, joint. Round and isolated, membrane or penetration. Diffuse and spread out, ponding.',
        '**Go up and look after the rain**, not before. The puddle that stays is the evidence. With no recent rain, the area is wetted with a hose sector by sector and you wait.',
        '**A flood test, sector by sector.** The outlets are plugged, a bounded area is flooded and it is watched from below. It is slow, it is the one that really proves the point, and it has to be done with judgement: a slab loaded with water is a loaded slab.',
        '**Thermography**, when the building is large or access is poor. It detects differences of temperature caused by trapped moisture. It does not see water: it sees the thermal effect of water, and it has to be read properly.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'If the roof has insulation between the slab and the waterproofing, ' +
        'the problem changes in kind. **Wet insulation carries the water ' +
        'sideways and holds it**, so the point of entry can be a very long way ' +
        'from the drip and the roof goes on dripping weeks after the last ' +
        'rain. In those cases, patching is throwing money away: you have to ' +
        'open up and find how far the water reached.',
    },

    { tipo: 'titulo', texto: 'Why there is no standard to cite here' },
    {
      tipo: 'parrafo',
      texto:
        'You will have noticed that so far I have cited no technical ' +
        'standard. It is not an oversight and I think it deserves an ' +
        'explanation, because it is useful information in itself.',
    },
    {
      tipo: 'parrafo',
      texto:
        'I looked for which Colombian technical standard really applies to ' +
        'roof waterproofing. **I could not read the title of a single one word ' +
        'for word.** The catalogue of the body that issues them cannot be ' +
        'consulted publicly and directly, and the numbers circulating on the ' +
        'internet come from third-party lists that cannot be checked against ' +
        'the source.',
    },
    {
      tipo: 'nota',
      texto:
        'So I cite none of them. **Publishing the number of a standard I have ' +
        'not read would be exactly the error this blog sets out to correct in ' +
        'others.** Nor do I assert anything about what the titles of the ' +
        'seismic building code say on loads from ponded water: it is a ' +
        'document whose technical annex I could not open, and assuming what it ' +
        'says would be inventing it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What can be asserted, and is what governs in practice: **what rules ' +
        'on a roof is the technical specification of the manufacturer of the ' +
        'system and the written warranty of whoever lays it.** That is where ' +
        'the thickness, the primer, the surface preparation, the lap, the ' +
        'height of the upstand and the conditions for application are set out. ' +
        'And that is where you should press, because it is what can be read, ' +
        'compared and claimed against.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Three things worth asking for in writing before you sign anything: ' +
        'the technical data sheet for the complete system — not for the ' +
        'individual product —, the warranty with its term and its exclusions, ' +
        'and a photographic record of the surface preparation. The third is ' +
        'the one nobody asks for and the one that decides whether the system ' +
        'will last.',
    },

    { tipo: 'titulo', texto: 'If the building is new: what the warranty covers and what it does not' },
    {
      tipo: 'parrafo',
      texto:
        'Here there is a finding that changes the conversation with the ' +
        'builder, and it comes from reading the three texts in full instead of ' +
        'repeating what is said about them: **none of the three sources of ' +
        'warranty uses the word *filtración*.** Water ingress is not named in ' +
        'any of them.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Source', 'What exactly it covers', 'How long it lasts'],
      filas: [
        [
          '**Código Civil, art. 2060 num. 3**',
          'That the building **perishes or threatens ruin**, in whole or in part, through a defect of the construction, of the ground or of the materials',
          'Ten years from handover',
        ],
        [
          '**Ley 1480 de 2011, art. 8**',
          '**The stability of the works.** And separately, the **finishes**',
          'Ten years for stability; **one year** for the finishes',
        ],
        [
          '**Ley 1796 de 2016, art. 8**',
          'Financial loss, where one of the situations in num. 3 of art. 2060 of the Código Civil arises',
          'Ten years from the Certificación Técnica de Ocupación',
        ],
      ],
      nota:
        'Ley 1796 did not amend article 2060: it refers to it. And it applies ' +
        'to projects of five or more dwelling units intended for third ' +
        'parties.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read that slowly, because the consequence is uncomfortable. **A drip ' +
        'is not, on its own, the building perishing or threatening ruin.** It ' +
        'may become that if the water corrodes the reinforcement of the slab ' +
        'over years, or if it compromises stability, but that has to be ' +
        'proved, not assumed. And if it is treated as a finish, the term is ' +
        'not ten years: it is one.',
    },
    {
      tipo: 'nota',
      texto:
        'I say what can be sustained and no more: **whether water getting in ' +
        'through a roof is or is not covered by the ten-year warranty is not ' +
        'answered by reading the statute.** The text does not settle the ' +
        'ordinary case. It depends on what is proved about the damage and on ' +
        'how a judge characterises it. Anyone assuring you otherwise, in one ' +
        'direction or the other, is going beyond what the texts say.',
    },
    {
      tipo: 'parrafo',
      texto:
        'One detail of the Código Civil that is categorical and that hardly ' +
        'anybody invokes: the receipt the owner gives on completion of the ' +
        'works **means only that they approve them as outwardly conforming to ' +
        'the plan and to the rules of the art, and it does not release the ' +
        'builder** from that liability. Having signed the handover closes ' +
        'nothing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'How the Certificación Técnica de Ocupación works, from when the ten ' +
        'years run and which projects it reaches, is explained in ' +
        '[cracks in walls](/blog/fisuras-en-muros). I do not repeat it here.',
    },
    {
      tipo: 'nota',
      texto:
        'The practical part, in any case, is the same: **document it from the ' +
        'first day.** Date of appearance, photographs with a reference of ' +
        'place, correlation with the rain, and a written claim with proof of ' +
        'receipt. Without that, the legal argument is theoretical. And before ' +
        'arguing, you need a diagnosis that says which of the five points ' +
        'failed, which is what ' +
        '[when a building needs a pathology study](/blog/cuando-un-edificio-necesita-un-estudio-patologico) ' +
        'is about.',
    },

    { tipo: 'titulo', texto: 'In propiedad horizontal: who pays for the drip' },
    {
      tipo: 'parrafo',
      texto:
        'The roof is **essential common property**. Article 3 of Ley 675 de ' +
        '2001 — the statute governing propiedad horizontal, the Colombian ' +
        'regime under which a building is split into privately owned units and ' +
        'property held in common — says so in those words: essential common ' +
        'property includes, among other things, "the façades and the roofs or ' +
        'slabs serving as covering at any level". **Even though the damage ' +
        'shows inside your flat, the origin belongs to the community of ' +
        'owners.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'But there is a second regime that is hardly ever applied properly, ' +
        'and it covers precisely where most of the drips are: the terrace.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Article 22 of the same statute creates **common property for ' +
        'exclusive use**, and expressly names "terraces, roofs, internal ' +
        'courtyards and setbacks" as assignable exclusively to the owner who ' +
        'by position can enjoy them. They remain common property. What changes ' +
        'is who uses them, and with that, who pays for what.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What the expense is', 'Who bears it'],
      filas: [
        [
          'Deterioration caused **by the fault** of whoever holds the exclusive use',
          'Whoever holds the exclusive use',
        ],
        [
          '**Running repairs** for the wear of legitimate use and the passage of time',
          'Whoever holds the exclusive use',
        ],
        [
          '**Necessary improvements** that do not fall under the above',
          '**Common charges** of the community',
        ],
        [
          'Damage for which the builder must answer',
          'The builder',
        ],
      ],
      nota: 'Ley 675 de 2001, art. 23, numeral 3 and paragraph 1.',
    },
    {
      tipo: 'nota',
      texto:
        'That is where the real fight is, and now it has a name: **the ' +
        'argument is not "common or private", it is "running repair or ' +
        'necessary improvement".** Resealing a joint that degraded in the sun ' +
        'after years of ordinary use, and rebuilding waterproofing that never ' +
        'had a fall, are not the same category, even though both look ' +
        'identical from the flat below. A serious technical diagnosis is what ' +
        'settles that argument, not the general meeting.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What the general meeting authorises, by what majorities, and what can ' +
        'be done without asking anybody, is in [altering a flat in propiedad ' +
        'horizontal](/blog/reformar-en-propiedad-horizontal).',
    },

    { tipo: 'titulo', texto: 'What not to do' },
    {
      tipo: 'lista',
      items: [
        '**Waterproofing over the top without a diagnosis.** It is the most sold repair and the one that most often fails. If the problem was the fall, the outlet or the upstand, the new layer changes nothing and covers the evidence as well.',
        '**Repairing only where it drips.** The point of entry is almost never above the stain.',
        '**Sealing a movement joint with a rigid material.** It is going to break. The joint has to go on moving.',
        '**Applying on a damp surface.** It is the number one cause of blisters, and the material is condemned from the first day.',
        '**Changing the system without drying the wet insulation.** The trapped water is still there and still coming out.',
        '**Fixing anything to the roof without detailing the penetration.** Every hole is a future entry point if it is not properly finished.',
        '**Accepting a verbal warranty.** With no written term and no written exclusions, there is no warranty.',
      ],
    },

    { tipo: 'titulo', texto: 'In short' },
    {
      tipo: 'parrafo',
      texto:
        'Before asking for a waterproofing quotation, go up after a rain and ' +
        'look at three things: whether standing water remains, whether the ' +
        'outlets are clear and whether there is an overflow, and how the ' +
        'junction with the walls and parapets is finished. Those three answers ' +
        'explain most of the water ingress I have seen.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And look at the shape of the stain from below before going up. Tight ' +
        'against the wall is the upstand. Long and straight is a joint. With ' +
        'no rain it is not the roof, and then the problem is another one: that ' +
        'is what [damp in walls: telling the origin apart before you ' +
        'repair](/blog/humedad-en-muros-origen-antes-de-reparar) deals with.',
    },
  ],
}
