import type { TraduccionProyecto } from '@/lib/types'

/**
 * Las memorias del portafolio, en inglés.
 *
 * Vive aquí y no dentro de `content/projects.ts` porque ese archivo lo
 * regenera `pnpm media` a partir de `wix-migration/` y de las imágenes: todo
 * lo que se escribiera a mano allí se perdería en la siguiente pasada. Aquí la
 * traducción es fuente, no derivado.
 *
 * Superposición por `slug`. Las claves tienen que coincidir exactamente con
 * las de `content/projects.ts`: un slug mal escrito no rompe nada, sencillamente
 * hace que el proyecto se sirva en español sin que nadie se entere.
 *
 * El `titulo` casi nunca aparece. «Colegio Pradera El Volcán», «Concurso UVA
 * Orfelinato» o «Alcaldía Local de Santa Fe» son nombres propios de obras y de
 * certámenes colombianos: se citan como son, igual que se cita una ley. Solo se
 * traduce cuando el título es puramente descriptivo y no un nombre. El
 * `subtitulo`, en cambio, sí describe, y por eso sí se traduce, conservando el
 * nombre propio de la institución que lleve dentro.
 *
 * Registro: el español va en «usted» y el inglés no tiene esa distinción. El
 * equivalente es la segunda persona llana, sin contracciones y sin adornos que
 * el original no tenga — el mismo tono que ya sostiene `messages/en.json`.
 * Los nombres de instituciones, barrios y concursos colombianos se dejan como
 * están, con una glosa breve en su primera mención cuando el lector de fuera la
 * necesita. Las cifras son las mismas, con separadores ingleses: 5.023,3 m² se
 * escribe 5,023.3 m².
 */
export const proyectos: Record<string, TraduccionProyecto> = {
  'comedor-universidad-del-valle': {
    subtitulo:
      'Architectural design. Extension of the student dining hall at ' +
      'Universidad del Valle',
    memoria:
      'The extension of Building 389 at Universidad del Valle — Meléndez ' +
      'campus — sets out to increase the capacity of the student dining ' +
      'hall without altering the existing production kitchen, which serves ' +
      'close to 5,000 meals a day. A new dining volume is proposed, seating ' +
      '296 students and connected to the existing Comedor 3 by a bridge ' +
      'space that adds a further 44 places.\n\n' +
      'The new building will also house space for student groups, an area ' +
      'for table tennis and a chess club. This frees the ground floor of ' +
      'Comedor 1 and returns it to its original use. The union offices and ' +
      'those of the staff welfare fund will also be moved to ' +
      'better-appointed spaces.\n\n' +
      'The brief was defined together with the university dining service. ' +
      'It includes 259 m² of controlled-access space as the main dining ' +
      'area and a 226 m² covered balcony with open access, which will work ' +
      'as a dining room at lunchtime and as a study area for the rest of ' +
      'the day, with an integrated café. The proposal gives priority to ' +
      'flexibility, habitability and the wellbeing of the university ' +
      'community.\n\n' +
      'The building will contain space for six student groups, a 90 m² room ' +
      'for the chess club and a 280 m² area for table tennis that can be ' +
      'adapted for events or mixed activities. Toilets, showers and ' +
      'changing rooms are also included.\n\n' +
      'The design uses a steel structure on a 7.20 m module, following the ' +
      'constructional logic of the existing dining hall, shortening the ' +
      'time on site and reducing the disruption to the campus. Outdoor ' +
      'areas are proposed for integration and landscape recovery, and the ' +
      'institutional vegetable garden is relocated, strengthening the ' +
      'university infrastructure and its link with the natural setting.',
  },
  'concurso-5inco-sena-ipiales': {
    subtitulo: 'Competition entry, Concurso 5inco, SENA Ipiales',
    memoria:
      'The new Centro de Formación Sur Colombiano for SENA — the national ' +
      'vocational training service — stands in the municipality of Ipiales, ' +
      'Nariño, and is conceived as a regional technical training facility. ' +
      'Its design answers a rural and productive context, bringing ' +
      'vocational training together with a careful reading of the ' +
      'landscape. The building settles onto the ground organically, ' +
      'following the contours, to give an efficient and accessible ' +
      'infrastructure fitted to its surroundings.\n\n' +
      'The brief is organised into four main teaching blocks: industry, ' +
      'humanities, hospitality and tourism, and agriculture. Each one works ' +
      'fairly autonomously, but all are linked by a large transverse shed ' +
      'that organises the shared areas of the project. This shed gathers ' +
      'the support spaces — auditorium, library, cafeteria, services and ' +
      'administration — and acts as the hinge between the main ' +
      'Ipiales–Aldana road and the farmland at the back of the site.\n\n' +
      'The building has two internal circulation systems: a pedestrian one ' +
      'linking the teaching areas, and a service one allowing direct access ' +
      'for supplies, produce and waste. This operational logic keeps the ' +
      'building quick and flexible in use, and allows efficient logistics ' +
      'for practical training and real production.\n\n' +
      'Formally, the complex takes up the archetype of the agro-industrial ' +
      'shed, recognisable and functional, with a modular, lightweight and ' +
      'economical structure. The blocks rest on stone plinths that recall ' +
      'the legacy of the Qhapaq Ñan, the Andean road system, tying ' +
      'constructional tradition to a technological outlook. The result is a ' +
      'rural training centre with a strong educational, logistical and ' +
      'cultural impact for southern Colombia, one that brings ' +
      'sustainability, relevance and a productive vocation together in a ' +
      'single project.',
  },
  'concurso-5inco-sena-kennedy': {
    subtitulo: 'Competition entry, Concurso 5inco, SENA Kennedy',
    memoria:
      'The project for the new home of the SENA Centro de Formación en ' +
      'Actividad Física y Cultura (CFAFC) in Kennedy, Bogotá, starts from ' +
      'two premises: a clear organisation of the brief and a precise ' +
      'reading of the urban context. The brief is grouped into four main ' +
      'components: sports, cultural, teaching and administrative areas. ' +
      'These uses, with different acoustic and spatial requirements, are ' +
      'stacked vertically in a twelve-storey tower with an efficient ' +
      'layout.\n\n' +
      'The building is structured around a central core of vertical ' +
      'circulation and services, which guarantees a clear connection ' +
      'between the two side blocks: the left wing given over to sport and ' +
      'the right wing to teaching and administration. This arrangement ' +
      'keeps active and quiet uses from interfering with one another and ' +
      'improves the experience for users.\n\n' +
      'The larger cultural spaces sit on the ground floor, where they can ' +
      'connect with the public realm and be used by the neighbourhood. ' +
      'Above them rise the teaching floors, which act as a filter between ' +
      'the high- and low-intensity areas. The swimming pool, on the roof, ' +
      'takes advantage of solar radiation to improve the energy performance ' +
      'of the building.\n\n' +
      'The proposal relates directly to its immediate surroundings: it ' +
      'aligns with the sports building next door (Bodytech) and respects ' +
      'the presence of the adjoining convent through a design that orders ' +
      'the uses by intensity. This vertical route not only guarantees ' +
      'access between spaces, it turns the whole into a reference for ' +
      'sustainable educational architecture. The building works as ' +
      'metropolitan infrastructure with a strong social and cultural ' +
      'impact, bringing technical training, physical activity and civic ' +
      'facilities together in a proposal that answers the real needs of ' +
      'Bogotá and its people.',
  },
  'concurso-colegio-villas-del-progreso': {
    subtitulo: 'Open competition entry, Colegio Villas del Progreso',
    memoria:
      'This project is conceived as an architectural and urban system that ' +
      'ties several scales together: the neighbourhood, the park and the ' +
      'future metropolitan avenue. Its siting follows an 8 x 8 metre grid ' +
      'that allows functional flexibility, adaptation to the topography and ' +
      'construction in phases. This strategy makes it possible to organise ' +
      'the teaching, social and technical spaces modularly, optimising ' +
      'their growth and constructional efficiency.\n\n' +
      'The brief is distributed across two academic bars holding primary, ' +
      'lower secondary and upper secondary, joined by a Social Hub that ' +
      'articulates the relationships between school and community. Spaces ' +
      'such as the dining hall, the auditorium and the library are tied to ' +
      'the immediate surroundings, allowing shared uses and access from the ' +
      'public realm. The school opens onto the Villas del Progreso park, ' +
      'forming a meeting square that reinforces its open and communal ' +
      'character.\n\n' +
      'Towards the future Avenida Tintal, the building steps back to create ' +
      'a civic square, separate entrances and a pedestrian street that ' +
      'improves its fit with the city and avoids conflict with the ' +
      'residential surroundings. The hierarchical massing, the controlled ' +
      'setbacks and the spatial organisation give priority to the ' +
      'relationship between the educational design, the social context and ' +
      'the city.\n\n' +
      '“Colegio Villas del Progreso” shows how school architecture can act ' +
      'as a tool of urban change. It brings together educational ' +
      'infrastructure, public space, urban sustainability, modular ' +
      'architecture and neighbourhood connectivity to produce a setting ' +
      'that is flexible, inclusive and deeply tied to its context.',
  },
  'concurso-uva-orfelinato': {
    subtitulo: 'Open competition entry, UVA Orfelinato',
    memoria:
      'The UVA Orfelinato project — a UVA, or Unidad de Vida Articulada, is ' +
      'one of the small civic and recreational buildings built on the ' +
      'water-tank sites of Colombian cities — redefines what public ' +
      'architecture can be by proposing an infrastructure that not only ' +
      'serves practical purposes but builds a sensitive spatial experience. ' +
      'Through an architectural route connecting three main entrances, the ' +
      'design establishes a direct relationship with the topography, the ' +
      'daylight and what is already on the site, producing a sequence of ' +
      'immersion by means of cuts in the ground, shade and planting.\n\n' +
      'The proposal is organised from a hierarchical reading of the brief: ' +
      'auditoriums and classrooms as the backbone, with further ancillary ' +
      'spaces that allow community uses. Cultural and educational spaces ' +
      'are brought together with publicly accessible areas and interior ' +
      'ones, activating the place with uses such as ICT rooms, internet ' +
      'cafés and small local shops. This strengthens the social dimension ' +
      'of the project and reinforces its value as immersive public space.\n\n' +
      'The landscape criteria start from planting set out on a grid, ' +
      'intended to soften rigid lines as the species grow. This approach to ' +
      'landscape complements a cultural infrastructure that evolves over ' +
      'time, able to become a “useful ruin” as part of the legacy of the ' +
      'city.\n\n' +
      'The project is therefore an example of sustainable urban design and ' +
      'urban renewal that ties the functional to the symbolic. It is a ' +
      'piece that brings tactical urbanism, architectural landscape and ' +
      'community activation together in a single built gesture.',
  },
  'plaza-de-los-libaneses': {
    subtitulo: 'Public space proposal, Plaza de los Libaneses',
    memoria:
      'The Fuente de los Libaneses is a landmark in Cali. It currently ' +
      'stands at the centre of a roundabout in front of the old railway ' +
      'station, a building listed as architectural heritage.\n\n' +
      'The proposal sets out to turn this space, now given over to traffic, ' +
      'into a public space that acts as the forecourt of the station. The ' +
      'fountain remains the central element, and around it extends a large ' +
      'square with areas of landscape, street furniture and small ' +
      'commercial units.\n\n' +
      'The project reorganises the traffic to keep circulation working ' +
      'efficiently while giving priority to people on foot. The result is a ' +
      'space that is safe, accessible and meaningful.\n\n' +
      'The new space sets out to bring forward the historical memory of the ' +
      'city, giving prominence both to the Fuente de los Libaneses and to ' +
      'the railway station, and consolidating a place of encounter that ' +
      'combines heritage, culture and contemporary urban life.',
  },
  'colegio-prospero-pinzon': {
    subtitulo:
      'Architectural design and full consultancy, Colegio Próspero Pinzón',
    memoria:
      'In Kennedy, one of the boroughs of Bogotá, marked by high population ' +
      'density and a need for school buildings, Colegio Próspero Pinzón is ' +
      'designed as a civic and educational facility of real importance.\n\n' +
      'The proposal starts from an open central space that acts as the main ' +
      'square. The entrances and principal routes are organised from it, ' +
      'and it is at the same time a place for meeting, for social exchange ' +
      'and for cultural events. Around this core sit the separate blocks ' +
      'holding the academic and supporting uses — classrooms, library, ' +
      'auditorium, dining halls, administration and services. This modular ' +
      'arrangement gives a clear layout, easy movement and room for future ' +
      'adjustment as the needs of the institution change.\n\n' +
      'The architectural configuration seeks a harmonious fit with the ' +
      'urban context and the topography of the site. A set of controlled ' +
      'and fragmented volumes gives an appropriate scale and produces good ' +
      'open spaces within a dense urban setting.\n\n' +
      'The school is conceived as a complete learning environment, where ' +
      'the building does not merely house activities but encourages ' +
      'academic, artistic and social development, reaching out to the wider ' +
      'community. The flexible construction system allows spaces to change ' +
      'use with the rhythm of the day, making room for lessons, cultural ' +
      'activities, neighbourhood assemblies or school fairs, and ' +
      'strengthening the community role of the institution.\n\n' +
      'With capacity for around 1,400 students and a built area of some ' +
      '8,600 m², the new Colegio Próspero Pinzón becomes a point of ' +
      'reference for Kennedy: a place that guarantees decent learning ' +
      'environments and at the same time offers infrastructure open to the ' +
      'cultural and social life of the area. Colegio Próspero Pinzón is not ' +
      'understood only as a school, but as a point of community cohesion, ' +
      'an urban and pedagogical project that looks to the future.',
  },
  'colegio-francisco-antonio-zea': {
    subtitulo:
      'Architectural design and full consultancy for Colegio Francisco ' +
      'Antonio Zea, formerly Metrovivienda',
    memoria:
      'The school sits on a triangular plot with sloping ground, a ' +
      'condition turned to advantage by organising three volumes that ' +
      'follow the terrain and are linked to one another by half levels and ' +
      'flights of steps.\n\n' +
      'The volumes are placed towards the main road, leaving distance from ' +
      'the neighbouring housing blocks and producing a transition that ' +
      'softens the noise that comes with the teaching and play of a nursery ' +
      'and primary school.\n\n' +
      'The main entrance is resolved at the middle level, where the most ' +
      'public spaces sit: library, laboratory and multi-purpose rooms. The ' +
      'lower level holds the nursery classrooms, in closer contact with the ' +
      'outdoors and the play areas. The upper level holds the primary ' +
      'classrooms, naturally lit and ventilated. The route ends in the ' +
      'double-height dining hall, which opens outwards with a small stepped ' +
      'theatre connected to the sports areas, bringing academic, cultural ' +
      'and recreational activity together. The roof is conceived as a ' +
      'garden that can be walked on, extending the limited open space and ' +
      'offering the school community a further place to gather and unwind.\n\n' +
      'The project therefore answers the conditions of the site precisely, ' +
      'makes the most of its relationship with the context and offers a ' +
      'teaching environment that combines architecture, landscape and ' +
      'community.',
  },
  'alcaldia-local-de-teusaquillo': {
    subtitulo:
      'First prize, open architectural competition for the new Alcaldía ' +
      'Local de Teusaquillo',
    memoria:
      'The Teusaquillo project proposes an architectural intervention that ' +
      'reinterprets institutional architecture from an inclusive and ' +
      'sustainable position, connected to the urban fabric. Conceived as a ' +
      'public house, this building for the Alcaldía de Teusaquillo — the ' +
      'local government offices of one of the boroughs of Bogotá — sets out ' +
      'to represent a new civic character, in dialogue with the changes in ' +
      'the city and the identity of the neighbourhood.\n\n' +
      'In urban terms, the proposal builds a symbolic and functional ' +
      'relationship with the city through a great flight of steps that ' +
      'invites people to walk through the space and make it their own. The ' +
      'ascending route, set out from the eastern edge of the site, stands ' +
      'for a link with the mountains that flank Bogotá, taking up the ' +
      'values of participatory urban design and representative public ' +
      'space.\n\n' +
      'The architectural proposition is resolved in two clearly distinct ' +
      'volumes: a closed plinth that answers the immediate scale of the ' +
      'surroundings, and a light, permeable upper volume resolved with ' +
      'white concrete lattice screens that improve daylight, cross ' +
      'ventilation and thermal insulation. This strategy, together with the ' +
      'sparing use of materials, optimises energy performance and makes the ' +
      'building an example of bioclimatic architecture and of energy ' +
      'efficiency in public buildings.\n\n' +
      'Teusaquillo takes shape as a model of sustainable institutional ' +
      'architecture, one that answers technical and regulatory criteria but ' +
      'also puts the experience of the citizen and respect for the urban ' +
      'setting at its centre.',
  },
  'casa-aguilar': {
    memoria:
      'The project, in Jamundí, Valle del Cauca, sets out to transform an ' +
      'existing country house, extending its spaces and strengthening its ' +
      'relationship with the natural setting. The proposal adds a second ' +
      'level with new social and private uses: a guest bedroom, a cinema ' +
      'room, and a gathering area with an outdoor kitchen and space for a ' +
      'barbecue. These new pieces are tied to a swimming pool and jacuzzi, ' +
      'producing a continuous social circuit between inside and out.\n\n' +
      'The heart of the project is the garden courtyard, around which daily ' +
      'life is organised. All the main spaces open onto it, giving an ' +
      'experience of living centred on the landscape, the light and natural ' +
      'ventilation. The architecture builds this courtyard as a contained, ' +
      'private and versatile space, where rest, recreation and family life ' +
      'come together.\n\n' +
      'The architectural language balances formal restraint with warm ' +
      'materials and careful detail. The proposal reinforces the ' +
      'contemporary character of the house without losing its connection to ' +
      'the rural context, encouraging a comfortable and workable life close ' +
      'to nature.',
  },
  'casa-aguilar-castrillon': {
    subtitulo: 'Proposal, Casa Castrillón',
    memoria:
      'This single-storey family house sits on a generous plot that favours ' +
      'the relationship between architecture, garden and interior comfort. ' +
      'Designed as a high-specification retreat, it brings together ' +
      'generous spaces, fine materials and a residential experience ' +
      'oriented towards privacy, wellbeing and the enjoyment of the ' +
      'setting.\n\n' +
      'The project organises its spaces around a central garden, allowing ' +
      'cross ventilation and daylight in every room. The living areas ' +
      'connect fluidly with the outside: the pool, the outdoor dining area, ' +
      'the barbecue space and the lawn allow a life in the open air without ' +
      'losing domestic privacy. A light structure in steel and timber ' +
      'shelters the terrace and defines a place to gather outdoors. The ' +
      'landscaping accompanies the routes, brings in native planting and ' +
      'strengthens the views towards the natural surroundings.\n\n' +
      'The interior finishes favour light tones, warm textures and a ' +
      'relaxed atmosphere. Every detail seeks comfort, quiet elegance and ' +
      'usefulness, defining a house that reads luxury as spatial quality, ' +
      'formal simplicity and connection with nature.',
  },
  'colegio-bolivar': {
    subtitulo:
      'Invited competition entry for the architectural design of Colegio ' +
      'Bolívar',
    memoria:
      'The project extends the facilities of Colegio Bolívar with a series ' +
      'of volumes placed with landscape in mind, settling into the ground ' +
      'like “piedras cansadas”, the great stones the Andean builders left ' +
      'resting along the road to a building site. The analogy suggests a ' +
      'harmonious relationship with the natural setting, where each ' +
      'building appears to rest in the landscape without imposing itself.\n\n' +
      'The volumes keep a solid and contained image thanks to a permeable ' +
      'skin that links inside to outside, filtering light and producing ' +
      'spatial transitions that enrich the experience of learning. This ' +
      'envelope not only provides protection from the climate, it also ' +
      'reinforces the institutional character of the whole.\n\n' +
      'The spaces open towards the views across the campus and are linked ' +
      'by new circulation structures, forming a network that ties the ' +
      'existing facilities to the new buildings. The proposal seeks an ' +
      'educational architecture consistent with the values of the school: ' +
      'openness, a relationship with the landscape, spatial clarity and ' +
      'usefulness for teaching. The design strengthens the sense of ' +
      'community through visual connections and open routes, where learning ' +
      'extends beyond the classroom into a complete experience for students ' +
      'and teachers.',
  },
  'ied-pompilio-martinez': {
    subtitulo:
      'Open competition entry, concept design stage. New auditorium and ' +
      'cafeteria, IED Cajicá',
    memoria:
      'The proposal is set out as a threshold between the linear park and ' +
      'the town: an active cultural edge, open and permeable. It is not a ' +
      'closed building but a structure that organises the relationships ' +
      'between the urban, the natural and the communal.\n\n' +
      'The architecture takes the form of a system of porticoes that ' +
      'gathers a range of spaces under a sheltered climate. This continuous ' +
      'colonnade allows flexible appropriation, connects the volumes of the ' +
      'brief and multiplies the possible uses: market, fair, stage or open ' +
      'gallery. Walls of rammed earth recall the local landscape and ' +
      'provide thermal mass. The passive strategy guarantees efficiency: ' +
      'cross ventilation, daylight, solar control and the use of local ' +
      'materials.\n\n' +
      'The main volume houses the auditorium; an intermediate one takes the ' +
      'cultural and teaching uses. The cafeteria and the services sit in a ' +
      'lighter linear body. Every room relates to a courtyard that ' +
      'ventilates it, lights it and widens what it can be used for.\n\n' +
      'The urban proposition starts from freeing ground for public space ' +
      'and connecting the central park with the urban fabric. The building, ' +
      'laid out lengthways, allows pedestrian, visual and functional ' +
      'continuity, and stands as cultural infrastructure integrated into ' +
      'the town.',
  },
  'colegio-pradera-el-volcan': {
    subtitulo:
      'Second prize, open competition for the concept design of Colegio ' +
      'Pradera El Volcán',
    memoria:
      'In an area with an educational vocation and a number of metropolitan ' +
      'facilities, Colegio Pradera El Volcán is proposed as a civic ' +
      'infrastructure of considerable impact. The project is structured ' +
      'around a large open central square that organises the entrances, ' +
      'articulates the different functional blocks and becomes a place for ' +
      'meeting and cultural expression.\n\n' +
      'The volumes around this square hold the enclosed uses — library, ' +
      'theatre, classrooms, dining halls, administration and services — and ' +
      'are laid out independently to ease circulation, keep the plan clear ' +
      'and allow future adjustment as the project requires. This strategy ' +
      'not only improves the experience of learning, it also makes the ' +
      'spaces easier to manage and to maintain over time.\n\n' +
      'The massing answers the topography and the built surroundings ' +
      'precisely, through a controlled and fragmented scale. The school is ' +
      'conceived as a learning ecosystem in which physical space ' +
      'strengthens academic, cultural and social development. The ' +
      'architecture does not merely contain activities; it encourages them ' +
      'and extends them into the public realm.\n\n' +
      'The construction system is based on efficiency and adaptability, so ' +
      'that rooms can change through the day and take multiple uses: ' +
      'lessons, cultural activities, community gatherings or school fairs. ' +
      'The proposal recognises the power of educational space as a driver ' +
      'of social change. It does not only build a school, it builds an ' +
      'active community, held together by an urban and pedagogical project ' +
      'with an eye on the future.',
  },
  'espacio-publico-centro-de-cali': {
    titulo: 'Recovering the public space of central Cali',
    subtitulo:
      'Invited competition entry for the recovery of public space in ' +
      'central Cali',
    memoria:
      'An urban proposal that turns the centre of Cali into an active and ' +
      'continuous pedestrian corridor, tying together squares, green strips ' +
      'and public buildings. It redefines public space as an inclusive and ' +
      'sustainable system that strengthens the relationship between people, ' +
      'city and urban landscape.\n\n' +
      'The proposal is an urban intervention that redefines the public ' +
      'space of central Cali as an active, inclusive and sustainable ' +
      'system. Beyond surface renewal, the project restructures the ' +
      'relationships between pedestrian, city and nature, giving priority ' +
      'to collective experience.\n\n' +
      'A linear park is proposed, articulating a new network of pedestrian ' +
      'routes and good places to stay. The design combines native planting, ' +
      'street furniture, active platforms and permeable paving that improve ' +
      'thermal comfort and reduce environmental impact. The formal strategy ' +
      'balances urban integration with architectural value. The existing ' +
      'and proposed buildings produce active frontages, and the system of ' +
      'squares, pavements and green strips improves the connection with the ' +
      'public transport network.\n\n' +
      'The approach combines technical vision with social sensitivity: ' +
      'accessible, safe and varied spaces, designed for meeting, for ' +
      'leisure and for cultural recognition. A key fragment of the city is ' +
      'recovered and returned to its people as a stage for public life and ' +
      'urban change.',
  },
  'colegio-y-teatro-el-ensueno': {
    subtitulo:
      'First prize: national open competition for the concept design of El ' +
      'Ensueño',
    memoria:
      'Urban notes. The project seeks to consolidate a single architectural ' +
      'entity: an austere, clear and recognisable volume, able to last and ' +
      'to offer versatility. Its organisation allows key areas to be made ' +
      'independent for community use, such as the classroom precinct, given ' +
      'over to learning. Taking advantage of a privileged location, the ' +
      'design strengthens the relationships the site suggests. Three zones ' +
      'are defined: singular buildings to the north, a sports centre to the ' +
      'south and the classroom building as the central axis. This ' +
      'arrangement values the residential surroundings and proposes a cross ' +
      'connection between Transversal 70D and the inner park of the ' +
      'neighbourhood.\n\n' +
      'Architectural notes. The building answers a forward-looking ' +
      'educational vision, aimed at placing state education at the highest ' +
      'pedagogical level. Its central idea turns on the “production of ' +
      'knowledge”. Like a factory, the complex organises spaces that are ' +
      'open yet integrated, where theatre, multi-purpose room and library ' +
      'work independently and in concert. The classroom building is set out ' +
      'as the formative core. Its classrooms are arranged around green ' +
      'courtyards, recalling the traditional city blocks with gardens ' +
      'inside them. Each stage of education is conceived as a collective ' +
      'unit which, through this pairing of classroom and courtyard, ' +
      'produces a learning environment that is both autonomous and ' +
      'integrated.\n\n' +
      'Circulation is placed outdoors, in dialogue with the public realm. ' +
      'The integration pavilion articulates the routes, encourages ' +
      'sociability and makes the work of teaching visible. This spatial ' +
      'approach reinforces the cognitive, cultural and community impact of ' +
      'the project.',
  },
  'casa-cultural-las-colinas': {
    titulo:
      'Cultural centre in the Centro Poblado Las Colinas Jaime Pardo Leal',
    subtitulo:
      'Second prize: ideas competition for the architectural design of Casa ' +
      'Cultural Las Colinas',
    memoria:
      'The project for the Casa de la Cultura at the ETCR Jaime Pardo Leal ' +
      '— one of the settlements created under the 2016 peace agreement for ' +
      'the reincorporation of former combatants — starts from a double ' +
      'commitment: to establish a reciprocal relationship between the ' +
      'community and its cultural institutions, and to consolidate a place ' +
      'that gives dignity to its identity in a territory marked by complex ' +
      'relationships between culture, society and nature.\n\n' +
      'The proposal shapes a park that ties together the existing buildings ' +
      '— the school, the library and the cultural centre — along with the ' +
      'self-managed infrastructure of the settlement (water tanks, a wind ' +
      'turbine, solar panels), connected by a network of public space and ' +
      'landscape routes among trees and crops. Local stone is used, giving ' +
      'value to the characteristic landscape of the upper Guiana Shield.\n\n' +
      'The design turns the steep hill into an accessible, horizontal and ' +
      'terraced topography. The park-square receives the settlement and ' +
      'proposes a hybrid public space, contemplative and educational, that ' +
      'takes sustainability, technology and conservation as cultural tools. ' +
      'The building adapts to the line of the road and proposes two ' +
      'entrances: an urban one from the forecourt on the road, and another ' +
      'from within the park. A transept organises the cross circulation ' +
      'between auditorium, museum and classrooms, extending the pedestrian ' +
      'routes in from the surroundings.\n\n' +
      'The Casa de la Cultura is understood as a living place, in constant ' +
      'interaction. Its spatial arrangement allows a range of uses thanks ' +
      'to its flexible configuration: it can work as a lecture hall, an ' +
      'auditorium, a gallery or a community space. This adaptability makes ' +
      'the architecture an active cultural instrument, one that gathers, ' +
      'transforms and projects the knowledge of the territory.',
  },
  'tirreno': {
    subtitulo: 'Tirreno apartment building',
    memoria:
      'Design of a multi-family development for the developer INACAR+. In ' +
      'Pance, Cali (Valle del Cauca), Tirreno is structured around clean ' +
      'and efficient massing made up of two residential towers that give ' +
      'priority to cross ventilation, daylight and views towards the shared ' +
      'areas. Its siting orders the development with clarity and hierarchy, ' +
      'guaranteeing circulation, privacy and a connection with the gardens, ' +
      'the pool and the outdoor terraces.\n\n' +
      'The apartments are laid out to maximise comfort and the relationship ' +
      'with the setting. The façades combine precast elements with ' +
      'continuous windows that give rhythm, transparency and solar ' +
      'protection. With a precise and functional architecture built to a ' +
      'high standard, Tirreno answers the demands of the contemporary user, ' +
      'bringing design, technique and habitability together in a ' +
      'professional and contextual approach.\n\n' +
      'The project reflects the experience of Plano Base in high-quality ' +
      'multi-family housing. Its development combines technical, ' +
      'residential and commercial criteria, aimed at generating value for ' +
      'the user and strengthening the relationship between architectural ' +
      'design and quality of life.',
  },
  'jardin-infantil-los-alamos': {
    subtitulo:
      'Competition entry: innovative and sustainable settings for early ' +
      'years education',
    memoria:
      'Jardín Infantil Los Álamos is conceived as an urban piece with an ' +
      'educational and social vocation, bringing architecture and public ' +
      'space together to produce a setting with pedagogical, emotional and ' +
      'community meaning. On the corner of Carrera 99A and Calle 70, the ' +
      'project consolidates a civic node by tying itself to a future park ' +
      'handed over under planning obligations and to three neighbouring ' +
      'pocket parks, weaving a local network of open and accessible spaces.\n\n' +
      'The building proposes an architecture that is open, flexible and ' +
      'playful. Through half levels, ramps, stairs and slides, the route ' +
      'becomes a continuous experience of play, discovery and learning. The ' +
      'spaces are dynamic and adaptable to teaching needs, so that the ' +
      'setting can be reconfigured by the activity within it. The child ' +
      'transforms the setting through experience, and the garden classroom ' +
      'connects every level as an open, central and communal space. The ' +
      'technical, administrative and service spaces form a defined, ' +
      'functional and workable urban edge. It faces the city and regulates ' +
      'the contact between the adult world outside and the world of the ' +
      'children, which opens visually and functionally towards the park.\n\n' +
      'The project ties regulatory, pedagogical and urban criteria to a ' +
      'precise architectural solution, accessible and attentive to its ' +
      'context. Conceived from a professional and sustainable position with ' +
      'real impact on community life, the nursery makes architecture a tool ' +
      'of social, emotional and educational change.',
  },
  'alcaldia-local-de-santa-fe': {
    subtitulo: 'Proposal for the Alcaldía Local de Santa Fe',
    memoria:
      'The proposal for the Alcaldía Local de Santa Fe — the local ' +
      'government offices of one of the central boroughs of Bogotá — starts ' +
      'from a clear intention: to give dignity to institutional ' +
      'architecture by creating a civic space inside the city block. That ' +
      'space takes shape as a central square that articulates all the uses ' +
      'and defines the public experience of the building.\n\n' +
      'The square works as an open anteroom, a place to gather, to wait or ' +
      'to demonstrate. From there the route leads to the covered forecourt ' +
      'of the alcaldía, an extension of the outdoor space that resolves the ' +
      'transition between street and interior. This architectural gesture ' +
      'not only organises the brief, it builds a new relationship between ' +
      'citizens and their institutions. The building faces this square with ' +
      'transparency and accessibility, making the whole easy to read. At ' +
      'the back of the site, the proposal recognises and frames the listed ' +
      'house next door, tying urban memory to a contemporary intervention.\n\n' +
      'In technical terms, the proposal uses durable and sober materials ' +
      'such as exposed concrete, which offer longevity and protection from ' +
      'the weather. Large rooflights and intermediate courtyards let ' +
      'daylight in and improve the energy performance of the whole. The ' +
      'result is a public architecture that is austere, functional and ' +
      'symbolically strong, one that restores the value of collective life ' +
      'through an open, central and shared space.',
  },
  'teatro-cesar-conto-ferrer': {
    subtitulo: 'Second prize, invited competition: Teatro César Conto Ferrer',
    memoria:
      'The project for the Teatro Conto Ferrer in Quibdó answers the need ' +
      'to replace a theatre in poor condition, proposing a new building ' +
      'that is open, flexible and fitted to local cultural life. The ' +
      'proposal imagines a space beyond the traditional theatre: a living ' +
      'community centre, where the ground floor is set out as a covered ' +
      'square open to everyday use. This space works as a foyer, but also ' +
      'as a gallery, a rehearsal room, a meeting point or a public forum.\n\n' +
      'The main auditorium was conceived as a transformable stage box. Its ' +
      'configuration adapts to different uses: end-stage theatre, cinema, ' +
      'lecture hall, arena, catwalk or experimental space. This widens what ' +
      'can be programmed and allows a range of expressions in a single ' +
      'room. The design puts versatility and continuous use of the building ' +
      'at its centre, thinking not only of what happens on stage but of how ' +
      'the space can fit into daily life in Quibdó. The architecture ' +
      'becomes a support for art, for living together and for urban life, ' +
      'open to being taken up by the people of the city.\n\n' +
      'Visually, the building stands out for an envelope of treated timber ' +
      'with vertical solar-control modules, which gives rhythm and texture ' +
      'to the façade as well as protection from the climate. The ground ' +
      'floor opens towards the commercial and pedestrian surroundings, ' +
      'producing a transparent threshold between the public and the ' +
      'cultural. The compact massing answers the existing urban fabric ' +
      'without losing presence, establishing a clear and active figure in ' +
      'the landscape of the city.',
  },
  'cefe-tunal': {
    subtitulo: 'Competition entry, CEFE Tunal',
    memoria:
      'The proposal for CEFE Tunal — one of the Centros Felicidad, the ' +
      'buildings that bring sport and culture together in the parks of ' +
      'Bogotá — starts from a clear premise: to insert architecture without ' +
      'subtracting nature. The building emerges from the park and extends ' +
      'the green space onto its roof, turning it into a public viewpoint ' +
      'over the mountains and the city.\n\n' +
      'The volume defines an active urban frontage, opening two controlled ' +
      'entrances that connect with an internal pedestrian street. This ' +
      'public corridor works as an open foyer for the cultural and sporting ' +
      'activities, extending the life of the park into the building.\n\n' +
      'The brief is organised in three main bodies: one cultural, one ' +
      'sporting and an intermediate volume that ties the two together with ' +
      'a multi-purpose space for the community. This arrangement guarantees ' +
      'a clear and accessible functional integration for every user.\n\n' +
      'The visualisations reinforce the character of the project: the ' +
      'interior foyer becomes a lively social space, meant for walking, ' +
      'sitting, playing or cycling. The indoor pool stands out for its ' +
      'daylight and its generous scale, which make it a public space of ' +
      'real quality. The cultural volume includes an auditorium, exhibition ' +
      'rooms and flexible classrooms that enrich the cultural life of the ' +
      'area.\n\n' +
      'With a sober and efficient language, the design seeks to sit well ' +
      'with its surroundings, respect the ecological structure and offer an ' +
      'inclusive, open and versatile space. CEFE Tunal does not interrupt ' +
      'the park: it amplifies it, connects it and puts it at the service of ' +
      'the community.',
  },
  'arezzo': {
    subtitulo: 'Arezzo apartment building',
    memoria:
      'Arezzo is a boutique apartment building developed for the developer ' +
      'INACAR+, combining contemporary elegance with practical comfort. ' +
      'This residential project is marked by a clean and slender design ' +
      'that harmonises with its natural and urban setting and offers ' +
      'privileged panoramic views.\n\n' +
      'The architectural design stands out for its pale façades and modern ' +
      'lines, which emphasise the visual and spatial integration with the ' +
      'surrounding landscape. Each apartment has generous, bright and open ' +
      'interiors that guarantee comfort and versatility in the arrangement ' +
      'of rooms. The generous terraces and balconies take a leading part, ' +
      'allowing full enjoyment of the climate and the singular views of the ' +
      'setting.\n\n' +
      'Arezzo offers an exclusive residential experience through carefully ' +
      'planned detail and high-quality materials, answering the need of its ' +
      'residents for privacy and sophistication. The project faithfully ' +
      'reflects the approach of Plano Base, where the balance between ' +
      'design, context and execution comes first. Strategically located to ' +
      'maximise both quiet and urban connectivity, Arezzo suits those who ' +
      'value living in an exclusive and quiet setting, close to important ' +
      'commercial, social and cultural areas. Its architecture makes it a ' +
      'point of reference for contemporary living in the city.',
  },
  'colegio-bicentenario-de-la-independencia': {
    memoria:
      'Colegio Bicentenario de la Independencia is a distinctive ' +
      'architectural proposal in Bogotá D.C., centred on a circular and ' +
      'permeable structure that integrates the architecture with its urban ' +
      'and natural context. The design favours fluid circulation through a ' +
      'central courtyard with oval ramps, wide and accessible, that make ' +
      'movement inclusive.\n\n' +
      'The project highlights the key part institutional initiatives play ' +
      'in building an educational and urban vision for the future. Its ' +
      'outdoor spaces — sports areas, gardens and play areas — encourage ' +
      'meeting and exchange. The continuous façade gives the school a clear ' +
      'and open face towards the community.\n\n' +
      'The oval ramps in the central courtyard, 1.80 metres wide, allow ' +
      'fluid and accessible circulation. Access to the roofs opens up space ' +
      'for play, a vegetable garden and a viewpoint, connecting students to ' +
      'the city around them and extending the areas available to the ' +
      'community.\n\n' +
      'The project embodies the philosophy of Plano Base, balancing ' +
      'innovative design, function and environmental context, creating an ' +
      'educational space that drives new ways of teaching and improves ' +
      'school life through dynamic and participatory settings.',
  },
}
