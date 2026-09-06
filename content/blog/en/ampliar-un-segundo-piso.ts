import type { TraduccionPost } from '@/lib/types'
import { DOS_AMPLIACIONES_EN } from '../diagramas/ampliacion'

/**
 * Traducción de «Cuánto cuesta ampliar un segundo piso, y si la casa lo
 * aguanta».
 *
 * Cuidados propios de esta pieza:
 *
 * 1. **Las cifras de la tabla de expensas invierten los separadores.** «17,84
 *    UVT» pasa a «17.84 UVT» y «$934.000» pasa a «$934,000». Es la tabla donde
 *    un descuido convierte novecientos mil pesos en novecientos treinta y
 *    cuatro.
 * 2. **Las designaciones del reglamento no se traducen ni se alteran**: A.10,
 *    A.10.7.1, A.10.8.1, NSR-10, AIS 410-23. Tampoco los nombres de los
 *    decretos.
 * 3. **El diagrama trae su propia versión inglesa**, construida sobre la misma
 *    geometría en `content/blog/diagramas/ampliacion.ts`.
 */
export const traduccion: TraduccionPost = {
  slug: 'ampliar-un-segundo-piso',
  titulo: 'Adding a second floor: what it costs, and whether the house can take it',
  traducido: '2026-08-03',
  resumen:
    'The expensive question is not the price of the new square metre: it is ' +
    'where its load goes down. The code has a chapter for this, it separates ' +
    'growing sideways from growing upwards, and only one of the two forces a ' +
    'fresh analysis of the whole house.',
  metaDescripcion:
    'What NSR-10 requires to add a second floor in Colombia, which building ' +
    'permit applies, and what really drives the cost of an upward extension.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The conversation always opens the same way: «I want to add a second ' +
        'floor, what does the square metre cost?». And that question, though ' +
        'it looks like the first one, is the second.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The first is **whether the house can take it**, and it is not ' +
        'rhetorical: the seismic code devotes an entire chapter to intervening ' +
        'in what is already built, and that chapter decides whether the works ' +
        'cost twenty or sixty. Any square-metre price quoted before that answer ' +
        'is pricing a job nobody has defined.',
    },
    {
      tipo: 'nota',
      texto:
        'Who signs what here admits no shades, and it is told elsewhere: **the ' +
        'structural verdict is signed by a civil engineer**, not by an ' +
        'architect. The signatures, the strengthening permit modality and why ' +
        'that procedure costs less than people fear are in [structural ' +
        'strengthening and NSR-10](/blog/reforzamiento-estructural-y-nsr-10). ' +
        'It is not repeated here.',
    },

    { tipo: 'titulo', texto: 'The chapter governing this is called A.10' },
    {
      tipo: 'parrafo',
      texto:
        'NSR-10 does not treat an existing building as new work, and it leaves ' +
        'nothing to anyone’s judgement. Its Title A carries a specific chapter, ' +
        'and its opening paragraph states its purpose:',
    },
    {
      tipo: 'cita',
      texto:
        'This Chapter sets out the criteria and procedures to be followed in ' +
        'order to assess seismic vulnerability and to add to, modify or ' +
        'remodel the structural system of existing buildings designed and ' +
        'built before the entry into force of the present version of the ' +
        'Regulation.',
      fuente: 'NSR-10, Title A, A.10.1.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'And in case there were any doubt that your case is inside it, A.10.1.3.4 ' +
        'names it outright: the criteria of the chapter «shall be used in the ' +
        'design and construction of **extensions alongside or extensions ' +
        'upwards**». It is not a grey area. It is a written procedure.',
    },

    { tipo: 'titulo', texto: 'Growing sideways and growing upwards are not the same job' },
    {
      tipo: 'parrafo',
      texto:
        'This is the distinction almost nobody explains to an owner, and it is ' +
        'the one that moves the most money. The code splits extensions in two ' +
        'and gives them different requirements.',
    },
    {
      tipo: 'diagrama',
      svg: DOS_AMPLIACIONES_EN,
      titulo: 'The two kinds of extension the code separates',
      pie:
        'Schematic, not to scale. On the left, A.10.7; on the right, A.10.8. ' +
        'Drawing by the practice.',
    },

    { tipo: 'titulo', texto: 'Alongside: there is a way out' },
    {
      tipo: 'parrafo',
      texto:
        'An extension alongside is one «in which the area is enlarged without ' +
        'altering the height». And there the code opens a door that the upward ' +
        'extension simply does not have:',
    },
    {
      tipo: 'cita',
      texto:
        'Where the overstress and flexibility indices of the existing ' +
        'structure are below unity, there is no need to intervene in the ' +
        'existing structural system, provided the new portion of the building ' +
        'is separated from the old one by a suitable joint.',
      fuente: 'NSR-10, Title A, A.10.7.1',
    },
    {
      tipo: 'nota',
      texto:
        'Not even that door is entirely free. A.10.7.4 requires proof that the ' +
        'new foundation **does not affect the old one**, and that where the old ' +
        'foundation is to carry new load it be explored under the supervision ' +
        'of a geotechnical engineer. A joint separates structures; it does not ' +
        'separate soils.',
    },

    { tipo: 'titulo', texto: 'Upwards: there is no way out' },
    {
      tipo: 'parrafo',
      texto:
        'An upward extension is one «in which the height of the building is ' +
        'altered, with or without an increase in floor area». Here a joint is ' +
        'no help, because the new load has to travel down through the old ' +
        'structure:',
    },
    {
      tipo: 'cita',
      texto:
        'In this kind of modification the two portions of the building act ' +
        'together, both under horizontal forces and under vertical loads, and ' +
        'therefore all analysis and design must treat the old portion and the ' +
        'new one in an integrated way.',
      fuente: 'NSR-10, Title A, A.10.8.1',
    },
    {
      tipo: 'parrafo',
      texto: 'Four duties follow from that, and owners never budget for them:',
    },
    {
      tipo: 'lista',
      items: [
        '**Analyse the complete building afresh**, old and new together, and show it resists what the code demands today, under vertical loads and horizontal forces alike.',
        '**Strengthen the old part if it falls short.** If the combined indices come out above unity, «additional elements must be provided». It is not optional and it does not turn on the designer’s taste.',
        '**Prove the connections.** Junctions between new and old members have to show, by analysis or by testing, that they transfer the forces.',
        '**Bring the foundation into the sum.** A.10.8.6 requires it to be investigated under the supervision of a geotechnical engineer, for bearing capacity, for settlement and — this is the forgotten one — **for overturning**.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Overturning is the surprise. A taller house takes the same horizontal ' +
        'force on a longer lever arm, so the foundation can fall short **even ' +
        'when the new vertical load is modest**. This is why «the slab is ' +
        'already there and it holds» is not an argument: a slab holds weight; ' +
        'overturning is not something a slab resolves.',
    },

    { tipo: 'titulo', texto: 'The 10% rule, which almost nobody knows' },
    {
      tipo: 'parrafo',
      texto:
        'There is a third category, modifications that are not extensions, and ' +
        'it carries the chapter’s only numeric threshold. Worth knowing before ' +
        'knocking a wall down:',
    },
    {
      tipo: 'cita',
      texto:
        'Modifications are permitted in a building without having to validate ' +
        'the resulting capacity of the structure, insofar as the modification ' +
        'itself complies with this regulation and does not increase the seismic ' +
        'demand on any member of the existing structure by more than 10% nor ' +
        'reduce the structural capacity of any member by more than 10%.',
      fuente: 'NSR-10, Title A, A.10.6.3',
    },
    {
      tipo: 'parrafo',
      texto:
        'In plain terms: a small internal alteration does not force a review of ' +
        'the whole house. Going past that ten per cent does. And whoever ' +
        'decides it was passed is not the site foreman.',
    },

    { tipo: 'titulo', texto: 'What has to be found out about the house already there' },
    {
      tipo: 'parrafo',
      texto:
        'A.10.2 lists the prior investigations, and they are worth reading ' +
        'because they explain why the assessment costs what it costs: nearly ' +
        'everything has to be discovered rather than looked up.',
    },
    {
      tipo: 'lista',
      items: [
        'Where original structural and foundation drawings exist, **check on site that they match what was built**, with exploration at representative points and a record of its extent.',
        'Rate **the quality of the original design and construction**, judged against the best technology of the period when it went up.',
        'Rate **the state of preservation** of the structure.',
        'Look for **evidence of local failure**: excessive deflections, corroded reinforcement and other signs of behaviour.',
        'Investigate **whether the foundation has settled** and what effect that had.',
        'Investigate **extraordinary past events** — explosion, fire, earthquake, earlier remodelling, finishes that added load — that may have affected its integrity.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Two of those ratings are **qualitative and in writing**: the quality ' +
        'of the original design and construction is rated good, fair or poor, ' +
        'and the current state of the structure likewise. They are not loose ' +
        'adjectives: they enter the calculation as a coefficient reducing the ' +
        'strength that may be credited to the old fabric.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the outcome of all of it is two numbers, the ones that really ' +
        'answer the question in the title. The inverse of the general overstress ' +
        'index «expresses the vulnerability of the building as a fraction of ' +
        'the strength a new building would have» under today’s code. The ' +
        'flexibility index does the same with stiffness. Below one, the house ' +
        'takes it; above one, it does not.',
    },

    { tipo: 'titulo', texto: 'The 2023 decree that gets misquoted' },
    {
      tipo: 'parrafo',
      texto:
        'In August 2023 the government partially amended NSR-10 through ' +
        '**Decreto 1401 de 2023**, and in September corrected a slip in it with ' +
        '**Decreto 1580 de 2023**. What came in was a new document, AIS 410-23, ' +
        'on assessing and reducing seismic vulnerability in masonry dwellings. ' +
        'It matters here because almost every Colombian house wanting a second ' +
        'floor is exactly that: masonry.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The document is meant «for use in dwellings of informal origin […] and ' +
        'no more than three storeys in total», and it carries a table of limits ' +
        'that works as a reality check:',
    },
    {
      tipo: 'tabla',
      cabeceras: [
        'Wall system',
        'High seismic hazard',
        'Intermediate hazard',
        'Low hazard',
      ],
      filas: [
        ['Unreinforced masonry', '2 storeys maximum', '2 storeys maximum', '2 storeys maximum'],
        ['Confined masonry', '2 storeys maximum', '3 storeys maximum', '3 storeys maximum'],
      ],
      nota:
        'Table 1.2-1 of the AIS 410-23 document, annexed to Decreto 1401 de ' +
        '2023. In all three cases the permitted use is residential, Group I, ' +
        'with retail allowed only on the ground floor. In high hazard, the ' +
        'solution for a two-storey unreinforced masonry dwelling **must secure ' +
        'the confinement of the walls**.',
    },
    {
      tipo: 'nota',
      texto:
        '**And here is the misreading worth undoing.** That document serves to ' +
        'assess and reduce the vulnerability of a house already standing. **It ' +
        'is not a licence to put a floor on top of it**, and its own scope says ' +
        'so in one line: «this document does not apply to new dwellings». An ' +
        'upward extension remains governed by A.10.8, with everything it ' +
        'demands.',
    },

    { tipo: 'titulo', texto: 'And NSR-10 is still NSR-10' },
    {
      tipo: 'parrafo',
      texto:
        'Worth saying, because the opposite gets repeated. The code in force is ' +
        'the one adopted by Decreto 926 de 2010 and amended by Decretos 2525 de ' +
        '2010, 092 de 2011, 340 de 2012, 945 de 2017, 2113 de 2019, 1711 de 2021 ' +
        'and 1401 de 2023, with the correction in 1580 de 2023. The trade update ' +
        'circulating as «the new code» **still has no decree adopting it**, and ' +
        'until it does no permit office can be asked to apply it.',
    },

    { tipo: 'titulo', texto: 'The permit: which one, and the requirement that stops everything' },
    {
      tipo: 'parrafo',
      texto:
        'Extending calls for a building permit, in a modality with a name of ' +
        'its own. The definition matters because it carries a limit many people ' +
        'discover late:',
    },
    {
      tipo: 'cita',
      texto:
        'Extension. This is the authorisation to increase the built area of an ' +
        'existing building […] The building that increases the built area may ' +
        'be approved either attached to or detached from the existing ' +
        'construction, but in every case the sum of the two must remain within ' +
        'the development potential allowed for the plot or plots covered by the ' +
        'permit under the planning rules.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.1.7, number 2',
    },
    {
      tipo: 'parrafo',
      texto:
        'In other words: NSR-10 says whether the house takes it and the local ' +
        'plan says whether the plot allows it. They are two separate permissions ' +
        'dressed as one, and they can come out the wrong way round — a house ' +
        'structurally able to carry the floor, on a plot that has already used ' +
        'up its floor-area ratio. What the local plan looks at is in [what you ' +
        'can build on your plot](/blog/que-puedo-construir-en-mi-lote).',
    },
    {
      tipo: 'nota',
      texto:
        '**The requirement that stalls whole applications.** Where the ' +
        'application goes to an authority other than the one that issued the ' +
        'original permit, earlier permits and their drawings must be attached, ' +
        'and «where these do not exist, recognition of the existence of the ' +
        'building must be applied for». In plain terms: **if the house was ' +
        'built without a permit, recognition comes first and the extension ' +
        'second.** That procedure is set out in [I built without a ' +
        'permit](/blog/construi-sin-licencia).',
    },
    {
      tipo: 'lista',
      items: [
        '**Validity: 24 months**, extendable once by a further 12. The 36 months quoted everywhere belong to new build; extensions are not in that group.',
        '**Structural drawings, signed and titled.** In low and medium complexity projects a copy of the structural drawings suffices; in medium-high and high complexity, calculation reports, non-structural element design and a geotechnical study must be filed.',
        '**In a condominium, minutes of the competent body** authorising the works, and **a notice 30 × 50 cm on the building noticeboard**. How that gets decided inside is in [altering a flat in a condominium](/blog/reformar-en-propiedad-horizontal).',
      ],
    },

    { tipo: 'titulo', texto: 'What the procedure costs, with the sum worked out' },
    {
      tipo: 'parrafo',
      texto:
        'This part does have a number, because the decree publishes the equation ' +
        'and the factors. Permit-office fees are charged as a fixed charge plus ' +
        'a variable charge, both in UVT, adjusted by income bracket, by ' +
        'municipality and by area. For an extension of **up to 100 m²** the area ' +
        'factor is a published value — 0.45 — and the sum closes on its own.',
    },
    {
      tipo: 'dato',
      valor: '17.84 UVT ≈ $934,000',
      etiqueta:
        'Permit-office fees for an extension permit of up to 100 m² on a ' +
        'bracket 3 dwelling in Bogotá or Cali. Worked out with the equation in ' +
        'Decreto 1077 and the 2026 UVT of $52,374',
      fuente:
        'Decreto 1077 de 2015, art. 2.2.6.6.8.3 · Resolución DIAN 000238 of ' +
        '15 December 2025',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Income bracket', 'Factor i', 'Fees in UVT', 'Roughly, in 2026'],
      filas: [
        ['1 and 2', '0.5', '8.92', '$467,000'],
        ['3', '1.0', '17.84', '$934,000'],
        ['4', '1.5', '26.76', '$1,402,000'],
        ['5', '2.0', '35.68', '$1,869,000'],
        ['6', '2.5', '44.60', '$2,336,000'],
      ],
      nota:
        'Extension of up to 100 m² in a municipality with an m factor of 0.938 ' +
        '— Bogotá and Cali both have it — with a fixed charge of 10.01 UVT and ' +
        'a variable charge of 20.02 UVT. Figures rounded. **Cut-off date: the ' +
        '2026 UVT, $52,374.** A different UVT gives different figures.',
    },
    {
      tipo: 'nota',
      texto:
        'Two warnings worth money. **The 30% discount does not apply to an ' +
        'extension**: paragraph 2 of article 2.2.6.6.8.7 reserves it for ' +
        'restoration, reconstruction, modification and structural ' +
        'strengthening. And the **betterment levy**, which is not chargeable on ' +
        'those same four modalities, **is not excluded for an extension** — if ' +
        'the permit is issued applying the planning rules that generated it, ' +
        'the levy falls due.',
    },
    {
      tipo: 'nota',
      texto:
        'And one that works in your favour: **where there is no urban ' +
        'curator, there are no fees.** The decree is blunt: «in no case are ' +
        'the municipal or district authorities in charge of examining, ' +
        'processing and issuing permits authorised to charge fees». In a small ' +
        'municipality this line item does not exist. What does exist in both ' +
        'cases is the municipal building tax, which has no national rate — ' +
        'which is why it is not published here.',
    },

    { tipo: 'titulo', texto: 'What the works cost: why there is no figure here either' },
    {
      tipo: 'parrafo',
      texto:
        'I am not going to give a square-metre value for an extension, and the ' +
        'reason is the usual one: **no published Colombian source carries a ' +
        'methodology**, and here the problem is worse than in new build, ' +
        'because the heaviest line item — how much strengthening is needed ' +
        'below — is unknown until somebody assesses it. Why the tables in ' +
        'circulation are useless is set out in [what a square metre ' +
        'costs](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
    {
      tipo: 'parrafo',
      texto: 'What can be said about the shape of the cost:',
    },
    {
      tipo: 'lista',
      items: [
        '**The new floor is the predictable part.** It is new work over a known area, and the only piece a builder can price seriously from the outset.',
        '**Strengthening the existing fabric is the part that varies tenfold**, and it cannot be priced before the assessment. Pricing it earlier is pricing a problem nobody has defined.',
        '**The foundation can be the bigger surprise.** Underpinning is work beneath the house, with the house on top of it: expensive by definition, and dependent on the soil.',
        '**Add living through the works, or not living in them.** An upward extension takes the existing roof off; temporary relocation is a real line item and never appears in a quotation.',
        '**And the pre-construction stage is not optional.** Survey, vulnerability assessment, geotechnics where the diagnosis calls for it, design of the strengthening and the permit. All of it happens before the first bag of cement.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'If what you want is to bound the order of magnitude before signing, ' +
        'the cheap route is the usual one: assessment first, and with the ' +
        'diagnosis in hand, quotations that at last compare the same thing. It ' +
        'is the same mechanism that blows budgets when the step is skipped, ' +
        'told in [why building work overruns its ' +
        'budget](/blog/por-que-la-obra-se-sale-del-presupuesto).',
    },

    { tipo: 'titulo', texto: 'The order that works' },
    {
      tipo: 'lista',
      items: [
        '**Check the plot’s development potential first.** If the local plan says no, the structural conversation is moot. It is a planning enquiry, and it is quick.',
        '**Gather whatever exists on the house**: original permit, architectural and structural drawings, title deed. Where there is no permit, recognition comes before anything else.',
        '**Survey what is built**, with real measurements rather than the ones on the deed.',
        '**Vulnerability assessment**, signed by a structural engineer. This is where the two indices appear and where the amount of strengthening becomes known.',
        '**Geotechnical study**, which in an upward extension is the rule rather than the exception, because the foundation necessarily enters the analysis.',
        '**Integrated design**, architectural and structural at once. A second floor drawn without the structure over it gets redesigned from scratch.',
        '**Permit in the extension modality**, and works supervised by whoever designed them.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'So the question in the title has an honest answer in two halves. The ' +
        'procedure costs what the table above says, and can be known today. ' +
        '**The works cost whatever the assessment says**, and anyone giving you ' +
        'that figure before assessing is not pricing your house: they are ' +
        'pricing an average.',
    },
  ],
  fuentes: [
    {
      url: 'https://www.scg.org.co/Titulo-A-NSR-10-Decreto%20Final-2010-01-13.pdf',
      titulo:
        'NSR-10, Title A, Chapter A.10: assessment and intervention of buildings constructed before the entry into force of the present version of the Regulation. Annex to Decreto 926 de 2010',
    },
    {
      url: 'https://minvivienda.gov.co/normativa/decreto-1401-2023',
      titulo:
        'Decreto 1401 de 2023, partially amending NSR-10 and bringing in the AIS 410-23 document on assessing and reducing seismic vulnerability in masonry dwellings',
    },
    {
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      titulo:
        'Decreto 1077 de 2015: building permit modalities, additional documents, validity, and urban curator fees',
    },
    {
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_dian_0238_2025.htm',
      titulo:
        'Resolución 000238 of 15 December 2025: the value of the UVT for 2026',
    },
  ],
}
