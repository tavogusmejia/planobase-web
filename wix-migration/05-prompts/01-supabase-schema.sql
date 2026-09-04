-- =====================================================================
-- Plano Base Arquitectos — esquema Supabase (Postgres)
-- Sitio bilingüe ES/EN. Contenido editable desde /admin propio.
-- Ejecutar en el SQL Editor de Supabase.
-- =====================================================================

create extension if not exists "pgcrypto";

-- ---------- enums ----------
create type locale       as enum ('es','en');
create type project_state as enum ('borrador','publicado','archivado');
create type lead_state    as enum ('nuevo','contactado','cotizado','ganado','perdido');

-- ---------- categorías ----------
create table categories (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,           -- 'educativo', 'cultural', ...
  orden       int  not null default 0,
  created_at  timestamptz not null default now()
);

create table category_translations (
  category_id uuid references categories(id) on delete cascade,
  locale      locale not null,
  nombre      text   not null,
  primary key (category_id, locale)
);

-- ---------- proyectos ----------
create table projects (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,          -- normalizado, sin tildes
  wix_path      text,                          -- para el 301 y la trazabilidad
  anio          int,
  area_m2       numeric,
  ciudad        text,
  departamento  text,
  localidad     text,
  sector        text,
  cliente       text,
  premio        text,                          -- 'Primer puesto', 'Segundo puesto'
  construido    boolean not null default false,
  video_url     text,
  creditos_fotografia text,
  diseno        text[] not null default '{}',  -- nombres de los autores
  portada_path  text,                          -- ruta en Supabase Storage
  destacado     boolean not null default false,
  orden         int not null default 0,
  estado        project_state not null default 'publicado',
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Todo lo traducible vive aparte. Un proyecto sin fila 'en' simplemente
-- cae al español: la app hace fallback, no rompe.
create table project_translations (
  project_id  uuid references projects(id) on delete cascade,
  locale      locale not null,
  titulo      text not null,
  subtitulo   text,
  memoria     text,                            -- markdown
  meta_title  text,
  meta_description text,
  primary key (project_id, locale)
);

create table project_categories (
  project_id  uuid references projects(id) on delete cascade,
  category_id uuid references categories(id) on delete cascade,
  primary key (project_id, category_id)
);

create table project_images (
  id          uuid primary key default gen_random_uuid(),
  project_id  uuid references projects(id) on delete cascade,
  storage_path text not null,                  -- 'proyectos/<slug>/01.jpg'
  orden       int not null default 0,
  ancho       int,
  alto        int,
  blurhash    text,
  alt_es      text,
  alt_en      text,
  legacy_wix_file text,                        -- nombre original en wixstatic
  created_at  timestamptz not null default now()
);
create index on project_images (project_id, orden);

-- ---------- equipo ----------
create table team_members (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  nombre      text not null,
  foto_path   text,
  orden       int not null default 0,
  activo      boolean not null default true
);
create table team_member_translations (
  member_id uuid references team_members(id) on delete cascade,
  locale    locale not null,
  cargo     text,
  bio       text,
  primary key (member_id, locale)
);

-- ---------- reconocimientos ----------
create table awards (
  id       uuid primary key default gen_random_uuid(),
  anio     int not null,
  puesto   text,                                -- 'Primer puesto'
  project_id uuid references projects(id) on delete set null,
  orden    int not null default 0
);
create table award_translations (
  award_id uuid references awards(id) on delete cascade,
  locale   locale not null,
  titulo   text not null,
  primary key (award_id, locale)
);

-- ---------- blog ----------
create table posts (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  autor         text,
  portada_path  text,
  publicado_en  timestamptz,
  actualizado_en timestamptz,
  tags          text[] not null default '{}',
  estado        project_state not null default 'publicado',
  created_at    timestamptz not null default now()
);
create table post_translations (
  post_id uuid references posts(id) on delete cascade,
  locale  locale not null,
  titulo  text not null,
  resumen text,
  cuerpo  text,                                 -- markdown
  meta_title text,
  meta_description text,
  primary key (post_id, locale)
);

-- ---------- servicios reservables ----------
create table services (
  id             uuid primary key default gen_random_uuid(),
  slug           text unique not null,          -- 'asesoria-tecnica'
  duracion_min   int not null,
  precio_cop     int not null,
  activo         boolean not null default true
);
create table service_translations (
  service_id uuid references services(id) on delete cascade,
  locale     locale not null,
  nombre     text not null,
  tagline    text,
  descripcion text,
  politicas  text,                               -- markdown
  primary key (service_id, locale)
);

-- ---------- formularios y reservas ----------
create table leads (
  id           uuid primary key default gen_random_uuid(),
  nombre       text not null,
  email        text not null,
  ciudad       text,
  mensaje      text,
  presupuesto  text,
  acepta_datos boolean not null default false,
  locale       locale not null default 'es',
  origen       text,                             -- 'contacto', 'landing-educativo'
  utm          jsonb,
  estado       lead_state not null default 'nuevo',
  notas        text,
  created_at   timestamptz not null default now()
);

create table bookings (
  id            uuid primary key default gen_random_uuid(),
  service_id    uuid references services(id),
  nombre        text not null,
  email         text not null,
  telefono      text,
  inicio_at     timestamptz not null,
  fin_at        timestamptz not null,
  estado        text not null default 'pendiente', -- pendiente|pagada|cancelada|realizada
  proveedor_pago text,                              -- 'wompi' | 'mercadopago' | 'stripe'
  pago_ref      text,
  monto_cop     int,
  notas         text,
  created_at    timestamptz not null default now()
);
create index on bookings (inicio_at);

-- ---------- perfiles admin ----------
create table profiles (
  id    uuid primary key references auth.users(id) on delete cascade,
  email text,
  rol   text not null default 'editor'           -- 'admin' | 'editor'
);

-- =====================================================================
-- Row Level Security
-- Regla: el público LEE contenido publicado; solo usuarios autenticados
-- escriben; leads y bookings NUNCA se leen desde el cliente público.
-- =====================================================================
alter table projects              enable row level security;
alter table project_translations  enable row level security;
alter table project_images        enable row level security;
alter table project_categories    enable row level security;
alter table categories            enable row level security;
alter table category_translations enable row level security;
alter table team_members          enable row level security;
alter table team_member_translations enable row level security;
alter table awards                enable row level security;
alter table award_translations    enable row level security;
alter table posts                 enable row level security;
alter table post_translations     enable row level security;
alter table services              enable row level security;
alter table service_translations  enable row level security;
alter table leads                 enable row level security;
alter table bookings              enable row level security;
alter table profiles              enable row level security;

-- lectura pública de lo publicado
create policy "lectura publica proyectos" on projects
  for select using (estado = 'publicado');
create policy "lectura publica posts" on posts
  for select using (estado = 'publicado');

do $$
declare t text;
begin
  foreach t in array array['project_translations','project_images','project_categories',
                           'categories','category_translations','team_members',
                           'team_member_translations','awards','award_translations',
                           'post_translations','services','service_translations']
  loop
    execute format('create policy "lectura publica" on %I for select using (true);', t);
  end loop;
end $$;

-- escritura solo autenticados
do $$
declare t text;
begin
  foreach t in array array['projects','project_translations','project_images','project_categories',
                           'categories','category_translations','team_members',
                           'team_member_translations','awards','award_translations',
                           'posts','post_translations','services','service_translations',
                           'leads','bookings']
  loop
    execute format('create policy "escritura admin" on %I for all to authenticated using (true) with check (true);', t);
  end loop;
end $$;

-- leads y bookings: nadie los lee desde el cliente anónimo.
-- El insert se hace SIEMPRE desde una Server Action con la service_role key,
-- nunca desde el navegador. Por eso aquí no hay policy de insert para anon.

create policy "perfil propio" on profiles
  for select to authenticated using (auth.uid() = id);

-- =====================================================================
-- Storage
-- =====================================================================
insert into storage.buckets (id, name, public) values ('media','media', true)
  on conflict do nothing;

create policy "media lectura publica" on storage.objects
  for select using (bucket_id = 'media');
create policy "media escritura admin" on storage.objects
  for insert to authenticated with check (bucket_id = 'media');
create policy "media update admin" on storage.objects
  for update to authenticated using (bucket_id = 'media');
create policy "media delete admin" on storage.objects
  for delete to authenticated using (bucket_id = 'media');

-- =====================================================================
-- updated_at automático
-- =====================================================================
create or replace function touch_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end $$ language plpgsql;

create trigger trg_projects_touch before update on projects
  for each row execute function touch_updated_at();
