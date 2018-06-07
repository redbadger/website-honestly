// @flow
import * as React from 'react';
import styles from './style.css';
import { H1, P as BaseP, H3 as BaseH3 } from '../../../../components/text';
import BaseQuote from '../../../../components/quote';
import type { Author } from '../../../../components/quote';

type SectionHeadingProps = {
  subHeading: string,
  heading: string,
};

type Props = {
  children?: React.Node,
};

export const Body = ({ children }: Props) => <div className={styles.body}>{children}</div>;

export const PageHeading = ({ children }: Props) => (
  <div className={styles.heading}>
    <H1 type="fontL">{children}</H1>
  </div>
);

export const SectionHeading = ({ subHeading, heading }: SectionHeadingProps) => (
  <h2 className={styles.sectionHeading}>
    <span className={styles.redTitle}>{subHeading}</span>
    {heading}
  </h2>
);

export const SectionBody = ({ children }: Props) => (
  <div className={styles.sectionBody}>{children}</div>
);

type SectionProps = {
  children: React.ChildrenArray<React.Element<typeof SectionBody | typeof SectionHeading>>,
};
export const Section = ({ children }: SectionProps) => (
  <div className={styles.section}>{children}</div>
);

type QuoteProps = { author: Author, text: string } & Props;
export const Quote = ({ children, author, text }: QuoteProps) => (
  <BaseQuote author={author} text={text} className={styles.quote}>
    {children}
  </BaseQuote>
);

export const P = ({ children }: Props) => <BaseP customClass={styles.paragraph}>{children}</BaseP>;

export const H3 = ({ children }: Props) => <BaseH3 type="fontS2">{children}</BaseH3>;

export const UL = ({ children }: Props) => <ul className={styles.list}>{children}</ul>;
