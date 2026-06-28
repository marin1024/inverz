/* INVERZ — ENGLISH translations.
   Struktura mora 1:1 odgovarati hr.ts. */

import type { Dict } from './hr';

const en: Dict = {
  meta: {
    title: 'INVERZ — Websites, Google Ads and analysis for small businesses',
    description:
      'INVERZ builds websites, runs Google Ads and analyses online presence for small businesses and sole traders in Croatia.',
  },

  nav: {
    services: 'Services',
    projects: 'Projects',
    posts: 'Notes',
    contact: 'Contact',
    home: 'Home',
  },

  hero: {
    eyebrow: 'INVERZ',
    title: 'An online presence that actually works for your business.',
    sub: 'Website builds, Google Ads, presence audits and bespoke systems for small businesses and sole traders.',
    cta: 'Get a free short audit of your site',
  },

  services: {
    eyebrow: '01 · Services',
    title: 'What we can help you solve',
    sub: 'Click the services you’re interested in — they’ll be carried over into the enquiry at the bottom of the page.',
    cta: 'Send an enquiry',
    items: {
      audit: {
        title: 'Online presence audit',
        desc: 'A review of visibility, speed and mobile experience of your current site, with concrete recommendations.',
      },
      web: {
        title: 'Website builds',
        desc: 'Fast, clean, mobile-first sites — without the bloat of popular platforms.',
      },
      ads: {
        title: 'Google Ads',
        desc: 'Setup and management with real enquiry and call tracking, not just click counts.',
      },
      systems: {
        title: 'Bespoke systems',
        desc: 'Online shop, memberships, sign-in, contact forms — whatever the business needs.',
      },
    },
    selectedAria: 'Selected',
    clickToToggleHint: 'Click to select · click again to deselect.',
  },

  how: {
    eyebrow: '02 · Approach',
    title: 'How we work',
    sub: 'We don’t sell you a website — we sell measurable results.',
    steps: [
      {
        num: '01',
        title: 'We analyse',
        desc: 'We review your current presence — what works, what doesn’t and where opportunities are lost.',
      },
      {
        num: '02',
        title: 'We propose',
        desc: 'You get a clear plan: each step with its purpose and a transparent cost.',
      },
      {
        num: '03',
        title: 'We build & measure',
        desc: 'We ship, then track outcomes — enquiries, calls, visits. Numbers, not impressions.',
      },
    ],
  },

  projects: {
    eyebrow: '03 · Projects',
    title: 'Work',
    sub: 'A selection of projects from our portfolio.',
    viewProject: 'Project details',
    backToList: '← Projects',
  },

  postsSection: {
    eyebrow: '04 · Notes',
    title: 'From the workbook',
    sub: 'Practical notes and how-tos, no jargon.',
    viewAll: 'All notes',
  },

  postsPage: {
    title: 'Notes',
    sub: 'Practical writing on web, ads and measurement.',
    filterLabel: 'Category',
    sortLabel: 'Sort',
    sortNewest: 'Newest',
    sortOldest: 'Oldest',
    all: 'All categories',
    empty: 'No notes in this category yet.',
    backToList: '← All notes',
    publishedOn: 'Published',
    readingTime: 'min read',
    metaCategory: 'Category',
  },

  contact: {
    eyebrow: '04 · Contact',
    title: 'Let’s talk',
    sub: 'Send a short enquiry — we reply within one business day.',
    selectedTitle: 'You’re interested in:',
    selectedEmpty: 'No services selected — just write your message.',
    selectedClear: 'Clear selection',
    fields: {
      name: 'Full name',
      email: 'Email',
      message: 'Message',
      submit: 'Send enquiry',
      sending: 'Sending…',
    },
    success: 'Thanks — we’ve received your enquiry. We’ll be in touch soon.',
    error: 'Sending failed. Please try again or reach us directly via email.',
    or: 'or',
    altContact: 'send a message directly',
  },

  footer: {
    tagline: 'Web that works for small businesses.',
    company: 'Company',
    legal: 'Legal',
    contact: 'Contact',
    oibLabel: 'OIB',
    rights: 'All rights reserved.',
  },

  langSwitcher: {
    label: 'Language',
    hr: 'HR',
    en: 'EN',
    switchTo: 'Switch to Croatian',
  },

  ariaSkipToContent: 'Skip to content',
};

export default en;
