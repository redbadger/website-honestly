import React, { Component } from 'react';
import HtmlToReact from 'html-to-react';
import styles from '../typography/style.css';

const { parse } = new HtmlToReact.Parser(React);

export default class HtmlParser extends Component {
  static propTypes = {
    children: React.PropTypes.string.isRequired,
  };

  render() {
    // eslint-disable-next-line max-len
    return parse(`<div class="${styles.typography}">${this.props.children}</div>`);
  }
}
