/* Content collections za objave.
   Po jedna kolekcija za svaki jezik — datoteke odvojene po mapama. */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  category: z.string(),
  /** Slug parne objave u drugom jeziku (za prebacivač jezika). */
  pairSlug: z.string().optional(),
  draft: z.boolean().default(false),
});

const postsHr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts/hr' }),
  schema: postSchema,
});

const postsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts/en' }),
  schema: postSchema,
});

/* Content collections za projekte (po jezicima, mirror objava).
   `logo` koristi image() helper → Astro optimizira sliku iz src/assets. */
const projectSchema = ({ image }: { image: () => z.ZodType }) =>
  z.object({
    title: z.string(),
    /** Kratki opis (preview na homepageu + meta description). */
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    /** Logo projekta (relativna putanja do src/assets). Opcionalan. */
    logo: image().optional(),
    /** Redoslijed prikaza na homepageu (manji = prije). */
    order: z.number().default(0),
    /** Slug parnog projekta u drugom jeziku (za prebacivač jezika). */
    pairSlug: z.string().optional(),
    draft: z.boolean().default(false),
  });

const projectsHr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects/hr' }),
  schema: projectSchema,
});

const projectsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects/en' }),
  schema: projectSchema,
});

export const collections = { postsHr, postsEn, projectsHr, projectsEn };
