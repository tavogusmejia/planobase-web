import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Interventoría de obra pública: marco normativo».
 *
 * El vocabulario lo fijó `interventoria-de-obra` y aquí se respeta entero:
 * **`interventoría` no se traduce** —se conserva y se glosa en la primera
 * mención como supervisión técnica independiente del constructor—,
 * `dirección de obra` → site management y `supervisión arquitectónica` →
 * architectural site supervision. Lo que esta pieza añade es la tercera
 * acepción, la del derecho administrativo: la **`supervisión`** del artículo
 * 83, que ejerce la propia entidad con su personal, va como `supervision` a
 * secas. Queda separada sin esfuerzo de las otras dos porque aquellas van
 * siempre calificadas, y la tabla del artículo es lo único que sostiene la
 * distinción.
 *
 * `concurso de méritos` se conserva y se glosa, como en
 * `concursos-publicos-de-arquitectura`. `Contraloría` sin traducir y glosada
 * como el órgano nacional de control fiscal; `Consejo de Estado` sin traducir,
 * igual que en la pieza privada.
 *
 * Los cuatro frentes de responsabilidad —civil, fiscal, penal y
 * disciplinaria— se traducen uno a uno y sin fundirlos: `fiscal` no es
 * `financial`, es la responsabilidad ante el control fiscal, y por eso se
 * glosa con la Contraloría al lado.
 *
 * Separadores: «2.000 m²» es «2,000 m²», «4,0 %» es «4.0%» y «2,5 %» es
 * «2.5%». Son las mismas cifras que en `interventoria-de-obra`.
 */
export const traduccion: TraduccionPost = {
  slug: 'interventoria-de-obra-publica',
  titulo: 'Interventoría on public works: the legal framework',
  traducido: '2026-09-05',
  resumen:
    'Supervision and interventoría are not the same thing, and the ' +
    'difference decides who is answerable. The regime that separates them, ' +
    'why interventoría is engaged through a concurso de méritos, and how far ' +
    'its liability reaches.',
  metaDescripcion:
    'The legal framework for interventoría on public works in Colombia: ' +
    'supervision, selection by competition, and four kinds of liability.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'On private works, interventoría — independent technical supervision ' +
        'of the works — is the client’s decision: it is engaged because it is ' +
        'worth engaging. On public works it is not a decision, it is a ' +
        'regime, and a considerably harder one than it looks from outside.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The confusion at the outset, which produces badly structured ' +
        'contracts and badly distributed liability, is to believe that ' +
        'supervision and interventoría are two words for the same thing. They ' +
        'are not, and Colombian law defines each of them separately.',
    },

    { tipo: 'titulo', texto: 'Two figures, not one' },
    {
      tipo: 'cita',
      texto:
        'Supervision shall consist of the technical, administrative, ' +
        'financial, accounting and legal monitoring of performance of the ' +
        'subject matter of the contract, exercised by the state body itself ' +
        'where specialised knowledge is not required. […] Interventoría shall ' +
        'consist of the technical monitoring of performance of the contract ' +
        'carried out by a natural or legal person engaged for that purpose by ' +
        'the state body, where monitoring of the contract calls for ' +
        'specialised knowledge in the field, or where the complexity or the ' +
        'extent of the contract justifies it.',
      fuente: 'Ley 1474 de 2011, article 83',
    },
    {
      tipo: 'tabla',
      cabeceras: ['', 'Supervision', 'Interventoría'],
      filas: [
        [
          '**Who carries it out**',
          'The contracting authority itself, with its own staff or with support',
          'A third party engaged for the purpose',
        ],
        [
          '**When**',
          'Where no specialised knowledge is needed',
          'Where it is, or where the complexity or the extent of the contract justifies it',
        ],
        [
          '**Typical scope**',
          'Technical, administrative, financial, accounting and legal',
          'Technical, and it may be widened to the rest if the contract so provides',
        ],
        [
          '**How it is engaged**',
          'It is not engaged: it is designated',
          '**Concurso de méritos**, because it is consultancy',
        ],
      ],
      nota:
        'The law allows both figures to run on one and the same contract, ' +
        'dividing the subject matter between them, provided there is neither ' +
        'duplication nor a gap in the monitoring. What it does not allow is ' +
        'for the interventoría to be left with nobody in charge.',
    },
    {
      tipo: 'nota',
      texto:
        'The practical consequence of the distinction: **when an ' +
        'interventoría has been engaged, the authority’s own supervisor does ' +
        'not disappear.** The relationship with the authority remains, and a ' +
        'good share of the trouble on public works starts because nobody was ' +
        'clear about who decided what.',
    },

    { tipo: 'titulo', texto: 'Interventoría is consultancy, and that changes everything' },
    {
      tipo: 'parrafo',
      texto:
        'The procurement statute expressly classifies interventoría as a ' +
        '**consultancy contract**, alongside advisory work, construction or ' +
        'project management, direction, programming and the production of ' +
        'designs, drawings, concept designs and projects.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And consultancy contracts are selected through a **concurso de ' +
        'méritos**, one of the selection procedures the statute provides. ' +
        'From that comes the rule that most surprises anyone arriving from ' +
        'the private sector:',
    },
    {
      tipo: 'nota',
      texto:
        '**In the selection of consultants, price may not be included as a ' +
        'selection criterion.** What is assessed is the experience of the ' +
        'bidder, the experience of the proposed team and the technical ' +
        'quality of the proposal. The price is negotiated afterwards, with ' +
        'the bidder ranked first. A public interventoría is not awarded to ' +
        'the cheapest, because the law forbids it.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The underlying reason is the one that holds the whole figure up: ' +
        '**if you buy oversight at the lowest price, you buy less ' +
        'oversight.** The legislator recognised as much and took price out of ' +
        'the equation.',
    },

    { tipo: 'titulo', texto: 'Liability: four fronts at once' },
    {
      tipo: 'parrafo',
      texto:
        'Here is the real difference from private interventoría, and it is a ' +
        'difference of degree rather than of nuance. The anti-corruption ' +
        'statute established that interventores are liable **in civil, ' +
        'fiscal, criminal and disciplinary terms**, and not only for ' +
        'breaching their own interventoría contract: also for the acts or ' +
        'omissions attributable to them that cause loss to the public body, ' +
        'arising from the making and the performance of the contracts over ' +
        'which they exercised the interventoría.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read that slowly, because the reach of it is unusual: **the ' +
        'interventor is liable for what the works contractor did badly, if ' +
        'their own omission allowed it.** This is not an observer with an ' +
        'opinion; it is a guarantor.',
    },
    {
      tipo: 'lista',
      items: [
        '**Civil:** for the financial loss caused.',
        '**Fiscal:** before the Contraloría, the national audit office, for the depletion of public funds.',
        '**Criminal:** for offences against the public administration that may be committed.',
        '**Disciplinary:** where public functions are exercised, under the regime that corresponds to them.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And one duty worth underlining, because it is the one most often ' +
        'breached: **the interventor is obliged to report to the public body ' +
        'any facts that may amount to acts of corruption or to breaches of ' +
        'contract.** Saying nothing is not neutrality: it is an attributable ' +
        'omission.',
    },

    { tipo: 'titulo', texto: 'Independence, here, is a disqualification' },
    {
      tipo: 'parrafo',
      texto:
        'On private works, an interventor who depends on the builder is a bad ' +
        'design of incentives. On public works, the regime of statutory ' +
        'disqualifications and conflicts of interest turns it into a ' +
        'prohibition: **whoever carries out the works, and those close to ' +
        'them, cannot also be the one who checks them.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'The logic is identical to that of the permits regime, where the ' +
        'independent reviewer of the structural designs cannot be the same ' +
        'professional who prepared them **nor have an employment or ' +
        'contractual relationship with that person**. That level of detail ' +
        'only gets written down after somebody has already tried the ' +
        'opposite.',
    },

    { tipo: 'titulo', texto: 'Continuity: a problem the law had to solve' },
    {
      tipo: 'parrafo',
      texto:
        'A classic problem on public works: the works contract is extended ' +
        'and the interventoría contract is not, and the job is left unwatched ' +
        'over exactly the stretch where watching matters most. The ' +
        'anti-corruption statute settled it by allowing the interventoría ' +
        'contract to be extended for the same period as the contract it ' +
        'monitors.',
    },
    {
      tipo: 'nota',
      texto:
        'It is a rule of common sense written into a statute, which is how ' +
        'rules of common sense end up written down once their absence has ' +
        'cost public money.',
    },

    { tipo: 'titulo', texto: 'What is required of an interventoría, in practice' },
    {
      tipo: 'parrafo',
      texto:
        'The particular duties are set by each contract, but the core is the ' +
        'same on any job, public or private:',
    },
    {
      tipo: 'lista',
      items: [
        '**Verifying that what is built matches what was designed**, and that the materials are the ones specified.',
        '**Controlling quantities.** What is invoiced has to be there on site.',
        '**Requiring and filing laboratory testing**: concrete strength, compaction, quality of the reinforcement steel.',
        '**Checking the programme** and recording delays as they happen, not when a claim is made.',
        '**Approving or rejecting interim payment certificates.** This is the function that confers real power: an interventor with no authority over payments is an expensive spectator.',
        '**Leaving a written record.** Site diary, minutes and a dated photographic record. On public works it is also what gets shown to the Contraloría.',
      ],
    },

    { tipo: 'titulo', texto: 'What does not change because the works are public' },
    {
      tipo: 'parrafo',
      texto:
        'Two duties from the general building regime apply just the same, and ' +
        'they tend to be forgotten because they are thought of as a matter ' +
        'for private housing:',
    },
    {
      tipo: 'lista',
      items: [
        '**Independent technical supervision** of buildings whose plot allows more than 2,000 m² of built area, which is a different thing from the contractual interventoría and comes from the seismic-resistant building regime.',
        '**Independent review of the structural designs**, by a professional other than the designer and independent of them in employment terms.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'These belong to the building regime, not to the procurement statute, ' +
        'and they sit alongside the interventoría. A public facility may need ' +
        'all three at once, and they are three separate contracts.',
    },

    { tipo: 'titulo', texto: 'What it costs, and why that question is badly put' },
    {
      tipo: 'parrafo',
      texto:
        'The Colombian technical reference for fees is still the 1989 decree ' +
        '— 4.0% of the actual cost of the works on housing, restoration and ' +
        'refurbishment; 2.5% in all other categories — which **no longer ' +
        'binds**: it lapsed when the rule that gave it its foundation was ' +
        'repealed, and the Consejo de Estado confirmed as much in 2020.',
    },
    {
      tipo: 'parrafo',
      texto:
        'But on public works the question of price arrives at a different ' +
        'moment. Because interventoría is selected through a concurso de ' +
        'méritos and price may not be a selection criterion, **the figure is ' +
        'not what decides who wins**: it is what is reviewed and agreed with ' +
        'whoever came first on technical quality.',
    },

    { tipo: 'titulo', texto: 'The idea that holds the whole regime up' },
    {
      tipo: 'parrafo',
      texto:
        'It is the same idea as on private works, written with heavier ' +
        'consequences: **nobody finds their own mistakes with the same ' +
        'enthusiasm they bring to finding somebody else’s**, above all when ' +
        'correcting them costs money.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In a contract between private parties, that is solved with a good ' +
        'contract. Where the money is public, the legislator was not content ' +
        'with that: it separated the two figures, forbade price from ' +
        'deciding, laid down disqualifications, and made the interventor ' +
        'answerable on four fronts at once.',
    },
  ],
}
