/* INVERZ — i18n helpers.
   - Lang tip (literal union 'hr' | 'en').
   - Defaultni jezik (HR).
   - Funkcija t(lang) vraća dictionary za taj jezik.
   - Funkcija altLangUrl mapira trenutni URL na verziju u drugom jeziku. */

import hr from './hr';
import en from './en';
import type { Dict } from './hr';

export const languages = { hr, en } as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'hr';

export function t(lang: Lang): Dict {
  return languages[lang];
}

/**
 * Vraća URL koji odgovara istom konceptu stranice u drugom jeziku.
 *
 * Routing mapping:
 *   HR `/`                    ↔ EN `/en/`
 *   HR `/objave`              ↔ EN `/en/posts`
 *   HR `/objave/<slug>`       ↔ EN `/en/posts/<pairSlug>`  (ako postoji)
 *
 * Ako pairSlug ne postoji za pojedinačnu objavu, padamo na listu objava
 * (umjesto na 404).
 *
 * Funkcija prima trenutni pathname kakav daje `Astro.url.pathname`
 * (uvijek započinje s '/').
 */
export function altLangUrl(
  currentLang: Lang,
  pathname: string,
  opts?: { pairSlug?: string }
): string {
  const target: Lang = currentLang === 'hr' ? 'en' : 'hr';

  // skidamo trailing slash radi konzistentnih usporedbi (osim za root)
  const path = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;

  // ---- iz HR-a u EN ----------------------------------------------
  if (currentLang === 'hr') {
    if (path === '/') return '/en/';
    if (path === '/objave') return '/en/posts/';
    if (path.startsWith('/objave/')) {
      return opts?.pairSlug ? `/en/posts/${opts.pairSlug}/` : '/en/posts/';
    }
    if (path.startsWith('/projekti/')) {
      // nema liste projekata — bez para padamo na homepage sekciju
      return opts?.pairSlug ? `/en/projects/${opts.pairSlug}/` : '/en/#projekti';
    }
    // fallback — bilo koja druga stranica
    return '/en/';
  }

  // ---- iz EN-a u HR ----------------------------------------------
  if (path === '/en' || path === '/en/') return '/';
  if (path === '/en/posts') return '/objave/';
  if (path.startsWith('/en/posts/')) {
    return opts?.pairSlug ? `/objave/${opts.pairSlug}/` : '/objave/';
  }
  if (path.startsWith('/en/projects/')) {
    return opts?.pairSlug ? `/projekti/${opts.pairSlug}/` : '/#projekti';
  }
  return '/';

  // (target je definiran samo radi čitljivosti; nije korišten u logici)
  void target;
}

/** Kratak helper: vrati ključ jezika koji NIJE current. */
export function otherLang(lang: Lang): Lang {
  return lang === 'hr' ? 'en' : 'hr';
}
