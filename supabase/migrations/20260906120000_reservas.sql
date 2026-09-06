-- Reservas de la asesoría técnica.
--
-- Hasta ahora la reserva se cerraba por WhatsApp: alguien escribía, alguien del
-- estudio respondía y entre los dos acordaban una hora. Funciona mientras haya
-- alguien despierto. Con tráfico de campaña no lo hay a las once de la noche de
-- un viernes, que es justo cuando alguien decide que quiere construir.
--
-- La tabla se escribe contra `src/lib/agenda/`, que es donde vive la lógica, y
-- sigue el patrón de `leads`: la escritura entra solo por Server Action con la
-- clave de servicio, y RLS queda activa sin políticas.

do $$ begin
  create type reserva_estado as enum ('confirmada','cancelada','atendida','no_asistio');
exception when duplicate_object then null; end $$;

create table if not exists public.reservas (
  id           uuid primary key default gen_random_uuid(),

  -- Quién.
  nombre       text        not null,
  correo       text        not null,
  whatsapp     text        not null,
  mensaje      text,

  -- Cuándo. Se guarda el instante, no la hora local: `timestamptz` normaliza a
  -- UTC y cada quien lo lee en su zona. Guardar '10:00' sin zona es la forma
  -- clásica de que una cita se mueva sola cuando cambia algo del servidor.
  inicio       timestamptz not null,
  fin          timestamptz not null,

  -- El enlace de la videollamada. Nulo mientras no existan las credenciales de
  -- Google (X-02): la plantilla del correo ya contempla que falte y avisa de
  -- que llega aparte. Cuando entren, esto se rellena y nada más cambia.
  enlace       text,
  evento_google text,

  -- Gestión.
  estado       reserva_estado not null default 'confirmada',
  notas        text,

  -- En qué idioma reservó, para responderle en el mismo. Igual que en `leads`.
  locale       locale      not null default 'es',
  origen       text        not null default 'web',
  utm_source   text,
  utm_campaign text,

  -- Sube cada vez que la cita se mueve. Va al `.ics` como SEQUENCE, y es lo que
  -- hace que el calendario del cliente acepte la versión nueva y descarte la
  -- vieja en vez de dejarle las dos.
  secuencia    integer     not null default 0,

  ip_hash      text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- **La garantía que sostiene todo lo demás.**
--
-- Dos personas pueden abrir /agendar a la vez, ver la misma franja libre y
-- pulsar al mismo tiempo. Comprobar en el código si está ocupada no sirve: entre
-- la comprobación y la escritura caben las dos. Esto lo resuelve la base o no lo
-- resuelve nadie.
--
-- El índice es parcial: una reserva cancelada libera su franja, que es lo que
-- se espera de una cancelación.
create unique index if not exists reservas_franja_unica
  on public.reservas (inicio)
  where estado <> 'cancelada';

create index if not exists reservas_inicio_idx on public.reservas (inicio);
create index if not exists reservas_correo_idx on public.reservas (correo, created_at desc);

comment on index public.reservas_franja_unica is
  'Impide la doble reserva de una misma franja. Es una garantía de la base y no '
  'del código a propósito: entre comprobar y escribir caben dos peticiones.';

-- Mismo criterio que `leads`: ni anon ni authenticated tocan esta tabla. La
-- única vía es la Server Action con la clave de servicio, que salta RLS.
alter table public.reservas enable row level security;
