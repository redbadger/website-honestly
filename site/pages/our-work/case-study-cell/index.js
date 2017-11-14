import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

type CaseStudyCellProps = {
  [clientName: string]: any,
  [clientLogo: string]: any,
  [image: string]: any,
  [headerText: string]: any,
  [descriptionText: string]: any,
  [linkUrl: string]: any,
};

export default function CaseStudyCell(props: CaseStudyCellProps) {
  return (
    <div className={cx('cell', `cell-${props.clientName}`)}>
      <div className={styles.caseStudyContentContainer}>
        <div className={styles.caseStudyContent}>
          <a href={props.linkUrl}>
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
          </a>
        </div>
      </div>
    </div>
  );
}

CaseStudyCell.propTypes = {
  clientName: PropTypes.string.isRequired,
  clientLogo: PropTypes.string.isRequired,
  image: PropTypes.string,
  headerText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};
