-- Tabla de leads del formulario de contacto.
--
-- Se escribe contra `src/lib/schemas.ts`, que es el contrato real del
-- formulario, y no contra `wix-migration/05-prompts/01-supabase-schema.sql`,
-- que es material de referencia y no está aplicado a ninguna base. Dos razones
-- concretas, no de estilo:
--
--   1. Aquella tabla no tiene columna para `whatsapp` ni para `etapa`, que son
--      los dos campos que el plan de campaña necesita. Un lead sin WhatsApp
--      entra muerto: el SLA de respuesta de una hora corre por ahí.
--   2. Renombrar en la Server Action (correo->email, municipio->ciudad,
--      declaracion->acepta_datos) crea una capa de traducción invisible que hay
--      que recordar cada vez que alguien consulte la base a mano.
--
-- Consecuencia a tener presente: el SQL de referencia ya no se puede ejecutar
-- entero, porque su `create table leads` chocará con esta. Cuando llegue la
-- migración del contenido editorial hay que aplicar solo sus tablas de
-- contenido.

do $$ begin
  create type lead_state as enum ('nuevo','contactado','cotizado','ganado','perdido');
exception when duplicate_object then null; end $$;

do $$ begin
  create type locale as enum ('es','en');
exception when duplicate_object then null; end $$;

create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),

  -- Lo que envía el formulario, con sus mismos nombres.
  nombre       text        not null,
  correo       text        not null,
  whatsapp     text        not null,
  municipio    text        not null,
  etapa        text        not null,
  mensaje      text        not null,
  declaracion  boolean     not null default false,

  -- Procedencia. Son las dimensiones con las que se compara el costo por lead
  -- entre anuncios; sin ellas la pauta no se puede evaluar.
  locale       locale      not null default 'es',
  origen       text        not null default 'web',
  utm_source   text,
  utm_campaign text,
  promo        text,

  -- Gestión.
  estado       lead_state  not null default 'nuevo',
  notas        text,

  -- Nunca la IP en claro: solo su huella. El límite de envíos necesita
  -- distinguir clientes, no identificarlos, y guardar la IP de un formulario de
  -- captación es dato personal bajo la Ley 1581 sin ninguna contrapartida.
  ip_hash      text,
  user_agent   text,

  created_at   timestamptz not null default now()
);

comment on column public.leads.ip_hash is
  'sha256(ip + LEAD_IP_SALT). Nunca la dirección en claro.';

-- `municipio` y `etapa` van como text y no como enum de Postgres a propósito:
-- sus valores viven en content/site.ts alineados con el formulario de campaña
-- de Facebook, que cambia sin avisar. Zod ya valida el conjunto cerrado en el
-- borde; duplicar la restricción en la base solo garantiza que algún día se
-- pierda un lead legítimo por un `invalid input value for enum`.

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_ip_hash_idx    on public.leads (ip_hash, created_at desc);

-- RLS activa y deliberadamente SIN políticas: ni anon ni authenticated leen o
-- escriben. La única vía de entrada es la Server Action con la clave de
-- servicio, que salta RLS. Cuando exista el panel se añadirá una política de
-- lectura para el rol editor.
alter table public.leads enable row level security;
