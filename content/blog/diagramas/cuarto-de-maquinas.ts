/**
 * Diagrama del artículo del cuarto de máquinas.
 *
 * Mismo lenguaje que los demás: dibujo de línea, sin relleno y sin color propio
 * —todo trazo en `currentColor`—, sin `width` ni `height` en el elemento raíz
 * para que escale con el contenedor y herede la tinta del texto.
 *
 * Dos paneles y una sola variable entre ellos: **la cota de la bomba respecto
 * al nivel del agua**. Es la decisión que el artículo llama irreversible, y es
 * irreversible por una razón puramente geométrica —una vez fundido el piso del
 * cuarto no se baja—, así que la figura tiene que ser una comparación de cotas
 * y no un esquema de flujo. Todo lo demás se dibuja idéntico en los dos paneles
 * a propósito: mismo vaso, misma bomba, mismo filtro, mismo retorno. Lo único
 * que cambia es la altura, que es exactamente el argumento.
 *
 * Las burbujas del montante del panel derecho no son decoración: son el aire
 * que entra cuando la bomba pierde el cebado, que es el modo de fallo que el
 * artículo describe.
 *
 * **No está a escala** y no lo pretende: la carga disponible depende de la
 * distancia, del trazado y de los accesorios, que es el cálculo que sustituye
 * al dibujo.
 *
 * Dos versiones sobre una sola constante de trazado, porque el sitio es
 * bilingüe y `scripts/check-traducciones.ts` rechaza —con razón— un diagrama
 * rotulado cuyo SVG inglés sea idéntico al español.
 */

/** Geometría común a las dos versiones. Solo cambian los `<text>`. */
const DIBUJO = `
  <g stroke-width="1" opacity="0.3">
    <rect x="30" y="20" width="400" height="230"/>
    <rect x="470" y="20" width="400" height="230"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M60 50 L60 110 L200 110 L200 50"/>
  </g>
  <g stroke-width="1.5" opacity="0.55">
    <path d="M64 62 L196 62"/>
  </g>
  <g fill="currentColor" stroke="none" opacity="0.55">
    <path d="M94 52 L106 52 L100 60 Z"/>
  </g>
  <g stroke-width="1" opacity="0.4" stroke-dasharray="5 4">
    <path d="M38 62 L410 62"/>
    <path d="M38 170 L410 170"/>
  </g>
  <g stroke-width="1" opacity="0.5">
    <path d="M46 62 L46 170"/>
    <path d="M41 62 L51 62"/>
    <path d="M41 170 L51 170"/>
  </g>
  <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M130 110 L130 170 L242 170"/>
    <path d="M270 170 L302 170"/>
    <path d="M346 170 L372 170 L372 90 L200 90"/>
  </g>
  <g stroke-width="1.5">
    <circle cx="256" cy="170" r="14"/>
    <rect x="302" y="140" width="44" height="60"/>
  </g>
  <g fill="currentColor" stroke="none">
    <path d="M251 163 L251 177 L265 170 Z"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M500 138 L500 200 L640 200 L640 138"/>
  </g>
  <g stroke-width="1.5" opacity="0.55">
    <path d="M504 150 L636 150"/>
  </g>
  <g fill="currentColor" stroke="none" opacity="0.55">
    <path d="M534 140 L546 140 L540 148 Z"/>
  </g>
  <g stroke-width="1" opacity="0.4" stroke-dasharray="5 4">
    <path d="M478 150 L850 150"/>
    <path d="M478 100 L850 100"/>
  </g>
  <g stroke-width="1" opacity="0.5">
    <path d="M486 100 L486 150"/>
    <path d="M481 100 L491 100"/>
    <path d="M481 150 L491 150"/>
  </g>
  <g stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M570 200 L570 100 L682 100"/>
    <path d="M710 100 L742 100"/>
    <path d="M786 100 L812 100 L812 176 L640 176"/>
  </g>
  <g stroke-width="1.5">
    <circle cx="696" cy="100" r="14"/>
    <rect x="742" y="70" width="44" height="60"/>
  </g>
  <g fill="currentColor" stroke="none">
    <path d="M691 93 L691 107 L705 100 Z"/>
  </g>
  <g fill="currentColor" stroke="none" opacity="0.7">
    <circle cx="570" cy="190" r="3"/>
    <circle cx="570" cy="172" r="3"/>
    <circle cx="570" cy="154" r="3"/>
    <circle cx="570" cy="136" r="3"/>
    <circle cx="570" cy="118" r="3"/>
  </g>
`

/**
 * La cota de la bomba respecto al nivel del agua, en dos paneles.
 *
 * Izquierda, la bomba por debajo: trabaja en carga y ceba sola. Derecha, por
 * encima: hay una altura de aspiración que vencer, y el aire entra por ahí.
 */
export const COTA = `
<svg viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="30" y="278">La bomba por debajo del nivel del agua</text>
    <text x="470" y="278">La bomba por encima</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="298">Trabaja en carga. Ceba sola, no cavita y vuelve a</text>
    <text x="30" y="314">arrancar tras un corte sin que nadie baje a purgarla.</text>
    <text x="470" y="298">Hay que cebarla. Pierde el cebado, aspira aire,</text>
    <text x="470" y="314">cavita y se come el sello. Es la avería que vuelve.</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.55">
    <text x="56" y="150">carga</text>
    <text x="206" y="58">nivel del agua</text>
    <text x="496" y="120">aspiración</text>
    <text x="646" y="146">nivel del agua</text>
    <text x="586" y="230">aire</text>
  </g>
</svg>
`

/** Los mismos dos paneles, rotulados en inglés. */
export const COTA_EN = `
<svg viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="30" y="278">The pump below the water level</text>
    <text x="470" y="278">The pump above it</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="298">It runs flooded. Primes itself, does not cavitate, and</text>
    <text x="30" y="314">restarts after a power cut with nobody going down to it.</text>
    <text x="470" y="298">It has to be primed. It loses prime, draws air,</text>
    <text x="470" y="314">cavitates and chews the seal. The breakdown that recurs.</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.55">
    <text x="56" y="150">head</text>
    <text x="206" y="58">water level</text>
    <text x="496" y="120">suction lift</text>
    <text x="646" y="146">water level</text>
    <text x="586" y="230">air</text>
  </g>
</svg>
`
