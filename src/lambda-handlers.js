'use strict';

const compileSite = require('./site-compile');

// TODO : Make this value vary with the environment
const BucketName = 'website-honestly-dev'

module.exports.publish = function(event, context, cb) {
  const AWS = require('aws-sdk');
  AWS.config.region = 'eu-west-1';
  AWS.config.setPromisesDependency(null);

  const s3bucket = new AWS.S3({ params: { Bucket: BucketName }});

  const uploads = compileSite()
    .then(pages =>
      pages.map(page => s3bucket.upload(page).promise())
    );

  Promise.all(uploads)
    .then(data => cb(null, data))
    .catch(error => eb(error));
};
