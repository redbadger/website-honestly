import sinon from 'sinon';
import { expect } from 'chai';
import { Prismic } from 'express-prismic';
import linkResolver from './linkResolvers';
import enableDocumentPreview from './';

describe('Preview route', () => {
  let app;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();

    sandbox.stub(Prismic, 'init');
    sandbox.stub(Prismic, 'preview');

    app = {
      get: sandbox.stub(),
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('connects to the Red Badger API endpoint', () => {
    enableDocumentPreview(app);

    expect(Prismic.init.firstCall.args[0].apiEndpoint)
      .to.equal('https://rb-website-stage.prismic.io/api');
  });

  it('applies the preview route to the provided express app', () => {
    enableDocumentPreview(app);

    expect(app.get.firstCall.args[0]).to.equal('/preview');
    expect(app.get.firstCall.args[1]).to.be.a('function');
  });

  it('returns the express app', () => {
    expect(enableDocumentPreview(app)).to.deep.equal(app);
  });

  describe('when the /preview route is invoked', () => {
    let routeHandler;
    let req;

    beforeEach(() => {
      enableDocumentPreview(app);

      routeHandler = app.get.firstCall.args[1];

      req = {
        query: {
          token: 'https://rb-website-stage.prismic.io/previews/2hK875KRXAAj0YVk',
        },
      };

      sandbox.spy(linkResolver, 'bind');
    });

    it('binds the preview token to the link resolver', () => {
      routeHandler(req);

      expect(linkResolver.bind.firstCall.args[0]).to.equal(null);
      expect(linkResolver.bind.firstCall.args[1]).to.equal(req.query.token);
    });

    it('invokes the Prismic.preview handler and passes the required arguments', () => {
      const res = {};
      const ctx = {};

      routeHandler(req, res, ctx);

      expect(Prismic.preview.firstCall.args[0]).to.equal(req);
      expect(Prismic.preview.firstCall.args[1]).to.equal(res);
      expect(Prismic.preview.firstCall.args[2]).to.equal(ctx);
    });
  });
});
