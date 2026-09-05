/**
 * La marca de inicio de la cabecera.
 *
 * El sitio no tiene ni un icono: su lenguaje son filetes de un píxel, peso 400 y
 * la línea de cota. Las únicas formas que existen —logotipo e isotipo— son
 * manchas sólidas generadas desde Illustrator, y no sirven aquí: repetir el
 * isotipo a diez centímetros del logotipo se leería como un error de montaje.
 *
 * Así que en vez de una casa de librería, una casa DIBUJADA: tejado a dos aguas,
 * dos muros, y una base que es la línea de cota —el mismo trazo que corre bajo
 * cada nombre de proyecto y bajo cada dato de la ficha técnica—. Los aleros
 * vuelan sobre los muros y la cota sobresale de la casa, como en una plancha.
 *
 * No va en `components/brand/`: esa carpeta es material del manual, generado
 * desde el .ai y con el aviso de no editar a mano. Este lo dibujamos nosotros.
 *
 * `currentColor` y sin `aria-label` propio: el color y el nombre accesible los
 * pone quien lo usa, que es el enlace que lo envuelve.
 */
export function IconoInicio({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden
      className={className}
    >
      {/* Tejado, con los aleros volando sobre los muros. */}
      <path d="M4.5 11 L12 4.5 L19.5 11" />
      {/* Los dos muros. */}
      <path d="M6.5 10.5 V19" />
      <path d="M17.5 10.5 V19" />
      {/* La cota: sobresale de la casa por los dos lados, como la línea que
          lleva la medida en un plano. */}
      <path d="M3 19 H21" />
    </svg>
  )
}
