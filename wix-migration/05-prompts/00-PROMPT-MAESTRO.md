# PROMPT MAESTRO — Reconstrucción de planobase.co fuera de Wix

> **Cómo usar este archivo.** Pégalo completo como primer mensaje a tu agente de código
> (Claude Code, Cursor, Codex, el que uses) en una carpeta vacía. Antes de pegarlo,
> copia junto al repo la carpeta `wix-migration/` completa: el prompt hace referencia
> a esos archivos como fuente de verdad del contenido.
>
> Este prompt construye el **esqueleto completo y navegable con contenido real**.
> No intenta resolver pagos ni el calendario de reservas: eso va en la fase 5
> (ver `02-roadmap-fases.md`).

---

## 1. Contexto

Estoy migrando el sitio de **Plano Base Arquitectos** (estudio de arquitectura
colombiano, sede en Cali, obra en Bogotá, Cali, Medellín, Cajicá, Quibdó, Ipiales
y San José del Guaviare) desde **Wix** a una plataforma propia.

El sitio actual, `www.planobase.co`, tiene:
- 9 páginas estáticas (2 de ellas son plantillas legacy con Lorem Ipsum y 1 está vacía),
- una colección dinámica con **24 proyectos** de portafolio,
- 1 entrada de blog,
- 1 servicio reservable con pago (asesoría técnica de 1 h por $50.000 COP).

Todo el contenido real ya está extraído y estructurado en la carpeta `wix-migration/`.
**No inventes contenido. No uses lorem ipsum. Todo el texto sale de esos archivos.**

Fuentes de verdad:

| Archivo | Qué contiene |
|---|---|
| `wix-migration/01-content/site.json` | Datos del estudio, contacto, navegación, CTAs, servicio, taxonomía, reconocimientos |
| `wix-migration/01-content/pages.json` | Estructura y copy de cada página, bloque por bloque |
| `wix-migration/01-content/projects.json` | Los 24 proyectos completos: ficha técnica, memoria, galería |
| `wix-migration/01-content/projects/*.md` | Lo mismo, un markdown legible por proyecto |
| `wix-migration/01-content/blog/*.md` | La entrada de blog completa |
| `wix-migration/02-assets/image-manifest.json` | Los 225 archivos de imagen y a qué proyecto pertenecen |
| `wix-migration/02-assets/descargar-assets.sh` | Script para bajar las imágenes originales de Wix |
| `wix-migration/03-design/design-tokens.json` | Paleta y escala tipográfica reales del sitio |
| `wix-migration/03-design/design-notes.md` | Criterio de diseño: qué conservar, qué cambiar |
| `wix-migration/04-seo/seo-map.json` | Titles y descriptions actuales + propuestas |
| `wix-migration/04-seo/redirects.json` | Los 36 redirects 301 de Wix al sitio nuevo |
| `wix-migration/05-prompts/01-supabase-schema.sql` | Esquema Postgres listo para ejecutar |
| `wix-migration/06-hallazgos.md` | Todo lo que está roto hoy y no debe replicarse |

---

## 2. Stack, sin negociación

- **Next.js 15**, App Router, **TypeScript** en modo estricto.
- **Tailwind CSS v4** con los tokens de `design-tokens.json` como variables CSS.
- **Supabase**: Postgres para el contenido, Storage para las imágenes, Auth para el `/admin`.
- **Vercel** para el despliegue.
- **next-intl** para bilingüe **español + inglés desde el día 1**.
- Sin librería de componentes pesada. Componentes propios. `clsx` y `tailwind-merge` bastan.
- `zod` para validar formularios y variables de entorno.
- `react-hook-form` para el formulario de contacto.

**Reglas duras:**
- Server Components por defecto. `"use client"` solo donde haya estado o interacción real.
- Todo lo que escriba en la base de datos va por **Server Actions**, nunca desde el navegador.
- La `SUPABASE_SERVICE_ROLE_KEY` **nunca** cruza al cliente. Solo en Server Actions y route handlers.
- Cero `any`. Tipos generados de Supabase con `supabase gen types typescript`.
- Todas las imágenes por `next/image` con `sizes` correcto y `blurDataURL`.

---

## 3. Idiomas

Español es el idioma base y la fuente editorial. Inglés se traduce después, pero
**el modelo de datos y el router lo contemplan desde ahora**.

- Rutas: `/es/...` y `/en/...`. La raíz `/` redirige según `Accept-Language`, con `/es` por defecto.
- El contenido traducible vive en tablas `*_translations` con clave `(id, locale)`.
- **Fallback obligatorio:** si no existe la fila en `en`, se sirve el contenido en `es`
  sin romper y sin dejar la página vacía. Marca esas páginas con `<link rel="alternate">`
  correctos y no las declares como traducidas si no lo están.
- Los textos de interfaz (botones, labels, errores) van en `messages/es.json` y `messages/en.json`.
- Los slugs de proyecto son **los mismos en ambos idiomas** (son nombres propios).

---

## 4. Mapa de rutas

```
/                                   -> redirect a /es o /en
/[locale]                           Home
/[locale]/estudio                   Estudio: manifiesto, equipo, reconocimientos
/[locale]/proyectos                 Grid filtrable de proyectos
/[locale]/proyectos/[slug]          Ficha de proyecto (24)
/[locale]/blog                      Listado
/[locale]/blog/[slug]               Entrada
/[locale]/servicios/asesoria-tecnica  Página del servicio
/[locale]/agendar                   Reserva (fase 5; por ahora, stub con CTA a WhatsApp)
/[locale]/contacto                  Datos + formulario
/admin                              Panel propio, protegido por Supabase Auth
/admin/proyectos                    Listado, crear, editar, ordenar, publicar
/admin/proyectos/[id]               Editor: ficha, memoria (ES/EN), galería drag & drop
/admin/blog                         CRUD de entradas
/admin/equipo                       CRUD de miembros
/admin/leads                        Bandeja de contactos recibidos
/sitemap.xml                        Generado, con hreflang
/robots.txt
/opengraph-image                    OG dinámico por ruta
```

**No se migran** `/portafolio`, `/portafolio-1`, `/contactanos1` ni `/landing-educativo`:
son basura legacy. Van a 301 según `redirects.json`.

---

## 5. Base de datos

Ejecuta `wix-migration/05-prompts/01-supabase-schema.sql` tal cual. Resumen:

- `projects` + `project_translations` + `project_images` + `project_categories`
- `categories` + `category_translations`
- `team_members`, `awards`, `posts`, `services` — todas con su tabla de traducciones
- `leads`, `bookings`, `profiles`
- RLS activo en todo: **lectura pública solo de lo publicado**, escritura solo autenticados,
  `leads` y `bookings` sin acceso anónimo de lectura.

Categorías iniciales: `cultural`, `educativo`, `institucional`, `residencial`, `urbano`.
**No crees "Oficinas":** existe en el filtro de Wix pero no hay ningún proyecto de oficinas.

---

## 6. Migración del contenido

Escribe `scripts/seed.ts`, idempotente, ejecutable con `pnpm seed`:

1. Lee `wix-migration/01-content/projects.json`.
2. Inserta o actualiza (upsert por `slug`) cada proyecto y su traducción `es`.
3. Sube las imágenes desde `assets-originales/` a Supabase Storage en `media/proyectos/<slug>/NN.ext`,
   calcula ancho, alto y `blurhash`, y crea las filas de `project_images` respetando el orden.
4. Inserta categorías, equipo, reconocimientos, el post del blog y el servicio.
5. Al final imprime un reporte: cuántos proyectos, cuántas imágenes, cuáles fallaron.

Las imágenes se bajan **antes**, corriendo `bash wix-migration/02-assets/descargar-assets.sh`.
Son 225 archivos. No las enlaces desde `static.wixstatic.com` en producción: el día que se
cancele la cuenta de Wix, el sitio se queda sin fotos.

---

## 7. Diseño

Toma la paleta y la escala de `design-tokens.json` y el criterio de `design-notes.md`.
En corto:

- Casi monocromo: tinta `#23282C` sobre blanco, acento azul acero `#55839B` solo en
  líneas, links y texto secundario. El acento **nunca** como fondo de bloque grande.
- Peso tipográfico **400 en todo el sitio**. La jerarquía se hace con tamaño y aire, no con negritas.
  Esta es una regla de marca, no un descuido: respétala.
- Wix Madefor Text y Futura LT no se pueden llevar (licencia). Usa **Inter** para cuerpo
  y **Jost** para acentos/números, ambas por `next/font` (self-hosted, cero llamadas a Google).
- Aplica la escala de verdad. Hoy el sitio la declara (88/72/50/30/22px) pero renderiza todo
  a 16-22px, y por eso se ve plano.
- Fotografía a sangre, generosa. El portafolio es el producto.
- Modo claro únicamente. No inventes modo oscuro.
- Accesibilidad: contraste AA, foco visible, navegación por teclado, `alt` real en cada imagen.

---

## 8. Página por página

### Home `/[locale]`
El error del sitio actual es que es solo un slideshow: no dice qué hace el estudio.
Construye:
1. **Hero** a pantalla completa con los tres proyectos destacados (Casa Aguilar, Tirreno,
   Concurso Colegio Villas del Progreso), **con el nombre del proyecto visible** sobre la imagen
   y enlace directo a su ficha.
2. **Declaración corta**, reusando el manifiesto de `/estudio`: *"Somos Plano Base, un estudio
   colaborativo de arquitectura dedicado al desarrollo integral de proyectos arquitectónicos..."*
3. **Proyectos destacados**: 6 fichas con foto, nombre, año y ciudad.
4. **Cifras**: 24 proyectos, 4 reconocimientos en concurso público, 7 ciudades, obra desde 2013.
   (Sácalas de los datos, no las escribas a mano.)
5. **Bloque de servicio**: asesoría técnica, 1 h, $50.000 COP, con CTA a agendar.
6. **CTA final** y footer.

Mantén la barra fija inferior "RESERVA UNA ASESORÍA AHORA" — funciona y es la conversión principal.

### Estudio `/[locale]/estudio`
Manifiesto, equipo (4 miembros; **los nombres deben ser texto real en el HTML**, hoy están
dentro de la imagen), reconocimientos como línea de tiempo, CTA, y carrusel de proyectos
**renderizado una sola vez** (hoy sale duplicado).

### Proyectos `/[locale]/proyectos`
- Grid responsive, 2-3 columnas, imagen dominante.
- **Cada tarjeta muestra nombre, año y ciudad.** Hoy no muestran nada y es un problema real.
- **El filtro por categoría tiene que funcionar de verdad** — el de Wix está roto y devuelve
  todo siempre. Filtro por categoría y por década, en la URL (`?categoria=educativo`) para que
  sea compartible y indexable.
- Orden por defecto: destacados primero, luego año descendente.

### Ficha de proyecto `/[locale]/proyectos/[slug]`
- Portada a sangre con título y subtítulo.
- **Ficha técnica visible de entrada**, en línea: Año · Ciudad · Área · Diseño · Reconocimiento.
  Hoy está escondida en un acordeón cerrado, que es donde nadie la ve.
- Memoria en tipografía de lectura, ancho máximo ~68 caracteres.
- Galería con lightbox y navegación por teclado.
- Si hay `video_url`, embebido perezoso (Tirreno tiene uno).
- Navegación anterior/siguiente y 3 proyectos relacionados por categoría.
- JSON-LD `CreativeWork`.

### Blog, servicio, contacto
- Blog: listado y detalle en markdown. Una sola entrada por ahora.
- Servicio: cabecera con duración y precio, descripción, políticas de reserva y cancelación
  (están completas en `site.json`), CTA a agendar.
- Contacto: datos (Calle 18 # 61-29, Cali · +57 301 426 4603 · proyectos@planobase.co),
  redes, y el formulario con los 5 campos exactos que ya existen, incluida la casilla de
  declaración. Envío por Server Action, guarda en `leads`, notifica por correo con Resend,
  honeypot + rate limit por IP. Sin captcha de terceros.

### Admin `/admin`
- Supabase Auth con correo. Solo usuarios en `profiles`.
- CRUD completo de proyectos con editor de memoria en markdown, pestañas ES/EN,
  subida de imágenes con arrastrar y soltar, reordenamiento de galería, marcar destacado,
  publicar/despublicar.
- Bandeja de leads con cambio de estado.
- Nada de vistas de solo lectura: si Eduardo no puede publicar un proyecto nuevo sin llamarme,
  el admin no sirve.

---

## 9. SEO y migración de dominio

Esto es lo que decide si la migración sale bien o si el sitio pierde tráfico.

- Implementa **los 36 redirects 301** de `04-seo/redirects.json` en `next.config.ts`.
  Registra cada ruta vieja **también en su forma percent-encoded**: los slugs de Wix llevan
  tildes, ñ y paréntesis (`/portafolio-2/colegio-y-teatro-el-ensueño`,
  `/portafolio-2/colegio-francisco-antonio-zea-(metrovivienda)`).
- Metadata por ruta con `generateMetadata`. **Las 24 fichas de proyecto hoy no tienen
  meta description**: genera una a partir de título, subtítulo, ciudad y año.
- `og:image` por proyecto usando su portada. Hoy ninguna ficha tiene imagen al compartirse.
- `sitemap.xml` generado con `hreflang` es/en y `x-default`.
- JSON-LD: `Organization` + `LocalBusiness` en el layout, `CreativeWork` por proyecto,
  `Article` por post, `Service` en la página de asesoría.
- Canonical absoluto en cada página.
- Objetivo Lighthouse: **95+ en Performance, Accessibility, Best Practices y SEO en móvil**.
  El sitio actual pesa 1,2 MB de HTML por página antes de imágenes; no repitas eso.

---

## 10. Errores del sitio actual que NO se replican

Está el detalle completo en `06-hallazgos.md`. Los que importan:

1. El filtro de proyectos devuelve todo para cualquier etiqueta. **Tiene que funcionar.**
2. Las tarjetas del grid no muestran el nombre del proyecto. **Tienen que mostrarlo.**
3. `/portafolio` tiene Lorem Ipsum publicado e indexable. **Se borra.**
4. Las 24 fichas no tienen meta description. **Todas la llevan.**
5. La ficha técnica está escondida en un acordeón. **Va visible.**
6. Los nombres del equipo están dentro de las imágenes. **Van en HTML.**
7. El carrusel de `/estudio` se renderiza dos veces. **Una sola.**
8. Área en 0 en 6 proyectos. **Si no hay dato, no muestres el campo; no muestres "0 m²".**
9. Todo el contenido se pinta en cliente. **Server Components y render en servidor.**

---

## 11. Datos a confirmar antes de publicar

Marca estos como TODO visible en el README, no los inventes:

- Nombres y cargos de los 4 miembros del equipo.
- Categoría real de cada proyecto (la propuesta en `projects.json` es mía, no dato de Wix).
- Áreas de los 6 proyectos que hoy están en 0.
- Área correcta de Colegio Próspero Pinzón (el campo dice 5.400 m², la memoria dice 8.600 m²).
- Si "Comedor Universidad del Valle" debe publicarse sin fotos o esperar imágenes.
- Si se conserva el blog o se retira del menú hasta tener plan editorial.
- Si `/landing-educativo` se construye de verdad como landing por vertical o se elimina.

---

## 12. Estructura del repositorio

```
planobase-web/
├─ src/
│  ├─ app/
│  │  ├─ [locale]/
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ estudio/page.tsx
│  │  │  ├─ proyectos/page.tsx
│  │  │  ├─ proyectos/[slug]/page.tsx
│  │  │  ├─ blog/…
│  │  │  ├─ servicios/asesoria-tecnica/page.tsx
│  │  │  ├─ agendar/page.tsx
│  │  │  └─ contacto/page.tsx
│  │  ├─ admin/…
│  │  ├─ sitemap.ts
│  │  └─ robots.ts
│  ├─ components/   (ui/ · layout/ · project/ · forms/)
│  ├─ lib/          (supabase/{client,server,admin}.ts · schemas.ts · seo.ts · image.ts)
│  ├─ i18n/         (routing.ts · request.ts)
│  └─ styles/globals.css
├─ messages/{es,en}.json
├─ scripts/seed.ts
├─ supabase/migrations/
├─ wix-migration/          ← esta carpeta, como referencia versionada
├─ .env.example
├─ next.config.ts
└─ README.md
```

`.env.example`:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=https://www.planobase.co
RESEND_API_KEY=
CONTACT_NOTIFY_EMAIL=proyectos@planobase.co
```

---

## 13. Criterios de aceptación

No des la tarea por terminada hasta que todo esto sea cierto:

- [ ] `pnpm build` pasa sin errores ni warnings de TypeScript.
- [ ] Las 24 fichas de proyecto renderizan con su memoria y su galería completas.
- [ ] El filtro de `/proyectos` cambia de verdad los resultados y el estado vive en la URL.
- [ ] Cada tarjeta del grid muestra nombre, año y ciudad.
- [ ] `/es` y `/en` funcionan; `/en` cae a español donde falte traducción, sin páginas en blanco.
- [ ] Los 36 redirects responden 301, incluidas las rutas con tilde y con paréntesis.
- [ ] Cada ruta tiene title, description, canonical y og:image propios.
- [ ] `sitemap.xml` lista todas las rutas de ambos idiomas con hreflang.
- [ ] El formulario guarda en `leads` y dispara el correo de notificación.
- [ ] `/admin` deja crear, editar, ordenar la galería y publicar un proyecto de punta a punta.
- [ ] Ninguna imagen apunta a `static.wixstatic.com`.
- [ ] Lighthouse móvil 95+ en las cuatro categorías, en home y en una ficha de proyecto.
- [ ] Cero Lorem Ipsum, cero texto de relleno, cero "Nombre del proyecto".
- [ ] El README lista los datos pendientes de confirmar de la sección 11.

---

## 14. Orden de trabajo

Trabaja por fases y **para al final de cada una** para que yo revise:

1. Scaffold, tokens de diseño, layout, header, footer, i18n, home estática con datos hardcodeados.
2. Esquema en Supabase + `seed.ts` + subida de imágenes. Los 24 proyectos en la base.
3. `/proyectos` y `/proyectos/[slug]` leyendo de Supabase, con filtro funcional.
4. `/estudio`, `/blog`, `/contacto`, `/servicios`. Formulario con Server Action.
5. `/admin` completo.
6. SEO: redirects, metadata, sitemap, JSON-LD, OG dinámico. Auditoría Lighthouse.
7. Despliegue en Vercel, dominio, y corte desde Wix.

Empieza por la fase 1 y no avances a la 2 sin que yo confirme.
