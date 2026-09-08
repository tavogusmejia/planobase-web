# Para retomar

Pegue esto al abrir la siguiente sesión. Está escrito para que quien lo lea no
tenga que reconstruir el contexto ni preguntar lo que ya está decidido.

Actualizado: **7 de septiembre de 2026**.

---

## El prompt

> Retomamos el sitio de Plano Base. Antes de nada: **lee
> `docs/MASTER-PLAN-V2.md` entero** — es el tablero, dice qué está hecho, qué
> espera una decisión mía y las reglas que salieron de errores que ya costaron
> trabajo. Lee también `CLAUDE.md`.
>
> **Mi carpeta está al día y no hay nada sin publicar**: `main`, y todo lo del 6
> y el 7 de septiembre está en producción y verificado ahí. No hace falta ningún
> `git pull` ni aplicar ninguna migración.
>
> Empieza por decirme qué se puede hacer sin input mío y qué está esperándome, y
> vamos una por una. No quiero explicaciones largas salvo que necesites que
> decida algo.

---

## El estado, en tres frases

**Todo está publicado.** `main` en `b9629d7`, la carpeta principal en `main` y
limpia, y las dos migraciones de Supabase aplicadas — la de reservas el 6/9 y la
de los dos tipos de cita el 7/9, esta última pegada a mano por Gustavo. **No hay
lote esperando publicación.**

**Lo último que salió, la noche del 7/9:** la sección de equipo pasa de dos
personas a siete, cada retrato cuenta quién es al pasar el cursor, el procesador
de imágenes convierte a gris de verdad, y el botón de agendar dejó de prometer
«la primera llamada» en las páginas donde se cobra.

**El calendario está terminado salvo un trámite.** El código de Google Calendar
está escrito, probado y desplegado; solo espera las credenciales de X-02. Sin
ellas el sitio se comporta exactamente como si no existieran, y eso es
deliberado.

**Quedan dos worktrees** en `.claude/worktrees/`, los dos ya fusionados a `main`
y por tanto prescindibles. Están ignorados por git y por eslint, así que no
molestan; se borran con `git worktree remove` cuando se quiera.

---

## Lo que salió el 6 y el 7 de septiembre

**El calendario pasó de un servicio a dos.** «Primera llamada» —quince minutos,
sin costo, la que recibe la pauta— y «Asesoría técnica» —una hora, **$50.000**,
que se cobra a mano por WhatsApp mientras no exista Wompi—. Conviven sobre el
mismo calendario sin pisarse: la garantía anti-solape dejó de ser un índice
sobre el instante de inicio y pasó a ser una restricción de exclusión sobre el
rango, porque con dos duraciones lo primero deja de valer.

**El calendario ve la agenda real de Gustavo**, o la verá en cuanto entren las
credenciales: lee la disponibilidad por `freeBusy` y crea la cita con su enlace
de Meet, sin una sola dependencia nueva —`node:crypto` firma el RS256—.

**Se arreglaron dos defectos que llevaban vivos en producción**: el sitio
ofrecía citas en festivo, y un error de validación en `/agendar` salía como
cadena interna en pantalla.

**«APBS» pasó a llamarse «Apps»**, a petición del socio de Gustavo, porque la
sigla no se entendía y en ninguna parte se explicaba. Solo cambió el texto: la
URL sigue siendo `/apbs`.

**Se retiraron dos renders flojos** de Villas del Progreso. La galería queda en
diez y los originales están apartados, no borrados, en `_retirados/`.

---

## Lo que está esperando a Gustavo

| | La pregunta o el trámite |
|---|---|
| **X-02** | **Lo más rentable de todo**: una sesión en Google Cloud enciende un calendario que ya está construido. **Ojo, son DOS scopes** — `calendar.events` **y** `calendar.readonly`; el documento decía uno y estaba mal. Pasos en `docs/TRAMITES-EXTERNOS.md` §X-02 |
| **G-02** | La lectura de copia con Eduardo. `/agendar` sigue sin aprobar, y ahora incluye las condiciones nuevas de la asesoría de pago, marcadas `PENDIENTE DE APROBACIÓN` en `content/site.ts` |
| **X-01** | Que un abogado lea `content/legal.ts`. Del lado del estudio ya no falta nada |
| **X-04 · X-05** | GA4 y Google Ads. **Son dos etiquetas de conversión, no una**: lead y reserva. Sin ellas, agendar no llega a Google |
| **D-08** | ¿Quién entra al panel de leads y cómo se autentica? |
| **D-11** | ¿A dónde va el respaldo de leads si fallan Supabase y el correo? |
| **D-19** | «Proyectar datos al cliente» sigue sin definir |
| **D-16** | La línea de `/estudio` con el alcance nacional. Es copia y la aprueba él |
| **G-08** | Las ocho imágenes de Teusaquillo en el bucket. Aplazado a propósito |

---

## Lo que se puede hacer sin preguntar nada

**Los quince artículos del blog**: C-08, C-09, C-11 y C-12 —casos propios— y
C-13 a C-23 —Caribe insular—. Son los dos pilares vacíos y no bloquean con nada.

**Al fecharlos rige la R-17**: dos artículos por mes como máximo, nunca dos el
mismo día. Quedan plazas libres y meses vacíos entre 2022 y 2024, que es justo
donde encajan.

**Y el hueco editorial que sigue sin decidirse:** de los cuatro artículos de
casos propios que quedan **ninguno trata una obra construida** —tres concursos y
una propuesta— y de las seis obras que sí lo están no hay ninguno planeado. El
plan se escribió cuando el sitio creía tener una sola obra construida.

**La mitad de D-16 que no es copia**: que `/experiencia` cuente departamentos
además de ciudades. Es un cálculo.

---

## Cinco cosas que van a morder si no se saben

**1 · Una imagen cambiada se sigue viendo vieja.** Es D-25 y costó una confusión
el 7/9. El optimizador sirve las imágenes con un año de caché, así que si una
cambia de contenido sin cambiar de nombre, quien ya la tenía sigue viendo la
anterior. **Al tocar cualquier imagen, comprobar en ventana de incógnito** — en
la normal parece que el cambio no salió. El arreglo de raíz está aplazado a
propósito.

**1 bis · Los retratos del equipo se llaman como la persona.** `Eduardo Mejía
Martínez.jpeg`, con tildes y todo: de ahí salen el slug y el texto alternativo, y
por eso añadir a alguien ya no obliga a tocar el código. Dos consecuencias que
conviene tener presentes: un archivo mal nombrado se salta con aviso en vez de
publicarse, y **cualquier foto que entre se convierte a gris al procesarla** —las
tres que llegaron el 7/9 venían a color.

**2 · Los medios no se tocan desde un worktree.** `assets-originales/` y
`public/media/` están en `.gitignore` y no existen ahí; correr `pnpm media`
desde uno **vacía las 23 galerías y despublica los 22 proyectos**. Y el
generador empareja cada archivo **por su posición en el array**, no por su
nombre: quitar entradas del JSON sin renumerar los archivos borra las
equivocadas.

**3 · Las fechas del blog no son libres.** Rige la R-17, y la guarda
`check-fechas` impide que un artículo se feche antes de la fuente más reciente
que cita.

**4 · La CI se puede poner roja sin que nadie toque el código.**
`check-vigencia` depende de la fecha: el día que venza un dato de Apps, las PR
se paran. Es lo correcto, pero no confundirlo con una regresión.

**5 · Wompi no publica changelog.** Cuando se reabra D-18 —criterio: seis
asesorías vendidas a mano en dos meses— hay que saber que despacha cambios que
rompen integraciones sin avisar, y que **la CSP actual bloquearía su checkout en
silencio** porque lleva `form-action 'self'`.

---

## Una regla nueva que salió de septiembre

**La pauta apunta a la Primera llamada, nunca a la asesoría de pago.** El 4/9 se
mató un producto idéntico —una hora a $50.000— porque el anuncio decía «sin
costo» y el lead aterrizaba en una pasarela: no convertía, y encima quemaba el
aprendizaje del algoritmo con clics que nunca cerraban. Al convivir las dos, ese
modo de falla no vuelve; un anuncio que lleve directo al cobro lo repite.
