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
| 🟢 | Hecha y desplegada en `www.planobase.co` |
| ⬜ | Pendiente, sin prisa |
| 🔒 | Bloqueada por otra tarea |
| ⬛ | Cancelada |
| ⏳ | Hecha, **sin publicar** — vive en `blog/seccion-y-articulos` |

Los tres primeros son el semáforo y se leen en ese orden: rojo detiene a otras
cosas, amarillo es lo que sigue, verde está en el sitio. Los tres de abajo no son
estados del semáforo sino matices: sin prisa, esperando a otra tarea, o hecha
pero todavía sin publicar.

> **Publicado el 6/9/2026.** Todo lo de las sesiones del 5 y el 6 está en
> producción, incluido el calendario de reservas, y `main` y la rama vuelven a
> tener lo mismo. **No hay nada esperando publicación.**
>
> Lo único que queda por hacer a mano en Supabase: nada. Las dos migraciones
> —`leads` y `reservas`— están aplicadas y comprobadas contra producción.

---

## G · Gustavo

| Código | | Tarea | Desbloquea |
|---|---|---|---|
| ~~G-01~~ | 🟢 | ~~Marcar construido / propuesta / concurso~~ — **contestada por Eduardo el 6/9**: 23 de 24. Cinco fichas estaban mal marcadas. Queda solo Teusaquillo, por datos → G-07 | **Desbloqueadas: C-08 a C-23, D-16, D-17, X-09** |
| ~~G-07~~ | 🟢 | ~~La ficha de Teusaquillo~~ — **resuelta el 6/9 retirando el proyecto entero del sitio**, decisión de Gustavo. Ver la nota | — |
| ~~G-09~~ | 🟢 | ~~Configurar `FORM_TOKEN_SECRET`~~ — **hecho el 6/9**: secreto propio de 64 caracteres en Producción y Preview, marcado como sensible, y redesplegado para que entre | Se separó de `LEAD_IP_SALT` a propósito: ver la nota |
| G-08 | 🟡 | **Borrar del bucket las 8 imágenes de Teusaquillo.** Hay script: `pnpm media:retirar alcaldia-local-de-teusaquillo` para ver qué hay, y otra vez con `--borrar` | Necesita las claves de `.env.local`. Se niega a tocar un proyecto publicado |
| G-02 | 🔴 | Sesión de lectura de copia con Eduardo — `/agendar` entera está sin aprobar | La pauta |
| ~~G-03~~ | 🟢 | ~~Publicar el lote de la rama~~ — hecho el 6/9: 22 commits a `main`, más la migración aplicada en Supabase |
| ~~G-04~~ | 🟢 | ~~NIT y plazo de conservación~~ — hecho el 6/9: NIT `901603373-9` y diez años con supresión a petición. **X-01 queda sin nada pendiente por parte del estudio** |
| ~~G-05~~ | 🟢 | ~~Precios de los peldaños 2 y 3~~ — decidido el 6/9: **la escalera no publica precios**, se cotiza cliente por cliente. Se retiró también el «desde $300.000» del peldaño 2 |
| G-06 | ⬜ | Términos de referencia de los concursos — **aplazado el 6/9, y sin coste**. Solo faltan dos: Teusaquillo y Las Colinas. Empezar preguntándole a Eduardo, que se presentó y pudo guardar las bases; si no, SCA o SECOP | Nada. Solo mejora la copia |

---

## X · Terceros

Detalle de cada uno —qué llevar, cuánto tarda, a quién— en
`docs/TRAMITES-EXTERNOS.md`.

| Código | | Trámite | Desbloquea |
|---|---|---|---|
| X-01 | 🔴 | Que un abogado lea `content/legal.ts` — **ya no falta nada nuestro** | La pauta |
| X-02 | 🔴 | Credenciales de Google: proyecto, Calendar API, cuenta de servicio, delegación | D-01 |
| X-03 | ⬜ | Términos de referencia o actas de los **3** concursos públicos que quedan | Ya no bloquea nada. C-10 se retiró con el proyecto |
| X-04 | 🟡 | Crear la propiedad de GA4 → `NEXT_PUBLIC_GA4_ID` | La pauta |
| X-05 | 🟡 | Crear la cuenta de Google Ads y su etiqueta de conversión | La pauta |
| X-06 | 🟡 | Verificar si aplica el registro RNBD ante la SIC | — |
| X-07 | ⬜ | Cuenta de comercio Wompi *(papeleo largo, arrancar en paralelo)* | D-18 |
| X-08 | ⬜ | Ficha de Google Business — dirección ya fijada: Cali | — |
| X-09 | 🟡 | Publicar un proyecto en ArchDaily o Plataforma Arquitectura — **desbloqueada el 6/9**. Ahora hay seis obras construidas que ofrecer, no una |
| X-10 | ⬜ | Cuenta de un servicio de monitoreo de errores | D-02 |
| X-11 | ⬜ | Token de la API de conversiones de Meta | D-04 |
| X-12 | ⬜ | Plan de facturación electrónica con Odoo | — |

---

## D · Desarrollo

| Código | | Tarea | Nota |
|---|---|---|---|
| ~~D-01~~ | 🟢 | ~~Entrega A: calendario de reservas~~ — **publicado el 6/9 y funcionando**: la API devuelve 120 franjas, ninguna en fin de semana | El enlace de Meet se rellena solo cuando llegue X-02 |
| D-21 | ⬜ | **Decidir cómo se agenda de verdad** — aplazado el 6/9, ver el marcador de abajo | Ya no bloquea nada: D-01 salió. Decide si se queda |
| D-22 | ⬜ | Poder cancelar o mover una reserva desde el correo | Solo si se sigue con el calendario propio |
| ~~D-23~~ | 🟢 | ~~Guarda de enlaces de fuentes~~ — `pnpm check:enlaces`. **No va en el build a propósito**: llama a 180 servidores y un gestor normativo lento no puede impedir un despliegue | 177 de 181 responden. Probada inyectando una URL muerta |
| D-02 | ⬜ | Monitoreo de errores y uptime | Necesita X-10 |
| ~~D-03~~ | 🟢 | ~~UTMs que sobrevivan la navegación~~ — ventana de 30 días, la misma de Meta y Google Ads | Un rechazo explícito de consentimiento borra lo guardado |
| D-04 | ⬜ | Meta CAPI con deduplicación | Hoy se pierde entre el 30 y el 50 % de las señales |
| ~~D-05~~ | 🟢 | ~~`/agendar` con reconocimientos y obra~~ — tres obras construidas y los cuatro premios | **Solo era posible desde G-01**: antes habrían sido tres propuestas |
| ~~D-06~~ | 🟢 | ~~`BreadcrumbList` en proyectos y servicios~~ — cuatro rutas, con `item` absoluto | **`FAQPage` no se implementó y esa es la entrega**: ninguna página lo merece. Ver la nota |
| ~~D-07~~ | 🟢 | ~~Métricas de rendimiento (Web Vitals)~~ — ruta propia, sin contratar nada | Un solo `sendBeacon` al ocultarse la pestaña. No registra IP ni agente |
| D-08 | ⬜ | Panel de leads | Hoy la única forma de ver un lead es entrar a Supabase |
| ~~D-09~~ | 🟢 | ~~Antispam: tiempo mínimo de llenado~~ — 4 s, con el instante firmado por el servidor | **Un bot paciente pasa**, y está declarado. Ver G-09 |
| D-10 | ⬜ | Corte de dominio: DNS, variables, 301 desde Wix, Search Console | Comprobar antes si algún subdominio va por http — ver la nota de HSTS |
| D-11 | ⬜ | Respaldo de leads más allá de Supabase y correo | Si los dos fallan, el lead se pierde |
| ~~D-12~~ | 🟢 | ~~Integración continua y tests~~ — Actions en cada push y PR, más 65 pruebas | Las catorce mutaciones de prueba fallaron como debían. Ver la nota |
| ~~D-13~~ | 🟢 | ~~`/proyectos` estático~~ — el filtro por query se retira; vive en las siete rutas de categoría | 301 en `next.config.ts` para las URLs viejas |
| ~~D-14~~ | 🟢 | ~~Fechas reales en el sitemap~~ — 39 de 45 filas emitían la hora del build | 146 fechas honestas; 86 URLs sin fecha a propósito |
| ~~D-15~~ | 🟢 | ~~Teclado en el menú móvil~~ — Escape cierra y devuelve el foco | Sin trampa de foco: es un desplegable, no un diálogo |
| D-16 | 🟡 | ~~Páginas por ciudad~~ → **Que el alcance nacional se vea, sin una página por ciudad** — reformulada por Gustavo el 6/9. Ver la nota |
| ~~D-17~~ | 🟢 | ~~Página de credenciales institucionales~~ — **`/experiencia`**, los 22 publicados en tabla con filtro que recalcula los totales |
| D-18 | 🔒 | Entrega B: pagos con Wompi | *(espera X-07)* |
| D-19 | ⬜ | Proyectar datos al cliente | — |
| ~~D-20~~ | 🟢 | ~~Aligerar `/contacto`~~ | **Descartada.** Medido: 10,2 kB de 174. No lo vale |

### Marcador · cómo se agenda, sin decidir

D-01 **se publicó el 6/9 y está funcionando**, así que esto ya no bloquea nada:
decide si el calendario propio se queda o se sustituye. La comparación se deja
entera porque el punto débil sigue en pie.

**Una corrección, porque este tablero llegó a mentir sobre ello.** Decía que
faltaba aplicar la migración `20260906120000_reservas.sql` en Supabase. **Ya
estaba aplicada** — se comprobó el 6/9 llamando a `/api/agenda` en producción,
que respondió `hayAgenda: true` con 120 franjas. Sobre esa frase falsa se tomó
la decisión de no publicar D-01 durante medio día.

**El punto débil de lo que se construyó, dicho sin adornos:** *no ve el
calendario real de Gustavo.* Solo conoce las citas que él mismo creó, así que si
hay una reunión a las 10 el sitio sigue ofreciendo las 10.

| | Calendario propio *(construido)* | Google Appointment Schedules | Calendly |
|---|---|---|---|
| Ve el calendario real | **no** | sí | sí |
| Enlace de Meet | falta X-02 | automático | sí |
| Cancelar y mover solo | no | sí | sí |
| Costo | 0 | **ya se paga con Workspace** | gratis limitado |
| Estética del sitio | sí | iframe | iframe |
| Datos en la base propia | sí | no | no |
| Medir la conversión del anuncio | sí | **no** | a medias |
| Un solo correo, el del estudio | sí | Google manda el suyo | no |

**Lo que decide, y es una sola cosa:** con un iframe, la conversión ocurre dentro
de él, donde el Pixel y GA4 no la ven. Eso importa el día que haya pauta —se
pagaría por anuncios sin poder saber cuál trae citas—, y no importa nada
mientras no la haya.

**Y lo que falta en el propio es exactamente X-02.** Conectar la API de Google
Calendar cierra el hueco de la disponibilidad real *y* trae el enlace de Meet,
sin perder diseño, datos ni medición. El código está escrito con esa costura
puesta.

Las tres razones por las que en su día se descartó Cal.com están en
`archivo/PLAN-MAESTRO-v1.md` §3. Dos siguen valiendo para Google y Calendly: el
pago —ninguno integra Wompi ni PSE— y la estética en la página que recibe el
dinero.

Calendly no se recomienda: hace lo mismo que Google y se paga aparte.

---

## C · Contenido

**62 de 77 publicados**, los 62 en español e inglés. Faltan 15, y son exactamente
los que espera G-01: **no queda nada escribible sin él**.
Listado y prioridades en `docs/PLAN-BLOG.md`.

### Se pueden escribir hoy

| Código | | Artículo |
|---|---|---|
| C-01 | 🟢 | ~~Qué cambió en la NTC 4595:2025~~ — `ntc-4595-2025-que-cambio` |
| C-02 | 🟢 | ~~Cómo se diseña un colegio en Colombia~~ |
| C-03 | 🟢 | ~~Cómo se estructuran los pliegos de un equipamiento público~~ |
| C-04 | 🟢 | ~~Aguas residuales sin alcantarillado~~ — el escaneo se leyó mirándolo |
| C-05 | 🟢 | ~~Cuánto cuesta ampliar un segundo piso, y si la casa lo aguanta~~ |
| C-06 | 🟢 | ~~Cubiertas: barro, termoacústica, verde o placa~~ |
| C-07 | 🟢 | ~~Casa de descanso o renta corta: qué cambia en el diseño~~ |
| C-24 | 🟢 | ~~Cuánto cuesta un estudio de viabilidad de un predio~~ — `cuanto-cuesta-un-estudio-de-viabilidad` |
| C-25 | 🟢 | ~~Actualizar `reforzamiento-estructural-y-nsr-10`~~ — y salieron cinco defectos más, no dos |

Los siete se escribieron el 6/9 con tres agentes en paralelo, repartidos por
archivos y sin que ninguno tocara los índices. **El titular de C-01 resultó
falso al investigarlo**: la NTC 4595:2025 no movió ninguna área. Lo que cambió
es de dónde salen las cifras —la tabla de lotes pasó al anexo informativo—, y
esa es la tesis que se publicó.

**Los quince que faltaban dejaron de estar bloqueados el 6/9**, cuando Eduardo
contestó G-01. Los dieciséis códigos C-08 a C-23 pasan de 🔒 a escribibles, y con
ellos los dos pilares vacíos: casos propios y Caribe insular.

**Las fechas se repartieron el 6/9** para cumplir la R-17: el blog tenía dieciséis
artículos en cinco semanas y ahora ninguno comparte día. Quedan **35 plazas
libres** hasta hoy y **doce meses vacíos**, todos entre 2022 y 2024 — que es
justo donde encajan los quince que faltan, porque son casos de obra ya
construida y su fecha no la ata ninguna norma reciente. Al escribirlos, mirar
primero qué mes está libre.

**La única excepción a la R-17 es agosto de 2026, que lleva tres.** No cabía de
otra forma: cinco artículos citan cosas que ocurrieron entre el 5 de agosto y el
5 de septiembre —el Decreto 974, el simulador del CPNAA, las tarifas de energía,
la mesa del POT y las cifras del terremoto— y entre esos dos meses solo hay
cuatro plazas. Agosto es además el mes que de verdad fue excepcional.

**De C-25 salieron tres cosas que conviene no perder.** La primera, que el
capítulo es **A.10** y que dentro tenía lo que el artículo necesitaba: hasta
dónde hay que reforzar depende de la **edad de la edificación** (A.10.9.2), la
supervisión técnica independiente es obligatoria **sin umbral de área**
(A.10.1.6), y los Títulos J y K solo obligan si hay cambio de uso o ampliación
(A.10.1.3.7).

La segunda, que **el PDF del Título A que sale primero en una búsqueda es el de
2010 y está superado justo en esos puntos**. El Decreto 945 de 2017 añadió el
A.10.1.3.7 y volvió *independiente* la supervisión del A.10.1.6. Ninguna guarda
podía avisar: el Decreto 926 sigue vigente y es de 2010. **No hay ningún Título
A consolidado alojado en un dominio `.gov.co`**; si aparece uno, hay que
sustituir esa fuente.

La tercera, que el artículo llevaba **tres errores más** que nadie había pedido
buscar: decía «superen los 2.000 m²» donde la norma dice «tengan o superen»,
describía el 30 % de las expensas como si fuera del total cuando es del área a
intervenir, y prometía una exención de impuestos por «la licencia» cuando la
Ley 400 la da por la de remodelación.

**Y una que hay que vigilar:** en agosto de 2026 hubo un proyecto de decreto
que, según la prensa, habría hecho diseñar para fuerzas sísmicas menores. No se
expidió. Si vuelve, ese artículo es el primero que hay que revisar.

### Ya no bloqueadas · el pilar de casos propios y el del Caribe

| Código | | Artículo |
|---|---|---|
| C-08 | ⬜ | Pradera El Volcán: un colegio pensado como pieza de barrio |
| C-09 | ⬜ | Casa de la Cultura Las Colinas, Guaviare |
| ~~C-10~~ | ⬛ | ~~Alcaldía Local de Teusaquillo~~ — **cancelado el 6/9**: el proyecto se retiró del sitio |
| C-11 | ⬜ | CEFE Tunal |
| C-12 | ⬜ | Casa Aguilar: el método explicado al cliente particular |
| C-13 | ⬜ | Construir en una isla: por qué todo cuesta tres veces más |
| C-14 | ⬜ | Diseño resistente a huracanes: cargas, vidrio de impacto, anclaje |
| C-15 | ⬜ | Bermuda y sus cubiertas blancas: el edificio como captación de agua |
| C-16 | ⬜ | Agua dulce donde no hay ríos: cisternas y ósmosis inversa |
| C-17 | ⬜ | La sal se lo come todo: materiales y el costo de equivocarse |
| C-18 | ⬜ | Cimentar sobre roca coralina y suelo kárstico |
| C-19 | ⬜ | Piedra coralina como material de proyecto |
| C-20 | ⬜ | Retiros de la línea de más alta marea y zona costera |
| C-21 | ⬜ | Fuera de red por obligación: solar, almacenamiento y agua |
| C-22 | ⬜ | Cuánto cuesta el m² en Bahamas, Bermuda y Turks & Caicos |
| C-23 | ⬜ | Lo que el Caribe insular le enseña a Barú, San Andrés y Santa Marta |

**Los dos pilares vacíos del blog son estos dieciséis, y ya se pueden escribir.**
El de casos propios tiene un solo artículo —y es el heredado de Wix— y el del
Caribe ninguno.

**Y al desbloquearlos apareció un hueco que nadie había visto.** De los cuatro
artículos de casos propios que quedan —Pradera El Volcán, Las Colinas, CEFE
Tunal y Casa Aguilar— **ninguno trata una obra construida**: son tres concursos
y una propuesta. El quinto, Teusaquillo, se canceló con el proyecto. Y de las seis obras que sí están construidas —El
Ensueño, Bicentenario, Francisco Antonio Zea, Próspero Pinzón, Tirreno y
Arezzo— **no hay un solo artículo planeado**. Cinco de esas seis figuraban como
no construidas hasta el 6/9, así que el plan editorial se escribió sin saber
que existían. Conviene decidir si entran, porque una obra construida y visitable
convence más que un concurso.

**Al fecharlos, la R-17.** Quedan 35 plazas libres y doce meses vacíos entre 2022
y 2024, que es justo donde encajan: son obras ya construidas y no las ata ninguna
norma reciente.

---

## Por qué se retiró Teusaquillo

**Decisión de Gustavo, el 6/9/2026.** Al ir a cerrar G-07 —que era solo saber si
la obra se había construido— apareció que el edificio **se empezó en enero de
2017 y nunca se terminó**. Es un caso público: la prensa lo llama «el elefante
blanco de Teusaquillo», lleva años paralizado, costó 22.290 millones de pesos y
tiene a la Contraloría y a la Procuraduría de por medio.

**El premio era cierto y está verificado.** ArchDaily publica la ficha del Primer
Lugar del Concurso Público de Anteproyecto, arbitrado por la SCA con 53
propuestas, con los tres autores del estudio. Esto no fue corregir un dato falso:
fue decidir no asociar el nombre del estudio a ese edificio.

**Lo que costó.** Los reconocimientos bajan de cinco a cuatro y los públicos
nacionales de cuatro a tres. La categoría institucional se queda sin credencial
—sus dos proyectos publicados son propuestas— y su metadescripción se reescribió
sin reclamar premio.

**Lo que se retiró.** El proyecto del portafolio, su ficha, su premio en
`/estudio` y en cada página de servicio, y su mención en la metadescripción de la
categoría institucional. La redirección de la URL vieja de Wix ahora lleva al
portafolio en vez de morir en un 404 — la guarda de redirecciones lo detectó.

**Lo que no se borró, a propósito.** El dato sigue entero en `content/projects.ts`
y su traducción en `content/en/proyectos.ts`. Restituirlo es cambiar dos
booleanos y devolver una entrada a `reconocimientos`. Borrarlo habría hecho la
decisión irreversible sin necesidad.

**Lo que falta, y necesita sus claves: G-08.** Las ocho imágenes siguen en el
bucket público `media` de Supabase, bajo
`proyectos/alcaldia-local-de-teusaquillo/`, y responden 200 hoy. Se cierran con
`pnpm media:retirar alcaldia-local-de-teusaquillo` —que primero enseña lo que
encontró— y luego la misma orden con `--borrar`.

El script **se niega a borrar las imágenes de un proyecto que siga publicado**,
y también a correr sobre un slug que no exista. Despublicar es reversible;
borrar el archivo del bucket no lo es, y el orden correcto es siempre
despublicar, comprobar el 404 y borrar después. El original en
`assets-originales/` no se toca, así que restituir un proyecto es
`pnpm media && pnpm media:upload`.

---

## D-12 · lo que corre solo desde ahora

**`.github/workflows/ci.yml`**, en cada push y en cada PR: `typecheck`, `lint`,
`test` y `build`, en ese orden — de lo barato a lo caro, para que un error de
tipos no se descubra después de tres minutos de build.

**Ninguna guarda necesita secretos, y se comprobó en vez de suponerlo:** el sitio
entero se construye sin ningún `.env`, porque cada variable tiene reserva en
`src/lib/env.ts` y la guarda de medios solo se activa bajo `VERCEL`. La CI corre
en un fork sin dar de alta nada.

**Un aviso que conviene tener presente:** `check-vigencia` depende de la fecha.
El día que venza un dato de APBS, la CI se pondrá roja sin que nadie haya tocado
el código. Es lo correcto —para eso existe— pero ahora también parará las PR.

**`check:enlaces` va en un flujo aparte, los lunes.** No entra en cada push
porque llama a 180 servidores y una rama se pondría roja porque el gestor
normativo está lento a las once de la noche. Y **no lleva `continue-on-error`**:
si encuentra una fuente muerta el trabajo falla y GitHub avisa por correo. En
verde permanente nadie lo abriría nunca. No bloquea nada porque no se dispara en
push ni en PR. **Ojo: los flujos programados solo corren desde la rama por
defecto**, así que empieza a dispararse cuando esto esté en `main`.

### 65 pruebas, y por qué esas

Se priorizó por «cuánto duele el error y cuánto tarda en verse», no por
cobertura. Cada prueba está atada a un error que este proyecto ya cometió o que
no se vería nunca:

- **`franjas.ts`** — el único módulo donde un error no se ve: una franja mal
  calculada no rompe ninguna página ni sale en ningún registro, se convierte en
  una cita a la que no hay nadie. La prueba de `+00:00` contra `.000Z` cubre el
  caso en que **dos personas reservan la misma hora**. Y la de `DIAS_CERRADOS`
  cubre una rama que hoy **no ejecuta nadie**, porque la lista está vacía: podría
  estar rota desde el primer día.
- **`sello.ts`** — falla en silencio hacia los dos lados: ablandado entra el
  spam, endurecido se pierde el encargo por el que se paga la pauta. Una prueba
  cubre que `timingSafeEqual` **lanza** si los búferes miden distinto: sin la
  comprobación previa de longitud, mandar una firma corta no es un envío
  rechazado, es una excepción que tumba el formulario para todos.
- **`utils.ts`** — `naturalezaDe` con `null` que no es `false`, y la precedencia
  de El Ensueño; `formatArea` por idioma, que es el error de la fase 0 del
  bilingüe —«5.400 m²» un lector inglés lo lee como cinco coma cuatro—; y
  `fechaLarga`, donde medianoche UTC es el día anterior en Bogotá.
- **`atribucion.ts`** — la caducidad a 30 días, que es un error que tarda un mes
  en poderse ver.

**Se rompieron a propósito catorce funciones y las catorce fallaron.** Una de
esas mutaciones destapó además una prueba floja, que se reforzó. Verificado
aparte con una mutación independiente: invertir la precedencia de `naturalezaDe`
tumba exactamente la prueba que lo vigila.

---

## D-16, reformulada · el alcance nacional sin páginas por ciudad

**Gustavo la reformuló el 6/9:** basta con que a grandes rasgos se vea que el
estudio trabaja a nivel nacional. Una página por ciudad es demasiado trabajo —y
el propio plan lo avisaba: 800 a 1.200 palabras de contenido normativo cada una,
que hay que refrescar cuando cambie el POT, y una página de ciudad
desactualizada es peor que no tenerla.

**Y no hace falta, porque el dato ya lo dice.** Los 22 proyectos publicados están
en **7 departamentos y 8 ciudades**:

| Departamento | Proyectos |
|---|---|
| Bogotá D.C. | 9 |
| Valle del Cauca | 8 |
| Nariño · Antioquia · Cundinamarca · Guaviare · Chocó | 1 cada uno |

Eso no es «obra en todo el país» como adjetivo: es Ipiales en la frontera con
Ecuador, Quibdó en el Pacífico y San José del Guaviare en la Amazonía. **Nombrar
tres ciudades de periferia convence más que un mapa**, y no hay nada que
mantener.

**Lo que queda por hacer, entonces, es pequeño y se calcula solo:**

1. `/experiencia` ya cuenta las ciudades; que cuente también los departamentos.
2. Una línea en `/estudio` que nombre el alcance con ciudades reales en vez del
   adjetivo. **Es copia y la aprueba Gustavo**, no se publica por el camino.

Lo que **no** se hace: `LocalBusiness` en ninguna ciudad sin oficina física y
atendida. Declararlo sería mentir en el schema, y abrir ficha de Google Business
con una oficina virtual es causal de suspensión.

---

## Lo que se decidió al hacer las tareas D

**`FAQPage` no se implementó, y es una entrega y no una omisión.** No hay ninguna
página del sitio que lo merezca. El falso positivo tentador es `/servicios`, que
pinta siete pares pregunta-respuesta visibles — pero sus «preguntas» son
declaraciones en la voz del cliente: «Tengo un lote y quiero construir», «Se está
fisurando». Marcar un catálogo de servicios como FAQ es el abuso que Google
penaliza. Y desde agosto de 2023 solo muestra ese resultado enriquecido a sitios
de gobierno y salud, así que forzarlo sería asumir el riesgo sin el premio.

**Un caso que queda a decisión de Gustavo:** `diez-preguntas-antes-de-firmar-con-un-constructor`
sí tiene diez preguntas con texto debajo. No se marcó porque son preguntas para
hacerle **al constructor**: la página enseña a evaluar la respuesta de un
tercero, no la responde. Decirle a Google que la responde sería falso.

**El sitemap pasa de 232 fechas a 146.** Las 86 restantes no llevan `lastModified`
porque no hay forma honesta de fecharlas: `content/projects.ts` lo regenera `pnpm
media` sin marca de tiempo, y verticales, puertas y copia de página son texto sin
campo de revisión. Para que la lleven hace falta un `actualizado` por entidad en
`content/`, que es otra tarea.

**El antispam declara lo que no hace.** Un bot que pida el sello y espere cinco
segundos pasa. No distingue a una persona de un programa: distingue a quien
esperó de quien no, y sube el costo del ataque. Está escrito así en el código
para que nadie lo lea como una defensa que no es.

**Por qué el sello tiene secreto propio y no reusa la sal de las IP.** El
antispam ya funcionaba con `LEAD_IP_SALT`, porque el código cae a ella a
propósito. Se le dio secreto propio igual, y la razón es concreta y no es
higiene abstracta: **`LEAD_IP_SALT` es lo que protege las huellas de IP de los
visitantes**, que son dato personal bajo la Ley 1581. Si el secreto de firma se
filtrara alguna vez, con esa misma cadena se podrían forzar las IP y
desanonimizar visitas. Dos usos, un secreto, y el más expuesto arrastrando al
que protege datos personales.

Rotarlo invalida los sellos que hubiera en pestañas abiertas, y eso no rompe
nada: el formulario renueva el sello al recibir el rechazo y el segundo intento
entra. Esa resiliencia, que se escribió pensando en otra cosa, es lo que hizo
que la rotación fuera segura.

**Y una línea que le falta a la política de datos:** nombrar la procedencia de
campaña en «Qué datos recogemos». El sitio ya guardaba `utm_source` desde la
primera migración —esto no añade un dato nuevo, solo lo hace durar 30 días— pero
si se va a nombrar la huella de la IP, conviene nombrar también esto.

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
| R-10 | **Una migración de Supabase no se aplica sola.** No hay CI que las corra: al publicar algo que toque la base, hay que pegar el SQL en el editor de Supabase a mano. El código debe degradar si la columna todavía no existe |
| R-11 | **Al terminar una tarea se actualiza este tablero**, y si al hacerla aparece otra, se añade. Un tablero desactualizado miente, y sobre él se toman decisiones |
| R-12 | **Una fuente se pudre de tres formas, y solo la primera es obvia.** Que la norma se derogue; que **una regla dentro de ella** desaparezca sin que la norma caiga; y que **el enlace deje de resolver** aunque la norma siga viva. Ninguna guarda ve las tres |
| R-13 | **Un enlace no se cambia por un código HTTP: se verifica por el título de la página.** Un 200 apuntando a la ley equivocada es peor que un enlace roto |
| R-14 | **No se publica lo que Gustavo aplazó.** Si un lote de trabajo arrastra algo que él dejó en pausa, se separa el commit, no se publica «de paso» |
| R-15 | **Un reglamento no es su decreto de adopción.** La NSR-10 son nueve decretos, y el PDF que sale primero en una búsqueda suele ser la versión original. Antes de citar un capítulo, comprobar contra qué edición se está leyendo |
| R-16 | **Al corregir un artículo, releerlo entero.** C-25 se encargó con dos defectos y tenía cinco. Los tres que nadie había visto salieron de leer, no de buscar |
| R-17 | **Como máximo dos artículos por mes, y nunca dos el mismo día.** Decisión de Gustavo del 6/9. Un artículo nuevo se fecha en un mes con hueco, no el día en que se escribió |

---

## Publicado el 6 de septiembre

Esto salió a producción con G-03. Se deja la lista porque es lo que hay que
mirar si algo se comporta raro en el sitio.

| | Qué |
|---|---|
| 🟢 | Política de datos bilingüe, autorización expresa con su prueba, y su enlace en el pie |
| 🟢 | Banner de consentimiento: ninguna etiqueta se carga sin un sí explícito |
| 🟢 | GA4 y la etiqueta de conversión de Ads, montadas detrás de ese consentimiento |
| 🟢 | Las dos plantillas de correo: acuse de recibo y confirmación de reserva con `.ics` |
| 🟢 | Cuando el envío falla, hay a dónde llamar: WhatsApp, teléfono y correo |
| 🟢 | Cabeceras de seguridad: CSP, HSTS, anti-enmarcado y el resto |
| 🟢 | Accesibilidad del formulario: cada campo con su ayuda y su error anunciados |
| 🟢 | El artículo del sismo, y los diez del pilar de piscinas |
| 🟢 | El artículo de la Ley 1209, actualizado contra la normativa de 2026 |
| 🟢 | Los tres nodos del JSON-LD: zona de servicio nacional, una sola entidad |
| 🟢 | Registro «usted» en la interfaz, y siete fugas del bilingüe corregidas |

---

## Frentes cerrados

Para no volver a abrirlos por olvido. El detalle está en el archivo, §15.

| | Frente |
|---|---|
| 🟢 | El sitio es bilingüe de verdad: 95 URLs inglesas con `hreflang` recíproco |
| 🟢 | APBS y la calculadora de expensas, para los 1.103 municipios del DANE |
| 🟢 | El rediseño de las páginas de proyecto |
| 🟢 | El formulario recibe leads de todo el país |
| 🟢 | Cinco guardas de build que no dejan compilar si algo se rompe |

---

## Conflictos cerrados

| Código | | Qué |
|---|---|---|
| H-03 | 🟢 | ~~«Cuatro reconocimientos en concurso público nacional»~~ — **cerrado el 6/9**: Gustavo confirma que los cuatro son nacionales. La afirmación del sitio se mantiene y la confirmación queda registrada en `content/site.ts` |
| H-06 | 🟢 | ~~«Cuatro» y «cinco» conviven sin explicarse~~ — **cerrado el 6/9**: el titular de `/estudio` ahora dice «cinco: cuatro públicos nacionales y uno privado» |

**X-03 deja de bloquear y sigue valiendo la pena.** Los términos de referencia ya
no hacen falta para sostener la afirmación, pero el nombre oficial de cada
concurso es mejor copia que el adjetivo, y permitiría completar los subtítulos de
Teusaquillo y Las Colinas, que hoy no dicen el ámbito.
