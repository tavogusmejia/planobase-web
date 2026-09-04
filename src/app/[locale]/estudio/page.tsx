import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import {
  equipo,
  manifiesto,
  reconocimientos,
  sobreElEquipo,
  vision,
} from '@content/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Estudio',
    /* El title de Wix decía "Arquitectura bioclimática en Bogotá". El estudio
       tiene sede en Cali y su obra es sobre todo pública: era un error de
       posicionamiento, no solo de redacción. */
    description:
      'Plano Base es un estudio de arquitectura con sede en Cali. Trabajamos ' +
      'sobre todo en obra pública —colegios, centros culturales, sedes ' +
      'administrativas y espacio público— con cuatro reconocimientos en ' +
      'concurso público nacional.',
    alternates: { canonical: `/${locale}/estudio` },
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

  const t = await getTranslations('home')
  const tc = await getTranslations('cta')

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

      {/* ---- Equipo ---------------------------------------------------------
          Los nombres van en HTML: en el sitio actual están dentro de las
          imágenes y no los lee ni un buscador ni un lector de pantalla.
          Son dos personas, y eso se enuncia como dedicación, no se disimula. */}
      <section className="mt-36">
        <h2 className="text-h2 measure-display text-ink">
          Dos arquitectos responden con su nombre.
        </h2>
        <p className="text-body measure mt-8 text-ink-soft">{sobreElEquipo}</p>

        <ul className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:max-w-4xl">
          {equipo.map((m) => (
            <li key={m.slug}>
              <h3 className="text-h3 text-ink">{m.nombre}</h3>
              <p className="text-small mt-2 text-ink-soft">
                {m.cargo.join(' · ')}
              </p>
            </li>
          ))}
        </ul>
        {/* TODO — matrícula profesional (CPNAA / COPNIA) de cada socio. Es la
            casilla que verifica un comprador institucional antes de llamar. */}
      </section>

      {/* ---- Reconocimientos ------------------------------------------------ */}
      <section className="mt-32">
        <h2 className="text-h2 measure-display text-ink">
          Cuatro concursos públicos nacionales.
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
                    {r.puesto === 'primer' ? 'Primer puesto' : 'Segundo puesto'}
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
