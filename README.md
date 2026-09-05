# Plano Base Web

Sitio de Plano Base Arquitectos. Reconstrucción fuera de Wix.

Next.js 15 (App Router) · TypeScript estricto · Tailwind v4 · next-intl (es/en) · Vercel.

---

## Poner en marcha

```bash
pnpm install
pnpm media     # genera public/media/ y content/projects.ts desde assets-originales/
pnpm dev
```

`pnpm media` es idempotente: salta lo que ya generó. Tarda unos minutos la primera
vez porque procesa 230 imágenes.

```bash
pnpm build          # tiene que pasar sin errores ni warnings
pnpm lint
pnpm typecheck

pnpm seed           # sube los medios al bucket y verifica la base
pnpm media:upload   # solo la sincronización de medios (--force reescribe)
```

### Variables de entorno

Crea `.env.local` en la raíz. **Esta lista es la copia autoritativa**: no hay
`.env.example` porque la regla `deny` de `.claude/settings.json` usa el patrón
`Edit(./.env.*)`, que también bloquea ese archivo. Conviene acotarla a `.env`,
`.env.local` y `.env.*.local`.

```bash
# --- sitio ---
NEXT_PUBLIC_SITE_URL=http://localhost:3000   # en Vercel: https://www.planobase.co

# --- supabase ---
NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon o sb_publishable_...>
SUPABASE_SERVICE_ROLE_KEY=<service_role o sb_secret_...>

# --- medios ---
# Se deja COMENTADA en local a propósito: así las imágenes salen de
# public/media/, que es instantáneo y no toca la red. Descoméntala solo para
# ensayar producción con `pnpm build && pnpm start`.
# NEXT_PUBLIC_MEDIA_ORIGIN=https://<ref>.supabase.co/storage/v1/object/public/media

# --- leads ---
LEADS_NOTIFY_TO=proyectos@planobase.co
LEAD_IP_SALT=<openssl rand -hex 16>
# LEADS_NOTIFY_FROM=Plano Base <web@planobase.co>   # tras verificar el dominio
# RESEND_API_KEY=<opcional; sin ella el lead se guarda pero no se avisa>

# --- medición ---
# Las cuatro son opcionales y todas están detrás del consentimiento: si no hay
# ninguna, el sitio no monta etiquetas y tampoco pregunta nada, porque pedir
# permiso para algo que no se va a hacer gasta la única oportunidad de
# preguntarlo bien.
# NEXT_PUBLIC_META_PIXEL_ID=<solo dígitos>
# NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
# La etiqueta de la conversión «lead» dentro de esa cuenta de Ads. Va aparte
# porque se genera en otro sitio de la interfaz; sin ella, Ads recibe la
# conversión y no sabe clasificarla, así que no la cuenta.
# NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL=<etiqueta>

# --- apbs ---
# Protege el cron que avisa cuando un dato de las calculadoras va a caducar.
# Vercel lo manda como `Authorization: Bearer <valor>`. Sin esta variable el
# endpoint responde 401 y no hace nada: es preferible un cron mudo a uno que
# cualquiera pueda disparar.
CRON_SECRET=<openssl rand -hex 32>
```

`pnpm seed` imprime el valor exacto de `NEXT_PUBLIC_MEDIA_ORIGIN` al terminar.

### Desplegar

Las imágenes **no viajan en el repositorio**: `public/media/` está en
`.gitignore` (73 MB regenerados desde `assets-originales/`, que tampoco se
versiona). Por eso el orden importa:

1. `pnpm seed` — sube los 215 `.webp` al bucket `media`.
2. Cargar las **siete** variables en Vercel, en los **tres** entornos
   (`production`, `preview` y `development`). Olvidar `preview` deja cada rama
   con las imágenes rotas, que es justo donde se revisan los cambios.
3. Desplegar, verificar en `*.vercel.app`, y solo entonces mover el DNS.

Dos trampas que cuestan una tarde:

- **Las `NEXT_PUBLIC_*` se congelan en el build.** Añadir o cambiar una después
  del deploy no hace nada hasta que se reconstruye, y Vercel no reconstruye por
  cambiar una variable: hay que forzarlo (`vercel --prod --force`).
- **Antes de desplegar, ensaya en local**: descomenta `NEXT_PUBLIC_MEDIA_ORIGIN`,
  corre `pnpm build && pnpm start` y comprueba que ninguna imagen da 400. Un 400
  ahí significa `remotePatterns` vacío, y es mucho más barato descubrirlo aquí.

`next.config.ts` tiene una guarda que rompe el build en Vercel si no hay origen
de medios ni `public/media/`. Sin ella el fallo es silencioso: build verde,
deploy verde, sitio sin una sola fotografía.


---

## Estado

**Hecho.** Sistema visual, i18n, home con hero rotante, `/proyectos` con filtro
funcional, las 23 fichas de proyecto, `/servicios` con sus cuatro líneas,
`/estudio`, `/agendar`, `/contacto`, `/blog`, sitemap con hreflang, robots, los
36 redirects 301 y JSON-LD de proyecto, artículo y servicio.

**Falta.** El panel `/admin`, el Pixel de Meta, la pasarela de pago y la
auditoría Lighthouse. La migración del contenido editorial a Supabase queda para
cuando exista el panel: hoy `content/` es donde se edita bien, y el esquema de
referencia es bilingüe por tablas de traducción mientras los tipos del sitio son
monolingües, así que esa migración necesita su propia capa de mapeo.

### Servicios: qué se publica y qué no

`content/servicios.ts` guarda los **43 servicios** del PDF del estudio, completos,
para propuestas y licitaciones. **La web no los publica todos.** `content/puertas.ts`
selecciona **16** y los reagrupa en cinco puertas tituladas con la pregunta del
cliente, no con la taxonomía interna del proveedor.

Fuera de la web pública, sobre el informe de posicionamiento AEC:

- **Mantenimiento operativo** (19, 20, 22–30) y **toda la fabricación** (33–43).
  Mostrar "mantenimiento de piscinas" junto a un primer puesto de concurso
  nacional no suma el mantenimiento: resta el premio.
- **6 (LEED/EDGE) y 7 (BIM 7D)**, retirados por riesgo, no por estética:
  anuncian acreditaciones que el estudio no tiene documentadas.

Se ofrecen en propuesta, cuando el cliente ya está dentro.

### Portafolio de servicios (catálogo completo)

`content/servicios.ts` se genera desde `GPB - Portafolio de Servicios
Completos.pdf` (OneDrive · Gerencia): 43 servicios en cuatro líneas, con su
descripción y sus exclusiones. Cada línea tiene su propia URL indexable, que es
lo que permite que alguien buscando "interventoría de obra Cali" llegue al sitio.

Para regenerarlo tras un cambio del PDF hay que volver a correr el parser; el
procedimiento está en el historial de git del commit que lo introdujo.

### De dónde salen los datos

Todo el contenido se genera desde `wix-migration/` hacia `content/`, tipado.
`src/lib/data/` es la única capa que las páginas consultan: cuando Supabase esté
cargado, solo cambia el cuerpo de esas funciones y las páginas no se tocan.

Las imágenes viven en `public/media/proyectos/<slug>/NN.webp`, que es la misma
ruta que usará el bucket `media` de Storage.

---

## Decisiones tomadas y por qué

- **La raíz `/` no entra en los redirects.** `redirects.json` la manda a `/es`
  como 301 permanente, pero eso congela el idioma en el caché del navegador y
  deja `/en` inalcanzable desde la raíz. La negocia el middleware por
  `Accept-Language`, con español por defecto.
- **301 explícito, no 308.** `permanent: true` en Next emite 308. Google lo trata
  igual, pero hay rastreadores viejos que no.
- **"Comedor Universidad del Valle" no se publica.** No tiene ni una imagen; la
  ficha quedaría vacía. Está en los datos, marcado como no publicado.
- **Noto Sans, no Inter ni Jost.** Es la tipografía complementaria que declara el
  manual corporativo y es libre. Area Normal, la primaria del manual, es comercial
  y la licencia de escritorio del estudio no cubre uso web: vive solo dentro del
  SVG del logo, con el texto en trazados.
- **Peso 400 en web.** El manual manda Bold para títulos, pero es un manual de
  impresión. Con la escala real (88/72/50 px) la jerarquía se sostiene sola.
- **El filtro no usa JavaScript.** Cada categoría es un enlace con su URL, así
  que el estado es compartible, indexable y funciona con el botón atrás.
- **El hero rota entre siete proyectos**, cinco segundos cada uno, con el
  nombre visible y enlace a la ficha. Solo entran proyectos con portada de
  1920 px o más: la regla vive en `src/lib/data/projects.ts` para que el sitio
  no pueda degradarse solo cuando se suban fotos desde el panel.
- **Los titulares usan `measure-display` (52rem), no `measure` (34rem).**
  La medida de lectura calibrada a 68 caracteres de cuerpo, aplicada a 50 u
  88 px, convierte cualquier frase larga en una pared.
- **Conmutador Estudio / Oficina técnica, no pantalla de bienvenida.** El perfil
  se deriva de la ruta: `/servicios` y `/agendar` son Oficina, el resto Estudio.
  No hay puerta que obligue a clasificarse antes de entrar — eso pierde entre el
  20 y el 40 % del tráfico frío—, ni dos dominios que partan la autoridad SEO.
  Un dominio, dos registros de lectura.
- **Etiqueta "Concurso" solo con evidencia inequívoca.** El volcado de Wix trae
  `construido` marcado en un solo proyecto de 24, y eso es un vacío del CMS: Casa
  Aguilar y Tirreno tienen fotografía de obra terminada. Se etiqueta donde el
  slug empieza por `concurso-` o hay premio; del resto no se afirma nada.
- **Las imágenes salen del juego de Wix**, no de los originales de OneDrive.
  Emparejar los dos juegos automáticamente arriesga poner la foto de un proyecto
  en la ficha de otro. Ver más abajo.

---

## Pendiente de confirmar — no inventar

### Hechos del estudio aportados en sesión, sin detalle todavía

- **Experiencia internacional.** Gustavo confirmó (4/9/2026) que tanto él como Eduardo
  tienen obra fuera de Colombia, **incluida residencial de ultra lujo en islas del
  Caribe**. Hoy el sitio no lo menciona en ninguna parte, ni el volcado de Wix lo
  recoge. Es la credencial que separa a un estudio regional de uno al que se le encarga
  una casa de alto patrimonio, así que no puede quedarse fuera. Falta: qué proyectos,
  dónde, cuándo, en qué rol y si hay material publicable.

  Ojo con la tensión de posicionamiento antes de escribirlo: `/estudio` afirma que *"la
  mayor parte de nuestra obra es pública"*, y esto abre una segunda línea de trabajo. No
  se contradicen, pero hay que decidir cuál abre la página.

### Decisiones de negocio

1. **Precio de la asesoría.** El sitio dice $50.000 COP con pago por adelantado y
   no reembolsable. El plan de Facebook Ads la anuncia como *"sin costo de consulta
   inicial"* y *"sin compromiso"*. **Se contradicen**, y es justo el punto donde se
   rompe el embudo. El valor vive en `content/site.ts` → `asesoria.precioCOP`.
2. ~~**Dirección pública.**~~ **Resuelto (4/9/2026):** se queda Cali, Calle 18
   # 61-29. Es la sede real y compite por «arquitectos en Cali», la consulta de
   cabeza del negocio. Anotado el contrapeso: la pauta apunta a Jamundí, donde
   el portafolio solo tiene dos proyectos. Si algún día se crea la ficha de
   Google Business, esta es la dirección — y conviene no cambiarla después,
   porque hacerlo resetea la antigüedad de la ficha.
3. **Copia de `/agendar`.** Está redactada a partir de la descripción documentada
   del servicio y del plan de campaña. Debería leerla alguien del estudio antes de
   invertir en pauta.
4. **Razón comercial.** El portafolio de servicios está firmado como **"Grupo
   Plano Base"**; el sitio usa "Plano Base" por la decisión de una sola marca.
   Confirmar cuál se anuncia.
5. **Faltan dos servicios en el portafolio documentado.** Gustavo mencionó
   logística de transporte de materiales y maquinaria, y no aparecen en el PDF.
   Si son servicios reales, hay que añadirlos allí y regenerar el contenido.
6. **Reducción mínima del logo.** El manual fija 240 px de ancho para el
   imagotipo horizontal en digital. En la cabecera mide ~143 px, que es lo que
   cabe en una web. Confirmar si ese mínimo aplica a pantalla o solo a impresión.
7. **Naturaleza de cada proyecto: construido o propuesta de concurso.** Es el
   riesgo reputacional más alto del portafolio y hoy el dato no existe. Hay que
   marcarlo proyecto por proyecto.
8. **Precios de los peldaños 2 y 3** (estudio de viabilidad, anteproyecto). La
   escalera de producto está publicada sin cifras porque solo el precio de la
   asesoría está confirmado.
9. ~~**Matrícula profesional** (CPNAA / COPNIA) de los dos socios.~~
   **Resuelto (4/9/2026):** no se publican. Son documentación de respaldo y no
   material de sitio web; el NIT es un dato comercial que va en la propuesta.
   Se deja anotado el contrapeso que se descartó a conciencia: un comprador
   institucional suele verificar esa casilla antes de llamar.
10. **La visión de `/estudio` es un borrador para Eduardo.** Los cuatro temas
    salen de contar de qué habla el estudio en sus propias memorias, y cada uno
    lleva una cita literal. Está escrito para que él lo corrija a su voz.
11. **El mensaje de campaña puede estar describiendo al estudio equivocado.**
    «Bioclimático» aparece 10 veces en las 24 memorias; «público y comunidad», 97.
12. **Correo del estudio.** Confirmado `proyectos@planobase.co`. Las tarjetas de
   presentación usan `@plba.studio`: decidir si ese dominio se anuncia o no.

### Datos del portafolio

5. **Categoría de cada proyecto.** La de `projects.json` es una propuesta, no dato
   de Wix — el filtro de Wix estaba roto y no había nada que copiar.
6. **Áreas en cero** en seis proyectos: Plaza de los Libaneses, Casa Aguilar,
   Casa Aguilar Castrillón, Colegio Bolívar, Espacio Público Centro de Cali y
   Teatro César Conto Ferrer. Hoy el campo se oculta; nunca se muestra "0 m²".
7. **Área de Colegio Próspero Pinzón.** La ficha dice 5.400 m²; la memoria, ~8.600 m².
8. **Ciudades: ¿siete u ocho?** Los datos dan ocho porque incluyen Jamundí. El
   material de migración cuenta siete. La home calcula la cifra del conjunto real.
9. **Fotos del equipo.** Hay dos personas con nombre y cargo confirmados por las
   tarjetas de presentación, pero sin retrato en el sitio nuevo.

### Imágenes

10. **Cuatro portadas se quedan cortas** para uso a pantalla completa: Colegio y
    Teatro El Ensueño (1425×700), Las Colinas y Pompilio Martínez (1366×768) y
    Pradera El Volcán (1807×1265). El sistema las mantiene fuera de los usos a
    sangre por regla.
11. **Hay originales mejores sin usar.** En OneDrive
    (`02 Diseño Gráfico / Pagweb / Insumos`) hay ~1,2 GB para once proyectos, con
    resoluciones muy superiores, planchas que Wix nunca mostró —CEFE Tunal tiene
    plantas a 9948×7031 y secciones a 11811 px— y **seis videos MP4**. Otros once
    proyectos tienen la carpeta vacía. Es una tarea de curaduría manual: hay que
    emparejar imagen por imagen.
12. **Se bajaron de Wix las 7 portadas que faltaban** (el script original traía 218
    de 225 archivos). La cuenta de Wix debe seguir activa hasta terminar la fase 7.

---

## Estructura

```
content/          datos generados desde wix-migration, tipados
public/brand/     logo vectorial extraído de 00-logoPBA-RGB.ai
public/media/     imágenes procesadas (ignorado por git; lo genera pnpm media)
src/app/[locale]/ rutas del sitio
src/components/   ui · layout · project · forms · brand
src/lib/          data · types · schemas · utils · fonts
src/i18n/         routing · request · navigation
scripts/          prepare-media.ts
wix-migration/    material de migración, congelado como referencia
assets-originales/ 225 imágenes de Wix (ignorado por git)
```

## Nota sobre Dropbox

El repo vive dentro de Dropbox. Después de cada `pnpm install` grande hay que
volver a marcar las carpetas pesadas:

```bash
bash wix-migration/07-tooling/dropbox-ignore.sh
```
