/* eslint-disable react/no-danger */

import React from 'react';
import classnames from 'classnames/bind';
import textStyles from '../component-renderer/styles.css';
import styles from './style.css';

const cx = classnames.bind(styles);

type RawHtmlProps = {
  children: string,
};

const RawHtml = ({ children }: RawHtmlProps) => {
  return (
    <div
      className={cx(textStyles.typography, styles.rawHtml)}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default RawHtml;
