import { validateAndSendEmail } from '.';

describe('contact-us-service/email.validateAndSendEmail', () => {
  const defaultEmail = {
    emailTo: ['hello@red-badger.com'],
    emailFrom: 'hello@red-badger.com',
    htmlBody: '<p>Html Body</p>',
    textBody: 'Text body \n',
    subject: 'Just a string',
  };

  it('rejects if email missing', () => {
    return expect(validateAndSendEmail()).to.be.rejectedWith(Error, 'Missing email');
  });

  it('rejects if emailTo missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.emailTo;
    return expect(validateAndSendEmail(email)).to.be.rejectedWith(Error, 'Missing emailTo');
  });

  it('rejects if emailFrom missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.emailFrom;
    return expect(validateAndSendEmail(email)).to.be.rejectedWith(Error, 'Missing emailFrom');
  });

  it('rejects if htmlBody missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.htmlBody;
    return expect(validateAndSendEmail(email)).to.be.rejectedWith(Error, 'Missing htmlBody');
  });

  it('rejects if textBody missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.textBody;
    return expect(validateAndSendEmail(email)).to.be.rejectedWith(Error, 'Missing textBody');
  });

  it('rejects if subject missing', () => {
    const email = Object.assign({}, defaultEmail);
    delete email.subject;
    return expect(validateAndSendEmail(email)).to.be.rejectedWith(Error, 'Missing subject');
  });

  it('rejects if email sending fails', () => {
    const failingSendingFn = (email, cb) => {
      cb(new Error('Sending failed'));
    };
    const promise = validateAndSendEmail(defaultEmail, failingSendingFn);
    return expect(promise).to.be.rejectedWith(Error, 'Sending failed');
  });

  it('constructs the correct email structure', done => {
    const emailConstruct = {
      Destination: {
        ToAddresses: defaultEmail.emailTo,
      },
      Message: {
        Body: {
          Html: {
            Data: defaultEmail.htmlBody,
            Charset: 'UTF-8',
          },
          Text: {
            Data: defaultEmail.textBody,
            Charset: 'UTF-8',
          },
        },
        Subject: {
          Data: defaultEmail.subject,
          Charset: 'UTF-8',
        },
      },
      Source: defaultEmail.emailFrom,
    };

    const sendFunction = (emailData, cb) => {
      expect(emailData).to.deep.equal(emailConstruct);
      cb(null, emailConstruct);
      done();
    };
    validateAndSendEmail(defaultEmail, sendFunction)
      .catch(done);
  });

  it('resolves if email sending succeeds', () => {
    const sendFunction = (emailData, cb) => cb(null, emailData);

    const promise = validateAndSendEmail(defaultEmail, sendFunction);
    return expect(promise).to.eventually.equal(true);
  });
});
