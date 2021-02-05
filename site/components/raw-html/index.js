/* eslint-disable react/no-danger */
// @flow
import React from 'react';
import classnames from 'classnames/bind';
import textStyles from '../component-renderer/styles.css';
import styles from './style.css';

const cx = classnames.bind(styles);

type RawHtmlProps = {
  children: string,
  escaped?: Boolean,
};

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
}

const RawHtml = ({ children, escaped }: RawHtmlProps) => {
  return (
    <div
      className={cx(textStyles.typography, styles.rawHtml)}
      dangerouslySetInnerHTML={{ __html: escaped ? htmlDecode(children) : children }}
    />
  );
};

export default RawHtml;
