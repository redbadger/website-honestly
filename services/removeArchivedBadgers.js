const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved
const { difference, flatMap } = require('lodash');

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: 'eu-west-1',
});

function extractSlugFromKey(key) {
  const match = key.match(/about-us\/people\/([\w-]+)\/index.html/);
  return match && match[1];
}

const peoplePath = 'about-us/people/';

const getLiveBadgers = Bucket => s3.listObjects({ Bucket, Prefix: peoplePath }).promise();

export default function removeArchivedBadgers(bucketName) {
  return state => {
    const actualBadgers = state.badgers.map(badger => badger.slug);
    // const listedBadgers = getLiveBadgers(bucketName);
    console.log('removeArchivedBadgers actualBadgers: ', actualBadgers);
    return getLiveBadgers(bucketName)
      .then(objects => {
        const listedBadgers = objects.Contents
          .map(obj => obj.Key)
          .map(extractSlugFromKey)
          .filter(slug => slug != null);

        console.log('removeArchivedBadgers listedBadgers: ', listedBadgers);

        const badgersToBeDeleted = difference(listedBadgers, actualBadgers);
        console.log(
          'About to delete these badger profiles: ',
          bucketName,
          JSON.stringify(
            {
              Bucket: bucketName,
              Delete: {
                Objects: flatMap(badgersToBeDeleted, slug => [
                  {
                    Key: `${peoplePath}${slug}/index.html`,
                  },
                  {
                    Key: `${peoplePath}${slug}`,
                  },
                ]),
                Quiet: false,
              },
            },
            true,
            '..',
          ),
        );

        return s3
          .deleteObjects({
            Bucket: bucketName,
            Delete: {
              Objects: flatMap(badgersToBeDeleted, slug => [
                {
                  Key: `${peoplePath}${slug}/index.html`,
                },
                {
                  Key: `${peoplePath}${slug}`,
                },
              ]),
              Quiet: false,
            },
          })
          .promise()
          .then(result => console.log(result))
          .then(() => state);
        // return state;
      })
      .catch(err => console.log(err));
  };
}
