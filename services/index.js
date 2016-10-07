/* eslint-disable no-console */
import getSiteState from '../state';
import { compileSite } from '../site/compiler';
import { makeUploader } from './s3';

const bucketName = process.env.BUCKET_NAME;
const contactUsEmailTo = process.env.CONTACT_US_EMAIL_TO;
const uploadPage = makeUploader({ bucketName });

if (!bucketName) {
  throw new Error('bucketName environment variable not set!');
}

if (!contactUsEmailTo) {
  throw new Error('CONTACT_US_EMAIL_TO environment variable not set!');
}

function doPublish(cb) {
  console.log(`Publishing to S3 bucket ${bucketName}`);
  getSiteState()
    .then(compileSite)
    .then(pages => Promise.all(pages.map(uploadPage)))
    .then(data => cb(null, data))
    .catch(error => cb(error));
}

export function publish(event, context, cb) {
  try {
    doPublish(cb);
  } catch (e) {
    cb(e);
  }
}

module.exports.contactUs = (event, context, cb) => {
  const aws = require('aws-sdk'); // eslint-disable-line import/no-unresolved, global-require, import/no-extraneous-dependencies
  const validateAndSendEmail = require('./ses').validateAndSendEmail; // eslint-disable-line global-require

  aws.config.update('eu-west-1');
  const simpleEmail = new aws.SES({ apiVersion: '2010-12-01' });
  const emailSender = simpleEmail.sendEmail.bind(simpleEmail);

  const data = {
    emailTo: contactUsEmailTo,
    message: event.message,
    contact: event.contact,
  };

  validateAndSendEmail(data, emailSender)
    .then(() => cb(null, 'success'))
    .catch(err => cb(err));
};
