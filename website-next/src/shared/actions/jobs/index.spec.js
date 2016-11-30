import { expect } from 'chai';
import sinon from 'sinon';
import reducer, { fetchSuccessful, fetchFailure, fetchJobs } from './';
import actions from '../actions';

describe('jobs actions', () => {
  describe('fetch success', () => {
    it('returns an object containing jobs and correct type', () => {
      expect(fetchSuccessful('jobs')).to.deep.equal({
        type: actions.FETCH_JOBS_SUCCESS,
        jobs: 'jobs',
      });
    });
  });

  describe('fetch fail', () => {
    it('returns an object containing error and correct type', () => {
      expect(fetchFailure('error')).to.deep.equal({
        type: actions.FETCH_JOBS_FAIL,
        error: 'error',
      });
    });
  });

  describe('fetch jobs', () => {
    let fetchFn;
    let fetch;

    beforeEach(() => {
      fetch = sinon.stub();
      fetchFn = fetchJobs(fetch);
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
          jobs: [],
        };
        getState = () => state;
      });

      it('returns a promise', () => {
        fetch.returns(Promise.resolve());

        expect(fetchFn(dispatch, getState).then).to.be.a('function');
      });

      it('resolves promise immediately if it already has some jobs', (done) => {
        state.jobs.push('job');

        fetchFn(dispatch, getState)
          .then((result) => {
            expect(result).to.deep.equal(state.jobs);
            done();
          });
      });

      it('fetches jobs if it does not have any', () => {
        fetch.returns(Promise.resolve());

        fetchFn(dispatch, getState);

        expect(fetch.calledWith('http://localhost:8000/api/jobs')).to.equal(true);
      });

      it('dispatches success action if all is well', (done) => {
        fetch.returns(Promise.resolve('jobs'));

        fetchFn(dispatch, getState)
          .then(() => {
            expect(dispatch.calledWithMatch(fetchSuccessful('jobs'))).to.equal(true);
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

describe('jobs reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal([]);
  });

  it('updates jobs if fetch was successful', () => {
    const action = {
      type: actions.FETCH_JOBS_SUCCESS,
      jobs: 'jobs',
    };
    expect(reducer(undefined, action)).to.equal('jobs');
  });

  it('updates jobs if fetch failed', () => {
    const action = {
      type: actions.FETCH_JOBS_FAIL,
      error: 'error',
    };
    expect(reducer(undefined, action)).to.deep.equal([]);
  });
});
