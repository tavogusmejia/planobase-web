import type { MetadataRoute } from 'next'
import { sitioIndexable } from '@/lib/env'

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.planobase.co'

export default function robots(): MetadataRoute.Robots {
  const reglas = {
    userAgent: '*',
    // El rastreo se permite a propósito incluso cuando el sitio no debe
    // indexarse. Si se bloqueara aquí, el rastreador nunca llegaría a leer la
    // etiqueta `noindex` de cada página y podría acabar listando la URL igual,
    // sin contenido. Para mantener algo fuera del índice, hay que dejar que lo
    // vea y que lea la instrucción.
    allow: '/',
    // El panel no se indexa nunca.
    disallow: ['/admin', '/api'],
  }

  // El sitemap solo se anuncia donde tiene sentido seguirlo. En el dominio de
  // pruebas sería invitar a rastrear 45 URLs que van a descartarse una a una.
  if (!sitioIndexable()) {
    return { rules: reglas, host: base }
  }

  return { rules: reglas, sitemap: `${base}/sitemap.xml`, host: base }
}
