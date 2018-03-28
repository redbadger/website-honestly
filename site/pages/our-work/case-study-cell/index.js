// @flow
import React from 'react';
import classnames from 'classnames/bind';
import Link from '../../../components/link';
import styles from './style.css';

const cx = classnames.bind(styles);

type CaseStudyCellProps = {
  clientName: string,
  clientLogo: string,
  image: string,
  headerText: string,
  descriptionText: string,
  routeKey: string,
};

export default function CaseStudyCell(props: CaseStudyCellProps) {
  return (
    <div className={cx('cell', `cell-${props.clientName}`)}>
      <div className={styles.caseStudyContentContainer}>
        <div className={styles.caseStudyContent}>
          <Link to={props.routeKey}>
            {/* eslint-disable react/jsx-indent-props, react/jsx-closing-bracket-location */
            /*
              This needs to be disabled due to the way prettier integrates with ESLint at the moment
              ESLint isn't happy with prettiers formatting rules for jsx ternaries:
              https://github.com/prettier/prettier/issues/737 and
              https://github.com/prettier/prettier/issues/1271
            */
            'image' in props && props.image ? (
              <img
                src={props.image}
                className={styles.clientImage}
                alt={`${props.clientName} project`}
              />
            ) : null
            /* eslint-enable react/jsx-indent-props, react/jsx-closing-bracket-location */
            }
            <img
              src={props.clientLogo}
              className={styles[`logo${props.clientName}`]}
              alt={`${props.clientName} logo`}
            />
            <h2
              className={'image' in props && props.image ? styles.normalHeader : styles.largeHeader}
            >
              {props.headerText}
            </h2>
            <p className={styles.description}>{props.descriptionText}</p>
            <div className={styles.links}>
              <p className={styles.readmore}>Read more</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
