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
 * carácter por carácter al de Google Business. La dirección pública está sin
 * decidir entre Cali y Jamundí; cambiarla en una ficha ya verificada resetea su
 * antigüedad, así que conviene cerrarlo antes de crear la ficha.
 */
export function DatosOrganizacion() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#estudio'),
    name: site.nombreLargo,
    legalName: site.razonSocial,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/brand/logotipo.svg'),
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
    areaServed: ['Cali', 'Jamundí', 'Palmira', 'Valle del Cauca', 'Colombia'],
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
