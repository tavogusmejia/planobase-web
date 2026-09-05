import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { alternativas, tarjeta } from '@/lib/metadatos'
import { copiaDe, politicaDe } from '@/lib/data/contenido'
import { fechaLarga } from '@/lib/formato'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const ruta = `/${locale}/politica-de-datos`
  const copia = copiaDe('/politica-de-datos', locale)
  return {
    title: copia.titulo,
    description: copia.metaDescripcion,
    ...alternativas({
      locale,
      entidad: { tipo: 'pagina', ruta: '/politica-de-datos' },
    }),
    openGraph: tarjeta({
      locale,
      ruta,
      titulo: copia.tarjetaTitulo,
      descripcion: copia.metaDescripcion,
    }),
  }
}

/**
 * Política de tratamiento de datos personales.
 *
 * **Se indexa, y a propósito.** La tentación es ponerla en `noindex` porque no
 * atrae tráfico, y es exactamente al revés: un comprador institucional que
 * evalúa al estudio comprueba que exista y la lee, y una política que el
 * buscador no encuentra es una política que, para ese comprador, no está.
 *
 * Se lee larga y sin plegar. Los acordeones esconden justo lo que la ley pide
 * que se comunique, y un documento que hay que desplegar sección a sección para
 * leer entero no cumple el requisito de estar informado por mucho que el texto
 * esté ahí.
 *
 * El ancla de cada sección es estable —`#derechos`, `#procedimiento`— porque la
 * política se cita por sección en los correos de respuesta a un reclamo, y un
 * enlace que deja de funcionar dentro de una respuesta legal es un problema.
 */
export default async function PoliticaDeDatosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const p = politicaDe(locale)

  return (
    <div className="mx-auto max-w-[100rem] px-gutter py-16 lg:px-10 lg:py-24">
      <article className="measure-display">
        <header>
          <h1 className="text-h1 text-ink">{p.titulo}</h1>
          <p className="text-lead measure mt-8 text-ink-soft">{p.entrada}</p>
          <p className="text-small mt-8 text-muted">
            {p.vigenciaTitular}: {fechaLarga(locale, p.vigenteDesde)}
          </p>
        </header>

        {p.secciones.map((seccion) => (
          <section key={seccion.id} id={seccion.id} className="mt-16 scroll-mt-24">
            <h2 className="text-h3 measure text-ink">{seccion.titulo}</h2>
            {seccion.bloques.map((b, i) =>
              b.tipo === 'parrafo' ? (
                <p
                  key={i}
                  className="text-body measure mt-6 text-ink-soft"
                >
                  {b.texto}
                </p>
              ) : (
                <ul key={i} className="measure mt-6 list-disc pl-5">
                  {b.puntos.map((punto) => (
                    <li
                      key={punto}
                      className="text-body mt-2 text-ink-soft marker:text-muted"
                    >
                      {punto}
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}
      </article>
    </div>
  )
}
