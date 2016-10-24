import assetsDigest from './client-digest';
import { fullPath } from '../routes';

function filePath(path) {
  return '/' + fullPath(path);
}

const bundleName = assetsDigest.metadata.bundleName;
const assets = assetsDigest[bundleName];

export const cssPath = filePath(assets.css);
export const jsPath = filePath(assets.js);

export const HI = 'HI';
