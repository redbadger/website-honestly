// @flow
import * as React from 'react';
import styles from '../../css/typography/_fonts.css';

type ParagraphProps = {
  children: React.Node,
};

export default function Paragraph({ children }: ParagraphProps) {
  return <strong className={styles.boldSansSerif}>{children}</strong>;
}
