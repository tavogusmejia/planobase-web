# Plan maestro · Plano Base Web

Estado del proyecto y hoja de ruta completa.
Última actualización: 5 de septiembre de 2026.

Este documento reúne el trabajo de seis auditorías hechas sobre el repositorio
y sobre el mercado. No hay que leerlo de una sentada: cada frente es
independiente y está marcado con lo que bloquea y lo que no.

**Nada de esto se ha aplicado al código todavía.** Las auditorías no
modificaron ningún archivo, salvo `pnpm build`, que solo regeneró `.next/`.

---

## 0. El hecho que reordena la estrategia

**El 10 de agosto de 2026, un sismo de magnitud 7,4 con epicentro en San José
del Palmar (Chocó) golpeó el occidente de Colombia. Cali fue la capital más
afectada.**

Esto lo verificó la investigación de mercado con múltiples fuentes
independientes. Usted lo sabe mejor que este documento; se registra aquí porque
cambia el orden de todo lo demás.

Cifras del balance, cada una con su fuente y su fecha de corte —se movieron
varias veces entre agosto y septiembre, así que conviene revisarlas antes de
publicar cualquiera:

- **Cali:** 1.198 edificaciones diagnosticadas — 312 habitables, 543 no
  habitables, 315 de uso restringido. Plan de seis meses de planeación y tres
  años de obra.
- **Valle del Cauca:** de 1.150 sedes educativas, 720 afectadas y 220
  colapsadas.
- **Nacional:** 3.726 sedes educativas afectadas, 811 colapsadas.
- Decreto 1261 del 19 de agosto de 2026: emergencia en 15 departamentos. **Su
  control constitucional está en trámite sin fallo.**
- **Fondo Milagro** (modelo FOREC), con prioridad en vivienda, colegios y
  hospitales. Su secuencia declarada: primero información de daños, luego
  planeación, y solo al final contratación de obra.

### Qué significa para el estudio

**Los dos servicios menos glamorosos del portafolio son hoy los de mayor
demanda real:** el diagnóstico de edificaciones y la visita técnica con informe
desde $300.000. Y la obra educativa e institucional del estudio coincide
exactamente con la mayor ola de contratación pública de la década en el Valle.

**La escalera de producto ya está bien construida para este momento.** Lo que
falta es el contenido que la conecta con lo que la gente está buscando.

### Dos advertencias que van juntas

**No convertir el terremoto en argumento comercial.** Nada de «aproveche» ni de
oferta post-sismo. La contratación de emergencia está bajo lupa de la
Contraloría por el antecedente de la UNGRD, y el oportunismo se nota. La forma
decente es también la más eficaz: contenido técnico útil que responde lo que la
gente pregunta.

**Y una línea de honestidad profesional que además vende mejor:** el veredicto
de seguridad estructural lo firma un ingeniero civil estructural o un patólogo,
no un arquitecto. La forma correcta de posicionar el diagnóstico es como
**visita técnica de arquitecto con informe, articulada con estructural cuando
el caso lo exige — y decirlo explícitamente en la página.** Decirlo sube la
conversión, no la baja.

### La contratación pública, en concreto

La urgencia manifiesta **elimina la convocatoria pública: el contratista se
escoge.** Quien no está ya en el radar de la entidad, no aparece. Cubre lo
directamente relacionado con la atención — demolición, apuntalamiento, aulas
temporales, evaluaciones rápidas.

**Pero la reconstrucción definitiva y los estudios y diseños completos vuelven
al concurso de méritos.** Ese es el carril del estudio, y ahora con Documentos
Tipo obligatorios (ver §9 bis).

---

## Cómo leer este documento

| Si tiene | Lea |
|---|---|
| 5 minutos | §1 Decisiones que dependen de usted |
| 20 minutos | §1, §2 Estado actual, §11 Cronograma |
| Una tarde | Todo, en orden |

---

## 1. Decisiones que dependen de usted

Nada avanza sin estas. Están ordenadas por urgencia real.

### 1.1 · El precio de la primera llamada — BLOQUEA reservas y pagos

Hay **tres cifras distintas** para el mismo momento del embudo:

| Fuente | Qué dice |
|---|---|
| `wix-migration/01-content/site.json` (volcado de Wix) | 1 hora · $50.000 COP · pago por adelantado |
| `content/site.ts` (contenido vivo, decisión del 4/9/2026) | 15 minutos · sin costo |
| Conversación del 5/9/2026 | $50.000 |

La página `/agendar` publicada hoy dice «Sin costo».

**Recomendación:** no elegir. Construir el calendario **genérico** — cualquier
servicio con `duracion_min` y `precio_cop`, y el pago se activa solo cuando el
precio es mayor que cero. La llamada gratuita sale ya; la visita técnica de
$300.000 se cobra cuando usted quiera; si mañana decide cobrar $50.000 por la
asesoría es cambiar un número.

### 1.2 · ¿`proyectos@planobase.co` está en Google Workspace de pago? — BLOQUEA Google Meet

- **Sí** → cuenta de servicio con delegación de dominio. $0 adicionales. No
  caduca, no hay pantalla de consentimiento, no hay verificación de app.
- **No** → o se contrata Workspace (~$34.000 COP/mes por una cuenta), o se va
  por OAuth con un Gmail normal. Esa segunda vía tiene una trampa: **Google
  caduca el token cada 7 días** y las reservas se siguen creando, solo que sin
  enlace de Meet. Falla en silencio.

Para algo que sostiene tráfico pagado, la vía de los 7 días no es opción.

### 1.3 · Verificar `planobase.co` en Resend — URGENTE, y no es un pulido

**Hoy el correo de confirmación al cliente no saldría.** Mientras el dominio no
esté verificado, Resend solo permite escribir a la dirección de la propia
cuenta. El sistema cobraría y no confirmaría. Son unos registros DNS.

### 1.4 · Abrir la cuenta de comercio Wompi — el trámite tarda más que el código

Persona jurídica, RUT y cuenta bancaria a nombre de Plano Base Arquitectos
S.A.S. Hay ambiente de pruebas para avanzar mientras tanto.

### 1.5 · La dirección pública: ¿Cali o Jamundí?

Sin decidir en el código, pero el sitio ya publica «Calle 18 # 61-29, Cali» en
el JSON-LD, el pie, `/contacto`, el dossier y las 23 hojas de proyecto.

**Importa el orden:** si se crea la ficha de Google Business y después se cambia
la dirección, se resetea la antigüedad de la ficha. Decidir primero.

### 1.6 · La afirmación de los cuatro reconocimientos

El sitio dice «cuatro reconocimientos en **concurso público nacional**». El dato
no lo sostiene: solo dos se declaran nacionales (El Ensueño y Pradera El
Volcán). Teusaquillo es concurso público de una alcaldía **local**; Las Colinas
es concurso **de ideas**.

Es la credencial que un comprador institucional verifica antes de llamar, y el
README ya identifica esto como el riesgo reputacional más alto del portafolio.
Hay que reformularla a algo cierto y que siga siendo fuerte — cuatro
reconocimientos en concurso siguen siendo cuatro.

### 1.7 · Registro de trato: usted en todo el sitio

Ver §6. Requiere su visto bueno porque toca copia ya aprobada.

### 1.8 · Aprobación de la copia pendiente

Mucho texto publicado está marcado en su propio código como no aprobado: la
visión de `/estudio` («BORRADOR PARA EDUARDO»), los siete textos de vertical,
las políticas de la asesoría, el peldaño 2 de la escalera y `/agendar` entera.
**Solo dos puertas llevan sello de aprobación.**

Es el texto que va a recibir el tráfico pagado. Necesita una sesión de lectura
con Eduardo y con usted.

### 1.9 · Marcar cuáles proyectos están construidos — PRERREQUISITO DE CASI TODO

**Solo 1 de los 23 proyectos publicados está marcado como construido.** Los
otros 22 figuran como propuesta, concurso o proyecto no ejecutado.

Nadie fuera del estudio puede resolver esto: hay que ir proyecto por proyecto.

Es prerrequisito de tres cosas a la vez: del tráfico frío al portafolio, del
reencuadre geográfico y de cualquier afirmación sobre experiencia
internacional. Un estudio que aún no distingue obra de propuesta en su propio
portafolio no puede permitirse una afirmación nueva: si un cliente tira del
hilo, pierde las dos.

### 1.10 · Bogotá no es Cundinamarca

Los 10 proyectos de Bogotá llevan `departamento: 'Cundinamarca'`. Bogotá es
Distrito Capital. Sale impreso en la ficha, en la hoja imprimible y en los
datos estructurados de cada proyecto. Es corrección de dato, no decisión — se
aplica sin consultar.

---

## 2. Estado actual del sitio

**El código no es el problema.** TypeScript estricto sin `any`, Server
Components por defecto, todas las imágenes con `sizes` y `blurDataURL`, RLS
activa, `server-only` donde corresponde, los 36 redirects verificados en cada
build. Está por encima de la media.

Lo que falta es la capa que convierte un portafolio en una máquina de captación
que aguanta dinero de pauta: **medición, legalidad, confianza y red de
seguridad operativa**.

### Cuatro hechos de partida

1. **El sitio entero va `noindex`.** Verificado en el HTML compilado. Correcto
   mientras el dominio sea `*.vercel.app`, pero significa que la autoridad
   orgánica está en cero y que todo el SEO hecho está apagado.
2. **No existe Google Analytics ni etiqueta de conversión de Google Ads.**
   Ninguna. Solo el Pixel de Meta.
3. **No hay política de tratamiento de datos.** La casilla del formulario dice
   «Declaro que la información que he facilitado es exacta y completa» — eso es
   una declaración de veracidad, no una autorización de tratamiento bajo la Ley
   1581. Y el Pixel dispara sin preguntar.
4. **No existe ningún `error.tsx`.** Una excepción en `/contacto` o `/agendar`
   muestra la pantalla genérica de Next al visitante que llegó de un anuncio.

### La huella real del portafolio

| Ciudad | Proyectos |
|---|---|
| **Bogotá D.C.** | **10** |
| Cali | 7 |
| Jamundí | 2 |
| Medellín · Quibdó · Ipiales · Cajicá · San José del Guaviare | 1 c/u |

**Bogotá tiene más obra que Cali.** El sitio no lo dice en ninguna parte, y el
selector de municipios del formulario solo ofrece el Valle del Cauca: hoy un
lead de Bogotá o Medellín queda marcado como «Otro».

---

## 3. Frente · Reservas con calendario y Google Meet

### Decisión: calendario propio, no Cal.com

Tres razones, ninguna de ellas el precio:

1. **El pago.** Cal.com cobra con Stripe, y Stripe en Colombia no da PSE ni
   Nequi. Cal.com no integra Wompi. Obligaría a partir el flujo.
2. **La estética es requisito.** `CLAUDE.md` fija peso 400 y jerarquía por
   tamaño y aire. Un iframe con la tipografía de Cal.com, en la página que
   recibe el tráfico pagado, rompe el registro donde más caro cuesta.
3. **Las políticas son lógica de negocio.** «Un solo cambio, con 24 h, sujeto a
   disponibilidad» son estados y transiciones, no un ajuste de configuración.

### Entrega A — 4 a 5 días · sin pago

Calendario propio · disponibilidad por reglas semanales editables sin desplegar
· Google Meet automático · correo de confirmación con `.ics` adjunto · página de
gestión con token para cancelar o reprogramar.

**Sale a producción sola, y cierra el embudo para la llamada gratuita.**

### Entrega B — 3 a 4 días · con pago

Wompi · retención del cupo con vencimiento · webhook idempotente · estados de
pago · reprogramación con la regla de 24 h.

### Las dos piezas técnicas que importan

**Doble reserva.** Un `select` seguido de `insert` no previene nada bajo
concurrencia: dos peticiones simultáneas pasan las dos la comprobación. Con
tráfico pagado llegando a la misma página deja de ser hipotético. La defensa va
en Postgres como restricción de exclusión sobre el rango de tiempo.

**Google Meet.** Sin la librería de Google (pesa decenas de MB): un JWT firmado
y dos peticiones. Dos detalles que cuestan una tarde si se ignoran — el
parámetro `conferenceDataVersion=1` es obligatorio o el Meet **se ignora en
silencio**, y el correo automático de Google se desactiva a propósito para que
el cliente reciba un solo correo, el del estudio.

### Credenciales de Google que hay que conseguir

Ruta recomendada (con Workspace):

1. Proyecto nuevo en Google Cloud, `planobase-reservas`.
2. Habilitar **Google Calendar API**. Es la única. La «Google Meet API» no hace
   falta: el Meet se crea a través de Calendar.
3. Crear cuenta de servicio `reservas-web`, sin ningún rol de IAM.
4. Generar clave JSON. **Va al gestor de contraseñas, nunca al repositorio.**
5. Delegación de todo el dominio en admin.google.com, con el scope
   `https://www.googleapis.com/auth/calendar.events` y nada más.
6. Crear un calendario nuevo «Asesorías Plano Base», no usar el principal.

---

## 4. Frente · Pagos con Wompi

### Fase 1: solo links de pago

El equipo genera el cobro desde un panel en `/admin/pagos`, lo manda por
WhatsApp, y el cliente paga en el dominio de Wompi. **Cero superficie pública,
cero PCI, ningún JavaScript de terceros en el sitio.** Cubre el 100 % del caso
descrito. El widget embebido viene después, si hace falta.

### Hallazgo: el proyecto no tiene autenticación de ningún tipo

La zona de pagos es lo primero que necesita sesión. Y ahí está la decisión que
no se puede tomar mal: **si se monta una contraseña compartida, se tira en tres
meses.** La misma sesión de Supabase Auth que proteja `/admin/pagos` es la que
después autentica a los clientes en la intranet; lo único que cambia son las
políticas de acceso.

**La zona de pagos es el primer ladrillo del CRM, no un desvío.**

### Comisiones de Wompi (sin cuota mensual)

Nequi ~1,5 % · tarjetas ~2 % · PSE ~2,7 %. Más IVA sobre la comisión.

### Reglas del webhook, no negociables

1. Verificar la firma del evento. Sin eso, cualquiera confirma pagos con un
   `curl`.
2. Reconsultar la transacción contra la API antes de confirmar. El webhook es
   un aviso; la consulta es la verdad.
3. Idempotencia. Wompi reintenta hasta 3 veces en 24 h.
4. Todo en centavos, en enteros. $50.000 COP = 5000000. Un factor 100 mal
   aplicado cobra $500 o $5.000.000.
5. **El redirect no es prueba de pago.** Lo controla el navegador del cliente.

### Obligación que no cubre el código

Wompi es la pasarela, **no factura por el comercio**. La factura electrónica
DIAN sigue siendo obligación de Plano Base. Hay que decidir si se emite a mano
o con un proveedor, antes de cobrar el primer peso. Y hay que publicar términos
y política de reembolso: las políticas de hoy están escritas para una llamada
gratuita.

---

## 5. Frente · CRM e intranet (fase posterior)

No se construye ahora, pero el esquema de la fase de pagos ya lo prevé.

La pieza que evita rehacer todo es la tabla `clientes` como puente:

- `clientes.lead_id` cierra el ciclo captación → cliente. El embudo queda
  consultable de punta a punta: anuncio → lead → cliente → pago.
- `clientes.user_id` es el enganche de la intranet.
- `proyectos_cliente`, `rfis`, `documentos` y `comunicaciones` cuelgan de
  `clientes.id`.

Rutas previstas: `/admin/leads`, `/admin/clientes`, `/admin/proyectos` para el
equipo; `/portal/…` para el cliente. Los planos y documentos van a un bucket
**privado** con URLs firmadas de vida corta, nunca al bucket público del
portafolio.

**Aviso:** el panel de pagos hereda el patrón «todo se escribe con clave de
servicio». Para el portal de clientes eso no sirve — ahí el aislamiento por
fila tiene que ser el mecanismo real, porque los usuarios no son de confianza.

---

## 6. Frente · Redacción

### Veredicto: unificar en **usted**

El conteo dice lo contrario —32 cadenas en tú contra 21 en usted— pero engaña.

**El tuteo no está donde se juega la venta.** De los 32 tuteos, 18 son
microcopia de formulario y 7 son etiquetas de interfaz. Solo 7 son copia
editorial. El usteo ocupa la columna vertebral comercial: las siete puertas, los
seis peldaños de la escalera, el titular de `/servicios`, la descripción de la
asesoría.

**La copia usteada ya está aprobada** (dos bloques firmados por Gustavo el
5/9/2026). Unificar hacia el tú obliga a reabrir texto cerrado.

**Y el público lo pide.** Con un administrador de copropiedad, un funcionario de
contratación o un propietario de sesenta años, el tú se lee como confianza no
concedida. La mitad de la oferta es peritaje: el tuteo le resta autoridad al
producto que más la necesita.

Son 32 reescrituras, con el texto exacto viejo → nuevo ya redactado.

### Contradicciones de hecho que hay que resolver

| # | Problema |
|---|---|
| H1 | Las Colinas figura como 2021 en `site.ts` y 2022 en `projects.ts`. Las dos cifras se ven en pantalla a la vez |
| H2 | El mismo proyecto con dos nombres. El enlace de `/estudio` anuncia uno y aterriza en otro |
| H3 | «Cuatro reconocimientos en concurso público nacional» — ver §1.6 |
| H4 | Basura del PDF dentro de un dato: el pie del InDesign quedó pegado al último «no incluye» de Obra y Fabricación. Hoy no se pinta, pero está armado para salir |
| H5 | El blog arrastra pies de imagen de Wix como párrafos sueltos, uno duplicado con dos redacciones |
| H6 | «Cinco» y «cuatro» reconocimientos conviven sin explicarse en cinco lugares |
| H7 | Dirección pública sin decidir — ver §1.5 |

### Inconsistencias

- **Cuatro rótulos para un botón:** «Reserva una asesoría» · «Agendar asesoría»
  · «Reservar sesión» · «Agendar por WhatsApp».
- **Cuatro nombres para un producto:** «asesoría técnica» · «la primera llamada»
  · «la sesión» · «la primera conversación».
- **Tres ventanas de respuesta:** «siguiente hora hábil» · «próxima hora hábil»
  · «el mismo día».
- **Letra y cifra en la misma pantalla:** «Catorce propuestas» con «14
  proyectos» debajo.
- **Áreas con dos decimales:** «2.549,68 m²» es ruido de hoja de cálculo.

### Una que vale plata

El h1 de `/agendar` —la página de conversión— dice «Contar con la asesoría de un
arquitecto no debe ser costoso», a tres líneas del rótulo «Sin costo». Dice «no
debe ser caro» junto a la palabra «gratis». **Es gratis: hay que decirlo.**

### Inglés

`messages/en.json` está completo y bien traducido, pero todo el cuerpo editorial
está escrito a mano en español dentro de los componentes. `/en` sirve **la
cáscara en inglés y el contenido en español**: una página bilingüe accidental.

Está contenida (`/en` va `noindex`), pero existe la cadena de aviso exacta
—«Content shown in Spanish; the English translation is in progress»— y **ningún
componente la pinta.** Ponerla es una línea.

---

## 7. Frente · Producción: las 28 tareas

### Antes de gastar el primer peso en pauta · ~7-8 días

| Tarea | Esfuerzo |
|---|---|
| Política de tratamiento de datos + autorización expresa (Ley 1581) | 1-1,5 d |
| Banner de consentimiento y arranque condicionado de etiquetas | 1 d |
| GA4 + etiqueta de conversión de Google Ads | 1 d |
| Corte de dominio: DNS, variables, 301 desde Wix, Search Console | 0,5 d |
| Páginas de error (`error.tsx`, `global-error.tsx`, 404 de raíz) | 3-4 h |
| Monitoreo de errores + alerta de lead perdido + uptime | 0,5 d |
| Resend verificado + acuse de recibo al cliente | 4 h |
| Cabeceras de seguridad (CSP, HSTS, resto) | 4-6 h |
| Open Graph propio por página | 1 d |
| URLs de campaña con `/es/` explícito y UTMs | 3 h |
| Marcar construido vs. concurso en los 23 proyectos | 0,5 d |

### Primer mes · ~9-10 días

Meta CAPI con deduplicación (hoy se pierde 30-50 % de las señales y el costo por
lead del panel es ficción) · Contraste de color · `/agendar` con reconocimientos
y obra · Datos estructurados que faltan · Ficha de Google Business · Aligerar
`/contacto` · Proyectar datos al cliente · Accesibilidad del formulario ·
Antispam · Cerrar pendientes de negocio · Respaldo de leads · Métricas de
rendimiento.

### Después

Integración continua y tests · `/proyectos` estático · Fechas reales en el
sitemap · Panel de leads · Decidir el destino de `/en` · Teclado en el menú
móvil.

### Los hallazgos que más sorprenden

- **Cada página interior se comparte en WhatsApp con el mismo título y la misma
  imagen.** WhatsApp es el canal declarado del estudio. Las fichas de proyecto
  sí lo hacen bien; ninguna otra página. Es el multiplicador más barato.
- **El gris de todo el sitio no pasa accesibilidad.** Contraste 2,71:1 cuando el
  mínimo es 4,5:1, y aparece **65 veces**. La corrección es cambiar dos
  variables de color.
- **En producción no se envía ninguna cabecera de seguridad.** El bloque
  devuelve un array vacío en cuanto el sitio pasa al dominio real.
- **`/contacto` es la página más pesada del sitio** (165 kB de JavaScript) y es
  la página donde se decide todo.

---

## 8. Frente · Blog y contenido

Ver `docs/PLAN-BLOG.md` para el listado completo de temas, el calendario
editorial y el estado de cada artículo.

Resumen: **73 temas en diez pilares**, más de cinco años de material a cadencia
sostenible. Hoy el blog tiene **una sola entrada, de octubre de 2022**.

Los diez pilares:

1. Costos — el imán de tráfico, actualizable cada trimestre
2. Trámites y norma — autoridad natural, tráfico permanente
3. Patologías — dolor urgente, la mejor conversión del sitio
4. Proceso y decisión — calienta al lead tibio
5. Institucional — poco volumen, ticket altísimo, cero competencia
6. Casos propios con cifras — prueba, no teoría
7. Local y mapa
8. Casa y casa campestre
9. Piscinas y jacuzzis
10. Caribe insular de ultra lujo — entrada lenta

---

## 9. Frente · Encuadre geográfico

### El dato

De 23 proyectos publicados:

| Ciudad | Publicados | % |
|---|---|---|
| **Bogotá D.C.** | **10** | 43 % |
| Cali | 6 | 26 % |
| Jamundí | 2 | 9 % |
| Medellín · Quibdó · Ipiales · Cajicá · Guaviare | 1 c/u | 22 % |

Ocho ciudades, seis departamentos más el Distrito Capital.

**El sitio se presenta desde el 22 % de su portafolio y esconde el 43 %.**

### Hallazgo grave, fuera de lo geográfico

**Solo UN proyecto de los 23 está marcado como construido**
(`colegio-y-teatro-el-ensueno`, en Bogotá). Los otros 22 son propuesta,
concurso o proyecto no ejecutado.

Esto no es un problema de datos: es el riesgo reputacional que el README ya
señalaba, y **condiciona todo lo demás**. Un estudio que aún no distingue obra
de propuesta en su propio portafolio no puede permitirse ninguna afirmación
nueva —ni geográfica, ni internacional— porque si un cliente tira del hilo
pierde las dos a la vez.

**Marcar los 23 es prerrequisito de casi todo.**

### Dos afirmaciones que hoy están mezcladas

- **Dónde hay proyecto** — se prueba con la ficha.
- **Dónde se presta el servicio** — afirmación comercial legítima, si se
  redacta como tal.

Barranquilla y Medellín solo pueden aparecer en la segunda. El patrón que
resuelve el problema entero, en una frase: *«Los proyectos publicados están en
Cali; el servicio se presta en todo el país.»*

### Lo que hay que corregir

| Dónde | Problema |
|---|---|
| `content/site.ts` · selector de municipios | Solo Valle. **Un lead de Bogotá —el 43 % del portafolio— solo puede marcarse «Otro».** El sesgo del texto se vuelve pérdida del dato con el que se decide dónde pautar |
| `page.tsx` · el `h1` de la home | «estudio de arquitectura en Cali, Colombia». Es la señal más fuerte del dominio y declara al estudio como caleño |
| `puertas.ts` · puerta principal | «Propietarios con lote en Jamundí, Cali, Palmira y el resto del Valle». Excluye Bogotá, Medellín y la costa. Palmira y Candelaria no tienen un solo proyecto |
| JSON-LD, tres nodos | Zona de servicio declarada como regional. Además redeclara la organización en cada página, creando entidades anónimas que compiten con la del sitio |
| `verticales.ts` | Siete textos que no coinciden con sus propios proyectos. La vertical cultural dice Cali y **no tiene un solo proyecto en Cali**; la urbana omite Medellín, que sí lo tiene |
| `estudio/page.tsx` | «con sede en Cali» abre por la sede en vez de por el alcance |
| `agendar/page.tsx` | Promete «un rango real de costos para el Valle del Cauca». Si la pauta se abre a Bogotá, la promesa no aplica |

**La dirección de Cali NO se toca.** Es la sede real y el dato que debe coincidir
carácter por carácter con la futura ficha de Google Business. Lo que cambia es
quién la usa: es la sede, no la identidad.

### Error de dato, aparte

**Los 10 proyectos de Bogotá llevan `departamento: 'Cundinamarca'`.** Bogotá es
Distrito Capital y no pertenece a Cundinamarca. Sale impreso en la ficha, en la
hoja imprimible y en el JSON-LD de cada proyecto.

### Páginas por ciudad: solo dos

El filtro que evita la *doorway page* — se publica solo si cumple las tres:

1. **Cinco o más proyectos publicados** en esa ciudad. Hoy pasan **Bogotá (10)**
   y **Cali (6)**. No pasa ninguna otra.
2. **Contenido que solo un arquitecto que trabaja allí puede escribir:** la
   norma vigente y su nombre, qué curadurías existen y cómo se reparten el
   territorio, tiempos reales, costo por m² con fecha, y las condiciones
   físicas que cambian el proyecto —2.600 m, clima frío y suelo lacustre en
   Bogotá contra clima cálido, ventilación cruzada y amenaza sísmica alta en
   Cali.
3. **Los proyectos reales de esa ciudad**, enlazados.

Estructura: `/donde-trabajamos` y `/donde-trabajamos/bogota`. La URL lleva la
estructura; el `h1` lleva la consulta («Arquitectos en Bogotá»).

**Techo permanente: cuatro páginas. Ritmo realista: una por trimestre.** Cada
una son 800-1.200 palabras de contenido normativo que hay que actualizar cuando
cambie el POT o el precio del acero. Una página de ciudad desactualizada es
peor que no tenerla.

**Nada de `LocalBusiness` en Bogotá sin oficina física real y atendida.** Es el
error caro: declararla es mentir en el schema, y abrir ficha de Google Business
con una oficina virtual es causal de suspensión.

Y conviene decirlo sin adornos: la zona de servicio del schema **no posiciona**
—eso lo decide la proximidad de la ficha de Google Business—. Sirve para
coherencia de entidad. Quien prometa lo contrario está vendiendo humo.

### Caribe insular: entrada por etapas, con criterio de avance

| Etapa | Qué se publica | Señal para avanzar |
|---|---|---|
| **0 · Preparar** | Nada. Se marca `construido` en los 23 y se recogen los hechos | Los 23 marcados y los hechos por escrito |
| **1 · Medir** | Solo «Fuera de Colombia», «Cartagena» y «Santa Marta» en el selector. Ni una palabra pública | Tres o más leads en esas opciones |
| **2 · Enunciar** | Un párrafo en `/estudio`, en español. Nada más | Que sobreviva 60 días sin que un cliente institucional lo lea como que el estudio se fue al lujo privado |
| **3 · Demostrar** | El artículo técnico del blog | Que traiga tráfico o una conversación de lujo costero |
| **4 · Vender** | Página de servicio **«Vivienda costera»** —costera, no insular— | Un encargo costero colombiano firmado |
| **5 · Internacionalizar** | Sección en inglés, y `en` entra en los locales indexables | Que `/en` sea traducción real, no relleno sobre el español |

Cada etapa se paga con la anterior, ninguna afirma obra que el estudio quizá no
ejecutó, y el posicionamiento colombiano —que es el que da de comer— nunca
queda subordinado al insular.

**El encuadre honesto es también el más fuerte**, porque un cliente de alto
patrimonio compra a personas, no a razones sociales: se atribuye la experiencia
a las personas y no al estudio, se dice explícitamente por qué no está en el
portafolio —eso es lo que desactiva la sospecha— y se cierra en el mercado
ejecutable hoy: Barú, Rosario, Santa Marta, San Andrés.

---

## 10. Frente · Pauta (Facebook y Google Ads)

El orden es correcto y no se puede saltar:

```
El embudo cierra con     → calendario + Meet (Entrega A)
La pauta puede arrancar  → + las 11 tareas del primer bloque de §7
```

Un anuncio que lleva a un WhatsApp sin seguimiento quema presupuesto y no deja
aprendizaje.

Tres de las once tareas dependen de usted, no de código: verificar el dominio en
Resend, hacer el corte de DNS y aprobar la política de datos.

---

## 11. Cronograma propuesto

```
AHORA (usted)     Verificar planobase.co en Resend
                  Abrir cuenta Wompi
                  Decidir: precio · Workspace sí/no · dirección pública
                  Sesión de lectura de la copia con Eduardo

SEMANA 1-2        Reencuadre geográfico nacional
                  Pasada única de redacción (registro + 7 contradicciones
                  + unificación de rótulos)
                  Primeros artículos del blog

SEMANA 2-3        Entrega A: calendario + Meet + correo con .ics

SEMANA 3-4        Las 11 tareas del bloque «antes de la pauta»
                  Corte de dominio

SEMANA 5          ENCENDER PAUTA

SEMANA 5-8        Entrega B: panel /admin + Wompi
                  Bloque «primer mes» de §7
                  Cadencia de blog

DESPUÉS           Intranet: clientes, proyectos, RFI, planos, comunicaciones
```

---

## 12. Anexo · Trámites a iniciar ya

| Trámite | Por qué ahora |
|---|---|
| Verificar `planobase.co` en Resend | Sin esto no sale ningún correo al cliente |
| Cuenta de comercio Wompi | El papeleo tarda más que el desarrollo |
| Google Workspace (si no lo hay) | Decide toda la arquitectura del calendario |
| Ficha de Google Business | **Después** de decidir la dirección |
| Registro ante la SIC (RNBD) | Verificar si aplica a la S.A.S. |
| Factura electrónica DIAN | Obligación al cobrar el primer peso |

---

## 13. Origen de este documento

Seis auditorías independientes sobre el repositorio y el mercado:

| Frente | Alcance |
|---|---|
| Reservas | Comparativa de tres caminos, diseño de esquema, Google Calendar y Meet, políticas |
| Pagos | Documentación oficial de Wompi verificada, arquitectura, esquema, riesgos |
| Redacción | Inventario completo del texto visible, registro, contradicciones |
| Producción | Auditoría técnica con `pnpm build` real, 28 tareas priorizadas |
| SEO Colombia | Volúmenes, competencia y normativa vigente |
| Geografía | Reencuadre de regional a nacional, y plan de entrada al Caribe |
