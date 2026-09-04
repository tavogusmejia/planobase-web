# Hallazgos de la auditoría de www.planobase.co

Extraído el 4 de septiembre de 2026, del sitio en vivo. Ordenado por impacto.

## Bloqueantes de negocio

- **El filtro de proyectos no funciona.** El `<select>` "Filtrar por Etiquetas" de `/proyectos` devuelve los mismos 23 proyectos para *cualquier* etiqueta (Cultural, Educativo, Institucional, Oficinas, Residencial, Urbano). El campo de etiquetas de la colección está vacío o mal enlazado. En la práctica el filtro es decorativo.
- **Las tarjetas del grid de proyectos no muestran el nombre.** Solo foto. Quien entra a `/proyectos` no sabe qué está viendo hasta que hace clic.
- **La home no dice qué hace Plano Base.** Es un slideshow a pantalla completa sin una sola frase de propuesta de valor, sin servicios, sin proyectos con nombre. Todo el peso comercial recae en el botón fijo de reserva.
- **La categoría "Oficinas" existe en el filtro pero no hay ningún proyecto de oficinas.** Etiqueta huérfana.

## Contenido roto o basura indexable

- **`/portafolio` contiene tres párrafos de Lorem Ipsum** y placeholders "Función y forma", con el nombre real del Colegio Bicentenario encima. Es una página pública e indexable.
- **`/portafolio-1` es otra plantilla legacy** con placeholders "Nombre del proyecto" y "Título especifico [Descripción]", y con el `<title>` equivocado: dice "Contáctanos | Plano Base Arquitectos".
- **`/landing-educativo` está completamente vacía** y aun así aparece en el sitemap.
- **`/contactanos1` es un duplicado de `/contacto`** sin el formulario nuevo y con un bloque "Nuestros servicios" vacío.
- **`Comedor Universidad del Valle` no tiene ni una imagen** y no aparece en el grid de `/proyectos`, aunque sí está en el sitemap y tiene la memoria completa escrita.
- **El carrusel "Conoce nuestros proyectos" de `/estudio` se renderiza dos veces**, listando los 23 proyectos duplicados.

## SEO

- **Ninguna de las 24 fichas de proyecto tiene meta description.** Google está inventando el snippet en las 24 páginas de mayor valor del sitio.
- Ninguna ficha de proyecto tiene `og:image`, así que compartir un proyecto en WhatsApp o LinkedIn no muestra imagen.
- No hay datos estructurados (JSON-LD). Falta `Organization`, `LocalBusiness`, `Article` para el blog y `CreativeWork` para cada proyecto.
- La meta description del blog tiene errores de ortografía: "criticas, analisis", "travez", "arqutiectonico".
- El `og:site_name` es `"Plano Base "` con un espacio al final.
- El title de `/estudio` es "Arquitectura bioclimática en Bogotá" para un estudio con sede en Cali: se está optimizando por una keyword que no corresponde a la página.

## Datos del CMS

- **Área en 0** en 6 proyectos: Casa Aguilar, Casa Aguilar Castrillón, Colegio Bolívar, Plaza de los Libaneses, Recuperación del espacio público del Centro de Cali, Teatro César Conto Ferrer.
- **Contradicción en Colegio Próspero Pinzón:** el campo Área dice 5.400 m², la memoria dice ~8.600 m².
- **Errores de tipeo que quedaron en URLs públicas:**
  - `alcadía-local-de-teusaquillo` (falta la L de "Alcaldía"), también en el título visible.
  - "Usmed" en lugar de "Usme" (Colegio Francisco Antonio Zea).
  - "galía abierta" en lugar de "galería abierta" (IED Pompilio Martínez).
  - "Asesoria técnica" sin tilde en el nombre del servicio.
  - "Choco" sin tilde en Teatro César Conto Ferrer.
- **La URL del video de Tirreno está pegada dentro del cuerpo de la memoria** en vez de ser un campo propio.
- **Los slugs de proyecto llevan tildes, ñ y paréntesis sin codificar** (`colegio-y-teatro-el-ensueño`, `colegio-francisco-antonio-zea-(metrovivienda)`). Funcionan, pero se rompen al copiarlas y ensucian analítica. En el sitio nuevo van normalizados, con 301 desde los viejos.
- **El texto de Arezzo está escrito en tono de brochure comercial**, distinto del resto del portafolio, que es memoria arquitectónica. Rompe la voz editorial.

## Equipo

- La sección Equipo de `/estudio` muestra 4 retratos pero **los nombres no están en el HTML**: están dentro de la imagen o en hover. Ni Google ni un lector de pantalla los ve. Archivos: `1626877012054.jpeg`, `00gustavo_edited.jpg`, `00Miguel_edited.jpg`, `00laura.png`. Hay que pedir nombres y cargos.
- En las fichas de proyecto aparecen como diseñadores: Eduardo Mejía, Gabriel Romero Villota, Carlos García y Henry Medina (Amalgama). Solo Eduardo coincide claramente con la sección de equipo.

## Técnico

- El HTML que entrega el servidor **solo trae header y footer**: todo el contenido se pinta con JavaScript en el cliente. Cualquier crawler que no ejecute JS ve un sitio vacío. Esto es lo que Next.js con render en servidor arregla de raíz.
- La página de un proyecto pesa ~1,2 MB de HTML antes de las imágenes.
- Las imágenes se sirven desde `static.wixstatic.com`: al salir de Wix hay que descargarlas y rehospedarlas. Son **225 archivos únicos**, 207 de galerías de proyecto.
- La ficha técnica de cada proyecto está dentro de un acordeón cerrado por defecto ("▶ Ficha técnica y Memoria del proyecto"), o sea que el dato más valioso está oculto al entrar.
- Solo hay una entrada de blog, de octubre de 2022. O se reactiva con un plan editorial o se quita del menú.
