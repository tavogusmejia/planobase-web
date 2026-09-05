import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Ley 1209: qué obliga de verdad a una copropiedad con
 * piscina».
 *
 * El vocabulario de propiedad horizontal está fijado por el pilar de
 * patologías y por `reformar-en-propiedad-horizontal`, y se respeta entero:
 * **propiedad horizontal** conservada y glosada, `copropiedad` → community of
 * owners, `asamblea` → general meeting, `administrador` → building manager,
 * `bien común` → common property, `fondo de imprevistos` → contingency fund,
 * `cuota extraordinaria` → extraordinary levy, `expensa mensual necesaria` →
 * necessary monthly service charge, `reglamento de propiedad horizontal` →
 * propiedad horizontal by-laws, `consejo de administración` → management
 * council.
 *
 * Vocabulario de piscinas que esta pieza fija para el corpus: `cerramiento` →
 * enclosure —y no `fence`, porque la tesis del artículo es justamente que la
 * norma no describe una reja sino una barrera funcional—, `salvavidas` →
 * lifeguard, `salida de succión` → suction outlet, `cubierta
 * antiatrapamiento` → anti-entrapment cover, `sistema de liberación de vacío`
 * → vacuum release system, `alarma de inmersión` → immersion alarm, `paro
 * manual de la bomba` → manual pump stop, `cuarto de máquinas` → plant room,
 * `vaso` → pool shell, `rejilla` → grating, `bastón con gancho` → shepherd’s
 * crook, `flotador con cuerda` → lifebuoy with line, `citófono` → entryphone.
 *
 * **`homologado` → type-approved**, que es el término europeo exacto para lo
 * que aquí se discute: aprobación contra un reglamento técnico. Es la palabra
 * que sostiene la sección 5, porque `certified` habría dado por buena
 * precisamente la certificación que el artículo demuestra que no existe.
 *
 * **Las cuatro negaciones se traducen enteras y sin suavizar**: la ley no fija
 * dimensiones de cerramiento; un conjunto no necesita salvavidas permanente;
 * el Decreto 2171 está derogado; y el reglamento técnico de homologación nunca
 * se expidió, con la cautela del original —«la ausencia en un repositorio no
 * es prueba concluyente»— y sin quitarle fuerza a la conclusión.
 *
 * Separadores y unidades: «1,20 m» es «1.20 m», «0,90 m» es «0.90 m»,
 * «0,3 mg/L» es «0.3 mg/L», «1.000 salarios mínimos» es «1,000 minimum
 * wages» y «12,1» es «12.1». `UNT` es la sigla española de las unidades
 * nefelométricas de turbidez y va como `NTU`, que es la misma unidad.
 */
export const traduccion: TraduccionPost = {
  slug: 'ley-1209-piscinas-copropiedad',
  titulo: 'Ley 1209: what it really requires of a community with a pool',
  traducido: '2026-09-05',
  resumen:
    'Almost everything repeated about this law is wrong: it requires neither ' +
    'a 1.20 m enclosure nor a permanent lifeguard in a residential ' +
    'development. What it does require, article by article — and the ' +
    'technical gap that makes "type-approved device" mean almost nothing.',
  metaDescripcion:
    'What Ley 1209 de 2008 actually requires of a residential development ' +
    'with a pool, and what the building manager is answerable for.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Ley 1209 de 2008 — the Colombian statute on pool safety — has been ' +
        'in force for more than fifteen years and is still the worst-cited ' +
        'rule in the sector. Requirements it does not contain are attributed ' +
        'to it, others it does contain are ignored, and a decree repealed in ' +
        '2015 is quoted as its implementing regulation.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is what it says, read article by article. It takes in six ' +
        'things almost everybody repeats and that are false, and one thing ' +
        'almost nobody says and that is the gravest of them all.',
    },
    {
      tipo: 'nota',
      texto:
        'A starting fact worth being clear about: the law took effect in ' +
        'January 2009 and allowed **one year** to comply. That period ran out ' +
        'in January 2010 and there is no extension. A community of owners ' +
        'that does not comply today has been in breach for more than fifteen ' +
        'years.',
    },

    { tipo: 'titulo', texto: 'First: what kind of pool do you have' },
    {
      tipo: 'parrafo',
      texto:
        'Everything depends on this, and it is almost always classified ' +
        'wrongly. The law defines three different things:',
    },
    {
      tipo: 'lista',
      items: [
        '**Private pool:** the single-family pool and nothing else. A house.',
        '**Public use:** intended for the general public, with no restriction.',
        '**Restricted use:** for a defined group who must meet conditions in order to enter. The law expressly names **condominiums**, alongside clubs, hotels, schools and holiday resorts.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        '**The pool of a residential development is of restricted use, not of ' +
        'public use.** That distinction, bureaucratic as it sounds, decides ' +
        'which of the duties apply to it and which do not — and it is the ' +
        'source of half the errors in circulation.',
    },

    { tipo: 'titulo', texto: 'What it requires exactly, by type of pool' },
    {
      tipo: 'tabla',
      cabeceras: ['Duty', 'Public use', 'Residential development', 'House'],
      filas: [
        ['Enclosure with access control', 'Yes', '**Yes**', 'No'],
        ['Immersion alarm or motion sensor', 'Yes', '**Yes**, outside opening hours', '**Yes**'],
        ['Anti-entrapment cover on the drains', 'Yes', '**Yes**', 'No'],
        ['Vacuum release system', 'Yes', '**Yes**', '**Yes**'],
        ['Manual pump stop, visible and signposted', 'Yes', 'Yes', 'No'],
        [
          'Certified lifeguard',
          'Permanent',
          '**Only** at weekends, in school holidays, at events involving under-14s, or whenever more than 10 children are present at once',
          'No',
        ],
        ['First-aid kit, two lifebuoys with line and a shepherd’s crook', 'Yes', '**Yes**', 'No'],
        ['Telephone or entryphone, 24 hours', 'Yes', '**Yes**', 'No'],
        ['Depth marked at three points', 'Yes', '**Yes**', 'No'],
        ['Safety plan and rules of use', 'Yes', '**Yes**', 'No'],
        ['Municipal certificate of compliance', '**Yes**', 'Not required', 'No'],
      ],
      nota:
        'Ley 1209 de 2008, articles 3, 11, 12, 13 and 14, and Decreto 554 de ' +
        '2015 — today consolidated into Decreto 780 de 2016, articles ' +
        '2.8.7.1.1.1 onwards.',
    },
    {
      tipo: 'nota',
      texto:
        'The single-family house **is not left outside the law**, as is ' +
        'commonly believed. Article 3 imposes two duties on it — an immersion ' +
        'alarm and a vacuum release system — and imposes them on pools ' +
        'already built as well. The regulation confirms it with the word ' +
        '"únicamente", only: those two, and nothing more.',
    },

    { tipo: 'titulo', texto: 'The six false claims in circulation' },

    { tipo: 'titulo', texto: '1. "The enclosure must be 1.20 metres high"' },
    {
      tipo: 'parrafo',
      texto:
        '**False, and not by a small margin.** No Colombian rule sets a ' +
        'single dimension for the enclosure: not a height, not a spacing ' +
        'between bars, not a type of ironmongery, not a self-closing gate. I ' +
        'checked the law, Decreto 554, Decreto 780 and Resolución 1510: it is ' +
        'in none of them.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What article 5 says is purely functional: enclosures are "the ' +
        'barriers that prevent direct access to the place where the pools are ' +
        'situated", with access control. The figures in circulation come from ' +
        'United States standards and are quoted in Colombia as though they ' +
        'were law.',
    },
    {
      tipo: 'nota',
      texto:
        'The only numerical parameter for any device in the whole law is the ' +
        '**80 decibels** the immersion alarm has to produce. One, in nineteen ' +
        'articles.',
    },

    { tipo: 'titulo', texto: '2. "A residential development needs a permanent lifeguard"' },
    {
      tipo: 'parrafo',
      texto:
        '**False**, and this error costs money every month. Paragraph 1 of ' +
        'article 14 confines the duty of a residential development to four ' +
        'situations:',
    },
    {
      tipo: 'lista',
      items: [
        'Weekends.',
        'School holiday periods.',
        'Social events at the pool or around it involving children under fourteen.',
        '**Whenever more than ten children are there at once**, whatever the day.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The regulation confirms it and makes the distinction explicit: ' +
        '**private clubs** need one lifeguard per pool throughout their ' +
        'opening hours; **condominiums and residential developments**, only ' +
        'in those cases.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What is permanent for a residential development, with no exception ' +
        'for day or for season, is the **enclosure** and the **immersion ' +
        'alarm outside opening hours**. Many communities pay for a lifeguard ' +
        'from Monday to Friday and have no alarm. They are overspending on ' +
        'what the law does not ask for and breaching what it does.',
    },

    { tipo: 'titulo', texto: '3. "Decreto 2171 de 2009 is the implementing regulation"' },
    {
      tipo: 'parrafo',
      texto:
        '**False since 2015.** Article 20 of Decreto 554 de 2015 expressly ' +
        'repealed it. And Decreto 554 was itself consolidated in full into ' +
        'Decreto 780 de 2016, the single consolidated decree of the health ' +
        'sector.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The correct citation today is **Decreto 780 de 2016, articles ' +
        '2.8.7.1.1.1 onwards**. Citing 554 is not wrong: it is the source ' +
        'rule. Citing 2171 is, and it turns up constantly in suppliers’ ' +
        'quotations and on maintenance blogs.',
    },

    { tipo: 'titulo', texto: '4. "Every pool must have two drains"' },
    {
      tipo: 'parrafo',
      texto:
        '**Imprecise, and there is a real conflict of rules behind it.** ' +
        'Article 12 of the law requires two drains only of "the pools built ' +
        'from the entry into force onwards" — that is, from January 2009. ' +
        'Resolución 1510 de 2011, by contrast, requires them of "every tank".',
    },
    {
      tipo: 'parrafo',
      texto:
        'A ministerial resolution cannot widen the scope of a statute, but ' +
        'neither has this one been challenged in court. In practice: a 1980s ' +
        'development pool with a single drain is exempt under the law and is ' +
        'not exempt under the resolution. It is a grey area worth knowing ' +
        'about before you sit down to argue over a works budget.',
    },

    { tipo: 'titulo', texto: '5. "The devices have to be certified"' },
    {
      tipo: 'parrafo',
      texto:
        '**Misleading, and here lies the gravest point in the whole ' +
        'article.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'The regulation makes type-approval of the devices conditional on a ' +
        'technical regulation that the health ministry was to issue. That ' +
        'technical regulation defines the only things that matter ' +
        'technically: maximum velocity at the face of the grating, certified ' +
        'flow rate per cover, service life, a pull-off resistance test, and ' +
        'the specification of the vacuum release system.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In the meantime the decree itself provided a transitional way out: ' +
        'the devices **"shall be deemed type-approved on the first-party ' +
        'declaration of conformity of the supplier"**.',
    },
    {
      tipo: 'cita',
      texto:
        'So long as there are no conformity assessment bodies in Colombia ' +
        'accredited before the Organismo Nacional de Acreditación de ' +
        'Colombia to certify that the devices comply with the technical ' +
        'regulation to be issued by the Ministerio de Salud y Protección ' +
        'Social, they shall be deemed type-approved on the first-party ' +
        'declaration of conformity of the supplier.',
      fuente: 'Decreto 554 de 2015, article 8, paragraph',
    },
    {
      tipo: 'parrafo',
      texto:
        'I searched for that technical regulation in the complete normative ' +
        'repository of the health ministry — more than seven thousand ' +
        'documents — and **found no trace that it was ever issued**. The 2016 ' +
        'decree, eight years after the law, still writes it in the future ' +
        'tense: the regulation "to be issued".',
    },
    {
      tipo: 'nota',
      texto:
        'I put it with the caution it deserves: absence from a repository is ' +
        'not conclusive proof of non-existence. But the indication is strong, ' +
        'and the practical consequence is uncomfortable: **today, a ' +
        '"type-approved device" means the supplier signed a piece of paper ' +
        'saying the product complies.** There is no accredited laboratory, no ' +
        'flow-rate test, no third-party certification.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Colombia legislated the requirement and never legislated the ' +
        'performance criterion. A flat grating bolted over a four-inch drain ' +
        'formally complies with the law if the supplier signs the ' +
        'declaration.',
    },

    { tipo: 'titulo', texto: '6. "The law does not apply to private houses"' },
    {
      tipo: 'parrafo',
      texto:
        '**False.** It applies, with two duties — an immersion alarm and a ' +
        'vacuum release system — and it applies to pools already built. And ' +
        'the water quality resolution imposes on them the same parameters as ' +
        'on any other pool, even though state inspection of them is ' +
        'exceptional.',
    },

    { tipo: 'titulo', texto: 'Entrapment: why a single drain kills' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part that justifies everything else, and the part least ' +
        'understood.',
    },
    {
      tipo: 'parrafo',
      texto:
        'When a body seals a suction outlet, the working pressure of the pump ' +
        'turns into holding force. With a four-inch drain and a pump moving ' +
        'the flow rate the rule itself allows for that diameter, the force ' +
        'holding a child against the floor of the pool runs to hundreds of ' +
        'kilograms. **No adult pulls a child off it**, and the attempt at ' +
        'rescue usually makes matters worse.',
    },
    {
      tipo: 'parrafo',
      texto: 'The solutions, from the most robust to the least:',
    },
    {
      tipo: 'lista',
      items: [
        '**Hydraulically balanced twin suction outlets**, with the drains at least 0.90 m apart. It is a **passive** solution: if a body seals one, the other goes on admitting flow and the vacuum never forms at all. It does not depend on electronics, it cannot lose its settings, it has no battery. It is the best of them, and it is the one the rule requires.',
        '**An anti-entrapment cover** sized for the pump’s actual flow rate. It is the first barrier, but it breaks, it gets stolen, and it degrades with chlorine and sun. A missing grating is not a cosmetic defect: it reopens exactly the original risk.',
        '**A vacuum release system**, which detects the vacuum spike and stops the pump. It is **active**, and it is the one that fails most: it depends on calibration, on nobody having bypassed it, and on its being tested. **The Colombian rule requires no periodic test of this system at all.** That is, to my mind, the gravest blind spot in the regime.',
        '**A manual pump stop.** It does not prevent, it mitigates. And only if it is where the law says — "a visible place, signposted as such and freely accessible" — rather than inside the padlocked plant room, which is where it usually is.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The engineering rule that sums it all up: **never size a drain by ' +
        'the diameter of the pipe; size it by the velocity at the face and by ' +
        'the scenario of one outlet being completely blocked.** If the system ' +
        'does not survive a body sealing one drain, it is badly designed ' +
        'however up to date its paperwork may be.',
    },
    {
      tipo: 'parrafo',
      texto:
        'There are two further duties, from the rules of use, that hardly any ' +
        'community has in writing and that are compulsory: to prohibit entry ' +
        '"with chains, necklaces, shirts or similar items that allow ' +
        'mechanical entrapment", and to require a swimming cap and a costume ' +
        'in a material and style that avoid entrapment. These are not ' +
        'recommendations.',
    },

    { tipo: 'titulo', texto: 'The water: what has to be measured, and how often' },
    {
      tipo: 'parrafo',
      texto:
        'Resolución 1618 de 2010 sets the parameters and — the part most ' +
        'often breached — **the frequencies**. The real control is not the ' +
        'state’s, which takes one sample a year: it is the control exercised ' +
        'by whoever is responsible for the pool.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What is measured', 'How often', 'Acceptable value'],
      filas: [
        ['Free residual chlorine', 'Daily', '1 to 3 mg/L'],
        ['Combined chlorine (chloramines)', 'Daily', 'less than 0.3 mg/L'],
        ['Oxidation-reduction potential', 'Daily', '700 mV minimum'],
        ['Turbidity, colour, odour, clarity', 'Daily', 'Floor visible; turbidity 2 NTU'],
        ['pH and temperature', 'Weekly', 'pH between 7.0 and 8.0'],
        ['Alkalinity, hardness, cyanuric acid', 'Weekly', 'Alkalinity up to 140; cyanuric acid less than 100'],
        ['**Langelier index**', '**Weekly**', 'between −0.5 and +0.5'],
        ['Coliforms, *E. coli*, *P. aeruginosa*', 'Monthly', '**0** per 100 cm³'],
        ['*Cryptosporidium* and *Giardia*', 'Annual', '**0**'],
      ],
      nota:
        'Resolución 1618 de 2010, articles 5, 6, 9, 12 and 13. The Langelier ' +
        'index is not optional: the resolution carries the formula and the ' +
        'tables of coefficients, with a correction constant of 12.1 fixed by ' +
        'the rule itself.',
    },
    {
      tipo: 'nota',
      texto:
        'Two duties that hardly any community meets and that an inspector ' +
        'checks in two minutes: **the log book** with every analysis, current ' +
        'and available, and the **monthly display in a visible place** of the ' +
        'laboratory results. It is a noticeboard beside the pool. It is not ' +
        'there.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two further details that commonly fail: the analyses have to be ' +
        'carried out by a laboratory authorised or accredited before ONAC, ' +
        'the national accreditation body, and **the chemical products must ' +
        'hold an INVIMA health registration**. A supplier selling chlorine ' +
        'without one is outside the rules, and so is the community that buys ' +
        'it.',
    },

    { tipo: 'titulo', texto: 'The penalties: not one regime, but three' },
    {
      tipo: 'parrafo',
      texto:
        'People speak of "the Ley 1209 fine" as though it were the only risk. ' +
        'There are three parallel regimes, and the quickest of them is not ' +
        'the fine.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Regime', 'Who acts', 'What can happen'],
      filas: [
        [
          '**Ley 1209, article 16**',
          'Municipal and police authority',
          'A fine of 50 to 1,000 minimum wages and closure of up to 5 days for a first breach. A second breach within 6 months: 100 to 1,500 and closure of 5 to 15 days. A third: **permanent closure**',
        ],
        [
          '**Ley 9 de 1979, article 577**',
          'Health authority',
          'Successive fines **of up to 10,000 monthly minimum wages**, temporary or permanent closure, and safety measures of **immediate effect**',
        ],
        [
          '**Ley 1801 de 2016, article 38**',
          'Police inspector',
          '**Temporary suspension of the activity**, on the spot. A repeat within a year: **permanent suspension**',
        ],
      ],
      nota:
        'The health ceiling is an order of magnitude above that of Ley 1209 ' +
        'itself. And paying the fine releases nobody from carrying out the ' +
        'works ordered, nor from civil or criminal liability.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The most dangerous route in operational terms is the third: ' +
        '**anybody can call the police** because children are using a pool ' +
        'that does not comply, and the inspector can suspend the activity on ' +
        'the spot, with no prior proceedings. It is not the fine that arrives ' +
        'first: it is the closure.',
    },
    {
      tipo: 'nota',
      texto:
        'A defect of legislative drafting worth knowing about: article 16 ' +
        'says "statutory minimum wages in force" without saying whether they ' +
        'are monthly or daily. The difference between one reading and the ' +
        'other is a factor of thirty, and I found neither rule nor case law ' +
        'that settles it.',
    },

    { tipo: 'titulo', texto: 'What the building manager is answerable for' },
    {
      tipo: 'parrafo',
      texto:
        'Here is the sentence every building manager should read once a year, ' +
        'and it sits in Ley 675, not in Ley 1209:',
    },
    {
      tipo: 'cita',
      texto:
        'Managers shall be liable for the loss they cause, through wilful ' +
        'misconduct or through slight or gross negligence, to the legal ' +
        'person, to the owners or to third parties. Slight negligence on the ' +
        'part of the manager shall be presumed in cases of failure to perform ' +
        'or of exceeding their functions, of breach of the law or of the ' +
        'propiedad horizontal by-laws.',
      fuente: 'Ley 675 de 2001, article 50',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read that slowly. **If the pool does not comply with the law and an ' +
        'accident happens, the manager’s negligence is presumed.** It does ' +
        'not have to be proved: it is the manager who has to rebut it. The ' +
        'burden of proof reverses on the bare fact of the breach of the law.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And it meshes with two further things: the statutory purpose of the ' +
        'legal person includes "complying with the law and securing ' +
        'compliance with it", and among the manager’s functions is "caring ' +
        'for and watching over the common property". The pool is common ' +
        'property.',
    },

    { tipo: 'titulo', texto: 'If the general meeting will not pay' },
    {
      tipo: 'parrafo',
      texto:
        'This is the real scenario, and the statute gives more room than is ' +
        'usually used.',
    },
    {
      tipo: 'lista',
      items: [
        '**The contingency fund comes first.** The statute allows an additional extraordinary levy to be approved only **once the resources of the fund prove insufficient**. That is the order the law sets, not an option.',
        '**The 70% majority does not always apply.** It is triggered only where the extraordinary levy exceeds four times the necessary monthly service charge. Below that threshold a **simple majority** is enough. Many of these upgrades fit below it.',
        '**The manager can challenge the decision.** The statute expressly empowers the manager to challenge decisions of the general meeting that do not conform to legal requirements. A decision refusing the funds needed to comply with a mandatory safety law is a natural candidate.',
        '**And the manager can have it minuted.** Against a presumption of negligence, having warned, convened and challenged in writing is the only real defence left.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'If the meeting still refuses, the clean way out is to **close the ' +
        'pool**. It is exactly what the police authority will do, and doing ' +
        'it first protects everybody — starting with the manager.',
    },

    { tipo: 'titulo', texto: 'What it costs to come into compliance' },
    {
      tipo: 'parrafo',
      texto:
        'I am not going to give a figure, and I want to explain why: **there ' +
        'is no official or professional-body source in Colombia with prices ' +
        'for bringing a pool into line with this law.** The quotations in ' +
        'circulation come from suppliers with a direct interest in the ' +
        'number. What can be given is the structure of the cost, which ' +
        'follows from the duties themselves:',
    },
    {
      tipo: 'lista',
      items: [
        '**A measured survey and technical drawings** signed by a professional with a current licence. In most communities **these drawings do not exist** and have to be produced from scratch.',
        '**Work on the pool shell** for the second drain, where it applies: emptying, partial demolition of the floor, pipework, hydraulic balancing and re-waterproofing. It is by far the largest item, and it is the one that makes meetings say no.',
        'Anti-entrapment covers for every suction outlet.',
        'A vacuum release system, with its electrical and hydraulic installation.',
        'A manual emergency stop, signposted and accessible.',
        'A self-contained immersion alarm, of at least 80 dB.',
        'An enclosure with access control.',
        'Depth signage and marking of the changes of level on the floor.',
        'Equipment: two lifebuoys with line, a shepherd’s crook, an entryphone, and a complete first-aid kit — which the rule itemises, and which runs to a water rescue spineboard, a cervical collar and oxygen therapy.',
        '**Recurring costs:** a lifeguard for weekends and holidays, and monthly and annual laboratory analyses.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The cost varies by more than an order of magnitude on a single fact: ' +
        '**whether the shell has to be opened or not**. Any figure you are ' +
        'given without the drawings of your pool having been produced first ' +
        'is advertising, not a budget.',
    },

    { tipo: 'titulo', texto: 'A quick check, for the management council' },
    {
      tipo: 'parrafo',
      texto:
        'Ten questions. If any of them is answered no, there is a breach ' +
        'today:',
    },
    {
      tipo: 'lista',
      items: [
        'Is there an enclosure with access control, closed when the pool is not in service?',
        'Is there an immersion alarm working outside opening hours?',
        'Does every drain have its anti-entrapment cover, complete and uncracked?',
        'Is there a vacuum release system, and has anybody ever tested it?',
        'Is the manual pump stop outside the plant room, visible and signposted?',
        'Do the safety plan and the rules of use exist, in writing?',
        'Do the rules prohibit entry with chains, necklaces and loose clothing?',
        'Is the log book up to date with the daily and weekly measurements?',
        'Are this month’s laboratory results displayed on the noticeboard?',
        'Is there a certified lifeguard at weekends and in the school holidays?',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Everything above is transcribed from the official texts in force. ' +
        'The amounts of the fines are given in minimum wages because their ' +
        'value in pesos changes every year.',
    },
  ],
}
