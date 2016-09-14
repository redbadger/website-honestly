import compileSite from '../site/compiler';
import getSiteState from '../state';
import { makeUploader } from './s3';

const bucketName = process.env.BUCKET_NAME;
const uploadPage = makeUploader({ bucketName });

function doPublish(cb) {
  getSiteState()
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
}
