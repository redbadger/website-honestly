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
    message: event.message,
    contact: event.contact,
  };

  aws.config.update('eu-west-1');
  const simpleEmail = new aws.SES({ apiVersion: '2010-12-01' });
  const emailSender = simpleEmail.sendEmail.bind(simpleEmail);

  const promise = validateAndSendEmail(data, emailSender);
  console.log(promise);

  promise.then(result => {
      console.log('hi>', result);
      cb(null, result);
    })
    .catch(err => {
      console.error(err);
      cb(err);
    });
}
