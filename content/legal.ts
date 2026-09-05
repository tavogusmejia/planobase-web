/**
 * Política de tratamiento de datos personales.
 *
 * **PENDIENTE DE REVISIÓN JURÍDICA.** Está redactada contra el texto de la
 * norma y contiene los seis contenidos que el Decreto 1074 de 2015 exige, pero
 * una política de datos es un documento que responde ante la Superintendencia
 * de Industria y Comercio, y eso lo firma un abogado, no un archivo de
 * TypeScript. Lo que hay aquí es el borrador completo para que lo revise: no
 * hace falta escribirlo desde cero, hace falta leerlo.
 *
 * **Por qué existe y por qué ahora.** El sitio recoge nombre, correo, WhatsApp,
 * municipio y un mensaje libre en un formulario de captación, y monta el Pixel
 * de Meta. Sin política publicada y sin autorización expresa, eso es
 * tratamiento de datos sin título habilitante bajo la Ley 1581 de 2012. A
 * volumen cero el riesgo era teórico —así lo dice el propio componente del
 * Pixel—, pero el disparador era la pauta, y la pauta es lo siguiente.
 *
 * **De dónde sale cada cosa.** Los seis contenidos obligatorios están en el
 * artículo 2.2.2.25.3.1 del Decreto 1074 de 2015, que compiló el artículo 13
 * del Decreto 1377 de 2013. Los derechos del titular, en el artículo 8 de la
 * Ley 1581 de 2012. Los plazos de consultas y reclamos, en los artículos 14 y
 * 15; el requisito de agotar el trámite ante el responsable antes de acudir a
 * la Superintendencia, en el 16.
 *
 * **Tres cosas que este archivo NO puede decidir y quedan marcadas abajo:**
 *
 * 1. **El NIT**, que no vive en el repositorio. No se inventa.
 * 2. **El período de vigencia de la base de datos**, que es una decisión del
 *    estudio y no un dato técnico. Aquí va una redacción defendible, sujeta a
 *    aprobación.
 * 3. **Si aplica el registro ante el RNBD**, que depende del tamaño de activos
 *    de la sociedad y de la circular vigente de la Superintendencia. Es una
 *    pregunta para el contador y ya está anotada en el anexo de trámites del
 *    plan maestro.
 */

export type BloqueLegal =
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'lista'; puntos: string[] }

export type SeccionLegal = {
  /** Ancla estable: la política se cita por sección en correos y reclamos. */
  id: string
  titulo: string
  bloques: BloqueLegal[]
}

export type Politica = {
  titulo: string
  /** ISO. Es uno de los seis contenidos obligatorios, no un adorno. */
  vigenteDesde: string
  entrada: string
  vigenciaTitular: string
  secciones: SeccionLegal[]
}

export const politicaDatos: Politica = {
  titulo: 'Política de tratamiento de datos personales',
  vigenteDesde: '2026-09-05',
  entrada:
    'Esta política explica qué datos personales recoge Plano Base Arquitectos ' +
    'a través de este sitio, para qué los usa, cuánto tiempo los conserva y ' +
    'cómo puede usted conocerlos, corregirlos o pedir que se eliminen. Se ' +
    'aplica a todo dato que usted nos entregue por el formulario de contacto, ' +
    'por correo o por WhatsApp.',
  vigenciaTitular: 'Vigencia',

  secciones: [
    {
      id: 'responsable',
      titulo: 'Quién responde por sus datos',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'El responsable del tratamiento es Plano Base Arquitectos S.A.S, ' +
            'con domicilio en Cali, Colombia.',
        },
        {
          tipo: 'lista',
          puntos: [
            'Dirección: Calle 18 # 61-29, Cali, Valle del Cauca, Colombia.',
            'Correo electrónico: proyectos@planobase.co',
            'Teléfono: +57 301 426 4603',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'Ese mismo correo es el canal para peticiones, consultas y ' +
            'reclamos sobre datos personales, y lo atiende la dirección del ' +
            'estudio.',
        },
      ],
    },

    {
      id: 'datos',
      titulo: 'Qué datos recogemos',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Solo los que usted escribe. El sitio no compra bases de datos ni ' +
            'toma datos de terceros.',
        },
        {
          tipo: 'lista',
          puntos: [
            'Nombre y apellidos.',
            'Correo electrónico.',
            'Número de WhatsApp.',
            'El municipio donde se ubica su proyecto y la etapa en que está.',
            'El mensaje que usted escriba, con lo que decida contarnos de su proyecto.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'No pedimos datos sensibles en el sentido del artículo 5 de la Ley ' +
            '1581 de 2012 —origen racial o étnico, orientación política, ' +
            'convicciones religiosas, datos de salud, datos biométricos— y le ' +
            'pedimos que no los incluya en el mensaje libre. Tampoco dirigimos ' +
            'este formulario a menores de edad.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Junto al envío guardamos una huella irreversible de su dirección ' +
            'IP, no la dirección. Sirve para limitar envíos automáticos y no ' +
            'permite identificarle ni reconstruir la dirección original.',
        },
      ],
    },

    {
      id: 'finalidad',
      titulo: 'Para qué los usamos',
      bloques: [
        {
          tipo: 'lista',
          puntos: [
            'Responder a su consulta y, si procede, agendar una asesoría.',
            'Preparar y enviarle propuestas, cotizaciones y documentos del proyecto.',
            'Mantener el contacto durante el proyecto y cumplir el contrato si llegamos a firmarlo.',
            'Cumplir obligaciones legales, contables y tributarias.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'No vendemos ni cedemos sus datos. No los usamos para enviarle ' +
            'publicidad de terceros. Si algún día quisiéramos usarlos para una ' +
            'finalidad distinta de las de arriba, le pediremos una autorización ' +
            'nueva antes de hacerlo.',
        },
      ],
    },

    {
      id: 'autorizacion',
      titulo: 'Su autorización',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'El tratamiento requiere su autorización previa, expresa e ' +
            'informada. Usted la otorga marcando la casilla correspondiente ' +
            'antes de enviar el formulario, y conservamos constancia de ella ' +
            'junto al registro de su mensaje.',
        },
        {
          tipo: 'parrafo',
          texto:
            'La autorización es voluntaria. Puede revocarla en cualquier ' +
            'momento escribiendo a proyectos@planobase.co, sin que eso le ' +
            'suponga costo alguno.',
        },
      ],
    },

    {
      id: 'derechos',
      titulo: 'Sus derechos',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Como titular de los datos, el artículo 8 de la Ley 1581 de 2012 ' +
            'le reconoce estos derechos:',
        },
        {
          tipo: 'lista',
          puntos: [
            'Conocer, actualizar y rectificar sus datos personales.',
            'Solicitar prueba de la autorización que nos otorgó.',
            'Ser informado del uso que le hemos dado a sus datos.',
            'Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.',
            'Revocar la autorización o solicitar que sus datos se supriman, cuando no exista un deber legal o contractual que nos obligue a conservarlos.',
            'Acceder de forma gratuita a sus datos.',
          ],
        },
      ],
    },

    {
      id: 'procedimiento',
      titulo: 'Cómo ejercerlos',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Escriba a proyectos@planobase.co indicando su nombre, el dato al ' +
            'que se refiere y qué pide. No hace falta ningún formato ni ' +
            'intermediario.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Las consultas se atienden en un plazo máximo de diez días ' +
            'hábiles. Si no fuera posible resolverlas dentro de ese plazo, se ' +
            'lo informaremos explicando el motivo y la fecha en que se ' +
            'atenderá, que no superará los cinco días hábiles siguientes.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Los reclamos se atienden en un plazo máximo de quince días ' +
            'hábiles. Si el reclamo llega incompleto, le pediremos que lo ' +
            'complete dentro de los cinco días siguientes a recibirlo; si ' +
            'pasan dos meses sin respuesta suya, se entenderá que desistió. Si ' +
            'no fuera posible resolver dentro de los quince días hábiles, se lo ' +
            'informaremos y el plazo no superará los ocho días hábiles ' +
            'siguientes.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Antes de presentar una queja ante la Superintendencia de ' +
            'Industria y Comercio, la ley exige agotar el trámite de consulta ' +
            'o reclamo ante nosotros. Lo decimos porque le ahorra un paso, no ' +
            'para poner una barrera.',
        },
      ],
    },

    {
      id: 'conservacion',
      titulo: 'Cuánto tiempo los conservamos',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Conservamos sus datos mientras dure la relación con usted y, ' +
            'después, durante el tiempo necesario para atender obligaciones ' +
            'legales, contables y tributarias, o para defender el estudio ante ' +
            'una reclamación. Cumplido eso, se eliminan.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Si usted escribió y no llegamos a trabajar juntos, puede pedirnos ' +
            'la supresión cuando quiera y la haremos.',
        },
      ],
    },

    {
      id: 'terceros',
      titulo: 'Quién más los ve',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Usamos proveedores de servicios que tratan los datos por nuestra ' +
            'cuenta y siguiendo nuestras instrucciones, no para fines propios: ' +
            'el alojamiento del sitio, la base de datos donde se guardan los ' +
            'mensajes y el servicio que envía nuestros correos. Algunos de ' +
            'ellos procesan la información fuera de Colombia.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Fuera de eso, sus datos no salen del estudio, salvo requerimiento ' +
            'de autoridad competente.',
        },
      ],
    },

    {
      id: 'medicion',
      titulo: 'Medición y publicidad',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'El sitio puede usar herramientas de medición y publicidad de ' +
            'terceros para saber qué anuncios traen visitantes. Esas ' +
            'herramientas solo se activan si usted lo acepta en el aviso que ' +
            'aparece la primera vez que entra; si no lo acepta, el sitio ' +
            'funciona igual y no se carga ninguna.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Puede cambiar de opinión cuando quiera desde el enlace del pie de ' +
            'página.',
        },
      ],
    },

    {
      id: 'cambios',
      titulo: 'Cambios en esta política',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Si cambiamos esta política, publicaremos aquí la versión nueva con ' +
            'su fecha. Cuando el cambio afecte la finalidad del tratamiento, se ' +
            'lo comunicaremos antes de aplicarlo y le pediremos autorización de ' +
            'nuevo si hace falta.',
        },
      ],
    },
  ],
}
