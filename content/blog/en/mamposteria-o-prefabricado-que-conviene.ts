import type { TraduccionPost } from '@/lib/types'
import { MURO_PORTANTE_EN } from '../diagramas/muros'

/**
 * Traducción de «Mampostería o prefabricado: qué conviene, y cuándo».
 *
 * El diagrama va rotulado en inglés desde `MURO_PORTANTE_EN`, que vive en el
 * mismo archivo que el español para que el dibujo no pueda divergir mientras
 * divergen los rótulos.
 *
 * Contexto añadido para el lector de fuera: qué es la NSR-10, qué son las
 * zonas de amenaza sísmica colombianas y qué significa «mampostería confinada»,
 * que es un sistema muy común en América Latina y casi desconocido en el mundo
 * anglosajón. Ninguna frase del español se pierde.
 *
 * Los nombres de las normas y los títulos del reglamento van sin traducir y
 * glosados la primera vez: «NSR-10», «Título D», «Decreto 1077 de 2015». Las
 * cifras son las mismas cifras: siete tipos, 50 m, 45 m, 12 m, 15 viviendas,
 * 3.000 m², Aa de 0,05 —con punto decimal en inglés—.
 */
export const traduccion: TraduccionPost = {
  slug: 'mamposteria-o-prefabricado-que-conviene',
  titulo: 'Masonry or prefabricated: which one, and when',
  traducido: '2026-09-05',
  resumen:
    '"Prefabricated" is not a system, and masonry comes in seven. The honest ' +
    'comparison between them, and the question nobody answers: what happens ' +
    'when you want to take a wall out ten years later.',
  metaDescripcion:
    'Masonry, industrialised concrete, steel framing or timber: what NSR-10 ' +
    'allows in each Colombian seismic zone, and which system lets you remodel ' +
    'later.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The question nearly always arrives in the same words: "would masonry ' +
        'or prefabricated work out better?". And it is the wrong question, not ' +
        'out of technical pedantry but because **"prefabricated" does not name ' +
        'a structural system**: it names a degree of industrialisation. Four ' +
        'different things shelter under that word, and they behave, cost and ' +
        'remodel differently.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The same holds on the other side. "Masonry" is not one thing either: ' +
        'the Colombian building code recognises **seven types**, and treats ' +
        'them in seven ways. This article sells none of them. It puts the ' +
        'comparison in order and ends on the question almost nobody asks in ' +
        'time.',
    },

    { tipo: 'titulo', texto: 'What "prefabricated" means in Colombia' },
    {
      tipo: 'parrafo',
      texto:
        'In the Colombian housing market the word covers at least four separate ' +
        'families, and not one of them is simply "prefabricated". All of them ' +
        'are in the code; none of them sits outside it.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What you are sold', 'What it actually is', 'Where it lives in the code'],
      filas: [
        [
          '**Industrialised concrete**',
          'Concrete walls poured on site in steel formwork, one cycle per floor. It is the system behind volume housing',
          'Concrete bearing-wall system, Table A.3-1, and Título C',
        ],
        [
          '**Structural masonry**',
          'The block wall is the structure. There are no separate columns or beams: the load comes down the wall',
          'Título D, with seven variants in clause D.2.1',
        ],
        [
          '**Confined masonry**',
          'Block walls with small columns and tie beams cast around them. It is the ordinary Colombian house',
          'Título D, chapter D.10, and Título E for one- and two-storey houses',
        ],
        [
          '**Steel framing**',
          'Cold-formed steel sections with sheathing boards on both faces',
          'Título F, chapter F.4',
        ],
        [
          '**Timber**',
          'Shear panels in light laminated timber walls',
          'Título G, and Table A.3-1',
        ],
        [
          '**Frame with infill walls**',
          'Concrete columns and beams carry all the load, with block walls that only divide space',
          'Título C, and Título A for the system itself',
        ],
      ],
      nota:
        'The last row is not usually called either "prefabricated" or ' +
        '"masonry", and it is precisely the one that decides the rest of this ' +
        'article.',
    },
    {
      tipo: 'nota',
      texto:
        'One clarification that heads off a pointless argument: ' +
        '**industrialised and prefabricated are not synonyms**. A concrete wall ' +
        'poured on site in industrial formwork was not prefabricated anywhere: ' +
        'it was cast right there, through a repetitive process. What those ' +
        'systems sell you is cycle speed, not factory-made components.',
    },

    { tipo: 'titulo', texto: 'The seismic zone rules several out before you choose' },
    {
      tipo: 'parrafo',
      texto:
        'Before comparing prices it is worth knowing that the list of options ' +
        'is not the same across the country. The code assigns each system an ' +
        'energy dissipation capacity — special, moderate or minimal — and then ' +
        'says, zone by zone, which one is allowed and up to what height. These ' +
        'are the rows that matter for housing.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Bearing-wall system', 'High zone', 'Intermediate zone', 'Low zone'],
      filas: [
        ['Concrete walls, special capacity', 'Yes, up to 50 m', 'Yes, no limit', 'Yes, no limit'],
        ['Concrete walls, moderate capacity', 'Not permitted', 'Yes, up to 50 m', 'Yes, no limit'],
        ['Reinforced masonry with every cell grouted', 'Yes, up to 50 m', 'Yes, no limit', 'Yes, no limit'],
        ['Reinforced cavity masonry', 'Yes, up to 45 m', 'Yes, up to 60 m', 'Yes, no limit'],
        ['Partially reinforced masonry', 'Group I, 2 storeys', 'Yes, up to 12 m', 'Yes, up to 18 m'],
        ['**Confined masonry**', '**Group I, 2 storeys**', 'Group I, up to 12 m', 'Group I, up to 18 m'],
        ['Unreinforced masonry', 'Not permitted', 'Not permitted', 'Group I only, 2 storeys'],
        ['Timber shear panels', 'Yes, up to 6 m', 'Yes, up to 9 m', 'Yes, up to 12 m'],
      ],
      nota:
        'Table A.3-1 of NSR-10. Use group I covers buildings of ordinary ' +
        'occupancy, housing among them. And a note on the table itself narrows ' +
        'unreinforced masonry further still: only in those parts of the low ' +
        'zone where Aa, the peak acceleration coefficient, is 0.05 or less.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it with your own municipality in mind. **In a high seismic hazard ' +
        'zone — which is where Cali, Jamundí, Palmira and Bucaramanga sit — ' +
        'confined masonry, the standard Colombian house, is capped at two ' +
        'storeys.** That is not advice: it is what the table says. If your ' +
        'project is three storeys in a high zone, the conversation about the ' +
        'system has already begun, whether you have had it or not.',
    },
    {
      tipo: 'nota',
      texto:
        'There is one variant that is not an option and still gets built: ' +
        '**infill diaphragm masonry — block walls set inside a frame and ' +
        'working together with it — is not permitted for new buildings.** The ' +
        'code allows it only within the scope of the chapter on existing ' +
        'buildings, for assessing or intervening in them. That is written into ' +
        'clause D.2.1.6.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is one title of the code cut to the measure of the small ' +
        'house. Título E covers one- and two-storey dwellings in confined ' +
        'masonry and in cement-rendered bahareque, a traditional cane-and-earth ' +
        'wall, in use group I, within programmes of **no more than 15 dwellings ' +
        'and under 3,000 m² of built area**. Outside those limits, or with ' +
        'another system, the house is designed the long way, through Título A.',
    },

    { tipo: 'titulo', texto: 'Time, cost, maintenance: what can honestly be said' },
    {
      tipo: 'nota',
      texto:
        'Here is the declaration this article has to make before the table: **I ' +
        'publish no cost per square metre by system, and no construction ' +
        'programme by system.** The figures circulating for the first ' +
        'contradict one another by a factor of two to three for the same city ' +
        'in the same year, and those for the second have no traceable source. ' +
        'What follows is a qualitative comparison and professional judgement, ' +
        'declared as such.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Confined or structural', 'Industrialised concrete', 'Steel framing or timber'],
      filas: [
        [
          '**Speed**',
          'Slow, and very tolerant of changes made along the way',
          'The fastest, and only if the design is frozen before work starts',
          'Fast to erect; slow if the sections do not arrive on time',
        ],
        [
          '**Labour**',
          'Available in any municipality in the country',
          'Crews trained in formwork, plus lifting equipment',
          'Scarce outside the larger cities',
        ],
        [
          '**Maintenance**',
          'Low, and anybody can carry out repairs',
          'Low, though a crack in a concrete wall is another conversation',
          'Depends entirely on the envelope keeping water out',
        ],
        [
          '**Thermal behaviour**',
          'High mass: good in a dry climate with cool nights, poor in a humid one',
          'High mass, with the same caveat',
          'Low mass: responds quickly, and demands insulation properly resolved',
        ],
        [
          '**Sound insulation**',
          'Good through mass, and for that reason taken for granted',
          'Good through mass',
          'Depends on the infill and the junction detail, not on the system',
        ],
        [
          '**Later remodelling**',
          'The worst: the wall is the structure',
          'The worst, and monolithic on top of that',
          'Good, provided you know which walls are load-bearing',
        ],
      ],
      nota:
        'A qualitative comparison. Every cell depends on the particular ' +
        'project, the municipality and who builds it; there is no public source ' +
        'that would let it be turned into numbers.',
    },
    {
      tipo: 'parrafo',
      texto:
        'My reading of that table is short: **the systems that win on speed ' +
        'lose on flexibility, and not by a little.** What industrialisation ' +
        'buys is a repeating cycle, and a repeating cycle demands that the ' +
        'design be closed before the first pour. That is good business across ' +
        'two hundred identical houses. In a single house it almost never is.',
    },

    { tipo: 'titulo', texto: 'The question nobody answers: taking a wall out ten years later' },
    {
      tipo: 'parrafo',
      texto:
        'This is where the comparison stops being academic. Nobody builds a ' +
        'house thinking about the remodelling, and almost everybody ends up ' +
        'doing one: a child arrives, another leaves, the closed kitchen stops ' +
        'making sense, the terrace becomes a study. The right question when ' +
        'choosing a system is not what the square metre costs today. **It is ' +
        'what can be taken out tomorrow.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the answer turns on one thing alone: **which way the load comes ' +
        'down**. The code defines it in two lines, in the title covering one- ' +
        'and two-storey houses.',
    },
    {
      tipo: 'cita',
      texto:
        'Partition walls — Walls that carry no load beyond their own weight and ' +
        'perform no structural function whatsoever.',
      fuente: 'NSR-10, Título E, definitions',
    },
    {
      tipo: 'diagrama',
      svg: MURO_PORTANTE_EN,
      titulo: 'The same wall, two systems',
      pie:
        'Schematic sections, not to scale. Rendered and painted, the two houses ' +
        'look identical. Studio drawing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And here is the point that gives this section its title, because it ' +
        'runs the opposite way to what almost everyone assumes. **In structural ' +
        'masonry and in industrialised concrete, every wall that matters is ' +
        'structure**: the system is cheap and fast precisely because it did ' +
        'away with the columns and beams, and what it did away with is what ' +
        'would have given you freedom later. **In a frame with infill walls the ' +
        'reverse happens**: it costs more at the outset and leaves the plan ' +
        'open for good, because the load never passed through the walls.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Confined masonry sits in the middle, and it is the most confusing case ' +
        'of all: a wall confined by small columns and tie beams **is** part of ' +
        'the seismic resisting system, while a partition wall in the same ' +
        'house, built from the same block, does nothing at all. Rendered and ' +
        'painted, they are identical. **Nobody can tell them apart by ' +
        'looking.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'The test for whether the work counts as minor comes from the code ' +
        'itself, and it is the one an engineer will apply: the structural ' +
        'system is deemed not to have been modified where repairs and minor ' +
        'changes are made **that affect neither the seismic resisting system ' +
        'nor the structural integrity** of the building. The whole difficulty ' +
        'lies in deciding whether that wall belongs to that system, and neither ' +
        'the owner nor the site foreman gets to decide it.',
    },

    { tipo: 'titulo', texto: 'And what the permit rules say' },
    {
      tipo: 'parrafo',
      texto:
        'The legal consequence is as clear as the technical one, and it sits in ' +
        'the decree on planning permits. There is a mode called ' +
        '**modificación**, defined as authorisation to vary the architectural ' +
        'or structural design of an existing building without increasing its ' +
        'built area, and another called **reforzamiento estructural**, for ' +
        'intervening in or strengthening the structure to bring it up to ' +
        'adequate levels of seismic safety.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On the other side sits what needs no permit at all. The definition of ' +
        'a repair of the kind called locativa is explicit about what it ' +
        'excludes, which is why I quote it in full.',
    },
    {
      tipo: 'cita',
      texto:
        'Locative repairs or improvements are understood to mean works whose ' +
        'purpose is to keep the property in proper conditions of hygiene and ' +
        'appearance without affecting its load-bearing structure, its interior ' +
        'layout, or its functional, formal or volumetric characteristics.',
      fuente: 'Decreto 1077 de 2015, article 2.2.6.1.1.10',
    },
    {
      tipo: 'nota',
      texto:
        'Note where the boundary lies, because almost everybody puts it in the ' +
        'wrong place. **It is not at "whether services are touched"** — ' +
        'replacing, improving or extending plumbing, drainage, electrical, ' +
        'telephone or gas services is expressly within locative repairs. It is ' +
        'at **the load-bearing structure and the interior layout**. Taking a ' +
        'wall out changes the interior layout even when the wall holds nothing ' +
        'up.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Translated into real life: removing a partition wall in a frame ' +
        'building is a modification, needing a design and a permit but no major ' +
        'structural calculation. Removing a load-bearing wall in structural ' +
        'masonry or in an industrialised system means intervening in the ' +
        'structure, and that calls for a structural design, an engineer who ' +
        'answers for it, and the corresponding permit mode. The subject has an ' +
        'article of its own: [structural strengthening, what the code requires ' +
        'and what the permit ' +
        'costs](/blog/reforzamiento-estructural-y-nsr-10).',
    },

    { tipo: 'titulo', texto: 'How to choose, in the right order' },
    {
      tipo: 'lista',
      items: [
        '**Start from the seismic hazard zone of your municipality, not from the price.** The table of systems has already ruled options out before you looked at a single quotation.',
        '**Ask yourself how many houses you are building.** Industrialisation wins when the project repeats. In a single house the advantage in cycle time rarely offsets the cost of the formwork or the rigidity it forces on the design.',
        '**Decide whether the plan is going to change.** If the answer is "probably", a frame with infill walls is worth the extra it costs. If the house is final, structural masonry is hard to beat.',
        '**Look at the climate before the catalogue.** High mass where the night cools; a light, ventilated envelope where it does not. The structural system and the thermal behaviour are chosen in the same conversation.',
        '**Ask for the structural drawing with the load-bearing walls marked, and keep it.** It is the document that decides, ten years on, whether the remodelling takes two weeks or two months. Asking for it today costs nothing.',
        '**Check that the labour exists in the municipality.** An excellent system with nobody able to build it properly is a bad system.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The closing declaration, the one this blog makes whenever it applies: ' +
        '**no ICONTEC technical standard is cited here by number.** Its ' +
        'catalogue is not publicly searchable and I could not read the text of ' +
        'a single one, so I do not repeat numbers that circulate without a ' +
        'source. Everything in this article that comes from regulation comes ' +
        'from NSR-10 and from Decreto 1077 de 2015, read in their own text.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is no best system. There is one that is best for your site, your ' +
        'municipality, your number of houses and your tolerance for a plan that ' +
        'stays fixed. If what you are putting together is the budget, carry on ' +
        'in [what it costs to build per square ' +
        'metre](/blog/cuanto-cuesta-construir-por-m2-en-colombia); if what you ' +
        'are putting together is a house in the countryside, in [what a country ' +
        'house costs](/blog/cuanto-cuesta-una-casa-campestre).',
    },
  ],
  fuentes: [
    {
      url: 'https://asosismica.org.co/decretos-modificatorios-nsr-10/',
      titulo: 'Amending decrees to NSR-10',
    },
  ],
}
