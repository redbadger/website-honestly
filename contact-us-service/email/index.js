
function assertPresent(thing, message) {
  if (!thing) { throw new Error(message); }
  return thing;
}

function assertEmail(email) {
  ['emailTo', 'emailFrom', 'htmlBody', 'textBody', 'subject']
    .forEach(field => {
      assertPresent(email[field], `Missing ${field}`);
    });
  return email;
}

function constructEmail(emailData) {
  return {
    Destination: {
      ToAddresses: emailData.emailTo,
    },
    Message: {
      Body: {
        Html: {
          Data: emailData.htmlBody,
          Charset: 'UTF-8',
        },
        Text: {
          Data: emailData.textBody,
          Charset: 'UTF-8',
        },
      },
      Subject: {
        Data: emailData.subject,
        Charset: 'UTF-8',
      },
    },
    Source: emailData.emailFrom,
  };
}

function validateAndSendEmail(email, emailSender) {
  return new Promise(resolve => resolve())
    .then(() => assertPresent(email, 'Missing email'))
    .then(assertEmail)
    .then(constructEmail)
    .then(emailData => emailSender(emailData, error => {
      if (error) { throw error; }
      return true;
    }));
}

module.exports = {
  validateAndSendEmail,
};
