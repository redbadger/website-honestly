// @flow
import * as React from 'react';
import { Grid, Cell } from '../grid';

type WallProps = {
  children: React.ChildrenArray<any>,
  cols: number,
};

export default function Wall({ children, cols }: WallProps) {
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
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Cell key={index} size={size}>
            {column}
          </Cell>
        );
      })}
    </Grid>
  );
}
