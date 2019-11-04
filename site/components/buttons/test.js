import React from 'react';
import { shallow } from 'enzyme';
import { HubspotButton } from '.';

describe('components/buttons', () => {
  describe('hubspot-buttons', () => {
    const render = props => shallow(<HubspotButton {...props} />);

    it('displays nothing if correct cta does not exits', () => {
      const component = render();
      expect(component).toMatchSnapshot();
    });

    it('adds the correct class for given cta', () => {
      const component = render({ hubspotName: 'webinar' });
      expect(component).toMatchSnapshot();
    });
  });
});
