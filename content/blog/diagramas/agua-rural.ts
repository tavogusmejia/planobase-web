/**
 * Diagramas del artículo de agua en suelo rural.
 *
 * Mismo lenguaje que los de fisuras y costos: dibujo de línea, sin relleno y
 * sin color propio —todo trazo en `currentColor`—, sin `width` ni `height` en
 * el elemento raíz para que escale con el contenedor y herede la tinta del
 * texto.
 *
 * La figura es una **sección**, no un esquema de flujo, y eso es deliberado:
 * las cuatro procedencias del agua de una casa en el campo se distinguen
 * físicamente por su cota —una llega por tubería, otra se toma de la
 * superficie, otra viene de debajo del nivel freático y la cuarta cae del
 * cielo—, y esa diferencia de cota es exactamente la que decide qué permiso
 * pide cada una. Dibujarlas todas sobre una misma línea de terreno hace visible
 * el argumento del artículo sin una sola flecha.
 *
 * **El diagrama no está a escala** y no lo pretende: la profundidad de un pozo
 * depende de dónde hay agua en ese predio, que es justo el dato que ningún
 * artículo puede dar.
 *
 * Hay dos versiones porque el sitio es bilingüe y
 * `scripts/check-traducciones.ts` rechaza —con razón— un diagrama rotulado cuyo
 * SVG inglés sea idéntico al español. Se escriben juntas, en el mismo archivo,
 * para que no puedan divergir en el dibujo mientras divergen en el rótulo.
 */

/** Geometría común a las dos versiones. Solo cambian los `<text>`. */
const DIBUJO = `
  <g stroke-width="1.5" opacity="0.55">
    <path d="M30 150 L870 150"/>
  </g>

  <g stroke-width="1" opacity="0.3">
    <path d="M40 168 L52 156"/>
    <path d="M70 168 L82 156"/>
    <path d="M100 168 L112 156"/>
    <path d="M130 168 L142 156"/>
    <path d="M160 168 L172 156"/>
    <path d="M480 262 L492 250"/>
    <path d="M510 262 L522 250"/>
    <path d="M540 262 L552 250"/>
    <path d="M600 262 L612 250"/>
    <path d="M630 262 L642 250"/>
    <path d="M700 168 L712 156"/>
    <path d="M730 168 L742 156"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M30 196 L170 196"/>
    <path d="M170 196 L170 128"/>
    <path d="M170 128 L196 128"/>
    <path d="M196 128 L196 138"/>
  </g>
  <g stroke-width="1.5">
    <rect x="112" y="182" width="28" height="28"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M250 150 L306 150 L330 186 L378 186 L402 150 L440 150"/>
  </g>
  <g stroke-width="1" opacity="0.45">
    <path d="M312 172 L398 172" stroke-dasharray="5 5"/>
  </g>
  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M356 180 L356 132 L418 132"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M556 150 L556 258"/>
    <path d="M574 150 L574 258"/>
    <path d="M556 132 L520 132"/>
  </g>
  <g stroke-width="1" opacity="0.45">
    <path d="M470 226 L660 226" stroke-dasharray="5 5"/>
  </g>

  <g stroke-width="1" opacity="0.45">
    <path d="M708 60 L700 84"/>
    <path d="M744 54 L736 78"/>
    <path d="M780 60 L772 84"/>
    <path d="M816 54 L808 78"/>
    <path d="M852 60 L844 84"/>
  </g>
  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M716 128 L782 96 L848 128"/>
    <path d="M848 128 L848 112"/>
    <path d="M716 128 L716 112"/>
    <path d="M846 128 L846 146"/>
    <rect x="806" y="146" width="52" height="42"/>
  </g>
  <g stroke-width="1" opacity="0.45">
    <path d="M812 158 L852 158" stroke-dasharray="5 5"/>
  </g>
`

/**
 * Las cuatro procedencias del agua de una casa en el campo, en sección, con el
 * permiso que pide cada una.
 *
 * Es la figura que sostiene el artículo entero: la pregunta no es de dónde sale
 * el agua sino qué autoriza cada procedencia, y las cuatro respuestas son
 * distintas.
 */
export const PROCEDENCIAS = `
<svg viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="30" y="296">Acueducto veredal</text>
    <text x="250" y="296">Captación superficial</text>
    <text x="470" y="296">Pozo o aljibe</text>
    <text x="690" y="296">Agua lluvia</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="316">Certificado del prestador.</text>
    <text x="30" y="332">Él tiene la concesión, usted no.</text>
    <text x="250" y="316">Concesión de aguas de la</text>
    <text x="250" y="332">corporación autónoma regional.</text>
    <text x="470" y="316">Permiso de exploración antes</text>
    <text x="470" y="332">de perforar. Después, concesión.</text>
    <text x="690" y="316">Libre mientras el agua no</text>
    <text x="690" y="332">salga del predio.</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.45">
    <text x="470" y="244">nivel freático</text>
    <text x="30" y="228">terreno</text>
  </g>
</svg>
`

/** La misma sección, rotulada en inglés. */
export const PROCEDENCIAS_EN = `
<svg viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
${DIBUJO}
  <g fill="currentColor" stroke="none" font-size="13">
    <text x="30" y="296">Village water system</text>
    <text x="250" y="296">Surface intake</text>
    <text x="470" y="296">Borehole or shallow well</text>
    <text x="690" y="296">Rainwater</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="30" y="316">A certificate from the operator.</text>
    <text x="30" y="332">It holds the grant, not you.</text>
    <text x="250" y="316">A water concession from the</text>
    <text x="250" y="332">regional environmental authority.</text>
    <text x="470" y="316">An exploration permit before</text>
    <text x="470" y="332">drilling. Then the concession.</text>
    <text x="690" y="316">Free while the water never</text>
    <text x="690" y="332">leaves your own land.</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.45">
    <text x="470" y="244">water table</text>
    <text x="30" y="228">ground</text>
  </g>
</svg>
`
