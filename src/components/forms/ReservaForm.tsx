'use client'

import { useEffect, useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@/i18n/navigation'
import { reservaSchema, type ReservaInput } from '@/lib/agenda/schema'
import { crearReserva } from '@/app/actions/reservas'
import { ContactoDirecto } from '@/components/ui/ContactoDirecto'
import { cn } from '@/lib/utils'
import { track } from '@/lib/analytics'

/**
 * Reservar la asesoría sin hablar con nadie.
 *
 * Hasta ahora `/agendar` cerraba por WhatsApp, y eso necesita a alguien
 * despierto al otro lado. Con tráfico de campaña falla justo cuando más
 * importa: a las once de la noche de un viernes.
 *
 * **Las franjas se piden después de montar, no se pintan en el servidor.**
 * `/agendar` es la página donde aterriza el anuncio y tiene que salir del build
 * ya hecha; si tuviera que consultar la agenda para renderizarse, cada visita
 * ejecutaría una función y la página perdería su ventaja. Así se pinta al
 * instante y el calendario aparece un momento después, mientras se lee.
 *
 * **Si la agenda falla, WhatsApp sigue ahí.** No es un adorno: es el camino que
 * ya funcionaba, y quitarlo para forzar el calendario dejaría sin salida a quien
 * quería hablar con el estudio. Una agenda caída no puede costar un encargo.
 */

type Franja = { inicio: string; fin: string }

const campoBase =
  'w-full border-0 border-b border-line-control bg-transparent px-0 py-3 text-body ' +
  'text-ink outline-none transition-colors placeholder:text-muted ' +
  'focus:border-accent focus:ring-0'

/** Los dos atributos que atan un control con su ayuda y su error. */
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

export function ReservaForm() {
  const t = useTranslations('reserva')
  const tf = useTranslations('formulario')
  const idioma = useLocale()

  const err = (clave?: string) =>
    clave ? (t(clave as Parameters<typeof t>[0]) as string) : undefined

  const [franjas, setFranjas] = useState<Franja[] | null>(null)
  const [hayAgenda, setHayAgenda] = useState(true)
  const [elegida, setElegida] = useState<string | null>(null)
  const [listo, setListo] = useState(false)
  const [general, setGeneral] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ReservaInput>({
    resolver: zodResolver(reservaSchema),
    mode: 'onBlur',
  })

  /** Pide las franjas al montar, y las vuelve a pedir si una carrera se pierde. */
  const cargar = async () => {
    try {
      const r = await fetch('/api/agenda', { cache: 'no-store' })
      const d = (await r.json()) as { franjas: Franja[]; hayAgenda: boolean }
      setFranjas(d.franjas)
      setHayAgenda(d.hayAgenda)
    } catch {
      setFranjas([])
      setHayAgenda(false)
    }
  }

  useEffect(() => {
    void cargar()
    const q = new URLSearchParams(window.location.search)
    const src = q.get('utm_source')
    const camp = q.get('utm_campaign')
    if (src) setValue('utmSource', src)
    if (camp) setValue('utmCampaign', camp)
  }, [setValue])

  /* Agrupadas por día local. Se hace aquí y no en el servidor porque el día
     depende de la zona de quien mira, y quien mira puede no estar en Colombia. */
  const dias = useMemo(() => {
    if (!franjas) return []
    const mapa = new Map<string, Franja[]>()
    for (const f of franjas) {
      const clave = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Bogota',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date(f.inicio))
      const lista = mapa.get(clave)
      if (lista) lista.push(f)
      else mapa.set(clave, [f])
    }
    return [...mapa.entries()]
  }, [franjas])

  const etiquetaDia = (iso: string) =>
    new Intl.DateTimeFormat(idioma === 'en' ? 'en-GB' : 'es-CO', {
      timeZone: 'America/Bogota',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(new Date(`${iso}T12:00:00Z`))

  const etiquetaHora = (iso: string) =>
    new Intl.DateTimeFormat(idioma === 'en' ? 'en-GB' : 'es-CO', {
      timeZone: 'America/Bogota',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date(iso))

  if (listo) {
    return (
      <div className="border-l-2 border-signal pl-6">
        <p className="text-h4 text-ink">{t('listoTitular')}</p>
        <p className="text-body measure mt-4 text-ink-soft">{t('listoTexto')}</p>
      </div>
    )
  }

  /* Sin agenda no se enseña un calendario vacío ni un error: se enseña la vía
     que sí funciona. */
  if (franjas !== null && (!hayAgenda || franjas.length === 0)) {
    return (
      <div>
        <p className="text-body measure text-ink-soft">
          {hayAgenda ? t('sinFranjas') : t('general.sinAgenda')}
        </p>
        <ContactoDirecto
          origen="web/agendar-sin-franjas"
          mensaje="Hola Plano Base, quiero agendar la asesoría."
        />
      </div>
    )
  }

  if (franjas === null) {
    return <p className="text-small text-muted">{t('cargando')}…</p>
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (data) => {
        setGeneral(null)
        const res = await crearReserva({ ...data, idioma })
        if (res.ok) {
          track('Schedule', { content_name: 'asesoria' })
          setListo(true)
          return
        }
        if (res.general) {
          setGeneral(err(res.general) ?? null)
          /* Si la franja se la llevó otro, la lista que se está mirando ya es
             mentira. Se recarga y se suelta la elección, para que la persona
             no vuelva a pulsar sobre una hora que ya no existe. */
          if (res.general.includes('franja')) {
            setElegida(null)
            setValue('inicio', '')
            void cargar()
          }
        }
      })}
      className="space-y-10"
    >
      <div>
        <h2 className="text-h4 text-ink">{t('titulo')}</h2>
        <p className="text-block mt-2 text-muted">{t('zona')}</p>

        {elegida ? (
          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <p className="text-h5 text-ink">
              {etiquetaDia(
                new Intl.DateTimeFormat('en-CA', {
                  timeZone: 'America/Bogota',
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }).format(new Date(elegida)),
              )}{' '}
              · {etiquetaHora(elegida)}
            </p>
            <button
              type="button"
              onClick={() => {
                setElegida(null)
                setValue('inicio', '')
              }}
              className="text-block text-accent underline-offset-4 hover:underline"
            >
              {t('otraHora')}
            </button>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {dias.map(([dia, delDia]) => (
              <div key={dia}>
                <p className="text-block text-muted">{etiquetaDia(dia)}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {delDia.map((f) => (
                    <button
                      key={f.inicio}
                      type="button"
                      onClick={() => {
                        setElegida(f.inicio)
                        setValue('inicio', f.inicio, { shouldValidate: true })
                      }}
                      className="text-small border border-line-control px-4 py-2 tabular-nums text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {etiquetaHora(f.inicio)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <input type="hidden" {...register('inicio')} />
        {errors.inicio?.message ? (
          <p role="alert" className="text-small mt-3 text-accent-deep">
            {err(errors.inicio.message)}
          </p>
        ) : null}
      </div>

      {/* Los datos solo aparecen cuando ya hay hora elegida: pedirlos antes es
          pedirle a alguien que se comprometa sin saber si hay sitio. */}
      {elegida ? (
        <div className="space-y-9 border-t border-line pt-10">
          <Campo id="r-nombre" label={tf('nombre')} error={err(errors.nombre?.message)}>
            <input
              id="r-nombre"
              autoComplete="name"
              className={campoBase}
              {...aria('r-nombre', err(errors.nombre?.message))}
              {...register('nombre')}
            />
          </Campo>

          <Campo id="r-correo" label={tf('correo')} error={err(errors.correo?.message)}>
            <input
              id="r-correo"
              type="email"
              autoComplete="email"
              className={campoBase}
              {...aria('r-correo', err(errors.correo?.message))}
              {...register('correo')}
            />
          </Campo>

          <Campo id="r-whatsapp" label={tf('whatsapp')} error={err(errors.whatsapp?.message)}>
            <input
              id="r-whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="300 000 0000"
              className={campoBase}
              {...aria('r-whatsapp', err(errors.whatsapp?.message))}
              {...register('whatsapp')}
            />
          </Campo>

          <Campo
            id="r-mensaje"
            label={t('mensaje')}
            ayuda={t('mensajeAyuda')}
            error={err(errors.mensaje?.message)}
          >
            <textarea
              id="r-mensaje"
              rows={3}
              className={cn(campoBase, 'resize-y')}
              {...aria('r-mensaje', err(errors.mensaje?.message), true)}
              {...register('mensaje')}
            />
          </Campo>

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
                  {tf('autorizacionEnlace')}
                </Link>
              </span>
            </label>
            {errors.autorizacion?.message ? (
              <p role="alert" className="text-small mt-2 text-accent-deep">
                {err(errors.autorizacion.message)}
              </p>
            ) : null}
          </div>

          {/* Trampa antibots, fuera de pantalla y no oculta con display:none,
              para que un lector de pantalla la salte y un bot la rellene. */}
          <div aria-hidden className="absolute left-[-9999px]">
            <label htmlFor="r-sitioWeb">{tf('trampa')}</label>
            <input id="r-sitioWeb" tabIndex={-1} autoComplete="off" {...register('sitioWeb')} />
          </div>

          {general ? (
            <div role="alert" className="border-l-2 border-accent-deep pl-4">
              <p className="text-small text-ink">{general}</p>
              <ContactoDirecto
                origen="web/agendar-fallo"
                mensaje="Hola Plano Base, no pude agendar la asesoría desde el sitio."
              />
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-block bg-signal px-8 py-4 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-85 disabled:opacity-50"
          >
            {isSubmitting ? t('reservando') : t('reservar')}
          </button>
        </div>
      ) : null}
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
        <p id={`${id}-ayuda`} className="text-block measure mt-1 text-muted">
          {ayuda}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-small mt-2 text-accent-deep">
          {error}
        </p>
      ) : null}
    </div>
  )
}
