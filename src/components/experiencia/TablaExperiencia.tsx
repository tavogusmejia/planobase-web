'use client'

import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { formatArea } from '@/lib/formato'
import { cn } from '@/lib/utils'
import type { Categoria } from '@/lib/types'

/**
 * Una fila de la tabla de experiencia.
 *
 * Llega **ya resuelta desde el servidor**: el título traducido, el área
 * formateada en el idioma de la página, la etiqueta de naturaleza traducida. Lo
 * único crudo que viaja es lo que hace falta para filtrar y para sumar —el año,
 * el sector, el metraje, si está construida—, porque esas son justamente las
 * operaciones que el filtro tiene que rehacer en el navegador.
 *
 * `areaM2` es `number | null` y no `number`. Un `?? 0` en el origen convertiría
 * seis proyectos sin dato en seis proyectos de cero metros, y el total —que es
 * la cifra que alguien va a copiar a un pliego— quedaría igual de falso pero
 * mucho menos visible.
 */
export type FilaExperiencia = {
  slug: string
  titulo: string
  cliente: string | null
  /**
   * Los programas del proyecto: qué es el edificio. Son varios y no uno
   * —el CEFE Tunal es cultural **e** institucional— y colapsarlos al primero
   * escondía el edificio a quien filtra por el otro, justo la búsqueda que
   * trae a alguien a esta página. Vacío si el proyecto no declara ninguno.
   */
  sectores: Categoria[]
  sectorNombre: string | null
  ciudad: string
  /** Ciudad y departamento, sin repetir Bogotá dos veces. */
  lugar: string
  anio: number
  /** Dato crudo para sumar. `null` es dato ausente, nunca cero. */
  areaM2: number | null
  /** Ya formateado. `null` cuando no hay dato: la celda no dice «0 m²». */
  area: string | null
  construido: boolean
  /** La etiqueta de `naturalezaDe()`, ya traducida. */
  naturaleza: string | null
  /** Construida **y además** nacida de un concurso. */
  deConcurso: boolean
  premiada: boolean
}

export type SectorLista = { id: Categoria; nombre: string }

/**
 * Los proyectos con sus cifras, filtrables por sector y por obra construida.
 *
 * Es el único componente de cliente de la página, y el filtro es la razón de
 * que lo sea. No está para poder esconder filas —veintidós caben de sobra en
 * una pantalla y media— sino porque **recalcula los totales**: quien evalúa a
 * un proponente no necesita la experiencia del estudio, necesita la de *un
 * sector*, construida, con su recuento y su metraje, que es el dato que va a
 * transcribir a un formulario. Eso una página estática no lo da.
 *
 * El estado inicial no filtra nada, así que el HTML servido trae todas las
 * filas y las cifras completas: sin JavaScript la página sigue diciendo la
 * verdad entera, solo que sin poder recortarla.
 */
export function TablaExperiencia({
  filas,
  sectores,
  locale,
}: {
  filas: FilaExperiencia[]
  sectores: SectorLista[]
  locale: string
}) {
  const t = useTranslations('experiencia')
  const tcat = useTranslations('categorias')

  const [sector, setSector] = useState<Categoria | null>(null)
  const [soloConstruidas, setSoloConstruidas] = useState(false)

  /* Dos pasos y no uno: los contadores de cada sector tienen que reflejar el
     interruptor de obra construida, o anunciarían once proyectos educativos y
     al pulsar aparecerían cuatro. */
  const base = useMemo(
    () => filas.filter((f) => !soloConstruidas || f.construido),
    [filas, soloConstruidas],
  )
  const visibles = useMemo(
    () => base.filter((f) => sector === null || f.sectores.includes(sector)),
    [base, sector],
  )

  /* Un proyecto cuenta en cada uno de sus programas, así que la suma de los
     sectores es mayor que el total. Es la misma aritmética del portafolio y de
     los dossieres, y por eso los tres dan el mismo número. */
  const cuenta = (c: Categoria | null) =>
    c === null ? base.length : base.filter((f) => f.sectores.includes(c)).length

  /* Todas las cifras salen de `visibles`. Ninguna está escrita a mano: cambiar
     el filtro cambia las seis, y publicar un proyecto nuevo también. */
  const cifras = useMemo(() => {
    const conArea = visibles.filter((f) => f.areaM2 !== null && f.areaM2 > 0)
    const anios = visibles.map((f) => f.anio)
    return {
      proyectos: visibles.length,
      construidas: visibles.filter((f) => f.construido).length,
      /* `formatArea` devuelve `null` en cero, así que un filtro donde ningún
         proyecto declara área no imprime «0 m²»: imprime que no hay dato. */
      area: formatArea(
        locale,
        conArea.reduce((suma, f) => suma + (f.areaM2 ?? 0), 0),
      ),
      conArea: conArea.length,
      ciudades: new Set(visibles.map((f) => f.ciudad)).size,
      premiadas: visibles.filter((f) => f.premiada).length,
      desde: anios.length > 0 ? Math.min(...anios) : null,
      hasta: anios.length > 0 ? Math.max(...anios) : null,
    }
  }, [visibles, locale])

  const columnas = [
    t('colProyecto'),
    t('colSector'),
    t('colLugar'),
    t('colAnio'),
    t('colArea'),
    t('colModalidad'),
  ]

  return (
    <div>
      {/* ---- Filtro ------------------------------------------------------ */}
      <div className="border-y border-line py-4">
        <ul
          aria-label={t('filtroEtiqueta')}
          className="flex items-baseline gap-x-6 gap-y-2 overflow-x-auto lg:flex-wrap"
        >
          {[null, ...sectores.map((s) => s.id)].map((c) => {
            const n = cuenta(c)
            const activo = sector === c
            const nombre =
              c === null
                ? tcat('todos')
                : (sectores.find((s) => s.id === c)?.nombre ?? c)
            return (
              <li key={c ?? 'todos'}>
                <button
                  type="button"
                  onClick={() => setSector(c)}
                  aria-pressed={activo}
                  disabled={n === 0 && !activo}
                  className={cn(
                    'text-small inline-flex items-baseline gap-2 whitespace-nowrap py-1 transition-colors',
                    activo
                      ? 'text-ink underline underline-offset-8'
                      : n === 0
                        ? 'text-line'
                        : 'text-muted hover:text-accent',
                  )}
                >
                  {nombre}
                  <span className="text-block tabular-nums">{n}</span>
                </button>
              </li>
            )
          })}
        </ul>

        <label className="text-small mt-4 flex w-fit items-center gap-3 text-muted">
          <input
            type="checkbox"
            checked={soloConstruidas}
            onChange={(e) => setSoloConstruidas(e.target.checked)}
            className="size-4 accent-[var(--color-accent)]"
          />
          {t('soloConstruidas')}
        </label>
      </div>

      {visibles.length === 0 ? (
        <p className="text-body mt-10 text-ink-soft">{t('sinResultados')}</p>
      ) : (
        <>
          {/* ---- Las cifras del conjunto que se está mirando -------------- */}
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 border-b border-line pb-10 sm:grid-cols-3 lg:grid-cols-6">
            <Cifra
              valor={String(cifras.proyectos)}
              etiqueta={t('cifraProyectos', { count: cifras.proyectos })}
            />
            <Cifra
              valor={cifras.area}
              etiqueta={
                cifras.area
                  ? t('cifraArea', { count: cifras.conArea })
                  : t('sinArea')
              }
            />
            <Cifra
              valor={String(cifras.construidas)}
              etiqueta={t('cifraConstruidas', { count: cifras.construidas })}
            />
            <Cifra
              valor={String(cifras.ciudades)}
              etiqueta={t('cifraCiudades', { count: cifras.ciudades })}
            />
            <Cifra
              valor={String(cifras.premiadas)}
              etiqueta={t('cifraPremiadas', { count: cifras.premiadas })}
            />
            <Cifra
              valor={
                cifras.desde !== null && cifras.hasta !== null
                  ? cifras.desde === cifras.hasta
                    ? String(cifras.desde)
                    : `${cifras.desde}–${cifras.hasta}`
                  : null
              }
              etiqueta={t('cifraAnios')}
            />
          </dl>

          {/* ---- La tabla ------------------------------------------------
              Scrollea dentro de su contenedor: seis columnas no caben en un
              teléfono y el cuerpo de la página no puede desplazarse en
              horizontal. */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[52rem] border-collapse text-left">
              <caption className="sr-only">{t('tablaDescripcion')}</caption>
              <thead>
                <tr>
                  {columnas.map((c, i) => (
                    <th
                      key={c}
                      scope="col"
                      className={cn(
                        'text-block border-b border-ink py-3 pr-6 align-bottom font-normal text-muted',
                        (i === 3 || i === 4) && 'text-right',
                      )}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibles.map((f) => (
                  <tr key={f.slug}>
                    <th
                      scope="row"
                      className="text-small border-b border-line py-4 pr-6 align-top font-normal text-ink"
                    >
                      <Link href={`/proyectos/${f.slug}`} className="enlace">
                        {f.titulo}
                      </Link>
                      {f.cliente ? (
                        <span className="text-block mt-1 block text-muted">
                          {t('cliente')} · {f.cliente}
                        </span>
                      ) : null}
                    </th>
                    <td className="text-small border-b border-line py-4 pr-6 align-top text-ink-soft">
                      {f.sectorNombre ?? <SinDato texto={t('sinSector')} />}
                    </td>
                    <td className="text-small border-b border-line py-4 pr-6 align-top text-ink-soft">
                      {f.lugar}
                    </td>
                    <td className="text-small border-b border-line py-4 pr-6 text-right align-top tabular-nums text-ink-soft">
                      {f.anio}
                    </td>
                    <td className="text-small border-b border-line py-4 pr-6 text-right align-top tabular-nums text-ink-soft">
                      {f.area ?? <SinDato texto={t('sinArea')} />}
                    </td>
                    <td className="text-small border-b border-line py-4 align-top text-ink-soft">
                      {f.naturaleza}
                      {f.deConcurso ? (
                        <span className="text-block mt-1 block text-muted">
                          {t('deConcurso')}
                        </span>
                      ) : null}
                      {f.premiada ? (
                        <span className="text-block mt-1 block text-accent">
                          {t('conReconocimiento')}
                        </span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

/**
 * Una cifra con su rótulo. El valor va grande y el rótulo debajo, que es el
 * orden en que se escanea.
 *
 * Un valor ausente se pinta como raya y no como cero: la diferencia entre «no
 * hay dato» y «vale cero» es la única que esta página no se puede permitir
 * borrar.
 */
function Cifra({ valor, etiqueta }: { valor: string | null; etiqueta: string }) {
  return (
    <div>
      <dt className="text-h3 tabular-nums text-accent">
        {valor ?? <span aria-hidden>—</span>}
      </dt>
      <dd className="text-block mt-2 text-muted">{etiqueta}</dd>
    </div>
  )
}

/** La raya de dato ausente, con su explicación para quien no ve la raya. */
function SinDato({ texto }: { texto: string }) {
  return (
    <>
      <span aria-hidden>—</span>
      <span className="sr-only">{texto}</span>
    </>
  )
}
