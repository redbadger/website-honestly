import reducer, { fetchSuccessful, fetchFailure, fetchJob } from './job';
import actions from '../actions';
import { expect } from 'chai';
import HttpError from '../../util/http-error';
import sinon from 'sinon';

describe('job actions', () => {
  describe('fetch success', () => {
    it('returns an object containing job and correct type', () => {
      expect(fetchSuccessful('job')).to.deep.equal({
        type: actions.FETCH_JOB_SUCCESS,
        job: 'job',
      });
    });
  });

  describe('fetch fail', () => {
    it('returns an object containing error and correct type', () => {
      expect(fetchFailure('error')).to.deep.equal({
        type: actions.FETCH_JOB_FAIL,
        error: 'error',
      });
    });
  });

  describe('fetch job', () => {
    let fetchFn;
    let fetch;

    beforeEach(() => {
      fetch = sinon.stub();
      fetchFn = fetchJob(fetch);
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
          jobs: [
            { slug: 'hello' },
            { slug: 'there' },
          ],
        };
        nextState = {
          params: {},
        };
        getState = () => state;
      });

      it('returns a promise', () => {
        fetch.returns(Promise.resolve());

        expect(fetchFn(dispatch, getState, nextState).then).to.be.a('function');
      });

      it('dispatches success action if the job exists', (done) => {
        nextState.params.id = 'hello';
        fetch.returns(Promise.resolve());

        fetchFn(dispatch, getState, nextState)
          .then(() => {
            expect(dispatch.calledWithMatch(fetchSuccessful(state.jobs[0]))).to.equal(true);
            done();
          });
      });

      it('dispatches fail action if the job does not exist, resolving with a 404 error', (done) => {
        fetch.returns(Promise.resolve());

        fetchFn(dispatch, getState, nextState)
          .then((err) => {
            expect(dispatch.calledWithMatch(fetchFailure(new HttpError(404)))).to.equal(true);
            expect(err.error).to.be.an.instanceof(HttpError);
            done();
          });
      });
    });
  });
});

describe('job reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({});
  });

  it('updates jobs if fetch was successful', () => {
    const action = {
      type: actions.FETCH_JOB_SUCCESS,
      job: 'job',
    };
    expect(reducer(undefined, action)).to.equal('job');
  });

  it('updates jobs if fetch failed', () => {
    const action = {
      type: actions.FETCH_JOB_FAIL,
      error: 'error',
    };
    expect(reducer(undefined, action)).to.deep.equal({});
  });
});
