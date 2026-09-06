import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Sal o cloro: el mito del agua salada».
 *
 * La tabla de frecuencias **se rehízo entera** sobre la Resolución 234 de
 * 2026, que ocupa el campo de la Resolución 1618 de 2010: la analítica
 * microbiológica pasa de mensual a **trimestral**, *Cryptosporidium* y
 * *Giardia* dejan de ser anuales para volverse un análisis por evento de
 * contaminación fecal, y entra *Legionella*. Ya no coincide con la tabla de
 * `en/ley-1209-piscinas-copropiedad`, que sigue siendo la de la 1618; lo que sí
 * se conserva de allí es el vocabulario —«Free residual chlorine»,
 * «Oxidation-reduction potential», «Langelier index»— para que los dos
 * artículos nombren igual lo que sí sigue siendo lo mismo.
 *
 * `superada por` → **superseded in substance by**, nunca «repealed by»: no hay
 * cláusula derogatoria, y afirmar una derogación sería afirmar algo que la
 * norma no hizo.
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
 * to 4,000 mg/L», «35.000 mg/L» es «35,000 mg/L», «200 UFC/100 mL» es «200
 * CFU/100 mL» y «1.000 cm³» es «1,000 cm³». Ley 1209, Resolución 234 de 2026 y
 * Resolución 929 de 2026 no se traducen; INVIMA y ONAC tampoco, y aparecen una
 * sola vez, en la declaración de lo que **no** encontré en la norma nueva.
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
        'setting pool water quality in Colombia requires dosing to ensure the ' +
        '**continuous and permanent presence of the disinfectant**, and it ' +
        'measures **free residual chlorine** in every type of pool, with **no ' +
        'exception whatever for salt water**. In other words: if your salt ' +
        'pool meets the rule, there is chlorine in the water. And if there is ' +
        'not, it does not meet the rule. There is no third possibility.',
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
        '**It satisfies, out of the box, what the rule asks of a dosing system.** This is the strong argument and hardly anybody uses it.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'The last one is worth dwelling on. Article 5 of Resolución 234 de ' +
        '2026 asks four things of a dosing system: that it be ' +
        '**independent**, that it be **proportional to the recirculation ' +
        'flow**, that it carry an **interlock preventing operation when there ' +
        'is no return flow**, and that it ensure the **continuous and ' +
        'permanent** presence of the disinfectant. A salt chlorinator meets ' +
        'all four by construction. Manual addition is not banned, but it is ' +
        'banned **while the public has access to the pool**. In a community of ' +
        'owners currently dosing by hand and by eye, that is a compliance ' +
        'argument — not a convenience one — and it carries far more weight at ' +
        'a general meeting than any brochure promise.',
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
      cabeceras: ['What is measured', 'How often', 'By whom, and where'],
      filas: [
        ['Free residual chlorine, pH, temperature', '**Daily**, at least at the start of the day and at peak occupancy', 'The operator, on site'],
        ['Floating organic matter and sediment', 'Daily', 'The operator, by eye: it must be absent'],
        ['Turbidity, oxidation-reduction potential, dissolved solids, conductivity', '**Quarterly**, at peak occupancy', 'Laboratory'],
        ['Heterotrophs, thermotolerant coliforms, *E. coli*', '**Quarterly**, at peak occupancy', 'Laboratory: heterotrophs under 200 CFU/100 mL; the other two, **0**'],
        ['*Legionella*', 'Quarterly and at the start of the day', 'Only in heated or aerosolising pools and in similar structures'],
        ['*Cryptosporidium* and *Giardia lamblia*', '**On faecal contamination, during the event**', 'Laboratory: **0** oocysts or cysts per 1,000 cm³'],
      ],
      nota:
        'Resolución 234 de 2026, technical annex I. In peak season — school ' +
        'holidays, December and January, public festivities — **the quarterly ' +
        'frequency becomes monthly**. The Langelier index is still compulsory ' +
        'and calculated the same way: it is explained in [what Ley 1209 really ' +
        'requires](/blog/ley-1209-piscinas-copropiedad).',
    },
    {
      tipo: 'nota',
      texto:
        'And three duties salt does not lift either: the laboratory running ' +
        'the analyses must **demonstrate validation or verification of its ' +
        'methods**; chemical products require a **technical data sheet and a ' +
        'safety data sheet**, labelled to the globally harmonised system; and ' +
        'the **log book or computerised register** has to be up to date and ' +
        'available whenever the health authority asks for it. An automatic ' +
        'system fills the water with chlorine; it does not fill in the book.',
    },
    {
      tipo: 'nota',
      texto:
        'Two things have to be declared, because keeping quiet about them ' +
        'would feign more certainty than I have. First: **the numeric columns ' +
        'of the physico-chemical table in the annex come out of the official ' +
        'PDF with a degraded text layer** and I am not transcribing them; the ' +
        'frequencies do read cleanly and are the ones above. For the exact pH ' +
        'and chlorine values that apply to your case, go to the annex. ' +
        'Second: the previous rule required an ONAC-accredited laboratory and ' +
        'INVIMA sanitary registration for chemicals. **I searched for both ' +
        'requirements in the new resolution and they do not appear**, not ' +
        'once. What does appear is validation of methods and the product ' +
        'safety data sheet. I say it with due caution: their absence from this ' +
        'resolution does not mean they are absent from another.',
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
