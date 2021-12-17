// @flow
import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

type ListBoxProps = {
  title?: string,
  items: Array<Object>,
  className?: string,
  itemClassName?: string,
  labelClassName?: string,
  valueClassName?: string,
};

const ListBox = ({
  title,
  items,
  className,
  itemClassName,
  labelClassName,
  valueClassName,
}: ListBoxProps) => {
  return (
    <div className={cx(styles.listBox, className)}>
      {title && <h3 className={styles.listBox__heading}>{title}</h3>}
      <ul>
        {items.map(item => {
          return (
            <li
              key={item.label}
              className={cx('listBox__element', 'listBox__element--results', itemClassName)}
            >
              {(item.link && (
                <a href={item.link}>
                  <div className={labelClassName}>{item.label}</div>
                  <div className={valueClassName}>{item.value}</div>
                </a>
              )) || (
                <>
                  <div className={labelClassName}>{item.label}</div>
                  <div className={valueClassName}>{item.value}</div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListBox;
