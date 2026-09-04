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

## Fuente de verdad del contenido
`wix-migration/`. No inventes contenido. No uses lorem ipsum.
Antes de escribir cualquier texto de página, lee el archivo correspondiente en
`wix-migration/01-content/`.

## Comandos
pnpm dev · pnpm build · pnpm lint · pnpm seed

## Nunca
- No hagas commit de .env ni de assets-originales/
- No enlaces imágenes a static.wixstatic.com
- No avances de fase sin que yo confirme