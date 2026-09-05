/**
 * Diagramas de la serie de costos y mercado.
 *
 * Mismo lenguaje que los del artículo de fisuras: dibujo de línea, sin relleno
 * y sin color propio —todo trazo en `currentColor`—, sin `width` ni `height` en
 * el elemento raíz para que escale con el contenedor y herede la tinta del
 * texto.
 *
 * Hay una restricción de honestidad que condiciona el dibujo y conviene dejar
 * escrita: **ninguna figura de esta serie representa proporciones**. No existe
 * fuente pública que publique el peso en pesos de cada capítulo constructivo
 * de una obra, así que dibujar bandas de alturas distintas insinuaría un dato
 * que nadie mide. Las bandas van iguales a propósito, y el pie de la figura lo
 * dice.
 *
 * Las dos primeras figuras tienen versión inglesa, porque las usa la traducción
 * del artículo de costo por m². Van en este mismo archivo y sobre la misma
 * constante de trazado: si el dibujo viviera duplicado dentro de `en/`, el día
 * que alguien corrija una cota la corregiría en un solo idioma.
 */

/** Geometría de la figura del índice. Solo cambian los `<text>`. */
const DIBUJO_INDICE = `
  <g stroke-width="1" opacity="0.35">
    <path d="M60 30 L60 190 L390 190"/>
    <path d="M560 30 L560 190 L890 190"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M70 170 L120 163 L170 150 L220 140 L270 118 L320 100 L375 78"/>
  </g>

  <g stroke-width="1" opacity="0.5">
    <path d="M60 190 L60 190"/>
    <path d="M620 60 L830 60" stroke-dasharray="4 5"/>
    <path d="M620 100 L830 100" stroke-dasharray="4 5"/>
    <path d="M620 140 L830 140" stroke-dasharray="4 5"/>
  </g>

  <g stroke-width="1.5" opacity="0.8">
    <path d="M410 110 L540 110"/>
    <path d="M528 102 L540 110 L528 118"/>
    <path d="M462 92 L488 128"/>
    <path d="M488 92 L462 128"/>
  </g>
`

/**
 * Lo que mide un índice de costos, y lo que no.
 *
 * Es el diagrama que sostiene el argumento central del artículo: la serie
 * oficial describe una pendiente, no una altura. Por eso el eje vertical de la
 * izquierda está rotulado en por ciento y el de la derecha, en pesos, aparece
 * vacío y con el enlace tachado entre los dos.
 */
export const INDICE_NO_ES_PRECIO = `
<svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO_INDICE}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="60" y="216">Lo que sí publica el DANE</text>
    <text x="560" y="216">Lo que usted preguntó</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="60" y="234">Variación de precios de una canasta</text>
    <text x="60" y="248">de insumos, mes a mes</text>
    <text x="560" y="234">Cuántos pesos vale un metro</text>
    <text x="560" y="248">cuadrado construido hoy, aquí</text>
    <text x="24" y="34">%</text>
    <text x="524" y="34">$</text>
    <text x="404" y="146">no se deduce</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.45">
    <text x="640" y="64">?</text>
    <text x="640" y="104">?</text>
    <text x="640" y="144">?</text>
  </g>
</svg>
`

/** La misma figura, rotulada en inglés. */
export const INDICE_NO_ES_PRECIO_EN = `
<svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO_INDICE}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="60" y="216">What DANE does publish</text>
    <text x="560" y="216">What you asked</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="60" y="234">Month-on-month price change in a</text>
    <text x="60" y="248">basket of construction inputs</text>
    <text x="560" y="234">How many pesos a built square</text>
    <text x="560" y="248">metre costs today, right here</text>
    <text x="24" y="34">%</text>
    <text x="524" y="34">$</text>
    <text x="404" y="146">does not follow</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.45">
    <text x="640" y="64">?</text>
    <text x="640" y="104">?</text>
    <text x="640" y="144">?</text>
  </g>
</svg>
`

/** Geometría de la anatomía del m². Solo cambian los `<text>`. */
const DIBUJO_ANATOMIA = `
  <g stroke-width="1.5">
    <rect x="60" y="20" width="300" height="240"/>
  </g>
  <g stroke-width="1" opacity="0.35">
    <path d="M60 54 L360 54"/>
    <path d="M60 89 L360 89"/>
    <path d="M60 123 L360 123"/>
    <path d="M60 157 L360 157"/>
    <path d="M60 191 L360 191"/>
    <path d="M60 226 L360 226"/>
  </g>

  <g stroke-width="1" opacity="0.5">
    <path d="M395 20 L410 20 L410 260 L395 260"/>
    <path d="M410 140 L440 140"/>
  </g>

  <g stroke-width="1" opacity="0.5">
    <path d="M540 20 L525 20 L525 260 L540 260" stroke-dasharray="4 5"/>
  </g>
`

/**
 * La anatomía de un costo por metro cuadrado.
 *
 * Dentro de la caja, los seis capítulos constructivos con los que el DANE
 * describe la construcción de una edificación. Fuera de la caja, con llave,
 * lo que un costo de obra por definición no incluye. Las bandas son iguales:
 * el reparto real cambia con cada proyecto y nadie lo publica.
 */
export const ANATOMIA_DEL_M2 = `
<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO_ANATOMIA}
  <g fill="currentColor" stroke="none" font-size="12">
    <text x="74" y="42">Preliminares</text>
    <text x="74" y="76">Excavación y cimentación</text>
    <text x="74" y="111">Estructura y cubierta</text>
    <text x="74" y="145">Mampostería y pañetes</text>
    <text x="74" y="179">Acabados tipo 1</text>
    <text x="74" y="213">Acabados tipo 2</text>
    <text x="74" y="248">Acabados tipo 3</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="12">
    <text x="556" y="45">El lote</text>
    <text x="556" y="85">Los diseños técnicos</text>
    <text x="556" y="125">Las expensas y los impuestos</text>
    <text x="556" y="165">Las conexiones de servicios</text>
    <text x="556" y="205">Las pólizas y los ensayos</text>
    <text x="556" y="245">El tiempo, y el IVA que aplique</text>
  </g>

  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="60" y="286">Costo de obra</text>
    <text x="525" y="286">Fuera del costo de obra, y se paga igual</text>
  </g>
</svg>
`

/** La misma anatomía, rotulada en inglés. */
export const ANATOMIA_DEL_M2_EN = `
<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO_ANATOMIA}
  <g fill="currentColor" stroke="none" font-size="12">
    <text x="74" y="42">Site preliminaries</text>
    <text x="74" y="76">Excavation and foundations</text>
    <text x="74" y="111">Structure and roof</text>
    <text x="74" y="145">Masonry and rendering</text>
    <text x="74" y="179">Finishes, type 1</text>
    <text x="74" y="213">Finishes, type 2</text>
    <text x="74" y="248">Finishes, type 3</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="12">
    <text x="556" y="45">The land</text>
    <text x="556" y="85">The engineering designs</text>
    <text x="556" y="125">Permit fees and taxes</text>
    <text x="556" y="165">Utility connections</text>
    <text x="556" y="205">Bonds and laboratory tests</text>
    <text x="556" y="245">Time, and any VAT that applies</text>
  </g>

  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="60" y="286">Construction cost</text>
    <text x="525" y="286">Outside the construction cost, and paid anyway</text>
  </g>
</svg>
`

/**
 * Dónde está la frontera de una remodelación.
 *
 * Tres plantas del mismo apartamento. La primera cambia acabados; la segunda
 * mueve un muro divisorio; la tercera toca el muro portante. El salto de
 * régimen —de reparación locativa a licencia de modificación— ocurre entre la
 * primera y la segunda, no donde la gente lo supone.
 */
export const FRONTERA_DE_LA_REMODELACION = `
<svg viewBox="0 0 900 250" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
  <g stroke-width="2">
    <rect x="20" y="20" width="240" height="140"/>
    <rect x="330" y="20" width="240" height="140"/>
    <rect x="640" y="20" width="240" height="140"/>
  </g>

  <g stroke-width="2">
    <path d="M20 95 L110 95"/>
    <path d="M330 95 L420 95"/>
    <path d="M640 95 L730 95"/>
  </g>

  <g stroke-width="1">
    <path d="M170 20 L170 160"/>
    <path d="M480 20 L480 90"/>
    <path d="M790 20 L790 160" stroke-dasharray="5 5"/>
  </g>

  <g stroke-width="1" opacity="0.35">
    <path d="M28 152 L252 152"/>
    <path d="M338 152 L562 152"/>
  </g>

  <g stroke-width="1.5" opacity="0.8">
    <path d="M470 120 L490 140"/>
    <path d="M490 120 L470 140"/>
    <path d="M780 120 L800 140"/>
    <path d="M800 120 L780 140"/>
  </g>

  <g fill="currentColor" stroke="none" font-size="13">
    <text x="20" y="186">Cambia enchapes y pintura</text>
    <text x="330" y="186">Tumba un muro divisorio</text>
    <text x="640" y="186">Tumba un muro portante</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="20" y="206">Reparación locativa.</text>
    <text x="20" y="220">Sin licencia.</text>
    <text x="330" y="206">Cambia la distribución interior:</text>
    <text x="330" y="220">licencia de modificación.</text>
    <text x="640" y="206">Modificación con diseño</text>
    <text x="640" y="220">estructural firmado, o no va.</text>
  </g>
</svg>
`

/**
 * Lo que hay que llevar hasta una casa campestre y en la ciudad ya estaba.
 *
 * Un corte esquemático del predio: la vía de acceso, la línea eléctrica con
 * sus postes, la fuente de agua con su tanque, el sistema de tratamiento de
 * aguas residuales y el corte del terreno. No es un diseño: es el inventario
 * de las cinco partidas que no existen en un lote urbano.
 */
export const LO_QUE_NO_HAY_EN_EL_CAMPO = `
<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
  <g stroke-width="1.5">
    <path d="M20 230 L200 230 L320 190 L520 190 L640 150 L880 150"/>
  </g>

  <g stroke-width="1" opacity="0.35">
    <path d="M20 250 L880 250"/>
  </g>

  <g stroke-width="2">
    <path d="M470 190 L470 130 L560 130 L560 190"/>
    <path d="M455 132 L515 96 L575 132"/>
  </g>

  <g stroke-width="1.5">
    <path d="M60 230 L60 150"/>
    <path d="M200 216 L200 140"/>
    <path d="M340 186 L340 118"/>
    <path d="M60 150 L200 140 L340 118 L470 150" stroke-dasharray="0"/>
  </g>

  <g stroke-width="1.5">
    <path d="M700 150 L700 110 L760 110 L760 150"/>
    <path d="M730 150 L730 190 L620 190"/>
    <circle cx="800" cy="196" r="18"/>
    <path d="M800 178 L800 150"/>
  </g>

  <g stroke-width="1.5">
    <rect x="330" y="244" width="90" height="34"/>
    <path d="M470 190 L470 244 L420 244"/>
  </g>

  <g stroke-width="1" opacity="0.5">
    <path d="M20 262 L200 262"/>
    <path d="M200 262 L200 236"/>
  </g>

  <g fill="currentColor" stroke="none" font-size="12">
    <text x="24" y="140">Acometida eléctrica: postes y transformador</text>
    <text x="642" y="100">Tanque</text>
    <text x="770" y="230">Pozo o aljibe</text>
    <text x="330" y="296">Tratamiento de aguas residuales</text>
    <text x="24" y="284">Vía de acceso</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="452" y="88">Casa en el corte del terreno</text>
  </g>
</svg>
`
