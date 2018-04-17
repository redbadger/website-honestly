// @flow
// Displays list of links related to the event

import React from 'react';

import classNames from 'classnames';
import layout from '../../../components/utils/layout.css';
import styles from './style.css';

type Link = {
  url?: string,
  title?: string,
};

export type LinkList = Array<Link>;

type EventLinksListProps = {
  linkList: LinkList,
  listType: 'external' | 'internal',
};

const EventLinksList = ({ linkList, listType }: EventLinksListProps) => {
  if (!linkList || linkList.length === 0) return null;
  return (
    <div
      className={classNames({
        [styles.eventLinkList]: true,
        [layout.cf]: true,
      })}
    >
      {linkList.map(eventLink => (
        <a
          className={styles.fullDetailsLink}
          href={eventLink.url}
          key={eventLink.url}
          target={listType === 'external' ? '_blank' : null}
          rel={listType === 'external' ? 'noopener' : null}
        >
          <span>{eventLink.title}</span>
        </a>
      ))}
    </div>
  );
};

export default EventLinksList;
