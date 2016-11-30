import { expect } from 'chai';
import sinon from 'sinon';
import linkResolver, { resolvers } from './linkResolvers';

describe('Preview link resolvers', () => {
  const rootPath = '/';
  let sandbox;
  let token;
  let doc;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();

    token = 'https://rb-website-stage.prismic.io/previews/2hK875KRXAAj0YVk';

    doc = {
      id: 'V2fPACUAANPVidtf',
      uid: 'my-event-title',
      type: 'event',
      data: {
        'event.timestamp': {
          value: '2016-10-22T08:00:00.000Z',
        },
      },
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('(default) linkResolver', () => {
    beforeEach(() => {
      sandbox.stub(resolvers, 'event');
    });

    it('invokes the resolver matching the document name', () => {
      linkResolver(token, doc);
      expect(resolvers.event.firstCall.args[0]).to.equal(token);
      expect(resolvers.event.firstCall.args[1]).to.deep.equal(doc);
    });
  });

  describe('#event(doc)', () => {
    it('returns the path for the event with the id in a query param', () => {
      const resolvedPath = resolvers.event(token, doc);
      expect(resolvedPath).to.equal(`/about-us/events/2016/10/22/${doc.uid}?id=${doc.id}&token=${token}`);
    });

    it('returns the root path if the event date is in an unexpected format', () => {
      doc.data['event.timestamp'] = new Date();
      const resolvedPath = resolvers.event(token, doc);
      expect(resolvedPath).to.equal(rootPath);
    });

    it('returns the root path if the event date is missing', () => {
      delete doc.data['event.timestamp'];
      const resolvedPath = resolvers.event(token, doc);
      expect(resolvedPath).to.equal(rootPath);
    });
  });
});
