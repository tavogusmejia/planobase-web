/**
 * La maqueta de los correos del sitio.
 *
 * Un correo no es una página. Lo que aquí parece anticuado —tablas, estilos
 * dentro del atributo, anchos en píxeles— es lo único que se pinta igual en
 * Outlook de escritorio, que es el cliente de las entidades públicas y las
 * constructoras, o sea justo el comprador de mayor ticket del estudio. Nada de
 * hojas de estilo externas, nada de tipografías remotas, nada de flexbox.
 *
 * Se conservan del sitio las tres cosas que lo hacen reconocible: la paleta, el
 * aire y **el peso tipográfico 400 en todo**, incluidos los titulares. La
 * jerarquía se hace con tamaño y espacio, igual que en el sitio.
 *
 * Todo correo se envía en dos versiones, HTML y texto plano. No es cortesía: un
 * cliente que bloquea HTML sin alternativa muestra un correo vacío, y el filtro
 * de correo no deseado penaliza a quien manda solo HTML.
 */

const INK = '#23282c'
const INK_SOFT = '#5a5e61'
const MUTED = '#6a747a'
const LINE = '#c8c9ca'
const PAPER = '#ffffff'
const PAPER_2 = '#f8f8f8'
const SIGNAL = '#004e64'

const FUENTE =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

/**
 * Escapa texto antes de meterlo en el HTML.
 *
 * **No es opcional y no es teórico.** Por estos correos pasa el mensaje que
 * escribió el visitante, su nombre y su municipio. Sin esto, un mensaje con
 * `<` o con una etiqueta dentro rompe la maqueta en el mejor caso, y en el peor
 * inyecta marcado en la bandeja de quien lo recibe —que incluye la bandeja del
 * propio estudio, que es quien abre todos los leads.
 */
export function escaparHtml(texto: string): string {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Un salto de párrafo del visitante se respeta; uno de línea, también. */
function conSaltos(texto: string): string {
  return escaparHtml(texto).replace(/\r\n|\r|\n/g, '<br />')
}

export const bloque = {
  titular(texto: string): string {
    return (
      `<p style="margin:40px 0 12px;font-family:${FUENTE};font-size:13px;` +
      `font-weight:400;line-height:1.5;letter-spacing:0.08em;` +
      `text-transform:uppercase;color:${MUTED};">${escaparHtml(texto)}</p>`
    )
  },

  parrafo(texto: string): string {
    return (
      `<p style="margin:0 0 18px;font-family:${FUENTE};font-size:16px;` +
      `font-weight:400;line-height:1.7;color:${INK_SOFT};">${conSaltos(texto)}</p>`
    )
  },

  /** El saludo y la primera frase, un punto más grandes. */
  entrada(texto: string): string {
    return (
      `<p style="margin:0 0 20px;font-family:${FUENTE};font-size:19px;` +
      `font-weight:400;line-height:1.6;color:${INK};">${conSaltos(texto)}</p>`
    )
  },

  /**
   * Un dato con su rótulo. Se apilan sin tabla anidada a propósito: en móvil
   * una tabla de dos columnas con un mensaje largo dentro se desborda, y aquí
   * cabe un mensaje de cuatro mil caracteres.
   */
  campo(rotulo: string, valor: string): string {
    return (
      `<div style="margin:0 0 20px;">` +
      `<p style="margin:0 0 4px;font-family:${FUENTE};font-size:13px;` +
      `font-weight:400;line-height:1.5;color:${MUTED};">${escaparHtml(rotulo)}</p>` +
      `<p style="margin:0;font-family:${FUENTE};font-size:16px;font-weight:400;` +
      `line-height:1.7;color:${INK};">${conSaltos(valor)}</p>` +
      `</div>`
    )
  },

  lista(puntos: string[]): string {
    const filas = puntos
      .map(
        (p) =>
          `<li style="margin:0 0 10px;font-family:${FUENTE};font-size:16px;` +
          `font-weight:400;line-height:1.7;color:${INK_SOFT};">${conSaltos(p)}</li>`,
      )
      .join('')
    return `<ul style="margin:0 0 18px;padding-left:20px;">${filas}</ul>`
  },

  /**
   * El botón va como tabla de una celda: un `<a>` con relleno lo pinta bien
   * casi todo menos Outlook, que ignora el `padding` de un enlace en bloque.
   */
  boton(texto: string, url: string): string {
    return (
      `<table role="presentation" cellpadding="0" cellspacing="0" border="0" ` +
      `style="margin:8px 0 24px;"><tr><td bgcolor="${SIGNAL}" ` +
      `style="border-radius:0;"><a href="${escaparHtml(url)}" ` +
      `style="display:inline-block;padding:14px 26px;font-family:${FUENTE};` +
      `font-size:13px;font-weight:400;letter-spacing:0.08em;` +
      `text-transform:uppercase;color:${PAPER};text-decoration:none;">` +
      `${escaparHtml(texto)}</a></td></tr></table>`
    )
  },

  regla(): string {
    return (
      `<div style="margin:32px 0;border-top:1px solid ${LINE};` +
      `font-size:0;line-height:0;">&nbsp;</div>`
    )
  },

  /** Lo secundario: el aviso del adjunto, la nota de que se puede responder. */
  nota(texto: string): string {
    return (
      `<p style="margin:0 0 12px;font-family:${FUENTE};font-size:14px;` +
      `font-weight:400;line-height:1.6;color:${MUTED};">${conSaltos(texto)}</p>`
    )
  },
}

export type Pie = {
  firma: string
  responder: string
  direccion: string
  ciudad: string
  correo: string
  telefono: string
}

/**
 * Envuelve los bloques en el documento.
 *
 * `preheader` es la línea que la bandeja de entrada muestra junto al asunto.
 * Sin ella, el cliente de correo toma las primeras palabras del cuerpo, que
 * suelen ser el saludo: se desperdicia el único espacio de la lista donde se
 * puede decir algo. Va oculta con la combinación que funciona en la práctica
 * —altura cero, sin color y fuera de pantalla—, porque `display:none` a secas
 * lo ignoran varios clientes.
 */
export function maqueta({
  preheader,
  cuerpo,
  pie,
}: {
  preheader: string
  cuerpo: string
  pie: Pie
}): string {
  const pieHtml =
    `<p style="margin:0 0 6px;font-family:${FUENTE};font-size:14px;` +
    `font-weight:400;line-height:1.6;color:${INK};">${escaparHtml(pie.firma)}</p>` +
    `<p style="margin:0 0 6px;font-family:${FUENTE};font-size:13px;` +
    `font-weight:400;line-height:1.6;color:${MUTED};">` +
    `${escaparHtml(pie.direccion)} · ${escaparHtml(pie.ciudad)}<br />` +
    `${escaparHtml(pie.correo)} · ${escaparHtml(pie.telefono)}</p>` +
    `<p style="margin:12px 0 0;font-family:${FUENTE};font-size:13px;` +
    `font-weight:400;line-height:1.6;color:${MUTED};">` +
    `${escaparHtml(pie.responder)}</p>`

  return (
    `<!doctype html><html><head><meta charset="utf-8" />` +
    `<meta name="viewport" content="width=device-width, initial-scale=1" />` +
    `<meta name="color-scheme" content="light" />` +
    `<meta name="supported-color-schemes" content="light" />` +
    `</head>` +
    `<body style="margin:0;padding:0;background-color:${PAPER_2};">` +
    `<div style="display:none;max-height:0;overflow:hidden;opacity:0;` +
    `mso-hide:all;">${escaparHtml(preheader)}</div>` +
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" ` +
    `width="100%" style="background-color:${PAPER_2};">` +
    `<tr><td align="center" style="padding:32px 16px;">` +
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" ` +
    `width="560" style="width:100%;max-width:560px;background-color:${PAPER};">` +
    `<tr><td style="padding:40px 36px 36px;">${cuerpo}</td></tr>` +
    `<tr><td style="padding:0 36px 40px;border-top:1px solid ${LINE};` +
    `padding-top:28px;">${pieHtml}</td></tr>` +
    `</table></td></tr></table></body></html>`
  )
}

/**
 * La versión en texto plano.
 *
 * Se construye a partir de las mismas piezas que el HTML y no traduciendo el
 * HTML de vuelta: convertir marcado a texto siempre acaba dejando etiquetas
 * sueltas o comiéndose un enlace.
 */
export function textoPlano(lineas: (string | null)[], pie: Pie): string {
  return [
    ...lineas.filter((l): l is string => l !== null),
    '',
    '—',
    pie.firma,
    `${pie.direccion} · ${pie.ciudad}`,
    `${pie.correo} · ${pie.telefono}`,
    '',
    pie.responder,
  ].join('\n')
}
