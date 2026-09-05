import type { TraduccionPost } from '@/lib/types'
import { ANATOMIA_DEL_M2_EN, INDICE_NO_ES_PRECIO_EN } from '../diagramas/costos'

/**
 * Traducción de «Cuánto cuesta construir por m² en Colombia».
 *
 * Las dos figuras van rotuladas en inglés desde `costos.ts`, sobre la misma
 * geometría que la versión española.
 *
 * Lo delicado de esta pieza no es el vocabulario, es la aritmética. Cada
 * separador cambió de bando: «14,16 %» es «14.16%», «0,10» es «0.10», «3.500
 * UVT» es «3,500 UVT» y «1.000 m²» es «1,000 m²». Dentro de las tablas del
 * apéndice A-4 una coma decimal española convierte una décima en diez, y ahí
 * no lo ve nadie.
 *
 * Lo que el artículo se niega a publicar sigue sin publicarse: no hay cifra de
 * $/m², el bloque de preinversión sigue declarado como orden de magnitud
 * propio del estudio, y la conclusión sobre el IVA de los servicios de
 * arquitectura sigue diciendo que se verificó **por ausencia**. Suavizar
 * cualquiera de las tres arruinaría la pieza.
 *
 * Contexto añadido para el lector de fuera: qué es el DANE, qué es Camacol,
 * qué es la NSR-10 y qué es la UVT. Ninguna frase del español se pierde.
 */
export const traduccion: TraduccionPost = {
  slug: 'cuanto-cuesta-construir-por-m2-en-colombia',
  titulo: 'What it costs to build per square metre in Colombia',
  traducido: '2026-09-05',
  resumen:
    'There is no single figure, and anyone who hands you one without saying ' +
    'what it includes and which month it is from is inventing it. What does ' +
    'exist: what the DANE index really measures, what is and is not inside a ' +
    'construction cost, and why the same square metre is not worth the same ' +
    'in Bogotá, Medellín, Barranquilla and Cali.',
  metaDescripcion:
    'Why no official cost per m² exists in Colombia, what DANE actually ' +
    'publishes, and how to ask for a figure you can compare with another.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The question is fair and the honest answer is uncomfortable: **no ' +
        'Colombian authority publishes a cost per square metre**. Not DANE, ' +
        'the national statistics office; not Camacol, the builders’ trade ' +
        'body; not the Ministry of Housing. None of them publishes how many ' +
        'pesos it costs to build one square metre.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The tables in circulation do exist, and that is the problem. They ' +
        'are copied from site to site, they do not say whether they include ' +
        'the land, the designs, the permits or the finishes, they do not say ' +
        'which month they are from, and for the same city in the same year ' +
        'they contradict one another by a factor of two or three. A figure ' +
        'that can double depending on who publishes it is not data: it is ' +
        'noise in the shape of data.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This article is not going to give you one more table. It will give ' +
        'you the other thing, which is what actually helps you decide: what ' +
        'you are really asking, what the one official series measures, what ' +
        'is and is not inside a construction cost, why a square metre is not ' +
        'worth the same in Bogotá as in Barranquilla, and how to ask for a ' +
        'figure so that the answer comes back comparable.',
    },

    {
      tipo: 'titulo',
      texto: 'First: four different figures go by the same name',
    },
    {
      tipo: 'parrafo',
      texto:
        'Much of the confusion is not bad faith. It is that four very ' +
        'different numbers are said with the same four words, and the person ' +
        'asking and the person answering are almost never talking about the ' +
        'same one.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What it is', 'What it includes', 'What it is for'],
      filas: [
        [
          '**Construction cost**',
          'Materials, labour, plant and transport for what goes up on the plot',
          'Contracting and controlling the building work',
        ],
        [
          '**Project cost**',
          'The construction cost plus surveys, designs, permit fees, taxes, utility connections, bonds and the cost of time',
          'Knowing how much money you need to have',
        ],
        [
          '**Sale price**',
          'The project cost plus the land, marketing, financing and the developer’s profit',
          'Comparing against a finished flat for sale',
        ],
        [
          '**Valuation**',
          'What a valuer estimates the property is worth on the market today',
          'Mortgage, probate, property tax',
        ],
      ],
      nota:
        'The most expensive mistake on this list is comparing a sale price ' +
        'against a construction cost and concluding that you are being ' +
        'overcharged. They are two different things, and the gap between ' +
        'them is not a mark-up.',
    },
    {
      tipo: 'nota',
      texto:
        'When somebody tells you "the square metre is running at such and ' +
        'such", the first question is not how much. It is **which of the ' +
        'four**.',
    },

    { tipo: 'titulo', texto: 'What DANE really publishes' },
    {
      tipo: 'parrafo',
      texto:
        'DANE, the national statistics office, measures the construction ' +
        'sector through several statistical operations, and every one of ' +
        'them is useful. None of them publishes pesos per square metre of ' +
        'construction cost.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Operation', 'What it measures', 'In what unit'],
      filas: [
        [
          '**ICOCED**, the index of building construction costs',
          'How much the prices of a basket of construction inputs changed',
          'Index number and percentage change, monthly',
        ],
        [
          '**ICOCIV**, the equivalent for civil works',
          'The same, for infrastructure rather than buildings',
          'Index number and percentage change',
        ],
        [
          '**IPVN**, the new housing price index',
          'How much the **sale price** of new housing changed',
          'Percentage change, quarterly',
        ],
        [
          '**ELIC**, building permit statistics',
          'How many square metres were approved for construction',
          'Square metres, monthly',
        ],
        [
          '**CEED**, the building census',
          'How many square metres are in fact under construction',
          'Square metres, quarterly',
        ],
      ],
      nota:
        'Two measure price change, one measures the change in sale prices ' +
        'and two measure area. Not one of them measures how many pesos a ' +
        'square metre costs.',
    },
    {
      tipo: 'parrafo',
      texto:
        'This is not a reading of ours. DANE says it itself, in as many ' +
        'words, in the methodological record of the index:',
    },
    {
      tipo: 'cita',
      texto:
        'Given that the variable of interest in the indicator refers to the ' +
        'change in price, the ICOCED does not aim to infer the price levels ' +
        '(values) of the goods and services included in the basket being ' +
        'tracked, nor to determine the total amount of the cost of ' +
        'construction.',
      fuente: 'DANE, methodological record of the ICOCED, February 2022',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is the most important sentence in this article and practically ' +
        'nobody in the sector quotes it. An index measures **the slope**, ' +
        'not **the height**: it says how far prices moved against a base ' +
        'period — in the ICOCED, December 2021 set at 100 — and it cannot ' +
        'say how many pesos anything is worth.',
    },
    {
      tipo: 'diagrama',
      svg: INDICE_NO_ES_PRECIO_EN,
      titulo: 'An index describes the slope, not the height',
      pie:
        'On the left, what DANE measures and publishes every month: the ' +
        'change in the prices of a basket of inputs. On the right, the ' +
        'reader’s question. No arithmetic gets from one to the other without ' +
        'a starting value, and nobody publishes the starting value.',
    },
    {
      tipo: 'nota',
      texto:
        'And on **Camacol**, the builders’ trade body, which gets credited ' +
        'with more $/m² tables than anyone else: it publishes indicators of ' +
        'building activity — launches, sales, starts — and sector analysis. ' +
        '**It does not publish absolute costs in pesos per square metre.** ' +
        'If somebody shows you a $/m² table "according to Camacol", ask for ' +
        'the document. It will not turn up.',
    },

    {
      tipo: 'titulo',
      texto: 'What the index is good for: updating a budget of your own',
    },
    {
      tipo: 'parrafo',
      texto:
        'The ICOCED does not give you a value. It gives you something else, ' +
        'and something very useful: **a way of bringing a budget you already ' +
        'have up to the present**, one made by somebody, with a date on it. ' +
        'That is exactly what a cost index was designed to do.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It comes out monthly, in the last week of the month, with the ' +
        'previous month’s results. It covers 57 municipalities aggregated ' +
        'into 19 geographical domains, ten construction destinations and ' +
        'eight cost groups. It replaced the older ICCV from the February ' +
        '2022 release onwards.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And that is where the finding that changes a budget appears: **the ' +
        'cost groups do not move at the same rate, and the difference is not ' +
        'small.**',
    },
    {
      tipo: 'dato',
      valor: '14.16% against 6.33%',
      etiqueta:
        'Annual change in labour against the annual change in the total ' +
        'index, in March 2026. Anyone updating a whole budget with the total ' +
        'index understates labour by more than double.',
      fuente: 'DANE, ICOCED technical bulletin for March 2026',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Cost group', 'Annual change, March 2026'],
      filas: [
        ['Labour', '14.16%'],
        ['Plant and equipment', '7.79%'],
        ['General construction services', '6.50%'],
        ['**Total index**', '**6.33%**'],
      ],
      nota:
        'These are the three groups with the largest increase in that month, ' +
        'against the total. They change every month: the table is worth what ' +
        'it teaches, not as a reference value. Consult the bulletin for the ' +
        'month in which you are updating.',
    },
    {
      tipo: 'parrafo',
      texto:
        'From this comes a practical rule almost nobody applies: **do not ' +
        'update the total, update chapter by chapter.** Labour and materials ' +
        'move differently, and a single-family house — with less repetition ' +
        'and less industrialisation than an apartment block — carries ' +
        'proportionally more labour. It is the same mistake described in ' +
        '[the ten most expensive mistakes when building a country house](/blog/diez-errores-mas-caros-casa-campestre), ' +
        'here with the bulletin in hand.',
    },

    {
      tipo: 'titulo',
      texto: 'Why the same square metre costs more in Bogotá than in Barranquilla',
    },
    {
      tipo: 'parrafo',
      texto:
        'There are five real reasons, and none of them is that "people ' +
        'charge more in that city". All five can be checked on your own ' +
        'project before you sign.',
    },
    {
      tipo: 'lista',
      items: [
        '**Transporting the inputs.** The price of cement, steel and aggregate on site includes getting them there. A plot ninety minutes from the concrete plant does not pay what one fifteen minutes away pays, and out in the countryside that difference stops being marginal.',
        '**The local price of labour.** It is the cost group that moves most and varies most between markets, because it depends on how much simultaneous building work is competing for the same gangs.',
        '**The climate and the altitude belt.** They determine the roof, the ventilation, the insulation and whether there is air conditioning at all. A house in Barranquilla and a house on the Bogotá savannah are not solving the same problem, and the building envelope is a large item.',
        '**The soil, which decides the foundations.** It is the most expensive item nobody sees. Soft ground, a high water table or fill of unknown origin can multiply the foundations, and that is known from the geotechnical survey, not from intuition.',
        '**The seismic demand of the area.** The code does not ask the same of a building in a high seismic hazard zone as of one in a low zone, and that difference is paid for in steel, in concrete and in detailing.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'On that last point it is worth being precise, because it circulates ' +
        'badly told. The seismic hazard zone is not an opinion or a ' +
        'designer’s judgement: **it is assigned municipality by ' +
        'municipality in the code in force**, through two coefficients — Aa ' +
        'and Av — published in appendix A-4 of the NSR-10, the Colombian ' +
        'earthquake-resistant construction code. Whoever signs the structure ' +
        'applies it; it is not negotiable.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['City', 'Aa', 'Av', 'Seismic hazard zone'],
      filas: [
        ['Barranquilla', '0.10', '0.10', 'Low'],
        ['Cartagena', '0.10', '0.10', 'Low'],
        ['Bogotá D.C.', '0.15', '0.20', 'Intermediate'],
        ['Medellín', '0.15', '0.20', 'Intermediate'],
        ['Cali', '0.25', '0.25', 'High'],
        ['Bucaramanga', '0.25', '0.25', 'High'],
      ],
      nota:
        'The code itself defines the three bands: a low zone when Aa and Av ' +
        'are both equal to or below 0.10; intermediate when either passes ' +
        '0.10 and neither passes 0.20; high when either goes above 0.20. For ' +
        'a municipality that is not a departmental capital, the value sits ' +
        'in appendix A-4 and has to be looked up by code: Jamundí and ' +
        'Palmira, for instance, are also in the high zone.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And the consequence is not a fine adjustment, it is a prohibition. ' +
        'The structural system tables of Title A state, for each zone, what ' +
        'degree of energy dissipation capacity is admitted: **a ' +
        'moderate-dissipation concrete frame is not allowed in a high ' +
        'seismic hazard zone**, and a minimum-dissipation one is allowed in ' +
        'neither the high nor the intermediate zone. What is a legal option ' +
        'in Barranquilla is not one in Cali.',
    },
    {
      tipo: 'nota',
      texto:
        'That this turns into more money is a professional inference of ' +
        'ours, not something the code says: **the NSR-10 does not mention ' +
        'costs anywhere.** What it does say, and this is what matters here, ' +
        'is that the zone changes the structural system admitted and the ' +
        'reinforcement detailing that has to be met. What the code demands ' +
        'when an existing structure has to be touched is in ' +
        '[structural strengthening and the NSR-10](/blog/reforzamiento-estructural-y-nsr-10).',
    },
    {
      tipo: 'nota',
      texto:
        'And the qualifier almost nobody makes, because it takes having read ' +
        'the bulletin rather than the headline: **the results of the index ' +
        'by city are changes, not levels.** That a geographical domain ' +
        'records the lowest annual change in the country does not mean that ' +
        'building there is cheaper. It means its prices moved less that ' +
        'year. Confusing the two is the commonest reading error in the ' +
        'sector.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is worth knowing, too, that the domains of the index are not ' +
        'single cities but areas. The bulletin publishes their municipal ' +
        'composition in a footnote, and it matches how a construction market ' +
        'really works:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['ICOCED domain', 'Which municipalities make it up'],
      filas: [
        [
          'Bogotá-Cundinamarca AR',
          'Bogotá, Cajicá, Chía, Cota, Facatativá, Funza, Fusagasugá, La Calera, Madrid, Mosquera, Soacha, Sopó and Zipaquirá',
        ],
        [
          'Valle de Aburrá',
          'Medellín, Barbosa, Bello, Caldas, Copacabana, Envigado, Girardota, Itagüí, La Estrella, Rionegro and Sabaneta',
        ],
        [
          'Barranquilla AM',
          'Barranquilla, Galapa, Malambo, Puerto Colombia and Soledad',
        ],
        ['Cali AU', 'Cali, Jamundí, Palmira and Yumbo'],
      ],
      nota:
        'The Medellín domain takes in Rionegro, which is where the country ' +
        'house corridor of eastern Antioquia sits. It is the kind of detail ' +
        'that gets lost whenever somebody cites "the Medellín index".',
    },

    { tipo: 'titulo', texto: 'What is inside a cost per m², and what is not' },
    {
      tipo: 'parrafo',
      texto:
        'DANE describes the construction of a building by construction ' +
        'chapters, and that nomenclature is a good X-ray of what you are ' +
        'paying for when you pay for building work. Inside them are the site ' +
        'preliminaries; excavation and foundations; structure and roof; ' +
        'masonry and rendering; and the finishes, which the index splits ' +
        'into three types.',
    },
    {
      tipo: 'diagrama',
      svg: ANATOMIA_DEL_M2_EN,
      titulo: 'What is inside a construction cost and what is paid separately',
      pie:
        'The bands are drawn equal on purpose: the real weight of each ' +
        'chapter changes with every project and no public source publishes ' +
        'it. Drawing them at different heights would hint at a proportion ' +
        'nobody measures. What is on the right is paid all the same, and it ' +
        'is in no $/m² figure.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Two practical consequences. The first: **the finishes chapter is ' +
        'what makes two houses of the same size cost wildly different ' +
        'amounts**, and it is also the only one the client decides almost ' +
        'entirely. A cost per square metre with no finishes specification ' +
        'means nothing.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The second: **a construction cost excludes, by definition, the ' +
        'land, the designs, the permits and the paperwork**, and that block ' +
        'gets paid all the same. Which items they are, one by one, and why ' +
        'they get forgotten, is in ' +
        '[the twelve items everyone forgets when budgeting](/blog/doce-partidas-que-se-olvidan-al-presupuestar). ' +
        'I do not repeat them here.',
    },
    {
      tipo: 'nota',
      texto:
        'That pre-investment block can add, in our experience, of the order ' +
        'of a quarter to 40% on top of the construction cost. I say it that ' +
        'way, with "of the order of", because **it is an order of magnitude ' +
        'from the studio and not a published statistic**: no Colombian ' +
        'source, official or from the industry, measures it. What is ' +
        'verifiable is the exclusion, not the percentage.',
    },

    { tipo: 'titulo', texto: 'VAT on construction does not work the way you think' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part that settles the most arguments in a contract ' +
        'meeting: hardly anybody has it clear, and it changes the comparison ' +
        'between two offers completely.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Colombia has a specific rule for contracts for the construction of ' +
        'immovable property, and it sits in the single consolidated decree ' +
        'on tax matters:',
    },
    {
      tipo: 'cita',
      texto:
        'In contracts for the construction of immovable property, value ' +
        'added tax is generated on the part of the income corresponding to ' +
        'the fees obtained by the builder. Where no fees are agreed, the tax ' +
        'shall accrue on the remuneration for the service corresponding to ' +
        'the builder’s profit.',
      fuente: 'Decreto 1625 de 2016, article 1.3.1.7.9',
    },
    {
      tipo: 'parrafo',
      texto:
        'In other words: **VAT is not assessed on the total value of the ' +
        'works**, but on the builder’s fees, or on their profit if no fees ' +
        'were agreed. The rule comes from Decreto 1372 de 1992 and is still ' +
        'being applied.',
    },
    {
      tipo: 'parrafo',
      texto:
        'But it carries three conditions and one trade-off, and all four ' +
        'matter:',
    },
    {
      tipo: 'lista',
      items: [
        '**The contract has to state expressly** what the fee or profit portion is. It is not a calculation made afterwards, on the invoice.',
        '**That portion may not be lower** than the one commercially corresponding to equal or similar contracts. The rule shuts the door on declaring a token profit.',
        '**It has to be a contract for the construction of immovable property**, and not everything that looks like one is one. Maintenance and upkeep are not, and that changes the base entirely.',
        '**And the trade-off:** the builder **cannot deduct** the VAT paid on materials and other costs of the works. Only the VAT on expenses tied to their fees is deductible.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The fourth is what explains why this is not the bargain it looks ' +
        'like. The VAT on materials **is already inside the price you were ' +
        'quoted**, as an increase in the cost of the works: it did not ' +
        'disappear, it moved. What the rule prevents is VAT being charged ' +
        'twice on the same thing, not the works ceasing to bear VAT.',
    },
    {
      tipo: 'titulo',
      texto: 'And the AIU decides none of this',
    },
    {
      tipo: 'parrafo',
      texto:
        'There is a very widespread confusion between two things that share ' +
        'a name. The **AIU** — administration, contingencies and profit — is ' +
        'a pricing structure inside a works budget: legitimate, ordinary and ' +
        'useful for comparing offers. And there is, separately, a **special ' +
        'AIU taxable base** in the Estatuto Tributario, the consolidated tax ' +
        'statute, which is another thing altogether.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That special base, in article 462-1, applies to integrated cleaning ' +
        'and catering services, to security work authorised by the ' +
        'Superintendencia de Vigilancia Privada, to temporary employment ' +
        'services, to worker cooperatives, to union contracts and to the ' +
        'transport of valuables. **It does not mention construction ' +
        'contracts**, which is why the tax administration has held that it ' +
        'does not apply to them.',
    },
    {
      tipo: 'nota',
      texto:
        'Practical consequence: a budget that says "AIU 25%" **does not turn ' +
        'that 25% into the VAT base**. The base is fixed by whatever the ' +
        'contract states as the builder’s fees or profit, with the ' +
        'commercial floor the rule demands. Two identical acronyms for two ' +
        'different things.',
    },
    {
      tipo: 'titulo',
      texto: 'Design fees travel a different route',
    },
    {
      tipo: 'parrafo',
      texto:
        'Architectural design is not a contract for the construction of ' +
        'immovable property: it is a professional service, and in a service ' +
        'the taxable base is the total value of the transaction, at the ' +
        'general rate of 19%. **The same professional can have two different ' +
        'bases depending on the object of the contract signed**: the total ' +
        'one when designing, the special one when building.',
    },
    {
      tipo: 'nota',
      texto:
        'A note on method, because I promised to publish nothing without ' +
        'saying where it comes from: that architectural services are taxed ' +
        'at 19% we verified **by absence** — they do not appear in the list ' +
        'of excluded services in article 476 of the Estatuto Tributario, nor ' +
        'in the list of services at 5% in article 468-3 — and not through a ' +
        'rule that names them. It is a sound conclusion, but it is worth ' +
        'knowing how it is built. What is express is the general 19% rate in ' +
        'article 468.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And one threshold that changes an independent professional’s life: ' +
        'whoever does not exceed 3,500 UVT of gross income from the activity ' +
        '— the UVT being the tax value unit Colombia indexes such thresholds ' +
        'to — and who meets five further conditions, all of them, is not ' +
        'liable for VAT. But **to enter into a single taxable contract worth ' +
        '3,500 UVT or more you have to register beforehand** as liable, and ' +
        'the same goes when several contracts add up to that figure. It is a ' +
        'formal requirement the client must demand, and it always turns up ' +
        'late and always halfway through the signing.',
    },

    {
      tipo: 'titulo',
      texto: 'How to ask for a cost per m² that is actually useful',
    },
    {
      tipo: 'parrafo',
      texto:
        'A value per square metre does exist: a professional produces one ' +
        'for a specific project, and it is an estimate with its assumptions ' +
        'declared. That is legitimate and it is what we do. What does not ' +
        'exist is the national table. For the estimate you are handed to be ' +
        'comparable with another, it has to bring these six things:',
    },
    {
      tipo: 'lista',
      items: [
        '**The reference date of the prices.** Without it there is no updating and no arguing six months later.',
        '**The municipality**, not the region. Transport and labour are local.',
        '**The scope**: whether it is a construction cost or a project cost, and what is left outside. The list of exclusions is the most useful part and the one almost never there.',
        '**The finishes specification**, even if only by tiers. It is what moves the figure most.',
        '**The chapter structure**, so you can compare against another offer split the same way.',
        '**Whether it includes administration, contingencies, profit and taxes**, and on which line. An offer that shows them always looks dearer than one that diluted them, and hardly ever is.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'And a warning that stands on its own: **a cost per square metre ' +
        'estimated before the soil survey and before the planning enquiry is ' +
        'an assumption, not a budget.** The soil decides the foundations and ' +
        'the planning rules decide how much can be built. Without those two ' +
        'facts, any figure is a well-meant bet.',
    },

    { tipo: 'titulo', texto: 'The short answer' },
    {
      tipo: 'lista',
      items: [
        'There is no official $/m² figure in Colombia. Not from DANE, not from Camacol.',
        'What there is are indices, which measure change and not level, and area statistics.',
        'The index serves to update a dated budget of your own, and it has to be applied chapter by chapter: labour rises a good deal faster than the total.',
        'The construction cost does not include land, designs, permits or paperwork, and that block is not marginal.',
        'A value per square metre with no date, municipality, scope and finishes cannot be compared with anything.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'At Plano Base the figure per square metre is not the first thing we ' +
        'hand over: it is the last, and it comes out of the planning ' +
        'enquiry, the soil survey and a concept design with areas and ' +
        'specifications. If you have a plot, that is the order in which we ' +
        'look at it, and in that order the figure arrives late but arrives ' +
        'sound.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The figures quoted come from the ICOCED technical bulletin for ' +
        'March 2026, published on 30 April 2026, and from the methodological ' +
        'record of the index. They change every month: consult the current ' +
        'bulletin before using any of them.',
    },
  ],
}
