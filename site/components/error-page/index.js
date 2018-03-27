// @flow
import * as React from 'react';
import Link from '../../components/link';
import styles from './style.css';
import confusedBadger from './png/confused-badger.png';

type ErrorPageProps = {
  title: string,
  content: React.Node,
  linkText?: string,
  linkHref?: string
};

function renderButton(href, text) {
  if (href && text) {
    return (
      <span className={styles.buttonContainer}>
        <Link className={styles.button} to={href}>
          {text}
        </Link>
      </span>
    );
  }
}

export default function ErrorPage({ title, content, linkText, linkHref }: ErrorPageProps) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionContent}>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.content}>
          <img alt="confused badger" className={styles.badger} src={confusedBadger} />
          <span className={styles.copy}>{content}</span>
          {renderButton(linkHref, linkText)}
          <span className={styles.clear} />
        </p>
      </div>
    </div>
  );
}
