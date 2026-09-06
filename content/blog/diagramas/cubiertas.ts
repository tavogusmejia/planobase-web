/**
 * Diagrama del artículo comparativo de cubiertas.
 *
 * Mismo lenguaje que los demás: dibujo de línea, sin relleno ni color propio
 * —todo trazo en `currentColor`—, sin `width` ni `height` en el elemento raíz
 * para que escale con el contenedor y herede la tinta del texto.
 *
 * La figura son **cuatro secciones sobre el mismo apoyo**, una por sistema de
 * cubierta, y lo que las separa no es el dibujo sino el número que llevan
 * debajo. Ese contraste es el argumento del artículo: la conversación sobre
 * cubiertas se hace siempre en estética y en precio, y la variable que decide
 * la estructura —el peso— está publicada en una tabla oficial que nadie mira.
 *
 * Las tres cifras que aparecen salen de la NSR-10 y están citadas en el cuerpo
 * del artículo: los 80 y los 8 kgf/m² son cargas muertas de la Tabla B.3.4.1-4;
 * los 500 kgf/m² son la carga viva de la Tabla B.4.2.1-2 para «cubiertas
 * usadas para jardines de cubierta o para reuniones». La cuarta sección no
 * lleva cifra a propósito: una placa de concreto no es un elemento no
 * estructural y por eso no está en esa tabla.
 *
 * **No está a escala.** Los espesores están exagerados para que las cuatro
 * soluciones se distingan a tamaño de lectura.
 *
 * Hay dos versiones porque el sitio es bilingüe y
 * `scripts/check-traducciones.ts` rechaza —con razón— un diagrama rotulado
 * cuyo SVG inglés sea idéntico al español. Se escriben juntas, en el mismo
 * archivo, para que no puedan divergir en el dibujo mientras divergen en el
 * rótulo.
 */

/** Geometría común a las dos versiones. Solo cambian los `<text>`. */
const DIBUJO = `
  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50 200 L50 168"/>
    <path d="M180 200 L180 168"/>
    <path d="M40 172 L115 128 L190 172"/>
  </g>
  <g stroke-width="1" opacity="0.45">
    <path d="M56 156 L60 150"/>
    <path d="M76 144 L80 138"/>
    <path d="M96 132 L100 126"/>
    <path d="M136 128 L140 134"/>
    <path d="M156 140 L160 146"/>
    <path d="M176 152 L180 158"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M270 200 L270 172"/>
    <path d="M400 200 L400 158"/>
    <path d="M260 166 L410 152"/>
  </g>
  <g stroke-width="1.4" opacity="0.7">
    <path d="M260 176 L410 162"/>
  </g>
  <g stroke-width="1" opacity="0.4">
    <path d="M285 165 L285 175"/>
    <path d="M315 162 L315 172"/>
    <path d="M345 159 L345 169"/>
    <path d="M375 156 L375 166"/>
  </g>

  <g stroke-width="2" stroke-linejoin="round">
    <path d="M490 200 L490 178"/>
    <path d="M620 200 L620 178"/>
    <rect x="480" y="166" width="150" height="12"/>
  </g>
  <g stroke-width="1.2" opacity="0.65">
    <path d="M480 156 L630 156"/>
    <path d="M480 161 L630 161"/>
  </g>
  <g stroke-width="1" opacity="0.5">
    <path d="M498 156 L498 144"/>
    <path d="M494 148 L498 142 L502 148"/>
    <path d="M540 156 L540 146"/>
    <path d="M536 150 L540 144 L544 150"/>
    <path d="M582 156 L582 143"/>
    <path d="M578 148 L582 141 L586 148"/>
    <path d="M614 156 L614 147"/>
    <path d="M610 151 L614 145 L618 151"/>
  </g>

  <g stroke-width="2" stroke-linejoin="round">
    <path d="M710 200 L710 180"/>
    <path d="M840 200 L840 180"/>
    <rect x="700" y="162" width="150" height="18"/>
  </g>
  <g stroke-width="1.2" opacity="0.65">
    <path d="M700 156 L850 156"/>
  </g>
  <g stroke-width="1" opacity="0.4">
    <path d="M700 158 L850 158" stroke-dasharray="4 3"/>
  </g>
`

/**
 * Los cuatro sistemas de cubierta, comparados por lo único que la norma
 * publica: su peso.
 *
 * Es la figura que sostiene el artículo: la teja de barro pesa diez veces lo
 * que la lámina, y esa relación —no el gusto— es la que decide la estructura.
 */
export const CUATRO_CUBIERTAS = `
<svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="30" y="234">Teja de barro</text>
    <text x="250" y="234">Termoacústica</text>
    <text x="470" y="234">Cubierta verde</text>
    <text x="690" y="234">Placa de concreto</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="256">80 kgf/m² de carga</text>
    <text x="30" y="272">muerta, incluido el</text>
    <text x="30" y="288">mortero de pega.</text>
    <text x="250" y="256">8 kgf/m² la lámina</text>
    <text x="250" y="272">sola. El aislante se</text>
    <text x="250" y="288">suma por milímetro.</text>
    <text x="470" y="256">No está en la tabla de</text>
    <text x="470" y="272">cargas muertas. Su carga</text>
    <text x="470" y="288">viva son 500 kgf/m².</text>
    <text x="690" y="256">Es estructura, no</text>
    <text x="690" y="272">acabado: su peso lo</text>
    <text x="690" y="288">pone el diseño.</text>
  </g>
</svg>
`

/** Las mismas cuatro cubiertas, rotuladas en inglés. */
export const CUATRO_CUBIERTAS_EN = `
<svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="30" y="234">Clay tile</text>
    <text x="250" y="234">Insulated metal</text>
    <text x="470" y="234">Green roof</text>
    <text x="690" y="234">Concrete slab</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="256">80 kgf/m² of dead</text>
    <text x="30" y="272">load, bedding mortar</text>
    <text x="30" y="288">included.</text>
    <text x="250" y="256">8 kgf/m² for the sheet</text>
    <text x="250" y="272">alone. Insulation adds</text>
    <text x="250" y="288">up by the millimetre.</text>
    <text x="470" y="256">Absent from the dead</text>
    <text x="470" y="272">load table. Its live</text>
    <text x="470" y="288">load is 500 kgf/m².</text>
    <text x="690" y="256">It is structure, not a</text>
    <text x="690" y="272">finish: its weight comes</text>
    <text x="690" y="288">out of the design.</text>
  </g>
</svg>
`
