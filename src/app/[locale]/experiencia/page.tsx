import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import {
  TablaExperiencia,
  type FilaExperiencia,
  type SectorLista,
} from '@/components/experiencia/TablaExperiencia'
import { getCategoryCounts, getProjects } from '@/lib/data/projects'
import { copiaDe } from '@/lib/data/contenido'
import { CATEGORIAS, CATEGORIAS_PROGRAMA } from '@/lib/types'
import { esConcurso, naturalezaDe } from '@/lib/utils'
import { formatArea } from '@/lib/formato'
import { lugar } from '@/lib/lugar'
import { alternativas, tarjeta } from '@/lib/metadatos'
import { reconocimientos } from '@content/site'
import { routing } from '@/i18n/routing'

/**
 * Credenciales institucionales. Ficha P2 de `docs/PLAN-BLOG.md`.
 *
 * El blog no captura al comprador institucional: ese no llega por Google sino
 * por SECOP, y cuando llega no lee prosa, escanea cifras. Lo que necesita para
 * evaluar a un proponente —área, año, ciudad, modalidad, si se construyó, y los
 * reconocimientos con su puesto y su ámbito— existía repartido entre veintidós
 * fichas de proyecto, que es como no existir: nadie abre veintidós páginas para
 * sumar metros cuadrados.
 *
 * **La ruta es `/experiencia` y no `/credenciales`.** «Experiencia» es la
 * palabra del oficio —«experiencia acreditada del proponente» es literalmente
 * lo que pide un pliego colombiano, y el dossier del sitio ya se titula
 * «Dossier de experiencia»—, mientras que «credenciales» es como lo llamamos
 * nosotros por dentro. La URL usa la palabra de quien busca.
 *
 * **Ninguna cifra de esta página está escrita a mano.** Todas se derivan de
 * `getProjects()`, que filtra por `publicado`, así que los dos proyectos que no
 * salen —el comedor de Univalle, sin imágenes, y la Alcaldía Local de
 * Teusaquillo, retirada el 6/9/2026— quedan fuera del listado *y* de los
 * totales por la misma operación, y seguirán fuera mañana sin que nadie tenga
 * que acordarse.
 *
 * Deliberadamente sin una sola fotografía. Las fotos están en `/proyectos` y
 * cumplen otra función; aquí compiten con la única cosa que esta página tiene
 * que hacer, que es dejar leer una tabla.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const copia = copiaDe('/experiencia', locale)
  return {
    title: copia.titulo,
    description: copia.metaDescripcion,
    /* Canonical autorreferenciado, hreflang solo de lo traducido y el `robots`
       de esta ruta, los tres del mismo sitio. Va donde estaba `alternates`
       porque después solo vienen claves distintas: si alguien añade luego un
       `alternates` o un `robots` propio, este se pierde en silencio. */
    ...alternativas({ locale, entidad: { tipo: 'pagina', ruta: '/experiencia' } }),
    openGraph: tarjeta({
      locale,
      ruta: `/${locale}/experiencia`,
      titulo: copia.tarjetaTitulo,
      descripcion: copia.metaDescripcion,
    }),
  }
}

export default async function ExperienciaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const copia = copiaDe('/experiencia', locale)
  const t = await getTranslations('experiencia')
  const tp = await getTranslations('proyecto')
  const tcom = await getTranslations('comun')
  const tcat = await getTranslations('categorias')
  const th = await getTranslations('home')
  const tc = await getTranslations('cta')

  /* La única fuente del listado. `getProjects` ya filtra por `publicado` y
     traduce, así que el recuento de esta página y el del portafolio no pueden
     divergir. */
  const proyectos = await getProjects(locale)

  /* Los reconocimientos que apuntan a obra publicada, más los que no apuntan a
     ningún proyecto —que también son ciertos—. El filtro no sobra hoy, que los
     cuatro son de proyectos publicados: existe para que retirar un proyecto
     retire también su premio de esta página, que es exactamente lo que pasó el
     6/9/2026 y hubo que hacer a mano en `content/site.ts`. */
  const publicados = new Set(proyectos.map((p) => p.slug))
  const premios = reconocimientos.filter(
    (r) => r.proyectoSlug === null || publicados.has(r.proyectoSlug),
  )
  const premiadas = new Set(
    premios.flatMap((r) => (r.proyectoSlug ? [r.proyectoSlug] : [])),
  )

  /* Año descendente, y el desempate por título en el idioma de la página.
     No se ordena por `destacado` como el portafolio: eso es una decisión
     editorial de escaparate y aquí sobra. Quien evalúa mira primero lo
     reciente, porque casi todo pliego acota la experiencia a los últimos
     años. */
  const filas: FilaExperiencia[] = [...proyectos]
    .sort((a, b) => b.anio - a.anio || a.titulo.localeCompare(b.titulo, locale))
    .map((p) => {
      /* La etiqueta de modalidad sale de `naturalezaDe()`, que es la misma que
         pinta la ficha de proyecto. Dos reglas distintas para la misma cosa
         acabarían contradiciéndose en la página que menos se lo puede
         permitir. */
      const clase = naturalezaDe(p)
      /* Todos sus programas, no el primero: un proyecto que es cultural e
         institucional tiene que aparecer bajo los dos filtros, o la página
         esconde experiencia justo a quien vino a contarla. `concursos` queda
         fuera porque no es un programa sino una naturaleza, y ya se dice en la
         columna de modalidad. */
      const sectores = CATEGORIAS_PROGRAMA.filter((c) =>
        p.categorias.includes(c),
      )
      return {
        slug: p.slug,
        titulo: p.titulo,
        cliente: p.cliente,
        sectores,
        sectorNombre:
          sectores.length > 0 ? sectores.map((c) => tcat(c)).join(' · ') : null,
        ciudad: p.ciudad,
        lugar: lugar(p.ciudad, p.departamento),
        anio: p.anio,
        areaM2: p.areaM2,
        area: formatArea(locale, p.areaM2),
        construido: p.construido === true,
        naturaleza: clase ? tp(clase) : null,
        /* Una obra construida que nació de un concurso se anuncia como
           construida —lo decide `naturalezaDe()`— y no pierde de dónde viene:
           es la credencial más fuerte que hay y se dice entera. */
        deConcurso: p.construido === true && esConcurso(p),
        premiada: premiadas.has(p.slug),
      }
    })

  const sectores: SectorLista[] = CATEGORIAS_PROGRAMA.filter((c) =>
    filas.some((f) => f.sectores.includes(c)),
  ).map((c) => ({ id: c, nombre: tcat(c) }))

  /* Los dossieres imprimibles, solo en español: la ruta `/dossier/[categoria]`
     se genera únicamente en el idioma editorial —es un documento para adjuntar
     a un pliego colombiano— y enlazarla desde el inglés llevaría a un 404. Sus
     rótulos sí están traducidos en `content/en/paginas.ts`, para el día que el
     documento exista en los dos idiomas. */
  const counts = await getCategoryCounts()
  const conDossier =
    locale === routing.defaultLocale
      ? CATEGORIAS.filter((c) => (counts[c] ?? 0) > 0)
      : []

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <h1 className="text-h1 measure-display text-ink">{copia.titular}</h1>
      <p className="text-lead measure mt-8 text-ink-soft">{copia.entrada}</p>

      {/* ---- El listado, con sus cifras --------------------------------- */}
      <section className="mt-20">
        <h2 className="text-h3 text-ink">{copia.tablaTitular}</h2>

        <div className="mt-8">
          <TablaExperiencia filas={filas} sectores={sectores} locale={locale} />
        </div>

        <div className="text-block measure-ancho mt-8 space-y-3 text-muted">
          <p>{copia.notaArea}</p>
          <p>{copia.notaModalidad}</p>
        </div>
      </section>

      {/* ---- Reconocimientos, con puesto y ámbito ------------------------
          Es lo primero que verifica un evaluador y lo que más pesa. El ámbito
          va al lado del puesto y no escondido: tres públicos y uno privado es
          una credencial más creíble que cuatro a secas. */}
      {premios.length > 0 ? (
        <section className="mt-28">
          <h2 className="text-h3 text-ink">{copia.reconocimientosTitular}</h2>
          <ol className="mt-8 border-t border-line lg:max-w-4xl">
            {[...premios]
              .sort((a, b) => b.anio - a.anio)
              .map((r) => (
                <li
                  key={`${r.anio}-${r.titulo}`}
                  className="grid gap-2 border-b border-line py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
                >
                  <span className="text-h4 tabular-nums text-accent">
                    {r.anio}
                  </span>
                  <div>
                    <p className="text-h5 text-ink">
                      {r.puesto === 'primer'
                        ? tcom('primerPuesto')
                        : tcom('segundoPuesto')}
                      <span className="text-block ml-3 text-muted">
                        {r.ambito === 'publico'
                          ? t('ambitoPublico')
                          : t('ambitoPrivado')}
                      </span>
                    </p>
                    {r.proyectoSlug ? (
                      <Link
                        href={`/proyectos/${r.proyectoSlug}`}
                        className="text-small mt-1 inline-block text-ink-soft underline-offset-4 hover:text-accent hover:underline"
                      >
                        {r.titulo}
                      </Link>
                    ) : (
                      <p className="text-small mt-1 text-ink-soft">{r.titulo}</p>
                    )}
                  </div>
                </li>
              ))}
          </ol>
        </section>
      ) : null}

      {/* ---- El documento para adjuntar --------------------------------- */}
      {conDossier.length > 0 ? (
        <section className="mt-28 border-t border-line pt-12 lg:grid lg:grid-cols-2 lg:gap-16">
          <h2 className="text-h2 measure-display text-ink">
            {copia.dossierTitular}
          </h2>
          <div className="mt-8 lg:mt-0">
            <p className="text-body text-ink-soft">{copia.dossierTexto}</p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {conDossier.map((c) => (
                <li key={c}>
                  <Link
                    href={`/dossier/${c}`}
                    className="text-small inline-flex items-baseline gap-2 text-muted underline-offset-4 hover:text-accent hover:underline"
                  >
                    {tcat(c)}
                    <span className="text-block tabular-nums">
                      {counts[c] ?? 0}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ---- Cierre ------------------------------------------------------ */}
      <section className="mt-28 border-t border-line pt-12 lg:grid lg:grid-cols-2 lg:gap-16">
        <h2 className="text-h2 measure-display text-ink">
          {th('cierreTitulo')}
        </h2>
        <div className="mt-8 lg:mt-0">
          <p className="text-lead text-ink-soft">{th('cierreSub')}</p>
          <div className="mt-8 flex flex-wrap gap-8">
            <Link
              href="/proyectos"
              className="text-h5 text-accent underline-offset-8 hover:underline"
            >
              {tc('verPortafolio')}
            </Link>
            <Link
              href="/contacto"
              className="text-h5 text-accent underline-offset-8 hover:underline"
            >
              {tc('contactar')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
