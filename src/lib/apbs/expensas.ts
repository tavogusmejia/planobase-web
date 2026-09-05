import {
  CARGO_FIJO_UVT,
  CARGO_VARIABLE_UVT,
  FACTOR_I_VIVIENDA,
  IVA,
  MUNICIPIO_POR_CODIGO,
  TARIFAS_PLANAS_UVT,
  factorIOtrosUsos,
  factorJConstruccion,
  factorJUrbanismo,
  type Municipio,
} from '@content/apbs/expensas'

/**
 * El cálculo de las expensas. Funciones puras, sin React y sin `server-only`:
 * las usan el componente de la calculadora y, si hace falta, un script.
 *
 * La decisión de diseño que gobierna el módulo: **el resultado «no se pagan
 * expensas» es un resultado de primera clase, no un error.** Cubre la inmensa
 * mayoría de los municipios del país —hay curaduría en 50 de más de mil— y es
 * donde más plata le ahorra la herramienta a alguien.
 */

export type Uso = 'vivienda' | 'otros'

export type Tramite =
  | 'construccion'
  | 'urbanizacion'
  | 'subdivision'
  | 'prorroga'
  | 'concepto-norma'
  | 'concepto-uso'

export type Solicitud = {
  /** Código DANE de cinco dígitos del municipio. Se cruza por código y no por
   *  nombre porque hay municipios homónimos en departamentos distintos. */
  codigoMunicipio: string
  tramite: Tramite
  uso: Uso
  /** Solo si el uso es vivienda. */
  estrato: 1 | 2 | 3 | 4 | 5 | 6
  /** Metros cuadrados objeto de la solicitud. */
  area: number
  /** Vivienda de interés social, o dotacional público de salud, educación o
   *  bienestar social. Liquida al 50 %. */
  reducidaAlMedio: boolean
  /**
   * Restauración, reconstrucción, modificación o reforzamiento estructural.
   * **No es un descuento sobre la expensa**: reduce al 30 % el área que entra
   * como Q en el factor j.
   */
  modalidadSobreLoExistente: boolean
}

export type Renglon = { concepto: string; valor: number }

export type Resultado =
  | {
      tipo: 'sin-expensas'
      municipio: Municipio | null
      titular: string
      motivo: string
    }
  | {
      tipo: 'calculo'
      municipio: Municipio
      /** Los renglones del cálculo, para que se pueda auditar. */
      pasos: Renglon[]
      subtotal: number
      iva: number
      total: number
      /** Lo que se paga al radicar y no se devuelve. */
      alRadicar: number | null
      avisos: string[]
    }

/** Si el municipio tiene curaduría con factor asignado, lo devuelve. */
export function buscarMunicipio(codigo: string): Municipio | null {
  return MUNICIPIO_POR_CODIGO.get(codigo) ?? null
}

/**
 * Todos los despachos figuran vacantes en el último directorio.
 *
 * **Ojo con lo que esto significa desde agosto de 2026.** El Decreto 1107 del
 * 6 de agosto adicionó el artículo 2.2.6.6.2.4 al Decreto 1077: al terminar su
 * periodo de cinco años, el curador saliente *puede continuar provisionalmente
 * en el cargo* hasta que el concurso de méritos designe al nuevo. Antes de esa
 * norma, un despacho sin curador designado quedaba sin servicio y la alcaldía
 * lo asumía; ahora puede haber un curador ejerciendo y cobrando aunque el
 * directorio muestre el despacho vacante.
 *
 * El directorio no distingue las dos situaciones —periodo vencido con saliente
 * que continúa, frente a despacho realmente sin proveer—, así que esta función
 * ya no puede afirmar que no se cobra. Solo dice lo que sabe, y el resultado lo
 * enuncia como tal.
 */
function sinCuradorEnDirectorio(m: Municipio): boolean {
  return m.vacantes.length >= m.despachos
}

const pesos = (uvt: number, veces = 1) => Math.round(uvt * veces)

export function calcular(s: Solicitud, uvt: number): Resultado {
  const municipio = buscarMunicipio(s.codigoMunicipio)

  // Sin curaduría no hay expensas. Es norma, no ausencia de dato, y por eso se
  // responde como resultado y no como error.
  if (!municipio) {
    return {
      tipo: 'sin-expensas',
      municipio: null,
      titular: 'Ahí no se pagan expensas de curaduría',
      motivo:
        'Ese municipio no tiene curaduría urbana, así que la licencia la ' +
        'expide la oficina de planeación. El parágrafo 4 del artículo ' +
        '2.2.6.6.8.1 del Decreto 1077 de 2015 dice que en ningún caso las ' +
        'autoridades municipales están autorizadas para hacer cobros de ' +
        'expensas. Sí puede haber otros costos municipales, como el impuesto ' +
        'de delineación urbana, que se liquida aparte.',
    }
  }

  if (sinCuradorEnDirectorio(municipio)) {
    return {
      tipo: 'sin-expensas',
      municipio,
      titular: 'Aquí hay que confirmar antes de presupuestar',
      motivo:
        `${municipio.nombre} tiene curadurías creadas y factor municipal ` +
        'asignado, pero en el último directorio oficial ninguna aparece con ' +
        'curador designado. Si de verdad no hay curador ejerciendo, la ' +
        'licencia la expide la oficina de planeación y no se pagan expensas. ' +
        'Pero desde el 6 de agosto de 2026, el artículo 2.2.6.6.2.4 del ' +
        'Decreto 1077 permite que el curador saliente continúe ' +
        'provisionalmente hasta que el concurso designe al nuevo, y el ' +
        'directorio no distingue un caso del otro. Llame a la alcaldía y ' +
        'pregunte si hay curador en ejercicio: la respuesta va de cero a ' +
        'varios cientos de miles de pesos.',
    }
  }

  const { m } = municipio
  const avisos: string[] = []

  // Las tarifas planas no pasan por la fórmula: ni i, ni j, ni m.
  const planas: Partial<Record<Tramite, { concepto: string; uvt: number }>> = {
    subdivision: {
      concepto: 'Licencia de subdivisión',
      uvt: TARIFAS_PLANAS_UVT.subdivision,
    },
    prorroga: {
      concepto: s.reducidaAlMedio
        ? 'Prórroga o revalidación, vivienda de interés social'
        : 'Prórroga o revalidación',
      uvt: s.reducidaAlMedio
        ? TARIFAS_PLANAS_UVT.prorrogaORevalidacionVIS
        : TARIFAS_PLANAS_UVT.prorrogaORevalidacion,
    },
    'concepto-norma': {
      concepto: 'Concepto de norma urbanística',
      uvt: TARIFAS_PLANAS_UVT.conceptoDeNormaUrbanistica,
    },
    'concepto-uso': {
      concepto: 'Concepto de uso del suelo',
      uvt: TARIFAS_PLANAS_UVT.conceptoDeUsoDelSuelo,
    },
  }

  const plana = planas[s.tramite]
  if (plana) {
    const subtotal = pesos(uvt, plana.uvt)
    const iva = Math.round(subtotal * IVA)
    return {
      tipo: 'calculo',
      municipio,
      pasos: [
        { concepto: `${plana.concepto} · ${plana.uvt} UVT`, valor: subtotal },
      ],
      subtotal,
      iva,
      total: subtotal + iva,
      alRadicar: null,
      avisos: [
        'Es una tarifa nacional fija: no depende del municipio, ni del ' +
          'estrato, ni del área.',
      ],
    }
  }

  // Fórmula E = (Cf × i × m) + (Cv × i × j × m)
  const i =
    s.uso === 'vivienda'
      ? (FACTOR_I_VIVIENDA[s.estrato] ?? 1)
      : factorIOtrosUsos(s.area)

  // El «30 %» reduce el área que alimenta j, no la expensa.
  const areaParaJ = s.modalidadSobreLoExistente ? s.area * 0.3 : s.area
  const j =
    s.tramite === 'urbanizacion'
      ? factorJUrbanismo(areaParaJ)
      : factorJConstruccion(areaParaJ)

  const reduccion = s.reducidaAlMedio ? 0.5 : 1

  const cf = CARGO_FIJO_UVT * i * m * reduccion
  const cv = CARGO_VARIABLE_UVT * i * j * m * reduccion

  const alRadicar = pesos(uvt, cf)
  const variable = pesos(uvt, cv)
  const subtotal = alRadicar + variable
  const iva = Math.round(subtotal * IVA)

  if (s.modalidadSobreLoExistente) {
    avisos.push(
      'El 30 % de estas modalidades no es un descuento sobre la expensa: ' +
        'reduce el área que entra en el factor j. Como ese factor crece con ' +
        'el área, el ahorro real es bastante menor que un 70 %.',
    )
  }
  if (s.uso === 'otros' && s.area > 1000 && s.area < 1001) {
    avisos.push(
      'El decreto salta entre «301 a 1000» y «más de 1001»: un área en ese ' +
        'hueco no está cubierta y cada curaduría lo resuelve distinto.',
    )
  }
  if (s.tramite === 'construccion' && areaParaJ > 10_900 && areaParaJ < 11_100) {
    avisos.push(
      'Cerca de 11.000 m² la fórmula del decreto da un salto del 21 %. Aquí ' +
        'se aplica la rama baja en 11.000 exacto, que es lo que hacen las ' +
        'curadurías.',
    )
  }

  return {
    tipo: 'calculo',
    municipio,
    pasos: [
      { concepto: `Cargo fijo · ${CARGO_FIJO_UVT} UVT × i ${i} × m ${m}`, valor: alRadicar },
      {
        concepto: `Cargo variable · ${CARGO_VARIABLE_UVT} UVT × i ${i} × j ${j.toFixed(3)} × m ${m}`,
        valor: variable,
      },
    ],
    subtotal,
    iva,
    total: subtotal + iva,
    alRadicar,
    avisos,
  }
}
