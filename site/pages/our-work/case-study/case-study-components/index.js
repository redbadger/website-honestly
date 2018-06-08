// @flow
import * as React from 'react';
import styles from './style.css';
import { H1, P as BaseP, H3 as BaseH3 } from '../../../../components/text';
import BaseQuote from '../../../../components/quote';
import type { Author } from '../../../../components/quote';

type BodyType = ({ children: React.ChildrenArray<React.Element<any>> }) => React.Node;
export const Body: BodyType = ({ children }) => <div className={styles.body}>{children}</div>;

type PageHeadingType = ({ children: string }) => React.Element<'div'>;
export const PageHeading: PageHeadingType = ({ children }) => (
  <div className={styles.heading}>
    <H1 type="fontL">{children}</H1>
  </div>
);

type SectionHeadingType = ({ subHeading: string, heading: string }) => React.Element<'h2'>;
export const SectionHeading: SectionHeadingType = ({ subHeading, heading }) => (
  <h2 className={styles.sectionHeading}>
    <span className={styles.redTitle}>{subHeading}</span>
    {heading}
  </h2>
);

type SectionBodyType = ({ children: any }) => React.Element<'div'>;
export const SectionBody: SectionBodyType = ({ children }) => (
  <div className={styles.sectionBody}>{children}</div>
);

type SectionType = ({
  children: React.ChildrenArray<React.Element<typeof SectionBody | typeof SectionHeading>>,
}) => React.Element<'div'>;
export const Section: SectionType = ({ children }) => (
  <div className={styles.section}>{children}</div>
);

type QuoteType = ({ author: Author, text: string }) => React.Node;
export const Quote: QuoteType = ({ author, text }) => (
  <BaseQuote author={author} text={text} className={styles.quote} />
);

type PType = ({ children: string }) => React.Node;
export const P: PType = ({ children }) => <BaseP customClass={styles.paragraph}>{children}</BaseP>;

type H3Type = ({ children: string }) => React.Node;
export const H3: H3Type = ({ children }) => <BaseH3 type="fontS2">{children}</BaseH3>;

type ULType = ({ children: React.ChildrenArray<React.Element<'li'>> }) => React.Element<'ul'>;
export const UL: ULType = ({ children }) => <ul className={styles.list}>{children}</ul>;
