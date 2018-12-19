/* eslint-disable no-console */
import getSiteState from '../state';
import { compileSite } from '../site/compiler';
import { makeUploader } from './s3';
import removeArchived from './removeArchived';

const bucketName = process.env.BUCKET_NAME;
const uploadPage = makeUploader({ bucketName });

if (!bucketName) {
  throw new Error('bucketName environment variable not set!');
}

export default function doPublish(_, __, cb) {
  console.log(`Publishing to S3 bucket ${bucketName}`);

  getSiteState()
    .then(removeArchived(bucketName))
    .then(compileSite)
    .then(pages => Promise.all(pages.map(uploadPage)))
    .then(() =>
      cb(null, {
        statusCode: 200,
        body: JSON.stringify({ results: 'Publish successful' }),
      }),
    )
    .catch(error => cb(error));
}
