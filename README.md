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
pnpm build      # tiene que pasar sin errores ni warnings
pnpm lint
pnpm typecheck
```

### Variables de entorno

Crea `.env.local` en la raíz. **No está `.env.example`**: la regla `deny` de
`.claude/settings.json` usa el patrón `Edit(./.env.*)`, que también bloquea ese
archivo. Conviene acotarla a `.env`, `.env.local` y `.env.*.local`.

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=https://www.planobase.co
CONTACT_NOTIFY_EMAIL=proyectos@planobase.co
RESEND_API_KEY=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=573014264603
```

---

## Estado

**Hecho.** Sistema visual, i18n, home con hero rotante, `/proyectos` con filtro
funcional, las 23 fichas de proyecto, `/servicios` con sus cuatro líneas,
`/estudio`, `/agendar`, `/contacto`, `/blog`, sitemap con hreflang, robots, los
36 redirects 301 y JSON-LD de proyecto, artículo y servicio.

**Falta.** Supabase (esquema y `seed.ts`), el panel `/admin`, el envío de correo
del formulario, el Pixel de Meta, la pasarela de pago y la auditoría Lighthouse.

### Portafolio de servicios

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
- **Las imágenes salen del juego de Wix**, no de los originales de OneDrive.
  Emparejar los dos juegos automáticamente arriesga poner la foto de un proyecto
  en la ficha de otro. Ver más abajo.

---

## Pendiente de confirmar — no inventar

### Decisiones de negocio

1. **Precio de la asesoría.** El sitio dice $50.000 COP con pago por adelantado y
   no reembolsable. El plan de Facebook Ads la anuncia como *"sin costo de consulta
   inicial"* y *"sin compromiso"*. **Se contradicen**, y es justo el punto donde se
   rompe el embudo. El valor vive en `content/site.ts` → `asesoria.precioCOP`.
2. **Dirección pública.** El sitio dice Cali (Calle 18 # 61-29); el plan de
   campaña pide poner Jamundí en Facebook.
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
7. **Correo del estudio.** Confirmado `proyectos@planobase.co`. Las tarjetas de
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
