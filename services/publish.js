/* eslint-disable no-console */
import 'source-map-support/register';
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
    .then(state => Promise.all(state.data.map(uploadPage)).then(data => ({ ...state, data })))
    .then(state =>
      cb(null, {
        statusCode: 200,
        body: JSON.stringify({ results: 'Publish successful', fetchErrors: state.fetchErrors }),
      }),
    )
    .catch(error => cb(error));
}
