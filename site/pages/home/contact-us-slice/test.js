import React from 'react';
import { shallow } from 'enzyme';
import ContactUs from '.';
import Form from './form/';
import Success from './success/';

describe('Contact Us Slice', () => {
  it('shows pre-signup content if the form has not been submitted yet - default state', () => {
    const wrapper = shallow(<ContactUs />);
    expect(wrapper.find(Form)).to.have.length(1);
  });

  it('shows success content if the form has been submitted successfully', () => {
    const wrapper = shallow(<ContactUs />);
    wrapper.setState({
      success: true,
    });
    expect(wrapper.find(Success)).to.have.length(1);
  });


  describe('submitForm', () => {

    it('changes the state after a resolved successful post', done => {
      const sendEmailFn = (url, body) => {
        const blankPromise = new Promise(resolve => {
          resolve({
            json: () => '{"success": true,"errors": {}}',
          });
          done();
        });

        return {
          promise: () => blankPromise,
        };
      };

      const wrapper = shallow(<ContactUs />);
      // TODO: make this work with JS's async/promise stuff

      // start with success component
      expect(wrapper.find(Success)).to.have.length(0);

      // trigger submit function
      // it's rigged to send a successful result
      wrapper.instance().submitForm({}, sendEmailFn);

      // should see success component when ^ is done
      expect(wrapper.find(Success)).to.have.length(1);
    });

    it('changes the state after a resolved post with errors', done => {
      const sendEmailFn = () => new Promise(resolve => {
        resolve({
          json: () => '{"success": false,"errors": {"message": "How can we help? Let us know in the box below.","contact": "Please let us know the best way of contacting you."}}',
        });
        done();
      });


      const wrapper = shallow(<ContactUs />);
      // TODO: make this work with JS's async/promise stuff

      // start with no errors passed to Form component
      expect(wrapper.find(Form).props().errors).to.deep.equal({});

      // trigger submit function
      // it's rigged to send a fail result
      wrapper.instance().submitForm({}, sendEmailFn);

      // form component has errors now
      // note: error content is purposefully wrong - it's caught a lot of false positives...
      expect(wrapper.find(Form).props().errors).to.deep.equal({
        message: 'something',
        contact: 'something',
      });
    });

    it('catches fatal errors, and changes the state to fatalError = true');
    it('POSTs to our contact us endpoint with JSONified formData with the right headers');
  });
});
