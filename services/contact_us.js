const contactUsEmailTo = process.env.CONTACT_US_EMAIL_TO;

if (!contactUsEmailTo) {
  throw new Error('CONTACT_US_EMAIL_TO environment variable not set!');
}

export function doContactUs(event, cb) {
  const aws = require('aws-sdk'); // eslint-disable-line import/no-unresolved, global-require, import/no-extraneous-dependencies
  const validateAndSendEmail = require('./ses').validateAndSendEmail; // eslint-disable-line global-require

  const data = {
    emailTo: contactUsEmailTo,
    message: event.message,
    contact: event.contact,
  };

  aws.config.update('eu-west-1');
  const simpleEmail = new aws.SES({ apiVersion: '2010-12-01' });
  const emailSender = simpleEmail.sendEmail.bind(simpleEmail);

  validateAndSendEmail(data, emailSender)
    .then(() => cb(null, 'success'))
    .catch(err => cb(err));
}
