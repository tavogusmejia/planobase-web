import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Mi edificio quedó en amarillo: qué significa y qué sigue».
 *
 * Es la traducción con más cifras del blog y la que más fácil se rompe en
 * silencio. Cuatro cuidados, en orden de peligro:
 *
 * 1. **Los separadores dentro de las tablas.** «1.147» y «1.713» son mil ciento
 *    cuarenta y siete y mil setecientos trece, y en inglés van «1,147» y
 *    «1,713». Una coma mal puesta aquí convierte un balance municipal en un
 *    disparate, y ninguna guarda lo detecta porque el texto está bien formado.
 *    El resto de celdas son de tres dígitos y no llevan separador. El «41 %»
 *    pasa a «41%», pegado.
 * 2. **Las dos cautelas del artículo tienen que sobrevivir enteras.** Que el
 *    texto de la circular no se pudo leer, y que no existe plazo oficial para
 *    el propietario con adhesivo amarillo. Traducidas como afirmaciones planas
 *    —«the circular says», «the deadline is»— se pierde exactamente lo que hace
 *    creíble la pieza. En inglés van con el mismo condicional y la misma
 *    atribución nominal que en español.
 * 3. **Los nombres propios no se traducen.** UNGRD, Decreto 1171, Circular n.º
 *    73, AIS, IDIGER, Alcaldía de Santiago de Cali, Secretaría de Gestión del
 *    Riesgo, curaduría urbana, propiedad horizontal, Ley 675 de 2001. Cada uno
 *    se glosa entre guiones la primera vez que aparece y después se usa solo.
 * 4. **Los nombres oficiales de los colores se conservan en español dentro de
 *    la tabla**, con su glosa al lado. Quien está leyendo esto en inglés tiene
 *    delante un adhesivo que dice «Habitabilidad restringida»: traducirle la
 *    etiqueta y no enseñársela sería quitarle lo único que puede reconocer.
 */
export const traduccion: TraduccionPost = {
  slug: 'mi-edificio-quedo-en-amarillo',
  titulo: 'My building was tagged yellow: what it means and what happens next',
  traducido: '2026-09-05',
  resumen:
    'The yellow sticker does not say the building is fine, and it does not ' +
    'say it is about to fall down either. What each colour means exactly ' +
    'according to Cali city hall, what you can do today with each one, who ' +
    'signs the assessment that follows and what to ask them.',
  metaDescripcion:
    'What the yellow sticker on a building in Cali means after the ' +
    'earthquake, what you can do with it and what assessment comes next.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'A team turned up, looked the building over for somewhere between ' +
        'fifteen minutes and an hour, stuck a yellow sticker on the front and ' +
        'left. Ever since, the conversation in the residents’ group has been ' +
        'swinging between two extremes: the ones who read yellow as «it ' +
        'passed» and the ones already looking for somewhere to rent.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Neither reading is right, and the distance between them costs money ' +
        'and peace of mind. Here is what the official documents actually say, ' +
        'what you can do today with each colour, who signs what comes next, ' +
        'and what to ask when somebody hands you a report.',
    },
    {
      tipo: 'nota',
      texto:
        'This article describes the scheme applied by the **Alcaldía de ' +
        'Santiago de Cali** — Cali city hall. Other towns hit by the ' +
        'earthquake of 10 August are using similar but not identical wording, ' +
        'and the national technical guide uses four colours rather than three. ' +
        'If your sticker was put up in Cali, this is the definition that ' +
        'governs.',
    },

    { tipo: 'titulo', texto: 'The three colours, in city hall’s own words' },
    {
      tipo: 'parrafo',
      texto:
        'They are worth reading slowly, because each one says less than people ' +
        'make it say.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Colour', 'Official label', 'What the definition says'],
      filas: [
        [
          'Green',
          '«Habitable» — habitable',
          'During the inspection no apparent conditions were identified that would prevent the building being lived in.',
        ],
        [
          'Yellow',
          '«Habitabilidad restringida» — restricted habitability',
          'Localised damage or hazardous conditions were identified, requiring restrictions on entry to, or occupation of, certain areas.',
        ],
        [
          'Red',
          '«No habitable» — not habitable',
          'Conditions were identified that represent a grave risk to life, and for that reason the building is considered not habitable.',
        ],
      ],
      nota:
        'Secretaría de Gestión del Riesgo de Emergencias y Desastres — the ' +
        'city’s emergency and disaster risk management department — Alcaldía ' +
        'de Santiago de Cali, 22 August 2026.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Notice three words that appear in all three definitions and that ' +
        'change everything: **«during the inspection»**, **«apparent»** and ' +
        '**«localised»**. The sticker describes what a team saw, with the ' +
        'naked eye, on one particular day. It is not a forecast and it is not ' +
        'a ruling.',
    },
    {
      tipo: 'cita',
      texto:
        'These visits do not constitute a specialist technical opinion, nor a ' +
        'structural ruling, nor an engineering study.',
      fuente: 'Alcaldía de Santiago de Cali, August 2026',
    },
    {
      tipo: 'nota',
      texto:
        'Why the colours sometimes fail to match what you read elsewhere. The ' +
        '**national technical guide** produced by the Asociación Colombiana de ' +
        'Ingeniería Sísmica — AIS, the Colombian earthquake engineering ' +
        'association — uses **four** colours, with orange for «not habitable» ' +
        'and red kept for «danger of collapse». The **UNGRD circular** that ' +
        'unified the method in August describes red as danger of collapse and ' +
        'a ban on entry. **Cali uses three**, and its red is «not habitable». ' +
        'They are related scales, not identical ones.',
    },

    { tipo: 'titulo', texto: 'What yellow does say, and what it does not' },
    {
      tipo: 'parrafo',
      texto:
        'Yellow is the colour of the word **localised**. It means the team saw ' +
        'damage or a hazardous condition at an identifiable point — a ' +
        'staircase, a cantilever, a wall, a common area — and that entry to or ' +
        'use of that part has to be restricted. Not the whole building, and ' +
        'not indefinitely.',
    },
    {
      tipo: 'parrafo',
      texto:
        'These four things are what yellow does **not** mean, and every one of ' +
        'them gets said daily:',
    },
    {
      tipo: 'lista',
      items: [
        '**It does not mean the building has been signed off.** It is exactly the opposite: a yellow opens the obligation to commission a specialist technical assessment. Green is the one that closes the matter, and only for now.',
        '**It does not mean you have to move out.** Restricted habitability is still habitability. What gets restricted are the areas the team marked, not the whole flat, unless they said otherwise.',
        '**It does not mean the damage is structural.** The sticker draws no line between a cracked partition wall and a compromised column. That distinction is precisely what only appears in the assessment that follows.',
        '**It is not an answer about the future of the property.** The sticker orders no demolition, orders no strengthening and authorises nothing. It describes an observed state.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And one point about red, because it is the one that causes most ' +
        'distress: city hall itself has insisted that **red is not a ' +
        'demolition order**. A red building may end up demolished, ' +
        'strengthened or repaired. What decides that is the study that comes ' +
        'afterwards, not the sticker.',
    },

    { tipo: 'titulo', texto: 'What you can do with your building today' },
    {
      tipo: 'tabla',
      cabeceras: ['If yours is…', 'You can', 'You cannot', 'What comes next'],
      filas: [
        [
          'Green',
          'Live in it and carry out minor repairs to finishes.',
          'Assume there is nothing wrong. The visit was visual and does not rule out damage.',
          'Nothing compulsory. If something new appears, report it again.',
        ],
        [
          'Yellow',
          'Live in the unrestricted areas, respecting what the team marked.',
          'Use the restricted areas, remove the marking, or start work without a prior assessment.',
          'Commission the specialist technical assessment and file the report with the Secretaría.',
        ],
        [
          'Red',
          'Ask for an escort to remove belongings, through the Secretaría’s channels.',
          'Go in on your own account, sleep there, or touch the structure.',
          'Specialist assessment, and from it the decision to strengthen, repair or demolish.',
        ],
      ],
      nota:
        'Built from the frequently asked questions published by the ' +
        'Secretaría de Gestión del Riesgo on 26 August 2026.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two rules hold for all three colours. First: **the sticker can only ' +
        'be changed as the result of a fresh assessment process**, and only ' +
        'authorised staff may alter it. Taking it off, covering it up or ' +
        'replacing it yourself does not change the state of the building; it ' +
        'only erases information other people need.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Second: **the studies and the remedial work are at the expense of the ' +
        'owner or of the owners’ association**. The Secretaría inspects, ' +
        'classifies and reassesses; it does not design or carry out the repair ' +
        'of a privately owned building.',
    },
    {
      tipo: 'nota',
      texto:
        'The technical report you commission is filed with the Secretaría de ' +
        'Gestión del Riesgo for review and for the case to be reassessed. At ' +
        'the time of writing, the channel city hall has published for sending ' +
        'it is the address `estructurales.sismo@cali.gov.co`. Check it against ' +
        'the [official city hall repository](https://www.cali.gov.co/gobierno/publicaciones/193607/terremoto-de-cali-repositorio-oficial-de-informacion/) ' +
        'before using it: the channels of an emergency change.',
    },

    { tipo: 'titulo', texto: 'Who signs what, and how far each signature reaches' },
    {
      tipo: 'parrafo',
      texto:
        'Here is the misunderstanding that costs most, and it is worth saying ' +
        'plainly even — especially — from an architecture practice. **The ' +
        'visit that left the sticker and the study you now have to commission ' +
        'are not the same thing, are not done by the same people, and do not ' +
        'cost anything like the same.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'The first phase in Cali was a mainly visual inspection, carried out ' +
        'by teams accompanied by architects and engineers. For the specialist ' +
        'phases, city hall specifically called for **civil engineers with ' +
        'experience in structures, geotechnics and building pathology**. That ' +
        'is not a bureaucratic detail: it is the difference between looking ' +
        'and measuring.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What it is', 'What it answers', 'Who signs it'],
      filas: [
        [
          'Rapid habitability inspection',
          'Can anyone go in today? Under what restrictions?',
          'A Secretaría team, with engineers and architects. Led by a structural engineer.',
        ],
        [
          'Detailed assessment or building pathology study',
          'What was damaged, why, and what has to be done?',
          'A structural engineer, a geotechnical engineer or a building pathologist.',
        ],
        [
          'Seismic vulnerability assessment',
          'How much can this building take, measured against the code in force?',
          'A structural engineer. It is the one that underpins a strengthening scheme.',
        ],
      ],
      nota:
        'They are three different products and they are priced differently. ' +
        'Asking for the third when the second will do is expensive; accepting ' +
        'the first when the second is needed is dangerous.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Put shortly, and it is the sentence this blog repeats without tiring: ' +
        '**an architect can look at your crack, tell you what caused it and ' +
        'whether to worry; the verdict on structural safety is signed by a ' +
        'structural engineer or a building pathologist.** If somebody offers ' +
        'you the second without being one, they are selling you something they ' +
        'cannot deliver.',
    },
    {
      tipo: 'parrafo',
      texto:
        'If what you have is a crack and you want to understand what you are ' +
        'looking at before calling anybody, ' +
        '[how to read a crack](/blog/fisuras-en-muros) explains it with the ' +
        'official thresholds. And ' +
        '[when a building needs a pathology study](/blog/cuando-un-edificio-necesita-un-estudio-patologico) ' +
        'goes into what that study contains and what it costs.',
    },

    { tipo: 'titulo', texto: 'The national rule, and what we could not read' },
    {
      tipo: 'parrafo',
      texto:
        'Some context, because it explains why the procedure looks similar ' +
        'from one city to another. **Decreto 1171 de 2026**, issued on 11 ' +
        'August, declared a national disaster ' +
        'situation on account of the earthquake, for an initial twelve months ' +
        'that may be extended, and placed coordination in the hands of the ' +
        'Unidad Nacional para la Gestión del Riesgo de Desastres, the UNGRD, ' +
        'Colombia’s national disaster risk management agency.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ten days later, that agency issued a circular to unify the assessment ' +
        'method across the country. According to the summary published by the ' +
        '[Alcaldía Mayor de Bogotá](https://bogota.gov.co/mi-ciudad/ambiente/gobierno-unifica-metodologia-para-evaluar-edificaciones-por-terremoto), ' +
        'Bogotá city hall, it is **Circular n.º 73 de 2026**, dated 20 August, ' +
        'and it sets out two phases: a ' +
        'rapid assessment by visual inspection, with the three-colour system, ' +
        'and a detailed assessment aimed above all at buildings marked yellow ' +
        'and red, plus vital infrastructure — hospitals, schools, essential ' +
        'services — which goes to detailed assessment from the start.',
    },
    {
      tipo: 'nota',
      texto:
        'A declaration of honesty, the same one this blog makes whenever it ' +
        'applies: **we were not able to read the text of that circular.** It ' +
        'does not appear in the UNGRD’s public list of circulars, which for ' +
        '2026 jumps from no. 072, of 18 August, to no. 074, of 20 August. The ' +
        'number, the date and the content summarised above come from the ' +
        'official Bogotá city hall portal and from consistent press reports, ' +
        'not from the document itself. That is why we quote from it no ' +
        'requirement, no time limit and no figure: for what you have to do ' +
        'with your building, the source that governs — and that is genuinely ' +
        'published — is the one from Cali city hall.',
    },

    { tipo: 'titulo', texto: 'What happens after the diagnosis' },
    {
      tipo: 'parrafo',
      texto:
        'The guidance city hall published at the beginning of September sets ' +
        'the route out in an order worth respecting, because skipping it is ' +
        'the commonest way of paying twice.',
    },
    {
      tipo: 'lista',
      items: [
        '**A structural safety assessment before anything is touched.** No informal repairs. If there is an insurance policy, the insurer’s loss adjuster comes in; if not, you engage a structural engineer or a building pathologist.',
        '**Supplementary studies where the case calls for them.** A soil investigation and a review of the site’s risk conditions, which in Cali are not the same across the whole city.',
        '**Filing the report with the Secretaría de Gestión del Riesgo**, which reviews it and reassesses the case. It is the only route to getting the colour of the sticker changed.',
        '**A planning opinion and a building licence from a curaduría urbana** — the private licensing office that issues building permits in Colombia — where the work requires one. Structural strengthening, rebuilding and demolition are licence categories, not works that can be started on trust.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'That last step is the one most people skip, and it is the one that ' +
        'later blocks a sale, a mortgage or an insurance claim. ' +
        '[What the code requires for strengthening](/blog/reforzamiento-estructural-y-nsr-10) ' +
        'explains the category and the procedure; ' +
        '[how a curaduría works](/blog/curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide) ' +
        'explains what paperwork they will ask you for.',
    },

    { tipo: 'titulo', texto: 'Time limits: what exists and what does not' },
    {
      tipo: 'parrafo',
      texto:
        'This is the most asked question and the one with the least satisfying ' +
        'answer. **We found no official time limit obliging an owner with a ' +
        'yellow sticker to commission the assessment by any given date.** City ' +
        'hall sets none in the documents it has published, and the disaster ' +
        'decree sets none. If somebody tells you that you have thirty days, ' +
        'ask them which rule says so.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What does have dates attached is the city’s own calendar, and it is ' +
        'useful for calibrating expectations:',
    },
    {
      tipo: 'lista',
      items: [
        'City hall set out a horizon of **six months of planning and three years of works** for the reconstruction, announced at the end of August 2026.',
        'The **first demolitions** of buildings beyond saving were announced for the week of 9 September 2026, starting with a small group of properties already approved.',
        'Assessment of buildings is still under way and **is moving far more slowly than demand**: at the end of August there were of the order of twelve thousand properties queuing for technical review.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And a practical warning that is not a deadline but works like one: ' +
        'the diaries of the region’s structural engineers and building ' +
        'pathologists are full. Whoever rings first gets seen first.',
    },

    { tipo: 'titulo', texto: 'The figures, and why they do not match the ones you read yesterday' },
    {
      tipo: 'parrafo',
      texto:
        'City hall’s running total is updated every few days, and the figures ' +
        'in circulation almost never carry their cut-off date. Two cut-offs, ' +
        'so you can see the speed:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Cut-off', 'Visits', 'Habitable', 'Restricted use', 'Not habitable'],
      filas: [
        ['25 August 2026', '1,147', '306', '298', '543'],
        ['5 September 2026', '1,713', '439', '472', '765'],
      ],
      nota:
        'Alcaldía de Santiago de Cali’s running total on each date, as ' +
        'reported by the local press. Eleven days, and the count of buildings ' +
        'classed as not habitable grew by 41%.',
    },
    {
      tipo: 'dato',
      valor: '765',
      etiqueta:
        'buildings in Cali classed as not habitable, out of 1,713 assessment ' +
        'visits',
      fuente: 'Alcaldía de Santiago de Cali, cut-off of 5 September 2026',
    },
    {
      tipo: 'nota',
      texto:
        'How to read that without getting it wrong. These are **buildings**, ' +
        'not flats: a single uninhabitable block can be fifty households. And ' +
        'they are the ones **already visited**, not the ones damaged: the ' +
        'queue of properties still waiting is several times larger. Any figure ' +
        'in this article that you read a month from now will be out of date. ' +
        'Always go to the [official repository](https://www.cali.gov.co/gobierno/publicaciones/193607/terremoto-de-cali-repositorio-oficial-de-informacion/), ' +
        'which publishes the report with its date on it.',
    },

    { tipo: 'titulo', texto: 'If it is a block of flats' },
    {
      tipo: 'parrafo',
      texto:
        'Almost every yellow sticker in Cali is stuck on a block of flats, so ' +
        'the question comes straight away: who commissions the work and who ' +
        'pays. **Ley 675 de 2001**, the statute governing propiedad ' +
        'horizontal — Colombia’s regime for buildings in shared ownership — ' +
        'settles it better than people tend to think. You can read it ' +
        '[here](https://www.sic.gov.co/sites/default/files/normatividad/Ley_675_2001.pdf).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Its article 3 defines as **essential common property** the land, the ' +
        'foundations, the structure, the façades and the slabs that roof any ' +
        'level. Which is to say: **a column, a beam, a structural wall or the ' +
        'façade remain common property even when they are inside your flat.** ' +
        'Damage there belongs to the owners’ association. The cracked skim ' +
        'coat in your living room is yours.',
    },
    {
      tipo: 'lista',
      items: [
        'The technical assessment of the building is commissioned by **the owners’ association**, not by each owner separately. Five different reports on the same building do not add up: they contradict one another.',
        'The **contingency fund** comes first. An extraordinary levy is only in order once the fund’s resources prove insufficient.',
        '**Earthquake cover on the common property is compulsory**, and the payout is earmarked in the first instance for rebuilding. Activate the policy before commissioning anything: insurers usually require their adjuster to see the damage untouched.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The detail on majorities, levies and what has to be decided in ' +
        'general meeting is in ' +
        '[altering a flat in a shared-ownership building](/blog/reformar-en-propiedad-horizontal).',
    },

    { tipo: 'titulo', texto: 'Nine questions for whoever hands you the report' },
    {
      tipo: 'parrafo',
      texto:
        'A two-page report with photographs and a conclusion is no use for ' +
        'filing with the Secretaría, nor for an insurer, nor for a curaduría. ' +
        'These nine questions separate a technical document from a quotation ' +
        'in disguise.',
    },
    {
      tipo: 'lista',
      items: [
        '**Who signs it, under what professional registration and in which speciality?** Ask for the number and check it. Structures, geotechnics and pathology are different specialities.',
        '**What exactly is the scope of this?** Is it a damage assessment, a pathology study or a seismic vulnerability assessment? Let the report say so, not the cover.',
        '**What could be seen and what could not?** A serious report states what stayed hidden behind finishes, what could not be tested and what remains to be verified.',
        '**What testing was done, or why none?** Rebound hammer, core sampling, reinforcement detection, trial pits. If none was done, let the reason be explained.',
        '**What is the cause, and what supports that?** Describing the damage is not enough. Without a cause, the repair is a gamble.',
        '**Is this earthquake damage or did it predate the earthquake?** It is the question that decides the insurance claim, and the one an honest report answers with qualifications rather than with a yes.',
        '**What has to be done, in what order, and what happens if it is not?** Priorities, not a flat list.',
        '**What does it recommend regarding the current classification?** The report has to be fileable so that the Secretaría can reassess the case. Ask whether it comes in the form they require.',
        '**Who is going to design the solution, and is it the same person who will carry it out?** If the one diagnosing is the one selling the works, the diagnosis has an interest inside it.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        '[What a serious technical report must contain](/blog/que-debe-contener-un-informe-tecnico-serio) ' +
        'develops each of these points and sets out the full structure the ' +
        'document ought to have.',
    },

    { tipo: 'titulo', texto: 'In short' },
    {
      tipo: 'parrafo',
      texto:
        'Yellow means **restricted habitability on account of localised ' +
        'damage**, according to what a team saw with the naked eye on one ' +
        'day. It is not an approval, it is not a sentence and it is not a ' +
        'structural ruling. What it opens is one concrete obligation: to ' +
        'commission the specialist assessment, file it, and obtain the licence ' +
        'if the work calls for one.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In the meantime, respect the restricted areas, leave the sticker ' +
        'alone, and if it is a block of flats, activate the policy before ' +
        'commissioning anything. What there is not is a deadline forcing your ' +
        'hand — what there is, is an engineer’s diary filling up.',
    },
  ],
}
