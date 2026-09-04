import { Noto_Sans } from 'next/font/google'

/**
 * Noto Sans es la tipografía complementaria que declara el manual corporativo
 * (pág. 9) y es de licencia libre, así que se puede self-hostear sin permisos.
 *
 * La primaria del manual es Area Normal, comercial: la licencia de escritorio
 * que tiene el estudio NO cubre uso web. Vive únicamente dentro del SVG del
 * logo, con el texto convertido a trazados, donde no hace falta licencia.
 * Si algún día se compra la licencia web, se añade aquí para los titulares.
 *
 * `next/font` descarga los archivos en tiempo de build y los sirve desde el
 * propio dominio: cero peticiones a Google en tiempo de ejecución.
 */
export const notoSans = Noto_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-noto-sans',
  weight: ['400', '500'],
  // 500 existe solo para los pocos casos de énfasis que permite el manual.
  // El sitio corre a 400. No añadir 700.
})
