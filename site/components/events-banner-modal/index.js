import React from 'react';
import ReactGA from 'react-ga';
import Modal from 'react-modal';
import styles from './style.css';
import desktopBanner from './images/events-desktop-banner.jpg';
import tabletBanner from './images/events-tablet-banner.jpg';
import mobileBanner from './images/events-mobile-banner.jpg';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'EventsPageBanner',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

const bannerAltText = 'Are you bold with technology? Join our webinar';

const customStyles = {
  content: {
    right: 'auto',
    bottom: 'auto',
    overflow: 'unset',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '50%',
    width: '80%',
    paddingTop: '40px',
  },
};

export default class EventsBannerModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    trackAnalytics('Webinar-events page -banner');
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <div className={styles.bannerContainer}>
          <a onClick={this.openModal} tabIndex={0} role="button">
            <img src={desktopBanner} alt={bannerAltText} className={styles.eventsDesktopBanner} />
            <img src={tabletBanner} alt={bannerAltText} className={styles.eventsTabletBanner} />
            <img src={mobileBanner} alt={bannerAltText} className={styles.eventsMobileBanner} />
          </a>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Webinar registration form"
          ariaHideApp={false}
        >
          <section className={styles.iframeContainer}>
            <iframe
              src="https://register.gotowebinar.com/register/7636347235394678530?source=rb+event+banner"
              frameBorder={0}
            />
            <button onClick={this.closeModal}>close</button>
          </section>
        </Modal>
      </div>
    );
  }
}
