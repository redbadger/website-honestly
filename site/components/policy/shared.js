// @flow
/* eslint-disable react/no-unescaped-entities */

import * as React from 'react';

import styles from './style.css';
import { P as BaseParagraph } from '../text';

type ParagraphProps = {
  children: React.Node,
  customClass?: string,
};

export const P = ({ children, customClass = styles.mb10 }: ParagraphProps) => {
  return <BaseParagraph customClass={customClass}>{children}</BaseParagraph>;
};

type Props = { children: React.Node };

export const H3 = ({ children }: Props) => <h3 className={styles.simpleHeading}>{children}</h3>;
export const SerifH3 = ({ children }: Props) => (
  <h3 className={styles.largeSimpleHeading}>{children}</h3>
);
export const H4 = ({ children }: Props) => <h4 className={styles.simpleHeading}>{children}</h4>;
export const B = ({ children }: Props) => <b className={styles.policyTextBold}>{children}</b>;
export const PolicyList = ({ children }: Props) => (
  <ul className={styles.policyList}>{children}</ul>
);
