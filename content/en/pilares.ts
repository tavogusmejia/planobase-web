import type { Pilar } from '@content/pilares'

/**
 * Los diez temas del blog, en inglés.
 *
 * Superposición por `id`. El `slug` no está aquí a propósito: es el segmento de
 * la URL y es el mismo en los dos idiomas, como el de un artículo.
 *
 * Los nombres de las normas y de las instituciones —DANE, POT, Ley 1209— se
 * citan como son y se glosan en media frase cuando el lector de fuera los
 * necesita.
 */
type PilarTraducible = Partial<
  Pick<Pilar, 'nombre' | 'titulo' | 'entrada' | 'metaTitulo' | 'metaDescripcion'>
>

export const pilares: Record<string, PilarTraducible> = {
  costos: {
    nombre: 'Costs',
    titulo: 'What it costs to build',
    entrada:
      'The public figures for cost per square metre contradict each other by ' +
      'a factor of two or three for the same city in the same year. Here we ' +
      'publish our own values, we say they are ours, we show which trades ' +
      'they come from, and we update them each quarter against the DANE ' +
      'construction cost index, citing the bulletin and the date.',
    metaTitulo: 'Construction costs · What it costs to build in Colombia',
    metaDescripcion:
      'What it costs to build per square metre in Colombia, what an architect ' +
      'charges, and the line items people forget when budgeting. Our own ' +
      'figures, dated.',
  },
  tramites: {
    nombre: 'Permits and planning',
    titulo: 'Building permits, curadurías and planning rules',
    entrada:
      'Much of what you read online about building permits in Colombia is out ' +
      'of date, and what corrects it usually stops halfway: a permit for new ' +
      'build has lasted thirty-six months since 2021, but one for an ' +
      'extension or a structural retrofit still lasts twenty-four. Here every ' +
      'figure carries the decree behind it and the date it was checked.',
    metaTitulo: 'Building permits and planning rules in Colombia',
    metaDescripcion:
      'Building permits, the curaduría urbana, the local plan and what you ' +
      'can build on a plot. With the articles of law behind each answer.',
  },
  patologias: {
    nombre: 'Building defects',
    titulo: 'Cracks, leaks and damp',
    entrada:
      'How to read a crack, what separates a harmless one from one that needs ' +
      'an engineer, and what to do before spending on repairs that do not ' +
      'address the cause. With the thresholds from the Colombian technical ' +
      'guidance, which change with the material and are not the one ' +
      'millimetre everyone repeats.',
    metaTitulo: 'Building pathology · Cracks, leaks and damp',
    metaDescripcion:
      'How to tell a dangerous crack from a harmless one, and what to do ' +
      'about leaks and damp. With the official Colombian thresholds.',
  },
  proceso: {
    nombre: 'Process',
    titulo: 'How a project gets made',
    entrada:
      'From the plot to the permit, with real timings. What a concept design ' +
      'is and why it cannot be skipped, what an architect does that a site ' +
      'foreman does not, and what to ask before you sign.',
    metaTitulo: 'The process of an architecture project, step by step',
    metaDescripcion:
      'From the plot to the permit with real timings, what each stage ' +
      'includes, and what to ask before hiring anyone.',
  },
  institucional: {
    nombre: 'Public works',
    titulo: 'Civic buildings and public procurement',
    entrada:
      'How a school is designed, how an architecture competition works from ' +
      'the inside, and what changed in the rules and the standard documents ' +
      'that govern the procurement of social infrastructure. Written from four ' +
      'competition awards, not from theory.',
    metaTitulo: 'Public architecture and procurement in Colombia',
    metaDescripcion:
      'School and civic building design, public architecture competitions, ' +
      'and the standard documents for social infrastructure.',
  },
  casos: {
    nombre: 'Case studies',
    titulo: 'Projects from the inside',
    entrada:
      'Projects from the studio told with the figures a client needs in order ' +
      'to decide: area, client body, programme, form of procurement and what ' +
      'was resolved. This is not the design statement; it is what happened.',
    metaTitulo: 'Project case studies · Plano Base Arquitectos',
    metaDescripcion:
      'Projects from the studio told with area, client body, programme and ' +
      'the decisions that shaped them.',
  },
  local: {
    nombre: 'Where to build',
    titulo: 'Building in each city',
    entrada:
      'The rules change from one municipality to the next, and with them the ' +
      'cost and the programme. What each place demands, which curadurías ' +
      'operate there, how long a permit takes and what makes building more ' +
      'expensive locally.',
    metaTitulo: 'Where to build in Colombia · Rules and costs by city',
    metaDescripcion:
      'What changes when you build in each Colombian city: curadurías, permit ' +
      'timings, local planning rules and cost per square metre.',
  },
  'casa-campestre': {
    nombre: 'Houses and country homes',
    titulo: 'Your own house, and building in the country',
    entrada:
      'Rural land carries harder rules than urban land, and almost nobody ' +
      'knows them before buying the plot. Water, wastewater, access, slope ' +
      'and altitude decide the project long before taste does.',
    metaTitulo: 'Country homes · Design, costs and rules on rural land',
    metaDescripcion:
      'What you can build on rural land, what a country house costs, and what ' +
      'to check before buying the plot.',
  },
  piscinas: {
    nombre: 'Pools and hot tubs',
    titulo: 'Pools, hot tubs and their systems',
    entrada:
      'A pool is mostly what you cannot see: filtration, pumping, heating and ' +
      'the plant room. The person who leads this strand at the studio brings ' +
      'fifteen years designing hydraulic systems and building infinity-edge ' +
      'pools and water features in the Caribbean.',
    metaTitulo: 'Pools and hot tubs · Costs, systems and rules in Colombia',
    metaDescripcion:
      'What a pool costs in Colombia, what each system requires, and what Ley ' +
      '1209 obliges a residents association to do.',
  },
  caribe: {
    nombre: 'On the coast',
    titulo: 'Building by the sea',
    entrada:
      'Salt takes the ironmongery in two years, fresh water is designed ' +
      'before the façade, and every tonne of material arrives by boat and on ' +
      'its date. What building on a Caribbean island demands is what Barú, ' +
      'San Andrés or Santa Marta demand.',
    metaTitulo: 'Building by the sea · Corrosion, water and logistics',
    metaDescripcion:
      'What the sea does to a house: corrosion, fresh water, wind and ' +
      'materials logistics on coastal and island sites.',
  },
}
