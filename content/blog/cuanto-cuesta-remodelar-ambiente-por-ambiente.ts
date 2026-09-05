import type { Post } from '@/lib/types'
import { FRONTERA_DE_LA_REMODELACION } from './diagramas/costos'

/**
 * La tercera pieza de la serie de costos, y la que corrige el error más
 * extendido del tema.
 *
 * Todo el mundo cree que la frontera legal de una remodelación está en el
 * dinero o en «si toca redes». No lo está, y el articulado es inequívoco. El
 * artículo 2.2.6.1.1.10 del Decreto 1077 de 2015 define reparación locativa
 * como la obra que mantiene el inmueble en condiciones de higiene y ornato
 * **sin afectar su estructura portante, su distribución interior, sus
 * características funcionales, formales y/o volumétricas**, y enumera dentro
 * de ellas —expresamente— «la sustitución, mejoramiento o ampliación de redes
 * de instalaciones hidráulicas, sanitarias, eléctricas, telefónicas o de gas».
 * Es decir: **cambiar redes no requiere licencia; mover un muro sí**, porque
 * cambia la distribución interior y cae en la modalidad de modificación del
 * artículo 2.2.6.1.1.7, numeral 4.
 *
 * Esa inversión de la intuición popular es el eje del artículo, y está
 * transcrita del articulado, no glosada.
 *
 * Lo demás sigue la regla de la serie: la unidad de análisis es el ambiente,
 * no la casa; no se publica ninguna tabla de $/m² de remodelación —que es aún
 * menos publicable que la de obra nueva, porque el costo lo domina lo que
 * aparece al demoler—; y lo que es criterio de oficio va rotulado como tal.
 *
 * Enlaza a los tres vecinos y no los repite: la propiedad horizontal, las doce
 * partidas y el artículo del metro cuadrado.
 *
 * Fechado en agosto de 2026, después de sus dos piezas hermanas.
 */
export const post: Post = {
  slug: 'cuanto-cuesta-remodelar-ambiente-por-ambiente',
  titulo: 'Cuánto cuesta remodelar, ambiente por ambiente',
  pilar: 'costos',
  fecha: '2026-08-04',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'Una remodelación no se presupuesta por metro cuadrado: se presupuesta por ' +
    'ambiente, y lo que dispara la cifra no es el tamaño sino tocar la ' +
    'estructura, la impermeabilización o la distribución. Dónde está la ' +
    'frontera legal, y por qué casi todo el mundo la ubica mal.',
  metaDescripcion:
    'Qué encarece de verdad una remodelación de cocina, baño, cubierta o ' +
    'fachada, y cuándo deja de ser reparación locativa y necesita licencia.',
  puerta: 'remodelacion-y-ampliacion',
  portada: null,
  etiquetas: ['nacional', 'propietario', 'costos', 'propiedad-horizontal', 'licencia'],
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Una remodelación no se mide bien en metros cuadrados. Sesenta metros ' +
        'de piso nuevo y sesenta metros que incluyen dos baños, una cocina y un ' +
        'muro menos no tienen nada que ver, aunque el área sea la misma.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La unidad que sí funciona es el **ambiente**, y dentro de cada ' +
        'ambiente lo que decide la cifra es una sola pregunta: **hasta dónde ' +
        'hay que romper**. Cambiar acabados es una cosa. Tocar redes es otra. ' +
        'Tocar estructura o impermeabilización es otra completamente distinta, ' +
        'y ahí es donde los presupuestos se duplican.',
    },
    {
      tipo: 'nota',
      texto:
        'Por qué no existe una tabla de pesos por metro cuadrado en Colombia, ' +
        'qué publica realmente el DANE y qué entra y qué no entra en un costo ' +
        'de obra está en ' +
        '[cuánto cuesta construir por m² en Colombia](/blog/cuanto-cuesta-construir-por-m2-en-colombia). ' +
        'En remodelación el problema es todavía mayor, y al final de este ' +
        'artículo explico por qué.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'La frontera legal está donde casi nadie la pone',
    },
    {
      tipo: 'parrafo',
      texto:
        'Antes del costo hay una pregunta de régimen: si lo que va a hacer ' +
        'requiere licencia o no. La creencia general es que la frontera está en ' +
        'el dinero, o en «si toca redes». Las dos son falsas, y el articulado ' +
        'lo dice sin ambigüedad.',
    },
    {
      tipo: 'cita',
      texto:
        'Se entiende por reparaciones o mejoras locativas aquellas obras que ' +
        'tienen como finalidad mantener el inmueble en las debidas condiciones ' +
        'de higiene y ornato sin afectar su estructura portante, su ' +
        'distribución interior, sus características funcionales, formales y/o ' +
        'volumétricas. No requerirán licencia de construcción las reparaciones ' +
        'o mejoras locativas a que hace referencia el artículo 8 de la Ley 810 ' +
        'de 2003 o la norma que lo adicione, modifique o sustituya.',
      fuente: 'Decreto 1077 de 2015, artículo 2.2.6.1.1.10',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y el mismo artículo enumera qué entra en esa categoría. La lista ' +
        'sorprende a casi todo el mundo:',
    },
    {
      tipo: 'cita',
      texto:
        'Están incluidas dentro de las reparaciones locativas, entre otras, las ' +
        'siguientes obras: el mantenimiento, la sustitución, restitución o ' +
        'mejoramiento de los materiales de pisos, cielorrasos, enchapes, ' +
        'pintura en general, y la sustitución, mejoramiento o ampliación de ' +
        'redes de instalaciones hidráulicas, sanitarias, eléctricas, ' +
        'telefónicas o de gas.',
      fuente: 'Decreto 1077 de 2015, artículo 2.2.6.1.1.10',
    },
    {
      tipo: 'parrafo',
      texto:
        'Léalo otra vez: **cambiar las redes hidráulicas, sanitarias, ' +
        'eléctricas o de gas es reparación locativa y no requiere licencia.** ' +
        'Lo que saca una obra de esa categoría es otra cosa: afectar la ' +
        'estructura portante, la distribución interior o las características ' +
        'volumétricas del inmueble.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando la obra pasa esa línea, entra en una modalidad de licencia de ' +
        'construcción con nombre propio:',
    },
    {
      tipo: 'cita',
      texto:
        'Modificación. Es la autorización para variar el diseño arquitectónico ' +
        'o estructural de una edificación existente, sin incrementar su área ' +
        'construida.',
      fuente: 'Decreto 1077 de 2015, artículo 2.2.6.1.1.7, numeral 4',
    },
    {
      tipo: 'diagrama',
      svg: FRONTERA_DE_LA_REMODELACION,
      titulo: 'Dónde deja de ser una reparación locativa',
      pie:
        'El salto de régimen ocurre entre la primera planta y la segunda, no ' +
        'entre la segunda y la tercera. Cambiar enchapes es locativa; mover el ' +
        'muro divisorio ya cambia la distribución interior y cae en licencia de ' +
        'modificación; y si el muro es portante, además hace falta diseño ' +
        'estructural firmado.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Lo que va a hacer', 'Régimen', 'Qué implica'],
      filas: [
        [
          'Pintura, pisos, enchapes, cielorrasos',
          'Reparación locativa',
          'Sin licencia',
        ],
        [
          'Cambiar o ampliar redes hidráulicas, sanitarias, eléctricas o de gas',
          'Reparación locativa',
          'Sin licencia. Pero es la obra que más rompe y más cuesta',
        ],
        [
          'Mover o quitar un muro divisorio',
          'Cambia la distribución interior',
          'Licencia de construcción, modalidad de modificación',
        ],
        [
          'Intervenir un muro o una losa portante',
          'Afecta la estructura portante',
          'Modificación con diseño estructural firmado por profesional facultado',
        ],
        [
          'Cerrar un balcón, tapar un vacío, añadir un altillo',
          'Incrementa el área construida',
          'Modalidad de ampliación, no de modificación',
        ],
        [
          'Cambiar el uso del inmueble o de una parte',
          'Adecuación',
          'Licencia, y depende de que la norma urbana admita ese uso',
        ],
      ],
      nota:
        'Que una obra no requiera licencia no significa que no tenga reglas: ' +
        'el mismo artículo deja al que ejecuta la obra responsable de cumplir ' +
        'el reglamento de propiedad horizontal, de prevenir daños a terceros y ' +
        'de respetar los procedimientos aplicables a bienes de interés ' +
        'cultural.',
    },
    {
      tipo: 'nota',
      texto:
        'Un dato de plazo que casi todo el contenido web tiene mal: **los 36 ' +
        'meses de vigencia son solo de la obra nueva.** Ampliación, adecuación, ' +
        'modificación, restauración, reforzamiento y demolición siguen en 24 ' +
        'meses. Si su remodelación necesita licencia, el reloj que le corre es ' +
        'el corto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Los tres disparadores del costo' },
    {
      tipo: 'parrafo',
      texto:
        'Con el régimen resuelto, el costo. En remodelación hay tres cosas que ' +
        'multiplican la cifra, y las tres tienen en común que están escondidas ' +
        'detrás de un acabado.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Las redes.** Cambiar una red obliga a romper y rehacer lo que la cubre: muro, piso o cielorraso. El material de la red es barato; la demolición, el resane y el acabado nuevo, no. Por eso un baño «solo de enchapes» y un baño con puntos hidráulicos nuevos no son el mismo trabajo aunque midan lo mismo.',
        '**La estructura.** Tocar un elemento portante deja de ser una decisión de obra y pasa a ser un diseño con firma y responsabilidad. Y arrastra un requisito que la gente no espera: hay que saber qué es portante antes de tumbar, y en un edificio sin planos eso es un levantamiento.',
        '**La impermeabilización.** Es la partida que más se subestima porque no se ve y porque su falla aparece meses después. Rehacer la impermeabilización de una cubierta o de un baño obliga a levantar todo lo que está encima.',
      ],
    },
    {
      tipo: 'nota',
      texto:
        'Un cuarto disparador, que es de otra naturaleza: **lo que aparece al ' +
        'demoler.** En una remodelación no se sabe qué hay detrás del muro ' +
        'hasta abrirlo. Ese es el motivo real por el que un presupuesto de ' +
        'remodelación es más incierto que uno de obra nueva, y por el que un ' +
        'presupuesto de remodelación sin imprevistos declarados no es más ' +
        'preciso, es menos honesto.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Ambiente por ambiente' },
    {
      tipo: 'parrafo',
      texto:
        'Lo que sigue no son cifras: son los factores que en cada ambiente ' +
        'deciden si el presupuesto es uno o es tres. Son los que hay que ' +
        'aclarar antes de pedir una cotización, porque si no se aclaran, dos ' +
        'cotizaciones del mismo ambiente no se pueden comparar.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Ambiente', 'Lo que casi no mueve la cifra', 'Lo que la dispara'],
      filas: [
        [
          '**Cocina**',
          'Cambiar el mesón, los frentes del mueble y el enchape',
          'Mover el punto de agua, el desagüe o el gas; cambiar la ubicación de la campana; abrirla hacia la sala tumbando un muro',
        ],
        [
          '**Baño**',
          'Cambiar aparatos y grifería en el mismo sitio',
          'Mover el sanitario, rehacer la impermeabilización, cambiar el piso completo por bajar el nivel del desagüe',
        ],
        [
          '**Cubierta**',
          'Cambiar tejas por tejas del mismo tipo',
          'Cambiar el sistema de cubierta, rehacer la impermeabilización, intervenir la estructura de soporte, añadir aislamiento',
        ],
        [
          '**Fachada**',
          'Pintura y limpieza',
          'Cambiar ventanería, corregir humedades de origen no resuelto, intervenir elementos que en propiedad horizontal son bien común',
        ],
        [
          '**Pisos**',
          'Cambiar el acabado sobre el contrapiso existente',
          'Demoler el contrapiso, nivelar, o descubrir que debajo hay una red que hay que rehacer',
        ],
        [
          '**Distribución**',
          'Reubicar muebles y puertas',
          'Cualquier muro que se mueva: cambia el régimen, pide licencia, y si el muro es portante pide diseño estructural',
        ],
      ],
      nota:
        'La columna de la derecha es la que hay que escribir en la solicitud ' +
        'de cotización. Si no está escrita, cada constructor supone una cosa ' +
        'distinta y los precios que le lleguen no serán comparables entre sí.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y una advertencia sobre la fachada y las humedades: si hay humedad, ' +
        'cambiar el acabado no la resuelve, la esconde durante un tiempo. ' +
        'Antes de presupuestar el acabado hay que saber de dónde entra el ' +
        'agua. Cuándo eso amerita un estudio formal está en ' +
        '[cuándo un edificio necesita un estudio patológico](/blog/cuando-un-edificio-necesita-un-estudio-patologico).',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Si es un apartamento, cambian las reglas antes que el costo',
    },
    {
      tipo: 'parrafo',
      texto:
        'En propiedad horizontal hay una capa previa a la licencia y al ' +
        'presupuesto: qué es suyo y qué es bien común. La fachada, la ' +
        'estructura, las cubiertas y buena parte de las redes no son suyas ' +
        'aunque pasen por dentro de su apartamento, y eso cambia quién ' +
        'autoriza.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Qué puede hacer sin pedirle permiso a nadie, cuándo hace falta la ' +
        'asamblea y con qué mayoría, y por qué la autorización de la asamblea ' +
        'no reemplaza la licencia, está en ' +
        '[reformar en propiedad horizontal](/blog/reformar-en-propiedad-horizontal). ' +
        'Es lectura previa, no complementaria: una obra que la asamblea no ' +
        'podía autorizar es una obra que puede tocar deshacer.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Quién firma qué, y por qué importa al costo' },
    {
      tipo: 'parrafo',
      texto:
        'En una remodelación el cliente suele contratar «al que hace la obra» y ' +
        'suponer que ahí viene todo. En cuanto la obra cruza alguna de las ' +
        'líneas anteriores, no viene todo.',
    },
    {
      tipo: 'lista',
      items: [
        '**Si se toca la estructura**, el diseño estructural lo firma un profesional facultado por la Ley 400 de 1997. No es un cálculo del maestro.',
        '**Si hace falta licencia**, hay un expediente que radicar, con planos y con expensas, y un plazo de trámite que corre antes de la obra.',
        '**Si el edificio no tiene planos**, hay un levantamiento previo. Es una partida real y casi nunca está en la cotización inicial.',
        '**Si la obra es en propiedad horizontal**, hay una autorización que gestionar y un horario de obra que cumplir, y ambos afectan el plazo.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando la remodelación llega hasta el reforzamiento de la estructura ' +
        '—que es su propia modalidad de licencia— el trámite y las exigencias ' +
        'son otros, y están en ' +
        '[reforzamiento estructural: qué exige la norma](/blog/reforzamiento-estructural-y-nsr-10).',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'La segunda frontera, la tributaria, y no coincide con la primera',
    },
    {
      tipo: 'parrafo',
      texto:
        'Hay una regla de IVA propia de la construcción: en un **contrato de ' +
        'construcción de bien inmueble** el impuesto no se liquida sobre el ' +
        'valor total, sino sobre los honorarios del constructor —o sobre su ' +
        'utilidad, si no se pactaron honorarios—. La explico completa, con sus ' +
        'condiciones y su contrapartida, en ' +
        '[cuánto cuesta construir por m² en Colombia](/blog/cuanto-cuesta-construir-por-m2-en-colombia).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que interesa aquí es la pregunta previa: **una remodelación, ¿es un ' +
        'contrato de construcción?** A veces sí y a veces no, y la diferencia ' +
        'no es menor: cuando no lo es, el IVA se liquida sobre el valor total ' +
        'del contrato, materiales y mano de obra incluidos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La administración tributaria lo viene sosteniendo con la misma ' +
        'definición desde 2003. Los contratos de construcción cubren edificar ' +
        'y las obras inherentes a la construcción misma —estructura, ' +
        'mampostería, electricidad, plomería, drenajes—, y expresamente **no ' +
        'cubren** las obras que pueden retirarse fácilmente sin detrimento del ' +
        'inmueble. Sobre la remodelación, el criterio está escrito:',
    },
    {
      tipo: 'cita',
      texto:
        'Es indudable que una cosa es la construcción de una obra y otra la ' +
        'realización de reparaciones, resanes, pinturas y otras labores que ' +
        'atienden a la conservación de la obra ya construida. Las ' +
        'circunstancias de la obra señalarán si no se trata de labores de ' +
        'mantenimiento sino de nuevas construcciones, por ejemplo ampliaciones ' +
        'o transformaciones, realizadas en inmuebles ya construidos.',
      fuente:
        'DIAN, Concepto Unificado de Impuesto sobre las Ventas No. 1 de 2003',
    },
    {
      tipo: 'parrafo',
      texto:
        'Y en 2025 la DIAN lo aplicó a un caso que casi todo el mundo llamaría ' +
        'remodelación: la impermeabilización de fachadas. Su conclusión fue que ' +
        'la base especial **no aplica a los contratos de mantenimiento de ' +
        'bienes inmuebles**, sino únicamente a los de construcción.',
    },
    {
      tipo: 'tabla',
      cabeceras: ['Lo que contrata', 'Cómo se ve tributariamente', 'Base del IVA'],
      filas: [
        [
          'Ampliar, o transformar el inmueble',
          'Contrato de construcción de bien inmueble',
          'Honorarios o utilidad del constructor',
        ],
        [
          'Reparar, resanar, pintar, mantener',
          'Mantenimiento, no construcción',
          'El valor total del contrato',
        ],
        [
          'Comprar algo que además se lo instalan',
          'Venta de bien con instalación',
          'El valor total, venta e instalación',
        ],
        [
          'Divisiones internas retirables en un edificio terminado',
          'No es contrato de construcción',
          'El valor total',
        ],
      ],
      nota:
        'El criterio operativo que la DIAN usa para decidir es si la obra o el ' +
        'bien pueden retirarse fácilmente sin detrimento del inmueble. La ' +
        'propia administración reconoce que es imposible señalar cada caso ' +
        'particular por norma: lo definen las circunstancias de la obra.',
    },
    {
      tipo: 'nota',
      texto:
        'Fíjese en algo que casi nadie nota: **las dos fronteras no coinciden.** ' +
        'Impermeabilizar una fachada es reparación locativa —no pide licencia— ' +
        'y a la vez es mantenimiento —IVA sobre el valor total—. Cambiar redes ' +
        'tampoco pide licencia y sin embargo es obra inherente a la ' +
        'construcción. Preguntar por una y suponer la otra es el origen de ' +
        'buena parte de las sorpresas de facturación en remodelación.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Qué hacer con esto, en la práctica: **pida que la oferta diga cómo va ' +
        'a facturar el IVA y bajo qué figura**, antes de firmar. Dos ofertas ' +
        'que parecen iguales pueden diferir en el impuesto, y el que lo asume ' +
        'es usted.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Por qué aquí tampoco hay una tabla de pesos',
    },
    {
      tipo: 'parrafo',
      texto:
        'En obra nueva no existe un costo por metro cuadrado oficial. En ' +
        'remodelación la situación es peor, y por una razón que se puede ' +
        'explicar sin rodeos: **el componente que más pesa en una remodelación ' +
        'es la demolición y el resane de lo que ya existe, y eso no es función ' +
        'del área sino del estado del inmueble.**',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un baño de tres metros cuadrados en un edificio de 1978, con red de ' +
        'hierro galvanizado y sin planos, y un baño de tres metros cuadrados en ' +
        'un apartamento entregado hace dos años, no son el mismo trabajo ni de ' +
        'lejos. El índice del DANE, que mide variación de precios de insumos y ' +
        'no niveles, tampoco ayuda aquí: sirve para actualizar un presupuesto ' +
        'que ya tiene, no para obtener uno.',
    },
    {
      tipo: 'nota',
      texto:
        'Lo que sí se puede afirmar, y es criterio propio del estudio dicho ' +
        'como criterio: **en remodelación el porcentaje razonable de ' +
        'imprevistos es más alto que en obra nueva, y crece con la antigüedad ' +
        'del inmueble y con la ausencia de planos.** No doy un número porque el ' +
        'número correcto es consecuencia del nivel de información disponible, ' +
        'no una costumbre del gremio.',
    },

    {
      tipo: 'titulo',
      nivel: 2,
      texto: 'Cómo pedir un presupuesto de remodelación que se pueda comparar',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Pida el presupuesto por ambiente**, no por el total de la vivienda. Es la única forma de ver dónde se fue la plata y de recortar sin recortar a ciegas.',
        '**Declare por escrito, ambiente por ambiente, si se mueven puntos hidráulicos o eléctricos.** Es la variable que más separa dos cotizaciones.',
        '**Diga si se mueve algún muro**, y pida que el presupuesto diga si ese muro es portante o no, y quién lo va a determinar.',
        '**Pida las demoliciones y los resanes como partidas propias**, no diluidas dentro de los acabados.',
        '**Pida que la impermeabilización aparezca explícita**, aunque vaya en cero. Un cero declarado es información; una ausencia no.',
        '**Pida que digan qué no incluye**, y si contempla licencia, expensas, levantamiento de planos y diseño estructural.',
        '**Pida los imprevistos, la administración y la utilidad en líneas separadas.** Una oferta que los muestra parece más cara que otra que los diluyó, y casi nunca lo es.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Las partidas que se olvidan sistemáticamente en cualquier presupuesto ' +
        'de obra —y varias aplican también a una remodelación— están en ' +
        '[las doce partidas que todo el mundo olvida al presupuestar](/blog/doce-partidas-que-se-olvidan-al-presupuestar).',
    },

    { tipo: 'titulo', nivel: 2, texto: 'La respuesta corta' },
    {
      tipo: 'lista',
      items: [
        'Se presupuesta por ambiente, no por metro cuadrado de vivienda.',
        'Cambiar redes no requiere licencia; cambiar la distribución interior sí, y tocar la estructura además exige diseño firmado.',
        'Lo que dispara el costo son las redes, la estructura y la impermeabilización, porque obligan a romper y rehacer el acabado que las cubre.',
        'Si es apartamento, primero se resuelve qué es bien común; después se presupuesta.',
        'La frontera tributaria es otra y no coincide: si lo suyo es mantenimiento y no construcción, el IVA va sobre el valor total del contrato.',
        'Y si necesita licencia, el plazo que le corre es de 24 meses, no de 36.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'En Plano Base una remodelación empieza por el estado real de lo ' +
        'construido: qué se puede tumbar, qué aguanta, y qué sale más caro de ' +
        'lo que parece. Con eso encima de la mesa, el presupuesto deja de ser ' +
        'una apuesta.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las definiciones de reparación locativa y de las modalidades de ' +
        'licencia están transcritas literalmente del articulado vigente. Lo ' +
        'que va sin cifra va sin cifra a propósito: depende del inmueble, y ' +
        'este artículo no conoce el suyo.',
    },
  ],
  fuentes: [
    {
      titulo:
        'Decreto 1077 de 2015, artículos 2.2.6.1.1.7 y 2.2.6.1.1.10: modalidades de la licencia de construcción y reparaciones locativas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77216',
      fecha: '2015-05-26',
    },
    {
      titulo:
        'Decreto 1783 de 2021, artículo 27: vigencia de las licencias urbanísticas',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175086',
      fecha: '2021-12-20',
    },
    {
      titulo: 'Ley 810 de 2003, artículo 8: obras que no requieren licencia',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8434',
      fecha: '2003-06-13',
    },
    {
      titulo: 'Ley 675 de 2001, régimen de propiedad horizontal',
      editor: 'Congreso de la República de Colombia',
      url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_0675_2001.html',
      fecha: '2001-08-03',
    },
    {
      titulo:
        'Ley 400 de 1997, artículo 26: quién firma el diseño estructural',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo:
        'Concepto Unificado de Impuesto sobre las Ventas No. 1 de 2003, descriptores 1.3, 1.4 y 9.1: qué es un contrato de construcción y qué es mantenimiento',
      editor: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/concepto_tributario_dian_0000001_2003.htm',
      fecha: '2003-06-19',
    },
    {
      titulo:
        'Concepto DIAN 003524 [int. 415] de 2025: la base gravable especial no aplica a los contratos de mantenimiento de bienes inmuebles',
      editor: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/oficio_dian_3524_2025.htm',
      fecha: '2025-03-25',
    },
    {
      titulo:
        'Concepto DIAN 007526 [int. 869] de 2025: el retiro sin detrimento del inmueble como criterio para identificar un contrato de construcción',
      editor: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/oficio_dian_7526_2025.htm',
      fecha: '2025-06-10',
    },
    {
      titulo:
        'Decreto 1625 de 2016, artículo 1.3.1.7.9: impuesto sobre las ventas en los contratos de construcción de bien inmueble',
      editor: 'Dirección de Impuestos y Aduanas Nacionales (DIAN)',
      url: 'https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1625_2016.htm#1.3.1.7.9',
      fecha: '2016-10-11',
    },
  ],
}
