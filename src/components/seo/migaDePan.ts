import { absoluteUrl } from '@/lib/utils'

/** Un escalón de la ruta: cómo se llama y a dónde lleva. */
export type Escalon = {
  nombre: string
  /** Ruta **con prefijo de idioma**: `/es/proyectos`. Se absolutiza aquí. */
  ruta: string
}

/**
 * La miga de pan en datos estructurados.
 *
 * Estaba escrita a mano en las dos rutas del blog y en la calculadora, y el
 * resto del sitio no la tenía. Repetirla cuatro veces más era repetir cuatro
 * veces la parte que se puede equivocar sin que nada falle: `item` **tiene que
 * ser una URL absoluta**, y una relativa pasa el build, pasa el `tsc` y no
 * sirve para nada. Aquí la absolutiza la función y no quien llama, así que no
 * se puede olvidar.
 *
 * El idioma va dentro de la ruta que recibe: la miga de `/en/servicios/…`
 * apunta a `/en/servicios`, nunca al español. Un escalón que cruza de idioma
 * declara una jerarquía que no existe.
 *
 * **No se emite «Inicio».** Es lo que ya hacen el blog y la calculadora, y por
 * una razón: una miga de dos escalones cuyo primero es la portada no dice nada
 * que el dominio no dijera. Se empieza por la sección —Proyectos, Servicios,
 * Blog—, que es el nivel que de verdad existe como página.
 */
export function migaDePan(escalones: Escalon[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: escalones.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: e.nombre,
      item: absoluteUrl(e.ruta),
    })),
  }
}
