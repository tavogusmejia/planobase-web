/**
 * Diagrama del artículo de piscina en terraza.
 *
 * Mismo lenguaje que los demás: dibujo de línea, sin relleno y sin color propio
 * —todo trazo en `currentColor`—, sin `width` ni `height` en el elemento raíz
 * para que escale con el contenedor y herede la tinta del texto.
 *
 * Esta es la única figura del lote que no es una sección, y es deliberado. El
 * artículo se sostiene sobre una comparación numérica —lo que la losa se diseñó
 * para aguantar frente a lo que la piscina le pone encima— y esa comparación no
 * se ve en un corte: se ve en cuatro barras sobre la misma línea base. Dibujar
 * una sección aquí habría ilustrado el tema sin demostrar nada.
 *
 * Las dos primeras barras van a media tinta y las dos últimas a tinta plena.
 * No es estética: separa lo que es **mínimo de norma** de lo que es **carga que
 * impone la piscina**, que son las dos magnitudes que el artículo enfrenta.
 *
 * Las cuatro cifras están verificadas en fuente primaria y se citan idénticas
 * en el cuerpo del artículo:
 *
 * - 1,8 kN/m² · NSR-10, tabla B.4.2.1-1, residencial, cuartos privados.
 * - 5,0 kN/m² · NSR-10, tabla B.4.2.1-2 en la redacción que le dio el Decreto
 *   092 de 2011, terraza autorizada como elemento comunal recreativo.
 * - 11,76 kN/m² · agua dulce a 1 000 kg/m³ (tabla B.3.2-1) por 9,8 m/s², que es
 *   lo que manda B.3.2, por 1,20 m de lámina.
 * - 17 kN/m² · lo anterior más una losa de fondo de 0,20 m en concreto reforzado
 *   a 2 400 kg/m³ y sus acabados. **La losa de 0,20 m es un supuesto explícito**,
 *   no un dato de norma, y así se declara en el pie de la figura y en el texto.
 *
 * Dos versiones sobre una sola constante de trazado, porque el sitio es
 * bilingüe y `scripts/check-traducciones.ts` rechaza —con razón— un diagrama
 * rotulado cuyo SVG inglés sea idéntico al español.
 */

/** Geometría común a las dos versiones. Solo cambian los `<text>`. */
const DIBUJO = `
  <g stroke-width="1" opacity="0.4">
    <path d="M250 30 L250 222"/>
  </g>

  <g stroke-width="1.5" opacity="0.5">
    <rect x="250" y="37" width="59" height="26"/>
    <rect x="250" y="87" width="165" height="26"/>
  </g>
  <g stroke-width="1.5">
    <rect x="250" y="137" width="388" height="26"/>
    <rect x="250" y="187" width="561" height="26"/>
  </g>

  <g stroke-width="1" opacity="0.3">
    <path d="M309 50 L638 50" stroke-dasharray="4 5"/>
    <path d="M309 46 L309 54"/>
    <path d="M638 46 L638 54"/>
  </g>
`

/**
 * Lo que la losa se diseñó para aguantar, frente a lo que la piscina le pone.
 *
 * La barra punteada superior mide la distancia entre las dos cosas, que es el
 * argumento entero del artículo.
 */
export const CARGAS = `
<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="12" text-anchor="end">
    <text x="240" y="55">Vivienda · cuartos privados</text>
    <text x="240" y="105">Terraza comunal recreativa</text>
    <text x="240" y="155">Solo la lámina de 1,20 m</text>
    <text x="240" y="205">La piscina entera</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="12">
    <text x="319" y="55">1,8</text>
    <text x="425" y="105">5,0</text>
    <text x="648" y="155">11,76</text>
    <text x="821" y="205">17</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.55">
    <text x="250" y="248">kN/m². Las dos primeras son mínimos de norma; las dos últimas,</text>
    <text x="250" y="264">la carga que impone la piscina. Una es carga viva, la otra es muerta.</text>
    <text x="330" y="42">seis veces y media</text>
  </g>
</svg>
`

/** Las mismas cuatro barras, rotuladas en inglés. */
export const CARGAS_EN = `
<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="12" text-anchor="end">
    <text x="240" y="55">Dwelling · private rooms</text>
    <text x="240" y="105">Communal recreation terrace</text>
    <text x="240" y="155">The 1.20 m of water alone</text>
    <text x="240" y="205">The whole pool</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="12">
    <text x="319" y="55">1.8</text>
    <text x="425" y="105">5.0</text>
    <text x="648" y="155">11.76</text>
    <text x="821" y="205">17</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.55">
    <text x="250" y="248">kN/m². The first two are code minima; the last two are the load</text>
    <text x="250" y="264">the pool imposes. One is live load, the other is dead load.</text>
    <text x="330" y="42">six and a half times</text>
  </g>
</svg>
`
