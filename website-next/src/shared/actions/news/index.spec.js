import { expect } from 'chai';
import sinon from 'sinon';
import reducer, { fetchSuccessful, fetchFailure, fetchNews } from './';
import actions from '../actions';

describe('news actions', () => {
  describe('fetch success', () => {
    it('returns an object containing news and correct type', () => {
      const news = {
        list: [],
      };
      expect(fetchSuccessful(news)).to.deep.equal({
        type: actions.FETCH_NEWS_SUCCESS,
        news: news.list,
      });
    });
  });

  describe('fetch fail', () => {
    it('returns an object containing error and correct type', () => {
      expect(fetchFailure('error')).to.deep.equal({
        type: actions.FETCH_NEWS_FAIL,
      });
    });
  });

  describe('fetch news', () => {
    let fetchFn;
    let fetch;

    beforeEach(() => {
      fetch = sinon.stub();
      fetchFn = fetchNews(fetch);
    });

    it('returns a function', () => {
      expect(fetchFn).to.be.a('function');
    });

    describe('inner function', () => {
      let getState;
      let dispatch;
      let state;

      beforeEach(() => {
        dispatch = sinon.stub();
        state = {
          news: [],
        };
        getState = () => state;
      });

      it('returns a promise', () => {
        fetch.returns(Promise.resolve());

        expect(fetchFn(dispatch, getState).then).to.be.a('function');
      });

      it('resolves promise immediately if it already has some news', (done) => {
        state.news.push('news');

        fetchFn(dispatch, getState)
          .then((result) => {
            expect(result).to.deep.equal(state.news);
            done();
          });
      });

      it('fetches news if it does not have any', () => {
        fetch.returns(Promise.resolve());

        fetchFn(dispatch, getState);

        expect(fetch.calledWith('http://localhost:8000/api/news')).to.equal(true);
      });

      it('dispatches success action if all is well', (done) => {
        fetch.returns(Promise.resolve('news'));

        fetchFn(dispatch, getState)
          .then(() => {
            expect(dispatch.calledWithMatch(fetchSuccessful('news'))).to.equal(true);
            done();
          });
      });

      it('dispatches fail action if something goes terribly wrong', (done) => {
        fetch.returns(Promise.reject('error'));

        fetchFn(dispatch, getState)
          .then(() => {
            expect(dispatch.calledWithMatch(fetchFailure('error'))).to.equal(true);
            done();
          });
      });
    });
  });
});

describe('news reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal([]);
  });

  it('updates news if fetch was successful', () => {
    const action = {
      type: actions.FETCH_NEWS_SUCCESS,
      news: 'news',
    };
    expect(reducer(undefined, action)).to.equal('news');
  });

  it('updates news if fetch failed', () => {
    const action = {
      type: actions.FETCH_NEWS_FAIL,
      error: 'error',
    };
    expect(reducer(undefined, action)).to.deep.equal([]);
  });
});
