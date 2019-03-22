import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'enzyme';
import createStateNavigator from '../../routes';
import MeetOurTeam from '.';

describe('site/team-slice', () => {
  class Layout extends Component {
    static propTypes = {
      children: PropTypes.element.isRequired,
      stateNavigator: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    static childContextTypes = {
      stateNavigator: PropTypes.object,
    };

    getChildContext() {
      return { stateNavigator: this.props.stateNavigator };
    }

    render() {
      return this.props.children;
    }
  }

  it('should render badgers list', () => {
    const stateNavigator = createStateNavigator();
    stateNavigator.navigate('badgers', null, 'none');

    const teamSlice = render(
      <Layout stateNavigator={stateNavigator}>
        <MeetOurTeam
          categories={[]}
          category="everyone"
          badgers={[{ firstName: 'Alex', slug: 'alex' }]}
          page={1}
        />
      </Layout>,
    );

    const badgersList = teamSlice.find('ul').last();
    expect(badgersList.text()).toMatch(/Alex/);
    expect(badgersList.text()).toMatch(/Are you a potential Badger/);
  });

  describe('with 20 Badgers, first page of Everyone', () => {
    it('should render badgers list with advert and link to page 2', () => {
      const stateNavigator = createStateNavigator();
      stateNavigator.navigate('badgers', null, 'none');

      const badgers = [];
      for (let i = 0; i < 20; i += 1) {
        badgers.push({ firstName: 'Alex ' + i, slug: i });
      }

      const teamSlice = render(
        <Layout stateNavigator={stateNavigator}>
          <MeetOurTeam categories={[]} category="everyone" badgers={badgers} page={1} />
        </Layout>,
      );

      const badgersList = teamSlice
        .find('ul')
        .last()
        .toString();
      const links = teamSlice.find('a');
      const previousLink = links.slice(-2, -1);
      const nextLink = links.slice(-1);
      expect(badgersList).toMatch(/Alex 0/);
      expect(badgersList).toMatch(/Alex 18/);
      expect(badgersList).toMatch(/Are you a potential Badger/);
      expect(badgersList).not.toMatch(/Alex 19/);
      expect(previousLink.attr('href')).toEqual(undefined);
      expect(previousLink.text()).toEqual('Previous page');
      expect(nextLink.attr('href')).toEqual('/people/category/everyone/page-2');
      expect(nextLink.text()).toEqual('Next page');
    });
  });

  describe('with 20 Badgers, second page of Everyone', () => {
    it('should render badgers list with no advert and link to page 1', () => {
      const stateNavigator = createStateNavigator();
      stateNavigator.navigate('badgers', { page: 2 }, 'none');

      const badgers = [];
      for (let i = 0; i < 20; i += 1) {
        badgers.push({ firstName: 'Alex ' + i, slug: i });
      }

      const teamSlice = render(
        <Layout stateNavigator={stateNavigator}>
          <MeetOurTeam categories={[]} category="everyone" badgers={badgers} page={2} />
        </Layout>,
      );

      const badgersList = teamSlice
        .find('ul')
        .last()
        .toString();
      const links = teamSlice.find('a');
      const previousLink = links.slice(-2, -1);
      const nextLink = links.slice(-1);
      expect(badgersList).toMatch(/Alex 19/);
      expect(badgersList).not.toMatch(/Alex 18/);
      expect(badgersList).not.toMatch(/Are you a potential Badger/);
      expect(previousLink.attr('href')).toEqual('/people');
      expect(previousLink.text()).toEqual('Previous page');
      expect(nextLink.attr('href')).toEqual(undefined);
      expect(nextLink.text()).toEqual('Next page');
    });
  });

  describe('with 20 Badgers, first page of Engineering', () => {
    it('should render badgers list with no advert and no link to page 2', () => {
      const stateNavigator = createStateNavigator();
      stateNavigator.navigate('badgers', { category: 'engineering' }, 'none');

      const badgers = [];
      for (let i = 0; i < 20; i += 1) {
        badgers.push({
          firstName: 'Alex ' + i,
          slug: i,
          categories: [{ name: 'Engineering', slug: 'engineering' }],
        });
      }

      const teamSlice = render(
        <Layout stateNavigator={stateNavigator}>
          <MeetOurTeam
            categories={[{ name: 'Engineering', slug: 'engineering' }]}
            category="engineering"
            badgers={badgers}
            page={1}
          />
        </Layout>,
      );

      const badgersList = teamSlice
        .find('ul')
        .last()
        .toString();
      const links = teamSlice.find('a');
      const previousLink = links.slice(-2, -1);
      const nextLink = links.slice(-1);
      expect(badgersList).toMatch(/Alex 0/);
      expect(badgersList).toMatch(/Alex 18/);
      expect(badgersList).toMatch(/Alex 19/);
      expect(badgersList).not.toMatch(/Are you a potential Badger/);
      expect(previousLink.attr('href')).toEqual(undefined);
      expect(previousLink.text()).toEqual('Previous page');
      expect(nextLink.attr('href')).toEqual(undefined);
      expect(nextLink.text()).toEqual('Next page');
    });
  });
});
