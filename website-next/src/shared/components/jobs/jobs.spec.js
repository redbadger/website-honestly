import { Jobs } from './index';
import React from 'react';
import Note from '../note';
import { render, hasProp, containsOne, findAllWithType, findWithType } from '../../test-helper';
import { expect } from 'chai';
import { Link } from 'react-router';
import HtmlParser from '../html-parser';

describe('Jobs', () => {
  const listings = [{
    title: 'Title1',
    description: '<p>First paragraph</p><p>Second one</p>',
    slug: 'title-1',
  }, {
    title: 'Title2',
    description: '<p>Third paragraph</p><p>Fourth one</p>',
    slug: 'title-2',
  }];
  let result;
  let notes;
  let note;

  before(() => {
    result = render(<Jobs jobs={listings} />);
    notes = findAllWithType(Note, result);
    note = notes[0];
  });

  it('renders two notes', () => {
    expect(notes.length).to.equal(2);
  });

  it('renders the title with link', () => {
    const link = findWithType(Link, note);

    expect(hasProp('to', `/about-us/join-us/${listings[0].slug}`)(link)).to.equal(true);
    expect(containsOne(listings[0].title, note)).to.equal(true);
  });

  it('renders the description', () => {
    const parser = findWithType(HtmlParser, note);
    expect(hasProp('children', listings[0].description)(parser)).to.equal(true);
  });
});
