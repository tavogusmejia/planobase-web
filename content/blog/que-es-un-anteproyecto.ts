import type { Post } from '@/lib/types'

/**
 * Perenne del pilar de proceso, y la que explica por qué la escalera de
 * producto del estudio tiene los peldaños que tiene.
 *
 * Todo lo que afirma sale del Decreto 2090 de 1989, que aunque no obliga
 * —decayó al derogarse su fundamento legal, y el Consejo de Estado lo confirmó
 * en 2020— sigue siendo la única fuente colombiana con una definición
 * publicada de cada etapa. Se cita como lo que es: la referencia técnica del
 * oficio, no una tarifa vigente.
 *
 * Fechado en septiembre de 2023.
 */
export const post: Post = {
  slug: 'que-es-un-anteproyecto',
  titulo: 'Qué es un anteproyecto y por qué no se puede saltar',
  pilar: 'proceso',
  fecha: '2023-09-12',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    '«Mándeme unos planos para pedir la licencia» es la petición que se salta ' +
    'la etapa donde se decide todo. Qué es cada etapa del diseño, qué se ' +
    'entrega en cada una, y por qué cambiar de opinión cuesta cien veces más ' +
    'en obra que en un dibujo.',
  metaDescripcion:
    'Qué es un anteproyecto arquitectónico, qué se entrega en cada etapa del ' +
    'diseño y por qué saltárselo sale caro.',
  puerta: 'diseno-a-medida',
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Hay una petición que llega con frecuencia y que suena razonable: ' +
        '«mándeme unos planos para pedir la licencia». Lo que pide es el ' +
        'producto final saltándose las dos etapas donde se decide de verdad ' +
        'qué se va a construir.',
    },
    {
      tipo: 'parrafo',
      texto:
        'No es un capricho de método. Es que **una decisión cuesta muy distinto ' +
        'según cuándo se tome**, y esa diferencia es lo que explica por qué el ' +
        'diseño está partido en etapas.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Las cuatro etapas' },
    {
      tipo: 'parrafo',
      texto:
        'La única fuente colombiana que las define con precisión es una norma ' +
        'de honorarios de 1989 que ya no obliga —perdió su fundamento legal— ' +
        'pero que sigue siendo el vocabulario del oficio. Estas son sus ' +
        'palabras:',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Etapa', 'Qué es, según la norma', '% del honorario'],
      filas: [
        [
          '**Esquema básico**',
          '«Delineamiento general del proyecto», que puede hacerse incluso **sin tener el terreno definitivo**. Zonas, accesos, cómo se relacionan los ambientes',
          '7 %',
        ],
        [
          '**Anteproyecto**',
          '«La idea general del proyecto»: plantas, cortes y fachadas suficientes para entender el edificio, **sin incluir planos para poder ejecutar la obra**',
          'hasta 15 %',
        ],
        [
          '**Proyecto arquitectónico**',
          '«Toda la información necesaria para que la construcción pueda ser ejecutada correctamente». Detalles, especificaciones, coordinación técnica y trámite',
          'hasta 90 %',
        ],
        [
          '**Supervisión arquitectónica**',
          'Visitas de obra, escogencia de acabados, dudas de interpretación de los planos',
          'el 10 % restante',
        ],
      ],
      nota:
        'Decreto 2090 de 1989, numerales 1.1.1 a 1.1.4 y 1.2.4.2. Los ' +
        'porcentajes son la referencia de la que sale casi cualquier propuesta ' +
        'de honorarios en Colombia, aunque hoy no sean obligatorios.',
    },
    {
      tipo: 'nota',
      texto:
        'Fíjese en la frase que define el anteproyecto: **«sin incluir planos ' +
        'suficientes para poder ejecutar la obra»**. Es deliberado. El ' +
        'anteproyecto no es un proyecto incompleto: es un producto distinto, ' +
        'con otro propósito.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Para qué sirve exactamente' },
    {
      tipo: 'parrafo',
      texto:
        'El anteproyecto existe para que usted pueda **mirar y corregir antes ' +
        'de comprometerse**. Es la primera vez que el proyecto deja de ser una ' +
        'conversación y se vuelve algo con dimensiones.',
    },
    {
      tipo: 'parrafo',
      texto: 'En él se resuelve, y todavía se puede cambiar sin costo:',
    },
    {
      tipo: 'lista',
      items: [
        'Dónde se para la casa en el lote, y qué queda de patio.',
        'Cuántos pisos, y qué va en cada uno.',
        'Por dónde entra, y qué se ve al entrar.',
        'De qué lado entra el sol y por dónde cruza el aire.',
        'El tamaño real de cada espacio —que casi nunca coincide con el imaginado—.',
        'Y el orden de magnitud del costo, que se puede estimar por área una vez hay volumen.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que **no** hay todavía: detalles de carpintería, especificaciones ' +
        'de acabados, coordinación con estructura e instalaciones, ni nada con ' +
        'lo que un maestro pueda empezar a construir.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Por qué el orden importa: lo que cuesta cambiar de opinión' },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la razón de fondo, y es puramente económica.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Mover la cocina al otro lado…', 'Qué implica'],
      filas: [
        ['En esquema básico', 'Redibujar un diagrama. Una tarde'],
        ['En anteproyecto', 'Rehacer plantas y cortes. Unos días'],
        ['En proyecto', 'Rehacer detalles, especificaciones, y volver a coordinar hidráulica y eléctrica. Semanas, y se vuelve a pagar'],
        ['Ya radicada la licencia', 'Modificación de licencia: trámite nuevo, expensas nuevas, tiempo nuevo'],
        ['**En obra**', '**Demoler lo hecho y rehacerlo**, con material perdido y cronograma roto'],
      ],
      nota:
        'La misma decisión, cinco momentos, y un rango de costo que va de una ' +
        'tarde a una demolición.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Saltarse el anteproyecto no ahorra esa etapa: **la desplaza a un ' +
        'momento en que es mucho más cara**. Y con frecuencia a un momento en ' +
        'que ya no se puede cambiar y hay que quedarse con lo que quedó.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién paga las modificaciones' },
    {
      tipo: 'parrafo',
      texto:
        'La norma lo resuelve con una distinción que evita casi todas las ' +
        'discusiones, y que conviene escribir en el contrato:',
    },
    {
      tipo: 'cita',
      texto:
        'Salvo errores u omisiones del arquitecto, toda modificación al ' +
        'proyecto arquitectónico se cobrará a la entidad contratante.',
      fuente: 'Decreto 2090 de 1989, numeral 1.2.4.3',
    },
    {
      tipo: 'parrafo',
      texto:
        '**Si el arquitecto se equivocó, lo corrige él. Si usted cambió de ' +
        'opinión, lo paga usted.** No es una cláusula abusiva: es la única ' +
        'forma de que un proyecto termine. Sin ella, cualquier diseño se ' +
        'convierte en una revisión infinita.',
    },
    {
      tipo: 'nota',
      texto:
        '**Ninguna norma colombiana fija un número de revisiones incluidas.** ' +
        'Es decisión comercial de cada estudio, y precisamente por eso hay que ' +
        'escribirla en el contrato antes de empezar.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Qué sí trae el proyecto arquitectónico' },
    {
      tipo: 'parrafo',
      texto:
        'Para dimensionar la diferencia, esto es lo que la norma exige del ' +
        'proyecto completo —y que el anteproyecto explícitamente no tiene—:',
    },
    {
      tipo: 'lista',
      items: [
        'Planos generales de plantas, cortes y fachadas, en escala de obra.',
        'Planos de detalle de carpintería, obras metálicas, escaleras, baños, fachadas, enchapes, cielorrasos y pisos.',
        'Esquemas de desagües e iluminación — «sin incluir los cálculos y planos de ingeniería de las mismas», que son de otro profesional.',
        'Especificaciones detalladas de materiales y acabados.',
        '**Coordinación** de los planos técnicos. La norma acota el alcance: «la labor del arquitecto en este campo es solamente de coordinación».',
        'La tramitación ante la autoridad competente.',
      ],
    },

    { tipo: 'titulo', nivel: 2, texto: 'Cuándo sí se puede empezar por otro lado' },
    {
      tipo: 'parrafo',
      texto:
        'No todo proyecto necesita las cuatro etapas completas. Hay casos ' +
        'legítimos de camino corto:',
    },
    {
      tipo: 'lista',
      items: [
        '**Una remodelación menor** sin cambios de distribución ni de estructura.',
        '**Un proyecto repetido** del que ya existe un diseño probado y solo cambia el lote.',
        '**Una intervención de urgencia**, donde el diagnóstico manda y el diseño es consecuencia.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Pero en obra nueva, o en cualquier proyecto donde haya que decidir ' +
        'cómo se va a vivir en un espacio, saltarse el anteproyecto es tomar la ' +
        'decisión más importante del proyecto sin haberla podido mirar.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Un apunte sobre los planos' },
    {
      tipo: 'parrafo',
      texto:
        'Algo que sorprende a mucha gente y está en la misma norma: **los ' +
        'originales son propiedad del arquitecto**, y el anteproyecto y el ' +
        'proyecto «solamente pueden usarse en la construcción del edificio para ' +
        'el cual fueron elaborados».',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y si el contrato se cancela a mitad de camino, la norma es explícita: ' +
        'se paga lo ejecutado, y **los planos parciales no pueden usarse para ' +
        'ejecutar la obra**. No se puede pagar el anteproyecto, terminarlo con ' +
        'otro y construir con eso.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Todo esto se puede pactar distinto — pero hay que pactarlo por ' +
        'escrito, y antes.',
    },
  ],
  fuentes: [
    {
      titulo: 'Decreto 2090 de 1989, honorarios para trabajos de arquitectura',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
    {
      titulo: 'Sentencia del 28 de agosto de 2020: el Decreto 2090 no es criterio obligatorio',
      editor: 'Consejo de Estado, Sección Primera',
      url: 'https://www.consejodeestado.gov.co/wp-content/uploads/2020/12/SanFiscSAC.pdf',
      fecha: '2020-08-28',
    },
    {
      titulo: 'Ley 400 de 1997, normas sobre construcciones sismo resistentes',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
  ],
}
