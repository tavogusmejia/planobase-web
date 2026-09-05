# Hoja de ruta · Plano Base Web

Qué falta, por fases. Una línea por cosa.
Última actualización: 5 de septiembre de 2026 — con las respuestas del dueño
registradas.

El detalle de cada frente está en `PLAN-MAESTRO.md` y `PLAN-BLOG.md`.
Este documento es solo el orden.

---

## Fase 0 · Decisiones — bloquean todo lo demás

Ninguna la puede tomar el equipo técnico.

**Respondidas por Gustavo Mejía el 5 de septiembre de 2026.** Las respuestas
literales están al final del documento, en «Para usted». Esta tabla registra
solo el efecto: qué quedó cerrado, qué sigue abierto y qué se desbloquea.

| | Decisión | Estado tras la respuesta | Efecto |
|---|---|---|---|
| 0.1 | **Precio de la primera llamada.** Había tres cifras en circulación: $0, $50.000 y $300.000 | **Cerrada.** La llamada inicial de 15 minutos es **sin costo**. Los $50.000 eran el precio anterior y se descartan. Los $300.000 son el precio de lista de la **visita técnica con informe**. Acepta construir el calendario genérico y activar el pago solo cuando el precio sea mayor que cero | **Desbloquea** la Entrega A sin tener que esperar a Wompi |
| 0.2 | **¿`proyectos@planobase.co` está en Google Workspace de pago?** | **Cerrada. Sí, de pago** | **Desbloquea toda la arquitectura del calendario.** Cuenta de servicio con delegación de dominio, $0 adicionales, sin la trampa del token que caduca cada 7 días. Solo falta el trámite B3 |
| 0.3 | **Verificar `planobase.co` en Resend.** El correo de confirmación al cliente no saldría | **Cerrada en el trámite, abierta en el trabajo.** «Ya está funcionando». Faltan las plantillas de correo | **Desbloquea** el envío. Queda pendiente redactar y montar las plantillas → tarea 1.7 |
| 0.4 | **Abrir cuenta de comercio Wompi.** El trámite tarda más que el desarrollo | **Abierta por decisión de orden.** «Se debe hacer, pero no en esta fase; primero empezar a pautar. Déjalo como tarea crítica» | El calendario sale **sin pago** (Entrega A) y la Entrega B espera. No bloquea la pauta |
| 0.5 | **Dirección pública: ¿Cali o Jamundí?** Cambiarla después de crear la ficha resetea su antigüedad | **Cerrada. Cali** | **Desbloquea** la ficha de Google Business y cierra la contradicción H7. La dirección publicada hoy —Calle 18 # 61-29, Cali— no se toca |
| 0.6 | **Marcar `construido` en los 23 proyectos.** Hoy solo 1 está marcado | **Abierta.** Pidió la lista para llenarla | Entregada en **`docs/PROYECTOS-CONSTRUIDO.md`**. Sigue bloqueando tráfico frío, reencuadre, credenciales y Caribe |
| 0.7 | **Reformular «cuatro reconocimientos en concurso público nacional».** El dato no lo sostiene | **En conflicto, sin cerrar.** Él afirma que **los cuatro son concursos nacionales**; los subtítulos publicados de los propios proyectos dicen otra cosa | **No se toca el texto en ninguna dirección.** Se cierra con términos de referencia o acta de cada concurso. Detalle y transcripciones literales en `PLAN-MAESTRO.md` §1.6 |
| 0.8 | **Registro de trato: usted en todo el sitio** | **Cerrada. Usted** | **Desbloquea** las 32 reescrituras de la tarea 5.2 |
| 0.9 | **Aprobar la copia pendiente.** Solo dos puertas llevan sello de aprobación | **Abierta.** «Necesito revisar todo» | Falta **fijar fecha** de la sesión de lectura con Eduardo. Sigue bloqueando la pauta sobre `/agendar` |
| 0.10 | **Bogotá no es Cundinamarca.** Corrección de dato, no decisión | Sin cambios — se aplica sin consultar | **Aplicada** *(b4284ab)*: diez proyectos, sus textos alternativos y el JSON-LD |
| 0.11 | **¿Qué hacemos con `/en`?** *(era la pregunta A7)* | **Revertida el 5/9/2026. NO se deshabilita: se traduce todo.** «Prefiero mantener el inglés pero traducir todo, absolutamente todo» | Cambia el frente entero. La tarea 5.5 **se anula** y la sustituye el plan bilingüe. La etapa 9.5 del Caribe deja de estar aplazada: la desbloquea la traducción. Tres decisiones asociadas: se traduce también el blog *(el 74 % del volumen)*; los ~40 artículos que faltan se escriben bilingües desde el origen; y la indexación es **página por página**, no de golpe |
| 0.12 | **Facturación electrónica DIAN** *(era el trámite B5)* | **Cerrada en el rumbo, abierta en el plan.** Ya hay un sistema de facturación; quiere un **plan para hacerla con Odoo**, y se puede posponer «casi hasta lo último del roadmap» | Falta escribir ese plan → tarea 3.4 |
| 0.13 | **Ficha de Google Business** *(era el trámite B4)* | **Cerrada. Sí se crea.** «Mi idea es ser el más fuerte nacionalmente, pero debemos empezar con proximidad» | La estrategia queda en dos tiempos que se suman: la ficha gana el paquete de mapas en Cali —donde está la sede y donde ya hay dirección fijada por 0.5— mientras el encuadre nacional se gana por contenido, en la tarea 5.1 y en el blog. No compiten. **Se crea con el NAP exacto de `content/site.ts`, carácter por carácter.** |

### Otras respuestas registradas, que no son decisiones de fase 0

- **Fechas del blog repartidas hacia atrás:** confirmado. Lo que busca es el
  beneficio de percepción, con el matiz de Google ya entendido y aceptado.
- **Capacidad para atender el volumen post-sismo:** confirmado. «Sí, estamos en
  condiciones» — diagnóstico de edificaciones y visita técnica con informe.
- **Experiencia en el Caribe:** es de **Gustavo Mejía**, no del estudio. Y
  **Edospina no fue trabajo en el Caribe** — ver «Correcciones de atribución»
  al final de esta hoja.

---

## Fase 1 · Antes de gastar el primer peso en pauta

Once tareas, ~7-8 días. Sin esto, el dinero entra a un sitio que no mide, no se indexa y puede perder leads en silencio.

| | Tarea |
|---|---|
| 1.1 | Política de tratamiento de datos y autorización expresa (Ley 1581) |
| 1.2 | Banner de consentimiento y arranque condicionado de etiquetas |
| 1.3 | Google Analytics 4 y etiqueta de conversión de Google Ads — hoy no existe ninguna |
| 1.4 | Corte de dominio: DNS, variables, 301 desde Wix, Search Console |
| 1.5 | ~~Páginas de error~~ **Hecha** *(afdc075)*. Frontera de error dentro del idioma, frontera global sin dependencias, y dos salidas más en el 404 |
| 1.6 | Monitoreo de errores y alerta de lead perdido |
| 1.7 | **Plantillas de correo.** Resend ya está verificado y funcionando *(0.3)*; falta redactar y montar las plantillas: acuse de recibo del formulario y confirmación de reserva |
| 1.8 | Cabeceras de seguridad — en producción no se envía ninguna |
| 1.9 | ~~Open Graph por página~~ **Hecha** *(2c52050)*. Las siete páginas que faltaban, con un ayudante que impide olvidar la imagen. La tarjeta propia por página —imagen generada, no la misma para todas— sigue pendiente |
| 1.10 | URLs de campaña con `/es/` explícito y UTMs |
| 1.11 | Marcar construido vs. concurso en los 23 proyectos *(= decisión 0.6)* — la tabla para llenar está en `docs/PROYECTOS-CONSTRUIDO.md` |

---

## Fase 2 · Reservas

| | Entrega | Esfuerzo |
|---|---|---|
| 2.1 | **Entrega A.** Calendario propio, disponibilidad por reglas, Google Meet automático, correo con `.ics`, gestión por token. **Sin pago**. *Desbloqueada por 0.1 y 0.2: la llamada es gratuita y hay Workspace de pago, así que la vía de la cuenta de servicio está confirmada* | 4-5 días |
| 2.2 | **Entrega B.** Wompi: retención del cupo, checkout, webhook idempotente, reprogramación con la regla de 24 h. **Diferida por 0.4** — se hace después de encender la pauta | 3-4 días |

Con la entrega A el embudo cierra. Sumada a la fase 1, **ahí se puede encender la pauta**.

---

## Fase 3 · Pagos y panel

| | Tarea |
|---|---|
| 3.1 | Supabase Auth con lista de acceso por tabla. **Es la primera sesión del proyecto**, y la misma que después autentica a los clientes |
| 3.2 | Panel `/admin/pagos` con links de pago de Wompi |
| 3.3 | Webhook con verificación de firma, reconsulta e idempotencia |
| 3.4 | Facturación electrónica DIAN — obligación del estudio, no de la pasarela. **Rumbo fijado en 0.12: plan de facturación electrónica con Odoo.** Ya hay sistema de facturación andando, así que esto va casi al final de la hoja de ruta, pero el plan hay que escribirlo |
| 3.5 | Términos y política de reembolso |

---

## Fase 4 · Contenido

### 4.1 · Blog — 10 de 75 publicados

| Bloque | Estado |
|---|---|
| Sección reconstruida: bloques, pilares, índice, SEO, guarda de fechas | **hecho** |
| Perennes sin investigación nueva | 5 en curso |
| Con investigación (costos, Bogotá, piscinas, filtraciones, lote rural) | 2 en curso |
| Resto del inventario | 49 |
| Casos propios | **bloqueado** por 0.6 |
| Caribe insular | **bloqueado** por 0.6 y por la versión en inglés |

### 4.2 · Las tres piezas aprobadas

| | Pieza | Nota |
|---|---|---|
| P1 | **Calculadora de expensas de curaduría** | Fórmula, UVT y tarifas ya verificadas. Es código, no redacción. La única del país está anónima y con la UVT mal |
| P2 | **Página de credenciales institucionales** | Los 24 proyectos con m², entidad, año y modalidad. Depende de 0.6 |
| P3 | **Publicar en ArchDaily** | Esfuerzo bajo, retorno alto. Hoy la marca la eclipsa Plan:b de Medellín |

---

## Fase 5 · Reencuadre y redacción

Una sola pasada, no tres. Tocan los mismos archivos.

| | Tarea |
|---|---|
| 5.1 | Encuadre nacional: `h1` de la home, puertas, verticales, JSON-LD. **El selector de ciudades ya está hecho** *(35e064e)*: el formulario ofrece los 1.103 municipios del DANE en cascada departamento → municipio, guarda el código y no el nombre, y tiene salida explícita «Fuera de Colombia». Tres descripciones de Google se reencuadraron de paso *(2c52050)* |
| 5.2 | Unificación en «usted»: 32 reescrituras ya redactadas |
| 5.3 | Las siete contradicciones de hecho: años, nombres, reconocimientos, basura del PDF. **Dos ya están resueltas** —la dirección pública es Cali (0.5) y el registro es «usted» (0.8)—; **la de los reconocimientos queda fuera de esta pasada** hasta cerrar 0.7 |
| 5.4 | Unificar rótulos: hoy hay cuatro nombres para un botón y cuatro para un producto |
| 5.5 | ~~Deshabilitar `/en`~~ **ANULADA.** La decisión 0.11 se revirtió: se traduce todo. Ver abajo por qué esta tarea no puede ejecutarse nunca |

### 5.5 · ANULADA — y por qué no puede ejecutarse nunca

**Esta tarea decía: retirar `/en` del build y redirigir `/en/*` a `/es/*` con un
301.** La decisión 0.11 se revirtió el 5 de septiembre de 2026 y ahora se
traduce el sitio entero.

**Queda escrita como advertencia, no como pendiente.** Si alguien la encuentra
dentro de seis meses y la ejecuta, ese 301 atrapa el idioma nuevo: cada página
inglesa recién traducida rebotaría al español, y como los redirects de
`next.config.ts` corren **antes** del middleware, no habría forma de alcanzarla.
Peor todavía si el 301 llegó a servirse: los navegadores lo cachean de forma
agresiva y el visitante que ya pasó por ahí seguiría rebotando aunque se retire
la regla.

**Ninguna regla de redirect debe apuntar nunca de `/en` a `/es`.** Si en algún
momento hace falta cerrar el inglés, se hace quitando `'en'` de
`routing.locales`, no con redirects.

Lo que sí sobrevive de esta sección, porque sigue siendo cierto y ahora importa
al revés:

- `LOCALES_INDEXABLES` y `routing.locales` son **dos listas distintas a
  propósito**: la primera dice qué idiomas existen, la segunda cuáles pueden
  indexarse. En el plan bilingüe la segunda pasa a `['es', 'en']` y el
  interruptor real se mueve a `traducida(ruta, idioma)`, ruta por ruta.
- `messages/en.json` está completo y bien traducido. Lo que falta no es la
  interfaz sino el cuerpo editorial.
- La cadena de aviso «Content shown in Spanish; the English translation is in
  progress» existe en los dos JSON y **no la pinta ningún componente**. En el
  plan bilingüe por fin se usa: es lo que ve una página todavía sin traducir.

El plan completo —dónde viven las traducciones, cómo se indexa página por
página, las seis fases y las trampas de este repositorio— está en el archivo de
plan de la sesión, y sus dos primeras piezas ya están en `f70bd53`.

---

## Fase 6 · Primer mes de pauta

Meta CAPI · contraste de color · `/agendar` con obra y reconocimientos · datos estructurados que faltan · ficha de Google Business · aligerar `/contacto` · accesibilidad del formulario · antispam · respaldo de leads · métricas de rendimiento.

**Nota sobre la ficha de Google Business (decisión 0.13):** la dirección ya está
fijada —Cali—, pero él dijo que le interesa «arquitectos en Colombia», no
«arquitectos en Cali». Conviene decirlo sin adornos: una ficha de Google
Business **solo posiciona por proximidad**; no existe una ficha nacional. El
alcance nacional se gana con la tarea 5.1 y con las páginas de ciudad de
`PLAN-MAESTRO.md` §9, no con la ficha. **Falta que confirme si aun así quiere
crearla** — para «arquitectos en Cali» el paquete de mapas se lleva la mayor
parte de los clics, y ese tráfico no compite con el nacional: se suma.

~9-10 días.

---

## Fase 7 · Navegación del blog

Con diez artículos el índice por pilares alcanza. Con setenta y cinco, no: el
pilar de casa campestre solo tiene catorce, y alguien que busca «Bogotá» o
«copropiedad» los encuentra repartidos en cinco pilares distintos.

| | Tarea |
|---|---|
| 7.1 | **Etiquetas transversales.** Un segundo eje que cruza los pilares: ciudad, tipo de lector, tipo de trámite. **El dato ya se está capturando** —vocabulario cerrado en `content/etiquetas.ts` y campo obligatorio en cada artículo—, así que esta fase construye la interfaz, no rellena setenta y cinco fichas |
| 7.2 | **Buscador por palabras.** Índice pregenerado en el build y cargado bajo demanda, para no engordar el paquete del índice. Con setenta y cinco artículos cortos no hace falta backend |
| 7.3 | **Filtros combinados** en el índice, y estado reflejado en la URL para que un filtro se pueda compartir |

**La decisión que hay que tomar al construirlo, no después:** una etiqueta solo
tiene página propia indexable si reúne suficientes artículos. Las demás filtran
sin crear URL. Es el mismo criterio que ya se aplicó a las verticales del
portafolio y a los pilares del blog — treinta páginas de etiqueta con dos
artículos cada una son treinta páginas delgadas, y eso le baja la confianza al
dominio entero.

No es prioritario. Entra cuando el inventario de artículos esté cerrado o cerca.

---

## Fase 8 · CRM e intranet

El cliente ve su proyecto, sus RFI, sus planos y sus comunicaciones; el equipo ve leads y proyectos. Cuelga de la tabla `clientes` que ya prevé la fase 3.

**Aviso:** aquí el aislamiento por fila deja de ser cortesía y pasa a ser el mecanismo de seguridad — los usuarios no son de confianza.

---

## Fase 9 · Caribe insular

Por etapas, cada una con criterio de avance. Nada público hasta cerrar 0.6.

| Etapa | Qué se publica | Señal para avanzar |
|---|---|---|
| 9.0 | Nada. Se marca `construido` y se recogen los hechos | Los 23 marcados |
| 9.1 | Solo las opciones de ciudad en el formulario | Tres leads costeros o internacionales. **La señal ya se puede medir** *(35e064e)*: el formulario tiene la salida «Fuera de Colombia» sin que el sitio hable todavía del Caribe |
| 9.2 | Un párrafo en `/estudio` | Que sobreviva 60 días sin confundir al cliente institucional |
| 9.3 | El artículo técnico del blog | Que traiga tráfico o una conversación |
| 9.4 | Página de servicio «Vivienda costera» | Un encargo costero colombiano firmado |
| 9.5 | Sección en inglés e indexación de `/en` | **Desbloqueada por la reversión de 0.11.** Deja de ser una etapa del Caribe: la traducción del sitio entero va por su propio plan, y `/en` se indexa página por página según se traduce |

---

## El orden, en una línea

```
0 decisiones → 1 antes de pauta → 2A calendario → PAUTA
                                → 5 redacción (en paralelo)
                                → 4 contenido (continuo)
        → 2B pagos → 3 panel → 6 primer mes → 7 navegación → 8 CRM → 9 Caribe
```

**Lo más urgente y lo más barato:** verificar `planobase.co` en Resend (0.3). Son unos registros DNS, y sin eso ningún correo llega al cliente.

---

# Para usted

Responda sobre esta misma sección. Todo lo de abajo bloquea trabajo que no
puedo hacer solo. Ordenado por urgencia.

> **Respondido el 5 de septiembre de 2026.** Las respuestas se dejan aquí
> literales, tal como las escribió, y no se editan: son el registro de la
> decisión. Su efecto está volcado en la Fase 0, arriba, y el desarrollo de cada
> una en `PLAN-MAESTRO.md` §1.
>
> **Ninguna de las cinco casillas de trámite quedó marcada.** El estado real se
> lee en la prosa de cada respuesta, y así se registró.

---

## A. Preguntas

### A1 · ¿Cuánto cuesta la primera llamada?
Hay tres cifras en circulación: **$0** (el contenido publicado hoy), **$50.000**
(el volcado de Wix) y **$300.000** (la visita técnica con informe). De esto
depende si el calendario nace con pasarela de pago o sin ella.
*Mi recomendación: construirlo genérico y activar el pago solo cuando el precio
sea mayor que cero. Así no hay que elegir hoy.*

**R/:** La llamada de 15 minutos inicial no cuesta nada, 50.000 es el precio que teniamos anteriormente, no es relevante. 300.000 es el precio de lista para la visita tecnica con informe. COncuerdo con que debemos construirlo genérico y activar el pago solo cuando el preciosea mayor que cero. Así no hay que elegir hoy.

### A2 · ¿`proyectos@planobase.co` está en Google Workspace de pago?
Si sí, el calendario con Google Meet cuesta **$0 adicionales** y no se rompe
nunca. Si no, hay que contratarlo (~$34.000/mes) o ir por un camino que **falla
en silencio cada 7 días**.

**R/:** Si, esta en google workspace de pago.

### A3 · ¿La dirección pública es Cali o Jamundí?
Hay que fijarla **antes** de crear la ficha de Google Business. Cambiarla
después resetea la antigüedad de la ficha.

**R/:** La direccion publica es Cali.

### A4 · «Cuatro reconocimientos en concurso público nacional» — ¿cómo lo reformulamos?
El dato no lo sostiene: solo dos se declaran nacionales. Teusaquillo es concurso
de una alcaldía **local** y Las Colinas es concurso **de ideas**. Cuatro
reconocimientos en concurso siguen siendo cuatro; hay que decirlo de un modo que
sea cierto y siga siendo fuerte.

**R/:** Los 4 son concursos nacionales.

> **Registrado como conflicto abierto, no como decisión.** Los subtítulos
> publicados de los propios proyectos dicen otra cosa, y esta es la credencial
> que un comprador institucional verifica. **El texto del sitio no se toca en
> ninguna dirección** hasta ver los términos de referencia o el acta de cada
> concurso. Las cuatro transcripciones literales y lo que haría falta para
> cerrarlo están en `PLAN-MAESTRO.md` §1.6.

### A5 · ¿Tratamos de «usted» en todo el sitio?
Hoy hay 32 frases en «tú» y 21 en «usted». Recomiendo unificar en **usted**: es
donde está la copia ya aprobada y la columna vertebral comercial. Ya están
redactadas las 32 reescrituras.

**R/:** usted.

### A6 · La copia pendiente de aprobación
Solo dos puertas llevan sello. Están sin aprobar: la visión de `/estudio`, los
siete textos de vertical, las políticas de la asesoría, el peldaño 2 de la
escalera y **`/agendar` entera** — que es la página que va a recibir la pauta.
¿Cuándo la leen usted y Eduardo?

**R/:** Necesito revisar todo.

### A7 · ¿Qué hacemos con `/en`?
Hoy sirve la interfaz en inglés y el contenido en español: una página bilingüe
accidental. O se traduce el cuerpo editorial de verdad (3-5 días), o se retira
del build hasta que haya demanda. Mantener 22 páginas fantasma es lo peor de las
dos opciones.

**R/:** Por ahora deshabilita el /en, vamos a hacer desarrollo hasta un punto estable o de bajo volumen, y ahi si traducimos todo.

**R/ (revisada, 5/9/2026):** Prefiero mantener el inglés pero traducir todo,
absolutamente todo.

> **Reversión registrada.** La respuesta de arriba se queda escrita porque
> explica de dónde viene la tarea 5.5, que ahora está anulada. Manda la de
> abajo: **no se deshabilita nada, se traduce el sitio entero.**
>
> Tres decisiones asociadas, tomadas con las cifras a la vista —86.100 palabras
> hoy, camino de 150.000—:
>
> - **El blog se traduce también**, aun siendo el 74 % del volumen y siendo
>   normativa colombiana.
> - **Los ~40 artículos que faltan se escriben bilingües desde el origen**, en la
>   misma pasada que los investiga. Es la decisión más barata que había
>   disponible: traducirlos después obliga a releer 40 investigaciones enteras.
> - **La indexación es página por página**: cada ruta entra al índice inglés
>   cuando su contenido está traducido, y el resto sigue en `noindex` cayendo a
>   español. Empieza a rendir desde la primera semana.

### A8 · Experiencia en el Caribe: ¿de quién es?
Los proyectos del dossier son suyos, ejecutados en XMC Caribbean y Edospina. ¿Se
enuncian como experiencia de las personas —que es lo honesto y lo que compra un
cliente de alto patrimonio— o hay obra ejecutada por Plano Base que yo no
conozco?

**R/:** La experiencia es de Gustavo Mejia. Lee bien el dossier al detalle, Edospina no fue un trabajo en el caribe.

> **Corrección aplicada.** La pregunta de arriba está mal formulada: decía «XMC
> Caribbean y Edospina» como si las dos etapas fueran caribeñas. No lo son, y la
> misma mezcla estaba en `PLAN-BLOG.md` §2. Corregido allí y separado de forma
> explícita — ver «Correcciones de atribución» al final de este documento.

### A9 · ¿Publicamos el blog con las fechas repartidas hacia atrás?
Ya está hecho así y funciona, con una guarda que impide citar el futuro. Solo
quiero que sepa el matiz: Google usa la fecha en que descubre la página, no la
declarada. El beneficio es de percepción —el blog se ve establecido—, no de
posicionamiento.

**R/:** si, con las fechas repartidas hacia atras. Correcto, lo que quiero es el beneficio de percepcion.

> **Registrado.** Se mantiene lo hecho. La guarda `scripts/check-fechas.ts` sigue
> corriendo en cada build para que ningún artículo cite un hecho posterior a su
> fecha declarada. Anotado también como regla 8 en `PLAN-BLOG.md` §7.

---

## B. Trámites — nadie más puede hacerlos

### B1 · Verificar `planobase.co` en Resend
**El más urgente y el más barato.** Son unos registros DNS. Sin esto **ningún
correo llega al cliente**: ni la confirmación de reserva ni el acuse del
formulario de contacto.

- [ ] Hecho **R/:**Ya esta funcionando. Necesitamos los templates.

> **Registrado.** El bloqueo desaparece. Las plantillas —acuse del formulario y
> confirmación de reserva con `.ics`— pasan a ser la tarea 1.7.

### B2 · Abrir cuenta de comercio Wompi
Persona jurídica, RUT y cuenta bancaria a nombre de la S.A.S. El papeleo tarda
más que el desarrollo. Hay ambiente de pruebas para avanzar mientras tanto.

- [ ] Iniciado **R/:** Si, esto se debe hacer, pero no en esta fase, debemos primero empezar a pautar, asi que dejalo como una tarea critica.

> **Registrado como decisión de orden, no como pendiente.** Wompi sale del camino
> crítico: la primera llamada es gratuita, así que el embudo cierra sin pasarela.
> Queda como tarea crítica diferida (2.2). Vale la pena iniciar el papeleo en
> paralelo de todos modos: tarda más que el desarrollo.

### B3 · Credenciales de Google
Depende de A2. Si hay Workspace: proyecto en Google Cloud, habilitar Calendar
API, cuenta de servicio, delegación de dominio con un solo permiso, y un
calendario nuevo «Asesorías Plano Base». Le paso el paso a paso cuando confirme.

- [ ] Hecho **R/:** si hay workspace pagado.

> **Registrado: responde A2, no cierra el trámite.** Con Workspace confirmado,
> la ruta es la buena —cuenta de servicio con delegación de dominio, $0
> adicionales— pero **hay que ejecutarla**: proyecto en Google Cloud, Calendar
> API, cuenta de servicio, delegación con un solo scope y el calendario
> «Asesorías Plano Base». **Es el trámite que sigue**, y sin él no hay Entrega A.

### B4 · Ficha de Google Business
**Después de A3.** Para «arquitectos en Cali» el paquete de mapas se lleva la
mayor parte de los clics.

- [x] **Decidido: sí se crea.** «Mi idea es ser el más fuerte nacionalmente,
      pero debemos empezar con proximidad.» Falta ejecutarlo.

> **Registrado como matización, no como cierre.** La intención es correcta y es
> exactamente el reencuadre de la tarea 5.1. Pero una ficha de Google Business
> **solo posiciona por proximidad**: no existe una ficha nacional, y declarar
> presencia local donde no hay oficina atendida es causal de suspensión. Las dos
> cosas no compiten, se suman. **Falta que confirme si aun así quiere crearla**;
> la dirección ya está fijada en Cali.

### B5 · Facturación electrónica DIAN
Wompi es la pasarela, **no factura por el comercio**. Hay que decidir si se
emite a mano o con proveedor, antes de cobrar el primer peso.

- [ ] Resuelto **R/:** Ya tenemos un sistema de facturacion, pero me gustaria que generes un plan para que hagamos la facturacion electronica con odoo. esto se puede posponercasi hasta lo ultimo del roadmap.

> **Registrado: el rumbo está cerrado, el plan no existe todavía.** Corrige un
> supuesto de los documentos —daban por hecho que no había sistema de
> facturación—, así que esto **deja de bloquear** el primer cobro. Queda por
> escribir el plan de facturación electrónica con Odoo (tarea 3.4 / pendiente
> N2), casi al final de la hoja de ruta.

---

## C. El bloqueo más grande

### C1 · Marcar `construido` en los 23 proyectos
**Solo 1 de 23 está marcado hoy.** Nadie fuera del estudio puede hacerlo: hay
que ir proyecto por proyecto y decir si está construido, si es propuesta o si es
concurso.

Desbloquea **cuatro cosas a la vez**: el tráfico frío al portafolio, el
reencuadre nacional, la página de credenciales institucionales y todo el pilar
del Caribe. Es la tarea de mayor efecto palanca de este documento.

*Sugerencia: una tabla de 23 filas y dos columnas. Media hora con Eduardo.*

- [ ] Hecho **R/:** dame una lista, o donde la encuentro.

> **Entregada: `docs/PROYECTOS-CONSTRUIDO.md`.** Tabla de los 23 proyectos
> publicados, ordenada por ciudad y año, con una columna vacía para marcar
> construido · propuesta · concurso. Es para llenar a mano; nadie fuera del
> estudio puede hacerlo.

### C2 · Los dos servicios que hoy tienen más demanda
Tras el sismo, el **diagnóstico de edificaciones** y la **visita técnica con
informe** son los de mayor demanda real en Cali, y la obra educativa e
institucional del estudio coincide con la mayor ola de contratación pública de
la década en el Valle.

¿Está el estudio en condiciones de atender ese volumen? Y para obra pública: la
urgencia manifiesta **elimina la convocatoria y el contratista se escoge**.
Quien no está ya en el radar de la entidad, no aparece.

**R/:** Si, estamos en condiciones.

> **Registrado.** Confirma la lectura del `PLAN-MAESTRO.md` §0: el diagnóstico de
> edificaciones y la visita técnica con informe son hoy los servicios de mayor
> demanda real, y el estudio puede atenderlos. Refuerza el orden de publicación
> del blog (`PLAN-BLOG.md` §6) y no cambia ninguna fase.

---

*Respondido el 5/9/2026. Hoja de ruta actualizada; lo desbloqueado está marcado
en la Fase 0.*

---

# Correcciones de atribución

Registradas el 5 de septiembre de 2026 a partir de la respuesta A8. Se dejan
aquí, y no solo en el archivo corregido, para que la mezcla no se repita.

## Dos etapas distintas, dos lugares distintos

| Etapa | Años | Dónde | Qué se hizo |
|---|---|---|---|
| **Edospina** | 2007-2012 | **Bogotá** | Diseño de plantas de agua potable y aguas residuales, piscinas y juegos acuáticos |
| **XMC Caribbean** | 2019-2022 | **Bahamas, Bermuda, Turks & Caicos, Miami** | Piscinas de borde infinito, spas, cascadas y sus sistemas de fondo: redes de tubería, plantas de filtración, bombas, cuartos de máquinas |

**Edospina no fue trabajo en el Caribe.** La experiencia caribeña —Bakers Bay,
The Pointe Hotel, LF Wade International Airport, Mary Brickell Mall— es
íntegramente de XMC Caribbean.

Lo que las dos etapas sí comparten, y es lo que sostiene el pilar de piscinas:
quince años de diseño de sistemas hidráulicos y cuerpos de agua. Esa credencial
es continua; el Caribe no.

## Y la regla que no cambia

**Toda esa experiencia es de Gustavo Mejía, no de Plano Base.** Los artículos
dicen «quien dirige esta línea en el estudio trae quince años en…», nunca «Plano
Base construyó en Bahamas». Un cliente de alto patrimonio compra a personas; el
encuadre honesto es también el más fuerte, y no deja flanco.

## Qué se corrigió y qué ya estaba bien

| Dónde | Estado |
|---|---|
| `docs/PLAN-BLOG.md` §2 | **Corregido.** Decía «ejecutados en XMC Caribbean y Edospina» sobre la tabla de proyectos caribeños. Ahora separa las dos etapas y su geografía |
| `docs/HOJA-DE-RUTA.md`, pregunta A8 | La pregunta original arrastraba la misma mezcla. Se deja literal —es el registro— con la corrección anotada debajo |
| `docs/PLAN-MAESTRO.md` §9, «Caribe insular» | **Sin error de atribución.** Ya decía «se atribuye la experiencia a las personas y no al estudio». Se le añadió la separación de las dos etapas para que quede explícita |
| `content/pilares.ts`, pilar `piscinas` | **Correcto, no se toca.** «Quien dirige esta línea en el estudio trae quince años diseñando sistemas hidráulicos y construyendo piscinas de borde infinito y cuerpos de agua en el Caribe» — atribuye a la persona y no nombra a Edospina |
| `content/pilares.ts`, pilar `caribe` | **Correcto, no se toca.** Habla de lo que exige construir en una isla, sin afirmar obra del estudio |
| `content/blog/ley-1209-piscinas-copropiedad.ts` | **Correcto, no se toca.** «Quien firma lleva quince años diseñando sistemas hidráulicos y construyendo piscinas y cuerpos de agua» — sin geografía y sin atribuir al estudio |

Ningún archivo de código o de contenido del sitio se modificó. Las dos últimas
filas se revisaron precisamente porque eran las candidatas a tener el mismo
problema, y no lo tienen.

---

# Pendientes anotados, no ejecutados

Cosas que salieron al registrar las respuestas y que hay que hacer, pero que no
se tocaron para no mezclar documentación con código:

| | Qué | Dónde |
|---|---|---|
| N1 | ~~Deshabilitar `/en`~~ **Anulada y sustituida** por el plan bilingüe. Ya en marcha: tipos de traducción y respaldo de mensajes en `f70bd53` | `src/lib/types.ts` · `src/i18n/request.ts` |
| N2 | **Escribir el plan de facturación electrónica con Odoo** *(decisión 0.12)*. No existe todavía como documento | `docs/` |
| N3 | ~~Confirmar si se crea la ficha de Google Business~~ **Confirmado el 5/9/2026: sí.** Queda ejecutarlo, con el NAP exacto de `content/site.ts` | Trámite |
| N4 | **El comentario de cabecera de `reconocimientos` en `content/site.ts` dice «Cuatro reconocimientos en concurso público» y la lista tiene cinco entradas** —cuatro públicas y una privada, el Teatro César Conto Ferrer—. Es la contradicción H6 del `PLAN-MAESTRO.md` §6, y se resuelve en la misma pasada que 0.7. No se tocó | `content/site.ts` |
| N5 | **Plantillas de correo de Resend** *(decisión 0.3)*: acuse de recibo del formulario y confirmación de reserva con `.ics` | Tarea 1.7 |


---

# Lo hecho mientras se escribían los artículos

Seis cambios, todos en la rama `blog/seccion-y-articulos`, sin push.

| Commit | Qué |
|---|---|
| `35e064e` | El formulario recibe leads de todo el país. Antes ofrecía seis opciones del Valle y Bogotá entraba como «Otro» |
| `afdc075` | Fronteras de error. Antes, un fallo dejaba al visitante en blanco, sin cabecera y sin salida |
| `b4284ab` | Bogotá deja de figurar en Cundinamarca. Diez de los veinticuatro proyectos |
| `2c52050` | Tarjeta propia al compartirse en las siete páginas que no la tenían |
| `50aba2c` | Un lead de prueba desde una vista previa ya no se confunde con uno real |

**Lo que estos cambios destaparon y usted debería saber:**

1. **El material de obra pública que el plan daba por verificado no está en el
   repositorio.** Vivía en la conversación y nunca se escribió a `docs/`. Los
   artículos 26 y 27 se escribieron igual, declarando por escrito los cuatro
   puntos que no se pudieron verificar. Merecen una segunda pasada si ese
   material aparece.

2. **La clave de servicio de Supabase está configurada también en Preview.** Un
   envío de prueba desde un despliegue de vista previa escribe en la misma tabla
   que un encargo real. Se marcó el origen para distinguirlos, pero si prefiere
   que las vistas previas no toquen la base de producción, hay que quitar esa
   variable del entorno Preview. Es su decisión.

3. **`NO_SON_MUNICIPIOS` está exportado y no lo usa nadie.** Son las 19 áreas no
   municipalizadas del DANE. En los dos selectores se dejaron visibles a
   propósito: en el formulario porque alguien puede tener un proyecto ahí, y en
   la calculadora porque el resultado correcto es «sin expensas».

4. **El contraste está corregido.** Usted decidió que el manual de marca es guía
   y que prima la experiencia del usuario, así que se aplicó. Eran tres cosas y
   no una: el gris de los textos de ayuda (2,71 → 4,78), el azul de **todos los
   enlaces** del sitio, que también fallaba (4,11 → 4,83), y el filete de los
   campos de formulario, que como borde de un control necesita 3:1 y daba 1,66.
   Ese último no se arregló oscureciendo `line` —son 71 líneas de dibujo y ahí
   el trazo fino es el lenguaje del sitio—, sino con un tono aparte que existe
   solo para los controles.
