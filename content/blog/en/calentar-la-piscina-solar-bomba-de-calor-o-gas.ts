import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Calentar la piscina: solar, bomba de calor o gas».
 *
 * Vocabulario que fija esta pieza: `manta térmica` / `cubierta flotante` →
 * **thermal cover**, `bomba de calor` → **heat pump**, `COP` → **COP**
 * (coefficient of performance, glosado en su primer uso), `resistencia
 * eléctrica` → **electric element**, `colector solar` → **solar collector**,
 * `poder calorífico bruto` → **gross calorific value**, `piso térmico` →
 * **altitude band** (el término ya usado por `casa-bioclimatica-por-piso-termico`),
 * `lámina de agua` → **water surface**, `condición de ensayo` → **test
 * condition**, `deshumidificación` → **dehumidification**.
 *
 * **`etiquetado de eficiencia energética` → energy efficiency labelling**, y
 * `RETIQ` se conserva sin traducir y se glosa, igual que se hace con RETIE y
 * con NSR-10. La declaración de que el RETIQ no cubre las bombas de calor va
 * entera y sin suavizar: es la columna de la sección, hermana de la del
 * «dispositivo homologado» de la pieza de la Ley 1209.
 *
 * Separadores, con especial cuidado dentro de las tablas: «1,163 kWh» →
 * «1.163 kWh», «$960,34» → «$960.34», «$3.517,06» → «$3,517.06», «35,4 MJ/m³»
 * → «35.4 MJ/m³», «1.150 BTU» → «1,150 BTU», «$2,49 millones» → «$2.49
 * million», «$498.000» → «$498,000». Y el porcentaje va pegado: «85 %» →
 * «85%», «50 y el 70 %» → «50% and 70%».
 *
 * Las condiciones de piscina cubierta se rehicieron sobre la **Resolución 929
 * de 2026**, numeral 10.6, que supera materialmente a la Resolución 1510 de
 * 2011: el agua pasa de 38 °C a **40 °C**, la humedad de 60–75 % a **50–70%**,
 * y entran el CO₂ (400–600 ppm), el aire 1–3 °C por encima del agua y la
 * renovación de 4 a 6 veces por hora. Los 8 m³ por bañista se mantuvieron.
 */
export const traduccion: TraduccionPost = {
  slug: 'calentar-la-piscina-solar-bomba-de-calor-o-gas',
  titulo: 'Heating a pool: solar, heat pump or gas',
  traducido: '2026-09-05',
  resumen:
    'A pool is not heated: it is stopped from cooling. Evaporation carries off ' +
    'some 86 kWh a day, more than any piece of equipment will replace cheaply. ' +
    'Here is the comparison per useful kWh, on August 2026 tariffs, and the ' +
    'regulatory fact nobody mentions.',
  metaDescripcion:
    'Solar, heat pump or gas for a pool in Colombia: what each useful kWh ' +
    'costs on 2026 tariffs, and which system suits.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Almost every heating quotation starts with the equipment. Starting ' +
        'there is starting at the end, and it is why so many people pay for a ' +
        'heat pump they then never switch on, because the first bill ' +
        'frightened them.',
    },
    {
      tipo: 'parrafo',
      texto:
        'One sentence puts the whole problem in order: **a pool is not heated, ' +
        'it is stopped from cooling.** Warm water loses heat three ways — ' +
        'evaporation, convection to the air, and radiation to the night sky — ' +
        'and in an uncovered pool the first takes most of it. Whatever you ' +
        'install is competing against that loss, every day, forever.',
    },

    { tipo: 'titulo', texto: 'First: how much energy this actually is' },
    {
      tipo: 'parrafo',
      texto:
        'One constant settles half of these arguments, and it depends on no ' +
        'rule and no supplier: raising one cubic metre of water by one degree ' +
        'Celsius takes **1.163 kWh**. That is the specific heat of water, and ' +
        'nobody negotiates it.',
    },
    {
      tipo: 'dato',
      valor: '419 kWh',
      etiqueta:
        'to take the reference pool — 45 m³ — from 20 to 28 °C, once',
      fuente: '45 m³ × 8 °C × 1.163 kWh per m³ per °C',
    },
    {
      tipo: 'parrafo',
      texto:
        'With an efficient heat pump, those 419 kWh of heat cost in the order ' +
        'of **$80,000** in electricity at August 2026 tariffs. That sounds ' +
        'perfectly bearable, and it is. Raising the temperature is not the ' +
        'problem: **holding** it is.',
    },

    { tipo: 'titulo', texto: 'Evaporation takes nearly all of it' },
    {
      tipo: 'parrafo',
      texto:
        'When a kilogram of water evaporates, it carries away the heat it took ' +
        'to evaporate it: around 2,430 kJ. Translated into the unit on your ' +
        'bill, **evaporating one millimetre of depth over one square metre ' +
        'costs 0.675 kWh**. Now multiply.',
    },
    {
      tipo: 'dato',
      valor: '86 kWh a day',
      etiqueta:
        'what evaporation takes from an uncovered 32 m² pool losing 4 mm a day',
      fuente: '0.128 m³ a day × 2,430 kJ per kilogram, converted to kWh',
    },
    {
      tipo: 'nota',
      texto:
        'The 4 mm a day is an assumption and it has to be said: **I found no ' +
        'published Colombian measurement of pool evaporation.** It is an ' +
        'engineering order of magnitude, not a national figure. Real ' +
        'evaporation rises with water temperature, falls with humidity and ' +
        'jumps with wind — an exposed pool on a ridge loses far more than a ' +
        'sheltered one. The arithmetic is left in the open so you can redo it ' +
        'with your own measurement.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eighty-six kWh a day is **2,592 kWh a month**. Set that beside the ' +
        '419 kWh of raising the temperature once and you can see where the ' +
        'cost really sits: not in heating, in replacing.',
    },

    { tipo: 'titulo', texto: 'A thermal cover is the cheapest heating system there is' },
    {
      tipo: 'parrafo',
      texto:
        'A floating cover on the water surface heats nothing. What it does is ' +
        'cut evaporation, which is where those 2,592 kWh a month come from. ' +
        'Every percentage point of evaporation it prevents is a percentage ' +
        'point your equipment does not have to replace, on any fuel and at any ' +
        'tariff.',
    },
    {
      tipo: 'nota',
      texto:
        'Hence a recommendation that depends on no brand: **settle the cover ' +
        'before you settle the equipment, and size the equipment with the ' +
        'cover in place.** A system sized for an uncovered pool that is then ' +
        'covered ends up oversized — and an oversized heat pump cycles on and ' +
        'off all day, which is how its life gets shortened. The cover also ' +
        'does two things free: it cuts water top-up and it cuts chemical use, ' +
        'because less new water means less imbalance.',
    },

    { tipo: 'titulo', texto: 'The three systems, compared per useful kWh' },
    {
      tipo: 'parrafo',
      texto:
        'Comparing gas equipment with electric equipment needs a common unit, ' +
        'and the only honest one is the **kilowatt hour that actually enters ' +
        'the water**. Every tariff below is from EPM, all from Medellín and ' +
        'all from August 2026: same utility, same city, same month. Mixing ' +
        'markets would make the table fuller and completely useless.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['System', 'What you pay for', 'Cost of a useful kWh', 'What the brochure leaves out'],
      filas: [
        [
          '**Electric element**',
          '$960.34 per kWh',
          '**$960**',
          'Each kWh of electricity gives one kWh of heat and not a joule more. Fine for a small spa; in a pool it is unworkable',
        ],
        [
          '**Heat pump**',
          '$960.34 per kWh, divided by the COP',
          '**$192 at COP 5 · $274 at COP 3.5**',
          'It does not make heat: it moves heat from the air into the water. Its performance falls as air temperature falls, which is exactly when you want it',
        ],
        [
          '**Natural gas**',
          '$3,517.06 per m³',
          '**$348 to $421**',
          'The range is not vagueness: a cubic metre of gas does not always carry the same energy. Why is set out below',
        ],
        [
          '**Solar thermal**',
          'Nothing, once installed',
          '**$0**',
          'It delivers when the sun is out and delivers nothing at night, which is when the pool cools. An excellent supplement and a poor sole system',
        ],
      ],
      nota:
        'Electricity and gas: EPM August 2026 tariff schedules, residential ' +
        'stratum 4, tension level 1. The useful-kWh cost of gas assumes 85% ' +
        'efficiency at the heater — a stated assumption, not a Colombian ' +
        'measurement.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Taken to a full month on the reference pool, uncovered: an electric ' +
        'element would cost in the order of **$2.49 million**, gas between ' +
        '**$0.90 and $1.09 million**, and a heat pump at COP 5 about ' +
        '**$498,000**. With the surface covered, all of it divides down. That ' +
        'is the whole article in two sentences.',
    },

    { tipo: 'titulo', texto: 'Gas: why a cubic metre is not always worth the same' },
    {
      tipo: 'parrafo',
      texto:
        'You are billed volume, but what you buy is energy, and how much ' +
        'energy a cubic metre carries depends on the composition of the gas. ' +
        'The rule governing transport puts bounds on it: the gross calorific ' +
        'value of gas delivered to the transporter must sit between **35.4 ' +
        'MJ/m³ and 42.8 MJ/m³** — between 950 and 1,150 BTU per cubic foot.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is between **9.8 and 11.9 kWh per cubic metre**, and it is where ' +
        'the range in the table comes from. The figures above use the low end, ' +
        'which is the conservative assumption against gas. And the tariff ' +
        'changes from market to market: the same cubic metre billed at ' +
        '$3,517.06 in Medellín costs $3,125.89 in Valle and northern Cauca in ' +
        'the same month. Redo the sum with the number on your own bill, not ' +
        'with the one in this article.',
    },

    { tipo: 'titulo', texto: 'The heat pump: the COP nobody verifies' },
    {
      tipo: 'parrafo',
      texto:
        'The coefficient of performance — the COP — says how many kilowatt ' +
        'hours of heat the unit delivers for each kilowatt hour of electricity ' +
        'it draws. A COP of 5 means it moves five times more heat than it ' +
        'spends. It is real, and it is why the heat pump wins the table ' +
        'comfortably.',
    },
    {
      tipo: 'nota',
      texto:
        'But that number has to be read carefully, and here is the fact that ' +
        'does not circulate: **the Colombian energy efficiency labelling ' +
        'regulation, RETIQ, does not cover heat pumps.** Its list of labelled ' +
        'equipment takes in air conditioning, refrigeration, ballasts, motors, ' +
        'washing machines, electric storage and gas water heaters and gas ' +
        'cooking appliances; heat pumps are expressly left out. **There is no ' +
        'Colombian efficiency label on the machine that will heat your pool**, ' +
        'and the COP on the data sheet is the one the manufacturer declares, ' +
        'measured under whatever conditions it chooses.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That matters because COP is not a fixed number: it falls as air ' +
        'temperature falls, and air is the source the unit draws its heat ' +
        'from. A COP measured with air at 27 °C is not the one you will have ' +
        'at five in the morning on the Bogotá savannah. Always ask for **the ' +
        'test condition alongside the COP**: without it the number means ' +
        'nothing. And if you are sold a COP without being told at what air and ' +
        'water temperature it was measured, you know what it is worth.',
    },

    { tipo: 'titulo', texto: 'Solar: the sum that gives you the collector area' },
    {
      tipo: 'parrafo',
      texto:
        'Colombia receives, on average, in the order of **4.5 kWh per square ' +
        'metre per day** of global solar radiation, according to the IDEAM and ' +
        'UPME atlas; on the Bogotá savannah the average is somewhat below that ' +
        'and on the Caribbean coast considerably above.',
    },
    {
      tipo: 'parrafo',
      texto:
        'A pool collector — the unglazed polypropylene kind, working at a ' +
        'temperature very close to ambient — captures a high fraction of it. ' +
        'Assuming 60% as a daily average, replacing the 86 kWh evaporation ' +
        'carries off calls for **86.4 ÷ (4.5 × 0.6) ≈ 32 m² of collector**.',
    },
    {
      tipo: 'nota',
      texto:
        'Look at that number: **32 m² is exactly the surface of the pool.** ' +
        'The rule of thumb every installer repeats — "the collector should be ' +
        'about the size of the water surface" — need not be quoted from ' +
        'anyone: it falls straight out of the arithmetic. And it also makes ' +
        'clear why solar so often disappoints: on a roof without 32 m² free ' +
        'and correctly oriented, no solar system will hold the temperature, ' +
        'however good the kit.',
    },

    { tipo: 'titulo', texto: 'Altitude decides before the equipment does' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part that saves the most money and is almost never ' +
        'asked. In Cali, in Jamundí or on the coast, an uncovered, ' +
        'well-oriented pool settles on its own at a temperature many people ' +
        'find perfectly comfortable, and what is needed is not a heater but a ' +
        'cover for the nights. On the Bogotá savannah the night air is another ' +
        'thing and the balance changes completely: there really is a heating ' +
        'problem there, and there the cover stops being optional. It is the ' +
        'same logic as [the bioclimatic house by altitude ' +
        'band](/blog/casa-bioclimatica-por-piso-termico), applied to 45 m³ of ' +
        'water.',
    },
    {
      tipo: 'nota',
      texto:
        'If the pool is going to be enclosed, the rule adds conditions of its ' +
        'own, worth knowing before you roof it over: **water temperature at or ' +
        'below 40 °C, air between 1 and 3 °C above the water, relative ' +
        'humidity between 50% and 70%, carbon dioxide between 400 and 600 ppm, ' +
        'air changed 4 to 6 times an hour and a minimum of 8 m³ of air per ' +
        'bather** — all measured and recorded daily, with a thermohygrometer ' +
        'and a CO₂ meter on show. Enclosing a pool without solving ' +
        'dehumidification is not heating it: it is manufacturing a ' +
        'condensation defect in the building.',
    },

    { tipo: 'titulo', texto: 'The right order of decisions' },
    {
      tipo: 'lista',
      items: [
        '**Decide the temperature you want, and for how many months of the year.** 26 °C at weekends is not 30 °C year-round, and the difference on the bill is several times over.',
        '**Settle the cover.** It is the cheapest heating system there is and it sets the size of everything else.',
        '**Look at the site before the catalogue.** Orientation, shade and wind decide a good part of the balance at no cost at all.',
        '**If there is clear, well-oriented roof, fit solar.** It is the cheapest kWh there is and it supplements any other system.',
        '**To hold the temperature, a heat pump**, asking for the COP with its test condition in writing.',
        '**Keep gas for fast warm-up**, for back-up and for cold climates, where a heat pump loses performance just when most is asked of it.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The person who leads this line of work at the practice brings fifteen ' +
        'years of designing hydraulic systems and bodies of water, and the ' +
        'heating lesson that recurs most is this: **almost no temperature ' +
        'problem is solved with a bigger machine.** It is solved by covering ' +
        'the pool, correcting the siting, and sizing against the real loss ' +
        'rather than the volume. A big machine on an uncovered pool is a big ' +
        'bill, and nothing else.',
    },
  ],
}
