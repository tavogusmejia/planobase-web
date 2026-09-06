import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Jacuzzi de obra o portátil: carga, desagüe y requisitos
 * eléctricos».
 *
 * **`cubierta antiatrapamiento` → anti-entrapment cover**, exactamente como ya
 * lo fija `en/ley-1209-piscinas-copropiedad.ts`. No se introduce ningún término
 * nuevo para ese dispositivo: la nota de vocabulario del artículo distingue la
 * función normativa —impedir la retención por succión— del efecto hidráulico que
 * describen los catálogos, y esa distinción se traduce entera porque es el punto
 * de la nota.
 *
 * Resto del vocabulario, heredado o fijado aquí: `estructuras similares` →
 * similar structures —la categoría legal que mete al spa en el régimen—,
 * `jacuzzi de obra` → built-in spa, `jacuzzi portátil` → portable spa,
 * `tina de hidromasaje` → whirlpool bath, `conexión equipotencial` →
 * equipotential bonding, `superficie del perímetro` → perimeter surface,
 * `medios de desconexión` → disconnecting means, `interruptor diferencial` /
 * `interruptor de falla a tierra` → residual-current device y ground-fault
 * circuit interrupter según cuál cite la norma, `tensión de seguridad` → safety
 * voltage, `corriente de disparo` → tripping current, `transformador de
 * aislamiento` → isolating transformer, `soplador` → blower, `aforo` → bather
 * load, `vertimiento no doméstico` → non-domestic discharge, `casco` → shell.
 *
 * Los nombres de norma no se traducen: Ley 1209 de 2008, Resolución 929 de 2026,
 * RETIE, Resolución 40284 de 2026, NTC 2050, NSR-10. *Pseudomonas aeruginosa* va
 * en cursiva en los dos idiomas.
 *
 * Separadores: «1.500 litros» es «1,500 litres», «1.000 kg/m³» es «1,000 kg/m³»,
 * «48.000 litros» es «48,000 litres», «2.250 kg» es «2,250 kg»; y al revés
 * «2,00 × 2,00 m» es «2.00 × 2.00 m», «5,5 kN/m²» es «5.5 kN/m²», «1,8 kN/m²» es
 * «1.8 kN/m²», «0,90 m» es «0.90 m», «0,5 horas» es «0.5 hours». El espacio
 * antes del `%` desaparece en toda la tabla de corriente de disparo: «98,5 %» es
 * «98.5%», «92,5 %» es «92.5%», «0 %» es «0%».
 */
export const traduccion: TraduccionPost = {
  slug: 'jacuzzi-de-obra-o-portatil',
  titulo: 'A built-in or a portable spa: load, drainage and electrical requirements',
  traducido: '2026-09-05',
  resumen:
    'The word "portable" makes you think of an appliance. It is two tonnes on ' +
    'four square metres, water at 40 °C and electricity, all at once. Since ' +
    '2026 Colombian rules finally name it.',
  metaDescripcion:
    'What load a spa imposes, how it is drained, and what RETIE requires on ' +
    'distances, RCDs and bonding. Built-in against portable.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The word "portable" does enormous damage in this subject. It suggests an ' +
        'appliance: it arrives on a lorry, you put it on the terrace, you plug it ' +
        'in. And what arrives on that lorry is a good two tonnes concentrated on ' +
        'four square metres, with water at forty degrees and an electrical supply ' +
        'inside it, which is the worst combination of hazards in the house.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The choice between a built-in spa and a portable one is almost always ' +
        'made on price, and almost always made before looking at the three things ' +
        'that really decide it: **the load, the drainage and the electrical ' +
        'installation**. This article is about those three.',
    },
    {
      tipo: 'nota',
      texto:
        'First, a change that alters the framework: until a few months ago **no ' +
        'Colombian rule named the spa at all.** Neither Ley 1209, nor Resolución ' +
        '1510 de 2011, nor 1618 de 2010 used the words "spa", "jacuzzi" or ' +
        '"hidromasaje". They were covered by an ellipsis — "estructuras ' +
        'similares", similar structures — that none of the three defined. ' +
        '**Resolución 929 de 2026** finally defines it.',
    },
    {
      tipo: 'cita',
      texto:
        'Similar structures: engineering or architectural works analogous to ' +
        'pools, whose purpose is generally recreational or therapeutic use. They ' +
        'take in a range of installations of which the reference cases are spas, ' +
        'whirlpool baths or tubs, hydrotherapy pools, among others.',
      fuente: 'Resolución 929 de 2026, technical annexe, chapter I, definition 11',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is not a point of vocabulary. It means that **your spa is inside the ' +
        'regime**, with its duties on twin drains, safety devices, water quality ' +
        'and turnover. Anyone telling you that "all that is for pools" is working ' +
        'from the previous rules.',
    },

    { tipo: 'titulo', texto: 'First: the load, and the arithmetic is in plain sight' },
    {
      tipo: 'parrafo',
      texto:
        'This is what surprises people most and the easiest thing to check, so ' +
        'here is the whole calculation so that you can redo it with the figures ' +
        'for your own unit. Take an ordinary portable spa, 2.00 × 2.00 m, with a ' +
        'capacity of 1,500 litres and six seats:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Item', 'Arithmetic', 'Weight'],
      filas: [
        ['Water', '1,500 L at 1,000 kg/m³', '1,500 kg'],
        ['Shell, insulation, pump, blower and heater', 'manufacturer’s estimate', '≈ 300 kg'],
        ['Six people', '6 × 75 kg', '450 kg'],
        ['**Total over 4 m²**', '2,250 kg ÷ 4 m²', '**≈ 563 kgf/m² · 5.5 kN/m²**'],
      ],
      nota:
        'The weight of the shell is an assumption and varies by model: look for it ' +
        'on the manufacturer’s data sheet, which publishes it. The density of ' +
        'water, 1,000 kg/m³, is that of table B.3.2-1 of NSR-10.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Now the comparison, which is what matters. The minimum design live load ' +
        'NSR-10 requires for the private rooms of a dwelling is **1.8 kN/m² ' +
        '(180 kgf/m²)**. A "portable" spa puts on **more than three times** that. ' +
        'And it also exceeds the 5.00 kN/m² the code requires for a terrace ' +
        'authorised as a communal recreational element, which is the highest ' +
        'terrace load in the table.',
    },
    {
      tipo: 'nota',
      texto:
        'And there is a difference from a pool that works against you: **a spa ' +
        'concentrates**. A pool spreads its weight over dozens of square metres; a ' +
        'spa puts it all on four, and on top of that it usually gets tucked into a ' +
        'corner or against a parapet, which is where a slab behaves differently. A ' +
        'built-in spa weighs more in total but can be spread and taken down into ' +
        'the structure; the portable one is not spread: it bears where it bears.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hence the practical rule. On a **ground-bearing slab** — a ground-floor ' +
        'terrace, a yard — the problem hardly ever exists. On an **upper floor or ' +
        'a roof**, it always exists and has to be settled before buying anything: ' +
        'a structural assessment signed by a civil engineer is needed, exactly as ' +
        'for a pool. All of that is in [a pool on a terrace](/blog/piscina-en-terraza), ' +
        'and it applies just the same even if the unit comes on castors.',
    },

    { tipo: 'titulo', texto: 'Second: the drainage nobody plans for' },
    {
      tipo: 'parrafo',
      texto:
        'A pool is emptied every few years. **A spa is emptied completely every ' +
        'few months**, and that is a difference of kind, not of degree.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The reason lies in the arithmetic of the water. Four people get into a ' +
        'pool of 48,000 litres and the proportion is irrelevant. The same four get ' +
        'into a spa of 1,500 litres: the bather load per litre is two orders of ' +
        'magnitude greater, and on top of that the water is at forty degrees, ' +
        'which is the temperature at which everything thrives. Chlorine is used up ' +
        'very fast, dissolved solids build up that no filter removes, and a point ' +
        'comes when the only answer is to change the water.',
    },
    {
      tipo: 'parrafo',
      texto: 'That means three things have to be planned for that rarely appear on any drawing:',
    },
    {
      tipo: 'lista',
      items: [
        '**A drainage point with real capacity.** Fifteen hundred litres in one go do not go down a balcony’s rainwater pipe, and they certainly do not go on the garden: Resolución 929 classes pool water as a **non-domestic discharge**, because it carries chlorine and pH correctors, and refers its management to environmental legislation.',
        '**A filling point nearby.** Refilling fifteen hundred litres with a garden hose run across the living room is what makes people stretch the water change well past when it was due.',
        '**Access for maintenance.** A portable spa keeps its equipment behind a removable side panel. If you have built it in against two walls and a parapet, that panel does not come off, and the repair begins by moving the unit full.',
      ],
    },

    { tipo: 'titulo', texto: 'Third: the electrics, which is where the deaths are' },
    {
      tipo: 'parrafo',
      texto:
        'This is the long section, and it is long for a reason the code itself ' +
        'puts better than I could:',
    },
    {
      tipo: 'cita',
      texto:
        'The human body’s tolerance of electric current, with the skin wet or ' +
        'submerged, is much lower than in dry-skin conditions, which is why ' +
        'electrical installations in pools, spas, fountains and similar ' +
        'installations, and in wet areas generally, are required to incorporate ' +
        'materials and equipment appropriate to that condition.',
      fuente: 'RETIE, Resolución 40284 de 2026, Book 3, numeral 3.28.4.6',
    },
    {
      tipo: 'nota',
      texto:
        'Before the figures, a point on which version is in force that almost ' +
        'every source you will find gets wrong: **RETIE is no longer the 2013 ' +
        'text.** The one in force is **Resolución 40284 of 23 June 2026**, ' +
        'reorganised into Books, and its numeral 3.28.4.6 has its own requirements ' +
        'for pools and spas instead of the blanket cross-reference to NTC 2050 the ' +
        'earlier text carried. There is a transitional regime for installations ' +
        'begun before 2026, so the two versions will coexist for a while.',
    },
    {
      tipo: 'parrafo',
      texto:
        'RETIE starts from a table worth looking at before anything else: what ' +
        'voltage is safe depending on the state of the skin.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['State of the skin', 'Safety voltage'],
      filas: [
        ['Perfectly dry (exceptional)', '80 V'],
        ['Damp (normal), in a dry environment', '50 V'],
        ['Wet (more usual), in very humid environments', '24 V'],
        ['**Submerged in water (special cases)**', '**12 V**'],
      ],
      nota:
        'RETIE, Resolución 40284 de 2026, Book 1, numeral 1.5.1.2, sub-paragraph ' +
        's. A bather inside a spa is in the last row.',
    },
    {
      tipo: 'parrafo',
      texto:
        'From which follows, and not from any whim, the lighting requirement: ' +
        'lighting inside the shell must be fed from an **isolating transformer** ' +
        'with an **unearthed** secondary, a voltage no higher than **12 V**, an ' +
        'earthed electrostatic screen between the windings, certified for that ' +
        'use, and a primary at 150 V or less. The alternative the code allows is a ' +
        'luminaire of up to 150 V fed directly from a circuit protected by a ' +
        'residual-current device.',
    },

    { tipo: 'titulo', texto: 'The three metres for a spa' },
    {
      tipo: 'parrafo',
      texto:
        'Here is a figure that gets cited wrongly all the time, because the ' +
        'distance for a spa **is not the same as for a pool**:',
    },
    {
      tipo: 'cita',
      texto:
        'All single-phase 125 V socket outlets, of 15 and 20 A, located at a ' +
        'maximum distance of 6 m from the interior walls of the pool must be ' +
        'protected by a ground-fault circuit interrupter. In the case of baths or ' +
        'spas, that requirement applies to socket outlets located at a maximum ' +
        'distance of 3 m from their interior walls, including socket outlets rated ' +
        'at 30 A.',
      fuente: 'RETIE, Resolución 40284 de 2026, Book 3, numeral 3.28.4.6, sub-paragraph b',
    },
    {
      tipo: 'parrafo',
      texto:
        'Note the last five words, because they close a gap through which half an ' +
        'installation used to slip: **including socket outlets rated at 30 A**. A ' +
        'spa does not run on fifteen amps; its heater calls for a higher-rated ' +
        'circuit, and until this wording it was arguable whether the ' +
        'residual-current requirement reached it. It no longer is.',
    },

    { tipo: 'titulo', texto: 'The milliamps nobody sets' },
    {
      tipo: 'parrafo',
      texto:
        'And here is the absence that has to be declared, because it cuts against ' +
        'almost everything written on the subject.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**No Colombian primary source sets a sensitivity in milliamps for the ' +
        'residual-current protection of a pool or a spa.** I searched the RETIE in ' +
        'force and the NTC 2050 definition: what exists is a requirement for ' +
        'residual-current protection of "high sensitivity" in damp and wet ' +
        'locations, and a graphical criterion — a curve — instead of a number.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The 30 mA quoted everywhere **is in RETIE, but somewhere else**: in the ' +
        'chapter on electric vehicle charging points. Attributing it to pools is ' +
        'an extrapolation, not a citation. And it is an uncomfortable ' +
        'extrapolation, because RETIE itself publishes this table:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Tripping current', '6 mA', '10 mA', '20 mA', '30 mA'],
      filas: [
        ['Men', '100%', '98.5%', '7.5%', '**0%**'],
        ['Women', '99.5%', '60%', '0%', '**0%**'],
        ['**Children**', '**92.5%**', '7.5%', '0%', '**0%**'],
      ],
      nota:
        'Percentage of people protected according to the tripping current. RETIE, ' +
        'Resolución 40284 de 2026, Book 1, table 1.5.1.2 a.',
    },
    {
      tipo: 'nota',
      texto:
        'Read it with a spa in mind. **On the code’s own table, a 30 mA device ' +
        'protects nobody**, and a 10 mA one protects 7.5% of children. The one ' +
        'that protects 92.5% of children is **6 mA**, which is the sensitivity of ' +
        'the North American ground-fault interrupter that NTC 2050 inherits. As my ' +
        'own judgement, and I say it as judgement and not as a legal duty: **for a ' +
        'domestic spa, ask for 6 mA.** The code lets you have less; the table ' +
        'tells you what that difference buys.',
    },

    { tipo: 'titulo', texto: 'What else the code requires' },
    {
      tipo: 'tabla',
      cabeceras: ['Requirement', 'Value', 'Sub-paragraph'],
      filas: [
        ['Disconnecting means: accessible, within sight of the equipment, and set back from the interior walls of the spa', 'at least 1.5 m horizontally', 'f'],
        ['Equipotential bonding of the **perimeter surface**, measured out from the walls', '1 m horizontally', 'h'],
        ['Perimeter copper conductor for that bonding', 'not smaller than 8 AWG', 'h'],
        ['Underground wiring beneath the shell or near it', 'prohibited within 1.5 m horizontally', 'd'],
        ['Conduit in corrosive environments', 'rigid metal, intermediate metal, PVC or reinforced thermosetting resin. **No aluminium**', 'g'],
        ['Rooms or pits containing electrical equipment', 'must have drainage preventing the accumulation of water', 'e'],
      ],
      nota:
        'RETIE, Resolución 40284 de 2026, Book 3, numeral 3.28.4.6. A wall or ' +
        'building 1.5 m high or more separates the perimeter surface, and bonding ' +
        'is then required only on the spa side.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And some good news for anyone buying portable. NTC 2050 expressly allows ' +
        'a prefabricated assembly to **carry its own factory-fitted ground-fault ' +
        'interrupter**, instead of requiring one in the installation, on one ' +
        'condition: that the unit is certified and **labelled stating that the ' +
        'device protects all the electrical equipment** — pumps, blowers, heaters, ' +
        'lights, controls, wiring. Without that label, the residual-current device ' +
        'goes on the outlet feeding it.',
    },
    {
      tipo: 'nota',
      texto:
        'A declaration of method, because it bears on how solid this whole section ' +
        'is. The RETIE in force refers to the **NTC 2050 Second Update (2020)**, ' +
        'which is a paid ICONTEC standard and **could not be consulted**. The ' +
        'section 680 numerals mentioned here are from the **First Update (1998)**, ' +
        'which is accessible. The correspondence between the two is plausible but ' +
        '**I could not verify it**, and on one point there is reason to doubt: the ' +
        'American edition the second update is based on reduced some socket-outlet ' +
        'distances. What is verified, and what governs, are the RETIE ' +
        'sub-paragraphs quoted above, which are Colombian and dated 2026.',
    },

    { tipo: 'titulo', texto: 'Temperature, and how long you stay in' },
    {
      tipo: 'parrafo',
      texto:
        'Resolución 929 sets the maximum water temperature at **40 °C**, and adds ' +
        'for similar structures operating at that temperature three duties that ' +
        'did not exist before: a **timer set to a maximum of fifteen minutes**, a ' +
        '**start button at least five metres** from the structure, and signage ' +
        'warning vulnerable groups of the risks, stating as well the maximum time ' +
        'bathers should remain in it.',
    },
    {
      tipo: 'nota',
      texto:
        'A point of reading I make out of honesty and that is worth bearing in ' +
        'mind: **that paragraph sits inside the numeral on covered tanks and ' +
        'similar structures**, that is, those in an enclosed space. The wording of ' +
        'the sentence is general — it speaks of "similar structures" without ' +
        'qualification — but its placement is that. If your spa is in the open ' +
        'air, the literal application is arguable; the health reasoning behind it ' +
        '— fifteen minutes at forty degrees is the sensible limit — is not.',
    },
    {
      tipo: 'parrafo',
      texto:
        'For covered enclosures the resolution adds air parameters that are rarely ' +
        'met: CO₂ between 400 and 600 ppm, relative humidity of 50% to 70%, air ' +
        'temperature between one and three degrees above that of the water, air ' +
        'changes of four to six times the volume of the space per hour and a ' +
        'minimum of 8 m³ of air per bather, with a thermohygrometer and a CO₂ ' +
        'meter on view.',
    },

    { tipo: 'titulo', texto: 'Entrapment: the risk is greater, not smaller' },
    {
      tipo: 'parrafo',
      texto:
        'There is an idea that a spa, being small, is safer than a pool. On ' +
        'suction it is the other way round, for three reasons that compound: the ' +
        'bather is **seated**, often directly over the suction outlet; the volume ' +
        'is small, so the pump moves a great deal of flow relative to the water ' +
        'present; and loose long hair floats at seat height.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The rules apply the same things as to a pool, and now beyond argument ' +
        'because a spa is a similar structure: **two or more hydraulically ' +
        'balanced submerged drains**, at the deepest part, **at least 0.90 m ' +
        'apart**, with an anti-entrapment cover, a vacuum release system and an ' +
        'emergency stop button. And the cover must be **at least four times the ' +
        'area of the discharge pipe**, in order to minimise suction currents.',
    },
    {
      tipo: 'nota',
      texto:
        'A point of vocabulary worth making once, because it decides what gets ' +
        'delivered to you. What the rules require is an **anti-entrapment cover**: ' +
        'its function is to stop suction holding a person against the drain. In ' +
        'catalogues you will find parts described by their hydraulic effect — ' +
        'preventing the vortex over the outlet — which **is not the same thing** ' +
        'and does not by itself evidence compliance. When writing the contract, ' +
        'use the word the code uses and require the device’s declaration of ' +
        'conformity, not the sales description of the grating.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And what I set out in ' +
        '[Ley 1209: what it really requires](/blog/ley-1209-piscinas-copropiedad) ' +
        'still stands: the technical regulation that was to define the performance ' +
        'of these devices **was never issued**, and Resolución 929 still writes it ' +
        'in the future tense, referring meanwhile to the supplier’s own ' +
        'declaration of conformity. "Type-approved", today, still means the ' +
        'manufacturer signed a piece of paper.',
    },

    { tipo: 'titulo', texto: 'The water: half an hour, not six' },
    {
      tipo: 'parrafo',
      texto:
        'Resolución 929 sets the turnover time by type of tank, and gives similar ' +
        'structures **0.5 hours**, with twelve turnovers a day. A restricted-use ' +
        'pool gets between four and six hours.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Half an hour against four or six.** That single number explains why a ' +
        'spa is not hung off a pool’s machinery, which is the subject of ' +
        '[a pool and a spa together](/blog/piscina-y-jacuzzi-juntos). It also ' +
        'explains why the electricity consumption of a spa comes as a surprise: ' +
        'its recirculation pump works six hours a day on a tiny volume, and the ' +
        'heater holds forty degrees for all twenty-four.',
    },
    {
      tipo: 'nota',
      texto:
        'The running cost of a spa is almost all **heating**. It is a monthly ' +
        'item, not a capital one, and the options are compared in ' +
        '[heating the pool](/blog/calentar-la-piscina-solar-bomba-de-calor-o-gas). If the heating is gas-fired, ' +
        'Resolución 929 additionally refers to the gas installation rules of the ' +
        'Ministerio de Minas y Energía, which is a separate procedure and a ' +
        'separate certificate.',
    },
    {
      tipo: 'parrafo',
      texto:
        'As for water quality, the parameter most often breached in spas is the ' +
        'microbiological one. Health legislation requires the absence of ' +
        '*Pseudomonas aeruginosa*, the bacterium responsible for hot tub ' +
        'folliculitis, and precisely the one that thrives in warm water with ' +
        'little chlorine and plenty of biofilm in the jet pipework. A spa that ' +
        'smells odd does not need more chlorine: it needs a water change and its ' +
        'lines cleaned.',
    },

    { tipo: 'titulo', texto: 'Built-in or portable: the full comparison' },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Built-in', 'Portable'],
      filas: [
        ['**Load**', 'Greater in total, but spread and transferable to the structure', 'Less in total, **concentrated** on the 4 m² where it bears'],
        ['**Programme**', 'Weeks: excavation or shell, waterproofing, equipment room', 'A day, if the electrics and the drainage are already there'],
        ['**Electrics**', 'A complete fixed installation, with bonding and RCD on site', 'May carry the RCD from the factory **if it is labelled**; the rest still applies'],
        ['**Drainage**', 'Settled at design stage, with its own point', 'Has to be run to wherever it goes, and usually gets improvised'],
        ['**Repair**', 'Repaired piece by piece, with generic spares', 'Depends on the maker and the importer. A cracked shell is usually the end'],
        ['**Moving house**', 'It does not move', 'It goes with you. Its real advantage, and almost never used'],
        ['**Resale of the property**', 'It is built area and must be on the permission', 'It is a piece of furniture. It appears on no drawing'],
        ['**Permission**', 'Usually needed, above all if the structure is touched', 'Not for itself, but **yes for the electrical and structural work** supporting it'],
        ['**Design**', 'Bespoke: shape, depth, seats, integration', 'Whatever the catalogue makes'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The conclusion I draw from having seen both fail: **the portable one is ' +
        'not the cheap option, it is the quick option.** What it saves is builder’s ' +
        'work and time; what it does not save is the structural assessment if it ' +
        'goes on an upper floor, nor a compliant electrical installation, nor the ' +
        'drainage point. When a quotation for a portable spa comes in very cheap, ' +
        'it is almost always because those three are not in it.',
    },

    { tipo: 'titulo', texto: 'What has to be settled before buying' },
    {
      tipo: 'lista',
      items: [
        '**The filled weight of the unit**, from the manufacturer’s data sheet, plus the bathers, divided by its footprint. Compare it with what the slab will take.',
        '**If it goes on an upper floor or a roof**, the structural assessment signed by a civil engineer. Before buying, not after.',
        '**The drainage point**, with capacity for a complete emptying and a lawful destination.',
        '**The electrical circuit**: dedicated, with high-sensitivity residual-current protection, and with the isolator in sight and at least 1.5 m away.',
        '**The equipotential bonding** of the metal parts and of the perimeter surface, in 8 AWG copper or larger.',
        '**The two drains 0.90 m apart** with their covers, their vacuum release and their stop button.',
        '**If it is a community of owners**, authorisation from the general meeting: the slab is common property even where the terrace is for exclusive use.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'None of the seven is expensive if settled beforehand. All seven are ' +
        'expensive afterwards, and two of them — the structure and the drainage — ' +
        'may have no solution at all in the place chosen, which is exactly what it ' +
        'is worth finding out while the spa is still in the shop.',
    },
  ],
  fuentes: [
    {
      url: 'https://www.minenergia.gov.co/documents/15921/Libro-3-Resolucion-40284-23-06-2026.pdf',
      titulo: 'RETIE, Resolución 40284 de 2026, Book 3 — Installations, numeral 3.28.4.6',
    },
    {
      url: 'https://www.minenergia.gov.co/documents/15919/Libro-1-Resolucion-40284-23-06-2026.pdf',
      titulo: 'RETIE, Resolución 40284 de 2026, Book 1 — General provisions, numeral 1.5.1.2',
    },
    {
      url: 'https://curaduria1santamarta.com/files/NTC-2050.pdf',
      titulo: 'NTC 2050, Colombian Electrical Code, first update, section 680',
    },
    {
      url: 'https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf',
      titulo: 'NSR-10, Title B — Loads, tables B.3.2-1 and B.4.2.1-1',
    },
  ],
}
