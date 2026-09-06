/**
 * La política de datos, en inglés.
 *
 * **Traducción de cortesía, y hay que decirlo dentro de la propia página.** El
 * documento que obliga es el español: la Ley 1581 de 2012 es colombiana, la
 * autoridad es la Superintendencia de Industria y Comercio y un reclamo se
 * resuelve contra el texto en español. Una traducción que no lo advierta invita
 * a citar la versión equivocada.
 *
 * Los nombres de las normas se dejan en español con su traducción entre
 * paréntesis la primera vez. Traducir «Superintendencia de Industria y
 * Comercio» a secas deja al lector sin el nombre por el que puede buscarla.
 *
 * Se funde sobre `content/legal.ts` por posición de sección, no por clave: las
 * secciones son una lista y la fusión superficial no llega dentro. Por eso el
 * inglés repite la estructura entera en vez de superponerse pieza a pieza — y
 * por eso la guarda comprueba que las dos listas tengan los mismos `id`.
 */
import type { Politica } from '../legal'

export const politicaDatosEn: Politica = {
  titulo: 'Personal data protection policy',
  vigenteDesde: '2026-09-05',
  entrada:
    'This policy explains what personal data Plano Base Arquitectos collects ' +
    'through this site, what it uses them for, how long it keeps them and how ' +
    'you can see them, correct them or ask for them to be deleted. It applies ' +
    'to any data you give us through the contact form, by email or over ' +
    'WhatsApp. This English text is a courtesy translation: the binding ' +
    'document is the Spanish one, because the law that governs it is Colombian.',
  vigenciaTitular: 'In force since',

  secciones: [
    {
      id: 'responsable',
      titulo: 'Who is responsible for your data',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'The data controller is Plano Base Arquitectos S.A.S, based in ' +
            'Cali, Colombia.',
        },
        {
          tipo: 'lista',
          puntos: [
            'Address: Calle 18 # 61-29, Cali, Valle del Cauca, Colombia.',
            'Email: proyectos@planobase.co',
            'Telephone: +57 301 426 4603',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'That same address is the channel for requests, enquiries and ' +
            'complaints about personal data, and the studio’s management ' +
            'handles it.',
        },
      ],
    },

    {
      id: 'datos',
      titulo: 'What we collect',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Only what you write. The site does not buy databases and does not ' +
            'take data from third parties.',
        },
        {
          tipo: 'lista',
          puntos: [
            'Your name.',
            'Your email address.',
            'Your WhatsApp number.',
            'The municipality where your project is and the stage it is at.',
            'The message you write, with whatever you decide to tell us about the project.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'We do not ask for sensitive data in the sense of article 5 of Ley ' +
            '1581 de 2012 —racial or ethnic origin, political views, religious ' +
            'beliefs, health data, biometric data— and we ask that you do not ' +
            'include any in the free-text message. Nor is this form aimed at ' +
            'minors.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Alongside the submission we store an irreversible fingerprint of ' +
            'your IP address, not the address itself. It exists to limit ' +
            'automated submissions and cannot identify you or reconstruct the ' +
            'original address.',
        },
      ],
    },

    {
      id: 'finalidad',
      titulo: 'What we use them for',
      bloques: [
        {
          tipo: 'lista',
          puntos: [
            'To answer your enquiry and, where appropriate, to book a consultation.',
            'To prepare and send you proposals, quotes and project documents.',
            'To stay in touch during the project and to perform the contract if we sign one.',
            'To meet legal, accounting and tax obligations.',
          ],
        },
        {
          tipo: 'parrafo',
          texto:
            'We do not sell or transfer your data. We do not use them to send ' +
            'you third-party advertising. If we ever wanted to use them for a ' +
            'purpose other than those above, we would ask for a fresh ' +
            'authorisation first.',
        },
      ],
    },

    {
      id: 'autorizacion',
      titulo: 'Your authorisation',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Processing requires your prior, express and informed ' +
            'authorisation. You give it by ticking the corresponding box ' +
            'before sending the form, and we keep a record of it alongside ' +
            'your message.',
        },
        {
          tipo: 'parrafo',
          texto:
            'The authorisation is voluntary. You can withdraw it at any time ' +
            'by writing to proyectos@planobase.co, at no cost to you.',
        },
      ],
    },

    {
      id: 'derechos',
      titulo: 'Your rights',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'As the owner of the data, article 8 of Ley 1581 de 2012 gives you ' +
            'these rights:',
        },
        {
          tipo: 'lista',
          puntos: [
            'To know, update and correct your personal data.',
            'To ask for proof of the authorisation you gave us.',
            'To be told what use we have made of your data.',
            'To complain to the Superintendencia de Industria y Comercio (the Colombian data protection authority) about breaches of the law.',
            'To withdraw your authorisation or ask for your data to be deleted, where no legal or contractual duty requires us to keep them.',
            'To access your data free of charge.',
          ],
        },
      ],
    },

    {
      id: 'procedimiento',
      titulo: 'How to exercise them',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'Write to proyectos@planobase.co giving your name, the data you ' +
            'are referring to and what you are asking for. No particular form ' +
            'or intermediary is needed.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Enquiries are answered within a maximum of ten working days. If ' +
            'that is not possible, we will tell you why and when it will be ' +
            'dealt with, which will be no more than five working days later.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Complaints are answered within a maximum of fifteen working days. ' +
            'If a complaint arrives incomplete, we will ask you to complete it ' +
            'within five days of receiving it; if two months pass with no reply ' +
            'from you, it will be taken as withdrawn. If we cannot resolve it ' +
            'within fifteen working days, we will tell you, and the deadline ' +
            'will be no more than eight working days later.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Before complaining to the Superintendencia de Industria y ' +
            'Comercio, the law requires you to have gone through the enquiry or ' +
            'complaint procedure with us first. We say so because it saves you ' +
            'a step, not to put an obstacle in your way.',
        },
      ],
    },

    {
      id: 'conservacion',
      titulo: 'How long we keep them',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'We keep your data for as long as our relationship with you lasts ' +
            'and, afterwards, for **ten years**, which is how long Colombian ' +
            'commercial law requires a trader to keep its books and papers. ' +
            'Once that period is over, they are deleted.',
        },
        {
          tipo: 'parrafo',
          texto:
            'That period is not a floor we keep just in case: it is the one ' +
            'that already obliges us to keep the project’s accounts. We do not ' +
            'keep anything for longer than necessary, because Ley 1581 de 2012 ' +
            'does not allow it.',
        },
        {
          tipo: 'parrafo',
          texto:
            '**And at any time, if you ask us to, we delete them** — except for ' +
            'whatever a legal duty requires us to keep, and in that case we ' +
            'will tell you and explain which duty it is. If you wrote to us and ' +
            'we never ended up working together, nothing obliges us: they are ' +
            'deleted, and that is that.',
        },
      ],
    },

    {
      id: 'terceros',
      titulo: 'Who else sees them',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'We use service providers that process the data on our behalf and ' +
            'on our instructions, not for their own purposes: the site’s ' +
            'hosting, the database where messages are stored and the service ' +
            'that sends our email. Some of them process the information outside ' +
            'Colombia.',
        },
        {
          tipo: 'parrafo',
          texto:
            'Beyond that, your data do not leave the studio, except at the ' +
            'request of a competent authority.',
        },
      ],
    },

    {
      id: 'medicion',
      titulo: 'Measurement and advertising',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'The site may use third-party measurement and advertising tools to ' +
            'find out which adverts bring visitors. Those tools only load if ' +
            'you accept them in the notice that appears the first time you ' +
            'visit; if you do not accept, the site works just the same and none ' +
            'of them loads.',
        },
        {
          tipo: 'parrafo',
          texto: 'You can change your mind at any time from the link in the footer.',
        },
      ],
    },

    {
      id: 'cambios',
      titulo: 'Changes to this policy',
      bloques: [
        {
          tipo: 'parrafo',
          texto:
            'If we change this policy, we will publish the new version here ' +
            'with its date. Where the change affects the purpose of the ' +
            'processing, we will tell you before applying it and ask for your ' +
            'authorisation again if needed.',
        },
      ],
    },
  ],
}
