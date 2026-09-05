/**
 * Diagramas de los dos artículos de humedad —filtraciones en cubierta y
 * humedad en muros—.
 *
 * Mismo lenguaje que los de fisuras y los de costos: dibujo de línea, sin
 * relleno y sin color propio —todo trazo en `currentColor`—, sin `width` ni
 * `height` en el elemento raíz para que escale con el contenedor y herede la
 * tinta del texto.
 *
 * Hay una razón de fondo para dibujar y no fotografiar. Una foto de una mancha
 * enseña una mancha, y las cinco humedades producen manchas parecidas: eso es
 * justamente el problema que estos dos artículos vienen a resolver. Lo que
 * distingue un origen de otro es **por dónde entra el agua**, y eso solo se ve
 * en sección.
 *
 * Ninguna figura está a escala ni representa una proporción medida.
 */

/**
 * Los cinco orígenes, en sección y uno al lado del otro.
 *
 * Es el mapa del artículo de muros y la razón de ser de los dos: casi toda
 * reparación de humedad falla porque se ataca la mancha sin haber decidido
 * cuál de estos cinco dibujos es el que corresponde.
 */
export const ORIGENES = `
<svg viewBox="0 0 900 258" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
  <g stroke-width="1" opacity="0.35">
    <rect x="15" y="20" width="150" height="150"/>
    <rect x="195" y="20" width="150" height="150"/>
    <rect x="375" y="20" width="150" height="150"/>
    <rect x="555" y="20" width="150" height="150"/>
    <rect x="735" y="20" width="150" height="150"/>
  </g>

  <g stroke-width="1.5" opacity="0.55">
    <path d="M70 30 L70 145"/>
    <path d="M110 30 L110 145"/>
    <path d="M250 30 L250 145"/>
    <path d="M290 30 L290 145"/>
    <path d="M430 30 L430 145"/>
    <path d="M470 30 L470 145"/>
    <path d="M610 30 L610 145"/>
    <path d="M650 30 L650 145"/>
    <path d="M790 30 L790 145"/>
    <path d="M830 30 L830 145"/>
  </g>

  <g stroke-width="1" opacity="0.4">
    <path d="M25 145 L155 145"/>
    <path d="M205 145 L335 145"/>
    <path d="M385 145 L515 145"/>
    <path d="M565 145 L695 145"/>
    <path d="M745 145 L875 145"/>
  </g>

  <g stroke-width="1" opacity="0.3">
    <path d="M30 158 L42 145"/>
    <path d="M52 158 L64 145"/>
    <path d="M74 158 L86 145"/>
    <path d="M96 158 L108 145"/>
    <path d="M118 158 L130 145"/>
    <path d="M140 158 L152 145"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M80 142 L80 100"/>
    <path d="M75 107 L80 99 L85 107"/>
    <path d="M100 142 L100 100"/>
    <path d="M95 107 L100 99 L105 107"/>
  </g>
  <g stroke-width="1.5" opacity="0.7" stroke-dasharray="5 4">
    <path d="M64 96 L116 96"/>
  </g>

  <g stroke-width="1.5" opacity="0.7" stroke-linecap="round">
    <path d="M212 44 L228 62"/>
    <path d="M226 38 L242 56"/>
    <path d="M240 50 L252 64"/>
  </g>
  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M238 78 L300 78"/>
    <path d="M293 73 L301 78 L293 83"/>
  </g>
  <g stroke-width="1.5" opacity="0.7" stroke-dasharray="5 4">
    <path d="M292 62 Q322 78 292 108"/>
  </g>

  <g stroke-width="1.5" opacity="0.7" stroke-linecap="round">
    <path d="M508 66 Q496 74 500 82 Q504 90 492 98"/>
    <path d="M508 104 Q496 112 500 120 Q504 128 492 136"/>
  </g>
  <g fill="currentColor" stroke="none" opacity="0.85">
    <circle cx="475" cy="62" r="2.5"/>
    <circle cx="475" cy="80" r="2.5"/>
    <circle cx="475" cy="98" r="2.5"/>
    <circle cx="475" cy="116" r="2.5"/>
    <circle cx="475" cy="134" r="2.5"/>
  </g>

  <g stroke-width="1.5" opacity="0.55" stroke-dasharray="4 4">
    <path d="M632 30 L632 145"/>
  </g>
  <g fill="currentColor" stroke="none" opacity="0.85">
    <circle cx="640" cy="56" r="2.5"/>
    <circle cx="640" cy="76" r="2.5"/>
    <circle cx="640" cy="96" r="2.5"/>
    <circle cx="640" cy="116" r="2.5"/>
  </g>
  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M676 88 L654 88"/>
    <path d="M661 83 L653 88 L661 93"/>
  </g>

  <g stroke-width="3" opacity="0.45" stroke-linecap="round">
    <path d="M810 34 L810 96"/>
  </g>
  <g stroke-width="1.5" opacity="0.8" stroke-linecap="round">
    <path d="M810 96 L804 104"/>
    <path d="M810 96 L816 104"/>
    <path d="M810 96 L810 106"/>
  </g>
  <g stroke-width="1.5" opacity="0.7" stroke-dasharray="5 4">
    <ellipse cx="810" cy="118" rx="19" ry="26"/>
  </g>

  <g fill="currentColor" stroke="none" font-size="13">
    <text x="15" y="196">Capilaridad</text>
    <text x="195" y="196">Filtración</text>
    <text x="375" y="196">Condensación</text>
    <text x="555" y="196">Intersticial</text>
    <text x="735" y="196">Fuga de red</text>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" opacity="0.6">
    <text x="15" y="214">Sube desde el suelo.</text>
    <text x="15" y="228">Franja horizontal con</text>
    <text x="15" y="242">borde superior nítido</text>

    <text x="195" y="214">Entra por la cara</text>
    <text x="195" y="228">exterior. Aparece y</text>
    <text x="195" y="242">se seca con la lluvia</text>

    <text x="375" y="214">Se forma en la cara</text>
    <text x="375" y="228">interior fría. Esquinas,</text>
    <text x="375" y="242">tras los muebles, moho</text>

    <text x="555" y="214">Se forma dentro del</text>
    <text x="555" y="228">muro. Sin mancha al</text>
    <text x="555" y="242">principio; moja el aislante</text>

    <text x="735" y="214">Sale de una tubería.</text>
    <text x="735" y="228">Mancha localizada,</text>
    <text x="735" y="242">húmeda todo el año</text>
  </g>
</svg>
`.trim()

/**
 * Los cinco puntos por donde falla una cubierta, en sección y en el orden en
 * que suelen fallar.
 *
 * El dibujo hace visible la tesis del artículo: ninguno de los cinco es un
 * problema del impermeabilizante. Cuatro son de diseño o de mantenimiento, y
 * la lámina solo entra en el quinto.
 */
export const CUBIERTA = `
<svg viewBox="0 0 900 336" xmlns="http://www.w3.org/2000/svg" fill="none"
     stroke="currentColor" font-family="inherit">
  <g stroke-width="1.5" opacity="0.55">
    <path d="M40 24 L40 128 L64 128"/>
    <path d="M64 24 L64 96"/>
    <path d="M36 24 L68 24"/>
  </g>

  <g stroke-width="1" opacity="0.45">
    <path d="M64 110 L250 122 L310 134 L370 128 L860 168"/>
    <path d="M64 128 L860 186"/>
  </g>

  <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50 44 L64 44 L64 106 L250 118 L310 130 L370 124 L860 164"/>
  </g>

  <g stroke-width="1.5" opacity="0.7" stroke-dasharray="5 4">
    <path d="M256 124 L352 124"/>
  </g>

  <g stroke-width="1" opacity="0.45">
    <path d="M556 152 L556 214"/>
    <path d="M584 154 L584 214"/>
    <path d="M540 150 L600 154"/>
  </g>
  <g stroke-width="1.5" opacity="0.8" stroke-linecap="round">
    <path d="M560 160 Q570 152 580 160"/>
    <path d="M562 172 Q572 164 582 172"/>
  </g>

  <g stroke-width="1.5" opacity="0.6" stroke-dasharray="4 4">
    <path d="M700 156 L700 180"/>
  </g>

  <g stroke-width="1.5" opacity="0.6">
    <path d="M800 106 L800 158"/>
    <path d="M782 158 L818 158"/>
  </g>

  <g stroke-width="1" opacity="0.75">
    <circle cx="52" cy="60" r="9"/>
    <circle cx="304" cy="104" r="9"/>
    <circle cx="570" cy="230" r="9"/>
    <circle cx="700" cy="196" r="9"/>
    <circle cx="800" cy="88" r="9"/>
  </g>
  <g fill="currentColor" stroke="none" font-size="11" text-anchor="middle">
    <text x="52" y="64">1</text>
    <text x="304" y="108">2</text>
    <text x="570" y="234">3</text>
    <text x="700" y="200">4</text>
    <text x="800" y="92">5</text>
  </g>

  <g stroke-width="1" opacity="0.35">
    <path d="M304 113 L304 122"/>
    <path d="M570 221 L570 214"/>
    <path d="M700 187 L700 180"/>
    <path d="M800 97 L800 106"/>
  </g>

  <g fill="currentColor" stroke="none" font-size="12">
    <text x="40" y="272">1 · Remate y encuentro con el muro</text>
    <text x="40" y="292">2 · Pendiente insuficiente y empozamiento</text>
    <text x="40" y="312">3 · Desagüe obstruido y sin rebosadero</text>
    <text x="470" y="272">4 · Junta de dilatación mal resuelta</text>
    <text x="470" y="292">5 · Perforación posterior sin sellar</text>
    <text x="470" y="312">— y en último lugar, la lámina</text>
  </g>
</svg>
`.trim()
