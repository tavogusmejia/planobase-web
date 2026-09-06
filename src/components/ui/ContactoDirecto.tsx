'use client'

import { useTranslations } from 'next-intl'
import { contacto } from '@content/site'
import { WhatsAppLink } from './WhatsAppLink'

/**
 * Las tres vías para hablar con el estudio, juntas y pulsables.
 *
 * Existe para el momento del fallo, que es donde el sitio era peor: cuando el
 * envío del formulario no salía, el visitante leía «escríbanos por WhatsApp» en
 * **texto plano, sin enlace y sin número**. Se le pedía que escribiera por un
 * canal y no se le daba dónde. En todo el sitio había un solo `tel:`, en el pie.
 *
 * La regla que ordena este componente: **en el momento del fallo, el visitante
 * tiene que poder actuar sin escribir nada.** Un botón, un número que se marca
 * solo desde el móvil, un correo que abre su cliente. Nada que copiar a mano.
 *
 * Y va aquí, en un solo sitio, porque lo usan el error del formulario y la
 * página de error de una ruta. Las dos veces que alguien lo escribió suelto
 * salió distinto.
 *
 * `global-error.tsx` **no puede usarlo** y no es un olvido: ese archivo se
 * pinta cuando ya falló el layout raíz, así que no importa nada —ni este
 * componente, ni `contacto`, ni la hoja de estilos—, porque cualquier import
 * que falle lo dejaría también en blanco. Allí el número va escrito a mano.
 */
export function ContactoDirecto({
  origen,
  mensaje,
}: {
  /** De dónde salió, para poder distinguirlo en la analítica de WhatsApp. */
  origen: string
  mensaje: string
}) {
  const t = useTranslations('comun')
  const tc = useTranslations('cta')

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
      <WhatsAppLink
        numero={contacto.whatsapp}
        mensaje={mensaje}
        origen={origen}
        className="text-block bg-signal px-6 py-3 uppercase tracking-[0.08em] text-paper transition-opacity hover:opacity-90"
      >
        {tc('escribirWhatsapp')}
      </WhatsAppLink>

      {/* El teléfono sin espacios en el `href` y con ellos a la vista: el
          protocolo `tel:` los admite, pero hay marcadores de Android que se
          atragantan, y leerlo con espacios es más fácil. Mismo patrón que el
          pie, que es donde ya vivía el único `tel:` del sitio. */}
      <a
        href={`tel:${contacto.telefono.replace(/\s/g, '')}`}
        className="text-small text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
      >
        {t('llamar')} {contacto.telefono}
      </a>

      <a
        href={`mailto:${contacto.correo}`}
        className="text-small text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
      >
        {t('escribirCorreo')}
      </a>
    </div>
  )
}
