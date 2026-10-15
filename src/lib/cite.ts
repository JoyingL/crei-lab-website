/** Nature reference style helpers: `Vahedifard, F., Azhar, M. & Brown, D. C.` */

function initialsOf(given: string) {
  return given
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((token) => {
      // Scholar-style packed initials ("DC") expand to "D. C."
      if (/^[A-Z]{2,3}$/.test(token)) return token.split('').map((c) => `${c}.`).join(' ');
      if (token.includes('-')) return token.split('-').map((part) => `${part.charAt(0)}.`).join('-');
      return `${token.charAt(0).toUpperCase()}.`;
    })
    .join(' ');
}

/** "Family, Given" or "Given Family" -> "Family, G." Names without a given part pass through. */
export function natureAuthor(name: string) {
  const trimmed = name.trim();
  if (trimmed.includes(',')) {
    const [family, given = ''] = trimmed.split(',').map((s) => s.trim());
    return given ? `${family}, ${initialsOf(given)}` : family;
  }
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return trimmed;
  const family = parts.pop() as string;
  return `${family}, ${initialsOf(parts.join(' '))}`;
}

/** Separator placed before author `i` of `n`: ", " between, " & " before the last. */
export function authorSeparator(i: number, n: number) {
  if (i === 0) return '';
  return i === n - 1 ? ' & ' : ', ';
}
