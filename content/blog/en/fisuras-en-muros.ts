import type { TraduccionPost } from '@/lib/types'
import { ANCHOS_EN, APERTURA_EN, PATRONES_EN } from '../diagramas/fisuras'

/**
 * Traducción de «Fisuras en muros: cuáles son peligrosas y cuáles no».
 *
 * La decisión que gobierna todo el lote de patologías se toma aquí: **el
 * inglés no tiene la pareja fisura/grieta.** *Crack* sirve para las dos, así
 * que el corte de 0,2 mm —que es justo lo que distingue este artículo de los
 * cincuenta que repiten el milímetro— se perdería solo con traducir. Se
 * resuelve con *hairline crack* frente a *crack*, y **se declara en el texto**
 * en la sección donde aparece el umbral: el lector inglés tiene que saber que
 * la distinción es del original y no una rareza de la traducción.
 *
 * Los tres diagramas van rotulados en inglés desde `content/blog/diagramas/
 * fisuras.ts`, sobre la misma geometría que el español.
 *
 * Contexto añadido para el lector de fuera, una frase por sección y sin quitar
 * ninguna: qué son el bahareque, el adobe y la tapia; qué es la propiedad
 * horizontal; y qué es la Certificación Técnica de Ocupación. Los nombres de
 * las normas van sin traducir.
 *
 * Las cifras son las mismas cifras, con el separador decimal cambiado: 0,2 mm
 * es 0.2 mm y 2.000 m² es 2,000 m². En un artículo de patologías eso no es
 * tipografía, es seguridad.
 */
export const traduccion: TraduccionPost = {
  slug: 'fisuras-en-muros',
  titulo: 'Cracks in walls: which ones are dangerous and which are not',
  traducido: '2026-09-05',
  resumen:
    'Width is not the only thing that matters, and the threshold half the ' +
    'internet repeats is wrong. How to read a crack with the criteria of the ' +
    'Colombian technical guide: what caused it, when to call somebody, and ' +
    'what looking cannot tell you.',
  metaDescripcion:
    'How to tell a dangerous crack from a harmless one, with the official ' +
    'Colombian damage thresholds for each kind of wall.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Since the earthquake of 10 August, a great many people in Colombia ' +
        'have been looking hard at the walls of their own house for the first ' +
        'time. And the first thing a search turns up is a figure: that below ' +
        'one millimetre nothing is wrong, and above it you should worry.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That figure has nothing behind it. It is not in the Colombian ' +
        'building code, nor in the technical guide that assessors work from, ' +
        'nor in the international literature. And above all: **width is not ' +
        'the first thing you look at**. Two cracks of the same millimetre can ' +
        'be a matter of no importance or a reason not to sleep in the room, ' +
        'depending on where they are, what shape they have and which way they ' +
        'open.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What follows is what the sources do say, and how to read a crack ' +
        'with them in hand.',
    },

    { tipo: 'titulo', texto: 'Hairline crack or crack: the line falls at 0.2 mm' },
    {
      tipo: 'parrafo',
      texto:
        'The [technical guide for inspecting buildings after an ' +
        'earthquake](https://asosismica.org.co/documentacion-evaluacion-post-sismo/), ' +
        'drawn up by the Colombian earthquake engineering association for ' +
        'IDIGER, the risk management institute of Bogotá, uses two different ' +
        'words consistently: *fisura* below 0.2 mm, and *grieta* above it. ' +
        'English normally makes one word do for both, so this article keeps ' +
        'the distinction by calling anything under that line a **hairline ' +
        'crack** and anything over it a **crack** proper.',
    },
    {
      tipo: 'diagrama',
      svg: ANCHOS_EN,
      titulo: 'The three widths that govern the official scale',
      pie: 'The three strokes are comparable to each other, not a true measurement: at 0.2 mm nothing would show on screen. A 0.2 mm crack is the thickness of a hair; at 3 mm the tip of a pencil fits into it.',
    },
    {
      tipo: 'nota',
      texto:
        'Where the loose millimetre comes from: in that same guide, 1.0 mm is ' +
        'the boundary between **slight and moderate damage**. It is a real ' +
        'threshold, but it measures something else — how much damage there ' +
        'is — and not where a crack stops being a hairline. At some point the ' +
        'two criteria were mixed together, and a round number was left ' +
        'repeating itself with no source behind it.',
    },

    { tipo: 'titulo', texto: 'The thresholds change with the material' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part almost nobody tells you, and the part that actually ' +
        'helps: **the same width means different things depending on where it ' +
        'is**. Concrete is more demanding than masonry, and bahareque, adobe ' +
        'and rammed earth — the earth-built systems still common in older ' +
        'Colombian houses — are more forgiving than either.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Damage level', 'Reinforced concrete', 'Masonry', 'Adobe and rammed earth'],
      filas: [
        ['None or very slight', 'under 0.2 mm', 'under 0.2 mm', 'under 0.4 mm'],
        ['Slight', '0.2 to 1.0 mm', '0.2 to 1.0 mm', '0.4 to 2.0 mm'],
        ['Moderate', '1.0 to 2.0 mm', '1.0 to 3.0 mm', '2.0 to 4.0 mm'],
        ['Heavy', 'the reinforcing bar shows', 'more than 3.0 mm', 'more than 4.0 mm'],
        [
          'Severe',
          'concrete crushed, bars buckled',
          'units dislodged, wall out of plumb',
          'displacement out of plane',
        ],
      ],
      nota:
        'Guía Técnica AIS–IDIGER, fourth edition. From "heavy" onwards the ' +
        'scale stops measuring millimetres and starts describing what you ' +
        'see: the bar, the crushing, the wall leaning.',
    },
    {
      tipo: 'nota',
      texto:
        'Notice that the reinforced concrete column **changes criterion** at ' +
        'the strong level: the first three rows measure a width and the fourth ' +
        'looks at whether reinforcement is showing. That leaves a band with no ' +
        'row of its own — a crack wider than 2 mm in concrete, with no ' +
        'reinforcement visible, falls into none of them. Until an engineer ' +
        'says otherwise, treat it as the level above.',
    },
    {
      tipo: 'nota',
      texto:
        'A point of honesty worth declaring: these thresholds are criteria ' +
        'for **assessing damage after an earthquake**. I found no published ' +
        'Colombian criterion on crack width for ordinary building pathology. ' +
        'Using them outside that context is a reasonable extrapolation, but it ' +
        'is an extrapolation.',
    },

    { tipo: 'titulo', texto: 'What caused it: the pattern tells you' },
    {
      tipo: 'parrafo',
      texto:
        'Shape before width. Five causes produce five distinct drawings, and ' +
        'telling them apart is what separates a repair that settles the ' +
        'matter from one you have to do again in two years.',
    },
    {
      tipo: 'diagrama',
      svg: PATRONES_EN,
      titulo: 'Five causes, five crack patterns',
      pie: 'The shape of a crack says more than its width. Studio drawing.',
    },

    { tipo: 'titulo', texto: 'Shrinkage: the commonest and the least serious' },
    {
      tipo: 'parrafo',
      texto:
        'Mortar and concrete shrink as they dry. If something restrains ' +
        'them — and something always does — they crack. These cracks are ' +
        '**vertical, fairly regular, and they appear at the weak points**: ' +
        'halfway up an opening, or at intervals along a long wall.',
    },
    {
      tipo: 'parrafo',
      texto:
        'They show up in the first few weeks and go on opening for a year or ' +
        'two, until they settle down. That is the reassuring fact and it is ' +
        'also the diagnostic test: **shrinkage settles down by itself; ' +
        'settlement does not**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Where the surface carries a fine map pattern, like crocodile skin, ' +
        '[ACI 224.1R](https://www.concrete.org/store/productdetail.aspx?ItemID=224107) ' +
        'puts it down to the surface layer having carried more water than the ' +
        'body beneath. On site that means: water was added to the mix to make ' +
        'it easier to work. It is a defect of execution, not of structure.',
    },

    { tipo: 'titulo', texto: 'Settlement: the stepped crack, and which way it opens' },
    {
      tipo: 'parrafo',
      texto:
        'When part of the foundation drops, the wall tears diagonally along ' +
        'the mortar joints, in steps. It usually starts at a corner and ' +
        'affects two walls at once. And it has one telltale sign: **it ' +
        'crosses the plinth and runs down to the footing**, instead of ' +
        'stopping high up.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The most useful detail in the whole article, and the one almost ' +
        'nobody looks at, is which end of the crack is wider.',
    },
    {
      tipo: 'diagrama',
      svg: APERTURA_EN,
      titulo: 'Which way the crack opens',
      pie: 'The wider end points to the side that moved. Criterion from the IS SP 25 handbook of the Bureau of Indian Standards.',
    },
    {
      tipo: 'lista',
      items: [
        '**Wider at the top and tapering downwards:** the ground is sinking. Shallow foundations, clay drying out, a large tree nearby drawing moisture from the soil.',
        '**Wider at the bottom and tapering upwards:** the ground is rising. Clay taking up water again — the classic case after an old tree is felled — or roots pushing from underneath.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The wall rotates like a very deep beam about the part that is still ' +
        'firm, and the crack opens where the material is left in tension. ' +
        'That is why the wider end always points to the side that moved.',
    },
    {
      tipo: 'nota',
      texto:
        'And a warning the source itself underlines: a settlement crack **is ' +
        'not filled with rigid material** until whatever is producing the ' +
        'movement has been corrected. Otherwise it comes back.',
    },

    { tipo: 'titulo', texto: 'Thermal: horizontal, on the top floor' },
    {
      tipo: 'parrafo',
      texto:
        'The roof slab takes direct sun, warms up far more on top than ' +
        'underneath, arches, and pushes outwards. The wall below loses. The ' +
        'result is a **horizontal crack right at the junction between the wall ' +
        'and the slab**, with an unmistakable sign: from outside it shows ' +
        'above the level of the slab, and from inside below it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two things identify it beyond argument. The first is that **it only ' +
        'happens on the top floor**: lower down, the weight of everything ' +
        'above stops the edge of the slab from lifting. The second is that ' +
        '**it opens and closes with the temperature of the day**. No other ' +
        'cause does that.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The real remedy is not to cover it over: it is to insulate or shade ' +
        'the slab from above. Repaired with rigid mortar, this crack comes ' +
        'back.',
    },

    { tipo: 'titulo', texto: 'Shear: the diagonal X' },
    {
      tipo: 'parrafo',
      texto:
        'This is the earthquake crack. The structure moves sideways and the ' +
        'wall, being stiff, resists until it tears diagonally — and because ' +
        'the movement goes back and forth, both diagonals appear, crossed.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is a distinction here that tells you what failed first: if the ' +
        'crack **steps along the joints**, the mortar was weaker than the ' +
        'brick; if it runs **almost straight, splitting the units**, the ' +
        'brick was weaker than the mortar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In a partition wall that only divides, this is non-structural ' +
        'damage: a nuisance, repairable, and no reason to fear the building ' +
        'will come down. It stops being that when the wall starts to move out ' +
        'of its own plane, or when the cracking carries on into the ' +
        'tie-columns and tie-beams that confine it. That last one is the jump: ' +
        'the crack has gone from the infill to the skeleton.',
    },

    { tipo: 'titulo', texto: 'Corrosion: the line parallel to the bar' },
    {
      tipo: 'parrafo',
      texto:
        'Steel inside concrete is protected while the medium around it stays ' +
        'alkaline. When it stops being alkaline, the steel rusts; rust takes ' +
        'up more volume than the metal did and bursts the concrete from ' +
        'within. The resulting crack is **longitudinal, parallel to the ' +
        'bar**, and it follows an unvarying sequence: first a fine line, then ' +
        'the concrete separates along a plane parallel to the face, and ' +
        'finally the cover falls away and the bar is left in view.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is a field test anyone can carry out that catches the middle ' +
        'stage, before anything falls: **tap the surface with a small ' +
        'hammer**. If it sounds hollow, a separation has already formed ' +
        'underneath.',
    },
    {
      tipo: 'nota',
      texto:
        'Contrary to what is usually repeated, cracks running **transverse** ' +
        'to the bar are not, on their own, a driver of corrosion: where the ' +
        'concrete is dense and the cover sufficient, the process seals ' +
        'itself. ACI says so expressly, and adds that the well-known 0.3 mm ' +
        'durability limit is not justified as a means of controlling ' +
        'corrosion. It is an inherited code criterion, not a law of physics.',
    },

    { tipo: 'titulo', texto: 'The signs that really are alarming' },
    {
      tipo: 'parrafo',
      texto:
        'None of these depends on measuring anything. If any one of them ' +
        'appears, the conversation stops being about appearances.',
    },
    {
      tipo: 'lista',
      items: [
        '**It shows on both faces of the wall.** A crack that goes right through is not in the render.',
        '**It runs down to the footing**, crossing the plinth, instead of stopping high up.',
        '**The two lips are offset.** Run a finger across it, or lay a straightedge on it: if one side stands proud of the other, that is shear and not tension.',
        '**The wall is bowed or out of plumb.** You see it by sighting along it, or with a spirit level.',
        '**The reinforcing bar is visible**, or the concrete is crushed. On the official scale, that is already heavy damage.',
        '**It sounds hollow when tapped.**',
        '**It is in a column, a beam, or the joint between the two.** Connections are the most critical points of the structure.',
        '**Doors and windows have stopped closing, or the floor is out of level.**',
        '**It has grown since you last looked.** A crack that advances is a live crack, and that changes everything.',
      ],
    },

    { tipo: 'titulo', texto: 'How to tell whether it is still live' },
    {
      tipo: 'parrafo',
      texto:
        'What decides whether a crack is at rest or still moving is not time: ' +
        'it is the cause. Shrinkage runs out; active settlement does not.',
    },
    {
      tipo: 'parrafo',
      texto:
        'To find out, you have to measure twice. What an owner can do alone, ' +
        'with no instruments:',
    },
    {
      tipo: 'lista',
      items: [
        'Photograph it with something of known size beside it — a coin, an open tape — and with the date visible.',
        'Mark the two ends with a pencil and write down the day.',
        'Repeat in a month, and again in three. If it has not moved, you know something. If it has, you know more.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'A crack width gauge — a transparent card printed with lines of ' +
        'calibrated width — costs very little and makes the arguable ' +
        'measurement far more precise. What is no longer an owner’s job is ' +
        'chiselling into the render to see whether the crack is in the ' +
        'plaster or in the wall itself.',
    },

    { tipo: 'titulo', texto: 'After the earthquake: what the colour means' },
    {
      tipo: 'parrafo',
      texto:
        'In Cali, the buildings that were inspected were marked with a ' +
        'coloured sticker. It is worth reading carefully what the city itself ' +
        'says they mean, because a good deal of confusion is circulating.',
    },
    {
      tipo: 'lista',
      items: [
        '**Green.** No conditions were found that prevent the building from being lived in. It does not rule out that damage exists or that repairs are needed, and **it is not a specialist technical opinion**.',
        '**Yellow.** There is localised damage or hazard. The building may be used with restrictions, keeping clear of the areas marked, and a specialist technical assessment is needed.',
        '**Red.** There are conditions of serious risk to life. Nobody should go in on their own initiative.',
      ],
    },
    {
      tipo: 'cita',
      texto:
        'The colour red does not necessarily mean demolition. It is not an ' +
        'order to demolish, nor does it in itself determine the future of the ' +
        'property.',
      fuente: 'Alcaldía de Santiago de Cali, August 2026',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two more things worth knowing. The visit **is not a structural ' +
        'verdict or an engineering study**: it is a rapid visual inspection, ' +
        'lasting between fifteen minutes and an hour. And the sticker can only ' +
        'be changed by the city department, through a fresh assessment; ' +
        'taking it off or moving it yourself does not change the state of the ' +
        'building, it only erases the information.',
    },
    {
      tipo: 'nota',
      texto:
        'A technical detail that explains a real discrepancy: Cali uses ' +
        '**three** colours, with red standing for "not fit to live in". The ' +
        'national technical guide uses **four**, with orange for "not fit to ' +
        'live in" and red kept for "danger of collapse". If you compare with ' +
        'technical documents and the colours do not line up, that is why.',
    },

    { tipo: 'titulo', texto: 'Who can sign for what' },
    {
      tipo: 'parrafo',
      texto:
        'It is worth being direct here, even — especially — writing from an ' +
        'architecture studio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The technical guide expressly contemplates the rapid visual ' +
        'inspection being carried out by civil engineers, **architects**, ' +
        'builders or technicians in civil works, preferably with five years of ' +
        'experience in structural design or construction. And even so it ' +
        'recommends that the team be led by a structural engineer, who is the ' +
        'one taking the final decision on classification.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What an assessor at that first stage **cannot** do is written out in ' +
        'full: under no circumstances should they recommend demolition. And ' +
        'the detailed assessment — the one that does produce a verdict — ' +
        'belongs to specialists in structures, geotechnics or building ' +
        'pathology. The same goes for tall buildings, for those in the worst ' +
        'affected areas, for essential facilities and for those with ground ' +
        'problems.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Put briefly: **an architect can look at your crack, tell you what ' +
        'produced it and whether there is cause for concern. The verdict on ' +
        'structural safety is signed by a structural engineer or a building ' +
        'pathology specialist.** Anyone offering you the second without being ' +
        'one is selling you something they cannot deliver.',
    },

    { tipo: 'titulo', texto: 'In propiedad horizontal: who pays' },
    {
      tipo: 'parrafo',
      texto:
        'This is the question that escalates fastest into an argument at the ' +
        'general meeting, and [Ley 675 de ' +
        '2001](https://www.sic.gov.co/sites/default/files/normatividad/Ley_675_2001.pdf), ' +
        'the statute on propiedad horizontal, settles it better than it looks.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Propiedad horizontal is the Colombian regime under which a building ' +
        'is split into privately owned units and property held in common. Its ' +
        'article 3 defines as **essential common property** the land, the ' +
        'foundations, the structure, the façades and the slabs serving as roof ' +
        'at any level. Read that again: **a column, a beam, a structural wall ' +
        'or the façade remain common property even when they sit inside your ' +
        'flat.** A crack there belongs to the community of owners. One in an ' +
        'internal partition, in the skim coat or in the tiling is yours.',
    },
    {
      tipo: 'nota',
      texto:
        'The catch: to know which is which, you have to know whether the wall ' +
        'is structural. In a building of loadbearing masonry the façades — and ' +
        'sometimes the partitions — **are** part of the system. There is no ' +
        'innocent partition. That already calls for technical judgement, and ' +
        'the propiedad horizontal by-laws together with the drawings filed ' +
        'with the building permit are what settle the argument.',
    },
    {
      tipo: 'parrafo',
      texto: 'On the money, three rules that are often misquoted:',
    },
    {
      tipo: 'lista',
      items: [
        'The **contingency fund** comes first. The statute allows an additional extraordinary levy to be approved only once the resources of the fund prove insufficient.',
        '**Earthquake cover over the common property is compulsory**, and the indemnity is earmarked in the first place for reconstruction. It covers common property, not the finishes of your flat.',
        'The **70%** majority that article 46 requires for certain decisions — an extraordinary levy of more than four times the monthly service charge, for instance — is 70% of the building’s total participation coefficients, **not 70% of those present**. And decisions of that kind cannot be taken at a meeting held remotely.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'One qualification that saves a fright: a structural repair **does not ' +
        'require the 70% because it is structural**. It requires it only if ' +
        'the extraordinary levy exceeds that threshold. If it fits inside the ' +
        'ordinary budget or comes out of the contingency fund, a simple ' +
        'majority is enough.',
    },

    { tipo: 'titulo', texto: 'If the building is new: ten years' },
    {
      tipo: 'parrafo',
      texto:
        '[Ley 1796 de ' +
        '2016](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234) ' +
        'obliges the builder or the seller of a new dwelling to cover ' +
        'financial loss for **ten years counted from the Certificación ' +
        'Técnica de Ocupación**, the technical certificate of occupancy — not ' +
        'from the deed, and not from the handover of the keys.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two points that change who it reaches. It governs projects of **five ' +
        'or more dwelling units** intended for third parties. And only those ' +
        'whose permit was filed after the statute came into force, in July ' +
        '2016: a good part of the stock built before that falls outside.',
    },
    {
      tipo: 'nota',
      texto:
        'That certificate is issued by an independent technical supervisor, a ' +
        'role the statute makes compulsory only above 2,000 m². The threshold ' +
        'does not limit the warranty directly: it limits where the document ' +
        'from which the ten years start running is certain to exist.',
    },

    { tipo: 'titulo', texto: 'What not to do' },
    {
      tipo: 'lista',
      items: [
        '**Skimming and painting before you know the cause.** It is the most expensive of them all, because it erases the evidence and stops nothing. The crack comes back, and by then nobody knows how much it grew.',
        '**Filling a live crack with rigid mortar.** It opens again, almost always right beside the filling.',
        '**Injecting without a diagnosis.** Repairing the symptom while the cause is still at work is paying twice.',
        '**Taking it for granted that "the house is settling".** Sometimes it is true, and sometimes it is the comfortable explanation for not looking.',
        '**Taking off or changing the coloured sticker.** Only the authority can do that, and only after a fresh assessment.',
      ],
    },

    { tipo: 'titulo', texto: 'In short' },
    {
      tipo: 'parrafo',
      texto:
        'Look at the shape first, not the width. A regular vertical crack in a ' +
        'new wall is almost always shrinkage and will settle down by itself. A ' +
        'stepped one that runs down to the footing and opens upwards is ' +
        'settlement, and the ground has to be sorted out before the wall is ' +
        'touched. A horizontal one at the junction with the top-floor slab, ' +
        'opening and closing with the sun, is thermal.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And if it is in a column, in a beam or in the joint between the two; ' +
        'if it shows on both faces; if the lips are offset; if the wall is ' +
        'bowed or the bar is showing — at that point there is nothing left to ' +
        'interpret from a screen. Call somebody.',
    },
  ],
}
