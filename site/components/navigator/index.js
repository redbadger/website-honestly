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
  return (
    <div className={styles.navigator}>
      <Arrow direction="left" onClick={onChange} currentIndex={currentIndex} lastIndex={maxIndex} />
      {mapOverRange(maxIndex + 1, x => (
        <Item key={x} value={x} currentIndex={currentIndex} />
      ))}
      <Arrow
        direction="right"
        onClick={onChange}
        currentIndex={currentIndex}
        lastIndex={maxIndex}
      />
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
