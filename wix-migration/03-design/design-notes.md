# Notas de diseño — sistema visual actual de planobase.co

## Carácter

Casi monocromo, muy austero, peso tipográfico uniforme. La jerarquía se construye **con tamaño y aire, nunca con negritas**: todo el sitio usa `font-weight: 400`. Esto es coherente con el lenguaje del estudio (volúmenes sobrios, materiales nobles) y vale la pena conservarlo como regla explícita en el sitio nuevo.

## Color

| Token | Hex | Uso actual |
|---|---|---|
| `--pb-ink` | `#23282C` | Texto principal, títulos, botones sólidos |
| `--pb-accent` | `#55839B` | Azul acero: links, líneas, texto secundario, bordes de botón |
| `--pb-muted` | `#919496` | Estados deshabilitados, texto terciario |
| `--pb-line` | `#C8C9CA` | Divisores |
| `--pb-surface` | `#FFFFFF` | Fondo primario |
| `--pb-surface-2` | `#F8F8F8` | Fondo secundario |
| `--pb-surface-3` | `#E1E6EA` | Bloques de acento suave |
| `--pb-tint` | `#F0F7F9` | Fondo frío muy claro |
| `--pb-accent-lt` | `#90C4CF` | Acento claro |
| `--pb-accent-dk` | `#234951` | Acento oscuro |

El acento nunca se usa como fondo grande: solo en líneas, texto y bordes. Mantener esa disciplina.

## Tipografía

- **Primaria:** Wix Madefor Text (propiedad de Wix, **no se puede llevar**). Es una grotesca humanista neutra.
  Reemplazos libres con métricas cercanas: **Inter** (más neutra) o **Manrope** (un poco más de carácter). Recomendado: Inter para cuerpo, y evaluar una serif discreta o una geométrica para títulos si se quiere subir el nivel editorial.
- **Secundaria:** Futura LT Light (licencia comercial, tampoco se puede llevar). Reemplazo geométrico libre: **Jost** (clon abierto de Futura) o **Poppins**.

Escala tipográfica de Wix, tal cual está hoy:

| Rol | Tamaño / interlínea |
|---|---|
| Display | 88px / 1.2 |
| H1 | 72px / 1.25 |
| H2 | 50px / 1.34 |
| H3 | 30px / 1.35 |
| H4 | 28px / 1.375 |
| H5 | 22px / 1.41 |
| Body L | 20px / 1.67 |
| Body M | 18px / 1.75 |
| Body S | 15px / 1.875 |
| Body XS | 14px / 1.79 (Futura) |

**Ojo:** los tamaños que realmente se usan en las páginas son mucho más bajos que la escala declarada — el cuerpo corre a 16px y los H2 de sección a 22px o 30px. Es decir, la escala está definida pero no se aplica: los títulos de sección se ven casi como texto corrido. En el sitio nuevo conviene usar la escala de verdad.

## Layout

- Ancho de contenido: los bloques de galería del estudio corren a 608×676 px por celda.
- El hero de la home es full-bleed a pantalla completa, sin texto encima.
- Barra de CTA fija al pie en todas las páginas: "RESERVA UNA ASESORÍA AHORA".
- Botones en mayúsculas sostenidas, sin radio (o radio muy bajo), fondo tinta o borde acento.

## Qué conservar y qué cambiar

**Conservar:** la austeridad cromática, el peso 400, el hero fotográfico a sangre, la barra de CTA persistente, las mayúsculas en botones.

**Cambiar:** aplicar de verdad la escala tipográfica (hoy todo se ve del mismo tamaño); poner nombre a las tarjetas de proyecto; abrir la ficha técnica en vez de esconderla en un acordeón; darle a la home un bloque de texto que diga qué hace el estudio.
