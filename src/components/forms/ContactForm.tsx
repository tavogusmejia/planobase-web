'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, type LeadInput } from '@/lib/schemas'
import { enviarLead } from '@/app/actions/leads'
import { etapasProyecto, municipios, contacto } from '@content/site'
import { cn, whatsappUrl } from '@/lib/utils'

const campoBase =
  'w-full border-0 border-b border-line bg-transparent px-0 py-3 text-body ' +
  'text-ink outline-none transition-colors placeholder:text-muted ' +
  'focus:border-accent focus:ring-0'

export function ContactForm() {
  const [enviado, setEnviado] = useState(false)
  const [general, setGeneral] = useState<string | null>(null)

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
        <h3 className="text-h3 text-ink">Recibimos tu mensaje.</h3>
        <p className="text-body measure mt-4 text-ink-soft">
          Te escribimos por WhatsApp dentro de la próxima hora hábil. Si prefieres
          adelantar la conversación, puedes escribirnos ahora mismo.
        </p>
        <a
          href={whatsappUrl(
            contacto.whatsapp,
            'Hola Plano Base, acabo de enviar el formulario de la web.',
          )}
          rel="noopener noreferrer"
          target="_blank"
          className="text-block mt-8 inline-block bg-signal px-7 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
        >
          Escribir por WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (data) => {
        setGeneral(null)
        const res = await enviarLead(data)
        if (res.ok) {
          setEnviado(true)
          return
        }
        for (const [campo, mensaje] of Object.entries(res.errores)) {
          setError(campo as keyof LeadInput, { message: mensaje })
        }
        if (res.general) setGeneral(res.general)
      })}
      className="space-y-9"
    >
      <Campo
        id="nombre"
        label="Nombre completo"
        ayuda="Para dirigirnos a ti correctamente."
        error={errors.nombre?.message}
      >
        <input
          id="nombre"
          autoComplete="name"
          className={campoBase}
          {...register('nombre')}
        />
      </Campo>

      <Campo
        id="correo"
        label="Correo electrónico"
        ayuda="Para enviarte la propuesta o la información inicial."
        error={errors.correo?.message}
      >
        <input
          id="correo"
          type="email"
          autoComplete="email"
          className={campoBase}
          {...register('correo')}
        />
      </Campo>

      <Campo
        id="whatsapp"
        label="WhatsApp"
        ayuda="Es por donde respondemos más rápido."
        error={errors.whatsapp?.message}
      >
        <input
          id="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="300 000 0000"
          className={campoBase}
          {...register('whatsapp')}
        />
      </Campo>

      <Campo
        id="municipio"
        label="¿Dónde se ubica el proyecto?"
        ayuda="Nos permite analizar el contexto y la normativa local."
        error={errors.municipio?.message}
      >
        <select
          id="municipio"
          defaultValue=""
          className={campoBase}
          {...register('municipio')}
        >
          <option value="" disabled>
            Elige un municipio
          </option>
          {municipios.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </Campo>

      <Campo
        id="etapa"
        label="¿En qué etapa está?"
        error={errors.etapa?.message}
      >
        <select
          id="etapa"
          defaultValue=""
          className={campoBase}
          {...register('etapa')}
        >
          <option value="" disabled>
            Elige una opción
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
        label="Cuéntanos tu idea o necesidad"
        ayuda="Puedes incluir tu presupuesto. No compromete nada y nos ayuda a darte una propuesta realista."
        error={errors.mensaje?.message}
      >
        <textarea
          id="mensaje"
          rows={5}
          className={cn(campoBase, 'resize-y')}
          {...register('mensaje')}
        />
      </Campo>

      {/* Trampa antibots. Fuera de pantalla, no oculta con display:none, para
          que los lectores de pantalla la salten pero los bots la rellenen. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="sitioWeb">No rellenar</label>
        <input
          id="sitioWeb"
          tabIndex={-1}
          autoComplete="off"
          {...register('sitioWeb')}
        />
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1.5 size-4 shrink-0 accent-[var(--color-ink)]"
            {...register('declaracion')}
          />
          <span className="text-small text-ink">
            Declaro que la información que he facilitado es exacta y completa.
          </span>
        </label>
        {errors.declaracion?.message ? (
          <p className="text-small mt-2 text-accent-deep">
            {errors.declaracion.message}
          </p>
        ) : null}
      </div>

      {general ? (
        <p
          role="alert"
          className="text-small border-l-2 border-accent-deep pl-4 text-ink"
        >
          {general}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-block bg-ink px-8 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {isSubmitting ? 'Enviando' : 'Enviar proyecto'}
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
      {ayuda ? (
        <p className="text-block measure mt-1 text-muted">{ayuda}</p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p role="alert" className="text-small mt-2 text-accent-deep">
          {error}
        </p>
      ) : null}
    </div>
  )
}
