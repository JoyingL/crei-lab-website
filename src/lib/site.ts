export const LAB_NAME = 'Climate Resilient and Equitable Infrastructure Lab';
export const LAB_SHORT = 'CREI';
export const PI_NAME = 'Farshid Vahedifard';
export const ADDRESS = '200 College Avenue, Medford, MA 02155, USA';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=200+College+Avenue+Medford+MA+02155';
export const EMAIL = 'farshid.vahedifard@tufts.edu';
export const SCHOLAR_URL = 'https://scholar.google.com/citations?user=dc3G9EoAAAAJ';
export const TUFTS_URL = 'https://www.tufts.edu';
export const CEE_URL = 'https://engineering.tufts.edu/cee';
export const CEE_PROFILE_URL = 'https://engineering.tufts.edu/cee/people/faculty/farshid-vahedifard';
export const FACULTY_PROFILE_URL = 'https://facultyprofiles.tufts.edu/farshid-vahedifard';

/** Locked 2026-09-10 by Joy. Working-name subtitle; does not repeat CREI. */
export const HOME_SUBTITLE =
  'The resilience and adaptation of critical infrastructure to extreme events in a changing climate.';

export const PRIMARY_NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/people', label: 'People' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/news', label: 'News' },
] as const;

/** Set B (Joy, 2026-09-10): four cards, equity + extremes. Mechanics folded into card 4. */
export const RESEARCH_AREAS = [
  {
    title: 'Climate Extremes',
    image: '/research/climate-extremes.webp',
    imageAlt: 'Aerial view of the Abukuma River and flooded neighborhoods in Japan in 2019.',
    body: 'How drought, floods, and wildfire interact and affect infrastructure and communities.',
  },
  {
    title: 'Earthen Infrastructure',
    image: '/research/earthen-infrastructure.webp',
    imageAlt: 'A crew hydroseeds the earth slope of a Sacramento River levee.',
    body: 'The performance and adaptation of slopes, dams, and levees under changing climate conditions.',
  },
  {
    title: 'Equitable Infrastructure',
    image: '/research/equitable-infrastructure.webp',
    imageAlt: 'Aerial view of Fargo homes and roads behind a temporary earth levee beside floodwater.',
    body: 'Who is exposed to infrastructure risks, and who benefits from protection and adaptation.',
  },
  {
    title: 'Unsaturated Mechanics',
    image: '/research/unsaturated-mechanics.webp',
    imageAlt: 'A hydrometer in a graduated cylinder of soil suspension on a laboratory bench.',
    body: 'How water, heat, and stress interact in unsaturated soils and influence their behavior.',
  },
] as const;

export function isInGroupAuthor(name: string) {
  const n = name.replace(/\./g, '').replace(/\s+/g, ' ').trim().toLowerCase();
  return n === 'farshid vahedifard' || n === 'f vahedifard';
}

export function isCurrentPath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}
