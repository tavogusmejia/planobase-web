import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «¿Necesito licencia para construir una piscina?».
 *
 * El hallazgo que estructura la pieza es una **ausencia**, y en inglés hay que
 * declararla con la misma nitidez: ninguna norma nacional nombra la piscina
 * como modalidad de licencia, así que «pool permit» se escribe entre comillas
 * y se dice que no existe. Suavizarlo dejaría al lector extranjero creyendo
 * que hay un trámite propio que aquí no se explica.
 *
 * Vocabulario del pilar de trámites, ya fijado y respetado entero: `licencia
 * de construcción` → building permit, `obra nueva` → new build, `modalidad` →
 * modality, `curaduría urbana` sin traducir y glosada, `POT` sin traducir y
 * glosado como municipal land-use plan, `índice de ocupación` → site coverage
 * ratio, `aislamientos` → setbacks, `ronda hídrica` → watercourse buffer,
 * `corporación autónoma regional` sin traducir y glosada, `concesión de aguas`
 * → water concession, `vertimiento` → discharge, `intervención estructural` →
 * structural intervention.
 *
 * Vocabulario de piscinas idéntico al de `ley-1209-piscinas-copropiedad`,
 * porque las dos piezas comparten tabla y párrafos: `cerramiento` →
 * enclosure, `salida de succión` → suction outlet, `vaso` → pool shell,
 * `cuarto de máquinas` → plant room, `cubierta antiatrapamiento` →
 * anti-entrapment cover, `sistema de liberación de vacío` → vacuum release
 * system, `alarma de inmersión` → immersion alarm. Las dos negaciones que se
 * reutilizan de aquella pieza se traducen igual de firmes: la casa unifamiliar
 * no queda fuera de la ley, y ninguna norma colombiana fija dimensiones de
 * cerramiento.
 *
 * Separadores: «1,20 m» es «1.20 m» y «0,90 m» es «0.90 m». En una tabla, una
 * coma decimal española convertiría metro y medio en mil quinientos.
 */
export const traduccion: TraduccionPost = {
  slug: 'necesito-licencia-para-construir-una-piscina',
  titulo: 'Do I need a permit to build a swimming pool?',
  traducido: '2026-09-05',
  resumen:
    'There is no such thing as a "pool permit": no national rule names one. ' +
    'The answer depends on where, on what, and what you touch — and there ' +
    'are safety duties that apply whether you hold a permit or not.',
  metaDescripcion:
    'When a building permit is needed for a pool in Colombia, which modality ' +
    'applies, and what the law requires even when you need no permit.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'The short answer is that it depends, and it is worth understanding ' +
        'what it depends on, because the mistake runs in both directions: ' +
        'some people build without a permit a pool that needed one, and ' +
        'others spend months on a procedure that in their case was not ' +
        'required at all.',
    },
    {
      tipo: 'nota',
      texto:
        'The starting point, and it is an absence worth declaring: **no ' +
        'Colombian national rule names the swimming pool as a permit ' +
        'modality.** There is no such thing as a "pool permit". What exists ' +
        'are the general modalities of building permit, and the real question ' +
        'is which of them your case falls into.',
    },

    { tipo: 'titulo', texto: 'The three questions that decide' },
    {
      tipo: 'lista',
      items: [
        '**Where?** Urban land, rural land, or a property under propiedad horizontal.',
        '**On what?** Open ground, an existing slab, a terrace, a roof.',
        '**What does it touch?** Structure, common property, watercourse buffer, setbacks.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Those three answers settle almost any case. Let us take them one at ' +
        'a time.',
    },

    { tipo: 'titulo', texto: 'A pool in the garden of a house' },
    {
      tipo: 'parrafo',
      texto:
        'It is the commonest case and the one that generates most argument. A ' +
        'built pool on the open ground of a property is a **new building on ' +
        'an unbuilt area**, and that is exactly the definition of the new ' +
        'build modality: the authorisation to carry out building works on ' +
        'unbuilt land.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Even though the national rule does not name it, a built pool ' +
        'occupies land, has a structure, has water and drainage services and ' +
        'alters the ground. That is why, in most municipalities, it is ' +
        'processed as construction.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there are three things in the POT, the municipal land-use plan, ' +
        'that can decide it, all of them municipal:',
    },
    {
      tipo: 'lista',
      items: [
        '**Whether the pool counts towards the site coverage ratio.** Some land-use plans exclude uncovered hard surfaces; others say nothing. If it counts and you are already at the limit, the project changes.',
        '**The setbacks.** The pool has to respect the distances to the boundaries like any other building, and on a small plot that is usually the restriction that governs.',
        '**The enclosure and any roof over it**, if you are going to build them. An enclosure has a permit modality of its own, and a roof over the pool is built area.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Here is the advice that saves the most time and that almost nobody ' +
        'uses: **verbal enquiries about the planning rules are free and ' +
        'cannot be charged for.** Go to the curaduría — the private ' +
        'permitting office — or to the municipal planning office with the ' +
        'address of the property, and ask before you commission a design.',
    },

    { tipo: 'titulo', texto: 'A pool on a terrace or over a slab: the serious case' },
    {
      tipo: 'parrafo',
      texto:
        'Here no ambiguity is possible. Putting water on a slab that was not ' +
        'designed for it is a **structural intervention**, and structural ' +
        'interventions have a permit modality of their own.',
    },
    {
      tipo: 'parrafo',
      texto:
        'One metre depth of water weighs a tonne per square metre, and to ' +
        'that you have to add the shell, the lining, the coping and the live ' +
        'load. No housing slab is designed for that load unless somebody ' +
        'decided so in advance.',
    },
    {
      tipo: 'cita',
      texto:
        'The designer must be a civil engineer in the case of structural ' +
        'designs and geotechnical surveys, and an architect or a civil or ' +
        'mechanical engineer in the case of designs of non-structural ' +
        'elements.',
      fuente: 'Ley 400 de 1997, article 26',
    },
    {
      tipo: 'nota',
      texto:
        'What is needed before anything is drawn: **a structural assessment ' +
        'of the existing slab, signed by a civil engineer**, saying whether ' +
        'it takes the load, whether it takes it once strengthened, or whether ' +
        'it does not. An architect cannot sign that, and neither can a pool ' +
        'contractor.',
    },

    { tipo: 'titulo', texto: 'A pool in propiedad horizontal' },
    {
      tipo: 'parrafo',
      texto:
        'If the pool is to go in a common area of a community of owners — ' +
        'propiedad horizontal, the Colombian regime that splits a development ' +
        'into private units and property held in common — **two things are ' +
        'needed at once, and they are cumulative**: the authorisation of the ' +
        'general meeting, because common property is being altered, and the ' +
        'building permit in whichever modality applies. Neither replaces the ' +
        'other.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And if the pool is to go on the private terrace of a flat, remember ' +
        'that the roof slab is **essential common property even when it sits ' +
        'inside your own private unit**. The terrace is yours to use; the ' +
        'slab that holds it up is not.',
    },

    { tipo: 'titulo', texto: 'A pool on rural land' },
    {
      tipo: 'parrafo',
      texto:
        'To all of the above the environmental regime is added, and it is ' +
        'usually what decides:',
    },
    {
      tipo: 'lista',
      items: [
        '**The watercourse buffer.** Thirty metres on each side of a watercourse and a hundred around a spring. It is protected land: the pool does not go there, covered or uncovered.',
        '**The water to fill it.** If it comes from a source of your own — a borehole, a stream, a spring — a water concession from the corporación autónoma regional, the regional environmental authority, is needed. It is not a detail: it is a procedure.',
        '**The water to empty it.** With no public sewer, the discharge requires a permit or an approved treatment system. Emptying a pool into a stream is an environmental offence, not a maintenance decision.',
        '**The site coverage ratio.** On rural and suburban land there are national limits on coverage that apply to everything built on the property taken together.',
      ],
    },

    { tipo: 'titulo', texto: 'What applies even if you need no permit' },
    {
      tipo: 'parrafo',
      texto:
        'This is the part that surprises most, and where most people go wrong ' +
        'in good faith. **Ley 1209 de 2008, the statute on pool safety, does ' +
        'not depend on your having obtained a permit.** It applies by the ' +
        'fact of having a pool, and it applies to pools already built.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Duty', 'Single-family house', 'Residential development'],
      filas: [
        ['Immersion alarm or motion sensor', '**Yes**', '**Yes**, outside opening hours'],
        ['Vacuum release system', '**Yes**', '**Yes**'],
        ['Enclosure with access control', 'No', '**Yes**'],
        ['Anti-entrapment cover on the drains', 'No', '**Yes**'],
        ['Manual pump stop, visible and signposted', 'Yes', 'Yes'],
        ['First-aid kit, lifebuoys, shepherd’s crook, entryphone', 'No', '**Yes**'],
        ['Safety plan and rules of use', 'No', '**Yes**'],
      ],
      nota:
        'Ley 1209 de 2008, articles 3, 11, 12, 13 and 14, and its ' +
        'implementing regulation, today consolidated into Decreto 780 de ' +
        '2016. The single-family house **is not left outside the law**, as is ' +
        'commonly believed: it has two duties, and the regulation confirms it ' +
        'with the word "únicamente", only.',
    },
    {
      tipo: 'nota',
      texto:
        'And a fact that saves money: **no Colombian rule sets dimensions for ' +
        'the enclosure.** Not a height, not a spacing between bars, not a ' +
        'type of ironmongery. The figures in circulation — the famous 1.20 m ' +
        '— come from foreign standards and are quoted in Colombia as though ' +
        'they were law. What the rule requires is functional: a barrier that ' +
        'prevents access, with access control.',
    },

    { tipo: 'titulo', texto: 'The drain: the decision that cannot be put right later' },
    {
      tipo: 'parrafo',
      texto:
        'If you are going to build a new pool, this is decided now, or it is ' +
        'never decided without opening the shell again.',
    },
    {
      tipo: 'parrafo',
      texto:
        'When a body seals a suction outlet, the working pressure of the pump ' +
        'turns into holding force, and with a single drain of ordinary ' +
        'diameter that force runs to hundreds of kilograms. **No adult pulls ' +
        'a child off it.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'The correct solution is passive: **hydraulically balanced twin ' +
        'suction outlets**, with the drains at least 0.90 m apart. If a body ' +
        'seals one, the other goes on admitting flow and the vacuum never ' +
        'forms. It does not depend on electronics, it cannot lose its ' +
        'settings and it has no battery.',
    },
    {
      tipo: 'nota',
      texto:
        'The engineering rule that sums it all up: **never size a drain by ' +
        'the diameter of the pipe; size it by the velocity at the face and by ' +
        'the scenario of one outlet being completely blocked.** It costs the ' +
        'same to do it properly while building, and it is ruinously expensive ' +
        'to correct afterwards.',
    },

    { tipo: 'titulo', texto: 'What happens if you build without the permit you needed' },
    {
      tipo: 'parrafo',
      texto:
        'The consequence is not only the fine. Works without a permit expose ' +
        'you to a financial penalty, to an order of demolition and to the ' +
        'cutting off of public utilities. And there are two less visible ' +
        'effects that usually hurt more:',
    },
    {
      tipo: 'lista',
      items: [
        '**Selling the property.** Built area that appears neither in the permit nor in the by-laws is a problem at the moment of selling or of mortgaging.',
        '**Insurance.** A claim on a structure built without a permit is a different conversation with the insurer.',
      ],
    },

    { tipo: 'titulo', texto: 'The right sequence' },
    {
      tipo: 'lista',
      items: [
        '**Make the verbal enquiry at the curaduría or at the planning office.** It is free. Take the address of the property and describe what you want to do and where.',
        '**If it is going over an existing slab, ask for the structural assessment first.** Before any pool design at all.',
        '**If it is a community of owners, ask the general meeting for authorisation before the permit.** Paying the permit charges for something you are not allowed to do is money lost.',
        '**If it is rural, start with the corporación autónoma regional.** Watercourse buffer, water and discharges.',
        '**Design the hydraulic system at the same time as the shell.** Drains, plant room, pipework and pump. It is what cannot be seen and it is what decides whether the pool works.',
        '**Comply with Ley 1209 from the design stage**, not as an addition at the end.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'A swimming pool is above all what cannot be seen. The permit is the ' +
        'procedure; the system is the project.',
    },
  ],
}
