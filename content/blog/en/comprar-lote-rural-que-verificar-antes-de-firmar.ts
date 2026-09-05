import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Comprar un lote rural: qué verificar antes de firmar».
 *
 * El lector inglés de esta pieza es casi siempre alguien que compra desde
 * fuera: un inversionista extranjero, un colombiano que vuelve, un propietario
 * expatriado. Es exactamente el perfil que más expuesto está a lo que el
 * artículo describe, porque compra por fotos y por recomendación, y porque el
 * vocabulario registral colombiano no tiene equivalente limpio en inglés.
 *
 * Por eso se añade una frase de contexto en tres sitios —qué es una
 * corporación autónoma regional, qué es una Oficina de Registro de
 * Instrumentos Públicos y qué significa que un predio sea baldío—, y no se
 * quita ninguna. Los nombres de las normas y de las instituciones van en
 * español, glosados la primera vez que aparecen.
 *
 * «Falsa tradición» se deja en español y se explica. Traducirla sería peor:
 * es el rótulo literal que el comprador va a ver impreso en su certificado, y
 * ninguna traducción le sirve para reconocerlo.
 */
export const traduccion: TraduccionPost = {
  slug: 'comprar-lote-rural-que-verificar-antes-de-firmar',
  titulo: 'Buying rural land in Colombia: what to check before you sign',
  traducido: '2026-09-05',
  resumen:
    'In the city the question is what you may build. In the countryside there ' +
    'is an earlier one: whether the person selling can sell at all. Title, ' +
    'falsa tradición, access rights and public land, with the statutes in hand.',
  metaDescripcion:
    'What to check before buying rural land in Colombia: title history, falsa ' +
    'tradición, right of way, the Unidad Agrícola Familiar and public land.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Rural land is not urban land with more square metres. What changes is ' +
        'not the size but the nature of the risk. In a city, almost every ' +
        'problem in a purchase is about **what you are allowed to build**. In ' +
        'the countryside there is an earlier question, and it is the one that ' +
        'ruins purchases: **whether the person selling to you can sell at all.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'What you may build on rural land is already written up, and I will ' +
        'not repeat it: see [what you can build on rural ' +
        'land](/blog/que-puedo-construir-en-suelo-rural) and [the building ' +
        'permit on rural land](/blog/licencia-de-construccion-en-suelo-rural). ' +
        'The general checklist for any lot is in [buying a lot: the ' +
        'twelve-point check](/blog/comprar-lote-verificacion-antes-de-firmar).',
    },
    {
      tipo: 'nota',
      texto:
        'This article is what those three are missing: the part that is ' +
        'specific to **buying** in the countryside. Title and its chain, ' +
        'access, the Unidad Agrícola Familiar seen from the buyer’s side, ' +
        'and public land. All of it read from the statutes, not from what gets ' +
        'repeated.',
    },

    { tipo: 'titulo', texto: 'Title first. Everything else comes after' },
    {
      tipo: 'parrafo',
      texto:
        'The Colombian land registry is organised around one folio per ' +
        'property, and that folio is what you have to read. The registry ' +
        'statute states it as a founding principle:',
    },
    {
      tipo: 'cita',
      texto:
        'Each real-property unit shall be assigned a single registration ' +
        'number, in which the entire legal history of that property shall be ' +
        'recorded in chronological order.',
      fuente: 'Ley 1579 de 2012, article 3, principle of specialty',
    },
    {
      tipo: 'parrafo',
      texto:
        'The entire legal history. That is why the document is worth having: ' +
        'it does not show who owns the land today, it shows **how they came to ' +
        'own it**. And that chain is what you are buying.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Now the qualifier that almost nobody makes, and that is worth knowing ' +
        'before you relax:',
    },
    {
      tipo: 'cita',
      texto:
        'Registry entries enjoy a presumption of truthfulness and accuracy, ' +
        'for as long as the contrary is not proven.',
      fuente: 'Ley 1579 de 2012, article 3, principle of legitimation',
    },
    {
      tipo: 'nota',
      texto:
        '**A presumption, not a certainty.** The folio is taken to be correct ' +
        'until somebody proves otherwise, and in the countryside that proof ' +
        'turns up more often than it does in a city. A clean certificate is not ' +
        'a guarantee. It is a good starting point.',
    },

    { tipo: 'titulo', texto: 'How many years back you have to look' },
    {
      tipo: 'parrafo',
      texto:
        'You will hear that twenty years is the rule, and also that ten is ' +
        'enough, almost always without any explanation of where the number ' +
        'comes from. It comes from a specific statute, and from the least ' +
        'obvious place: the agrarian law.',
    },
    {
      tipo: 'cita',
      texto:
        'In order to establish private ownership over the land in question, ' +
        'the required proof is the original title issued by the State that has ' +
        'not lost its legal effect, or duly registered titles granted before ' +
        'this Law came into force, showing transfers of ownership over a period ' +
        'no shorter than the term set by the laws for extraordinary ' +
        'prescription.',
      fuente: 'Ley 160 de 1994, article 48, paragraph 1',
    },
    {
      tipo: 'parrafo',
      texto:
        'The term for extraordinary prescription — the period after which long ' +
        'possession ripens into ownership — used to be twenty years and **is ' +
        'now ten**. Ley 791 de 2002 cut it, leaving article 2532 of the Civil ' +
        'Code at "ten (10) years against any person". Ordinary prescription, in ' +
        'the same statute, became **five years for real property**.',
    },
    {
      tipo: 'nota',
      texto:
        'That is why a title search covers ten years rather than some arbitrary ' +
        'figure: **it is the window in which somebody could have acquired that ' +
        'land by prescription without ever appearing on the folio.** If there ' +
        'is an unexplained gap inside it, that is where the problem is.',
    },

    { tipo: 'titulo', texto: 'Falsa tradición: what it actually means' },
    {
      tipo: 'parrafo',
      texto:
        'This is the entry that most people have seen on a certificate and ' +
        'fewest people can read. It is not a clerical error and not a defect of ' +
        'form. It is a **category** of the registry, with a code of its own, and ' +
        'the statute defines it by example:',
    },
    {
      tipo: 'cita',
      texto:
        '06 Falsa Tradición: for registering titles that carry what is called ' +
        'falsa tradición, such as the sale of property belonging to another, or ' +
        'the transfer of an incomplete right or one with no antecedent of its ' +
        'own.',
      fuente: 'Ley 1579 de 2012, article 8, paragraph 3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it slowly, because the two situations are different and both are ' +
        'serious. **Sale of property belonging to another**: somebody sold what ' +
        'was not theirs. **Transfer of an incomplete right, or one with no ' +
        'antecedent**: somebody passed on something they only half held, or ' +
        'something whose origin nobody can trace.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Why it matters so much becomes clear once you see the principle that ' +
        'falsa tradición breaks:',
    },
    {
      tipo: 'cita',
      texto:
        'Only the registered holder shall have the power to transfer ownership ' +
        'or any other right in rem over a property, except as provided for what ' +
        'is called falsa tradición.',
      fuente: 'Ley 1579 de 2012, article 3, principle of successive tract',
    },
    {
      tipo: 'nota',
      texto:
        'In other words, falsa tradición is **the declared exception to the ' +
        'principle that holds the whole system up**. Buying against a folio ' +
        'that carries it is not buying ownership of the land; it is buying the ' +
        'position of whoever held it. That can be a legitimate deal, and some ' +
        'people do it deliberately. What it cannot be is done unknowingly, or ' +
        'paid for as though it were full ownership.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The practical consequence arrives later and always arrives: land ' +
        'carrying falsa tradición is hard to mortgage, hard to resell, and hard ' +
        'to defend when the permitting authority asks for title.',
    },

    { tipo: 'titulo', texto: 'Access: the point that produces the most lawsuits' },
    {
      tipo: 'parrafo',
      texto:
        'This is the item that gets checked least and costs most. A rural lot ' +
        'with no access of its own is not cheap land: it is land with a lawsuit ' +
        'inside it. The Civil Code settles the matter in four articles, 905 to ' +
        '908, and all four are worth knowing.',
    },
    {
      tipo: 'cita',
      texto:
        'Where a property is deprived of communication with the public road ' +
        'because other properties stand in the way, the owner of the first ' +
        'shall have the right to impose on the others a right of way, to the ' +
        'extent indispensable for the use and benefit of the property, paying ' +
        'the value of the land needed for it and making good every other loss.',
      fuente: 'Código Civil, article 905',
    },
    {
      tipo: 'nota',
      texto:
        'One detail changes the reach of that right and you will almost never ' +
        'see it quoted: the original wording said "deprived of **all** ' +
        'communication", and that word appears **struck out as ' +
        'unconstitutional** in the Civil Code as published today. You do not ' +
        'have to be completely landlocked to be entitled to demand passage.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The other three articles complete the picture. If the parties cannot ' +
        'agree, **court-appointed experts** fix both the compensation and the ' +
        'way the right of way is exercised. And if in time the passage stops ' +
        'being indispensable, because the property has gained another way out, ' +
        'the owner of the burdened land may ask to be released from it, ' +
        'returning what was paid for the strip.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Then there is article 908, the one that actually fits a rural lot ' +
        'just carved out of a larger farm, and that almost nobody invokes:',
    },
    {
      tipo: 'cita',
      texto:
        'Where part of a property is sold or exchanged, or is allotted to one ' +
        'of those who held it undivided, and as a result that part is left cut ' +
        'off from the road, a right of way shall be deemed granted in its ' +
        'favour, without any compensation whatsoever.',
      fuente: 'Código Civil, article 908',
    },
    {
      tipo: 'nota',
      texto:
        '**Without any compensation whatsoever.** If the lot you are being ' +
        'offered was left without a way out because it was split off a larger ' +
        'farm, the right of way is deemed granted by the mere fact of the ' +
        'split, and free. That is exactly the situation of most informal rural ' +
        'subdivisions, and it is an argument worth having before you negotiate ' +
        'rather than afterwards.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That said, holding a right and holding the road are not the same ' +
        'thing. A right you have to enforce before a judge is a lawsuit with no ' +
        'fixed date. **What you can buy with peace of mind is a right of way ' +
        'created by public deed and recorded on the folio**, not a verbal ' +
        'arrangement with a neighbour or a track that has been open for twenty ' +
        'years.',
    },

    { tipo: 'titulo', texto: 'The Unidad Agrícola Familiar, and the exceptions nobody reads' },
    {
      tipo: 'parrafo',
      texto:
        'That rural land cannot be split below the Unidad Agrícola Familiar — ' +
        'the minimum farm size set for each municipality — on pain of absolute ' +
        'nullity is already explained in [what you can build on rural ' +
        'land](/blog/que-puedo-construir-en-suelo-rural). I will not repeat it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What is missing, and is precisely what matters to a buyer, is how ' +
        'that article 44 begins. It begins like this: **"Save for the ' +
        'exceptions set out in the following article…"**. The prohibition has ' +
        'exceptions, they are in article 45, and there are four of them:',
    },
    {
      tipo: 'lista',
      items: [
        '**Gifts** made by the owner of a larger property for the purpose of rural dwellings and the small holdings attached to them.',
        'Acts or contracts creating smaller holdings **for a principal purpose other than farming**. This is the exception most often invoked, and the one most often invoked wrongly.',
        'Those creating holdings that, because of their special conditions, may still count as Unidades Agrícolas Familiares **despite their reduced size**.',
        'Judgments declaring acquisitive prescription based on possession **begun before 29 December 1961**, and those recognising any other right that arose before that date.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Here is the condition that turns the exception into something usable, ' +
        'and that decides cases: the statute says the circumstance **cannot be ' +
        'challenged if the public deed itself recorded it**. If you are sold ' +
        'land on the strength of an exception and the deed says nothing about ' +
        'it, the exception does not protect you. Ask for that wording before ' +
        'signing, and read it.',
    },

    { tipo: 'titulo', texto: 'Baldíos: the part of the story that is not on the folio' },
    {
      tipo: 'parrafo',
      texto:
        'A baldío is untitled land belonging to the Nation. It leaves State ' +
        'ownership when the State formally allocates it, and not before. What ' +
        'makes this hard is that land which has been occupied, fenced and even ' +
        'sold several times over decades may still be a baldío if no allocation ' +
        'ever took place.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is why the article 48 quoted above matters: private rural ' +
        'ownership is established by an **original title from the State**, or ' +
        'by registered titles predating 1994 that show transfers covering at ' +
        'least the extraordinary prescription term. A folio that begins out of ' +
        'nowhere, with no antecedent, is a warning sign and not a curiosity.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And where an allocation did take place, the land carries a special ' +
        'regime that **travels with it**:',
    },
    {
      tipo: 'lista',
      items: [
        '**Fifteen years of restriction.** Until fifteen years have passed since the first allocation, the plot may only be transferred to landless peasants of scarce means or to smallholders, and only with express authorisation. Acts that breach this are **absolutely void**, and notaries and registrars are barred from executing or recording the deed unless that authorisation is attached to it.',
        '**No accumulation above the Unidad Agrícola Familiar.** Nobody may acquire land that came from baldíos if doing so takes them past the limits set for the Unidad Agrícola Familiar of that municipality or region. Contributions to companies that build up the same concentration are void as well.',
        '**No splitting below the Unidad Agrícola Familiar**, save for the exceptions in the statute itself.',
        '**The allocation can be undone later.** An action to annul the allocation may be brought within the following two years, and beyond that the agency may revoke it directly **at any time**, without needing the holder’s consent.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The rule that gives you a cheap filter is in that same article 72: ' +
        '**registrars must refuse to record** transfers of property whose ' +
        'original ownership came from a baldío where the land agency’s ' +
        'authorisation is not attached and the transaction splits the land. If ' +
        'the deed cannot be recorded, you have bought nothing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'One clarification about names, so the statute does not confuse you: ' +
        'Ley 160 says **INCORA** throughout, the agency that existed in 1994. ' +
        'That competence no longer sits there but with the national land ' +
        'authority. The rule is the same; the office you address the request to ' +
        'is not.',
    },

    { tipo: 'titulo', texto: 'The environmental side, which is not in the deed' },
    {
      tipo: 'parrafo',
      texto:
        'None of these constraints appears on the title certificate. Any of ' +
        'them can leave part of the land — or all of it — unbuildable, and all ' +
        'of them can be checked before you sign.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Constraint', 'What it means', 'Where to check it'],
      filas: [
        ['**Watercourse buffer**', 'A strip of no less than 30 metres on each side of rivers, streams and creeks, whether permanent or not, and around lakes and water bodies', 'Regional environmental authority'],
        ['**Spring**', '100 metres all around, measured from the edge of the spring itself', 'Regional environmental authority'],
        ['**Steep ground**', 'Land with a slope above 100 per cent counts as protective forest area', 'Topographic survey and the authority'],
        ['**Forest reserve under Ley 2 de 1959**', 'Seven national forest reserve zones. Building requires that the land have been formally **withdrawn** from the reserve', 'National environmental authority'],
        ['**Protected area**', 'Permitted uses are set by the management plan for the area, not by the municipal plan', 'National register of protected areas'],
      ],
      nota:
        'The first three come from article 2.2.1.1.18.2 of Decreto 1076 de ' +
        '2015, which consolidates article 3 of Decreto 1449 de 1977 and defines ' +
        'those strips as **protective forest areas** that the owner is under a ' +
        'duty to keep under tree cover.',
    },
    {
      tipo: 'nota',
      texto:
        'Two duties from the same decree that hardly anyone mentions and that ' +
        'weigh on larger farms: **holdings above 50 hectares must keep at least ' +
        '10 per cent of their area under forest cover**, and where the land came ' +
        'from an **allocated baldío** of more than 50 hectares, the share rises ' +
        'to **20 per cent**. This is a burden inherited with the land, not a ' +
        'promise made by the seller.',
    },
    {
      tipo: 'parrafo',
      texto:
        'On the reserves created by Ley 2 de 1959 it is worth understanding the ' +
        'mechanism, because people tend to assume that municipal zoning is ' +
        'enough. It is not. The statute created seven forest reserve zones — ' +
        'Pacífico, Central, Río Magdalena, Sierra Nevada de Santa Marta, ' +
        'Serranía de los Motilones, Cocuy and Amazonía — and from its article 3 ' +
        'it provided that sectors put to another use must be formally ' +
        '**withdrawn**. Until that happens, the land remains inside the reserve.',
    },
    {
      tipo: 'nota',
      texto:
        'And the reason environmental rules win when they clash with municipal ' +
        'zoning is in the planning statute: environmental determinants ' +
        '**constitute rules of higher rank**, and since the 2023 reform article ' +
        '10 of Ley 388 ranks them by precedence, with the environmental ones at ' +
        '**level 1** and with national forest reserves named expressly. A use ' +
        'allowed by the municipal plan does not defeat an environmental ' +
        'restriction.',
    },

    { tipo: 'titulo', texto: 'Who to ask about what' },
    {
      tipo: 'parrafo',
      texto:
        'Half the work is knowing which door to knock on. Asking the wrong ' +
        'office does not give you a wrong answer: it gives you lost weeks.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Who', 'What they give you', 'What they do NOT'],
      filas: [
        ['**Oficina de Registro de Instrumentos Públicos**, the land registry', 'The certificate on the legal status of the property: chain of title, charges, restrictions, injunctions, tenancy and falsa tradición', 'Nothing environmental, nothing on zoning, and nothing about unallocated baldíos'],
        ['**The cadastral authority**', 'Area, boundaries and the cadastral record of the property', 'It does not fix legal boundaries, and its area rarely matches the deed'],
        ['**The national land authority**', 'The Unidad Agrícola Familiar for the zone, and whether the land came from an allocated baldío', 'It does not say what you may build'],
        ['**The regional environmental authority**', 'Watercourse buffers, protected areas, density limits in suburban land, and what it requires for water and discharge', 'It does not issue the building permit'],
        ['**The municipal planning office**', 'The class of land, the permitted use and the formal zoning opinion', 'It settles neither title nor environmental constraints'],
      ],
      nota:
        'None of these enquiries requires you to have bought anything. All of ' +
        'them can be made, and should be made, while you can still walk away.',
    },

    { tipo: 'titulo', texto: 'What to require before signing the promise' },
    {
      tipo: 'parrafo',
      texto:
        'Five concrete things. They are not seller’s warranties: they are ' +
        'documents that either exist or do not.',
    },
    {
      tipo: 'lista',
      items: [
        '**A recent certificate on the legal status of the property**, and a study of the chain going back at least ten years. If falsa tradición shows up, everything stops until it is understood.',
        '**The recorded deed creating the right of way**, if access crosses somebody else’s land. A track used for years is not a title.',
        '**The wording in the deed recording the exception relied on**, if the land sits below the Unidad Agrícola Familiar for that zone.',
        '**The land authority’s authorisation, attached to the deed**, if original ownership came from an allocated baldío and the land was split.',
        '**A written statement from the environmental authority** on buffers, protected areas and forest reserve over that specific property, identified by its registry number.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And a condition subsequent in the promise: that the purchase depends ' +
        'on those documents appearing. It is the only clause that returns your ' +
        'money without litigation when one of these goes wrong, and it costs ' +
        'only what it costs to draft.',
    },

    { tipo: 'titulo', texto: 'The order, which is not the one most people use' },
    {
      tipo: 'lista',
      items: [
        '**The folio.** Before you go and see the land. It is cheap and it rules out half the problems.',
        '**Access.** How you get in, along what route, and whether that is written down and recorded.',
        '**Origin.** An original State title, or a complete chain. If the folio starts from nothing, stop.',
        '**The Unidad Agrícola Familiar**, if the land has been or will be split.',
        '**The environmental picture**, in writing and from the regional authority.',
        '**And only then, zoning**: what the municipal plan allows on that property.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Almost everyone does this backwards: they start from what they want to ' +
        'build and get to title once they have already signed. The six steps ' +
        'take a few weeks, and **not one of them is answered by looking at the ' +
        'land**, which remains the only thing most buyers do before signing.',
    },
  ],
}
