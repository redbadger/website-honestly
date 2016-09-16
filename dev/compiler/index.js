import * as fs from 'fs';
import { compileSite } from '../../site/compiler';
import getSiteState from '../../state';

function writePage({ path, body }) {
  return new Promise((resolve, reject) => (
    fs.writeFile(`./dist/static-site${path}`, body, err => {
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
    console.log('Site compiled to dist/static-site/');
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
