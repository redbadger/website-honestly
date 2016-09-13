function makeUploader({ bucketName }) {
  const AWS = require('aws-sdk');
  AWS.config.region = 'eu-west-1';
  AWS.config.setPromisesDependency(null);

  const s3bucket = new AWS.S3({ params: { Bucket: BucketName }});
  return (page) => s3bucket.upload(page).promise();
};

module.exports = {
  makeUploader,
};
