/**
 * Superpone una traducción sobre el original, clave a clave.
 *
 * Es la misma idea que `src/i18n/request.ts` aplica a los mensajes de interfaz,
 * y aquí se aplica al contenido: el español es la base y el inglés se pone
 * encima; lo que no esté traducido cae al español.
 *
 * **Una cadena vacía cuenta como ausente.** Un archivo a medio traducir, con la
 * clave puesta y el valor todavía por escribir, no debe publicar un titular en
 * blanco: es preferible que se lea en español y que la guarda lo denuncie.
 */
export function fusionar<T extends object>(
  base: T,
  encima: Partial<T> | undefined,
): T {
  if (!encima) return base

  const salida = { ...base }
  for (const [clave, valor] of Object.entries(encima)) {
    if (valor === undefined || valor === null) continue
    if (typeof valor === 'string' && valor.trim() === '') continue
    if (Array.isArray(valor) && valor.length === 0) continue
    Object.assign(salida, { [clave]: valor })
  }
  return salida
}

/** `texto` si está y no está vacío; si no, el original. */
export function oCae(texto: string | undefined, original: string): string {
  return texto && texto.trim() !== '' ? texto : original
}
