// @flow
import React from 'react';
import styles from './style.css';

type ShowMoreIconProps = {
  cssModifier?: string,
  bars: number,
};

const BurgerMenuIcon = ({ cssModifier, bars }: ShowMoreIconProps) => {
  const barElements = [];
  for (let i = 0; i < bars; i++) {
    barElements.push(<div className={styles.bar} />);
  }
  return (
    <div className={`${styles.button__more} ${cssModifier || ''}`}>
      {barElements.map(barelement => barelement)}
    </div>
  );
};

export default BurgerMenuIcon;
