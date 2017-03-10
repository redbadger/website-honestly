import React, { PropTypes } from 'react';
import styles from './style.css';
import EventLinksList from '../../pages/event/event-links-list';

export const linksSection = ({ externalLinks, internalLinks }) => {
  if (externalLinks || internalLinks) {
    return (
      <div className={styles.eventLinks}>
        <EventLinksList linkList={externalLinks} listType="external" />
        <EventLinksList linkList={internalLinks} listType="internal" />
      </div>
    );
  }
  return <noscript />;
};

const EventMeta = (
  {
    internalLinks,
    externalLinks,
  },
) => {
  return (
    <div>
      {linksSection({
        externalLinks,
        internalLinks,
      })}
    </div>
  );
};

EventMeta.propTypes = {
  internalLinks: EventLinksList.propTypes.linkList,
  externalLinks: EventLinksList.propTypes.linkList,
  tags: PropTypes.arrayOf(PropTypes.string),
};

linksSection.propTypes = {
  internalLinks: EventLinksList.propTypes.linkList,
  externalLinks: EventLinksList.propTypes.linkList,
};

export default EventMeta;
