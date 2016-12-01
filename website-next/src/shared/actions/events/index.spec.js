import { expect } from 'chai';
import sinon from 'sinon';
import reducer, { fetchSuccessful, fetchFailure, fetchEvents } from './';
import actions from '../actions';

describe('events actions', () => {
  describe('fetch success', () => {
    it('returns an object containing events and correct type', () => {
      const events = {
        list: [],
      };
      expect(fetchSuccessful(events)).to.deep.equal({
        type: actions.FETCH_EVENTS_SUCCESS,
        events: events.list,
      });
    });
  });

  describe('fetch fail', () => {
    it('returns an object containing error and correct type', () => {
      expect(fetchFailure('error')).to.deep.equal({
        type: actions.FETCH_EVENTS_FAIL,
        error: 'error',
      });
    });
  });

  describe('fetch events', () => {
    let fetchFn;
    let fetch;

    beforeEach(() => {
      fetch = sinon.stub();
      fetchFn = fetchEvents(fetch);
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
          events: [],
        };
        getState = () => state;
      });

      it('returns a promise', () => {
        fetch.returns(Promise.resolve());

        expect(fetchFn(dispatch, getState).then).to.be.a('function');
      });

      it('resolves promise immediately if it already has some events', (done) => {
        state.events.push('event');

        fetchFn(dispatch, getState)
          .then((result) => {
            expect(result).to.deep.equal(state.events);
            done();
          });
      });

      it('fetches events if it does not have any', () => {
        fetch.returns(Promise.resolve());

        fetchFn(dispatch, getState);

        expect(fetch.calledWith('http://localhost:8000/api/events')).to.equal(true);
      });

      it('dispatches success action if all is well', (done) => {
        fetch.returns(Promise.resolve('events'));

        fetchFn(dispatch, getState)
          .then(() => {
            expect(dispatch.calledWithMatch(fetchSuccessful('events'))).to.equal(true);
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

describe('events reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal([]);
  });

  it('updates events if fetch was successful', () => {
    const action = {
      type: actions.FETCH_EVENTS_SUCCESS,
      events: 'events',
    };
    expect(reducer(undefined, action)).to.equal('events');
  });

  it('updates events if fetch failed', () => {
    const action = {
      type: actions.FETCH_EVENTS_FAIL,
      error: 'error',
    };
    expect(reducer(undefined, action)).to.deep.equal([]);
  });
});
