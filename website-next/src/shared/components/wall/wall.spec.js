import Wall from './index';
import React from 'react';
import { render, findAllWithType } from '../../test-helper';
import { expect } from 'chai';
import { Cell } from '../grid';

describe('Wall', () => {
  let element;
  let cells;

  beforeEach(() => {
    element = render(<Wall cols={4}>{[1, 2, 3, 4, 5, 6, 7, 8, 9]}</Wall>);
    cells = findAllWithType(Cell, element);
  });

  it('renders children in the right number of columns', () => {
    expect(element.props.children.length).to.equal(4);
  });

  it('renders children in the right order when read from left to right', () => {
    expect(cells[0].props.children).to.deep.equal([1, 5, 9]);
    expect(cells[1].props.children).to.deep.equal([2, 6]);
    expect(cells[2].props.children).to.deep.equal([3, 7]);
    expect(cells[3].props.children).to.deep.equal([4, 8]);
  });

  it('renders cells with the right size', () => {
    expect(cells[0].props.size).to.equal(3);
  });
});
