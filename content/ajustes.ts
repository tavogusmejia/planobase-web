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

/**
 * ENSAYO — las portadas del portafolio en gris hasta que el cursor las toca.
 *
 * Entra el cursor y la imagen toma color en 0,35 s; mientras esté encima se
 * queda; al salir aguanta 10 segundos y se desvanece a gris en 0,9 s. Se resuelve
 * con tres reglas de CSS y ninguna línea de JavaScript: no hay temporizadores
 * por tarjeta que puedan quedarse colgados ni estado que sincronizar.
 *
 * Aplica a las tres retículas de proyecto —portafolio, destacados de la home y
 * relacionados—. NO al hero, que rota solo y quedaría gris casi siempre, ni a
 * las galerías de las fichas, donde la fotografía es el contenido.
 *
 * En pantallas sin cursor las portadas van a color de entrada: sin hover no hay
 * forma de revelarlas, y dejar el portafolio en gris permanente en un teléfono
 * sería exactamente lo contrario de lo que se busca.
 *
 * De esos diez segundos depende además el huevo de pascua del portafolio: son
 * los que hacen posible barrer la retícula entera y tener las 23 portadas a
 * color a la vez. Acortarlos mucho lo vuelve inalcanzable.
 *
 * `false` devuelve el portafolio a color, sin más efecto que ese.
 */
export const portadasEnGrises = true
