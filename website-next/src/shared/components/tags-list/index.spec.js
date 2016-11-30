import { expect } from 'chai';
import React from 'react';
import { render, findAllWithType } from '../../test-helper';
import { shallow } from 'enzyme';
import TagsList from './';

describe('Compoonent: TagsList', () => {
  describe('#render', () => {
    let props;

    beforeEach(() => {
      props = {
        tags: ['react', 'red badger'],
      };
    });

    it('renders a list of tags', () => {
      const component = render(
        <TagsList tags={props.tags} />
      );
      const listItems = findAllWithType('li', component);

      expect(listItems.length).to.equal(2);

      listItems.forEach((element, index) => {
        const tag = props.tags[index];
        const link = element.props.children;

        expect(link.props.href).to.equal(`/tags/${tag}`);
        expect(link.props.title).to.equal(`Read more content related to "${tag}"`);
        expect(link.props.children).to.equal(tag);
      });
    });

    it('renders empty tag when the tags array is empty', () => {
      const component = shallow(
        <TagsList tags={[]} />
      );

      expect(component.text()).to.equal('');
    });

    it('renders noscript tag when the tags array is omitted', () => {
      const component = shallow(
        <TagsList />
      );

      expect(component.text()).to.equal('');
    });
  });
});
