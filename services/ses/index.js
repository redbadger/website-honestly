function filterInternalErrors(error) {
  console.log('filterInternalErrors error>', error);
  if (error.isValidationError) {
    console.log('filterInternalErrors isValidationError');
    return {
      success: false,
      error: error.message,
    };
  }
  console.log('filterInternalErrors is not a ValidationError');
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

function constructEmail(emailData) {
  const messageLabel = 'This email was sent through the contact us form on red-badger.com:';
  const contactLabel = 'Contact details:';

  const formattedHTMLMessage = `<p><strong>${messageLabel}</strong></p><p>${emailData.message}</p>`
    + `<p><strong>${contactLabel}</strong></p><p>${emailData.contact}</p>`;

  const formattedTxtMessage = [
    messageLabel,
    emailData.message,
    contactLabel,
    emailData.contact,
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
  console.log('in makePromiseEmailSender');
  return emailData => emailSender(emailData, error => {
    if (error) {
      console.log('makePromiseEmailSender> error', error);
      throw error;
    }
    console.log('makePromiseEmailSender no error');
    return {
      success: true,
    };
  });
}

function newPromise() {
  return new Promise(resolve => resolve());
}

export function validateAndSendEmail(email, emailSender) {
  return newPromise()
    .then(() => assertPresent(email, 'Missing email'))
    .then(assertEmail)
    .then(constructEmail)
    .then(makePromiseEmailSender(emailSender))
    .catch(filterInternalErrors);
}
