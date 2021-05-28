// @flow
import * as React from 'react';

import styles from './style.css';
import image from './image.png';

type State = {
  closed: boolean,
};

export default class StickyModal extends React.Component<any, State> {
  constructor() {
    super();
    this.state = {
      closed: false,
    };
  }

  closeModal() {
    this.setState({
      closed: true,
    });
  }

  render() {
    const { closed } = this.state;
    return (
      <div className={`${styles.stickyModalWrapper}`}>
        {!closed && (
          <div className={styles.stickyModalContent}>
            <div className={styles.stickyModal}>
              <button
                className={styles.stickyModalCloseButton}
                onClick={this.closeModal.bind(this)}
                aria-label="close popup"
                type="button"
              />
              <div className={styles.stickyModalImageWrapper}>
                <img
                  className={styles.stickyModalImage}
                  src={image}
                  alt="illustration, a smiling man looks at his phone as a jet flies away"
                />
              </div>
              <div>
                <h4 className={styles.stickyModalHeading}>
                  Are you delivering seamless customer experiences?
                </h4>
                <p>
                  With lockdown easing and customers returning to venues, restaurants and hotels,
                  how is the hospitality sector responding to supercharged expectations and what can
                  other industries learn from their approach?{' '}
                </p>
                <a
                  href="https://content.red-badger.com/hotels-meet-the-new-expectations"
                  className={styles.stickyModalLink}
                >
                  Download the report
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
