// @flow
import React from 'react';
import styles from './style.css';
import type { LinkList } from '../../pages/event/event-links-list';
import EventLinksList from '../../pages/event/event-links-list';

type linksSectionProps = {
  externalLinks: LinkList,
  internalLinks: LinkList,
};
type EventMetaProps = {
  externalLinks: LinkList,
  internalLinks: LinkList,
  tags?: Array<string>,
};

export const linksSection = ({ externalLinks, internalLinks }: linksSectionProps) => {
  if (externalLinks || internalLinks) {
    return (
      <div className={styles.eventLinks}>
        <EventLinksList linkList={externalLinks} listType="external" />
        <EventLinksList linkList={internalLinks} listType="internal" />
      </div>
    );
  }
  return null;
};

const EventMeta = ({ internalLinks, externalLinks }: EventMetaProps) => {
  return (
    <div>
      {linksSection({
        externalLinks,
        internalLinks,
      })}
    </div>
  );
};

export default EventMeta;
