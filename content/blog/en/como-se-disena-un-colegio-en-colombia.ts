import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Cómo se diseña un colegio en Colombia».
 *
 * Vocabulario del pilar educativo que esta pieza fija para el corpus:
 * `establecimiento educativo` → school (educational establishment cuando hace
 * falta la precisión jurídica), `sede` → school site, `ambiente pedagógico` →
 * learning space, `ambiente pedagógico complementario` → support space,
 * `programa arquitectónico` → schedule of accommodation, que es el término
 * británico exacto y evita el falso amigo `architectural programme`. `PEI` se
 * conserva y se glosa —es un documento definido por la Ley 115 de 1994—, igual
 * que `POT`, `RETIE` y `NSR`. `matrícula` → enrolment (ortografía británica),
 * `juego sanitario` → sanitary set, glosado, porque es una unidad de cálculo
 * de la norma y no un objeto con nombre inglés. `área libre curricular` →
 * curricular open space, `cancha multiuso` → multi-use court, `huerta escolar`
 * → school garden.
 *
 * Los nombres de norma no se traducen: NTC 4595, NTC 6705, GTC 223, NTC 4596,
 * NSR-10, Ley 115 de 1994, Decreto 974 de 2026.
 *
 * Cifras: separadores invertidos —1,65 → 1.65 y 1.000 → 1,000— y el `%` pegado.
 * Las fracciones 1/3, 1/4 y 1/5 y las proporciones 1:1 y 1:4 no llevan
 * separador y pasan tal cual.
 *
 * **La sección final se traduce entera y sin suavizar**, incluida la
 * declaración sobre la NTC 4596 y sobre la obligatoriedad no verificada. Es lo
 * que sostiene la pieza, y un lector extranjero es precisamente quien no puede
 * distinguir por su cuenta lo verificado de lo repetido.
 */
export const traduccion: TraduccionPost = {
  slug: 'como-se-disena-un-colegio-en-colombia',
  titulo: 'How a school is designed in Colombia',
  traducido: '2026-09-06',
  resumen:
    'A school is not sized in square metres: it is sized in learning spaces, ' +
    'and the area is what comes out. What the Colombian school standard ' +
    'requires of the site, the daylight, the toilets and the escape routes.',
  metaDescripcion:
    'How a school is designed in Colombia: schedule of accommodation, ' +
    'NTC 4595, site requirements, daylight, accessibility and sanitary sets.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The brief almost always arrives the same way: "we have the site and ' +
        'we need a school of so many square metres." Both figures are usually ' +
        'wrong, and in that order.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Designing a school in Colombia is not like designing a building to a ' +
        'target area. It is like solving a schedule of accommodation: **first ' +
        'you establish which learning spaces are needed and for how many ' +
        'people, and only then does the area appear.** Reverse that order and ' +
        'you end up with a school that meets the floor area and fails the ' +
        'standard.',
    },

    { tipo: 'titulo', texto: 'A school is not sized in square metres' },
    {
      tipo: 'parrafo',
      texto:
        'The Colombian school standard does not give you one area per student ' +
        'and leave it there. It gives **indices by type of learning space**, ' +
        'and the schedule is built by adding them up: so many groups of so ' +
        'many students, so many laboratories, a resource centre, a ' +
        'multi-purpose space, and the open space each of those is entitled to. ' +
        'The total area is the output of that calculation, never the input.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the calculation does not begin in architecture. It begins in the ' +
        '**Proyecto Educativo Institucional (PEI)** — the institutional ' +
        'education plan, or the community equivalent in the territories where ' +
        'that applies — which is the document in which the school states what ' +
        'it teaches, with what emphasis, and how it organises its groups. ' +
        'Ley 115 de 1994 requires every school to have one. The technical ' +
        'standard takes it as the starting point of the schedule of ' +
        'accommodation, together with the demand for places in the area.',
    },
    {
      tipo: 'nota',
      texto:
        'The real order of a public school project is this: **infrastructure ' +
        'plan → schedule of accommodation → site → design.** The plan ' +
        'diagnoses what the territory has and what it lacks; the schedule says ' +
        'which spaces and how many; the site is then assessed against that ' +
        'schedule. Buying the site first is the most expensive decision taken ' +
        'in these projects, and it is nearly always the one taken first.',
    },

    { tipo: 'titulo', texto: 'Which standard governs, and how far' },
    {
      tipo: 'parrafo',
      texto:
        'The reference is **NTC 4595, "Planeamiento y diseño para ' +
        'instalaciones y ambientes escolares"** — planning and design for ' +
        'school facilities and learning spaces — issued by ICONTEC. The ' +
        'Ministry of Education publishes it on its portal, alongside NTC 6705, ' +
        'which governs how a school infrastructure plan is drawn up, and ' +
        'GTC 223, the guide for doing so.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The edition in force is the fifth, ratified in November 2025, and it ' +
        'brought substantive changes over the previous one. What exactly ' +
        'changed is set out in [another article on this blog]' +
        '(/blog/ntc-4595-2025-que-cambio); here I explain how you design with ' +
        'the standard as it stands today.',
    },
    {
      tipo: 'nota',
      texto:
        'One distinction is worth being clear about, because in practice it is ' +
        'skipped: **an ICONTEC technical standard is not a regulation.** It ' +
        'becomes binding by reference — because another norm invokes it, or ' +
        'because the tender documents and the technical annex of the process ' +
        'incorporate it as a specification, which is the usual route in public ' +
        'school works. One of those references is verified and recent: ' +
        'Decreto 1075 de 2015, in the article added by the August 2026 decree ' +
        'on boarding facilities, requires the provisions of NTC 4595 on ' +
        'learning spaces to be followed. **I did not find a norm making it ' +
        'binding on every school project without exception, and so I do not ' +
        'claim that.** In practice it makes no difference: if the tender ' +
        'documents require it, it is required.',
    },

    { tipo: 'titulo', texto: 'The six types of learning space' },
    {
      tipo: 'parrafo',
      texto:
        'This is the piece to understand before drawing anything. The ' +
        'standard does not classify spaces by their name — classroom, ' +
        'library, workshop — but **by the activity they allow and by how many ' +
        'people fit while doing it**. Six types come out of that, and from ' +
        'them come the areas, the services and the environmental conditions of ' +
        'each. They are in clause 5.3.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Type', 'What activity it allows', 'Examples'],
      filas: [
        ['**A**', 'Individual work, small-group work and whole-group work, frontal or face to face. No complex environmental demands', 'The classroom'],
        ['**B**', 'Enquiry and individual or small-group work, with the emphasis on excluding acoustic interference', 'Library, resource centre, foreign-language room, special-education support'],
        ['**C**', 'Experimental practice with intensive use of equipment, high safety and cleaning demands', 'Laboratories, ICT room, art and technology workshops'],
        ['**D**', 'Sport. A great deal of area, ventilation and storage', 'Multi-use court and sports fields'],
        ['**E**', 'Circulation and escape, with extension activities on top', 'Corridors, stairs, ramps, lobbies'],
        ['**F**', 'Assembly of large numbers with special acoustic and visual comfort conditions', 'Multi-purpose hall, theatre, music room, and their open spaces'],
      ],
      nota:
        'Classification written here from the descriptions in clauses 5.3.1 ' +
        'to 5.3.6 of NTC 4595:2025. The areas and technical requirements of ' +
        'each type are in those same clauses.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The indices give you the scale of the thing. A primary and secondary ' +
        'classroom starts at **1.65 m² per student** and a pre-school one at ' +
        '**2.00 m²**, against the reference occupancies of clause 5.3.1. The ' +
        'resource centre is calculated at **2.4 m² per student** over a ' +
        'percentage of the roll, not over the whole roll. And every school ' +
        'must have at least one multi-purpose space able to seat, frontally, ' +
        '**a third of its students** at peak occupancy, with an area of no ' +
        'less than 1.4 m² per student. That last requirement is the one I have ' +
        'seen missed most often in concept designs that were otherwise sound.',
    },
    {
      tipo: 'nota',
      texto:
        'There is a requirement that is not about area but about management, ' +
        'and almost nobody looks at it during design: the standard sets ' +
        '**minimum effective-use percentages** for each type of space against ' +
        'the time available (clause 5.1.1). A laboratory used two hours a week ' +
        'is not a luxury: it is a failure to comply. It is useful for pushing ' +
        'back on inflated schedules, which turn up in public works more often ' +
        'than people think.',
    },

    { tipo: 'titulo', texto: 'The site decides before the architecture does' },
    {
      tipo: 'parrafo',
      texto:
        'A good share of the school projects that collapse do not collapse ' +
        'over architecture. They collapse because the site never worked, and ' +
        'that was knowable beforehand. What the standard requires of the site, ' +
        'in clause 4:',
    },
    {
      tipo: 'lista',
      items: [
        '**Maximum gradient of 15% across the buildable area.** Above that you need the slope-stability, run-off and geotechnical studies that allow safety and accessibility to be sustained, and that costs money nobody budgeted for.',
        '**Proportion of the site.** Width-to-length ratios between 1:1 and 1:4 are considered favourable; a very elongated plot leaves no room for a multi-use court, which is the unit of measurement for type D spaces.',
        '**Walking distance.** For new urban schools, a maximum of 1,000 m on foot from the housing served, or the equivalent of 15 minutes by other means of transport. In rural areas the criterion changes: where the demand is, and where access is difficult.',
        '**Services.** Drinking water, wastewater, power, telecommunications and waste disposal. If the site has none of these, the project must include the solution **and** the sustainability of its operation. A rural school with a borehole nobody maintains is a school without water within two years.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Then there are the setbacks, which is where an apparently good site ' +
        'becomes unusable. The standard gathers into a single table the ' +
        'protection strips and easements that come from other norms — river ' +
        'buffers, power lines, roads, railways, fuel pipelines, landfills, ' +
        'cemeteries — with the source norm for each. It does not invent them: ' +
        'it collects them, which for anyone assessing a plot is just as ' +
        'useful.',
    },
    {
      tipo: 'lista',
      items: [
        'Mandatory setbacks of **60 m, 45 m and 30 m** for first, second and third order roads, and **20 m** from the centreline of a railway.',
        '**2 km** from the urban perimeter for landfills.',
        'The safety distances and easement widths for power lines set by the RETIE in force, which are not a single figure but depend on the voltage.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Those are three examples from a longer list, and **the list does not ' +
        'replace the POT.** The standard says so itself: the applicable ' +
        'setbacks are determined from the municipality’s land-use ' +
        'planning instruments, and where two provisions overlap **the stricter ' +
        'one prevails**. If you are assessing a plot, read the POT and the ' +
        'technical standard, in that order, and keep the larger figure.',
    },

    { tipo: 'titulo', texto: 'Open space is not what is left over' },
    {
      tipo: 'parrafo',
      texto:
        'This is the most expensive mistake of all, because it is made at the ' +
        'start and discovered at the end. In a school the playground is not ' +
        'the residue of the site layout: **it is programme**, it has its own ' +
        'index, and its internal split is mandatory.',
    },
    {
      tipo: 'dato',
      valor: '2.5 m² per student',
      etiqueta:
        'Minimum for circulation, pedestrian dwelling areas and green space in ' +
        'a school',
      fuente: 'NTC 4595:2025, clause 4.11',
    },
    {
      tipo: 'lista',
      items: [
        'Of that minimum, **at least 60% is green space** and the rest is circulation and pedestrian dwelling areas.',
        'And within the green space there is a further split: part of it under continuous planting of native or adapted species, or a school garden.',
        'The **school garden** has a minimum of its own — 30 m² up to 500 students and 50 m² above that — and you must provide irrigation water and tool storage within the administrative area. That storage is what is always missing.',
        'Against the heat-island effect: **at least 50% of the external hard surfaces must be shaded**, with tree planting calculated at ten years of growth, or with surfaces of sufficient solar reflectance index.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Separately there are the **curricular open spaces**, which the ' +
        'standard associates with type F: the flag plaza, dwelling ' +
        'courtyards, spaces for prolonged outdoor activity. Their sum must ' +
        'allow **at least half the school population to be accommodated at ' +
        'once** (clause 5.3.6.3). It is not the same as the index above, and ' +
        'it is not deducted from it.',
    },

    { tipo: 'titulo', texto: 'Daylight, where most projects get adjusted late' },
    {
      tipo: 'parrafo',
      texto:
        'The daylight rule of the Colombian school standard is among the most ' +
        'demanding in the country, and it is climatic: the window fraction ' +
        'depends on where the school is. It is in clause 8.2.2, and it is ' +
        'measured against the floor area of the space served.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Climate zone', 'Effective area of openings'],
      filas: [
        ['Temperate and cold', '1/3 of the floor area'],
        ['Hot and dry', '1/4 of the floor area'],
        ['Hot and humid', '1/5 of the floor area'],
      ],
      nota:
        'The rule in clause 8.2.2 of NTC 4595:2025, set out as a table. Only ' +
        'openings above the working plane count.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there are three corrections that change the elevation design ' +
        'entirely. First, the area is the **effective** one: frames and ' +
        'anything else obstructing direct light are deducted. Second, if the ' +
        'glazing is translucent or tinted the area must be increased by 20%, ' +
        'and if concrete screens or other elements that obstruct light ' +
        'appreciably are used, by 60%. Third, and this is the one people find ' +
        'out about late: **the separation between buildings must be at least ' +
        'equal to the height of the nearest building obstructing the light** ' +
        '(clause 8.2.5). That single requirement rearranges an entire site ' +
        'layout.',
    },

    { tipo: 'titulo', texto: 'Accessibility and escape are not adjusted at the end' },
    {
      tipo: 'parrafo',
      texto:
        'In a school, circulation is a named type of space — type E — and it ' +
        'has minimum dimensions that are not those of an ordinary building:',
    },
    {
      tipo: 'lista',
      items: [
        '**Corridors: 1.80 m** where students pass, and **2.10 m** where they serve rooms on both sides. You may only drop to 1.20 m in offices and areas students do not use frequently.',
        '**Doors: 0.80 m clear width and 2.05 m clear height** as a minimum, with an opening mechanism that does not require awkward manoeuvring.',
        '**Stairs: 1.20 m minimum width.** Ramps, 1.20 m, and 1.80 m once the occupancy load reaches 300 people.',
        '**Clear circulation height: 2.20 m** minimum.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Structure and fire protection are not resolved by the school ' +
        'standard: it refers them to the **NSR in force**, with two ' +
        'qualifications that are its own. One, that boarding accommodation ' +
        'falls into Group III when it sits on the same plot as the school. ' +
        'Two, from the seismic code itself: no vulnerability assessment is ' +
        'required for school buildings designed and built after 19 February ' +
        '1998, or intervened during the currency of NSR-10.',
    },

    { tipo: 'titulo', texto: 'The toilets, which nobody looks at and are always short' },
    {
      tipo: 'parrafo',
      texto:
        'The unit of calculation is the **juego sanitario** — a sanitary set, ' +
        'meaning one WC or urinal plus one washbasin — and the ratio is ' +
        '**25 students per set** in primary and secondary, and **20 in ' +
        'pre-school**, which also has its own installation heights. Each set ' +
        'has its own minimum area. It is a three-line calculation and it still ' +
        'turns up wrong in half the concept designs I review.',
    },
    {
      tipo: 'lista',
      items: [
        'Pre-school facilities are **separate** from those for primary and secondary, sit on the same level as the classrooms and **no more than 20 m** from them.',
        'From primary upwards, separate facilities and changing rooms for boys and girls, **no more than 50 m from the furthest workplace**.',
        'From primary upwards, the girls’ facilities must have washbasins and WCs inside the space itself, not shared.',
        'There must be a **universally accessible sanitary unit**, outside the student facilities, at one WC and one washbasin per 15 people with reduced mobility, taking as the potential population 2% of the roll at full capacity. That unit must also be suitable for menstrual hygiene.',
      ],
    },

    { tipo: 'titulo', texto: 'What the brief should bring with it' },
    {
      tipo: 'parrafo',
      texto:
        'If you are on the client side, this is what is worth having settled ' +
        'before you procure the design. Not as paperwork: because every point ' +
        'that is missing turns into an extension of time or a redesign.',
    },
    {
      tipo: 'lista',
      items: [
        '**The school’s PEI**, not a summary of it. The schedule of accommodation comes out of it, and without it the designer is guessing.',
        '**The enrolment projection and the make-up of the groups**, with the peak-occupancy moment. Almost every index in the standard is calculated on that moment, not on the average.',
        '**The site survey**: topography, geotechnics, risk under the POT, available services and applicable setbacks. Before buying, if that is still possible.',
        '**Where the project sits within the territory’s school infrastructure plan**, if one exists. It is what stops you building a site where the demand has already moved on.',
        '**The technical annex of the process, with the standards it requires by reference.** And reading it: that is where you find out whether the tender documents ask for something stricter than the technical standard.',
      ],
    },

    { tipo: 'titulo', texto: 'What this article does not say' },
    {
      tipo: 'parrafo',
      texto:
        'As elsewhere on this blog, I would rather declare the gaps than fill ' +
        'them:',
    },
    {
      tipo: 'lista',
      items: [
        '**I do not cite the content of NTC 4596**, the school signage standard. NTC 4595 references it and invokes it when dealing with circulation, but I did not find it published at a free official source: what circulates are copies in university repositories. Citing it from memory would be exactly what this blog does not do.',
        '**I reproduce none of the standard’s tables.** ICONTEC documents carry "reproduction prohibited" on the cover. Here I explain what each one says and which clause it is in, so that you can go to the source.',
        '**I do not claim NTC 4595 is binding on every school project.** I verified one specific reference, the one on boarding facilities; a general rule I did not find.',
        '**The quantities and types of space in Annex A are informative**, and the standard says so. They serve as a reference, not as a requirement.',
        '**I do not go into what changed in the 2025 edition against the previous one.** That is in [the article dedicated to NTC 4595:2025](/blog/ntc-4595-2025-que-cambio).',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'What I do stand behind is the point at the top: **the area is the ' +
        'output, not the input.** If the process starts from the schedule of ' +
        'accommodation, the standard is met almost by itself and the budget ' +
        'resembles the building. If it starts from the floor area, what ' +
        'follows is a chain of adjustments in which the losers are always the ' +
        'open space, the daylight and the toilets — in that order.',
    },
  ],
}
