import React from 'react';
import { shallow, mount } from 'enzyme';
import ContactUs from '.';
import Form from './form/';
import Success from './success/';

describe('Contact Us Slice', () => {
  it('shows pre-signup content if the form has not been submitted yet - default state', () => {
    const wrapper = shallow(<ContactUs />);
    expect(wrapper.find(Form)).to.have.length(1);
  });

  describe('submitForm', () => {
    it('shows the success content after a resolved successful post', done => {
      const sendEmailFn = () =>
        new Promise(resolve => {
          resolve({
            json: () =>
              new Promise(resolveLv2 => {
                resolveLv2({
                  success: true,
                  errors: {},
                });
              }),
          });
        });

      const wrapper = mount(<ContactUs />);
      const promise = wrapper.instance().submitForm({}, sendEmailFn);

      promise
        .then(() => {
          expect(wrapper.find(Form)).to.have.length(0);
          expect(wrapper.find(Success)).to.have.length(1);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('shows the form still after a resolved post with errors', done => {
      const sendEmailFn = () =>
        new Promise(resolve => {
          resolve({
            json: () =>
              new Promise(resolveLv2 => {
                resolveLv2({
                  success: false,
                  errors: {
                    message: 'How can we help? Let us know in the box below.',
                    contact: 'Please let us know the best way of contacting you.',
                  },
                });
              }),
          });
        });

      const wrapper = mount(<ContactUs />);
      const promise = wrapper.instance().submitForm({}, sendEmailFn);

      promise
        .then(() => {
          const formElement = wrapper.find(Form);
          expect(formElement).to.have.length(1);
          expect(wrapper.find(Success)).to.have.length(0);
          expect(formElement.props().errors).to.deep.equal({
            message: 'How can we help? Let us know in the box below.',
            contact: 'Please let us know the best way of contacting you.',
          });

          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('shows the form still after a fatal error', done => {
      const sendEmailFn = () =>
        new Promise((resolve, reject) => {
          reject('whoops');
        });

      const wrapper = mount(<ContactUs />);
      const promise = wrapper.instance().submitForm({}, sendEmailFn);

      promise
        .then(() => {
          const formElement = wrapper.find(Form);
          expect(formElement).to.have.length(1);
          expect(wrapper.find(Success)).to.have.length(0);
          expect(formElement.props().fatalError).to.equal(true);
          done();
        })
        .catch(err => {
          done(err);
        });
    });
  });
});
