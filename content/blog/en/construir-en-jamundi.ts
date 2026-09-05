import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Construir en Jamundí: crecimiento, suelo y norma».
 *
 * Es el complemento urbanístico de `licencia-de-construccion-en-jamundi`, ya
 * traducida, y comparte con ella la cita de la Sentencia 125, la del parágrafo
 * 4 sobre las expensas y la tabla de lo que sí se paga. Las tres van **palabra
 * por palabra** como allí: son las mismas citas y la misma tabla del mismo
 * acuerdo municipal, y hacerlas divergir sería el peor resultado posible de
 * traducir las dos piezas por separado.
 *
 * La pieza es local hasta el hueso y su lector inglés es alguien que está
 * pensando comprar allí. Los topónimos y las entidades **no se traducen** —
 * Jamundí, Cali, Palmira, Yumbo, Acuavalle, la Secretaría de Planeación y
 * Coordinación Municipal, el Tribunal Administrativo del Valle— y lo que sí
 * hace falta es que se entienda **por qué Jamundí es distinto**: se añade una
 * frase de contexto en tres sitios —qué es el DANE, qué es un curador urbano y
 * qué es un plan básico de ordenamiento territorial— y no se quita ninguna.
 *
 * Vocabulario del corpus, sin variar nada: `expensas` → curaduría charges,
 * `impuesto de delineación urbana` → urban delineation tax, `participación en
 * plusvalía` → betterment levy on the uplift in land value, `licencia
 * urbanística` → planning permit, `certificado de disponibilidad` →
 * certificate of availability, `radicar en legal y debida forma` → filing in
 * legal and due form, `clase de suelo` → class of land, `suelo de expansión` →
 * expansion land, `plan parcial` → partial plan, `corporación autónoma
 * regional` → regional environmental authority, `Unidad Agrícola Familiar`
 * conservada, `concepto de norma urbanística` → written ruling on the planning
 * rules, `certificado de tradición` conservado.
 *
 * Las tres abstenciones del original viajan enteras: **ninguna cifra de
 * población ni de crecimiento**, **nada sobre el concurso de curadores ni sus
 * fechas** —la ausencia de curaduría se describe como condición presente y
 * explícitamente no permanente—, y **el número del acuerdo que adopta el PBOT
 * no se afirma**, solo el año. Y la declaración de lo que no se pudo
 * verificar sobre el fallo se traduce igual de cuidadosa que el español.
 *
 * Los separadores cambian: «2,0 %» es «2.0%», «0,03 UVT» es «0.03 UVT» y
 * «30 %» es «30%».
 */
export const traduccion: TraduccionPost = {
  slug: 'construir-en-jamundi',
  titulo: 'Building in Jamundí: growth, land and the rules',
  traducido: '2026-09-05',
  resumen:
    'The municipality grew faster than its instruments: a land-use plan from ' +
    '2002, no curaduría urbana, and a judgment that ties permits to the ' +
    'availability of water. What that means for your plot.',
  metaDescripcion:
    'What conditions building in Jamundí: class of land, the land-use plan ' +
    'in force, who issues the permit, and the judgment tying it to water.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Jamundí is today the most active destination for residential ' +
        'expansion in the south of the Valle del Cauca, and at the same time ' +
        'one of the municipalities where most people buy a plot without ' +
        'knowing what they are buying.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The reason is not that the rules are strange. It is that **the ' +
        'municipality grew faster than its instruments**, and that produces ' +
        'three conditions worth understanding before signing anything.',
    },

    { tipo: 'titulo', texto: 'Jamundí is no longer measured on its own' },
    {
      tipo: 'parrafo',
      texto:
        'There is one official fact that describes the situation better than ' +
        'any adjective, and that hardly anybody uses: the **"Cali AU" ' +
        'statistical domain of DANE**, the national statistics office — the ' +
        'urban area of Cali for the purposes of its construction indices — is ' +
        'made up of Cali, **Jamundí**, Palmira and Yumbo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is: for the official statistics on construction costs, Jamundí ' +
        'is not a municipality apart from the Valle. It is part of the urban ' +
        'area of Cali. Anybody building there competes for the same ' +
        'materials, the same labour and the same suppliers as anybody ' +
        'building in Cali, and their costs move with the same indices.',
    },
    {
      tipo: 'nota',
      texto:
        'The practical consequence, and it runs against the buyer’s ' +
        'intuition: **the plot is cheaper in Jamundí; the building work is ' +
        'not necessarily.** Budgeting a house in Jamundí at small-town costs ' +
        'is the first mistake of the exercise.',
    },

    { tipo: 'titulo', texto: 'A land-use plan from 2002' },
    {
      tipo: 'parrafo',
      texto:
        'The plan básico de ordenamiento territorial that governs Jamundí — ' +
        'its basic land-use plan — was adopted in **2002**. More than two ' +
        'decades governing a territory that changed scale in that time.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That does not make it invalid — a land-use plan governs until it is ' +
        'reviewed and another is adopted — but it does have concrete ' +
        'consequences for anybody designing:',
    },
    {
      tipo: 'lista',
      items: [
        '**The mapping is old.** Locating a property on it and deciding which polygon it falls into may call for a prior clarification that appears in no published timescale.',
        '**The categories may not reflect what has been built.** There are zones that on paper are still one thing and have been another on the ground for years.',
        '**Every future review is a risk to the rules.** If the land-use plan is reviewed while you are designing, the project is resolved under the rules in force on the day you file the permit application. **Only filing freezes the rules**; the written ruling on the planning rules does not.',
      ],
    },
    {
      tipo: 'cita',
      texto:
        'The issue of these rulings grants no rights and imposes no ' +
        'obligations on the party requesting them, and does not modify the ' +
        'rights conferred by permits that are in force or that have been ' +
        'executed.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.3.1',
    },

    { tipo: 'titulo', texto: 'The land: three classes, three different answers' },
    {
      tipo: 'parrafo',
      texto:
        'A good part of the plots on offer in Jamundí are not on urban land. ' +
        'And the class of land is not a label: it decides whether the plot can ' +
        'be built on today, in some years’ time, or never.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Class of land', 'What may be done', 'The trap'],
      filas: [
        ['**Urban**', 'Build according to the use, the ratios and the setbacks of the land-use plan', 'Check which area the ratios are applied to'],
        ['**Expansion**', '**Nothing, until the partial plan is adopted.** Only agricultural and forestry uses', 'It is the most expensive trap: you buy at the price of a future with no date on it'],
        ['**Rural and suburban**', 'According to the category, the density set by the regional environmental authority and the environmental regime', 'The Unidad Agrícola Familiar and the watercourse buffers'],
      ],
      nota:
        'Decreto 1077 de 2015 and Ley 388 de 1997. On expansion land, until ' +
        'the partial plans are approved "only agricultural and forestry uses ' +
        'shall be permitted".',
    },
    {
      tipo: 'parrafo',
      texto:
        'On rural land in Jamundí there also applies the limit that voids deeds: ' +
        'save for the four exceptions in article 45 of Ley 160, rural ' +
        'properties may not be divided below the Unidad Agrícola Familiar, ' +
        '**on pain of absolute nullity of the act or contract**. It is not a ' +
        'fine; it is that the transaction never existed. The exceptions are in ' +
        '[buying a rural plot](/blog/comprar-lote-rural-que-verificar-antes-de-firmar).',
    },
    {
      tipo: 'nota',
      texto:
        'And a correction about powers that gets got wrong all the time in ' +
        'the south of the Valle: **the regional environmental authority does ' +
        'not fix the Unidad Agrícola Familiar.** What it fixes are the ' +
        'densities on suburban land. The Unidad Agrícola Familiar belongs to ' +
        'the national land authority.',
    },

    { tipo: 'titulo', texto: 'Who issues the permit, and what it costs' },
    {
      tipo: 'parrafo',
      texto:
        'Jamundí **has no appointed curador urbano** — the private office ' +
        'licensed by the state to issue permits. Where there is no curador, ' +
        'the competence sits with the municipal authority: in Jamundí, the ' +
        'Secretaría de Planeación y Coordinación Municipal. And that has a ' +
        'direct economic effect:',
    },
    {
      tipo: 'cita',
      texto:
        'In no case are the municipal or district authorities in charge of ' +
        'the study, processing and issue of permits authorised to make ' +
        'charges for expensas.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.6.8.1, paragraph 4',
    },
    {
      tipo: 'parrafo',
      texto:
        'In Cali the curaduría charges are a fixed charge paid on filing plus ' +
        'a variable charge by area. In Jamundí that entire line item is zero. ' +
        '**It does not make the procedure free**: one component of the cost is ' +
        'missing, not all of them.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Item', 'How much', 'When'],
      filas: [
        ['**Curaduría charges**', '**Zero**, for as long as there is no appointed curador', '—'],
        ['**Urban delineation tax**', '2.0% on built area × reference value per m²', 'Before the permit comes out. It is a condition of issuing it'],
        ['Estampilla Pro-Cultura, the culture levy', '0.03 UVT per application', 'With the application. It is token'],
        ['Betterment levy on the uplift in land value', '30%, only where an assessment is recorded on the land registry folio', 'Where it applies. It is the big charge'],
      ],
      nota:
        'Tax statute of Jamundí, Acuerdo Municipal 020 de 2017, chapter XII. ' +
        'Watch the base of the tax: in Jamundí it is **area times the ' +
        'reference value per square metre**, not the construction budget. That ' +
        'is the Bogotá model, and confusing the two changes the figure ' +
        'completely.',
    },
    {
      tipo: 'nota',
      texto:
        'The absence of charges **is neither permanent nor a privilege of the ' +
        'municipality**: it follows from there being no appointed curador. The ' +
        'law says it head-on — the day one is appointed, the municipal body ' +
        'that carries on providing the service will levy the same charges as ' +
        'are set for the curador.',
    },

    { tipo: 'titulo', texto: 'What really conditions it: water' },
    {
      tipo: 'parrafo',
      texto:
        'And here is what really decides whether a project in Jamundí goes ' +
        'ahead, and it has nothing to do with the land-use plan or with money.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Out of an environmental class action came **Sentencia 125 de 2021** ' +
        'of the Juzgado Segundo Administrativo Oral de Cali, confirmed by the ' +
        'Tribunal Administrativo del Valle in December 2022. It is a judgment ' +
        'on the merits, not an interim measure:',
    },
    {
      tipo: 'cita',
      texto:
        'The suspension of the issue of new planning permits to subdivide ' +
        'and to build, in all their modalities, is maintained in the urban ' +
        'area of the Municipality of Jamundí where the source of supply is ' +
        'Acuavalle S.A. E.S.P.',
      fuente: 'Sentencia 125 de 2021, third operative paragraph',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read the test carefully, because it is what hardly anybody explains ' +
        'properly: **the filter is not geographical, it is about utilities.** ' +
        'There are no forbidden districts. What decides is whether the ' +
        'property has guaranteed supply, and that is proved with the ' +
        'certificate of availability.',
    },
    {
      tipo: 'parrafo',
      texto: 'The exceptions the judgment itself left open include:',
    },
    {
      tipo: 'lista',
      items: [
        'Projects already approved with services guaranteed.',
        '**Strengthening, modification, extension, adaptation to another use and enclosure** of existing buildings. If your project is on what is already built, this covers you.',
        'Urban subdivision and construction with services guaranteed.',
        'Parcelación with availability guaranteed. On rural land a treatment plant of your own has to be evidenced.',
        'Works of general interest in health and education.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'That the suspension exists does not mean nothing is being permitted. ' +
        'In the second quarter of 2025 the Secretaría de Planeación granted ' +
        '**76 planning permits**, according to the report the municipality ' +
        'itself submitted to the court. It means that **the certificate of ' +
        'availability is the first document to get hold of**, before ' +
        'commissioning a drawing.',
    },
    {
      tipo: 'nota',
      texto:
        'The most recent official document I could consult on compliance with ' +
        'this judgment is from the second quarter of 2025. There is no ' +
        'evidence that the suspension has been lifted, but neither can I ' +
        'assert that it continues on the same terms. Check it with the ' +
        'planning department before buying a plot on the assumption that it ' +
        'can be permitted.',
    },

    { tipo: 'titulo', texto: 'How it all reads together' },
    {
      tipo: 'parrafo',
      texto:
        'The three facts point the same way. DANE already counts Jamundí ' +
        'inside the urban area of Cali. The land-use plan that governs it is ' +
        'from 2002. And a judge had to suspend permits because the water ' +
        'infrastructure did not keep up with the growth.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Jamundí grew faster than its instruments.** That is not an ' +
        'argument for not building there: it is the explanation of why ' +
        'checking beforehand matters more than it does in other ' +
        'municipalities.',
    },

    { tipo: 'titulo', texto: 'What to do, in order' },
    {
      tipo: 'lista',
      items: [
        '**Get the certificate of service availability.** Before the drawing, before the budget, before signing the promise of sale. It is what decides whether the property can be permitted today.',
        '**Check the class of land.** If it is expansion land with no partial plan adopted, nothing gets built today.',
        '**If it is rural, check the Unidad Agrícola Familiar** and where the property came from.',
        '**Ask for the written ruling on the planning rules** and the certificado de tradición, and read both right through. The betterment levy assessment, if there is one, is recorded on the folio.',
        '**Budget the 2% delineation tax** on area times reference value, and do not count on construction costs any different from those in Cali.',
        '**File with the complete file.** The 45 working days do not start running until the application is in legal and due form, and only filing freezes the rules.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'All of the above is verified against rules and official documents as ' +
        'at the date of publication. Procedures change, and the absence of a ' +
        'curaduría in particular is a present condition, not a permanent ' +
        'feature of the municipality.',
    },
  ],
}
