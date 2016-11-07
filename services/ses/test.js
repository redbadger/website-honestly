import { validateAndSendEmail } from '.';

describe('contact-us-service/email.validateAndSendEmail', () => {
  const defaultEmail = {
    emailTo: ['hello@red-badger.com'],
    message: 'Hello,\n<b>I want to work with you</b>',
    contact: 'test@test.com',
  };

  it('resolves with errors if all fields missing', () => {
    const promise = validateAndSendEmail();
    return expect(promise).to.eventually.deep.equal({
      success: false,
      errors: {
        emailTo: 'Must be present',
        message: 'How can we help? Let us know in the box below.',
        contact: 'Please let us know your email address.',
      },
    });
  });

  it('resolves with error if emailTo missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.emailTo;
    const promise = validateAndSendEmail(email);
    return expect(promise).to.eventually.deep.equal({
      success: false,
      errors: {
        emailTo: 'Must be present',
      },
    });
  });

  it('resolves with error if message missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.message;
    const promise = validateAndSendEmail(email);
    return expect(promise).to.eventually.deep.equal({
      success: false,
      errors: {
        message: 'How can we help? Let us know in the box below.',
      },
    });
  });

  it('resolves with error if contact missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.contact;
    const promise = validateAndSendEmail(email);
    return expect(promise).to.eventually.deep.equal({
      success: false,
      errors: {
        contact: 'Please let us know your email address.',
      },
    });
  });

  it('resolves with error if contact is not an email address', () => {
    const email = Object.assign({}, defaultEmail);
    email.contact = '07546575829';
    const promise = validateAndSendEmail(email);
    return expect(promise).to.eventually.deep.equal({
      success: false,
      errors: {
        contact: 'Please let us know your email address.',
      },
    });
  });

  it('rejects if email sending fails', () => {
    const sendFunction = () => {
      const blankPromise = new Promise((resolve, reject) => {
        reject(new Error('Sending failed'));
      });
      return {
        promise: () => blankPromise,
      };
    };

    const promise = validateAndSendEmail(defaultEmail, sendFunction);
    return expect(promise).to.be.rejectedWith(Error, 'Sending failed');
  });

  it('constructs the correct email structure', done => {
    const emailConstruct = {
      Destination: {
        ToAddresses: [defaultEmail.emailTo],
      },
      Message: {
        Body: {
          Html: {
            Data: '<p><strong>This email was sent through the contact us form on red-badger.com:'
            + '</strong></p><p>Hello,<br>&lt;b&gt;I want to work with you&lt;/b&gt;</p><p><strong>Contact details:</strong></p>'
            + `<p>${defaultEmail.contact}</p>`,
            Charset: 'UTF-8',
          },
          Text: {
            Data: 'This email was sent through the contact us form on red-badger.com:\n\n'
            + 'Hello,\n&lt;b&gt;I want to work with you&lt;/b&gt;\n\nContact details:\n\ntest@test.com',
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

    const sendFunction = emailData => {
      const blankPromise = new Promise(resolve => {
        resolve();
        done();
      });

      expect(emailData).to.deep.equal(emailConstruct);
      return {
        promise: () => blankPromise,
      };
    };
    validateAndSendEmail(defaultEmail, sendFunction)
      .catch(done);
  });

  it('resolves if email sending succeeds', () => {
    const sendFunction = () => {
      const blankPromise = new Promise(resolve => {
        resolve();
      });
      return {
        promise: () => blankPromise,
      };
    };

    const promise = validateAndSendEmail(defaultEmail, sendFunction);
    return expect(promise).to.eventually.deep.equal({
      success: true,
    });
  });
});
