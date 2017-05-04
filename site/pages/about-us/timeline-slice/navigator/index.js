import React from 'react';
import styles from './style.css';
import Item from './item';
import Arrow from './arrow';

const TimelineNav = ({ currentIndex, onClick }) => {
  return (
    <div className={styles.navigator}>
      <div className={styles.container}>
        <Arrow direction="left" onClick={onClick} currentIndex={currentIndex} />
        <div className={styles.timeline}>
          <Item value={0} onClick={onClick} currentIndex={currentIndex} />
          <Item value={1} onClick={onClick} currentIndex={currentIndex} />
          <Item value={2} onClick={onClick} currentIndex={currentIndex} />
          <Item value={3} onClick={onClick} currentIndex={currentIndex} />
          <Item value={4} onClick={onClick} currentIndex={currentIndex} />
          <Item value={5} onClick={onClick} currentIndex={currentIndex} />
          <Item value={6} onClick={onClick} currentIndex={currentIndex} />
        </div>
        <Arrow direction="right" onClick={onClick} currentIndex={currentIndex} />
      </div>
    </div>
  );
};


TimelineNav.propTypes = {
  currentIndex: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default TimelineNav;
