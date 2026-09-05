/**
 * Diagramas del artículo de fisuras.
 *
 * Dibujo de línea, sin relleno y sin color propio: todo trazo usa
 * `currentColor`, así que la figura hereda la tinta del texto y no introduce
 * una paleta paralela. Sin `width` ni `height` en el elemento raíz, para que
 * escale con el contenedor.
 *
 * Son diagramas y no fotografías a propósito. Una foto de una fisura enseña
 * una fisura; el patrón —qué distingue una escalonada de una recta, o hacia
 * dónde se abre— solo se ve dibujado.
 *
 * Cada figura se declara dos veces, en español y en inglés, sobre **una sola
 * constante de trazado**. Es la regla del índice de traducciones: el dibujo no
 * puede divergir mientras divergen los rótulos, y un diagrama rotulado con el
 * mismo SVG en los dos idiomas lo rechaza `scripts/check-traducciones.ts`.
 *
 * El corte entre fisura y grieta —0,2 mm— no tiene pareja de palabras en
 * inglés: *crack* sirve para las dos. La versión inglesa lo resuelve con
 * *hairline crack* frente a *crack*, y el artículo lo declara en el texto.
 */

/** Geometría de los cinco patrones. Solo cambian los `<text>`. */
const PATRONES_DIBUJO = `
  <g stroke-width="1" opacity="0.35">
    <rect x="15" y="20" width="150" height="150"/>
    <rect x="195" y="20" width="150" height="150"/>
    <rect x="375" y="20" width="150" height="150"/>
    <rect x="555" y="20" width="150" height="150"/>
    <rect x="735" y="20" width="150" height="150"/>
  </g>

  <g stroke-width="2" stroke-linecap="round">
    <path d="M62 20 L60 118"/>
    <path d="M118 20 L121 132"/>

    <path d="M205 162 L233 162 L233 134 L261 134 L261 106 L289 106
             L289 78 L317 78 L317 50 L340 50"/>

    <path d="M383 28 L517 162"/>
    <path d="M517 28 L383 162"/>

    <path d="M563 34 L697 34"/>

    <path d="M743 88 L877 88"/>
    <path d="M743 102 L877 102"/>
  </g>

  <g stroke-width="1" opacity="0.5">
    <path d="M555 20 L705 20 L705 34"/>
    <path d="M743 95 L877 95" stroke-dasharray="4 5"/>
  </g>
`

/** Cinco causas, cinco patrones. Es el mapa del artículo. */
export const PATRONES = `
<svg viewBox="0 0 900 235" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${PATRONES_DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="15" y="196">Retracción</text>
    <text x="195" y="196">Asentamiento</text>
    <text x="375" y="196">Cortante</text>
    <text x="555" y="196">Térmica</text>
    <text x="735" y="196">Corrosión</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="15" y="214">Verticales, regulares,</text>
    <text x="15" y="228">en los puntos débiles</text>
    <text x="195" y="214">Escalonada por las juntas,</text>
    <text x="195" y="228">baja hasta el cimiento</text>
    <text x="375" y="214">Diagonal en equis.</text>
    <text x="375" y="228">Sismo o deriva</text>
    <text x="555" y="214">Horizontal en la unión</text>
    <text x="555" y="228">con la losa, último piso</text>
    <text x="735" y="214">Longitudinal, paralela</text>
    <text x="735" y="228">a la varilla</text>
  </g>
</svg>
`.trim()

/** Los mismos cinco patrones, rotulados en inglés. */
export const PATRONES_EN = `
<svg viewBox="0 0 900 235" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${PATRONES_DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="15" y="196">Shrinkage</text>
    <text x="195" y="196">Settlement</text>
    <text x="375" y="196">Shear</text>
    <text x="555" y="196">Thermal</text>
    <text x="735" y="196">Corrosion</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="15" y="214">Vertical, fairly regular,</text>
    <text x="15" y="228">at the weak points</text>
    <text x="195" y="214">Stepped along the joints,</text>
    <text x="195" y="228">runs down to the footing</text>
    <text x="375" y="214">Diagonal, in an X.</text>
    <text x="375" y="228">Earthquake or storey drift</text>
    <text x="555" y="214">Horizontal at the junction</text>
    <text x="555" y="228">with the slab, top floor</text>
    <text x="735" y="214">Longitudinal, parallel</text>
    <text x="735" y="228">to the reinforcing bar</text>
  </g>
</svg>
`.trim()

/** Geometría de la dirección de apertura. */
const APERTURA_DIBUJO = `
  <g stroke-width="1" opacity="0.35">
    <rect x="60" y="20" width="300" height="170"/>
    <rect x="540" y="20" width="300" height="170"/>
  </g>

  <g stroke-width="1" opacity="0.35" stroke-dasharray="5 5">
    <path d="M40 190 L380 190"/>
    <path d="M520 190 L860 190"/>
  </g>

  <g stroke-width="2" stroke-linecap="round">
    <path d="M196 20 L204 60 L200 100 L206 140 L210 190"/>
    <path d="M226 20 L214 62 L220 104 L212 146 L214 190"/>
    <path d="M676 20 L682 62 L678 104 L688 146 L700 190"/>
    <path d="M690 20 L692 60 L690 102 L700 144 L716 190"/>
  </g>

  <g stroke-width="1.5" opacity="0.75">
    <path d="M120 214 L120 240"/>
    <path d="M114 234 L120 241 L126 234"/>
    <path d="M300 214 L300 240"/>
    <path d="M294 234 L300 241 L306 234"/>
    <path d="M640 240 L640 214"/>
    <path d="M634 220 L640 213 L646 220"/>
    <path d="M760 240 L760 214"/>
    <path d="M754 220 L760 213 L766 220"/>
  </g>
`

/** Hacia dónde se abre la fisura: el criterio que separa un suelo que baja de
 *  uno que sube. Es diagnóstico, no ilustración. */
export const APERTURA = `
<svg viewBox="0 0 900 250" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${APERTURA_DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="60" y="14">Ancha arriba</text>
    <text x="540" y="14">Ancha abajo</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="12" opacity="0.7">
    <text x="150" y="212">el suelo baja</text>
    <text x="640" y="212">el suelo sube</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="60" y="236">Asentamiento del cimiento.</text>
    <text x="60" y="250">Suelo arcilloso que se seca.</text>
    <text x="540" y="236">Levantamiento. Arcilla que se</text>
    <text x="540" y="250">rehidrata, o raíces empujando.</text>
  </g>
</svg>
`.trim()

/** La misma figura, rotulada en inglés. */
export const APERTURA_EN = `
<svg viewBox="0 0 900 250" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${APERTURA_DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="60" y="14">Wider at the top</text>
    <text x="540" y="14">Wider at the bottom</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="12" opacity="0.7">
    <text x="150" y="212">the ground is sinking</text>
    <text x="640" y="212">the ground is rising</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="60" y="236">Foundation settlement.</text>
    <text x="60" y="250">Clay soil drying out.</text>
    <text x="540" y="236">Heave. Clay taking up water</text>
    <text x="540" y="250">again, or roots pushing up.</text>
  </g>
</svg>
`.trim()

/** Geometría de los tres anchos. */
const ANCHOS_DIBUJO = `
  <g stroke-linecap="round" stroke="currentColor">
    <path d="M60 40 L60 130" stroke-width="1"/>
    <path d="M330 40 L330 130" stroke-width="4"/>
    <path d="M620 40 L620 130" stroke-width="12"/>
  </g>

  <g stroke-width="1" opacity="0.35">
    <path d="M40 150 L80 150"/>
    <path d="M300 150 L360 150"/>
    <path d="M580 150 L660 150"/>
  </g>
`

/** Los tres anchos que gobiernan la escala oficial colombiana, a tamaño
 *  comparable. Verlos juntos evita la discusión de si «está muy ancha». */
export const ANCHOS = `
<svg viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${ANCHOS_DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="40" y="30">0,2 mm</text>
    <text x="300" y="30">1,0 mm</text>
    <text x="580" y="30">3,0 mm</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="40" y="172">Por debajo: fisura.</text>
    <text x="40" y="186">Apenas visible.</text>
    <text x="300" y="172">Fin del daño leve.</text>
    <text x="300" y="186">Perceptible a simple vista.</text>
    <text x="580" y="172">En mampostería, a partir de aquí</text>
    <text x="580" y="186">el daño es fuerte.</text>
  </g>
</svg>
`.trim()

/** Los mismos tres anchos, en inglés. El separador decimal cambia con el
 *  idioma: «0,2 mm» se rotula «0.2 mm». */
export const ANCHOS_EN = `
<svg viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${ANCHOS_DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="40" y="30">0.2 mm</text>
    <text x="300" y="30">1.0 mm</text>
    <text x="580" y="30">3.0 mm</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="40" y="172">Below this: hairline.</text>
    <text x="40" y="186">Barely visible.</text>
    <text x="300" y="172">End of slight damage.</text>
    <text x="300" y="186">Plain to the naked eye.</text>
    <text x="580" y="172">In masonry, from here on</text>
    <text x="580" y="186">the damage is heavy.</text>
  </g>
</svg>
`.trim()
