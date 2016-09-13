import compileSite from '../site/compiler';
import getSiteState from '../state';
import { makeUploader } from './s3';

// TODO : Make this value vary with the environment
const bucketName = 'website-honestly-dev'
const uploadPage = makeUploader({ bucketName });

function doPublish(cb) {
  const uploads = getSiteState()
    .then(compileSite)
    .then(pages => Promise.all(pages.map(uploadPage)))
    .then(data => cb(null, data))
    .catch(error => cb(error));
}

export function publish(event, context, cb) {
  try {
    doPublish(cb);
  } catch (e) {
    cb(e);
  }
};
