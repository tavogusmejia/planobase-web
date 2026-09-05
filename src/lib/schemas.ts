import { z } from 'zod'
import { etapasProyecto, FUERA_DE_COLOMBIA } from '@content/site'
import { MUNICIPIO_DANE } from '@content/apbs/divipola'

/**
 * Formulario de contacto.
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
    .min(2, 'Escribe tu nombre completo.')
    .max(120, 'El nombre es demasiado largo.'),

  correo: z
    .string()
    .trim()
    .toLowerCase()
    .email('Revisa el correo: parece que falta algo.')
    .max(160),

  whatsapp: z
    .string()
    .trim()
    .min(7, 'Necesitamos un número para responderte.')
    .max(25)
    .regex(/^[\d\s+()-]+$/, 'El número solo puede llevar dígitos y + ( ) -'),

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
      message: 'Elige dónde se ubica el proyecto.',
    }),

  etapa: z.enum(etapasProyecto, {
    message: 'Cuéntanos en qué etapa está.',
  }),

  mensaje: z
    .string()
    .trim()
    .min(10, 'Cuéntanos un poco más, aunque sean dos líneas.')
    .max(4000),

  declaracion: z.literal(true, {
    message: 'Necesitamos que confirmes la declaración para continuar.',
  }),

  /** Trampa antibots. Invisible para una persona; si viene llena, se descarta
   *  en silencio. Sin captcha de terceros. */
  sitioWeb: z.string().max(0).optional(),

  /** Atribución de campaña. Permite saber qué anuncio produjo cada asesoría,
   *  que es el CPL por anuncio que pide el plan de medición. */
  utmSource: z.string().max(120).optional(),
  utmCampaign: z.string().max(120).optional(),
  promo: z.string().max(60).optional(),
})

export type LeadInput = z.infer<typeof leadSchema>

export type LeadResult =
  | { ok: true }
  | { ok: false; errores: Partial<Record<keyof LeadInput, string>>; general?: string }
