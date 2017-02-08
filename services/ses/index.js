const messageLabel = 'This email was sent through the contact us form on red-badger.com:';
const contactLabel = 'Contact details:';

const fieldMessages = {
  emailTo: 'Must be present',
  message: 'How can we help? Let us know in the box below.',
  contact: 'Please let us know your email address.',
};

function filterInternalErrors(error) {
  if (error.isValidationError) {
    return {
      success: false,
      errors: error.errors,
    };
  }
  throw error;
}

export function validateContact(contact) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(contact);
}

function throwValidationError(errors) {
  const error = new Error('Validation errors');
  error.errors = errors;
  error.isValidationError = true;
  throw error;
}

function validateEmail(email) {
  const validateField = (errors, field) => {
    if (!email[field]) {
      return Object.assign(errors, {
        [field]: fieldMessages[field],
      });
    }
    if (field === 'contact' && !validateContact(email.contact)) {
      return {
        contact: fieldMessages.contact,
      };
    }
    return errors;
  };

  if (!email) {
    throwValidationError(fieldMessages);
  }

  const errors = Object.keys(fieldMessages).reduce(validateField, {});

  if (Object.keys(errors).length > 0) {
    throwValidationError(errors);
  }

  return email;
}

function sanitizeContent(content) {
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function constructEmail(emailData) {
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
  return Promise.resolve(email)
    .then(validateEmail)
    .then(constructEmail)
    .then(makePromiseEmailSender(emailSender))
    .catch(filterInternalErrors);
}
