'use client'

import { useEffect, useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, type LeadInput } from '@/lib/schemas'
import { enviarLead } from '@/app/actions/leads'
import { etapasProyecto, contacto, FUERA_DE_COLOMBIA } from '@content/site'
import {
  DEPARTAMENTOS_DANE,
  etiquetaMunicipio,
  municipiosDelDepartamento,
} from '@content/apbs/divipola'
import { cn } from '@/lib/utils'
import { WhatsAppLink } from '@/components/ui/WhatsAppLink'
import { ContactoDirecto } from '@/components/ui/ContactoDirecto'
import { track } from '@/lib/analytics'

/**
 * Los dos atributos que conectan un control con lo que se dice de él.
 *
 * Sin ellos, un lector de pantalla al enfocar el campo del correo anuncia
 * «Correo» y se calla: ni el texto de ayuda que está debajo, ni el motivo por
 * el que el campo quedó en rojo. El `<label>` y el `role="alert"` ya estaban;
 * lo que faltaba era esto, que es lo que los ata al control.
 *
 * `aria-describedby` acepta varios ids separados por espacio y los lee en
 * orden, así que la ayuda va antes que el error. Los dos devuelven `undefined`
 * cuando no aplican, y no una cadena vacía: `aria-describedby=""` apunta a un
 * id que no existe, y algunos lectores anuncian el fallo de referencia.
 */
function aria(
  id: string,
  error?: string,
  hayAyuda = false,
): { 'aria-describedby'?: string; 'aria-invalid'?: true } {
  const ids = [hayAyuda ? `${id}-ayuda` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(' ')
  return {
    'aria-describedby': ids === '' ? undefined : ids,
    'aria-invalid': error ? true : undefined,
  }
}

const campoBase =
  'w-full border-0 border-b border-line-control bg-transparent px-0 py-3 text-body ' +
  'text-ink outline-none transition-colors placeholder:text-muted ' +
  'focus:border-accent focus:ring-0'

export function ContactForm() {
  const t = useTranslations('formulario')
  const tc = useTranslations('cta')
  const idioma = useLocale()

  /* El esquema devuelve claves y no frases: lo usan el navegador y la Server
     Action, y ninguno de los dos puede resolver el idioma. Aquí sí. */
  const err = (clave?: string) =>
    clave ? t(clave as Parameters<typeof t>[0]) : undefined

  const [enviado, setEnviado] = useState(false)
  const [general, setGeneral] = useState<string | null>(null)

  /* El departamento no viaja en el lead: solo sirve para acotar la lista de
     municipios. Lo que se envía es el código DANE, que ya lo lleva dentro. */
  const [departamento, setDepartamento] = useState('')

  const opciones = useMemo(
    () =>
      departamento === FUERA_DE_COLOMBIA.departamento
        ? [{ codigo: FUERA_DE_COLOMBIA.codigo, nombre: FUERA_DE_COLOMBIA.nombre }]
        : municipiosDelDepartamento(departamento),
    [departamento],
  )

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: 'onBlur',
  })

  /* Cuando el departamento cambia, el municipio se resuelve solo si no hay
     nada que elegir —Bogotá tiene uno solo, y «fuera de Colombia» también— y se
     limpia en el resto, para que nadie envíe el municipio del departamento
     anterior. Va en un efecto y no en el `onChange` porque el `<select>` no es
     controlado: asignarle un valor cuya `<option>` todavía no se ha pintado no
     tiene efecto en el DOM. */
  useEffect(() => {
    const unico = opciones.length === 1 ? opciones[0] : undefined
    setValue('codigoMunicipio', unico ? unico.codigo : '', {
      shouldValidate: false,
    })
  }, [opciones, setValue])

  /* Atribución de campaña: se lee de la URL al montar. Así se sabe qué anuncio
     produjo cada asesoría, que es el CPL por anuncio del plan de medición. */
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const src = q.get('utm_source')
    const camp = q.get('utm_campaign')
    const promo = q.get('promo')
    if (src) setValue('utmSource', src)
    if (camp) setValue('utmCampaign', camp)
    if (promo) setValue('promo', promo)
  }, [setValue])

  if (enviado) {
    return (
      <div className="border-t border-accent pt-8">
        <h3 className="text-h3 text-ink">{t('recibido')}</h3>
        <p className="text-body measure mt-4 text-ink-soft">
          {t('recibidoTexto')}
        </p>
        <WhatsAppLink
          numero={contacto.whatsapp}
          mensaje="Hola Plano Base, acabo de enviar el formulario de la web."
          origen="web/formulario-enviado"
          className="text-block mt-8 inline-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
        >
          {tc('escribirWhatsapp')}
        </WhatsAppLink>
      </div>
    )
  }

  /* Los errores, resueltos una sola vez: cada uno lo necesitan dos sitios —el
     párrafo que lo pinta y el `aria` del control que lo describe— y repetir la
     expresión en los dos es la forma de que un día dejen de coincidir. */
  const e = {
    nombre: err(errors.nombre?.message),
    correo: err(errors.correo?.message),
    whatsapp: err(errors.whatsapp?.message),
    municipio: err(errors.codigoMunicipio?.message),
    etapa: err(errors.etapa?.message),
    mensaje: err(errors.mensaje?.message),
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (data) => {
        setGeneral(null)
        /* El idioma viaja con el envío: la Server Action lo necesita para
           escribir el acuse de recibo, y no puede deducirlo. */
        const res = await enviarLead({ ...data, idioma })
        if (res.ok) {
          // Las dos dimensiones con las que se compara el costo por lead entre
          // anuncios: de dónde es y en qué etapa está.
          track('Lead', {
            content_name:
              etiquetaMunicipio(data.codigoMunicipio) ??
              FUERA_DE_COLOMBIA.nombre,
            content_category: data.etapa,
          })
          setEnviado(true)
          return
        }
        for (const [campo, mensaje] of Object.entries(res.errores)) {
          setError(campo as keyof LeadInput, { message: mensaje })
        }
        /* `general` llega como clave, no como frase, por lo mismo que los
           errores de campo: la acción no sabe en qué idioma está mirando el
           visitante y aquí sí se sabe. */
        if (res.general) setGeneral(err(res.general) ?? null)
      })}
      className="space-y-9"
    >
      <Campo
        id="nombre"
        label={t('nombre')}
        ayuda={t('nombreAyuda')}
        error={e.nombre}
      >
        <input
          id="nombre"
          autoComplete="name"
          className={campoBase}
          {...aria('nombre', e.nombre, true)}
          {...register('nombre')}
        />
      </Campo>

      <Campo
        id="correo"
        label={t('correo')}
        ayuda={t('correoAyuda')}
        error={e.correo}
      >
        <input
          id="correo"
          type="email"
          autoComplete="email"
          className={campoBase}
          {...aria('correo', e.correo, true)}
          {...register('correo')}
        />
      </Campo>

      <Campo
        id="whatsapp"
        label={t('whatsapp')}
        ayuda={t('whatsappAyuda')}
        error={e.whatsapp}
      >
        <input
          id="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="300 000 0000"
          className={campoBase}
          {...aria('whatsapp', e.whatsapp, true)}
          {...register('whatsapp')}
        />
      </Campo>

      <Campo
        id="departamento"
        label={t('ubicacion')}
        ayuda={t('ubicacionAyuda')}
        error={e.municipio}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <select
            id="departamento"
            aria-label={t('departamento')}
            aria-describedby="departamento-ayuda"
            value={departamento}
            className={campoBase}
            onChange={(e) => setDepartamento(e.target.value)}
          >
            <option value="" disabled>
              {t('departamento')}
            </option>
            {DEPARTAMENTOS_DANE.map((d) => (
              <option key={d.codigo} value={d.codigo}>
                {d.nombre}
              </option>
            ))}
            <option value={FUERA_DE_COLOMBIA.departamento}>
              {FUERA_DE_COLOMBIA.nombre}
            </option>
          </select>

          <select
            id="codigoMunicipio"
            aria-label={t('municipio')}
            defaultValue=""
            disabled={departamento === ''}
            {...aria('departamento', e.municipio, true)}
            className={cn(campoBase, departamento === '' && 'opacity-50')}
            {...register('codigoMunicipio')}
          >
            <option value="" disabled>
              {t('municipio')}
            </option>
            {opciones.map((m) => (
              <option key={m.codigo} value={m.codigo}>
                {m.nombre}
              </option>
            ))}
          </select>
        </div>
      </Campo>

      <Campo
        id="etapa"
        label={t('etapa')}
        error={e.etapa}
      >
        <select
          id="etapa"
          defaultValue=""
          className={campoBase}
          {...aria('etapa', e.etapa)}
          {...register('etapa')}
        >
          <option value="" disabled>
            {t('elegir')}
          </option>
          {etapasProyecto.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </Campo>

      <Campo
        id="mensaje"
        label={t('mensaje')}
        ayuda={t('mensajeAyuda')}
        error={e.mensaje}
      >
        <textarea
          id="mensaje"
          rows={5}
          className={cn(campoBase, 'resize-y')}
          {...aria('mensaje', e.mensaje, true)}
          {...register('mensaje')}
        />
      </Campo>

      {/* Trampa antibots. Fuera de pantalla, no oculta con display:none, para
          que los lectores de pantalla la salten pero los bots la rellenen. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="sitioWeb">{t('trampa')}</label>
        <input
          id="sitioWeb"
          tabIndex={-1}
          autoComplete="off"
          {...register('sitioWeb')}
        />
      </div>

      {/* Dos casillas y no una, y no es burocracia: dicen cosas distintas.
          La primera afirma que los datos son exactos; la segunda autoriza a
          tratarlos, que es lo que exige el artículo 9 de la Ley 1581 de 2012.
          Fundirlas en una sola las invalida a las dos, porque una casilla que
          afirma dos cosas a la vez no es expresa respecto de ninguna.

          Ninguna viene marcada de fábrica: una casilla premarcada no recoge
          una autorización, recoge un descuido. */}
      <div className="space-y-5">
        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1.5 size-4 shrink-0 accent-[var(--color-ink)]"
              {...register('declaracion')}
            />
            <span className="text-small text-ink">{t('declaracion')}</span>
          </label>
          {/* Pintaba `errors.declaracion.message` en crudo, y como el esquema
              devuelve claves y no frases, al visitante le salía la cadena
              «errores.declaracion» literal en el único sitio donde el
              formulario le dice que algo va mal. */}
          {errors.declaracion?.message ? (
            <p className="text-small mt-2 text-accent-deep">
              {err(errors.declaracion.message)}
            </p>
          ) : null}
        </div>

        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1.5 size-4 shrink-0 accent-[var(--color-ink)]"
              {...register('autorizacion')}
            />
            <span className="text-small text-ink">
              {t('autorizacion')}{' '}
              <Link
                href="/politica-de-datos"
                className="underline underline-offset-4 hover:text-accent"
              >
                {t('autorizacionEnlace')}
              </Link>
            </span>
          </label>
          {errors.autorizacion?.message ? (
            <p className="text-small mt-2 text-accent-deep">
              {err(errors.autorizacion.message)}
            </p>
          ) : null}
        </div>
      </div>

      {/* El fallo del envío es el único punto del sitio donde un error cuesta
          un encargo: el mensaje ya se perdió y el estudio no tiene con qué
          contactar a quien lo escribió. Así que aquí no basta con explicar lo
          que pasó — hay que dejarle una salida que se pulse.

          Antes esto era un `<p>` con la frase «escríbanos por WhatsApp», sin
          enlace y sin número. */}
      {general ? (
        <div
          role="alert"
          className="border-l-2 border-accent-deep pl-4"
        >
          <p className="text-small text-ink">{general}</p>
          <ContactoDirecto
            origen="web/formulario-fallo"
            mensaje="Hola Plano Base, el formulario del sitio no me dejó enviar el mensaje."
          />
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-block bg-ink px-8 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {isSubmitting ? t('enviando') : t('enviar')}
      </button>
    </form>
  )
}

function Campo({
  id,
  label,
  ayuda,
  error,
  children,
}: {
  id: string
  label: string
  ayuda?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="text-small block text-ink">
        {label}
      </label>
      {/* Los ids son los que apunta el `aria-describedby` de cada control.
          Si cambian aquí, hay que cambiarlos en `aria()`. */}
      {ayuda ? (
        <p id={`${id}-ayuda`} className="text-block measure mt-1 text-muted">
          {ayuda}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-small mt-2 text-accent-deep"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}
