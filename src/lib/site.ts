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
    hover: 'Drought, flooding, wildfire, and cascading hazards.',
    body: 'We study how drought, flooding, and wildfire affect earthen infrastructure and nearby communities. We examine compound and cascading hazards to understand how one event changes the impacts of another.',
    chips: ['drought', 'flood', 'wildfire', 'cascading hazards'],
  },
  {
    title: 'Earthen Infrastructure',
    hover: 'Slopes, dams, and levees in a changing climate.',
    body: 'We analyze how changes in moisture and temperature affect the performance of slopes, dams, and levees. This work informs the assessment and adaptation of earthen infrastructure under changing climate conditions.',
    chips: ['slopes', 'dams', 'levees', 'climate adaptation'],
  },
  {
    title: 'Equitable Infrastructure',
    hover: 'Infrastructure risk and environmental justice.',
    body: 'We examine how infrastructure risks affect disadvantaged communities. Our research connects climate adaptation with environmental justice, considering who is exposed to hazards and who benefits from infrastructure protection.',
    chips: ['environmental justice', 'equity', 'communities'],
  },
  {
    title: 'Unsaturated Mechanics',
    hover: 'Water, heat, and stress in unsaturated soils.',
    body: 'Water flow, heat transfer, and stress jointly influence soil behavior and the stability of earthen structures. We study these coupled processes in unsaturated soils using analytical and numerical methods.',
    chips: ['unsaturated soils', 'multi-physics', 'analytical methods'],
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
