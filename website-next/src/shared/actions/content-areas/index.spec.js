import { expect } from 'chai';
import {
  HTML_CONTENT,
  UPDATE_CONTENT_AREA,
  reducer,
  updateContentArea } from './';

describe('updateContentArea action', () => {
  it('creates the correct properties', () => {
    const action = updateContentArea(1, '<p>test</p>');

    expect(action).to.eql({
      type: UPDATE_CONTENT_AREA,
      id: 1,
      content: '<p>test</p>',
    });
  });
});

describe('Content areas reducer', () => {
  it('returns the initial state', () => {
    const state = reducer(undefined, {});

    expect(state).to.have.length(4);
  });

  it('updates the specified content area', () => {
    const action = updateContentArea(1, '<p>I have been updated</p>');

    const state = reducer(undefined, action);

    expect(state).to.include({
      id: 1,
      content: '<p>I have been updated</p>',
      type: HTML_CONTENT,
    });
  });
});
