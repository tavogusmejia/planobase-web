# Master Plan v2 · Plano Base Web

Tablero de trabajo. Una tarea por línea, con código.
Actualizado: **6 de septiembre de 2026**

El razonamiento —por qué cada cosa se decidió como se decidió, las auditorías y
las discusiones— está en `docs/archivo/PLAN-MAESTRO-v1.md`, que se archivó
porque tenía 1.741 líneas y ya no servía para trabajar. **Este documento no
explica: enumera.** Si hace falta el porqué de algo, está allí.

---

## Cómo se lee

**El código dice quién puede hacerla**, que es lo que de verdad ordena el
trabajo:

| | Quién |
|---|---|
| **G** | Gustavo. Nadie más puede |
| **X** | Un tercero: abogado, contador, banco, Google, una redacción |
| **D** | Desarrollo |
| **C** | Contenido: artículos del blog |

**El estado:**

| | Qué significa |
|---|---|
| 🔴 | Bloquea a otras cosas |
| 🟡 | Siguiente |
| ⬜ | Pendiente, sin prisa |
| 🔒 | Bloqueada por otra tarea |
| ⏳ | Hecha, **sin publicar** — vive en `blog/seccion-y-articulos` |
| ✅ | Hecha y desplegada en `www.planobase.co` |

> **⏳ no se ve en el sitio.** Todo lo de las sesiones del 5 y 6 de septiembre
> está en la rama sin publicar: la política de datos y su enlace en el pie, el
> banner de consentimiento, los correos, las cabeceras de seguridad y once
> artículos. Para verlo: `git pull && pnpm dev`. Para publicarlo, pedirlo.

---

## G · Gustavo

| Código | | Tarea | Desbloquea |
|---|---|---|---|
| G-01 | 🔴 | Marcar construido / propuesta / concurso en los 23 → `docs/PROYECTOS-CONSTRUIDO.md` | C-08 a C-23, D-16, D-17, X-09 |
| G-02 | 🔴 | Sesión de lectura de copia con Eduardo — `/agendar` entera está sin aprobar | La pauta |
| G-03 | 🟡 | Decidir si se publica el lote que está en la rama | Que se vea todo lo ⏳ |
| G-04 | 🟡 | Dar el NIT y decidir cuánto tiempo se conservan los datos | X-01 |
| G-05 | ⬜ | Confirmar los precios de los peldaños 2 y 3 de la escalera | D-05 |
| G-06 | ⬜ | Buscar los términos de referencia de los 4 concursos *(o encargarlo)* | X-03 |

---

## X · Terceros

Detalle de cada uno —qué llevar, cuánto tarda, a quién— en
`docs/TRAMITES-EXTERNOS.md`.

| Código | | Trámite | Desbloquea |
|---|---|---|---|
| X-01 | 🔴 | Que un abogado lea `content/legal.ts` | La pauta |
| X-02 | 🔴 | Credenciales de Google: proyecto, Calendar API, cuenta de servicio, delegación | D-01 |
| X-03 | ⬜ | Términos de referencia o actas de los 4 concursos | C-10 · ya no bloquea H-03 |
| X-04 | 🟡 | Crear la propiedad de GA4 → `NEXT_PUBLIC_GA4_ID` | La pauta |
| X-05 | 🟡 | Crear la cuenta de Google Ads y su etiqueta de conversión | La pauta |
| X-06 | 🟡 | Verificar si aplica el registro RNBD ante la SIC | — |
| X-07 | ⬜ | Cuenta de comercio Wompi *(papeleo largo, arrancar en paralelo)* | D-18 |
| X-08 | ⬜ | Ficha de Google Business — dirección ya fijada: Cali | — |
| X-09 | 🔒 | Publicar un proyecto en ArchDaily o Plataforma Arquitectura | *(espera G-01)* |
| X-10 | ⬜ | Cuenta de un servicio de monitoreo de errores | D-02 |
| X-11 | ⬜ | Token de la API de conversiones de Meta | D-04 |
| X-12 | ⬜ | Plan de facturación electrónica con Odoo | — |

---

## D · Desarrollo

| Código | | Tarea | Nota |
|---|---|---|---|
| D-01 | 🟡 | Entrega A: calendario de reservas | El correo con el `.ics` ya está hecho; Meet espera X-02 |
| D-02 | ⬜ | Monitoreo de errores y uptime | Necesita X-10 |
| D-03 | ⬜ | UTMs que sobrevivan la navegación | Hoy solo funcionan si el anuncio apunta directo a `/contacto` |
| D-04 | ⬜ | Meta CAPI con deduplicación | Hoy se pierde entre el 30 y el 50 % de las señales |
| D-05 | ⬜ | `/agendar` con reconocimientos y obra | Hoy no pinta nada del portafolio |
| D-06 | ⬜ | `BreadcrumbList` en proyectos y servicios | Solo existe en dos rutas del blog. `FAQPage` no existe |
| D-07 | ⬜ | Métricas de rendimiento (Web Vitals) | Hoy no se mide nada del rendimiento real |
| D-08 | ⬜ | Panel de leads | Hoy la única forma de ver un lead es entrar a Supabase |
| D-09 | ⬜ | Antispam: tiempo mínimo de llenado | Hay honeypot y límite por IP; nada más |
| D-10 | ⬜ | Corte de dominio: DNS, variables, 301 desde Wix, Search Console | Comprobar antes si algún subdominio va por http — ver la nota de HSTS |
| D-11 | ⬜ | Respaldo de leads más allá de Supabase y correo | Si los dos fallan, el lead se pierde |
| D-12 | ⬜ | Integración continua y tests | — |
| D-13 | ⬜ | `/proyectos` estático | — |
| D-14 | ⬜ | Fechas reales en el sitemap | — |
| D-15 | ⬜ | Teclado en el menú móvil | — |
| D-16 | 🔒 | Páginas por ciudad: `/donde-trabajamos/bogota` y `/cali` | *(espera G-01)* |
| D-17 | 🔒 | Página de credenciales institucionales | *(espera G-01)* — convierte al comprador público |
| D-18 | 🔒 | Entrega B: pagos con Wompi | *(espera X-07)* |
| D-19 | ⬜ | Proyectar datos al cliente | — |
| ~~D-20~~ | ✅ | ~~Aligerar `/contacto`~~ | **Descartada.** Medido: 10,2 kB de 174. No lo vale |

---

## C · Contenido

**54 de 77 publicados**, los 54 en español e inglés. Faltan 23.
Listado y prioridades en `docs/PLAN-BLOG.md`.

### Se pueden escribir hoy

| Código | | Artículo |
|---|---|---|
| C-01 | 🟡 | Qué cambió en la NTC 4595:2025 — la búsqueda está verificadamente vacía |
| C-02 | ⬜ | Cómo se diseña un colegio en Colombia (NTC 4595 y 4596) |
| C-03 | ⬜ | Cómo se estructuran los pliegos de un equipamiento público |
| C-04 | ⬜ | Aguas residuales sin alcantarillado — ya no está bloqueado, ver la nota |
| C-05 | ⬜ | Cuánto cuesta ampliar un segundo piso, y si la casa lo aguanta |
| C-06 | ⬜ | Cubiertas: barro, termoacústica, verde o placa |
| C-07 | ⬜ | Casa de descanso o renta corta: qué cambia en el diseño |

**C-01 y C-02** comparten un aviso: la NTC 4595 solo se puede citar por su
adopción ministerial. No se cita una NTC por número sin haberla leído.

**C-04** llevaba meses parado porque la Resolución 0330 de 2017 es un escaneo
sin capa de texto. **Ya no es un bloqueo**: un PDF así se puede leer mirando la
página en vez de extrayendo el texto.

### Bloqueadas por G-01

| Código | | Artículo |
|---|---|---|
| C-08 | 🔒 | Pradera El Volcán: un colegio pensado como pieza de barrio |
| C-09 | 🔒 | Casa de la Cultura Las Colinas, Guaviare |
| C-10 | 🔒 | Alcaldía Local de Teusaquillo — *también espera X-03* |
| C-11 | 🔒 | CEFE Tunal |
| C-12 | 🔒 | Casa Aguilar: el método explicado al cliente particular |
| C-13 | 🔒 | Construir en una isla: por qué todo cuesta tres veces más |
| C-14 | 🔒 | Diseño resistente a huracanes: cargas, vidrio de impacto, anclaje |
| C-15 | 🔒 | Bermuda y sus cubiertas blancas: el edificio como captación de agua |
| C-16 | 🔒 | Agua dulce donde no hay ríos: cisternas y ósmosis inversa |
| C-17 | 🔒 | La sal se lo come todo: materiales y el costo de equivocarse |
| C-18 | 🔒 | Cimentar sobre roca coralina y suelo kárstico |
| C-19 | 🔒 | Piedra coralina como material de proyecto |
| C-20 | 🔒 | Retiros de la línea de más alta marea y zona costera |
| C-21 | 🔒 | Fuera de red por obligación: solar, almacenamiento y agua |
| C-22 | 🔒 | Cuánto cuesta el m² en Bahamas, Bermuda y Turks & Caicos |
| C-23 | 🔒 | Lo que el Caribe insular le enseña a Barú, San Andrés y Santa Marta |

**Los dos pilares vacíos del blog son estos dieciséis.** El de casos propios
tiene un solo artículo y el del Caribe ninguno, y no por falta de material: por
G-01.

---

## Reglas que no se negocian

Salieron de errores que ya se cometieron. Cada una costó trabajo.

| | Regla |
|---|---|
| R-01 | **Al retomar un pilar, comprobar primero que sus normas siguen vigentes.** Ninguna guarda lo hace: el corpus citó una norma superada durante meses con el build en verde |
| R-02 | **Cada artículo se escribe en los dos idiomas en la misma pasada.** Traducir después obliga a releer la investigación entera |
| R-03 | **Lo que no se pueda verificar se declara dentro del artículo.** No se rellena |
| R-04 | **Un dato que se repite entre artículos se verifica una vez y se cita igual en todos.** Al copiarse deja de verificarse |
| R-05 | **Agentes en paralelo: repartir por archivos, no por temas.** Y ninguno toca `content/posts.ts` ni `content/blog/en/index.ts` |
| R-06 | **La experiencia del Caribe y de piscinas es de Gustavo, no del portafolio del estudio.** Se enuncia «quien dirige esta línea trae quince años en…» |
| R-07 | **El sitio va en usted.** En la conversación se tutea a Gustavo; son cosas distintas |
| R-08 | **No hay push ni merge a `main` por iniciativa propia.** El trabajo se acumula en la rama |
| R-09 | **Toda cifra lleva su fecha de corte.** Una cifra sin fecha es falsa dentro de seis meses |

---

## Lo que está esperando publicación

Hecho, verificado, sin publicar. Es G-03.

| | Qué |
|---|---|
| ⏳ | Política de datos bilingüe, autorización expresa con su prueba, y su enlace en el pie |
| ⏳ | Banner de consentimiento: ninguna etiqueta se carga sin un sí explícito |
| ⏳ | GA4 y la etiqueta de conversión de Ads, montadas detrás de ese consentimiento |
| ⏳ | Las dos plantillas de correo: acuse de recibo y confirmación de reserva con `.ics` |
| ⏳ | Cuando el envío falla, hay a dónde llamar: WhatsApp, teléfono y correo |
| ⏳ | Cabeceras de seguridad: CSP, HSTS, anti-enmarcado y el resto |
| ⏳ | Accesibilidad del formulario: cada campo con su ayuda y su error anunciados |
| ⏳ | El artículo del sismo, y los diez del pilar de piscinas |
| ⏳ | El artículo de la Ley 1209, actualizado contra la normativa de 2026 |
| ⏳ | Los tres nodos del JSON-LD: zona de servicio nacional, una sola entidad |
| ⏳ | Registro «usted» en la interfaz, y siete fugas del bilingüe corregidas |

---

## Frentes cerrados

Para no volver a abrirlos por olvido. El detalle está en el archivo, §15.

| | Frente |
|---|---|
| ✅ | El sitio es bilingüe de verdad: 95 URLs inglesas con `hreflang` recíproco |
| ✅ | APBS y la calculadora de expensas, para los 1.103 municipios del DANE |
| ✅ | El rediseño de las páginas de proyecto |
| ✅ | El formulario recibe leads de todo el país |
| ✅ | Cinco guardas de build que no dejan compilar si algo se rompe |

---

## Conflictos cerrados

| Código | | Qué |
|---|---|---|
| H-03 | ⏳ | ~~«Cuatro reconocimientos en concurso público nacional»~~ — **cerrado el 6/9**: Gustavo confirma que los cuatro son nacionales. La afirmación del sitio se mantiene y la confirmación queda registrada en `content/site.ts` |
| H-06 | ⏳ | ~~«Cuatro» y «cinco» conviven sin explicarse~~ — **cerrado el 6/9**: el titular de `/estudio` ahora dice «cinco: cuatro públicos nacionales y uno privado» |

**X-03 deja de bloquear y sigue valiendo la pena.** Los términos de referencia ya
no hacen falta para sostener la afirmación, pero el nombre oficial de cada
concurso es mejor copia que el adjetivo, y permitiría completar los subtítulos de
Teusaquillo y Las Colinas, que hoy no dicen el ámbito.
