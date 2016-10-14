import { validateAndSendEmail } from '.';

describe('contact-us-service/email.validateAndSendEmail', () => {
  const defaultEmail = {
    emailTo: ['hello@red-badger.com'],
    message: 'Hello, I want to work with you',
    contact: 'test@test.com',
  };

  it('resolves with error if email missing', () => {
    const promise = validateAndSendEmail();
    return expect(promise).to.eventually.deep.equal({
      success: false,
      error: 'Missing email',
    });
  });

  it('resolves with error if emailTo missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.emailTo;
    const promise = validateAndSendEmail(email);
    return expect(promise).to.eventually.deep.equal({
      success: false,
      error: 'Missing emailTo',
    });
  });

  it('resolves with error if message missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.message;
    const promise = validateAndSendEmail(email);
    return expect(promise).to.eventually.deep.equal({
      success: false,
      error: 'Missing message',
    });
  });

  it('resolves with error if contact missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.contact;
    const promise = validateAndSendEmail(email);
    return expect(promise).to.eventually.deep.equal({
      success: false,
      error: 'Missing contact',
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
            + `</strong></p><p>${defaultEmail.message}</p><p><strong>Contact details:</strong></p>`
            + `<p>${defaultEmail.contact}</p>`,
            Charset: 'UTF-8',
          },
          Text: {
            Data: 'This email was sent through the contact us form on red-badger.com:\n\n'
            + 'Hello, I want to work with you\n\nContact details:\n\ntest@test.com',
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
