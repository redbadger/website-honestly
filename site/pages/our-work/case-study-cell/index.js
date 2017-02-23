import React, { PropTypes } from 'react';
import styles from './style.css';

type CaseStudyCellProps = {
  [clientName: string]: any,
  [clientLogo: string]: any,
  [image: string]: any,
  [headerText: string]: any,
  [descriptionText: string]: any,
  [linkUrl: string]: any,
}

export default function CaseStudyCell(props: CaseStudyCellProps) {
  return (
    <div className={styles.caseStudyContainer} >
      <div className={styles.caseStudyContent}>
        <div className={styles.caseStudyTextContainer} >
          <a href={props.linkUrl}>
            {
              'image' in props && props.image ?
                <img src={props.image} className={styles.clientImage} alt={`${props.clientName} project`} /> : null
            }
            <img src={props.clientLogo} className={styles[`logo${props.clientName}`]} alt={`${props.clientName} logo`} />
            <h2 className={styles.caseStudyTextContainerHeader}>
              {props.headerText}
            </h2>
            <p className={styles.description}>
              {props.descriptionText}
            </p>
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
