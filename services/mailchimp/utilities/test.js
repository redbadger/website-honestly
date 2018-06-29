// @flow

import {
  formatSignUpResponse,
  formatUpdateResponse,
  encryptText,
  decryptText,
  formatFormInput,
} from './index';

beforeEach(() => {
  process.env.SECRET_ENCRYPTION_KEY = 'secretKey';
});

describe('formatSignUpResponse', () => {
  it('returns the correct error message if the status code is 400', () => {
    const test = {
      detail: 'This email address has already signed up',
      status: 400,
      email_address: 'test@gmail.com',
      title: 'Member Exists',
      merge_fields: {
        FIRSTNAME: 'Andrew',
      },
    };

    const result = formatSignUpResponse(test);
    expect(result).toEqual({
      newsletterSubmitted: false,
      errorMessage: test.detail,
      email_address: encryptText('test@gmail.com'),
      updatedFormSubmitted: false,
    });
  });

  it('returns the correct values if there are no erros and a new account has been created', () => {
    const test = {
      detail: 'This email address has already signed up',
      last_changed: 'exampleDate',
      timestamp_opt: 'exampleDate',
      email_address: 'test@gmail.com',
      merge_fields: {
        FIRSTNAME: 'Andrew',
      },
    };

    const result = formatSignUpResponse(test);
    expect(result).toEqual({
      newsletterSubmitted: true,
      errorMessage: '',
      email_address: encryptText('test@gmail.com'),
      updatedFormSubmitted: false,
    });
  });
});

describe('formatUpdateResponse', () => {
  it('returns the correct values if there are no erros and a new account has been created', () => {
    const test = {
      detail: 'There was an error signing you up',
      last_changed: 'exampleDate',
      timestamp_opt: 'exampleDate',
      email_address: 'test@gmail.com',
      merge_fields: {
        FIRSTNAME: 'Andrew',
      },
    };

    const result = formatUpdateResponse(test);
    expect(result).toEqual({
      newsletterSubmitted: false,
      errorMessage: '',
      email_address: 'test@gmail.com',
      updatedFormSubmitted: false,
    });
  });
});

describe('encryptText and decryptText', () => {
  it('does not return the same text that was passed in', () => {
    const plainText = 'example text';
    const result = encryptText(plainText);
    expect(result).not.toEqual(plainText);
  });

  it('returned the original plain text when decrypted', () => {
    const plainText = 'example text';
    const encryptedText = encryptText(plainText);
    const decryptedText = decryptText(encryptedText);
    expect(decryptedText).toEqual(plainText);
  });
});

describe('formatFormInput', () => {
  it('returns the correct output if the email address is not encrypted', () => {
    const event = {
      body: {
        email_address: 'test@gmail.com',
        name: 'Testa',
        surname: 'Fiesta',
        company: 'Red Badger',
        role: 'Developer',
        interests: {},
      },
    };
    const result = formatFormInput(event, false, 'pending');
    expect(result).toEqual({
      email_address: 'test@gmail.com',
      status: 'pending',
      interests: {},
      merge_fields: {
        FIRSTNAME: 'Testa',
        LASTNAME: 'Fiesta',
        COMPANY: 'Red Badger',
        ROLE: 'Developer',
      },
    });
  });
  it('returns the correct output if the email address is encrypted', () => {
    const event = {
      body: {
        email_address: encryptText('test@gmail.com'),
        name: 'Testa',
        surname: 'Fiesta',
        company: 'Red Badger',
        role: 'Developer',
        interests: {},
      },
    };
    const result = formatFormInput(event, true, 'pending');
    expect(result).toEqual({
      email_address: 'test@gmail.com',
      status: 'pending',
      interests: {},
      merge_fields: {
        FIRSTNAME: 'Testa',
        LASTNAME: 'Fiesta',
        COMPANY: 'Red Badger',
        ROLE: 'Developer',
      },
    });
  });
  it('returns the correct output if the status is not included', () => {
    const event = {
      body: {
        email_address: 'test@gmail.com',
        name: 'Testa',
        surname: 'Fiesta',
        company: 'Red Badger',
        role: 'Developer',
        interests: {},
      },
    };
    const result = formatFormInput(event, false);
    expect(result).toEqual({
      email_address: 'test@gmail.com',
      interests: {},
      merge_fields: {
        FIRSTNAME: 'Testa',
        LASTNAME: 'Fiesta',
        COMPANY: 'Red Badger',
        ROLE: 'Developer',
      },
    });
  });
});
