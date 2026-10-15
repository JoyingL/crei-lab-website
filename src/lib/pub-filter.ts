import type { CollectionEntry } from 'astro:content';

/** Prestige venues that keep a collaboration when Farshid is not first/last (findings.md §7). */
const PRESTIGE = [
  'nature',
  'science',
  'nature communications',
  'nature water',
  'nature cities',
  'nature reviews earth & environment',
  'communications earth & environment',
  'npj natural hazards',
  'pnas',
  'pnas nexus',
  'proceedings of the national academy of sciences',
];

function foldVenue(venue: string) {
  return venue.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export function isPrestigeVenue(venue: string) {
  const v = foldVenue(venue);
  if (PRESTIGE.includes(v)) return true;
  if (v.startsWith('nature reviews earth')) return true;
  if (v.startsWith('communications earth')) return true;
  if (v.startsWith('proceedings of the national academy of sciences')) return true;
  return false;
}

/** Default Publications list: YAML `listed` written from findings.md §7. */
export function isListedPub(pub: CollectionEntry<'publications'>) {
  return pub.data.listed === true;
}
