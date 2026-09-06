/**
 * Diagrama del artículo de la NTC 4595:2025.
 *
 * Mismo lenguaje que los de agua rural, fisuras y costos: dibujo de línea, sin
 * relleno y sin color propio —todo trazo en `currentColor`—, sin `width` ni
 * `height` en el elemento raíz para que escale con el contenedor y herede la
 * tinta del texto.
 *
 * **Por qué esta figura y no un cuadro de cambios por capítulo.** La tentación
 * era dibujar la tabla de diferencias entre ediciones, pero eso es un índice, no
 * un argumento, y además compite con el Anexo D de la propia norma, que ya la
 * trae. Lo que ningún documento dibuja es la tesis del artículo: en la edición
 * de 2020 el área del lote se **leía** en una fila —tantos estudiantes, tantos
 * metros—, y en la de 2025 se **construye** recorriendo una cadena de tablas
 * que arranca en la matrícula y en el PEI o PEC.
 *
 * La cadena tiene dos ramales y ese es todo el dibujo. El de arriba —lo
 * construido cubierto— existía. El de abajo —el área libre, con las áreas
 * libres curriculares dentro— es donde está el cambio de 2025: el patio dejó de
 * ser lo que sobra después de implantar los bloques y pasó a ser área de
 * programa, con su propio índice por estudiante. Dibujar los dos ramales a la
 * misma altura visual, convergiendo en la misma caja, dice eso sin una frase.
 *
 * **No se reproduce ninguna tabla de la norma.** Las cajas nombran los ambientes
 * y remiten al número de tabla; los valores no están aquí, y eso es deliberado:
 * la NTC 4595 es un documento con derechos de ICONTEC y lo que este blog hace es
 * citarla y explicarla, no republicarla.
 *
 * Hay dos versiones porque el sitio es bilingüe y
 * `scripts/check-traducciones.ts` rechaza —con razón— un diagrama rotulado cuyo
 * SVG inglés sea idéntico al español. Se escriben juntas, en el mismo archivo,
 * para que no puedan divergir en el dibujo mientras divergen en el rótulo.
 */

/** Geometría común a las dos versiones. Solo cambian los `<text>`. */
const DIBUJO = `
  <g stroke-width="1.5">
    <rect x="24" y="150" width="132" height="58" rx="2"/>
  </g>

  <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M156 179 L192 179"/>
    <path d="M192 179 L192 92"/>
    <path d="M192 179 L192 266"/>
    <path d="M192 92 L216 92"/>
    <path d="M192 266 L216 266"/>
  </g>

  <g stroke-width="1.5">
    <rect x="216" y="62" width="176" height="60" rx="2"/>
    <rect x="216" y="236" width="176" height="60" rx="2"/>
  </g>

  <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M392 92 L440 92"/>
    <path d="M392 266 L440 266"/>
  </g>

  <g stroke-width="1.5">
    <rect x="440" y="62" width="176" height="60" rx="2"/>
    <rect x="440" y="236" width="176" height="60" rx="2"/>
  </g>

  <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M616 92 L664 92"/>
    <path d="M616 266 L664 266"/>
    <path d="M664 92 L664 179"/>
    <path d="M664 266 L664 179"/>
    <path d="M664 179 L700 179"/>
  </g>

  <g stroke-width="2">
    <rect x="700" y="146" width="176" height="66" rx="2"/>
  </g>

  <g stroke-width="1" opacity="0.35">
    <path d="M216 320 L616 320" stroke-dasharray="5 5"/>
    <path d="M216 314 L216 326"/>
    <path d="M616 314 L616 326"/>
  </g>
`

/**
 * Cómo se arma el área de un colegio en la edición de 2025: dos ramales que
 * arrancan en la matrícula y convergen en el área del lote.
 *
 * Es la figura que sostiene el artículo entero. El ramal de abajo es el que
 * cambió: el área libre dejó de ser el resto y pasó a calcularse.
 */
export const CADENA_DE_AREAS = `
<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="40" y="175">Matrícula</text>
    <text x="232" y="88">Ambientes pedagógicos</text>
    <text x="456" y="88">Ambientes</text>
    <text x="232" y="262">Áreas libres curriculares</text>
    <text x="456" y="262">Circulación, zonas verdes</text>
    <text x="716" y="176">Área total del lote</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.65">
    <text x="40" y="194">PEI o PEC</text>
    <text x="232" y="106">básicos. Tablas 6, 7 y 8</text>
    <text x="456" y="106">complementarios. Tablas 10, 11 y 12</text>
    <text x="232" y="280">Numeral 5.3.6.3 y Tabla 9</text>
    <text x="456" y="280">y parqueos. Tablas 2 y 4</text>
    <text x="716" y="195">sin cesiones. Tabla 4</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.5">
    <text x="216" y="342">El ramal del área libre es lo que añade la edición de 2025.</text>
  </g>
</svg>
`

/** La misma cadena, rotulada en inglés. */
export const CADENA_DE_AREAS_EN = `
<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="40" y="175">Enrolment</text>
    <text x="232" y="88">Basic teaching spaces</text>
    <text x="456" y="88">Supporting spaces</text>
    <text x="232" y="262">Curricular open space</text>
    <text x="456" y="262">Circulation, green areas</text>
    <text x="716" y="176">Total site area</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.65">
    <text x="40" y="194">PEI or PEC</text>
    <text x="232" y="106">Tables 6, 7 and 8</text>
    <text x="456" y="106">Tables 10, 11 and 12</text>
    <text x="232" y="280">Clause 5.3.6.3 and Table 9</text>
    <text x="456" y="280">and parking. Tables 2 and 4</text>
    <text x="716" y="195">before land transfers. Table 4</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.5">
    <text x="216" y="342">The open-space branch is what the 2025 edition adds.</text>
  </g>
</svg>
`
