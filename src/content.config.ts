import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const people = defineCollection({
  loader: glob({ base: './src/content/people', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['pi', 'researcher', 'student', 'alumni', 'staff']),
    title: z.string(),
    affiliation: z.string(),
    email: z.string().email().optional(),
    scholar: z.string().url().optional(),
    orcid: z.string().optional(),
    photo: z.string().optional(),
    order: z.number().default(99),
    highlight: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    pdf: z.string().url().optional(),
    code: z.string().url().optional(),
    topic: z.string().optional(),
    type: z.enum(['journal', 'conference', 'report', 'other']).optional(),
    highlight: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['current', 'completed']).default('current'),
    year: z.number().optional(),
    funder: z.string().optional(),
    url: z.string().url().optional(),
    highlight: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    source: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

const teaching = defineCollection({
  loader: glob({ base: './src/content/teaching', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    code: z.string().optional(),
    term: z.string().optional(),
    year: z.number().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { people, publications, projects, news, teaching };
