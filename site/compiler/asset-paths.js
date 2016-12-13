import assetsDigest from './client-digest';

function filePath(path) {
  return `${process.env.URL_BASENAME || ''}/${path}`;
}

const bundleName = assetsDigest.metadata.bundleName;
const assets = assetsDigest[bundleName];

export const cssPath = filePath(assets.css);
export const jsPath = filePath(assets.js);
