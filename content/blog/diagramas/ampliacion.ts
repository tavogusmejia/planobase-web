/**
 * Diagrama del artículo de ampliación de un segundo piso.
 *
 * Mismo lenguaje que los demás: dibujo de línea, sin relleno ni color propio
 * —todo trazo en `currentColor`—, sin `width` ni `height` en el elemento raíz
 * para que escale con el contenedor y herede la tinta del texto.
 *
 * La figura son **las dos ampliaciones que la NSR-10 distingue, una al lado de
 * la otra**: la adosada, que puede separarse con una junta y dejar la
 * estructura antigua en paz, y la de altura, en la que las dos porciones
 * trabajan en conjunto y obligan a analizar la edificación entera, cimentación
 * incluida. Puestas juntas se ve el argumento del artículo sin una sola cifra:
 * crecer hacia el lado y crecer hacia arriba no son la misma obra ni el mismo
 * riesgo.
 *
 * Las tres flechas punteadas de la derecha bajan desde el piso nuevo hasta la
 * cimentación a propósito: es el camino de la carga, que es lo que la gente no
 * ve cuando mira una losa vacía y piensa que «ya está lista». La flecha
 * horizontal de arriba es el vuelco del A.10.8.6, que aparece justamente
 * porque la edificación quedó más alta.
 *
 * **No está a escala.**
 *
 * Hay dos versiones porque el sitio es bilingüe y
 * `scripts/check-traducciones.ts` rechaza —con razón— un diagrama rotulado
 * cuyo SVG inglés sea idéntico al español. Se escriben juntas, en el mismo
 * archivo, para que no puedan divergir en el dibujo mientras divergen en el
 * rótulo.
 */

/** Geometría común a las dos versiones. Solo cambian los `<text>`. */
const DIBUJO = `
  <g stroke-width="1.5" opacity="0.55">
    <path d="M30 230 L870 230"/>
  </g>
  <g stroke-width="1" opacity="0.25">
    <path d="M30 242 L42 230"/>
    <path d="M240 242 L252 230"/>
    <path d="M460 242 L472 230"/>
    <path d="M680 242 L692 230"/>
    <path d="M858 242 L870 230"/>
  </g>

  <g stroke-width="2" stroke-linejoin="round">
    <rect x="70" y="120" width="130" height="110"/>
  </g>
  <g stroke-width="2" stroke-linejoin="round">
    <rect x="214" y="140" width="126" height="90"/>
  </g>
  <g stroke-width="1.2" opacity="0.6">
    <path d="M207 108 L207 244" stroke-dasharray="5 4"/>
  </g>
  <g stroke-width="1.6" stroke-linejoin="round" opacity="0.75">
    <rect x="62" y="230" width="20" height="16"/>
    <rect x="188" y="230" width="18" height="16"/>
    <rect x="208" y="230" width="18" height="16"/>
    <rect x="322" y="230" width="20" height="16"/>
  </g>

  <g stroke-width="2" stroke-linejoin="round">
    <rect x="560" y="120" width="170" height="110"/>
  </g>
  <g stroke-width="2" stroke-linejoin="round">
    <rect x="560" y="44" width="170" height="76"/>
  </g>
  <g stroke-width="1" opacity="0.5">
    <path d="M590 58 L590 214" stroke-dasharray="5 4"/>
    <path d="M645 58 L645 214" stroke-dasharray="5 4"/>
    <path d="M700 58 L700 214" stroke-dasharray="5 4"/>
    <path d="M585 206 L590 218 L595 206"/>
    <path d="M640 206 L645 218 L650 206"/>
    <path d="M695 206 L700 218 L705 206"/>
  </g>
  <g stroke-width="1.6" stroke-linejoin="round">
    <rect x="548" y="230" width="30" height="24"/>
    <rect x="712" y="230" width="30" height="24"/>
  </g>
  <g stroke-width="1" opacity="0.5">
    <rect x="538" y="230" width="50" height="34" stroke-dasharray="4 4"/>
    <rect x="702" y="230" width="50" height="34" stroke-dasharray="4 4"/>
  </g>
  <g stroke-width="1.4" opacity="0.7">
    <path d="M748 62 L812 62"/>
    <path d="M804 56 L814 62 L804 68"/>
  </g>
`

/**
 * Las dos modalidades de ampliación que distingue el reglamento, comparadas.
 *
 * Es la figura que sostiene el artículo: la pregunta cara no es cuánto vale el
 * metro cuadrado nuevo, es por dónde baja su carga.
 */
export const DOS_AMPLIACIONES = `
<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="62" y="284">Ampliación adosada</text>
    <text x="538" y="284">Ampliación en altura</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="62" y="306">Con una junta apropiada, y si los</text>
    <text x="62" y="322">índices de la casa existente están</text>
    <text x="62" y="338">por debajo de la unidad, la parte</text>
    <text x="62" y="354">antigua puede no intervenirse.</text>
    <text x="538" y="306">Las dos porciones trabajan en</text>
    <text x="538" y="322">conjunto. Se analiza otra vez la</text>
    <text x="538" y="338">edificación entera, con su</text>
    <text x="538" y="354">cimentación y con el vuelco.</text>
    <text x="164" y="102">Junta</text>
    <text x="756" y="46">Vuelco</text>
  </g>
</svg>
`

/** Las mismas dos modalidades, rotuladas en inglés. */
export const DOS_AMPLIACIONES_EN = `
<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="62" y="284">Extension alongside</text>
    <text x="538" y="284">Extension upwards</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="62" y="306">With a proper movement joint, and</text>
    <text x="62" y="322">if the existing house scores below</text>
    <text x="62" y="338">unity on both indices, the old part</text>
    <text x="62" y="354">may be left alone.</text>
    <text x="538" y="306">Both parts act together. The whole</text>
    <text x="538" y="322">building is analysed again, its</text>
    <text x="538" y="338">foundations included, and now</text>
    <text x="538" y="354">overturning enters the sum.</text>
    <text x="164" y="102">Joint</text>
    <text x="746" y="46">Overturning</text>
  </g>
</svg>
`
