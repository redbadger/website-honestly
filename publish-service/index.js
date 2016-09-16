import compileSite from '../site/compiler';
import getSiteState from '../state';
import { makeUploader } from './s3';

const bucketName = process.env.BUCKET_NAME;
const secretAuth = process.env.SECRET_AUTH;
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
    if (event.body && event.body.secret === secretAuth) {
      doPublish(cb);
    } else {
      cb('Not authorised to trigger this function');
    }
  } catch (e) {
    cb(e);
  }
}
