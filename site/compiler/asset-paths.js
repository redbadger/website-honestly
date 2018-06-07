import assetsDigest from './client-digest';

const { bundleName } = assetsDigest.metadata;
const assets = assetsDigest[bundleName];

export const cssPath = assets.css;
export const jsPath = assets.js;
