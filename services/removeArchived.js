import AWS from 'aws-sdk'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved
import { difference } from 'lodash';

/* eslint-disable no-console */

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: 'eu-west-1',
});

const peoplePath = 'about-us/people/';
const jobsPath = 'about-us/join-us/';

function extractSlugFromKey(key) {
  const match = key.match(/about-us\/[\w-]+\/([\w-]+)\/index.html/);
  return match && match[1];
}

const getLiveBadgers = (Bucket, Prefix) => s3.listObjects({ Bucket, Prefix }).promise();
const deleteObjects = (bucketName, keysToDelete) =>
  s3
    .deleteObjects({
      Bucket: bucketName,
      Delete: {
        Objects: keysToDelete,
        Quiet: false,
      },
    })
    .promise();

function removeArchivedInPath(bucketName, actualSlugs, s3Prefix) {
  return getLiveBadgers(bucketName, s3Prefix).then(objects => {
    const listed = objects.Contents
      .map(obj => obj.Key)
      .map(extractSlugFromKey)
      .filter(slug => slug != null);

    const toDelete = difference(listed, actualSlugs).filter(obj => obj !== 'index.html'); // Ensure index file doesn't get deleted

    if (!toDelete.length) return;

    console.log(`From ${s3Prefix} about to delete: ${toDelete}`);

    const htmlFiles = toDelete.map(slug => ({
      Key: `${s3Prefix}${slug}/index.html`,
    }));

    const directories = toDelete.map(slug => ({
      Key: `${s3Prefix}${slug}/`,
    }));

    // File inside folder needs to be deleted first before deleting the parent folder
    return deleteObjects(bucketName, htmlFiles).then(() => deleteObjects(bucketName, directories));
  });
}

export default function removeArchived(bucketName) {
  return state => {
    return Promise.all([
      removeArchivedInPath(bucketName, state.badgers.map(badger => badger.slug), peoplePath),
      removeArchivedInPath(bucketName, state.jobs.map(job => job.slug), jobsPath),
    ])
      .catch(err => console.error('Error when deleting archived pages:', err))
      .then(() => state);
  };
}
