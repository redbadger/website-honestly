
module.exports.contactUs = (event, context, cb) => {
  const aws = require('aws-sdk'); // eslint-disable-line import/no-unresolved, global-require
  const env = require('./config/env.json'); // eslint-disable-line import/no-unresolved, global-require
  const validateAndSendEmail = require('./email').validateAndSendEmail; // eslint-disable-line global-require

  aws.config.update('eu-west-1');
  const simpleEmail = new aws.SES({ apiVersion: '2010-12-01' });
  const emailSender = simpleEmail.sendEmail.bind(simpleEmail);

  const data = {
    emailTo: env.emailTo,
    emailFrom: env.emailFrom,
    message: event.message,
    contact: event.contact,
  };

  validateAndSendEmail(data, emailSender)
    .then(() => cb(null, 'success'))
    .catch(err => cb(err));
};
