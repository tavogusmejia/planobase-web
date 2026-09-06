import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { mediaSrc } from '@/lib/utils'
import { alternativas, tarjeta } from '@/lib/metadatos'
import { reconocimientos } from '@content/site'
import {
  copiaDe,
  equipoDe,
  manifiestoDe,
  sobreElEquipoDe,
  visionDe,
} from '@/lib/data/contenido'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const ruta = `/${locale}/estudio`
  const copia = copiaDe('/estudio', locale)
  const descripcion = copia.metaDescripcion
  return {
    title: copia.titulo,
    description: descripcion,
    /* Canonical autorreferenciado, hreflang solo de lo traducido y el
       `robots` de esta ruta, los tres del mismo sitio. Va donde estaba
       `alternates` porque después solo vienen claves distintas: si
       alguien añade luego un `alternates` o un `robots` propio, este se
       pierde en silencio. */
    ...alternativas({ locale, entidad: { tipo: 'pagina', ruta: '/estudio' } }),
    openGraph: tarjeta({
      locale,
      ruta,
      titulo: 'El estudio',
      descripcion,
    }),
  }
}

/**
 * El estudio: visión de arquitectura.
 *
 * Deliberadamente sin rejilla de proyectos — el portafolio vive en /proyectos y
 * repetirlo aquí diluye las dos páginas. Esta es la que responde por qué se
 * hacen las cosas, no cuáles se han hecho.
 *
 * El texto de la visión es un borrador para que Eduardo lo corrija a su voz.
 * Está construido sobre lo que el estudio ya escribió en sus memorias de
 * proyecto, y cada tema lleva la cita literal de donde sale.
 */
export default async function EstudioPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  /* Todo el contenido de esta página pasa por el resolutor: en inglés devuelve
     la traducción, y lo que falte cae al español. Los nombres de los concursos
     no pasan por ahí a propósito — son nombres propios de certámenes
     colombianos y se citan como son. */
  const manifiesto = manifiestoDe(locale)
  const vision = visionDe(locale)
  const equipo = equipoDe(locale)
  const sobreElEquipo = sobreElEquipoDe(locale)
  const copia = copiaDe('/estudio', locale)

  const t = await getTranslations('home')
  const tc = await getTranslations('cta')
  const tcom = await getTranslations('comun')

  const corte = manifiesto.indexOf('. ') + 1
  const declaracion = corte > 0 ? manifiesto.slice(0, corte) : manifiesto
  const desarrollo = corte > 0 ? manifiesto.slice(corte).trim() : ''

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <h1 className="text-h2 measure-display text-ink">{declaracion}</h1>
      {desarrollo ? (
        <p className="text-lead measure mt-8 text-ink-soft">{desarrollo}</p>
      ) : null}

      {/* ---- Visión ---------------------------------------------------------
          Cuatro temas, cada uno con la frase literal de la memoria de proyecto
          donde el estudio ya lo había escrito. */}
      <div className="mt-32 space-y-28 lg:mt-40 lg:space-y-36">
        {vision.map((tema) => (
          <section key={tema.proyectoSlug}>
            <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div>
                <h2 className="text-h2 measure-display text-ink">
                  {tema.titulo}
                </h2>
              </div>
              <div className="mt-8 lg:mt-2">
                <p className="text-body measure text-ink">{tema.texto}</p>

                <figure className="mt-12 border-l border-accent pl-6">
                  <blockquote className="text-h5 measure text-ink-soft">
                    {tema.cita}
                  </blockquote>
                  <figcaption className="text-block mt-4 text-muted">
                    <Link
                      href={`/proyectos/${tema.proyectoSlug}`}
                      className="underline-offset-4 hover:text-accent hover:underline"
                    >
                      {tema.proyectoTitulo}
                    </Link>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ---- El estudio son dos oficios --------------------------------------
          Aquí decía «Dos arquitectos responden con su nombre», y era falso: el
          propio sitio muestra tres líneas más abajo que Gustavo es Gerente de
          Proyectos y Consultor Técnico. Era la única afirmación del sitio de
          que ambos socios son arquitectos, y ningún dato la sostenía.

          Lo que la sustituye no es una corrección defensiva: es el hecho que
          ningún competidor puede copiar. Un arquitecto que dibuja y firma, y
          alguien que no lo es y que gerencia obra y diagnostica. Eso explica de
          una sola vez por qué el estudio vende obra y servicios técnicos, que
          es la confusión que antes se intentaba resolver partiendo el sitio en
          dos con un conmutador.

          Los nombres van en HTML: en el sitio de Wix estaban dentro de las
          imágenes y no los leía ni un buscador ni un lector de pantalla.

          PENDIENTE DE APROBACIÓN: el titular. El resto —nombres y cargos— sale
          del material del estudio.                                            */}
      <section className="mt-36">
        <h2 className="text-h2 measure-display text-ink">
          {copia.equipoTitular}
        </h2>
        <p className="text-body measure mt-8 text-ink-soft">{sobreElEquipo}</p>

        <ul className="mt-14 grid gap-x-10 gap-y-14 border-t border-line pt-12 sm:grid-cols-2 lg:max-w-3xl">
          {equipo.map((m) => (
            <li key={m.slug}>
              {m.foto ? (
                <div className="relative aspect-square w-full overflow-hidden bg-mist">
                  <Image
                    src={mediaSrc(m.foto.path)}
                    alt={m.foto.alt}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                    placeholder="blur"
                    blurDataURL={m.foto.blurDataURL}
                    className="object-cover"
                  />
                </div>
              ) : null}

              <h3 className="text-h3 mt-6 text-ink">{m.nombre}</h3>
              {/* La línea de cota bajo el nombre, igual que bajo un proyecto:
                  lo que mide aquí es el oficio. */}
              <Rule className="mt-3 text-muted">{m.cargo.join(' · ')}</Rule>
            </li>
          ))}
        </ul>
        {/* Aquí iba un pendiente por las matrículas profesionales. Decisión de
            Gustavo (4/9/2026): no se publican. Son documentación de respaldo,
            no material de sitio web, y el NIT es un dato comercial que va en la
            propuesta y no en la página. Queda anotado para que no vuelva a
            entrar como tarea. */}
      </section>

      {/* ---- Reconocimientos ------------------------------------------------ */}
      <section className="mt-32">
        <h2 className="text-h2 measure-display text-ink">
          {copia.reconocimientosTitular}
        </h2>
        <ol className="mt-12 border-t border-line">
          {[...reconocimientos]
            .sort((a, b) => b.anio - a.anio)
            .map((r) => (
              <li
                key={`${r.anio}-${r.titulo}`}
                className="grid gap-2 border-b border-line py-8 sm:grid-cols-[7rem_1fr] sm:gap-10"
              >
                <span className="text-h3 tabular-nums text-accent">
                  {r.anio}
                </span>
                <div>
                  <p className="text-h5 text-ink">
                    {r.puesto === 'primer'
                      ? tcom('primerPuesto')
                      : tcom('segundoPuesto')}
                    {/* El ámbito se dice, no se esconde: cuatro públicos y uno
                        privado es una credencial más creíble que cinco a secas
                        ante quien va a verificarla. */}
                    <span className="text-block ml-3 text-muted">
                      {r.ambito === 'publico'
                        ? copia.ambitoPublico
                        : copia.ambitoPrivado}
                    </span>
                  </p>
                  <p className="text-small measure mt-1 text-ink-soft">
                    {r.proyectoSlug ? (
                      <Link
                        href={`/proyectos/${r.proyectoSlug}`}
                        className="underline-offset-4 hover:text-accent hover:underline"
                      >
                        {r.titulo}
                      </Link>
                    ) : (
                      r.titulo
                    )}
                  </p>
                </div>
              </li>
            ))}
        </ol>
      </section>

      <section className="mt-32 border-t border-line pt-12 lg:grid lg:grid-cols-2 lg:gap-16">
        <h2 className="text-h2 measure-display text-ink">{t('cierreTitulo')}</h2>
        <div className="mt-8 lg:mt-0">
          <p className="text-lead text-ink-soft">{t('cierreSub')}</p>
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
