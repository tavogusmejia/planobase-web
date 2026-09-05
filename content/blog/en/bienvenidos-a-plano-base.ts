import type { TraduccionPost } from '@/lib/types'

/**
 * Traducción de «Bienvenidos a Plano Base», la entrada fundacional del blog,
 * de octubre de 2022 y la única que venía de Wix.
 *
 * **No es una nota técnica y no se traduce como si lo fuera.** Es la
 * presentación del estudio, escrita en primera persona por Eduardo, y es la
 * pieza con más voz de todo el blog: la digresión, el guion largo que
 * interrumpe la frase, el «spoiler alert», la enumeración que se entusiasma
 * —belleza y forma, luz, lo tectónico y estereotómico— y el remate en dos
 * frases cortas. Todo eso sobrevive. El riesgo aquí no es la fidelidad al
 * dato, que no tiene ninguno: es aplanarla hasta que suene a manual, y por eso
 * el inglés conserva la primera persona, el ritmo largo de las frases y la
 * ironía del párrafo de las ventas.
 *
 * Tres decisiones concretas:
 *
 * 1. **«Plano Base» y «Plano Base Arquitectos» no se traducen.** Es el nombre
 *    del estudio, y el artículo promete contar de dónde viene: traducirlo
 *    dejaría esa promesa sin objeto.
 * 2. **«TODO SON VENTAS» se traduce.** Es una cita de la publicidad que el
 *    autor está citando con sorna, no un nombre propio; en inglés tiene que
 *    poder leerse la sorna. Las comillas angulares del español pasan a las
 *    rectas que usa el resto del corpus inglés.
 * 3. **«pospandemia» se abre a "after the pandemic".** En español es una
 *    palabra y en inglés no la hay; comprimirla en un adjetivo la volvería
 *    jerga de consultoría, que es justo lo contrario de esta voz.
 *
 * El alternativo de la portada se traduce; la portada es la misma. Y no se
 * añade ni un dato: el artículo no cita ninguna fuente y no se le pone
 * ninguna.
 */
export const traduccion: TraduccionPost = {
  slug: 'bienvenidos-a-plano-base',
  titulo: 'Welcome to Plano Base',
  traducido: '2026-09-05',
  portadaAlt: 'Plan of the cultural centre in Guaviare, a drawing of the project.',
  resumen:
    'Why Plano Base exists: building a business out of architecture, after ' +
    'the pandemic, with one concrete mission — to add value on every ' +
    'project, whatever its scale.',
  metaDescripcion:
    'Why Plano Base Arquitectos came about: building a business out of ' +
    'architecture after the pandemic, and the mission of adding value on ' +
    'every project.',
  cuerpo: [
    {
      tipo: 'parrafo',
      texto:
        'There comes a moment in an architect’s life when several things ' +
        'converge and push you towards the hard business of starting a ' +
        'company of your own. That moment came to me a good while ago; this ' +
        'is my second attempt.',
    },
    {
      tipo: 'parrafo',
      texto:
        'It is hard not only for the stress of having to step out of the ' +
        'creative plane where I would rather stay, but also because it is ' +
        'like having a child — spoiler alert — it asks for care, for a great ' +
        'deal of work, a great deal of investment, a great deal of patience ' +
        'and, of course, a great deal of love.',
    },
    {
      tipo: 'parrafo',
      texto:
        'I have been at this profession for 10 years, and for some 8 of them ' +
        'I have been trying to build a company and make it work — because ' +
        'within how hard it is to have a company, the easy part is starting ' +
        'it, and the genuinely hard part is making it pay. Plano Base ' +
        'Arquitectos was born into the difficulty the COVID-19 pandemic ' +
        'brought with it; it was born with no projects, which is to say it ' +
        'was born as a project in itself, a piece of work to be developed ' +
        'over time. Even so it was born with the conviction of doing things ' +
        'properly, facing up to the responsibilities that come with deciding ' +
        'to strike out on your own. And that is what it is, striking out: ' +
        'looking for a way to sell architecture to people, because as the ' +
        'adverts for online mentors that Instagram throws at you every 2 or 3 ' +
        'reels put it… "IT IS ALL SALES". However romantic we might like to ' +
        'be about our profession — the one about creating beauty and form, ' +
        'about building spaces out of light, about evoking and provoking, ' +
        'about the tectonic and the stereotomic — in the end you need a ' +
        'client who buys what you are selling, which is a service, but also a ' +
        'product, tangible and intangible at once.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Of course this trade is not cheap. Thinking out an inexpensive ' +
        'building calls for the most precise architecture there is, and that ' +
        'keeps the pool of possible clients who engage architectural services ' +
        'narrower, above all in an economy like the Colombian one, where ' +
        'architecture has historically been seen as something superfluous ' +
        'rather than as something fundamental to developing any kind of space ' +
        'that a human being is going to inhabit in some way.',
    },
    {
      tipo: 'parrafo',
      texto:
        'I believe architecture is not only indispensable for building ' +
        'habitable spaces: it also has a mission of the greatest importance, ' +
        'which is to add value.',
    },
    {
      tipo: 'parrafo',
      texto:
        'A house is worth more if it was designed with care by an architect, ' +
        'and worth more again if that architect is well known. The value ' +
        'added is, to begin with, the technical command and the foresight the ' +
        'designing architect brings; it is also the expression of that ' +
        'architect’s thinking, as a painting or a sculpture is for an artist, ' +
        'and, like any work of art, it is an asset that will never lose its ' +
        'value if it is properly looked after.',
    },
    {
      tipo: 'parrafo',
      texto:
        'That is what we architects do: we add value. And that is the mission ' +
        'of Plano Base — to bring together enterprising, creative, visionary ' +
        'and committed minds so as to make sure we add value on every project.',
    },
    {
      tipo: 'parrafo',
      texto:
        'As that mission goes on, I will be telling you where the road of ' +
        'this venture takes us — a venture that has been maturing since 2020 ' +
        'and is only now beginning to take on form and substance. I will also ' +
        'be telling you how we got here, and why the name; I will tell you ' +
        'about our methods and our processes, because we also want people to ' +
        'understand everything that goes into making architecture, after the ' +
        'pandemic, starting from nothing.',
    },
    {
      tipo: 'parrafo',
      texto: 'Welcome to this blog. Welcome to Plano Base Arquitectos.',
    },
  ],
}
