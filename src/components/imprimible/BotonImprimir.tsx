'use client'

/**
 * Abre el diálogo de impresión del navegador, que es también el que guarda
 * como PDF. Lleva `data-sin-imprimir` para no salir en el propio documento.
 */
export function BotonImprimir({ children }: { children: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="text-block bg-ink px-6 py-3 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-85"
    >
      {children}
    </button>
  )
}
