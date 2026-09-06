# Trámites externos · Plano Base Web

Todo lo que el repositorio **no puede resolver solo**: lo que depende de un
abogado, un contador, un banco, Google, Meta, una redacción de arquitectura o
una entidad pública.

Última actualización: **5 de septiembre de 2026.**

Existe porque estas tareas se pierden. Una tarea de código tiene un archivo
donde vive y un build que se pone rojo si falta; un trámite no tiene ninguna de
las dos cosas, y por eso el proyecto puede quedarse parado semanas esperando
algo que nadie recordaba que había que pedir. El resumen en tabla vive en el
§12 del plan maestro; aquí está el detalle de cada uno.

**Cómo leer el estado.** 🔴 bloquea algo que ya está construido y esperando ·
🟡 hace falta pronto pero todavía no bloquea · ⬜ se puede diferir sin costo ·
✅ hecho.

---

## Lo que bloquea encender la pauta

Estos tres son los que separan al sitio de recibir el primer peso de campaña.
Todo el código está hecho.

### 1. 🔴 Revisión jurídica de la política de tratamiento de datos

**Quién:** un abogado. **Cuánto:** una lectura, no una redacción.

El borrador completo está escrito y publicado en la rama, en
`content/legal.ts` (español) y `content/en/legal.ts` (inglés). Se lee en el
sitio en `/politica-de-datos`.

Está redactado contra el texto de la norma y contiene los seis contenidos que
exige el artículo 2.2.2.25.3.1 del Decreto 1074 de 2015 —que compiló el
artículo 13 del Decreto 1377 de 2013—: quién responde, qué se trata y para qué,
los derechos del titular del artículo 8 de la Ley 1581 de 2012, quién atiende
las peticiones, el procedimiento con los plazos de los artículos 14 y 15, y la
fecha de vigencia.

**Lo que hay que llevarle al abogado, porque el repositorio no lo puede
decidir:**

1. **El NIT de Plano Base Arquitectos S.A.S.** No está en el repositorio y no
   se inventó. La norma no lo exige literalmente —pide nombre o razón social,
   domicilio, dirección, correo y teléfono— pero lo habitual es incluirlo.
2. **El período de conservación de los datos.** Hoy el borrador dice «mientras
   dure la relación y, después, el tiempo necesario para obligaciones legales,
   contables y tributarias». Es defendible, pero es una decisión del estudio,
   no un dato técnico.
3. **Confirmar la lista de proveedores** que tratan datos por cuenta del
   estudio y si alguno los procesa fuera de Colombia. Hoy el texto lo dice en
   general —alojamiento, base de datos y envío de correo— sin nombrarlos.

**Qué desbloquea:** la pauta. Es lo único de esta lista que la bloquea de
verdad.

**Por qué no basta con lo que hay:** una política de datos responde ante la
Superintendencia de Industria y Comercio. Un archivo de TypeScript no firma eso.

---

### 2. 🟡 Cuenta de Google Analytics 4

**Quién:** Gustavo. **Cuánto:** minutos.

Crear la propiedad y copiar el identificador de medición, con la forma
`G-XXXXXXXXXX`.

**Qué hay que hacer con él:** ponerlo en Vercel como `NEXT_PUBLIC_GA4_ID`, en
los tres entornos. Está documentado en el README.

**El código ya lo espera** y no hay que tocarlo. Mientras la variable no
exista, el sitio no monta analítica y **tampoco pregunta por el
consentimiento**: pedir permiso para algo que no se va a hacer recoge un dato
que no hace falta.

**Aviso que no es de detalle:** las variables `NEXT_PUBLIC_*` se congelan en el
momento del build. Añadirla exige **volver a desplegar**; no basta con
guardarla en Vercel.

---

### 3. 🟡 Cuenta de Google Ads y acción de conversión

**Quién:** Gustavo. **Cuánto:** minutos, una vez exista la cuenta.

Hacen falta **dos** valores, y se generan en sitios distintos de la interfaz:

1. **El identificador de la cuenta**, con la forma `AW-XXXXXXXXX` →
   `NEXT_PUBLIC_GOOGLE_ADS_ID`.
2. **La etiqueta de la acción de conversión** que corresponda al lead →
   `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL`.

**Las dos, o ninguna sirve.** Google las exige juntas —`AW-123/AbC_dEf`— y sin
la etiqueta, Ads recibe la conversión, no sabe clasificarla y no la cuenta. Un
sitio que parece medir y no mide es peor que uno que no mide: se toman
decisiones de presupuesto sobre una cifra que no existe.

La conversión que el sitio envía es **solo el lead**, que es la conversión
declarada del plan de campaña. Mandar todo como conversión desdibuja justo la
cifra por la que se decide qué anuncio se apaga.

---

## Lo que bloquea el sistema de reservas

### 4. 🔴 Credenciales de Google para el calendario

**Quién:** Gustavo, en Google Cloud. **Cuánto:** una sesión.

**Ya está resuelto lo que decidía la arquitectura:** `proyectos@planobase.co`
está en Google Workspace de pago, confirmado el 5/9/2026. Eso permite la vía
buena —cuenta de servicio con delegación de dominio— y elimina el modo de falla
más peligroso del proyecto: con OAuth sobre un Gmail normal, Google caduca el
token cada siete días y **las reservas se seguirían creando, pero sin enlace de
Meet**. Un fallo silencioso sobre tráfico pagado.

Los pasos, en orden:

1. Crear un proyecto en Google Cloud.
2. Habilitar la **Google Calendar API** en ese proyecto.
3. Crear una **cuenta de servicio** y descargar su clave.
4. Autorizar la **delegación de dominio** en la consola de Workspace, con **un
   solo scope**: el de calendario. No más.
5. Crear un calendario nuevo, «Asesorías Plano Base», y compartirlo con la
   cuenta de servicio.

**Qué desbloquea:** la Entrega A entera —calendario, Google Meet y el correo de
confirmación—. La plantilla de ese correo, con el `.ics` adjunto, **ya está
escrita y probada**: no espera al calendario, lo espera él a ella.

**Costo adicional: $0.** No hay que contratar nada.

**Y una cosa que hay que hacer el mismo día, o el cliente recibe dos correos:**
desactivar las notificaciones automáticas de Google Calendar para ese
calendario. Si salen las dos, la que llega primero es la de Google, con su
remitente y su maqueta, y la reserva parece hecha por Google con el estudio de
invitado.

---

## Lo que bloquea afirmaciones ya publicadas

### 5. 🔴 Términos de referencia o actas de los cuatro concursos

**Quién:** Gustavo y Eduardo, ante las entidades convocantes o la Sociedad
Colombiana de Arquitectos.

El sitio afirma «cuatro reconocimientos en **concurso público nacional**». De
los cuatro concursos públicos, **dos tienen respaldo documental de ser
nacionales en el propio sitio** —El Ensueño y Pradera El Volcán— y dos no lo
tienen. Que no lo tengan no prueba que no lo sean: prueba que el subtítulo se
escribió sin ese dato.

**Basta un documento por concurso**, y con uno solo por proyecto:

1. **Los términos de referencia o el pliego de la convocatoria** — es donde se
   declara el ámbito y quién podía presentarse. Es el que zanja la discusión.
2. **El acta de fallo del jurado**, que suele repetir el nombre completo y
   oficial del concurso.
3. Alternativamente, **la resolución o el aviso de convocatoria** de la
   entidad, o la ficha del concurso en la SCA si lo arbitró.

Los dos que faltan son **Teusaquillo** —su subtítulo dice «concurso público
arquitectónico», sin ámbito— y **Las Colinas**, que dice «concurso de ideas»,
donde la tensión es distinta: un concurso de ideas y uno de anteproyecto no son
lo mismo, aunque los dos puedan ser de convocatoria nacional.

**Qué desbloquea:** la contradicción H3/H6 del §6, el artículo 29 del blog, y
poder reescribir la afirmación **una sola vez** con el nombre oficial de cada
concurso — que además convence más que cualquier adjetivo.

**Mientras tanto el texto no se toca.** Ni se sube la afirmación ni se baja. Si
hiciera falta encender la pauta antes de encontrar los documentos, la salida
honesta y sin costo es **«cuatro reconocimientos en concurso público»**, sin
adjetivo: es cierta bajo las dos versiones de los hechos.

---

## Lo que hay que verificar, no necesariamente hacer

### 6. 🟡 Registro de la base de datos ante la SIC (RNBD)

**Quién:** el contador, o el mismo abogado del punto 1.

**La pregunta no es «cómo se registra» sino «si aplica».** La obligación de
inscribir bases de datos en el Registro Nacional de Bases de Datos depende del
tamaño de activos de la sociedad y del umbral vigente que fija la
Superintendencia por circular. **Ese umbral hay que consultarlo al día**, no
darlo por sabido: ha cambiado varias veces desde que existe el registro.

**Es un trámite distinto de tener la política publicada.** Se pueden cumplir
las dos cosas por separado, y tener la política no exime del registro si
aplica.

Si aplica, lo que se registra es la base de leads: la tabla `leads` de
Supabase, con su finalidad y su responsable.

---

## Lo que está diferido a propósito

### 7. ⬜ Cuenta de comercio Wompi

**Quién:** Gustavo, con el contador. **Cuánto:** el papeleo tarda más que el
código.

Hace falta persona jurídica, RUT y cuenta bancaria a nombre de Plano Base
Arquitectos S.A.S.

**Está diferido por decisión de orden, no por olvido:** primero se pauta.
Y es viable diferirlo porque la primera llamada es gratuita, y un embudo cuyo
primer peldaño no cuesta nada **no necesita pasarela para cerrar**.

**Pero conviene arrancarlo en paralelo igual.** No cuesta nada tenerlo listo y
esperando, y si se inicia el día que se necesite la Entrega B, la Entrega B
espera al banco. Hay ambiente de pruebas para avanzar el código mientras tanto.

---

### 8. ⬜ Ficha de Google Business

**Quién:** Gustavo.

**La dirección ya está fijada y no hay que decidir nada más:** Calle 18 #
61-29, Cali. Es lo que el sitio ya publica en el JSON-LD, el pie, `/contacto`,
el dossier y las 23 hojas de proyecto.

**El NAP —nombre, dirección, teléfono— tiene que coincidir carácter por
carácter** con lo que publica el sitio. Si se crea la ficha y después se cambia
la dirección, se resetea la antigüedad de la ficha.

**Y conviene no esperar de ella lo que no da.** Una ficha da proximidad local,
no alcance nacional; el alcance nacional se gana por contenido. El sitio ya
declara su zona de servicio como Colombia y su sede como Cali, que son dos
campos distintos y dicen cosas distintas.

**Lo que sí está prohibido:** abrir ficha con una oficina virtual, o declarar
`LocalBusiness` en otra ciudad sin oficina física atendida. Es causal de
suspensión.

---

### 9. 🟡 Publicar en ArchDaily o Plataforma Arquitectura

**Quién:** Gustavo y Eduardo, enviando material a la redacción.

**El estudio no tiene ni una sola publicación**, y buscar «Plano Base
arquitectos Colombia» devuelve Plan:b, de Medellín. Es el enlace de mayor
autoridad temática del sector, y es la clase de enlace que no caduca.

Está aprobado desde el 5/9/2026 como pieza P3 de `PLAN-BLOG.md`, y el plan lo
describe como **esfuerzo bajo y retorno alto y duradero**. Se anota aquí porque
depende de que una redacción externa acepte, que es exactamente lo que hace que
un trámite se pierda entre las tareas de código.

**Qué hay que mandar:** un proyecto con memoria, planimetría y fotografía o
render de calidad. El portafolio ya tiene las 24 memorias escritas y las
imágenes preparadas, así que el material existe; lo que falta es elegir el
proyecto y enviarlo.

**Conviene esperar a la decisión 1.9.** Mandar a publicar un proyecto sin tener
claro si está construido o si es una propuesta de concurso es arriesgar
exactamente la credencial que se busca ganar.

---

### 10. ⬜ Factura electrónica · plan con Odoo

**Quién:** el contador.

Ya hay sistema de facturación. Lo que falta es el plan de migración a Odoo. Va
casi al final del cronograma y no bloquea nada de lo anterior.

---

## Lo que va a hacer falta y todavía no se ha pedido

Esto no está en el §12 del plan y conviene anotarlo antes de que sorprenda:

| | Qué | Cuándo hace falta |
|---|---|---|
| ⬜ | **Cuenta de un servicio de monitoreo de errores** —y su alerta de lead perdido— | Es una de las tres tareas de §7 que siguen abiertas antes de la pauta |
| ⬜ | **Token de acceso de Meta para la API de conversiones** | Bloque del primer mes de §7. Hoy se pierde entre el 30 y el 50 % de las señales, así que el costo por lead del panel es ficción |

---

## Lo que no es externo, pero tampoco lo resuelve el código

Se anota aquí para que la lista esté completa. El detalle está en el §1 del
plan maestro.

| | Qué | A qué bloquea |
|---|---|---|
| 🔴 | **Marcar cuáles de los 23 proyectos están construidos** · `docs/PROYECTOS-CONSTRUIDO.md` | Diez artículos, la página de credenciales y buena parte de §8. Media hora sobre una mesa con Eduardo, y es lo que más desbloquea de todo el proyecto |
| 🔴 | **La sesión de lectura de la copia con Eduardo** | `/agendar` entera está sin aprobar, y es la página que va a recibir el dinero. **Conviene hacerla después de la pasada de redacción, no antes**: aprobar una vez, sobre el texto final |
