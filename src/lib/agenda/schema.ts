import { z } from 'zod'

/**
 * El formulario de reserva.
 *
 * Menos campos que el de contacto y a propósito: aquí la persona ya decidió
 * hablar, y cada campo de más es una oportunidad de abandonar. Municipio y
 * etapa no se piden — se preguntan en la llamada, que es donde se responden
 * mejor.
 *
 * Los mensajes son claves y no frases, igual que en `src/lib/schemas.ts`: el
 * esquema lo usan el navegador y la Server Action, y ninguno de los dos puede
 * resolver un idioma. Quien las pinta las traduce.
 */
export const reservaSchema = z.object({
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

  /** Opcional: quien quiera adelantar contexto puede, y quien no, no. */
  mensaje: z.string().trim().max(2000, 'errores.largo').optional(),

  /**
   * El instante elegido, en ISO y UTC.
   *
   * Se valida que sea una fecha real, pero **que la franja siga libre no se
   * comprueba aquí**: entre validar y escribir caben otras peticiones. Eso lo
   * garantiza el índice único de la tabla, que es el único sitio donde la
   * garantía es de verdad.
   */
  inicio: z
    .string()
    .refine((s) => !Number.isNaN(Date.parse(s)), 'errores.franja'),

  autorizacion: z.literal(true, { message: 'errores.autorizacion' }),

  /** Trampa antibots, como en el formulario de contacto. */
  sitioWeb: z.string().max(0).optional(),

  /**
   * Sello de tiempo firmado por el servidor, igual que en el de contacto.
   *
   * La forma se acota aquí y el fondo no: la firma solo la puede comprobar
   * quien tiene el secreto, y este esquema lo lee también el navegador. El
   * mecanismo entero, con lo que garantiza y lo que no, está en
   * `src/lib/formulario/sello.ts`.
   */
  selloTiempo: z.string().max(200).optional(),

  idioma: z.string().max(5).optional(),
  utmSource: z.string().max(120).optional(),
  utmCampaign: z.string().max(120).optional(),
})

export type ReservaInput = z.infer<typeof reservaSchema>

export type ReservaResult =
  | { ok: true; inicio: string }
  | {
      ok: false
      errores: Partial<Record<keyof ReservaInput, string>>
      general?: string
    }
