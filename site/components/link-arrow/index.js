// @flow
import React from 'react';
import styles from './style.css';
import type { LabelColour } from '../colour-box';

type Props = {
  labelColour: LabelColour,
};

const LinkArrow = ({ labelColour }: Props) => {
  const colourMap = {
    blue: '#00D5EC',
    green: '#22D69B',
    yellow: '#FFD811',
    red: '#FC1D42',
  };

  const colour = colourMap[labelColour];

  return (
    <svg className={styles.arrowLink} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
      <path
        fill={colour}
        fillRule="nonzero"
        stroke={colour}
        d="M11 0l10 10-10 10-1.754-1.754 6.959-7.018H1V8.772h15.205l-6.96-7.018z"
      />
    </svg>
  );
};

export default LinkArrow;
