const aws = require('aws-sdk');

aws.config.update('eu-west-1');
const simpleEmail = new aws.SES({ apiVersion: '2010-12-01' });

function sendEmail(
  email,
  htmlBody,
  textBody,
  subject,
  sendFn
) {
  const send = sendFn || simpleEmail.sendEmail.bind(simpleEmail);

  const emailConstruct = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Data: htmlBody,
          Charset: 'UTF-8',
        },
        Text: {
          Data: textBody,
          Charset: 'UTF-8',
        },
      },
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
    },
    Source: 'hello@red-badger.com',
  };

  return new Promise((resolve, reject) => {
    send(emailConstruct, err => {
      if (err) {
        reject(err);
      } else {
        resolve('success');
      }
    });
  });
}

// Your first function handler
module.exports.contactUs = (event, context, cb) => {
  console.log('event:', event);
  const message = event.message;
  const contact = event.contact;

  const messageLabel = 'This email was sent through the contact us form on red-badger.com: ';
  const contactLabel = 'Contact details: ';

  const formattedTxtMessage = `${messageLabel} \n\n ${message} \n\n ${contactLabel} \n\n ${contact}`;

  const formattedHTMLMessage = `<p><strong>${messageLabel}</strong></p><p>
    ${message}</p><p><strong>${contactLabel}</strong></p><p>${contact}</p>`;

  const formattedSubjectLine = 'Message submitted through the contact us form';

  return sendEmail(
    'zoe.bryant@red-badger.com',
    formattedHTMLMessage,
    formattedTxtMessage,
    formattedSubjectLine
  )
  .then(result => cb(null, result))
  .catch(err => cb(err));
};
