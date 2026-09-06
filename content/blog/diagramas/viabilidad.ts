/**
 * La figura del artículo «Cuánto cuesta un estudio de viabilidad de un predio».
 *
 * Mismo lenguaje que el resto de la serie: trazo de línea en `currentColor`,
 * sin relleno, sin `width` ni `height` en la raíz, para que herede la tinta del
 * texto y escale con el contenedor.
 *
 * **Esta figura sí representa proporciones, y por eso hay que decir en qué
 * escala.** El eje es logarítmico. Con eje lineal, los dos precios de la
 * izquierda —los que fija el decreto— caen prácticamente encima del cero y la
 * figura solo enseña la barra de la derecha, que es justo lo contrario de lo
 * que el artículo argumenta. Con eje logarítmico se ven los cuatro escalones y
 * se ve que el salto grande no está donde uno espera. El pie de la figura lo
 * declara, porque una escala logarítmica sin avisar es una figura mentirosa.
 *
 * Las posiciones salen de `log10` del valor en pesos, mapeando 5,0 → x=80 y
 * 7,1 → x=840. Los cuatro rótulos de precio son cifras verificadas y fechadas
 * en el propio artículo; si alguna cambia, cambia también la posición.
 *
 * Las dos versiones se construyen sobre la misma constante de trazado. Lo único
 * que difiere son los `<text>`: si el dibujo viviera duplicado dentro de `en/`,
 * el día que alguien corrija una cota la corregiría en un solo idioma.
 */

/** Geometría de la escalera de precios. Solo cambian los `<text>`. */
const DIBUJO_ESCALERA = `
  <g stroke-width="1.5">
    <path d="M60 150 L860 150"/>
  </g>

  <g stroke-width="1.5">
    <path d="M86 142 L86 158"/>
    <path d="M339 142 L339 158"/>
    <path d="M506 142 L506 158"/>
    <path d="M615 142 L615 158"/>
    <path d="M832 142 L832 158"/>
  </g>

  <g stroke-width="4" stroke-linecap="round" opacity="0.45">
    <path d="M615 150 L832 150"/>
  </g>

  <g stroke-width="1" opacity="0.5">
    <path d="M86 68 L86 56 L339 56 L339 68"/>
    <path d="M506 68 L506 56 L832 56 L832 68"/>
  </g>
`

/**
 * Los cuatro precios de la misma pregunta, en escala logarítmica.
 *
 * Sostiene el argumento central: a la izquierda, lo que el Estado tarifa por
 * decreto; a la derecha, lo que el mercado cobra sin tarifa de referencia. El
 * hueco del medio es el que el artículo explica.
 */
export const ESCALERA_DE_PRECIOS = `
<svg viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO_ESCALERA}
  <g fill="currentColor" stroke="none" font-size="13" text-anchor="middle">
    <text x="212" y="44">Tarifa fija por decreto</text>
    <text x="669" y="44">Sin tarifa de referencia</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="12" text-anchor="middle">
    <text x="86" y="130">$104.083</text>
    <text x="339" y="130">$519.791</text>
    <text x="506" y="130">$1.500.000</text>
    <text x="615" y="130">$3.000.000</text>
    <text x="832" y="130">$12.000.000</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6" text-anchor="middle">
    <text x="86" y="178">Concepto de uso</text>
    <text x="86" y="192">del suelo</text>
    <text x="339" y="178">Concepto de norma</text>
    <text x="339" y="192">urbanística</text>
    <text x="506" y="178">Informe técnico</text>
    <text x="506" y="192">privado, desde</text>
    <text x="723" y="178">Prefactibilidad</text>
    <text x="723" y="192">de promotor</text>
  </g>
</svg>
`

/** La misma figura, rotulada en inglés. */
export const ESCALERA_DE_PRECIOS_EN = `
<svg viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO_ESCALERA}
  <g fill="currentColor" stroke="none" font-size="13" text-anchor="middle">
    <text x="212" y="44">Fixed by decree</text>
    <text x="669" y="44">No reference rate</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="12" text-anchor="middle">
    <text x="86" y="130">$104,083</text>
    <text x="339" y="130">$519,791</text>
    <text x="506" y="130">$1,500,000</text>
    <text x="615" y="130">$3,000,000</text>
    <text x="832" y="130">$12,000,000</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6" text-anchor="middle">
    <text x="86" y="178">Land-use</text>
    <text x="86" y="192">ruling</text>
    <text x="339" y="178">Planning-rules</text>
    <text x="339" y="192">ruling</text>
    <text x="506" y="178">Private technical</text>
    <text x="506" y="192">report, from</text>
    <text x="723" y="178">Developer</text>
    <text x="723" y="192">prefeasibility</text>
  </g>
</svg>
`
