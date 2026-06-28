import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Statična stranica za Cloudflare Pages.
// React integracija je tu zbog jednog interaktivnog otoka (odabir usluga).
export default defineConfig({
  // Kanonska adresa stranice (za Astro.site, sitemap, RSS).
  site: 'https://inverz.hr',
  output: 'static',
  integrations: [react()],
  // Stupanj kompresije i prefetch ostavljam na Astro defaultu (prefetch je on).
  prefetch: true,
});
