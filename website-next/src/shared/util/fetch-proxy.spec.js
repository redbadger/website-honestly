import fetchProxy from './fetch-proxy';
import HttpError from './http-error';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Fetch Proxy', () => {
  it('returns a function', () => {
    expect(fetchProxy()).to.be.a('function');
  });

  describe('function', () => {
    let fetchFunction;
    let response;

    beforeEach(() => {
      fetchFunction = sinon.stub();
      response = {
        json: sinon.stub().returns(Promise.resolve('data')),
        status: 200,
      };
    });

    it('calls fetch with the same arguments as it received', () => {
      fetchFunction.returns(Promise.resolve());
      fetchProxy(fetchFunction)('abc', 123);
      expect(fetchFunction.calledWith('abc', 123)).to.equal(true);
    });

    describe('when fetch gets rejected', () => {
      it('rejects with status 500', (done) => {
        fetchFunction.returns(Promise.reject('error'));
        fetchProxy(fetchFunction)().catch((err) => {
          expect(err).to.be.an.instanceof(HttpError);
          expect(err.status).to.equal(500);
          done();
        });
      });
    });

    describe('when fetch gets resolved with an error code', () => {
      it('rejects with 401', (done) => {
        response.status = 401;
        fetchFunction.returns(Promise.resolve(response));
        fetchProxy(fetchFunction)().catch((err) => {
          expect(err).to.be.an.instanceof(HttpError);
          expect(err.status).to.equal(401);
          done();
        });
      });

      it('rejects with 404', (done) => {
        response.status = 404;
        fetchFunction.returns(Promise.resolve(response));
        fetchProxy(fetchFunction)().catch((err) => {
          expect(err).to.be.an.instanceof(HttpError);
          expect(err.status).to.equal(404);
          done();
        });
      });

      it('rejects any other error codes with a default error', (done) => {
        response.status = 300003;
        fetchFunction.returns(Promise.resolve(response));
        fetchProxy(fetchFunction)().catch((err) => {
          expect(err).to.be.an.instanceof(HttpError);
          expect(err.status).to.equal(300003);
          done();
        });
      });
    });

    describe('when fetch gets resolved with status 200', () => {
      it('wraps the data, parses them into json and resolves', (done) => {
        fetchFunction.returns(Promise.resolve(response));
        fetchProxy(fetchFunction)().then((res) => {
          expect(res).to.deep.equal('data');
          done();
        });
      });
    });
  });
});
