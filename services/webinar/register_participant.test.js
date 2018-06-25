// @flow

import nock from 'nock';

import { apiBase } from './http_client';
import registerParticipant from './register_participant';

function expectHttpRequest(status) {
  const reqheaders = {
    accept: 'application/vnd.citrix.g2wapi-v1.1+json',
    authorization: 'token',
    'content-type': 'application/json',
  };

  const reqbody = JSON.stringify({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  });

  const resbody = {
    status: 'APPROVED',
  };

  nock(apiBase, { reqheaders })
    .post('/G2W/rest/organizers/55555/webinars/22222/registrants', reqbody)
    .query({
      resendConfirmation: true,
    })
    .reply(status, resbody);
}

describe('webinar-registration-service/register_participant', () => {
  describe('registerParticipant', () => {
    it('registers participant', () => {
      expectHttpRequest(201);

      expect.assertions(1);

      return expect(
        registerParticipant({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          webinarKey: '22222',
          accessToken: 'token',
          organizerKey: '55555',
        }),
      ).resolves.toEqual({
        status: 'APPROVED',
      });
    });

    it('succeeds even if participant is already registered', () => {
      expectHttpRequest(409);

      expect.assertions(1);

      return expect(
        registerParticipant({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          webinarKey: '22222',
          accessToken: 'token',
          organizerKey: '55555',
        }),
      ).resolves.toEqual({
        status: 'APPROVED',
      });
    });

    it('fails for other API error codes', () => {
      expectHttpRequest(500);

      expect.assertions(1);

      return expect(
        registerParticipant({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          webinarKey: '22222',
          accessToken: 'token',
          organizerKey: '55555',
        }),
      ).rejects.toThrowError();
    });
  });
});
