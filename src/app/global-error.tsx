'use client'

/**
 * Último recurso: el fallo ocurrió en el layout raíz, así que ni la cabecera,
 * ni el pie, ni la hoja de estilos existen ya. Next reemplaza el documento
 * entero, por eso este archivo pinta su propio `<html>` y su propio `<body>`.
 *
 * Todo va en estilos en línea a propósito. Si la hoja de estilos es
 * precisamente lo que no cargó, una clase de Tailwind aquí no pintaría nada y
 * el visitante vería texto negro sobre blanco sin margen. Los colores son los
 * mismos del sitio, escritos a mano porque las variables CSS viven en la hoja
 * que puede no estar.
 *
 * Sin `Link` de next-intl y sin componentes: cualquier import que a su vez
 * falle deja esta página también en blanco, y esta es la que no se puede caer.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          padding: '8rem 1.5rem',
          background: '#ffffff',
          color: '#23282c',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
          fontWeight: 400,
          lineHeight: 1.5,
        }}
      >
        <main style={{ maxWidth: '34rem', margin: '0 auto' }}>
          <p
            style={{
              margin: 0,
              fontSize: '0.8125rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#55839b',
            }}
          >
            Plano Base
          </p>
          <div
            style={{
              height: 1,
              background: '#c8c9ca',
              margin: '1rem 0 2.5rem',
            }}
          />

          <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 400 }}>
            El sitio no pudo cargar.
          </h1>

          <p style={{ marginTop: '1.5rem', color: '#5a5e61' }}>
            Es un fallo nuestro, no de su conexión. Puede reintentar aquí mismo;
            si sigue igual, escríbanos por WhatsApp y le respondemos.
          </p>

          <p style={{ marginTop: '2.5rem' }}>
            <button
              type="button"
              onClick={reset}
              style={{
                border: 0,
                cursor: 'pointer',
                background: '#004e64',
                color: '#ffffff',
                font: 'inherit',
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '1rem 1.75rem',
              }}
            >
              Intentar de nuevo
            </button>
          </p>

          <p style={{ marginTop: '2rem' }}>
            <a
              href="https://wa.me/573014264603"
              style={{ color: '#55839b', textUnderlineOffset: '0.5rem' }}
            >
              Escribir por WhatsApp
            </a>
            <span style={{ color: '#c8c9ca', padding: '0 0.75rem' }}>·</span>
            {/* Un `<a>` y no `<Link>`, a propósito: `<Link>` navegaría del lado
                del cliente sobre el mismo árbol de React que acaba de romperse,
                que es lo único que seguro no funciona. La recarga completa es
                la que vuelve a montar la aplicación desde cero. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/es"
              style={{ color: '#55839b', textUnderlineOffset: '0.5rem' }}
            >
              Volver al inicio
            </a>
          </p>

          {error.digest ? (
            <p style={{ marginTop: '4rem', fontSize: '0.8125rem', color: '#5a5e61' }}>
              Referencia del fallo: {error.digest}
            </p>
          ) : null}
        </main>
      </body>
    </html>
  )
}
