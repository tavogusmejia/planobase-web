# Plano Base Web

Sitio de Plano Base Arquitectos. Migración desde Wix.

## Stack
Next.js 15 (App Router) · TypeScript estricto · Tailwind v4 · Supabase · Vercel · next-intl (es/en)

## Reglas
- Server Components por defecto. "use client" solo con estado o interacción real.
- Toda escritura a la base de datos va por Server Actions. Nunca desde el navegador.
- SUPABASE_SERVICE_ROLE_KEY jamás cruza al cliente.
- Cero `any`. Tipos generados con `supabase gen types typescript`.
- Todas las imágenes por next/image con `sizes` y `blurDataURL`.
- Peso tipográfico 400 en todo el sitio. La jerarquía se hace con tamaño y aire.
- Español es el idioma base. Inglés cae a español si falta la traducción.
- En la conversación, tutear a Gustavo. El sitio va en «usted»: son cosas
  distintas y mezclarlas confunde sobre a quién se refiere cada frase.
- Cuando te detengas y necesites su respuesta, **dilo explícitamente y en una
  línea suelta**: «por ahora en stand by, ¿sigo con la portada?». Sin eso no hay
  forma de distinguir una pausa que espera algo de una pausa que solo informa,
  y la primera se queda parada sin que nadie lo note.

## Fuente de verdad del contenido
`wix-migration/`. No inventes contenido. No uses lorem ipsum.
Antes de escribir cualquier texto de página, lee el archivo correspondiente en
`wix-migration/01-content/`.

## Comandos
pnpm dev · pnpm build · pnpm lint · pnpm typecheck · pnpm media · pnpm media:upload · pnpm seed

## Nunca
- No hagas push ni merges a `main` por iniciativa propia. El trabajo se acumula
  por lotes en la rama y Gustavo pide la publicación cuando la quiere.
- No hagas commit de .env ni de assets-originales/
- No enlaces imágenes a static.wixstatic.com
- No avances de fase sin que yo confirme