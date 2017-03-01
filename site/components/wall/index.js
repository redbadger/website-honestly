import React, { Component } from 'react';
import { Grid, Cell } from '../grid';

const { node, number } = React.PropTypes;

export default class Wall extends Component {
  static propTypes = {
    children: node.isRequired,
    cols: number.isRequired,
  };

  render() {
    const elements = [];

    this.props.children.forEach((item, index) => {
      const field = index % this.props.cols;

      if (field >= elements.length) {
        elements[field] = [];
      }

      elements[field].push(item);
    });

    return (
      <Grid>
        {elements.map((column, index) => {
          const size = Math.floor(12 / this.props.cols);
          return (<Cell key={index} size={size}>{column}</Cell>);
        })}
      </Grid>
    );
  }
}
