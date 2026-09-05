import type { TraduccionPost } from '@/lib/types'
import { PROCEDENCIAS_EN } from '../diagramas/agua-rural'

/**
 * Traducción de «El agua en el campo: de dónde sale y qué permiso necesita».
 *
 * El diagrama va rotulado en inglés desde `PROCEDENCIAS_EN`, que vive en el
 * mismo archivo que el español para que el dibujo no pueda divergir mientras
 * divergen los rótulos. Es justo el olvido que `scripts/check-traducciones.ts`
 * caza, y aquí se resuelve por construcción y no por disciplina.
 *
 * Contexto añadido para el lector de fuera, que es quien más lo necesita en
 * este tema: qué es una corporación autónoma regional, qué es un acueducto
 * veredal —una figura que no tiene equivalente en casi ningún país— y qué es
 * un aljibe frente a un pozo profundo. Ninguna frase del español se pierde.
 *
 * Los nombres de las normas van sin traducir, glosados la primera vez. Las
 * cifras son las mismas cifras: diez años, cincuenta años, quince días,
 * sesenta días hábiles, 30 y 100 metros.
 */
export const traduccion: TraduccionPost = {
  slug: 'agua-en-el-campo-que-permiso-necesita',
  titulo: 'Water in the Colombian countryside: where it comes from and what it needs',
  traducido: '2026-09-05',
  resumen:
    '"Every country house needs a water concession" is wrong in four separate ' +
    'cases, and the concession you do need runs for ten years, not fifty. The ' +
    'four sources of water and what each one requires.',
  metaDescripcion:
    'Where a Colombian country house gets its water and what each source needs: ' +
    'water concession, borehole, shallow well, rainwater and village systems.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Water decides whether a country house can be built at all, and it is ' +
        'almost always left until last. People treat it as a construction item ' +
        '— drill, pump, store — when before any of that it is a **permitting ' +
        'matter**, with an application, a site visit and a formal decision.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And one sentence circulates about that process which is simply wrong: ' +
        '"every country house needs a water concession". **It is wrong in four ' +
        'separate situations**, and knowing which one is yours can change ' +
        'months of your calendar.',
    },
    {
      tipo: 'nota',
      texto:
        'The rule that orders the whole subject, worth fixing before we go on: ' +
        '**the municipality does not decide about water.** The decision belongs ' +
        'to the corporación autónoma regional with jurisdiction over the ' +
        'property — the regional environmental authority, a body separate from ' +
        'both the town hall and whoever issues the building permit.',
    },

    { tipo: 'titulo', texto: 'The four sources' },
    {
      tipo: 'parrafo',
      texto:
        'Water for a house in the countryside comes from one of four places, ' +
        'and each has its own regime. This is not an academic classification: ' +
        'it is what decides which document you need and which office issues it.',
    },
    {
      tipo: 'diagrama',
      svg: PROCEDENCIAS_EN,
      titulo: 'Where the water comes from, and what each source requires',
      pie:
        'Schematic section, not to scale. The depth at which water is found ' +
        'depends on the property and is unknown until you drill. Studio drawing.',
    },

    { tipo: 'titulo', texto: 'The water concession: who grants it and how long it lasts' },
    {
      tipo: 'parrafo',
      texto:
        'A concession is the permit to draw water that belongs to the public ' +
        'domain. The governing rule is Decreto 1076 de 2015, the single ' +
        'consolidated decree for the environmental sector, which absorbed the ' +
        'older Decreto 1541 de 1978.',
    },
    {
      tipo: 'cita',
      texto:
        'Every natural or legal person, public or private, requires a ' +
        'concession in order to obtain the right to use water for the following ' +
        'purposes: a. Domestic supply where it requires diversion; b. Irrigation ' +
        'and forestry; […]',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.7.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is granted by the **corporación autónoma regional**, and that sits ' +
        'in the statute that created those bodies: among their functions is ' +
        '"granting permits and concessions for forest use, concessions for the ' +
        'use of surface and groundwater".',
    },
    {
      tipo: 'nota',
      texto:
        'Two frequent corrections. **The municipality does not grant it**: the ' +
        'article of Ley 99 listing municipal environmental functions does not ' +
        'include this one. And **the urban environmental authority of the large ' +
        'cities does not either**, because the statute empowers it only *within ' +
        'the urban perimeter* — and a country house is, by definition, outside ' +
        'it.',
    },

    { tipo: 'titulo', texto: 'Ten years, not fifty' },
    {
      tipo: 'cita',
      texto:
        'The concessions referred to in the preceding articles shall be granted ' +
        'for a term of no more than ten (10) years, except those intended for ' +
        'the provision of public utility services or for the construction of ' +
        'works of public or social interest, which may be granted for periods of ' +
        'up to fifty (50) years.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.7.4',
    },
    {
      tipo: 'nota',
      texto:
        'The fifty-year figure circulates as though it were the term of any ' +
        'domestic concession. **It is not.** Fifty years is for whoever ' +
        'provides a public utility service — a village water system, for ' +
        'instance — or for works of public or social interest. For a house the ' +
        'ceiling is ten, and after that you have to renew.',
    },

    { tipo: 'titulo', texto: 'The order of priority, when there is not enough water' },
    {
      tipo: 'parrafo',
      texto:
        'In catchments under pressure the authority does not allocate on a ' +
        'first-come basis. There is a statutory order of precedence, and ' +
        'domestic use comes first:',
    },
    {
      tipo: 'cita',
      texto:
        'Domestic use shall always have priority over all others, collective ' +
        'uses over individual ones, and those of the inhabitants of a region ' +
        'over those of people from outside it.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.7.8',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is good news for a dwelling and bad news for an irrigation or ' +
        'leisure project in the same catchment. It is worth knowing which of the ' +
        'two categories your plans fall into.',
    },

    { tipo: 'titulo', texto: 'What the application asks for' },
    {
      tipo: 'lista',
      items: [
        'The applicant’s name, the source the water will be drawn from and the property to be served.',
        '**The quantity of water requested, in litres per second.** That is a design figure, not an estimate: it has to have been calculated.',
        'The intake, diversion, conveyance and surplus-return arrangements.',
        'Any easements needed, and the term applied for.',
        '**A certificate from the Oficina de Registro de Instrumentos Públicos**, the land registry, on ownership of the property, or proof of possession or tenancy.',
        'Written authorisation from the owner, where the applicant merely holds the land.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'I do not publish processing times for this, because they vary by ' +
        'authority and I could not verify them against a comparable source. ' +
        'What the statute does say: the decision is taken **within fifteen days ' +
        'of the site visit**, and that visit is a stage of the procedure rather ' +
        'than something that depends on you.',
    },

    { tipo: 'titulo', texto: 'The four cases where no concession is needed' },
    {
      tipo: 'parrafo',
      texto:
        'Here is what almost nobody explains properly, and what can save you an ' +
        'entire procedure. There are four distinct situations, resting on ' +
        'different rules.',
    },

    { tipo: 'titulo', texto: '1. Drinking, bathing and washing in a natural watercourse' },
    {
      tipo: 'cita',
      texto:
        'All inhabitants may use waters of public use while these run along ' +
        'natural channels, for drinking, bathing, watering animals, washing ' +
        'clothes and any other similar objects…',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.6.1',
    },
    {
      tipo: 'nota',
      texto:
        'The limit sits in the parent statute and it is narrow: the use must be ' +
        'made **"without establishing diversions, or using any machine or ' +
        'device"**. A pump is a device. This door will not supply a house; it ' +
        'does what it says and no more.',
    },

    { tipo: 'titulo', texto: '2. Rainwater that falls and stays on the property' },
    {
      tipo: 'cita',
      texto:
        'Without prejudice to the public ownership of rainwater, and without it ' +
        'losing that character, the owner, possessor or holder of a property may ' +
        'make use, without need of a concession, of the rainwater that falls or ' +
        'is collected on it, while it runs across it.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.16.1',
    },
    {
      tipo: 'parrafo',
      texto:
        'Rainwater harvesting is therefore the only source that does not begin ' +
        'with a procedure. And one rule works in its favour: the statute on ' +
        'efficient water use obliges the bodies that issue permits to require ' +
        'that the study of supply sources **include the rainwater available**, ' +
        'and that its use be adopted where this is technically and economically ' +
        'feasible.',
    },
    {
      tipo: 'nota',
      texto:
        'The qualifier that is almost never quoted: **a concession is required** ' +
        'where rainwater "forms a natural channel crossing several properties, ' +
        'and where, even without being channelled, it leaves the property". It ' +
        'is free while the water never leaves your land. Storage works may be ' +
        'built provided they cause no harm to third parties.',
    },

    { tipo: 'titulo', texto: '3. Groundwater for domestic use on your own property' },
    {
      tipo: 'cita',
      texto:
        'The use of groundwater, whether on one’s own property or on another’s, ' +
        'requires a concession from the competent environmental authority, with ' +
        'the exception of use for domestic purposes on property owned by the ' +
        'beneficiary or on property they possess or hold.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.16.13',
    },
    {
      tipo: 'nota',
      texto:
        'Mind the scope. The exception is written about **use**. The prior ' +
        'permit to drill is a different thing with its own article, and it ' +
        'carries no equivalent domestic exception. In other words: you may need ' +
        'no concession to use the water and still need a permit to go looking ' +
        'for it.',
    },

    { tipo: 'titulo', texto: '4. Scattered rural dwellings' },
    {
      tipo: 'parrafo',
      texto:
        'This is the broadest exception and the least known, because it does ' +
        'not sit in the water decree but in a national development plan ' +
        'statute. Article 279 of Ley 1955 de 2019 provided that such use be ' +
        '**entered in the Registro de Usuarios del Recurso Hídrico**, the ' +
        'register of water users, and that this entry **replaces the ' +
        'concession**. Decreto 1210 de 2020 implemented it and carried it into ' +
        'Decreto 1076.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What counts as domestic use was set out in three limbs: drinking and ' +
        'preparing food; personal hygiene and cleaning; and **farming, ' +
        'livestock and aquaculture use for the subsistence of those living in ' +
        'the dwelling**. The entry, moreover, is completed by the environmental ' +
        'authority itself, not by the owner.',
    },
    {
      tipo: 'nota',
      texto:
        '**And here is the limit that makes the exception useless to most ' +
        'readers of this blog.** Paragraph 2 of that same article 279 says it ' +
        'does not apply "to uses other than human and domestic consumption, nor ' +
        'to **country subdivisions** or to public or private service ' +
        'infrastructure located in rural areas", nor to the water systems set up ' +
        'to serve scattered rural dwellings. If yours is a subdivision, this ' +
        'door is shut.',
    },
    {
      tipo: 'nota',
      texto:
        'Two things I declare rather than fill in. **I could not find a ' +
        'definition of "scattered rural dwelling" in the statutes I read**, and ' +
        'that boundary is exactly what decides who benefits; ask the ' +
        'environmental authority in writing before relying on the exception. And ' +
        'I did verify that article 279 **remains in force**: the following ' +
        'development plan statute lists one by one the articles of Ley 1955 it ' +
        'repeals — article 281 is on that list — and 279 is not among them.',
    },

    { tipo: 'titulo', texto: 'Boreholes and shallow wells: the permit that comes before drilling' },
    {
      tipo: 'parrafo',
      texto:
        'This is the expensive mistake in the whole subject, and it is made in ' +
        'that order: people drill first and ask afterwards.',
    },
    {
      tipo: 'cita',
      texto:
        'Prospecting and exploration involving test drilling in search of ' +
        'groundwater with a view to its subsequent use, whether on privately ' +
        'owned land or on public land, requires a permit from the competent ' +
        'environmental authority.',
      fuente: 'Decreto 1076 de 2015, art. 2.2.3.2.16.4',
    },
    {
      tipo: 'parrafo',
      texto:
        'On top of everything any concession needs, the application asks for ' +
        'things that force you to have a contractor before you can even file: ' +
        '**the name and registration number of the drilling company**, the ' +
        'specifications of its equipment, the drilling method, a work plan, the ' +
        'hydrogeological characteristics of the area and a list of the other ' +
        'groundwater abstractions already existing nearby.',
    },
    {
      tipo: 'nota',
      texto:
        'And the exploration permit **is not the concession**: the rule says ' +
        'such permits "do not confer a concession for the use of the water", ' +
        'though they give their holder priority in obtaining one. Two ' +
        'procedures, in that order.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Once the drilling is done, three duties remain that nobody budgets for ' +
        'and that come from the rule rather than from an official’s judgement:',
    },
    {
      tipo: 'lista',
      items: [
        'A **report for each well drilled**, within sixty working days of the end of the permit, with its location in coordinates, a stratigraphic log **for every well, whether or not it found water**, and physicochemical and bacteriological analysis.',
        '**A pumping test before the well is used at all.** The rule is blunt: no abstraction may begin without one having been carried out first. And the well must end up fitted with a meter, a pressure-gauge connection and a sampling point.',
        '**A prior permit to seal a well.** Nobody may go ahead with plugging one without authorisation from the environmental authority. An abandoned well is not simply filled in.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'On the aljibe — the shallow, hand-dug well common on Colombian farms — ' +
        'one widely repeated claim deserves correcting: **the rules do not ' +
        'distinguish it from a borehole.** I searched the word "aljibe" across ' +
        'the two million characters of Decreto 1076 and it appears **once**, ' +
        'incidentally, in a context that is not this one. There is no ' +
        'definition and no separate regime. "A shallow well needs no permit ' +
        'because it is not a borehole" rests on nothing.',
    },

    { tipo: 'titulo', texto: 'The village water system: the simplest option, where it exists' },
    {
      tipo: 'parrafo',
      texto:
        'An acueducto veredal — a village-level water system, usually run by ' +
        'the community itself — is not an informal arrangement between ' +
        'neighbours. It is a **public utility provider**. The utilities statute ' +
        'contemplates it expressly as "organisations authorised under this Law ' +
        'to provide public utility services in smaller municipalities, in rural ' +
        'areas and in specific urban zones".',
    },
    {
      tipo: 'parrafo',
      texto:
        'That has consequences in both directions. Upwards, the system needs ' +
        '**its own water concession** — the statute requires those providing ' +
        'public utility services to obtain concession contracts in order to use ' +
        'water — and it must register with the utilities regulator and the ' +
        'sector’s supervisory authority.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Downwards, and this is the part that concerns you: if the system holds ' +
        'its concession in good order, **you do not need one of your own**. ' +
        'What you need is the provider’s document. By some margin, it is the ' +
        'shortest route.',
    },
    {
      tipo: 'nota',
      texto:
        'And one rule works against anyone who would rather sink a private well ' +
        'with a network at hand: where water and sanitation services are ' +
        'available **connecting as a customer is compulsory**, unless you can ' +
        'show alternatives that cause no harm to the community — and that is ' +
        'determined by the utilities regulator, not by the owner.',
    },

    { tipo: 'titulo', texto: 'How this connects to the building permit' },
    {
      tipo: 'parrafo',
      texto:
        'There is a widespread imprecision here worth undoing. The "certificate ' +
        'of immediate service availability" that everyone names belongs to the ' +
        '**urbanisation** permit, which is an urban instrument. On rural land ' +
        'the requirement is worded differently and points straight at the ' +
        'environmental permit:',
    },
    {
      tipo: 'cita',
      texto:
        'A copy of the authorisations supporting the manner in which the ' +
        'domiciliary public services of drinking water and basic sanitation ' +
        'will be provided, or the environmental authorisations and permits for ' +
        'the use of renewable natural resources in the case of self-supply, and ' +
        'the ruling of the Superintendencia de Servicios Públicos.',
      fuente: 'Decreto 1077 de 2015, art. 2.2.6.1.2.1.9, paragraph 3',
    },
    {
      tipo: 'parrafo',
      texto:
        'That paragraph belongs to the **subdivision** permit. But the ' +
        'underlying condition reaches the building permit as well: the article ' +
        'setting the general conditions for granting permits on rural and ' +
        'suburban rural land applies "to subdivision **and building** permits", ' +
        'and repeats the same requirement to evidence environmental permits ' +
        'where supply is self-provided.',
    },
    {
      tipo: 'nota',
      texto:
        'Translated into calendar terms: **the water concession is not an annex ' +
        'to the permit, it is a precondition of it.** And because it runs ' +
        'through the environmental authority rather than the permitting office, ' +
        'it is sequential. It is one reason [rural permits take ' +
        'longer](/blog/licencia-de-construccion-en-suelo-rural).',
    },

    { tipo: 'titulo', texto: 'When water decides the permit: the Jamundí case' },
    {
      tipo: 'parrafo',
      texto:
        'This is not hypothetical. In Jamundí there are permits suspended by a ' +
        'court judgment, and the test for the suspension is not geographic but ' +
        'one of water availability: what matters is whether the property has ' +
        'guaranteed supply. It is set out, with the ruling and its exceptions, ' +
        'in [building in Jamundí](/blog/construir-en-jamundi). I will not ' +
        'repeat it here.',
    },
    {
      tipo: 'parrafo',
      texto:
        'What is worth drawing out is the general lesson: **water availability ' +
        'can be the first document of a project, ahead of the first drawing.** ' +
        'That is not the quirk of one municipality; it is what happens when a ' +
        'catchment reaches its limit.',
    },

    { tipo: 'titulo', texto: 'The water that leaves: a warning and a pointer' },
    {
      tipo: 'parrafo',
      texto:
        'Settling where the water comes in is half the problem. The other half ' +
        'is where it goes, and that deserves an article of its own. Two points ' +
        'here only, so that neither is misreported to you.',
    },
    {
      tipo: 'parrafo',
      texto:
        'First: the general rule on discharge permits is very wide. It reaches ' +
        'every person whose activity generates discharges to surface water, ' +
        'marine water **or the soil**, and the article sets no volume threshold ' +
        'below which it ceases to apply.',
    },
    {
      tipo: 'nota',
      texto:
        'Second, and often misquoted: **Resolución 631 de 2015 does not set the ' +
        'parameters for a domestic septic system that infiltrates into the ' +
        'ground.** Its own article 1 excludes it: it "does not apply to point ' +
        'discharges made to marine waters or to the soil". Were the house ' +
        'discharging into a stream, that would be another story.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the scattered rural dwelling exception reappears here: individual ' +
        'sanitation solutions designed to the parameters of the sector’s ' +
        'technical regulation **require no permit for discharge to the soil**, ' +
        'though they must still be registered. Subject to the same paragraph 2 ' +
        'limits we saw earlier.',
    },
    {
      tipo: 'nota',
      texto:
        'A statement of honesty this blog makes whenever it applies: **I could ' +
        'not read that technical regulation.** The file the Ministry publishes ' +
        'consists of scanned pages and its articles could not be verified. So I ' +
        'quote no figure and no parameter from it, and for the same reason I ' +
        'cite no ICONTEC technical standard either: their catalogue is not ' +
        'publicly searchable.',
    },

    { tipo: 'titulo', texto: 'The order worth working in' },
    {
      tipo: 'lista',
      items: [
        '**Ask whether there is a village water system and whether its concession is current.** If the answer is yes, you have saved yourself the rest.',
        '**Ask the environmental authority, in writing and naming the property**, what it requires in order to supply a dwelling there. It is free, and it is the answer that governs.',
        '**Find out whether your case fits the scattered rural dwelling exception**, and confirm in writing that the authority does not regard your project as a country subdivision.',
        '**If you are going to drill, get the permit before hiring the rig**, and expect to need the drilling company identified before you can even apply.',
        '**Include rainwater harvesting in the study of supply sources**, even where it is not the main one. It is the only source that starts without a procedure.',
        '**Settle water and sanitation at the concept design stage**, not at the finishes stage. They decide where the house can stand as much as the soil survey does.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Anyone who asks these six questions before buying the land avoids the ' +
        'surprise. Anyone who asks them once the drawings exist does not — and ' +
        'sometimes the surprise is that the house cannot be supplied where it ' +
        'has been drawn. Before all this comes the other conversation, about ' +
        'title and access: [what to check before signing for rural ' +
        'land](/blog/comprar-lote-rural-que-verificar-antes-de-firmar).',
    },
  ],
}
