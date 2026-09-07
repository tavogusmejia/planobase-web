-- Dos servicios agendables sobre el mismo calendario.
--
-- Hasta ahora todas las citas duraban quince minutos, y sobre esa premisa
-- descansaba la garantía anti-doble-reserva: un índice único sobre `inicio`.
-- Con dos duraciones deja de servir, y la razón conviene dejarla escrita porque
-- no salta a la vista: una primera llamada a las 10:00 y una asesoría técnica a
-- las 10:15 tienen `inicio` distinto —así que el índice las deja pasar— y
-- comparten quince minutos de la agenda de una persona que no se puede
-- desdoblar.
--
-- **Hay que pegarla a mano en el editor de Supabase.** No hay CI que corra
-- migraciones (R-10). El código de la aplicación funciona con el esquema viejo
-- mientras esto no esté aplicado: sin la columna `tipo` todo se comporta como
-- hasta hoy.

-- ── El tipo de cita ────────────────────────────────────────────────────────
--
-- Enum y no texto libre: son dos, se saben de antemano, y una reserva con un
-- tipo inventado no debería poder existir ni siquiera si alguien escribe SQL a
-- mano. El `default` es la gratuita, que es lo que eran todas las filas que ya
-- están guardadas.
do $$ begin
  create type cita_tipo as enum ('primera-llamada', 'asesoria-tecnica');
exception
  when duplicate_object then null;
end $$;

alter table public.reservas
  add column if not exists tipo cita_tipo not null default 'primera-llamada';

-- El precio en pesos, tal como estaba al reservar.
--
-- Se guarda en la fila y no se deduce del catálogo a posteriori: el día que la
-- asesoría suba a $60.000, las citas viejas tienen que seguir diciendo lo que
-- se cobró de verdad. Un precio derivado reescribe la historia.
alter table public.reservas
  add column if not exists precio_cop integer not null default 0;

-- Costura para el cobro, que hoy se hace a mano.
--
-- `null` en la primera llamada, que no se cobra. `'pendiente'` o `'pagado'` en
-- la de pago, movido por una persona desde WhatsApp mientras no exista Wompi.
-- La columna entra ahora, con la migración que ya toca esta tabla, para que el
-- día que entre la pasarela no haya que volver a migrar en caliente.
alter table public.reservas
  add column if not exists pago_estado text;

-- ── La garantía anti-solape ────────────────────────────────────────────────
--
-- No hace falta `btree_gist`: GiST indexa rangos de forma nativa. Esa extensión
-- solo se necesitaría para meter una columna escalar con `=` en la misma
-- restricción — el día que atienda alguien más y haya que añadir
-- `profesional_id with =`.
--
-- `tstzrange(timestamptz, timestamptz, text)` es IMMUTABLE, así que la
-- expresión se puede indexar. La trampa clásica es aplicarlo sobre un
-- `timestamp` sin zona, que arrastra un cast STABLE; aquí las dos columnas ya
-- son `timestamptz`.
--
-- `'[)'` es semiabierto y coincide con `solapan()` en TypeScript: una cita que
-- termina a las 10:00 y otra que empieza a las 10:00 no chocan. Si las dos
-- convenciones divergieran, el sitio ofrecería horas que la base rechaza.
alter table public.reservas
  drop constraint if exists reservas_sin_solape;

alter table public.reservas
  add constraint reservas_sin_solape
  exclude using gist (tstzrange(inicio, fin, '[)') with &&)
  where (estado in ('confirmada', 'atendida', 'no_asistio'));

comment on constraint reservas_sin_solape on public.reservas is
  'Dos citas no pueden pisarse, midan lo que midan. Sustituye al índice único '
  'sobre `inicio`, que solo funcionaba mientras todas duraran quince minutos.';

-- Una cita que termina antes de empezar no es un caso raro: es una fila que no
-- debería poder escribirse. Y sin esto, `tstzrange` lanzaría al construirla.
alter table public.reservas
  drop constraint if exists reservas_rango_valido;

alter table public.reservas
  add constraint reservas_rango_valido check (fin > inicio);

-- ── Se retira el índice único ──────────────────────────────────────────────
--
-- No estorbaba: dos reservas con el mismo `inicio` siempre se solapan, así que
-- las dos restricciones coincidirían. Se retira porque con las dos activas el
-- SQLSTATE que llega a la aplicación depende de cuál compruebe Postgres
-- primero, y un código de error no determinista convierte el mensaje de
-- «alguien tomó esa hora mientras usted llenaba el formulario» en una lotería.
drop index if exists public.reservas_franja_unica;

-- ── `updated_at` no la actualizaba nadie ───────────────────────────────────
--
-- Estaba declarada con `default now()` desde el primer día y ninguna escritura
-- la tocaba, así que decía cuándo se creó la fila y no cuándo cambió. Con el
-- cobro moviéndose a mano —de `pendiente` a `pagado`— empieza a importar de
-- verdad saber cuándo fue.
create or replace function public.tocar_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists reservas_updated_at on public.reservas;

create trigger reservas_updated_at
  before update on public.reservas
  for each row execute function public.tocar_updated_at();
