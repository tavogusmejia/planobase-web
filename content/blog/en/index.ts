import type { TraduccionPost } from '@/lib/types'

/**
 * El índice de traducciones del blog.
 *
 * Espejo de `content/posts.ts` y con la misma disciplina: imports explícitos y
 * arreglo explícito, nunca un glob. `generateStaticParams` necesita que el
 * conjunto sea analizable estáticamente, y un `import()` con ruta variable lo
 * rompe.
 *
 * **Una traducción es una superposición, no un segundo artículo.** Trae el
 * titular, el resumen, la meta y el cuerpo; nada más. La fecha, las fuentes, el
 * pilar, las etiquetas y la puerta viven solo del lado español. Si el inglés
 * las redeclarara pasarían tres cosas, las tres malas: `check-fechas.ts`
 * marcaría 38 slugs duplicados y rompería el build entero; el calendario de
 * hechos, que casa patrones en español, dejaría pasar la mitad del corpus sin
 * mirar; y la página de tema podría listar artículos distintos según el idioma
 * sin que nadie lo notara en meses.
 *
 * **El contrato de una traducción**, que verifica `scripts/check-traducciones.ts`:
 *
 * - Mismo `slug` que el archivo español y que el nombre de este archivo.
 * - Misma secuencia de bloques: mismo número, mismos tipos, mismo orden. Un
 *   desajuste casi siempre significa que la traducción se quedó a medias.
 * - Las tablas conservan el número de columnas y las listas el de ítems.
 * - Los diagramas con rótulos se traducen de verdad: enviar el mismo SVG es el
 *   olvido más probable de todo el lote.
 * - `traducido` es la fecha en que se tradujo, y alimenta el `lastModified` del
 *   sitemap. Sin ella, un artículo traducido hoy le diría a Google que cambió
 *   el día que se escribió el español.
 * - **Lo que no se traduce**: los nombres de las normas colombianas —«Ley 675
 *   de 2001», «NSR-10», «Decreto 1077 de 2015»— se citan por su nombre real y
 *   se glosan en el texto corrido la primera vez. Lo mismo con las
 *   instituciones: DANE, DIAN, curaduría urbana. Y las cifras son las mismas
 *   cifras.
 *
 * - **La ortografía es británica.** `centre`, `programme`, `metre`, `organise`,
 *   `neighbourhood`, `litre`, `authorisation`. Es la que ya usan
 *   `messages/en.json` y todo `content/en/`, y mezclarla con la americana
 *   dentro del mismo sitio se nota más que cualquiera de las dos.
 *
 * - **El espacio antes del `%` desaparece.** «6,33 %» se escribe `6.33%`,
 *   pegado. Ese espacio es una convención tipográfica del español, no parte de
 *   la cifra.
 *
 * - **Los separadores sí cambian, y eso incluye el decimal.** «1,50 m» se
 *   escribe «1.50 m» y «2.640 m» se escribe «2,640 m». Es lo que más fácil se
 *   cuela dentro de una tabla, donde una coma decimal española convierte metro
 *   y medio en mil quinientos y nadie lo nota leyendo por encima.
 *
 * - **Los enlaces internos se escriben `/blog/<slug>`, sin prefijo de idioma,
 *   también en inglés.** El `Link` de `@/i18n/navigation` antepone el idioma de
 *   la petición, así que escribir `/en/blog/...` produce `/en/en/blog/...`: un
 *   404 que ninguna guarda detecta porque el texto está bien formado. Y el slug
 *   es el mismo en los dos idiomas, así que va en español dentro del texto
 *   inglés. Es correcto y es a propósito.
 *
 * - **Los diagramas viven en un solo archivo, con la geometría compartida.**
 *   `content/blog/diagramas/<tema>.ts` exporta las dos versiones construidas
 *   sobre la misma constante de trazado, y lo único que difiere son los
 *   `<text>`. La alternativa —un archivo dentro de `en/`— duplica el dibujo y
 *   lo deja envejecer por separado: el día que alguien corrija una cota, la
 *   corrige en un idioma.
 *
 * Estas tres reglas salieron de escribir la primera tanda bilingüe. Las dos
 * primeras estaban implícitas y costaron una deducción; la tercera fue una
 * decisión que tomó el agente y que aquí queda fijada.
 */
import { traduccion as comprarLoteRural } from './comprar-lote-rural-que-verificar-antes-de-firmar'
import { traduccion as aguaEnElCampo } from './agua-en-el-campo-que-permiso-necesita'
import { traduccion as casaBioclimatica } from './casa-bioclimatica-por-piso-termico'
import { traduccion as mamposteriaOPrefabricado } from './mamposteria-o-prefabricado-que-conviene'
import { traduccion as loteConPendiente } from './construir-en-lote-con-pendiente'
import { traduccion as costoPorM2 } from './cuanto-cuesta-construir-por-m2-en-colombia'
import { traduccion as honorariosArquitecto } from './cuanto-cobra-un-arquitecto'
import { traduccion as curaduriaUrbana } from './curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide'
import { traduccion as licenciaBogota } from './licencia-de-construccion-en-bogota'

const registro: TraduccionPost[] = [
  comprarLoteRural,
  aguaEnElCampo,
  casaBioclimatica,
  mamposteriaOPrefabricado,
  loteConPendiente,
  costoPorM2,
  honorariosArquitecto,
  curaduriaUrbana,
  licenciaBogota,
]

export const traduccionesPost = new Map(registro.map((t) => [t.slug, t]))
