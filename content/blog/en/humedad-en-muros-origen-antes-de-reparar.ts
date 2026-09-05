import type { TraduccionPost } from '@/lib/types'
import { ORIGENES_EN } from '../diagramas/humedad'

/**
 * Traducción de «Humedad en muros: distinguir el origen antes de reparar».
 *
 * Es el artículo donde el vocabulario decide si la traducción sirve. Los cinco
 * orígenes tienen nombre propio en inglés y no son descripciones: *rising
 * damp*, *penetrating damp*, *surface condensation*, *interstitial
 * condensation* y *plumbing leak*. La pareja que más se aplana —**filtración**
 * frente a **fuga**— se sostiene con *penetrating damp* para el agua que entra
 * por la envolvente y *leak* reservado para la que sale de una red. Traducir
 * las dos por *leak* borraría la mitad de la tabla de diagnóstico.
 *
 * El diagrama va rotulado en inglés desde `ORIGENES_EN`, sobre la misma
 * geometría que el español.
 *
 * Contexto añadido para el lector de fuera: qué es la propiedad horizontal, y
 * que las tres fuentes de garantía no traen las palabras españolas *humedad*
 * ni *filtración* —que es un hecho sobre el texto español y hay que decirlo
 * así, no como si el inglés fuera el original—.
 */
export const traduccion: TraduccionPost = {
  slug: 'humedad-en-muros-origen-antes-de-reparar',
  titulo: 'Damp in walls: telling the origin apart before you repair',
  traducido: '2026-09-05',
  resumen:
    'Five different kinds of damp produce similar stains and are repaired in ' +
    'five different ways. How they are told apart on site, with the tests ' +
    'that decide it — and why condensation is not cured by waterproofing.',
  metaDescripcion:
    'How to tell rising damp, penetrating damp, condensation and a plumbing ' +
    'leak apart in a damp wall, and why waterproofing is usually the wrong ' +
    'repair.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'A damp stain on a wall looks like any other damp stain on a wall. ' +
        'That resemblance is the whole problem: there are five distinct ' +
        'origins, they are repaired in five distinct ways, and the repair that ' +
        'is right for one is money wasted on the other four.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The default repair — scrape back, apply a waterproofing product, skim ' +
        'and paint — works in one of the five cases. In two of them it does ' +
        'nothing. And in the other two it makes matters worse, because it ' +
        'seals the wall and shuts the water inside.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What follows is how they are told apart, which is the only thing you ' +
        'need to know before hiring anybody.',
    },

    { tipo: 'titulo', texto: 'The five origins' },
    {
      tipo: 'diagrama',
      svg: ORIGENES_EN,
      titulo: 'Where the water gets in, in section',
      pie:
        'Schematic sections, not to scale. What tells one origin from another ' +
        'is not the look of the stain but the path the water takes.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is worth looking at the drawing twice, because the whole argument ' +
        'is in it: **all five look much alike from inside the room, and they ' +
        'are five completely different routes.** One rises, one comes in, two ' +
        'form on the spot without anything having entered, and one escapes ' +
        'from a pipe.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Origin', 'Where it shows', 'Shape', 'When it gets worse'],
      filas: [
        [
          '**Rising damp**',
          'At the base of the wall, working up from the floor',
          'Continuous horizontal band with a **sharp upper edge**. White salts as it dries',
          'Constant. Worse in the dry season, when the water evaporates and leaves the salt behind',
        ],
        [
          '**Penetrating damp through the envelope**',
          'At the height of the defect: beside a window, a balcony, a crack in the façade',
          'Stain with a **darker centre** fading outwards',
          'With rain, above all wind-driven rain. It dries afterwards',
        ],
        [
          '**Surface condensation**',
          'Corners, ceilings, behind furniture, the inner face of façade walls',
          'Spread out and **even**, with no centre. Almost always with **black mould**',
          'At night and in the early hours. In the cold season. With the house shut up',
        ],
        [
          '**Interstitial condensation**',
          'Inside the thickness of the wall. At first **nothing shows**',
          'When it does surface, it is diffuse and wide. The insulation is wet',
          'The same as the surface kind, but it takes months or years to show',
        ],
        [
          '**Plumbing leak**',
          'Near a bathroom, a kitchen, a stack or a wall carrying pipes',
          '**Local** stain, with a more defined outline',
          'It does not change. **It is damp all year round**, rain or no rain',
        ],
      ],
      nota:
        'Studio criteria, drawn from our own work on site. There is no public ' +
        'Colombian source that tabulates these signs: it is ordered ' +
        'experience, not a standard.',
    },
    {
      tipo: 'nota',
      texto:
        'And the warning to keep in mind throughout: **very often two of them ' +
        'are present at once.** Water penetrating a wall cools it, and a cold ' +
        'wall condenses. Repairing the penetration and not ventilating leaves ' +
        'half the problem in place. Finding one origin is no licence to stop ' +
        'looking.',
    },

    { tipo: 'titulo', texto: 'Rising damp: the one that climbs' },
    {
      tipo: 'parrafo',
      texto:
        'Water in the ground rises through the pores of the material, against ' +
        'gravity, until the height it reaches balances what evaporates off the ' +
        'surface. That is why it always stops at a similar height along the ' +
        'whole wall, and why the upper edge is so characteristic: it is a ' +
        'line, not a gradient.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The signature that gives it away is not the water, it is the ' +
        '**salt**. Ground water carries dissolved salts; as it evaporates at ' +
        'the surface, the salt stays behind and crystallises. That produces ' +
        'the white powder, the skim coat that bulges and comes away in plates, ' +
        'and the paint that lifts along the same band however many times it is ' +
        'repainted.',
    },
    {
      tipo: 'nota',
      texto:
        'Here is the most expensive mistake in the whole article: ' +
        '**waterproofing a wall with rising damp from the inside makes it ' +
        'worse.** The water goes on climbing — the seal does not stop it, it ' +
        'only blocks its way out — and looks for another: it rises higher, ' +
        'comes out on the far side, or builds up behind the seal until it ' +
        'bursts it. Salt crystallising under a rigid coat is what makes render ' +
        'come off in whole plates.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The real repair means cutting off the rise — a horizontal barrier at ' +
        'the base of the wall — or draining and ventilating the foot of the ' +
        'wall, or both. It is building work, not a product. And before that ' +
        'you have to settle where the ground water is coming from, which is ' +
        'very often a garden watered against the façade, a pavement with no ' +
        'fall, or a broken downpipe discharging at the foot of the wall.',
    },

    { tipo: 'titulo', texto: 'Penetrating damp: the one that comes in' },
    {
      tipo: 'parrafo',
      texto:
        'It is the only one of the five that correlates with rain, and that ' +
        'correlation is the diagnosis. It appears or intensifies when it ' +
        'rains, and it dries when the rain stops.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two qualifications that throw people off. The first: the rain that ' +
        'gets in is not the heavy rain, it is **the rain that comes with ' +
        'wind**, because the wind drives the water against the façade and ' +
        'pushes it through defects that water falling vertically would never ' +
        'find. A façade can hold for years and then let water in with the ' +
        'first slanting downpour.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The second: **the point of entry is almost never above the stain.** ' +
        'The water comes in through a crack, travels inside the wall or the ' +
        'cavity, and comes out wherever it finds a way. The points it comes in ' +
        'by are almost always the same: junctions of window and wall, sills ' +
        'with no drip groove or falling the wrong way, cracks in the façade, ' +
        'movement joints, and the fixings of balustrades and canopies.',
    },
    {
      tipo: 'parrafo',
      texto:
        'If the water is coming from above rather than from the façade, the ' +
        'problem is a different one and is dealt with separately in ' +
        '[water getting in through the roof](/blog/filtraciones-en-cubierta).',
    },

    { tipo: 'titulo', texto: 'Surface condensation: the one that forms on the spot' },
    {
      tipo: 'parrafo',
      texto:
        'This is the one most often repaired wrongly, because no water is ' +
        'coming in from anywhere. **The water was already in the air of the ' +
        'room.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Warm air holds more vapour than cold air. When that air touches a ' +
        'surface cold enough, the vapour that no longer fits turns liquid on ' +
        'it. It is what happens to a glass of cold water on a hot day, and it ' +
        'is exactly what happens to the inner face of a façade wall on a cold ' +
        'night.',
    },
    {
      tipo: 'parrafo',
      texto:
        'All its signs follow from that. It appears on the coldest ' +
        'surfaces — outside corners, the junction of wall and slab, the wall ' +
        'behind the wardrobe — and it appears at night. It spreads evenly, ' +
        'with no centre. And it almost always brings **black mould**, which is ' +
        'its surest signature: mould needs sustained surface moisture, not ' +
        'liquid water running.',
    },
    {
      tipo: 'parrafo',
      texto: 'Three things produce it, and not one of them is fixed with a product:',
    },
    {
      tipo: 'lista',
      items: [
        '**How much vapour is produced indoors.** Cooking, showering, drying clothes inside, an open tank or an aquarium, and above all how many people live there. A person at rest gives off vapour continuously; a family in a closed flat, a great deal.',
        '**How much ventilation there is.** Vapour only leaves if the air is changed. The sealed window, the bathroom with no extractor fan and the entirely reasonable habit of shutting everything up for security or against the cold are the commonest cause of all.',
        '**How cold the surface is.** A **thermal bridge** — a concrete beam or column crossing the envelope, a lintel, the junction of slab and façade — is always colder than the wall around it, and condenses first. That is why mould tends to draw the structure of the building.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        '**Why waterproofing does not fix it, said plainly:** a waterproofing ' +
        'coat stops water *coming in* through the wall, and here nothing is ' +
        'coming in through the wall. The water is forming on the face you are ' +
        'looking at. Sealing that face changes neither the temperature of the ' +
        'surface nor the amount of vapour in the air, which are the only two ' +
        'variables of the phenomenon. The stain comes back, and sometimes it ' +
        'comes back worse, because the seal stops the wall drying inwards ' +
        'between one episode and the next.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What does work acts on all three causes: **ventilate** — open the ' +
        'windows properly, an extractor fan in bathroom and kitchen, no drying ' +
        'clothes indoors —, **warm or insulate the cold surface** so that it ' +
        'stops being the point where the vapour condenses, and **pull the ' +
        'furniture off the wall** so the air can move. The first of those is ' +
        'free and settles a good share of the cases.',
    },
    {
      tipo: 'nota',
      texto:
        'A geographical criterion, said as a criterion and not as a measured ' +
        'figure: **on the cold Andean highlands condensation is a far more ' +
        'frequent problem than people think, and in a warm humid climate damp ' +
        'usually has another origin.** I publish no relative humidity figures ' +
        'by city because I found no official source I can cite with a date, ' +
        'and I would rather say so than invent them.',
    },

    { tipo: 'titulo', texto: 'Interstitial condensation: the one you cannot see' },
    {
      tipo: 'parrafo',
      texto:
        'It is the same physics, with one difference that makes it dangerous: ' +
        'it happens **inside the thickness of the wall**, not on its face. The ' +
        'vapour crosses the material, meets a plane cold enough inside the ' +
        'section, and condenses there.',
    },
    {
      tipo: 'parrafo',
      texto:
        'At first there is no stain at all. The water builds up where nobody ' +
        'sees it, and does three things: **it wets the insulation**, which ' +
        'once wet stops insulating and chills the section further, so it ' +
        'condenses more still; **it wets any metal components** inside; and it ' +
        'degrades the material from within. By the time something finally ' +
        'shows, it has been at work a long while.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Suspicion is almost always raised by elimination: damp that is wide ' +
        'and diffuse, with no correlation to rain, no rising damp band, no ' +
        'leak, in a wall with insulation or a cavity. And it is confirmed by ' +
        'opening up, which is the uncomfortable part: there is no ' +
        'non-destructive way to see inside a wall with certainty.',
    },
    {
      tipo: 'nota',
      texto:
        'Here it is worth saying something surprising, and it is verified. The ' +
        'Colombian sustainable construction standard — the one setting water ' +
        'and energy savings in new buildings — **requires nothing at all about ' +
        'interstitial condensation or about a vapour barrier.** Neither ' +
        'expression appears in its technical annex. And I found no other ' +
        'Colombian standard that regulates it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The consequence has to be faced: **in Colombia, condensation inside ' +
        'the wall is not regulated.** There is no limit value to demand and no ' +
        'requirement to invoke. Whatever is done about it is the professional ' +
        'judgement of whoever designs, and if it matters to you, you have to ' +
        'ask for it in the contract — because nobody is obliged to deal with ' +
        'it.',
    },

    { tipo: 'titulo', texto: 'Plumbing leak: the one that does not depend on the weather' },
    {
      tipo: 'parrafo',
      texto:
        'It is the easiest to rule out and the one ruled out too late most ' +
        'often. The sign is utterly simple: **it is damp all year round**, ' +
        'rain or no rain, cold or warm. It has no season.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It may be in the drinking water supply, which is under pressure and ' +
        'usually gives a stain that grows steadily, or in the waste pipework, ' +
        'which is not under pressure and shows up intermittently, tied to use ' +
        'of the fitting above. A persistent smell tips the balance a long way ' +
        'towards the second.',
    },
    {
      tipo: 'nota',
      texto:
        'The cheapest test in the whole of building pathology: **close the ' +
        'main stopcock, use no water for a few hours and look at the meter.** ' +
        'If it is still turning, there is a leak in the pressurised supply. It ' +
        'costs nothing and it rules an entire origin in or out. If it is not ' +
        'turning, move on to the waste pipework, which does call for filling ' +
        'and emptying fittings one by one.',
    },

    { tipo: 'titulo', texto: 'The tests that decide' },
    {
      tipo: 'parrafo',
      texto:
        'Everything above can be settled, in the great majority of cases, ' +
        'without instruments. These are the tests in order of cost, and the ' +
        'first one closes the most arguments.',
    },
    {
      tipo: 'lista',
      items: [
        '**The sheet test.** Tape a sheet of clear plastic to the wall over the damp area, sealing all four edges well. Wait a day or two and look at which side the water appeared on. **If it condensed on the face of the plastic looking into the room, it is condensation.** If the water is under the plastic, between plastic and wall, it is coming from inside the wall: rising damp, penetrating damp or a leak. It is the cleanest cut in the whole diagnosis and it costs nothing.',
        '**The calendar test.** Over two weeks, note down when it gets worse: with rain, in the early hours, after a shower, always the same. Correlation with rain points to penetrating damp; with night and cold, to condensation; with nothing at all, to a leak.',
        '**The water meter test.** The one with the stopcock closed. It rules out a pressurised leak in an afternoon.',
        '**The height and the edge.** Measure how far up the damp reaches and look at whether the upper edge is a line or a gradient. A sharp horizontal line at a constant height is rising damp, with hardly any argument left.',
        '**Looking for the salt.** Scrape the white powder gently. Efflorescence goes with water arriving from the floor or the ground, not with condensation.',
        '**Surface and room moisture meters**, if the picture needs sharpening. They measure moisture in the material and in the air, and they let you compare the same wall at several points and at different hours. They help to narrow things down; on their own they do not give the origin.',
        '**Thermography**, for large buildings or when thermal bridges or the run of a leak have to be located. It sees differences of temperature, not water, and it has to be read by somebody who knows how.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'A rule of the trade that saves months: **do not repair until you can ' +
        'explain the complete path of the water**, from where it leaves to ' +
        'where it appears. If the account has a hole in it, the repair will ' +
        'have the same hole.',
    },

    { tipo: 'titulo', texto: 'When damp stops being a matter of finishes' },
    {
      tipo: 'parrafo',
      texto:
        'Sustained damp does not stay in the paint. In reinforced concrete it ' +
        'eventually reaches the reinforcement, and steel as it corrodes takes ' +
        'up more volume than it had, so it bursts the concrete covering it ' +
        'from within. That damage has a recognisable signature: a long ' +
        'straight crack, parallel to the bar, often with a rust stain. It is ' +
        'described, along with the other four, in ' +
        '[cracks in walls](/blog/fisuras-en-muros).',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is the point at which the conversation stops being about stains. ' +
        'If there is spalling as well, reinforcement in view, deformation or ' +
        'chronic damp affecting several flats, what is needed is no longer a ' +
        'builder but a formal diagnosis: ' +
        '[when a building needs a pathology study](/blog/cuando-un-edificio-necesita-un-estudio-patologico) ' +
        'deals with exactly that boundary.',
    },

    { tipo: 'titulo', texto: 'Who is answerable' },
    {
      tipo: 'parrafo',
      texto: 'Two fronts, and it pays not to mix them.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**If the building is new**, the argument is with the builder, and it ' +
        'has a wrinkle almost nobody knows about: none of the three sources of ' +
        'warranty — the Civil Code, the consumer statute and the safe housing ' +
        'statute — contains the words *humedad* or *filtración*. Damp and ' +
        'water ingress are simply not named in them. The Civil Code speaks of ' +
        'the building perishing or threatening ruin; the consumer statute ' +
        'separates the stability of the works, at ten years, from the ' +
        'finishes, at one. The full table, with what can and cannot be argued, ' +
        'is in [water getting in through the ' +
        'roof](/blog/filtraciones-en-cubierta).',
    },
    {
      tipo: 'parrafo',
      texto:
        '**If it is propiedad horizontal** — the Colombian regime under which ' +
        'a building is split into privately owned units and property held in ' +
        'common — the first thing is to know whose wall it is. Article 3 of ' +
        'Ley 675 de 2001 makes essential common property, among other things, ' +
        '"the façades and the roofs or slabs serving as covering at any ' +
        'level". A façade wall that condenses or lets water in **belongs to ' +
        'the community of owners, even though the stain is inside your ' +
        'flat**. An internal partition is yours.',
    },
    {
      tipo: 'nota',
      texto:
        'The case fought over most is the middle one: **damp coming down from ' +
        'the flat above.** There is no general rule there, there is a ' +
        'diagnosis. If it comes from the neighbour’s private pipework, it is ' +
        'the neighbour’s. If it comes from a stack or another common element, ' +
        'it belongs to the community. If it comes from the floor of a terrace ' +
        'held for exclusive use, the cost is split under article 23, and that ' +
        'is explained in [water getting in through the ' +
        'roof](/blog/filtraciones-en-cubierta). Arguing without a diagnosis is ' +
        'arguing without data.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What the general meeting can authorise and what it cannot, and by ' +
        'what majority, is in [altering a flat in propiedad ' +
        'horizontal](/blog/reformar-en-propiedad-horizontal).',
    },

    { tipo: 'titulo', texto: 'What not to do' },
    {
      tipo: 'lista',
      items: [
        '**Painting over it.** It stops nothing, erases the evidence of how far it reached and makes it impossible to know whether it grew.',
        '**Waterproofing a wall with rising damp from the inside.** The water goes on climbing and comes out higher up, or bursts the render from behind.',
        '**Waterproofing a wall that is condensing.** The water is not coming from the wall. It is the most sold repair on this list and the most useless.',
        '**Using anti-damp paint as a diagnosis.** It is a finish, not a remedy. It can be reasonable once the cause is settled; never instead of settling it.',
        '**Sealing the windows and the ventilation grilles to keep the cold out.** It is the fastest way to turn a house into a condensation chamber.',
        '**Repairing the first origin you find and closing the case.** Two of them at once is very common.',
        '**Closing the wall up without drying it.** Wet insulation stays wet, and a wall closed under false pretences shows itself again months later, by then with damage.',
      ],
    },

    { tipo: 'titulo', texto: 'In short' },
    {
      tipo: 'parrafo',
      texto:
        'Before hiring anybody, settle three questions. Does it get worse with ' +
        'rain, at night, or with nothing at all? Is the top edge of the stain ' +
        'a sharp line or a gradient? And which side of the plastic does the ' +
        'water appear on? Those three answers separate most cases.',
    },
    {
      tipo: 'parrafo',
      texto:
        'With rain and at the height of a defect, it is penetrating damp. A ' +
        'low band with a sharp edge and salts, rising damp. At night, even, in ' +
        'corners and with black mould, condensation: ventilation and ' +
        'temperature, not a waterproofing product. With no relation to ' +
        'anything and damp all year, look for a leak and start at the meter.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And if you cannot explain the path of the water from start to finish, ' +
        'do not repair yet. Every blind repair erases evidence and makes the ' +
        'next diagnosis more expensive.',
    },
  ],
}
