/* =============================================================
   INVERZ — siteConfig
   Centralna konfiguracija: kontakt podaci, podaci tvrtke,
   Formspree ID. Sve placeholder vrijednosti — RUČNO ZAMIJENI.
   ============================================================= */

export const siteConfig = {
  /**
   * Brand i osnovni meta.
   */
  brand: 'INVERZ',
  url: 'https://inverz.hr', // ZAMIJENI s pravom domenom kad bude registrirana

  /**
   * Kontakt — koristi se na footeru i u kontakt formi.
   * WhatsApp broj NE smije imati razmake, plus ni nule — samo znamenke
   * (npr. '385991234567'). Generira link na obliku https://wa.me/385991234567.
   */
  contact: {
    email: 'marinsmoljan7@gmail.com',     // privremeni osobni mail — zamijeni službenim mailom firme kad bude
    phone: '+385 95 834 6176',            // prikazna verzija (s razmacima)
    phoneRaw: '+385958346176',            // za tel: link (bez razmaka)
    whatsapp: '385958346176',             // za wa.me (bez plusa i razmaka)
  },

  /**
   * Pravni i administrativni podaci tvrtke — koriste se u footeru.
   */
  company: {
    legalName: 'INVERZ d.o.o.',           
    oib:       '25571364188',             
    address:   'Put Vrhovina 8, 23212, Tkon, Hrvatska',
  },

  /**
   * Formspree — slanje kontakt forme bez vlastitog backenda.
   * Otvori račun na formspree.io, kreiraj formu i ovdje upiši ID
   * iz njihove POST URL adrese: https://formspree.io/f/{ID}.
   */
  formspree: {
    id: 'mykvvykd',              // PLACEHOLDER — ZAMIJENI
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Helper: vraća wa.me URL za WhatsApp kontakt. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Helper: vraća puni Formspree endpoint. */
export function formspreeEndpoint(): string {
  return `https://formspree.io/f/${siteConfig.formspree.id}`;
}
