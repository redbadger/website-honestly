import fs from 'fs';
import promisify from 'es6-promisify';

import getSiteState from '../../state';
import { routeDefinitions } from '../../site/routes/definitions';
import getSiteRoutes from './site-routes';
import formatRoutes from './format-routes';
import getBlogXML from './blog-xml';

const writeFile = promisify(fs.writeFile);

const oldBadgerBrainHost = process.env.BADGER_BRAIN_HOST;
process.env.BADGER_BRAIN_HOST = 'https://brain.red-badger.com/graphql';

console.log('Generating sitemap...')
getSiteState()
  .then(state => {
    return Promise.all([
      formatRoutes(getSiteRoutes(state, routeDefinitions)),
      getBlogXML(),
    ]);
  })
  .then(([siteXML, blogXML]) => {
    const xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${siteXML}
${blogXML}
</urlset>`;

    console.log('Creating sitemap file...');
    writeFile('assets/sitemap.xml', xml);
    console.log('Sitemap completed ✅');
  })
  .catch(err => console.error('⚠️ Something went wrong during sitemap generation:\n', err));

process.env.BADGER_BRAIN_HOST = oldBadgerBrainHost;
