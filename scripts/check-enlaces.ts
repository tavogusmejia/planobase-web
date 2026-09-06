/**
 * pnpm check:enlaces
 *
 * Comprueba que las URL citadas como fuente siguen resolviendo.
 *
 * **Por qué NO corre con `pnpm build`.** Las otras cinco guardas son
 * deterministas y offline: con el mismo repositorio dan siempre el mismo
 * resultado. Esta llama a 180 servidores, la mitad de ellos de entidades
 * colombianas que se caen un rato cada semana. Meterla en el build significaría
 * que el sitio no se puede desplegar porque el gestor normativo está lento, y
 * eso convierte una guarda útil en una que se termina desactivando. Se corre a
 * mano.
 *
 * **De dónde salió.** El 6/9/2026 se descubrió que la URL de la Ley 1150 en el
 * artículo de concursos redirigía a `norma_error.php`. Al barrer las 163 fuentes
 * del corpus aparecieron **cinco muertas**, la peor la Ley 160 de 1994 citada en
 * seis artículos. Ninguna guarda lo veía: `check-redirects` solo comprueba los
 * destinos internos del sitio.
 *
 * **El modo de fallo que de verdad importa, y por el que un chequeo ingenuo no
 * basta.** El gestor normativo de Función Pública no devuelve 404 cuando una
 * norma ya no está: devuelve **302 hacia una página de error**. Quien compruebe
 * solo el código final siguiendo redirecciones ve un 200 y se queda tranquilo.
 * Por eso aquí las redirecciones **no se siguen**: se mira a dónde apuntan.
 *
 * **Por qué `curl` y no `fetch`.** La primera versión usaba el `fetch` de Node y
 * daba cuarenta avisos falsos: `funcionpublica.gov.co` —el sitio más citado de
 * todo el corpus— sirve una cadena de certificados incompleta, y el cliente TLS
 * de Node la rechaza mientras que el del sistema la acepta. Una guarda que grita
 * en falso cuarenta veces se desactiva en una semana, así que se usa `curl`, que
 * es lo que un humano usaría y lo que resuelve bien estos servidores.
 *
 * **Qué es fallo y qué es aviso.** Un 404, o una redirección a una página de
 * error conocida, es un fallo: la fuente ya no está donde decimos. Un 403 o un
 * tiempo de espera agotado es solo un aviso, porque el 6/9 se comprobó a mano
 * que los cuatro casos que aparecieron —Enel, Invías, MinEnergía y el sisjur de
 * Bogotá— estaban vivos y lo que fallaba era el cortafuegos o el certificado.
 * Tratarlos como fallo habría dado tres falsos positivos de cuatro.
 */
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { posts } from '../content/posts'

const ejecutar = promisify(execFile)

/** Rutas de error conocidas. Una redirección a cualquiera de estas es muerte
 *  disfrazada de 302, que es la forma en que este corpus perdió cuatro fuentes
 *  sin que nadie lo notara. */
const PAGINAS_DE_ERROR = ['norma_error.php', '/404', '/error', 'not-found']

const CONCURRENCIA = 8
const ESPERA_S = '25'
const AGENTE =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/126 Safari/537.36'

type Estado = 'ok' | 'muerta' | 'aviso'
type Resultado = { url: string; estado: Estado; detalle: string; donde: string[] }

/** Dónde se cita cada URL. Sin esto, un fallo obliga a buscar a mano en qué
 *  artículo estaba, y una URL puede estar en seis. */
function fuentesDelCorpus(): Map<string, string[]> {
  const mapa = new Map<string, string[]>()
  for (const post of posts) {
    for (const f of post.fuentes) {
      if (!f.url) continue
      mapa.set(f.url, [...(mapa.get(f.url) ?? []), post.slug])
    }
  }
  return mapa
}

/**
 * Una consulta. `cabecera` pide solo los encabezados.
 *
 * Se pregunta primero por la cabecera porque varias fuentes son PDF de decenas
 * de megas —el del Decreto 780 pesa 10 MB y uno del Ministerio de Educación
 * 43— y descargarlos enteros para leer un código de estado agotaba el tiempo de
 * espera y los daba por caídos. Tres de los seis avisos de la primera pasada
 * eran eso, y los tres estaban vivos.
 */
async function consultar(url: string, cabecera: boolean): Promise<[number, string]> {
  /* Sin `-L`: interesa a dónde apunta la redirección, no dónde acaba. */
  const { stdout } = await ejecutar('curl', [
    '-sS',
    ...(cabecera ? ['-I'] : []),
    '--max-time', ESPERA_S,
    '-A', AGENTE,
    '-H', 'Accept: text/html,application/xhtml+xml,*/*',
    '-o', '/dev/null',
    '-w', '%{http_code}\t%{redirect_url}',
    url,
  ])
  const [codigoTexto = '', destino = ''] = stdout.trim().split('\t')
  return [Number(codigoTexto), destino]
}

async function comprobar(url: string, donde: string[]): Promise<Resultado> {
  try {
    let [codigo, destino] = await consultar(url, true)

    /* Hay servidores que no contestan a una petición de solo cabecera, o que
       responden 405. Ahí sí toca pedir el cuerpo. */
    if (codigo === 0 || codigo === 405 || codigo === 501) {
      ;[codigo, destino] = await consultar(url, false)
    }

    if (codigo >= 300 && codigo < 400) {
      if (PAGINAS_DE_ERROR.some((p) => destino.includes(p))) {
        return { url, donde, estado: 'muerta', detalle: `${codigo} → ${destino}` }
      }
      return { url, donde, estado: 'ok', detalle: `${codigo} → ${destino}` }
    }
    if (codigo === 404 || codigo === 410) {
      return { url, donde, estado: 'muerta', detalle: String(codigo) }
    }
    if (codigo === 403 || codigo === 429) {
      return { url, donde, estado: 'aviso', detalle: `${codigo}, probable cortafuegos` }
    }
    if (codigo === 0) {
      return { url, donde, estado: 'aviso', detalle: 'sin respuesta' }
    }
    if (codigo >= 400) {
      return { url, donde, estado: 'aviso', detalle: String(codigo) }
    }
    return { url, donde, estado: 'ok', detalle: String(codigo) }
  } catch {
    return { url, donde, estado: 'aviso', detalle: 'no se pudo consultar' }
  }
}

async function main(): Promise<void> {
  const entradas = [...fuentesDelCorpus().entries()]
  const resultados: Resultado[] = []

  let i = 0
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCIA, entradas.length) }, async () => {
      while (i < entradas.length) {
        const entrada = entradas[i++]
        if (!entrada) break
        resultados.push(await comprobar(entrada[0], entrada[1]))
      }
    }),
  )

  const muertas = resultados.filter((r) => r.estado === 'muerta')
  const avisos = resultados.filter((r) => r.estado === 'aviso')

  for (const r of avisos) {
    console.warn(`  ⚠ ${r.detalle}  ${r.url}`)
    console.warn(`      citada en: ${r.donde.join(', ')}`)
  }

  if (muertas.length > 0) {
    console.error('\n✗ Fuentes que ya no resuelven:\n')
    for (const r of muertas) {
      console.error(`  ${r.url}\n    ${r.detalle}\n    citada en: ${r.donde.join(', ')}\n`)
    }
    console.error(
      'Busque el documento en su gestor normativo y sustituya la URL.\n' +
        '**Verifique el destino nuevo por el título de la página, no por el código\n' +
        'de respuesta**: un 200 que abre la ley equivocada es peor que un enlace roto.\n',
    )
    process.exit(1)
  }

  console.log(
    `  enlaces       ${resultados.length} fuentes · ${resultados.length - avisos.length} responden` +
      (avisos.length > 0 ? ` · ${avisos.length} con aviso` : ' · ninguna muerta'),
  )
}

main().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
