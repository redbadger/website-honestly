import HttpError from './http-error';
import { expect } from 'chai';

describe('HttpError', () => {
  it('extends Error', () => {
    const error = new HttpError(500);
    expect(error).to.be.an.instanceof(HttpError);
    expect(error).to.be.an.instanceof(Error);
  });

  describe('instance', () => {
    it('has name property', () => {
      const error = new HttpError(500);
      expect(error.name).to.equal('HttpError');
    });

    it('has status property', () => {
      const error = new HttpError(500);
      expect(error.status).to.equal(500);
    });

    it('maps status to correct message', () => {
      const error401 = new HttpError(401);
      const error404 = new HttpError(404);
      const error500 = new HttpError(500);
      const errorOther = new HttpError(504);
      expect(error401.message).to.equal('Not Authorised');
      expect(error404.message).to.equal('Not Found');
      expect(error500.message).to.equal('Network Error');
      expect(errorOther.message).to.equal('Error');
    });
  });
});
