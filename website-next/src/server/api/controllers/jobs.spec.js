import JobsController from './jobs';
import { expect } from 'chai';
import sinon from 'sinon';
import isFunction from 'lodash/isFunction';
import noop from 'lodash/noop';
import HttpError from '../../../shared/util/http-error';

describe('Job Workable Routes', () => {
  describe('getJobs', () => {
    let mockWorkable;
    let jobsController;
    let req;
    let res;

    beforeEach(() => {
      req = {};
      res = {};
      mockWorkable = {
        getJobs: sinon.stub(),
      };
      jobsController = new JobsController(mockWorkable);
    });

    it('is a function', () => {
      expect(isFunction(jobsController.getJobs)).to.equal(true);
    });

    describe('when workable.getJobs resolves', () => {
      it('calls response.send with resolved value', (done) => {
        res.send = (value) => {
          expect(value).to.equal('test');
          done();
        };
        mockWorkable.getJobs.returns(Promise.resolve('test'));
        jobsController.getJobs(req, res);
      });
    });

    describe('when workable.getJobs rejects', () => {
      let error;

      beforeEach(() => {
        error = new HttpError(500);
        res.status = () => res;
        res.send = noop;
        mockWorkable.getJobs.returns(Promise.reject(error));
      });

      it('calls response.status with error status', (done) => {
        res.status = (value) => {
          expect(value).to.equal(error.status);
          done();
        };
        jobsController.getJobs(req, res);
      });

      it('calls response.send with error message', (done) => {
        res.send = (value) => {
          expect(value).to.equal(error.message);
          done();
        };
        jobsController.getJobs(req, res);
      });
    });
  });
});
