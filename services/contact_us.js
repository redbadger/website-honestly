/* eslint-disable no-console */
import aws from 'aws-sdk'; // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies
import { validateAndSendEmail } from './ses';

const contactUsEmailTo = process.env.CONTACT_US_EMAIL_TO;

if (!contactUsEmailTo) {
  throw new Error('CONTACT_US_EMAIL_TO environment variable not set!');
}

export default function doContactUs(event, cb) {
  const data = {
    emailTo: contactUsEmailTo,
    message: event.body.message,
    contact: event.body.contact,
  };

  console.log('data >', data);

  aws.config.update('eu-west-1');
  const simpleEmail = new aws.SES({ apiVersion: '2010-12-01' });
  const emailSender = simpleEmail.sendEmail.bind(simpleEmail);

  validateAndSendEmail(data, emailSender)
    .then(result => cb(null, result))
    .catch(err => {
      console.error(err);
      cb(err);
    });
}
