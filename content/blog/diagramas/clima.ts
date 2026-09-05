/**
 * Diagrama del artículo de casa bioclimática por clima.
 *
 * Mismo lenguaje que los demás: dibujo de línea, sin relleno ni color propio
 * —todo trazo en `currentColor`—, sin `width` ni `height` en el elemento raíz
 * para que escale con el contenedor y herede la tinta del texto.
 *
 * La figura son **cuatro secciones sobre la misma línea de terreno**, una por
 * cada clima de la clasificación oficial. Esa forma es el argumento del
 * artículo: no es que la casa se «adapte» al clima con acabados, es que la
 * sección cambia —el alero, el espesor del muro, la altura del piso sobre el
 * terreno, por dónde entra y sale el aire—. Puestas una al lado de la otra, la
 * diferencia se ve sin una sola cifra.
 *
 * **No está a escala** y no lo pretende: las proporciones están exageradas
 * para que el alero y el espesor de muro se distingan a tamaño de lectura.
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
    <path d="M30 200 L870 200"/>
  </g>

  <g stroke-width="1" opacity="0.28">
    <path d="M30 212 L42 200"/>
    <path d="M250 212 L262 200"/>
    <path d="M470 212 L482 200"/>
    <path d="M690 212 L702 200"/>
    <path d="M840 212 L852 200"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M60 200 L60 125"/>
    <path d="M170 200 L170 125"/>
    <path d="M52 125 L115 95 L178 125"/>
    <rect x="95" y="140" width="40" height="36"/>
  </g>
  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M282 200 L282 125"/>
    <path d="M392 200 L392 125"/>
    <path d="M266 125 L337 95 L408 125"/>
    <rect x="324" y="146" width="26" height="30"/>
  </g>
  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M500 200 L500 125"/>
    <path d="M612 200 L612 125"/>
    <path d="M478 125 L556 95 L634 125"/>
    <rect x="546" y="150" width="20" height="26"/>
  </g>
  <g stroke-width="1.5" opacity="0.7">
    <path d="M510 200 L510 125"/>
    <path d="M602 200 L602 125"/>
  </g>
  <g stroke-width="1" opacity="0.45">
    <path d="M478 125 L500 152" stroke-dasharray="4 4"/>
    <path d="M634 125 L612 152" stroke-dasharray="4 4"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M712 200 L712 190"/>
    <path d="M822 200 L822 190"/>
    <path d="M706 190 L828 190"/>
    <path d="M716 190 L716 110"/>
    <path d="M818 190 L818 110"/>
    <path d="M690 122 L757 90"/>
    <path d="M777 90 L844 122"/>
  </g>
  <g stroke-width="1" opacity="0.45">
    <path d="M690 152 L860 152" stroke-dasharray="5 5"/>
    <path d="M767 186 L767 96" stroke-dasharray="5 5"/>
    <path d="M757 90 L757 78"/>
    <path d="M777 90 L777 78"/>
  </g>
`

/**
 * Las cuatro secciones, una por clima de la clasificación oficial, con lo que
 * cambia en cada una.
 *
 * Es la figura que sostiene el artículo: la misma casa dibujada cuatro veces
 * deja de ser la misma casa.
 */
export const CUATRO_CLIMAS = `
<svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="30" y="246">Frío</text>
    <text x="250" y="246">Templado</text>
    <text x="470" y="246">Cálido seco</text>
    <text x="690" y="246">Cálido húmedo</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="266">Volumen compacto y</text>
    <text x="30" y="282">cerrado. El vidrio busca</text>
    <text x="30" y="298">el sol de la mañana.</text>
    <text x="250" y="266">Sombra sobre alcobas</text>
    <text x="250" y="282">y cocina. La brisa se</text>
    <text x="250" y="298">controla, no se busca.</text>
    <text x="470" y="266">Muro grueso que guarda</text>
    <text x="470" y="282">el fresco de la noche.</text>
    <text x="470" y="298">Alero profundo, vano corto.</text>
    <text x="690" y="266">Piso levantado, alero</text>
    <text x="690" y="282">ancho, cumbrera abierta.</text>
    <text x="690" y="298">El aire tiene que cruzar.</text>
  </g>
</svg>
`

/** Las mismas cuatro secciones, rotuladas en inglés. */
export const CUATRO_CLIMAS_EN = `
<svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="30" y="246">Cold</text>
    <text x="250" y="246">Temperate</text>
    <text x="470" y="246">Hot and dry</text>
    <text x="690" y="246">Hot and humid</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="266">A compact, closed volume.</text>
    <text x="30" y="282">Glazing goes after the</text>
    <text x="30" y="298">morning sun.</text>
    <text x="250" y="266">Shade over bedrooms</text>
    <text x="250" y="282">and kitchen. Breeze is</text>
    <text x="250" y="298">managed, not chased.</text>
    <text x="470" y="266">A heavy wall that stores</text>
    <text x="470" y="282">the cool of the night.</text>
    <text x="470" y="298">Deep eaves, small openings.</text>
    <text x="690" y="266">Raised floor, wide eaves,</text>
    <text x="690" y="282">an open ridge. The air</text>
    <text x="690" y="298">has to cross the house.</text>
  </g>
</svg>
`
