-- Prueba de la autorización de tratamiento de datos.
--
-- El artículo 8 de la Ley 1581 de 2012 le da al titular el derecho a «solicitar
-- prueba de la autorización otorgada», y el artículo 9 exige que sea previa,
-- expresa e informada. Eso obliga a guardar tres cosas, no una: que autorizó,
-- cuándo, y **qué texto estaba publicado cuando lo hizo**. Sin lo tercero, la
-- prueba se cae en cuanto la política cambie: se podría demostrar que alguien
-- marcó una casilla, pero no qué decía la política que aceptaba.
--
-- La columna que ya existía, `declaracion`, dice otra cosa: que la información
-- que dio es exacta y completa. No sirve como autorización de tratamiento y por
-- eso no se reutiliza — son dos consentimientos distintos y confundirlos deja
-- al estudio sin ninguno de los dos.
--
-- `default false` y no `true`: las filas anteriores a esta migración se quedan
-- en `false`, que es exactamente lo que pasó. Ponerlas en `true` sería
-- fabricar una autorización que nadie dio.

alter table public.leads
  add column if not exists autorizacion boolean not null default false;

comment on column public.leads.autorizacion is
  'Autorización de tratamiento de datos (Ley 1581/2012, art. 9). Las filas '
  'anteriores al 5/9/2026 están en false porque el formulario no la pedía.';

-- Qué política estaba vigente cuando autorizó. Es texto y no una referencia a
-- otra tabla a propósito: la política vive en el repositorio, versionada por su
-- fecha de entrada en vigencia, y guardar aquí esa fecha permite recuperar el
-- texto exacto desde el historial de git sin montar una tabla de versiones que
-- habría que mantener a mano.
alter table public.leads
  add column if not exists politica_vigente_desde date;

comment on column public.leads.politica_vigente_desde is
  'Fecha de vigencia de la política que el titular aceptó. Con ella se '
  'recupera el texto exacto desde content/legal.ts en el historial.';
