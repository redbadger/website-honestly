import ReactGA from 'react-ga';
import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

const mailToURL = 'mailto:hello@red-badger.com?Subject=Can%20you%20help%20me%20with%20...';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'ContactUsForm',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

class ChecklistContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  onHover = () => {
    this.setState({
      isHovered: true,
    });
  };

  onBlur = () => {
    this.setState({
      isHovered: false,
    });
  };

  render() {
    return (
      <section className={styles.contactUsContainer} id="contactUs">
        <h2 className={styles.header}>We can help you</h2>
        <div className={styles.contentContainer}>
          <ul className={styles.list}>
            <li className={styles.item}>Create & validate new ideas</li>
            <li className={styles.item}>Deliver great quality products & services, fast</li>
            <li className={styles.item}>Be bold with technology</li>
            <li className={styles.item}>Be more customer centric</li>
            <li className={styles.item}>Improve efficiency with lean practices</li>
            <li className={styles.item}>Build capability & confidence</li>
          </ul>
          <div className={cx(styles.imgContainer, this.state.isHovered ? 'isHovered' : '')} />
        </div>
        <div>
          <h3 className={styles.talkToUs}>Send an email to:</h3>
          <a
            href={mailToURL}
            className={styles.mailToLink}
            onMouseEnter={this.onHover}
            onMouseLeave={this.onBlur}
            onClick={trackAnalytics('ContactUsForm - ButtonClicked')}
          >
            hello@red-badger.com
          </a>
        </div>
      </section>
    );
  }
}

export default ChecklistContactUs;
