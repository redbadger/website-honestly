import assetsDigest from './assets-digest';
import { fullPath } from '../routes';

const cssName = assetsDigest.metadata.bundleName;

export const cssPath = '/' + fullPath(assetsDigest[cssName].css);
