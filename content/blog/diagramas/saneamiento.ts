/**
 * Diagrama del artículo de aguas residuales sin alcantarillado.
 *
 * Mismo lenguaje que los demás: dibujo de línea, sin relleno ni color propio
 * —todo trazo en `currentColor`—, sin `width` ni `height` en el elemento raíz
 * para que escale con el contenedor y herede la tinta del texto.
 *
 * La figura es **el tren de tratamiento en el orden en que la norma lo exige**,
 * sobre un terreno en pendiente y con el pozo de agua arriba. Esa forma es el
 * argumento del artículo: «poner un pozo séptico» no es una partida, es una
 * secuencia de cuatro unidades, y la última —la que necesita área y suelo que
 * absorba— es la que decide si el proyecto cabe en el predio.
 *
 * Los rótulos numéricos no son de oficio: los cuatro salen del articulado de la
 * Resolución 0330 de 2017 y están citados en el cuerpo del artículo. El
 * tiempo de retención de la trampa de grasas es el artículo 172; el del tanque
 * y sus dos cámaras, el 173; la tasa de aplicación del campo, el 177.
 *
 * **No está a escala.** Las unidades están exageradas respecto del terreno para
 * que se distingan a tamaño de lectura.
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
    <path d="M30 120 L870 176"/>
  </g>

  <g stroke-width="1" opacity="0.25">
    <path d="M30 132 L44 121"/>
    <path d="M200 143 L214 132"/>
    <path d="M400 156 L414 145"/>
    <path d="M600 170 L614 159"/>
    <path d="M800 183 L814 172"/>
  </g>

  <g stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M52 122 L52 268"/>
    <path d="M84 124 L84 268"/>
    <path d="M52 268 L84 268"/>
    <path d="M46 121 L90 124"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M140 132 L140 82"/>
    <path d="M232 138 L232 88"/>
    <path d="M132 82 L186 58 L240 88"/>
  </g>

  <g stroke-width="1.4" stroke-linecap="round">
    <path d="M232 150 L272 150"/>
    <path d="M322 162 L352 162"/>
    <path d="M474 172 L498 172"/>
    <path d="M548 180 L580 180"/>
  </g>

  <g stroke-width="1.8" stroke-linejoin="round">
    <rect x="272" y="142" width="50" height="42"/>
  </g>

  <g stroke-width="1.8" stroke-linejoin="round">
    <rect x="352" y="150" width="122" height="58"/>
    <path d="M433 150 L433 208"/>
  </g>

  <g stroke-width="1.8" stroke-linejoin="round">
    <rect x="498" y="158" width="50" height="58"/>
  </g>
  <g stroke-width="1" opacity="0.45">
    <path d="M504 170 L542 170"/>
    <path d="M504 182 L542 182"/>
    <path d="M504 194 L542 194"/>
    <path d="M504 206 L542 206"/>
  </g>

  <g stroke-width="1.6" stroke-linecap="round">
    <path d="M580 180 L840 198"/>
    <path d="M580 200 L840 218"/>
    <path d="M580 220 L840 238"/>
  </g>
  <g stroke-width="1" opacity="0.4">
    <path d="M600 184 L600 224"/>
    <path d="M660 188 L660 228"/>
    <path d="M720 192 L720 232"/>
    <path d="M780 196 L780 236"/>
    <path d="M840 198 L840 238"/>
  </g>

  <g stroke-width="1" opacity="0.5">
    <path d="M30 288 L870 296" stroke-dasharray="6 5"/>
  </g>

  <g stroke-width="1.2" opacity="0.65">
    <path d="M112 96 L112 108"/>
    <path d="M108 104 L112 110 L116 104"/>
  </g>
`

/**
 * El tren de tratamiento en el orden que fija el reglamento, con el pozo de
 * agua aguas arriba.
 *
 * Es la figura que sostiene el artículo: lo que la gente llama «el pozo
 * séptico» son cuatro unidades encadenadas, y la que manda sobre el predio es
 * la última.
 */
export const TREN_DE_TRATAMIENTO = `
<svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="12">
    <text x="30" y="316">Pozo de agua</text>
    <text x="140" y="316">Casa</text>
    <text x="262" y="336">Trampa</text>
    <text x="262" y="352">de grasas</text>
    <text x="352" y="336">Tanque séptico</text>
    <text x="498" y="336">Filtro</text>
    <text x="498" y="352">anaeróbico</text>
    <text x="620" y="336">Campo de infiltración</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="336">El tanque va</text>
    <text x="30" y="352">aguas abajo de él</text>
    <text x="262" y="368">2,5 min</text>
    <text x="352" y="352">12 a 24 horas · dos cámaras</text>
    <text x="352" y="368">La primera, dos tercios del volumen</text>
    <text x="498" y="368">Anexo o aparte</text>
    <text x="620" y="352">Hasta 100 litros por día y por m²</text>
    <text x="620" y="368">Zanjas de 30 m como máximo</text>
    <text x="700" y="284">Nivel freático</text>
  </g>
</svg>
`

/** El mismo tren de tratamiento, rotulado en inglés. */
export const TREN_DE_TRATAMIENTO_EN = `
<svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="12">
    <text x="30" y="316">Water well</text>
    <text x="140" y="316">House</text>
    <text x="262" y="336">Grease</text>
    <text x="262" y="352">trap</text>
    <text x="352" y="336">Septic tank</text>
    <text x="498" y="336">Anaerobic</text>
    <text x="498" y="352">filter</text>
    <text x="620" y="336">Infiltration field</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="336">The tank sits</text>
    <text x="30" y="352">downhill of it</text>
    <text x="262" y="368">2.5 min</text>
    <text x="352" y="352">12 to 24 hours · two chambers</text>
    <text x="352" y="368">The first one holds two thirds</text>
    <text x="498" y="368">Attached or separate</text>
    <text x="620" y="352">Up to 100 litres a day per m²</text>
    <text x="620" y="368">Trenches of 30 m at most</text>
    <text x="700" y="284">Water table</text>
  </g>
</svg>
`
