/**
 * Diagrama del artículo de mampostería y prefabricado.
 *
 * Mismo lenguaje que los demás: dibujo de línea, sin relleno ni color propio
 * —todo trazo en `currentColor`—, sin `width` ni `height` en el elemento raíz.
 *
 * Son **dos secciones idénticas salvo en una cosa**, y esa es toda la figura:
 * el mismo muro, en el mismo sitio, con la misma losa encima. A la izquierda
 * las flechas de carga bajan por el muro; a la derecha bajan por las columnas y
 * el muro queda dibujado con trazo delgado porque no lleva nada. Las dos casas
 * se ven iguales cuando están pañetadas, y ese es exactamente el problema que
 * el artículo describe: la diferencia solo aparece el día que alguien quiere
 * tumbar ese muro.
 *
 * **No está a escala.**
 *
 * Hay dos versiones porque el sitio es bilingüe y
 * `scripts/check-traducciones.ts` rechaza un diagrama rotulado cuyo SVG inglés
 * sea idéntico al español. Se escriben juntas, en el mismo archivo.
 */

/** Geometría común a las dos versiones. Solo cambian los `<text>`. */
const DIBUJO = `
  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50 116 L400 116"/>
    <path d="M50 128 L400 128"/>
    <path d="M62 128 L62 250"/>
    <path d="M74 128 L74 250"/>
    <path d="M376 128 L376 250"/>
    <path d="M388 128 L388 250"/>
    <path d="M212 128 L212 250"/>
    <path d="M224 128 L224 250"/>
    <path d="M40 250 L410 250"/>
  </g>
  <g stroke-width="1.5" opacity="0.75">
    <path d="M188 80 L188 106"/>
    <path d="M183 98 L188 108 L193 98"/>
    <path d="M218 80 L218 106"/>
    <path d="M213 98 L218 108 L223 98"/>
    <path d="M248 80 L248 106"/>
    <path d="M243 98 L248 108 L253 98"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M500 116 L850 116"/>
    <path d="M500 128 L850 128"/>
    <path d="M512 128 L512 250"/>
    <path d="M524 128 L524 250"/>
    <path d="M826 128 L826 250"/>
    <path d="M838 128 L838 250"/>
    <path d="M490 250 L860 250"/>
  </g>
  <g stroke-width="1" opacity="0.5">
    <path d="M666 132 L666 246"/>
    <path d="M678 132 L678 246"/>
  </g>
  <g stroke-width="1.5" opacity="0.75">
    <path d="M518 80 L518 106"/>
    <path d="M513 98 L518 108 L523 98"/>
    <path d="M832 80 L832 106"/>
    <path d="M827 98 L832 108 L837 98"/>
  </g>
`

/**
 * El mismo muro en dos sistemas: portante en uno, de relleno en el otro.
 *
 * Es la figura que sostiene el artículo: la pregunta no es de qué está hecho el
 * muro sino por dónde baja la carga.
 */
export const MURO_PORTANTE = `
<svg viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.45">
    <text x="50" y="66">la carga baja por el muro</text>
    <text x="500" y="66">la carga baja por las columnas</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="50" y="284">Muro portante</text>
    <text x="500" y="284">Pórtico con muro de relleno</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="50" y="304">Tumbarlo es intervenir la estructura.</text>
    <text x="50" y="320">Pide diseño estructural y licencia.</text>
    <text x="500" y="304">El muro no sostiene nada.</text>
    <text x="500" y="320">Tumbarlo cambia la distribución.</text>
  </g>
</svg>
`

/** El mismo par de secciones, rotulado en inglés. */
export const MURO_PORTANTE_EN = `
<svg viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.45">
    <text x="50" y="66">the load comes down the wall</text>
    <text x="500" y="66">the load comes down the columns</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="50" y="284">Load-bearing wall</text>
    <text x="500" y="284">Frame with an infill wall</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="50" y="304">Removing it touches the structure.</text>
    <text x="50" y="320">It needs a design and a permit.</text>
    <text x="500" y="304">The wall holds nothing up.</text>
    <text x="500" y="320">Removing it changes the layout.</text>
  </g>
</svg>
`
