// @flow

import React from 'react';
import classnames from 'classnames';
import styles from './style.css';

type Props = {
  currentIndex: number,
  maxIndex: number,
  onChange: number => void,
};

function mapOverRange(count, mapper) {
  const array = [];

  for (let i = 0; i < count; i++) {
    array.push(mapper(i));
  }

  return array;
}

const Navigator = ({ currentIndex, maxIndex, onChange }: Props) => {
  const arrow = direction => (
    <Arrow
      direction={direction}
      onClick={onChange}
      currentIndex={currentIndex}
      lastIndex={maxIndex}
    />
  );

  return (
    <div className={styles.navigator}>
      {arrow('left')}
      {mapOverRange(maxIndex + 1, x => (
        <Item key={x} value={x} currentIndex={currentIndex} />
      ))}
      {arrow('right')}
    </div>
  );
};

type ArrowProps = {
  direction: 'left' | 'right',
  onClick: number => void,
  currentIndex: number,
  lastIndex: number,
};

const Arrow = ({ direction, onClick, currentIndex, lastIndex }: ArrowProps) => {
  const click = () => {
    onClick(direction === 'left' ? currentIndex - 1 : currentIndex + 1);
  };

  const isClickable =
    (direction === 'left' && currentIndex > 0) ||
    (direction === 'right' && currentIndex < lastIndex);

  return (
    <button
      type="button"
      className={classnames({
        [styles.arrow]: true,
        [styles.arrowRight]: direction === 'right',
      })}
      onClick={click}
      aria-label={direction}
      disabled={!isClickable}
    />
  );
};

type ItemProps = {
  value: number,
  currentIndex: number,
};

const Item = ({ value, currentIndex }: ItemProps) => (
  <div
    className={classnames({
      [styles.item]: true,
      [styles.itemActive]: value === currentIndex,
    })}
    aria-label={`slide ${value + 1}`}
  />
);

export default Navigator;
