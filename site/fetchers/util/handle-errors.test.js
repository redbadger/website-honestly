import handleErrors from './handle-errors';

describe('site/fetchers/handle-errors', () => {
  it('returns the response when OK', () => {
    const response = { ok: true };
    expect(handleErrors(response)).toEqual(response);
  });

  it('throws when the response contains an error', () => {
    const badRequest = () => handleErrors({ ok: false });
    expect(() => badRequest()).toThrowError(/for request/);
  });
});
