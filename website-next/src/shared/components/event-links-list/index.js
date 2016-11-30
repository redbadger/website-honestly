// Displays list of links related to the event

import React, { PropTypes } from 'react';

import classNames from 'classnames';
import layout from '../utils/layout.css';
import icons from '../icons/style.css';
import styles from './style.css';

const EventLinksList = ({
  linkList,
  listType,
}) => {
  if (!linkList || linkList.length === 0) return (<noscript />);
  return (
    <div className={classNames({
      [styles.eventLinkList]: true,
      [layout.cf]: true,
    })}>
      {
        linkList.map(eventLink => (
          <a
            className={styles.fullDetailsLink}
            href={eventLink.url}
            key={eventLink.url}
            target={listType === 'external' ? '_blank' : null}
          >
            <span>{eventLink.title}</span>
            <span className={classNames({
              [icons.sketchExternalLink]: listType === 'external',
              [icons.sketchArrowRight]: listType === 'internal',
              [styles.externalLinkIcon]: true,
            })}
            />
          </a>
        ))
      }
    </div>
  );
};


EventLinksList.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  })),
  listType: React.PropTypes.oneOf(['external', 'internal']).isRequired,
};

export default EventLinksList;
