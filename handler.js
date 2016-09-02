'use strict';

module.exports.publish = (event, context, cb) => {
  const AWS = require('aws-sdk');
  AWS.config.region = 'eu-west-1';

  const s3bucket = new AWS.S3({ params: { Bucket: 'louis-static-site' }});

  const index = {
    Key: 'index.html',
    Body: 'Published at ' + (new Date().toString()),
    ContentType: 'text/html',
  };
  const error = {
    Key: 'error.html',
    Body: 'Error :(',
    ContentType: 'text/html',
  };
  s3bucket.upload(index , () => {
    s3bucket.upload(error, cb);
  });
};

// module.exports.publish = (event, context, cb) => cb(null,
//   { message: 'Go Serverless v1.0! Your function executed successfully!', event }
// );
