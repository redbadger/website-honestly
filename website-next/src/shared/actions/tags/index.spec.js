import { expect } from 'chai';
import sinon from 'sinon';
import { fetchFailure, fetchTags } from './';

describe('tags actions', () => {
  let fetchFn;
  let fetch;

  beforeEach(() => {
    fetch = sinon.stub();
    fetchFn = fetchTags(fetch);
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
        events: [],
      };
      getState = () => state;
    });

    it('returns a promise', () => {
      fetch.returns(Promise.resolve());

      expect(fetchFn(dispatch, getState).then).to.be.a('function');
    });

    it('resolves promise immediately if it already has some news and events', (done) => {
      state.news.push('news');
      state.events.push('news');

      fetchFn(dispatch, getState)
        .then((result) => {
          expect(result.news).to.deep.equal(state.news);
          expect(result.events).to.deep.equal(state.events);
          done();
        });
    });

    it('fetches news and events if it does not have any', () => {
      fetch.returns(Promise.resolve());

      fetchFn(dispatch, getState);

      expect(fetch.calledWith('http://localhost:8000/api/tags')).to.equal(true);
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
