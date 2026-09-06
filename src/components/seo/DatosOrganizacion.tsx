import { contacto, site } from '@content/site'
import { absoluteUrl } from '@/lib/utils'

/**
 * Ficha de la organización en datos estructurados.
 *
 * El sitio emitía JSON-LD de proyecto, artículo y servicio, pero no decía en
 * ninguna parte quién es la empresa. Este es el nodo que Google cruza con la
 * ficha de Google Business para confirmar que el negocio y el dominio son la
 * misma entidad; sin él, la ficha y el sitio son dos cosas sueltas y el paquete
 * local —el mapa con tres resultados— no se gana.
 *
 * `ProfessionalService` y no `Organization` a secas: hereda de LocalBusiness, así
 * que admite dirección, teléfono y zona de servicio, que es justo lo que se
 * verifica. schema.org no tiene un tipo para estudios de arquitectura.
 *
 * IMPORTANTE — el NAP (nombre, dirección, teléfono) tiene que ser idéntico
 * carácter por carácter al de Google Business. La dirección pública quedó
 * decidida el 5/9/2026: Cali, que es lo que este nodo ya publicaba. Cambiarla
 * en una ficha ya verificada resetea su antigüedad, así que se toca aquí antes
 * de crear la ficha, nunca después.
 *
 * `address` y `areaServed` dicen cosas distintas y no hay que mezclarlas: la
 * primera es la sede, que es Cali; la segunda es dónde se presta el servicio,
 * que es Colombia. El campo listaba Cali, Jamundí, Palmira y el Valle antes que
 * al país, y el sitio quedaba declarando un alcance regional que sus propios
 * proyectos desmienten —diez de los veintitrés publicados están en Bogotá—.
 *
 * Y conviene no esperar de esto lo que no da: la zona de servicio del schema no
 * posiciona. Eso lo decide la proximidad de la ficha de Google Business. Esto
 * sirve para que la entidad sea coherente, que es otra cosa.
 */
export function DatosOrganizacion() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#estudio'),
    name: site.nombreLargo,
    legalName: site.razonSocial,
    /* El NIT como `taxID`. Es el único dato del nodo que un tercero puede
       cotejar contra un registro público, así que es lo que de verdad ata
       esta entidad a la sociedad real. */
    taxID: site.nit,
    url: absoluteUrl('/'),
    // Raster, no el SVG: Google no acepta SVG donde espera una imagen de
    // logotipo. Se genera desde el mismo vectorial.
    logo: absoluteUrl('/og/logotipo.png'),
    image: absoluteUrl('/og/default.jpg'),
    foundingDate: String(site.fundado),
    telephone: contacto.telefono,
    email: contacto.correo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contacto.direccion,
      addressLocality: 'Cali',
      addressRegion: 'Valle del Cauca',
      addressCountry: 'CO',
    },
    areaServed: { '@type': 'Country', name: 'Colombia' },
    knowsLanguage: ['es', 'en'],
    sameAs: [contacto.instagram],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
