# Plano Base — Migración de planobase.co (Wix → Supabase + Vercel)

Auditoría y extracción completa del sitio actual, hecha el **4 de septiembre de 2026**
directamente del sitio en vivo, más el material para reconstruirlo en tu propio stack.

## Qué hay aquí

```
wix-migration/
├─ 00-raw/
│  └─ sitemap-urls.txt            Las 35 URLs del sitio, con notas de estado
├─ 01-content/
│  ├─ site.json                   Estudio, contacto, navegación, CTAs, servicio, reconocimientos
│  ├─ pages.json                  Estructura y copy de las 11 páginas, bloque por bloque
│  ├─ projects.json               Los 24 proyectos completos (207 imágenes referenciadas)
│  ├─ projects/*.md               Un markdown legible por proyecto
│  └─ blog/*.md                   La entrada de blog, transcrita y corregida
├─ 02-assets/
│  ├─ image-manifest.json         225 archivos únicos, mapeados a su proyecto
│  └─ descargar-assets.sh         Script para bajarlos todos en resolución original
├─ 03-design/
│  ├─ design-tokens.json          Paleta y escala tipográfica reales, extraídas del DOM
│  └─ design-notes.md             Qué conservar del diseño actual y qué cambiar
├─ 04-seo/
│  ├─ seo-map.json                Titles y descriptions actuales + propuestas
│  └─ redirects.json              Los 36 redirects 301
├─ 05-prompts/
│  ├─ 00-PROMPT-MAESTRO.md        ← EL ARCHIVO PRINCIPAL. Pégalo a tu agente de código.
│  ├─ 01-supabase-schema.sql      Esquema Postgres con RLS, listo para ejecutar
│  ├─ 02-roadmap-fases.md         Fase 0, fase 5 (reservas), fase 7 (corte de Wix), mejoras
│  └─ 03-RUNBOOK-claude-code.md   ← Paso a paso para ejecutar todo en Claude Code
├─ 06-hallazgos.md                Todo lo que está roto en el sitio actual
└─ 07-tooling/
   ├─ dropbox-ignore.sh           Excluye node_modules/.next del sync de Dropbox
   └─ verificar-seed.sql          Consultas para confirmar que el seed cargó completo
```

## Por dónde empezar

1. Lee **`06-hallazgos.md`** primero. Son 20 minutos y cambia lo que vas a pedirle al agente.
2. Corre `bash 02-assets/descargar-assets.sh` en tu Mac (necesita red). Baja las 225 imágenes.
3. Crea el proyecto en Supabase y ejecuta `05-prompts/01-supabase-schema.sql`.
4. Sigue **`05-prompts/03-RUNBOOK-claude-code.md`** paso por paso. Ahí está todo:
   instalar herramientas, crear el repo fuera de Dropbox, configurar `CLAUDE.md`,
   y cómo pedirle cada fase al agente.
5. Trabaja por fases. El prompt le dice al agente que pare al final de cada una.

## El resumen en una página

- **24 proyectos**, de 2013 a 2024, en 7 ciudades. 4 reconocimientos en concurso público
  (2 primeros puestos: Teusaquillo 2014 y El Ensueño 2014).
- **207 imágenes de portafolio** + 18 de marca, equipo y blog.
- **11 páginas**, de las cuales **4 no deberían migrarse**: dos plantillas legacy
  (una con Lorem Ipsum publicado), una página de contacto duplicada y una landing vacía.
- **1 entrada de blog**, de octubre de 2022.
- **1 servicio reservable** con pago: asesoría técnica, 1 h, $50.000 COP. Es lo único
  que Wix hace y que hay que reemplazar de verdad.
- El filtro de proyectos **no funciona** y las tarjetas del grid **no muestran el nombre**
  del proyecto. Arreglar esas dos cosas vale más que la migración técnica en sí.
- Las 24 fichas de proyecto **no tienen meta description**.
- Wix Madefor Text y Futura LT **no se pueden llevar**: hay reemplazos libres propuestos
  en `03-design/design-notes.md`.

## Decisiones ya tomadas

- Contenido en **Supabase** (Postgres + Storage), editable desde un **/admin propio** en el repo.
- **Español e inglés desde el día 1**, con fallback a español donde falte traducción.
- **Next.js 15 + Tailwind v4 + TypeScript**, desplegado en **Vercel**.
- El repositorio git lo creas tú manualmente, dentro de esta misma carpeta de Dropbox
  (`06 Apps/Plano Base/planobase-web`), con `node_modules` y `.next` excluidos del sync.

## Datos que faltan y solo Eduardo puede dar

- Nombres y cargos de los 4 miembros del equipo (hoy están dentro de las imágenes).
- Categoría real de cada proyecto (la de `projects.json` es una propuesta).
- Áreas de 6 proyectos que hoy figuran en 0.
- Área correcta de Colegio Próspero Pinzón: el campo dice 5.400 m², la memoria dice 8.600 m².
