import { requestHandler, mapRouteToPageTitle } from './';
import sinon from 'sinon';
import { expect } from 'chai';

describe('router middleware', () => {
  describe('setting correct page title based on the current route', () => {
    it('returns correct title for Events related routes', () => {
      expect(mapRouteToPageTitle('/about-us/events/myevent')).to.equal('Events | Red Badger');
    });
    it('returns correct title for News related routes', () => {
      expect(mapRouteToPageTitle('/about-us/news/mynews')).to.equal('News | Red Badger');
    });
    it('returns correct title for Join Us related routes', () => {
      expect(mapRouteToPageTitle('/about-us/join-us/job')).to.equal('Join Us | Red Badger');
    });
  });

  describe('request handler', () => {
    it('returns a 200 and renders when route is found', () => {
      const send = sinon.stub();
      const res = { status: sinon.stub().returns({ send }) };
      const store = {};
      const renderer = sinon.stub();
      const props = {};
      const handle = requestHandler(null, res, store, renderer);
      handle(null, null, props);

      expect(res.status.calledWith(200)).to.equal(true);
      expect(send.called).to.equal(true);
      expect(renderer.calledWith(store, props));
    });

    it('returns a 404 when route is not found', () => {
      const send = sinon.stub();
      const res = { status: sinon.stub().returns({ send }) };
      const renderer = sinon.stub();
      const handle = requestHandler(null, res, null, renderer);
      handle();

      expect(res.status.calledWith(404)).to.equal(true);
      expect(send.called).to.equal(true);
    });

    it('returns a 302 when redirectLocation is defined', () => {
      const res = { redirect: sinon.stub() };
      const handle = requestHandler(null, res, null, null);
      handle(null, { pathname: '/redirect', search: '' });
      expect(res.redirect.calledWith(302, '/redirect')).to.equal(true);
    });

    it('returns a 500 when an error occurs', () => {
      sinon.stub(console, 'error');
      const error = { message: 'Oh, no!' };
      const send = sinon.stub();
      const res = { status: sinon.stub().returns({ send }) };
      const handle = requestHandler(null, res, null, null);
      handle(error);
      console.error.restore();
      expect(res.status.calledWith(500)).to.equal(true);
      expect(send.called).to.equal(true);
    });
  });
});
