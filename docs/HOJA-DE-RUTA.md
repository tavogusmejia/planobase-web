# Hoja de ruta · Plano Base Web

Qué falta, por fases. Una línea por cosa.
Última actualización: 5 de septiembre de 2026.

El detalle de cada frente está en `PLAN-MAESTRO.md` y `PLAN-BLOG.md`.
Este documento es solo el orden.

---

## Fase 0 · Decisiones — bloquean todo lo demás

Ninguna la puede tomar el equipo técnico.

| | Decisión | Bloquea |
|---|---|---|
| 0.1 | **Precio de la primera llamada.** Hay tres cifras en circulación: $0, $50.000 y $300.000 | Reservas y pagos |
| 0.2 | **¿`proyectos@planobase.co` está en Google Workspace de pago?** | Toda la arquitectura del calendario |
| 0.3 | **Verificar `planobase.co` en Resend.** Hoy el correo de confirmación al cliente no saldría | Reservas, formulario, todo lo que notifique |
| 0.4 | **Abrir cuenta de comercio Wompi.** El trámite tarda más que el desarrollo | Pagos |
| 0.5 | **Dirección pública: ¿Cali o Jamundí?** Cambiarla después de crear la ficha de Google resetea su antigüedad | Ficha de Google Business |
| 0.6 | **Marcar `construido` en los 23 proyectos.** Hoy solo 1 está marcado | Tráfico frío, reencuadre, credenciales, Caribe |
| 0.7 | **Reformular «cuatro reconocimientos en concurso público nacional».** El dato no lo sostiene | Confianza institucional |
| 0.8 | **Registro de trato: usted en todo el sitio** | Pasada de redacción |
| 0.9 | **Aprobar la copia pendiente.** Solo dos puertas llevan sello de aprobación | Pauta |
| 0.10 | **Bogotá no es Cundinamarca.** Corrección de dato, no decisión — se aplica sin consultar | — |

---

## Fase 1 · Antes de gastar el primer peso en pauta

Once tareas, ~7-8 días. Sin esto, el dinero entra a un sitio que no mide, no se indexa y puede perder leads en silencio.

| | Tarea |
|---|---|
| 1.1 | Política de tratamiento de datos y autorización expresa (Ley 1581) |
| 1.2 | Banner de consentimiento y arranque condicionado de etiquetas |
| 1.3 | Google Analytics 4 y etiqueta de conversión de Google Ads — hoy no existe ninguna |
| 1.4 | Corte de dominio: DNS, variables, 301 desde Wix, Search Console |
| 1.5 | Páginas de error — hoy no hay ninguna |
| 1.6 | Monitoreo de errores y alerta de lead perdido |
| 1.7 | Resend verificado y acuse de recibo al cliente |
| 1.8 | Cabeceras de seguridad — en producción no se envía ninguna |
| 1.9 | Open Graph por página — hoy todo se comparte con la misma tarjeta |
| 1.10 | URLs de campaña con `/es/` explícito y UTMs |
| 1.11 | Marcar construido vs. concurso en los 23 proyectos *(= decisión 0.6)* |

---

## Fase 2 · Reservas

| | Entrega | Esfuerzo |
|---|---|---|
| 2.1 | **Entrega A.** Calendario propio, disponibilidad por reglas, Google Meet automático, correo con `.ics`, gestión por token. **Sin pago** | 4-5 días |
| 2.2 | **Entrega B.** Wompi: retención del cupo, checkout, webhook idempotente, reprogramación con la regla de 24 h | 3-4 días |

Con la entrega A el embudo cierra. Sumada a la fase 1, **ahí se puede encender la pauta**.

---

## Fase 3 · Pagos y panel

| | Tarea |
|---|---|
| 3.1 | Supabase Auth con lista de acceso por tabla. **Es la primera sesión del proyecto**, y la misma que después autentica a los clientes |
| 3.2 | Panel `/admin/pagos` con links de pago de Wompi |
| 3.3 | Webhook con verificación de firma, reconsulta e idempotencia |
| 3.4 | Facturación electrónica DIAN — obligación del estudio, no de la pasarela |
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
| 5.1 | Encuadre nacional: `h1` de la home, selector de ciudades, puertas, verticales, JSON-LD |
| 5.2 | Unificación en «usted»: 32 reescrituras ya redactadas |
| 5.3 | Las siete contradicciones de hecho: años, nombres, reconocimientos, basura del PDF |
| 5.4 | Unificar rótulos: hoy hay cuatro nombres para un botón y cuatro para un producto |
| 5.5 | Aviso en `/en` mientras el contenido siga en español — la cadena ya existe y nadie la pinta |

---

## Fase 6 · Primer mes de pauta

Meta CAPI · contraste de color · `/agendar` con obra y reconocimientos · datos estructurados que faltan · ficha de Google Business · aligerar `/contacto` · accesibilidad del formulario · antispam · respaldo de leads · métricas de rendimiento.

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
| 9.1 | Solo las opciones de ciudad en el formulario | Tres leads costeros o internacionales |
| 9.2 | Un párrafo en `/estudio` | Que sobreviva 60 días sin confundir al cliente institucional |
| 9.3 | El artículo técnico del blog | Que traiga tráfico o una conversación |
| 9.4 | Página de servicio «Vivienda costera» | Un encargo costero colombiano firmado |
| 9.5 | Sección en inglés e indexación de `/en` | Que `/en` sea traducción real |

---

## El orden, en una línea

```
0 decisiones → 1 antes de pauta → 2A calendario → PAUTA
                                → 5 redacción (en paralelo)
                                → 4 contenido (continuo)
        → 2B pagos → 3 panel → 6 primer mes → 7 navegación → 8 CRM → 9 Caribe
```

**Lo más urgente y lo más barato:** verificar `planobase.co` en Resend (0.3). Son unos registros DNS, y sin eso ningún correo llega al cliente.
