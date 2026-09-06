import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Rule } from '@/components/ui/Rule'
import { contacto, reconocimientos } from '@content/site'
import { getProjects } from '@/lib/data/projects'
import { mediaSrc } from '@/lib/utils'
import { etiquetaPrecio } from '@/lib/precio'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'
import { ReservaForm } from '@/components/forms/ReservaForm'
import { alternativas, tarjeta } from '@/lib/metadatos'
import { asesoriaDe, copiaDe } from '@/lib/data/contenido'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const asesoria = asesoriaDe(locale)
  const ruta = `/${locale}/agendar`
  const descripcion = asesoria.descripcion.slice(0, 300)
  return {
    title: asesoria.nombre,
    description: descripcion,
    /* Canonical autorreferenciado, hreflang solo de lo traducido y el
       `robots` de esta ruta, los tres del mismo sitio. Va donde estaba
       `alternates` porque después solo vienen claves distintas: si
       alguien añade luego un `alternates` o un `robots` propio, este se
       pierde en silencio. */
    ...alternativas({ locale, entidad: { tipo: 'pagina', ruta: '/agendar' } }),
    openGraph: tarjeta({
      locale,
      ruta,
      titulo: asesoria.nombre,
      descripcion,
    }),
  }
}

/**
 * Página de conversión. Destino del tráfico de Facebook Ads.
 *
 * Registro distinto al del portafolio: misma tipografía, misma paleta y las
 * mismas líneas de cota, pero con la propuesta explícita, las objeciones
 * resueltas y una sola acción dominante. El portafolio puede permitirse el
 * silencio de mk27; esta página no: quien llega aquí viene de un anuncio y se
 * va en quince segundos si no entiende qué recibe.
 *
 * TODO — copia pendiente de aprobación de Gustavo. Lo que dice esta página sale
 * de la descripción documentada del servicio y del plan de campaña; conviene que
 * la lea alguien del estudio antes de poner un peso en pauta.
 *
 * La contradicción entre el anuncio y esta página quedó resuelta el 4/9/2026:
 * la primera llamada es de quince minutos y sin costo, que es lo que el plan de
 * campaña prometía, y el producto pagado pasa a ser la visita técnica con
 * informe, en la escalera de content/puertas.ts.
 */
export default async function AgendarPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const copia = copiaDe('/agendar', locale)
  const asesoria = asesoriaDe(locale)
  const tcom = await getTranslations('comun')

  /* D-05 · la prueba.
   *
   * Quien llega aquí viene de un anuncio y no sabe quién es el estudio: la
   * página pedía una hora de su tiempo sin haber enseñado una sola obra.
   *
   * **Se enseña obra construida y no el portafolio entero**, y eso solo se pudo
   * hacer desde el 6/9/2026, cuando Eduardo revisó las fichas: hasta entonces el
   * sitio no sabía cuáles estaban construidas —marcaba una de veinticuatro— y
   * una fila de propuestas aquí habría sido justo la promesa equivocada.
   *
   * Tres, no seis: esto sostiene una decisión, no la disputa. La página tiene
   * una sola acción dominante y una galería competiría con ella. */
  const construidas = (await getProjects(locale))
    .filter((p) => p.construido === true && p.portada !== null)
    .slice(0, 3)

  const mensajeWa = `Hola Plano Base, quiero agendar una ${asesoria.nombre.toLowerCase()}.`

  /* Lo que la persona recibe. Sale del plan de campaña: es exactamente lo que
     el anuncio promete, así que la página tiene que sostenerlo. */
  const incluye = [copia.incluye1, copia.incluye2, copia.incluye3]

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-[1fr_24rem] lg:gap-24">
        <div>
          <h1 className="text-h1 measure-display text-ink">{asesoria.tagline}</h1>
          <p className="text-lead measure mt-8 text-ink-soft">
            {asesoria.descripcion}
          </p>

          <section className="mt-16">
            <h2 className="text-block text-muted">
              {copia.incluyeTitular}
            </h2>
            <ul className="mt-6 border-t border-line">
              {incluye.map((punto) => (
                <li
                  key={punto}
                  className="text-h5 measure border-b border-line py-6 text-ink"
                >
                  {punto}
                </li>
              ))}
            </ul>
          </section>

          {/* El calendario, que es lo que esta página vino a hacer.
              Va antes de las condiciones y después de lo que se lleva: primero
              se entiende qué recibe, luego se elige cuándo, y la letra pequeña
              queda debajo — que es el orden en que alguien decide, no el orden
              en que a un abogado le gustaría. */}
          <section className="mt-20 border-t border-line pt-12">
            <ReservaForm />
          </section>

          {/* La obra, después del calendario. El orden importa: primero se
              entiende qué recibe, luego se elige cuándo, y esto sostiene la
              decisión de quien todavía duda — no la interrumpe antes. */}
          {construidas.length > 0 ? (
            <section className="mt-20">
              <h2 className="text-block text-muted">{copia.obraTitular}</h2>
              <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {construidas.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/proyectos/${p.slug}`} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                        {p.portada ? (
                          <Image
                            src={mediaSrc(p.portada.path)}
                            alt={p.portada.alt}
                            fill
                            /* Carga diferida y tamaños ajustados: esta es la
                               página donde aterriza la pauta, y el peso que se
                               añada aquí se paga en cada clic del anuncio. */
                            loading="lazy"
                            sizes="(min-width: 640px) 20vw, 45vw"
                            placeholder={p.portada.blurDataURL ? 'blur' : 'empty'}
                            blurDataURL={p.portada.blurDataURL ?? undefined}
                            className="object-cover transition-opacity group-hover:opacity-85"
                          />
                        ) : null}
                      </div>
                      <p className="text-block mt-2 text-ink">{p.titulo}</p>
                      <p className="text-block text-muted">
                        {p.ciudad} · {p.anio}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-block measure mt-6 text-muted">
                {copia.obraPie}{' '}
                <Link
                  href="/experiencia"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {copia.obraEnlace}
                </Link>
              </p>
            </section>
          ) : null}

          {/* Las políticas van completas y visibles. El plan de campaña promete
              "sin letra pequeña": esconderlas contradiría el anuncio. */}
          <section className="mt-20">
            <h2 className="text-block text-muted">{copia.condiciones}</h2>
            <dl className="mt-6 border-t border-line">
              {asesoria.politicas.map((p) => (
                <div
                  key={p.clave}
                  className="grid gap-1 border-b border-line py-5 sm:grid-cols-[12rem_1fr] sm:gap-8"
                >
                  <dt className="text-small text-muted">{p.clave}</dt>
                  <dd className="text-small measure text-ink">{p.texto}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="border-t-2 border-signal pt-8">
            <h2 className="text-h3 text-ink">{asesoria.nombre}</h2>
            <Rule className="mt-3 text-muted">
              {asesoria.duracionMin} min
            </Rule>
            <p className="text-h2 mt-8 tabular-nums text-ink">
              {await etiquetaPrecio(asesoria.precioCOP)}
            </p>

            <WhatsAppLink
              numero={contacto.whatsapp}
              mensaje={mensajeWa}
              origen="web/agendar"
              className="text-block mt-8 block bg-signal px-7 py-4 text-center uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
            >
              {copia.porWhatsapp}
            </WhatsAppLink>
            <p className="text-block mt-3 text-muted">
              {copia.respuesta}
            </p>

            <Link
              href="/contacto"
              className="text-small mt-8 block text-accent underline-offset-4 hover:underline"
            >
              {copia.porFormulario}
            </Link>

            {/* Los reconocimientos van en la columna de la acción, no abajo:
                es donde se decide, y pesan cero. Cuatro líneas de texto
                sostienen la llamada mejor que un párrafo de argumentos. */}
            <ul className="mt-12 border-t border-line">
              {[...reconocimientos]
                .sort((a, b) => b.anio - a.anio)
                .map((r) => (
                  <li
                    key={`${r.anio}-${r.titulo}`}
                    className="grid gap-1 border-b border-line py-4 sm:grid-cols-[3.5rem_1fr] sm:gap-4"
                  >
                    <span className="text-block tabular-nums text-accent">
                      {r.anio}
                    </span>
                    <p className="text-block text-ink-soft">
                      {r.puesto === 'primer'
                        ? tcom('primerPuesto')
                        : tcom('segundoPuesto')}
                      {' — '}
                      {r.titulo}
                    </p>
                  </li>
                ))}
            </ul>
          </div>

          {/* TODO — Fase 5: pago con tarjeta y calendario propio.
              Wompi o Mercado Pago; Stripe no procesa PSE ni Nequi en Colombia.
              Mientras tanto, la reserva se cierra por WhatsApp, que es lo que
              recomienda el roadmap para no bloquear el lanzamiento. */}
        </aside>
      </div>
    </div>
  )
}
