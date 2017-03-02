import React, { Component } from 'react';
import HtmlToReact from 'html-to-react';
import textStyles from '../typography/style.css';
import styles from './style.css';

const { parse } = new HtmlToReact.Parser(React);

export default class HtmlParser extends Component {
  static propTypes = {
    children: React.PropTypes.string.isRequired,
  };

  render() {
    // eslint-disable-next-line max-len
    return parse(`<div class="${textStyles.typography} ${styles.rawHtml}">${this.props.children}</div>`);
  }
}
