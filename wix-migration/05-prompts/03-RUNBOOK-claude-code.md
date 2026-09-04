# RUNBOOK: cómo ejecutar la migración en Claude Code

Guía operativa. Todo lo que va con `$` se corre en la **Terminal de tu Mac**, no en Cowork.

---

## Paso 0. Verificar herramientas (5 min)

```bash
node -v        # necesitas 20 o superior
npm -v
git --version
claude --version
```

Lo que falte:

```bash
# Node (si no lo tienes o está viejo)
brew install node

# pnpm
npm install -g pnpm

# Claude Code
npm install -g @anthropic-ai/claude-code

# GitHub CLI (opcional, para crear el repo desde terminal)
brew install gh && gh auth login

# Supabase CLI (opcional, para tipos y migraciones locales)
brew install supabase/tap/supabase
```

---

## Paso 1. Bajar las imágenes (15-30 min, corre solo)

```bash
cd ~/Library/CloudStorage/Dropbox/06\ Apps/Plano\ Base/wix-migration
bash 02-assets/descargar-assets.sh ~/planobase-assets
```

Son 219 descargas. Al terminar:

```bash
find ~/planobase-assets -type f | wc -l     # esperado: ~219
grep -c FALLO /dev/null                      # revisa la salida del script
du -sh ~/planobase-assets
```

Si aparecen líneas `FALLO`, vuelve a correr el script: es idempotente, salta lo ya descargado.

> Las bajo a `~/planobase-assets` y **no** a Dropbox a propósito: son cientos de MB
> y no tiene sentido sincronizarlas dos veces.

---

## Paso 2. Supabase

**Puedes saltarte este paso por ahora.** Las fases 1 y (con Docker) la 2 no dependen
del Supabase en la nube. Ver la sección "Si Supabase está caído" más abajo.

Cuando sus servidores estén estables:

1. Entra a supabase.com, crea el proyecto. Región: **East US (North Virginia)**, la más cercana a Colombia con buena latencia.
2. Guarda la contraseña de la base de datos donde la vuelvas a encontrar.
3. SQL Editor → New query → pega **completo** el contenido de `05-prompts/01-supabase-schema.sql` → Run.
4. Verifica en Table Editor que aparecen `projects`, `project_translations`, `project_images`, `leads`, `bookings`.
5. Settings → API, copia: `Project URL`, `anon public`, `service_role`.

⚠️ La `service_role` key salta todas las reglas de seguridad. Nunca en el navegador, nunca en git, nunca pegada en un chat.

---

## Paso 3. Preparar la carpeta del proyecto, dentro de Dropbox (10 min)

El repo va en `Dropbox/06 Apps/Plano Base/planobase-web`, al lado de `wix-migration`.

Dropbox y un repo de Node conviven **si y solo si** haces estas tres cosas:

1. **La carpeta tiene que estar disponible sin conexión.** En Finder, clic derecho sobre
   `06 Apps/Plano Base` → **Hacer disponible sin conexión**. Si Dropbox deja archivos como
   marcadores "solo en línea", el build falla con errores raros de archivos que existen
   pero están vacíos.
2. **`node_modules`, `.next` y `assets-originales` NO se sincronizan.** Son decenas de miles
   de archivos que se regeneran solos. Sincronizarlos hace lento el Mac, llena la cuota
   y no aporta nada.
3. **Cerrar Claude Code y esperar a que Dropbox termine de sincronizar antes de cambiar de
   máquina.** Un `.git` a medio sincronizar es un repo corrupto.

```bash
cd ~/Library/CloudStorage/Dropbox/06\ Apps/Plano\ Base
mkdir -p planobase-web && cd planobase-web
git init

# el material de migración, como referencia versionada dentro del repo
cp -R ../wix-migration ./wix-migration

# las imágenes descargadas
cp -R ~/planobase-assets ./assets-originales

cat > .gitignore <<'GIT'
node_modules/
.next/
.turbo/
.vercel/
.env
.env.local
assets-originales/
.DS_Store
GIT

# marcar carpetas para que Dropbox las ignore
bash wix-migration/07-tooling/dropbox-ignore.sh

git add -A && git commit -m "chore: material de migración desde Wix"
```

**Importante:** el atributo de Dropbox vive en la carpeta. Si borras `node_modules` o
haces `pnpm install` desde cero, la carpeta se recrea **sin la marca**. Vuelve a correr:

```bash
bash wix-migration/07-tooling/dropbox-ignore.sh
```

Hazlo un hábito: después de cada `pnpm install` grande, ese comando.

Verificar que la marca quedó puesta:

```bash
xattr -p com.dropbox.ignored node_modules   # debe imprimir: 1
```

**Sobre `.git`:** por defecto el script lo deja sincronizando. Si vas a hacer push a
GitHub, descomenta la línea `TARGETS+=(.git)` dentro del script y deja que GitHub sea el
respaldo del código. Es la configuración más segura: Dropbox se queda con el contenido
(que es lo que te importa tener en todos lados) y git con el historial.

---

## Paso 4. Configurar Claude Code (10 min)

```bash
cd ~/Projects/planobase-web
claude
```

La primera vez pide iniciar sesión con tu cuenta.

Antes de pedirle nada, crea el archivo de memoria del proyecto. Dentro de Claude Code:

```
/init
```

Luego reemplaza el `CLAUDE.md` que genere por esto (pídeselo o edítalo tú):

```markdown
# Plano Base Web

Sitio de Plano Base Arquitectos. Migración desde Wix.

## Stack
Next.js 15 (App Router) · TypeScript estricto · Tailwind v4 · Supabase · Vercel · next-intl (es/en)

## Reglas
- Server Components por defecto. "use client" solo con estado o interacción real.
- Toda escritura a la base de datos va por Server Actions. Nunca desde el navegador.
- SUPABASE_SERVICE_ROLE_KEY jamás cruza al cliente.
- Cero `any`. Tipos generados con `supabase gen types typescript`.
- Todas las imágenes por next/image con `sizes` y `blurDataURL`.
- Peso tipográfico 400 en todo el sitio. La jerarquía se hace con tamaño y aire.
- Español es el idioma base. Inglés cae a español si falta la traducción.

## Fuente de verdad del contenido
`wix-migration/`. No inventes contenido. No uses lorem ipsum.
Antes de escribir cualquier texto de página, lee el archivo correspondiente en
`wix-migration/01-content/`.

## Comandos
pnpm dev · pnpm build · pnpm lint · pnpm seed

## Nunca
- No hagas commit de .env ni de assets-originales/
- No enlaces imágenes a static.wixstatic.com
- No avances de fase sin que yo confirme
```

Commit:

```bash
git add CLAUDE.md && git commit -m "chore: CLAUDE.md"
```

---

## Paso 5. Fase 1: arrancar (1-2 horas)

Dentro de Claude Code:

1. **Entra en modo plan** con `Shift+Tab` (dos veces hasta ver `plan mode on`).
   Esto lo obliga a proponer antes de escribir. Vale oro en la primera fase.

2. Pega el prompt maestro completo:

```
Lee wix-migration/05-prompts/00-PROMPT-MAESTRO.md y ejecútalo.
Empieza SOLO por la fase 1 del punto 14. Antes de escribir código, muéstrame el plan.
```

   Alternativa si prefieres pegarlo literal: abre
   `wix-migration/05-prompts/00-PROMPT-MAESTRO.md`, copia todo y pégalo en el chat.
   Funciona igual, pero apuntar al archivo gasta menos contexto.

3. Revisa el plan. Corrige lo que no te cuadre. Acepta.

4. Sal de modo plan (`Shift+Tab`) y deja que trabaje.

5. Cuando termine:

```bash
pnpm dev
```

   Abre localhost:3000. Revisa header, footer, tipografía, colores, `/es` y `/en`.

6. Commit de la fase:

```bash
git add -A && git commit -m "feat: fase 1, scaffold y sistema de diseño"
```

---

## Paso 6. Fase 2: contenido en la base (1-2 horas)

Crea `.env.local` (a mano, no se lo dictes al agente en el chat):

```bash
cat > .env.local <<'ENV'
NEXT_PUBLIC_SUPABASE_URL=https://TU-PROYECTO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ENV
```

En Claude Code:

```
Fase 2. Ya ejecuté el schema en Supabase y tengo .env.local con las llaves.
Las imágenes están en ./assets-originales.
Escribe scripts/seed.ts según el punto 6 del prompt maestro y córrelo.
```

Verificación, no confíes en que diga "listo":

```bash
pnpm seed
```

Y en Supabase → Table Editor:
- `projects`: **24 filas**
- `project_translations`: 24 filas con locale `es`
- `project_images`: **207 filas**
- `categories`: 5 filas (cultural, educativo, institucional, residencial, urbano)
- Storage → bucket `media` → carpeta `proyectos/` con 24 subcarpetas

Si algo no cuadra, dile exactamente qué número esperabas y qué número hay.

---

## Paso 7. Fases 3 a 7

Un mensaje por fase, mismo patrón:

```
Fase 3 del prompt maestro. Para al terminar.
```

Después de cada fase:

```bash
pnpm build          # tiene que pasar sin errores
git add -A && git commit -m "feat: fase N, ..."
```

Y **`/clear` entre fases.** Cada fase es un trabajo distinto; arrastrar el contexto
de la anterior lo vuelve más lento y más torpe. `CLAUDE.md` conserva lo que importa.

---

## Cómo trabajar con él, en concreto

**Modo plan para todo lo estructural.** `Shift+Tab`. Úsalo antes de cada fase y
antes de cualquier refactor. Sin eso escribe primero y piensa después.

**Dale criterios de verificación, no descripciones.** Mal: "haz el filtro de proyectos".
Bien: "el filtro debe cambiar los resultados de verdad y el estado debe vivir en la URL
como `?categoria=educativo`; el de Wix está roto y devuelve todo siempre".

**Haz que verifique su propio trabajo.** Al cerrar cada fase:

```
Corre pnpm build y pnpm lint. Después revisa tu propio trabajo contra los criterios
de aceptación del punto 13 del prompt maestro y dime cuáles NO se cumplen todavía.
Sé estricto contigo mismo.
```

**Commits chicos.** Uno por fase mínimo. Si algo sale mal, `git reset --hard HEAD~1`
es más rápido que pedirle que deshaga.

**No lo dejes decidir contenido.** Si le falta un dato (nombres del equipo, categoría
de un proyecto), tiene que dejar un TODO visible, no inventarlo. Está en el punto 11
del prompt maestro. Verifícalo.

**Permisos.** Te va a pedir aprobación para cada comando. Para no morir aprobando:

```bash
claude --allowedTools "Bash(pnpm:*)" "Bash(git:*)" "Edit" "Write"
```

No uses `--dangerously-skip-permissions` en un repo que va a producción con llaves
de Supabase adentro.

---

## Orden de tiempos, realista

| Fase | Qué | Tiempo |
|---|---|---|
| 0 | Herramientas, imágenes, Supabase | 1 hora |
| 1 | Scaffold, diseño, layout, i18n | 1-2 h |
| 2 | Seed: 24 proyectos y 207 imágenes en la base | 1-2 h |
| 3 | Grid de proyectos + fichas | 2-3 h |
| 4 | Estudio, blog, contacto, servicio | 2-3 h |
| 5 | Panel /admin | 3-5 h |
| 6 | SEO, redirects, sitemap, Lighthouse | 2-3 h |
| 7 | Vercel, dominio, corte de Wix | 1-2 h + 24 h de DNS |

Un fin de semana largo si no te distraes. Dos si el admin te da pelea.

---

## Si Supabase está caído (o simplemente no quieres depender de la nube todavía)

Nada de la fase 1 toca Supabase. Y la fase 2 se puede hacer entera contra una base local.

### Qué puedes avanzar sin Supabase, hoy mismo

- **Paso 1 completo:** bajar las 219 imágenes.
- **Paso 3 y 4 completos:** repo, `.gitignore`, marcas de Dropbox, Claude Code, `CLAUDE.md`.
- **Fase 1 entera:** scaffold de Next.js, tokens de diseño, header, footer, tipografías,
  i18n es/en, home con datos escritos a mano. Son 1 a 2 horas de trabajo real.
- **Fase 4 parcial:** maquetar `/estudio`, `/blog`, `/contacto` y la página de servicio
  leyendo directamente los JSON de `wix-migration/01-content/`, sin base de datos.
  Cambiar la fuente de datos después es trivial si los componentes reciben props.

### Supabase local con Docker (recomendado mientras tanto)

Te da Postgres, Storage y Auth idénticos a los de la nube, corriendo en tu Mac:

```bash
brew install supabase/tap/supabase
# necesitas Docker Desktop abierto

cd ~/Library/CloudStorage/Dropbox/06\ Apps/Plano\ Base/planobase-web
supabase init
supabase start          # la primera vez baja las imágenes de Docker, tarda
```

Al terminar imprime las URLs y llaves locales. Van en `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<la que imprimió supabase start>
SUPABASE_SERVICE_ROLE_KEY=<la que imprimió supabase start>
```

Aplicar el esquema y sembrar:

```bash
cp wix-migration/05-prompts/01-supabase-schema.sql supabase/migrations/00000000000000_init.sql
supabase db reset       # aplica el esquema desde cero
pnpm seed               # carga los 24 proyectos y las 207 imágenes
```

`supabase studio` te abre un panel igual al de la nube, en localhost:54323.

Cuando el Supabase de la nube esté estable:

```bash
supabase link --project-ref <tu-ref>
supabase db push        # sube el esquema
pnpm seed               # vuelve a correr apuntando a la nube
```

Solo cambias las tres variables de `.env.local` y sigues. Sin rehacer nada.

### Trabajo que no es código y desbloquea todo lo demás

Mientras Supabase se estabiliza, esto es lo que más valor tiene y solo lo puedes hacer tú:

- Pedirle a Eduardo **nombres y cargos** de los 4 del equipo.
- Que clasifique los **24 proyectos** por categoría. La propuesta está en `projects.json`,
  solo tiene que corregirla. Sin esto el filtro nuevo nace con datos inventados.
- Las **áreas de 6 proyectos** que hoy figuran en 0, y el conflicto de Próspero Pinzón
  (5.400 m² en el campo, 8.600 m² en la memoria).
- Decidir si **Comedor Universidad del Valle** se publica sin fotos o si consigue imágenes.
- Decidir si el **blog** sigue en el menú.
- Reescribir el texto de **Arezzo**, que está en tono de brochure y rompe la voz del resto.

---

## Antes de tocar el DNS

No canceles Wix. No muevas el dominio hasta que:

- `pnpm build` pase limpio
- las 24 fichas se vean completas en producción de Vercel, en dominio de staging
- los 36 redirects respondan 301, incluidos los que llevan tilde y paréntesis
- Lighthouse móvil dé 95+ en home y en una ficha

El detalle del corte está en `02-roadmap-fases.md`, fase 7. Sigue ese orden y no
improvises con el DNS: bajar el TTL 24 horas antes es lo que evita el día de sitio caído.
