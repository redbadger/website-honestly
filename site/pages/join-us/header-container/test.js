import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import HeaderContainer from './';

describe('<HeaderContainer />', () => {
  describe('#componentDidMount', () => {
    before(() => {
      window.matchMedia = () => ({ matches: false });
    });

    after(() => {
      window.matchMedia = undefined;
    });

    it('calls showPicture()', () => {
      const showPictureSpy = sinon.spy(HeaderContainer, 'showPicture');
      mount(<HeaderContainer />);
      expect(showPictureSpy.calledOnce).to.equal(true);
    });

    describe('#showPicture', () => {
      let matchMediaSpy;

      before(() => {
        matchMediaSpy = sinon.spy(window, 'matchMedia');
      });

      afterEach(() => {
        matchMediaSpy.restore();
      });

      it('calls window.matchMedia function', () => {
        mount(<HeaderContainer />);
        expect(matchMediaSpy.calledOnce).to.equal(true);
      });

      it('calls window.matchMedia function with correct argument', () => {
        mount(<HeaderContainer />);
        expect(matchMediaSpy.calledWith('(min-width: 690px)')).to.equal(true);
      });
    });

    it('state show is true', () => {
      const wrapper = mount(<HeaderContainer />);
      expect(wrapper.state('show')).to.equal(true);
    });
  });
});
