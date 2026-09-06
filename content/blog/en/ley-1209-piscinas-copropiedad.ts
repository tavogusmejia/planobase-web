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
 *
 * ---
 *
 * **Pasada del 6 de septiembre de 2026**, en paralelo con el español, por las
 * dos resoluciones nuevas. `superada por` → **superseded in substance by**,
 * nunca «repealed by», y por un motivo que el propio texto explica: no hay
 * cláusula derogatoria, la 1510 se quedó sin piso al caer el Decreto 2171 de
 * 2009. Escribir «repealed» sería afirmar en inglés algo que la norma no hizo.
 *
 * Este artículo es casi todo cifras dentro de tablas, que es donde más fácil se
 * cuela el separador español. La tabla del agua se rehízo entera y **todos sus
 * decimales van invertidos**: «6,8» es «6.8», «1,5 ppm» es «1.5 ppm», «−0,5» es
 * «−0.5», «1.200 mg/L» es «1,200 mg/L», «2.000 a 2.400 µS/cm» es «2,000 to
 * 2,400 µS/cm» y «1.000 cm³» es «1,000 cm³». En la tabla del IRAPI, «75,1 a
 * 100» es «75.1 to 100», «35,1 a 75» es «35.1 to 75» y «10,1 a 35» es «10.1 to
 * 35». Los porcentajes de la fórmula pierden el espacio: «45 %» es «45%».
 *
 * Vocabulario del agua, tomado tal cual de `en/piscina-de-sal-o-cloro` y
 * `en/mantenimiento-de-piscina-costo-mensual` para que las tres piezas nombren
 * igual lo mismo: `heterótrofos` → **heterotrophs**, `coliformes
 * termotolerantes` → **thermotolerant coliforms**, `estructuras similares` →
 * **similar structures**, `en horas de máxima ocupación` → **at peak
 * occupancy**, `contaminación fecal` → **faecal contamination**, `ooquistes o
 * quistes` → **oocysts or cysts**, `libro o registro sistematizado` → **log
 * book or computerised register**, `anexo técnico I` → **technical annex I**,
 * `cartelera` → **noticeboard**. Se conservan del propio artículo «Free
 * residual chlorine», «Oxidation-reduction potential» y «Langelier index».
 *
 * **IRAPI no se traduce y su sigla tampoco**: es el nombre de un índice
 * colombiano, como NSR-10. Se glosa entero la primera vez y luego va solo.
 * `no apta para contacto primario` → **not fit for primary contact**, que es la
 * frase que carga toda la sección: se repite igual en las tres filas de la
 * tabla, porque repetirla es justamente el hallazgo.
 *
 * Las citas literales de las dos resoluciones **se traducen**, como ya se hacía
 * con el parágrafo del Decreto 554: dejarlas en español dentro del inglés
 * obligaría al lector a saltárselas, y son la prueba de lo que se afirma.
 */
export const traduccion: TraduccionPost = {
  slug: 'ley-1209-piscinas-copropiedad',
  titulo: 'Ley 1209: what it really requires of a community with a pool',
  traducido: '2026-09-06',
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
    {
      tipo: 'nota',
      texto:
        'The applicable framework, as at September 2026: the two technical ' +
        'resolutions this article used to cite are no longer the framework. ' +
        '**Resolución 929 of 12 May 2026** superseded in substance Resolución ' +
        '1510 de 2011, and **Resolución 234 of 10 February 2026** now occupies ' +
        'the ground of Resolución 1618 de 2010. It is worth putting precisely, ' +
        'because the two are not the same thing: **Resolución 929 does not ' +
        'repeal Resolución 1510 by name.** Resolución 1510 lost its footing ' +
        'because it was made under Decreto 2171 de 2009, and that decree was ' +
        'repealed by Decreto 554 de 2015. It is superseded, not repealed. **Ley ' +
        '1209 itself has not changed a comma**, which is why nothing that ' +
        'follows changes its argument.',
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
        'checked the law, Decreto 554, Decreto 780, Resolución 1510 and ' +
        'Resolución 929 de 2026 which superseded it: it is in none of the five.',
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
        'articles. Resolución 929 de 2026 does carry figures — **0.90 m** ' +
        'minimum spacing between drains, covers of **at least four times the ' +
        'area of the discharge pipe** — but not one for the enclosure.',
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
        'Resolución 929 de 2026, by contrast, requires them of "the tanks of ' +
        'pools and similar structures", drawing no distinction by date, just as ' +
        'Resolución 1510 did before it.',
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
    {
      tipo: 'nota',
      texto:
        'What the new rule does bring, and it is the best budgetary news in the ' +
        'whole update for an older community: numeral 7 of Resolución 929 ' +
        '**expressly contemplates the tank built before it with a single ' +
        'suction drain**, and of that one it does not ask for a second drain. ' +
        'It asks for a vacuum release system, an emergency stop button and an ' +
        'anti-entrapment grating. In other words, a written route to compliance ' +
        'that **does not oblige anyone to open the pool shell**, which is by far ' +
        'the largest item. It is still the poorer solution — active rather than ' +
        'passive, with everything that carries and that is set out below — but ' +
        'it is in the rule, and it is there by name.',
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
      tipo: 'parrafo',
      texto:
        'And the new rule did not close the gap: it restated it. Numeral 7 of ' +
        'Resolución 929 de 2026 — eighteen years after the law — requires ' +
        'drains, anti-entrapment covers, a vacuum release system and a stop ' +
        'button that are "duly type-approved, **in accordance with the rule the ' +
        'health ministry is to issue for that purpose**", and for older pools ' +
        'it points once again to the first-party declaration of conformity of ' +
        'the supplier. The future is still the future.',
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
        'vacuum release system — and it applies to pools already built. That ' +
        'has not changed, because it sits in a statute. What did change in 2026 ' +
        'is the water side: the scope of Resolución 234 reaches premises "of ' +
        'collective use open to the general public and of restricted use not ' +
        'open to the general public", and **the single-family private pool is ' +
        'named in neither category**. The water quality parameters are no ' +
        'longer enforceable against it by that route. The two safety duties of ' +
        'Ley 1209 are.',
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
        'Resolución 234 de 2026 sets the parameters and — the part most ' +
        'often breached — **the frequencies**. The real control is not the ' +
        'state’s: its column, against every single parameter, reads "linked to ' +
        'risk factors". It is the control exercised by whoever is responsible ' +
        'for the pool, and much of it is daily.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What is measured', 'How often', 'Acceptable value'],
      filas: [
        ['Free residual chlorine', '**Daily**, at the start of the day and at peak occupancy', 'Pools: 1.5 ppm minimum, 2.0 to 4.0 ideal. Similar structures: 2.0 minimum, 3.0 to 5.0 ideal'],
        ['Combined chlorine (chloramines)', 'Daily', '**0.3 ppm** maximum in pools; 0.4 in similar structures'],
        ['pH', '**Daily**, at the start of the day and at peak occupancy', 'Between **6.8 and 7.3**'],
        ['Temperature', 'Daily, at least at the start of the day', '**40 °C** maximum'],
        ['Floating organic matter and sediment', 'Daily', '**Absent**'],
        ['Cyanuric acid', 'Weekly', '**15 ppm** maximum. It does not apply to an indoor pool: the result must come back as zero'],
        ['Calcium hardness', 'Weekly on site, and quarterly', '200 to 400 ideal; 700 maximum'],
        ['**Langelier index**', '**Quarterly**, or whenever the pH leaves the ideal range', 'Between **−0.5 and 0.5**; −0.3 to 0.3 ideal'],
        ['Total alkalinity', 'Quarterly, or whenever the pH is out of range', '80 to 120 ideal; 150 maximum'],
        ['Turbidity', 'Quarterly, at peak occupancy', '**Under 1 NTU** ideal'],
        ['Oxidation-reduction potential (ORP)', 'Quarterly', '**700 mV** — see the note below'],
        ['Dissolved solids and conductivity', 'Quarterly', 'TDS 1,000 to 1,200 mg/L; conductivity 2,000 to 2,400 µS/cm'],
        ['Heterotrophs, thermotolerant coliforms, *E. coli*', '**Quarterly**, at peak occupancy', 'Heterotrophs under 200 CFU/100 mL; the other two, **0**'],
        ['*Legionella*', '**Six-monthly** in heated or aerosolising pools; quarterly in similar structures', '**0** CFU/100 mL'],
        ['*Cryptosporidium* and *Giardia lamblia*', '**On faecal matter, during the event**', '**0** oocysts or cysts per 1,000 cm³'],
      ],
      nota:
        'Resolución 234 de 2026, technical annex I. The table separates ' +
        '**pools** from **similar structures** — hot tubs, spas, plunge pools ' +
        '— and the values do not always coincide: where there are two, both ' +
        'are given here. Chlorine applies "where chlorine-based disinfectants ' +
        'or their derivatives are used"; with bromine, the annex sets total ' +
        'bromine at 2.0 to 4.0 ppm in pools and 2.0 to 5.0 in similar ' +
        'structures. Cyanuric acid applies only with stabilised chlorine. And ' +
        'in peak season — school holidays, December and January, public ' +
        'festivities — **the quarterly frequency becomes monthly**.',
    },
    {
      tipo: 'nota',
      texto:
        'One figure has to be transcribed rather than corrected, because ' +
        'correcting it quietly would be inventing law: **the table in the annex ' +
        'places ORP in the maximum column, at 700 mV.** An oxidation-reduction ' +
        'potential is normally set as a floor — below a certain value the water ' +
        'does not oxidise — and that is how it read under the previous ' +
        'framework. Resolución 234 writes it as a ceiling. I found nothing in ' +
        'the articles that clears it up, so what the rule says stands here, and ' +
        'so does the tension. If that number moves a purchase of plant for you, ' +
        'go to the annex and ask the health authority for a ruling before you ' +
        'sign.',
    },
    {
      tipo: 'nota',
      texto:
        'The Langelier index has not changed, only the rule it belongs to: it ' +
        'is still **ISL = pH + CT + CD + CA − 12.1**, in the abbreviation the ' +
        'resolution uses, with the correction constant of 12.1 fixed by the ' +
        'resolution itself and the tables of ' +
        'coefficients in the annex. What did change is the frequency, which ' +
        'goes from weekly to **quarterly**, or to each time the pH leaves the ' +
        'ideal range, and that the calculation now has to be entered in the log ' +
        'book.',
    },
    {
      tipo: 'nota',
      texto:
        'Two duties that hardly any community meets and that an inspector ' +
        'checks in two minutes: **the log book or computerised register**, ' +
        'current and available, and the **monthly display in a visible place** ' +
        'of the laboratory results. It is a noticeboard beside the pool. It is ' +
        'not there. And the book now asks for a good deal more than is usually ' +
        'written down: volume and flow, chemicals used and in what quantity, ' +
        'backwashes, breakdowns and changes of plant, **volume of top-up ' +
        'water**, **hours of operation**, number of bathers, and the Langelier ' +
        'index calculation.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And here something this article used to assert has to be put right. ' +
        'Until 2026 this same section said the analyses had to be carried out ' +
        'by a laboratory accredited before **ONAC**, the national accreditation ' +
        'body, and that the chemical products had to hold an **INVIMA** health ' +
        'registration. I searched for both requirements, word by word, in ' +
        'Resolución 234 and in Resolución 929: **neither resolution names ONAC ' +
        'or INVIMA, not once.** What Resolución 234 does require is that the ' +
        'laboratory **demonstrate validation or verification of the methods** ' +
        'it uses — article 6, paragraph 3 — and that every chemical product ' +
        'carry a **technical data sheet and a safety data sheet**, labelled to ' +
        'the globally harmonised system — article 13. I put it with the caution ' +
        'it deserves: **their absence from these two resolutions does not prove ' +
        'the duty has gone from the statute book**; it may live in another rule ' +
        'I have not read. What I can state is what the new framework requires, ' +
        'and this is it.',
    },

    { tipo: 'titulo', texto: 'IRAPI: the new index that can leave your pool unfit' },
    {
      tipo: 'parrafo',
      texto:
        'This did not exist before 2026 and it is the most usable thing in the ' +
        'whole update for a management council. Resolución 234 creates the ' +
        '**Índice de Riesgo del Agua de Estanques de Piscinas y Estructuras ' +
        'Similares — IRAPI**, the pool water risk index, which turns the ' +
        'results of the analyses into a single number between 0 and 100. It is ' +
        'not a voluntary indicator: **whoever is responsible for the pool is ' +
        'required to calculate it**, tank by tank, and the health authority ' +
        'checks it during the inspection visit.',
    },
    {
      tipo: 'cita',
      texto: 'IRAPI = VCM (45%) + VCR (20%) + VAC (30%) + VCT (5%)',
      fuente: 'Resolución 234 de 2026, technical annex II',
    },
    {
      tipo: 'lista',
      items: [
        '**VCM**, the 45%: the microbiological characteristics — heterotrophs, *Escherichia coli*, thermotolerant coliforms and *Pseudomonas aeruginosa*.',
        '**VCR**, the 20%: the concentration of the disinfectant residual.',
        '**VAC**, the 30%: the characteristics tied to chlorination — pH, ORP and cyanuric acid.',
        '**VCT**, the 5%: turbidity.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Every parameter out of compliance contributes its risk score, and the ' +
        'nine scores add up to a hundred:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Parameter', 'Risk score if out of compliance'],
      filas: [
        ['Disinfectant residual', '20'],
        ['*Escherichia coli*', '15'],
        ['*Pseudomonas aeruginosa*', '15'],
        ['Oxidation-reduction potential (ORP)', '15'],
        ['Thermotolerant coliforms', '10'],
        ['pH', '10'],
        ['Heterotrophs', '5'],
        ['Cyanuric acid', '5'],
        ['Turbidity', '5'],
        ['**Total**', '**100**'],
      ],
      nota:
        'Resolución 234 de 2026, technical annex II. The disinfectant residual ' +
        'also carries an asymmetry worth knowing about: if the result comes ' +
        'back **above** the accepted value it scores **ten** points, and if it ' +
        'comes back **below**, **twenty**. Overshooting weighs half what ' +
        'falling short does, and that makes sense: over-chlorinated water ' +
        'irritates, under-chlorinated water infects.',
    },
    {
      tipo: 'parrafo',
      texto: 'And the result is classified like this:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['IRAPI', 'Risk level', 'What the responsible person must do'],
      filas: [
        ['75.1 to 100', '**High**', '**Water not fit for primary contact.** Corrective action plan immediately, calibration of plant and deep maintenance'],
        ['35.1 to 75', '**Medium**', '**Not fit.** Review of chemical dosing and preventive maintenance'],
        ['10.1 to 35', '**Low**', '**Not fit.** Inspection of the dosing plant, filter maintenance and calibration'],
        ['0 to 10', 'No risk', 'Water in optimal condition. Carry on with control and monitoring'],
      ],
      nota:
        'Resolución 234 de 2026, technical annex II. The health authority has a ' +
        'column of its own: at high risk it calls for an improvement plan with ' +
        'a timetable, makes an inspection visit, and notifies the responsible ' +
        'person, the mayor’s office, the municipal ombudsman and the municipal ' +
        'health secretariat.',
    },
    {
      tipo: 'nota',
      texto:
        'Read the third row again, because it is the part almost nobody has ' +
        'seen: **anything that is not 0 to 10 comes out of that table as "not ' +
        'fit for primary contact"**, and that includes the "low" level. An ' +
        'IRAPI of eleven — a single parameter out of range, and one of the ' +
        'lightest at that — already leaves the water declared unfit by the rule ' +
        'itself. It is not a suggestion for improvement: it is a grading an ' +
        'inspector can read off during the visit, and one the responsible ' +
        'person was required to have worked out beforehand.',
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
        '**Recurring costs:** a lifeguard for weekends and holidays, and quarterly laboratory analyses — monthly in peak season — plus the analyses triggered by a faecal contamination event, which arrive whenever they arrive and have to be budgeted for.',
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
        'Eleven questions. If any of them is answered no, there is a breach ' +
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
        'Is the log book or computerised register up to date, with the daily measurements, the hours of operation and the top-up water?',
        'Are this month’s laboratory results displayed on the noticeboard?',
        'Is there a certified lifeguard at weekends and in the school holidays?',
        'Has anybody worked out the IRAPI for each tank, and does the result sit between 0 and 10?',
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
