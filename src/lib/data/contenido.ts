import type { Service, TeamMember } from '@/lib/types'
import { fusionar, oCae } from '@/lib/i18n/fusionar'
import {
  copiaPaginas,
  tieneCopia,
  type CopiaDe,
  type RutaConCopia,
} from '@content/paginas'
import { copiaPaginasEn } from '@content/en/paginas'
import {
  equipo,
  manifiesto,
  sobreElEquipo,
  vision,
  type TemaVision,
} from '@content/site'
import { escalera, puertas, type Peldano, type Puerta } from '@content/puertas'
import { asesoria } from '@content/site'
import { verticales, type Vertical } from '@content/verticales'
import { pilares, type Pilar } from '@content/pilares'
import { politicaDatos, type Politica } from '@content/legal'
import { politicaDatosEn } from '@content/en/legal'
import * as ingles from '@content/en/site'
import * as inglesPuertas from '@content/en/puertas'
import { proyectos as inglesProyectos } from '@content/en/proyectos'
import { verticales as inglesVerticales } from '@content/en/verticales'
import { pilares as inglesPilares } from '@content/en/pilares'

/**
 * El contenido corto del sitio, en el idioma que se pida.
 *
 * Mismo trato que el blog: el español es la fuente y el inglés se superpone por
 * la llave estable que ya existe —la ruta de una página, el `proyectoSlug` de un
 * tema de visión, el `slug` de una persona—. Lo que falte cae al español y
 * nunca lanza.
 *
 * Lo que este archivo añade sobre el resolutor del blog es la **completitud**:
 * una página no se indexa en inglés porque tenga algo traducido, sino cuando lo
 * está entera. Media página traducida indexada como inglesa es peor que ninguna.
 */

const ES_ESPANOL = (idioma: string) => idioma !== 'en'

// ── Copia de página ────────────────────────────────────────────────────────

export function copiaDe<R extends RutaConCopia>(
  ruta: R,
  idioma: string,
): CopiaDe<R> {
  const base = copiaPaginas[ruta] as CopiaDe<R>
  if (ES_ESPANOL(idioma)) return base
  return fusionar(base, copiaPaginasEn[ruta] as Partial<CopiaDe<R>> | undefined)
}

/** Todas las claves de la copia, traducidas y no vacías. */
function copiaCompleta(ruta: RutaConCopia): boolean {
  const base = copiaPaginas[ruta] as Record<string, string>
  const t = copiaPaginasEn[ruta] as Record<string, string> | undefined
  if (!t) return false
  return Object.keys(base).every((k) => (t[k] ?? '').trim() !== '')
}

// ── Datos de `content/site.ts` ─────────────────────────────────────────────

export function manifiestoDe(idioma: string): string {
  return ES_ESPANOL(idioma) ? manifiesto : oCae(ingles.manifiesto, manifiesto)
}

export function sobreElEquipoDe(idioma: string): string {
  return ES_ESPANOL(idioma)
    ? sobreElEquipo
    : oCae(ingles.sobreElEquipo, sobreElEquipo)
}

export function visionDe(idioma: string): TemaVision[] {
  if (ES_ESPANOL(idioma)) return vision
  // El nombre del proyecto no se traduce: es un nombre propio.
  return vision.map((t) => fusionar<TemaVision>(t, ingles.vision[t.proyectoSlug]))
}

export function equipoDe(idioma: string): TeamMember[] {
  if (ES_ESPANOL(idioma)) return equipo
  return equipo.map((m) => fusionar(m, { cargo: ingles.cargos[m.slug] }))
}

export function asesoriaDe(idioma: string): Service {
  return ES_ESPANOL(idioma) ? asesoria : fusionar<Service>(asesoria, ingles.asesoria)
}

export function puertasDe(idioma: string): Puerta[] {
  if (ES_ESPANOL(idioma)) return puertas
  return puertas.map((p) => fusionar<Puerta>(p, inglesPuertas.puertas[p.slug]))
}

export function puertaDe(idioma: string, slug: string): Puerta | null {
  return puertasDe(idioma).find((p) => p.slug === slug) ?? null
}

export function escaleraDe(idioma: string): Peldano[] {
  if (ES_ESPANOL(idioma)) return escalera
  return escalera.map((p) => fusionar<Peldano>(p, inglesPuertas.escalera[p.n]))
}

/** Una puerta está lista cuando sus cuatro campos de texto están traducidos. */
function puertaCompleta(slug: string): boolean {
  const t = inglesPuertas.puertas[slug]
  return Boolean(t?.pregunta && t.nombre && t.respuesta && t.para)
}

export function puertaTraducida(slug: string, idioma: string): boolean {
  return ES_ESPANOL(idioma) ? true : puertaCompleta(slug)
}

/**
 * Un proyecto está listo cuando su memoria está traducida.
 *
 * El título no cuenta: es un nombre propio y no se traduce. El subtítulo
 * tampoco es condición —hay proyectos que no tienen—. La memoria es lo que se
 * lee, y es lo único que puede quedar en español bajo una URL inglesa.
 */
export function proyectoTraducido(slug: string, idioma: string): boolean {
  if (ES_ESPANOL(idioma)) return true
  return Boolean(inglesProyectos[slug]?.memoria)
}

// ── Verticales del portafolio y temas del blog ─────────────────────────────

export function verticalesDe(idioma: string): Vertical[] {
  if (ES_ESPANOL(idioma)) return verticales
  return verticales.map((v) =>
    fusionar<Vertical>(v, inglesVerticales[v.categoria]),
  )
}

export function verticalDe(idioma: string, categoria: string): Vertical | null {
  return verticalesDe(idioma).find((v) => v.categoria === categoria) ?? null
}

/** Se lee el titular, la entrada y los dos metadatos: los cuatro o ninguno. */
export function verticalTraducida(categoria: string, idioma: string): boolean {
  if (ES_ESPANOL(idioma)) return true
  const t = inglesVerticales[categoria]
  return Boolean(t?.titulo && t.entrada && t.metaTitulo && t.metaDescripcion)
}

export function pilaresDe(idioma: string): Pilar[] {
  if (ES_ESPANOL(idioma)) return pilares
  return pilares.map((p) => fusionar<Pilar>(p, inglesPilares[p.id]))
}

export function pilarDe(idioma: string, slug: string): Pilar | null {
  return pilaresDe(idioma).find((p) => p.slug === slug) ?? null
}

export function temaTraducido(slug: string, idioma: string): boolean {
  if (ES_ESPANOL(idioma)) return true
  const p = pilares.find((x) => x.slug === slug)
  const t = p ? inglesPilares[p.id] : undefined
  return Boolean(
    t?.nombre && t.titulo && t.entrada && t.metaTitulo && t.metaDescripcion,
  )
}

// ── Completitud, ruta por ruta ─────────────────────────────────────────────

/**
 * Qué tiene que estar traducido para que una ruta se considere lista.
 *
 * Se declara por ruta y a mano, y eso es deliberado: la alternativa —deducirlo—
 * daría por traducida una página en cuanto tuviera su titular, sin mirar el
 * contenido que de verdad la llena. Cada entrada dice qué se lee en esa página.
 */
const COMPLETITUD: Record<RutaConCopia, () => boolean> = {
  /* El índice del blog pinta los diez temas; el de APBS, la ficha de cada
     herramienta disponible. */
  '/blog': () => pilares.every((p) => temaTraducido(p.slug, 'en')),
  '/apbs': () => false,

  /* La portada pinta el manifiesto, las siete puertas y la asesoría. Las
     tarjetas de proyecto no cuentan: solo muestran título, año y ciudad, que
     son nombres propios y no se traducen. */
  '': () =>
    Boolean(ingles.manifiesto) &&
    Boolean(ingles.asesoria.descripcion) &&
    puertas.every((p) => puertaCompleta(p.slug)),

  /* Estas dos se llenan con su propia copia y con `asesoria` de site.ts, que
     es el mismo producto en los dos idiomas salvo su descripción. */
  '/contacto': () => Boolean(ingles.asesoria.descripcion),
  '/agendar': () => Boolean(ingles.asesoria.descripcion),

  /* Las siete puertas y los seis peldaños: la página de servicios los pinta
     todos, así que traducir seis de siete la deja a medias. */
  '/servicios': () =>
    puertas.every((p) => puertaCompleta(p.slug)) &&
    escalera.every((p) => {
      const t = inglesPuertas.escalera[p.n]
      return Boolean(t?.nombre && t.entrega)
    }),

  /* La política se da por traducida cuando la versión inglesa tiene las
     mismas secciones que la española, en el mismo orden y con todas con
     contenido. No basta con que exista el archivo: una política a medias
     indexada como inglesa es peor que servir la española. */
  '/politica-de-datos': () =>
    politicaDatosEn.secciones.length === politicaDatos.secciones.length &&
    politicaDatos.secciones.every(
      (s, i) =>
        politicaDatosEn.secciones[i]?.id === s.id &&
        (politicaDatosEn.secciones[i]?.titulo ?? '').trim() !== '' &&
        (politicaDatosEn.secciones[i]?.bloques.length ?? 0) === s.bloques.length,
    ),

  // Solo se consulta para el inglés: el español es la fuente y siempre está.
  '/estudio': () =>
    oCae(ingles.manifiesto, '') !== '' &&
    oCae(ingles.sobreElEquipo, '') !== '' &&
    vision.every((t) => {
      const t2 = ingles.vision[t.proyectoSlug]
      return Boolean(t2?.titulo && t2.texto && t2.cita)
    }) &&
    equipo.every((m) => (ingles.cargos[m.slug]?.length ?? 0) > 0),
}

/**
 * La política de datos, en el idioma que se pida.
 *
 * Se devuelve entera y no fundida clave a clave, al revés que el resto del
 * contenido. Un documento legal no admite mezcla: media política en español y
 * media en inglés no es una traducción incompleta, es un texto que dice cosas
 * distintas de las que dice el que obliga. O está la versión inglesa completa o
 * se sirve la española.
 */
export function politicaDe(idioma: string): Politica {
  return ES_ESPANOL(idioma) ? politicaDatos : politicaDatosEn
}

/** ¿Esta página está traducida entera a este idioma? */
export function paginaTraducida(ruta: string, idioma: string): boolean {
  if (ES_ESPANOL(idioma)) return true
  if (!tieneCopia(ruta)) return false
  return copiaCompleta(ruta) && COMPLETITUD[ruta]()
}
