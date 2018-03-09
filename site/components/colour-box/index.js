// @flow
import React from 'react';
import classNames from 'classnames/bind';
import Link from '../link';
import styles from './style.css';

type Props = {
  children?: Node,
  title: string,
  description: string,
  labelColour: 'blue' | 'green' | 'red' | 'yellow',
  link?: string,
};

const ColourBox = ({ labelColour, title, description, link }: Props) => {
  const styled = classNames({
    [styles[`${labelColour}SubHeading`]]: labelColour,
  });
  return (
    <div>
      <h3 className={styled}>{title}</h3>
      {link ? (
        <Link to={link}>
          <p>
            <span className={styles.description}>{description}</span>
            <svg
              className={styles.arrowLink}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 20"
            >
              <path
                fill="#22D69B"
                fillRule="nonzero"
                stroke="#22D69B"
                d="M11 0l10 10-10 10-1.754-1.754 6.959-7.018H1V8.772h15.205l-6.96-7.018z"
              />
            </svg>
          </p>
        </Link>
      ) : (
        <p>
          <span className={styles.description}>{description}</span>
        </p>
      )}
    </div>
  );
};

export default ColourBox;
