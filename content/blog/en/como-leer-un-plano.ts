import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Cómo leer un plano arquitectónico».
 *
 * Es la pieza del lote donde el vocabulario de dibujo se decide de verdad, y
 * cada término se pensó en su frase y no por diccionario: **planta** es floor
 * plan, **corte** es section, **fachada** es elevation cuando es un dibujo y
 * façade cuando es la cara del edificio, **cotas** son dimensions, **ejes** son
 * grid lines, **rótulo** es title block y **línea de corte** es section line.
 * Esa misma pareja plan/section/elevation es la que usan
 * `que-es-un-anteproyecto` y `del-lote-a-la-licencia`.
 *
 * Las escalas y los niveles ya llevan punto decimal en el original —`+0.00`,
 * `1:50`— y no cambian. Lo que sí cambia es la lectura: la advertencia de no
 * medir con regla sobre una impresión se conserva entera, porque es la que
 * evita el error más caro del artículo.
 *
 * El original no cita fuentes: es oficio, no norma. No se le añade ninguna.
 */
export const traduccion: TraduccionPost = {
  slug: 'como-leer-un-plano',
  titulo: 'How to read an architectural drawing',
  traducido: '2026-09-05',
  resumen:
    'You have been handed a set of drawings and you do not know where to ' +
    'start. What the scale means, where the dimensions that matter are, what ' +
    'that thick line crossing the plan is, and the six things worth checking ' +
    'before you approve anything.',
  metaDescripcion:
    'How to read an architectural drawing: scale, dimensions, grid lines, ' +
    'sections and conventions, explained for the non-technical reader.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'You have been handed a set of drawings and asked to approve them. ' +
        'You look at them, you can tell there is a house in there somewhere, ' +
        'and you have no idea what you are supposed to be checking.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is an uncomfortable situation and a very common one. And it is ' +
        'worth resolving, because **approving a drawing you do not ' +
        'understand is the most expensive way to trust somebody**: whatever ' +
        'is not corrected there gets corrected on site, and there it costs a ' +
        'hundred times more.',
    },

    { tipo: 'titulo', texto: 'Start with the title block' },
    {
      tipo: 'parrafo',
      texto:
        'It is the box in the bottom right-hand corner, and hardly anybody ' +
        'reads it. It holds what tells you whether you are looking at what ' +
        'you think you are looking at:',
    },
    {
      tipo: 'lista',
      items: [
        '**Which drawing this is.** Ground floor plan, section A-A, north elevation.',
        '**The scale.** It determines how everything else is read.',
        '**The date and the revision.** If two sets of drawings are on the table, this decides which one governs.',
        '**Who signs it**, with their professional registration number. That is the person legally answerable for the drawing.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'If you are going to review drawings, **print only the most recent ' +
        'revision and throw the earlier ones away**. Arguing over two ' +
        'different revisions is the number one source of misunderstandings ' +
        'on site.',
    },

    { tipo: 'titulo', texto: 'Scale: what 1:50 means' },
    {
      tipo: 'parrafo',
      texto:
        'It means that **one centimetre on the paper is fifty in reality**. ' +
        'Half a metre, in other words.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Scale', '1 cm on the paper is…', 'What it is used for'],
      filas: [
        ['1:100', '1 metre', 'Seeing the whole. General floor plans'],
        ['1:50', '50 cm', 'The working scale. Site plans and sections'],
        ['1:25', '25 cm', 'Bathrooms, kitchens, stairs'],
        ['1:10 and 1:5', '10 and 5 cm', 'Construction details: how two materials meet'],
      ],
      nota:
        'The smaller the second number, the closer you are looking. A detail ' +
        'at 1:5 is not a "more important" drawing: it is the same building ' +
        'seen through a magnifying glass.',
    },
    {
      tipo: 'nota',
      texto:
        '**Do not measure a print with a ruler.** If the drawing was printed ' +
        'on a different paper size, the scale is no longer the one the title ' +
        'block states. Sizes are read off the figured dimensions; they are ' +
        'not measured.',
    },

    { tipo: 'titulo', texto: 'Dimensions: where the sizes are' },
    {
      tipo: 'parrafo',
      texto:
        'They are the fine lines running outside the drawing, with a number ' +
        'above them. **That number is the real size**, and it is the drawing’s ' +
        'only source of truth.',
    },
    {
      tipo: 'parrafo',
      texto:
        'They come in strings, and each string measures something different: ' +
        'the outermost usually gives the overall plot or the overall ' +
        'building; the next one gives the grid; the innermost gives every ' +
        'opening and every wall.',
    },
    {
      tipo: 'nota',
      texto:
        'A checking trick that always works: **add up the partial dimensions ' +
        'and compare them with the overall one.** If they do not come to the ' +
        'same figure, there is an error in the drawing. It is the simplest ' +
        'check there is and the one that finds the most mistakes.',
    },

    { tipo: 'titulo', texto: 'Grid lines: the invisible skeleton' },
    {
      tipo: 'parrafo',
      texto:
        'They are the chain-dotted lines crossing the whole drawing, with a ' +
        'letter or a number inside a circle at the end. Letters one way, ' +
        'numbers the other.',
    },
    {
      tipo: 'parrafo',
      texto:
        'They are not decoration: **they are the building’s coordinate ' +
        'system**. When somebody on site says "the column on grid B at 3", ' +
        'they are pointing at an exact spot without measuring anything. And ' +
        'the grid is what lets the architectural plan and the structural plan ' +
        'line up.',
    },

    { tipo: 'titulo', texto: 'The thick line crossing the plan' },
    {
      tipo: 'parrafo',
      texto:
        'It is the **section line**, and it tends to be the most confusing ' +
        'thing on the sheet. It has an arrow at each end and a letter: A-A, ' +
        'B-B.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It marks where the house was sliced through in order to draw the ' +
        'section, and **the arrow shows which way you are looking**. Section ' +
        'A-A is that slice, seen in the direction of the arrows.',
    },
    {
      tipo: 'parrafo',
      texto:
        'And there lies the relationship between the two drawings, which is ' +
        'the thing to grasp: **the plan tells you how you move around the ' +
        'house; the section tells you how tall it is and how one thing sits ' +
        'on another.** Stairs, double-height spaces, changes of level and ' +
        'roof pitches can only be understood in section.',
    },
    {
      tipo: 'nota',
      texto:
        'A plan is a section too: it is the house sliced horizontally, ' +
        'roughly a metre above the floor, and seen from above. That is why ' +
        'the windows appear and the walls read as solid.',
    },

    { tipo: 'titulo', texto: 'The conventions worth recognising' },
    {
      tipo: 'lista',
      items: [
        '**A solid or hatched wall:** it is cut by the plane of the drawing. It is solid material.',
        '**A dashed line:** something above the cut. A beam, a cantilever, a mezzanine.',
        '**An arc at a door:** the swing, that is, the way it opens. It is worth a look: a door that opens into a cupboard is a cheap mistake to fix on the drawing.',
        '**A triangle or an arrow with a number:** a level. `+0.00` is the reference floor; `+2.50` is two and a half metres above it.',
        '**An arrow marked "N":** north. It decides where the sun comes from, and in Colombia that decides which rooms overheat.',
        '**Walls in three tones** on a refurbishment: what stays, what is demolished and what is built. There is always a key explaining it.',
      ],
    },

    { tipo: 'titulo', texto: 'The architectural plan and the structural plan are not the same thing' },
    {
      tipo: 'parrafo',
      texto:
        'You will be handed separate sets, drawn on the same grid but ' +
        'carrying different information:',
    },
    {
      tipo: 'lista',
      items: [
        '**Architectural:** spaces, walls, doors, windows, finishes. What you see and how it is used.',
        '**Structural:** columns, beams, slabs, foundations, reinforcement. How it stands up. A civil engineer signs it.',
        '**Plumbing and drainage, electrical, gas:** where the services run.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Coordinating them is the architect’s job, and it is where the ' +
        'classic clashes turn up: a column in the middle of a bathroom, a ' +
        'waste stack running through a living room, a beam dropping down ' +
        'exactly where a window was meant to go.',
    },

    { tipo: 'titulo', texto: 'Six things to check before approving' },
    {
      tipo: 'lista',
      items: [
        '**Walk the house with your finger.** Come in through the door, go to the kitchen, to the bathroom, to your bedroom. Awkward routes are felt this way before they are felt on site.',
        '**Compare the sizes against something you know.** Your current bedroom measures so much. Is the new one bigger or smaller? Numbers deceive; comparisons do not.',
        '**Check the doors.** Which way they open, and into what.',
        '**Find north** and ask which rooms get the afternoon sun.',
        '**Count the sockets and the lighting points** on the electrical drawing. It is the cheapest thing to change now and the most irritating one later.',
        '**Add up the dimensions.** If they do not tally, something is wrong.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'And one that is not about checking but about method: **ask about ' +
        'whatever you do not understand, however obvious it may seem.** An ' +
        'architect who takes offence at explaining their own drawing is ' +
        'telling you something important about how the rest of the process is ' +
        'going to go.',
    },
  ],
}
