import React from 'react';
import { Grid, Cell } from '../grid';

const { node, number } = React.PropTypes;

export default function Wall({ children, cols }) {
  const elements = [];

  children.forEach((item, index) => {
    const field = index % cols;

    if (field >= elements.length) {
      elements[field] = [];
    }

    elements[field].push(item);
  });

  return (
    <Grid>
      {elements.map((column, index) => {
        const size = Math.floor(12 / cols);
        return <Cell key={index} size={size}>{column}</Cell>;
      })}
    </Grid>
  );
}

Wall.propTypes = {
  children: node.isRequired,
  cols: number.isRequired,
};
