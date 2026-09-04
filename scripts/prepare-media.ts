/**
 * pnpm media
 *
 * Normaliza las imágenes de `assets-originales/` (lo que se bajó de Wix) hacia
 * `public/media/proyectos/<slug>/NN.webp`, con la ruta exacta que después usará
 * el bucket `media` de Supabase Storage. Idempotente: salta lo ya generado.
 *
 * Emite además `content/projects.ts`, tipado, con ancho, alto y blurDataURL
 * reales de cada archivo — no hay forma de que una imagen quede sin dimensiones.
 *
 * Nota sobre la fuente: existe un juego de originales en OneDrive
 * (02 Diseño Gráfico / Pagweb / Insumos) con mejor resolución para unos 10
 * proyectos, y planchas y videos que Wix nunca mostró. NO se usa aquí: el
 * emparejamiento imagen a imagen entre los dos juegos no es fiable de forma
 * automática y equivocarse significa poner la foto de un colegio en la ficha de
 * otro. Es una tarea curada, pendiente con Gustavo.
 */
import { mkdir, readFile, writeFile, access } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import type { Categoria, Project, ProjectImage } from '../src/lib/types.ts'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(ROOT, 'assets-originales/proyectos')
const OUT = join(ROOT, 'public/media/proyectos')

const MAX_EDGE = 2560
const QUALITY = 82

type WixProject = {
  slug: string
  titulo: string
  subtitulo: string | null
  anio: number
  area_m2: number | null
  ciudad: string
  departamento: string
  localidad?: string
  diseno: string[]
  categoria: string[]
  destacado: boolean
  publicado_en_grid: boolean
  en_hero_home?: boolean
  memoria: string
  portada: string | null
  galeria: string[]
  alertas?: string[]
  premio?: string
  video?: string
  cliente?: string
  sector?: string
  construido?: boolean
  creditos_fotografia?: string
}

const exists = (p: string) =>
  access(p).then(
    () => true,
    () => false,
  )

const sinAcentos = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

/**
 * "Educativo" → "educativo". Los cuatro valores de Wix que pasan tal cual.
 * "Residencial" no está aquí: se resuelve en `categoriasDe`, que sí ve el
 * proyecto entero. Cualquier valor fuera de la taxonomía se descarta.
 */
const MAPA_WIX: Partial<Record<string, Categoria>> = {
  cultural: 'cultural',
  educativo: 'educativo',
  institucional: 'institucional',
  urbano: 'urbano',
}

/**
 * Categorías de un proyecto. Todo lo que sale de aquí está sostenido por un
 * dato del volcado; nada se asigna por criterio nuestro.
 *
 * - Residencial se parte en casas / vivienda por la palabra "multifamiliar",
 *   que los propios subtítulos del estudio usan: "Edificio multifamiliar
 *   Tirreno", "Edificio multifamiliar Arezzo". Las dos Casa Aguilar dicen
 *   "vivienda campestre" y "vivienda unifamiliar" en su memoria.
 * - Concurso se marca solo con evidencia inequívoca: el slug empieza por
 *   "concurso-", el proyecto tiene premio, o su subtítulo dice "Concurso".
 *   Presentar una propuesta de concurso como obra construida es el riesgo
 *   reputacional más alto del portafolio, y por eso la regla vive en el
 *   generador y no en una lista escrita a mano.
 */
function categoriasDe(p: WixProject): Categoria[] {
  const out = new Set<Categoria>()

  for (const raw of p.categoria) {
    const v = sinAcentos(raw)
    const directa = MAPA_WIX[v]
    if (directa) {
      out.add(directa)
      continue
    }
    if (v === 'residencial') {
      const texto = sinAcentos(`${p.subtitulo ?? ''} ${p.memoria}`)
      out.add(texto.includes('multifamiliar') ? 'vivienda' : 'casas')
    }
  }

  if (
    p.slug.startsWith('concurso-') ||
    Boolean(p.premio) ||
    sinAcentos(p.subtitulo ?? '').includes('concurso')
  ) {
    out.add('concursos')
  }

  return [...out]
}

/**
 * Texto alternativo real, no el nombre del archivo. Describe qué se ve y de qué
 * proyecto es, que es lo que necesita alguien con lector de pantalla.
 */
function altFor(p: WixProject, index: number, total: number): string {
  const lugar = `${p.ciudad}, ${p.departamento}`
  if (index === 0) return `${p.titulo}, ${lugar}. Vista principal del proyecto.`
  return `${p.titulo}, ${lugar}. Imagen ${index + 1} de ${total}.`
}

async function processImage(
  from: string,
  to: string,
  alt: string,
): Promise<ProjectImage | null> {
  if (!(await exists(from))) return null

  const relPath = to.slice(join(ROOT, 'public/media').length + 1)
  await mkdir(dirname(to), { recursive: true })

  if (!(await exists(to))) {
    await sharp(from, { animated: false })
      .rotate()
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY })
      .toFile(to)
  }

  const meta = await sharp(to).metadata()
  const blur = await sharp(from)
    .resize({ width: 16, fit: 'inside' })
    .webp({ quality: 40 })
    .toBuffer()

  return {
    path: relPath,
    width: meta.width ?? 0,
    height: meta.height ?? 0,
    blurDataURL: `data:image/webp;base64,${blur.toString('base64')}`,
    alt,
  }
}

/**
 * Los tres proyectos del hero. `en_hero_home` solo viene marcado en dos de los
 * tres en el volcado del CMS, así que se completa con los slides declarados en
 * pages.json — que es el dato observado del sitio en vivo — en vez de escribir
 * una lista a mano aquí.
 */
async function heroSlugs(proyectos: WixProject[]): Promise<Set<string>> {
  const raw = await readFile(
    join(ROOT, 'wix-migration/01-content/pages.json'),
    'utf8',
  )
  const { paginas } = JSON.parse(raw) as {
    paginas: { ruta: string; estructura?: { bloque: string; slides?: string[] }[] }[]
  }
  const slides =
    paginas
      .find((p) => p.ruta === '/')
      ?.estructura?.find((b) => b.bloque === 'hero')?.slides ?? []

  const norm = (s: string) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')

  const out = new Set<string>()
  for (const p of proyectos) {
    if (p.en_hero_home) out.add(p.slug)
    const t = norm(p.titulo)
    if (slides.some((s) => t === norm(s) || t.endsWith(norm(s)))) out.add(p.slug)
  }
  return out
}

async function main() {
  const raw = await readFile(
    join(ROOT, 'wix-migration/01-content/projects.json'),
    'utf8',
  )
  const { proyectos } = JSON.parse(raw) as { proyectos: WixProject[] }
  const hero = await heroSlugs(proyectos)

  const out: Project[] = []
  let totalImgs = 0
  const sinImagen: string[] = []
  const areaFaltante: string[] = []

  for (const p of proyectos) {
    const dir = join(SRC, p.slug)
    const total = p.galeria.length

    // La galería se bajó como 01.ext, 02.ext… en el mismo orden del CMS.
    const galeria: ProjectImage[] = []
    for (let i = 0; i < p.galeria.length; i++) {
      const src = p.galeria[i]
      if (!src) continue
      const ext = src.split('.').pop() ?? 'jpg'
      const nn = String(i + 1).padStart(2, '0')
      const img = await processImage(
        join(dir, `${nn}.${ext}`),
        join(OUT, p.slug, `${nn}.webp`),
        altFor(p, i, total),
      )
      if (img) galeria.push(img)
    }

    // La portada puede ser un archivo aparte (00-portada) o la primera de la
    // galería. Los 7 archivos aparte se bajaron después del script original.
    let portada: ProjectImage | null = null
    if (p.portada && !p.galeria.includes(p.portada)) {
      const ext = p.portada.split('.').pop() ?? 'jpg'
      portada = await processImage(
        join(dir, `00-portada.${ext}`),
        join(OUT, p.slug, '00-portada.webp'),
        `${p.titulo}, ${p.ciudad}. Imagen de portada.`,
      )
    }
    portada ??= galeria[0] ?? null

    if (!portada) sinImagen.push(p.slug)
    if (!p.area_m2) areaFaltante.push(p.slug)
    totalImgs += galeria.length + (p.portada && portada ? 1 : 0)

    const categorias = categoriasDe(p)

    out.push({
      slug: p.slug,
      titulo: p.titulo,
      subtitulo: p.subtitulo ?? null,
      anio: p.anio,
      ciudad: p.ciudad,
      departamento: p.departamento,
      localidad: p.localidad ?? null,
      // 0 y null son lo mismo aquí: dato ausente. Nunca se pinta "0 m²".
      areaM2: p.area_m2 && p.area_m2 > 0 ? p.area_m2 : null,
      diseno: p.diseno,
      cliente: p.cliente ?? null,
      sector: p.sector ?? null,
      premio: p.premio ?? null,
      creditosFotografia: p.creditos_fotografia ?? null,
      construido: p.construido ?? false,
      categorias,
      destacado: p.destacado,
      enHeroHome: hero.has(p.slug),
      // Un proyecto sin una sola imagen no se publica: dejaría una ficha vacía.
      publicado: p.publicado_en_grid && galeria.length > 0,
      memoria: p.memoria,
      videoUrl: p.video ?? null,
      portada,
      galeria,
      alertas: p.alertas ?? [],
    })
  }

  const header = `// GENERADO POR \`pnpm media\`. No editar a mano.
// Fuente: wix-migration/01-content/projects.json + assets-originales/
import type { Project } from '@/lib/types'

export const projects: Project[] = `

  await mkdir(join(ROOT, 'content'), { recursive: true })
  await writeFile(
    join(ROOT, 'content/projects.ts'),
    header + JSON.stringify(out, null, 2) + '\n',
    'utf8',
  )

  console.log(`\n  proyectos      ${out.length}`)
  console.log(`  publicados     ${out.filter((p) => p.publicado).length}`)
  console.log(`  imágenes       ${totalImgs}`)
  console.log(`  sin imagen     ${sinImagen.join(', ') || '—'}`)
  console.log(`  sin área       ${areaFaltante.length} proyectos`)
  console.log(`  → content/projects.ts\n`)
}

main().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
