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

// We need to bump the z-index to make the modal appear above the logo
// in the header.
const modalStyles = { overlay: { zIndex: 20 } };

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
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    document.body.style.overflow = 'scroll';
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
          contentLabel="Webinar registration form"
          ariaHideApp={false}
          className={styles.modal}
          style={modalStyles}
        >
          <section className={styles.iframeContainer}>
            <iframe
              title="webinars"
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/85WgmD2BguI?list=PLW6ORi0XZU0DF9rlBzgro6YGTTm5DfPjb"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button onClick={this.closeModal} className={styles.iframeContainerCloseButton}>
              Close
            </button>
          </section>
        </Modal>
      </div>
    );
  }
}
