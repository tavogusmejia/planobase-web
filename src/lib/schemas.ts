import { z } from 'zod'
import { etapasProyecto, FUERA_DE_COLOMBIA } from '@content/site'
import { MUNICIPIO_DANE } from '@content/apbs/divipola'

/**
 * Formulario de contacto.
 *
 * **Los mensajes de error son claves, no frases.** El esquema lo usan el
 * navegador y la Server Action, y ninguno de los dos puede resolver un idioma:
 * uno no tiene `await` y el otro no sabe en qué idioma está mirando el
 * visitante. Así que aquí van las claves del espacio `formulario.errores` de
 * `messages/`, y quien las pinta —`ContactForm`— las traduce. Antes eran frases
 * en español, y en `/en` el formulario validaba en español.
 *
 * Parte de los 5 campos que ya existen en el sitio de Wix y añade dos que el
 * plan de campaña necesita:
 *
 * - `whatsapp`: el formulario actual no pide teléfono, pero todo el protocolo
 *   de seguimiento del plan corre por WhatsApp con un SLA de 1 hora. Sin este
 *   campo el lead entra muerto.
 * - `municipio` y `etapa`: son dos de las cuatro preguntas del formulario de
 *   Lead Ads. Preguntando lo mismo, los leads de Facebook y los de la web caen
 *   en el mismo esquema y se pueden comparar; si no, quedan dos bandejas que no
 *   se hablan.
 *
 * El campo libre de ciudad pasa a ser un selector en cascada sobre la DIVIPOLA
 * del DANE: cualifica mejor y evita "Cali", "cali", "Santiago de Cali" como
 * tres valores distintos.
 */
export const leadSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, 'errores.nombre')
    .max(120, 'errores.nombreLargo'),

  correo: z
    .string()
    .trim()
    .toLowerCase()
    .email('errores.correo')
    .max(160, 'errores.largo'),

  whatsapp: z
    .string()
    .trim()
    .min(7, 'errores.whatsapp')
    .max(25, 'errores.largo')
    .regex(/^[\d\s+()-]+$/, 'errores.whatsappFormato'),

  /**
   * Código DANE de cinco dígitos, o `EX000` si el proyecto está fuera del país.
   *
   * Se guarda el código y no el nombre porque en Colombia hay nombres de
   * municipio repetidos en departamentos distintos —Puerto Colombia está en el
   * Atlántico y en el Guainía, a 1.300 km— y porque el DANE y el decreto de
   * curadurías escriben el mismo municipio de dos formas: "Santiago de Cali" y
   * "Cali". El código es la única llave estable entre las dos tablas.
   *
   * La validación va contra el índice completo, así que un código inventado no
   * pasa aunque tenga cinco dígitos.
   */
  codigoMunicipio: z
    .string()
    .refine((c) => c === FUERA_DE_COLOMBIA.codigo || MUNICIPIO_DANE.has(c), {
      message: 'errores.municipio',
    }),

  etapa: z.enum(etapasProyecto, {
    message: 'errores.etapa',
  }),

  mensaje: z
    .string()
    .trim()
    .min(10, 'errores.mensaje')
    .max(4000, 'errores.largo'),

  declaracion: z.literal(true, {
    message: 'errores.declaracion',
  }),

  /**
   * Autorización de tratamiento de datos personales.
   *
   * **Es distinta de `declaracion` y por eso son dos casillas y no una.**
   * `declaracion` dice que los datos que dio son exactos; ésta dice que
   * autoriza a tratarlos. Juntarlas en una sola casilla las invalida a las dos:
   * el artículo 9 de la Ley 1581 de 2012 pide una autorización expresa, y una
   * casilla que además afirma otra cosa no es expresa respecto de ninguna.
   *
   * Va como `literal(true)` —obligatoria— porque sin ella no hay título para
   * tratar el dato, y sin tratar el dato no se puede responder. No es un
   * requisito de formulario: es la condición para que exista el servicio.
   */
  autorizacion: z.literal(true, {
    message: 'errores.autorizacion',
  }),

  /** Trampa antibots. Invisible para una persona; si viene llena, se descarta
   *  en silencio. Sin captcha de terceros. */
  sitioWeb: z.string().max(0).optional(),

  /**
   * El idioma en el que el visitante rellenó el formulario.
   *
   * No es un dato del lead: es lo que decide en qué idioma se le escribe el
   * acuse de recibo. La Server Action no puede averiguarlo por su cuenta —no
   * tiene la ruta— y adivinarlo por la cabecera del navegador es peor que
   * preguntarlo: alguien con el navegador en inglés que está leyendo el sitio
   * en español recibiría el acuse en inglés.
   *
   * Es opcional y cae a español, que es la regla del sitio: un envío sin idioma
   * —de una prueba, de un cliente viejo— manda el acuse en español antes que no
   * mandarlo.
   */
  idioma: z.string().max(5).optional(),

  /** Atribución de campaña. Permite saber qué anuncio produjo cada asesoría,
   *  que es el CPL por anuncio que pide el plan de medición. */
  utmSource: z.string().max(120).optional(),
  utmCampaign: z.string().max(120).optional(),
  promo: z.string().max(60).optional(),
})

export type LeadInput = z.infer<typeof leadSchema>

/**
 * `general` es una **clave**, igual que los errores de campo.
 *
 * Eran frases en español dentro de la Server Action, así que un visitante de
 * `/en` cuyo envío fallara leía el error en español, justo en el momento en que
 * ya había perdido el mensaje. Es el mismo fallo que este archivo ya había
 * corregido para los errores de campo, y por el mismo motivo: la acción no
 * puede resolver un idioma y quien pinta sí.
 */
export type LeadResult =
  | { ok: true }
  | { ok: false; errores: Partial<Record<keyof LeadInput, string>>; general?: string }
