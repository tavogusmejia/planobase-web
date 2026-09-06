import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Sal o cloro: el mito del agua salada».
 *
 * La tabla de frecuencias de análisis **se copia palabra por palabra** de la
 * traducción de `ley-1209-piscinas-copropiedad`: «Free residual chlorine»,
 * «Combined chlorine (chloramines)», «Oxidation-reduction potential», «pH and
 * temperature», «Alkalinity, hardness, cyanuric acid», «Coliforms». Es el
 * mismo dato de la misma resolución y traducirlo dos veces con dos
 * vocabularios distintos sería exactamente el error que el contrato de
 * traducción está para impedir.
 *
 * Vocabulario que fija esta pieza: `celda` → **cell**, `electrolizador` →
 * **salt chlorinator**, `ácido hipocloroso` → **hypochlorous acid**,
 * `hipoclorito` → **hypochlorite**, `cloruro` → **chloride**, `dosificación
 * automática` → **automatic dosing**, `picadura por cloruros` → **chloride
 * pitting**, `eflorescencia` → **efflorescence**, `retrolavado` →
 * **backwashing**, `vertimiento` → **discharge**, `acero de refuerzo` →
 * **reinforcement**, `libro de registro` → **log book** (ya fijado).
 *
 * `mg/L` se conserva. Los separadores cambian: «3.000 a 4.000 mg/L» es «3,000
 * to 4,000 mg/L», «35.000 mg/L» es «35,000 mg/L», «0,3 mg/L» es «0.3 mg/L»,
 * «7,0 y 8,0» es «7.0 and 8.0». INVIMA, ONAC, Ley 1209 y Resolución 1618 de
 * 2010 no se traducen.
 */
export const traduccion: TraduccionPost = {
  slug: 'piscina-de-sal-o-cloro',
  titulo: 'Salt or chlorine: the salt water myth',
  traducido: '2026-09-05',
  resumen:
    'A salt pool is a chlorine pool: the cell makes the chlorine on site ' +
    'instead of you buying it in a tub. And the proof is not chemical, it is ' +
    'regulatory. What salt really buys you, what it really costs, and what has ' +
    'to be measured in both.',
  metaDescripcion:
    'Salt or chlorine pool: what the cell actually does, what Colombian rules ' +
    'require of both alike, and which one suits your case.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'At the point of sale the line is always the same: "with salt you can ' +
        'forget about chlorine". It is a very good line and it is false, and ' +
        'it is worth understanding exactly in what sense, because a salt ' +
        'system has genuine advantages that get lost behind a promise it ' +
        'cannot keep.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**A salt pool is a chlorine pool.** The difference is not in the ' +
        'disinfectant: it is in where it is made. In a conventional pool you ' +
        'buy chlorine and add it. In a salt pool, a unit makes it inside the ' +
        'pipework, out of salt dissolved in the water, while the pump runs.',
    },
    {
      tipo: 'nota',
      texto:
        'And the proof of this is not chemical, it is regulatory. The rule ' +
        'setting pool water quality in Colombia requires between **1 and 3 ' +
        'mg/L of free residual chlorine**, and it carries **no exception ' +
        'whatever for salt water**. In other words: if your salt pool meets ' +
        'the rule, there is chlorine in the water. And if there is not, it ' +
        'does not meet the rule. There is no third possibility.',
    },

    { tipo: 'titulo', texto: 'What the cell actually does' },
    {
      tipo: 'parrafo',
      texto:
        'Salt water passes through a cell with two electrodes and a direct ' +
        'current. The chloride in the salt is oxidised and forms, on contact ' +
        'with water, **hypochlorous acid**: precisely the same substance that ' +
        'disinfects when you tip hypochlorite in from a tub. Not a relative, ' +
        'not a substitute: the same molecule.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there is a second leg of the cycle that explains the feeling that ' +
        '"salt never runs out": once the chlorine has done its work, it turns ' +
        'back into chloride. The salt is recycled. **It is not consumed: it is ' +
        'lost**, with splash-out, with filter backwashing, with rain spilling ' +
        'over the edge, and with every draining.',
    },
    {
      tipo: 'nota',
      texto:
        'That same reaction produces the first practical consequence the ' +
        'brochure leaves out: hydroxide forms at the other electrode, and that ' +
        '**pushes pH steadily upward**. A salt pool does not take chemicals ' +
        'off your hands: it swaps one set for another. You will buy less ' +
        'chlorine and a good deal more acid.',
    },

    { tipo: 'titulo', texto: 'Why it does not taste of the sea' },
    {
      tipo: 'parrafo',
      texto:
        'Because it is nowhere near. A salt pool works in the region of ' +
        '**3,000 to 4,000 mg/L** of salt, whereas sea water sits around ' +
        '**35,000 mg/L**: roughly a tenth. That is the whole reason for the ' +
        'soft feel of the water, and it is a real and perfectly legitimate ' +
        'advantage.',
    },
    {
      tipo: 'nota',
      texto:
        'The exact concentration is set by no Colombian rule: **it is set by ' +
        'the cell manufacturer**, and running below or above its range damages ' +
        'the cell. It is equipment data, not pool data, and it should be ' +
        'requested in writing before purchase, together with the water ' +
        'temperature range within which the cell produces what it claims to ' +
        'produce.',
    },

    { tipo: 'titulo', texto: 'What salt genuinely buys you' },
    {
      tipo: 'lista',
      items: [
        '**Continuous dosing instead of spikes.** Chlorine goes in a little at a time, rather than in a slug every two or three days. A steady level irritates less than one that rises and falls, and much of what people call "chlorine allergy" is in fact a reaction to the chloramines that appear when the level drops.',
        '**Less handling of product.** Nobody carries or stores tubs of hypochlorite, which is a real domestic hazard and a source of accidents.',
        '**The feel of the water.** It is subjective and it is true: at 3,000 mg/L water feels different, and plenty of people prefer it.',
        '**It satisfies, out of the box, the requirement for automatic dosing.** This is the strong argument and hardly anybody uses it.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The last one is worth dwelling on. Article 18 of Resolución 1510 de ' +
        '2011 requires treatment products to be added **through automatic ' +
        'dosing systems**, and allows manual addition only outside opening ' +
        'hours. A salt chlorinator is precisely an automatic dosing system. In ' +
        'a community of owners currently dosing by hand and by eye, that is a ' +
        'compliance argument — not a convenience one — and it carries far more ' +
        'weight at a general meeting than any brochure promise.',
    },

    { tipo: 'titulo', texto: 'What it genuinely costs' },
    {
      tipo: 'lista',
      items: [
        '**The cell is a consumable.** It wears out, it scales up with calcium, and the day comes when it is replaced. It is the item missing from the initial comparison and the one that settles the ten-year cost. Ask in writing for the service life the manufacturer declares and the replacement price of **that** cell, not of a generic one.',
        '**It only produces while the pump runs.** This is the operating trap of the system: if you cut pumping hours to bring the electricity bill down, you are cutting chlorine production too. The two adjustments are tied together and almost nobody knows it.',
        '**Acid.** pH rises steadily and has to be corrected, so the saving on chlorine is partly offset by what is spent correcting pH.',
        '**Chloride is corrosive.** At 3,000 mg/L, water attacks materials that stand up perfectly well in a conventional pool.',
        '**Draining gets complicated.** Water at 3,000 mg/L of salt does not go on the garden: it salts the soil and kills the planting. With no sewer connection, discharge has to be solved beforehand, not afterwards.',
      ],
    },
    {
      tipo: 'tabla',
      cabeceras: ['Material', 'What 3,000 mg/L of chloride does to it'],
      filas: [
        [
          'Stainless steel in ladders, handrails and fixings',
          'Chloride pitting. Not surface rust: localised corrosion that perforates and can compromise a fixing with no warning',
        ],
        [
          'Aluminium and galvanised steel nearby',
          'Accelerated corrosion, above all on the walkway and on shade structures',
        ],
        [
          'Natural stone at the coping and the walkway',
          'Salt crystallising in the pores, efflorescence and progressive spalling',
        ],
        [
          'Concrete and its steel reinforcement',
          'Chloride is the classic agent of reinforcement corrosion. Which is why waterproofing the shell stops being a finish coat and becomes structural protection',
        ],
        [
          'Heating equipment with a metal exchanger',
          'High risk if the material is not specified for saline water: verify it beforehand, not after installation',
        ],
      ],
      nota:
        'None of this rules the salt system out: it conditions it. A well ' +
        'resolved salt pool specifies materials for saline water from the ' +
        'design stage. A conventional pool converted to salt years later ' +
        'swallows this whole list.',
    },
    {
      tipo: 'nota',
      texto:
        'Hence the decision that saves the most money in the whole business: ' +
        '**if you are going to use salt, decide it at design stage.** ' +
        'Converting an existing pool to salt is cheap on day one and expensive ' +
        'in year three, because the steel, the fixings, the coping and the ' +
        'equipment have already been bought for a different kind of water.',
    },

    { tipo: 'titulo', texto: 'What has to be measured in both alike' },
    {
      tipo: 'parrafo',
      texto:
        'Not one of these duties changes because the pool runs on salt. They ' +
        'are the same for both, and the frequencies are the part most often ' +
        'breached:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['What is measured', 'How often', 'Acceptable value'],
      filas: [
        ['Free residual chlorine', 'Daily', '1 to 3 mg/L'],
        ['Combined chlorine (chloramines)', 'Daily', 'less than 0.3 mg/L'],
        ['Oxidation-reduction potential', 'Daily', '700 mV minimum'],
        ['pH and temperature', 'Weekly', 'pH between 7.0 and 8.0'],
        ['Alkalinity, hardness, cyanuric acid', 'Weekly', 'Alkalinity up to 140; cyanuric acid less than 100'],
        ['Coliforms, *E. coli*, *P. aeruginosa*', 'Monthly', '**0** per 100 cm³'],
      ],
      nota:
        'Resolución 1618 de 2010. The full table, with the Langelier index and ' +
        'the annual analyses, is in [what Ley 1209 really ' +
        'requires](/blog/ley-1209-piscinas-copropiedad).',
    },
    {
      tipo: 'nota',
      texto:
        'And three duties salt does not lift either: analyses go to a ' +
        '**laboratory authorised or accredited by ONAC**, chemical products ' +
        'must hold **INVIMA sanitary registration**, and the **log book** with ' +
        'the daily and weekly measurements has to be up to date and available. ' +
        'An automatic system fills the water with chlorine; it does not fill ' +
        'in the book.',
    },

    { tipo: 'titulo', texto: 'The three lines you will hear' },
    {
      tipo: 'lista',
      items: [
        '**"It is chemical-free water."** No. It is water with chlorine made on site and salt in solution, plus the acid you have to add to correct the pH the system itself pushes up.',
        '**"Nothing needs measuring, the unit handles it."** The unit produces; the rule requires measuring and recording, and the unit does neither. A badly calibrated cell under-produces for weeks without saying so.',
        '**"It works out cheaper."** Depends on the horizon. Less chlorine and more acid, more electricity, and a cell that gets replaced. The honest comparison runs to ten years and has the cell replacement price on the table.',
      ],
    },

    { tipo: 'titulo', texto: 'How to decide' },
    {
      tipo: 'lista',
      items: [
        '**New pool, frequent family use, materials specified from the design stage:** salt is a very good decision, and its best argument is continuous dosing.',
        '**A community of owners currently dosing by hand:** salt settles the automatic dosing requirement in one move, but it calls for a prior review of ladders, fixings, coping and equipment. And it excuses not one single measurement.',
        '**An existing pool with stainless steel on show, natural stone coping or heating already installed:** think twice. Here a conventional system, properly dosed through an automatic doser, is usually the sensible call.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'The person who leads this line of work at the practice brings fifteen ' +
        'years of designing hydraulic systems and bodies of water, and the ' +
        'conclusion on this subject is always the same: **salt is a dosing ' +
        'method, not a different chemistry.** Choose it for what it actually ' +
        'does — dose without spikes and without handling product — and specify ' +
        'the materials accordingly. Choosing it for what the advertisement ' +
        'promises is how you arrive at a pitted ladder four years later.',
    },
  ],
}
