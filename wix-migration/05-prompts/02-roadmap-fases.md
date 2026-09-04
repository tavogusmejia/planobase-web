# Roadmap por fases — de Wix a Supabase + Vercel

Cada fase es un prompt de continuación. La fase 1 la cubre el prompt maestro.

---

## Fase 0 — Antes de escribir código (tú, no el agente)

- [ ] Correr `bash wix-migration/02-assets/descargar-assets.sh` en tu Mac. Baja 225 imágenes.
      Verifica que no haya líneas "FALLO".
- [ ] Crear el proyecto en Supabase. Anotar URL, anon key y service role key.
- [ ] Crear el repo en GitHub (vacío) y conectarlo a Vercel.
- [ ] Cuenta en Resend (o el proveedor de correo que prefieras) para las notificaciones del formulario.
- [ ] Pedirle a Eduardo: nombres y cargos del equipo, categoría real de cada proyecto,
      áreas faltantes. Sin eso el sitio nuevo hereda los huecos del viejo.
- [ ] Decidir si el blog sigue vivo y si `/landing-educativo` se construye.
- [ ] **No tocar Wix todavía.** El dominio se mueve al final, en la fase 7.

---

## Fase 5 — Reservas y pago (lo único que Wix hacía y hay que reemplazar)

Wix Bookings resuelve calendario + pago + correos. Fuera de Wix hay que armarlo:

**Opción A — mínima, arranca hoy.** Botón de WhatsApp con mensaje prellenado + calendario
externo (Cal.com embebido, plan gratis). Pago manual por transferencia o link de Wompi.
Cero desarrollo. Es lo que recomiendo para no bloquear el lanzamiento.

**Opción B — propia.** Tabla `bookings` (ya está en el esquema), disponibilidad por reglas
semanales, bloqueo de slots, integración con **Wompi** o **Mercado Pago** (pasarelas
colombianas, PSE y Nequi; Stripe no procesa pagos locales en Colombia con la misma facilidad),
webhook de confirmación, correo de confirmación e invitación .ics.
Presupuesta 2-3 semanas. No lo metas en el primer lanzamiento.

**Opción C — Cal.com autoalojado** con webhook que escribe en `bookings`. Punto medio.

**Recomendación:** lanzar con A, medir cuántas reservas reales llegan al mes, y solo
entonces decidir si B se justifica.

---

## Fase 7 — Corte de Wix (orden exacto, no improvisar)

1. Desplegar el sitio nuevo en un dominio de staging de Vercel. Revisar página por página.
2. Verificar los 36 redirects contra `redirects.json` con un script que haga `curl -I` a cada URL vieja.
3. Exportar de Wix cualquier lead o reserva histórica que quieras conservar.
4. Bajar el TTL del DNS a 300 s **24 horas antes** del corte.
5. Apuntar `planobase.co` y `www.planobase.co` a Vercel.
6. En Google Search Console: añadir la propiedad nueva, subir el sitemap, y usar
   "Cambio de dirección" si además cambia el dominio (no es el caso aquí, pero sí el hosting).
7. Vigilar 404s y posiciones durante 30 días. Ahí es donde se ven los redirects que faltaron.
8. **Recién entonces** cancelar el plan de Wix. No antes: mientras el DNS propaga necesitas
   el sitio viejo vivo como respaldo.

---

## Mejoras que valen más que la migración misma

Ordenadas por retorno, no por esfuerzo:

1. **Nombre en las tarjetas de proyecto y filtro que funcione.** Hoy `/proyectos` es una
   pared de fotos anónimas. Este solo cambio mejora todo el recorrido del portafolio.
2. **Una home que diga qué hace el estudio.** Hoy no lo dice en ninguna parte de la home.
3. **Meta description en las 24 fichas.** Son las páginas de más valor y Google inventa el snippet.
4. **Páginas por vertical**: `/proyectos/educativo`, `/proyectos/institucional`. El estudio es
   fuertemente educativo e institucional y compite por licitaciones y concursos públicos:
   esas páginas son las que rankean para "arquitectura escolar Colombia" o "diseño de colegios".
5. **Un PDF de portafolio descargable** a cambio del correo. Convierte visitantes en leads
   sin depender del formulario.
6. **Casos con resultados, no solo memoria.** Área, plazo, presupuesto, puesto en el concurso.
   Es lo que un cliente institucional necesita para justificar una contratación.
7. **Versión en inglés de verdad**, no traducción automática. Los concursos internacionales
   y la diáspora de clientes lo justifican.
