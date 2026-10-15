import { getCollection } from 'astro:content';

/** Lab members (everyone in the people collection, alumni included) are blue in author lists. */

type NameParts = { family: string; given: string };

const fold = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\./g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

/** "Family, Given" or "Given Family" (Scholar "DC Brown" included). */
function parse(name: string): NameParts {
  const clean = fold(name);
  if (clean.includes(',')) {
    const [family, given = ''] = clean.split(',').map((s) => s.trim());
    return { family, given };
  }
  const parts = clean.split(' ');
  return { family: parts.pop() ?? '', given: parts.join(' ') };
}

const firstToken = (given: string) => given.split(/[\s-]/)[0] ?? '';
// One letter, or Scholar-packed initials such as "dc" (short, no vowels).
const isInitials = (token: string) => token.length <= 1 || /^[^aeiou]{2,3}$/.test(token);

/**
 * Same family name, and the first given name agrees: full names must match exactly; when
 * either side is only initials, the first initials must match.
 */
function sameName(a: NameParts, b: NameParts) {
  if (!a.family || a.family !== b.family) return false;
  const ga = firstToken(a.given);
  const gb = firstToken(b.given);
  if (!ga || !gb) return false;
  if (isInitials(ga) || isInitials(gb)) return ga.charAt(0) === gb.charAt(0);
  return ga === gb;
}

let cache: NameParts[] | undefined;

async function members() {
  if (!cache) {
    const people = await getCollection('people');
    cache = people.flatMap((p) => [p.data.name, ...p.data.authorAs].map(parse));
  }
  return cache;
}

/** Resolves once per build; returns a sync predicate for templates. */
export async function labAuthorMatcher() {
  const list = await members();
  return (name: string) => {
    const parsed = parse(name);
    return list.some((m) => sameName(m, parsed));
  };
}

/** Byline predicate for one person (their name plus `authorAs` spellings), for profile pages. */
export function personAuthorMatcher(person: { name: string; authorAs: string[] }) {
  const own = [person.name, ...person.authorAs].map(parse);
  return (name: string) => {
    const parsed = parse(name);
    return own.some((m) => sameName(m, parsed));
  };
}
