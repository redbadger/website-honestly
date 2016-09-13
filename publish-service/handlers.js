'use strict';

const compileSite = require('../site/compiler');
const getSiteState = require('../state');
const makeUploader = require('./s3').makeUploader;

// TODO : Make this value vary with the environment
const bucketName = 'website-honestly-dev'
const uploadPage = makeUploader({ bucketName });

function doPublish(cb) {
  const uploads = getSiteState()
    .then(compileSite)
    .then(pages => Promise.all(pages.map(uploadPage)))
    .then(data => cb(null, data))
    .catch(error => cb(error));
}

module.exports.publish = function publish(event, context, cb) {
  try {
    doPublish(cb);
  } catch (e) {
    cb(e);
  }
};
