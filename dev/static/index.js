import * as fs from 'fs';
import mkdirp from 'mkdirp';
import { dirname } from 'path';
import { compileSite } from '../../site/compiler';
import getSiteState from '../../state';

function makeWritePath(path) {
  return `./dist/static-site/${path}`;
}

function makeDirectory(obj) {
  const dir = dirname(makeWritePath(obj.path));
  return new Promise((resolve, reject) => (
    mkdirp(dir, err => {
      if (err) {
        reject(err);
      } else {
        resolve(obj);
      }
    })
  ));
}

function writePage({ path, body }) {
  const writePath = makeWritePath(path);
  console.log(`Writing ${writePath}`); // eslint-disable-line no-console
  return new Promise((resolve, reject) => (
    fs.writeFile(writePath, body, err => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    })
  ));
}

function writePages(pages) {
  return Promise.all(
    pages.map(page => makeDirectory(page).then(writePage))
  );
}

getSiteState()
  .then(compileSite)
  .then(writePages)
  .then(() => {
    console.log('Site compiled to dist/static-site/'); // eslint-disable-line no-console
  })
  .catch(error => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
