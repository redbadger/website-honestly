import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

class NewContactUs extends Component {
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
      <section className={styles.contactUsContainer}>
        <h2 className={styles.header}>Ways we can help you</h2>
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
        <a
          href="mailto:hello@red-badger.com"
          className={styles.button}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onBlur}
        >
          Talk to us
        </a>
      </section>
    );
  }
}

export default NewContactUs;
