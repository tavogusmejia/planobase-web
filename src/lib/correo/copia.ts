/**
 * La copia de los correos en el idioma que se pida.
 *
 * Mismo trato que el resto del contenido: el español es la fuente y el inglés
 * se superpone clave a clave; lo que falte cae al español. Se funde por
 * secciones y no el objeto entero porque `fusionar` es superficial —una sola
 * clave traducida dentro de `acuse` reemplazaría el `acuse` completo y dejaría
 * el resto en blanco—.
 */
import { fusionar } from '@/lib/i18n/fusionar'
import { correos, type CopiaCorreos } from '@content/correos'
import { correosEn } from '@content/en/correos'
import { contacto, site } from '@content/site'
import type { Pie } from './maqueta'

export function copiaCorreos(idioma: string): CopiaCorreos {
  if (idioma !== 'en') return correos
  return {
    acuse: fusionar(correos.acuse, correosEn.acuse),
    reserva: fusionar(correos.reserva, correosEn.reserva),
    pie: fusionar(correos.pie, correosEn.pie),
  }
}

/**
 * El pie, que es el mismo en los dos correos.
 *
 * Sale de `content/site.ts` y no está escrito aquí: la dirección del pie de un
 * correo es NAP —nombre, dirección, teléfono— y tiene que coincidir carácter
 * por carácter con la del sitio y con la futura ficha de Google Business.
 * Repetirla a mano sería abrir un cuarto sitio donde se puede desviar.
 */
export function pieDe(idioma: string): Pie {
  const c = copiaCorreos(idioma)
  return {
    firma: c.pie.firma,
    responder: c.pie.responder,
    direccion: contacto.direccion,
    ciudad: contacto.ciudad,
    correo: contacto.correo,
    telefono: contacto.telefono,
  }
}

export { site }
