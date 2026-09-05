/**
 * Diagrama del artículo de construir en un lote con pendiente.
 *
 * Mismo lenguaje que los demás: dibujo de línea, sin relleno ni color propio
 * —todo trazo en `currentColor`—, sin `width` ni `height` en el elemento raíz.
 *
 * La figura es una **sección por la ladera**, y es una sección porque el
 * argumento del artículo es de cota: la plataforma parte el terreno en dos
 * mitades que se ven iguales cuando la obra termina y se comportan al revés.
 * A la izquierda de donde la plataforma corta el terreno original hay **corte**
 * y el cimiento se apoya en material que llevaba ahí siempre; a la derecha hay
 * **lleno**, y por debajo del piso terminado sigue estando el terreno viejo,
 * más abajo. Dibujar la línea original punteada bajo el lleno es todo el
 * diagrama: es la línea que la obra tapa y que el cimiento tiene que alcanzar.
 *
 * **No está a escala.** La pendiente está exagerada para que el corte y el
 * lleno se distingan a tamaño de lectura.
 *
 * Hay dos versiones porque el sitio es bilingüe y
 * `scripts/check-traducciones.ts` rechaza un diagrama rotulado cuyo SVG inglés
 * sea idéntico al español. Se escriben juntas, en el mismo archivo, para que no
 * puedan divergir en el dibujo mientras divergen en el rótulo.
 */

/** Geometría común a las dos versiones. Solo cambian los `<text>`. */
const DIBUJO = `
  <g stroke-width="1.5" opacity="0.55">
    <path d="M40 74 L200 115"/>
    <path d="M660 234 L860 285"/>
  </g>
  <g stroke-width="1.2" opacity="0.4">
    <path d="M200 115 L660 234" stroke-dasharray="6 5"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M200 160 L660 160"/>
    <path d="M200 160 L200 115"/>
    <path d="M660 160 L744 255"/>
  </g>

  <g stroke-width="1" opacity="0.28">
    <path d="M270 156 L282 146"/>
    <path d="M302 157 L312 148"/>
    <path d="M330 158 L338 151"/>
    <path d="M560 176 L574 162"/>
    <path d="M592 190 L606 176"/>
    <path d="M624 204 L638 190"/>
    <path d="M556 196 L570 182"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M280 160 L280 96"/>
    <path d="M600 160 L600 96"/>
    <path d="M264 96 L616 96"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M294 160 L294 178"/>
    <path d="M320 160 L320 178"/>
    <path d="M294 178 L320 178"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M562 160 L562 232"/>
    <path d="M588 160 L588 232"/>
    <path d="M554 232 L596 232"/>
  </g>

  <g stroke-width="1" opacity="0.45">
    <path d="M650 170 L650 232"/>
    <path d="M644 232 L656 232"/>
  </g>
`

/**
 * La sección por la ladera, con la mitad en corte y la mitad en lleno, y el
 * terreno original punteado por debajo del relleno.
 *
 * Es la figura que sostiene el artículo entero: la casa está sobre una sola
 * plataforma y sobre dos terrenos distintos.
 */
export const CORTE_Y_LLENO = `
<svg viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.45">
    <text x="40" y="64">terreno original</text>
    <text x="204" y="146">plataforma</text>
    <text x="392" y="222">terreno original bajo el lleno</text>
    <text x="604" y="180">drenaje</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="212" y="276">Lado en corte</text>
    <text x="520" y="276">Lado en lleno</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="212" y="296">El cimiento se apoya en</text>
    <text x="212" y="312">material que ya estaba ahí.</text>
    <text x="520" y="296">El cimiento tiene que bajar</text>
    <text x="520" y="312">hasta el terreno original.</text>
  </g>
</svg>
`

/** La misma sección, rotulada en inglés. */
export const CORTE_Y_LLENO_EN = `
<svg viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.45">
    <text x="40" y="64">original ground</text>
    <text x="204" y="146">platform</text>
    <text x="392" y="222">original ground under the fill</text>
    <text x="596" y="180">drainage</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="212" y="276">Cut side</text>
    <text x="520" y="276">Fill side</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="212" y="296">The footing sits on ground</text>
    <text x="212" y="312">that was always there.</text>
    <text x="520" y="296">The footing has to reach</text>
    <text x="520" y="312">down to the original ground.</text>
  </g>
</svg>
`
