import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ProjectCard } from '@/components/project/ProjectCard'
import { BarraCategorias } from '@/components/project/BarraCategorias'
import { CategoriaEnParametro } from '@/components/project/CategoriaEnParametro'
import { ReticulaProyectos } from '@/components/project/ReticulaProyectos'
import { Rule } from '@/components/ui/Rule'
import { getProjects } from '@/lib/data/projects'
import { verticalesDe } from '@/lib/data/contenido'
import { alternativas, tarjeta } from '@/lib/metadatos'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })

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
  }
}

/**
 * El portafolio, completo y en una sola pieza.
 *
 * **Esta página no filtra, y esa es la decisión.** Filtrar era lo que la
 * mantenía viva en cada visita: leía `?categoria=` —en el cuerpo y en los
 * metadatos— y eso basta para que Next la saque del prerenderizado. Con el
 * filtro fuera, la URL que más tráfico frío recibe vuelve a servirse desde el
 * build, ya escrita, en los dos idiomas.
 *
 * No se pierde nada, porque el filtro ya no vivía aquí: cada categoría con obra
 * tiene desde hace tiempo su propia página —`/proyectos/categoria/educativo`—,
 * con titular, texto de entrada y metadatos propios, y esas se generan también
 * en el build. Había dos formas de ver lo mismo y solo una de las dos costaba
 * un renderizado por visita; queda la que no cuesta y además posiciona. La
 * navegación entre ellas la sigue dando `BarraCategorias`, que las dos páginas
 * comparten.
 *
 * Las URLs viejas con parámetro no se quedan sin respuesta: las recoge
 * `CategoriaEnParametro`, que las lleva a la página de la categoría o, si esa
 * categoría todavía no tiene obra, limpia el parámetro y deja aquí. Ninguna
 * devuelve 404 ni contenido distinto del que pedía.
 *
 * La retícula va a sangre y sin aire entre piezas, separada apenas por el mismo
 * filete de un cuadro de planchas: la fotografía manda y el conjunto se lee
 * como una sola superficie. Los rótulos se revelan al recorrerla.
 */
export default async function ProyectosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations('home')
  const proyectos = await getProjects(locale)

  return (
    <div className="mx-auto max-w-[100rem] py-16 lg:py-24">
      {/* Solo actúa si la URL trae `?categoria=`. No pinta nada y no toca el
          renderizado: la página sigue saliendo del build. */}
      <CategoriaEnParametro
        conPagina={verticalesDe(locale).map((v) => v.categoria)}
      />

      <div className="px-gutter lg:px-10">
        <h1 className="text-h1 text-ink">{t('proyectosTitulo')}</h1>
        <Rule className="mt-4 max-w-md text-muted">{proyectos.length}</Rule>
      </div>

      <BarraCategorias activa={null} />

      {/* Cada pieza dibuja su propio filete; ver `.pieza` en globals.css. */}
      <ReticulaProyectos
        total={proyectos.length}
        conHuevo
        className="grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {proyectos.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            priority={i < 4}
            sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </ReticulaProyectos>
    </div>
  )
}
