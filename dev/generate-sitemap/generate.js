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

console.log('Fetching routes...');
function generate(triesLeft = 5) {
  getSiteState()
    .then(state => {
      return Promise.all([formatRoutes(getSiteRoutes(state, routeDefinitions)), getBlogXML()]);
    })
    .then(([siteXML, blogXML]) => {
      console.log('Routes were fetched!');
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${siteXML}
      ${blogXML}
      </urlset>`;

      console.log('Creating sitemap file...');
      writeFile('assets/sitemap.xml', xml);
      console.log('Sitemap completed ✅');
    })
    .catch(err => {
      console.error(`⚠️ Sitemap generation error: ${err.message}.\n\n Trying again (${triesLeft} tries left)`);
      if (triesLeft < 1) {
        console.error('Unable to generate sitemap!');
        process.exit(1);
      } else {
        return generate(triesLeft - 1);
      }
    })
}

generate();

process.env.BADGER_BRAIN_HOST = oldBadgerBrainHost;
