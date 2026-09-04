/**
 * Interruptores del sitio.
 *
 * Decisiones que el estudio puede cambiar de opinión sin tocar código ni
 * entender cómo está hecho: se edita el valor y ya. Cada una lleva escrito qué
 * hace y qué se pierde al apagarla, porque un booleano suelto sin contexto es
 * una trampa para quien lo encuentre dentro de un año.
 *
 * Lo que NO va aquí: nada que cambie el contenido. Esto es comportamiento.
 */

/**
 * Las categorías sin proyectos, ¿se ven en el filtro del portafolio?
 *
 * `true` (lo pedido): se muestran en gris con su cero. Declaran hacia dónde
 * crece el estudio y dejan el hueco donde va a entrar la obra futura.
 * `false`: desaparecen del filtro hasta que tengan al menos un proyecto.
 *
 * Con cualquiera de los dos valores, una categoría vacía NUNCA entra al sitemap
 * y siempre se sirve con `noindex`. Eso no es negociable ni es cosmético: una
 * URL indexada que devuelve «todavía no hay obra publicada» Google la lee como
 * un soft-404, y acumular soft-404 le baja la confianza a todo el dominio.
 */
export const mostrarCategoriasVacias = true
