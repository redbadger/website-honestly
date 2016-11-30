import { expect } from 'chai';
import sinon from 'sinon';
import reducer, { fetchSuccessful, fetchFailure, fetchNewsItem } from './news-item';
import { apiEndpoint } from '../../config';
import actions from '../actions';
import HttpError from '../../util/http-error';

describe('news actions', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('fetch success', () => {
    it('returns an object containing the news and correct type', () => {
      const news = {};

      expect(fetchSuccessful(news)).to.deep.equal({
        type: actions.FETCH_NEWS_ITEM_SUCCESS,
        news,
      });
    });
  });

  describe('fetch failure', () => {
    it('returns an object containing the news and correct type', () => {
      const error = new HttpError(404);

      expect(fetchFailure(error)).to.deep.equal({
        type: actions.FETCH_NEWS_ITEM_FAIL,
        error,
      });
    });
  });

  describe('fetch news', () => {
    let fetchFn;
    let fetch;

    beforeEach(() => {
      fetch = sandbox.stub().returns(Promise.resolve());
      fetchFn = fetchNewsItem(fetch);
    });

    it('returns a function', () => {
      expect(fetchFn).to.be.a('function');
    });

    describe('inner function', () => {
      let getState;
      let dispatch;
      let state;
      let nextState;

      beforeEach(() => {
        dispatch = sinon.spy();
        state = {
          news: [
            { slug: 'hello' },
            { slug: 'there' },
          ],
        };
        nextState = {
          params: {
            slug: 'unknown-news',
          },
        };
        getState = () => state;
      });

      it('dispatches success action if the news exists', (done) => {
        nextState.params.slug = 'hello';

        fetchFn(dispatch, getState, nextState)
          .then(() => {
            const successAction = fetchSuccessful(state.news[0]);
            expect(dispatch.firstCall.args[0]).to.deep.equal(successAction);
            done();
          })
          .catch(done);
      });

      it('dispatches fail action if the news does not exist, resolving with a 404 error', (done) => {
        fetchFn(dispatch, getState, nextState)
          .then((err) => {
            const failureAction = fetchFailure(new HttpError(404));
            expect(dispatch.firstCall.args[0]).to.deep.equal(failureAction);
            expect(err.error).to.be.an.instanceof(HttpError);
            done();
          });
      });

      describe('when a preview ID query is present', () => {
        beforeEach(() => {
          nextState = {
            location: {
              query: {
                id: 'V2fPACUAANPVidtf',
                token: 'https://rb-website-stage.prismic.io/previews/2hK875KRXAAj0YVk',
              },
            },
          };
        });

        it('fetches a single news', (done) => {
          fetch.returns(Promise.resolve('news'));

          fetchFn(dispatch, getState, nextState)
            .then(() => {
              const { id, token } = nextState.location.query;
              expect(fetch.firstCall.args[0]).to.equal(`${apiEndpoint}/news/${id}?token=${token}`);
              done();
            })
            .catch(done);
        });

        it('dispatches success action if the news exists', (done) => {
          fetch.returns(Promise.resolve('news'));

          fetchFn(dispatch, getState, nextState)
            .then(() => {
              const successAction = fetchSuccessful('news');
              expect(dispatch.firstCall.args[0]).to.deep.equal(successAction);
              done();
            })
            .catch(done);
        });

        it('dispatches fail action if the news does not exist, resolving with the api error', (done) => {
          const error = new Error('error');
          fetch.returns(Promise.reject(error));

          fetchFn(dispatch, getState, nextState)
            .then(() => {
              const failureAction = fetchFailure(error);
              expect(dispatch.firstCall.args[0]).to.deep.equal(failureAction);
              done();
            });
        });
      });
    });
  });
});

describe('news reducer', () => {
  it('returns a default state when the action is unkown', () => {
    expect(reducer(undefined, { type: 'UNKNOWN' })).to.deep.equal({});
  });

  describe('given a success news', () => {
    it('returns the news', () => {
      const action = {
        type: actions.FETCH_NEWS_ITEM_SUCCESS,
        news: {},
      };
      expect(reducer(undefined, action)).to.deep.equal(action.news);
    });
  });

  describe('given a fail news', () => {
    it('returns an empty object', () => {
      const action = {
        type: actions.FETCH_NEWS_ITEM_FAIL,
        error: new HttpError(404),
      };
      expect(reducer(undefined, action)).to.deep.equal({});
    });
  });
});
