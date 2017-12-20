const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved

export function makeUploader({ bucketName }) {
  const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    region: 'eu-west-1',
  });

  return ({ path, body, contentType, cacheControl }) =>
    s3
      .putObject({
        Bucket: bucketName,
        Key: path,
        Body: body,
        ContentType: contentType,
        CacheControl: cacheControl,
      })
      .promise();
}
