export function getCookieValue(a) {
  if (typeof document === 'undefined') return '';

  const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}
