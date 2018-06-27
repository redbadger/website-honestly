import handleErrors from './handle-errors';

describe('fetcher error handling', () => {
  it('returns the response when OK', () => {
    const response = { ok: true };
    expect(handleErrors(response)).toEqual(response);
  });

  it('throws when the response contains an error', () => {
    const badRequest = () => handleErrors({ ok: false });
    expect(badRequest).toThrow(); // eslint-disable-line no-unused-expressions
  });
});
