import type { Post } from '@/lib/types'

/**
 * Perenne del pilar de proceso, y de las que más se guardan y se comparten:
 * es una lista que alguien abre justo antes de tomar una decisión cara.
 *
 * Cada pregunta se apoya en algo verificado —la reserva de firmas de la Ley
 * 400, la garantía decenal de la Ley 1796, los plazos del Decreto 1077, las
 * modalidades de contratación del Decreto 2090—, de modo que no es una lista
 * de opiniones sino de consecuencias.
 *
 * Fechada en abril de 2024.
 */
export const post: Post = {
  slug: 'diez-preguntas-antes-de-firmar-con-un-constructor',
  titulo: 'Diez preguntas antes de firmar con un constructor',
  pilar: 'proceso',
  fecha: '2024-04-09',
  actualizado: null,
  autor: 'Gustavo Mejía Martínez',
  resumen:
    'No son preguntas de desconfianza: son las diez cuya respuesta cambia lo ' +
    'que usted va a pagar, lo que va a recibir y a quién le puede reclamar si ' +
    'algo sale mal. Con lo que debería contestar cada una.',
  metaDescripcion:
    'Las diez preguntas que hay que hacerle a un constructor antes de firmar, ' +
    'y qué debería responder cada una.',
  puerta: 'interventoria-y-direccion-de-obra',
  etiquetas: ['nacional', 'propietario', 'contrato', 'costos'],
  portada: null,
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'Casi nadie hace estas preguntas, y no es por descuido: es que uno no ' +
        'sabe qué preguntar cuando no conoce el oficio. Estas diez cubren ' +
        'prácticamente todo lo que después se convierte en problema.',
    },
    {
      tipo: 'parrafo',
      texto:
        'No son preguntas de desconfianza. Un buen constructor las responde en ' +
        'diez minutos y sin incomodarse — de hecho, **agradece al cliente que ' +
        'sabe qué está contratando**, porque es el que después no cambia de ' +
        'opinión a mitad de obra.',
    },

    { tipo: 'titulo', nivel: 2, texto: '1. ¿Quién firma los planos estructurales y el estudio de suelos?' },
    {
      tipo: 'parrafo',
      texto:
        '**Debería responder: un ingeniero civil, y darle el nombre.** La ley ' +
        'reserva esas dos firmas al ingeniero civil, y quien firma responde ' +
        'legalmente. Si la respuesta es «eso lo hacemos nosotros» sin nombrar a ' +
        'nadie, o «yo le consigo quién firme», eso último es una práctica ' +
        'expresamente prohibida.',
    },

    { tipo: 'titulo', nivel: 2, texto: '2. ¿El precio es fijo, por administración o por capítulos?' },
    {
      tipo: 'parrafo',
      texto:
        'Las tres son legítimas y la diferencia está en **quién asume el ' +
        'sobrecosto**:',
    },
    {
      tipo: 'lista',
      items: [
        '**Precio fijo:** lo asume el constructor, y por eso lo incluye en el precio.',
        '**Administración delegada:** lo asume usted, y a cambio ve las facturas. Ojo con el incentivo: si el honorario es un porcentaje del costo, quien administra gana más cuando la obra cuesta más.',
        '**Por capítulos:** lo asume usted, y además la coordinación entre contratistas.',
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Lo que no debería pasar es que nadie sepa decirle cuál de las tres es.',
    },

    { tipo: 'titulo', nivel: 2, texto: '3. ¿Qué NO incluye el precio?' },
    {
      tipo: 'parrafo',
      texto:
        'Es más útil que preguntar qué incluye. **Debería nombrarle sin dudar** ' +
        'el estudio de suelos, los diseños técnicos, las expensas de curaduría, ' +
        'el impuesto de delineación, las conexiones de servicios y los ' +
        'imprevistos.',
    },
    {
      tipo: 'nota',
      texto:
        'Un precio muy por debajo de los demás casi siempre sale de omitir ' +
        'partidas, no de ser más eficiente. Y las partidas omitidas hay que ' +
        'pagarlas igual, más tarde y sin haberlas presupuestado.',
    },

    { tipo: 'titulo', nivel: 2, texto: '4. ¿Cómo se manejan las mayores cantidades de obra?' },
    {
      tipo: 'parrafo',
      texto:
        'Es la pregunta que más plata ahorra y casi nadie hace. En toda obra ' +
        'aparecen cantidades que no estaban previstas. Lo que hay que pactar ' +
        'antes es **quién las aprueba, con qué precio unitario y con qué ' +
        'documento**.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Sin esa regla, cada mayor cantidad es una negociación con usted en ' +
        'desventaja, porque la obra ya está empezada.',
    },

    { tipo: 'titulo', nivel: 2, texto: '5. ¿Cuál es el cronograma, y qué pasa si se incumple?' },
    {
      tipo: 'parrafo',
      texto:
        'Un cronograma sin consecuencia es una intención. Debe haber fechas, ' +
        'hitos verificables y una consecuencia pactada por el atraso ' +
        'imputable al constructor. Y también al contrario: qué pasa si el ' +
        'atraso es suyo por no decidir a tiempo.',
    },

    { tipo: 'titulo', nivel: 2, texto: '6. ¿Quién dirige la obra, y está todos los días?' },
    {
      tipo: 'parrafo',
      texto:
        'No es lo mismo el que le cotiza que el que va a estar. Pregunte el ' +
        'nombre de quien dirige, con qué frecuencia va, y quién decide cuando ' +
        'no está.',
    },
    {
      tipo: 'nota',
      texto:
        'Y no confunda dirección de obra con supervisión del arquitecto. El ' +
        'arquitecto cuida que lo construido se parezca a su proyecto; la ' +
        'dirección técnica es otro trabajo, de tiempo completo.',
    },

    { tipo: 'titulo', nivel: 2, texto: '7. ¿Cómo se controlan la calidad y los materiales?' },
    {
      tipo: 'parrafo',
      texto:
        'Debería mencionarle **ensayos de laboratorio**: resistencia del ' +
        'concreto, compactación del terreno, calidad del acero. Y quién los ' +
        'paga y quién guarda los resultados.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Pregunte también si los materiales especificados se pueden sustituir, ' +
        'y quién autoriza la sustitución. En obra siempre se sustituye algo; la ' +
        'diferencia es si usted se entera antes o después.',
    },

    { tipo: 'titulo', nivel: 2, texto: '8. ¿Con qué pólizas cuenta?' },
    {
      tipo: 'parrafo',
      texto:
        'Cumplimiento, estabilidad de la obra, salarios y prestaciones, y ' +
        'responsabilidad civil extracontractual. Pida copia, no la mención.',
    },
    {
      tipo: 'nota',
      texto:
        'La de **salarios y prestaciones** es la que más se olvida y la que más ' +
        'duele: si el constructor no paga la seguridad social de sus ' +
        'trabajadores y alguien se accidenta en su obra, el problema no se ' +
        'queda en él.',
    },

    { tipo: 'titulo', nivel: 2, texto: '9. ¿Qué garantía da, y desde cuándo cuenta?' },
    {
      tipo: 'parrafo',
      texto:
        'En vivienda nueva de cinco o más unidades, el constructor o el ' +
        'vendedor debe cubrir los perjuicios patrimoniales durante **diez años ' +
        'contados desde el certificado técnico de ocupación** — no desde la ' +
        'escritura ni desde la entrega de llaves. Aplica a proyectos con ' +
        'licencia radicada después de julio de 2016.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para una casa unifamiliar contratada directamente, la garantía es la ' +
        'que se pacte. **Si no se pacta, no existe.**',
    },

    { tipo: 'titulo', nivel: 2, texto: '10. ¿Puedo hablar con dos clientes suyos de hace tres años?' },
    {
      tipo: 'parrafo',
      texto:
        'De hace tres años, no del último. Las obras recién entregadas se ven ' +
        'bien todas. **Lo que se quiere saber es cómo respondió cuando ' +
        'apareció un problema después de entregar**, que es cuando ya no hay ' +
        'plata de por medio y solo queda la seriedad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un constructor con historia da esos nombres sin pensarlo. La ' +
        'incomodidad ante esta pregunta es, con diferencia, la señal más ' +
        'informativa de las diez.',
    },

    { tipo: 'titulo', nivel: 2, texto: 'Y una cosa que no es pregunta' },
    {
      tipo: 'parrafo',
      texto:
        'Todo lo anterior tiene que quedar **por escrito**. Alcance, precio, ' +
        'modalidad, cronograma, mayores cantidades, calidad, pólizas, garantía. ' +
        'No hace falta un contrato de veinte páginas; hacen falta esas ocho ' +
        'cosas escritas y firmadas.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La resistencia a poner algo por escrito, de cualquiera de las dos ' +
        'partes, dice más que cualquier referencia.',
    },
  ],
  fuentes: [
    {
      titulo: 'Ley 400 de 1997, artículo 26: quién puede firmar cada diseño',
      editor: 'Ministerio de Ambiente, Vivienda y Desarrollo Territorial',
      url: 'https://www.minambiente.gov.co/wp-content/uploads/2021/08/ley-400-1997.pdf',
      fecha: '1997-08-19',
    },
    {
      titulo: 'Ley 1796 de 2016, artículo 8: amparo de perjuicios patrimoniales por diez años',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78234',
      fecha: '2016-07-13',
    },
    {
      titulo: 'Decreto 2090 de 1989, modalidades de contratación de obra',
      editor: 'Departamento Administrativo de la Función Pública',
      url: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27983',
      fecha: '1989-09-13',
    },
  ],
}
