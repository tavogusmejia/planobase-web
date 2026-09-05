import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Qué puedo construir en suelo rural».
 *
 * Es la puerta de entrada del pilar para el lector de fuera, y la que más
 * contexto necesita: el suelo rural colombiano no tiene equivalente limpio en
 * ningún otro país. Se añade una frase por sección —qué es la Unidad Agrícola
 * Familiar, qué es el POT, qué es un centro poblado— y no se quita ninguna.
 *
 * Vocabulario tomado del corpus: `Unidad Agrícola Familiar` y `corporación
 * autónoma regional` como en `comprar-lote-rural` y `agua-en-el-campo`;
 * `suelo suburbano` → suburban land, `ronda hídrica` → watercourse buffer,
 * `nacimiento` → spring y `área protegida` → protected area, todos de
 * `comprar-lote-rural`; `curaduría urbana` sin traducir como en su propio
 * artículo; `parcelación` sin traducir y glosada como en
 * `del-lote-a-la-licencia`; `POT` glosado como en el mismo.
 *
 * **Ninguna cifra de densidad, de UAF ni de umbral de suburbanización se
 * añade**, exactamente como en el español: son municipales y regionales, y
 * publicarlas como si fueran nacionales sería el error que este blog corrige.
 */
export const traduccion: TraduccionPost = {
  slug: 'que-puedo-construir-en-suelo-rural',
  titulo: 'What you can build on rural land in Colombia',
  traducido: '2026-09-05',
  resumen:
    'Rural land is not urban land with more room: it runs on harder rules and ' +
    'on three separate authorities. What may be built, who decides it, and ' +
    'the limit that voids the deed.',
  metaDescripcion:
    'What can be built on rural land in Colombia: the Unidad Agrícola ' +
    'Familiar, suburban land, densities and who decides each of them.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Almost everybody arrives at rural land with an idea taken from urban ' +
        'land: more room, fewer neighbours, the same logic. It is exactly the ' +
        'other way round. **Rural land has harder rules than urban land**, and ' +
        'breaking them is punished in a way that has no equivalent in the city.',
    },
    {
      tipo: 'nota',
      texto:
        'The rule that orders the whole subject: **the national statutes define ' +
        'the vocabulary; the POT of your municipality supplies the numbers.** ' +
        'The POT is the Plan de Ordenamiento Territorial, the municipal ' +
        'land-use plan. No national law says how much may be built on a ' +
        'particular rural property. What follows is not going to give you your ' +
        'answer: it is going to give you the questions, and the people to put ' +
        'them to.',
    },

    { tipo: 'titulo', texto: 'The limit that voids the deed' },
    {
      tipo: 'parrafo',
      texto:
        'Before any ratio, any height and any use, there is this:',
    },
    {
      tipo: 'cita',
      texto:
        'Rural properties may not be divided below the extent determined as the ' +
        'Unidad Agrícola Familiar for the municipality or zone in question. ' +
        'Accordingly, on pain of absolute nullity of the act or contract, no ' +
        'action or transaction whatsoever may be carried out that results in ' +
        'the division of a rural property into areas smaller than the one so ' +
        'set.',
      fuente: 'Ley 160 de 1994, article 44',
    },
    {
      tipo: 'parrafo',
      texto:
        'The **Unidad Agrícola Familiar** is the minimum extent considered ' +
        'necessary for a family to live off that property. It varies by ' +
        'municipality and by zone: there is no national figure, and anybody who ' +
        'gives you one is inventing it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What is national is the consequence. **Absolute nullity means the ' +
        'transaction never existed.** It is not a fine, it is not cured by ' +
        'paying and it is not cured by the passing of time. It is the reason ' +
        'there are rural plots sold, paid for, fenced and even occupied whose ' +
        'buyer can neither convey them nor obtain a permit for them.',
    },
    {
      tipo: 'nota',
      texto:
        'A correction to a very common error, repeated even among ' +
        'professionals: **the corporación autónoma regional does not set the ' +
        'Unidad Agrícola Familiar.** That belongs to the national land ' +
        'authority. What the corporación does — it is the regional ' +
        'environmental authority — is set the maximum densities for suburban ' +
        'land. They are two separate competences, and asking the wrong body ' +
        'will cost you weeks.',
    },

    { tipo: 'titulo', texto: 'Three authorities, not one' },
    {
      tipo: 'parrafo',
      texto:
        'In the city the municipality is enough. In the countryside it is not. ' +
        'Knowing who decides what is half the work:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Who', 'What they decide'],
      filas: [
        [
          '**The national land authority**',
          'The Unidad Agrícola Familiar for the municipality or the zone. It is the limit on dividing land',
        ],
        [
          '**The corporación autónoma regional**',
          'Maximum densities in suburban land, the suburbanisation threshold, watercourse buffers, water concessions and discharge permits',
        ],
        [
          '**The municipality, through its POT**',
          'The classification of rural land, the categories, the uses, the ratios and whether the country housing category exists at all',
        ],
      ],
      nota:
        'To which is added, in each procedure, whoever issues the permit: the ' +
        'curaduría urbana or, where no curador has been appointed, the ' +
        'municipal planning office.',
    },

    { tipo: 'titulo', texto: 'Rural land is not one single thing' },
    {
      tipo: 'parrafo',
      texto:
        'The national statutes divide rural land into two large blocks, and the ' +
        'difference between them decides almost everything:',
    },
    {
      tipo: 'lista',
      items: [
        '**Protection categories.** Areas of environmental conservation, of agricultural and forestry production, of hazard and risk, of public service infrastructure and of heritage. Here the land **is not developable**, and no procedure makes it developable.',
        '**Categories of restricted development.** The rural land where, on conditions, works may be authorised: suburban land, centros poblados rurales — the small clustered rural settlements — areas for country housing and areas for community facilities.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The name says it: **restricted development, not free development.** ' +
        'That a property falls in this category does not mean it can be ' +
        'parcelled. It means the POT may allow it, on conditions the POT itself ' +
        'defines.',
    },

    { tipo: 'titulo', texto: 'Suburban land: the two national rules' },
    {
      tipo: 'parrafo',
      texto:
        'Suburban land is the rural belt where urban and rural uses mix, and it ' +
        'is where most of the country housing in Colombia has been built. It ' +
        'has two national rules worth knowing by heart.',
    },
    { tipo: 'titulo', texto: 'The minimum development unit: two hectares' },
    {
      tipo: 'parrafo',
      texto:
        'On suburban land, the minimum development unit **cannot be smaller ' +
        'than two hectares**, and that area is what entitles you to put forward ' +
        'a parcelación scheme, the rural counterpart of an urbanisation.',
    },
    {
      tipo: 'nota',
      texto:
        'With one exception that settles the commonest case: **building a ' +
        'single dwelling house for the owner** is not subject to the minimum ' +
        'development unit. If yours is a house to live in, and not a scheme to ' +
        'sell plots, this rule does not block you.',
    },
    { tipo: 'titulo', texto: 'The 30% site coverage ratio' },
    {
      tipo: 'parrafo',
      texto:
        'For commerce, services and industry on rural and suburban land, the ' +
        'site coverage ratio — the share of the property the building may ' +
        'occupy — **may not exceed 30% of the area of the property**. The rest ' +
        'goes to conserving or restoring the native vegetation.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is a national limit, not a municipal one: a POT may be stricter, ' +
        'never more permissive. And it applies to the area of the property, ' +
        'which in the countryside is usually a considerable surface.',
    },

    { tipo: 'titulo', texto: 'Density: the number that decides how many houses' },
    {
      tipo: 'parrafo',
      texto:
        'On rural land nobody talks about a floor area ratio as they do in the ' +
        'city: they talk about **maximum housing density**, expressed in ' +
        'dwellings per hectare. It is the number that decides whether a stretch ' +
        'of ground takes two houses or twenty.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And here is the peculiarity that confuses a great many people: **that ' +
        'density is set by the corporación autónoma regional**, not by the ' +
        'municipality, even though the POT records it. Two neighbouring ' +
        'municipalities under different corporaciones can have very different ' +
        'regimes.',
    },
    {
      tipo: 'nota',
      texto:
        'I do not publish density figures. They vary by corporación, by zone ' +
        'and by category, and a wrong figure here means a whole project wrongly ' +
        'sized. **Ask for it in writing from the corporación for your region, ' +
        'naming the property.**',
    },

    { tipo: 'titulo', texto: 'Country housing: it exists only if the POT creates it' },
    {
      tipo: 'parrafo',
      texto:
        '"Casa campestre" is not an automatic national category. It is one of ' +
        'the restricted-development areas that the POT **may** delimit, with ' +
        'its own conditions of minimum plot area, density, setbacks and the ' +
        'percentage of land that has to be left open.',
    },
    {
      tipo: 'parrafo',
      texto:
        'If your property does not sit inside an area delimited as such, what ' +
        'applies is the general regime of the rural or suburban land it is in. ' +
        'And if it is in a protection category, none applies: you do not build.',
    },

    { tipo: 'titulo', texto: 'The environmental restrictions that do not appear in the deed' },
    {
      tipo: 'lista',
      items: [
        '**Watercourse buffer.** Thirty metres on each side of channels and a hundred metres around springs. It is protection land: you do not build, and there is no offsetting it.',
        '**Protected areas.** If the property lies inside one, the regime of uses is set by the management plan for the area, not by the POT.',
        '**Forest use.** Felling trees on the property requires a permit from the corporación, and it is not always granted.',
        '**Water and discharges.** With no public network, the water requires a concession and the waste water requires a discharge permit or an approved treatment system. They are environmental procedures with timescales of their own, not a line in the construction budget.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'None of these restrictions appears on the certificate on the legal ' +
        'status of the property. They ' +
        'are checked with the corporación autónoma regional, and **it is worth ' +
        'doing before signing**, not after.',
    },

    { tipo: 'titulo', texto: 'The permits you need' },
    {
      tipo: 'tabla',
      cabeceras: ['What you want to do', 'Which permit'],
      filas: [
        [
          'Divide a rural property into several',
          '**Subdivision permit**, and always above the Unidad Agrícola Familiar',
        ],
        [
          'Create plots with infrastructure works for country housing',
          '**Parcelación permit**',
        ],
        ['Build the house', '**Building permit**, in whichever modality applies'],
        [
          'Build on top of what is already built',
          'Building permit for extension, adaptation, alteration or structural strengthening',
        ],
      ],
      nota:
        'They are separate permits and sometimes two are needed. Building on ' +
        'rural land without the right one exposes you to the same penalties as ' +
        'in the city, with the aggravation that many rural infringements also ' +
        'touch the environmental regime.',
    },

    { tipo: 'titulo', texto: 'The seven questions, in order' },
    {
      tipo: 'lista',
      items: [
        '**What is the Unidad Agrícola Familiar for this zone?** If the property falls below it and came out of a division, there is a problem at the root.',
        '**Which category of rural land is it in?** Protection or restricted development. It is the question that decides whether there is a project at all.',
        '**Is it suburban?** If it is, the minimum development unit and the densities set by the corporación apply.',
        '**Is there a delimited country housing area, and is this property inside it?**',
        '**What is the maximum density, in writing and from the corporación?**',
        '**Is there a watercourse buffer, a protected area or a risk zone over the property?**',
        '**How are the water and the waste water resolved, and what permits does each solution require?**',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'All seven are answered with documents and free enquiries, and all ' +
        'seven can be made before buying. **Not one of them can be answered by ' +
        'looking at the plot**, which is exactly what almost everybody does ' +
        'before signing.',
    },
  ],
}
