import AWS from 'aws-sdk'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved
import difference from 'lodash.difference';

/* eslint-disable no-console */

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: 'eu-west-1',
});

const peoplePrefix = 'about-us/people/';
const jobsPrefix = 'jobs/';

// Takes in a S3 key/path and extracts the relevant slug
function extractSlugFromKey(key, prefix) {
  let match;
  if (prefix === peoplePrefix) {
    match = key.match(/about-us\/[\w-]+\/([\w-]+)\/index.html/);
  }

  if (prefix === jobsPrefix) {
    match = key.match(/jobs\/([\w-]+)\/index.html/);
  }
  return match && match[1];
}

const getLiveBadgers = (Bucket, Prefix) => s3.listObjects({ Bucket, Prefix }).promise();
const deleteObjects = (bucketName, keysToDelete) => {
  return s3
    .deleteObjects({
      Bucket: bucketName,
      Delete: {
        Objects: keysToDelete,
        Quiet: false,
      },
    })
    .promise();
};

function removeArchivedWithPrefix(bucketName, actualSlugs, s3Prefix) {
  return getLiveBadgers(bucketName, s3Prefix).then(objects => {
    const listed = objects.Contents.map(obj => obj.Key)
      .map(obj => extractSlugFromKey(obj, s3Prefix))
      .filter(slug => slug != null);

    const slugsToDelete = difference(listed, actualSlugs).filter(obj => obj !== 'index.html'); // Ensure directory index file doesn't get deleted

    if (!slugsToDelete.length) return;

    console.log(`About to delete these slugs from "${s3Prefix}" :\n${slugsToDelete.join('\n')}`);

    const indexFiles = slugsToDelete.map(slug => ({
      Key: `/${s3Prefix}${slug}/index.html`,
    }));

    const directories = slugsToDelete.map(slug => ({
      Key: `/${s3Prefix}${slug}/`,
    }));

    // File inside folder needs to be deleted first before deleting the parent folder
    return deleteObjects(bucketName, indexFiles).then(() => deleteObjects(bucketName, directories));
  });
}

export default function removeArchived(bucketName) {
  console.log(`removing archived content from ${bucketName}`);
  return state => {
    return Promise.all([
      removeArchivedWithPrefix(
        bucketName,
        state.data.badgers.map(badger => badger.slug),
        peoplePrefix,
      ),
      removeArchivedWithPrefix(bucketName, state.data.jobs.map(job => job.slug), jobsPrefix),
    ])
      .catch(err => console.error('Error when deleting archived pages:', err))
      .then(() => state);
  };
}
