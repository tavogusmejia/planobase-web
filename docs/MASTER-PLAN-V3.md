# Master Plan v3 · Plano Base Web

Tablero de trabajo. **Solo lo que falta**, una tarea por línea.
Actualizado: **7 de septiembre de 2026**

Lo ya hecho y por qué se decidió como se decidió está en
`docs/archivo/MASTER-PLAN-V2.md`, que se archivó al quedarse en 659 líneas de
las cuales la mayoría celebraban trabajo terminado. Antes de reabrir algo que
parezca olvidado, mirar allí: casi siempre está aplazado a propósito.

---

## Cómo se lee

**Quién puede hacerla:** **G** Gustavo · **X** un tercero · **D** desarrollo ·
**C** contenido.

**Estado:** 🔴 bloquea a otras cosas · 🟡 lo siguiente · ⬜ pendiente sin prisa.

---

## Estado del sitio

`main` en `1781135`, todo publicado y verificado en producción. Las dos
migraciones de Supabase aplicadas. No hay lote esperando.

**62 de 77 artículos publicados**, los 62 en español e inglés. El equipo son
siete. El calendario está construido y solo espera X-02.

---

## G · Gustavo

| | | Tarea |
|---|---|---|
| G-02 | 🔴 | Lectura de copia con Eduardo. `/agendar` entera sigue sin aprobar, y ahora incluye las condiciones de la asesoría de pago. **Se suma el titular de equipo en `/estudio`**: decía «Un arquitecto y un gerente de proyectos» y hubo que reescribirlo al pasar a siete |
| G-06 | ⬜ | Términos de referencia del concurso de **Las Colinas**. Aplazado y sin coste. Preguntar primero a Eduardo; si no, SCA o SECOP |
| G-08 | ⬜ | Borrar del bucket las 8 imágenes de Teusaquillo: `pnpm media:retirar alcaldia-local-de-teusaquillo`, y otra vez con `--borrar`. **Aplazado a propósito** |

---

## X · Terceros

Qué llevar, cuánto tarda y a quién, en `docs/TRAMITES-EXTERNOS.md`.

| | | Trámite |
|---|---|---|
| X-02 | 🟡 | **Credenciales de Google.** Lo más rentable de todo: una sesión enciende un calendario ya construido. **Son DOS scopes**, `calendar.events` y `calendar.readonly` |
| X-01 | 🔴 | Que un abogado lea `content/legal.ts`. Del lado del estudio no falta nada |
| X-04 | 🟡 | Propiedad de GA4 → `NEXT_PUBLIC_GA4_ID` |
| X-05 | 🟡 | Cuenta de Google Ads y **sus dos etiquetas**: `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` y `..._SCHEDULE_LABEL` |
| X-06 | 🟡 | Verificar si aplica el registro RNBD ante la SIC |
| X-09 | 🟡 | Publicar un proyecto en ArchDaily o Plataforma Arquitectura. Hay seis obras construidas que ofrecer |
| X-03 | ⬜ | Términos de referencia o actas de los 3 concursos públicos que quedan |
| X-07 | ⬜ | Cuenta de comercio Wompi. **Aplazado**: se abre cuando haya ventas que lo justifiquen |
| X-08 | ⬜ | Ficha de Google Business. Dirección fijada: Cali |
| X-10 | ⬜ | Servicio de monitoreo de errores → desbloquea D-02 |
| X-11 | ⬜ | Token de la API de conversiones de Meta → desbloquea D-04 |
| X-12 | ⬜ | Plan de facturación electrónica con Odoo |

---

## D · Desarrollo

| | | Tarea |
|---|---|---|
| D-16 | 🟡 | Que el alcance nacional se vea, sin páginas por ciudad. Dos partes: que `/experiencia` cuente departamentos además de ciudades —es un cálculo— y una línea en `/estudio` con ciudades reales, **que es copia y la aprueba Gustavo**. Nada de `LocalBusiness` sin oficina física |
| D-08 | ⬜ | Panel de leads. Hoy la única forma de ver uno es entrar a Supabase. **Falta decidir quién entra y cómo se autentica** |
| D-11 | ⬜ | Respaldo de leads más allá de Supabase y correo. Si los dos fallan, el lead se pierde. **Falta decidir a dónde va** |
| D-19 | ⬜ | «Proyectar datos al cliente». **Sin definir** |
| D-22 | ⬜ | Cancelar o mover una reserva desde el correo. Ya tiene lo que le faltaba: `evento_google` y `secuencia` se escriben |
| D-10 | ⬜ | Corte de dominio: DNS, variables, 301 desde Wix, Search Console. Comprobar antes si algún subdominio va por http, por el HSTS |
| D-02 | ⬜ | Monitoreo de errores y uptime. Necesita X-10 |
| D-04 | ⬜ | Meta CAPI con deduplicación. Hoy se pierde entre el 30 y el 50 % de las señales. Necesita X-11 |
| D-18 | ⬜ | Pagos con Wompi. **Aplazada, no bloqueada.** Se reabre con seis asesorías vendidas a mano en dos meses |
| D-25 | ⬜ | Huella de contenido en el nombre de las imágenes. **Aplazado**: cuesta regenerar y volver a subir 228 imágenes y todavía no hay pauta |
| D-27 | ⬜ | Reemplazar tres retratos: Eduardo (606 px) y Miguel (600 px) se quedan cortos, y el de Laura desentona con los primeros planos. **Aplazado** |

---

## C · Contenido

Faltan 15 y ninguno está bloqueado. Listado y prioridades en `docs/PLAN-BLOG.md`.

**Casos propios**

| | Artículo |
|---|---|
| C-08 | Pradera El Volcán: un colegio pensado como pieza de barrio |
| C-09 | Casa de la Cultura Las Colinas, Guaviare |
| C-11 | CEFE Tunal |
| C-12 | Casa Aguilar: el método explicado al cliente particular |

**Caribe insular**

| | Artículo |
|---|---|
| C-13 | Construir en una isla: por qué todo cuesta tres veces más |
| C-14 | Diseño resistente a huracanes: cargas, vidrio de impacto, anclaje |
| C-15 | Bermuda y sus cubiertas blancas: el edificio como captación de agua |
| C-16 | Agua dulce donde no hay ríos: cisternas y ósmosis inversa |
| C-17 | La sal se lo come todo: materiales y el costo de equivocarse |
| C-18 | Cimentar sobre roca coralina y suelo kárstico |
| C-19 | Piedra coralina como material de proyecto |
| C-20 | Retiros de la línea de más alta marea y zona costera |
| C-21 | Fuera de red por obligación: solar, almacenamiento y agua |
| C-22 | Cuánto cuesta el m² en Bahamas, Bermuda y Turks & Caicos |
| C-23 | Lo que el Caribe insular le enseña a Barú, San Andrés y Santa Marta |

**Una decisión editorial sigue sin tomarse:** de los cuatro casos propios que
quedan ninguno trata una obra construida —tres concursos y una propuesta— y de
las seis obras que sí lo están no hay ningún artículo planeado. El plan se
escribió cuando el sitio creía tener una sola obra construida.

---

## Lo que espera decisión de Gustavo

X-02 · G-02 · X-01 · X-04 y X-05 · D-08 · D-11 · D-19 · la línea de `/estudio`
de D-16 · G-08.

---

## Reglas que no se negocian

Cada una costó trabajo. El caso que la originó está en el archivo.

| | Regla |
|---|---|
| R-01 | Al retomar un pilar, comprobar primero que sus normas siguen vigentes. Ninguna guarda lo hace |
| R-02 | Cada artículo se escribe en los dos idiomas en la misma pasada |
| R-03 | Lo que no se pueda verificar se declara dentro del artículo. No se rellena |
| R-04 | Un dato que se repite entre artículos se verifica una vez y se cita igual en todos |
| R-05 | Agentes en paralelo: repartir por archivos, no por temas. Ninguno toca `content/posts.ts` ni `content/blog/en/index.ts` |
| R-06 | La experiencia del Caribe y de piscinas es de Gustavo, no del portafolio del estudio |
| R-07 | El sitio va en usted. En la conversación se tutea a Gustavo; son cosas distintas |
| R-08 | No hay push ni merge a `main` por iniciativa propia. El trabajo se acumula en la rama |
| R-09 | Toda cifra lleva su fecha de corte. Una cifra sin fecha es falsa dentro de seis meses |
| R-10 | Una migración de Supabase no se aplica sola: hay que pegar el SQL a mano. El código debe degradar si la columna todavía no existe |
| R-11 | Al terminar una tarea se actualiza este tablero. Uno desactualizado miente, y sobre él se decide |
| R-12 | Una fuente se pudre de tres formas: la norma se deroga, una regla dentro de ella desaparece, o el enlace deja de resolver. Ninguna guarda ve las tres |
| R-13 | Un enlace no se cambia por un código HTTP: se verifica por el título de la página |
| R-14 | No se publica lo que Gustavo aplazó. Si un lote lo arrastra, se separa el commit |
| R-15 | Un reglamento no es su decreto de adopción. Antes de citar un capítulo, comprobar contra qué edición se lee |
| R-16 | Al corregir un artículo, releerlo entero. Los errores que nadie pidió buscar salen de leer, no de buscar |
| R-17 | Máximo dos artículos por mes, y nunca dos el mismo día. Un artículo nuevo se fecha en un mes con hueco |
| R-18 | Las imágenes se suben al bucket **antes** del push. Al revés, el despliegue entra con las fotos rotas y el build pasa en verde igual |

---

## Trampas conocidas

Lo que muerde a quien no lo sepa.

1. **Una imagen cambiada se sigue viendo vieja.** El optimizador la sirve con un
   año de caché. Al tocar cualquier imagen, comprobarla en ventana de incógnito;
   en la normal parece que el cambio no salió. Es la D-25.
2. **Los medios no se tocan desde un worktree.** `assets-originales/` y
   `public/media/` están en `.gitignore` y no existen ahí: correr `pnpm media`
   desde uno vacía las 23 galerías y despublica los 22 proyectos.
3. **El generador de galerías empareja por posición en el array, no por nombre.**
   Quitar entradas del JSON sin renumerar los archivos procesa las equivocadas.
4. **Los retratos del equipo se llaman como la persona** —`Eduardo Mejía
   Martínez.jpeg`— y de ahí salen el slug y el texto alternativo. Un archivo mal
   nombrado se salta con aviso, y cualquier foto se convierte a gris al
   procesarla.
5. **La CI se pone roja sin que nadie toque el código.** `check-vigencia` depende
   de la fecha: el día que venza un dato de Apps, las PR se paran. Es lo
   correcto; no confundirlo con una regresión.
6. **Wompi no publica changelog** y despacha cambios que rompen integraciones sin
   avisar. Y la CSP actual bloquearía su checkout en silencio, porque lleva
   `form-action 'self'`.
7. **La pauta apunta a la Primera llamada, nunca a la asesoría de pago.** Un
   anuncio que lleve directo al cobro repite el modo de falla que mató al
   producto anterior el 4/9.
