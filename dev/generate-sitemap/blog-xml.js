const fetch = require('node-fetch');

function replaceURLs(original) {
  return original.replace(/https:\/\/blog\.red-badger\.com\/blog/g, 'https://red-badger.com/blog');
}

function extractInnerXML(original) {
  const matches = original.match(/<urlset.*>([\s\S]*)<\/urlset>/);
  if (!matches) {
    throw new Error('Inner XML of blog could not be extracted!');
  }
  return matches && matches[1];
}

export default function getBlogXML() {
  return fetch('https://blog.red-badger.com/sitemap.xml')
    .then(res => res.text())
    .then(replaceURLs)
    .then(extractInnerXML);
}
