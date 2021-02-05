/* eslint-disable react/no-danger */
// @no-flow
import React from 'react';
import classnames from 'classnames/bind';
import textStyles from '../component-renderer/styles.css';
import styles from './style.css';

const cx = classnames.bind(styles);

function htmlDecode(input) {
  if (DOMParser) {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.documentElement.textContent;
  }
}

const RawHtml = ({ children, escaped }) => {
  return (
    <div
      className={cx(textStyles.typography, styles.rawHtml)}
      dangerouslySetInnerHTML={{ __html: escaped ? htmlDecode(children) : children }}
    />
  );
};

export default RawHtml;
