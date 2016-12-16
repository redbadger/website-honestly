import React from 'react';
import { shallow } from 'enzyme';
import { StateNavigator } from 'navigation';
import Form from '.';

describe('Contact Us Slice - Form state', () => {
  it('component renders successfully', () => {
    const wrapper = shallow(<Form
      errors={{}}
      fatalError={false}
      onSubmit={() => {}}
    />, { context: { stateNavigator: new StateNavigator() } });
    expect(wrapper.text()).not.to.contain('Oops! Looks like something went wrong.');
  });

  it('renders given errors', () => {
    const wrapper = shallow(<Form
      errors={{
        message: 'please write something',
        contact: 'please fill in contact details',
      }}
      fatalError={false}
      onSubmit={() => {}}
    />, { context: { stateNavigator: new StateNavigator() } });
    expect(wrapper.text()).to.contain('please write something');
    expect(wrapper.text()).to.contain('please fill in contact details');
  });

  it('displays an fatalError occured message', () => {
    const wrapper = shallow(<Form
      errors={{}}
      fatalError
      onSubmit={() => {}}
    />, { context: { stateNavigator: new StateNavigator() } });
    expect(wrapper.text()).to.contain('Oops! Looks like something went wrong.');
  });
});
