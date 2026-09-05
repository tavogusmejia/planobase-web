import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { permanentRedirect } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { ProjectCard } from '@/components/project/ProjectCard'
import { BarraCategorias } from '@/components/project/BarraCategorias'
import { ReticulaProyectos } from '@/components/project/ReticulaProyectos'
import { Rule } from '@/components/ui/Rule'
import { getCategoryCounts, getProjects } from '@/lib/data/projects'
import { CATEGORIAS, type Categoria } from '@/lib/types'
import { verticalDe } from '@/lib/data/contenido'
import { alternativas, tarjeta } from '@/lib/metadatos'

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ categoria?: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { categoria } = await searchParams
  const t = await getTranslations({ locale, namespace: 'home' })

  const activa = esCategoria(categoria) ? categoria : null
  const counts = await getCategoryCounts()
  const vacia = activa !== null && (counts[activa] ?? 0) === 0

  const ruta = `/${locale}/proyectos`
  const descripcion =
    'Portafolio de Plano Base Arquitectos: proyectos educativos, ' +
    'institucionales, culturales, residenciales y de espacio público en Colombia.'

  return {
    title: t('proyectosTitulo'),
    description: descripcion,
    /* Canonical autorreferenciado, hreflang solo de lo traducido y el
       `robots` de esta ruta, los tres del mismo sitio. Va donde estaba
       `alternates` porque después solo vienen claves distintas: si
       alguien añade luego un `alternates` o un `robots` propio, este se
       pierde en silencio. */
    ...alternativas({ locale, entidad: { tipo: 'pagina', ruta: '/proyectos' } }),
    openGraph: tarjeta({
      locale,
      ruta,
      titulo: t('proyectosTitulo'),
      descripcion,
    }),
    // Una categoría sin obra devuelve «todavía no hay obra publicada». Indexar
    // eso es sembrar soft-404, y acumularlos le baja la confianza a todo el
    // dominio. Se puede ver y compartir; no se indexa hasta que tenga obra.
    ...(vacia ? { robots: { index: false, follow: true } } : {}),
  }
}

function esCategoria(v: string | undefined): v is Categoria {
  return CATEGORIAS.includes(v as Categoria)
}

/**
 * El portafolio.
 *
 * Dos cosas que el sitio de Wix no hacía. Una, el filtro devolvía los 24
 * proyectos para cualquier etiqueta; aquí filtra de verdad y lo hace en el
 * servidor: cada categoría es un enlace con su propia URL
 * (`?categoria=educativo`), así que el estado es compartible, indexable,
 * funciona con el botón atrás y no necesita una línea de JavaScript.
 *
 * Dos, la retícula. Va a sangre y sin aire entre piezas, separada apenas por el
 * mismo filete de un cuadro de planchas: la fotografía manda y el conjunto se
 * lee como una sola superficie. Los rótulos se revelan al recorrerla.
 *
 * Que las categorías vacías se muestren con su cero no es un descuido: declara
 * el alcance del estudio y deja el hueco donde va a entrar la obra futura. Se
 * apaga desde `mostrarCategoriasVacias`, en content/ajustes.ts. Con cualquiera
 * de los dos valores, una categoría vacía nunca entra al sitemap y se sirve con
 * `noindex`.
 */
export default async function ProyectosPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ categoria?: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const { categoria } = await searchParams
  const activa = esCategoria(categoria) ? categoria : null

  /* Las categorías con vertical tienen su propia página. Se redirige aquí y no
     en next.config porque un redirect de configuración arrastra el parámetro
     original a la URL nueva —`/categoria/educativo?categoria=educativo`—, y
     esta ruta lo deja limpio. Las categorías sin vertical, que son las vacías,
     se siguen resolviendo abajo con su mensaje de «todavía no hay obra». */
  if (activa && verticalDe(locale, activa)) {
    // Permanente, no temporal: estas URLs se retiran. Un 307 le diría al
    // buscador que siga visitándolas y que no traspase las señales a la buena.
    permanentRedirect(`/${locale}/proyectos/categoria/${activa}`)
  }

  const t = await getTranslations('home')
  const tcat = await getTranslations('categorias')

  const todos = await getProjects(locale)

  const visibles = activa
    ? todos.filter((p) => p.categorias.includes(activa))
    : todos

  return (
    <div className="mx-auto max-w-[100rem] py-16 lg:py-24">
      <div className="px-gutter lg:px-10">
        <h1 className="text-h1 text-ink">{t('proyectosTitulo')}</h1>
        <Rule className="mt-4 max-w-md text-muted">
          {visibles.length}
          {activa ? ` / ${todos.length}` : ''}
        </Rule>

        {/* El dossier del sector: portada más una hoja por proyecto, listo para
            adjuntar a una propuesta. Solo cuando hay un sector elegido. */}
        {activa && visibles.length > 0 ? (
          <Link
            href={`/dossier/${activa}`}
            className="text-block mt-5 inline-block text-accent underline-offset-4 hover:underline"
          >
            Dossier de {tcat(activa).toLowerCase()}
          </Link>
        ) : null}
      </div>

      <BarraCategorias activa={activa} />

      {visibles.length > 0 ? (
        /* Cada pieza dibuja su propio filete; ver `.pieza` en globals.css. */
        <ReticulaProyectos
          total={visibles.length}
          conHuevo={activa === null}
          className="grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          {visibles.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              priority={i < 4}
              sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </ReticulaProyectos>
      ) : (
        <p className="text-lead measure px-gutter py-24 text-muted lg:px-10">
          {tcat('sinProyectos')}
        </p>
      )}
    </div>
  )
}
