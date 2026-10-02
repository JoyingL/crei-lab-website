export const LAB_NAME = 'Climate Resilient and Equitable Infrastructure Lab';
export const LAB_SHORT = 'CREI';
export const PI_NAME = 'Farshid Vahedifard';
export const ADDRESS = '200 College Avenue, Medford, MA 02155, USA';
/** Campus map pin: Tufts University School of Engineering (Joy, 2026-10-01). */
export const MAPS_URL =
  'https://www.google.com/maps/place/Tufts+University+School+of+Engineering/@42.4062401,-71.1195056,17z/data=!3m1!4b1!4m6!3m5!1s0x89e376dda5d230eb:0x40463daa16c8079f!8m2!3d42.4062401!4d-71.1169307!16zL20vMDVnOWNq';
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
    body: 'We study how drought, flooding, and wildfire affect earthen infrastructure and the communities that depend on it. When hazards overlap or follow one another, one event can change the impact of the next, so we also examine compound and cascading hazards.',
    chips: ['drought', 'flood', 'wildfire', 'cascading hazards'],
  },
  {
    title: 'Earthen Infrastructure',
    hover: 'Slopes, dams, and levees in a changing climate.',
    body: 'We analyze how changes in soil moisture and temperature affect the performance of slopes, dams, and levees. The results inform how these structures are assessed and adapted as climate conditions change.',
    chips: ['slopes', 'dams', 'levees', 'climate adaptation'],
  },
  {
    title: 'Equitable Infrastructure',
    hover: 'Infrastructure risk and environmental justice.',
    body: 'We examine how infrastructure risks affect disadvantaged communities, including who is exposed to hazards and who benefits when infrastructure is protected. This work treats climate adaptation as a question of environmental justice.',
    chips: ['environmental justice', 'equity', 'disadvantaged communities'],
  },
  {
    title: 'Unsaturated Mechanics',
    hover: 'Water, heat, and stress in unsaturated soils.',
    body: 'Water flow, heat transfer, and stress jointly influence soil behavior and the stability of earthen structures. We study these coupled processes in unsaturated soils using analytical and numerical methods.',
    chips: ['unsaturated soils', 'multi-physics', 'analytical methods'],
  },
] as const;

/**
 * Home "Highlighted publications" tabs: one representative paper per research area.
 * Provisional picks (2026-09) until Joy / Farshid confirm; ids are publication file slugs.
 */
export const HIGHLIGHT_TABS = [
  { area: 'Climate Extremes', pub: '2016-compound-hazards-yield-louisiana-flood-182' },
  { area: 'Earthen Infrastructure', pub: '2026-risk-based-adaptation-framework-for-levees-under-evolving-climatic-and-012' },
  { area: 'Equitable Infrastructure', pub: '2025-equitable-cleanup-of-superfund-sites-leaving-no-u-s-community-behind-030' },
  { area: 'Unsaturated Mechanics', pub: '2026-from-particle-gradation-to-soil-water-retention-and-suction-stress-cha-009' },
] as const;

export function isInGroupAuthor(name: string) {
  const n = name.replace(/\./g, '').replace(/\s+/g, ' ').trim().toLowerCase();
  return n === 'farshid vahedifard' || n === 'f vahedifard';
}

export function isCurrentPath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}
