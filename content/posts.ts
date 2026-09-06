import type { Bloque, Post } from '@/lib/types'
import { post as bienvenidosAPlanoBase } from './blog/bienvenidos-a-plano-base'
import { post as fisurasEnMuros } from './blog/fisuras-en-muros'
import { post as licenciaJamundi } from './blog/licencia-de-construccion-en-jamundi'
import { post as potDeCali } from './blog/pot-de-cali-y-su-licencia'
import { post as cuantoCobraArquitecto } from './blog/cuanto-cobra-un-arquitecto'
import { post as ley1209Piscinas } from './blog/ley-1209-piscinas-copropiedad'
import { post as queConstruirEnMiLote } from './blog/que-puedo-construir-en-mi-lote'
import { post as quienHaceQue } from './blog/arquitecto-maestro-de-obra-o-constructora'
import { post as queEsUnAnteproyecto } from './blog/que-es-un-anteproyecto'
import { post as contratoDeDiseno } from './blog/contrato-de-diseno-arquitectonico'
import { post as interventoriaDeObra } from './blog/interventoria-de-obra'
import { post as comoLeerUnPlano } from './blog/como-leer-un-plano'
import { post as diezPreguntasConstructor } from './blog/diez-preguntas-antes-de-firmar-con-un-constructor'
import { post as delLoteALaLicencia } from './blog/del-lote-a-la-licencia'
import { post as reformarEnPH } from './blog/reformar-en-propiedad-horizontal'
import { post as construiSinLicencia } from './blog/construi-sin-licencia'
import { post as estudioPatologico } from './blog/cuando-un-edificio-necesita-un-estudio-patologico'
import { post as informeTecnicoSerio } from './blog/que-debe-contener-un-informe-tecnico-serio'
import { post as docePartidas } from './blog/doce-partidas-que-se-olvidan-al-presupuestar'
import { post as curaduriaUrbana } from './blog/curaduria-urbana-que-es-cual-elegir-y-que-documentos-pide'
import { post as obraSeSaleDelPresupuesto } from './blog/por-que-la-obra-se-sale-del-presupuesto'
import { post as reforzamientoEstructural } from './blog/reforzamiento-estructural-y-nsr-10'
import { post as comprarLote } from './blog/comprar-lote-verificacion-antes-de-firmar'
import { post as comoElegirArquitecto } from './blog/como-elegir-arquitecto'
import { post as construirEnJamundi } from './blog/construir-en-jamundi'
import { post as construirEnSueloRural } from './blog/que-puedo-construir-en-suelo-rural'
import { post as licenciaEnSueloRural } from './blog/licencia-de-construccion-en-suelo-rural'
import { post as cuantoTardaConstruir } from './blog/cuanto-tarda-construir-una-casa'
import { post as erroresCasaCampestre } from './blog/diez-errores-mas-caros-casa-campestre'
import { post as licenciaParaPiscina } from './blog/necesito-licencia-para-construir-una-piscina'
import { post as concursosPublicos } from './blog/concursos-publicos-de-arquitectura'
import { post as interventoriaObraPublica } from './blog/interventoria-de-obra-publica'
import { post as costoPorM2 } from './blog/cuanto-cuesta-construir-por-m2-en-colombia'
import { post as casaCampestreCosto } from './blog/cuanto-cuesta-una-casa-campestre'
import { post as costoRemodelar } from './blog/cuanto-cuesta-remodelar-ambiente-por-ambiente'
import { post as licenciaBogota } from './blog/licencia-de-construccion-en-bogota'
import { post as filtracionesEnCubierta } from './blog/filtraciones-en-cubierta'
import { post as humedadEnMuros } from './blog/humedad-en-muros-origen-antes-de-reparar'
import { post as comprarLoteRural } from './blog/comprar-lote-rural-que-verificar-antes-de-firmar'
import { post as aguaEnElCampo } from './blog/agua-en-el-campo-que-permiso-necesita'
import { post as casaBioclimatica } from './blog/casa-bioclimatica-por-piso-termico'
import { post as mamposteriaOPrefabricado } from './blog/mamposteria-o-prefabricado-que-conviene'
import { post as loteConPendiente } from './blog/construir-en-lote-con-pendiente'
import { post as edificioEnAmarillo } from './blog/mi-edificio-quedo-en-amarillo'
import { post as costoPiscina } from './blog/cuanto-cuesta-una-piscina-en-colombia'
import { post as piscinaConcretoOFibra } from './blog/piscina-concreto-fibra-de-vidrio-o-prefabricada'
import { post as bordeInfinito } from './blog/piscina-de-borde-infinito'
import { post as cuartoDeMaquinas } from './blog/cuarto-de-maquinas-de-una-piscina'
import { post as calentarLaPiscina } from './blog/calentar-la-piscina-solar-bomba-de-calor-o-gas'
import { post as salOCloro } from './blog/piscina-de-sal-o-cloro'
import { post as piscinaEnTerraza } from './blog/piscina-en-terraza'
import { post as jacuzziDeObraOPortatil } from './blog/jacuzzi-de-obra-o-portatil'
import { post as piscinaYJacuzziJuntos } from './blog/piscina-y-jacuzzi-juntos'
import { post as mantenimientoDePiscina } from './blog/mantenimiento-de-piscina-costo-mensual'
import { post as ntc4595QueCambio } from './blog/ntc-4595-2025-que-cambio'
import { post as disenarUnColegio } from './blog/como-se-disena-un-colegio-en-colombia'
import { post as pliegosEquipamiento } from './blog/pliegos-de-un-equipamiento-publico'
import { post as aguasResiduales } from './blog/aguas-residuales-sin-alcantarillado'
import { post as ampliarSegundoPiso } from './blog/ampliar-un-segundo-piso'
import { post as cubiertas } from './blog/cubiertas-barro-termoacustica-verde-o-placa'
import { post as casaDeDescanso } from './blog/casa-de-descanso-o-renta-corta'
import { post as estudioDeViabilidad } from './blog/cuanto-cuesta-un-estudio-de-viabilidad'

/**
 * El índice del blog.
 *
 * Antes este archivo se generaba desde `wix-migration/01-content/blog/*.md` y
 * llevaba el aviso de «no editar a mano». Esa carpeta es el volcado de la
 * migración y no puede ser la casa del contenido nuevo: lo que se escriba hoy
 * no salió de Wix. Los artículos viven ahora en `content/blog/`, uno por
 * archivo, y aquí solo se listan y se ordenan.
 *
 * Añadir un artículo son dos líneas: el `import` y su entrada en el arreglo.
 * `pnpm build` se encarga del resto —comprueba que ningún artículo se fecha
 * antes de la fuente más reciente que cita, y que su slug siga resolviendo—.
 */
const registro: Post[] = [
  /* Va el primero por su fecha, que es hoy. Mientras el diagnóstico
     posterior al sismo siga en curso es además el que más tráfico
     recibe, y el orden del índice lo refleja solo. */
  edificioEnAmarillo,
  /* El pilar de piscinas, de una vez. Se escribieron en dos tandas en
     paralelo y se registran juntos a propósito: comparten cifras que salen
     del mismo numeral de la Resolución 929 de 2026, y registrar la mitad
     habría dejado el pilar citando dos normas distintas durante un rato. */
  costoPiscina,
  piscinaConcretoOFibra,
  bordeInfinito,
  cuartoDeMaquinas,
  calentarLaPiscina,
  salOCloro,
  piscinaEnTerraza,
  jacuzziDeObraOPortatil,
  piscinaYJacuzziJuntos,
  mantenimientoDePiscina,
  /* El pilar institucional, que hasta ahora tenía dos piezas sueltas. Van
     juntos por la misma razón que los de piscinas: los tres se apoyan en la
     NTC 4595:2025 y se enlazan entre sí, y registrar uno solo dejaría
     enlaces internos apuntando a rutas que todavía no existen. */
  ntc4595QueCambio,
  disenarUnColegio,
  pliegosEquipamiento,
  aguasResiduales,
  ampliarSegundoPiso,
  cubiertas,
  casaDeDescanso,
  estudioDeViabilidad,
  bienvenidosAPlanoBase,
  fisurasEnMuros,
  licenciaJamundi,
  potDeCali,
  cuantoCobraArquitecto,
  ley1209Piscinas,
  queConstruirEnMiLote,
  quienHaceQue,
  queEsUnAnteproyecto,
  contratoDeDiseno,
  interventoriaDeObra,
  comoLeerUnPlano,
  diezPreguntasConstructor,
  delLoteALaLicencia,
  reformarEnPH,
  construiSinLicencia,
  obraSeSaleDelPresupuesto,
  reforzamientoEstructural,
  estudioPatologico,
  informeTecnicoSerio,
  docePartidas,
  curaduriaUrbana,
  comprarLote,
  comoElegirArquitecto,
  construirEnJamundi,
  construirEnSueloRural,
  licenciaEnSueloRural,
  cuantoTardaConstruir,
  erroresCasaCampestre,
  licenciaParaPiscina,
  concursosPublicos,
  interventoriaObraPublica,
  costoPorM2,
  casaCampestreCosto,
  costoRemodelar,
  licenciaBogota,
  filtracionesEnCubierta,
  humedadEnMuros,
  comprarLoteRural,
  aguaEnElCampo,
  casaBioclimatica,
  mamposteriaOPrefabricado,
  loteConPendiente,
]

/** Ordenados del más reciente al más antiguo. Es el orden de lectura. */
export const posts: Post[] = [...registro].sort((a, b) =>
  b.fecha.localeCompare(a.fecha),
)

export const postPorSlug = new Map(posts.map((p) => [p.slug, p]))

/** Palabras por minuto de lectura en prosa técnica en español. Se queda corto a
 *  propósito: es preferible que la cifra sobre-estime el tiempo a que alguien
 *  sienta que le mintieron. */
const PPM = 180

function palabrasDe(b: Bloque): number {
  const contar = (s: string) => s.trim().split(/\s+/).filter(Boolean).length
  switch (b.tipo) {
    case 'titulo':
    case 'parrafo':
    case 'nota':
      return contar(b.texto)
    case 'cita':
      return contar(b.texto) + (b.fuente ? contar(b.fuente) : 0)
    case 'lista':
      return b.items.reduce((n, i) => n + contar(i), 0)
    case 'tabla':
      // Una tabla se escanea, no se lee. Se cuenta la mitad.
      return Math.round(
        (b.cabeceras.reduce((n, c) => n + contar(c), 0) +
          b.filas.reduce((n, f) => n + f.reduce((m, c) => m + contar(c), 0), 0)) /
          2,
      )
    case 'dato':
      return contar(b.etiqueta)
    case 'imagen':
    case 'diagrama':
      // Mirar una figura cuesta tiempo aunque no tenga palabras.
      return 20
  }
}

/** Minutos de lectura, calculados y no escritos a mano: una cifra a mano se
 *  queda vieja en cuanto alguien corrige un párrafo. */
export function minutosDeLectura(post: Post): number {
  const palabras = post.cuerpo.reduce((n, b) => n + palabrasDe(b), 0)
  return Math.max(1, Math.round(palabras / PPM))
}

export function postsDelPilar(pilar: Post['pilar']): Post[] {
  return posts.filter((p) => p.pilar === pilar)
}
