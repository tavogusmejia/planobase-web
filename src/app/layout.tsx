import type { ReactNode } from 'react'

/**
 * Raíz de paso. El `<html>` y el `<body>` viven en `app/[locale]/layout.tsx`,
 * porque el atributo `lang` depende del idioma de la ruta.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
