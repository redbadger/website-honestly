/**
  Link resolvers are used to determine the redirect path for Prismic.io document
  previews. Each link resolver key, e.g. "event", matches the "type" property
  in the document schema and constructs the path using the provided document.
*/
const asPreview = (resolver) => (
  (token, doc) => {
    let path = '/';

    try {
      path += `${resolver(doc)}?id=${doc.id}&token=${token}`;
    } catch (error) {
      console.warn(`Could not create path: ${error.message}`);
    }
    return path;
  }
);

export const resolvers = {
  event: asPreview((doc) => {
    const datePath = doc.data['event.timestamp'].value
      .match(/^(\d{4})-(\d{2})-(\d{2})/)
      .slice(1)
      .join('/');

    return `about-us/events/${datePath}/${doc.uid}`;
  }),
};

export default function linkResolver(token, doc) {
  if (typeof resolvers[doc.type] === 'function') {
    return resolvers[doc.type](token, doc);
  }
  return '/';
}
