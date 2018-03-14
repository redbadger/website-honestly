import React from 'react';
import Picture from '../../../components/picture';
import styles from './style.css';
import bestCompanyLogo from '../2018-best-small-companies-logo.jpg';

class HeaderContainer extends React.Component {
  static showPicture() {
    const MEDIUM_BREAKPOINT = '(min-width: 690px)';
    return !global.window.matchMedia(MEDIUM_BREAKPOINT).matches;
  }

  state = {
    show: HeaderContainer.showPicture(),
  };

  componentDidMount() {
    global.window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    global.window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({ show: HeaderContainer.showPicture() });
  };

  render() {
    return (
      <div className={styles.headerContainer}>
        {this.state.show && (
          <Picture className={styles.bestCompanyLogo} smallSrc={bestCompanyLogo} />
        )}
        <div className={styles.headings}>
          <h1 className={styles.h1}>Join Us</h1>
          <h3 className={styles.h3}>
            <span>
              Are we what you’re looking <span className={styles.noWrap}>for?*</span>
            </span>
          </h3>
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
