import type { TraduccionPost } from '@/lib/types'
import { CADENA_DE_AREAS_EN } from '../diagramas/ntc-4595'

/**
 * Traducción de «NTC 4595:2025: qué cambió y cuándo obliga».
 *
 * **El vocabulario que este artículo fija para el corpus**, porque es el
 * primero que traduce una norma técnica de edificación escolar:
 * `norma técnica` → technical standard y `reglamento técnico` → technical
 * regulation. Esa distinción es el eje del artículo entero y en inglés se
 * pierde si las dos se traducen como «regulation»; se sostiene además con la
 * cita del Decreto 1595, que define las dos por su obligatoriedad.
 * `lote` → site, no «plot», porque se habla de un equipamiento;
 * `programa de áreas` → schedule of areas, glosado la primera vez;
 * `matrícula` → enrolment; `zonas duras` → hard landscaped areas;
 * `ambientes complementarios` → supporting spaces; `cupo de parqueo` → parking
 * space; `aforo` → occupancy.
 *
 * **`ambiente` es el término difícil y se resuelve conservándolo.** Es un
 * término de arte de la norma —los ambientes tipo A, B, C, D, E y F son una
 * clasificación con áreas propias—, y traducirlo como «environment», que es lo
 * que hace el título inglés de la portada de ICONTEC, produce en el cuerpo del
 * texto frases que un arquitecto inglés no reconoce. Se conserva en español
 * con glosa la primera vez y después se usa «type A space». Igual criterio con
 * `áreas libres curriculares`, que es una expresión acuñada por esta edición:
 * traducirla la disolvería justo en el punto donde el artículo dice que es
 * nueva. `plaza de banderas` y `aula-foro` se conservan y se glosan por lo
 * mismo: son rótulos de una tabla concreta y el lector tiene que poder
 * encontrarlos si abre la norma.
 *
 * **`Documentos Tipo` se conserva y se glosa** como standardised tender
 * documents of compulsory use, exactamente como quedó fijado en
 * `concursos-publicos-de-arquitectura`. Y `POT` se conserva glosado como el
 * plan de ordenamiento territorial del municipio, porque el artículo manda al
 * lector a buscar cifras ahí y necesita saber qué es.
 *
 * **Las siglas y los nombres de normas colombianas no se traducen**: NTC 4595,
 * GTC 223, NTC 6705, NSR-10, RETIE, RETILAP, NTC 2050, PEI, PEC, ICONTEC, CTN
 * 162, y los decretos, leyes y resoluciones por su nombre real. La cita del
 * Decreto 1595 sí se traduce en su texto —es lo que el lector necesita
 * entender— y conserva en español la referencia de la fuente.
 *
 * **La sección final se traduce sin suavizarla**, como en
 * `concursos-publicos-de-arquitectura`. Las seis cosas que el artículo declara
 * no haber verificado son lo que sostiene su credibilidad, y un lector
 * extranjero es justo quien no puede distinguir por su cuenta lo verificado de
 * lo repetido. En particular se conserva íntegra la advertencia de que no se
 * reproduce ninguna tabla: el motivo es de derechos de ICONTEC y no cambia con
 * el idioma.
 *
 * Separadores invertidos con cuidado especial en este artículo, que está lleno
 * de índices: «2,00 m²» es «2.00 m²» y «1 440 estudiantes» es «1,440
 * students». Confundirlos aquí convertiría dos metros cuadrados en doscientos.
 * Y el espacio antes del `%` desaparece: «60 %» es `60%`.
 *
 * Fechas al formato inglés: «19 de noviembre de 2025» es «19 November 2025».
 */
export const traduccion: TraduccionPost = {
  slug: 'ntc-4595-2025-que-cambio',
  titulo: 'NTC 4595:2025: what changed, and when it binds you',
  traducido: '2026-09-06',
  resumen:
    'The areas per student did not move. What changed is where you get them ' +
    'from: the table that gave you the size of the site left the normative ' +
    'body, and the playground became programmed area.',
  metaDescripcion:
    'What changed in NTC 4595:2025 against the 2020 edition, what stayed the ' +
    'same, and which instrument makes it enforceable on a public project.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'On 19 November 2025 the governing board of ICONTEC ratified a new ' +
        'edition of **NTC 4595**, the standard by which schools are planned ' +
        'and designed in Colombia. On the same day it ratified another ' +
        'document in the same series, and the Ministry of Education published ' +
        'both together on 2 December. There was no announcement.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is worth starting with what almost nobody says, because it is the ' +
        'first thing a team needs to know before redoing anything: **the ' +
        'areas per student did not move.** A preschool classroom is still ' +
        '2.00 m² per student and a primary or secondary classroom 1.65 m², ' +
        'exactly the figures of the previous edition. What changed is less ' +
        'visible and weighs more: the method by which the size of a school is ' +
        'worked out.',
    },

    { tipo: 'titulo', texto: 'Not a law, and it can still cost you the contract' },
    {
      tipo: 'parrafo',
      texto:
        'NTC 4595 is a **Colombian technical standard**, issued by ICONTEC, ' +
        'which is a private not-for-profit body and at the same time the ' +
        'national standards body. That double status is not a detail: it ' +
        'defines exactly how far the standard binds.',
    },
    {
      tipo: 'cita',
      texto:
        'Standard. A document approved by a recognised institution which ' +
        'provides, for common and repeated use, rules, guidelines or ' +
        'characteristics for products or for related processes and production ' +
        'methods, and **with which compliance is not mandatory**. […] ' +
        'Technical regulation. A document laying down the characteristics of ' +
        'a product or the related processes and production methods, including ' +
        'the applicable administrative provisions, and **with which ' +
        'compliance is mandatory**.',
      fuente: 'Decreto 1595 de 2015, artículo 2.2.1.7.2.1, numerales 57 y 85',
    },
    {
      tipo: 'parrafo',
      texto:
        'The standard is consistent with that. **It contains no adoption ' +
        'clause, no transitional regime, no commencement date other than that ' +
        'of its ratification, and no declaration of mandatory force** — this ' +
        'was checked by searching those words across all 137 pages. And in ' +
        'its Annex A it does the opposite: it says of its schedule-of-areas ' +
        'tables that they "are not for mandatory use".',
    },
    {
      tipo: 'parrafo',
      texto:
        'So the useful question is not whether the standard binds, but **who ' +
        'is imposing it on you**. And there the answers are concrete:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Instrument', 'What it does', 'Who it applies to'],
      filas: [
        [
          '**Resolución 1349 de 2022** of the Ministry of Education, article 3',
          'Lists "compliance with Colombian Technical Standard NTC4595" among the categories of works eligible for funding',
          'Any project funded or co-funded with **Ley 21 de 1982** resources or national resources assigned to the Ministry',
        ],
        [
          '**Decreto 1075 de 2015**, article 2.3.3.5.10.3.2, paragraph 5',
          'Requires NTC 4595 "or whatever replaces or supersedes it" to be followed for teaching spaces',
          '**School residences** in state education establishments',
        ],
        [
          '**The tender documents or the technical annex**',
          'Incorporates it as a contractual specification',
          'Anyone bidding for that process, on the terms the tender sets',
        ],
      ],
      nota:
        'Paragraph 5 of Decreto 1075 was added by Decreto 974 de 2026. Its ' +
        'exact date of issue could not be verified: the Ministry’s ' +
        'announcement is from August 2026.',
    },
    {
      tipo: 'nota',
      texto:
        'Two things that do **not** impose it, worth knowing because they are ' +
        'assumed. **Not the building permit**: Decreto 1077 de 2015 does not ' +
        'mention NTC 4595 once in its entire compiled text. The permit ' +
        'authority checks planning rules and technical regulations, not a ' +
        'voluntary technical standard. And **not the Documentos Tipo either** ' +
        '— the standardised tender documents of compulsory use for social ' +
        'infrastructure. They name it twice, both times inside a bracketed ' +
        'instruction addressed to the public body — "the Entity must check ' +
        'whether particular technical guidance applies. For example: […] NTC ' +
        '4595". It is a suggestion, not a requirement: what makes it ' +
        'enforceable is the body filling in its own annex.',
    },
    {
      tipo: 'parrafo',
      texto:
        'For a private school, the operating licence does not name it either. ' +
        'What Decreto 1075 asks for in the education project proposal is the ' +
        '"specification of the standards or criteria adopted to define the ' +
        'conditions of the physical plant". In other words: you declare which ' +
        'standard you adopted. NTC 4595 comes in that way — but because you ' +
        'named it.',
    },

    { tipo: 'titulo', texto: 'From when the 2025 edition applies' },
    {
      tipo: 'parrafo',
      texto:
        'There is a drafting detail here with consequences. Resolución 1349 ' +
        'cites "NTC4595" **with no edition year**. An undated reference ' +
        'points, by convention, to the latest edition in force of the ' +
        'referenced document. Since there is no act governing the transition ' +
        'between editions, the reasonable reading is that from the ' +
        'publication of the 2025 edition it is that one which applies to ' +
        'anything submitted for funding.',
    },
    {
      tipo: 'nota',
      texto:
        '**That is a reading, not a provision.** No rule, circular or ' +
        'announcement was found, from the Ministry or from the education ' +
        'infrastructure fund, saying what happens to projects designed to the ' +
        'previous edition. The absence of a transitional regime is a verified ' +
        'fact; its practical consequence is an inference, and is presented as ' +
        'one.',
    },
    {
      tipo: 'parrafo',
      texto:
        'So the only rule that will serve you at the table is this: **read ' +
        'which edition is named by the document that imposes it on you.** ' +
        'Tender documents that say "NTC 4595" on their own refer to the one ' +
        'in force; ones that say "NTC 4595 de 2020" tie you to the 2020 ' +
        'edition even though a later one exists. They are not the same ' +
        'obligation and they are not met with the same drawings. If no year ' +
        'is given, ask in writing and keep the reply.',
    },

    { tipo: 'titulo', texto: 'What was ratified on 19 November 2025' },
    {
      tipo: 'parrafo',
      texto:
        'It was not one standard: it was two documents, studied by the same ' +
        'technical committee — CTN 162 on the construction of school ' +
        'buildings — and ratified on the same day.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Document', 'What it is', 'Edition', 'Pages'],
      filas: [
        [
          '**NTC 4595:2025**',
          'Planning and design of school facilities and environments. **How** a school is designed',
          '5.0',
          '137',
        ],
        [
          '**GTC 223:2025**',
          'Guide to preparing school infrastructure plans. **By what method** you decide what to build',
          '2.0',
          '63',
        ],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And there are **three** pieces, not two, because above them sits ' +
        '**NTC 6705:2023**, which sets the admissible minimums for a school ' +
        'infrastructure plan. All three are in force and they divide the ' +
        'work: NTC 6705 says what a plan has to meet, GTC 223 explains how to ' +
        'prepare one — and it succeeds GTC 223 of 2011, not NTC 6705 — and ' +
        'NTC 4595 governs the physical design of whatever comes out of it.',
    },
    {
      tipo: 'nota',
      texto:
        'One detail that will cost you an argument if you do not know it: ' +
        '**NTC 4595:2025 swapped the titles of the two** in its references ' +
        'clause. It lists "NTC 6705, *Guide to preparing* school ' +
        'infrastructure plans" among the technical standards, and "GTC 223. ' +
        '*Preparation of Infrastructure Plans*" among the guides. The real ' +
        'cover titles are the other way round. It is an erratum in the ' +
        'standard, not a change in the status of either document.',
    },

    { tipo: 'titulo', texto: 'Which edition this is being compared against' },
    {
      tipo: 'parrafo',
      texto:
        'NTC 4595 was first ratified in 1999 and is now in its fifth edition. ' +
        'Three matter today, because all three are in circulation:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Edition', 'Issued', 'Pages', 'Where it is still alive'],
      filas: [
        ['Second update', '27 November 2015', '57', 'Old tenders and projects that were never updated'],
        ['Third update', '18 March 2020', '90', 'Most projects currently under way'],
        ['**Fifth edition, NTC 4595:2025**', '**19 November 2025**', '**137**', 'The one in force'],
      ],
      nota:
        'ICONTEC changed its naming along the way: what the 2020 edition ' +
        'calls the "third update" is edition 4.0 in the numbering used for ' +
        'the 2025 one. That is why the next is 5.0 and none is missing in ' +
        'between.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**This article compares the 2025 edition against the 2020 one**, ' +
        'which is the edition it replaces. And it can be done because the ' +
        '2020 edition is indeed published by the Ministry of Education, in ' +
        'the same directory as the others, even though the file name does not ' +
        'identify it and it is hard to find.',
    },
    {
      tipo: 'nota',
      texto:
        'The 2025 standard carries a thirty-two page **Annex D ' +
        '(Informative)** comparing the two editions paragraph by paragraph. ' +
        'It is the most complete source there is, and it sits inside the ' +
        'document the Ministry publishes free of charge. Read it, but with ' +
        'your guard up: it says of itself that it collects the "principal" ' +
        'changes, it omits the technical-guides clause entirely, and in at ' +
        'least one place — the kitchen threshold — it transcribes the old ' +
        'text in the new edition’s column.',
    },

    { tipo: 'titulo', texto: 'What did not change, and is worth looking at first' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part that saves money, because it stops you redoing what ' +
        'is already right. It was verified by opening both editions and ' +
        'comparing clause against clause:',
    },
    {
      tipo: 'lista',
      items: [
        '**Classroom areas, identical.** Preschool 2.00 m² per student, primary and secondary 1.65 m², multigrade 1.80 m². Even the note survives that requires 3 m² to be added for the teacher’s station when a group falls below thirty students.',
        '**The 2.5 m² per student** for circulation, pedestrian standing areas and green areas, with no less than 60% for green areas and 30% of those for continuous planting of native or adapted species.',
        '**The school garden**: a minimum of 30 m² up to 500 students and 50 m² above that, with irrigation water provided for.',
        '**Heat island control**: shade at least 50% of external hard landscaped areas, either with tree planting at ten years of growth or with paving of a solar reflectance index no lower than 28%.',
        '**The maximum gradient of 15%** across the buildable area, and a site proportion between 1:1 and 1:4 as favourable.',
        '**The effective utilisation percentages** for spaces: 80% of available time for type B, C and F spaces, 90% for A and D, 100% for E. In 2020 these ran in prose; in 2025 they are Table 5. Same content, better presented.',
        '**The whole safety chapter.** Structures, means of escape, risk prevention, vandalism and maintenance were left as they were, including the classification of school residences in NSR Group III.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'One nuance that does matter inside "what did not change": the ' +
        'classroom area table changed its title and its column heading. Where ' +
        'it said "**maximum number** of students" it now says "**occupancy ' +
        'reference**", and a new note refers the real maximum capacity to the ' +
        'parameters of the regional education authority and to the school’s ' +
        'own education project. The figures are the same; **the cap of forty ' +
        'per classroom stopped being a cap and became a reference.**',
    },

    { tipo: 'titulo', texto: 'What did change' },

    { tipo: 'titulo', texto: 'The table that gave the size of the site left the normative body' },
    {
      tipo: 'parrafo',
      texto:
        'This is the big change and the one least reported. In the 2020 ' +
        'edition, **Table 2, "Basic site indicators"**, sat in clause 4, ' +
        'which is normative, and worked as a catalogue: you looked up the row ' +
        'for your size of school — 1,440, 960, 480, 240, 90, 60 or 30 ' +
        'students — and read off the total site area and the square metres ' +
        'per student.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In the 2025 edition that table is **Table A.1 of Annex A**, which is ' +
        'informative, and the annex says of its tables, in as many words, ' +
        'that they **"are not for mandatory use"**. In its place, the ' +
        'normative body carries **Tables 3 and 4**, which hold no values but ' +
        'a procedure. The standard describes them as "a simulator for ' +
        'building the programme platform" and recommends taking them into a ' +
        'spreadsheet.',
    },
    {
      tipo: 'nota',
      texto:
        '**Translated for whoever writes or assesses tender documents:** you ' +
        'can no longer cite a row. It used to be enough to say "the site ' +
        'complies with Table 2 of NTC 4595"; now you have to present the ' +
        'calculation, and the calculation depends on the education project of ' +
        'that particular institution. It is more briefing work and less room ' +
        'to settle it by analogy with another school.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And it took with it a rule that moves budget: the note requiring the ' +
        'site **to be increased by at least 30% on slopes steeper than 15%** ' +
        'was a note to the normative table of 2020, and today it is a note to ' +
        'a table the standard itself declares not mandatory. The requirement ' +
        'of a maximum 15% gradient does remain in the normative body; the ' +
        'additional site cost associated with the slope does not.',
    },

    { tipo: 'titulo', texto: 'The playground stopped being what is left over' },
    {
      tipo: 'parrafo',
      texto:
        'What is genuinely new is *áreas libres curriculares* — curricular ' +
        'open space — in clause 5.3.6.3 and Table 9. The expression does not ' +
        'appear once in the 2020 edition, where the matter was dealt with in ' +
        'a single paragraph saying that the activities of type F spaces ' +
        '**could** also take place in open areas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Now it is a regime. Open space stops being calculated as a residue ' +
        '— whatever is left of the site once the blocks are placed — and ' +
        'starts being programmed as area with a teaching function, with two ' +
        'concrete requirements: that the open areas of type F spaces ' +
        '**accommodate at least 50% of the school population at the same ' +
        'time**, and that each kind of open area be sized by its own index ' +
        'per student.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Table 9 characterises those areas — the flag plaza (*plaza de ' +
        'banderas*), the forum classroom (*aula-foro*), group classrooms, ' +
        'collaborative work nooks, and sitting and reading areas — and gives ' +
        'each a use, an occupancy criterion and an index running from 0.7 to ' +
        '1.65 m² per student, capped by the 2.5 m² per student of Table 2. ' +
        'And it expressly excludes what many people would count: **sports ' +
        'courts, terracing, car parking and services are not curricular open ' +
        'space.**',
    },
    {
      tipo: 'nota',
      texto:
        'There is money at stake here, and in both directions. It forces you ' +
        'to design — and to cost — external space that used to be left as ' +
        '"green area", but it also **gives that space a technical argument in ' +
        'front of whoever assesses the budget**, which is exactly what was ' +
        'missing to defend the playground from the cuts.',
    },
    {
      tipo: 'diagrama',
      svg: CADENA_DE_AREAS_EN,
      titulo: 'Where the area of a school comes from in the 2025 edition',
      pie:
        'Studio drawing, not the standard’s. The boxes refer to the clause ' +
        'and the table number; the values are in NTC 4595:2025, which is a ' +
        'copyright document of ICONTEC and is not reproduced here.',
    },

    { tipo: 'titulo', texto: 'You can now go above four storeys' },
    {
      tipo: 'parrafo',
      texto:
        'The 2020 edition stopped at four storeys, full stop. The 2025 one ' +
        'keeps that ceiling as the rule but opens an exception for "cases in ' +
        'which, by reason of urban conditions of shortage of institutional ' +
        'education land, the total height proposed exceeds 4 storeys". It is ' +
        'a change written for the urban school on a tight site, and it is not ' +
        'free: it requires meeting the occupancy and means-of-escape minimums ' +
        'of titles J and K of NSR-10 and of local planning rules, applying ' +
        'whichever is stricter; documentary backing with a certificate from ' +
        'the municipal planning office; and an evacuation and emergency ' +
        'response plan plus a risk management plan.',
    },
    {
      tipo: 'nota',
      texto:
        'And it brings a height-dosing rule worth having to hand from the ' +
        'massing stage: on **storeys 4 and 5** up to 75% effective curricular ' +
        'use is allowed, and on **storeys 6 and 7** up to 50%, giving way to ' +
        'covered non-curricular space. Translated: the higher you go, the ' +
        'greater the share of the floor you have to give back to common ' +
        'space. Going up is not free in usable area.',
    },

    { tipo: 'titulo', texto: 'Eaves stopped counting as built area' },
    {
      tipo: 'parrafo',
      texto:
        'Small in wording and very useful in practice. Clause 8.3.3 adds that ' +
        'roof overhangs, eaves, façade fins and other devices acting as ' +
        'bioclimatic control **shall not count as built area** towards the ' +
        'programme areas or towards the maximum percentage allowed for ' +
        'external circulation. It is the difference between being able to ' +
        'shade a façade and having to argue about it with whoever balances ' +
        'the schedule of areas.',
    },

    { tipo: 'titulo', texto: 'A space is no longer necessarily a room' },
    {
      tipo: 'parrafo',
      texto:
        'The root of all the above is in the definition in clause 3.1. In ' +
        '2020, an *ambiente* — a teaching space — was "a place or set of ' +
        'closely linked places". In 2025 the definition accepts that school ' +
        'activity may take place **physically, remotely or virtually, at the ' +
        'school or away from it**, and that the space may be built and ' +
        'covered **or open to the sky**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is a definition written after the pandemic, and the standard’s ' +
        'introduction says so: one of its three purposes is to take in the ' +
        'changes in habitability left by covid-19 and to open the door to ' +
        '"unbuilt" teaching spaces. The new clause 4.3 runs along the same ' +
        'line, recognising the autonomy of indigenous peoples over their own ' +
        'education infrastructure, harmonised with basic conditions of safety ' +
        'and accessibility.',
    },

    { tipo: 'titulo', texto: 'The PEC comes in alongside the PEI' },
    {
      tipo: 'parrafo',
      texto:
        'Clause 5 used to be called "Institutional Education Project (PEI) ' +
        'and school spaces". It is now called "Institutional Education ' +
        'Project (PEI), Community Education Project (PEC) and school ' +
        'spaces", and the abbreviation PEC went from appearing three times in ' +
        'the whole 2020 edition to thirty times in the 2025 one. This is not ' +
        'cosmetic for anyone working with ethnic communities: the schedule of ' +
        'areas can be derived from the PEC, and that gives normative backing ' +
        'to a brief that looks nothing like an urban school’s.',
    },

    { tipo: 'titulo', texto: 'The standard is tied to planning' },
    {
      tipo: 'parrafo',
      texto:
        'The 2020 edition does not mention NTC 6705 once, because it did not ' +
        'exist. The 2025 one puts it into its scope — clause 1.1 — and takes ' +
        'whole definitions from it. And there is a change of scope there that ' +
        'goes unnoticed: in 2020, assessing and adapting existing facilities ' +
        'was a free-standing use of NTC 4595; in 2025 it is done "within the ' +
        'framework established by NTC 6705". To touch a school that already ' +
        'exists, the standard sends you to another standard first.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The practical effect is a separation of tasks that used to be ' +
        'muddled: planning — how many sites, where, with what enrolment, what ' +
        'is extended and what is replaced — belongs to the infrastructure ' +
        'plan; physical design belongs to NTC 4595. If your public body is ' +
        'putting a plan together, the order matters: the plan first, the ' +
        'design afterwards.',
    },

    { tipo: 'titulo', texto: 'Services: two new clauses and one absence' },
    {
      tipo: 'lista',
      items: [
        '**Two entirely new clauses.** 7.4 requires an early fire detection and alarm system, referring to NFPA 72; and 7.5 brings in heating, ventilation and air conditioning, backed by a bioclimatic and thermal comfort study.',
        '**7.3 was widened.** It used to be "communications and alarm installations"; it is now "voice, data, intrusion, closed-circuit television (CCTV) and sound installations", with the structured cabling standards ANSI/TIA 568 and 569, absent in 2020.',
        '**Water and drainage moved from 7.4 to 7.6** and their heading now includes fire extinguishing.',
        '**The absence:** the reference to the Colombian electrical code, NTC 2050, disappeared from the list of documents applicable to electrical installations. What remains is RETIE and RETILAP as in force "and the standards that complement them".',
        '**Clause 8 stopped being called "comodidad" and is now "confort".** It is terminological and affects all four sub-clauses. If your tender documents cite "comodidad visual, numeral 8.2", they are citing the old edition.',
      ],
    },

    { tipo: 'titulo', texto: 'Accessibility: it gains a lavatory and loses a ratio' },
    {
      tipo: 'parrafo',
      texto:
        'What it gains is concrete and welcome. Clause 5.4.9 creates the ' +
        '**universally accessible sanitary unit**: it must sit outside the ' +
        'student toilet blocks, have a minimum of 5 m² per fitting set, and ' +
        'be suitable for menstrual hygiene and for people of diverse genders, ' +
        'which the previous edition did not contemplate. Double-loaded ' +
        'corridors rise to a minimum width of 2.10 m, and the first-responder ' +
        'area is quantified for the first time: a minimum of 9 m² covered ' +
        'with an accessible lavatory attached.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What it loses is concrete too. Clause 6.3.3.3 in 2020 required **one ' +
        'accessible space for every ten parking spaces, two between eleven ' +
        'and fifty, and no more than 50 m from the main entrance**. The 2025 ' +
        'one asks for "at least one reserved space […] or whatever the ' +
        'planning rules applicable in the territory establish", applying ' +
        'whichever is stricter, and the position near the entrance went from ' +
        '"shall" to "should".',
    },
    {
      tipo: 'nota',
      texto:
        'In the informative annex on gradual accessibility the four stages ' +
        'are unchanged, but where 2020 said "people with disability", 2025 ' +
        'says "people with **reduced mobility**", and where it said "shall" ' +
        'it now says "should". **It is not asserted that the standard has ' +
        'lowered any legal obligation**: that annex was advisory before and ' +
        'remains so, and accessibility duties arise not from it but from ' +
        'Decreto 1421 de 2017 and the general disability regime.',
    },

    { tipo: 'titulo', texto: 'The pattern: fewer figures of its own, more referrals' },
    {
      tipo: 'parrafo',
      texto:
        'Lined up, the changes describe a consistent editorial decision. The ' +
        'standard let go of hard numbers it used to supply itself and handed ' +
        'them back to local planning rules or to each institution’s education ' +
        'project:',
    },
    {
      tipo: 'lista',
      items: [
        '**The size of the site**: from a normative table to an informative annex.',
        '**Classroom occupancy**: from "maximum number of students" to "occupancy reference", with the real capacity referred to the regional education authority.',
        '**Preschool outdoor area**: 2020 required an area no smaller than half the classroom; 2025 extends the requirement of contact with the outside to all type A spaces, but with no figure of its own, referring instead to the curricular open space.',
        '**Car parking spaces**: 2020 set one per five bicycle spaces, at 20 m²; 2025 refers to the instruments of territorial planning.',
        '**Accessible spaces**: the ratio and the maximum distance to the entrance are gone.',
        '**Separation from petrol stations**: the 60 m set by Table 1 in 2020 is no longer there.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'This is not necessarily bad — a national standard setting parking ' +
        'ratios over the top of local planning rules creates ' +
        'contradictions — but it changes the work: **every figure the ' +
        'standard let go of has to be looked up in the municipality’s POT**, ' +
        'its land use plan, and the source has to be documented. What used to ' +
        'be settled by citing NTC 4595 is now settled by citing NTC 4595 and ' +
        'the planning rules, and applying whichever is stricter.',
    },

    { tipo: 'titulo', texto: 'If your project was designed to the previous edition' },
    {
      tipo: 'parrafo',
      texto:
        'There is no transitional regime, so the answer comes not from the ' +
        'standard but from your contract. In this order:',
    },
    {
      tipo: 'lista',
      items: [
        '**Look at which edition is named by the document that imposes it on you.** Tender documents, funding agreement or commencement record. If it names an edition with a year, that is your obligation even though a later one exists.',
        '**If it names no year, ask the public body in writing** which one applies, and keep the reply. It is the kind of ambiguity that is cheap to resolve before submission and expensive afterwards.',
        '**Check first what did not change.** If your brief meets the classroom indices, the 2.5 m² of open areas and the utilisation percentages, that work is done and is not redone.',
        '**Then look at the curricular open space.** That is where a 2020 project falls short, because the concept did not exist. It is usually an exercise in characterising and qualifying the open space you already have, more than in adding area.',
        '**Go to the POT for the figures the standard let go of**: parking, accessible spaces, plot ratios. And leave it documented in the design statement.',
        '**Do not redo the site layout on rumour.** Before moving a block, demand the clause that requires it to be moved.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And if the project has not started yet, the order that avoids rework ' +
        'is the usual one: the schedule of areas is closed at [concept ' +
        'design](/blog/que-es-un-anteproyecto), not later. In public work, ' +
        'moreover, what is assessed is not only the project but how it is ' +
        'presented: that is the subject of [how public architectural ' +
        'competitions work from the ' +
        'inside](/blog/concursos-publicos-de-arquitectura). And if what you ' +
        'need is not what changed but how the project is put together from ' +
        'scratch, that is in [how a school is designed in ' +
        'Colombia](/blog/como-se-disena-un-colegio-en-colombia).',
    },

    { tipo: 'titulo', texto: 'What this article does not claim' },
    {
      tipo: 'parrafo',
      texto:
        'For consistency with the rest of this blog, the gaps are declared ' +
        'rather than filled:',
    },
    {
      tipo: 'lista',
      items: [
        '**It is not claimed that an act exists adopting NTC 4595 with general effect.** What was found and is cited is narrower: a resolution requiring it as a condition of funding, and an article of Decreto 1075 requiring it for state school residences. That no other was found does not prove none exists.',
        '**The exact date of Decreto 974 de 2026 was not verified**, which added that paragraph, nor that of Resolución 13107 de 2024, which amended article 3 of Resolución 1349. The content of both is verified against compiled text.',
        '**It was not checked whether any regional education authority requires NTC 4595 by its own administrative act**, for an operating licence or for works. The sweep covered national rules.',
        '**The ICONTEC catalogue could not be consulted**, which is where the formal status — in force, annulled, replaced — of each document is recorded. What is asserted here about NTC 6705 and GTC 223 comes from the text of the standards themselves, which is a primary source but is not the catalogue.',
        '**No table from the standard is reproduced.** Both editions are copyright documents of ICONTEC and state that reproduction is prohibited. Clauses are cited here, the content of each table is described and individual figures are given; to work with it you have to open the document.',
        '**Not every change is listed.** Annex D of the 2025 edition runs to thirty-two pages. This article covers the ones that move the design or the budget, not the drafting ones.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Both editions and the guide can be downloaded free from the Ministry ' +
        'of Education website, and they are linked below. Before taking an ' +
        'expensive decision on a particular project, open them: it is half an ' +
        'hour, and it is what separates an assertion from a citation.',
    },
  ],
}
