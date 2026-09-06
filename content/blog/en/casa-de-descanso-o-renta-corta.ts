import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Casa de descanso o renta corta: qué cambia en el diseño».
 *
 * Cuidados propios de esta pieza:
 *
 * 1. **Los separadores.** «2,5 por mil» pasa a «2.5 per thousand», «5.000 m²»
 *    a «5,000 m²» y «1.000 m s. n. m.» a «1,000 m a.s.l.». Aquí no hay tabla
 *    de cifras, pero las tres aparecen dentro de prosa y son igual de fáciles
 *    de estropear.
 * 2. **Los nombres de las normas colombianas no se traducen**: Ley 2068 de
 *    2020, Ley 1558 de 2012, Decreto 1077 de 2015, Ley 1209. «Registro
 *    Nacional de Turismo» tampoco: es el nombre del registro y con él se
 *    tramita.
 * 3. **«Vivienda turística» se deja y se glosa**, porque es la categoría legal
 *    exacta y traducirla la desdibujaría.
 */
export const traduccion: TraduccionPost = {
  slug: 'casa-de-descanso-o-renta-corta',
  titulo: 'Holiday home or short-let: what changes in the design',
  traducido: '2026-08-31',
  resumen:
    'The same plan, the same budget and the same plot give you two different ' +
    'houses depending on who sleeps in them. And there is a line — thirty ' +
    'days — beyond which the difference stops being about brief and starts ' +
    'being about legal status.',
  metaDescripcion:
    'What changes in the design of a country house meant for short lets, and ' +
    'what Colombian law requires once the rental drops below thirty days.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Two commissions arriving with the same sentence — «a country house, ' +
        'three bedrooms, with a pool» — can be two completely different ' +
        'projects. What separates them is neither style nor budget: it is who ' +
        'will be sleeping there, and how often.',
    },
    {
      tipo: 'parrafo',
      texto:
        'A family holiday home gets used thirty or forty nights a year, always ' +
        'by the same people, who leave their things and come back. A short-let ' +
        'house gets used far more nights, by different people every time, who ' +
        'arrive with nothing and leave nothing behind. And past a certain ' +
        'point, the second one stops being a house in the eyes of the law.',
    },
    {
      tipo: 'nota',
      texto:
        'This article is about **brief**, not about style. Whatever is code is ' +
        'cited to the article; whatever is professional judgement is labelled ' +
        'as such and can be told apart at a glance. What decides what may be ' +
        'built on the plot is another conversation, and it is in [what you can ' +
        'build on rural land](/blog/que-puedo-construir-en-suelo-rural).',
    },

    { tipo: 'titulo', texto: 'The line hardly anyone knows exists: thirty days' },
    {
      tipo: 'parrafo',
      texto:
        'It is neither a market convention nor a platform rule. It is a legal ' +
        'definition, and it is written into the law that sets who pays the ' +
        'tourism levy:',
    },
    {
      tipo: 'cita',
      texto:
        'For the purposes of this law, tourist housing services are deemed to ' +
        'be provided by natural or legal persons whose activity is to let or ' +
        'sublet, for periods of under 30 days, with or without ancillary ' +
        'services, real property of their own or of third parties […]. It shall ' +
        'be presumed as a matter of fact that anyone found letting more than ' +
        'one property, their own or a third party’s, for periods of under 30 ' +
        'days is a tourism service provider.',
      fuente:
        'Ley 1101 de 2006, art. 3, paragraph 1, as worded by art. 37 of Ley ' +
        '2068 de 2020',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two things sit inside that. First: **the threshold is the length of ' +
        'the booking, not the number of guests nor the price.** Second, and ' +
        'seldom quoted: there is a **presumption of fact** against anyone found ' +
        'letting more than one property on those terms. You do not declare ' +
        'yourself a provider; you simply are one, and the burden of showing ' +
        'otherwise flips.',
    },
    {
      tipo: 'nota',
      texto:
        'And registration comes **first**, not afterwards. The legal definition ' +
        'of a provider ends on a sentence that allows no gentle reading: a ' +
        'tourism service provider «shall register with the Registro Nacional de ' +
        'Turismo prior to providing tourism services». Trading without that ' +
        'registration is a defined infringement, penalised by the ' +
        'Superintendencia de Industria y Comercio, which may also **cancel the ' +
        'registration for up to five years**.',
    },

    { tipo: 'titulo', texto: 'What switches on when you cross that line' },
    {
      tipo: 'parrafo',
      texto:
        'The house does not change. What changes is the bundle of duties ' +
        'travelling with it, and they are worth knowing before designing, ' +
        'because three of the five have physical consequences:',
    },
    {
      tipo: 'lista',
      items: [
        '**Active, current registration in the Registro Nacional de Turismo**, in place before the first night is sold.',
        '**Liability insurance covering damage to guests and third parties.** The law lists its minimum cover: death, permanent disability, temporary disability, injury, damage to third-party property and medical expenses. It is a duty on tourist accommodation providers, not a broker’s suggestion.',
        '**A tourism levy of 2.5 per thousand on operating income.** That is the rate in force, as worded by the 2023 national development plan act.',
        '**A guest register.** Article 22 obliges accommodation providers to keep one through the Tarjeta de Registro de Alojamiento, on the system the government provides, and that card «is proof of the lodging contract». That implies a place and a moment for checking in: a reception desk, even if it is only a table.',
        '**Platforms are required to take you down if you have no registration.** It is not discretionary: the law orders them not to publish, or to remove, listings from providers without active registration, and makes them answerable to the consumer for misleading advertising if they allow it.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'A note on currency, because this ground is moving. The framework cited ' +
        'here is Ley 2068 de 2020 and its 2021 implementing decree, compiled ' +
        'into the single decree for the trade sector. **A draft decree was ' +
        'published in 2026** that would partly replace that title as regards ' +
        'the Registro Nacional de Turismo and the platforms. As at the date of ' +
        'this article it remains a draft, not law. Check before filing.',
    },

    { tipo: 'titulo', texto: 'If the house sits inside a condominium' },
    {
      tipo: 'parrafo',
      texto:
        'Here lies a trap that has cost litigation: **the condominium rules ' +
        'have to authorise that use.** It is not enough for tourism law to ' +
        'allow it, nor to hold current registration.',
    },
    {
      tipo: 'cita',
      texto:
        'It shall be the duty of the managers of properties held under the ' +
        'condominium regime in which tourist housing services are provided to ' +
        'report to the Superintendencia de Industria y Comercio the provision ' +
        'of such services […] where these are not authorised by the rules for ' +
        'that use, or are not entered in the Registro Nacional de Turismo.',
      fuente:
        'Ley 1558 de 2012, art. 34, as amended by art. 144 of Decreto 2106 de ' +
        '2019',
    },
    {
      tipo: 'nota',
      texto:
        'The same article closes the circle from both ends. A **manager** who ' +
        'fails to report faces a fine of up to three monthly minimum wages. An ' +
        '**owner** trading without the authorisation in the rules, duly ' +
        'recorded at the land registry, falls under the penalties of the ' +
        'condominium act. And on registering, one must **declare** that the ' +
        'private units are authorised by the rules. How rules get changed is in ' +
        '[altering a flat in a ' +
        'condominium](/blog/reformar-en-propiedad-horizontal).',
    },

    { tipo: 'titulo', texto: 'The local plan comes before the design: housing is not lodging' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part nearly everyone skips, and the only one that can make ' +
        'a project impossible. On rural land, areas set aside for **country ' +
        'housing** are a category the local plan delimits expressly, with ' +
        'subdivision rules of their own. Lodging tourists is a different use, ' +
        'and it has a door of its own:',
    },
    {
      tipo: 'cita',
      texto:
        'Ecotourism, ethnotourism, agritourism and water-tourism services may ' +
        'be developed anywhere on rural land, in accordance with the rules on ' +
        'uses and treatments adopted in the territorial plan or in the rural ' +
        'planning unit.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.2.2.2.4, paragraph',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it slowly, because it has two halves and the second is rarely ' +
        'quoted. **«Anywhere on rural land»** is a broad enabling clause. **«In ' +
        'accordance with the rules on uses and treatments adopted in the ' +
        'territorial plan»** is the condition handing it back to the ' +
        'municipality. It is not a national permission: it is a door the local ' +
        'plan opens or shuts.',
    },
    {
      tipo: 'nota',
      texto:
        'And there is a ceiling that surprises anyone thinking big. On ' +
        '**suburban** rural land, commercial and service projects above 5,000 ' +
        'm² of floor area are allowed only in areas mapped for that use in the ' +
        'local plan, with a site coverage that **may not exceed 30% of the ' +
        'plot**, and «in no case» on non-suburban rural land. A house never ' +
        'reaches that; a lodging venture that grows does.',
    },
    {
      tipo: 'nota',
      texto:
        'What to ask in writing at the planning office, before drawing ' +
        'anything: **whether tourist accommodation is permitted, conditional or ' +
        'prohibited in the land category of the plot**, and if the category is ' +
        'country housing, what that particular plan understands by ecotourism ' +
        'or agritourism services. I do not publish the answer because there are ' +
        'over a thousand local plans in the country and none stands in for ' +
        'another.',
    },

    { tipo: 'titulo', texto: 'What changes in the design' },
    {
      tipo: 'parrafo',
      texto:
        'From here on this is **this practice’s judgement**, drawn from built ' +
        'work and from commissions rather than from code. It is said plainly ' +
        'because no published source backs it, and because the earlier part ' +
        'does have one.',
    },

    { tipo: 'titulo', texto: 'The house stands empty most of the year' },
    {
      tipo: 'parrafo',
      texto:
        'It is the condition governing both cases, holiday home and short-let, ' +
        'and the one least often designed for. A closed house is not at rest: ' +
        'it is working on its own.',
    },
    {
      tipo: 'lista',
      items: [
        '**Ventilation has to work with the house shut.** In a hot, humid climate, a sealed house grows mould in the places nobody sees within three weeks. High-level vents, a ventilated ridge and wardrobes that breathe are worth more than a dehumidifier nobody switches on.',
        '**Anything that cannot be shut without a key is surplus.** Every point requiring somebody to go and operate it is a point that will fail.',
        '**Finishes age differently without use.** Unventilated timber and unwashed silicone seals degrade faster in an empty house than in a lived-in one.',
        '**The garden does not wait.** In a hot climate, three months without maintenance erase the landscape design. Either there is automatic irrigation and somebody to cut, or the design has to survive neglect.',
      ],
    },

    { tipo: 'titulo', texto: 'Water and drainage are sized on the peak' },
    {
      tipo: 'parrafo',
      texto:
        'Here the difference between the two houses is arithmetic. The national ' +
        'technical code allots water **per person**, and the maximum depends on ' +
        'altitude: 140 litres per person per day below 1,000 m a.s.l., 130 ' +
        'between 1,000 and 2,000, and 120 above. A three-bedroom short-let can ' +
        'sleep eight people half the year; the same house as a family retreat ' +
        'sleeps four, for forty nights.',
    },
    {
      tipo: 'nota',
      texto:
        'The consequence is double and pulls both ways. **The system is sized ' +
        'on the peak** — tank, pumping and infiltration field — and that costs ' +
        'money. But **biological treatment suffers from intermittency**: a ' +
        'septic tank fed in bursts and left empty between them will not hold ' +
        'its bacterial population. How the whole train is sized and which ' +
        'permit it needs is in [wastewater with no ' +
        'sewer](/blog/aguas-residuales-sin-alcantarillado), and where the water ' +
        'comes from is in [water in the ' +
        'countryside](/blog/agua-en-el-campo-que-permiso-necesita).',
    },

    { tipo: 'titulo', texto: 'Security: the problem is not the burglar, it is the absence' },
    {
      tipo: 'lista',
      items: [
        '**A core that can be locked.** A room or store with a key, off the guest route, where the owner’s things live. It is the detail most often asked for afterwards and worst resolved afterwards.',
        '**Fencing and sightlines before alarms.** On a rural plot an alarm summons somebody forty minutes away. Useful deterrence is physical and comes from the siting: how the house is seen, and how it is reached.',
        '**Power and water with some autonomy.** Not a luxury: a three-day outage with nobody there turns a full fridge into a cleaning problem.',
        '**Entrances are designed around keys that do not exist.** Code locks, or a key safe, or somebody in the village with a set. Choosing changes the door, not just the lock.',
      ],
    },

    { tipo: 'titulo', texto: 'Maintenance from a distance' },
    {
      tipo: 'lista',
      items: [
        '**Everything needing inspection has to be reachable without a ladder.** Access chambers, filters, distribution boards and stopcocks, grouped and labelled, or nobody will inspect them.',
        '**One services panel in one place.** When the person going to look is a neighbour rather than a technician, the difference between «shut that valve» and «find the valve» is measured in hours.',
        '**Separate metering for whatever can leak.** A water meter of its own for the pool or the irrigation turns an odd bill into a diagnosis.',
        '**The maintenance schedule is handed over with the house.** What gets checked, how often and by whom. It is the part of the project most appreciated two years later.',
      ],
    },

    { tipo: 'titulo', texto: 'And what changes only if it will be let' },
    {
      tipo: 'lista',
      items: [
        '**The guest route separates from the house route.** Arrival, luggage and departure one way; dirty linen, refuse and storage the other. Where they cross, every turnaround shows it.',
        '**Bathrooms outrank bedrooms.** In a short-let, one bathroom per bedroom stops being a luxury and becomes a condition, and that changes the plumbing and the drainage before it changes the plan.',
        '**Turnaround finishes, not own-home finishes.** Surfaces that clean fast, protected corners, floors that forgive. It is not about making it ugly; it is that cleaning between guests takes two hours, not two days.',
        '**A kitchen for cooking twice**, not a kitchen from a magazine. Fewer appliances, tougher ones, and lockable storage for the owner’s things.',
        '**Somewhere to receive people and keep the guest register.** The law requires the register; the design has to give it a place, even if it is a console by the door.',
        '**Noise between bedrooms.** People who do not know each other sleep worse. Acoustic separation between rooms is the number one complaint and the cheapest thing to prevent on paper.',
      ],
    },

    { tipo: 'titulo', texto: 'The pool, which may change category with the use' },
    {
      tipo: 'parrafo',
      texto:
        'Worth raising as an open question, because I am not going to settle it ' +
        'here. Ley 1209 defines a **private** pool as «exclusively the ' +
        'single-family one», and among **restricted-use** pools it expressly ' +
        'names hotels and holiday centres. A single-family house let by the ' +
        'night to strangers falls at an intermediate point the text does not ' +
        'resolve.',
    },
    {
      tipo: 'nota',
      texto:
        'The prudent course, and the one this practice recommends, is to ' +
        '**design to the higher standard from the outset**: the two safety ' +
        'duties the law imposes even on a private pool are not negotiable, and ' +
        'the rest are far cheaper to provide for than to retrofit. What the law ' +
        'actually requires and what it does not, article by article, is in [Ley ' +
        '1209](/blog/ley-1209-piscinas-copropiedad).',
    },

    { tipo: 'titulo', texto: 'The two houses, side by side' },
    {
      tipo: 'tabla',
      cabeceras: ['Decision', 'Holiday home', 'Short-let'],
      filas: [
        ['Who sleeps there', 'The same people, few nights a year', 'Strangers, many nights a year'],
        ['Bedrooms and bathrooms', 'To suit the family; shared bathrooms are fine', 'A bathroom per bedroom stops being optional'],
        ['Storage', 'The whole house belongs to the owner', 'A locked core, off the guest route'],
        ['Finishes', 'Chosen on taste and durability', 'Chosen on cleaning speed and toughness'],
        ['Water and drainage', 'Moderate peak, very intermittent use', 'High, frequent peak: it drives the sizing'],
        ['Entry', 'The owner’s keys', 'Handover without anyone present: code, key safe or manager'],
        ['Paperwork', 'None extra', 'Tourism registration, insurance, levy and guest register'],
        ['Planning', 'Residential use', 'Lodging use: decided by the local plan, not by tourism law'],
      ],
      nota:
        'The last two rows are code cited in this article. The first six are ' +
        '**this practice’s judgement**.',
    },

    { tipo: 'titulo', texto: 'How to order the decision' },
    {
      tipo: 'lista',
      items: [
        '**Settle the use before the plan.** It cannot be left until after the drawings: it changes bathrooms, circulation, drainage and finishes.',
        '**Ask the planning office in writing** whether tourist accommodation is permitted in the land category of the plot, and on what conditions.',
        '**In a condominium, read the rules before buying.** Rules that do not authorise it are a problem settled at a general meeting, and general meetings keep no calendar.',
        '**Size water and drainage on the real peak guest count**, not on the bedroom count.',
        '**Draw the owner’s locked core into the very first sketch.** Added later it always ends up as a room without a window.',
        '**If you are going to let, treat registration, insurance and the levy as part of the project**, not as later paperwork. Registration comes before the first night.',
        '**And if you are torn between the two**, design for short-letting and use it as a holiday home. The reverse route calls for building work.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'That last one is the most useful advice in the whole article, and the ' +
        'cheapest: **a house designed to receive strangers works perfectly well ' +
        'for receiving family.** The other way round it does not. And the ' +
        'decision to let almost never gets taken before building — it gets ' +
        'taken three years later, when it can no longer be put right without ' +
        'demolition.',
    },
  ],
  fuentes: [
    {
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2068_2020.html',
      titulo:
        'Ley 2068 de 2020, the general tourism act: definition of a provider and prior registration, the lodging registration card, liability insurance, the tourism levy, who pays it and the definition of tourist housing, platform duties, and infringements and penalties',
    },
    {
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48321',
      titulo:
        'Ley 1558 de 2012, article 34: duties of condominium managers where tourist housing services are provided',
    },
    {
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      titulo:
        'Decreto 1077 de 2015: rural land categories, restricted-development categories, and rules for commercial and service uses on suburban rural land',
    },
  ],
}
