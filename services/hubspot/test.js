import nock from 'nock';
import sinon from 'sinon';

import { encodeData, hubspotPOST } from './util';

describe('hubspot util', () => {
  describe('encodeData', () => {
    it('encodes an object to a form string', () => {
      const data = { email: 'test@gmail.com', name: 'Bill Murray' };
      expect(encodeData(data)).to.equal('email=test%40gmail.com&name=Bill%20Murray');
    });
  });

  describe('hubspotPOST', () => {
    it('calls the callback with null for an succesful requst', done => {
      const cb = sinon.spy();
      const expectedUrl = 'https://example.com';
      nock(expectedUrl)
        .post('/')
        .reply(200);
      const promise = hubspotPOST(expectedUrl, {}, cb);
      promise.then(() => {
        expect(cb.calledWith(null)).to.equal(true);
        done();
      });
    });

    it('calls the callback with an error for an unsuccesful requst', done => {
      const cb = sinon.spy();
      const expectedUrl = 'https://example.com';
      nock(expectedUrl)
        .post('/')
        .replyWithError('Error');
      const promise = hubspotPOST(expectedUrl, {}, cb);
      promise.then(() => {
        expect(cb.calledWith(sinon.match.instanceOf(Error))).to.equal(true);
        done();
      });
    });
  });
});
