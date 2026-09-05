import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Categoria } from '@/lib/types'
import { creditosDiseno } from '@content/site'
import { formatCOP, unirNombres } from '@/lib/formato'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Origen de los medios. Sin barra final.
 *
 * Vacío en local: las imágenes salen de `public/media/`, que es instantáneo y no
 * toca la red. En producción apunta al bucket, porque `public/media/` está en
 * .gitignore y en Vercel no existe. Cambiar de uno a otro es una variable de
 * entorno, no un despliegue de código.
 *
 * Se escribe entera —`process.env.NOMBRE`— porque Next solo sustituye las
 * NEXT_PUBLIC_* por su valor cuando aparecen así; desestructurar `process.env`
 * las dejaría vacías en el navegador sin ningún error visible.
 */
const ORIGEN_MEDIA = (process.env.NEXT_PUBLIC_MEDIA_ORIGIN ?? '').replace(
  /\/+$/,
  '',
)

/**
 * Precio para mostrar, o `null` si el servicio es gratuito.
 *
 * Antes devolvía la cadena «Sin costo» y por tanto fijaba el español dentro de
 * una función que no puede alcanzar las traducciones. Ahora devuelve `null` y
 * quien pinta decide la palabra, que es quien sí tiene el `t`.
 *
 * Un servicio gratuito se anuncia como tal y nunca como «$ 0», que se lee a
 * medio camino entre un error y una promesa dudosa.
 */
export function precioTexto(idioma: string, cop: number): string | null {
  return cop <= 0 ? null : formatCOP(idioma, cop)
}

/** Ruta pública de una imagen del bucket `media`. */
export function mediaSrc(path: string): string {
  return ORIGEN_MEDIA ? `${ORIGEN_MEDIA}/${path}` : `/media/${path}`
}

/**
 * URL absoluta a partir de una ruta del sitio.
 *
 * Existe por los datos estructurados: schema.org exige URL absoluta en `image`,
 * y hasta ahora las 23 fichas de proyecto emitían una ruta relativa, con lo que
 * el campo era inválido. Los metadatos de Next no la necesitan —resuelve las
 * relativas contra `metadataBase`—, así que esto es solo para el JSON-LD.
 *
 * La guarda de `http` no es defensiva por si acaso: `mediaSrc()` devuelve una
 * URL absoluta del bucket en producción y una relativa en local, y esta función
 * tiene que dar lo correcto en los dos casos.
 */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.planobase.co')
    .replace(/\/+$/, '')
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * Enlace de WhatsApp con mensaje prellenado. El plan de campaña fija un SLA de
 * respuesta de 1 hora, así que este es el canal principal, no un extra.
 *
 * `origen` viaja dentro del propio texto porque WhatsApp no transporta nada más:
 * no hay UTMs, ni referer, ni cookie que sobreviva al salto a la aplicación. El
 * texto prellenado es literalmente el único canal por el que puede pasar de qué
 * página salió la conversación, y sin eso no hay forma de saber si el chat vino
 * de la barra fija, de una ficha de servicio o del pie.
 *
 * El costo es que la marca se ve: la persona la lee en su mensaje antes de
 * enviarlo. Se deja discreta y en una sola línea; quitarla es borrar el
 * argumento aquí.
 */
export function whatsappUrl(
  numero: string,
  mensaje: string,
  origen?: string,
): string {
  const texto = origen ? `${mensaje}\n\n· ${origen}` : mensaje
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
}

/**
 * Los nombres que se nombran, en el orden en que vienen. Los que no están en el
 * padrón no se listan: se resumen en «y otros».
 */
export function nombresDiseno(diseno: string[]): string[] {
  return diseno.flatMap((n) => {
    const publico = creditosDiseno[n]
    return publico ? [publico] : []
  })
}

/**
 * La línea de crédito de la ficha.
 *
 *   ['Eduardo Mejía', 'Gabriel Romero Villota']
 *     → "Arq. Eduardo Mejía Martínez y Gabriel Romero Villota"
 *   ['Eduardo Mejía', 'Carlos García']
 *     → "Arq. Eduardo Mejía Martínez y otros"
 *
 * El «y otros» no es un eufemismo: dice que hubo más manos sin nombrarlas, que
 * es exactamente la decisión del estudio.
 */
export function creditoDiseno(
  idioma: string,
  diseno: string[],
  /** «otros» / «others», traducido por quien llama. */
  otros: string,
): string | null {
  const nombres = nombresDiseno(diseno)
  const hayOtros = nombres.length < diseno.length

  if (nombres.length === 0) return diseno.length > 0 ? otros : null

  // La conjunción la pone `Intl.ListFormat`: «A, B y C» en español, «A, B and
  // C» en inglés. Antes iba escrita a mano y era una «y» fija.
  return unirNombres(idioma, hayOtros ? [...nombres, otros] : nombres)
}

/**
 * Etiqueta de naturaleza del proyecto.
 *
 * Presentar propuestas de concurso y obra construida sin distinguirlas es el
 * riesgo reputacional más alto del portafolio: se cae en la primera visita.
 *
 * La regla de qué es concurso vive en `scripts/prepare-media.ts` y queda
 * grabada en `categorias`, así que el filtro del grid y esta etiqueta no pueden
 * contradecirse. El volcado de Wix trae `construido` marcado en UN solo
 * proyecto de 24, y eso es un vacío del CMS y no la verdad, así que del resto
 * no se afirma nada hasta que el estudio lo confirme.
 */
export function esConcurso(p: { categorias: Categoria[] }): boolean {
  return p.categorias.includes('concursos')
}
