import type { TeamMember } from '@/lib/types'
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
import * as ingles from '@content/en/site'

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

// ── Completitud, ruta por ruta ─────────────────────────────────────────────

/**
 * Qué tiene que estar traducido para que una ruta se considere lista.
 *
 * Se declara por ruta y a mano, y eso es deliberado: la alternativa —deducirlo—
 * daría por traducida una página en cuanto tuviera su titular, sin mirar el
 * contenido que de verdad la llena. Cada entrada dice qué se lee en esa página.
 */
const COMPLETITUD: Record<RutaConCopia, () => boolean> = {
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

/** ¿Esta página está traducida entera a este idioma? */
export function paginaTraducida(ruta: string, idioma: string): boolean {
  if (ES_ESPANOL(idioma)) return true
  if (!tieneCopia(ruta)) return false
  return copiaCompleta(ruta) && COMPLETITUD[ruta]()
}
