import type { TraduccionPost } from '@/lib/types'
import { CARGAS_EN } from '../diagramas/piscina-en-terraza'

/**
 * Traducción de «Piscina en terraza: carga estructural e impermeabilización».
 *
 * Vocabulario estructural, que esta pieza fija para el pilar: `carga muerta` →
 * dead load, `carga viva` → live load, `lámina de agua` → water sheet cuando
 * cae y **depth of water** cuando se mide en metros —«una lámina de 1,20 m» es
 * «1.20 m of water», no «a 1.20 m sheet»—, `deflexión diferida` → long-term
 * deflection, `masa sísmica` → seismic mass, `solicitación sísmica` → seismic
 * demand, `subpresión` → uplift, `estanqueidad` → watertightness,
 * `prueba de estanqueidad` → watertightness test, `pasatubos` → penetration,
 * `vaso` → pool shell, `losa` → slab, `bien común esencial` → essential common
 * property, `intervención estructural` → structural alteration —que es la
 * modalidad de licencia—, `empuje` en barandas → horizontal thrust.
 *
 * **Los nombres de los Títulos de la NSR-10 se traducen y la sigla no**: «Título
 * B» es «Title B», pero NSR-10, Ley 400 de 1997, Decreto 092 de 2011 y
 * Resolución 929 de 2026 van como son. Los identificadores de tabla y numeral
 * —B.4.2.1-2, C.23, A.10.6.3— son los mismos en los dos idiomas.
 *
 * La cautela sobre A.10.6.3 se traduce **entera y sin endurecerla**: el original
 * dice que la cadena masa → solicitación sísmica → umbral es un razonamiento y
 * no una cita, y en inglés tiene que seguir diciéndolo. Suavizar esa distinción
 * sería exactamente el error que el artículo evita.
 *
 * Separadores: «1.000 kg/m³» es «1,000 kg/m³», «1.030» es «1,030», «1.200 kg»
 * es «1,200 kg», y al revés «9,8 m/s²» es «9.8 m/s²», «11,76 kN/m²» es
 * «11.76 kN/m²», «1,8 kN/m²» es «1.8 kN/m²», «1,20 m» es «1.20 m», «0,40 kN/m»
 * es «0.40 kN/m». El espacio antes del `%` desaparece: «10 %» es «10%».
 */
export const traduccion: TraduccionPost = {
  slug: 'piscina-en-terraza',
  titulo: 'A pool on a terrace: structural load and waterproofing',
  traducido: '2026-09-05',
  resumen:
    'Two problems, in this order: will it hold, and will it leak. NSR-10 does ' +
    'deal with pools — it has a whole chapter — and the terrace load table ' +
    'circulating online has been superseded since 2011.',
  metaDescripcion:
    'What load a pool imposes on an existing slab, what NSR-10 requires, and ' +
    'how to waterproof a terrace that is also a water container.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Putting a pool on a terrace is two separate problems, and the order ' +
        'matters more than it seems: first you have to know **whether the slab ' +
        'will hold it**, and only then does it make sense to talk about **how it ' +
        'gets waterproofed**. Reversing the order is the expensive mistake here, ' +
        'because it produces detailed quotations for work that may turn out to be ' +
        'impossible.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is a third thing, which is the one almost nobody says: the load ' +
        'of a pool is not live load. It is dead load, permanent, and that changes ' +
        'who has to check what.',
    },

    { tipo: 'titulo', texto: 'The arithmetic that ends the conversation' },
    {
      tipo: 'parrafo',
      texto:
        'Let us start with the number, because in half the cases the number ends ' +
        'the discussion with nothing else needed.',
    },
    {
      tipo: 'parrafo',
      texto:
        'NSR-10 gives the density of water in its table of material masses: ' +
        '**fresh water, 1,000 kg/m³** (and sea water, 1,030). And its dead load ' +
        'chapter requires densities to be multiplied by **9.8 m/s²** to obtain ' +
        'weight. One metre of water therefore weighs 9.8 kN/m². A depth of 1.20 m ' +
        'weighs **11.76 kN/m², which is about 1,200 kilogrammes per square metre**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Now, what to compare it with. The minimum design live load NSR-10 ' +
        'requires for the private rooms of a dwelling and their corridors is ' +
        '**1.8 kN/m² (180 kgf/m²)**.',
    },
    {
      tipo: 'diagrama',
      svg: CARGAS_EN,
      titulo: 'What the slab was designed to carry, and what the pool puts on it',
      pie:
        'Loads in kN/m². The first two are NSR-10 minima, tables B.4.2.1-1 and ' +
        'B.4.2.1-2 — the latter as worded by Decreto 092 de 2011. The last two ' +
        'are dead load: water at 1,000 kg/m³ times 9.8 m/s², plus a 0.20 m base ' +
        'slab and its finishes. **The 0.20 m slab is an explicit assumption**, ' +
        'not a figure from the code. Studio drawing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The water alone in a pool 1.20 m deep weighs **six and a half times** the ' +
        'design live load of the bedroom next door. Add the shell and the finishes ' +
        'and it passes nine times. And it is not a load that is sometimes there ' +
        'and sometimes not: it is always there.',
    },
    {
      tipo: 'nota',
      texto:
        'Before going on it is worth demolishing a sentence repeated constantly in ' +
        'the trade: **"NSR-10 says nothing about pools".** It is false. It names ' +
        'them literally in at least four places — the hydrostatic pressure chapter ' +
        'of Title B, the scope of Title C, the list of elements outside the ' +
        'seismic-resisting system in Title A, and several entries in Title K — and ' +
        'it devotes a whole chapter to them. We will get to it below.',
    },

    { tipo: 'titulo', texto: 'The terrace table in circulation has been superseded' },
    {
      tipo: 'parrafo',
      texto:
        'This point deserves a section of its own because it affects anybody who ' +
        'consults the code themselves, and because the error propagates from files ' +
        'that look official.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Live loads for roofs, flat roofs and terraces are in table B.4.2.1-2 of ' +
        'NSR-10. **The Title B PDFs circulating online carry the original 2010 ' +
        'version, which has four rows and settles terraces with a cross-reference.** ' +
        'That table was replaced by **Decreto 092 de 2011**, which says literally ' +
        '"Table B.4.2.1-2 shall read as follows" and substitutes one of six cases.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The difference is not cosmetic: in the table now in force **the load on a ' +
        'terrace depends on what it gives access to and on what the planning ' +
        'permission and the propiedad horizontal by-laws say.**',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Case', 'Situation', 'Minimum live load'],
      filas: [
        ['A', 'Access **wholly limited** to maintenance staff, through a door or hatch kept locked with the key in custody, and the limitation recorded in the by-laws', '1.80 kN/m² (180 kgf/m²)'],
        ['B', 'With access by the public or by users **without restriction**', 'The greatest in the rest of the building'],
        ['C', 'With access **only from a privately owned unit**, per the permission and by-laws', 'That of the space from which access is given'],
        ['D', 'Authorised in the permission and by-laws as a **communal recreational element** or communal roof garden', '**5.00 kN/m² (500 kgf/m²)**'],
        ['E', 'Roof pitched more than 15°, steel or timber structure, with no possibility of greater loads', '0.35 kN/m² (35 kgf/m²)'],
        ['F', 'Roof pitched 15° or less, same, **with no possibility of access at all** other than maintenance', '0.50 kN/m² (50 kgf/m²)'],
      ],
      nota:
        'NSR-10, table B.4.2.1-2 as worded by Decreto 092 de 2011. Abridged: the ' +
        'normative text of each case is longer and should be read in full before ' +
        'being applied.',
    },
    {
      tipo: 'nota',
      texto:
        'And one note to that same table settles a fair number of site arguments ' +
        'on its own. **Note 2** says that tiling, floor finishes, **waterproofing ' +
        'and its screeds to falls**, planting, planters and awnings are **not ' +
        'included within the live load** and must be computed separately as dead ' +
        'load. In other words: the 500 kgf/m² of a communal recreational terrace ' +
        '**do not include** the weight of whatever you put on it. They start after ' +
        'that.',
    },

    { tipo: 'titulo', texto: 'Why it matters that this is dead load' },
    {
      tipo: 'parrafo',
      texto:
        'A live load comes and goes: people walk into a room and out again. A pool ' +
        'does not. Its forty tonnes of water are there on Monday and on Sunday, in ' +
        'summer and in winter, and that has two consequences that often get ' +
        'overlooked.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The first is **long-term deflection**: concrete under permanent load goes ' +
        'on deforming for years. A slab that "holds" can hold and still end up ' +
        'with a sag that breaks the finishes and throws precisely the edge of the ' +
        'pool out of level.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The second is more serious and is the one hardly ever mentioned in ' +
        'quotations: **seismic mass**. The force an earthquake imposes on a ' +
        'building is calculated from its mass. Forty new tonnes on a high slab do ' +
        'not load that slab alone: they load the columns below, the shear walls ' +
        'and the foundations, and they do it amplified by height. **The problem ' +
        'with a pool on a terrace is not only on the terrace.**',
    },
    {
      tipo: 'nota',
      texto:
        'Here one has to be precise about what the code says, because the nuance ' +
        'is real. NSR-10 allows an existing building to be modified without ' +
        'validating the resulting capacity **as long as the modification does not ' +
        'increase the seismic demand on any element by more than 10% nor reduce ' +
        'capacity by more than 10%**; past that threshold, the whole structure has ' +
        'to be reviewed. Now: **that clause is drafted in terms of seismic demand, ' +
        'not gravity load.** That adding mass increases the demand follows from the ' +
        'code’s own method, and with a pool the 10% is passed easily — but it is a ' +
        'line of reasoning, not a quotation, and I put it forward as such.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is also a clause that always applies and is worth knowing because ' +
        'it kills the desk survey: in an existing building, **dead loads must be ' +
        'assessed on the basis of field observation and measurement**, and may ' +
        'never be taken as less than those of Title B. Assuming the weight of what ' +
        'is already built will not do: somebody has to go and measure it.',
    },

    { tipo: 'titulo', texto: 'The chapter almost nobody cites: C.23' },
    {
      tipo: 'parrafo',
      texto:
        'When Title B deals with uplift on buried slabs, it closes the clause with ' +
        'a sentence pointing somewhere else: "The same consideration must be given ' +
        'to the design of tanks and pools. See chapter C.23".',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Chapter C.23** is entitled "Tanks and environmental engineering ' +
        'concrete structures" and its scope says, in these words, that it covers ' +
        '"tanks and watertight compartments such as **pools and basins forming ' +
        'part of the equipment of buildings**". It is not a chapter for treatment ' +
        'works: it is the chapter for your pool.',
    },
    {
      tipo: 'parrafo',
      texto: 'What it requires, and what rarely appears in a pool contract:',
    },
    {
      tipo: 'lista',
      items: [
        '**Minimum concrete strength.** The chapter sets a minimum f′c of **28 MPa** for the structures it covers. That is a good deal more than the default on small works.',
        '**Low permeability.** Title C classifies concrete exposure into categories, and the one for a structure in contact with water where low permeability is required is class **P1**. C.23 itself adds a category for exposure to **corrosive chemicals**, which is exactly what is inside a chlorinated pool.',
        '**The watertightness test goes on the drawings.** The chapter requires drawings and specifications to include the requirements for testing impermeability and watertightness **before the surrounding backfill is placed**. It is not optional good practice: it is compulsory drawing content.',
        '**An empty shell also loads.** It requires uplift on empty tanks to be considered and ballast provided against flotation failure. On a terrace this rarely applies, but it does apply if part of the shell is buried, or with a pool in a basement or semi-basement.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The chapter is based on an American Concrete Institute document, but this ' +
        'has to be said carefully because it too gets cited wrongly: **NSR-10 does ' +
        'not refer you to the American standard, it incorporates it translated and ' +
        'adapted.** What is compulsory in Colombia is Chapter C.23, not the ' +
        'original document.',
    },

    { tipo: 'titulo', texto: 'Who signs what' },
    {
      tipo: 'parrafo',
      texto:
        'This admits of no nuance and should be clear before engaging anyone. The ' +
        'statute governing earthquake-resistant construction allocates the ' +
        'signatures:',
    },
    {
      tipo: 'cita',
      texto:
        'The designer must be a civil engineer in the case of structural designs ' +
        'and geotechnical studies, and an architect or a civil or mechanical ' +
        'engineer in the case of the design of non-structural elements.',
      fuente: 'Ley 400 de 1997, article 26',
    },
    {
      tipo: 'parrafo',
      texto:
        'What is needed **before anything is drawn** is a structural assessment of ' +
        'the existing slab, signed by a civil engineer, answering one of three ' +
        'things: it holds, it holds if strengthened, or it does not hold. An ' +
        'architect cannot sign that, and neither can a pool contractor. If you are ' +
        'offered a start on site without that document, what you are being offered ' +
        'is to carry the whole risk yourself.',
    },
    {
      tipo: 'nota',
      texto:
        'Resolución 929 de 2026 reinforces this from its own side. It requires ' +
        'technical construction drawings with details of the treatment, heating, ' +
        'electrical, hydraulic and gas systems, produced on the architectural and ' +
        'structural drawings, **complying with the earthquake-resistant code and ' +
        'with design calculations**. And it adds that tanks built before the ' +
        'resolution **that have no structural calculations must carry out studies** ' +
        'to comply. If your community has a rooftop pool with no calculations, that ' +
        'sentence applies to you.',
    },

    { tipo: 'titulo', texto: 'If the terrace is in propiedad horizontal' },
    {
      tipo: 'parrafo',
      texto:
        'There is a confusion here that costs litigation. Even where the terrace is ' +
        'for the exclusive use of your flat, **the slab holding it up is essential ' +
        'common property**. The terrace is yours to use; the structure carrying it ' +
        'is not.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That means **two things are needed at once, and they are cumulative**: ' +
        'authorisation from the general meeting, because common property is being ' +
        'altered, and planning permission in the appropriate category, which here ' +
        'is structural alteration. Neither replaces the other, and the sensible ' +
        'order is to ask the general meeting first: paying curaduría fees for ' +
        'something you are then not allowed to do is money lost. The detail is in ' +
        '[altering a flat in propiedad horizontal](/blog/reformar-en-propiedad-horizontal) ' +
        'and in [do I need permission to build a pool?](/blog/necesito-licencia-para-construir-una-piscina).',
    },

    { tipo: 'titulo', texto: 'The second problem: it is a roof and a container at once' },
    {
      tipo: 'parrafo',
      texto:
        'Once the structure is settled, the problem that produces the lawsuits ' +
        'arrives. A pool on a terrace is **two incompatible things at the same ' +
        'point**: a roof, whose job is to keep water out, and a container, whose ' +
        'job is to keep water in.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And it has a cruel feature: **a leak does not show up where it is**. ' +
        'Water escaping the shell does not appear on the terrace; it appears on ' +
        'the ceiling of the flat below, and by then it has travelled through the ' +
        'slab and wherever else it found a way. Diagnosing the origin is a problem ' +
        'in itself, and it is the same problem described in ' +
        '[roof leaks](/blog/filtraciones-en-cubierta).',
    },
    {
      tipo: 'parrafo',
      texto: 'From which follow three design rules:',
    },
    {
      tipo: 'lista',
      items: [
        '**Two independent systems, not one.** The waterproofing of the shell is one thing and that of the roof is another, with its own drainage and its own falls. The shell being watertight does not excuse the roof from being watertight too: the day the shell fails, the second barrier is what decides whether the damage is a repair or a lawsuit.',
        '**Every penetration is a future leak.** The drain, the overflow, the supply, the return and the light all pass through the waterproofing. Each penetration is a point of failure, and the number of them is a design decision: they can be grouped, they can come out through the side rather than the base, and the underwater light can be done without.',
        '**The shell kept separate from the slab.** Wherever possible the shell should bear on the structure without being the structure, with its own waterproof membrane beneath it and a void or drainage layer that collects whatever gets through and takes it to a visible point. A leak that drips where you can see it is maintenance; a leak you cannot see is a demolition.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The test to insist on in the contract, and the only one that proves ' +
        'anything: **the watertightness test, with the shell full, before the ' +
        'finishes go on.** You fill it, mark the level, wait seventy-two hours and ' +
        'measure. Evaporation has to be deducted — with a witness vessel floating ' +
        'in it, filled with the same water — because if it is not deducted, normal ' +
        'evaporation gets mistaken for a leak and the other way round. And as we ' +
        'saw: NSR-10 requires that test **to be on the drawings**.',
    },

    { tipo: 'titulo', texto: 'Two details that get forgotten and cost money' },
    {
      tipo: 'parrafo',
      texto:
        '**Emptying.** A terrace pool has to be emptied at some point, and thirty ' +
        'or forty cubic metres do not fit down the rainwater pipe of a terrace, ' +
        'which was sized for the rain falling on those square metres. A dedicated ' +
        'drainage point is needed, with enough capacity and with a lawful ' +
        'destination: Resolución 929 classes pool water as a **non-domestic ' +
        'discharge**, because it carries chlorine, algaecides and pH correctors, ' +
        'and refers its management to environmental legislation.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Balustrades and glass.** The design load for a balustrade is not where ' +
        'almost everyone looks for it: it is not in Title K but in Title B, which ' +
        'sets a horizontal thrust of **1.00 kN/m** in general and **0.40 kN/m in ' +
        'single-family housing**, applied at the top. And Title K, which does ' +
        'govern the material, requires **safety glass** in spaces where the ' +
        'activity creates high risk, expressly naming pools, wet areas and spas.',
    },

    { tipo: 'titulo', texto: 'What I did not find, and I say so' },
    {
      tipo: 'parrafo',
      texto:
        'Three declarations, because an article that says what it could not ' +
        'confirm is worth more than one that fills the gap:',
    },
    {
      tipo: 'lista',
      items: [
        '**Title J of NSR-10, on fire protection, does not mention pools once.** Nor does Title H, on geotechnical studies. The pool’s connection to Title H arrives through Title B, not through H itself.',
        '**No Colombian rule sets a specific "pool load".** What exists is the density of water, the obligation to compute it as dead load, and Chapter C.23. The load comes from the arithmetic, not from a table.',
        '**Minvivienda does not currently publish the Titles of NSR-10 as downloadable PDFs on its own site.** The official copies I consulted — bearing the Comisión Asesora Permanente cover — are hosted on another government domain. The amending decrees do come from official sources. I note it because anyone wanting to verify this for themselves will run into the same thing.',
      ],
    },

    { tipo: 'titulo', texto: 'When the slab will not take it' },
    {
      tipo: 'parrafo',
      texto:
        'Strengthening is not always the answer. There are four ways out and they ' +
        'are worth looking at in this order, because they run from cheapest to ' +
        'dearest:',
    },
    {
      tipo: 'lista',
      items: [
        '**Reduce the depth of water.** The load is proportional to depth. A pool 0.60 m deep to cool off in weighs half what one of 1.20 m weighs and is still a pool.',
        '**Swap the pool for a spa**, which concentrates less water in total even though it concentrates more per square metre. What that involves is in [a built-in or a portable spa](/blog/jacuzzi-de-obra-o-portatil).',
        '**Its own structure.** Take the weight down to new columns reaching the foundations instead of resting it on the slab. It is expensive and usually invasive for the floors below, but it solves the problem at root.',
        '**Strengthen the existing structure**, which is the option most often proposed and hardly ever the cheapest, because strengthening rarely stops at the slab: it climbs the columns and goes down to the foundations. The general approach is in [structural strengthening and NSR-10](/blog/reforzamiento-estructural-y-nsr-10).',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The sequence that saves money, in one line: **structural assessment ' +
        'first, general meeting authorisation next, permission next, and the ' +
        'design of the pool last.** Almost everybody does it in exactly the ' +
        'reverse order, starting with the render.',
    },

    { tipo: 'titulo', texto: 'Where this comes from' },
    {
      tipo: 'parrafo',
      texto:
        'Whoever leads this line of work in the studio brings fifteen years of ' +
        'designing hydraulic systems and bodies of water — pools, spas and ' +
        'waterfalls with their networks, filtration plants and plant rooms — and ' +
        'the studio does building diagnostics, which is the other half of this ' +
        'article.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The two halves always meet in the same place. The terrace pool that gives ' +
        'trouble is not usually the one that fell down: it is the one dripping onto ' +
        'the flat below, five years later, when nobody has the drawings any more ' +
        'and the contractor no longer exists. Everything that prevents that is ' +
        'decided before the first concrete pour.',
    },
  ],
  fuentes: [
    {
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf',
      titulo: 'NSR-10, Title B — Loads, chapters B.3, B.4 and B.5',
    },
    {
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/3titulo-c-nsr-100.pdf',
      titulo: 'NSR-10, Title C — Structural concrete, chapters C.4 and C.23',
    },
    {
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/titulo-a-nsr-100.pdf',
      titulo: 'NSR-10, Title A — General requirements, chapters A.8 and A.10',
    },
    {
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/11titulo-k-nsr-100.pdf',
      titulo: 'NSR-10, Title K — Complementary requirements',
    },
  ],
}
