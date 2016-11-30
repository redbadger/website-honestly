export function eventNewsHref({ year, month, date, type, slug }) {
  if (type === 'event') {
    return `/about-us/events/${year}/${month}/${date}/${slug}`;
  }
  return `/about-us/news/${year}/${month}/${date}/${slug}`;
}
