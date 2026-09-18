/** Prefix internal URLs for the GitHub Pages project site. */
export function sitePath(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
}

export function localPath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const local = path === base || path.startsWith(`${base}/`) ? path.slice(base.length) : path;
  return local.replace(/\/$/, '') || '/';
}
