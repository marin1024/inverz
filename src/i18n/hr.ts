/* INVERZ — HRVATSKI prijevodi.
   Sav tekst za HR verziju stranice ide ovdje.
   Ako dodaš ključ ovdje, mora postojati i u en.ts (TS će prijaviti grešku). */

const hr = {
  meta: {
    title: 'INVERZ — Web-stranice, Google oglasi i analiza za obrte i male tvrtke',
    description:
      'INVERZ izrađuje web-stranice, postavlja Google oglase i analizira web-prisutnost za obrte i male tvrtke u Hrvatskoj.',
  },

  nav: {
    services: 'Usluge',
    projects: 'Projekti',
    posts: 'Objave',
    contact: 'Kontakt',
    home: 'Početna',
  },

  hero: {
    eyebrow: 'INVERZ',
    title: 'Web-prisutnost koja radi za vašu firmu.',
    sub: 'Izrada web-stranica, Google oglasi, analiza prisutnosti i sustavi po mjeri za obrte i male tvrtke.',
    cta: 'Zatražite besplatnu kratku analizu vaše stranice',
  },

  services: {
    eyebrow: '01 · Usluge',
    title: 'Što vam možemo pomoći riješiti',
    sub: 'Kliknite usluge koje vas zanimaju — automatski će se prenijeti u upit pri kraju stranice.',
    cta: 'Pošaljite upit',
    items: {
      audit: {
        title: 'Analiza web-prisutnosti',
        desc: 'Pregled vidljivosti, brzine i mobilnog prikaza vaše stranice s konkretnim preporukama.',
      },
      web: {
        title: 'Izrada web-stranica',
        desc: 'Brze, čiste, mobilne stranice — bez nepotrebnih opterećenja popularnih platformi.',
      },
      ads: {
        title: 'Google oglasi',
        desc: 'Postavljanje i vođenje oglasa s mjerenjem stvarnih upita i poziva, ne samo klikova.',
      },
      systems: {
        title: 'Sustavi po mjeri',
        desc: 'Internet trgovina, sustav članstva, prijave, kontakt forme — što god posao traži.',
      },
    },
    selectedAria: 'Odabrano',
    clickToToggleHint: 'Kliknite za odabir · ponovni klik poništava.',
  },

  how: {
    eyebrow: '02 · Pristup',
    title: 'Kako radimo',
    sub: 'Ne prodajemo samo stranicu — prodajemo mjerljiv rezultat.',
    steps: [
      {
        num: '01',
        title: 'Analiziramo',
        desc: 'Pregledamo vašu trenutnu prisutnost — što radi, što ne i gdje se gube prilike.',
      },
      {
        num: '02',
        title: 'Predlažemo',
        desc: 'Dobivate jasan prijedlog koraka, znate što svaki donosi i koliko košta.',
      },
      {
        num: '03',
        title: 'Gradimo i mjerimo',
        desc: 'Izvedemo i mjerimo rezultat — upiti, pozivi, posjete. Brojke, ne dojam.',
      },
    ],
  },

  projects: {
    eyebrow: '03 · Projekti',
    title: 'Radovi',
    sub: 'Pregled odabranih projekata iz našeg portfelja.',
    viewProject: 'Detalji projekta',
    backToList: '← Projekti',
  },

  postsSection: {
    eyebrow: '04 · Objave',
    title: 'Iz radne sveske',
    sub: 'Praktične bilješke i upute, bez žargona.',
    viewAll: 'Sve objave',
  },

  postsPage: {
    title: 'Objave',
    sub: 'Praktične bilješke o webu, oglasima i mjerenjima.',
    filterLabel: 'Kategorija',
    sortLabel: 'Sortiranje',
    sortNewest: 'Najnovije',
    sortOldest: 'Najstarije',
    all: 'Sve kategorije',
    empty: 'Nema objava u ovoj kategoriji.',
    backToList: '← Sve objave',
    publishedOn: 'Objavljeno',
    readingTime: 'min čitanja',
    metaCategory: 'Kategorija',
  },

  contact: {
    eyebrow: '04 · Kontakt',
    title: 'Razgovarajmo',
    sub: 'Pošaljite kratki upit — javljamo se unutar jednog radnog dana.',
    selectedTitle: 'Zanima vas:',
    selectedEmpty: 'Niste označili usluge — slobodno samo napišite poruku.',
    selectedClear: 'Očisti odabir',
    fields: {
      name: 'Ime i prezime',
      email: 'Email',
      message: 'Poruka',
      submit: 'Pošalji upit',
      sending: 'Šaljem…',
    },
    success: 'Hvala — primili smo vaš upit. Javljamo se uskoro.',
    error: 'Slanje nije uspjelo. Pokušajte ponovno ili javite se direktno na email.',
    or: 'ili',
    altContact: 'pošaljite poruku direktno',
  },

  footer: {
    tagline: 'Web koji radi za male tvrtke i obrte.',
    company: 'Tvrtka',
    legal: 'Pravno',
    contact: 'Kontakt',
    oibLabel: 'OIB',
    rights: 'Sva prava pridržana.',
  },

  langSwitcher: {
    label: 'Jezik',
    hr: 'HR',
    en: 'EN',
    switchTo: 'Prebaci na engleski',
  },

  ariaSkipToContent: 'Preskoči na sadržaj',
};

export default hr;
export type Dict = typeof hr;
