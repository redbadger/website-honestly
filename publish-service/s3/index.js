module.exports.makeUploader = function makeUploader({ bucketName }) {
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    region: 'eu-west-1',
  });

  return ({ path, contents }) => (
    s3.putObject({
      Bucket: bucketName,
      Key: path,
      Body: contents,
      ContentType: 'text/html',
    }).promise()
  );
}
