import type { Post } from '@/lib/types'
import { CUATRO_CLIMAS } from './diagramas/clima'

/**
 * El artículo que le pone norma leída a un tema que en la web colombiana se
 * escribe entero a punta de generalidades. La tesis es simple —Colombia no
 * tiene un clima sino varios, y la misma casa es un acierto en un sitio y un
 * error en otro— y lo que la sostiene es que el Estado ya hizo esa
 * clasificación y le colgó porcentajes obligatorios.
 *
 * Lo que este artículo trae, con documento leído en su texto oficial:
 *
 * 1. **La Resolución 0549 de 2015 del Ministerio de Vivienda se leyó
 *    completa**, en el PDF escaneado de diez hojas que publica el propio
 *    Ministerio, más sus dos anexos, que sí tienen capa de texto. De ahí salen
 *    el ámbito de aplicación, la tabla de escalas, los porcentajes de los dos
 *    periodos, la definición de medidas pasivas y el mecanismo de
 *    certificación.
 * 2. **A una vivienda que no es de interés social le aplica «Todas» las
 *    escalas.** Es decir: una casa unifamiliar de obra nueva está dentro. Casi
 *    todo el contenido que circula da por hecho que la resolución es cosa de
 *    edificios grandes, y la tabla del artículo segundo dice lo contrario.
 * 3. **La clasificación oficial no son pisos térmicos.** El Anexo 2 es un mapa
 *    del IDEAM «según la Temperatura y la Humedad Relativa», con cuatro clases
 *    —frío, templado, cálido seco y cálido húmedo— y un listado municipio por
 *    municipio con su altitud. Ahí está la prueba dura de la tesis del
 *    artículo: Cartagena y Santa Marta están las dos al nivel del mar y en
 *    clases distintas; Jamundí a 975 m es cálido seco y Palmira a 1.001 m es
 *    templado.
 * 4. **El ahorro de energía que se le exige a una vivienda no VIS es 45 % en
 *    cálido húmedo y 25 % en los otros tres climas.** Es la única cifra del
 *    tema que está en una tabla oficial y no en una infografía.
 * 5. **La relación ventana-pared recomendada es «por debajo de 40 %»** y así
 *    se enuncia como requerimiento mínimo en el Anexo 1.
 *
 * Lo que NO se publica, y se declara dentro del artículo:
 *
 * - **Los umbrales numéricos de temperatura y humedad relativa** que separan
 *   las cuatro clases. El Anexo 2 publica el mapa y el listado, no la regla de
 *   corte.
 * - **Promedios de humedad relativa por ciudad.** Ya estaban declarados como
 *   no verificables en `docs/PLAN-BLOG.md §6 ter` y siguen sin fuente citable.
 * - **Ninguna NTC.** El catálogo de ICONTEC no es consultable públicamente.
 * - **Si la resolución ha tenido modificaciones posteriores.** Se leyó el
 *   texto que publica el Ministerio en su propia página de normativa; no se
 *   pudo verificar el rastro de reformas, y por eso el artículo cita el
 *   articulado y no afirma que sea el único vigente sobre la materia.
 * - **Cualquier sobrecosto en pesos de una medida pasiva.** No hay fuente.
 *
 * Fechado en marzo de 2026, en el hueco entre «Por qué la obra se sale del
 * presupuesto» y «Concursos públicos». Enlaza a la casa campestre y al costo
 * por metro cuadrado, que salen después: son enlaces a piezas que en la fecha
 * del artículo todavía no existían, y eso es aceptable porque el sitio se lee
 * hoy, no en marzo.
 */
export const post: Post = {
  slug: 'casa-bioclimatica-por-piso-termico',
  titulo: 'La casa bioclimática, clima por clima: lo que de verdad cambia',
  pilar: 'casa-campestre',
  fecha: '2025-01-12',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Colombia no tiene un clima sino cuatro, y el Estado ya los clasificó y ' +
    'les puso porcentajes obligatorios de ahorro. Qué cambia en la casa al ' +
    'pasar de uno a otro, y por qué en la costa manda la humedad y no el calor.',
  metaDescripcion:
    'Diseño bioclimático en Colombia: los cuatro climas de la Resolución 0549 ' +
    'de 2015, qué exige a una vivienda y qué cambia en orientación, aleros, ' +
    'muros y cubierta.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'La misma casa que es un acierto en Villa de Leyva es un error en ' +
        'Barranquilla. No un poco peor: un error, con aire acondicionado ' +
        'encendido doce horas al día para corregir lo que la arquitectura hizo ' +
        'mal. Y al revés: la casa abierta y ventilada del Caribe, levantada en ' +
        'un altiplano, es una casa fría que nadie usa de noche.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Eso no es una opinión de gusto. **Colombia no tiene un clima: tiene ' +
        'varios**, y el Estado ya los clasificó, les puso mapa, listado ' +
        'municipal y porcentajes obligatorios de ahorro. Casi nadie lo cuenta, ' +
        'y menos gente todavía sabe que a una casa unifamiliar de obra nueva ' +
        'le aplica.',
    },
    {
      tipo: 'nota',
      texto:
        'La regla que ordena el tema, y conviene fijarla antes de seguir: **la ' +
        'clasificación oficial no son pisos térmicos.** No se corta por ' +
        'altura. Se corta por temperatura **y humedad relativa**, y por eso dos ' +
        'municipios a la misma altura pueden quedar en clases distintas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'El país no tiene pisos térmicos: tiene cuatro climas' },
    {
      tipo: 'parrafo',
      texto:
        'El Anexo 2 de la Resolución 0549 de 2015 del Ministerio de Vivienda ' +
        'es un «Mapa de Clasificación del Clima en Colombia según la ' +
        'Temperatura y la Humedad Relativa», elaborado por el IDEAM, con un ' +
        'listado de municipios. Las clases son cuatro: **frío, templado, ' +
        'cálido seco y cálido húmedo**. Cada municipio del país aparece ahí con ' +
        'su altitud y su clase.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Municipio', 'Altitud', 'Clase oficial'],
      filas: [
        ['Bogotá', '2.640 m', 'Frío'],
        ['Villa de Leyva', '2.146 m', 'Frío'],
        ['Rionegro, Antioquia', '2.109 m', 'Frío'],
        ['Medellín', '1.405 m', 'Templado'],
        ['Palmira', '1.001 m', 'Templado'],
        ['Anapoima', '700 m', 'Templado'],
        ['Jamundí', '975 m', 'Cálido seco'],
        ['Cali', '926 m', 'Cálido seco'],
        ['Girardot', '275 m', 'Cálido seco'],
        ['Santa Marta', '18 m', 'Cálido seco'],
        ['Barranquilla', '24 m', 'Cálido húmedo'],
        ['Cartagena', '1 m', 'Cálido húmedo'],
      ],
      nota:
        'Altitudes y clases tomadas del listado del Anexo 2 de la Resolución ' +
        '0549 de 2015. La tabla es una selección; el listado oficial cubre el ' +
        'país entero.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léala dos veces, porque ahí está todo el argumento. **Cartagena y ' +
        'Santa Marta están las dos sobre el mar y en clases distintas.** ' +
        '**Jamundí, a 975 metros, es cálido seco; Palmira, a 1.001 metros, es ' +
        'templado.** Veintiséis metros de diferencia y otro régimen de diseño. ' +
        'La altura sola no decide nada.',
    },
    {
      tipo: 'nota',
      texto:
        'Una declaración de honestidad, de las que este blog hace siempre que ' +
        'corresponde: **el anexo publica el mapa y el listado, no los umbrales ' +
        'numéricos** de temperatura y de humedad que separan una clase de otra. ' +
        'Por eso aquí no aparece ninguno. Tampoco cito promedios de humedad ' +
        'relativa por ciudad: las series del IDEAM no fueron consultables en ' +
        'las rutas que probé, y una cifra sin fuente vale menos que ninguna.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué exige la norma, y a quién' },
    {
      tipo: 'parrafo',
      texto:
        'La Resolución 0549 del 10 de julio de 2015 reglamenta el capítulo de ' +
        'construcción sostenible del Decreto 1077 de 2015 y adopta la guía de ' +
        'ahorro de agua y energía en edificaciones. Su artículo primero fija el ' +
        'objeto: **porcentajes mínimos de ahorro de agua y energía en las ' +
        'nuevas edificaciones**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La pregunta útil es a quién le aplica, y la respuesta sorprende a ' +
        'mucha gente. El artículo segundo trae una tabla de tipo de edificación ' +
        'y escala, y esta es la fila que casi nadie cita.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Tipo de edificación', 'Escala a la que aplica'],
      filas: [
        ['**Vivienda no VIS**', '**Todas**'],
        ['Vivienda de interés social y prioritario', 'Todas, con porcentajes indicativos'],
        ['Centros comerciales', 'Área construida mayor a 6.000 m², sin contar estacionamientos'],
        ['Oficinas', 'Área superior a 1.500 m², sin contar estacionamientos'],
        ['Hoteles', 'Más de 50 habitaciones'],
        ['Educativos', 'Más de 1.500 alumnos'],
        ['Hospitales y clínicas', 'Área de construcción igual o superior a 5.000 m²'],
      ],
      nota:
        'Resolución 0549 de 2015, artículo segundo, numeral 2. La escala de la ' +
        'vivienda que no es de interés social es «Todas»: no hay umbral de ' +
        'área ni de número de unidades por debajo del cual la casa quede fuera.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Es decir: **su casa está dentro.** Con una condición que sí acota, y ' +
        'está en el artículo tercero: las disposiciones aplican a las ' +
        'edificaciones construidas en virtud de licencias de construcción **en ' +
        'la modalidad de obra nueva**, solicitadas después de que la resolución ' +
        'entró a regir. Una remodelación no arrastra la obligación; el artículo ' +
        'octavo permite que una edificación existente se ajuste a las medidas ' +
        'de manera voluntaria.',
    },
    {
      tipo: 'dato',
      valor: '45 %',
      etiqueta:
        'Ahorro mínimo de energía exigido a una vivienda que no es de interés ' +
        'social en clima cálido húmedo. En los otros tres climas es 25 %.',
      fuente: 'Resolución 0549 de 2015, artículo quinto, Tabla No. 2',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Vivienda no VIS', 'Frío', 'Templado', 'Cálido seco', 'Cálido húmedo'],
      filas: [
        ['Ahorro mínimo de energía', '25 %', '25 %', '25 %', '45 %'],
        ['Ahorro mínimo de agua', '25 %', '25 %', '20 %', '20 %'],
        ['Línea base de energía, kWh/m² al año', '46,5', '48,3', '36,9', '50,2'],
        ['Línea base de agua, litros por persona al día', '145,4', '145,3', '189,8', '174,9'],
      ],
      nota:
        'Las dos primeras filas salen de la Tabla No. 2 del artículo quinto de ' +
        'la resolución; las dos últimas, de las tablas 1 y 2 del Anexo 1, que ' +
        'fijan el consumo de referencia contra el cual se mide el ahorro. Nótese ' +
        'que el consumo de agua de referencia más alto no está en la costa sino ' +
        'en el clima cálido seco.',
    },
    {
      tipo: 'nota',
      texto:
        'Dos precisiones que evitan malentendidos. **Los porcentajes de la ' +
        'vivienda de interés social y prioritario son indicativos y de ' +
        'cumplimiento optativo**, lo dice el propio artículo quinto; los de la ' +
        'vivienda que no es VIS, no. Y el artículo cuarto aclara que estas ' +
        'medidas **son de naturaleza técnica y no constituyen normas ' +
        'urbanísticas**: no cambian lo que usted puede construir, cambian cómo ' +
        'tiene que construirlo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Medidas pasivas: la parte que es arquitectura' },
    {
      tipo: 'parrafo',
      texto:
        'La resolución parte las medidas en dos, y la frontera es exactamente ' +
        'la que separa el trabajo del arquitecto del trabajo del instalador. ' +
        'Las activas son equipos: aire acondicionado, calderas, ventilación ' +
        'mecánica, iluminación eléctrica. Las pasivas son la casa.',
    },
    {
      tipo: 'cita',
      texto:
        'Son aquellas que se incorporan en el diseño arquitectónico de las ' +
        'edificaciones y propenden por el aprovechamiento de las condiciones ' +
        'ambientales del entorno […] Las estrategias pasivas consideran el ' +
        'clima, localización, paisaje, orientación, forma, protección solar, ' +
        'selección de materiales, masa térmica, aislamiento, diseño interior y ' +
        'la ubicación de las aperturas para el manejo del acceso solar, luz ' +
        'natural y ventilación.',
      fuente: 'Resolución 0549 de 2015, artículo segundo, numeral 5',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esa lista es, palabra por palabra, el programa de trabajo de un ' +
        'anteproyecto bien hecho. Y tiene una consecuencia práctica que casi ' +
        'nadie usa: **si el ahorro se logra con medidas pasivas, la ' +
        'certificación es la firma del diseñador en los planos ' +
        'arquitectónicos**, que según el artículo séptimo constituye ' +
        'certificación bajo juramento. No hay trámite adicional, no hay ' +
        'auditoría, no hay costo de certificador.',
    },
    {
      tipo: 'nota',
      texto:
        'Si en el formulario de radicación no se dice nada, **se entiende que ' +
        'se aplicarán medidas activas**. Es decir: el silencio lo empuja a ' +
        'usted hacia el camino de los equipos, que es el que cuesta plata todos ' +
        'los meses. Decirlo por escrito es gratis.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los objetivos de diseño, clima por clima' },
    {
      tipo: 'parrafo',
      texto:
        'El Anexo 1 de la resolución trae una tabla corta que vale más que ' +
        'treinta páginas de teoría: qué persigue el diseño en cada clima. La ' +
        'resumo sin adornarla.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Clima', 'Qué persigue el diseño'],
      filas: [
        [
          '**Frío**',
          'Maximizar el calentamiento por radiación solar, reducir el impacto del viento imperante y reducir los volúmenes orientados al oriente y al occidente para aumentar la radiación recibida',
        ],
        [
          '**Templado**',
          'Maximizar el sol en las zonas principales de la vivienda, maximizar la sombra sobre alcobas y cocina, y controlar el viento para permitir circulación de aire en las horas calientes',
        ],
        [
          '**Cálido seco**',
          'Que el edificio se convierta en un buen disipador de calor, y maximizar la sombra',
        ],
        [
          '**Cálido húmedo**',
          'Maximizar la sombra reduciendo la fachada occidental, aumentar el flujo de viento con ventilación cruzada y por diferencia de altura, y ubicar las habitaciones según el viento',
        ],
      ],
      nota:
        'Anexo 1 de la Resolución 0549 de 2015, numeral 2.1.3, «Objetivos de ' +
        'diseño por clima».',
    },
    {
      tipo: 'diagrama',
      svg: CUATRO_CLIMAS,
      titulo: 'La misma casa, dibujada cuatro veces',
      pie:
        'Secciones esquemáticas, sin escala. Las proporciones del alero y del ' +
        'espesor de muro están exageradas para que se distingan. Diagrama del ' +
        'estudio.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Lo que cambia, renglón por renglón' },
    {
      tipo: 'parrafo',
      texto:
        '**Orientación.** En Colombia las fachadas de oriente y occidente ' +
        'reciben la mayor parte de la radiación; las de norte y sur, mucho ' +
        'menos. El Anexo 1 lo dice al derecho y al revés: si se busca calor, se ' +
        'alarga la casa mirando al oriente y al occidente; si se busca frescura, ' +
        'las fachadas largas son las de norte y sur. **Y en clima cálido y ' +
        'templado, la orientación occidental se evita si se puede**, por el ' +
        'sobrecalentamiento de la tarde.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Ventilación cruzada.** No es abrir ventanas: es que el aire tenga ' +
        'por dónde entrar y por dónde salir, en fachadas opuestas y a alturas ' +
        'distintas. Aparece como medida recomendada en los cuatro climas para ' +
        'vivienda no VIS, pero en cálido húmedo deja de ser una mejora y pasa a ' +
        'ser la estrategia principal, porque ahí el confort no se consigue ' +
        'bajando la temperatura sino moviendo el aire.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Inercia térmica.** Un muro pesado tarda horas en entregar el calor ' +
        'que recibió. Eso es una virtud donde la noche es fresca y el día ' +
        'caliente —el clima cálido seco, y buena parte del templado— porque el ' +
        'muro guarda el fresco de la madrugada y lo devuelve a mediodía. **En ' +
        'clima cálido húmedo esa misma masa juega en contra**: si la noche no ' +
        'baja de temperatura, el muro no se descarga y a las diez de la noche ' +
        'sigue radiando el calor de las tres de la tarde. Ahí conviene lo ' +
        'contrario: envolvente liviana, ventilada, y sombra.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Aleros y protección solar.** El anexo separa tres familias: ' +
        'elementos horizontales —aleros, balcones, persianas—, elementos ' +
        'verticales —aletas— y la combinación de ambos. Y trae una observación ' +
        'que a mí me parece la más útil de todo el documento: **los elementos ' +
        'horizontales son muy efectivos por la gran altura del sol en la latitud ' +
        'de Colombia**, y las persianas exteriores son preferibles a las ' +
        'interiores, porque las de adentro solo dan protección parcial: la ' +
        'radiación ya entró.',
    },
    {
      tipo: 'nota',
      texto:
        'La única cifra dura de diseño pasivo que trae el documento: **la ' +
        'relación entre área de ventana y área bruta de pared exterior no debe ' +
        'exceder, en promedio, el 40 %**, medida fachada por fachada e ' +
        'incluyendo marcos y parteluces. Si se pasa de ahí, hay que compensar ' +
        'con sombra o con vidrio de control solar.',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Cubierta.** Es la superficie que más radiación recibe en este país, ' +
        'y la que peor se resuelve. En clima cálido lo que trabaja no es tanto ' +
        'el material como la cámara de aire ventilada por debajo y la sombra ' +
        'que proyecta el alero sobre el muro. En clima frío el problema es el ' +
        'contrario, y se llama pérdida nocturna. La comparación entre barro, ' +
        'termoacústica, placa y cubierta verde merece su propio artículo y no ' +
        'la despacho en un párrafo.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La humedad, que en la costa manda más que la temperatura' },
    {
      tipo: 'parrafo',
      texto:
        'Un termómetro no explica la costa. Barranquilla y Santa Marta están ' +
        'las dos al nivel del mar, a menos de cien kilómetros, y la ' +
        'clasificación oficial las pone en clases distintas. La variable que ' +
        'las separa es la humedad relativa, y la razón es fisiológica antes que ' +
        'arquitectónica: **con el aire muy húmedo el sudor no se evapora**, y ' +
        'el cuerpo pierde su mecanismo principal para refrescarse.',
    },
    {
      tipo: 'parrafo',
      texto:
        'De ahí sale la consecuencia de proyecto. En clima cálido seco se puede ' +
        'bajar la sensación de calor con masa, sombra y agua. **En clima cálido ' +
        'húmedo eso no basta, y por eso la norma le exige a la vivienda casi el ' +
        'doble de ahorro de energía que en los otros tres climas**: sabe que ' +
        'ahí la casa mal diseñada termina resolviéndose con equipos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La respuesta arquitectónica es la que llevan doscientos años haciendo ' +
        'las casas del Caribe y del Pacífico antes de que existiera una ' +
        'resolución: piso levantado sobre el terreno, alero ancho, altura ' +
        'interior generosa, cumbrera que deja salir el aire caliente y planta ' +
        'de una sola crujía para que el aire cruce sin obstáculos.',
    },
    {
      tipo: 'nota',
      texto:
        'Un límite honesto de este artículo. **La condensación no está regulada ' +
        'en Colombia.** La resolución no dice nada sobre condensación ' +
        'intersticial ni sobre barrera de vapor, ni en su articulado ni en su ' +
        'anexo técnico. Lo que se haga contra ella es criterio profesional, y ' +
        'por eso conviene pedirlo por contrato en vez de darlo por incluido. ' +
        'Tampoco cito aquí ninguna norma técnica de ICONTEC: su catálogo no es ' +
        'consultable públicamente y no pude leer el texto de ninguna.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cómo se lleva esto a un proyecto real' },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Busque su municipio en el listado del Anexo 2 antes de dibujar.** La clase climática decide el porcentaje que le van a exigir y el sentido en que trabaja el diseño. Toma dos minutos.',
        '**Si el predio no se parece a su clase, dígalo.** El parágrafo 2 del artículo sexto permite que el constructor señale en el formulario de licencia que el predio está en una zona climática distinta a la asignada, y eso no exige trámite aparte.',
        '**Decida en el anteproyecto, no en acabados.** Orientación, forma, alero y ubicación de las aperturas son decisiones de la primera semana. Después solo quedan equipos.',
        '**Declare por escrito que va con medidas pasivas.** Si no lo dice, se entiende que va con activas, y eso lo compromete a un consumo que paga todos los meses.',
        '**Pida que el diseño arquitectónico responda por el porcentaje.** La firma en los planos es certificación bajo juramento: su arquitecto está afirmando algo verificable, y usted tiene derecho a que se lo expliquen.',
        '**No compre la palabra «bioclimático» sin sección.** Si nadie le ha dibujado un corte con el alero, el sol de las tres de la tarde y por dónde sale el aire, no hay diseño bioclimático: hay un adjetivo.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Nada de esto encarece una casa por sí solo. Un alero bien dimensionado ' +
        'cuesta lo que cuesta un alero; ponerlo en la fachada correcta es ' +
        'gratis. Lo que sí cuesta es lo otro: la casa que necesita equipos para ' +
        'ser habitable. Si está en la etapa de definir presupuesto, la ' +
        'conversación sigue en [cuánto cuesta una casa ' +
        'campestre](/blog/cuanto-cuesta-una-casa-campestre) y en [cuánto cuesta ' +
        'construir por metro cuadrado](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
  ],
  etiquetas: ['nacional', 'costa', 'propietario', 'licencia'],
  fuentes: [
    {
      titulo:
        'Resolución 0549 de 2015: parámetros y lineamientos de construcción sostenible y adopción de la guía de ahorro de agua y energía en edificaciones',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/sites/default/files/normativa/0549-2015.pdf',
      fecha: '2015-07-10',
    },
    {
      titulo:
        'Anexo 1 de la Resolución 0549 de 2015: guía de construcción sostenible, líneas base de consumo, medidas pasivas y objetivos de diseño por clima',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/sites/default/files/normativa/anexo-1-0549-2015.pdf',
      fecha: '2015-07-10',
    },
    {
      titulo:
        'Anexo 2 de la Resolución 0549 de 2015: mapa de clasificación del clima en Colombia según la temperatura y la humedad relativa, y listado de municipios',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio · IDEAM',
      url: 'https://www.minvivienda.gov.co/sites/default/files/normativa/anexo-no-2-mapa-de-clasificacion-del-clima-en-colombia.pdf',
      fecha: '2015-07-10',
    },
    {
      titulo: 'Página de normativa de la Resolución 0549 de 2015',
      editor: 'Ministerio de Vivienda, Ciudad y Territorio',
      url: 'https://www.minvivienda.gov.co/normativa/resolucion-0549-2015',
      fecha: null,
    },
  ],
}
