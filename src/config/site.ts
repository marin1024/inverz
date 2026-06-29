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
    email: 'kontakt@inverz.hr', 
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
   * Web3Forms — slanje kontakt forme bez vlastitog backenda.
   * Otvori web3forms.com, upiši svoj email i potvrdi ga, pa ovdje
   * zalijepi Access Key.
   * Ključ je javan (smije biti u kodu) — vezan je samo na tvoj email.
   */
  web3forms: {
    accessKey: '75c9769b-92ad-48cf-a3f1-51f94b5c9df2',
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Helper: vraća wa.me URL za WhatsApp kontakt. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Helper: Web3Forms endpoint (uvijek isti za sve). */
export function web3formsEndpoint(): string {
  return 'https://api.web3forms.com/submit';
}
