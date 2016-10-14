function filterInternalErrors(error) {
  if (error.isValidationError) {
    return {
      success: false,
      error: error.message,
    };
  }
  throw error;
}

function assertPresent(thing, message) {
  if (!thing) {
    const error = new Error(message);
    error.isValidationError = true;
    throw error;
  }
  return thing;
}

function assertEmail(email) {
  ['emailTo', 'message', 'contact']
    .forEach(field => {
      assertPresent(email[field], `Missing ${field}`);
    });
  return email;
}

function sanitizeContent(content) {
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function constructEmail(emailData) {
  const messageLabel = 'This email was sent through the contact us form on red-badger.com:';
  const contactLabel = 'Contact details:';

  const message = sanitizeContent(emailData.message);
  const contact = sanitizeContent(emailData.contact);

  const formattedHTMLMessage =
    (`<p><strong>${messageLabel}</strong></p><p>${message}</p>`
      + `<p><strong>${contactLabel}</strong></p><p>${contact}</p>`)
    .replace(/\n/g, '<br>');

  const formattedTxtMessage = [
    messageLabel,
    message,
    contactLabel,
    contact,
  ].join('\n\n');

  return {
    Destination: {
      ToAddresses: [emailData.emailTo],
    },
    Message: {
      Body: {
        Html: {
          Data: formattedHTMLMessage,
          Charset: 'UTF-8',
        },
        Text: {
          Data: formattedTxtMessage,
          Charset: 'UTF-8',
        },
      },
      Subject: {
        Data: 'Message submitted through the contact us form on red-badger.com',
        Charset: 'UTF-8',
      },
    },
    Source: 'hello@red-badger.com',
  };
}

function makePromiseEmailSender(emailSender) {
  return emailData => emailSender(emailData)
    .promise()
    .then(() => ({ success: true }));
}

export function validateAndSendEmail(email, emailSender) {
  return new Promise(resolve => resolve())
    .then(() => assertPresent(email, 'Missing email'))
    .then(assertEmail)
    .then(constructEmail)
    .then(makePromiseEmailSender(emailSender))
    .catch(filterInternalErrors);
}
