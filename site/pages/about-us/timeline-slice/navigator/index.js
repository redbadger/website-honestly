// @flow
import React from 'react';
import styles from './style.css';
import Item from '../../../../components/navigator/item';
import Arrow from '../../../../components/navigator/arrow';

type TimelineNavProps = {
  currentIndex: number,
  onClick: Function,
};

const TimelineNav = ({ currentIndex, onClick }: TimelineNavProps) => {
  return (
    <div className={styles.navigator}>
      <div className={styles.container}>
        <Arrow direction="left" onClick={onClick} currentIndex={currentIndex} lastIndex={7} />
        <div className={styles.timeline}>
          <Item value={0} onClick={onClick} currentIndex={currentIndex} />
          <Item value={1} onClick={onClick} currentIndex={currentIndex} />
          <Item value={2} onClick={onClick} currentIndex={currentIndex} />
          <Item value={3} onClick={onClick} currentIndex={currentIndex} />
          <Item value={4} onClick={onClick} currentIndex={currentIndex} />
          <Item value={5} onClick={onClick} currentIndex={currentIndex} />
          <Item value={6} onClick={onClick} currentIndex={currentIndex} />
          <Item value={7} onClick={onClick} currentIndex={currentIndex} />
        </div>
        <Arrow direction="right" onClick={onClick} currentIndex={currentIndex} lastIndex={7} />
      </div>
    </div>
  );
};

export default TimelineNav;
