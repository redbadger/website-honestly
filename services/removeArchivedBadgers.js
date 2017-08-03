const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved
const { getData } = require('../site/fetchers/badger-brain.js');
// const { difference } = require('lodash');

const bucketName = process.env.BUCKET_NAME;
console.log(bucketName);

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: 'eu-west-1',
});

const getCurrentBadgers = () => getData().then(({ badgers }) => badgers);
const getLiveBadgers = Bucket => s3.listObjects({ Bucket });

export default function removeArchivedBadgers() {
  Promise.all([
    getCurrentBadgers(),
    getLiveBadgers(bucketName),
  ])
  .then(([currentBadgers, liveBadgers]) => {
    console.log(currentBadgers, liveBadgers);
  });
}
