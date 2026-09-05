import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Reformar en propiedad horizontal: qué autoriza la asamblea y
 * qué no».
 *
 * El vocabulario ya está fijado por el pilar de patologías, y se respeta
 * entero: **propiedad horizontal** se conserva y se glosa —«the Colombian
 * regime under which a building is split into privately owned units and
 * property held in common»—, `bien común esencial` → essential common
 * property, `copropiedad` → community of owners, `asamblea` → general meeting,
 * `coeficientes` → participation coefficients, `expensas mensuales` → monthly
 * service charge, `expensa extraordinaria` → extraordinary levy, `reglamento
 * de propiedad horizontal` → propiedad horizontal by-laws, `mampostería
 * estructural` → loadbearing masonry.
 *
 * El hallazgo que estructura la pieza se traduce sin suavizar: la fachada y
 * las losas son bien común **aunque estén dentro del apartamento**, y una
 * reforma de fachada exige asamblea **y** licencia, acumulativas.
 *
 * El «70 %» va como «70%», pegado, y las cifras son las mismas.
 */
export const traduccion: TraduccionPost = {
  slug: 'reformar-en-propiedad-horizontal',
  titulo: 'Altering a flat in propiedad horizontal: what the meeting can authorise',
  traducido: '2026-09-05',
  resumen:
    'You want to knock a wall through, enclose the balcony or change the ' +
    'window. What is yours and what belongs to the community of owners — ' +
    'even inside your own flat — what majority is needed, and why the ' +
    'meeting’s permission does not replace the building permit.',
  metaDescripcion:
    'Which alterations you can make to a flat, what the general meeting ' +
    'authorises and when a building permit is needed as well.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'You want to knock a wall through to join the kitchen and the living ' +
        'room. Or enclose the balcony. Or swap the window for a bigger one. ' +
        'And somebody has told you to ask the building manager for ' +
        'permission.',
    },
    {
      tipo: 'parrafo',
      texto:
        'In propiedad horizontal — the Colombian regime that splits a ' +
        'building into private units and property held in common — the ' +
        'answer has three layers, and skipping any turns out expensive: ' +
        '**whether the element is yours or the community’s, what majority is ' +
        'needed if it is the community’s, and whether you also need a ' +
        'building permit.** They are independent. Having one does not give ' +
        'you the others.',
    },

    {
      tipo: 'titulo',
      texto: 'What is yours, even when it sits inside your own flat',
    },
    {
      tipo: 'parrafo',
      texto:
        'Here is the fact that surprises people most, and it sits in the ' +
        'legal definition itself:',
    },
    {
      tipo: 'cita',
      texto:
        'The following shall be deemed essential common property: the land ' +
        'on or under which constructions or installations of basic public ' +
        'services exist, the foundations, the structure, the indispensable ' +
        'circulations […] the general installations of public services, the ' +
        'façades and the roofs or slabs serving as covering at any level.',
      fuente: 'Ley 675 de 2001, article 3',
    },
    {
      tipo: 'parrafo',
      texto:
        'Read it again: **the structure, the façade and the slabs are common ' +
        'property even when they sit inside your flat.** The column that ' +
        'gets in your way in the living room is not yours. The window opens ' +
        'onto the façade, and the façade is not yours either.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Element', 'Whose is it?'],
      filas: [
        ['Columns, beams, structural walls', '**Essential common property**'],
        ['The façade and the windows that open onto it', '**Essential common property**'],
        ['Floor and ceiling slabs', '**Essential common property**'],
        ['Stacks and general service runs', '**Common property**'],
        ['Non-structural internal partitions', 'Private'],
        ['Finishes, tiling, internal paintwork, fitted furniture', 'Private'],
      ],
      nota:
        'And there is a nuance that decides a great many cases: in a ' +
        'building of **loadbearing masonry**, the partitions are part of the ' +
        'system too. There is no innocent partition there, and telling which ' +
        'is which already calls for technical judgement.',
    },
    {
      tipo: 'nota',
      texto:
        'What settles any argument is the **propiedad horizontal by-laws ' +
        'together with the drawings approved with the building permit**. The ' +
        'statute is explicit: common property includes "all those marked as ' +
        'such in the drawings approved with the building permit".',
    },

    { tipo: 'titulo', texto: 'What you can do without asking anybody' },
    {
      tipo: 'parrafo',
      texto:
        'Inside your own private unit, and without touching anything above: ' +
        'painting, changing floors, changing tiling, refitting the kitchen, ' +
        'changing internal doors, moving a non-structural partition.',
    },
    {
      tipo: 'parrafo',
      texto:
        'With one limit the statute sets expressly: use the private unit ' +
        '"refraining from any act that **compromises the safety or ' +
        'soundness of the building**". And with a duty almost nobody knows ' +
        'about — to carry out at once the repairs in your own unit whose ' +
        'omission could harm the building, **making good the damage caused ' +
        'by your neglect**. The leak you do not fix, which then ruins the ' +
        'ceiling of the neighbour below, is yours.',
    },

    {
      tipo: 'titulo',
      texto: 'When the general meeting is needed, and with what majority',
    },
    {
      tipo: 'parrafo',
      texto:
        'The general rule is **half plus one of the participation ' +
        'coefficients represented at the sitting**. But some decisions call ' +
        'for a qualified majority, and that is where the commonest mistake ' +
        'sits:',
    },
    {
      tipo: 'cita',
      texto:
        'The following decisions shall require a qualified majority of ' +
        'seventy per cent (70%) of the participation coefficients **that ' +
        'make up the building or complex**.',
      fuente: 'Ley 675 de 2001, article 46',
    },
    {
      tipo: 'nota',
      texto:
        '**Of the building as a whole, not 70% of those who turned up.** It ' +
        'is an enormous difference and it gets counted wrongly all the time. ' +
        'And decisions of that kind **cannot be taken at a meeting held ' +
        'remotely**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'The ones that require that 70% and that tend to come up in an ' +
        'alteration: amending the propiedad horizontal by-laws, releasing a ' +
        'non-essential item of common property from that status, and ' +
        'imposing an extraordinary levy of more than four times the monthly ' +
        'service charge.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And one worth knowing because it protects the owner: **no set of ' +
        'by-laws may demand more than 70%**, save to extinguish the ' +
        'propiedad horizontal itself. Higher majorities appearing in ' +
        'by-laws "shall be deemed unwritten".',
    },

    {
      tipo: 'titulo',
      texto: 'The expensive mistake: thinking permission replaces the permit',
    },
    {
      tipo: 'parrafo',
      texto:
        'Enclosing a balcony, changing a window on the façade, joining two ' +
        'flats, opening a hole in a structural wall: **these works call for ' +
        'two things at once, and they are cumulative.**',
    },
    {
      tipo: 'lista',
      items: [
        '**Authorisation from the general meeting**, because it touches common property.',
        '**A building permit**, in whichever modality applies, because it is a work carried out on what is already built.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Neither substitutes for the other. Both cases turn up: the owner ' +
        'who takes out the permit and does not ask for authorisation — and ' +
        'the community requires the façade to be put back as it was — and ' +
        'the owner who gets the meeting’s permission and builds without a ' +
        'permit, exposed to a fine, to an order to demolish and to having ' +
        'the utilities cut off.',
    },
    {
      tipo: 'nota',
      texto:
        'If you open a hole in a wall that turns out to be structural, on ' +
        'top of all of the above you need a **structural design signed by a ' +
        'civil engineer**. And that signature cannot be given by an ' +
        'architect or by a foreman: the law reserves it.',
    },

    { tipo: 'titulo', texto: 'What to do, in order' },
    {
      tipo: 'lista',
      items: [
        '**Get the propiedad horizontal by-laws and the drawings from the building permit.** That is where it says what is common and what is private in your particular building.',
        '**Find out whether the wall is structural.** From the drawings, or from a professional. Not by tapping it.',
        '**If it touches common property, ask for the authorisation in writing**, with the minutes and the majority that applies.',
        '**Check whether your work needs a permit.** Plenty of refurbishments do, and the verbal enquiry at the curaduría — the private office licensed by the state to issue permits — is free.',
        '**Tell the building manager before you start**, even if you need no permission: rubble, working hours and use of the lifts are almost always regulated.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And a warning about method: **the order matters.** Applying for the ' +
        'permit before you hold the meeting’s authorisation means paying ' +
        'charges for something they may not let you do.',
    },
  ],
}
