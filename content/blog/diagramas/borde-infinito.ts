/**
 * Diagrama del artículo de piscina de borde infinito.
 *
 * Mismo lenguaje que los de fisuras, humedad y agua rural: dibujo de línea, sin
 * relleno y sin color propio —todo trazo en `currentColor`—, sin `width` ni
 * `height` en el elemento raíz para que escale con el contenedor y herede la
 * tinta del texto.
 *
 * La figura es una **sección**, y tenía que serlo: la tesis del artículo es que
 * el borde infinito no es un acabado del vaso sino otra hidráulica entera. Eso
 * en planta no se ve; en sección se ve solo.
 *
 * **El dibujo corrige una intuición equivocada, y ese es su trabajo.** Casi
 * todo el mundo supone que la bomba aspira del fondo del vaso y que el rebose
 * es un adorno que devuelve el agua. En una piscina de borde infinito es al
 * revés, y desde mayo de 2026 está escrito en la norma: la Resolución 929 de
 * 2026 impone «hidráulica inversa», con el 100 % del caudal bombeado
 * desbordando por el muro, y deja los drenajes de fondo **exclusivamente para
 * el vaciado**. Por eso aquí el circuito de filtración toma del tanque de
 * compensación, y la tubería del fondo termina en una válvula y un ramal muerto
 * rotulado «solo para vaciado»: es la única forma de que el lector vea de un
 * golpe que el fondo no alimenta la bomba.
 *
 * **No está a escala.** La proporción entre el vaso y el tanque de compensación
 * depende del volumen y de la superficie de lámina —la norma pide el mayor
 * entre el 10 % del volumen y 60 L/m²—, que es justo el cálculo que ningún
 * diagrama puede dar hecho.
 *
 * Dos versiones sobre una sola constante de trazado, porque el sitio es
 * bilingüe y `scripts/check-traducciones.ts` rechaza —con razón— un diagrama
 * rotulado cuyo SVG inglés sea idéntico al español.
 */

/** Geometría común a las dos versiones. Solo cambian los `<text>`. */
const DIBUJO = `
  <g stroke-width="1.5" opacity="0.5">
    <path d="M40 170 L110 170"/>
    <path d="M584 158 L880 158"/>
  </g>
  <g stroke-width="1" opacity="0.28">
    <path d="M46 184 L58 172"/>
    <path d="M70 184 L82 172"/>
    <path d="M604 172 L616 160"/>
    <path d="M640 172 L652 160"/>
    <path d="M772 172 L784 160"/>
    <path d="M808 172 L820 160"/>
    <path d="M844 172 L856 160"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M110 76 L110 170 L500 170 L500 88 L516 88 L516 200 L578 200 L578 158"/>
  </g>

  <g stroke-width="1.5" opacity="0.55">
    <path d="M114 88 L496 88"/>
  </g>
  <g fill="currentColor" stroke="none" opacity="0.55">
    <path d="M194 78 L206 78 L200 86 Z"/>
  </g>

  <g stroke-width="1.5" opacity="0.5" stroke-linecap="round">
    <path d="M508 92 Q518 132 520 194"/>
    <path d="M512 92 Q523 134 525 194"/>
  </g>

  <g stroke-width="1.5">
    <rect x="258" y="163" width="32" height="7"/>
    <rect x="356" y="163" width="32" height="7"/>
  </g>
  <g stroke-width="1" opacity="0.45">
    <path d="M290 150 L356 150"/>
    <path d="M290 145 L290 155"/>
    <path d="M356 145 L356 155"/>
  </g>

  <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M274 170 L274 214 L372 214"/>
    <path d="M372 170 L372 214"/>
    <path d="M323 214 L323 244"/>
    <path d="M323 262 L323 300 L200 300"/>
  </g>
  <g stroke-width="1.5" stroke-linejoin="round">
    <path d="M315 244 L331 256 L331 244 L315 256 Z"/>
  </g>
  <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M209 295 L199 300 L209 305"/>
  </g>

  <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M546 200 L546 214 L672 214 L672 236"/>
    <path d="M612 312 L612 340 L578 340"/>
    <path d="M546 340 L500 340"/>
    <path d="M456 340 L430 340 L430 372 L96 372 L96 128 L110 128"/>
  </g>
  <g stroke-width="1.5">
    <rect x="600" y="236" width="160" height="76"/>
    <rect x="456" y="310" width="44" height="62"/>
    <circle cx="560" cy="340" r="14"/>
  </g>
  <g fill="currentColor" stroke="none">
    <path d="M565 333 L565 347 L551 340 Z"/>
  </g>
  <g stroke-width="1.5" opacity="0.55">
    <path d="M604 262 L756 262"/>
  </g>
  <g stroke-width="1.5" opacity="0.7">
    <path d="M690 236 L690 300"/>
  </g>
  <g stroke-width="1" opacity="0.55">
    <path d="M684 250 L696 250"/>
    <path d="M684 282 L696 282"/>
    <path d="M684 294 L696 294"/>
  </g>

  <g stroke-width="1" opacity="0.35">
    <path d="M596 70 L516 84"/>
    <path d="M596 94 L527 130"/>
    <path d="M596 118 L552 198"/>
  </g>
`

/**
 * La hidráulica de una piscina de borde infinito, en sección.
 *
 * El agua desborda el muro, cae al rebosadero, va por gravedad al tanque de
 * compensación, y de ahí la toma la bomba. Los drenajes de fondo no alimentan
 * nada: terminan en una válvula y solo sirven para vaciar el vaso.
 */
export const CIRCUITO = `
<svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="140" y="132">vaso</text>
    <text x="600" y="74">muro de rebose</text>
    <text x="600" y="98">lámina de agua</text>
    <text x="600" y="122">rebosadero</text>
    <text x="600" y="228">tanque de compensación</text>
    <text x="452" y="302">filtro</text>
    <text x="500" y="392">bomba de recirculación</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.55">
    <text x="296" y="142">0,90 m mínimo</text>
    <text x="600" y="142">canal perimetral de recogida</text>
    <text x="694" y="332">sondas de nivel</text>
    <text x="150" y="60">nivel del agua = cota del muro</text>
    <text x="96" y="320">drenajes de fondo · solo para vaciado</text>
  </g>
</svg>
`

/** La misma sección, rotulada en inglés. */
export const CIRCUITO_EN = `
<svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="140" y="132">pool shell</text>
    <text x="600" y="74">weir wall</text>
    <text x="600" y="98">water sheet</text>
    <text x="600" y="122">overflow channel</text>
    <text x="600" y="228">surge tank</text>
    <text x="452" y="302">filter</text>
    <text x="500" y="392">recirculation pump</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.55">
    <text x="296" y="142">0.90 m minimum</text>
    <text x="600" y="142">perimeter catch channel</text>
    <text x="694" y="332">level probes</text>
    <text x="150" y="60">water level = weir crest</text>
    <text x="96" y="320">floor drains · for emptying only</text>
  </g>
</svg>
`
