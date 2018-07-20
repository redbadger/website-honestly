// @flow
import * as React from 'react';
import styles from './style.css';
import { H1, P as BaseP, H3 as BaseH3 } from '../../../../components/text';
import Card from '../../../../components/card';
import Image from '../../../../components/image';
import ContactBox from '../../../../components/contact-box';
import BaseQuote from '../../../../components/quote';
import type { Author } from '../../../../components/quote';

export const PageHeading = ({ children }: { children: string }): React.Element<'div'> => (
  <div className={styles.heading}>
    <H1 type="fontL">{children}</H1>
  </div>
);

export const SectionHeading = ({
  subHeading,
  heading,
}: {|
  subHeading: string,
  heading: string,
|}): React.Element<'h2'> => (
  <h2 className={styles.sectionHeading}>
    <span className={styles.redTitle}>{subHeading}</span>
    {heading}
  </h2>
);

export const SectionBody = ({ children }: { children: any }): React.Element<'div'> => (
  <div className={styles.sectionBody}>{children}</div>
);

export const Section = ({
  children,
}: {|
  children: React.ChildrenArray<
    React.Element<typeof SectionBody | typeof SectionHeading | typeof Card | typeof Image>,
  >,
|}) => <div className={styles.section}>{children}</div>;

export const Quote = ({ author, text }: { author: Author, text: string }) => (
  <BaseQuote author={author} text={text} className={styles.quote} />
);

export const P = ({ children }: { children: React.Node }) => (
  <BaseP customClass={styles.paragraph}>{children}</BaseP>
);

export const H3 = ({ children }: { children: string }) => <BaseH3 type="fontS2">{children}</BaseH3>;

export const UL = ({
  children,
}: {
  children: React.ChildrenArray<React.Element<'li'>>,
}): React.Element<'ul'> => <ul className={styles.list}>{children}</ul>;

type BodyProps = {
  children: React.ChildrenArray<
    React.Element<typeof Section | typeof PageHeading | typeof ContactBox>,
  >,
};
export const Body = ({ children }: BodyProps) => <div className={styles.body}>{children}</div>;
