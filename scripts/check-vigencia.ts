/**
 * Corre antes de cada `next build`.
 *
 * Segunda capa de la defensa contra los datos caducos de APBS. No deja
 * desplegar el sitio con una calculadora que va a devolver cifras viejas.
 *
 * Es deliberadamente incómodo: un dato vencido no es un aviso, es un fallo. La
 * alternativa —desplegar igual y confiar en que alguien lea un correo— es cómo
 * terminan en internet las calculadoras con la UVT del año pasado.
 */
import { DATOS_CON_VIGENCIA, diasParaVencer, estaVencido, porVencer } from '../content/apbs/vigencia'

const vencidos = DATOS_CON_VIGENCIA.filter((d) => estaVencido(d.dato))
const proximos = DATOS_CON_VIGENCIA.filter((d) => porVencer(d.dato))

if (vencidos.length > 0) {
  console.error('\n✗ Datos de APBS vencidos. La calculadora daría cifras mal:\n')
  for (const { nombre, dato } of vencidos) {
    console.error(
      `  ${nombre}\n` +
        `    vigente hasta ${dato.vigenteHasta}, hace ${-diasParaVencer(dato)} días.\n` +
        `    ${dato.comoActualizar}\n`,
    )
  }
  console.error('Corrige en content/apbs/vigencia.ts.\n')
  process.exit(1)
}

for (const { nombre, dato } of proximos) {
  console.warn(
    `  ⚠ ${nombre} vence en ${diasParaVencer(dato)} días (${dato.vigenteHasta}).`,
  )
}

console.log(
  `  apbs           ${DATOS_CON_VIGENCIA.length} dato(s) con vigencia · al día`,
)
