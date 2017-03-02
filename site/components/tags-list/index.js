import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { cf } from '../utils/layout.css';
import styles from './style.css';

const TagsList = ({
  tags,
}) => {
  if (!tags || tags.length === 0) return (<noscript />);
  return (
    <div className={classNames({
      [cf]: true,
      [styles.tagsList]: true,
    })}>
      <span className={styles.icon} />
      <ul>
        { tags.map((tag, index) => (
          <li key={index}>
            <a href={`/tags/${tag}`}
              className={styles.tagsListLink}
              title={`Read more content related to "${tag}"`}>{tag}</a>
          </li>
        )) }
      </ul>
    </div>
  );
};

TagsList.propTypes = {
  tags: PropTypes.arrayOf(React.PropTypes.string),
};

export default TagsList;
