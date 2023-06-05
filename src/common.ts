export default function multilineRegexp(parts: (string | RegExp)[], flags?: string) {
    const regexpAsStringLiteral = parts.join('');
    return new RegExp(regexpAsStringLiteral, flags);
  }