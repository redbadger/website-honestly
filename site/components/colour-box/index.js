// @flow
import React from 'react';
import classNames from 'classnames/bind';
import Link from '../link';
import LinkArrow from '../link-arrow';
import styles from './style.css';

export type LabelColour = 'blue' | 'green' | 'red' | 'yellow';

type Props = {
  children?: Node,
  title: string,
  description: string,
  labelColour: LabelColour,
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
            <LinkArrow labelColour={labelColour} />
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
