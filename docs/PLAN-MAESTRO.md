# Plan maestro · Plano Base Web

Estado del proyecto y hoja de ruta completa.
Última actualización: **5 de septiembre de 2026, tras la tanda de arreglos
rápidos de la noche** — con las decisiones del dueño en §1 y lo ejecutado
marcado a lo largo del documento.

Este documento nació reuniendo seis auditorías sobre el repositorio y sobre el
mercado. No hay que leerlo de una sentada: cada frente es independiente y está
marcado con lo que bloquea y lo que no.

**Buena parte ya está en producción.** El estado de la sección siguiente dice
qué, con una línea por frente; ✅ significa desplegado en `www.planobase.co` y
no solo escrito. Los tres frentes que este plan no llegó a contemplar —el sitio
bilingüe, APBS y el rediseño de las páginas de proyecto— están en §15.

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

> **Corregido el 5/9/2026 por la tarde, al escribir el artículo del semáforo.**
> Este documento venía publicando para Cali «1.198 diagnosticadas — 312
> habitables, 543 no habitables, 315 de uso restringido», y **esa combinación no
> aparece en ninguna fuente.** Solo el 543 coincide, y con el corte del 25 de
> agosto. El resto no se pudo confirmar contra la Alcaldía ni contra el
> repositorio oficial del terremoto.
>
> Se reemplaza por los dos cortes que sí están verificados. La cifra vieja se
> deja aquí tachada y no borrada, porque anduvo semanas circulando por este
> plan y conviene poder reconocerla si reaparece en un borrador.

- **Cali**, dos cortes verificados. Se ponen los dos a propósito: la diferencia
  entre ellos dice más que cualquiera de los dos suelto, porque enseña a qué
  velocidad se mueve el censo.

  | Corte | Visitadas | Habitables | Uso restringido | No habitables |
  |---|---|---|---|---|
  | 25 ago 2026 | 1.147 | 306 | 298 | 543 |
  | 5 sep 2026 | 1.713 | 439 | 472 | 765 |

  ~~1.198 diagnosticadas — 312 habitables, 543 no habitables, 315 de uso
  restringido~~ · sin fuente. Plan de seis meses de planeación y tres años de
  obra.
- **Valle del Cauca:** de 1.150 sedes educativas, 720 afectadas y 220
  colapsadas.
- **Nacional:** 3.726 sedes educativas afectadas, 811 colapsadas.
- Decreto 1261 del 19 de agosto de 2026: emergencia en 15 departamentos. **Su
  control constitucional está en trámite sin fallo.**
- **Fondo Milagro** (modelo FOREC), con prioridad en vivienda, colegios y
  hospitales. Su secuencia declarada: primero información de daños, luego
  planeación, y solo al final contratación de obra.

**Las cuatro cifras que quedan sin corte de fecha —las de sedes educativas y el
Decreto 1261— no se han verificado con el mismo rigor que las de Cali.** La
combinación de Cali resultó no existir en ninguna fuente, así que conviene tratar
las demás como pendientes de comprobar y no publicarlas en el sitio sin buscarlas
primero. La regla que este proyecto ya se dio: una cifra sin fecha de corte es
una cifra falsa dentro de seis meses, y una sin fuente no llega a serlo nunca.

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
| 1 minuto | El estado de aquí abajo |
| 5 minutos, y no va a escribir código | `docs/TRAMITES-EXTERNOS.md`: lo que hay que pedirle a alguien de fuera |
| 5 minutos | El estado y §1 Decisiones que dependen de usted |
| 20 minutos | Lo anterior, §2 Estado actual y §11 Cronograma |
| Una tarde | Todo, en orden |

**Leyenda.** ✅ terminado y en producción · ⏳ terminado y commiteado en la
rama, esperando el lote de publicación · 🟡 empezado, falta parte · ⬜ sin
empezar · 🔴 bloqueado esperando una decisión suya.

---

## Estado · 5 de septiembre de 2026

Lo que sigue es la foto del día. Cada línea con ✅ está desplegada en
`www.planobase.co`, no solo escrita.

**Con una excepción, marcada abajo con ⏳.** Las seis últimas filas de la tabla
salieron de la pasada de redacción del 5/9 por la tarde y están **commiteadas en
la rama, sin publicar**: el trabajo se acumula por lotes y Gustavo pide la
publicación cuando la quiere. Están terminadas y verificadas contra el HTML
generado —`pnpm build` en verde, con sus cuatro guardas—, pero todavía no las ve
nadie fuera del repositorio.

### Terminado ✅

| | Qué |
|---|---|
| ✅ | **El sitio es bilingüe de verdad.** 95 URLs en inglés, con `hreflang` recíproco. Cada ruta entra al índice inglés cuando su contenido está traducido, no porque el idioma esté encendido |
| ✅ | **Los 43 artículos del blog, en español e inglés.** Y el portafolio entero: las 24 memorias, las 7 verticales, los 10 temas |
| ✅ | **El embudo comercial completo en inglés**: portada, estudio, servicios, las 7 puertas, contacto y agendar |
| ✅ | **APBS y la calculadora de expensas de curaduría**, para los 1.103 municipios del DANE, con vigencia que caduca sola en tres capas |
| ✅ | **El formulario recibe leads de todo el país.** Antes ofrecía seis opciones del Valle y Bogotá entraba como «Otro» |
| ✅ | **Las páginas de proyecto rediseñadas**: memoria a dos columnas, galería en filas justificadas, y visor con zoom y desplazamiento |
| ✅ | Páginas de error en los dos niveles *(tarea de §7)* |
| ✅ | Open Graph propio por página *(tarea de §7)* |
| ✅ | Contraste de color corregido: texto secundario, enlaces y campos de formulario *(tarea de §7)* |
| ✅ | Bogotá deja de figurar en Cundinamarca *(decisión 1.10)* |
| ✅ | Los 32 artículos que faltan, listados y priorizados *(§14)* |
| ✅ | **Cabeceras de seguridad.** Hasta ahora, en el dominio real no salía ni una *(tarea de §7)* |
| ✅ | El vídeo de Tirreno, que llevaba desde la migración sin verse |
| ⏳ | **Registro «usted» en la interfaz** *(decisión 1.7)*. Quedaban seis cadenas en tú, no 32: las pasadas anteriores ya habían limpiado el resto |
| ⏳ | **Las contradicciones H1, H2 y H4** del §6, y H5 ya venía resuelta desde la migración |
| ⏳ | **Las inconsistencias del §6**: un rótulo de botón, una ventana de respuesta, áreas en metros enteros, y el número deja de ir en letra y cifra en la misma pantalla |
| ⏳ | **El `h1` de `/agendar` dice el precio** en vez de argumentar que no debería ser caro |
| ⏳ | **Los tres nodos del JSON-LD** *(§9)*: zona de servicio nacional y una sola entidad de organización |
| ⏳ | **Siete fugas del bilingüe**: rótulos y contadores escritos en español a mano dentro de `[locale]`, que `/en` pintaba en español |
| ⏳ | **Las dos plantillas de Resend** *(decisión 1.3)*: el acuse de recibo del formulario y la confirmación de reserva con el `.ics`. En español e inglés |
| ⏳ | **Quinta guarda de build**, `check-correos.ts`: valida el `.ics` contra la RFC y que el texto del visitante salga inerte |
| ⏳ | **La política de tratamiento de datos** *(Ley 1581)*, en `/politica-de-datos` y en los dos idiomas. **Pendiente de revisión jurídica** |
| ⏳ | **La autorización expresa en el formulario**, con la prueba guardada: qué autorizó, cuándo y qué política estaba vigente |
| ⏳ | **El banner de consentimiento.** Ninguna etiqueta se carga sin un sí explícito |
| ⏳ | **GA4 y la etiqueta de conversión de Google Ads**, montadas detrás de ese mismo consentimiento |
| ⏳ | **Cuando el envío falla, hay a dónde llamar**: WhatsApp, teléfono y correo en los tres puntos de fallo. Y la página de error deja de estar en español fijo |
| ⏳ | **El artículo del sismo**, en los dos idiomas *(§14, n.º 74)* |

### Empezado, falta parte 🟡

| | Qué | Qué falta |
|---|---|---|
| 🟡 | **Registro «usted»** *(decisión 1.7)* | Hecho en el formulario, `/contacto`, la portada, los rótulos del blog y la interfaz entera: `messages/` y la copia de error quedan sin un solo tuteo, comprobado con un barrido. **Falta el cuerpo de los artículos en `content/blog/`** |
| 🟡 | **Encuadre nacional** *(§9)* | Hechas las puertas, `/agendar`, la descripción de tres páginas, el `h1` de la portada y **los tres nodos del JSON-LD**. Comprobado además que **dos verticales dicen bien «Valle del Cauca» y «Cali»**: es donde está esa obra, y ensancharlo sería inventar proyectos. Solo queda pendiente lo que depende de marcar `construido` |
| 🟡 | **El blog** *(§8)* | **44 de 77.** De los 33 que faltan, **16 se pueden escribir hoy y 17 están bloqueados** por la decisión 1.9. Los diez de piscinas están escritos y **sin registrar**: ver el aviso del §8 |

### Bloqueado esperando a un tercero 🔴

**Todo lo que depende de alguien de fuera —abogado, contador, banco, Google,
Meta o una entidad pública— está en `docs/TRAMITES-EXTERNOS.md`**, con qué hay
que llevar a cada uno, qué desbloquea y en qué estado está. Son nueve trámites.
Tres bloquean cosas que ya están construidas y esperando:

| | Trámite | Bloquea |
|---|---|---|
| 🔴 | **Que un abogado lea la política de datos** | La pauta. El código está hecho |
| 🔴 | **Las credenciales de Google del calendario** | La Entrega A entera. La plantilla del correo ya está escrita y probada |
| 🔴 | **Los términos de referencia de los cuatro concursos** | La contradicción H3/H6 y el artículo 29 |

### Bloqueado esperando una decisión suya 🔴

| | Qué | A qué bloquea |
|---|---|---|
| 🔴 | **1.9 · Marcar cuáles proyectos están construidos** | Dieciséis artículos —los cinco casos propios y los once del Caribe—, la página de credenciales, y buena parte de §8. **Es media hora en `docs/PROYECTOS-CONSTRUIDO.md`** y es, con diferencia, lo que más desbloquea |
| 🔴 | **1.6 · Los cuatro reconocimientos** — lo que falta son los documentos, y pedirlos es un trámite: ver `docs/TRAMITES-EXTERNOS.md` | El artículo 29 y la corrección de la contradicción H6 |
| 🔴 | **1.8 · La copia pendiente de aprobación** | Los textos marcados «PENDIENTE DE APROBACIÓN» en `content/` |
| ⬜ | **1.4 · Cuenta de comercio Wompi** — no espera una decisión: la decisión fue diferirla. Es un trámite, y está en `docs/TRAMITES-EXTERNOS.md` | El frente de pagos (§4), que a propósito ya no está en el camino crítico |

### Sin empezar ⬜

Reservas con calendario y Meet *(§3)* · Pagos *(§4)* · CRM e intranet *(§5)* ·
Pauta *(§10)* · Y de §7: monitoreo de errores y uptime, y URLs de campaña.

La alerta de lead perdido **sale de esta lista y no por hacerse**: Gustavo la
descartó con un argumento que la desmonta —si el sistema está caído, avisar al
estudio no recupera nada, porque el mensaje que se perdió llevaba justamente
los datos de contacto—. Lo que se hizo en su lugar fue darle al visitante una
salida que se pulse: WhatsApp, teléfono y correo en el momento del fallo.

**El bloqueo de la pauta ya no es de código.** La política, el banner y la
medición están montados. Lo que falta para encenderla son cuatro cosas que no
se escriben en el repositorio:

1. **Que un abogado lea la política.** Está redactada contra el texto de la
   norma y trae los seis contenidos obligatorios, pero responde ante la
   Superintendencia y eso lo firma un abogado.
2. **Crear las cuentas de GA4 y de Google Ads** y poner las cuatro variables.
   El código ya las espera y no hay que tocarlo.
3. **Verificar si aplica el registro ante el RNBD**, que depende del tamaño de
   activos de la sociedad. Es una pregunta para el contador.
4. **Las tres tareas de §7 que siguen abiertas:** monitoreo de errores,
   cabeceras de seguridad y URLs de campaña.

---

## 1. Decisiones que dependen de usted

Nada avanza sin estas. Están ordenadas por urgencia real.

**Respondidas por Gustavo Mejía el 5 de septiembre de 2026.** Cada apartado
conserva el contexto que explicaba por qué la decisión importaba —eso es lo que
hace auditable la decisión más adelante— y añade abajo qué se decidió y qué
desbloquea. Las respuestas literales están en `HOJA-DE-RUTA.md`, sección «Para
usted».

**Resumen:** cerradas 0.1, 0.2, 0.5, 0.8, más `/en` y el rumbo de la facturación
electrónica. Abiertas: 0.6 (marcar `construido`), 0.9 (aprobar la copia) y el
trámite de Wompi, este último abierto por decisión de orden y no por falta de
respuesta. **En conflicto sin cerrar: 0.7, los reconocimientos.**

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

#### DECIDIDO · 5/9/2026 — CERRADA

- **La llamada inicial de 15 minutos es sin costo.** Es lo que ya publica
  `content/site.ts` y lo que ya dice `/agendar`: no hay nada que cambiar.
- **Los $50.000 eran el precio anterior y se descartan.** El volcado de Wix
  queda como registro histórico, no como fuente. Deja de ser una contradicción
  viva y pasa a ser un dato viejo.
- **Los $300.000 son el precio de lista de la visita técnica con informe**, que
  vive en la escalera de `content/puertas.ts`, no en la primera llamada.
- **Acepta el calendario genérico** con el pago activado solo cuando el precio
  sea mayor que cero.

**Qué desbloquea:** la Entrega A completa. El calendario puede salir a
producción **sin esperar a Wompi**, porque el único servicio que recibe tráfico
frío hoy cuesta cero. La decisión 1.4 deja de estar en el camino crítico.

### 1.2 · ¿`proyectos@planobase.co` está en Google Workspace de pago? — BLOQUEA Google Meet

- **Sí** → cuenta de servicio con delegación de dominio. $0 adicionales. No
  caduca, no hay pantalla de consentimiento, no hay verificación de app.
- **No** → o se contrata Workspace (~$34.000 COP/mes por una cuenta), o se va
  por OAuth con un Gmail normal. Esa segunda vía tiene una trampa: **Google
  caduca el token cada 7 días** y las reservas se siguen creando, solo que sin
  enlace de Meet. Falla en silencio.

Para algo que sostiene tráfico pagado, la vía de los 7 días no es opción.

#### DECIDIDO · 5/9/2026 — CERRADA

**Sí: `proyectos@planobase.co` está en Google Workspace de pago.**

**Qué desbloquea, y es la respuesta de mayor efecto de toda esta sección:**

- **Cambia toda la arquitectura del calendario.** Se va por cuenta de servicio
  con delegación de dominio, que es la vía buena: no caduca, no hay pantalla de
  consentimiento, no hay verificación de app y no hay refresh token que renovar.
- **Elimina el modo de falla más peligroso del proyecto.** La vía de OAuth con
  un Gmail normal habría seguido creando reservas después de que el token
  caducara, pero sin enlace de Meet. Un fallo silencioso sobre tráfico pagado.
  Ese riesgo desaparece por completo.
- **Costo adicional: $0.** No hay que contratar los ~$34.000 COP/mes.
- **Confirma el paso a paso de credenciales** del §3, que estaba escrito
  suponiendo Workspace. Lo único que queda es ejecutarlo: proyecto de Google
  Cloud, Calendar API, cuenta de servicio, delegación con un solo scope y un
  calendario nuevo «Asesorías Plano Base».

### 1.3 · Verificar `planobase.co` en Resend — URGENTE, y no es un pulido

**Hoy el correo de confirmación al cliente no saldría.** Mientras el dominio no
esté verificado, Resend solo permite escribir a la dirección de la propia
cuenta. El sistema cobraría y no confirmaría. Son unos registros DNS.

#### DECIDIDO · 5/9/2026 — CERRADA EN EL TRÁMITE, ABIERTA EN EL TRABAJO

**«Ya está funcionando. Necesitamos los templates.»**

El dominio está verificado, así que el bloqueo desaparece: el correo ya puede
salir a cualquier destinatario.

**Lo que queda abierto son las plantillas**, y no es un pulido: son dos correos
que forman parte del producto.

1. **Acuse de recibo del formulario de contacto.** Hoy un lead envía el
   formulario y no recibe nada.
2. **Confirmación de reserva con el `.ics` adjunto y el enlace de Meet.** Es la
   pieza que cierra la Entrega A, y el motivo por el que se desactiva a
   propósito el correo automático de Google: el cliente debe recibir **un solo
   correo**, el del estudio.

Sigue siendo la tarea 1.7, con el alcance cambiado de «verificar el dominio» a
«redactar y montar las plantillas».

#### ✅ HECHA · 5/9/2026 — las dos plantillas están montadas

**Cerrada del todo.** Las dos viven en `src/lib/correo/`, con la copia en
`content/correos.ts` y su inglés en `content/en/correos.ts`.

- **El acuse de recibo ya sale.** Va después de responderle al navegador y es
  best-effort: si Resend falla se anota en el log y el lead se da por bueno
  igual. Perder un encargo por no poder mandar un acuse sería cambiar el
  problema pequeño por el caro.
- **La confirmación de reserva está escrita y probada, y no espera al
  calendario.** Recibe una reserva ya hecha —quién, cuándo, con qué enlace— y
  devuelve el correo con el `.ics` adjunto. Cuando lleguen las credenciales de
  Google, lo que hay que escribir es quien la llama, no la plantilla. Contempla
  que el enlace de Meet falte: sale igual diciendo que llega aparte, porque una
  confirmación sin enlace sirve y una reserva sin confirmación no.
- **El `.ics` se escribe a mano y no con una biblioteca**, y hay una guarda de
  build que lo valida contra la RFC 5545 en lo que de verdad rompe: CRLF,
  plegado a 75 octetos y escapado. Un calendario mal formado lo acepta Gmail y
  lo rechaza Outlook, que es el cliente de las entidades públicas.

**Y arrastró consigo el idioma del lead.** Para escribir el acuse en el idioma
correcto la Server Action necesita saber en cuál estaba el visitante, así que el
idioma entra en el esquema. Con eso, los tres mensajes de error generales del
formulario pasaron de frases en español a claves, y el hallazgo que la pasada de
redacción había dejado anotado queda cerrado en la misma pasada.

**Lo que queda pendiente y no es de esta tarea:** cuando el calendario exista,
hay que **desactivar el correo automático de Google Calendar**. Si salen los
dos, el que llega primero es el de Google, con su remitente y su maqueta, y la
reserva parece hecha por Google con el estudio de invitado.

### 1.4 · Abrir la cuenta de comercio Wompi — el trámite tarda más que el código

Persona jurídica, RUT y cuenta bancaria a nombre de Plano Base Arquitectos
S.A.S. Hay ambiente de pruebas para avanzar mientras tanto.

#### DECIDIDO · 5/9/2026 — ABIERTA POR DECISIÓN DE ORDEN

**«Sí, esto se debe hacer, pero no en esta fase. Debemos primero empezar a
pautar, así que déjalo como una tarea crítica.»**

No es una respuesta pendiente: es una decisión de secuencia. **Wompi sale del
camino crítico** y queda como tarea crítica diferida, después de encender la
pauta.

**Por qué esto ahora es viable y antes no:** la decisión 1.1 dejó la primera
llamada en cero. Un embudo cuyo primer peldaño es gratuito **no necesita
pasarela para cerrar**. La Entrega A basta.

**El aviso original sigue en pie, y por eso se marca como crítica:** el papeleo
tarda más que el desarrollo. Si se inicia el trámite el día que se necesite la
Entrega B, la Entrega B espera al banco. Vale la pena arrancarlo en paralelo
aunque no se use durante semanas — no cuesta nada tenerlo listo y esperando.

### 1.5 · La dirección pública: ¿Cali o Jamundí?

Sin decidir en el código, pero el sitio ya publica «Calle 18 # 61-29, Cali» en
el JSON-LD, el pie, `/contacto`, el dossier y las 23 hojas de proyecto.

**Importa el orden:** si se crea la ficha de Google Business y después se cambia
la dirección, se resetea la antigüedad de la ficha. Decidir primero.

#### DECIDIDO · 5/9/2026 — CERRADA

**La dirección pública es Cali.**

Coincide con lo que el sitio ya publica —Calle 18 # 61-29, Cali— en el JSON-LD,
el pie, `/contacto`, el dossier y las 23 hojas de proyecto. **No hay que cambiar
nada**, y la contradicción H7 del §6 queda cerrada.

**Qué desbloquea:** la ficha de Google Business puede crearse sin riesgo de
perder antigüedad. Pero ver la matización del §1.13, más abajo: él dijo que le
interesa «arquitectos en Colombia», no «arquitectos en Cali», y eso cambia la
pregunta de si crearla.

**Y no confundir la sede con la identidad.** Cali es la sede real, y ese dato
debe coincidir carácter por carácter con la futura ficha. Lo que el reencuadre
del §9 cambia es quién la usa y cómo se enuncia el alcance, no la dirección.

### 1.6 · La afirmación de los cuatro reconocimientos — CONFLICTO ABIERTO

El sitio dice «cuatro reconocimientos en **concurso público nacional**». El dato
no lo sostiene: solo dos se declaran nacionales (El Ensueño y Pradera El
Volcán). Teusaquillo es concurso público de una alcaldía **local**; Las Colinas
es concurso **de ideas**.

Es la credencial que un comprador institucional verifica antes de llamar, y el
README ya identifica esto como el riesgo reputacional más alto del portafolio.
Hay que reformularla a algo cierto y que siga siendo fuerte — cuatro
reconocimientos en concurso siguen siendo cuatro.

#### La respuesta, y por qué no cierra el asunto

**«Los 4 son concursos nacionales.» — Gustavo Mejía, 5/9/2026.**

Esa afirmación **contradice los datos del propio repositorio**, y por eso no se
registra como decisión cerrada sino como conflicto abierto. Ni se cambió el
texto del sitio para ajustarlo a la memoria, ni se cambió para ajustarlo a la
auditoría. **Nada se tocó.**

No es exceso de celo. Es precisamente el dato que un comprador institucional
verifica —lo puede verificar, porque los términos de referencia y las actas de
un concurso público son documentos públicos—, y si lo verifica y no cuadra, no
pierde solo esa afirmación: pierde la confianza en todo el portafolio.

#### Qué dice cada proyecto sobre su propio concurso

Transcripción literal del campo `subtitulo` de `content/projects.ts`. **Los
cinco coinciden carácter por carácter con `wix-migration/01-content/projects.json`**,
así que no hay pérdida en la migración: es lo que el estudio venía publicando en
Wix.

| Proyecto · slug | `subtitulo` publicado, literal | `premio` | Año |
|---|---|---|---|
| `alcaldia-local-de-teusaquillo` | «Primer puesto, concurso público arquitectónico para la nueva Alcaldía Local de Teusaquillo» | `"Primer puesto"` | 2014 |
| `colegio-y-teatro-el-ensueno` | «Primer puesto: concurso público **nacional** de anteproyecto arquitectónico para el diseño de El Ensueño» | `"Primer puesto"` | 2014 |
| `colegio-pradera-el-volcan` | «Segundo puesto, concurso público de anteproyecto arquitectónico Colegio Pradera El Volcán» | `"Segundo puesto"` | 2015 |
| `casa-cultural-las-colinas` | «Segundo puesto: concurso **de ideas** para el diseño arquitectónico Casa Cultural Las Colinas» | `"Segundo puesto"` | 2022 |
| `teatro-cesar-conto-ferrer` *(el quinto, privado)* | «Segundo puesto, concurso **privado**: Teatro César Conto Ferrer» | `"Segundo puesto"` | 2017 |

Y en `content/site.ts`, la lista `reconocimientos` los titula así:

| Entrada | `titulo` en `site.ts`, literal | `ambito` |
|---|---|---|
| 1 | «Alcaldía Local de Teusaquillo» | `'publico'` |
| 2 | «Colegio y teatro El Ensueño, Ciudad Bolívar» | `'publico'` |
| 3 | «Concurso Público **Nacional** Nuevos Espacios de Aprendizaje para el Siglo XXI. Colegio Pradera El Volcán» | `'publico'` |
| 4 | «Teatro César Conto Ferrer» | `'privado'` |
| 5 | «Casa de la cultura Colinas, San José del Guaviare» | `'publico'` |

#### Qué dicen los datos, en limpio

- **Solo uno de los cinco lleva la palabra «nacional» en su propio subtítulo:**
  El Ensueño.
- **Pradera El Volcán es el segundo «nacional», pero por otra vía:** la palabra
  no está en su subtítulo, está en el título del concurso tal como lo recoge
  `site.ts` —«Concurso Público **Nacional** Nuevos Espacios de Aprendizaje para
  el Siglo XXI»—, y esa misma redacción viene del volcado de Wix
  (`site.json` y `pages.json`). Es el nombre propio del concurso, y como
  evidencia es **más fuerte** que un adjetivo suelto.
- **Teusaquillo dice «concurso público arquitectónico», sin ámbito.** No dice
  «local»; tampoco dice «nacional». El calificativo de «local» del análisis
  anterior venía del nombre del proyecto —Alcaldía **Local** de Teusaquillo, que
  es el nombre de la entidad, una alcaldía local de Bogotá—, no del subtítulo del
  concurso. **Ese matiz corrige parcialmente a favor de Gustavo:** el dato
  publicado no afirma que el concurso fuera local, solo no afirma que fuera
  nacional.
- **Las Colinas dice «concurso de ideas».** Aquí la tensión es de otro tipo, y no
  se resuelve con la palabra «nacional»: un concurso de ideas y un concurso de
  anteproyecto no son lo mismo, y un jurado institucional lo sabe. Puede ser
  perfectamente un concurso de ideas de convocatoria nacional; las dos cosas no
  se excluyen.
- **El quinto es privado y él mismo lo declara así.** Nadie lo discute — pero
  ver más abajo la contradicción del «cuatro» contra el «cinco».

**Resumen del conflicto:** de los cuatro concursos públicos, **dos tienen
respaldo documental de ser nacionales en el propio sitio** y dos no lo tienen.
Que no lo tengan **no prueba que no lo sean**: prueba que el subtítulo se
escribió sin ese dato. La afirmación de Gustavo es perfectamente posible; lo que
falta es la prueba.

#### Qué haría falta para cerrarlo

Un documento por concurso, y con uno solo por proyecto basta:

1. **Los términos de referencia o el pliego de la convocatoria** — es donde se
   declara el ámbito y quién podía presentarse. Es el documento que zanja la
   discusión.
2. **El acta de fallo del jurado**, que suele repetir el nombre completo y
   oficial del concurso.
3. Alternativamente, **la resolución o el aviso de convocatoria** de la entidad,
   o la ficha del concurso en la SCA si fue arbitrado por la Sociedad Colombiana
   de Arquitectos.

Con eso en mano, la afirmación del sitio se reescribe **una sola vez** y con el
nombre oficial de cada concurso, que además es mejor copia que cualquier
adjetivo: «Primer puesto en el Concurso Público Nacional de Anteproyecto
Arquitectónico para…» convence más que «cuatro reconocimientos nacionales».

**Mientras tanto:** el texto queda como está. No se sube la afirmación ni se
baja. Si hiciera falta encender la pauta antes de encontrar los documentos, la
salida honesta y sin costo es la que ya era la recomendación —**«cuatro
reconocimientos en concurso público»**, sin adjetivo—, que es cierta bajo las
dos versiones de los hechos y no pierde fuerza.

#### Y una contradicción aparte, que se resuelve en la misma pasada

`content/site.ts` encabeza la lista con el comentario «**Cuatro** reconocimientos
en concurso público» y a continuación define **cinco** entradas: cuatro públicas
y una privada. `estudio/page.tsx` dice «**Cinco** reconocimientos en concurso» y
la metadescripción de esa misma página dice «**cuatro** reconocimientos en
concurso público nacional». Las dos cifras son correctas y hablan de cosas
distintas; el problema es que conviven sin explicarse. Es la contradicción H6 del
§6, y se cierra junto con esta.

### 1.7 · Registro de trato: usted en todo el sitio

Ver §6. Requiere su visto bueno porque toca copia ya aprobada.

#### DECIDIDO · 5/9/2026 — CERRADA

**«Usted.»**

**Qué desbloquea:** las **32 reescrituras** del §6, que ya están redactadas con
el texto exacto viejo → nuevo. Es trabajo de aplicar, no de decidir. Entra en la
pasada única de redacción de la fase 5, junto con el reencuadre geográfico y las
siete contradicciones de hecho — son los mismos archivos y no tiene sentido
tocarlos tres veces.

Y confirma el criterio del §6: no había que reabrir la copia ya aprobada, porque
esa copia ya estaba usteada.

### 1.8 · Aprobación de la copia pendiente

Mucho texto publicado está marcado en su propio código como no aprobado: la
visión de `/estudio` («BORRADOR PARA EDUARDO»), los siete textos de vertical,
las políticas de la asesoría, el peldaño 2 de la escalera y `/agendar` entera.
**Solo dos puertas llevan sello de aprobación.**

Es el texto que va a recibir el tráfico pagado. Necesita una sesión de lectura
con Eduardo y con usted.

#### RESPONDIDO · 5/9/2026 — SIGUE ABIERTA

**«Necesito revisar todo.»**

Es un compromiso, no una fecha. **Lo que falta es agendar la sesión de lectura**
con Eduardo, y sigue siendo un bloqueo real de la pauta: `/agendar` entera está
sin aprobar y es exactamente la página que va a recibir el dinero.

El material a leer, para que la sesión tenga alcance conocido:

- La visión de `/estudio`, marcada en su propio código como «BORRADOR PARA
  EDUARDO».
- Los siete textos de vertical.
- Las políticas de la asesoría.
- El peldaño 2 de la escalera.
- **`/agendar` entera** — la prioritaria.

**Conviene leerla después de la pasada de redacción de la fase 5, no antes.** Si
se aprueba el texto de hoy y luego se unifica en «usted» y se reencuadra a
nacional, hay que volver a aprobarlo. Aprobar una vez, sobre el texto final.

### 1.9 · Marcar cuáles proyectos están construidos — PRERREQUISITO DE CASI TODO

**Solo 1 de los 23 proyectos publicados está marcado como construido.** Los
otros 22 figuran como propuesta, concurso o proyecto no ejecutado.

Nadie fuera del estudio puede resolver esto: hay que ir proyecto por proyecto.

Es prerrequisito de tres cosas a la vez: del tráfico frío al portafolio, del
reencuadre geográfico y de cualquier afirmación sobre experiencia
internacional. Un estudio que aún no distingue obra de propuesta en su propio
portafolio no puede permitirse una afirmación nueva: si un cliente tira del
hilo, pierde las dos.

#### RESPONDIDO · 5/9/2026 — SIGUE ABIERTA

**«Dame una lista, o dónde la encuentro.»**

Justo: señalar un archivo de TypeScript no sirve para una tarea que se hace con
Eduardo en media hora sobre una mesa.

**Entregado: `docs/PROYECTOS-CONSTRUIDO.md`.** Los 23 proyectos publicados en una
tabla, ordenada por ciudad y dentro de cada ciudad por año, con el título tal
como se publica, ciudad, año, categorías, lo que hoy dice el dato `construido`,
una columna vacía para marcar **construido · propuesta · concurso** y una
columna de nota para el caso raro. Al final dice dónde vive el dato en el código
por si prefiere editarlo directamente.

**Sigue siendo el mayor bloqueo del proyecto.** La lista no lo resuelve; solo
quita la excusa. Hasta que las 23 filas estén marcadas siguen bloqueados: el
tráfico frío al portafolio, el reencuadre nacional, la página de credenciales
institucionales (P2 del `PLAN-BLOG.md`), el pilar de casos propios y toda la
entrada al Caribe.

### 1.10 · Bogotá no es Cundinamarca — ✅ HECHA

Los 10 proyectos de Bogotá llevan `departamento: 'Cundinamarca'`. Bogotá es
Distrito Capital. Sale impreso en la ficha, en la hoja imprimible y en los
datos estructurados de cada proyecto. Es corrección de dato, no decisión — se
aplica sin consultar.

**Sin cambios.** No se preguntó y no hacía falta. Un detalle de ejecución: el
dato vive en `content/projects.ts`, que está generado por `pnpm media` desde
`wix-migration/01-content/projects.json`. La corrección va **en el origen o en
el script**, no en el archivo generado, o el siguiente `pnpm media` la borra.

**✅ Aplicada el 5/9/2026.** En el origen y regenerada, como dice el párrafo de
arriba. Los diez proyectos, sus textos alternativos y el `addressRegion` del
JSON-LD. Cajicá se queda en Cundinamarca, que sí lo es.

Salió además un efecto que no se había previsto: al coincidir ciudad y
departamento, unirlos daba «Bogotá D.C., Bogotá D.C.». Se resolvió con una
función que une las partes de un lugar sin repetir la que se repite, y de paso
se quitó el punto duplicado que un lector de pantalla anunciaba como dos pausas.

---

## 1 bis. Decisiones nuevas, que no estaban en esta lista

Salieron de las preguntas A7, B4 y B5 de la hoja de ruta.

### 1.11 · Deshabilitar `/en` — 🔄 REVERTIDA · ✅ se tradujo todo

> **Esta decisión se revirtió el mismo día.** Lo que sigue explica de dónde
> venía; la respuesta final está al pie de la sección.

**«Por ahora deshabilita el /en. Vamos a hacer desarrollo hasta un punto estable
o de bajo volumen, y ahí sí traducimos todo.»**

El §6 describe el problema: `messages/en.json` está completo y bien traducido,
pero el cuerpo editorial está escrito a mano en español dentro de los
componentes, así que `/en` sirve **la cáscara en inglés y el contenido en
español**. Había dos salidas —traducir de verdad (3-5 días) o retirarla— y
mantener 22 páginas fantasma era lo peor de las dos.

**Se elige retirarla**, y con eso queda obsoleta la salida intermedia que
proponía este documento: pintar la cadena de aviso «Content shown in Spanish».
Ya no hace falta.

**Qué desbloquea:** cierra el frente de inglés y saca de la lista de «después»
la tarea «decidir el destino de `/en`» del §7. **Y aplaza formalmente la etapa 5
de la entrada al Caribe** (§9), que dependía de que `/en` fuera traducción real.

El plan de ejecución detallado —mecanismo en `src/i18n/routing.ts`, qué hacer con
las URLs existentes, y qué recordar el día que se traduzca— estaba en la tarea
5.5 de `HOJA-DE-RUTA.md`.

#### 🔄 REVERTIDA el mismo día · «prefiero mantener el inglés pero traducir todo, absolutamente todo»

Y se hizo. **Los 43 artículos, el portafolio entero, las verticales, los temas y
el embudo comercial están en los dos idiomas**, con 95 URLs inglesas indexables.
Ver §15.

Tres decisiones asociadas, tomadas con las cifras delante —86.100 palabras
entonces, camino de 150.000 cuando el blog termine—:

- **El blog se traduce también**, aun siendo el 74 % del volumen y siendo
  normativa colombiana.
- **Los artículos nuevos se escriben bilingües desde el origen.** Traducirlos
  después obliga a releer la investigación entera.
- **La indexación es página por página**, no de golpe: cada ruta entra al índice
  inglés cuando su contenido está traducido, y el resto sigue fuera cayendo a
  español.

**La tarea 5.5 de la hoja de ruta queda anulada, no aplazada**, y allí está
escrito por qué no puede ejecutarse nunca: proponía un 301 de `/en/*` a `/es/*`,
y esos redirects corren antes del middleware, así que atraparían cada página
inglesa recién traducida sin forma de alcanzarla.

**Y la etapa 5 del Caribe (§9) deja de estar aplazada**: ya no depende de una
decisión, sino de que se escriban sus once artículos.

### 1.12 · Facturación electrónica: rumbo Odoo — CERRADA EN EL RUMBO

**«Ya tenemos un sistema de facturación, pero me gustaría que generes un plan
para que hagamos la facturación electrónica con Odoo. Esto se puede posponer casi
hasta lo último del roadmap.»**

Corrige un supuesto de este documento: el §4 daba por hecho que había que decidir
«a mano o con proveedor». **Ya hay sistema de facturación andando**, así que
cobrar el primer peso no queda bloqueado por esto.

Lo que queda es un trabajo nuevo, no un bloqueo: **escribir el plan de
facturación electrónica con Odoo** —proveedor tecnológico habilitado ante la
DIAN, resolución de numeración, ambiente de habilitación, y el enganche con los
pagos de Wompi para que una transacción confirmada genere su factura—. Va casi al
final de la hoja de ruta, después de la Entrega B.

### 1.13 · La ficha de Google Business — MATIZADA, NO CERRADA

**«No me interesa arquitectos en Cali, me interesa arquitectos en Colombia.»**

La intención es la correcta y coincide con todo el §9: el estudio es nacional y
el sitio lo esconde. Pero la respuesta trata la ficha como si fuera una palanca
de alcance, y no lo es.

**Una ficha de Google Business solo posiciona por proximidad.** No existe una
ficha nacional, y declarar `LocalBusiness` en ciudades donde no hay oficina
física atendida es causal de suspensión —está advertido en el §9—. El alcance
nacional se gana por otra vía y ya está planificado: el reencuadre del `h1`, el
selector de ciudades, las verticales y el JSON-LD (tarea 5.1), más las páginas
de ciudad con contenido normativo real, que hoy solo aprueban **Bogotá** y
**Cali**.

**Y las dos cosas no compiten: se suman.** Para «arquitectos en Cali» el paquete
de mapas se lleva la mayor parte de los clics, y ese es tráfico que hoy el
estudio no recibe y que no le resta nada al posicionamiento nacional.

**Qué falta:** que confirme si aun así quiere crear la ficha. La dirección ya
está fijada por §1.5 —Cali—, así que si la respuesta es sí, no hay nada más que
decidir.

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

**Confirmado el 5/9/2026: hay Workspace de pago (§1.2), así que esta es la ruta,
no una de dos.** Es el trámite B3 de la hoja de ruta y sigue pendiente de
ejecutar.

1. Proyecto nuevo en Google Cloud, `planobase-reservas`.
2. Habilitar **Google Calendar API**. Es la única. La «Google Meet API» no hace
   falta: el Meet se crea a través de Calendar.
3. Crear cuenta de servicio `reservas-web`, sin ningún rol de IAM.
4. Generar clave JSON. **Va al gestor de contraseñas, nunca al repositorio.**
5. Delegación de todo el dominio en admin.google.com, con el scope
   `https://www.googleapis.com/auth/calendar.events` y nada más.
6. Crear un calendario nuevo «Asesorías Plano Base», no usar el principal.

**La alternativa de OAuth con Gmail queda descartada**, y con ella el fallo
silencioso del token de 7 días.

---

## 4. Frente · Pagos con Wompi

**Estado tras las decisiones del 5/9/2026:** todo este frente queda **diferido**.
La primera llamada es gratuita (§1.1) y la cuenta de comercio se abre después de
encender la pauta (§1.4), así que el embudo cierra sin pasarela. Lo de abajo
sigue siendo válido y no cambia; solo cambia cuándo se hace.

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

**Corregido el 5/9/2026 (§1.12):** el estudio **ya tiene un sistema de
facturación**, así que esta obligación no bloquea el primer cobro. La decisión
tomada es el rumbo —**facturación electrónica con Odoo**— y lo que falta es
escribir ese plan, casi al final de la hoja de ruta.

Lo que **no** queda cubierto y sigue en pie: publicar términos y política de
reembolso antes de cobrar. Las políticas de hoy están escritas para una llamada
gratuita, y con la primera llamada confirmada en cero (§1.1) siguen siendo
correctas hasta el día que se active el cobro de la visita técnica.

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
| H1 | ~~Las Colinas figura como 2021 en `site.ts` y 2022 en `projects.ts`~~ — **✅ cerrada.** Se alineó a 2022, que es lo que dice la ficha y el volcado de Wix. El argumento: los otros cuatro reconocimientos copian exacto el año de su proyecto, así que un desvío de uno entre cinco es transcripción, no dato. **Si el fallo del jurado fue de verdad en 2021**, son dos datos distintos y hay que guardarlos por separado |
| H2 | ~~El mismo proyecto con dos nombres~~ — **✅ cerrada.** Era la misma fila que H1: `/estudio` anunciaba «Casa de la cultura Colinas» y aterrizaba en «Casa cultural en el Centro Poblado Las Colinas Jaime Pardo Leal». Ahora sigue el patrón de El Ensueño —nombre corto más lugar— y comparte palabras con la ficha |
| H3 | «Cuatro reconocimientos en concurso público nacional» — ver §1.6. **En conflicto abierto tras la respuesta del 5/9/2026: no se toca hasta ver los documentos del concurso** |
| H4 | ~~Basura del PDF dentro de un dato~~ — **✅ cerrada.** El pie del InDesign se cortó a mano y queda el aviso en la cabecera de `servicios.ts`: si algún día se regenera desde el PDF, hay que volver a cortarlo |
| H5 | ~~El blog arrastra pies de imagen de Wix~~ — **✅ ya estaba resuelta**, y antes de esta pasada: la cabecera de `bienvenidos-a-plano-base.ts` documenta que los dos párrafos huérfanos se retiraron al migrar |
| H6 | «Cinco» y «cuatro» reconocimientos conviven sin explicarse en cinco lugares. Las dos cifras son ciertas —cuatro concursos públicos y uno privado— pero nada lo explica. Se cierra junto con H3 |
| H7 | ~~Dirección pública sin decidir~~ — **cerrada el 5/9/2026: Cali.** Coincide con lo publicado, no hay nada que cambiar (§1.5) |

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

**🔄 La decisión se revirtió el mismo día, y ✅ se hizo lo contrario: se tradujo
todo.** El diagnóstico de arriba describe el sitio de esa mañana y ya no
aplica. El cuerpo editorial dejó de estar escrito a mano dentro de los
componentes: la copia de página vive en `content/paginas.ts` y su inglés en
`content/en/`. Ver §1.11 y §15.1.

La cadena de aviso `traduccionPendiente` sigue sin pintarse, y ahora por otro
motivo: **una ruta sin traducir ya no se indexa**, así que el visitante que la
alcanza llegó por el conmutador de idioma. Pintarla exige llevar el registro de
traducciones al navegador, y se hará cuando el aviso pueda ser distinto en cada
página.

---

## 7. Frente · Producción: las 28 tareas

### Antes de gastar el primer peso en pauta · ~7-8 días

| | Tarea | Esfuerzo |
|---|---|---|
| ✅ | Política de tratamiento de datos + autorización expresa (Ley 1581) — **falta que la lea un abogado** | — |
| ✅ | Banner de consentimiento y arranque condicionado de etiquetas | — |
| ✅ | GA4 + etiqueta de conversión de Google Ads — **falta crear las cuentas y poner las variables** | — |
| ✅ | Corte de dominio: DNS, variables, 301 desde Wix, Search Console | — |
| ✅ | Páginas de error (`error.tsx`, `global-error.tsx`) | — |
| ⬜ | Monitoreo de errores + alerta de lead perdido + uptime | 0,5 d |
| ✅ | Resend verificado ✅ + acuse de recibo al cliente ✅ + confirmación de reserva ✅ | — |
| ✅ | Cabeceras de seguridad (CSP, HSTS, resto) | — |
| ✅ | Open Graph propio por página | — |
| ⬜ | URLs de campaña con `/es/` explícito y UTMs | 3 h |
| 🔴 | Marcar construido vs. concurso en los 23 proyectos | 0,5 d |
| ✅ | ~~Los tres errores de envío del formulario salen siempre en español~~ — cerrado al montar las plantillas: el idioma entró en el esquema y con él las claves | — |

**Sobre los errores del formulario, que salió al hacer la pasada de redacción
y no estaba en esta lista.** Los mensajes de campo —«Escriba su nombre
completo», «Revise el correo»— sí se traducen: viven en `messages/`. Pero los
tres mensajes generales que devuelve el Server Action de `leads.ts` están
escritos en español dentro del código, así que **un visitante de `/en` cuyo
envío falle lee el error en español**, justo en el momento en que ya perdió el
mensaje. Es la misma clase de fuga que los seis rótulos que esta pasada corrigió,
pero se dejó fuera porque cambia el contrato del Server Action —hay que devolver
una clave y traducirla en el formulario, no una frase ya redactada— y eso es
código, no redacción. Es de una hora, y va en el bloque de antes de la pauta
porque el formulario es donde aterriza el dinero.

El 404 de raíz **no se hace y no es un olvido**: el middleware de idioma
redirige cualquier ruta sin prefijo, así que `[locale]/not-found.tsx` la
atiende. Un `not-found` en la raíz se renderizaría sin `<html>` ni `<body>`,
porque el layout raíz de este proyecto es de paso.

### Primer mes · ~9-10 días

Meta CAPI con deduplicación (hoy se pierde 30-50 % de las señales y el costo por
lead del panel es ficción) · ~~Contraste de color~~ ✅ · `/agendar` con reconocimientos
y obra · Datos estructurados que faltan · Ficha de Google Business · Aligerar
`/contacto` · Proyectar datos al cliente · Accesibilidad del formulario ·
Antispam · Cerrar pendientes de negocio · Respaldo de leads · Métricas de
rendimiento.

### Después

Integración continua y tests · `/proyectos` estático · Fechas reales en el
sitemap · Panel de leads · ~~Decidir el destino de `/en`~~ ✅ **decidido y
hecho: se traduce todo** · Teclado en el menú móvil.

### Los hallazgos que más sorprenden

- **Cada página interior se comparte en WhatsApp con el mismo título y la misma
  imagen.** WhatsApp es el canal declarado del estudio. Las fichas de proyecto
  sí lo hacen bien; ninguna otra página. Es el multiplicador más barato.
- **El gris de todo el sitio no pasa accesibilidad.** Contraste 2,71:1 cuando el
  mínimo es 4,5:1, y aparece **65 veces**. La corrección es cambiar dos
  variables de color.
- ~~**En producción no se envía ninguna cabecera de seguridad.** El bloque
  devuelve un array vacío en cuanto el sitio pasa al dominio real.~~ ✅
  **Corregido.** Salen CSP, X-Frame-Options, nosniff, Referrer-Policy,
  Permissions-Policy, COOP y —solo en el dominio real— HSTS a un año.
- **`/contacto` es la página más pesada del sitio** (165 kB de JavaScript) y es
  la página donde se decide todo.
- **Cuando el formulario falla, el visitante inglés lee el error en español.**
  Los mensajes de validación sí están traducidos —el esquema usa claves—, pero
  los tres avisos de fallo general viven escritos a mano en
  `src/app/actions/leads.ts`. Solo se ven cuando algo va mal, que es justo
  cuando el lead está a punto de perderse. Arreglarlo es mover esas tres frases
  a `messages/` y leerlas con `getTranslations` en la Server Action, con la
  frase en español como red de seguridad si la traducción no resolviera:
  media hora, y hay que escribir la copia inglesa. *(Encontrado el 5/9/2026;
  sin hacer.)*

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

| | Dónde | Problema |
|---|---|---|
| ✅ | `content/site.ts` · selector de municipios | Solo Valle. **Un lead de Bogotá —el 43 % del portafolio— solo podía marcarse «Otro».** Ahora es un selector en cascada sobre los 1.103 municipios del DANE, que guarda el código y no el nombre |
| ✅ | `page.tsx` · el `h1` de la home | Decía «estudio de arquitectura en Cali». Ahora dice alcance en Colombia **y** sede en Cali: no compiten, y es un `sr-only`, la cadena con más peso de SEO del dominio |
| ✅ | `puertas.ts` · puerta principal | Decía «Jamundí, Cali, Palmira y el resto del Valle». Ahora, Colombia |
| ✅ | JSON-LD, tres nodos | Las dos páginas de servicio redeclaraban la organización **sin `@id`**: una entidad anónima por página, compitiendo con la del sitio en vez de sumarle. Ahora referencian `/#estudio`, como ya hacían el blog y APBS. La zona de servicio pasa de Cali, Jamundí y Palmira a Colombia. **La sede sigue siendo Cali y eso lo dice `address`, no `areaServed`**: son dos campos y dicen cosas distintas |
| ✅ | `verticales.ts` | Revisadas las siete y traducidas. **Dos se quedan como estaban, y a conciencia**: «casas» dice Valle del Cauca y «vivienda multifamiliar» dice Cali porque es donde está esa obra —dos casas en Jamundí, dos conjuntos en Cali—. Una vertical describe obra construida, y ensancharla sería inventar proyectos |
| ✅ | `estudio/page.tsx` | Ahora abre por el alcance: «con sede en Cali y obra en todo el país» |
| ✅ | `agendar/page.tsx` | Prometía «un rango real de costos para el Valle del Cauca» en la página donde se convierte. Ahora dice «para su municipio», que además es más preciso |

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

#### De quién es la experiencia, y de qué etapa · confirmado 5/9/2026

**«La experiencia es de Gustavo Mejía. Lee bien el dossier al detalle: Edospina
no fue un trabajo en el Caribe.»**

Confirma la regla de encuadre que este documento ya sostenía, y **corrige una
mezcla de dos etapas** que se había colado en `PLAN-BLOG.md` §2:

| Etapa | Años | Dónde | Qué se hizo |
|---|---|---|---|
| **Edospina** | 2007-2012 | **Bogotá** | Diseño de plantas de agua potable y aguas residuales, piscinas y juegos acuáticos |
| **XMC Caribbean** | 2019-2022 | **Bahamas, Bermuda, Turks & Caicos, Miami** | Piscinas de borde infinito, spas, cascadas y sus sistemas de fondo: redes de tubería, plantas de filtración, bombas, cuartos de máquinas |

**Bakers Bay, The Pointe Hotel, LF Wade International Airport y Mary Brickell
Mall son íntegramente de XMC Caribbean.** Edospina no aparece en ninguna
afirmación caribeña.

Lo que las dos etapas sí comparten —y es la credencial que sostiene el pilar de
piscinas— son quince años de diseño de sistemas hidráulicos y cuerpos de agua.
Esa continuidad es real; la geográfica no.

**Y sigue en pie lo de siempre:** toda esa experiencia es de Gustavo, no de Plano
Base. Se enuncia «quien dirige esta línea en el estudio trae quince años en…»,
nunca «Plano Base construyó en Bahamas». El texto publicado hoy en
`content/pilares.ts` y en el artículo de la Ley 1209 ya lo hace bien y **no hay
que tocarlo**.

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

**Actualizado el 5/9/2026 con lo que quedó decidido.** Lo tachado ya no aplica.

```
AHORA (usted)     ~~Verificar planobase.co en Resend~~ HECHO
                  ~~Decidir: precio · Workspace · dirección~~ HECHO
                  Marcar construido en los 23  →  docs/PROYECTOS-CONSTRUIDO.md
                  Ejecutar el trámite B3: credenciales de Google
                  Agendar la sesión de lectura de la copia con Eduardo
                  Buscar los términos de referencia de los cuatro concursos
                  (Wompi: iniciar el papeleo en paralelo, sin bloquear nada)

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
                  Plan de facturación electrónica con Odoo (§1.12)
```

**Lo que cambió de orden:** Wompi sale del camino crítico y la Entrega A puede
empezar ya, porque la primera llamada es gratuita y hay Workspace confirmado.
Las plantillas de correo entran en la semana 1-2 junto con la Entrega A, no
después.

---

## 12. Anexo · Trámites a iniciar ya

**Actualizado el 5/9/2026.**

**El detalle de cada uno está en `docs/TRAMITES-EXTERNOS.md`**: quién lo hace,
qué hay que llevarle, cuánto tarda y qué desbloquea. Esta tabla es el resumen
de una línea; ese documento es el que se abre para ejecutarlos.

Se separó porque son dos lecturas distintas. Este plan lo lee quien va a
escribir código; la lista de trámites la lee quien va a hacer llamadas, y
enterrada dentro de un documento de mil cuatrocientas líneas no la abre nadie.

| Trámite | Estado | Por qué |
|---|---|---|
| Verificar `planobase.co` en Resend | **Hecho, y las plantillas también** | Sin esto no salía ningún correo al cliente |
| Google Workspace | **Ya existe, de pago** | Decidía toda la arquitectura del calendario. Resuelto |
| **Credenciales de Google (proyecto, Calendar API, cuenta de servicio, delegación)** | **Pendiente. Es el trámite que sigue** | Sin esto no hay Entrega A |
| Cuenta de comercio Wompi | **Diferido a propósito.** Crítico, pero después de pautar | El papeleo tarda más que el desarrollo: conviene iniciarlo en paralelo aunque no se use |
| Ficha de Google Business | **Sin confirmar.** Dirección ya fijada: Cali | Ver §1.13 — la ficha no da alcance nacional, pero el tráfico local se suma |
| Registro ante la SIC (RNBD) | **Pendiente, y ahora es lo que falta** | Verificar si aplica a la S.A.S. La política ya está publicada; el registro de la base de datos es un trámite aparte |
| **Revisión jurídica de la política de datos** | **Pendiente. Es lo único que separa a la pauta de encenderse** | El borrador completo está en `content/legal.ts`. No hay que escribirlo, hay que leerlo |
| **Cuentas de GA4 y Google Ads** | Pendiente | El código ya las espera detrás del consentimiento. Son cuatro variables de entorno, documentadas en el README |
| Factura electrónica DIAN | **Ya hay sistema de facturación.** Falta el plan con Odoo | Ver §1.12. Va casi al final |
| **Términos de referencia o actas de los cuatro concursos** | **Pendiente, y es el que desbloquea §1.6** | Es lo único que cierra el conflicto de los reconocimientos |
| Cuenta de un servicio de monitoreo de errores | Pendiente | Una de las tres tareas de §7 que siguen abiertas antes de la pauta |
| Token de la API de conversiones de Meta | Pendiente | Bloque del primer mes. Hoy se pierde entre el 30 y el 50 % de las señales |

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

---

## 14. Los 34 artículos que faltan por escribir

Estado al cierre de la sesión del 5 de septiembre de 2026: **43 de 75
publicados, y los 43 en español e inglés.** Faltan estos 34.

**Eran 32 y la cuenta estaba mal por dos motivos distintos, los dos corregidos
el 5/9 por la tarde.**

El primero: **dos artículos se habían caído entre dos listas.** Están en el
orden de publicación de `PLAN-BLOG.md` §6 y no estaban aquí, y uno de los dos
es el número 1 por relación valor/esfuerzo de toda la investigación de mercado.
Son los que abren esta sección.

El segundo: esta sección y el estado de arriba decían **«diez bloqueados»** y
la propia frase los enumeraba como cinco casos propios más once del Caribe, que
son dieciséis. Con la cuenta en limpio: **17 escribibles hoy y 17 bloqueados**,
mitad y mitad.

### Los dos que se habían caído entre listas (2)

| | Artículo |
|---|---|
| ✅ 74 | ~~**Mi edificio quedó en amarillo: qué significa y qué sigue**~~ — **escrito el 5/9/2026**, en español e inglés. Y corrigió tres cosas que este plan daba por buenas: la circular, las cifras de Cali y el número de colores. Ver el §0 |
| 75 | **Qué cambió en la NTC 4595:2025** |

**El 74 es el número 1 del orden de publicación**, y por un motivo que caduca:
demanda masiva hoy y competencia local **nula** tras el sismo del 10 de agosto.
El semáforo de habitabilidad, las tres fases, quién firma cada una y el
procedimiento de reporte de Cali. Es la ciudad donde está la oficina.

El 75 tiene la SERP verificadamente vacía y es la prueba de competencia más
directa ante el público institucional. Comparte materia con el 25 —«Cómo se
diseña un colegio en Colombia»— pero no es el mismo artículo: aquel explica la
norma, este explica **qué cambió** en su edición de 2025. Aplica el mismo aviso
que el 25: la NTC 4595 solo se puede citar por su adopción ministerial.

La cadena de tandas que produjo los últimos 21 sigue siendo la forma de
escribirlos: un agente por tanda, contexto fresco, verificación contra fuente
primaria, y lo que no se pueda verificar se declara dentro del artículo en vez
de rellenarse. El contrato completo —incluido el bilingüe— está en el
comentario de cabecera de `content/blog/en/index.ts`, y **desde ahora cada
artículo nuevo se escribe en los dos idiomas en la misma pasada**: traducirlos
después obliga a releer la investigación entera.

### Obra pública (2)

| | Artículo |
|---|---|
| 25 | Cómo se diseña un colegio en Colombia (NTC 4595 y 4596) |
| 28 | Cómo se estructuran los pliegos de un equipamiento público |

**Aviso**: la NTC 4595 solo se puede citar por su adopción ministerial. El
catálogo de ICONTEC no es consultable públicamente, y ya está establecido en
este proyecto que **no se cita una NTC por número sin haberla leído**.

### Casos propios (5)

| | Artículo |
|---|---|
| 29 | Alcaldía Local de Teusaquillo: cómo se gana un concurso |
| 30 | Pradera El Volcán: un colegio pensado como pieza de barrio |
| 31 | Casa de la Cultura Las Colinas, Guaviare |
| 32 | CEFE Tunal |
| 33 | Casa Aguilar: el método explicado al cliente particular |

**Los cinco siguen bloqueados por la decisión 0.6**: hasta que no se marque en
`docs/PROYECTOS-CONSTRUIDO.md` cuáles de los 23 proyectos están construidos y
cuáles son propuesta de concurso, un artículo de caso no puede decir qué es lo
que cuenta. El 29 lleva además su propio bloqueo: tendría que declarar el
ámbito del concurso, que es el dato en disputa de §1.6.

Es media hora de trabajo de Gustavo y libera cinco artículos.

### Casa y casa campestre (4)

| | Artículo |
|---|---|
| 42 | Aguas residuales sin alcantarillado |
| 46 | Cuánto cuesta ampliar un segundo piso, y si la casa lo aguanta |
| 47 | Cubiertas: barro, termoacústica, verde o placa |
| 49 | Casa de descanso o renta corta: qué cambia en el diseño |

El 42 quedó a medias en una tanda anterior: la Resolución 0330 de 2017 es un
escaneo sin capa de texto y no se pudo leer. Si sigue igual, el artículo se
escribe declarándolo, como se hizo con el del agua.

### Piscinas y jacuzzis (10)

| | Artículo |
|---|---|
| 51 | Cuánto cuesta una piscina en Colombia, y su costo mensual real |
| 52 | Concreto, fibra de vidrio o prefabricada |
| 53 | Piscina de borde infinito: qué exige y por qué cuesta el doble |
| 54 | El cuarto de máquinas: la partida que más se subestima |
| 55 | Calentar la piscina: solar, bomba de calor o gas |
| 56 | Sal o cloro: el mito del agua salada y el costo real |
| 57 | Piscina en terraza: carga estructural e impermeabilización |
| 60 | Jacuzzi de obra o portátil: carga, desagüe y requisitos eléctricos |
| 61 | Piscina y jacuzzi juntos: compartir equipos, y cuándo sale mal |
| 62 | Mantenimiento de piscina: el costo mensual real |

**Es el pilar con la credencial que ningún competidor tiene**: quince años
diseñando sistemas hidráulicos y construyendo piscinas de borde infinito. Regla
de encuadre que no cambia: **la experiencia es de la persona, no del portafolio
del estudio.**

Vocabulario ya fijado en `ley-1209-piscinas-copropiedad` y
`necesito-licencia-para-construir-una-piscina`; los términos que faltan por
fijar son antivórtice, borde infinito, skimmer y rebosadero.

### Caribe insular (11)

| | Artículo |
|---|---|
| 63 | Construir en una isla: por qué todo cuesta tres veces más |
| 64 | Diseño resistente a huracanes: cargas, vidrio de impacto, anclaje |
| 65 | Bermuda y sus cubiertas blancas: el edificio como captación de agua |
| 66 | Agua dulce donde no hay ríos: cisternas y ósmosis inversa |
| 67 | La sal se lo come todo: materiales y el costo de equivocarse |
| 68 | Cimentar sobre roca coralina y suelo kárstico |
| 69 | Piedra coralina como material de proyecto |
| 70 | Retiros de la línea de más alta marea y zona costera |
| 71 | Fuera de red por obligación: solar, almacenamiento y agua |
| 72 | Cuánto cuesta el m² en Bahamas, Bermuda y Turks & Caicos |
| 73 | Lo que el Caribe insular le enseña a Barú, San Andrés y Santa Marta |

Los once **también dependen de la decisión 0.6**, y de la separación de etapas
de la sección «Correcciones de atribución»: XMC Caribbean (2019-2022) no es
Edospina (Bogotá, 2007-2012), y solo la primera es caribeña.

Es el único contenido del plan **sin competencia en el país**, y es la razón por
la que el sitio se tradujo: un cliente de Bahamas no lee español.

### Lo que hay que saber antes de retomar

1. **El presupuesto de búsquedas web se agotó** en la sesión que escribió los
   últimos. Ya está subido a 1.000 en `~/.claude/settings.json`, pero **solo
   surte efecto en una sesión nueva**. Sin él, un agente solo puede investigar
   con `curl` contra fuentes que ya conoce.
2. **Nueve errores del español salieron de traducirlo**, y ninguno lo podía
   cazar una guarda del build porque ninguna afirmación era falsa por sí sola:
   lo que estaba mal era la relación entre piezas. La misma cita de ley
   recortada en cuatro artículos y mal parafraseada en un quinto; cinco
   llamando gratis a un documento de 8,34 UVT; una tabla contradiciendo su
   propia nota y pidiéndole a una casa un dispositivo que la ley no le exige.
   **El patrón: un dato que se repite entre artículos se copia, y al copiarse
   deja de verificarse.** Cuando se escriban estos 32, conviene auditar cada
   cifra repetida contra la pieza que la introdujo.
3. **Escribir bilingüe desde el origen no es opcional.** Está en el contrato y
   lo comprueba `scripts/check-traducciones.ts`.

---

## 15. Lo que se construyó y no estaba en este plan

Este documento se escribió antes de tres frentes que hoy existen y están en
producción. Quedan aquí para que quien lo lea no los busque en vano.

### 15.1 · La arquitectura bilingüe ✅

El plan solo contemplaba «decidir el destino de `/en`». Lo que hay ahora es un
mecanismo completo, y tiene tres piezas que conviene entender antes de tocarlo:

**Las traducciones viven fuera del contenido, en `content/en/`.** No es una
preferencia: los dos archivos de contenido más grandes son **generados** —
`content/projects.ts` por `pnpm media` y `content/servicios.ts` desde el PDF del
portafolio—, así que un campo `{ es, en }` dentro de ellos obligaría a cambiar
los dos generadores. La superposición se indexa por el identificador estable que
ya existe y una clave ausente cae al español.

**Un artículo inglés es una superposición, no un segundo artículo.** No
redeclara fecha, fuentes, pilar, etiquetas ni puerta. Si lo hiciera,
`check-fechas.ts` marcaría 43 slugs duplicados y rompería el build; y
`content/blog/hechos.ts`, que casa patrones **en español**, dejaría de cubrir la
mitad del corpus sin que nadie se enterara.

**La indexación es por ruta y por denegación.** `src/lib/i18n/publicacion.ts`
responde si una ruta está traducida, y esa única respuesta la consumen el
`robots` de cada página, el `hreflang`, el sitemap y la guarda del build — por
eso los cuatro no pueden contradecirse. El layout deniega por defecto: una
página que se olvide de declararse queda sin indexar, que es el fallo barato.

**El contrato de traducción está escrito entero** en el comentario de cabecera
de `content/blog/en/index.ts`: ortografía británica, separadores decimales, el
espacio del `%`, los enlaces sin prefijo de idioma, los diagramas con geometría
compartida, y qué no se traduce nunca —normas, instituciones y cifras—.

### 15.2 · APBS y la calculadora de expensas ✅

Una sección de herramientas que hacen el cálculo en vez de explicarlo. La
primera es la de **expensas de curaduría**, para los 1.103 municipios del país.

Dos cosas que costaron y que no hay que deshacer:

- **El cruce va por código DANE, nunca por nombre.** Hay municipios homónimos en
  departamentos distintos —Puerto Colombia está en Atlántico y en Guainía, a
  1.300 km— y el decreto de curadurías escribe «Cali» donde el DANE escribe
  «Santiago de Cali». Cruzar por nombre cobraba en el municipio equivocado.
- **Los datos caducan solos, en tres capas**: la herramienta se degrada y lo
  dice, el build falla con un dato vencido, y hay un aviso anticipado. Una
  calculadora con la UVT del año pasado no se rompe: miente.

### 15.3 · El rediseño de las páginas de proyecto ✅

En escritorio sobraba el 44 % de la pantalla y el 62 % de las fotos salían a
1.520 px de ancho. La memoria pasa a dos columnas cuando caben dos de 30 rem, la
galería a filas justificadas que alternan dos y tres piezas, y el visor tiene
zoom y desplazamiento con rueda, pellizco, doble clic y arrastre.

### 15.4 · Nueve correcciones de contenido, y el patrón que las produjo ✅

Traducir obligó a leer los 43 artículos con una atención que ninguna otra tarea
impone, y salieron nueve errores que llevaban meses publicados:

- La cita del artículo 44 de la Ley 160 **recortada en cuatro artículos** —
  empezaba después de «Salvo las excepciones que se señalan en el artículo
  siguiente», lo que hacía parecer absoluta una prohibición con cuatro
  excepciones— y mal parafraseada en un quinto.
- **Cinco artículos llamando gratis** al concepto de norma urbanística, que
  cuesta 8,34 UVT por escrito. Uno se contradecía consigo mismo.
- Una tabla que **pedía a una casa un dispositivo que la Ley 1209 no le exige**,
  contradiciendo su propia nota dos bloques más abajo.
- Una palabra caída de una cita de decreto, justo la que la nota mandaba mirar.
- Tres cuentas distintas de una misma lista, un pie que decía «a escala» sin
  estarlo, y dos aritméticas.

**El patrón importa más que los errores.** Ninguna guarda del build podía
cazarlos, porque **ninguna afirmación era falsa por sí sola**: lo que estaba mal
era la relación entre piezas. Un dato que se repite entre artículos se copia, y
al copiarse deja de verificarse.

Cuando se escriban los 32 que faltan, conviene auditar cada cifra repetida
contra la pieza que la introdujo.

### 15.5 · Las cuatro guardas del build

`pnpm build` no compila si alguna falla, y esa es la razón de que existan:

| Guarda | Qué impide |
|---|---|
| `check-redirects` | Que un 301 de Wix apunte a una ruta que ya no existe |
| `check-fechas` | Que un artículo fechado hacia atrás cite una fuente del futuro |
| `check-traducciones` | Que una traducción exista y esté mal: cuerpo truncado, tabla sin columnas, diagrama sin traducir, español filtrado. **No rompe por lo que falta**, solo por lo que está mal |
| `check-vigencia` | Que se despliegue la calculadora con un dato caduco |
