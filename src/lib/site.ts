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

/** Teaching folded into About and Opportunities kept in the footer (Joy, 2026-10-15). */
export const PRIMARY_NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/people', label: 'People' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/news', label: 'News' },
] as const;

export const FOOTER_NAV = [
  { href: '/about', label: 'About' },
  { href: '/people', label: 'People' },
  { href: '/projects', label: 'Projects' },
  { href: '/news', label: 'News' },
  { href: '/join', label: 'Opportunities' },
] as const;

/** Keyless Google Maps embed for the footer; same pin as MAPS_URL. */
export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Tufts+University+School+of+Engineering,+200+College+Ave,+Medford,+MA+02155&z=15&output=embed';

/**
 * Home research areas (Joy, 2026-10-15). Equal weight, so no ordinals.
 * `texture` picks the line-drawing strip in AreaCard.
 */
export const RESEARCH_AREAS = [
  {
    title: 'Climate Extremes',
    body: 'We study how drought, flooding, and wildfire affect earthen infrastructure, including how overlapping or successive hazards alter risks to the communities that depend on it.',
    chips: ['Compound Hazards', 'Drought', 'Wildfire & Flood'],
    texture: 'contours',
  },
  {
    title: 'Equitable Infrastructure',
    body: 'We examine who is exposed to infrastructure hazards and who benefits from adaptation, with a focus on disadvantaged communities and environmental justice.',
    chips: ['Environmental Justice', 'Social Vulnerability'],
    texture: 'blocks',
  },
  {
    title: 'Coastal Resilience',
    body: 'We study how coastal landscapes respond to sea level rise, wave action, rainfall, and vegetation change. We work alongside local and Indigenous communities throughout the process.',
    chips: ['Sea Level Rise', 'Coastal Bluffs', 'Community Partnership'],
    texture: 'waves',
  },
  {
    title: 'Earthen Infrastructure',
    body: 'We investigate how changing soil moisture and temperature influence slopes, dams, and levees, informing their assessment and adaptation in a changing climate.',
    chips: ['Dams & Levees', 'Slope Stability', 'Unsaturated Soils'],
    texture: 'mesh',
  },
] as const;

/**
 * Home "Highlighted publications" tabs: one representative paper per research area.
 * Provisional picks (2026-09) until Joy / Farshid confirm; ids are publication file slugs.
 */
// `image`: first-page render in /public/papers (from Joy's Zotero PDFs); tabs without one
// fall back to the typographic cover.
/**
 * Home "Highlighted Publications", hand-picked by Joy (2026-10-15). Independent of projects,
 * so commentaries and perspectives that no single grant covers can still be featured.
 * Entries whose publication file is missing are skipped.
 */
export const HIGHLIGHT_PUBS: readonly {
  label: string;
  pub: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
}[] = [
  {
    label: 'Ageing Water Infrastructure',
    pub: '2026-to-fix-ageing-water-infrastructure-we-must-plan-for-an-ageing-population',
    image: '/highlights/ageing-water-infrastructure.webp',
    imageAlt: 'Figure relating ageing water infrastructure to demographic ageing.',
    width: 1065,
    height: 1345,
  },
  {
    label: 'Equitable Superfund Cleanup',
    pub: '2025-equitable-cleanup-of-superfund-sites-leaving-no-u-s-community-behind-030',
    image: '/highlights/superfund-equitable-cleanup.webp',
    imageAlt: 'Composition of communities near Superfund sites, grouped by cleanup status.',
    width: 1200,
    height: 1087,
  },
  {
    label: 'Extreme Wildfires',
    pub: '2026-accounting-for-extremes-in-modeling-the-size-and-likelihood-of-large-f-002',
    image: '/highlights/large-fires-extremes.webp',
    imageAlt: 'Figure from the study of large wildfire size and likelihood in the United States.',
    width: 1200,
    height: 1211,
  },
  {
    label: 'Levee Seepage Calibration',
    pub: '2026-a-hybrid-model-calibration-framework-for-transient-seepage-prediction-in-levees',
    image: '/highlights/levee-seepage-calibration.webp',
    imageAlt: 'Figure from the hybrid model calibration framework for transient levee seepage.',
    width: 1200,
    height: 422,
  },
];

/**
 * Publications "By Topic" tabs: Farshid's Areas of Interest (CEE profile).
 * `label` is the short tab text; `full` is the heading inside the panel.
 */
export const PUB_TOPICS = [
  { key: 'resilient-equitable', label: 'Resilient & Equitable', full: 'Resilient and equitable infrastructure' },
  { key: 'extreme-events', label: 'Extreme Events', full: 'Impacts of extreme events (e.g., drought, flood, wildfire) in a changing climate on infrastructure and communities' },
  { key: 'climate-adaptation', label: 'Climate Adaptation', full: 'Climate adaptation of infrastructure' },
  { key: 'slopes-dams-levees', label: 'Slopes, Dams & Levees', full: 'Slopes, dams, and levees' },
  { key: 'unsaturated', label: 'Unsaturated Soils', full: 'Unsaturated soil mechanics' },
  { key: 'multiphysics', label: 'Multi-physics', full: 'Multi-physics (e.g., hydro-mechanical, thermo-hydro-mechanical) processes in soils' },
  { key: 'methods', label: 'Analytical & Numerical', full: 'Analytical and numerical methods in geotechnical engineering' },
] as const;

// Blue lab-author highlighting is derived from the people collection: see lib/lab-authors.ts.

export function isCurrentPath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}
