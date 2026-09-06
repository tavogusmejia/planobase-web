# Para retomar

Pegue esto al abrir la siguiente sesión. Está escrito para que quien lo lea no
tenga que reconstruir el contexto ni preguntar lo que ya está decidido.

---

## El prompt

> Retomamos el sitio de Plano Base. Antes de nada: **lee
> `docs/MASTER-PLAN-V2.md` entero** — es el tablero, dice qué está hecho, qué
> espera una decisión mía y las reglas que salieron de errores que ya costaron
> trabajo. Lee también `CLAUDE.md`.
>
> **Lo primero, y sin esto nada de lo del 6/9 existe en mi máquina:** mi carpeta
> se quedó en `blog/seccion-y-articulos` y muchos commits por detrás. Necesito
> `git pull` y `pnpm install` (entró Vitest). Compruébalo antes de tocar nada.
>
> El estado al cerrar el 6/9: las tres ramas apuntan al mismo commit, todo está
> en producción y verificado ahí, y las dos migraciones de Supabase están
> aplicadas. No hay nada esperando publicación.
>
> Empieza por decirme qué se puede hacer sin input mío y qué está esperándome, y
> vamos una por una. No quiero explicaciones largas salvo que necesites que
> decida algo.

---

## Lo que hay que saber sin tener que buscarlo

**El 6/9 fue una sesión larga.** Salieron siete artículos nuevos, se repartieron
las 62 fechas del blog en cuatro años, se aplicó G-01 —el portafolio pasó de una
obra construida a seis, y cinco fichas que el sitio daba por no construidas eran
falsas—, se retiró la Alcaldía Local de Teusaquillo del sitio entero, se publicó
el calendario de reservas, y se cerraron once tareas D, incluidas la integración
continua y las primeras 65 pruebas.

**Lo que está esperando una decisión de Gustavo**, y por eso no avanza:

- **D-21** — si el calendario propio se queda o se sustituye por Google
  Appointment Schedules o Calendly. Está publicado y funcionando; lo que falta es
  decidir si es el definitivo. La comparación está en el tablero.
- **D-08** — quién entra al panel de leads y cómo se autentica.
- **D-11** — a dónde va el respaldo de leads si fallan Supabase y el correo.
- **D-19** — qué significa «proyectar datos al cliente». Está sin definir.
- **D-16** — la línea de `/estudio` que nombra el alcance nacional. La propuesta
  concreta está en el tablero, en la nota de D-16 reformulada. Es copia, no se
  publica sin su visto bueno.
- **G-02** — la sesión de lectura de copia con Eduardo. `/agendar` entera sigue
  sin aprobar y es la página donde aterrizará la pauta.

**G-08 está pendiente a propósito, no por olvido.** Las ocho imágenes de
Teusaquillo siguen en el bucket público de Supabase y son accesibles por URL
directa. Gustavo decidió el 6/9 no borrarlas todavía. El script está listo:
`pnpm media:retirar alcaldia-local-de-teusaquillo` enseña qué hay, y la misma
orden con `--borrar` las borra. Se niega a tocar un proyecto que siga publicado.

**Lo que se puede hacer sin preguntar nada:** los dieciséis artículos C-08 a
C-23, que dejaron de estar bloqueados el 6/9 cuando Eduardo contestó G-01, más
C-24 y C-25. Son los dos pilares vacíos del blog: casos propios y Caribe insular.

**Y un hueco editorial que nadie ha decidido:** de los cuatro artículos de casos
propios que quedan, **ninguno trata una obra construida** —son tres concursos y
una propuesta— y de las seis obras que sí están construidas **no hay ninguno
planeado**. El plan editorial se escribió cuando el sitio creía tener una sola
obra construida. Conviene decidir si entran, porque una obra que se puede ir a
ver convence más que un concurso.

---

## Tres cosas que van a morder si no se saben

**Las fechas del blog no son libres.** Rige la R-17: máximo dos artículos por
mes y nunca dos el mismo día. Quedan 35 plazas libres y doce meses vacíos entre
2022 y 2024, que es justo donde encajan los que faltan. Y la guarda
`check-fechas` impide que un artículo se feche antes de la fuente más reciente
que cita, así que un artículo nuevo no se puede poner donde uno quiera.

**La CI se puede poner roja sin que nadie toque el código.** `check-vigencia`
depende de la fecha: el día que venza un dato de APBS, las PR se paran. Es lo
correcto —para eso existe— pero conviene no confundirlo con una regresión.

**`content/projects.ts` está generado y dice «no editar a mano», pero
regenerarlo desde un worktree borra las 23 galerías**, porque
`assets-originales/` vive solo en el checkout principal y los worktrees no
comparten lo que no está versionado. Si hay que tocar ese archivo desde un
worktree, se parchea el campo concreto y se actualiza también
`wix-migration/01-content/projects.json`, que es la fuente.
