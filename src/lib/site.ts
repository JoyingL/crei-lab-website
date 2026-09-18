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
    hover: 'Drought, flood, wildfire, and what follows.',
    body: 'Extreme events in a changing climate, including compound and cascading sequences, reshape both communities and the infrastructure they rely on. We study those impacts at the point where climate loading meets earthen systems.',
    chips: ['drought', 'flood', 'wildfire', 'cascading hazards'],
  },
  {
    title: 'Earthen Infrastructure',
    hover: 'Slopes, dams, and levees under nonstationary climate.',
    body: 'Critical earthen infrastructure is a first-order climate asset, not a background geotechnical detail. We analyze how slopes, dams, and levees lose performance as wetting, drying, and heat accumulate.',
    chips: ['slopes', 'dams', 'levees', 'climate adaptation'],
  },
  {
    title: 'Equitable Infrastructure',
    hover: 'Who is behind the levee is part of the problem.',
    body: 'Resilience work that does not name disadvantaged communities is incomplete. We frame climate adaptation so that equity is a design constraint, not a separate outreach paragraph.',
    chips: ['environmental justice', 'equity', 'communities'],
  },
  {
    title: 'Unsaturated Mechanics',
    hover: 'Variably saturated soils under multi-physics processes.',
    body: 'The lab’s fundamental geotechnical work is unsaturated soil mechanics and multi-physics processes in soils, closed with analytical and numerical methods. That is the method stack behind the climate and equity questions above.',
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
