import { formatResponse } from './index';

describe('formatResponse', () => {
  it('returns the correct error message if the status code is 400', () => {
    const test = {
      detail: 'An email address must contain a single @',
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
      email_address: 'test@gmail.com',
    });
  });
  it('returns the correct error message response if the account already exists', () => {
    const test = {
      detail: 'An email address must contain a single @',
      last_changed: 'exampleDate',
      timestamp_opt: 'differntDate',
      email_address: 'test@gmail.com',
      merge_fields: {
        FNAME: '',
      },
    };

    const result = formatResponse(test);
    expect(result).to.deep.equal({
      newsletterSubmitted: false,
      errorMessage: 'This email address has already signed up to this mailing list',
      email_address: 'test@gmail.com',
    });
  });
  it('returns the correct values if there are no erros and a new account has been created', () => {
    const test = {
      detail: 'An email address must contain a single @',
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
      email_address: 'test@gmail.com',
    });
  });
});
