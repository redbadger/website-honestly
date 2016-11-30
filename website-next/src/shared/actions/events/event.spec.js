import { expect } from 'chai';
import sinon from 'sinon';
import { defaultEvent } from '../../../../spec/fixtures/events';
import reducer, { fetchSuccessful, fetchFailure, fetchEvent } from './event';
import { apiEndpoint } from '../../config';
import actions from '../actions';
import HttpError from '../../util/http-error';

describe('event actions', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('fetch success', () => {
    it('returns an object containing the event and correct type', () => {
      const event = {};

      expect(fetchSuccessful(event)).to.deep.equal({
        type: actions.FETCH_EVENT_SUCCESS,
        event,
      });
    });
  });

  describe('fetch failure', () => {
    it('returns an object containing the event and correct type', () => {
      const error = new HttpError(404);

      expect(fetchFailure(error)).to.deep.equal({
        type: actions.FETCH_EVENT_FAIL,
        error,
      });
    });
  });

  describe('fetch event', () => {
    let fetchFn;
    let fetch;

    beforeEach(() => {
      fetch = sandbox.stub().returns(Promise.resolve());
      fetchFn = fetchEvent(fetch);
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
          event: {},
          events: [
            { slug: 'hello' },
            { slug: 'there' },
          ],
        };
        nextState = {
          params: {
            slug: 'unknown-event',
          },
        };
        getState = () => state;
      });

      it('returns a resolved promise containing the event from the store', (done) => {
        state.event = defaultEvent;
        fetchFn(dispatch, getState, nextState)
          .then((event) => {
            expect(event).to.deep.equal(state.event);
            expect(fetch.callCount).to.equal(0);
            expect(dispatch.callCount).to.equal(0);
            done();
          })
          .catch(done);
      });

      describe('when there is no event in the store', () => {
        it('dispatches success action if the event exists', (done) => {
          nextState.params.slug = 'hello';

          fetchFn(dispatch, getState, nextState)
            .then(() => {
              const successAction = fetchSuccessful(state.events[0]);
              expect(dispatch.firstCall.args[0]).to.deep.equal(successAction);
              done();
            })
            .catch(done);
        });

        it('dispatches fail action if the event does not exist, resolving with a 404 error', (done) => {
          fetchFn(dispatch, getState, nextState)
            .then((err) => {
              const failureAction = fetchFailure(new HttpError(404));
              expect(dispatch.firstCall.args[0]).to.deep.equal(failureAction);
              expect(err.error).to.be.an.instanceof(HttpError);
              done();
            });
        });
      });

      describe('when there is no event in the store and preview query params are set', () => {
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

        it('fetches a single event', (done) => {
          fetch.returns(Promise.resolve('event'));

          fetchFn(dispatch, getState, nextState)
            .then(() => {
              const { id, token } = nextState.location.query;
              expect(fetch.firstCall.args[0]).to.equal(`${apiEndpoint}/event/${id}?token=${token}`);
              done();
            })
            .catch(done);
        });

        it('dispatches success action if the event exists', (done) => {
          fetch.returns(Promise.resolve('event'));

          fetchFn(dispatch, getState, nextState)
            .then(() => {
              const successAction = fetchSuccessful('event');
              expect(dispatch.firstCall.args[0]).to.deep.equal(successAction);
              done();
            })
            .catch(done);
        });

        it('dispatches fail action if the event does not exist, resolving with the api error', (done) => {
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

describe('event reducer', () => {
  it('returns a default state when the action is unkown', () => {
    expect(reducer(undefined, { type: 'UNKNOWN' })).to.deep.equal({});
  });

  describe('given a success event', () => {
    it('returns the event', () => {
      const action = {
        type: actions.FETCH_EVENT_SUCCESS,
        event: {},
      };
      expect(reducer(undefined, action)).to.deep.equal(action.event);
    });
  });

  describe('given a fail event', () => {
    it('returns an empty object', () => {
      const action = {
        type: actions.FETCH_EVENT_FAIL,
        error: new HttpError(404),
      };
      expect(reducer(undefined, action)).to.deep.equal({});
    });
  });
});
