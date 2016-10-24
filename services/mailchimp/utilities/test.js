import { formatResponse, encryptText, decryptText, formatFormInput } from './index';

describe('formatResponse', () => {
  it('returns the correct error message if the status code is 400', () => {
    const test = {
      detail: 'There was an error signing you up',
      status: 400,
      email_address: 'test@gmail.com',
      merge_fields: {
        FNAME: 'Andrew',
      },
    };

    const result = formatResponse(test);
    expect(result).to.deep.equal({
      newsletterSubmitted: false,
      errorMessage: test.detail,
      email_address: encryptText('test@gmail.com'),
      updatedFormSubmitted: false,
    });
  });
  it('returns the correct error message response if the account already exists', () => {
    const test = {
      detail: 'There was an error signing you up',
      last_changed: 'exampleDate',
      timestamp_opt: 'differntDate',
      email_address: 'test@gmail.com',
      merge_fields: {
        FNAME: '',
      },
    };
    const data = {
      merge_fields: {
        FNAME: '',
      },
    };

    const result = formatResponse(test, data);
    expect(result).to.deep.equal({
      newsletterSubmitted: true,
      errorMessage: '',
      email_address: encryptText('test@gmail.com'),
      updatedFormSubmitted: false,
    });
  });
  it('returns the correct values if there are no erros and a new account has been created', () => {
    const test = {
      detail: 'There was an error signing you up',
      last_changed: 'exampleDate',
      timestamp_opt: 'exampleDate',
      email_address: 'test@gmail.com',
      merge_fields: {
        FNAME: 'Andrew',
      },
    };

    const result = formatResponse(test);
    expect(result).to.deep.equal({
      newsletterSubmitted: true,
      errorMessage: '',
      email_address: encryptText('test@gmail.com'),
      updatedFormSubmitted: false,
    });
  });
});


describe('encryptText and decryptText', () => {
  it('does not return the same text that was passed in', () => {
    const plainText = 'example text';
    const result = encryptText(plainText);
    expect(result).to.not.equal(plainText);
  });

  it('returned the original plain text when decrypted', () => {
    const plainText = 'example text';
    const encryptedText = encryptText(plainText);
    const decryptedText = decryptText(encryptedText);
    expect(decryptedText).to.equal(plainText);
  });
});


describe('formatFormInput', () => {
  it('returns the correct output if the email address is not encrypted', () => {
    const event = {
      body: {
        email_address: 'test@gmail.com',
        name: 'Testa Fiesta',
        company: 'Red Badger',
        role: 'Developer',
      },
    };
    const result = formatFormInput(event, false);
    expect(result).to.deep.equal({
      email_address: 'test@gmail.com',
      status: 'subscribed',
      merge_fields: {
        FNAME: 'Testa',
        LNAME: 'Fiesta',
        COMPANY: 'Red Badger',
        ROLE: 'Developer',
      },
    });
  });
  it('returns the correct output if the email address is encrypted', () => {
    const event = {
      body: {
        email_address: encryptText('test@gmail.com'),
        name: 'Testa Fiesta',
        company: 'Red Badger',
        role: 'Developer',
      },
    };
    const result = formatFormInput(event, true);
    expect(result).to.deep.equal({
      email_address: 'test@gmail.com',
      status: 'subscribed',
      merge_fields: {
        FNAME: 'Testa',
        LNAME: 'Fiesta',
        COMPANY: 'Red Badger',
        ROLE: 'Developer',
      },
    });
  });
});
