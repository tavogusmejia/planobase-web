/**
 * Calendario de hechos citables.
 *
 * Los artículos del blog se fechan repartidos hacia atrás, para que la sección
 * no aparezca entera el mismo día. Eso abre un fallo que no se detecta
 * leyendo: un artículo fechado en 2023 que menciona un decreto de 2025, o un
 * sismo que todavía no había ocurrido. Publicado, es la clase de error que
 * destruye exactamente la credibilidad que el artículo venía a construir.
 *
 * `scripts/check-fechas.ts` ya comprueba las fuentes citadas formalmente. Este
 * archivo cierra el resto del agujero: un artículo puede mencionar un hecho sin
 * citarlo en su lista de fuentes, y `Fuente.fecha` admite `null` para las
 * normas sin edición fechada. Aquí se declara cuándo ocurrió cada cosa y cómo
 * se reconoce en el texto; el verificador hace el resto.
 *
 * Los patrones se comparan en minúscula y sin acentos. Conviene que sean
 * específicos: «sismo» a secas daría falsos positivos en cualquier artículo de
 * estructuras.
 *
 * Todas las fechas de este archivo salen de fuente oficial verificada. Lo que
 * no se pudo verificar no está aquí — ver `docs/PLAN-BLOG.md §6 ter`.
 */
export type Hecho = {
  id: string
  /** Qué pasó, en una línea. Sale en el mensaje de error del build. */
  descripcion: string
  /** Cuándo. Un artículo que lo mencione no puede fecharse antes. */
  fecha: string
  /** Cómo se reconoce en el texto, en minúscula y sin acentos. */
  patrones: string[]
}

export const hechos: Hecho[] = [
  {
    id: 'sismo-2026-08-10',
    descripcion: 'Sismo de magnitud 7,4 con epicentro en San José del Palmar',
    fecha: '2026-08-10',
    patrones: [
      'sismo del 10 de agosto',
      'terremoto del 10 de agosto',
      'san jose del palmar',
      'quedo en amarillo',
      'sticker',
      'fondo milagro',
    ],
  },
  {
    id: 'emergencia-2026',
    descripcion: 'Decreto 1261 de 2026, emergencia económica, social y ecológica',
    fecha: '2026-08-19',
    patrones: ['decreto 1261', 'emergencia economica, social y ecologica'],
  },
  {
    id: 'documentos-tipo-infraestructura-social',
    descripcion:
      'Documentos Tipo de Infraestructura Social, obligatorios desde el 16 de febrero de 2026',
    fecha: '2026-02-16',
    patrones: ['documentos tipo de infraestructura social'],
  },
  {
    id: 'salario-minimo-2026',
    descripcion: 'Salario mínimo de 2026, Decreto 1469 de 2025',
    fecha: '2025-12-30',
    patrones: ['salario minimo de 2026', 'salario minimo 2026'],
  },
  {
    id: 'uvt-2026',
    descripcion: 'Valor de la UVT para 2026, Resolución DIAN 000238 de 2025',
    fecha: '2025-12-15',
    patrones: ['uvt para 2026', 'uvt de 2026', '52.374'],
  },
  {
    id: 'iva-mantenimiento-vs-construccion',
    descripcion:
      'Concepto DIAN 003524 de 2025: la base gravable especial del artículo 1.3.1.7.9 no aplica a contratos de mantenimiento de inmuebles ni el AIU del 462-1 a los de construcción',
    fecha: '2025-03-25',
    patrones: [
      'concepto dian 003524',
      'concepto 3524',
      'contratos de mantenimiento de bienes inmuebles',
    ],
  },
  {
    id: 'ntc-4595-2025',
    descripcion: 'NTC 4595:2025, quinta edición, ratificada en noviembre de 2025',
    fecha: '2025-11-19',
    patrones: ['ntc 4595:2025', 'ntc 4595 de 2025', 'quinta edicion de la ntc 4595'],
  },
  {
    id: 'decreto-1166-2025',
    descripcion: 'Decreto 1166 de 2025, carta de responsabilidad',
    fecha: '2025-11-04',
    patrones: ['decreto 1166', 'carta de responsabilidad'],
  },
  {
    id: 'pot-cali-nulidad',
    descripcion:
      'Sentencia 129 del Tribunal Administrativo del Valle: nulidad del POT de Cali con efectos diferidos',
    fecha: '2024-04-25',
    patrones: ['nulidad del pot', 'pot de cali fue declarado nulo', 'efectos diferidos', 'sentencia 129'],
  },
  {
    id: 'pot-cali-nuevo-ctp',
    descripcion: 'El POT nuevo de Cali se radica ante el Consejo Territorial de Planeación',
    fecha: '2026-08-03',
    patrones: ['consejo territorial de planeacion', 'pot nuevo'],
  },
  {
    id: 'jamundi-concurso-adenda-04',
    descripcion:
      'Adenda 04 al concurso de curadores urbanos: inscripciones hasta el 16 de octubre de 2026',
    fecha: '2026-06-26',
    patrones: ['adenda 04', '16 de octubre de 2026'],
  },
  {
    id: 'decreto-74-2025-vencido',
    descripcion:
      'Cierre de la segunda prórroga extraordinaria de licencias del Decreto 74 de 2025',
    fecha: '2026-06-30',
    patrones: ['segunda prorroga', 'decreto 74 de 2025', 'decreto 0074'],
  },
  {
    id: 'jamundi-sentencia-125',
    descripcion:
      'Sentencia 125 del Juzgado Segundo Administrativo de Cali: suspensión de licencias en Jamundí',
    fecha: '2021-11-17',
    patrones: ['sentencia 125', 'acuavalle'],
  },
  {
    id: 'icoced',
    descripcion: 'El ICOCED reemplaza al ICCV como índice de costos del DANE',
    fecha: '2022-01-31',
    patrones: ['icoced', 'cali au'],
  },
  {
    id: 'vivienda-rural-dispersa',
    descripcion:
      'Decreto 1210 de 2020, que reglamenta el articulo 279 de la Ley 1955 de 2019: el uso de agua para consumo humano y domestico de la vivienda rural dispersa se inscribe en el Registro de Usuarios del Recurso Hidrico y esa inscripcion sustituye la concesion',
    fecha: '2020-09-02',
    patrones: [
      'decreto 1210',
      'registro de usuarios del recurso hidrico',
      'vivienda rural dispersa',
    ],
  },
  {
    id: 'ley-1955-2019',
    descripcion:
      'Ley 1955 de 2019, plan nacional de desarrollo 2018-2022. Su articulo 279 sigue vigente: el articulo 372 de la Ley 2294 de 2023 enumera los articulos derogados y el 279 no esta en esa lista',
    fecha: '2019-05-25',
    patrones: ['ley 1955'],
  },
  {
    id: 'ley-2294-2023',
    descripcion:
      'Ley 2294 de 2023, plan nacional de desarrollo 2022-2026. Su articulo 32 reescribio el articulo 10 de la Ley 388 y ordeno las determinantes de ordenamiento por niveles de prevalencia; su articulo 372 fija las derogatorias',
    fecha: '2023-05-19',
    patrones: ['ley 2294', 'nivel 1'],
  },
  {
    id: 'decreto-1783-2021',
    descripcion:
      'Decreto 1783 de 2021: la licencia de obra nueva pasa a 36 meses',
    fecha: '2021-12-21',
    patrones: ['decreto 1783', 'treinta y seis meses', '36 meses'],
  },
  {
    id: 'decreto-1890-2021',
    descripcion: 'Decreto 1890 de 2021: las expensas de curaduría se liquidan en UVT',
    fecha: '2021-12-30',
    patrones: ['decreto 1890', 'expensas en uvt'],
  },
  {
    id: 'decreto-1107-2026',
    descripcion:
      'Decreto Nacional 1107 de 2026: el Ministerio de Vivienda pasa a determinar el número de curadores urbanos, el curador saliente puede continuar provisionalmente, y toda la tabla de factores municipales queda con fecha de caducidad',
    fecha: '2026-08-06',
    patrones: ['decreto 1107', 'decreto nacional 1107'],
  },
  {
    id: 'dudot-bogota',
    descripcion:
      'Decreto Distrital 670 de 2025, Decreto Unico Distrital de Ordenamiento Territorial de Bogota. Compila los reglamentarios del POT, no el POT',
    fecha: '2025-12-27',
    patrones: ['dudot', 'decreto distrital 670'],
  },
  {
    id: 'bogota-decretos-unicos-sectoriales-2025',
    descripcion:
      'Decretos Unicos Sectoriales de Bogota 646 (Ambiente), 649 (Cultura) y 653 (Habitat) de 2025, que derogaron y compilaron los decretos distritales que se citan habitualmente',
    fecha: '2025-12-22',
    patrones: [
      'decreto distrital 646',
      'decreto distrital 649',
      'decreto distrital 653',
    ],
  },
  {
    id: 'concepto-sjd-pot-bogota',
    descripcion:
      'Concepto 2202413038 de la Secretaria Juridica Distrital: fija la ventana en que estuvieron suspendidos los efectos del POT de Bogota',
    fecha: '2024-09-13',
    patrones: ['concepto 2202413038'],
  },
  {
    id: 'pot-bogota-suspension-2022',
    descripcion:
      'Suspension provisional del POT de Bogota decretada el 14 de junio de 2022 por el Juzgado Quinto Administrativo Oral del Circuito de Bogota y revocada el 22 de agosto de 2022 por el Tribunal Administrativo de Cundinamarca. Los efectos estuvieron suspendidos entre el 16 de junio y el 31 de agosto de 2022',
    fecha: '2022-08-22',
    patrones: [
      'tribunal administrativo de cundinamarca',
      'juzgado quinto administrativo oral',
    ],
  },
  {
    id: 'pot-bogota-555-2021',
    descripcion:
      'Decreto Distrital 555 de 2021, revision general del POT de Bogota. Vigente desde el 30 de diciembre de 2021',
    fecha: '2021-12-29',
    patrones: ['decreto distrital 555', 'decreto 555 de 2021'],
  },
  {
    id: 'ley-1480-2011',
    descripcion:
      'Ley 1480 de 2011, estatuto del consumidor: garantia legal de diez anos sobre la estabilidad de la obra y de un ano sobre los acabados',
    fecha: '2011-10-12',
    patrones: ['ley 1480', 'estatuto del consumidor'],
  },
  {
    id: 'guia-ais-idiger-2018',
    descripcion:
      'Guía Técnica AIS–IDIGER para inspección después de un sismo, cuarta edición',
    fecha: '2018-03-01',
    patrones: ['guia tecnica', 'ais-idiger', 'ais–idiger'],
  },
  {
    id: 'ley-1796-2016',
    descripcion: 'Ley 1796 de 2016, vivienda segura y garantía decenal',
    fecha: '2016-07-13',
    patrones: ['ley 1796', 'garantia decenal', 'certificacion tecnica de ocupacion'],
  },
  {
    id: 'nsr-10',
    descripcion: 'NSR-10, Decreto 926 de 2010',
    fecha: '2010-03-19',
    patrones: ['nsr-10', 'decreto 926'],
  },
  {
    id: 'ley-1209-2008',
    descripcion: 'Ley 1209 de 2008, seguridad en piscinas',
    fecha: '2008-07-14',
    patrones: ['ley 1209'],
  },
  {
    id: 'ley-675-2001',
    descripcion: 'Ley 675 de 2001, régimen de propiedad horizontal',
    fecha: '2001-08-03',
    patrones: ['ley 675'],
  },
]
