'use client'

import { useMemo, useState } from 'react'
import { Rule } from '@/components/ui/Rule'
import { GRATUITO } from '@content/apbs/expensas'
import {
  DEPARTAMENTOS_DANE,
  municipiosDelDepartamento,
} from '@content/apbs/divipola'
import { calcular, type Tramite, type Uso } from '@/lib/apbs/expensas'

/**
 * La calculadora. Es lo único de la sección que necesita ser componente de
 * cliente: hay estado y hay interacción real.
 *
 * Dos decisiones de interfaz que importan más de lo que parece:
 *
 * 1. **El selector es en cascada y trae los 1.103 municipios del país**, no
 *    solo los cincuenta y tres que tienen curaduría. Eso importa porque en
 *    todos los demás la respuesta correcta no es «no lo sé» sino «no se pagan
 *    expensas», y esa es la que más plata le ahorra a alguien. Se cruza por
 *    código DANE y nunca por nombre: Puerto Colombia está en Atlántico y en
 *    Guainía, Rionegro en Antioquia y en Santander.
 * 2. **Se muestra la descomposición, no solo el total.** Es lo que hacen las
 *    curadurías en sus tablas, y es lo que permite que alguien audite su
 *    liquidación real contra esto. Una cifra sola no se puede discutir.
 */
export function CalculadoraExpensas({ uvt, anioUvt }: { uvt: number; anioUvt: number }) {
  const [departamento, setDepartamento] = useState('')
  const [municipio, setMunicipio] = useState('')
  const [tramite, setTramite] = useState<Tramite>('construccion')
  const [uso, setUso] = useState<Uso>('vivienda')
  const [estrato, setEstrato] = useState<1 | 2 | 3 | 4 | 5 | 6>(3)
  const [area, setArea] = useState('120')
  const [reducida, setReducida] = useState(false)
  const [sobreLoExistente, setSobreLoExistente] = useState(false)

  const areaNum = Number(area.replace(',', '.'))
  const usaFormula = tramite === 'construccion' || tramite === 'urbanizacion'

  const municipios = useMemo(
    () => municipiosDelDepartamento(departamento),
    [departamento],
  )

  const resultado = useMemo(() => {
    if (!departamento || !municipio) return null
    if (usaFormula && (!Number.isFinite(areaNum) || areaNum <= 0)) return null
    return calcular(
      {
        codigoMunicipio: municipio,
        tramite,
        uso,
        estrato,
        area: Number.isFinite(areaNum) ? areaNum : 0,
        reducidaAlMedio: reducida,
        modalidadSobreLoExistente: sobreLoExistente,
      },
      uvt,
    )
  }, [
    departamento,
    municipio,
    tramite,
    uso,
    estrato,
    areaNum,
    reducida,
    sobreLoExistente,
    uvt,
    usaFormula,
  ])

  const pesos = (n: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(n)

  return (
    <div className="mt-14">
      <form
        className="measure-ancho grid gap-x-8 gap-y-6 sm:grid-cols-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <Campo etiqueta="Departamento">
          <select
            value={departamento}
            onChange={(e) => {
              const d = e.target.value
              setDepartamento(d)
              // Bogotá es departamento y municipio a la vez. Obligar a
              // elegirla dos veces sería absurdo, así que se autoselecciona.
              const ms = municipiosDelDepartamento(d)
              setMunicipio(ms.length === 1 ? (ms[0]?.codigo ?? '') : '')
            }}
            className="w-full border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent"
          >
            <option value="">Elija el departamento</option>
            {DEPARTAMENTOS_DANE.map((d) => (
              <option key={d.codigo} value={d.codigo}>
                {d.nombre}
              </option>
            ))}
          </select>
        </Campo>

        <Campo etiqueta="Municipio">
          <select
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
            disabled={!departamento || municipios.length <= 1}
            className="w-full border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent disabled:text-muted"
          >
            <option value="">
              {departamento ? 'Elija el municipio' : 'Elija antes el departamento'}
            </option>
            {municipios.map((m) => (
              <option key={m.codigo} value={m.codigo}>
                {m.nombre}
              </option>
            ))}
          </select>
        </Campo>

        <Campo etiqueta="Trámite">
          <select
            value={tramite}
            onChange={(e) => setTramite(e.target.value as Tramite)}
            className="w-full border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent"
          >
            <option value="construccion">Licencia de construcción</option>
            <option value="urbanizacion">Licencia de urbanización o parcelación</option>
            <option value="subdivision">Licencia de subdivisión</option>
            <option value="prorroga">Prórroga o revalidación</option>
            <option value="concepto-norma">Concepto de norma urbanística</option>
            <option value="concepto-uso">Concepto de uso del suelo</option>
          </select>
        </Campo>

        {usaFormula ? (
          <>
            <Campo etiqueta="Uso">
              <select
                value={uso}
                onChange={(e) => setUso(e.target.value as Uso)}
                className="w-full border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent"
              >
                <option value="vivienda">Vivienda</option>
                <option value="otros">Comercio, industria o institucional</option>
              </select>
            </Campo>

            {uso === 'vivienda' ? (
              <Campo etiqueta="Estrato">
                <select
                  value={estrato}
                  onChange={(e) =>
                    setEstrato(Number(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6)
                  }
                  className="w-full border-b border-line bg-transparent py-2 text-ink outline-none focus:border-accent"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      Estrato {n}
                    </option>
                  ))}
                </select>
              </Campo>
            ) : (
              <div aria-hidden className="hidden sm:block" />
            )}

            <Campo
              etiqueta="Área en metros cuadrados"
              ayuda={
                tramite === 'urbanizacion'
                  ? 'Área bruta del predio.'
                  : 'Área cubierta a construir, ampliar o adecuar.'
              }
            >
              <input
                type="number"
                inputMode="decimal"
                min={1}
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full border-b border-line bg-transparent py-2 tabular-nums text-ink outline-none focus:border-accent"
              />
            </Campo>
          </>
        ) : null}

        <fieldset className="sm:col-span-2">
          <legend className="text-block text-muted">Reducciones</legend>
          <label className="text-small mt-4 flex gap-3 text-ink-soft">
            <input
              type="checkbox"
              checked={reducida}
              onChange={(e) => setReducida(e.target.checked)}
              className="mt-1 shrink-0"
            />
            <span>
              Vivienda de interés social, o dotacional público de salud,
              educación o bienestar social.{' '}
              <span className="text-muted">Liquida al 50 %.</span>
            </span>
          </label>
          {usaFormula ? (
            <label className="text-small mt-3 flex gap-3 text-ink-soft">
              <input
                type="checkbox"
                checked={sobreLoExistente}
                onChange={(e) => setSobreLoExistente(e.target.checked)}
                className="mt-1 shrink-0"
              />
              <span>
                Restauración, reconstrucción, modificación o reforzamiento
                estructural.{' '}
                <span className="text-muted">
                  Reduce al 30 % el área que entra en el cálculo.
                </span>
              </span>
            </label>
          ) : null}
        </fieldset>
      </form>

      <div className="measure-ancho mt-12" aria-live="polite">
        {resultado === null ? (
          <p className="text-small text-muted">
            Elija departamento y municipio para ver el resultado.
          </p>
        ) : resultado.tipo === 'sin-expensas' ? (
          <div className="border-t border-b border-line py-8">
            <p className="text-h3 text-ink">{resultado.titular}</p>
            <p className="text-body measure mt-5 text-ink-soft">
              {resultado.motivo}
            </p>
          </div>
        ) : (
          <div>
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Descomposición del cálculo</caption>
              <tbody>
                {resultado.pasos.map((p) => (
                  <tr key={p.concepto}>
                    <td className="text-small border-b border-line py-3 pr-6 text-ink-soft">
                      {p.concepto}
                    </td>
                    <td className="text-small border-b border-line py-3 text-right tabular-nums text-ink-soft">
                      {pesos(p.valor)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="text-small border-b border-line py-3 pr-6 text-muted">
                    IVA 19 %
                  </td>
                  <td className="text-small border-b border-line py-3 text-right tabular-nums text-muted">
                    {pesos(resultado.iva)}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-8">
              <p className="text-h2 tabular-nums text-ink">
                {pesos(resultado.total)}
              </p>
              <Rule className="mt-3 text-muted">
                {resultado.municipio.nombre} · factor {resultado.municipio.m}
              </Rule>
            </div>

            {resultado.alRadicar !== null ? (
              <p className="text-small measure mt-6 text-ink-soft">
                De ese total, <strong className="font-normal text-ink">
                  {pesos(resultado.alRadicar)}
                </strong>{' '}
                es el cargo fijo, que se paga al radicar y{' '}
                <strong className="font-normal text-ink">no se devuelve</strong>{' '}
                si la licencia se niega o si usted desiste.
              </p>
            ) : null}

            {resultado.avisos.map((a) => (
              <p key={a} className="text-small measure mt-6 text-muted">
                {a}
              </p>
            ))}
          </div>
        )}
      </div>

      <section className="measure mt-16 border-t border-line pt-8">
        <h2 className="text-block text-muted">Lo que no cuesta nada</h2>
        <ul className="mt-5">
          {GRATUITO.map((g) => (
            <li key={g} className="text-small mb-3 flex gap-3 text-ink-soft">
              <span aria-hidden className="text-muted">
                —
              </span>
              <span>{g}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-block measure mt-10 text-muted">
        Calculado con la UVT de {anioUvt}. Las expensas son lo que cobra el
        curador por estudiar la solicitud: no incluyen el impuesto de
        delineación urbana, que es municipal y se liquida aparte, ni la
        participación en plusvalía cuando aplica.
      </p>
    </div>
  )
}

function Campo({
  etiqueta,
  ayuda,
  children,
}: {
  etiqueta: string
  ayuda?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-block text-muted">{etiqueta}</span>
      <span className="mt-2 block">{children}</span>
      {ayuda ? (
        <span className="text-block mt-2 block text-muted">{ayuda}</span>
      ) : null}
    </label>
  )
}
