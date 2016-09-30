import * as fs from 'fs';
import { compileSite } from '../../site/compiler';
import getSiteState from '../../state';

function writePage({ path, body }) {
  return new Promise((resolve, reject) => (
    fs.writeFile(`./dist/static-site/${path}`, body, err => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    })
  ));
}

getSiteState()
  .then(compileSite)
  .then(pages => Promise.all(pages.map(writePage)))
  .then(() => {
    console.log('Site compiled to dist/static-site/'); // eslint-disable-line no-console
  })
  .catch(error => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
