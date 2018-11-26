import React from 'react';
import { shallow } from 'enzyme';

import PrivacyPolicy from './index';

describe('site/pages/privacy-policy', () => {
  it('renders correctly', () => {
    expect(shallow(<PrivacyPolicy />)).toMatchSnapshot();
  });
});
